---
description: Audio System Design Tool
title: Herramienta de Diseño de Sistemas de Audio
keywords:
- Wio_terminal Audio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Audio-GUI
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Herramienta de Diseño de Sistemas de Audio

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/GUI.gif"/></div>

Esta wiki introduce cómo usar la **Herramienta de Diseño de Sistemas de Audio** para diseñar un sistema de audio para la biblioteca Audio usando [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) y [**ReSpeaker 2-Mic Hat**](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html). Esto facilita mucho el diseño del sistema de audio al poder visualizar hacia dónde van las entradas y salidas.

> **Esta es una bifurcación (fork) de Seeed de la [Herramienta de Diseño de Sistemas de Audio para Teensy Audio Library](https://www.pjrc.com/teensy/gui/).**

## Primeros Pasos

- Visita la [**Herramienta de Diseño de Sistemas de Audio**](https://seeed-studio.github.io/Seeed_Arduino_Audio/) aquí. Para más información sobre esto, también visita [teensy](https://www.pjrc.com/teensy/).

- Una vez en el sitio, deberías ver todas las **funciones disponibles de la biblioteca Audio en la columna de la izquierda**.

- Puedes hacer clic en cada clase y ver las funciones disponibles dentro de cada clase y cómo usarlas.

### Diseño de un Sistema de Audio

#### Reproducción de archivos de música desde tarjeta SD

Vamos a usar un ejemplo para entender lo básico de la Herramienta de Diseño de Audio. Supongamos que quieres reproducir una canción desde la tarjeta SD por el altavoz usando ReSpeaker 2-Mic Hat:

- **`INPUT`** es la reproducción desde la tarjeta SD.

- **`OUTPUT`** es la salida I2S.

- **`wm8960`** es la unidad de control del ReSpeaker 2-Mics.

Entonces el diseño debería verse algo así:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/simple-play.png"/></div>

- Haz clic en **Export** en la parte superior para exportar las definiciones de Macros del sistema para pegarlas en el Arduino IDE.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/pasting.png"/></div>

#### Código de Ejemplo

Este código de ejemplo usa las definiciones de Macros del sistema diseñado previamente, reproduce archivos de música desde la tarjeta SD.

:::note
Por favor asegúrate de que existen los archivos de música `SDTEST1.wav`, `SDTEST2.wav`, `SDTEST3.wav` y `SDTEST4.wav` en la tarjeta MicroSD del Wio Terminal.
:::

```cpp
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

// GUItool: begin automatically generated code
AudioPlaySdWav           playSdWav1;     //xy=376,277
AudioOutputI2S           i2s1;           //xy=611,277
AudioConnection          patchCord1(playSdWav1, 0, i2s1, 0);
AudioConnection          patchCord2(playSdWav1, 1, i2s1, 1);
AudioControlWM8960       wm8960_1;       //xy=496,363
// GUItool: end automatically generated code

void setup() {
  Serial.begin(9600);
  while(!Serial);

  // Las conexiones de audio requieren memoria para funcionar. Para más
  // información detallada, consulta el ejemplo MemoryAndCpuUsage
  AudioMemory(8);

  wm8960_1.enable();
  wm8960_1.volume(0.7);

  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {
    Serial.println("Fallo al montar la tarjeta");
    return;
  }
}

void playFile(const char *filename)
{
  Serial.print("Reproduciendo archivo: ");
  Serial.println(filename);
  // Comienza la reproducción del archivo. Este sketch continúa
  // ejecutándose mientras se reproduce el archivo.
  playSdWav1.play(filename);
  // Breve retraso para que la librería lea la info WAV
  delay(5);
  // Esperar hasta que termine la reproducción del archivo.
  while (playSdWav1.isPlaying()) {
  }
}

void loop() {
  playFile("SDTEST1.WAV");  // Los nombres de archivos siempre en mayúsculas y formato 8.3
  delay(500);
  playFile("SDTEST2.WAV");
  delay(500);
  playFile("SDTEST3.WAV");
  delay(500);
  playFile("SDTEST4.WAV");
  delay(1500);
}
```

### Detección de Picos

Usemos la herramienta de diseño para crear un sistema para detección de picos mientras se reproduce música desde la tarjeta SD.

* **`INPUT`** es la reproducción desde la tarjeta SD.

* **`OUTPUT`** es la salida I2S y dos picos! Un pico para el canal izquierdo y otro para el derecho.

* **`wm8960`** es la unidad de control del ReSpeaker 2-Mics.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak-detection-gui.png"/></div>

#### Código de Ejemplo

Por favor revisa [aquí](https://wiki.seeedstudio.com/Wio-Terminal-Audio-Play-Record/#peak-detection).

### Visualizador de Espectro de Audio

Este es un ejemplo de reproducir música desde tarjeta SD mientras se realiza una FFT para obtener datos de frecuencia para implementar un Visualizador de Espectro de Audio.

* **`INPUT`** es la reproducción desde la tarjeta SD.

* **`OUTPUT`** es la salida I2S y cálculos FFT.

* **`wm8960`** es la unidad de control del ReSpeaker 2-Mics.

Aquí introduciremos otra función útil, el **Mezclador (Mixer)**. Esto permite combinar hasta **cuatro** canales de audio en uno solo. Esto se usa porque realizar FFT combinando canales (izquierdo y derecho) es más preciso que con un solo canal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/audio-spc-gui.png"/></div>

#### Código de Ejemplo

Por favor revisa [aquí](https://wiki.seeedstudio.com/Wio-Terminal-Audio-Play-Record/#audio-spectrum-visualizer).

### Grabación y Reproducción en Tiempo Real

Esta vez diseñemos un sistema para grabar y reproducir en tiempo real!

* **`INPUT`** es la grabación desde el micrófono: **Entrada I2S** -> **RecordQueue**

* **`OUTPUT`** es la salida I2S. **PlayQueue** -> **Salida I2S**

* **`wm8960`** es la unidad de control del ReSpeaker 2-Mics.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/record-play-realtime.png"/></div>

#### Código de Ejemplo

Por favor revisa [aquí](https://wiki.seeedstudio.com/Wio-Terminal-Audio-Play-Record/#record-and-play-at-real-time).

