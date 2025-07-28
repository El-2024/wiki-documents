---
description: Lipo Rider V1.3
title: Lipo Rider V1.3
keywords:
- Accessories charge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Lipo_Rider_V1.3
last_update:
  date: 07/11/2025
  author: Guillermo
---

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/LiPo-Rider-v1.3.jpg)

¡Alimenta tu kit electrónico favorito con energía verde! La placa Lipo Rider te permite aprovechar la energía solar para hacer funcionar tu dispositivo favorito de 5V. La placa Lipo Rider es la solución ideal de energía ecológica para el diseño de sensores exteriores. Conecta la placa Lipo Rider a tu placa de sensores y podrá funcionar con energía solar para siempre.

El Lipo Rider es extremadamente accesible y fácil de usar. No requiere programación. Conéctalo y funciona. El circuito integrado interno de carga maneja todo el flujo de energía entre los distintos componentes.

En caso de que la energía solar no sea suficiente, el puerto microUSB te permite cargar tu batería de litio vía USB. También puede usarse para programar tu kit sin desconectar la placa Lipo Rider.

El Lipo Rider puede comprarse como placa independiente o como kit (Lipo Rider + batería de litio + panel solar).

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Lipo-Rider-v1.3-p-2403.html)

Características
---------------

- Conector Jst 2.0
- Suministro estable de 5V USB sin importar la fuente
- Algoritmos de carga/recarga integrados en el chip
- Carga batería de polímero de litio vía energía solar o USB
- Voltaje de suministro estable mediante batería de litio o USB
- 2 puertos USB para programar tu kit mientras cargas la batería de litio
- Indicadores LED para batería llena o estados de carga
- Diseño simple y muy accesible
- Escalable a múltiples baterías de litio y paneles solares grandes/múltiples con modificaciones sencillas de usuario final

Ideas de Aplicación
-------------------

- Energía verde y respaldo para red distribuida de sensores exteriores
- Cargador para baterías de litio

:::caution

1. Componentes electrónicos expuestos con corriente.
2. La placa puede calentarse al suministrar cargas grandes.
3. Riesgo potencial de cortocircuito o descarga eléctrica, especialmente si el dispositivo se moja al estar al aire libre para recolección solar.
:::

Resumen del Hardware
--------------------

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-rider-blockdiagram.JPG)

Especificaciones
----------------

- Tamaño pequeño – Dimensiones = L42 × W34 × D6.8 mm
- Corriente máxima de carga para batería de litio: 900mA
- Corriente máxima de suministro desde batería de litio: 600mA
- Diodos de potencia para prevenir retroalimentación desde el dispositivo USB a la batería Lipo

### Especificaciones Clave

<table border="1">
<tr>
<th>
Ítems
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
U<sub>in</sub> Solar
</td>
<td width="200">
4.8V
</td>
<td width="200">
5.0V
</td>
<td width="200">
6.0V
</td>
</tr>
<tr align="center">
<td>
I<sub>carga</sub> (R<sub>Iset</sub>=2.0kΩ)
</td>
<td>
700mA
</td>
<td>
800mA
</td>
<td>
900mA
</td>
</tr>
<tr align="center">
<td>
I<sub>suministro</sub>
</td>
<td>
0mA
</td>
<td>
</td>
<td>
600mA
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
V<sub>USB fuente</sub>
</td>
<td colspan="3" rowspan="1">
5.0V
</td>
</tr>
<tr align="center">
<td>
V<sub>USB destino</sub>
</td>
<td colspan="3" rowspan="1">
5.0V
</td>
</tr>
</table>

Definición y Calificación de Pines
----------------------------------

### Instrucción de Pines y Estado de LED

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th>Nivel pin CH (Estado LED Rojo)</th>
<th>Nivel pin OK (Estado LED Verde)</th>
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
<td>Señal de pulso (Parpadeo)</td>
<td>Señal de pulso (ENCENDIDO)</td>
<td>La batería no existe</td>
</tr>
<tr class="even">
<td>Nivel alto (APAGADO)</td>
<td>Nivel alto (APAGADO)</td>
<td>Dos situaciones:
<ul>
<li>Voltaje de entrada menor que el voltaje de la puerta</li>
<li>Voltaje de entrada menor que el voltaje de la batería</li>
</ul></td>
</tr>
</tbody>
</table>

#### Componentes de Hardware

**Panel Solar**

El panel solar se conecta a la placa mediante el conector JST inferior. Ten en cuenta que el circuito integrado de carga solar solo acepta un voltaje de entrada dentro del rango de 4.8-6.0V. Si el LED de carga no está encendido, puede deberse a:

1. Batería de litio llena  
2. Voltaje del panel solar fuera de rango (lo más probable es que sea por energía solar insuficiente).

En el segundo caso, reposiciona tu panel solar para que reciba más luz solar si es posible. Ninguna de las condiciones anteriores impedirá que el Lipo Rider proporcione un suministro estable de 5V al USB, a menos que la batería esté descargada.

*Ecuaciones del Panel Solar*

Potencia de salida del panel solar = Corriente de salida × Voltaje de suministro

Ejemplo: 1W = Iout × 5V

Iout = 200mA

Por lo tanto, cargar durante 1 hora proporcionará 200mAh, sin considerar pérdidas. Para una batería de 1000mAh, cargar de vacío a lleno tomará aproximadamente 5 horas en condiciones ideales.

**Batería de Litio**

El nombre Lipo Rider sugiere que se use una batería de polímero de litio. Sin embargo, la química de una batería de polímero de litio y una batería de ion-litio es lo suficientemente similar para que ambos tipos puedan usarse indistintamente. En caso de usar más de una batería, conéctalas en paralelo en lugar de en serie, ya que el circuito de carga suministra 4.2V.

**Interruptor deslizante**

El interruptor deslizante controla la fuente de alimentación USB de 5V.  
ON – Carga habilitada desde batería de litio y/o solar  
OFF – Carga deshabilitada desde batería de litio y/o solar

**Puerto USB fuente**

El puerto USB fuente es un puerto **micro-USB** que funciona como un puerto USB normal. Puede usarse para cargar la batería de litio o conectarse al dispositivo destino mediante el puerto USB destino.

**Puerto USB destino**

El puerto USB destino es donde se conecta el dispositivo destino. La alimentación será suministrada por la placa Lipo Rider, proveniente del panel solar, la batería de litio o el puerto USB fuente.

#### Direcciones del flujo de energía bajo diferentes escenarios de conexión

Debido al gran número de combinaciones, solo se incluyen los escenarios principales:

**Modo Autónomo**

La energía solar carga la batería de litio.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-Rider-v1.2-standalone.JPG)

**Modo USB**

La energía solar carga la batería de litio. La batería de litio alimenta el dispositivo USB destino.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-Rider-v1.2-usb.JPG)

**Modo Programa**

El USB fuente carga la batería de litio y alimenta el dispositivo USB destino. Se habilita la conexión de datos entre los dispositivos USB fuente y destino.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-Rider-v1.2-program.JPG)

### Ejemplo

#### Fuente de alimentación para dispositivo sensor exterior

Una aplicación importante de la placa Lipo Rider es como fuente de alimentación económica para sensores exteriores. El dispositivo sensor exterior será alimentado por la batería de litio complementada por el panel solar. No se recomienda que el sensor exterior funcione SOLO con energía solar, ya que esta puede variar durante el día y provocar que el sensor se reinicie o se apague inesperadamente. En este caso, el dispositivo funciona en “Modo USB”.

Si se requiere reprogramar el firmware del dispositivo sensor exterior, simplemente conecta el puerto micro USB a tu PC, lo que pondrá el dispositivo en “Modo Programa” como se explicó arriba.

Se pueden usar baterías y/o paneles solares más grandes o múltiples, pero solo con modificaciones del usuario final.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/LiPo-Rider-v1.3_example.jpg)

**Lipo Rider alimentando un Arduino Duemilanove (no es estrictamente un sensor exterior en este caso ya que no conecté ningún sensor y no está en exteriores, pero se entiende la idea)**

## Visor del esquematico en línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/res/Li-Po_Rider_v1.3_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Esquemático y diseño de Li-Po Rider v1.3 en formato Eagle](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/res/Li-Po_Rider_v1.3_sch_pcb.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Lipo_Rider_V1.3 -->

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
