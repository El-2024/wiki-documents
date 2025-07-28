---
title: Convertidor RS-232 a TTL (MAX3232IDR)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/RS-232_To_TTL_Conveter-MAX3232IDR/
slug: /es/RS-232_To_TTL_Conveter-MAX3232IDR
last_update:
  date: 07/12/2025
  author: Guillermo
---

![](https://files.seeedstudio.com/wiki/RS-232_To_TTL_Conveter-MAX3232IDR/img/main.jpg)

La mayoría de los microcontroladores (MCUs) utilizan niveles TTL, mientras que los puertos seriales de las computadoras generalmente usan niveles RS-232. Si queremos que la computadora se comunique con el MCU, necesitamos este **Convertidor RS-232 a TTL (MAX3232IDR)**.

Este módulo está basado en el chip MAX3232. Soporta múltiples velocidades de baudios y, en teoría, permite comunicación hasta una velocidad de 230400 bps.

<p style={{}}><a href="https://www.seeedstudio.com/RS-232-To-TTL-Conveter-MAX3232IDR-p-2851.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versión

| Versión del Producto | Cambios       | Fecha de Lanzamiento |
|----------------------|---------------|-----------------------|
| RS-232 a TTL (MAX3232IDR) | Versión inicial | Septiembre 2018       |

## Características

- Fácil de usar  
- Estable, alta velocidad  
- Gran relación costo-desempeño  
- Protección ESD de ±15 kV  
- Bajo consumo de energía  
- Dos drivers y dos receptores  

## Especificaciones

| Parámetro                    | Valor                        |
|-----------------------------|------------------------------|
| Voltaje de alimentación     | 3.3 V / 5 V                  |
| Voltaje entrada del driver  | 0 V ~ 5.5 V                  |
| Voltaje entrada del receptor| -25 V ~ +25 V                |
| Corriente sin carga         | 0.3 mA                       |
| Temperatura de operación    | -40 ℃ ~ 85 ℃                 |
| Rango de temperatura de almacenamiento | -65 ℃ ~ 150 ℃     |
| Tasa máxima de datos        | 250 Kbit/s                   |
| Velocidad soportada         | 300 bps ~ 230400 bps         |
| Dimensiones                 | 35 mm × 30 mm × 15 mm        |
| Peso                        | 10.9 g                       |
| Tamaño del paquete          | 150 mm × 100 mm × 15 mm      |
| Peso bruto                  | 14 g                         |

> 💡 **Consejo:**  
> Cuando se utilicen velocidades de baudios altas, asegúrate de que el MCU conectado sea compatible con dicha velocidad.

## Aplicaciones Típicas

- Equipos portátiles  
- PCs de mano  

## Primeros Pasos

Este es un módulo sencillo. Solo necesitas conectar la interfaz correspondiente del módulo al dispositivo deseado para transferir datos usando una herramienta de puerto serial.  
Ten en cuenta que al conectar un dispositivo TTL, el pin **RX del módulo** debe conectarse al **TX del dispositivo**, y el **TX del módulo** al **RX del dispositivo**.

![](https://files.seeedstudio.com/wiki/RS-232_To_TTL_Conveter-MAX3232IDR/img/connect.jpg)

## Visor de Esquemáticos en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/RS-232_To_TTL_Conveter-MAX3232IDR/res/RS232%20to%20TTL%20Converter%20(MAX3232IDR).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Archivos Eagle del Convertidor RS-232 a TTL (MAX3232IDR)](https://files.seeedstudio.com/wiki/RS-232_To_TTL_Conveter-MAX3232IDR/res/RS232%20to%20TTL%20Converter%20(MAX3232IDR).zip)

- **[PDF]** [Hoja de datos del MAX3232](https://files.seeedstudio.com/wiki/RS-232_To_TTL_Conveter-MAX3232IDR/res/Max3232.pdf)

- **[PDF]** [Versión PDF del Wiki](https://files.seeedstudio.com/wiki/RS-232_To_TTL_Conveter-MAX3232IDR/res/RS-232_To_TTL_Conveter-MAX3232IDR.pdf)

## Soporte Técnico y Discusión del Producto

Si tienes algún problema técnico, por favor repórtalo en nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte el soporte necesario para que tu experiencia sea lo más satisfactoria posible. Contamos con varios canales de comunicación para adaptarnos a tus preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
