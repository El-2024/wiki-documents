---
description:  Wio Terminal Displaying Photos
title:  Wio Terminal Mostrando Fotos
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Displaying-Photos
last_update:
  date: 07/27/2025
  author: Guillermo
---
# Wio Terminal Mostrando Fotos

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/products.2019-11-26%2017_40_45.gif" /></div>

## Descripción General

Este ejemplo demuestra cómo mostrar imágenes desde una tarjeta SD en bucle.

### Características

- Reproducción en bucle de fotos

## Librerías Arduino necesarias

- Instala la librería de pantalla LCD `Seeed_Arduino_LCD`, por favor visita [Wio Terminal Overview](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/) para más información.

- Instala la librería para tarjeta SD `Seeed_Arduino_FS`, por favor visita [Seeed-Arduino-FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS) para más información.

- Instala la librería `RawImage.h`, por favor visita [Loading Images](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Loading-Image/) para más información.

## Instrucciones Arduino

1. Descarga el archivo [`displayPhotos.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/displayPhotos.zip) y el archivo `RawImage.h` y súbelos a tu Wio Terminal usando el `Arduino IDE`. Asegúrate de instalar todas las librerías.

2. Copia la carpeta `photos` y guárdala completa en la tarjeta SD.

3. Deberías ver las imágenes comenzando a reproducirse en bucle.

## Código

```cpp
#include"TFT_eSPI.h"
#include "Seeed_FS.h" // Incluir librería de tarjeta SD
#include"RawImage.h"  // Incluir librería de procesamiento de imágenes
TFT_eSPI tft;

void setup() {
    // Inicializar tarjeta SD
    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
        while (1);
    }
    // Inicializar pantalla LCD
    tft.begin();
    tft.setRotation(3);

}
// Nombres de las fotos almacenadas
const char* list[] = {"photos/1.bmp", "photos/2.bmp", "photos/3.bmp", "photos/4.bmp"};

void loop() {
    for (uint8_t cnt = 0; cnt < 4; cnt++) {
        drawImage<uint16_t>(list[cnt],0,0); // mostrar imágenes una por una
        delay(1000);
    }
}
```

# Wio Terminal Mostrando Fotos con Botones

### Descripción General

Este ejemplo es similar al anterior, pero en lugar de bucle automático, se usan los botones incorporados para cambiar la imagen mostrada.

### Características

* Botón izquierdo: Imagen anterior

* Botón derecho: Imagen siguiente

### Librerías Arduino necesarias

* Instala la librería de pantalla LCD `Seeed_Arduino_LCD`, por favor visita [Wio Terminal Overview](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/) para más información.

* Instala la librería para tarjeta SD `Seeed_Arduino_FS`, por favor visita [Seeed-Arduino-FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/beta) para más información.

* Instala la librería `RawImage.h`, por favor visita [Loading Images](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Loading-Image/) para más información.

### Instrucciones Arduino

1. Descarga el archivo [`displayPhotos_buttons.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/displayPhotos_buttons.zip) y el archivo `RawImage.h` y súbelos a tu Wio Terminal usando el `Arduino IDE`. Asegúrate de instalar todas las librerías.

2. Copia la carpeta `photos` y guárdala completa en la tarjeta SD.

3. Presiona el botón izquierdo para desplazarte a la imagen anterior y el botón derecho para desplazarte a la siguiente.

### Código

* **Para inicializar los botones**

```cpp
void setup() {
    ...
    pinMode(BUTTON_1, INPUT); // botón izquierdo
    pinMode(BUTTON_3, INPUT); // botón derecho
    ...
}
```

### Código Completo

```cpp
#include"TFT_eSPI.h"
#include "Seeed_FS.h" // Incluir librería de tarjeta SD
#include"RawImage.h"  // Incluir librería de procesamiento de imágenes
TFT_eSPI tft;

bool left_flag = false;
void button_handler_left() {
  left_flag = true;
}

bool right_flag = false;
void button_handler_right() {
  right_flag = true;
}

void setup() {
  // Inicializar tarjeta SD
  if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI,16000000)) {
    while (1);
  }
  tft.begin();
  tft.setRotation(3);

  pinMode(BUTTON_1, INPUT);
  pinMode(BUTTON_3, INPUT);
  attachInterrupt(digitalPinToInterrupt(BUTTON_1), button_handler_left, FALLING);
  attachInterrupt(digitalPinToInterrupt(BUTTON_3), button_handler_right, FALLING);

}

const char* list[] = {"1.bmp", "2.bmp", "3.bmp", "4.bmp"};
int8_t cnt = 0;

void loop() {
  if (left_flag) {
    cnt++;
    left_flag = false;
    if (cnt == 4) {
      cnt = 0;
    }
  }
  if (right_flag) {
    cnt--;
    right_flag = false;
    if (cnt < 0) {
      cnt = 3;
    }
  }
  drawImage<uint16_t>(list[cnt], 0, 0);
}
```
