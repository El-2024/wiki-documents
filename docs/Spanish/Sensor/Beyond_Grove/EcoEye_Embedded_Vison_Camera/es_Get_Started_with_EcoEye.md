---
description: Get_Started_with_EcoEye–Embedded_Vision_Camera
title: EcoEye – Cámara de Visión Embebida Introducción
keywords:
- EcoEye–Embedded_Vision_Camera
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Get_Started_with_EcoEye_Embedded_Vision_Camera
last_update:
  date: 07/14/2025
  author: Guillermo
---


# EcoEye – Cámara de Visión Embebida Introducción

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/1-101991121-EcoEye-%E2%80%93-Embedded-Vision-Camera-first.jpg"/></div>

EcoEye es una cámara con capacidades de visión por máquina integradas, alojada en una carcasa portátil e impermeable diseñada para despliegues remotos. Basada en la cámara openMV H7 Plus, es fácil de configurar y flexible para numerosas aplicaciones. El sistema interno de gestión y control de energía permite operación a largo plazo y la integración de panel solar, múltiples sensores y otros dispositivos externos. La cámara ha sido probada exhaustivamente en campo y los resultados se publicaron en un artículo científico.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/EcoEye-Embedded-Vision-Camera-p-5843.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" border="0" /></a></p>

## Primeros Pasos

Antes de comenzar esta guía y para mantenerla simple, familiarízate con el hardware y software de EcoEye descritos en la [Guía del Usuario](https://files.seeedstudio.com/products/101991121/EcoEye%20User%20Manual.pdf).

### Preparando el Hardware

Abre la cámara EcoEye e inserta 3 baterías de litio-ion 18650 igualmente cargadas y con la misma capacidad en el compartimento designado respetando las marcas de polaridad. En la placa openMV, instala una tarjeta micro-SD formateada con al menos 8GB de capacidad.

### Preparando el Software

Descarga e instala el [openMV IDE](https://openmv.io/pages/download) en tu computadora. Abre el software y conecta el cable USB-A a USB-C entre la computadora y el conector externo de la cámara EcoEye. Al presionar una vez el botón pulsador, el LED frontal debe parpadear verde varias veces antes de iluminarse blanco por medio segundo. Ahora la computadora debería reconocer la tarjeta y abrir una ventana con el contenido de la SD. Puedes copiar todos los archivos de script que se encuentran [aquí](https://files.seeedstudio.com/products/101991121/ecoEye%20scripts.zip). Al mismo tiempo, debería aparecer un ícono USB junto al símbolo del enchufe en la esquina inferior izquierda de la interfaz IDE. Haz clic en ese botón para establecer la conexión con la cámara. Si se solicita actualizar el firmware, acepta y sigue los pasos para hacerlo.

Abre el código ecomain.py y ejecútalo presionando el botón verde de play en la esquina inferior izquierda. A veces puede ocurrir un OSError; simplemente ignóralo y vuelve a intentar. La cámara ahora funciona en modo continuo sin guardar imágenes, pero mostrándolas en el buffer del IDE. Cambiando el parámetro MODE a 2 y ejecutando el script nuevamente, la cámara guardará todas las imágenes capturadas.

Para permitir que la cámara funcione sin estar conectada a la computadora e IDE, el script ecomain.py con los parámetros ajustados para la aplicación deseada debe renombrarse como main.py, ubicado en la raíz de la tarjeta SD. Esto también se puede hacer en el IDE openMV navegando a Herramientas > Guardar script abierto en OpenMV Cam (como main.py) mientras la cámara sigue conectada.

Al iniciar un despliegue sin conexión al IDE, el usuario debe presionar una vez el botón pulsador para encender el sistema, y una vez más cuando el LED frontal se ilumine azul para confirmar el inicio. Para detener y apagar el sistema, presionar una vez el botón y luego otra cuando el LED azul claro se encienda (lo que puede tardar algunos segundos). Mantener presionado el botón forzará el apagado, pero no se recomienda salvo que sea necesario.

### Crea tu primera aplicación de detección de objetos

En esta guía paso a paso, recolectaremos datos usando la cámara EcoEye, entrenaremos un modelo etiquetando manualmente objetos en el dataset usando Edge Impulse, y finalmente ejecutaremos el modelo creado en la cámara observando los resultados.

#### Recolección de datos

Coloca la cámara frente a una superficie plana y monocromática como una pared, una pizarra blanca o incluso mirando hacia abajo en la mesa. Conéctala al IDE y ejecuta MODE 0 para ver las imágenes capturadas. Si es necesario, reubica la cámara para evitar objetos extraños frente al fondo. Mientras observas la imagen en vivo en el buffer, ajusta cuidadosamente el enfoque girando la lente. Cuando el enfoque sea perfecto, detén el script y reúne 2 o 3 tipos diferentes de objetos que quieras clasificar.

Ahora, cambia el parámetro MODE a 2 y ejecuta el script nuevamente. Las imágenes mostradas en el buffer también se guardan en la tarjeta SD. Mientras el script corre, coloca los objetos frente a la cámara en diferentes posiciones, lugares y combinaciones. Una vez recolectadas alrededor de 100 buenas imágenes, detén el script y reinicia la cámara openMV (en Herramientas > Reiniciar) para ver la carpeta con todas las imágenes guardadas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture2.png" alt="pir" width={800} height="auto" /></p>

#### Entrenamiento del modelo

Después de seleccionar unas 100 imágenes para el modelo, ingresa a tu cuenta de [Edge Impulse](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fprofile%2Fprojects&err=Your%20session%20expired%2C%20please%20log%20in%20again) y crea un nuevo proyecto. En Adquisición de Datos del menú izquierdo, sube las imágenes seleccionadas como un dataset. Ahora, cada imagen en los conjuntos de entrenamiento y prueba debe ser etiquetada manualmente haciendo clic en los tres puntos junto a la imagen y seleccionando Editar etiquetas. Asegúrate de usar siempre los mismos nombres para cada tipo de objeto, lo cual puede verificarse con el botón de filtro.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture3.png" alt="pir" width={800} height="auto" /></p>

Luego, ve a Crear impulso en el menú izquierdo. Añade un bloque de procesamiento tipo Imagen y un bloque de aprendizaje tipo Detección de Objetos (Imágenes) y guarda el impulso. Después, los menús en gris de Imágenes y Etiquetas de Detección de Objetos deberían aparecer bajo Diseño de Impulso. En la pestaña nueva de Imágenes, deja todo como está y simplemente haz clic en Guardar parámetros y Generar características. Una vez terminado, el modelo puede entrenarse en la pestaña Detección de Objetos dejando los parámetros por defecto por ahora.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture4.png" alt="pir" width={800} height="auto" /></p>

Para probar el desempeño del nuevo modelo, ve a la pestaña Pruebas de Modelo en el menú izquierdo y haz clic en Clasificar todo. Esto ejecutará el modelo de detección de objetos sobre el dataset de prueba que fue etiquetado pero no usado para entrenamiento y por lo tanto es desconocido para el modelo. Al finalizar, se mostrará la precisión del modelo y los objetos mal clasificados. Si la puntuación final no es satisfactoria, el dataset puede mejorarse o ajustarse los parámetros de entrenamiento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture5.png" alt="pir" width={800} height="auto" /></p>

Para exportar el modelo para la cámara EcoEye, navega a la pestaña Despliegue en el menú izquierdo. Busca y selecciona la Biblioteca openMV antes de hacer clic en Construir. Del archivo zip descargado automáticamente, extrae los archivos y copia labels.txt y trained.tflite a la tarjeta SD.

#### Ejecutando el modelo

Ahora podemos ejecutar la cámara con clasificación automática de objetos usando el modelo entrenado. En el archivo ecomain.py, cambia los parámetros MODE = 1, sensor_windowing = True, classify_mode = "objects" e indicators = True. Ejecuta el script prestando atención para presionar el botón pulsador cuando el LED azul se encienda o cuando el terminal serial muestre ‘Waiting for second button press...’. El buffer mostrará las imágenes capturadas con cuadros delimitadores alrededor de un objeto cada vez que el modelo detecte uno de los objetos entrenados. Estas imágenes también se guardan en la tarjeta SD y las detecciones con las coordenadas de los cuadros delimitadores se guardan en un archivo csv.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture6.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture7.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture8.png" alt="pir" width={800} height="auto" /></p>

Esta aplicación también puede ejecutarse sin conexión al IDE simplemente renombrando ecomain.py a main.py, desconectando el cable y arrancando el script con el procedimiento de dos pulsaciones del botón.

## Recursos

- **[PDF]** [EcoEye – Cámara de Visión Embebida Datasheet](https://files.seeedstudio.com/products/101991121/EcoEye%20-%20Embedded%20Vision%20Camera%20datasheet.pdf)
- **[PDF]** [EcoEye – Guía del Usuario](https://files.seeedstudio.com/products/101991121/EcoEye%20User%20Manual.pdf)

- **[CÓDIGO]** [EcoEye – Scripts de la Cámara de Visión Embebida](https://files.seeedstudio.com/products/101991121/ecoEye%20scripts.zip)

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte diverso para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>




 




