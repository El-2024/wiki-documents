---
description: Overview
title: Descripción General
keywords:
- Wio_terminal File_System
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-FS-Overview
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Descripción General

Este repositorio introduce cómo instalar la librería del Sistema de Archivos utilizada en el Wio Terminal. Proporciona funcionalidades básicas para operar con archivos en la tarjeta SD, permitiendo leer y escribir en la tarjeta SD usando la interfaz SPI.

## Instalación de la Librería del Sistema de Archivos

1. Visita el repositorio [Seeed_Arduino_FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/master) y descarga todo el repositorio en tu unidad local.

2. Ahora, la librería FS puede ser instalada en el IDE de Arduino. Abre el IDE, haz clic en `Programa` -> `Incluir Librería` -> `Añadir Biblioteca .ZIP`, y selecciona el archivo `Seeed_Arduino_FS` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### Instalación de las Librerías Dependientes SFUD

1. Visita el repositorio [Seeed_Arduino_SFUD](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD) y descarga todo el repositorio en tu unidad local.

2. Ahora, la librería SFUD puede ser instalada en el IDE de Arduino. Abre el IDE, haz clic en `Programa` -> `Incluir Librería` -> `Añadir Biblioteca .ZIP`, y selecciona el archivo `Seeed_Arduino_SFUD` que acabas de descargar.

## Formato de la MicroSD

- **Capacidad Máxima de MicroSD: `16GB`**

- **Formatos de MicroSD Soportados:**

  - FAT12

  - FAT16

  - FAT32

  - exFAT
