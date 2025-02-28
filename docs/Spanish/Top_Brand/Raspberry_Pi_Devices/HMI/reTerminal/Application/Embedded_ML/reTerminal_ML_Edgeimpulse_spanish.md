---
description: Detección de objetos con Edge Impulse y reTerminal
title: Detección de objetos con Edge Impulse y reTerminal
keywords:
  - Edge
  - Aplicación reTerminal
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_ML_Edgeimpulse_spanish
last_update:
  date: 02/18/2025
  author: Erick González
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ML/edgeimpulse.gif" alt="pir" width="800" height="auto"/></p>

## Introducción

En el panorama digital actual, la integración de IA en el borde (edge AI) y las tecnologías IoT (Internet de las Cosas) ha abierto posibilidades emocionantes para desarrolladores y entusiastas. Una de las plataformas más poderosas que simplifica la creación de modelos de aprendizaje automático para dispositivos de borde es Edge Impulse. En esta guía paso a paso, te guiaremos a través del proceso de instalación de Edge Impulse en tu dispositivo reTerminal y la creación de una solución local de detección de objetos.

Lo que aprenderás:

- Instalación de dependencias esenciales para tu reTerminal.
- Configuración de Node.js y npm para tu proyecto.
- Implementación de la herramienta CLI de Edge Impulse para Linux.
- Creación y entrenamiento de un modelo de detección de objetos dentro de Edge Impulse.
- Implementación y prueba de tu modelo localmente en el dispositivo reTerminal.

Al final de esta guía, tendrás una comprensión práctica de cómo aprovechar el poder de Edge Impulse para la detección de objetos en dispositivos de borde como el reTerminal. ¡Así que vamos a sumergirnos y explorar el emocionante mundo de la detección de objetos impulsada por IA local!

### Preparación del hardware
<div class="table-center">
  <table align="center">
    <tr>
        <th>reTerminal</th>
        <th>Módulo de cámara V1</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ML/reterminal.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ML/camera.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-p-1659.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Edge Impulse

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ML/Edge_Impulse.jpg" alt="pir" width="200" height="auto"/></p>

Edge Impulse es una plataforma versátil dedicada a simplificar el desarrollo de modelos de aprendizaje automático diseñados para dispositivos de borde, como microcontroladores y sistemas embebidos. Esta solución integral facilita todo el flujo de trabajo del aprendizaje automático, que abarca la recopilación de datos, preprocesamiento, entrenamiento de modelos, implementación y monitoreo, todo dentro de un entorno unificado. Una de sus características más destacadas es su interfaz fácil de usar, que permite a los usuarios recopilar y etiquetar datos sin esfuerzo, mientras ofrece una biblioteca de bloques de procesamiento de señales y algoritmos de aprendizaje automático preconstruidos para el desarrollo eficiente de modelos. Edge Impulse está diseñado para un rendimiento de inferencia óptimo en dispositivos de borde con recursos limitados, asegurando procesamiento en tiempo real sin depender de la conectividad continua a Internet. Además, se integra de manera fluida con una amplia variedad de plataformas de hardware populares, lo que permite a los desarrolladores implementar modelos con facilidad.

### Preparación del software

Te recomendamos instalar la última versión de Raspberry Pi 64 bit OS desde su sitio web oficial. Si prefieres instalar un nuevo Raspbian OS, sigue los pasos descritos en esta [guía](https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc).

Luego, necesitamos configurar la cámara de Raspberry Pi, por favor sigue los pasos descritos en esta [guía](https://wiki.seeedstudio.com/reTerminal-piCam/)

Necesitarás una cuenta de Edge Impulse para comenzar, así que por favor crea una visitando este [enlace](https://edgeimpulse.com/). Por defecto se creará un proyecto inicial.

## Instalar dependencias en tu dispositivo reTerminal

**Para configurar este dispositivo en Edge Impulse, ejecuta los siguientes comandos uno por uno**

```sh
sudo apt update
curl -sL https://deb.nodesource.com/setup_12.x | sudo bash - 
sudo apt install -y gcc g++ make build-essential nodejs sox gstreamer1.0-tools gstreamer1.0-plugins-good gstreamer1.0-plugins-base gstreamer1.0-plugins-base-apps 
npm config set user root && sudo npm install edge-impulse-linux -g --unsafe-perm
```

## Conectando a Edge Impulse

Con todo el software configurado, conecta tu cámara o micrófono a tu reTerminal. Necesitarás proporcionar tu dirección de correo electrónico, contraseña vinculada a tu cuenta de Edge Impulse y un nombre de dispositivo.

```sh
edge-impulse-linux
```

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/connectingdevice.png" /></center>

## Verificando que tu dispositivo está conectado

¡Eso es todo! Tu dispositivo ahora está conectado a Edge Impulse. Para verificarlo, ve a tu proyecto de Edge Impulse y haz clic en Dispositivos. El dispositivo aparecerá aquí.

<center><img width={600} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/connectdevice.PNG" /></center>

## Detectando objetos

### Construcción de un conjunto de datos

Tienes la opción de recopilar datos directamente desde la cámara de Raspberry Pi conectada a través del reTerminal o cargar datos precoleccionados desde tu almacenamiento local.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/datacollection.png" /></center>

Al seleccionar 'Cámara' como el sensor y proporcionar un nombre de etiqueta, puedes iniciar el proceso de muestreo de datos.

### Etiquetado de datos

Todas tus imágenes recopiladas se colocarán en la "cola de etiquetado". Etiquetar tus objetos es tan fácil como arrastrar una caja alrededor del objeto y escribir una etiqueta. Luego haz clic en guardar etiqueta.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/labeling.PNG" /></center>

### Reequilibrando tu conjunto de datos

Para validar la efectividad de tu modelo, es esencial reservar una parte de tus datos, generalmente alrededor del 20%, como un 'conjunto de prueba'. Estos datos no deben ser utilizados durante el entrenamiento del modelo, sino solo para fines de validación. Puedes cambiar fácilmente entre tus conjuntos de entrenamiento y prueba usando los dos botones ubicados sobre el widget 'Datos recopilados'. Si has recopilado datos en tu placa de desarrollo y actualmente no hay datos en el conjunto de prueba, puedes resolver esto navegando a **Dashboard > Perform train/test split.**

<center><img width={800} height="auto" src="https://files.seeedstudio.com/wiki/ReTerminal/ML/split.PNG" /></center>

### Crear un impulso

En este tutorial, hemos estado trabajando con imágenes de 96x96, pero es importante señalar que Edge Impulse puede manejar otras resoluciones siempre que las imágenes sean cuadradas. Para configurar esto, sigue estos pasos: Primero, ve a **Crear Impulso**, luego configura el **ancho de la imagen** y **alto de la imagen** a las dimensiones deseadas (por ejemplo, 96). Luego, elige **Ajustar al eje más corto** como el **modo de redimensionado**, y agrega los bloques **Imágenes** y **Detección de objetos (Imágenes)**. Finalmente, haz clic en **Guardar Impulso** para aplicar estos ajustes.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/impulse.PNG" /></center>

### Generación de características

En este paso, realizarás las siguientes tareas:

- Redimensionar todos los datos.
- Aplicar el bloque de procesamiento a todo el conjunto de datos.
- Generar una visualización 3D de tu conjunto de datos completo.
- Haz clic en 'Generar características' para iniciar el proceso.

Luego, se cargará el 'Explorador de características'. Este explorador representa un gráfico de todos los datos en tu conjunto de datos. Dado que las imágenes tienen muchas dimensiones, utilizamos una técnica llamada 'reducción de dimensionalidad' en el conjunto de datos antes de visualizarlo.

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/generatf.PNG" /></center>

### Entrenamiento

Dentro de la pestaña '**Detección de Objetos**', tienes la opción de entrenar tu conjunto de datos. Para hacer esto, necesitarás configurar parámetros específicos y seleccionar el modelo que deseas usar. En este tutorial, optamos por el modelo FOMO, que, según su sitio web, introduce un enfoque revolucionario para ejecutar modelos de detección de objetos en dispositivos con recursos limitados. FOMO es un algoritmo innovador que aporta capacidades de detección de objetos en tiempo real, seguimiento y conteo a microcontroladores, marcando un hito significativo. Cabe destacar que FOMO tiene una ventaja de velocidad notable, superando a MobileNet SSD por un factor de 30, y puede operar con menos de 200K de RAM.

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/training.PNG" /></center>

Después de completar el proceso de entrenamiento, recibirás una matriz de confusión que se verá como la siguiente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/confutionmat.PNG" height="auto"/></center>

### Validando tu modelo

Ahora que el modelo está entrenado, pongámoslo a prueba utilizando algunos datos de prueba. Durante la recopilación de datos, dividimos el conjunto de datos en subconjuntos de entrenamiento y prueba. El modelo fue entrenado exclusivamente con los datos de entrenamiento. Por lo tanto, podemos emplear el conjunto de datos de prueba para evaluar cuán efectivamente el modelo se desempeñará en escenarios del mundo real. Este paso de validación es crucial para garantizar que el modelo no haya sobreajustado los datos de entrenamiento, un problema común. Para validar nuestro modelo, navega a **Model Testing** y selecciona **Classify all**

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/ML/test.png" height="auto"/></center>

### Ejecutando el modelo en tu dispositivo reTerminal

En una nueva terminal en blanco ejecuta el siguiente comando:

```sh
edge-impulse-linux-runner
```

Esta acción hará que el modelo se construya y descargue. Luego se ejecutará en tu reTerminal. Si estás en la misma red, puedes acceder a una vista en vivo de la cámara y ver los resultados de clasificación directamente desde tu reTerminal. Ve a la URL que sugiere el dispositivo.

```sh
¿Quieres ver una transmisión de la cámara y clasificación en vivo en tu navegador? Ve a http://192.168.8.117:4912
```

## Conclusión

En conclusión, la integración perfecta de reTerminal y Edge Impulse capacita a los desarrolladores para desbloquear todo el potencial de la IA en el borde. reTerminal, con su hardware robusto y capacidades versátiles, sirve como una excelente plataforma para ejecutar soluciones de detección de objetos en tiempo real. Al combinarse con Edge Impulse, que simplifica la creación e implementación de modelos de aprendizaje automático en dispositivos con recursos limitados, las posibilidades se vuelven ilimitadas. Ya sea que trabajes en aplicaciones IoT, robótica o cualquier proyecto que requiera IA eficiente en el dispositivo, esta poderosa sinergia entre reTerminal y Edge Impulse abre un mundo de innovación en el borde de la tecnología.

# Soporte técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
