---
description: USB To Uart 5V/3V3
title: Adaptador USB a UART 5V/3V3
keywords:
- Accessories charge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/USB_To_Uart_5V_3V3
last_update:
  date: 07/14/2025
  author: Guillermo
---

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/img/Photo_USB_To_Uart_5V_3V3.JPG)

El **USB To Uart 5V/3V3** es un adaptador USB a serie basado en el chip **CH340**, el cual permite la conversión de USB a interfaz serie, infrarrojo IrDA o interfaz de impresora. Este módulo es compatible con niveles lógicos de **5V y 3.3V**, y puede utilizarse para cargar código o comunicarse con microcontroladores.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/USB-To-Uart-5V%263V3-p-1832.html)

## Características

---

* Interfaz USB de alta velocidad, compatible con la especificación USB 2.0

* Compatible con I/Os de 3.3V y 5V

* Soporta tasas de baudios desde 2400bps hasta 115200bps

* Interfaz serie dúplex completo por hardware, con buffer de transmisión y recepción

* Indicador LED integrado

## Especificaciones

---

* Voltaje de operación: **DC 5V**

* Corriente de operación: **<10mA**

* Sistemas operativos compatibles: **Windows**, **Linux**, **Mac**

## Funciones de la Interfaz

---
![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/img/USB_To_Uart_5V_3V3.jpg)

* ①: Indicador de encendido (Power)
* ②: Conector Micro USB

* ③: Indicador de transmisión (TX)

* ④: Indicador de recepción (RX)
* ⑤: Salida UART

* ⑥: Interruptor VCC: selecciona entre 5V o 3.3V

## Uso

---
**Instalación del Driver**

Este adaptador requiere la instalación del controlador correspondiente.

**En Windows / Linux**

Totalmente compatible con aplicaciones de puerto serie en sistemas Windows.

1. Conecta el módulo al puerto USB de tu computadora.  

2. Espera unos segundos y verifica en el **Administrador de dispositivos**.  
   ![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/img/CH340_Driver.jpg)

3. Si el puerto no aparece, descarga el driver desde [este enlace](http://www.wch.cn/download/CH341SER_ZIP.html)

**Mac OS**

Descarga el driver desde:  [http://www.wch.cn/download/CH341SER_MAC_ZIP.html](http://www.wch.cn/download/CH341SER_MAC_ZIP.html)

En macOS Yosemite:

1. Instala el driver CH340 

2. Abre la Terminal (/Aplicaciones/Utilidades/) 

3. Escribe el siguiente comando:  
   `sudo nvram boot-args="debug=0x146 kext-dev-mode=1"`  
4. Escribe tu contraseña  

5. Reinicia tu computadora

Para restaurar la configuración original de tu Mac, puedes redefinir el parámetro `boot-args` o eliminarlo: `sudo nvram -d boot-args`

<big>Hardware</big>

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/img/USB_To_Uart_Download.jpg)

Deberías conectar tu circuito como se muestra arriba.

<big>Example</big>

Puedes utilizar el adaptador para cargar código en una placa **Seeeduino Ethernet**:

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/img/USB_To_Uart_5V_3v3_Usage.jpg)

Asegúrate de seleccionar el **tipo de placa** y el **puerto COM** correcto en el IDE de Arduino.

## Visor de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/res/USB_To_Uart_5V_3V3_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [USB To Uart 5V/3V3 v1.0 Eagle File](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/res/USB_To_Uart_5V_3V3_Eagle.zip)

* [Esquemático en PDF](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/res/USB_To_Uart_5V_3V3_v1.pdf)

* [Datasheet del CH340](https://files.seeedstudio.com/wiki/USB_To_Uart_5V_3V3/res/CH340DS1_EN.PDF)

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
