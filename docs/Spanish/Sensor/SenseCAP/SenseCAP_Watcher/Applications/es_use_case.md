---
description: Provides an in-depth look at the various applications and use cases for Watcher, showcasing its versatility and potential in different monitoring scenarios.
title: Caso de Uso
image: https://files.seeedstudio.com/wiki/watcher_getting_started/50.jpg
slug: /es/use_case
sidebar_position: 1
last_update:
  date: 07/24/2025
  author: Guillermo
---

# ¿Qué hace SenseCAP Watcher?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/50.jpg" style={{width:800, height:'auto'}}/></div>

Prepárate para embarcarte en un viaje que redefinirá tu percepción de los espacios inteligentes. **Watcher**, un innovador agente físico de IA, se integra perfectamente en tu entorno, transformando la manera en que interactúas y experimentas el mundo que te rodea. Aprovechando tecnologías avanzadas como reconocimiento facial, detección de objetos y sensores de múltiples escenarios, Watcher crea espacios más inteligentes, intuitivos y altamente adaptables.

En esta wiki, exploraremos tres aplicaciones transformadoras que muestran el inmenso potencial de Watcher como agente físico de inteligencia artificial. Estas aplicaciones no solo demuestran sus capacidades, sino que también te inspirarán a imaginar y desarrollar tus propias soluciones innovadoras.

- **[Aplicación #1 de Watcher: Dar indicaciones a visitantes](#demo-1-giving-directions-to-visitors)**  
  Descubre cómo Watcher revoluciona la experiencia de los visitantes actuando como un guía inteligente. Con su capacidad de reconocimiento facial, puede identificar visitantes y proporcionarles direcciones personalizadas y asistencia, mejorando la eficiencia y accesibilidad del espacio.

- **[Aplicación #2 de Watcher: Cajero virtual para tu florería](#demo-2-the-virtual-cashier-for-your-flower-shop)**  
  Conoce cómo Watcher puede transformar el comercio minorista actuando como cajero virtual en florerías sin personal. Detecta cuándo un cliente desea pagar y muestra un código QR para facilitar el pago automático, optimizando operaciones de tienda de forma segura.

- **[Aplicación #3 de Watcher: Sensor todo-en-uno: detección de caídas, monitoreo de mascotas y alerta de objetos perdidos](#demo-3-your-all-in-one-sensor----fall-detection-pet-monitoring-and-lost-property-alert)**  
  Descubre la versatilidad de Watcher como solución de sensores todo-en-uno. Desde detectar caídas, monitorear mascotas o alertar por objetos olvidados, Watcher se adapta a múltiples escenarios para crear entornos más seguros y receptivos.

A medida que explores estas aplicaciones, comprenderás cómo Watcher puede rediseñar y optimizar los espacios que habitamos. Ya seas innovador, empresario o simplemente entusiasta de la tecnología, esta guía te dará las herramientas y la inspiración necesarias para aprovechar al máximo sus capacidades.

¡Acompáñanos en este viaje transformador mientras redefinimos los límites de los entornos inteligentes con Watcher!

## Demo 1. Dar indicaciones a visitantes

Esta aplicación muestra cómo Watcher puede mejorar la experiencia de los visitantes, particularmente al guiar repartidores en un entorno tipo villa. Con dos dispositivos Watcher colocados estratégicamente y configuraciones adecuadas, se puede dirigir a los visitantes con eficiencia.

### Paso 1. Ubicación del primer Watcher

Instala el primer Watcher en la entrada de la villa, en un lugar visible para el personal de reparto. Este servirá como primer punto de contacto, reconociendo a visitantes con paquetes y proporcionando instrucciones claras sobre dónde dejarlos.

### Paso 2. Ubicación del segundo Watcher

El segundo Watcher debe ubicarse en la zona designada para recibir paquetes. Será responsable de confirmar la entrega correcta y agradecer al repartidor.

### Paso 3. Configurar comandos en el primer Watcher

Desde la app SenseCraft, introduce este comando en el primer Watcher:

**If someone is holding a parcel, please say, "Hello, courier parcels please take them to the table on the right, 3 metres straight ahead, thank you."**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/51.png" style={{width:600, height:'auto'}}/></div>

### Paso 4. Configurar comandos en el segundo Watcher

Desde la app SenseCraft, introduce este comando en el segundo Watcher:

**If someone puts a parcel on the table, say "thank you".**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/52.png" style={{width:600, height:'auto'}}/></div>

Esta aplicación demuestra cómo el uso estratégico de dispositivos Watcher y comandos personalizados puede mejorar significativamente la experiencia de visitantes y simplificar el proceso de entrega en una villa.

## Demo 2. Cajero virtual para tu florería

Esta aplicación muestra cómo Watcher puede revolucionar la experiencia de compra en florerías actuando como un cajero virtual. Utilizando detección de objetos y la app SenseCraft, se puede implementar un sistema de auto-pago eficiente.

### Paso 1. Generar un código QR de pago

Genera un código QR de pago desde una plataforma como PayPal u otra pasarela. Este código permitirá a los clientes pagar sus flores fácilmente.

### Paso 2. Subir el código QR a Watcher usando SenseCraft

En la app SenseCraft, accede a la sección **Animation**, localiza **Watching Space** y reemplaza la animación existente por el QR generado. Así, Watcher podrá mostrar el código cuando se active.

### Paso 3. Montar Watcher en un trípode

Usa un soporte de trípode con rosca 1/4 para montar Watcher, permitiendo ajustar ángulo y visibilidad.

### Paso 4. Posicionar Watcher en el mostrador

Coloca Watcher frente al área donde los clientes realizarán pagos, asegurando una buena visibilidad.

### Paso 5. Configurar la tarea en Watcher mediante SenseCraft

Introduce este comando:

**When you detect a person holding flowers and facing you, say "Please scan the QR code to complete your purchase."**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/53.png" style={{width:600, height:'auto'}}/></div>

### Paso 6. Activar proceso de auto-pago

Al detectar un cliente con flores, Watcher mostrará el código QR y dirá el mensaje, guiando al cliente para pagar escaneando el código desde su celular.

Esta aplicación destaca cómo Watcher puede integrarse fácilmente en comercios minoristas para mejorar la experiencia del cliente y optimizar las operaciones.

## Demo 3. Sensor todo-en-uno: detección de caídas, monitoreo de mascotas y alerta de objetos perdidos

Esta aplicación muestra la capacidad de Watcher como solución de sensor versátil, adaptable a múltiples escenarios cotidianos.

### Escenario 1: Alerta por objetos olvidados en sala de conferencias

**Paso 1:** Monta el primer Watcher en la pared de la sala con un soporte giratorio 360°.

**Paso 2:** Configura el siguiente comando desde SenseCraft:

**When you detect that the conference room is empty and there is a computer on the table, send a notification to the app.**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/54.png" style={{width:600, height:'auto'}}/></div>

### Escenario 2: Monitoreo de mascotas y disuasión

**Paso 1:** Instala el segundo Watcher en un trípode cerca de una maceta u objeto vulnerable.

**Paso 2:** Configura esta tarea:

**If you detect a cat, play the audio message "Danger, please stay away"**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/55.png" style={{width:600, height:'auto'}}/></div>

**Paso 3:** Sube el volumen de Watcher al máximo para disuadir eficazmente al gato.

### Escenario 3: Detección de caídas en casa de los padres

**Paso 1:** Instala el tercer Watcher en la pared, con vista a las áreas principales del hogar.

**Paso 2:** Asigna esta tarea desde la app SenseCraft:

**If you detect a person lying on the ground, please notify me immediately.**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/56.png" style={{width:600, height:'auto'}}/></div>

Estas configuraciones permiten que Watcher actúe como un sistema de monitoreo proactivo, brindando alertas en tiempo real y mejorando la seguridad del entorno.

## Soporte técnico y discusión de producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurarnos de que tu experiencia sea lo más fluida posible.  
Ofrecemos distintos canales de comunicación para adaptarnos a tus necesidades y preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

