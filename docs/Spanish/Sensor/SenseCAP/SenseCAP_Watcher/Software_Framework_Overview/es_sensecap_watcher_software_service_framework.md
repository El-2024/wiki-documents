---
description: This article provides a detailed setup guide for configuring the Watcher device in three different processing deployment flows,including Cloud Efficient Processing Flow, Hybrid Smart Processing Flow, and Local Secure Processing Flow. It offers an overview of the Watcher software service framework, illustrating the interactions between the user, SenseCraft Mate app, and Watcher device.
title: Introducción al Software de Servicios del Watcher
image: https://files.seeedstudio.com/wiki/watcher_getting_started/50.jpg
slug: /es/watcher_software_service_framework
sidebar_position: 2
last_update:
  date: 07/25/2025
  author: Guillermo
---

## Visión general del Framework

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/1.png" style={{width:800, height:'auto'}}/></div>

Este es el framework de servicios de software para el Watcher, que ilustra las interacciones y el flujo de tareas entre el usuario, la app SenseCraft Mate y el dispositivo Watcher. Ofrecemos múltiples opciones de configuración que permiten a los usuarios personalizar el despliegue del servicio en función de sus necesidades de seguridad de datos y calidad del servicio.

El framework integra servicios de IA en la nube y despliegues de IA locales, combinados con servicios de datos, comunicación con dispositivos, orquestación de tareas, análisis de imágenes, canales de alerta y servicios de entrenamiento de modelos.  
Puedes optar por desplegar tu LLM en la nube o en infraestructura local. Los datos originales y los resultados también pueden almacenarse o transmitirse en la nube o en dispositivos locales.

Comparado con el almacenamiento local, el almacenamiento en la nube ofrece diferentes ventajas, pero también puede requerir almacenamiento de alto rendimiento en máquinas virtuales con GPU.

Estos componentes forman tres opciones de despliegue para que los usuarios elijan:

1. **Flujo de procesamiento eficiente en la nube**
2. **Flujo de procesamiento inteligente híbrido**
3. **Flujo de procesamiento seguro local**

Las siguientes secciones explican en detalle el framework y te guiarán para configurar cada una de las tres opciones de despliegue.

**Servicio de Datos**

Watcher ofrece servicios de datos flexibles, permitiéndote conectarte a la plataforma de datos SenseCraft para subir alertas, estado del dispositivo e imágenes previas. SenseCraft proporciona una dirección MQTT y un token mediante una solicitud HTTP. Alternativamente, puedes configurar la app vía Bluetooth para subir datos a plataformas de terceros, sin pasar por SenseCraft.

**Servicio de Comunicación del Dispositivo**

Watcher admite flujos de tareas remotas y actualizaciones OTA de firmware a través de MQTT. Puedes usar la app SenseCraft Mate para crear tareas y enviarlas al dispositivo mediante la plataforma SenseCraft. La app también verifica si hay una versión nueva del firmware y, si está disponible, te notificará. Tras confirmar, la plataforma enviará la actualización al dispositivo.

**Servicio de Orquestación de Tareas**

El servicio de orquestación de tareas de Watcher permite interacciones por voz, donde tu diálogo se envía por HTTP, se procesa y se devuelve el flujo de tarea al dispositivo. La app SenseCraft Mate también puede recuperar flujos de tareas y enviarlos de forma remota.

**Servicio de Análisis de Visión**

Watcher ofrece un servicio unificado de análisis de imágenes. Puedes elegir entre SenseCraft, OpenAI o agentes de IA de terceros configurando vía Bluetooth y proporcionando las claves API correspondientes. Cuando el dispositivo envía una imagen, se utilizará el servicio seleccionado, ya sea LLaVA local o uno de terceros como OpenAI.

**Servicio de Notificaciones de Alerta**

Watcher permite múltiples opciones de notificación: notificaciones push desde la nube SenseCraft, conexión UART con hardware externo o HTTP hacia servidores locales o plataformas de terceros. También puedes enviar alertas a plataformas como Discord usando formatos de datos estándar. Watcher puede reenviar estas notificaciones a Home Assistant, IFTTT o Webhooks. Más información en la sección sobre aplicación HTTP Proxy.

Tienes la flexibilidad de elegir entre múltiples opciones de despliegue y configurar tu asistente Watcher personalizado. Ya sea que priorices seguridad de datos o eficiencia de procesamiento, ofrecemos tres soluciones adaptables: Flujo en la nube, flujo híbrido o flujo local.

## Flujo de procesamiento eficiente en la nube

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/20.png" style={{width:500, height:'auto'}}/></div>

Este diagrama muestra una visión general del **Flujo de procesamiento eficiente en la nube**, ilustrando las interacciones entre el usuario, los servicios en la nube y las aplicaciones locales. En este modelo, todos los servicios se ejecutan mediante la nube de SenseCraft para ofrecer un flujo de trabajo ágil y eficiente.  
Después de iniciar y vincular tu dispositivo, podrás elegir los servicios adecuados en la nube o localmente según tus necesidades.

### **Paso 1**. Configuración inicial

Tras completar la [configuración](https://www.seeedstudio.com/getting_started_with_watcher/#device-binding-and-ota-upgrade) y seleccionar los servicios de IA de SenseCraft, puedes comenzar a usar los servicios en la nube del Watcher.

### **Paso 2**. Interacción con el usuario

Existen dos formas de activar los servicios de SenseCraft y asignar tareas al Watcher (ver sección XXX):

* **Opción 1: Vía App**: Los usuarios pueden habilitar los servicios de IA de SenseCraft desde la app móvil y luego enviar tareas por chat.
* **Opción 2: Vía comandos de voz**: Los usuarios pueden interactuar directamente por voz con el Watcher para asignar tareas.

### **Paso 3**. Orquestación de tareas

Una vez activado, SenseCraft actúa como un servicio PaaS (Platform-as-a-Service) para orquestar tareas, incluyendo:

* **STT (Speech-to-Text)**: Transforma comandos de voz en texto.
* **TTS (Text-to-Speech)**: Convierte respuestas escritas en voz.
* **Servicios de IA**: Interpretan, procesan y seleccionan modelos adecuados del repositorio SenseCraft (LLMs y TinyML).

Además de seleccionar manualmente modelos TinyML, las tareas también pueden procesarse automáticamente según tu entrada.  
Por ejemplo, si dices: *"Avísame cuando veas un pájaro"*, el servicio elegirá un modelo de reconocimiento de aves de la biblioteca TinyML para optimizar la respuesta.

En **configuración manual**, puedes elegir entre:

- **Vision LLM** (mayor precisión)
- **Modelo TinyML** (procesamiento más rápido)

### **Paso 4**. Despacho de tareas tras la orquestación

Una vez orquestada la tarea, el método de envío dependerá del estado del control remoto de SenseCraft:

* **Control remoto activado**: Se usa el servicio de datos y comunicación vía MQTT para enviar los resultados al Watcher.
* **Control remoto desactivado**: Las tareas se envían vía Bluetooth. Si el dispositivo está fuera de alcance, será necesario activar el control remoto.

### **Paso 5**. Procesamiento de tareas de análisis visual

Tras recibir la tarea desde SenseCraft, el dispositivo Watcher invocará el servicio de análisis visual. La imagen será procesada usando el modelo de IA seleccionado por el usuario o determinado automáticamente.

### **Paso 6**. Notificaciones del sistema

Watcher puede notificar al usuario o a un sistema local mediante:

* Notificaciones push en la app
* Salida UART/puerto serie
* Push HTTP a servidores

También puede enviar datos a servidores locales, apps de terceros o plataformas como Discord, Home Assistant o IFTTT.  
Para más detalles, consulta la sección sobre **HTTP Proxy Application**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/3.png" style={{width:800, height:'auto'}}/></div>

## Flujo de Procesamiento Inteligente Híbrido

Este diagrama ilustra el **Flujo de Procesamiento Inteligente Híbrido**, que involucra interacciones del usuario, algunos servicios en la nube y aplicaciones locales. Este enfoque híbrido equilibra seguridad de datos, experiencia de usuario y eficiencia, combinando orquestación de tareas en la nube con modelos visuales locales.

**Paso 1**. Configuración inicial  
Después de [comenzar y vincular el dispositivo](https://wiki.seeedstudio.com/getting_started_with_watcher/#device-binding-and-ota-upgrade), los usuarios pueden seleccionar los servicios locales apropiados según sus necesidades, habilitar el servicio privado de Watcher e ingresar la URL del servidor Watcher.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/1.gif" style={{width:400, height:'auto'}}/></div>

**Paso 2**. Interacción del usuario  
Los usuarios pueden enviar tareas a través de la app SenseCraft, lo que iniciará el servicio de orquestación de tareas dentro de la plataforma.

**Paso 3**. Orquestación de tareas  
Una vez que se recibe una tarea, la plataforma SenseCraft, funcionando como un PaaS (Platform-as-a-Service), la orquesta utilizando tres servicios principales:

- STT (Servicio de conversión de voz a texto)  
- TTS (Servicio de conversión de texto a voz)  
- Servicios de IA para interpretar, procesar y orquestar la tarea

El servicio de orquestación interpreta la tarea y selecciona el modelo adecuado desde la biblioteca de modelos de SenseCraft o un LLM (modelo de lenguaje grande), según los requisitos de la tarea.

Además de seleccionar manualmente modelos TinyML en la configuración manual, las tareas también pueden procesarse automáticamente según tu entrada.  
Por ejemplo, si el usuario dice: *"Avísame cuando veas un pájaro"*, el sistema seleccionará automáticamente un modelo de reconocimiento de aves desde la biblioteca TinyML para optimizar la velocidad de respuesta.

En la **configuración manual**, puedes elegir entre:

- **Vision LLM** (para mayor precisión)
- **Modelo TinyML** (para procesamiento más rápido)

**Paso 4**. Despacho de tareas tras la orquestación  
Después de orquestar la tarea, el sistema elegirá el método de despacho según el estado del Control Remoto de SenseCraft:

- Si el control remoto está habilitado: se utilizarán el servicio de datos y comunicación del PaaS para enviar resultados vía MQTT al Watcher.
- Si el control remoto está deshabilitado: las tareas se enviarán vía Bluetooth. Si el dispositivo está fuera de alcance, será necesario activar el control remoto.

**Paso 5**. Procesamiento de tareas de análisis visual  
Una vez que el Watcher recibe la tarea, invocará el servicio de análisis visual local desplegado en un servidor local. La tarea será procesada usando el modelo de IA seleccionado por el usuario o determinado por la orquestación.

**Paso 6**. Notificaciones del sistema  
El Watcher puede notificar al usuario o a un sistema local utilizando:

- Notificaciones push desde la app  
- Salida por puerto serie/UART  
- Push HTTP hacia servidores o plataformas

Watcher también puede enviar datos a servidores locales, apps de terceros o servicios de alerta como Discord, Home Assistant o IFTTT.  
Para más información, consulta la sección **HTTP Proxy Application**.

## Flujo de Procesamiento Seguro Local

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/4.png" style={{width:800, height:'auto'}}/></div>

Este diagrama describe el **Flujo de Procesamiento Seguro Local**, que se centra en la interacción completa del usuario con aplicaciones desplegadas localmente. Para garantizar privacidad de datos, los servicios de orquestación de tareas y análisis de imágenes se ejecutan íntegramente en un servidor local, brindando total protección.  
Sin embargo, este método limita funcionalidades, ya que los servicios en la nube de SenseCraft no están disponibles. Las tareas solo pueden iniciarse mediante comandos de voz en campo, y los usuarios deben configurar manualmente los servicios de notificación para acceder a los datos históricos.

**Paso 1**. Configuración inicial  
Después de [comenzar y vincular el dispositivo](https://wiki.seeedstudio.com/getting_started_with_watcher/#device-binding-and-ota-upgrade), los usuarios pueden seleccionar los servicios locales apropiados, habilitar el servicio privado del Watcher e ingresar la URL del servidor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher_software_service_framework/1.gif" style={{width:400, height:'auto'}}/></div>

**Paso 2**. Interacción del usuario  
Los usuarios pueden emitir tareas presionando el botón giratorio del dispositivo Watcher y enviando comandos por voz.

**Paso 3**. Orquestación de tareas  
El servidor Watcher alojado localmente proporciona servicios de orquestación de tareas similares al sistema SenseCraft. Este sistema local incluye tres servicios principales:

- STT (Conversión de voz a texto)  
- TTS (Conversión de texto a voz)  
- Servicios de IA para comprender, procesar y orquestar las tareas

Tras interpretar la tarea, el servicio local despacha la tarea al dispositivo Watcher.

**Paso 4**. Procesamiento de tareas de análisis visual  
Una vez que el Watcher recibe la tarea, invoca el servicio de análisis visual local, también desplegado en el servidor local. El análisis se realiza utilizando el modelo de IA seleccionado durante la orquestación.

**Paso 5**. Notificaciones del sistema  
Watcher puede notificar a los usuarios o sistemas locales utilizando:

- Salida por puerto serie/UART  
- Push HTTP a servidores o plataformas compatibles

También es posible enviar datos a servidores locales, apps de terceros o servicios como Discord, Home Assistant e IFTTT.  
Consulta la sección **HTTP Proxy Application** para más detalles.

## Soporte Técnico y Debate del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos canales de soporte y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos varias formas de comunicación para ajustarnos a tus preferencias y necesidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
