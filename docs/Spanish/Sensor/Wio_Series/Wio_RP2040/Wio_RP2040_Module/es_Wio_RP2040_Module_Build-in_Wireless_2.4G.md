---
title: Módulo Wio RP2040
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio_RP2040_Module_Build-in_Wireless_2.4G/
slug: /es/Wio_RP2040_Module_Build-in_Wireless_2.4G
last_update:
  date: 07/25/2025
  author: Guillermo
---

![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_1.jpg)

El módulo **Wio RP2040** es un módulo desarrollado por Seeed que utiliza el chip RP2040+WiFi, y es compatible con programación en MicroPython. Cuenta con un procesador de doble núcleo Cortex M0+ con reloj flexible de hasta 133 MHz. Este módulo es un microcontrolador de bajo consumo con funciones inalámbricas. Gracias a su potente rendimiento y pequeño tamaño, es una opción ideal para el desarrollo de diversos proyectos IoT. El módulo puede ser fácilmente soldado en diferentes placas base PCB.

El módulo cuenta con una amplia variedad de interfaces, incluyendo 28 pines GPIO (19 de ellos compatibles con PIO y PWM), 2 UART, 4 ADC, 2 SPI y 2 I2C. Algunos pines pueden ser multiplexados, como GP12 y GP13, que soportan funciones I2C, SPI y UART. Por ello, los 28 pines GPIO pueden aprovecharse para ofrecer más entradas/salidas y funciones. El módulo Wio RP2040 también incluye un pin USB, que puede ser diseñado para soportar una interfaz USB Tipo-C.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Wio-RP2040-Module-p-4932.html)

## Características Principales

- **CPU potente**: Procesador Cortex M0+ de doble núcleo a 133 MHz, 264 KB de SRAM, 2 MB de Flash  
- **Conexión inalámbrica confiable**: Chip WiFi potente, compatible con frecuencia 2.4~2.4835 GHz y modos AP & Station  
- **Flexible**: Compatible con el editor Thonny  
- **Tamaño compacto**: 18.0 × 28.2 × 1.0 mm, 32 pines SMT  
- **Certificaciones múltiples**: Certificado por FCC y CE  
- **Lenguajes compatibles**: MicroPython

## Especificaciones

| Nombre                    | Detalles                                             |
|--------------------------|------------------------------------------------------|
| Procesadores             | Doble núcleo Cortex M0+, hasta 133 MHz              |
| SRAM                     | 264 KB                                               |
| Flash                    | 2 MB                                                 |
| Conectividad inalámbrica | 2.4〜2.4835 GHz; IEEE802.11 b/g/n; modo AP y Station |
| GPIO, PIO y PWM          | 20                                                   |
| I2C                      | 2                                                    |
| SPI                      | 2                                                    |
| UART                     | 2                                                    |
| ADC                      | 4                                                    |
| VIN                      | 5V–3.6V DC                                           |
| Tamaño                   | 18.0 × 28.2 × 1.0 mm                                 |

## Vista General del Hardware

![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_3.png)

:::note
Pines I/O: El MCU funciona a 3.3 V. Si se conecta un voltaje superior a 3.3 V a un pin de propósito general (GPIO), puede dañar el chip. Ten cuidado y no retires la cubierta de blindaje.
:::

## Primeros Pasos

Si deseas cargar el firmware de MicroPython para este módulo, puedes descargar el archivo [firmware-v1.15.1.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2) en tu computadora. Luego, baja el pin BOOT a nivel bajo y conecta el conector MicroUSB hembra de acuerdo al siguiente diagrama de cableado. Finalmente, conéctalo a tu computadora mediante un cable de datos. En este momento, aparecerá un disco extraíble. Copia el archivo del firmware al disco extraíble para completar la actualización.

![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/image1.png)

| Versión del firmware | Registro de cambios | Descarga |
|----------------------|----------------------|----------|
| V1.15.1 | Primera versión oficial | [firmware-v1.15.1.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2) |
| V1.15.2 | Se mejora la estabilidad del Socket y se agrega el mensaje de error en caso de fallo de conexión | [firmware-v1.15.2.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/v1.15.2.uf2) |
| V1.15.3 | Se renombra la función original `wait_msg()` como `check_msg()` y se añade una nueva función `wait_msg()`. La diferencia principal es que la función original `wait_msg()` bloquea la ejecución del programa mientras espera los datos. En cambio, `check_msg()` solo detecta si hay datos recibidos: si los hay, ejecuta el callback; si no, el programa continúa su ejecución. | [firmware-v1.15.3.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/1.15.3.uf2) |

:::note
El firmware usado en los tutoriales del wiki es la versión **V1.15.1**.  
Si utilizas una versión más reciente, consulta el registro de cambios del firmware para adaptar el código de ejemplo.
:::

### Software

#### 1. Instalar Thonny

Es muy fácil comenzar. Thonny incluye Python 3.7, por lo que solo necesitas instalarlo una vez para empezar a programar. Primero, visita [Thonny.org](https://thonny.org/) para entrar a la página de descarga. En la esquina superior derecha selecciona el instalador según tu sistema operativo. Haz doble clic sobre el archivo descargado y sigue los pasos para instalarlo.

![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_4.png)

Una vez instalado Thonny, ábrelo. Verás la interfaz principal de Thonny:

![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_5.png)

La interfaz principal de Thonny está dividida en cuatro partes:

1. **Barra de herramientas**: herramientas básicas como nuevo archivo, abrir, guardar, ejecutar script, detener, etc.  
2. **Editor de código**: el área principal donde escribiremos código en Python/MicroPython.  
3. **Shell**: aquí se ejecutan comandos, y sus resultados se muestran de inmediato. También veremos la salida de nuestros scripts.  
4. **Intérprete**: selecciona el tipo de intérprete para compilar. Haz clic en “Python 3.7.9”, luego selecciona **MicroPython (Raspberry Pi Pico)** en el menú emergente y confirma. También puedes ir a "Tools > Options > Interpreter".

![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_6.png)  
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_7.png)

#### 2. Conectar el Módulo Wio RP2040

Para conectar el módulo, asegúrate de extraer correctamente los pines USB y conéctalos a un cable de datos. Usa ese cable para conectar el módulo a la computadora y haz clic en el botón **"Restart backend"** en la barra de herramientas. Si la conexión fue exitosa, verás información sobre la versión de MicroPython y el nombre del dispositivo en la consola (Shell).

![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_8.png)

#### 3. Control de pines I/O

Puedes usar el pin GP13 con el siguiente código:

```
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

Presiona el ícono de reproducción en la barra de herramientas para ejecutar tu código.  
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_9.png)  
Puedes conectar un LED al pin GP13 para verificar si el pin funciona correctamente.

## Preguntas Frecuentes (FAQ)

### 1. Necesito que el código se ejecute automáticamente al iniciar.

Debes renombrar tu código como **`main.py`** y guardarlo en la placa de control principal. La próxima vez que la placa se reinicie, ejecutará automáticamente el programa `main.py`.

### 2. Después de ejecutar código con funciones de red, aparecen errores o bloqueos al ejecutar otros programas.

Puedes presionar el botón **RESET** de la placa de control principal para reiniciar el dispositivo. Luego vuelve a conectarte al editor Thonny para ejecutar otros programas.

### 3. Quiero ver más programas/proyectos de ejemplo.

Puedes consultar la wiki del **Wio RP2040 mini Dev Board**, donde encontrarás más proyectos de ejemplo que son compatibles con este módulo.

## Soporte Técnico y Discusión del Producto

Si tienes algún problema técnico, por favor envíalo a nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>