---
description:  Wio Terminal Retro Gaming Firmware
title:  Firmware Retro Gaming para Wio Terminal
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Firmware
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Firmware Retro Gaming para Wio Terminal

<div align="center"><img src="https://static-cdn.seeedstudio.site/media/wysiwyg/wtretro.gif" /></div>

Aquí publicamos el firmware inicial de fábrica del Wio Terminal, que es un juego simple que puedes jugar con el Wio Terminal.

## Descargar el Código Fuente Completo

Puedes descargar el código fuente completo del Firmware Inicial del Wio Terminal desde [**este repositorio**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/jumper).

- Descarga el repositorio completo

- En la ubicación `examples/jumper`

## Librerías Dependientes

### Instalación de las librerías Adafruit ZeroTimer

1. Visita el repositorio [Adafruit_ZeroTimer](https://github.com/adafruit/Adafruit_ZeroTimer) y descarga todo el repositorio a tu disco local.

2. Luego, instala la librería Adafruit ZeroTimer en Arduino IDE. Abre el IDE, y haz clic en `Sketch` -> `Include Library` -> `Add .ZIP Library`, y selecciona el archivo `Adafruit_ZeroTimer` que acabas de descargar.

![Instalar Librería](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

:::note
También depende de **1. Seeed_Arduino_LCD 2. Seeed_Arduino_FS 3. Seeed_Arduino_SFUD 4. Adafruit_ZeroDMA**, pero estas librerías están incluidas en la librería del board Wio Terminal. Si tienes problemas, actualiza a la última versión del board library.
:::

## Instrucciones Arduino

Existen **2 maneras** de cargar las imágenes de los elementos del juego:

1. **Usando Flash:**

   - Este es el método por defecto y carga las imágenes en la memoria flash.

   - Sube el código.

2. **Cargando imágenes usando tarjeta SD:**

   - Copia y pega la carpeta `rgb332` (con todas las imágenes) dentro de la tarjeta SD.

   - Si cargas las imágenes desde la tarjeta SD, debes descomentar la macro `LOAD_IMAGE_SD`.

   - Sube el código.

¡Ahora puedes disfrutar jugando juegos retro con tu Wio Terminal nuevamente!

## Soporte Técnico y Discusión del Producto

Gracias por elegir nuestros productos. Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
