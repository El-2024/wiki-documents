---
description: Deploy AI model from SenseCraft on Watcher
title: Entrenamiento de Modelo para Watcher
image: "https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png"
slug: /es/training_model_for_watcher
sidebar_position: 2
last_update:
  date: 2025-07-27
  author: Guillermo
---

# Entrenamiento de Modelo para SenseCAP Watcher

<div style={{ textAlign: "center" }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png" style={{ width: "1000px", height: "auto" }} />
</div>

Este artículo te enseñará cómo usar **SenseCraft** para entrenar tu propio modelo de IA y desplegarlo en el **SenseCAP Watcher**. Será un proceso muy interesante. Si aún no sabes qué es SenseCraft, visita [este enlace](https://sensecraft.seeed.cc/), una plataforma que permite desplegar modelos de IA de código abierto en dispositivos de Seeed Studio.

## Configuración del Modelo de IA desde el sitio web de SenseCraft

### Paso 1. Abre el sitio web de [SenseCraft](https://sensecraft.seeed.cc/)

Haz clic en "Products" en la barra de menú superior, luego selecciona "SenseCraft AI".

<div style={{ textAlign: "center" }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/1.png" style={{ width: "800px", height: "auto" }} />
</div>

### Paso 2. Selecciona tipo de entrenamiento

:::tip
**Recomendamos usar Grove Vision AI (V2) para recolectar los datos de entrenamiento desde la cámara**, ya que Watcher utiliza el mismo chip (Arm Cortex-M55), por lo que entrenar con Grove Vision AI V2 generará modelos más precisos.
:::

Para este tutorial se usa una cámara de computadora para mayor conveniencia.

<div style={{ textAlign: "center" }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/2.png" style={{ width: "800px", height: "auto" }} />
</div>

### Paso 3. Recolectar datos

**Pasos para entrenar:**

- Añade una categoría
- Modifica las etiquetas de la categoría
- Haz clic en "Hold to Record" dentro de la categoría
- Elige Grove Vision AI (V2)
- Inicia el entrenamiento

En este ejemplo se agregaron las categorías "car" y "doll".

<div style={{ textAlign: "center" }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/3.png" style={{ width: "800px", height: "auto" }} />
</div>

:::tip
Cuantos más datos y mejor calidad de imagen tengas, mejores serán los resultados.
:::

Después de recolectar los datos, haz clic en **"Click here"** bajo las etiquetas para iniciar el entrenamiento.

### Paso 4. Seleccionar el modelo entrenado

Una vez finalizado el entrenamiento:

- Haz clic sobre tu modelo
- Luego haz clic en **"Save to SenseCraft"**

<div style={{ textAlign: "center" }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/4.png" style={{ width: "800px", height: "auto" }} />
</div>

### Paso 5. Describir el modelo

Completa los siguientes campos:

- Nombre del modelo
- Extracto
- Introducción
- Preparación para despliegue

Si haces el modelo público, esta información será útil para otros usuarios.

<div style={{ textAlign: "center" }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/5(2).png" style={{ width: "800px", height: "auto" }} />
</div>

:::tip
Selecciona **SenseCAP Watcher** y **Grove Vision AI V2** como dispositivos compatibles.
:::

### Paso 6. Configurar parámetros del modelo

Ajusta el framework de IA y los umbrales deseados:

- **Confidence Threshold** (Confianza): Indica la certeza del modelo sobre su predicción.
- **IoU Threshold**: Evalúa la superposición entre la predicción y la caja real (bounding box).

<div style={{ textAlign: "center" }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/6.png" style={{ width: "800px", height: "auto" }} />
</div>

Después de configurar, haz clic en **Confirm**.

Ve a la sección **Pretrained Models > My Own Models** para ver tu modelo entrenado.

<div style={{ textAlign: "center" }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/7.png" style={{ width: "800px", height: "auto" }} />
</div>

## Configurar Watcher desde la app SenseCraft

### Paso 1. Selecciona tu dispositivo Watcher

<div style={{ textAlign: "center" }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/20.jpg" style={{ width: "300px", height: "auto" }} />
</div>

### Paso 2. Ingresa a configuración manual

<div style={{ textAlign: "center" }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/21.jpg" style={{ width: "300px", height: "auto" }} />
</div>

### Paso 3. Activa "Use TinyML Model"

<div style={{ textAlign: "center" }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/22.jpg" style={{ width: "300px", height: "auto" }} />
</div>

### Paso 4. Busca tu modelo

Escribe el nombre del modelo o desplázate hasta encontrarlo, luego selecciónalo.


<div style={{ textAlign: "center" }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/23.jpg" style={{ width: "300px", height: "auto" }} />
</div>

### Paso 5. Configura el umbral y condición

El umbral de confianza es la certeza del modelo sobre su predicción (0-1 o 0%-100%).

<div style={{ textAlign: "center" }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/24.jpg" style={{ width: "300px", height: "auto" }} />
</div>

### Paso 6. Nombra tu tarea

Asigna un nombre a tu tarea para enviarla y ejecutarla fácilmente en el dispositivo Watcher.

<div style={{ textAlign: "center" }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/25.jpg" style={{ width: "300px", height: "auto" }} />
</div>

### Paso 7. Espera el despliegue

Una vez seleccionado el modelo y configurados los parámetros, el Watcher descargará el modelo.

<div style={{ textAlign: "center" }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/26.jpg" style={{ width: "500px", height: "auto" }} />
</div>

:::tip
Si la descarga falla por razones externas, simplemente repite la selección y configuración.
:::

## Ejecución del Modelo de IA en Watcher

### Demostración de resultado


<div style={{ textAlign: "center" }}>
  <img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/gif.gif" style={{ width: "500px", height: "auto" }} />
</div>

Este es un ejemplo simple del modelo de IA ejecutado en Watcher. ¡Esperamos ver sus modelos brillando en acción!

## Soporte Técnico y Comunidad

Gracias por elegir nuestros productos. Estamos aquí para apoyarte y brindarte múltiples canales de comunicación según tus necesidades. 🚀


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
