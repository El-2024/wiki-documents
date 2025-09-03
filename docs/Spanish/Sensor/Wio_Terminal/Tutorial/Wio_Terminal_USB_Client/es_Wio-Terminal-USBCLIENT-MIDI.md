---
description: MIDI
title: MIDI
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-USBCLIENT-MIDI
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Usar el Wio Terminal como un Dispositivo USB MIDI

Este repositorio presenta cómo usar el Wio Terminal como un dispositivo USB MIDI (Interfaz Digital de Instrumentos Musicales), ¡con el que se pueden controlar instrumentos musicales!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200110105918.gif"/></div>

## Instalación de Librerías

Este ejemplo también requiere librerías MIDI adicionales para Arduino:

1. Visita el repositorio de la [Arduino MIDI Library](https://github.com/FortySevenEffects/arduino_midi_library) y descarga todo el repositorio a tu disco local.

2. Ahora, la librería puede instalarse en el IDE de Arduino. Abre el IDE de Arduino y haz clic en `Programa` -> `Incluir Librería` -> `Añadir Biblioteca .ZIP`, y elige el archivo `Seeed_Arduino_LCD` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Obtención de Resultados

En este caso, el Wio Terminal está conectado a mi Macbook y utilizo la app `Configuración de Audio MIDI` que viene con macOS para hacer pruebas. También puedes ver los datos desde el monitor serial en el `IDE de Arduino`. Si tienes un dispositivo MIDI disponible, úsalo para un escenario más realista.

## Código Completo

Para más funcionalidades, consulta las librerías de TinyUSB.

```cpp
#include <Arduino.h>
#include <Adafruit_TinyUSB.h>
#include <MIDI.h>

// Objeto USB MIDI
Adafruit_USBD_MIDI usb_midi;

// Crea una nueva instancia de la librería Arduino MIDI,
// y conecta usb_midi como transporte.
MIDI_CREATE_INSTANCE(Adafruit_USBD_MIDI, usb_midi, MIDI);

// Variable que guarda la posición actual en la secuencia.
uint32_t position = 0;

// Almacena la melodía de ejemplo como un arreglo de notas
byte note_sequence[] = {
  74,78,81,86,90,93,98,102,57,61,66,69,73,78,81,85,88,92,97,100,97,92,88,85,81,78,
  74,69,66,62,57,62,66,69,74,78,81,86,90,93,97,102,97,93,90,85,81,78,73,68,64,61,
  56,61,64,68,74,78,81,86,90,93,98,102
};

void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
  
  // Inicializa MIDI, y escucha en todos los canales MIDI
  // Esto también llamará a begin() de usb_midi
  MIDI.begin(MIDI_CHANNEL_OMNI);

  // Asocia la función handleNoteOn a la librería MIDI.
  // Se llamará cuando se reciban mensajes MIDI Note On.
  MIDI.setHandleNoteOn(handleNoteOn);

  // Haz lo mismo para los mensajes MIDI Note Off.
  MIDI.setHandleNoteOff(handleNoteOff);

  Serial.begin(115200);

  // espera hasta que el dispositivo esté montado
  while( !USBDevice.mounted() ) delay(1);
}

void loop()
{
  static uint32_t start_ms = 0;
  if ( millis() - start_ms > 266 )
  {
    start_ms += 266;
    
    // Variables para la posición actual y anterior
    int previous = position - 1;
  
    // Si estamos en la posición 0, establecer anterior como la última nota
    if (previous < 0) {
      previous = sizeof(note_sequence) - 1;
    }
  
    // Envía Note On en la posición actual con velocidad máxima (127) en el canal 1
    MIDI.sendNoteOn(note_sequence[position], 127, 1);
  
    // Envía Note Off para la nota anterior
    MIDI.sendNoteOff(note_sequence[previous], 0, 1);
  
    // Incrementa la posición
    position++;
  
    // Si llegamos al final de la secuencia, reinicia
    if (position >= sizeof(note_sequence)) {
      position = 0;
    }
  }

  // Lee cualquier nuevo mensaje MIDI
  MIDI.read();  
}

void handleNoteOn(byte channel, byte pitch, byte velocity)
{
  // Registro cuando se presiona una nota
  Serial.printf("Nota activada: canal = %d, nota = %d, velocidad = %d", channel, pitch, velocity);
  Serial.println();
}

void handleNoteOff(byte channel, byte pitch, byte velocity)
{
  // Registro cuando se libera una nota
  Serial.printf("Nota desactivada: canal = %d, nota = %d, velocidad = %d", channel, pitch, velocity);
  Serial.println();
}
```
