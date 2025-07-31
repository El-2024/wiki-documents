---
title: Grove-Shield-para-Wio-Lite
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Shield-for-Wio-Lite/
slug: /es/Grove-Shield-for-Wio-Lite
last_update:
  date: 07/25/2025
  author: Guillermo
---

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/Grove-Shield-for-Wio-Lite-V1.0-wiki.jpg)

# Grove Shield para Wio Lite

El Grove Shield para Wio Lite está diseñado para la serie Wio Lite de Seeed Studio. Ahora que el Wio Lite W600 está disponible, pronto lanzaremos más placas Wio. Además, este Grove Shield puede funcionar con las placas Adafruit Feather. Ofrece compatibilidad con más de 200 módulos Grove para las comunidades Wio Lite y Feather.

Este Shield permite sacar los pines del procesador del Wio Lite (por ejemplo, el SAM D21 para el Wio Lite W600) en forma de headers y conectores Grove. Cuenta con 4 conectores digitales Grove, 4 conectores analógicos Grove, un puerto Grove UART y un puerto Grove I2C.

<p style={{ textAlign: 'center' }}>
  <a href="https://www.seeedstudio.com/Grove-Shield-for-Wio-Lite-p-4156.html" target="_blank">
    <img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" />
  </a>
</p>

## Especificaciones

| Parámetro            | Valor / Rango     |
|----------------------|-------------------|
| Voltaje de operación | 3.3 V / 5 V       |
| Temperatura de operación | -25℃ a +85℃    |
| Puertos analógicos   | 4                 |
| Puertos digitales    | 4                 |
| Puertos UART         | 1                 |
| Puertos I2C          | 1                 |
| Tamaño               | 60 mm x 52 mm     |

## Placas Compatibles

El Grove Shield está probado y es totalmente compatible con las siguientes placas:

- [Wio Lite - W600](https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html)
- [Wio Lite - MG126](https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html)
- Placa Feather basada en Adafruit SAMD21

También es compatible en factor de forma con otras placas Adafruit Feather. Asegúrate de revisar el número de pines al usar este shield con esas placas Feather.

## Vista General del Hardware

![](https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/Grove-Shield-for-Wio-Lite-V1.0.jpg)

- **Puertos Analógicos**: 4 puertos analógicos, 5 pines analógicos  
  > A0: incluye pines A0 y A1  
  > A1: incluye pines A1 y A2  
  > A2: incluye pines A2 y A3  
  > A3: incluye pines A3 y A4

- **Puertos Digitales**: 4 puertos digitales, 5 pines digitales  
  > D5: incluye pines D5 y D6  
  > D6: incluye pines D6 y D9  
  > D9: incluye pines D9 y D10  
  > D10: incluye pines D10 y D11

:::caution
  Debido a que puertos adyacentes comparten pines (por ejemplo, los puertos A0 y A1 comparten el pin A1), ten cuidado de no crear conflictos usando puertos adyacentes simultáneamente. Por ejemplo, si el módulo X usa el pin A1 del puerto A0, no deberías usar el pin A1 del puerto A1 para otro módulo.
:::

- **Puerto UART**: 1 puerto UART  
- **Puerto I2C**: 1 puerto I2C  
- **Interruptor de Energía**:  
  Si usas USB tipo C para alimentar tu placa Wio Lite, selecciona el modo 5V; si usas batería LiPo, selecciona el modo 3.3V.

### Pinout

Para el pinout, consulta la serigrafía en la parte trasera de este shield.

![](https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/wiki-pinout.jpg)

## Visor de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/res/Grove%20Shield%20for%20Wio%20Lite_v1.0_190716.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Archivo esquemático Grove Shield para Wio Lite](https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/res/Grove%20Shield%20for%20Wio%20Lite_v1.0_190716.zip)

## Soporte Técnico y Discusión de Producto

Si tienes alguna duda técnica, por favor publica tu consulta en nuestro [foro](http://forum.seeedstudio.com/).  
¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte soporte y asegurarnos que tu experiencia sea lo más fluida posible. Contamos con diversos canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>