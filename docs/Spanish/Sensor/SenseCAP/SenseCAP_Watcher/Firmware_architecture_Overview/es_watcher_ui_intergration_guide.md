---
description: Introduces how to develop your own set of UI for Watcher, with the help of SquareLine Studio and LVGL.
title: Guía de Integración Watcher UI
image: https://files.seeedstudio.com/wiki/watcher_software_framework/ui_framework.webp
slug: /es/watcher_ui_integration_guide
sidebar_position: 4
last_update:
  date: 07/25/2025
  author: Guillermo
---

# Guía de Integración de UI para Watcher

## 1. **Estructura del Componente UI**

En este tutorial aprenderás a integrar tu propio diseño de UI y funciones lógicas relacionadas dentro del directorio `view`. Todos los diseños de UI y funciones lógicas se colocarán en `view`, que contiene los subdirectorios `ui` y `ui_manager`. Además, el directorio `view` incluye los archivos fuente `view.c`, `view_alarm.c`, `view_image_preview.c`, `view_pages.c` y sus correspondientes archivos de encabezado `.h`. El marco específico se muestra a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_framework.png" style={{width:600, height:'auto'}}/></div>

- El subdirectorio `ui` contiene todos los diseños de UI definidos por el usuario. En este proyecto, la UI fue generada por la herramienta Squareline.

- El subdirectorio `ui_manager` contiene animaciones personalizadas, gestión de grupos de objetos y varias definiciones de callback para eventos.

- Los archivos fuente que comienzan con `view` definen las páginas globales y funciones callback relacionadas.

- La UI interactúa con la capa APP enviando y escuchando eventos.

:::tip
Leer las definiciones de módulos a continuación te ayudará a entender y usar todo el framework de UI. Si quieres un entendimiento rápido de la integración UI, puedes saltar al Capítulo 6 para lectura de aplicación.
:::

## 2. **Gestión de Grupos**

### 2.1 Resumen

SenseCAP Watcher soporta dispositivos de entrada táctil y con encoder. Para sincronizar las acciones de estos dispositivos y asegurar la correcta operación, se requiere la gestión de grupos que mantiene el foco en el objeto correcto y evita conflictos de eventos.

Las funciones de gestión de grupos están implementadas en los siguientes archivos:

- **pm.c**: Contiene implementaciones de funciones.
- **pm.h**: Contiene prototipos de funciones y definiciones de tipos.

### 2.2 Añadir Objetos a un Grupo

```cpp
static void addObjToGroup(GroupInfo *groupInfo, lv_obj_t *objects[], int count);
```

Aquí, `groupInfo` es un puntero a la estructura `GroupInfo` a la que se añadirán los objetos, `objects` es el arreglo de objetos a añadir, y `count` es la cantidad de objetos en el arreglo.

**Uso:**

```cpp
// Define the objects to be added to the page
lv_obj_t *example_objects[] = {example_obj1, example_obj2, ...};
// Add the objects to the group structure variable
addObjToGroup(&group_page_example, example_objects, sizeof(example_objects) / sizeof(example_objects[0]));
```

### 2.3 Navegación de Páginas y Gestión de Objetos

```cpp
void lv_pm_open_page(lv_group_t *group, 
                      GroupInfo *groupInfo, 
                      pm_operation_t operation, 
                      lv_obj_t **target, 
                      lv_scr_load_anim_t fademode,
                      int spd, 
                      int delay, 
                      void (*target_init)(void));
```

**Parámetros:**
- `group`: Puntero al grupo LVGL.
- `groupInfo`: Puntero a la estructura `GroupInfo` que contiene objetos de la página.
- `operation`: Operación a realizar (añadir objetos al grupo, sin operación o limpiar grupo).
- `target`: Objeto objetivo de la nueva página.
- `fademode`: Modo de animación de carga de pantalla.
- `spd`: Velocidad de la animación de carga de pantalla.
- `delay`: Retardo antes de iniciar la animación.
- `target_init`: Función de inicialización para la pantalla objetivo.

**Uso:**

```cpp
// Add the objects from the structure variable to the group and navigate to the corresponding page
lv_pm_open_page(g_example, &group_page_example, PM_ADD_OBJS_TO_GROUP, &ui_Page_Example, LV_SCR_LOAD_ANIM_NONE, 0, 0, &ui_Page_Example_screen_init);
```

### 2.4 Asociar Encoder con el Grupo

Crear un grupo, obtener dispositivos de entrada y asociar el encoder con el grupo para que controle los objetos dentro del grupo.

```cpp
void lv_pm_init(void)
{
  // Create a group
  g_main = lv_group_create();
  cur_drv = NULL;
  // Loop to get input devices
  while ((cur_drv = lv_indev_get_next(cur_drv)))
  {
    // Associate the encoder with the group when the input device is an encoder
    if (cur_drv->driver->type == LV_INDEV_TYPE_ENCODER)
    {
      lv_indev_set_group(cur_drv, g_main);
      break;
    }
  }
  // Define objects in different GroupInfo structure variables
  initGroup();
}
```

**Uso:**

```cpp
// Call in `view_init` to initialize the group and associate the encoder with the group
int view_init(void)
{
  // Note: Any operations on objects in the lvgl task must be performed within a thread lock!
  lvgl_port_lock(0);
  // Initialize UI
  ui_init();
  // Initialize the group and associate the encoder
  lv_pm_init();
  lvgl_port_unlock();
}
```

### 2.5 Imprimir Objetos de GroupInfo

```cpp
static void printGroup(GroupInfo *groupInfo);
```

Aquí, `groupInfo` es un puntero a la estructura `GroupInfo` para imprimir objetos. Nota que antes de imprimir, se debe establecer `user_data` para los objetos usando `lv_obj_set_user_data(example_obj, "example_obj_print")`.

**Uso:**

```cpp
printGroup(&group_page_example);
```

### 2.6 Ejemplo de Uso

1. Definir una variable `GroupInfo`.

```cpp
GroupInfo group_page_example;
```

2. Inicializar objetos en `initGroup()`.

```cpp
lv_obj_t * example_objects[] = {example_obj1, example_obj2, ...};
```

3. Añadir objetos al grupo.

```cpp
addObjToGroup(&group_page_example, example_objects, sizeof(example_objects) / sizeof(example_objects[0]));
```

4. Abrir la página y añadir el grupo.

```cpp
lv_pm_open_page(g_example, &group_page_example, PM_ADD_OBJS_TO_GROUP, &ui_Page_Example, LV_SCR_LOAD_ANIM_NONE, 0, 0, &ui_Page_Example_screen_init);
```

By following these steps, you can ensure that the touchscreen and encoder input operate synchronously and correctly in your application.

Siguiendo estos pasos, asegurarás que el input táctil y el encoder operen sincronizadamente y correctamente en tu aplicación.

## 3. Alarma del Dispositivo

### 3.1 Resumen

Esta sección explica cómo integrar y usar los componentes de UI de alarma en tu Watcher. Entendiendo y usando las funciones siguientes, podrás gestionar el comportamiento de la alarma en la UI del dispositivo.

La UI de alarma está implementada en:

- **view_alarm.c**: Contiene implementaciones de funciones.
- **view_alarm.h**: Contiene prototipos de funciones y definiciones de tipos.

### 3.2 Inicializar UI de Alarma

```cpp
int view_alarm_init(lv_obj_t *ui_screen);
```

`ui_screen` es un puntero al objeto pantalla usado para mostrar los componentes UI de alarma.

**Uso:**

```cpp
// Create alarm-related UI on the top layer
view_alarm_init(lv_layer_top());
```

### 3.3 Encender UI de Alarma

```cpp
int view_alarm_on(struct tf_module_local_alarm_info *alarm_st);
```

`alarm_st` es un puntero a la estructura `tf_module_local_alarm_info`, que contiene información relacionada con la alarma, como la duración, si mostrar texto o imágenes, y contenido específico del texto e imágenes.

**Uso:**

```cpp
struct tf_module_local_alarm_info info;
view_alarm_on(&info);
```

### 3.4 Apagar la UI de Alarma

```cpp
void view_alarm_off();
```

**Uso:**

```cpp
// Hide the alarm-related UI, set corresponding flags, or execute page transition logic
view_alarm_off();
```

## 4. Representación de Imágenes en Tiempo Real con Inferencia IA

### 4.1 Visión General

Esta sección explica cómo decodificar imágenes en el dispositivo y mostrarlas en LVGL.

Esta funcionalidad está implementada en los siguientes archivos:
- **view_image_preview.c**: Contiene implementaciones de funciones.
- **view_image_preview.h**: Contiene prototipos de funciones y definiciones de tipos.

### 4.2 Inicialización de la Función de Vista Previa de Imágenes

```cpp
int view_image_preview_init(lv_obj_t *ui_screen);
```

`ui_screen` es un puntero al objeto pantalla usado para mostrar vistas previas en tiempo real. Esta función inicializa el decodificador JPEG, asigna memoria y crea algunos objetos UI para mostrar resultados de inferencia IA, como cajas de detección de objetivos y nombres de clases.

**Uso:**

```cpp
// Create image preview UI on the ViewLive page
view_image_preview_init(ui_Page_ViewLive);
```

### 4.3 Refrescar Imagen de Vista Previa

```cpp
int view_image_preview_flush(struct tf_module_ai_camera_preview_info *p_info);
```

`p_info` es un puntero a la estructura `tf_module_ai_camera_preview_info`, que contiene información de la imagen e inferencia del modelo IA.

**Uso:**

```cpp
struct tf_module_ai_camera_preview_info info;
view_image_preview_flush(&info);
```

## 5. Definición de Eventos de Mensajes de UI

### 5.1 Visión General

La UI del dispositivo necesita interactuar con las tareas de la APP en segundo plano. Escuchando y consumiendo eventos específicos, se pueden realizar actualizaciones de UI y lógica de transición de páginas. Para información detallada sobre el manejo de eventos en ESP32, consulta la sección `Event Loop Library` en la documentación oficial de Espressif.

El manejo de eventos de mensajes UI está implementado en los siguientes archivos:

- **view.c**: Contiene implementaciones de funciones.
- **view.h**: Contiene prototipos de funciones y definiciones de tipos.
- **data_defs.h**: Contiene declaraciones de enumeraciones para varios ID de eventos (tanto front-end como back-end).

### 5.2 Funciones de Manejo de Eventos de UI

```cpp
esp_err_t esp_event_handler_instance_register_with( esp_event_loop_handle_t event_loop, 
                                                    esp_event_base_t event_base, 
                                                    int32_t event_id, 
                                                    esp_event_handler_t event_handler, 
                                                    void * event_handler_arg, 
                                                    esp_event_handler_instance_t * instance ) 
```

**Parámetros:**
- `event_loop`: Bucle de eventos al que se registra esta función; no puede ser NULL.
- `event_base`: ID base del evento para registrar el manejador.
- `event_id`: ID del evento para registrar el manejador.
- `event_handler`: Función manejadora que se llama cuando el evento es despachado.
- `event_handler_arg`: Argumento que se pasa a la función manejadora además de los datos del evento.
- `instance`: Objeto instancia del manejador asociado con el manejador registrado y los datos; puede ser NULL.

### 5.3 Uso

#### 1. Declarar y Definir Eventos, y Registrar el Manejador de Evento UI a un Bucle Específico

```cpp
// Declaration and definition of VIEW event base
ESP_EVENT_DECLARE_BASE(VIEW_EVENT_BASE);
esp_event_loop_handle_t app_event_loop_handle;
// Declare event IDs as an enumeration; in the SenseCAP-Watcher project, this is placed in data_defs.h
enum {
    VIEW_EVENT_EXAMPLE
}
// Register instance
ESP_ERROR_CHECK(esp_event_handler_instance_register_with(app_event_loop_handle, 
                                                            VIEW_EVENT_BASE, VIEW_EVENT_EXAMPLE, 
                                                            __view_event_handler, NULL, NULL));
```

#### 2. Manejo de Eventos de Mensajes UI

```cpp
static void __view_event_handler(void* handler_args, esp_event_base_t base, int32_t id, void* event_data)
{
  // Acquire lvgl thread lock
  lvgl_port_lock(0);
  if (base == VIEW_EVENT_BASE) {
    switch (id) {
      // Custom event
      case VIEW_EVENT_EXAMPLE: {
        ESP_LOGI("ui_event", "VIEW_EVENT_EXAMPLE");
        // Execute corresponding logic based on the received event
        break;
      }
    }
  }
  // Release lvgl thread lock
  lvgl_port_unlock();
}
```

#### 3. Enviar Eventos de Mensajes UI

```cpp
// Send event to trigger corresponding logic
esp_event_post_to(app_event_loop_handle, VIEW_EVENT_BASE, VIEW_EVENT_EXAMPLE, NULL, 0, pdMS_TO_TICKS(10000));
```

## 6. Aplicación

Ahora integraremos un ejemplo simple de UI en el dispositivo SenseCAP Watcher usando las funciones anteriores. Esto incluye usar Squareline para diseñar la UI, definir eventos de callback, gestionar grupos de objetos y más.

### 6.1 Crear Objetos de UI y Funciones Callback en Squareline

Crea botones en Squareline, asigna nombres y estilos, y asigna funciones callback a cada botón. Haz clic en `ADD EVENT` en la sección `Events`, elige el tipo de disparador para el evento y nombra la función callback. Esto completa la creación de los objetos UI y sus funciones relacionadas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img1.png" style={{width:800, height:'auto'}}/></div>

### 6.2 Exportar el Proyecto `ui` desde Squareline

En la aplicación, elige `File` -> `Project Settings` en la barra de navegación, y establece `UI Files Export Path` a `project_path/ui`, donde `project_path` es la ruta del proyecto Squareline. Esto establece la ruta de exportación del diseño UI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img2.png" style={{width:600, height:'auto'}}/></div>

Luego, haz clic en `Export` -> `Export UI Files` en la barra de navegación para exportar una carpeta que contiene todos los diseños de UI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img3.png" style={{width:500, height:'auto'}}/></div>

### 6.3 Implementar Funciones Callback Declaradas en Archivos de Encabezado

Importa la carpeta `ui` en el proyecto SenseCAP Watcher, abre y consulta las funciones declaradas en `ui_events.h` de la carpeta `ui`, e implementa estas funciones en `ui_events.c` dentro de la carpeta `ui_manager` para completar la lógica.

Por ejemplo, en `ui_events.h`:

```cpp
void btn1click_cb(lv_event_t * e);
void btn2click_cb(lv_event_t * e);
void btn3click_cb(lv_event_t * e);
```

Y el código será así en `ui_events.c`:

```cpp
void btn1click_cb(lv_event_t * e)
{
    ESP_LOGI("ui_example", "btn1click_cb");
    // Define the logic for this object when the clicked event is triggered
}

void btn2click_cb(lv_event_t * e)
{
    ESP_LOGI("ui_example", "btn2click_cb");
    // Define the logic for this object when the clicked event is triggered
}

void btn3click_cb(lv_event_t * e)
{
    ESP_LOGI("ui_example", "btn3click_cb");
    // Define the logic for this object when the clicked event is triggered
}
```

### 6.4 Añadir Objetos a Variables de Estructura

En este paso, gestionamos el encoder y el grupo creado. Añadir y eliminar objetos al/del grupo permitirá al encoder controlar los objetos.

```cpp
// Define a GroupInfo variable
GroupInfo group_page_example;
// Initialize objects in initGroup()
lv_obj_t * example_objects[] = {ui_Button1, ui_Button2, ui_Button3};
// Add objects to the structure variable to facilitate adding objects to the group in different pages
addObjToGroup(&group_page_example, example_objects, sizeof(example_objects) / sizeof(example_objects[0]));
```

### 6.5 Inicialización de la UI

En `view_init` en `view.c`, llama a `ui_init` para inicializar la UI. Así, cuando el hilo de tareas lvgl se ejecute, podrá cargar la UI diseñada. La página predeterminada será la primera diseñada en Squareline.

```cpp
int view_init(void)
{
  // Note: Any operations on objects in the lvgl task must be performed within a thread lock!
  lvgl_port_lock(0);

  ui_init();
  lv_pm_init();
  // There are two ways to add objects to the group
  // First: Clear the objects in the group and add them to the group one by one
  lv_group_remove_all_objs(g_example);
  lv_group_add_obj(ui_Button1);
  lv_group_add_obj(ui_Button2);
  lv_group_add_obj(ui_Button3);

  // Second: Add the corresponding objects to the group through the page transition function:
  lv_pm_open_page(g_example, &group_page_example, PM_ADD_OBJS_TO_GROUP, &ui_Page_Example, LV_SCR_LOAD_ANIM_NONE, 0, 0, &ui_Page_Example_screen_init);

  lvgl_port_unlock();

  // Other initialization code
}
```

### 6.6 Visualizar el Resultado en Ejecución

Ahora hemos implementado una integración básica de UI en el proyecto. Luego, podemos compilar y flashear el código al Watcher para ver el resultado en ejecución.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img4.png" style={{width:500, height:'auto'}}/></div>

Como se muestra arriba, al presionar los botones en la pantalla táctil o usando la perilla, verás que los objetos correspondientes activan eventos callback en el asistente de depuración serial, indicando que las funciones callback funcionan correctamente.

## 7. Proyecto Squareline

La mayoría de las páginas en el SenseCAP Watcher están creadas con Squareline. Esta herramienta permite modificar rápida y fácilmente los estilos de los objetos en las páginas del Watcher. Por tanto, se recomienda encarecidamente usar Squareline para el desarrollo y evolución de la UI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img5.png" style={{width:800, height:'auto'}}/></div>

As shown in the image above, the pages in the tool are arranged according to the navigation logic. Adjacent pages can be navigated through buttons or other triggerable objects. You can click on the corresponding page and objects to view defined events, making it very simple to modify the styles of different pages and objects, customizing your AI assistant! However, note that the objects and callback events defined in the current pages are bound to the Watcher's APP layer functions. Modifying them may affect the normal operation of the Watcher. It is recommended to only modify the styles of objects, such as color and size, to ensure the Watcher's normal functionality.

Como se muestra en la imagen, las páginas en la herramienta están organizadas según la lógica de navegación. Las páginas adyacentes pueden navegarse a través de botones u otros objetos. Puedes hacer clic en las páginas y objetos para ver eventos definidos, lo cual hace muy simple modificar estilos y personalizar tu asistente IA. Sin embargo, ten en cuenta que los objetos y eventos definidos están vinculados a funciones de la APP del Watcher. Modificarlos puede afectar su funcionamiento. Se recomienda solo cambiar el estilo (color, tamaño) para asegurar que el Watcher funcione correctamente.

## 8. Descripción de Archivos

- [`ui_intergration_demo\SenseCAP-Watcher_example`](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/tree/factory_fw/examples/factory_firmware/docs/ui_intergration_demo/SenseCAP-Watcher_example): contiene el proyecto completo de Squareline del Watcher, incluyendo casi todos los diseños UI.

- [`ui_intergration_demo\ui_intergration_example`](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/tree/factory_fw/examples/factory_firmware/docs/ui_intergration_demo/ui_intergration_example): contiene el proyecto Squareline del ejemplo en el capítulo de Aplicación.

- [`ui_intergration_demo\view`](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/tree/factory_fw/examples/factory_firmware/docs/ui_intergration_demo/view): contiene el componente `view` para el ejemplo del capítulo de Aplicación. Puedes usar este ejemplo reemplazando directamente el `view` original en el proyecto.

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


