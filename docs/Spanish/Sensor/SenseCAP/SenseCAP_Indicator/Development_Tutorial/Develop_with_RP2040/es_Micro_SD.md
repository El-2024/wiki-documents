---
description: MicroSD
title: MicroSD
keywords:
- Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Indicator_RP2040_MicroSD
last_update:
  date: 07/22/2025
  author: Guillermo
---
# **MicroSD**

El RP2040 tiene un conjunto de pines GPIO que se pueden usar para conectar un módulo externo de tarjeta MicroSD.

Para utilizar una tarjeta MicroSD con el RP2040, se usa el protocolo SPI (Interfaz Periférica Serial) para conectar el módulo SD a los pines GPIO del microcontrolador. Esto implica conectar los siguientes pines del RP2040 a los pines correspondientes del módulo MicroSD:

- SPI SCK (por ejemplo GPIO10) → SD_SCK  
- SPI TX (por ejemplo GPIO11) → SD_MOSI  
- SPI RX (por ejemplo GPIO12) → SD_MISO  
- GPIO único (por ejemplo GPIO13) → pin CS (chip select) del módulo SD

```cpp
// Inicializar la interfaz SPI para la tarjeta SD
const int chipSelect = 13;
SPI1.setSCK(10);
SPI1.setTX(11);
SPI1.setRX(12);
```

Una vez establecida la conexión física, puedes usar una librería como la librería SD de Arduino para leer y escribir datos en la tarjeta MicroSD. Esta proporciona funciones para inicializar la tarjeta, abrir y cerrar archivos, leer y escribir datos, entre otras operaciones del sistema de archivos.

**Nota:** El rendimiento de la interfaz MicroSD en el RP2040 dependerá de factores como la velocidad de la tarjeta, la calidad del cableado y la eficiencia del software. Se admite una capacidad máxima de hasta 32 GB.

## **Código de Ejemplo**

Este ejemplo lee datos de CO₂ y los guarda en la tarjeta SD.

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <SPI.h>
#include <SD.h>
#include <SensirionI2CScd4x.h>


SensirionI2CScd4x scd4x;
//Initialize a string to store data for writing to the SD card
String SDDataString = "";

void sensor_power_on(void) {
  pinMode(18, OUTPUT);
  digitalWrite(18, HIGH);
}
// Function to power on the sensor
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
  // Add data to the SD data string
  SDDataString += "scd4x,";
  if (error) {
    SDDataString += "-,-,-,";
  } else {
    SDDataString += String(co2);
    SDDataString += ',';
    SDDataString += String(temperature);
    SDDataString += ',';
    SDDataString += String(humidity);
    SDDataString += ',';
  }
}



int cnt = 0;
void setup() {
  Serial.begin(115200);

  sensor_power_on();
  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();
 // Initialize the SPI interface for the SD card
  const int chipSelect = 13;
  SPI1.setSCK(10);
  SPI1.setTX(11);
  SPI1.setRX(12);
// Check if the SD card is initialized
  if (!SD.begin(chipSelect, 1000000, SPI1)) {
    Serial.println("Card failed, or not present");
  } else {
    Serial.println("card initialized.");
  }

  sensor_scd4x_init();
}

void loop() {

  delay(5000);
  // Clear the SD data string and print a message to the serial monitor
  SDDataString = "";
  Serial.printf("\r\n\r\n--------- start measure %d-------\r\n", cnt);

  SDDataString += String(cnt);
  SDDataString += ',';

  cnt++;
  sensor_scd4x_get();
  // Open the datalog.csv file for writing
  File dataFile = SD.open("datalog.csv", FILE_WRITE);
  // if the file is available, write to it:
  if (dataFile) {
    dataFile.println(SDDataString);
    dataFile.close();
    // print to the serial port too:
    Serial.print("sd write: ");
    Serial.println(SDDataString);
  } else {
    Serial.println("error opening datalog.txt");
  }

}


```

# **Soporte Técnico**

¡No te preocupes, te tenemos cubierto! Por favor visita nuestro [Canal Oficial de Discord de Seeed](https://discord.com/invite/QqMgVwHT3X) para hacer tus preguntas.

Si tienes un pedido grande o necesitas una personalización, por favor contacta a iot@seeed.cc
