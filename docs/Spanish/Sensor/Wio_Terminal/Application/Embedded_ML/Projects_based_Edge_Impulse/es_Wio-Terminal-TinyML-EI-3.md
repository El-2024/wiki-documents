---
description:  Audio scene recognition
title: Reconocimiento de Escenas de Audio
keywords:
- Wio_terminal 
- Embedded_ML 
- Projects_based_Edge_Impulse
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-TinyML-EI-3
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Wio Terminal Edge Impulse: Reconocimiento de Escenas de Audio con Micrófono Integrado

## Introducción

Este proyecto enseña a entrenar y desplegar un clasificador de escenas de audio con Wio Terminal y Edge Impulse.

### ¿Qué es la clasificación de escenas de audio?

Es un problema donde un modelo de ML predice la clase de un segmento de audio, por ejemplo:

* Bebé llorando
* Tos
* Perro ladrando

## Fundamentos del Procesamiento de Sonido

* El sonido es una vibración que se propaga en medios como aire o líquido.
* Un micrófono convierte estas vibraciones en señales eléctricas (voltajes proporcionales a amplitud).
* Para digitalizar el sonido, se muestrea a intervalos regulares (frecuencia de muestreo), por ejemplo, 8000 Hz significa 8000 muestras por segundo.
* La profundidad de bits define la resolución de cada muestra, p.ej., 8-bit o 16-bit.
* El sonido digital es una secuencia de números que representan amplitudes.

## Representación de Audio y Transformaciones

* El audio crudo es poco útil para análisis directo.
* La Transformada de Fourier (FFT) descompone la señal en frecuencias y amplitudes (espectro).
* Un espectrograma representa la evolución del espectro en el tiempo (eje X: tiempo, eje Y: frecuencia, color: amplitud).
* El mel espectrograma adapta la escala de frecuencias a la percepción humana (escala mel).
* Para reconocimiento más avanzado, se usan coeficientes cepstrales (no tratados en este proyecto).

## Recolección de Datos de Entrenamiento

* Para audio se requiere alta frecuencia de muestreo (ideal 16 kHz).

* Edge Impulse Data Forwarder no soporta esta velocidad, usa firmware especial para Wio Terminal con micrófono.

* Flashea el firmware adecuado para soporte de micrófono (ver tutorial inicial).

* Crea un nuevo proyecto en Edge Impulse y usa `edge-impulse-daemon` para conectar tu dispositivo.

* Registra muestras de tres clases:

  * `background` (sonidos ambiente no específicos)
  * `coughing` (tos)
  * `crying` (llanto)

* Graba 10 muestras por clase, duración 5000 ms cada una.

* Puedes grabar sonidos reproducidos por computadora o sonidos reales.

* Para más datos, descarga sonidos de internet, resamplea a 16 kHz y guarda en formato `.wav` usando script Python:

```python
import librosa
import sys
import soundfile as sf

input_filename = sys.argv[1]
output_filename = sys.argv[2]

data, samplerate = librosa.load(input_filename, sr=16000)
print(data.shape, samplerate)
sf.write(output_filename, data, samplerate, subtype='PCM_16')
```

* Divide los clips largos para conservar sólo segmentos relevantes (excepto background).

## Construcción del Modelo de Machine Learning

* Procesamiento disponible en Edge Impulse:

  * Raw (crudo, mucha data)
  * Spectral Analysis (FFT)
  * Spectrogram
  * MFE (Mel-Frequency Energy banks)

* Se recomienda usar MFE para este proyecto.

* Modelos probados: 1D Conv y 2D Conv; 1D Conv con MFE dio mejores resultados.

* Parámetros MFE ajustados (stride 0.02, low freq 0) lograron \~89.4% de precisión en validación.

## Despliegue en Wio Terminal

* Tras validar el modelo, prueba en **Live classification** con nuevos sonidos.
* Descarga como librería Arduino, instálala en el IDE Arduino.
* Abre el ejemplo `nano_33_ble_sense_microphone_continuous`.
* El ejemplo usa la librería PDM, pero Wio Terminal requiere usar DMA (Direct Memory Access) para capturar muestras del ADC sin intervención del MCU.

## Cambios en Código Arduino para Wio Terminal

* **Eliminar la librería PDM**:

```cpp
// Elimina esta línea
#include <PDM.h>
```

* **Agregar descriptor DMA y configuraciones**:
  (Ejemplo básico; usar según código completo disponible en el proyecto)

```cpp
#include "sam.h" // Definiciones SAM para DMA

// Definiciones para el DMA y buffers de captura
DmacDescriptor descriptor __attribute__((aligned(16)));

#define AUDIO_BUFFER_SIZE 1024
volatile int16_t audioBuffer[AUDIO_BUFFER_SIZE];
volatile bool audioBufferReady = false;

// Configurar DMA para leer ADC y llenar audioBuffer directamente

void setupDMA() {
  // Configura controladores DMA para capturar muestras ADC
  // Detalles específicos dependen del hardware SAMD51 (Wio Terminal)
}
```

* La captura continua por DMA permite grabar audio y ejecutar inferencia simultáneamente.

## Recomendaciones

* Consulta el código completo proporcionado en los materiales del curso para detalles de configuración DMA y ADC.
* Ajusta parámetros de muestreo y ventanas para optimizar precisión y rendimiento.
* Añade más datos para mejorar detección, especialmente para clases con menor precisión.

---

## Referencias

* Video tutorial oficial: [Wio Terminal Audio Scene Recognition](https://www.youtube.com/embed/2BISspenUng)
* Artículo sobre FFT: [betterexplained.com Fourier transform](https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/)
* Video explicativo FFT: [3Blue1Brown](https://youtu.be/spUNpyF58BY)
* Proyecto Edge Impulse: [Enlace de proyecto en Edge Impulse](https://studio.edgeimpulse.com/public/25382/latest)

```cpp
// Settings
#define DEBUG 1                 // Enable pin pulse during ISR  
enum {ADC_BUF_LEN = 4096};    // Size of one of the DMA double buffers
static const int debug_pin = 1; // Toggles each DAC ISR (if DEBUG is set to 1)

// DMAC descriptor structure
typedef struct {
  uint16_t btctrl;
  uint16_t btcnt;
  uint32_t srcaddr;
  uint32_t dstaddr;
  uint32_t descaddr;
} dmacdescriptor;
```

Luego, justo antes de la función setup, crea variables para los arreglos buffer, variables volátiles para pasar valores entre la ISR (rutina de servicio de interrupción) y el código principal, además del filtro Butterworth pasa altos, que aplicaremos a la señal para eliminar la mayor parte del componente DC en la señal del micrófono.

```cpp
// Variables globales - DMA y ADC
volatile uint8_t recording = 0;
volatile boolean results0Ready = false;
volatile boolean results1Ready = false;
uint16_t adc_buf_0[ADC_BUF_LEN];    // Arreglo de resultados ADC 0
uint16_t adc_buf_1[ADC_BUF_LEN];    // Arreglo de resultados ADC 1
volatile dmacdescriptor wrb[DMAC_CH_NUM] __attribute__ ((aligned (16)));          // Descriptores DMAC con write-back
dmacdescriptor descriptor_section[DMAC_CH_NUM] __attribute__ ((aligned (16)));    // Descriptores de canal DMAC
dmacdescriptor descriptor __attribute__ ((aligned (16)));                         // Descriptor temporal

// Filtro Butterworth pasa altos orden=1 alpha1=0.0125
class  FilterBuHp1
{
  public:
    FilterBuHp1()
    {
      v[0]=0.0;
    }
  private:
    float v[2];
  public:
    float step(float x) // clase II
    {
      v[0] = v[1];
      v[1] = (9.621952458291035404e-1f * x)
         + (0.92439049165820696974f * v[0]);
      return 
         (v[1] - v[0]);
    }
};

FilterBuHp1 filter;
```

Agrega tres bloques de código después de eso — el primero es una función callback llamada por la ISR (rutina de servicio de interrupción) cada vez que uno de los dos buffers se llena. Dentro de esa función leemos elementos del buffer de grabación (el que se acaba de llenar), los procesamos y colocamos en un buffer de inferencia.

```cpp
/*******************************************************************************
 * Rutinas de Servicio de Interrupción (ISR)
 */

/**
 * @brief      Copia datos de muestra en el buffer seleccionado y señala cuando el buffer está lleno
 *
 * @param[in]  *buf  Puntero al buffer fuente
 * @param[in]  buf_len  Número de muestras a copiar desde el buffer
 */
static void audio_rec_callback(uint16_t *buf, uint32_t buf_len) {

  static uint32_t idx = 0;

  // Copiar muestras del buffer DMA al buffer de inferencia
  if (recording) {
    for (uint32_t i = 0; i < buf_len; i++) {
  
      // Convertir valor ADC de 12 bits sin signo a valor de audio PCM de 16 bits (con signo)
      inference.buffers[inference.buf_select][inference.buf_count++] = filter.step(((int16_t)buf[i] - 1024) * 16);
      // Cambiar buffer doble si es necesario
      if (inference.buf_count >= inference.n_samples) {
        inference.buf_select ^= 1;
        inference.buf_count = 0;
        inference.buf_ready = 1;
      }
    }
  }
}
```

El siguiente bloque contiene la ISR en sí — se ejecuta mediante un temporizador en un período determinado, dentro de esta función revisamos si el canal 1 del DMAC está suspendido — si está suspendido significa que uno de los buffers para datos del micrófono se llenó y necesitamos copiar los datos, cambiar al otro buffer y reiniciar el DMAC ADC.

```cpp
/**
 * Rutina de Servicio de Interrupción (ISR) para DMAC 1
 */
void DMAC_1_Handler() {

  static uint8_t count = 0;

  // Verificar si el canal 1 del DMAC está suspendido (SUSP)
  if (DMAC->Channel[1].CHINTFLAG.bit.SUSP) {

     // Depuración: poner pin en alto antes de copiar el buffer
#if DEBUG
    digitalWrite(debug_pin, HIGH);
#endif

    // Reiniciar DMAC en canal 1 y limpiar bandera de interrupción SUSP
    DMAC->Channel[1].CHCTRLB.reg = DMAC_CHCTRLB_CMD_RESUME;
    DMAC->Channel[1].CHINTFLAG.bit.SUSP = 1;

    // Ver cuál buffer se llenó y volcar resultados en buffer grande
    if (count) {
      audio_rec_callback(adc_buf_0, ADC_BUF_LEN);
    } else {
      audio_rec_callback(adc_buf_1, ADC_BUF_LEN);
    }

    // Cambiar al siguiente buffer
    count = (count + 1) % 2;

    // Depuración: poner pin en bajo después de copiar el buffer
#if DEBUG
    digitalWrite(debug_pin, LOW);
#endif
  }
}
```

El siguiente bloque contiene la configuración para el ADC, DMAC y el temporizador que controla la ISR (rutina de servicio de interrupción).

```cpp
// Configurar DMA para muestrear del ADC a intervalos regulares
void config_dma_adc() {
  
  // Configurar DMA para muestrear del ADC a intervalos regulares (disparado por temporizador/contador)
  DMAC->BASEADDR.reg = (uint32_t)descriptor_section;                          // Especificar ubicación de los descriptores
  DMAC->WRBADDR.reg = (uint32_t)wrb;                                          // Especificar ubicación de los descriptores write back
  DMAC->CTRL.reg = DMAC_CTRL_DMAENABLE | DMAC_CTRL_LVLEN(0xf);                // Habilitar el periférico DMAC
  DMAC->Channel[1].CHCTRLA.reg = DMAC_CHCTRLA_TRIGSRC(TC5_DMAC_ID_OVF) |      // Configurar DMAC para disparar con el overflow del temporizador TC5
                                 DMAC_CHCTRLA_TRIGACT_BURST;                  // Transferencia en ráfaga DMAC
                                 
  descriptor.descaddr = (uint32_t)&descriptor_section[1];                     // Configurar descriptor circular
  descriptor.srcaddr = (uint32_t)&ADC1->RESULT.reg;                           // Tomar resultado del registro ADC0 RESULT
  descriptor.dstaddr = (uint32_t)adc_buf_0 + sizeof(uint16_t) * ADC_BUF_LEN;  // Colocarlo en el arreglo adc_buf_0
  descriptor.btcnt = ADC_BUF_LEN;                                             // Conteo de beats
  descriptor.btctrl = DMAC_BTCTRL_BEATSIZE_HWORD |                            // Tamaño del beat HWORD (16 bits)
                      DMAC_BTCTRL_DSTINC |                                    // Incrementar dirección destino
                      DMAC_BTCTRL_VALID |                                     // Descriptor válido
                      DMAC_BTCTRL_BLOCKACT_SUSPEND;                           // Suspender canal DMAC 0 tras transferencia de bloque
  memcpy(&descriptor_section[0], &descriptor, sizeof(descriptor));            // Copiar descriptor a la sección de descriptores
  
  descriptor.descaddr = (uint32_t)&descriptor_section[0];                     // Configurar descriptor circular
  descriptor.srcaddr = (uint32_t)&ADC1->RESULT.reg;                           // Tomar resultado del registro ADC0 RESULT
  descriptor.dstaddr = (uint32_t)adc_buf_1 + sizeof(uint16_t) * ADC_BUF_LEN;  // Colocarlo en el arreglo adc_buf_1
  descriptor.btcnt = ADC_BUF_LEN;                                             // Conteo de beats
  descriptor.btctrl = DMAC_BTCTRL_BEATSIZE_HWORD |                            // Tamaño del beat HWORD (16 bits)
                      DMAC_BTCTRL_DSTINC |                                    // Incrementar dirección destino
                      DMAC_BTCTRL_VALID |                                     // Descriptor válido
                      DMAC_BTCTRL_BLOCKACT_SUSPEND;                           // Suspender canal DMAC 0 tras transferencia de bloque
  memcpy(&descriptor_section[1], &descriptor, sizeof(descriptor));            // Copiar descriptor a la sección de descriptores

  // Configurar NVIC
  NVIC_SetPriority(DMAC_1_IRQn, 0);    // Prioridad NVIC para DMAC1 en 0 (más alta)
  NVIC_EnableIRQ(DMAC_1_IRQn);         // Habilitar interrupción DMAC1 en NVIC

  // Activar interrupción de suspensión (SUSP) en canal DMAC 1
  DMAC->Channel[1].CHINTENSET.reg = DMAC_CHINTENSET_SUSP;

  // Configurar ADC
  ADC1->INPUTCTRL.bit.MUXPOS = ADC_INPUTCTRL_MUXPOS_AIN12_Val; // Entrada analógica ADC0/AIN2 (PB08 - A4 en Metro M4)
  while(ADC1->SYNCBUSY.bit.INPUTCTRL);                // Esperar sincronización
  ADC1->SAMPCTRL.bit.SAMPLEN = 0x00;                  // Tiempo máximo de muestreo medio ciclo ADC (2.66us)
  while(ADC1->SYNCBUSY.bit.SAMPCTRL);                 // Esperar sincronización 
  ADC1->CTRLA.reg = ADC_CTRLA_PRESCALER_DIV128;       // Dividir reloj ADC GCLK entre 128 (48MHz/128=375kHz)
  ADC1->CTRLB.reg = ADC_CTRLB_RESSEL_12BIT |          // Resolución ADC 12 bits
                    ADC_CTRLB_FREERUN;                // Modo freerun ADC      
  while(ADC1->SYNCBUSY.bit.CTRLB);                    // Esperar sincronización
  ADC1->CTRLA.bit.ENABLE = 1;                         // Habilitar ADC
  while(ADC1->SYNCBUSY.bit.ENABLE);                   // Esperar sincronización
  ADC1->SWTRIG.bit.START = 1;                         // Inicio conversión ADC por software
  while(ADC1->SYNCBUSY.bit.SWTRIG);                   // Esperar sincronización

  // Habilitar canal DMA 1
  DMAC->Channel[1].CHCTRLA.bit.ENABLE = 1;

  // Configurar Timer/Counter 5
  GCLK->PCHCTRL[TC5_GCLK_ID].reg = GCLK_PCHCTRL_CHEN |        // Habilitar canal periférico para TC5
                                   GCLK_PCHCTRL_GEN_GCLK1;    // Conectar reloj genérico 1 a 48MHz
   
  TC5->COUNT16.WAVE.reg = TC_WAVE_WAVEGEN_MFRQ;               // Modo Match Frequency (MFRQ)
  TC5->COUNT16.CC[0].reg = 3000 - 1;                          // Trigger a 16 kHz: (4Mhz / 16000) - 1
  while (TC5->COUNT16.SYNCBUSY.bit.CC0);                      // Esperar sincronización

  // Iniciar Timer/Counter 5
  TC5->COUNT16.CTRLA.bit.ENABLE = 1;                          // Habilitar temporizador TC5
  while (TC5->COUNT16.SYNCBUSY.bit.ENABLE);                   // Esperar sincronización
}
```

Agrega la condición para debug arriba de la función setup:

```cpp
  // Configurar pin para toggle en interrupción DMA
#if DEBUG
  pinMode(debug_pin, OUTPUT);
#endif
```

Luego en la función setup, después de `run_classifier_init();` agrega el siguiente código que crea buffers de inferencia, configura DMA y comienza la grabación poniendo la variable global volátil `recording` en 1.

```cpp
  // Crear buffer doble para inferencia
  inference.buffers[0] = (int16_t *)malloc(EI_CLASSIFIER_SLICE_SIZE * sizeof(int16_t));
  
  if (inference.buffers[0] == NULL) {
    ei_printf("ERROR: Falló la creación del buffer de inferencia 0");
    return;
  }
  inference.buffers[1] = (int16_t *)malloc(EI_CLASSIFIER_SLICE_SIZE * 
      sizeof(int16_t));
  if (inference.buffers[1] == NULL) {
    ei_printf("ERROR: Falló la creación del buffer de inferencia 1");
    free(inference.buffers[0]);
    return;
  }

  // Configurar parámetros de inferencia
  inference.buf_select = 0;
  inference.buf_count = 0;
  inference.n_samples = EI_CLASSIFIER_SLICE_SIZE;
  inference.buf_ready = 0;

  // Configurar DMA para muestrear ADC a 16kHz (inicio inmediato)
  config_dma_adc();

  // Iniciar grabación en buffers de inferencia
  recording = 1;
}
```

Elimina las líneas `PDM.end();` y `free(sampleBuffer);` de la función `microphone_inference_end(void)`, así como las funciones `microphone_inference_start(uint32_t n_samples)` y `pdm_data_ready_inference_callback(void)`, ya que no las estamos usando.

Después de compilar y subir el código, abre el monitor serial y verás las probabilidades de cada clase impresas. ¡Reproduce algunos sonidos o tose cerca del Wio Terminal para probar la precisión!

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/cough_r.png"/></div>

Aquí tienes la traducción al español del bloque completo sobre la integración con **Blynk**, manteniendo formato Markdown, imágenes y snippets de código intactos para su uso directo:

## Integración con Blynk

Como el Wio Terminal puede conectarse a Internet, podemos llevar esta simple demostración a una aplicación IoT real utilizando [Blynk](https://blynk.io).

<div align="center"><img width="600" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/b641e2030c1c47fbc7161c98a7e5d998.jpg"/></div>

Blynk es una plataforma que te permite construir interfaces rápidamente para controlar y monitorear tus proyectos de hardware desde tus dispositivos iOS y Android.  
En este caso, usaremos Blynk para enviar notificaciones a nuestro smartphone si el Wio Terminal detecta sonidos que debamos atender.

Para comenzar con Blynk, descarga la app, registra una nueva cuenta y crea un nuevo proyecto.  
Agrega un elemento de notificación push y presiona el botón de **play**.

<div> <img width="200" align="left" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/app1.png" /> </div>

<img width="200" align="right" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/app2.png" />

<p> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> </p>

Luego asegúrate de haber configurado las bibliotecas WiFi y el firmware del Wio Terminal, siguiendo la [guía aquí](https://wiki.seeedstudio.com/Wio-Terminal-Blynk/).  
Descarga la biblioteca de Blynk como se indica en ese tutorial.

Después, prueba tu configuración compilando y subiendo un ejemplo simple con un botón — asegúrate de cambiar el SSID, la contraseña de WiFi y tu token API de Blynk, el cual puedes obtener desde la app.

<div align="center"><img width="200" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/app3.png"/></div>

```cpp
#define BLYNK_PRINT Serial
#include <rpcWiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleWioTerminal.h>

char auth[] = "token";
char ssid[] = "ssid";
char pass[] = "password";

void checkPin()
{
  int isButtonPressed = !digitalRead(WIO_KEY_A);
  if (isButtonPressed) {
    Serial.println("Se presionó el botón.");
    Blynk.notify("¡Yaaay... se presionó el botón!");
  }
}

void setup()
{
  Serial.begin(115200);
  Blynk.begin(auth, ssid, pass);
  pinMode(WIO_KEY_A, INPUT_PULLUP);
}

void loop()
{
  Blynk.run();
  checkPin();
}
```

Si el código compila y la prueba es exitosa (presionar el botón superior izquierdo del Wio Terminal genera una notificación en tu teléfono), entonces puedes pasar a la siguiente etapa.

<div align="center"><img width="200" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/button.png"/></div>

Vamos a mover todo el código de inferencia de la red neuronal a una función separada y llamarla dentro de `loop()`, justo después de `Blynk.run()`.
Al igual que antes, verificamos las probabilidades de predicción de la red neuronal y, si son mayores que el umbral para cierta clase, llamamos a la función `Blynk.notify()`, la cual —como habrás adivinado— envía una notificación a tu dispositivo móvil.

<div align="center"><img width="600" src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/cough_a.png"/></div>

Puedes encontrar el código completo que combina la inferencia de la red neuronal con las notificaciones de Blynk en el repositorio de GitHub de este proyecto.

## Referencias

* [Proyecto público en Edge Impulse](https://studio.edgeimpulse.com/public/25382/latest)
* [Repositorio del proyecto en GitHub](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_2_Audio_Scene_Recognition)
* [Proyecto original que utiliza DMA ADC para grabación de sonido con Wio Terminal](https://github.com/ShawnHymel/ei-keyword-spotting/blob/master/embedded-demos/arduino/wio-terminal/wio-terminal.ino)
