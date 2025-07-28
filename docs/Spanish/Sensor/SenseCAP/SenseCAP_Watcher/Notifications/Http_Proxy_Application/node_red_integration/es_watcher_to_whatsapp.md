---
description: Send data from Watcher & Node-RED to WhatsApp
title: Watcher & Node-RED a WhatsApp
keywords:
- Watcher
- WhatsApp
- Node-RED
image: https://files.seeedstudio.com/wiki/Watcher_WhatsApp/watcher_whatsapp.png
slug: /es/watcher_node_red_to_whatsapp
last_update:
  date: 07/25/2025
  author: Guillermo
---

# Inicio Rápido Watcher a WhatsApp

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/watcher_whatsapp.png" style={{width:1000, height:'auto'}}/></div>

[**WhatsApp**](https://web.whatsapp.com/) es un servicio de mensajería instantánea y VoIP propiedad de Meta. Permite a los usuarios enviar mensajes de texto, voz y video, realizar llamadas de voz y video, y compartir imágenes, documentos, ubicaciones y otros contenidos.

Este tutorial te guiará para integrar la API de Watcher con Node-RED y enviar datos desde Watcher a WhatsApp sin problemas. Esta integración ofrece un método simple y eficiente para **recibir notificaciones y abre la puerta a más aplicaciones e integraciones**.

## Parte 1. Configurar Watcher en Node-RED

### Paso 1. Configurar Node-RED

Primero, debes ejecutar una tarea en Watcher siguiendo el video a continuación. Si quieres saber más [haz clic aquí](https://wiki.seeedstudio.com/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

Node-RED es necesario para esta configuración junto con la API de Watcher. Si no has instalado Node-RED o no lo has conectado con la API de Watcher, empieza aquí: [**Inicio Rápido Watcher a Node-RED**](https://wiki.seeedstudio.com/watcher_to_node_red).

### Paso 2. Obtener datos de Watcher

Después de configurar Watcher con Node-RED, el siguiente paso es preparar los datos para WhatsApp. Haz doble clic en el nodo función para formatear los datos apropiadamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_1.png" style={{width:1000, height:'auto'}}/></div>

Para este tutorial, enviaremos el contenido junto con la URL de la imagen. Sin embargo, te recomendamos adaptar los datos según lo requiera tu aplicación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_2.png" style={{width:1000, height:'auto'}}/></div>

#### Ejemplo de función Node-RED para formatear datos

```sh
node.send({ payload: msg.payload.value[0].content });

node.send({ payload: msg.payload.value[0].image_url });
```

## Parte 2. Configurar API de WhatsApp

### Paso 3. Regístrate en WhatsApp

Necesitas una cuenta de WhatsApp para continuar. Si no tienes una, por favor [**haz clic aquí**](https://www.whatsapp.com) y sigue los pasos para crearla.

Si ya tienes cuenta, continúa al [**Paso 4**](#step-4-get-callmebot-api-key).

### Paso 4. Obtener clave API de CallMeBot

Con tu cuenta de WhatsApp lista y activa, ahora configura la API de CallMeBot. Esta API hará de enlace entre Node-RED y WhatsApp.

Para obtener tu clave API de CallMeBot, sigue estos pasos (extraídos de [**este repositorio Github**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb/blob/main/README.md#create-api-key)):

1. Añade el número +34 644 66 32 62 a tus contactos telefónicos (ponle el nombre que quieras).
2. Envía el mensaje "I allow callmebot to send me messages" a ese contacto (usando WhatsApp).
3. Espera a recibir el mensaje "API Activated for your phone number. Your APIKEY is 123123" del bot. Como está en beta, la activación puede tardar hasta 2 minutos.
4. El mensaje de WhatsApp contendrá la apikey necesaria para enviar mensajes usando la API.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_API.png" style={{width:1000, height:'auto'}}/></div>

:::note
Existe la posibilidad de que el número de teléfono para CallMeBot esté lleno y no acepte más solicitudes. En ese caso, CallMeBot te enviará un mensaje con un número alternativo.

Si no recibes ningún mensaje y todos los números están llenos, deberás buscar una API alternativa para conectar Node-RED con WhatsApp. Revisa siempre la documentación más actualizada de CallMeBot o explora otras APIs compatibles con Node-RED.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_Full.png" style={{width:1000, height:'auto'}}/></div>
:::

## Parte 3. Integrar WhatsApp con Node-RED

### Paso 5. Instalar módulo WhatsApp

Haz clic en el icono de tres barras y luego en **Manage palette** para abrir la ventana de gestión de nodos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_3.png" style={{width:1000, height:'auto'}}/></div>

Cambia a la pestaña **Install** y busca `whatsapp`. Haz clic en **install** junto al módulo **node-red-contrib-whatsapp-cmb**.

Recomendamos también revisar la [**documentación del nodo**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb/blob/main/README.md) y el [**repositorio GitHub**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb) para entender mejor su uso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_4.png" style={{width:1000, height:'auto'}}/></div>

:::note
El módulo **node-red-contrib-whatsapp-cmb** es recomendado por su compatibilidad y estabilidad a julio 2024. La disponibilidad y funcionamiento de módulos Node-RED puede variar, por lo que se aconseja revisar comentarios recientes. Si tienes problemas, prueba otros módulos WhatsApp disponibles en Node-RED.
:::

### Paso 6. Configurar nodo WhatsApp

Una vez instalado el módulo, arrastra el nodo **Send Message** a tu flujo y conéctalo al nodo función.

Haz doble clic en **Send Message** para configurarlo. Luego haz clic en el ícono + junto a **Account** para agregar una cuenta nueva.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_5.png" style={{width:1000, height:'auto'}}/></div>

1. Pon un nombre para la cuenta.
2. Ingresa el número de teléfono asociado a tu cuenta WhatsApp.
3. Ingresa tu clave API obtenida.

Haz clic en **Add** o **Update** para guardar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_6.png" style={{width:1000, height:'auto'}}/></div>

Con la cuenta configurada, cambia el desplegable junto a **Message** a `msg.` y escribe `payload` en el campo de texto. Finalmente, haz clic en **Done**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_7.png" style={{width:1000, height:'auto'}}/></div>

### Paso 7. Desplegar

Por último, haz clic en **Deploy** en la esquina superior derecha de Node-RED. Esto activará tus nodos para que los datos fluyan del nodo función a la API CallMeBot.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_8.png" style={{width:1000, height:'auto'}}/></div>

Ahora recibirás notificaciones en WhatsApp cada vez que se active tu Watcher.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_Result.png" style={{width:1000, height:'auto'}}/></div>

## Depuración: Errores comunes en Node-RED

Al integrar Node-RED con WhatsApp, puede que encuentres errores similares al siguiente:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_Error.png" style={{width:300, height:'auto'}}/></div>

Para resolverlo, prueba estos pasos:

1. Instala el módulo `aws4` ejecutando en el directorio de usuario de Node-RED:

   ```sh
   npm install aws4
   ```

2. Si no funciona, reinstala el paquete `request`:

   ```sh
   npm install request
   ```

3. Si persiste el error, reinstala el nodo WhatsApp:

   ```sh
   npm install node-red-contrib-whatsapp-cmb
   ```

4. Como último recurso, limpia la caché npm y reinstala dependencias:

   ```sh
    npm cache clean --force
    npm install
   ```

Luego reinicia Node-RED y verifica si el problema se resolvió. Si sigue, revisa compatibilidad entre tus versiones de Node.js, Node-RED y los paquetes usados.

¡Felicidades por integrar exitosamente Watcher con WhatsApp! Has abierto un mundo de posibilidades para crear aplicaciones innovadoras que aprovechen las capacidades de WhatsApp. ¡Esperamos ver las soluciones geniales que desarrollarás!

## Soporte Técnico y Discusión de Producto

Gracias por elegir nuestros productos. Estamos aquí para brindarte soporte y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos varios canales para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
