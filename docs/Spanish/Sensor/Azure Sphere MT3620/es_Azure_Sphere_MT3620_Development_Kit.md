---
description: Azure Sphere MT3620 Development Kit
title: Kit de Desarrollo Azure Sphere MT3620
keywords:
- Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Azure_Sphere_MT3620_Development_Kit
last_update:
  date: 07/06/2025
  author: Guillermo
---

El **Kit de Desarrollo Azure Sphere MT3620** está especialmente diseñado para facilitar la creación rápida de prototipos y permitir que los desarrolladores experimenten la tecnología Azure Sphere. El **MT3620** es el primer MCU certificado para Azure Sphere. Los MCUs certificados por Azure Sphere son una nueva clase de microcontroladores cruzados conectados y seguros.

El MT3620 incluye tres núcleos de microcontrolador accesibles por el usuario: un núcleo ARM Cortex-A7 y dos núcleos ARM Cortex-M4F de propósito general. Está diseñado para soportar requisitos en tiempo real al interactuar con una variedad de periféricos integrados como GPIO, UART, I2C, SPI, I2S, PWM y ADC. También cuenta con un subsistema de seguridad integrado con su propio núcleo CM4F dedicado para arranque seguro y operación segura del sistema, además de conectividad Wi-Fi de doble banda 802.11 b/g/n.

El Kit de Desarrollo MT3620 expone la mayoría de los recursos de hardware del MT3620 a través de pines de expansión. Al conectarlo a una placa de pruebas o añadir una placa tipo shield, el usuario puede enlazar fácilmente con otros accesorios de hardware.

El sistema operativo Azure Sphere viene **preinstalado** en el MT3620 y está diseñado para trabajar con el servicio de seguridad de Azure Sphere, formando una plataforma IoT segura. Sus características incluyen:

- Autenticación del dispositivo basada en certificados hacia cualquier servicio web  
- Verificación de software y arranque seguro  
- Detección de amenazas mediante reportes de fallos  
- Actualizaciones de seguridad continuas  
- Una solución IoT integrada y segura de extremo a extremo

El desarrollo de software para el MT3620 es compatible con el entorno de desarrollo Microsoft Visual Studio:

- Instala [Visual Studio](https://visualstudio.microsoft.com/) (se admite Community, Enterprise o Professional) y la extensión de Azure Sphere, conecta la tarjeta de desarrollo al PC por USB, y comienza a desarrollar aplicaciones IoT con niveles de seguridad sin precedentes.  
- Para usar la tarjeta de desarrollo MT3620 con Azure Sphere, necesitarás una PC con Windows 10 con las últimas actualizaciones de Windows, junto con el [kit de desarrollo de software de Azure Sphere (SDK)](http://aka.ms/AzureSphereSDK).

<iframe width="600" height="450" src="https://www.youtube.com/embed/iiDF26HNh-Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

| Nombre del producto | Cómo comprar |
|---------------------|--------------|
| Kit de Desarrollo Azure Sphere MT3620 Versión EE. UU. | [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html) |
| Kit de Desarrollo Azure Sphere MT3620 Versión JP | [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-JP-Version-p-3135.html) |
| Kit de Desarrollo Azure Sphere MT3620 Versión EU | [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-EU-Version-p-3134.html) |

:::caution  
Si necesitas ayuda para elegir la versión adecuada, consulta la [lista de países o regiones disponibles](https://view.officeapps.live.com/op/view.aspx?src=https://statics3.seeedstudio.com/document/Available_country.docx) para más detalles.  
:::

## Características

- Azure Sphere: Seguridad de extremo a extremo para dispositivos IoT  
- Wi-Fi de doble banda 802.11 b/g/n con diversidad de antena  
- Microcontrolador de tres núcleos con RAM y memoria flash integradas  
- Entorno de desarrollo Microsoft Visual Studio  
- Autenticación en línea y actualizaciones durante la vida útil del dispositivo

## Especificaciones

**Hardware**

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-baqh{:center;vertical-align:top}
.tg .tg-amwm{font-weight:bold;:center;vertical-align:top}
.tg .tg-0lax{:left;vertical-align:top}
</style> -->

<table className="tg">
  <tbody><tr>
      <th className="tg-baqh"><span style={{fontWeight: 'bold'}}>Descripción</span></th>
      <th className="tg-baqh"><span style={{fontWeight: 'bold'}}>Valor</span></th>
    </tr>
    <tr>
      <td className="tg-amwm" rowSpan={2}><br />MCU</td>
      <td className="tg-0lax">1 núcleo ARM Cortex-A7 @500 MHz, 4 MB RAM</td>
    </tr>
    <tr>
      <td className="tg-0lax">2 núcleos ARM Cortex-M4 @200 MHz, 64 KB RAM</td>
    </tr>
    <tr>
      <td className="tg-amwm" rowSpan={5}><br /><br /><br /><br />ISU</td>
      <td className="tg-0lax">4 interfaces seriales "ISU" configurables como:</td>
    </tr>
    <tr>
      <td className="tg-0lax">&nbsp;&nbsp;- I2C hasta 1 MHz</td>
    </tr>
    <tr>
      <td className="tg-0lax">&nbsp;&nbsp;- SPI hasta 40 MHz</td>
    </tr>
    <tr>
      <td className="tg-0lax">&nbsp;&nbsp;- UART hasta 3 Mbps</td>
    </tr>
    <tr>
      <td className="tg-0lax">ISU es una interfaz de comunicación serial</td>
    </tr>
    <tr>
      <td className="tg-amwm">Conectividad</td>
      <td className="tg-0lax">Wi-Fi de doble banda 2.4/5 GHz 802.11 b/g/n</td>
    </tr>
    <tr>
      <td className="tg-amwm">I2S</td>
      <td className="tg-0lax">1 interfaz I2S con soporte para modo esclavo y TDM esclavo</td>
    </tr>
    <tr>
      <td className="tg-amwm">ADC</td>
      <td className="tg-0lax">4 entradas analógicas de 12 bits (ADC)</td>
    </tr>
    <tr>
      <td className="tg-amwm">RTC</td>
      <td className="tg-0lax">1 RTC con soporte para batería CR2032 de 3 V</td>
    </tr>
    <tr>
      <td className="tg-amwm">USB</td>
      <td className="tg-0lax">1 puerto Micro USB para alimentación y depuración, 5 V/1 A</td>
    </tr>
    <tr>
      <td className="tg-amwm">DC Jack</td>
      <td className="tg-0lax">1 conector DC de 5 V/1 A</td>
    </tr>
    <tr>
      <td className="tg-amwm">Temperatura operativa</td>
      <td className="tg-0lax">-40~85°C</td>
    </tr>
    <tr>
      <td className="tg-amwm">Dimensiones</td>
      <td className="tg-0lax">Largo: 85 mm, Ancho: 50 mm, Alto: 16 mm</td>
    </tr>
    <tr>
      <td className="tg-amwm">Certificaciones</td>
      <td className="tg-0lax">CE / FCC / MIC / RoHS</td>
    </tr>
  </tbody></table>

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
    <td class="tg-0lax">Sistema operativo</td>
    <td class="tg-0lax">Windows 10</td>
  </tr>
  <tr>
    <td class="tg-0lax">Lenguaje de programación</td>
    <td class="tg-0lax">C</td>
  </tr>
</table>

## Descripción General del Hardware

**Diagrama de la Placa**

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/Diagram.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/Diagram.png"/></a>

- **J1**: Voltaje de referencia ADC. Encendido: usa referencia interna de 2.5 V; Apagado: conectar 1.8 V externa al Pin 1. Apagado por defecto.
- **J2**: Aislamiento 3.3 V. Encendido: habilita la alimentación de 3.3 V del sistema; Apagado: corta la alimentación de 3.3 V. Encendido por defecto.
- **J3**: Selección de energía del RTC: pines izquierdos: utiliza batería RTC (modelo CR2032) en la parte trasera.
- **4 LEDs RGB de usuario**: El modelo del LED es LTST-C19HE1WT.
- **Puerto USB**: Suministro de energía (5 V/1 A) y depuración. Conectado al chip FT4232HQ en la parte trasera.
- **4 LEDs del sistema**:
  - LED1 (cerca del USB): Verde, actividad FTDI.
  - LED2: Rojo, indicador de encendido.
  - LED3: RGB, estado del Wi-Fi.
  - LED4: RGB, estado de la aplicación.
- **Entrada de energía DC**: 5 V/1 A.
- **3 Botones del sistema**: Botones A y B (blancos) son botones de usuario. Botón Reset (azul) es reinicio del sistema.
- **MT3620**: El [MT3620](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/MediaTek%20MT3620%20Product%20Brief.pdf) es un MCU altamente integrado y de alto rendimiento para IoT, con un alto nivel de seguridad, ideal para dispositivos conectados modernos. Está orientado a una amplia gama de aplicaciones IoT incluyendo hogares inteligentes, comercio, industria y más, gracias a su extenso subsistema de periféricos E/S.
- **FT4232HQ**: El [FT4232H](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/DS_FT4232H.pdf) es un chip USB 2.0 de alta velocidad (480 Mb/s) a UART/MPSSE.

**Mapa de Pines de la Placa**

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/PinMap.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/PinMap.png"/></a>

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/H1_2.png)

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/H3_4.png)

**Dimensiones**

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/dimension.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/dimension.png"/></a>

**Alimentación**

La energía del kit de desarrollo Azure Sphere MT3620 se suministra mediante el conector Micro USB tipo B integrado o directamente mediante el conector DC.

- El voltaje de GPIO es de 3.3 V, con un margen limitado de solo 100 mA disponible.
- La salida de 5 V en el conector H3 tiene un margen limitado de solo 500 mA.
- La salida de 3.3 V en el conector H3 tiene un margen limitado de solo 400 mA.
- El consumo promedio típico de corriente es de 150 mA con Wi-Fi de 5 V activo. El consumo durante el escaneo Wi-Fi es típicamente de 330 mA.

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/power.png)

**Diseño y Fabricación de Hardware**

Para usar I2S, consulta el [Manual del Usuario del M4](https://d86o2zu8ugzlg.cloudfront.net/mediatek-craft/documents/MT3620-M4-User-Manual.pdf)

:::tip
Para más información, consulta [Información y herramientas para el diseño y fabricación de hardware](https://learn.microsoft.com/en-us/azure-sphere/hardware/hardware-manufacturing-overview).
:::

## Manejo del Producto

**Empaque**

El empaque del kit de desarrollo Azure Sphere MT3620 incluye el propio kit y un cable USB Micro B.

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/box.JPG)

**Precauciones ESD**

El kit de desarrollo Azure Sphere MT3620 contiene circuitos electrónicos altamente sensibles y es un dispositivo sensible a descargas electrostáticas (ESD). Manipular el kit sin protección adecuada contra ESD puede dañarlo de forma permanente. Deben aplicarse procedimientos correctos de manejo y empaque durante todo el proceso y operación de cualquier aplicación que lo incorpore.

## Aplicaciones

- Hogar / Edificios / Instalaciones
- Automatización
- Seguridad
- Gestión de Equipos
- Servicios Públicos
- Seguridad Pública

:::tip
Para entender cómo funciona Azure Sphere en un entorno real, consulta el [escenario de Contoso, Ltd](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere).
:::

## Certificaciones y Aprobaciones

<div className="method1" style={{width: '16%'}}>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-FCC-FCC.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/FCC.jpg" /></a></p>
</div>

<div className="method1" style={{width: '16%'}}>
  <p style={{textalign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-CE.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/CE.jpg" /></a></p>
</div>

<div className="method1" style={{width: '16%'}}>
  <p style={{textalign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-MIC.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/mic.jpg" /></a></p>
</div>

<div ><img width="{1000}" src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/RoHS.jpg" /></div>

<!-- <style>
.method1{
  :center;
  float:left;
}
.title{
font-size:1px;
text-indent:1px;
line-height:3px
}
</style> -->

- FCC ID: [Z4T-MT3620DEVB](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-FCC-FCC.zip)
- CE ID: [18/0331/SZ](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-CE.zip)
- MIC ID: [CSRT18207](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-MIC.zip)

## Instalar Azure Sphere

Si tienes un kit de desarrollo Azure Sphere que aún no ha sido usado, completa [estos pasos](https://docs.microsoft.com/en-us/azure-sphere/install/overview) para comenzar.

## Demostraciones de Azure Sphere

Hemos creado dos demostraciones que combinan el kit de desarrollo Sphere con el sistema [Seeed Grove](https://wiki.seeedstudio.com/Grove_System/).

**Demostración 1**: La placa MT3620 actúa como un MCU que se conecta con un sensor de temperatura (SHT31), un relevador, un ventilador, una pantalla y un dispositivo analógico. La demo simula un ventilador con conectividad IoT; las personas pueden medir la temperatura ambiente y establecer un umbral para encender o apagar el ventilador desde la nube de Azure. La temperatura se mostrará en la pantalla LED. El usuario puede cambiar la resistencia para modificar la velocidad del ventilador entre los niveles 0, 1, 2, 3 (donde 0 significa apagado).

**Demostración 2**: La placa MT3620 funciona como un dispositivo de conectividad IoT para seguridad, conectado a un electrodoméstico existente. El electrodoméstico tiene su propio MCU —en esta demo, se usa un Arduino para simular la placa de control de un ventilador—. Esta placa puede obtener el estado del motor del ventilador; al analizar los datos, se puede detectar fallas y enviar a mantenimiento. Al presionar un botón, se simula el estado de salud del ventilador; si se presiona, indica que el dispositivo necesita mantenimiento.

### Hardware

**Lista de Componentes**

| Kit de desarrollo MT3620 | Grove - Sensor de Temperatura y Humedad | Grove - Relevador |
|--------------------------|-----------------------------------------|--------------------|
| ![MT3620](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg) | ![SHT3](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/SHT3_s.jpg) | ![Relevador](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/relay.jpg) |
| [Adquirir ahora](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html) | [Adquirir ahora](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT3-p-2655.html) | [Adquirir ahora](https://www.seeedstudio.com/Grove-Relay-p-769.html) |

| Grove - Potenciómetro Deslizante | Grove - Pantalla de 4 Dígitos | Grove - Botón LED Azul |
|-------------------------------|------------------------------|-------------------------|
| ![Potenciómetro](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/Slide_Potentiometer_s.jpg) | ![Pantalla](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/4_digital_s.jpg) | ![Botón](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/Grov-Blue_led_button.jpg) |
| [Adquirir ahora](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html) | [Adquirir ahora](https://www.seeedstudio.com/Grove-4-Digit-Display-p-1198.html) | [Adquirir ahora](https://www.seeedstudio.com/Grove-Blue-LED-Button-p-3104.html) |

| MT3620 Grove Shield | Seeeduino V4.2 | Base Shield |
|---------------------|----------------|--------------|
| ![Grove Shield](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/mt3620groveshieldb_s.jpg) | ![Seeeduino](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg) | ![Base Shield](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg) |
| [Adquirir ahora](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html) | [Adquirir ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html) | [Adquirir ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html) |

**Diagrama del Sistema**

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/demo1.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/demo1.png"/></a>

<a href="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/demo2.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/demo2.png"/></a>

**MT3620 Grove Shield**

Dado que el [SDK de Azure Sphere](http://aka.ms/AzureSphereSDK) aún no soporta ADC e I2C directamente en el MT3620, este shield sirve como interfaz entre el puerto UART del MT3620 y dispositivos externos I2C, como el sensor de temperatura I2C. La función principal del shield es facilitar la conexión con dispositivos I2C externos. Usando un chip ADC compatible con I2C, el desarrollador también puede leer datos analógicos desde el puerto analógico.

El [MT3620 Grove Shield](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html) incluye 2 chips: el **AD7992** (de analógico a I2C) y el **SC18IM700** (de I2C a UART), para habilitar las funciones de ADC e I2C desde el hardware. Así, la señal de sensores analógicos pasa por el AD7992 y luego por el SC18IM700 hacia el UART de la placa. Los sensores I2C también pasan por el SC18IM700 hacia el UART.

El [AD7992](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/AD7992.pdf) es un ADC de 12 bits, bajo consumo, de aproximación sucesiva con interfaz compatible con I2C. Convierte las señales analógicas A0 y A1 en datos I2C.

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/ADC_2_I2C.png)

El [SC18IM700](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/SC18IM700.pdf) está diseñado como interfaz entre un puerto UART estándar de un microcontrolador y un bus serial I2C, permitiendo que el microcontrolador se comunique directamente con dispositivos I2C. Convierte señales SDA/SCL hacia GPIO26_TXD0 y GPIO28_RXD0.

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/I2C_2_UART.png)

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/MT3620_Grove_Shield-2018-09-11.png)

<div style={{textAlign: 'center'}}>MT3620 Grove Shield Hardware Overview</div>

**Conexión de Hardware**

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/MT3620_demo_Front.jpg)

<div style={{textAlign: 'center'}}>Front View of hardware setup</div>

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/MT3620_demo_backside.jpg)

<div style={{textAlign: 'center'}}>Top View of hardware setup</div>

1. Conecta el botón LED azul Grove al puerto 2 del Grove Base Shield.  
2. Conecta la señal PWM del ventilador al puerto 5 del Grove Base Shield.  
3. Conecta el puerto 7 (puerto serial por software) del Grove Base Shield al UART3 del MT3620 Grove Shield. Corta el cable Vcc (rojo) y deja conectados TX/RX/GND para la comunicación serial.  
4. Conecta el Grove Base Shield al Seeeduino/Arduino.  
5. Conecta la pantalla de 4 dígitos Grove al puerto GPIO4 del MT3620 Grove Shield.  
6. Conecta el sensor de temperatura y humedad Grove (SHT31) al puerto I2C del MT3620 Grove Shield.  
7. Conecta el relevador Grove al puerto GPIO0 del MT3620 Grove Shield y su salida al ventilador para controlar encendido/apagado.  
8. Conecta el potenciómetro deslizante Grove al puerto analógico del MT3620 Grove Shield.  
9. Conecta el Grove Shield a la placa de desarrollo Azure Sphere MT3620.  
10. Conecta el cable USB al kit MT3620 y al PC.  
11. Conecta el cable USB al Arduino/Seeeduino y al PC.  
12. Conecta la fuente de alimentación al ventilador.

:::caution
Asegúrate de que el interruptor de voltaje del Grove Base Shield esté en posición **3.3 V**.
:::

### Software

El sistema de software incluye la simulación del ventilador inteligente y el sistema de desarrollo Azure Sphere MT3620.

- Para la simulación del ventilador inteligente, se utiliza una placa Arduino para leer la señal de entrada de presionado/liberado del botón LED azul Grove, generar la salida PWM para controlar la velocidad del ventilador, y también controlar el estado del LED del botón. Luego, se usa el puerto 7 para comunicarse con el sistema de desarrollo Azure Sphere MT3620 mediante UART.

- Para el sistema de desarrollo Azure Sphere MT3620, la pantalla LED de 4 dígitos Grove muestra la temperatura proveniente del sensor Grove de Temperatura y Humedad (SHT31), lo que demuestra la función del shield UART-I2C y la salida GPIO del MT3620. El potenciómetro deslizante Grove permite modificar la velocidad del ventilador, demostrando la función de entrada I/O del MT3620. Desde la nube de Azure se puede configurar un valor umbral de temperatura: cuando el valor supera el umbral, el relevador Grove enciende el ventilador; de lo contrario, lo apaga. El usuario también puede ajustar el potenciómetro deslizante Grove. Si ocurre un error en el funcionamiento del ventilador, el MCU del ventilador lo reportará por UART al MT3620, y este enviará el reporte de error a la nube de Azure para solicitar mantenimiento.

**Sistema de Simulación del Ventilador Inteligente**

1. Abre el IDE de Arduino.  
2. Copia el [código de simulación del ventilador inteligente para Arduino](https://github.com/Seeed-Studio/Azure_Sphere_Sample_Smart_Fan/blob/master/Arduino_code/Arduino_code.ino) y pégalo en el IDE.  
3. En el menú **Herramientas**, selecciona la placa Arduino/Seeeduino v4.  
4. En el mismo menú, selecciona el puerto COM correspondiente.  
5. Haz clic en "Subir" para cargar el código al Arduino/Seeeduino.

:::note
Si no sabes cómo subir el código, consulta esta [guía para subir código](https://wiki.seeedstudio.com/Upload_Code/).
:::

Sistema de Desarrollo Azure Sphere MT3620**

1. Descarga el [código de Azure Sphere](https://github.com/Seeed-Studio/Azure_Sphere_Sample_Smart_Fan).  
2. Sigue la guía de inicio rápido para Azure Sphere y abre el proyecto **AzureSphereDemo2.vcxproj**.  
3. Abre el archivo `main.c` dentro de la carpeta *Source Files*.  
4. Modifica las líneas 21 y 22 con tu `wifiSsid` y `wifiPsk`.  
5. Conecta la demo a Azure IoT.  
6. Haz clic en **Build → Rebuild Solution** para compilar y desplegar el código directamente al dispositivo.  
7. Usa la herramienta de depuración remota (Remote Debug Tool) para acceder al dispositivo.  
8. Observa en consola los datos de temperatura transmitidos en tiempo real.  
9. Configura Device Explorer y vincula los dispositivos físicos con los dispositivos en la nube.  
10. Presiona el sensor de temperatura y observa el mensaje de activación en la consola.  
11. Presiona el botón para simular un error en el ventilador y verifica el estado en consola.

Para ver la operación detallada, consulta el video correspondiente.

<iframe width="1000" height="669" src="https://www.youtube.com/embed/KXThR9RUNvw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Recursos

- **[Producto]** [Azure Sphere MT3620 Development Kit Product Brief](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/product_document/Azure%20Sphere%20MT3620%20Development%20Kit%20Product%20Brief-2018-09-10.pdf)
- **[Producto]** [Welcome to Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/)
- **[Certificación]** [Azure Sphere MT3620 Development Kit-CE](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-CE.zip)
- **[Certificación]** [Azure Sphere MT3620 Development Kit-FCC](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-FCC-FCC.zip)
- **[Certificación]** [Azure Sphere MT3620 Development Kit-MIC](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/certification/Azure%20Sphere%20MT3620%20Development%20Kit-MIC.zip)
- **[Biblioteca]** [MT3620 Grove Shield Library](https://github.com/Seeed-Studio/MT3620_Grove_Shield)
- **[Wiki]** [MT3620 Grove Shield](https://wiki.seeedstudio.com/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/)
- **[DataSheet]** [MediaTek MT3620 Product Brief](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/MediaTek%20MT3620%20Product%20Brief.pdf)
- **[DataSheet]** [DS_FT4232H](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/DS_FT4232H.pdf)
- **[Mechanical]** [Azure Sphere MT3620 Development Board-2D-Drawing](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/tree/master/mechanical)
- **[PyR]** [Foro de Azure Sphere](https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere)
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

