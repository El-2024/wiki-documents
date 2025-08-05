---
title: Advanced Wi-Fi Usage
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-Advanced-Wi-Fi/
slug: /es/Wio-Terminal-Advanced-Wi-Fi
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Uso Avanzado de Wi-Fi

Esta wiki introduce algunos usos avanzados de las librerías Wi-Fi como **HTTPClient, DNSServer y WebServer**. Con estas librerías implementadas, puedes desarrollar proyectos IoT con APIs simples.

Asegúrate de haber seguido la [**Descripción General de la Red**](https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/) para actualizar el **firmware y librerías dependientes** a la última versión.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/banner.png" /></div>

:::note
    Asegúrate que la versión del firmware RTL8720 sea >= v2.0.2
:::

## Uso de HTTPClient

HTTPClient facilita realizar solicitudes **HTTP GET, POST y PUT** a un servidor web. Aquí tienes ejemplos para empezar.

### Ejemplo HTTP GET

Este ejemplo usa HTTPClient para realizar una conexión HTTP simple y mostrar la respuesta en el Monitor Serial.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/HTTP.png" /></div>

- Cambia `yourNetwork` y `yourPassword` por el **SSID** y la **contraseña** de tu red WiFi.

- Sube el código a tu Wio Terminal.

```cpp
#include <rpcWiFi.h>
#include <HTTPClient.h>

const char* ssid = "yourNetwork";
const char* password =  "yourPassword";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println("Connecting..");
  }
  Serial.print("Conectado a la red WiFi con IP: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    Serial.print("[HTTP] begin...\n");
    http.begin("http://www.example.com/index.html");
    Serial.print("[HTTP] GET...\n");
    int httpCode = http.GET();

    if (httpCode > 0) {
      Serial.printf("[HTTP] GET... código: %d\n", httpCode);
      if (httpCode == HTTP_CODE_OK) {
        String payload = http.getString();
        Serial.println(payload);
      }
    } else {
      Serial.printf("[HTTP] GET... fallo, error: %s\n", http.errorToString(httpCode).c_str());
    }
    http.end();
  }
  delay(5000);
}
```

### Ejemplo HTTPs GET

Este ejemplo usa HTTPClient para conexión **HTTPs**. Útil para hacer solicitudes seguras a sitios web.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/HTTPs.png" /></div>

* Cambia `yourNetwork` y `yourPassword` por tu SSID y contraseña.

* Sube el código a tu Wio Terminal.

```cpp
#include <rpcWiFi.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h>

const char* ssid = "yourNetwork";
const char* password =  "yourPassword";

const char* test_root_ca = \
  "-----BEGIN CERTIFICATE-----\n"
  "MIIESjCCAzKgAwIBAgINAeO0mqGNiqmBJWlQuDANBgkqhkiG9w0BAQsFADBMMSAw\n"
  "... (certificado completo aquí) ...\n"
  "-----END CERTIFICATE-----\n";

WiFiClientSecure client;

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println("Connecting..");
  }
  Serial.print("Conectado a la red WiFi con IP: ");
  Serial.println(WiFi.localIP());

  client.setCACert(test_root_ca);
}

void loop() {
  if (&client) {
    {
      HTTPClient https;
      Serial.print("[HTTPS] begin...\n");
      if (https.begin(client, "https://www.google.com/index.html")) {
        Serial.print("[HTTPS] GET...\n");
        int httpCode = https.GET();

        if (httpCode > 0) {
          Serial.printf("[HTTPS] GET... código: %d\n", httpCode);
          if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
            String payload = https.getString();
            Serial.println(payload);
          }
        } else {
          Serial.printf("[HTTPS] GET... fallo, error: %s\n", https.errorToString(httpCode).c_str());
        }
        https.end();
      } else {
        Serial.println("[HTTPS] No se pudo conectar");
      }
    }
  } else {
    Serial.println("No se pudo crear el cliente");
  }

  Serial.println();
  Serial.println("Esperando 10s para la siguiente ronda...");
  delay(10000);
}
```

### Ejemplo HTTP POST

Este ejemplo muestra cómo enviar una solicitud **HTTP POST** usando HTTPClient desde Wio Terminal a un servidor web. Para esta demo, usamos Python para montar un servidor web simple que recibe y responde solicitudes HTTP.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/HTTP-POST.png" /></div>
```

## Servidor Python Simple para HTTP POST

Para recibir solicitudes POST desde Wio Terminal, primero instala la librería **bottle** en Python:

```bash
pip install bottle
```

Guarda este código como **`simple-server.py`** en tu computadora (cambia el puerto si quieres, pero debe coincidir con el código Arduino):

```python
from bottle import run, request, post

@post('/')
def index():
    data = request.body.read()
    print("Datos recibidos:", data)
    return "Mensaje recibido"

run(host='0.0.0.0', port=1880, debug=True)
```

Ejecuta el servidor con:

```bash
python simple-server.py
```

## Código Arduino - Cliente HTTP POST

* Cambia `yourNetwork` y `yourPassword` por tus credenciales WiFi.

* Cambia `yourLocalIp` por la IP local de la computadora que corre el servidor Python (y asegúrate que el puerto sea el mismo).

* Sube el código al Wio Terminal.

```cpp
#include <rpcWiFi.h>
#include <HTTPClient.h>

const char* ssid = "yourNetwork";
const char* password =  "yourPassword";

// IP local del servidor Python (ajusta la IP y puerto)
const char* yourLocalIp = "http://10.0.0.233:1880/";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println("Connecting..");
  }
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(yourLocalIp);
    http.addHeader("Content-Type", "text/plain");

    int httpResponseCode = http.POST("Hello Bottle, from Wio Terminal");

    if (httpResponseCode > 0) {
      Serial.print("HTTP Response Code: ");
      Serial.println(httpResponseCode);
    } else {
      Serial.print("Error sending request: ");
      Serial.println(httpResponseCode);
    }

    http.end();
  } else {
    Serial.println("Error in WiFi connection");
  }
  delay(5000);
}
```

## Uso de WebServer en Wio Terminal

Puedes montar un servidor web en Wio Terminal para controlar hardware o leer sensores desde cualquier navegador conectado a la misma red.

### Ejemplo Simple: Servidor "Hello World"

* Cambia `yourNetwork` y `yourPassword` por tus credenciales.

* Sube el código al Wio Terminal.

* En un navegador, entra a la IP que muestra el serial para ver la página.

```cpp
#include <rpcWiFi.h>
#include <WiFiClient.h>
#include <WebServer.h>

const char *ssid = "yourNetwork";
const char *password = "yourPassword";

WebServer server(80);

const int led = 13;

void handleRoot() {
  digitalWrite(led, HIGH);
  server.send(200, "text/plain", "hello from Wio Terminal!");
  digitalWrite(led, LOW);
}

void handleNotFound() {
  digitalWrite(led, HIGH);
  String message = "File Not Found\n\n";
  message += "URI: " + server.uri() + "\n";
  message += "Method: " + (server.method() == HTTP_GET ? "GET" : "POST") + "\n";
  message += "Arguments: " + String(server.args()) + "\n";
  for (uint8_t i = 0; i < server.args(); i++) {
    message += " " + server.argName(i) + ": " + server.arg(i) + "\n";
  }
  server.send(404, "text/plain", message);
  digitalWrite(led, LOW);
}

void setup() {
  pinMode(led, OUTPUT);
  digitalWrite(led, LOW);
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  server.on("/", handleRoot);

  server.on("/inline", []() {
    server.send(200, "text/plain", "this works as well");
  });

  server.onNotFound(handleNotFound);

  server.begin();
  Serial.println("HTTP server started");
}

void loop() {
  server.handleClient();
}
```

# Servidor Web con Autenticación HTTP

Este ejemplo crea un servidor web que solicita usuario y contraseña para acceder. Ideal para proteger páginas o funciones sensibles.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/auth.gif" /></div>

* Cambia `yourNetwork` y `yourPassword` con tus datos WiFi.

* Sube el código al Wio Terminal.

* Accede desde un navegador a la IP del dispositivo en la red local e ingresa las credenciales:

```cpp
#include <rpcWiFi.h>
#include <WebServer.h>

const char *ssid = "yourNetwork";
const char *password = "yourPassword";

WebServer server(80);

const char* www_username = "admin";
const char* www_password = "password";

void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  if (WiFi.waitForConnectResult() != WL_CONNECTED) {
    Serial.println("WiFi Connect Failed! Rebooting...");
    delay(1000);
    NVIC_SystemReset(); // Reinicia el Wio Terminal
  }

  server.on("/", []() {
    if (!server.authenticate(www_username, www_password)) {
      return server.requestAuthentication();
    }
    server.send(200, "text/plain", "Login OK");
  });
  server.begin();

  Serial.print("Abre http://");
  Serial.print(WiFi.localIP());
  Serial.println("/ en tu navegador para probar");
}

void loop() {
  server.handleClient();
}
```

# Uso de DNSServer para Red Wi-Fi en Modo AP

DNSServer permite que dispositivos conectados a tu AP usen un nombre de dominio personalizado para acceder al servidor web, sin tener que ingresar la IP.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/DNS.gif" /></div>

* Usa DNSServer solo en modo **Access Point (AP)**.

* Incluye la librería `#include <DNSServer.h>`.

* Declara un objeto `DNSServer`.

* Inicia el servidor DNS con `start()`.

* Procesa las peticiones DNS con `processNextRequest()` en el `loop()`.

Ejemplo:

```cpp
#include <rpcWiFi.h>
#include <DNSServer.h>
#include <WebServer.h>

IPAddress local_IP(192, 168, 1, 1);
IPAddress gateway(192, 168, 1, 1);
IPAddress subnet(255, 255, 255, 0);

const byte DNS_PORT = 53;

DNSServer dnsServer;
WebServer webserver(80);

void handleRoot() {
  webserver.send(200, "text/plain", "Página raíz accesible vía nombre de dominio");
}

void handleP1() {
  webserver.send(200, "text/plain", "Página 1 accesible vía nombre de dominio");
}

void setup() {
  WiFi.mode(WIFI_AP);
  WiFi.softAPConfig(local_IP, gateway, subnet);
  WiFi.softAP("DNSServer example");

  webserver.on("/", handleRoot);
  webserver.on("/p1", handleP1);

  dnsServer.start(DNS_PORT, "www.wioterminal.com", local_IP); // Dominio personalizado
  webserver.begin();
}

void loop() {
  dnsServer.processNextRequest();
  webserver.handleClient();
}
```

* Conecta tu PC al Wi-Fi `DNSServer example`.

* Accede en el navegador a `http://www.wioterminal.com` o `http://www.wioterminal.com/p1`.

# Introducción a mDNS (Multicast DNS)

[mDNS](https://en.wikipedia.org/wiki/Multicast_DNS) permite resolver nombres de host a direcciones IP dentro de redes locales pequeñas sin un servidor DNS centralizado. Facilita el acceso a dispositivos en una LAN sin necesidad de configurar IPs manualmente, usando nombres tipo `wio.local`.

Es especialmente útil para dispositivos IoT en redes domésticas o pequeñas oficinas, aumentando la usabilidad sin configuración extra.

### Instalar la librería Seeed\_Arduino\_rpcmDNS

1. Visita el repositorio [**Seeed\_Arduino\_rpcmDNS**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcmDNS) y descarga todo el repositorio a tu disco local.

2. Ahora, la librería Seeed\_Arduino\_rpcmDNS puede ser instalada en el IDE de Arduino. Abre el IDE de Arduino, y haz clic en `Sketch` -> `Include Library` -> `Add .ZIP Library`, y selecciona el archivo `Seeed_Arduino_rpcmDNS` que acabas de descargar.

### Ejemplo de servidor web mDNS

Este es un ejemplo que configura un servidor web mDNS en el Wio Terminal para que otros dispositivos conectados en la misma red puedan navegar en el servidor web mediante un nombre definido.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/mdns-webserver.png" /></div>

* Cambia `yourNetwork` y `yourPassword` por el **ssid** y **contraseña** de tu red WiFi.

* Sube el código al Wio Terminal.

* Accede al servidor web ingresando [http://WioTerminal.local/](http://WioTerminal.local/) desde la misma red usando un navegador, e ingresa el usuario y contraseña predefinidos.

```cpp
#include <rpcWiFi.h>
#include <RPCmDNS.h>
#include <WiFiClient.h>

const char* ssid     = "yourNetwork";
const char* password = "yourPassword";

// Servidor TCP en el puerto 80 responderá solicitudes HTTP
WiFiServer server(80);

void setup(void)
{  
    Serial.begin(115200);
    while(!Serial){
        ;
    }
    Serial.printf("Inicio de configuración \r\n");
    // Conectar a la red WiFi
    WiFi.begin(ssid, password);
    Serial.println("");

    // Esperar conexión
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("");
    Serial.print("Conectado a ");
    Serial.println(ssid);
    Serial.print("Dirección IP: ");
    Serial.println(WiFi.localIP());

    // Configurar el respondedor mDNS:
    // - primer argumento es el nombre de dominio, en este ejemplo
    //   el nombre completo de dominio es "esp8266.local"
    // - segundo argumento es la dirección IP a anunciar
    //   enviamos nuestra dirección IP en la red WiFi
    if (!MDNS.begin("WioTerminal")) {
        Serial.println("Error al configurar el respondedor MDNS!");
        while(1) {
            delay(1000);
        }
    }
    Serial.println("Respondedor mDNS iniciado");

    // Iniciar servidor TCP (HTTP)
    server.begin();
    Serial.println("Servidor TCP iniciado");

    // Agregar servicio a MDNS-SD
    MDNS.addService("http", "tcp", 80);

    Serial.printf("Configuración terminada \r\n");
}

void loop(void)
{
    // Verificar si un cliente se ha conectado
    WiFiClient client = server.available();
    if (!client) {
        return;
    }
    Serial.println("");
    Serial.println("Nuevo cliente");
    // Esperar que haya datos disponibles del cliente
    while(client.connected() && !client.available()){
        delay(1);
    }
    // Leer la primera línea de la solicitud HTTP
    String req = client.readStringUntil('\r');
    // La primera línea de la solicitud HTTP es algo como "GET /ruta HTTP/1.1"
    // Obtener la parte "/ruta" encontrando los espacios
    int addr_start = req.indexOf(' ');
    int addr_end = req.indexOf(' ', addr_start + 1);
    if (addr_start == -1 || addr_end == -1) {
        Serial.print("Solicitud inválida: ");
        Serial.println(req);
        return;
    }
    req = req.substring(addr_start + 1, addr_end);
    Serial.print("Solicitud: ");
    Serial.println(req);

    String s;
    if (req == "/")
    {
        IPAddress ip = WiFi.localIP();
        String ipStr = String(ip[0]) + '.' + String(ip[1]) + '.' + String(ip[2]) + '.' + String(ip[3]);
        s = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<!DOCTYPE HTML>\r\n<html>Hola desde Wio Terminal en ";
        s += ipStr;
        s += "</html>\r\n\r\n";
        Serial.println("Enviando 200");
    }
    else
    {
        s = "HTTP/1.1 404 Not Found\r\n\r\n";
        Serial.println("Enviando 404");
    }
    client.print(s);

    client.stop();
    Serial.println("Cliente finalizado");
}
```

### Ejemplo mDNS-SD

Este es un ejemplo de [mDNS-SD (Descubrimiento de Servicios)](https://github.com/Seeed-Studio/Seeed_Arduino_rpcmDNS/blob/main/examples/mDNS-SD_Extended/mDNS-SD_Extended.ino) que te permite descubrir servicios en la misma red.

Acerca del [descubrimiento de servicios basado en DNS](https://es.wikipedia.org/wiki/Zero-configuration_networking#DNS-SD)

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/mdns-sd.png" /></div>

* Cambia `yourNetwork` y `yourPassword` por el **ssid** y **contraseña** de tu red WiFi.

* Sube el código al Wio Terminal.

```cpp
#include <rpcWiFi.h>
#include <RPCmDNS.h>
#include <WiFiClient.h>

const char* ssid     = "yourNetwork";
const char* password = "yourPassword";

// Servidor TCP en el puerto 80 responderá solicitudes HTTP
WiFiServer server(80);

void setup(void)
{  
    Serial.begin(115200);
    while(!Serial){
        ;
    }
    Serial.printf("Inicio de configuración \r\n");
    // Conectar a la red WiFi
    WiFi.begin(ssid, password);
    Serial.println("");

    // Esperar conexión
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("");
    Serial.print("Conectado a ");
    Serial.println(ssid);
    Serial.print("Dirección IP: ");
    Serial.println(WiFi.localIP());

    // Configurar el respondedor mDNS:
    // - primer argumento es el nombre de dominio, en este ejemplo
    //   el nombre completo de dominio es "esp8266.local"
    // - segundo argumento es la dirección IP a anunciar
    //   enviamos nuestra dirección IP en la red WiFi
    if (!MDNS.begin("WioTerminal")) {
        Serial.println("Error al configurar el respondedor MDNS!");
        while(1) {
            delay(1000);
        }
    }
    Serial.println("Respondedor mDNS iniciado");

    // Iniciar servidor TCP (HTTP)
    server.begin();
    Serial.println("Servidor TCP iniciado");

    // Agregar servicio a MDNS-SD
    MDNS.addService("http", "tcp", 80);

    Serial.printf("Configuración terminada \r\n");
}

void loop(void)
{
    // Verificar si un cliente se ha conectado
    WiFiClient client = server.available();
    if (!client) {
        return;
    }
    Serial.println("");
    Serial.println("Nuevo cliente");
    // Esperar que haya datos disponibles del cliente
    while(client.connected() && !client.available()){
        delay(1);
    }
    // Leer la primera línea de la solicitud HTTP
    String req = client.readStringUntil('\r');
    // La primera línea de la solicitud HTTP es algo como "GET /ruta HTTP/1.1"
    // Obtener la parte "/ruta" encontrando los espacios
    int addr_start = req.indexOf(' ');
    int addr_end = req.indexOf(' ', addr_start + 1);
    if (addr_start == -1 || addr_end == -1) {
        Serial.print("Solicitud inválida: ");
        Serial.println(req);
        return;
    }
    req = req.substring(addr_start + 1, addr_end);
    Serial.print("Solicitud: ");
    Serial.println(req);

    String s;
    if (req == "/")
    {
        IPAddress ip = WiFi.localIP();
        String ipStr = String(ip[0]) + '.' + String(ip[1]) + '.' + String(ip[2]) + '.' + String(ip[3]);
        s = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<!DOCTYPE HTML>\r\n<html>Hola desde Wio Terminal en ";
        s += ipStr;
        s += "</html>\r\n\r\n";
        Serial.println("Enviando 200");
    }
    else
    {
        s = "HTTP/1.1 404 Not Found\r\n\r\n";
        Serial.println("Enviando 404");
    }
    client.print(s);

    client.stop();
    Serial.println("Cliente finalizado");
}
```

## Uso de WiFiManager

Hemos porteado el conocido WiFi Manager a la plataforma Wio Terminal para que puedas usar tu teléfono u otro dispositivo para configurar los ajustes Wi-Fi de tu Wio Terminal.

### Instalar la librería Seeed\_Arduino\_rpcWiFiManager

1. Visita el repositorio [**Seeed\_Arduino\_rpcWiFiManager**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcWiFiManager) y descarga todo el repositorio a tu disco local.

2. Ahora, la librería Seeed\_Arduino\_rpcWiFiManager puede ser instalada en el IDE de Arduino. Abre el IDE de Arduino, y haz clic en `Sketch` -> `Include Library` -> `Add .ZIP Library`, y selecciona el archivo `Seeed_Arduino_rpcWiFiManager` que acabas de descargar.

### Ejemplo de conexión automática con WiFiManager

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/wifimanager.gif" /></div>

Este ejemplo demuestra la conexión automática. Puedes usarlo para configurar los ajustes WiFi del Wio Terminal.

* Sube el código al Wio Terminal.

* Si el Wio Terminal se ha conectado antes a una red WiFi, se conectará automáticamente a esa misma red. Si no puede conectarse a ninguna red, entrará en modo AP y emitirá una red WiFi. Usa tu teléfono para conectarte a esta red y configurar los ajustes WiFi.

```cpp
#include <rpcWiFi.h>
#include <DNSServer.h>
#include <WebServer.h>
#include <WiFiManager.h>

void setup() {
    Serial.begin(115200);
    while(!Serial); // espera hasta que el Serial esté abierto

    WiFiManager wifiManager;
    // Descomenta resetSettings() para borrar los ajustes guardados
    //wifiManager.resetSettings();

    // Obtiene ssid y contraseña del RTL8720 e intenta conectar
    // si no puede, inicia un punto de acceso con el nombre especificado
    // aquí "AutoConnectAP"
    // y queda en un bucle esperando configuración
    wifiManager.autoConnect("AutoConnectAP");
    // o usa esto para un nombre autogenerado ESP + ChipID
    //wifiManager.autoConnect();

    // si llegas aquí, ya estás conectado al WiFi
    Serial.println("conectado... ¡yeey! :)");
    Serial.println(WiFi.localIP());
}

void loop() {
    // pon aquí el código principal para ejecutarse repetidamente
}
```

## Soporte Técnico y Discusión de Productos

Si tienes algún problema técnico, por favor envía tu consulta a nuestro [foro](http://forum.seeedstudio.com/).
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>