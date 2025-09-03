---
title: Kit de relé de interruptores remotos de 314 MHz - 2 canales
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/315Mhz_remote_relay_switch_kits-2_channels/
slug: /es/315Mhz_remote_relay_switch_kits-2_channels
last_update:
  date: 07/15/2025
  author: Guillermo
---

![](http://bz.seeedstudio.com/depot/images/P2130781.jpg)

Este interruptor remoto te permite controlar de forma inalámbrica cualquier dispositivo de **12 V DC**. Es perfecto para luces, ventiladores, iluminación de jardín y mucho más. Este kit fácil de cablear es ideal para cualquier persona con conocimientos básicos de electricidad, y puede integrarse fácilmente a múltiples aplicaciones de 12 V. Para los entusiastas del modding de PC, el resultado final del kit de control remoto a 12 V DC es verdaderamente impresionante y seguro llamará la atención. Para los aficionados al DIY, este kit añadirá un efecto mágico a tus proyectos.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Skeleton-Box-p-1407.html)

## Especificaciones
---
* Frecuencia: 315 MHz  
* Modulación: ASK  
* Voltaje de trabajo: 12 V DC  
* Sensibilidad del receptor: -105 dBm  
* Distancia de emisión: 100 m en campo abierto  
* Tamaño: 68 mm × 47 mm × 12 mm  
* **Por defecto incluye receptor de 315 MHz**, intercambiable por uno de 433 MHz  

## Definición de Pines y Calificación
---
Cada relé cuenta con un grupo de 3 pines:

* **A** – Normalmente cerrado, se abre cuando el relé se activa  
* **B** – Nodo común  
* **C** – Normalmente abierto, se cierra cuando el relé se activa  

## Uso
---

### Codificación y Decodificación

La conexión típica es:  
**MCU → Codificador → Transmisor →→→ Receptor → Decodificador → MCU**

PT2262 (Codificador) y PT2272 (Decodificador) son opcionales. Sirven para:

1. Evitar interferencias entre múltiples enlaces RF cercanos  
2. Aislar perturbaciones externas  

También puedes integrar la codificación y decodificación directamente en los MCUs de ambos extremos. Si no hay dispositivos de 315 MHz cercanos, se puede usar como una conexión directa por cable.

Para configurar un enlace PT2272–PT2262, debes hacer algunas soldaduras en el PT2262:

![](http://bz.seeedstudio.com/depot/images/product/RFReceiverDec.jpg)

Y configurar los pines correspondientes en el PT2272:

![](http://bz.seeedstudio.com/depot/images/product/RFTransmitEnc.jpg)

### Modos de Operación del Relé

El receptor ofrece **tres modos** para controlar el comportamiento del relé. Estos se seleccionan mediante el jumper de 3 pines en el receptor.

**Modo Momentáneo:**  
Cambia el jumper a la posición “M” para activar el modo momentáneo. En este modo, el relé se activa solo mientras dure la transmisión. Al finalizar la señal, vuelve a su estado original.

**Modo Flip-Flop (Biestable):**  
Quita el jumper para activar este modo. El relé cambiará de estado cada vez que reciba una señal, y se mantendrá así hasta recibir otra.

**Modo de Enganche (Latching):**  
Cambia el jumper a la posición “L”. Una vez activado por la señal del transmisor, el relé se mantendrá en ese estado hasta que la alimentación al receptor se interrumpa.

Consulta el siguiente diagrama del enlace RF a 315 MHz.  
**Lado transmisor:** Debes alimentar el pin "+12V" con 3–5 V DC (**Precaución**: el serigrafiado “12V” en la PCB es un error, no excedas los 5 V), y establecer el pin "TE" en alto (5 V) para habilitar la transmisión.  
**Lado receptor:** Alimenta con 5 V DC (VCC) y lee la salida desde D0~D3. El pin "TV" indicará cuándo llegan nuevos datos.

![](http://bz.seeedstudio.com/depot/images/product/315MhzTransmitter.gif)

## Recursos
---
*   [Manual de uso del kit remoto 315 MHz](https://www.seeedstudio.com/depot/datasheet/How%20to%20Use%20315MHz%20Remote%20Relay%20Kits.pdf)

## Soporte Técnico y Discusión de Producto
¿Tienes algún problema técnico? Puedes enviar tu duda en nuestro [foro](http://forum.seeedstudio.com/).  
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurar que tu experiencia sea lo más fluida posible, con múltiples canales de atención disponibles.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>