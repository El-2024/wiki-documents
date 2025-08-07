---
title: Shield MaTrix V0.9
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Shield-MaTrix-V0.9b/
slug: /es/Shield-MaTrix-V0.9b
last_update:
  date: 06/11/2025
  author: Guillermo
---
![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/Shield_matrix.jpg)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/Shield-Matrix-p-1773.html)

Shield MaTrix es un shield apilable para Arduino, que permite aprender programación utilizando los sensores más simples integrados en la placa.

## Historial de Versiones

| Revisión | Descripción         | Lanzamiento          |
|----------|---------------------|----------------------|
| 0.9      | Prototipo           | 11 de abril de 2013  |
| 0.9b     | Versión pública     | 27 de octubre de 2013|

## Características

* Compatible con Arduino Mega (se recomienda Freaduino Mega V1.4 (ATMega 2560))
* Soporte para shields de Arduino
* Compatible con módulos inalámbricos nRF24L01+, xBee
* Compatible con matrices LED 8x8 de 60 mm (rojo brillante, verde brillante, amarillo)
* Control por infrarrojo (control remoto)
* LED RGB (para indicar diversos parámetros)
* Botón de reloj (para activar/desactivar configuraciones)
* Zumbador (alarma o pulsación de botones del control remoto)
* Sensor de luz (para iluminación automática de la matriz)
* Reloj de tiempo real (RTC)
* Interfaz I2C (I/O opcional)
* Voltaje de operación de 9–24 V o mediante USB (se recomienda 12 V 2 A)

## Ideas de Aplicación

* Reloj digital (sincronización NTP) con alarma
* Estación meteorológica (temperatura en casa, calle, sótano; presión; humedad)
* Cartel luminoso (lectura de correos electrónicos, redes sociales, etc.)
* Transferencia de datos (a otro dispositivo similar)

## Principio de Visualización de Datos

La visualización de información en la matriz LED se realiza de forma dinámica.  
En cada instante se muestra una sola línea (encendiendo solo los LEDs correspondientes en rojo y/o verde), mientras que las demás líneas permanecen apagadas.  
En el siguiente ciclo, se apaga la línea anterior y se enciende la siguiente con su contenido.  
Este cambio es tan rápido que el ojo humano lo percibe como una imagen continua.

Para minimizar la cantidad de pines necesarios, se utilizan dos tipos de componentes:

- **Registros de desplazamiento** (para controlar columnas)
- **Demultiplexor** (para controlar filas)

Los registros de desplazamiento están conectados en cascada y se comunican vía SPI.  
El demultiplexor cuenta con tres entradas de dirección (DA0, DA1, DA2) que determinan qué salida de las 8 se activa.  
Además, tiene entradas de control:

- **E1 y E2**: apagan completamente la matriz (en el circuito están conectadas juntas)
- **E3**: permite ajustar el brillo usando modulación por ancho de pulso (PWM)

## Interfaces

* Interfaz para 4 matrices LED bicolor
    * 8 registros de desplazamiento 74HC595 para controlar columnas
    * Un demultiplexor 74HC138 para controlar filas y brillo (PWM)
* Reloj en tiempo real (RTC) basado en DS1307 con respaldo por batería (CR1220 o CR1226)
* Interfaz para módulo RF nRF24L01+
* Botón de reloj (por ejemplo, para desactivar alarma)
* Receptor IR de 38 kHz (para control remoto)
* Cableado para LED RGB (cátodo común o ánodo común, seleccionable por jumper)
* Sensor de luz (para ajuste automático de brillo)
* Zumbador piezoeléctrico
* Interfaz I2C
* Interfaz xBee
* Soporte para shields Arduino

*  Pines utilizados en Arduino Mega

    *   D5 - Receptor IR

    *   D24 - Botón de reloj

*   xBee

    *   D16 - DIN

    *   D17 - DOUT

*   I2C (DS1307)

    *   D20 - SDA

    *   D21 - SCL

*   LED RGB

    *   D34 - Rojo

    *   D35 - Verde

    *   D36 - Azul

*   nRF24L01 +

    *   D19 - RF_IRQ

    *   D37 - RF_SCK

    *   D38 - RF_MISO

    *   D39 - RF_MOSI

    *   D40 - RF_NSS

    *   D41 - RF_CE

    *   D45 - Zumbador

    *   A7 - Sensor de luz

*   Registros de desplazamiento (SPI)

    *   D42 - SS

    *   D51 - MOSI

    *   D52 - SCK

*   Demultiplexor

    *   D49 - DA0

    *   D48 - DA1

    *   D47 - DA2

    *   D44 - E3 (brillo)

    *   D43 - E1, E2 (apagado)

## Bibliotecas Necesarias

Para utilizar los distintos componentes del Shield MaTrix, se requieren las siguientes bibliotecas:

**Visualización en la matriz** – MaTrix  
[Descargar MaTrix](https://github.com/stepanovalex/MaTrix/archive/master.zip)  
(Incluye una prueba de visualización sencilla y dos sketches de visualización en tiempo real).

**Reloj en tiempo real (RTC)** – RTClib  
[Descargar RTClib](https://github.com/adafruit/RTClib/archive/master.zip)

**Receptor IR** – IRremote  
[Descargar IRremote](https://github.com/shirriff/Arduino-IRremote/archive/master.zip)  
(Con esta biblioteca puedes controlar la matriz usando un control remoto infrarrojo).

**nRF24L01+** – iBoardRF24  
[Descargar iBoardRF24](https://github.com/andykarpov/iBoardRF24/archive/master.zip)  
(Librería de control para el [DevDuino Sensor Node 2.4G nRF24L01+](https://www.seeedstudio.com/depot/DevDuino-Sensor-Node-V13-ATmega-328-RC2032-battery-holder-p-1774.html?cPath=19_22)).

![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/Shield-matrix_nRF24L01Plus.jpg)

Estas bibliotecas estándar son requeridas por las anteriores durante su funcionamiento:

*   Wire

*   SPI

*   [digitalWriteFast](https://code.google.com/p/digitalwritefast/downloads/detail?name=digitalWriteFast.zip&amp;can=2&amp;q=)

## Características al usar las bibliotecas

Solo dos bibliotecas requieren comentarios adicionales sobre su uso:

### Receptor IR

Ya que el receptor IR está conectado al pin digital **D5**, es necesario modificar el archivo `/IRremote/IRremoteInt.h` con el código adecuado.

```

// Arduino Mega
#if defined(__AVR_ATmega1280__) || defined(__AVR_ATmega2560__)
  //#define IR_USE_TIMER1   // tx = pin 11
  //#define IR_USE_TIMER2     // tx = pin 9
  #define IR_USE_TIMER3   // tx = pin 5
  //#define IR_USE_TIMER4   // tx = pin 6
  //#define IR_USE_TIMER5   // tx = pin 46

```


###   nRF24L01+

Inicializa el modulo de la siguiente forma:

```


//iBoardRF24 radio(CE,CSN,MOSI,MISO,SCK,IRQ);
iBoardRF24 radio(41,40,39,38,37,19);



```



## Funciones de la Biblioteca MaTrix

Para usar la biblioteca MaTrix en tu sketch, debes declarar la función `void setup()` e incluir la siguiente línea:

`
`

``` #include <SPI.h>
#include <MaTrix.h>	//connection library MaTrix

 MaTrix mymatrix;       //object creation mymatrix
```



##   Variables

**byte array[8][8]** - arreglo principal.
Los datos de este arreglo determinan lo que se muestra actualmente en la matriz LED.

`
`

```
 byte array[8][8] = { // An array of 64 bytes
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 7
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 6
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 5
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 4
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 3
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 2
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 1
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}   // строка 0
   // red3      green3      red2      green2      red1      green1       red0      green0
 };
```



Cada bit corresponde al LED respectivo en la matriz. 0 significa que el LED está "apagado", 1 que está "encendido".

**byte shadow[8][8]** - arreglo adicional ("shadow").
Utilizado por las funciones de la biblioteca para organizar diversos efectos y desplazamiento de texto (los datos del arreglo sombra se copian al arreglo principal según la lógica del efecto).

`
`

```
 byte shadow[8][8] = { //An array of 64 bytes
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 7
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 6
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 5
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 4
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 3
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 2
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // строка 1
   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}   // строка 0
   // red3      green3      red2      green2      red1      green1       red0      green0
 };
```

##   Definiciones

`
`

```
 // Color
 #define RED    0
 #define GREEN  1
 #define YELLOW 2
```


```
 // delay iteration in "drawing" effects (ms)
 #define VSLOW  500
 #define SLOW   150
 #define MID    100
 #define FAST   50
 #define VFAST  25
```


```
 // effects
 #define FADE   4
 #define LEFT   3
 #define UP     1
 #define DOWN   2
 #define NONE   0
```


```
 // hardware data
 #define BRIGHT 44    // brightness (pin 44 - PWM)
 #define LightSENS A7 // light sensor
```



##   Funciones principales

<dl>
  <dt><u><strong>mymatrix.init();</strong></u></dt>
  <dd><em>Descripción</em>: inicializa el módulo.</dd>

  <dt><u><strong>mymatrix.clearLed();</strong></u></dt>
  <dd><em>Descripción</em>: limpia la pantalla.</dd>

  <dt><u><strong>mymatrix.brightness(byte brightLevel);</strong></u></dt>
  <dd>
    <em>Descripción</em>: establece el brillo de la pantalla.<br/>
    <em>brightLevel</em>: nivel de brillo (tipo byte), un valor de 255 indica el brillo máximo.
  </dd>
</dl>

Ejemplo de uso:

`
`

```
 mymatrix.brightness(177);
```

<dl>
  <dt><u><strong>mymatrix.getBrightness();</strong></u></dt>
  <dd><em>Descripción</em>: regresa el valor actual del brillo de la pantalla.</dd>
</dl>


Ejemplo de. uso:

`
`

```
 Serial.println(mymatrix.getBrightness());
```

<dl>
  <dt><u><b>printString(String s, byte pos, byte color, unsigned char *Font, char effect, int speed);</b></u></dt>
  <dd><i>Descripción</i>: muestra la cadena especificada.</dd>
  <dd><i>pos</i>: posición inicial del primer carácter (byte). Se cuenta desde el borde derecho de la matriz, comenzando en 0.</dd>
  <dd><i>color</i>: color (byte). Tres valores predefinidos: RED, GREEN, YELLOW.</dd>
  <dd>
    <i>Font</i>: puntero a la fuente (unsigned char). Fuentes disponibles en la biblioteca:
    <ul>
      <li>Caracteres latinos: <code>font5x8</code></li>
      <li>Latinos y cirílicos: <code>font6x8</code></li>
      <li>Digitales: <code>digit6x8bold</code>, <code>digit6x8future</code></li>
    </ul>
  </dd>
  <dd>
    Para más detalles sobre las fuentes, consulta el archivo <code>fonts.c</code> del archivo de la biblioteca MaTrix.
  </dd>
  <dd>
    <i>effect</i>: efecto de la inscripción (char). Valores predefinidos disponibles:
    <ul>
      <li><code>LEFT</code>, <code>UP</code>, <code>DOWN</code> (desplazamiento en la dirección correspondiente)</li>
      <li><code>FADE</code> (aparición)</li>
      <li><code>NONE</code> (sin efecto, instantáneo)</li>
    </ul>
    Valor por defecto: <code>NONE</code>.
  </dd>
  <dd>
    <i>speed</i>: velocidad del efecto (int). Valores predefinidos disponibles:
    <ul>
      <li><code>VSLOW</code>, <code>SLOW</code>, <code>MID</code>, <code>FAST</code>, <code>VFAST</code> (desde "muy lento" hasta "muy rápido")</li>
    </ul>
    Valor por defecto: <code>MID</code>.
  </dd>
</dl>

Ejemplo de uso:

`
`

```
 mymatrix.printString("123", 3, GREEN, font6x8, UP, SLOW);
```

<dl>
  <dt><u><b>printRunningString(String s, byte color, unsigned char *Font, int speed);</b></u></dt>
  <dd><i>Descripción</i>: muestra la línea de texto tipo "running" (desplazamiento continuo).</dd>
  <dd><i>color</i>: color (byte). Tres valores predefinidos: RED, GREEN, YELLOW.</dd>
  <dd>
    <i>Font</i>: puntero a la fuente (unsigned char). Fuentes disponibles en la biblioteca:
    <ul>
      <li>Caracteres latinos: <code>font5x8</code></li>
      <li>Latinos y cirílicos: <code>font6x8</code></li>
      <li>Digitales: <code>digit6x8bold</code>, <code>digit6x8future</code></li>
    </ul>
  </dd>
  <dd>
    Para más detalles sobre las fuentes, consulta el archivo <code>fonts.c</code> del archivo de la biblioteca MaTrix.
  </dd>
  <dd>
    <i>speed</i>: velocidad del efecto (int). Valores predefinidos disponibles:
    <ul>
      <li><code>VSLOW</code>, <code>SLOW</code>, <code>MID</code>, <code>FAST</code>, <code>VFAST</code> (desde "muy lento" hasta "muy rápido")</li>
    </ul>
    Valor por defecto: <code>MID</code>.
  </dd>
</dl>

Ejemplo de uso:

`
`

```
 mymatrix.printRunningString("MaTrix test!", RED, font6x8, FAST);
```



##   Funciones auxiliares

<dl>
  <dt><u><b>printArray();</b></u></dt>
  <dd><i>Descripción</i>: muestra por el puerto serie el estado actual del arreglo principal (<code>array</code>).</dd>

  <dt><u><b>printShadow();</b></u></dt>
  <dd><i>Descripción</i>: muestra por el puerto serie el estado actual de la "sombra" del arreglo (<code>shadow</code>).</dd>

  <dt><u><b>printChar(unsigned char sym, byte pos, byte color);</b></u></dt>
  <dd><i>Descripción</i>: modifica el arreglo principal (<code>array</code>) para que, al mostrarse en la matriz, se imprima el símbolo deseado en la posición y color especificados.</dd>
  <dd><i>pos</i>: posición inicial del carácter (byte). Se cuenta desde el borde derecho de la matriz, comenzando en 0.</dd>
  <dd><i>color</i>: color (byte). Tres valores predefinidos: RED, GREEN, YELLOW.</dd>

  <dt><u><b>printCharShadow(unsigned char sym, byte pos, byte color);</b></u></dt>
  <dd><i>Descripción</i>: función similar a <code>printChar</code>, pero modifica el arreglo "sombra" (<code>shadow</code>).</dd>

  <dt><u><b>printStr(unsigned char *s, byte pos, byte color);</b></u></dt>
  <dd><i>Descripción</i>: modifica el arreglo principal (<code>array</code>) para que, al mostrarse en la matriz, se imprima la cadena deseada en la posición y color especificados.</dd>
  <dd><i>s</i>: puntero a un arreglo de caracteres (<code>unsigned char</code>).</dd>
  <dd><i>pos</i>: posición inicial del primer carácter (byte). Se cuenta desde el borde derecho de la matriz, comenzando en 0.</dd>
  <dd><i>color</i>: color (byte). Tres valores predefinidos: RED, GREEN, YELLOW.</dd>

  <dt><u><b>printStrShadow(unsigned char *s, byte pos, byte color);</b></u></dt>
  <dd><i>Descripción</i>: función similar a <code>printStr</code>, pero modifica el arreglo "sombra" (<code>shadow</code>).</dd>
</dl>

<p><b>¡Atención!</b> La fuente que se usará debe definirse previamente mediante <code>setFont</code>.</p>

<p><b>¡Atención!</b> La fuente que se utiliza al llamar a la función debe definirse usando <code>setFont</code>.</p>

## Referencias

[ **ZIP** ] Versión actual de la biblioteca [MaTrix](https://github.com/stepanovalex/MaTrix/archive/master.zip)

## Esquemático

![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/MFull.JPG)

En el lado derecho de la placa (visto desde la matriz) se encuentran:

* Botón de reloj
* Interfaz para nRF24l01 +
* Montaje para LED RGB
* Jumper de selección para tipo de LED (ánodo común o cátodo común)
* Receptor IR
* Interfaz I2C

![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/MRight.JPG)

En el lado izquierdo de la placa se encuentran:

* Sensor de luz
* Zumbador piezoeléctrico (buzzer)

![](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/MLeft.JPG)

[Esquemático del dispositivo](https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/res/SM09b_scheme.jpg)

## Soporte técnico y discusión del producto

Si tienes algún problema técnico, por favor repórtalo en nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes formas de soporte para asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
