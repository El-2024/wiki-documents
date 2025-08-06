---
description: Overview
title: Comenzando con el Emisor Infrarrojo
keywords:
- Wio_terminal Infrared_Emitter
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Infrared-Emitter
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Comenzando con el Emisor Infrarrojo

Este repositorio demuestra cómo usar el emisor infrarrojo incorporado como componente en el Wio Terminal. El emisor infrarrojo es una interfaz digital y puede usarse para enviar señales IR, ¡igual que un control remoto!

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-IR.gif)

## Instalación de la biblioteca de Infrarrojos para Wio Terminal

1. Visita el repositorio [Seeed_Arduino_IR](https://github.com/Seeed-Studio/Seeed_Arduino_IR) y descarga todo el repositorio a tu unidad local.

2. Ahora, la biblioteca de infrarrojos puede instalarse en el Arduino IDE. Abre el Arduino IDE, y haz clic en `Sketch` -> `Include Library` -> `Add .ZIP Library`, y selecciona el archivo `Seeed_Arduino_IR` que acabas de descargar.

![InstalarBiblioteca](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Código de ejemplo

Navega a **Files** -> **Examples** -> **IRLib2** -> **Send**. Aparecerá el ejemplo de envío que debería verse como el siguiente. Para probar la señal IR desde el Wio Terminal, puedes usar un [Grove - Receptor Infrarrojo](https://wiki.seeedstudio.com/Grove-Infrared_Receiver/). ¡Esto puede modificarse fácilmente para usar el Wio Terminal como control remoto para tu TV!

**Nota:** **`WIO_IR`** está definido para el emisor infrarrojo incorporado (ya definido en el archivo header de esta biblioteca, por lo que no es necesario definirlo en el archivo ino)

```cpp
/* send.ino Example sketch for IRLib2
 *  Ilustra cómo enviar un código.
 */
#include <IRLibSendBase.h>    // Primero incluye la base para envío
// Ahora incluye solo los protocolos que deseas usar.
// El protocolo con número más bajo debe ir primero, el resto puede ir en cualquier orden.
#include <IRLib_P01_NEC.h>
#include <IRLib_P02_Sony.h>
#include <IRLibCombo.h>     // Después de todos los protocolos, incluye este
// Todo lo anterior crea automáticamente una clase universal de envío
// llamada "IRsend" que contiene solo los protocolos que deseas.
// Ahora declara una instancia de ese emisor.

IRsend mySender;

void setup() {
  Serial.begin(9600);
  delay(2000); while (!Serial); // espera para Leonardo
  Serial.println(F("Cada vez que presiones una tecla en el monitor serial, enviaremos una señal."));
}

void loop() {
  if (Serial.read() != -1) {
  // Envía un código cada vez que se recibe un carácter desde
  // el puerto serial. Podrías modificar este sketch para enviar cuando
  // pulses un botón conectado a un pin digital.
  // Sustituye valores y protocolos en la siguiente instrucción
  // por el dispositivo que tengas disponible.
  //  mySender.send(SONY,0xa8bca, 20);//Sony DVD power A8BCA, 20 bits
    mySender.send(NEC,0x61a0f00f,0);//Botón power TV NEC = 0x61a0f00f
    Serial.println(F("Señal enviada."));
  }
}
```

**Nota:** El emisor infrarrojo está en la parte trasera del Wio Terminal, a la izquierda de la ranura para tarjeta SD.
