---
description: ArduPy LCD
title: ArduPy LCD
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/ArduPy-LCD
last_update:
  date: 07/27/2025
  author: Guillermo
---

# LCD - Referencia de API para ArduPy

Esta es la referencia de la API LCD para su uso con ArduPy. Actualmente, solo se ha probado con el módulo LCD del Wio Terminal.

Para más información, visita [**ArduPy**](https://github.com/Seeed-Studio/ArduPy). Para comenzar con ArduPy, sigue esta [guía](https://wiki.seeedstudio.com/Wio-Terminal-ArduPy/).

**Ejemplo de uso:**

```py
from machine import LCD

lcd = LCD()                            # Inicializa la LCD y enciende la retroiluminación
lcd.fillScreen(lcd.color.BLACK)        # Llena la pantalla con color negro
lcd.setTextSize(2)                     # Define el tamaño de fuente a 2
lcd.setTextColor(lcd.color.GREEN)      # Establece el color del texto a verde
lcd.drawString("Hello World!", 0, 0)   # Dibuja "Hello World!" en (0, 0)
```

## Constructores

```py
class machine.LCD(self)
```

Construye un nuevo objeto LCD.

## Referencia de Métodos

```py
LCD.setRotation(r)
```

Establece la rotación de la pantalla a `r`. Ej: `LCD.setRotation(1)`

```py
LCD.setTextColor(color)
LCD.setTextColor(fgcolor, bgcolor)
```

Establece el color del texto o usa `fgcolor` y `bgcolor` para texto y fondo. Ej: `LCD.setTextColor(LCD.color.RED)`

```py
LCD.drawCentreString(string, dX, poY, font)
```

Dibuja una cadena centrada en (x, y) con la fuente especificada. Ej: `LCD.drawCentreString("Hola", 0, 0, 1)`

```py
LCD.drawString(string, poX, poY, font)
```

Dibuja una cadena en (x, y) con fuente. Ej: `LCD.drawString("Hola", 160, 120, 2)`

```py
LCD.drawChar(char, poX, poY)
```

Dibuja un carácter ASCII en (x, y). Ej: `LCD.drawChar(65, 160, 120)`

```py
LCD.drawCircle(x0, y0, r, color)
```

Dibuja un círculo en (x, y) con radio `r` y color. Ej: `LCD.drawCircle(160, 120, 10, LCD.color.GREEN)`

```py
LCD.drawCircleHelper(x0, y0, r, cornername, color)
```

Dibuja un cuarto de círculo. Ej: `LCD.drawCircleHelper(160, 120, 100, 1, LCD.color.WHITE)`

```py
LCD.drawEllipse(x, y, rx, ry, color)
```

Dibuja una elipse en (x, y) con radios `rx`, `ry` y color. Ej: `LCD.drawEllipse(160,120,10,5,LCD.color.RED)`

```py
LCD.drawFastHLine(x, y, w, color)
```

Dibuja una línea horizontal desde (x, y) de ancho `w`. Ej: `LCD.drawFastHLine(0, 120, 160, LCD.color.WHITE)`

```py
LCD.drawFastVLine(x, y, h, color)
```

Dibuja una línea vertical desde (x, y) de alto `h`. Ej: `LCD.drawFastVLine(160, 0, 120, LCD.color.WHITE)`

```py
LCD.drawFloat(floatNumber, decimal, x, y, font)
```

Dibuja un número flotante con `decimal` decimales en (x, y). Ej: `LCD.drawFloat(3.1415, 2, 160, 120, 1)`

```py
LCD.drawLine(x, y, x1, y1, color)
```

Dibuja una línea de (x, y) a (x1, y1) con color. Ej: `LCD.drawLine(0, 0, 320, 240, LCD.color.WHITE)`

```py
LCD.drawNumber(number, x, y, font)
```

Dibuja un número entero en (x, y). Ej: `LCD.drawNumber(23, 160, 120, 1)`

```py
LCD.drawPixel(x, y, color)
```

Dibuja un píxel en (x, y). Ej: `LCD.drawPixel(160, 120, LCD.color.RED)`

```py
LCD.drawRect(x, y, w, h, color)
```

Dibuja un rectángulo en (x, y) con ancho `w` y alto `h`. Ej: `LCD.drawRect(0, 0, 160, 120, LCD.color.WHITE)`

```py
LCD.drawRoundRect(x, y, w, h, r, color)
```

Dibuja un rectángulo redondeado con radio `r`. Ej: `LCD.drawRoundRect(0, 0, 160, 120, 10, LCD.color.WHITE)`

```py
LCD.drawTriangle(x0, y0, x1, y1, x2, y2, color)
```

Dibuja un triángulo con vértices dados. Ej: `LCD.drawTriangle(160, 70, 60, 170, 260, 170, LCD.color.WHITE)`

```py
LCD.fillCircle(x0, y0, r, color)
```

Rellena un círculo con color. Ej: `LCD.fillCircle(160, 120, 10, LCD.color.GREEN)`

```py
LCD.fillCircleHelper(x0, y0, r, cornername, color)
```

Rellena un cuarto de círculo. Ej: `LCD.fillCircleHelper(160, 120, 100, 1, LCD.color.WHITE)`

```py
LCD.fillEllipse(x, y, rx, ry, color)
```

Rellena una elipse. Ej: `LCD.fillEllipse(160,120,10,5,LCD.color.RED)`

```py
LCD.fillRect(x, y, w, h, color)
```

Rellena un rectángulo. Ej: `LCD.fillRect(0, 0, 160, 120, LCD.color.WHITE)`

```py
LCD.fillRoundRect(x, y, w, h, r, color)
```

Rellena un rectángulo con esquinas redondeadas. Ej: `LCD.fillRoundRect(0, 0, 160, 120, 10, LCD.color.WHITE)`

```py
LCD.fillTriangle(x0, y0, x1, y1, x2, y2, color)
```

Rellena un triángulo. Ej: `LCD.fillTriangle(160, 70, 60, 170, 260, 170, LCD.color.WHITE)`

```py
LCD.fillScreen(color)
```

Rellena toda la pantalla con un color. Ej: `LCD.fillScreen(LCD.color.GREEN)`

```py
LCD.invertDisplay(n)
```

Invierte los colores de la pantalla. Ej: `LCD.invertDisplay(1)`

```py
LCD.setPivot(x, y)
```

Establece el punto de pivote en (x, y)

```py
LCD.setTextDatum(datum)
```

Establece el dato de referencia del texto

```py
LCD.setTextFont(font)
```

Establece la fuente. Ej: `LCD.setTextFont(2)`

```py
LCD.setTextSize(size)
```

Establece el tamaño del texto. Ej: `LCD.setTextSize(5)`

```py
LCD.textWidth(string)
```

Devuelve la longitud (ancho) del texto. Ej: `LCD.textWidth("Hello World")`

## Referencia de Constantes

```py
LCD.color.BLACK  # Usa TAB para ver otros colores disponibles
```

Colores predefinidos. Puedes usar `dir(LCD.color)` para ver todos los disponibles.

```py
LCD.color565(R, G, B)
```

Convierte valores RGB a color de 16 bits. Ej: `LCD.fillScreen(LCD.color565(255,0,0))`

```py
LCD.color16to8()
```

Convierte color de 16 bits a 8 bits.

```py
LCD.width  # Ancho de la pantalla (320)
LCD.height # Alto de la pantalla (240)
```

```py
LCD.getCursorX() # Devuelve la posición X del cursor
LCD.getCursorY() # Devuelve la posición Y del cursor
LCD.getRotation() # Devuelve la rotación actual
LCD.getTextDatum() # Devuelve el datum de texto actual
```

## Ejemplos gráficos

### Gráfico circular

<div align="center"><img src="https://blog.seeedstudio.com/wp-content/uploads/2020/06/Piechart-1-2.gif" /></div>

Código completo disponible [aquí](https://www.seeedstudio.com/blog/2020/06/17/piechart-and-meters-reading-using-wio-terminal-and-ardupy/).

### Medidor analógico

<div align="center"><img src="https://blog.seeedstudio.com/wp-content/uploads/2020/06/Meter.gif" /></div>

Código completo disponible [aquí](https://www.seeedstudio.com/blog/2020/06/17/piechart-and-meters-reading-using-wio-terminal-and-ardupy/).

## Soporte técnico y comunidad

¡Gracias por elegir nuestros productos! Puedes contactarnos por distintos canales para recibir soporte técnico y compartir tus proyectos con la comunidad.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
