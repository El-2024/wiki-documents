---
title: Wio LTE Cat M1/NB-IoT Tracker
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio_LTE_Cat_M1_NB-IoT_Tracker/
slug: /es/Wio_LTE_Cat_M1_NB-IoT_Tracker
last_update:
  date: 07/25/2025
  author: Guillermo
---


![](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/img/NBIOT1.JPG)

Seeed Wio LTE CAT M1/NB-IoT está diseñado para redes de área amplia de baja potencia (LPWAN) con módulo combinado CAT M1 (eMTC) y NB-IoT. Además, cuenta con un microcontrolador ARM Cortex-M4 y módulo GNSS.

Es una placa de desarrollo compatible con Arduino que ayuda a rastrear casi cualquier objeto en movimiento en el planeta y subir esos datos de forma inalámbrica. Integrando conectores Grove, Wio LTE CAT M1/NB-IoT permite soluciones de comunicación flexibles con sistemas Grove.

Wio LTE CAT M1/NB-IoT es ideal para proyectos al aire libre donde el dispositivo puede conectarse al sistema de navegación satelital y proporcionar la ubicación en tiempo real del objeto al que está adherido.

<p style={{}}><a href="https://www.seeedstudio.com/Wio-LTE-Cat-M1-NB1-p-3055.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

**¿Buscas el Twilio Developer Kit para T-Mobile Narrowband? Encuentra la documentación [aquí](https://www.twilio.com/docs/wireless/nb)**

## Versiones
| Versión del Producto            | Cambios                                  | Fecha de Lanzamiento |
|--------------------------------|-----------------------------------------|---------------------|
| Wio LTE Cat M1/NB-IoT v1.0     | Versión inicial                         | 26 de mayo de 2018  |

## Especificaciones

- Microcontrolador ARM Cortex-M4 con módulo LTE CAT M1 y NB-IoT combinado para uso global  
- Soporte GNSS GPS/GLONASS  
- Compatible con Arduino IDE  
- 6 puertos Grove integrados, soporte hasta 180 módulos Grove  
- Migración fácil desde Wio LTE CAT.1  

## Características de Hardware

- STM32F405RG, ARM Cortex-M4, CPU hasta 168 MHz  
- 1 Mbyte de Flash  
- 192 + 4 KBytes RAM  
- Sistema  
    - Voltaje operativo: 3.3V  
    - Bajo consumo: modos Sleep/Standby/Stop  
    - Generador CRC-32  
- Conectividad LTE  
    - LTE CAT M1 y NB-IoT, Cat M1 Half-duplex (375 kb/s DL y UL), Cat NB1 Half-duplex (27.2 kb/s DL, 62.5 kb/s UL)  
    - Protocolos integrados: TCP/UDP/FTP/HTTP/HTTPS/FTPS/TLS/MQTT/CoAP  
- GNSS  
    - GPS/GLONASS  
    - Precisión: 2.5 m CEP (GPS), 4.0 m CEP (GLONASS)  
- Periféricos  
    - 1 x USB para alimentación y DFU  
    - Conector JST 1.0 para batería  
    - 3 botones: Reset MCU, BOOT MCU (DFU), botón de encendido EC21  
    - Ranura combinada Nano SIM y tarjeta TF  
- Grove  
    - 2 x Puertos digitales  
    - 2 x Puertos analógicos  
    - 1 x UART  
    - 1 x I2C  

:::tip
    Usa módulos Grove para expandir tu aplicación. Hay 6 conectores Grove en la placa. Si es la primera vez que escuchas sobre Grove, consulta [Sistema Grove](https://wiki.seeedstudio.com/Grove_System/) para más detalles. En resumen, Grove es un estándar con cientos de sensores, actuadores, pantallas y módulos de comunicación.
:::

## Aplicaciones
- Ciudades inteligentes  
- Medidores inteligentes  
- Energía inteligente  
- Agricultura inteligente  
- Comercio inteligente  
- Cadena de suministro inteligente  
- Transporte inteligente  
- Automóviles conectados  
- Edificios conectados  
- Salud conectada  
- Equipos deportivos  
- Rastreo de mascotas  
- Seguridad de propiedades  
- Bicicletas compartidas  
- Sistema de posicionamiento en transporte logístico  
- Otros  

## Vista General del Hardware

![](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/img/front.png)

![](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/img/back.png)

:::tip
    Para usar el conector Grove integrado, usa `digitalWrite(B10, HIGH)` para activar 3V3_B, excepto D38 que tiene energía por defecto. De lo contrario, no podrás alimentar los módulos Grove.
:::

![](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/img/h3.png)

## Primeros Pasos

### Instalar Driver USB

- **Usuarios Windows:** La mayoría de versiones de Windows no cargan automáticamente el driver para puertos COM USB. Debes descargar el driver USB de ST [STM32 Virtual COM Port Driver](https://www.st.com/en/development-tools/stsw-stm32102.html#get-software).

- **Usuarios Mac OS X y Chromebook:** La placa se conecta y funciona automáticamente, sin necesidad de drivers.

### Cambiar Driver DFU

**Para usuarios Windows:**  

- Paso 1. Mantén presionado el botón BOOT y conecta la placa a la computadora. En el Administrador de dispositivos verás **STM32 Device in DFU Mode** como se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/before_driver_installation.png)

- Paso 2. Usa [zadig_xx.exe](https://files.seeedstudio.com/wiki/Wio_LTE/res/zadig_2.1.2.exe) para cambiar el driver DFU de **STTub30** a **WinUSB**. Si no ves nada en Zadig, haz clic en Opciones --> Listar Todos los Dispositivos, luego selecciona STM32 Virtual COM Ports.

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/zadig.png)

- Paso 3. Verás el "STMicroelectronics Virtual COM Port" en el administrador de dispositivos:

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/after_driver_installation.png)

### Trabajar con Arduino

**1. Configuración del Software**

- Paso 1. Instala Arduino IDE, se recomienda versión 1.8.0 o superior.  
- Paso 2. Sigue [Cómo agregar placas Seeed al Arduino IDE](https://wiki.seeedstudio.com/Seeed_Arduino_Boards/) para añadir las placas STM32F4 de Seeed al gestor de placas.  
- Paso 3. Descarga la [librería WioLTE_Cat_NB1_Arduino_Library](https://github.com/lanselambor/WioLTE_Cat_NB1_Arduino_Library) desde Github.  
- Paso 4. Consulta [Cómo instalar librerías](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) para instalar la librería en Arduino.  
- Paso 5. Antes de cargar el sketch, mantén presionados los botones BOOT0 y RST, suelta primero RST y luego BOOT0 para que la placa entre en modo STM BOOTLOADER.  
- Paso 6. No selecciones ningún puerto serial para subir el sketch en la pestaña Herramientas; solo haz clic en el icono de subir.

**2. Usar el LED RGB integrado**

- Paso 1. Selecciona Archivo --> Ejemplos --> WioLTE_Cat_NB1_Arduino_Library --> Seeed_WS2812b sketch.  
- Paso 2. Mantén presionado el botón BOOT ubicado en la parte trasera del Wio LTE Cat NB1 y conecta el USB a la PC.  
- Paso 3. Verás **STM BOOTLOADER** en el administrador de dispositivos.  
- Paso 4. Selecciona Herramientas --> Placas --> Wio_Tracker_LTE.  
- Paso 5. Deja el puerto COM en blanco.  
- Paso 6. Selecciona Sketch --> Subir para cargar el código en Wio LTE.

```cpp

#include <Seeed_ws2812.h>
#include <ublox_sara_r4.h>

#define LEN_NUM 1

Ublox_sara_r4 ublox = Ublox_sara_r4();
WS2812 strip = WS2812(LEN_NUM, ublox.RGB_LED_PIN);

void setup() {
  // Set RGB LED power pin high
  ublox.turnOnRGBPower();
  strip.begin();
  strip.brightness = 20;
}

void loop() {  
  strip.RGBCycle(1000);   
  strip.rainbowCycle(20);
}

```

- Paso 7. Presiona **RST**, y verás que el LED RGB integrado comienza a funcionar.

**3. Trabajar con GNSS**

- Paso 1. Inserta la tarjeta Nano SIM en la ranura Nano SIM, cerca del borde de la PCB.  
- Paso 2. Selecciona Archivo --> Ejemplos --> WioLTE_Cat_NB1_Arduino_Library --> GNNS --> GNSS sketch.  
- Paso 3. Mantén presionado el botón BOOT en la parte trasera del Wio LTE Cat NB1 y conecta el USB a la PC.  
- Paso 4. Verás **STM BOOTLOADER** en el administrador de dispositivos.  
- Paso 5. Selecciona Herramientas --> Placas --> Wio_Tracker_LTE.  
- Paso 6. Deja el puerto COM en blanco.  
- Paso 7. Selecciona Sketch --> Subir para cargar el código en Wio LTE Cat NB1.  
- Paso 8. Presiona el botón **RST** para habilitar el puerto COM.

```cpp

#include <ublox_sara_r4_gnss.h>

UBLOX_SARA_R4_GNSS gnss = UBLOX_SARA_R4_GNSS();

void setup()  
{
  // Open GNSS module
  gnss.open_GNSS();
  delay(3000);
  SerialDebug.println("_Start");
}

void loop() {
  gnss.dataFlowMode();
}

```

- Paso 9. Usa herramientas de monitor COM para imprimir los mensajes seriales. **Por favor, no uses el monitor COM del Arduino IDE, ¡eso puede causar fallos en la próxima carga del programa! Sin embargo, abrir de nuevo el Arduino IDE puede solucionar ese problema**.  
- Paso 10. Verás la información de latitud y longitud impresa en pantalla.

```cpp
$GNRMC,,V,,,,,,,,,,N*4D
$GNVTG,,,,,,,,,N*2E
$GNGGA,,,,,,0,00,99.99,,,,,,*56
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GPGSV,1,1,01,30,,,44*7B
$GLGSV,1,1,00*65
$GNGLL,,,,,,V,N*7A
$GNRMC,,V,,,,,,,,,,N*4D
$GNVTG,,,,,,,,,N*2E
$GNGGA,,,,,,0,00,99.99,,,,,,*56
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GPGSV,1,1,04,07,,,43,17,,,38,18,,,39,30,,,44*70
$GLGSV,1,1,00*65
$GNGLL,,,,,,V,N*7A
$GNRMC,,V,,,,,,,,,,N*4D
$GNVTG,,,,,,,,,N*2E
$GNGGA,,,,,,0,00,99.99,,,,,,*56
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GPGSV,2,1,06,07,,,44,09,,,41,17,,,40,18,,,41*79
$GPGSV,2,2,06,28,,,40,30,,,45*73
$GLGSV,1,1,00*65
$GNGLL,,,,,,V,N*7A
```

**4. Trabajar con la tarjeta SD**

- Paso 1. Inserta una tarjeta micro SD en la ranura para tarjeta SD.  
- Paso 2. Selecciona Archivo --> Ejemplos --> SD --> CardInfo sketch.  
- Paso 3. Mantén presionado el botón BOOT en la parte trasera del Wio LTE Cat NB1 y conecta el USB a la PC.  
- Paso 4. Verás **STM BOOTLOADER** en el administrador de dispositivos.  
- Paso 5. Selecciona Herramientas --> Placas --> Wio Tracker LTE.  
- Paso 6. Deja el puerto COM en blanco.  
- Paso 7. Selecciona Sketch --> Subir para cargar el código en Wio_LTE.

```cpp
// include the SD library:
#include <SD.h>

// set up variables using the SD utility library functions:
Sd2Card card;
SdVolume volume;
SdFile root;

// change this to match your SD shield or module;
// Arduino Ethernet shield: pin 4
// Adafruit SD shields and modules: pin 10
// Sparkfun SD shield: pin 8
const int chipSelect = 43;

void setup()
{
 // Open serial communications and wait for port to open:
  // SerialUSB.begin(115200);
  //  while (!Serial) {
  //   ; // wait for serial port to connect. Needed for Leonardo only
  // }


  SerialUSB.print("\nInitializing SD card...");
  // On the Ethernet Shield, CS is pin 4. It's set as an output by default.
  // Note that even if it's not used as the CS pin, the hardware SS pin 
  // (10 on most Arduino boards, 53 on the Mega) must be left as an output 
  // or the SD library functions will not work. 
  pinMode(SS, OUTPUT);


  // we'll use the initialization code from the utility libraries
  // since we're just testing if the card is working!
  while (!card.init(SPI_HALF_SPEED, chipSelect)) {
    SerialUSB.println("initialization failed. Things to check:");
    SerialUSB.println("* is a card is inserted?");
    SerialUSB.println("* Is your wiring correct?");
    SerialUSB.println("* did you change the chipSelect pin to match your shield or module?");
  } 
  
  // print the type of card
  SerialUSB.print("\nCard type: ");
  switch(card.type()) {
    case SD_CARD_TYPE_SD1:
      SerialUSB.println("SD1");
      break;
    case SD_CARD_TYPE_SD2:
      SerialUSB.println("SD2");
      break;
    case SD_CARD_TYPE_SDHC:
      SerialUSB.println("SDHC");
      break;
    default:
      SerialUSB.println("Unknown");
  }

  // Now we will try to open the 'volume'/'partition' - it should be FAT16 or FAT32
  if (!volume.init(card)) {
    SerialUSB.println("Could not find FAT16/FAT32 partition.\nMake sure you've formatted the card");
    return;
  }


  // print the type and size of the first FAT-type volume
  uint32_t volumesize;
  SerialUSB.print("\nVolume type is FAT");
  SerialUSB.println(volume.fatType(), DEC);
  SerialUSB.println();
  
  volumesize = volume.blocksPerCluster();    // clusters are collections of blocks
  volumesize *= volume.clusterCount();       // we'll have a lot of clusters
  volumesize *= 512;                            // SD card blocks are always 512 bytes
  SerialUSB.print("Volume size (bytes): ");
  SerialUSB.println(volumesize);
  SerialUSB.print("Volume size (Kbytes): ");
  volumesize /= 1024;
  SerialUSB.println(volumesize);
  SerialUSB.print("Volume size (Mbytes): ");
  volumesize /= 1024;
  SerialUSB.println(volumesize);

  
  SerialUSB.println("\nFiles found on the card (name, date and size in bytes): ");
  root.openRoot(volume);
  
  // list all files in the card with date and size
  root.ls(LS_R | LS_DATE | LS_SIZE);
}


void loop(void) {
  
}

```

- Paso 8. Presiona el botón **RST** para habilitar el puerto COM.  
- Paso 9. Usa herramientas de monitor COM para imprimir los mensajes seriales. **Por favor, no uses el monitor COM del Arduino IDE, ¡eso puede causar fallos en la próxima carga del programa! Sin embargo, abrir de nuevo el Arduino IDE puede solucionar ese problema**.  
- Paso 10. Abre el monitor serial y verás la siguiente información en pantalla.

```cpp
Initializing SD card...
Card type: SDHC

Volume type is FAT32

Volume size (bytes): 2689048576
Volume size (Kbytes): 2626024
Volume size (Mbytes): 2564

Files found on the card (name, date and size in bytes):
```

**5. Trabajar con la señal RSSI de la red**

- Paso 1. Selecciona Archivo --> Ejemplos --> WioLTE_Cat_NB1_Arduino_Library --> RSSI sketch.  
- Paso 2. Mantén presionado el botón BOOT en la parte trasera del Wio LTE Cat NB1 y conecta el USB a la PC.  
- Paso 3. Verás **STM BOOTLOADER** en el administrador de dispositivos.  
- Paso 4. Selecciona Herramientas --> Placas --> Wio_Tracker_LTE.  
- Paso 5. Deja el puerto COM en blanco.  
- Paso 6. Selecciona Sketch --> Subir para cargar el código en Wio_LTE.

```cpp
#include <ublox_sara_r4.h>
#include <UART_Interface.h>

Ublox_sara_r4 ublox = Ublox_sara_r4();

void setup() {
  
  SerialDebug.println("Begin...");
  ublox.powerOn();
  while(false == ublox.Check_If_Power_On()){
    SerialDebug.println("Waitting for module to alvie...");
    delay(1000);
  }  
  SerialDebug.println("Power On O.K!");

  delay(100);
  check_with_cmd("AT+UGPIOC=23,10\r\n", "OK", CMD);
  check_with_cmd("AT+UGPIOC=16,2\r\n", "OK", CMD);
}

void loop() {
	int signal;
	if(ublox.getSignalStrength(&signal)) {
		SerialDebug.print("RSSI: ");
		SerialDebug.println(signal, DEC);
	} else {
		SerialDebug.print("Error");
	}

	delay(1000);
 
}

```

- Paso 7. Presiona **RST**, y verás la siguiente información en pantalla.

```cpp
AT+CSQ

+CSQ: 99,99

OKRSSI: 99

AT+CSQ

+CSQ: 99,99

OKRSSI: 99

AT+CSQ

+CSQ: 99,99

OKRSSI: 99

AT+CSQ

+CSQ: 99,99
```

**6. Trabajar con el ejemplo Arduino TCP**

- Paso 1. Selecciona Archivo --> Ejemplos --> WioLTE_Cat_NB1_Arduino_Library --> Network --> tcp_directLink sketch.  
- Paso 2. Mantén presionado el botón BOOT en la parte trasera del Wio LTE Cat NB1 y conecta el USB a la PC.  
- Paso 3. Verás **STM BOOTLOADER** en el administrador de dispositivos.  
- Paso 4. Selecciona Herramientas --> Placas --> Wio_Tracker_LTE.  
- Paso 5. Deja el puerto COM en blanco.  
- Paso 6. Selecciona Sketch --> Subir para cargar el código en Wio_LTE.

```cpp
#include <ublox_sara_r4.h>

Ublox_sara_r4 ublox = Ublox_sara_r4();

char *server = "www.arduino.cc";
uint16_t port = 80;
int sockId = -1;

void setup() {
	bool network_attached = false;

	Log_info("Begin...");
	
	ublox.powerOn();
	Log_info("Waitting for module to alvie...");
	while(false == ublox.isAlive()){
		Log(".");
		delay(100);
	} 
	Logln(); 

	Log_info("Initializing network..");
	if(!ublox.network_Init(120)) { 
		Log_error("Network initialize timeout.");
		while(1);
	}
	Log_info("APN: " + String(ublox._apn));
	Log_info("Local IP: " + String(ublox._str_ip));
	Log_info("Operator: " + String(ublox._operator));
	Log_info("Network attached.");
	
	// This method is import for setting transparent session
	// use disableDirectLinkMode() to use nontransparent session  
	ublox.enableDirectLinkMode();

	if(-1 == (sockId = ublox.createSocket(TCP))) {
		Log_error("Create socket error!");
		return;
	}
	if(!ublox.sockConnect(sockId, server, port)) {
		Log_error("connect to server failed.");
	}			
	Log_info("Sent TCP message in direct link mode.");
		
}	

void loop() {
	static uint8_t tries = 0;
	String str_msg = "ublox random number " + String(random(0,100));
	// String str_msg = "/txt HTTP"; 

	ublox.socketWrite((uint8_t *)str_msg.c_str(), (uint16_t)str_msg.length());
	Log_info("Send msg: " + str_msg);

	tries++;
	if(tries > 5) {
		if(ublox.sockClose(sockId)) {
			Log_info("Close socket.");
		}
		Log_info("Enter AT command mode.");
		while(true) AT_bypass();
	}

	delay(2000);
}


```

- Paso 7. Presiona **RST**, y verás la siguiente información en pantalla.

```cpp
[INFO] Begin...
[INFO] Waitting for module to alvie...
...
[INFO] Initializing network..
.............................[INFO] APN: ctnb
[INFO] Local IP: 10.14.8.161
[INFO] Operator: 460 11 ????
[INFO] Network attached.
[INFO] Sent TCP message in direct link mode.
[INFO] Send msg: ublox random number 33
[INFO] Send msg: ublox random number 43
[INFO] Send msg: ublox random number 62
[INFO] Send msg: ublox random number 29
[INFO] Send msg: ublox random number 0
[INFO] Send msg: ublox random number 8
```

**7. Trabajar con el ejemplo Arduino UDP**

- Paso 1. Selecciona Archivo --> Ejemplos --> WioLTE_Cat_NB1_Arduino_Library --> Network --> udp_directLink sketch.  
- Paso 2. Mantén presionado el botón BOOT en la parte trasera del Wio LTE Cat NB1 y conecta el USB a la PC.  
- Paso 3. Verás **STM BOOTLOADER** en el administrador de dispositivos.  
- Paso 4. Selecciona Herramientas --> Placas --> Wio_Tracker_LTE.  
- Paso 5. Deja el puerto COM en blanco.  
- Paso 6. Selecciona Sketch --> Subir para cargar el código en Wio_LTE.

```cpp
#include <ublox_sara_r4.h>

Ublox_sara_r4 ublox = Ublox_sara_r4();

char *server = "time.nist.gov";
uint16_t port = 8888;
int sockId = -1;

void setup() {
	bool network_attached = false;

	Log_info("Begin...");
	
	ublox.powerOn();
	Log_info("Waitting for module to alvie...");
	while(false == ublox.isAlive()) {
		Log(".");
		delay(100);
	}  
	Logln("");

	Log_info("Initializing network..");
	if(!ublox.network_Init(120)) { 
		Log_error("Network initialize timeout.");
		while(1);
	}
	Log_info("APN: " + String(ublox._apn));
	Log_info("Local IP: " + String(ublox._str_ip));
	Log_info("Operator: " + String(ublox._operator));
	Log_info("Network attached.");
	
	if(-1 == (sockId = ublox.createSocket(UDP))) {
		Log_error("Create socket error!");
	}
	Log("[INFO] Create socket id: ");
	Logln(sockId);

	ublox.enableDirectLinkMode();
	if(!ublox.sockConnect(sockId, server, port)) {
		Log_error("connect to server failed.");
	}
	Log_info("Sent UDP message in direct link mode.");


		
}	

void loop() {
	static uint8_t tries = 0;

	String str_msg = "ublox random number " + String(random(0,100));

	ublox.socketWrite((uint8_t *)str_msg.c_str(), (uint16_t)str_msg.length());
	Log_info("Send msg: " + str_msg);

	tries++;
	if(tries > 5) {
		if(ublox.sockClose(sockId)) {
			Log_info("Close socket.");
		}
		while(true) AT_bypass();
	}

	delay(2000);
}

```

- PAso 7. Presiona **RST**, luego verás la información siguiente en la pantalla.

```
[INFO] Waitting for module to alvie...
...
[INFO] Initializing network..
....................[INFO] APN: ctnb
[INFO] Local IP: 10.178.48.90
[INFO] Operator: 460 11 ????
[INFO] Network attached.
[INFO] Create socket id: 0
[INFO] Sent UDP message in direct link mode.
[INFO] Send msg: ublox random number 33
[INFO] Send msg: ublox random number 43
[INFO] Send msg: ublox random number 62
[INFO] Send msg: ublox random number 29
[INFO] Send msg: ublox random number 0
[INFO] Send msg: ublox random number 8
[INFO] Close socket.
```

**8. Trabajar con el ejemplo Arduino MQTT Subscribe**

- Paso 1. Selecciona Archivo --> Ejemplos --> WioLTE_Cat_NB1_Arduino_Library --> MQTTClient --> mqtt_sub sketch.  
- Paso 2. Mantén presionado el botón BOOT en la parte trasera del Wio LTE Cat NB1 y conecta el USB a la PC.  
- Paso 3. Verás **STM BOOTLOADER** en el administrador de dispositivos.  
- Paso 4. Selecciona Herramientas --> Placas --> Wio_Tracker_LTE.  
- Paso 5. Deja el puerto COM en blanco.  
- Paso 6. Selecciona Sketch --> Subir para cargar el código en Wio_LTE.

```cpp
#include <Arduino.h>

#include <math.h>

#include <ublox_sara_r4.h>
#include <ublox_sara_r4_mqtt.h>
#include <UART_Interface.h>

#define PRE_FIX  "[MQTT] "

MQTT mqtt;
Ublox_sara_r4 ublox = Ublox_sara_r4();

char *server = "test.mosquitto.org";
uint16_t port = 1883;

void setup() {
	Log_info("Begin...");
	
	ublox.powerOn();
	Log_info("Waitting for module to alive...");
	while(false == ublox.isAlive()) {
		Log(".");
		delay(100);
	}  
	Logln();

	Log_info("Initializing network...");	
	if(!ublox.network_Init()) { 
		Log_error("Network initialize timeout.");
		return;
	}

	// Set MQTT server 
	if(!mqtt.setServer(server, port)) {
		Log_error("Set MQTT server failed");
		return;
	} else {
		Logln(PRE_FIX"Set MQTT server success.");
	}

	// Set will
	if(!mqtt.setWill("Heat", "ublox n/r410")) {
		Log_error("Set MQTT will failed");
		return;
	} else {
		Logln(PRE_FIX"Set MQTT will success.");
	}

	// Connect to server
	Logln(PRE_FIX"Connecting to server: " + String(server));
	while(!mqtt.connect()) {}
	Logln(CRLF PRE_FIX"Connected\n\r");
}	

void loop() 
{				
	static uint8_t tries = 0;	
	const char *topic = "Heat";
	String msg = String(random(2000, 3000)*1.0/100.0) + " degree";
	
		
	if(mqtt.publish(topic, msg.c_str())) {
		Logln(PRE_FIX" published Topic " + String(topic) + " Messagea " + msg);	
	} else {
		Log_error("MQTT publish failed");
		// while(true);
	}

	tries++;
	if(tries > 5)
	{
		if(mqtt.disconnect()) {
			Logln(PRE_FIX"Disconnect.");
		}
		Log_info("Enter AT command loop");
		while(true) AT_bypass();
	}
	
	delay(2000);
}

```

- Paso 7. Presiona **RST**, y verás la siguiente información en pantalla.

**9. Trabajar con el ejemplo Arduino MQTT Publish**

- Paso 1. Selecciona Archivo --> Ejemplos --> WioLTE_Cat_NB1_Arduino_Library --> MQTTClient --> mqtt_pub sketch.  
- Paso 2. Mantén presionado el botón BOOT en la parte trasera del Wio LTE Cat NB1 y conecta el USB a la PC.  
- Paso 3. Verás **STM BOOTLOADER** en el administrador de dispositivos.  
- Paso 4. Selecciona Herramientas --> Placas --> Wio_Tracker_LTE.  
- Paso 5. Deja el puerto COM en blanco.  
- Paso 6. Selecciona Sketch --> Subir para cargar el código en Wio_LTE.

```cpp
#include <Arduino.h>

#include <math.h>

#include <ublox_sara_r4.h>
#include <ublox_sara_r4_mqtt.h>
#include <UART_Interface.h>

#define PRE_FIX  "[MQTT] "

MQTT mqtt;
Ublox_sara_r4 ublox = Ublox_sara_r4();

char *server = "server name or IP";
uint16_t port = 1883;

void setup() {
	Log_info("Begin...");
	
	ublox.powerOn();
	Log_info("Waitting for module to alive...");
	while(false == ublox.isAlive()) {
		Log(".");
		delay(100);
	}  
	Logln();

	Log_info("Initializing network...");	
	if(!ublox.network_Init()) { 
		Log_error("Network initialize timeout.");
		return;
	}

	// Set MQTT server 
	if(!mqtt.setServer(server, port)) {
		Log_error("Set MQTT server failed");
		return;
	} else {
		Logln(PRE_FIX"Set MQTT server success.");
	}

	// Set will
	if(!mqtt.setWill("Heat", "ublox n/r410")) {
		Log_error("Set MQTT will failed");
		return;
	} else {
		Logln(PRE_FIX"Set MQTT will success.");
	}

	// Connect to server
	Logln(PRE_FIX"Connecting to server: " + String(server));
	while(!mqtt.connect()) {}
	Logln(CRLF PRE_FIX"Connected\n\r");
}	

void loop() 
{				
	static uint8_t tries = 0;	
	const char *topic = "Heat";
	String msg = String(random(2000, 3000)*1.0/100.0) + " degree";
	
		
	if(mqtt.publish(topic, msg.c_str())) {
		Logln(PRE_FIX" published Topic " + String(topic) + " Messagea " + msg);	
	} else {
		Log_error("MQTT publish failed");
		// while(true);
	}

	tries++;
	if(tries > 5)
	{
		if(mqtt.disconnect()) {
			Logln(PRE_FIX"Disconnect.");
		}
		Log_info("Enter AT command loop");
		while(true) AT_bypass();
	}
	
	delay(2000);
}

```
- Paso 7. Presiona **RST**, y verás la siguiente información en pantalla.

## Visualizador de Esquemáticos en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/res/WioLTE_Cat_NB1_Eagle-master.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle & PDF]** [WioLTE_Cat_NB1](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/res/WioLTE_Cat_NB1_Eagle-master.zip)

- **[Librería]** [WioLTE_Cat_NB1_Arduino_Library](https://github.com/Seeed-Studio/WioLTE_Cat_NB1_Arduino_Library)

- **[Datasheet]** [AT Command](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/res/SARA-R4-SARA-N4_ATCommands_(UBX-17003787).pdf)

## Soporte Técnico y Discusión de Producto

Si tienes algún problema técnico, por favor envía tu consulta a nuestro [foro](http://forum.seeedstudio.com/).  
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte diverso y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>