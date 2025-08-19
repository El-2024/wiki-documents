---
description:  Distinguishing Beverage
title:  Distinción de Bebidas
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-TinyML-EI-5
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Wio Terminal + Edge Impulse: Distinción de Bebidas con Sensor de Gas Multicanal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg"/></div>

En este proyecto aprenderás a utilizar el [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) junto con [**Edge Impulse**](http://edgeimpulse.com/) para implementar un modelo de Machine Learning que distingue entre distintos tipos de bebidas usando el sensor [**Grove - Multichannel Gas Sensor v2**](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html).

Inspirado en el proyecto "Artificial nose" de [Benjamin Cabé](https://twitter.com/kartben/status/1258791793073815552), este ejemplo muestra el flujo de trabajo completo desde la recopilación de datos hasta el despliegue en el dispositivo.

## Hardware necesario

* [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
* [Grove - Multichannel Gas Sensor v2](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html)
* Muestras de bebidas: alcohol, café, refresco (cola)

## Paso 1: Cargar firmware Edge Impulse

1. Conecta el Wio Terminal a tu computadora.
2. Entra en modo "bootloader" deslizando el interruptor de encendido dos veces rápido.
3. Se montará una unidad externa llamada `Arduino`.
4. Arrastra el archivo [`edge_impulse_firmware.uf2`](https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/edge_impulse_firmware.uf2) a la unidad.

> Puedes compilar tu propio firmware desde el [repositorio de Edge Impulse para Wio Terminal](https://github.com/Seeed-Studio/Seeed_Arduino_edgeimpulse).

## Paso 2: Conexión con Edge Impulse Studio

1. Abre tu proyecto en Edge Impulse y ve a **Data acquisition**.
2. Haz clic en `Connect using WebUSB`, selecciona el puerto serie y acepta la conexión.
3. Verifica que aparezca "connected" en la parte superior.

## Paso 3: Recolección de datos

1. Conecta el sensor de gas Grove v2 al puerto Grove I2C del Wio Terminal.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/I2C.jpg" /></div>

2. Coloca el sensor sobre una bebida y cúbrelo para evitar interferencias ambientales.

3. En el dashboard de Edge Impulse:

   * En la pestaña **Data acquisition**, elige el dispositivo.
   * Define el **Label** (ej: "cola", "cafe", "alcohol", "aire").
   * Sample length: 10000 ms
   * Sensor: `External multichannel gas`
   * Frequency: `10Hz`

4. Presiona **Start Sampling** y repite el proceso varias veces por cada etiqueta.

> Recolecta datos consistentes. Evita ruido ambiental o ventilación cercana.

## Paso 4: Diseñar el Impulse

1. Ve a **Impulse Design** > **Create Impulse**:

   * Processing block: `Raw data`
   * Learning block: `Neural Network (Keras)`

2. Guarda y genera features desde la pestaña **Raw data**.

## Paso 5: Entrenar el modelo

1. En **Impulse Design** > **NN Classifier**, ajusta:

   * Número de épocas, tasa de aprendizaje, tamaño de batch, arquitectura de la red, etc.

2. Presiona **Start Training**.

3. Verifica la tabla de performance (accuracy y confusion matrix).

## Paso 6: Clasificación en vivo

1. Ve a **Live classification**.
2. Coloca el sensor sobre una nueva muestra.
3. Observa las predicciones del modelo entrenado.

## Paso 7: Despliegue al dispositivo

1. Ve a la pestaña **Deployment** y selecciona `Arduino Library`.
2. Descarga y extrae el archivo en tu carpeta de bibliotecas de Arduino.
3. Abre el ejemplo: `File -> Examples -> <tu proyecto> -> static_buffer`

Modifica la función `raw_feature_get_data()` así:

```cpp
int raw_feature_get_data(size_t offset, size_t length, float *out_ptr) {
    float features[4];
    features[0] = gas.getGM102B();
    features[1] = gas.getGM302B();
    features[2] = gas.getGM502B();
    features[3] = gas.getGM702B();
    memcpy(out_ptr, features + offset, length * sizeof(float));
    return 0;
}
```

## Código completo

```cpp
#include <coffee_cola_alcohol_big_inferencing.h>
#include <Multichannel_Gas_GMXXX.h>
#include <Wire.h>
GAS_GMXXX<TwoWire> gas;

int raw_feature_get_data(size_t offset, size_t length, float *out_ptr) {
    float features[4];
    features[0]=gas.getGM102B();
    features[1] = gas.getGM302B();
    features[2]=gas.getGM502B();
    features[3]=gas.getGM702B();
    memcpy(out_ptr, features + offset, length * sizeof(float));
    return 0;
}

void setup() {
    Serial.begin(115200);
    gas.begin(Wire, 0x08); // I2C
    Serial.println("Edge Impulse Inferencing Demo");
}

void loop() {
    ei_printf("Edge Impulse standalone inferencing (Arduino)\n");
    ei_impulse_result_t result = { 0 };

    signal_t features_signal;
    features_signal.total_length = sizeof(features) / sizeof(features[0]);
    features_signal.get_data = &raw_feature_get_data;

    EI_IMPULSE_ERROR res = run_classifier(&features_signal, &result, false);
    ei_printf("run_classifier returned: %d\n", res);
    if (res != 0) return;

    ei_printf("Predictions (DSP: %d ms., Classification: %d ms., Anomaly: %d ms.):\n",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);

    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    anomaly score: %.3f\n", result.anomaly);
#endif

    delay(1000);
}

void ei_printf(const char *format, ...) {
    static char print_buf[1024] = { 0 };
    va_list args;
    va_start(args, format);
    int r = vsnprintf(print_buf, sizeof(print_buf), format, args);
    va_end(args);
    if (r > 0) {
        Serial.write(print_buf);
    }
}
```

## Referencias

* [Artificial nose project](https://twitter.com/kartben/status/1258791793073815552)
* [Edge Impulse Public project](https://studio.edgeimpulse.com/public/37392/latest)
* [Wiki oficial del proyecto](https://wiki.seeedstudio.com/Wio-Terminal-Edge-Impulse)
