---
description: Keyboard
title: Teclado
keywords:
- Wio_terminal USB_Host
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-USBH-Keyboard
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Usar un Teclado USB en el Wio Terminal

Este repositorio muestra cómo usar un teclado USB en el Wio Terminal. ¡Puedes implementar este ejemplo para ingresar datos desde un teclado al Wio Terminal!

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200108143407.gif"/></div>

## Requisitos

Para trabajar con este ejemplo, necesitarás un **adaptador USB OTG** y un **módulo USB a Serial**, donde el adaptador OTG se usa para conectar el teclado y el módulo USB a Serial para leer las salidas del Wio Terminal.

## Procedimiento

1. Sube el código al Wio Terminal usando el `IDE de Arduino`.

2. Desconecta el cable USB tipo C del Wio Terminal que usaste para subir el código.

3. Conecta tu **teclado** al **adaptador OTG** y luego al puerto USB-C del Wio Terminal.  
   - **`Teclado`** -> **`Adaptador OTG`** -> **`Wio Terminal (Puerto tipo C)`**

4. Conecta el **módulo USB a Serial** al Wio Terminal de la siguiente manera:  
   - **`TXD (USB a Serial)`** -> **`RXD (Pin 10 en Wio Terminal)`**  
   - **`RXD (USB a Serial)`** -> **`TXD (Pin 8 en Wio Terminal)`**  
   - **`3.3V (USB a Serial)`** -> **`3.3V (Pin 1 en Wio Terminal)`**  
   - **`GND (USB a Serial)`** -> **`GND (Pin 6 en Wio Terminal)`**

5. Conecta el módulo USB a Serial a tu computadora. Dependiendo del modelo usado, **descarga el controlador USB** correspondiente para que tu computadora pueda reconocerlo.

6. Para usuarios de Windows, puedes abrir el Administrador de dispositivos para verificar si se reconoce. Debería aparecer un nuevo `COM`.  
   - Para usuarios de Mac, usa `ls /dev/cu.*` en la terminal para verificar la disponibilidad del módulo.

7. Para visualizar los datos desde el puerto serie:  
   - **Windows:** Descarga e instala [PuTTY](https://www.putty.org/). Selecciona `Serial` y cambia el valor de `COM` al que aparece en el Administrador de dispositivos, también cambia la velocidad a `115200` y presiona Open. Debería abrirse una terminal. Ahora, si empiezas a escribir con el teclado conectado, ¡deberías ver la salida por puerto serie!

   - **Mac:** Abre la terminal e instala `screen` usando `brew install screen`. Una vez instalado, usa el comando **`screen /dev/cu.usbserial 115200`**, donde `/dev/cu.usbserial` debe coincidir con el que identificaste arriba. ¡Deberías ver la salida serial del Wio Terminal!

**Nota importante:** Como el puerto USB del Wio Terminal se está usando para USB, para subir otro programa al Wio Terminal debes entrar en modo Bootloader presionando dos veces el botón de encendido (el LED se atenuará). Entonces deberías poder ver nuevamente el puerto.

## Configuraciones del USB Host

Para habilitar el modo USB Host en el Wio Terminal, debes configurar dos pines. Es necesario establecer `PIN_USB_HOST_ENABLE` en **LOW** y `OUTPUT_CTR_5V` en **HIGH**.

Puedes hacerlo simplemente agregando el siguiente código dentro de `void setup()`:

```cpp
digitalWrite(PIN_USB_HOST_ENABLE, LOW);
digitalWrite(OUTPUT_CTR_5V, HIGH);
```

## Código Completo

```cpp
#include <KeyboardController.h>
#define SerialDebug Serial1

// Inicializar controlador USB
USBHost usb;

// Asociar controlador de teclado al USB
KeyboardController keyboard(usb);

void printKey();

// Esta función intercepta la pulsación de tecla
void keyPressed() {
  SerialDebug.print("Presionada:  ");
  printKey();
}

// Esta función intercepta la liberación de tecla
void keyReleased() {
  SerialDebug.print("Liberada: ");
  printKey();
}

void printKey() {
  // getOemKey() devuelve el código OEM de la tecla
  SerialDebug.print(" tecla:");
  SerialDebug.print(keyboard.getOemKey());

  // getModifiers() devuelve los modificadores en un campo de bits
  int mod = keyboard.getModifiers();
  SerialDebug.print(" mod:");
  SerialDebug.print(mod);

  SerialDebug.print(" => ");

  if (mod & LeftCtrl)
    SerialDebug.print("L-Ctrl ");
  if (mod & LeftShift)
    SerialDebug.print("L-Shift ");
  if (mod & Alt)
    SerialDebug.print("Alt ");
  if (mod & LeftCmd)
    SerialDebug.print("L-Cmd ");
  if (mod & RightCtrl)
    SerialDebug.print("R-Ctrl ");
  if (mod & RightShift)
    SerialDebug.print("R-Shift ");
  if (mod & AltGr)
    SerialDebug.print("AltGr ");
  if (mod & RightCmd)
    SerialDebug.print("R-Cmd ");

  // getKey() devuelve la traducción ASCII de la tecla OEM
  SerialDebug.write(keyboard.getKey());
  SerialDebug.println();
}

uint32_t lastUSBstate = 0;

void setup()
{
  SerialDebug.begin(115200);
  SerialDebug.println("Programa de Control de Teclado iniciado");

  if (usb.Init())
    SerialDebug.println("El host USB no se inició.");

  delay(20);

  // Configurar pines para habilitar USB Host en el Wio Terminal
  digitalWrite(PIN_USB_HOST_ENABLE, LOW);
  digitalWrite(OUTPUT_CTR_5V, HIGH);
}

void loop()
{
  // Procesar tareas USB
  usb.Task();

  uint32_t currentUSBstate = usb.getUsbTaskState();
  if (lastUSBstate != currentUSBstate) {
    SerialDebug.print("Estado USB cambiado: 0x");
    SerialDebug.print(lastUSBstate, HEX);
    SerialDebug.print(" -> 0x");
    SerialDebug.println(currentUSBstate, HEX);
    switch (currentUSBstate) {
      case USB_ATTACHED_SUBSTATE_SETTLE: SerialDebug.println("Dispositivo conectado"); break;
      case USB_DETACHED_SUBSTATE_WAIT_FOR_DEVICE: SerialDebug.println("Desconectado, esperando dispositivo"); break;
      case USB_ATTACHED_SUBSTATE_RESET_DEVICE: SerialDebug.println("Reiniciando dispositivo"); break;
      case USB_ATTACHED_SUBSTATE_WAIT_RESET_COMPLETE: SerialDebug.println("Reinicio completo"); break;
      case USB_STATE_CONFIGURING: SerialDebug.println("Configurando USB"); break;
      case USB_STATE_RUNNING: SerialDebug.println("USB en ejecución"); break;
    }
    lastUSBstate = currentUSBstate;
  }
}
```
