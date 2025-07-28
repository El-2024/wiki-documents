---
description: Send data from Watcher & Node-RED to Discord
title: Watcher & Node-RED a Discord
keywords:
- Watcher
- Discord
- Node-RED
image: https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Watcher_Discord_Cover.png
slug: /es/watcher_node_red_to_discord
last_update:
  date: 07/25/2025
  author: Guillermo
---

# Watcher a Discord Inicio Rápido

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Watcher_Discord_Cover.png" style={{width:1000, height:'auto'}}/></div>

[**Discord**](https://discord.com/) es una plataforma social de mensajería instantánea y VoIP que facilita la comunicación mediante llamadas de voz, videollamadas, mensajes de texto y compartición de medios. Las conversaciones en Discord pueden ser privadas o darse dentro de comunidades virtuales conocidas como "servidores".

Este tutorial te guiará para integrar la API de Watcher con Node-RED y enviar datos desde Watcher a Discord de forma fluida. Esta integración ofrece un método sencillo y eficiente para **recibir notificaciones y abre la puerta a más aplicaciones e integraciones**.

## Parte 1. Configurar Watcher en Node-RED

### Paso 1. Configurar Node-RED

Primero, debes ejecutar una tarea en Watcher siguiendo el video a continuación. Si quieres saber más [por favor haz clic aquí](https://wiki.seeedstudio.com/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Node-RED es requerido para esta configuración, junto con la API de Watcher. Si no has instalado Node-RED o no lo has conectado con la API de Watcher, empieza aquí: [**Watcher a Node-RED Inicio Rápido**](https://wiki.seeedstudio.com/watcher_to_node_red).

### Paso 2. Preparar datos desde Watcher

Después de configurar Watcher para trabajar con Node-RED, el siguiente paso es preparar los datos del Watcher para Discord. Haz doble clic en el nodo función para formatear los datos apropiadamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_1.png" style={{width:1000, height:'auto'}}/></div>

Para el propósito de este tutorial, enviaremos el contenido así como la imagen. Sin embargo, se recomienda transformar los datos según sea necesario para tu aplicación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_2.png" style={{width:700, height:'auto'}}/></div>

#### Ejemplo de función Node-RED para formatear datos

```sh
node.send({ payload: msg.payload.value[0].content });

node.send({ payload: msg.payload.value[0].image_url });
```
## Parte 2. Configurar Bot de Discord

### Paso 3. Registrarse en Discord

Se requiere una cuenta de Discord para continuar. Si aún no tienes una cuenta, por favor [**haz clic aquí**](https://discord.com) y sigue los pasos para crear una cuenta.

Si ya tienes una cuenta, continúa con el [**Paso 4**](#paso-4-crear-aplicación-de-desarrollo).

Si ya cuentas con un bot de Discord que quieres configurar en Node-RED, puedes saltar a la [**Parte 3**](#parte-3-integrar-discord-con-node-red).

### Paso 4. Crear Aplicación de Desarrollo

Una vez que tengas tu cuenta de Discord configurada y hayas iniciado sesión, dirígete al [**Portal de Desarrolladores de Discord**](https://discord.com/developers/applications) y crea una nueva aplicación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_1.png" style={{width:1000, height:'auto'}}/></div>

Introduce un nombre para tu aplicación, acepta los [**Términos de Servicio para Desarrolladores**](https://support-dev.discord.com/hc/articles/8562894815383-Discord-Developer-Terms-of-Service) y la [**Política para Desarrolladores**](https://support-dev.discord.com/hc/articles/8563934450327-Discord-Developer-Policy) de Discord, luego haz clic en **Crear**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_2.png" style={{width:1000, height:'auto'}}/></div>

:::note
Necesitarás una dirección de correo electrónico válida vinculada a tu cuenta de Discord para continuar. Si no tienes un email asociado, sigue estas instrucciones: [Cómo cambiar el correo electrónico de tu cuenta](https://support.discord.com/hc/en-us/articles/4423385681175-How-to-Change-Your-Account-s-Email-Address)
:::

### Paso 5. Configurar Ajustes del Bot

Ahora configuraremos los ajustes del bot. Para hacerlo, sigue estos pasos:

1. En la barra lateral izquierda de la página de tu aplicación, haz clic en la pestaña **Bot** bajo **Configuración**.

2. En la sección **Privileged Gateway Intents**, verás varias opciones. Para este tutorial, solo necesitamos habilitar la **INTENCIÓN DE CONTENIDO DE MENSAJE (MESSAGE CONTENT INTENT)**. Esto permite que tu bot lea el contenido de los mensajes. Activa el interruptor junto a esta opción; al habilitarse, el interruptor se pondrá azul.

Cada vez que hagas un cambio en tu bot, aparecerá un aviso en la parte inferior para **Guardar Cambios**. Asegúrate de hacerlo antes de continuar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_3.png" style={{width:1000, height:'auto'}}/></div>

:::note
Dependiendo de lo que planees hacer con tu aplicación, podrías necesitar habilitar otras intenciones. Para funcionalidades más complejas, es posible que requieras habilitar **INTENCIÓN DE PRESENCIA** o **INTENCIÓN DE MIEMBROS DEL SERVIDOR**. Sin embargo, para este tutorial donde solo enviamos mensajes, activar la **INTENCIÓN DE CONTENIDO DE MENSAJE** es suficiente.
:::

En la página del Bot, también verás una sección llamada **Token** cerca de la parte superior. Haz clic en el botón **Restablecer Token (Reset Token)** para generar un nuevo token para tu bot.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_4.png" style={{width:1000, height:'auto'}}/></div>

Ten en cuenta que restablecer el token hará que tu bot deje de funcionar hasta que actualices el token en el código de tu bot. Asegúrate de estar listo para actualizar la configuración antes de proceder.

Es posible que se te solicite autenticación multifactor. Si es así, complétala antes de continuar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_5.png" style={{width:1000, height:'auto'}}/></div>

Copia este token y guárdalo en un lugar seguro. Lo necesitarás para autenticar tu bot en Node-RED más adelante.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_6.png" style={{width:1000, height:'auto'}}/></div>

:::warning
Nunca compartas públicamente el token de tu bot. Cualquiera que tenga acceso a él puede controlar tu bot. Si accidentalmente lo expones, restablécelo inmediatamente en esta página.
:::

### Paso 6. Configurar Ajustes OAuth2

Ahora, cambia a la pestaña **OAuth2** bajo **Configuración** y desplázate hacia abajo hasta ver el **Generador de URL OAuth2**. Aquí, marca el alcance **bot** ya que estamos creando una aplicación bot.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_7.png" style={{width:1000, height:'auto'}}/></div>

Después de seleccionar el alcance bot, aparecerá un nuevo cuadro para seleccionar **Permisos del Bot**. Para este tutorial, otorgaremos permisos de **Administrador**, lo que le da acceso a todas las funcionalidades del bot.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_8.png" style={{width:1000, height:'auto'}}/></div>

:::warning
Otorgar permisos de Administrador a un bot le concede acceso completo a todas las funciones del servidor. En un entorno productivo, se recomienda seguir el principio de menor privilegio y otorgar solo los permisos específicos que el bot necesite.
:::

Finalmente, desplázate hacia abajo para ver la URL generada. Copia esta URL y pégala en la barra de direcciones de tu navegador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_9.png" style={{width:1000, height:'auto'}}/></div>

### Paso 7. Conceder Acceso al Bot en el Servidor

Se te pedirá que selecciones un servidor donde agregar el bot. Escoge el servidor adecuado en el menú desplegable y haz clic en **Continuar**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_10.png" style={{width:1000, height:'auto'}}/></div>

En la siguiente pantalla verás una lista completa de permisos que estás otorgando al bot, basada en tu selección en el Generador de URL OAuth2 en el [**Paso 6**](#paso-6-configurar-ajustes-oauth2). Revisa cada permiso cuidadosamente y haz clic en **Autorizar**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_11.png" style={{width:1000, height:'auto'}}/></div>

Como en el [**Paso 5**](#paso-5-configurar-ajustes-del-bot), es posible que te soliciten autenticación multifactor nuevamente. Si es así, complétala antes de continuar.

Después de la autorización exitosa, verás un mensaje de confirmación que indica que el bot ha sido agregado a tu servidor Discord seleccionado. Ahora, regresa a tu servidor para continuar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_12.png" style={{width:1000, height:'auto'}}/></div>

### Paso 8. Obtener ID del Canal

Una vez en tu servidor de Discord, haz clic en el ícono de engranaje (⚙️) cerca de la parte inferior de la pantalla, junto a la información de tu perfil. Esto abrirá la Configuración de Usuario.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_13.png" style={{width:1000, height:'auto'}}/></div>

En la barra lateral de Configuración de Usuario, desplázate a la sección **Configuración de Aplicaciones** y haz clic en **Avanzado**. Asegúrate de que el interruptor de **Modo Desarrollador** esté activado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_14.png" style={{width:1000, height:'auto'}}/></div>

Cierra la Configuración de Usuario y regresa a tu servidor. Haz clic derecho en el canal que deseas usar (en este tutorial, usamos el canal **general**). En el menú contextual que aparece, haz clic en **Copiar ID del Canal**. Guarda este ID para usarlo en tu flujo de Node-RED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_15.png" style={{width:1000, height:'auto'}}/></div>

:::note
El ID del canal es un identificador único para cada canal de Discord. Asegúrate de mantenerlo seguro y no compartirlo públicamente.
:::

## Parte 3. Integrar Discord con Node-RED

### Paso 9. Instalar módulo de Discord

Haz clic en el icono de tres barras y luego en la opción **Manage palette** (Administrar paleta). Esto abrirá una ventana donde puedes agregar o quitar nodos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_2.5.png" style={{width:1000, height:'auto'}}/></div>

Cambia a la pestaña **Install** (Instalar) dentro de la ventana de gestión de paleta. En la barra de búsqueda escribe `discord` para encontrar el módulo. Luego, haz clic en el botón **install** junto a la entrada **node-red-contrib-discord-advanced**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_3.png" style={{width:1000, height:'auto'}}/></div>

También recomendamos revisar la [**documentación del nodo**](https://github.com/Markoudstaal/node-red-contrib-discord-advanced/blob/main/README.md) y el [**repositorio en Github**](https://github.com/Markoudstaal/node-red-contrib-discord-advanced) si quieres entender más a fondo cómo funciona el módulo y maximizar su potencial.

:::note
El módulo **node-red-contrib-discord-advanced** es recomendado por su compatibilidad y fiabilidad actuales al momento de escribir este tutorial (agosto 2024). Sin embargo, la disponibilidad y funcionalidad de los módulos de Node-RED pueden variar con el tiempo. Es aconsejable revisar los comentarios recientes y notas de compatibilidad en la biblioteca de Node-RED o en repositorios GitHub. Si tienes problemas con este módulo, considera explorar otros módulos de Discord en la biblioteca de Node-RED para encontrar una opción más adecuada.
:::

### Paso 10. Configurar nodo de Discord

Después de instalar el módulo de Discord, arrastra el nodo **discordMessageManager** a tu flujo de Node-RED y conéctalo al nodo función.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_4.png" style={{width:1000, height:'auto'}}/></div>

Haz doble clic en el nodo **discordMessageManager** para abrir su panel de configuración. Haz clic en el ícono de más (+) junto al campo **token** para agregar una nueva configuración de token API de Discord.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_5.png" style={{width:700, height:'auto'}}/></div>

En la ventana nueva, ingresa la siguiente información:
- Token: Ingresa el token que obtuviste en el [**Paso 5**](#paso-5-configurar-ajustes-del-bot)
- Nombre: Ponle un nombre a la configuración del token

Luego, haz clic en **Add** o **Update** para guardar la configuración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_6.png" style={{width:700, height:'auto'}}/></div>

En el campo **Channel**, ingresa el ID del canal que obtuviste en el [Paso 8](#paso-8-obtener-id-del-canal). Después, haz clic en **Done** para cerrar el panel de configuración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_6.5.png" style={{width:700, height:'auto'}}/></div>

:::note
Para configuraciones más complejas con múltiples canales y condiciones de disparo, puedes dejar el campo Canal vacío y usar `msg.channel` para asignar el canal dinámicamente. Sin embargo, para este tutorial básico, usaremos un ID de canal estático.
:::

### Paso 11. Desplegar

Finalmente, haz clic en el botón **Deploy** en la esquina superior derecha de la interfaz de Node-RED. Una vez desplegado, tu Watcher enviará mensajes a Node-RED, que a su vez los reenviará a tu canal de Discord.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_7.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_16.png" style={{width:1000, height:'auto'}}/></div>

¡Felicidades! Has configurado exitosamente tu Watcher para enviar mensajes a Discord a través de Node-RED. Esta configuración garantiza que recibas notificaciones en tiempo real en tu canal de Discord cada vez que tu Watcher se active. Al hacerlo, has desbloqueado una gran cantidad de oportunidades emocionantes para tus proyectos de desarrollo. ¡Esperamos con entusiasmo las soluciones innovadoras que crearás próximamente!

## Solución de Problemas

Al integrar Discord con Node-RED, podrías encontrar algunos errores. Aquí hay dos errores comunes y pasos detallados para resolverlos:

### Error: Used disallowed intents

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_Error_1.png" style={{width:1000, height:'auto'}}/></div>

Este error ocurre cuando tu bot intenta usar intenciones que no han sido habilitadas en el Portal de Desarrolladores de Discord. Para solucionarlo:

1. Ve al [**Portal de Desarrolladores de Discord**](https://discord.com/developers/applications).
2. Selecciona tu aplicación.
3. Haz clic en **Bot** en la barra lateral izquierda.
4. Desplázate a la sección **Privileged Gateway Intents**.
5. Habilita las intenciones que tu bot necesita (comúnmente **Presence Intent**, **Server Members Intent**, y **Message Content Intent**).
6. Haz clic en **Guardar Cambios** al final de la página.
7. Despliega de nuevo tu flujo en Node-RED.

### DiscordAPIError&#91;50001&#93;: Missing Access

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_Error_2.png" style={{width:1000, height:'auto'}}/></div>

Este error sugiere que tu bot no tiene los permisos necesarios para realizar la acción. Para resolverlo:

1. Asegúrate de que tu bot haya sido invitado al servidor con los permisos correctos:
- Ve al [**Portal de Desarrolladores de Discord**](https://discord.com/developers/applications).
- Selecciona tu aplicación y ve a la sección **OAuth2**.
- En el **Generador de URL**, selecciona **bot** bajo **SCOPES**.
- Bajo **BOT PERMISSIONS**, selecciona los permisos que tu bot necesita (como mínimo, **Enviar Mensajes** y **Ver Canales**).
- Copia la URL generada y ábrela en una pestaña nueva para invitar al bot a tu servidor con esos permisos.

2. Verifica los permisos del canal:
- En Discord, haz clic derecho en el canal al que intentas enviar mensajes.
- Haz clic en **Editar Canal** > **Permisos**.
- Asegúrate que el rol de tu bot tenga los permisos necesarios, especialmente **Ver Canal** y **Enviar Mensajes**.

3. Verifica el ID del Canal:
- Revisa que el ID del canal en tu configuración de Node-RED sea correcto.
- Asegúrate de estar usando el ID de un canal de texto, no de voz o categoría.

4. Verifica el token de tu bot:
- Asegúrate de que el token en tu configuración de Node-RED esté correcto y actualizado.
- Si tienes dudas, puedes regenerar el token en el Portal de Desarrolladores de Discord en la sección **Bot**.

5. Despliega de nuevo tu flujo en Node-RED después de hacer estos cambios.

Si continúas con problemas después de estos pasos, considera consultar la [**documentación de la API de Discord**](https://discord.com/developers/docs/reference) o buscar ayuda en la [**comunidad de desarrolladores de Discord**](https://discord.com/invite/discord-developers) para soluciones más específicas.

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes canales de soporte y asegurarnos que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios medios de comunicación para atender distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
