---
description: I2S test with XIAO ESP32S3
title: Prueba I2S
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_i2s_test
last_update:
  date: 07/19/2025
  author: Guillermo
---

Este proyecto es un sketch de prueba para verificar la funcionalidad de la interfaz I2S en la placa ReSpeaker Lite, que integra un microcontrolador [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) y un arreglo de micrófonos. El sketch genera una señal de audio cuadrada, la escribe en la interfaz I2S y luego lee las muestras desde el arreglo de micrófonos integrado para comprobar la integridad de la transmisión y recepción I2S.

### Funcionalidad

El sketch comienza inicializando la comunicación serial y configurando los pines I2S. Genera una señal de audio cuadrada basada en la frecuencia y amplitud especificadas. Las muestras de audio generadas se escriben en la interfaz I2S utilizando la función `I2S.write()`.

Luego, el sketch lee las muestras desde el arreglo de micrófonos a través de la interfaz I2S utilizando la función `I2S.read()` y cuenta cuántas muestras distintas de cero se recibieron.

### Código

```cpp
#include <ESP_I2S.h>
#include <wav_header.h>

I2SClass I2S;

const int sampleRate = 16000;                         // Frecuencia de muestreo en Hz
const int frequency = 440;                            // Frecuencia de la onda cuadrada en Hz
const int amplitude = 500;                            // Amplitud de la onda cuadrada
int32_t sample = amplitude;                           // Valor actual de la muestra
const int halfWavelength = sampleRate / frequency;    // Media longitud de onda

int count = 0;
int i2s_read = 0;
bool i2s_test = true;

void setup() {
  Serial.begin(115200);
  while(!Serial);             // Esperar a que se conecte el puerto serial

  I2S.setPins(8, 7, 43, 44);  // Configurar los pines I2S
  if (!I2S.begin(I2S_MODE_STD, sampleRate, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_STEREO)){
    Serial.println("¡Error al inicializar I2S!");
    while(1);                 // Detener si falla la inicialización
  }
}

void loop() {
  if(i2s_test){
    Serial.println("¡Prueba de I2S!");

    // Generar y escribir muestras de onda cuadrada
    for(int i = 0; i < 32000; i++){
      if(count % halfWavelength == 0){
        sample = -sample;    // Cambiar valor para crear onda cuadrada
      }
      I2S.write(sample);     // Escribir muestra en el canal derecho
      count++;
    }

    // Leer muestras desde I2S y contar las que son distintas de cero
    i2s_read=0;
    for(int i = 0; i < 32000; i++){
      int sample_read = I2S.read();
      Serial.print(sample_read);
      Serial.print(" ");
      if(sample_read != 0 && sample_read != 0xFFFF){
        i2s_read++;
      }
    }
    Serial.println();

    // Comprobar si el número de muestras válidas supera un umbral
    if(i2s_read > 16000){
      Serial.println("¡Recepción I2S exitosa!");
    } else{
      i2s_read = 0;
      for(int i = 0; i < 32000; i++){
        int sample_read = I2S.read();
        if (sample_read != 0 && sample_read != 0xFFFF){
          i2s_read++;
        }
      }
      if(i2s_read > 16000)
        Serial.println("¡Recepción I2S exitosa!");
      else
        Serial.println("¡Fallo en recepción I2S!");
    }

    Serial.println("FIN");
    i2s_test = false;
  }
}
```

Si el número de muestras distintas de cero recibidas supera un umbral (en este caso, 16000), se considera que la recepción I2S fue exitosa. De lo contrario, se considera un fallo.

Los resultados de la prueba, incluyendo los valores de las muestras I2S y el estado de éxito/fallo, se imprimen en el Monitor Serial.

Abre el `Monitor Serial` para ver el resultado de la prueba.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/i2s-test-pass.png" alt="pir" width={800} height="auto" /></p>


