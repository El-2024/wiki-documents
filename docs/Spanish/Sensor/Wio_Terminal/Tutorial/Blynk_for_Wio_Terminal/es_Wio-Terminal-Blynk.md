---
title: Conexión a Blynk
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-Blynk/
slug: /es/Wio-Terminal-Blynk
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Conectando Wio Terminal a Blynk

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/banner.gif" /></div>

Este wiki presenta cómo usar el Wio Terminal con el software [**Blynk**](https://blynk.io/) para interactuar vía Wi-Fi o Bluetooth. Esto te permite usar Wio Terminal como el núcleo de un dispositivo IoT y controlar el hardware desde el teléfono muy fácilmente.

- **¿Qué es Blynk?**

[**Blynk**](https://blynk.io/) es una plataforma que te permite construir rápidamente interfaces para controlar y monitorear tus proyectos de hardware desde dispositivos iOS y Android. Tras descargar la app Blynk, puedes crear un panel de proyecto y colocar botones, deslizadores, gráficos y otros widgets en la pantalla.

## Hardware requerido

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- Teléfono móvil  
  - Descargar la app Blynk desde la tienda de aplicaciones

## Comenzando

### Instalando la blynk-library

1. Visita el repositorio de la [**blynk-library**](https://github.com/blynkkk/blynk-library) y descarga todo el repositorio a tu disco local.

2. Ahora, la librería puede instalarse en Arduino IDE. Abre Arduino IDE, y haz clic en `Sketch` -> `Include Library` -> `Add .ZIP Library`, y elige el archivo `blynk-library` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### Dependencias Wi-Fi

Por ahora, el Wi-Fi y Bluetooth son **dos firmwares separados** para Wio Terminal y **no pueden usarse simultáneamente**.

> Nota: El nuevo firmware que permite Wi-Fi y Bluetooth funcionando juntos está en desarrollo y será liberado pronto.

- Sigue el **[Wi-Fi Overview Wiki](https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/)** para subir el firmware Wi-Fi al Wio Terminal.

- También descarga e instala todas las librerías dependientes de Wi-Fi.

### Dependencias Bluetooth

- Sigue el [**Bluetooth Overview Wiki**](https://wiki.seeedstudio.com/Wio-Terminal-Bluetooth-Overview/) para subir el firmware Bluetooth al Wio Terminal.

- También descarga e instala todas las librerías dependientes de Bluetooth.

## Configuración de la App móvil Blynk

Una vez que hayas descargado la app Blynk:

- Abre la app.

- Haz clic en **New Project**:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/1.jpg" /></div>

- Llena el **nombre del proyecto**, elige **Arduino UNO** como dispositivo, y selecciona **WiFi** o **Bluetooth** como tipo de conexión. Luego haz clic en Crear proyecto:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/1.1.png" /></div>

- Ahora, recibirás un **token enviado al correo con el que te registraste en Blynk**. Este token será necesario luego en los sketches de Arduino.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/3.png" /></div>

## Ejemplos con Wi-Fi

Estos ejemplos usan Wi-Fi para comunicarse entre Wio Terminal y la app Blynk:

### Conexión Wi-Fi simple

Este ejemplo se conecta a un Wi-Fi específico y luego al servidor Blynk:

- Reemplaza el **token** que recibiste en tu email por `auth`.

- Reemplaza el `SSID` y la `Password` de tu red.

- Sube el sketch a Wio Terminal.

```cpp
#define BLYNK_PRINT Serial

#include <rpcWiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleWioTerminal.h>

// Debes obtener el token Auth en la app Blynk.
// Ve a Configuración del Proyecto (icono de tuerca).
char auth[] = "TuToken";

// Tus credenciales WiFi.
// Deja vacío "" la contraseña para redes abiertas.
char ssid[] = "SSID";
char pass[] = "Password";

void setup()
{
  // Consola de depuración
  Serial.begin(9600);

  Blynk.begin(auth, ssid, pass);
}

void loop()
{
  Blynk.run();
}
```

Una vez subido, abre la app Blynk en tu teléfono y pulsa el botón `play` en la esquina superior derecha para activar el proyecto. ¡Deberías ver que está conectado!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/wifi.png" /></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/4.png" /></div>

## Enviar temperatura a Blynk

Este ejemplo demuestra cómo enviar datos desde Wio Terminal al servidor Blynk, que luego puedes visualizar en la app móvil.

* Reemplaza las credenciales WiFi y el token.

* Los datos de temperatura se envían al **Pin Virtual 0** (`V0`).

* Sube el sketch a Wio Terminal.

```cpp
#define BLYNK_PRINT Serial

#include <rpcWiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleWioTerminal.h>

// Your WiFi credentials.
const char* ssid = "SSID";
const char* pass = "Password";

// You should get Auth Token in the Blynk App.
// Go to the Project Settings (nut icon).
char auth[] = "YourToken";

BlynkTimer timer;

void sendTemperature() {
  // Generate random temperature value 10.0 to 30.0 (for example)
  float t = float(random(100, 300)) / 10;
  // Format: 1 decimal place, add ℃
  String str = String(t, 1) + "℃";
  // Send it to the server
  Blynk.virtualWrite(V0, str);
}


void setup() {
  // Debug console
  Serial.begin(9600);

  Blynk.begin(auth, ssid, pass);
  timer.setInterval(1000L, sendTemperature);
}

void loop() {
  Blynk.run();
  timer.run();
}
```

Ahora abre la app Blynk en tu teléfono móvil nuevamente.

- Desliza hacia la izquierda para abrir el Widget Box y selecciona **Value Display**:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/step-1.png" /></div>

- Haz clic en el botón y configura el widget para asignarlo al **Pin Virtual 0**:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/step-3.png" /></div>

- Guarda la configuración y pulsa el botón de reproducción en la esquina superior derecha para activar el proyecto. ¡Podrás ver los valores de temperatura en tu teléfono!

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/step-4.png" /></div>

## Ejemplos Bluetooth

Estos ejemplos usan Bluetooth para comunicar el Wio Terminal con la app Blynk:

### Conexión Bluetooth simple

Ejemplo básico de conexión Bluetooth del Wio Terminal con el Bluetooth del teléfono móvil:

- Reemplaza el token por `auth`.

- Sube el sketch a Wio Terminal.

```cpp
#define BLYNK_PRINT Serial
#define BLYNK_USE_DIRECT_CONNECT

#include <BlynkSimpleWioTerminal_BLE.h>
#include <BLEDevice.h>
#include <BLEServer.h>

// Debes obtener el token Auth en la app Blynk.
// Ve a Configuración del Proyecto (icono de tuerca).
char auth[] = "TuToken";

void setup()
{
  // Consola de depuración
  Serial.begin(9600);
  Serial.println("Esperando conexiones...");
  Blynk.setDeviceName("Blynk");
  Blynk.begin(auth);
}

void loop()
{
  Blynk.run();
}
```

Ahora abre la app Blynk y configura lo siguiente:

* Desliza hacia la izquierda para abrir el Widget Box y baja hasta encontrar el widget **BLE**:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/ble-1.jpg" /></div>

* Haz clic en el widget **BLE** y selecciona conectar con un dispositivo BLE llamado `Blynk`:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/ble-3.jpg" /></div>

* Una vez conectado el BLE, pulsa el botón de reproducción para activar el proyecto:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/ble-4.jpg" /></div>

¡Ahora Wio Terminal está conectado con Blynk usando Bluetooth!

### Controlando tiras RGB con Blynk

Este ejemplo conecta una tira RGB al Wio Terminal y usa Blynk para controlar el color que se muestra.

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/RGB.mp4" type="video/mp4" />
  </video></div>

#### Instalar la librería Adafruit_NeoPixel

1. Visita el repositorio de [Adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel) y descarga todo el repositorio a tu disco local.

2. Ahora, la librería puede ser instalada en el IDE de Arduino. Abre el IDE de Arduino, y haz clic en `Sketch` -> `Include Library` -> `Add .ZIP Library`, y selecciona el archivo `Adafruit_NeoPixel` que acabas de descargar.

- Configura el `PIN` y `NUMPIXELS` de acuerdo a tu entorno.
- Los valores RGB son leídos desde la app Blynk y asignados al **Pin Virtual 2 (V2)**.
- Sube el código a Wio Terminal.

```cpp
#define BLYNK_PRINT Serial
#define BLYNK_USE_DIRECT_CONNECT

#include <BlynkSimpleWioTerminal_BLE.h>
#include <BLEDevice.h>
#include <BLEServer.h>
#include <Adafruit_NeoPixel.h>

#include <TFT_eSPI.h> // Librería específica del hardware
TFT_eSPI tft = TFT_eSPI();       // Instancia la librería personalizada

#define PIN 0
#define NUMPIXELS 20
#define BLYNK_PRINT Serial
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

// Debes obtener el token Auth en la app Blynk.
// Ve a Configuración del Proyecto (icono de tuerca).
char auth[] = "TuToken";

BLYNK_WRITE(V2)
{
  int R = param[0].asInt();
  int G = param[1].asInt();
  int B = param[2].asInt();
  tft.fillScreen(tft.color565(R, G, B));
  for (int i = 0; i < NUMPIXELS; i++) {
    pixels.setPixelColor(i, pixels.Color(R, G, B));
    pixels.show();
  }
}

void setup() {
  // Consola de depuración
  Serial.begin(9600);
  Serial.println("Esperando conexiones...");
  Blynk.setDeviceName("Blynk");

  Blynk.begin(auth);
  
  tft.begin();
  tft.fillScreen(TFT_BLACK);
  pixels.begin();
}

void loop() {
  Blynk.run();
}
```

Abre la app Blynk y configura lo siguiente:

* Desliza hacia la izquierda para abrir el Widget Box y baja hasta encontrar el widget **zeRGBa**:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/rgb-1.png" /></div>

* Haz clic en el widget zeRGBa y configura lo siguiente: establece la salida a **Merge** y asigna al **Pin Virtual 2 (V2)**. Ajusta los valores para que vayan de **0 a 255**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/rgb-2.png" /></div>

* Asegúrate que el widget BLE esté conectado primero y pulsa el botón Play para activar el proyecto. ¡Podrás cambiar el color RGB de la tira LED simplemente arrastrando el color en la app Blynk!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/rgb-result.png" /></div>

## Soporte Técnico y Discusión de Producto

Gracias por elegir nuestros productos. Estamos aquí para brindarte diferentes canales de soporte que aseguren que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
