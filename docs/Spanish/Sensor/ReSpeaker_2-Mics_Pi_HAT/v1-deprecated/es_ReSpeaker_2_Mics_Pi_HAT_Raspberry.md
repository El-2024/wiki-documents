---
description: Getting Started with Raspberry Pi
title: Primeros Pasos con Raspberry Pi
keywords:
- ReSpeaker_2-Mics_Pi_HAT
image: https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/social-image.webp
slug: /es/ReSpeaker_2_Mics_Pi_HAT_Raspberry
last_update:
  date: 07/19/2023
  author: Guillermo
---

:::caution
Esta wiki está escrita para ReSpeaker 2-Mics Pi HAT **v1**.  
Para distinguir entre los dispositivos v1 y v2, por favor consulta [Cómo distinguir las revisiones de hardware de ReSpeaker 2-Mics Pi HAT](/how-to-distinguish-respeaker_2-mics_pi_hat-hardware-revisions).
:::

### Instalación y configuración del driver

**1. Conectar ReSpeaker 2-Mics Pi HAT a Raspberry Pi**

Monta el ReSpeaker 2-Mics Pi HAT en tu Raspberry Pi, asegurándote de que los pines estén correctamente alineados al apilar el ReSpeaker 2-Mics Pi HAT.

Conexión en Raspberry Pi

![connection picture1](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/pi.png)

Conexión en Raspberry Pi Zero

![connection picture2](https://files.seeedstudio.com/products/107100001/01.png)

**2. Configurar el driver en Raspberry Pi**

Asegúrate de que estás utilizando [la última versión de Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspbian/) en tu dispositivo. *(actualizado al 2021.05.01)*

- Paso 1. Obtén el código fuente de Seeed voice card, instálalo y reinicia.

```bash
git clone https://github.com/HinTak/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
sudo reboot now
```


<!--
:::note
If your raspberry pi Linux kernel version is [rpi-6.6.y](https://github.com/raspberrypi/linux/tree/rpi-6.6.y) (like Raspberry Pi 5), you may encounter build errors due to changes in simple_card_utils.h[simple_card_utils.h](https://github.com/raspberrypi/linux/blob/rpi-6.6.y/include/sound/simple_card_utils.h), To fix this, make the following changes to seeed-voicecard.c.

- open the file seeed-voicecard/seeed-voicecard.c
- Replace all instances of "simple_util_" prefix with "asoc_simple_"
- Replace all instances of: "rtd->id" with "rtd->num"
- Save and exit
- Install again and reboot

```bash
sudo ./install.sh
sudo reboot now
```
:::
-->

- Paso 2. Verifica que el nombre de la tarjeta de sonido coincida con el código fuente **seeed-voicecard** usando los comandos: ```aplay -l``` y ```arecord -l```.

```shell
pi@raspberrypi:~/Desktop/mic_hat $ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: Headphones [bcm2835 Headphones], device 0: bcm2835 Headphones [bcm2835 Headphones]
  Subdevices: 8/8
  Subdevice #0: subdevice #0
  Subdevice #1: subdevice #1
  Subdevice #2: subdevice #2
  Subdevice #3: subdevice #3
  Subdevice #4: subdevice #4
  Subdevice #5: subdevice #5
  Subdevice #6: subdevice #6
  Subdevice #7: subdevice #7
card 1: vc4hdmi0 [vc4-hdmi-0], device 0: MAI PCM i2s-hifi-0 [MAI PCM i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: vc4hdmi1 [vc4-hdmi-1], device 0: MAI PCM i2s-hifi-0 [MAI PCM i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 3: seeed2micvoicec [seeed-2mic-voicecard], device 0: bcm2835-i2s-wm8960-hifi wm8960-hifi-0 [bcm2835-i2s-wm8960-hifi wm8960-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0

pi@raspberrypi:~/Desktop/mic_hat $ arecord -l
**** List of CAPTURE Hardware Devices ****
card 3: seeed2micvoicec [seeed-2mic-voicecard], device 0: bcm2835-i2s-wm8960-hifi wm8960-hifi-0 [bcm2835-i2s-wm8960-hifi wm8960-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

- Paso 3. Prueba el micrófono; escucharás lo que dices a través de los micrófonos (no olvides conectar unos auriculares o un altavoz):

```bash
arecord -D "plughw:3,0" -f S16_LE -r 16000 -d 5 -t wav test.wav
aplay -D "plughw:3,0" test.wav
```

**Nota:** `"plughw:3,0"` es el número de dispositivo para grabación (o reproducción), dependiendo de tu sistema este número puede variar (por ejemplo, en Raspberry Pi Zero será `0` porque no tiene conector de audio). Puedes verificar el número ejecutando los comandos `arecord -l` y `aplay -l`.

### 3. Configurar ajustes de sonido y ajustar el volumen con alsamixer

`alsamixer` es un programa gráfico para controlar el mezclador del sistema de sonido ALSA (Advanced Linux Sound Architecture), que se utiliza para configurar ajustes de sonido y modificar el volumen.

```bash
pi@raspberrypi:~ $ alsamixer
```

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/alsamixer.png)

- Las teclas **Izquierda** y **Derecha** se usan para seleccionar el canal o dispositivo.
- Las teclas **Arriba** y **Abajo** controlan el volumen del dispositivo seleccionado.
- Para salir, presiona **ALT + Q** o la tecla **Esc**.

[Más información](https://en.wikipedia.org/wiki/Alsamixer)

:::caution
Por favor, utiliza la tecla **F6** para seleccionar primero el dispositivo **seeed-2mic-voicecard**.
:::

## Descripción general de uso

Para ejecutar los ejemplos que siguen, clona el [repositorio](https://github.com/respeaker/mic_hat.git) en tu Raspberry Pi.

```bash
git clone https://github.com/respeaker/mic_hat.git
cd mic_hat
```

Todos los scripts de Python mencionados en los ejemplos están dentro de este repositorio. Para instalar las dependencias necesarias, desde la carpeta `mic_hat`, ejecuta:

```bash
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

## APA102 LEDs

Cada LED APA102 a bordo tiene un chip controlador adicional. Este chip se encarga de recibir el color deseado a través de sus líneas de entrada, y mantener ese color hasta que se reciba un nuevo comando.

```bash
python3 interfaces/pixels.py
```

<video width="512" height="384" controls preload="auto">
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.mp4" />
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.webmhd.webm" />
</video>

## User Button

Hay un botón de usuario a bordo conectado al GPIO17. Vamos a detectarlo con Python usando RPi.GPIO.

Ejecuta el siguiente código desde la carpeta `mic_hat` del repositorio que clonaste en el Paso 4.

```bash
python3 interfaces/button.py
```

El programa debería mostrar "on" cuando presiones el botón:

```bash
python3 button.py
```

Una sálida como:

```txt
pi@raspberrypi:~ $ python3 button.py
off
off
on
on
off
```

## Grabación de sonido con Python

Utilizamos la librería [PyAudio](https://people.csail.mit.edu/hubert/pyaudio/) para grabar sonido con Python.

Primero, ejecuta el siguiente script para obtener el índice del dispositivo de la tarjeta ReSpeaker 2 Mic:

```bash
python3 recording_examples/get_device_index.py
```

Verás un resultado como este:

```bash
Input Device id  2  -  seeed-2mic-voicecard: - (hw:1,0)
```

Luego, para grabar sonido, abre el archivo ```recording_examples/record.py``` con nano o cualquier editor y cambia  `RESPEAKER_INDEX = 2` por el índice que corresponda a tu sistema. Después ejecuta el script para grabar:

```bash
python3 recording_examples/record.py
```

Si quieres extraer sólo el canal 0 de los dos canales, revisa el archivo ```record_one_channel.py```. Para extraer el canal X cambia el slicing [0::2] a [X::2].

```bash
python3 recording_examples/record_one_channel.py
```

Para reproducir las grabaciones puedes usar el comando aplay:

```bash
aplay -f cd -Dhw:1 output.wav #for Stereo sound
aplay -D plughw:1,0 output_one_channel.wav #for Mono sound from one channel
```

O también puedes usar el script recording_examples/play.py para reproducir los archivos .wav con PyAudio.

```bash
python3 recording_examples/play.py path-to-wav-file
```

Asegúrate de especificar el índice correcto del dispositivo de salida en play.py para evitar que PyAudio se congele.

### Picovoice con ReSpeaker 2-Mic Pi HAT y Raspberry Pi

**Paso 1.** Sigue el **tutorial paso a paso anterior de ReSpeaker 2-Mic Pi HAT con Raspberry Pi** antes de continuar con lo siguiente.

**Nota:** Asegúrate de que los LEDs `APA102` funcionan correctamente en el ReSpeaker 2-Mic Pi HAT con Raspberry Pi.

**Paso 2.** Ejecuta el siguiente comando en la terminal para **instalar la demo de Picovoice para ReSpeaker 2-Mic Pi HAT**.

```bash
pip3 install pvrespeakerdemo
```

**Nota:** En una instalación fresca del sistema operativo Raspberry Pi OS, puede que veas esta advertencia al instalar la demo:  
*The script picovoice_respeaker_demo is installed in '/home/pi/.local/bin' which is not on PATH.*  

Esto significa que para poder ejecutar la demo, debes agregar `/home/pi/.local/bin` a tu variable PATH del sistema.

```bash
echo 'export PATH="$HOME/bin:$HOME/.local/bin:$PATH"' >> ~/.bashrc
```

#### Uso de la Demo

La demo utiliza el ReSpeaker 2-Mic Pi HAT en una Raspberry Pi junto con la tecnología Picovoice para controlar los LEDs.  
**Esta demo se activa con la palabra de activación "`Picovoice`" y estará lista para recibir comandos posteriores, como encender y apagar las luces, o cambiar el color de los LEDs.**

Una vez finalizada la instalación, ejecuta el siguiente comando en la terminal para iniciar la demo:

```sh
picovoice_respeaker_demo
```

#### Comandos de Voz

Los comandos de voz disponibles en esta demo son:

- **Picovoice**

Activa la escucha para comandos siguientes.

```txt
wake word
```

- **Turn on the lights**

Enciende las luces y muestra el siguiente mensaje en la terminal:

```json
{
    is_understood : 'true',
    intent : 'turnLights',
    slots : {
        'state' : 'on',
    }
}
```

La lista de comandos se muestra en la terminal:

```yaml
context:
  expressions:
    turnLights:
      - "[switch, turn] $state:state (all) (the) [light, lights]"
      - "[switch, turn] (all) (the) [light, lights] $state:state"
    changeColor:
      - "[change, set, switch] (all) (the) (light, lights) (color) (to) $color:color"
  slots:
    state:
      - "off"
      - "on"
    color:
      - "blue"
      - "green"
      - "orange"
      - "pink"
      - "purple"
      - "red"
      - "white"
      - "yellow"
```

also, you can try this command to change the colour by:

- **Picovoice, set the lights to orange**

Apaga las luces con el comando:

- **Picovoice, turn off all lights**

**Demostración en Video**

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/mPfZZQXjWMI" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

### Código Fuente de la Demo

La demo está construida con el **[Picovoice SDK](https://github.com/Picovoice/picovoice)**. El código fuente está disponible en [GitHub](https://github.com/Picovoice/picovoice/tree/master/demo/respeaker).

#### Palabras de Activación Diferentes

El [**Picovoice SDK**](https://github.com/Picovoice/picovoice) incluye palabras de activación gratuitas bajo licencia Apache 2.0, incluyendo asistentes de voz populares (por ejemplo, "**`Hey Google`**", "**`Alexa`**") y algunas divertidas como "**`Computer`**" y "**`Jarvis`**".

### Comandos de Voz Personalizados

Los comandos de iluminación están definidos por un contexto *Speech-to-Intent* de Picovoice. Puedes diseñar y entrenar contextos escribiendo la gramática permitida usando Picovoice Console. Puedes probar los cambios en el navegador usando el botón de micrófono.

Visita [Picovoice Console](https://picovoice.ai/console/) y crea una cuenta. Usa el editor **Rhino Speech-to-Intent** para crear contextos y entrenarlos para Raspberry Pi.

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/respeaker_demo_console_edit.gif"/></div>

### Ejemplos con Múltiples Palabras de Activación

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/GqxWHoQ560g" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

### Porcupine

**Porcupine** es un motor de palabra de activación ligero y de alta precisión, ideal para aplicaciones siempre en escucha y activación por voz.  

Características:

- Utiliza redes neuronales profundas entrenadas en ambientes reales.
- Compacto y eficiente en cómputo, perfecto para IoT.
- Multiplataforma: Raspberry Pi, BeagleBone, Android, iOS, Linux, macOS, Windows, navegadores web, etc.
- Escalable para múltiples comandos siempre escuchando sin aumentar el consumo.
- Auto-servicio: los desarrolladores pueden entrenar modelos personalizados usando [Picovoice Console](https://picovoice.ai/console/).

Para demostrar las capacidades de Picovoice, también preparamos ejemplos con múltiples palabras de activación usando ReSpeaker 2-Mic Pi HAT y Raspberry Pi, donde diferentes palabras activan tareas específicas.

*Este paquete incluye una demo en línea de comandos para controlar los LEDs del ReSpeaker 2-Mic Pi HAT usando Porcupine.*

#### Multi Wake Word Getting Started

Ejecuta el siguiente comando en la terminal para instalar el driver de la demo:

```sh
pip3 install ppnrespeakerdemo
```

#### Multi Wake Word Usage

Ejecuta en la terminal tras la instalación del driver:

```sh
porcupine_respeaker_demo
```

Espera que la demo se inicialice y muestre `[Listening]` en la terminal. Di:

> Picovoice

La demo responderá:

```text
detected 'Picovoice'
```

Las luces se configurarán en color `green`. Luego di:

> Alexa

Las luces cambiarán a `yellow`. Di:

> Terminator

para apagar las luces.

#### Wake Word to Colors

Colores asociados a las palabras de activación soportadas en esta demo:

- ![#ffff33](https://via.placeholder.com/15/ffff33/000000?text=+) `Alexa`
- ![#ff8000](https://via.placeholder.com/15/ff8000/000000?text=+) `Bumblebee`
- ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) `Computer`
- ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) `Hey Google`
- ![#800080](https://via.placeholder.com/15/800080/000000?text=+) `Hey Siri`
- ![#ff3399](https://via.placeholder.com/15/ff3399/000000?text=+) `Jarvis`
- ![#00ff00](https://via.placeholder.com/15/00ff00/000000?text=+) `Picovoice`
- ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) `Porcupine`
- ![#000000](https://via.placeholder.com/15/000000/000000?text=+) `Terminator`

#### Multiple Wake Word Example Source Code

Código fuente completo disponible en este [repositorio](https://github.com/Picovoice/porcupine/tree/master/demo/respeaker).

## Keyword spotting con ReSpeaker 2-Mic Pi HAT y Mycroft Precise

Mycroft Precise es un motor de detección de palabras clave completamente open-source. Tiene funcionalidades más limitadas que Picovoice, pero una licencia más permisiva (Apache 2.0) que permite modificaciones y redistribución incluso en código cerrado y comercial, siempre que se preserve la licencia.

Para comenzar con Mycroft Precise, instala la versión estable más reciente del fork de Seeed:

```bash
sudo apt-get install libatlas-base-dev
pip3 install git+https://github.com/respeaker/mycroft_runner_simple.git
```

**Nota:** En instalaciones frescas de Raspberry Pi OS, puede aparecer esta advertencia al instalar la demo:
  The script picovoice_respeaker_demo is installed in '/home/pi/.local/bin' which is not on PATH.

Para ejecutar la demo, añade /home/pi/.local/bin a tu PATH:

```bash
echo 'export PATH="$HOME/bin:$HOME/.local/bin:$PATH"' >> ~/.bashrc
```

Prueba la instalación ejecutando:

```bash
mycroft-precise --model hey-mycroft
```

Para integrar Mycroft Precise en tu proyecto, consulta el README del repositorio para información sobre la API.

## Asistente Inteligente con ReSpeaker 2-Mic Pi HAT y Mycroft Core

Mycroft es un asistente de voz open source hackeable, similar a Alexa o Google Assistant, con licencia Apache 2.0 que permite modificaciones y redistribución incluso cerrada y comercial, siempre que se preserve la licencia.

**Esta sección está en desarrollo y próximamente se añadirán detalles sobre el uso de Mycroft Core con ReSpeaker.**

## Picovoice con ReSpeaker 2-Mic Pi HAT y Raspberry Pi Zero - Inicio Rápido

**Paso 1.** Instala los drivers y configura el dispositivo según **Driver installation and configuration**.

Clona el repositorio de Picovoice:

```bash
git clone --recurse-submodules https://github.com/Picovoice/picovoice.git
cd picovoice
```

**Nota:** Asegúrate que los LEDs `APA102` funcionan correctamente en ReSpeaker 2-Mic Pi HAT con Raspberry Pi Zero.

**Paso 2.** Instala la librería `wiringpi` 

```sh
sudo apt-get install wiringpi
```

**Paso 3.** Desde la raíz del repositorio, compila e **instala la demo Picovoice para ReSpeaker 2-Mic Pi HAT**:

```sh
gcc -std=c99 -O3 -o demo/respeaker-rpi0/picovoice_demo_mic \
-I sdk/c/include/ demo/respeaker-rpi0/picovoice_demo_mic.c \
-ldl -lasound -lwiringPi
```

Uso de la Demo

La demo usa ReSpeaker 2-Mic Pi HAT en Raspberry Pi Zero con tecnología Picovoice para controlar los LEDs. El demo se activa con la **palabra clave "Picovoice" y puede ejecutar acciones como encender/apagar LEDs y cambiar colores.**

Para correr la demo, desde la raíz del repositorio, ejecuta:

```sh
./demo/respeaker-rpi0/picovoice_demo_mic \
sdk/c/lib/raspberry-pi/arm11/libpicovoice.so \
resources/porcupine/lib/common/porcupine_params.pv \
resources/porcupine/resources/keyword_files/raspberry-pi/picovoice_raspberry-pi.ppn \
0.65 \
resources/rhino/lib/common/rhino_params.pv \
demo/respeaker/pvrespeakerdemo/respeaker_raspberry-pi.rhn \
0.5 \
plughw:CARD=seeed2micvoicec,DEV=0
```

### Comandos de Voz

- **Picovoice**

Demo responde:

```txt
wake word
```

- **Turn on the lights**

Luces encendidas, salida en terminal:

```json
{
    is_understood : 'true',
    intent : 'turnLights',
    slots : {
        'state' : 'on',
    }
}
```

Listado de comandos en terminal:

```yaml
context:
  expressions:
    turnLights:
      - "[switch, turn] $state:state (all) (the) [light, lights]"
      - "[switch, turn] (all) (the) [light, lights] $state:state"
    changeColor:
      - "[change, set, switch] (all) (the) (light, lights) (color) (to) $color:color"
  slots:
    state:
      - "off"
      - "on"
    color:
      - "blue"
      - "green"
      - "orange"
      - "pink"
      - "purple"
      - "red"
      - "white"
      - "yellow"
```

Prueba cambiar el color con:

- **Picovoice, set the lights to orange**

Apaga las luces con:

- **Picovoice, turn off all lights**

**Video Demostración**

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/X12N2Rn-q5o" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

### Código Fuente de la Demo

La demo está construida con el **[Picovoice SDK](https://github.com/Picovoice/picovoice)**. El código fuente de la demo está disponible en [GitHub](https://github.com/Picovoice/picovoice/tree/master/demo/respeaker-rpi0).

### Diferentes Palabras de Activación

El [**Picovoice SDK**](https://github.com/Picovoice/picovoice) incluye ejemplos gratuitos de palabras de activación bajo licencia Apache 2.0, incluyendo asistentes de voz populares (por ejemplo: "**`Hey Google`**", "**`Alexa`**") y otras divertidas como "**`Computer`**" y "**`Jarvis`**".

### Comandos de Voz Personalizados

Los comandos de iluminación están definidos mediante un *contexto de Speech-to-Intent* de Picovoice.  
Puedes diseñar y entrenar contextos escribiendo la gramática permitida en la Picovoice Console.

Puedes probar tus cambios en el navegador mientras editas usando el botón del micrófono. Ingresa a la [Picovoice Console](https://picovoice.ai/console/) y crea una cuenta.  
Usa el **editor Rhino Speech-to-Intent** para crear contextos, y luego entrénalos para Raspberry Pi Zero.

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/respeaker_demo_console_edit.gif"/></div>

### Ejemplos con Múltiples Palabras de Activación

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/Fi_IJEcNr3I" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

Para demostrar la capacidad de Picovoice, también hemos preparado ejemplos con múltiples palabras de activación usando ReSpeaker 2-Mic Pi HAT con Raspberry Pi Zero. Puedes configurar diferentes palabras clave para ejecutar tareas específicas.

*Este paquete contiene una demo de línea de comandos para controlar los LEDs del ReSpeaker 2-Mic Pi HAT usando Porcupine.*

### Porcupine

**Porcupine** es un motor de detección de palabras clave de alta precisión y peso ligero.  
Permite construir aplicaciones con escucha activa continua.

- Utiliza redes neuronales profundas entrenadas en entornos reales.  
- Compacto y eficiente en recursos. Ideal para IoT.  
- Multiplataforma: Raspberry Pi, BeagleBone, Android, iOS, Linux (x86_64), macOS (x86_64), Windows (x86_64) y navegadores web.  
  También hay un SDK para ARM Cortex-M para clientes empresariales.  
- Escalable: puede detectar múltiples palabras clave sin aumentar la carga en tiempo de ejecución.  
- Autoservicio: los desarrolladores pueden entrenar modelos personalizados con [Picovoice Console](https://picovoice.ai/console/).

#### Introducción a Múltiples Palabras de Activación

**Paso 1.** Instala la biblioteca `wiringpi` (si no la tienes instalada):

```sh
sudo apt-get install wiringpi
```

Clona el repositorio de Picovoice desde GitHub::

```bash
git clone --recurse-submodules https://github.com/Picovoice/porcupine.git
cd picovoice
```

**Paso 2.** Desde la raíz del repositorio, compila la demo de Porcupine para ReSpeaker 2-Mic Pi HAT:

```sh
gcc -std=c99 -O3 -o demo/respeaker-rpi0/porcupine_demo_mic \
-I include/ demo/respeaker-rpi0/porcupine_demo_mic.c \
-ldl -lasound -lwiringPi
```

#### Uso de Múltiples Palabras de Activación

Ejecuta el siguiente comando desde la raíz del repositorio:

```sh
./demo/respeaker-rpi0/porcupine_demo_mic \
lib/raspberry-pi/arm11/libpv_porcupine.so \
lib/common/porcupine_params.pv \
0.65 \
plughw:CARD=seeed2micvoicec,DEV=0 \
resources/keyword_files/raspberry-pi/alexa_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/computer_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/hey\ google_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/hey\ siri_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/jarvis_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/picovoice_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/porcupine_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/bumblebee_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/terminator_raspberry-pi.ppn
```

Cuando el demo imprima `[Listening]`, di:

> Picovoice

La salida será:

```text
detected 'Picovoice'
```

Las luces estarán en verde `green`. Di:

> Alexa

Y se cambiarán las luces a color amarillo `yellow`.
Luego di:

> Terminator

to turn off the lights.

#### Palabras de Activación y Colores

A continuación se muestran los colores asignados a las palabras clave:

- ![#ffff33](https://via.placeholder.com/15/ffff33/000000?text=+) `Alexa`
- ![#ff8000](https://via.placeholder.com/15/ff8000/000000?text=+) `Bumblebee`
- ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) `Computer`
- ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) `Hey Google`
- ![#800080](https://via.placeholder.com/15/800080/000000?text=+) `Hey Siri`
- ![#ff3399](https://via.placeholder.com/15/ff3399/000000?text=+) `Jarvis`
- ![#00ff00](https://via.placeholder.com/15/00ff00/000000?text=+) `Picovoice`
- ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) `Porcupine`
- ![#000000](https://via.placeholder.com/15/000000/000000?text=+) `Terminator`

#### Código Fuente del Ejemplo

Consulta el [código fuente completo](https://github.com/Picovoice/porcupine/tree/master/demo/respeaker-rpi0).

### Soporte Técnico de Picovoice

Si tienes problemas técnicos usando Picovoice, visita  
**[Picovoice](https://github.com/Picovoice)** para participar en las discusiones.

## Preguntas Frecuentes (FAQ)

**P1: Error `#include "portaudio.h"` al ejecutar `sudo pip install pyaudio`**

R1: Solución:

```bash
sudo apt-get install portaudio19-dev
```

**P2: ¿Cómo cambiar el origen de los mirrors de Raspbian?**

R2: Consulta [Raspbian Mirrors](http://www.raspbian.org/RaspbianMirrors) y edita el archivo:

```bash
pi@raspberrypi ~ $ sudo nano /etc/apt/sources.list
```

Ejemplo para usuarios en China (Tsinghua):

```d
deb http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ stretch main non-free contrib
deb-src http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ stretch main non-free contrib
```
