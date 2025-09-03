---
description: Wio Terminal LoRaWan Chassis with Antenna-built-in LoRa-E5 and GNSS, EU868/US915
title: Chasis LoRaWAN para Wio Terminal con Antena Integrada, LoRa-E5 y GNSS (EU868/US915)
keywords:
- Wio_terminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio_Terminal_LoRaWan_Chassis_with_Antenna-built-in_LoRa-E5_and_GNSS_EU868_US915
last_update:
  date: 07/27/2025
  author: Guillermo
---

![](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/114992728_Feature-02.png)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Wio-Terminal-Chassis-LoRa-E5-and-GNSS-p-5053.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

El chasis LoRaWAN para Wio Terminal con antena integrada, LoRa-E5 y GNSS (EU868/US915), incorpora el módulo LoRa-E5 STM32WLE5JC, impulsado por un núcleo MCU ARM Cortex M4 de ultra bajo consumo y el chip LoRa SX126x. Este es un módulo de radio inalámbrico que admite LoRa y el protocolo LoRaWAN en las bandas de frecuencia EU868 y US915, así como las modulaciones (G)FSK, BPSK, (G)MSK y LoRa. Este chasis ofrece a tus placas de desarrollo un alcance de transmisión ultra largo gracias a su conectividad Grove plug-and-play.

Como evolución de nuestra versión anterior - [Grove - LoRa Radio](https://www.seeedstudio.com/Grove-LoRa-Radio-868MHz.html) - basada en el [transceptor RFM95](https://www.seeedstudio.com/RFM95-Ultra-long-Range-Transceiver-Module-LoRa-Module-support-868M-frequency-p-2807.html), el Grove LoRa-E5 ahora incorpora el [módulo STM32WLE5JC LoRa-E5](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html), ofreciendo un rendimiento superior y facilidad de uso.

El módulo LoRa-E5 STM32WLE5JC es la parte funcional principal integrada en el chasis LoRaWAN para Wio Terminal. Este módulo combina un núcleo ARM Cortex M4 con un chip LoRa SX126x en un solo encapsulado, siendo el primero en su tipo. Está certificado por FCC y CE. (Más información en el [wiki de LoRa-E5](https://wiki.seeedstudio.com/LoRa-E5_STM32WLE5JC_Module/))

Comparativa entre los chips LoRa-E5 y RFM95:
![](https://files.seeedstudio.com/products/113990934/%E8%8A%AF%E7%89%87%E5%AF%B9%E6%AF%94_2021.3.4.png)

Al conectar el chasis LoRaWAN con antena integrada al Wio Terminal, tus dispositivos pueden comunicarse y controlar el LoRa-E5 fácilmente mediante comandos AT por UART. Grove LoRa-E5 es ideal para desarrollo y pruebas de dispositivos IoT de bajo consumo y largo alcance, como agricultura inteligente, oficinas inteligentes e industria 4.0. Está diseñado para entornos industriales con un amplio rango de temperatura (-40℃ \~ 85℃), alta sensibilidad (-136 dBm a -137 dBm) y salida de potencia entre 10 dBm y 22 dBm.

## Características

* LoRa-E5 (STM32WLE5JC) incorporado
* Soporta protocolo LoRaWAN en bandas EU868/US915
* Alcance de transmisión ultra largo de hasta 10 km (en espacio abierto)
* Control por comandos AT vía UART
* Prototipado rápido con conectores Grove plug-and-play
* Bajo consumo de energía y alto rendimiento

## Vista de Hardware

![](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/114992728_Size-08.png)

1. LoRa-E5 STM32WLE5JC ([Hoja de datos](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf))
2. Conector MHF IPEX
3. Antena de hilo
4. Conector Grove
5. LEDs indicadores

## Plataformas Compatibles

| Arduino                                                                           | Raspberry Pi                                                                             |                                                                                 |                                                                                 |                                                                                    |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Especificaciones

|                        | Parámetros Generales       |
| ---------------------- | -------------------------- |
| Voltaje de entrada     | 3.3V / 5V                  |
| Potencia de salida     | Hasta +20 dBm a 3.3V       |
| Frecuencia de trabajo  | 868/915 MHz                |
| Protocolo              | LoRaWAN                    |
| Sensibilidad           | -116.5 dBm \~ -136 dBm     |
| Modulación             | LoRa, (G)FSK, (G)MSK, BPSK |
| Corriente              | Sólo 60 uA en modo sleep   |
| Dimensiones            | 20 × 40 mm                 |
| Temperatura de trabajo | -40℃ \~ 85℃                |

## Lista de Partes

| Producto                                                                           | Cantidad |
| ---------------------------------------------------------------------------------- | -------- |
| Chasis LoRaWAN para Wio Terminal con Antena Integrada LoRa-E5 y GNSS (EU868/US915) | 1        |
| Antena                                                                             | 1        |

## Aplicaciones

* Rastreador GPS LoRaWAN
* Probador de campo LoRaWAN
* Agricultura inteligente
* Ciudades inteligentes
* Fábricas inteligentes
* Prototipado rápido de dispositivos LoRa con Wio Terminal
* Desarrollo de aplicaciones de comunicación inalámbrica de largo alcance
* Investigación y aprendizaje de LoRa y LoRaWAN

# Primeros Pasos

**Materiales requeridos**

| Wio Terminal                                                                          | Chasis LoRaWAN                                                                                   | Chasis con Batería                                                                             |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| ![img](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/Wio-Terminal-Wiki.jpg) | ![img](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/114992728_Feature-14.png)         | ![img](https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/45.png)                         |
| [Consíguelo aquí](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)               | [Consíguelo aquí](https://www.seeedstudio.com/Wio-Terminal-Chassis-LoRa-E5-and-GNSS-p-5053.html) | [Consíguelo aquí](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html) |

# Proyecto 1: Probador de Gateway LoRaWAN con Wio Terminal

## Introducción

El **Probador de Gateway LoRaWAN** es una herramienta portátil multipropósito para detectar la cobertura de gateways LoRaWAN. Te informa si la señal está dentro de un rango aceptable. Diseñado para facilitar el despliegue de redes LoRaWAN, ayuda a determinar la ubicación óptima del gateway.

Antes de desarrollar este proyecto, analizamos el mercado de testers LoRa, cuyo precio va de \$200 a \$500, aunque muchos carecen de funciones críticas como app backend para reporte de red, tiempo actual, estado, entre otros. Por eso creamos esta versión de bajo costo y mayores capacidades, basada en el trabajo de [**Paul Pinault**](https://github.com/disk91/WioLoRaWANFieldTester). Agradecemos el acceso a su implementación y su contribución. Usamos su interfaz para el Wio Terminal junto con los módulos LoRa-E5 y GNSS.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/%E5%9C%BA%E6%99%AF%E5%9B%BE2.jpg" /></div>

## Características

* Menú para selección de modos: control de potencia, SF, número de pruebas, etc.
* Soporte para múltiples regiones (EU868, US915, US915HYBRID, AS923, KR920, IN865)
* Visualización del estado de conexión y tramas uplink/downlink
* Historial de resultados de pruebas
* Gráficos de RSSI y SNR
* Muestra número de uplinks, downlinks y tasa de pérdida de paquetes
* Reporte de ubicación GPS, hora actual y número de satélites
* Información del dispositivo: DevEui, AppEui, AppKey, versión de firmware, etc.
* Configuración de DevEui, AppEui y AppKey

## Hardware

El hardware utilizado en este proyecto es más económico que otras alternativas, con un costo total menor a \$100 USD.

* [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
* [**Chasis con batería 650mAh**](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)
* [**Chasis LoRa-E5 y GNSS**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## Uso

### Instrucciones para Wio Terminal

El Probador de Gateway LoRaWAN envía tramas bajo demanda al gateway periódicamente. Luego espera una respuesta ACK. Si no la recibe, vuelve a enviar hasta el número de intentos definido. El ACK indica que el backend ha recibido el mensaje, que se visualiza en pantalla.

El proyecto está basado en Arduino, por lo que usaremos el IDE de Arduino y librerías asociadas. Si es tu primera vez usando el Wio Terminal, sigue esta guía: [**Primeros pasos con Wio Terminal**](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/).

### Librerías requeridas

* [**Seeed\_Arduino\_SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD)
* [**TinyGPS**](https://github.com/mikalhart/TinyGPSPlus)
* [**LovyanGFX**](https://github.com/lovyan03/LovyanGFX)

### Nota

Al subir el código, selecciona el modo "slave".

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/ROLA.png" /></div>

### Configuración de consola The Things Network

Este proyecto se prueba con [**TheThingsNetwork**](https://www.thethingsnetwork.org). Instrucciones:

**Paso 1:** Accede a [**TTN**](https://www.thethingsnetwork.org) y crea una cuenta. Luego configura tu gateway.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gataway1.png" /></div>

**Paso 2:** Añadir gateway:

* Propietario
* ID de Gateway
* EUI del Gateway
* Nombre del Gateway

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway2.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway3.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway4.png" /></div>

**Paso 3:** Añadir aplicación:

* Propietario
* ID de la aplicación
* Nombre de la aplicación

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_applications.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/application2.png" /></div>

**Paso 4:** Añadir nodo LoRa:

* Marca: SenseCAP
* Modelo: LoRa-E5
* Versión hardware: predeterminada
* Versión firmware: predeterminada
* Perfil: según tu región
* Plan de frecuencias
* AppEUI
* DevEUI
* AppKey
* ID del dispositivo

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_device1.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_device4.png" /></div>

**Paso 5:** Añadir código para decodificar datos:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_decode1.png" /></div>

```cpp
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port === 8) {
    decoded.latitude   = (bytes[3] | (bytes[2]<<8) | (bytes[1]<<16)  | (bytes[0]<<24)) /1000000;
    decoded.longitude  = (bytes[7] | (bytes[6]<<8) | (bytes[5]<<16)  | (bytes[4]<<24)) /1000000;
    decoded.altitude   = (bytes[9] | (bytes[8]<<8));
    decoded.satellites = bytes[9];
  }
 
  return decoded;
}
```

Aquí tienes la traducción al español para esta sección del **Paso 5** y el **Proyecto 2** con formato Markdown adaptado para tu documento:

Paso 5: Verificar el resultado en TheThingsNetwork

Ve al gateway y luego haz clic en **"Live data"** (Datos en vivo).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_data.png" /></div>

### Instrucciones para el Wio Terminal

Cada dispositivo LoRa tiene un número de serie único. Después de conectar el dispositivo LoRa al Wio Terminal, se mostrarán en la primera página el **DevEUI**, **AppEUI** y **AppKey**. Debes rellenar el LoRa ID y el Gateway ID en el servidor.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/rola_tester_ID.png" /></div>

Se muestran datos de **RSSI** y **SNR**, así como barras de señal, barra SNR y pérdida de paquetes después de recibir el ACK de respuesta.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/RSSI.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/SNR.png" /></div>

Este dispositivo también cuenta con función GPS, pero no se recomienda usarlo en espacios cerrados, ya que afecta la recepción de satélites.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/GPS.png" /></div>

## Esquemático

Consulta el directorio de la placa para detalles sobre PCB y componentes.
Aquí tienes una versión simplificada del esquemático para implementación DIY.
Si deseas más detalles, revisa la lista de archivos.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/LORA_PCB.png" /></div>

## Caja / Enclosure

El modelo para impresión 3D de la caja se encuentra en la lista de archivos como **PCBA WioTerminal Chassis H** y archivos PCB.
Ahí encontrarás todo el diseño y también el archivo fuente FreeCAD por si quieres modificarlo o mejorarlo.

Algunas vistas impresas en 3D:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/feature.png"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/preview.png"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/back.png"/></div>

# Proyecto 2: Nodo LoRa con WioTerminal - Monitor Inteligente de Jardín IoT

## Introducción

El Monitor Inteligente de Jardín IoT usa el Wio Terminal Chassis-LoRa-E5 y GNSS como dispositivo IoT. Básicamente envía un paquete (frame) al gateway y luego lo transfiere al servidor (uplink). En este caso, puedo agrupar otros datos en el paquete para subirlos, como GPS, temperatura y humedad, o cualquier otro dato de sensor que desees.

Después de recibir el ACK (respuesta downlink) del dispositivo LoRa, el estado de conexión cambiará a **conectado** y se mostrará en el Wio Terminal, lo que indica que el mensaje fue enviado al servicio backend. Luego puedes ver los datos en la plataforma TheThingsNetwork, aunque también puedes usar otras plataformas compatibles con Wio Terminal Chassis-LoRa-E5 y GNSS.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/%E5%B8%A6%E4%BC%A0%E6%84%9F%E5%99%A8%E5%9C%BA%E6%99%AF%E5%9B%BE.jpg"/></div>

## Características

* El dispositivo LoRa puede mostrar DevEui, AppEui y AppKey en la primera página.
* Muestra la temperatura actual, humedad y hora actual.
* Muestra longitud, latitud y número de satélites.
* Muestra estado del dispositivo y conexión con TTN.

## Hardware necesario

* [**WioTerminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
* [**Wio Terminal Chassis - Battery (650mAh)**](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)
* [**Grove - Sensor de Temperatura y Humedad (DHT11)**](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html)
* [**Wio Terminal Chassis - LoRa-E5 y GNSS**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## Uso

Este proyecto está basado en la plataforma Arduino, por lo que usaremos Arduino IDE y varias librerías de Arduino. Si es la primera vez que usas Wio Terminal, aquí tienes una guía rápida para [**Comenzar con Wio Terminal**](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/).

Librerías requeridas:

* [**Seeed\_Arduino\_SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD)
* [**TinyGPS**](https://github.com/mikalhart/TinyGPSPlus)
* [**Grove\_Temperature\_And\_Humidity\_Sensor**](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)

### Configuración en la consola de TheThingsNetwork

En este proyecto, pruebo el tester LoRa en la plataforma [**TheThingsNetwork**](https://www.thethingsnetwork.org), las instrucciones son las siguientes:

**Paso 1:** Entra al [**sitio web de TTN**](https://www.thethingsnetwork.org), crea tu cuenta y luego ve a **gateways** para configurar tu dispositivo.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gataway1.png"/></div>

**Paso 2:** Añade el dispositivo gateway:

* Owner (Propietario)
* Gateway ID
* Gateway EUI
* Gateway Name (Nombre)

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway2.png"/></div>  
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway3.png"/></div>  
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_gateway4.png"/></div>  

**Paso 3:** Añade la aplicación:

* Owner
* Application ID
* Application Name

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_applications.png"/></div>  
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/application2.png"/></div>  

**Paso 4:** Añade el nodo LoRa:

* Brand (Seleccionar Sense CAP)
* Model (Seleccionar LoRa-E5)
* Hardware Ver (Por defecto)
* Firmware Ver (Por defecto)
* Profile (La región según tu ubicación)
* Frequency Plan
* AppEUI
* DevEUI
* AppKey
* End Device ID

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_device1.png"/></div>  
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_device4.png"/></div>  

**Paso 5:** Añade el código para decodificar los datos:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_decode1.png"/></div>

```cpp
function Decoder(bytes, port) {
  var decoded = {};
  if (port === 8) {
    decoded.temp = bytes[0] << 8 | bytes[1];
    decoded.humi = bytes[2] << 8 | bytes[3];
    decoded.latitude = (bytes[7] | (bytes[6] << 8) | (bytes[5] << 16) | (bytes[4] << 24)) / 1000000;
    decoded.longitude = (bytes[11] | (bytes[10] << 8) | (bytes[9] << 16) | (bytes[8] << 24)) / 1000000;
    decoded.altitude = (bytes[15] | (bytes[14] << 8) | (bytes[13] << 16) | (bytes[12] << 24)) / 100;
    decoded.satellites = bytes[16];
  }
  return decoded;
}
```

**Paso 5:** Verifica el resultado en TheThingsNetwork

Ve al gateway y haz clic en **"Live data"**.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TTN_dataTEMP1.png"/></div>

### Nota

Al subir el código, selecciona el modo **slave**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/ROLA.png" /></div>

Cada dispositivo LoRa tiene un número de serie único. Luego de conectar el dispositivo LoRa al Wio Terminal, se mostrarán el DevEUI, AppEUI y AppKey en la primera página. Debes ingresar el LoRa ID y Gateway ID en el servidor.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/temp_ID.png" /></div>

En la segunda página se mostrarán temperatura, humedad, hora actual, longitud, latitud y número de satélites.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/TEMP_GPS_DATA.png" /></div>

## PlatformIO

También ofrecemos código para PlatformIO.

* [IcingTomato/LoRaNode-with-WioTerminal-IoT-Smart-Garden-Monitor](https://github.com/IcingTomato/LoRaNode-with-WioTerminal-IoT-Smart-Garden-Monitor)
* [IcingTomato/WioTerminal-LoRaWAN-Gateway-Tester](https://github.com/IcingTomato/WioTerminal-LoRaWAN-Gateway-Tester)

## Recursos

**Datasheets:**

* [Wio Terminal Chassis - LoRa-E5 and GNSS v1.2.zip](http://files.seeedstudio.com/wiki/LoRa_WioTerminal/res/WioTerminalChassis-LoRa-E5andGNSSv1.2SCH&PCB.zip)
* [Datasheet y especificaciones de LoRa-E5](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf)
* [Especificación de comandos AT LoRa-E5](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)
* [Datasheet STM32WLE5JC](https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf)

**Certificaciones:**

* [Certificación CE-VOC-RED LoRa-E5-HF](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf)
* [Certificación FCC DSS LoRa-E5-HF](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf)
* [Certificación FCC DTS LoRa-E5-HF](https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf)

**SDK relevante:**

* [Paquete STM32Cube MCU para serie STM32WL](https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diversos canales de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varias vías de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
