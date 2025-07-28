---
description: SenseCAP T1000 tracker and Thingsboard Integrated
title: Integración ed ThingsBoard (via TTS)
keywords:
- ThingsBoard
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/thingsboard_integrated
last_update:
  date: 07/24/2025
  author: Guillermo
---

[ThingsBoard](https://thingsboard.io/) es una plataforma IoT de código abierto que permite el desarrollo rápido, la gestión y la escalabilidad de proyectos IoT. Nuestro objetivo es proveer una solución IoT lista para usar, ya sea en la nube o on-premises, que habilite la infraestructura del lado servidor para tus aplicaciones IoT.

El contenido de este capítulo guiará a los usuarios para conectar el [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) a ThingsBoard a través de TTN.

## Comenzar

Antes de iniciar la configuración, por favor revisa [Conectar SenseCAP T1000 a TTS](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN) para conectar primero tu SenseCAP T1000 Tracker a The Things Stack.

## Configurar ThingsBoard

Para comenzar, crea una cuenta en [ThingsBoard](https://thingsboard.cloud/).

### Crear un Converter

Primero, necesitamos crear un Uplink Data Converter que se usará para recibir mensajes desde TTS.

Navega a `Data converters`, haz clic en `Create new converter`.

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/converter.png" alt="converter" width="800" height="auto"/></p>

Nombra el converter, activa `Debug mode`, copia el siguiente código y haz clic en `Add`:

```javascript
var data = decodeToJson(payload);
var deviceName = data.end_device_ids.device_id;
var deviceType = data.end_device_ids.application_ids.application_id;

var telemetry = {};

var messages = data.uplink_message.decoded_payload.messages[0];
for (var i = 0; i < messages.length; i++) {
    var measurement = messages[i];
    
    var type = measurement.type.toLowerCase();
    var typeKey = '';
    for (var j = 0; j < type.length; j++) {
        if (type[j] === ' ') {
            typeKey += '_';
        } else {
            typeKey += type[j];
        }
    }

    telemetry[typeKey] = measurement.measurementValue;
}

var result = {
    deviceName: deviceName,
    deviceType: deviceType,
    telemetry: telemetry
};

function decodeToString(payload) {
    return String.fromCharCode.apply(String, payload);
}

function decodeToJson(payload) {
    var str = decodeToString(payload);
    var data = JSON.parse(str);
    return data;
}

return result;
```

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/converter2.png" alt="converter code" width="800" height="auto"/></p>

### Agregar integración

Navega a `Integration`, haz clic en `Add Integration`.

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/integrate1.png" alt="integration" width="800" height="auto"/></p>

Configura los campos:

* **Type**: `The Things Stack Community`
* **Enable**: activa `Enable integration`, `Debug mode` y `Allow create devices or assets`

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tts-inte.png" alt="enable integration" width="800" height="auto"/></p>

Selecciona `Select existing` y escoge el converter creado anteriormente.

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/choose-converter.png" alt="select converter" width="800" height="auto"/></p>

Omite el `Downlink data converter`.

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/skip-down.png" alt="skip downlink" width="800" height="auto"/></p>

Completa con tus datos de TTS:

* **Region**: región donde registraste tu aplicación en TTS
* **Username**: usuario de TTS
* **Password**: contraseña de TTS
* **Use API v3**: activa `Enable`

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-inte2.png" alt="integration added" width="800" height="auto"/></p>

### Visualizar datos

Navega a `Entities` → `Devices`. Aquí podrás ver que:

* Se registró un nuevo dispositivo en ThingsBoard.
* En la sección `Latest Telemetry` verás los datos actualizados del dispositivo.

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/telemetry.png" alt="telemetry" width="800" height="auto"/></p>

### Añadir Dashboard

Navega a `Dashboards`, haz clic en `Create new dashboard`.

Escribe un título para el dashboard y haz clic en `Next`.

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-dash.png" alt="create dashboard" width="800" height="auto"/></p>

Agrega un `widget` y selecciona el widget que deseas agregar.

#### Mapa de ubicación

Selecciona un widget de tipo `map`.

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map1.png" alt="map widget" width="800" height="auto"/></p>

Configura:

* **Type**: `Device`
* **Device**: el dispositivo que creaste
* **Data key**: `latitude`, `longitude`

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-map.png" alt="map config" width="800" height="auto"/></p>

#### Otros parámetros

Puedes añadir otros widgets para visualizar más datos.

##### Temperatura

* **Device**: el dispositivo creado
* **Data key**: `air_temperature`

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-temp.png" alt="temperature widget" width="800" height="auto"/></p>

##### Batería

* **Device**: el dispositivo creado
* **Data key**: `battery`

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-battery.png" alt="battery widget" width="800" height="auto"/></p>

Este es un ejemplo básico, puedes personalizar tu propio dashboard.

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dashboard3.png" alt="dashboard example" width="800" height="auto"/></p>
