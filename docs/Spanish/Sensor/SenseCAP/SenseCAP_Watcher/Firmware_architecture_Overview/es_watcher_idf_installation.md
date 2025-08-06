---
description: Introduces how to download Watcher's open source repository and build an IDF environment.
title: Build the Watcher Development Environment
image: https://files.seeedstudio.com/wiki/watcher_getting_started/64.webp
slug: /es/build_watcher_development_environment
sidebar_position: 1
last_update:
  date: 07/25/2025
  author: Guillermo
---

# Construcción del Entorno de Desarrollo para Watcher

## Instalación de ESP-IDF

Por favor, consulta la [guía oficial de instalación](https://docs.espressif.com/projects/esp-idf/en/v5.2.1/esp32s3/get-started/index.html) de Espressif.

Ten en cuenta que el ejemplo `factory_fw` está basado exactamente en la versión v5.2.1 del IDF.

```bash
mkdir -p ~/esp
cd ~/esp
git clone --recursive https://github.com/espressif/esp-idf.git
```

Recomendamos encarecidamente crear un alias `get_idf` para la inicialización del entorno IDF si usas macOS o Linux.

## Primera compilación

### Obtener el entorno IDF

```bash
get_idf
idf.py
```

Si instalaste correctamente el IDF, tras ejecutar `idf.py` verás la impresión de ayuda de la herramienta idf.py.

```bash
$ idf.py
Usage: idf.py [OPTIONS] COMMAND1 [ARGS]... [COMMAND2 [ARGS]...]...

  ESP-IDF CLI build management tool. For commands that are not known to idf.py an attempt to execute it as a build system target will be
  made. Selected target: esp32s3

...
```

Configura el objetivo del chip a `esp32s3`.

```bash
idf.py set-target esp32s3
```

### Compilar el proyecto

```bash
idf.py build
```

El código del último firmware de fábrica está en `example/factory_firmware`.

```bash
cd example/factory_firmware
idf.py build
```

### Flashear

Conecta el SenseCAP Watcher a tu PC o laptop con un **cable USB de datos**.

**¡ATENCIÓN!!!**

**SOLO el puerto USB inferior (lateral) soporta transmisión de datos**

**El puerto USB trasero solo proporciona energía al dispositivo.**

Cuando conectes el Watcher con el cable y puerto USB correctos, verás un dispositivo USB en tu PC, además de 2 dispositivos UART. Estos son el UART conectado al ESP32S3 y el UART conectado al SoC Himax. No hay un patrón claro sobre qué SoC usa qué UART, así que prueba el siguiente comando con cada dispositivo UART hasta ver impresión de logs.

```bash
idf.py --port /dev/ttyACM0 monitor
```

Reemplaza `/dev/ttyACM0` con el nombre correcto del dispositivo UART en tu sistema operativo. Por ejemplo, en macOS suele ser `/dev/tty.wchusbserial56F3067xxxx` y en Windows `COMx`. Si no ves logs, prueba con otro UART.

**¡ATENCIÓN!!!**

La partición llamada `nvsfactory` contiene datos críticos de fábrica para que el dispositivo funcione. Ten mucho cuidado de no borrar esa partición. Se recomienda hacer un respaldo antes de flashear.

Usaremos `esptool.py` para hacer el respaldo. Esta herramienta viene con la instalación del IDF, así que debería estar disponible si seguiste la instalación.

```bash
# Linux / MacOS
which esptool.py

# Windows
where esptool.py
```

Ahora hagamos respaldo de la partición `nvsfactory`.

```bash
esptool.py --port /dev/tty.wchusbserial56F3067xxxx --baud 2000000 --chip esp32s3 --before default_reset --after hard_reset --no-stub read_flash 0x9000 204800 nvsfactory.bin
```

Una vez respaldada, es hora de flashear el firmware.

```bash
idf.py --port /dev/ttyACM0 -b 2000000 app-flash
```

Usa el subcomando `app-flash` para flashear solo la partición de aplicación, así proteges la partición `nvsfactory` y ahorras tiempo.

### Monitorear la salida de logs

```bash
idf.py monitor
```

Usa `ctrl + ]` para salir del monitor.

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
