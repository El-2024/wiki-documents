---
description: 4-inch Touch Screen
title: 4-inch Touch Screen
keywords:
- SenseCAP Indicator ESP32 Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Indicator_ESP32_4_inch_Touch_Screen
last_update:
  date: 07/22/2025
  author: Guillermo
---
# **Pantalla Táctil de 4 pulgadas**

El SenseCAP Indicator está equipado con una pantalla táctil de 4 pulgadas, que puede personalizar la interfaz de usuario que necesites.  
En este tutorial, te guiaremos sobre cómo usar la biblioteca gráfica LvGL (Light and Versatile Graphics Library) para SenseCAP Indicator.

**Sistema de Coordenadas de Píxeles**

Una imagen digital 2D está compuesta por filas y columnas de píxeles. Un píxel en la imagen se especifica indicando en qué columna y en qué fila se encuentra. En términos simples, un píxel se puede identificar por un par de enteros que proporcionan el número de columna y el número de fila.

Convencionalmente, las columnas se numeran de izquierda a derecha desde la esquina superior, empezando desde cero, pero en algunos casos también puede comenzar desde otras esquinas (configurando la rotación).

**Modelo de color de 16 bits**

Los píxeles también se expresan en forma de color, por lo que es útil conocer algunos modelos de color. El modelo de color de 16 bits es adecuado para que los microcontroladores trabajen, por lo que es un buen punto de partida. Este modelo de color consta de 3 componentes de color: Rojo, Verde y Azul. Dependiendo del modelo de color, estos 3 componentes se almacenan en una variable de 16 bits.

| Bit    | 15    | 14    | 13    | 12    | 11    | 10    | 9     | 8     | 7     | 6     | 5     | 4     | 3     | 2     | 1     | 0     |
| ------ | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| **Dato** | Rojo  | Rojo  | Rojo  | Rojo  | Rojo  | Verde | Verde | Verde | Verde | Verde | Verde | Azul  | Azul  | Azul  | Azul  | Azul  |

**Inicialización de la Pantalla LCD**

Para inicializar la pantalla LCD en SenseCAP Indicator:

```c
lcd init:
bsp_board_init()
```

# **Soporte Técnico**

¡No te preocupes, te tenemos cubierto! Por favor visita nuestro [Canal Oficial de Discord de Seeed](https://discord.com/invite/QqMgVwHT3X) para hacer tus preguntas.

Si tienes un pedido grande o necesitas una personalización, por favor contacta a iot@seeed.cc
