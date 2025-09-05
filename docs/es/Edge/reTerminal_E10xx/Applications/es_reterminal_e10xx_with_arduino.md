---
description: Este artículo describe cómo hacer que la pantalla de tinta electrónica (ePaper) de la reTerminal E Series funcione con Arduino.
title: La pantalla ePaper de reTerminal E Series funciona con Arduino
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /es/reterminal_e10xx_with_arduino
sidebar_position: 4
last_update:
  date: 08/21/2025
  author: Allen
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Primeros pasos con la pantalla ePaper de reTerminal E Series en Arduino

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/147.png" style={{width:800, height:'auto'}}/></div>

## Introducción

La reTerminal E Series representa el avance más reciente de Seeed Studio en soluciones HMI industriales, incorporando ESP32-S3 como controlador principal y pantallas ePaper integradas. Esta guía te guiará para programar la pantalla ePaper en los dispositivos reTerminal E Series usando Arduino IDE, lo que te permitirá crear interfaces y aplicaciones personalizadas con excelente visibilidad y consumo de energía ultrabajo.

### Materiales requeridos

Para completar este tutorial, prepara uno de los siguientes dispositivos reTerminal E Series:

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### Preparación del entorno

Para programar la pantalla ePaper de reTerminal E Series con Arduino, necesitarás configurar Arduino IDE con soporte para ESP32.

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

#### Configuración de Arduino IDE

**Paso 1.** Descarga e instala el [Arduino IDE](https://www.arduino.cc/en/software) y abre la aplicación Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong>
    </a>
</div><br />

**Paso 2.** Añade el soporte para placas ESP32 a Arduino IDE.

En Arduino IDE, ve a **File > Preferences** y añade la siguiente URL en el campo "Additional Boards Manager URLs":

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**Paso 3.** Instala el paquete de placa ESP32.

Navega a **Tools > Board > Boards Manager**, busca "esp32" e instala el paquete ESP32 de Espressif Systems.

**Paso 4.** Selecciona la placa correcta.

Ve a **Tools > Board > ESP32 Arduino** y selecciona **XIAO_ESP32S3**.

**Paso 5.** Conecta tu pantalla ePaper de reTerminal E Series a tu computadora usando un cable USB-C.

**Paso 6.** Selecciona el puerto correcto en **Tools > Port**.

## Programación de la pantalla ePaper

La **reTerminal E1001 incluye una pantalla ePaper en blanco y negro de 7.5 pulgadas**, mientras que la **reTerminal E1002 está equipada con una pantalla ePaper a todo color de 7.3 pulgadas**. Ambas pantallas ofrecen excelente visibilidad en diversas condiciones de iluminación con consumo de energía ultrabajo, lo que las hace ideales para aplicaciones industriales que requieren pantallas siempre encendidas con consumo mínimo.

### Uso de la librería Seeed_GFX

Para controlar la pantalla ePaper, usaremos la librería Seeed_GFX, que proporciona soporte integral para diversos dispositivos de pantalla de Seeed Studio.

**Paso 1.** Descarga la librería Seeed_GFX desde GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Descargar la librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Paso 2.** Instala la librería añadiendo el archivo ZIP en Arduino IDE. Ve a **Sketch > Include Library > Add .ZIP Library** y selecciona el archivo ZIP descargado.

:::note
Si ya has instalado previamente la biblioteca TFT_eSPI, es posible que necesites eliminarla temporalmente o cambiarle el nombre en la carpeta de bibliotecas de Arduino para evitar conflictos, ya que Seeed_GFX es un fork de TFT_eSPI con funciones adicionales para las pantallas de Seeed Studio.
:::

<Tabs>
<TabItem value="Programming reTerminal E1001" label="Programar reTerminal E1001" default>

#### Programar reTerminal E1001 (pantalla ePaper B&N de 7.5")

Exploremos un ejemplo sencillo que demuestra operaciones básicas de dibujo en la pantalla ePaper en blanco y negro.

**Paso 1.** Abre el sketch de ejemplo de la librería Seeed_GFX: **File > Examples > Seeed_GFX > ePaper > Basic > HelloWorld**

**Paso 2.** Crea un nuevo archivo llamado `driver.h` en la misma carpeta que tu sketch. Puedes hacerlo haciendo clic en el botón de flecha en Arduino IDE y seleccionando "New Tab", luego nómbralo `driver.h`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select.jpg" style={{width:1000, height:'auto'}}/></div>

**Paso 3.** Ve a la [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) y selecciona **reTerminal E1001** de la lista de dispositivos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:900, height:'auto'}}/></div>

**Paso 4.** Copia el código de configuración generado y pégalo en el archivo `driver.h`. El código debería verse así:

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 (UC8179)
```

**Paso 5.** Sube el sketch a tu reTerminal E1001. Deberías ver en la pantalla varios gráficos, incluidas líneas, texto y formas, que demuestran las capacidades básicas de dibujo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/148.jpg" style={{width:500, height:'auto'}}/></div>

</TabItem>
<TabItem value="Programming reTerminal E1002" label="Programar reTerminal E1002">

#### Programar reTerminal E1002 (pantalla ePaper a color de 7.3")

La pantalla ePaper a color admite colores rojo, negro y blanco, lo que permite interfaces visualmente más ricas.

**Paso 1.** Abre el sketch de ejemplo a color de la librería Seeed_GFX: **File > Examples > Seeed_GFX > ePaper > Colorful > HelloWorld**

**Paso 2.** Crea un nuevo archivo llamado `driver.h` en la misma carpeta que tu sketch, siguiendo el mismo proceso anterior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select2.jpg" style={{width:1000, height:'auto'}}/></div>

**Paso 3.** Ve a la [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) y selecciona **reTerminal E1002** de la lista de dispositivos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx2.jpg" style={{width:900, height:'auto'}}/></div>

**Paso 4.** Copia el código de configuración generado y pégalo en el archivo `driver.h`. El código debería verse así:

```cpp
#define BOARD_SCREEN_COMBO 521 // reTerminal E1002 (UC8179C)
```

**Paso 5.** Sube el sketch a tu reTerminal E1002. La pantalla mostrará gráficos a color que demuestran las capacidades a todo color de la pantalla ePaper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/149.jpg" style={{width:500, height:'auto'}}/></div>

</TabItem>
</Tabs>

### Uso de la librería GxEPD2

Además de Seeed_GFX, también puedes utilizar la librería `GxEPD2` para controlar la pantalla ePaper de reTerminal. `GxEPD2` es una librería potente y popular que admite una amplia gama de pantallas de tinta electrónica.

**Instalación de la librería GxEPD2**

Para asegurarte de contar con las funciones y compatibilidad más recientes, es preferible instalar la librería `GxEPD2` manualmente desde su repositorio de GitHub.

**Paso 1.** Ve al repositorio de GitHub de GxEPD2. Haz clic en el botón "Code" y luego selecciona "Download ZIP" para guardar la librería en tu computadora.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/ZinggJM/GxEPD2" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Descargar la librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Paso 2.** En Arduino IDE, instala la librería desde el archivo descargado. Navega a **Sketch > Include Library > Add .ZIP Library...** y selecciona el archivo ZIP que acabas de descargar.

**Paso 3.** La librería `GxEPD2` requiere la `Adafruit GFX Library` para funcionar, que también debes instalar. La forma más sencilla es a través del Library Manager: ve a **Tools > Manage Libraries...**, busca "Adafruit GFX Library" y haz clic en "Install".

:::note
Aunque `GxEPD2` está disponible en el Administrador de Bibliotecas de Arduino para mayor comodidad, la versión que se encuentra allí a menudo puede estar desactualizada. El repositorio de GitHub es la fuente definitiva de la versión más reciente, que incluye las funciones más nuevas, correcciones de errores y soporte para las pantallas de tinta electrónica más recientes. Por lo tanto, se recomienda descargar la biblioteca directamente desde GitHub para asegurarse de tener el código más actualizado.
:::

<Tabs>
<TabItem value="Programming reTerminal E1001 GxEPD2" label="Programar reTerminal E1001" default>

#### Programar reTerminal E1001 (pantalla B&N)

Aquí tienes el código de ejemplo para mostrar "Hello World!" en la pantalla ePaper en blanco y negro de la reTerminal E1001 usando la librería `GxEPD2`. Establece `EPD_SELECT` en `0` para seleccionar el controlador del E1001.

```cpp
#include <GxEPD2_BW.h>
#include <GxEPD2_7C.h>
#include <Fonts/FreeMonoBold9pt7b.h>

// Define ePaper SPI pins
#define EPD_SCK_PIN  7
#define EPD_MOSI_PIN 9
#define EPD_CS_PIN   10
#define EPD_DC_PIN   11
#define EPD_RES_PIN  12
#define EPD_BUSY_PIN 13

// Select the ePaper driver to use
// 0: reTerminal E1001 (7.5'' B&W)
// 1: reTerminal E1002 (7.3'' Color)
#define EPD_SELECT 0

#if (EPD_SELECT == 0)
#define GxEPD2_DISPLAY_CLASS GxEPD2_BW
#define GxEPD2_DRIVER_CLASS GxEPD2_750_GDEY075T7 // 7.5'' B&W driver
#elif (EPD_SELECT == 1)
#define GxEPD2_DISPLAY_CLASS GxEPD2_7C
#define GxEPD2_DRIVER_CLASS GxEPD2_730c_GDEP073E01 // 7.3'' Color driver
#endif

#define MAX_DISPLAY_BUFFER_SIZE 16000

#define MAX_HEIGHT(EPD)                                        \
    (EPD::HEIGHT <= MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8) \
         ? EPD::HEIGHT                                         \
         : MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8))

// Initialize display object
GxEPD2_DISPLAY_CLASS<GxEPD2_DRIVER_CLASS, MAX_HEIGHT(GxEPD2_DRIVER_CLASS)>
    display(GxEPD2_DRIVER_CLASS(/*CS=*/EPD_CS_PIN, /*DC=*/EPD_DC_PIN,
                                /*RST=*/EPD_RES_PIN, /*BUSY=*/EPD_BUSY_PIN));

SPIClass hspi(HSPI);

void setup()
{
  pinMode(EPD_RES_PIN, OUTPUT);
  pinMode(EPD_DC_PIN, OUTPUT);
  pinMode(EPD_CS_PIN, OUTPUT);

  // Initialize SPI
  hspi.begin(EPD_SCK_PIN, -1, EPD_MOSI_PIN, -1);
  display.epd2.selectSPI(hspi, SPISettings(2000000, MSBFIRST, SPI_MODE0));

  // Initialize display
  display.init(0);
  helloWorld();
}

const char HelloWorld[] = "Hello World!";

void helloWorld()
{
  display.setRotation(0);
  display.setFont(&FreeMonoBold9pt7b);
  display.setTextColor(GxEPD_BLACK);
  int16_t tbx, tby; uint16_t tbw, tbh;
  display.getTextBounds(HelloWorld, 0, 0, &tbx, &tby, &tbw, &tbh);
  
  // center the bounding box by transposition of the origin:
  uint16_t x = ((display.width() - tbw) / 2) - tbx;
  uint16_t y = ((display.height() - tbh) / 2) - tby;
  
  display.setFullWindow();
  display.firstPage();
  do
  {
    display.fillScreen(GxEPD_WHITE);
    display.setCursor(x, y);
    display.print(HelloWorld);
  }
  while (display.nextPage());
}

void loop() {};
```

</TabItem>
<TabItem value="Programming reTerminal E1002 GxEPD2" label="Programar reTerminal E1002">

#### Programar reTerminal E1002 (pantalla a color)

Para la reTerminal E1002, simplemente cambia el valor de `EPD_SELECT` a `1`. Esto seleccionará el controlador adecuado para la pantalla ePaper a color de 7.3 pulgadas. El resto del código permanece igual.

```cpp
#include <GxEPD2_BW.h>
#include <GxEPD2_7C.h>
#include <Fonts/FreeMonoBold9pt7b.h>

// Define ePaper SPI pins
#define EPD_SCK_PIN  7
#define EPD_MOSI_PIN 9
#define EPD_CS_PIN   10
#define EPD_DC_PIN   11
#define EPD_RES_PIN  12
#define EPD_BUSY_PIN 13

// Select the ePaper driver to use
// 0: reTerminal E1001 (7.5'' B&W)
// 1: reTerminal E1002 (7.3'' Color)
#define EPD_SELECT 1

#if (EPD_SELECT == 0)
#define GxEPD2_DISPLAY_CLASS GxEPD2_BW
#define GxEPD2_DRIVER_CLASS GxEPD2_750_GDEY075T7 // 7.5'' B&W driver
#elif (EPD_SELECT == 1)
#define GxEPD2_DISPLAY_CLASS GxEPD2_7C
#define GxEPD2_DRIVER_CLASS GxEPD2_730c_GDEP073E01 // 7.3'' Color driver
#endif

#define MAX_DISPLAY_BUFFER_SIZE 16000

#define MAX_HEIGHT(EPD)                                        \
    (EPD::HEIGHT <= MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8) \
         ? EPD::HEIGHT                                         \
         : MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8))

// Initialize display object
GxEPD2_DISPLAY_CLASS<GxEPD2_DRIVER_CLASS, MAX_HEIGHT(GxEPD2_DRIVER_CLASS)>
    display(GxEPD2_DRIVER_CLASS(/*CS=*/EPD_CS_PIN, /*DC=*/EPD_DC_PIN,
                                /*RST=*/EPD_RES_PIN, /*BUSY=*/EPD_BUSY_PIN));

SPIClass hspi(HSPI);

void setup()
{
  pinMode(EPD_RES_PIN, OUTPUT);
  pinMode(EPD_DC_PIN, OUTPUT);
  pinMode(EPD_CS_PIN, OUTPUT);

  // Initialize SPI
  hspi.begin(EPD_SCK_PIN, -1, EPD_MOSI_PIN, -1);
  display.epd2.selectSPI(hspi, SPISettings(2000000, MSBFIRST, SPI_MODE0));

  // Initialize display
  display.init(0);
  helloWorld();
}

const char HelloWorld[] = "Hello World!";

void helloWorld()
{
  display.setRotation(0);
  display.setFont(&FreeMonoBold9pt7b);
  // For the color screen, you can set different colors, e.g., GxEPD_BLACK, GxEPD_RED
  display.setTextColor(GxEPD_GREEN);
  int16_t tbx, tby; uint16_t tbw, tbh;
  display.getTextBounds(HelloWorld, 0, 0, &tbx, &tby, &tbw, &tbh);
  
  // center the bounding box by transposition of the origin:
  uint16_t x = ((display.width() - tbw) / 2) - tbx;
  uint16_t y = ((display.height() - tbh) / 2) - tby;
  
  display.setFullWindow();
  display.firstPage();
  do
  {
    display.fillScreen(GxEPD_WHITE);
    display.setCursor(x, y);
    display.print(HelloWorld);
  }
  while (display.nextPage());
}

void loop() {};
```

</TabItem>
</Tabs>

:::note
Las pantallas de tinta electrónica tienen una velocidad de actualización relativamente lenta (normalmente de 1 a 3 segundos para una actualización completa). Este es un comportamiento normal y es el precio a pagar por su consumo de energía ultrabajo y su excelente visibilidad sin retroiluminación.
:::

## Rutinas de uso para el hardware de reTerminal

Ahora exploremos las funciones principales de la reTerminal E Series con ejemplos de código en Arduino.

### Control de LED

La reTerminal E Series tiene un LED a bordo que puede controlarse mediante GPIO6. Ten en cuenta que la lógica del LED está invertida (LOW = ENCENDIDO, HIGH = APAGADO).

```cpp
// reTerminal E Series - LED Control Example

#define SERIAL_RX 44
#define SERIAL_TX 43
#define LED_PIN 6  // GPIO6 - Onboard LED (inverted logic)

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }
  
  Serial1.println("LED Control Example");
  
  // Configure LED pin
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  // Turn LED ON (LOW because it's inverted)
  digitalWrite(LED_PIN, LOW);
  Serial1.println("LED ON");
  delay(1000);
  
  // Turn LED OFF (HIGH because it's inverted)
  digitalWrite(LED_PIN, HIGH);
  Serial1.println("LED OFF");
  delay(1000);
}
```

### Control del zumbador (Buzzer)

La reTerminal E Series incluye un zumbador en GPIO7 que puede producir diversos tonos y sonidos de alerta.

```cpp
// reTerminal E Series - Buzzer Control Example

#define SERIAL_RX 44
#define SERIAL_TX 43
#define BUZZER_PIN 45  // GPIO45 - Buzzer

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }
  
  Serial1.println("Buzzer Control Example");
}

void loop() {
  Serial1.println("Simple beep");
  tone(BUZZER_PIN, 1000, 100);  // 1kHz for 100ms
  delay(1000);
  
  Serial1.println("Double beep");
  for (int i = 0; i < 2; i++) {
    tone(BUZZER_PIN, 2000, 50);  // 2kHz for 50ms
    delay(100);
  }
  delay(900);
  
  Serial1.println("Long beep");
  tone(BUZZER_PIN, 800, 500);  // 800Hz for 500ms
  delay(1500);
  
  Serial1.println("Alarm sound");
  for (int i = 0; i < 5; i++) {
    tone(BUZZER_PIN, 1500, 100);
    delay(100);
    tone(BUZZER_PIN, 1000, 100);
    delay(100);
  }
  delay(2000);
}
```

**Zumbador con tonos**

```cpp
#define SERIAL_RX 44
#define SERIAL_TX 43
#define BUZZER_PIN 45  // GPIO7 - Buzzer

// Reference:  This list was adapted from the table located here:
//    http://www.phy.mtu.edu/~suits/notefreqs.html
#define  NOTE_C0  16.35  //C0
#define  NOTE_Db0 17.32  //C#0/Db0
#define  NOTE_D0  18.35  //D0
#define  NOTE_Eb0 19.45 //D#0/Eb0
#define  NOTE_E0  20.6  //E0
#define  NOTE_F0  21.83  //F0
#define  NOTE_Gb0 23.12  //F#0/Gb0
#define  NOTE_G0  24.5  //G0
#define  NOTE_Ab0 25.96  //G#0/Ab0
#define  NOTE_A0  27.5  //A0
#define  NOTE_Bb0 29.14  //A#0/Bb0
#define  NOTE_B0  30.87  //B0
#define  NOTE_C1  32.7  //C1
#define  NOTE_Db1 34.65  //C#1/Db1
#define  NOTE_D1  36.71  //D1
#define  NOTE_Eb1 38.89  //D#1/Eb1
#define  NOTE_E1  41.2  //E1
#define  NOTE_F1  43.65  //F1
#define  NOTE_Gb1 46.25  //F#1/Gb1
#define  NOTE_G1  49 //G1
#define  NOTE_Ab1 51.91  //G#1/Ab1
#define  NOTE_A1  55  //A1
#define  NOTE_Bb1 58.27  //A#1/Bb1
#define  NOTE_B1  61.74  //B1
#define  NOTE_C2  65.41  //C2 (Middle C)
#define  NOTE_Db2 69.3  //C#2/Db2
#define  NOTE_D2  73.42  //D2
#define  NOTE_Eb2 77.78  //D#2/Eb2
#define  NOTE_E2  82.41  //E2
#define  NOTE_F2  87.31  //F2
#define  NOTE_Gb2 92.5  //F#2/Gb2
#define  NOTE_G2  98  //G2
#define  NOTE_Ab2 103.83  //G#2/Ab2
#define  NOTE_A2  110  //A2
#define  NOTE_Bb2 116.54  //A#2/Bb2
#define  NOTE_B2  123.47  //B2
#define  NOTE_C3  130.81  //C3
#define  NOTE_Db3 138.59  //C#3/Db3
#define  NOTE_D3  146.83  //D3
#define  NOTE_Eb3 155.56  //D#3/Eb3
#define  NOTE_E3  164.81  //E3
#define  NOTE_F3  174.61  //F3
#define  NOTE_Gb3 185  //F#3/Gb3
#define  NOTE_G3  196  //G3
#define  NOTE_Ab3 207.65  //G#3/Ab3
#define  NOTE_A3  220  //A3
#define  NOTE_Bb3 233.08  //A#3/Bb3
#define  NOTE_B3  246.94  //B3
#define  NOTE_C4  261.63  //C4
#define  NOTE_Db4 277.18  //C#4/Db4
#define  NOTE_D4  293.66  //D4
#define  NOTE_Eb4 311.13  //D#4/Eb4
#define  NOTE_E4  329.63  //E4
#define  NOTE_F4  349.23  //F4
#define  NOTE_Gb4 369.99  //F#4/Gb4
#define  NOTE_G4  392  //G4
#define  NOTE_Ab4 415.3  //G#4/Ab4
#define  NOTE_A4  440  //A4
#define  NOTE_Bb4 466.16  //A#4/Bb4
#define  NOTE_B4  493.88  //B4
#define  NOTE_C5  523.25  //C5
#define  NOTE_Db5 554.37  //C#5/Db5
#define  NOTE_D5  587.33  //D5
#define  NOTE_Eb5 622.25  //D#5/Eb5
#define  NOTE_E5  659.26  //E5
#define  NOTE_F5  698.46  //F5
#define  NOTE_Gb5 739.99  //F#5/Gb5
#define  NOTE_G5  783.99  //G5
#define  NOTE_Ab5 830.61  //G#5/Ab5
#define  NOTE_A5  880  //A5
#define  NOTE_Bb5 932.33  //A#5/Bb5
#define  NOTE_B5  987.77  //B5
#define  NOTE_C6  1046.5  //C6
#define  NOTE_Db6 1108.73  //C#6/Db6
#define  NOTE_D6  1174.66  //D6
#define  NOTE_Eb6 1244.51  //D#6/Eb6
#define  NOTE_E6  1318.51  //E6
#define  NOTE_F6  1396.91  //F6
#define  NOTE_Gb6 1479.98  //F#6/Gb6
#define  NOTE_G6  1567.98  //G6
#define  NOTE_Ab6 1661.22  //G#6/Ab6
#define  NOTE_A6  1760  //A6
#define  NOTE_Bb6 1864.66  //A#6/Bb6
#define  NOTE_B6  1975.53  //B6
#define  NOTE_C7  2093  //C7
#define  NOTE_Db7 2217.46  //C#7/Db7
#define  NOTE_D7  2349.32  //D7
#define  NOTE_Eb7 2489.02  //D#7/Eb7
#define  NOTE_E7  2637.02  //E7
#define  NOTE_F7  2793.83  //F7
#define  NOTE_Gb7 2959.96  //F#7/Gb7
#define  NOTE_G7  3135.96  //G7
#define  NOTE_Ab7 3322.44  //G#7/Ab7
#define  NOTE_A7  3520  //A7
#define  NOTE_Bb7 3729.31  //A#7/Bb7
#define  NOTE_B7  3951.07  //B7
#define  NOTE_C8  4186.01  //C8
#define  NOTE_Db8 4434.92  //C#8/Db8
#define  NOTE_D8  4698.64  //D8
#define  NOTE_Eb8 4978.03  //D#8/Eb8

void buzzer_tone (float noteFrequency, long noteDuration, int silentDuration){
  if(silentDuration==0) {silentDuration=1;}

  tone(BUZZER_PIN, noteFrequency, noteDuration);
  delay(noteDuration);     // milliseconds
  noTone(BUZZER_PIN);      // stop the tone

  delay(silentDuration);
}

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }
  
  Serial1.println("Buzzer Control Example");
  
  // Configure buzzer pin
  pinMode(BUZZER_PIN, OUTPUT);
}

void loop() {
  buzzer_tone(NOTE_C5, 80, 20);
  buzzer_tone(NOTE_E5, 80, 20);
  buzzer_tone(NOTE_G5, 80, 20);
  buzzer_tone(NOTE_C6, 150, 0);
  delay(30000);
}
```

**Funciones del zumbador:**

- `digitalWrite()`: Control simple ENCENDIDO/APAGADO para pitidos básicos
- `tone(pin, frequency, duration)`: Genera frecuencias específicas para melodías o alertas
- `noTone(pin)`: Detiene la generación de tono

**Patrones de alerta comunes:**

- Pitido único: Confirmación
- Doble pitido: Advertencia
- Triple pitido: Error
- Continuo: Alerta crítica

### Botones de usuario

La reTerminal E Series incorpora tres botones programables por el usuario que pueden utilizarse para diversos fines de control. Esta sección demuestra cómo leer estados de botones y responder a las pulsaciones usando Arduino.

La reTerminal E Series tiene tres botones conectados al ESP32-S3:

- **KEY0** (GPIO3): Botón derecho (botón verde)
- **KEY1** (GPIO4): Botón central
- **KEY2** (GPIO5): Botón izquierdo

Todos los botones son de activo-bajo, lo que significa que leen LOW cuando están presionados y HIGH cuando están liberados.

#### Ejemplo básico de lectura de botones

Este ejemplo demuestra cómo detectar pulsaciones y mostrar mensajes en el monitor serie.

```cpp
// reTerminal E Series - Button Test
// Based on hardware schematic

// Define button pins according to schematic
const int BUTTON_KEY0 = 3;   // KEY0 - GPIO3
const int BUTTON_KEY1 = 4;   // KEY1 - GPIO4
const int BUTTON_KEY2 = 5;   // KEY2 - GPIO5

// Button state variables
bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

void setup() {
  // Initialize serial communication
  Serial1.begin(115200, SERIAL_8N1, 44, 43);
  while (!Serial1) {
    delay(10); // Wait for serial port to connect
  }
  
  Serial1.println("=================================");
  Serial1.println("reTerminal E Series - Button Test");
  Serial1.println("=================================");
  Serial1.println("Press any button to see output");
  Serial1.println();
  
  // Configure button pins as inputs
  // Hardware already has pull-up resistors, so use INPUT mode
  pinMode(BUTTON_KEY0, INPUT);
  pinMode(BUTTON_KEY1, INPUT);
  pinMode(BUTTON_KEY2, INPUT);
  
  // Read initial states
  lastKey0State = digitalRead(BUTTON_KEY0);
  lastKey1State = digitalRead(BUTTON_KEY1);
  lastKey2State = digitalRead(BUTTON_KEY2);
  
  Serial1.println("Setup complete. Ready to detect button presses...");
}

void loop() {
  // Read current button states
  bool key0State = digitalRead(BUTTON_KEY0);
  bool key1State = digitalRead(BUTTON_KEY1);
  bool key2State = digitalRead(BUTTON_KEY2);
  
  // Check KEY0
  if (key0State != lastKey0State) {
    if (key0State == LOW) {
      Serial1.println("KEY0 (GPIO3) pressed!");
    } else {
      Serial1.println("KEY0 (GPIO3) released!");
    }
    lastKey0State = key0State;
    delay(50); // Debounce delay
  }
  
  // Check KEY1
  if (key1State != lastKey1State) {
    if (key1State == LOW) {
      Serial1.println("KEY1 (GPIO4) pressed!");
    } else {
      Serial1.println("KEY1 (GPIO4) released!");
    }
    lastKey1State = key1State;
    delay(50); // Debounce delay
  }
  
  // Check KEY2
  if (key2State != lastKey2State) {
    if (key2State == LOW) {
      Serial1.println("KEY2 (GPIO5) pressed!");
    } else {
      Serial1.println("KEY2 (GPIO5) released!");
    }
    lastKey2State = key2State;
    delay(50); // Debounce delay
  }
  
  delay(10); // Small delay to prevent excessive CPU usage
}
```

**Cómo funciona el código:**

1. **Definición de pines**: Definimos constantes para cada número de pin GPIO del botón.
2. **Configuración de pines**: En `setup()`, configuramos cada pin como `INPUT`.
3. **Detección de botones**: En `loop()`, comprobamos continuamente el estado de cada botón con `digitalRead()`. Cuando un botón se presiona, el pin lee LOW.
4. **Antirrebote**: Un simple retardo de 200 ms tras cada pulsación evita múltiples detecciones por rebote mecánico.
5. **Salida serie**: Cada pulsación genera un mensaje en el monitor serie para depuración y verificación.

---

**Paso 1.** Sube el código a tu dispositivo reTerminal E Series.

**Paso 2.** Abre el Monitor Serie en Arduino IDE (Tools > Serial Monitor).

**Paso 3.** Configura la velocidad en 115200.

**Paso 4.** Presiona cada botón y observa la salida en el Monitor Serie.

Salida esperada al presionar botones:

```
=================================
reTerminal E Series - Button Test
=================================
Press any button to see output

KEY0 (GPIO3) pressed!
KEY0 (GPIO3) released!
KEY1 (GPIO4) pressed!
KEY1 (GPIO4) released!
KEY2 (GPIO5) pressed!
KEY2 (GPIO5) released!
```

### Sensor ambiental (SHT4x)

La reTerminal E Series incluye un sensor de temperatura y humedad SHT4x integrado y conectado vía I2C.

#### Instalación de librerías requeridas

Instala dos librerías mediante Arduino Library Manager (**Tools > Manage Libraries...**):

1. Busca e instala "**Sensirion I2C SHT4x**"
2. Busca e instala "**Sensirion Core**" (dependencia)

#### Ejemplo básico de temperatura y humedad

```cpp
// reTerminal E Series - SHT40 Temperature & Humidity Sensor Example

#include <Wire.h>
#include <SensirionI2cSht4x.h>

// Serial configuration for reTerminal E Series
#define SERIAL_RX 44
#define SERIAL_TX 43

// I2C pins for reTerminal E Series
#define I2C_SDA 19
#define I2C_SCL 20

// Create sensor object
SensirionI2cSht4x sht4x;

void setup() {
    // Initialize Serial1 for reTerminal E Series
    Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
    while (!Serial1) {
        delay(10);
    }

    Serial1.println("SHT4x Basic Example");
    
    // Initialize I2C with custom pins
    Wire.begin(I2C_SDA, I2C_SCL);
    
    uint16_t error;
    char errorMessage[256];

    // Initialize the sensor
    sht4x.begin(Wire, 0x44);

    // Read and print serial number
    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);

    if (error) {
        Serial1.print("Error trying to execute serialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial1.println(errorMessage);
    } else {
        Serial1.print("Serial Number: ");
        Serial1.println(serialNumber);
        Serial1.println();
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(5000);  // Wait 5 seconds between measurements

    float temperature;
    float humidity;
    
    // Measure temperature and humidity with high precision
    error = sht4x.measureHighPrecision(temperature, humidity);
    
    if (error) {
        Serial1.print("Error trying to execute measureHighPrecision(): ");
        errorToString(error, errorMessage, 256);
        Serial1.println(errorMessage);
    } else {
        Serial1.print("Temperature: ");
        Serial1.print(temperature);
        Serial1.print("°C\t");
        Serial1.print("Humidity: ");
        Serial1.print(humidity);
        Serial1.println("%");
    }
}
```

**Función `setup`:**

1. **Inicialización serie**: Usa `Serial1` con pines 44 (RX) y 43 (TX) específicos de reTerminal E Series.
2. **Inicialización I2C**: Configura I2C con pines 19 (SDA) y 20 (SCL).
3. **Inicialización del sensor**: Llama a `sht4x.begin(Wire, 0x44)` para inicializar el sensor SHT4x en la dirección 0x44.
4. **Lectura de número de serie**: Lee y muestra el número de serie único del sensor para verificación.

**Función `loop`:**

1. **Retardo**: Espera 5 segundos entre mediciones para evitar sobre-muestreo.
2. **Medición**: Usa `measureHighPrecision()` para lecturas precisas (tarda ~8.3 ms).
3. **Gestión de errores**: Comprueba errores y los convierte a mensajes legibles con `errorToString()`.
4. **Mostrar resultados**: Imprime temperatura en Celsius y porcentaje de humedad relativa.

**Salida esperada**

```
SHT4x Basic Example
Serial Number: 331937553

Temperature: 27.39°C Humidity: 53.68%
Temperature: 27.40°C Humidity: 53.51%
Temperature: 27.38°C Humidity: 53.37%
```

### Sistema de gestión de batería

La reTerminal E Series incluye capacidad de monitorización de voltaje de batería mediante un pin ADC con un circuito divisor de voltaje.

#### Monitorización simple de voltaje de batería

```cpp
// reTerminal E Series - Simple Battery Voltage Reading

// Serial configuration
#define SERIAL_RX 44
#define SERIAL_TX 43

// Battery monitoring pins
#define BATTERY_ADC_PIN 1      // GPIO1 - Battery voltage ADC
#define BATTERY_ENABLE_PIN 21  // GPIO21 - Battery monitoring enable

void setup() {
  // Initialize serial
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }
  
  Serial1.println("Battery Voltage Monitor");
  
  // Configure battery monitoring enable pin
  pinMode(BATTERY_ENABLE_PIN, OUTPUT);
  digitalWrite(BATTERY_ENABLE_PIN, HIGH);  // Enable battery monitoring
  
  // Configure ADC
  analogReadResolution(12);  // 12-bit resolution
  analogSetPinAttenuation(BATTERY_ADC_PIN, ADC_11db);
  
  delay(100);  // Allow circuit to stabilize
}

void loop() {
  // Enable battery monitoring
  digitalWrite(BATTERY_ENABLE_PIN, HIGH);
  delay(5);
  
  // Read voltage in millivolts
  int mv = analogReadMilliVolts(BATTERY_ADC_PIN);
  
  // Disable battery monitoring
  digitalWrite(BATTERY_ENABLE_PIN, LOW);
  
  // Calculate actual battery voltage (2x due to voltage divider)
  float batteryVoltage = (mv / 1000.0) * 2;
  
  // Print voltage
  Serial1.print("Battery: ");
  Serial1.print(batteryVoltage, 2);
  Serial1.println(" V");
  
  delay(2000);
}
```

**Explicación del código:**

- GPIO1 lee el voltaje dividido de la batería mediante el ADC.
- GPIO21 habilita el circuito de monitorización de batería.
- El voltaje real de la batería es el doble del medido debido al divisor de voltaje.
- Para una batería LiPo completamente cargada, espera alrededor de 4.2 V.
- Cuando la batería está baja, el voltaje cae a alrededor de 3.3 V.

**Salida esperada**

```
Battery Voltage Monitor

Battery: 4.18 V
Battery: 4.19 V
Battery: 4.18 V
```

### Uso de la tarjeta MicroSD

Para aplicaciones que requieren almacenamiento adicional, como un marco de fotos digital o registro de datos, la reTerminal E Series incluye una ranura para tarjeta MicroSD.

Inserta una tarjeta microSD si planeas usar el dispositivo como marco de fotos digital o necesitas almacenamiento adicional.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
La serie reTerminal E solo admite tarjetas MicroSD de hasta 64 GB formateadas con el sistema de archivos **Fat32**.
:::

#### Operaciones básicas con SD: listado de archivos

Este ejemplo demuestra cómo inicializar la tarjeta SD, detectar cuándo se inserta o se extrae y listar todos los archivos y directorios en su raíz. El código es idéntico tanto para **reTerminal E1001** como para **reTerminal E1002**.

Copia el siguiente código en tu sketch de Arduino IDE.

```cpp
#include <SD.h>
#include <SPI.h>

// SD Card Pin Definitions
#define SD_EN_PIN   16  // Power enable for the SD card slot
#define SD_DET_PIN  15  // Card detection pin
#define SD_CS_PIN   14  // Chip Select for the SD card
#define SD_MOSI_PIN 9   // Shared with ePaper Display
#define SD_MISO_PIN 8
#define SD_SCK_PIN  7   // Shared with ePaper Display

// Serial configuration for reTerminal E Series
#define SERIAL_RX 44
#define SERIAL_TX 43

// Use the HSPI bus for the SD card to avoid conflict with other peripherals
SPIClass spiSD(HSPI);

// Global variables to track SD card state
bool sdMounted = false;
bool lastCardPresent = false;
unsigned long lastCheckMs = 0;
const unsigned long checkIntervalMs = 1000; // Check for card changes every second

// Checks if a card is physically inserted.
// The detection pin is LOW when a card is present.
bool isCardInserted() {
  return digitalRead(SD_DET_PIN) == LOW;
}

// Helper function to print indentation for directory listing
void printIndent(uint8_t level) {
  for (uint8_t i = 0; i < level; ++i) {
    Serial1.print("  ");
  }
}

// Recursively lists files and directories
void listDir(File dir, uint8_t level) {
  while (true) {
    File entry = dir.openNextFile();
    if (!entry) {
      // No more entries in this directory
      break;
    }

    printIndent(level);
    if (entry.isDirectory()) {
      Serial1.print("[DIR]  ");
      Serial1.println(entry.name());
      // Recurse into the subdirectory
      listDir(entry, level + 1);
    } else {
      // It's a file, print its name and size
      Serial1.print("[FILE] ");
      Serial1.print(entry.name());
      Serial1.print("  ");
      Serial1.print(entry.size());
      Serial1.println(" bytes");
    }
    entry.close();
  }
}

// Opens the root directory and starts the listing process
void listRoot() {
  File root = SD.open("/");
  if (!root) {
    Serial1.println("[SD] Failed to open root directory.");
    return;
  }
  if (!root.isDirectory()) {
    Serial1.println("[SD] Root is not a directory.");
    root.close();
    return;
  }
  Serial1.println("[SD] Listing files in /");
  listDir(root, 0);
  root.close();
}

// Initializes the SPI bus and mounts the SD card
bool mountSD() {
  // Enable power to the SD card slot
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);
  delay(5);

  // Initialize the HSPI bus with the correct pins for the SD card
  spiSD.end(); // Guard against repeated begin calls
  spiSD.begin(SD_SCK_PIN, SD_MISO_PIN, SD_MOSI_PIN, SD_CS_PIN);

  // Attempt to mount the SD card file system
  if (!SD.begin(SD_CS_PIN, spiSD)) {
    Serial1.println("[SD] MicroSD initialization failed. Check card formatting.");
    return false;
  }
  Serial1.println("[SD] MicroSD mounted successfully.");
  return true;
}

// Unmounts the SD card by releasing the SPI bus
void unmountSD() {
  SD.end();
  spiSD.end();
  Serial1.println("[SD] MicroSD unmounted.");
}

void setup() {
  // Start the secondary serial port for output
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10); // Wait for Serial1 to be ready
  }

  // Set up the card detection pin with an internal pull-up resistor
  pinMode(SD_DET_PIN, INPUT_PULLUP);
  // Set up the power enable pin
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);

  // Check for a card at startup
  lastCardPresent = isCardInserted();
  if (lastCardPresent) {
    sdMounted = mountSD();
    if (sdMounted) {
      listRoot(); // If mounted, list files
    }
  } else {
    Serial1.println("[SD] No card detected at startup. Please insert a card.");
  }
}

void loop() {
  // Periodically check for card insertion or removal without blocking the loop
  unsigned long now = millis();
  if (now - lastCheckMs >= checkIntervalMs) {
    lastCheckMs = now;

    bool present = isCardInserted();
    if (present != lastCardPresent) {
      lastCardPresent = present; // Update the state

      if (present) {
        Serial1.println("\n[SD] Card inserted.");
        if (!sdMounted) {
          sdMounted = mountSD();
        }
        if (sdMounted) {
          listRoot(); // List files upon insertion
        }
      } else {
        Serial1.println("\n[SD] Card removed.");
        if (sdMounted) {
          unmountSD();
          sdMounted = false;
        }
      }
    }
  }
  // You can place other non-blocking code here
}
```

##### Explicación del código

- **Definición de pines:** El código comienza definiendo los pines GPIO usados para la ranura MicroSD. Ten en cuenta que los pines SPI (`MOSI`, `SCK`) se comparten con la pantalla ePaper, pero un Chip Select independiente (`SD_CS_PIN`) y una instancia SPI dedicada (`spiSD`) garantizan que puedan usarse de forma independiente.
- **Inicialización SPI:** Instanciamos un nuevo objeto SPI, `spiSD(HSPI)`, para utilizar el segundo controlador SPI por hardware del ESP32 (HSPI). Es la mejor práctica para evitar conflictos con otros dispositivos SPI.
- **Detección de tarjeta:** La función `isCardInserted()` lee `SD_DET_PIN`. En el hardware de reTerminal, este pin está en LOW cuando hay una tarjeta presente.
- **Montar/Desmontar:** La función `mountSD()` habilita la alimentación de la ranura, configura el bus HSPI con los pines correctos y llama a `SD.begin()` para inicializar el sistema de archivos. `unmountSD()` libera los recursos.
- **Listado de archivos:** `listRoot()` abre el directorio raíz (`/`), y `listDir()` es una función recursiva que recorre el sistema de archivos, imprimiendo los nombres de todos los archivos y directorios.
- **`setup()`:** Inicializa `Serial1` para salida, configura el pin de detección de tarjeta y realiza una comprobación inicial para ver si ya hay una tarjeta insertada al encender el dispositivo.
- **`loop()`:** En lugar de comprobar la tarjeta constantemente, el código utiliza un temporizador no bloqueante (`millis()`) para detectar cambios en el estado de la tarjeta una vez por segundo. Si se detecta un cambio (inserción o extracción), monta o desmonta la tarjeta e imprime el estado en el monitor serie.

##### Resultados esperados

1. Sube el código a tu reTerminal.
2. Abre el Monitor Serie de Arduino IDE (**Tools > Serial Monitor**).
3. Asegúrate de que la velocidad esté configurada en **115200**.

Verás una salida correspondiente a las siguientes acciones:

- **Al iniciar sin tarjeta:** El monitor imprimirá `[SD] No card detected at startup...`
- **Cuando insertes una tarjeta:** El monitor imprimirá `[SD] Card inserted.`, seguido de un listado completo de todos los archivos y directorios de la tarjeta.
- **Cuando retires la tarjeta:** El monitor imprimirá `[SD] Card removed.`

```
[FILE] live.0.shadowIndexGroups  6 bytes
[FILE] reverseStore.updates  1 bytes
[DIR]  journals.repair
[FILE] Cab.modified  0 bytes
[FILE] live.1.indexPositionTable  8192 bytes
[FILE] live.1.indexTermIds  8192 bytes
[FILE] tmp.spotlight.loc  2143 bytes
[FILE] live.1.shadowIndexTermIds  624 bytes
[FILE] live.1.indexArrays  65536 bytes
[FILE] live.1.shadowIndexArrays  65536 bytes
[FILE] live.1.indexHead  4096 bytes
[FILE] live.1.indexPostings  4096 bytes
```

### Ejemplo avanzado: mostrar imágenes BMP desde la SD

Este ejemplo integral combina las funcionalidades de las secciones anteriores. Escribiremos un programa que lea un archivo Bitmap (`.bmp`) desde una tarjeta MicroSD y lo muestre en la pantalla ePaper de la reTerminal. Esto demuestra una aplicación práctica y real del dispositivo.

El programa buscará un archivo llamado `test.bmp` en el directorio raíz de la tarjeta SD.

#### Preparación

Antes de ejecutar el código, debes preparar correctamente tanto la tarjeta MicroSD como el archivo de imagen. Este es el paso más crítico para asegurar que la imagen se muestre correctamente.

**1. Formatea la tarjeta MicroSD**

Prepara una tarjeta MicroSD (se recomienda de 64 GB o menor) y formátala usando el sistema de archivos **FAT32**.

**2. Prepara el archivo de imagen**

El método de preparación de la imagen difiere ligeramente según tu modelo de reTerminal. Sigue la guía que corresponda a tu dispositivo.

<Tabs>
<TabItem value="For reTerminal E1001 (B&W Screen)" label="Para reTerminal E1001 (pantalla B&N)" default>

La pantalla en blanco y negro solo puede mostrar píxeles negros y blancos. Aunque nuestro código puede convertir una imagen a escala de grises en tiempo real, obtendrás mucho mejor contraste y detalle si **preconviertes la imagen a una escala de grises de alta calidad en tu computadora**.

1. **Redimensiona la imagen:** Ajusta tu imagen a **800x480 píxeles**.

2. **Convierte a escala de grises (recomendado):** En tu editor de imágenes, convierte primero la imagen a escala de grises. En **GIMP**:

   - Ve al menú **Colors > Desaturate > Desaturate...**. Elige un modo como "Luminosity" para mejores resultados.

3. **Guarda como BMP estándar:** Sigue los mismos pasos que en la guía de la pantalla a color para guardar el archivo. Aunque la imagen esté en escala de grises, guardarla como BMP de 24 bits asegura máxima compatibilidad con el código.

   - Ve a **File > Export As...**, nómbralo `test.bmp`.
   - En el cuadro de exportación, bajo **Advanced Options**, selecciona **"24 bits: R8 G8 B8"**.
   - Haz clic en **Export**.

4. **Copia a la tarjeta SD:** Copia el archivo final `test.bmp` al directorio raíz de tu tarjeta MicroSD.

</TabItem>
<TabItem value="For reTerminal E1002 (Color Screen)" label="Para reTerminal E1002 (pantalla a color)">

La pantalla a color puede mostrar 6 colores: negro, blanco, rojo, amarillo, azul y verde. El código incluido incorpora un algoritmo de "color más cercano" que asigna inteligentemente cualquier color de tu imagen de origen al mejor color disponible en la pantalla. Para resultados óptimos, sigue estos pasos:

1. **Redimensiona la imagen:** Con cualquier editor, ajusta tu imagen a **800x480 píxeles**.

2. **Guarda como BMP estándar:** El código está diseñado para leer archivos BMP **sin comprimir** de 24 o 32 bits. Usar un editor profesional es la mejor manera de asegurar el formato correcto. Recomendamos el software libre **GIMP**:

   - Abre tu imagen redimensionada en GIMP.
   - Ve a **File > Export As...**.
   - Nombra el archivo `test.bmp` y haz clic en **Export**.
   - En el diálogo "Export Image as BMP", expande las **Advanced Options**.
   - Selecciona **"24 bits: R8 G8 B8"**. Este es el formato sin comprimir más compatible.
   - Haz clic en **Export**.

3. **Copia a la tarjeta SD:** Copia el archivo final `test.bmp` al directorio raíz de tu tarjeta MicroSD.

</TabItem>
</Tabs>

Si quieres usar imágenes listas para pruebas, puedes utilizar las [imágenes de ejemplo](https://github.com/ZinggJM/GxEPD2/tree/master/examples/GxEPD2_SD_Example/bitmaps) proporcionadas por GxEPD2.

#### El código

Este es el código final validado. Incluye todas las comprobaciones necesarias y el algoritmo avanzado de ajuste de color. Simplemente establece la macro `EPD_SELECT` en `0` para el E1001 (B&N) o en `1` para el E1002 (color).

<Tabs>
<TabItem value="For reTerminal E1001 (B&W Screen)" label="Para reTerminal E1001 (pantalla B&N)" default>

```cpp
#include <SD.h>
#include <SPI.h>
#include <GxEPD2_BW.h>
#include <GxEPD2_7C.h>
#include <cmath>

// === Pin Definitions ===
// ePaper Display
#define EPD_SCK_PIN  7
#define EPD_MOSI_PIN 9
#define EPD_CS_PIN   10
#define EPD_DC_PIN   11
#define EPD_RES_PIN  12
#define EPD_BUSY_PIN 13

// SD Card
#define SD_EN_PIN   16
#define SD_DET_PIN  15
#define SD_CS_PIN   14
#define SD_MISO_PIN 8

// Serial Port
#define SERIAL_RX 44
#define SERIAL_TX 43

// File to display
const char* BMP_FILENAME = "/test.bmp";

// === ePaper Driver Selection ===
// 0: reTerminal E1001 (7.5'' B&W)
// 1: reTerminal E1002 (7.3'' Color)
#define EPD_SELECT 1

#if (EPD_SELECT == 0)
#define GxEPD2_DISPLAY_CLASS GxEPD2_BW
#define GxEPD2_DRIVER_CLASS GxEPD2_750_GDEY075T7
#elif (EPD_SELECT == 1)
#define GxEPD2_DISPLAY_CLASS GxEPD2_7C
#define GxEPD2_DRIVER_CLASS GxEPD2_730c_GDEP073E01
#endif

// For displays with RAM limitations
#define MAX_DISPLAY_BUFFER_SIZE 16000
#define MAX_HEIGHT(EPD) (EPD::HEIGHT <= MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8) ? EPD::HEIGHT : MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8))

// === Global Objects ===
SPIClass hspi(HSPI);

GxEPD2_DISPLAY_CLASS<GxEPD2_DRIVER_CLASS, MAX_HEIGHT(GxEPD2_DRIVER_CLASS)>
    display(GxEPD2_DRIVER_CLASS(/*CS=*/EPD_CS_PIN, /*DC=*/EPD_DC_PIN, /*RST=*/EPD_RES_PIN, /*BUSY=*/EPD_BUSY_PIN));

// === BMP Drawing Function ===
// Helper functions to read values from the BMP file
uint16_t read16(File &f) {
  uint16_t result;
  ((uint8_t *)&result)[0] = f.read(); // LSB
  ((uint8_t *)&result)[1] = f.read(); // MSB
  return result;
}

uint32_t read32(File &f) {
  uint32_t result;
  ((uint8_t *)&result)[0] = f.read(); // LSB
  ((uint8_t *)&result)[1] = f.read();
  ((uint8_t *)&result)[2] = f.read();
  ((uint8_t *)&result)[3] = f.read(); // MSB
  return result;
}

#if (EPD_SELECT == 1)
// Define the RGB values for the 6 available e-paper colors
const uint8_t palette[][3] = {
  {  0,   0,   0}, // 0: Black
  {255, 255, 255}, // 1: White
  {  0, 255,   0}, // 2: Green
  {  0,   0, 255}, // 3: Blue
  {255,   0,   0}, // 4: Red
  {255, 255,   0}, // 5: Yellow
};

// Define the corresponding GxEPD2 color codes
const uint16_t epaper_colors[] = {
  GxEPD_BLACK,
  GxEPD_WHITE,
  GxEPD_GREEN,
  GxEPD_BLUE,
  GxEPD_RED,
  GxEPD_YELLOW,
};

const int num_colors = sizeof(palette) / sizeof(palette[0]);

// This function finds the closest e-paper color for a given RGB color
uint16_t findNearestColor(uint8_t r, uint8_t g, uint8_t b) {
  long min_dist_sq = -1;
  int best_color_index = 0;

  for (int i = 0; i < num_colors; i++) {
    long dr = r - palette[i][0];
    long dg = g - palette[i][1];
    long db = b - palette[i][2];
    long dist_sq = dr * dr + dg * dg + db * db;

    if (min_dist_sq == -1 || dist_sq < min_dist_sq) {
      min_dist_sq = dist_sq;
      best_color_index = i;
    }
  }
  return epaper_colors[best_color_index];
}
#endif


// This function reads a BMP file and draws it to the screen.
// It includes robust error checking and a color-matching algorithm.
void drawBmp(const char *filename, int16_t x, int16_t y) {
  File bmpFile;
  int32_t bmpWidth, bmpHeight;
  uint16_t bmpDepth;
  uint32_t bmpImageoffset;
  bool flip = true;

  if ((x >= display.width()) || (y >= display.height())) return;

  Serial1.print("Loading image '");
  Serial1.print(filename);
  Serial1.println("'");

  bmpFile = SD.open(filename, FILE_READ);
  if (!bmpFile) {
    Serial1.println("File not found");
    return;
  }

  if (read16(bmpFile) != 0x4D42) {
    Serial1.println("Not a valid BMP file");
    bmpFile.close();
    return;
  }

  read32(bmpFile);
  read32(bmpFile);
  bmpImageoffset = read32(bmpFile);
  read32(bmpFile);
  bmpWidth = read32(bmpFile);
  bmpHeight = read32(bmpFile);
  
  if (read16(bmpFile) != 1) {
    Serial1.println("Unsupported BMP format (planes)");
    bmpFile.close();
    return;
  }
  
  bmpDepth = read16(bmpFile);
  uint32_t compression = read32(bmpFile);

  if (compression != 0) {
    if (compression == 3) {
      Serial1.println("Error: BMP file uses BI_BITFIELDS compression.");
      Serial1.println("This example only supports uncompressed BMPs.");
      Serial1.println("Please re-save the image with standard R8G8B8 (24-bit) or A8R8G8B8 (32-bit) format.");
    } else {
      Serial1.printf("Unsupported BMP format. Depth: %d, Compression: %d\n", bmpDepth, compression);
    }
    bmpFile.close();
    return;
  }

  if (bmpDepth != 24 && bmpDepth != 32) {
      Serial1.printf("Unsupported BMP bit depth: %d. Only 24-bit and 32-bit are supported.\n", bmpDepth);
      bmpFile.close();
      return;
  }

  if (bmpHeight < 0) {
    bmpHeight = -bmpHeight;
    flip = false;
  }

  Serial1.printf("Image: %d x %d, %d-bit\n", bmpWidth, bmpHeight, bmpDepth);

  display.setPartialWindow(x, y, bmpWidth, bmpHeight);

  uint8_t bytesPerPixel = bmpDepth / 8;
  uint32_t rowSize = (bmpWidth * bytesPerPixel + 3) & ~3;
  uint8_t sdbuffer[rowSize];

  display.firstPage();
  do {
    for (int16_t row = 0; row < bmpHeight; row++) {
      uint32_t rowpos = flip ? (bmpImageoffset + (bmpHeight - 1 - row) * rowSize) : (bmpImageoffset + row * rowSize);
      bmpFile.seek(rowpos);
      bmpFile.read(sdbuffer, rowSize);

      for (int16_t col = 0; col < bmpWidth; col++) {
        uint8_t b = sdbuffer[col * bytesPerPixel];
        uint8_t g = sdbuffer[col * bytesPerPixel + 1];
        uint8_t r = sdbuffer[col * bytesPerPixel + 2];
        
        uint16_t GxEPD_Color;
        
        #if (EPD_SELECT == 1) // Color Display
          GxEPD_Color = findNearestColor(r, g, b);
        #else // Black and White Display
          if ((r * 0.299 + g * 0.587 + b * 0.114) < 128) GxEPD_Color = GxEPD_BLACK;
          else GxEPD_Color = GxEPD_WHITE;
        #endif
        
        display.drawPixel(x + col, y + row, GxEPD_Color);
      }
    }
  } while (display.nextPage());

  bmpFile.close();
  Serial1.println("Done!");
}


void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) delay(10);
  delay(2000); // A small delay to allow Serial Monitor to connect
  Serial1.println("--- ePaper SD Card BMP Example ---");

  // Initialize shared SPI bus
  hspi.begin(EPD_SCK_PIN, SD_MISO_PIN, EPD_MOSI_PIN, -1);

  // Initialize Display
  display.epd2.selectSPI(hspi, SPISettings(4000000, MSBFIRST, SPI_MODE0));
  display.init(115200);
  display.setRotation(0);
  display.fillScreen(GxEPD_WHITE);
  display.hibernate(); // Power down display until needed

  // Initialize SD Card
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);
  pinMode(SD_DET_PIN, INPUT_PULLUP);
  delay(100);

  if (digitalRead(SD_DET_PIN) == HIGH) {
    Serial1.println("No SD card detected. Please insert a card.");
    display.firstPage();
    do {
      display.setCursor(10, 20);
      display.print("No SD card detected.");
    } while(display.nextPage());
    return;
  }

  Serial1.println("SD card detected, attempting to mount...");
  if (!SD.begin(SD_CS_PIN, hspi)) {
    Serial1.println("SD Card Mount Failed!");
    display.firstPage();
    do {
      display.setCursor(10, 20);
      display.print("SD Card Mount Failed!");
    } while(display.nextPage());
    return;
  }
  Serial1.println("SD card mounted successfully.");

  // Draw the BMP from the SD card
  drawBmp(BMP_FILENAME, 0, 0);

  display.hibernate(); // Power down display after drawing
}

void loop() {
  // Nothing to do here for this example
}
```

</TabItem>
<TabItem value="For reTerminal E1002 (Color Screen)" label="Para reTerminal E1002 (pantalla a color)">

```cpp
#include <SD.h>
#include <SPI.h>
#include <GxEPD2_BW.h>
#include <GxEPD2_7C.h>
#include <cmath>

// === Pin Definitions ===
// ePaper Display
#define EPD_SCK_PIN  7
#define EPD_MOSI_PIN 9
#define EPD_CS_PIN   10
#define EPD_DC_PIN   11
#define EPD_RES_PIN  12
#define EPD_BUSY_PIN 13

// SD Card
#define SD_EN_PIN   16
#define SD_DET_PIN  15
#define SD_CS_PIN   14
#define SD_MISO_PIN 8

// Serial Port
#define SERIAL_RX 44
#define SERIAL_TX 43

// File to display
const char* BMP_FILENAME = "/test.bmp";

// === ePaper Driver Selection ===
// 0: reTerminal E1001 (7.5'' B&W)
// 1: reTerminal E1002 (7.3'' Color)
#define EPD_SELECT 0

#if (EPD_SELECT == 0)
#define GxEPD2_DISPLAY_CLASS GxEPD2_BW
#define GxEPD2_DRIVER_CLASS GxEPD2_750_GDEY075T7
#elif (EPD_SELECT == 1)
#define GxEPD2_DISPLAY_CLASS GxEPD2_7C
#define GxEPD2_DRIVER_CLASS GxEPD2_730c_GDEP073E01
#endif

// For displays with RAM limitations
#define MAX_DISPLAY_BUFFER_SIZE 16000
#define MAX_HEIGHT(EPD) (EPD::HEIGHT <= MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8) ? EPD::HEIGHT : MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8))

// === Global Objects ===
SPIClass hspi(HSPI);

GxEPD2_DISPLAY_CLASS<GxEPD2_DRIVER_CLASS, MAX_HEIGHT(GxEPD2_DRIVER_CLASS)>
    display(GxEPD2_DRIVER_CLASS(/*CS=*/EPD_CS_PIN, /*DC=*/EPD_DC_PIN, /*RST=*/EPD_RES_PIN, /*BUSY=*/EPD_BUSY_PIN));

// === BMP Drawing Function ===
// Helper functions to read values from the BMP file
uint16_t read16(File &f) {
  uint16_t result;
  ((uint8_t *)&result)[0] = f.read(); // LSB
  ((uint8_t *)&result)[1] = f.read(); // MSB
  return result;
}

uint32_t read32(File &f) {
  uint32_t result;
  ((uint8_t *)&result)[0] = f.read(); // LSB
  ((uint8_t *)&result)[1] = f.read();
  ((uint8_t *)&result)[2] = f.read();
  ((uint8_t *)&result)[3] = f.read(); // MSB
  return result;
}

#if (EPD_SELECT == 1)
// Define the RGB values for the 6 available e-paper colors
const uint8_t palette[][3] = {
  {  0,   0,   0}, // 0: Black
  {255, 255, 255}, // 1: White
  {  0, 255,   0}, // 2: Green
  {  0,   0, 255}, // 3: Blue
  {255,   0,   0}, // 4: Red
  {255, 255,   0}, // 5: Yellow
};

// Define the corresponding GxEPD2 color codes
const uint16_t epaper_colors[] = {
  GxEPD_BLACK,
  GxEPD_WHITE,
  GxEPD_GREEN,
  GxEPD_BLUE,
  GxEPD_RED,
  GxEPD_YELLOW,
};

const int num_colors = sizeof(palette) / sizeof(palette[0]);

// This function finds the closest e-paper color for a given RGB color
uint16_t findNearestColor(uint8_t r, uint8_t g, uint8_t b) {
  long min_dist_sq = -1;
  int best_color_index = 0;

  for (int i = 0; i < num_colors; i++) {
    long dr = r - palette[i][0];
    long dg = g - palette[i][1];
    long db = b - palette[i][2];
    long dist_sq = dr * dr + dg * dg + db * db;

    if (min_dist_sq == -1 || dist_sq < min_dist_sq) {
      min_dist_sq = dist_sq;
      best_color_index = i;
    }
  }
  return epaper_colors[best_color_index];
}
#endif


// This function reads a BMP file and draws it to the screen.
// It includes robust error checking and a color-matching algorithm.
void drawBmp(const char *filename, int16_t x, int16_t y) {
  File bmpFile;
  int32_t bmpWidth, bmpHeight;
  uint16_t bmpDepth;
  uint32_t bmpImageoffset;
  bool flip = true;

  if ((x >= display.width()) || (y >= display.height())) return;

  Serial1.print("Loading image '");
  Serial1.print(filename);
  Serial1.println("'");

  bmpFile = SD.open(filename, FILE_READ);
  if (!bmpFile) {
    Serial1.println("File not found");
    return;
  }

  if (read16(bmpFile) != 0x4D42) {
    Serial1.println("Not a valid BMP file");
    bmpFile.close();
    return;
  }

  read32(bmpFile);
  read32(bmpFile);
  bmpImageoffset = read32(bmpFile);
  read32(bmpFile);
  bmpWidth = read32(bmpFile);
  bmpHeight = read32(bmpFile);
  
  if (read16(bmpFile) != 1) {
    Serial1.println("Unsupported BMP format (planes)");
    bmpFile.close();
    return;
  }
  
  bmpDepth = read16(bmpFile);
  uint32_t compression = read32(bmpFile);

  if (compression != 0) {
    if (compression == 3) {
      Serial1.println("Error: BMP file uses BI_BITFIELDS compression.");
      Serial1.println("This example only supports uncompressed BMPs.");
      Serial1.println("Please re-save the image with standard R8G8B8 (24-bit) or A8R8G8B8 (32-bit) format.");
    } else {
      Serial1.printf("Unsupported BMP format. Depth: %d, Compression: %d\n", bmpDepth, compression);
    }
    bmpFile.close();
    return;
  }

  if (bmpDepth != 24 && bmpDepth != 32) {
      Serial1.printf("Unsupported BMP bit depth: %d. Only 24-bit and 32-bit are supported.\n", bmpDepth);
      bmpFile.close();
      return;
  }

  if (bmpHeight < 0) {
    bmpHeight = -bmpHeight;
    flip = false;
  }

  Serial1.printf("Image: %d x %d, %d-bit\n", bmpWidth, bmpHeight, bmpDepth);

  display.setPartialWindow(x, y, bmpWidth, bmpHeight);

  uint8_t bytesPerPixel = bmpDepth / 8;
  uint32_t rowSize = (bmpWidth * bytesPerPixel + 3) & ~3;
  uint8_t sdbuffer[rowSize];

  display.firstPage();
  do {
    for (int16_t row = 0; row < bmpHeight; row++) {
      uint32_t rowpos = flip ? (bmpImageoffset + (bmpHeight - 1 - row) * rowSize) : (bmpImageoffset + row * rowSize);
      bmpFile.seek(rowpos);
      bmpFile.read(sdbuffer, rowSize);

      for (int16_t col = 0; col < bmpWidth; col++) {
        uint8_t b = sdbuffer[col * bytesPerPixel];
        uint8_t g = sdbuffer[col * bytesPerPixel + 1];
        uint8_t r = sdbuffer[col * bytesPerPixel + 2];
        
        uint16_t GxEPD_Color;
        
        #if (EPD_SELECT == 1) // Color Display
          GxEPD_Color = findNearestColor(r, g, b);
        #else // Black and White Display
          if ((r * 0.299 + g * 0.587 + b * 0.114) < 128) GxEPD_Color = GxEPD_BLACK;
          else GxEPD_Color = GxEPD_WHITE;
        #endif
        
        display.drawPixel(x + col, y + row, GxEPD_Color);
      }
    }
  } while (display.nextPage());

  bmpFile.close();
  Serial1.println("Done!");
}


void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) delay(10);
  delay(2000); // A small delay to allow Serial Monitor to connect
  Serial1.println("--- ePaper SD Card BMP Example ---");

  // Initialize shared SPI bus
  hspi.begin(EPD_SCK_PIN, SD_MISO_PIN, EPD_MOSI_PIN, -1);

  // Initialize Display
  display.epd2.selectSPI(hspi, SPISettings(4000000, MSBFIRST, SPI_MODE0));
  display.init(115200);
  display.setRotation(0);
  display.fillScreen(GxEPD_WHITE);
  display.hibernate(); // Power down display until needed

  // Initialize SD Card
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);
  pinMode(SD_DET_PIN, INPUT_PULLUP);
  delay(100);

  if (digitalRead(SD_DET_PIN) == HIGH) {
    Serial1.println("No SD card detected. Please insert a card.");
    display.firstPage();
    do {
      display.setCursor(10, 20);
      display.print("No SD card detected.");
    } while(display.nextPage());
    return;
  }

  Serial1.println("SD card detected, attempting to mount...");
  if (!SD.begin(SD_CS_PIN, hspi)) {
    Serial1.println("SD Card Mount Failed!");
    display.firstPage();
    do {
      display.setCursor(10, 20);
      display.print("SD Card Mount Failed!");
    } while(display.nextPage());
    return;
  }
  Serial1.println("SD card mounted successfully.");

  // Draw the BMP from the SD card
  drawBmp(BMP_FILENAME, 0, 0);

  display.hibernate(); // Power down display after drawing
}

void loop() {
  // Nothing to do here for this example
}
```

</TabItem>
</Tabs>

#### Cómo funciona

- **`setup()`**: La función `setup` inicializa todo el hardware necesario en secuencia: el puerto serie para depuración, el bus SPI compartido, la pantalla ePaper y, por último, la tarjeta SD. Si todas las inicializaciones son correctas, realiza una llamada a `drawBmp()` para ejecutar la tarea principal.
- **`drawBmp()`**: Esta es la función central. Abre el archivo BMP, analiza la cabecera para leer sus dimensiones y propiedades, y realiza comprobaciones de validación cruciales. Verifica específicamente tipos de compresión no admitidos y proporciona un mensaje de error útil si encuentra alguno.
- **Bucle de dibujo**: La función lee la imagen de la SD una fila por vez. Para cada píxel de la fila, extrae los valores de color Rojo, Verde y Azul.
- **Gestión del color**: Aquí la lógica se bifurca según la macro `EPD_SELECT`:

  - **Para color (E1002)**: Llama a `findNearestColor(r, g, b)`. Esta función calcula la "distancia" entre el color del píxel y cada uno de los 6 colores de la paleta de la pantalla. Devuelve el color de paleta con la menor distancia, garantizando la representación de color más precisa posible.
  - **Para B&N (E1001)**: Usa una fórmula estándar de luminancia (`r * 0.299 + g * 0.587 + b * 0.114`) para convertir el color RGB a un valor de brillo. Si este valor está por debajo del umbral (128), el píxel se dibuja en negro; de lo contrario, en blanco.

#### Cargar y ejecutar

1. En Arduino IDE, asegúrate de tener seleccionada la placa correcta (`XIAO_ESP32S3`).
2. Establece la macro `EPD_SELECT` al inicio del código en `1` para la reTerminal E1002 o en `0` para la E1001.
3. Inserta tu tarjeta MicroSD preparada en la reTerminal.
4. Sube el código.
5. Abre el Monitor Serie a una velocidad de `115200`. Verás los registros de progreso y, al cabo de unos momentos, la imagen se renderizará en la pantalla ePaper.

:::tip Sobre la velocidad de actualización
La velocidad de refresco de la pantalla puede ser lenta; a veces la pantalla no responderá hasta 2~3 minutos después de cargar el programa.
:::

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte distintos tipos de soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
