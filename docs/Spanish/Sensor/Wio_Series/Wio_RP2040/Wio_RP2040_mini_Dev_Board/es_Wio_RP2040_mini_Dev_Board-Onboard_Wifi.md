---
title: Primeros Pasos con el Wio RP2040 mini Dev Board
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/
slug: /es/Wio_RP2040_mini_Dev_Board-Onboard_Wifi
last_update:
  date: 07/25/2025
  author: Guillermo
---

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_1.jpg)

# Wio RP2040 mini Dev Board

El **Wio RP2040 mini Dev Board** es una placa de desarrollo basada en el módulo Wio RP2040 con funciones inalámbricas y compatible con programación en MicroPython. Incorpora un microcontrolador de doble núcleo a 133 MHz y bajo consumo, lo que lo convierte en una excelente opción para proyectos de IoT que requieren potencia y tamaño compacto.

## Características Principales

- **CPU potente:**  
  Procesador RP2040 de doble núcleo a 133 MHz, 264 KB de SRAM y 2 MB de memoria Flash.
- **Conectividad inalámbrica confiable:**  
  Soporte para WiFi en banda de 2.4 a 2.4835 GHz, modos AP y estación.
- **Flexible y amigable para desarrollo:**  
  Compatible con el editor Thonny.
- **Fácil de operar:**  
  Compatible con protoboard (breadboard friendly).
- **Certificaciones:**  
  Certificación FCC y CE.
- **Lenguajes soportados:**  
  MicroPython.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html)

## Especificaciones Técnicas

| Nombre | Detalles |
|--------|----------|
| Procesador | Dual Cortex M0+ @133 MHz |
| SRAM | 264 KB |
| Flash | 2 MB |
| Conectividad inalámbrica | IEEE802.11 b/g/n (2.4〜2.4835 GHz); modos AP y Station |
| GPIO, PIO y PWM | 20 pines |
| I2C | 2 interfaces |
| SPI | 2 interfaces |
| UART | 2 interfaces |
| ADC | 4 canales |
| Conexión | USB Tipo-C |
| Alimentación | 5 V DC |
| Tamaño | 25.8 x 45.5 mm |

:::note
**Precaución sobre pines I/O:**  
El microcontrolador opera a 3.3 V. Si se aplican voltajes mayores a 3.3 V a los pines GPIO, se puede dañar el chip.
:::

## Descripción del Hardware

![Hardware Overview](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_3.png)

## Diagrama de Pines

![Pinout](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_4.png)

---

## Primeros Pasos

La placa ya viene con **firmware MicroPython** preinstalado, por lo que puedes conectarla directamente al editor Thonny.  
Si necesitas reinstalar o actualizar el firmware, puedes descargar el archivo `.uf2` correspondiente y seguir estos pasos:

1. Mantén presionado el botón **BOOT** de la placa.
2. Conecta el cable USB a tu computadora.
3. La placa aparecerá como un **dispositivo de almacenamiento extraíble**.
4. Arrastra el archivo `.uf2` a esa unidad para completar la actualización.

![firmware flash](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_5.png)

### Requisitos de Hardware

- Wio RP2040 mini Dev Board ×1  
- Cable USB Tipo-C ×1  
- PC ×1  

Al conectarla, el **LED rojo de alimentación** debería encenderse.

### Versiones de Firmware Disponibles

| Versión | Cambios | Enlace de descarga |
|---------|---------|--------------------|
| v1.15.1 | Versión oficial inicial | [firmware-v1.15.1.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2) |
| v1.15.2 | Mejora de estabilidad de socket y mensajes de error | [firmware-v1.15.2.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/v1.15.2.uf2) |
| v1.15.3 | Renombrado de `wait_msg()` a `check_msg()`; nueva `wait_msg()` no bloqueante | [firmware-v1.15.3.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/1.15.3.uf2) |

:::note
La versión usada en los ejemplos del wiki es **v1.15.1**. Si usas una versión posterior, revisa el changelog para adaptar tu código.
:::

---

## Configuración de Software

### 1. Instalar Thonny

Visita [thonny.org](https://thonny.org/) y descarga el instalador según tu sistema operativo.  
Thonny incluye Python 3.7, por lo que no necesitas instalar nada adicional.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_6.png)

Al abrirlo, verás una interfaz con 4 secciones principales:

1. **Barra de herramientas**: nuevo archivo, abrir, guardar, ejecutar, detener, etc.  
2. **Editor de código**: área principal para escribir código MicroPython.  
3. **Shell**: muestra salida del código y permite ingresar comandos.  
4. **Intérprete**: selecciona el intérprete `MicroPython (Raspberry Pi Pico)`.

![interfaz](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_7.png)
![interpreter](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_8.png)
![interpreter 2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_9.png)

### 2. Conectar la placa

Conecta la placa al PC mediante el cable USB-C y haz clic en el botón **"Restart backend"** de Thonny.  
Verás información de MicroPython en la ventana de Shell si todo está correctamente conectado.

![restart](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_10.png)

### 3. Encender el LED integrado

La placa tiene un **LED conectado al pin GP13**. Puedes hacer una prueba básica para encenderlo y apagarlo:

```python
from machine import Pin, Timer

led = Pin(13, Pin.OUT)
Counter = 0
Fun_Num = 0

def fun(tim):
    global Counter
    Counter = Counter + 1
    print(Counter)
    led.value(Counter%2)
    
tim = Timer(-1)
tim.init(period=1000, mode=Timer.PERIODIC, callback=fun)
```
​
**Presiona el icono de reproducir en la barra de herramientas para ejecutar tu código.**

![5.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_11.png)

Si todo funciona correctamente, verás que el LED se enciende y apaga una vez por segundo. Además, en la Shell se mostrará un número creciente:

![6.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_12.png)

## Preguntas Frecuentes (FAQ)

#### 1. Quiero que el código se ejecute automáticamente al iniciar.
Debes guardar tu script como `main.py` en la memoria interna de la placa. La próxima vez que reinicies la placa, ejecutará automáticamente el programa `main.py`.

#### 2. Después de ejecutar un código con funciones de red, otros programas fallan o generan errores.
Presiona el botón **RESET** (etiquetado como "RUN") en la placa principal para reiniciarla. Luego vuelve a conectarte desde el editor Thonny para ejecutar otros programas.

## Recursos

- **[BRD]** [Wio_RP2040 mini v1.1](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wio_RP2040_mini_v1.1.brd)
- **[PDF]** [Wio_RP2040 mini v1.1.pdf](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wio_RP2040_mini_v1.1.pdf)
- **[SCH]** [Wio_RP2040 mini v1.1.sch](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wio_RP2040_mini_v1.1.sch)

## Soporte Técnico y Discusión de Productos

Si tienes algún problema técnico, por favor repórtalo en nuestro  
[foro oficial de Seeed Studio](http://forum.seeedstudio.com/).

Gracias por elegir nuestros productos. Estamos aquí para brindarte diferentes formas de soporte y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


