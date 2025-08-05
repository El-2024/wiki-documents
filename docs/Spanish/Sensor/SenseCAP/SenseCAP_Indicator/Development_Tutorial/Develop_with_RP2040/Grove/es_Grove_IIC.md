---
description: Grove IIC
title: Grove IIC
keywords:
- Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Indicator_RP2040_Grove_IIC
last_update:
  date: 07/22/2025
  author: Guillermo
---
# **Descripción General**

El SenseCAP Indicator cuenta con dos interfaces Grove para conectar módulos Grove: una es el puerto I2C por defecto y la otra es un pin configurable Digital/Analógico, que también puede usarse para salidas PWM. Ambos puertos Grove pueden utilizarse como digitales, lo que brinda más posibilidades a los desarrolladores.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/grove.png"/></div>

Este repositorio presenta cómo utilizar los puertos Grove en el SenseCAP Indicator. Esto te permite disfrutar de la funcionalidad plug-and-play del [Ecosistema Grove](https://www.seeedstudio.com/category/Grove-c-1003.html), así como utilizar los GPIO compatibles con RP2040.

# **Grove (IIC)**

Para ampliar las aplicaciones, puedes usar la interfaz IIC para conectar más sensores.  
A diferencia de los sensores integrados, solo necesitas definir las conexiones de los pines SCL y SDA.

## **Código de Ejemplo**:

Este código de ejemplo muestra cómo conectar un [Sensor Grove de Temperatura y Humedad AHT20](/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor):

[Repositorio de la librería del sensor AHT20](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20/)

```cpp
#include <Arduino.h>
#include <Wire.h>
#include "AHT20.h"

AHT20 AHT;

void sensor_aht_init(void) {
  AHT.begin();
}

void sensor_aht_get(void) {
  float humi, temp;
  int ret = AHT.getSensor(&humi, &temp);
  if (ret)  // GET DATA OK
  {
    Serial.print("humidity: ");
    Serial.print(humi * 100);
    Serial.print("  temerature: ");
    Serial.println(temp);
  } else  // GET DATA FAIL
  {
    Serial.println("GET DATA FROM AHT20 FAIL");
  }
}

void setup() {
  Serial.begin(115200);

  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();

  sensor_aht_init();
}

void loop() {
  sensor_aht_get();
  delay(5000);
}
```






