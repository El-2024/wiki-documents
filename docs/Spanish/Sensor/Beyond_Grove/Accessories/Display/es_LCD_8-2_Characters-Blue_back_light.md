---
title: LCD 8*2 Characters- Blue back light
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/LCD_8-2_Characters-Blue_back_light/
slug: /es/LCD_8-2_Characters-Blue_back_light
last_update:
  date: 06/12/2025
  author: Guillermo
---
![](http://bz.seeedstudio.com/depot/images/product/lcd821n.jpg)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/lcd-82-characters-blue-back-light-p-120.html?cPath=163_164)

## Esquemático

---
![](https://files.seeedstudio.com/wiki/LCD_8-2_Characters-Blue_back_light/img/LCD-bbl-block.JPG)

## Especificaciones

---

### Valores Máximos Absolutos

### Tabla de límites eléctricos

| Elemento                         | Símbolo                       | Min  | Max     | Unidad |
| -------------------------------- | ----------------------------- | ---- | ------- | ------ |
| Voltaje de alimentación (lógica) | V<sub>DD</sub>-V<sub>SS</sub> | -0.3 | 7.0     | V      |
| Voltaje de alimentación (LCD)    | V<sub>DD</sub>-V<sub>O</sub>  | -0.3 | 13.0    | V      |
| Voltaje de entrada               | V<sub>I</sub>                 | -0.3 | VDD+0.3 | V      |
| Temperatura de operación         | T<sub>opr</sub>               | 0    | 50      | ℃      |
| Temperatura de almacenamiento    | T<sub>stg</sub>               | -10  | 60      | ℃      |

### Datos Mecánicos

| Elemento                      | Dimensiones Nominales | Unidad |
| ----------------------------- | --------------------- | ------ |
| Tamaño del módulo (An×Al×P)   | 58.0×32.0×9.5         | mm     |
| Área de visualización (An×Al) | 36.0×15.0             | mm     |
| Tamaño de caracteres (An×Al)  | 2.45×5.0              | mm     |
| Tamaño de puntos (An×Al)      | 0.45×0.5              | mm     |
| Peso                          |                       | g      |


### Características Eléctricas

*(V<sub>DD</sub> = 5V ± 0.25V)*

| Elemento                  | Símbolo                        | Condición de prueba  | Min  | Típ | Max            | Unidad |
| ------------------------- | ------------------------------ | -------------------- | ---- | --- | -------------- | ------ |
| Voltaje alto de entrada   | V<sub>IH</sub>                 | -                    | 2.2  | -   | V<sub>DD</sub> | V      |
| Voltaje bajo de entrada   | V<sub>IL</sub>                 | -                    | -0.3 | -   | 0.6            | V      |
| Voltaje alto de salida    | V<sub>OH</sub>                 | I<sub>OH</sub>=0.3mA | 2.4  | -   | V<sub>DD</sub> | V      |
| Voltaje bajo de salida    | V<sub>OL</sub>                 | I<sub>OL</sub>=1.2mA | 0    | -   | 0.4            | V      |
| Corriente de suministro   | I<sub>DD</sub>                 | V<sub>DD</sub>=5.0V  | -    | 1.2 | 3.0            | mA     |
| Voltaje de manejo del LCD | V<sub>DD</sub> - V<sub>O</sub> | Ta=25℃               | -    | 5.0 | -              | V      |

### Especificaciones de Retroiluminación LED (Ta=25℃)

### Parámetros eléctricos del LED

| Elemento                    | Símbolo       | Típ  | Max  | Unidad |
| --------------------------- | ------------- | ---- | ---- | ------ |
| Voltaje directo             | V<sub>f</sub> | 4.05 | 4.25 | V      |
| Corriente directa           | I<sub>f</sub> | 60   | -    | mA     |
| Longitud de onda de emisión | λ<sub>p</sub> | 568  | -    | nm     |

### Definición de Pines y Niveles

| Pin | Símbolo        | Nivel  | Función                              |
| --- | -------------- | ------ | ------------------------------------ |
| 1   | V<sub>SS</sub> | -      | GND (0V)                             |
| 2   | V<sub>DD</sub> | -      | Voltaje de alimentación lógica (+5V) |
| 3   | V<sub>O</sub>  | -      | Voltaje de manejo del LCD            |
| 4   | RS             | H/L    | H: Dato< /br>L: Código de instrucción  |
| 5   | R/W            | H/L    | H: Lectura< /br>L: Escritura           |
| 6   | E              | H, H→L | Señal de habilitación                |
| 7   | DB0            | H/L    | Línea de datos (bus de datos)        |
| 8   | DB1            | H/L    | (continúa línea de datos)            |
| 9   | DB2            | H/L    |                                      |
| 10  | DB3            | H/L    |                                      |
| 11  | DB4            | H/L    |                                      |
| 12  | DB5            | H/L    |                                      |
| 13  | DB6            | H/L    |                                      |
| 14  | DB7            | H/L    |                                      |
| 15  | LEDA           | -      | LED Backlight Power Supply           |
| 16  | LEDK           | -      | (continúa LED Backlight)             |


## Dimensiones Mecánicas

![](https://files.seeedstudio.com/wiki/LCD_8-2_Characters-Blue_back_light/img/LCD-bbl-dimen.JPG)

## Recursos

* [Código de ejemplo para Arduino](https://www.seeedstudio.com/depot/images/product/LCD0820.pde)

* [Datasheet](https://www.seeedstudio.com/depot/datasheet/LMB0820-info.pdf)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Contamos con varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
