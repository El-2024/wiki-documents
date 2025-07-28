---
title: Loading Image
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-LCD-Loading-Image/
slug: /es/Wio-Terminal-LCD-Loading-Image
last_update:
  date: 07/27/2025
  author: Guillermo
---
# Cargando Imágenes

Este repositorio describe cómo cargar y mostrar imágenes desde la tarjeta SD en la pantalla TFT LCD del Wio Terminal. ¡Esto puede ser una implementación muy útil para tu diseño y se puede utilizar en diversos casos!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WechatIMG2314.jpeg.jpg" /></div>

## Instalación de Librerías

### Instalación de la librería de tarjeta SD para Wio Terminal

- Visita [Resumen del Sistema de Archivos](https://wiki.seeedstudio.com/Wio-Terminal-FS-Overview/)

### Instalación de la librería de pantalla TFT LCD para Wio Terminal

- Visita [Resumen de la Pantalla LCD](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/)

## Configuración del Formato de Imagen

### PASO 1: Preparar la imagen
:::note
    Necesitamos convertir la imagen al formato BMP de 24 bits de Windows y colocar la imagen en la estructura de carpetas correcta. Recomendamos usar `Microsoft Paint` para hacerlo.
:::
 - **Paso 1-1:** Usa `Microsoft Paint` para redimensionar la imagen al tamaño máximo de píxeles que permite el área de visualización de tu pantalla

 - **Paso 1-2:** Luego guarda la imagen haciendo clic en `Guardar como`, seguido de `Imagen BMP` y desde el menú desplegable de tipo de archivo selecciona `Mapa de bits de 24 bits (.bmp)`.

 - **Paso 1-3:** Crea una carpeta llamada `bmp` y guarda tus imágenes en formato `.bmp` de Windows dentro de esta carpeta.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/wioterminaltu.png" /></div>

### PASO 2: Convertir la imagen `bitmap de 24 bits` al formato `bmp de 8 bits o 16 bits` legible por el microcontrolador
:::note
    Para mostrar imágenes bmp en nuestro sistema embebido, necesitamos eliminar parte de la información (archivos de cabecera) del formato bmp de Windows. Escribimos un script en Python para hacer esto por nosotros, así que elige una de las dos opciones siguientes para convertir tus imágenes.
:::

#### Opción 1: Usar ejecutables precompilados para Windows (solo Windows):

- **Paso 2-1-1:** Hemos preparado el ejecutable utilizando el paquete [Pyinstaller](https://pyinstaller.org/en/stable/){target=_blank}, puedes descargar el ejecutable haciendo clic en [bmp_converter.exe](https://files.seeedstudio.com/wiki/Wio-Terminal/res/bmp_converter.exe)

- **Paso 2-1-2:** Coloca el archivo `bmp_converter.exe` descargado en el mismo directorio que la carpeta `bmp` creada en el `Paso 1-3`.

- **Paso 2-1-3:** Haz doble clic para ejecutar `bmp_converter.exe`, luego en la terminal emergente selecciona una de las dos opciones: "Introduce `1` para convertir a color de 8 bits; Introduce `2` para convertir a color de 16 bits".

#### Opción 2: Usar el código fuente en Python (para plataformas cruzadas)
:::note
    Debes tener Python instalado en tu computadora
:::
- **Paso 2-2-1:** Descarga el script en Python [bmp_converter.py](https://files.seeedstudio.com/wiki/Wio-Terminal/res/bmp_converter.py) y guárdalo en el mismo directorio que la carpeta `bmp` creada en el `Paso 1-3`.

- **Paso 2-2-2:** Abre `cmd` o `terminal` para ejecutar el script de Python. Primero, usa `cd` para moverte al directorio donde guardaste `bmp_converter.py` y la carpeta `bmp`, luego ejecuta el script.

- **Paso 2-2-3:** Dos opciones: Introduce `1` para convertir a color de 8 bits; Introduce `2` para convertir a color de 16 bits.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/PythonScript.gif" /></div>

### PASO 3: Imagen lista

Ahora puedes encontrar las imágenes `.bmp` convertidas dentro de otra carpeta llamada `rgb332` (8 bits) o `rgb565` (16 bits) dentro de la carpeta `bmp`.

## Primeros Pasos

### Instala la librería [`RawImage.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/RawImage.h)

Esta librería se usa para facilitar la carga y visualización de imágenes. Descarga [`RawImage.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/RawImage.h) y adjunta este archivo de cabecera en la ubicación de tu sketch.

### Inicialización de imágenes en Arduino

- **Para mostrar imágenes en la pantalla**

```cpp
// Para dibujar una imagen en color de 8 bits en pantalla, empezando desde el punto (x, y):
drawImage<uint8_t>("ruta en la tarjeta SD", x, y);

// Para dibujar una imagen en color de 16 bits en pantalla, empezando desde el punto (x, y):
drawImage<uint16_t>("ruta en la tarjeta SD", x, y);
```

* **Para inicializar una imagen (No es necesario si se usa la función drawImage anterior)**

```cpp
// Al usar color de 8 bits, inicializa la imagen así:
Raw8 * img8 = newImage<uint8_t>("ruta en la tarjeta SD");

// Al usar color de 16 bits, inicializa la imagen así:
Raw16 * img16 = newImage<uint16_t>("ruta en la tarjeta SD");
```

## Código de Ejemplo

```cpp
# include"TFT_eSPI.h"
# include "Seeed_FS.h" //Incluye la librería para la tarjeta SD
# include"RawImage.h"  //Incluye la librería de procesamiento de imagen
TFT_eSPI tft;

void setup() {
    //Inicializar la tarjeta SD
    if(!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
        while (1);
    }
    tft.begin();
    tft.setRotation(3);

    drawImage<uint8_t>("test.bmp", 0, 0); //Muestra esta imagen de 8 bits en la SD desde (0, 0)
}

void loop() {
}
```

## Preguntas Frecuentes (FAQs)

**Si ocurre el error `ImportError: No module named PIL`:**

* Instala el módulo de Python ingresando `pip install pillow` en la consola o terminal

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes formas de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
