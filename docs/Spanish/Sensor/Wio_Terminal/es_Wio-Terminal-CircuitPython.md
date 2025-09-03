---
description: Wio Terminal with CircuitPython
title: CircuitPython en Wio Terminal
keywords:
- Wio_terminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-CircuitPython
last_update:
  date: 07/27/2025
  author: Guillermo
---

# CircuitPython en Wio Terminal

![](https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/cp-wt.png)

Esta wiki introduce cómo instalar y ejecutar la versión oficial de [CircuitPython](https://circuitpython.org/) de Adafruit Industries en el [Seeeduino Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html).

CircuitPython es un lenguaje de programación diseñado para simplificar el aprendizaje y la experimentación en placas microcontroladoras de bajo costo. Facilita el inicio sin necesidad de descargar software en el escritorio. Una vez configurada la placa, solo abre cualquier editor de texto y comienza a editar el código. Para más información, consulta [aquí](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython).

## Instalación de CircuitPython

- Descarga el [**Bootloader oficial de CircuitPython para Seeeduino Wio Terminal**](https://circuitpython.org/board/seeeduino_wio_terminal/). Se descargará un archivo `.uf2`.

- Conecta el Seeeduino Wio Terminal a tu PC mediante USB Tipo-C.

- Entra en modo bootloader deslizando el interruptor de encendido dos veces rápidamente. Para más detalles, consulta también [aquí](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/dfu.gif" /></div>

- Aparecerá una unidad externa llamada `Arduino` en tu PC. Arrastra el archivo `.uf2` descargado de CircuitPython a esta unidad.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2.png" /></div>

- Una vez cargado el bootloader de CircuitPython, desconecta y vuelve a conectar el USB Tipo-C. Aparecerá una nueva unidad externa llamada `CIRCUITPY`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Circuitpython-XIAO/df2-2.png" /></div>

- ¡Ahora CircuitPython está instalado en el Seeeduino Wio Terminal! Solo tienes que escribir tu programa en Python, nombrarlo `main.py` y copiarlo a la unidad `CIRCUITPY`.

La pantalla LCD del Wio Terminal también se ilumina, ya que CircuitPython soporta la pantalla LCD nativa.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/LCD.gif" /></div>

## Conceptos Básicos de CircuitPython

Ejemplo de un parpadeo (`Blink`) con CircuitPython:

**Nota:** simplemente copia y guarda el siguiente código con el nombre `main.py` y arrástralo a la unidad `CIRCUITPY`.

```py
import time
import board
from digitalio import DigitalInOut, Direction

led = DigitalInOut(board.D13)
led.direction = Direction.OUTPUT

while True:
    led.value = True
    print("LED ON")
    time.sleep(1)
    led.value = False
    print("LED OFF")
    time.sleep(1)
```

¡Verás que el LED integrado comienza a parpadear!

### Sensor de Luz Integrado

Ejecuta el siguiente código para obtener el valor del sensor de luz incorporado:

```py
import time
import board
from analogio import AnalogIn

analog_in = AnalogIn(board.LIGHT)  # Pin del sensor de luz en Wio Terminal

def get_voltage(pin):
    return (pin.value * 3.3) / 65536
 
while True:
    print("Voltaje Sensor de Luz: ", get_voltage(analog_in))
    time.sleep(0.1)
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/light.png" /></div>

Para más referencias sobre la API de CircuitPython, visita [**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials).

## Recursos

* [**CircuitPython Essentials**](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
