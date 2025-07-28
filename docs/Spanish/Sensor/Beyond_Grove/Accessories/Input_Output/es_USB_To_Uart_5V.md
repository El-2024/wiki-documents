---
title: Adaptador USB a UART 5V
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Scream_out_loud-110dBA_fixed_tone_Siren/
slug: /es/USB_To_Uart_5V
last_update:
  date: 07/14/2025
  author: Guillermo
---
<!-- ---
name: USB To Uart 5V
category: Essentials
bzurl: https://www.seeedstudio.com/USB-To-Uart-5V-p-1833.html
oldwikiname:  USB To Uart 5V
prodimagename:  USB_To_Uart_5V_photo.jpg
surveyurl: https://www.research.net/r/USB_To_Uart_5V
sku:  103990051
--- -->
![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/USB_To_Uart_5V_photo.jpg)

El **USB to UART 5V** es un adaptador USB a serie basado en el chip **CH340**. Este chip permite convertir la señal USB a interfaz serie, infrarrojo IrDA o interfaz de impresora. Este módulo puede ser utilizado para cargar código o para comunicarse con microcontroladores (MCUs).

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/USB-To-Uart-5V-p-1833.html)

## Características

---

* Interfaz USB de alta velocidad, conforme con la especificación USB 2.0

* Soporta tasas de baudios desde **2400bps hasta 115200bps**

* Interfaz serie dúplex completo por hardware, con buffers de transmisión y recepción

* Indicadores LED integrados

## Especificaciones

---

* Voltaje de operación: **DC 5V**

* Corriente de operación: **<10mA**

* Sistemas operativos compatibles: **Windows**, **Linux**, **Mac**

## Funciones de la interfaz

---
![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/USB_To_Uart_5v_interface.jpg)

* ①: Indicador de alimentación (Power)
* ②: Conector Micro USB

* ③: Indicador de transmisión (TX)

* ④: Indicador de recepción (RX)
* ⑤: Conector de salida UART

## Uso

---
### Instalación del driver

Este módulo requiere la instalación de drivers para funcionar como interfaz USB a puerto serie.

#### Windows / Linux

Compatible con aplicaciones de puerto serie en sistemas Windows y Linux.

1. Conecta el módulo al puerto USB de tu computadora  

2. Espera unos segundos y localiza el dispositivo en el **Administrador de dispositivos**  

3. Si no aparece, descarga el driver desde [este enlace](http://wch-ic.com/download/list.asp?id=127)

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/CH340_Driver.jpg)

**Mac OS**

Driver para Mac: [http://www.wch.cn/download/CH341SER_MAC_ZIP.html](http://www.wch.cn/download/CH341SER_MAC_ZIP.html)

**Para macOS Yosemite:**

1. Instala el driver CH340  

2. Abre la Terminal (/Aplicaciones/Utilidades/)  

3. Ejecuta el comando:  
   `sudo nvram boot-args="debug=0x146 kext-dev-mode=1"`  

4. Ingresa tu contraseña  

5. Reinicia la computadora

Para restablecer la configuración predeterminada del sistema: sudo nvram -d boot-args

**Hardware**

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/USB_To_Uart_Download.jpg)

Así es como deberías conectar tu circuito.

### Ejemplo

Puedes cargar código en una placa Seeeduino Ethernet usando el adaptador USB to UART 5V.

![](https://files.seeedstudio.com/wiki/USB_To_Uart_5V/img/USB_To_Uart_5V_Usage.jpg)

Asegúrate de seleccionar el tipo de placa y el puerto COM correctos en tu IDE.

## Visor de esquemáticos en línea

<div className="altium-ecad-viewer" data-project-src="res/USB_To_Uart_5V_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [ARchivo Eagle USB To Uart 5V v1.0](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_5V_Eagle.zip)

* [Esquemático pdf](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/USB_To_Uart_5V_v1.0_SCH.pdf)

* [Datasheet del CH340](https://files.seeedstudio.com/wiki/USB_To_Uart_3V3/res/CH340DS1_EN.PDF)

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
