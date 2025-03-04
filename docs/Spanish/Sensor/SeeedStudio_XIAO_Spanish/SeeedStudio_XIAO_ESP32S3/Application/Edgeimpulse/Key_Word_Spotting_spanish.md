---
description:  Key Word Spotting
title: Detección de Palabras Clave
keywords:
- tinyml course
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /tinyml_course_Key_Word_Spotting_spanish
last_update:
  date: 02/10/2025
  author: Guillermo
---

# Detección de Palabras Clave con XIAO ESP32S3-Sense

Este tutorial te guiará a través de la implementación de un sistema de Detección de Palabras Clave (KWS) utilizando TinyML en la placa de microcontrolador XIAO ESP32S3 Sense, con la ayuda de Edge Impulse para la recopilación de datos y el entrenamiento del modelo. KWS es esencial para los sistemas de reconocimiento de voz, y con el poder de TinyML, es posible en dispositivos más pequeños y de bajo consumo. ¡Vamos a construir nuestro propio sistema KWS utilizando Edge Impulse y XIAO ESP32S3 Sense!

## 1. Comenzando

Antes de comenzar con este proyecto, sigue los pasos de preparación a continuación para preparar el software y hardware necesarios para este proyecto.

### Hardware

Para llevar a cabo este proyecto con éxito, necesitarás preparar el siguiente hardware:

- XIAO ESP32S3 Sense
- Tarjeta microSD (no mayor a 32GB)
- Lector de tarjeta microSD
- Cable de datos USB-C

Inserta la tarjeta microSD en la ranura de la tarjeta microSD. Ten en cuenta la dirección de inserción; el lado con los contactos dorados debe estar hacia adentro.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

### Software

Si es la primera vez que usas el XIAO ESP32S3 Sense, te sugerimos que antes de comenzar, leas los siguientes dos wikis para aprender a utilizarlo.

- [Introducción a Seeed Studio XIAO ESP32S3 (Sense)](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started_spanish/)
- [Uso del micrófono de Seeed Studio XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/xiao_esp32s3_sense_mic_spanish/)

## 2. Captura de Datos de Audio (offline)

### Paso 1. Guardar muestras de sonido grabadas como archivos de audio .wav en una tarjeta microSD.

Utilizaremos el lector de tarjeta SD integrado para guardar archivos de audio .wav. Primero, necesitamos habilitar la PSRAM del XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/94.png" style={{width:600, height:'auto'}}/></div>

Luego compila y sube el siguiente programa al XIAO ESP32S3.

:::tip
Este código graba audio utilizando la interfaz I2S de la placa Seeed XIAO ESP32S3 Sense, guarda la grabación como un archivo .wav en una tarjeta SD y permite controlar el proceso de grabación mediante comandos enviados desde el monitor serial. El nombre del archivo de audio es personalizable (debe coincidir con las etiquetas de clase que se utilizarán en el entrenamiento) y se pueden realizar múltiples grabaciones, cada una guardada en un archivo nuevo. El código también incluye funcionalidad para aumentar el volumen de las grabaciones.
:::

```cpp
/* 
 * Grabadora WAV para Seeed XIAO ESP32S3 Sense 
 * 
 * NOTA: Para ejecutar este código, necesitaremos usar la función PSRAM 
 * del chip ESP-32, así que por favor actívala antes de cargar el código.
 * Herramientas>PSRAM: "OPI PSRAM"
 * 
 * Adaptado por M.Rovai @Mayo23 a partir del código original de Seeed
*/

#include <I2S.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// realiza cambios según sea necesario
#define RECORD_TIME   10  // segundos, El valor máximo es 240
#define WAV_FILE_NAME "data"

// no cambies para obtener los mejores resultados
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2

int fileNumber = 1;
String baseFileName;
bool isRecording = false;

void setup() {
  Serial.begin(115200);
  while (!Serial) ;
  
  I2S.setAllPins(-1, 42, 41, -1, -1);
  if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
    Serial.println("¡Error al inicializar I2S!");
    while (1) ;
  }
  if(!SD.begin(21)){
    Serial.println("¡Error al montar la tarjeta SD!");
    while (1) ;
  }
  Serial.printf("Ingresa con el nombre de la etiqueta\n");
  //record_wav();
}

void loop() {
  if (Serial.available() > 0) {
    String command = Serial.readStringUntil('\n');
    command.trim();
    if (command == "rec") {
      isRecording = true;
    } else {
      baseFileName = command;
      fileNumber = 1; // reiniciar el número de archivo cada vez que se establece un nuevo nombre base
      Serial.printf("Envía 'rec' para comenzar a grabar la etiqueta \n");
    }
  }
  if (isRecording && baseFileName != "") {
    String fileName = "/" + baseFileName + "." + String(fileNumber) + ".wav";
    fileNumber++;
    record_wav(fileName);
    delay(1000); // espera para evitar grabar múltiples archivos al mismo tiempo
    isRecording = false;
  }
}

void record_wav(String fileName)
{
  uint32_t sample_size = 0;
  uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;
  uint8_t *rec_buffer = NULL;
  Serial.printf("Comienza la grabación ...\n");
   
  File file = SD.open(fileName.c_str(), FILE_WRITE);
  // Escribir el encabezado en el archivo WAV
  uint8_t wav_header[WAV_HEADER_SIZE];
  generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  file.write(wav_header, WAV_HEADER_SIZE);

  // PSRAM malloc para la grabación
  rec_buffer = (uint8_t *)ps_malloc(record_size);
  if (rec_buffer == NULL) {
    Serial.printf("¡malloc falló!\n");
    while(1) ;
  }
  Serial.printf("Buffer: %d bytes\n", ESP.getPsramSize() - ESP.getFreePsram());

  // Comienza la grabación
  esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
  if (sample_size == 0) {
    Serial.printf("¡Grabación fallida!\n");
  } else {
    Serial.printf("Se grabaron %d bytes\n", sample_size);
  }

  // Aumentar volumen
  for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
    (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
  }

  // Escribir los datos en el archivo WAV
  Serial.printf("Escribiendo en el archivo ...\n");
  if (file.write(rec_buffer, record_size) != record_size)
    Serial.printf("¡Error al escribir el archivo!\n");

  free(rec_buffer);
  file.close();
  Serial.printf("Grabación completa: \n");
  Serial.printf("Envía 'rec' para una nueva muestra o ingresa una nueva etiqueta\n\n");
}

void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // Consulta esto como referencia: http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // Format
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (16 para PCM)
    0x01, 0x00, // AudioFormat (1 para PCM)
    0x01, 0x00, // NumChannels (1 canal)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate
    0x02, 0x00, // BlockAlign
    0x10, 0x00, // BitsPerSample (16 bits)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}
```

Ahora, sube el código al XIAO y obtén muestras de las palabras clave (hola y parar). También puedes capturar ruido y otras palabras. El monitor serial te indicará que ingreses la etiqueta que deseas grabar.

Envía la etiqueta (por ejemplo, **hola**). El programa esperará otro comando: **rec**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/2.png" style={{width:600, height:'auto'}}/></div>

Y el programa comenzará a grabar nuevas muestras cada vez que se envíe el comando **rec**. Los archivos se guardarán como hello.1.wav, hello.2.wav, hello.3.wav, etc., hasta que se envíe una nueva etiqueta (por ejemplo, **parar**). En este caso, deberás enviar el comando **rec** para cada nueva muestra, que se guardará como stop.1.wav, stop.2.wav, stop.3.wav, etc.

Finalmente, obtendremos los archivos guardados en la tarjeta SD.

:::note
Te recomendamos que tengas suficientes sonidos para cada muestra de etiqueta. Puedes repetir tus palabras clave varias veces durante cada sesión de grabación de diez segundos, y segmentaremos las muestras en los siguientes pasos. Sin embargo, debe haber algo de espacio entre las palabras clave.
:::

## 3. Adquisición de datos para entrenamiento

### Paso 2. Subir los datos de sonido recopilados

Cuando el conjunto de datos en bruto esté definido y recopilado, debemos iniciar un nuevo proyecto en [Edge Impulse](https://edgeimpulse.com/). Una vez creado el proyecto, selecciona la herramienta **Upload Existing Data** en la sección **Data Acquisition**. Luego, elige los archivos que se cargarán.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/3.png" style={{width:1000, height:'auto'}}/></div>

Y cárgalos al Studio (puedes dividir automáticamente los datos en entrenamiento/prueba). Repite este proceso para todas las clases y todos los datos sin procesar.

Todos los datos del conjunto tienen una longitud de 1 segundo, pero las muestras grabadas en la sección anterior tienen 10 segundos y deben dividirse en muestras de 1 segundo para ser compatibles. Haz clic en los tres puntos después del nombre de la muestra y selecciona **Split sample**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/5.png" style={{width:600, height:'auto'}}/></div>

Una vez dentro de la herramienta, divide los datos en registros de 1 segundo. Si es necesario, agrega o elimina segmentos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/4.png" style={{width:1000, height:'auto'}}/></div>

Este procedimiento debe repetirse para todas las muestras.

### Paso 3. Creación del Impulso (Preprocesamiento / Definición del modelo)

Un impulso toma datos sin procesar, utiliza procesamiento de señales para extraer características y luego usa un bloque de aprendizaje para clasificar los nuevos datos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/6.png" style={{width:1000, height:'auto'}}/></div>

Primero, tomaremos los puntos de datos con una ventana de 1 segundo, aumentando los datos y deslizando esa ventana cada 500 ms. Tenga en cuenta que la opción **rellenar con ceros** está activada. Esto es importante para llenar con ceros las muestras menores a 1 segundo (en algunos casos, reduje la ventana de 1000 ms en la **herramienta de división** para evitar ruidos y picos).

Cada muestra de audio de 1 segundo debe ser preprocesada y convertida en una imagen (por ejemplo, 13 x 49 x 1). Usaremos MFCC, que extrae características de las señales de audio usando los Coeficientes Cepstrales en Frecuencia Mel (MFCC, por sus siglas en inglés), los cuales son excelentes para la voz humana.

A continuación, seleccionamos **KERAS** para la clasificación, que construye nuestro modelo desde cero realizando Clasificación de Imágenes utilizando Redes Neuronales Convolucionales.

### Paso 4. Preprocesamiento (MFCC)

El siguiente paso es crear las imágenes que serán entrenadas en la siguiente fase. Podemos mantener los valores predeterminados de los parámetros o aprovechar la opción de DSP **Autotuneparameters**, lo que haremos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/7.png" style={{width:1000, height:'auto'}}/></div>

## 4. Construcción de un modelo de aprendizaje automático

### Paso 5. Diseño y Entrenamiento del Modelo

Usaremos un modelo de Red Neuronal Convolucional (CNN). La arquitectura básica se define con dos bloques de Conv1D + MaxPooling (con 8 y 16 neuronas, respectivamente) y una tasa de Dropout de 0.25. Y en la última capa, después de aplanar, cuatro neuronas, una para cada clase.

Como hiperparámetros, tendremos una Tasa de Aprendizaje de 0.005 y un modelo que será entrenado por 100 épocas. También incluiremos aumento de datos, como algo de ruido. El resultado parece estar bien.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/8.png" style={{width:600, height:'auto'}}/></div>

## 5. Despliegue en XIAO ESP32S3 Sense

### Paso 6. Despliegue en XIAO ESP32S3 Sense

Edge Impulse empaquetará todas las bibliotecas necesarias, las funciones de preprocesamiento y los modelos entrenados, descargándolos a tu computadora. Debes seleccionar la opción Biblioteca de Arduino y, en la parte inferior, seleccionar Cuantizado (Int8) y presionar el botón Construir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/9.png" style={{width:600, height:'auto'}}/></div>

Aunque Edge Impulse no ha lanzado su SDK para ESP32S3 utilizando el acelerador ESP NN, gracias a Dmitry Maslov, podemos restaurar y corregir sus optimizaciones de ensamblaje para el ESP32-S3. Esta solución aún no es oficial, y EI la incluirá en su SDK una vez que resuelvan los conflictos con otras placas.

:::caution
Por ahora, esto solo funciona con la versión que no es EON. Por lo tanto, también debes mantener la opción **Habilitar el compilador EON** sin seleccionar.
:::

Cuando se seleccione el botón de Construir, se creará un archivo Zip y se descargará a tu computadora.

Antes de usar la biblioteca descargada, necesitamos habilitar el **Acelerador ESP NN**. Para ello, puedes descargar una versión preliminar desde el [GitHub del proyecto](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/blob/main/ESP-NN.zip), descomprimirla y reemplazar la carpeta ESP NN con ella en la siguiente ruta: `src/edge-impulse-sdk/porting/espressif/ESP-NN`, dentro de tu carpeta de bibliotecas de Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/10.png" style={{width:800, height:'auto'}}/></div>

En tu IDE de Arduino, ve a la pestaña de Sketch y selecciona la opción Añadir biblioteca .ZIP, y luego selecciona el archivo .zip descargado de Edge Impulse.

Puedes encontrar el código completo en el [GitHub del proyecto](https://github.com/Mjrovai/XIAO-ESP32S3-Sense/tree/main/xiao_esp32s3_microphone_led). Carga el sketch a tu placa y prueba algunas inferencias reales.

:::tip
La biblioteca importada en el código necesita ser actualizada con el nombre de tu biblioteca. La lógica para encender también debe modificarse según el orden de las etiquetas en las que realmente entrenaste.
:::

```cpp
/* Edge Impulse Arduino examples
 * Copyright (c) 2022 EdgeImpulse Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// If your target is limited in memory remove this macro to save 10K RAM
#define EIDSP_QUANTIZE_FILTERBANK   0

/*
 ** NOTE: If you run into TFLite arena allocation issue.
 **
 ** This may be due to may dynamic memory fragmentation.
 ** Try defining "-DEI_CLASSIFIER_ALLOCATION_STATIC" in boards.local.txt (create
 ** if it doesn't exist) and copy this file to
 ** `<ARDUINO_CORE_INSTALL_PATH>/arduino/hardware/<mbed_core>/<core_version>/`.
 **
 ** See
 ** (https://support.arduino.cc/hc/en-us/articles/360012076960-Where-are-the-installed-cores-located-)
 ** to find where Arduino installs cores on your machine.
 **
 ** If the problem persists then there's not enough memory for this model and application.
 */

/* Includes ---------------------------------------------------------------- */
#include <XIAO-ESP32S3-KWS_inferencing.h>

#include <I2S.h>
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16

#define LED_BUILT_IN 21 

/** Audio buffers, pointers and selectors */
typedef struct {
    int16_t *buffer;
    uint8_t buf_ready;
    uint32_t buf_count;
    uint32_t n_samples;
} inference_t;

static inference_t inference;
static const uint32_t sample_buffer_size = 2048;
static signed short sampleBuffer[sample_buffer_size];
static bool debug_nn = false; // Set this to true to see e.g. features generated from the raw signal
static bool record_status = true;

/**
 * @brief      Arduino setup function
 */
void setup()
{
    // put your setup code here, to run once:
    Serial.begin(115200);
    // comment out the below line to cancel the wait for USB connection (needed for native USB)
    while (!Serial);
    Serial.println("Edge Impulse Inferencing Demo");

    pinMode(LED_BUILT_IN, OUTPUT); // Set the pin as output
    digitalWrite(LED_BUILT_IN, HIGH); //Turn off
    
    I2S.setAllPins(-1, 42, 41, -1, -1);
    if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
      Serial.println("Failed to initialize I2S!");
    while (1) ;
  }
    
    // summary of inferencing settings (from model_metadata.h)
    ei_printf("Inferencing settings:\n");
    ei_printf("\tInterval: ");
    ei_printf_float((float)EI_CLASSIFIER_INTERVAL_MS);
    ei_printf(" ms.\n");
    ei_printf("\tFrame size: %d\n", EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE);
    ei_printf("\tSample length: %d ms.\n", EI_CLASSIFIER_RAW_SAMPLE_COUNT / 16);
    ei_printf("\tNo. of classes: %d\n", sizeof(ei_classifier_inferencing_categories) / sizeof(ei_classifier_inferencing_categories[0]));

    ei_printf("\nStarting continious inference in 2 seconds...\n");
    ei_sleep(2000);

    if (microphone_inference_start(EI_CLASSIFIER_RAW_SAMPLE_COUNT) == false) {
        ei_printf("ERR: Could not allocate audio buffer (size %d), this could be due to the window length of your model\r\n", EI_CLASSIFIER_RAW_SAMPLE_COUNT);
        return;
    }

    ei_printf("Recording...\n");
}

/**
 * @brief      Arduino main function. Runs the inferencing loop.
 */
void loop()
{
    bool m = microphone_inference_record();
    if (!m) {
        ei_printf("ERR: Failed to record audio...\n");
        return;
    }

    signal_t signal;
    signal.total_length = EI_CLASSIFIER_RAW_SAMPLE_COUNT;
    signal.get_data = &microphone_audio_signal_get_data;
    ei_impulse_result_t result = { 0 };

    EI_IMPULSE_ERROR r = run_classifier(&signal, &result, debug_nn);
    if (r != EI_IMPULSE_OK) {
        ei_printf("ERR: Failed to run classifier (%d)\n", r);
        return;
    }

    int pred_index = 0;     // Initialize pred_index
    float pred_value = 0;   // Initialize pred_value

    // print the predictions
    ei_printf("Predictions ");
    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: ", result.classification[ix].label);
        ei_printf_float(result.classification[ix].value);
        ei_printf("\n");

        if (result.classification[ix].value > pred_value){
           pred_index = ix;
           pred_value = result.classification[ix].value;
      }
    }
    // Display inference result
    if (pred_index == 3){
      digitalWrite(LED_BUILT_IN, LOW); //Turn on
    }
    else{
      digitalWrite(LED_BUILT_IN, HIGH); //Turn off
    }

    
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    anomaly score: ");
    ei_printf_float(result.anomaly);
    ei_printf("\n");
#endif
}

static void audio_inference_callback(uint32_t n_bytes)
{
    for(int i = 0; i < n_bytes>>1; i++) {
        inference.buffer[inference.buf_count++] = sampleBuffer[i];

        if(inference.buf_count >= inference.n_samples) {
          inference.buf_count = 0;
          inference.buf_ready = 1;
        }
    }
}

static void capture_samples(void* arg) {

  const int32_t i2s_bytes_to_read = (uint32_t)arg;
  size_t bytes_read = i2s_bytes_to_read;

  while (record_status) {

    /* read data at once from i2s - Modified for XIAO ESP2S3 Sense and I2S.h library */
    // i2s_read((i2s_port_t)1, (void*)sampleBuffer, i2s_bytes_to_read, &bytes_read, 100);
    esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, (void*)sampleBuffer, i2s_bytes_to_read, &bytes_read, 100);

    if (bytes_read <= 0) {
      ei_printf("Error in I2S read : %d", bytes_read);
    }
    else {
        if (bytes_read < i2s_bytes_to_read) {
        ei_printf("Partial I2S read");
        }

        // scale the data (otherwise the sound is too quiet)
        for (int x = 0; x < i2s_bytes_to_read/2; x++) {
            sampleBuffer[x] = (int16_t)(sampleBuffer[x]) * 8;
        }

        if (record_status) {
            audio_inference_callback(i2s_bytes_to_read);
        }
        else {
            break;
        }
    }
  }
  vTaskDelete(NULL);
}

/**
 * @brief      Init inferencing struct and setup/start PDM
 *
 * @param[in]  n_samples  The n samples
 *
 * @return     { description_of_the_return_value }
 */
static bool microphone_inference_start(uint32_t n_samples)
{
    inference.buffer = (int16_t *)malloc(n_samples * sizeof(int16_t));

    if(inference.buffer == NULL) {
        return false;
    }

    inference.buf_count  = 0;
    inference.n_samples  = n_samples;
    inference.buf_ready  = 0;

//    if (i2s_init(EI_CLASSIFIER_FREQUENCY)) {
//        ei_printf("Failed to start I2S!");
//    }

    ei_sleep(100);

    record_status = true;

    xTaskCreate(capture_samples, "CaptureSamples", 1024 * 32, (void*)sample_buffer_size, 10, NULL);

    return true;
}

/**
 * @brief      Wait on new data
 *
 * @return     True when finished
 */
static bool microphone_inference_record(void)
{
    bool ret = true;

    while (inference.buf_ready == 0) {
        delay(10);
    }

    inference.buf_ready = 0;
    return ret;
}

/**
 * Get raw audio signal data
 */
static int microphone_audio_signal_get_data(size_t offset, size_t length, float *out_ptr)
{
    numpy::int16_to_float(&inference.buffer[offset], out_ptr, length);

    return 0;
}

/**
 * @brief      Stop PDM and release buffers
 */
static void microphone_inference_end(void)
{
    free(sampleBuffer);
    ei_free(inference.buffer);
}

#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_MICROPHONE
#error "Invalid model for current sensor."
#endif
```

La idea es que el LED se encienda siempre que se detecte la palabra clave **HELLO**. De la misma manera, en lugar de encender un LED, esto podría ser un "disparador" para un dispositivo externo, como vimos en la introducción.

## Tareas Pendientes

- [ ] Construir tu propio proyecto KWS y ejecutarlo en XIAO ESP32S3 Sense.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3_kws/11.png" style={{width:700, height:'auto'}}/></div>

## Agradecimientos Especiales

Agradecimientos especiales a **[MJRoBot (Marcelo Rovai)](https://mjrobot.org/)** por el contenido del tutorial sobre el acceso de XIAO ESP32S3 Sense a Edge Impulse. El artículo original es muy detallado y contiene mucho conocimiento sobre aprendizaje automático.

Si deseas leer el contenido original de este artículo, puedes ir directamente al artículo original desplazándote hacia abajo.

- [TinyML Made Easy: KeyWord Spotting (KWS)](https://www.hackster.io/mjrobot/tinyml-made-easy-keyword-spotting-kws-5fa6e7#toc-capturing--offline--audio-data-with-the-xiao-esp32s3-sense-5)

MJRoBot también tiene muchos proyectos interesantes sobre el XIAO ESP32S3.

- [Explorando el Aprendizaje Automático con el nuevo XIAO ESP32S3](https://www.hackster.io/mjrobot/exploring-machine-learning-with-the-new-xiao-esp32s3-6463e5)
- [TinyML Made Easy: Clasificación de Imágenes](https://www.hackster.io/mjrobot/tinyml-made-easy-image-classification-cb42ae)