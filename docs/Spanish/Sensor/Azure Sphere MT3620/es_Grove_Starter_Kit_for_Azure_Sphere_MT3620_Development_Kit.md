---
description: Grove Starter Kit for Azure Sphere MT3620 Development Kit
title: Kit de desarrollo Azure Sphere MT3620
keywords:
- Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit
last_update:
  date: 07/08/2025
  author: Guillermo
---


![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit.jpg)

Este producto es un kit básico de inicio para el [Kit de desarrollo Azure Sphere MT3620](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html). El kit integra los módulos listos para usar más populares de SeeedStudio — [Grove](https://www.seeedstudio.com/grove.html) — con el objetivo de ayudar a los desarrolladores a comenzar rápidamente y experimentar las soluciones de Azure Sphere.

**Microsoft Azure Sphere** es una solución para crear dispositivos conectados y altamente seguros impulsados por microcontroladores (MCU). Azure Sphere combina lo mejor de la experiencia de Microsoft en la nube, el software y el silicio, resultando en un enfoque único de seguridad que comienza desde el silicio y se extiende hasta la nube. En conjunto, los MCUs certificados por Azure Sphere, el sistema operativo Azure Sphere y el servicio de seguridad Azure Sphere te brindan la confianza y el poder para reinventar tu negocio y construir el futuro.

:::caution
Ten en cuenta que el kit de desarrollo Azure Sphere MT3620 es **necesario pero no está incluido** en este kit de inicio. Puedes adquirirlo [aquí](https://www.seeedstudio.com/s/Azure%20Sphere%20MT3620.html).
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Starter-Kit-for-Azure-Sphere-MT3620-Development-Kit-p-3150.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## Características

- Azure Sphere: Seguridad de extremo a extremo para dispositivos IoT
- Entorno de desarrollo Microsoft Visual Studio
- Autenticación en línea y actualizaciones durante la vida útil del dispositivo

## Vista General del Hardware

### **MT3620 Grove Shield**

Como el [Azure Sphere SDK](http://aka.ms/AzureSphereSDK) aún no admite ADC e I2C en el MT3620, este shield funciona como una interfaz entre el puerto UART del MT3620 y dispositivos I2C externos, como un sensor de temperatura I2C. La función principal del shield es facilitar la conexión con dispositivos I2C externos. Al usar un chip ADC compatible con I2C, los desarrolladores también pueden leer datos analógicos desde el puerto analógico.

El [MT3620 Grove Shield](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html) incluye 2 chips: **AD7992** (Análogo a I2C) y **SC18IM700** (I2C a UART), que habilitan las funciones ADC e I2C desde el lado del hardware. Así, las señales de sensores analógicos pasan por el AD7992 y luego por el SC18IM700 hacia el UART de la placa de desarrollo. Los sensores I2C también pasan por el SC18IM700 hacia el UART.

- El [AD7992](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/AD7992.pdf) es un ADC de 12 bits, de bajo consumo, con interfaz compatible con I2C. Convierte las señales analógicas A0 y A1 en datos I2C.

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/ADC_2_I2C.png)

El [SC18IM700](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/SC18IM700.pdf) está diseñado para servir como interfaz entre el puerto UART estándar de un microcontrolador o microprocesador y el bus serie I2C. Esto permite que el microcontrolador se comunique directamente con otros dispositivos del bus I2C. Transforma las señales SDA/SCL en GPIO26_TXD0 y GPIO28_RXD0.

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/I2C_2_UART.png)

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/MT3620_Grove_Shield-2018-09-11.png)

<div style={{textAlign: 'center'}}>Vista general del hardware MT3620 Grove Shield</div>

**Part List**

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-xldj{border-color:inherit;:left}
.tg .tg-0pky{border-color:inherit;:left;vertical-align:top}
</style> -->

<table class="tg">
  <tr>
    <th class="tg-xldj">Categoría</th>
    <th class="tg-xldj">Módulo</th>
    <th class="tg-0pky">Descripción</th>
  </tr>
  <tr>
    <td class="tg-xldj">Shield</td>
    <td class="tg-xldj">MT3620 Grove shield</td>
    <td class="tg-0pky">Ofrece 1 x UART, 2 x I2C, 1 x Analógico, 4 x GPIO</td>
  </tr>
  <tr>
    <td class="tg-xldj" rowspan="2">Entrada Analógica</td>
    <td class="tg-xldj">Grove - Sensor de Ángulo Rotatorio</td>
    <td class="tg-0pky">Produce un valor analógico que puede ser leído por el ADC.</td>
  </tr>
  <tr>
    <td class="tg-xldj">Grove - Sensor de Luz v1.2</td>
    <td class="tg-0pky">Mide los niveles de iluminación</td>
  </tr>
  <tr>
    <td class="tg-0pky" rowspan="2">Salida Digital</td>
    <td class="tg-0pky">Grove – Buzzer</td>
    <td class="tg-0pky">Activado por una señal digital, emite un tono</td>
  </tr>
  <tr>
    <td class="tg-0pky">Grove - Relé</td>
    <td class="tg-0pky">Activado por señal digital, permite conmutar voltajes mucho mayores</td>
  </tr>
  <tr>
    <td class="tg-0pky">Digital I/O</td>
    <td class="tg-0pky">Grove - Botón LED Azul</td>
    <td class="tg-0pky">El botón actúa como entrada, el LED como dispositivo de salida</td>
  </tr>
  <tr>
    <td class="tg-0pky">Sensor</td>
    <td class="tg-0pky">Grove - Sensor Temp.&Humedad (SHT31)</td>
    <td class="tg-0pky">Recoge datos de temperatura y humedad, accesibles vía interfaz I2C</td>
  </tr>
  <tr>
    <td class="tg-0pky">Display</td>
    <td class="tg-0pky">Grove - Pantalla OLED 1.12'' V2</td>
    <td class="tg-0pky">OLED que puede mostrar texto e imágenes</td>
  </tr>
</table>

## Ideas de Aplicación

- Automatización en el hogar, edificios o instalaciones
- Automatización industrial
- Seguridad
- Gestión de equipos
- Servicios públicos
- Seguridad pública

:::tip
Para entender cómo funciona Azure Sphere en un entorno real, consulta el [escenario de Contoso, Ltd](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere).
:::

## Primeros Pasos

### Requisitos Previos

**Instalar Azure Sphere**

Si tienes un kit de desarrollo Azure Sphere que aún no ha sido utilizado, completa [estos pasos](https://docs.microsoft.com/en-us/azure-sphere/install/overview) para comenzar.

**Librería MT3620 Grove Shield**

Esta es la librería para el shield MT3620 Grove, que amplía las capacidades de Azure Sphere al añadir soporte para entradas analógicas e interfaz I2C. Aquí puedes consultar el [tutorial](https://github.com/Seeed-Studio/MT3620_Grove_Shield/blob/master/README.md) sobre cómo utilizar la [librería MT3620 Grove Shield](https://github.com/Seeed-Studio/MT3620_Grove_Shield).

### Entrada Analógica

A continuación se muestra un ejemplo de cómo leer una señal analógica a través del MT3620 Base Shield.

**Hardware Connection**

| Kit de desarrollo MT3620 | MT3620 Grove Shield |  Sensor de Ángulo Rotatorio Grove |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/mt3620groveshieldb_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/rotation.jpg)|
|[Comprar ahora](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[Comprar ahora](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html)|[Comprar ahora](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html)|

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/Rotation_shield.jpg)

- Paso 1. Conectar el sensor de ángulo rotatorio Grove al puerto analógico del MT3620 Grove Shield.  
- Paso 2. Insertar el MT3620 Grove Shield en la placa de desarrollo Azure Sphere MT3620.  
- Paso 3. Conectar el cable USB a la placa de desarrollo y a la PC.

**Software**

- Paso 1. Descargar la [librería MT3620 Grove Shield](https://github.com/Seeed-Studio/MT3620_Grove_Shield)  
- Paso 2. Abrir la carpeta **Samples/GroveRotaryAngleSensor** dentro del repositorio.  
- Paso 3. Hacer doble clic en **GroveRotaryAngleSensor.sln**  
- Paso 4. Clic derecho en el nombre del proyecto > **Propiedades > C/C++ > General > Directorios de inclusión adicionales**  
- Paso 5. Clic en la flecha hacia abajo > **Editar... > Nueva línea**, agregar la ruta de la librería **MT3620_Grove_Shield_Library**, luego clic en **Seleccionar carpeta > OK > OK**  
- Paso 6. En el proyecto, clic derecho en **Referencias > Agregar referencia**, seleccionar **Proyectos**, marcar **MT3620_Grove_Shield_Library** y clic en **OK**  
- Paso 7. Clic derecho en el proyecto > **General > Target API Set**, marcar y establecer en **1** si usas **Visual Studio Community**. Si usas **Enterprise**, omite este paso.  
- Paso 8. Ejecuta con **Remote GDB Debugger**, gira el sensor y verás los datos de salida en la consola.

```
Remote debugging from host 192.168.35.1
Application starting
Angle Value 0.85
Angle Value 0.85
Angle Value 0.94
Angle Value 1.00
Angle Value 0.41
Angle Value 0.31
Angle Value 0.00
Angle Value 0.11
Angle Value 0.39
```

### Salida Digital

A continuación se muestra un ejemplo de cómo escribir una señal digital a través del MT3620 Base Shield.

**Conexión de Hardware**

| Kit de desarrollo MT3620 | MT3620 Grove Shield |  Grove - Buzzer |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/mt3620groveshieldb_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/buzzer.jpg)|
|[Comprar ahora](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[Comprar ahora](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html)|[Comprar ahora](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/buzzer_shield.jpg)

- Paso 1. Conectar el Grove - Buzzer al puerto GPIO del MT3620 Grove Shield.  
- Paso 2. Insertar el MT3620 Grove Shield en la placa de desarrollo Azure Sphere MT3620.  
- Paso 3. Conectar el cable USB desde la placa de desarrollo a la PC.  

**Software**

- Paso 1. Descargar la [librería MT3620 Grove Shield](https://github.com/Seeed-Studio/MT3620_Grove_Shield)  
- Paso 2. Abrir la carpeta **Samples/Grove_Buzzer** dentro del repositorio  
- Paso 3. Hacer doble clic en **Grove_Buzzer.sln**  
- Paso 4. Clic derecho en el nombre del proyecto > **Propiedades > C/C++ > General > Directorios de inclusión adicionales**  
- Paso 5. Hacer clic en la flecha hacia abajo > **Editar... > Nueva línea**, agregar la ruta hacia **MT3620_Grove_Shield_Library**, luego clic en **Seleccionar carpeta > OK > OK**  
- Paso 6. En el proyecto, clic derecho en **Referencias > Agregar referencia**, seleccionar **Proyectos**, marcar **MT3620_Grove_Shield_Library** y hacer clic en **OK**  
- Paso 7. Clic derecho en el proyecto > **General > Target API Set**, marcar y establecer en **1** si estás usando **Visual Studio Community**. Si usas **Enterprise**, omite este paso.  
- Paso 8. Haz clic en **Remote GDB Debugger**, y verás la salida en la consola cuando el buzzer se active.



```
Remote debugging from host 192.168.35.1
Application starting
Relay on
Relay off
Relay on
Relay off
```

### I2C

A continuación se muestra un ejemplo de cómo leer señales I2C del sensor Grove - Temp&Humi (SHT31) a través del MT3620 Base Shield.  

**Conexión de Hardware**

| Kit de desarrollo MT3620 | MT3620 Grove Shield |  Grove - Temp&Humi Sensor(SHT31) |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/mt3620groveshieldb_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/SHT3_s.jpg)|
|[Comprar ahora](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[Comprar ahora](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html)|[Comprar ahora](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT3-p-2655.html)|

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/sht31_shield.jpg)

- Paso 1. Conectar el sensor Grove - Temp&Humi (SHT31) al puerto I2C del MT3620 Grove Shield.  
- Paso 2. Insertar el MT3620 Grove Shield en la placa de desarrollo Azure Sphere MT3620.  
- Paso 3. Conectar el cable USB desde la placa de desarrollo a la PC.  

**Software**

- Paso 1. Descargar la [librería MT3620 Grove Shield](https://github.com/Seeed-Studio/MT3620_Grove_Shield)  
- Paso 2. Abrir la carpeta **Samples/Temp_and_Humidity_SHT31** dentro del repositorio  
- Paso 3. Hacer doble clic en **Temp_and_Humidity_SHT31.sln**  
- Paso 4. Clic derecho en el nombre del proyecto > **Propiedades > C/C++ > General > Directorios de inclusión adicionales**  
- Paso 5. Hacer clic en la flecha hacia abajo > **Editar... > Nueva línea**, agregar la ruta hacia **MT3620_Grove_Shield_Library**, luego clic en **Seleccionar carpeta > OK > OK**  
- Paso 6. En el proyecto, clic derecho en **Referencias > Agregar referencia**, seleccionar **Proyectos**, marcar **MT3620_Grove_Shield_Library** y hacer clic en **OK**  
- Paso 7. Clic derecho en el proyecto > **General > Target API Set**, marcar y establecer en **1** si estás usando **Visual Studio Community**. Si usas **Enterprise**, omite este paso.  
- Paso 8. Haz clic en **Remote GDB Debugger**, y verás la salida en consola con los datos del sensor.

```
Remote debugging from host 192.168.35.1
Application starting
Hello world
Temperature: 19.2C
Humidity: 53.7%
Hello world
Temperature: 19.2C
Humidity: 53.7%
Hello world
Temperature: 19.1C
Humidity: 53.7%
Hello world
Temperature: 19.2C
Humidity: 53.8%
```

## Visor del Esquemático en línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/res/MT3620GroveShield%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle&PDF]** [MT3620 Grove Shield v1.0 Sch and PCB](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/res/MT3620GroveShield%20v1.0.zip)
- **[Librería]** [MT3620 Grove Shield Library](https://github.com/Seeed-Studio/MT3620_Grove_Shield)
- **[Producto]** [Azure Sphere MT3620 Development Kit Product Brief](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/product_document/Azure%20Sphere%20MT3620%20Development%20Kit%20Product%20Brief-2018-09-10.pdf)
- **[Producto]** [Welcome to Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/)
- **[DataSheet]]** [MediaTek MT3620 Product Brief](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/MediaTek%20MT3620%20Product%20Brief.pdf)
- **[DataSheet]** [DS_FT4232H](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/DS_FT4232H.pdf)
- **[Mecánico]** [Azure Sphere MT3620 Development Board-2D-Drawing](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/tree/master/mechanical)
- **[PyR]** [Azure Sphere Forum](https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere)
- **[PyR]** [Azure Sphere Github issues](https://github.com/MicrosoftDocs/azure-sphere-issues/issues?utf8=%E2%9C%93&q=is%3Aissue)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

