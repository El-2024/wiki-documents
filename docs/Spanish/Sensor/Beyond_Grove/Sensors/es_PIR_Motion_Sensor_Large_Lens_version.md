---
title: Módulo PIR Sensor de Movimiento
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/PIR_Motion_Sensor_Large_Lens_version/
slug: /es/PIR_Motion_Sensor_Large_Lens_version
last_update:
  date: 07/16/2025
  author: Guillermo
---
![](https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/img/Pir_motion_sensor_v1.0.jpg)

Los sensores PIR (detección pasiva de infrarrojos) se utilizan para detectar el movimiento de personas. Esta versión incluye una lente de gran tamaño que permite un rango largo y un ángulo amplio de detección. El conector estándar de 2.54 mm facilita su instalación en cualquier lugar.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/pir-motion-sensor-module-p-74.html?cPath=84_88&zenid=020999c566d2f31841dc54602b7d02ef)

## Características
---

* Largo alcance de detección  
* Amplio ángulo de cobertura  
* Bajo consumo de energía  
* Alimentación: DC 3.0 – 5.5 V  

## Especificaciones
---

* **Voltaje de entrada:** DC 3.0–5.5 V  
* **Corriente:** 100 µA (máx)  
* **Distancia de detección:** Hasta 9 m  
* **Señal de salida:** 0 V o VCC (salida en alto cuando se detecta movimiento)  
* **Ángulo de detección:** 120°  
* **Conector:** 3 pines, paso 2.54 mm  
* **Dimensiones:** L36 × W26 × H21 (mm)  

## Uso
---

El siguiente esquema muestra una aplicación sencilla para detectar movimiento. Cuando alguien se mueve dentro del área de detección, la salida SIG se pone en nivel alto y el LED se enciende. De lo contrario, la salida estará en nivel bajo. Esto permite detectar la presencia o movimiento de personas.

![](https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/img/PIR_motion_sensor_module_connection.JPG)

### Programación

Incluye el siguiente fragmento de código como ejemplo.  
El código de demostración es similar a:
```
/*******************************************************************************/
/*macro definitions of PIR motion sensor pin and LED pin*/
#define PIR_MOTION_SENSOR 8//Use pin 8 to receive the signal from the module
#define LED    4//the Grove - LED is connected to D4 of Arduino

void setup()
{
    pinsInit();
}

void loop()
{
    if(isPeopleDetected())//if it detects the moving people?
    turnOnLED();
    else
    turnOffLED();
}
void pinsInit()
{
    pinMode(PIR_MOTION_SENSOR, INPUT);
    pinMode(LED,OUTPUT);
}
void turnOnLED()
{
    digitalWrite(LED,HIGH);
}
void turnOffLED()
{
    digitalWrite(LED,LOW);
}
/***************************************************************/
/*Function: Detect whether anyone moves in it's detecting range*/
/*Return:-boolean, ture is someone detected.*/
boolean isPeopleDetected()
{
    int sensorValue = digitalRead(PIR_MOTION_SENSOR);
    if(sensorValue == HIGH)//if the sensor value is HIGH?
    {
        return true;//yes,return ture
    }
    else
    {
        return false;//no,return false
    }
}
```


## Visor de Esquemáticos Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/res/PIR_sensor_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##   Recursos
---
- [Archivo Eagle del Sensor PIR](https://files.seeedstudio.com/wiki/PIR_Motion_sensor_module/res/PIR_sensor_v1.0.zip)

## Soporte Técnico y Discusión

Si tienes algún problema técnico, por favor publica tu duda en nuestro [foro](http://forum.seeedstudio.com/).  
¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Contamos con varios canales de comunicación para satisfacer diferentes necesidades y preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>