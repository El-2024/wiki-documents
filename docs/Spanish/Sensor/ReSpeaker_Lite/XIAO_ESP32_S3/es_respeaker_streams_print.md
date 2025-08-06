---
description: I2S to CSV Converter with ReSpeaker Lite
title: Convertidor I2S a CSV
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_streams_print
last_update:
  date: 07/20/2025
  author: Guillermo
---

Este proyecto demuestra cómo capturar datos de audio desde la interfaz I2S utilizando la placa reSpeaker Lite y convertirlos a formato CSV para análisis o procesamiento posterior. La reSpeaker Lite es una placa de audio con un microcontrolador XIAO ESP32S3 integrado, que cuenta con un micrófono de dos canales y altavoz.

### Funcionalidad

* Captura datos de audio desde la interfaz I2S
* Convierte los datos de audio capturados a formato CSV
* Transmite los datos CSV a través de la interfaz serial para su procesamiento
* Utiliza el framework AudioTools para procesamiento y transmisión de audio
* Emplea AudioLogger para depuración y monitoreo de manera sencilla

### Código

```cpp
#include "AudioTools.h"

AudioInfo info(16000, 2, 32);
I2SStream i2sStream; // Acceso a I2S como flujo
CsvOutput<int32_t> csvStream(Serial);
StreamCopy copier(csvStream, i2sStream); // Copia i2sStream a csvStream

// Configuración de Arduino
void setup(void) {
    Serial.begin(115200);
    AudioLogger::instance().begin(Serial, AudioLogger::Info);
    
    auto cfg = i2sStream.defaultConfig(RX_MODE);
    cfg.copyFrom(info);
    cfg.i2s_format = I2S_STD_FORMAT; // también puedes probar con I2S_LSB_FORMAT
    cfg.is_master = false;  // este módulo necesita un reloj maestro si el ESP32 es maestro
    cfg.use_apll = false;   // también puedes probar con true
    i2sStream.begin(cfg);

    // Asegúrate de que los canales estén correctamente configurados
    csvStream.begin(info);
}

// Bucle principal de Arduino - copia de datos
void loop() {
    copier.copy();
}
```

### Configuración

`info`: Define la configuración de audio, incluyendo la tasa de muestreo (16000 Hz), el número de canales (2 para estéreo, 1 para mono) y los bits por muestra (32 bits).

`i2sStream`: Crea una instancia de la clase `I2SStream` para acceder a la interfaz I2S como flujo de datos.

`csvStream`: Crea un objeto `CsvOutput` para convertir los datos de audio a formato CSV y transmitirlos por la interfaz serial.

`copier`: Crea un objeto `StreamCopy` para copiar los datos de audio desde el flujo I2S hacia el flujo CSV.

`cfg`: Configura el flujo I2S con los ajustes deseados, como el formato de audio, el modo maestro/esclavo y el uso del APLL.

Abre el `Serial Plotter` de Arduino para visualizar las ondas de salida capturadas en tiempo real.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/waves.gif" alt="pir" width={600} height="auto" /></p>
 