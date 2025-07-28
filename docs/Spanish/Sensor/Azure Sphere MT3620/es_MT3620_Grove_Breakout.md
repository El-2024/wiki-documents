---
description: MT3620 Grove Breakout
title: MT3620 Grove Breakout
keywords:
- Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/MT3620_Grove_Breakout
last_update:
  date: 06/11/2025
  author: Guillermo
---


![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/MT3620-Grove-Breakout-front.jpg)

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/MT3620-Grove-Breakout-back.jpg)

El [Kit de Desarrollo Azure Sphere MT3620](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html) y la [Mini Placa de Desarrollo MT3620](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html) están habilitados con la tecnología [Microsoft Azure Sphere](https://azure.microsoft.com/en-us/services/azure-sphere/). El **MT3620 Grove Breakout** es una placa de expansión diseñada específicamente para la nueva Mini Dev Board MT3620. Este breakout permite a los usuarios conectar rápidamente módulos de sensores de [SeeedStudio Grove](https://www.seeedstudio.com/grove.html) en aplicaciones de prototipado rápido basadas en la Mini Dev Board MT3620.

Dado que el [SDK de Azure Sphere](http://aka.ms/AzureSphereSDK) aún no admite ADC en el MT3620, esta placa sirve como interfaz entre el puerto I2C del MT3620 y un ADC externo, permitiendo así la lectura de datos analógicos. Además del puerto analógico, este breakout incluye puertos UART, SPI, I2C y GPIO.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- ADC de 12 bits, interfaz serial compatible con I2C
- 8 conectores Grove:
  - 2 x UART
  - 2 x I2C
  - 2 x Analógico
  - 2 x Digital (4 GPIO)

## Descripción del Hardware

**Interfaz**

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/103100123_hardware_overview.png)

- **<font face="" size="3" font color="ff0000">①</font> Header de Expansión 1:**
24 pines. Consulta el mapa de pines de la placa para más detalles sobre la definición de pines.

- **<font face="" size="3" font color="ff0000">②</font> Analógico:**
2 puertos Grove analógicos. La señal de entrada debe ser menor a 3.3 V.  

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/Analog.png)

- **<font face="" size="3" font color="ff0000">③</font> I2C:**
2 puertos Grove I2C. Comparte pines con UART1, por lo que solo se puede usar I2C o UART1 al mismo tiempo.  

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/I2C.png)

- **<font face="" size="3" font color="ff0000">④</font> UART:**
2 puertos Grove UART. Comparte pines con I2C (UART1) y SPI0 (UART0), por lo que solo puedes usar uno a la vez.  

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/UART.png)

- **<font face="" size="3" font color="ff0000">⑤</font> Digital:**
4 puertos GPIO digitales. Voltaje de operación: 3.3 V.

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/GPIO.png)

- **<font face="" size="3" font color="ff0000">⑥</font> Encabezado de Expansión 2:**
Es una duplicación del Encabezado de Expansión 1. Se pueden soldar cables directamente. Hay dos pines que no están conectados con el encabezado 1. El pin 1 de J5 está conectado a 3.3 V directamente, y el pin 6 de J5 no está conectado.  

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/extention_header_1.png)

- **<font face="" size="3" font color="ff0000">⑦</font> SPI:** 
El puerto SPI0 comparte pines con UART0, por lo que solo puedes usar uno a la vez.  

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/SPI.png)

- **<font face="" size="3" font color="ff0000">⑧</font> AD7992BRMZ-1:**
La MT3620 Mini Dev Board soporta SPI, UART, I2C y funciones digitales, pero **no soporta ADC**. Por eso, el Grove Breakout incluye el chip [AD7992](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/AD7992.pdf), que es un ADC de 12 bits, de bajo consumo y con interfaz I2C.  

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/I2C_ADC.png)

- **<font face="" size="3" font color="ff0000">⑨</font> Selección de Dirección I2C:**
Entrada lógica para seleccionar una de tres direcciones I2C del AD7992.  
  - Si se conecta a GND → dirección I2C: `0x23`  
  - Si se conecta a 3.3 V → dirección I2C: `0x24`

**Mapa de Pines de la Placa**

<a href="https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/pinmap2.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/pinmap2.png"/></a>

**Dimensiones de la Placa**

- Largo: 57 mm  
- Ancho: 52 mm  
- Alto: 10 mm

## Aplicaciones

- Automatización en el hogar/edificios/instalaciones  
- Seguridad  
- Gestión de Equipos  
- Utilidades  
- Seguridad Pública

:::tip
To understand how Azure Sphere works in a real-world setting, consider [Contoso, Ltds cenario](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere).
:::

:::tip
Para comprender cómo funciona Azure Sphere en un escenario del mundo real, consulta el caso de [Contoso Ltd](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere).
:::

## Instalar Azure Sphere

Si tienes una Mini Dev Board MT3620 que aún no se ha usado, completa [estos pasos](https://docs.microsoft.com/en-us/azure-sphere/install/overview) para comenzar.

## Demos para la Mini Dev Board MT3620

Hemos creado tres demostraciones que combinan la Mini Dev Board MT3620 y el sistema [Seeed Grove](https://wiki.seeedstudio.com/Grove_System/).

**Demo #1:**  
La MT3620 actúa como un MCU y se conecta con un Grove-Button y un adaptador USB a TTL. Al presionar el botón, se envía el texto `"Hello World!"` por el adaptador USB a TTL, y lo verás en la ventana de salida de Visual Studio.

**Demo #2:**  
La MT3620 actúa como un MCU y se conecta con un Grove-Light Sensor y un Grove-Rotary Sensor. Al mover tu mano sobre el sensor de luz o girar el potenciómetro, se mostrarán valores analógicos en la ventana de salida de Visual Studio.

**Demo #3:**  
La MT3620 se conecta con un **Grove - OLED Display 1.12"**. Al presionar el Grove-Button y enviar `"Hello World!"` desde el adaptador USB a TTL, se recibe y muestra el mensaje en la ventana de salida de Visual Studio.

### Demo #1: Digital y UART

**Lista de Componentes**

| MT3620 Mini Dev Board | MT3620 Grove Breakout | Grove - Botón | Adaptador USB a UART 5V/3.3V |
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/button_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/usb_2_ttl_s.jpg)|
|[Consigue uno ahora](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[Consigue uno ahora](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[Consigue uno ahora](https://www.seeedstudio.com/Grove-Button-p-766.html)|[Consigue uno ahora](https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html)|

**Conexión de Hardware**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo1_connection.png)

:::caution
Asegúrate de insertar la MT3620 Mini Dev Board en el Grove Breakout en la orientación correcta. Revisa la serigrafía "USB" en el Grove Breakout y verifica que quede del mismo lado que el puerto USB de la MT3620 Mini Dev Board.
:::

- Paso 1. Conecta el Grove-Button al puerto **D1** del Grove Breakout.
- Paso 2. Conecta el adaptador USB a UART al puerto **UART0** del Grove Breakout usando un [cable Grove](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html).
- Psso 3. Inserta el Grove Breakout en la MT3620 Mini Dev Board.
- Paso 4. Conecta tanto la Mini Dev Board como el adaptador USB a TTL a puertos USB de tu PC.

:::caution
Asegúrate de que el interruptor de voltaje en el adaptador USB a TTL esté en **5 V**.  
Conecta:  
- RX del adaptador → TX del Grove Breakout  
- TX del adaptador → RX del Grove Breakout  
- GND ↔ GND  
**No conectes el pin de 5V directamente.**
:::

**Software**

- Paso 1. Descarga el proyecto desde [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- Paso 2. Abre la carpeta **Samples\UART0** dentro del repositorio.
- Paso 3. Haz doble clic en `UART0.sln`.
- Paso 4. Haz clic derecho sobre el nombre del proyecto y selecciona:  
   **Propiedades > C/C++ > General > Directorios de inclusión adicionales**
- Paso 5. Haz clic en el ícono de **flecha hacia abajo > Editar... > Nueva línea**, luego modifica la ruta de **UART0**, haz clic en **Seleccionar carpeta > OK > OK**.
- Paso 6. Haz clic derecho en el proyecto > **Referencias > Agregar referencias**, selecciona **Proyectos**, marca la casilla de **UART0**, luego haz clic en **OK**.
- Paso 7. Haz clic derecho en el proyecto > **General > Target API Set**, selecciona la casilla y elige **1+Beta1902** si estás usando Visual Studio Community.  
   (Omitir este paso si estás usando la versión Enterprise).
- Paso 8. Haz clic en **Remote GDB Debugger** para iniciar la depuración.
- Paso 9. Abre una herramienta de monitoreo de puerto COM y selecciona el puerto serial del adaptador USB a TTL.
- Paso 10. Presiona el Grove-Button y envía `"Hello World!"` desde la herramienta COM.
- Paso 11. Deberías ver el siguiente mensaje en la ventana de salida de Visual Studio.


```
UART received 12 bytes: 'Hello World!'.
UART received 2 bytes: '
'.
UART received 12 bytes: 'Hello World!'.
UART received 2 bytes: '
'.
UART received 12 bytes: 'Hello World!'.
UART received 2 bytes: '
```

### Demo #2 Análogo

**Lista de Partes**

| MT3620 Mini Dev Board | MT3620 Grove Breakout |  Grove-Light Sensor |Grove - Rotary Angle Sensor|
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/light_sensor_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Rotary_Angle_Sensor_s.jpg)|
|[Consigue uno ahora](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[Consigue uno ahora](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[Consigue uno ahora](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)|[Consigue uno ahora](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html)|

**Conexión de Hardware**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo2_connection.png)

:::caution
Asegúrate de conectar la MT3620 Mini Dev Board al Grove Breakout en la orientación correcta. Busca la serigrafía "USB" en el Grove Breakout y asegúrate de que esté del **mismo lado que el puerto USB** de la MT3620 Mini Dev Board.
:::

- Paso 1. Conecta el sensor **Grove-Rotary Angle** al puerto **A0** del Grove Breakout.
- Paso 2. Conecta el sensor **Grove-Light** al puerto **A1** del Grove Breakout.
- Paso 3. Inserta el Grove Breakout en la MT3620 Mini Dev Board.
- Paso 4. Conecta la MT3620 Mini Dev Board al puerto USB de tu computadora.

**Software**

- Paso 1. Descarga el repositorio [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- Paso 2. Abre la carpeta **Samples\AD7991_I2C** dentro del repositorio descargado.
- Paso 3. Haz doble clic en el archivo `AD7991_I2C.sln`.
- Paso 4. Haz clic derecho en el nombre del proyecto de tu aplicación, selecciona:  
   **Propiedades > C/C++ > General > Directorios de inclusión adicionales**
- Paso 5. Haz clic en los íconos **flecha hacia abajo > Editar... > Nueva línea**, luego modifica la ruta correspondiente a la carpeta **AD7991_I2C**, haz clic en **Seleccionar carpeta > OK > OK**.
- Paso 6. Haz clic derecho en el proyecto > **Referencias > Agregar referencias**, selecciona **Proyectos**, marca la casilla **AD7991_I2C** y haz clic en **OK**.
- Paso 7. Haz clic derecho en el nombre del proyecto > **General > Target API Set**, selecciona la casilla y configura como **1+Beta1902** si estás usando **Visual Studio Community**. (Omitir este paso si usas la versión Enterprise).
- Paso 8. Haz clic en **Remote GDB Debugger**.  
   Mueve tu mano sobre el sensor de luz o gira el sensor rotatorio. Verás los valores analógicos de ambos sensores en la ventana de salida de Visual Studio.

```

A0: 192 A1: 2646
A0: 162 A1: 2644
A0: 1489 A1: 2647
A0: 621 A1: 2644
A0: 227 A1: 2648
A0: 33 A1: 2644
A0: 0 A1: 2647
A0: 0 A1: 2647
A0: 0 A1: 2647
A0: 0 A1: 2644
A0: 373 A1: 2643
A0: 885 A1: 2646
A0: 1717 A1: 2647
A0: 2057 A1: 2647
```

### Demo #3: I2C – Pantalla OLED Grove 1.12'' V2

**Lista de Componentes**

| MT3620 Mini Dev Board | MT3620 Grove Breakout | Grove - Pantalla OLED 1.12'' V2 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/oled_s.jpg)|
|[Consigue uno ahora](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[Consigue uno ahora](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[Consigue uno ahora](https://www.seeedstudio.com/Grove-OLED-Display-1-12-V2.html)|

**Conexión de Hardware**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo3_connection.png)

:::caution
Asegúrate de conectar la MT3620 Mini Dev Board al Grove Breakout en la orientación correcta.  
Verifica que la serigrafía "USB" en el Grove Breakout esté del mismo lado que el puerto USB de la MT3620 Mini Dev Board.
:::

- Paso 1. Conecta la pantalla **Grove OLED 1.12'' V2** al puerto **I2C** del Grove Breakout.
- Paso 2. Inserta el Grove Breakout en la MT3620 Mini Dev Board.
- Paso 3. Conecta la MT3620 Mini Dev Board al puerto USB de tu computadora.

**Software**

- Paso 1. Descarga el repositorio [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo).
- Paso 2. Abre la carpeta **Samples\SeeedOLED_I2C** dentro del repositorio.
- Paso 3. Haz doble clic en `SeeedOLED_I2C.sln`.
- Paso 4. Haz clic derecho en el nombre del proyecto de tu aplicación y selecciona:  
   **Propiedades > C/C++ > General > Directorios de inclusión adicionales**
- Paso 5. Haz clic en los íconos **flecha hacia abajo > Editar... > Nueva línea**, modifica la ruta hacia la carpeta **SeeedOLED_I2C**, haz clic en **Seleccionar carpeta > OK > OK**.
- Paso 6. Haz clic derecho sobre el proyecto > **Referencias > Agregar referencias**, selecciona **Proyectos**, marca la casilla de **SeeedOLED_I2C** y haz clic en **OK**.
- Paso 7. Haz clic derecho en el nombre del proyecto > **General > Target API Set**, selecciona la casilla y configura como **1+Beta1902** si usas **Visual Studio Community**. (Omitir este paso si usas la versión Enterprise).
- Paso 8. Haz clic en **Remote GDB Debugger**.  
   Verás la información desplegada en la pantalla OLED.


```
Remote debugging from host 192.168.35.1
Seeed oled 96*96 demo.
```

## Visor del esquematico en línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/MT3620%20grove%20breakout%20v1.0.sch.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Producto]** [Bienvenido a Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/)
- **[Librería]** [Librería de Demos para Azure Sphere](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- **[Eagle]** [Esquemático MT3620 Grove Breakout (formato .sch)](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/MT3620%20grove%20breakout%20v1.0.sch.zip)
- **[PDF]** [Esquemático MT3620 Grove Breakout (formato PDF)](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/MT3620%20grove%20breakout%20v1.0.pdf)
- **[Hoja de Datos]** [WF-M620 RSC1 datasheet](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/WF-M620-RSC1_datasheet_20190314.pdf)
- **[Hoja de Datos]** [AD7992 datasheet](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/AD7992.pdf)

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diversos canales de soporte y asegurar que tu experiencia sea lo más fluida posible.  
Ofrecemos múltiples formas de contacto para adaptarnos a tus preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
