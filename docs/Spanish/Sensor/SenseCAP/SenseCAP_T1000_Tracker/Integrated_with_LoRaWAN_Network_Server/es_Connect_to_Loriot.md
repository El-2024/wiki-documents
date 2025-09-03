---
description: Connect SenseCAP T1000 Tracker to Loriot
title: Conexión a Loriot
keywords:
- Tracker
- Loriot
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_T1000_Tracker_Loriot
last_update:
  date: 07/21/2025
  author: Guillermo
---

# Conectar SenseCAP T1000 Tracker con LORIOT LoRaWAN Network Server (LNS)

## Crear Cuenta en LORIOT

Si no tienes cuenta en LORIOT, regístrate [aquí](https://loriot.io/register.html).  
Selecciona uno de los *LORIOT Community Public Servers* según tu región y crea tu cuenta.

## Añadir una Red (Network)

Una red en LORIOT es un grupo de gateways LoRaWAN para gestionarlos y monitorearlos eficientemente.

1. En el panel LORIOT, ve a `Network` y haz clic en **Add Network**.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddNetwork.png" width="800" alt="Agregar Red LORIOT"/>
</p>

2. Asigna tu gateway a una red (puede ser individual o un grupo).  
Puedes agrupar gateways por ubicación, modelo, cliente, etc.

3. Un gateway solo puede pertenecer a una red.

## Añadir tu primer Gateway

1. Navega a la red creada, haz clic en **Add Gateway**.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddGateway.png" width="800" alt="Agregar Gateway"/>
</p>

2. Selecciona el modelo de gateway (ejemplo: LoRa Basics Station Semtech).

3. Ingresa la dirección MAC del gateway (eth0 MAC address, 6 octetos separados por dos puntos).

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/NInfo.png" width="800" alt="Info Gateway"/>
</p>

4. Define la ubicación del gateway ya sea en el mapa o con dirección manual.

## Configurar Certificado del Gateway

1. En la página `Certificate` encontrarás:
   - Dirección del Network Server  
   - Puerto del Network Server  
   - Certificado TLS CA para descargar o copiar

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/ConfigureGateway.png" width="800" alt="Configurar Gateway"/>
</p>

2. Configura tu gateway para usar modo **LoRa Basics Station**, e ingresa la dirección, puerto y certificado TLS previamente obtenidos.

3. Verifica en LORIOT que tu gateway esté **online** y funcionando correctamente.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/GatewayOnline.png" width="800" alt="Gateway Online"/>
</p>

## Añadir una Aplicación

Las aplicaciones organizan y gestionan los dispositivos y definen la salida de datos.

1. En LORIOT, ve a `Applications` y haz clic en **Add Application**.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddApplicaiton.png" width="800" alt="Agregar Aplicación"/>
</p>

## Añadir tu primer dispositivo (SenseCAP T1000 Tracker)

1. Dentro de la aplicación, haz clic en **Enroll Device**.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/AddDevice.png" width="800" alt="Agregar Dispositivo"/>
</p>

2. LORIOT soporta LoRaWAN 1.0.x y 1.1.  
Selecciona el proceso OTAA (Over-The-Air-Activation) recomendado para la mayoría de dispositivos.

3. Conecta tu Tracker vía Bluetooth usando SenseCAP Mate App y obtén:  
   - Device EUI  
   - App EUI  
   - App Key  

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/config_3.png" width="600" alt="Información OTAA"/>
</p>

4. Selecciona **Other Platform** y copia el Device EUI, App EUI y App Key.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/OTAAInfo.png" width="400" alt="Copiar Credenciales"/>
</p>

5. Haz clic en **Enroll** para registrar el dispositivo.

6. Después de añadir el dispositivo, podrás ver el flujo de datos en la plataforma Loriot.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Loriot/DeviceDetails.png" width="800" alt="Detalles Dispositivo"/>
</p>
