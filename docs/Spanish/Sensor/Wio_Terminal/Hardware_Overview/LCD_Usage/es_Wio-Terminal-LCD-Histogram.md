---
title: Histograma
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-LCD-Histogram/
slug: /es/Wio-Terminal-LCD-Histogram
last_update:
  date: 07/27/2025
  author: Guillermo
---
# Histograma

Este repositorio describe cómo dibujar un histograma en el Wio Terminal. Similar a la biblioteca de gráficos de líneas, puedes usar esta herramienta para mostrar valores de sensores en tiempo real y visualizar lecturas en pantalla. Esta biblioteca es muy flexible y puede modificarse según tus necesidades.

<div align="center"><img width="600" src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200114131505.png" /></div>

## Instalación de bibliotecas

### Instalar la biblioteca `Histogram`

- Visita [Seeed_Arduino_Histogram](https://github.com/Seeed-Studio/Seeed_Arduino_Histogram) y descarga el repositorio completo en tu computadora.

- Abre el IDE de Arduino y selecciona `Programa` -> `Incluir biblioteca` -> `Añadir biblioteca .ZIP...`. Luego selecciona el archivo `.zip` descargado de `Seeed_Arduino_Histogram`.

![Instalar biblioteca](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Primeros pasos

### Inicializar el histograma

Incluye la biblioteca `Histogram` e inicializa tanto la pantalla TFT como el histograma:

```cpp
#include <TFT_eSPI.h> // Librería específica del hardware
#include <SPI.h>
#include "Histogram.h"

TFT_Histogram histogram = TFT_Histogram(); // Inicialización del histograma
TFT_eSPI tft = TFT_eSPI(); // Inicialización de la pantalla

void setup(void) {
  tft.init();
  histogram.initHistogram(&tft);
  ...
}
```

## Crear columnas en el histograma

Para crear columnas:

```cpp
void formHistogram(String label, int NO, double Histogram_value, int Histogram_WIDTH, uint32_t colour);
```

* `label`: nombre que se mostrará debajo de la columna.
* `NO`: número identificador de la columna.
* `Histogram_value`: valor de la columna (altura).
* `Histogram_WIDTH`: ancho de la columna.
* `colour`: color de la columna.

## Mostrar el histograma

```cpp
void showHistogram();
```

## Cambiar valores de columnas existentes

```cpp
void changeParam(uint8_t NO, String label, float Histogram_value, uint32_t colour);
```

* `NO`: número de la columna que se desea modificar.
* `label`, `Histogram_value` y `colour` actualizan sus atributos.

## Eliminar una columna

```cpp
void deleteCylinder(uint8_t NO);
```

* `NO`: número de columna a eliminar.

## Agregar gráfico de líneas sobre el histograma

```cpp
void lineChart(uint32_t colour);
```

* `colour`: color de la línea.

## Ocultar los ejes del histograma

```cpp
void notShowAxis();
```

## Otras funciones útiles

Para más funciones, consulta directamente el archivo `Histogram.h`. La biblioteca también incluye ejemplos y una demo completa en la carpeta `examples`.

## Código de ejemplo

```cpp
#include <TFT_eSPI.h> // Librería específica del hardware
#include <SPI.h>
#include "Histogram.h" // Incluir la biblioteca de histogramas

TFT_Histogram histogram = TFT_Histogram(); // Inicializar TFT e histograma
TFT_eSPI tft = TFT_eSPI();

void setup() {
  tft.init();
  histogram.initHistogram(&tft);
  
  // Crear columnas
  histogram.formHistogram("a", 1, 50.55, 40, TFT_RED);
  histogram.formHistogram("b", 2, 20, 40, TFT_BLACK);
  histogram.formHistogram("c", 3, 100, 50, TFT_GREEN);
  histogram.formHistogram("d", 4, 53, 50, TFT_BLUE);
  histogram.formHistogram("e", 5, 133, 30, TFT_YELLOW);
  histogram.formHistogram("f", 6, 53, 50, TFT_ORANGE);
  histogram.formHistogram("g", 7, 80, 50, TFT_PINK);

  histogram.showHistogram(); // Mostrar histograma
  delay(3000);

  histogram.changeParam(6, "F", 55, TFT_PINK); // Modificar columna 6
  histogram.deleteCylinder(7); // Eliminar columna 7
  histogram.lineChart(TFT_BLACK); // Agregar gráfico de líneas

  delay(2000);
  histogram.notShowAxis(); // Ocultar ejes
}

void loop() {
  // Sin operación continua
}
```

## Soporte técnico y discusión de productos

Gracias por elegir nuestros productos. Estamos disponibles para brindarte soporte técnico y ayudarte a tener una experiencia satisfactoria. Ofrecemos varios canales de comunicación para adaptarnos a tus necesidades y preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
