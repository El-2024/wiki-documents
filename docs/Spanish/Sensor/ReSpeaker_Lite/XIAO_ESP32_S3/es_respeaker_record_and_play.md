---
description: Recording and playback
title: Grabación y Reproducción
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_record_and_play
last_update:
  date: 07/20/2025
  author: Guillermo
---

### Funcionalidad

Este proyecto demuestra un mecanismo básico de **loopback** utilizando la interfaz I2S, para probar las funciones de lectura y escritura de datos de audio I2S. Al cambiar el modo I2S, los datos de audio se leen desde el micrófono y luego se escriben en el altavoz.

### Código

```cpp
#include "AudioTools.h"

AudioInfo info(16000, 2, 32);
// SineWaveGenerator<int16_t> sineWave(32000);                // Subclase de SoundGenerator con amplitud máxima de 32000
// GeneratedSoundStream<int16_t> sound(sineWave);             // Stream generado desde onda senoidal
I2SStream out; 
I2SConfig config;
// StreamCopy copier(out, sound);                             // Copia el sonido hacia el I2S

uint8_t buffer[128000];
size_t bytes_read = 0;
size_t bytes_write = 0;

// Configuración de Arduino
void setup(void) {  
  // Iniciar Serial
  Serial.begin(115200);
  while(!Serial);
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  // Iniciar I2S
  Serial.println("iniciando I2S...");
  config = out.defaultConfig(TX_MODE);
  config.copyFrom(info); 
  // Pines personalizados de salida I2S
  config.pin_bck = 8;
  config.pin_ws = 7;
  config.pin_data = 43;
  config.pin_data_rx = 44;
  config.is_master = false;
  out.begin(config);

  // Configurar onda senoidal
  // sineWave.begin(info, N_B4);
  Serial.println("iniciado...");
}

// Bucle de Arduino - copiar sonido a la salida
void loop() {
  // copier.copy();
  out.end();
  config.rx_tx_mode = RX_MODE;
  out.begin(config);
  bytes_read = out.readBytes(buffer, 128000);
  out.end();
  config.rx_tx_mode = TX_MODE;
  out.begin(config);
  bytes_write = out.write(buffer, 128000);
}
```

### Personalización

**Modificar la duración de lectura y escritura**

Puedes controlar la duración de las operaciones de lectura y escritura de audio ajustando el tamaño del búfer y la cantidad de bytes usados en out.readBytes y out.write. 

**Ejemplo**: 0.5 segundos de audio

```cpp
uint8_t buffer[64000];
bytes_read = out.readBytes(buffer, 64000);
bytes_write = out.write(buffer, 64000);
```

:::tip
Asegúrate de contar con suficiente memoria dinámica para alojar el búfer, especialmente cuando leas períodos largos de datos de audio. Si tu dispositivo ESP32-S3 no tiene suficiente memoria, puede que necesites optimizar el uso de memoria o considerar soluciones alternativas.
:::






