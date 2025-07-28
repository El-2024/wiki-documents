---
description: The description of ArduPy
title:  ArduPy con Wio Terminal
keywords:
- Software
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ArduPy
last_update:
  date: 2025-07-27
  author: Guillermo
---

# Guía rápida de inicio con ArduPy

Para comenzar con ArduPy, primero necesitas instalar **`aip` - ArduPy Integrated Platform**, una utilidad para desarrollar con ArduPy e interactuar con placas compatibles.
`aip` es una herramienta de línea de comandos sencilla que te permite personalizar y compilar firmware ArduPy sin necesidad de conocer detalles internos del sistema.

## Placas soportadas

* [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

* [**Seeeduino XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

## Inicio rápido con ArduPy

### Paso 1: Entrar en modo bootloader

Conecta tu dispositivo al PC vía USB y resetea rápidamente para entrar en modo bootloader:

* Para **Wio Terminal**, consulta [aquí](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq).
* Para **Seeeduino XIAO**, consulta [aquí](https://wiki.seeedstudio.com/Seeeduino-XIAO/#reset).

Aparecerá una unidad USB llamada **`Arduino`** en tu PC.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/USBdrive.png"/></div>

### Paso 2: Descargar firmware ArduPy UF2

Descarga el firmware UF2 para tu dispositivo:

* [Wio Terminal UF2](https://files.seeedstudio.com/wiki/Wio-Terminal/res/ArduPy_wio_terminal_lastest.uf2)
* [Seeeduino XIAO UF2](https://files.seeedstudio.com/wiki/Wio-Terminal/res/ArduPy_xiao_lastest.uf2)

Guarda el archivo en la unidad `Arduino`.

### Paso 3: Flashear el firmware

Arrastra el archivo `.UF2` descargado a la unidad `Arduino`. La unidad desaparecerá indicando que el firmware se ha cargado. Reinicia la placa.

### Paso 4: Parpadeo de prueba

Aparecerá una unidad USB llamada **`ARDUPY`**. Abre `main.py` con tu editor favorito (VS Code, Atom, Sublime, etc.) y reemplaza el contenido por:

```py
from machine import Pin, Map
import time

LED = Pin(Map.LED_BUILTIN, Pin.OUT)

while True:
    LED.on()
    time.sleep(1)
    LED.off()
    time.sleep(1)
```

Guarda y verás que el LED incorporado parpadea.

## Instalación de `aip` (ArduPy Integrated Platform)

### macOS

Ejecuta en Terminal:

```sh
pip3 install ardupy-aip
```

> **Nota:** Asegúrate de tener Python 3 instalado. Puedes instalarlo con Homebrew (`brew install python3`) o desde la [página oficial de Python](https://www.python.org/downloads/mac-osx/).

### Windows

* Descarga el ejecutable para Windows (64-bit) y colócalo en un directorio incluido en tu PATH:
  [aip.exe para Windows 64-bit](https://files.seeedstudio.com/ardupy/tools/aip-0.5.0/aip.exe)

* O instala usando Python 3 y pip:

```sh
pip3 install ardupy-aip
```

### Linux

Ejecuta en Terminal:

```sh
pip3 install ardupy-aip
```

> **Nota:** Asegúrate de tener Python 3 y pip3 actualizados.

## Comandos básicos de `aip`

Muestra ayuda:

```sh
aip help
```

Mostrar información de la placa y firmware:

```sh
aip board
```

Instalar librerías ArduPy:

```sh
aip install <URL o nombre de biblioteca>
# Ejemplo:
aip install Seeed-Studio/seeed-ardupy-ultrasonic-sensor
```

Desinstalar librerías:

```sh
aip uninstall <URL o nombre de biblioteca>
```

Listar librerías instaladas:

```sh
aip list
```

Construir firmware para la placa (elige entre `xiao` o `wio_terminal`):

```sh
aip build --board=xiao
aip build --board=wio_terminal
```

Flashear firmware a la placa:

```sh
aip flash
```

> Usa `-h` para más opciones, por ejemplo: `aip flash -h`

Acceder a la shell interactiva (explorador de archivos y REPL):

```sh
aip shell
```

Ingresar directamente al modo REPL:

```sh
aip shell -c "repl"
```

<div align="center"><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-shell.png"/></div>

Ejecutar script Python en la placa:

```sh
aip shell -n -c "runfile <ruta_a_tu_script.py>"
```

Subir archivo a la placa:

```sh
aip shell -n -c "put <ruta_a_tu_script.py>"
```

## Primeros scripts

* **`boot.py`**: script que se ejecuta automáticamente al arrancar el dispositivo. Debe estar en la raíz.

* **`main.py`**: script principal que puede ser recargado cuando se modifica.

# Uso de `arduPy-mpfshell`

Dentro de `arduPy-mpfshell` puedes usar el comando `help` para listar los comandos disponibles. Algunos comandos comunes:

* Listar archivos en el dispositivo:

```sh
ls
```

* Borrar un archivo o carpeta:

```sh
rm <Archivo/Directorio>
```

* Subir un archivo local (por ejemplo `boot.py`) al dispositivo:

```sh
put <RutaLocalArchivo> [Destino]
```

* Ejecutar un archivo (por ejemplo `test.py`) en el dispositivo:

```sh
execfile test.py
```

<div align="center"><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-mpfshell.png"/></div>

# Incluir otras librerías ArduPy con `aip` — Ejemplo con Wio Terminal

1. Instala la librería ArduPy desde GitHub:

```sh
aip install Seeed-Studio/seeed-ardupy-ultrasonic-sensor
```

2. Construye el firmware para Wio Terminal:

```sh
aip build --board=wio_terminal
```

3. Flashea el firmware resultante a tu placa:

```sh
aip flash
```

> Durante el proceso de build, `aip` mostrará el comando para flashear. Debes tener conectada la placa para evitar errores.

<div align="center"><img src="https://s3-us-west-2.amazonaws.com/files.seeedstudio.com/wiki/Wio-Terminal/img/aip-install-new.gif"/></div>

## Ejemplo de uso de librería

Sube tu script Python al dispositivo:

```sh
aip shell -n -c "put /Users/ansonhe/Desktop/ur.py"
```

Ejemplo `ur.py` para usar el sensor ultrasónico:

```py
from arduino import grove_ultra_ranger
import time

ur = grove_ultra_ranger(0)

while True:
    print("Distancia a obstáculo delante:", ur.cm, "cm")
    time.sleep(1)
```

> Cambia la ruta `/Users/ansonhe/Desktop/` a la que uses en tu sistema.

Consulta más ejemplos en el repositorio: [seeed-ardupy-ultrasonic-sensor](https://github.com/Seeed-Studio/seeed-ardupy-ultrasonic-sensor).

# Referencias comunes en ArduPy

## Tiempo y delays

```py
import time

time.sleep(1)           # Pausa 1 segundo
time.sleep_ms(500)      # Pausa 500 milisegundos
time.sleep_us(500)      # Pausa 500 microsegundos

# Contadores de tiempo
time.ticks_ms()          # Retorna contador en ms
start = time.ticks_us()  # Retorna contador en us
time.ticks_diff(time.ticks_us(), start)  # Diferencia entre contadores
```

> Usa TAB para autocompletar funciones en REPL.

Más info: [MicroPython utime](https://docs.micropython.org/en/latest/library/utime.html)

## Pines y GPIO

### Diagramas de pines

* Seeeduino XIAO
  ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout.jpg)

* Wio Terminal
  ![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg)

### Uso básico de GPIO

```py
from machine import Pin

p3 = Pin(3, Pin.OUT)      # Pin 3 como salida
p3.on()                   # Pin 3 en ALTO
p3.off()                  # Pin 3 en BAJO
p3.value(1)               # Pin 3 en ALTO usando value()

p5 = Pin(5, Pin.IN)       # Pin 5 como entrada
val = p5.value()          # Leer valor de pin 5

p3 = Pin(3, Pin.OUT, value=1)            # Salida en ALTO desde inicio
p5 = Pin(5, Pin.IN, Pin.PULL_UP)         # Entrada con resistencia pull-up
```

## Map (mapeo de pines especiales)

ArduPy permite usar nombres mapeados desde Arduino para periféricos:

```py
from machine import Pin, Map
import time

LED = Pin(Map.LED_BUILTIN, Pin.OUT)  # LED integrado como salida

while True:
    LED.on()
    time.sleep(1)
    LED.off()
    time.sleep(1)
```

---

## PWM (Modulación por ancho de pulso)

```py
from machine import Pin, PWM

pwm0 = PWM(Pin(13))      # PWM en pin 13
pwm0.freq()              # Leer frecuencia actual
pwm0.freq(1000)          # Setear frecuencia a 1000Hz
pwm0.duty()              # Leer ciclo de trabajo actual
pwm0.duty(200)           # Setear ciclo de trabajo a 200
pwm0.deinit()            # Apagar PWM en el pin

# Crear PWM con parámetros en una línea
pwm1 = PWM(Pin(16), freq=1000, duty=200)
```

## ADC

Para usar el ADC en el dispositivo, debes usar los pines analógicos. Por ejemplo, el Pin 13(A0) en Wio Terminal.

**Nota: El canal ADC en Wio Terminal es de 10 bits (0-1023).**

- Uso del ADC

```py
from machine import ADC, Pin

adc = ADC(Pin(13))      # Creando ADC en el Pin 13
adc.read()              # Leyendo valor ADC, 0 ~ 1023
```

## DAC

Para usar el DAC en el dispositivo, debes usar los pines DAC o los pines PWM en la placa. Por ejemplo, el Pin 11(DAC0) en Wio Terminal.

**Nota: El canal DAC en Wio Terminal es de 12 bits (0-4095).**

* Uso del DAC:

```py
from machine import DAC, Pin

dac0 = DAC(Pin(11))      # Creando DAC en el Pin 11
dac0.write(512)          # Escribiendo valor al DAC, 512/4096*3.3 = 0.4125 V

dac1 = DAC(Pin(26), resolution=10)  # Creando DAC en el Pin 26 con resolución de 10 bits
dac1.write(1023)                    # Escribiendo salida máxima al DAC, 3.3V
```

**Nota:** Al usar DAC en pines PWM, la resolución del canal será solo de 8 bits.

```py
# Usando DAC en pines PWM
from machine import DAC, Pin

dac2 = DAC(Pin(16))     # Creando DAC en el Pin 16
dac2.write(128)         # Escribiendo valor al DAC, 128/255*3.3 = 1.65V
```

## LCD

Para Wio Terminal, la pantalla TFT LCD se puede usar de la siguiente manera. Para más referencias sobre LCD, por favor visita [**ArduPy LCD API Reference**](https://wiki.seeedstudio.com/ArduPy-LCD/).

* Uso del módulo LCD:

```py
from machine import LCD

lcd = LCD()                            # Inicializar LCD y encender la luz de fondo
lcd.fillScreen(lcd.color.BLACK)        # Llenar la pantalla LCD con color negro
lcd.setTextSize(2)                     # Configurar tamaño de fuente a 2
lcd.setTextColor(lcd.color.GREEN)      # Configurar color del texto a verde
lcd.drawString("Hello World!", 0, 0)   # Imprimir Hello World en (0, 0)
```

Nota: Usa **`tab`** para ver las funciones disponibles.

---

## Inicio rápido en el IDE

Como se mencionó antes, puedes usar tu editor preferido para escribir tu programa en Python. Para ejecutar y probar el programa fácilmente, solo tienes que editar el archivo `main.py` en la ubicación USB `ARDUPY` (función de recarga automática). Aquí se muestra otro ejemplo rápido usando **Wio Terminal**:

> Asegúrate de haber seguido los pasos anteriores antes de la siguiente sesión.

1. Abre `main.py` en la ubicación USB `ARDUPY`.

2. Copia el siguiente código en `main.py` y guarda el archivo.

```py
from machine import LCD
import time, math

DEG2RAD = 0.0174532925
lcd = LCD()
lcd.fillScreen(lcd.color.BLACK)

# DIBUJAR SEGMENTOS DE CÍRCULO
# x,y == coordenadas del centro del círculo
# start_angle = 0 - 359
# sub_angle   = 0 - 360 = ángulo subtendido
# r = radio
# colour = valor de color de 16 bits

def fillSegment(x, y, startAngle, subAngle, r, color):
    # Calcular el primer par de coordenadas para el inicio del segmento
    sx = math.cos((startAngle - 90) * DEG2RAD)
    sy = math.sin((startAngle - 90) * DEG2RAD)
    x1 = sx * r + x
    y1 = sy * r + y

    # Dibujar bloques de color cada grado
    for i in range(startAngle, startAngle+subAngle, 1):
        # Calcular par de coordenadas para el fin del segmento
        x2 = math.cos((i + 1 - 90) * DEG2RAD) * r + x
        y2 = math.sin((i + 1 - 90) * DEG2RAD) * r + y

        lcd.fillTriangle(int(x1), int(y1), int(x2), int(y2), x, y, color)

        # Copiar fin del segmento como inicio para el siguiente segmento
        x1 = x2
        y1 = y2

def main():
    # Dibujar 4 segmentos de gráfico circular
    fillSegment(160, 120, 0, 60, 100, lcd.color.RED)
    fillSegment(160, 120, 60, 30, 100, lcd.color.GREEN)
    fillSegment(160, 120, 60 + 30, 120, 100, lcd.color.BLUE)
    fillSegment(160, 120, 60 + 30 + 120, 150, 100, lcd.color.YELLOW)
    time.sleep(1)
    fillSegment(160, 120, 0, 360, 100, lcd.color.BLACK)

if __name__ == "__main__":
    while True:
        main()
```

3. ¡Deberías ver que el Wio Terminal comienza a dibujar el gráfico circular en la pantalla al instante!

La recarga automática puede ser muy útil al probar programas pequeños.

## Soporte Técnico

Por favor envía cualquier problema técnico en nuestro [foro](https://forum.seeedstudio.com/)<br /><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a>
