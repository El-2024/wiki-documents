---
description: Overview
title: Primeros Pasos con el Micrófono
keywords:
- Wio_terminal Microphone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Mic
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Primeros Pasos con el Micrófono

Esta guía introduce cómo usar el micrófono integrado para entrada de audio en el Wio Terminal. El micrófono puede utilizarse para detectar el sonido del entorno y responder en consecuencia.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/MIC.png"/></div>

:::note
Esta guía solo demuestra lo más básico del micrófono, y estamos trabajando en una librería para el micrófono del Wio Terminal que permitirá muchas más funciones. ¡Mantente atento!
:::

## Código de Ejemplo

Nota: `WIO_MIC` está definido para el micrófono integrado.

```cpp
void setup() {
  pinMode(WIO_MIC, INPUT);
  Serial.begin(115200);
}

void loop() {
  int val = analogRead(WIO_MIC);
  Serial.println(val);
  delay(200);
}
```

## Código de Ejemplo con Pantalla LCD

### Instalación de Librerías

* Instala la librería [LCD](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/).

* Instala la librería [Linechart](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/).

```cpp
#include"seeed_line_chart.h" //incluir la librería
#include <math.h>

TFT_eSPI tft;

#define max_size 50 //tamaño máximo de datos
doubles data; //Inicialización de un tipo doubles para almacenar datos
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite

void setup() {
    pinMode(WIO_MIC, INPUT);

    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT, TFT_WIDTH);
}

void loop() {
    spr.fillSprite(TFT_DARKGREY);

    int val = analogRead(WIO_MIC);

    if (data.size() == max_size) {
        data.pop(); //se elimina el primer valor leído
    }
    data.push(val); //se leen valores y se almacenan en data

    //Configuración del título del gráfico de líneas
    auto header =  text(0, 0)
                .value("Lectura del Micrófono")
                .align(center)
                .color(TFT_WHITE)
                .valign(vcenter)
                .width(tft.width())
                .thickness(2);

    header.height(header.font_height() * 2);
    header.draw(); //La altura del encabezado es el doble de la altura de la fuente

    //Configuración del gráfico de líneas
    auto content = line_chart(20, header.height()); //(x,y) donde comienza el gráfico
         content
                .height(tft.height() - header.height() * 1.5) //altura real del gráfico
                .width(tft.width() - content.x() * 2) //ancho real del gráfico
                .based_on(0.0) //punto de inicio del eje y, debe ser float
                .show_circle(true) //dibujar un círculo en cada punto, activado por defecto
                .y_role_color(TFT_WHITE)
                .x_role_color(TFT_WHITE)
                .value(data) //pasar los datos al gráfico
                .color(TFT_RED) //color de la línea
                .draw();

    spr.pushSprite(0, 0);
    delay(50);
}
```