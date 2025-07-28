---
title: Wio Extension RTC (Reloj de Tiempo Real)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Extension-RTC/
slug: /es/Wio-Extension-RTC
last_update:
  date: 07/26/2025
  author: Guillermo
---

![](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/p/r/preview_4_2.png)


La **Wio Extension - RTC** es una placa de expansión para **Wio LTE** que proporciona la función de **reloj en tiempo real (RTC)** a través del puerto **I2C**. Esta placa está basada en el chip **NXP PCF8523**, el cual puede proporcionar información de año, mes, día, día de la semana, horas, minutos y segundos.

Esta placa se alimenta mediante un puerto **Micro-USB**, se comunica con el Wio LTE a través del puerto **I2C**, y también proporciona una **salida de alimentación USB**, la cual puede ser activada o desactivada mediante un interruptor a bordo. Esto permite utilizar la placa **Wio Extension - RTC** para alimentar el Wio LTE.  
Cuando se utiliza esta extensión como fuente de energía para las placas Wio (como se muestra en la siguiente imagen), la corriente en modo de espera de todo el sistema es menor a **1 µA**.

<p style={{}}><a href="https://www.seeedstudio.com/Wio-Extension-RTC-p-4002.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- **Extensibilidad**
- Capacidad de alimentar placas Wio con voltaje de **3.3 V**

## Vista General del Hardware

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/pinout.jpg" /></a></p> 
  </figure></div>

![](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/rtc_diagram.png)

## Platformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


## Primeros Pasos

### Jugar con Arduino

**Materiales requeridos**

| Placa Wio LTE | Wio-Extension-RTC | Grove - Buzzer | Grove - LED Rojo |
|--------------|-------------------|----------------|------------------|
|![Placa Wio LTE](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedfile2018-06bazaar837387_img_0005a.jpg)|![RTC](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/p/r/preview_4_2.png)|![Buzzer](https://files.seeedstudio.com/wiki/Grove_Buzzer/images/Grove%20Buzzer.jpg)|![LED Rojo](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedfile2018-09bazaar939479_1040300054.jpg)|
|[Consíguelo aquí](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Consíguelo aquí](https://www.seeedstudio.com/Wio-Extension-RTC-p-4002.html)|[Consíguelo aquí](https://www.seeedstudio.com/Grove-Buzzer.html)|[Consíguelo aquí](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|

> Como la Wio Extension - RTC simplemente controla el suministro de energía USB configurado vía I2C, puedes usar esta placa para gestionar la alimentación de casi cualquier placa MCU que se alimente por USB.

:::note
**1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Asegúrate de usar un cable USB con 4 hilos internos; los cables de 2 hilos no transfieren datos. Si no estás seguro de tu cable, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar uno.

**2** Cada módulo Grove incluye un cable Grove al comprarlo. Si pierdes el cable, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para adquirir más.
:::

#### Hardware

- **Paso 1.** Conecta la Wio-Extension-RTC al puerto **I2C** de la placa Wio LTE.
- **Paso 2.** Conecta la placa Wio LTE a la PC mediante un cable USB.
- **Paso 3.** Conecta el [Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) o el [Grove - LED Rojo](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html) al puerto **D38** de la Wio LTE.

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/connection.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/connection.png" /></a></p>
  </figure>
</div>

#### Software

:::caution
Si esta es tu primera vez trabajando con Arduino, te recomendamos encarecidamente que revises [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de comenzar.  
El driver de esta placa depende del archivo de encabezado `Seeed STM32F4 Board (JP mirror) by Seeed K.K.`, por lo que aunque ya hayas seguido el tutorial para instalar tu placa Wio, necesitas realizar el siguiente paso.
:::

**Paso 1: Instalar la librería**

Abre el Arduino IDE, haz clic en **Archivo > Preferencias**, y copia la siguiente URL en **Additional Boards Manager URLs**:  
`http://www.seeed.co.jp/package_SeeedJP_index.json`  

![](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Preferences.png)

Haz clic en **Herramientas > Placa > Administrador de tarjetas**, y escribe `Wio` en el campo de búsqueda.

![](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Boards_Manager.png)

Selecciona `Seeed STM32F4 Board (JP mirror) by Seeed K.K.` y haz clic en **Instalar**. Este proceso puede tardar entre 5 minutos y media hora, dependiendo de la velocidad de tu conexión.

Luego, haz clic en **Herramientas > Administrar bibliotecas**, escribe `Wio` en el campo de búsqueda.

![](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Library_Manager.png)

Selecciona `Wio LTE for Arduino by Seeed K.K.` y haz clic en **Instalar**.

Descomprime el archivo [wiortc-sample.zip](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/wiortc-sample.zip), y abre `wiortc-sample.ino` en el Arduino IDE.

**Paso 2: Descargar el código**

1. Mantén presionado el botón **BOOT** en la parte trasera del Wio LTE y conecta el USB a la PC.  
2. Verás que aparece **STM BOOTLOADER** en el administrador de dispositivos.  
3. Selecciona **Herramientas → Placa → Wio_Tracker_LTE**.  
   ![Seleccionar Placa](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/Snipaste_2019-04-10_15-15-20.jpg)  
4. Selecciona **Sketch → Subir** para cargar el código en la Wio LTE.  
5. Presiona el botón **RST** para habilitar el puerto COM.

**Consejos**
> Cuando cargas código a la mayoría de placas Arduino, necesitas seleccionar el puerto COM correcto.  
> Pero en esta placa, debes dejar la configuración de COM en blanco.  

> ![Puerto COM vacío](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/port.jpg)

6. Usa el **Monitor Serial** para imprimir los mensajes serie.

```cpp
#include <WioLTEforArduino.h>
#include "WioRTC.h"

////////////////////////////////////////////////////////////////////////////////
// Defines

#define BOOT_INTERVAL   (30)  // [sec.]

////////////////////////////////////////////////////////////////////////////////
// Global variables

WioLTE Wio;
WioRTC Rtc;

////////////////////////////////////////////////////////////////////////////////
// setup and loop

void setup()
{
  delay(200);

  SerialUSB.begin(115200);
  SerialUSB.println("");
  SerialUSB.println("--- START ---------------------------------------------------");

  ////////////////////////////////////////
  // Low-level initialize

  SerialUSB.println("### I/O Initialize.");
  Wio.Init();

  SerialUSB.println("### Power supply ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);
  
  ////////////////////////////////////////
  // Device initialize
  
  SerialUSB.println("### Device initialize.");
  Wire.begin();
  Rtc.begin();

  ////////////////////////////////////////
  // Completed

  SerialUSB.println("### Completed.");
}

void loop()
{
  uint8_t val;
  Rtc.EepromRead(0, &val, sizeof(val));
  SerialUSB.print("EEPROM value is ");
  SerialUSB.println(val);
  
  val++;
  Rtc.EepromWrite(0, &val, sizeof(val));
  
  SerialUSB.println("Beep.");
  pinMode(WIO_D38, OUTPUT);
  digitalWrite(WIO_D38, HIGH);
  delay(200);
  digitalWrite(WIO_D38, LOW);
  
  SerialUSB.println("Shutdown.");
  Rtc.SetWakeupPeriod(BOOT_INTERVAL);
  Rtc.Shutdown();
  while (1) {}
}
```

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/res/Wio%20Extension%20%E2%80%93%20RTC%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Wio-Extension-RTC](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/res/Wio%20Extension%20%E2%80%93%20RTC%20v1.0.zip)
- **[Ejemplo]** [Código de ejemplo Wio-Extension-RTC](https://github.com/Seeed-Studio/Wio_Extension_RTC/blob/master/wiortc-sample.zip)

## Soporte Técnico y Discusión de Producto

Si tienes algún problema técnico, envía tu consulta a nuestro [foro](http://forum.seeedstudio.com/).  
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>