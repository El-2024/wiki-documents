---
description: Keyword Spotting with ReSpeaker Lite and TensorFlow Lite
title: Detección de Palabras Clave
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_streams_i2s_tflite
last_update:
  date: 07/20/2024
  author: Guillermo
---

Este proyecto demuestra cómo realizar detección de palabras clave (keyword spotting) utilizando la placa **ReSpeaker Lite** y **TensorFlow Lite**.  
La ReSpeaker Lite es una placa de audio con un microcontrolador **XIAO ESP32S3** integrado, que cuenta con micrófono de doble canal y altavoz.  
El proyecto utiliza la librería **ReSpeaker Lite**, basada en el framework **AudioTools**, e integra **TensorFlow Lite** para clasificación de audio.

### Librerías Requeridas

* [TensorFlow Lite library](https://github.com/limengdu/tflite-micro-reSpeaker-Lite-arduino-examples)

### Funcionalidad

- Captura audio desde la interfaz I2S mediante la placa ReSpeaker Lite  
- Realiza detección de palabras clave usando un modelo preentrenado de TensorFlow Lite  
- Clasifica el audio capturado en categorías predefinidas: `silencio`, `desconocido`, `sí` y `no`  
- Proporciona una función de callback para responder a los comandos detectados  
- Utiliza el framework **AudioTools** para procesamiento y transmisión de audio  
- Incluye **AudioLogger** para depuración y monitoreo

### Código

Abre el sketch `streams-i2s-tflite.ino` en el IDE de Arduino.  
Carga el sketch en tu placa ReSpeaker Lite.

```cpp
#include "AudioTools.h"
#include "AudioLibs/TfLiteAudioStream.h"
#include "model.h"  // modelo de tensorflow

I2SStream i2s;  // Fuente de audio
TfLiteAudioStream tfl;  // Destino de audio (clasificador)
const char* kCategoryLabels[4] = {
    "silence",
    "unknown",
    "yes",
    "no",
};
StreamCopy copier(tfl, i2s);  // Copia el micrófono a TensorFlow Lite
int channels = 1;
int samples_per_second = 16000;

void respondToCommand(const char* found_command, uint8_t score,
                      bool is_new_command) {
  // Acción ante comando detectado
  char buffer[80];
  sprintf(buffer, "Resultado: %s, puntuación: %d, nuevo: %s", found_command, score,
          is_new_command ? "sí" : "no");
  Serial.println(buffer);
}

void setup() {
  Serial.begin(115200);
  AudioLogger::instance().begin(Serial, AudioLogger::Warning);

  // Configurar entrada de audio por I2S
  auto cfg = i2s.defaultConfig(RX_MODE);
  cfg.channels = channels;
  cfg.sample_rate = samples_per_second;
  cfg.use_apll = false;
  cfg.buffer_size = 512;
  cfg.buffer_count = 16;
  i2s.begin(cfg);

  // Configurar salida de audio para TensorFlow Lite
  auto tcfg = tfl.defaultConfig();
  tcfg.setCategories(kCategoryLabels);
  tcfg.channels = channels;
  tcfg.sample_rate = samples_per_second;
  tcfg.kTensorArenaSize = 10 * 1024;
  tcfg.respondToCommand = respondToCommand;
  tcfg.model = g_model;
  tfl.begin(tcfg);
}

void loop() { copier.copy(); }
```

Abre el `Monitor Serial` para ver la salida de resultados y mensajes de log.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/yes_or_no.png" alt="pir" width={800} height="auto" /></p>

### Configuración

`i2s`: Crea una instancia de la clase `I2SStream` para capturar audio desde la interfaz I2S.

`tfl`: Crea una instancia de `TfLiteAudioStream` para procesar el audio capturado usando TensorFlow Lite.

`kCategoryLabels`: Define las etiquetas de categoría para los resultados de clasificación.

`copier`: Crea un objeto `StreamCopy` para copiar el audio desde el flujo I2S al clasificador de TensorFlow.

`channels`: Número de canales de audio (1 para mono).

`samples_per_second`: Frecuencia de muestreo del audio de entrada.

`respondToCommand`: Función callback invocada cuando se detecta un comando. Recibe el comando detectado, la puntuación y un indicador de si es un nuevo comando.

### Personalización

* Puedes modificar el arreglo `kCategoryLabels` para definir tu propio conjunto de categorías de clasificación.

* La función `respondToCommand` puede personalizarse para realizar acciones específicas según los comandos detectados.

* El modelo de TensorFlow Lite puede sustituirse por uno entrenado por ti mismo actualizando el archivo model.h.

### Recursos

[Repositorio de ejemplo con TensorFlow Lite](https://github.com/limengdu/reSpeaker_Lite-Arduino-Library/tree/main/examples/streams-i2s-tflite)