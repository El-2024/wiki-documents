---
title:  Smooth Fonts
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-LCD-Anti-aliased-Fonts./
slug: /es/Wio-Terminal-LCD-Anti-aliased-Fonts
last_update:
  date: 07/27/2025
  author: Guillermo
---
# Visualización de Fuentes Antialiasing

Este repositorio demuestra cómo usar fuentes antialiasing en Wio Terminal (**es decir, mostrar caracteres japoneses, caracteres griegos y otros glifos UCS-2**). Además, las fuentes suaves también pueden usarse para mostrar caracteres normales en inglés con tu fuente favorita en tu computadora.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117131650.gif" /></div>

## Instalación de Librerías

### Instalación de la librería SD Card para Wio Terminal

- Visita [Resumen del Sistema de Archivos](https://wiki.seeedstudio.com/Wio-Terminal-FS-Overview/)

### Instalación de la Librería TFT LCD para Wio Terminal

- Visita [Resumen de TFT LCD](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/)

## Generar archivo de fuente vlw

Aquí se demuestra cómo generar un archivo de fuente vlw que puede usarse para fuente suave en Wio Terminal.

### Paso 1

Descarga el software [**Processing**](https://processing.org/) según tu sistema operativo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117095509.jpg" /></div>

### Paso 2

Abre **Processing** y navega a `Tools` -> `Create Font...`

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117100029.jpg" /></div>

### Paso 3

Aparecerá una ventana **Create Font**. Puedes elegir la fuente disponible en tu computadora. Cambia el tamaño de la fuente y haz clic en `Characters...`. También puedes cambiar el nombre del archivo vlw.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117100808.jpg" /></div>

### Paso 4

Aparecerá una ventana **Character Selector**, y puedes elegir bloques específicos de caracteres Unicode por idioma (por ejemplo, Basic Latin en este caso). ***Para caracteres asiáticos, se recomienda usar bloques Unicode de Compatibilidad CJK o categoría CJK.*** Haz clic en `OK` para guardar la configuración de la fuente.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117104728.jpg" /></div>

### Paso 5

Navega a `File` -> `Save` y guarda el archivo del sketch en tu disco local. ¡Ahora has generado el archivo de fuente vlw!

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117105224.jpg" /></div>

## Guardar en la Tarjeta SD

Una vez generado el archivo vlw, lo encontrarás dentro de la carpeta **`data`** dentro del archivo del sketch guardado en el paso anterior.

Ahora, copia el archivo vlw en la tarjeta SD y vuelve a colocar la tarjeta SD en el Wio Terminal.

## Configuración de la Librería LCD

Por defecto, la opción de fuente suave para la librería LCD está **desactivada** para ahorrar recursos en Wio Terminal. **Por lo tanto, debe configurarse para activar la fuente suave en Wio Terminal.**

Navega a las carpetas de la librería Arduino (**libraries**) -> **Seeed_Arduino_LCD** y abre **`User_Setup.h`** con un editor. Busca **`#define SMOOTH_FONT`** y descomenta la línea así:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/smoothFont.png" /></div>

Ahora has activado la fuente suave en Wio Terminal, ¡puedes mostrar cualquier fuente o carácter que desees!

## Visualización

- **Para cargar la fuente desde la tarjeta SD al Wio Terminal:**

```cpp
void loadFont(String fontName);
```

donde `fontName` es el nombre del archivo de fuente vlw.

* **Para mostrar todos los caracteres dentro del archivo vlw en pantalla:**

```cpp
void showFont(uint32_t td);
```

donde `td` es el tiempo de retardo entre pantallas mientras se muestran todos los caracteres.

* **Para descargar fuentes:**

```cpp
void unloadFont();
```

Para mostrar caracteres en pantalla, puedes usar las funciones igual que en las librerías tft usando **`tft.println()`**. Además, puedes usar otras funciones como **`tft.setCursor()`** y **`tft.setTextColor`** para cambiar la posición y el color del texto mostrado.

**Nota**: Por favor verifica que en `User_Setup.h` dentro de la librería LCD, la línea `#define SMOOTH_FONT` esté descomentada.

## Código Completo

Por favor descarga el código completo y los archivos vlw de ejemplo [aquí](https://files.seeedstudio.com/wiki/Wio-Terminal/res/JanpaneseFonts.zip).

```cpp
#include<SPI.h>
#include "Seeed_FS.h"
#include "SD/Seeed_SD.h"
#include"TFT_eSPI.h"

TFT_eSPI tft;

void setup() {
    tft.begin();
    Serial.begin(115200);
    tft.setRotation(3);
    tft.fillScreen(TFT_BLACK); //Fondo negro

    while(!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)){
        Serial.println("¡Error en tarjeta SD!\n");
        while(1);
  }
  delay(1000);

  tft.loadFont("Apple-Chancery-24");
  // Muestra todos los caracteres en pantalla con retardo de 2 segundos (2000 ms) entre pantallas
  tft.showFont(2000); // Nota: ¡Esta función mueve la posición del cursor!

  tft.setTextColor(TFT_RED,TFT_BLACK);
  tft.setCursor(0,0);

  tft.println("Konnichiwa");
  tft.println("Sayonara");
  tft.println();
  tft.unloadFont();

  tft.loadFont("Latin-Hiragana-24");
  tft.setTextColor(TFT_GREEN,TFT_BLACK);
  tft.println("こんにちは");
  tft.println("さようなら");
  tft.unloadFont();
  
}
void loop(){}
```

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
