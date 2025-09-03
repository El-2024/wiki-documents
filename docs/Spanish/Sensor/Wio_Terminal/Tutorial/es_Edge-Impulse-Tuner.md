---
description:  Edge Impulse Tuner
title:  Edge Impulse Tuner
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Edge-Impulse-Tuner
last_update:
  date: 07/27/2025
  author: Guillermo
---

# EON Tuner - Función Optimizada en Edge Impulse

## **Introducción**

Edge Impulse presentó una función optimizada que puede optimizar modelos de Machine Learning embebidos y el uso de memoria en dispositivos. Al ajustar los parámetros, ayuda a personas que no están familiarizadas con algoritmos de Machine Learning a seleccionar rápidamente el mejor modelo para su aplicación. Mientras tanto, permite que los dispositivos usen menos memoria y menos rendimiento, lo que significa que ayuda a desplegar modelos TinyML en ciertos equipos dentro de las restricciones.

El EON Tuner primero analiza tus datos de entrada, posibles bloques de procesamiento de señal y arquitecturas de redes neuronales. Luego te da una visión general de posibles arquitecturas de modelos que se ajustan a los requerimientos de latencia y memoria del dispositivo elegido. Puedes escoger cualquiera de ellas.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png" /></div>

## **La Posición del EON Tuner**

![](https://files.seeedstudio.com/wiki/EON-Tuner/weizhituner.png)

Como puedes ver, la posición del EON Tuner está al lado izquierdo de la página del proyecto [Edge Impulse](https://www.edgeimpulse.com/) y justo debajo de la clasificación. Cuando termines tus aplicaciones, puedes seleccionar fácilmente el Tuner para mejorar tus proyectos.

## **La Mejora del EON Tuner**

Este es un ejemplo que muestra la diferencia entre usar el EON Tuner y no usarlo.

![](https://files.seeedstudio.com/wiki/EON-Tuner/duibi.png)

## **Primeros Pasos**

Aquí vamos a proporcionar un proyecto de clasificación de audio y mostrar el uso del EON Tuner. Si te interesa [Usar LoRa para transmitir datos basado en Wio Terminal y Edge Impulse](https://wiki.seeedstudio.com/AIoTs_GPS_state_tester/), siempre puedes hacer clic y ver el proyecto ejemplo.

### **Hardware**

**Hardware Requerido**

En esta demo necesitarás los dispositivos listados a continuación:

- [WioTerminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Chasis para Wio Terminal - Batería (Opcional)](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)

**Conexión de Hardware**

Se conecta a una computadora mediante el cable Type-C.

![](https://files.seeedstudio.com/wiki/EON-Tuner/connecttuner.png)

### **Software**

**Software Requerido**

- [Arduino IDE](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)

### Machine Learning con Wio Terminal

Aquí mostraremos cómo usar el Wio Terminal para entrenar un modelo de Machine Learning y usarlo. El proyecto está basado en la plataforma Arduino, lo que significa que se requiere Arduino IDE y varias librerías de Arduino. Si es la primera vez que usas el Wio Terminal, recomendamos la guía rápida para [Comenzar con Wio Terminal](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/).

#### Inicio del Entrenamiento en Edge Impulse

Primero, necesitas tener tu propia cuenta en Edge Impulse y luego crear un proyecto.

- **Paso 1**. Abre la [página de Edge Impulse](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1) y registra una cuenta.

![](https://files.seeedstudio.com/wiki/Alots/Alots1.png)

- **Paso 2**. Crea un nuevo proyecto.

![](https://files.seeedstudio.com/wiki/Alots/Alots2.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots3.png)

#### Conexión del sitio web con Wio Terminal

- **Paso 3**. Descarga el firmware [wio-terminal-ei-1.4.0.uf2](https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2) para prepararte para la conexión.

Como indican las guías de [Comenzar con Wio Terminal](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/):

Haz doble clic en el botón inferior izquierdo del Wio Terminal (ya conectado a tu PC), verás que aparece un driver (como "Arduino (F:)" abajo) en la computadora. Luego arrastra el firmware [wio-terminal-ei-1.4.0.uf2](https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2) hacia ese driver. Cuando el driver desaparezca, significa que el firmware se ha programado. Ahora puedes ir al sitio web para conectar el Wio Terminal.

![](https://files.seeedstudio.com/wiki/Alots/Alots5.png)

- **Paso 4**. Una vez configurado el firmware, haz clic en "connect using WebUSB" para conectar el Wio Terminal al sitio web.

![](https://files.seeedstudio.com/wiki/Alots/Alots4.png)

Cuando aparezcan "Device", "Label" y "Sensor" como abajo, significa que la conexión está hecha y se puede activar la adquisición de datos.

![](https://files.seeedstudio.com/wiki/Alots/Alots6.png)

#### Adquisición de Datos

Ahora puedes recolectar datos en Edge Impulse.

- **Paso 5**. Ingresa "Label", "Sample length (ms.)" y haz clic en "Start sampling"

  - "Label" significa las categorías que deseas clasificar.
  - "Sample length" es el tiempo durante la muestra.

El proyecto de ejemplo que hacemos aquí es clasificación de audio, así que usaremos el micrófono integrado.

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji.png)

Se recomienda muestrear los datos más de 10 veces. Debido a que la grabación usa SPI Flash que opera borrando, el tiempo que toma suele ser mayor que el configurado (en este proyecto toma alrededor de 7 segundos y el tiempo configurado es de '3 segundos').

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji2.png)

#### Generación del Modelo de Machine Learning

Una vez que los datos han sido recolectados, puedes usarlos para entrenar tu modelo de ML.

- **Paso 6**. Después de muestrear los datos, haz clic en "create impulse" para procesar los datos.

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji3.png)

Los bloques de procesamiento y aprendizaje seleccionados aquí son Audio(MFE) y Neural Network (Keras). Puedes encontrarlos añadiendo un bloque de procesamiento y un bloque de aprendizaje. Luego, haz clic en "Save Impulse" y continúa.

![](https://files.seeedstudio.com/wiki/EON-Tuner/datashouji4.png)

- **Paso 7**. Ve a la página "Spectral features", y luego abajo haz clic en "Save parameters", lo que te llevará automáticamente a la sección "Generate feature". Los datos pueden verse así:

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi.png)

Aquí está la sección "Generate feature", que ayuda a traducir tus datos a las características necesarias en Machine Learning.

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi2.png)

Haz clic en "Generate feature" y el resultado debería aparecer a la derecha:

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi3.png)

- **Paso 8**. Ve a la página "NN Classifier" para usar tus características en el entrenamiento del modelo de Machine Learning. Al final de la página, haz clic en "Start training".

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi4.png)

La salida del entrenamiento aparece a la derecha de la página. Cuando veas la salida, significa que el modelo ha sido generado.

![](https://files.seeedstudio.com/wiki/Alots/Alots17.png)

Como puedes ver aquí, la salida no es la esperada:

![](https://files.seeedstudio.com/wiki/EON-Tuner/inputfail.png)

Es opcional volver a recolectar los datos, pero otro método que podemos usar aquí es el **"EON Tuner"**.

#### Uso del EON Tuner para Optimizar el Modelo de ML

Ahora podemos usar el EON Tuner para optimizar nuestro modelo de Machine Learning embebido.

- **Paso 9**. Selecciona "EON Tuner" a la derecha de la página y haz clic en "Start EON Tuner".

![](https://files.seeedstudio.com/wiki/EON-Tuner/button.png)

Hay muchos modelos generados, los primeros pueden no ser adecuados:

![](https://files.seeedstudio.com/wiki/EON-Tuner/outputfail.png)

Pero espera unos segundos, los modelos se entrenan cada vez mejor y están listos para ser desplegados:

![](https://files.seeedstudio.com/wiki/EON-Tuner/datakaishi5.png)

Haz clic en "Select" y el sitio te preguntará si deseas establecer este modelo como tu modelo principal, luego haz clic en "Yes":

![](https://files.seeedstudio.com/wiki/EON-Tuner/dataupdate.png)

#### Despliegue del Modelo de Machine Learning

Ahora puedes desplegar tu nuevo modelo de Machine Learning en tu Wio Terminal.

- **Paso 10**. Selecciona y haz clic en la columna "Deployment" a la izquierda.

![](https://files.seeedstudio.com/wiki/Alots/Alots18.png)

Luego elige "Arduino Library", y abajo selecciona "build" para crear la librería que necesitas en Arduino. Automáticamente se descargará un archivo zip que incluye la librería de terceros.

![](https://files.seeedstudio.com/wiki/Alots/Alots19.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots20.png)

El nombre de la librería deseada está relacionado con el nombre del proyecto, lo que significa que el nombre que hayas puesto al proyecto en el **Paso 2** aparecerá aquí. Esto te ayuda a encontrar el archivo correcto que necesitas.

![](https://files.seeedstudio.com/wiki/Alots/Alots21.png)

- **Paso 10**. Puedes descargar el código [aquí](https://files.seeedstudio.com/wiki/EON-Tuner/EON_tuner_HelloWorld.ino) y abrirlo con Arduino IDE. Cambia la librería de terceros por la tuya como se indicó arriba y luego ejecuta el código.

![](https://files.seeedstudio.com/wiki/EON-Tuner/librarymingzi.png)

Finalmente, haz clic en "Serial Monitor" en Arduino IDE y pronuncia las palabras que configuraste en "Adquisición de Datos". El monitor te mostrará los resultados y "cuánta confianza tiene el Wio Terminal" sobre el resultado, es decir, la precisión.

![](https://files.seeedstudio.com/wiki/EON-Tuner/jieguo.png)

Si te interesa ver qué diferencia hace el tuner, puedes saltarte el **Paso 9** y luego seguir los mismos pasos para comprobarlo.
