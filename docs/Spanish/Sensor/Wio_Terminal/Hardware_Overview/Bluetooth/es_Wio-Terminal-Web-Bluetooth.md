---
description: Web Bluetooth APIs
title: APIs Web Bluetooth 
keywords:
- Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Web-Bluetooth
last_update:
  date: 06/27/2025
  author: Guillermo
---

# Uso de APIs Web Bluetooth con Wio Terminal

Esta es la wiki para interactuar con la función Bluetooth del Wio Terminal mediante las [**APIs Web Bluetooth**](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API). Las APIs Web Bluetooth te brindan la capacidad de interactuar con dispositivos Bluetooth desde navegadores web.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/exmaple.gif"/></div>

## ¿Qué es la API Web Bluetooth?

Hasta ahora, la capacidad de interactuar con dispositivos Bluetooth solo era posible en aplicaciones nativas. La [**API Web Bluetooth**](https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web) busca cambiar eso y llevarla también a los navegadores web. Junto con esfuerzos como [Physical Web](https://google.github.io/physical-web/), las personas pueden acercarse e interactuar con dispositivos directamente desde la web. Mira [este video de un dron controlado desde una app web](https://www.youtube.com/watch?v=yILD_ZdXJW4) para darte una idea de cómo funciona.

## Ejemplo sencillo con Web Bluetooth

El siguiente ejemplo demuestra cómo configurar el Wio Terminal y usar un sitio HTML sencillo para interactuar con la API Web Bluetooth mediante el Bluetooth del Wio Terminal.

<div align="center"><video width="{560}" height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/simple.mp4" type="video/mp4" />
  </video></div>

### Configuración en Arduino

- Por favor, sigue la [**Descripción general de Bluetooth en Wio Terminal**](https://wiki.seeedstudio.com/Wio-Terminal-Bluetooth-Overview/) para cargar el firmware Bluetooth al Wio Terminal y descargar las bibliotecas necesarias antes de continuar.

- Copia el siguiente código y súbelo al Wio Terminal:

```cpp
#include <rpcBLEDevice.h>
#include <BLEServer.h>
#include <BLE2902.h>

bool _BLEClientConnected = false;
uint8_t level = 10;

#define BatteryService BLEUUID((uint16_t)0x180F) 
BLECharacteristic BatteryLevelCharacteristic(BLEUUID((uint16_t)0x2A19), BLECharacteristic::PROPERTY_READ  | BLECharacteristic::PROPERTY_WRITE  | BLECharacteristic::PROPERTY_NOTIFY);

class MyServerCallbacks : public BLEServerCallbacks {
    void onConnect(BLEServer* pServer) {
      _BLEClientConnected = true;
    };

    void onDisconnect(BLEServer* pServer) {
      _BLEClientConnected = false;
    }
};

/* ###############################################################  CALLBACK para recibir datos desde el teléfono */
#define CHARACTERISTIC_UUID_RX "6E400002-B5A3-F393-E0A9-E50E24DCCA9E"

class MyCallbacks: public BLECharacteristicCallbacks {

    void onWrite(BLECharacteristic *pCharacteristic) {
      std::string rxValue = pCharacteristic->getValue();
      Serial.println(rxValue[0]);
 
      if (rxValue.length() > 0) {
        Serial.println("*********");
        Serial.print("Valor recibido: ");
 
        for (int i = 0; i < rxValue.length(); i++) {
          Serial.print(rxValue[i]);
        }
        Serial.println();
        Serial.println("*********");
      }
 
    }
};

/* ############################################################### */
void initBLE() {
  BLEDevice::init("BLE Battery");
  // Crear el servidor BLE
  BLEServer *pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());

  // Crear el servicio BLE
  BLEService *pBattery = pServer->createService(BatteryService);

  pBattery->addCharacteristic(&BatteryLevelCharacteristic);
  BatteryLevelCharacteristic.addDescriptor(new BLE2902());

  /* ############################################################### definir callback */
  BLECharacteristic *pWriteCharacteristic = pBattery->createCharacteristic(
                                         CHARACTERISTIC_UUID_RX,
                                         BLECharacteristic::PROPERTY_WRITE
                                       );
  pWriteCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);
 
  pWriteCharacteristic->setCallbacks(new MyCallbacks());
  /* ############################################################### */
  
  pServer->getAdvertising()->addServiceUUID(BatteryService);

  pBattery->start();
  // Comenzar publicidad
  pServer->getAdvertising()->start();
}

void setup() {
  Serial.begin(115200);
//   while(!Serial);
  Serial.println("--- Indicador de nivel de batería BLE en Wio Terminal ---");
  initBLE();
}
  
void loop() {

  BatteryLevelCharacteristic.setValue(&level, 1);
  BatteryLevelCharacteristic.notify();
  delay(3000);

  level++;
  Serial.print("Nivel de batería: ");
  Serial.println(int(level));

  if (int(level)==100)
    level=0;
}
```

El código anterior configura el Wio Terminal con el nombre Bluetooth visible **`BLE Battery`** y como servidor Bluetooth, estableciendo un servicio BLE de batería. Esto es importante y debe coincidir con el sitio HTML de las APIs Web Bluetooth más adelante.

### Sitio web HTML con API Web Bluetooth

Ahora que el Wio Terminal está completamente configurado, necesitamos escribir un sitio HTML con las APIs Web Bluetooth para que puedan interactuar. Consulta lo siguiente como referencia:

* Descarga el archivo [**`webbluetooth.html`**](https://github.com/ansonhe97/WioTerminal-WebBluetooth/blob/main/webbluetooth.html) desde aquí.

* Abre el archivo `webbluetooth.html` usando **Google Chrome o Microsoft Edge en su versión más reciente** (que soporten las APIs Web Bluetooth).

* Haz **clic derecho** en el sitio y selecciona **Inspeccionar** (CMD+OPT+I en macOS y Ctrl+Shift+I en Windows), luego selecciona la **Consola de control**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/1.png"/></div>

- Haz clic en el botón **Connect with BLE device** en el sitio. Deberías ver que `BLE Battery` (Wio Terminal) aparece en la ventana de conexión. Haz clic en **Connect**.

>Nota: Las APIs Web Bluetooth en realidad detectan todos los dispositivos BLE cercanos, pero aquí se utiliza un filtro para limitarlo únicamente al dispositivo BLE llamado BLE Battery.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/2.png"/></div>

- Haz clic en el botón **Start** en el sitio y comenzará a recibir información de batería transmitida desde el Wio Terminal.

Consola del sitio con API Web Bluetooth:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/3.png"/></div>

Consola de monitor serial de Arduino:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/4.png"/></div>

- ¡Ahora el Wio Terminal está interactuando con el sitio usando las APIs Web Bluetooth! Esto hace que la función BLE sea mucho más interesante, ya que puedes transmitir información a través de navegadores web.

## Visualización de datos del acelerómetro en un sitio web usando APIs Web Bluetooth

Lo siguiente es un buen ejemplo de cómo usar APIs Web Bluetooth en un sitio web. Este ejemplo se conecta al Wio Terminal usando Web Bluetooth y visualiza los datos del acelerómetro integrado.

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/example.mp4" type="video/mp4" />
  </video></div>

### Configuración en Arduino

- Por favor asegúrate de haber seguido la [**Descripción general del acelerómetro del Wio Terminal**](https://wiki.seeedstudio.com/Wio-Terminal-IMU-Overview/) antes de continuar.

- Descarga el ejemplo **[`WebBluetooth-Accelerator.ino`](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_WebBluetooth/WioTerminal_WebBluetooth.ino)** o copia el siguiente código en el Arduino IDE.

```cpp
#include <rpcBLEDevice.h>
#include <BLEServer.h>
#include <LIS3DHTR.h>

#define accelerometerService "19b10000-e8f2-537e-4f6c-d104768a1214"
#define firstCharacteristic  "19b10010-e8f2-537e-4f6c-d104768a1214"
#define DESCRIPTOR_UUID      "19b10010"

LIS3DHTR<TwoWire> lis;

bool deviceConnected = false;
bool oldDeviceConnected = false;

BLEServer *pServer = NULL;
BLECharacteristic * pCharacteristic;

class MyServerCallbacks: public BLEServerCallbacks {
    void onConnect(BLEServer* pServer) {
      Serial.println("MyServerCallbacks onConnect ");
      deviceConnected = true;
    };

    void onDisconnect(BLEServer* pServer) {
      deviceConnected = false;
    }
};

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
//  while(!Serial){};
  
  lis.begin(Wire1);
  if (!lis) {
    Serial.println("¡Error en acelerómetro!");
    while(1);
  }
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Frecuencia de salida de datos
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Rango de escala configurado a 2g
  Serial.println("¡Acelerómetro inicializado!");
  
  Serial.println("¡Iniciando BLE!");

  BLEDevice::init("Accelerometer");
  pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());
  
  BLEService *pService = pServer->createService(accelerometerService);
  pCharacteristic = pService->createCharacteristic(
                                         firstCharacteristic,
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
  pCharacteristic->setCallbacks(new MyCallbacks());
  pService->start();

  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(accelerometerService);
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x06);  // ayuda con conexiones en iPhone
  pAdvertising->setMinPreferred(0x12);
  BLEDevice::startAdvertising();
  Serial.println("¡Característica definida! ¡Ahora puedes leerla desde tu teléfono!");
}

void loop() { 
  if (deviceConnected) {
    updateAcceleration();
  }
      // desconectado
    if (!deviceConnected && oldDeviceConnected) {
        delay(500); // darle tiempo a la pila BLE para reiniciarse
        pServer->startAdvertising(); // reiniciar publicidad
        Serial.println("iniciar publicidad");
        oldDeviceConnected = deviceConnected;
    }
    // conectado
    if (deviceConnected && !oldDeviceConnected) {
        oldDeviceConnected = deviceConnected;
    }
}

void updateAcceleration() {
  float x_values, y_values, z_values;
  x_values = lis.getAccelerationX();
  y_values = lis.getAccelerationY();
  z_values = lis.getAccelerationZ();

  String accelerometerData = String(x_values)+"|"+String(y_values)+"|"+String(z_values);
  Serial.println(accelerometerData);
  pCharacteristic->setValue(accelerometerData.c_str());
  pCharacteristic->notify();
  delay(20);
}
```

* Sube el ejemplo al Wio Terminal.

### Sitio web HTML con API Web Bluetooth

* Abre el sitio **[Web Bluetooth Accelerometer Plotter For Wio Terminal](https://seeed-studio.github.io/Seeed_Arduino_Sketchbook/)**.

> También puedes consultar el [**código fuente HTML**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/web-bluetooth/docs/index.html) aquí, para más referencia.

* Conecta tu dispositivo llamado `Accelerator` (Wio Terminal), y deberías poder ver los datos del acelerómetro en el sitio web.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/web-acc.gif"/></div>

¡Esto significa que puedes escribir un sitio web interactivo con Web Bluetooth y Wio Terminal!

## Recursos

* [**Especificaciones de Web Bluetooth APIs**](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)
* [**Ejemplos de Web Bluetooth APIs**](https://googlechrome.github.io/samples/web-bluetooth/index.html)
* [**Errores de implementación**](https://crbug.com/?q=component:Blink>Bluetooth)
* [**Especificación de Web Bluetooth**](https://webbluetoothcg.github.io/web-bluetooth)

## Soporte técnico y discusión sobre productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes formas de soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Contamos con varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

