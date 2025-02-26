---
description: This wiki provides a step-by-step guide on how to retrieve the boot logs of the reComputer J4012 (or similar device) using the Jetson serial port. 
title: How to get the system log of reComputer J30/J40?
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /get_the_system_log_of_recomputer_j30_and_j40
last_update:
  date: 1/22/2025
  author: Youjiang
---


Esta wiki utilizará la [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) como ejemplo para demostrar cómo recuperar los registros de arranque de un dispositivo a través del puerto serie Jetson.

## Prerequisitos

- reComputer J4012/ J4011/ J3010 or J3011
- [Módulo USB a Serial (TTL)](https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html)
- Una computadora con una herramienta de depuración de puerto serie instalada

:::info
Puedes descargar e instalar una herramienta de depuración de puerto serie según tus preferencias personales. Recomendamos utilizar [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), [XShell](https://www.netsarang.com/en/xshell/) o [MobaXterm](https://mobaxterm.mobatek.net/). 

En este tutorial utilizaremos MobaXterm.
:::

## Conexión de Hardware

1. Conecta los pines correspondientes de la interfaz J15 al módulo USB2TTL.
2. Conecta el módulo USB2TTL a la computadora con la herramienta de depuración del puerto serie instalada.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/hardware_connection.png"/>
</div>
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/pin.png"/>
</div>

## Obtener registro del sistema

**Paso 1.** Obten el número de identificación del módulo USB2TTL reconocido por la computadora.

:::nota
Si tu computadora usa Windows, puedes encontrar el número de identificación reconocido en el Administrador de dispositivos.
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/com.png"/>
</div>

**Setp2.** Abre la herramienta de depuración del puerto serie, configura el número del puerto serie y establece los baudios en `115200`.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/config_serial.png"/>
</div>

**Setp3.** Enciende la Jetson. Si todo funciona correctamente, deberías ver los registros de arranque del sistema en la ventana de la herramienta de depuración del puerto serie.

<div align="center">
<iframe width="800" height="450" src="https://www.youtube.com/embed/rwiKgF91mNE" title="Get Sys Log of reComputer J30/J40" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
