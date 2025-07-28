---
description: Connect_to_The_Things_Network
title: Conexión a The Things Network
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_T1000_tracker_TTN
last_update:
  date: 07/24/2025
  author: Guillermo
---

# Conectar SenseCAP T1000 Tracker a The Things Stack (TTS)

## Configuración del dispositivo

Antes de conectar a TTS, configura los parámetros básicos de tu dispositivo usando la SenseCAP Mate APP.  
Consulta la guía [Get Started](https://wiki.seeedstudio.com/Get_Started_with_SenseCAP_T1000_tracker) para más detalles.

- Establece la plataforma en **TTN** y copia el Device EUI / APP EUI / APP Key.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" width="300" alt="Configuración SenseCAP Mate APP"/>
</p>

## The Things Network (TTS)

The Things Stack (TTS) es un servidor de red LoRaWAN de nivel empresarial, basado en un núcleo open-source.  
Permite construir y gestionar redes LoRaWAN en hardware propio o en la nube.

Regístrate en [The Things Network](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3).

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/003.png" width="800" alt="The Things Network"/>
</p>

## Paso 1: Crear una aplicación

1. Navega a la página **Applications** y haz clic en **+Create application**.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" width="800" alt="Crear Aplicación TTN"/>
</p>

2. Ingresa un Application ID y haz clic en **Create Application** para guardar.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" width="800" alt="Crear Aplicación TTN"/>
</p>

## Paso 2: Registrar el dispositivo

1. Selecciona el método de entrada: **Select the end device in the LoRaWAN Device Repository**.

:::info
**End device brand**: SenseCAP  
**Model**: SenseCAP T1000 Tracker A/B  
:::

2. Selecciona el plan de frecuencia según tu dispositivo.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model_setup.png" width="800" alt="Selección modelo TTN"/>
</p>

3. Pega el Device EUI / APP EUI / APP Key obtenidos de SenseCraft App y haz clic en **Register end device**.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" width="300" alt="Pegar credenciales SenseCAP"/>
</p>

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_new.png" width="800" alt="Registrar dispositivo"/>
</p>

:::note
El campo **JoinEUI** es similar a **AppEUI**.
:::

## Paso 3: Verificar datos

- Cuando el dispositivo intenta conectarse a la red, la luz indicadora parpadeará lentamente.
- Si la conexión es exitosa, la luz parpadeará rápidamente y se escuchará una melodía alegre.

Ahora puedes revisar los datos en la consola de TTS.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_check.png" width="800" alt="Ver datos TTN"/>
</p>

## Recursos

- [SenseCAP T1000 Tracker Decoder para TTN](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/T1000/TTN)
