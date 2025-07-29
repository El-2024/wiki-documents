---
title: Sensor de Flujo de Agua G3-4
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/G3-4_Water_Flow_sensor/
slug: /es/G3-4_Water_Flow_sensor
last_update:
  date: 07/15/2025
  author: Guillermo
---
![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/P21408651.jpg)

El sensor de flujo de agua consiste en un cuerpo de válvula de plástico, un rotor de agua y un sensor de efecto Hall. Cuando el agua fluye a través del rotor, este gira. Su velocidad cambia según la tasa de flujo. El sensor de efecto Hall emite la señal de pulso correspondiente.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/g34-water-flow-sensor-p-1083.html?cPath=144_151)

## Especificaciones

---

<table>
  <tbody>
    <tr>
      <td>Voltaje mínimo de trabajo</td>
      <td>DC 4.5V</td>
    </tr>
    <tr>
      <td>Corriente máxima de trabajo</td>
      <td>15mA (DC 5V)</td>
    </tr>
    <tr>
      <td width={400}>Voltaje de trabajo</td>
      <td width={400}>5V～24V</td>
    </tr>
    <tr>
      <td>Rango de tasa de flujo</td>
      <td>1～60 L/min</td>
    </tr>
    <tr>
      <td>Capacidad de carga</td>
      <td>≤10mA (DC 5V)</td>
    </tr>
    <tr>
      <td>Temperatura de operación</td>
      <td>≤80℃</td>
    </tr>
    <tr>
      <td>Temperatura del líquido</td>
      <td>≤120℃</td>
    </tr>
    <tr>
      <td>Humedad de operación</td>
      <td>35%～90% RH</td>
    </tr>
    <tr>
      <td>Presión del agua</td>
      <td>≤2.0 MPa</td>
    </tr>
    <tr>
      <td>Temperatura de almacenamiento</td>
      <td>-25℃～+80℃</td>
    </tr>
    <tr>
      <td>Humedad de almacenamiento</td>
      <td>25%～95% RH</td>
    </tr>
  </tbody>
</table>

## Dimensiones mecánicas

---

### Componentes del sensor

<table>
  <tbody>
    <tr>
      <th>No.</th>
      <th>Nombre</th>
      <th>Cantidad</th>
      <th>Material</th>
      <th>Nota</th>
    </tr>
    <tr style="font-size: 90%;">
      <td width="200">1</td>
      <td width="150">Cuerpo de válvula</td>
      <td width="150">1</td>
      <td width="150">PA66 + 33% fibra de vidrio</td>
      <td width="150"></td>
    </tr>
    <tr style="font-size: 90%;">
      <td width="200">2</td>
      <td width="150">Bolita de acero inoxidable</td>
      <td width="150">1</td>
      <td width="150">Acero inoxidable SUS304</td>
      <td width="150"></td>
    </tr>
    <tr style="font-size: 90%;">
      <td>3</td>
      <td>Eje</td>
      <td>1</td>
      <td>Acero inoxidable SUS304</td>
      <td></td>
    </tr>
    <tr style="font-size: 90%;">
      <td>4</td>
      <td>Impulsor</td>
      <td>1</td>
      <td>POM</td>
      <td></td>
    </tr>
    <tr style="font-size: 90%;">
      <td>5</td>
      <td>Imán en anillo</td>
      <td>1</td>
      <td>Ferrita</td>
      <td></td>
    </tr>
    <tr style="font-size: 90%;">
      <td>6</td>
      <td>Anillo medio</td>
      <td>1</td>
      <td>PA66 + 33% fibra de vidrio</td>
      <td></td>
    </tr>
    <tr style="font-size: 90%;">
      <td>7</td>
      <td>Anillo de sello en O</td>
      <td>1</td>
      <td>Caucho</td>
      <td></td>
    </tr>
    <tr style="font-size: 90%;">
      <td>8</td>
      <td>Anillo de sello electrónico</td>
      <td>1</td>
      <td>Caucho</td>
      <td></td>
    </tr>
    <tr style="font-size: 90%;">
      <td>9</td>
      <td>Tapa</td>
      <td>1</td>
      <td>PA66 + 33% fibra de vidrio</td>
      <td></td>
    </tr>
    <tr style="font-size: 90%;">
      <td>10</td>
      <td>Tornillo</td>
      <td>4</td>
      <td>Acero inoxidable SUS304</td>
      <td></td>
    </tr>
    <tr style="font-size: 90%;">
      <td>11</td>
      <td>Cable</td>
      <td>1</td>
      <td>1007 24AWG</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Ejemplo de Uso

---
<font>Nota: Este ejemplo está extraído del foro, realizado por Charles Gantt. Gracias por su contribución. Veamos cómo funciona.</font>

### Lectura de la tasa de flujo de agua con el sensor de flujo de agua

Este es parte de un proyecto en el que he estado trabajando y pensé compartirlo aquí, ya que hay varios hilos sobre cómo leer la tasa de flujo de agua en litros por hora usando el Sensor de Flujo de Agua que se encuentra en Seeed Studio Depo. Usa una rueda giratoria simple que genera pulsos en un sensor de efecto Hall. Leyendo estos pulsos e implementando un poco de matemática, podemos leer la tasa de flujo de líquidos con una precisión de hasta un 3%. Los conectores son simples G3/4, por lo que no será difícil encontrar extremos con conector para manguera.

**Instalación del hardware**

Necesitarás Seeeduino / Arduino, Sensor de Flujo de Agua, una resistencia de 10K, una protoboard y cables jumper.

El cableado del Sensor de Flujo de Agua es bastante sencillo. Hay 3 cables: Negro, Rojo y Amarillo.  
Negro al pin de tierra del Seeeduino  
Rojo al pin de 5V del Seeeduino  
El cable amarillo debe conectarse a una resistencia pull-up de 10K y luego al pin 2 del Seeeduino.

Aquí tienes un diagrama Fritzing que hice para mostrar cómo conectarlo todo.

![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/Reading_liquid_flow_rate_with_an_Arduino.jpg)

Una vez conectado, deberás subir el siguiente código a tu Seeeduino. Cuando esté cargado y haya líquido fluyendo a través del Sensor de Flujo de Agua, puedes abrir el monitor serial y mostrará la tasa de flujo, actualizándose cada segundo.

**Programación**

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
    Calc = (NbTopsFan * 60 / 5.5); //(Pulse frequency x 60) / 5.5Q, = flow rate

    in L/hour
    Serial.print (Calc, DEC); //Prints the number calculated above
    Serial.print (" L/hour\r\n"); //Prints "L/hour" and returns a  new line
}
```

Puedes consultar nuestro foro para más detalles sobre [Lectura de la tasa de flujo de agua con el sensor de flujo de agua](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632).

## Diagrama de conexión

---
El diámetro externo de la rosca de las conexiones es de 1.4 mm.

![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/Wfs-wiring.jpg)

## Tabla de salida

---
Frecuencia de pulso (Hz) en prueba horizontal = 5.5Q, donde Q es la tasa de flujo en L/min. (Resultados con margen de +/- 3%)

<table>
  <tbody>
    <tr>
      <td width={400}>Nivel alto de pulso de salida</td>
      <td width={400}>Voltaje de señal &gt;4.5 V (entrada DC 5 V)</td>
    </tr>
    <tr>
      <td>Nivel bajo de pulso de salida</td>
      <td>Voltaje de señal &lt;0.5 V (entrada DC 5 V)</td>
    </tr>
    <tr>
      <td>Precisión</td>
      <td>3% (Tasa de flujo de 1 L/min a 10 L/min)</td>
    </tr>
    <tr>
      <td>Ciclo de trabajo de la señal de salida</td>
      <td>40%～60%</td>
    </tr>
  </tbody>
</table>

![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/G34_Flow_rate_to_frequency.jpg)

## Preguntas Frecuentes (FAQ)

---
Aquí está la sección FAQ del sensor, donde se pueden encontrar preguntas y respuestas sobre este tipo de producto.

**¿De qué materiales está hecho el sensor de flujo de agua?**

Nailon con fibra, evitando ácido fuerte y base fuerte.

**¿Es seguro el sensor de flujo de agua para agua potable?**

Sí, ha sido usado en máquinas dispensadoras de agua potable.

## Recursos

---

* [Lectura de la tasa de flujo de agua con el sensor de flujo de agua](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=989&amp;p=3632#p3632)

* [Visualización de la tasa de flujo de agua en LCD](http://www.practicalarduino.com/projects/water-flow-gauge)

* [Datasheet del material](http://garden.seeedstudio.com/images/4/4e/YEE70G30HSLNC..pdf)

## Proyectos Relacionados

---
Lamentablemente, aún no tenemos demos sobre el sensor de flujo de agua G3/4 en la sección de [Recetas](https://www.seeedstudio.com/recipe/).

Publica tu increíble proyecto sobre el sensor de flujo de agua G3/4 para <font color="#FF0000">ganar un cupón de $100</font>. No dudes en contactarnos: [recipe@seeed.cc](mailto:recipe@seeed.cc)

Aquí te presentamos algunos proyectos sobre [Grove-Water Sensor](https://www.seeedstudio.com/depot/Grove-Water-Sensor-p-748.html).

### ¿Qué es Grove - Water Sensor?

![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/Twig-Water_Sensor.jpg)

Este módulo sensor de agua es parte del sistema Twig. Puedes usarlo con pines analógicos para detectar la cantidad de agua que hace contacto entre las pistas conectadas a tierra y las pistas del sensor.

Funciona con una serie de pistas expuestas conectadas a tierra, entrelazadas con las pistas del sensor.

Las pistas del sensor tienen una resistencia pull-up débil de 1 MΩ. La resistencia mantiene el valor alto hasta que una gota de agua conecta la pista del sensor con la tierra, haciendo que el valor baje.

Este circuito funciona con los pines digitales de tu Arduino.

### Arduino Plant Warden

![](https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/552c2c4f2e5a8.jpg)

Este proyecto usa Grove - Water Sensor para crear una solución simple pero efectiva para regar plantas.

Cómo funciona:

* Muestra datos del sensor de agua y temperatura en pantalla OLED

* Envía alerta y activa un controlador de bomba cuando el agua está por debajo del umbral

* Provee variación de color con 10 LEDs RGB

[**Quiero hacerlo.**](https://www.seeedstudio.com/recipe/102-arduino-plant-warden.html)

[**Más proyectos increíbles con Sensor de Agua**](https://www.seeedstudio.com/recipe/index.php?query=water+sensor)

### Comparte tus increíbles proyectos con nosotros

Nacidos con el espíritu de crear y compartir, creemos que eso es lo que hace a un maker.

Solo por eso, la comunidad open source es tan próspera hoy en día.

No importa quién seas o qué hayas hecho, hacker, maker, artista o ingeniero.

Mientras compartas tus trabajos, eres parte de la comunidad open source y estás haciendo contribuciones.

Comparte tus proyectos con nosotros en [Recipe](https://www.seeedstudio.com/recipe/) y gana la oportunidad de convertirte en Usuario Core de Seeed.

* Los Usuarios Core son quienes muestran gran interés en productos Seeed y hacen contribuciones significativas en Recipe.

* Colaboramos con ellos en el desarrollo de nuevos productos, dándoles acceso anticipado y soporte técnico a cambio de feedback valioso.

<font color="#FF0000">Para más información sobre Usuarios Core, escribe a:</font> [recipe@seeed.cc](mailto:recipe@seeed.cc)

## Soporte Técnico y Discusión del Producto

Gracias por elegir nuestros productos. Estamos aquí para brindarte soporte y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
