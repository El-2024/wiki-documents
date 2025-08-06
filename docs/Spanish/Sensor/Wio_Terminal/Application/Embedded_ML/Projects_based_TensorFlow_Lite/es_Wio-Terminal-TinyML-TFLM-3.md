---
description:  Speech Recognition and Speech-to-Intent
title:  Reconocimiento de Voz y de Voz a Intención
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_TensorFlow_Lite
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-TinyML-TFLM-3
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Reconocimiento de Voz en MCU con Wio Terminal y TensorFlow Lite Micro – De Voz a Intención

Un enfoque tradicional para utilizar la voz en el control de dispositivos o para cumplir solicitudes del usuario consiste en transcribir primero la voz a texto y luego analizar el texto para convertirlo en comandos o consultas en un formato adecuado. Aunque este enfoque ofrece gran flexibilidad en términos de vocabulario y escenarios de aplicación, una combinación de modelo de reconocimiento de voz y un analizador dedicado no es adecuada para los recursos limitados de los microcontroladores.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-6-1024x416.png" /></div>

Fuente: Wio Terminal, Picovoice, Tensorflow Lite

En este proyecto emplearemos un método más eficiente: analizaremos directamente las expresiones del usuario en una salida accionable en forma de intención y espacios (slots). Compartiremos técnicas para entrenar un modelo de voz-a-intención enfocado en un dominio específico y desplegarlo en una placa de desarrollo basada en Cortex M4F con micrófono integrado: el Wio Terminal de Seeed Studio.

Para más detalles y visuales, ¡mira el video correspondiente!

<iframe width="560" height="315" src="https://www.youtube.com/embed/CVq4cet5jgI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Existen diferentes tipos de tareas de reconocimiento de voz – podemos dividirlas de forma general en tres grupos:

* Reconocimiento de voz continua de gran vocabulario (LVCSR)
* Detección de palabras clave (Keyword spotting)
* De voz a intención (Speech-to-Intent)

La detección de palabras clave funciona bien en microcontroladores, es relativamente fácil de entrenar y existen diversas herramientas open-source sin código, como Edge Impulse, pero no maneja bien vocabularios grandes.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-7-768x570.png" /></div>

Si deseamos que un dispositivo realice una acción útil basada en la entrada de voz, necesitamos combinar un modelo LVCSR con un analizador de lenguaje natural basado en texto. Este enfoque es robusto y relativamente fácil de implementar, gracias a la disponibilidad de motores ASR públicos, pero no es adecuado para ejecutarse ni siquiera en computadoras de placa única (SBC), mucho menos en microcontroladores.

Existe una tercera vía: la conversión directa de voz a intención analizada, basada en vocabulario de dominio específico. Tomemos como ejemplo una lavadora inteligente o luces inteligentes. Un modelo de voz a intención que procese la frase “ciclo normal con baja centrifugación” produciría una intención analizada como esta:

```json
{ Intent: washClothes },
{ Slots: cycle: normal,
         spin: low,
         water: default }
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-9-768x621.png" /></div>

Y esto es todo lo que necesitamos para controlar dicha lavadora inteligente con la voz.

Aunque el enfoque de voz-a-intención está bien representado en la investigación, existen pocas implementaciones open-source adecuadas para microcontroladores.

Listas para producción, pero no open-source:

* Picovoice
* Fluent.ai

Listas para producción, FOSS, pero no aptas para microcontroladores:

* Speechbrain.io

Para entrenar el modelo puedes usar un Jupyter Notebook que preparamos o los scripts de entrenamiento en el repositorio de Github (los encontrarás en la sección **Referencias** al final del artículo). El Notebook contiene una implementación básica de referencia y explicación de cada celda.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-10.png" /></div>

Después de entrenar el modelo, cópialo a la carpeta con el código para Wio Terminal y cambia el nombre del modelo en la [línea 106](https://github.com/AIWintermuteAI/Speech-to-Intent-Micro/blob/886746bb1878971d43e3e39584e0e2a492933491/inference_code/Wio_Terminal/wio_speech_to_intent_150_10/wio_speech_to_intent_150_10.ino#L106) al nombre de tu modelo. El código puede dividirse en tres partes principales:

* adquisición de audio
* cálculo de MFCC
* inferencia sobre las características MFCC

## Adquisición de Audio

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/DMAPIO.GIF" /></div>

Para grabar sonido con el micrófono integrado del Wio Terminal, usamos la función DMA ADC del MCU Cortex M4F. DMA significa acceso directo a memoria, y hace exactamente eso: una parte específica del MCU llamada DMAC (controlador de acceso directo a memoria) se configura previamente para transferir datos desde una ubicación (memoria interna, SPI, I2C, ADC u otra interfaz) a otra. Esta transferencia puede realizarse sin mucha intervención del MCU, aparte de la configuración inicial. Aquí configuramos la fuente y destino de la transferencia:

```cpp
descriptor.descaddr = (uint32_t)&descriptor_section[1]; // Configura un descriptor circular
descriptor.srcaddr = (uint32_t)&ADC1->RESULT.reg; // Toma el resultado del registro RESULT de ADC0
descriptor.dstaddr = (uint32_t)adc_buf_0 + sizeof(uint16_t) * ADC_BUF_LEN;  // Lo coloca en el arreglo adc_buf_0
descriptor.btcnt = ADC_BUF_LEN;  // Cuenta de transferencias
descriptor.btctrl = DMAC_BTCTRL_BEATSIZE_HWORD |   // Tamaño de transferencia es HWORD (16-bits)
                      DMAC_BTCTRL_DSTINC |      // Incrementa la dirección de destino
                      DMAC_BTCTRL_VALID |       // El descriptor es válido
                      DMAC_BTCTRL_BLOCKACT_SUSPEND; // Suspende el canal DMAC 0 después de transferir el bloque
memcpy(&descriptor_section[0], &descriptor, sizeof(descriptor));  // Copia el descriptor a la sección correspondiente
descriptor.descaddr = (uint32_t)&descriptor_section[0];           // Configura un descriptor circular
descriptor.srcaddr = (uint32_t)&ADC1->RESULT.reg;                 // Toma el resultado del registro RESULT de ADC0
descriptor.dstaddr = (uint32_t)adc_buf_1 + sizeof(uint16_t) * ADC_BUF_LEN;  // Lo coloca en el arreglo adc_buf_1
descriptor.btcnt = ADC_BUF_LEN;  // Cuenta de transferencias
descriptor.btctrl = DMAC_BTCTRL_BEATSIZE_HWORD |    // Tamaño de transferencia es HWORD (16-bits)
                      DMAC_BTCTRL_DSTINC |    // Incrementa la dirección de destino
                      DMAC_BTCTRL_VALID |      // El descriptor es válido
                      DMAC_BTCTRL_BLOCKACT_SUSPEND; // Suspende el canal DMAC 0 después de transferir el bloque
memcpy(&descriptor_section[1], &descriptor, sizeof(descriptor));  // Copia el descriptor a la sección correspondiente
```

Como se especifica con el parámetro `DMAC_BTCTRL_BLOCKACT_SUSPEND;` en el descriptor DMA, el canal DMA debe suspenderse después de transferir un bloque completo. Luego configuramos una ISR (rutina de servicio de interrupción) que se activa con el temporizador TC5:

```cpp
// Configura el temporizador/contador 5
GCLK->PCHCTRL[TC5_GCLK_ID].reg = GCLK_PCHCTRL_CHEN | // Habilita el canal del periférico para TC5
GCLK_PCHCTRL_GEN_GCLK1;    // Conecta el reloj genérico 0 a 48 MHz
TC5->COUNT16.WAVE.reg = TC_WAVE_WAVEGEN_MFRQ;     // Establece TC5 en modo MFRQ (frecuencia por coincidencia)
TC5->COUNT16.CC[0].reg = 3000 - 1;                          // Establece el disparador a 16 kHz: (4 MHz / 16000) - 1
while (TC5->COUNT16.SYNCBUSY.bit.CC0);                      // Espera sincronización
// Inicia el temporizador/contador 5
TC5->COUNT16.CTRLA.bit.ENABLE = 1;                          // Habilita el temporizador TC5
while (TC5->COUNT16.SYNCBUSY.bit.ENABLE);                   // Espera sincronización
```

La ISR llamará una función específica en intervalos de tiempo iguales, controlados por el temporizador TC5. Observemos esa función:

```cpp
/**
 * Rutina de Servicio de Interrupción (ISR) para DMAC 1
 */
void DMAC_1_Handler() {

  static uint8_t count = 0;

  // Verifica si el canal DMAC 1 fue suspendido (SUSP)
  if (DMAC->Channel[1].CHINTFLAG.bit.SUSP) {

     // Depuración: activa pin antes de copiar el buffer
#ifdef DEBUG
    digitalWrite(debug_pin, HIGH);
#endif

    // Reinicia DMAC en canal 1 y limpia el flag de interrupción SUSP
    DMAC->Channel[1].CHCTRLB.reg = DMAC_CHCTRLB_CMD_RESUME;
    DMAC->Channel[1].CHINTFLAG.bit.SUSP = 1;

    // Determina qué buffer se llenó y copia el contenido al buffer grande
    if (count) {
      audio_rec_callback(adc_buf_0, ADC_BUF_LEN);
    } else {
      audio_rec_callback(adc_buf_1, ADC_BUF_LEN);
    }

    // Alterna al siguiente buffer
    count = (count + 1) % 2;

    // Depuración: desactiva pin después de copiar el buffer
#ifdef DEBUG
    digitalWrite(debug_pin, LOW);
#endif
  }
}
```

La función ISR `DMAC1_Handler()` comprueba si el canal 1 del DMAC fue suspendido – lo cual sucede cuando se ha completado la grabación de un bloque de información. Si es así, llama a una función definida por el usuario `audio_rec_callback()`, donde copiamos el contenido del buffer DMA ADC a un buffer más grande utilizado para calcular características MFCC. Opcionalmente, también podemos aplicar post-procesamiento de audio en este paso.

## Cálculo de MFCC

La extracción de características MFCC compatible con la operación MFCC de TensorFlow se toma del repositorio de ARM para detección de palabras clave en microcontroladores ARM. Puedes encontrar el código original [aquí](https://github.com/ARM-software/ML-KWS-for-MCU).

La mayoría del cálculo de MFCC se realiza dentro del método `mfcc_compute(const int16_t *audio_data, float* mfcc_out)` de la clase `MFCC`. El método recibe un puntero a los datos de audio (en nuestro caso 320 puntos de datos) y un puntero a la posición específica del arreglo donde se almacenarán los MFCC. Para una porción de tiempo se realizan las siguientes operaciones:

Normaliza los datos a un rango de -1 a 1 y los rellena (en nuestro caso no hay relleno, ya que los datos tienen el tamaño exacto necesario para un segmento MFCC):

```cpp
  // Normalización al estilo TensorFlow de datos .wav al rango (-1,1)
  for (i = 0; i < frame_len; i++) {
    frame[i] = (float)audio_data[i]/(1<<15); 
  }
  // Rellena el resto con ceros
  memset(&frame[frame_len], 0, sizeof(float) * (frame_len_padded-frame_len));
```

Calcula la FFT Real (RFFT o [Transformada Rápida de Fourier Real](https://www.keil.com/pack/doc/CMSIS/DSP/html/group__RealFFT.html)) con la función de la librería ARM Math:

```cpp
  // Calcula la FFT
  arm_rfft_fast_f32(rfft, frame, buffer, 0);
```

Convierte los valores al espectro de potencia:

```cpp
  // frame está almacenado como [real0, realN/2-1, real1, im1, real2, im2, ...]
  int32_t half_dim = frame_len_padded/2;
  float first_energy = buffer[0] * buffer[0],
        last_energy =  buffer[1] * buffer[1];  // caso especial
  for (i = 1; i < half_dim; i++) {
    float real = buffer[i*2], im = buffer[i*2 + 1];
    buffer[i] = real*real + im*im;
  }
  buffer[0] = first_energy;
  buffer[half_dim] = last_energy;  
```

Luego aplicamos los *filtros de Mel* a las raíces cuadradas de los datos guardados en el *buffer* del paso anterior. Los bancos de filtros Mel se crean cuando se instancia la clase `MFCC`, dentro del método `create_mel_fbank()`. La cantidad de filtros, la frecuencia mínima y máxima se definen previamente por el usuario – y es **muy importante mantenerlos consistentes** entre el script de entrenamiento y el código de inferencia, de lo contrario habrá una caída significativa en la precisión.

```cpp
  float sqrt_data;
  // Aplicar bancos de filtros Mel
  for (bin = 0; bin < NUM_FBANK_BINS; bin++) {
    j = 0;
    float mel_energy = 0;
    int32_t first_index = fbank_filter_first[bin];
    int32_t last_index = fbank_filter_last[bin];
    for (i = first_index; i <= last_index; i++) {
      arm_sqrt_f32(buffer[i], &sqrt_data);
      mel_energy += (sqrt_data) * mel_fbank[bin][j++];
    }
    mel_energies[bin] = mel_energy;

    // Evitar logaritmo de cero
    if (mel_energy == 0.0)
      mel_energies[bin] = FLT_MIN;
  }
```

Finalmente, realizamos la [transformada discreta del coseno (DCT)](https://en.wikipedia.org/wiki/Discrete_cosine_transform) sobre el arreglo de energías Mel y escribimos el resultado en el arreglo de salida de características MFCC. En el script original también se realiza una cuantización en este paso, pero en este caso opté por usar el procedimiento de cuantización del ejemplo de TensorFlow Lite para Microcontroladores.

## Inferencia sobre características MFCC

Una vez que se procesa todo el audio de una muestra (3 segundos) y se convierte en características MFCC, convertimos todo el arreglo de MFCC de valores tipo `FLOAT32` a `INT8` y lo enviamos a la red neuronal. El proceso de inicialización e inferencia con TensorFlow Lite para Microcontroladores ya fue descrito en uno de mis artículos anteriores, así que no lo repetiré aquí.

Antes de compilar el *sketch*, asegúrate de tener todas las bibliotecas necesarias instaladas y de que las definiciones de placas Seeed SAMD estén en la versión **1.8.2 o superior** – esto es **muy importante** para que la biblioteca TensorFlow Lite compile sin errores. Compila y sube el *sketch* – si tienes el parámetro `DEBUG` en `false`, el código comenzará a ejecutarse inmediatamente y todo lo que necesitas hacer es presionar el botón C en la parte superior del Wio Terminal y decir una de las frases del conjunto de datos. Los resultados se mostrarán tanto en pantalla como en el monitor serial si el Wio Terminal está conectado a la computadora.

Aunque este curso está basado en Wio Terminal (ya que es muy adecuado para explorar Aprendizaje Automático Embebido), definitivamente es posible implementarlo en otros dispositivos. Lo más sencillo sería portar el código a otro microcontrolador Cortex M4F, como el **Nano33 BLE Sense** – lo único que se requeriría sería ajustar para usar un micrófono diferente. Portar a otros MCUs ARM también debería ser relativamente trivial.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-13-768x626.png" /></div>

Portar a otras arquitecturas, como **ESP32**, **K210** u otras, requeriría reimplementar los cálculos MFCC, ya que estos utilizan funciones específicas de ARM del CMSIS-DSP.

Hay múltiples mejoras que se pueden aplicar a las arquitecturas de redes neuronales básicas utilizadas en este proyecto. Algunas de ellas son:

* preentrenamiento del modelo
* secuencia a secuencia (*seq2seq*), LSTM, *attention*
* filtros entrenables
* AutoML, datos sintéticos

Echa un vistazo a esta charla sobre TinyML para conocer más sobre estos temas y encontrar enlaces a los artículos científicos relacionados:

<iframe width="560" height="315" src="https://www.youtube.com/embed/YmJrr1D191k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Te animamos a hacer un *fork* del repositorio, intentar entrenar con tu propio conjunto de datos e incluso probar arquitecturas más avanzadas o nuevas técnicas de entrenamiento de modelos. Si lo haces, ¡no dudes en mencionarme o hacer un *pull request* en Github!

## Referencias

* [Jupyter notebook](https://github.com/AIWintermuteAI/Speech-to-Intent-Micro/blob/main/jupyter_notebooks/prepare_data.ipynb)
* [Repositorio del proyecto en Github](https://github.com/AIWintermuteAI/Speech-to-Intent-Micro)
