---
description: Describes how to develop a Watcher function block.
title: Watcher Function Module Development Guide
image: https://files.seeedstudio.com/wiki/watcher_software_framework/watcher_function_module.webp
slug: /es/watcher_function_module_development_guide
sidebar_position: 3
last_update:
  date: 07/25/2025
  author: Guillermo
---

# Guía de Desarrollo de Módulos Funcionales para Watcher

Se recomienda leer primero el [Marco de Software de Watcher](https://wiki.seeedstudio.com/watcher_software_framework) para entender cómo funcionan los módulos funcionales.

En esta documentación, mostraremos una guía paso a paso sobre cómo desarrollar un nuevo módulo funcional. Tomaremos como ejemplo el módulo `UART Alarm`.

## 1. Instalación y primera compilación

Por favor, sigue los pasos en [Construir el Entorno de Desarrollo de Watcher](https://wiki.seeedstudio.com/build_watcher_development_environment) si aún no lo has hecho.

```shell
# you're in PROJ_ROOT_DIR/examples/factory_firmware/
cd main/task_flow_module
```

## 2. Elegir una plantilla adecuada

En el [Marco de Software de Watcher](https://wiki.seeedstudio.com/watcher_software_framework) presentamos los módulos funcionales existentes (abreviados como **FM** en el resto de esta documentación) y para qué se utilizan. Cuando desarrollamos un nuevo FM, es mejor comenzar a partir del FM existente más cercano como referencia. En este tutorial vamos a desarrollar un FM de alarma, por lo tanto elegimos uno de los FMs de alarma; `local alarmer` es el más simple, lo tomaremos como base.

```shell
cp tf_module_local_alarm.h tf_module_uart_alarm.h
cp tf_module_local_alarm.c tf_module_uart_alarm.c
```

No importa qué nombre tengan los archivos, cualquier archivo `.h` y `.c` será escaneado por el sistema de compilación e incluido en el árbol de código a compilar. Aun así, se recomienda usar nombres de archivo significativos.

## 3. Implementar el registro

El **TFE** (motor de flujo de tareas) proporciona una función API para registrar un nuevo FM.

```cpp
esp_err_t tf_module_register(const char *p_name,
                                const char *p_desc,
                                const char *p_version,
                                tf_module_mgmt_t *mgmt_handle);
```

Los tres primeros parámetros son el nombre, la descripción y la versión de tu FM. Actualmente se utilizan internamente, por ejemplo, para hacer coincidir el FM en la tabla de registros, impresión de logs, etc., pero se utilizarán en el futuro cuando los FMs se comuniquen con un servicio local.

```cpp
// in tf_module_uart_alarm.h
#define TF_MODULE_UART_ALARM_NAME "uart alarm"
#define TF_MODULE_UART_ALARM_VERSION "1.0.0"
#define TF_MODULE_UART_ALARM_DESC "uart alarm function module"

// in tf_module_uart_alarm.c
esp_err_t tf_module_uart_alarm_register(void)
{
    return tf_module_register(TF_MODULE_UART_ALARM_NAME,
                              TF_MODULE_UART_ALARM_DESC,
                              TF_MODULE_UART_ALARM_VERSION,
                              &__g_module_management);
}
```

El cuarto parámetro es una estructura que contiene las funciones API necesarias para gestionar el ciclo de vida de este FM.

```cpp
// in tf_module.h
typedef struct tf_module_mgmt {
    tf_module_t *(*tf_module_instance)(void);
    void (*tf_module_destroy)(tf_module_t *p_module);
}tf_module_mgmt_t;
```

`tf_module_instance` es una función que será llamada por el TFE cuando el motor esté inicializando todos los FMs especificados en un flujo de tareas; esto significa, básicamente, que el motor ha recibido una solicitud de creación de flujo y está comenzando a ejecutarlo. `tf_module_destroy` es una función que se llamará cuando el TFE detenga el flujo.

### 3.1 Instancia

```cpp
tf_module_t *tf_module_uart_alarm_instance(void)
{
    tf_module_uart_alarm_t *p_module_ins = (tf_module_uart_alarm_t *) tf_malloc(sizeof(tf_module_uart_alarm_t));
    if (p_module_ins == NULL)
    {
        return NULL;
    }
    p_module_ins->module_base.p_module = p_module_ins;
    p_module_ins->module_base.ops = &__g_module_ops;

    if (atomic_fetch_add(&g_ins_cnt, 1) == 0) {
        // the 1st time instance, we should init the hardware
        esp_err_t ret;
        uart_config_t uart_config = {
            .baud_rate = 115200,
            .data_bits = UART_DATA_8_BITS,
            .parity = UART_PARITY_DISABLE,
            .stop_bits = UART_STOP_BITS_1,
            .flow_ctrl = UART_HW_FLOWCTRL_DISABLE,
        };
        const int buffer_size = 2 * 1024;
        ESP_GOTO_ON_ERROR(uart_param_config(UART_NUM_2, &uart_config), err, TAG, "uart_param_config failed");
        ESP_GOTO_ON_ERROR(uart_set_pin(UART_NUM_2, GPIO_NUM_19, GPIO_NUM_20, -1, -1), err, TAG, "uart_set_pin failed");
        ESP_GOTO_ON_ERROR(uart_driver_install(UART_NUM_2, buffer_size, buffer_size, 0, NULL, ESP_INTR_FLAG_SHARED), err, TAG, "uart_driver_install failed");
    }

    return &p_module_ins->module_base;

err:
    free(p_module_ins);
    return NULL;
}
```

La implementación anterior corresponde a la función `instance`. Esta función asigna memoria para una estructura `tf_module_uart_alarm_t`, que definimos para contener los parámetros de este FM, como si fueran miembros de una clase en C++. En la estructura `tf_module_uart_alarm_t`, el primer campo es importante: `tf_module_t module_base`. Desde la perspectiva de la programación en C++, `tf_module_t` actúa como la clase padre de todos los FMs. La función `instance` simplemente le proporciona al TFE un puntero a una estructura `tf_module_t`.

```cpp
// in tf_module_uart_alarm.h
typedef struct {
    tf_module_t module_base;
    int input_evt_id;           //this can also be the module instance id
    int output_format;          //default 0, see comment above
    bool include_big_image;     //default: false
    bool include_small_image;   //default: false
    bool include_boxes;         //default: false, coming soon
} tf_module_uart_alarm_t;

// in tf_module_uart_alarm.c
tf_module_t *tf_module_uart_alarm_instance(void)
{
    ...
    return &p_module_ins->module_base;
    ...
}
```

Hay dos miembros de `tf_module_t` que deben asignarse obligatoriamente:

```cpp
// in tf_module_uart_alarm.c
tf_module_t *tf_module_uart_alarm_instance(void)
{
    ...
    p_module_ins->module_base.p_module = p_module_ins;
    p_module_ins->module_base.ops = &__g_module_ops;
```
- `p_module`: un puntero que refiere a la instancia del propio FM. Este se utiliza en la función `destroy` para obtener un manejador de la instancia y liberar la memoria correspondiente.
- `ops`: una estructura que contiene las funciones API para operar el FM desde el TFE; hablaremos más sobre esto más adelante.

El resto de la función `instance` se dedica a inicializar el hardware y los elementos relacionados con la lógica del FM.

Cabe mencionar un aspecto importante: un FM puede ser instanciado múltiples veces. Debes manejar correctamente la reentrada de la función `instance`, y si tu FM no admite múltiples instancias, debes devolver un puntero NULL en la segunda llamada a la función `instance`.

En este ejemplo del `uart alarmer`, usaremos un contador de referencias para manejar la lógica de reentrada.

```cpp
if (atomic_fetch_add(&g_ins_cnt, 1) == 0) {
        // the 1st time instance, we should init the hardware
        esp_err_t ret;
        uart_config_t uart_config = {
            .baud_rate = 115200,
            .data_bits = UART_DATA_8_BITS,
            .parity = UART_PARITY_DISABLE,
            .stop_bits = UART_STOP_BITS_1,
            .flow_ctrl = UART_HW_FLOWCTRL_DISABLE,
        };
        const int buffer_size = 2 * 1024;
        ESP_GOTO_ON_ERROR(uart_param_config(UART_NUM_2, &uart_config), err, TAG, "uart_param_config failed");
        ESP_GOTO_ON_ERROR(uart_set_pin(UART_NUM_2, GPIO_NUM_19, GPIO_NUM_20, -1, -1), err, TAG, "uart_set_pin failed");
        ESP_GOTO_ON_ERROR(uart_driver_install(UART_NUM_2, buffer_size, buffer_size, 0, NULL, ESP_INTR_FLAG_SHARED), err, TAG, "uart_driver_install failed");
    }
```

### 3.2 Destroy

```cpp
void tf_module_uart_alarm_destroy(tf_module_t *p_module_base)
{
    if (p_module_base) {
        if (atomic_fetch_sub(&g_ins_cnt, 1) <= 1) {
            // this is the last destroy call, de-init the uart
            uart_driver_delete(UART_NUM_2);
            ESP_LOGI(TAG, "uart driver is deleted.");
        }
        if (p_module_base->p_module) {
            free(p_module_base->p_module);
        }
    }
}
```

`destroy` siempre es simple 😂 Solo necesitamos liberar la memoria y desinicializar el hardware si es necesario.

## 4. Implementar las operaciones

El miembro `ops` de nuestra clase base está definido de la siguiente manera:

```c
struct tf_module_ops
{
    int (*start)(void *p_module);
    int (*stop)(void *p_module);
    int (*cfg)(void *p_module, cJSON *p_json);
    int (*msgs_sub_set)(void *p_module, int evt_id);
    int (*msgs_pub_set)(void *p_module, int output_index, int *p_evt_id, int num);
};
```

Cuando el TFE inicializa el FM, llamará a estas funciones en el siguiente orden: `cfg` -> `msgs_sub_set` -> `msgs_pub_set` -> `start` -> `stop`.

- `cfg`: Toma los parámetros del JSON del task flow y los utiliza para configurar tu FM.

- `msgs_sub_set`: Crea la conexión con el FM anterior (up-stream), registrando un manejador de eventos con el ID del evento del FM anterior. El parámetro de entrada `evt_id` es preparado por el TFE extrayéndolo del JSON del task flow. El primer parámetro `p_module` es el puntero a la instancia del FM en sí.

- `msgs_pub_set`: Almacena las conexiones con los FMs siguientes (down-stream). Si este FM no tiene salida, podemos dejar esta función vacía. El primer parámetro `p_module` es el puntero a la instancia del FM. El segundo parámetro `output_index` es el número de puerto, por ejemplo, si este FM tiene 2 salidas, `msgs_pub_set` se llamará dos veces, con `output_index` = 0 y 1 sucesivamente. El tercer parámetro `p_evt_id` es un puntero a un arreglo que contiene todos los IDs de eventos de los FMs siguientes en ese puerto; el tamaño del arreglo es `num`, que es el último parámetro.

- `start` y `stop`: Hacen exactamente lo que su nombre indica. Ambas toman `p_module` como parámetro, que es el puntero a la instancia del FM.

### 4.1 cfg

```cpp
static int __cfg(void *p_module, cJSON *p_json)
{
    tf_module_uart_alarm_t *p_module_ins = (tf_module_uart_alarm_t *)p_module;

    cJSON *output_format = cJSON_GetObjectItem(p_json, "output_format");
    if (output_format == NULL || !cJSON_IsNumber(output_format))
    {
        ESP_LOGE(TAG, "params output_format missing, default 0 (binary output)");
        p_module_ins->output_format = 0;
    } else {
        ESP_LOGI(TAG, "params output_format=%d", output_format->valueint);
        p_module_ins->output_format = output_format->valueint;
    }

    cJSON *include_big_image = cJSON_GetObjectItem(p_json, "include_big_image");
    if (include_big_image == NULL || !cJSON_IsBool(include_big_image))
    {
        ESP_LOGE(TAG, "params include_big_image missing, default false");
        p_module_ins->include_big_image = false;
    } else {
        ESP_LOGI(TAG, "params include_big_image=%s", cJSON_IsTrue(include_big_image)?"true":"false");
        p_module_ins->include_big_image = cJSON_IsTrue(include_big_image);
    }

    cJSON *include_small_image = cJSON_GetObjectItem(p_json, "include_small_image");
    if (include_small_image == NULL || !cJSON_IsBool(include_small_image))
    {
        ESP_LOGE(TAG, "params include_small_image missing, default false");
        p_module_ins->include_small_image = false;
    } else {
        ESP_LOGI(TAG, "params include_small_image=%s", cJSON_IsTrue(include_small_image)?"true":"false");
        p_module_ins->include_small_image = cJSON_IsTrue(include_small_image);
    }

    cJSON *include_boxes = cJSON_GetObjectItem(p_json, "include_boxes");
    if (include_boxes == NULL || !cJSON_IsBool(include_boxes))
    {
        ESP_LOGE(TAG, "params include_boxes missing, default false");
        p_module_ins->include_boxes = false;
    } else {
        ESP_LOGI(TAG, "params include_boxes=%s", cJSON_IsTrue(include_boxes)?"true":"false");
        p_module_ins->include_boxes = cJSON_IsTrue(include_boxes);
    }
    return 0;
}
```

Como puedes ver, la función `cfg` simplemente extrae los valores de los campos desde el objeto `cJSON`, el cual proviene del campo `params` del objeto FM dentro de un task flow. Por ejemplo, el siguiente es un task flow simple que incluye el módulo FM `uart alarmer`.

```json
{
  "tlid": 3,
  "ctd": 3,
  "tn": "Local Human Detection",
  "type": 0,
  "task_flow": [
    {
      "id": 1,
      "type": "ai camera",
      "index": 0,
      "version": "1.0.0",
      "params": {
        "model_type": 1,
        "modes": 0,
        "model": {
          "arguments": {
            "iou": 45,
            "conf": 50
          }
        },
        "conditions": [
          {
            "class": "person",
            "mode": 1,
            "type": 2,
            "num": 0
          }
        ],
        "conditions_combo": 0,
        "silent_period": {
          "silence_duration": 5
        },
        "output_type": 0,
        "shutter": 0
      },
      "wires": [
        [2]
      ]
    },
    {
      "id": 2,
      "type": "alarm trigger",
      "index": 1,
      "version": "1.0.0",
      "params": {
        "text": "human detected",
        "audio": ""
      },
      "wires": [
        [3]
      ]
    },
    {
      "id": 3,
      "type": "uart alarm",
      "index": 2,
      "version": "1.0.0",
      "params": {
        "output_format": 1,
        "include_big_image": false,
        "include_small_image": false
      },
      "wires": []
    }
  ]
}
```

En el task flow anterior, los `params` para el `uart alarmer` son los siguientes. 

```json
{
  "output_format": 1,
  "include_big_image": false,
  "include_small_image": false
}
```

Analizamos el objeto `cJSON`, extraemos los valores necesarios y los almacenamos típicamente en la instancia del módulo.

### 4.2 msgs_sub_set

```cpp
static int __msgs_sub_set(void *p_module, int evt_id)
{
    tf_module_uart_alarm_t *p_module_ins = (tf_module_uart_alarm_t *)p_module;
    p_module_ins->input_evt_id = evt_id;
    return tf_event_handler_register(evt_id, __event_handler, p_module_ins);
}
```

Registramos el `event id` del módulo anterior (up-stream FM) para su uso posterior, y registramos un manejador de eventos (`event handler`) para ese evento.

### 4.3 Manejador de eventos

En el [Marco de Software de Watcher](https://wiki.seeedstudio.com/watcher_software_framework) aprendimos que el flujo de datos está impulsado por un bucle de eventos (`event loop`). Básicamente, un módulo funcional (FM) recibe datos desde su manejador de eventos, los consume, realiza cálculos y obtiene algún resultado. Finalmente, debe publicar ese resultado en el bucle de eventos — cuyo destino son los FMs posteriores (down-stream) que estén interesados en los datos de este FM.

En este ejemplo de `uart alarmer`, consumimos datos provenientes de un FM de tipo `alarm trigger`, el cual tiene el tipo de salida `TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT`. Dado que la preparación de datos UART es sencilla, generamos todos los datos dentro del manejador del bucle de eventos. Sin embargo, **esto no es recomendable** si el procesamiento de datos es intensivo o implica operaciones de entrada/salida (IO). En esos casos, se debe crear una tarea (`task`) o hilo (`thread`) de trabajo para manejar el procesamiento en segundo plano.

Preparamos un búfer de salida binario o una cadena JSON, dependiendo del parámetro de entrada `output_format`. Finalmente, escribimos estos datos en el puerto UART. Nuestro FM solo tiene una salida —el hardware UART— y no otro FM, por lo tanto, la función `msgs_pub_set` es simplemente un "dummy". Al final, debemos liberar la memoria de los datos recibidos del bucle de eventos; la razón de esto se explicará en la siguiente sección.

### 4.4 `msgs_pub_set`

En este ejemplo, `msgs_pub_set` es una función dummy porque nuestro FM no tiene módulos consumidores posteriores. Tomemos como ejemplo el FM `ai camera` para ver un caso con múltiples salidas.

```cpp
// in tf_module_ai_camera.c
static int __msgs_pub_set(void *p_module, int output_index, int *p_evt_id, int num)
{
    tf_module_ai_camera_t *p_module_ins = (tf_module_ai_camera_t *)p_module;
    __data_lock(p_module_ins);
    if (output_index == 0 && num > 0)
    {
        p_module_ins->p_output_evt_id = (int *)tf_malloc(sizeof(int) * num);
        if (p_module_ins->p_output_evt_id )
        {
            memcpy(p_module_ins->p_output_evt_id, p_evt_id, sizeof(int) * num);
            p_module_ins->output_evt_num = num;
        } else {
            ESP_LOGE(TAG, "Failed to malloc p_output_evt_id");
            p_module_ins->output_evt_num = 0;
        }
    }
    else
    {
        ESP_LOGW(TAG, "Only support output port 0, ignore %d", output_index);
    }
    __data_unlock(p_module_ins);
    return 0;
}
```

No es complicado, solo se deben almacenar los `event id` dentro de la estructura del FM (módulo funcional). En este punto es donde necesitas agregar un nuevo campo en la estructura de tipo de tu FM, en este caso `tf_module_ai_camera_t`.

¿Y cuándo usaremos estos `event ids`? En el momento en que se genera un dato y pasa por la compuerta de control de tiempo. En el ejemplo del `ai camera`, los datos se originan a partir de la salida SPI del SoC Himax que ejecuta la inferencia IA local, y luego pasan por varias compuertas de condición. Si todas las condiciones se cumplen, los datos alcanzan el momento en que deben ser enviados al bucle de eventos (`event loop`).

```cpp
// in tf_module_ai_camera.c
...
                    for (int i = 0; i < p_module_ins->output_evt_num; i++)
                    {
                        tf_data_image_copy(&p_module_ins->output_data.img_small, &info.img);
                        tf_data_inference_copy(&p_module_ins->output_data.inference, &info.inference);

                        ret = tf_event_post(p_module_ins->p_output_evt_id[i], &p_module_ins->output_data, sizeof(p_module_ins->output_data), pdMS_TO_TICKS(100));
                        if( ret != ESP_OK) {
                            ESP_LOGE(TAG, "Failed to post event %d", p_module_ins->p_output_evt_id[i]);
                            tf_data_free(&p_module_ins->output_data);
                        } else {
                            ESP_LOGI(TAG, "Output -> %d", p_module_ins->p_output_evt_id[i]);
                        }
                    }
...
```

Necesitamos publicar los datos a cada suscriptor de nuestra salida. Como se puede observar, realizamos una **copia de los datos para cada suscriptor**.

**REGLA DE ASIGNACIÓN Y LIBERACIÓN DE MEMORIA**
- El FM generador de datos se encarga de **asignar memoria** para cada suscriptor.
- El FM consumidor de datos se encarga de **liberar la memoria** una vez que los datos ya no son necesarios.

### 4.5 `start` y `stop`

Estas funciones son controles de tiempo de ejecución para el FM, pensados para soportar la pausa/reanudación de los flujos en el futuro. Actualmente puedes hacer que el FM comience a funcionar inmediatamente después de ser instanciado, pero se recomienda separar claramente la lógica de gestión del ciclo de vida del FM y su control de ejecución en tiempo de ejecución.

## 5. Prueba

Ahora que tenemos nuestro FM `uart alarmer`, antes de enviar una *pull request*, ¿cómo podemos probarlo localmente?

Implementamos un comando de consola para emitir un flujo de tareas (`task flow`) localmente.

```shell
SenseCAP> help taskflow
taskflow  [-iej] [-f <string>]
  import taskflow by json string or SD file, eg:taskflow -i -f "test.json".

export taskflow to stdout or SD file, eg: taskflow -e -f "test.json"
  -i, --import  import taskflow
  -e, --export  export taskflow
  -f, --file=<string>  File path, import or export taskflow json string by SD, eg: test.json
    -j, --json  import taskflow json string by stdin
```

Por favor, consulta [Build the Watcher Development Environment](https://wiki.seeedstudio.com/build_watcher_development_environment) - `5. Monitor the log output` para acceder a la consola. Prepara un flujo de tareas eliminando los espacios y caracteres en blanco, y emite el flujo con:

```shell
taskflow -i -j<enter>
Please input taskflow json:
#<paste your task flow json here, for an example>
{"tlid":3,"ctd":3,"tn":"Local Human Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":1,"modes":0,"model":{"arguments":{"iou":45,"conf":50}},"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"human detected","audio":""},"wires":[[3]]},{"id":3,"type":"uart alarm","index":2,"version":"1.0.0","params":{"output_format":1},"wires":[]}]}
```

¿Cómo componer un flujo de tareas? En el [Watcher Software Framework](https://wiki.seeedstudio.com/watcher_software_framework) presentamos cada módulo funcional (FM) y sus parámetros. Componer un flujo de tareas es prácticamente como dibujar conexiones entre bloques FM, como en Node-RED.

Antes de tener una interfaz gráfica para componer el flujo de tareas, podemos usar el comando de exportación para recolectar ejemplos. Simplemente usa la aplicación móvil para emitir un flujo con una función de alarma local habilitada (luz RGB); cuando el flujo esté en ejecución, exporta el flujo de tareas con:

```shell
taskflow -e
```

Este comando exportará el flujo de tareas en ejecución a la consola. Si el flujo es demasiado largo, su salida puede ser interrumpida por otros registros; en ese caso, necesitamos una tarjeta TF. Formatea la tarjeta TF en sistema de archivos FAT/exFAT, insértala en el Watcher. Ahora podemos exportar el flujo de tareas en ejecución a la tarjeta TF.

```shell
taskflow -e -f tf1.json
# only support file name in the root dir
# please don't specify leading dir in the path, the command can't create dir
```

Ahora que tienes ejemplos, modifica uno de los módulos de alarma (generalmente es el último FM), reemplázalo por tu FM `uart alarmer`, agrega unos cuantos parámetros al objeto JSON de tu FM, usa un editor JSON para eliminar los espacios en blanco e impórtalo con el comando `taskflow -i -j` mencionado arriba.

Eso es todo, disfruta la exploración.

## Apéndice - Más ejemplos de flujos de tareas

Aquí proporcionamos algunos ejemplos adicionales de flujos de tareas con los que puedes comenzar.

```json
{"tlid":3,"ctd":3,"tn":"Local Human Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":1,"modes":0,"model":{"arguments":{"iou":45,"conf":50}},"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"human detected","audio":""},"wires":[[3,4]]},{"id":3,"type":"local alarm","index":2,"version":"1.0.0","params":{"sound":1,"rgb":1,"img":0,"text":0,"duration":1},"wires":[]},{"id":4,"type":"sensecraft alarm","index":3,"version":"1.0.0","params":{"silence_duration":30},"wires":[]}]}
```

```json
{"tlid":1,"ctd":1,"tn":"Local Gesture Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":3,"modes":0,"model":{"arguments":{"iou":45,"conf":65}},"conditions":[{"class":"paper","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"scissors detected","audio":""},"wires":[[3,4]]},{"id":3,"type":"local alarm","index":2,"version":"1.0.0","params":{"sound":1,"rgb":1,"img":0,"text":0,"duration":1},"wires":[]},{"id":4,"type":"sensecraft alarm","index":3,"version":"1.0.0","params":{"silence_duration":30},"wires":[]}]}
```

```json
{"tlid":1719396404172,"ctd":1719396419707,"tn":"Man with glasses spotted, notify immediately","task_flow":[{"id":753589649,"type":"ai camera","type_id":0,"index":0,"vision":"0.0.1","params":{"model_type":0,"model":{"model_id":"60086","version":"1.0.0","arguments":{"size":1644.08,"url":"https://sensecraft-statics.oss-accelerate.aliyuncs.com/refer/model/1705306215159_jVQf4u_swift_yolo_nano_person_192_int8_vela(2).tflite","icon":"https://sensecraft-statics.oss-accelerate.aliyuncs.com/refer/pic/1705306138275_iykYXV_detection_person.png","task":"detect","createdAt":1705306231,"updatedAt":null},"model_name":"Person Detection--Swift YOLO","model_format":"tfLite","ai_framework":"6","author":"SenseCraft AI","description":"The model is a Swift-YOLO model trained on the person detection dataset. It can detect human body  existence.","task":1,"algorithm":"Object Dectect(TensorRT,SMALL,COCO)","classes":["person"]},"modes":0,"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"time_period":{"repeat":[1,1,1,1,1,1,1],"time_start":"00:00:00","time_end":"23:59:59"},"silence_duration":60},"output_type":1,"shutter":0},"wires":[[193818631]]},{"id":193818631,"type":"image analyzer","type_id":3,"index":1,"version":"0.0.1","params":{"url":"","header":"","body":{"prompt":"Is there a man with glasses?","type":1,"audio_txt":"Man with glasses"}},"wires":[[420037647,452707375]]},{"id":452707375,"type_id":99,"type":"sensecraft alarm","index":2,"version":"0.0.1","params":{"silence_duration":10,"text":"Man with glasses"},"wires":[]},{"id":420037647,"type_id":5,"type":"local alarm","index":3,"version":"0.0.1","params":{"sound":1,"rgb":1,"img":1,"text":1,"duration":10},"wires":[]}],"type":0}
```

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes canales de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

