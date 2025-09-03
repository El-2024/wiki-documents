---
description: SenseCAP_T1000_tracker_and_Qubitro_Integrated
title: Integración de Qubitro (via TTS)
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_T1000_tracker_Qubitro_TTS
last_update:
  date: 07/24/2025
  author: Guillermo
---

[Qubitro](https://www.qubitro.com/) es una Plataforma de Datos para Dispositivos (DDP) para desarrolladores que provee las herramientas, flujos de trabajo e infraestructura necesarias para desarrollar soluciones más rápido, sin necesidad de integrar manualmente múltiples servicios. Qubitro soporta fuentes de datos populares por defecto y ofrece herramientas para colaboración en tiempo real junto con infraestructura escalable.

El contenido de este capítulo guiará a los usuarios sobre cómo conectar el SenseCAP [T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) a Qubitro mediante TTN.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/qubitro_in1.png" alt="pir" width={800} height="auto" /></p>

Antes de comenzar la configuración, revisa [Conectar SenseCAP T1000 a TTS](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN) para conectar primero tu SenseCAP T1000 Tracker a TTS.

## Configurar Qubitro

Para empezar, crea una cuenta en [Qubitro](https://portal.qubitro.com/login). Al crearla, automáticamente estarás en un plan Starter.

### Obtener credenciales desde el panel de Qubitro

Crea un nuevo proyecto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_new_project.png" alt="pir" width={800} height="auto" /></p>

Haz clic en el botón **New source** y selecciona **The Things Stack** en la lista.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_source.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_TTS.png" alt="pir" width={800} height="auto" /></p>

Luego recibirás el Project ID y las Webhook Signing Keys.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTN_source.png" alt="pir" width={800} height="auto" /></p>

## Configurar The Things Stack

Navega a la [Consola de TTS](https://eu1.cloud.thethings.network/console/) para configurar la integración webhook.

En The Things Stack, ve a **Integrations** → **Webhooks** y haz clic en **Add Webhook**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

Elige la plantilla Webhook de Qubitro.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTN_Q.png" alt="pir" width={800} height="auto" /></p>

Nombra tu integración llenando el Webhook ID y pega los valores proporcionados en el paso anterior desde el Portal de Qubitro.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_kyes.png" alt="pir" width={800} height="auto" /></p>

Haz clic en **Create Qubitro Webhook** y regresa al Portal de Qubitro.

## Estado del dispositivo

Haz clic en **Go to project** y luego en **Refresh** para verificar que los dispositivos se listan correctamente.

:::info Tip
Una vez configurada la integración, todos los dispositivos conectados al mismo proyecto en The Things Stack se sincronizarán automáticamente.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_status_device.png" alt="pir" width={800} height="auto" /></p>

## Configurar el decodificador en Qubitro

Navega a la página de tu dispositivo y haz clic en el botón **Create function**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_create_function.png" alt="pir" width={800} height="auto" /></p>

Selecciona la función **Decoder function** y haz clic en **Get started**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_function.png" alt="pir" width={800} height="auto" /></p>

Hemos subido una plantilla para usuarios, solo necesitas seleccionar el modelo de producto para configurarlo rápidamente.

:::info
**Tipo de formateador**: Device template<br />
**Marca del fabricante**: Seeed Studio<br />
**Modelo**: SenseCAP_T1000
:::

Luego haz clic en **Save and complete**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/function_setup.png" alt="pir" width={800} height="auto" /></p>

## Verificar los datos

Navega al dispositivo y haz clic en la pestaña **Data** para verificar los datos recibidos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_data_view.png" alt="pir" width={800} height="auto" /></p>

## Personalizar el dashboard (opcional)

**Dashboard de ubicación**

Navega a la página de tu dashboard y haz clic en **Create new**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dash.png" alt="pir" width={800} height="auto" /></p>

Nombra tu dashboard y haz clic en **Create**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_dash.png" alt="pir" width={800} height="auto" /></p>

Selecciona **Map** como tipo de widget.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_setmap.png" alt="pir" width={800} height="auto" /></p>

Selecciona tu dispositivo y el valor de las **coordenadas**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/coordi.png" alt="pir" width={800} height="auto" /></p>

Ahora puedes ver tu ubicación en el dashboard. También puedes personalizar otros widgets a tu gusto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dashboard_view.png" alt="pir" width={800} height="auto" /></p>

