---
description: SenseCAP_T1000_tracker_and_TagoIO_Integrated
title: Integración de TagoIO (via TTS)
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_T1000_tracker_TagoIO_TTS
last_update:
  date: 07/24/2025
  author: Guillermo
---

[TagoIO](https://tago.io/) es una plataforma IoT en la nube para empresas que permite gestionar dispositivos, datos, usuarios, análisis e integraciones. Su interfaz intuitiva facilita que empresas de cualquier tamaño puedan crear y desplegar soluciones IoT innovadoras.

El contenido de este capítulo guiará a los usuarios para conectar el [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) a TagoIO a través de TTN.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio.png" alt="pir" width={800} height="auto" /></p>

Antes de comenzar, por favor revisa [Conectar SenseCAP T1000 a TTS](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN) para conectar primero tu SenseCAP T1000 Tracker a The Things Stack.

## Configurar TagoIO

Para iniciar, crea una cuenta en [TagoIO](https://admin.tago.io/signup).

### Agregar Dispositivo

Navega a la pestaña **Devices** y haz clic en **Add Device**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_device.png" alt="pir" width={800} height="auto" /></p>

Busca **Seeed SenseCAP T1000** para una configuración rápida.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_template.png" alt="pir" width={800} height="auto" /></p>

Nombra tu dispositivo y pega el EUI del dispositivo, luego haz clic en **Create my Device**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/c_my_device.png" alt="pir" width={800} height="auto" /></p>

### Generar autorización

Haz clic en **Generate authorization** y copia tu token de autorización.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/authorization.png" alt="pir" width={800} height="auto" /></p>

## Configurar The Things Stack

En The Things Stack, navega a **Integrations** → **Webhooks** y haz clic en **Add Webhook**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

Selecciona la plantilla Webhook de TagoIO.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTS_web_IO.png" alt="pir" width={800} height="auto" /></p>

Nombra la integración completando el Webhook ID, y pega el Plugin ID junto con el token de TagoIO.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/webhook_TTS.png" alt="pir" width={800} height="auto" /></p>

Luego de conectar el dispositivo, puedes revisar todas las conexiones en la pestaña **Live Inspector** en TagoIO.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/live_inspec.png" alt="pir" width={800} height="auto" /></p>

## Dashboard en TagoIO (Opcional)

Un dashboard es donde colocas widgets para visualizar e interactuar con datos en tiempo real. Puedes personalizar el dashboard según tus necesidades.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_dash.png" alt="pir" width={800} height="auto" /></p>

Navega a la pestaña **Dashboard**, nombra tu dashboard y haz clic en **Create my Dashboard**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dashfortagoio.png" alt="pir" width={800} height="auto" /></p>

### Dashboard de Ubicación

Haz clic en **Add widget**, selecciona el tipo **Map**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/maptagoio.png" alt="pir" width={800} height="auto" /></p>

Selecciona **Data from**: tu dispositivo -- ubicación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_done_io.png" alt="pir" width={800} height="auto" /></p>
