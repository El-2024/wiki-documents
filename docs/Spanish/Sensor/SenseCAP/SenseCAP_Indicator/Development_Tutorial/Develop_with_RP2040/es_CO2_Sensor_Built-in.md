---
description: CO2 Sensor Built-in
title: CO2 Sensor Built-in
keywords:
- SenseCAP Indicator RP2040 Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Indicator_RP2040_CO2
last_update:
  date: 07/22/2025
  author: Guillermo
---
# **Sensor de CO₂ (Integrado)**

El SenseCAP Indicator (versión D1S/D1Pro) incorpora un sensor SCD41, capaz de detectar concentraciones de CO₂ en un rango de 0 a 40,000 ppm.  
El contenido de CO₂ es un criterio importante para evaluar la calidad del aire y garantizar que sea seguro y saludable para todas las personas.

**Niveles de CO₂ en el aire:**
* Nivel normal al aire libre: 350 - 450 ppm  
* Niveles aceptables: < 600 ppm  
* Sensación de aire viciado y olores: 600 - 1000 ppm  
* Estándares ASHRAE y OSHA: 1000 ppm  
* Somnolencia general: 1000 - 2500 ppm  
* Posibles efectos adversos a la salud: 2500 - 5000 ppm  

## **Código de Ejemplo**

Este ejemplo lee los valores del sensor SCD41 integrado a través de la interfaz I2C y los muestra en el monitor serial.

Basado en las siguientes bibliotecas:  
- [Librería principal de Sensirion para Arduino](https://github.com/Sensirion/arduino-core/)  
- [Librería del sensor SCD41 para I2C](https://github.com/Sensirion/arduino-i2c-scd4x)  

**Nota:** Al usar el sensor integrado, es necesario habilitar su alimentación.

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <SPI.h>
#include <SD.h>
#include <SensirionI2CScd4x.h>


SensirionI2CScd4x scd4x;
String SDDataString = "";

//The built-in sensor needs to be powered on
void sensor_power_on(void) {
  pinMode(18, OUTPUT);
  digitalWrite(18, HIGH);
}

void sensor_scd4x_init(void) {
  uint16_t error;
  char errorMessage[256];

  scd4x.begin(Wire);

  // stop potentially previously started measurement
  error = scd4x.stopPeriodicMeasurement();
  if (error) {
    Serial.print("Error trying to execute stopPeriodicMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }

  // Start Measurement
  error = scd4x.startPeriodicMeasurement();
  if (error) {
    Serial.print("Error trying to execute startPeriodicMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }
}

void sensor_scd4x_get(void) {
  uint16_t error;
  char errorMessage[256];

  Serial.print("sensor scd4x: ");
  // Read Measurement
  uint16_t co2;
  float temperature;
  float humidity;
  error = scd4x.readMeasurement(co2, temperature, humidity);
  if (error) {
    Serial.print("Error trying to execute readMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else if (co2 == 0) {
    Serial.println("Invalid sample detected, skipping.");
  } else {
    Serial.print("Co2:");
    Serial.print(co2);
    Serial.print("\t");
    Serial.print("Temperature:");
    Serial.print(temperature);
    Serial.print("\t");
    Serial.print("Humidity:");
    Serial.println(humidity);
  }
}

int cnt = 0;
void setup() {
  Serial.begin(115200);

  sensor_power_on();

  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();

  sensor_scd4x_init();
}

void loop() {
  delay(5000);
  sensor_scd4x_get();
}


```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/scd4xsensor.png"/></div>

**Nota:** La temperatura y humedad reportadas por el sensor SCD41 integrado no representan completamente la temperatura y humedad ambiental.

# **Soporte Técnico**

¡No te preocupes, te tenemos cubierto! Por favor visita nuestro [Canal Oficial de Discord de Seeed](https://discord.com/invite/QqMgVwHT3X) para hacer tus preguntas.

Si tienes un pedido grande o necesitas una personalización, por favor contacta a iot@seeed.cc

