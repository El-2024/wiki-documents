---
description: This wiki will demonstrate how you can use TensorFlow Lite for keyword spotting with ReSpeaker 2-Mics Pi HAT v2 and perform speech recognition.
title: Detección de Palabras Clave con TensorFlow Lite
keywords:
  - ReSpeaker_2-Mics_Pi_HAT
  - Keyword_Spotting
  - TensorFlow_Lite
image: https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/social-image.webp
slug: /es/respeaker_2_mics_pi_hat_v2_speech_recognition
last_update:
  date: 07/19/2025
  author: Guillermo
---

## Introducción

Este proyecto demuestra cómo usar TensorFlow Lite para detección de palabras clave (keyword spotting) en el ReSpeaker 2-Mics Pi HAT v2.  
La detección de palabras clave permite la identificación en tiempo real de palabras predefinidas a partir de una entrada de audio, habilitando aplicaciones como dispositivos controlados por voz y sistemas interactivos. Te guiaremos a través de los pasos para entrenar un modelo TensorFlow Lite, desplegarlo en el ReSpeaker HAT y ejecutar el reconocimiento de voz localmente.

### Requisitos de Hardware y Software

- Hardware: Raspberry Pi con ReSpeaker 2-Mics Pi HAT v2  
- Software: TensorFlow Lite, Google Colab, Python y librerías de soporte

### Aplicaciones

La detección de palabras clave puede aplicarse en:

- Dispositivos para hogares inteligentes  
- Robots controlados por voz  
- Kioscos interactivos

### ¿Qué es TensorFlow Lite?

TensorFlow Lite es una versión ligera de TensorFlow diseñada para dispositivos móviles y embebidos.  
Permite realizar inferencia de aprendizaje automático con baja latencia y tamaños binarios pequeños, ideal para ejecutar modelos en dispositivos edge como Raspberry Pi.

## Entrenar y Obtener el Modelo TensorFlow Lite

### Dataset

Usaremos un subconjunto del dataset Speech Commands para el entrenamiento.  
Este dataset contiene archivos de audio WAV de personas diciendo diferentes palabras, recopilados por Google y liberados bajo licencia CC BY.  
Puedes descargar el dataset desde este enlace. Para más información sobre datasets, consulta esta guía.

### ¿Por qué usar Google Colab?

Google Colab es una plataforma en la nube para ejecutar notebooks Jupyter.  
Ofrece acceso gratuito a recursos GPU, lo que lo hace ideal para entrenar modelos de machine learning sin necesidad de computación local potente.

### Pasos

Usaremos un notebook de Google Colab para realizar el entrenamiento de datos y generar un modelo TensorFlow Lite en formato `.tflite`.

- **Paso 1.** Abre [este Notebook de Python](https://colab.research.google.com/github/tensorflow/docs/blob/master/site/en/tutorials/audio/simple_audio.ipynb)

  ![Carga del Notebook](https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/v2/speech_1.png)

  Por defecto, cargará [el mini dataset Speech Commands](http://storage.googleapis.com/download.tensorflow.org/data/mini_speech_commands.zip), una versión reducida del dataset original que contiene más de 105,000 archivos de audio WAV de personas pronunciando 35 palabras diferentes. Los datos fueron recopilados por Google y publicados bajo licencia CC BY.

- **Paso 2.** Conéctate a un nuevo entorno de ejecución seleccionando **Cambiar tipo de entorno de ejecución -> CPU -> Guardar**, luego haz clic en **Conectar**.

  ![Change runtime type - 1](https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/v2/speech_2.png)
  ![Change runtime type - 2](https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/v2/speech_3.png)

- **Paso 3.** Navega a `Entorno de ejecución > Ejecutar todo` para correr todas las celdas de código. Este proceso tarda aproximadamente 10 minutos.

  ![Run all](https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/micro-speech-run-all.png)

- **Paso 4.** Una vez ejecutadas todas las celdas, añade una nueva celda y ejecuta el siguiente código para generar el archivo `.tflite`.

  ```python
  converter = tf.lite.TFLiteConverter.from_keras_model(model)
  tflite_model = converter.convert()

  with open('model.tflite', 'wb') as f:
  f.write(tflite_model)
  ```

  ![Append a new cell](https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/v2/speech_4.png)

- **Paso 5.** Haz clic derecho sobre el archivo generado `model.tflite` y selecciona **Descargar** para guardar el archivo en tu computadora.

  ![Download](https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/v2/speech_5.png)

### Ejecutando el Script de Inferencia

El script `inference.py` realiza los siguientes pasos:

1. Carga el modelo TensorFlow Lite entrenado.  
2. Procesa el audio de entrada en un espectrograma adecuado para la inferencia.  
3. Ejecuta la inferencia y muestra la palabra clave detectada junto con las puntuaciones de confianza para cada etiqueta.

### Pasos para Ejecutar

1. Sube el archivo `model.tflite` a tu Raspberry Pi, en este ejemplo lo colocamos en `~/speech_recognition/model.tflite`.  
2. Guarda el siguiente script como `~/speech_recognition/inference.py`:

    ```python
    import numpy as np
    from scipy import signal
    from tflite_runtime.interpreter import Interpreter
    import soundfile as sf

    MODEL_PATH = 'model.tflite'
    LABELS = ['no', 'yes', 'down', 'go', 'left', 'up', 'right', 'stop']


    def get_spectrogram(waveform, expected_time_steps=124, expected_freq_bins=129):
        _, _, Zxx = signal.stft(
            waveform,
            fs=16000,
            nperseg=255,
            noverlap=124,
            nfft=256
        )
        spectrogram = np.abs(Zxx)

        if spectrogram.shape[0] != expected_freq_bins:
            spectrogram = np.pad(spectrogram, ((
                0, expected_freq_bins - spectrogram.shape[0]), (0, 0)), mode='constant')
        if spectrogram.shape[1] != expected_time_steps:
            spectrogram = np.pad(spectrogram, ((
                0, 0), (0, expected_time_steps - spectrogram.shape[1])), mode='constant')

        if spectrogram.shape != (expected_freq_bins, expected_time_steps):
            raise ValueError(
                f"Invalid spectrogram shape. Got {spectrogram.shape}, expected ({expected_freq_bins}, {expected_time_steps})."
            )

        spectrogram = np.transpose(spectrogram)

        return spectrogram


    def preprocess_audio(file_path):
        waveform, sample_rate = sf.read(file_path)
        if sample_rate != 16000:
            raise ValueError("Expected sample rate is 16 kHz")

        if len(waveform.shape) > 1:
            waveform = waveform[:, 0]

        spectrogram = get_spectrogram(waveform)
        spectrogram = spectrogram[..., np.newaxis]
        spectrogram = spectrogram[np.newaxis, ...]

        return spectrogram


    def run_inference(file_path):
        spectrogram = preprocess_audio(file_path)

        interpreter = Interpreter(MODEL_PATH)
        interpreter.allocate_tensors()

        input_details = interpreter.get_input_details()
        output_details = interpreter.get_output_details()

        input_shape = input_details[0]['shape']
        if spectrogram.shape != tuple(input_shape):
            raise ValueError(
                f"Expected input shape {input_shape}, got {spectrogram.shape}"
            )

        interpreter.set_tensor(
            input_details[0]['index'], spectrogram.astype(np.float32))

        interpreter.invoke()

        output_data = interpreter.get_tensor(output_details[0]['index'])[0]
        prediction = np.argmax(output_data)
        confidence = np.exp(output_data) / \
            np.sum(np.exp(output_data))

        print(f"command: {LABELS[prediction].upper()}")
        for label, conf in zip(LABELS, confidence):
            print(f"{label}: {conf:.2%}")


    if __name__ == "__main__":
        audio_file_path = 'test_audio.wav'
        run_inference(audio_file_path)
    ```

3. Graba un sonido usando el siguiente comando. Las palabras clave disponibles son: `no`, `yes`, `down`, `go`, `left`, `up`, `right`, `stop`.

    ```
    $ arecord -D "plughw:2,0" -f S16_LE -r 16000 -d 1 -t wav ~/speech_recognition/test_audio.wav
    ```

4. Ejecuta el script:

    ```
    $ python3 inference.py
    INFO: Created TensorFlow Lite XNNPACK delegate for CPU.
    command: YES
    no: 8.74%
    yes: 21.10%
    down: 5.85%
    go: 14.57%
    left: 11.02%
    up: 8.25%
    right: 10.53%
    stop: 19.94%
    ```

### Interpretación de los Resultados

El script muestra el comando detectado (por ejemplo, YES) y las puntuaciones de confianza para todas las etiquetas.  
Esto proporciona información sobre las predicciones del modelo y permite evaluar su rendimiento.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos!  
Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia sea lo más fluida posible.  
Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
