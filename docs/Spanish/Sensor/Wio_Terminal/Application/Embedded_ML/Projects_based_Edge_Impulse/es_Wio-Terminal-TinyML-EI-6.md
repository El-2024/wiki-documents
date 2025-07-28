---
description:  Anomaly detection for Predictive Maintenance
title:  Anomaly detection for Predictive Maintenance
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-TinyML-EI-6
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Detección de Anomalías con Edge Impulse en Wio Terminal para Mantenimiento Predictivo

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_19_2725-1536x864.png"/></div>

En este proyecto, usaremos los datos del acelerómetro integrado del Wio Terminal, realizaremos detección de anomalías en el propio dispositivo y luego enviaremos los datos a la nube de Blynk Edgent.

Anomalías. O específicamente, detección de anomalías para mantenimiento predictivo. Usaremos datos del acelerómetro integrado del Wio Terminal, realizaremos inferencia de un modelo de red neuronal y detección de anomalías directamente en el dispositivo, y luego enviaremos los datos a la nueva versión de la plataforma Blynk IoT, que incluye muchas nuevas funciones y ofrece compatibilidad total con Wio Terminal.

Para el tutorial completo y una demostración en video, consulta el siguiente enlace:

<iframe width="560" height="315" src="https://www.youtube.com/embed/gXs-h3eeT1U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Eso es el **QUÉ**, ahora veamos el **CÓMO**. Comencemos con un ejemplo más familiar.

## Detección de anomalías y mantenimiento predictivo en pocas palabras

Si entrenas un modelo simple de reconocimiento de imágenes para identificar 5 clases de animales (tigre, elefante, oso, serpiente y jirafa) y luego le das una imagen de una persona, el modelo hará una predicción lo mejor que pueda y posiblemente diga que es un elefante. Entra la risa de quienes no comprenden cómo funciona internamente este modelo ni la visión por computadora en general.

Por supuesto, el modelo no hizo nada mal: procesó la imagen, calculó las características presentes y luego entregó un resultado de clasificación basado en ellas. Pero si graficamos las características por clase y las agrupamos, veríamos que idealmente las características de la imagen humana están lejos de cualquier grupo, representando así un “valor atípico” (outlier).

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/knowing_all_about_outliers_in_machine_learning_sample_points_in_green_are_near_to_each_other.png"/></div>

Esto podría ser simplemente una imagen muy extraña de uno de los animales, pero en la mayoría de los casos es mucho más probable que sea un objeto que el modelo no fue entrenado para reconocer.

Para tareas de visión por computadora o reconocimiento de voz, frecuentemente tenemos una clase llamada “fondo” o “background” para manejar este problema, representando todo lo que no pertenece a las clases de interés. Pero en algunas situaciones, solo queremos que el modelo interprete los datos como “normales” o “anormales”. No importa cuáles sean exactamente las características de “anormalidad”; lo importante es que, si se detecta esta condición, se deben tomar medidas. Esta es la base del aprendizaje automático aplicado al **mantenimiento predictivo**: monitoreamos el estado de un dispositivo —como un aire acondicionado, bomba de agua u otra maquinaria— con sensores, y en función de un perfil de operación “normal”, tratamos de detectar cuándo **algo comienza a ir ligeramente mal**, antes de que se convierta en una falla grave.

## Recolección de datos y entrenamiento del modelo

Para este proyecto, instalé un Wio Terminal en una bomba de agua ubicada en el patio de la oficina, que cuenta con plantas y peces.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_04_2007-1536x864.png"/></div>

Recolecté dos categorías de muestras: inactivo y funcionamiento normal, y entrené un modelo simple para reconocer ambas, usando la salida del bloque de procesamiento de características espectrales (Spectral Features).

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-1.png"/></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-2.png"/></div>

Puedes consultar los parámetros exactos del procesamiento y los bloques de aprendizaje en la versión pública del proyecto que compartí. El único ajuste significativo que hice fue cambiar el filtro de bajo a alto, lo cual permitió destacar mejor las diferencias entre clases. Distinguir entre bomba inactiva y operando normalmente resultó ser fácil. La tarea más desafiante fue la detección de fallas. Para simular una falla, saqué la bomba del tanque —esto redujo los niveles de sonido y vibración.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_19_2725-1536x864.png"/></div>

Al observar la muestra de fallo en el Explorador de Características (Feature Explorer) en los ejes accX RMS, accY RMS y accZ RMS, vemos que está a medio camino entre las muestras de inactividad y operación normal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-3-1536x906.png"/></div>

Podemos aprovechar esto entrenando una **segunda red neuronal** que cree agrupaciones (clusters) alrededor de los datos conocidos y compare los nuevos datos con esas agrupaciones. Si la distancia a un cluster es demasiado grande, se marca como anomalía.

Tras ensayo y error, encontré que una **muy baja cantidad de clusters** y un **umbral de distancia de 0.5** funcionaba mejor para detección de anomalías, aunque esto depende mucho de los datos específicos. Un truco que mejoró la precisión fue fijar el Wio Terminal firmemente a la bomba con pegamento (o tornillos en una instalación real). Antes de fijarlo, el Wio Terminal se movía aleatoriamente, introduciendo demasiado ruido en las muestras normales.

## Despliegue y prueba

Una vez entrenado y probado el modelo usando el modo de clasificación en vivo, es momento de desplegarlo al dispositivo. Compilamos y descargamos la biblioteca de Arduino, la extraemos en la carpeta de bibliotecas y luego modificamos el sketch `nano33_ble_sense_accelerometer` para que coincida con el acelerómetro del Wio Terminal. Para una prueba simple, usamos la pantalla LCD que se ilumina en rojo si se detecta una anomalía.

```cpp
#define ANOMALY_THRESHOLD 0.5
/* Includes ---------------------------------------------------------------- */
#include <wio_anomaly_detection_inference.h>
#include "LIS3DHTR.h"
#include "TFT_eSPI.h"

TFT_eSPI tft;
LIS3DHTR<TwoWire> lis;

// Conversión de G a m/s²
#define CONVERT_G_TO_MS2    9.80665f
static bool debug_nn = false; // Para ver características generadas por la señal cruda

void setup()
{
    Serial.begin(115200);
    Serial.println("Demo de Inferencia con Edge Impulse");
    
    tft.begin();
    tft.setRotation(3);
    
    lis.begin(Wire1);
 
    if (!lis.available()) {
        Serial.println("¡Error al inicializar IMU!");
        while (1);
    } else {
        ei_printf("IMU inicializado\r\n");
    }

    lis.setOutputDataRate(LIS3DHTR_DATARATE_100HZ);
    lis.setFullScaleRange(LIS3DHTR_RANGE_16G);

    if (EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME != 3) {
        ei_printf("ERR: EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME debe ser 3 (los 3 ejes del sensor)\n");
        return;
    }
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

void loop()
{
    ei_printf("Muestreando...\n");
    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };

    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);

        lis.getAcceleration(&buffer[ix], &buffer[ix+1], &buffer[ix + 2]);
        buffer[ix + 0] *= CONVERT_G_TO_MS2;
        buffer[ix + 1] *= CONVERT_G_TO_MS2;
        buffer[ix + 2] *= CONVERT_G_TO_MS2;

        delayMicroseconds(next_tick - micros());
    }

    signal_t signal;
    int err = numpy::signal_from_buffer(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, &signal);
    if (err != 0) {
        ei_printf("Error al crear señal desde buffer (%d)\n", err);
        return;
    }

    ei_impulse_result_t result = { 0 };
    err = run_classifier(&signal, &result, debug_nn);
    if (err != EI_IMPULSE_OK) {
        ei_printf("ERR: Error al ejecutar el clasificador (%d)\n", err);
        return;
    }

    ei_printf("Predicciones ");
    ei_printf("(DSP: %d ms., Clasificación: %d ms., Anomalía: %d ms.)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
    }

#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    puntuación de anomalía: %.3f\n", result.anomaly);
    if (result.anomaly > ANOMALY_THRESHOLD)
    {       
        tft.fillScreen(TFT_RED);
        tft.setFreeFont(&FreeSansBoldOblique12pt7b);
        tft.drawString("Anomalía detectada", 20, 80);
        delay(1000);
        tft.fillScreen(TFT_WHITE);
    }
#endif
}

#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_ACCELEROMETER
#error "Modelo inválido para el sensor actual"
#endif
```

Por supuesto, en una aplicación real, este tipo de notificación no sería suficiente, ya que no habrá una persona observando todo el tiempo.

## Uso de la nueva plataforma Blynk IoT

Para hacer esta demostración realmente útil, usaremos la plataforma **Blynk IoT**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/b641e2030c1c47fbc7161c98a7e5d998.jpg"/></div>

La plataforma incluye funcionalidades como tablero web, control de acceso, administrador de Wi-Fi, creación de plantillas de dispositivos, entre otros.

1. Visita [blynk.cloud](https://blynk.cloud), crea una cuenta o inicia sesión.
2. Crea una nueva plantilla, elige “Arduino Uno” como hardware y “Wi-Fi” como tipo de conexión.
3. Completa las pestañas de **Datastreams** y **Dashboard** como se muestra:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-4-1536x551.png"/></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-5.png"/></div>

No usaremos las pestañas **Metadata** ni **Events** para este proyecto.

### Componentes clave de una plantilla de dispositivo:

* **Metadata** – Información adicional configurable.
* **Datastreams** – Define los datos entrantes y salientes (similar a pines virtuales).
* **Events** – Lista de alertas importantes.
* **Web Dashboard / Mobile Dashboard** – Conjunto de widgets en la interfaz web o móvil.

Luego crea un nuevo dispositivo en la pestaña **My Devices**, eligiendo la plantilla y asignando un nombre.

La interfaz web ya estará lista para recibir datos del Wio Terminal. Descarga el sketch de ejemplo desde el repositorio de ejemplos de Seeed Studio, donde el código de inferencia fue encapsulado en `run_inference()`. El resultado con mayor confianza (si supera el umbral) se guarda en `best_result` y se envía al servidor Blynk junto con datos de luz y sonido.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/image-6.png"/></div>

Tras cargar el código, el Wio Terminal creará un hotspot Wi-Fi. Conéctate desde tu teléfono, ingresa las credenciales de Wi-Fi, el token de API (obtenido desde “Device Info”) y pulsa “Connect”. A partir de ahí, se enviarán datos automáticamente a la nube.

Este mismo enfoque puede aplicarse a otras máquinas. El acelerómetro sirve para detectar vibraciones en cualquier parte móvil, y también se puede usar un micrófono si hay sonido. ¡Incluso la combinación de sensores puede mejorar el desempeño!

¿Tienes más ideas donde usar mantenimiento predictivo? ¡Déjalas en los comentarios!

## Referencias

* [Proyecto público en Edge Impulse](https://studio.edgeimpulse.com/public/31205/latest)
* [Repositorio en GitHub del proyecto](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_5_Anomaly_Detection)

