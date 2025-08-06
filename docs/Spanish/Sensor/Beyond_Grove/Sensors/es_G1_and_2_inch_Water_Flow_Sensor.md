---
title: Sensor de Flujo de Agua G1/2 pulg.
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/G1_and_2_inch_Water_Flow_Sensor/
slug: /es/G1_and_2_inch_Water_Flow_Sensor
last_update:
  date: 07/15/2025
  author: Guillermo
---
![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/flowsensor_LRG.jpg)

El sensor de flujo de agua consiste en un cuerpo de válvula plástico, un rotor de agua y un sensor de efecto Hall. Cuando el agua pasa a través del rotor, éste gira, y la velocidad de giro varía según el caudal. El sensor de efecto Hall emite una señal de pulsos correspondiente.

## Historial de Versiones

| Revisión | Descripción          | Fecha       |
|----------|---------------------|-------------|
| v1.0     | Lanzamiento inicial | 31 de mayo, 2010 |
| v2.0     | Publicación versión 2.0 | 5 de julio, 2010 |

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/g12-water-flow-sensor-p-635.html?cPath=84_87&zenid=020999c566d2f31841dc54602b7d02ef)

## Especificaciones
---

| Ítem                  | Valor             |
|-----------------------|-------------------|
| Voltaje mínimo de trabajo | DC 4.5 V       |
| Corriente máxima       | 15 mA (DC 5 V)    |
| Voltaje de trabajo    | 5 V ～ 24 V       |
| Rango de caudal        | 1 ～ 30 L/min     |
| Capacidad de carga     | ≤ 10 mA (DC 5 V)  |
| Temperatura de operación | ≤ 80 °C          |
| Temperatura del líquido | ≤ 120 °C          |
| Humedad de operación   | 35% ～ 90% RH     |
| Presión del agua       | ≤ 2.0 MPa         |
| Temperatura de almacenamiento | -25 °C ～ +80 °C |
| Humedad de almacenamiento | 25% ～ 95% RH    |

## Dimensiones Mecánicas
---
Unidad: mm

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Dem1.png)

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Dem2.png)

## Componentes del Sensor
---

| No. | Nombre               | Cantidad | Material                 | Nota    |
|------|---------------------|----------|--------------------------|---------|
| 1    | Cuerpo de válvula    | 1        | PA66 + 33% fibra de vidrio |         |
| 2    | Bola de acero inoxidable | 1    | Acero inoxidable SUS304   |         |
| 3    | Eje                  | 1        | Acero inoxidable SUS304   |         |
| 4    | Impulsor             | 1        | POM                      |         |
| 5    | Imán en anillo       | 1        | Ferrita                  |         |
| 6    | Anillo intermedio    | 1        | PA66 + 33% fibra de vidrio |         |
| 7    | Anillo de sello O    | 1        | Goma                     |         |
| 8    | Anillo de sello electrónico | 1  | Goma                     |         |
| 9    | Cubierta             | 1        | PA66 + 33% fibra de vidrio |         |
| 10   | Tornillos            | 4        | Acero inoxidable SUS304   | 3.0 × 11 mm |
| 11   | Cable                | 1        | 1007 24 AWG              |         |



## Ejemplo de Uso

:::note
Este ejemplo fue extraído del foro, realizado por Charles Gantt. Agradecemos su contribución. Veamos cómo funciona.
:::

### Lectura del caudal con el sensor de flujo de agua

Este proyecto usa un sensor con una rueda giratoria que genera pulsos mediante un sensor Hall. Midiendo estos pulsos y aplicando un cálculo, podemos obtener el caudal con un margen de error del 3%. La rosca es G3/4, por lo que conseguir conexiones es sencillo.

### Instalación de Hardware

Material necesario:

- Seeeduino o Arduino  
- Sensor de flujo de agua  
- Resistencia de 10 kΩ  
- Protoboard  
- Cables jumper  

Conexiones:

- Cable negro → GND de Seeeduino  
- Cable rojo → 5 V de Seeeduino  
- Cable amarillo → Resistencia pull-up 10 kΩ → Pin digital 2 de Seeeduino  

Diagrama de conexiones:

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Reading_liquid_flow_rate_with_an_Arduino.jpg)

**Programación**

```c
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

Puedes consultar nuestro foro para más detalles sobre la lectura del caudal con el sensor de flujo de agua.

## Diagrama de Conexiones
---

El diámetro externo de rosca para las conexiones es de 1.4 mm.
![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Wfs-wiring.jpg)

## Tabla de Salida
---

Frecuencia de pulso (Hz) en prueba horizontal = 7.5 × Q, donde Q es el caudal en L/min. (Resultados con un margen de ± 3%)

| Ítem                    | Valor                               |
|-------------------------|-----------------------------------|
| Nivel alto de pulso      | Voltaje de señal > 4.5 V (entrada DC 5 V) |
| Nivel bajo de pulso      | Voltaje de señal < 0.5 V (entrada DC 5 V) |
| Precisión                | 3% (para caudal entre 1 L/min y 10 L/min) |
| Ciclo de trabajo de señal| 40% ～ 60%                        |

## Proyectos Relacionados

Lamentablemente, aún no contamos con una demo del sensor de flujo G1/2 en [Recipe](https://community.seeedstudio.com/projects.html#recipe).

Aquí te presentamos algunos proyectos relacionados con el [Grove - Water Sensor](https://www.seeedstudio.com/depot/Grove-Water-Sensor-p-748.html).

### ¿Qué es Grove - Water Sensor?

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/Twig_-_Water_Sensor.jpg)

Este módulo sensor de agua es parte del sistema Twig. Puedes usarlo con pines analógicos para detectar la cantidad de agua que conecta las pistas de tierra y sensor.

Funciona mediante una serie de pistas expuestas conectadas a tierra, entre las cuales se intercalan las pistas sensor.

Las pistas sensor cuentan con una resistencia pull-up débil de 1 MΩ, que mantiene el valor alto hasta que una gota de agua conecta la pista sensor con la pista de tierra.

Este circuito funciona con los pines digitales de entrada/salida del Arduino.

### Arduino Plant Warden

![](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/img/552c2c4f2e5a8.jpg)

Este proyecto utiliza el Grove - Water Sensor para crear una solución sencilla y efectiva para regar plantas.

**Cómo funciona:**
- Muestra las lecturas del sensor de agua y temperatura en una pantalla OLED.
- Envía alertas y activa un controlador de bomba cuando el agua está bajo un umbral.
- Provee variaciones de color con 10 LEDs RGB.

[Quiero hacerlo.](https://community.seeedstudio.com/project_detail.html?id=103)

[Más proyectos geniales con Water Sensor](https://www.seeedstudio.com/recipe/index.php?query=water+sensor)

## Comparte tus proyectos geniales con nosotros

Nacidos con el espíritu de crear y compartir, creemos que eso es lo que hace a un maker.

No importa quién seas o qué hayas creado: hacker, maker, artista o ingeniero.

Mientras compartas tus proyectos con otros, eres parte de la comunidad open source y estás contribuyendo.

Ahora comparte tus proyectos con nosotros en [Recipe](https://community.seeedstudio.com/) y gana la oportunidad de convertirte en Core User de Seeed.

- Los Core Users son quienes muestran gran interés por los productos Seeed y aportan significativamente en Recipe.

- Cooperamos con nuestros Core Users en el desarrollo de nuevos productos, dándoles acceso anticipado y esperando sus valiosos comentarios para mejorar el rendimiento y experiencia.

- Frecuentemente, ofrecemos hardware, servicios de PCBA y soporte técnico. Además, existe posibilidad de cooperación comercial.

Para más información sobre Core User, escribe a: recipe@seeed.cc

## Licencia
---

This documentation is licensed under the Creative Commons [Attribution-ShareAlike License 3.0](https://creativecommons.org/licenses/by-sa/3.0/) Source code and libraries are licensed under [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), see source code files for details.

Esta documentación está bajo licencia Creative Commons [Reconocimiento-CompartirIgual 3.0](https://creativecommons.org/licenses/by-sa/3.0/).  
El código fuente y librerías están bajo licencia [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), consulta los archivos fuente para más detalles.

## Preguntas Frecuentes (FAQ)

1. **¿De qué materiales está hecho el sensor de flujo?**  
   - Nylon con fibra, evitando ácidos y bases fuertes.

2. **¿El sensor de flujo es seguro para agua potable?**  
   - Sí, se ha utilizado en máquinas dispensadoras de agua potable.

## Recursos
---

- [Datasheet del sensor de flujo](https://files.seeedstudio.com/wiki/G1_and_2_inch_Water_Flow_Sensor/res/Water_flow_sensor_datasheet.pdf)  
- [Lectura de caudal con Water Flow Sensor](https://community.seeedstudio.com/topic_detail.html?id=575#p3632)  
- [Visualización de caudal en LCD](https://github.com/practicalarduino/WaterFlowGauge)  
- [Datasheet del material](http://garden.seeedstudio.com/images/4/4e/YEE70G30HSLNC..pdf)

## Soporte Técnico y Discusión

Si tienes algún problema técnico, por favor envía tu consulta en nuestro [foro](http://forum.seeedstudio.com/).

Gracias por elegir nuestros productos. Estamos para apoyarte y asegurar que tu experiencia sea óptima. Ofrecemos diversos canales de comunicación para atender tus necesidades y preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>