---
description:  Pressure sensor using the Wio terminal
title:  Sensor de Presión con Wio terminal
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Barometric-Pressure-sensor-using-the-Wio-terminal
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Sensor Barométrico de Alta Precisión usando Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Barometric-Pressure-sensor-using-the-Wio-terminal/pre_temp_222gGIF.gif" /></div>

## Visión General

Esta demo muestra que el sensor Grove de alta precisión para presión barométrica DPS310 es totalmente compatible con el Wio Terminal, ofreciendo mediciones con alta precisión.

## Características

* Visualización del rango normal de presión atmosférica mediante colores en el dial.
* Visualización simultánea de la temperatura en grados Celsius.
* Medición de presión barométrica y temperatura con alta precisión.

## Hardware

* [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
* [Grove - Sensor de presión barométrica alta precisión DPS310](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)

### Conexión de Hardware

<div align="center"><img src="https://files.seeedstudio.com/wiki/Barometric-Pressure-sensor-using-the-Wio-terminal/111111.png" /></div>

## Software

Si no tienes el Arduino IDE instalado, consulta la guía para [empezar con Wio Terminal](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/).

* Instala la librería de pantalla LCD `Seeed_Arduino_LCD`. Más información en [Wio Terminal LCD](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/).
* Instala la librería del sensor DPS310 `#include <Dps310.h>`. Más información en [DPS310 Pressure Sensor](https://wiki.seeedstudio.com/Grove-High-Precision-Barometric-Pressure-Sensor-DPS310/).

## Código de ejemplo

```cpp
#include <Dps310.h>
#include <SPI.h>
#include <TFT_eSPI.h>       // Librería específica para pantalla
TFT_eSPI tft = TFT_eSPI(); 

#define TFT_GREY 0x5AEB
#define LOOP_PERIOD 35 // Actualiza pantalla cada 35 ms

Dps310 Dps310PressureSensor = Dps310();

#define M_SIZE 1.4

TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite para dibujo rápido

float ltx = 0;    // Coordenada x previa de la aguja
uint16_t osx = M_SIZE * 120, osy = M_SIZE * 120; // Coordenadas guardadas x & y
uint32_t updateTime = 0;       // Tiempo para próxima actualización

int old_analog =  -999; // Último valor mostrado

int value[6] = {0, 0, 0, 0, 0, 0};
int d = 0;

void setup(void) {
    tft.begin();
    tft.init();
    tft.setRotation(3);
    Serial.begin(57600); // Debug
    tft.fillScreen(TFT_WHITE);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
    spr.setRotation(3);

    Dps310PressureSensor.begin(Wire);
    analogMeter(); // Dibuja el medidor analógico

    updateTime = millis(); // Siguiente tiempo de actualización
}


void loop() {
  float temperature;
  float pressure;
  uint8_t oversampling = 7;
  int16_t ret;

  ret = Dps310PressureSensor.measureTempOnce(temperature, oversampling);
  ret = Dps310PressureSensor.measurePressureOnce(pressure, oversampling);
  Serial.println(pressure);

    if (updateTime <= millis()) {
        updateTime = millis() + 35; // Actualiza aguja cada 35 ms

        // Para prueba, genera una onda senoidal
        d += 4;
        if (d >= 360) {
            d = 0;
        }
        ////////////////////////////////////////////////////////
        // Ejemplo, solo debes restar 100050 para ajuste base
        ////////////////////////////////////////////////////////
        plotNeedle(pressure-100050, 0); // Redibuja aguja sin retraso
    }

    delay(100);
    spr.fillSprite(TFT_WHITE);
    spr.createSprite(250, 40);
    spr.fillSprite(TFT_WHITE);
    spr.setTextColor(TFT_BLACK, TFT_WHITE);
    spr.setFreeFont(&FreeSansBoldOblique12pt7b);
    spr.drawNumber(temperature, 0, 0);
    spr.drawString(" °C", 30, 0);
    spr.drawNumber(pressure, 120,0);
    spr.drawString("Pa", 210,0); 
    spr.pushSprite(30, 190); 
    spr.deleteSprite();

}

// #########################################################################
// Dibuja el medidor analógico en la pantalla
// #########################################################################
void analogMeter() {

    // Contorno del medidor
    tft.fillRect(0, 0, M_SIZE * 239, M_SIZE * 126, TFT_GREY);
    tft.fillRect(5, 3, M_SIZE * 230, M_SIZE * 119, TFT_WHITE);

    tft.setTextColor(TFT_BLACK);

    // Dibuja marcas cada 5 grados desde -50 a +50 grados (giro completo 100 grados)
    for (int i = -50; i < 51; i += 5) {
        int tl = 15; // longitud de la marca larga

        // Coordenadas para dibujar marcas
        float sx = cos((i - 90) * 0.0174532925);
        float sy = sin((i - 90) * 0.0174532925);
        uint16_t x0 = sx * (M_SIZE * 100 + tl) + M_SIZE * 120;
        uint16_t y0 = sy * (M_SIZE * 100 + tl) + M_SIZE * 140;
        uint16_t x1 = sx * M_SIZE * 100 + M_SIZE * 120;
        uint16_t y1 = sy * M_SIZE * 100 + M_SIZE * 140;

        float sx2 = cos((i + 5 - 90) * 0.0174532925);
        float sy2 = sin((i + 5 - 90) * 0.0174532925);
        int x2 = sx2 * (M_SIZE * 100 + tl) + M_SIZE * 120;
        int y2 = sy2 * (M_SIZE * 100 + tl) + M_SIZE * 140;
        int x3 = sx2 * M_SIZE * 100 + M_SIZE * 120;
        int y3 = sy2 * M_SIZE * 100 + M_SIZE * 140;

        // Zonas coloreadas según rango
        if (i >= -50 && i < -25) {
          tft.fillTriangle(x0, y0, x1, y1, x2, y2, TFT_GREEN);
          tft.fillTriangle(x1, y1, x2, y2, x3, y3, TFT_GREEN);
        }
        
        if (i >= -25 && i < 0) {
          tft.fillTriangle(x0, y0, x1, y1, x2, y2, TFT_YELLOW);
          tft.fillTriangle(x1, y1, x2, y2, x3, y3, TFT_YELLOW);
        }

        if (i >= 0 && i < 25) {
            tft.fillTriangle(x0, y0, x1, y1, x2, y2, TFT_RED);
            tft.fillTriangle(x1, y1, x2, y2, x3, y3, TFT_RED);
        }

        if (i >= 25 && i < 50) {
            tft.fillTriangle(x0, y0, x1, y1, x2, y2, TFT_RED);
            tft.fillTriangle(x1, y1, x2, y2, x3, y3, TFT_RED);
        }

        // Marcas cortas cada 5 grados que no son múltiplos de 25
        if (i % 25 != 0) {
            tl = 8;
        }

        // Recalcula coordenadas para marcas cortas
        x0 = sx * (M_SIZE * 100 + tl) + M_SIZE * 120;
        y0 = sy * (M_SIZE * 100 + tl) + M_SIZE * 140;
        x1 = sx * M_SIZE * 100 + M_SIZE * 120;
        y1 = sy * M_SIZE * 100 + M_SIZE * 140;

        tft.drawLine(x0, y0, x1, y1, TFT_BLACK);

        // Dibuja números en marcas de 25 en 25
        if (i % 25 == 0) {
            x0 = sx * (M_SIZE * 100 + tl + 10) + M_SIZE * 120;
            y0 = sy * (M_SIZE * 100 + tl + 10) + M_SIZE * 140;

            switch (i / 25) {
                case -2: tft.drawCentreString("100000", x0, y0 - 12, 2); break;
                case -1: tft.drawCentreString("100025", x0, y0 - 9, 2); break;
                case 0: tft.drawCentreString("100050", x0, y0 - 7, 2); break;
                case 1: tft.drawCentreString("100075", x0, y0 - 9, 2); break;
                case 2: tft.drawCentreString("100100", x0, y0 - 12, 2); break;
            }
        }

        sx = cos((i + 5 - 90) * 0.0174532925);
        sy = sin((i + 5 - 90) * 0.0174532925);
        x0 = sx * M_SIZE * 100 + M_SIZE * 120;
        y0 = sy * M_SIZE * 100 + M_SIZE * 140;
        if (i < 50) {
            tft.drawLine(x0, y0, x1, y1, TFT_BLACK);
        }
    }

    tft.drawCentreString("K/Pa", M_SIZE * 120, M_SIZE * 80, 4); // Unidades
    tft.drawRect(5, 3, M_SIZE * 230, M_SIZE * 119, TFT_BLACK); // Marco del medidor

    plotNeedle(0, 0); // Aguja en cero
}

// #########################################################################
// Actualiza la posición de la aguja en el medidor analógico
// #########################################################################
void plotNeedle(int value, byte ms_delay) {

    if (value < -10) {
        value = -10;    // Limita valor para evitar que aguja sobrepase
    }
    if (value > 110) {
        value = 110;
    }

    // Mueve la aguja hasta el valor nuevo
    while (!(value == old_analog)) {
        if (old_analog < value) {
            old_analog++;
        } else {
            old_analog--;
        }

        if (ms_delay == 0) {
            old_analog = value;    // Actualiza instantáneamente si delay es 0
        }

        float sdeg = map(old_analog, -10, 110, -150, -30); // Mapea valor a ángulo
        float sx = cos(sdeg * 0.0174532925);
        float sy = sin(sdeg * 0.0174532925);

        float tx = tan((sdeg + 90) * 0.0174532925);

        // Borra la aguja vieja
        tft.drawLine(M_SIZE * (120 + 20 * ltx - 1), M_SIZE * (140 - 20), osx - 1, osy, TFT_WHITE);
        tft.drawLine(M_SIZE * (120 + 20 * ltx), M_SIZE * (140 - 20), osx, osy, TFT_WHITE);
        tft.drawLine(M_SIZE * (120 + 20 * ltx + 1), M_SIZE * (140 - 20), osx + 1, osy, TFT_WHITE);

        // Re-dibuja texto bajo la aguja
        tft.setTextColor(TFT_BLACK);
        tft.drawCentreString("K/Pa", M_SIZE * 120, M_SIZE * 80, 4);

        // Guarda nueva posición para borrar después
        ltx = tx;
        osx = M_SIZE * (sx * 98 + 120);
        osy = M_SIZE * (sy * 98 + 140);

        // Dibuja aguja nueva, usando 3 líneas para mayor grosor
        tft.drawLine(M_SIZE * (120 + 20 * ltx - 1), M_SIZE * (140 - 20), osx - 1, osy, TFT_RED);
        tft.drawLine(M_SIZE * (120 + 20 * ltx), M_SIZE * (140 - 20), osx, osy, TFT_MAGENTA);
        tft.drawLine(M_SIZE * (120 + 20 * ltx + 1), M_SIZE * (140 - 20), osx + 1, osy, TFT_RED);

        // Ralentiza aguja al aproximarse al destino
        if (abs(old_analog - value) < 10) {
            ms_delay += ms_delay / 5;
        }

        delay(ms_delay);
    }
}
```