---
description: Overview
title: Primeros Pasos con Buzzer
keywords:
- Wio_terminal Buzzer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Buzzer
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Comenzando con el Buzzer

Este repositorio demuestra cómo usar el buzzer piezo incorporado como componente en el Wio Terminal. El piezo puede conectarse a una salida de modulación por ancho de pulso (PWM) analógica para generar varios tonos y efectos.

## Conceptos básicos

El buzzer incorporado del Wio Terminal es un buzzer pasivo, lo que significa que requiere una señal de CA (PWM) para activarse y emitir sonido, por lo que puedes generar una salida de la siguiente manera:

**Nota:** **`WIO_BUZZER`** es el pin incorporado del buzzer.

```cpp
    void setup() {
        pinMode(WIO_BUZZER, OUTPUT);
    }

    void loop() {
        analogWrite(WIO_BUZZER, 128);
        delay(1000);
        analogWrite(WIO_BUZZER, 0);
        delay(1000);
    }
```

**Nota:** Para generar un sonido por defecto del buzzer, se recomienda manejar el buzzer con un voltaje bajo.

## Código de ejemplo

Este ejemplo usa un buzzer para reproducir melodías. Envía una onda cuadrada de la frecuencia apropiada al buzzer, generando el tono correspondiente.

```cpp
/* Definición de macro */
#define BUZZER_PIN WIO_BUZZER /* pin de señal del buzzer */

int length = 15;         /* número de notas */
char notes[] = "ccggaagffeeddc ";
int beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };
int tempo = 300;

void setup() {
    // configurar el pin del buzzer como salida
    pinMode(BUZZER_PIN, OUTPUT);
}

void loop() {
    for(int i = 0; i < length; i++) {
        if(notes[i] == ' ') {
            delay(beats[i] * tempo);
        } else {
            playNote(notes[i], beats[i] * tempo);
        }
        delay(tempo / 2);    /* pausa entre notas */
    }

}

// Reproducir tono
void playTone(int tone, int duration) {
    for (long i = 0; i < duration * 1000L; i += tone * 2) {
        digitalWrite(BUZZER_PIN, HIGH);
        delayMicroseconds(tone);
        digitalWrite(BUZZER_PIN, LOW);
        delayMicroseconds(tone);
    }
}

void playNote(char note, int duration) {
    char names[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C' };
    int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014, 956 };

    // reproducir el tono correspondiente al nombre de la nota
    for (int i = 0; i < 8; i++) {
        if (names[i] == note) {
            playTone(tones[i], duration);
        }
    }
}
```