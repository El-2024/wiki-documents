---
description: The XIAO ESP32C3-powered 7.5-inch E-Ink Display is a compact, energy-efficient solution for showcasing data via Arduino. 
title: Funciona con Arduino Arduino
keywords:
- ePaper display
- arduino
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/cover2.webp
slug: /es/xiao_075inch_epaper_panel_arduino
sidebar_position: 3
last_update:
  date: 07/20/2025
  author: Guillermo
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/203.png" style={{width:900, height:'auto'}}/></div>

<div className="get_one_now_container" style={{ textAlign: 'center' }}>
  <a className="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html">
    <strong>
      <span style={{ color: '#FFFFFF', fontSize: '1.25rem' }}>🖱️ Consigue uno ahora</span>
    </strong>
  </a>
</div>

## Descripción General

El panel ePaper de 7.5" para XIAO se puede programar utilizando el IDE de Arduino, lo que lo hace accesible para creadores y desarrolladores familiarizados con el ecosistema de Arduino. Esta guía te llevará paso a paso en la configuración del entorno de desarrollo y en la ejecución de ejemplos básicos.

El panel ePaper incluye:

- Pantalla ePaper monocromática de 7.5" con resolución de 800x480
- Microcontrolador XIAO ESP32-C3 con conectividad inalámbrica
- Batería integrada de 2000mAh para uso portátil
- Interfaz USB tipo C para programación y alimentación
- Diseño compacto con soporte integrado

Mediante programación en Arduino puedes:

- Mostrar texto y gráficos
- Crear interfaces de usuario personalizadas
- Visualizar datos en tiempo real y lecturas de sensores
- Desarrollar aplicaciones interactivas
- Implementar aplicaciones de bajo consumo aprovechando la retención sin energía de la pantalla ePaper

Esta guía cubre el proceso de configuración inicial y proporciona ejemplos para comenzar a desarrollar tus propias aplicaciones en Arduino para el panel ePaper.

## Primeros Pasos

### Paso 1. Descargar Arduino IDE

Primero, si aún no tienes el IDE de Arduino, dirígete a [Arduino IDE](https://www.arduino.cc/en/software) y descarga la última versión disponible.

:::tip
Si es tu primera vez utilizando Arduino, te recomendamos seguir esta guía: [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

### Paso 2. Instalar soporte para placas ESP32

Ve a **Archivo** -> **Preferencias** y añade la siguiente URL en **Gestor de URLs Adicionales de Tarjetas**.  
[Haz clic aquí para ver los pasos detallados.](http://localhost:3000/XIAO_ESP32C3_Getting_Started/#software-setup)

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

### Paso 3. Instalar la librería Seeed Arduino LCD

:::tip
Esta librería cumple las mismas funciones que la librería TFT, pero **no es compatible** con ella. Si ya tienes instalada la librería TFT, desinstálala antes.
:::

Descarga e instala la librería Seeed Arduino LCD desde GitHub:

<div style={{ textAlign: 'center' }}>
  <img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/50.png" style={{ width: 800, height: 'auto' }} />
</div>

<div style={{ textAlign: 'center' }}>
  <a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
    <button
      type="button"
      className="download"
      style={{
        backgroundColor: '#00A418',
        borderRadius: '8px',
        border: 'none',
        color: '#fff',
        padding: '12px 24px',
        fontSize: '16px',
        cursor: 'pointer',
      }}
    >
      Haz clic aquí para descargar
    </button>
  </a>
</div>

Luego de descargarla, ve a **Programa** -> **Incluir Librería** -> **Añadir Librería .ZIP** y selecciona el archivo descargado.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png"
    style={{ width: 800, height: 'auto' }}
  />
</div>

Se incluyen 4 ejemplos básicos. Puedes abrir cualquiera de los siguientes:

1. **Bitmap**: Muestra una imagen bitmap.  
2. **Clock**: Muestra un reloj.  
3. **Clock_digital**: Muestra un reloj digital.  
4. **Shape**: Muestra palabras y figuras de distintos tamaños de forma aleatoria.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/52.png"
    style={{ width: 800, height: 'auto' }}
  />
</div>

### Paso 4. Subir el código

Antes de subir el código, abre el archivo **User_Setup_Select.h** en la librería **Seeed_Arduino_LCD**.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/53.png"
    style={{ width: 800, height: 'auto' }}
  />
</div>

Comenta la línea 160 y descomenta la línea 163, luego **guarda el archivo**.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/54.png"
    style={{ width: 800, height: 'auto' }}
  />
</div>

Después, ve a **Herramientas** -> **Placa** -> **Seeeduino XIAO ESP32C3** y **Herramientas** -> **Puerto** -> **Selecciona el puerto al que está conectada tu placa**. Finalmente haz clic en **Subir**.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/55.png"
    style={{ width: 800, height: 'auto' }}
  />
</div>

¡Ahora deberías ver el resultado en tu pantalla ePaper! Aquí los resultados de los ejemplos **Bitmap** y **Clock**:

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/56.png"
    style={{ width: 800, height: 'auto' }}
  />
</div>

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/57.png"
    style={{ width: 800, height: 'auto' }}
  />
</div>

## Recursos

- **[STP]**: [Modelo 3D de la caja](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [Esquema del controlador de la pantalla ePaper](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)


## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y asegurar que tu experiencia sea lo más fluida posible. Disponemos de varios canales de comunicación para adaptarnos a tus preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
