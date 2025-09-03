---
description: Client and Server introduction
title: Client and Server introduction
keywords:
- Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-terminal-BLE-introduction
last_update:
  date: 07/27/2025
  author: Guillermo
---

# **Introducción a Cliente y Servidor**

Este artículo presenta la funcionalidad de comunicación Cliente y Servidor vía BLE usando el Wio Terminal.

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Wio-connect.png"/></div>

## **Hardware requerido**

* [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## **Descripción general**

### **¿Qué es Cliente y Servidor?**

* El **Cliente** realiza solicitudes al **Servidor** para comunicarse y permite que un dispositivo intercambie datos de forma inalámbrica con otros dispositivos Bluetooth.
* El **Servidor** proporciona servicios de datos al Cliente. Encapsula los datos en características (characteristics). Múltiples características forman un Servicio, por lo tanto, el servicio es la unidad básica en una aplicación BLE.
* Cliente y Servidor son una relación de comunicación; ambos pueden actuar como maestro o esclavo.

### **¿Qué es un UUID?**

* Un **UUID** se utiliza generalmente para identificar información que debe ser única dentro de un sistema o red.
* Todos los dispositivos BLE tienen un UUID de Servicio, un UUID de Característica y un UUID de Descriptor. Todos estos UUID deben ser únicos y con baja probabilidad de repetición, lo que los hace útiles como claves asociativas en bases de datos o identificadores de hardware físico.

### **Servidor BLE en Wio Terminal**

El Wio Terminal con Bluetooth Low Energy puede actuar como servidor o cliente. El servidor anuncia su presencia para ser descubierto por otros dispositivos, y contiene los datos que el cliente puede leer. BLE soporta dos modos principales: **modo de difusión (Broadcast)** y **modo en red mallada (Mesh Network)**.

En modo difusión, el servidor transmite datos a múltiples clientes conectados. En modo mesh, todos los dispositivos se encuentran interconectados.

Tanto el cliente como el servidor utilizan un “**UUID de Servicio**” para establecer la conexión entre ambos. Dentro de este servicio pueden existir varias “**Características**” identificadas mediante su propio UUID. Usamos dos características: **TX** y **RX** para enviar y recibir datos. El Wio Terminal (como servidor) **notifica** al cliente mediante el UUID de TX, y el cliente puede enviar datos al Wio Terminal usando el UUID de RX.

Sin embargo, como existe transmisión en ambas direcciones, **TX en el Wio Terminal es RX en la app Android**, y viceversa.

### **Uso de la app nRF Connect**

La app **nRF Connect** se utiliza para buscar dispositivos BLE, ver sus UUID y direcciones MAC, especialmente cuando no conoces estos datos. También permite comunicarte directamente con dispositivos BLE.

Pasos:

* Descarga la [**app nRF Connect**](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=es) en tu smartphone.
* Escanea los dispositivos BLE cercanos.
* Encuentra el dispositivo BLE, conéctate, y verás su UUID y dirección MAC.
* Puedes enviar o recibir datos desde una característica.

Ejemplo de dispositivos BLE detectados por la app:

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/nRF-device-scan.png"/></div>

En las características, una flecha hacia arriba indica **envío de datos al servidor**, y una flecha hacia abajo indica **recepción de datos desde el servidor**.

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/interface.png"/></div>

La interfaz puede variar según la funcionalidad del dispositivo. Por ejemplo, si te conectas a un Wio Terminal (servidor) con funciones básicas, verás un solo UUID de Servicio con características de funciones distintas. Esto depende de la complejidad del equipo.

## **Uso como Cliente BLE**

En este ejemplo, el Wio Terminal actúa como Cliente para escanear todos los dispositivos BLE cercanos y muestra sus nombres y direcciones MAC.

Pasos:

* Necesitas un Wio Terminal con el [**último firmware BLE**](https://files.seeedstudio.com/wiki/Wio-Terminal-BLE/20200914-seeed-ambd-firmware-rpc-v1.0.0.zip).
* Configura el UUID del servidor y la dirección MAC en el código.
* Sube el [**código cliente**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/blob/master/examples/BLE_client/BLE_client.ino) al Wio Terminal.

### Fragmento de código cliente

En el código, se debe definir el UUID del servicio y el UUID de característica del servidor al cual deseas conectarte.

```cpp
// Servicio remoto al que se desea conectar.
static BLEUUID serviceUUID(0x180F);
// Característica del servicio remoto de interés.
static BLEUUID    charUUID(0x2A19);
```

Actualiza la dirección MAC del dispositivo al que deseas conectarte en el código:

```cpp
uint8_t bd_addr[6] = {0x7d, 0x18, 0x1b, 0xf1, 0xf7, 0x2c}; // Dirección MAC: 2c:f7:f1:1b:18:7d
```

Conéctate al servidor BLE remoto:

```cpp
pClient->connect(myDevice);
```

Obtén una referencia al servicio deseado en el servidor BLE remoto:

```cpp
BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
```

Obtén una referencia a la característica dentro del servicio del servidor BLE remoto:

```cpp
pRemoteCharacteristic = pRemoteService->getCharacteristic(charUUID);
```

### **Código del Cliente (Client code)**

```cpp
/**
 * Ejemplo de cliente BLE con múltiples funcionalidades.
 * Se han implementado varias capacidades nuevas.
 * autor desconocido
 * actualizado por chegewara
 */

#include "rpcBLEDevice.h"
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>

// Servicio remoto al que deseamos conectarnos.
static BLEUUID serviceUUID(0xFEE0);
// Característica del servicio remoto que nos interesa.
static BLEUUID    charUUID(0x2A2B);

static boolean doConnect = false;
static boolean connected = false;
static boolean doScan = false;
static BLERemoteCharacteristic* pRemoteCharacteristic;
static BLEAdvertisedDevice* myDevice;
uint8_t bd_addr[6] = {0xD7, 0x1D, 0x12, 0xDC, 0x64, 0xF0};
BLEAddress BattServer(bd_addr);

static void notifyCallback(
  BLERemoteCharacteristic* pBLERemoteCharacteristic,
  uint8_t* pData,
  size_t length,
  bool isNotify) {
    Serial.print("Callback de notificación para la característica ");
    Serial.print(pBLERemoteCharacteristic->getUUID().toString().c_str());
    Serial.print(" con longitud de datos ");
    Serial.println(length);
    Serial.print("datos: ");
    Serial.print(*(uint8_t *)pData);
}


class MyClientCallback : public BLEClientCallbacks {
  void onConnect(BLEClient* pclient) {
  }

  void onDisconnect(BLEClient* pclient) {
    connected = false;
    Serial.println("onDisconnect");
  }
};


bool connectToServer() {
    Serial.print("Estableciendo conexión con ");
    Serial.println(myDevice->getAddress().toString().c_str());
    
    BLEClient*  pClient  = BLEDevice::createClient();
    Serial.println(" - Cliente creado");

    pClient->setClientCallbacks(new MyClientCallback());
 

    // Conectar con el servidor BLE remoto.
    pClient->connect(myDevice);  // si se pasa BLEAdvertisedDevice en lugar de una dirección, se reconocerá el tipo de dirección del dispositivo (pública o privada)
    Serial.println(" - Conectado al servidor");

    // Obtener una referencia al servicio deseado en el servidor BLE remoto.
    BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
    Serial.println(serviceUUID.toString().c_str());
    if (pRemoteService == nullptr) {
      Serial.print("No se pudo encontrar el UUID del servicio: ");
      Serial.println(serviceUUID.toString().c_str());
      pClient->disconnect();
      return false;
    }
    Serial.println(" - Servicio encontrado");


    // Obtener una referencia a la característica dentro del servicio.
    pRemoteCharacteristic = pRemoteService->getCharacteristic(charUUID);
    if (pRemoteCharacteristic == nullptr) {
      Serial.print("No se pudo encontrar el UUID de la característica: ");
      Serial.println(charUUID.toString().c_str());
      pClient->disconnect();
      return false;
    }
    Serial.println(" - Característica encontrada");


    // Leer el valor de la característica.
    if(pRemoteCharacteristic->canRead()) {
      Serial.println(" - puede leer, iniciando");
      std::string value = pRemoteCharacteristic->readValue();
      Serial.print("El valor de la característica es: ");
      Serial.println(value.c_str());
    }
    
    if(pRemoteCharacteristic->canNotify())
      pRemoteCharacteristic->registerForNotify(notifyCallback);

    connected = true;
    return true;
}

/**
 * Escanea servidores BLE y encuentra el primero que anuncie el servicio deseado.
 */
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
 /**
   * Llamado para cada dispositivo BLE detectado.
   */
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    Serial.print("Dispositivo BLE anunciado encontrado: ");
    Serial.println(advertisedDevice.toString().c_str());
   
    // Verificamos si es el dispositivo que buscamos.
    if (memcmp(advertisedDevice.getAddress().getNative(),BattServer.getNative(), 6) == 0) {
      Serial.print("Dispositivo BATT encontrado: ");
      Serial.println(advertisedDevice.toString().c_str());
      BLEDevice::getScan()->stop();
      Serial.println("nuevo BLEAdvertisedDevice");
      myDevice = new BLEAdvertisedDevice(advertisedDevice);
      Serial.println("BLEAdvertisedDevice creado");
      doConnect = true;
      doScan = true; 
  } // onResult
  }
}; // MyAdvertisedDeviceCallbacks


void setup() {
  Serial.begin(115200);
  while(!Serial){};
  delay(2000);
  Serial.println("Iniciando aplicación Cliente BLE de Arduino...");
  BLEDevice::init("");

  // Obtener el escáner y configurar el callback para manejar nuevos dispositivos detectados.
  BLEScan* pBLEScan = BLEDevice::getScan();
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setInterval(1349);
  pBLEScan->setWindow(449);
  pBLEScan->setActiveScan(true);
  pBLEScan->start(5, false);
} // Fin de setup.


// Función principal del ciclo de Arduino.
void loop() {
 
  // Si la bandera "doConnect" es verdadera, nos conectamos al servidor BLE deseado.
  if (doConnect == true) {
    if (connectToServer()) {
      Serial.println("Ahora estamos conectados al servidor BLE.");
    } else {
      Serial.println("No se pudo conectar al servidor; no se realizará ninguna otra acción.");
    }
    doConnect = false;
  }
  Serial.printf(".");
  delay(1000);
} // Fin de loop
```

### **Resultado del código en ejecución**

Este es un ejemplo simple de código cliente sin conexión activa a ningún dispositivo. El Wio Terminal escanea los dispositivos BLE cercanos y muestra los resultados por consola.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/BLE-device-print.png"/></div>

## **Uso del Servidor BLE (BLE Server Usage)**

Este ejemplo muestra cómo usar el Wio Terminal como **servidor BLE**, el cual se conecta con otro Wio Terminal actuando como **cliente**, y luego recibe solicitudes del cliente a través de BLE.

### **Fragmento de código del Servidor (Server code Snippet)**

Puedes definir el nombre del dispositivo BLE así:

```cpp
BLEDevice::init("UART Service");
```

Debes definir los UUID para el dispositivo servidor en el Wio Terminal:

```cpp
#define SERVICE_UUID        "180f"
#define CHARACTERISTIC_UUID "2a19"
#define DESCRIPTOR_UUID     "4545"
```

Crear el servidor BLE:

```cpp
BLEServer *pServer = BLEDevice::createServer();
```

Crear un servicio BLE usando el UUID del servidor:

```cpp
BLEService *pService = pServer->createService(SERVICE_UUID);
```

Agregar una característica (characteristic):

```cpp
BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                       CHARACTERISTIC_UUID,
                                       BLECharacteristic::PROPERTY_READ |
                                       BLECharacteristic::PROPERTY_WRITE
                                     );
pCharacteristic->setValue("Hello World says Neil");
```

Funciones de lectura y escritura:

```cpp
pCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);
BLEDescriptor *pDescriptor = pCharacteristic->createDescriptor(
                                       DESCRIPTOR_UUID,
                                       ATTRIB_FLAG_VOID | ATTRIB_FLAG_ASCII_Z,
                                       GATT_PERM_READ | GATT_PERM_WRITE, 2
                                       );
```

Iniciar el servicio BLE:

```cpp
pService->start();
```

La publicidad (advertising) permite que los dispositivos transmitan información sobre sus intenciones. Es decir, cuando un dispositivo móvil recibe un mensaje Bluetooth, el receptor puede aceptar o rechazar dicho mensaje. El receptor debe indicar explícitamente que desea recibir mensajes.

```cpp
BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
```

### **Comunicación entre Cliente y Servidor (Client and Server communication)**

Realizamos una prueba simple en este ejemplo. El Wio Terminal en modo **cliente** se conecta al Wio Terminal en modo **servidor**. Cuando el cliente encuentra al servidor, se conecta, y el servidor envía un mensaje de texto al cliente.

#### Requisitos

* Necesitas **dos Wio Terminals**.
* Debes crear un UUID para que el cliente pueda conectarse.
* Descarga el código del [**Cliente**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/tree/master/examples/BLE_client) y del [**Servidor**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/tree/master/examples/BLE_server) desde este repositorio en **GitHub**.
* Sube el código **Cliente** a uno de los Wio Terminals.
* Sube el código **Servidor** al otro Wio Terminal.

Cuando se sube y ejecuta el **código del servidor**, verás que en el monitor del IDE de Arduino se imprime repetidamente `"unpaired"` hasta que el cliente se conecta.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Server_side3.png"/></div>

Después de conectarse al cliente, dejará de imprimir mensajes, y el cliente comenzará a imprimir los mensajes recibidos desde el servidor.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Client_side7.png"/></div>

### Código del Servidor (Server code)

```cpp
#include <rpcBLEDevice.h>
#include <BLEServer.h>

#define SERVICE_UUID        "180f"
#define CHARACTERISTIC_UUID "2a19"
#define DESCRIPTOR_UUID     "4545"

class MyCallbacks: public BLECharacteristicCallbacks {
    void onWrite(BLECharacteristic *pCharacteristic) {
      std::string rxValue = pCharacteristic->getValue();

      if (rxValue.length() > 0) {
        Serial.println("*********");
        Serial.print("Valor recibido: ");
        for (int i = 0; i < rxValue.length(); i++)
          Serial.print(rxValue[i]);

        Serial.println();
        Serial.println("*********");
      }
    }
};

void setup() {
  Serial.begin(115200);
  while(!Serial){};
  Serial.println("Iniciando BLE...");

  BLEDevice::init("Long name 11");
  BLEServer *pServer = BLEDevice::createServer();
  BLEService *pService = pServer->createService(SERVICE_UUID);
  BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                         CHARACTERISTIC_UUID,
                                         BLECharacteristic::PROPERTY_READ |
                                         BLECharacteristic::PROPERTY_WRITE
                                       );
  pCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);
  BLEDescriptor *pDescriptor = pCharacteristic->createDescriptor(
                                         DESCRIPTOR_UUID,
                                         ATTRIB_FLAG_VOID | ATTRIB_FLAG_ASCII_Z,
                                         GATT_PERM_READ | GATT_PERM_WRITE,
                                         2
                                         );
  pCharacteristic->setValue("Hola mundo dice Neil");
  pCharacteristic->setCallbacks(new MyCallbacks());
  pService->start();

  // Publicidad BLE
  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(SERVICE_UUID);
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x06);  // Mejora compatibilidad con iPhone
  pAdvertising->setMinPreferred(0x12);
  BLEDevice::startAdvertising();
  Serial.println("¡Característica definida! Ahora puedes leerla desde tu teléfono.");
}

void loop() { 
  // Código principal que se ejecuta repetidamente:
  Serial.println("1");
  delay(2000);
}
```

## Conexión del Servidor con un Cliente (Smartphone)

<div align="center"><img src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/vidoeh-GIF.gif"/></div>

Este ejemplo utiliza un **smartphone como cliente BLE** para conectarse al **Wio Terminal actuando como servidor**. El Wio Terminal puede recibir mensajes enviados desde el cliente.

### Pasos:

1. Descarga la aplicación **nRF Connect** en tu smartphone.
2. Sube el código anterior al **Wio Terminal**.
3. Abre la aplicación **nRF Connect**, escanea los dispositivos BLE y conéctate al **Wio Terminal**.

## **Ejemplo: UART BLE con Interfaz Gráfica en Wio Terminal**

Este ejemplo implementa un servicio BLE UART con notificación y escritura, utilizando el Wio Terminal como **servidor**. La pantalla del dispositivo muestra:

* El estado de conexión BLE.
* Los datos recibidos desde el cliente (por ejemplo, un smartphone con nRF Connect App).

### **Código del Servidor BLE con Interfaz**

```cpp
#include "rpcBLEDevice.h"
#include <BLE2902.h>
#include <TFT_eSPI.h> // Librería específica para la pantalla
#include <SPI.h>

TFT_eSPI tft = TFT_eSPI();             // Instancia del TFT
TFT_eSprite spr = TFT_eSprite(&tft);   // Sprite para renderizado rápido

BLEServer *pServer = NULL;
BLECharacteristic *pTxCharacteristic;

bool deviceConnected = false;
bool oldDeviceConnected = false;

String Value11;

// UUIDs del servicio y características UART
#define SERVICE_UUID           "6E400001-B5A3-F393-E0A9-E50E24DCCA9E"
#define CHARACTERISTIC_UUID_RX "6E400002-B5A3-F393-E0A9-E50E24DCCA9E"
#define CHARACTERISTIC_UUID_TX "6E400003-B5A3-F393-E0A9-E50E24DCCA9E"

class MyServerCallbacks: public BLEServerCallbacks {
  void onConnect(BLEServer* pServer) {
    deviceConnected = true;
    spr.fillSprite(TFT_BLACK);
    spr.createSprite(240, 100);
    spr.setTextColor(TFT_WHITE, TFT_BLACK);
    spr.setFreeFont(&FreeSansBoldOblique12pt7b);
    spr.drawString("Message: ", 20, 70);
    spr.setTextColor(TFT_GREEN, TFT_BLACK);
    spr.drawString("estado: conectado", 10, 5);
    spr.pushSprite(0, 0);
  }

  void onDisconnect(BLEServer* pServer) {
    deviceConnected = false;
    spr.fillSprite(TFT_BLACK);
    spr.createSprite(240, 100);
    spr.setTextColor(TFT_WHITE, TFT_BLACK);
    spr.setFreeFont(&FreeSansBoldOblique12pt7b);
    spr.drawString("Message: ", 20, 70);
    spr.setTextColor(TFT_RED, TFT_BLACK);
    spr.drawString("estado: desconectado", 10, 5);
    spr.pushSprite(0, 0);
  }
};

class MyCallbacks: public BLECharacteristicCallbacks {
  void onWrite(BLECharacteristic *pCharacteristic) {
    std::string rxValue = pCharacteristic->getValue();

    if (rxValue.length() > 0) {
      spr.fillSprite(TFT_BLACK);
      spr.setTextColor(TFT_WHITE, TFT_BLACK);
      spr.setFreeFont(&FreeSansBoldOblique9pt7b);
      for (int i = 0; i < rxValue.length(); i++) {
        spr.drawString((String)rxValue[i], 10 + i * 15, 0);
        spr.pushSprite(10, 100);
      }
    }
  }
};

void setup() {
  tft.begin();
  tft.init();
  tft.setRotation(3);
  tft.fillScreen(TFT_BLACK);

  BLEDevice::init("UART Servicess");  // Nombre del dispositivo BLE

  // Crear servidor BLE
  pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());

  // Crear servicio BLE
  BLEService *pService = pServer->createService(SERVICE_UUID);

  // Característica TX (notificación y lectura)
  pTxCharacteristic = pService->createCharacteristic(
    CHARACTERISTIC_UUID_TX,
    BLECharacteristic::PROPERTY_NOTIFY | BLECharacteristic::PROPERTY_READ
  );
  pTxCharacteristic->setAccessPermissions(GATT_PERM_READ);
  pTxCharacteristic->addDescriptor(new BLE2902());

  // Característica RX (escritura)
  BLECharacteristic *pRxCharacteristic = pService->createCharacteristic(
    CHARACTERISTIC_UUID_RX,
    BLECharacteristic::PROPERTY_WRITE
  );
  pRxCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);
  pRxCharacteristic->setCallbacks(new MyCallbacks());

  // Iniciar servicio y publicidad BLE
  pService->start();
  pServer->getAdvertising()->start();

  spr.fillSprite(TFT_BLACK);
  spr.createSprite(240, 100);
  spr.setTextColor(TFT_WHITE, TFT_BLACK);
  spr.setFreeFont(&FreeSansBoldOblique12pt7b);
  spr.drawString("estado: desconectado", 10, 5);
  spr.drawString("Message: ", 20, 70);
  spr.pushSprite(0, 0);
}

void loop() {
  // Reconexión automática
  if (!deviceConnected && oldDeviceConnected) {
    delay(500);
    pServer->startAdvertising();
    oldDeviceConnected = deviceConnected;
  }

  if (deviceConnected && !oldDeviceConnected) {
    oldDeviceConnected = deviceConnected;
  }
}
```