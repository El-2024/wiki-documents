---
title: Kit de Batería - 3.7 V 520 mAh
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Battery_kit_3.7V_520_mAh/
slug: /es/Battery_kit_3.7V_520_mAh
last_update:
  date: 07/11/2025
  author: Guillermo
---

![](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/img/Battery_kit-3.7V_520mAh_Product_View_960.jpg)

Este kit contiene dos elementos: una batería de polímero de litio de 520 mAh y un detector de energía de batería que permite medir la carga restante.

La batería Li-ion es muy delgada, ligera y económica. Su voltaje de salida nominal es de 3.7 V. Puede cargarse con un cargador especializado cuya corriente máxima de entrada sea de 520 mA y un voltaje máximo de 4.2 V. Viene con un conector JST 1.0 preinstalado, lo cual facilita su conexión. Además, cuenta con protección contra sobrecorriente para evitar cortocircuitos.  
**Sin embargo, se debe tener precaución: no abuses del uso de la batería y nunca la cargues o utilices sin supervisión.**

El detector de batería puede detectar voltajes de entrada en el rango de 3 a 4.2 V. Incluye tres conectores JST (1.0 y dos 2.0) y dos pads de soldadura que se adaptan a baterías con conectores diferentes. Al conectar una batería, los cuatro LEDs a bordo indicarán el nivel de energía restante en porcentaje (0–25 %, 26–50 %, 51–75 %, 76–100 %). Otro LED se encenderá si conectas la batería en la polaridad incorrecta.

:::note
- Solo se puede probar una batería a la vez.
- No apliques voltajes de entrada mayores a 9 V, o el detector se dañará.
- Nunca uses la batería mientras se está cargando.
:::

### Seguimiento de Versiones

| Versión del producto                | Fecha de lanzamiento | Estado de soporte | Notas |
|------------------------------------|----------------------|-------------------|-------|
| Kit de batería 3.7 V 520 mAh (v1)  | Mayo 2016            | Soportado         | —     |

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png) ](https://www.seeedstudio.com/depot/Battery-kit37V-520mAh-p-2646.html)

## Características

**Batería:**
- Conector JST 1.0 preinstalado
- Protección contra cortocircuitos en la salida
- Económica

**Detector de batería:**
- Indicador visual del nivel de carga
- Soporte para múltiples tipos de conectores JST

## Especificaciones

### Batería

| Parámetro                  | Valor                                       |
|----------------------------|---------------------------------------------|
| Capacidad                  | 520 mAh                                     |
| Voltaje nominal (DC)       | 3.7 V                                       |
| Conector                   | JST 1.0                                     |
| Corriente máxima de carga  | 520 mA                                      |
| Protección                 | Contra cortocircuitos en la salida          |
| Peso                       | 11 g                                        |
| Dimensiones                | 50 mm × 2.5 mm × 41 mm                       |

### Detector de batería

| Parámetro           | Valor                                                                                     |
|---------------------|-------------------------------------------------------------------------------------------|
| Voltaje de entrada  | 3 – 4.2 V                                                                                 |
| Corriente operativa | 15 mA                                                                                     |
| Indicador           | Cuatro LEDs para mostrar el nivel de carga                                               |
| Conectores          | Tres conectores JST (1.0 y dos 2.0) y dos pads de soldadura                               |
| Dimensiones         | 30 mm × 25 mm                                                                             |
| CN1185              | [Datasheet](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/CN1185_Datasheet.pdf) |
| Peso                | 3.2 g                                                                                     |
| Notas               | Solo conectar una batería a la vez. No exceder los 9 V de entrada.                        |

###  Platform supported(only for battery) ###

## Plataformas Compatibles (solo para la batería)

| Plataforma         | Seeeduino/Arduino | Raspberry Pi | Beaglebone (con Grove Base Cape v2) | LinkIt ONE |
|-------------------|-------------------|--------------|--------------------------------------|------------|
| Estado de soporte | Soportado         | No soportado | Soportado                            | No soportado |

Si no se menciona número de versión para una plataforma, significa que el producto es compatible con todas las versiones de dicha plataforma.

## Vista General del Hardware

Esta sección muestra los componentes principales del detector de batería.

![](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/img/Battery_kit-3.7V_520mAh_Battery_power_detector_components_description_1200_s.jpg)

- **CN1185**: circuito de monitoreo de voltaje.  
- **Pads de soldadura**: para conectar baterías sin conector JST.

### Componentes Incluidos

| Componente              | Cantidad |
|-------------------------|----------|
| Batería de polímero de litio | 1 pieza  |
| Detector de batería         | 1 pieza  |

## Primeros Pasos

Conecta la batería al detector como se muestra en la siguiente imagen. Los LEDs encendidos indican la cantidad de carga restante.

![](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/img/Battery_kit-3.7V_520mAh_Battery_power_demo_1200_s.jpg)

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Battery_kit-3.7V_520mAh_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [Archivo esquemático (Eagle)](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Battery_kit-3.7V_520mAh_Schematics.zip)
- [PDF: PCB Detector v1.0](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Battery%20Detector%20v1.0pcb.pdf)
- [PDF: Esquema Detector v1.0](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Battery%20Detector%20v1.0.pdf)
- [Datasheet CN1185](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/CN1185_Datasheet.pdf)
- [Datasheet de batería](https://files.seeedstudio.com/wiki/Battery-kit-3.7V_520-mAh/res/Lithium-ion_Battery_3.7V-520mAH_Datasheet.pdf)

## Soporte Técnico y Discusión

Si tienes alguna duda técnica, publica tu problema en nuestro [foro oficial](http://forum.seeedstudio.com/).
¡Gracias por elegir nuestros productos! Estamos comprometidos a brindarte soporte mediante diversos canales de comunicación, para garantizar una experiencia óptima.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>