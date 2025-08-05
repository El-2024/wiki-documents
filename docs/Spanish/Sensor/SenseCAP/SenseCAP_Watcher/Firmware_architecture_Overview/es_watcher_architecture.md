---
description: Introducing the SenseCAP Watcher software framework.
title: Watcher Software Framework
image: https://files.seeedstudio.com/wiki/watcher_software_framework/architecture_1.webp
slug: /es/watcher_software_framework
sidebar_position: 2
last_update:
  date: 2025-07-27
  author: Guillermo
---

# Arquitectura de Software de Watcher

La arquitectura de software de SenseCAP Watcher se muestra en la figura a continuación, dividida principalmente en tres partes: aplicaciones APP, interfaz de usuario e interacción, y flujo de tareas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/architecture.png" style={{width:800, height:'auto'}}/></div>

- **Aplicaciones APP**: Principalmente algunas aplicaciones como conexión WiFi, configuración Bluetooth, comunicación con la plataforma, OTA, etc., que también generan algunos datos para mostrarse en la interfaz de usuario.
- **Interfaz de usuario e interacción**: Principalmente la implementación de la interfaz y su interacción.
- **Flujo de tareas**: Implementación del motor de flujo de tareas y sus diferentes módulos funcionales.

## 1. Marco del Flujo de Tareas

### 1.1 Visión general

Para satisfacer las necesidades de diversos escenarios, se diseñó un marco de flujo de tareas similar a Node-RED, que permite organizar de forma flexible las habilidades del dispositivo y hacerlas trabajar de forma conjunta.

Las habilidades del dispositivo se abstraen en bloques, los cuales pueden ser productores o consumidores de datos, o ambos. Luego, según tareas específicas, se extraen los bloques necesarios y se conectan mediante relaciones productor-consumidor para cumplir funciones en distintos escenarios.

### 1.2 Motor de Flujo de Tareas

La función principal del motor de flujo de tareas es permitir que diversos módulos funcionales operen de acuerdo con el flujo de tareas descrito en un archivo JSON; gestiona el registro, instanciación y destrucción de los módulos funcionales, así como las conexiones entre ellos.

El flujo de procesamiento del motor de flujo de tareas se muestra a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/taskflow_engine.png" style={{width:300, height:'auto'}}/></div>

1. Inicializar el motor de flujo de tareas.  
2. Registrar cada módulo funcional en el motor, utilizando una lista enlazada para almacenar sus funciones de gestión e información.  
3. El motor de flujo de tareas espera recibir flujos de tareas.  
4. Al recibir un nuevo flujo, se analiza el archivo JSON del flujo de tareas, se extraen los módulos necesarios y se almacenan en un arreglo.  
5. Dentro del arreglo de módulos, se encuentra la función de gestión correspondiente desde la lista enlazada y se ordenan.  
6. Instanciar los módulos funcionales.  
7. Configurar los módulos funcionales.  
8. Establecer canalizaciones de eventos entre los módulos para la transmisión de mensajes.  
9. Iniciar secuencialmente cada módulo funcional.  
10. Una vez iniciados, el flujo de tareas comienza a ejecutarse.

### 1.3 JSON de Flujo de Tareas

El flujo de tareas se describe en formato JSON, y el motor de flujo de tareas lo ejecuta analizando dicho archivo.

A continuación se muestra una plantilla JSON para un flujo de tareas:

```json
{
    "tlid": 123456789,
    "ctd": 123456789,
    "tn": "Task flow template",
    "type": 0,
    "task_flow": [
        {
            "id": 1,
            "type": "module1",
            "index": 0,
            "version": "1.0.0",
            "params": {
            },
            "wires": [
                [
                    2
                ]
            ]
        },
        {
            "id": 2,
            "type": "module2",
            "index": 1,
            "version": "1.0.0",
            "params": {
            },
            "wires": [
                [
                    3,
                    4
                ]
            ]
        },
        {
            "id": 3,
            "type": "module3",
            "index": 2,
            "version": "1.0.0",
            "params": {
            },
            "wires": []
        },
        {
            "id": 4,
            "type": "module4",
            "index": 3,
            "version": "1.0.0",
            "params": {
            },
            "wires": []
        }
    ]
}
```

## Descripción de campos

- **ctd**: Momento de creación del flujo de tareas.  
- **tlid**: ID del flujo de tareas, puede coincidir con `ctd`.  
- **tn**: Nombre del flujo de tareas.  
- **type**: Tipo de flujo de tareas  
  - **0**: Ejemplo local de flujo de tareas  
  - **1**: Flujo de tareas emitido vía MQTT  
  - **2**: Flujo de tareas emitido vía Bluetooth  
  - **3**: Flujo de tareas emitido por comando de voz  

- **task_flow**: Contiene información detallada sobre cada módulo funcional dentro del flujo  
  - **id**: ID del módulo  
  - **type**: Nombre del módulo  
  - **index**: Orden del módulo en el flujo; cuanto antes aparece, menor es el valor. Se usa para ordenar los módulos  
  - **version**: Versión del módulo  
  - **params**: Parámetros del módulo; pueden variar según la versión y se deben interpretar de forma compatible según el número de versión  
  - **wires**: Conexiones entre módulos. Para más detalles, consulta **Canalizaciones de Eventos entre Módulos Funcionales**

A continuación, se muestra un ejemplo de archivo JSON para un flujo de tareas orientado a **monitoreo de incendios**:

```json
{
    "tlid": 1720171506807,
    "ctd": 1720171527631,
    "tn": "App notifies about fire emergency",
    "task_flow": [
        {
            "id": 86464178,
            "type": "ai camera",
            "type_id": 0,
            "index": 0,
            "vision": "0.0.1",
            "params": {
                "model_type": 0,
                "model": {},
                "modes": 1,
                "conditions": [],
                "conditions_combo": 0,
                "silent_period": {
                    "time_period": {
                        "repeat": [
                            1,
                            1,
                            1,
                            1,
                            1,
                            1,
                            1
                        ],
                        "time_start": "00:00:00",
                        "time_end": "23:59:59"
                    },
                    "silence_duration": 60
                },
                "output_type": 1,
                "shutter": 0
            },
            "wires": [
                [
                    540820974
                ]
            ]
        },
        {
            "id": 540820974,
            "type": "image analyzer",
            "type_id": 3,
            "index": 1,
            "version": "0.0.1",
            "params": {
                "url": "",
                "header": "",
                "body": {
                    "prompt": "Is there a fire?",
                    "type": 1,
                    "audio_txt": "Fire alert"
                }
            },
            "wires": [
                [
                    1516408094,
                    1981533581
                ]
            ]
        },
        {
            "id": 1981533581,
            "type_id": 99,
            "type": "sensecraft alarm",
            "index": 2,
            "version": "0.0.1",
            "params": {
                "silence_duration": 10,
                "text": "Fire alert"
            },
            "wires": []
        },
        {
            "id": 1516408094,
            "type_id": 5,
            "type": "local alarm",
            "index": 3,
            "version": "0.0.1",
            "params": {
                "sound": 1,
                "rgb": 1,
                "img": 1,
                "text": 1,
                "duration": 10
            },
            "wires": []
        }
    ],
    "type": 0
}
```

Este flujo de tareas utiliza cuatro bloques: **cámara AI**, **analizador de imágenes**, **alarma local** y **alarma SenseCraft**. La topología de conexión entre módulos se muestra a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/modules_connection1.png" style={{width:600, height:'auto'}}/></div>

La siguiente figura muestra el flujo general del motor de flujo de tareas y la secuencia de arranque de los módulos funcionales:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/modules_connection1.png" style={{width:600, height:'auto'}}/></div>

### 1.4 Canalizaciones de eventos entre módulos

Las conexiones entre módulos funcionales representan la **transmisión de datos**, donde un módulo anterior genera datos y los envía al siguiente. La transmisión se realiza a través de un **mecanismo de eventos**, en el cual el módulo anterior publica eventos y el siguiente los suscribe. Estos eventos se implementan usando el componente `esp_event` del IDF, que admite colas de caché.

- Cada módulo tiene un **ID único**, que sirve como **ID de evento** al que el módulo se suscribe.
- Durante la ejecución de `sub_set`, el módulo **se suscribe** a mensajes con ese ID.
- Durante la ejecución de `stop`, el módulo **anula el registro** de ese ID de evento.
- Algunos módulos son **fuentes de excitación** y no tienen módulo anterior; pueden operar sin suscribirse a un ID de evento.

El campo `wires` de cada módulo indica el ID del módulo siguiente:

- Al ejecutar `pub_set`, estos IDs se **almacenan en caché**.
- Cuando hay datos disponibles, se **publican eventos** hacia esos módulos.
- Si un módulo tiene el campo `wires` vacío, significa que **no tiene módulos descendentes**: consume datos sin producirlos.

Cada módulo puede tener **como máximo una entrada**, pero **múltiples salidas**. Esto permite múltiples ramas de salida por tipo de dato. Cada salida puede conectarse a múltiples bloques.

El campo `wires` es un **arreglo bidimensional**:

- El **primer nivel** representa el número de terminales de salida.
- El **segundo nivel** contiene los IDs de los módulos conectados a cada terminal.

#### Ejemplo

El **Módulo 1** publica un mensaje en el **evento ID 2**,  
El **Módulo 2** lo recibe y lo procesa.  
El **Módulo 2** tiene **dos terminales de salida**:

- La **primera salida** conecta con los **Módulos 3 y 4**  
- La **segunda salida** conecta con el **Módulo 5**

Cuando la salida 1 tiene datos, se publican eventos a los IDs 3 y 4.  
Cuando la salida 2 tiene datos, se publican eventos al ID 5.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/modules_connection2.png" style={{width:600, height:'auto'}}/></div>

La descripción JSON correspondiente al **Módulo 2** es la siguiente:

```json
{
    "id": 2,
    "type": "module name",
    "index": 1,
    "version": "1.0.0",
    "params": {
    },
    "wires": [
        [
            3,
            4
        ],
        [
            5
        ]
    ]
}
```

The related operation functions are defined in **tf.h** (mainly encapsulating the idf's `esp_event` related functions) as follows:

```cpp
esp_err_t tf_event_post(int32_t event_id,
                        const void *event_data,
                        size_t event_data_size,
                        TickType_t ticks_to_wait);

esp_err_t tf_event_handler_register(int32_t event_id,
                                    esp_event_handler_t event_handler,
                                    void *event_handler_arg);

esp_err_t tf_event_handler_unregister(int32_t event_id,
                                      esp_event_handler_t event_handler);
```

#### 1.4.1 Tipos de Mensajes Transmitidos en las Canalizaciones de Eventos

Dos módulos pueden conectarse entre sí, lo que indica que sus tipos de datos son compatibles; definimos los tipos de datos y sus estructuras correspondientes en el archivo [tf_module_data_type.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_module/common/tf_module_data_type.h). Generalmente, los tipos de datos se definen con el prefijo **TF_DATA_TYPE_**; las estructuras de datos se definen con el prefijo **tf_data_**.

Por ejemplo, definimos el tipo **TF_DATA_TYPE_BUFFER** en la enumeración de tipos, y la estructura correspondiente es la siguiente. El primer campo `type` indica el tipo de dato, y los campos restantes indican los datos que se van a transmitir.

```cpp
typedef struct {
    uint8_t  type;
    struct tf_data_buf data;
} tf_data_buffer_t;
```

Cuando un módulo recibe datos de un evento, primero extrae el primer byte para obtener el tipo de dato, luego determina si el dato es el que necesita. Si es así, lo procesa; de lo contrario, lo descarta.

Los tipos de datos disponibles actualmente se describen a continuación:

<table>
  <thead>
    <tr>
      <th>Tipo de Dato</th>
      <th>Estructura de Datos</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>TF_DATA_TYPE_TIME</td>
      <td>tf_data_time_t</td>
      <td>Marca de tiempo</td>
    </tr>
    <tr>
      <td>TF_DATA_TYPE_BUFFER</td>
      <td>tf_data_buffer_t</td>
      <td>Buffer</td>
    </tr>
    <tr>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>tf_data_dualimage_with_inference_t</td>
      <td>Contiene imagen grande, imagen pequeña e información de inferencia</td>
    </tr>
    <tr>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>tf_data_dualimage_with_audio_text_t</td>
      <td>Contiene imagen grande, imagen pequeña, audio de alarma y texto de alarma</td>
    </tr>
  </tbody>
</table>

- Imagen grande: imagen en formato jpeg 640 x 480 obtenida de Himax, almacenada en codificación base64.

- Imagen pequeña: imagen en formato jpeg 416 x 416 obtenida de Himax, almacenada en codificación base64.

- Información de inferencia: resultados de inferencia obtenidos de Himax, incluyendo un arreglo de coordenadas de cajas, información de clasificación por clase o información de coordenadas puntuales, así como nombres de clases.

- Audio: datos obtenidos del bloque disparador, en formato .mp3.

#### 1.4.2 Transmisión Eficiente en las Canalizaciones de Eventos

Al usar el componente `esp_event` del IDF para transmisión de mensajes, ocurre una copia de memoria durante la encolación (para más detalles, consulta el código fuente de `esp_event`); esto no es eficiente para transmitir datos grandes, como imágenes y audio.

Por ello, adoptamos un método de transmisión eficiente transmitiendo sólo punteros. Por ejemplo, en el tipo **TF_DATA_TYPE_BUFFER**, los datos a transmitir se definen como sigue: el primer campo `p_buf` es la dirección inicial del buffer de datos, y el segundo campo `len` es la longitud de los datos.

```cpp
struct tf_data_buf
{
    uint8_t *p_buf;
    uint32_t len;
};
```

Los módulos productores de datos son responsables de la asignación de memoria de `p_buf`; el módulo consumidor de datos a nivel siguiente es responsable de liberar la memoria después de su uso.

Algunas funciones comunes para copiar y liberar datos están definidas en el archivo [tf_module_util.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_module/common/tf_module_util.h). Por ejemplo, si el tipo de dato recibido en un evento no es el que se desea, se puede llamar directamente a la función **tf_data_free()** para liberar la memoria (esta función libera todos los tipos de datos), como se muestra a continuación:

```cpp
static void __event_handler(void *handler_args, esp_event_base_t base, int32_t id, void *p_event_data)
{
    uint32_t type = ((uint32_t *)p_event_data)[0];
    if( type !=  TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE ) {
        ESP_LOGW(TAG, "Unsupport type %d", type);
        tf_data_free(p_event_data);
        return;
    }
    //...
}
```

### 1.5 Clase Base de los Módulos

Definimos la clase base de los módulos en [tf_module.h](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/blob/main/examples/factory_firmware/main/task_flow_engine/include/tf_module.h). El motor del flujo de tareas no se preocupa por la implementación específica de los módulos; solo necesita llamar a las interfaces relevantes para operarlos. Cada módulo específico solo debe implementar las funciones de operación y gestión.

```cpp
struct tf_module_ops
{
    int (*start)(void *p_module);
    int (*stop)(void *p_module);
    int (*cfg)(void *p_module, cJSON *p_json);
    int (*msgs_sub_set)(void *p_module, int evt_id);
    int (*msgs_pub_set)(void *p_module, int output_index, int *p_evt_id, int num);
};

typedef struct tf_module_mgmt {
    tf_module_t *(*tf_module_instance)(void);
    void (*tf_module_destroy)(tf_module_t *p_module);
}tf_module_mgmt_t;
```

Para aprender cómo escribir un módulo, por favor consulta la [Guía de Desarrollo de Módulos Funcionales para Watcher](https://wiki.seeedstudio.com/watcher_function_module_development_guide)

## 2. Módulos Funcionales

### 2.1 Lista

Actualmente, los módulos integrados comunes incluyen cámara AI, disparador de alarma, analizador de imágenes, alarma local, alarma sensecraft y alarma UART.

<table>
  <thead>
    <tr>
      <th>Categoría</th>
      <th>Módulo Funcional</th>
      <th>Tipo de Datos de Entrada</th>
      <th>Tipo de Datos de Salida</th>
      <th>Soporta Múltiples Instancias</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Fuente de Excitación</td>
      <td>cámara AI</td>
      <td>Cualquier tipo de dato</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>No</td>
    </tr>
    <tr>
      <td>temporizador</td>
      <td>-</td>
      <td>TF_DATA_TYPE_TIME</td>
      <td>Sí</td>
    </tr>
    <tr>
      <td rowspan="2">Módulo Disparador</td>
      <td>disparador de alarma</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Sí</td>
    </tr>
    <tr>
      <td>analizador de imágenes</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Sí</td>
    </tr>
    <tr>
      <td rowspan="3">Módulo de Alarma</td>
      <td>alarma local</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>-</td>
      <td>No</td>
    </tr>
    <tr>
      <td>alarma sensecraft</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>-</td>
      <td>Sí</td>
    </tr>
    <tr>
      <td>alarma UART</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>-</td>
      <td>Sí</td>
    </tr>
  </tbody>
</table>

### 2.2 Introducción a los Módulos Funcionales

#### 2.2.1 temporizador

El bloque temporizador es un módulo fuente de excitación, que funciona principalmente como un temporizador periódico. La definición de parámetros es la siguiente:

```json
{
    "type": "timer",
    "version": "1.0.0",
    "params": {
        "period": 5
    }
}
```

Los parámetros de configuración son:

* **params**: Un objeto que contiene los parámetros del dispositivo.
  * **period**: El período para iniciar el temporizador.

Descripción de la conexión de terminales:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Datos</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Entrada</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Salida</td>
      <td>TF_DATA_TYPE_TIME</td>
      <td>Salida con la marca de tiempo actual</td>
    </tr>
  </tbody>
</table>

#### 2.2.2 cámara AI

El bloque cámara AI es principalmente responsable de la comunicación con Himax, modelo OTA, la obtención de imágenes y resultados de inferencia, y contiene algunas funciones simples de filtrado por condición. La definición de parámetros es la siguiente:

```json
{
    "type": "ai camera",
    "version": "1.0.0",
    "params": {
        "model_type": 0,
        "model": {
            "model_id": "60021",
            "version": "1.0.0",
            "arguments": {
                "size": 8199.37,
                "url": "https://sensecraft-statics.oss-accelerate.xxx",
                "icon": "https://sensecraft-statics.oss-accelerate.xxx.png",
                "task": "detect",
                "createdAt": "1695282154",
                "updatedAt": "17149mode60582",
                "iou": 50,
                "conf": 50
            },
            "model_name": "General Object Detection",
            "model_format": "TensorRT",
            "ai_framework": "2",
            "author": "SenseCraft AI",
            "algorithm": "Object Detect(TensorRT, SMALL, COCO)",
            "classes": [
                "person"
            ],
            "checksum": ""
        },
        "modes": 1,
        "conditions": [{
            "class": "person",
            "mode": 1,
            "type": 1,
            "num": 1
        }],
        "conditions_combo": 0,
        "silent_period": {
            "time_period": {
                "repeat": [1, 1, 1, 1, 1, 1, 1],
                "time_start": "08:59:59",
                "time_end": "00:00:00"
            },
            "silence_duration": 60
        },
        "output_type": 1,
        "shutter": 0
    }
}
```

Los significados de cada campo en el parámetro params son los siguientes:

* **model_type**: Tipo de modelo, 0 indica modelo en la nube (la URL del modelo se extraerá del campo model para descargar y usar), 1, 2 y 3 indican modelos incorporados en Himax.
* **model**: Información específica sobre el modelo.
  * **model_id**: Identificador único del modelo.
  * **version**: Versión del modelo.
  * **arguments**: Configuración de parámetros del modelo.
    * **size**: Tamaño del modelo.
    * **url**: URL de descarga del modelo.
    * **icon**: URL del ícono del modelo.
    * **task**: Tipo de tarea del modelo, "detect" indica detección.
    * **createdAt**: Marca de tiempo de creación del modelo.
    * **updatedAt**: Marca de tiempo de actualización del modelo.
    * **iou**: Umbral IOU (Intersección sobre Unión).
    * **conf**: Umbral de confianza.
  * **model_name**: Nombre del modelo, "General Object Detection".
  * **model_format**: Formato del modelo, "TensorRT".
  * **ai_framework**: Framework de IA utilizado.
  * **author**: Autor del modelo, "SenseCraft AI".
  * **algorithm**: Descripción del algoritmo, "Object Detect(TensorRT, SMALL, COCO)".
  * **classes**: Categorías que el modelo puede detectar, incluyendo "person".
  * **checksum**: Suma de verificación (MD5) del archivo del modelo, actualmente vacío.
* **modes**: Modos de trabajo, 0 indica modo inferencia, 1 indica modo muestreo; cuando es 1, el dispositivo no interpreta el campo model.
* **conditions**: Lista de condiciones de detección.
  * **class**: Categoría a detectar, aquí "person".
  * **mode**: Modo de detección, 0 indica detección de existencia, 1 indica comparación numérica, 2 indica cambio de cantidad.
  * **type**: Tipo de comparación, 0 indica menor que, 1 igual a, 2 mayor que, 3 distinto de (válido sólo cuando mode=1).
  * **num**: Valor de comparación (válido sólo cuando mode=1).
* **conditions_combo**: Relación para detección con múltiples condiciones, 0 indica AND, 1 indica OR.
* **silent_period**: Configuración de periodo silencioso.
  * **time_period**: Configuración del periodo de tiempo.
    * **repeat**: Repetición del periodo desde domingo hasta sábado, 1 indica habilitado.
    * **time_start**: Hora de inicio del periodo silencioso.
    * **time_end**: Hora de fin del periodo silencioso.
  * **silence_duration**: Duración del silencio, en segundos.
* **output_type**: Tipo de imagen de salida, 0 indica sólo imágenes pequeñas (412x412), 1 indica imágenes grandes y pequeñas (640x480; 412x412).
* **shutter**: Modo de obturador, 0 indica abierto continuamente, 1 indica activado por UI, 2 indica activado por evento de entrada, 3 indica obturador una vez.

Descripción de la conexión de terminales:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Datos</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Entrada</td>
      <td>Cualquier tipo de dato</td>
      <td>La entrada puede activar un obturador</td>
    </tr>
    <tr>
      <td>Salida</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>Salida con imagen grande, imagen pequeña e información de inferencia (este campo sólo es válido para modelos de inferencia)</td>
    </tr>
  </tbody>
</table>

#### 2.2.3 disparador de alarma

El bloque de disparador de alarma puede ser el siguiente bloque después de la cámara AI, principalmente añade audio y texto para proporcionar al siguiente bloque de alarma. La definición de parámetros es la siguiente:

```json
{
    "type": "alarm trigger",
    "version": "1.0.0",
    "params": {
        "text": "", 
        "audio": ""
    }
}
```

Los parámetros de configuración son:

* **params**: Objeto que contiene los parámetros del dispositivo.
  * **text**: Texto de audio, información utilizada para generar el contenido de audio.
  * **audio**: Archivo de audio codificado en base64 que representa el contenido de audio en formato MP3.

Descripción de la conexión de terminales:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Datos</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Entrada</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>Datos de salida del bloque cámara AI</td>
    </tr>
    <tr>
      <td>Salida</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Salida con imagen grande, imagen pequeña, información de inferencia, audio mp3 de alarma y texto</td>
    </tr>
  </tbody>
</table>

#### 2.2.4 analizador de imágenes

El bloque analizador de imágenes puede ser el siguiente bloque después de la cámara AI, principalmente llama a LLM para analizar imágenes. Cuando la solicitud de análisis retorna un resultado que dispara una alarma, enviará datos al módulo siguiente. Los parámetros se definen como sigue:

```json
{
    "type": "image analyzer",
    "version": "1.0.0",
    "params": {
        "url": "",
        "header": "",
        "body": {
            "prompt": "",
            "type": 0,
            "audio_txt": ""
        }
    }
}
```

Parámetros de configuración:

* **params**: Objeto que contiene los parámetros del dispositivo.
  * **url**: Dirección URL para la solicitud, reservado (usualmente se usa la URL configurada en el dispositivo).
  * **header**: Encabezados de la solicitud, reservado.
  * **body**: Objeto que contiene el cuerpo de la solicitud.
    * **prompt**: Prompt para incluir en la solicitud, proporcionando información adicional para el análisis de imagen.
    * **type**: Tipo de solicitud, 1 indica monitoreo.
    * **audio_txt**: Texto de audio para incluir en la solicitud. Cuando se dispara la escena de monitoreo, el servicio convertirá este campo a TTS y lo devolverá en la interfaz.

Descripción de la conexión de terminales:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Datos</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Entrada</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE</td>
      <td>Datos de salida del bloque cámara AI</td>
    </tr>
    <tr>
      <td>Salida</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Salida con imagen grande, imagen pequeña, información de inferencia, audio mp3 de alarma y texto</td>
    </tr>
  </tbody>
</table>

#### 2.2.5 alarma local

El bloque de alarma local es un bloque de alarma que principalmente implementa alarmas en el dispositivo, como controlar el parpadeo RGB, reproducir audio de alarma, mostrar texto de alarma en la pantalla LCD y mostrar imágenes de alarma cuando se activa. Los parámetros se definen como sigue:

```json
{
    "type": "local alarm",
    "version": "1.0.0",
    "params": {
        "sound": 1,
        "rgb": 1,
        "img": 1,
        "text": 1,
        "duration": 10
    }
}
```

Parámetros de configuración:

* **params**: Objeto que contiene los parámetros del dispositivo.
  * **sound**: Interruptor para reproducir audio, 1 significa activado, 0 significa desactivado.
  * **rgb**: Interruptor para luces de alarma RGB, 1 significa activado, 0 significa desactivado.
  * **img**: Interruptor para mostrar imágenes de alarma, 1 significa activado, 0 significa desactivado.
  * **text**: Interruptor para mostrar texto de alarma, 1 significa activado, 0 significa desactivado.
  * **duration**: Duración de la alarma en segundos, aquí es 10 segundos.

Descripción de la conexión de terminales:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Datos</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Entrada</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Datos de salida del bloque disparador anterior</td>
    </tr>
    <tr>
      <td>Salida</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### 2.2.6 alarma sensecraft

El bloque de alarma sensecraft es un bloque de alarma que principalmente notifica a la plataforma SenseCraft sobre la información de alarma. Los parámetros se definen como sigue:

```json
{
    "type": "sensecraft alarm",
    "version": "1.0.0",
    "params": {
        "silence_duration": 60,
        "text": ""
    }
}
```

Parámetros de configuración:

* **params**: Objeto que contiene los parámetros del dispositivo.
  * **silence_duration**: Duración de silencio en segundos, aquí es 60 segundos, indicando que el intervalo mínimo de reporte es de 60s.
  * **text**: Texto para la notificación de alarma en la plataforma.

Descripción de la conexión de terminales:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Datos</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Entrada</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Datos de salida del bloque disparador anterior</td>
    </tr>
    <tr>
      <td>Salida</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

#### 2.2.7 alarma uart

El bloque de alarma uart es un bloque de alarma que principalmente implementa la salida de información de alarma a través del puerto serial. Los parámetros se definen como sigue:

```json
{
    "id": "<random number>",
    "type": "uart alarm",
    "version": "1.0.0",
    "params": {
        "output_format": 0,
        "text": "a string that you want to pass to the consumer of the uart packet.",
        "include_big_image": 0,
        "include_small_image": 0
    }
}
```

Parámetros de configuración:

- **params**: Objeto que contiene los parámetros del dispositivo.
  - **output_format**: Formato de salida.
    - 0: Formato binario.
    - 1: Formato JSON.
  - **text**: Texto de alarma, este texto se llenará en el campo Prompt del paquete de salida serial. Si este parámetro no está configurado, se llenará el nombre corto del flujo de tarea actual.
  - **include_big_image**: Si incluye imagen grande.
    - 0: No.
    - 1: Sí.
  - **include_small_image**: Si incluye imagen pequeña.
    - 0: No.
    - 1: Sí.

Descripción de la conexión de terminales:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Datos</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Entrada</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Datos de salida del bloque disparador anterior</td>
    </tr>
    <tr>
      <td>Salida</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/image-uart.png" style={{width:500, height:'auto'}}/></div>

El bloque de alarma uart enviará paquetes de datos a través del puerto serial trasero del SenseCAP Watcher. El método de conexión se muestra en la imagen anterior. Los parámetros del puerto serial son:

- Velocidad de baudios: 115200
- 8 bits, 1 bit de parada
- Sin paridad

> Nota: Debido al comportamiento por defecto de los pines IO_19 y IO_20 del ESP32S3 durante el encendido, este puerto serial emitirá algunos bytes aleatorios al inicio del encendido del SenseCAP Watcher. Por favor, use un mecanismo válido de detección de paquetes de datos para filtrarlos.

El formato del paquete de datos emitido desde el puerto serial se divide en dos formatos según el parámetro `output_format`:

**A. Formato binario**

El formato del paquete de datos binarios es el siguiente:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/api.png" style={{width:800, height:'auto'}}/></div>

Campos:

- Packet Magic Header - Encabezado del paquete, 5 bytes con el texto "SEEED"
- Prompt Str Len - Longitud del string Prompt
- Prompt Str - Cadena Prompt o texto de alarma. Cuando el parámetro `text` está configurado, es una copia del valor de dicho parámetro. Si no está configurado, se rellenará automáticamente con un texto corto que describe el propósito de la tarea (generado por la interfaz de compilación de tareas del servicio en la nube).
- Big Image Len - Longitud en bytes del string codificado en base64 de la imagen grande. Cuando `include_big_image=0`, su valor es 0.
- Big Image - String codificado en base64 de la imagen JPG grande
- Small Image Len - Longitud en bytes del string codificado en base64 de la imagen pequeña. Cuando `include_small_image=0`, su valor es 0.
- Small Image - String codificado en base64 de la imagen JPG pequeña
- Inference type - Tipo de resultado de inferencia; 0: no hay información de inferencia, 1: salida de inferencia de cajas, 2: resultado de inferencia de clases
- Boxes/classes - Resultado de inferencia.
- Classes name - Nombre de las clases.

Entre los campos anteriores, `Packet Magic Header`, `Prompt Str Len` y `Prompt Str` son campos obligatorios. Los demás campos se activan o desactivan según los parámetros. Por ejemplo, si el parámetro `include_big_image: 1` está activado, el paquete binario incluirá los campos `Big Image Len` y `Big Image`.

**B. Formato JSON**

El formato del paquete de datos JSON es el siguiente:

```
#in the stream of uart output
.....{packet object}\r\n{packet object}\r\n...
```

Objeto `packet`:

```json
{
     "prompt": "monitor a cat",
     "big_image": "base64 encoded JPG image, if include_big_image is enabled, otherwise this field is omitted",
     "small_image": "base64 encoded JPG image, if include_small_image is enabled, otherwise this field is omitted",
     "inference":{
        "boxes": [
            [145, 326, 240, 208, 50, 0]
        ],
        "classes": [
            [50, 0]
        ],
        "classes_name": [
          "person"
        ]
  }
} 
```

De manera similar, el campo "prompt" es un campo de salida obligatorio. Los campos "big_image" y "small_image" se controlan mediante parámetros.

#### 2.2.7 alarma http

El bloque de alarma http es un módulo de alarma, que principalmente implementa el reenvío de información de alarma a un servidor HTTP; la definición de parámetros es la siguiente:

```json
{
    "id":"",
    "type": "http alarm",
    "version": "1.0.0",
    "params": {
        "silence_duration": 5,
        "time_en": 1,
        "text_en": 1,
        "image_en": 1, 
        "sensor_en": 1, 
        "text": ""
    }
}
```

Parámetros de configuración:

* **params**: Objeto que contiene los parámetros del dispositivo.
  * **silence_duration**: Tiempo de silencio, en segundos.
  * **time_en**: Habilitar marca de tiempo, 1 significa activado, 0 desactivado.
  * **text_en**: Habilitar texto de alarma, 1 significa activado, 0 desactivado.
  * **image_en**: Habilitar imagen, 1 significa activado, 0 desactivado.
  * **sensor_en**: Habilitar sensor, 1 significa activado, 0 desactivado.
  * **text**: Texto de alarma.

Descripción de conexión de terminales:

<table>
  <thead>
    <tr>
      <th>Terminal</th>
      <th>Tipo de Datos</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Entrada</td>
      <td>TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT</td>
      <td>Datos de salida del bloque disparador anterior</td>
    </tr>
    <tr>
      <td>Salida</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

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


