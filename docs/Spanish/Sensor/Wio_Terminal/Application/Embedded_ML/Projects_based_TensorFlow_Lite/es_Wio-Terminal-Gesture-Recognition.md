---
description:  Gesture Recognition with Wio Terminal
title:  Gesture Recognition with Wio Terminal
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_TensorFlow_Lite
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Gesture-Recognition
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Aprendizaje Automático con Wio Terminal – Reconocimiento de Gestos

Este tutorial demuestra cómo usar el Wio Terminal para configurar una demostración simple de reconocimiento de gestos con ayuda de **TensorFlow Lite**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/TF.gif"/></div>

Este ejemplo está modificado a partir de la demostración oficial del equipo de Arduino en conjunto con el equipo de TensorFlow Lite. Para más información y referencias, visita: [Get started with machine learning on Arduino](https://blog.arduino.cc/2019/10/15/get-started-with-machine-learning-on-arduino/). Se realizaron algunas modificaciones para hacerlo compatible con Wio Terminal.

**Referencia:** [How-to Get Started with Machine Learning on Arduino](https://medium.com/tensorflow/how-to-get-started-with-machine-learning-on-arduino-7daf95b4157)

## Lista de Componentes

* [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

* [Chasis con batería para Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html)

## Características

* Aprendizaje automático en Wio Terminal
* Reconocimiento de gestos
* TensorFlow Lite

## Bibliotecas de Arduino necesarias

* Instalar la biblioteca del acelerómetro integrado `Seeed_Arduino_LIS3DHTR`. Consulta [Wio Terminal IMU](https://wiki.seeedstudio.com/Wio-Terminal-IMU-Overview/) para más información.

* Instalar la biblioteca **Arduino TensorFlow Lite**, consulta [Wio Terminal TensorFlow Lite](https://wiki.seeedstudio.com/Wio-Terminal-TinyML-TFLM-1) para más información.

## Entrenamiento de datos IMU desde el Wio Terminal

Como en cualquier proyecto de aprendizaje automático, primero obtendremos datos del sensor para entrenar el modelo. Para ello, ejecutaremos un programa simple en Arduino que transmitirá los datos del sensor desde el Wio Terminal.

Copia y sube el siguiente código al Wio Terminal:

```cpp
#include "LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;

const float accelerationThreshold = 2; // Umbral significativo en G's
const int numSamples = 119;

int samplesRead = numSamples;

void setup() {
  Serial.begin(9600);
  lis.begin(Wire1);

  if (!lis) {
    Serial.println("ERROR");
    while(1);
  }

  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); // Frecuencia de salida de datos
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); // Rango de escala a 2g

  Serial.println("Aceleración en G's");
  Serial.println("X\tY\tZ");
}

void loop() {
  float x, y, z;

  while (samplesRead == numSamples) {
    x = lis.getAccelerationX();
    y = lis.getAccelerationY();
    z = lis.getAccelerationZ();

    float aSum = fabs(x) + fabs(y) + fabs(z);

    // Verificar si supera el umbral
    if (aSum >= accelerationThreshold) {
      samplesRead = 0;
      break;
    }
  }

  while (samplesRead < numSamples) {
    x = lis.getAccelerationX();
    y = lis.getAccelerationY();
    z = lis.getAccelerationZ();

    samplesRead++;

    Serial.print(x, 3);
    Serial.print(',');
    Serial.print(y, 3);
    Serial.print(',');
    Serial.print(z, 3);
    Serial.println();

    if (samplesRead == numSamples) {
      Serial.println();
    }
  }
}
```

O descarga el código [**aquí**](https://files.seeedstudio.com/wiki/Wio-Terminal/res/IMU.zip) y súbelo al Wio Terminal. Si abres el Monitor Serial, deberías ver los datos del IMU.

## Captura de datos de entrenamiento de gestos

**Captura los datos IMU en formato CSV** para usar con TensorFlow:

* Abre el Monitor Serial y levanta el Wio Terminal.
* Realiza un gesto de **puñetazo (punch)** asegurándote de activar la captura.
* Repite el mismo movimiento al menos 10 veces. Cuantos más datos, mejor.
* Copia y pega los datos del Monitor Serial en un archivo de texto llamado **`punch.csv`**.
* Reinicia el Wio Terminal y repite los pasos con un gesto de **flexión (flex)**. Guarda como **`flex.csv`**.

**Nota:** Si usas Linux o Mac, puedes redirigir los datos del sensor directamente a un archivo `.csv` con:

```sh
cat /dev/cu.usbmodem[nnnnn] > punch.csv
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMU-data.png"/></div>

## Verificación de los archivos `.csv`

Abre `punch.csv` y `flex.csv` y asegúrate de que la primera línea del archivo sea:
**aX,aY,aZ**, como en el ejemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMU-csv.png"/></div>

## Entrenamiento de datos en TensorFlow

Usaremos el **proyecto en Google Colab** creado por el equipo de Arduino. Colab ofrece un notebook de Jupyter que permite entrenar el modelo TensorFlow desde el navegador. Este entorno también convierte el modelo a TensorFlow Lite y lo codifica como un archivo de cabecera compatible con Arduino.

Haz clic [**aquí**](https://colab.research.google.com/github/arduino/ArduinoTensorFlowLiteTutorials/blob/master/GestureToEmoji/arduino_tinyml_workshop.ipynb) para acceder al **proyecto en Google Colab**.

## Modificaciones necesarias en el proyecto de Google Colab

Algunas modificaciones son necesarias para adaptar el proyecto al Wio Terminal:

* No es necesario hacer cambios en **Setup the Python Environment**.
* No se requieren cambios en **Upload Data**.
* En **Graph Data**, comenta todas las secciones relacionadas con giroscopio como se muestra:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/TF-step1.png"/></div>

* En **Parse and prepare the data**, comenta también las secciones del giroscopio:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/TF-step2.png"/></div>

* No se requieren cambios en:

  * **Randomize and split the input and output pairs for training**
  * **Build & Train the Model**
  * **Graph the loss**
  * **Graph the loss again, skipping a bit of the start**
  * **Graph the mean absolute error**
  * **Run with Test Data**
  * **Convert the Trained Model to Tensor Flow Lite**
  * **Encode the Model in an Arduino Header File**

Una vez entrenado, descarga el archivo **`model.h`** desde el panel lateral izquierdo.

## Cargar el código en el Wio Terminal

* Una vez descargados los archivos del modelo en formato header (`model.h`), abre [IMU\_Classifier.ino](https://files.seeedstudio.com/wiki/Wio-Terminal/res/IMU_Classifier.zip) o copia el siguiente código en el IDE de Arduino:

```cpp
/*
  Clasificador IMU
  Este ejemplo utiliza el IMU integrado para comenzar a leer datos de aceleración y giroscopio
  del IMU incorporado. Una vez que se han leído suficientes muestras, usa un
  modelo de TensorFlow Lite (Micro) para intentar clasificar el movimiento como un gesto conocido.
  Nota: El uso directo de punteros C/C++, espacios de nombres y memoria dinámica está generalmente
        desaconsejado en ejemplos de Arduino. En el futuro, la librería TensorFlowLite podría cambiar
        para simplificar el sketch.
  El circuito:
  - Arduino Nano 33 BLE o Arduino Nano 33 BLE Sense.
  Creado por Don Coleman, Sandeep Mistry
  Modificado por Dominic Pajak, Sandeep Mistry
  Este código de ejemplo es de dominio público.

  Modificado para adaptarse a Wio Terminal - Anson (Seeed Studio)
*/

#undef min
#undef max
#include <TensorFlowLite.h>
#include <tensorflow/lite/experimental/micro/kernels/all_ops_resolver.h>
#include <tensorflow/lite/experimental/micro/micro_error_reporter.h>
#include <tensorflow/lite/experimental/micro/micro_interpreter.h>
#include <tensorflow/lite/schema/schema_generated.h>
#include <tensorflow/lite/version.h>

#include "model.h"
#include "LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;

const float accelerationThreshold = 2; // Umbral de aceleración significativa en G's
const int numSamples = 119;

int samplesRead = numSamples;

// Variables globales usadas por TensorFlow Lite (Micro)
tflite::MicroErrorReporter tflErrorReporter;

// Incluye todas las operaciones de TFLM; puedes remover esta línea e
// incluir solo las necesarias para reducir el tamaño del sketch compilado.
tflite::ops::micro::AllOpsResolver tflOpsResolver;

const tflite::Model* tflModel = nullptr;
tflite::MicroInterpreter* tflInterpreter = nullptr;
TfLiteTensor* tflInputTensor = nullptr;
TfLiteTensor* tflOutputTensor = nullptr;

// Crear buffer de memoria estática para TFLM. El tamaño puede necesitar
// ajustes según el modelo utilizado.
constexpr int tensorArenaSize = 8 * 1024;
byte tensorArena[tensorArenaSize];

// Arreglo para mapear los índices de gestos a sus nombres
const char* GESTURES[] = {
  "punch",
  "flex"
};

#define NUM_GESTURES (sizeof(GESTURES) / sizeof(GESTURES[0]))

void setup() {
  Serial.begin(9600);
//  while (!Serial);

  lis.begin(Wire1);

  // Inicializar IMU
  if (!lis) {
    Serial.println("¡Fallo al inicializar el IMU!");
    while (1);
  }

  // Obtener la representación TFL del arreglo de bytes del modelo
  tflModel = tflite::GetModel(model);
  if (tflModel->version() != TFLITE_SCHEMA_VERSION) {
    Serial.println("¡Incompatibilidad en el esquema del modelo!");
    while (1);
  }

  // Crear intérprete para ejecutar el modelo
  tflInterpreter = new tflite::MicroInterpreter(tflModel, tflOpsResolver, tensorArena, tensorArenaSize, &tflErrorReporter);

  // Asignar memoria para los tensores de entrada y salida
  tflInterpreter->AllocateTensors();

  // Obtener punteros a los tensores
  tflInputTensor = tflInterpreter->input(0);
  tflOutputTensor = tflInterpreter->output(0);
}

void loop() {
  float x, y, z;

  // Esperar movimiento significativo
  while (samplesRead == numSamples) {
    x = lis.getAccelerationX();
    y = lis.getAccelerationY();
    z = lis.getAccelerationZ();

    float aSum = fabs(x) + fabs(y) + fabs(z);

    // Verificar si excede el umbral
    if (aSum >= accelerationThreshold) {
      samplesRead = 0;
      break;
    }
  }

  // Leer las muestras una vez detectado el movimiento
  while (samplesRead < numSamples) {
    x = lis.getAccelerationX();
    y = lis.getAccelerationY();
    z = lis.getAccelerationZ();

    // Normalizar los datos entre 0 y 1 y almacenarlos en el tensor de entrada
    tflInputTensor->data.f[samplesRead * 6 + 0] = (x + 4.0) / 8.0;
    tflInputTensor->data.f[samplesRead * 6 + 1] = (y + 4.0) / 8.0;
    tflInputTensor->data.f[samplesRead * 6 + 2] = (z + 4.0) / 8.0;

    samplesRead++;

    if (samplesRead == numSamples) {
      // Ejecutar inferencia
      TfLiteStatus invokeStatus = tflInterpreter->Invoke();
      if (invokeStatus != kTfLiteOk) {
        Serial.println("¡Error al invocar!");
        while (1);
        return;
      }

      // Mostrar los resultados
      for (int i = 0; i < NUM_GESTURES; i++) {
        Serial.print(GESTURES[i]);
        Serial.print(": ");
        Serial.println(tflOutputTensor->data.f[i], 6);
      }
      Serial.println();
    }
  }
}
```

* Coloca el archivo `model.h` entrenado en la **misma carpeta** que el archivo `IMU_Classifier.ino` y sube el código al Wio Terminal.

* Ahora, abre el Monitor Serial y realiza tus gestos. ¡Deberías ver la confianza (score) de cada gesto impresa (0 = baja, 1 = alta)!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/TF-step3.png"/></div>

## Archivos de Modelo de Ejemplo

Como referencia, se adjunta el modelo entrenado [model.h](https://files.seeedstudio.com/wiki/Wio-Terminal/res/model.h) para descargar. Puedes usarlo con `IMU_Classifier.ino` para realizar pruebas.

## Desarrollo Futuro

Para un desarrollo más avanzado, puedes entrenar más gestos en el Wio Terminal usando el IMU, ¡y hacer que disparen diferentes acciones! Explora el aprendizaje automático en microcontroladores con TensorFlow Lite.
