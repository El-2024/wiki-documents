---
title: Análogo
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-IO-Analog/
slug: /es/Wio-Terminal-IO-Analog
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Uso del Puerto Analógico Grove en Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-12%2011-36-22.2019-12-12%2011_37_02.gif" /></div>

Este repositorio demuestra cómo usar los pines analógicos como entradas en Wio Terminal. Para usar los pines analógicos en Wio Terminal, debes utilizar los pines RPI.

## Pines Analógicos RPI

La distribución de pines de Raspberry Pi está definida como:

- `RPI_A0` -> `RPI_A8`

## Configuraciones del Puerto Grove

Para usar el **Puerto configurable A/D Grove** como puerto analógico, simplemente defínelo de la siguiente forma:

```cpp
void setup() {
    pinMode(A0, INPUT);
}
```

¡Ahora conecta tu sensor Grove al pin físico!

## Código de Ejemplo

En este ejemplo se usa un sensor de Sonoridad Grove para demostrar:

```cpp
void setup() {
    Serial.begin(115200);
    pinMode(A0, INPUT);
}
void loop() {
    int loudness = analogRead(A0);
    Serial.print("Sonoridad: ");
    Serial.println(loudness);
    delay(50);
}
```

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
