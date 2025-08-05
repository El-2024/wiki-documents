---
description: Guide for using the Web Control Panel of your SenseCAP Watcher Agent
title: Panel de Control Web (β)
sidebar_position: 3
keywords:
- SenseCAP
- Watcher
- Web Control Panel
- Agent Configuration
- Device Management
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /es/watcher_web_control_panel
last_update:
  date: 2025/07/25
  author: Guillermo
---

# Guía del Panel de Control Web (Beta)

## Descripción general

El Panel de Control Web (Beta) del SenseCAP Watcher proporciona una interfaz basada en navegador para gestionar tu dispositivo Watcher y configurar sus ajustes de Agente. Esta versión beta incluye funciones esenciales para la administración del dispositivo y la personalización del Agente.

## Funcionalidades actuales

La versión beta del Panel de Control Web incluye las siguientes funciones clave:

1. Vinculación de dispositivo  
2. Configuración del Agente  
3. Selección del modelo LLM  
4. Gestión del historial de conversaciones  
5. Visualización de información del dispositivo  

## Vinculación del dispositivo

### Proceso de vinculación

1. Ingresa a la [Plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/home)  
2. Para acceder al Panel de Control, haz clic en **Watcher Agent** en la esquina superior derecha de la página.  
   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/navigate.jpg" style={{width:800, height:'auto'}}/></div>  
3. Haz clic en el botón **Bind Device**  
   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/page1.jpg" style={{width:300, height:'auto'}}/></div>  
4. Sigue las instrucciones en pantalla e introduce el código de verificación de 6 dígitos que aparece en el dispositivo  

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/activation.jpg" style={{width:300, height:'auto'}}/></div>

## Configuración del Agente

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/agent%20conf.jpg" style={{width:300, height:'auto'}}/></div>

### Plantilla de rol
- Se proporcionan plantillas predeterminadas, pero también puedes crear tus propias plantillas o modificar las existentes.

### Apodo del asistente
- Personaliza el nombre de tu Agente.

:::note
Esta función no cambia la palabra de activación del Agente.  
La palabra de activación solo puede modificarse al compilar el firmware.  
La palabra predeterminada de activación es “Jarvis”.
:::

### Voz del personaje
- Selecciona una voz diferente

### Introducción/Prompt del rol
1. Elige entre plantillas de rol predefinidas  
2. Crea tus propias plantillas  
3. Modifica plantillas existentes  

:::note
El apodo del asistente configurado anteriormente solo funcionará si se incluye `{{assistant_nickname}}` en la introducción del rol.  
Para obtener la hora actual, necesitas añadir: `__DATE__`
:::

### Ver y gestionar historial
- Accede al registro de conversaciones  
- Elimina mensajes individuales  

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/history%20del.jpg" style={{width:600, height:'auto'}}/></div>

## Información del dispositivo

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/device%20list.jpg" style={{width:800, height:'auto'}}/></div>

El panel de control muestra información esencial del dispositivo, incluyendo:

- Modelo del dispositivo  
- Modelo del chip  
- Versión del firmware  
- Dirección MAC  
- Hora de vinculación  
- Estado en línea  
- Notas  
- Interruptor de actualización OTA  
- Desvincular  

:::note
Esta es una versión beta del Panel de Control Web. Las funciones pueden actualizarse o cambiar en futuras versiones. Por favor, revisa regularmente si hay actualizaciones para acceder a la funcionalidad más reciente.
:::

## Soporte Técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>