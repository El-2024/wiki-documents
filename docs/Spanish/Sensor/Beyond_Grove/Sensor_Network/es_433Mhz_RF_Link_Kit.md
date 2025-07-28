---
title: 433Mhz RF Link Kit
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/433Mhz_RF_Link_Kit/
slug: /es/433Mhz_RF_Link_Kit
last_update:
  date: 07/15/2025
  author: Guillermo
---

![](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/img/113990010%201.jpg)

Este kit está compuesto por un transmisor y un receptor, y es ampliamente utilizado para aplicaciones de **control remoto**.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/433mhz-rf-link-kit-p-127.html?cPath=139_140)

## Especificaciones
---
- **Frecuencia:** 433 MHz  
- **Modulación:** ASK  
- **Salida de datos del receptor:** Alto – ½ Vcc, Bajo – 0.7 V  
- **Voltaje de entrada del transmisor:** 3–12 V (a mayor voltaje, mayor potencia de transmisión)  
- **Voltaje de entrada del receptor:** 3.3–6 V (a mayor voltaje, mayor potencia de recepción)  

---

## Uso
---
Los chips **PT2262 (Codificador)** y **PT2272 (Decodificador)** son opcionales. Su propósito es:

1. Evitar interferencias cuando hay múltiples enlaces RF en el entorno  
2. Aislar perturbaciones externas  

También puedes integrar las funciones de codificación y decodificación directamente en los microcontroladores en ambos extremos.  
Si no hay dispositivos RF de 433 MHz cerca, se puede utilizar como una conexión directa por cable.

Disculpa por la falta de documentación formal. Hemos probado este módulo usando la guía de SparkFun y es compatible. La única diferencia es en el empaque y algunos pines GND adicionales.

Planeamos lanzar más módulos RF en diferentes frecuencias y capacidades. El siguiente estará basado en el **CC1100**. Si tienes sugerencias, ¡háznoslas saber!

## Soporte

Si tienes preguntas o ideas de diseño, visita nuestro [foro oficial](https://community.seeedstudio.com/) y únete a la conversación.

## Recursos

- [Esquema de demostración](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/res/315MRFlink.pdf)  
- [VirtualWire v1.3](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/res/VirtualWire.rar)  
- [Documentación de VirtualWire v1.3](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/res/VirtualWire.pdf)  
- [Ejemplo de SparkFun](https://files.seeedstudio.com/wiki/433Mhz_RF_Link_Kit/res/KLP_Walkthrough.pdf)  
- [Ejemplo con microcontroladores AVR](http://winavr.scienceprog.com/example-avr-projects/running-tx433-and-rx433-rf-modules-with-avr-microcontrollers.html)  

## Licencia

Este documento se encuentra bajo licencia Creative Commons  
**[Attribution-ShareAlike 3.0](https://creativecommons.org/licenses/by-sa/3.0/)**  
El código fuente y las bibliotecas se licencian bajo **GPL/LGPL**, revisa los archivos fuente para más detalles:  
[Licencia GPL](http://www.gnu.org/licenses/gpl.html)

## Enlaces Externos

- [RCSwitch – Librería Arduino para controlar enchufes remotos 433MHz](http://code.google.com/p/rc-switch)

## Soporte Técnico y Discusión

Gracias por elegir nuestros productos. Si tienes algún inconveniente técnico, por favor publícalo en nuestro [foro oficial](http://forum.seeedstudio.com/).  
Estamos comprometidos a ofrecerte diferentes medios de asistencia para que tu experiencia sea lo más fluida posible.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>