---
title: Sensor Ultrasónico
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Ultra_Sonic_range_measurement_module/
slug: /es/Ultra_Sonic_range_measurement_module
last_update:
  date: 07/16/2025
  author: Guillermo
---
![](https://files.seeedstudio.com/wiki/Ultra_Sonic_range_measurement_module/img/front.jpg)

El sensor ultrasónico de Seeed es un **módulo de medición de distancia sin contacto**, también compatible con la plataforma **electronic brick**. Está diseñado para facilitar proyectos modulares con **rendimiento industrial**.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/ultra-sonic-range-measurement-module-p-626.html?cPath=144_149)

## Características

* Rango de detección: 3 cm a 4 m  
* Óptimo a 30° de ángulo  
* Interfaz compatible con electronic brick  
* Alimentación de 5 VDC  
* Compatible con protoboard  
* Doble transductor  
* Librería Arduino disponible  

## Especificaciones

<table>
  <tr>
    <td width="400">Voltaje de alimentación</td>
    <td width="200">5V</td>
  </tr>
  <tr>
    <td>Consumo de corriente</td>
    <td>15 mA</td>
  </tr>
  <tr>
    <td>Frecuencia ultrasónica</td>
    <td>40k Hz</td>
  </tr>
  <tr>
    <td>Rango máximo</td>
    <td>400 cm</td>
  </tr>
  <tr>
    <td>Rango mínimo</td>
    <td>3 cm</td>
  </tr>
  <tr>
    <td>Resolución</td>
    <td>1 cm</td>
  </tr>
  <tr>
    <td>Ancho del pulso de disparo</td>
    <td>10 μs</td>
  </tr>
  <tr>
    <td>Dimensiones</td>
    <td>43x20x15 mm</td>
  </tr>
</table>

## Primeros pasos

El sensor transmite un **pulso ultrasónico corto** en el tiempo 0, que es **reflejado por un objeto**. Luego, el sensor recibe la señal reflejada y la convierte en señal eléctrica. El siguiente pulso puede ser enviado cuando se disipe el eco. Este periodo se llama **período de ciclo**, y se recomienda que sea **mayor a 50 ms**.

Cuando se envía un pulso de disparo de **10 μs** al pin de señal, el módulo ultrasónico genera ocho señales de 40 kHz y espera el eco.  
La **distancia medida** es proporcional al **ancho del pulso de eco** y se puede calcular con la fórmula correspondiente.  
Si no se detecta ningún obstáculo, el pin de salida dará una señal alta de **38 ms**.

## Usar con Arduino

### Hardware

- **Paso 1.** Prepara los siguientes componentes:

| Seeeduino V4.2 | Base Shield | Módulo ultrasónico |
|---------------|-------------|---------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg) | ![](https://files.seeedstudio.com/wiki/Ultra_Sonic_range_measurement_module/img/45d_small.jpg) |
| [Comprar](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html) | [Comprar](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html) | [Comprar](https://www.seeedstudio.com/ultra-sonic-range-measurement-module-p-626.html?cPath=144_149) |

- **Paso 2.** Conecta el módulo ultrasónico al **puerto D2** del Grove Base Shield.  
- **Paso 3.** Inserta el Base Shield en el Seeeduino.  
- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

:::note
Si no tienes un Grove Base Shield, puedes conectar directamente el módulo al Seeeduino como se indica abajo:
:::

| Seeeduino  | Módulo Ultrasónico |
|------------|--------------------|
| 5V         | Rojo               |
| GND        | Negro              |
| No conectado | Blanco           |
| D2         | Amarillo           |

### Software

- **Paso 1.** Copia el código de ejemplo y súbelo a tu placa controladora.  
- **Paso 2.** Abre el monitor serial para observar la salida.

```cpp
#include "Arduino.h"
class Ultrasonic
{
    public:
    Ultrasonic(int pin);
    void DistanceMeasure(void);
    double microsecondsToCentimeters(void);
    double microsecondsToInches(void);
    private:
    int this_pin;//pin number of Arduino that is connected with SIG pin of Ultrasonic Ranger.
    long duration;// the Pulse time received;
};
Ultrasonic::Ultrasonic(int pin)
{
    this_pin = pin;
}
/*Begin the detection and get the pulse back signal*/
void Ultrasonic::DistanceMeasure(void)
{
    pinMode(this_pin, OUTPUT);
    digitalWrite(this_pin, LOW);
    delayMicroseconds(2);
    digitalWrite(this_pin, HIGH);
    delayMicroseconds(5);
    digitalWrite(this_pin,LOW);
    pinMode(this_pin,INPUT);
    duration = pulseIn(this_pin,HIGH);
}
/*The measured distance from the range 0 to 400 Centimeters*/
double Ultrasonic::microsecondsToCentimeters(void)
{
    return duration/29.0/2.0;
}
/*The measured distance from the range 0 to 157 Inches*/
double Ultrasonic::microsecondsToInches(void)
{
    return duration/74.0/2.0;
}

Ultrasonic ultrasonic(2);
void setup()
{
    Serial.begin(9600);
}
void loop()
{
    double RangeInInches;
    double RangeInCentimeters;
    ultrasonic.DistanceMeasure();// get the current signal time;
    RangeInInches = ultrasonic.microsecondsToInches();//convert the time to inches;
    RangeInCentimeters = ultrasonic.microsecondsToCentimeters();//convert the time to centimeters
    Serial.println("The distance to obstacles in front is: ");
    Serial.print(RangeInInches);//0~157 inches
    Serial.println(" inch");
    Serial.print(RangeInCentimeters);//0~400cm
    Serial.println(" cm");
    delay(1000);
}
```

## Soporte Técnico y Discusión

Si tienes algún problema técnico, publícalo en nuestro [foro](http://forum.seeedstudio.com/).  
¡Gracias por elegir nuestros productos! Estamos aquí para ayudarte y asegurarnos de que tu experiencia sea lo más fluida posible.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>