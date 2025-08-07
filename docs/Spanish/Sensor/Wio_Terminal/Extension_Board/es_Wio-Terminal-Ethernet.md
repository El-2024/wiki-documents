---
description: Ethernet Extension board
title: Placa de Extensión para Ethernet
keywords:
- Wio_terminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Ethernet
last_update:
  date: 06/27/2025
  author: Guillermo
---

# Conexión Ethernet para Wio Terminal

Esta wiki introduce cómo usar el [**ENC28J60 OVERLAYS HAT for Raspberry Pi**](https://www.seeedstudio.com/ENC28J60-OVERLAYS-HAT-for-Raspberry-pi-p-3045.html) en el Wio Terminal para una conectividad de red estable. Este es un ejemplo perfecto del uso de placas de expansión compatibles con el conector Raspberry Pi de 40 pines en Wio Terminal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/twitter.png" /></div>

## Hardware Requerido

* [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
* [**ENC28J60 OVERLAYS HAT for Raspberry Pi**](https://www.seeedstudio.com/ENC28J60-OVERLAYS-HAT-for-Raspberry-pi-p-3045.html)
* *Adaptador de placa Pi HAT de 40 pines para Wio Terminal (aún no lanzado)*

## Conexión de Hardware

> Por ahora, para probar el software, tendrás que usar cables voladores.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/enc-wio.png" /></div>

* Conecta el cable Ethernet al ENC28J60 Overlays Hat.

## Instalación de la Librería UIPEthernet para Arduino

1. Descarga la librería [UIPEthernet](https://github.com/UIPEthernet/UIPEthernet) desde su repositorio oficial a tu equipo.

2. En el Arduino IDE, haz clic en `Sketch` → `Include Library` → `Add .ZIP Library`, y selecciona el archivo ZIP descargado para instalar la librería.

![Instalación de librería](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Ejemplo Simple con DHCP

Este ejemplo usa DHCP para obtener automáticamente la configuración de red del host.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/DHCP.png" /></div>

### Código de Ejemplo

```cpp
#include <UIPEthernet.h>

uint8_t mac[6] = {0x74, 0x69, 0x69, 0x2D, 0x30, 0x31};

void setup() {
  Serial.begin(9600);
  while(!Serial);
  Serial.println(F("[testDHCP]"));

  Serial.print("MAC: ");
  for (byte i = 0; i < 6; ++i) {
    Serial.print(mac[i], HEX);
    if (i < 5) Serial.print(':');
  }
  Serial.println();

  if (Ethernet.begin(mac) != 1) {
    Serial.println("Failed to configure Ethernet using DHCP");
    while (true) {
      delay(1);
    }
  }

  Serial.print("My IP: ");
  Serial.println(Ethernet.localIP());
  Serial.print("Netmask: ");
  Serial.println(Ethernet.subnetMask());
  Serial.print("Gateway IP: ");
  Serial.println(Ethernet.gatewayIP());
  Serial.print("DNS: ");
  Serial.println(Ethernet.dnsServerIP());
}

void loop() {
  // Código principal repetitivo aquí
}
```

## Conexión con IP Estática

En lugar de DHCP, puedes configurar una IP estática, máscara de red, gateway y DNS manualmente para conectarte a la red.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/Static.png" /></div>

### Código de Ejemplo

Esto es muy útil cuando necesitas conectar el dispositivo a un gateway y DNS específicos (ejemplo: router/gateway en modo bypass).

```cpp
#include <UIPEthernet.h>

// Configuración estática, modifica según tu red
uint8_t mac[6] = {0x74, 0x69, 0x69, 0x2D, 0x30, 0x31};
IPAddress myIP(10, 0, 0, 111);
IPAddress myMask(255, 255, 255, 0);
IPAddress myGatewayIP(10, 0, 0, 127);
IPAddress myDNS(10, 0, 0, 127);

void setup() {
  Serial.begin(9600);
  while(!Serial);
  Serial.println(F("[getStaticIP]"));

  Serial.print("MAC: ");
  for (byte i = 0; i < 6; ++i) {
    Serial.print(mac[i], HEX);
    if (i < 5) Serial.print(':');
  }
  Serial.println();

  Ethernet.begin(mac, myIP, myDNS, myGatewayIP, myMask);

  Serial.print("My IP: ");
  Serial.println(Ethernet.localIP());
  Serial.print("Netmask: ");
  Serial.println(Ethernet.subnetMask());
  Serial.print("Gateway IP: ");
  Serial.println(Ethernet.gatewayIP());
  Serial.print("DNS: ");
  Serial.println(Ethernet.dnsServerIP());
}

void loop() {
  // Código principal repetitivo aquí
}
```

## Cliente Web Simple

Una vez que la conexión Ethernet está configurada, puedes usarla para crear clientes TCP, obtener datos HTTP de internet o servidores en la red local.

En el siguiente ejemplo, se intenta obtener configuración vía DHCP primero y si falla se usa IP estática. Luego se conecta a `www.bing.com` y muestra la respuesta por Serial.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/TCPclient.png"/></div>

### Código de Ejemplo

```cpp
#include <UIPEthernet.h>

// MAC address for your controller
byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };

char server[] = "www.bing.com";

// Static IP settings if DHCP fails
IPAddress myIP(10, 0, 0, 187);
IPAddress myMask(255, 255, 255, 0);
IPAddress myGatewayIP(10, 0, 0, 127);
IPAddress dnsIP(10, 0, 0, 127);

// Ethernet client instance
EthernetClient client;

// Variables to measure transfer speed
unsigned long beginMicros, endMicros;
unsigned long byteCount = 0;
bool printWebData = true;  // Set false to improve speed measurement

void setup() {
  Serial.begin(9600);
  while (!Serial) {
    ; // Wait for serial port to connect (native USB only)
  }

  Serial.println("Initialize Ethernet with DHCP:");
  if (Ethernet.begin(mac) == 0) {
    Serial.println("Failed to configure Ethernet using DHCP");

    if (Ethernet.hardwareStatus() == EthernetNoHardware) {
      Serial.println("Ethernet shield was not found. Can't run without hardware.");
      while (true) delay(1);
    }
    if (Ethernet.linkStatus() == LinkOFF) {
      Serial.println("Ethernet cable is not connected.");
    }

    // Try static IP configuration
    Ethernet.begin(mac, myIP, dnsIP, myGatewayIP, myMask);
  } else {
    Serial.print("  DHCP assigned IP ");
    Serial.println(Ethernet.localIP());
  }

  delay(1000);

  Serial.print("connecting to ");
  Serial.print(server);
  Serial.println("...");

  if (client.connect(server, 80)) {
    Serial.print("connected to ");
    Serial.println(client.remoteIP());
    client.println("GET /search?q=WioTerminal HTTP/1.1");
    client.println("Host: www.bing.com");
    client.println("Connection: close");
    client.println();
  } else {
    Serial.println("connection failed");
  }

  beginMicros = micros();
}

void loop() {
  int len = client.available();
  if (len > 0) {
    byte buffer[80];
    if (len > 80) len = 80;
    client.read(buffer, len);
    if (printWebData) {
      Serial.write(buffer, len);
    }
    byteCount += len;
  }

  if (!client.connected()) {
    endMicros = micros();
    Serial.println();
    Serial.println("disconnecting.");
    client.stop();

    Serial.print("Received ");
    Serial.print(byteCount);
    Serial.print(" bytes in ");
    float seconds = (float)(endMicros - beginMicros) / 1000000.0;
    Serial.print(seconds, 4);
    float rate = (float)byteCount / seconds / 1000.0;
    Serial.print(", rate = ");
    Serial.print(rate);
    Serial.println(" kbytes/second");

    while (true) {
      delay(1);
    }
  }
}
```

## Ejemplo de Servidor Web

Por otro lado, también hemos configurado el dispositivo como un servidor web y permitimos que otros dispositivos en la misma red se conecten a él (es decir, leer los valores de los sensores observados en el Wio Terminal). Esto puede ser muy útil en algunos casos debido a que la estabilidad del Ethernet es mucho mejor que la del Wi-Fi.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/TCPserver.png"/></div>

### Código de Ejemplo

Este ejemplo se configura a sí mismo como servidor web y establece una página web simple que imprime los valores leídos desde `A0` hasta `A5`. Puedes acceder a esta página desde tu PC conectado a la misma red mediante la dirección IP.

```cpp
#include <UIPEthernet.h>

// Ingresa una dirección MAC y una dirección IP para tu controlador abajo.
// La dirección IP dependerá de tu red local:
byte mac[] = {
  0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED
};
IPAddress ip(10, 0, 0, 123);

// Inicializa la librería del servidor Ethernet
// con la dirección IP y el puerto que quieres usar
// (el puerto 80 es el predeterminado para HTTP):
EthernetServer server(80);

void setup() {
  // Abre la comunicación serial y espera a que el puerto se abra:
  Serial.begin(9600);
  while (!Serial) {
    ; // espera a que el puerto serial se conecte. Necesario solo para puerto USB nativo
  }
  Serial.println("Ejemplo de Servidor Web Ethernet");

  // inicia la conexión Ethernet y el servidor:
  Ethernet.begin(mac, ip);

  // Verifica si hay hardware Ethernet presente
  if (Ethernet.hardwareStatus() == EthernetNoHardware) {
    Serial.println("No se encontró el shield Ethernet. Lo siento, no se puede ejecutar sin hardware. :(");
    while (true) {
      delay(1); // no hacer nada, no tiene sentido ejecutar sin hardware Ethernet
    }
  }
  if (Ethernet.linkStatus() == LinkOFF) {
    Serial.println("El cable Ethernet no está conectado.");
  }

  // inicia el servidor
  server.begin();
  Serial.print("El servidor está en ");
  Serial.println(Ethernet.localIP());
}

void loop() {
  // escucha por clientes entrantes
  EthernetClient client = server.available();
  if (client) {
    Serial.println("nuevo cliente");
    // una petición HTTP termina con una línea en blanco
    bool currentLineIsBlank = true;
    while (client.connected()) {
      if (client.available()) {
        char c = client.read();
        Serial.write(c);
        // si has llegado al final de la línea (recibiste un salto de línea)
        // y la línea está en blanco, la petición HTTP terminó,
        // así que puedes enviar una respuesta
        if (c == '\n' && currentLineIsBlank) {
          // envía un encabezado HTTP estándar
          client.println("HTTP/1.1 200 OK");
          client.println("Content-Type: text/html");
          client.println("Connection: close");  // la conexión se cerrará tras completar la respuesta
          client.println("Refresh: 5");  // actualiza la página automáticamente cada 5 segundos
          client.println();
          client.println("<!DOCTYPE HTML>");
          client.println("<html>");
          // muestra el valor de cada pin de entrada analógica
          for (int analogChannel = 0; analogChannel < 6; analogChannel++) {
            int sensorReading = analogRead(analogChannel);
            client.print("entrada analógica ");
            client.print(analogChannel);
            client.print(" es ");
            client.print(sensorReading);
            client.println("<br />");
          }
          client.println("</html>");
          break;
        }
        if (c == '\n') {
          // comienzas una línea nueva
          currentLineIsBlank = true;
        } else if (c != '\r') {
          // recibiste un carácter en la línea actual
          currentLineIsBlank = false;
        }
      }
    }
    // da tiempo al navegador para recibir los datos
    delay(1);
    // cierra la conexión:
    client.stop();
    Serial.println("cliente desconectado");
  }
}
```

### Prueba del Servidor Web

Esto también incluye un sketch sencillo para realizar pruebas con la configuración.

> Esta es la captura de pantalla del ping al servidor web durante 10 horas.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/moretest.png"/></div>

* En la misma red, utiliza tu computadora para hacer ping a la IP del servidor:

```cpp
#include <UIPEthernet.h>

// Configuración de IP estática
uint8_t mac[6] = {0x74,0x69,0x69,0x2D,0x30,0x31};
IPAddress myIP = {10,0,0,111};
EthernetServer server = EthernetServer(80);

void setup() {
  Serial.begin(9600);
  while(!Serial);
  Ethernet.begin(mac, myIP);
  server.begin();

  Serial.print("Mi IP: ");
  Serial.println(Ethernet.localIP());
  Serial.print("Máscara de red: ");
  Serial.println(Ethernet.subnetMask());
  Serial.print("IP de puerta de enlace: ");
  Serial.println(Ethernet.gatewayIP());
  Serial.print("DNS: ");
  Serial.println(Ethernet.dnsServerIP());
}

void loop() {
  // obtener cliente
  EthernetClient client = server.available();
  if(client && client.connected()) {
        // realiza acciones (omitido pero básicamente analiza HTTP y responde sin otro procesamiento)
        client.stop();
  }
}
```

## Uso de UDP para Tiempo NTP

En algunas situaciones, se usa UDP para la comunicación en red. [**NTP**](https://es.wikipedia.org/wiki/Network_Time_Protocol) es el ejemplo perfecto para esto. Este ejemplo simplemente obtiene la hora desde el servidor NTP `time.nist.gov` y la imprime en el monitor serial.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/UDP.png"/></div>

### Código de Ejemplo

```cpp
#include <UIPEthernet.h>

// Ingresa una dirección MAC para tu controlador abajo.
// Los shields Ethernet más recientes tienen una dirección MAC impresa en una etiqueta en el shield
byte mac[] = {
  0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED
};

unsigned int localPort = 8888;       // puerto local para escuchar paquetes UDP

const char timeServer[] = "time.nist.gov"; // servidor NTP time.nist.gov

const int NTP_PACKET_SIZE = 48; // la marca de tiempo NTP está en los primeros 48 bytes del mensaje

byte packetBuffer[NTP_PACKET_SIZE]; // buffer para almacenar paquetes entrantes y salientes

// Instancia UDP para enviar y recibir paquetes UDP
EthernetUDP Udp;

void setup() {
  // Abre la comunicación serial y espera a que el puerto se abra:
  Serial.begin(9600);
  while (!Serial) {
    ; // espera a que el puerto serial se conecte. Necesario solo para puerto USB nativo
  }

  // inicia Ethernet y UDP
  if (Ethernet.begin(mac) == 0) {
    Serial.println("Error al configurar Ethernet usando DHCP");
    // Verifica si hay hardware Ethernet presente
    if (Ethernet.hardwareStatus() == EthernetNoHardware) {
      Serial.println("No se encontró el shield Ethernet. Lo siento, no se puede ejecutar sin hardware. :(");
    } else if (Ethernet.linkStatus() == LinkOFF) {
      Serial.println("El cable Ethernet no está conectado.");
    }
    // no tiene sentido continuar, así que no hace nada para siempre:
    while (true) {
      delay(1);
    }
  }
  Udp.begin(localPort);
}

void loop() {
  sendNTPpacket(timeServer); // envía un paquete NTP a un servidor de tiempo

  // espera para ver si hay una respuesta disponible
  delay(1000);
  if (Udp.parsePacket()) {
    // Recibimos un paquete, lee los datos
    Udp.read(packetBuffer, NTP_PACKET_SIZE); // lee el paquete en el buffer

    // la marca de tiempo comienza en el byte 40 del paquete recibido y ocupa cuatro bytes,
    // o dos palabras, de longitud. Primero, extrae las dos palabras:

    unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);
    unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);
    // combina los cuatro bytes (dos palabras) en un entero largo
    // este es el tiempo NTP (segundos desde el 1 de enero de 1900):
    unsigned long secsSince1900 = highWord << 16 | lowWord;
    Serial.print("Segundos desde el 1 de enero de 1900 = ");
    Serial.println(secsSince1900);

    // ahora convierte el tiempo NTP en tiempo común:
    Serial.print("Tiempo Unix = ");
    // El tiempo Unix comienza el 1 de enero de 1970. En segundos, eso es 2208988800:
    const unsigned long seventyYears = 2208988800UL;
    // resta setenta años:
    unsigned long epoch = secsSince1900 - seventyYears;
    // imprime el tiempo Unix:
    Serial.println(epoch);

    // imprime la hora, minuto y segundo:
    Serial.print("La hora UTC es ");       // UTC es la hora en el Meridiano de Greenwich (GMT)
    Serial.print((epoch  % 86400L) / 3600); // imprime la hora (86400 segundos por día)
    Serial.print(':');
    if (((epoch % 3600) / 60) < 10) {
      // En los primeros 10 minutos de cada hora, se añade un '0' delante
      Serial.print('0');
    }
    Serial.print((epoch  % 3600) / 60); // imprime el minuto (3600 segundos por minuto)
    Serial.print(':');
    if ((epoch % 60) < 10) {
      // En los primeros 10 segundos de cada minuto, se añade un '0' delante
      Serial.print('0');
    }
    Serial.println(epoch % 60); // imprime el segundo
  }
  // espera diez segundos antes de pedir la hora nuevamente
  delay(10000);
  Ethernet.maintain();
}

// envía una petición NTP al servidor de tiempo en la dirección dada
void sendNTPpacket(const char * address) {
  // llena el buffer con ceros
  memset(packetBuffer, 0, NTP_PACKET_SIZE);
  // Inicializa los valores necesarios para formar la petición NTP
  // (consulta la URL arriba para detalles del paquete)
  packetBuffer[0] = 0b11100011;   // LI, Versión, Modo
  packetBuffer[1] = 0;     // Estrato, o tipo de reloj
  packetBuffer[2] = 6;     // Intervalo de sondeo
  packetBuffer[3] = 0xEC;  // Precisión del reloj del par
  // 8 bytes de cero para Root Delay y Root Dispersion
  packetBuffer[12]  = 49;
  packetBuffer[13]  = 0x4E;
  packetBuffer[14]  = 49;
  packetBuffer[15]  = 52;

  // todos los campos NTP han sido asignados, ahora
  // puedes enviar un paquete solicitando una marca de tiempo:
  Udp.beginPacket(address, 123); // las peticiones NTP son al puerto 123
  Udp.write(packetBuffer, NTP_PACKET_SIZE);
  Udp.endPacket();
}
```

## Ejemplo para Enviar Tweets

Este es un ejemplo divertido que usa el Wio Terminal para enviar tweets. Utiliza la [librería Tweet para Arduino](http://arduino-tweet.appspot.com/) para sortear las conexiones directas con HTTPs.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/twitter.png"/></div>

### Instalar la Librería Tweet para Arduino

1. Visita el repositorio [Arduno-Twitter-library](https://github.com/NeoCat/Arduno-Twitter-library) y descarga todo el repositorio en tu disco local.

2. Ahora, la librería puede instalarse en el Arduino IDE. Abre el Arduino IDE, y haz clic en `Sketch` -> `Include Library` -> `Add .ZIP Library`, y selecciona el archivo `Arduno-Twitter-library` que acabas de descargar.

### Obtener Token

Obtén un token para publicar un mensaje usando OAuth haciendo clic [**aquí**](http://arduino-tweet.appspot.com/oauth/twitter/login).

> Visita [http://arduino-tweet.appspot.com/](http://arduino-tweet.appspot.com/) para más referencia.

### Código de Ejemplo

* Copia el token que obtuviste arriba y pégalo en el sketch de Arduino.

```cpp
/*
 *  Consulta http://arduino-tweet.appspot.com/ para más referencia
 */
 
#include <UIPEthernet.h>
#include <Twitter.h>

uint8_t mac[6] = {0x74,0x69,0x69,0x2D,0x30,0x31};

// Tu token para twittear (obtenlo en http://arduino-tweet.appspot.com/)
Twitter twitter("TU-TOKEN-AQUÍ");

// Mensaje a publicar
char msg[] = "¡Hola, mundo! ¡Soy Arduino!";

void setup()
{
  delay(1000);
  Ethernet.begin(mac);
  // o puedes usar DHCP para configuración automática de IP.
  // Ethernet.begin(mac);
  Serial.begin(9600);
  while(!Serial);
  
  Serial.println("conectando ...");
  if (twitter.post(msg)) {
    // Especifica &Serial para enviar la respuesta recibida al Serial.
    // Si no requieres salida, puedes omitir el argumento, por ejemplo:
    // int status = twitter.wait();
    int status = twitter.wait(&Serial);
    if (status == 200) {
      Serial.println("OK.");
    } else {
      Serial.print("falló : código ");
      Serial.println(status);
    }
  } else {
    Serial.println("conexión fallida.");
  }
}

void loop()
{
}
```