---
description:  Play and Record
title:  Grabar y Reproducir
keywords:
- Wio_terminal Audio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Audio-Play-Record
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Funciones de Audio

Esta guía muestra cómo configurar el audio en el Wio Terminal utilizando el ReSpeaker 2-Mic Hat.

:::note
Por favor, visita el [**Resumen de Audio**](https://wiki.seeedstudio.com/Wio-Terminal-Audio-Overview/) para ver la **Conexión de Hardware**.
:::

## Reproducción de Audio desde la Tarjeta SD

Este ejemplo reproduce un archivo de música desde una tarjeta MicroSD utilizando el ReSpeaker 2-Mic Hat.

- Necesitarás una tarjeta MicroSD para el Wio Terminal.

- Guarda tu archivo de música en formato **`.wav`** y colócalo en la tarjeta MicroSD. En este ejemplo, el archivo debe llamarse `SDTEST2.WAV`.

- Inserta la tarjeta MicroSD en el Wio Terminal y sube el siguiente código.

- Asegúrate de que el ReSpeaker 2-Mic esté correctamente conectado al Wio Terminal y que **un altavoz esté conectado al pin de bocina JST2.0 del ReSpeaker 2-Mic**.

También puedes encontrar este ejemplo en la [página de GitHub](https://github.com/Seeed-Studio/Seeed_Arduino_Audio/blob/master/examples/Tutorial/Part_1_03_Playing_Music/Part_1_03_Playing_Music.ino).

:::note
Puedes ajustar el volumen del altavoz modificando `wm8960.volume(0.7)` ¡e incluso puedes descomentar `wm8960.outputSelect(HEADPHONE)` para usar salida por audífonos!
:::

```cpp
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

AudioPlaySdWav           playSdWav1;
AudioOutputI2S           i2s1;
AudioConnection          patchCord1(playSdWav1, 0, i2s1, 0);
AudioConnection          patchCord2(playSdWav1, 1, i2s1, 1);
AudioControlWM8960 wm8960;

void setup() {
  Serial.begin(9600);
  AudioMemory(8);
  while (!Serial) {};
  wm8960.enable();
  // wm8960.outputSelect(HEADPHONE);
  wm8960.volume(0.7);
  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {
      Serial.println("Fallo al montar la tarjeta");
      return;
  }
  delay(1000);
}

void loop() {
  if (!playSdWav1.isPlaying()) {
    Serial.println("Iniciando reproducción");
    playSdWav1.play("SDTEST2.WAV");
    delay(10); // espera a que la biblioteca lea los metadatos WAV
  }
  // No hacer nada mientras se reproduce...
}
```

## Grabación y Reproducción de Sonido

Este ejemplo graba sonido utilizando el micrófono del ReSpeaker 2-Mic Hat, guarda los datos crudos en la tarjeta MicroSD y luego los reproduce por el altavoz.

* Necesitarás una tarjeta MicroSD para el Wio Terminal.

* Sube el código al Wio Terminal.

* Presiona el **botón derecho** en la parte superior del Wio Terminal (`WIO_KEY_A`) para comenzar a grabar. Habla en el micrófono del ReSpeaker 2-Mic Hat. La grabación se guardará como `RECORD.WAV`.

- Presiona el **botón izquierdo** (`WIO_KEY_C`) para reproducir el archivo `RECORD.WAV`.

- Presiona el **botón central** (`WIO_KEY_B`) para detener la reproducción.

También puedes encontrar este ejemplo en la [página de GitHub](https://github.com/Seeed-Studio/Seeed_Arduino_Audio/blob/master/examples/Recorder/Recorder.ino).

```cpp
// Graba sonido como datos crudos en una tarjeta SD y lo reproduce.
#include <Bounce.h>
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

// GUItool: comienzo del código generado automáticamente
AudioInputI2S            i2s2;
AudioAnalyzePeak         peak1;
AudioRecordQueue         queue1;
AudioPlaySdRaw           playRaw1;
AudioOutputI2S           i2s1;
AudioConnection          patchCord1(i2s2, 0, queue1, 0);
AudioConnection          patchCord2(i2s2, 0, peak1, 0);
AudioConnection          patchCord3(playRaw1, 0, i2s1, 0);
AudioConnection          patchCord4(playRaw1, 0, i2s1, 1);
AudioControlWM8960 wm8960;
// GUItool: fin del código generado automáticamente

Bounce buttonRecord = Bounce(WIO_KEY_A, 8);
Bounce buttonStop   = Bounce(WIO_KEY_B, 8);
Bounce buttonPlay   = Bounce(WIO_KEY_C, 8);

const int myInput = AUDIO_INPUT_MIC;
int mode = 0;  // 0=detenido, 1=grabando, 2=reproduciendo
File frec;

void setup() {
  Serial.begin(9600);
  pinMode(WIO_KEY_A, INPUT_PULLUP);
  pinMode(WIO_KEY_B, INPUT_PULLUP);
  pinMode(WIO_KEY_C, INPUT_PULLUP);

  AudioMemory(60);
  wm8960.enable();
  wm8960.inputSelect(myInput);
  wm8960.volume(1);

  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {
    Serial.println("Fallo al montar la tarjeta");
    return;
  }
}

void loop() {
  buttonRecord.update();
  buttonStop.update();
  buttonPlay.update();

  if (buttonRecord.fallingEdge()) {
    Serial.println("Botón de grabación presionado");
    if (mode == 2) stopPlaying();
    if (mode == 0) startRecording();
  }

  if (buttonStop.fallingEdge()) {
    Serial.println("Botón de detener presionado");
    if (mode == 1) stopRecording();
    if (mode == 2) stopPlaying();
  }

  if (buttonPlay.fallingEdge()) {
    Serial.println("Botón de reproducir presionado");
    if (mode == 1) stopRecording();
    if (mode == 0) startPlaying();
  }

  if (mode == 1) continueRecording();
  if (mode == 2) continuePlaying();

  if (myInput == AUDIO_INPUT_MIC) adjustMicLevel();
}

void startRecording() {
  Serial.println("Iniciando grabación");
  if (SD.exists("RECORD.RAW")) {
    SD.remove("RECORD.RAW");
  }
  frec = SD.open("RECORD.RAW", FILE_WRITE);
  if (frec) {
    queue1.begin();
    mode = 1;
  }
}

void continueRecording() {
  if (queue1.available() >= 2) {
    byte buffer[512];
    memcpy(buffer, queue1.readBuffer(), 256);
    queue1.freeBuffer();
    memcpy(buffer + 256, queue1.readBuffer(), 256);
    queue1.freeBuffer();
    elapsedMicros usec = 0;
    frec.write(buffer, 512);
    Serial.print("Escritura SD, us=");
    Serial.println(usec);
  }
}

void stopRecording() {
  Serial.println("Deteniendo grabación");
  queue1.end();
  if (mode == 1) {
    while (queue1.available() > 0) {
      frec.write((byte*)queue1.readBuffer(), 256);
      queue1.freeBuffer();
    }
    frec.close();
  }
  mode = 0;
}

void startPlaying() {
  Serial.println("Iniciando reproducción");
  playRaw1.play("RECORD.RAW");
  mode = 2;
}

void continuePlaying() {
  if (!playRaw1.isPlaying()) {
    playRaw1.stop();
    mode = 0;
  }
}

void stopPlaying() {
  Serial.println("Deteniendo reproducción");
  if (mode == 2) playRaw1.stop();
  mode = 0;
}

void adjustMicLevel() {
  // Ajuste dinámico del nivel del micrófono (pendiente de implementación)
}
```

## Detección de Picos

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak-detect.gif"/></div>

Este ejemplo reproduce un archivo de música desde la tarjeta MicroSD y detecta los valores pico de ambos canales, mostrándolos en el Monitor Serial.

* Requiere las mismas configuraciones que el ejemplo anterior de *Reproducción desde tarjeta SD*.

* Sube el código, y deberías ver los picos de ambos canales en el Monitor Serial, mientras la música se reproduce por el altavoz.

```cpp
#include <Audio.h>
#include <Wire.h>
#include <SPI.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

// GUItool: comienzo del código generado automáticamente
AudioPlaySdWav           playSdWav1;
AudioAnalyzePeak         peak1;
AudioAnalyzePeak         peak2;
AudioOutputI2S           i2s1;
AudioConnection          patchCord1(playSdWav1, 0, peak1, 0);
AudioConnection          patchCord2(playSdWav1, 0, i2s1, 0);
AudioConnection          patchCord3(playSdWav1, 1, peak2, 0);
AudioConnection          patchCord4(playSdWav1, 1, i2s1, 1);
AudioControlWM8960 wm8960;
// GUItool: fin del código generado automáticamente

void setup() {
  Serial.begin(9600);
  AudioMemory(10);
  wm8960.enable();
  // wm8960.outputSelect(HEADPHONE);
  wm8960.volume(0.7);
  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {
    Serial.println("Fallo al montar la tarjeta");
    return;
  }
  delay(1000);
}

elapsedMillis msecs;

void loop() {
  if (!playSdWav1.isPlaying()) {
    Serial.println("Iniciando reproducción");
    playSdWav1.play("SDTEST2.WAV");
    delay(10);
  }

  if (msecs > 40) {
    if (peak1.available() && peak2.available()) {
      msecs = 0;
      float leftNumber = peak1.read();
      float rightNumber = peak2.read();
      int leftPeak = leftNumber * 30.0;
      int rightPeak = rightNumber * 30.0;
      int count;
      for (count = 0; count < 30 - leftPeak; count++) {
        Serial.print(" ");
      }
      while (count++ < 30) {
        Serial.print("<");
      }
      Serial.print("||");
      for (count = 0; count < rightPeak; count++) {
        Serial.print(">");
      }
      while (count++ < 30) {
        Serial.print(" ");
      }
      Serial.print(leftNumber);
      Serial.print(", ");
      Serial.println(rightNumber);
    }
  }
}
```

## Reproducción de Audio con Pantalla LCD

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/audio.mp4" type="video/mp4" />
</video></div>

Este ejemplo también reproduce un archivo de música desde la tarjeta MicroSD y muestra los picos de ambos canales en la pantalla del Wio Terminal.

- Requiere las mismas configuraciones que el ejemplo anterior *Reproducción de Audio desde la Tarjeta SD*.

- Sube el código y deberías ver los picos de ambos canales en la pantalla mientras la música se reproduce por el altavoz.

**NOTA:** Debido a que estamos utilizando gráficos LCD junto con la biblioteca de audio, la carga de trabajo es mayor. Se recomienda **hacer overclock al SAMD51** en este ejemplo. En el IDE de Arduino, selecciona **Tools** → **CPU Speed** → **200 MHz**. Esto aumentará el rendimiento gráfico en general.

También puedes encontrar este ejemplo en la [página de GitHub](https://github.com/Seeed-Studio/Seeed_Arduino_Audio/blob/master/examples/Tutorial/Part_3_03_TFT_Display/Part_3_03_TFT_Display.ino).

```cpp
#include <TFT_eSPI.h> // Biblioteca específica de hardware
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

// GUItool: comienzo del código generado automáticamente
AudioPlaySdWav           playSdWav1;
AudioAnalyzePeak         peak2;
AudioAnalyzePeak         peak1;
AudioOutputI2S           i2s1;
AudioConnection          patchCord1(playSdWav1, 0, peak1, 0);
AudioConnection          patchCord2(playSdWav1, 0, i2s1, 0);
AudioConnection          patchCord3(playSdWav1, 1, peak2, 0);
AudioConnection          patchCord4(playSdWav1, 1, i2s1, 1);
AudioControlWM8960 wm8960;
// GUItool: fin del código generado automáticamente

TFT_eSPI tft_e = TFT_eSPI();
TFT_eSprite tft = TFT_eSprite(&tft_e);

void setup() {
  Serial.begin(9600);
  delay(500);

  tft_e.begin();
  tft_e.fillScreen(ILI9341_BLACK);
  tft.createSprite(240, 320);
  tft.fillSprite(TFT_BLACK);
  tft.setTextColor(ILI9341_YELLOW);
  //tft.setTextSize(3);
  tft.setCursor(40, 8);
  tft.println("Medidor de Picos");

  AudioMemory(10);
  wm8960.enable();
  // wm8960.outputSelect(HEADPHONE);
  wm8960.volume(0.7);

  while (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI, 10000000UL)) {
    Serial.println("Fallo al montar la tarjeta");
    return;
  }
  delay(1000);
}

elapsedMillis msecs;

void loop() {
  if (!playSdWav1.isPlaying()) {
    Serial.println("Iniciando reproducción");
    playSdWav1.play("SDTEST2.WAV");
    delay(10); // espera a que la librería lea info WAV
  }

  if (msecs > 15) {
    if (peak1.available() && peak2.available()) {
      msecs = 0;
      float leftNumber = peak1.read();
      float rightNumber = peak2.read();
      Serial.print(leftNumber);
      Serial.print(", ");
      Serial.println(rightNumber);

      // dibujar las barras verticales
      int height = leftNumber * 240;
      tft.fillRect(60, 280 - height, 40, height, ILI9341_GREEN);
      tft.fillRect(60, 280 - 240, 40, 240 - height, ILI9341_BLACK);
      height = rightNumber * 240;
      tft.fillRect(140, 280 - height, 40, height, ILI9341_GREEN);
      tft.fillRect(140, 280 - 240, 40, 240 - height, ILI9341_BLACK);
      // una mejor implementación dibujaría solo la parte que cambia...

      // dibujar números debajo de cada barra
      tft.fillRect(60, 284, 40, 16, ILI9341_BLACK);
      tft.setCursor(67, 284);
      tft.print(leftNumber);
      tft.fillRect(140, 284, 40, 16, ILI9341_BLACK);
      tft.setCursor(147, 284);
      tft.print(rightNumber);
      tft.pushSprite(0, 0);
    }
  }
}
```

## Demostraciones de Ejemplo

### Visualizador de Espectro de Audio

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/Audio-Spectrum.mp4" type="video/mp4" />
</video></div>

Este es un ejemplo que utiliza la función FFT (Transformada Rápida de Fourier) de la biblioteca de audio para calcular y visualizar el espectro del audio.

#### Características

* Espectro de audio en tiempo real de música reproducida

* Botones para aumentar/disminuir el volumen

Aquí tienes la **traducción al español en formato Markdown** del apartado **"Complete Code"** y la subsección **"Mic Spectrum Visualizer"**, incluyendo todo el código, descripciones, enlace al video y formato original:

#### Código Completo

```cpp
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"
#include <TFT_eSPI.h> // Biblioteca específica de hardware
#include <Bounce.h>

// Tamaño de la matriz y color a utilizar
const unsigned int matrix_width = 19;
const unsigned int matrix_height = 12;

// Parámetros que ajustan los umbrales verticales
const float maxLevel = 0.5;      // 1.0 = máximo, menor es más "sensible"
const float dynamicRange = 10.0; // rango total a mostrar, en decibelios
const float linearBlend = 0.4;   // rango útil de 0 a 0.7

// GUItool: comienzo del código generado automáticamente
AudioPlaySdWav           playSdWav1;
AudioMixer4              mixer1;
AudioOutputI2S           i2s2;
AudioAnalyzeFFT1024      fft1024_1;
AudioConnection          patchCord1(playSdWav1, 0, mixer1, 0);
AudioConnection          patchCord2(playSdWav1, 0, i2s2, 0);
AudioConnection          patchCord3(playSdWav1, 1, mixer1, 1);
AudioConnection          patchCord4(playSdWav1, 1, i2s2, 1);
AudioConnection          patchCord5(mixer1, fft1024_1);
AudioControlWM8960 wm8960;
// GUItool: fin del código generado automáticamente

const int lowerFFTBins[] = {0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 22, 27, 32, 38, 45, 53, 63, 74, 87, 102, 119, 138, 160, 186, 216, 250, 289, 334, 385, 444};
const int upperFFTBins[] = {0, 1, 2, 3, 4, 5, 7, 9, 11, 14, 17, 21, 26, 31, 37, 44, 52, 62, 73, 86, 101, 118, 137, 159, 185, 215, 249, 288, 333, 384, 443, 511};
float thresholdVertical[matrix_height];
float thresholdVert[matrix_height];

float level;
unsigned int x, y;
const uint8_t gridSize = 10;
float val = 0.7;

Bounce buttonUp = Bounce(WIO_KEY_A, 8);
Bounce buttonDown = Bounce(WIO_KEY_C, 8);

TFT_eSPI tft = TFT_eSPI();
TFT_eSprite spr = TFT_eSprite(&tft);

void setup() {
  Serial.begin(115200);
//  while (!Serial);

  pinMode(WIO_KEY_A, INPUT_PULLUP);
  pinMode(WIO_KEY_C, INPUT_PULLUP);

  tft.begin();
  tft.fillScreen(TFT_BLACK);
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.drawString("Visualizador de Espectro", 10, 10);

  AudioMemory(20);
  computeVerticalLevels();

  for (int i = 0; i < 8; i++) {
    Serial.print("thresholdVertical ");
    Serial.print(i);
    Serial.print(" = ");
    Serial.println(thresholdVertical[i]);
  }
  for (unsigned int j = 0; j < matrix_height; j++) {
    thresholdVert[j] = thresholdVertical[matrix_height - j - 1];
  }
  wm8960.enable();
//  wm8960.outputSelect(HEADPHONE);
  wm8960.volume(val);
  while (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI, 16000000UL)) {
    Serial.println("Fallo al montar tarjeta");
    return;
  }
  playSdWav1.play("SDTEST2.WAV");
  delay(20);

  fft1024_1.windowFunction(AudioWindowHanning1024);

  spr.createSprite(180, 320);
  spr.fillSprite(TFT_BLACK);
  tft.setRotation(2);
}

void loop() {
  buttonUp.update();
  buttonDown.update();
  if (buttonUp.fallingEdge() && val < 1.0) {
    val += 0.1;
  }
  if (buttonDown.fallingEdge() && val >= 0.1) {
    val -= 0.1;
  }
  wm8960.volume(val);

  if (fft1024_1.available()) {
    colorRainbow();
    spr.pushSprite(0, 10);
  }
}

void colorRainbow() {
  for (x = 0; x < matrix_width; x++) {
    level = fft1024_1.read(lowerFFTBins[x], upperFFTBins[x]);
    for (y = 0; y < 12; y++) {
      if (level >= thresholdVert[y]) {
        spr.fillRect(y * 12, xy(x, y) * 2, gridSize, gridSize, Wheel(y * 24));
      } else {
        spr.fillRect(y * 12, xy(x, y) * 2, gridSize, gridSize, TFT_BLACK);
      }
    }
  }
}

// Entrada de valor 0 a 255 para obtener un color arcoíris.
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if (WheelPos < 85) {
    return color2color(255 - WheelPos * 3, 0, WheelPos * 3);
  } else if (WheelPos < 170) {
    WheelPos -= 85;
    return color2color(0, WheelPos * 3, 255 - WheelPos * 3);
  } else {
    WheelPos -= 170;
    return color2color(WheelPos * 3, 255 - WheelPos * 3, 0);
  }
}

uint32_t color2color(uint8_t r, uint8_t g, uint8_t b) {
  return ((uint32_t)r << 16) | ((uint32_t)g << 8) | b;
}

unsigned int xy(unsigned int x, unsigned int y) {
  return x * 8;
}

void computeVerticalLevels() {
  unsigned int y;
  float n, logLevel, linearLevel;

  for (y = 0; y < matrix_height; y++) {
    n = (float)y / (float)(matrix_height - 1);
    logLevel = pow(n * -1.0 * (dynamicRange / 20.0), 10);
    linearLevel = 1.0 - n;
    linearLevel = linearLevel * linearBlend;
    logLevel = logLevel * (1.0 - linearBlend);
    thresholdVertical[y] = (logLevel + linearLevel) * maxLevel;
  }
}
```

### Visualizador de Espectro del Micrófono

<div align="center"><video width={560} height={315} controls>
  <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/mic-spec.mp4" type="video/mp4" />
</video></div>

Este es un ejemplo usando los micrófonos del **ReSpeaker 2-Mic Hat** y cálculos FFT.

#### Característica

* Espectro de audio de los micrófonos

#### Código Completo

```cpp
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"
#include <TFT_eSPI.h> // Librería específica para hardware

// Tamaño y color de la pantalla a utilizar
const unsigned int matrix_width = 19;
const unsigned int matrix_height = 12;

// Estos parámetros ajustan los umbrales verticales
const float maxLevel = 0.6;      // 1.0 = máximo, valores menores son más "sensibles"
const float dynamicRange = 10.0; // rango total a mostrar en decibelios
const float linearBlend = 0.6;   // rango útil es de 0 a 0.7

// GUItool: inicio de código generado automáticamente
AudioInputI2S            i2s1;           //xy=376,203
AudioMixer4              mixer1;         //xy=608,235
AudioAnalyzeFFT1024      fft1024_1;      //xy=770,200
AudioConnection          patchCord1(i2s1, 0, mixer1, 0);
AudioConnection          patchCord2(i2s1, 1, mixer1, 1);
AudioConnection          patchCord3(mixer1, fft1024_1);
AudioControlWM8960 wm8960;
// GUItool: fin de código generado automáticamente

const int lowerFFTBins[] = {0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 18, 22, 27, 32, 38, 45, 53, 63, 74, 87, 102, 119, 138, 160, 186, 216, 250, 289, 334, 385, 444};
const int upperFFTBins[] = {0, 1, 2, 3, 4, 5, 7, 9, 11, 14, 17, 21, 26, 31, 37, 44, 52, 62, 73, 86, 101, 118, 137, 159, 185, 215, 249, 288, 333, 384, 443, 511};
float thresholdVertical[matrix_height];
float thresholdVert[matrix_height];

float level;
unsigned int x, y;
const uint8_t gridSize = 10;

TFT_eSPI tft = TFT_eSPI();
TFT_eSprite spr = TFT_eSprite(&tft);

void setup() {
  Serial.begin(115200);
  //  while (!Serial);

  tft.begin();
  tft.fillScreen(TFT_BLACK);
  tft.setRotation(3);
  tft.setTextSize(2);
  tft.drawString("Visualizador de Espectro de Mic", 20, 10);

  AudioMemory(20);
  computeVerticalLevels();

  for (int i = 0; i < 8; i++) {
    Serial.print("thresholdVertical ");
    Serial.print(i);
    Serial.print(" = ");
    Serial.println(thresholdVertical[i]);
  }
  for (unsigned int j = 0; j < matrix_height; j++) {
    thresholdVert[j] = thresholdVertical[matrix_height - j - 1];
  }
  wm8960.enable();
  while (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI, 16000000UL)) {
    Serial.println("Fallo al montar tarjeta");
    return;
  }
  delay(20);

  fft1024_1.windowFunction(AudioWindowHanning1024);

  spr.createSprite(180, 320);
  spr.fillSprite(TFT_BLACK);
  tft.setRotation(2);
}

void loop() {
  if (fft1024_1.available()) {
    colorRainbow();
    spr.pushSprite(0, 10);
  }
}

void colorRainbow() {
  for (x = 0; x < matrix_width; x++) {
    level = fft1024_1.read(lowerFFTBins[x], upperFFTBins[x]);
    for (y = 0; y < 12; y++) {
      if (level >= thresholdVert[y]) {
        spr.fillRect(y * 12, xy(x, y) * 2, gridSize, gridSize, Wheel(y * 24));
        // Serial.println(xy(x, y));
      }
      else {
        spr.fillRect(y * 12, xy(x, y) * 2, gridSize, gridSize, TFT_BLACK);
      }
    }
  }
}

// Ingresa un valor de 0 a 255 para obtener un color.
// Los colores hacen una transición rojo → verde → azul → rojo nuevamente.
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if (WheelPos < 85) {
    return color2color(255 - WheelPos * 3, 0, WheelPos * 3);
  } else if (WheelPos < 170) {
    WheelPos -= 85;
    return color2color(0, WheelPos * 3, 255 - WheelPos * 3);
  } else {
    WheelPos -= 170;
    return color2color(WheelPos * 3, 255 - WheelPos * 3, 0);
  }
}

uint32_t color2color(uint8_t r, uint8_t g, uint8_t b) {
  return ((uint32_t)r << 16) | ((uint32_t)g <<  8) | b;
}

unsigned int xy(unsigned int x, unsigned int y) {
  return x * 8;
}

void computeVerticalLevels() {
  unsigned int y;
  float n, logLevel, linearLevel;

  for (y = 0; y < matrix_height; y++) {
    n = (float)y / (float)(matrix_height - 1);
    logLevel = pow(n * -1.0 * (dynamicRange / 20.0), 10);
    linearLevel = 1.0 - n;
    linearLevel = linearLevel * linearBlend;
    logLevel = logLevel * (1.0 - linearBlend);
    thresholdVertical[y] = (logLevel + linearLevel) * maxLevel;
  }
}
```

### Grabar y Reproducir en Tiempo Real

<div align="center"><video width={560} height={315} controls>
  <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/record-play.mp4" type="video/mp4" />
</video></div>

Este es un ejemplo de grabación y reproducción en tiempo real.

#### Característica

* Grabación y reproducción en tiempo real

#### Código Completo

```cpp
#include <Audio.h>
#include <Wire.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

// GUItool: inicio de código generado automáticamente
AudioInputI2S            i2s1;           //xy=274,186
AudioRecordQueue         queue1;         //xy=550,172
AudioPlayQueue           queue2;         //xy=550,220
AudioOutputI2S           i2s2;           //xy=769,208
AudioConnection          patchCord1(i2s1, 0, queue1, 0);
AudioConnection          patchCord2(queue2, 0, i2s2, 0);
AudioConnection          patchCord3(queue2, 0, i2s2, 1);
AudioControlWM8960 wm8960;
// GUItool: fin de código generado automáticamente

const int myInput = AUDIO_INPUT_MIC;

void setup() {
  Serial.begin(9600);
//  while (!Serial);
  AudioMemory(20);
  wm8960.enable();
  wm8960.inputSelect(myInput);
  wm8960.volume(0.9);
  //  wm8960.outputSelect(HEADPHONE);
  queue1.begin();
}

void loop() {
  if (queue1.available() >= 2)
  {
    // Búfer de grabación
    byte buffer[256];
    memcpy(buffer, queue1.readBuffer(), 256);
    queue1.freeBuffer();
    // Búfer de reproducción
    queue2.getBuffer();
    queue2.playBuffer();
  }
}
```