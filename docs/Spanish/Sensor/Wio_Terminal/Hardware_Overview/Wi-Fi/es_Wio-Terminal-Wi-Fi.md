---
title: Wi-Fi
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-Wi-Fi/
slug: /es/Wio-Terminal-Wi-Fi
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Conectividad Wi-Fi

Esta wiki introduce cómo configurar la conectividad Wi-Fi en Wio Terminal usando el core Realtek RTL8720.

:::note
        Asegúrate de haber seguido la descripción general de la red, **actualizado el firmware más reciente en RTL8720 y descargado las librerías dependientes de Arduino.**
:::
<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#f5cfa9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#eda964', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="icono de atención" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>Atención</p>
    <p style={{color: '#000000', fontSize: 14}}>Los siguientes ejemplos han sido actualizados para funcionar con el <b>Firmware del Framework de Estructura eRPC</b>, por favor actualiza a la estructura eRPC. Simplemente reemplaza el archivo <code><b>AtWifi.h</b></code> por <code><b>rpcWiFi.h</b></code>.</p>
  </div>
</div>

## Configuración en modo Estación (STA)

- Incluye la librería `rpcWiFi.h` en Arduino.

- Configura como modo STA:

```cpp
WiFi.mode(WIFI_STA);
```

### Ejemplo de código para escanear redes Wi-Fi

Este ejemplo configura el dispositivo en modo Wi-Fi STA, escanea y muestra todas las redes disponibles por el Serial.

```cpp
#include "rpcWiFi.h"

void setup() {
    Serial.begin(115200);
    while(!Serial); // Espera a que el Serial esté listo
    delay(1000);

    // Configura WiFi en modo estación y desconecta de un AP si estaba conectado
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    delay(100);

    Serial.println("Configuración completa");
}

void loop() {
    Serial.println("inicio de escaneo");

    // WiFi.scanNetworks devuelve el número de redes encontradas
    int n = WiFi.scanNetworks();
    Serial.println("escaneo terminado");
    if (n == 0) {
        Serial.println("no se encontraron redes");
    } else {
        Serial.print(n);
        Serial.println(" redes encontradas");
        for (int i = 0; i < n; ++i) {
            // Imprime SSID y RSSI de cada red encontrada
            Serial.print(i + 1);
            Serial.print(": ");
            Serial.print(WiFi.SSID(i));
            Serial.print(" (");
            Serial.print(WiFi.RSSI(i));
            Serial.print(")");
            Serial.println((WiFi.encryptionType(i) == WIFI_AUTH_OPEN) ? " " : "*");
            delay(10);
        }
    }
    Serial.println("");

    // Espera un poco antes de escanear nuevamente
    delay(5000);
}
```

### Ejemplo de código para conectar a una red específica

Este ejemplo conecta a una red Wi-Fi específica. Cambia `ssid` y `password` por tu red Wi-Fi.

```cpp
#include "rpcWiFi.h"

const char* ssid = "tuNombreDeRed";
const char* password =  "tuContraseñaDeRed";

void setup() {
    Serial.begin(115200);
    while(!Serial); // Espera a que el Serial esté listo

    // Configura WiFi en modo estación y desconecta de un AP si estaba conectado
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();

    Serial.println("Conectando a WiFi..");
    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.println("Conectando a WiFi..");
        WiFi.begin(ssid, password);
    }
    Serial.println("Conectado a la red WiFi");
    Serial.print("Dirección IP: ");
    Serial.println (WiFi.localIP()); // imprime la dirección IP del dispositivo
    }

void loop() {

}
```

### Ejemplo de código WiFi Multi

* Incluye las librerías `rpcWiFi.h` y `WiFiMulti.h` en Arduino.

Este ejemplo utiliza la clase `WiFiMulti`, puedes usar

```cpp
wifiMulti.addAP("ssid", "password");
```

para agregar varios AP Wi-Fi a la lista y `wifiMulti.run()` intentará conectarse al Wi-Fi con mejor señal.

**Nota:** Cambia el `SSID` y la `Contraseña` según tu red Wi-Fi.

```cpp
#include "rpcWiFi.h"
#include <WiFiMulti.h>

WiFiMulti wifiMulti;

void setup() {
    Serial.begin(115200);
    while(!Serial); // Espera a que el Serial esté listo
    delay(1000);

    wifiMulti.addAP("ssid_del_AP_1", "tu_contraseña_del_AP_1");
    wifiMulti.addAP("ssid_del_AP_2", "tu_contraseña_del_AP_2");
    wifiMulti.addAP("ssid_del_AP_3", "tu_contraseña_del_AP_3");

    Serial.println("Conectando Wifi...");
    if (wifiMulti.run() == WL_CONNECTED) {
        Serial.println("");
        Serial.println("WiFi conectado");
        Serial.println("Dirección IP: ");
        Serial.println(WiFi.localIP());
    }
}

void loop() {
    if (wifiMulti.run() != WL_CONNECTED) {
        Serial.println("WiFi no conectado!");
        delay(1000);
    }
}
```

### Ejemplo de código cliente Wi-Fi

Este ejemplo demuestra cómo Wio Terminal se configura en modo STA, se conecta a un AP Wi-Fi específico, envía una solicitud HTTP GET y recibe una respuesta HTTP desde un servidor web en la misma red.

- Cambia el `ssid` y `password` por los de tu red Wi-Fi.

- Cambia el `host` por la dirección IP del servidor web.

Para probar el ejemplo fácilmente, puedes iniciar un servidor web simple usando Python en tu PC:

1. Copia y guarda lo siguiente en tu disco local, nómbralo `index.html`.

```html
<html>
<body>
Hello World!
</body>
</html>
```

2. En Powershell/Terminal, cambia al directorio donde guardaste `index.html` y ejecuta el siguiente comando para iniciar un servidor web simple con Python:

Para Python 3:

```py
python3 -m http.server 80
```

Para Python 2:

```py
python -m SimpleHTTPServer 80
```

3. Cambia el `host` en el código Arduino a la dirección IP de este PC. También cambia el `ssid` y `password` en el código Arduino para que coincidan con la red Wi-Fi a la que está conectado este PC.

4. Sube el código al Wio Terminal y revisa el monitor Serial para observar los resultados.

```cpp
#include <rpcWiFi.h>

const char* ssid = "tuNombreDeRed";
const char* password =  "tuContraseñaDeRed";

void setup() {
    Serial.begin(115200);
    while(!Serial); // Espera a que el Serial esté listo
    delay(1000);

    // Configura WiFi en modo estación y desconecta de un AP si estaba conectado
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    delay(2000);

    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.println("Conectando a WiFi..");
    }
    Serial.println("Conectado a la red WiFi");
    Serial.print("Dirección IP: ");
    Serial.println (WiFi.localIP()); // imprime la dirección IP del dispositivo
}

void loop() {
    const uint16_t port = 80; // Puerto por defecto
    const char* host = "192.168.0.10";  // Dirección IP del servidor destino

    Serial.print("Conectando a ");
    Serial.println(host);

    // Usa la clase WiFiClient para crear conexiones TCP
    WiFiClient client;

    if (!client.connect(host, port)) {
        Serial.println("Conexión fallida.");
        Serial.println("Esperando 5 segundos antes de reintentar...");
        delay(5000);
        return;
    }

    // Esto enviará una solicitud al servidor
    // descomenta esta línea para enviar una cadena arbitraria al servidor
    //client.print("Send this data to the server");
    // descomenta esta línea para enviar una solicitud básica de documento al servidor
    client.print("GET /index.html HTTP/1.1\n\n"); // enviando solicitud HTTP GET

    int maxloops = 0;

    // espera que la respuesta del servidor esté disponible
    while (!client.available() && maxloops < 1000) {
        maxloops++;
        delay(1); // espera 1 ms
    }
    if (client.available() > 0) {
        // lee una línea desde el servidor
        String line = client.readString(); // Lee la respuesta del servidor
        // Ajusta distintos finales de línea
        line.replace("\r\n", "\n");
        line.replace('\r', '\n');
        line.replace("\n", "\r\n");
        Serial.println(line);
    } else {
        Serial.println("client.available() agotó el tiempo de espera");
    }

    Serial.println("Cerrando conexión.");
    client.stop();

    Serial.println("Esperando 5 segundos antes de reiniciar...");
    delay(5000);
}
```

### Ejemplo de código de conexión HTTPS Wi-Fi

Este ejemplo demuestra cómo establecer una conexión HTTPS usando Wio Terminal. Con esto, puedes conectarte a casi cualquier sitio web y obtener datos según tus necesidades.

- Cambia el `ssid` y `password` por los de tu red Wi-Fi.

```cpp
#include <rpcWiFi.h>
#include <WiFiClientSecure.h>

const char* ssid     = "tuNombreDeRed";     // SSID de tu red
const char* password = "tuContraseñaDeRed"; // contraseña de tu red

const char*  server = "www.example.com";  // URL del servidor
const char* test_root_ca = \
                            "-----BEGIN CERTIFICATE-----\n"
                            "MIIDrzCCApegAwIBAgIQCDvgVpBCRrGhdWrJWZHHSjANBgkqhkiG9w0BAQUFADBh\n"
                            "MQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3\n"
                            "d3cuZGlnaWNlcnQuY29tMSAwHgYDVQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBD\n"
                            "QTAeFw0wNjExMTAwMDAwMDBaFw0zMTExMTAwMDAwMDBaMGExCzAJBgNVBAYTAlVT\n"
                            "MRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxGTAXBgNVBAsTEHd3dy5kaWdpY2VydC5j\n"
                            "b20xIDAeBgNVBAMTF0RpZ2lDZXJ0IEdsb2JhbCBSb290IENBMIIBIjANBgkqhkiG\n"
                            "9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4jvhEXLeqKTTo1eqUKKPC3eQyaKl7hLOllsB\n"
                            "CSDMAZOnTjC3U/dDxGkAV53ijSLdhwZAAIEJzs4bg7/fzTtxRuLWZscFs3YnFo97\n"
                            "nh6Vfe63SKMI2tavegw5BmV/Sl0fvBf4q77uKNd0f3p4mVmFaG5cIzJLv07A6Fpt\n"
                            "43C/dxC//AH2hdmoRBBYMql1GNXRor5H4idq9Joz+EkIYIvUX7Q6hL+hqkpMfT7P\n"
                            "T19sdl6gSzeRntwi5m3OFBqOasv+zbMUZBfHWymeMr/y7vrTC0LUq7dBMtoM1O/4\n"
                            "gdW7jVg/tRvoSSiicNoxBN33shbyTApOB6jtSj1etX+jkMOvJwIDAQABo2MwYTAO\n"
                            "BgNVHQ8BAf8EBAMCAYYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUA95QNVbR\n"
                            "TLtm8KPiGxvDl7I90VUwHwYDVR0jBBgwFoAUA95QNVbRTLtm8KPiGxvDl7I90VUw\n"
                            "DQYJKoZIhvcNAQEFBQADggEBAMucN6pIExIK+t1EnE9SsPTfrgT1eXkIoyQY/Esr\n"
                            "hMAtudXH/vTBH1jLuG2cenTnmCmrEbXjcKChzUyImZOMkXDiqw8cvpOp/2PV5Adg\n"
                            "06O/nVsJ8dWO41P0jmP6P6fbtGbfYmbW0W5BjfIttep3Sp+dWOIrWcBAI+0tKIJF\n"
                            "PnlUkiaY4IBIqDfv8NZ5YBberOgOzW6sRBc4L0na4UU+Krk2U886UAb3LujEV0ls\n"
                            "YSEY1QSteDwsOoBrp+uvFRTp2InBuThs4pFsiv9kuXclVzDAGySj4dzp30d8tbQk\n"
                            "CAUw7C29C79Fv1C5qfPrmAESrciIxpg0X40KPMbp1ZWVbd4=\n"
                            "-----END CERTIFICATE-----\n";

// Puedes usar certificados cliente x.509 si quieres
//const char* test_client_key = "";   // para verificar el cliente
//const char* test_client_cert = "";  // para verificar el cliente

WiFiClientSecure client;

void setup() {
    // Inicializa el serial y espera que se abra el puerto:
    Serial.begin(115200);
    while(!Serial); // Espera a que el Serial esté listo
    delay(1000);

    Serial.print("Intentando conectar a SSID: ");
    Serial.println(ssid);
    WiFi.begin(ssid, password);

    // intenta conectar a la red WiFi:
    while (WiFi.status() != WL_CONNECTED) {
        Serial.print(".");
        // espera 1 segundo para reintentar
        delay(1000);
    }
    Serial.print("Conectado a ");
    Serial.println(ssid);

    client.setCACert(test_root_ca);
    //client.setCertificate(test_client_key); // para verificación del cliente
    //client.setPrivateKey(test_client_cert); // para verificación del cliente

    Serial.println("\nIniciando conexión al servidor...");
    if (!client.connect(server, 443)) {
        Serial.println("¡Conexión fallida!");
    } else {
        Serial.println("¡Conectado al servidor!");
        // Realiza una petición HTTP:
        client.println("GET https://www.example.com HTTP/1.0");
        client.println("Host: www.example.com");
        client.println("Connection: close");
        client.println();

        while (client.connected()) {
            String line = client.readStringUntil('\n');
            if (line == "\r") {
                Serial.println("encabezados recibidos");
                break;
            }
        }
        // si hay bytes disponibles entrantes
        // del servidor, los lee y los imprime:
        while (client.available()) {
            char c = client.read();
            if (c == '\n') {
                Serial.write('\r');
            }
            Serial.write(c);
        }
        client.stop();
    }
}

void loop() {
    // no hacer nada
}
```

#### Obtención del root CA de un sitio web

Para obtener el root CA de un sitio web, puedes ejecutar el siguiente comando en la Terminal (Linux Bash Shell):

```sh
openssl s_client -showcerts -verify 5 -connect www.example.com:443 < /dev/null
```

Reemplaza **`www.example.com`** por la URL raíz del sitio web deseado.

**Para Windows**, puedes usar el **Subsistema de Windows para Linux (WSL)** para ejecutar el mismo comando de Linux.

**Nota:** Asegúrate de tener instaladas las dependencias:

```sh
sudo apt update
sudo apt install openssl
```

### Ejemplo de código para conectar a un servidor MQTT

Este ejemplo demuestra cómo establecer conexión MQTT usando Wio Terminal con un servidor MQTT. Con esto, puedes usar Wio Terminal para suscribirte y publicar mensajes en el servidor MQTT. Aquí se usa un servidor MQTT gratuito: [https://test.mosquitto.org/](https://test.mosquitto.org/).

* Descarga e instala la [**librería Arduino MQTT**](https://github.com/knolleary/pubsubclient) aquí.

```cpp
#include "rpcWiFi.h"
#include <PubSubClient.h>

// Actualiza estos valores para tu red.
const char *ssid = "tuNombreDeRed";      // SSID de tu red
const char *password = "tuContraseñaDeRed"; // Contraseña de tu red

const char *ID = "Wio-Terminal-Client";  // Nombre de nuestro dispositivo, debe ser único
const char *TOPIC = "WioTerminal";       // Topic al que publicar
const char *subTopic = "inTopic";        // Topic al que suscribirse
const char *server = "test.mosquitto.org"; // URL del servidor


WiFiClient wifiClient;
PubSubClient client(wifiClient);

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Mensaje recibido [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0; i<length; i++) {
    Serial.print((char)payload[i]);
  }
  Serial.println();
}

void reconnect() {
  // Reintentar hasta reconectarse
  while (!client.connected())
  {
    Serial.print("Intentando conexión MQTT...");
    // Intentar conectar
    if (client.connect(ID)) {
      Serial.println("conectado");
      // Una vez conectado, publicar un anuncio...
      client.publish(TOPIC, "{\"message\": \"Wio Terminal está conectado!\"}");
      Serial.println("¡Mensaje de conexión publicado correctamente!");
      // ... y resuscribirse
      client.subscribe(subTopic);
      Serial.print("Suscrito a: ");
      Serial.println(subTopic);
    }
    else {
      Serial.print("falló, rc=");
      Serial.print(client.state());
      Serial.println(" reintentando en 5 segundos");
      // Esperar 5 segundos antes de reintentar
      delay(5000);
    }
  }
}

void setup()
{
  Serial.begin(115200);
  while (!Serial)
    ; // Esperar a que el Serial esté listo
  Serial.print("Intentando conectar a SSID: ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);

  // intentar conectar a la red WiFi:
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    WiFi.begin(ssid, password);
    // esperar 1 segundo para reintentar
    delay(1000);
  }
  
  Serial.print("Conectado a ");
  Serial.println(ssid);
  delay(500);

  client.setServer(server, 1883);
  client.setCallback(callback);
}

void loop()
{
  if (!client.connected()) {
    reconnect();
  }
  client.loop();
}
```

### Ejemplo de código para conectar a servidor MQTTs

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/mqtts.mp4" type="video/mp4" />
  </video></div>

Este ejemplo demuestra cómo establecer una conexión MQTTs usando Wio Terminal. Aquí se usa un servidor MQTTs gratuito: <https://test.mosquitto.org/> y envía datos del acelerómetro a un topic.

- Descarga e instala la [**librería Arduino MQTT**](https://github.com/knolleary/pubsubclient).

- Instala la librería del acelerómetro para Wio Terminal siguiendo [**esta wiki**](https://wiki.seeedstudio.com/Wio-Terminal-IMU-Overview/).

- El Wio Terminal publicará los datos del acelerómetro en el topic `WioTerminal/IMU` y se suscribirá a mensajes del topic `inTopic`.

```cpp
#include "rpcWiFi.h"
#include <PubSubClient.h>
#include <WiFiClientSecure.h>
#include "LIS3DHTR.h"

const char *ssid = "tuNombreDeRed";      // SSID de tu red
const char *password = "tuContraseñaDeRed"; // contraseña de tu red

const char *ID = "Wio-Terminal-Client";  // Nombre de nuestro dispositivo, debe ser único
const char *TOPIC = "WioTerminal/IMU";  // Topic para publicar
const char *subTopic = "inTopic";        // Topic para suscribirse

const char *server = "test.mosquitto.org"; // URL del servidor
const char *test_root_ca =
"-----BEGIN CERTIFICATE-----\n"
"MIIEAzCCAuugAwIBAgIUBY1hlCGvdj4NhBXkZ/uLUZNILAwwDQYJKoZIhvcNAQEL\n"
"BQAwgZAxCzAJBgNVBAYTAkdCMRcwFQYDVQQIDA5Vbml0ZWQgS2luZ2RvbTEOMAwG\n"
"A1UEBwwFRGVyYnkxEjAQBgNVBAoMCU1vc3F1aXR0bzELMAkGA1UECwwCQ0ExFjAU\n"
"BgNVBAMMDW1vc3F1aXR0by5vcmcxHzAdBgkqhkiG9w0BCQEWEHJvZ2VyQGF0Y2hv\n"
"by5vcmcwHhcNMjAwNjA5MTEwNjM5WhcNMzAwNjA3MTEwNjM5WjCBkDELMAkGA1UE\n"
"BhMCR0IxFzAVBgNVBAgMDlVuaXRlZCBLaW5nZG9tMQ4wDAYDVQQHDAVEZXJieTES\n"
"MBAGA1UECgwJTW9zcXVpdHRvMQswCQYDVQQLDAJDQTEWMBQGA1UEAwwNbW9zcXVp\n"
"dHRvLm9yZzEfMB0GCSqGSIb3DQEJARYQcm9nZXJAYXRjaG9vLm9yZzCCASIwDQYJ\n"
"KoZIhvcNAQEBBQADggEPADCCAQoCggEBAME0HKmIzfTOwkKLT3THHe+ObdizamPg\n"
"UZmD64Tf3zJdNeYGYn4CEXbyP6fy3tWc8S2boW6dzrH8SdFf9uo320GJA9B7U1FW\n"
"Te3xda/Lm3JFfaHjkWw7jBwcauQZjpGINHapHRlpiCZsquAthOgxW9SgDgYlGzEA\n"
"s06pkEFiMw+qDfLo/sxFKB6vQlFekMeCymjLCbNwPJyqyhFmPWwio/PDMruBTzPH\n"
"3cioBnrJWKXc3OjXdLGFJOfj7pP0j/dr2LH72eSvv3PQQFl90CZPFhrCUcRHSSxo\n"
"E6yjGOdnz7f6PveLIB574kQORwt8ePn0yidrTC1ictikED3nHYhMUOUCAwEAAaNT\n"
"MFEwHQYDVR0OBBYEFPVV6xBUFPiGKDyo5V3+Hbh4N9YSMB8GA1UdIwQYMBaAFPVV\n"
"6xBUFPiGKDyo5V3+Hbh4N9YSMA8GA1UdEwEB/wQFMAMBAf8wDQYJKoZIhvcNAQEL\n"
"BQADggEBAGa9kS21N70ThM6/Hj9D7mbVxKLBjVWe2TPsGfbl3rEDfZ+OKRZ2j6AC\n"
"6r7jb4TZO3dzF2p6dgbrlU71Y/4K0TdzIjRj3cQ3KSm41JvUQ0hZ/c04iGDg/xWf\n"
"+pp58nfPAYwuerruPNWmlStWAXf0UTqRtg4hQDWBuUFDJTuWuuBvEXudz74eh/wK\n"
"sMwfu1HFvjy5Z0iMDU8PUDepjVolOCue9ashlS4EB5IECdSR2TItnAIiIwimx839\n"
"LdUdRudafMu5T5Xma182OC0/u/xRlEm+tvKGGmfFcN0piqVl8OrSPBgIlb+1IKJE\n"
"m/XriWr/Cq4h/JfB7NTsezVslgkBaoU=\n"
"-----END CERTIFICATE-----\n";

long lastMsg = 0;

LIS3DHTR<TwoWire> lis;
WiFiClientSecure wifiClient;
PubSubClient client(wifiClient);

void callback(char *topic, byte *payload, unsigned int length)
{
  Serial.print("Mensaje recibido [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i = 0; i < length; i++)
  {
    Serial.print((char)payload[i]);
  }
  Serial.println();
}

void reconnect()
{
  // Reintentar hasta reconectarse
  while (!client.connected())
  {
    Serial.print("Intentando conexión MQTT...");
    // Intentar conectar
    if (client.connect(ID))
    {
      Serial.println("conectado");
      // Una vez conectado, publicar un anuncio...
      client.publish(TOPIC, "{\"message\": \"Wio Terminal está conectado!\"}");
      Serial.println("Mensaje de conexión publicado correctamente!");
      // ... y resuscribirse
      client.subscribe(subTopic);
      Serial.print("Suscrito a: ");
      Serial.println(subTopic);
    }
    else
    {
      Serial.print("falló, rc=");
      Serial.print(client.state());
      Serial.println(" reintentando en 5 segundos");
      // Esperar 5 segundos antes de reintentar
      delay(5000);
    }
  }
}

void setup()
{
  // Inicializar serial y esperar que se abra el puerto:
  Serial.begin(115200);
  while (!Serial)
    ; // Esperar a que el Serial esté listo
  delay(1000);

  lis.begin(Wire1);

  if (!lis) {
    Serial.println("ERROR");
    while(1);
  }
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); // Frecuencia de salida de datos
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G);     // Rango de escala a 2g

  Serial.print("Intentando conectar a SSID: ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);

  // intentar conectar a la red WiFi:
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    WiFi.begin(ssid, password);
    // esperar 1 segundo para reintentar
    delay(1000);
  }
  Serial.print("Conectado a ");
  Serial.println(ssid);

  wifiClient.setCACert(test_root_ca);

  client.setServer(server, 8883);
  client.setCallback(callback);
}

void loop()
{
  if (!client.connected())
  {
    reconnect();
  }
  
  float x_values, y_values, z_values;
  
  // Enviar datos
  long now = millis();
  if (now - lastMsg > 5000) {
    lastMsg = now;
 
    x_values = lis.getAccelerationX();
    y_values = lis.getAccelerationY();
    z_values = lis.getAccelerationZ();
    String data="{\"x-axis\": "+String(x_values)+","+"\"y-axis\": "+String(y_values)+","+"\"z-axis\": "+String(z_values)+"}";

    if (!client.publish(TOPIC, data.c_str())) {
      Serial.println("Error al enviar el mensaje.");
    }
    Serial.printf("Mensaje enviado [%s] ", TOPIC);
    Serial.println(data);
  }
  
  client.loop();
}
```

### Ejemplo de código cliente UDP

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/udp-example.png" /></div>

Este ejemplo conecta a una red Wi-Fi y envía paquetes UDP a un servidor UDP que se está ejecutando en tu PC.

**Nota:** ¡Asegúrate de que tu PC y Wio Terminal estén en la misma red!

### Código servidor UDP en Python

- Guarda el siguiente código como `udp_server.py`.

- Ejecuta el script con: **`python udp_server.py`**.

```py
# Este script Python escucha en el puerto UDP 3333
# para mensajes desde Wio Terminal y los imprime en consola
import socket
import sys

try:
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
except socket.error as msg:
    print('No se pudo crear el socket. Código de error: ' + str(msg))
    sys.exit()

try:
    s.bind(('', 3333))
except socket.error as msg:
    print('Error al hacer bind: ' + str(msg))
    sys.exit()

print('Servidor escuchando...')

while True:
    data, addr = s.recvfrom(1024)
    if not data:
        break
    print(data.decode().strip())

s.close()
```

### Código Arduino para cliente UDP (Wio Terminal)

* Cambia `networkName` y `networkPswd` por tu configuración Wi-Fi.

* Cambia `udpAddress` por la IP de tu PC (donde corre el servidor UDP). Asegúrate que la PC y el Wio Terminal estén en la misma red.

* Sube el código al Wio Terminal.

```cpp
#include <rpcWiFi.h>
#include <WiFiUdp.h>

// Nombre y contraseña de la red Wi-Fi:
const char * networkName = "tu-ssid";
const char * networkPswd = "tu-contraseña";

// Dirección IP para enviar datos UDP:
// puede ser la IP del servidor o una dirección de broadcast
const char * udpAddress = "192.168.0.255";
const int udpPort = 3333;

boolean connected = false;  // estado de conexión

WiFiUDP udp;

void setup(){
  Serial.begin(115200);
  connectToWiFi(networkName, networkPswd);
}

void loop(){
  if(connected){
    udp.beginPacket(udpAddress, udpPort);
    udp.printf("Segundos desde arranque: %lu", millis()/1000);
    udp.endPacket();
  }
  delay(1000);
}

void connectToWiFi(const char * ssid, const char * pwd){
  Serial.println("Conectando a la red WiFi: " + String(ssid));

  WiFi.disconnect(true);
  WiFi.onEvent(WiFiEvent);
  WiFi.begin(ssid, pwd);

  Serial.println("Esperando conexión WiFi...");
}

void WiFiEvent(WiFiEvent_t event){
  switch(event) {
    case SYSTEM_EVENT_STA_GOT_IP:
      Serial.print("WiFi conectado! IP: ");
      Serial.println(WiFi.localIP());  
      udp.begin(WiFi.localIP(), udpPort);
      connected = true;
      break;
    case SYSTEM_EVENT_STA_DISCONNECTED:
      Serial.println("Conexión WiFi perdida");
      connected = false;
      break;
    default:
      break;
  }
}
```

### Ejemplo de Código Wi-Fi NTP

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/wifi-udp-rpc.png" /></div>

Este ejemplo utiliza UDP para obtener la hora NTP y usa el RTC incorporado en el núcleo SAMD51 para mantener la hora actualizada.

- Instala la librería [**Seeed_Arduino_RTC**](https://github.com/Seeed-Studio/Seeed_Arduino_RTC).

- Instala la librería [**millisDelay**](https://github.com/ansonhe97/millisDelay).

```cpp
#include <rpcWiFi.h>
#include <millisDelay.h>
#include "RTC_SAMD51.h"

const char ssid[] = "yourNetworkName"; // agrega tu SSID requerido
const char password[] = "yourNetworkPassword"; // agrega tu propia contraseña de red

millisDelay updateDelay; // objeto para el retraso de actualización, usado para actualización periódica NTP

unsigned int localPort = 2390;      // puerto local para escuchar paquetes UDP
char timeServer[] = "time.nist.gov"; // servidor NTP externo, por ejemplo time.nist.gov

const int NTP_PACKET_SIZE = 48; // la marca de tiempo NTP está en los primeros 48 bytes del mensaje
byte packetBuffer[NTP_PACKET_SIZE]; // buffer para mantener los paquetes entrantes y salientes

// declarar un objeto de tiempo
DateTime now;

// definir cliente WiFi
WiFiClient client;

// Clase de la librería udp
WiFiUDP udp;

// hora local
unsigned long devicetime;

RTC_SAMD51 rtc;

// para uso de la librería Adafruit RTClib
char daysOfTheWeek[7][12] = { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" };

void setup() {

    Serial.begin(115200);

    while (!Serial); // espera a que el puerto serial se conecte. Necesario para USB nativo

    // configurar red antes de verificar rtc
    connectToWiFi(ssid, password);

    // obtener la hora vía llamada NTP (udp) al servidor de tiempo
    // getNTPtime retorna tiempo epoch UTC ajustado por zona horaria pero no horario de verano
    devicetime = getNTPtime();

    // verificar si rtc está presente
    if (devicetime == 0) {
        Serial.println("Error al obtener hora del servidor de tiempo de red.");
    }

    if (!rtc.begin()) {
        Serial.println("No se encontró RTC");
        while (1) delay(10); // detener operación
    }

    // obtener e imprimir la hora actual del rtc
    now = rtc.now();
    Serial.print("Hora RTC es: ");
    Serial.println(now.timestamp(DateTime::TIMESTAMP_FULL));

    // ajustar hora usando la hora ntp
    rtc.adjust(DateTime(devicetime));

    // imprimir detalles de actualización al inicio
    Serial.println("Hora RTC (inicio) actualizada.");
    // obtener e imprimir la hora rtc ajustada
    now = rtc.now();
    Serial.print("Hora RTC ajustada (inicio) es: ");
    Serial.println(now.timestamp(DateTime::TIMESTAMP_FULL));

    // iniciar temporizadores millisdelays según se requiera, ajustar a necesidades
    updateDelay.start(1 * 60 * 60 * 1000); // actualizar hora vía ntp cada hora

}

void loop() {

    if (updateDelay.justFinished()) { // ciclo de 12 horas
        // repetir temporizador
        updateDelay.repeat(); // repetir

        // actualizar hora rtc
        devicetime = getNTPtime();
        if (devicetime == 0) {
            Serial.println("Error al obtener hora del servidor de tiempo de red.");
        }
        else {
            rtc.adjust(DateTime(devicetime));
            Serial.println("");
            Serial.println("Hora rtc actualizada.");
            // obtener e imprimir la hora rtc ajustada
            now = rtc.now();
            Serial.print("Hora RTC ajustada es: ");
            Serial.println(now.timestamp(DateTime::TIMESTAMP_FULL));
        }
    }
}


void connectToWiFi(const char* ssid, const char* pwd) {
    Serial.println("Conectando a la red WiFi: " + String(ssid));

    // borrar configuración anterior
    WiFi.disconnect(true);

    Serial.println("Esperando conexión WIFI...");

    // iniciar conexión
    WiFi.begin(ssid, pwd);

    while (WiFi.status() != WL_CONNECTED) {
        WiFi.begin(ssid, pwd);
        delay(500);
    }
    Serial.println("Conectado.");
    printWifiStatus();

}

unsigned long getNTPtime() {

    // el módulo devuelve un valor de tiempo unsigned long como segundos desde el 1 de enero de 1970 
    // tiempo unix o 0 si hubo un problema

    // solo enviar datos cuando esté conectado
    if (WiFi.status() == WL_CONNECTED) {
        // inicializa el estado UDP
        // inicializa el buffer de transferencia
        udp.begin(WiFi.localIP(), localPort);

        sendNTPpacket(timeServer); // enviar paquete NTP a servidor de tiempo
        // esperar respuesta disponible
        delay(1000);

        if (udp.parsePacket()) {
            Serial.println("Paquete udp recibido");
            Serial.println("");
            // recibimos un paquete, leer datos
            udp.read(packetBuffer, NTP_PACKET_SIZE); // leer paquete al buffer

            // la marca de tiempo comienza en el byte 40 del paquete recibido y tiene cuatro bytes,
            // o dos palabras, de largo. Primero extraer las dos palabras:

            unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);
            unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);
            // combinar los cuatro bytes (dos palabras) en un entero largo
            // este es tiempo NTP (segundos desde el 1 de enero 1900):
            unsigned long secsSince1900 = highWord << 16 | lowWord;
            // el tiempo Unix comienza el 1 de enero de 1970. En segundos, es 2208988800:
            const unsigned long seventyYears = 2208988800UL;
            // restar setenta años:
            unsigned long epoch = secsSince1900 - seventyYears;

            // ajustar tiempo por desfase horario en segundos +/- desde UTC
            // desfase horario WA desde UTC es +8 horas (28800 segundos)
            // + Este de GMT
            // - Oeste de GMT
            long tzOffset = 28800UL;

            // hora local WA 
            unsigned long adjustedTime;
            return adjustedTime = epoch + tzOffset;
        }
        else {
            // no se pudo interpretar correctamente el paquete udp
            // limpiar conexión udp
            udp.stop();
            return 0; // cero indica fallo
        }
        // al no llamar frecuentemente a tiempo ntp, stop libera recursos
        udp.stop();
    }
    else {
        // red no conectada
        return 0;
    }

}

// enviar solicitud NTP al servidor de tiempo en la dirección dada
unsigned long sendNTPpacket(const char* address) {
    // poner todos los bytes del buffer en 0
    for (int i = 0; i < NTP_PACKET_SIZE; ++i) {
        packetBuffer[i] = 0;
    }
    // inicializar valores necesarios para formar la solicitud NTP
    // (ver URL arriba para detalles de los paquetes)
    packetBuffer[0] = 0b11100011;   // LI, Versión, Modo
    packetBuffer[1] = 0;     // Estrato, o tipo de reloj
    packetBuffer[2] = 6;     // Intervalo de sondeo
    packetBuffer[3] = 0xEC;  // Precisión del reloj par
    // 8 bytes en cero para Root Delay y Root Dispersion
    packetBuffer[12] = 49;
    packetBuffer[13] = 0x4E;
    packetBuffer[14] = 49;
    packetBuffer[15] = 52;

    // todos los campos NTP tienen valores, ahora
    // se puede enviar un paquete solicitando una marca de tiempo:
    udp.beginPacket(address, 123); // las solicitudes NTP son al puerto 123
    udp.write(packetBuffer, NTP_PACKET_SIZE);
    udp.endPacket();
}

void printWifiStatus() {
    // imprimir el SSID de la red a la que estás conectado:
    Serial.println("");
    Serial.print("SSID: ");
    Serial.println(WiFi.SSID());

    // imprimir la dirección IP de tu shield WiFi:
    IPAddress ip = WiFi.localIP();
    Serial.print("Dirección IP: ");
    Serial.println(ip);

    // imprimir la intensidad de señal recibida:
    long rssi = WiFi.RSSI();
    Serial.print("intensidad de señal (RSSI):");
    Serial.print(rssi);
    Serial.println(" dBm");
    Serial.println("");
}
```

## Configuración de Wi-Fi en modo Punto de Acceso (AP) / Servidor Web

- Incluye las librerías `rpcWiFi.h`, `WiFiClient.h` y `WiFiAP.h` en Arduino.

- Configura el `ssid` y la `password` del Wi-Fi AP.

- Inicializa el servidor Wi-Fi en el puerto 80:

```cpp
WiFiServer server(80);
```

* Inicializa el AP con el `ssid` y la `password`:

```cpp
WiFi.softAP(ssid, password);
```

* Inicia el servidor web:

```cpp
server.begin();
```

### Código de ejemplo para configurar como modo AP (Servidor Web simple)

Este ejemplo configura el Wio Terminal como un servidor web simple y te permite conectarte a su red AP y controlar el hardware según la respuesta en HTTP.

```cpp
/*
    WiFiAccessPoint.ino crea un punto de acceso WiFi y proporciona un servidor web en él.

    Pasos:
    1. Conéctate al punto de acceso "yourAp"
    2. Apunta tu navegador a http://<Esta-IP-AP>/H para encender el LED o http://<Esta-IP-AP>/L para apagarlo
       (<Esta-IP-AP> debe reemplazarse con la IP que aparece en terminal/SerialPort, ver Nota 1)
     O BIEN
     Ejecuta comandos TCP "GET /H" y "GET /L" en el terminal PuTTY con la dirección IP (ver Nota 1) y puerto 80

    Creado para arduino-esp32 el 04 de julio de 2018
    por Elochukwu Ifediora (fedy0)
*/

#include <rpcWiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>

#define LED_BUILTIN 2   // Define el pin GPIO donde conectaste tu LED de prueba
                        // o comenta esta línea si tu placa de desarrollo tiene un LED incorporado

// Define las credenciales que desees.
const char* ssid = "yourAP";
const char* password = "yourPassword";

WiFiServer server(80);


void setup() {
    pinMode(LED_BUILTIN, OUTPUT);

    Serial.begin(115200);
    while(!Serial); // Espera a que el Serial esté listo
    delay(1000);
    Serial.println();
    Serial.println("Configurando punto de acceso...");

    // Puedes eliminar el parámetro password si quieres que el AP sea abierto.
    WiFi.softAP(ssid, password);
    IPAddress myIP = WiFi.softAPIP();
    /*
     * Nota 1
     * Guarda esta IP, será usada por el cliente (como el navegador web)
     */
    Serial.print("Dirección IP AP: ");
    Serial.println(myIP);
    server.begin();

    Serial.println("Servidor iniciado");
}

void loop() {
    WiFiClient client = server.available();   // escuchar clientes entrantes

    if (client) {                             // si hay un cliente,
        Serial.println("Nuevo cliente.");           // imprimir mensaje por puerto serial
        String currentLine = "";                // crear String para datos entrantes del cliente
        while (client.connected()) {            // mientras el cliente esté conectado
            if (client.available()) {             // si hay bytes para leer del cliente,
                char c = client.read();             // leer un byte,
                Serial.write(c);                    // imprimirlo en el monitor serial
                if (c == '\n') {                    // si el byte es un salto de línea

                    // si currentLine está vacía, recibiste dos saltos de línea seguidos.
                    // eso indica el final de la petición HTTP del cliente, así que envía respuesta:
                    if (currentLine.length() == 0) {
                        // encabezados HTTP siempre empiezan con un código de respuesta (ej. HTTP/1.1 200 OK)
                        // y un tipo de contenido para que el cliente sepa qué viene, luego línea vacía:
                        client.println("HTTP/1.1 200 OK");
                        client.println("Content-type:text/html");
                        client.println();

                        // contenido de la respuesta HTTP después del encabezado:
                        client.print("Haz click <a href=\"/H\">aquí</a> para ENCENDER el LED.<br>");
                        client.print("Haz click <a href=\"/L\">aquí</a> para APAGAR el LED.<br>");

                        // la respuesta HTTP termina con otra línea vacía:
                        client.println();
                        // salir del ciclo while:
                        break;
                    } else {    // si recibiste un salto de línea, limpiar currentLine:
                        currentLine = "";
                    }
                } else if (c != '\r') {  // si recibiste algo diferente a un retorno de carro,
                    currentLine += c;      // añadirlo al final de currentLine
                }

                // Verifica si la petición del cliente fue "GET /H" o "GET /L":
                if (currentLine.endsWith("GET /H")) {
                    digitalWrite(LED_BUILTIN, HIGH);               // GET /H enciende el LED
                }
                if (currentLine.endsWith("GET /L")) {
                    digitalWrite(LED_BUILTIN, LOW);                // GET /L apaga el LED
                }
            }
        }
        // cerrar la conexión:
        client.stop();
        Serial.println("Cliente desconectado.");
    }
}
```

## Preguntas Frecuentes (FAQs)

1. ¿Cómo verificar la versión del firmware RTL8720 en el código Arduino?

```cpp
#include "rpcWiFi.h"

void setup() {
    Serial.begin(115200);
    while(!Serial); // Esperar a abrir el Monitor Serial
    Serial.printf("Versión Firmware RTL8720: %s", rpc_system_version());
}

void loop() {
}
```

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
