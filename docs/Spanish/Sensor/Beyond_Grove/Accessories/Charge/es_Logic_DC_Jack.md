---
title: Logic DC Jack - Controlador Lógico AND y NOT
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Logic_DC_Jack/
slug: /es/Logic_DC_Jack
last_update:
  date: 07/12/2025
  author: Guillermo
---


![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_fengmian.JPG)

Este es un controlador lógico fácil de usar que implementa las funciones lógicas **AND** y **NOT**. Está diseñado con un puente H que puede manejar ciertas aplicaciones de control de motores, por lo que ya no estás limitado únicamente a aplicaciones con LEDs.
Si eres principiante en programación y quieres empezar con algo simple, esta es una opción inteligente para comenzar.

## Características

- Entrada dual y salida única  
- Selección de lógica mediante un interruptor  
- Entrada por defecto en nivel ALTO  
- Salida en medio puente, puede controlar motores directamente  
- Alimentación mediante batería de 9 V  

## Especificaciones

- Corriente sin carga: 10 ± 1 mA  
- Voltaje de entrada: 6~9 V  
- Voltaje de salida: 5 V  
- Eficiencia de conversión de potencia: 82 ± 5 %

## Descripción del hardware

Aquí hay un diagrama de bloques del Logic_DC_Jack.

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_hardware_overview1.JPG)

* **Entrada** - Entrada lógica

  * GND - Conectar a tierra

    * VCC - Conectar a la fuente de alimentación

    * IN2 - Entrada 2

    * IN1 - Entrada 1

* **Salida** - Salida lógica

  * GND - Conectar a tierra

    * VCC - Conectar a la fuente de alimentación

    * OUT - Salida

    * OUT - Salida

* **LED de Estado** - Un LED rojo

  * ENCENDIDO - Modo NOT

    * APAGADO - Modo AND

* **Interruptor de Función**

  * Off - Apagar

    * Not - Modo NOT, significa que la placa ahora es una compuerta lógica NOT, solo puede admitir un módulo de entrada.

    * And - Modo AND, cuando solo se inserta un cable Grove en el conector izquierdo de la placa principal, esta actuará como un simple conector. Pero si usas un cable Grove con bifurcación, la placa principal funcionará como una compuerta lógica AND.

_Nota: En modo AND, IN2 está en ALTO por defecto, por lo que si solo hay un módulo de entrada, el Logic DC Jack actúa como un buffer._

* **Entrada de Alimentación** - Entrada de alimentación de CC, se requiere entre 6-9V

* **LED de Alimentación** - Un LED verde, encendido cuando hay suministro de energía

## Primeros Pasos

Después de esta sección, podrás usar el Logic DC Jack en solo unos pocos pasos.

### ¿Cómo funciona?

Logic DC Jack es un dispositivo lógico, utilizado para lograr funciones lógicas simples. Consulta estos enlaces para más información sobre [compuerta NOT](https://es.wikipedia.org/wiki/Compuerta_NOT) y [compuerta AND](https://es.wikipedia.org/wiki/Compuerta_AND) antes de comenzar.

Este módulo incluye dos tipos de cables y usarás uno de ellos al conectar una o dos entradas al puerto de entrada.

<dl><dd> Situación 1 – Una entrada
</dd><dd> Si solo hay un módulo de entrada, el Logic DC Jack puede realizar funciones lógicas AND y NOT. A continuación, se muestra la figura de la función lógica:
</dd></dl>

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_DC_Jack_3.png)

<dl><dd> Situación 2 – Dos entradas
</dd><dd> Si hay dos módulos de entrada, este Logic DC Jack solo puede realizar la función lógica AND. A continuación, se muestra la figura de la función lógica:
</dd></dl>

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_DC_Jack_4.png)

Primero elige el número de entradas y luego ajusta el interruptor a la posición correcta, así se confirma la función lógica deseada.

### ¿Cómo identificar el puerto de entrada y el de salida?

Hay dos flechas en la carcasa que permiten distinguir fácilmente la entrada de la salida.

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_fengmian_2.JPG)

### ¿Cómo saber el nivel de entrada predeterminado?

Aunque sepamos cómo usar la función lógica, necesitamos conocer el nivel de entrada por defecto, ya que distintos niveles pueden producir salidas diferentes. Puedes saberlo mediante un experimento simple.

#### Preparativos

Necesitarás lo siguiente:

* [Grove - Botón](https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50)

* [Grove - LED Rojo](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html?cPath=81_35)

* Batería de 9V

#### Conexión del hardware

En esta demostración, usamos el [Grove - Botón](https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50) como ENTRADA, y el [Grove - LED Rojo](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html?cPath=81_35) como SALIDA.

Cambia el interruptor al modo **NOT**.

Como se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_hardware_setting_stared_not.JPG)

#### Revisión de resultados

Como sabes, solo si la salida está en nivel 1, el LED Grove se encenderá. Al encender la alimentación, verás que el LED está encendido. En otras palabras, la salida está en nivel 1 según la lógica mostrada, por lo tanto: si la salida es 1 en modo NOT, el nivel de entrada por defecto es 0.

### Demostración con dos entradas

Si deseas usar dos entradas, necesitas el cable en Y de Grove.

Con este cable, puedes conectar 2 módulos Grove a la ENTRADA. Uno a Entrada1 y otro a Entrada2.

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_cable.JPG)

Aquí un ejemplo, 2 botones como ENTRADA y un LED como SALIDA:

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_and.jpg)

El LED se encenderá solo cuando se presionen ambos botones.

<font color="Red">Consejo: Este cable también puede usarse como salida si deseas controlar el estado de 2 módulos Grove al mismo tiempo. Ten en cuenta: Si usas el cable de esta manera, el estado de salida de ambos módulos será el mismo.</font>

### Funciona con LEGO

Logic DC Jack incluye una carcasa compatible con LEGO, puedes integrarlo con tus construcciones LEGO para mayor diversión.

Próximamente estará disponible una base Grove compatible con LEGO.

Aquí una demostración:

![](https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_with_lego.jpg)

## Groves compatibles con Logic DC Jack

Los siguientes módulos Grove son compatibles con Logic DC Jack:

### Entrada

* [Grove - Botón](https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50)

* [Grove - Sensor táctil](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html?cPath=85_94)

* [Grove - Interruptor](https://www.seeedstudio.com/Grove-SwitchP-p-1252.html?cPath=85_50)

* [Grove - Sensor de luz](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html?cPath=25_27)

* [Grove - Sensor de sonido](https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html?cPath=25_128)

* [Grove - Sensor de humedad del suelo](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html?cPath=25_27)

* [Grove - Sensor de agua](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html?cPath=25_27)

* [Grove - Interruptor magnético](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html)

* [Grove - Interruptor de inclinación](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)

* [Grove - Detector de línea](https://www.seeedstudio.com/Grove-Line-Finder-p-825.html?cPath=25_31)

* [Grove - Sensor de movimiento PIR](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html?cPath=25_31)

* [Grove - Sensor de ángulo rotativo](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html?cPath=85_52)

* [Grove - Potenciómetro deslizante](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html?cPath=85_52)

* [Grove - Sensor de flama](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html)

### Salida

* [Grove - LED](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)

* [Grove - Tira de luces LED](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html)

* [Grove - Motor de vibración](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html)

* [Grove - Zumbador](https://www.seeedstudio.com/Grove-Buzzer-p-768.html?cPath=38)

* [Grove - Mini ventilador](https://www.seeedstudio.com/Grove-Mini-Fan-p-1819.html)

* [Grove - Grabadora](https://www.seeedstudio.com/Grove-Recorder-p-1825.html?cPath=25_128)

* [Grove - Electromagneto](https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html?cPath=25_33)

* [Grove - Relevador](https://www.seeedstudio.com/Grove-Relay-p-769.html?cPath=39_42)

## Visor de Esquemáticos en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic_DC_Jack_v1.0_SCH_PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* **[PDF]**   [Esquemático en PDF](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic_DC_Jack_v1.0_SCH.pdf)
* **[Eagle]**    [Esquemático en Eagle](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic_DC_Jack_v1.0_SCH_PCB.zip)
* **[PDF]** [Logic DC Jack v1.0 pdf](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic%20DC%20Jack%20v1.0.pdf)
* **[EAGLE]** [Logic DC Jack v1.0 sch](https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic%20DC%20Jack%20v1.0.sch)
* **[Wiki]**   [Página Wiki de compuerta NOT](https://es.wikipedia.org/wiki/Compuerta_NOT)
* **[Wiki]**   [Página Wiki de compuerta AND](https://es.wikipedia.org/wiki/Compuerta_AND)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes formas de soporte para asegurar que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus necesidades y preferencias.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
