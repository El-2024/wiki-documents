---
description: MQTT Audio Streaming
title: MQTT Audio Streaming
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_steams_mqtt
last_update:
  date: 07/20/2025
  author: Guillermo
---

Este proyecto demuestra cómo usar la placa reSpeaker Lite, que incluye un microcontrolador XIAO ESP32S3 integrado, para generar y enviar datos de audio a un broker MQTT.

### Librería requerida

* [ArduinoMqttClient](https://www.arduino.cc/reference/en/libraries/arduinomqttclient/)

### Funcionalidad

El sketch realiza las siguientes tareas:

* Se conecta a la red WiFi especificada.
* Se conecta al broker MQTT especificado.
* Genera audio de ruido blanco usando la clase `WhiteNoiseGenerator` de la librería reSpeaker Lite.
* Codifica los datos de audio como un archivo WAV usando la clase `WAVEncoder`.
* Envía los datos de audio codificados al tópico MQTT especificado usando la clase `MqttClient` de la librería ArduinoMqttClient.
* Mantiene la conexión MQTT llamando regularmente a la función `poll()`.

### Código

Modifica las siguientes líneas del sketch para que coincidan con la configuración de tu red WiFi y broker MQTT:

```cpp
const char* ssid = "SSID";    // Tu SSID de Wi-Fi
const char* password = "PASSWORD";    // Tu contraseña de Wi-Fi
const char* broker = "test.mosquitto.org"; 
const char* topic = "audio.wav";
int port = 1883;
```

<details>
<summary>Código</summary>

```cpp
#include "WiFi.h"
#include "ArduinoMqttClient.h"
#include "AudioTools.h"

#define SIZE 1024
#define N 100

// Comunicación
const char* ssid = "SSID";    // Tu SSID de Wi-Fi
const char* password = "PASSWORD";    // Tu contraseña de Wi-Fi
const char* broker = "test.mosquitto.org"; 
const char* topic = "audio.wav";
int port = 1883;
WiFiClient wifiClient;
MqttClient mqttClient(wifiClient);

// Audio
AudioInfo info(16000, 1, 32);
WhiteNoiseGenerator<int16_t> noise(32000);                        // Generador de ruido blanco con amplitud máxima de 32000
GeneratedSoundStream<int16_t> in_stream(noise);                   // Flujo generado desde el ruido
EncodedAudioStream out_stream(&mqttClient, new WAVEncoder());     // Codifica como archivo WAV
StreamCopy copier(out_stream, in_stream, SIZE);                   // Copia el audio al cliente MQTT

// Conexión WiFi
void connectWIFI() {
  Serial.print("Conectando a la red Wi-Fi: ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);

  Serial.print("Conectando");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print('.');
    delay(1000);
  }

  Serial.println("¡Conectado a la red Wi-Fi!");
  Serial.println();  
}

// Conexión al servidor MQTT
void connectMQTT() {
  mqttClient.setId("reSpeaker");

  Serial.print("Conectando al broker MQTT: ");
  Serial.println(broker);

  if (!mqttClient.connect(broker, port)) {
    Serial.print("¡Conexión MQTT fallida! Código de error = ");
    Serial.println(mqttClient.connectError());
    stop();
  }

  Serial.println("¡Conectado al broker MQTT!");
  Serial.println();
}  

// Enviar audio al servidor MQTT
void sendMQTT() {
    out_stream.begin(info);
    mqttClient.beginMessage(topic, SIZE * N, true);
    copier.copyN(N);  // Copia 100 * 1024 bytes de audio
    mqttClient.endMessage();
}

void setup() {
  Serial.begin(115200);
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  connectWIFI();
  connectMQTT();

  noise.begin(info);
  in_stream.begin(info);

  sendMQTT();
}

void loop() {
  mqttClient.poll();
  delay(10000);
}
```

</details>

Abre el `Monitor Serial` para ver la salida y los registros:

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mqtt-log.png" alt="mqtt-log" width="600" />
</div>

Luego podrás visualizar los datos en tu servidor MQTT:

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mqtt-data.png" alt="mqtt-data" width="800" />
</div>

### Personalización

Puedes personalizar la generación y codificación del audio modificando las siguientes líneas del sketch:

```cpp
WhiteNoiseGenerator<int16_t> noise(32000);
GeneratedSoundStream<int16_t> in_stream(noise);
EncodedAudioStream out_stream(&mqttClient, new WAVEncoder());
```

* `WhiteNoiseGenerator` genera audio de ruido blanco con una amplitud máxima especificada.
* `GeneratedSoundStream` crea un flujo de entrada a partir del audio generado.
* `EncodedAudioStream` codifica los datos de audio utilizando el codificador especificado (WAV en este caso).

También puedes ajustar el tamaño de los datos de audio enviados modificando las constantes `SIZE` y `N`:

```cpp
#define SIZE 1024
#define N 100
```

* `SIZE` representa el tamaño de cada bloque de datos de audio.
* `N` representa la cantidad de bloques de datos de audio a enviar.
