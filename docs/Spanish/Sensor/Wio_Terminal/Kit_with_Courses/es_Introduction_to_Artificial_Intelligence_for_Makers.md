---
description:  Introduction to Artificial Intelligence for Makers
title:  Introducción a Inteligencia Artificial para Makers
keywords:
- Wio_terminal Kit_with_Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Introduction_to_Artificial_Intelligence_for_Makers
last_update:
  date: 07/27/2025
  author: Guillermo
---

**Tiempo de lectura:** 30 minutos

**Audiencia:**

- Guía para principiantes sobre Inteligencia Artificial (IA) para makers sin formación previa en informática.

**ÍNDICE**

Una vista rápida de las secciones de este artículo.

- 1. ¿Qué es la ‘Inteligencia Artificial (IA)’?
- 2. Algunas aplicaciones interesantes de la Inteligencia Artificial (IA)
- 3. Lista de productos de Inteligencia Artificial (IA)
- 4. Libros, cursos y tutoriales en video recomendados

## Resumen

La IA es un tema de moda hoy en día, y los productos relacionados con IA se venden bien en nuestra [tienda en línea](https://www.seeedstudio.com/). Pero hemos detectado que algunos de nuestros clientes, desarrolladores tradicionales de hardware, a menudo no tienen una base sólida en informática. El propósito de este artículo es despertar interés y brindar una comprensión general para makers que desean comenzar su viaje en aprendizaje profundo. Señalaré algunos casos de uso comunes y posibles dificultades. También, al final del artículo, recomendaré algunos cursos y libros para aprender más sobre este tema.

## 1. ¿Qué es la ‘Inteligencia Artificial (IA)’?

La IA está presente hoy en día en todas partes. "Minería de datos", "Inteligencia Artificial", "Red Neuronal Artificial"... puede ser bastante confuso, ¿verdad? Las empresas y científicos informáticos crean miles de términos nuevos cada año, pero nunca te explican ***qué son realmente***.

Según Wikipedia:  
> La inteligencia artificial (IA), a veces llamada inteligencia de máquina, es la inteligencia demostrada por máquinas, en contraste con la inteligencia natural mostrada por humanos y animales.

Sin embargo, a menos que se use como terminología académica rigurosa, generalmente usamos este término para referirnos a la Red Neuronal Artificial. Porque el explosivo desarrollo de esta tecnología en los últimos años ha generado muchos productos computacionales y publicidad comercial, desplazando gradualmente el significado original del término 'IA'. Así que ahora cuando las empresas dicen "productos IA", por lo general se refieren a productos usados para acelerar operaciones de redes neuronales.

Algunos anuncios y ‘tutoriales’ te mostrarán imágenes como la siguiente, que te recuerdan las neuronas en nuestro cerebro. Pero en realidad, las neuronas son solo una analogía elegante. El término ‘Redes Neuronales’ en informática es un problema totalmente matemático. Y si no comprendes el algoritmo, esta imagen no significa **nada**.

![](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1554974523222.png)

Por lo tanto, si quieres adentrarte en el aprendizaje profundo, lo primero que debes hacer es comprender los principios matemáticos detrás del término. No explicaré el algoritmo en detalle hoy; lo que debes saber es que los modelos de Redes Neuronales son familiares lejanos de un problema simple en tu clase de Álgebra de la preparatoria. Al final de este texto, recomendaré algunos cursos y libros para principiantes.  
El aprendizaje profundo es un tema joven y experimental, con actualizaciones regulares todos los días. Si quieres dominarlo, lo más importante es elegir un tema o un problema real y leer tantos artículos de investigación relevantes como sea posible.

## 2. Algunas aplicaciones interesantes de la Inteligencia Artificial (IA)

### Visión por Computadora

Los humanos pueden identificar cualquier objeto con solo mirarlo unos segundos, es muy fácil para ellos. Pero para las máquinas, la identificación de un objeto era una tarea compleja hasta que Hinton y Alex Krizhevsky ganaron la competencia ImageNet en 2012.

Desde entonces, las Redes Neuronales dominaron el campo de la Visión, especialmente en problemas de clasificación y segmentación, y la red neuronal convolucional es una de las técnicas más destacadas que ha ganado numerosas competiciones en los últimos años. Tiene resultados sobresalientes en reconocimiento de imágenes.  
Nvidia ha desarrollado muchos [Demos de Visión](https://github.com/dusty-nv/jetson-inference) para Jetson Nano, y hemos probado dos de ellos para clasificación y detección facial:  
<iframe width="800" height="450" src="https://www.youtube.com/embed/U0rNdI9pl_0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Arte

**[Google Magenta](https://magenta.tensorflow.org/)** es un proyecto de investigación de código abierto que explora el papel del aprendizaje automático como herramienta en el proceso creativo. Este grupo es conocido por el público gracias al Doodle de IA [Celebrando a Johann Sebastian Bach](https://www.google.com/doodles/celebrating-johann-sebastian-bach)  
![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555056026898.png)

Aquí algunos demos de interacción:

[Magic Sketchpad](https://magic-sketchpad.glitch.me/) Cada vez que comienzas a dibujar un boceto, Sketch RNN intenta terminarlo y que coincida con la categoría que seleccionaste.

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555059163496.png)

[Piano Genie](http://piano-genie.glitch.me/) Diviértete fingiendo ser un virtuoso del piano usando aprendizaje automático.

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555059135929.png)

[Latent Loops](https://goo.gl/magenta/latent-loops) Dibuja melodías en una matriz ajustada a diferentes escalas, explora una paleta de loops melódicos generados y secuencia composiciones más largas usando estos. Construido por Google’s Pie Shop.

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555059104497.png)

### IoT y Sensores

**Estacionamiento Inteligente** Estacionar un vehículo en ambientes de tráfico denso suele llevar mucho tiempo buscando un lugar libre, lo que genera congestión y contaminación ambiental. La falta de información de guía hacia espacios vacantes es una causa del comportamiento ineficiente. Los sensores y tecnologías de estacionamiento inteligente facilitan la guía de conductores hacia espacios libres, mejorando la eficiencia. Actualmente no hay tales sensores o tecnologías para estacionamientos abiertos, por lo que aún hay oportunidad para innovar.  
[Deep Learning for Decentralized Parking Lot Occupancy](https://github.com/fabiocarrara/deep-parking)

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555055835602.png)

[**LSTMs para Reconocimiento de Actividad Humana**](https://github.com/guillaume-chevalier/LSTM-Human-Activity-Recognition) El reconocimiento de actividad humana (HAR) es un área importante en computación ubicua e interacción humano-computadora. Para reconocer actividades con sensores móviles o portátiles, se recopilan datos, se segmentan, se extraen características y se clasifican actividades con modelos discriminativos (SVM, HMM, MLP, etc.). En este proyecto, los desarrolladores usaron LSTM y lograron una precisión final del 91%, con picos de hasta 93.25%.

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555057001717.png)

### Procesamiento de Lenguaje Natural (PLN)

En la era del conocimiento, el Procesamiento de Lenguaje Natural (PLN) muestra una gran demanda por su amplia gama de usos. Anteriormente, PLN trabajaba con datos estáticos. Actualmente, PLN opera con corpus, bases lexicográficas y reconocimiento de patrones. Considerando que el aprendizaje profundo (DL) reconoce a la Red Neuronal Artificial (NN) para procesar no linealmente, las herramientas de PLN se vuelven cada vez más precisas y eficientes, iniciando una revolución.  
[NLP-progress](https://github.com/sebastianruder/NLP-progress) Este proyecto rastrea el progreso en PLN y ofrece un resumen del estado del arte (SOTA) en las tareas más comunes de PLN y sus datasets correspondientes.

#### Medicina

La Inteligencia Artificial está transformando el mundo de la medicina. La IA puede ayudar a los médicos a hacer diagnósticos más rápidos y precisos. Puede predecir el riesgo de una enfermedad a tiempo para prevenirla. Ayuda a los investigadores a entender cómo las variaciones genéticas causan enfermedades. Mejora la capacidad de los médicos para analizar imágenes médicas. Avanza el futuro de la medicina personalizada.  
Actualmente, se desarrollan grandes esfuerzos para enriquecer las aplicaciones de imágenes médicas con estos algoritmos para diagnosticar errores en sistemas de diagnóstico, que pueden resultar en tratamientos ambiguos. Los algoritmos de machine learning y deep learning son herramientas clave para predecir síntomas tempranos. Técnicas de deep learning, especialmente redes convolucionales, han desarrollado rápidamente metodologías específicas para analizar imágenes médicas, considerando una suite de algoritmos para la investigación de enfermedades y la toma automática de decisiones.

[**Deep Learning Toolkit (DLTK) para Imágenes Médicas**](https://github.com/DLTK/DLTK)  
DLTK es un kit de herramientas de redes neuronales escrito en Python, sobre TensorFlow. Está desarrollado para permitir prototipos rápidos con baja barrera de entrada y asegurar reproducibilidad en análisis de imágenes, con foco particular en imágenes médicas. Su objetivo es proveer a la comunidad métodos y modelos de última generación y acelerar la investigación en este campo emocionante.  
![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555056241911.png)

#### Otros

[**LotteryPredict**](https://github.com/chengstone/LotteryPredict) Este demo usa LSTM y TensorFlow para predecir loterías.

## 3. Lista de productos de Inteligencia Artificial (IA)

La IA está presente en aplicaciones desde consumo hasta empresariales. Los desarrolladores intentan aplicarla en el campo embebido y robótico, pero el rendimiento de las placas tradicionales es claramente insuficiente. Empresas multinacionales como Intel, Nvidia, Google y Huawei han lanzado productos de deep learning, donde Jetson Nano ha recibido mucha atención últimamente, haciendo posible desplegar redes neuronales medianas en sistemas embebidos a precios accesibles y con bajo consumo. Pequeñas compañías como Sipeed y Firefly también lanzaron productos específicos para nichos. Aquí algunos ejemplos.

[**NVIDIA Jetson Nano**](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-p-2916.html)  
>El kit NVIDIA® Jetson Nano™ ofrece el rendimiento computacional para ejecutar cargas modernas de IA con tamaño, potencia y costo sin precedentes. Desarrolladores, estudiantes y makers pueden correr frameworks y modelos de IA para aplicaciones como clasificación de imágenes, detección de objetos, segmentación y procesamiento de voz.  
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555050651109.png)

[**Google Coral Dev Board**](https://www.seeedstudio.com/Coral-Dev-Board-p-2900.html)  
>La Coral Dev Board es una computadora de placa única con un módulo sistema removible que incluye eMMC, SOC, radios inalámbricos y el Edge TPU de Google. Es perfecta para dispositivos IoT y sistemas embebidos que requieren inferencia ML rápida en el dispositivo.  
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555050567750.png)

[**Sipeed MAix Go Suit para RISC-V AI+IoT**](https://www.seeedstudio.com/Sipeed-MAix-GO-Suit-for-RISC-V-AI-IoT-p-2874.html)  
>MAIX es un módulo diseñado por Sipeed para ejecutar IA en el edge, llamado AIoT. Entrega alto rendimiento en un tamaño y consumo reducidos, permitiendo desplegar IA de alta precisión en el edge, y su precio competitivo permite integrarlo en dispositivos IoT. A diferencia del edge TPU de Google que actúa como acelerador, MAIX es un controlador maestro, por lo que es más económico y consume menos que una solución AP+edge TPU.  
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555051060453.png)

[**Intel Movidius MA245X AI Kit Compatible con Intel Movidius Stick**](https://www.seeedstudio.com/Intel-Movidius-MA245X-AI-Kit-Compatible-w-Intel-Movidius-Stick-p-3146.html)  
>Con la filosofía Plug and AI, Horned Sungem (HS) es un dispositivo AI simple y potente para que desarrolladores, estudiantes y entusiastas creen sus aplicaciones IA con facilidad. Sin depender de frameworks complejos, tras conectarlo por USB e instalar un breve script, tu dispositivo estará listo para ver y entender el mundo.  
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555050985486.png)

[**Placa de Desarrollo HiKey 970**](https://www.seeedstudio.com/HiKey-970-Development-Board.html)  
>HiKey970 es una plataforma super edge AI impulsada por el SOC Kirin970 con 4 núcleos Cortex A73 y 4 Cortex A53. Cuenta con 6GB de RAM LPDDR4, almacenamiento UFS de 64GB, Ethernet Gigabit, GPS, PCIE Gen2 y CAN. Como la primera plataforma AI con NPU dedicada, integra la arquitectura Huawei HiAI y frameworks neuronales populares, soportando CPU, GPU y NPU para aceleración AI. Incluye el SDK Huawei HiAI y es ideal para Deep Learning, robots, automoción y ciudades inteligentes.  
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555051309338.png)

## 4. Libros, cursos y tutoriales en video recomendados

### Libros

1. [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/)  
Uno de los libros de texto más amigables sobre redes neuronales a nivel mundial, sin términos complicados, totalmente gratis y online. El código está un poco desactualizado, pero si conoces C++ puedes usarlo para comprender principios.

2. [Deep Learning with Python](https://www.amazon.com/Deep-Learning-Python-Francois-Chollet/dp/1617294438)  
Este libro está escrito para cualquiera que quiera explorar el aprendizaje profundo desde cero o ampliar su comprensión. Ya seas ingeniero en machine learning, desarrollador o estudiante, encontrarás valor en estas páginas.

3. [Python For Data Analysis](https://www.cin.ufpe.br/~embat/Python%20for%20Data%20Analysis.pdf)  
Tutorial clásico para análisis de datos, aún vigente.

### Cursos

1. [Creative Applications of Deep Learning with TensorFlow](https://link.zhihu.com/?target=https://www.class-central.com/mooc/6679/kadenze-creative-applications-of-deep-learning-with-tensorflow)  
Curso que introduce el aprendizaje profundo: la técnica más avanzada para crear algoritmos de inteligencia artificial.

2. [Stanford CS231n: Convolutional Neural Networks for Visual Recognition](https://link.zhihu.com/?target=http://cs231n.stanford.edu/)  
Curso profundo que detalla arquitecturas de aprendizaje profundo enfocadas en aprendizaje de modelos end-to-end, especialmente en clasificación de imágenes.

3. [UC Berkeley AI-Sys Spring 2019](https://ucbrise.github.io/cs294-ai-sys-sp19/)  
Curso que describe desde arquitecturas clásicas como AlexNet hasta tendencias actuales en diseño de sistemas para soportar la próxima generación de aplicaciones IA, y aplicaciones de IA para optimizar arquitectura y rendimiento. Destaca la lista de lecturas recomendadas.

### Tutoriales en video

1. [ScaledML 2019](https://www.youtube.com/playlist?list=PLRM2gQVaW_wWXoUnSfZTxpgDmNaAS1RtG)
2. [A New Golden Age for Computer Architecture History, Challenges, and Opportunities.](https://www.youtube.com/watch?v=uyc_pDBJotI&t=767s)
3. [SysML 18: Perspectives and Challenges.](https://www.youtube.com/watch?v=4inIBmY8dQI&t=26s)
4. [RL Course by David Silver](https://www.youtube.com/watch?v=2pWv7GOvuf0&list=PLzuuYNsE1EZAXYR4FJ75jcJseBmo4KQ9-)

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y asegurar que tu experiencia sea lo más satisfactoria posible. Ofrecemos varios canales de comunicación para ajustarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
