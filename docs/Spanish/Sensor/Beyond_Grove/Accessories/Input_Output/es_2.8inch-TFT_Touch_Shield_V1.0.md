---
title: Touch Shield Display TFT de 2.8 pulgadas V1.0
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/2.8inch-TFT_Touch_Shield_V1.0/
slug: /es/2.8inch-TFT_Touch_Shield_V1.0
last_update:
  date: 07/14/2025
  author: Guillermo
---

2.8" TFT Touch Shield es una pantalla TFT multicolor con pantalla táctil resistiva de 4 hilos, compatible con Arduino y Arduino Mega. Incluye una huella compatible con shields Arduino para facilitar su montaje. El controlador TFT está basado en un circuito integrado profesional, con una interfaz de datos de 8 bits y control de 4 bits.

![](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/Tft.jpg)

## Características ##

- Compatible con Arduino/Seeeduino, Arduino Mega y Seeeduino Mega  
- Pantalla QVGA de 2.8”  
- Pantalla táctil resistiva  

## Especificaciones ##

<table cellspacing="0" width="80%">
<tr>
<th scope="col">Elemento</th>
<th scope="col">Mín</th>
<th scope="col">Típico</th>
<th scope="col">Máx</th>
<th scope="col">Unidad</th>
</tr>
<tr>
<th scope="row">Voltaje</th>
<td>4.5</td>
<td>5</td>
<td>5.5</td>
<td>VDC</td>
</tr>
<tr>
<th scope="row">Corriente</th>
<td>/</td>
<td>/</td>
<td>250</td>
<td>mA</td>
</tr>
<tr>
<th scope="row">Tamaño del panel LCD</th>
<td colspan="3">2.8</td>
<td>pulgadas</td>
</tr>
<tr>
<th scope="row">Ángulo de visión</th>
<td colspan="3">60~120</td>
<td>Grados</td>
</tr>
<tr>
<th scope="row">Resolución</th>
<td colspan="3">320x240</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Colores del LCD</th>
<td colspan="3">65k</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Tipo de retroiluminación</th>
<td colspan="3">LED</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Controlador LCD IC</th>
<td colspan="3">ST7781R</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Tipo de interfaz</th>
<td colspan="3">10±2</td>
<td>g</td>
</tr>
<tr>
<th scope="row">Tipo de interfaz</th>
<td colspan="3">Puerto paralelo (8 bits de datos + 4 bits de control)</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Pantalla táctil</th>
<td colspan="3">Pantalla táctil resistiva de 4 hilos</td>
<td>/</td>
</tr>
<tr>
<th scope="row">Área activa</th>
<td colspan="3">43.2 × 57.3</td>
<td>mm</td>
</tr>
<tr>
<th scope="row">Descarga ESD por contacto</th>
<td colspan="3">±4</td>
<td>kV</td>
</tr>
<tr>
<th scope="row">Descarga ESD por aire</th>
<td colspan="3">±8</td>
<td>kV</td>
</tr>
<tr>
<th scope="row">Dimensiones</th>
<td colspan="3">72.5 × 54.7 × 18</td>
<td>mm</td>
</tr>
<tr>
<th scope="row">Peso</th>
<td colspan="3">24±2</td>
<td>g</td>
</tr>
</table>

**Precauciones**

- No someter el módulo a impactos mecánicos ni dejarlo caer.  
- No aplicar fuerza excesiva sobre la superficie de la pantalla o zonas adyacentes, ya que esto puede alterar los tonos de color.

## Uso de pines en Arduino ##

![](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/2.8_Inch_TFT_Touch_Shield_Block_Diagram.jpg)

- **D0** – No usado  
- **D1** – No usado  
- **D2** – Bit de datos LCD 8  
- **D3** – Bit de datos LCD 9  
- **D4** – Bit de datos LCD 10  
- **D5** – Bit de datos LCD 11  
- **D6** – Bit de datos LCD 12  
- **D7** – Bit de datos LCD 13  
- **D8** – Bit de datos LCD 14  
- **D9** – Bit de datos LCD 15  
- **D10** – Pin CS del LCD, activo en bajo  
- **D11** – Pin RS del LCD  
- **D12** – Pin WR del LCD  
- **D13** – Pin RD del LCD  
- **D14 (A0)** – Pantalla táctil Y−  
- **D15 (A1)** – Pantalla táctil X−  
- **D16 (A2)** – Pantalla táctil Y+  
- **D17 (A3)** – Pantalla táctil X+  
- **D18 (A4)** – No usado  
- **D19 (A5)** – No usado

## Uso ##

### Instalación del Hardware ###

- Inserta el TFT Touch Shield en el Seeeduino como se muestra a continuación.

![](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/TFT_Touch_Shield_with_Seeeduino.jpg)

### Programación del TFT ###

La librería **TFT** proporciona las siguientes Interfaces de Programación de Aplicaciones (**API**).  
Esta librería utiliza acceso directo a los registros **PORT** en lugar de las funciones estándar de Arduino, con el fin de aumentar la velocidad de comunicación entre el MCU y el TFT.  
Actualmente, la librería es compatible con placas Arduino, Arduino Mega (1280 o 2560) y Seeeduino ADK Main Board.  

En el caso del Mega, el puerto de datos de 8 bits del TFT está distribuido entre pines de diferentes puertos, lo que reduce la velocidad del dibujo gráfico en comparación con el Arduino.  
La selección de pines está basada únicamente en la disposición de pines de los puertos de Arduino/Mega.

### Funciones Generales ###

---

**paintScreenBlack(void)**

- La RAM del TFT solo puede inicializarse con la pantalla apagada. Esta función se usa para limpiar la pantalla con color negro.

**setXY(unsigned int poX, unsigned int poY)**

- Establece la posición del cursor en (poX, poY). Esta función es utilizada internamente por otras funciones gráficas.

**setPixel(unsigned int poX, unsigned int poY, unsigned int color)**

- Establece el píxel (poX, poY) con el color indicado. Esta función también es usada internamente por otras funciones gráficas.

### Líneas ###

---

**drawLine(unsigned int x0, unsigned int y0, unsigned int x1, unsigned int y1, unsigned int color)**

- Dibuja una línea desde el píxel (x0, y0) hasta el píxel (x1, y1) con el color indicado.

**drawVerticalLine(unsigned int poX, unsigned int poY, unsigned int length, unsigned int color)**

- Dibuja una línea horizontal de longitud *length* con el color indicado, comenzando desde el píxel (poX, poY).

**drawHorizontalLine(unsigned int poX, unsigned int poY, unsigned int length, unsigned int color)**

- Dibuja una línea vertical de longitud *length* con el color indicado, comenzando desde el píxel (poX, poY).

### Rectángulo ###

---

**drawRectangle(unsigned int poX, unsigned int poY, unsigned int length, unsigned int width, unsigned int color)**

- Dibuja un rectángulo desde el punto (poX, poY), con longitud *length*, ancho *width* y color *color*.

**fillRectangle(unsigned int poX, unsigned int poY, unsigned int length, unsigned int width, unsigned int color)**

- Dibuja un rectángulo relleno desde el píxel (poX, poY), con longitud *length*, ancho *width* y color *color*.

### Círculo ###

---

**drawCircle(int poX, int poY, int r, unsigned int color)**

- Dibuja un círculo en (poX, poY) con radio *r* y color *color*.

**fillCircle(int poX, int poY, int r, unsigned int color)**

- Dibuja un círculo relleno en (poX, poY) con radio *r* y color *color*.

### Texto ###

---

**drawChar(unsigned char ascii, unsigned int poX, unsigned int poY, unsigned int size, unsigned int fgcolor)**

- Dibuja un carácter en (poX, poY) utilizando una fuente incorporada de tamaño *size* y color *fgcolor*. Esta función es utilizada por `drawString()`.

**drawString(char *string, unsigned int poX, unsigned int poY, unsigned int size, unsigned int fgcolor)**

- Dibuja una cadena de texto desde (poX, poY) usando una fuente incorporada de tamaño *size* y color *fgcolor*.

### Programación de Pantalla Táctil ###

---

TFT Touch Shield utiliza la [Librería de Pantalla Táctil de Adafruit](https://github.com/adafruit/Touch-Screen-Library).  
Para comprender el principio detrás de una pantalla táctil resistiva, consulta los [enlaces externos](https://wiki.seeedstudio.com/2.8inch-TFT_Touch_Shield_V1.0/).  

En resumen, una pantalla táctil resistiva de 4 hilos proporciona dos divisores de voltaje: uno para el eje X y otro para el eje Y.  
Aplicando los voltajes adecuados para cada eje y escaneando los valores del ADC, se puede detectar la posición del toque. Estos valores suelen estar sujetos a ruido, por lo que se emplea un filtro digital.

- Para usar la librería, primero crea un objeto `TouchScreen`:

`
TouchScreen ts = TouchScreen(XP, YP, XM, YM, 300);
`

Donde XP, YP, XM y YM son los pines ADC conectados a los terminales X+, Y+, X− y Y− de la pantalla táctil. El valor 300 representa la resistencia entre las placas X.

- Para leer el valor ADC crudo:

`
Point p = ts.getPoint();
`

- El valor ADC debe convertirse a coordenadas de píxeles.
Esto se hace con la función map(). El mapeo varía entre las versiones v0.9 y v1.0. Las aplicaciones de demostración ya manejan este mapeo automáticamente:

`
p.x = map(p.x, TS_MINX, TS_MAXX, 240, 0);
p.y = map(p.y, TS_MINY, TS_MAXY, 320, 0);
`

- El siguiente sketch demuestra el uso de la librería TouchScreen.
También puede usarse para calibrar las coordenadas de la pantalla táctil.

- Compila y sube el sketch.

- Abre el monitor serial y toca los puntos que aparecen en la pantalla.

- Verifica si los valores X e Y mostrados son correctos.
Si no lo son, es necesario recalibrar las coordenadas de la pantalla táctil.

#### ¿Cómo calibrar la pantalla táctil? ####

- Los parámetros `TS_MINX`, `TS_MAXX`, `TS_MINY` y `TS_MAXY` definen los límites extremos de la pantalla táctil y, en efecto, funcionan como parámetros de calibración.

- Los valores asignados a estas variables son los valores ADC medidos (es decir, Raw X y Raw Y) cuando tocamos los extremos diagonales de la pantalla táctil.

- Toca los puntos (0,0) y (239,319) y anota los valores Raw X y Raw Y. Para una mayor precisión, realiza la prueba varias veces hasta obtener valores consistentes.

- `TS_MINX` corresponde al valor ADC cuando X = 0.

- `TS_MINY` corresponde al valor ADC cuando Y = 0.

- `TS_MAXX` corresponde al valor ADC cuando X = 240 - 1, es decir, 239.

- `TS_MAXY` corresponde al valor ADC cuando Y = 320 - 1, es decir, 319.

- Modifica estos parámetros en el sketch, recompila y súbelo nuevamente al Arduino.

- Repite los pasos anteriores si aún no obtienes valores precisos.

#### Sketch de demostración de la pantalla táctil ####

```
// Paint application - Demonstate both TFT and Touch Screen
//  This library is free software; you can redistribute it and/or
//  modify it under the terms of the GNU Lesser General Public
//  License as published by the Free Software Foundation; either
//  version 2.1 of the License, or (at your option) any later version.
//
//  This library is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
//  Lesser General Public License for more details.
//
//  You should have received a copy of the GNU Lesser General Public
//  License along with this library; if not, write to the Free Software
//  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
#include <stdint.h>
#include <TouchScreen.h>
#include <TFT.h>

#if defined(__AVR_ATmega1280__) || defined(__AVR_ATmega2560__) // mega
#define YP A2   // must be an analog pin, use "An" notation!
#define XM A1   // must be an analog pin, use "An" notation!
#define YM 54   // can be a digital pin, this is A0
#define XP 57   // can be a digital pin, this is A3

#elif defined(__AVR_ATmega32U4__) // leonardo
#define YP A2   // must be an analog pin, use "An" notation!
#define XM A1   // must be an analog pin, use "An" notation!
#define YM 18   // can be a digital pin, this is A0
#define XP 21   // can be a digital pin, this is A3

#else //168, 328, something else
#define YP A2   // must be an analog pin, use "An" notation!
#define XM A1   // must be an analog pin, use "An" notation!
#define YM 14   // can be a digital pin, this is A0
#define XP 17   // can be a digital pin, this is A3

#endif

//Measured ADC values for (0,0) and (210-1,320-1)
//TS_MINX corresponds to ADC value when X = 0
//TS_MINY corresponds to ADC value when Y = 0
//TS_MAXX corresponds to ADC value when X = 240 -1
//TS_MAXY corresponds to ADC value when Y = 320 -1

#define TS_MINX 140
#define TS_MAXX 900
#define TS_MINY 120
#define TS_MAXY 940

int color = WHITE;  //Paint brush color

// For better pressure precision, we need to know the resistance
// between X+ and X- Use any multimeter to read it
// The 2.8" TFT Touch shield has 300 ohms across the X plate

TouchScreen ts = TouchScreen(XP, YP, XM, YM, 300); //init TouchScreen port pins

void setup()
{

    Tft.init();  //init TFT library
    pinMode(0,OUTPUT);
    //Draw the pallet
    Tft.fillRectangle(0,0,30,10,BLACK);
    Tft.fillRectangle(30,0,30,10,RED);
    Tft.fillRectangle(60,0,30,10,GREEN);
    Tft.fillRectangle(90,0,30,10,BLUE);
    Tft.fillRectangle(120,0,30,10,CYAN);
    Tft.fillRectangle(150,0,30,10,YELLOW);
    Tft.fillRectangle(180,0,30,10,WHITE);
    Tft.fillRectangle(210,0,30,10,GRAY1);

}

void loop()
{

    // a point object holds x y and z coordinates.
    Point p = ts.getPoint();

    //map the ADC value read to into pixel co-ordinates

    p.x = map(p.x, TS_MINX, TS_MAXX, 240, 0);
    p.y = map(p.y, TS_MINY, TS_MAXY, 320, 0);

    // we have some minimum pressure we consider 'valid'
    // pressure of 0 means no pressing!

    if (p.z > ts.pressureThreshhold) {


        // Detect  paint brush color change
        if(p.y < 15)
        {
            if(p.x >= 0 && p.x < 30)
            {
                color = BLACK;
            }
            if(p.x >= 30 && p.x < 60)
            {
                color = RED;
                digitalWrite(0,HIGH);
            }
            if(p.x >= 60 && p.x < 90)
            {
                color = GREEN;
            }
            if(p.x >= 90 && p.x < 110)
            {
                color = BLUE;
                digitalWrite(0,LOW);
            }
            if(p.x >= 120 && p.x < 150)
            {
                color = CYAN;
            }
            if(p.x >= 150 && p.x < 180)
            {
                color = YELLOW;
            }
            if(p.x >= 180 && p.x < 210)
            {
                color = WHITE;
            }
            if(p.x >= 210 && p.x < 240)
            {
                color = GRAY1;
            }
        }
        else
        {
            Tft.fillCircle(p.x,p.y,2,color);
        }
    }
}
```

### Código de Demostración ###

- Inserta el **TFT Touch Shield** en el **Seeeduino** como se muestra a continuación.

![](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/img/DemoShow.JPG)
TFT Touch Shield connected to Seeeduino


## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://www.seeedstudio.com/wiki/images/c/c5/2.8_TFT_Touch_Shield_v1.0_EagleFiles.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos ##

- **[Librerías]** [Librerías para TFT Touch Shield](https://github.com/Seeed-Studio/TFT_Touch_Shield_V1)
- **[Eagle]** [Esquemático y Layout del TFT Touch Shield v1.0](https://www.seeedstudio.com/wiki/images/c/c5/2.8_TFT_Touch_Shield_v1.0_EagleFiles.zip)
- **[PDF]** [PCB del TFT Touch](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/res/TFT%20Touch%20PCB.pdf)
- **[PDF]** [Esquemático del TFT Touch](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/res/TFT%20Touch%20Sch.pdf)
- **[Versión]** [Versión de Radio Shack del TFT Touch Shield en archivos Eagle](https://files.seeedstudio.com/wiki/2.8inch-TFT_Touch_Shield_V1.0/res/Schematic_for_Radio_Shack_.zip)
- **[Datasheet]** [ST7781R](http://garden.seeedstudio.com/images/4/4e/ST7781R_datasheet.pdf), [FGD280E3715V1_8bit](http://garden.seeedstudio.com/images/7/75/FGD280E3715V1_8bit.pdf)
- **[Notas de Aplicación]** [ATMEL - Notas sobre pantallas táctiles de 4 y 5 hilos](http://www.adafruit.com/datasheets/AVR341.pdf)
- **[Pantalla Táctil]** [TI - Uso de pantallas táctiles resistivas](http://focus.ti.com/lit/an/slyt209a/slyt209a.pdf)
- **[Tarjeta SD]** [https://github.com/adafruit/SD](https://github.com/adafruit/SD)

## Soporte Técnico y Discusión sobre el Producto

Si tienes algún problema técnico, por favor publícalo en nuestro [foro](http://forum.seeedstudio.com/).  
¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes formas de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>