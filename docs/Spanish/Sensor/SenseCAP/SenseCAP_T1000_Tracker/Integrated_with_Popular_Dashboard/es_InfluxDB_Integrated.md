---
description: SenseCAP_T1000_tracker_and_InfluxDB_Integrated
title: Integración de InfluxDB (via TTS)
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_T1000_tracker_InfluxDB_TTS
last_update:
  date: 07/24/2025
  author: Guillermo
---

[InfluxDB](https://docs.influxdata.com/influxdb/v2.0/get-started/) es una base de datos de series temporales de código abierto, enfocada en lectura de alto rendimiento, escritura eficiente, almacenamiento optimizado y análisis en tiempo real de grandes volúmenes de datos temporales. Además de protocolos nativos como HTTP y UDP, es compatible con protocolos de comunicación de componentes como CollectD, Graphite, OpenTSDB y Prometheus. Se usa ampliamente en monitoreo DevOps, monitoreo IoT, análisis en tiempo real y otros escenarios.

El contenido de este capítulo guiará a los usuarios sobre cómo conectar el [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) a InfluxDB a través de TTN.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/influx_sense.png" alt="pir" width={800} height="auto" /></p>

Antes de comenzar la configuración, revisa [Conectar SenseCAP T1000 a TTS](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN) para conectar primero tu SenseCAP T1000 Tracker a TTS.

## Preparación

Antes de configurar InfluxDB, necesitamos instalar el agente Telegraf (versión 1.9.2 o superior).

[Configuración de Telegraf](https://docs.influxdata.com/influxdb/v2.0/telegraf-configs/)

## Configurar InfluxDB Cloud

Inicia sesión en tu [InfluxDB Cloud](https://us-east-1-1.aws.cloud2.influxdata.com/).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buckets.png" alt="pir" width={800} height="auto" /></p>

### Crear Bucket

En la pestaña **Buckets**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buckets.png" alt="pir" width={800} height="auto" /></p>

Haz clic en el botón **Create Bucket** para crear un nuevo bucket.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/createbucket.png" alt="pir" width={800} height="auto" /></p>

Asigna un nombre al bucket, elige el tiempo que los datos permanecerán en la base y luego haz clic en **Create**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_done.png" alt="pir" width={800} height="auto" /></p>

### Generar Tokens

Navega a la pestaña **API TOKENS** y haz clic en el botón **GENERATE API TOKEN** para crear un token.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/get_token.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_done.png" alt="pir" width={800} height="auto" /></p>

## Configurar Telegraf

### Integración MQTT

Esta sección muestra cómo configurar tu agente Telegraf con el plugin MQTT Consumer para conectarse al servidor MQTT de TTS.

Navega a la pestaña **TELEGRAF** y haz clic en **CREATE CONFIGURATION**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/telegraf.png" alt="pir" width={800} height="auto" /></p>

Selecciona el bucket que creaste antes y elige system.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_telegraf.png" alt="pir" width={800} height="auto" /></p>

Asigna un nombre a la configuración, selecciona Create and Verify y luego Finalizar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/download_config.png" alt="pir" width={800} height="auto" /></p>

Una vez que descargues el archivo de configuración de Telegraf como se describe en la configuración de InfluxDB Cloud 2.0, actualízalo agregando las siguientes líneas y modificándolas según la información de tu servidor MQTT:

```cpp
[[inputs.mqtt_consumer]]
#
# URLs del broker MQTT a utilizar. El formato es esquema://host:puerto, esquema puede ser tcp, ssl o ws.
  servers = ["tcp://localhost:1883"]
#
# Temas a suscribirse
  topics = ["#"]
#
# Usuario y contraseña
  username = "example"
  password = "NNSXS.JNSBLIV34VXYXS7D4ZWV2IKPTGJM3DFRGO.........."
#
# Necesario solo si el tipo de payload es string, ya que Telegraf no reenvía datos de este tipo por defecto
  json_string_fields = ["uplink_message_frm_payload"]
#
# Definir el formato del mensaje
  data_format = "json"
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTS_info.png" alt="pir" width={800} height="auto" /></p>

Luego, necesitas copiar el token generado previamente desde la pestaña Tokens y exportarlo como variable de entorno para que lo use el plugin de salida de InfluxDB, o bien puedes pasarlo directamente como valor de token en el archivo de configuración. Puedes establecer la variable de entorno usando el siguiente comando en tu terminal:

```cpp
INFLUX_TOKEN="pega aquí tu token"
```

Ejecuta el agente Telegraf en tu terminal con el siguiente comando:

```cpp
telegraf --config /ruta/a/tu/telegraf.conf
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/connected_MQTT.png" alt="pir" width={800} height="auto" /></p>

### Integración HTTP

Esta sección muestra cómo configurar el agente Telegraf con el plugin HTTP Listener v2 y cómo crear una integración Webhook correspondiente en The Things Stack.

Actualiza la configuración de Telegraf que descargaste anteriormente, como se describe en la configuración de InfluxDB Cloud 2.0, añadiendo las siguientes líneas y modificándolas según tu configuración:

```cpp
[[inputs.http_listener_v2]]
#
# Dirección y puerto donde hospedar el listener HTTP
  service_address = ":8080"
#
# Ruta a la que escuchar
  path = "/telegraf"
#
# Métodos HTTP aceptados
  methods = ["POST"]
#
# Necesario solo si el tipo de payload es string, ya que Telegraf no reenvía datos de este tipo por defecto
  json_string_fields = ["uplink_message_frm_payload"]
#
# Definir el formato del mensaje
  data_format = "json"
```

Copia el token generado desde la pestaña Tokens y úsalo como valor del token para el plugin de salida en tu archivo de configuración Telegraf, o expórtalo como variable de entorno con el siguiente comando en tu terminal:

```cpp
INFLUX_TOKEN="pega aquí tu token"
```

Inicia el agente Telegraf ejecutando el siguiente comando en la terminal:

```cpp
telegraf --config /ruta/a/tu/telegraf.conf
```

## Explorador de Datos

Selecciona tu tipo de explorador, elige **\_measurement** en el menú desplegable del filtro y marca la casilla **mqtt\_consumer**. Luego puedes elegir el tema y parámetro que deseas monitorear.

**Datos de ubicación**

FROM: Tu bucket <br />
MEASUREMENT: mqtt\_consumer <br />
\_field: uplink\_message\_decoded\_payload <br />
topic: v3/...

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map-done.png" alt="pir" width={800} height="auto" /></p>

También puedes hacer clic en **SAVE AS** en la esquina superior derecha para guardar este explorador como una celda del Dashboard.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/saveas.png" alt="pir" width={800} height="auto" /></p>

## Dashboards (Opcional)

Un dashboard es donde visualizas e interactúas con los datos en tiempo real. Puedes personalizar el dashboard según tus necesidades.

Navigate to **Dashboard** tab and click **Create Dashbaord**.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dashboard.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/influx_dashbaord.png" alt="pir" width={800} height="auto" /></p>