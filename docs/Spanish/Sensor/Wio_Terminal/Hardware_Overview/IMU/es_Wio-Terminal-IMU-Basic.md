---
description: Getting Started
title: Comenzando con el acelerómetro
keywords:
- Wio_terminal IMU
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-IMU-Basic
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Comenzando con el acelerómetro

Este repositorio demuestra cómo leer valores del acelerómetro en el Wio Terminal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-09%2015-42-57.2019-12-09%2015_43_28.gif"/></div>

## Inicialización del acelerómetro digital de 3 ejes

Para inicializar el acelerómetro en el Wio Terminal:

- Configurar la tasa de salida de datos: `lis.setOutputDataRate()`, de 1Hz hasta 5kHz.

- Configurar el rango de escala: `lis.setFullScaleRange()`, de 2g hasta 16g.

```cpp
#include"LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;

void setup() {
    ...
    lis.begin(Wire1); 
    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); // Configura la tasa de salida a 25Hz, se puede configurar hasta 5kHz 
    lis.setFullScaleRange(LIS3DHTR_RANGE_2G); // Configura el rango de escala a 2g, opciones: 2, 4, 8, 16g
    ...
}
```

## Lectura de valores del acelerómetro

Para leer los valores del acelerómetro en cada eje del Wio Terminal, simplemente haz lo siguiente:

```cpp
void loop() {
    float x_values, y_values, z_values;
    x_values = lis.getAccelerationX();
    y_values = lis.getAccelerationY();
    z_values = lis.getAccelerationZ();
    delay(50);  // retraso para evitar la lectura excesiva de datos
    ...
}
```

Nota: Se recomienda usar delay para evitar leer una gran cantidad de datos al mismo tiempo.

### Código de ejemplo

Este ejemplo imprime los valores de los 3 ejes del acelerómetro en el monitor serial.

```cpp
#include"LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;

void setup() {
  Serial.begin(115200);
  lis.begin(Wire1);

  if (!lis) {
    Serial.println("ERROR");
    while(1);
  }
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); // Tasa de salida de datos
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); // Rango de escala configurado a 2g
}

void loop() {
  float x_values, y_values, z_values;
  x_values = lis.getAccelerationX();
  y_values = lis.getAccelerationY();
  z_values = lis.getAccelerationZ();
  
  Serial.print("X: "); Serial.print(x_values);
  Serial.print(" Y: "); Serial.print(y_values);
  Serial.print(" Z: "); Serial.print(z_values);
  Serial.println();
  delay(50);
}
```
