---
title: Adaptador USB a UART 3V3
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Scream_out_loud-110dBA_fixed_tone_Siren/
slug: /es/USB_To_Uart_3V3
last_update:
  date: 07/11/2025
  author: Guillermo
---

<!-- ---
name: USB To Uart 3V3
category: Discontinued
bzurl:
oldwikiname: USB_To_Uart_3V3
prodimagename:
bzprodimageurl: https://www.research.net/r/USB_To_Uart_3V3
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/Photo_USB_To_Uart_5V_3V3.JPG)

El USB to Uart 3V3 es un adaptador USB a serie, basado en el chip **CH340**, un convertidor USB versátil que permite comunicación serial, infrarroja IrDA y conexión con impresoras. Este módulo puede usarse para cargar código o comunicarse con microcontroladores.

## Características

* Interfaz USB de alta velocidad, conforme a la especificación USB 2.0

* Soporta baudios desde 2400bps hasta 115200bps

* Interfaz serie full dúplex por hardware, con búfer de transmisión/recepción

* Indicadores LED integrados (TX y RX)

## Especificaciones

* **Voltaje de operación**: 5V DC  

* **Corriente de operación**: < 10mA  

* **Sistemas Operativos compatibles**: Windows, Linux, Mac  

## Función de Interfaz

![](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/USB_To_Uart_3V3_Interface.jpg)

* ① Indicador de encendido  
* ② Conector Micro USB  

* ③ Indicador de transmisión (TX)  

* ④ Indicador de recepción (RX)  
* ⑤ Puntos de ruptura UART  

## Uso

### Instalación del controlador

Este módulo requiere instalación de driver para funcionar como interfaz USB a puerto serial.

#### Windows/Linux

Totalmente compatible con aplicaciones de comunicación serial en sistemas Windows.

1. Conecta el módulo al puerto USB del PC.  

2. Espera unos segundos y verifica que aparece un puerto en el **Administrador de dispositivos**.  

3. Si no lo detecta, descarga el driver desde [aquí](http://wch-ic.com/download/list.asp?id=127)

![](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/CH340_Driver.jpg)

##### Mac OS

Descargar el controlador:  [http://www.wch.cn/download/CH341SER_MAC_ZIP.html](http://www.wch.cn/download/CH341SER_MAC_ZIP.html)

**En macOS Yosemite:**

1. Instala el driver CH340  

2. Abre la terminal (`/Applications/Utilities/`)  

3. Ejecuta: sudo nvram boot-args="debug=0x146 kext-dev-mode=1"

4. Escribe tu contraseña

5. Reinicia tu equipo

Si deseas restaurar la configuración de tu Mac, puedes salir del modo desarrollador redefiniendo los argumentos de arranque (`boot-args`) a su valor anterior, o simplemente borrarlos con el siguiente comando: `sudo nvram -d boot-args`

#### Hardware

![](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/USB_To_Uart_Download.jpg)

Deberías conectar tu circuito de la siguiente manera.

### Ejemplo

Podemos cargar código en una placa **Seeeduino Ethernet** utilizando el adaptador **USB To Uart 3V3**.

![](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/img/USB_To_Uart_5V_3v3_Usage.jpg)

Asegúrate de seleccionar el **tipo de placa** y el **puerto COM** correctos en el IDE de Arduino.

## Visor de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_3V3_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* **[Eagle]** [USB To Uart 3V3 v1.0 (Eagle File)](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_3V3_Eagle.zip)  

* **[PDF]** [Esquemático USB To Uart 3V3 en PDF](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB%20To%20Uart_3V3_Eagle/USB%20To%20Uart_3V3.pdf)  

* **[EAGLE]** [Archivo .sch del esquemático](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB%20To%20Uart_3V3_Eagle/USB%20To%20Uart_3V3.sch)  

* **[PDF]** [Esquemático en formato PDF](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_3V3_SCH.pdf)  

* **[Datasheet]** [Hoja de datos del chip CH340](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/CH340DS1_EN.PDF)

## Soporte Técnico y Discusión del Producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintas formas de soporte para asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Contamos con varios canales de comunicación para adaptarnos a tus necesidades y preferencias.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
