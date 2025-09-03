---
description: Xbox
title: Uso de Control de Xbox ONE en Wio Terminal
keywords:
- Wio_terminal USB_Host
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-USBH-Xbox
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Uso de Control de Xbox ONE en Wio Terminal

Este repositorio muestra cómo usar un controlador Xbox ONE en el Wio Terminal. ¡Con este ejemplo, puedes implementar un controlador Xbox para jugar con el Wio Terminal!

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200109132336.gif"/></div>

## Requisitos

Para utilizar este ejemplo, necesitarás un **adaptador USB OTG** y un **módulo USB a Serial**, donde el adaptador OTG se usa para conectar el controlador Xbox y el módulo USB a Serial para leer la salida desde el Wio Terminal.

**Nota:** En este ejemplo se utiliza un controlador Xbox ONE. Si estás utilizando un controlador Xbox 360 o uno clonado, por favor revisa el archivo `XBOXOLD.ino` en el ejemplo.

## Procedimiento

1. Sube el código al Wio Terminal usando el `Arduino IDE`.

2. Desconecta el cable USB tipo C del Wio Terminal utilizado para cargar el código.

3. Conecta tu **controlador Xbox ONE** al **adaptador OTG** y luego al puerto USB-C del Wio Terminal.
   - **`Xbox ONE Controller`** -> **`Adaptador OTG`** -> **`Wio Terminal (Puerto Tipo-C)`**

4. Conecta el **módulo USB a Serial** al Wio Terminal de la siguiente manera:
   - **`TXD (USB a Serial)`** -> **`RXD (Pin 10 del Wio Terminal)`**
   - **`RXD (USB a Serial)`** -> **`TXD (Pin 8 del Wio Terminal)`**
   - **`3.3V (USB a Serial)`** -> **`3.3V (Pin 1 del Wio Terminal)`**
   - **`GND (USB a Serial)`** -> **`GND (Pin 6 del Wio Terminal)`**

5. Conecta el módulo USB a Serial a tu computadora. Dependiendo del módulo utilizado, **descarga el driver USB** correspondiente para que tu computadora lo reconozca.

6. En Windows, abre el "Administrador de dispositivos" para verificar si el dispositivo fue reconocido. Deberías ver un nuevo `COM`.
   - En Mac, usa `ls /dev/cu.*` en la terminal para verificar si está disponible.

7. Para ver los datos desde el puerto serial:
   - **Windows:** Descarga e instala [PuTTY](https://www.putty.org/). Selecciona `Serial`, cambia el `COM` por el que apareció en el Administrador de dispositivos, ajusta la velocidad a `115200` y presiona Open. Ahora, si presionas botones en el controlador Xbox, deberías ver la salida en el terminal.

   - **Mac:** Abre la terminal e instala `screen` usando `brew install screen`. Una vez instalado, ejecuta el comando **`screen /dev/cu.usbserial 115200`**, donde `/dev/cu.usbserial` debe coincidir con el detectado. Deberías ver la salida serial del Wio Terminal.

**Nota importante:** Como el puerto USB del Wio Terminal se usa para USB, para subir otro programa debes ingresar al modo Bootloader presionando dos veces el botón de encendido (el LED se atenuará), entonces deberías poder ver el puerto nuevamente.

## Configuración del USB Host

Para habilitar el modo USB Host en el Wio Terminal, debes configurar dos pines. Se debe establecer `PIN_USB_HOST_ENABLE` como **LOW** y `OUTPUT_CTR_5V` como **HIGH**.

Puedes hacerlo agregando el siguiente código dentro de `void setup()`:

```cpp
digitalWrite(PIN_USB_HOST_ENABLE, LOW);
digitalWrite(OUTPUT_CTR_5V, HIGH);
```

## Código Completo

```cpp
#include <XBOXONE.h>
#define SerialDebug Serial1

USBHost UsbH;
XBOXONE Xbox(&UsbH);

void setup() {
  SerialDebug.begin(115200);
  if (UsbH.Init()) {
    SerialDebug.print(F("\r\nUSB host did not start"));
    while (1); //halt
  }
  SerialDebug.print(F("\r\nXBOX USB Library Started"));

  // Configurar pines para habilitar USB Host en Wio Terminal
  digitalWrite(PIN_USB_HOST_ENABLE, LOW);
  digitalWrite(OUTPUT_CTR_5V, HIGH);
}

void loop() {
  UsbH.Task();
  if (Xbox.XboxOneConnected) {
    if (Xbox.getAnalogHat(LeftHatX) > 7500 || Xbox.getAnalogHat(LeftHatX) < -7500 || Xbox.getAnalogHat(LeftHatY) > 7500 || Xbox.getAnalogHat(LeftHatY) < -7500 || Xbox.getAnalogHat(RightHatX) > 7500 || Xbox.getAnalogHat(RightHatX) < -7500 || Xbox.getAnalogHat(RightHatY) > 7500 || Xbox.getAnalogHat(RightHatY) < -7500) {
      if (Xbox.getAnalogHat(LeftHatX) > 7500 || Xbox.getAnalogHat(LeftHatX) < -7500) {
        SerialDebug.print(F("LeftHatX: "));
        SerialDebug.print(Xbox.getAnalogHat(LeftHatX));
        SerialDebug.print("\t");
      }
      if (Xbox.getAnalogHat(LeftHatY) > 7500 || Xbox.getAnalogHat(LeftHatY) < -7500) {
        SerialDebug.print(F("LeftHatY: "));
        SerialDebug.print(Xbox.getAnalogHat(LeftHatY));
        SerialDebug.print("\t");
      }
      if (Xbox.getAnalogHat(RightHatX) > 7500 || Xbox.getAnalogHat(RightHatX) < -7500) {
        SerialDebug.print(F("RightHatX: "));
        SerialDebug.print(Xbox.getAnalogHat(RightHatX));
        SerialDebug.print("\t");
      }
      if (Xbox.getAnalogHat(RightHatY) > 7500 || Xbox.getAnalogHat(RightHatY) < -7500) {
        SerialDebug.print(F("RightHatY: "));
        SerialDebug.print(Xbox.getAnalogHat(RightHatY));
      }
      SerialDebug.println();
    }

    if (Xbox.getButtonPress(L2) > 0 || Xbox.getButtonPress(R2) > 0) {
      if (Xbox.getButtonPress(L2) > 0) {
        SerialDebug.print(F("L2: "));
        SerialDebug.print(Xbox.getButtonPress(L2));
        SerialDebug.print("\t");
      }
      if (Xbox.getButtonPress(R2) > 0) {
        SerialDebug.print(F("R2: "));
        SerialDebug.print(Xbox.getButtonPress(R2));
        SerialDebug.print("\t");
      }
      SerialDebug.println();
    }

    // Activar efecto de vibración
    static uint16_t oldL2Value, oldR2Value;
    if (Xbox.getButtonPress(L2) != oldL2Value || Xbox.getButtonPress(R2) != oldR2Value) {
      oldL2Value = Xbox.getButtonPress(L2);
      oldR2Value = Xbox.getButtonPress(R2);
      uint8_t leftRumble = map(oldL2Value, 0, 1023, 0, 255); // Mapear valor a byte
      uint8_t rightRumble = map(oldR2Value, 0, 1023, 0, 255);
      if (leftRumble > 0 || rightRumble > 0)
        Xbox.setRumbleOn(leftRumble, rightRumble, leftRumble, rightRumble);
      else
        Xbox.setRumbleOff();
    }

    if (Xbox.getButtonClick(UP))    SerialDebug.println(F("Up"));
    if (Xbox.getButtonClick(DOWN))  SerialDebug.println(F("Down"));
    if (Xbox.getButtonClick(LEFT))  SerialDebug.println(F("Left"));
    if (Xbox.getButtonClick(RIGHT)) SerialDebug.println(F("Right"));

    if (Xbox.getButtonClick(START)) SerialDebug.println(F("Start"));
    if (Xbox.getButtonClick(BACK))  SerialDebug.println(F("Back"));
    if (Xbox.getButtonClick(XBOX))  SerialDebug.println(F("Xbox"));
    if (Xbox.getButtonClick(SYNC))  SerialDebug.println(F("Sync"));

    if (Xbox.getButtonClick(L1)) SerialDebug.println(F("L1"));
    if (Xbox.getButtonClick(R1)) SerialDebug.println(F("R1"));
    if (Xbox.getButtonClick(L2)) SerialDebug.println(F("L2"));
    if (Xbox.getButtonClick(R2)) SerialDebug.println(F("R2"));
    if (Xbox.getButtonClick(L3)) SerialDebug.println(F("L3"));
    if (Xbox.getButtonClick(R3)) SerialDebug.println(F("R3"));

    if (Xbox.getButtonClick(A)) SerialDebug.println(F("A"));
    if (Xbox.getButtonClick(B)) SerialDebug.println(F("B"));
    if (Xbox.getButtonClick(X)) SerialDebug.println(F("X"));
    if (Xbox.getButtonClick(Y)) SerialDebug.println(F("Y"));
  }
  delay(1);
}
```