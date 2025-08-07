---
description: Tapping
title: Detección de Toque
keywords:
- Wio_terminal IMU
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-IMU-Tapping
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Demo de detección de movimiento de toque en Wio Terminal

Este repositorio demuestra cómo el Wio Terminal usa el acelerómetro incorporado para detectar movimientos de toque de un solo clic o doble clic.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-10%2010-33-58.2019-12-10%2010_35_11.gif"/></div>

## Inicialización del acelerómetro de 3 ejes

Para inicializar el acelerómetro en el Wio Terminal, por favor visita [Comenzando con IMU](https://wiki.seeedstudio.com/Wio-Terminal-IMU-Basic/) para más información.

## Configuraciones de sensibilidad para el toque

Para ajustar la sensibilidad del toque, modifica el valor de THRESHOLD según el rango de escala del IMU:

| Rango de Escala | 2g    | 4g    | 8g    | 16g  |
|-----------------|-------|-------|-------|------|
| THRESHOLD       | 40-80 | 20-40 | 10-20 | 5-10 |

## Toque simple o doble toque

Para usar la función `click`, simplemente llámala así, donde el primer parámetro determina detectar toque simple o doble (1 o 2), y el segundo parámetro es el valor del umbral.

```cpp
void setup() {
    ...
    lis.click(1, THRESHOLD);
    // Señal de interrupción para activar cuando se detecta un toque
    attachInterrupt(digitalPinToInterrupt(GYROSCOPE_INT1), count, RISING);
}
```

**Nota:** `GYROSCOPE_INT1` es el Pin de interrupción del acelerómetro 1.

## Código completo

```cpp
#include"LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;

// Ajusta este valor de umbral para la sensibilidad del toque
#define THRESHOLD 40
uint8_t cnt = 0;

void count() {
    cnt++;
    Serial.print("Conteo de toques: ");
    Serial.println(cnt);
}

void setup() {
    Serial.begin(115200);
    lis.begin(Wire1);

    if (!lis) {
        Serial.println("ERROR");
        while(1);
    }
    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); // Tasa de salida de datos
    lis.setFullScaleRange(LIS3DHTR_RANGE_2G);      // Rango de escala configurado a 2g

    // 1 para toque simple, 2 para doble toque
    // mientras más pequeño el valor del umbral, más sensible es
    lis.click(1, THRESHOLD);
    // Señal de interrupción para activar cuando se detecta un toque
    attachInterrupt(digitalPinToInterrupt(GYROSCOPE_INT1), count, RISING);
}

void loop() {
}
```
