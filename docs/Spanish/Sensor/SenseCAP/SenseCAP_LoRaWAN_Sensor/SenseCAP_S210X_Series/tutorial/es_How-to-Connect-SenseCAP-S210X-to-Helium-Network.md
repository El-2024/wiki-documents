---
description: Connect to Helium Network
title: Conectar a Helium Network
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-Helium-Network
last_update:
  date: 07/23/2025
  author: Guillermo
---

# Conectar a la Red Helium

## Consola Helium

La consola Helium es una herramienta de gestión de dispositivos basada en la web, alojada por la Helium Foundation, que permite a los desarrolladores registrar, autenticar y administrar sus dispositivos en la red Helium. Además de la gestión de dispositivos, la consola proporciona integraciones preconfiguradas para enrutar datos a través de HTTPS, MQTT o directamente a servicios en la nube como AWS IoT.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/003.png)

## Conectar a la Red Helium

### Crear una nueva cuenta
Visita el [sitio de Helium](https://console.helium.com/) y regístrate.

### Configurar el sensor
1. Abre la aplicación **SenseCAP Mate**  
2. Mantén presionado el botón del sensor durante 3 segundos; el LED parpadeará con una frecuencia de 1 s.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/004.png)

3. Pulsa el botón “**Setup**” para activar el Bluetooth y luego haz clic en “**Scan**” para escanear el sensor.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/005.png)

4. Selecciona el sensor por su número de serie (S/N en la etiqueta). Se mostrará su información básica.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/006.png) ![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/007.png)

### Configurar la frecuencia del sensor desde la app SenseCAP Mate

Establece la frecuencia adecuada según la del gateway.

1. Haz clic en “**Setting**” y selecciona la plataforma “**Helium**”.

![Helium Settings](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/008.png) ![Helium Platform](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/009.png)

2. Selecciona el plan de frecuencia. Por ejemplo, si el gateway es US915, selecciona US915.

3. Pulsa el botón “**Send**” para aplicar la configuración al sensor.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0010.png)

4. Presiona “**Home**” para desconectar Bluetooth. El sensor se reiniciará.

5. Al desconectarse el sensor, el LED se encenderá durante **15 segundos** y luego parpadeará como **luz respiratoria**.

6. Al unirse exitosamente a la red, el LED **parpadeará rápidamente durante 2 s**.

# Configuración de la Consola Helium

## Agregar nuevo dispositivo

1. Haz clic en “**Devices**” → “**Add New Device**”

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0011.png)

2. Ingresa el **Device EUI**, **App EUI** y **App Key** (ver app SenseCAP Mate).

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0012.png)

3. Guarda el dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0013.png)

4. Agrega una nueva etiqueta (label) y asígnala al dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0014.png)
![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0015.png)
![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0016.png)
![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0017.png)

## Verificar datos en Helium

1. Ingresa a la página de detalles del dispositivo y ubica la sección **REAL TIME PACKETS**.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0018.png)

2. Enciende el sensor. Se mostrarán los datos en bruto.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0019.png)

## Enviar datos desde Helium a Datacake

### Crear cuenta en Datacake

1. Regístrate en [Datacake](https://datacake.co/)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0020.png)

2. Haz clic en “**Edit Profile**” → “**API**” → Obtén el token API.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0021.png)
![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0022.png)

### Agregar nueva integración en la consola Helium

1. Haz clic en “**Integrations**” → “**Add New Integration**” → “**Datacake**”

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0023.png)

2. Introduce el **token de Datacake** (ver sección anterior) y nombra tu integración.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0024.png)

### Configurar Flujos en Helium

1. Haz clic en “**Flows**”

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0025.png)

2. Arrastra el **Label** a un espacio vacío.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0026.png)

3. Arrastra la **Integration** a otro espacio.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0027.png)

4. Conecta ambos bloques.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0028.png)

5. Guarda los cambios.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0029.png)

### Agregar sensor en Datacake

1. En el panel de Datacake, haz clic en “**Device**” → “**Add Device**”

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0030.png)

2. Busca “**Seeed**” y selecciona un sensor.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0031.png)

3. Selecciona la plantilla del sensor.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0032.png)

4. Selecciona “**Helium**”

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0033.png)

5. Ingresa el **Device EUI** y el **Nombre del dispositivo**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0034.png)

6. Selecciona tu plan y haz clic en **Add device**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0035.png)

### Ver datos desde Datacake

Haz clic en el botón **Debug** para ver el registro de datos.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0036.png)
![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0037.png)
![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0038.png)
