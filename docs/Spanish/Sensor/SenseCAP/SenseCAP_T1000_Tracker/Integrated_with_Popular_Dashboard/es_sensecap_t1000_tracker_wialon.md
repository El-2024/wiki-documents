---
description: SenseCAP_T1000_tracker_and_Wialon_Integrated
title:  Integración de Wialon
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_T1000_tracker_Wialon
last_update:
  date: 07/24/2025
  author: Guillermo
---

[Wialon](https://wialon.com/) es una plataforma de software para gestión de flotas y monitoreo GPS e IoT que rastrea más de 3.7 millones de unidades móviles y estacionarias en más de 150 países, con más de 2,500 empresas asociadas, 700 fabricantes de hardware y cientos de desarrolladores de soluciones basadas en Wialon.

El contenido de este capítulo guiará a los usuarios sobre cómo conectar el SenseCAP [T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) a la plataforma Wialon.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wialon-sensecap.png" alt="pir" width={800} height="auto" /></p>

Antes de comenzar la configuración, revisa [Primeros pasos](https://wiki.seeedstudio.com/Get_Started_with_SenseCAP_T1000_tracker) para conectar primero tu SenseCAP T1000 Tracker a SenseCAP Cloud.

## Obtener API SenseCAP en el Portal SenseCAP

Inicia sesión en el [Portal SenseCAP](https://sensecap.seeed.cc/portal), navega a `Access API keys` y haz clic en `Create Access Key`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensecap-api.png" alt="pir" width={800} height="auto" /></p>

Obtendrás el `API ID` y las `Access API keys`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensecap-api2.png" alt="pir" width={800} height="auto" /></p>

## Configuración en Wialon

Inicia sesión en [Wialon Hosting](https://hosting.wialon.com/?lang=en).

**Wialon Hosting** es una plataforma para monitoreo GPS e IoT que se almacena y administra en sus centros de datos.

### Agregar Unidad

Navega a la pestaña **Units** y haz clic en **New** para agregar una nueva unidad.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/-add.png" alt="pir" width={800} height="auto" /></p>

Nombra tu unidad, selecciona el `Device Type` como `SenseCAP API`, y haz clic en el ícono de la llave inglesa para completar las propiedades.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-news.png" alt="pir" width={800} height="auto" /></p>

- **API host**: sensecap.seeed.cc  
- **API ID**: El API ID del Portal SenseCAP  
- **API Password**: Las Access API keys del Portal SenseCAP  
- **Unique ID**: El EUI de tu dispositivo

Mantén tu dispositivo en línea, entonces podrás ver la ubicación en el mapa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data-monitor.png" alt="pir" width={800} height="auto" /></p>

### Geocerca (opcional)

La geocerca es un área delimitada en el mapa que se puede usar para propósitos de monitoreo.

Navega a la pestaña `Geofences` y haz clic en `New` para agregar una nueva geocerca.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence-set2.png" alt="pir" width={800} height="auto" /></p>

- Indica el nombre de la geocerca.  
- Selecciona el tipo.  
- Marca el centro de la geocerca en el mapa (doble clic en el lugar deseado).  
- Indica el radio de la geocerca.  
- Haz clic en `Save`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence-set.png" alt="pir" width={800} height="auto" /></p>






