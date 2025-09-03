---
description: Keyboard
title: Wio Terminal como Teclado
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-USBCLIENT-Keyboard
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Usar el Wio Terminal como un Teclado

Este wiki presenta cómo usar el Wio Terminal como un teclado simple. Se han asignado las teclas `s`, `e`, `d` a los 3 botones del Wio Terminal. Esto puede implementarse fácilmente en tu diseño para tareas más complejas.

## Instalación de Librerías

Este ejemplo también requiere una librería adicional de teclado para Arduino:

1. Visita el repositorio de la [Arduino Keyboard Library](https://github.com/arduino-libraries/Keyboard) y descarga todo el repositorio a tu disco local.

2. Ahora, la librería puede instalarse en el IDE de Arduino. Abre el IDE de Arduino y haz clic en `Programa` -> `Incluir Librería` -> `Añadir Biblioteca .ZIP`, y elige el archivo `Keyboard-master` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Código Completo

Para más funcionalidades, consulta las [funciones de teclado](https://www.arduino.cc/reference/en/language/functions/usb/keyboard/) oficiales de Arduino.

```cpp
#include "Keyboard.h" //librería de teclado

void setup() { 
  //configura los pines de los botones como entradas
  pinMode(WIO_KEY_A, INPUT);
  pinMode(WIO_KEY_B, INPUT);
  pinMode(WIO_KEY_C, INPUT);
  
  Keyboard.begin(); //inicia la comunicación del teclado
}

void loop() {  
  if (digitalRead(WIO_KEY_A) == LOW) { //detecta pulsación del botón
    Keyboard.write('s'); //se presiona una tecla (carácter)
  }
  if (digitalRead(WIO_KEY_B) == LOW) {   
    Keyboard.write('e'); 
  }  
  if (digitalRead(WIO_KEY_C) == LOW) {        
    Keyboard.write('d');  
  } 
  
  delay(200); //retardo entre pulsaciones
  
}
```