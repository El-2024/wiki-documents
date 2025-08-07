---
description: How To Set The API Key
title: Cómo configurar la clave API
keywords:
- Get Started with SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Sensor/SenseCAP/SenseCAP_Indicator/Set_An_API_Key
sidebar_position: 4
last_update:
  date: 07/22/2025
  author: Guillermo
---

# **Cómo configurar la clave API**

:::caution Bloqueo geográfico
**Nota**: Los servicios de la API de OpenAI pueden no estar disponibles en ciertos países como China, Irán y Rusia. Consulta [la lista de países y territorios admitidos](https://platform.openai.com/docs/supported-countries) para más información.

Asegúrate de que tu entorno de red permita la conectividad con la API de OpenAI.
:::

### Obtener una clave API

- **Paso 1:** Inicia sesión en https://platform.openai.com/signup  
  Si aún no tienes una cuenta, deberás crear una.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/login.png"/></div>

- **Paso 2:** Visita tu [página de claves de OpenAI](https://platform.openai.com/account/api-keys) o haz clic en el menú "View API keys".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/key1.png"/></div>

- **Paso 3:** Crea una nueva clave haciendo clic en el botón "Create new secret key". Consulta la imagen como referencia.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/newkey.png"/></div>

> **Límites de uso:**
> OpenAI aplica límites de uso a las solicitudes que puedes hacer a la API. Estos se aplican por solicitudes por minuto, tokens por minuto o, en el caso de modelos de imágenes, imágenes por minuto.
>
> Obtén más información en la documentación sobre [límites de uso](https://platform.openai.com/docs/guides/rate-limits/overview) o consulta los [límites predeterminados](https://platform.openai.com/docs/guides/rate-limits/what-are-the-rate-limits-for-our-api) para tus modelos.

### Configurar una clave

- **Paso 4:** Conéctate al Indicator mediante el **puerto serial** (usando la herramienta de monitor serial del IDE de Arduino).

Selecciona la placa y el puerto:

- **Placa**: Seeed INDICATOR RP2040  
- **Puerto**: puerto usbserial

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/chooseboard.png"/></div>

- **Paso 5:** Abre el monitor de puerto.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/monitor.png"/></div>

- **Paso 6:** Envía el siguiente comando al dispositivo para configurar la clave API:

```sh
openai_api -k {sk-your apikey}
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/setkey.png"/></div>

Verás un registro que indica: "`openai_api_key read successful`", y con eso estará todo listo. ¡Disfruta tu viaje con la IA!

# **Soporte Técnico**

**¿Necesitas ayuda con tu SenseCAP Indicator? ¡Estamos aquí para ayudarte!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

