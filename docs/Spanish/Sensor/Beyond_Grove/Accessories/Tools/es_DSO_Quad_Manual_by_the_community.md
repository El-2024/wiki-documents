---
title: DSO Quad Manual (por la comunidad)
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/DSO_Quad_Manual_by_the_community/
slug: /es/DSO_Quad_Manual_by_the_community
last_update:
  date: 07/14/2025
  author: Guillermo
---
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/P10308912-1024x684.jpg)

El DSO Quad es un osciloscopio de bolsillo. Tiene muchas funciones excelentes en un paquete pequeño:

* 2 Entradas analógicas a 72 MS/s (10 [Vpp](#definiciones) usando la [sonda ×1](#definiciones), es posible 80 [Vpp](#definiciones) con una actualización).

* 2 Entradas digitales a (3.3V máximo, el diodo está diseñado para permitir voltajes mayores, se necesita actualización). Las sondas digitales no están incluidas.

* Salida de generador de señales, analógica de 10 Hz a 20 kHz o digital de 10 Hz a 100 kHz (salida digital de 8 MHz es posible con actualización).

* Modos de disparo Auto, Normal, Single, Scan y de ejecución libre.

Si es la primera vez que usas el DSO Quad, por favor lee la sección [Primeros pasos](#getting-started).

La sección de [Especificaciones](#specifications) contiene todos los detalles sobre las capacidades del DSO Quad.

<!-- [&gt; Download this manual as a PDF &lt;](#PDF) -->

_**Nota: El DSO Quad es actualmente un producto BETA. Esto significa que existen problemas significativos de hardware y software en el producto. Se ha hecho todo lo posible para describir con precisión el producto actual en este manual. Sin embargo, este manual NO OFRECE NINGUNA GARANTÍA.**_

## ¿Por qué otro manual?

El manual oficial de Seeedstudio puede descargarse [aquí](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929). Comencé esta página como un proyecto en mi tiempo libre para responder todas las preguntas que tuve al recibir mi DSO Quad.

Este manual puede ayudarte si te preguntas:

1. ¿Cómo instalo la batería? (¡Me preocupa que mi batería esté invertida! ¿Cómo puedo asegurarme?)

2. ¿Cómo abro la tapa trasera?

3. ¿Cómo enciendo la unidad?

4. ¿Qué significan los LEDs indicadores de carga?

5. ¿Cómo actualizo el firmware?

6. ¿Cómo pruebo la unidad?

7. ¿Para qué son los botones?

Sentí que todo esto debería estar en un solo lugar — un manual — y seguí trabajando en él hasta que quedó como lo ves ahora.

### Otra documentación de Seeedstudio

* [Manual DSO Quad (página oficial wiki)](/DSO_Quad "DSO Quad")

* [Compilación del firmware DSO Quad](/DSO_Quad-Building_Firmware "DSO Quad Building Firmware")

* [Tutorial de instalación de batería DSO Quad con video](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2074)

## Primeros pasos

Cuando recibas el DSO Quad, deberías tener algo como esto:

![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_plastic_cover.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_usb_cable.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_pouch.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_probes.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_battery.jpg)<br />
(Esta es la batería de polímero de litio, aún en su bolsa antiestática)

### Instalación de la batería

1. Primero, asegúrate de que el interruptor de encendido/apagado del DSO Quad esté en **OFF**:
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Turn_off.jpg)

2. Sostén el DSO Quad de modo que mires el texto en la parte trasera, con la orientación correcta como se muestra:
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Back_right_side_up.jpg)

3. Desliza la parte trasera hacia la izquierda:<br />
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Back_slide_to_left.jpg)

4. La tapa trasera debería desprenderse fácilmente, revelando el compartimento vacío para la batería:
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_back_removed.jpg)<br />
 **Nota:** Hay reportes de baterías con polaridad invertida. _**Esto destruirá tu circuito de carga si no se corrige.**_ Por favor, verifica cuidadosamente la alineación correcta de los cables rojo y negro.

5. Verifica que el cable rojo esté más cercano al exterior del DSO Quad. El cable negro debe estar hacia el interior.
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_observe_polarity.jpg)

6. Si tu batería estaba conectada incorrectamente, _**no la conectes!**_ Ve a [este hilo en el foro](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1911) para ayuda.

7. Si tu batería está conectada correctamente, pasa los cables por las presillas en el lado izquierdo:

8. Desliza la tapa trasera en su lugar.  
Sujeta firmemente el lado izquierdo mientras deslizas la tapa hacia la derecha. Mira [este enlace](http://www.flickr.com/photos/seeedstudio/5807556545/in/photostream/) para una demostración.

9. <div className="thumb tright"><div className="thumbinner" style={{width: 202}}> <div className="thumbcaption">LED rojo de "carga"</div></div></div> Pon el DSO Quad en posición vertical y conecta el cable USB. Deberías ver el LED rojo de "carga". Por favor carga tu DSO Quad al menos 1 hora la primera vez antes de usarlo.

![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_red_charging_led.jpg)

10. Por favor, [actualiza tu firmware](#firmware-updates) a la última versión.

### Indicadores LED y modos de energía

El DSO Quad se carga conectando el cable USB. El controlador de batería LTC4054 [no cargará la batería](https://forum.seeedstudio.com/viewtopic.php?p=6922#p6922) mientras el interruptor de encendido esté activado. Esto se explica mejor en la siguiente tabla:

<table>
  <tr>
    <th>Interruptor de energía</th>
    <th>Cable USB</th>
    <th>Batería</th>
    <th>Lo que ves</th>
    <th>Modo de energía del DSO Quad</th>
  </tr>
  <tr>
    <td>APAGADO</td>
    <td>Desconectado</td>
    <td>Inactiva</td>
    <td>LEDs apagados, pantalla apagada</td>
    <td>Apagado</td>
  </tr>
  <tr>
    <td>ENCENDIDO</td>
    <td>Desconectado</td>
    <td>Descargando</td>
    <td>LEDs apagados, pantalla encendida</td>
    <td>Normal (encendido)</td>
  </tr>
  <tr>
    <td>ENCENDIDO</td>
    <td>Desconectado</td>
    <td>Descargando</td>
    <td>LED verde encendido, pantalla apagada</td>
    <td>Modo ahorro de energía: después de 600 segundos sin pulsar botones, la pantalla se apaga</td>
  </tr>
  <tr>
    <td>ENCENDIDO</td>
    <td>Desconectado</td>
    <td>Vacía</td>
    <td>LEDs apagados, pantalla apagada</td>
    <td>Sin batería, apagado. Por favor conecta el cable USB: la batería necesita cargarse</td>
  </tr>
  <tr>
    <td>ENCENDIDO</td>
    <td>Conectado a USB 5V/500mA</td>
    <td>Inactiva</td>
    <td>LED rojo encendido, pantalla encendida</td>
    <td>Encendido, <a href="https://forum.seeedstudio.com/viewtopic.php?p=6922#p6922" target="_blank" rel="noopener noreferrer">la batería no carga mientras está encendido</a></td>
  </tr>
  <tr>
    <td>APAGADO</td>
    <td>Conectado a USB 5V/500mA</td>
    <td>Cargando</td>
    <td>LED rojo encendido, pantalla apagada</td>
    <td>Apagado, batería cargando</td>
  </tr>
  <tr>
    <td>APAGADO</td>
    <td>Puerto USB sin alimentación*</td>
    <td>Inactiva</td>
    <td>LEDs apagados, pantalla apagada</td>
    <td>Apagado, no puede cargar</td>
  </tr>
  <tr>
    <td>APAGADO</td>
    <td>Conectado a USB 5V/500mA</td>
    <td>Llena</td>
    <td>LEDs apagados, pantalla apagada</td>
    <td>Apagado, batería llena</td>
  </tr>
  <tr>
    <td>APAGADO</td>
    <td>Conectado a USB 5V/500mA</td>
    <td>Sin batería instalada</td>
    <td>LED rojo tenue, pantalla apagada</td>
    <td>Apagado, sin batería instalada</td>
  </tr>
</table>

*** Puerto USB no está suministrando energía:** si tu DSO Quad no está cargando, podría ser problema del puerto USB. Aquí algunos consejos para solución de problemas:

1. Asegúrate de que el cable USB esté correctamente conectado.

2. Prueba con un puerto diferente en la computadora. Algunos hubs USB no suministran suficiente energía, especialmente si hay varios dispositivos conectados.

3. Prueba con un puerto diferente en otra computadora. Algunos laptops pueden apagar la energía de los puertos USB cuando están en modo de suspensión.

### Actualizaciones de Firmware

Existen varias versiones del DSO Quad, y el firmware para cada una es diferente. Por favor, identifica cuidadosamente tu hardware. Cuando enciendas por primera vez el DSO Quad, busca la versión de hardware. Compara lo que ves con la siguiente tabla:

Consulta aquí el firmware más reciente: [DSO Quad Building Firmware](/DSO_Quad-Building_Firmware "DSO Quad Building Firmware")  
Aquí está el firmware más reciente bajo contrato especial con [FPGA(DFU，SYS，APP) v2.7.2](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/res/DS203.V2.72.zip).

<table border="1" cellspacing="0" cellpadding="5">
  <tr>
    <th>Pantalla de inicio</th>
    <th>Versión Hardware</th>
    <th>Firmware de fábrica</th>
    <th>Última actualización FW</th>
    <th>Notas</th>
  </tr>
  <tr>
    <td></td>
    <td>2.7</td>
    <td>
      APP 2.53<br />
      SYS 1.52<br />
      FPGA 2.61
    </td>
    <td>
      APP P1.00<br />
      SYS B1.52<br />
      FPGA 2.61
    </td>
    <td>
      Seeed Studio envía esta versión.<br />
      ¡Este firmware tiene una GUI mucho mejor!<br />
      (Además, el firmware de fábrica en 2.7 se congelaba mucho, por lo que se recomienda este firmware)<br />
      <img src="https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_hw_ver_26.jpg" alt="Versión 2.7" style="max-width: 150px;" />
    </td>
  </tr>
  <tr>
    <td></td>
    <td>2.6</td>
    <td>
      APP 2.33<br />
      SYS 1.33<br />
      FPGA 2.5
    </td>
    <td>
      APP 2.53<br />
      SYS 1.52<br />
      FPGA 2.61
    </td>
    <td>
      Seeed Studio envió esta versión<br />
      <img src="https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_hw_ver_22.jpg" alt="Versión 2.6" style="max-width: 150px;" />
    </td>
  </tr>
  <tr>
    <td></td>
    <td>2.2</td>
    <td>APP<br />SYS 1.02</td>
    <td>
      <a href="https://forum.seeedstudio.com/viewtopic.php?p=6760#p6760" target="_blank" rel="noopener noreferrer">APP 2.34?</a><br />
      <a href="https://forum.seeedstudio.com/viewtopic.php?p=6760#p6760" target="_blank" rel="noopener noreferrer">SYS 1.32?</a>
    </td>
    <td>
      Los dispositivos versión 2.2 sólo fueron entregados a beta testers,<br />
      con una <a href="http://ourdev.cn/bbs/bbs_content_all.jsp?bbs_sn=4138839" target="_blank" rel="noopener noreferrer">actualización gratuita a 2.6</a>.<br />
      Esta versión no recibirá más actualizaciones de software.
    </td>
  </tr>
</table>

Puedes encontrar más información en [https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929).

El código fuente del firmware está disponible [aquí](http://github.com/Seeed-Studio/DSOQuad_SourceCode). **Nota:** Seeedstudio no recomienda crear tu propio firmware FPGA, debido al riesgo de dañar el hardware.

### Calibración

El DSO Quad requiere calibración antes del primer uso, y debe recalibrarse después de un uso prolongado. Los dos parámetros a calibrar son ganancia y sesgo (offset DC).

#### GUI antigua (versión app 2.x)

1. Calibración de sesgo

    1. Mantén presionado el botón marcado con un cuadrado por 2 segundos, y aparecerá la "hoja de cálculo" de calibración.

    2. Ajusta los valores a 0 en cada casilla. Muévete arriba/abajo girando el interruptor de navegación más a la derecha a la izquierda/derecha. Cambia de columnas pulsando el interruptor de navegación.

    3. Cancela la calibración dejando algunos valores sin cambiar. O guarda la calibración después de calibrar en cada nivel. Sigue las instrucciones en la parte superior.

2. Calibración de ganancia

    1. (Consulta el manual regular para esto)

#### GUI nueva (hardware 2.7, app versión P1.00 y superiores)

(No estoy seguro del manejo de versiones, quizás sea beta o preview, no está claro)

1. Calibración de sesgo

    1. Presiona el botón cuadrado una vez

    2. Selecciona "Calibrat" en el menú.

    3. Sigue las instrucciones

Más detalles en: [DSO Quad:Calibration](/DSO_Quad-Calibration "DSO Quad:Calibration")

Nota: Observé que la calibración es diferente cuando conectas o desconectas la fuente de alimentación al conector micro USB. Calibra la forma en que más usarás el equipo.

1. Calibración de ganancia

    1. (Consulta el manual regular para esto)

## Uso del DSO Quad

Los interruptores más importantes son los dos giratorios a la derecha. El más a la derecha es el interruptor de "navegación" para cambiar qué parte principal de la interfaz está parpadeando. El otro interruptor es el de "submenú", usado para cambiar Volts/div, microsegundos, posiciones del disparo, etc.

Cada uno de estos interruptores puede girarse hacia la izquierda o derecha, y presionarse como botón.

La pantalla principal tiene estos bloques:

<table border="1" cellspacing="0" cellpadding="5">
  <tr>
    <th>Título</th>
    <th>Descripción del bloque</th>
  </tr>
  <tr>
    <td>RUN/HOLD</td>
    <td>Pausar el osciloscopio, y volver a correrlo</td>
  </tr>
  <tr>
    <td>CH(A)</td>
    <td>Gráfica y mediciones en color cian</td>
  </tr>
  <tr>
    <td>CH(B)</td>
    <td>Gráfica y mediciones en color amarillo</td>
  </tr>
  <tr>
    <td>CH(C)</td>
    <td>Gráfica y mediciones en color púrpura</td>
  </tr>
  <tr>
    <td>CH(D)</td>
    <td>Gráfica y mediciones en color verde</td>
  </tr>
  <tr>
    <td>SCAN</td>
    <td>Modo de disparo SCAN/AUTO/NORM (NORMAL)/SINGL (SINGLE)/NONE en color marrón</td>
  </tr>
  <tr>
    <td>Generador de Señal</td>
    <td>Salida digital y analógica "wave out" en color azul</td>
  </tr>
  <tr>
    <td>Disparo (Trigger)</td>
    <td>Todos los niveles de disparo (para CH(A) a CH(D)) y modo de disparo</td>
  </tr>
  <tr>
    <td>YPOS</td>
    <td>YPOS</td>
  </tr>
  <tr>
    <td>V1</td>
    <td>V1</td>
  </tr>
  <tr>
    <td>V2</td>
    <td>V2</td>
  </tr>
  <tr>
    <td>Desplazador horizontal</td>
    <td>Desplazador horizontal</td>
  </tr>
  <tr>
    <td>T1</td>
    <td>T1</td>
  </tr>
  <tr>
    <td>T2</td>
    <td>T2</td>
  </tr>
  <tr>
    <td>XPOS</td>
    <td>XPOS</td>
  </tr>
  <tr>
    <td>Delta V</td>
    <td>Diferencia entre los marcadores V1 y V2</td>
  </tr>
  <tr>
    <td>Delta T</td>
    <td>Diferencia entre los marcadores T1 y T2</td>
  </tr>
  <tr>
    <td>Mediciones en vivo</td>
    <td>Lecturas personalizables, por ejemplo: Vbt, FPS, Vdc, RMS, Max, Min, Vpp, FRQ, DUT, CIR, TL, TH</td>
  </tr>
</table>

### Medición de Voltaje

Vmax, Vmin, Vpp, Vdc (promedio V), Vrms (raíz cuadrada de promedio(V*V))

## Especificaciones

Muestreo: 0.1 usec - 1 seg

Ancho de banda de entrada digital [Este hilo del foro](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1978)

### Definiciones

<table>
  <tr>
    <th>Vpp</th>
    <td>Voltios pico a pico</td>
  </tr>
  <tr>
    <th>sonda x1</th>
    <td>Mide señales de bajo voltaje. No exceder 80Vpp o podrías dañar tu DSO Quad. (Puede usarse como sonda de baja impedancia.)</td>
  </tr>
  <tr>
    <th>sonda x10</th>
    <td>
      Mide señales de alto voltaje. No exceder 400Vpp o podrías dañar tu DSO Quad. (Puede usarse como sonda de alta impedancia.)<br /><br />
      Nota que los valores en pantalla son 1/10 de la entrada, así que multiplica por 10 mentalmente.
    </td>
  </tr>
  <tr>
    <th>...</th>
    <td>...</td>
  </tr>
</table>

### Requisitos

El DSO Quad puede cargarse desde cualquier puerto USB normal. Por favor, carga tu DSO Quad al menos 1 hora antes de usarlo.

El firmware del DSO Quad realiza una desconexión y reconexión rápida de USB para hacer una actualización "en vivo" del firmware. Este método no es compatible con Mac OS X o Linux. Por favor, revisa [este hilo del foro](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1934) para más información. Consulta [DSO Quad Building Firmware](/DSO_Quad-Building_Firmware "DSO Quad Building Firmware") para saber cómo actualizar el firmware desde Linux.

## Recursos

[FPGA(DFU，SYS，APP) v2.7.2](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/res/DS203.V2.72.zip)

## Soporte Técnico y Discusión de Producto

Si tienes algún problema técnico, por favor envía tu consulta a nuestro [foro](http://forum.seeedstudio.com/).  
¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes formas de soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
