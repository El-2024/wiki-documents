---
description:  How to Use Wio Terminal as RTL8720DN Dev Board
title:  Cómo Usar Wio Terminal como Placa de Desarrollo RTL8720DN
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-8720-dev
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Cómo Usar Wio Terminal como Placa de Desarrollo RTL8720DN

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/BLE.gif" /></div>

Wio Terminal está equipado con el núcleo Atmel SAMD51 y el núcleo inalámbrico Realtek RTL8720DN. ¿No sería genial si también pudieras usar Wio Terminal como una placa de desarrollo sencilla RTL8720DN? En este wiki aprenderás cómo usar Wio Terminal como una placa de desarrollo RTL8720DN para desarrollar conectividad Wi-Fi y Bluetooth.

## Comenzando

- Por favor, sigue primero la guía de [**Comenzando con Wio Terminal**](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/) antes de continuar.

### Agregar la Biblioteca de la Placa Realtek en Arduino

1. Abre tu Arduino IDE, haz clic en **Archivo** > **Preferencias**, y copia la siguiente URL en **URLs adicionales para el Gestor de placas**:

```sh
https://github.com/ambiot/ambd_arduino/raw/master/Arduino_package/package_realtek.com_amebad_index.json
```

2. Haz clic en **Herramientas** > **Placa** > **Gestor de placas** y busca **realtek** en el Gestor de placas.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/realtek-board.png" /></div>

## Programa de Comunicación entre SAMD51 y RTL8720DN

Hemos preparado un código de ejemplo Arduino que permite la comunicación entre el núcleo SAMD51 de Wio Terminal y el RTL8720DN. Descarga el código fuente completo [**aquí**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_USB2Serial_Burn8720).

* Sube el código a Wio Terminal seleccionando la placa **Wio Terminal**.

**Nota:** Este programa se sube al núcleo SAMD51 del Wio Terminal.

Existen **2 modos** en este programa Arduino.

### MODO 1 - Modo de Grabación de Firmware RTL8720DN

Presiona el botón (botón derecho) para entrar en este modo. Este es **el modo para grabar código Arduino en el RTL8720DN**. Ahora puedes elegir uno de los códigos de ejemplo para RTL8720DN y subirlo al núcleo RTL8720DN. Debes seleccionar este modo para subir al núcleo RTL8720DN y **seleccionar la placa como RTL8720**.

### MODO 2 - Modo USB a Serial

Presiona el botón (botón medio) para entrar en este modo. Este es **el modo usado para ver las salidas seriales del núcleo RTL8720DN.** En este modo, el núcleo SAMD51 actúa como un módulo USB a Serial.

## Ejemplo Wi-Fi

Vamos a ver un ejemplo para recorrer los procedimientos.

* Sube el **programa de comunicación entre SAMD51 y RTL8720DN al Wio Terminal** (selecciona placa **Wio Terminal**).

* Una vez subido el programa, ve a **Herramientas** -> **Placa** y selecciona la placa **RTL8722DM** como sigue:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/8720-board.png" /></div>

* Ve a **Archivo** -> **Ejemplos** y bajo **Ejemplos para RTL8720DM**, puedes elegir ejemplos para RTL8720DN. Tomaremos como ejemplo ScanNetworks.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/8720-example.png" /></div>

* Asegúrate de que el Wio Terminal esté en **Modo de Grabación de Firmware RTL8720DN** como sigue. Selecciona placa **RTL8722DM** y haz clic en subir.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/burn.png" /></div>

* Una vez subido el ejemplo Wi-Fi al núcleo RTL8720DN, reinicia el Wio Terminal y cambia a **Modo USB a Serial** presionando el botón medio del Wio Terminal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/USB-serial.png" /></div>

* Ahora, si abres el Monitor Serial, deberías ver los resultados impresos desde el núcleo RTL8720DN. ¡Ahora puedes usar el núcleo RTL8720DN de Wio Terminal como una placa de desarrollo!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/result.png" /></div>

## Ejemplo Bluetooth

También veamos un ejemplo de Bluetooth.

* Sube el **programa de comunicación entre SAMD51 y RTL8720DN al Wio Terminal** (selecciona placa **Wio Terminal**).

* Una vez subido el programa, ve a **Herramientas** -> **Placa** y selecciona placa **RTL8722DM**. Ve a **Archivo** -> **Ejemplos** y bajo **Ejemplos para RTL8720DM**, puedes elegir ejemplos para RTL8720DN. Tomaremos como ejemplo ScanNetworks.

* Asegúrate de que el Wio Terminal esté en **Modo de Grabación de Firmware RTL8720DN**. Selecciona placa **RTL8722DM** y haz clic en subir.

* Una vez subido el ejemplo Wi-Fi al núcleo RTL8720DN, reinicia el Wio Terminal y cambia a **Modo USB a Serial** presionando el botón medio del Wio Terminal.

* Ahora, si abres el Monitor Serial, deberías ver los resultados impresos desde el núcleo RTL8720DN. ¡Ahora puedes usar el núcleo RTL8720DN de Wio Terminal como una placa de desarrollo!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/BLE.png" /></div>

## Soporte Técnico y Discusión de Producto

Gracias por elegir nuestros productos. Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
