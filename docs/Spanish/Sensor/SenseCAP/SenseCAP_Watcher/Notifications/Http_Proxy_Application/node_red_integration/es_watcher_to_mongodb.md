---
description: Send data from Watcher & Node-RED to MongoDB
title: Watcher & Node-RED a MongoDB
keywords:
- Watcher
- MongoDB
- Node-RED
image: https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Watcher_MongoDB_Cover.jpg
slug: /es/watcher_node_red_to_mongodb
last_update:
  date: 07/25/2025
  author: Guillermo
---

# Inicio Rápido Watcher a MongoDB

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Watcher_MongoDB_Cover.jpg" style={{width:1000, height:'auto'}}/></div>

[**MongoDB**](https://www.mongodb.com/) es una potente base de datos documental multiplataforma que sobresale en el manejo de datos estructurados y no estructurados. Su modelo de datos flexible y sin esquema está basado en documentos similares a JSON, lo que la hace una excelente opción para aplicaciones dinámicas que requieren consultas ad hoc e indexación.

Usar MongoDB proporciona un método sencillo para **almacenar y utilizar datos del Watcher para procesamiento posterior u otras aplicaciones de proyecto.**

Este tutorial te guiará para usar la API de Watcher y Node-RED para enviar datos a MongoDB de forma fluida, ideal para proyectos que demandan manejo de datos en tiempo real y persistencia.

## Parte 1. Configurar Watcher en Node-RED

### Paso 1. Instalar Node-RED

Primero, necesitas ejecutar una tarea en Watcher siguiendo el video a continuación. Si quieres saber más [haz clic aquí](https://wiki.seeedstudio.com/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Node-RED es necesario para esta configuración, junto con la API de Watcher. Si no has instalado Node-RED o no lo has conectado con la API de Watcher, comienza aquí: [**Inicio Rápido Watcher a Node-RED**](https://wiki.seeedstudio.com/watcher_to_node_red).

### Paso 2. Preparar datos para MongoDB

Después de integrar Watcher con Node-RED, el siguiente paso es preparar los datos del Watcher para MongoDB. Usa un nodo función en Node-RED para formatear los datos apropiadamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_1.png" style={{width:1000, height:'auto'}}/></div>

Para el propósito de este tutorial, simplemente retornaremos todos los datos del Watcher. Sin embargo, te recomendamos transformar los datos según las necesidades de tu aplicación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_2.png" style={{width:1000, height:'auto'}}/></div>

#### Ejemplo de función Node-RED para formatear datos

```sh
msg.payload = {
    "tlid": msg.payload.value[0].tlid,
    "tn": msg.payload.value[0].tn,
    "content": msg.payload.value[0].content,
    "image_url": msg.payload.value[0].image_url,
    "timestamp": msg.payload.timestamp,
    "orgId": msg.payload.orgId,
    "eui": msg.payload.eui,
    "channel": msg.payload.channel,
    "measurementID": msg.payload.value[0].measurementID
};
return msg;
```
## Parte 2. Configurar MongoDB

### Paso 3. Crear una cuenta

Luego, crea una cuenta en MongoDB o inicia sesión si ya tienes una. Si eres nuevo en MongoDB, comienza visitando [**mongodb.com**](https://www.mongodb.com) y registrándote para una cuenta gratuita.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_1.png" style={{width:1000, height:'auto'}}/></div>

### Paso 4. Desplegar un nuevo Clúster

Una vez conectado, procede a desplegar un nuevo clúster:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_4.png" style={{width:1000, height:'auto'}}/></div>

1. **Elige la Configuración del Clúster**: Para desarrollo, recomendamos usar la configuración M0 porque es gratuita y suficiente para pruebas pequeñas. Sin embargo, puedes elegir otra configuración que se adapte mejor a tus requerimientos.
2. **Selecciona un Proveedor en la Nube**: Elegimos AWS por su disponibilidad y confiabilidad, pero otros proveedores como Google Cloud o Azure también son viables según tu ubicación o necesidades técnicas.
3. **Selecciona una Región**: Debe ser la región más cercana a tu base principal de usuarios para minimizar latencia y mejorar rendimiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_5.png" style={{width:1000, height:'auto'}}/></div>

### Paso 5. Configura la Seguridad de tu Base de Datos

Una vez creado el nodo, navega al menú **Quickstart** en la barra lateral izquierda bajo **Seguridad**. Aquí crearás un usuario de base de datos especificando nombre de usuario y contraseña.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_6.png" style={{width:1000, height:'auto'}}/></div>

:::note
Por defecto, los usuarios tienen privilegios de *lectura y escritura* en cualquier base de datos. Puedes actualizar estos permisos y/o crear usuarios adicionales más adelante.
:::

Después de configurar tu usuario, permanece en la página **Quickstart** y desplázate hacia abajo para agregar tu dirección IP actual a la lista de acceso IP.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_7.png" style={{width:1000, height:'auto'}}/></div>

### Paso 6. Crear una Base de Datos y Colección

En la barra lateral izquierda, haz clic en el menú **Databases** bajo la categoría **Deployment**. Luego, haz clic en **Browse Collections** para abrir la gestión de bases de datos y colecciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_8.png" style={{width:1000, height:'auto'}}/></div>

Dentro del gestor de bases de datos, haz clic en **Add My Own Data** para comenzar a crear una nueva base de datos y colección.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_9.png" style={{width:1000, height:'auto'}}/></div>

Aparecerá un cuadro pidiéndote los nombres para tu nueva base de datos y colección. Llena los nombres deseados.

Luego, haz clic en el botón **Create** para finalizar la creación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_10.png" style={{width:1000, height:'auto'}}/></div>

### Paso 7. Obtén tu Hostname

Inicia sesión en tu tablero de MongoDB Atlas. Navega al menú **Database** en la barra lateral izquierda para encontrar tu clúster. Localiza el clúster deseado y haz clic en **Connect**. Se abrirán opciones de conexión.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_11.png" style={{width:1000, height:'auto'}}/></div>

En las opciones, haz clic en **Shell**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_12.png" style={{width:1000, height:'auto'}}/></div>

Después, en la sección **Run your connection string in your command line.** encontrarás tu cadena completa de conexión.

En esta cadena, identifica la parte que empieza después de `mongodb+srv://` hasta el carácter `/`. Esa es tu hostname, típicamente contiene el nombre de tu clúster seguido de `.mongodb.net`.

Por ejemplo, si tu cadena es:

```sh
mongosh "mongodb+srv://my-cluster123.mongodb.net" --apiVersion 1 --username my-username
```

El hostname sería:

```sh
my-cluster123.mongodb.net
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_13.png" style={{width:1000, height:'auto'}}/></div>

## Parte 3. Conectar MongoDB a Node-RED

### Paso 8. Instalar módulo MongoDB

Haz clic en el icono de tres barras y luego en la opción **Manage palette**. Se abrirá una ventana para agregar o eliminar nodos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_3.png" style={{width:1000, height:'auto'}}/></div>

Cambia a la pestaña **Install** dentro del gestor de paletas. En el buscador escribe `mongodb-aleph` para encontrar el módulo. Luego haz clic en **install** junto a **node-red-contrib-mongodb-aleph**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_4.png" style={{width:1000, height:'auto'}}/></div>

:::note
El módulo **node-red-contrib-mongodb-aleph** es recomendado por su compatibilidad y fiabilidad al momento de escribir este tutorial (julio 2024). Sin embargo, la disponibilidad y funcionalidad de módulos Node-RED puede variar con el tiempo. Se recomienda revisar opiniones y notas de compatibilidad recientes en la librería Node-RED o repositorios GitHub. Si tienes problemas, considera explorar otros módulos MongoDB listados en Node-RED.
:::

### Paso 9. Configurar nodo MongoDB

Una vez instalado el módulo, arrastra el nodo **mongodb - aleph - out** a tu flujo de Node-RED y conéctalo al nodo función.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_5.png" style={{width:1000, height:'auto'}}/></div>

Haz doble clic en el nodo MongoDB para configurarlo. Luego, haz clic en el ícono más (+) junto al campo servidor para agregar una nueva configuración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_6.png" style={{width:1000, height:'auto'}}/></div>

1. Ingresa el hostname que obtuviste antes.
2. Cambia la topología de conexión a **DNS Cluster (mongodb+srv://)** desde el desplegable.
3. Ingresa el nombre de tu base de datos MongoDB.
4. Introduce el nombre de usuario configurado en la seguridad.
5. Introduce la contraseña correspondiente.
6. Proporciona un nombre descriptivo para esta conexión en Node-RED.

Luego, haz clic en **Add** o **Update** para guardar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_7.png" style={{width:1000, height:'auto'}}/></div>

Con el servidor configurado, ahora especifica los detalles para la inserción de datos:

1. Ingresa el nombre de la colección MongoDB donde quieres insertar los datos.
2. Configura la operación como **Insert**, para añadir nuevos documentos a la colección.

Haz clic en **Done** para completar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_8.png" style={{width:1000, height:'auto'}}/></div>

### Paso 10. Desplegar

Finalmente, despliega tu flujo haciendo clic en el botón Deploy en la esquina superior derecha de la interfaz Node-RED. Esto activará tus nodos configurados, permitiendo el flujo de datos desde el nodo función a MongoDB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_9.png" style={{width:1000, height:'auto'}}/></div>

Ahora verás los datos poblarse en MongoDB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Watcher_Collection_Finished.png" style={{width:1000, height:'auto'}}/></div>

¡Felicidades por integrar exitosamente Watcher con MongoDB! Has abierto la puerta a una amplia variedad de oportunidades emocionantes en tus proyectos de desarrollo. Prepárate para crear aplicaciones innovadoras que aprovechen las robustas capacidades de MongoDB. ¡Esperamos ver las soluciones increíbles que desarrollarás próximamente!

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
