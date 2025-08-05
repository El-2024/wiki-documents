---
description: Connect to Datacake via TTN
title: Conectar a Datacake via TTN
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image1.webp
slug: /es/how_to_connect_sensecap_s210x_to_datacake_via_ttn
last_update:
  date: 07/23/2025
  author: Guillermo
---

# Conectar a Datacake mediante TTN

## Datacake
Datacake es una plataforma IoT versátil de bajo código. Permite a cualquier persona crear aplicaciones IoT personalizadas de forma rápida, sin necesidad de programar, y convertirlas en soluciones de marca blanca con un solo clic.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image1.webp)

## Paso 1: Conectar a TTN
Consulta la guía “[Cómo conectar sensores S210X a The Things Network](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf)”.

**Nota:** Selecciona **“Other Platform”** en la configuración de plataforma. 

## Paso 2: Enviar datos desde TTN a Datacake

1. Crea una nueva cuenta en [Datacake](https://datacake.co/)  
2. Haz clic en **"Devices" -> "Add Device"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image2.png)

3. Selecciona **"LoRaWAN"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image3.png)

4. Selecciona **"New Product from template"**, busca **"Seeed"** y elige el producto correspondiente.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image4.png)

5. Selecciona **"The Things Stack V3"**, luego haz clic en **"Next"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image5.png)

6. Ingresa el **"DEVEUI"** y **"NAME"**, luego haz clic en **"Next"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image6.png)

- Selecciona **"Free"**  
- Haz clic en **"Add 1 device"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image7.png)

### Crear claves API para autenticación Webhook

1. En tu Workspace de Datacake, selecciona **"Members"** desde el menú lateral.  
2. Luego elige **"API Users"** desde la barra superior y cambia a esa pestaña.  
3. Haz clic en el botón **"Add API User"** (esquina superior derecha).

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image8.png)

4. Ingresa un nombre para tu usuario API.  
5. En la lista de permisos de Workspace, selecciona **"Devices"**.  
6. Haz clic en **"Add Permission for all Devices in Workspace"**.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image9.png)

7. Selecciona **"Can record measurements"**.  
8. Haz clic en **"Save"** para generar el token.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image10.png)

9. Haz clic en **"Copy"** para copiar el token.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image11.png)

Este token API ahora es válido para todos los dispositivos de tu espacio de trabajo. Si deseas un token para dispositivos específicos, puedes generarlo desde la configuración de cada uno (omitirá el permiso de “todos los dispositivos”).

### Crear integración en TTN

1. En la aplicación de TTN, selecciona **"Webhooks"** en el menú lateral.  
2. Haz clic en **"Add webhook"**.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image12.png)

3. Selecciona **"Datacake"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image13.png)

4. Ingresa un nombre para el Webhook ID.  
5. Pega el token copiado desde Datacake.  
6. Haz clic en **"Create Datacake webhook"**.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image14.png)

### Configurar Downlinks

Para habilitar los Downlinks en tu aplicación TTN, necesitas configurar tu dispositivo en Datacake:

1. Regresa a Datacake.  
2. Selecciona **"Configuration"** y desplázate un poco hacia abajo.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image15.png)

3. Haz clic en **"Change"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image16.png)

4. Llena los 4 campos de texto con la información que puedes encontrar en la consola de TTN:

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image17.png)

- **TTS Device ID:** ID de tu dispositivo en la aplicación de TTN.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image18.png)

- **TTI Server URL:** URL pública de la instancia TTN. Para TTN público v3: `eu1.cloud.thethings.network`
- **TTI App ID:** ID de tu aplicación en TTN.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image19.png)

### Crear clave API de TTN para Downlinks

1. Selecciona **"API keys"** y haz clic en **"Add API key"**.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image20.png)

2. Ingresa un nombre.  
3. Asigna los permisos necesarios para permitir Downlinks.  
4. Haz clic en **"Create API key"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image21.png)

5. Se mostrará una notificación. **¡Copia tu clave ahora ya que sólo se mostrará una vez!**  
6. Pega esta clave en los ajustes del dispositivo en Datacake.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image22.png)

7. Configuración final:

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image23.png)

**Nota:** No olvides hacer clic en **"Update"**

- ¡Downlinks configurados correctamente!

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image24.png)

### Agregar decodificador de payload

Copia tu decodificador de Payload en esta sección:

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image25.png)

También puedes encontrar el [SenseCAP-Decoder en GitHub](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main).
