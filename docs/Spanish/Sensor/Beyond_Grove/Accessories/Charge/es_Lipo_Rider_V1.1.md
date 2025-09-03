---
title: Lipo Rider V1.1
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/DC_framework_solenoid_HCNE1-0630/
slug: /es/Lipo_Rider_V1.1
last_update:
  date: 02/03/2025
  author: Guillermo
---
<!-- ---
name:  Lipo Rider V1.1
category: Discontinued
bzurl:
oldwikiname: Lipo_Rider_V1.1
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Lipo_Rider_V1-1
sku:
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Liporider-setup.jpg)

¡Alimenta tu kit electrónico favorito con energía verde! La placa **Lipo Rider** te permite aprovechar la energía solar para alimentar tu dispositivo favorito de 5V. Es la solución ecológica ideal para tus sensores en exteriores. Solo conéctala a tu placa de sensores y podrá funcionar con energía solar ¡para siempre!

El **Lipo Rider** es muy económico y fácil de usar. No requiere programación: solo conéctalo y funcionará. El chip de carga interno maneja todo el flujo de energía entre los componentes.

En caso de que la energía solar no sea suficiente, el puerto **microUSB** permite cargar tu batería de litio mediante USB. También se puede usar para programar tu kit sin desconectar la placa **Lipo Rider**.

Puedes comprar el **Lipo Rider** como placa individual o en un kit (Lipo Rider + batería de litio + panel solar) desde [Seeed Studio](https://www.seeedstudio.com/depot/).

Modelo: POW115D2P

## Características ##

- Conector JST 2.0
- Fuente de alimentación USB estable de 5V independientemente de la fuente
- Algoritmos de carga incorporados en el chip
- Carga de batería de polímero de litio por energía solar o USB
- Voltaje estable mediante batería o USB
- 2 puertos USB permiten cargar la batería y programar al mismo tiempo
- LED indicadores de carga completa o en proceso
- Diseño simple, extremadamente asequible
- Escalable para múltiples baterías o paneles solares mediante modificaciones simples

## Ideas de Aplicación ##

- Energía verde y respaldo para redes de sensores distribuidos al aire libre
- Cargador para baterías de litio

## Precauciones ##

- Componentes electrónicos expuestos
- La placa puede calentarse si suministra cargas grandes
- Posible cortocircuito o descarga eléctrica, especialmente si se moja
- No se recomienda para cargar teléfonos móviles, ya que el módulo puede sobrecalentarse

## Esquemático ##

### Diagrama en Bloques ###

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-rider-blockdiagram.JPG)

## Especificaciones ##

- Componentes electrónicos expuestos
- La placa puede calentarse si suministra cargas grandes
- Posible cortocircuito o descarga eléctrica, especialmente si se moja
- No se recomienda para cargar teléfonos móviles, ya que el módulo puede sobrecalentarse

### Especificaciones Clave ###

| Ítem | Mín | Normal | Máx |
|------|-----|--------|-----|
| Entrada Solar | 4.8V | 5.0V | 6.5V |
| Corriente de carga (RIset=3.9kΩ) | 400mA | 500mA | 600mA |
| Corriente de salida (Isupply) | 0mA | 350mA | — |
| Vbatt (Rx=0Ω) | 4.2V | — | — |
| Fuente USB 5V → Destino USB 5V | — | — | — |

## Definición de Pines e Indicadores LED ##

| Estado del pin CH (LED rojo) | Estado del pin OK (LED verde) | Descripción |
|-----------------------------|-------------------------------|-------------|
| Bajo (encendido) | Alto (apagado) | Cargando |
| Alto (apagado) | Bajo (último encendido) | Carga completa |
| Pulso (parpadeando) | Pulso (encendido) | No hay batería conectada |
| Alto (apagado) | Alto (apagado) | Voltaje de entrada menor al de puerta o batería |

## Uso ##

La placa **Lipo Rider** funciona como módulo de alimentación estable de 5 VDC para proyectos con microcontroladores (MCU). Ejemplo: señal de salida de 300 mA.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/MAP001.jpg)

### Configuración de Hardware ###

#### Componentes de Hardware ####

**Panel Solar**

Se conecta mediante el conector JST inferior. El voltaje debe estar entre 4.8 V y 6.5 V. Si el LED de carga no se enciende:

1. La batería está llena
2. El voltaje del panel está fuera del rango (por poca luz solar)

En ese caso, reposiciona el panel para recibir más luz.

Ejemplo: 1W = Iout × 5V

Iout = 200mA

Por lo tanto, cargar durante 1 hora dará 200mAh, sin considerar pérdidas. Para una batería de 1000mAh, cargar de vacío a lleno tomará aproximadamente 5 horas en condiciones ideales.

**Batería de Litio**

El nombre Lipo Rider sugiere que se use una batería de polímero de litio. Sin embargo, la química de una batería de polímero de litio y una de ion-litio es suficientemente similar para que ambos tipos de batería puedan usarse de manera intercambiable.
En caso de usar más de una batería, conéctelas en paralelo en lugar de en serie, ya que el circuito de carga suministra 4.2V.

**Interruptor deslizante**

El interruptor deslizante controla la fuente de alimentación USB de 5V.
ON – Carga habilitada desde la batería de litio y/o solar
OFF – Carga deshabilitada desde la batería de litio y/o solar

**Puerto USB fuente**

El puerto USB fuente es un puerto mini USB que funciona como un puerto USB normal. Este puerto puede usarse para cargar la batería de litio o conectarse al dispositivo destino mediante el puerto USB destino.

**Puerto USB destino**

El puerto USB destino es donde se conecta el dispositivo destino. La alimentación del dispositivo destino será suministrada por la placa Lipo Rider. La fuente puede ser el panel solar, la batería de litio o el puerto USB fuente.

#### Direcciones del flujo de energía bajo diferentes escenarios de conexión ####

Debido al gran número de combinaciones, solo se incluyen los escenarios principales:

Modo autónomo

La energía solar carga la batería de litio

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-standalone.JPG)

Modo USB

La energía solar carga la batería de litio. La batería de litio alimenta el dispositivo USB destino

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-usb.JPG)

Modo Programa

El USB fuente carga la batería de litio y alimenta el dispositivo USB destino. Se habilita la conexión de datos entre los dispositivos USB fuente y destino

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-program.JPG)

### Ejemplo ###

#### Fuente de alimentación para dispositivo sensor exterior ####

Una aplicación importante de la placa Lipo Rider es como una fuente de alimentación económica para sensores exteriores. El dispositivo sensor exterior será alimentado por la batería de litio complementada por el panel solar. Nota que no se recomienda hacer funcionar el sensor exterior SOLO con energía solar, ya que esta puede variar durante el día y provocar que el sensor se reinicie o apague inesperadamente. En este caso, el dispositivo funciona en “Modo USB”.

Si se requiere reprogramar el firmware del dispositivo sensor exterior, simplemente conecta el puerto mini USB a tu PC, lo que pondrá el dispositivo en “Modo Programa” como se explicó arriba.

Se pueden usar baterías y/o paneles solares más grandes o múltiples, pero solo con modificaciones del usuario final.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-exam1.JPG)

Lipo Rider alimentando un Arduino Duemilanove (no es estrictamente un sensor exterior en este caso porque no he conectado ningún sensor y no está en exteriores, pero se entiende la idea)

## Soporte ##

Si tienes preguntas o ideas de diseño mejores, puedes visitar nuestro [foro](https://www.seeedstudio.com/forum) o **wish** para discutir.

## Historial de Versiones ##

 |Revisión| Descripción|Fecha|Editor|
 |---|---|---|---|
|Lipo Rider V0.9b | Lanzamiento público inicial|2 Nov, 2010| Lafier|
|Lipo Rider V1.0 | Revisión del lanzamiento|11 Ene, 2011|Silas Wan|
|Lipo Rider V1.1 | Cambio del conector Jst de 2.54 a 2.0|2 Nov, 2011|Mike|

## Visor de Esquemáticos en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/res/Lipo_rider_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- [Archivo: Lipo rider v1.1.zip](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/res/Lipo_rider_v1.1.zip)

## Cómo comprar ##

Haz clic [aquí](https://www.seeedstudio.com/depot/lipo-rider-p-710.html?cPath=104_107) para comprar [Lipo Rider](https://seeeddoc.github.io/Lipo_Rider/) u otros **productos** que te gusten.

## Véase también ##

[Lipo Rider Pro](https://seeeddoc.github.io/Lipo_Rider_Pro/)

## Licencia ##

Esta documentación está licenciada bajo Creative Commons [Atribución-CompartirIgual Licencia 3.0](http://creativecommons.org/licenses/by-sa/3.0/). El código fuente y las librerías están licenciados bajo [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), consulta los archivos de código fuente para más detalles.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
