---
title: Conectar Wio Terminal a Google Cloud IoT Core
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Connect-Wio-Terminal-to-Google-Cloud-IoT-Core/
slug: /es/Connect-Wio-Terminal-to-Google-Cloud-IoT-Core
last_update:
  date: 07/27/2025
  author: Guillermo
---
# Conectar Wio Terminal a Google Cloud IoT Core

![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png)

## Introducción

En este tutorial, te guiaremos paso a paso para conectar el **Wio Terminal** a **Google Cloud IoT Core** y enviar datos de telemetría desde el Wio Terminal a Google Cloud. El tutorial se divide en dos secciones:

1. Cómo usar librerías ya existentes para enviar datos de telemetría preconfigurados en el código.
2. Cómo añadir tus propios sensores al Wio Terminal y enviar esos datos personalizados.

Google Cloud IoT Core admite protocolos **HTTP** y **MQTT** para la comunicación. En este tutorial utilizaremos el protocolo **MQTT**.

### ¿Qué es Google Cloud?

[Google Cloud](https://cloud.google.com/) está compuesto por una serie de activos físicos (como computadoras y discos duros) y recursos virtuales (como máquinas virtuales) ubicados en centros de datos distribuidos alrededor del mundo. Esta distribución proporciona beneficios como redundancia ante fallos y baja latencia al estar más cerca del cliente.

Los productos de hardware y software en la nube se presentan como **servicios**. La [lista de servicios de Google Cloud](https://cloud.google.com/products) es extensa y sigue creciendo. Puedes combinarlos como necesites para desarrollar tu aplicación.

### ¿Qué es Google Cloud Platform (GCP)?

[Google Cloud Platform (GCP)](https://console.cloud.google.com/) es una colección de servicios de computación en la nube. Proporciona servicios modulares como computación, almacenamiento de datos, análisis y aprendizaje automático. Ofrece infraestructura como servicio (IaaS), plataforma como servicio (PaaS) y computación sin servidor (serverless).

### ¿Qué es Google Cloud IoT Core?

[Google Cloud IoT Core](https://cloud.google.com/iot/docs) es un servicio completamente gestionado para conectar y gestionar dispositivos IoT de forma segura, desde unos pocos hasta millones. Permite integrar datos de dispositivos con otros servicios de Big Data de GCP.

### ¿Qué es Google Cloud Console?

[Google Cloud Console](https://console.cloud.google.com/) es una interfaz web para gestionar recursos de Google Cloud. Puedes crear varios proyectos y separar el trabajo como prefieras. Por ejemplo, puedes tener proyectos por equipos o por fases del desarrollo.

## Conectando Wio Terminal a Google Cloud IoT Core vía MQTT

Como se mencionó, utilizaremos el bridge **MQTT** para comunicar el Wio Terminal con Google Cloud IoT Core. También puedes usar el bridge HTTP si lo necesitas.

![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/5555555.png)

### Configuración en Google Cloud Console

Primero, debemos crear un proyecto, un registro de dispositivos IoT Core y registrar un dispositivo.

#### Configuración Inicial

- **PASO 1:** Ve a [Google Cloud Console](https://console.cloud.google.com/) y crea un nuevo proyecto.  
**Nota:** Inicia sesión si se te solicita.

- **PASO 2:** Haz clic en **Seleccionar proyecto**.

- **PASO 3:** Haz clic en **NUEVO PROYECTO** e introduce un **nombre de proyecto**.

- **PASO 4:** Haz clic en **CREAR**.

- **PASO 5:** Habilita la facturación del proyecto (requerido para validación, no se cobrará si no lo usas en exceso).  
Selecciona “Facturación” en el menú de navegación y sigue los pasos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/1111111.png" alt="billing" width={500} height="auto" /></p>

- **PASO 6:** Visita [este enlace](https://console.cloud.google.com/flows/enableapi?apiid=cloudiot.googleapis.com%2Cpubsub) para habilitar las APIs de Cloud IoT Core y Cloud Pub/Sub.  
**Nota:** Asegúrate de seleccionar el proyecto correcto desde el menú desplegable.

#### Crear un Registro de Dispositivos

- **PASO 1:** Ve a la [página de IoT Core en GCP](https://console.cloud.google.com/iot/registries)

- **PASO 2:** Haz clic en **Crear Registro**

- **PASO 3:** Introduce un **ID de registro**  
**Nota:** Este será el nombre del registro.

- **PASO 4:** Selecciona una **Región**  
**Nota:** Usa `us-central1` si estás en EE.UU., o elige tu región local.

- **PASO 5:** En el campo **Seleccionar un tema de Cloud Pub/Sub**, elige **Crear un tema** e introduce un **ID de tema**.

- **PASO 6:** Haz clic en **CREAR TEMA**

- **PASO 7:** Haz clic en **MOSTRAR OPCIONES AVANZADAS**

- **PASO 8:** Los campos **Tema de estado del dispositivo** y **Valor de certificado** son opcionales; déjalos en blanco.

- **PASO 9:** Selecciona **MQTT** como protocolo.

- **PASO 10:** Haz clic en **CREAR**

Ya tienes creado un registro de dispositivos con un tema de Cloud Pub/Sub para eventos de telemetría.

#### Generar un Par de Claves del Dispositivo (EC Keys)

Google Cloud IoT Core utiliza autenticación mediante clave pública (asimétrica):

- El dispositivo usa una clave privada para firmar un [JSON Web Token (JWT)](https://cloud.google.com/iot/docs/how-tos/credentials/jwts), que se envía como prueba de identidad.
- El servicio utiliza la clave pública (cargada previamente) para verificar la identidad del dispositivo.

Google Cloud admite algoritmos **RSA** y **Elliptic Curve (EC)**. Usaremos **claves EC** tipo P-256.

- **PASO 1:** Crea una carpeta nueva en tu PC

- **PASO 2:** Abre una terminal en esa carpeta y ejecuta el siguiente comando para generar el par de claves EC P-256:

```sh
openssl ecparam -genkey -name prime256v1 -noout -out ec_private.pem
openssl ec -in ec_private.pem -pubout -out ec_public.pem
```

**Nota:** Asegúrate de tener instalado **OpenSSL**. Puedes seguir [este enlace](https://slproweb.com/products/Win32OpenSSL.html) para descargarlo e instalarlo. Después, agrega la carpeta de instalación a la variable de entorno `PATH`.

Los comandos anteriores generan el siguiente par de claves pública/privada:

- **ec_private.pem**: Esta es la clave privada que debe almacenarse de forma segura en el dispositivo y se usará para firmar el JWT de autenticación.
- **ec_public.pem**: Esta es la clave pública que se almacenará en **Cloud IoT Core** y servirá para verificar la firma del JWT.

### Extraer la Clave Privada

Necesitamos extraer los bytes de la clave privada para copiarlos más adelante en la cadena de clave privada del proyecto Arduino que crearemos. Guarda ambas claves para usarlas en los próximos pasos.

- **PASO 1:** Abre una ventana de terminal y navega a la carpeta donde generaste el par de claves Elliptic Curve.

- **PASO 2:** Ejecuta el siguiente comando:

```sh
openssl ec -in ec_private.pem -noout -text
```

- **PASO 3:** Copia y pega los bytes generados de la clave privada bajo **priv:** en un bloc de notas y guárdalos para usarlos más adelante.

#### Agregar un Dispositivo al Registro

- **PASO 1:** Visita la [página de registros](https://console.cloud.google.com/iot/registries) y selecciona el registro que creaste anteriormente

- **PASO 2:** Selecciona la pestaña **Dispositivos** y haz clic en **CREAR UN DISPOSITIVO**

- **PASO 3:** Ingresa un **ID de dispositivo**

- **PASO 4:** El campo **Metadatos del dispositivo** es opcional, así que déjalo en blanco

- **PASO 5:** Haz clic en el menú desplegable **COMUNICACIÓN, REGISTRO EN LA NUBE, AUTENTICACIÓN**

- **PASO 6:** Selecciona **Permitir** en **Comunicación del dispositivo**

- **PASO 7:** Dentro del campo **Autenticación**, en **Método de entrada**, selecciona **Cargar**

- **PASO 8:** Selecciona **ES256** en el menú desplegable de **Formato de clave pública**

- **PASO 9:** En **Valor de la clave pública**, presiona el botón **EXAMINAR**, navega hasta la carpeta del **par de claves de curva elíptica** que creamos anteriormente y selecciona **ec_public.pem**

- **PASO 10:** Haz clic en **Crear**

Ahora has añadido un dispositivo a tu registro. La clave ES256 aparece en la página de detalles del dispositivo.

#### Configurar un Suscriptor

Ahora que hemos creado un registro de dispositivos, un tema (topic) y hemos añadido un dispositivo al registro, pasemos a crear un suscriptor que se suscriba al tema para obtener los datos de telemetría desde el Wio Terminal.

- **PASO 1:** Escribe **Pub** en la barra de búsqueda de Google Cloud Console y selecciona **Pub/Sub** de los resultados

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/333333.png" alt="pir" width={700} height="auto" /></p>

- **PASO 2:** Haz clic en **Suscripciones** en el menú de navegación

- **PASO 3:** Haz clic en **CREAR SUSCRIPCIÓN**

- **PASO 4:** Ingresa un **ID de suscripción** a tu elección

- **PASO 5:** Selecciona el **tema Pub/Sub** que creamos previamente desde el menú desplegable **Seleccionar un tema de Cloud Pub/Sub**

- **PASO 6:** Selecciona **Pull** como tipo de entrega

- **PASO 7:** Haz clic en **Crear**

Ahora hemos terminado de configurar Google Cloud IoT Core. A continuación, configuraremos el Wio Terminal junto con el IDE de Arduino.

### Configuración de Arduino con Wio Terminal

#### Librerías Necesarias

Necesitamos dos librerías para este tutorial:  
1. Librería **lwMQTT MQTT Arduino**  
2. Librería **Google Cloud IoT Arduino**

Para descargar estas librerías:

- **PASO 1:** Abre el IDE de Arduino  
- **PASO 2:** Navega a `Sketch > Include Library > Manage Libraries`  
- **PASO 3:** Escribe **lwMQTT** y **Google Cloud IoT** en la caja de búsqueda e instala ambas librerías

#### Configuración de Credenciales e Información de Cuenta

Ahora necesitamos configurar las credenciales Wi-Fi y la información de Google Cloud IoT Core en el archivo **ciotc_config.h**.

- **PASO 1:** Dentro del IDE de Arduino, ve a `Archivo > Ejemplos > Google Cloud IoT JWT > Esp32-lwmqtt`

- **PASO 2:** Navega a **ciotc_config.h**

- **PASO 3:** Cambia los **detalles de red Wi-Fi**

```cpp
const char *ssid = "Enter_SSID";
const char *password = "Enter_Password";
```

- **PASO 4:** Cambia los **detalles de Google Cloud IoT**

```cpp
const char *project_id = "Enter_Project_ID";
const char *location = "Enter_location";
const char *registry_id = "Enter_Registry_ID";
const char *device_id = "Enter_Device_ID";
```

- **PASO 5:** Copia los bytes de la clave privada que obtuvimos de **ec_private.pem** y que guardamos previamente en un bloc de notas

```cpp
const char *private_key_str =
    "6e:b8:17:35:c7:fc:6b:d7:a9:cb:cb:49:7f:a0:67:"
    "63:38:b0:90:57:57:e0:c0:9a:e8:6f:06:0c:d9:ee:"
    "31:41";
```

**Nota:** La longitud de la clave debe ser de 32 pares de dígitos hexadecimales

#### Cambiar los Métodos de Hora NTP

Abre el archivo **esp32-mqtt.h** y reemplaza **todo el contenido** del archivo con el siguiente código.  
Aquí hemos reemplazado la función `configTime` por una implementación que obtiene la hora NTP mediante **UDP**.

```cpp
#include <Client.h>
#include <rpcWiFi.h>
#include <WiFiClientSecure.h>

#include <MQTT.h>

#include <CloudIoTCore.h>
#include <CloudIoTCoreMqtt.h>
#include "ciotc_config.h" // Update this file with your configuration

// !!REPLACEME!!
// The MQTT callback function for commands and configuration updates
// Place your message handler code here.
void messageReceived(String &topic, String &payload){
  Serial.println("incoming: " + topic + " - " + payload);
}
///////////////////////////////

// Initialize WiFi and MQTT for this board
//Client *netClient;
CloudIoTCoreDevice *device;
CloudIoTCoreMqtt *mqtt;
MQTTClient *mqttClient;
unsigned long iat = 0;
String jwt;
WiFiUDP udp;

unsigned int localPort = 2390;
unsigned long devicetime;
const int NTP_PACKET_SIZE = 48; // NTP time stamp is in the first 48 bytes of the message
byte packetBuffer[NTP_PACKET_SIZE]; //buffer to hold incoming and outgoing packets

// send an NTP request to the time server at the given address
unsigned long sendNTPpacket(const char* address) {
    // set all bytes in the buffer to 0
    for (int i = 0; i < NTP_PACKET_SIZE; ++i) {
        packetBuffer[i] = 0;
    }
    // Initialize values needed to form NTP request
    // (see URL above for details on the packets)
    packetBuffer[0] = 0b11100011;   // LI, Version, Mode
    packetBuffer[1] = 0;     // Stratum, or type of clock
    packetBuffer[2] = 6;     // Polling Interval
    packetBuffer[3] = 0xEC;  // Peer Clock Precision
    // 8 bytes of zero for Root Delay & Root Dispersion
    packetBuffer[12] = 49;
    packetBuffer[13] = 0x4E;
    packetBuffer[14] = 49;
    packetBuffer[15] = 52;

    // all NTP fields have been given values, now
    // you can send a packet requesting a timestamp:
    udp.beginPacket(address, 123); //NTP requests are to port 123
    udp.write(packetBuffer, NTP_PACKET_SIZE);
    udp.endPacket();
}

unsigned long getNTPtime() {

    // module returns a unsigned long time valus as secs since Jan 1, 1970 
    // unix time or 0 if a problem encounted

    //only send data when connected
    if (WiFi.status() == WL_CONNECTED) {
        //initializes the UDP state
        //This initializes the transfer buffer
        udp.begin(WiFi.localIP(), localPort);
        sendNTPpacket(ntp_primary); // send an NTP packet to a time server
        // wait to see if a reply is available
        delay(1000);
        if (udp.parsePacket()) {
//            Serial.println("udp packet received");
//            Serial.println("");
            // We've received a packet, read the data from it
            udp.read(packetBuffer, NTP_PACKET_SIZE); // read the packet into the buffer

            //the timestamp starts at byte 40 of the received packet and is four bytes,
            // or two words, long. First, extract the two words:

            unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);
            unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);
            // combine the four bytes (two words) into a long integer
            // this is NTP time (seconds since Jan 1 1900):
            unsigned long secsSince1900 = highWord << 16 | lowWord;
            // Unix time starts on Jan 1 1970. In seconds, that's 2208988800:
            const unsigned long seventyYears = 2208988800UL;
            // subtract seventy years:
            unsigned long epoch = secsSince1900 - seventyYears;

            // adjust time for timezone offset in secs +/- from UTC
            // WA time offset from UTC is +8 hours (28,800 secs)
            // + East of GMT
            // - West of GMT
//            long tzOffset = 28800UL;
            long tzOffset = 0UL;

            // WA local time 
            unsigned long adjustedTime;
            return adjustedTime = epoch + tzOffset;
        }
        else {
            // were not able to parse the udp packet successfully
            // clear down the udp connection
            udp.stop();
            return 0; // zero indicates a failure
        }
        // not calling ntp time frequently, stop releases resources
        udp.stop();
    }
    else {
        // network not connected
        return 0;
    }

}

///////////////////////////////
// Helpers specific to this board
///////////////////////////////
String getDefaultSensor(){
  return "Wifi: " + String(WiFi.RSSI()) + "db";
}

String getJwt(){
  Serial.println("Refreshing JWT");
  iat = getNTPtime();
  Serial.println(iat);
  jwt = device->createJWT(iat, jwt_exp_secs);

  Serial.println(jwt);
  return jwt;
}

void setupWifi(){
  Serial.println("Starting wifi");

  WiFi.mode(WIFI_STA);
  // WiFi.setSleep(false); // May help with disconnect? Seems to have been removed from WiFi
  WiFi.begin(ssid, password);
  Serial.println("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED){
    delay(100);
  }

//  configTime(0, 0, ntp_primary, ntp_secondary);
  Serial.println("Waiting on time sync...");
//  Serial.println(getNTPtime());

  while (getNTPtime() < 1510644967){
    delay(10);
  }
}

void connectWifi(){
  Serial.print("checking wifi...");
  while (WiFi.status() != WL_CONNECTED){
    Serial.print(".");
    delay(1000);
  }
}

///////////////////////////////
// Orchestrates various methods from preceeding code.
///////////////////////////////
bool publishTelemetry(String data){
  return mqtt->publishTelemetry(data);
}

bool publishTelemetry(const char *data, int length){
  return mqtt->publishTelemetry(data, length);
}

bool publishTelemetry(String subfolder, String data){
  return mqtt->publishTelemetry(subfolder, data);
}

bool publishTelemetry(String subfolder, const char *data, int length){
  return mqtt->publishTelemetry(subfolder, data, length);
}

void connect(){
  connectWifi();
  mqtt->mqttConnect();
}


WiFiClientSecure netClient;
void setupCloudIoT(){
  device = new CloudIoTCoreDevice(
      project_id, location, registry_id, device_id,
      private_key_str);

  setupWifi();
//  netClient = new WiFiClientSecure();
  mqttClient = new MQTTClient(512);
  mqttClient->setOptions(180, true, 1000); // keepAlive, cleanSession, timeout
  mqtt = new CloudIoTCoreMqtt(mqttClient, &netClient, device);
  mqtt->setUseLts(true);
  mqtt->startMQTT();
}
```

#### Agregar Definición de Macro en Esp32-lwmqtt.ino

Agrega la placa Wio Terminal a las definiciones de macro dentro de **Esp32-lwmqtt.ino**

```cpp
#if defined(ESP32) || defined(WIO_TERMINAL)
#define __ESP32_MQTT_H__
#endif
```

Ahora hemos terminado de configurar el IDE de Arduino. Finalmente, necesitas subir este código al Wio Terminal. Abre el Monitor Serial y verás la siguiente salida:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/4444444.png" alt="pir" width={700} height="auto" /></p>

### Mostrar Datos de Telemetría

Ahora necesitamos mostrar los datos de telemetría entrantes desde el Wio Terminal.  
En este ejemplo, se enviará la **intensidad de la señal Wi-Fi** como datos de telemetría.

- **PASO 1:** Visita **Pub/Sub** en Google Cloud Console

**Nota:** Puedes buscar **Pub** en la barra de búsqueda dentro de Google Cloud Console

- **PASO 2:** Navega a **Suscripciones** en el menú de navegación

- **PASO 3:** Selecciona el ID de suscripción que creamos previamente

- **PASO 4:** Haz clic en **VER MENSAJES**

- **PASO 5:** Haz clic en **PULL** y verás los datos de telemetría entrantes como los siguientes:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/6666666.png" alt="pir" width={950} height="auto" /></p>

### ¿Cómo Agregar Otros Sensores?

Puedes agregar cualquier sensor al Wio Terminal y enviar sus datos como telemetría a Google Cloud IoT Core.  
Para simplificar, usaremos el **sensor de luz integrado** del Wio Terminal para enviar niveles de intensidad lumínica.

#### Configuración en Google Cloud IoT

- **PASO 1:** Visita **IoT Core** en Google Cloud Console

**Nota:** Puedes buscar **IoT Core** en la barra de búsqueda dentro de Google Cloud Console

- **PASO 2:** Selecciona el registro que creamos previamente

- **PASO 3:** En **Temas de Cloud Pub/Sub**, selecciona **Agregar o editar temas**

- **PASO 4:** Haz clic en **AGREGAR TEMA ADICIONAL**

- **PASO 5:** Haz clic en **CREAR UN TEMA** desde el menú desplegable **Seleccionar un tema de Cloud Pub/Sub**

- **PASO 6:** Ingresa un **ID de tema** y haz clic en **CREAR TEMA**

- **PASO 7:** Ingresa un **Nombre de subcarpeta** en la columna **Subfolder**

**Nota:** El nombre de la subcarpeta se usará para relacionarse con el tema dentro del código Arduino

- **PASO 8:** Haz clic en **ACTUALIZAR**

- **PASO 9:** Crea una **nueva suscripción** como se explicó anteriormente

#### Configuración en Arduino

Navega a **Esp32-lwmqtt.ino** y agrega lo siguiente:

- **PASO 1:** Después del `loop`, agrega el siguiente código para leer el **sensor de luz integrado**

```cpp
void loop() {
  int light = analogRead(WIO_LIGHT); //assign variable to store light sensor values 
  light = map(light,0,1023,0,100); //Map sensor values  
```

- **PASO 2:**  Agrega el tópico con el nombre de la subcarpeta: 

```cpp
    publishTelemetry(getDefaultSensor());
    publishTelemetry("/light",String(light));
```

**Nota:** Si no se añade un nombre de subcarpeta, los datos de telemetría se enviarán al tema predeterminado.  
En este caso, los datos de telemetría de la intensidad de señal Wi-Fi, como se explicó anteriormente, se enviarán al **primer tema** que creamos, el cual es el tema por defecto.

Después de subir el código al Wio Terminal, realiza un **pull** desde el tema recién creado como suscriptor y verás el siguiente resultado:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/222222.png" alt="pir" width={950} height="auto" /></p>

### ¿Cómo Agregar Otros Sensores y Visualizar Datos en Dashboards?

Aunque Google Cloud IoT Core no ofrece un dashboard listo para usar que visualice datos de sensores, explicaremos cómo lograrlo utilizando **InfluxDB** y **Grafana**.

[InfluxDB](https://www.influxdata.com/) es una base de datos de series temporales, lo que significa que cada dato está asociado a una **marca de tiempo** que indica la fecha y hora del dato.  
Por otro lado, [Grafana](https://grafana.com/) es una solución de código abierto para ejecutar análisis de datos, extraer métricas útiles y monitorear aplicaciones mediante dashboards personalizables.

Básicamente, conectaremos un sensor de temperatura/humedad al Wio Terminal, usaremos una **función de Google Cloud** para transmitir los datos de un **Pub/Sub** hacia una **InfluxDB alojada en un clúster de GKE (Google Kubernetes Engine)** y visualizaremos los datos desde InfluxDB en Grafana mediante dashboards interactivos.

![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png)

#### Configuración de Hardware en Arduino

Conecta el sensor **Grove - Temperatura y Humedad (DHT11)** al puerto **Grove - Digital/Analógico (D0)** del Wio Terminal.

#### Configuración de Software en Arduino

- **PASO 1:** Visita el [repositorio Grove - Temperature and Humidity Sensor](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) y descárgalo como archivo ZIP

- **PASO 2:** Abre Arduino, navega a `Sketch > Include Library > Add .ZIP Library` y selecciona la librería descargada para instalarla

Luego, dirígete al archivo que ya usamos anteriormente: **Esp32-lwmqtt.ino** y agrega lo siguiente:

- **PASO 1:** Agrega el siguiente código después de `#include "esp32-mqtt.h"`

```cpp
#include "DHT.h" //DHT library

#define DHTPIN 0 //Define Signal Pin of DHT
#define DHTTYPE DHT11 //Define DHT Sensor Type
DHT dht(DHTPIN, DHTTYPE); //Initializing DHT sensor  
```

- **PASO 2:** Agrega el siguiente código dentro de la función **setup()** para iniciar el sensor DHT

```cpp
dht.begin(); 
```

- **PASO 3:** Agrega el siguiente código dentro del **if loop** dentro de la función **void loop()**

```cpp
int temperature = dht.readTemperature(); //Assign variable to store temperature
int humidity = dht.readHumidity(); //Assign variable to store humidity

String payload = String("{\"timestamp\":") + getNTPtime() +
                  String(",\"temperature\":") temperature +
                  String(",\"humidity\":") + humidity +
                  String("}");
publishTelemetry(payload); 
```

**Nota:** Aquí analizamos todos los datos como una cadena antes de enviarlos a InfluxDB. Es importante analizar correctamente la **hora**, ya que InfluxDB es una base de datos de series temporales.  
Además, la función **pushTelemetry** enviará los datos al **tema predeterminado** que creamos al inicio de este tutorial.

- **PASO 4:** Sube el código al Wio Terminal

#### Configuración en Google Cloud IoT

- **PASO 1:** Visita este [repositorio](https://github.com/lakshanthad/esp32-cloud-iot-core-k8s) y descárgalo como un archivo ZIP

- **PASO 2:** Extrae el archivo ZIP descargado

- **PASO 3:** Abre Google Cloud Console y navega a [Google Kubernetes Engine](https://console.cloud.google.com/kubernetes/list) y espera a que el sistema se inicialice

- **PASO 4:** Inicia la **Cloud Shell** presionando el botón en la esquina superior derecha

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/cloud_shell_1.png" alt="pir" width={700} height="auto" /></p>

- **PASO 5:** Escribe los siguientes comandos para establecer los valores predeterminados de la herramienta de línea de comandos `gcloud`:

```sh
export ZONE=<enter_zone> # e.g. us-central1-a, see https://cloud.google.com/compute/docs/regions-zones/#available
export PROJECT_ID=<enter_project-id> # project ID name 
gcloud config set project $PROJECT_ID
gcloud config set compute/zone $ZONE
```

Gracias, Guillermo. A continuación tienes la **traducción completa al español** en formato `.md`, manteniendo todos los **snippets de shell**, imágenes, notas y pasos estructurados como documentación técnica reutilizable:

- **PASO 6:** Escribe el siguiente comando para crear un clúster de GKE con un nodo `n1-standard-1`:

```sh
gcloud container clusters create influxdb-grafana \
                --num-nodes 1 \
                --machine-type n1-standard-1 \
                --zone $ZONE
```

* **PASO 7:** Escribe el siguiente comando para crear un secreto que almacene la autenticación de InfluxDB y Grafana:

```sh
kubectl create secret generic influxdb-grafana \
  --from-literal=influxdb-user=admin \
  --from-literal=influxdb-password=passw0rd \
  --from-literal=grafana-user=admin \
  --from-literal=grafana-password=passw0rd
```

**Nota:** Puedes cambiar los nombres de usuario y contraseñas de InfluxDB/Grafana según tu preferencia.

* **PASO 8:** Haz clic en **Open Editor** dentro de Google Cloud Shell

* **PASO 9:** Arrastra y suelta la carpeta descargada y descomprimida dentro del **Cloud Shell Editor**

* **PASO 10:** Haz clic en **Open Terminal** para volver al terminal. Navega al directorio **05-influxdb\_grafana\_k8s** con:

```sh
cd esp32-cloud-iot-core-k8s-master/05-influxdb_grafana_k8s
```

* **PASO 11:** Despliega InfluxDB y Grafana en Kubernetes con:

```sh
kubectl create -f k8s/
```

#### Configuración de Grafana

* **PASO 1:** Verifica las IPs/puertos externos con:

```sh
kubectl get services
```

* **PASO 2:** Copia la IP externa del servicio Grafana

* **PASO 3:** Visita `http://<ip externa de grafana>:3000`

**Nota:** Sustituye `<ip externa de grafana>` por la IP que copiaste en el paso anterior.

* **PASO 4:** Inicia sesión con las credenciales configuradas anteriormente

* **PASO 5:** Haz clic en el ícono de engranaje y navega a `Configuration > Data Sources`

* **PASO 6:** Haz clic en **Add data source** y selecciona **InfluxDB**

* **PASO 7:** En el campo **URL**, escribe:

```sh
http://influxdb:8086
```

* **PASO 8:** En el campo **Database**, escribe:

```sh
iot
```

Luego haz clic en **Save & Test**

**Nota:** Si la configuración fue exitosa, verás el mensaje **Data source is working**.

#### Crear una Función de Google Cloud

Ahora crearemos una función en Google Cloud que envíe los datos desde Pub/Sub hacia InfluxDB para visualizarlos en Grafana.

* **PASO 1:** Regresa a **Google Cloud Console** y abre **Cloud Shell**

* **PASO 2:** Habilita la API de Cloud Functions:

```sh
gcloud services enable cloudfunctions.googleapis.com
```

* **PASO 3:** Navega al directorio **06-cloud\_function**:

```sh
cd esp32-cloud-iot-core-k8s-master/06-cloud_function
```

* **PASO 4:** Abre **main.py** con el editor `vim`:

```sh
cd esp32-cloud-iot-core-k8s-master/06-cloud_function
```

* **PASO 5:** Presiona **i** para entrar al modo de edición

* **PASO 6:** Modifica las variables de InfluxDB (`host`, `port`, `username`, `password`) en la función **\_get\_influxdb\_client**

**Nota:** Obtén la IP de InfluxDB con:

```sh
kubectl get services
```

* **PASO 7:** Guarda el archivo con `:wq`

* **PASO 8:** Despliega la función en Google Cloud con:

```sh
export PUBSUB_TOPIC="introduce_nombre_del_topic"
export REGION="introduce_region" # https://cloud.google.com/functions/docs/locations
gcloud functions deploy iotcore_pubsub_to_influxdb \
  --runtime python37 \
  --trigger-topic $PUBSUB_TOPIC \
  --region $REGION
```

#### Volver a Grafana

* **PASO 1:** Abre Grafana y navega a `Dashboards > Manage`

* **PASO 2:** Haz clic en **New Dashboard** y luego en **Add new panel**

* **PASO 3:** Ve a la pestaña **Visualization** y selecciona **Graph**

* **PASO 4:** En la pestaña **FROM** dentro de **Query**, haz clic en **select measurement** y selecciona **temperature**

* **PASO 5:** Haz clic en **+ Query** y repite el mismo paso anterior para **humidity**

* **PASO 6:** Ajusta los demás parámetros según tu preferencia

* **PASO 7:** Haz clic en **Apply**

* **PASO 8:** Haz clic en **Add panel** > **Add new panel**

* **PASO 9:** Ve a **Visualization** y selecciona **Gauge**

* **PASO 10:** En **Query > FROM**, selecciona **temperature**

* **PASO 11:** En la pestaña **Field**, en **Unit**, selecciona `Temperature > Celsius`

* **PASO 12:** Define valores mínimo y máximo en los campos **Min** y **Max**

* **PASO 13:** En **Display name**, escribe `Temperature`

* **PASO 14:** Repite los pasos anteriores para mostrar **humidity**

* **PASO 15:** Haz clic en **Apply**

Ahora verás el dashboard creado en Grafana:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/grafana_dash_1.png" alt="pir" width={900} height="auto" /></p>

## Soporte Técnico y Comunidad

¿Tienes algún problema técnico? Por favor, repórtalo en nuestro [foro](http://forum.seeedstudio.com/).
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos distintos canales de comunicación según tus necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>