---
description: Send message from Watcher & Node-RED to twilio
title: Watcher & Node-RED a Twilio
keywords:
- watcher
- twilio
image: https://files.seeedstudio.com/wiki/watcher_to_twilio_image/tw1.png
slug: /es/watcher_node_red_to_twilio
last_update:
  date: 07/25/2025
  author: Guillermo
---

# Inicio Rápido Watcher a Twilio

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/watcher_twilio.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Parte 1. ¿Qué es [Twilio](https://www.twilio.com/)?

Twilio es una plataforma líder en comunicaciones en la nube para desarrolladores. Ofrece un conjunto de APIs para integrar capacidades de voz, video y mensajería en aplicaciones. Con Twilio, los desarrolladores pueden crear fácilmente funciones potentes de comunicación como llamadas de voz, videoconferencias y mensajes SMS. Proporciona herramientas amigables y una infraestructura confiable, siendo una opción preferida para desarrollar aplicaciones innovadoras y mejorar la experiencia del usuario. Twilio opera con un modelo de pago por uso, permitiendo a los desarrolladores pagar solo por los servicios específicos que utilizan.

## Parte 2. Cómo registrarse

**Paso 1.** [Haz clic aquí para ir a Twilio](https://console.twilio.com/). Al finalizar el registro, verás tu **SID** y **Token**. Además, debes comprar un número para enviar mensajes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/1.png" style={{width:1000, height:'auto'}}/></div>

**Paso 2.** Ve a esta página, selecciona un número que te guste y cómpralo. Como nuevo usuario, Twilio te dará 15 dólares para probar sus funciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/2.png" style={{width:1000, height:'auto'}}/></div>

**Paso 3.** Aquí tienes una introducción del número, revisa y luego haz clic en el botón Comprar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/3.png" style={{width:600, height:'auto'}}/></div>

**Paso 4.** En esta página se mostrarán todos los números activos. El número que compraste aparecerá aquí.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/4.png" style={{width:1000, height:'auto'}}/></div>

**Paso 5.** Regresa a la consola, allí verás el **SID**, **Token** y el **número de teléfono**. Esto es lo que necesitaremos <span id="jump">más adelante</span>.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/5.png" style={{width:1000, height:'auto'}}/></div>

## Parte 3. Cómo configurar Twilio en Node-RED

Si aún no sabes cómo enviar mensajes de Watcher a Node-RED, [por favor consulta aquí](https://wiki.seeedstudio.com/watcher_to_node_red/).

**Paso 1.** Primero debemos descargar el complemento Twilio en Node-RED, así que haz clic en **Manage palette**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/6.png" style={{width:600, height:'auto'}}/></div>

**Paso 2.** Busca "twilio" e instala el primero que aparece.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/7.png" style={{width:600, height:'auto'}}/></div>

**Paso 3.** Arrastra el módulo Twilio al espacio de trabajo, haz doble clic en él y luego agrega una nueva configuración de Twilio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/8.png" style={{width:1000, height:'auto'}}/></div>

**Paso 4.** Completa las propiedades: **SID**, **From** y **Token** vienen de la [consola Twilio](#jump). **Name** es el nombre que quieres darle a esta configuración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/9.png" style={{width:600, height:'auto'}}/></div>

**Paso 5.** Completa estas propiedades: **Output** indica si quieres SMS o llamada, **To** es el número de teléfono al que enviarás, **Name** es el nombre del módulo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/10.png" style={{width:600, height:'auto'}}/></div>

**Paso 6.** Después verás esta página.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/12.png" style={{width:600, height:'auto'}}/></div>

## Parte 4. Enviar mensaje a Twilio

### Obtener todos los resultados

**Paso 1.** Ejecuta una tarea en Watcher.

Primero, necesitas ejecutar una tarea en Watcher siguiendo el video a continuación. Si quieres saber más [haz clic aquí](https://wiki.seeedstudio.com/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**Paso 2.** Arrastra el módulo **OpenStream** de SenseCAP y el módulo **debug** al espacio de trabajo y configúralos. Si no sabes cómo configurarlos, [consulta aquí](https://wiki.seeedstudio.com/watcher_to_node_red/). Conéctalos y haz clic en **Deploy** en la esquina superior derecha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/101.png" style={{width:700, height:'auto'}}/></div>

**Paso 3.** Recibirás mensajes tanto en la **página de debug** como en un **mensaje de Twilio** en tu teléfono.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Página de debug</th>
      <th>Mensaje de Twilio</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/11.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/allmsg.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

### Obtener resultados específicos

**Paso 1.** Si crees que obtener todos los resultados es mucho y solo quieres obtener resultados específicos, arrastra un **módulo function** al medio y conéctalo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/13.png" style={{width:1000, height:'auto'}}/></div>

**Paso 2.** Haz doble clic en el **módulo function** y escribe algo de código para obtener el mensaje que quieres. Haz clic en **Done** y luego en **Deploy**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/14.png" style={{width:1000, height:'auto'}}/></div>

Obtener un mensaje específico:

```cpp
msg.payload = msg.payload.value[0].content;
return msg;
```

Si quieres obtener más de un mensaje, usa el código siguiente:

```cpp
var content = msg.payload.value[0].content;
var image_url = msg.payload.value[0].image_url;
var timestamp = new Date(msg.payload.timestamp).toLocaleString();

msg.payload = {
    value1: content,
    value2: image_url,
    value3: "Alert received at " + timestamp
};
return msg;
```

**Paso 2.** Ejecuta una tarea en Watcher, si no sabes cómo hacerlo, [consulta aquí.](https://wiki.seeedstudio.com/getting_started_with_watcher_task)

**Paso 3.** Recibirás mensajes tanto en la **página de debug** como en un **mensaje de Twilio** en tu teléfono.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Página de debug</th>
      <th>Mensaje de Twilio</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/15.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/onemsg.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

¡Felicidades por conectar exitosamente Watcher con Twilio! Ahora, libera el poder de esta integración y comienza a crear aplicaciones innovadoras que aprovechen las capacidades de comunicación sin interrupciones～

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte soporte de diversas formas para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Contamos con varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>