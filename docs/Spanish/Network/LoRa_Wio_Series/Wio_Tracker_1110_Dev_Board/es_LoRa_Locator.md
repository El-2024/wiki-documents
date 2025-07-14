---
description: Connect_Wio_Tracker_1110_to_TTN
title: Conexión del Wio Tracker a LoRa Cloud™ Locator
keywords: 
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/connect_wio_tracker_to_locator
sidebar_position: 4
last_update:
  date: 05/22/2025
  author: Guillermo
---



Este documento detalla las instrucciones paso a paso para configurar la [Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) y configurarla en el [LoRa Cloud™ Locator](https://locator.loracloud.com).




## Configuración del Gateway

### Añadir el Gateway en LoRa Cloud™ Locator

Inicia sesión en la [web de LoRa Cloud™ Locator](https://locator.loracloud.com).

Navega a `GATEWAY SETTINGS` y haz clic en `Add New Gateway`.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/gateway-locator.png" alt="pir" width={800} height="auto" /></p>


Ingresa el EUI del Gateway y selecciona la banda de frecuencia LoRaWAN® correcta según tu ubicación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/gateway-locator2.png" alt="pir" width={800} height="auto" /></p>



Haz clic en `Create` y aparecerá una ventana emergente con los archivos de soporte del nuevo Gateway (certificados, llaves). Asegúrate de hacer clic en Descargar y guarda los archivos en un lugar seguro (es posible que necesites permitir que el navegador descargue múltiples archivos). Los archivos descargados son:

* **cups_url.txt**: Contiene la URL que debe usarse en tu gateway para apuntar al servidor CUPS
* **cups.trust**: Contiene el certificado de confianza CUPS
* **cups.crt**: Contiene el certificado utilizado para conectar al servidor CUPS
* **cups.key**: Contiene la llave privada utilizada para conectar al servidor CUPS



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/gateway22.png" alt="pir" width={800} height="auto" /></p>

### Configurar el Gateway

Luego necesitamos configurar el [SenseCAP M2 Multi-Platform LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html), consulta [Get Started](https://wiki.seeedstudio.com/quick_start_with_M2_MP/) para más detalles.

Inicia sesión en la página Luci, navega a `LoRa` > `LoRa Network`

* **Paso 1**: Configuración de la red LoRa  
Navega a **LoRa** > **LoRa Network**


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/lora-network.png" alt="pir" width={800} height="auto" /></p>



* **Paso 2**:Cambia el Mode a Basics Station

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/basic-station.png" alt="pir" width={800} height="auto" /></p>



* **Paso 3**: Configuración de Basic Station:

2. **Gateway EUI**: Obtendrá automáticamente el EUI del gateway conectado.

3. **Servidor**: Selecciona CUPS.

4. **URL:**: Copia la URL que está en tu archivo `cups_url.txt`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/cups-url.png" alt="pir" width={800} height="auto" /></p>


```cpp
Example: https://A321**0HK3U1DZL.cups.lorawan.eu-west-1.amazonaws.com:443
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/server2.png" alt="pir" width={800} height="auto" /></p>


5. **Modo de autenticación:** TLS Server and Client Authentication

6. **trust**/**certificate**/**key** : Copia el contenido de los archivos que descargaste anteriormente.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/certificates.png" alt="pir" width={800} height="auto" /></p>

Haz clic en `Save & Apply` una vez que todo esté configurado.

Una vez que tu gateway esté correctamente configurado, su estado debería cambiar a `Connected`.




<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/connected-locator.png" alt="pir" width={800} height="auto" /></p>


## Configuración del dispositivo

### Configurar el dispositivo

Por favor, consulta [Conectar Wio Tracker 1110 Dev Board a TTN](https://wiki.seeedstudio.com/connect_wio_tracker_to_TTN/) para seleccionar la plataforma en TTN.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>



### Agregar dispositivo en LoRa Cloud™ Locator

Luego regresa a la página web de LoRa Cloud™ Locator, navega a `DEVICE SETTINGS` y haz clic en `Add New Device`.

**Tipo de rastreador**: `LoRa Basics™ Modem SDK`

Elige APPKey como modo de activación, luego copia el Dev EUI, Join EUI y APP key que definimos antes.

**Red**: `The Things Network Community`, y selecciona tu clúster regional, luego haz clic en `Create` para agregar tu dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/device-locator.png" alt="pir" width={800} height="auto" /></p>

Una vez que el dispositivo se una exitosamente a la red, podrás ver sus mensajes aquí.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/device-status.png" alt="pir" width={800} height="auto" /></p>

Luego navega a `TRACKING` para poder revisar la ubicación en tiempo real.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/tracking.png" alt="pir" width={800} height="auto" /></p>



