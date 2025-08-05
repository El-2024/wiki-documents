---
title: Módulo RFID de 125Khz - UART
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/125Khz RFID module - UART/
slug: /es/125Khz_RFID_module-UART
last_update:
  date: 07/14/2025
  author: Guillermo
---
![https://www.seeedstudio.com/depot/images/product/P1240147.jpg](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/img/125khz20uart.jpg)

El módulo mini RDM de tarjeta RFID a 125KHz está diseñado para leer códigos desde tarjetas de solo lectura compatibles y tarjetas de lectura/escritura a 125KHz. Puede utilizarse en seguridad de oficinas/hogares, identificación personal, control de acceso, antifalsificación, juguetes interactivos y sistemas de control de producción, entre otros.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/125Khz-RFID-module-UART-p-171.html)

**Nota:** El módulo notificará cuando una etiqueta de 125KHz se acerque; el número de serie de la etiqueta será enviado vía el pin TX. Es una forma fácil de integrar RFID en proyectos con microcontroladores o en una PC vía UART/SB.

##   Características

*   Soporta antena externa
*   Distancia máxima de lectura efectiva hasta 50 mm
*   Tiempo de decodificación menor a 100 ms
*   Interfaz UART TTL
*   Soporta etiquetas compatibles EM4100 (solo lectura o lectura/escritura)
*   Controlador integrado de LED bicolor externo y zumbador
*   Diseño de tamaño reducido

##   Especificaciones

###   Especificaciones clave

<table>
<tr>
<td width="300px">Frecuencia</td>
<td width="500px">125KHz</td>
</tr>
<tr>
<td>Velocidad en baudios</td>
<td>9600 (Nivel TTL, formato RS232)</td>
</tr>
<tr>
<td>Interfaz</td>
<td>Weigand26 o nivel TTL RS232</td>
</tr>
<tr>
<td>Alimentación</td>
<td>DC 5V (±5%)</td>
</tr>
<tr>
<td>Corriente</td>
<td>&lt;50 mA</td>
</tr>
<tr>
<td>Rango de operación</td>
<td>&gt;50 mm (dependiendo de la tarjeta/etiqueta)</td>
</tr>
<tr>
<td>Expansión de I/O</td>
<td>No disponible</td>
</tr>
<tr>
<td>Indicador luminoso</td>
<td>No disponible</td>
</tr>
<tr>
<td>Temperatura de trabajo</td>
<td>-10℃ ~ +70℃</td>
</tr>
<tr>
<td>Temperatura de almacén</td>
<td>-20℃ ~ +80℃</td>
</tr>
<tr>
<td>Humedad máxima</td>
<td>Humedad relativa 0 ~ 95%</td>
</tr>
<tr>
<td>Dimensiones</td>
<td>38.5 mm × 19 mm × 9 mm</td>
</tr>
</table>

##   Definición de Pines

Consulta la imagen de dimensiones mecánicas y revisa la definición de pines a continuación:

```
Definición de Pines:
 P1:
   PIN1    TX
   PIN2    RX
   PIN3
   PIN4    GND
   PIN5    +5V(DC)
 P2:
   PIN1    ANT1
   PIN2    ANT2
 P3:
   PIN1    LED
   PIN2    +5V(DC)
   PIN3    GND
```

##   Dimensiones Mecánicas

![](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/img/RFID-wiegand-dimen.JPG)

##   Uso

###   Salida de datos (interfaz TTL RS232)

1.  9600 bps, sin paridad, 8 bits de datos, 1 bit de parada (N,8,1)
2.  **CHECKSUM**: Se calcula como una operación XOR sobre los 10 caracteres ASCII de datos.

<table>
  <tr>
    <td width="100px">02</td>
    <td width="300px">10 caracteres ASCII del número de tarjeta</td>
    <td width="100px">Checksum</td>
    <td width="100px">03</td>
  </tr>
</table>

**Ejemplo:** Número de tarjeta: `62E3086CED`

- Datos enviados: `36H 32H 45H 33H 30H 38H 36H 43H 45H 44H`
- CHECKSUM: `62H ^ E3H ^ 08H ^ 6CH ^ EDH = 08H`

####   Diagrama de tiempo

![](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/img/RFID-wiegand-time-seq.JPG)

###   Ejemplo de uso

![](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/img/125k_RFID_uasge.JPG)

Output date(HEX): 02 | 30 31 30 30 30 37 33 34 45 30 | 44 32 | 03
-&gt;Change to Decimal
CardNumber Decimal: 48 49 48 48 48 55 51 52 69 48
CheckSum Decimal: 68 50
-&gt;Refer to ASCII table,get Ascill value
CardNumber Ascill: 0 1 0 0 0 7 3 4 E 0
CheckSum Ascill : D 2
(01H) xor (00H) xor (07H) xor (34H) xor (E0H) = D2H

###   Programación

Conecta RX/TX al puerto UART del Arduino. Código de demostración en Arduino:

```
void setup()
{
  Serial.begin(9600);
}
void loop()
{
  if(Serial.available())
  {
    while(Serial.available())
    Serial.write(Serial.read());
  }
}
```

##   Recursos

*   Hoja de datos: [RDM630-Spec.pdf](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/res/RDM630-Spec.pdf)

*   [Como conectar Arduino and RFID](https://www.instructables.com/id/Arduino-and-RFID-from-seeedstudio/)

## Soporte Técnico y Discusión del Producto
 Si tienes algún problema técnico, publícalo en nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes formas de soporte y asegurar que tu experiencia sea lo más satisfactoria posible.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>