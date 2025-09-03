---
description: What is TinyML
title: ¿Qué es TinyML?
keywords:
- Wio_terminal Kit_with_Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-TinyML
last_update:
  date: 07/27/2025
  author: Guillermo
---

# ¿Qué es TinyML?

ML, como habrás adivinado, significa Machine Learning (aprendizaje automático) y en la mayoría de los casos hoy en día (aunque no siempre) se refiere al aprendizaje profundo. Tiny en TinyML significa que los modelos de ML están optimizados para ejecutarse en dispositivos de muy bajo consumo y tamaño reducido, como diversos microcontroladores. Es un subconjunto del ML en el borde (Edge ML) o aprendizaje automático embebido.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/81nihP0ASSL.jpg" /></div>

Los dispositivos embebidos vienen en todo tipo de formas y tamaños, desde “supercomputadoras embebidas” como Nvidia Jetson Xavier AGX hasta los microcontroladores más pequeños, como el ESP32 o Cortex M0.

<img width={200} align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/1-750x750.jpg" />

<img width={350} align="center" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/xavier-module-dev-kit-3qrtr-1945px.png" />

¿Por qué el ML embebido en microcontroladores se coloca en una categoría especial e incluso se le da un nombre tan genial?

Porque tiene su propio conjunto de ventajas y limitaciones. La atracción de TinyML radica en que los MCUs son ubicuos, pequeños, consumen muy poca energía y son comparativamente económicos.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/Seeeduino-XIAO-pinout.jpg" /></div>

Tomemos como ejemplo el ARM Cortex M0+ y la pequeña placa [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) que está basada en él: la placa es tan pequeña como un pulgar (21×17.8 mm), consume solo 1.33 mAh de energía (lo que significa que puede funcionar ~112 horas con una batería de 150 mA, y mucho más si se pone en modo de sueño profundo) y cuesta tan solo 4.3 USD.

Gracias a los avances recientes en optimización de modelos y la aparición de frameworks diseñados específicamente para ejecutar inferencias de modelos en microcontroladores, se ha vuelto posible dotar de más inteligencia a estos pequeños dispositivos. Ahora podemos desplegar redes neuronales en microcontroladores para tareas como reconocimiento de escenas de audio (por ejemplo, actividad de elefantes o sonido de vidrio roto), detección de palabras clave (para activar el dispositivo con una frase específica) o incluso tareas sencillas de reconocimiento de imágenes. Los dispositivos con microcontroladores embebidos pueden usarse para dar nueva vida y significado a sensores antiguos, como usar un acelerómetro instalado en un mecanismo para detección de anomalías y mantenimiento predictivo —o para distinguir varios tipos de licores como en [esta demostración](https://wiki.seeedstudio.com/Wio-Terminal-Edge-Impulse-Distinguish-Alochol/)!
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg" /></div>
Las posibilidades de TinyML son realmente enormes.
<br />

¿Y qué hay de las limitaciones? El factor limitante principal es el tamaño de RAM/FLASH de los MCUs — por más que optimices, no podrías hacer caber [ese YOLO9999](https://arxiv.org/abs/1612.08242) en un microcontrolador diminuto.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/yolo9000-pr023-1-638.jpg" /></div>

Lo mismo ocurre con el reconocimiento automático del habla — aunque la detección de palabras clave simples es posible, el reconocimiento de voz en dominios abiertos está fuera del alcance de los MCUs. Por ahora.

El equipo de Seeed EDU ha creado un curso definitivo paso a paso para comenzar con TinyML usando el Wio Terminal.

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL5efXgSvwk9UCtJ6JKTyWAccSVfTXSlA3" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Puedes descargar el curso en formato PDF y los materiales del curso haciendo clic en los enlaces a continuación. Además, puedes encontrar proyectos independientes publicados anteriormente en el blog de Seeed Studio y en el sitio Hackster.io — tanto los proyectos del curso como los proyectos independientes usan el IDE de Arduino para programar los dispositivos y una combinación de Edge Impulse y Tensorflow Lite for Microcontrollers para el entrenamiento e inferencia del modelo.

:::note
La diferencia principal entre el curso y los proyectos independientes es que el curso está principalmente dirigido a ser usado por profesores de STEM como base para desarrollar su propio material educativo o como lecciones listas para usar, mientras que los proyectos independientes están dirigidos a makers y hackers para que los exploren y mejoren.
:::

[Edge Impulse](https://www.edgeimpulse.com) es una plataforma de desarrollo fácil de usar para machine learning en dispositivos edge, que ofrece una interfaz web amigable (pero poderosa) y herramientas para todo el flujo de TinyML, desde la recolección de datos hasta el despliegue del modelo.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/index.png" /></div>

[Tensorflow Lite for Microcontrollers](https://www.tensorflow.org/lite/microcontrollers/get_started), por otro lado, aunque tiene una curva de aprendizaje más pronunciada, te permite implementar tu propio flujo de entrenamiento e inferencia de modelos.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/tensorflow-lite-logo-social.png" /></div>

## Curso TinyML con Wio Terminal

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/1.png" /></div>

##### Descargar PDF

[PDF del curso TinyML con Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/TinyML_with_Wio_Terminal_Course_v1-3.pdf)

##### Descargar materiales del curso

[Seeed_Arduino_WioTerminal_TinyML_Course-1.0.zip](https://github.com/Seeed-Studio/Seeed_Arduino_WioTerminal_TinyML_Course/archive/refs/tags/1.0.zip)

##### Repositorio en Github con materiales del curso

[Repositorio en Github del curso TinyML con Wio Terminal](https://github.com/Seeed-Studio/Seeed_Arduino_WioTerminal_TinyML_Course)

## Programación sin código para empezar con TinyML

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/cc_tinyml_2.png" /></div>

Diseñado para introducir a principiantes en los conceptos básicos del aprendizaje automático embebido con Wio Terminal y la programación gráfica con Codecraft.

##### Descargar PDF

[PDF del curso de programación sin código para comenzar con TinyML](https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/No-code_Programming_to_Get_Started_with_TinyML.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos tipos de soporte y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para ajustarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
