---
description: Wio Terminal Interactive Faces Demo
title: Wio Terminal Caritas Emoji Interactivas
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Interactive-Face
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Wio Terminal Caritas Emoji Interactivas

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0274.2019-11-26%2014_50_05.gif" /></div>

## Resumen

Este ejemplo demuestra cómo mostrar múltiples imágenes (ojos) en la pantalla LCD mediante una tarjeta SD (formato BMP), y con el uso de los botones integrados y el giroscopio para interactuar con los usuarios.

### Características

* Botón Izquierdo: Imagen anterior (ojos)

* Botón Medio: Animaciones

* Botón Derecho: Imagen siguiente (ojos)

* Giroscopio: Ojos se mueven según la orientación de la placa

## Librerías Arduino necesarias

* Instalar la librería para pantalla LCD `Seeed_Arduino_LCD`, visita [Wio Terminal LCD](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/) para más información.

* Instalar la librería para tarjeta SD `Seeed_Arduino_FS`, visita [Seeed-Arduino-FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/beta) para más información.

* Instalar la librería del acelerómetro integrado `Seeed_Arduino_LIS3DHTR`, visita [Seeed\_Arduino\_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/beta) para más información.

* Instalar la librería `RawImage.h`, visita [Loading Images](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Loading-Image/) para más información.

## Instrucciones Arduino

1. Descarga el archivo [`Emoji_face.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Emoji_face.zip) y el archivo `RawImage.h` y súbelos a tu Wio Terminal desde el `Arduino IDE`. Asegúrate de tener instaladas todas las librerías.

2. Copia la carpeta `face` (incluyendo todas las imágenes) y guárdala en la tarjeta SD.

3. ¡Comienza a mover tu Wio Terminal e interactúa!

## Código

* **Para inicializar la pantalla LCD**

```cpp
TFT_eSPI tft;

void setup() {
  ...
    tft.begin();
    tft.setRotation(3);
  ...
}
```

* **Para inicializar la tarjeta SD**

```cpp
void setup() {
  ...
    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
      while (1);
  }
  ...
}
```

* **Para inicializar el acelerómetro integrado**

```cpp
LIS3DHTR<TwoWire>  lis;

void setup () {
  ...
  lis.begin(Wire1);
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); // Frecuencia de salida del acelerómetro
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); // Selección de escala
  ...
}

void loop() {
  ...
  float x_raw = lis.getAccelerationX(); // Leer el valor bruto del eje X del acelerómetro
  float y_raw = lis.getAccelerationY(); // Leer el valor bruto del eje Y del acelerómetro
  ...
}
```

* **Para inicializar los botones integrados**

```cpp
void setup() {
  ...
  pinMode(BUTTON_1, INPUT); // botón izquierdo
  pinMode(BUTTON_2, INPUT); // botón central
  pinMode(BUTTON_3, INPUT); // botón derecho
  ...
}
```

* **Para inicializar y dibujar imágenes**

En este ejemplo, las imágenes no son de tamaño completo 320x240, por lo que al dibujar se debe especificar dónde comienza la imagen. Las imágenes se cargan primero en un búfer para evitar retrasos al mover el Wio Terminal.

Para más información, visita [Loading Images](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Loading-Image/).

```cpp
void loop() {
  ...
  Raw8 * eyes = newImage<uint8_t>(eye[eye_count]); // inicializando imágenes de 8 bits
  writeToBuffer(x_axis, y_axis, eyes); // escribir primero en el búfer, revisa el código completo para esta función
  ...
}
```
