---
description: Star Wars Theme Player with XIAO ESP32S3
title: Reproducto del Tema de Star Wars
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_streams_memory
last_update:
  date: 07/20/2024
  author: Guillermo
---

Este proyecto demuestra cómo reproducir el tema de Star Wars utilizando la placa reSpeaker Lite.

### Funcionalidad

* Reproduce el tema de Star Wars almacenado en memoria
* Utiliza la interfaz I2S para salida de audio
* Emplea el framework AudioTools para procesamiento y transmisión de audio
* Usa AudioLogger para depuración y monitoreo de forma sencilla

### Código

```cpp
#include "AudioTools.h"
#include "StarWars30.h"

AudioInfo info(22050, 1, 16);
I2SStream i2s;  // Salida por I2S
MemoryStream music(StarWars30_raw, StarWars30_raw_len);
StreamCopy copier(i2s, music); // copia el sonido al I2S

void setup(){
    Serial.begin(115200);
    AudioLogger::instance().begin(Serial, AudioLogger::Info);

    auto config = i2s.defaultConfig(TX_MODE);
    config.copyFrom(info);
    i2s.begin(config);
}

void loop(){
    if (!copier.copy()){
      i2s.end();
      stop();
    }
}
```

### Configuración

`info`: Define la configuración de audio, incluyendo la tasa de muestreo (22050 Hz), número de canales (1 para mono) y número de bits por muestra (16 bits).

`i2s`: Crea una instancia de la clase I2SStream para enviar audio a través de la interfaz I2S.

`music`: Crea un objeto MemoryStream para almacenar en memoria los datos del tema de Star Wars.

`copier`: Crea un objeto StreamCopy para copiar los datos de audio del flujo de memoria al flujo I2S.

### Personalización

Puedes reemplazar las variables `StarWars30_raw` y `StarWars30_raw_len` por tus propios datos de audio para reproducir una canción o efecto de sonido diferente.

La configuración de audio puede modificarse ajustando los parámetros del objeto `AudioInfo`, como la tasa de muestreo, el número de canales y los bits por muestra.
