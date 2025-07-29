---
title: Fuente de alimentación para protoboard 5V/3.3V
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/5V-3.3V_Breadboard_Power_Supply_v1.1/
slug: /es/5V-3.3V_Breadboard_Power_Supply_v1.1
last_update:
  date: 07/03/2025
  author: Guillermo
---


![](https://files.seeedstudio.com/wiki/5V-3.3V_Breadboard_Power_Supply_v1.1/img/Supply.jpg)

La fuente de alimentación para protoboard 5V/3.3V fue diseñada por SeeedStudio. Puede tomar directamente la energía desde una fuente de alimentación de pared (DC) y entregar un voltaje regulado seleccionable de 5 V o 3.3 V. En comparación con otros diseños de fuentes para protoboard, esta incluye un puerto mini-USB como el Seeeduino. Puedes alternar entre fuentes de alimentación mediante un interruptor. Esta fuente cuenta con un puerto mini-USB y un conector jack. Es compatible con protoboards de 5.3 cm de ancho como la [Breadboard transparente - 8.2 × 5.3 cm](https://www.seeedstudio.com/depot/bread-board-clear-82-x-53cm-p-262.html?cPath=175_176) y también se puede usar con protoboards de 5.5 cm de ancho como la [Breadboard básica - 16.5×5.5 cm](https://www.seeedstudio.com/depot/basic-bread-board-16555-cm-p-4.html?cPath=175_176), aunque queda un poco ajustada.

Con esta placa, puedes alimentar ambas líneas de energía de la protoboard, y cada lado cuenta con su propio interruptor de encendido/apagado.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/5V-3.3V-Breadboard-Power-Supply-p-566.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características  

* Voltaje regulado de 5 V / 3.3 V  
* Salida doble (para ambas líneas de la protoboard)  
* Selección de voltaje independiente por lado  
* Entrada dual (mini-USB o jack de alimentación)  
* Especialmente diseñada para uso con protoboards

## Especificaciones  

<table>
  <tbody>
    <tr>
      <th>Especificación</th>
      <th>Condiciones</th>
      <th>Min.</th>
      <th>Tip.</th>
      <th>Máx.</th>
      <th>Unidad</th>
    </tr>
    <tr>
      <td width="200">Voltaje de entrada</td>
      <td width="400"></td>
      <td width="100">5.0</td>
      <td width="100">6.5</td>
      <td width="100">12.0</td>
      <td width="100">V</td>
    </tr>
    <tr>
      <td rowspan="2">Voltaje de salida</td>
      <td>Canal 3.3V</td>
      <td>3.235</td>
      <td>3.3</td>
      <td>3.365</td>
      <td>V</td>
    </tr>
    <tr>
      <td>Canal 5V: 10mA≤IOUT≤600mA, 6.5V≤VIN ≤12V</td>
      <td>4.9000</td>
      <td>5.0</td>
      <td>5.100</td>
      <td>V</td>
    </tr>
    <tr>
      <td>Corriente de salida</td>
      <td></td>
      <td></td>
      <td></td>
      <td>800</td>
      <td>mA</td>
    </tr>
  </tbody>
</table>

## Usage  

## Uso  

### Instalación del Hardware

1. Alinea la polaridad del conector con la protoboard. (Normalmente Rojo para +, Azul para -)  
2. Conecta completamente la placa a la protoboard.

Ahora puedes desactivar la energía con los dos jumpers o usar los interruptores verticales para seleccionar el voltaje. El interruptor horizontal se usa para elegir entre entrada por conector jack o mini-USB.

![](https://files.seeedstudio.com/wiki/5V-3.3V_Breadboard_Power_Supply_v1.1/img/Breadboard_power.jpg)

## Soporte

Si tienes preguntas o sugerencias de mejora para el diseño, puedes visitar nuestro [foro](https://www.seeedstudio.com/forum) o compartir en [Wish](http://wish.seeedstudio.com).

## Historial de Versiones  

<table>
  <tbody>
    <tr>
      <th>Revisión</th>
      <th>Descripción</th>
      <th>Lanzamiento</th>
    </tr>
    <tr>
      <td width="300">v1.0b</td>
      <td width="500">Versión pública inicial</td>
      <td width="200">16 de nov. 2009</td>
    </tr>
    <tr>
      <td width="300">v1.1</td>
      <td width="500">Conector JST reemplazado por conector DC Jack</td>
      <td width="200">20 de sept. 2011</td>
    </tr>
  </tbody>
</table>


## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bazzar_Files/106100000/Res/5V-3.3V_Breadboard_Power_Supply_v1_1.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Licencia  

Esta documentación está licenciada bajo Creative Commons [Atribución-CompartirIgual 3.0](http://creativecommons.org/licenses/by-sa/3.0/).  
El código fuente y bibliotecas están licenciados bajo [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), consulta los archivos fuente para más detalles.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos diversos canales de comunicación para adaptarnos a tus necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
