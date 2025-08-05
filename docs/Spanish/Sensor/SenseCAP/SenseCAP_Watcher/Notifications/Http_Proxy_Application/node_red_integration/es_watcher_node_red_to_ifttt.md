---
description: Send message from Watcher & Node-RED to IFTTT
title: Watcher & Node-RED a IFTTT
keywords:
- watcher
- IFTTT
image: https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/ifttthead.png
slug: /es/watcher_node_red_to_ifttt
last_update:
  date: 07/25/2025
  author: Guillermo
---

# Inicio Rápido: Watcher a IFTTT

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/watcher_ifttt.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Parte 1. ¿Qué es [IFTTT (If This Then That)](https://ifttt.com/)?

IFTTT es un servicio basado en la web que permite a los desarrolladores crear automatizaciones e integraciones entre diversas aplicaciones, dispositivos y servicios sin necesidad de programación compleja. Permite a los usuarios definir declaraciones condicionales simples llamadas "applets" que desencadenan acciones basadas en eventos específicos. Ofrece una interfaz amigable y una vasta biblioteca de applets predefinidos, facilitando a los desarrolladores crear potentes automatizaciones de forma eficiente.

## Parte 2. Cómo configurar IFTTT

### Paso 1. Configurar Webhooks

Primero, necesitamos **crear** un Applet de IFTTT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/1.png" style={{width:1000, height:'auto'}}/></div>

Necesitamos **agregar** un disparador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/2.png" style={{width:500, height:'auto'}}/></div>

Busca **Webhooks** y haz clic en ese servicio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/3.png" style={{width:500, height:'auto'}}/></div>

Verás una breve introducción del disparador Webhooks y seleccionaremos la segunda opción.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/4.png" style={{width:500, height:'auto'}}/></div>

Asigna un nombre a tu disparador y créalo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/5.png" style={{width:500, height:'auto'}}/></div>

### Paso 2. Configurar Email

Cuando el disparador se active, necesitamos ejecutar una acción. En este caso, enviaremos un correo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/6.png" style={{width:500, height:'auto'}}/></div>

Vamos a enviar un correo a través de Gmail cuando el disparador se active. Por supuesto, puedes usar muchos otros servicios disponibles.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/7.png" style={{width:800, height:'auto'}}/></div>

Selecciona una cuenta de Gmail y escribe la dirección de correo a la que deseas enviar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/8.png" style={{width:600, height:'auto'}}/></div>

Personaliza el **Asunto** y el **Cuerpo** del mensaje como desees, o déjalo por defecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/9.png" style={{width:600, height:'auto'}}/></div>

Haz clic en el botón **Continue**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/11.png" style={{width:600, height:'auto'}}/></div>

### Paso 3. Finalizar el Applet

Puedes editar el **título del Applet** o dejarlo por defecto, luego haz clic en **Finish**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/12.png" style={{width:600, height:'auto'}}/></div>

Al finalizar, guarda el enlace porque lo usaremos más adelante.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/13.png" style={{width:600, height:'auto'}}/></div>

## Parte 3. Acceder a IFTTT desde Node-RED

### Paso 4. Enviar mensajes desde Watcher a Node-RED

Arrastra estos módulos al área de trabajo y conéctalos. Si aún no sabes cómo enviar mensajes desde Watcher a Node-RED, [haz clic aquí](https://wiki.seeedstudio.com/watcher_to_node_red/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/20.png" style={{width:1000, height:'auto'}}/></div>

### Paso 5. Procesar el mensaje a enviar a IFTTT

Haz doble clic en el módulo **function** y escribe el siguiente código para obtener `value1` y `value2`, opcionalmente `value3`. Estos valores serán enviados a IFTTT.

```javascript
var content = msg.payload.value[0].content;
var image_url = msg.payload.value[0].image_url;

msg.payload = {
    value1: content,
    value2: image_url,
};
return msg;
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/21.png" style={{width:1000, height:'auto'}}/></div>

Haz doble clic en el módulo **http request**, selecciona el método **POST** y **pega la URL** que copiaste desde IFTTT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/22.png" style={{width:1000, height:'auto'}}/></div>

Cuando termines, no olvides hacer clic en **Deploy**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/23.png" style={{width:800, height:'auto'}}/></div>

## Parte 4. Enviar mensajes a través de IFTTT

### Paso 6. Ejecutar una tarea en Watcher

Primero, necesitas ejecutar una tarea en el Watcher siguiendo el video a continuación. Si deseas saber más [haz clic aquí](https://wiki.seeedstudio.com/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Paso 7. Verifica los mensajes en IFTTT y en el teléfono

Abre **My Applets** y haz clic en el applet que creaste anteriormente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/14.png" style={{width:1000, height:'auto'}}/></div>

Desplázate hacia abajo y haz clic en el botón **View activity**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/15.png" style={{width:800, height:'auto'}}/></div>

Sigue desplazándote hacia abajo y haz clic en estos dos botones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/16.png" style={{width:800, height:'auto'}}/></div>

Luego verás los mensajes enviados por el Watcher, así como en tu correo electrónico.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Mensaje en IFTTT</th>
      <th>Mensaje en Correo</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/16_1.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/wm.png" style={{width:320, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

¡Felicidades por completar la demostración de Watcher a IFTTT por correo electrónico! Este es solo el comienzo de tu viaje con IFTTT. Hay muchísimas más aplicaciones e integraciones por descubrir. Sigue explorando, aprendiendo y automatizando para hacer tu vida más eficiente y productiva. ¡Las posibilidades son infinitas con IFTTT, así que diviértete y sigue experimentando!

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte distintos canales de soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Disponemos de varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>