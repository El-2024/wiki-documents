---
description: Usr Button Usage with XIAO ESP32S3
title: Uso del Botón de Usuraio
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_button
last_update:
  date: 07/19/2025
  author: Guillermo
---

El botón de usuario está conectado al chip **XMOS XU316**, pero aún no está programado (reservado para uso futuro).  
Si deseas utilizar este botón con el **XIAO ESP32S3**, conecta el pin `Usr` al pin `D2` o `D3`.

:::tip
El uso del botón de silencio (mute) es el mismo.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usr.png" alt="pir" width={600} height="auto" /></p>

Este ejemplo conecta el pin `Usr` al pin `D3`, y luego usa el **XIAO ESP32S3** para detectar si el botón ha sido presionado.

### Código de ejemplo

```cpp
const int buttonPin = D3;  
int buttonState = 0;

void setup() {
  Serial.begin(115200);
  pinMode(buttonPin, INPUT_PULLUP);  
}

void loop() {
  buttonState = digitalRead(buttonPin);

  if (buttonState == LOW) {
    Serial.println("Button Pressed");
  } else {
    Serial.println("Button Released");
  }
  
  delay(500);  
}
```

Abre el `Monitor Serial`. Cuando presiones o sueltes el botón, se mostrará el estado en el log.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/button-status.png" alt="pir" width={800} height="auto" /></p>

