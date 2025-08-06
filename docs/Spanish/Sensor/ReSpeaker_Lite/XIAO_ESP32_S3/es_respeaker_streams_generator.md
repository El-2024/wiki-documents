---
description: Sine Wave Generator with ReSpeaker Lite
title: Generador de Onda Senoidal con ReSpeaker Lite
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_streams_generator
last_update:
  date: 07/20/2025
  author: Guillermo
---

Este proyecto demuestra cómo generar una onda senoidal y reproducirla utilizando la interfaz I2S en la placa **ReSpeaker Lite**.  
ReSpeaker Lite es una placa de audio con un microcontrolador **XIAO ESP32S3** integrado, que cuenta con micrófono de doble canal y altavoz.

### Funcionalidad

- Genera una onda senoidal con una frecuencia específica  
- Reproduce la onda senoidal mediante la interfaz I2S  
- Utiliza el framework **AudioTools** para el procesamiento y transmisión de audio  
- Incorpora **AudioLogger** para depuración y monitoreo

### Código

```cpp
#include "AudioTools.h"

AudioInfo info(16000, 2, 32);                              // Frecuencia de muestreo, canales (2=estéreo, 1=mono), bits por muestra (int16_t = 16 bits)
SineWaveGenerator<int16_t> sineWave(32000);                // Generador de onda senoidal con amplitud máxima de 32000
GeneratedSoundStream<int16_t> sound(sineWave);             // Flujo de audio generado a partir de la onda
I2SStream out; 
StreamCopy copier(out, sound);                             // Copia el sonido hacia la salida I2S

// Configuración de Arduino
void setup(void) {  
  // Iniciar comunicación serial
  Serial.begin(115200);
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  // Iniciar I2S
  Serial.println("Iniciando I2S...");
  auto config = out.defaultConfig(TX_MODE);
  config.copyFrom(info); 
  out.begin(config);

  // Iniciar generador de onda senoidal
  sineWave.begin(info, N_B4);
  Serial.println("Iniciado...");
}

// Bucle principal: copiar sonido hacia la salida I2S
void loop() {
  copier.copy();
}
```

### Configuración

`info`: Define la configuración de audio, incluyendo la frecuencia de muestreo, número de canales (2 para estéreo, 1 para mono), y bits por muestra (16 bits).

`sineWave`: Crea una instancia de la clase SineWaveGenerator con una amplitud máxima de 32000.

`sound`: Crea un objeto GeneratedSoundStream utilizando el generador de onda.

`out`: Crea una instancia de I2SStream para salida de audio.

`copier`: Crea un objeto StreamCopy para copiar el sonido generado a la salida I2S.

