---
title: Sensor de Flujo de Agua G1/8 pulg.
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/G1-8_Water_Flow_Sensor/
slug: /es/G1-8_Water_Flow_Sensor
last_update:
  date: 07/15/2025
  author: Guillermo
---
[![](https://files.seeedstudio.com/wiki/G1-8_Water_Flow_Sensor/img/G18_Water_Flow_Sensor.jpg)](https://www.seeedstudio.com/depot/G18-Water-Flow-Sensor-p-1346.html?cPath=25_32)

El sensor de flujo de agua consiste en un cuerpo de válvula de plástico, un rotor de agua y un sensor de efecto Hall. Cuando el agua fluye a través del rotor, este gira. Su velocidad cambia según la tasa de flujo. El sensor de efecto Hall emite una señal de pulso correspondiente. Este sensor es adecuado para detectar el flujo en dispensadores de agua o máquinas de café.

Contamos con una línea completa de sensores de flujo de agua en diferentes diámetros. Revísalos para encontrar el que mejor se adapte a tus necesidades.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/G1-8-Water-Flow-Sensor-p-1346.html)

## Características

* Compacto, fácil de instalar  
* Alta estanqueidad  
* Sensor de efecto Hall de alta calidad  
* Cumple con la normativa RoHS  

## Especificaciones

<table>
  <tbody>
    <tr>
      <td>Voltaje mínimo de trabajo</td>
      <td>DC 4.5V</td>
    </tr>
    <tr>
      <td>Corriente máxima de trabajo</td>
      <td>15 mA (DC 5 V)</td>
    </tr>
    <tr>
      <td>Voltaje de trabajo</td>
      <td>5 V～24 V</td>
    </tr>
    <tr>
      <td>Rango de flujo</td>
      <td>0.3~6 L/min</td>
    </tr>
    <tr>
      <td>Capacidad de carga</td>
      <td>≤10 mA (DC 5 V)</td>
    </tr>
    <tr>
      <td>Temperatura de operación</td>
      <td>≤80 ℃</td>
    </tr>
    <tr>
      <td>Temperatura del líquido</td>
      <td>≤120 ℃</td>
    </tr>
    <tr>
      <td>Humedad de operación</td>
      <td>35%～90% RH</td>
    </tr>
    <tr>
      <td>Presión de agua</td>
      <td>≤0.8 MPa</td>
    </tr>
    <tr>
      <td>Temperatura de almacenamiento</td>
      <td>-25 ℃～+80 ℃</td>
    </tr>
    <tr>
      <td>Humedad de almacenamiento</td>
      <td>25%～95% RH</td>
    </tr>
  </tbody>
</table>

## Primeros Pasos

<font>Nota: Este ejemplo está extraído del foro, realizado por Charles Gantt. Gracias por su contribución. Veamos cómo funciona.</font>

### Lectura del caudal con el sensor de flujo de agua

Este es parte de un proyecto en el que he estado trabajando y pensé compartirlo aquí, ya que hay varios hilos sobre cómo leer el caudal de agua en litros por hora usando el sensor de flujo de Seeed Studio. Usa una rueda giratoria simple que pulsa un sensor de efecto Hall. Leyendo estos pulsos y aplicando un poco de matemáticas, podemos medir el caudal con una precisión de hasta el 3%. Las roscas son G3/4, por lo que no será difícil encontrar terminales con barbilla.

**Instalación del hardware**

Necesitarás Seeeduino / Arduino, Sensor de Flujo de Agua, resistencia de 10k, una protoboard y algunos cables.

La conexión del sensor de flujo es sencilla. Tiene 3 cables: negro, rojo y amarillo.  
- Negro a tierra (GND) del Seeeduino  
- Rojo a 5V del Seeeduino  
- Amarillo al pin 2 del Seeeduino, pasando primero por una resistencia pull-up de 10kΩ

Aquí un diagrama de fritzing que muestra cómo conectarlo:

![](https://files.seeedstudio.com/wiki/G1-8_Water_Flow_Sensor/img/Reading_liquid_flow_rate_with_an_Arduino.jpg)

Una vez conectado, sube el siguiente código a tu Seeeduino. Con un flujo de líquido activo a través del sensor, abre el monitor serial y mostrará el caudal actualizado cada segundo.

**Código de ejemplo**

```
// reading liquid flow rate using Seeeduino and Water Flow Sensor from Seeedstudio.com
// Code adapted by Charles Gantt from PC Fan RPM code written by Crenn @thebestcasescenario.com
// http:/themakersworkbench.com http://thebestcasescenario.com https://www.seeedstudio.com

volatile int NbTopsFan; //measuring the rising edges of the signal
int Calc;
int hallsensor = 2;    //The pin location of the sensor

void rpm ()     //This is the function that the interupt calls
{
    NbTopsFan++;  //This function measures the rising and falling edge of the

    hall effect sensors signal
}
// The setup() method runs once, when the sketch starts
void setup() //
{
    pinMode(hallsensor, INPUT); //initializes digital pin 2 as an input
    Serial.begin(9600); //This is the setup function where the serial port is

    initialised,
    attachInterrupt(0, rpm, RISING); //and the interrupt is attached
}
// the loop() method runs over and over again,
// as long as the Arduino has power
void loop ()
{
    NbTopsFan = 0;   //Set NbTops to 0 ready for calculations
    sei();      //Enables interrupts
    delay (1000);   //Wait 1 second
    cli();      //Disable interrupts
    Calc = (NbTopsFan * 60 / 7.5); //(Pulse frequency x 60) / 7.5Q, = flow rate

    in L/hour
    Serial.print (Calc, DEC); //Prints the number calculated above
    Serial.print (" L/hour\r\n"); //Prints "L/hour" and returns a  new line
}
```

Puedes consultar nuestro foro para más detalles sobre [Cómo leer la tasa de flujo de agua con el sensor de flujo de agua](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632).

## Diagrama de conexión

El diámetro externo de la rosca de las conexiones es de 1.4 mm.

![](https://files.seeedstudio.com/wiki/G1-8_Water_Flow_Sensor/img/Wfs-wiring.jpg)

## Tabla de salida

Frecuencia de pulso (Hz) en prueba horizontal = 7.5Q, donde Q es la tasa de flujo en L/min. (Resultados con un margen de +/- 3%)

<table>
  <tbody>
    <tr>
      <td>Nivel alto de pulso de salida</td>
      <td>Voltaje de señal &gt; 4.5 V (entrada DC 5 V)</td>
    </tr>
    <tr>
      <td>Nivel bajo de pulso de salida</td>
      <td>Voltaje de señal &lt; 0.5 V (entrada DC 5 V)</td>
    </tr>
    <tr>
      <td>Precisión</td>
      <td>3% (Tasa de flujo de 1 L/min a 10 L/min)</td>
    </tr>
    <tr>
      <td>Ciclo de trabajo de la señal de salida</td>
      <td>40%～60%</td>
    </tr>
  </tbody>
</table>

## Recursos

*   [Datasheet del sensor de flujo de agua.pdf](https://files.seeedstudio.com/wiki/G1-8_Water_Flow_Sensor/res/Water_flow_sensor_datasheet.pdf)

*   [Cómo leer la tasa de flujo de agua con el sensor de flujo de agua](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632)

*   [Visualización de la tasa de flujo de agua en LCD](http://www.practicalarduino.com/projects/water-flow-gauge)

*   [Datasheet del material](http://garden.seeedstudio.com/images/4/4e/YEE70G30HSLNC..pdf)

## Soporte Técnico y Discusión del Producto

Si tienes algún problema técnico, por favor envía tu consulta a nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>