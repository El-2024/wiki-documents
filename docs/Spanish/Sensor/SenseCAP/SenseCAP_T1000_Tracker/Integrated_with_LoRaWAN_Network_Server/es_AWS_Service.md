---
description: Connect SenseCAP T1000 Tracker to AWS
title: Servicios AWS Cloud
keywords:
- Tracker
- AWS
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/t1000.webp
slug: /es/SenseCAP_T1000_Tracker_AWS
last_update:
  date: 07/24/2025
  author: Guillermo
---

# Uso de Servicios Cloud AWS para SenseCAP T1000 Tracker

[AWS IoT](https://docs.aws.amazon.com/iot/latest/developerguide/iot-gs.html) proporciona servicios en la nube para conectar tus dispositivos IoT con otros dispositivos y servicios en la nube de AWS. AWS IoT ofrece software para facilitar la integración de tus dispositivos IoT en soluciones basadas en AWS IoT. Si tus dispositivos pueden conectarse a AWS IoT, este puede conectarlos con los servicios en la nube que AWS provee.

Accede al [AWS IoT console](https://console.aws.amazon.com/iot/home)

:::info
Si no tienes una cuenta AWS, crea una en [este enlace](https://portal.aws.amazon.com/billing/signup).
:::

## Añadir Gateway

Navega a `Internet of Things` y luego selecciona `IoT Core`.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/iot=core.png" alt="IoT Core" width="800"/></p>

En el menú izquierdo, selecciona `LPWAN devices` → `Gateways`, y haz clic en `Add gateway`.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-gateway.png" alt="Add Gateway" width="800"/></p>

- **Gateway's EUI:** Lo encontrarás en la etiqueta del dispositivo.
- **Frequency:** Banda de frecuencia del gateway.
- **Name:** Nombre opcional para el gateway.
- **SubBand:** (Opcional) Configuración LoRaWAN como subbandas y filtros. Más info en [Configurar recursos inalámbricos en AWS IoT Core para LoRaWAN](https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan-configure-location.html).

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/gateway-eui.png" alt="Gateway EUI" width="800"/></p>

## Configurar tu Gateway

### Certificado del Gateway

Para autenticar el gateway y que pueda comunicarse con AWS IoT Core, debe presentar una clave privada y certificado.

Haz clic en `Create certificate`.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create-cer.png" alt="Create Certificate" width="800"/></p>

Descarga y guarda los archivos del certificado y certificados de confianza del servidor.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS6.PNG" alt="Certificate Files" width="800"/></p>

Deberás tener 4 archivos para usarlos después en la configuración.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/files.png" alt="Cert Files" width="800"/></p>

### Permisos del Gateway

Si no has creado el rol IAM `IoTWirelessGatewayCertManagerRole`, créalo antes de continuar.

Selecciona el rol `IoT Wireless Gateway Cert Manager Role` y envía la configuración.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/permissions.png" alt="Gateway Permissions" width="800"/></p>

Copia la URL CUPS, que usarás en el siguiente paso.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cups.png" alt="CUPS URL" width="800"/></p>

### Configuración del Gateway

Ingresa a la página Luci de configuración del gateway (consulta [Get_Started](https://files.seeedstudio.com/products/SenseCAP%20M2/Quick%20Start%20for%20SenseCAP%20M2%20Multi-Platfrom%20Gateway%20&%20Sensors.pdf)).

Ve a `LoRa` > `LoRa Network` y configura:

- **Mode:** Basic Station  
- **Gateway EUI:** El EUI de tu gateway  
- **Server:** CUPS Server  
- **URL:** La URL CUPS copiada antes  
- **Authentication Mode:** TLS Server and Client Authentication

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS21.PNG" alt="Gateway Config" width="800"/></p>

Copia el contenido del archivo del certificado (puede abrirse como texto).

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS23.PNG" alt="Certificate Text" width="800"/></p>

### Verifica el Gateway

En la página de Gateways selecciona el que agregaste.

En detalles LoRaWAN verás el estado de conexión y fecha/hora del último uplink recibido.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/gate-connected.png" alt="Gateway Connected" width="800"/></p>

## Añadir Perfiles

Los perfiles de dispositivo y servicio describen configuraciones comunes para facilitar agregar dispositivos.

### Añadir Perfil de Dispositivo

Ve a `Devices` > `Profiles`, haz clic en `Add device profile`.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS11.PNG" alt="Add Device Profile" width="800"/></p>

Proporciona un nombre, selecciona la banda de frecuencia (RfRegion) usada y deja las demás opciones por defecto.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/proflie2.png" alt="Device Profile Config" width="800"/></p>

### Añadir Perfil de Servicio

Ve a `Devices` > `Profiles`, haz clic en `Add service profile`.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS13.PNG" alt="Add Service Profile" width="800"/></p>

Se recomienda dejar activada la opción `AddGWMetaData` para recibir metadatos adicionales de gateway (RSSI, SNR).

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/profile4.png" alt="Service Profile Config" width="800"/></p>

### Añadir Destino

Ve a `Devices` > `Destination`, haz clic en `Add destination`.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS15.PNG" alt="Add Destination" width="800"/></p>

Selecciona `Publish to AWS IoT Core Message Broker` y asigna un nombre al tópico MQTT.

Selecciona permisos: usa el rol `IoT Wireless Gateway Cert Manager Role`.

:::info
El nombre del destino solo puede contener caracteres alfanuméricos, guiones (-) y guiones bajos (_), sin espacios.
:::

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS14.png" alt="Destination Config" width="800"/></p>

## Añadir Dispositivos LoRaWAN

### Añadir dispositivo inalámbrico

Ve a `LPWAN devices` > `Devices`, haz clic en `Add wireless device`.

- **Wireless device specification:** OTAAv1.0x  
- **DevEUI/APP EUI/APP key:** Encuentra estos datos en la SenseCAP Mate APP ([Guía](https://wiki.seeedstudio.com/Get_Started_with_SenseCAP_T1000_tracker/#get-started)).

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS17.PNG" alt="Add Wireless Device" width="800"/></p>
<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="Device Keys" width="800"/></p>

Selecciona el perfil de dispositivo y destino creados antes.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/device-eui2.png" alt="Select Profile and Destination" width="800"/></p>

En la página Dispositivos, elige el dispositivo agregado para ver detalles.

En la sección detalles verás la fecha de última recepción de datos.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS19.PNG" alt="Device Details" width="800"/></p>

## Configurar el decodificador (decoder)

### Crear reglas de mensaje

1. Navega a la pestaña `Message routing` → `Rules`, y haz clic en `Create Rule`.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules.png" alt="Create Rule" width="800"/></p>

2. Asigna un nombre a la regla y envíala.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules2.png" alt="Name Rule" width="800"/></p>

- `SQL version`: 2016-03-23  
- `SQL statement`: `SELECT * FROM "YourDestinationTopic"`  

Ejemplo: si el tópico destino es `t1000-raw`, escribir `SELECT * FROM "t1000-raw"`

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sql.png" alt="SQL Statement" width="800"/></p>

3. Baja a `Rule actions`, selecciona `Lambda` para `Action 1`, y haz clic en `Create a Lambda function`.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rule-action.png" alt="Create Lambda" width="800"/></p>

- `Function name`: pon un nombre a la función  
- `Runtime`: Node.js 20.x  
- `Architecture`: x86_64  

Haz clic en `Create function`.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cre-function.png" alt="Create Lambda Function" width="800"/></p>

4. Después de crearla, regresa a la página de reglas, refresca y selecciona la función Lambda creada.

Haz clic en `Next` y luego confirma con `Create`.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sel-function.png" alt="Select Lambda Function" width="800"/></p>

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules3.png" alt="Create Rule Confirm" width="800"/></p>

### Configurar la función Lambda

1. Regresa a `Message routing` → `Rules`, selecciona la regla creada y en `Actions` haz clic en `Lambda`. Luego entra a la configuración de la función Lambda.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules4.png" alt="Lambda Action" width="800"/></p>

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules5.png" alt="Go to Lambda" width="800"/></p>

2. En la configuración de la función, renombra `index.mjs` a `index.js`, elimina todo el código y reemplázalo con el script disponible en [Resource](#resource).

Haz clic en `Deploy` para publicar los cambios.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod.png" alt="Deploy Lambda" width="800"/></p>

:::tip Nota  
Recuerda reemplazar los valores de `region` y `device id` en el script según tu dispositivo.  
:::

### Modificar permisos de la función Lambda

1. En la función Lambda, ve a `Configuration` → `Permissions` → `Edit`.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod-per.png" alt="Edit Permissions" width="800"/></p>

2. Haz clic en el rol asociado al Lambda (`View the xxxxxxxxxxx role`).

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/existing-role.png" alt="View Role" width="800"/></p>

3. Selecciona `Add permissions` → `Attach policies`.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/policies.png" alt="Attach Policies" width="800"/></p>

4. Busca `AdministratorAccess`, selecciónalo y haz clic en `Add Permissions`.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/policies2.png" alt="Add Admin Access" width="800"/></p>

### Verificar los datos

1. Ve a la página `MQTT test client`.

2. Ingresa `#` para suscribirte a todos los tópicos y haz clic en `Subscribe`.

Verás los datos crudos publicados en `t1000-raw` y los datos decodificados en `tracker/measurement`.

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dataview1.png" alt="Raw Data" width="800"/></p>

<p align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dataview2.png" alt="Decoded Data" width="800"/></p>

## Resource

[SenseCAP T1000 Tracker Decoder para AWS (GitHub)](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/AWS/SenseCAP_T1000_AWS_Decoder.js)



