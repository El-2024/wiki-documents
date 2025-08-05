---
description: Overview
title: Comenzando con el interruptor de 5 vías
keywords:
- Wio_terminal five_Way_Switch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Switch
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Comenzando con el interruptor de 5 vías

Este repositorio demuestra cómo usar el interruptor de 5 vías en el Wio Terminal.

## Código de ejemplo

**Nota:** **`WIO_5S_UP`**, **`WIO_5S_DOWN`**, **`WIO_5S_LEFT`**, **`WIO_5S_RIGHT`** y **`WIO_5S_PRESS`** están definidos para el interruptor de 5 vías del Wio Terminal.

```cpp
void setup() {
  Serial.begin(115200);
  pinMode(WIO_5S_UP, INPUT_PULLUP);
  pinMode(WIO_5S_DOWN, INPUT_PULLUP);
  pinMode(WIO_5S_LEFT, INPUT_PULLUP);
  pinMode(WIO_5S_RIGHT, INPUT_PULLUP);
  pinMode(WIO_5S_PRESS, INPUT_PULLUP);
}

void loop() {
  // coloca aquí tu código principal para ejecutarlo repetidamente:
   if (digitalRead(WIO_5S_UP) == LOW) {
    Serial.println("5 Way Arriba");
   }
   else if (digitalRead(WIO_5S_DOWN) == LOW) {
    Serial.println("5 Way Abajo");
   }
   else if (digitalRead(WIO_5S_LEFT) == LOW) {
    Serial.println("5 Way Izquierda");
   }
   else if (digitalRead(WIO_5S_RIGHT) == LOW) {
    Serial.println("5 Way Derecha");
   }
   else if (digitalRead(WIO_5S_PRESS) == LOW) {
    Serial.println("5 Way Presionado");
   }
   delay(200);
}
```
