---
description: Send message from Watcher & Node-RED to Open Interpreter
title: Watcher & Node-RED a Open Interpreter
keywords:
- watcher
- Open Interpreter
image: https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/banner.png
slug: /es/watcher_node_red_to_open_interpreter
last_update:
  date: 07/25/2025
  author: Guillermo
---

# Guía Rápida: Watcher con Open Interpreter

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/banner.png" style={{width:1000, height:'auto'}}/></div>

## Parte 1. ¿Qué es [Open Interpreter](https://docs.openinterpreter.com/getting-started/introduction)?

Open Interpreter es una herramienta de código abierto que facilita la interacción entre los usuarios y sus computadoras permitiendo ejecutar comandos en lenguaje natural en diversos lenguajes de programación. Actúa como un puente, permitiendo a los usuarios escribir instrucciones en lenguaje simple, que luego el intérprete traduce en código ejecutable. Esto mejora la productividad y hace que la programación sea más accesible, especialmente para quienes no están familiarizados con la sintaxis de código.

## Parte 2. Operaciones en Node-RED

En esta parte, necesitamos 4 módulos para completar el trabajo. Son los módulos **SenseCap Watcher OpenSteam, function, http request y debug**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/6.png" style={{width:1000, height:'auto'}}/></div>

1. **Módulo SenseCap Watcher OpenSteam**: Recibe el mensaje desde Watcher hacia Node-RED.  
2. **Módulo function**: Procesa los datos para obtener el mensaje deseado.  
3. **Módulo http request**: Envía el mensaje a Open Interpreter mediante protocolo HTTP.  
4. **Módulo debug**: Depura todo el flujo de trabajo para comprobar que todo funciona correctamente.

A continuación te mostraremos cómo configurar estos módulos paso a paso.

### Paso 1. Configurar módulo SenseCap Watcher OpenSteam

Primero, debes ejecutar una tarea en Watcher siguiendo el video siguiente. Si deseas saber más, [haz clic aquí](https://wiki.seeedstudio.com/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Si aún no sabes cómo enviar mensajes de Watcher a Node-RED, [haz clic aquí](https://wiki.seeedstudio.com/watcher_to_node_red/).

### Paso 2. Configurar módulo function

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/7.png" style={{width:800, height:'auto'}}/></div>

```javascript
msg.payload = {
    content: msg.payload.value[0].content,
    image_url: msg.payload.value[0].image_url
};
return msg;
```

### Paso 3. Configurar módulo http request

Usamos una solicitud POST por seguridad y enviamos al puerto 3000, que estará siendo escuchado por Open Interpreter.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/8.png" style={{width:800, height:'auto'}}/></div>

### Paso 4. Configurar módulo debug

Selecciona según la imagen siguiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/9.png" style={{width:800, height:'auto'}}/></div>

Cuando termines la configuración, no olvides hacer clic en **Deploy**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/10.png" style={{width:1000, height:'auto'}}/></div>

## Parte 3. Operaciones en Open Interpreter

:::tip
Antes de continuar, necesitas tener un entorno de desarrollo Python en tu computadora.

Si aún no lo tienes, [haz clic aquí para ver cómo instalarlo.](https://phoenixnap.com/kb/how-to-install-python-3-windows)
:::

### Paso 5. Instalar Open Interpreter

Después de instalar Python, puedes instalar Open Interpreter fácilmente con un solo comando:

```bash
pip install open-interpreter
```

### Paso 6. Iniciar Open Interpreter

Interpreter tiene dos modos: en línea y local. Por defecto, se selecciona el modo en línea, que usa la API Key de GPT-4 Turbo de OpenAI. También puedes usar el modo local descargando el modelo.

:::tip
Recomiendo el modo en línea, ya que es más rápido e inteligente. El modo local a veces se bloquea.
:::

#### Modo en línea

1. Primero, necesitas una API Key de OpenAI. [Haz clic aquí](https://platform.openai.com/api-keys) si eres usuario pago de GPT-4.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/16.png" style={{width:1000, height:'auto'}}/></div>

2. Luego, ejecuta el comando `interpreter` e introduce tu API Key. Después de eso, selecciona el modelo `gpt-4-turbo`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/2_1.png" style={{width:1000, height:'auto'}}/></div>

#### Modo local

1. Primero, necesitas descargar un modelo. Se recomienda usar **Ollama**. [Haz clic aquí.](https://ollama.com/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/12.png" style={{width:1000, height:'auto'}}/></div>

2. Tras instalar Ollama, ejecuta `ollama` en PowerShell o Terminal. Luego corre:

```bash
ollama run llama3.1
```

Para descargar y ejecutar el modelo **llama3.1**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/15.png" style={{width:1000, height:'auto'}}/></div>

3. Para probar otros modelos, [haz clic aquí.](https://ollama.com/library)  
Solo corre: `ollama run xxx`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/13.png" style={{width:1000, height:'auto'}}/></div>

4. Una vez que hayas descargado y ejecutado el modelo, continúa con:

```bash
interpreter -l
```

Y selecciona **ollama** y el modelo **llama3.1**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/11.png" style={{width:1000, height:'auto'}}/></div>

### Paso 7. Ejecutar comandos

:::tip
He probado muchas veces el siguiente comando en Interpreter, pero no siempre responde igual.

Debes interactuar con Interpreter según su respuesta. A veces necesitarás reiniciarlo y probar de nuevo.
:::

Este es el comando en lenguaje natural enviado a Open Interpreter:

```
i want you to keep listening computer port 3000 and extract the image_url and open it in browser.
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/2.png" style={{width:1000, height:'auto'}}/></div>

La primera vez, Interpreter respondió que por simplicidad solo soporta solicitudes GET, pero nosotros usamos POST. Sugirió modificar el servidor para aceptar POST, a lo cual accedimos y se ejecutó automáticamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/3.png" style={{width:1000, height:'auto'}}/></div>

Como puedes ver, el código se ejecutó exitosamente, escuchando el puerto 3000.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/4.png" style={{width:1000, height:'auto'}}/></div>

Ahora, usa Watcher para detectarte. La imagen será capturada y abierta automáticamente en el navegador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/5.png" style={{width:1000, height:'auto'}}/></div>

¡Felicidades por integrar exitosamente Watcher con Open Interpreter! Este es un gran paso en tu camino, demostrando tu dedicación y habilidad. Sigue adelante, ¡te esperan más herramientas y conceptos fascinantes!

## Soporte Técnico y Comunidad

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para distintos tipos de usuarios.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>