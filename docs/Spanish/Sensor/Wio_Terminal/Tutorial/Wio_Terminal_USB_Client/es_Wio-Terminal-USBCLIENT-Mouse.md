---
description: Mouse
title: Mouse
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-USBCLIENT-Mouse
last_update:
  date: 07/27/2025
  author: Guillemro
---

# Usar el Wio Terminal como un Ratón

Este wiki presenta cómo usar el Wio Terminal como un ratón simple. Esto se puede usar para simular movimientos del ratón como arriba, abajo, izquierda y derecha. Además, también se pueden implementar clics izquierdo/derecho y desplazamientos hacia arriba/abajo.

## Instalación de Librerías

Este ejemplo también requiere una librería adicional de ratón para Arduino:

1. Visita el repositorio de la [Arduino Mouse Library](https://github.com/arduino-libraries/Mouse) y descarga todo el repositorio a tu disco local.

2. Ahora, la librería puede instalarse en el IDE de Arduino. Abre el IDE de Arduino y haz clic en `Programa` -> `Incluir Librería` -> `Añadir Biblioteca .ZIP`, y elige el archivo `Mouse-master` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Código Completo

Consulta el siguiente código o directamente en GitHub [aquí](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_ButtonMouseControl/WioTerminal_ButtonMouseControl.ino). Además, para más funcionalidades, revisa las [funciones de ratón](https://www.arduino.cc/reference/en/language/functions/usb/mouse/) oficiales de Arduino.

```cpp
/*    
 * Demostración para Wio Terminal que simula un ratón usando botones.
 * Incluye: movimiento del ratón hacia arriba, abajo, izquierda, derecha,
 * clic del botón izquierdo, clic del botón derecho, 
 * desplazamiento hacia arriba y hacia abajo, etc.
 *   
 * Copyright (c) 2020 seeed technology co., ltd.  
 * Autor       : weihong.cai (weihong.cai@seeed.cc)  
 * Fecha de creación : Julio 2020
 * Registro de cambios: 
 *
 * Licencia MIT
 *
 * Se concede permiso gratuito a cualquier persona que obtenga una copia
 * de este software y los archivos de documentación asociados (el "Software"),
 * para usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar,
 * y/o vender copias del Software, y permitir a las personas a quienes se les proporcione
 * el Software hacerlo, sujeto a las siguientes condiciones:
 * 
 * Este aviso de copyright y esta nota de permiso deberán incluirse
 * en todas las copias o partes sustanciales del Software.
 * 
 * EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO,
 * EXPRESA O IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE
 * COMERCIALIZACIÓN, IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN.
 * EN NINGÚN CASO LOS AUTORES O TITULARES DEL COPYRIGHT SERÁN RESPONSABLES
 * DE NINGÚN RECLAMO, DAÑO U OTRA RESPONSABILIDAD, YA SEA EN UNA ACCIÓN DE
 * CONTRATO, AGRAVIO O DE OTRO TIPO, DERIVADA DE O EN CONEXIÓN CON EL SOFTWARE
 * O EL USO U OTROS TRATOS EN EL SOFTWARE.
 * 
 * Uso (en Wio Terminal):
 *    Presiona WIO_5S_UP    --------------------> Movimiento del ratón hacia arriba
 *    Presiona WIO_5S_DOWN  --------------------> Movimiento del ratón hacia abajo
 *    Presiona WIO_5S_LEFT  --------------------> Movimiento del ratón hacia la izquierda
 *    Presiona WIO_5S_RIGHT --------------------> Movimiento del ratón hacia la derecha
 *    Presiona BUTTON_3 ------------------------> Clic del botón izquierdo
 *    Presiona BUTTON_2 ------------------------> Clic del botón derecho    
 *    Presiona WIO_5S_PRESS y WIO_5S_UP   ------> Desplazamiento hacia arriba
 *    Presiona WIO_5S_PRESS y WIO_5S_DOWN ------> Desplazamiento hacia abajo
 * 
 * Algunos consejos:
 * 1. Si tu PC no puede reconocer el dispositivo USB y el Wio Terminal no funciona,
 *    puedes resolver el problema actualizando tu ArduinoCore.
 *    Consulta esto: https://forum.seeedstudio.com/t/seeeduino-xiao-cant-simulate-keys-pressed/252819/6?u=weihong.cai
 * 
 * Más información sobre Wio Terminal: https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/
 * Si tienes preguntas, deja un mensaje en el foro: https://forum.seeedstudio.com
 */

#include "Mouse.h"

/*----------------definir los pines de botones---------------------------*/ 
const int upButton        = WIO_5S_UP;
const int downButton      = WIO_5S_DOWN;
const int leftButton      = WIO_5S_LEFT;
const int rightButton     = WIO_5S_RIGHT;
const int mouseWheel      = WIO_5S_PRESS;
const int mouseBttonLeft  = BUTTON_3;
const int mouseBttonRight = BUTTON_2;

  // rango de salida del movimiento X o Y; afecta la velocidad del movimiento          
int range = 2;

  // retardo de respuesta del ratón, en ms
int responseDelay = 5;

  // variables para registro de tiempo
unsigned long _currentMillis;
unsigned long _previousMillis;

void setup() {
  // inicializa los pines de botones:
  pinMode(upButton,         INPUT);
  pinMode(downButton,       INPUT);
  pinMode(leftButton,       INPUT);
  pinMode(rightButton,      INPUT);
  pinMode(mouseWheel,       INPUT);
  pinMode(mouseBttonLeft,   INPUT);
  pinMode(mouseBttonRight,  INPUT);
  
  // inicializa el control del ratón:
  Mouse.begin();
}

void loop() {
  // lee el estado de los botones:
  int upState                     = digitalRead(upButton);
  int downState                   = digitalRead(downButton);
  int rightState                  = digitalRead(rightButton);
  int leftState                   = digitalRead(leftButton);
  int clickState_mouseWheel       = digitalRead(mouseWheel);
  int clickState_mouseButtonLeft  = digitalRead(mouseBttonLeft);
  int clickState_mouseButtonRight = digitalRead(mouseBttonRight);

  // calcula la distancia de movimiento según los estados:
  int  xDistance = (leftState - rightState) * range;
  int  yDistance = (upState   - downState)  * range;

/*------------------Movimiento del ratón------------------------------*/
  // si X o Y no son cero, mueve el ratón:
  if ((xDistance != 0) || (yDistance != 0)) {
    Mouse.move(xDistance, yDistance, 0);
  }
  
/*-------------Clic del botón izquierdo------------------------------*/
  if (clickState_mouseButtonLeft == LOW) {
    if (!Mouse.isPressed(MOUSE_LEFT)) {
      Mouse.press(MOUSE_LEFT);
      //Mouse.click(MOUSE_LEFT);
    }
  } else {
    if (Mouse.isPressed(MOUSE_LEFT)) {
      Mouse.release(MOUSE_LEFT);
    }
  }
  
/*-------------Clic del botón derecho-------------------------------*/
  if (clickState_mouseButtonRight == LOW) {
    if (!Mouse.isPressed(MOUSE_RIGHT)) {
      Mouse.press(MOUSE_RIGHT);
      //Mouse.click(MOUSE_RIGHT);
    }
  } else {
    if (Mouse.isPressed(MOUSE_RIGHT)) {
      Mouse.release(MOUSE_RIGHT);
    }
  }

/*------------------Desplazamiento hacia arriba----------------------*/
  if ((upState == LOW) && (clickState_mouseWheel == LOW)) {
    Mouse.move(0, 0, 1);
    My_delay(200);
  }

/*------------------Desplazamiento hacia abajo----------------------*/
  if ((downState == LOW) && (clickState_mouseWheel == LOW)) {
    Mouse.move(0, 0, -1);
    My_delay(200);
  }
    
/*-----------------------------------------------------------------*/ 
  // pequeño retardo para evitar movimiento excesivo del ratón:
  My_delay(responseDelay);
}

// función de retardo usando millis()
void My_delay(int Time)
{
  while((_currentMillis - _previousMillis) <= Time)
  {
      _currentMillis = millis();
  }
  _previousMillis = _currentMillis; 
}
```