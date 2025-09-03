---
description: Overview
title: Descripción General
keywords:
- Wio_terminal USB_Host
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-USBH-Overview
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Descripción general

Este repositorio muestra cómo usar el Wio Terminal como **USB-Host**, lo que significa que puedes conectar dispositivos USB al Wio Terminal y usarlos como si fuera una computadora.

Esta funcionalidad depende de la biblioteca [USB Host Library SAMD](https://github.com/gdsports/USB_Host_Library_SAMD). La biblioteca ha sido probada con el Wio Terminal (SAMD51) y funciona correctamente.

## Instalación de la biblioteca USB Host Library SAMD

1. Visita el repositorio [USB Host Library SAMD](https://github.com/gdsports/USB_Host_Library_SAMD) y descarga todo el repositorio en tu disco local.

2. Ahora, puedes instalar la biblioteca en el IDE de Arduino. Abre el IDE de Arduino y haz clic en `Sketch` -> `Include Library` -> `Add .ZIP Library`, y selecciona el archivo `Seeed_Arduino_LCD` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Configuraciones del USB Host

Para habilitar el modo USB Host en el Wio Terminal, debes configurar dos pines. Es necesario establecer `PIN_USB_HOST_ENABLE` en **LOW** y `OUTPUT_CTR_5V` en **HIGH**.

Puedes hacerlo simplemente agregando el siguiente código dentro de `void setup()`:

```cpp
digitalWrite(PIN_USB_HOST_ENABLE, LOW);
digitalWrite(OUTPUT_CTR_5V, HIGH);
```
