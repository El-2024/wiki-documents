---
description: SenseCAP_T1000_tracker_and_Datacake_Integrated
title: Integración de Datacake (via TTS)
keywords:
- SenseCAP
- tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_T1000_tracker_Datacake_TTS
last_update:
  date: 07/24/2025
  author: Guillermo
---

[Datacake](https://datacake.co/) es una plataforma IoT multipropósito, que ofrece la posibilidad de crear aplicaciones IoT personalizadas sin necesidad de conocimientos de programación.

Para satisfacer la creciente demanda de creación de aplicaciones IoT, hemos colaborado con Datacake para crear plantillas que permiten a la comunidad añadir el [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) a Datacake a través de The Things Network de forma sencilla y cómoda.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_sense.png" alt="pir" width={800} height="auto" /></p>

Antes de comenzar la configuración, revisa [Conectar SenseCAP T1000 a TTS](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN) para conectar primero tu SenseCAP T1000 Tracker a TTS.

## Configurar Datacake

Para iniciar, registra una cuenta en [Datacake](https://app.datacake.de/signup).

### Crear un Workspace

Primero, crea un Workspace en Datacake navegando al botón **Create Workspace** en la esquina superior izquierda.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake-workspace.png" alt="pir" width={800} height="auto" /></p>

### Añadir dispositivo

Haz clic en **Devices** en el menú lateral izquierdo.  
Para agregar un nuevo dispositivo, haz clic en el botón **Add Device** a la derecha.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_add.png" alt="pir" width={800} height="auto" /></p>

Elige **LoRaWAN** para agregar dispositivos LoRaWAN.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/lorawan.png" alt="pir" width={800} height="auto" /></p>

Hemos subido una plantilla para usuarios, solo necesitas seleccionar el modelo de producto y pegar el EUI de tu dispositivo para configurarlo rápidamente.

:::info
Plantilla de dispositivo: Seeed SenseCAP T1000
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_tem.png" alt="pir" width={800} height="auto" /></p>

### Obtener un token API

Navega a **Account Settings** en tu workspace de Datacake y copia tu token API.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_api.png" alt="pir" width={800} height="auto" /></p>

## Configurar The Things Stack

En The Things Stack, navega a **Integrations** → **Webhooks**, y haz clic en **Add Webhook**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

Elige la plantilla de webhook de Datacake.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_ts.png" alt="pir" width={800} height="auto" /></p>

Nombra tu integración completando el ID del webhook y pega el token API de Datacake para la autorización.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_webhook2.png" alt="pir" width={800} height="auto" /></p>

## Dashboard de Datacake

Luego podrás consultar los datos de tu dispositivo en el Dashboard.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_dashbaord.png" alt="pir" width={800} height="auto" /></p>
