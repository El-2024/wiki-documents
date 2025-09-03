---
description: TensorFlow Lite Micro Getting Started
title: Introducción a TensorFlow Lite Micro
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_TensorFlow_Lite
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-TinyML-TFLM-1
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Introducción a TensorFlow Lite Micro en Wio Terminal

Este artículo presenta cómo instalar la [librería oficial de TensorFlow Lite para Arduino](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/micro/examples/hello_world) en tu Wio Terminal, lo que te permitirá probar algunos modelos de aprendizaje automático (Machine Learning) directamente en el dispositivo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221174623.jpg" /></div>

Para más información, por favor visita [TensorFlow Lite for Microcontrollers](https://www.tensorflow.org/lite/microcontrollers).

Asegúrate de usar la versión **1.8.2** de las definiciones de placa **Seeed SAMD**. Consulta cómo verificar y actualizar las definiciones en la guía “Get started with Wio Terminal”.

## Instalar la librería Arduino TensorFlow Lite

La versión de la librería TensorFlow Lite para Arduino disponible actualmente en el **Administrador de Librerías del IDE de Arduino** está desactualizada (octubre de 2021). Por lo tanto, es necesario usar una versión de desarrollo del repositorio oficial de TensorFlow Lite for Microcontrollers.

Clona el repositorio con el siguiente comando:

```
git clone https://github.com/tensorflow/tflite-micro-arduino-examples Arduino_TensorFlowLite
```

y colócalo dentro de la carpeta `libraries` de tus **sketches de Arduino**. Puedes encontrar más detalles sobre la instalación de la última versión de desarrollo en el [repositorio oficial de TensorFlow Lite Micro para Arduino](https://github.com/tensorflow/tflite-micro-arduino-examples).

Los proyectos descritos en este artículo fueron probados con el commit `219ac1dfed8a8ba0edfdbaae51aed5dc9b208c0c` del repositorio.

## Ejecutar el ejemplo "Hello World" de Arduino TensorFlow Lite

Este ejemplo está diseñado para demostrar lo más básico del uso de TensorFlow Lite para microcontroladores. Incluye el flujo completo: entrenamiento de un modelo, conversión a formato TensorFlow Lite y ejecución de inferencia en un microcontrolador.

El modelo está entrenado para replicar una función seno. Hay implementaciones para varias plataformas. En todos los casos, el modelo genera una secuencia de datos que se usa para encender un LED o controlar una animación.

1. Ve a `Archivo` -> `Ejemplos` -> `Arduino_TensorFlowLite` -> `hello_world`. Se abrirá el sketch de ejemplo.

2. Si compilas el sketch ahora, aparecerá un **error de compilación** porque las funciones `min` y `max` definidas por la placa también están definidas en la librería TensorFlow. Para solucionarlo, agrega lo siguiente **antes** de incluir la librería:

```cpp
#undef max
#undef min
#include <TensorFlowLite.h>
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221173149.jpg" /></div>

3. Ahora haz clic en **Subir** y carga tu primer ejemplo de TensorFlow Lite en el Wio Terminal.

4. Abre el **Serial Plotter** y deberías ver una onda senoidal. Además, revisa el LED integrado en la parte trasera del Wio Terminal: debería encenderse y apagarse suavemente siguiendo la onda senoidal generada por TensorFlow Lite.

**Nota:** Si deseas ver la onda seno completa en el Serial Plotter (por ejemplo, que el LED parpadee más rápido), puedes hacer clic en el archivo **arduino\_constants.cpp** en la parte superior y cambiar el valor de `kInferencesPerCycle` a 100 como se muestra a continuación:

```cpp
const int kInferencesPerCycle = 100;
```