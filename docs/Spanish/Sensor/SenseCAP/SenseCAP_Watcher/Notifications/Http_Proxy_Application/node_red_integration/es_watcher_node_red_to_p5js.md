---
description: Send message from Watcher & Node-RED to p5js
title: Watcher & Node-RED a P5JS
keywords:
- watcher
- p5js
image: https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/headpic.png
slug: /es/watcher_node_red_to_p5js
last_update:
  date: 07/25/2025
  author: Guillermo
---

# Guía Rápida: Watcher & Node-RED hacia p5.js

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/p5js_video.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## ¿Qué es [p5.js](https://p5js.org/)?

p5.js es una librería de JavaScript que hace que la programación sea accesible para artistas y diseñadores. Proporciona una forma sencilla de crear gráficos, animaciones y aplicaciones interactivas utilizando una sintaxis simple. Con funciones como dibujo en lienzo (canvas), manejo de entrada del usuario y soporte para multimedia, p5.js es ideal para proyectos de codificación creativa, fines educativos y arte digital. Su comunidad activa y amplios recursos ayudan a usuarios de todos los niveles a comenzar.

## Configuración en Node-RED

### Paso 1. Ejecutar tarea en Watcher

Primero, necesitas ejecutar una tarea en Watcher siguiendo el siguiente video. Si deseas saber más, [haz clic aquí](https://wiki.seeedstudio.com/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Paso 2. Configuración

Hay 4 módulos que necesitas configurar:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/1.png" style={{width:800, height:'auto'}}/></div>

1. **OpenStream:** Obtiene datos de Watcher hacia Node-RED. [Para más detalles haz clic aquí](https://wiki.seeedstudio.com/watcher_to_node_red/).

2. **function:** Procesa los datos recibidos desde Watcher. **Haz doble clic** en el módulo function y pega el siguiente código:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/2.png" style={{width:800, height:'auto'}}/></div>

```javascript
msg.payload = {
    content: msg.payload.value[0].content,
    image_url: msg.payload.value[0].image_url
};
return msg;
```

3. **http request:** Envía una <span id="post">solicitud POST</span> al **servidor** y de ahí a p5.js.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/3.png" style={{width:800, height:'auto'}}/></div>

4. **debug:** Permite visualizar la salida y depurar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/4.png" style={{width:600, height:'auto'}}/></div>

### Paso 3. Despliegue

Cuando termines la configuración, no olvides hacer clic en **Deploy**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/5.png" style={{width:800, height:'auto'}}/></div>

## Crear un servidor

### Paso 4. Descargar el código del servidor

[Haz clic aquí](https://github.com/Seeed-Projects/SenseCAP_Watcher_WebSocket_P5js) para descargar todo el proyecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/7.png" style={{width:1000, height:'auto'}}/></div>

### Paso 5. Ejecutar el servidor

Antes de ejecutar el servidor, primero instala algunos paquetes:

```bash
npm install express body-parser cors ws
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/14.png" style={{width:600, height:'auto'}}/></div>

Descomprime el paquete y entra en la carpeta. Luego ejecuta:

```bash
node server.js
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/8.png" style={{width:800, height:'auto'}}/></div>

Ahora el servidor está escuchando en el puerto 3000, así que los mensajes desde [Node-RED](#post) serán enviados a este servidor y luego a p5.js.

## Configuración en VScode

### Paso 6. Instalar extensiones

Necesitas instalar 2 extensiones: **Live Server** y **p5.vscode**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/6.png" style={{width:600, height:'auto'}}/></div>

### Paso 7. Abrir el proyecto

Abre el proyecto que acabas de descargar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/12.png" style={{width:600, height:'auto'}}/></div>

La estructura debería verse como en la siguiente imagen:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/13.png" style={{width:600, height:'auto'}}/></div>

### Paso 8. Ejecutar el proyecto

Abre el archivo **sketch.js** y haz clic en el botón **Go Live**, lo que ejecutará el proyecto localmente en tu navegador predeterminado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/9.png" style={{width:1000, height:'auto'}}/></div>

El resultado debería verse como en la siguiente imagen. Este servicio se ejecuta en el puerto 5500.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/10.png" style={{width:1000, height:'auto'}}/></div>

Cuando se detecte a una persona, se verá así:

:::tip
Debes mantener ejecutando tanto Node-RED como server.js
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/11.png" style={{width:1000, height:'auto'}}/></div>

¡Felicidades por completar exitosamente tu viaje desde Watcher hasta p5.js! Has adquirido habilidades valiosas, y aún hay muchas funciones emocionantes por descubrir. ¡Sigue experimentando y disfruta de todas las posibilidades creativas que tienes por delante!

## Soporte Técnico y Comunidad

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para ajustarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>