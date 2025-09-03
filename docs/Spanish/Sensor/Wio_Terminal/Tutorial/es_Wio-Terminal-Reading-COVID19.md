---
description:  Reading Coronavirus Live Data using Wio Terminal
title:  Lectura de Datos en Vivo de COVID-19 usando Wio Terminal
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Reading-COVID19
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Lectura de Datos en Vivo del Coronavirus COVID-19 usando Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/COVID-19.gif" /></div>

Esta wiki es una modificación de [Lectura de Estadísticas de Repositorios de Github desde Wio Terminal](https://wiki.seeedstudio.com/Wio-Terminal-Reading-Github/), donde se modifica para acceder a la [API Coronavirus COVID19](https://covid19api.com/), parsear los datos y mostrar información en vivo del COVID-19 en la pantalla LCD.

## Lista de Componentes

* [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

* [Chasis con batería para Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html)

## Características

* Conexión a servidor https

* Obtención de datos en vivo vía API de COVID-19

* Pulsar botón para actualizar datos

## Librerías Arduino necesarias

* Instalar la librería para pantalla LCD `Seeed_Arduino_LCD`, visita [Wio Terminal LCD](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/) para más información.

* Visitar el repositorio de [ArduinoJson](https://github.com/bblanchon/ArduinoJson) y descargar el repositorio completo en tu computadora.

  * Luego, la librería ArduinoJson puede instalarse en el Arduino IDE. Abre el IDE, y haz clic en `Sketch` -> `Include Library` -> `Add .ZIP Library`, y selecciona el archivo `ArduinoJson` que descargaste.

* Para más información sobre conexión HTTPS, visita [**aquí**](https://wiki.seeedstudio.com/Wio-Terminal-Wi-Fi/#wi-fi-https-connection-example-code).

## Instrucciones Arduino

* Descarga el archivo de cabecera [`Free_Fonts.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Free_Fonts.h) para usar abreviaturas de las fuentes gratuitas incluidas en la librería LCD. Asegúrate de poner este archivo en la misma carpeta que el sketch de Arduino.

* Descarga el código completo [aquí](http://files.seeedstudio.com/wiki/Wio-Terminal/res/covid.zip) o copia el siguiente.

* Sube el código.

## Código Completo

**Nota:** Cambia `ssid` y `password` por los de tu red Wi-Fi.

```cpp
#include "rpcWiFi.h"
#include <WiFiClientSecure.h>
#include <ArduinoJson.h>
#include"Free_Fonts.h"
#include"TFT_eSPI.h"
TFT_eSPI tft;

const char* ssid     = "YourNetworkName";
const char* password = "yourNetworkPassword";

const char*  server = "api.covid19api.com";  // URL del servidor

const char* test_root_ca = \
                            "-----BEGIN CERTIFICATE-----\n"
                            "MIIEkjCCA3qgAwIBAgIQCgFBQgAAAVOFc2oLheynCDANBgkqhkiG9w0BAQsFADA/\n"
                            "MSQwIgYDVQQKExtEaWdpdGFsIFNpZ25hdHVyZSBUcnVzdCBDby4xFzAVBgNVBAMT\n"
                            "DkRTVCBSb290IENBIFgzMB4XDTE2MDMxNzE2NDA0NloXDTIxMDMxNzE2NDA0Nlow\n"
                            "SjELMAkGA1UEBhMCVVMxFjAUBgNVBAoTDUxldCdzIEVuY3J5cHQxIzAhBgNVBAMT\n"
                            "GkxldCdzIEVuY3J5cHQgQXV0aG9yaXR5IFgzMIIBIjANBgkqhkiG9w0BAQEFAAOC\n"
                            "AQ8AMIIBCgKCAQEAnNMM8FrlLke3cl03g7NoYzDq1zUmGSXhvb418XCSL7e4S0EF\n"
                            "q6meNQhY7LEqxGiHC6PjdeTm86dicbp5gWAf15Gan/PQeGdxyGkOlZHP/uaZ6WA8\n"
                            "SMx+yk13EiSdRxta67nsHjcAHJyse6cF6s5K671B5TaYucv9bTyWaN8jKkKQDIZ0\n"
                            "Z8h/pZq4UmEUEz9l6YKHy9v6Dlb2honzhT+Xhq+w3Brvaw2VFn3EK6BlspkENnWA\n"
                            "a6xK8xuQSXgvopZPKiAlKQTGdMDQMc2PMTiVFrqoM7hD8bEfwzB/onkxEz0tNvjj\n"
                            "/PIzark5McWvxI0NHWQWM6r6hCm21AvA2H3DkwIDAQABo4IBfTCCAXkwEgYDVR0T\n"
                            "AQH/BAgwBgEB/wIBADAOBgNVHQ8BAf8EBAMCAYYwfwYIKwYBBQUHAQEEczBxMDIG\n"
                            "CCsGAQUFBzABhiZodHRwOi8vaXNyZy50cnVzdGlkLm9jc3AuaWRlbnRydXN0LmNv\n"
                            "bTA7BggrBgEFBQcwAoYvaHR0cDovL2FwcHMuaWRlbnRydXN0LmNvbS9yb290cy9k\n"
                            "c3Ryb290Y2F4My5wN2MwHwYDVR0jBBgwFoAUxKexpHsscfrb4UuQdf/EFWCFiRAw\n"
                            "VAYDVR0gBE0wSzAIBgZngQwBAgEwPwYLKwYBBAGC3xMBAQEwMDAuBggrBgEFBQcC\n"
                            "ARYiaHR0cDovL2Nwcy5yb290LXgxLmxldHNlbmNyeXB0Lm9yZzA8BgNVHR8ENTAz\n"
                            "MDGgL6AthitodHRwOi8vY3JsLmlkZW50cnVzdC5jb20vRFNUUk9PVENBWDNDUkwu\n"
                            "Y3JsMB0GA1UdDgQWBBSoSmpjBH3duubRObemRWXv86jsoTANBgkqhkiG9w0BAQsF\n"
                            "AAOCAQEA3TPXEfNjWDjdGBX7CVW+dla5cEilaUcne8IkCJLxWh9KEik3JHRRHGJo\n"
                            "uM2VcGfl96S8TihRzZvoroed6ti6WqEBmtzw3Wodatg+VyOeph4EYpr/1wXKtx8/\n"
                            "wApIvJSwtmVi4MFU5aMqrSDE6ea73Mj2tcMyo5jMd6jmeWUHK8so/joWUoHOUgwu\n"
                            "X4Po1QYz+3dszkDqMp4fklxBwXRsW10KXzPMTZ+sOPAveyxindmjkW8lGy+QsRlG\n"
                            "PfZ+G6Z6h7mjem0Y+iWlkYcV4PIWL1iwBi8saCbGS5jN2p8M+X+Q7UNKEkROb3N6\n"
                            "KOqkqm57TH2H3eDJAkSnh6/DNFu0Qg==\n"
                            "-----END CERTIFICATE-----\n";

// Puedes usar certificados cliente x.509 si quieres
//const char* test_client_key = "";   // para verificar el cliente
//const char* test_client_cert = "";  // para verificar el cliente

String data;

WiFiClientSecure client;

void setup() {
    // Inicializa el puerto serial y espera que se abra:
    Serial.begin(115200);
    delay(100);

    pinMode(WIO_KEY_C, INPUT_PULLUP);

    Serial.print("Intentando conectar a SSID: ");
    Serial.println(ssid);
    WiFi.begin(ssid, password);

    tft.begin();
    tft.setRotation(3);
    tft.fillScreen(TFT_BLACK);
    tft.setFreeFont(FMB12);
    tft.setCursor((320 - tft.textWidth("Connecting to Wi-Fi.."))/2, 120);
    tft.print("Connecting to Wi-Fi..");

    // intenta conectar a la red Wifi:
    while (WiFi.status() != WL_CONNECTED) {
        Serial.print(".");
        // espera 1 segundo para reintentar
        delay(1000);
    }

    Serial.print("Conectado a ");
    Serial.println(ssid);

    tft.fillScreen(TFT_BLACK);
    tft.setCursor((320 - tft.textWidth("Connected!"))/2, 120);
    tft.print("Connected!");

    getData();
}

int lastState = 1;
void loop()
{
    int currentState = digitalRead(WIO_KEY_C);
    if (currentState == 0) {
      if (currentState != lastState) {
        getData();
      }
      lastState = !lastState;
    }
}

void getData() {
    client.setCACert(test_root_ca);
  //client.setCertificate(test_client_key); // para verificación cliente
  //client.setPrivateKey(test_client_cert); // para verificación cliente

    tft.fillScreen(TFT_BLACK);
    tft.setTextColor(TFT_WHITE);
    tft.setCursor((320 - tft.textWidth("Conectting to Server.."))/2, 120);
    tft.print("Connecting to Server..");

    Serial.println("\nIniciando conexión al servidor...");
    if (!client.connect(server, 443)) {
        Serial.println("¡Conexión fallida!");
        tft.fillScreen(TFT_BLACK);
        tft.setCursor((320 - tft.textWidth("Connection failed!"))/2, 120);
        tft.print("Connection failed!");
    } else {
        Serial.println("¡Conectado al servidor!");
        tft.fillScreen(TFT_BLACK);
        tft.setCursor((320 - tft.textWidth("Connected to Server!"))/2, 120);
        tft.print("Connected to Server!");

        // Hacer una solicitud HTTP:
        client.println("GET https://api.covid19api.com/world/total HTTP/1.0");
        client.println("Host: api.covid19api.com");
        client.println("Connection: close");
        client.println();

        while (client.connected()) {
            String line = client.readStringUntil('\n');
            if (line == "\r") {
                Serial.println("headers received");
                break;
            }
        }

        while(client.available())
        {
          String line = client.readStringUntil('\r');
          data = line;
        }
        Serial.println(data);
        client.stop();
        Serial.println("closing connection");
    }

    // ArduinoJson para parsear datos, revisa ArduinoJson para más info
    const size_t capacity = JSON_OBJECT_SIZE(3) + 50;
    DynamicJsonDocument doc(capacity);
    deserializeJson(doc, data);

    long TotalConfirmed = doc["TotalConfirmed"];
    long TotalDeaths = doc["TotalDeaths"];
    long TotalRecovered = doc["TotalRecovered"];

// -----------------LCD---------------------

    tft.fillScreen(tft.color565(24,15,60));
    tft.setFreeFont(FF17);
    tft.setTextColor(tft.color565(224,225,232));
    tft.drawString("COVID-19 Dashboard/Global",20,10);

    tft.fillRoundRect(10, 45, 300, 55, 5, tft.color565(40,40,86));
    tft.fillRoundRect(10, 105, 300, 55, 5, tft.color565(40,40,86));
    tft.fillRoundRect(10, 165, 300, 55, 5, tft.color565(40,40,86));

    tft.setFreeFont(FM9);
    tft.drawString("Total Confirmed", 75, 50);
    tft.drawString("Total Deaths",95, 110);
    tft.drawString("Total Recovered",75, 170);

    tft.setFreeFont(FMB12);
    tft.setTextColor(TFT_RED);
    tft.drawNumber(TotalConfirmed, 110, 75);
    tft.setTextColor(tft.color565(224,225,232));
    tft.drawNumber(TotalDeaths, 120, 135);
    tft.setTextColor(TFT_GREEN);
    tft.drawNumber(TotalRecovered, 110, 195);
}
```
