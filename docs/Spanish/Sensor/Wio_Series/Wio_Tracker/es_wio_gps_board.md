---
title: Wio Tracker - GPS, BT3.0, GSM, Compatible con Arduino
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/wio_gps_board/
slug: /es/wio_gps_board
last_update:
  date: 07/25/2025
  author: Guillermo
---

![](https://files.seeedstudio.com/wiki/Wio_GPS_Board/images/Wio_GPS_Antanna.jpg)

# ¿Qué es Wio Tracker?

Wio Tracker es una placa de desarrollo compatible con Arduino que te ayuda a rastrear cualquier objeto en movimiento en el planeta. Al integrar GSM & GPRS así como GPS & BeiDou en una sola placa, ofrece una solución todo en uno para tu proyecto IoT al aire libre.

Si sigues las últimas noticias sobre Low-Power Wide-Area Network (LPWAN), sabrás que 2016 fue un año especial porque surgieron nuevas tecnologías como LoRa y Sigfox, que impulsaron notablemente el desarrollo de las WAN. Wio Tracker tiene similitudes con LoRa y Sigfox pero también diferencias importantes. Es más adecuado para seguimiento de objetos en movimiento al aire libre y situaciones con alta frecuencia de interacción del usuario y volumen medio de datos, por ejemplo, bicicletas compartidas, ubicación logística, rastreo de mascotas.

Comparado con las soluciones tradicionales de rastreo GPS, Wio Tracker de Seeed es mucho más fácil de usar y personalizar para el mercado IoT en rápida evolución. Como placa de desarrollo amigable con Grove, el aspecto de Wio Tracker puede recordarte a Wio Link, otro producto inicial de Seeed. Por ello, también encontrarás 6 conectores Grove en la placa. Al ser compatible con Arduino, los usuarios pueden usar Wio Tracker directamente con el IDE de Arduino.

¿Por qué llamamos a Wio Tracker una solución? Porque no es solo una placa. En SeeedStudio, tenemos la capacidad de ayudar al cliente a personalizar Wio Tracker para su proyecto y llevarlo hasta producción en masa. Como Wio Tracker usa módulos estándar en producción masiva, estamos listos para producción en masa incluso cuando el cliente está en etapa de prototipo.

Hemos preparado todo, lo último que necesitamos son tus proyectos creativos, así que si estás haciendo un proyecto IoT de rastreo al aire libre, ¡no dudes en usar Wio Tracker!

:::caution
    Por favor, conecta siempre una batería Lipo de 3.7V en caso de que la alimentación USB no sea suficiente.
:::

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Wio-Tracker-GPS%2C-BT3.0%2C-GSM%2C-Arduino-Compatible-p-2831.html)

## Características

* Motor Multi-GNSS para combinación GPS y BeiDou, ubicación de alta precisión
* Tecnología EPO™, que provee Órbita Predictiva Extendida para acelerar el TTFF sin necesidad de servidor extra
* Basado en datos EPO™, función QuecFastFix™ Online reduce aún más TTFF en inicio frío, haciéndolo comparable al inicio caliente
* Modo GLP (GNSS de Bajo Consumo), 40% de consumo respecto al modo normal con precisión ligeramente inferior
* Modo Periódico, también reduce consumo controlando el tiempo de sueño
* Tecnología Always Locate™, algoritmo inteligente para ahorro de energía
* Tecnología Easy™ (Sistema de Asistencia Embebido), predicción de órbita autogenerada para posicionamiento instantáneo, reduciendo el Tiempo para la Primera Fijación (TTFF)
* Tecnología LOCUS™, solución nativa de registro de datos de navegación sin necesidad de host ni memoria externa
* Comandos AT: GSM 07.07, 07.05 y comandos AT mejorados
* Bluetooth 3.0 con perfiles SPP y HFP-AG
* 6 conectores Grove
* Socket 2 en 1 para Nano SIM y tarjeta TF
* Compatible con Arduino IDE
* Bajo consumo y tamaño pequeño

### Módulo Quectel MC20

* Tamaño ultra compacto: 18.7 × 16.0 × 2.1 mm
* Constelaciones de navegación múltiple: GPS / BeiDou / QZSS
* Canales receptor GNSS: 99 adquisición / 33 seguimiento
* Funciones AGPS potentes: AGPS autónomo EASY™, AGPS offline EPO™, AGPS online QuecFastFix
* LNA incorporado para mejor sensibilidad GNSS (-167dBm @ Seguimiento): puede usar antena GNSS pasiva sin LNA extra
* Características GNSS mejoradas: comandos SDK / AIC / LOCUS / GLP
* GSM cuatribanda: 850/900/1800/1900 MHz
* Protocolos de internet múltiples: TCP / UDP / PPP / HTTP / FTP / SSL
* Soporta Voz, SMS, QuecFOTA™, DSSS, OpenCPU
* Soporta Bluetooth V3.0: perfiles SPP y HFP-AG

:::caution
    A diferencia de la mayoría de placas Arduino & Genuino, Wio Tracker funciona a 3.3V. El voltaje máximo que toleran los pines I/O es 3.3V. Aplicar voltajes superiores puede dañar la placa.
:::

## Especificaciones

| Ítem           | Función                     | Valor                                              |
|----------------|-----------------------------|---------------------------------------------------|
| Microcontrolador | Procesador                  | ATSAMD21G18A-MU, ARM Cortex-M0+, 48MHz            |
|                | Memoria Flash               | 256KB                                             |
|                | SRAM                       | 32KB                                              |
|                | Voltaje de operación        | 3.3V                                              |
|                | Corriente DC por pin I/O    | 7 mA                                              |
|                | Velocidad de reloj          | 48 MHz                                            |
| GSM/GPRS       | GSM                        | 850/900/1800/1900 MHz, Clase 4 (2W @850/900MHz), Clase 1 (1W @1800/1900MHz) |
|                | Comandos AT                | GSM 07.07, 07.05 y comandos AT mejorados          |
|                | Bajo consumo               | 1.2mA @ DRX=5                                     |
|                | GPRS                       | Multi-slot Clase 12: Hasta 85.6 kbps              |
|                | Protocolos                 | TCP / UDP / FTP / HTTP / PPP / SSL                 |
|                | SMS                        | Mensajes Peer to Peer, difusión SMS, modos Texto y PDU |
|                | Audio                      | Cancelación de eco, eliminación de ruido          |
|                | Bluetooth                  | Bluetooth 3.0: SPP, HFP-AG                         |
| GNSS           | Sistema                    | GPS L1 1575.42 MHz, BeiDou B1 1561.10 MHz          |
|                | Precisión                  | 2.5 m CEP                                        |
|                | Tecnología                 | EASY / LOCUS / AlwaysLocate / EPO / GLP / AIC     |
| Periféricos    | Grove                      | 2 x Puertos digitales Grove                         |
|                |                            | 2 x Puertos analógicos                              |
|                |                            | 1 x UART                                           |
|                |                            | 1 x I2C                                            |
|                | Antena                     | Antena GSM                                         |
|                |                            | Antena Bluetooth                                   |
|                |                            | Antena GNSS                                        |
|                | Otros                      | USB: alimentación y carga de programa              |
|                |                            | Conector JST 1.0 para batería                      |
|                |                            | Jack de audio 3.5 mm                               |
|                |                            | Botón de encendido GSM, botón reset                |
|                |                            | 1 x LED RGB de usuario SK6812                       |
|                |                            | Interfaz de altavoz                                |
|                |                            | Socket 2 en 1 para Nano SIM y tarjeta TF           |
| Tamaño         | Largo                      | 54.7 mm                                           |
|                | Ancho                      | 48.2 mm                                           |
|                | Peso                       |                                                   |

## Ideas de Aplicación

* Transporte inteligente
* Rastreo de mascotas
* Equipos deportivos al aire libre
* Grabadora de conducción
* Dispositivos vestibles
* Seguridad de propiedades

:::tip
    Usa módulos Grove para expandir tu aplicación
:::

Hay 6 conectores Grove en la placa. Si es la primera vez que escuchas de Grove, visita [Sistema Grove](https://wiki.seeedstudio.com/Grove_System/) para más detalles.  
En resumen, Grove es una colección de cientos de sensores en un estándar que incluye sensores, actuadores, displays y comunicaciones.

## Vista General del Hardware

![](https://files.seeedstudio.com/wiki/GPS_Tracker/images/GPS_Tracker_v1.2_top.png)

![](https://files.seeedstudio.com/wiki/GPS_Tracker/images/GPS_Tracker_v1.2_bottom.png)

:::tip
    Para usar los conectores Grove a bordo, usa digitalWrite(12, HIGH) para activar 3V3_B. De lo contrario no proveerás energía a los módulos Grove.
:::

## Mapa de Pines

| Nombre Pin | Interrupción Externa | PWM | Entrada Analógica | Salida Analógica | Función         |
|------------|---------------------|-----|-------------------|------------------|-----------------|
| RX         | SÍ                  | SÍ  |                   |                  | Grove UART      |
| TX         | SÍ                  | SÍ  |                   |                  | Grove UART      |
| D2         | SÍ                  | SÍ  |                   |                  | Grove Digital   |
| D3         | SÍ                  | SÍ  |                   |                  | Grove Digital   |
| D4         | SÍ                  |     |                   |                  | Grove Digital   |
| D5         | SÍ                  | SÍ  |                   |                  | Grove Digital   |
| D6         | SÍ                  |     |                   |                  | Control LED Usuario |
| D7         | SÍ                  |     |                   |                  | Alimentación MC20 |
| D10        | SÍ                  | SÍ  |                   |                  | LED Usuario     |
| D11        | SÍ                  | SÍ  |                   |                  | Verificación Audífono |
| D12        | SÍ                  | SÍ  |                   |                  | Control de energía Grove |
| D13        | SÍ                  | SÍ  |                   |                  | Botón encendido GSM |
| SDA        | SÍ                  |     |                   |                  | Grove I2C       |
| SCL        | SÍ                  |     |                   |                  | Grove I2C       |
| A0         | SÍ                  |     | SÍ                | SÍ               | Grove Analógico |
| A1         | SÍ                  |     | SÍ                | SÍ               | Grove Analógico |
| A2         | SÍ                  |     | SÍ                | SÍ               | Grove Analógico |
| A3         | SÍ                  |     | SÍ                | SÍ               | Grove Analógico |
| A4         | SÍ                  |     | SÍ                |                  | Verificación batería |

:::note
    Todos los pines pueden funcionar como entrada y salida digital.
:::

## Primeros Pasos - Arduino IDE

:::note
    Este capítulo está basado en Windows 10 y Arduino IDE v1.6.0
:::

Primero, necesitas instalar la última versión del Arduino IDE y [AGREGAR Seeeduino SAMD a tu Arduino IDE](https://wiki.seeedstudio.com/Seeed_Arduino_Boards/).

### Instalar el Driver (para Windows)

Al insertar la placa por primera vez, debería aparecer un dispositivo USB COM llamado Wio Tracker que requiere instalar un driver. Haz clic [aquí](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/driver.zip) para descargar el driver para la placa.

Para verificar que el driver se instaló correctamente, abre el Administrador de Dispositivos y confirma que **Wio Tracker** aparece.

### Instalar la biblioteca de Wio Tracker (Windows, Linux y Mac)

Haz clic [aquí](https://github.com/Seeed-Studio/Seeed_Wio_GPS_Board/archive/master.zip) para descargar la biblioteca (archivo zip) de Wio Tracker e impórtala en tu Arduino IDE. Si eres nuevo, visita [aquí](https://www.arduino.cc/en/Guide/Libraries#toc4) para más información.

### Blink

A diferencia de otras placas, Wio Tracker tiene un LED de usuario SK6812, una fuente de luz LED inteligente similar a ws2812b. Ahora subiremos nuestro primer demo - Blink, que mostrará cómo usar el LED de usuario.

Primero, instala la [Librería Adafruit NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel/archive/master.zip) (para LED ws2812b) y añádela a tu Arduino IDE.

Luego abre Arduino IDE y selecciona **Archivo > Ejemplos > MC20_GPS_Tracker > Blink** para abrir el sketch, o copia el siguiente código:

```c
#include "MC20_Arduino_Interface.h"
#include <Adafruit_NeoPixel.h>

#define RGBPOWER     6          //To use User LED, D6 should be HIGH.
#define RGBPIN       10
#define LED_NUM      1

Adafruit_NeoPixel pixels = Adafruit_NeoPixel(LED_NUM, RGBPIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pinMode(RGBPOWER, OUTPUT);
  digitalWrite(RGBPOWER, HIGH);
  pixels.begin(); // This initializes the NeoPixel library.
}

void loop() {

  // For a set of NeoPixels the first NeoPixel is 0, second is 1, all the way up to the count of pixels minus one.
  // pixels.Color takes RGB values, from 0,0,0 up to 255,255,255
  pixels.setPixelColor(0, pixels.Color(0,0,100)); // Moderately bright blue color.
  pixels.show(); // This sends the updated pixel color to the hardware.
  delay(1000);   // Wait for 1 second
  pixels.setPixelColor(0, pixels.Color(0,0,0));   // Turn off the led.
  pixels.show();
  delay(1000);
}
```

Luego,

* Haz clic en **Herramientas > Placa > Wio Tracker**
* Haz clic en **Herramientas > Puerto** para seleccionar el número de puerto correcto. (*No elijas COM1*)

Después haz clic en el botón **Subir** en la esquina superior izquierda del Arduino IDE, segundos después el sketch se habrá subido exitosamente.

Si la carga fue exitosa, verás algo de información en rojo y el LED de usuario parpadeará en azul.

### Verificar batería

Wio Tracker está diseñado para rastrear objetos en movimiento al aire libre. Por eso puedes alimentar la placa con una batería Lipo de 3.7V con conector JST1.0 y verificar fácilmente el voltaje de la batería.

:::caution
    Asegúrate de conectar correctamente el terminal positivo y negativo de la batería, de lo contrario la placa podría dañarse.
:::

El pin de estado de batería está conectado a A4, lo que te permite medir el voltaje de la batería mediante código.

Abre tu Arduino IDE y haz clic en **Archivo > Ejemplos > MC20_GPS_Tracker > Check_Battery** para abrir el sketch o copia el siguiente código:

```c
#include "MC20_Arduino_Interface.h"

const int pin_battery_voltage = A4;

void setup() {
    SerialUSB.begin(115200);
}

void loop() {

    int a = analogRead(pin_battery_voltage);
    float v = a/1023.0*3.3*2.0;        // there's an 10M and 10M resistor divider
    SerialUSB.print("The voltage of battery is ");
    SerialUSB.print(v, 2);
    SerialUSB.println(" V");
    delay(1000);
}
```

### Usa módulos Grove para expandir tu aplicación

Para usar los 6 conectores Grove en Wio Tracker, debemos usar `digitalWrite(12, HIGH)` para activar 3V3_B y alimentar los módulos Grove (D12 está en LOW por defecto para reducir consumo).

* El siguiente código muestra cómo usar módulos Grove analógicos y digitales:

Abre tu Arduino IDE y haz clic en **Archivo > Ejemplos > MC20_GPS_Tracker > Button_LightSensor** para abrir el sketch o copia el siguiente código:

```c
#include "MC20_Arduino_Interface.h"

#define GrovePowerPin   12
#define LightSensorPin  A0
#define ButtonPin       2


void setup() {
  SerialUSB.begin(115200);
  pinMode(ButtonPin, INPUT);
  pinMode(GrovePowerPin, OUTPUT);
  // write high to grove power pin to enable all the Grove ports,
  // or only Grove D2 port is usable.
  digitalWrite(GrovePowerPin, HIGH);   
}

void loop() {
    // print analog data when the button is pressed
    if (digitalRead(ButtonPin)) {
        SerialUSB.print("The value of light sensor:");
        SerialUSB.println(analogRead(LightSensorPin));
    }
    delay(500);
}   
```

* El siguiente código muestra como usar el puerto UART

```c
#define GrovePowerPin   12

void setup() {
  pinMode(GrovePowerPin, OUTPUT);
  digitalWrite(GrovePowerPin, HIGH);    //power Grove
  //SerialUSB.begin(115200);
  SerialDBG.begin(115200);    //set Grove UART baud rate 115200
}

void loop() {  
  //SerialUSB.println("Grove UART is sending message");
  SerialDBG.println("This is Grove UART");
  delay(1000);
}
```

Por favor, usa el [USB To Uart](https://www.seeedstudio.com/USB-To-Uart-5V%263V3-p-1832.html) para leer los datos del puerto Grove UART.

:::caution
    Si en el código se usan ambos SerialUSB y SerialDBG, asegúrate de abrir el puerto COM de SerialUSB al usarlo; de lo contrario, SerialDBG no funcionará.
:::

### GNSS

El módulo MC20 proporciona un conjunto de comandos AT para que el MCU se comunique con sus módulos GSM/GPRS, GNSS y Bluetooth.

Además, hemos instalado una biblioteca bien desarrollada para Wio GPS, para aplicaciones simples ni siquiera necesitas conocer a fondo los comandos AT, que son complejos y difíciles de manejar.

El siguiente ejemplo muestra cómo leer la longitud y latitud e imprimirlas en el Monitor Serial. Nota que Wio Tracker debe estar ubicado al aire libre para captar señal GPS. Este ejemplo requiere que haya una tarjeta SIM en Wio Tracker; las siguientes imágenes muestran cómo instalar y retirar una tarjeta SIM:

![](https://files.seeedstudio.com/wiki/Wio_GPS_Board/images/insertsim.jpg)

![](https://files.seeedstudio.com/wiki/Wio_GPS_Board/images/pullsim.jpg)

Abre tu Arduino IDE y haz clic en **Archivo > Ejemplos > MC20_GPS_Tracker > MC20_GNSS > GNSS_Show_Coordinate** para abrir el sketch o copia el siguiente código:

```c
#include "MC20_Common.h"
#include "MC20_Arduino_Interface.h"
#include "MC20_GNSS.h"


GNSS gnss = GNSS();

void setup() {
  SerialUSB.begin(115200);
  // while(!SerialUSB);

  gnss.Power_On();
  SerialUSB.println("\n\rPower On!");

  while(!gnss.open_GNSS()){
    delay(1000);
  }

  SerialUSB.println("Open GNSS OK.");
}

void loop() {
  // gnss.dataFlowMode();

  if(gnss.getCoordinate()){
    SerialUSB.print("GNSS: ");
    SerialUSB.print(gnss.longitude, 6);
    SerialUSB.print(",");
    SerialUSB.println(gnss.latitude, 6);  
  } else{
    SerialUSB.println("Error!");
  }

  delay(1000);
}
```

### Lectura de Mensajes SMS

El siguiente ejemplo muestra cómo leer mensajes SMS en Wio Tracker. Se requiere una tarjeta Nano SIM para este ejemplo.

Abre tu Arduino IDE y haz clic en **Archivo > Ejemplos > MC20_GPS_Tracker > MC20_SMSRead** para abrir el sketch o copia el siguiente código:

```c
#include "MC20_Common.h"
#include "MC20_Arduino_Interface.h"

#define RGBPIN 10

char phone[32];
char dateTime[32];
char buffer[64];
int i = 0;
char *s = NULL;
int inComing = 0;

GPSTracker gpsTracker = GPSTracker();

void setup() {
  // MC20_init();
  pinMode(RGBPIN, OUTPUT);
  digitalWrite(RGBPIN, LOW);
  SerialUSB.begin(115200);
  // while(!SerialUSB);

  gpsTracker.Power_On();
  SerialUSB.println("Power On!");

  // gpsTracker.deleteSMS(1);

}

void loop() {

  if(MC20_check_readable()){
    inComing = 1;
  }else{
    delay(1000);
  }

  if(1 == inComing){
    MC20_read_buffer(buffer, 64);
    SerialUSB.println(buffer);

    if(NULL != (s = strstr(buffer,"+CMTI: \"SM\""))) { //SMS: $$+CMTI: "SM",24$$
        char message[128];
        int messageIndex = atoi(s+12);
        gpsTracker.readSMS(messageIndex, message,128);
        SerialUSB.print("Recv SMS: ");
        SerialUSB.println(message);
     }
     MC20_clean_buffer(buffer,64);  
     inComing = 0;
  }

}
```

### Conexión Bluetooth

También es muy fácil conectarse a tu dispositivo Bluetooth con Wio Tracker. Abre tu Arduino IDE y haz clic en **Archivo > Ejemplos > MC20_GPS_Tracker > MC20_BlueTooth > BT_FastConnect** para abrir el sketch o copia el siguiente código.

Luego cambia el nombre (`deviceName`) de tu dispositivo Bluetooth, Wio Tracker se conectará automáticamente.

```c
#include "MC20_Common.h"
#include "MC20_BT.h"

// GPSTracker gpsTracker = GPSTracker();
BlueTooth bt = BlueTooth();
int bt_state = -1;
char *deviceName = "N-612";


void setup() {
  SerialUSB.begin(115200);
  while(!SerialUSB);

  bt.Power_On();
  SerialUSB.println("\n\rMC20 power On!");
  bt.BTPowerOn();
  SerialUSB.println("\n\rBT power On!");

  while(IDLE != (bt_state = bt.getBTState())){
    SerialUSB.print("State: ");
    SerialUSB.println(bt_state);
    delay(1000);
  }

  bt.BTFastConnect(deviceName, HFG_PROFILE);
}

void loop() {
  /* Debug */
  if(SerialUSB.available()){
    serialMC20.write(SerialUSB.read());
  }
  if(serialMC20.available()){     
    SerialUSB.write(serialMC20.read());
  }
}
```

### Tarjeta SD

- **Paso 1.** Inserta la tarjeta SD en la placa Wio GPS.  
- **Paso 2.** Usa el cable USB para conectar la placa Wio GPS a la PC.  
- **Paso 3.** Abre tu Arduino IDE, selecciona **Herramientas** -> **Placa** -> **Wio GPS board**.  
- **Paso 4.** Haz clic en **Archivo > Ejemplos > Seeed_Wio_GPS_Board\SD_Card_Test_DumpFile** para abrir el sketch o copia el siguiente código.  
- **Paso 5.** Sube el código a la placa Wio GPS; este ejemplo muestra cómo leer un archivo desde la tarjeta SD usando la librería SD y enviarlo por el puerto serial.

```cpp
/*
  SD card file dump

 This example shows how to read a file from the SD card using the
 SD library and send it over the serial port.

 The circuit:
 * SD card attached to SPI bus as follows:
 ** MOSI - pin 11
 ** MISO - pin 12
 ** CLK - pin 13
 ** CS - pin 4 (for MKRZero SD: SDCARD_SS_PIN)

 created  22 December 2010
 by Limor Fried
 modified 9 Apr 2012
 by Tom Igoe

 This example code is in the public domain.

 */

#include <SPI.h>
#include <SD.h>

const int chipSelect = 4;
char* fileName = "gps.txt";

void setup() {
  // Open serial communications and wait for port to open:
  SerialUSB.begin(115200);
  while (!SerialUSB) {
    ; // wait for serialUSB port to connect. Needed for native USB port only
  }


  SerialUSB.print("Initializing SD card...");

  // see if the card is present and can be initialized:
  if (!SD.begin(chipSelect)) {
    SerialUSB.println("Card failed, or not present");
    // don't do anything more:
    return;
  }
  SerialUSB.println("card initialized.");

  // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  File dataFile = SD.open(fileName);

  // if the file is available, write to it:
  if (dataFile) {
    while (dataFile.available()) {
      SerialUSB.write(dataFile.read());
    }
    dataFile.close();
  }
  // if the file isn't open, pop up an error:
  else {
    SerialUSB.println("error opening datalog.txt");
  }
}

void loop() {
}
```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GPS_Tracker/resources/GPS_Tracker_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* [Esquemáticos en Eagle](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/GPS_Tracker_Eagle.zip)
* [Archivo Sketchup (3D)](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/GPS_Tracker.skp)
* [Nota de Aplicación GSM Bluetooth](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_GSM_BT_Application_Note_V1.2(C).pdf)
* [Manual de Comandos AT para Archivos GSM](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_GSM_FILE_AT_Commands_Manual_V1.5.pdf)
* [Manual de Comandos AT MC20](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_MC20_AT_Commands_Manual_V1.1.pdf)
* [Guía de Aplicación MC20 GNSS AGPS](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_MC20_GNSS_AGPS_ApplicationGuide_V1.1.pdf)
* [Manual de Comandos AT MC20 GNSS](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_MC20_GNSS_AT_Commands_Manual_V1.1.pdf)
* [Especificación del Protocolo MC20 GNSS](https://files.seeedstudio.com/wiki/GPS_Tracker/resources/Quectel_MC20_GNSS_Protocol_Specification_V1.0.pdf)

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte diverso y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Soporte Técnico y Discusión del Producto

Si tienes algún problema técnico, por favor envía tu consulta en nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte diverso y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>