---
title: Digital
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-IO-Digital/
slug: /es/Wio-Terminal-IO-Digital
last_update:
  date: 07/27/2025
  author: Guillermo
---
# Uso del Puerto Digital Grove en Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-12%2014-55-44.2019-12-12%2014_56_10.gif" /></div>

Este repositorio demuestra cómo usar los Puertos Grove en Wio Terminal como Puertos Digitales. ¡Puedes usar esta funcionalidad para jugar con el Ecosistema Grove!

## Pines Digitales RPI

La distribución de pines de Raspberry Pi está definida como:

- `RPI_D0` -> `RPI_D8`

## Configuraciones del Puerto Grove

Para usar el **Puerto configurable A/D Grove** como puerto Digital, simplemente defínelo de la siguiente forma:

```cpp
void setup() {
    pinMode(D0, INPUT); //Configura UART TX como puerto Digital
}
```

### Uso del Puerto Grove I2C como Puerto Digital

El **Puerto Grove I2C** también puede usarse como Puerto Digital en Wio Terminal:

```cpp
void setup() {
    pinMode(PIN_WIRE_SCL, INPUT); //Define SCL del puerto I2C como Entrada Digital
}
```

¡Ahora conecta tu sensor Grove al puerto físico Grove!

**Nota:** Para nombres de pines variante más específicos, por favor consulta el Esquemático y `variant.h`

## Código de Ejemplo

En este ejemplo se usan un Botón Grove y un LED Grove para demostrar:

```cpp
#define BUTTON D0 //Botón en el Puerto UART Grove
#define LED PIN_WIRE_SCL //LED en el Puerto I2C Grove

void setup() {
  Serial.begin(115200);
  pinMode(BUTTON, INPUT);
  pinMode(LED, OUTPUT);
}

void loop() {
  int buttonState = digitalRead(BUTTON);
  Serial.print("Estado del Botón: ");
  Serial.println(buttonState);

  if (buttonState == HIGH) {
    digitalWrite(LED, HIGH);
  }
  else {
    digitalWrite(LED, LOW);
  }
  delay(50);
}
```

## Ejemplo de Código de Salida PWM (Servo)

En este ejemplo se usa un Servo Grove para demostrar la salida PWM:

```cpp
#include <Servo.h>
Servo myservo;

int pos = 0;

void setup() {
  myservo.attach(D0); //Conecta el servo al Puerto Digital Grove
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) {
    // en pasos de 1 grado
    myservo.write(pos);
    delay(15);
  }
  for (pos = 180; pos >= 0; pos -= 1) {
    myservo.write(pos);
    delay(15);
  }
}
```

**Nota:** Para usar la librería Servo con Wio Terminal, por favor incluye la versión de [Adafruit](https://github.com/PaintYourDragon/Servo) para compatibilidad con SAMD51.

## UART Serial

* El Serial USB en Wio Terminal: `Serial`

* El puerto UART externo: `Serial1`

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
