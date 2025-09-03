---
description:  Edge Impulse Getting Started
title:  Guía de Inicio Edge Impulse
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-TinyML-EI-1
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Wio Terminal Edge Impulse Guía de Inicio

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png" /></div>

[**Edge Impulse**](https://www.edgeimpulse.com/) permite a los desarrolladores crear la próxima generación de soluciones inteligentes con Machine Learning embebido. El Machine Learning en el borde (edge) permitirá aprovechar el 99% de los datos de sensores que hoy se descartan por costo, ancho de banda o limitaciones de energía.

Ahora, [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) está oficialmente soportado por Edge Impulse. ¡Veamos cómo comenzar con Machine Learning en el borde usando Wio Terminal!

## Instalación de dependencias

Para configurar Wio Terminal con Edge Impulse, necesitas instalar el siguiente software:

1. [Node.js v12](https://nodejs.org/en/) o superior.
2. [Arduino CLI](https://arduino.github.io/arduino-cli/latest/)
3. El CLI de Edge Impulse y un monitor serial. Instálalos abriendo el símbolo de sistema o terminal y ejecuta:

```sh
npm install -g edge-impulse-cli 
```

## Conectando a Edge Impulse

Con todo el software instalado, es hora de conectar la placa de desarrollo a Edge Impulse.

### 1. Conecta la placa a tu computadora

Conecta Wio Terminal a tu computadora. Entra en modo bootloader deslizando dos veces rápidamente el interruptor de encendido. Para más detalles, consulta también [aquí](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/dfu.gif" /></div>

Debería aparecer una unidad externa llamada `Arduino` en tu PC. Copia los [**archivos de firmware uf2 de Edge Impulse**](https://github.com/Seeed-Studio/Seeed_Arduino_edgeimpulse/releases/tag/1.4.0) descargados a la unidad `Arduino`. ¡Ahora Edge Impulse está cargado en Seeeduino Wio Terminal!

**NOTA:** Aquí está el [código fuente de Wio Terminal Edge Impulse](https://github.com/Seeed-Studio/Seeed_Arduino_edgeimpulse), también puedes compilar el firmware desde aquí.

### 2. Configurar las claves

Desde el símbolo de sistema o terminal ejecuta:

```sh
edge-impulse-daemon
```

**NOTA:** Al conectar un dispositivo nuevo, ejecuta `edge-impulse-daemon --clean` para eliminar cachés previos.

### 3. Verificar que el dispositivo está conectado

¡Eso es todo! Tu dispositivo está conectado a Edge Impulse. Para verificarlo, [ve a tu proyecto Edge Impulse](https://studio.edgeimpulse.com/studio/select-project?autoredirect=1) y haz clic en Dispositivos. El dispositivo aparecerá listado.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/device.png" /></div>

Para tu primer proyecto, entrenaremos rápidamente una red neuronal simple para clasificar gestos de piedra-papel-tijera con solo un sensor de luz. Para más detalles y tutorial en video, ¡mira el video correspondiente!

<iframe width="560" height="315" src="https://www.youtube.com/embed/iCmlKyAp8eQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Adquisición de datos para entrenamiento

Ve a la pestaña Data acquisition. Configura la duración de la muestra a unos 10000 ms o 10 segundos y crea 10 muestras por cada gesto, moviendo la mano cerca del Wio Terminal.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/gif1.gif" /></div>

Este es un conjunto de datos pequeño, pero también tenemos una red neuronal pequeña, por lo que es más probable que haya underfitting que overfitting en este caso.

**Underfitting**:
Un modelo estadístico o algoritmo de machine learning sufre underfitting cuando no puede capturar la tendencia subyacente de los datos. Esto ocurre (entre otros casos) cuando el modelo es demasiado pequeño para generalizar reglas para datos con mucha variedad y ruido.

**Overfitting**:
Un modelo está sobreajustado cuando empieza a aprender del ruido y datos incorrectos del conjunto. Ocurre cuando hay un modelo muy grande y un conjunto pequeño de datos, haciendo que el modelo memorice los datos sin generalizar.

Al recolectar muestras es importante aportar diversidad para que el modelo generalice mejor, por ejemplo, con diferentes direcciones, velocidades y distancias del sensor. En general, la red solo aprende de los datos presentes en el conjunto, así que si solo tienes muestras de gestos moviéndose de izquierda a derecha, no esperes que reconozca movimientos de derecha a izquierda o arriba y abajo.

## Construcción del modelo de machine learning

Después de recolectar las muestras, es hora de diseñar un "impulse". Impulse es el término que usa Edge Impulse para denotar el procesamiento de datos y pipeline de entrenamiento. Presiona en Create Impulse y configura Window length a 1000 ms y Window length increase a 50 ms.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/main.png" /></div>

Estos ajustes significan que cada vez que se realice una inferencia, se tomarán mediciones del sensor por 1000 ms. — la cantidad de mediciones depende de la frecuencia. Durante la adquisición configuraste frecuencia a 40 Hz, o 40 veces por segundo. Entonces, tu dispositivo recogerá 40 muestras en la ventana de 1000 ms, luego procesará estos valores y los enviará a la red neuronal para obtener un resultado. Por supuesto, usamos la misma ventana durante el entrenamiento.

Para esta prueba de concepto, probaremos tres bloques diferentes de preprocesamiento con parámetros por defecto (excepto la escala):

* **Flatten**: calcula promedio, mínimo, máximo y otras funciones de los datos en la ventana.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/image_ZEX5ydSwOS.jpeg" /></div>

* **Spectral Features**: extrae las características de frecuencia y potencia de la señal en el tiempo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/image_7uXlLwjT3E.jpeg" /></div>

* **Raw data**: alimenta los datos crudos a la red neuronal (opcionalmente normalizados).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/image.png" /></div>

Comenzaremos con Flatten. Añade este bloque y luego añade Neural Network (Keras) como bloque de aprendizaje, selecciona Flatten como características de entrada y haz clic en Save Impulse. Ve a la pestaña del bloque de procesamiento Flatten, ingresa 0.001 en scaling y deja el resto igual. Presiona Save parameters y luego Generate features.

La visualización de características es una herramienta útil que permite ver gráficamente cómo lucen los datos tras el preprocesamiento. Por ejemplo, esta es la data tras Flatten:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/image_4tnpR9t34s.jpeg" /></div>

Se observa que los datos de diferentes clases están aproximadamente divididos, pero hay mucha superposición entre piedra y otras clases, lo que causará problemas y baja precisión para estas dos clases. Después de generar e inspeccionar las características, ve a la pestaña NN Classifier.

Entrena una red simple totalmente conectada con 2 capas ocultas, 20 y 10 neuronas respectivamente, por 500 épocas con tasa de aprendizaje 1e-4. Al terminar verás los resultados en una matriz de confusión similar a esta:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/flatten.png" /></div>

Vuelve a Create Impulse, elimina el bloque Flatten y elige Spectral Features, genera las características (¡recuerda poner escala 0.001!) y entrena la red neuronal con esos datos. Deberías ver una ligera mejora.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/spectral.png" /></div>

Flatten y Spectral Features no son los mejores métodos para reconocer gestos de piedra-papel-tijera. Pensando en ello, para clasificar estos gestos solo necesitamos contar cuántas veces y por cuánto tiempo el sensor de luz recibe valores "más bajos de lo normal". Si es una vez y relativamente largo, es piedra (puño sobre el sensor). Dos veces, tijeras. Más que eso, papel. Parece sencillo, pero conservar la serie temporal es clave para que la red aprenda esta relación.

Flatten y Spectral Features eliminan la relación temporal en la ventana: Flatten convierte los valores crudos en promedio, mínimo, máximo, etc. sin importar el orden. Spectral Features extrae frecuencia y potencia, pero la duración corta de los gestos afecta su eficacia.

Por eso, la mejor opción es usar Raw data, que preserva la serie temporal. Mira el proyecto de ejemplo donde usamos Raw data y una red Convolutional 1D, una red especializada comparada con la totalmente conectada. Logramos 92.4% de precisión en los mismos datos.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/raw.png" /></div>

Resultados finales tras el entrenamiento:

* Flatten FC: 69.9 % precisión
* Spectral Features FC: 70.4 % precisión
* Raw Data Conv1D: 92.4 % precisión

Después del entrenamiento puedes probar el modelo usando la pestaña Live classification, que recoge muestras en el dispositivo y las clasifica con el modelo alojado en Edge Impulse. Probamos tres gestos y la precisión es satisfactoria para esta prueba de concepto.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/live_class.png" /></div>

## Desplegando en Wio Terminal

El siguiente paso es desplegar en el dispositivo. En la pestaña Deployment, elige Arduino library y descárgala.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/deploy.png" /></div>

Extrae el archivo y colócalo en tu carpeta de librerías de Arduino. Abre el IDE de Arduino y selecciona el sketch static buffer (ubicado en File -> Examples -> nombre de tu proyecto -> static\_buffer), que ya tiene el código base para clasificación con tu modelo. ¡Genial!

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/example.png" /></div>

Solo debes completar la adquisición de datos en el dispositivo. Usaremos un simple ciclo for con delay para respetar la frecuencia (recuerda que usamos 25 ms de delay al recolectar datos para entrenamiento).

```cpp
int raw_feature_get_data(size_t offset, size_t length, float *out_ptr) {
    float features[40];
    for (byte i = 0; i < 40; i = i + 1) {
        features[i] = analogRead(WIO_LIGHT);
        delay(25);
    }
    memcpy(out_ptr, features + offset, length * sizeof(float));
    return 0;
}
```

Claro que hay formas mejores de implementar esto, por ejemplo un buffer de datos del sensor que permita hacer inferencias con más frecuencia. Pero eso lo veremos en artículos futuros.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/gif3.gif" /></div>

Aunque fue solo una demostración de concepto, realmente muestra que TinyML va a lograr algo grande. Probablemente sabes que es posible reconocer gestos con una cámara, aunque la imagen esté muy reducida. Pero reconocer gestos con solo 1 píxel es otro nivel.

## Referencias

* [Proyecto público Edge Impulse](https://studio.edgeimpulse.com/public/15854/latest)
* [Proyecto en Github](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_1_Intro)
