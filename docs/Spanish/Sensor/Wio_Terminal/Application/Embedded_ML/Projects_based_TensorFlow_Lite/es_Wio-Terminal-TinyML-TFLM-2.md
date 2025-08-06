---
description:  Weather Prediction with BME280
title:  Estación Meteorológica con BME280
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_TensorFlow_Lite
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-TinyML-TFLM-2
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Estación Meteorológica Inteligente con Wio Terminal y TensorFlow Lite Micro

En este proyecto, utilizaremos **Wio Terminal** y **TensorFlow Lite for Microcontrollers** para crear una estación meteorológica inteligente, capaz de predecir el clima y la probabilidad de precipitación para las próximas 24 horas, usando datos locales del sensor ambiental **BME280**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/image_R7SKj3UKX6.jpeg" /></div>

Puedes ver una demostración en el siguiente video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/qbpVltzvL6Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Aprenderás a aplicar técnicas de optimización de modelos para ejecutar una red neuronal convolucional, junto con una interfaz gráfica fluida (GUI) y conexión Wi-Fi, operando durante días o incluso meses.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/result.gif" /></div>

La pantalla mostrará la temperatura, humedad y presión atmosférica actuales, junto con el nombre de la ciudad, tipo de clima previsto y probabilidad de precipitación. En la parte inferior, un área de log puede ser utilizada para alertas meteorológicas u otra información.

## Datos de entrenamiento

Usaremos el conjunto de datos *Historical Hourly Weather Data 2012-2017* disponible en **Kaggle**. Como ejemplo, se eligió **Miami** por tener un clima subtropical similar a Shenzhen, donde se encuentra Seeed Studio.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/Capture1-1030x717.jpeg" /></div>

> Nota: Usa una ciudad con clima parecido al tuyo. Un modelo entrenado con datos de Miami no funcionará en invierno en Chicago.

## Entrenamiento del modelo

Puedes usar el cuaderno [**Google Colab**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_TinyML_4_Weather_Prediction/weather_prediction_final.ipynb) incluido en el repositorio del proyecto.

Si prefieres ejecutar localmente:

```bash
pip install -r requirements.txt
jupyter notebook
```

## Despliegue en Wio Terminal

El modelo entrenado se convierte en un arreglo de bytes que puede cargarse junto al código C++ en el Wio Terminal.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/arduino1.png" /></div>

### Optimizaciones

1. **Cuantización entera**: convierte pesos y datos de float32 a int8, reduciendo el tamaño del modelo 4x.

2. **micro\_mutable\_op\_resolver**: solo incluye operaciones necesarias en lugar de todas (como `all_ops_resolver`).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/inference.png" /></div>

### Ejemplo de inicialización

```cpp
#include <TensorFlowLite.h>
#include "tensorflow/lite/micro/all_ops_resolver.h"
#include "tensorflow/lite/micro/micro_error_reporter.h"
#include "tensorflow/lite/micro/micro_interpreter.h"
#include "tensorflow/lite/schema/schema_generated.h"
#include "model_Conv1D.h"

namespace {
tflite::ErrorReporter* error_reporter = nullptr;
const tflite::Model* model = nullptr;
tflite::MicroInterpreter* interpreter = nullptr;
TfLiteTensor* input = nullptr;
TfLiteTensor* output_type = nullptr;
TfLiteTensor* output_precip = nullptr;
constexpr int kTensorArenaSize = 1024*25;
uint8_t tensor_arena[kTensorArenaSize];
}  // namespace
```

### Ejemplo de inferencia

```cpp
for (byte i = 0; i < 72; i++) {
  input->data.int8[i] = x[i] / input->params.scale + input->params.zero_point;
}

TfLiteStatus invoke_status = interpreter->Invoke();

float y_precip = (output_precip->data.int8[0] - output_precip->params.zero_point) * output_precip->params.scale;
Serial.print("Precip: ");
Serial.println(y_precip);
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/array.png" /></div>

## Interfaz LVGL y WiFi

Para hacer el proyecto funcional desde el arranque:

* Se obtienen los datos climáticos de las últimas 24h desde **openweathermap.com**.
* Luego se reemplazan por datos del **sensor BME280** conectado al conector Grove del Wio Terminal.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/lvgl.jpeg" /></div>

> Cambia tus credenciales WiFi, ubicación y clave de API en el sketch antes de compilar.

## Recursos

* [Notebook en Colab](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_TinyML_4_Weather_Prediction/weather_prediction_final.ipynb)
* [Repositorio en GitHub](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_4_Weather_Prediction)
