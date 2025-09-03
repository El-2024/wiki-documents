---
title: Link Kit Transmisor y Receptor RF - 315MHz/433MHz
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz/
slug: /es/RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz
last_update:
  date: 07/16/2025
  author: Guillermo
---

# Kit de Transmisor y Receptor RF - 315MHz/433MHz

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/114992732_Front-05.png" alt="pir" width={600} height="auto" /></p>


Este es un kit de enlace por radiofrecuencia de **larga distancia**, disponible en **315MHz o 433MHz**, que utiliza tecnología **VCO y PLL** para garantizar una frecuencia estable y una fuerte capacidad antiinterferencia. Puedes usarlo directamente en proyectos como **transmisión de datos inalámbrica** o **control remoto**.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RF-Transmitter-and-Receiver-Link-Kit-315MHz-433MHz-p-5077.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


## Características

- Bajo consumo de energía: 6 mA @ 5 V / 5 mA @ 3.3 V  
- Alta sensibilidad de recepción: -110 dBm @ 10 kbps  
- Larga distancia de emisión: hasta **2 km** (en área abierta sin interferencias)  
- Amplio rango de temperatura: -20 ~ 75 °C  
- Aplicación flexible: compatible con **protoboard** y **PCB**  
- Gran supresión de radiación: sin interferencias mutuas ni impacto en la distancia de recepción  

## Especificaciones

| Parámetro                  | Valor/Intervalo                                 |
|---------------------------|--------------------------------------------------|
| Voltaje de operación      | Transmisor: 3–9 V / Receptor: 3–5 V              |
| Corriente de trabajo      | 50 mA (a 9 VDC)                                  |
| Principio de operación    | Superheterodino (VCO, PLL)                       |
| Modulación                | OOK / ASK                                        |
| Banda de operación        | 315 MHz / 433.92 MHz (opciones personalizadas)   |
| Temperatura de operación  | -20 °C a +75 °C                                  |
| Ancho de banda            | 200 kHz                                          |
| Sensibilidad              | -110 dBm (50 Ω)                                  |
| Tasa de modulación        | < 10 kbps                                        |
| Tipo de decodificación    | PT2272                                           |
| Longitud de antena        | 18 cm (Tx), 24 cm (Rx)                           |
| Distancia de emisión      | Hasta 2 km (en área abierta sin interferencia)   |
| Modos de salida           | Libre, enclavado, autoenclavado                 |

## Ideas de Aplicación

- Control remoto de apertura de puertas en vehículos  
- Abridores de puertas automáticas  
- Alarmas de seguridad inalámbricas  
- Control de cortinas eléctricas  
- Controladores industriales inalámbricos  
- Transmisión de datos inalámbrica  
- Control remoto de modelos y juguetes  

## Descripción del Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/114992732_Preview-07.png" alt="pir" width={1000} height="auto" /></p>

1. Transmisor - Interfaz de pines: 7 PIN (paso de 2.54 mm)  
2. Receptor - Interfaz de pines: 7 PIN (paso de 2.54 mm)  
3. Antena de transmisión (debe mantenerse recta durante el uso)  
4. Antena receptora tipo resorte  

## Primeros Pasos

En este ejemplo, utilizaremos un **kit transceptor RF**, un **LED**, un **botón**, una **placa de desarrollo** para alimentar el sistema y algunos cables para lograr un control inalámbrico simple para encender y apagar un LED.

- **Paso 1.** Reúne el kit transceptor, cables, protoboard o placas de desarrollo y otros componentes necesarios.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Component list diagram.png" alt="pir" width={1000} height="auto" /></p>

Componentes utilizados en este demo de iluminación inalámbrica:

| Componente             | Cantidad |
|------------------------|----------|
| Kit transceptor RF     | 1        |
| Protoboard             | 1        |
| LED                    | 1        |
| Botón (key switch)     | 1        |
| Seeeduino XIAO         | 1        |
| Cables                 | Varios   |

- **Paso 2.** Conecta el circuito según las instrucciones.  
**Nota:** El diagrama muestra todos los puertos de señal, pero el circuito real usa solo uno.

### Diagrama de conexión

<p style={{textAlign: 'left'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Connection_diagram(Tx).png" alt="pir" width={390} height="auto" /></p>
<div>
  RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Connection_diagram(Rx).png" alt="pir" width="360" height="auto"&gt;<p />
</div>

### Diagrama real del circuito conectado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Actual_circuit_connection_diagram.png" alt="pir" width={1000} height="auto" /></p>

**Nota:** En esta demo usamos una única fuente de alimentación (Seeeduino XIAO con salida de 3.3 V) para alimentar tanto el transmisor como el receptor, pero en uso real cada módulo puede tener su propia fuente (por ejemplo, baterías).

- **Paso 3.** Suministra energía al sistema y presiona el botón.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/img/Result.png" alt="pir" width={1000} height="auto" /></p>

**Consejo:** Puedes reemplazar el LED por cualquier otro dispositivo que desees controlar. Usando múltiples puertos de señal, puedes lograr control inalámbrico sobre varios sistemas.  
También puedes integrar sensores (por ejemplo, un sensor de luz) con Seeeduino XIAO para automatizar el control de iluminación según la intensidad lumínica sin intervención manual.

## Recursos

- **[Datasheet]** [Datasheet for PT2272 and PT2262](https://files.seeedstudio.com/wiki/RF_Transmitter_and_Receiver_LinkP_Kit-315MHz_433MHz/res/Datasheet_for_PT2272_and_PT2262.pdf)

## Soporte Técnico y Discusión

Si tienes alguna duda técnica, publícala en nuestro [foro](http://forum.seeedstudio.com/).  
¡Gracias por elegir nuestros productos! Estamos aquí para ayudarte y ofrecerte el mejor soporte posible a través de múltiples canales.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>