---
description: Train Water Meter Digits Recognition Model with SenseCAP A1101
title: Train Water Meter Digits Recognition Model with SenseCAP A1101
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Train-Water-Meter-Digits-Recognition-Model-with-SenseCAP-A1101
date: 07/22/2025
author: Guillermo
---

# Entrenar Modelo de Reconocimiento de Dígitos para Medidor de Agua con SenseCAP A1101

## Descripción general

En este tutorial aprenderás cómo entrenar tu propio modelo para un medidor específico y luego desplegarlo fácilmente en el SenseCAP A1101. ¡Comencemos!

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/0.jpg"/></div>

## Preparación de hardware

- [SenseCAP A1101 - Sensor AI Vision LoRaWAN](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html)  
- Cable USB tipo C  
- Computadora con Windows, Linux o Mac con acceso a internet

## Preparación de software

Usaremos las siguientes tecnologías:

- [Roboflow](https://roboflow.com) — para la anotación de imágenes  
- [SenseCraft Model Assistant](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process) — para el entrenamiento  
- [TensorFlow Lite](https://www.tensorflow.org/lite) — para la inferencia  

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/11.png"/></div>



Ahora configuraremos el software. La configuración para Windows, Linux y Mac Intel es la misma, mientras que para Mac M1/M2 es diferente.

:::tip  
**¿Qué es SenseCraft Model Assistant?**  
SenseCraft Model Assistant de Seeed Studio es un proyecto open-source enfocado en IA embebida. Hemos optimizado algoritmos de OpenMMLab para escenarios reales, haciendo la implementación más amigable y logrando inferencias más rápidas y precisas en dispositivos embebidos.  
:::

### Windows, Linux, Mac Intel

- **Paso 1.** Asegúrate de tener Python instalado. Si no, descárgalo e instálalo desde [aquí](https://www.python.org/downloads/).

- **Paso 2.** Instala la siguiente dependencia:

```sh
pip3 install libusb1
```

### M1/ M2 Mac

- **Paso 1.** Instala Homebrew

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- **Paso 2.** Instala conda

```sh
brew install conda
```

- **Paso 3.** Descarga libusb

```sh
wget https://conda.anaconda.org/conda-forge/osx-arm64/libusb-1.0.26-h1c322ee_100.tar.bz2
```

- **Paso 4.** Instala libusb

```sh
conda install libusb-1.0.26-h1c322ee_100.tar.bz2
```

:::caution
Asegúrate que la versión de tu BootLoader sea mayor a 2.0.0 antes de cambiar el firmware para los pasos siguientes. Si no estás seguro, verifica la versión siguiendo los pasos en [esta sección](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101/#check-bootloader-version), Si la versión es menor a 2.0.0, actualiza el BootLoader siguiendo [esta sección](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101/#update-bootloader)
:::

## 1. Recolectar Datos de Imágenes

- **Paso 1.** Conecta el SenseCAP A1101 a la PC usando un cable USB tipo C

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **Paso 2.** Haz doble clic en el botón de arranque para entrar en **modo boot**

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

Después de esto verás una nueva unidad de almacenamiento en el explorador de archivos llamada **SENSECAP**

<div align="center"><img width="280" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **Paso 3.** Arrastra y suelta [este archivo .uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_capture_firmware_v01-00.uf2) en la unidad **SENSECAP**

Tan pronto termine de copiarse el archivo uf2, la unidad desaparecerá. Esto significa que el archivo se subió exitosamente al módulo.

- **Paso 4.** Copia y pega [este script en Python](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/tools/capture_images_script.py) dentro de un archivo nuevo llamado **capture_images_script.py** en tu PC

- **Paso 5.** Ejecuta el script de Python para comenzar a capturar imágenes

```sh
python3 capture_images_script.py
```

Por defecto, capturará una imagen cada 300 ms. Si quieres cambiar este intervalo, puedes ejecutar el script con el siguiente formato:

```sh
python3 capture_images_script.py --interval <time_in_ms>
```

Por ejemplo, para capturar una imagen cada segundo:

```sh
python3 capture_images_script.py --interval 1000
```

Después de ejecutar el script, el SenseCAP A1101 empezará a capturar imágenes continuamente desde las cámaras integradas y las guardará todas dentro de una carpeta llamada **save_img**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/1.png"/></div>

También se abrirá una ventana de vista previa mientras está grabando.

Cuando hayas capturado suficientes imágenes, haz clic en la ventana del terminal y presiona la siguiente combinación de teclas para detener el proceso de captura:

- Windows: Ctrl + Break  
- Linux: Ctrl + Shift + \  
- Mac: CMD + Shift + \

### Cambiar el firmware del dispositivo después de la recolección de imágenes

Después de terminar de grabar las imágenes para el conjunto de datos, necesitas asegurarte de cambiar el firmware dentro del SenseCAP A1101 de vuelta al original, para que puedas cargar nuevamente modelos de detección de objetos para inferencia. Vamos a repasar los pasos ahora.

- **Paso 1.** Entra en **modo boot** en el SenseCAP A1101 como se explicó antes.

- **Paso 2.** Arrastra y suelta [este archivo .uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_v01-30.uf2) en la unidad **SENSECAP** según tu dispositivo.

Tan pronto termine de copiarse el archivo uf2, la unidad desaparecerá. Esto significa que el archivo se ha subido correctamente al módulo.

## 2. Generar el Dataset con Roboflow

[Roboflow](https://roboflow.com) es una herramienta de anotación en línea. Aquí podemos importar directamente el video que hemos grabado y Roboflow lo exportará en una serie de imágenes. Esta herramienta es muy conveniente porque nos ayuda a distribuir el dataset en "entrenamiento, validación y prueba". Además, permite aplicar procesamiento adicional a las imágenes después de etiquetarlas. Asimismo, puede exportar fácilmente el dataset etiquetado en formato **COCO**, que es justo lo que necesitamos.

- **Paso 1.** Haz clic [aquí](https://app.roboflow.com/login) para crear una cuenta en Roboflow.

- **Paso 2.** Haz clic en **Create New Project** para iniciar el proyecto.

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/YOLOV5/2.jpg"/></div>

- **Paso 3.** Completa el **Nombre del Proyecto**, deja la **Licencia (CC BY 4.0)** y el **Tipo de Proyecto (Object Detection (Bounding Box))** por defecto. En la columna **What will your model predict?**, escribe un nombre para el grupo de anotaciones.

<div align="center"><img width="350" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/2.png"/></div>

- **Paso 4.** Arrastra y suelta las imágenes que capturaste usando SenseCAP A1101.

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/3.png"/></div>

- **Paso 5.** Cuando las imágenes se procesen, haz clic en **Finish Uploading**. Espera pacientemente hasta que terminen de subirse.

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/4.jpg"/></div>

- **Paso 6.** Tras subir las imágenes, haz clic en **Assign Images**.

<div align="center"><img width="300" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/5.jpg"/></div>

- **Paso 7.** Selecciona una imagen, dibuja un recuadro rectangular alrededor de los dígitos, elige la etiqueta como **digits** y presiona **ENTER**.

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4.png"/></div>

- **Paso 8.** Repite el mismo proceso para las imágenes restantes.

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/5.png"/></div>

- **Paso 9.** Continúa anotando todas las imágenes del dataset.

- **Paso 10.** Una vez terminadas las anotaciones, haz clic en **Add images to Dataset**.

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/YOLOV5/25.jpg"/></div>

- **Paso 11.** Ahora dividiremos las imágenes entre "Train, Valid y Test". Si hay muchos datos, la división puede ser 80/20; si son pocos, puede ser 85/15. Recuerda que el conjunto de entrenamiento ("Train") no debe ser menor al 80%.

<div align="center"><img width="330" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/12.png"/></div>

- **Paso 12.** Haz clic en **Generate New Version**.

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/YOLOV5/27.jpg"/></div>

- **Paso 13.** Aquí puedes añadir **Preprocessing** y **Augmentation** si quieres. Nosotros cambiaremos la opción de **Resize** a **192x192**.

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/6.png"/></div>

Cambiamos el tamaño a 192x192 porque lo usaremos para entrenar y así el proceso será más rápido. De otro modo, las imágenes tendrían que convertirse a 192x192 durante el entrenamiento, lo que consume más recursos y ralentiza el proceso.

- **Paso 14.** Continúa con las demás opciones por defecto y haz clic en **Generate**.

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/7.png"/></div>

- **Paso 15.** Haz clic en **Export**, selecciona **Format** como **COCO**, activa **show download code** y haz clic en **Continue**.

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/8.png"/></div>

Esto generará un fragmento de código que usaremos más adelante en el entrenamiento con Google Colab. Así que deja esta ventana abierta en segundo plano.

<div align="center"><img width="600" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/55.png"/></div>

### Entrenar usando SenseCraft Model Assistant en Google Colab

Después de elegir un dataset público, necesitamos entrenarlo. Aquí usamos un entorno Google Colaboratory para entrenar en la nube. Además, usamos la API de Roboflow dentro de Colab para descargar fácilmente el dataset.

Haz clic [aquí](https://colab.research.google.com/github/Seeed-Studio/EdgeLab/blob/main/notebooks/Google-Colab-YOLOv5-A1101-Example.ipynb) para abrir un espacio de trabajo de Google Colab ya preparado, sigue los pasos y ejecuta las celdas de código una por una.

**Nota:** En Google Colab, en la celda de código bajo el **Paso 4**, puedes copiar directamente el fragmento de código de Roboflow como se indicó arriba.

El tutorial cubre:

- Configuración del entorno para entrenamiento  
- Descarga del dataset  
- Ejecución del entrenamiento  
- Descarga del modelo entrenado  

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/9.png"/></div>

## 3. Desplegar el modelo entrenado y realizar inferencia

Ahora moveremos el archivo **model-1.uf2** que obtuvimos al final del entrenamiento al SenseCAP A1101.

- **Paso 1.** Instala la última versión de [Google Chrome](https://www.google.com/chrome) o [Microsoft Edge](https://www.microsoft.com/en-us/edge?r=1) y ábrelo.

- **Paso 2.** Conecta el SenseCAP A1101 a tu PC mediante un cable USB Tipo-C.

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **Paso 3.** Haz doble clic en el botón de arranque (boot) del SenseCAP A1101 para entrar en modo de almacenamiento masivo.

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

Después verás una nueva unidad de almacenamiento en el explorador de archivos llamada **SENSECAP**.

<div align="center"><img width="280" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **Paso 4.** Arrastra y suelta el archivo **model-1.uf2** en la unidad **SENSECAP**.

Tan pronto termine la copia del archivo uf2, la unidad desaparecerá. Esto significa que el archivo se ha cargado correctamente en el módulo.

**Nota:** Si tienes 4 archivos de modelo listos, puedes arrastrar y soltar cada uno de ellos uno por uno. Suelta el primer modelo, espera a que termine de copiar, vuelve a entrar en modo boot, suelta el segundo modelo, y así sucesivamente. Si solo cargas un modelo (con índice 1) en el SenseCAP A1101, ese modelo será el que se cargue.

- **Paso 5.** [Haz clic aquí](https://vision-ai-demo.seeed.cn/) para abrir una ventana de vista previa del flujo de la cámara.

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/31.png"/></div>

- **Paso 6.** Haz clic en el botón **Connect**. Aparecerá una ventana emergente en el navegador. Selecciona **SenseCAP Vision AI - Paired** y haz clic en **Connect**.

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/32.png"/></div>

- **Paso 7.** ¡Visualiza los resultados de inferencia en tiempo real usando la ventana de vista previa!

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/10.png"/></div>

Como puedes ver arriba, los números son detectados con cajas delimitadoras alrededor.

## 4. Realizar inferencia con SenseCAP A1101 usando SenseCAP Mate

Además de hacer inferencia en el navegador, también podemos usar SenseCAP Mate para implementar la inferencia del modelo, lo cual haremos paso a paso.

- **Paso 1.** Primero, necesitamos borrar el firmware del A1101, lo cual se logra usando el archivo erase_model.uf2. Luego, actualiza el firmware del A1101 a la última versión y carga el modelo de reconocimiento de dígitos del medidor de agua en el A1101.

  *Firmware*: [erase_model.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/erase_model.uf2), [SenseCAP-A1101_v02-00.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/sensecap_ai_v02-00.uf2)

  *Modelos*: [water_meter.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/meter_water_pre_6.uf2), [pfld_meter.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/pfld_meter_pre_5.uf2), [digital_meter.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/meter_seg7_pre_6.uf2)

  ***Nota:*** water_meter y digital_meter identifican el nombre del modelo como user-define6 en el escritorio y muestran digital_meter en la aplicación. El modelo pfld_meter es identificado como user-define5 y aparece como Point_meter en la aplicación. Los usuarios deben subir modelos según sus necesidades reales durante el proceso de despliegue.

- **Paso 2.** [Haz clic aquí](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/dashboard/workplace) para abrir una ventana de vista previa del flujo de cámara.

- **Paso 3.** Haz clic en el botón **Connect**. Aparecerá una ventana emergente en el navegador. Selecciona **SenseCAP A1101 - Paired** y haz clic en Connect.

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step3.jpg"/></div>

- **Paso 4 (Opcional).** Selecciona Digital Meter en Modelo y Digital Meter en Algoritmo, haz clic en Guardar y luego en Invocar. Ahora puedes ver resultados de inferencia en tiempo real usando la ventana de vista previa.

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step4.jpg"/></div>

- **Paso 5.** Abre SenseCAP Mate y empareja con tu A1101, selecciona el mismo Modelo y Algoritmo que arriba. Luego haz clic en General y en Detectar abajo.

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step_all.jpg"/></div>

- **Paso 6.** Como ves abajo, la vista previa AI muestra los resultados del reconocimiento del medidor digital.

<div align="center"><img width="400" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step5.jpg"/></div>

Después de completar estos pasos, intentaremos agregar nuestro propio A1101 al dispositivo. Con los siguientes 4 pasos, podremos ver los datos de identificación del dispositivo en cualquier momento y lugar a través de una plataforma en la nube como SenseCAP Mate.

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4stepfinal.png"/></div>

## Recursos

- **[Página Web]** [Documentación SenseCraft Model Assistant](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/dashboard/workplace)

- **[Página Web]** [Ultralytics HUB](https://ultralytics.com/hub)

- **[Página Web]** [Documentación Roboflow](https://docs.roboflow.com)

- **[Página Web]** [Documentación TensorFlow Lite](https://www.tensorflow.org/lite/guide)

- **[PDF]** [Especificaciones SenseCAP A1101 LoRaWAN Vision AI Sensor](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf)

- **[PDF]** [Guía de Usuario SenseCAP A1101 LoRaWAN Vision AI Sensor](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_LoRaWAN_Vision_AI_Sensor_User_Guide_V1.0.2.pdf)

- **[PDF]** [Catálogo SenseCAP S210X LoRaWAN Sensor](https://files.seeedstudio.com/products/114992867/SenseCAP%20S210X%20LoRaWAN%20Sensor%20Catalogue.pdf)

- **[PDF]** [FAQ para SenseCAP A1101 LoRaWAN Vision AI Sensor](https://files.seeedstudio.com/wiki/SenseCAP-A1101/FAQ_for_SenseCAP_A1101_LoRaWAN_AI_Vision_Sensor_v1.0.0.pdf)

## Soporte Técnico y Discusión de Producto

 <br />

¡Gracias por elegir nuestros productos! Estamos disponibles para brindarte soporte y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para diferentes necesidades y preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
