---
description:  Continuous Motion Recognition
title:  Continuous Motion Recognition
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-TinyML-EI-2
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Wio Terminal Edge Impulse: Reconocimiento Continuo de Movimiento con Acelerómetro Integrado

## Introducción

En este tutorial usarás Machine Learning para construir un sistema de reconocimiento de gestos que corre en Wio Terminal. El ML maneja con facilidad las variaciones de los gestos que son difíciles de programar con reglas estrictas.

Aprenderás a:

* Recoger datos de sensores reales a alta frecuencia.
* Procesar señales para limpiar los datos.
* Construir y entrenar un clasificador neuronal.
* Desplegar el modelo entrenado en el dispositivo.

Al final tendrás una sólida comprensión para aplicar ML en dispositivos embebidos usando Edge Impulse.

## 1. Prerrequisitos

* Sigue el tutorial [Wio Terminal Edge Impulse Getting Started](http://wiki.seeedstudio.com/Wio-Terminal-Edge-Impulse).

* Necesitas un dispositivo soportado (además de Wio Terminal):

  * ST B-L475E-IOT01A
  * Arduino Nano 33 BLE Sense
  * Eta Compute ECM3532 AI Sensor
  * Cualquier teléfono móvil compatible

* Conecta tu dispositivo y verifica que aparezca en Edge Impulse Studio > Devices.

## 2. Colección de Datos

* En el estudio ve a la pestaña **Data acquisition**.

* Selecciona:

  * Dispositivo conectado
  * Etiqueta: `idle` (por ejemplo)
  * Duración muestra: `5000 ms` (5 segundos)
  * Sensor: `Built-in accelerometer`
  * Frecuencia: `62.5 Hz`

* Presiona **Start sampling** y mueve el dispositivo de forma continua (ejemplo: arriba y abajo).

* Repite para otras etiquetas y movimientos, por ejemplo:

  * idle (sin movimiento)
  * wave (movimiento de izquierda a derecha)
  * circle (dibujar círculos)

* Recoge aproximadamente 3 minutos por clase con variaciones (velocidad, orientación, amplitud).

## 3. Diseñando un Impulso (Impulse)

* Ve a **Create impulse**.

* Configura:

  * Window size: `2000 ms`
  * Window increase: `80 ms`
  * Añade bloques:

    * `Spectral Analysis` (para extraer características de frecuencia)
    * `Neural Network (Keras)` (para clasificación)

* Configura el bloque de análisis espectral para filtrar ruido y extraer potencia/frecuencia.

* Guarda parámetros y genera características (Generate features).

* Explora los datos con **Feature explorer** para verificar que las clases se puedan distinguir visualmente.

## 4. Entrenando la Red Neuronal

* En la pestaña **NN Classifier**:

  * Empieza con `Number of training cycles` = 1, luego aumenta a 2, luego a 100 o más para entrenar.
* Observa la mejora en precisión y la matriz de confusión.
* Ten cuidado con el sobreajuste (100% precisión puede indicar overfitting).

## 5. Clasificando Datos Nuevos

* Ve a **Live classification**.
* Establece `Sample length` = 5000 ms.
* Presiona **Start sampling** y realiza movimientos para ver cómo clasifica el modelo en tiempo real.
* Si el rendimiento es pobre, revisa:

  * Cantidad y calidad de datos.
  * Etiquetado correcto.
  * Ajuste de ciclos de entrenamiento.
  * Arquitectura del modelo.

## 6. Detección de Anomalías

* Los modelos clásicos no detectan bien datos no vistos (gestos nuevos).

* Añade un bloque `K-means Anomaly Detection` en **Create impulse**.

* Configura con:

  * Número de clusters: 32
  * Ejes para clustering: RMS de accX, accY, accZ

* Entrena y usa la distancia a clusters para detectar anomalías.

* Esto evita clasificar erróneamente datos completamente nuevos.

## 7. Despliegue en Wio Terminal

* Ve a la pestaña **Deployment** y descarga la librería Arduino.

* Extrae y coloca en la carpeta de librerías Arduino.

* Abre Arduino IDE y carga el ejemplo `Inferencing Edge Impulse -> nano_ble33_sense_accelerometer`.

* Cambia:

  ```cpp
  #include <Arduino_LSM9DS1.h>
  ```

  por

  ```cpp
  #include "LIS3DHTR.h"
  #include "TFT_eSPI.h"

  LIS3DHTR<TwoWire> lis;
  TFT_eSPI tft;
  ```

* En `setup()`, reemplaza inicialización del IMU:

  ```cpp
  if (!IMU.begin()) {
      ei_printf("Failed to initialize IMU!\r\n");
  } else {
      ei_printf("IMU initialized\r\n");
  }
  ```

  por

  ```cpp
  tft.begin();
  tft.setRotation(3);
  tft.fillScreen(TFT_WHITE);

  lis.begin(Wire1);

  if (!lis.available()) {
      Serial.println("Failed to initialize IMU!");
      while (1);
  } else {
      ei_printf("IMU initialized\r\n");
  }
  lis.setOutputDataRate(LIS3DHTR_DATARATE_100HZ);
  lis.setFullScaleRange(LIS3DHTR_RANGE_16G);
  ```

* En la función `loop()`, cambia la lectura de aceleración:

  ```cpp
  IMU.readAcceleration(buffer[ix], buffer[ix + 1], buffer[ix + 2]);
  ```

  por

  ```cpp
  lis.getAcceleration(&buffer[ix], &buffer[ix + 1], &buffer[ix + 2]);
  ```

* Para mostrar resultados en LCD, después de:

  ```cpp
  #if EI_CLASSIFIER_HAS_ANOMALY == 1
      ei_printf("    anomaly score: %.3f\n", result.anomaly);
  #endif
  ```

  agrega:

  ```cpp
  if (result.classification[1].value > 0.7) {
      tft.fillScreen(TFT_PURPLE);
      tft.setFreeFont(&FreeSansBoldOblique12pt7b);
      tft.drawString("Wave", 20, 80);
      delay(1000);
      tft.fillScreen(TFT_WHITE);
  }

  if (result.classification[2].value > 0.7) {
      tft.fillScreen(TFT_RED);
      tft.setFreeFont(&FreeSansBoldOblique12pt7b);
      tft.drawString("Circle", 20, 80);
      delay(1000);
      tft.fillScreen(TFT_WHITE);
  }
  ```

* Compila y sube el sketch al Wio Terminal.

* Usa el monitor serie para ver resultados y observa la pantalla LCD.

## 8. Conclusión

Machine learning en dispositivos embebidos permite construir sistemas inteligentes que aprenden de la experiencia, detectan patrones y anomalías en datos de sensores sin programación explícita.

Edge Impulse facilita esta transformación, permitiendo procesar datos directamente en el dispositivo, ahorrando energía y ancho de banda.

¡Explora y crea soluciones innovadoras con TinyML en Wio Terminal!

## Referencias

* [Edge Impulse Continuous Motion Recognition](https://docs.edgeimpulse.com/docs/continuous-motion-recognition)
* [Wio Terminal Edge Impulse Getting Started](http://wiki.seeedstudio.com/Wio-Terminal-Edge-Impulse)
