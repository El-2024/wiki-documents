---
description: Connect S210X Sensor to Microsoft Azure IoT Central Via Node-RED
title: Connecta el Sensor S210X a Microsoft Azure IoT Central Via Node-RED
keywords:
- SenseCAP LoRaWAN Sensor& Microsoft Azure IoT Central
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/Connect-S210X-Sensor-to-Microsoft-Azure-IoT-Central
last_update:
  date: 07/23/2025
  author: Guillermo
---

# SenseCAP S210X + Node-RED + Azure IoT Central

La serie **SenseCAP S210X** está compuesta por sensores inalámbricos con conectividad **LoRaWAN®**, diseñados para aplicaciones industriales y de IoT. Permiten una **transmisión de datos de hasta 10 km** en entornos con línea de vista y 2 km en entornos urbanos, manteniendo un **bajo consumo energético**. Incorporan una batería reemplazable con una vida útil de hasta **10 años**, y un diseño resistente **IP66** para operar en temperaturas entre **-40 °C y 85 °C**.

Son compatibles con el protocolo **LoRaWAN® v1.0.3**, y pueden vincularse fácilmente escaneando su **código QR**, configurando la red y visualizando los datos desde el portal **SenseCAP**, el cual soporta protocolos como **HTTP** y **MQTT**.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/001.png" alt="SenseCAP S210X" width="600" />
</p>

<p align="center">
  <a href="https://www.seeedstudio.com/catalogsearch/result/?q=S210x" target="_blank">
    <img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" alt="Comprar S210X" />
  </a>
</p>

## Conectar SenseCAP S210X a Microsoft Azure IoT Central usando Node-RED

En este tutorial aprenderás cómo conectar los sensores de la serie **S210X** con **Microsoft Azure IoT Central** usando **Node-RED**.

### ¿Por qué usar Node-RED?

**Node-RED** es una herramienta de programación visual basada en flujo, ideal para integrar dispositivos de hardware, APIs y servicios web. Proporciona una interfaz gráfica en el navegador donde puedes crear flujos y automatizaciones de manera simple con un solo clic.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/002.png" alt="Node-RED" width="600" />
</p>

Esta integración facilita conectar los datos del portal SenseCAP con plataformas PaaS como Azure para su procesamiento avanzado.

## 1. Requisitos Previos

- Sensor **SenseCAP S210X** vinculado y configurado en el portal SenseCAP.  
- Acceso a **SenseCAP Portal** con API Key.  
- Una cuenta en **Microsoft Azure IoT Central**.  
- **Node.js** instalado en tu equipo (versión recomendada: **Node.js 14.x LTS**).  
- Conexión a Internet.  

## 2. Instalar Node.js

Descarga e instala la versión recomendada desde el sitio oficial: [https://nodejs.org/en/](https://nodejs.org/en/)

## 3. Instalar Node-RED

Abre una terminal o consola de comandos y ejecuta:

```cpp
sudo npm install -g --unsafe-perm node-red
```

:::info Nota
Si estás utilizando **Windows**, **no** inicies el comando con `sudo`.
:::

Este comando instalará **Node-RED** como un módulo global junto con sus dependencias.  
Una vez instalado como módulo global, puedes usar el siguiente comando para iniciar Node-RED desde tu terminal:

```cpp
node-red
```

![IMG\_258](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/003.png)

Luego podrás acceder al editor de Node-RED apuntando tu navegador a [http://localhost:1880](http://localhost:1880/).

### Obtener la API de SenseCAP
Antes de continuar con esta sección, asegúrate de haber vinculado tu dispositivo S210x en la consola de SenseCAP.

Inicia sesión en la [**Consola de SenseCAP**](https://sensecap.seeed.cc/portal/#/dashboard). En el menú desplegable ubicado a la derecha del nombre de usuario en la parte superior del panel, selecciona **Organization Information** para obtener el **Organization ID**.

![IMG_259](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/004.png)

Luego, también necesitamos obtener la clave API de SenseCAP. Haz clic en **Security -> Access API keys** en el menú lateral izquierdo del panel. Luego crea una nueva clave de acceso.

![IMG_260](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/005.png)

Haz clic en el **API ID** que creaste y obtendrás tus **Access API keys**. Por favor copia esta clave y el **Organization ID**, ya que los utilizaremos más adelante.

![IMG_261](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/006.png)

### Configuración de Node-RED
![IMG_262](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/007.png)

**Paso 1.** Agrega un nuevo nodo mqtt-broker

Arrastra un nodo **mqtt in**, haz doble clic para abrir la página de configuración y luego haz clic en el botón de edición junto a **Add new mqtt-broker**.

![IMG_263](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/008.png)

Configura el broker MQTT con los siguientes datos:

- **Servidor:** `openstream.api.sensecap.seeed.cc`  
- **Puerto:** `1883`  
- **Protocolo:** MQTT V3.1.1  
- **Formato del Client ID:** `org-"Organization ID" "Random ID"`  

> **Organization ID:** Obtenido anteriormente.  
> **Random ID:** Números y letras minúsculas generadas aleatoriamente.

Ejemplo: `org-43243***23-test`

![IMG_264](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/009.png)

Luego completa los campos de **Security** con:

- **Username:** `org-"Organization ID"`  
- **Password:** la clave **Access API** obtenida previamente.

![IMG_265](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/010.png)

### Agregar Topic

La configuración del topic en un formato específico determina el tipo de dispositivo y tipo de dato que se recibirá.

Formato del Topic:
`/device_sensor_data/"OrgID"/"DeviceEUI"/"Channel"/"Reserved"/"MeasurementID"`

| Campo         | Descripción |
|--------------|-------------|
| **OrgID**     | Puedes encontrarlo en la información de tu organización |
| **DeviceEUI** | En la etiqueta del dispositivo o en "Propiedades Básicas" |
| **Channel**   | Interfaz física para conectar sensores. Por defecto: `1` |
| **Reserved**  | Campo reservado |
| **MeasurementID** | Ver lista de [mediciones compatibles](https://sensecap-docs.seeed.cc/measurement_list.html) |

:::info Nota
`+` indica que ese campo no tiene filtros y puede coincidir con todos. `/+/+/+/+` escucha todos los valores de `"DeviceEUI"`, `"Channel"`, `"Reserved"`, `"MeasurementID"`.
:::

**Ejemplo:** /device\_sensor\_data/424988\*\*\*\*44/2CF7F\*\*\*0002/+/+/+

Este topic significa que se recibirán todos los datos de sensado remoto del dispositivo actual.

![IMG_266](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/011.png)

**Paso 2.** Agrega nodo debug

Arrastra un nodo **debug**, conéctalo al nodo **mqtt in** y haz clic en **Deploy**.

Después del despliegue exitoso, verás **"Connected"** debajo del bloque **mqtt in**. El intervalo de envío de datos dependerá del sensor conectado. Los datos aparecerán en la ventana de depuración a la derecha.

![IMG_267](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/012.png)

## **SenseCAP + Node-RED + Azure IoT Central**

[**Microsoft Azure IoT Central**](https://azure.microsoft.com/en-us/services/iot-central) es una solución SaaS (Software como Servicio) de IoT global totalmente gestionada. Permite conectar, supervisar y administrar activos IoT de forma sencilla y escalable.

Azure IoT Central es seguro, escalable, reutilizable y se integra con tus aplicaciones empresariales existentes. También ofrece gestión centralizada para reconfigurar y actualizar dispositivos.

En este capítulo, continuaremos utilizando Node-RED para gestionar la suite de sensores S210X en Microsoft Azure IoT Central.

### Configuración de Microsoft Azure IoT Central

**Paso 1.** Inicia sesión en Azure IoT Central

Accede al sitio [**Azure IoT Central**](https://apps.azureiotcentral.com/home), haz clic en **Build** en el menú lateral y selecciona **Custom apps**.

![IMG_268](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/013.png)

**Paso 2.** Llena el **nombre de la aplicación** y selecciona un **plan de precios**.

La URL de la aplicación se generará automáticamente cuando completes el nombre.

![IMG_269](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/014.png)

> Nota: Si eres nuevo en Azure IoT Central, selecciona el plan Free para evitar costos.

![IMG_270](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/015.png)

**Paso 3.** Haz clic en **Create** para crear tu aplicación. ¡Ya está lista!

![IMG_271](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/016.png)

**Paso 4.** Crear una plantilla de dispositivo

En el menú lateral izquierdo, haz clic en **Device templates** y crea una nueva plantilla.

![IMG_272](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/017.png)

Asigna un nombre a tu plantilla y haz clic en **create**.

![IMG_273](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/018.png)
![IMG_274](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/019.png)

**Paso 5.** Crear un dispositivo

Haz clic en **Devices -> S2103** en el menú lateral.

![IMG_275](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/020.png)
![IMG_276](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/021.png)

Una vez creado el dispositivo, haz clic sobre él y luego presiona el botón **Connect** en la esquina superior izquierda.

Guarda esta información, la utilizaremos en los siguientes pasos.

![IMG_277](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/022.png)

### **Configuración de Node-RED**

**Paso 1.** Instalar paletas de Azure IoT

Haz clic en el menú superior derecho y selecciona **Settings**.

![IMG_278](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/023.png)

Busca e instala `node-red-contrib-azure-iot-central` en la sección **Paletts - Install**.

![IMG_279](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/024.png)

**Paso 2.** Configurar nodo Azure IoT Central

Arrastra un nodo **Azure IoT Central** desde la barra de funciones a la izquierda. Haz doble clic para editarlo y luego presiona el botón de edición.

![IMG_280](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/025.png)

Configura con la siguiente información:

- **Transporte:** MQTT  
- **Autenticación:** SAS  
- **Scope ID / Device ID / Primary Key:** Ya los obtuviste anteriormente

![IMG_281](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/026.png)

**Paso 3.** Configurar nodo de función

Para reportar datos a Azure IoT Central, debemos darles un formato específico. Por eso es necesario agregar un nodo **function** para procesar el formato de los datos.

Arrastra un nodo **function** desde la barra izquierda, haz doble clic para editarlo y luego copia el siguiente código en **On Message**:

![IMG_282](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/027.png)

**Código**:

```cpp
{
    var payload = msg.payload;
    var topic = msg.topic;
    var strs = topic.split("/");
    var length = strs.length
    if (length >= 2) {
        var measurementId = strs[length - 1]
        var body = {}
        var value = payload.value
        if (measurementId == 4097) {
            body.AirTemperature = value
        } else if (measurementId == 4098) {
            body.AirHumidity = value
        } else if (measurementId == 4100) {
            body.CO2 = value
        }
        msg.payload = body;
    }
    return msg;
}
```

Si deseas ver la información de registro de los datos, puedes agregar un nodo **debug** después del nodo **function**.

![IMG_283](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/028.png)

Una vez que el sensor S210X se encienda y comience a funcionar, empezará a enviar datos al servidor PaaS de SenseCAP. En ese momento, podremos verificar los datos en Azure IoT Central.

### **Presentación de Datos**

Los datos visibles en la columna **Raw data** se colocan como **Unmodeled data**, por lo tanto, necesitamos analizarlos usando el código configurado anteriormente.

Agrega la capacidad que necesitas, luego haz clic en **save** y **publish**.

![IMG_284](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/029.png)
![IMG_285](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/030.png)

Después de eso, podrás ver claramente los datos en crudo enviados por el sensor.

![IMG_286](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/031.png)

Si deseas enriquecer la página de tu panel de datos, también puedes configurar los datos para que se muestren en **Overview**.

Haz clic en **Overview** en el menú de navegación izquierdo.

![IMG_287](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/032.png)

Despliega el menú **starts with devices** y selecciona la telemetría que deseas visualizar.

![IMG_288](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/033.png)

Haz clic en **Add tile** y verás que se añade el panel al dashboard de Azure IoT Central.

![IMG_289](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/034.png)

Ahora puedes personalizar tu panel de monitoreo de datos del sensor según tus preferencias.

Después de finalizar tus cambios, simplemente haz clic en **save** y **publish**.

![IMG_290](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/035.png)
![IMG_291](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/036.png)

¡Ahora puedes ver los datos de tu sensor desde tu panel personalizado!

![IMG_292](https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/037.png)
