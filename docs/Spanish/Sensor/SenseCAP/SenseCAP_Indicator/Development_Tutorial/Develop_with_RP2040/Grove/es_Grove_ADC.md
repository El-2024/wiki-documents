---
description: Grove ADC
title: Grove ADC
keywords:
- Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Indicator_RP2040_Grove_ADC
last_update:
  date: 07/22/2025
  author: Guillermo
---
# **Descripción General**

El SenseCAP Indicator cuenta con dos interfaces Grove para conectar módulos Grove: una es el puerto I2C por defecto y la otra es un pin configurable Digital/Analógico, que también puede usarse para salidas PWM. Ambos puertos Grove pueden utilizarse como entradas/salidas digitales, lo que brinda más posibilidades a los desarrolladores.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/new-grove.png"/></div>

Este repositorio presentará cómo utilizar los puertos Grove en el SenseCAP Indicator. Esto te permite disfrutar de la funcionalidad plug-and-play del [Ecosistema Grove](https://www.seeedstudio.com/category/Grove-c-1003.html), así como utilizar los GPIO compatibles con RP2040.

# **Grove (ADC)**

Para usar el puerto A/D configurable de Grove como puerto analógico, simplemente defínelo de la siguiente manera:

```cpp
#define ADC1  27
```

## **Código de Ejemplo:**:

Este código de ejemplo muestra cómo conectar el [Sensor de Luz](/Grove-Light_Sensor) a la interfaz ADC Grove. La señal de salida es un valor analógico: cuanto más brillante sea la luz, mayor será el valor.

```cpp
#include <Arduino.h>

#define ADC1  27

void setup() {
  Serial.begin(115200);
}

void loop() {
  int adc0_data = analogRead(ADC1);
  Serial.println(adc0_data);
  delay(1000);
}
```