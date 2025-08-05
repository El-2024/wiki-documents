---
description: ReSpeaker Lite Volume Adjustment
title: Ajuste de Volumen
keywords:
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_volume
last_update:
  date: 07/20/2025
  author: Guillermo
---

### Funcionalidad

Este proyecto de ejemplo demuestra cómo ajustar el volumen del ReSpeaker Lite mediante comandos I2C.

Dirección I2C del `AIC3204`: `0x18`

### Código


```cpp
#include "AudioTools.h"
#include "Wire.h"

#define AIC3204_ADDR  0x18

AudioInfo info_16k(16000, 2, 32);
SineWaveGenerator<int16_t> sineWave(1000);                // Subclase de SoundGenerator con amplitud máxima de 32000
GeneratedSoundStream<int16_t> sound(sineWave);            // Flujo generado a partir de la onda senoidal

I2SStream out; 
I2SConfig config_i2s1;

// FormatConverterStream converter(in);
// StreamCopy copier(out, converter);
StreamCopy copier(out, sound);

uint32_t now_time = 0;
uint8_t level_index = 0;
int8_t level[10] = {0x3A, 0x3B, 0x3C, 0x3D, 0x3E, 0x3F, 0x00, 0x01, 0x02, 0x03};

// Función para escribir en registros del AIC3204 vía I2C
void aic3204_write_reg(uint8_t reg, uint8_t value)
{
  Wire.beginTransmission(AIC3204_ADDR);
  Wire.write(reg);
  Wire.write(value);
  Wire.endTransmission();
}

void setup(void) {  
  // Iniciar comunicación Serial 
  Serial.begin(115200);
  Wire.begin(5,6);  // Pines I2C personalizados (SDA=5, SCL=6)

  // Iniciar I2S
  Serial.println("Iniciando I2S...");
  config_i2s1 = out.defaultConfig(TX_MODE);
  config_i2s1.copyFrom(info_16k); 

  // Pines de salida I2S personalizados
  config_i2s1.pin_bck = 8;
  config_i2s1.pin_ws = 7;
  config_i2s1.pin_data = 43;
  config_i2s1.pin_data_rx = 44;
  config_i2s1.is_master = false;
  out.begin(config_i2s1);

  // Iniciar onda senoidal
  sineWave.begin(info_16k, N_B4);

  Serial.println("Listo...");
}

// Bucle principal - copia el sonido a la salida
void loop() {
   copier.copy();

   // Cada segundo, cambia el nivel de volumen
   if (millis() - now_time > 1000) {
    now_time = millis();
    aic3204_write_reg(0x00, 0x01);  // Seleccionar página 1
    aic3204_write_reg(0x12, level[level_index]);  // Volumen canal izquierdo
    aic3204_write_reg(0x13, level[level_index]);  // Volumen canal derecho

    Serial.print("Nivel de volumen: ");
    Serial.println(level_index);

    level_index = level_index + 2;
    if (level_index >= 10) level_index = 0;
   }
}
```
