---
description: Seeed Studio XIAO ESP32C6 with CircuitPython
title: XIAO ESP32C6 con CircuitPython
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/esp32c6_circuitpython/title.png
slug: /xiao_esp32c6_with_circuitpython_spanish
last_update:
  date: 02/08/2025
  author: Guillermo
---

# **XIAO ESP32C6 de Seeed Studio con CircuitPython**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/title.png" /></div>

Esta wiki presenta cómo instalar y ejecutar CircuitPython oficial de Adafruit Industries en la placa de desarrollo Seeed Studio XIAO ESP32C6.

CircuitPython es un lenguaje de programación diseñado para simplificar la experimentación y el aprendizaje de la programación en placas de microcontroladores de bajo costo. Facilita el inicio sin necesidad de descargas previas en el escritorio. Una vez que configures tu placa, abre cualquier editor de texto y comienza a editar código. Para más información, consulta [aquí](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython).

## Instalación de CircuitPython

### Método 1: Línea de comandos esptool

#### Instalar Esptool

Si aún no has instalado esptool.py, puedes hacerlo usando pip en tu PC:

``` linux
pip install esptool
```

#### Descargar el firmware de XIAO ESP32C3 CircuitPython

Necesitas descargar el archivo binario del firmware desde [circuitpython.org](https://circuitpython.org/board/seeed_xiao_esp32c3/).  
Después de descargar el archivo binario correcto, navega a la carpeta y abre una terminal cmd allí.  
Hasta el borrador final, la última versión del archivo binario es:
```
adafruit-circuitpython-seeed_xiao_esp32c6-en_GB-9.1.1.bin
```

#### Conectar la XIAO ESP32C3 a tu PC

Debes presionar y mantener presionado el botón BOOT en tu placa XIAO ESP32C3 para ingresar al modo de 'bootloader' mientras conectas el cable USB tipo C a tu PC.

#### Verificar el puerto

Descubre todos los dispositivos seriales en tu PC.

* Linux

En Linux, puedes usar el comando *dmesg* para ver los dispositivos conectados:

```Linux
dmesg | grep tty
```

Alternativamente, puedes listar los dispositivos seriales usando *ls*:

```
ls /dev/ttyS* /dev/ttyUSB*
```

* Windows

En Windows, puedes verificar los puertos seriales a través del Administrador de Dispositivos. Busca la sección “Puertos (COM & LPT)” para ver los puertos seriales disponibles. También puedes usar el comando *mode* en el Símbolo del sistema para listar los puertos seriales:

```
mode
```

* macOS

En macOS, puedes listar los puertos seriales disponibles usando el comando *ls*:

```
ls /dev/cu*
```

Esto mostrará todos los puertos seriales disponibles.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/1.png" /></div>

:::Tip
Si el puerto está ocupado, puedes usar el siguiente comando para identificar y terminar los procesos que estén utilizando el puerto (en macOS):

Identificar los procesos que usan el puerto:
```
lsof | grep port
```
Este comando te mostrará los procesos que están utilizando el puerto especificado.

Para matar un proceso que está usando el puerto, usa el siguiente comando (reemplaza PID con el ID del proceso que encuentres):

```
kill -9 <PID>
```
Replace *PID* with the actual process ID found.


#### Borrar el flash
```linux
esptool.py --chip esp32c6 --port /dev/cu.usbmodem11301 erase_flash
```
Sustituye '/dev/cu.usbmodem11301' con el nombre de puerto correcto en tu sistema (por ejemplo, `COM3` en Windows, `/dev/ttyUSB0` en Linux).

### Escribir el flash

Flashear el firmware en XIAO ESP32C3:

```linux
esptool.py --chip esp32c3 --port /dev/cu.usbmodem11301 --baud 460800 write_flash -z 0x0 adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin
```

Nuevamente, reemplaza '/dev/cu.usbmodem11301' con el puerto correcto y 'adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin' con la ruta de tu archivo de firmware.

### Método 2: Web Serial esptool

El **WebSerial ESPTool** fue diseñado para ser una opción basada en la web para programar las placas microcontroladoras de la familia ESP de Espressif que tienen un cargador de arranque basado en serie. Permite borrar el contenido del microcontrolador y programar hasta 4 archivos en diferentes direcciones. Puedes obtener más información en [Web Serial ESPtool](https://learn.adafruit.com/circuitpython-with-esp32-quick-start/web-serial-esptool).

Después de completar estos pasos, puedes comenzar a compilar y cargar tus scripts utilizando la herramienta de tu preferencia en el XIAO ESP32C3.

### Editores recomendados para CircuitPython

Generalmente, cuando CircuitPython termina de instalarse, o cuando conectas una placa con CircuitPython ya instalado, la placa aparecerá en tu computadora como una unidad USB llamada **CIRCUITPY**.

Sin embargo, los microcontroladores ESP32 o ESP32-C3 que no soportan USB nativo no pueden presentar una unidad **CIRCUITPY**. En estas placas, hay formas alternativas de transferir y editar archivos. Puedes usar **[Thonny](https://thonny.org/)**, que utiliza comandos ocultos enviados al REPL para leer y escribir archivos. También puedes utilizar el **[CircuitPython web workflow](https://code.circuitpython.org/)**, introducido en CircuitPython 8. El flujo de trabajo web ofrece acceso WiFi basado en navegador al sistema de archivos de CircuitPython, consulta [cómo comenzar con el flujo de trabajo web usando el editor de código](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor/overview).

### 1. Thonny

Instala y abre Thonny, luego configura Thonny siguiendo las instrucciones:

```
pip install thonny
# abre thonny después de la instalación
thonny
```

Ve a **Run** → **Configure Interpreter**, y asegúrate de que la pestaña **Interpreter** en las opciones de Thonny se vea como se muestra a continuación. Selecciona **CircuitPython (generic)** y el puerto correcto:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/2.png" /></div>

Haz clic en "OK" en el cuadro de diálogo y deberías ver el shell de MicroPython en la parte inferior de la ventana de Thonny, como se muestra en la figura siguiente.
Luego, puedes usar el **R**ead-**E**valuate-**P**rint-**L**oop (REPL) para la conexión serial, lo que te permite ingresar líneas individuales de código y ejecutarlas de inmediato en el shell. Es realmente útil si te enfrentas a problemas con un programa en particular y no sabes por qué. Al ser interactivo, es excelente para probar nuevas ideas. Consulta [REPL](https://learn.adafruit.com/welcome-to-circuitpython/the-repl) para más información.

Para interactuar con el REPL, puedes usar *help()*, lo que te indicará por dónde empezar a explorar el REPL. Para ejecutar código en REPL, simplemente escríbelo junto al símbolo del REPL.

Para listar los módulos incorporados, escribe *help("modules")* y se mostrará una lista de todos los módulos básicos integrados en CircuitPython, incluyendo "*board*".
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/3.png" /></div>

Luego, puedes escribir "import board" en el REPL y presionar Enter. Después, escribe "dir(board)" en el REPL para obtener una lista de todos los pines de tu placa.

```
#check pin using following command.For details on REPL, see Welcome to CircuitPython! 
#enter to the shell of Thonny.
>>> import board
>>> dir(board)
['__class__', '__name__', 'A0', 'A1', 'A2', 'A4', 'A5', 'A6', 'D0', 'D1', 'D10', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'I2C', 'LP_I2C_SCL', 'LP_I2C_SDA', 'LP_UART_RXD', 'LP_UART_TXD', 'MISO', 'MOSI', 'MTCK', 'MTDI', 'MTDO', 'MTMS', 'RX', 'SCK', 'SCL', 'SDA', 'SPI', 'TX', 'UART', '__dict__', 'board_id']
```


### 2. CircuitPython Web Workflow
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/5.png" /></div>

El [Editor de Código de CircuitPython](https://code.circuitpython.org/) ofrece una experiencia más completa y enriquecedora al editar archivos en tu dispositivo basado en ESP32 que ejecuta la versión más reciente de CircuitPython. 

Este editor te permite editar archivos utilizando Bluetooth web, USB y el flujo de trabajo web a través de WiFi.

## Información de Pines y Puertos

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/5.png" /></div>

* Para más información, consulta la [visión general del hardware](https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/#hardware-overview)
* [Esquema de Seeed Studio XIAO ESP32C6](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO-ESP32-C6_v1.0_SCH_PDF_24028.pdf)

## Empezando con CircuitPython en el XIAO ESP32C3

### Red-WLAN

Para las placas sin USB nativo (como el ESP32-C3 o ESP32), necesitarás usar el REPL para conectarte a la red Wi-Fi. La función Wi-Fi se habilita cuando se agrega un archivo llamado *settings.toml* en la carpeta raíz del sistema de archivos de CircuitPython.
Crea el archivo *settings.toml* a través de REPL:

```r
f = open('settings.toml', 'w')
f.write('CIRCUITPY_WIFI_SSID = "wifissid"\n')
f.write('CIRCUITPY_WIFI_PASSWORD = "wifipassword"\n')
f.write('CIRCUITPY_WEB_API_PASSWORD = "webpassword"\n')
f.close()
```

* Reemplaza con el nombre de tu red Wi-Fi local *wifissid*.
* Reemplaza con la contraseña de tu red Wi-Fi local *password*.
* La otra contraseña, *webpassword*, se usa cuando accedes a la placa a través de un navegador web. Establece esta contraseña con lo que desees.

Una vez conectado, puedes presionar el botón **Reset** para reiniciar el firmware, luego presiona **Enter** varias veces para llegar al prompt de REPL. Después, vuelve a conectar el dispositivo a Thonny, y la dirección IP de tu XIAO ESP32C3 aparecerá.

:::note
No olvides, el ESP32 no es compatible con redes de 5 GHz, así que utiliza tu SSID de 2.4 GHz si tienes dos redes.
:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/7.png" /></div>

### Retraso y temporización 

El módulo *time*:

```python
import time
time.sleep(1)           # dormir 1 segundo
time.sleep_ms(500)      # dormir 500 milisegundos
time.sleep_us(10)       # dormir 10 microsegundos
start = time.ticks_ms() # contador de milisegundos
delta = time.ticks_diff(time.ticks_ms(), start) # calcular diferencia de tiempo
```

### Pines y GPIO

Puedes usar el módulo "*board*" y "*microcontroller*" para controlar los pines GPIO con el siguiente código y conectar un LED al pin D5:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/16.png" /></div>

```python 
# usando el módulo board
import board
import digitalio
import time

led = digitalio.DigitalInOut(board.D5)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True  # encender el LED
    time.sleep(1)
    led.value = False # apagar el LED
    time.sleep(1)
    
# usando el módulo microcontroller
import microcontroller
import digitalio
import time

led = digitalio.DigitalInOut(microcontroller.pin.GPIO7)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True  # encender el LED
    time.sleep(1)
    led.value = False # apagar el LED
    time.sleep(1)
```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/9.png" /></div>

### UART (bus serial)

Usando el módulo *busio*:

```python
import board
import busio

# inicializar UART
uart = busio.UART(board.TX, board.RX, baudrate=9600)

# enviar datos
uart.write(b"Hello UART\n")

# recibir datos
while True:
    if uart.in_waiting > 0:
        data = uart.read()
        print("Recibido:", data)

```

El XIAO ESP32C6 tiene un UART hardware. Los pines listados a continuación son:

| UART       | Pin   | GPIO  |
|------------|-------|-------|
| LP_UART_TXD | A5    | GPIO5 |
| LP_UART_RXD | A4    | GPIO4 |

### Modulación por Ancho de Pulso (PWM)

Usando el módulo *pwmio*:

```python
import board
import pwmio
from digitalio import DigitalInOut
import time

# inicializar PWM
pwm = pwmio.PWMOut(board.D5, frequency=5000, duty_cycle=0)

# un LED atenuado
while True:
    for duty_cycle in range(0, 65535, 1000):
        pwm.duty_cycle = duty_cycle
        time.sleep(0.1)
```

### ADC(analog to digital conversion)
Using the *analogio* module:
```python
import board
import analogio
import time

# initialise ADC
adc = analogio.AnalogIn(board.A0)

while True:
    value = adc.value
    print("ADC Value:", value)
    time.sleep(1)

```
### SPI

```python
import board
import busio
import digitalio

# Inicializar SPI
spi = busio.SPI(board.SCK, board.MOSI, board.MISO)
# Llamar a try_lock (y luego unlock) para asegurarte de que eres el único usuario del bus SPI
spi.try_lock()

# Elegir un pin de selección de chip
cs = digitalio.DigitalInOut(board.D3)
cs.direction = digitalio.Direction.OUTPUT
cs.value = True

# Asegurarse de que la selección de chip esté activa (baja) antes de comunicar
cs.value = False

# Enviar y recibir datos
data_out = bytearray([0x01, 0x02, 0x03])
data_in = bytearray(3)

try:
    # Escribir y leer datos
    spi.write_readinto(data_out, data_in)
    print("Recibido:", data_in)
finally:
    # Asegurarse de que la selección de chip esté inactiva (alta) después de la comunicación
    cs.value = True
```
The XIAO ESP32C6 have one hardware SPI. the pins listed below:

| SPI  | Pin |
|------|-----|
| SCK  | D8  |
| MOSI | D10 |
| MISO | D9  |

### I2C

```python
import board
import busio

# Inicializar I2C
i2c = busio.I2C(board.SCL, board.SDA, frequency=400000)
```

### Placa de Expansión Base para XIAO

*Requisitos previos*:

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C6<br /> with soldered header</th>
      <th>Expension Board Base for XIAO</th>
      <th>Grove Light sensor</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/15.png" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/16.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

#### Leer la información del sensor de luz

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/9.png" /></div>

```python
import time
import board
import analogio

# Inicializar la entrada analógica en A0
analog_in = analogio.AnalogIn(board.A0)

def obtener_voltaje(pin):
    return (pin.value * 3.3) / 65536

while True:
    # Leer el valor analógico crudo
    raw_value = analog_in.value
    # Convertir el valor crudo a voltaje
    voltage = obtener_voltaje(analog_in)
    
    # Imprimir el valor crudo y el voltaje en la consola serial
    print("[Luz] Valor crudo: {:5d} Voltaje: {:.2f}V".format(raw_value, voltage))
    
    # Esperar un corto período de tiempo antes de leer nuevamente
    time.sleep(1)
```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/11.png" /></div>

#### Light up OLED screen
#### Encender la pantalla OLED

**Descargar y Extraer el Paquete de Bibliotecas**:
* Ve a la [biblioteca](https://circuitpython.org/libraries) y descarga el paquete de bibliotecas para CircuitPython. Para instalarlo, descarga el paquete adecuado para tu versión de CircuitPython.

**Copiar las Bibliotecas a CIRCUITPY**:

* Extrae el archivo ZIP del paquete de bibliotecas. Encontrarás una carpeta llamada lib con varios archivos *.mpy*.
* Abre Thonny-->Ver-->Archivos, y luego copia los archivos .mpy necesarios y la carpeta lib al dispositivo CircuitPython/lib.
Necesitarás instalar manualmente las bibliotecas necesarias desde el paquete:
  * adafruit_ssd1306
  * adafruit_bus_device
  * adafruit_register
  * adafruit_framebuf.mpy
  
**Copiar font5x8.bin a CIRCUITPY**:
* Descarga el archivo font5x8.bin desde [aquí](https://github.com/adafruit/Adafruit_CircuitPython_framebuf/blob/main/examples/font5x8.bin).
* Abre Thonny --> Vista --> Archivos, y luego copia el archivo font5x8.bin al dispositivo CircuitPython.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/12.png" /></div>
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/13.png" /></div>
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/14.png" /></div>

**Crea tu Código CircuitPython**:

* Crea un archivo code.py (o main.py). Este archivo debe contener tu código CircuitPython.

```python 
import board
import busio
import displayio
import adafruit_ssd1306
import terminalio

# Inicializar I2C
i2c = busio.I2C(board.SCL, board.SDA)

# Definir los parámetros de la pantalla
oled_width = 128
oled_height = 64

# Inicializar la pantalla OLED
oled = adafruit_ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)

# Rellenar la pantalla con el color 0
oled.fill(0)
# Establecer el primer píxel en blanco
oled.pixel(0, 0, 1)
oled.show()
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/esp32c6_circuitpython/15.png" /></div>

## "Desinstalar" CircuitPython

Muchas de nuestras placas pueden usarse con múltiples lenguajes de programación. Por ejemplo, el Circuit Playground Express puede usarse con MakeCode, Code.org CS Discoveries, CircuitPython y Arduino. Puede que desees volver a Arduino o MakeCode. No hay nada que desinstalar. CircuitPython es "solo otro programa" que se carga en tu placa. Así que simplemente puedes cargar otro programa (Arduino o MakeCode) y reemplazará a CircuitPython.

### Respalda tu Código

Antes de reemplazar CircuitPython, no olvides hacer una copia de seguridad del código que tienes en la unidad CIRCUITPY. Esto significa tu *code.py* y cualquier otro archivo, como la carpeta lib, etc. Puedes perder estos archivos al eliminar CircuitPython, ¡así que las copias de seguridad son clave! Solo arrastra los archivos a una carpeta en tu computadora portátil o de escritorio como lo harías con cualquier unidad USB.

### Pasando a Arduino

Si deseas usar Arduino en su lugar, solo usa el IDE de Arduino para cargar un programa de Arduino. Aquí tienes un ejemplo de cómo cargar un programa simple de "Blink" en Arduino, pero no tienes que usar este programa en particular.
Comienza conectando tu placa y haciendo doble clic en el botón de reinicio hasta que se enciendan los LED(s) a bordo.

¡Gracias por leer este artículo! No dudes en compartir tus pensamientos en los comentarios.

## Recursos

* [El archivo binario del firmware](https://circuitpython.org/board/seeed_xiao_esp32c3/) para XIAO ESP32C3 con CircuitPython
* [El paquete de bibliotecas para CircuitPython](https://circuitpython.org/libraries)

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte el mejor soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>