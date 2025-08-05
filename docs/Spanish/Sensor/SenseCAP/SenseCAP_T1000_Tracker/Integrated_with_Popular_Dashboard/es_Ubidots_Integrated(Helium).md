---
description: SenseCAP_T1000_tracker_and_Ubidots_Integrated(Helium)
title:  Integración de Ubidots (via Helium)
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_T1000_tracker_Ubidots_Helium
last_update:
  date: 07/24/2025
  author: Guillermo
---

Este artículo ilustra el proceso de conexión del [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) a Ubidots mediante Helium LNS.

<div align="right">
Escrito por Juan David Tangarife - Del equipo de Ubidots  
</div>

[Fuente](https://help.ubidots.com/en/articles/8144778-connect-seeed-studio-sensecap-t1000-x-lorawan-tracker-to-ubidots-helium-lns)

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788772796/62a6662b1c9082f3ffc2b26b/image+5.png" alt="pir" width={400} height="auto" /></p>

### Requisitos

- Una cuenta activa en Ubidots  
- Un [SenseCAP T1000 Tracker](https://www.seeedstudio.com/sensecap-t1000-tracker?utm_source=emailsig&utm_medium=emailsig&utm_campaign=emailsig)  
- Una cuenta activa en la consola de Helium con algo de DC  
- Un teléfono con soporte para Google Play Store o AppStore, así como Bluetooth  

### Instalar la app SenseCAP Mate y configurar el tracker

Escanea el siguiente código QR para ir a la página oficial de descarga de la app SenseCAP Mate de Seeed Studio.

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788590034/a636320e04a17ad23cec9ac6/image+2%282%29.png" alt="pir" width={200} height="auto" /></p>

Una vez instalada, habilita el Bluetooth en tu teléfono y abre la app. Si no tienes una cuenta, deberás registrarte para usar la aplicación.

Luego, mantén presionado el botón del tracker por al menos 3 segundos hasta que el LED comience a parpadear. Después, desde la lista de dispositivos, selecciona **Tracker T1000**.

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788602896/e42a8ef20f1c0ecfd5b20b17/2.gif" alt="pir" width={800} height="auto" /></p>

Toca tu dispositivo:

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788612522/9015280b3a7eb52f8451f9f7/Group+1%284%29.png" alt="pir" width={300} height="auto" /></p>

Ve a la pestaña **Settings** y luego a la pestaña **LoRa**. Ahí selecciona como _platform_ **Helium** y el _Frequency plan_ según tus necesidades. Asegúrate de copiar el **Device EUI, APP EUI** y **APP Key**, ya que los necesitarás más adelante. Al finalizar, pulsa **Send** para guardar la configuración.

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788613272/545654eedd7d0c4be47a7177/Group+2%283%29.png" alt="pir" width={300} height="auto" /></p>

### Registrar el tracker en Helium LNS

Inicia sesión en tu consola de Helium, luego dirígete a la sección **Devices** y haz clic en **Add device**.

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597484015/8c15e6c54b08e7f4fa3d1a7e/image300.png" alt="pir" width={800} height="auto" /></p>

Completa los campos requeridos como el nombre del dispositivo, las credenciales LoRaWAN, etc. Luego haz clic en **Save Device**.

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597505603/72dec54d6bb3f6ca4f44d628/image504.png" alt="pir" width={800} height="auto" /></p>

### Crear la función decodificadora en Helium

El siguiente paso es configurar la función que decodifica los bytes en formato legible. Ve a la pestaña **Function** en el panel lateral y haz clic en **Add New Function**. Asigna un nombre:

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788631256/c066827c0eaebdc9dbf629d3/Group+3%282%29.png" alt="pir" width={800} height="auto" /></p>

Seeed Studio proporciona un decodificador específico en el siguiente [repositorio](https://github.com/Seeed-Solution/TTN-Payload-Decoder/blob/master/SenseCAP_LoRaWAN_V4_Decoder_For_Helium.js). Copia ese código en el campo de texto y guarda los cambios.

### Crear la integración con Ubidots

Ve a la sección **Integrations**, haz clic en **Add integration** y busca la integración de Ubidots:

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597507996/c47773268f7810506757ee6e/image566.png" alt="pir" width={800} height="auto" /></p>

Haz clic en **+Add integration**:

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597508059/9e279e2f7f3c94081457e409/image3369.png" alt="pir" width={800} height="auto" /></p>

Ingresa tu token de Ubidots en el campo correspondiente y haz clic en **Continue**. Espera el mensaje de confirmación. Luego nombra tu integración y haz clic en **Add Integration**.

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597508025/8576db8c4413b16e710aee9f/image2619.png" alt="pir" width={800} height="auto" /></p>

Después de este paso, se creará un nuevo **plugin de Helium** en tu cuenta de Ubidots.

### Crear el flujo para conectar la integración a Ubidots

Dirígete a la sección **Flows** y, desde el menú desplegable en la esquina superior izquierda, arrastra el dispositivo, la función decodificadora y la integración al área en blanco. Luego une los nodos como se muestra en el siguiente GIF:

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788706473/fa87a7bbb8f32f6e10b41f51/last.gif" alt="pir" width={800} height="auto" /></p>

En este ejemplo, tanto el dispositivo como la función se llaman "sensecap-lorawan-tracker", y la integración "send data to ubidots".

Dado que el objeto JSON retornado por el decodificador de Seeed Studio no es compatible con el esquema de Ubidots, se requiere una transformación después de extraer los datos de interés.  
Ve a la sección **decoder** del plugin Helium, elimina todo el código y reemplázalo con el siguiente:

```python
# Establecer en True para habilitar información de hotspot
HOTSPOT_INFO_ENABLE = False

def format_payload(args):

    messages = args.get("decoded", {}).get("payload", {}).get("data", {}).get("messages", [])
    ubidots_payload = {}

    error = assert_error(messages[0][0])
    if error is not None:
        return error

    if HOTSPOT_INFO_ENABLE:
        hotspot_info = args.get('hotspots', None)
        ubidots_payload['SNR'] = hotspot_info[0].get('snr') if hotspot_info is not None else None
        ubidots_payload['RSSI'] = hotspot_info[0].get('rssi') if hotspot_info is not None else None
        ubidots_payload["port"] = args.get("port", None)
        ubidots_payload['Frame Counter'] = args.get('fcnt', None)

    for msg in messages:
        for sensor in msg:
            message_type = sensor.get("type", None)
            value = sensor.get("measurementValue")
            if message_type == "Latitude" or message_type == "Longitude":
                position = ubidots_payload.setdefault("position", {})
                position.update({message_type.lower(): value})
                continue
            elif message_type == "Timestamp":
                ubidots_payload["timestamp"] = value
                continue
            ubidots_payload[message_type] = value

    print(ubidots_payload)
    return ubidots_payload
    

def assert_error(data : dict):
    if "error" in data:
        return {"ERROR" : { "value" :  data["errorCode"], "context" : { "status" : data["error"]}}}
    return None
```

Si todo fue conectado correctamente, deberías ver una nueva interfaz con tu dispositivo creado en Ubidots:
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788764383/864309856f8e7c43f7ab5317/image+4.png" alt="pir" width={800} height="auto" /></p>
