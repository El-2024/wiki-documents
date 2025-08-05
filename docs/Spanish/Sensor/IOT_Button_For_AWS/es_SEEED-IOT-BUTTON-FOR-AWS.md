---
description: SEEED IOT BUTTON FOR AWS
title: Seeed IoT Button para AWS
keywords:
- IOT_Button_For_AWS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SEEED-IOT-BUTTON-FOR-AWS
last_update:
  date: 07/16/2025
  author: Guillermo
---

![](https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Side.png)

El **Seeed IoT Button para AWS** es un botón programable basado en Wi-Fi que es fácil de configurar y sencillo de usar. Puedes utilizarlo para capturar rápidamente la retroalimentación de clientes sin necesidad de cuestionarios largos. Está diseñado para que empresas y desarrolladores lo integren fácilmente en flujos de trabajo existentes mediante el servicio [AWS IoT 1-Click](https://docs.aws.amazon.com/iot-1-click/latest/developerguide/what-is-1click.html). Este botón es completamente compatible con las apps oficiales de AWS IoT 1-Click para iOS y Android. La batería recomendada es una celda recargable de Li-ion modelo **NCR18650B**. Ten en cuenta que **no se incluye la batería en el paquete**, pero puedes adquirirla fácilmente. Recomendamos la **Panasonic NCR18650B 3.6V 3400mAh**. El botón incluye un soporte adhesivo para montarlo fácilmente en una pared u otra superficie. El botón se puede insertar y retirar cómodamente del soporte.El Seeed IoT Button para AWS soporta tres tipos de clic: simple, doble y presión prolongada. Además, cuenta con 3 LEDs para distintas indicaciones.


<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Seeed-IoT-Button-for-AWS-p-4527.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Eventos de clic: Simple / Doble / Presión prolongada
- LED integrados para Estado de Energía / Evento / Configuración Wi-Fi
- Equipado con Realtek RTL8720DN, Wi-Fi dual 2.4GHz / 5GHz
- Batería NCR18650B recargable y removible
- Protección contra polaridad inversa e indicación
- Carga por USB Tipo-C
- Soporte adhesivo para montaje

## Especificaciones

| Parámetro              | Valor                                                  |
|------------------------|--------------------------------------------------------|
| Dimensiones            | 92 × 32 × 25 mm                                        |
| MCU                    | Realtek RTL8720DNL: Cortex M0 @ 20MHz; Cortex M4F @ 200MHz |
| Memoria Flash          | 4MB                                                    |
| Botón                  | 100,000 ciclos                                         |
| LED                    | RGB                                                    |
| Wi-Fi                  | 802.11 a/b/g/n 2.4GHz & 5GHz                            |
| Bluetooth              | BLE 5.0                                                |
| Batería                | 3.6V Li-ion 18650 recargable                           |
| Puerto de carga        | USB Tipo-C                                             |
| Corriente de carga     | 500mA                                                  |
| Tiempo de carga        | 4–6 horas (según capacidad de la batería)              |
| Protección de batería  | Sobre-carga, sobre-corriente, descarga, polaridad inversa |
| Actualización firmware | Soporta OTA                                            |


## Vista General del Hardware

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Seeed_IOT_Button_HardwareOverview.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Seeed_IOT_Button_HardwareOverview.png" /></a></p>
</figure>
</div>

## Indicaciones LED

<table style={{borderCollapse: 'collapse', borderSpacing: 0}} className="tg"><tbody><tr><th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Estado del LED de Energía</th><th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Indicación</th></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Batería conectada en polaridad inversa</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Rojo</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Cargando batería</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Verde encendido</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Carga completa</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Verde apagado</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Estado del LED de Eventos</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Indicación</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Rojo constante</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Certificado no cargado o inválido</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Blanco parpadea -&gt; Verde</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Evento enviado correctamente</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Blanco parpadea -&gt; Rojo</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Fallo al enviar el evento</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Blanco parpadea -&gt; Naranja</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Fallo en conexión Wi-Fi; revisar router o configuración</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Blanco parpadea -&gt; Púrpura</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Fallo en conexión al servidor; revisar entorno de red</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Estado del LED de Configuración Wi-Fi
</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Indicación</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Azul parpadeando</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Configuración de red vía Bluetooth (BLE)</td></tr></tbody></table>

## Primeros Pasos

### Encender el botón

Hay dos formas de encender el botón:

#### Método 1 – Conexión USB Tipo-C

Conecta el cable USB Tipo-C. El LED de energía parpadeará en **verde** una vez.

:::note
Luego del parpadeo verde, verás un tenue resplandor verde constante en condiciones de poca luz.
:::

#### Método 2 – Con batería

Abre la carcasa, inserta la batería, y luego conecta el botón a un puerto USB **una sola vez** para inicializar el circuito. El LED se encenderá en verde, y después podrás desconectar el USB.

:::note
Si el LED está en rojo, indica que la batería está invertida.
:::

#### Cómo abrir la carcasa

Utiliza la herramienta plástica incluida como se muestra en este GIF:

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/takingApart.gif"/></div>

## Configurar Wi-Fi en el botón

1. Descarga la app AWS IoT 1-Click desde App Store o Google Play.
2. Abre la app y accede con tu cuenta de AWS.

:::note
Asegúrate de que el **Bluetooth esté activado**, o aparecerá un error.
:::

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Bluetooth-error.jpg"/></div>

3. Presiona **Claim with Device ID** y escanea el **DSN** en la parte inferior del botón.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/05.png"/></div>

4. Presiona **Configure**.

5. Mantén presionado el botón por **7 segundos** hasta que el LED azul parpadee.

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/07-1.png"/></div>

6. Selecciona la red Wi-Fi y escribe la contraseña.

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/08.png"/></div>

7. Espera el mensaje de éxito en la app y presiona **Finish**.

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/09.png"/></div>

8.Wait until configuration succeeded is appeared in the App and press **Finish**. The configuration is done

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/10.png"/></div>

¡Listo! Ya puedes usar tu botón con AWS IoT 1-Click.

No olvides actualizar el firmware a la última versión siguiendo [**estas instrucciones**](https://wiki.seeedstudio.com/SEEED-IOT-BUTTON-FOR-AWS/#ota-update).

### Instrucciones de Uso

- **Clic simple:** Envía evento de clic único 

- **Doble clic:** Envía evento de doble clic  

- **Presión prolongada (2–5s):** Envía evento de presión larga  

- **Presión prolongada (>7s):** Entra en modo de configuración BLE  
  - En este modo, otros eventos se bloquean. Para salir, presiona de nuevo por más de 7s o espera 2 minutos.

## Actualización OTA

Mantén presionado por **15 segundos** para iniciar la búsqueda de actualizaciones:

1. **>7s:** LED de configuración Wi-Fi empieza a parpadear.
2. **>15s total:** LED de eventos parpadea azul → entra en modo OTA.

**Cuando se trata de la última versión**, el LED de estado del evento parpadea de **azul** a **verde**. Para más información, consulte la tabla a continuación:

<table style={{borderCollapse: 'collapse', borderSpacing: 0}} className="tg"><tbody><tr><th style={{backgroundColor: '#9b9b9b', borderColor: '#000000', borderStyle: 'solid', borderWidth: 1, color: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', overflow: 'hidden', padding: '10px 5px', textAlign: 'center', verticalAlign: 'middle', wordBreak: 'normal'}}>Estado del LED</th><th style={{backgroundColor: '#9b9b9b', borderColor: '#000000', borderStyle: 'solid', borderWidth: 1, color: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', overflow: 'hidden', padding: '10px 5px', textAlign: 'center', verticalAlign: 'middle', wordBreak: 'normal'}}>Indicación</th></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Azul parpadea -&gt; Verde</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Actualización exitosa</td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Azul parpadea -&gt; Rojo</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Fallo en la actualización</td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Azul parpadea -&gt; Naranja</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Fallo en conexión Wi-Fi; revisar router o red</td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Azul parpadea -&gt; Púrpura</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Fallo en conexión al servidor; revisar entorno de red</td></tr></tbody></table>

## Preguntas Frecuentes

**P1.** El número de serie externo se ha borrado  

Hay una etiqueta con el número de serie de respaldo **dentro de la carcasa**, debajo de la batería.

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/SN.png"/></div>

## Soporte Técnico y Comunidad

Gracias por elegir nuestros productos. Estamos aquí para ayudarte y asegurarnos de que tengas la mejor experiencia posible. Contamos con varios canales de comunicación para resolver tus dudas y recibir comentarios.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
