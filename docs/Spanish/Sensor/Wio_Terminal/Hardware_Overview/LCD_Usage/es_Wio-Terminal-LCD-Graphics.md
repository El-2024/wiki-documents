---
title: Gráficos 
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-LCD-Graphics/
slug: /es/Wio-Terminal-LCD-Graphics
last_update:
  date: 07/27/2025
  author: Guillermo
---
# Funciones gráficas básicas

Este repositorio describe algunas de las funciones gráficas básicas de la librería TFT LCD en Wio Terminal. ¡Puedes usar estas funciones para crear tus propias funciones de dibujo!

## Dibujar píxeles

Para dibujar un píxel en la pantalla LCD:

```cpp
drawPixel(int32_t x, int32_t y, uint32_t color);
```

donde `(x, y)` son las coordenadas del píxel y `color` es el color del píxel.

### Código de ejemplo

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); // Fondo rojo
    tft.drawPixel(4,7,TFT_BLACK); // dibuja un píxel negro en (4,7)
}

void loop() {}
```

## Dibujar líneas

Para dibujar una línea entre dos puntos en la pantalla LCD:

```cpp
drawLine(int32_t x0, int32_t y0, int32_t x1, int32_t y1, uint32_t color);
```

donde la línea comienza desde `(x0, y0)` hasta `(x1, y1)` con el color `color`.

### Código de ejemplo

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); // Fondo rojo
    tft.drawLine(0,0,160,120,TFT_BLACK); // dibuja una línea negra desde (0,0) hasta (160,120)
}

void loop() {}
```

Para dibujar líneas horizontales o verticales, esta librería también provee funciones optimizadas:

### Dibujar líneas horizontales y verticales

```cpp
drawFastHLine(int32_t x, int32_t y, int32_t w, uint32_t color); // Línea horizontal
drawFastVLine(int32_t x, int32_t y, int32_t h, uint32_t color); // Línea vertical
```

donde `(x, y)` es la coordenada de inicio, `w` es el ancho para la línea horizontal, `h` es la altura para la línea vertical y `color` es el color.

### Código de ejemplo

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); // Fondo rojo
    tft.drawFastHLine(0,120,320,TFT_BLACK); // línea horizontal negra desde (0,120)
    tft.drawFastVLine(160,0,240,TFT_BLACK); // línea vertical negra desde (160,0)
}

void loop() {}
```

## Dibujar rectángulos

Para dibujar o rellenar un rectángulo en la pantalla LCD:

```cpp
drawRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color);
fillRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color);
```

donde `(x, y)` es la coordenada de inicio, `w` es el ancho, `h` la altura y `color` el color.

### Código de ejemplo

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); // Fondo rojo
    tft.drawRect(110,70,100,100,TFT_BLACK); // Rectángulo negro 100x100 en (110,70)
}

void loop() {}
```

## Dibujar círculos

Para dibujar o rellenar un círculo en la pantalla LCD:

```cpp
drawCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color);
fillCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color);
```

donde `(x0, y0)` es el origen, `r` el radio y `color` el color.

### Código de ejemplo

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); // Fondo rojo
    tft.drawCircle(160,120,50,TFT_BLACK); // Círculo negro con centro en (160,120)
}

void loop() {}
```

Esta librería también provee funciones para dibujar o rellenar una elipse:

```cpp
drawEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color);
fillEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color);
```

donde `(x0, y0)` es el origen, `rx` el radio horizontal, `ry` el radio vertical y `color` el color.

### Código de ejemplo

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); // Fondo rojo
    tft.drawEllipse(160,120,50,100,TFT_BLACK); 
    // Elipse negra con centro en (160,120), radio horizontal 50 y vertical 100
}

void loop() {}
```

## Dibujando Triángulos

Para dibujar o rellenar un triángulo en la pantalla LCD:

```cpp
drawTriangle(int32_t x0, int32_t y0, int32_t x1, int32_t y1, int32_t x2, int32_t y2, uint32_t color);
fillTriangle(int32_t x0, int32_t y0, int32_t x1, int32_t y1, int32_t x2, int32_t y2, uint32_t color);
```

donde `(x0, y0)`, `(x1, y1)`, `(x2, y2)` son las coordenadas de los tres vértices del triángulo, y `color` es el color.

### Código de ejemplo

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); // Fondo rojo
    tft.drawTriangle(160,70,60,170,260,170,TFT_BLACK);
    // Triángulo con vértices en (160,70), (60,170) y (260,170)
}

void loop() {}
```

## Dibujando Rectángulos Redondeados

Para dibujar o rellenar rectángulos con esquinas redondeadas:

```cpp
drawRoundRect(int32_t x, int32_t y, int32_t w, int32_t h, int32_t r, uint32_t color);
fillRoundRect(int32_t x, int32_t y, int32_t w, int32_t h, int32_t r, uint32_t color);
```

donde `(x, y)` es la coordenada de inicio, `w` y `h` son ancho y alto, `r` es el radio de las esquinas, y `color` es el color.

### Código de ejemplo

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); // Fondo rojo
    tft.drawRoundRect(110,70,100,100,10,TFT_BLACK);
    // Rectángulo negro 100x100 con esquinas redondeadas, inicio en (110,70)
}

void loop() {}
```

## Dibujando Caracteres

Para dibujar un solo carácter en la pantalla LCD:

```cpp
drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size);
```

donde `(x, y)` es la posición inicial, `c` el carácter, `color` el color del texto, `bg` el color de fondo y `size` la escala del carácter.

### Código de ejemplo

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); // Fondo rojo
    tft.drawChar(140,120,'A',TFT_BLACK, TFT_RED,2);
    tft.drawChar(155,120,'B',TFT_BLACK, TFT_RED,2);
    tft.drawChar(170,120,'C',TFT_BLACK, TFT_RED,2);
}

void loop() {}
```

## Dibujando Cadenas de Texto

Para dibujar cadenas de texto en la pantalla:

```cpp
drawString(const String& string, int32_t poX, int32_t poY);
```

donde `string` es el texto y `(poX, poY)` la posición inicial.

### Código de ejemplo

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(3);

  tft.fillScreen(TFT_RED); // Fondo rojo

  tft.setTextColor(TFT_BLACK);          // Color de texto negro
  tft.setTextSize(1);                   // Tamaño de texto 1
  tft.drawString("Hello world!", 0, 0); // Texto en (0,0)
  tft.setTextSize(2);
  tft.drawString("Hello world!", 0, 10);
}

void loop() {}
```

## Rellenar toda la pantalla

Para colorear toda la pantalla:

```cpp
fillScreen(uint32_t color);
```

### Código de ejemplo

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
  tft.begin();
  tft.setRotation(3);
}

void loop() {
    // Ciclo de colores rojo-verde-azul
    tft.fillScreen(TFT_RED);
    delay(1000);
    tft.fillScreen(TFT_GREEN);
    delay(1000);
    tft.fillScreen(TFT_BLUE);
    delay(1000);
}
```

## Soporte Técnico y Discusión

Gracias por elegir nuestros productos. Estamos aquí para ayudarte a que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
