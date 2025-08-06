---
title: Kit RF link 315Mhz  
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/315Mhz_RF_link_kit/
slug: /es/315Mhz_RF_link_kit
last_update:
  date: 07/15/2025
  author: Guillermo
---
![](http://bz.seeedstudio.com/depot/images/product/3151.jpg)

Este kit está compuesto por un **transmisor y un receptor**, comúnmente utilizados para aplicaciones de control remoto.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/315mhz-rf-link-kit-p-76.html)

## Especificaciones
---
* **Frecuencia:** 315 MHz  
* **Modulación:** ASK  
* **Salida de datos del receptor:** Alto = 1/2 Vcc, Bajo = 0.7 V  
* **Voltaje de entrada del transmisor:** 3–12 V (a mayor voltaje, mayor potencia de transmisión)  

## Uso
---
La conexión típica es:  
**MCU → Codificador → Transmisor →→→ Receptor → Decodificador → MCU**

PT2262 (codificador) y PT2272 (decodificador) son opcionales. Su propósito es:

1. Evitar interferencias cuando hay múltiples enlaces RF en el área  
2. Aislar perturbaciones externas  

También puedes integrar la codificación y decodificación directamente en los microcontroladores de ambos extremos. Si no hay dispositivos de 315 MHz cercanos, puede usarse como una conexión directa por cable.

Disculpa por la falta de documentación detallada, estamos trabajando en ello. Mientras tanto, no dudes en consultarnos cualquier duda.  
 
Lo hemos probado siguiendo la guía de SparkFun y es **compatible**. La única diferencia está en el encapsulado y algunos pines GND adicionales.

Además, estamos desarrollando más módulos RF con diferentes frecuencias y capacidades. El próximo planeado está basado en el chip **CC1100**.  
¡Tus sugerencias son bienvenidas!

![](https://files.seeedstudio.com/wiki/315Mhz_RF_link_kit/img/315433RF.jpg)

## Recursos
---
- [Esquema de demostración](https://www.seeedstudio.com/depot/datasheet/315MRFlink.pdf)  
- [VirtualWire.zip](https://files.seeedstudio.com/wiki/315Mhz_RF_link_kit/res/VirtualWire.zip)  
- [Documentación de VirtualWire v1.3](https://www.seeedstudio.com/depot/images/product/VirtualWire.pdf)  
- [Ejemplo de SparkFun](http://www.sparkfun.com/datasheets/RF/KLP_Walkthrough.pdf)  
- [Ejemplo usando módulos RF con AVR](http://winavr.scienceprog.com/example-avr-projects/running-tx433-and-rx433-rf-modules-with-avr-microcontrollers.html)

## Soporte Técnico y Discusión de Producto
¿Tienes algún problema técnico? Puedes enviar tu duda en nuestro [foro](http://forum.seeedstudio.com/).  
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte el soporte necesario para que tu experiencia sea lo más satisfactoria posible.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>