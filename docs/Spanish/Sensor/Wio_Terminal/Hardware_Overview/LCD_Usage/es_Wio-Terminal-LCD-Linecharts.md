---
title: Gráficas de Líneas
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/
slug: /es/Wio-Terminal-LCD-Linecharts
last_update:
  date: 07/27/2025
  author: Guillermo
---
# Gráficas de Líneas

Este repositorio describe cómo dibujar gráficas de líneas en el Wio Terminal. Puedes usarlas para mostrar valores en tiempo real de sensores, al igual que el monitor serial con gráficas. Esta biblioteca es flexible y se puede adaptar a tus necesidades.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0277.2019-11-27%2018_19_05.gif" /></div>

## Instalación de Bibliotecas

### Instalación de `Seeed_Arduino_Linechart`

- Descarga el repositorio desde: [Seeed_Arduino_Linechart-1.0.0.zip](https://files.seeedstudio.com/wiki/Wio-Terminal-LCD-Linecharts/Seeed_Arduino_Linechart-1.0.0.zip)

- Abre el IDE de Arduino y ve a `Programa` -> `Incluir biblioteca` -> `Añadir biblioteca .ZIP...`, y selecciona el archivo descargado `.zip`.

![Instalación](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Primeros Pasos

### Inicializar para graficar

Define el tamaño máximo de datos y un objeto tipo `doubles` para almacenar los datos. Se utiliza `TFT_eSprite` para dibujar la gráfica:

```cpp
#define max_size 50 // máximo de muestras
doubles data; // tipo de dato para almacenar valores
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite
```

### Inicializar la pantalla LCD

```cpp
void setup() {
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT, TFT_WIDTH);
}
```

## Cargar variables a los datos

Se utiliza `data.push(valor)` para agregar un nuevo dato. Si se alcanza el límite definido, se elimina el más antiguo con `data.pop()`:

```cpp
spr.fillSprite(TFT_WHITE);

if (data.size() == max_size) {
    data.pop(); // elimina el valor más antiguo
}

data.push(0.01 * random(1, 10)); // simula lectura de sensor
```

## Configurar el título de la gráfica

Para mostrar un título en la gráfica, se usa el objeto `text(x, y)`:

```cpp
auto header = text(0, 0)
                .value("Temperatura")
                .align(center)
                .valign(vcenter)
                .width(tft.width())
                .thickness(3);

header.height(header.font_height() * 2);
header.draw();
```

<div align="center"><img width=645 height=374 src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/title.png" /></div>

## Configurar la gráfica de líneas

Se utiliza `line_chart(x, y)` para crear la gráfica, con las siguientes configuraciones:

```cpp
auto content = line_chart(20, header.height());
     content
        .height(tft.height() - header.height() * 1.5)
        .width(tft.width() - content.x() * 2)
        .based_on(0.0) // eje Y base
        .show_circle(false) // sin círculos en cada punto
        .value(data) // valores a graficar
        .color(TFT_PURPLE) // color de la línea
        .draw();
```

Finalmente, se muestra en pantalla:

```cpp
spr.pushSprite(0, 0);
delay(50);
```

<div align="center"><img width=768 height=432 src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/linegraph2.png" /></div>

## Código completo de ejemplo

```cpp
#include "seeed_line_chart.h" // Incluir la biblioteca
TFT_eSPI tft;

#define max_size 50
doubles data;
TFT_eSprite spr = TFT_eSprite(&tft);

void setup() {
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT, TFT_WIDTH);
}

void loop() {
    spr.fillSprite(TFT_WHITE);

    if (data.size() == max_size) {
        data.pop();
    }
    data.push(0.01 * random(1, 10)); // Simular sensor

    auto header = text(0, 0)
                    .value("Lectura Sensor")
                    .align(center)
                    .valign(vcenter)
                    .width(tft.width())
                    .thickness(3);

    header.height(header.font_height() * 2);
    header.draw();

    auto content = line_chart(20, header.height());
         content
            .height(tft.height() - header.height() * 1.5)
            .width(tft.width() - content.x() * 2)
            .based_on(0.0)
            .show_circle(false)
            .value(data)
            .color(TFT_PURPLE)
            .draw();

    spr.pushSprite(0, 0);
    delay(50);
}
```

## Soporte técnico y discusión

Gracias por elegir nuestros productos. Estamos disponibles para ayudarte y brindarte una buena experiencia. Contamos con múltiples canales de soporte para resolver tus dudas y problemas técnicos.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
