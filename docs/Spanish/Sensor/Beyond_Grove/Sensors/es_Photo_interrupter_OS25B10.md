---
title: Foto-interruptor (OS25B10)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Photo_interrupter_OS25B10/
slug: /es/Photo_interrupter_OS25B10
last_update:
  date: 07/16/2025
  author: Guillermo
---
![](http://bz.seeedstudio.com/depot/images/product/phoint1.jpg)

El **OS25B10** es un fotorruptor estándar de alto rendimiento, que combina un diodo emisor de luz infrarroja GaAlAs de alta salida con un fototransistor de alta sensibilidad.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/photo-interrupter-os25b10-p-541.html?cPath=144_148)


## Características

---
- Espacio de interrupción de 10 mm  
- Fácil de montar en PCB  
- Alta velocidad de respuesta  
- Amplia aplicabilidad  

## Aplicaciones Sugeridas

---
- Sensores de fin de cinta  
- Sensores de temporización  
- Sensores de borde  
- Fotocopiadoras  

## Especificaciones

---
### Parámetros Máximos (Ta = 25 ℃)

<table>
  <tr>
    <td colspan="2" width="400px">Parámetro</td>
    <td width="200px">Símbolo</td>
    <td width="200px">Valor</td>
    <td width="200px">Unidad</td>
  </tr>
  <tr>
    <td rowspan="4">Entrada</td>
    <td>Disipación de Potencia</td>
    <td>PD</td>
    <td>80</td>
    <td>mW</td>
  </tr>
  <tr>
    <td>Voltaje Reverso</td>
    <td>VR</td>
    <td>5</td>
    <td>V</td>
  </tr>
  <tr>
    <td>Corriente Directa</td>
    <td>IF</td>
    <td>50</td>
    <td>mA</td>
  </tr>
  <tr>
    <td>Corriente de Pulso *1</td>
    <td>IFP</td>
    <td>1</td>
    <td>A</td>
  </tr>
  <tr>
    <td rowspan="4">Salida</td>
    <td>Disipación de Potencia Colector</td>
    <td>Pc</td>
    <td>100</td>
    <td>mW</td>
  </tr>
  <tr>
    <td>Corriente de Colector</td>
    <td>Ic</td>
    <td>20</td>
    <td>mA</td>
  </tr>
  <tr>
    <td>Voltaje C-E</td>
    <td>VCEO</td>
    <td>30</td>
    <td>V</td>
  </tr>
  <tr>
    <td>Voltaje E-C</td>
    <td>VECO</td>
    <td>5</td>
    <td>V</td>
  </tr>
  <tr>
    <td colspan="2">Temperatura de Operación</td>
    <td>Topr</td>
    <td>-25~+65</td>
    <td>℃</td>
  </tr>
  <tr>
    <td colspan="2">Temperatura de Almacenamiento</td>
    <td>Tstg</td>
    <td>-25~+85</td>
    <td>℃</td>
  </tr>
  <tr>
    <td colspan="2">Temp. de Soldadura *2</td>
    <td>Tsol</td>
    <td>240</td>
    <td>℃</td>
  </tr>
</table>

###   Características Electro-ópticas (Ta = 25 ℃)

<table>
  <tr>
    <td colspan="2" width="300px">Parámetro</td>
    <td width="100px">Símbolo</td>
    <td width="200px">Condiciones</td>
    <td width="100px">Min</td>
    <td width="100px">Typ</td>
    <td width="100px">Max</td>
    <td width="100px">Unidad</td>
  </tr>
  <tr>
    <td rowspan="4">Entrada</td>
    <td>Voltaje Directo</td>
    <td>VF</td>
    <td>IF=20mA</td>
    <td></td>
    <td>1.2</td>
    <td>1.6</td>
    <td>V</td>
  </tr>
  <tr>
    <td>Corriente Inversa</td>
    <td>IR</td>
    <td>VR=5V</td>
    <td></td>
    <td></td>
    <td>10</td>
    <td>µA</td>
  </tr>
  <tr>
    <td>Capacitancia</td>
    <td>Ct</td>
    <td>f=1MHz</td>
    <td></td>
    <td>25</td>
    <td></td>
    <td>pF</td>
  </tr>
  <tr>
    <td>Longitud de Onda Pico</td>
    <td>λP</td>
    <td></td>
    <td></td>
    <td>940</td>
    <td></td>
    <td>nm</td>
  </tr>
  <tr>
    <td rowspan="3">Salida</td>
    <td>Corriente Oscura del Colector</td>
    <td>ICEO</td>
    <td>VCE=10V</td>
    <td></td>
    <td>1</td>
    <td>100</td>
    <td>nA</td>
  </tr>
  <tr>
    <td>Corriente de Luz</td>
    <td>IL</td>
    <td>VCE=5V,IF=20mA</td>
    <td>1</td>
    <td>2.5</td>
    <td></td>
    <td>mA</td>
  </tr>
  <tr>
    <td>Voltaje de Saturación C-E</td>
    <td>VCE(sat)</td>
    <td>IF=20mA,Ic=0.5mA</td>
    <td></td>
    <td>0.2</td>
    <td>0.4</td>
    <td>V</td>
  </tr>
  <tr>
    <td rowspan="2">Velocidades de conmutación</td>
    <td>Tiempo de Subida</td>
    <td>tr</td>
    <td rowspan="2">Vcc=10V, Ic=5mA, RL=100Ω</td>
    <td></td>
    <td>5</td>
    <td></td>
    <td>µsec</td>
  </tr>
  <tr>
    <td>Tiempo de Bajada</td>
    <td>tf</td>
    <td></td>
    <td>5</td>
    <td></td>
    <td>µsec</td>
  </tr>
</table>

## Dimensiones Mecánicas

![](https://files.seeedstudio.com/wiki/Photo_interrupter_OS25B10/img/Photo-dimen.JPG)


## Recursos

Los siguientes recursos deben descargarse, incluyendo archivos Eagle, código de ejemplo, proyectos u otras hojas de datos:

![](https://files.seeedstudio.com/wiki/Photo_interrupter_OS25B10/img/OS25B10.jpg)

## Soporte Técnico y Discusión de Producto

Si tienes algún problema técnico, por favor envíalo en nuestro [foro de soporte](http://forum.seeedstudio.com/). Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes canales de soporte para asegurar que tu experiencia sea lo más fluida posible.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>