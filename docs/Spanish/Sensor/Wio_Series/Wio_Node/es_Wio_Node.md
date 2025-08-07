---
title: Wio Node
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio_Node/
slug: /es/Wio_Node
last_update:
  date: 07/25/2025
  author: Guillermo
---

# Wio Node: La versión pequeña y económica de Wio Link para IoT

Construir proyectos IoT es emocionante, ya que puedes conectar casi todo a tu alrededor y controlarlo. Sin embargo, a veces no es fácil, pues requiere mucho trabajo como hardware, programación, cables jumper y soldadura. Incluso un usuario experimentado puede tardar horas en manejar todo esto, y ni hablar de principiantes.

Para simplificar el desarrollo de proyectos IoT, Seeed lanzó **[Wio Link](https://www.seeedstudio.com/wiki/Wio_Link)** en **[Kickstarter](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat?ref=nav_search)**, que fue un gran éxito. Su slogan en Kickstarter definió bien su función principal:

**3 pasos. 5 minutos. ¡Construye tu propia aplicación IoT!**

Es simple y rápido, pero no siempre ideal. ¿Qué pasa si solo necesitamos 2 conectores Grove? ¿O si el espacio es limitado y Wio Link es muy grande? ¿O queremos reducir costos? Por eso, justo después de lanzar Wio Link, Seeed diseñó una solución más pequeña y económica: **Wio Node**.

[![Wio Node](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Front%26Back.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Front%26Back.png)

Como su nombre indica, Wio Node es un nodo Wi-Fi para conectar cosas en proyectos IoT. Si Wio Link es el hermano mayor, Wio Node es el hermano pequeño: es solo un cuarto del tamaño de Wio Link, pero con todas las funciones básicas.

El ecosistema de Wio Node incluye:  
- Hardware abierto: placa Wio Node  
- Aplicación móvil Open Source Wio Link  
- Implementación Open Source de servidor IoT  

La plataforma software para Wio Link también funciona con Wio Node.

[![Consíguelo ahora](https://files.seeedstudio.com/wiki/Wio_Node/pictures/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Node-p-2637.html)

:::caution
La función Wio IFTTT ha llegado a su fin (EOL), pero la app Wio sigue disponible. Puedes usar la API desde la app para leer sensores y controlar actuadores.
:::

## Características principales

- Sin programación hardware, sin breadboard, sin cables jumper, sin soldadura  
- Soporta muchos módulos Grove (consulta la lista en la app móvil)  
- Módulos Grove Plug-n-Play  
- Configuración visual en vez de programar microcontroladores  
- Actualización automática vía compilación en la nube y OTA  
- Convierte sensores físicos en APIs RESTful virtuales  
- Apps Android & iOS para gestión de Wio Node  
- Soporte IFTTT vía canal Seeed  
- Certificado CE/FCC/TELEC para módulo ESP-WROOM-02

## Especificaciones técnicas

| General                    | Valor                   | Gestión de energía       | Valor           |
|----------------------------|-------------------------|-------------------------|-----------------|
| **Tamaño**                 | 28mm x 28mm             | **Corriente DC por pin I/O** | 12mA           |
| **Cristal**                | 26MHz                   | **Voltaje entrada (Micro USB)** | 5V            |
| **Memoria Flash**          | 4MB (W25Q32B)           | **Voltaje entrada (Porta baterías)** | 3.4~4.2V    |
| **Protocolo Wi-Fi**        | 802.11 b/g/n            | **Corriente máxima de salida** | 1000mA MAX     |
| **Cifrado Wi-Fi**          | WEP/TKIP/AES            | **Voltaje operación**   | 3.3V            |
| **Conector Grove 1**       | UART0/I2C0/D0           | **Corriente de carga**  | 500mA MAX       |
| **Conector Grove 2**       | Analog/I2C1/D1          |                         |                 |

## Ideas de aplicación

Wio Node está diseñado para soluciones Wi-Fi simples y económicas en proyectos como:

- Hogar inteligente  
- Monitoreo ambiental inteligente  
- Juguetes divertidos  
- Web de las cosas  
- Internet de las cosas (IoT)

Explora muchos proyectos en nuestra [**receta**](https://community.seeedstudio.com/projects.html?t=Wio), donde podrás encontrar ideas interesantes o compartir las tuyas.

|Sistema de riego automatizado|Pared de LEDs conectada a Internet|Máquina de alimentar perros|
|-----------------------------|---------------------------------|---------------------------|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/1.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/3.png)|
|[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1274)|[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1594)|[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1066)|

|Monitor Kickstarter|Monitor llamadas perdidas|Tecla jefe|
|------------------|-------------------------|----------|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/4.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/5.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/6.png)|
|[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1081)|[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1059)|[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1077)|

:::note
Algunas recetas fueron hechas con Wio Link, pero se pueden reemplazar por Wio Node.
:::

## Vista general del hardware

[![Vista hardware Wio Node](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio_Node_illustrate.jpg)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio_Node_illustrate.jpg)

| Nº | Nombre         | Función                                 |
|-----|----------------|----------------------------------------|
| 1   | Función        | Configura el modo de trabajo del Wio Node |
| 2   | ESP8266        | Microcontrolador basado en ESP8266     |
| 3   | Reset          | Reinicia el dispositivo                 |
| 4   | Micro USB      | Alimenta el dispositivo y carga batería |
| 5   | Porta batería  | Conector JST 2.0 para batería LiPo 3.7V |
| 6   | Analog/I2C1/D1 | Puerto Grove para módulo Digital/I2C/Analógico |
| 7   | UART/I2C0/D0   | Puerto Grove para módulo UART/I2C/Digital |

### LEDs de estado

Cerca del botón FUNCION hay dos LEDs: azul y rojo.  
- **LED azul:** Indica el estado de red con estos patrones:  
  - Respiración: modo configuración  
  - Parpadeo rápido doble + apagado 1s: solicitando IP  
  - Parpadeo rápido simple + apagado 1s: conectando al servidor  
  - Encendido 1s / apagado 1s: nodo en línea  
  - Encendido fijo: nodo sin IP o sin conexión  
  - Parpadeo rápido (100ms encendido / 100ms apagado): OTA  
   
> Nota: El LED azul está en GPIO2, que es TX de UART1. Al descargar firmware, UART1 muestra datos transmitidos por UART0 y el LED parpadea. Tras el arranque, GPIO2 se configura como GPIO normal.

- **LED rojo:** Indica alimentación de módulos Grove. Controla la alimentación conjunta de los 6 puertos Grove mediante GPIO15. En modo deep sleep se apaga.

### Extra

Wio Node tiene cargador LiPo integrado para cargar baterías 3.7V vía puerto JST 2.0 cuando USB está conectado.

:::note
- Maneja con cuidado el conector USB micro-B para evitar daños.  
- La batería no está incluida, pero puedes comprar varias opciones en [Bazaar](https://www.seeedstudio.com/s/battery.html).
:::

## Comenzando: Controla un LED con Wio Node

Con este ejemplo básico podrás controlar un LED desde tu smartphone en 5 minutos.  
Necesitarás:

| Wio Node | Grove - LED | Cable Micro USB |
|----------|-------------|-----------------|
| ![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20Node2.png) | ![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Red%20LED.jpg) | ![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/48cmUSBc.jpg) |
| [Cómpralo aquí](https://www.seeedstudio.com/Wio-Node-p-2637.html) | [Cómpralo aquí](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html) | [Cómpralo aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) |

:::note
- Necesitarás un smartphone (Android 4.1+ o iOS 7+).  
- Grove - LED incluye cable Grove.
:::

### Paso 1: Instala la app Wio Link (Android / iOS)

Descarga la app Wio Link desde:  

| Android | iOS |
|---------|-----|
| [![Android](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Android%20Robot%20new.jpg)](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap) | [![iOS](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Apple%20new.jpg)](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8) |

:::note
Asegúrate que tu Android sea 4.1 o superior, iOS 7 o superior.
:::

### Paso 2: Crea tu cuenta

- La primera vez, la app pedirá autorización para GPS, acepta y regístrate.  
- Si ya tienes cuenta, revisa la ubicación del servidor antes de iniciar sesión.

:::note
Seleccionar el servidor incorrecto puede impedir la conexión al Wio Node.
:::

![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)

### Paso 3: Conecta Wio Node a Internet

- Mantén presionado el botón CONFIG hasta que el LED azul haga efecto respiración (parpadeo suave). Está en modo configuración y detectable por la app.
- Pulsa “Agregar tu primer dispositivo”.
- Elige Wio Node.
- Al pulsar “Ir a lista Wi-Fi” te llevará a la configuración Wi-Fi del smartphone.

![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node%201.png)

- Busca Wio Node en la lista Wi-Fi (nombre tipo `wio_xxxxxx`) y conéctate.
- Recibirás una notificación, regresa a la app.
- Selecciona la red Wi-Fi de tu hogar o empresa.

![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node2.png)

- Si la red Wi-Fi tiene contraseña, introdúcela.
- Ponle un nombre especial a cada Wio Node para identificarlos fácilmente.

![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20to%20Wio%20node3.png)

### Paso 4: Interconecta módulos virtualmente y actualiza firmware

- Pulsa el Wio Node en la app para ir a la interfaz principal.
- Selecciona el conector Grove izquierdo (D0).
- Como LED es un dispositivo de salida, elige la categoría de salida.
- Selecciona el icono de bombilla.
- El botón inferior cambiará a rojo y “View API” a “Update Firmware”, pulsa “Update Firmware”.

![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Connect%20modules%20with%20Wio%20node.png)

- Conecta el Grove-LED real al puerto D0 de Wio Node.

![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/Wio_Node_Grove_LED.JPG)

### Paso 5: Prueba la aplicación usando APIs

- Con el LED conectado, pulsa “View API” para ver la API de Wio Node.
- Introduce “1” o “0” en el área “Test Request”, pulsa “Post” y observa qué sucede.

![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/change%20the%20valure%20to%20see%20what%20will%20happen.png)

## Comienza con IFTTT & DoButton

---

¿No sabes programar? No te preocupes, con la ayuda de [IFTTT](https://en.wikipedia.org/wiki/IFTTT) puedes crear proyectos simples sin necesidad de código.

IFTTT significa "If This Then That". Es un servicio web gratuito que permite crear cadenas de instrucciones condicionales simples llamadas "recetas", que se activan según cambios en otros servicios web como Gmail, Facebook, Instagram, etc.  

¿Cómo funciona IFTTT con Wio Node?  
Seeed proporciona un servicio en la nube en [wio.seeed.io](https://wio.seeed.io) que intercambia datos e instrucciones entre IFTTT y Wio Node. Así, creando recetas sencillas, puedes controlar dispositivos sin programar.

![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/WioLink-Workshop.png)

- Si no tienes cuenta IFTTT, regístrate [aquí](https://ifttt.com/join).
- Si ya tienes cuenta, conecta Seeed [aquí](https://ifttt.com/recipes/search?q=seeed) o busca "Seeed" en el sitio de IFTTT. Encontrarás 9 recetas para aprender a usarlo.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/IFTTT%20recipes.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/IFTTT%20recipes.png)

### ¿Qué es DoButton?

DoButton es una app de IFTTT que te permite crear botones personalizados para controlar tu IoT desde el móvil con solo un toque. Aquí dos ejemplos que muestran cómo usar IFTTT y DoButton en aplicaciones útiles:

|**IFTTT**|**DoButton**|
|:--------|:----------|
|**[Receta]** [Riego automático sin código](https://community.seeedstudio.com/project_detail.html?id=1080)|**[Receta]** [Alimenta a tus mascotas cuando no estés](https://community.seeedstudio.com/project_detail.html?id=1066)|
|**[Video]** [Cómo usar IFTTT](https://vimeo.com/148590984)|**[Video]** [Cómo usar DoButton](https://vimeo.com/146988454)|

## Guía avanzada

---

¿Estos ejemplos te parecen muy simples? ¿Quieres hacer proyectos más complejos? Aquí tienes las mejores guías para usuarios avanzados que quieren exprimir Wio Node al máximo, desplegar servidores privados e incluso escribir drivers para módulos.

[![Ir a la guía avanzada](https://files.seeedstudio.com/wiki/Wio_Node/pictures/GOTO_ADVANCED_GUIDE.png)](https://github.com/Seeed-Studio/Wio_Link/wiki)

Esta guía cubre:

- Referencia API  
- Guía de despliegue de servidor  
- Guía avanzada para usuarios  
- Cómo escribir drivers para módulos Wio Link

:::note
La guía está escrita para Wio Link, pero también aplica para Wio Node.
:::

## Lista de soporte Grove

| SKU       | Nombre                                      | Interfaz | Driver             | Enlace    |
|----------|--------------------------------------------|----------|-------------------    |-----------|
|101020008 |    Grove - Moisture Sensor                 |Análogo    |itself                 | [link](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html) |
|101020014 |    Grove - Light Sensor                    |Análogo    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html) |
|101020015 |    Grove - Temperature Sensor              |Análogo    |itself                 | [link](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html) |
|101020017 |    Grove - Rotary Angle Sensor             |Análogo    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html) |
|101020022 |    Grove - Light Sensor(P)                 |Análogo    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Light-Sensor(P)-p-1253.html) |
|101020023 |    Grove - Sound Sensor                    |Análogo    |ifself                 | [link](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html) |
|101020027 |    Grove - Electricity Sensor              |Análogo    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html) |
|101020036 |    Grove - Slide Potentiometer             |Análogo    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html) |
|101020042 |    Grove - 80cm Infrared Proximity Sensor  |Análogo    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-80cm-Infrared-Proximity-Sensor-p-788.html) |
|101020043 |    Grove - UV Sensor                       |Análogo    |itself                 | [link](https://www.seeedstudio.com/Grove-UV-Sensor-p-1540.html) |
|101020048 |    Grove - Rotary Angle Sensor(P)          |Análogo    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor(P)-p-1242.html) |
|101020063 |    Grove - Loudness Sensor                 |Análogo    |itself                 | [link](https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html) |
|101020076 |    Grove - Luminance Sensor                |Análogo    |itself                 | [link](https://www.seeedstudio.com/Grove-Luminance-Sensor-p-1941.html) |
|101020078 |    Grove - Air quality sensor v1.3         |Análogo    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html) |
|101020003 |    Grove - Button                          |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Button-p-766.html) |
|101020004 |    Grove - Switch(P)                       |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html) |
|101020005 |    Grove - Collision Sensor                |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Collision-Sensor-p-1132.html) |
|101020009 |    Grove - Line Finder                     |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Line-Finder-p-825.html) |
|101020018 |    Grove - Water Sensor                    |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html) |
|101020020 |    Grove - PIR Motion Sensor               |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html) |
|101020025 |    Grove - Tilt Switch                     |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html) |
|101020037 |    Grove - Touch Sensor                    |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html) |
|101020038 |    Grove - Magnetic Switch                 |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html) |
|101020046 |    Grove - Hall Sensor                     |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Hall-Sensor-p-965.html) |
|101020049 |    Grove - Flame Sensor                    |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html) |
|111020000 |    Grove - Button(P)                       |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Button(P)-p-1243.html) |
|101020073 |    Grove - Electromagnet                   |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html) |
|101020090 |    Grove - Water Atomization v1.0          |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/s/101020090.html#) |
|103020004 |    Grove - Solid State Relay               |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html) |
|103020005 |    Grove - Relay                           |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Relay-p-769.html) |
|103020008 |    Grove - MOSFET                          |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-MOSFET-p-1594.html) |
|103020010 |    Grove - 2-Coil Latching Relay           |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-2-Coil-Latching-Relay-p-1446.html) |
|103020014 |    Grove - Dry-Reed Relay                  |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Dry-Reed-Relay-p-1412.html) |
|104020001 |    Grove - Variable Color LED              |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html) |
|104020002 |    Grove - Purple LED (3mm)                |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Purple-LED-(3mm)-p-1143.html) |
|104020005 |    Grove - LED String Light                |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html) |
|104030005 |    Grove - Red LED                         |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html) |
|104030007 |    Grove - Green LED                       |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Green-LED-p-1144.html) |
|104030009 |    Grove - White LED                       |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-White-LED-p-1140.html) |
|104030010 |    Grove - Blue LED                        |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Blue-LED-p-1139.html) |
|104030014 |    Grove - Multi Color Flash LED (5mm)     |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Multi-Color-Flash-LED-(5mm)-p-1141.html) |
|105020003 |    Grove - Vibration Motor                 |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html) |
|105020004 |    Grove - Mini Fan                        |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Mini-Fan-p-1819.html) |
|105020005 |    Grove - EL Driver                       |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-EL-Driver-p-2269.html) |
|107020000 |    Grove - Buzzer                          |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) |
|107020001 |    Grove - Speaker                         |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Speaker-p-1445.html) |
|101020034 |    Grove - 3-Axis Digital Compass          |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html) |
|101020039 |Grove - 3-Axis Digital Accelerometer(±1.5g) |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(%C2%B11.5g)-p-765.html) |
|101020050 |    Grove - 3-Axis Digital Gyro             |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html) |
|101020072 |    Grove - Barometer Sensor (BMP180)       |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html) |
|101020083 |    Grove - Gesture                         |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Gesture-p-2463.html) |
|101020088 |    Grove - Multichannel Gas Sensor         |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-p-2502.html) |
|103020013 |    Grove - I2C ADC                         |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-I2C-ADC-p-1580.html) |
|104030008 |    Grove - OLED Display 1.12''             |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-OLED-Display-0.96''-p-781.html) |
|104030011 |    Grove - OLED Display 0.96''             |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-OLED-Display-0.96''-p-781.html) |
|105020001 |    Grove - I2C Motor Driver                |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html) |
|107020006 |    Grove - I2C FM Receiver                 |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-I2C-FM-Receiver-p-1953.html) |
|101020192 |    Grove - Barometer(BMP280)               |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP280)-p-2652.html) |
|101020193 |Grove - Temp&Humi&Barometer Sensor(BME280)  |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Temp%26Humi%26Barometer-Sensor-(BME280)-p-2653.html) |
|101020010 |    Grove - Ultrasonic Ranger               |Ditital   |itself                 | [link](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html) |
|101020016 |    Grove - Infrared Receiver               |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html) |
|101020019 |    Grove - Temperature&Humidity Sensor Pro |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html) |
|101020026 |    Grove - Infrared Emitter                |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html) |
|101020029 |    Grove - Infrared Reflective Sensor      |Otros    |itself                 | [link](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-p-1230.html) |
|101020030 |    Grove - Digital Light Sensor            |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html) |
|101020040 |    Grove - IR Distance Interrupter         |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html) |
|103020018 |    Grove - Recorder                        |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Recorder-p-1825.html) |
|104020006 |    Grove - LED Bar v2.0                    |UART      |itself                 | [link](https://www.seeedstudio.com/Grove-LED-Bar-v2.0-p-2474.html) |
|104030003 |    Grove - 4-Digit Display                 |UART      |itself                 | [link](https://www.seeedstudio.com/Grove-4-Digit-Display-p-1198.html) |
|316010005 |    Grove - Servo                           |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Servo-p-1241.html) |
|101020067 |    Grove - CO2 Sensor                      |UART      |itself                 | [link](https://www.seeedstudio.com/Grove-CO2-Sensor-p-1863.html) |

## FAQ

---

Aquí algunas preguntas frecuentes que recibimos de usuarios nuevos. Si tienes dudas usando Wio Node o cualquier producto Wio, visita la [Comunidad de Wio](https://community.seeedstudio.com/topics.html?t=Wio) donde expertos y usuarios avanzados te pueden ayudar y compartir ideas.

**Q1. ¿Cuál es la diferencia entre Wio Node y Wio Link?**

> Wio Node es como un mini Wio Link, tiene solo una cuarta parte del tamaño y es más barato. A pesar de eso, Wio Node mantiene todas las funciones de Wio Link. Si prefieres tamaño pequeño sobre más conectores Grove, Wio Node es la mejor opción.

**Q2. ¿Qué hacer si no se conecta con el servidor?**

> Cierra sesión y verifica que elegiste el servidor correcto antes de ingresar. Si no estás en China continental, elige el servidor global.

**Q3. ¿No puedo configurar Wio Node ni encontrarlo en la lista Wi-Fi?**

> Revisa el LED azul. Debe estar en modo "respiración" (parpadeo con efecto fade-in y fade-out, fácil de reconocer). Solo en ese modo Wio Node aparecerá en la lista Wi-Fi.

**Q4. ¿Cómo conectar más de un dispositivo I2C?**

> No es posible conectar dos dispositivos Grove-I2C directamente en los dos puertos I2C de Wio Node al mismo tiempo. Usa un [Grove-I2C hub](https://www.seeedstudio.com/s/I2C%20hub.html) para dividir un puerto I2C en 4. ¡Consíguelo en el [Bazaar](https://www.seeedstudio.com/s/I2C%20hub.html)!

**Q5. ¿Se puede poner Wio Node en modo suspensión (sleep)?**

> Sí, revisa la última API donde puedes mandar a Wio Node al modo sleep.

## Visualizador de Esquemáticos Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_Node/Recources/Wio_Node_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **Documentación y referencias**
  - [API Reference](https://seeed-studio.github.io/Wio_Link/)
  - [Guía de Despliegue del Servidor](https://github.com/Seeed-Studio/Wio_Link/wiki/Server%20Deployment%20Guide)
  - [Cómo escribir drivers para módulos Wio Link](https://github.com/Seeed-Studio/Wio_Link/wiki/How-to-write-module-driver-for-Wio-Link%3F)
- **Software**
  - [Código fuente en Github](https://github.com/Seeed-Studio/Wio_Link)
- **Hardware**
  - [Esquemáticos en PDF](https://files.seeedstudio.com/wiki/Wio_Node/Recources/Wio%20Node%20v1.0.pdf)
  - [Esquemáticos en Eagle](https://files.seeedstudio.com/wiki/Wio_Node/Recources/Wio_Node_Schematics.zip)
- **Certificados**
  - [Certificado CE/FCC/TELEC (solo para módulo core ESP-WROOM-02)](https://files.seeedstudio.com/wiki/Wio_Node/Recources/CE-FCC-TELEC_Certified(only)_for_core_module_ESP-WROOM-02.zip)

## Proyectos

**Smart Home con Wio Link/Wio Node y Telegram App**  
Construye una casa inteligente con Wio Link o Wio Node y conéctala a un bot de Telegram.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/idreams/smart-home-with-wio-link-wio-node-and-telegram-app-831f78/embed' width='350'></iframe>

## Soporte Técnico & Foro de Discusión

Gracias por elegir nuestros productos. Estamos aquí para apoyarte y que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para distintas necesidades y preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
