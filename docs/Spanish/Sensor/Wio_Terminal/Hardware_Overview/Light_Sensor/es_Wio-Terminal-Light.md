---
description: Overview
title: Primeros Pasos con el Sensor de Luz
keywords:
- Wio_terminal Light_Sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Light
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Primeros Pasos con el Sensor de Luz

Este repositorio muestra cómo usar el sensor de luz integrado como un componente en el Wio Terminal. El sensor de luz utiliza una interfaz analógica y puedes leer fácilmente los valores del entorno leyendo su pin.

## Código de Ejemplo

**Nota:** **`WIO_LIGHT`** es el pin del sensor de luz integrado. El sensor de luz está conectado al pin **A13**.

```cpp
void setup() {
  pinMode(WIO_LIGHT, INPUT);
  Serial.begin(115200);

}

void loop() {
   int light = analogRead(WIO_LIGHT);
   Serial.print("Valor de luz: ");
   Serial.println(light);
   delay(200);
}
```

**Nota:** El sensor de luz se encuentra en la parte trasera del Wio Terminal, justo encima de la ranura para tarjeta microSD.
