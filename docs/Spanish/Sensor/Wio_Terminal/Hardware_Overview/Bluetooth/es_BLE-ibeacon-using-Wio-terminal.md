---
description: Bluetooth Ibeacon
title: Bluetooth Ibeacon
keywords:
- Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/BLE-ibeacon-using-Wio-terminal
last_update:
  date: 06/27/2025
  author: Guillermo
---

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/PIC-ibeacon.png"/></div>

## Descripción general

El Wio Terminal es un potente dispositivo IoT con soporte integrado para Bluetooth clásico y Bluetooth Low Energy (BLE). El Bluetooth clásico se utiliza en módulos de audio, transferencia de archivos o transmisión de grandes volúmenes de datos, mientras que BLE está orientado a aplicaciones optimizadas para batería, como balizas (beacons), pulseras de actividad, anuncios de proximidad, etc. Por lo tanto, es posible conectarlo a módulos funcionales específicos y utilizarlo como un beacon en ocasiones determinadas.

En tutoriales anteriores del Wio Terminal ya se introdujeron los modos Cliente y Servidor. Si tienes dudas, revisa la [**introducción de Cliente y Servidor**](https://wiki.seeedstudio.com/Wio-terminal-BLE-introduction/).

En este tutorial vamos a construir un iBeacon BLE usando el Wio Terminal. Además, utilizaremos un smartphone para visualizar la información del iBeacon. Se asume que ya sabes cómo usar el Wio Terminal con el Arduino IDE. Si no es así, revisa primero [**la guía de inicio del Wio Terminal**](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/).

## Hardware requerido

* [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
* **Cable Tipo-C**
* **Batería tipo chasis para Wio Terminal**

<!-- (https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html) -->

## Software requerido

* Descarga el [**Arduino IDE**](https://www.arduino.cc/en/main/software) en tu PC
* Descarga la app [**nRF Connect**](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=es) en tu smartphone

## Instrucciones

### **Prueba del iBeacon en Wio Terminal**

Esta es una prueba simple para escanear el iBeacon del Wio Terminal y visualizar su información. Asegúrate de que el dispositivo pueda ser detectado, y verás el ícono específico del iBeacon.

### **Uso de la app nRF Connect**

1. Descarga y abre la app **nRF Connect**. Pulsa la opción **SCAN** en la esquina superior derecha. Verás los dispositivos iBeacon del Wio Terminal en la lista, junto con la dirección MAC, RSSI (dBm) y tiempo de retardo de conexión.

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/nRF_interface.jpg"/></div>

**Código de prueba**

```cpp
#include "sys/time.h"
#include "rpcBLEDevice.h"
#include "BLEBeacon.h"

BLEAdvertising *pAdvertising;

#define BEACON_UUID "8ec76ea3-6668-48da-9866-75be8bc86f4d" // UUID 1 

void setBeacon() {
  BLEBeacon oBeacon = BLEBeacon();
  oBeacon.setManufacturerId(0x4C00); // ID de Apple falso
  oBeacon.setProximityUUID(BLEUUID(BEACON_UUID));
  oBeacon.setMajor(0x007B);
  oBeacon.setMinor(0x01C8);
  
  BLEAdvertisementData oAdvertisementData = BLEAdvertisementData();
  BLEAdvertisementData oScanResponseData = BLEAdvertisementData();

  oAdvertisementData.setFlags(0x04); // BR_EDR_NOT_SUPPORTED

  std::string strServiceData = "";
  strServiceData += (char)26;     // Longitud
  strServiceData += (char)0xFF;   // Tipo
  strServiceData += oBeacon.getData(); 
  oAdvertisementData.addData(strServiceData);

  pAdvertising->setAdvertisementData(oAdvertisementData);
  pAdvertising->setScanResponseData(oScanResponseData);
  pAdvertising->setAdvertisementType(GAP_ADTYPE_ADV_NONCONN_IND);
}

void setup() {
  Serial.begin(115200);
  while(!Serial){};
  
  BLEDevice::init("");
  pAdvertising = BLEDevice::getAdvertising();
  setBeacon();

  pAdvertising->start();
  Serial.println("Publicidad iniciada...");
  delay(100);
  Serial.printf("en modo de bajo consumo\n");
}

void loop() {
  delay(1000);
}
```

### Exhibición simple de iBeacon

Esta demostración muestra cómo usar el Wio Terminal como iBeacon en una ocasión específica. Por ejemplo, el Wio Terminal puede anunciar información de puerta de entrada para guiar a las personas. En la imagen inferior, hay "puerta-1", "puerta-2", etc., y dentro de cada puerta hay un producto con su respectiva descripción. Se puede instalar un Wio Terminal en cada puerta para anunciar esta información y mostrarla en pantalla.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_demo_pic.png"/></div>

Al abrir la app nRF Connect, veremos el dispositivo iBeacon "Wio" en la lista. Al hacer clic, se muestra su UUID, RSSI y los datos del fabricante.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/ibecon_formatttttt.png"/></div>

Al hacer clic en los datos del fabricante, se mostrarán 3 opciones: Manufacturer data (Bluetooth Core 4.1), Manufacturer data y Text (UTF-8). Si seleccionamos **Text (UTF-8)**, los datos del fabricante se traducirán a texto legible.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/ibeacon_data_format.png"/></div>

El texto en formato UTF-8 mostrará la información de localización: "A" en la puerta-1, "B" en la puerta-2, etc., permitiendo que las personas sepan dónde está cada cosa.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_device_info.png"/></div>

Después de que las personas ingresan a la puerta, podrán ver más detalles sobre "A" o "B", como su historia u otra información según el uso específico.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_product_new.png"/></div>

## Código

```cpp
#include "sys/time.h"
#include "BLEDevice.h"
#include "BLEBeacon.h"

#include <TFT_eSPI.h> // Librería específica para pantalla
#include <SPI.h>
TFT_eSPI tft = TFT_eSPI();             // Instanciar pantalla
TFT_eSprite spr = TFT_eSprite(&tft);   // Sprite
LIS3DHTR<TwoWire> lis;
BLEAdvertising *pAdvertising;

#define BEACON_UUID "8ec76ea3-6668-48da-9866-75be8bc86f4d" // UUID de 128 bits
#define SERVICE_UUID 0x1801
#define SERVICE_UUID1 0x1802
#define SERVICE_UUID2 0x1803

void setBeacon() {
  BLEBeacon oBeacon = BLEBeacon();
  oBeacon.setManufacturerId(0x4C00); // ID de Apple falso
  oBeacon.setProximityUUID(BLEUUID(BEACON_UUID));
  oBeacon.setMajor(0x007B);
  oBeacon.setMinor(0x01C8);

  BLEAdvertisementData oAdvertisementData = BLEAdvertisementData();
  BLEAdvertisementData oScanResponseData = BLEAdvertisementData();

  oAdvertisementData.setFlags(0x04); // BR_EDR_NOT_SUPPORTED
  std::string strServiceData = "";
  strServiceData += (char)26;
  strServiceData += (char)0xFF;
  strServiceData += oBeacon.getData();
  oAdvertisementData.addData(strServiceData);

  oScanResponseData.setName("wio");
  oScanResponseData.setManufacturerData("oxA-door-1"); // Información de iBeacon (MAX: 31 bytes)
  oScanResponseData.setManufacturerData("oxB-door-2");

  pAdvertising->setAdvertisementData(oAdvertisementData);
  pAdvertising->setScanResponseData(oScanResponseData);
  pAdvertising->setAdvertisementType(GAP_ADTYPE_ADV_SCAN_IND);

  spr.fillSprite(TFT_BLACK);
  spr.createSprite(240, 160);
  spr.fillSprite(TFT_BLACK);
  spr.setTextColor(TFT_WHITE, TFT_BLACK);
  spr.setFreeFont(&FreeSansBoldOblique12pt7b);

  spr.drawString("¿Qué es A?", 20 , 10);
  spr.drawString("Historia de A: .....", 20 , 35);

  spr.drawString("¿Qué es B?", 20 , 110);
  spr.drawString("Historia de B: .....", 20 , 135);

  spr.pushSprite(0, 0);
}

void setup() {
  tft.begin();
  tft.init();
  tft.setRotation(3);
  tft.fillScreen(TFT_BLACK);
  Serial.begin(115200);

  BLEDevice::init("");
  lis.begin(Wire1);
  if (!lis) {
    Serial.println("ERROR");
    while (1);
  }
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ);
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G);

  pAdvertising = BLEDevice::getAdvertising();

  Serial.println("Publicidad iniciada...");
  delay(100);
}

void loop() {
  setBeacon();
  pAdvertising->start();
  delay(5000);
  pAdvertising->stop();
  delay(1000);
}
```