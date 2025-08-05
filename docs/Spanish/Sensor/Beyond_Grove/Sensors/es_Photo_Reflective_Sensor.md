---
title: Sensor Foto-Reflectivo
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Photo_Reflective_Sensor/
slug: /es/Photo_Reflective_Sensor
last_update:
  date: 07/16/2025
  author: Guillermo
---
![https://www.seeedstudio.com/depot/images/product/rs081.jpg](http://bz.seeedstudio.com/depot/images/product/rs081.jpg)

Este es un sensor reflectivo que combina un diodo emisor de luz infrarroja GaAlAs con un fototransistor Darlington de alta sensibilidad en un paquete miniatura.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Photo-Reflective-Sensor-p-543.html)

## Características

---

* Compacto  
* Alto rendimiento  
* Alta salida  
* Fácil de montar en PCB  
* Ampliamente aplicable  

## Ideas de Aplicación

---

* Sensores de temporización  
* Sensores de borde  
* Unidades de disquete micro  
* Sensores de nivel de líquidos  

## Especificaciones

---

### Valores Máximos (Ta=25℃)

<table>
  <tr>
    <td colspan="2" width="400px">Item</td>
    <td width="200px">Símbolo</td>
    <td width="200px">Valor</td>
    <td width="200px">Unidad</td>
  </tr>
  <tr>
    <td rowspan="4">Entrada</td>
    <td>Potencia de disipación</td>
    <td>PD</td>
    <td>100</td>
    <td>mW</td>
  </tr>
  <tr>
    <td>Voltaje inverso</td>
    <td>VR</td>
    <td>5</td>
    <td>V</td>
  </tr>
  <tr>
    <td>Corriente directa</td>
    <td>IF</td>
    <td>50</td>
    <td>mA</td>
  </tr>
  <tr>
    <td>Corriente de pulso directa *1</td>
    <td>IFP</td>
    <td>1</td>
    <td>A</td>
  </tr>
  <tr>
    <td rowspan="4">Salida</td>
    <td>Potencia del colector</td>
    <td>Pc</td>
    <td>100</td>
    <td>mW</td>
  </tr>
  <tr>
    <td>Corriente del colector</td>
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
    <td colspan="2">Temperatura de operación</td>
    <td>Topr</td>
    <td>-10~+65</td>
    <td>℃</td>
  </tr>
  <tr>
    <td colspan="2">Temperatura de almacenamiento</td>
    <td>Tstg</td>
    <td>-25~+85</td>
    <td>℃</td>
  </tr>
  <tr>
    <td colspan="2">Temperatura de soldadura *2</td>
    <td>Tsol</td>
    <td>260</td>
    <td>℃</td>
  </tr>
</table>

### Características Electro-ópticas (Ta=25℃)

<table>
  <tbody>
    <tr>
      <td colSpan={2} width={300}>Item</td>
      <td width={100}>Símbolo</td>
      <td width={200}>Condiciones</td>
      <td width={100}>Min</td>
      <td width={100}>Typ</td>
      <td width={100}>Max</td>
      <td width={100}>Unidad</td>
    </tr>
    <tr>
      <td rowSpan={4}>Entrada</td>
      <td>Voltaje directo</td>
      <td>VF</td>
      <td>IF=20mA</td>
      <td></td>
      <td>1.2</td>
      <td>1.6</td>
      <td>V</td>
    </tr>
    <tr>
      <td>Corriente inversa</td>
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
      <td>V=0V, f=1kHZ</td>
      <td></td>
      <td>25</td>
      <td></td>
      <td>pF</td>
    </tr>
    <tr>
      <td>Longitud de onda pico</td>
      <td>λP</td>
      <td></td>
      <td></td>
      <td>940</td>
      <td></td>
      <td>nm</td>
    </tr>
    <tr>
      <td rowSpan={3}>Salida</td>
      <td>Corriente oscura del colector</td>
      <td>ICEO</td>
      <td>VCE=20V</td>
      <td></td>
      <td></td>
      <td>0.1</td>
      <td>µA</td>
    </tr>
    <tr>
      <td>Corriente de luz</td>
      <td>IL</td>
      <td>VCE=5V,IF=20mA</td>
      <td>50</td>
      <td></td>
      <td></td>
      <td>µA</td>
    </tr>
    <tr>
      <td>Corriente de fuga</td>
      <td>ICEOD</td>
      <td>VCE=5V,IF=10mA</td>
      <td></td>
      <td></td>
      <td>1</td>
      <td>µA</td>
    </tr>
    <tr>
      <td rowSpan={2}>Velocidad de conmutación</td>
      <td>Tiempo de subida</td>
      <td>tr</td>
      <td colSpan={1} rowSpan={2}>Vcc=5V, Ic=1mA, RL=1kΩ</td>
      <td></td>
      <td>15</td>
      <td></td>
      <td>µsec</td>
    </tr>
    <tr>
      <td>Tiempo de bajada</td>
      <td>tf</td>
      <td></td>
      <td>15</td>
      <td></td>
      <td>µsec</td>
    </tr>
  </tbody>
</table>

## Dimensiones Mecánicas

![](https://files.seeedstudio.com/wiki/Photo_Reflective_Sensor/img/Photo-ref-dimen.JPG)

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
