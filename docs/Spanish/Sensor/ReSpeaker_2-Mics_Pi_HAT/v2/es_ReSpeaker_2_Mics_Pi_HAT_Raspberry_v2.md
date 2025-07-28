---
description: Getting Started with Raspberry Pi
title: Primeros Pasos con Raspberry Pi
keywords:
- ReSpeaker_2-Mics_Pi_HAT
image: https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/social-image.webp
slug: /es/respeaker_2_mics_pi_hat_raspberry_v2
last_update:
  date: 07/19/2025
  author: Guillermo
---

:::caution
Esta wiki está escrita para **ReSpeaker 2-Mics Pi HAT v2**.  
Para distinguir entre los dispositivos v1 y v2, por favor consulta:  
[Cómo distinguir las revisiones de hardware del ReSpeaker 2-Mics Pi HAT](/how-to-distinguish-respeaker_2-mics_pi_hat-hardware-revisions).
:::

En la versión más reciente de Raspberry Pi OS, el método tradicional de instalación del driver (para el dispositivo v1) ya no está disponible y puede provocar los siguientes problemas conocidos:

- El entorno de escritorio puede dañarse después de la instalación.  
- El dispositivo ReSpeaker podría no ser detectado por `aplay` / `arecord`.

Por ello, hemos publicado una nueva wiki sobre este tema.  
Si estás utilizando una versión moderna de Raspberry Pi OS en lugar de versiones anteriores, sigue estos pasos para hacer que tu ReSpeaker funcione correctamente.

## Instalación y configuración del driver

### 1. Conectar el ReSpeaker 2-Mics Pi HAT a la Raspberry Pi

Monta el ReSpeaker 2-Mics Pi HAT sobre tu Raspberry Pi, asegurándote de que los pines estén correctamente alineados al apilar el módulo.

#### Conexión en Raspberry Pi

![connection picture1](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/pi.png)

#### Conexión en Raspberry Pi Zero

![connection picture2](https://files.seeedstudio.com/products/107100001/01.png)

### 2. Configurar el driver en la Raspberry Pi

Asegúrate de estar utilizando [la versión más reciente de Raspberry Pi OS](https://www.raspberrypi.com/software/operating-systems/) en tu dispositivo.  
*(actualizado el 19 de noviembre de 2024)*

<details>
<summary style={{ color: 'red' }}>Prepara para Raspberry Pi Zero W</summary>

```sh
## Install kernel 
sudo apt install flex bison libssl-dev bc build-essential libncurses5-dev libncursesw5-dev linux-headers-6.6.51+rpt-rpi-v6
git clone --depth=1 --branch rpi-6.6.y https://github.com/raspberrypi/linux.git

## Make target directory
mkdir ~/tlv320aic3x_i2c_driver
cd ~/tlv320aic3x_i2c_driver
## Copy code
cp ~/linux/sound/soc/codecs/tlv320aic3x.c ~/tlv320aic3x_i2c_driver/
cp ~/linux/sound/soc/codecs/tlv320aic3x.h ~/tlv320aic3x_i2c_driver/
cp ~/linux/sound/soc/codecs/tlv320aic3x-i2c.c ~/tlv320aic3x_i2c_driver/
## Modify Makefile
nano Makefile
-------------------
obj-m += snd-soc-tlv320aic3x-i2c.o
snd-soc-tlv320aic3x-i2c-objs := tlv320aic3x.o tlv320aic3x-i2c.o

KDIR := /lib/modules/$(shell uname -r)/build
PWD := $(shell pwd)

all:
        $(MAKE) -C $(KDIR) M=$(PWD) modules

clean:
        $(MAKE) -C $(KDIR) M=$(PWD) clean

install:
        sudo cp snd-soc-tlv320aic3x-i2c.ko /lib/modules/$(shell uname -r)/kernel/sound/soc/codecs/
        sudo depmod -a

-------------------

## Compile the driver 
make
sudo make install
sudo modprobe snd-soc-tlv320aic3x-i2c

## Check logs
lsmod | grep tlv320
dmesg | grep tlv320

```
</details>

- **Paso 1:** Obtén el archivo Device Tree Source (DTS) para el ReSpeaker 2-Mics Pi HAT (V2.0), compílalo e instala el overlay del device tree.

```bash
curl https://raw.githubusercontent.com/Seeed-Studio/seeed-linux-dtoverlays/refs/heads/master/overlays/rpi/respeaker-2mic-v2_0-overlay.dts -o respeaker-2mic-v2_0-overlay.dts
dtc -I dts respeaker-2mic-v2_0-overlay.dts -o respeaker-2mic-v2_0-overlay.dtbo
sudo dtoverlay respeaker-2mic-v2_0-overlay.dtbo
sudo cp respeaker-2mic-v2_0-overlay.dtbo /boot/firmware/overlays
```

- **Paso 2:** Edita el archivo `/boot/firmware/config.txt` y agrega las siguientes líneas:

```
dtoverlay=respeaker-2mic-v2_0-overlay
dtoverlay=i2s-mmap
```

> **Nota:** Si tu versión del kernel es superior a la 4.0, **no necesitas** agregar `dtoverlay=i2s-mmap`.

![config example](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/dtoverlays.png)

- **Paso 3:** Reinicia tu Raspberry Pi.

```bash
sudo reboot
```

- **Paso 4:** Verifica si el dispositivo es detectado mediante `aplay` o `arecord`.

La salida esperada para `aplay` debería ser:

```
$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: vc4hdmi0 [vc4-hdmi-0], device 0: MAI PCM i2s-hifi-0 [MAI PCM i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: vc4hdmi1 [vc4-hdmi-1], device 0: MAI PCM i2s-hifi-0 [MAI PCM i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: seeed2micvoicec [seeed2micvoicec], device 0: 1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0 [1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

La sálida esperada para `arecord` debería ser:

```
$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 2: seeed2micvoicec [seeed2micvoicec], device 0: 1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0 [1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

**Donde `card 2` es el índice del ReSpeaker 2-Mics Pi HAT. Dependiendo de tu sistema, este número puede variar. Para acceder al ReSpeaker en este ejemplo, puedes usar `arecord -D plughw:2,0` o `aplay -D plughw:2,0`.**

### 3. Configurar el audio y ajustar el volumen con alsamixer

`alsamixer` es una interfaz de mezcla en terminal para ALSA (Advanced Linux Sound Architecture), usada para configurar el audio y ajustar el volumen.

```bash
alsamixer
```

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/alsamixer.png)

Usa las teclas de flecha izquierda/derecha para seleccionar el canal o dispositivo, y flecha arriba/abajo para ajustar el volumen del dispositivo seleccionado. Para salir del programa presiona ALT+Q o la tecla Esc. [Más información](https://en.wikipedia.org/wiki/Alsamixer)

:::caution
Por favor, presiona **F6** para seleccionar primero el dispositivo `seeed-2mic-voicecard`.
:::

## Resumen de uso

Para comenzar, clona el repositorio <https://github.com/respeaker/mic_hat.git> en tu Raspberry Pi:

```bash
git clone https://github.com/respeaker/mic_hat.git
cd mic_hat
```

Todos los scripts en Python mencionados en los ejemplos se encuentran dentro de este repositorio. Para instalar las dependencias necesarias desde la carpeta del repositorio, ejecuta:

```bash
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

### LEDs APA102

Para usar los LEDs, primero necesitas habilitar la interfaz SPI.  
Para ello, abre la herramienta de configuración de Raspberry Pi:

```bash
sudo raspi-config
```

Selecciona la opción: "3 Interface Options" -> "I4 SPI" para habilitar SPI.
Luego, reinicia tu Raspberry Pi:

```bash
sudo reboot
```

Cada LED APA102 incorporado tiene un chip controlador adicional.
Este chip se encarga de recibir el color deseado a través de sus líneas de entrada y mantener ese color hasta recibir un nuevo comando.

```bash
cd mic_hat
python3 interfaces/pixels.py
```

<video width={512} height={384} controls preload> 
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.webmhd.webm" />
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.mp4" />
</video>

### Botón de Usuario

El módulo incluye un botón de usuario integrado, conectado al pin **GPIO_17**.

:::caution
    El código de demostración del repositorio **no es compatible con Raspberry Pi 5** debido a la incompatibilidad con `RPI.GPIO`. Sin embargo, hemos proporcionado un código alternativo de demostración para Raspberry Pi 5 usando la biblioteca `gpiozero`.
:::

#### Dispositivos que no son Raspberry Pi 5

Ejecuta el script de ejemplo desde el repositorio que clonaste en el **Paso 4**. Deberías ver el mensaje `"on"` cuando presiones el botón.

```txt
$ python3 button.py
off
off
on
on
off
```

#### Dispositivos Raspberry Pi 5

Copia el siguiente código y guárdalo como `~/button.py`:

```python
from gpiozero import DigitalInputDevice
from time import sleep

def main():
    pin = DigitalInputDevice(pin=17, pull_up=True)
    try:
        while True:
            print("on" if pin.value == 1 else "off")
            sleep(1)
    finally:
        pin.close()

if __name__ == '__main__':
    main()
```

Debería mostrar "on" cuando presiones el botón:

```bash
$ python3 ~/button.py
off
on
on
off
on
off
```

:::note
No funcionará dentro de un entorno virtual, deberás salir primero:
```bash
deactivate
python3 ~/button.py
```
:::

### Grabar sonido con Python

Usamos la [biblioteca PyAudio para Python](https://people.csail.mit.edu/hubert/pyaudio/) para grabar sonido con Python.

Primero, ejecuta el siguiente script para obtener el número de índice del dispositivo ReSpeaker:

```bash
cd mic_hit
python3 recording_examples/get_device_index.py
```

Verás una salida como la siguiente:

```bash
Input Device id  1  -  seeed2micvoicec: 1f000a4000.i2s-tlv320aic3x-hifi tlv320aic3x-hifi-0 (hw:2,0)
```

Para grabar sonido, abre el archivo `recording_examples/record.py` con `nano`, `vim` u otro editor de texto, y cambia la línea: RESPEAKER_INDEX = 2 al número de índice correspondiente a tu dispositivo ReSpeaker. Luego ejecuta el script de grabación:

```bash
python3 recording_examples/record.py
```

Si deseas extraer datos del canal 0 desde una grabación estéreo de 2 canales, revisa el contenido del archivo `record_one_channel.py`.  
Para otros canales (canal X), cambia `[0::2]` por `[X::2]`.

```bash
python3 recording_examples/record_one_channel.py
```

Para reproducir los archivos grabados puedes usar la utilidad del sistema `aplay`, por ejemplo:

```bash
aplay -f cd -D hw:2,0 output.wav # for Stereo sound
aplay -D plughw:2,0 output_one_channel.wav #for Mono sound from one channel
```

También puedes usar el script recording_examples/play.py para reproducir archivos .wav usando PyAudio:

```bash
python3 recording_examples/play.py path-to-wav-file
```

Asegúrate de especificar correctamente el índice del dispositivo de salida en play.py, ¡de lo contrario PyAudio podría quedarse congelado!

## Soporte técnico y discusión del producto

¡Gracias por elegir nuestros productos!  
Estamos aquí para brindarte distintos tipos de soporte y asegurar que tu experiencia sea lo más fluida posible.  
Ofrecemos varios canales de comunicación para adaptarnos a tus necesidades y preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>