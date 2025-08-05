---
description: MT3620 Mini Dev Board
title: MT3620 Mini Dev Board
keywords:
- Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/MT3620_Mini_Dev_Board
last_update:
  date: 1/13/2025
  author: Guillermo
---


![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product.png)

La **MT3620 Mini Dev Board** es una versión compacta de la anterior [Azure Sphere MT3620 Development Kit](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html) de Seeed.  
Para una introducción a Azure Sphere, consulta este enlace: [Azure Sphere](https://azure.microsoft.com/en-us/services/azure-sphere/).

Desarrollamos esta placa para satisfacer las necesidades de los desarrolladores que requieren un tamaño más reducido, mayor escalabilidad y menores costos. Esta placa está basada en el módulo MT3620, lo cual simplifica significativamente el diseño del hardware.  
El [módulo MT3620](https://www.seeedstudio.com/MT3620-Module-AI-Link-WF-M620-RSC1-p-2920.html) fue desarrollado por nuestro socio [AI-Link](http://www.ilinkthings.com/microsoft). Los desarrolladores pueden reutilizar fácilmente este diseño en sus propios proyectos.  

La placa de desarrollo utiliza dos hileras de pines de una sola fila para facilitar su conexión a otras placas base o de expansión.  
A diferencia del kit completo Azure Sphere MT3620 Development Kit, esta versión mini optimiza el diseño eliminando periféricos del sistema y ofrece solo los recursos esenciales para los desarrolladores.  
En cuanto a especificaciones de hardware, solo se admite Wi-Fi de 2.4 GHz y se han reducido el I2S y algunos puertos GPIO.

### ¿Qué hay de nuevo en la MT3620 Mini Dev Board?

- Basada en el módulo MT3620 (WF-M620-RSA1).
- Tamaño reducido de **50 mm x 80 mm x 16 mm** a **34 mm x 60 mm x 19 mm**.
- Se conservan los indicadores LED y botones necesarios.
- El nuevo formato facilita su integración en otras placas o módulos.

A continuación, se muestra una comparación del tamaño entre el kit completo y la nueva Mini Dev Board:

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/compare.png)

El sistema operativo **Azure Sphere OS** viene preinstalado en el MT3620 y está diseñado para trabajar con el **Azure Sphere Security Service**, creando una plataforma IoT segura.  
Juntos, Azure Sphere OS y el servicio de seguridad ofrecen:

- Autenticación basada en certificados para cualquier servicio web.
- Verificación de software y arranque seguro (secure boot).
- Detección de amenazas mediante informes de fallos.
- Actualizaciones de seguridad continuas.
- Una solución IoT integrada y segura de extremo a extremo.

El desarrollo de software se realiza usando el entorno **Microsoft Visual Studio**:  
Instala Visual Studio con la extensión de Azure Sphere, conecta la placa al PC mediante USB y comienza a desarrollar aplicaciones IoT con un nivel de seguridad sin precedentes.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

:::caution
1. **Política de devoluciones:** Este producto solo puede activarse una vez. Seeed no acepta devoluciones si el paquete ha sido abierto. Consulta la política de garantía y devoluciones.  
   Si encuentras algún problema de calidad tras abrir el paquete, contacta con el equipo de soporte de Seeed: support@seeed.cc.

2. **Licencias de código abierto:** El software incluido en este producto contiene componentes bajo licencias GPL, LGPL u otras licencias de código abierto, listadas en aka.ms/AzureSphereSDK.  
   Puedes obtener el código fuente desde esa misma dirección o solicitándolo por correo a order@seeed.cc.
:::

## Características

- **Azure Sphere:** Seguridad integral para dispositivos IoT.
- **Wi-Fi 802.11 b/g/n.**
- **Microcontrolador de tres núcleos** con RAM y flash integradas.
- **Entorno de desarrollo Visual Studio de Microsoft.**
- **Autenticación en línea y actualizaciones** durante la vida útil del dispositivo.
- Expansión de recursos UART, I2C, SPI, ADC y GPIO mediante encabezado de pines.

## Especificaciones

**Hardware**

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-c3ow{border-color:inherit;:center;vertical-align:top}
.tg .tg-0pky{border-color:inherit;:left;vertical-align:top}
.tg .tg-0lax{:left;vertical-align:top}
</style> -->

<table class="tg">
  <tr>
    <th class="tg-0pky">Descripción</th>
    <th class="tg-0pky">Valor</th>
  </tr>
  <tr>
    <td class="tg-c3ow" rowspan="2">MCU<br />(con módulo MT3620)</td>
    <td class="tg-0pky">1 *ARM Cortex A7 core @500MHz , 4MB RAM</td>
  </tr>
  <tr>
<td class="tg-0pky">2* ARM Cortex M4 core @200MHz , 64KB RAM</td>
  </tr>
  <tr>
    <td class="tg-c3ow" rowspan="4">ISU</td>
    <td class="tg-0pky">ISU0 configurable como SPI0, UART0 o I2C0, ISU1 configurable como SPI1, UART1 o I2C1</td>
  </tr>
  <tr>
    <td class="tg-0pky">- I2C: hasta 1 MHz</td>
  </tr>
  <tr>
    <td class="tg-0pky">- SPI: hasta 40 MHz</td>
  </tr>
  <tr>
    <td class="tg-0pky">- UART: hasta 3 Mbps</td>
  </tr>
  <tr>
    <td class="tg-0pky">Conectividad</td>
    <td class="tg-0pky">802.11 b/g/n Wi-Fi</td>
  </tr>
  <tr>
    <td class="tg-0pky">ADC</td>
    <td class="tg-0pky">3 entradas analógicas de 12 bits</td>
  </tr>
  <tr>
    <td class="tg-0pky">RTC</td>
<td class="tg-0pky">1 RTC con soporte para batería CR1220 de 3V</td>
  </tr>
  <tr>
    <td class="tg-0pky">USB</td>
    <td class="tg-0pky">1 puerto Micro USB para alimentación y depuración, 5 V / 1 A</td>
  </tr>
  <tr>
    <td class="tg-0pky" rowspan="3">LED</td>
<td class="tg-0pky">1 LED Rojo -&gt; Encendido</td>
  </tr>
  <tr>
    <td class="tg-0lax">1 LED Verde -&gt; Estado FTDI</td>
  </tr>
  <tr>
<td class="tg-0lax">1 LED Verde -&gt; Controlado por el usuario (por ejemplo, estado Wi-Fi)</td>
  </tr>
  <tr>
    <td class="tg-0lax">Botón</td>
    <td class="tg-0lax">1 botón de reinicio</td>
  </tr>
  <tr>
    <td class="tg-0pky">Temperatura de operación</td>
    <td class="tg-0pky">-40~85°C</td>
  </tr>
  <tr>
    <td class="tg-0pky">Dimensiones</td>
    <td class="tg-0pky">Largo: 34 mm x Ancho: 60 mm x Alto: 19 mm<br /></td>
  </tr>
  <tr>
    <td class="tg-0pky">Certificaciones</td>
    <td class="tg-0pky">CE / FCC / MIC / RoHS<br /></td>
  </tr>
</table>

**Software**

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-0pky{border-color:inherit;:left;vertical-align:top}
.tg .tg-0lax{:left;vertical-align:top}
</style> -->

<table class="tg">
  <tr>
    <td class="tg-0pky">IDE</td>
    <td class="tg-0pky">Visual Studio</td>
  </tr>
  <tr>
    <td class="tg-0lax">Sistema Operativo</td>
    <td class="tg-0lax">Windows10</td>
  </tr>
  <tr>
    <td class="tg-0lax">Lenguaje de programación</td>
    <td class="tg-0lax">C</td>
  </tr>
</table>

## Soporte

Si desarrollas una aplicación en **tiempo real**, es posible programar lo siguiente:

- I2C  
- 2 núcleos ARM Cortex-M4 con FPU  
- ADC  
- PWM  
- I2S (consulta el [manual de usuario M4 con FPU](https://d86o2zu8ugzlg.cloudfront.net/mediatek-craft/documents/MT3620-M4-User-Manual.pdf))


Si desarrollas una aplicación en **alto nivel (High-Level OS App)**, es posible utilizar: ADC y PWM  

## Hardware Overview

**Diagarama del Board**

<a href="https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/sys.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/sys.jpg"/></a>

**Mapa de pines del Board**

<a href="https://files.seeedstudio.com/products/102110267/img/MT3620 Mini Dev Board Pinmap-20200331.jpg" target="_blank"><img src="https://files.seeedstudio.com/products/102110267/img/MT3620 Mini Dev Board Pinmap-20200331.jpg"/></a>

## Aplicaciones

- Hogar/Edificios/Instalaciones
- Automatización
- Seguridad
- Gestión de Equipos
- Servicios Públicos
- Seguridad Pública

:::tip
Para entender cómo funciona Azure Sphere en un entorno real, considera [el escenario de Contoso, Ltd](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere).
:::

## Instalar Azure Sphere

Si tienes una placa de desarrollo MT3620 Mini Dev Board que aún no ha sido usada, completa [estos pasos](https://docs.microsoft.com/en-us/azure-sphere/install/overview) primero para comenzar.

## Demos de la placa MT3620 Mini Dev Board

Creamos estas demostraciones que combinan la MT3620 Mini Dev Board con el [sistema Seeed Grove](https://wiki.seeedstudio.com/Grove_System/).

**Demo#1**: La MT3620 Mini Dev Board actúa como un MCU que se conecta con un Grove-Button y un adaptador USB a TTL. Luego conectas tanto la MT3620 como el adaptador USB a los puertos USB de la PC. Después de descargar el código, presionas el Grove-Button y escribes "Hello World!" desde el adaptador USB a TTL; puedes recibir "Hello World!" en la ventana de salida de Visual Studio.

**Demo#2**: La MT3620 se conecta con un sensor de luz Grove-Light y un sensor rotatorio Grove-Rotary. Luego conectas la placa a la PC. Tras descargar el código, al mover la mano sobre el sensor de luz o girar el rotatorio, puedes ver las salidas analógicas desde la ventana de salida de Visual Studio.

**Demo#3**: La MT3620 se conecta con una pantalla Grove OLED de 1.12". Luego la conectas a la PC. Tras descargar el código, presionas el botón Grove y envías "Hello World!" desde el adaptador USB a TTL; puedes ver el mensaje en la ventana de salida de Visual Studio.

**MT3620 Grove Breakout**: La MT3620 Mini Dev Board soporta SPI, UART, I2C, funciones digitales, pero **no soporta ADC**. Por eso, el MT3620 Grove Breakout incluye el chip [AD7992](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/AD7992.pdf), un ADC de 12 bits con interfaz I2C. Se conecta a la interfaz I2C de la placa.

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/adc_i2c.png)

### Demo#1 Digital y UART

**Lista de partes**

| MT3620 Mini Dev Board | MT3620 Grove Breakout | Grove - Botón | USB a UART 5V&3V3 |
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/button_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/usb_2_ttl_s.jpg)|
|[Consigue uno ahora](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[Consigue uno ahora](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[Consigue uno ahora](https://www.seeedstudio.com/Grove-Button-p-766.html)|[Consigue uno ahora](https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html)|

**Conexiones de hardware**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo1_connection.png)

- Paso 1. Conecta el Grove-Button al puerto D1 del MT3620 Grove Breakout.
- Paso 2. Conecta el adaptador USB a UART al UART0 del Breakout usando un [cable Grove](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html).
- Paso 3. Conecta el MT3620 Grove Breakout a la MT3620 Mini Dev Board.
- Paso 4. Conecta la MT3620 y el adaptador USB a TTL a los puertos USB de la PC.

:::caution
Asegúrate de que el interruptor de voltaje del adaptador USB a TTL esté en **5V**. Conecta el RX del adaptador al TX del Breakout, el TX del adaptador al RX del Breakout y también el GND. **No conectes el pin de 5V.**
:::

**Software**

- Paso 1. Descarga el [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- Paso 2. Abre la carpeta **Samples\UART0** dentro del repositorio
- Paso 3. Haz doble clic en **UART0.sln**
- Paso 4. Clic derecho en el nombre del proyecto > **Propiedades > C/C++ > General > Additional Include Directories**
- Paso 5. Haz clic en el ícono de flecha hacia abajo > **Editar... > Nueva línea**, agrega la ruta de **UART0**, luego clic en **Seleccionar Carpeta > OK > OK**
- Paso 6. En el proyecto, clic derecho en **Referencias > Agregar Referencias**, selecciona **Proyectos**, activa la casilla de **UART0**, luego clic en **OK**
- Paso 7. Clic derecho en el proyecto, selecciona **General > Target API Set**, marca la opción y selecciona **1+Beta1902** si usas **Visual Studio Community** (omite este paso si usas Enterprise).
- Paso 8. Haz clic en **Remote GDB Debugger**.
- Paso 9. Abre una herramienta COM y selecciona el puerto del adaptador USB a TTL.
- Paso 10. Presiona el botón Grove y envía "Hello World!" desde la herramienta COM.
- Paso 11. Puedes ver el mensaje "Hello World!" en la ventana de salida de Visual Studio.

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

### Demo#2 Analógica

**Lista de partes**

| MT3620 Mini Dev Board | MT3620 Grove Breakout | Sensor de Luz Grove | Sensor de Ángulo Rotatorio Grove |
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/light_sensor_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Rotary_Angle_Sensor_s.jpg)|
|[Consigue uno ahora](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[Consigue uno ahora](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[Consigue uno ahora](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)|[Consigue uno ahora](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html)|

**Conexiones de hardware**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo2_connection.png)

- Paso 1. Conecta el Sensor de Ángulo Rotatorio Grove al puerto A0 del MT3620 Grove Breakout.
- Paso 2. Conecta el Sensor de Luz Grove al puerto A1 del MT3620 Grove Breakout.
- Paso 3. Conecta el MT3620 Grove Breakout a la MT3620 Mini Dev Board.
- Paso 4. Conecta la MT3620 Mini Dev Board al puerto USB de la PC.

**Software**

- Paso 1. Descarga el [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- Paso 2. Abre la carpeta **Samples\AD7991_I2C** dentro del repositorio Azure_Sphere_Demo.
- Paso 3. Haz doble clic en **AD7991_I2C.sln**
- Paso 4. Haz clic derecho en el nombre del proyecto, selecciona **Propiedades > C/C++ > General > Additional Include Directories**
- Paso 5. Haz clic en el ícono de flecha hacia abajo > **Editar... > Nueva línea**, modifica la ruta de **AD7991_I2C**, luego haz clic en **Seleccionar Carpeta > OK > OK**
- Paso 6. En el proyecto, haz clic derecho en **Referencias > Agregar Referencias**, selecciona **Proyectos**, marca la casilla de **AD7991_I2C**, luego haz clic en **OK**
- Paso 7. Haz clic derecho en el proyecto > selecciona **General > Target API Set**, activa la casilla y selecciona **1+Beta1902** si usas **Visual Studio Community**. Omite este paso si usas la versión Enterprise.
- Paso 8. Haz clic en **Remote GDB Debugger**, mueve tu mano sobre el sensor de luz o gira el sensor rotatorio Grove. Podrás ver las salidas analógicas de ambos sensores en la ventana de salida de Visual Studio. 

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

### Demo#3 I2C

**Lista de partes**

| MT3620 Mini Dev Board | MT3620 Grove Breakout | Pantalla OLED Grove 1.12'' V2 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/oled_s.jpg)|
|[Consigue uno ahora](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[Consigue uno ahora](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[Consigue uno ahora](https://www.seeedstudio.com/Grove-OLED-Display-1-12-V2.html)|

**Conexiones de hardware**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo3_connection.png)

- Paso 1. Conecta la pantalla Grove-OLED Display 1.12'' V2 al puerto I2C del MT3620 Grove Breakout.
- Paso 2. Conecta el MT3620 Grove Breakout a la MT3620 Mini Dev Board.
- Paso 3. Conecta la MT3620 Mini Dev Board al puerto USB de la PC.

**Software**

- Paso 1. Descarga el [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- Paso 2. Abre la carpeta **Samples\SeeedOLED_I2C** dentro del repositorio.
- Paso 3. Haz doble clic en **SeeedOLED_I2C.sln**
- Paso 4. Haz clic derecho en el nombre del proyecto, selecciona **Propiedades > C/C++ > General > Additional Include Directories**
- Paso 5. Haz clic en el ícono de flecha hacia abajo > **Editar... > Nueva línea**, modifica la ruta de **SeeedOLED_I2C**, luego haz clic en **Seleccionar Carpeta > OK > OK**
- Paso 6. En el proyecto, haz clic derecho en **Referencias > Agregar Referencias**, selecciona **Proyectos**, marca la casilla de **SeeedOLED_I2C**, luego clic en **OK**
- Paso 7. Haz clic derecho en el proyecto > selecciona **General > Target API Set**, marca la casilla y selecciona **1+Beta1902** si usas **Visual Studio Community**. Omite este paso si usas la versión Enterprise.
- Paso 8. Haz clic en **Remote GDB Debugger**, y verás la información desplegarse en la pantalla OLED.

```
Remote debugging from host 192.168.35.1
Seeed oled 96*96 demo.
```

## Proyecto de Control Remoto de Puerta

Este es el demo de Cerradura Segura con Azure Sphere. Construimos esta caja con la nueva MT3620 Mini Dev Board y su placa Grove Breakout. La MT3620 funciona como microcontrolador del dispositivo y proporciona acceso seguro a la nube.

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure_Sphere_Demo_Secure_Lock.jpg)

<div align="center">Diagrama de Cerradura Segura<b></b><i></i></div>

**1. Veamos cómo funciona el hardware:**

En la parte superior de la caja hay una luz de advertencia que parpadea cuando la puerta está abierta. La MT3620 lee el estado de un microinterruptor y determina si la puerta está abierta o cerrada. La puerta se bloquea mediante un interruptor de electroimán. Hay dos relevadores (relays), ambos controlados por los GPIOs de la MT3620. Un relevador controla la fuente de energía del electroimán; al abrirlo, se desactiva el electroimán. El otro relevador controla la luz de advertencia.

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure%20Sphere%20Mini%20Dev%20Board%20Demo4.jpg)

<div align="center"><b>Vista Frontal</b><i></i></div>

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure%20Sphere%20Mini%20Dev%20Board%20Demo2.jpg)

<div align="center"><b>Vista Superior</b><i></i></div>

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure%20Sphere%20Mini%20Dev%20Board%20Demo5.jpg)

<div align="center"><b>Vista Lateral</b><i></i></div>

**2. MT3620 Mini Dev Board**

- Paso 1. Descarga el [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo).
- Paso 2. Sigue las instrucciones de inicio rápido para abrir el proyecto **Azure_Sphere_Demo\Demostrations\RemoteControlDoor\RemoteControlDoor.sln**.
- Paso 3. Abre el archivo `main.c` que se encuentra en *Source Files*.
- Paso 4. Modifica `wifiSsid` y `wifiPsk` en las líneas 28 y 29.
- Paso 5. Conecta el demo a Azure IoT.
- Paso 6. Haz clic en **Build → Rebuild Solution** para compilar y cargar el proyecto al dispositivo.
- Paso 7. Usa la herramienta de depuración remota (Remote Debug Tool) para acceder al dispositivo.
- Paso 8. Sigue el video para operar el ejemplo de 3 formas diferentes.

<iframe width="800" height="450" src="https://www.youtube.com/embed/NgH3Ot9pM1Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Recursos

<!-- - **[Product]** [MT3620 Mini Dev Board Product Brief](https://files.seeedstudio.com/products/102110267/document/MT3620_Mini_Dev_Board_Product_Brief-2019-03-15.pdf)链接有误 -->
- **[Producto]** [Bienvenido a Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/)
- **[Librería]** [Biblioteca de Demos de Azure Sphere](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- **[PDF]** [Esquemático de MT3620 Mini Dev Board](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/MT3620%20Dev%20Board%20V2.pdf)
- **[Hoja de Datos]** [Resumen del Producto MediaTek MT3620](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/MediaTek%20MT3620%20Product%20Brief.pdf)
- **[Hoja de Datos]** [WF-M620 RSC1 datasheet](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/WF-M620-RSC1_datasheet_20190314.pdf)
- **[Preguntas Frecuentes]** [Foro de Azure Sphere](https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere)
- **[Preguntas Frecuentes]** [Azure Sphere en Github (issues)](https://github.com/MicrosoftDocs/azure-sphere-issues/issues?utf8=%E2%9C%93&q=is%3Aissue)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte distintos canales de soporte para garantizar que tu experiencia sea lo más fluida posible. Ofrecemos varios medios de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
