---
title: Cómo usar la Librería Gráfica LvGL
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-LVGL/
slug: /es/Wio-Terminal-LVGL
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Cómo usar la Librería Gráfica LvGL en el Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/banner.gif" /></div>

En este tutorial, te enseñaremos cómo usar la librería gráfica [**LvGL**](https://lvgl.io/) (Light and Versatile Graphics Library) para el Wio Terminal. Esta es una adaptación del proyecto original [lv_arduino](https://github.com/lvgl/lv_arduino) para el Wio Terminal.

[**LvGL**](https://lvgl.io/) es una librería gráfica de código abierto que proporciona todo lo necesario para crear interfaces gráficas embebidas (GUI) con elementos visuales fáciles de usar, efectos visuales atractivos y bajo consumo de memoria.

## Hardware Requerido

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## Primeros Pasos

- Sigue la guía [**Wio Terminal Get Started**](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/) antes de continuar con lo siguiente.

### Instalar Seeed_Arduino_LvGL

1. Visita el repositorio [Seeed_Arduino_LvGL](https://github.com/Seeed-Studio/Seeed_Arduino_LvGL) y descarga todo el repositorio en tu unidad local.

2. Ahora puedes instalar la librería en el IDE de Arduino. Abre el IDE de Arduino y haz clic en `Programa` -> `Incluir Librería` -> `Añadir biblioteca .ZIP`, y selecciona el archivo `Seeed_Arduino_LvGL` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### Ejemplos

#### 1. Bench Mark

Esta es la demostración de rendimiento (benchmark) de la librería gráfica LvGL en el Wio Terminal. Simplemente sube el archivo `benchmark.ino` al dispositivo usando el IDE de Arduino:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/benchmark.gif" /></div>

:::note
    El puerto actual del FPS en la demo de benchmark no se muestra correctamente. Mantente atento a futuras actualizaciones.
:::

#### 2. Prueba de Estrés (Stress Test)

Esta es la demostración de estrés de la librería gráfica LvGL en el Wio Terminal. Simplemente sube el archivo `lv_stress.ino` al dispositivo usando el IDE de Arduino:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/stress.gif" /></div>

Para más usos, también puedes consultar la [**documentación oficial de LvGL**](https://docs.lvgl.io/latest/en/html/index.html) y los [Ejemplos para Arduino](https://github.com/lvgl/lvgl/tree/master/examples/arduino) como referencia adicional.

## Recursos

- [Documentación oficial de la librería LvGL](https://docs.lvgl.io/latest/en/html/index.html)
- [LvGL en Github](https://github.com/lvgl/lvgl)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes formas de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
