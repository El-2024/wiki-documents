---
description: This guide will help you set up and configure network connections for your SenseCAP Watcher Agent
title: Configuración de Red del Dispositivo
sidebar_position: 2
keywords:
  - SenseCAP
  - Watcher Agent
  - Network Setup
  - IoT Configuration
  - WiFi Configuration
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /es/device_network_setup
last_update:
  date: 07/25/2025
  author: Guillermo
---

# Guía de Configuración de Red del Dispositivo

Esta guía te ayudará a configurar la red de tu **SenseCAP Watcher Agent** paso a paso para que puedas conectarlo fácilmente y comenzar a usarlo.

## Requisitos Previos

Antes de iniciar, asegúrate de contar con lo siguiente:

- Dispositivo **SenseCAP Watcher** con firmware Agent instalado  
- Red Wi-Fi disponible de **2.4GHz** (no se admiten redes con autenticación secundaria, como redes empresariales)  
- Dispositivo móvil o computadora para la configuración  

## Pasos para la Configuración de Red

### Configuración Inicial

**Paso 1. Encender el dispositivo**

- Conéctalo a una fuente de alimentación, o mantén presionado el botón de rueda (esquina superior derecha) durante 5 segundos y luego suéltalo.

:::tip Nota
Si acabas de flashear el firmware, usa un pin para presionar suavemente el botón de reinicio.
<div style="text-align:center"><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style="width:200px; height:auto"/></div>
:::

- El dispositivo se encenderá e ingresará al **modo de configuración Wi-Fi**.

### Configuración Wi-Fi

**Paso 1. Conéctate al hotspot del dispositivo**

- Desde tu computadora o teléfono, busca una red Wi-Fi llamada `Watcher-XXXX`  
- Conéctate a esa red  
- Espera unos segundos  
- La interfaz de configuración debería abrirse automáticamente en tu navegador  

:::note
Si la página no se abre automáticamente, asegúrate de seguir conectado a la red `Watcher-XXXX` y ve manualmente a:  
**[http://192.168.4.1](http://192.168.4.1)**
:::

**Paso 2. Configura la conexión Wi-Fi**

- Espera unos 5 segundos a que el escaneo de redes Wi-Fi finalice  
- Selecciona tu red Wi-Fi doméstica de 2.4GHz  
- El campo SSID se llenará automáticamente  
- Ingresa la contraseña de tu red Wi-Fi  
- Haz clic en **"Connect"** para continuar  

<div style="text-align:center"><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/wifi%20config.jpg" style="width:500px; height:auto"/></div>

:::note
- Solo se admiten redes de **2.4GHz**  
- Si usas hotspot desde iPhone, habilita la opción **"Compatibilidad Máxima"**  
- No cierres ni recargues la página durante el escaneo
:::

---

**Paso 3. Finaliza la conexión**

- Si las credenciales son correctas, el dispositivo se conectará automáticamente  
- Verás una marca de verificación verde  
- El dispositivo se reiniciará en 3 segundos  
- Tras reiniciarse, se conectará automáticamente a la red configurada  

<div style="text-align:center"><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/wifi%20done.jpeg" style="width:500px; height:auto"/></div>

---

### Registro del Dispositivo

**Paso 1. Código de verificación en pantalla**

- El dispositivo mostrará un código de 6 dígitos para registrar el dispositivo  
<div style="text-align:center"><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/activation.jpg" style="width:300px; height:auto"/></div>

**Paso 2. Registrar dispositivo**

- Accede a la plataforma [SenseCraft AI - Watcher Agent](https://sensecraft.seeed.cc/ai/home)  
- Sigue esta [guía de configuración web](https://wiki.seeedstudio.com/Web_Control_Panel/)

## Operaciones Básicas

1. **Encender:** Mantén presionado el botón de rueda de 3 a 5 segundos  
2. **Apagar:** Desconecta la energía o mantén presionado el botón de rueda 3 segundos  
3. **Reiniciar:** Usa un pin para presionar suavemente el botón de reinicio  
4. **Restaurar de fábrica:** Mantén presionado el botón de rueda durante 10 segundos  
5. **Reingresar al modo de configuración Wi-Fi:**  
   - Cuando el dispositivo muestre "Scanning Wi-Fi", presiona el botón de rueda una vez  

## Solución de Problemas

**1. Problemas comunes**

- Verifica que el nombre y la contraseña de la red Wi-Fi sean correctos  
- Asegúrate de estar usando una red **2.4GHz**  

## Preguntas Frecuentes (FAQ)

**Q: ¿Por qué no veo la red Watcher-XXXX?**  
**A:** Usa un pin para presionar el botón de reinicio y reiniciar el dispositivo.  
Si ya estaba vinculado a una red, reinícialo y presiona el botón de rueda una vez mientras se muestra "Scanning Wi-Fi" para volver a modo de emparejamiento.

**Q: ¿Qué hago si no se abre la página de configuración?**  
**A:** Abre manualmente [http://192.168.4.1](http://192.168.4.1) en tu navegador mientras estás conectado a la red `Watcher-XXXX`.

## Soporte Técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
