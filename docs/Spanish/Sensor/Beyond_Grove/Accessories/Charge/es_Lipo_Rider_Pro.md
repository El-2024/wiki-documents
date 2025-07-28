---
description: Lipo Rider Pro
title: Lipo Rider Pro
keywords:
- Accessories charge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Lipo_Rider_Pro
last_update:
  date: 1/13/20256
  author: Guillermo
---

![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/LiPo_Rider_Pro.jpg)

¡Alimenta tu kit electrónico favorito con energía verde! El **LiPo Rider Pro** es una versión mejorada del LiPo Rider original. Soporta una carga de salida mayor (pico de 1A) que su predecesor. La placa **LiPo Rider Pro** te permite aprovechar la energía solar para alimentar tu dispositivo de 5V favorito. Es la solución ideal de energía ecológica para tus diseños de sensores al aire libre. Conecta la placa LiPo Rider Pro a tu sensor y podrá funcionar con energía solar ¡para siempre! También puede utilizarse para cargar teléfonos móviles.

El **LiPo Rider Pro** es extremadamente asequible y fácil de usar. No requiere programación: simplemente conéctalo y funciona. El circuito integrado de carga interno maneja todo el flujo de energía entre los distintos componentes.

En caso de que la energía solar no sea suficiente, el puerto mini USB te permite cargar la batería de litio mediante USB. También puede usarse para programar tu kit sin desconectar la placa LiPo Rider Pro.

El **LiPo Rider Pro** puede adquirirse como placa individual o como un kit (LiPo Rider Pro + batería de litio + panel solar).

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/LiPo-Rider-Pro-p-992.html)

## Características

--------

- Salida de carga máxima: **1A**
- Conectores de batería y panel solar: **JST 2.0**
- Fuente de alimentación USB estable de **5V**, independientemente de la fuente
- Algoritmos de carga incorporados en el chip
- Carga baterías de polímero de litio mediante energía solar o USB
- Voltaje de salida estable desde batería de litio o USB
- **2 puertos USB** permiten cargar la batería de litio mientras se programa tu kit
- **LEDs de estado** para indicar batería llena o en carga
- Escalable a múltiples baterías de litio y paneles solares grandes/múltiples mediante modificaciones simples por parte del usuario
- **4 LEDs verdes** indican la cantidad de energía restante en la batería de litio

## Ideas de Aplicación

-----------------

- Energía verde y fuente de respaldo para redes de sensores distribuidos al aire libre
- Cargador para baterías de litio
- Cargador para teléfonos móviles

:::caution

1. El LiPo Rider Pro **tiene conectores diferentes** al LiPo Rider v1.0: el primero usa JST 2.0 y el segundo JST 2.54.

2. Contiene componentes electrónicos expuestos.

3. La placa puede calentarse al suministrar cargas elevadas.

4. Riesgo potencial de cortocircuito o descarga eléctrica, especialmente si el dispositivo se moja al colocarse en exteriores para recolección solar.

:::

## Dimensiones

----------

Las dimensiones del **LiPo Rider Pro** son similares a las de la [Batería de Polímero de Litio de 6A](https://www.seeedstudio.com/depot/lithium-ion-polymer-battery-pack-6a-p-602.html?cPath=178_183).

![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/Liporiderprod.jpg)

Especificaciones
--------------

<table border="1">
<tr>
<th>
Items
</th>
<th>
Mínimo
</th>
<th>
Normal
</th>
<th>
Máximo
</th>
</tr>
<tr align="center">
<td width="400">
V<sub>in</sub> Solar
</td>
<td width="200">
4.8V
</td>
<td width="200">
5.0V
</td>
<td width="200">
6.5V(10s)
</td>
</tr>
<tr align="center">
<td>
I<sub>carga</sub> (R<sub>Iset</sub>=3.9kΩ)
</td>
<td>
400mA
</td>
<td>
500mA
</td>
<td>
600mA
</td>
</tr>
<tr align="center">
<td>
I<sub>load</sub>
</td>
<td>
0mA
</td>
<td>
</td>
<td>
1000mA
</td>
</tr>
<tr align="center">
<td>
V<sub>batt</sub>(R<sub>x</sub>=0Ω)
</td>
<td colspan="3" rowspan="1">
4.2V
</td>
</tr>
<tr align="center">
<td>
V<sub>fuente USB</sub>
</td>
<td colspan="3" rowspan="1">
5.0V
</td>
</tr>
<tr align="center">
<td>
V<sub>salida USB</sub>
</td>
<td colspan="3" rowspan="1">
5.0V
</td>
</tr>
</table>

Definición de Pines y Estados de LEDs
-------------------------

**Instrucciones de Pines y Estados de LEDs**

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th>Nivel del pin CH (LED Rojo)</th>
<th>Nivel del pin OK (LED Verde)</th>
<th>Estado</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Nivel bajo (ENCENDIDO)</td>
<td>Nivel alto (APAGADO)</td>
<td>Cargando</td>
</tr>
<tr class="even">
<td>Nivel alto (APAGADO)</td>
<td>Nivel bajo (último ENCENDIDO)</td>
<td>Carga completa</td>
</tr>
<tr class="odd">
<td>Señal de pulso (parpadeo))</td>
<td>Señal de pulso (ENCENDIDO)</td>
<td>La batería no está conectada</td>
</tr>
<tr class="even">
<td>Nivel alto (APAGADO)</td>
<td>Nivel alto (APAGADO)</td>
<td>Dos situaciones posibles:
<ul>
<li>Voltaje de entrada menor al de umbral</li>
<li>Voltaje de entrada menor al de la batería</li>
</ul></td>
</tr>
</tbody>
</table>

## Indicador LED de Batería

El LiPo Rider Pro cuenta con cuatro indicadores LED de batería similares a los de un teléfono móvil. Puedes visualizar el nivel de carga simplemente presionando el botón K2 como se muestra a continuación:
![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/Lipo3.jpg)

**Parámetros del indicador LED de batería**

| Número de LEDs encendidos | Porcentaje de batería |
|---------------------------|------------------------|
| 4                         | 90~100 %               |
| 3                         | 60~90 %                |
| 2                         | 30~60 %                |
| 1                         | 10~30 %                |
| 0                         | 0~10 %                 |

Uso
-----

**Ejemplo**

**Fuente de alimentación para sensores exteriores**

Una aplicación importante del LiPo Rider Pro es como fuente de alimentación económica para sensores exteriores. El sensor es alimentado por una batería de litio, complementada con un panel solar. **No se recomienda alimentar únicamente con energía solar**, ya que las variaciones de luz durante el día pueden causar reinicios o apagones del sistema.

En este caso, el dispositivo opera en "Modo USB".  
Si se requiere reprogramar el firmware del sensor, simplemente conecta el puerto mini USB a tu PC para cambiar al "Modo de Programación", como se explicó previamente.

Es posible usar baterías y/o paneles solares más grandes o múltiples, pero esto requiere modificaciones por parte del usuario.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/Lipo-Rider-pro.JPG)

**Cargar batería de polímero de litio mediante energía solar**

![](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/img/LiPo_Rider_Pro1.jpg)

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/Lipo_Rider_Pro_v0.9b.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [Datasheet del CN3065 (PDF)](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/DSE-CN3065.pdf)
- [Esquemático y diseño en formato Eagle](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/Lipo_Rider_Pro_v0.9b.rar)
- [Esquemático en formato PDF](https://files.seeedstudio.com/wiki/Lipo_Rider_Pro/res/LiPo_Rider_Pro_v0.9b.pdf)
- [Usar LiPo Rider Pro para cargar iPod o iPhone](https://forum.seeedstudio.com/viewtopic.php?f=4&t=3575)
- [Batería de Polímero de Litio – 6A](https://www.seeedstudio.com/Lithium-Ion-polymer-Battery-pack-6A-p-602.html)

## Proyectos

**PlantSigfox Monitoring** Monitorea humedad del aire/suelo, temperatura, brillo y rayos RGB. También envía localización y pronóstico del clima.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/plantsigfox-ei2i4/plantsigfox-monitoring-3d66be/embed' width='350'></iframe>

**Sistema de Detección de Pasos con Arduino**
Detecta el paso de vehículos y personas en la entrada de una huerta, generando una alerta sonora dentro de la casa.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/juan-salvador-aleixandre-talens/step-detection-system-by-a-way-with-arduino-bc6f3a/embed' width='350'></iframe>

## Soporte Técnico y Discusión

Gracias por elegir nuestros productos. Estamos aquí para brindarte asistencia y asegurar que tu experiencia sea lo más fluida posible. Puedes comunicarte con nosotros por varios canales según tu preferencia.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
