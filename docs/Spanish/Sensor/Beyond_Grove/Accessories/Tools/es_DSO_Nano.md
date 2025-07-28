---
title: DSO Nano
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/DSO_Nano/
slug: /es/DSO_Nano
last_update:
  date: 11/14/2025
  author: Guillermo
---
El DSO Nano es un osciloscopio portátil de un solo canal, ideal para mediciones rápidas en campo y más. Encontrarás que es muy fácil de usar, pero no por ello menos sorprendente como herramienta compacta.

Siendo un proyecto abierto de hardware y software dinámico y en constante evolución, la información suele estar dispersa. Esta página intenta recopilar la información más relevante en un solo lugar, para ayudar a los nuevos usuarios a orientarse entre el abundante material desorganizado que ya existe.

Haz clic en la imagen para acceder a las diferentes versiones del DSO Nano.

|[![](https://files.seeedstudio.com/wiki/DSO_Nano/img/Dsonanointro.jpg)](https://www.seeedstudio.com/DSO-nano-Pocket-size-digital-storage-oscilloscope-p-512.html)|[![](https://files.seeedstudio.com/wiki/DSO_Nano/img/Dsonanov2intro.jpg)](https://www.seeedstudio.com/DSO-Nano-v2-p-681.html)|[![](https://files.seeedstudio.com/wiki/DSO_Nano/img/Nano_v3.jpg)](https://www.seeedstudio.com/DSO-Nano-v3-p-1358.html)|

<div>
  |:---:|:---:|:---:|
  |[DSO Nano v1](https://www.seeedstudio.com/DSO-nano-Pocket-size-digital-storage-oscilloscope-p-512.html)<br />**(Discontinued)**|[DSO Nano v2](https://www.seeedstudio.com/DSO-Nano-v2-p-681.html)<br />**(Discontinued)**|[DSO Nano v3](https://www.seeedstudio.com/DSO-Nano-v3-p-1358.html)
</div>

## Detalles del hardware
---
Hasta ahora han existido tres versiones principales del DSO Nano: la original en 2009 y la versión DSO Nano V2 en 2010. (Una mejora significativa de hardware que incluye canales dobles se introdujo con el [DSO Quad](https://wiki.seeedstudio.com/DSO_Quad).) Aparte de la unidad de carga mejorada en la V2 y un rediseño de la PCB, las especificaciones son prácticamente iguales. Pueden usar el mismo firmware.

Se publicó una foto del interior de la V2 en el [foro](https://community.seeedstudio.com/discover.html?t=DSO).

<table >
<tr>
<td> CPU
</td>
<td> ARM Cortex™-M3 (STM32F103VBT6)
</td></tr>
<tr>
<td> RAM
</td>
<td> 20k
</td></tr>
<tr>
<td> Flash ROM
</td>
<td> 128k
</td></tr>
<tr>
<td> Frecuencia de reloj
</td>
<td> 72MHz
</td></tr>
<tr>
<td> Pantalla
</td>
<td> TFT LCD a color de 2.8″
</td></tr>
<tr>
<td> Resolución de pantalla
</td>
<td> 320×240
</td></tr>
<tr>
<td> Color de pantalla
</td>
<td> 65K
</td></tr>
<tr>
<td> Conexión PC vía USB
</td>
<td> como lector de tarjeta SD
</td></tr>
<tr>
<td> Actualización
</td>
<td> por bootloader vía USB
</td></tr>
<tr>
<td> Fuente de alimentación
</td>
<td> Batería recargable de litio 3.7V / USB (controlador de carga LTC4054)
</td></tr></table>

## Actualización del firmware
---
El DSO Nano que tienes en tus manos tardó un tiempo en llegar; es muy probable que ya exista una versión más reciente del firmware.

El firmware más reciente de BenF está disponible en el foro de [Soporte Técnico](https://forum.seeedstudio.com/viewtopic.php?f=12&amp;t=1793) (este enlace está roto, si buscas el firmware, por favor consulta la wiki de [DSO Nano V3](https://wiki.seeedstudio.com/DSO_Nano_v3/)). Dentro del archivo ZIP también encontrarás el manual de usuario para esta versión del firmware.

Para actualizar el firmware a la versión más reciente, tienes varias opciones:

* Si usas Windows, sigue las instrucciones contenidas en el manual oficial de usuario [v2 User Manual](https://files.seeedstudio.com/wiki/DSO_Nano/res/DSO%20Nano%20v2%20Manual.pdf) (páginas 8-10). La utilidad requerida DfuSeDemo.exe también está disponible [aquí](http://dsonano.googlecode.com/files/um0412.zip).
* En Linux y Mac OS X puedes usar [Dfu-util](https://wiki.seeedstudio.com/Dfu-util) (versión 0.5 o superior).

## Capacidades
---
<table >
<tr>
<td> Ancho de banda analógico
</td>
<td> 0 - 1MHz
</td></tr>
<tr>
<td> Tasa máxima de muestreo
</td>
<td> 1Msps 12Bits
</td></tr>
<tr>
<td> Profundidad de memoria de muestreo
</td>
<td> 4096 puntos
</td></tr>
<tr>
<td> Sensibilidad horizontal
</td>
<td> 1μS/Div～10S/Div (pasos 1-2-5)
</td></tr>
<tr>
<td> Posición horizontal
</td>
<td> ajustable con indicador
</td></tr>
<tr>
<td> Sensibilidad vertical
</td>
<td> 10mV/Div～10V/Div (con sonda ×1)
</td></tr>
<tr>
<td>
</td>
<td> 0.5V/Div～100V/Div (con sonda ×10)
</td></tr>
<tr>
<td> Posición vertical
</td>
<td> ajustable con indicador
</td></tr>
<tr>
<td> Impedancia de entrada
</td>
<td> &gt;500KΩ
</td></tr>
<tr>
<td> Voltaje máximo de entrada
</td>
<td> 80Vpp (con sonda ×1)
</td></tr>
<tr>
<td> Acoplamiento
</td>
<td> DC
</td></tr>
<tr>
<td> Modos de disparo
</td>
<td> Auto, Normal, Single, None y Scan
</td></tr>
<tr>
<td> Funcionalidades:
</td>
<td> Medición automática: frecuencia, ciclo, duty,
</td></tr>
<tr>
<td>
</td>
<td> V<sub>pp</sub>, V<sub>rms</sub>, V<sub>avg</sub> y voltaje DC
</td></tr>
<tr>
<td>
</td>
<td> Medición vertical precisa con marcadores
</td></tr>
<tr>
<td>
</td>
<td> Medición horizontal precisa con marcadores
</td></tr>
<tr>
<td>
</td>
<td> Disparo por flanco ascendente/descendente
</td></tr>
<tr>
<td>
</td>
<td> Nivel de disparo ajustable con indicador
</td></tr>
<tr>
<td>
</td>
<td> Sensibilidad de disparo ajustable con indicador
</td></tr>
<tr>
<td>
</td>
<td> Función hold/run (pausar/reanudar)
</td></tr>
<tr>
<td> Señal de prueba
</td>
<td> Interna de 10Hz～1MHz (pasos 1-2-5)
</td></tr>
<tr>
<td> Almacenamiento de formas de onda
</td>
<td> Tarjeta SD
</td></tr>
<tr>
<td> Conexión PC vía USB
</td>
<td> como lector de tarjeta SD
</td></tr></table>

## Recursos
---
* Por favor visita nuestro [foro DSO Nano](https://community.seeedstudio.com/discover.html?t=DSO) para soporte técnico rápido y discusión de uso.
* [Firmware oficial, esquemáticos y documentación de desarrollo](http://code.google.com/p/dsonano/)

* [Repositorio comunitario del firmware](https://gitlab.com/dsonano/dso-firmware) (para gcc e IAR)

* [Modifica la interfaz de usuario de tu DSO Nano](https://files.seeedstudio.com/wiki/DSO_Nano/res/DSOUI.pdf)

* [Sewa Mobil Jakarta](http://www.awanirentcar.com), [Accesorios para autos](http://kiosauto.com)

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