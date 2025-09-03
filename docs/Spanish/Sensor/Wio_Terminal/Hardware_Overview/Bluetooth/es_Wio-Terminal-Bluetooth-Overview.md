---
description: Overview
title: Descripción general de Bluetooth
keywords:
- Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Bluetooth-Overview
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Descripción general de Bluetooth

Esta wiki presenta cómo actualizar el firmware más reciente para el núcleo inalámbrico Realtek RTL8720 en el Wio Terminal, así como la instalación de todas las bibliotecas dependientes para habilitar la conectividad Bluetooth en el Wio Terminal.

## Actualizar el firmware del núcleo inalámbrico

Por favor, sigue [esta guía](https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/#update-the-wireless-core-firmware) para actualizar el firmware del núcleo inalámbrico en el Wio Terminal.

:::note
        ¡Este firmware permite que Wi-Fi y Bluetooth funcionen al mismo tiempo!
:::

## Actualizar Seeed SAMD ArduinoCore

:::note
¡Por favor, actualiza el **Seeed SAMD ArduinoCore a la última versión (1.8.1)**!
:::

- **PASO 1:** Abre el **Arduino IDE**, y haz clic en `Herramientas` -> `Placa` -> `Gestor de placas`, y busca **Wio Terminal** en el cuadro de búsqueda

- **PASO 2:** Asegúrate de que la última versión (1.8.1) esté instalada. Si no es así, haz clic en el menú desplegable `Seleccionar versión`, selecciona la versión más reciente y haz clic en `Instalar`

<p style={{textalign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ArduinoCore_new.png" alt="pir" width={850} height="auto" /></p>

> También puedes encontrar el código fuente de Seeed SAMD ArduinoCore [**aquí**](https://github.com/Seeed-Studio/ArduinoCore-samd).

## Instalación de bibliotecas

Hay algunas bibliotecas de Arduino necesarias para la conectividad Bluetooth. Hemos incluido todas las bibliotecas relacionadas con lo inalámbrico para el Wio Terminal en el **Gestor de bibliotecas de Arduino**. Así que simplemente debes abrir el gestor de bibliotecas dentro del Arduino IDE, buscar las bibliotecas que necesitas ¡e instalarlas fácilmente!

### Cómo instalar una biblioteca desde el gestor de bibliotecas de Arduino

- **PASO 1:** Abre el **Arduino IDE**, y haz clic en `Programa` -> `Incluir biblioteca` -> `Gestionar bibliotecas...`

- **PASO 2:** Escribe el **nombre de la biblioteca** que necesitamos y selecciona la **última versión** del menú desplegable (si está disponible)

- **PASO 3:** Haz clic en **Instalar**

<p style={{textalign:  'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/library_install_1.jpg" alt="pir" width={870} height="auto" /></p>

### Bibliotecas necesarias para Bluetooth

Necesitamos las siguientes bibliotecas para comenzar con Bluetooth en el Wio Terminal. Puedes buscarlas escribiendo el nombre de la biblioteca en el cuadro de búsqueda del gestor de bibliotecas de Arduino.

- [**Seeed_Arduino_rpcBLE**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE) - busca `"seeed rpcble"`

- [**Seeed_Arduino_rpcUnified**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcUnified) - busca `"seeed rpcunified"`
