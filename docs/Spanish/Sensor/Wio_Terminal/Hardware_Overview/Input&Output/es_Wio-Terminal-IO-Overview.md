---
title: Resumen
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio_RP2040_Module_Build-in_Wireless_2.4G/
slug: /es/Wio-Terminal-IO-Overview
last_update:
  date: 07/27/2025
  author: Guillermo
---
# Resumen

Este repositorio introduce cómo usar los Grove IOs en el Wio Terminal. Esto te permite disfrutar de la funcionalidad plug and play del Ecosistema Grove, así como usar el GPIO compatible con Raspberry Pi de 40 pines.

## Esquemáticos de Hardware

### Distribución de Pines RPI en Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg" /></div>

Wio Terminal tiene un GPIO de 40 pines que sale del SAMD51, ¡con la misma distribución que Raspberry Pi!

Para usarlos, simplemente utiliza los nombres de pines definidos como los mostrados arriba. Algunos pines son multifuncionales, por lo que pueden referenciarse de diferentes maneras.

#### *Para más información, por favor revisa `variant.h`*

### Distribución de Pines del Puerto Grove en Wio Terminal

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-29.jpg" /></div>

Como puedes ver, hay dos Puertos Grove disponibles en Wio Terminal. Uno es el **Puerto I2C** por defecto y el otro es un **pin configurable Digital/Analógico**, que también puede usarse para salidas PWM. Ambos puertos Grove pueden usarse como Digital.

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
