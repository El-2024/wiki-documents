---
description: Getting started with Nvidia Jetson
title: Primeros pasos con Nvidia Jetson
keywords:
- ReSpeaker_2-Mics_Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ReSpeaker_2_Mics_Pi_HAT_Jetson
last_update:
  date: 07/19/2025
  author: Guillermo
---

:::caution
Esta wiki está escrita para el ReSpeaker 2-Mics Pi HAT **v1**.  
Para distinguir entre los dispositivos v1 y v2, consulta [Cómo distinguir las revisiones de hardware del ReSpeaker 2-Mics Pi HAT](/how-to-distinguish-respeaker_2-mics_pi_hat-hardware-revisions).
:::

### Instalación y configuración del controlador

**1. Conecta el ReSpeaker 2-Mics Pi HAT al Jetson Nano**

Monta el ReSpeaker 2-Mics Pi HAT en tu Jetson Nano. Asegúrate de que los pines estén correctamente alineados al conectar el HAT.

**Conexión con Jetson Nano**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/JetsonNano-2MICS.png"/></div>

**2. Configura el controlador en Jetson Nano**

Asegúrate de estar ejecutando [la imagen del sistema operativo más reciente para Jetson Nano](https://developer.nvidia.com/embedded/downloads) en tu dispositivo. *(actualizado al 03/07/2021)*

:::note
Esto fue probado con JetPack 4.5.1.  
Para otras versiones, necesitarás verificar la versión de los encabezados del kernel con el comando:  
```ls /usr/src/linux-headers-*```
:::

**PASO 1.** Clona el repositorio

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
cd ~/seeed-linux-dtoverlays
```

**PASO 2.** Compila el archivo `.dtbo` y el controlador

```sh
export CUSTOM_MOD_FILTER_OUT="lis3lv02d mcp25xxfd gt9xx seeed-voicecard"
KBUILD=/usr/src/linux-headers-4.9.201-tegra-ubuntu18.04_aarch64/kernel-4.9 make all_jetsonnano
```

**PASO 3.** Instala el controlador

```sh
sudo -E KBUILD=/usr/src/linux-headers-4.9.201-tegra-ubuntu18.04_aarch64/kernel-4.9 make install_jetsonnano
```

**PASO 4.** Instala el archivo `.dtbo`

```sh
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "Seeed Voice Card 2MIC"
```

**PASO 5.** Reinicia el sistema

```sh
sudo reboot
```

**PASO 6.** Restaura la configuración de widgets de Alsa

:::note
Espera un momento después del inicio de sesión, ya que la tarjeta de sonido podría estar ocupada.
:::

```sh
cd ~/seeed-linux-dtoverlays
alsactl -f extras/wm8960_asound.state-jetson-nano restore 1
```

**PASO 7.** Verifica que el nombre de la tarjeta de sonido coincida con el código fuente `seeed-voicecard` utilizando los siguientes comandos: ```aplay -l``` y ```arecord -l```.

```
jetson@jetson:~$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: tegrahda [tegra-hda], device 3: HDMI 0 [HDMI 0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 0: ADMAIF1 CIF ADMAIF1-0 []
  Subdevices: 0/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 1: ADMAIF2 CIF ADMAIF2-1 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 2: ADMAIF3 CIF ADMAIF3-2 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 3: ADMAIF4 CIF ADMAIF4-3 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 4: ADMAIF5 CIF ADMAIF5-4 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 5: ADMAIF6 CIF ADMAIF6-5 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 6: ADMAIF7 CIF ADMAIF7-6 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 7: ADMAIF8 CIF ADMAIF8-7 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 8: ADMAIF9 CIF ADMAIF9-8 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 9: ADMAIF10 CIF ADMAIF10-9 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0


jetson@jetson:~$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 0: ADMAIF1 CIF ADMAIF1-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 1: ADMAIF2 CIF ADMAIF2-1 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 2: ADMAIF3 CIF ADMAIF3-2 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 3: ADMAIF4 CIF ADMAIF4-3 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 4: ADMAIF5 CIF ADMAIF5-4 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 5: ADMAIF6 CIF ADMAIF6-5 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 6: ADMAIF7 CIF ADMAIF7-6 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 7: ADMAIF8 CIF ADMAIF8-7 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 8: ADMAIF9 CIF ADMAIF9-8 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: tegrasndt210ref [tegra-snd-t210ref-mobile-rt565x], device 9: ADMAIF10 CIF ADMAIF10-9 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0

```

- **Paso 3. Prueba:** Podrás escuchar lo que digas por los micrófonos (no olvides conectar unos auriculares o un altavoz):

```
arecord -f cd -Dhw:1 test.wav
aplay -Dhw:1 test.wav
```

o (para reproducir el sonido del micrófono inmediatamente en altavoces/auriculares):

```sh
arecord -D hw:1,0 -f S32_LE -r 48000 -c 2 | aplay -D hw:1,0 -f S32_LE -r 48000 -c 2
```

**Nota:** -Dhw:1 es el número de dispositivo de grabación o reproducción. Dependiendo de tu sistema, este número puede variar.

## Descripción general del uso

Para ejecutar los siguientes ejemplos, clona el [repositorio](https://github.com/respeaker/mic_hat.git) en tu Jetson Nano:

```
git clone https://github.com/respeaker/mic_hat.git
```

Todos los scripts en Python mencionados a continuación se encuentran dentro de este repositorio. Para instalar las dependencias necesarias, desde la carpeta del repositorio mic_hat, ejecuta:

```
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install Jetson.GPIO spidev pyaudio
```

**LEDs APA102**

Cada LED APA102 integrado incluye un chip controlador adicional.
Este chip se encarga de recibir el color deseado por las líneas de entrada y mantener ese color hasta que reciba un nuevo comando.

```
python3 interfaces/pixels.py
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker/img/IMG_20210703_125819.jpg"/></div>

### Grabar sonido con Python

Usamos la librería [PyAudio](https://people.csail.mit.edu/hubert/pyaudio/) para grabar sonido con Python.

Primero, ejecuta el siguiente script para obtener el índice de dispositivo del ReSpeaker 2-Mic Pi HAT:

```
python3 recording_examples/get_device_index.py
```

Verás un resultado similar al siguiente:

```
Input Device id  1  -  tegra-snd-t210ref-mobile-rt565x: - (hw:1,1)
```

Para grabar sonido, abre el archivo ```recording_examples/record.py``` con nano u otro editor de texto y cambia la línea:  `RESPEAKER_INDEX = 1` por el número de índice correspondiente a tu ReSpeaker. Luego ejecuta el script para realizar una grabación:

```
python3 recording_examples/record.py
```

Si deseas extraer los datos del canal 0 de entre dos canales, revisa el archivo ```record_one_channel.py```. Para acceder a otro canal X, reemplaza [0::2] por [X::2].

```
python3 recording_examples/record_one_channel.py
```

Para reproducir las muestras grabadas, puedes usar la utilidad del sistema aplay. Por ejemplo:

```bash
aplay -f cd -Dhw:1 output.wav #for Stereo sound
```
