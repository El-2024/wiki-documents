---
description: Detector de Batería con Batería de Polímero de Litio 1050 mAh 3.7 V
title: Detector de Batería con Batería de Polímero de Litio 1050 mAh 3.7 V
keywords:
- Accessories charge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V
last_update:
  date: 06/11/2025
  author: Guillermo
---


![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/img/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V.jpg)

Este producto contiene dos elementos: una batería de polímero de litio de 1050 mAh y un detector de carga de batería para medir la energía restante.

La batería Li-ion es muy delgada, ligera y rentable. Tiene un voltaje nominal de salida de 3.7 V. Puedes cargarla con un cargador especializado cuya corriente máxima de entrada sea 1050 mA y voltaje máximo de entrada 4.2 V. Esta batería incluye un conector JST 2.0 preinstalado, lo que facilita su conexión. Además, cuenta con protección contra sobrecorriente para evitar cortocircuitos.  
**Sin embargo, sigue siendo necesario usarla con precaución. Nunca la cargues o uses sin supervisión.**

El detector de batería puede detectar voltajes de entrada entre 3 y 4.2 V. Incluye tres conectores JST (1.0, 2.0 y otro 2.0) y dos pads para soldar cables de baterías con diferentes conectores. Al conectar una batería, los cuatro LEDs integrados indican el nivel de carga (0–25 %, 26–50 %, 51–75 %, 76–100 %). Un LED adicional se encenderá si conectas la batería con la polaridad invertida.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Battery-Detector-with-Polymer-Lithium-Ion-1050mAh-3.7V-p-2648.html)

:::note
1. Solo puede analizarse una batería a la vez.  
2. Si el voltaje de entrada supera los 9 V, se dañará el detector.  
3. Nunca uses la batería mientras se está cargando.  
:::

## Seguimiento de Versiones

| Revisión del producto                                               | Fecha de lanzamiento | Estado de soporte | Notas |
|----------------------------------------------------------------------|----------------------|-------------------|-------|
| Detector con batería de 1050 mAh 3.8 V (versión actual)              | Mayo 2016            | Soportado         | —     |

Características
--------

**Batería:**
- Conector JST 2.0 preinstalado  
- Protección contra cortocircuitos  
- Económica

**Detector de batería:**
- Indicador visual del nivel de carga  
- Varios conectores JST para distintas baterías

Especificaciones
--------------

### Batería

| Parámetro                    | Valor                                      |
|-----------------------------|---------------------------------------------|
| Capacidad                   | 1050 mAh                                    |
| Voltaje nominal (DC)        | 3.7 V                                       |
| Conector                    | JST 2.0                                     |
| Corriente máxima de carga   | 1050 mA                                     |
| Protección                  | Contra cortocircuitos                       |
| Peso                        | 19 g (paquete completo: 33.5 g)             |
| Dimensiones                 | 48 mm × 4.9 mm × 45 mm                      |

### Detector de batería

| Parámetro           | Valor                                                                                     |
|---------------------|-------------------------------------------------------------------------------------------|
| Voltaje de entrada  | 3 – 4.2 V                                                                                 |
| Corriente operativa | 15 mA                                                                                     |
| Indicador           | Cuatro LEDs que muestran el nivel de carga                                               |
| Conectores          | Tres conectores JST + dos pads de soldadura para baterías                                |
| Dimensiones         | 30 mm × 25 mm                                                                             |
| CN1185              | [Datasheet](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/res/CN1185_Datasheet.pdf) |
| Peso                | 3.2 g                                                                                     |
| Notas               | No conectar más de una batería. No exceder 9 V en la entrada.                             |

Plataformas Compatibles (solo batería)
------------------------

<table>
<tr>
<td>
Plataforma
</td>
<td>
Seeeduino/Arduino
</td>
<td>
Rasberry Pi
</td>
<td>
Beaglebone (con Grove Cape v2)
</td>
<td>
LinkIt ONE
</td>
</tr>
<tr>
<td>
Estado de soporte
</td>
<td>
Soportado
</td>
<td>
No soportado
</td>
<td>
Soportado
</td>
<td>
No soportado
</td>
</tr>
<tr>
<td>
Notas
</td>
<td colspan="5">
Si no se menciona número de versión para una plataforma, significa que el producto es compatible con todas las versiones.
</td>
</tr>
</table>

Vista General del Hardware
-----------------

Esta sección muestra los componentes del detector de batería.

![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/img/Battery_kit-3.7V_520mAh_Battery_power_detector_components_description_1200_s.jpg)

- **CN1185**: circuito de monitoreo de voltaje  
- **Pads de soldadura**: para conectar cables de baterías sin conector JST

### Componentes Incluidos

| Nombre del componente      | Cantidad |
|---------------------------|----------|
| Batería de polímero de litio  | 1        |
| Detector de batería           | 1        |

Primeros Pasos
---------------

Conecta la batería al detector como se muestra a continuación. Los LEDs encendidos indicarán el porcentaje de carga.

![](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/img/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V.jpg)

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/res/Battery_kit-3.7V_520mAh_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Archivo esquemático (Eagle)](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/res/Battery_kit-3.7V_520mAh_Schematics.zip)  
- [Datasheet del CN1185](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/res/CN1185_Datasheet.pdf)  
- [Ficha técnica de uso de la batería](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/res/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V_Battery_Datasheet.pdf)  
- [Ficha de seguridad y certificados](https://files.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V/res/Lithium-ion_Battery_3.7v-1050_mAh_Safety_Datasheet_and_Certificates.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Battery_Detector_with_Polymer_Lithium_Ion_1050mAh_3.7V -->

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte el mejor soporte y asegurar una experiencia de usuario excelente. Contamos con múltiples canales de comunicación para adaptarnos a tus necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
