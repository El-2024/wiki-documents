---
description: Build a DAPLink Device using Wio Terminal
title: Construye un Dispositivo DAPLink usando Wio Terminal
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-DAPLink
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Wio Terminal DAPLink

Hemos **desarrollado el firmware DAPLink para que funcione en tus placas Arduino** (*Serie SAMD*), como [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) y [Seeeduino Xiao](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html), para que puedas cargar y depurar placas de desarrollo que soportan DAPLink de la forma más económica y práctica.

## Características

- Depura y programa CPUs Arm Cortex
- Proporciona un puerto serial virtual, eliminando la necesidad de un convertidor USB a puerto serial
- Carga de firmware por arrastrar y soltar (próximamente)

## Cómo empezar

Por favor, visita el Wiki de inicio rápido de Arduino DAPLink [aquí](https://wiki.seeedstudio.com/Arduino-DAPLink/).

### Método `uf2`

Para mayor comodidad, también proporcionamos archivos `uf2` para cargar el firmware del Wio Terminal. Simplemente descarga los archivos `uf2` desde abajo.

- Descarga el archivo [**simple_daplink_wt.uf2**](https://files.seeedstudio.com/wiki/Wio-Terminal/res/simple_daplink_wt.uf2).

Para entrar al modo bootloader, desliza el interruptor de encendido dos veces rápidamente. Para más información, consulta también [aquí](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq).

En tu PC aparecerá un disco externo llamado `Arduino`. Solo arrastra el archivo uf2 descargado a esta unidad `Arduino`.

### Pinout de conexión

Puedes usar la siguiente referencia:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/daplink-wt.jpg" alt="Pinout DAPLink para Wio Terminal" /></div>

## Soporte Técnico y Discusión de Producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes canales de soporte que garanticen que tu experiencia sea lo más fluida posible. Contamos con varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
