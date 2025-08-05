---
title: Fuentes
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-LCD-Fonts/
slug: /es/Wio-Terminal-LCD-Fonts
last_update:
  date: 07/27/2025
  author: Guillermo
---
# Uso de diferentes fuentes

Este repositorio describe cómo usar diferentes fuentes gratuitas (GNU FreeFonts) incluidas en la librería. ¡Puedes seguir esta guía para elegir tu fuente favorita y mostrarla en el Wio Terminal!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WechatIMG2309.jpeg.jpg" /></div>

## Fuentes disponibles

Hay tres fuentes principales que se pueden usar en esta librería: `Serif`, `Sans` y `Mono`. Cada fuente está disponible con algunos estilos (**bold**, *italic*, oblique) y tamaños de fuente de 9pt, 12pt, 18pt y 24pt.

## Uso de fuentes en Wio Terminal

Para usar estas fuentes fácilmente, se recomienda copiar el archivo `Free_Fonts.h` del [repositorio Seeed_Arduino_LCD](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/#installing-the-tft-lcd-library-separately). Suponemos que ya descargaste el repositorio y la ruta es `~/Arduino/libraries/Seeed_LCD_master/examples/320 x 240/All_Free_Fonts_Demo`, puedes adjuntar este archivo header a la ubicación de tu sketch. Esto facilitará la referencia a las fuentes.

Para ahorrar escritura, cada fuente puede referenciarse en el sketch de tres maneras, ya sea con:

1. El nombre del archivo de la fuente con el `&` al frente, por ejemplo: `&FreeSansBoldOblique24pt7b`.

#### Ejemplo Método 1

```cpp
tft.setFreeFont(&FreeSansBoldOblique24pt7b);
```

2. FF# donde # es un número determinado consultando la lista en el archivo `Free_Fonts.h`.

#### Ejemplo Método 2

```cpp
tft.setFreeFont(FF32);
```

3. Una abreviatura del nombre del archivo. Mira la lista abajo para ver las abreviaturas usadas.

#### Ejemplo Método 3

```cpp
tft.setFreeFont(FSSBO24)
```

Donde las letras significan:

* F = Fuente Free
* M = Mono
* SS = Sans Serif (doble S para distinguir de Serif)
* S = Serif
* B = Bold
* O = Oblique (letra O, no cero)
* I = Italic
* No = tamaño en puntos, ya sea 9, 12, 18 o 24

## Código de ejemplo usando diferentes fuentes

```cpp
#include"TFT_eSPI.h"
#include"Free_Fonts.h" // incluye el archivo header
TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(3);
  tft.fillScreen(TFT_BLACK); // fondo negro
  
  tft.setFreeFont(&FreeSansBoldOblique12pt7b); // selecciona Free, Sans, Bold, Oblique, 12pt.
  tft.drawString("Sans Serif 12pt",70,80);// imprime texto en (70,80)

  tft.setFreeFont(FF10); // selecciona Free, Mono, Oblique, 12pt.
  tft.drawString("Mono 12pt",70,110);// imprime texto en (70,110)

  tft.setFreeFont(FS12); // selecciona Free, Serif, 12pt.
  tft.drawString("Serif 12pt",70,140);// imprime texto en (70,140)
  
}
void loop() {}
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
