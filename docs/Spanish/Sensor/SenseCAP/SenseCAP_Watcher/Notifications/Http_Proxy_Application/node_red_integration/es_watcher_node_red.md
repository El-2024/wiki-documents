---
description: Send message from Watcher to Node-Red
title: Watcher a Node-RED
keywords:
- watcher
- Node-Red
image: https://files.seeedstudio.com/wiki/watcher_getting_started/cover.png
slug: /es/watcher_to_node_red
sidebar_position: 1
last_update:
  date: 06/25/2025
  author: Guillermo
---

# Inicio Rápido Watcher a Node-RED

<div class="table-center">
<iframe width="800" height="450" src="https://www.youtube.com/embed/Ono_v759R0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[**Node-RED**](https://nodered.org/) es una herramienta de programación para conectar dispositivos de hardware, APIs y servicios en línea de formas nuevas e interesantes.

Ofrece un editor basado en navegador que facilita el cableado de flujos utilizando una amplia variedad de nodos en la paleta, los cuales pueden desplegarse al runtime con un solo clic.

Para facilitar a nuestros usuarios **conectar datos del Watcher con diversas plataformas PaaS para un procesamiento más profundo**, por ejemplo, de Watcher a IFTTT, Telegram, Twilio, etc., realizaremos una serie de tutoriales para **Watcher & Node-RED**.

Este tutorial, el primero de la serie, te guiará en la instalación y uso de Node-RED y en cómo llamar la API de Watcher para conectar con Node-RED.

## Parte 1. Instalar Node.js®

Para instalar Node-RED localmente necesitarás una [versión compatible de Node.js](https://nodered.org/docs/faq/node-versions).

Descarga la última versión LTS 14.x desde la [página oficial de Node.js](https://nodejs.org/en/). Esta es la mejor versión para tu sistema.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/1.png" /></div>

:::note
Ejecuta el archivo MSI descargado. La instalación requiere permisos de administrador local; si no los tienes, se te pedirá una contraseña durante la instalación. Acepta las opciones por defecto. Tras la instalación, cierra cualquier terminal abierto y vuelve a abrirlo para que se actualicen las variables de entorno.
:::

Si no tienes ningún entorno de programación instalado, recomendamos marcar la opción para instalar las herramientas necesarias durante la instalación de Node.js, para evitar problemas posteriores.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/2.png" /></div>

La forma más sencilla de instalar Node-RED es usando la herramienta de gestión de paquetes npm. No recomendamos usar npm 1.x; mejor actualízalo a la última versión 2.x:

:::note
En **Windows** (requiere Windows 10 o superior), presiona **Win+R**, escribe `cmd` y ejecuta el siguiente comando.

En **MacOS** o **Linux**, ejecuta el comando en la terminal, añadiendo `sudo` si no usas root.
:::

```sh
npm install -g npm@2.x
```

Luego, verifica que Node.js y npm estén correctamente instalados:

```sh
node --version && npm --version
```

La salida debería ser similar a:

```sh
> v16.17.0
> 2.15.12
```

## Parte 2. Instalar Node-RED

Para instalar Node-RED globalmente y agregar el comando `node-red` a tu sistema, ejecuta:

```sh
npm install -g --unsafe-perm node-red
```

Luego, para ejecutar Node-RED:

```sh
node-red
```

Se mostrará el log de Node-RED en la terminal. Debes mantener la terminal abierta para que Node-RED siga ejecutándose.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100-nodered/3.png" /></div>

Esto te permitirá acceder al editor de Node-RED en [http://localhost:1880](http://localhost:1880).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/4.png" /></div>

## Parte 3. Ejecutar una tarea en Watcher

Indícale a Watcher qué deseas que haga. Solo necesitas escribir comandos en el cuadro de entrada, por ejemplo: **Notificarme cuando detecte personas** o **Avisarme si hay fuego**, etc. Para más información, [**haz clic aquí**](https://wiki.seeedstudio.com/getting_started_with_watcher_task/).

Watcher te notificará a través de la app SenseCraft, alertas de audio y luces RGB intermitentes cuando detecte un incendio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/svg10.svg" style={{width:600, height:'auto'}}/></div>

## Parte 4. Watcher envía mensajes a Node-RED

Ofrecemos dos métodos para enviar mensajes de Watcher a Node-RED: nodo SenseCAP y protocolo HTTP. Puedes usar cualquiera.

### Método 1: Usar nodo SenseCAP

#### Paso 1. Obtener API Key de Watcher

Abre la app SenseCraft y sigue los pasos para obtener **Organization ID** y **API Key**. Los necesitarás luego.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Página 1</th>
      <th>Página 2</th>
      <th>Página 3</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/first.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/1.svg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/2.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <th>Página 4</th>
      <th>Página 5</th>
      <th>Página 6</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/3.svg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/4.svg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/5.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

#### Paso 2. Instalar nodo SenseCAP

Haz clic en el icono de tres barras y luego en **Manage palette**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/1.png" style={{width:800, height:'auto'}}/></div>

Haz clic en **Install**, busca **sensecap** y luego **instálalo**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/2.png" style={{width:600, height:'auto'}}/></div>

Arrastra los módulos **OpenStream** y **debug** al área de trabajo y conéctalos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/3.png" style={{width:800, height:'auto'}}/></div>

**Doble clic** en el módulo OpenStream para abrir la configuración lateral. Dale un nombre y crea una nueva cuenta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/4.png" style={{width:800, height:'auto'}}/></div>

Nombra tu cuenta e ingresa tu **Organization ID** y **API Key** obtenidos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/5.png" style={{width:800, height:'auto'}}/></div>

Haz clic en **Done** para recibir todos los mensajes o selecciona mensajes específicos rellenando el código **EUI** del dispositivo desde **Settings > About Device** o el mensaje en **Paso 6**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/6.png" style={{width:800, height:'auto'}}/></div>

Haz clic en **Deploy** para compilar y ejecutar los cambios.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/7.png" style={{width:800, height:'auto'}}/></div>

Verás un icono de conexión indicando que funciona correctamente. Cuando Watcher envíe mensajes, los recibirás en Node-RED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/9.png" style={{width:800, height:'auto'}}/></div>

### Método 2: Usar protocolo HTTP

#### Paso 1. Abrir función de HTTP push

Cuando ejecutes una tarea, haz clic en **Detail Configs**, luego en **HTTP Push Notification** y en **Go Setup**. Debes ingresar la **dirección IP de tu computadora** y el **puerto de acceso a Node-RED** (por defecto 1880). Luego haz clic en **Update Now** y en **Run Task**.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Página 1</th>
      <th>Página 2</th>
      <th>Página 3</th>
      <th>Página 4</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/26.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/27.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/28.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/29.png" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

#### Paso 2. Configuración en Node-RED

Primero, importa el flujo en tu Node-RED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/24.png" style={{width:600, height:'auto'}}/></div>

Pega el siguiente código y haz clic en **Import**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/25.png" style={{width:600, height:'auto'}}/></div>

```
[
    {
        "id": "99b783856e77b41f",
        "type": "tab",
        "label": "Flow 2",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "2791b077ca7367c9",
        "type": "http in",
        "z": "99b783856e77b41f",
        "name": "",
        "url": "/v1/notification/event",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 450,
        "y": 460,
        "wires": [
            [
                "5de4e51231d87d00"
            ]
        ]
    },
    {
        "id": "61c50a0666f83a50",
        "type": "http response",
        "z": "99b783856e77b41f",
        "name": "",
        "statusCode": "200",
        "headers": {},
        "x": 830,
        "y": 460,
        "wires": []
    },
    {
        "id": "5de4e51231d87d00",
        "type": "function",
        "z": "99b783856e77b41f",
        "name": "",
        "func": "// here to process data\n// for example, extract alarm info \n// msg.payload = {\n//     alertMsg: msg.payload.events.text\n// }\n msg.payload = {\n    code: 200,\n    msg:\"ok\",\n    data: msg.payload\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 660,
        "y": 460,
        "wires": [
            [
                "61c50a0666f83a50",
                "852490a1c300cd94"
            ]
        ]
    },
    {
        "id": "852490a1c300cd94",
        "type": "debug",
        "z": "99b783856e77b41f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 840,
        "y": 520,
        "wires": []
    }
]
```

Ahora, cuando Watcher detecte personas, enviará el mensaje a Node-RED automáticamente~

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/23.png" style={{width:800, height:'auto'}}/></div>

## Parte 5. Vista previa de imagen

Si quieres previsualizar la imagen desde Watcher, necesitas instalar una librería en Node-RED.

Si no, puedes ignorar esta parte.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/n1.png" style={{width:800, height:'auto'}}/></div>

Después de la instalación, encontrarás el nodo en la sección **output**, arrástralo al lugar donde quieras mostrar la imagen y conéctalo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/n3.png" style={{width:800, height:'auto'}}/></div>

Este paso es muy importante. Debes **hacer doble clic en el nodo de vista previa de imagen** y **rellenar la URL en base64 dentro de este nodo**. No olvides hacer clic en **Done** y luego en el botón **Deploy** arriba a la derecha. Después de eso, cuando Watcher envíe un mensaje con imagen, podrás previsualizarla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/n2.png" style={{width:800, height:'auto'}}/></div>

¡Felicidades! Ahora los datos se transmiten con éxito de Watcher a Node-RED. En la próxima wiki te guiaremos para enviar los datos de Watcher a otras plataformas, ¡te invitamos a probarlo!

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos canales de soporte y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos varias vías de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
