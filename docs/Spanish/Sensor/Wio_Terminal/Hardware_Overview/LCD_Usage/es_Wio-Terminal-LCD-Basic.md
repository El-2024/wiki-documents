---
title: Conceptos Básicos de la Pantalla TFT LCD
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio_RP2040_Module_Build-in_Wireless_2.4G/
slug: /es/Wio-Terminal-LCD-Basic
last_update:
  date: 07/27/2025
  author: Guillermo
---
# Conceptos Básicos de la Pantalla TFT LCD

## Sistema de Coordenadas de Píxeles

Una imagen digital 2D está compuesta por filas y columnas de píxeles. Un píxel en la imagen se especifica indicando en qué columna y en qué fila se encuentra. En términos simples, un píxel puede identificarse por un par de enteros que indican el número de columna y el número de fila. Por ejemplo, el píxel con coordenadas (4,7) estaría en la columna 4 y la fila 7.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/grids.jpg" /></div>

Convencionalmente, las columnas se numeran de izquierda a derecha, comenzando desde cero, pero en algunos casos también puede comenzar desde otras esquinas (ajustando la rotación).

## Modelo de color de 8 bits y 16 bits

Los píxeles también se expresan en forma de color, por lo que es útil cubrir algunos modelos de color. Los modelos de color de 8 y 16 bits son adecuados para MCUs, por lo que es un buen inicio. Estos dos modelos constan de 3 componentes de color - **Rojo, Verde y Azul**. Dependiendo del modelo, estos 3 componentes se almacenan en variables de 8 o 16 bits.

### Color de 8 bits

| Bit  | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| ---  | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| **Datos** | Rojo   | Rojo   | Rojo   | Verde   | Verde   | Verde   | Azul   | Azul   |

### Color de 16 bits

| Bit  | 15   | 14   | 13   | 12   | 11   | 10   | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| ---  | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| **Datos** | Rojo   | Rojo   | Rojo   | Rojo   | Rojo   | Verde   | Verde   | Verde   | Verde   | Verde   | Verde   | Azul   | Azul   | Azul   | Azul   | Azul   |

Aquí algunos colores predefinidos básicos (16-bit) incluidos en la librería LCD:

```cpp
#define TFT_BLACK       0x0000      /*   0,   0,   0 */
#define TFT_NAVY        0x000F      /*   0,   0, 128 */
#define TFT_DARKGREEN   0x03E0      /*   0, 128,   0 */
#define TFT_DARKCYAN    0x03EF      /*   0, 128, 128 */
#define TFT_MAROON      0x7800      /* 128,   0,   0 */
#define TFT_PURPLE      0x780F      /* 128,   0, 128 */
#define TFT_OLIVE       0x7BE0      /* 128, 128,   0 */
#define TFT_LIGHTGREY   0xC618      /* 192, 192, 192 */
#define TFT_DARKGREY    0x7BEF      /* 128, 128, 128 */
#define TFT_BLUE        0x001F      /*   0,   0, 255 */
#define TFT_GREEN       0x07E0      /*   0, 255,   0 */
#define TFT_CYAN        0x07FF      /*   0, 255, 255 */
#define TFT_RED         0xF800      /* 255,   0,   0 */
#define TFT_MAGENTA     0xF81F      /* 255,   0, 255 */
#define TFT_YELLOW      0xFFE0      /* 255, 255,   0 */
#define TFT_WHITE       0xFFFF      /* 255, 255, 255 */
#define TFT_ORANGE      0xFDA0      /* 255, 180,   0 */
#define TFT_GREENYELLOW 0xB7E0      /* 180, 255,   0 */
```

## Inicialización de la Pantalla TFT LCD

Para inicializar la pantalla TFT LCD en Wio Terminal:

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
  ...
    tft.begin();
    tft.setRotation(r);
    digitalWrite(LCD_BACKLIGHT, HIGH); // enciende la luz de fondo
  ...
}
```

donde `r` es la rotación de la pantalla TFT LCD (de 0 a 3), indicando desde qué esquina empieza.

### Código de ejemplo

Este ejemplo inicializa la pantalla TFT LCD en Wio Terminal y llena la pantalla con color rojo.

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;

void setup() {
    tft.begin();
    tft.setRotation(3);

    tft.fillScreen(TFT_RED); // llena toda la pantalla con color rojo
}

void loop() {

}
```

## Apagar la luz de fondo de la pantalla LCD

Para apagar la luz de fondo LCD de Wio Terminal, simplemente define el pin de control de luz de fondo LCD `72Ul` y ponlo en `HIGH` para encender y en `LOW` para apagar:

```cpp
#include"TFT_eSPI.h"
TFT_eSPI tft;
#define LCD_BACKLIGHT (72Ul) // Pin de control del LCD

void setup() {
  // tu código de setup para ejecutar una vez:
  
    tft.begin();
    tft.setRotation(3);
    tft.fillScreen(TFT_RED);

    delay(2000);
    // Apagar la luz de fondo LCD
    digitalWrite(LCD_BACKLIGHT, LOW);
    delay(2000);
    // Encender la luz de fondo LCD
    digitalWrite(LCD_BACKLIGHT, HIGH);
}

void loop() {
  // tu código principal para ejecutar repetidamente:

}
```

## Control de brillo de la luz de fondo LCD

Este ejemplo fue escrito por [**Kenta IDA**](https://github.com/ciniml) y todos los créditos son para Kenta IDA.

**PASO 1.** **Descarga el [repositorio](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook) aquí.**

* En la ubicación `examples/WioTerminal_BackLight`.

**PASO 2.** **Sube el código.**

Sube el `lcd_backlight_control.ino` a Wio Terminal y verás cambiar el brillo en la pantalla LCD.

## Soporte Técnico y Discusión de Producto

Si tienes algún problema técnico, envía el problema a nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>