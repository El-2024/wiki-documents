---
title: Conectando Codecraft con Azure IoT usando Wio Terminal
nointro:
keywords:
  - Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/Azure_IoT_CC
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Conectando Codecraft con Azure IoT usando Wio Terminal

## Introducción

En esta guía te mostraremos cómo conectar Codecraft con Azure IoT utilizando el Wio Terminal y cómo aplicar sensores en proyectos de IoT.  
[Codecraft](https://ide.tinkergen.com/) es una plataforma de programación gráfica desarrollada por Seeed Studio, disponible tanto en línea como fuera de línea.  
[Azure IoT](https://apps.azureiotcentral.com/) es una plataforma en la nube de Microsoft para aplicaciones de IoT que ofrece escalabilidad, seguridad e integración con tus aplicaciones empresariales.

<div align="center"><img src="https://files.seeedstudio.com/wiki/CCandAzure/jihe.png" /></div>

## Primeros Pasos

### Hardware

**Componentes necesarios:**

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) ×1  
- Cable USB tipo C ×1  
- Computadora ×1

**Conexión del hardware:**

Conecta el Wio Terminal a tu computadora mediante el cable USB tipo C.

### Software

**Requisitos de software:**

- [Codecraft](https://ide.tinkergen.com/)
- [Azure IoT](https://apps.azureiotcentral.com/)

### Tutorial Paso a Paso

En este tutorial aprenderás a usar el Wio Terminal con Codecraft y luego conectar tu proyecto con Azure IoT para entrenar y usar un modelo de *Machine Learning*.  
Este proyecto se basa en la plataforma Arduino, por lo que se requiere tener instalado el IDE de Arduino y sus librerías.  
Si es tu primera vez utilizando el Wio Terminal, te recomendamos esta guía rápida: [Guía de inicio con Wio Terminal](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/).

### Pasos

#### 1. Conecta el Wio Terminal a la PC

#### 2. Abre [Codecraft](https://ide.tinkergen.com/) y selecciona Wio Terminal

Selecciona **"Wio Terminal"** como placa:

![](https://files.seeedstudio.com/wiki/CCandAzure/cc1.png)

Haz clic en **"Connect"**. Si es tu primera vez usando Codecraft, puede que necesites instalar **CodecraftAssistant**.

![](https://files.seeedstudio.com/wiki/CCandAzure/cc2.png)

![](https://files.seeedstudio.com/wiki/CCandAzure/cc3.png)

#### 3. Construye tu programa con bloques

Arrastra los bloques del panel izquierdo y crea un programa como este:

![](https://files.seeedstudio.com/wiki/CCandAzure/cc5.png)

En este punto deberás configurar la **red Wi-Fi** y el **"ID Scope" de Azure IoT Central**. Asegúrate de usar una red Wi-Fi disponible en tu entorno.

![](https://files.seeedstudio.com/wiki/CCandAzure/cc6.png)

#### 4. Crea una nueva app en Azure IoT

Accede a [Azure IoT Central](https://apps.azureiotcentral.com/), haz clic en **"Build"** (construir) y crea una nueva aplicación.  
Los campos solicitados son personalizados y no afectan el funcionamiento.

![](https://files.seeedstudio.com/wiki/CCandAzure/az.png)

#### 5. Agrega el Wio Terminal como dispositivo

En el panel izquierdo, selecciona:  
**“Administration” → "Device connection" → "SAS-IoT-Device"**

![](https://files.seeedstudio.com/wiki/CCandAzure/az3.png)

#### 6. Copia y pega la información necesaria

Copia la siguiente información desde Azure y pégala en los bloques de Codecraft:

- **ID Scope**
- **Primary Key**
- **Device ID**

![](https://files.seeedstudio.com/wiki/CCandAzure/az5.png)  
![](https://files.seeedstudio.com/wiki/CCandAzure/az6.png)

#### 7. Sube el programa y verifica los resultados

Haz clic en **"Upload"** para cargar el programa en el Wio Terminal.

![](https://files.seeedstudio.com/wiki/CCandAzure/ccaz4.png)

A veces puede tardar en subirse el código. Por favor, ten paciencia.

Luego, en el panel de Azure IoT, ve a:  
**"Devices" → "SAS-IoT-Device"**

Deberías ver una salida como esta:

![](https://files.seeedstudio.com/wiki/CCandAzure/ccaz5.png)

## Soporte Técnico y Comunidad

¡Gracias por elegir nuestros productos!  
Estamos aquí para ofrecerte diferentes formas de soporte y asegurar que tu experiencia sea lo más fluida posible.  
Contamos con múltiples canales de comunicación según tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
