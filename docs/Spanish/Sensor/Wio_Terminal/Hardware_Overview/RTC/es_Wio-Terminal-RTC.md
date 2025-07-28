---
description: Overview
title: Descripción General del RTC
keywords:
- Wio_terminal RTC
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-RTC
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Descripción General del RTC

Esta guía muestra cómo utilizar la funcionalidad RTC integrada en el núcleo SAMD51 del Wio Terminal para llevar el control del tiempo. ¡Esta función te evita tener que agregar un módulo RTC externo al sistema!

![](https://files.seeedstudio.com/wiki/Wio-Terminal-RTC/demo.png)

## Instalación de la Librería Seeed_Arduino_RTC para Wio Terminal

1. Visita el repositorio [Seeed_Arduino_RTC](https://github.com/Seeed-Studio/Seeed_Arduino_RTC) y descarga todo el repositorio en tu unidad local.

2. Ahora, puedes instalar la librería Seeed_Arduino_RTC en el IDE de Arduino. Abre el IDE, haz clic en `Programa` -> `Incluir Librería` -> `Añadir Biblioteca .ZIP`, y selecciona el archivo `Seeed_Arduino_RTC` que descargaste.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Código de Ejemplo

El siguiente código muestra el uso básico de la librería RTC para SAMD51:  
> Para más información sobre la API, consulta [aquí](https://github.com/Seeed-Studio/Seeed_Arduino_RTC)

```cpp
#include "RTC_SAMD51.h"
#include "DateTime.h"

RTC_SAMD51 rtc;

void setup()
{
    rtc.begin();

    Serial.begin(115200);

    while (!Serial) { ; }

    DateTime now = DateTime(F(__DATE__), F(__TIME__));
    Serial.println("¡Ajustar la hora!");
    rtc.adjust(now);

    now = rtc.now();

    Serial.print(now.year(), DEC);
    Serial.print('/');
    Serial.print(now.month(), DEC);
    Serial.print('/');
    Serial.print(now.day(), DEC);
    Serial.print(" ");
    Serial.print(now.hour(), DEC);
    Serial.print(':');
    Serial.print(now.minute(), DEC);
    Serial.print(':');
    Serial.print(now.second(), DEC);
    Serial.println();

    DateTime alarm = DateTime(now.year(), now.month(), now.day(), now.hour(), now.minute(), now.second() + 15);

    rtc.setAlarm(0, alarm); // alarma tras 15 segundos
    rtc.enableAlarm(0, rtc.MATCH_HHMMSS); // coincide cada día

    rtc.attachInterrupt(alarmMatch); // función callback cuando la alarma coincide
}

void loop()
{
}

void alarmMatch(uint32_t flag)
{
    Serial.println("¡Alarma activada!");
    DateTime now = rtc.now();
    Serial.print(now.year(), DEC);
    Serial.print('/');
    Serial.print(now.month(), DEC);
    Serial.print('/');
    Serial.print(now.day(), DEC);
    Serial.print(" ");
    Serial.print(now.hour(), DEC);
    Serial.print(':');
    Serial.print(now.minute(), DEC);
    Serial.print(':');
    Serial.print(now.second(), DEC);
    Serial.println();
}
```

## Uso Avanzado del RTC

También puedes usar NTP para obtener la hora actual y configurarla en el RTC.

* Para esta demostración, primero debes seguir la guía **[Wio Terminal Network wiki](https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/)**.

### Librerías Dependientes

* Librerías relacionadas con red para Wio Terminal
* [Seeed\_Arduino\_RTC](https://github.com/Seeed-Studio/Seeed_Arduino_RTC)
* [millisDelay](https://github.com/ansonhe97/millisDelay)

```cpp
// Incluye WiFi, millisDelay, RTC y demás librerías necesarias
#include <AtWiFi.h>
#include <millisDelay.h>
#include <Wire.h>
#include "RTC_SAMD51.h"
#include "DateTime.h"

const char ssid[] = "Tu-SSID"; // tu red WiFi
const char password[] = "Tu-contraseña"; // tu contraseña

millisDelay updateDelay; // objeto para actualización periódica vía NTP

unsigned int localPort = 2390; // puerto local UDP

//#define USELOCALNTP // activa esto para usar servidor NTP local

#ifdef USELOCALNTP
    char timeServer[] = "n.n.n.n"; // servidor NTP local
#else
    char timeServer[] = "time.nist.gov"; // servidor NTP externo
#endif

const int NTP_PACKET_SIZE = 48;
byte packetBuffer[NTP_PACKET_SIZE];

DateTime now;
WiFiClient client;
WiFiUDP udp;
unsigned long devicetime;

RTC_SAMD51 rtc;

char daysOfTheWeek[7][12] = { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" };

void setup() {
    Serial.begin(115200);
    while (!Serial);

    connectToWiFi(ssid, password);

    devicetime = getNTPtime();

    if (devicetime == 0) {
        Serial.println("Error al obtener la hora del servidor NTP.");
    }

    if (!rtc.begin()) {
        Serial.println("No se encontró el RTC.");
        while (1) delay(10);
    }

    now = rtc.now();
    Serial.print("Hora del RTC: ");
    Serial.println(now.timestamp(DateTime::TIMESTAMP_FULL));

    rtc.adjust(DateTime(devicetime));
    Serial.println("Hora del RTC actualizada desde NTP.");
    now = rtc.now();
    Serial.print("Hora RTC ajustada: ");
    Serial.println(now.timestamp(DateTime::TIMESTAMP_FULL));

    updateDelay.start(12 * 60 * 60 * 1000); // actualizar cada 12 horas
}

void loop() {
    if (updateDelay.justFinished()) {
        updateDelay.repeat();
        devicetime = getNTPtime();
        if (devicetime == 0) {
            Serial.println("Error al obtener la hora desde NTP.");
        } else {
            rtc.adjust(DateTime(devicetime));
            Serial.println("Hora RTC actualizada.");
            now = rtc.now();
            Serial.print("Hora RTC ajustada: ");
            Serial.println(now.timestamp(DateTime::TIMESTAMP_FULL));
        }
    }
}

void connectToWiFi(const char* ssid, const char* pwd) {
    Serial.println("Conectando a la red WiFi: " + String(ssid));
    WiFi.disconnect(true);
    WiFi.begin(ssid, pwd);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
    }

    Serial.println("Conectado.");
    printWifiStatus();
}

unsigned long getNTPtime() {
    if (WiFi.status() == WL_CONNECTED) {
        udp.begin(WiFi.localIP(), localPort);
        sendNTPpacket(timeServer);
        delay(1000);
        if (udp.parsePacket()) {
            udp.read(packetBuffer, NTP_PACKET_SIZE);
            unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);
            unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);
            unsigned long secsSince1900 = highWord << 16 | lowWord;
            const unsigned long seventyYears = 2208988800UL;
            unsigned long epoch = secsSince1900 - seventyYears;
            long tzOffset = 28800UL; // UTC+8
            unsigned long adjustedTime = epoch + tzOffset;
            return adjustedTime;
        } else {
            udp.stop();
            return 0;
        }
        udp.stop();
    } else {
        return 0;
    }
}

unsigned long sendNTPpacket(const char* address) {
    for (int i = 0; i < NTP_PACKET_SIZE; ++i) {
        packetBuffer[i] = 0;
    }
    packetBuffer[0] = 0b11100011;
    packetBuffer[1] = 0;
    packetBuffer[2] = 6;
    packetBuffer[3] = 0xEC;
    packetBuffer[12] = 49;
    packetBuffer[13] = 0x4E;
    packetBuffer[14] = 49;
    packetBuffer[15] = 52;

    udp.beginPacket(address, 123);
    udp.write(packetBuffer, NTP_PACKET_SIZE);
    udp.endPacket();
}

void printWifiStatus() {
    Serial.println("");
    Serial.print("SSID: ");
    Serial.println(WiFi.SSID());
    IPAddress ip = WiFi.localIP();
    Serial.print("Dirección IP: ");
    Serial.println(ip);
    long rssi = WiFi.RSSI();
    Serial.print("Intensidad de señal (RSSI): ");
    Serial.print(rssi);
    Serial.println(" dBm");
}
```
