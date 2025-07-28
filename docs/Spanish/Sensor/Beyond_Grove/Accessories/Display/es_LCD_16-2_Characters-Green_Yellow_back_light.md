---
title: LCD_16-2_Characters-Green_Yellow_back_light
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/LCD_8-2_Characters-Blue_back_light/
slug: /es/LCD_16-2_Characters-Green_Yellow_back_light
last_update:
  date: 07/12/2025
  author: Guillermo
---

![](http://bz.seeedstudio.com/depot/images/product/lcd1621n.jpg)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/lcd-162-characters-green-yellow-back-light-p-62.html?cPath=163_164)

## Precauciones

---

1. El panel LCD está hecho de vidrio. Cualquier golpe mecánico (por ejemplo, caída desde una altura) dañará el módulo LCD.

2. No apliques fuerza excesiva sobre la superficie de la pantalla, ya que esto puede causar un cambio anormal en el color de la imagen.

3. El polarizador del LCD se raya fácilmente. Si es posible, no retires la película protectora del LCD hasta el último paso de la instalación.

4. Nunca intentes desensamblar ni modificar el módulo LCD.

5. Limpia el LCD solo con alcohol isopropílico o alcohol etílico. Otros disolventes (por ejemplo, agua) pueden dañar el LCD.

6. Al montar el módulo LCD, asegúrate de que esté libre de torsiones, deformaciones o curvaturas.

7. Asegúrate de dejar suficiente espacio (con amortiguación) entre el chasis y el panel LCD para evitar que fuerzas externas lo dañen o afecten negativamente la visualización.

8. Sostén el módulo LCD solo por los lados. Nunca lo sostengas aplicando presión sobre el sellado térmico o el TAB.

9. Nunca apliques fuerza sobre los componentes del módulo LCD. Esto puede causar daños invisibles o reducir su confiabilidad.

10. El módulo LCD puede dañarse fácilmente por electricidad estática. Mantén un entorno de trabajo antiestático adecuado para proteger el módulo.

11. Al retirar la película protectora del LCD, la carga estática puede provocar un patrón de visualización anormal. Esto es normal y se corregirá solo en poco tiempo.

12. Ten cuidado con los bordes afilados del panel LCD para evitar lesiones.

13. Nunca operes el módulo LCD por encima de los valores máximos absolutos.

14. Mantén las líneas de señal lo más cortas posible para evitar señales ruidosas que afecten al LCD.

15. Nunca apliques señales al módulo LCD sin que esté alimentado.

16. El chip IC (por ejemplo, TAB o COG) es sensible a la luz. Una iluminación intensa puede provocar fallos de funcionamiento. Se recomienda un encapsulado que bloquee la luz.

17. La confiabilidad del módulo LCD puede verse reducida por choques térmicos.

18. Al almacenar el módulo LCD, evita la exposición directa al sol, la alta humedad, temperaturas altas o muy bajas. Estas condiciones pueden dañar o degradar el LCD.

---

## Esquemático

---

### Diagrama de Bloques

![](https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/LCD-wbl-block-162.JPG)

## Especificaciones

---

- **Modo de visualización del LCD**: STN, Positivo, Transflectivo  
- **Color de visualización**: Azul oscuro / Verde amarillento  
- **Ángulo de visión**: 6H  
- **Método de conducción**: 1/16 duty, 1/5 bias  
- **Retroiluminación**: LED amarillo-verde  
- **Dimensiones externas**: 80 × 36 × 15.8 mm (máx.)

:::note
1. El tono de color puede variar ligeramente según la temperatura y las condiciones de operación.  
2. El color está definido como el color inactivo o de fondo.
:::

## Características de Corriente Alterna (AC)

V<sub>ss</sub>=0V,V<sub>DD</sub>=5V,T<sub>OP</sub>=25℃

<table>
<tr>
<th>Parámetro
</th>
<th>Símbolo
</th>
<th>MIN
</th>
<th>TYP
</th>
<th>MAX
</th>
<th>Unidad
</th></tr>
<tr>
<td width="200px">Tiempo de ciclo de E
</td>
<td width="100px">tc
</td>
<td width="100px">1500
</td>
<td width="100px"> -
</td>
<td width="100px"> -
</td>
<td width="100px">ns
</td></tr>
<tr>
<td>Ancho en nivel alto de E
</td>
<td>twh
</td>
<td>700
</td>
<td> -
</td>
<td> -
</td>
<td>ns
</td></tr>
<tr>
<td>Ancho en nivel bajo de E
</td>
<td>twl
</td>
<td>700
</td>
<td> -
</td>
<td> -
</td>
<td>ns
</td></tr>
<tr>
<td>Tiempo de subida de E
</td>
<td>tr
</td>
<td> -
</td>
<td> -
</td>
<td>18
</td>
<td>ns
</td></tr>
<tr>
<td>Tiempo de bajada de E
</td>
<td>tf
</td>
<td> -
</td>
<td> -
</td>
<td>18
</td>
<td>ns
</td></tr>
<tr>
<td>Tiempo de preparación de direcciones
</td>
<td>tas
</td>
<td>5
</td>
<td> -
</td>
<td> -
</td>
<td>ns
</td></tr>
<tr>
<td>Tiempo de configuración direcciones
</td>
<td>tasu
</td>
<td>210
</td>
<td> -
</td>
<td> -
</td>
<td>ns
</td></tr>
<tr>
<td>Tiempo de retención de direcciones
</td>
<td>tah
</td>
<td>15
</td>
<td> -
</td>
<td> -
</td>
<td>ns
</td></tr>
<tr>
<td>Tiempo de preparación de dato
</td>
<td>tdsw
</td>
<td>300
</td>
<td> -
</td>
<td> -
</td>
<td>ns
</td></tr>
<tr>
<td>Tiempo de retardo de datos
</td>
<td>td
</td>
<td> -
</td>
<td> -
</td>
<td> 480
</td>
<td>ns
</td></tr>
<tr>
<td>Tiempo retención dato (escritura)
</td>
<td>tdhw
</td>
<td>15
</td>
<td> -
</td>
<td> -
</td>
<td>ns
</td></tr>
<tr>
<td>Tiempo retención dato (lectura)
</td>
<td>tdhr
</td>
<td>30
</td>
<td> -
</td>
<td> -
</td>
<td>ns
</td></tr></table>
<table >
<tr>
<td><div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/LCD-module-WTiming.jpg" /></div>
</td>
<td><div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/LCD-module-RTiming.jpg" /></div>
</td></tr>
<tr>
<td><strong>HDiagrama de Temporización de Escritura desde el Host</strong>
</td>
<td><strong>Diagrama de Temporización de Lectura desde el Host</strong>
</td></tr></table>

## Definición de Pines y Descripción

---
<table>
<tr>
<th>Nº de Pin
</th>
<th>Nombre del Pin
</th>
<th>I/O
</th>
<th>Descripción
</th></tr>
<tr>
<td width="100px">1
</td>
<td width="100px">VSS
</td>
<td width="100px">Alimentación
</td>
<td width="500px">Tierra o GND (0V)
</td></tr>
<tr>
<td>2
</td>
<td>VDD
</td>
<td>Alimentación
</td>
<td>Voltaje positivo de alimentación
</td></tr>
<tr>
<td>3
</td>
<td>V0
</td>
<td>Alimentación
</td>
<td>Referencia de contraste del LCD
</td></tr>
<tr>
<td>4
</td>
<td>RS
</td>
<td>Entrada
</td>
<td>

* RS=HIGH:DB0-DB7=Datos de la RAM de pantalla

* RS=LOW:DB0-DB7=Datos de instrucción

<div>
  5
  R/W
  Entrada
</div>

En modo de lectura

R/W=HIGH

Los datos se leen del módulo LCD,  
los datos aparecen en DB0-DB7 y pueden ser leídos por el host  
mientras E = H y el dispositivo está siendo seleccionado.

En modo de escritura

R/W=LOW;

Se escriben datos en el módulo LCD,  
los datos que aparecen en DB0-DB7 serán escritos  
en el módulo LCD en el flanco de E=H→L y el dispositivo esté siendo seleccionado.

</td></tr>
<tr>
<td>6
</td>
<td>E
</td>
<td>Entrada
</td></tr>
<tr>
<td>7
</td>
<td>DB0
</td>
<td>I/O
</td>
<td rowspan="3">Bus de datos;

Terminal de E/S en tres estados para datos de pantalla o datos de instrucción

</td></tr>
<tr>
<td>..
</td>
<td>..
</td>
<td>..
</td></tr>
<tr>
<td>14
</td>
<td>DB7
</td>
<td>I/O
</td></tr>
<tr>
<td>15
</td>
<td>CS1
</td>
<td>Entrada
</td>
<td>Selección de chip,

Cuando CS1 = 1 (*1)

Habilita el acceso al lado izquierdo (64 columnas) del módulo LCD

</td></tr>
<tr>
<td>16
</td>
<td>CS2
</td>
<td>Entrada
</td>
<td>Selección de chip,

Cuando CS2 = 1 (*1)

Habilita el acceso al lado derecho (64 columnas) del módulo LCD

</td></tr>
<tr>
<td>17
</td>
<td> /RST
</td>
<td>Entrada
</td>
<td>Señal de reinicio

/RST = L,

Pantalla apagada

El registro de línea de inicio de pantalla se pone en 0

No se aceptan comandos o datos de instrucción

/RST = H

Funcionamiento normal

</td></tr>
<tr>
<td>18
</td>
<td>VOUT
</td>
<td>Salida
</td>
<td>Salida del amplificador de potencia para V0
</td></tr>
<tr>
<td>19
</td>
<td>BLA
</td>
<td>Alimentación
</td>
<td>Alimentación positiva para la retroiluminación LED
</td></tr>
<tr>
<td>20
</td>
<td>BLK
</td>
<td>Alimentación
</td>
<td>Alimentación negativa para la retroiluminación LED
</td></tr></table>

**Nota:**

Los datos de pantalla o de instrucción pueden escribirse en los controladores del módulo LCD individualmente o al mismo tiempo.

Solo se deben leer los datos de pantalla o de instrucción de uno de los controladores del módulo LCD a la vez, de lo contrario podrían ocurrir colisiones de datos inesperadas.

## Dimensiones Mecánicas

---
Dimensiones externas: 98.0 × 60.0 × 13.7 mm (MÁX)  
(Consulta el dibujo dimensional adjunto para más detalles)

## Uso

---

### Registros Internos

Hay tres registros en cada sección del módulo LCD. Cada uno de ellos puede ser controlado de forma independiente.

**Registro de Dirección de Página (X)**

El registro de dirección X designa las páginas de la RAM interna de datos de pantalla. No tiene función de conteo automático, por lo que la dirección debe establecerse mediante instrucción.

**Contador de Dirección de Columna (Y)**

El contador de dirección Y designa la dirección de la RAM interna de datos de pantalla. Puede establecerse mediante instrucción y se incrementa automáticamente en 1 al leer o escribir datos de pantalla.

**Registro de Línea de Inicio de Pantalla (Z)**

El registro de dirección Z indica la dirección de la RAM de pantalla que se asigna a la línea superior del LCD. Puede utilizarse para hacer desplazamiento (scroll) del patrón de visualización en el LCD.

### Programación

---
**Configuración Básica**

Para controlar correctamente el módulo LCD y proporcionar una visualización normal, usa la siguiente configuración:

* Línea de inicio de pantalla (Dirección Z) = 0  
* Pantalla LCD = encendida

:::note
1. Estas configuraciones/comandos deben enviarse al módulo LCD al encenderse.<br />
2. Consulta la sección de Comandos de Pantalla para más detalles.
:::

**Ajuste del contraste de la pantalla LCD**

Debe conectarse un potenciómetro al módulo LCD para proporcionar una referencia al pin V0. Al ajustar el potenciómetro, se modificará el contraste de la pantalla.  
El valor recomendado del potenciómetro es de 25k a 50k ohms.

![](https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/VFD-lcd-module-162.JPG)

**Reinicio del módulo LCD**

El módulo LCD debe inicializarse colocando el terminal /RST a nivel bajo al encenderse.

Cuando /RST se pone en bajo, el módulo LCD realizará lo siguiente:

* Pantalla apagada  
* El registro de línea de inicio de pantalla se pone en 0 (Dirección Z = 0)

Mientras /RST esté en bajo, no se puede aceptar ninguna instrucción, excepto la lectura de estado.  
Por lo tanto, ejecuta otras instrucciones después de asegurarte de que DB4 = 0 (RST limpio) y DB7 = 0 (listo) mediante la instrucción de lectura de estado.  

Las condiciones de la fuente de alimentación al inicio son las siguientes:

<table >
<tr>
<th>Item
</th>
<th>Símbolo
</th>
<th>Min
</th>
<th>Tip
</th>
<th>Max
</th>
<th>Unidad
</th></tr>
<tr>
<td width="200px">Tiempo de reinicio
</td>
<td width="100px">trs
</td>
<td width="100px">2.0
</td>
<td width="100px"> -
</td>
<td width="100px"> -
</td>
<td width="100px"> us
</td></tr>
<tr>
<td>Tiempo de subida
</td>
<td>tr
</td>
<td> -
</td>
<td> -
</td>
<td>150
</td>
<td>ns
</td></tr></table>

![](https://files.seeedstudio.com/wiki/LCD_16-2_Characters-Green_Yellow_back_light/img/VFD-lcd-module-trtx.jpg)

## Recursos

* [Hoja de datos](https://bz.seeedstudio.com/depot/datasheet/LMB162ABC-Manual-Rev0.2.pdf)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos!  
Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible.  
Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
