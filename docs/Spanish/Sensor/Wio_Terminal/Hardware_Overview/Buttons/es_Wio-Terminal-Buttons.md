---
description: Overview
title: Comenzando con los botones configurables
keywords:
- Wio_terminal Configurable_Buttons
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Buttons
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Comenzando con los botones configurables

Este repositorio demuestra cómo usar los botones configurables en el Wio Terminal. Hay tres botones que pueden usarse en el Wio Terminal.

## Código de ejemplo

**Nota:** **`WIO_KEY_A`**, **`WIO_KEY_B`** y **`WIO_KEY_C`** están definidos para los botones configurables del Wio Terminal.

:::note
También puedes usar `BUTTON_1`, `BUTTON_2` y `BUTTON_3` para usar los botones configurables.
:::

```cpp
void setup() {
  Serial.begin(115200);
  pinMode(WIO_KEY_A, INPUT_PULLUP);
  pinMode(WIO_KEY_B, INPUT_PULLUP);
  pinMode(WIO_KEY_C, INPUT_PULLUP);
}

void loop() {
  // coloca aquí tu código principal para ejecutarlo repetidamente:
   if (digitalRead(WIO_KEY_A) == LOW) {
    Serial.println("Tecla A presionada");
   }
   else if (digitalRead(WIO_KEY_B) == LOW) {
    Serial.println("Tecla B presionada");
   }
   else if (digitalRead(WIO_KEY_C) == LOW) {
    Serial.println("Tecla C presionada");
   }
   delay(200);
}
```
