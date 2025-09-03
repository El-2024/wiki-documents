---
title: I2C
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-IO-I2C/
slug: /es/Wio-Terminal-IO-I2C
last_update:
  date: 07/27/2025
  author: Guillermo
---
# Uso del Puerto Grove I2C en Wio Terminal

Este repositorio demuestra cómo usar el Puerto Grove I2C en Wio Terminal, ¡puedes usar esta funcionalidad plug and play con el Ecosistema Grove!

## Configuración del Puerto

Para usar el puerto Grove I2C en Wio Terminal, simplemente conecta tu sensor Grove que use I2C al puerto físico I2C en Wio Terminal.

**Nota:** Recuerda incluir las librerías de sensores en el IDE de Arduino. Consulta este [Cómo instalar librería](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/) para más información.

## Código de Ejemplo

En este ejemplo se usa un LCD Grove para demostrar. Este es el ejemplo `HelloWorld` de la librería RGB LCD.

```cpp
#include <Wire.h>
#include "rgb_lcd.h"

rgb_lcd lcd;

const int colorR = 255;
const int colorG = 0;
const int colorB = 0;

void setup()
{
    // configura el número de columnas y filas del LCD:
    lcd.begin(16, 2);
    
    lcd.setRGB(colorR, colorG, colorB);
    
    // Imprime un mensaje en el LCD.
    lcd.print("hello, world!");

    delay(1000);
}

void loop() 
{
    // coloca el cursor en la columna 0, línea 1
    // (nota: línea 1 es la segunda fila, ya que se cuenta desde 0):
    lcd.setCursor(0, 1);
    // imprime el número de segundos desde el reinicio:
    lcd.print(millis()/1000);

    delay(100);
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
