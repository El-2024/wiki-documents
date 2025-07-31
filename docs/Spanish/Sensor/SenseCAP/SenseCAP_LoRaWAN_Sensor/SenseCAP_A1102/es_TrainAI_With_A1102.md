---
description: Train_AI_With_A1102
title: Despliega Modelos de IA en SenseCAP A1102 Usando SenseCraft AI
keywords:
- Sensor Vision_AI_V2
- SenseCAP A1102
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.webp
slug: /es/train_ai_with_a1102
sidebar_position: 2
# sidebar_class_name: hidden
last_update:
  date: 07/23/2025
  author: Guillermo
---

# Despliegue de Modelos de IA en el SenseCAP A1102 Usando SenseCraft AI

El SenseCAP A1102 es un sensor avanzado que combina capacidades de IA en el borde con facilidad de implementación. Esta guía te llevará paso a paso por el proceso de despliegue de modelos de IA en el A1102 utilizando la app **SenseCraft AI**, incluyendo el emparejamiento, configuración y pruebas.

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.jpg" width="800" />
</div>

## **Primeros Pasos con SenseCAP A1102**

### ¿Qué es el SenseCAP A1102?

El SenseCAP A1102 es un sensor de cámara inteligente diseñado para aplicaciones de inteligencia artificial en el borde (Edge AI). Equipado con 8 GB de memoria, permite:

- Implementar modelos de IA personalizados.  
- Guardar automáticamente imágenes reconocidas.  
- Reconocimiento en tiempo real con alta precisión.  

### **Requisitos Previos**

Antes de comenzar, asegúrate de contar con:

- Dispositivo SenseCAP A1102.  
- La app **SenseCraft AI** instalada en tu teléfono inteligente.  
- Algún modelo de IA preentrenado para desplegar.  

## **Configuración del SenseCAP A1102**

### Encender la cámara Vision AI

:::tip
Si necesitas modificar parámetros de la cámara AI, sigue los pasos para encenderla.  
Si solo vas a cambiar configuraciones relacionadas con la transmisión LoRaWAN, puedes omitir esta sección.
:::

Conecta el puerto Type-C del A1102 a tu computadora siguiendo las instrucciones:

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/power_up_camera.png" width="700" />
</div>

Si está conectado correctamente, se encenderán dos indicadores LED:

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/check_indicators.png" width="400" />
</div>

### **Acceder a Configuración Avanzada**

En la app SenseCraft AI, selecciona "Usuario" en la barra inferior y haz clic en “Configuración Bluetooth del Dispositivo”.

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/step1.png" width="400" />
</div>

Desliza hacia abajo y selecciona “SenseCAP A1102”.

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/step2.png" width="400" />
</div>

Presiona el botón de encendido del A1102 durante **3 segundos** para activar el modo de emparejamiento.

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/11.png" width="400" />
</div>

Una vez emparejado, haz clic en **Configuración Avanzada**.

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/1.png" width="400" />
</div>

Vuelve a hacer clic en **Configuración Avanzada** para acceder a más opciones.

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/2.png" width="400" />
</div>

## **Despliegue de un Modelo de IA**

### Selección del Modelo

Desde el menú de configuración, selecciona el modelo que deseas desplegar. Puedes elegir entre modelos precargados o subir un modelo personalizado.

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/3.png" width="400" />
</div>

### Configuración de Parámetros del Modelo

Configura opciones como:

- **Nivel de Confianza**: Define el umbral de confianza para el reconocimiento (ej. 80%).  
- **Guardar Imágenes Reconocidas**: Habilita o deshabilita el almacenamiento automático de imágenes en la tarjeta SD.

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/5.png" width="400" />
</div>

## **Pruebas y Ejecución del Modelo**

### Vista Previa de la Cámara

Una vez desplegado el modelo, revisa en la app las imágenes capturadas por la cámara para verificar el funcionamiento del modelo.

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/7.png" width="400" />
</div>

### Información del Dispositivo

En la pantalla principal de la app, revisa el estado del A1102, incluyendo la conectividad y el modelo cargado.

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/18.png" width="400" />
</div>

### Resultados del Reconocimiento

Visualiza los datos de inferencia y registros. Por ejemplo, puedes configurar un intervalo de reporte (cada 5 min) para registrar los objetos detectados.

### Resultados del Reconocimiento

Visualiza los datos de inferencia y registros. Por ejemplo, puedes configurar un intervalo de reporte (cada 5 min) para registrar los objetos detectados.

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/11.jpg" width="400" />
</div>

### Acceso a la Tarjeta SD

Ubica la ranura lateral del A1102 e inserta con cuidado un desarmador. Haz palanca suavemente para abrir el compartimento.

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/8.jpg" width="400" />
</div>

Ubica los cuatro tornillos y gíralos aplicando presión constante hasta que se aflojen.

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/9.jpg" width="400" />
</div>

Una vez suelta la tapa, accede a la ranura para extraer la tarjeta SD y leer los datos almacenados.

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/A1102_10.jpg" width="400" />
</div>

### Guardado Automático de Imágenes

Gracias a sus 8 GB de memoria interna, el A1102 puede guardar automáticamente imágenes en la tarjeta SD al reconocer un objeto. Posteriormente, puedes extraer la tarjeta para analizar o reportar la información capturada.

:::tip
El A1102 guarda automáticamente imágenes en la tarjeta SD al detectar un objetivo. Luego puedes acceder a esta información extrayendo la tarjeta del dispositivo.
:::

## **Soporte Técnico y Comunidad**

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurar que tu experiencia sea lo más fluida posible. Contamos con diversos canales de comunicación para adaptarnos a tus preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>