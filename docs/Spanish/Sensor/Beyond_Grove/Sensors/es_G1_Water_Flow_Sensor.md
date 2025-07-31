---
title: Sensor de Flujo de Agua G1
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/G1_Water_Flow_Sensor/
slug: /es/G1_Water_Flow_Sensor
last_update:
  date: 07/15/2025
  author: Guillermo
---
![](https://files.seeedstudio.com/wiki/G1_Water_Flow_Sensor/img/G1inch_Water_Flow_sensor.jpeg)

El sensor de flujo de agua consta de un cuerpo de válvula de plástico, un rotor de agua y un sensor de efecto Hall. Cuando el agua fluye a través del rotor, éste gira. Su velocidad varía según el caudal. El sensor de efecto Hall genera una señal de pulsos correspondiente.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/g34-water-flow-sensor-p-1083.html?cPath=144_151)

## Especificaciones

---

| **Parámetro**                    | **Valor**               |
|----------------------------------|--------------------------|
| Voltaje mínimo de operación      | DC 4.5V                  |
| Corriente máxima de operación    | 15 mA (DC 5V)            |
| Rango de voltaje de operación    | 5 V ～ 24 V              |
| Rango de flujo                   | 1 ～ 60 L/min            |
| Capacidad de carga               | ≤10 mA (DC 5V)           |
| Temperatura de operación         | ≤80 ℃                   |
| Temperatura del líquido          | ≤120 ℃                  |
| Humedad de operación             | 35% ～ 90% RH            |
| Presión de agua                  | ≤1.75 MPa (Máx. 2 MPa)   |
| Temperatura de almacenamiento    | -25 ℃ ～ +80 ℃          |
| Humedad de almacenamiento        | 25% ～ 95% RH            |

## Dimensiones mecánicas

---

### Componentes del sensor

<table>
  <thead>
    <tr>
      <th>No.</th>
      <th>Nombre</th>
      <th>Cantidad</th>
      <th>Material</th>
      <th>Nota</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{ fontSize: '90%' }}>
      <td style={{ width: '200px' }}>1</td>
      <td style={{ width: '150px' }}>Cuerpo de válvula</td>
      <td style={{ width: '150px' }}>1</td>
      <td style={{ width: '150px' }}>PA66 + 33% fibra de vidrio</td>
      <td style={{ width: '150px' }}></td>
    </tr>
    <tr style={{ fontSize: '90%' }}>
      <td style={{ width: '200px' }}>2</td>
      <td style={{ width: '150px' }}>Bola de acero inoxidable</td>
      <td style={{ width: '150px' }}>1</td>
      <td style={{ width: '150px' }}>Acero inoxidable SUS304</td>
      <td style={{ width: '150px' }}></td>
    </tr>
    <tr style={{ fontSize: '90%' }}>
      <td>3</td>
      <td>Eje</td>
      <td>1</td>
      <td>Acero inoxidable SUS304</td>
      <td></td>
    </tr>
    <tr style={{ fontSize: '90%' }}>
      <td>4</td>
      <td>Impulsor</td>
      <td>1</td>
      <td>POM</td>
      <td></td>
    </tr>
    <tr style={{ fontSize: '90%' }}>
      <td>5</td>
      <td>Imán en anillo</td>
      <td>1</td>
      <td>Ferrita</td>
      <td></td>
    </tr>
    <tr style={{ fontSize: '90%' }}>
      <td>6</td>
      <td>Anillo intermedio</td>
      <td>1</td>
      <td>PA66 + 33% fibra de vidrio</td>
      <td></td>
    </tr>
    <tr style={{ fontSize: '90%' }}>
      <td>7</td>
      <td>Anillo de sellado (O-ring)</td>
      <td>1</td>
      <td>Goma</td>
      <td></td>
    </tr>
    <tr style={{ fontSize: '90%' }}>
      <td>8</td>
      <td>Anillo de sellado electrónico</td>
      <td>1</td>
      <td>Goma</td>
      <td></td>
    </tr>
    <tr style={{ fontSize: '90%' }}>
      <td>9</td>
      <td>Cubierta</td>
      <td>1</td>
      <td>PA66 + 33% fibra de vidrio</td>
      <td></td>
    </tr>
    <tr style={{ fontSize: '90%' }}>
      <td>10</td>
      <td>Tornillo</td>
      <td>4</td>
      <td>Acero inoxidable SUS304</td>
      <td></td>
    </tr>
    <tr style={{ fontSize: '90%' }}>
      <td>11</td>
      <td>Cable</td>
      <td>1</td>
      <td>1007 24AWG</td>
      <td></td>
    </tr>
  </tbody>
</table>


## Ejemplo de uso

---
<font>Nota: Este ejemplo fue extraído del foro y fue realizado por Charles Gantt. Agradecemos su contribución. Veamos cómo funciona.</font>

### Lectura del caudal con el sensor de flujo de agua

Este ejemplo forma parte de un proyecto en el que estuve trabajando y quería compartirlo, ya que hubo varios hilos sobre cómo leer el caudal en litros por hora usando el sensor de flujo de agua disponible en Seeed Studio. Utiliza una simple rueda giratoria que genera pulsos mediante un sensor de efecto Hall. Leyendo estos pulsos y aplicando algo de matemática, podemos calcular el caudal de forma precisa (±3%). Las roscas son estándar G1, por lo que encontrar conexiones de manguera es sencillo.

**Instalación de hardware**

Necesitarás:

- Seeeduino o Arduino  
- Sensor de flujo de agua  
- Resistencia de 10 kΩ  
- Protoboard  
- Cables jumper  

El cableado del sensor es bastante simple. Hay 3 cables: negro, rojo y amarillo.

- **Negro** → GND de Seeeduino  
- **Rojo** → 5 V de Seeeduino  
- **Amarillo** → resistencia pull-up de 10 kΩ, luego al pin digital 2  

Aquí tienes un diagrama de Fritzing para mostrar cómo conectarlo:

![](https://files.seeedstudio.com/wiki/G1_Water_Flow_Sensor/img/Reading_liquid_flow_rate_with_an_Arduino.jpg)

**Programación**

Sube el siguiente código a tu Seeeduino. Una vez cargado y con líquido fluyendo por el sensor, abre el monitor serial y verás el caudal actualizado cada segundo.

```
// reading liquid flow rate using Seeeduino and Water Flow Sensor from Seeedstudio.com
// Code adapted by Charles Gantt from PC Fan RPM code written by Crenn @thebestcasescenario.com
// http:/themakersworkbench.com http://thebestcasescenario.com https://www.seeedstudio.com

volatile int NbTopsFan; //measuring the rising edges of the signal
int Calc;
int hallsensor = 2;    //The pin location of the sensor

void rpm ()     //This is the function that the interupt calls
{
    NbTopsFan++;  //This function measures the rising and falling edge of the hall effect sensors signal
}
// The setup() method runs once, when the sketch starts
void setup() //
{
    pinMode(hallsensor, INPUT); //initializes digital pin 2 as an input
    Serial.begin(9600); //This is the setup function where the serial port is initialised,
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
    Calc = (NbTopsFan * 60); //(Pulse frequency x 60) / Q, = flow rate in L/hour
    Serial.print (Calc, DEC); //Prints the number calculated above
    Serial.print (" L/hour\r\n"); //Prints "L/hour" and returns a  new line
}
```

Puedes consultar más detalles en el foro:  
[Lectura del caudal con el sensor de flujo de agua](https://forum.seeedstudio.com/viewtopic.php?f=4&t=989&p=3632#p3632)

## Diagrama de conexión

---
El diámetro exterior de las roscas es de 1.4 mm.

![](https://files.seeedstudio.com/wiki/G1_Water_Flow_Sensor/img/Wfs-wiring.jpg)

## Tabla de salida

---
Frecuencia de pulsos (Hz) en prueba horizontal = 1 × Q, donde Q es el caudal en L/min. (Precisión ±3%)

<table>
  <tbody>
    <tr>
      <td width="400">Nivel alto del pulso</td>
      <td width="400">Voltaje &gt; 4.5 V (entrada DC 5 V)</td>
    </tr>
    <tr>
      <td>Nivel bajo del pulso</td>
      <td>Voltaje &lt; 0.5 V (entrada DC 5 V)</td>
    </tr>
    <tr>
      <td>Precisión</td>
      <td>±3% (entre 1 y 10 L/min)</td>
    </tr>
    <tr>
      <td>Ciclo de trabajo</td>
      <td>40%～60%</td>
    </tr>
  </tbody>
</table>

## Preguntas frecuentes

---
**¿De qué material está hecho el sensor de flujo?**  
Está hecho de nailon con fibra, resistente a condiciones normales. Se debe evitar el contacto con ácidos o bases fuertes.

**¿Es seguro usar el sensor con agua potable?**  
Sí, es seguro para el consumo humano. Se usa frecuentemente en dispensadores de agua.

## Recursos

* [Lectura de caudal con el sensor de flujo de agua (foro)](https://forum.seeedstudio.com/viewtopic.php?f=4&t=989&p=3632#p3632)  

* [Visualización del caudal en LCD](http://www.practicalarduino.com/projects/water-flow-gauge)  

* [Hoja de datos del material](https://wiki.seeedstudio.com/images/4/4e/YEE70G30HSLNC..pdf)

## Soporte técnico y discusión

Gracias por elegir nuestros productos. Estamos aquí para brindarte soporte y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos distintos canales de comunicación para adaptarnos a tus necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
