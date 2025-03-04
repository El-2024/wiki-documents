---
description: Empezando con XIAO eInk Expansion Board
title: ePaper Driver Board para XIAO
keywords:
- XIAO eInk Expansion
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /XIAO-eInk-Expansion-Board_spanish
last_update:
  date: 02/16/2025
  author: Guillermo
---

# Empezando con XIAO eInk Expansion Board

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-Breakout-Board-p-5804.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div><br />

Conoce la tarjeta de expansión XIAO eInk, tu solución ideal para controlar pantallas eInk de manera sencilla con la familia XIAO. Diseñada con un conector FPC de 24 pines, esta tarjeta establece una conexión perfecta con nuestra serie de productos eInk. Si buscas ampliar tus opciones, el conector de cabecera de 8 pines 2.54 te permite integrar fácilmente cualquier microcontrolador de tu elección. Considera esta tarjeta como el "Mejor Amigo para Siempre" de tu eInk, mejorando sus capacidades y facilitando tu trabajo.

:::note
Esta tarjeta de expansión no incluye una pantalla eInk; la pantalla debe comprarse por separado.
:::

## Introducción

### Características

- Conector FPC de 24 pines: Proporciona una conexión robusta y confiable a pantallas eInk.
- Zócalo XIAO: Permite utilizar XIAO como procesador, ofreciendo una solución de control compacta pero potente.
- Encabezado de 8 pines 2.54: Ofrece flexibilidad al permitirte conectar cualquier microcontrolador, abriendo un mundo de posibilidades.
- Plug-and-Play: Diseñado para facilidad de uso, perfecto tanto para principiantes como para expertos.
- Aplicaciones versátiles: Adecuado para una amplia gama de pantallas eInk, desde tamaños pequeños hasta grandes.

### Aplicaciones

- Señalización digital: Usa la placa de expansión eInk para crear señales digitales dinámicas y de bajo consumo energético.
- Lectores electrónicos: Construye tu propio lector electrónico personalizado con características adaptadas a tus necesidades.
- Paneles de control de hogar inteligente: Integra la placa en un sistema de hogar inteligente para un panel de control moderno y elegante.
- Etiquetas de precios electrónicas: Crea etiquetas de precios electrónicas para una experiencia de compra más eficiente y ecológica.
- Herramientas educativas: Desarrolla materiales educativos interactivos que puedan ser fácilmente actualizados y que sean eficientes en energía.

## Visión general del hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/xiao-expansion.png" style={{width:700, height:'auto'}}/></div>


1. Conector FPC de 24 pines: Para la pantalla ePaper de 2.13 pulgadas.
2. Zócalo XIAO: Para conectar la placa de desarrollo Seeed Studio XIAO.
3. Salida de IO: Para conectar otros controladores, como Arduino UNO o Raspberry Pi.

### Definición de pines

<div class="table-center">

|  eInk SPI Pins |  XIAO  | 
|       ---      |  ---   |
|      RST       |   D0   |
|      CS        |   D1   |
|      DC        |   D3   |
|      BUSY      |   D5   |
|      SCK       |   D8   |
|      MOSI      |   D10  |

</div>

### Compatible con eInk

1. [1.54-inch E-paper - Dotmatix 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
2. [2.13-inch E-Paper -Flexible Monochrome 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
3. [2.13-inch E-Paper - Quadruple 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
4. [2.9 inch E-paper - Monocolor 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
5. [2.9-inch e-paper - Quadruple color 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
6. [4.2-inch E-Paper - Monocolor 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
7. [5.65-inch E-paper -  Sevencolor 600x480](https://www.seeedstudio.com/5-65-Seven-Color-ePaper-Display-with-600x480-Pixels-p-5786.html)
8. [5.83-inch E-paper - Monocolor 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
9. [7.5-inch E-paper - Monocolor 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)


## Uso del software Image2lcd

### Cómo hacer una imagen

Usa el software incorporado **Paint** en Windows para crear una imagen con la **misma resolución** que la pantalla que estás utilizando, y guárdala como archivo `BMP` o `JPG`;

:::note
La resolución de tu imagen debe ser la misma que la de la pantalla que estás utilizando. Por ejemplo, una pantalla ePaper de 4.2 pulgadas tiene una resolución de 400 x 300 píxeles, por lo que no puedes usar un tamaño de 300 x 400, ya que causará que el archivo de salida `.h` de Image2lcd tenga 200 bytes adicionales.
:::

Los colores de la imagen deben ser consistentes con los colores estándar de la pizarra de dibujo que viene con Windows. Los colores de la pizarra de dibujo son los siguientes:

<div class="table-center">

|      E-paper      | Colores |
|       ---      |  ---   |
| E-paper de 1.54 pulgadas - Dotmatix 200x200 | blanco puro y negro |
| E-paper de 2.13 pulgadas - Flexible Monocromo 212x104 | blanco puro y negro |
| E-paper de 2.13 pulgadas - Cuádruple 212x104 | negro, blanco, rojo y amarillo |
| E-paper de 2.9 pulgadas - Monocolor 128x296 | blanco puro y negro |
| E-paper de 2.9 pulgadas - Cuádruple color 128x296 | negro, blanco, rojo y amarillo |
| E-paper de 4.2 pulgadas - Monocolor 400x300 | blanco puro y negro |
| E-paper de 5.65 pulgadas - Siete colores 600x480 | negro, blanco, rojo, amarillo, azul, verde, naranja |
| E-paper de 5.83 pulgadas - Monocolor 648x480 | blanco puro y negro |
| E-paper de 7.5 pulgadas - Monocolor 800x480 | blanco puro y negro |

</div>

### Conversión de Bitmap

**Paso 1.** Abre [Image2lcd.7z](https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image2Lcd.7z), extráelo y abre la aplicación.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/1.png" style={{width:700, height:'auto'}}/></div>

**Paso 2.** Abre la imagen, selecciona el "Tipo de archivo de salida" como "C array (*.c)", selecciona el "Modo de escaneo" como "Escaneo horizontal", y ajusta los demás parámetros según se muestra a continuación:

<div class="table-center">
  <table align="center">
    <tr>
        <th>Epaper</th>
        <th>BitPixl</th>
        <th>Ancho y altura máximos</th>
        <th>Reverse color</th>
        <th>Display mode</th>    
    </tr>
    <tr>
        <th>1.54-inch E-paper - Dotmatix 200x200</th>
        <td align="center">Monocromo</td>
        <td align="center">200x200</td>
        <td align="center">✅</td>
        <td align="center">Espejo izquierda-derecha</td>
    </tr>
    <tr>
        <th>2.13-inch E-Paper -Flexible Monochrome 212x104</th>
        <td align="center">Monocromo</td>
        <td align="center">104x212</td>
        <td align="center">✅</td>
        <td align="center">Normal</td>
    </tr>
    <tr>
        <th>2.13-inch E-Paper - Quadruple 212x104 </th>
        <td align="center">4 Grises</td>
        <td align="center">104x212</td>
        <td align="center">/</td>
        <td align="center">Normal</td>     
    </tr>
    <tr>
        <th>2.9 inch E-paper - Monocolor 128x296</th>
         <td align="center">Monocromo</td>
        <td align="center">128x296</td>
        <td align="center">✅</td>
        <td align="center">Normal</td>   
    </tr>
    <tr>
        <th>2.9-inch e-paper - Quadruple color 128x296 </th>
        <td align="center">4 Grises</td>
        <td align="center">128x296</td>
        <td align="center">/</td>
        <td align="center">Normal</td>       
    </tr>
      <tr>
        <th>4.2-inch E-Paper - Monocolor 400x300</th>
        <td align="center">Monocromo</td>
        <td align="center">400x300</td>
        <td align="center">✅</td>
        <td align="center">Espejo izquierda-derecha</td>        
    </tr>
      <tr>
        <th>5.65-inch E-paper -  Sevencolor 600x480</th>
        <td align="center">256 colores</td>
        <td align="center">600x448</td>
        <td align="center">/</td>
        <td align="center">Normal</td>        
    </tr>
      <tr>
        <th>5.83-inch E-paper - Monocolor 648x480</th>
        <td align="center">Monocromo</td>
        <td align="center">600x480</td>
        <td align="center">✅</td>
        <td align="center">Mirror left-right</td>        
    </tr>
        <tr>
        <th>7.5-inch E-paper - Monocolor 800x480</th>
        <td align="center">Monocromo</td>
        <td align="center">800x480</td>
        <td align="center">✅</td>
        <td align="center">Mirror left-right</td>     
    </tr>
  </table>
</div>

:::tip
- Después de configurar el Ancho y Alto máximos, necesitas hacer clic en la flecha para confirmar.
- No incluyas los datos del encabezado.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/2.png" style={{width:700, height:'auto'}}/></div>
:::

**Paso 3.** Haz clic en "Guardar" para guardar el arreglo de salida de la LCD como un archivo `.h`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/7.png" style={{width:500, height:'auto'}}/></div>


## Empezando

Para usar la **XIAO eInk Expansion Board**, necesitamos programar la serie XIAO. La tabla con los diferentes tamaños de E-paper compatibles con XIAO es la siguiente:

<div class="table-center">

| E-paper / XIAO | XIAO SAMD21 | XIAO RP2040 | XIAO nRF52840 | XIAO ESP32-C3 | XIAO ESP32-S3 |
| --- | --- | --- | --- | --- | --- |
| E-paper de 1.54 pulgadas - Dotmatix 200x200 | ✅ | ✅ | ✅ | ✅ | ✅ |
| E-paper de 2.13 pulgadas - Flexible Monocromo 212x104 | ✅ | ✅ | ✅ | ✅ | ✅ |
| E-paper de 2.13 pulgadas - Cuádruple 212x104 | ✅ | ✅ | ✅ | ✅ | ✅ |
| E-paper de 2.9 pulgadas - Monocolor 128x296 | ✅ | ✅ | ✅ | ✅ | ✅ |
| E-paper de 2.9 pulgadas - Cuádruple color 128x296 | ✅ | ✅ | ✅ | ✅ | ✅ |
| E-paper de 4.2 pulgadas - Monocolor 400x300 | ✅ | ✅ | ✅ | ✅ | ✅ |
| E-paper de 5.65 pulgadas - Siete colores 600x480 | Desbordamiento de FLASH | ✅ | ✅ | ✅ | ✅ |
| E-paper de 5.83 pulgadas - Monocolor 648x480 | ✅ | ✅ | ✅ | ✅ | ✅ |
| E-paper de 7.5 pulgadas - Monocolor 800x480 | Desbordamiento de RAM | ✅ | ✅ | ✅ | ✅ |

</div>


### Preparación de Hardware

**Paso 1.** Preparación del material

<table align="center">
	<tr>
		<th>Seeed Studio XIAO SAMD21</th>
		<th>Seeed Studio XIAO RP2040</th>
		<th>Seeed Studio XIAO nRF52840 (Sense)</th>
		<th>Seeed Studio XIAO ESP32C3</th>
	    <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>



**Paso 2.** Inserta el XIAO en el Socket XIAO: Alinea los pines e inserta suavemente tu XIAO en el socket XIAO de la placa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_xiao.gif" style={{width:700, height:'auto'}}/></div>

**Paso 3.** Inserta el eInk en el conector FPC: Desliza cuidadosamente tu E-paper en el conector FPC de 24 pines en la placa de expansión ePaper.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/connect_eink.gif" style={{width:700, height:'auto'}}/></div>



### Preparación del Software
La herramienta de programación recomendada es el Arduino IDE. Necesitas configurar el entorno de Arduino para el XIAO y agregar el paquete correspondiente a la placa.
:::tip
Si es la primera vez que usas Arduino, te recomendamos encarecidamente que consultes [Comenzando con Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

**Paso 1.** Inicia la aplicación Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong>
    </a>
</div>

**Paso 2.** Selecciona el modelo de tu placa de desarrollo y añádelo al Arduino IDE.

- Si deseas usar **Seeed Studio XIAO SAMD21** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)** para completar la adición.

- Si deseas usar **Seeed Studio XIAO RP2040** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)** para completar la adición.

- Si deseas usar **Seeed Studio XIAO nRF52840** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)** para completar la adición.

- Si deseas usar **Seeed Studio XIAO ESP32C3** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)** para completar la adición.

- Si deseas usar **Seeed Studio XIAO ESP32S3** para las rutinas posteriores, por favor consulta **[este tutorial](http://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)** para completar la adición.



### Visión General de Funciones

Antes de comenzar a desarrollar un sketch, veamos las funciones disponibles:

- `void EPD_HW_Init()` —— Inicialización de la pantalla con actualización completa.
- `void EPD_HW_Init_180()` —— Inicialización de la pantalla con rotación de 180 grados.
- `void EPD_WhiteScreen_ALL(const unsigned char *datas)` —— Función para actualizar la pantalla completa.
  - **Parámetros de entrada:**
    - **datas:** Los datos de la imagen que se necesitan actualizar.
- `void EPD_WhiteScreen_White()` —— Función para borrar la pantalla (pantalla blanca).
- `void EPD_WhiteScreen_Black()` —— Función para mostrar toda la pantalla en negro.
- `void EPD_DeepSleep()` —— Función para modo de bajo consumo (modo de sueño profundo). No eliminar esta función, ya que su omisión puede reducir la vida útil de la pantalla.
- `void EPD_Init_Part()` —— Función para actualizar parcialmente la pantalla.
- `void EPD_SetRAMValue_BaseMap(const unsigned char *datas)` —— Función para refrescar parcialmente el fondo.
  - **Parámetros de entrada:**
    - **datas:** Los datos de la imagen que se necesitan actualizar.
- `void EPD_Dis_PartAll(const unsigned char *datas)` —— Función para actualizar parcialmente la pantalla completa.
- `void EPD_Dis_Part(unsigned int x_start,unsigned int y_start,const unsigned char *datas,unsigned int PART_COLUMN,unsigned int PART_LINE)` —— Función para actualizar parcialmente la pantalla.
  - **Parámetros de entrada:**
    - **unsigned int x_start:** Valor de la coordenada x del punto de inicio.
    - **unsigned int y_start:** Valor de la coordenada y del punto de inicio.
    - **const unsigned char *datas:** Datos que necesitan cambiar.
    - **unsigned int PART_COLUMN:** Longitud del área que debe cambiar.
    - **unsigned int PART_LINE:** Ancho del área que debe cambiar.
- `void EPD_HW_Init_Fast()` —— Función de actualización rápida de la pantalla.
- `void EPD_WhiteScreen_ALL_Fast(const unsigned char *datas)` —— Función para refrescar rápidamente la pantalla completa.
  - **Parámetros de entrada:**
    - **datas:** Los datos de la imagen que se necesitan actualizar.
- `void EPD_HW_Init_Fast2()` —— Función para actualización rápida de la pantalla.

### Demo de Ejemplo

**Paso 1.** Descarga el código demo y abre el código correspondiente a tu pantalla eInk.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Allen-Kuang/e-ink_Demo">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />




**Paso 2.** Toma un ejemplo utilizando el eInk de 4.2 pulgadas y un XIAO ESP32S3. Una vez que hayas descargado y extraído el código demo, navega hasta la carpeta "4.2 inch E-paper - Monocolor 400x300". Luego abre la carpeta "example" y usa Arduino para abrir el archivo "example.ino":
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/3.png" style={{width:700, height:'auto'}}/></div>

**Paso 3.** Coloca el archivo `.h` generado por image2lcd en la misma carpeta que el archivo de ejemplo y añádelo al código utilizando la instrucción `#include`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/9.png" style={{width:500, height:'auto'}}/></div>

**Paso 4.** Haz clic en el menú desplegable de selección de la placa, luego selecciona "Seleccionar otra placa y puerto...",


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/4.png" style={{width:500, height:'auto'}}/></div>

**Paso 5.** Selecciona el puerto de comunicación para tu XIAO, luego busca y selecciona "XIAO_ESP32S3"

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/5.png" style={{width:700, height:'auto'}}/></div>


**Paso 6.** Haz clic en "Subir" para flashear el firmware en el XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/6.png" style={{width:500, height:'auto'}}/></div>


**Paso 7.** Deberías ver que la pantalla eInk actualiza la imagen de demostración como se muestra a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/8.png" style={{width:500, height:'auto'}}/></div>

## Recursos

- **[ZIP]** [PCB&SCH archivo para Eagle](https://files.seeedstudio.com/wiki/eInk/xiao-expansion/epaperIO.zip)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte el soporte necesario y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>








