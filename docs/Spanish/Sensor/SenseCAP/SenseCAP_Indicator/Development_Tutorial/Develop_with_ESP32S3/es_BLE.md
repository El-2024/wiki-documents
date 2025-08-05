---
description: BLE
title: BLE
keywords:
- SenseCAP Indicator ESP32 Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Indicator_ESP32_BLE
last_update:
  date: 07/22/2025
  author: Guillermo
---
# **BLE**

[**Ejemplos**](https://github.com/espressif/esp-idf/tree/master/examples/bluetooth)

Este [directorio](https://github.com/espressif/esp-idf/tree/master/examples/bluetooth) contiene una serie de ejemplos de proyectos que demuestran la funcionalidad de Bluetooth y proporciona código que puedes copiar y adaptar en tus propios proyectos.

**Uso de los Ejemplos**

Antes de compilar un ejemplo, asegúrate de seguir la Guía de Inicio Rápido de ESP-IDF para tener el entorno de desarrollo necesario.

Compilar un ejemplo es igual que compilar cualquier otro proyecto:

- Paso 1: Cambia al directorio del nuevo ejemplo que quieras compilar.

Ejecuta el siguiente comando para seleccionar el chip objetivo correcto antes de abrir el menú de configuración del proyecto:

`idf.py set-target esp32s3`

(Por defecto, el objetivo es esp32. Para ver todas las opciones, consulta `idf.py set-target --help`)

- Paso 2: Ejecuta el siguiente comando para abrir el menú de configuración del proyecto:

`idf.py menuconfig`

La mayoría de los ejemplos tienen una sección de "Configuración del Ejemplo" específica aquí (por ejemplo, para configurar el SSID y la contraseña WiFi a usar)

- Paso 3: Compila el ejemplo:

`idf.py build`

Sigue las instrucciones impresas para flashear, o ejecuta  
`idf.py -p PUERTO flash`

# **Soporte Técnico**

¡No te preocupes, te tenemos cubierto! Por favor visita nuestro [Canal Oficial de Discord de Seeed](https://discord.com/invite/QqMgVwHT3X) para hacer tus preguntas.

Si tienes un pedido grande o necesitas una personalización, por favor contacta a iot@seeed.cc