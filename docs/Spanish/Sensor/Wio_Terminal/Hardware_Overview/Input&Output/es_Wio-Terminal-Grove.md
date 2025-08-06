---
description: Grove Port
title: Puerto Grove
keywords:
- Wio_terminal Hardware_Overview
- Input&Output
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Grove
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Puerto Grove

Este repositorio introduce cómo usar el Wio Terminal con el [**Ecosistema Grove**](https://www.seeedstudio.com/grove.html).

¡Con la ayuda de Grove, puedes prototipar mucho más rápido con conexiones más simples!

## Wio Terminal con Grove - Sensor TDS

Esta sección introduce cómo usar el [Grove - Sensor TDS](https://wiki.seeedstudio.com/Grove-TDS-Sensor/) con Wio Terminal para mostrar lecturas de TDS en tiempo real en un gráfico de línea.

### Instalación de bibliotecas

1. Instala la biblioteca de [LCD](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/).

2. Instala la biblioteca de [Linechart](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/).

### Código Completo

Conecta el sensor Grove TDS al Pin Grove D/A del Wio Terminal, sube el código y revisa los resultados.

```cpp
#include"seeed_line_chart.h" //incluye la biblioteca
TFT_eSPI tft;

#define max_size 50 //tamaño máximo de datos
doubles data; //Inicializa un tipo doubles para almacenar datos
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 

#define sensorPin A0 //Pin analógico

int sensorValue = 0;
float tdsValue = 0;
float Voltage = 0;

void setup() {
    pinMode(sensorPin, INPUT);
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
}

void loop() {
    spr.fillSprite(TFT_WHITE);

    sensorValue = analogRead(sensorPin);
    Voltage = sensorValue*5/1024.0; //Convierte lectura analógica a voltaje
    tdsValue=(133.42*Voltage*Voltage*Voltage - 255.86*Voltage*Voltage + 857.39*Voltage)*0.5; //Convierte voltaje a valor TDS

    if (data.size() == max_size) {
        data.pop();//remueve la primera variable leída
    }
    data.push(tdsValue); //lee variables y almacena en data

    //Configuración del título del gráfico de línea
    auto header =  text(0, 0)
                .value("Lectura TDS")
                .align(center)
                .valign(vcenter)
                .width(tft.width())
                .thickness(3);

    header.height(header.font_height() * 2);
    header.draw(); //Altura del encabezado es el doble de la fuente

  //Configuración del gráfico de línea
    auto content = line_chart(20, header.height()); //(x,y) donde comienza el gráfico
         content
                .height(tft.height() - header.height() * 1.5) //altura real del gráfico
                .width(tft.width() - content.x() * 2) //ancho real del gráfico
                .based_on(0.0) //punto inicial del eje y, debe ser float
                .show_circle(true) //dibuja un círculo en cada punto, por defecto activo
                .value(data) //pasa los datos al gráfico
                .color(TFT_RED) //color de la línea
                .draw();

    spr.pushSprite(0, 0);
    delay(50);
}
```

## Wio Terminal con Grove - Pantalla OLED

Si necesitas una segunda pantalla para mostrar información con el Wio Terminal, el **Grove - OLED Display 0.96"** será la elección perfecta. Se puede usar para mostrar gráficos y datos, agregando funciones interactivas al Wio Terminal.

### Instalación de bibliotecas

1. Instala la biblioteca **U8g2** desde el **Library Manager** en Arduino IDE. Navega a **Sketch** -> **Include Library** -> **Manage Libraries**... y busca e instala `U8g2`.

### Inicialización de U8g2

Inicializa la pantalla OLED usando el I2C por software de u8g2, usando SCL para reloj y SDA para datos:

```cpp
U8G2_SSD1306_128X64_NONAME_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);
```

#### Uso

1. Llama a `u8g2.firstPage()`.

2. Inicia un bucle do-while.

3. Dentro del cuerpo del bucle, dibuja con los comandos habituales.

4. Repite mientras `u8g2.nextPage()` retorne true.

Para más información, visita [u8g2](https://github.com/olikraus/u8g2/wiki)

### Código Completo

Conecta el Grove OLED Display 0.96" al pin Grove I2C y prueba el siguiente código:

```cpp
#include <U8g2lib.h>

U8G2_SSD1306_128X64_NONAME_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

const unsigned char WAVE[] PROGMEM = {
  // ... (aquí va el arreglo hexadecimal completo que enviaste)
};

void setup() {
  u8g2.begin();
}

void loop() {
  u8g2.firstPage();
  do {
    u8g2.setFont(u8g2_font_t0_16b_mr);
    u8g2.drawXBMP(40, 0, 50, 50, WAVE);
    u8g2.setCursor(20, 60);
    u8g2.print("Wio Terminal");
  } while (u8g2.nextPage());
}
```

## Wio Terminal con Grove - Sensor de Temperatura

Esta sección muestra cómo usar el [Grove - Sensor de Temperatura](https://wiki.seeedstudio.com/Grove-Temperature_Sensor_V1.2/) con Wio Terminal para mostrar lecturas de temperatura ambiente en tiempo real.

### Instalación de bibliotecas

1. Instala la biblioteca de [LCD](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/).

2. Instala la biblioteca de [Linechart](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Histogram/).

### Código Completo

Conecta el sensor de temperatura Grove al pin Grove D/A del Wio Terminal, sube el código y verifica los resultados:

```cpp
#include"seeed_line_chart.h" // incluye la librería
#include <math.h>

TFT_eSPI tft;

#define max_size 50 // tamaño máximo de datos
doubles data; // Inicializa una variable tipo doubles para almacenar datos
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 

const int B = 4275;               // Valor B del termistor
const int R0 = 100000;            // Resistencia R0 = 100kΩ
const int pinTempSensor = A0;     // Sensor de temperatura Grove conectado a A0

void setup() {
    pinMode(pinTempSensor, INPUT);
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT, TFT_WIDTH);
}

void loop() {
    spr.fillSprite(TFT_DARKCYAN);

    int a = analogRead(pinTempSensor);
    float R = 1023.0 / a - 1.0;
    R = R0 * R;

    float temperature = 1.0 / (log(R / R0) / B + 1 / 298.15) - 273.15; // convierte la resistencia a temperatura según datasheet

    if (data.size() == max_size) {
        data.pop(); // elimina el dato más antiguo para mantener el tamaño máximo
    }
    data.push(temperature); // almacena la temperatura leída

    // Configuración del título del gráfico
    auto header =  text(0, 0)
                .value("Lectura de Temperatura")
                .align(center)
                .color(TFT_WHITE)
                .valign(vcenter)
                .width(tft.width())
                .thickness(2);

    header.height(header.font_height() * 2);
    header.draw(); // El alto del encabezado es el doble del alto de la fuente

    // Configuración del gráfico de líneas
    auto content = line_chart(20, header.height()); // posición (x,y) donde inicia el gráfico
         content
                .height(tft.height() - header.height() * 1.5) // altura real del gráfico
                .width(tft.width() - content.x() * 2) // ancho real del gráfico
                .based_on(0.0) // punto inicial del eje Y
                .show_circle(true) // muestra círculo en cada punto (por defecto activado)
                .y_role_color(TFT_WHITE)
                .x_role_color(TFT_WHITE)
                .value(data) // datos para el gráfico
                .color(TFT_RED) // color de la línea
                .draw();

    spr.pushSprite(0, 0);
    delay(50);
}
```

## Wio Terminal con Grove - Sensor GPS

Esta sección explica cómo usar el Grove GPS Sensor con Wio Terminal para obtener información GPS en tiempo real. El sensor envía datos NMEA que serán interpretados con la biblioteca TinyGPSPlus.

### Instalación de la Biblioteca

1. Instala la [TinyGPSPlus Library](https://github.com/mikalhart/TinyGPSPlus) en el IDE de Arduino.

### Código Completo

Conecta el Grove GPS Sensor al pin Grove I2C (lado izquierdo) del Wio Terminal, sube el código y observa los resultados en el Monitor Serial (baud rate: 9600).

```cpp
#include <TinyGPS++.h>
#include <wiring_private.h>

static const uint32_t GPSBaud = 9600;

// Objeto TinyGPS++
TinyGPSPlus gps;

// Conexión serial al GPS - conector Grove lado izquierdo.
// Este conector comparte pines con I2C1 en el conector de 40 pines.
static Uart Serial3(&sercom3, PIN_WIRE_SCL, PIN_WIRE_SDA, SERCOM_RX_PAD_1, UART_TX_PAD_0);

void setup()
{
  Serial.begin(115200);

  Serial3.begin(GPSBaud);
  pinPeripheral(PIN_WIRE_SCL, PIO_SERCOM_ALT);
  pinPeripheral(PIN_WIRE_SCL, PIO_SERCOM_ALT);
}

void loop()
{
  // Muestra la info cada vez que se reciba una sentencia NMEA válida.
  while (Serial3.available() > 0)
    if (gps.encode(Serial3.read()))
      displayInfo();

  // Si no hay datos GPS tras 5 segundos, muestra mensaje de error.
  if (millis() > 5000 && gps.charsProcessed() < 10)
  {
    Serial.println(F("No se detectó GPS: verifica las conexiones."));
    while(true);
  }
}

void displayInfo()
{
  Serial.print(F("Ubicación: "));
  if (gps.location.isValid())
  {
    Serial.print(gps.location.lat(), 6);
    Serial.print(F(","));
    Serial.print(gps.location.lng(), 6);
  }
  else
  {
    Serial.print(F("INVÁLIDO"));
  }

  Serial.print(F("  Fecha/Hora: "));
  if (gps.date.isValid())
  {
    Serial.print(gps.date.month());
    Serial.print(F("/"));
    Serial.print(gps.date.day());
    Serial.print(F("/"));
    Serial.print(gps.date.year());
  }
  else
  {
    Serial.print(F("INVÁLIDO"));
  }

  Serial.print(F(" "));
  if (gps.time.isValid())
  {
    if (gps.time.hour() < 10) Serial.print(F("0"));
    Serial.print(gps.time.hour());
    Serial.print(F(":"));
    if (gps.time.minute() < 10) Serial.print(F("0"));
    Serial.print(gps.time.minute());
    Serial.print(F(":"));
    if (gps.time.second() < 10) Serial.print(F("0"));
    Serial.print(gps.time.second());
    Serial.print(F("."));
    if (gps.time.centisecond() < 10) Serial.print(F("0"));
    Serial.print(gps.time.centisecond());
  }
  else
  {
    Serial.print(F("INVÁLIDO"));
  }

  Serial.println();
}

void SERCOM3_0_Handler()
{
  Serial3.IrqHandler();
}
void SERCOM3_1_Handler()
{
  Serial3.IrqHandler();
}
void SERCOM3_2_Handler()
{
  Serial3.IrqHandler();
}
void SERCOM3_3_Handler()
{
  Serial3.IrqHandler();
}
```