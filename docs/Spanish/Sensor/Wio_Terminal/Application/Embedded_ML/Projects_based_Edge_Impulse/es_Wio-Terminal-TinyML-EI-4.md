---
description:   People counting with Ultrasonic sensor
title:   Conteo de Personas con Sensor Ultrasónico
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-TinyML-EI-4
last_update:
  date: 07/27/2025
  author: Guillermo
---

## Conteo de Personas con Wio Terminal y Edge Impulse usando Sensor Ultrasónico

En este proyecto crearemos un sistema de conteo de personas utilizando el **Wio Terminal**, un sensor ultrasónico común y un poco de inteligencia artificial para hacerlo realmente funcional.

<div align="center"><img width="600" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/image_zM8pM16fk9.jpeg"/></div>

También utilizaremos el servicio **Microsoft Azure IoT Central** para almacenar los datos de ocupación en la nube y visualizarlos en PC.

<div align="center"><img width="600" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/iotedge.png"/></div>

### Comprendiendo los datos

El sensor ultrasónico Grove mide la distancia sin contacto usando ondas a 40 kHz. Emite un pulso y mide el tiempo que tarda en volver el eco para calcular la distancia:

**Fórmula**: `Distancia = tiempo del eco * velocidad del sonido / 2`

<div align="center"><img width="600" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Ultrasonic_Working_Principle.png"/></div>

Código de prueba en Arduino:

```cpp
#include "Ultrasonic.h"
#define INTERVAL_MS 50
Ultrasonic ultrasonic(0);
void setup() {
    Serial.begin(115200);
}
void loop() {
    static unsigned long last_interval_ms = 0;
    float distance;
    if (millis() > last_interval_ms + INTERVAL_MS) {
        last_interval_ms = millis();
        distance = ultrasonic.MeasureInCentimeters();
        if (distance < 200.0) Serial.println(distance);
        else Serial.println(-1);
    }
}
```

Este patrón nos permite distinguir entre personas entrando (distancia disminuye) y saliendo (distancia aumenta).

### Adquisición de datos para entrenamiento

Monta el Wio Terminal con el sensor sobre una estructura fija usando velcro o tornillos.

<div align="center"><img width="600" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/device.png"/></div>

Envía los datos con `edge-impulse-data-forwarder`. Usa el mismo sketch anterior para registrar datos. Recorta muestras de 5000 ms a 1500 ms.

Incluye:

* Caminatas normales, rápidas y lentas
* Personas de diferentes complexiones
* Casos sin personas (incluyendo personas paradas al lado sin pasar)

### Entrenamiento del modelo ML

* Ventana de entrada: 1500 ms, paso: 500 ms
* Evita bloques de "Flatten"
* Usa "Raw data" con red convolucional 1D
* Cambia `MaxPool1D` stride a 1 y `pool size` a 4

<div align="center"><img width="600" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/Capture2.PNG"/></div>

Se logró 92% de precisión usando Raw data. Mejora posible:

* Usar sensor LiDAR (TF Mini)
* Usar 2 sensores
* Colocar sensor más bajo

### Despliegue en Wio Terminal

Exporta el modelo como biblioteca Arduino. Usa inferencia continua en hilos (FreeRTOS) para no perder datos. Usa `read_data()` en un hilo y `run_inference_background()` en otro.

```cpp
xTaskCreate(run_inference_background, "Inferencia", 512, NULL, 1, &Handle_aTask);
xTaskCreate(read_data, "Datos", 256, NULL, 2, &Handle_bTask);
vTaskStartScheduler();
```

En `read_data()` se recopila la distancia cada 500 ms. Se aplica suavizado de 3 lecturas:

```cpp
ei_classifier_smooth_init(&smooth, 3, 2, 0.6, 0.3);
```

### Integración con Azure IoT Central

El sketch final usa 3 hilos:

1. Inferencia
2. Recolección de datos
3. Enviar datos a Azure

Pasos:

* Crear app en [https://apps.azureiotcentral.com](https://apps.azureiotcentral.com)
* Crear plantilla IoT personalizada
* Agregar capacidades y vistas
* Crear dispositivo desde plantilla
* Obtener ID Scope, Device ID y Primary Key

<div align="center"><img width="600" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/azure1.jpeg"/></div>

* Enviar configuración por monitor serial:
  `set_az_iotc ID_scope primary_key device_ID`
* Reinicia el Wio Terminal y observa la telemetría en Azure

El sketch final también integra GUI con LVGL mostrando botones e información de entrada/salida de personas.

<div align="center"><img width="600" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/test2.gif"/></div>

## Referencias

* [Proyecto Edge Impulse](https://studio.edgeimpulse.com/public/18808/latest)
* [Código fuente en GitHub](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_3_People_Counting)
