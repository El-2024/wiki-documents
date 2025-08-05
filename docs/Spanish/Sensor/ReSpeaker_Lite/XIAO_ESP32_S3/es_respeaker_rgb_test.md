---
description: ReSpeaker Lite RGB test
title: Probar RGB
keywords:
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_rgb_test
last_update:
  date: 07/20/2025
  author: Guillermo
---

### Funcionalidad

La luz RGB en la placa **ReSpeaker Lite** utiliza el chip **WS2812** y se controla mediante el pin `GPIO1`.  
Este proyecto recorre distintos colores (rojo, verde, azul y blanco) para comprobar que la luz RGB funciona correctamente.

### Código

```cpp
#include <Adafruit_NeoPixel.h>

// Definir parámetros para la tira LED
#define PIN 1            // Pin conectado al LED RGB
#define NUMPIXELS 1      // Número de LEDs

Adafruit_NeoPixel strip(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);  // Inicializar objeto de tira LED

void setup() {
  // Inicializar monitor serial para depuración
  Serial.begin(115200);
  
  // Inicializar tira de LED RGB
  strip.begin();
  strip.show();  // Apagar todos los píxeles inicialmente
}

void loop() {
  // Prueba de color rojo
  Serial.println("Prueba de color rojo");
  strip.setPixelColor(0, strip.Color(255, 0, 0));  // Establecer color rojo
  strip.show();  // Actualizar visualización
  delay(1000);   // Esperar 1 segundo

  // Prueba de color verde
  Serial.println("Prueba de color verde");
  strip.setPixelColor(0, strip.Color(0, 255, 0));  // Establecer color verde
  strip.show();
  delay(1000);

  // Prueba de color azul
  Serial.println("Prueba de color azul");
  strip.setPixelColor(0, strip.Color(0, 0, 255));  // Establecer color azul
  strip.show();
  delay(1000);

  // Prueba de color blanco
  Serial.println("Prueba de color blanco");
  strip.setPixelColor(0, strip.Color(255, 255, 255));  // Establecer color blanco
  strip.show();
  delay(1000);

  // Apagar LED
  Serial.println("Apagar LED");
  strip.setPixelColor(0, strip.Color(0, 0, 0));  // Apagar píxel
  strip.show();
  delay(1000);
}
```


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/rgb_led.gif" alt="pir" width={400} height="auto" /></p>





### Configuration

`strip.setPixelColor`: Establece el color del LED en la tira.

`strip.show`: Aplica los cambios de color al LED.