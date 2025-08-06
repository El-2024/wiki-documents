---
title: DSO Quad
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/DSO_Quad/
slug: /es/DSO_Quad
last_update:
  date: 07/14/2025
  author: Guillermo
---

![](https://files.seeedstudio.com/wiki/DSO_Quad/img/P10308912-1024x684.jpg)

DSO Quad, también conocido como DSO203, es un osciloscopio digital de bolsillo de 4 canales para tareas comunes de ingeniería electrónica. Está basado en ARM Cortex M3 (STM32F103VCT6), proporcionando una tasa de muestreo de 72MS/s con FPGA integrado y ADC de alta velocidad. Un disco USB interno de 2MB puede usarse para almacenar capturas de formas de onda, aplicaciones de usuario y para actualizar el firmware.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/DSO-Quad-Aluminium-Alloy-Silver-p-1033.html?cPath=63_65)

## Características

---

* Tamaño de bolsillo y peso ligero  
* Dos canales analógicos de 36MS/s, hasta 72MS/s si se configura como canal único. **(Actualización a dos canales analógicos de 72MS/s, hasta 144MS/s si se configura como canal único desde versión .sys v1.31)**  
* Dos canales digitales  
* Generador de señales  
* Varias opciones de disparo (triggering)  
* Fácil almacenamiento de formas de onda  
* Actualización de firmware  
* Aplicaciones de usuario  
* Código abierto

**Fuente(s):** [Soporte de características](http://www.downloadranking.com/privacypolicy.php)

## Ideas para Aplicaciones

---

### Aplicaciones de usuario

Proyectos en curso:

* Port de GCC con FFT, espectrograma y varias correcciones [por pmos69 y marcosin](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2957)

* Interfaz de usuario alternativa [por gabonator1](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2362)

* Port de GCC del firmware por defecto [por tmbinc](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2274)

* Plotter de respuesta en frecuencia [por jpa](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2485)

* Aplicación de ejemplo FFT [por gabonator1](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2098)

* Analizador lógico [por jpa](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2861)

* Entorno de programación Pawn y varias aplicaciones [por jpa](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=3239)

* Port del SYS a gcc: [[1]](https://github.com/neilstockbridge/dsoquad-BIOS)

* Tetris [por LinX](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2344)

<big>Colección de Ideas</big>

**Aplicaciones**

* "Modo simple" - donde sólo están disponibles las funciones básicas para ayudar a personas sin experiencia.  
* ["Modo multímetro" - funciones básicas de multímetro (AC/DC VOM, pico/rms/delta serían útiles)](https://github.com/PetteriAimonen/QuadPawn/wiki/Advanced-Volt-Meter)  
  * Detallado en [https://github.com/PetteriAimonen/QuadPawn/wiki/Advanced-Volt-Meter](https://github.com/PetteriAimonen/QuadPawn/wiki/Advanced-Volt-Meter)  
* Análisis de protocolo/captura de datos - Serial, I2C, SPI, CAN  
* Medición LCR (uH, uF y R) - El generador de señales integrado lo hace natural. Existen tres métodos, todos requieren componentes externos [Ejemplo](http://www.edn.com/design/test-and-measurement/4363759/Circuit-measures-capacitance-or-inductance)  
* Analizador de semiconductores - Usar el DAC para probar y graficar la respuesta de voltaje de un diodo/transistor (y simplemente identificar componentes, como pinout y polaridad de transistor)  
* Analizador de espectro RF  
* Modo 2D X-Y que grafica los canales analógicos entre sí en dos ejes, con un canal digital que funciona opcionalmente como habilitador/deshabilitador del "haz".  
  * [Parece que existe algo](https://forum.seeedstudio.com/), pero no está en APP2.50 aún.  
* Decodificador/analizador y generador DMX (usado junto con un IC RS485 externo), sería una herramienta MUY útil para técnicos de teatro.  
* Modo televisión (TV analógica): mostrar cuadro/campo/línea (seleccionar campo A/B) o número de línea. Mostrar diagrama vectorscope. Mostrar contenido (es decir, la imagen de TV).  
* Sincronización con un segundo DSO Quad para señales analógicas/digitales de 4 canales, parecido al USBscope50 [movido de HARDWARE]  
  usar 'wave out' para generar un pulso/paso cuando la unidad maestra dispara, usar C/D como trigger para esclavos  
* Crear software de control remoto USB para usar el osciloscopio con PC si se rompe la pantalla LCD. [movido de HARDWARE]  
* Transmitir datos al PC - usar PC como buffer de almacenamiento con capacidad de procesamiento adicional. Un PC podría decodificar palabras I2C y otros protocolos que el Quad no puede. [movido de HARDWARE]  
* Función de ruido blanco - agregar al generador de funciones  

**Mejoras**

* Un analizador de espectro mostrando vista de frecuencia/tiempo  
* Transformada rápida de Fourier (FFT), útil para visualizar datos de espectro de una señal única.  

**Orientado a hardware/dispositivo**

* SDR (radio definida por software), ojo que sólo tenemos USB Full Speed (12Mb/s)  
* Pre-amplificador 10x muy necesario!!!  
* Añadir botones en el bisel para acceso más fácil a menús.  
* Añadir 2 canales analógicos más, quizás vía dongle USB.  
* Añadir puerto para dispositivos de expansión, para que un accesorio pueda ofrecer más capacidades, como generación RF o generador de funciones con amplitudes mayores. En particular, salidas +5V y 3.3V serían útiles.  

**Otros**

* Aplicación de servicio para personal técnico de soporte. Podría dividir la pantalla y mostrar instrucciones como "Verifica si el puerto 3, pin 5 tiene señal; si no, XYZ podría estar dañado". Podría haber un botón "siguiente" y para cada paso el texto, escala temporal, valores de trigger, etc. serían seleccionados.  
* Mi teléfono es ARM, quizá hacer una versión USB de esto y una app para teléfono que permita usar el teléfono como pantalla/táctil asegurada.  
* Funciones matemáticas simples en ambos canales analógicos y señal generada.  
* Dos entradas totalmente separadas a tierra permitirían medir entradas con referencia a tierra diferentes (como en el osciloscopio personal de dos canales Velleman).  
* Se debería añadir diodo de protección contra sobretensión para proteger el equipo de picos de alto voltaje.  
* Sobre-muestreo y su implementación por software podrían reducir ruido y aumentar la profundidad de bits efectiva.  
* Técnicas especiales de muestreo en tiempo equivalente podrían aumentar el ancho de banda para señales repetitivas.  
* Modo sin almacenamiento que barre continuamente el área visible en lugar de almacenar en un gran buffer fuera de pantalla. Actualmente, si pongo la tasa de muestreo a 50ms (por ejemplo para ver señal de audio), actualiza la pantalla solo cada pocos segundos; debería actualizarse continuamente.  

* _Por favor agrega más ideas..._

Consulta también información sobre desarrollo de aplicaciones para el DSO Quad.

## Especificaciones

---

<table>
<tr><td>Canal analógico *2</td><td>[CH_A] [CH_B]</td></tr>
<tr><td>Canal digital *2</td><td>[CH_C] [CH_D]</td></tr>
<tr><td>Escala vertical</td><td>20mV-10V/div (pasos 1-2-5) con sonda x1 / 200mV -100V/div (pasos 1-2-5) con sonda x10</td></tr>
<tr><td>Resolución vertical</td><td>8 bits</td></tr>
<tr><td>Acoplamiento de entrada</td><td>AC/DC</td></tr>
<tr><td>Voltaje máximo de entrada</td><td>80Vpp (sonda x1) / 400Vpp (sonda x10)</td></tr>
<tr><td>Memoria de almacenamiento</td><td>4K por canal / 8K en canal único</td></tr>
<tr><td>Tipo de disparo por software</td><td>borde, pulso, nivel (por agregar)</td></tr>
<tr><td>Tipo de disparo por hardware</td><td>borde</td></tr>
<tr><td>Fuente de disparo</td><td>CH1/CH2/EXT</td></tr>
<tr><td>Modo de disparo</td><td>Auto, Normal, Single, SCAN, None</td></tr>
<tr><td>Generador de señal de prueba</td><td>Onda cuadrada 10Hz a 8MHz 2.8Vpp, ciclo de trabajo ajustable 10~90% / Onda seno, cuadrada, diente de sierra, triangular 10Hz a 20kHz 2.8Vpp</td></tr>
<tr><td>Almacenamiento</td><td>disco USB interno de 2MB, archivos BMP, DAT</td></tr>
<tr><td>Medición automática</td><td>Vmax, Vmin, Vpp, Vavr, Vrms, Freq, Period, Pulse, Duty</td></tr>
<tr><td>Medición por cursor</td><td>Nivel, Voltaje</td></tr>
<tr><td>Modo de visualización</td><td>CH1, CH2, EXT, CH1+CH2, CH1-CH2</td></tr>
<tr><td>Modo de muestreo</td><td>tiempo real</td></tr>
<tr><td>Tasa de muestreo</td><td>30S/s - 72MS/s</td></tr>
<tr><td>Fuente de energía</td><td>Batería LiPo</td></tr>
<tr><td>Dimensiones</td><td>98 x 60 x 14.5 mm</td></tr>
<tr><td>Peso</td><td>80 g (sin batería)</td></tr>
<tr><td>Accesorios incluidos</td><td>2 sondas osciloscopio MCX, 2 sondas digitales MCX</td></tr>
</table>

## Componentes

---
Por favor agregar enlaces a las hojas de datos de los componentes principales, como:

<table>
<tr><td>CPU</td><td>72 MHz - ARM 32-bit Cortex™-M3 CPU - STM32F103VC <a href="http://www.st.com/internet/mcu/product/164492.jsp" target="_blank" rel="noopener noreferrer">[2]</a></td></tr>
<tr><td>FPGA</td><td>ICE65F_VQ100 <a href="http://www.siliconbluetech.com/media/downloads/iCE65L04DiCEDatasheet.pdf" target="_blank" rel="noopener noreferrer">[3]</a></td></tr>
<tr><td>TFT</td><td>(vacío)</td></tr>
<tr><td>ADC</td><td>AD9288-40 <a href="http://www.analog.com/static/imported-files/data_sheets/AD9288.pdf" target="_blank" rel="noopener noreferrer">[4]</a></td></tr>
<tr><td>Amplificadores operacionales</td><td>OPA2354 <a href="http://www.datasheetcatalog.org/datasheet/texasinstruments/opa354.pdf" target="_blank" rel="noopener noreferrer">[5]</a></td></tr>
<tr><td>MOSFET - Interruptores</td><td>(vacío)</td></tr>
<tr><td>Almacenamiento USB</td><td>(vacío)</td></tr>
<tr><td>(agregar más aquí)</td><td>(vacío)</td></tr>
</table>

## Precaución

---
El uso incorrecto de este dispositivo podría resultar en lesiones físicas y/o daños al dispositivo. Tome todas las precauciones necesarias y asegúrese de leer toda la documentación antes de usar el dispositivo.

## Actualización de firmware

---
Tenga en cuenta que este procedimiento actualmente solo funciona en Windows. [Las instrucciones para Linux están aquí](/DSO_Quad#upgrading-firmware "DSO_Quad/#upgrading-firmware"). (2011-04-29) Si logramos que el disco de actualización funcione en Linux y Mac, sería bastante fácil crear una aplicación que automatice este proceso para usuarios con menos experiencia. Incluso podría ser posible que el programa de actualización verifique la versión del hardware para evitar cargar un firmware incorrecto.

### Dónde encontrar el firmware

Aquí está el [último firmware](https://files.seeedstudio.com/wiki/DSO_Quad/res/PA1_V113.zip).

También puede [compilar el firmware desde el código fuente](/DSO_Quad-Building_Firmware "DSO Quad:Building Firmware").

### Advertencia de versión

**ADVERTENCIA**: Es importante que use el firmware correspondiente a su versión específica de hardware. La versión de hardware se muestra en la pantalla de inicio cuando enciende el dispositivo. Pida ayuda en los foros si no puede determinar la versión de su hardware. Si carga un firmware incorrecto, podría dañar irreparablemente el dispositivo.

### Procedimiento de actualización

(Solo Windows) Conecte el DSO Quad a su PC con un cable mini USB. Mantenga presionado el botón "&gt;||" (play/pausa) mientras enciende el dispositivo. Ahora el dispositivo estará en modo de actualización de firmware y aparecerá un disco USB en su sistema. Copie los archivos de firmware uno a uno, y cada vez que copie un archivo nuevo, el dispositivo se desconectará para preparar el archivo. Cuando el disco se vuelva a conectar, la extensión del archivo que subió cambiará (".rdy" significa que la carga fue correcta).

El orden en que suba los archivos SÍ importa. Comience subiendo los archivos .hex (el orden no importa). Para subir los archivos .BIN, primero debe subir el archivo .ADR correspondiente. Esto indica al dispositivo dónde colocar el archivo binario (por ejemplo, suba primero CFG_FPGA.ADR y luego inmediatamente xxxxFPGA.BIN). Si comete un error, elimine todos los archivos y comience de nuevo.

Cuando termine de subir todos los archivos de firmware, apague el dispositivo para completar la actualización. Al encenderlo nuevamente, las versiones de firmware deberían estar actualizadas. Si obtiene un error en la pantalla de inicio, intente cargar el firmware otra vez, siguiendo cuidadosamente las instrucciones anteriores.

Más detalles e instrucciones para Linux aquí: [DSO_Quad:Upgrading_Firmware](/DSO_Quad#upgrading-firmware "DSO_Quad/#upgrading-firmware")

### Descripción de archivos

<table>
<tr>
  <th>Tipo de archivo</th>
  <th>Formato del nombre</th>
  <th>Descripción</th>
</tr>
<tr>
  <td>Archivo FPGA</td>
  <td>xxxxFPGA.BIN</td>
  <td>Datos de configuración para el FPGA</td>
</tr>
<tr>
  <td>Archivo de logo</td>
  <td>logo_xxx.BIN</td>
  <td>Cree un archivo .BMP de 16 colores y tamaño 64x256 (tamaño de archivo = 46.9KB), y cambie la extensión a .INF. Esta es la imagen que se muestra en la pantalla de inicio.</td>
</tr>
<tr>
  <td>Archivo del sistema</td>
  <td>SYS_xxxx.hex</td>
  <td>??? (se necesita descripción)</td>
</tr>
<tr>
  <td>Archivo de aplicación</td>
  <td>APP_xxxx.hex</td>
  <td>??? (se necesita descripción)</td>
</tr>
<tr>
  <td>Archivo de dirección</td>
  <td>xxxx.ADR</td>
  <td>Estos archivos indican al dispositivo dónde colocar el siguiente archivo .BIN que cargue. Hay uno para el archivo FPGA y otro para el archivo de logo. Los archivos están nombrados para saber cuál corresponde a cuál.</td>
</tr>
</table>

**Nota:** a medida que salgan versiones nuevas, estos nombres de archivo podrían variar ligeramente. Las x representan valores que podrían cambiar con el tiempo.

### Distribución de memoria

![](https://files.seeedstudio.com/wiki/DSO_Quad/img/DSOQuad-bug-2.jpg)

<table cellpadding="1" cellspacing="1">
  <tr>
    <td>Inicio</td>
    <td>Fin</td>
    <td>Tamaño</td>
    <td>Nota</td>
  </tr>
  <tr>
    <td>0x00000</td>
    <td>0x03fff</td>
    <td>16384</td>
    <td>DFU</td>
  </tr>
  <tr>
    <td>0x04000</td>
    <td>0x0bfff</td>
    <td>32768</td>
    <td>SYS</td>
  </tr>
  <tr>
    <td>0x0c000</td>
    <td>0x13fff</td>
    <td>32768</td>
    <td>APP1 (por defecto)</td>
  </tr>
  <tr>
    <td>0x14000</td>
    <td>0x1bfff</td>
    <td>32768</td>
    <td>APP2</td>
  </tr>
  <tr>
    <td>0x1c000</td>
    <td>0x23fff</td>
    <td>32768</td>
    <td>APP3</td>
  </tr>
  <tr>
    <td>0x24000</td>
    <td>0x2bfff</td>
    <td>32768</td>
    <td>APP4</td>
  </tr>
  <tr>
    <td>0x2c000</td>
    <td>0x3d7ff</td>
    <td>71680</td>
    <td>FPGA bitstream (El datasheet indica que el tamaño máximo es 533 Kbit, por lo que este tamaño es un poco grande)</td>
  </tr>
  <tr>
    <td>0x3d800</td>
    <td>0x3ffff</td>
    <td>10240</td>
    <td>Logo (bmp, 256x64, 4 bits)</td>
  </tr>
</table>

**Nota:** La dirección base del flash es 0x08000000, pero está reflejada por el chip en 0x00000000 cuando BOOT0 está en bajo.

## Páginas Relacionadas

* [DSO Quad: Calibración](https://wiki.seeedstudio.com/DSO_Quad-Calibration)
* [DSO Quad: Actualización de Firmware](https://wiki.seeedstudio.com/DSO_Quad/#upgrading-firmware)
* [DSO Quad: Hardware Beta](https://wiki.seeedstudio.com/DSO_Quad-Beta_HW)

## Enlaces Externos

1. Blog de Seeedstudio [[6]](https://www.seeedstudio.com/blog/tag/dso-quad/)
2. Más fotos en Flickr [[7]](http://www.flickr.com/photos/seeedstudio/tags/dsoquad/)
3. [Aplicación DS203 en inspección BMW (Chino, traducido automáticamente al inglés)](http://translate.google.gr/translate?js=n&amp;prev=_t&amp;hl=zh-CN&amp;ie=UTF-8&amp;layout=2&amp;eotf=1&amp;sl=zh-CN&amp;tl=en&amp;u=http%3A%2F%2Fwww.minidso.com%2Fforum%2Fviewtopic.php%3Ff%3D4%26t%3D54) [[Página original](http://www.minidso.com/forum/viewtopic.php?f=4&amp;t=54)] - Algunos técnicos de BMW inspeccionaron el auto con un DSO203; además de su tamaño de bolsillo y desempeño práctico, el DSO203 opera perfectamente en la inspección del bus BMW: FlexRay.

## Recursos

---

* [Último firmware V2.72](https://files.seeedstudio.com/products/109990015/DS203.V2.72.zip)
* [Esquemático y firmware (HW2.2 ~ HW2.72)](https://wiki.seeedstudio.com/DSO_Quad/#upgrading-firmware)
* [Foro de discusión con recursos para HW2.6](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929)
* [Manual de usuario DS203_yijian_app_user_manual.rar‎](https://files.seeedstudio.com/wiki/DSO_Quad/res/DS203_yijian_app_user_manual.rar)
* [Manual DSO Quad](https://files.seeedstudio.com/wiki/DSO_Quad/res/DSO203_user_Guide_2.pdf)

## Soporte Técnico y Discusión de Producto

Gracias por elegir nuestros productos. Estamos aquí para brindarte soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
