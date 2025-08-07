---
description: Overview
title: Visión General
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-USBCLIENT-Overview
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Visión General

Este repositorio presenta cómo usar el Wio Terminal como cliente USB (USB-Client), incluyendo su uso como dispositivo de interfaz humana (HID), como teclado, ratón, etc. También es compatible con la Interfaz Digital de Instrumentos Musicales (MIDI).

Esta funcionalidad depende de la [Adafruit TinyUSB Library for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino). La librería ha sido probada con el Wio Terminal (SAMD51) y funciona correctamente.

## Instalación de la Librería Adafruit TinyUSB para Arduino

1. Visita el repositorio de la [Adafruit TinyUSB Library for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino) y descarga todo el repositorio a tu disco local.

2. Ahora, la librería puede instalarse en el IDE de Arduino. Abre el IDE de Arduino y haz clic en `Programa` -> `Incluir Librería` -> `Añadir Biblioteca .ZIP`, y elige el archivo `Adafruit_TinyUSB_Arduino` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

