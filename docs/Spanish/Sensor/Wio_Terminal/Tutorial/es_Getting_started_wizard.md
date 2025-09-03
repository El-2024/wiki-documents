---
description:  Getting started wizard
title:  Primeros Pasos con Wizard
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Getting_started_wizard
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Construye un Modelo de Machine Learning en 5 Minutos y Desplégalo en Wio Terminal con Edge Impulse

## **Introducción**

Edge Impulse lanzó un nuevo **Getting Started Wizard** pensado para principiantes en Machine Learning. Este asistente usa un modelo de reconocimiento de palabras clave con *few-shot learning*, que te permite grabar una frase corta y mejora automáticamente tu dataset para entregarte un modelo open-source en menos de 5 minutos. Este modelo puede ser usado en el Wio Terminal. En esta guía te mostraremos cómo usar el asistente y luego desplegar el modelo en el Wio Terminal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png"/></div>

## **Primeros pasos con Edge Impulse**

### **Hardware**

**Componentes requeridos:**

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)  
- PC  
- Micrófono conectado a la PC  
- Cable USB tipo C  

**Conexión:**

Conecta el Wio Terminal al PC mediante el cable USB tipo C.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI02a.png"/></div>

### **Software**

- [Arduino IDE](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)

El proyecto está basado en Arduino, por lo que necesitarás el IDE de Arduino y sus librerías.  
Si es tu primera vez usando Wio Terminal, te recomendamos esta guía rápida: [Comenzar con Wio Terminal](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/).

## Entrenamiento con Edge Impulse

Primero crea tu cuenta en Edge Impulse y crea un nuevo proyecto.

- **Paso 1:** Ingresa a [Edge Impulse](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1) y regístrate.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Alots/Alots1.png"/></div>

- **Paso 2:** Crea un nuevo proyecto.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Alots/Alots2.png"/></div>

- **Paso 3:** Haz clic en el botón **"Launch getting started wizard"** al pie del Dashboard para iniciar el asistente.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI02a.jpg"/></div>

- **Paso 4:** Sigue las instrucciones haciendo clic en el botón.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI03.jpg"/></div>

- **Paso 5:** Ingresa una palabra o frase corta.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI04a.jpg"/></div>

- **Paso 6:** Graba la palabra/frase con el micrófono del PC durante 38 segundos.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI06.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI07.jpg"/></div>

Asegúrate de grabar con claridad y recolectar suficientes datos; de no ser así, te pedirá grabar más.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI08.jpg"/></div>

Una vez recolectados los datos, aparecerá un bloque indicando progreso.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI09.jpg"/></div>

- **Paso 7:** Haz clic en "Next" para que Edge Impulse mezcle tus datos con otras palabras y ruido de fondo.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI10.jpg"/></div>

El modelo aprenderá a distinguir entre tus palabras y otros sonidos.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI12.jpg"/></div>

- **Paso 8:** Sigue las instrucciones para crear el *impulse*.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI13.jpg"/></div>

Este *impulse* extrae las características necesarias para el aprendizaje automático.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI14.jpg"/></div>

Este proceso es automático; haz clic en "Next" cuando termine.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI15.jpg"/></div>

- **Paso 9:** Sigue las instrucciones para entrenar la red neuronal.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI16.jpg"/></div>

Continúa hasta que el modelo termine de entrenarse.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI17.jpg"/></div>

Puedes probar tu modelo usando nuevamente el micrófono.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI18.jpg"/></div>

¡Felicidades, tu modelo de clasificación de palabras está listo!

## Desplegando el Modelo de Machine Learning en Wio Terminal

- **Paso 10:** Ve a la sección **"Deployment"** en el menú lateral izquierdo.  
Selecciona **"Arduino Library"** y presiona **"Build"** para generar la librería Arduino. Esto descargará un archivo zip que contiene la librería necesaria.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Alots/Alots19.png"/></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI21.jpg"/></div>

El nombre de la librería corresponde al nombre que diste a tu proyecto en el paso 2, lo que te ayuda a identificar el archivo correcto.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI22.jpg"/></div>

- **Paso 11:** Descarga el código ejemplo de reconocimiento de audio [aquí](https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/example.ino) y ábrelo con Arduino IDE.  
Agrega la librería zip descargada para poder usarla en el proyecto.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI23.jpg"/></div>

Modifica el nombre de la librería y las palabras clave para que coincidan con las que entrenaste.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI24.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI25.jpg"/></div>

Finalmente, prueba diciendo las palabras y observa cómo el Wio Terminal las detecta y muestra.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Edge_Impulse_new_wizard/EI26.jpg"/></div>
