---
title: FSM-55
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/FSM-55/
slug: /es/FSM-55
last_update:
  date: 07/28/2025
  author: Guillermo
---
![](https://files.seeedstudio.com/wiki/FSM-55/img/FSM-55_board.jpg)

FSM-55 (Flying Stone Mini 55) es una pequeña placa para jugar con una matriz de LEDs 5x5.  
Fue nombrada así por su matriz de LEDs.

###   Pronunciación

Por favor di F-S-M "Go" "Go", ya que "Go" es la pronunciación del número 5 en japonés.

##   Tu libertad informática con un producto reproducible

###   Diseño de Hardware

El diseño de hardware está disponible como hardware libre. Fue diseñado con KiCAD.  
La licencia es CC-BY 3.0 Unported para el diseño esquemático, y CC-BY-SA 3.0 Unported para el diseño de la PCB.  
(Esto debería estar descrito en su README; voy a agregarlo pronto.)

Cuando uses el diseño de la PCB por tu cuenta, modifícalo para tus propios fines.  
Por favor, **no incluyas** el logo de Flying Stone Technology en tu PCB.

*   http://git.gniibe.org/gitweb/?p=fsm-55.git

###   Firmware

El firmware está disponible como Software Libre bajo la GPLv3+.

*   http://git.gniibe.org/gitweb/?p=chopstx/chopstx.git;h=refs/heads/cortex-m0-support

```bash
$ git clone --branch cortex-m0-support git://git.gniibe.org/chopstx/chopstx.git
```

El programa principal se encuentra en el directorio: `example-fsm-55`.

Ah, sí. Uso mi propia biblioteca de hilos (thread library) para el firmware, y la adapté para funcionar con Cortex-M0.

###   Herramienta

Si usas Windows en tu PC, la herramienta del fabricante funciona bien con línea de comandos (CLI).  
Recibí un reporte de que la versión con interfaz gráfica (GUI) no funciona bien.

En sistemas operativos libres, tal vez una versión más reciente de OpenOCD funcione, pero en mi caso no funcionó (versión 0.8 en Debian).

Uso mi propia herramienta, originalmente escrita para el Proyecto Gnuk (para el FST-01).

Tuve que modificar la herramienta (`stlinkv2.py`) para que funcione con el microcontrolador Cortex-M0.

*   http://git.gniibe.org/gitweb/?p=gnuk/gnuk.git;h=refs/heads/stlink-m0-support

```bash
$ git clone --branch stlink-m0-support git://git.gniibe.org/gnuk/gnuk.git
```

Originalmente fue desarrollada para FST-01. Hay aspectos específicos del FST-01, como la verificación de memoria flash SPI.  
Necesitas invocar la herramienta con la opción `-i` (inhibir la verificación de flash SPI) para usarla con FSM-55.

```bash
$ stlinkv2.py -i ...
```

##   Razones: ¡Las herramientas libres son muy importantes para nosotros!

Una de las razones principales para desarrollar esta placa fue el cierre de FreeRouting.Net.  
Aunque yo (gniibe) no usaba el servicio, fue un hecho lamentable.  
Quise llamar la atención de muchas personas sobre el diseño de PCBs usando herramientas libres (como en libertad) y la situación actual.

*   FreeRouting.Net: [http://freerouting.net/](http://freerouting.net/)

Otra razón para esta placa fue que descubrí que el soporte de SWD en OpenOCD está mejorando, aunque aún no es perfecto.  
Quise tener más oportunidades para mejorar por mi cuenta la situación en torno a OpenOCD y las herramientas SWD.

*   OpenOCD próxima versión 0.9.0: [http://openocd.sourceforge.net/](http://openocd.sourceforge.net/)

##   Productos disponibles en Seeed Bazaar

*   [Kit de Matriz de LEDs FSM-55](https://www.seeedstudio.com/depot/FSM55-LED-Matrix-Display-p-2121.html) (Octubre 2014)

*   <s>[Programador SWD (clon de ST-Link/V2)](https://www.seeedstudio.com/depot/STLink-V2-for-STM8-STM32-interface-programmer-p-2297.html)</s> (Marzo 2015)

*   **NOTA**: No estoy seguro de que el clon de ST-Link/V2 funcione con el FSM-55.  
El FSM-55 requiere que el pin NRST esté conectado al programador.  
Si el pin #9 del clon funciona como NRST, entonces estará bien.  
Pero parece que el pin NRST y el pin SWIM_RST son distintos en el ST-Link/V2 original.

*   **NOTA**: Tengo un clon del ST-Link/V2, pero no encuentro cómo usarlo.  
Necesitamos averiguar cómo activar el pin 9 de SWIM_RST como NRST del FSM-55.  
(28 de mayo de 2015)

*   **NOTA**: El firmware del ST-Link/V2 es software propietario.  
Idealmente, también debería ser software libre.  
Pero, así es la situación actual del desarrollo de hardware.  
Se podrían usar BusPirate o Versaloon en su lugar, pero todavía no son lo suficientemente estables para SWD.

##   Enlaces

###   Videos del prototipo del FSM-55

*   [https://www.youtube.com/watch?v=7L2qUNF0v2U](https://www.youtube.com/watch?v=7L2qUNF0v2U)
*   [https://plus.google.com/111933309665296903652/posts/AMm9zEScpWK](https://plus.google.com/111933309665296903652/posts/AMm9zEScpWK)
*   [https://plus.google.com/109927329313008001365/posts/3z5w9XwkhSr](https://plus.google.com/109927329313008001365/posts/3z5w9XwkhSr)

###   Artículos del desarrollador del FSM-55

*   Artículos sobre FSM-55 por su desarrollador: [http://www.gniibe.org/tag/fsm-55.html](http://www.gniibe.org/tag/fsm-55.html)

###   Filosofía

*   Graham Seaman, mayo de 2001, "Diseño de Hardware Libre - Pasado, Presente y Futuro":  
[https://web.archive.org/web/20140407174608/http://www.opencollector.org/Whyfree/freedesign.html](https://web.archive.org/web/20140407174608/http://www.opencollector.org/Whyfree/freedesign.html)

*   Software Libre y Diseño de Hardware Libre:  
[https://web.archive.org/web/20140407212334/http://www.opencollector.org/Whyfree/whyfree.html](https://web.archive.org/web/20140407212334/http://www.opencollector.org/Whyfree/whyfree.html)

*   Definición de Hardware Abierto en 1998:  
[https://web.archive.org/web/20140407171518/http://www.opencollector.org/Whyfree/open_hardware.html](https://web.archive.org/web/20140407171518/http://www.opencollector.org/Whyfree/open_hardware.html)

*   Definiciones:  
[https://web.archive.org/web/20140407194913/http://www.opencollector.org/Whyfree/definitions.html](https://web.archive.org/web/20140407194913/http://www.opencollector.org/Whyfree/definitions.html)

*   Benjamin Mako Hill, junio de 2010, "El Software Libre necesita Herramientas Libres":  
[http://mako.cc/writing/hill-free_tools.html](http://mako.cc/writing/hill-free_tools.html)

###   OSHW (que no es suficiente para el desarrollador de FSM-55)

*   Open Source Hardware: [http://freedomdefined.org/OSHW](http://freedomdefined.org/OSHW)

*   [Historia breve de las organizaciones y definiciones de hardware de código abierto](http://www.oshwa.org/research/brief-history-of-open-source-hardware-organizations-and-definitions)

###   Diseño Abierto

*   Diseño Abierto: [https://es.wikipedia.org/wiki/Open_design](https://es.wikipedia.org/wiki/Open_design)

###   GCC

*   GCC ARM Embedded: [https://launchpad.net/gcc-arm-embedded](https://launchpad.net/gcc-arm-embedded)

##   Soporte técnico y discusión de productos

Si tienes algún problema técnico, por favor envía tu consulta en nuestro [foro](http://forum.seeedstudio.com/).

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte el soporte necesario y asegurarnos de que tu experiencia con ellos sea lo más fluida posible.  
Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>