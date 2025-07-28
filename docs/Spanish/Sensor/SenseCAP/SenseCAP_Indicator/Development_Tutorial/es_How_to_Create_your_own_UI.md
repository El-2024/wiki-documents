---
description: Make your own UI based on LVGL coding or with Squareline Studio
title: How to Create your own UI
keywords:
- Indicator Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Indicator_How_to_Create_your_own_UI
sidebar_position: 4
last_update:
  date: 07/22/2025
  author: Guillermo
---
# **Cómo Crear tu Propia Interfaz de Usuario (UI)**

## **LvGL (LittlevGL)**

[LvGL (Light and Versatile Graphics Library)](https://docs.lvgl.io/master/intro/index.html) es una biblioteca gráfica de código abierto optimizada para sistemas embebidos. Ofrece:

- Elementos gráficos listos para usar (botones, gráficos, pantallas)
- Efectos visuales atractivos
- Bajo consumo de memoria

### Código de Ejemplo

Puedes consultar el [repositorio oficial de ejemplos de LvGL](https://docs.lvgl.io/master/examples.html), el cual contiene múltiples ejemplos para crear interfaces.

SenseCAP Indicator incluye proyectos de demostración para modificar o adaptar a tus necesidades.

```c
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "esp_log.h"
#include "bsp_board.h"
#include "lv_demos.h"
#include "lv_port.h"
#include "ui_demo1.h"
#include "ui_demo2.h"

#define LOG_MEM_INFO        1

static const char *TAG = "app_main";

void app_main(void)
{
    ESP_LOGI("TAG", "system start");

    ESP_ERROR_CHECK(bsp_board_init());
    lv_port_init();

#if CONFIG_LCD_AVOID_TEAR
    ESP_LOGI(TAG, "Avoid lcd tearing effect");
#if CONFIG_LCD_LVGL_FULL_REFRESH
    ESP_LOGI(TAG, "LVGL full-refresh");
#elif CONFIG_LCD_LVGL_DIRECT_MODE
    ESP_LOGI(TAG, "LVGL direct-mode");
#endif
#endif

    lv_port_sem_take();
    lv_demo_widgets();      /* A widgets example. This is what you get out of the box */
    //lv_demo_music();        /* A modern, smartphone-like music player demo. */
    //lv_demo_stress();       /* A stress test for LVGL. */
    //lv_demo_benchmark();    /* A demo to measure the performance of LVGL or to compare different settings. */
    // ui_demo1_init();         /* A demo to show virtual printer (must be 800*480)*/
    //ui_demo2_init();         /* A demo to show virtual tuner
                                /* (must be 480*800, set LCD_EVB_SCREEN_ROTATION_90 in menuconfig)*/
    lv_port_sem_give();

#if LOG_MEM_INFO
    static char buffer[128];    /* Make sure buffer is enough for `sprintf` */
    while (1) {
        sprintf(buffer, "   Biggest /     Free /    Total\n"
                "\t  DRAM : [%8d / %8d / %8d]\n"
                "\t PSRAM : [%8d / %8d / %8d]",
                heap_caps_get_largest_free_block(MALLOC_CAP_INTERNAL),
                heap_caps_get_free_size(MALLOC_CAP_INTERNAL),
                heap_caps_get_total_size(MALLOC_CAP_INTERNAL),
                heap_caps_get_largest_free_block(MALLOC_CAP_SPIRAM),
                heap_caps_get_free_size(MALLOC_CAP_SPIRAM),
                heap_caps_get_total_size(MALLOC_CAP_SPIRAM));
        ESP_LOGI("MEM", "%s", buffer);

        vTaskDelay(pdMS_TO_TICKS(10000));
    }
#endif
}
```

## **Squareline Studio (Opcional)**

[Squareline Studio](https://docs.squareline.io/docs/squareline/) es una herramienta de diseño visual multiplataforma para crear interfaces gráficas con **LvGL**. Permite:

- Diseñar UI sin escribir código directamente
- Exportar código en C o Python compatible con LvGL
- Prototipado rápido de interfaces complejas

### Instalar Squareline Studio

Guía oficial: [Instalación de Squareline Studio](https://docs.squareline.io/docs/introduction/install)

## **Pasos para Crear tu Propia UI con Squareline Studio**

[SenseCAP Indicator/squareline_project](https://github.com/Seeed-Solution/sensecap_indicator_esp32/blob/main/examples/squareline_demo/doc/squareline_project.zip)

### Paso 1: Abrir o Crear Proyecto de UI

Puedes crear un nuevo proyecto desde cero

**Editar proyecto demo:**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/squareline.png"/></div>

Crear proyecto nuevo:

**Nota**: Requiere que la pantalla tenga resolución **480×480 píxeles.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/create.png"/></div>

* Paso 2: Exportar los archivos de UI generados

Una vez completado el diseño:

- Haz clic en **Export** para generar los archivos fuente de la UI

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/export.png"/></div>

### Paso 3: Reemplazar Archivos de UI

- Elimina los archivos de UI anteriores
- Copia tus nuevos archivos exportados a la carpeta del proyecto:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/ui.png"/></div>

### Paso 4: Compilar y Grabar el Proyecto

Usa el siguiente comando para compilar, flashear y monitorear:

`idf.py -p PORT build flash monitor`

# **Soporte Técnico**

**¿Necesitas ayuda para crear tu UI o flashear tu proyecto? ¡Estamos aquí para ayudarte!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
