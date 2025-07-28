---
description:  Wio Terminal Displaying Gyro
title:  Wio Terminal Mostrando Lecturas del Acelerómetro
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Displaying-Gyro
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Wio Terminal Mostrando Lecturas del Acelerómetro

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0279.2019-11-28%2018_25_43.gif" /></div>

## Descripción General

Este ejemplo demuestra cómo dibujar un gráfico de líneas en el Wio Terminal. En este ejemplo, las lecturas del acelerómetro de 3 ejes (3 conjuntos de datos) se representan en un solo gráfico de líneas para mostrar la posición en tiempo real del Wio Terminal.

### Características

- Lecturas del acelerómetro de 3 ejes mostradas en un solo gráfico de líneas

- Posicionamiento en tiempo real del Wio Terminal

## Librerías Arduino necesarias

- Visita [Seeed_Arduino_Linechart](https://github.com/Seeed-Studio/Seeed_Arduino_Linechart) y descarga todo el repositorio a tu disco local.

- Instala la librería del acelerómetro a bordo `Seeed_Arduino_LIS3DHTR`. Por favor visita [Seeed_Arduino_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/beta) para más información.

## Instrucciones Arduino

1. Descarga el archivo [`AcceratorReadings.ino`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/AcceleratorReadings.ino.zip) y súbelo a tu Wio Terminal usando el `Arduino IDE`. Asegúrate de haber instalado todas las librerías.

2. Mueve el Wio Terminal en diferentes ejes y observa lo que muestra. También puedes abrir el `Serial Plotter` para verificar el efecto.

## Código

- **Para inicializar LCD y acelerómetro**

```cpp
#include"LIS3DHTR.h" // incluir la librería del acelerómetro
#include"seeed_line_chart.h" // incluir la librería del gráfico de líneas

TFT_eSPI tft;
LIS3DHTR<TwoWire>  lis;

#define MAX_SIZE 50 // tamaño máximo de datos
doubles accelerator_readings[3];
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite

void setup() {
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
    spr.setRotation(3);

    lis.begin(Wire1);
    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ);
    lis.setFullScaleRange(LIS3DHTR_RANGE_2G);

    Serial.begin(115200);
}
```

* **Lectura de datos del acelerómetro y carga de datos**

Consulta [Gráficos de líneas](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/) para más información.

```cpp
void loop() {
    spr.fillSprite(TFT_WHITE);
    float x_raw = lis.getAccelerationX();
    float y_raw = lis.getAccelerationY();
    float z_raw = lis.getAccelerationZ();
    ...

    if (accelerator_readings[0].size() == MAX_SIZE) {
      for (uint8_t i = 0; i<3; i++){
        accelerator_readings[i].pop(); // se usa para eliminar la primera lectura
      }
    }

    accelerator_readings[0].push(x_raw); // guardar lecturas eje x
    accelerator_readings[1].push(y_raw); // guardar lecturas eje y
    accelerator_readings[2].push(z_raw); // guardar lecturas eje z
    ...
}
```

* **Configuración del título**

Consulta [Gráficos de líneas](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/) para más información.

```cpp
auto header =  text(0, 0)
            .value("Lecturas del Acelerómetro")
            .align(center)
            .valign(vcenter)
            .width(spr.width())
            .thickness(2);

header.height(header.font_height(&spr) * 2);
header.draw(&spr); // La altura del encabezado es el doble de la altura de la fuente
```

* **Configuración del gráfico de líneas**

Para dibujar múltiples líneas en un gráfico, puedes pasar arrays doubles al gráfico de líneas como `content.value({doubles[0],doubles[1],doubles[2]...})` como se muestra abajo. También puedes definir el color para cada línea usando `.color()`, donde el orden de los colores coincide con el orden de los datos.

```cpp
auto content = line_chart(20, header.height()); //(x,y) donde comienza el gráfico de líneas
     content
            .height(spr.height() - header.height() * 1.5) // altura real del gráfico
            .width(spr.width() - content.x() * 2) // ancho real del gráfico
            .based_on(-2.0) // punto inicial del eje y, debe ser float
            .show_circle(false) // dibujar círculo en cada punto, por defecto activado
            .value({accelerator_readings[0],accelerator_readings[1], accelerator_readings[2]}) // pasar los datos al gráfico
            .max_size(MAX_SIZE)          
            .color(TFT_BLUE, TFT_RED, TFT_GREEN)
            .backgroud(TFT_WHITE)
            .draw(&spr);
```

## Código completo

```cpp
#include"LIS3DHTR.h" // incluir la librería del acelerómetro
#include"seeed_line_chart.h" // incluir la librería del gráfico de líneas

TFT_eSPI tft;
LIS3DHTR<TwoWire>  lis;

#define MAX_SIZE 50 // tamaño máximo de datos
doubles accelerator_readings[3];
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite

void setup() {
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
    spr.setRotation(3);

    lis.begin(Wire1);
    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ);
    lis.setFullScaleRange(LIS3DHTR_RANGE_2G);

    Serial.begin(115200);
}

void loop() {
    spr.fillSprite(TFT_WHITE);
    float x_raw = lis.getAccelerationX();
    float y_raw = lis.getAccelerationY();
    float z_raw = lis.getAccelerationZ();

    // Esto se usa para imprimir en el Serial Plotter, ¡revisa Serial Plotter!
    Serial.print(x_raw);
    Serial.print(",");
    Serial.print(y_raw);
    Serial.print(",");
    Serial.println(z_raw);

    if (accelerator_readings[0].size() == MAX_SIZE) {
      for (uint8_t i = 0; i<3; i++){
        accelerator_readings[i].pop(); // elimina la primera lectura almacenada
      }
    }
    accelerator_readings[0].push(x_raw); // lee variables y almacena datos
    accelerator_readings[1].push(y_raw);
    accelerator_readings[2].push(z_raw);

    // Configuración del título del gráfico de líneas
    auto header =  text(0, 0)
                .value("Lecturas del Acelerómetro")
                .align(center)
                .valign(vcenter)
                .width(spr.width())
                .thickness(2);

    header.height(header.font_height(&spr) * 2);
    header.draw(&spr); // La altura del encabezado es el doble de la altura de la fuente

  // Configuración del gráfico de líneas
    auto content = line_chart(20, header.height()); //(x,y) donde comienza el gráfico
         content
                .height(spr.height() - header.height() * 1.5) // altura real del gráfico
                .width(spr.width() - content.x() * 2) // ancho real del gráfico
                .based_on(-2.0) // punto inicial del eje y, debe ser float
                .show_circle(false) // dibujar círculo en cada punto, por defecto activado
                .value({accelerator_readings[0],accelerator_readings[1], accelerator_readings[2]}) // pasar datos al gráfico
                .max_size(MAX_SIZE)          
                .color(TFT_BLUE, TFT_RED, TFT_GREEN)
                .backgroud(TFT_WHITE)
                .draw(&spr);

    spr.pushSprite(0, 0);
    delay(50);
}
```