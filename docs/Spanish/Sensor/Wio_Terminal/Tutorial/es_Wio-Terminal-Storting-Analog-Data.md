---
description:  Wio Terminal Storing Data
title:  Wio Terminal Almacenando Datos
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Storting-Analog-Data
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Wio Terminal mostrando y almacenando datos analógicos

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0282.2019-11-28%2018_28_03.gif" /></div>

## Resumen

Este ejemplo demuestra el uso de funciones de gráficos de línea para mostrar la lectura del sensor Grove - Light en el Wio Terminal, ¡igual que el Serial Plotter! Además, los datos del sensor de luz se almacenan en la tarjeta SD.

### Características

- Lectura de valores del sensor de luz y graficado en un gráfico de línea

## Librerías de Arduino necesarias

- Instala la librería Line Chart `Seeed_Arduino_Linechart`, visita [Line Charts](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/) para más información.

- Instala la librería SD, visita [FS](https://wiki.seeedstudio.com/Wio-Terminal-FS-Overview/) para más información.

## Instrucciones para Arduino

1. Se recomienda leer primero [Line Charts](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/) antes de probar este código de ejemplo.

2. Descarga el archivo [`LightReadings.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/LightReadings.ino.zip) y súbelo a tu Wio Terminal usando el `Arduino IDE`. Asegúrate de haber instalado todas las librerías.

3. Cambia el brillo del entorno y observa los cambios en el gráfico de línea.

4. La lectura analógica se guarda en la tarjeta SD en `Readings.txt`

## Código

- **Para inicializar la pantalla LCD y el puerto analógico**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-29.jpg" /></div>

Como se puede ver, Wio Terminal tiene dos puertos Grove, uno es puerto I2C por defecto y el otro es configurable como Digital D0, D1 o Analógico A0 y A1, así como puertos UART. En este caso se necesita un puerto analógico, por lo que se define como entrada analógica.

También, se inicializa la tarjeta SD como sigue:

```cpp
#include <SPI.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"
#include"seeed_line_chart.h" //incluye la librería

File myFile;
TFT_eSPI tft;
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 

#define max_size 30 //tamaño máximo de datos
doubles data; //Inicializando tipo doubles para almacenar datos
int brightness;

void setup() {
    Serial.begin(115200);
    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
        Serial.println("¡Inicialización fallida!");
        while(1);
    }
    pinMode(A0, INPUT);
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
}
```

* **Leyendo valores del sensor y cargando datos**

```cpp
void loop() {
    spr.fillSprite(TFT_WHITE);
    brightness = analogRead(A0);
    int brightness = analogRead(LIGHT); //Lectura de valores del sensor de luz

    if (data.size() == max_size) {
        data.pop(); //esto elimina el primer valor leído
    }
    data.push(brightness); //Almacena los valores del sensor de luz
    saveData(); //Guarda datos en la tarjeta SD
    ...
}
```

* **Configuración del título**

Consulta [Line Charts](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/) para más información.

```cpp
//Configuración del título del gráfico de línea
auto header =  text(0, 0)
            .value("Lecturas del Sensor de Luz")
            .align(center)
            .valign(vcenter)
            .width(tft.width())
            .thickness(2);

header.height(header.font_height() * 2);
header.draw(); //La altura del encabezado es el doble de la altura de la fuente
```

* **Configuración del gráfico de línea**

Consulta [Line Charts](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/) para más información.

```cpp
//Configuración del gráfico de línea
auto content = line_chart(20, header.height()); //(x,y) donde inicia el gráfico de línea
        content
            .height(tft.height() - header.height() * 1.5) //altura real del gráfico
            .width(tft.width() - content.x() * 2) //ancho real del gráfico
            .based_on(0.0) //Punto inicial del eje y, debe ser float
            .show_circle(false) //dibujar un círculo en cada punto, por defecto activado.
            .value(data) //pasa los datos al gráfico
            .color(TFT_RED) //color de la línea
            .draw();

spr.pushSprite(0, 0);
```

* **Escribiendo datos en la tarjeta SD**

Consulta [Leer/Escribir en la tarjeta SD](https://wiki.seeedstudio.com/Wio-Terminal-FS-ReadWrite/) para más información.

```cpp
void saveData(){
     myFile = SD.open("Readings.txt",FILE_APPEND);
     brightness = analogRead(A0);
     Serial.println(brightness);
     myFile.println(brightness);
     myFile.close();
}
```

## Código completo

```cpp
#include <SPI.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"
#include"seeed_line_chart.h" //incluye la librería

File myFile;
TFT_eSPI tft;
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 

#define max_size 30 //tamaño máximo de datos
doubles data; //Inicializando tipo doubles para almacenar datos
int brightness;

void setup() {
    Serial.begin(115200);
    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
        Serial.println("¡Inicialización fallida!");
        while(1);
    }
    pinMode(A0, INPUT);
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
}

void loop() {
    spr.fillSprite(TFT_WHITE);
    brightness = analogRead(A0);

    if (data.size() == max_size) {
        data.pop();//esto elimina el primer valor leído
    }
    data.push(brightness); //leer variables y almacenar en data
    saveData();

    //Configuración del título del gráfico de línea
    auto header =  text(0, 0)
                .value("Lecturas del Sensor de Luz")
                .align(center)
                .valign(vcenter)
                .width(tft.width())
                .thickness(2);

    header.height(header.font_height() * 2);
    header.draw(); //La altura del encabezado es el doble de la altura de la fuente

    //Configuración del gráfico de línea
    auto content = line_chart(20, header.height()); //(x,y) donde inicia el gráfico de línea
         content
                .height(tft.height() - header.height() * 1.5) //altura real del gráfico
                .width(tft.width() - content.x() * 2) //ancho real del gráfico
                .based_on(0.0) //Punto inicial del eje y, debe ser float
                .show_circle(false) //dibujar un círculo en cada punto, por defecto activado.
                .value(data) //pasa los datos al gráfico
                .color(TFT_RED) //color de la línea
                .draw();

    spr.pushSprite(0, 0);
}

void saveData(){
     myFile = SD.open("Readings.txt",FILE_APPEND);
     brightness = analogRead(A0);
     Serial.println(brightness);
     myFile.println(brightness);
     myFile.close();
}
```