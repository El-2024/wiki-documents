---
description: MP3 Player with XIAO ESP32S3
title: Reproductor MP3
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_player_spiffs
last_update:
  date: 07/19/2025
  author: Guillermo
---

Este proyecto demuestra cómo utilizar la placa ReSpeaker Lite para reproducir archivos MP3 almacenados en el sistema de archivos SPIFFS.

### Librerías requeridas

* [ReSpeaker Lite library](https://github.com/limengdu/reSpeaker_Lite-Arduino-Library.git)
* [ReSpeaker Lite arduino libhelix](https://github.com/limengdu/reSpeaker_Lite-arduino-libhelix)

### Funcionalidad

* Reproduce archivos MP3 desde el sistema de archivos SPIFFS
* Utiliza la interfaz I2S para la salida de audio
* Soporta extracción de metadatos y función de callback
* Clase `AudioPlayer` fácil de usar para una reproducción fluida

### Carga de archivos a SPIFFS

Puedes consultar la [Wiki oficial](https://wiki.seeedstudio.com/xiao_esp32s3_sense_filesystem/#serial-peripheral-interface-flash-file-system-spiffs).

Asegúrate de contar con las herramientas necesarias para subir archivos a SPIFFS. Puedes utilizar la herramienta **ESP32 Sketch Data Upload** en el IDE de Arduino o alguna herramienta externa como **ESP32 File Uploader**.

1. Crea una carpeta llamada `data` en el directorio de tu sketch.
2. Coloca dentro los archivos MP3 que deseas reproducir.
3. Sube los archivos al SPIFFS usando la herramienta de tu elección.

### Código de ejemplo

```cpp
#include "AudioTools.h"
#include "AudioLibs/AudioSourceSPIFFS.h"
#include "AudioCodecs/CodecMP3Helix.h"

const char *startFilePath="/";
const char* ext="mp3";
AudioSourceSPIFFS source(startFilePath, ext);
I2SStream i2s;
MP3DecoderHelix decoder;
AudioPlayer player(source, i2s, decoder);

void printMetaData(MetaDataType type, const char* str, int len){
  Serial.print("==> ");
  Serial.print(toStr(type));
  Serial.print(": ");
  Serial.println(str);
}

void setup() {
  Serial.begin(115200);
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  // Configurar salida I2S
  auto cfg = i2s.defaultConfig(TX_MODE);
  i2s.begin(cfg);

  // Configurar reproductor
  //source.setFileFilter("*Bob Dylan*");
  player.setMetadataCallback(printMetaData);
  player.begin();
}

void loop() {
  player.copy();
}
```

### Configuración

`startFilePath`: Ruta del directorio donde se encuentran los archivos MP3 en SPIFFS (por defecto: "/").

`ext`: Extensión de los archivos de audio (por defecto: "mp3").

Puedes modificar estas constantes según la estructura de archivos que estés utilizando.

### Personalización

`printMetaData`: Esta función se llama cuando se extraen metadatos del archivo de audio. Puedes modificarla para manejar los metadatos según tus necesidades.

`AudioSourceSPIFFS`: AudioSourceSPIFFS: Puedes aplicar un filtro a los archivos descomentando la línea: //source.setFileFilter("*Bob Dylan*"); y reemplazando por el criterio de tu preferencia.