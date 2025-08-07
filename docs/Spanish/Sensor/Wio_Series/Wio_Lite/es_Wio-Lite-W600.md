---
title: Wio Lite W600
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Lite-W600/
slug: /es/Wio-Lite-W600
last_update:
  date: 07/25/2025
  author: Guillermo
---

![](https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/Wio-Lite-W600-wiki.jpg)

Wio Lite W600 es una placa compatible con Arduino económica con el módulo WiFi W600. Wio Lite W600 cuenta con un microcontrolador Atmel® | SMART™ SAM D21 ARM Cortex-M0+ y el núcleo WiFi W600 es un módulo WiFi de 2.4GHz que cuenta con ARM Cortex-M3. Como Wio Lite W600 usa SAM D21 (el mismo chip que Arduino Zero) como su núcleo Arduino, en teoría es totalmente compatible con Arduino Zero.

Se exponen los pines del SAM D21, el nivel de I/O de esta placa es de 3.3V. Cuenta con 6 pines analógicos y 14 digitales, además de un UART, un I2C y un puerto ICSP. Puedes alimentar esta placa con USB Tipo C 5V o batería Lipo de 3.5V~4.2V.

Respecto al núcleo WiFi, es nuestro viejo amigo: módulo W600. Ya lanzamos el módulo W600 y el [Grove - W600](https://www.seeedstudio.com/W600-Module-p-4020.html), Wio Lite W600 es un nuevo miembro de la [familia W600](https://www.seeedstudio.com/tag/W600-WIFI.html). El módulo W600 cuenta con ARM Cortex-M3 con 1MB de flash en chip y kernel freeRTOS. Está certificado CE/FCC y soporta 802.11 b/g/n.

Además, lanzamos el [Grove Shield para Wio Lite](https://www.seeedstudio.com/Grove-Shield-for-Wio-Lite-p-4156.html) simultáneamente. Con este shield, llevamos más de 200 sensores, actuadores y displays Grove a la serie Wio Lite y la comunidad Feather.

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/Grove-Shield-for-Wio-Lite-V1.0-detail.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/Grove-Shield-for-Wio-Lite-V1.0-detail.jpg" height="450" width="600" alt="Seeed relay quick selection diagram"  />
  </a>
</figure>
</div>

Adiós al cableado complejo con la protoboard y las molestas soldaduras con el soldador.

¡Hola, [Grove](https://wiki.seeedstudio.com/Grove_System/)!

<p style={{}}><a href="https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Compatible con Arduino Zero / Compatible con Adafruit Feather  
- Módulo WiFi a bordo 2.4GHz compatible con 802.11 b/g/n  
- Soporta más de 200 módulos Grove  
- Económico

## Especificaciones

|Ítem|Valor|
|------------|-----------|
|Microcontrolador|SAM D21 |
|Frecuencia máxima CPU|48 MHz|
|SRAM|32 KB|
|Memoria Flash|256 KB|
|Alimentación|USB Tipo C 5V, batería Lipo 3.5 V ~ 4.2 V|
|Pines digitales I/O|14|
|Canales de entrada analógica|6|
|Corriente DC por pin I/O|40 mA|
|Voltaje de entrada I/O|3.3 V|
|||
|Núcleo WiFi|W600|
|CPU|Cortex-M3 embebido 32 bits|
|RAM|288 KB|
|Flash|1 MB|
|Modo Wi-Fi|IEEE802.11b/g/n|
|Rango de frecuencia|2.4~2.4835 GHz|
|Tipo de red|STA/AP/AP+STA/Wi-Fi Direct|
|Protocolo de red|TCP/UDP/ARP/ICMP/DHCP/DNS/HTTP|
|Verificación|WEP/WPA-PSK/WPA2-PSK|
|Encriptación|WEP64/WEP128/TKIP/CCMP(AES)|

## Descripción general del hardware

![](https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/hardware-overview.jpg) 

## Comenzando

## Hardware

**Materiales requeridos**

- Wio Lite W600 x1  
- Computadora x1  
- Cable USB tipo C x1  

:::tip  
Algunos cables USB solo suministran energía y no transfieren datos. Si no tienes un cable USB o no sabes si tu cable puede transferir datos, revisa [Soporte USB tipo C de Seeed con USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).  
:::

Conecta la Wio Lite W600 a tu computadora usando el cable USB.

## Software

## Paso 1. Necesitas instalar el software Arduino.

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Inicia la aplicación Arduino**

Haz doble clic en la aplicación Arduino (arduino.exe) que descargaste anteriormente.

:::note  
Si el software Arduino se carga en un idioma diferente, puedes cambiarlo en el diálogo de preferencias. Consulta la [página de Arduino Software (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para más detalles.  
:::

## Paso 2. Configura tu Arduino IDE.

Abre tu Arduino IDE, haz clic en **Archivo > Preferencias** y copia la siguiente URL en *Gestor de URLs adicionales de placas*:

```c
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json

```

 ![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/preference.png)


## Paso 3. Añade la placa Wio Lite W600 a tu Arduino IDE  

Por favor, sigue la [Guía de instalación de placas Seeed](https://wiki.seeedstudio.com/Seeed_Arduino_Boards/) y busca la palabra clave **seeeduino_samd_zero** para agregar la **Wio Lite W600** a tu Arduino IDE.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE1.png"/>
  <figcaption> <i>La palabra clave es **seeeduino_samd_zero**</i> </figcaption>
</figure>
</div>

## Paso 4. Añade la librería W600 a tu Arduino IDE 

Descarga la [librería W600](https://github.com/Seeed-Studio/Seeed_Arduino_W600/archive/master.zip) desde el GitHub de Seeed. Luego consulta la guía [Cómo instalar librerías en Arduino](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) para instalar la librería.

## Paso 5. Reinicia el Arduino IDE. Abre el ejemplo AP-Station, lo puedes abrir en Arduino IDE desde: **Archivo --> Ejemplos --> W600_wifi --> log_data.**

![](https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE3.png)

## Paso 6. Modifica el código con tu propio AP y estación. En la siguiente imagen, Wio Lite W600 trabaja como estación para unirse al AP marcado como **A** y la Wio Lite W600 creará el **AP B** para otros dispositivos. Debes cambiar tanto el nombre como la contraseña del AP.

![](https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE-4.jpg)

## Paso 7. Selecciona tu placa y puerto

Debes seleccionar la entrada en el menú **Herramientas > Placa** que corresponda a tu Arduino. Selecciona **Seeeduino Zero**.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE2.png"/>
  <figcaption><i>Elige la placa correcta</i></figcaption>
</figure>
</div>

Selecciona el dispositivo serial de la placa Arduino desde el menú Herramientas | Puerto Serial. Probablemente sea COM3 o superior (**COM1** y **COM2** suelen estar reservados para puertos seriales hardware). Para comprobarlo, desconecta la placa Arduino y vuelve a abrir el menú; la entrada que desaparezca será tu placa. Reconecta la placa y selecciona ese puerto serial.

## Paso 8. Sube el código  

Ahora, simplemente haz clic en el botón **"Subir"** en el entorno. Espera unos segundos y si la carga es exitosa, aparecerá el mensaje **"Done uploading."** en la barra de estado.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png"/>
  <figcaption><i>Sube el código</i></figcaption>
</figure>
</div>

Unos segundos después de finalizar la carga, la Wio Lite W600 accederá al AP que configuraste y podrás usar tu teléfono para conectarte al AP creado por Wio Lite W600.

## Visor de esquemáticos en línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio-Lite-W600/res/Wio-Lite-W600.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Archivo Eagle Wio Lite W600](https://files.seeedstudio.com/wiki/Wio-Lite-W600/res/Wio-Lite-W600.zip)  
- **[PDF]** [Hoja de datos W600](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_User%20Manual_V1.0.0.pdf)

## Soporte técnico y discusión del producto

Si tienes algún problema técnico, por favor envía tu consulta a nuestro [foro](http://forum.seeedstudio.com/).  
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
