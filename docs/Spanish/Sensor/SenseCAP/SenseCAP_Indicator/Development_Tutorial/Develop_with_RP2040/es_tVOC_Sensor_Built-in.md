---
description: tVOC Sensor Built-in
title: tVOC Sensor Built-in
keywords:
- Indicator Development Tutorial RP2040
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Indicator_RP2040_tVOC
last_update:
  date: 07/22/2025
  author: Guillermo
---
# **Sensor tVOC (Integrado)**

El sensor integrado **SGP40** en el SenseCAP Indicator es un sensor de TVOC (Compuestos Orgánicos Volátiles Totales) de alta calidad y fiabilidad, ideal para aplicaciones de monitoreo de calidad del aire en interiores y exteriores. Tiene un rango de medición de **1–500 puntos del índice VOC**.

Los TVOC son compuestos químicos orgánicos emitidos como gases desde materiales de construcción, productos de limpieza, artículos de cuidado personal, entre otros.

## **Código de Ejemplo**

Este ejemplo lee el valor del sensor SGP40 a través de la interfaz I²C y lo imprime en el monitor serial.

Basado en las siguientes bibliotecas:

- [Sensirion Arduino Core](https://github.com/Sensirion/arduino-core/)
- [Librería para sensor SGP40](https://github.com/Sensirion/arduino-i2c-sgp40)
- [Algoritmo de índice de gas VOC](https://github.com/Sensirion/arduino-gas-index-algorithm)

**Nota:** Es necesario activar la alimentación del sensor antes de usarlo.

```cpp
#include <Arduino.h>
#include <SensirionI2CSgp40.h>
#include <VOCGasIndexAlgorithm.h>
#include <Wire.h>

SensirionI2CSgp40 sgp40;
VOCGasIndexAlgorithm voc_algorithm;


//The built-in sensor needs to be powered on
void sensor_power_on(void) {
  pinMode(18, OUTPUT);
  digitalWrite(18, HIGH);
}

/************************ sgp40 tvoc  ****************************/

void sensor_sgp40_init(void) {
  uint16_t error;
  char errorMessage[256];

  sgp40.begin(Wire);

  uint16_t serialNumber[3];
  uint8_t serialNumberSize = 3;

  error = sgp40.getSerialNumber(serialNumber, serialNumberSize);

  if (error) {
    Serial.print("Error trying to execute getSerialNumber(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else {
    Serial.print("SerialNumber:");
    Serial.print("0x");
    for (size_t i = 0; i < serialNumberSize; i++) {
      uint16_t value = serialNumber[i];
      Serial.print(value < 4096 ? "0" : "");
      Serial.print(value < 256 ? "0" : "");
      Serial.print(value < 16 ? "0" : "");
      Serial.print(value, HEX);
    }
    Serial.println();
  }

  uint16_t testResult;
  error = sgp40.executeSelfTest(testResult);
  if (error) {
    Serial.print("Error trying to execute executeSelfTest(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else if (testResult != 0xD400) {
    Serial.print("executeSelfTest failed with error: ");
    Serial.println(testResult);
  }
}

void sensor_sgp40_get(void) {
  uint16_t error;
  char errorMessage[256];
  uint16_t defaultRh = 0x8000;
  uint16_t defaultT = 0x6666;
  uint16_t srawVoc = 0;

  Serial.print("sensor sgp40: ");

  error = sgp40.measureRawSignal(defaultRh, defaultT, srawVoc);
  if (error) {
    Serial.print("Error trying to execute measureRawSignal(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else {
    Serial.print("SRAW_VOC:");
    Serial.print(srawVoc);

    int32_t voc_index = voc_algorithm.process(srawVoc);
    Serial.print(", VOC Index: ");
    Serial.println(voc_index);
  }
}

/************************ setup & loop ****************************/

void setup() {
  Serial.begin(115200);

  sensor_power_on();

  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();

  sensor_sgp40_init();
}

void loop() {
  sensor_sgp40_get();
  delay(5000);
}

```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/tvoc.png"/></div>

"SRAW_VOC" es la señal cruda medida por el sensor, proporcional a la concentración de VOCs en el aire.

"VOC Index" es un valor interpretado del nivel de VOC en una escala de 0 a 500, donde un número mayor indica una mayor concentración de contaminantes.

# **Soporte Técnico**

¡No te preocupes, te tenemos cubierto! Por favor visita nuestro [Canal Oficial de Discord de Seeed](https://discord.com/invite/QqMgVwHT3X) para hacer tus preguntas.

Si tienes un pedido grande o necesitas una personalización, por favor contacta a iot@seeed.cc