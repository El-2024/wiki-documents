---
title: 315MHz Simple RF Link Kit
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/315MHz_Simple_RF_Link_Kit/
slug: /es/315MHz_Simple_RF_Link_Kit
last_update:
  date: 07/15/2025
  author: Guillermo
---
![](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/img/315M_433M.jpg)

Este kit se utiliza para comunicación inalámbrica **unidireccional** a una frecuencia de **315 MHz** e incluye un módulo transmisor y un módulo receptor. Su configuración tipo **Grove** permite una distancia de transmisión aproximada de **40 metros en interiores** o hasta **100 metros en exteriores**.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/grove-315mhz-simple-rf-link-kit-p-1061.html?cPath=139_140)

## Características
---
* Interfaz compatible con **Grove**  
* Usa modulación **ASK** (desplazamiento de amplitud)  
* Comunicación **unidireccional**  

## Especificaciones

### Módulo Transmisor

<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Parámetro
</th>
<th scope="col"> Mínimo
</th>
<th scope="col"> Típico
</th>
<th scope="col"> Máximo
</th>
<th scope="col"> Unidad
</th></tr>
<tr>
<th scope="row"> Voltaje de trabajo
</th>
<td> 3.0
</td>
<td> 5.0
</td>
<td> 12.0
</td>
<td> VDC
</td></tr>
<tr>
<th scope="row"> Corriente
</th>
<td> 3
</td>
<td> /
</td>
<td> 10
</td>
<td> mA
</td></tr>
<tr>
<th scope="row">Modo de trabajo
</th>
<td colspan="3"> ASK
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> Potencia de transmisión
</th>
<td colspan="3"> 15
</td>
<td> mW
</td></tr>
<tr>
<th scope="row"> Distancia de trabajo
</th>
<td> 40
</td>
<td> /
</td>
<td> 100
</td>
<td> m
</td></tr></table>

### Módulo Receptor

<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Parámetro
</th>
<th scope="col"> Típico
</th>
<th scope="col"> Unidad
</th></tr>
<tr>
<th scope="row"> Voltaje de trabajo
</th>
<td> 5
</td>
<td> VDC
</td></tr>
<tr>
<th scope="row"> Corriente en reposo
</th>
<td> 5
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> Sensibilidad del receptor
</th>
<td> -103
</td>
<td> dBm
</td></tr>
<tr>
<th scope="row"> Frecuencia de operación
</th>
<td> 315
</td>
<td> MHz
</td></tr></table>

## Ideas de Aplicación

* Control remoto  
* Automatización remota  
* Sistemas de alarma  

## Uso

Los módulos transmisor y receptor utilizan un solo cable para la comunicación de datos. Aunque se puede emplear UART (como el de la plataforma Arduino), se recomienda usar la biblioteca **VirtualWire**, que emplea modulación **ASK** (Amplitude Shift Keying) y ofrece una mejor calidad de comunicación.

Ambos módulos (transmisor y receptor) requieren **tres conexiones**: Vcc, Tierra (GND) y Señal. El pin 2 en ambos módulos **no está conectado**.

### Conexiones

- Conecta el **módulo transmisor** al pin **D2** del [Grove – Base Shield](/Base_Shield_V2 "Grove – Base Shield") en el Arduino transmisor.
- Conecta el **módulo receptor** al pin **D2** del [Grove – Base Shield](/Base_Shield_V2 "Grove – Base Shield") en el Arduino receptor.

**Nota:** La instalación del hardware puede consultarse en [el uso del módulo Grove - 433MHz Simple RF Link Kit](/Grove-433MHz_Simple_RF_Link_Kit "Grove - 433MHz Simple RF Link Kit").

* Descarga la [librería VirtualWire](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/res/VirtualWire_Library.zip).
* Descomprime el archivo dentro de la carpeta `libraries` del IDE de Arduino: ...\arduino-1.0\libraries
* Puedes encontrar más detalles de instalación [aquí](http://www.pjrc.com/teensy/td_libs_VirtualWire.html).

### Código de ejemplo

Transmisor:

```
#include <VirtualWire.h>

//Grove - 315(433) RF link kit Demo v1.0
//by :https://www.seeedstudio.com/
//connect the sent module to D2 to use
#include <VirtualWire.h>

int RF_TX_PIN = 2;

void setup()
{
    vw_set_tx_pin(RF_TX_PIN); // Setup transmit pin
    vw_setup(2000); // Transmission speed in bits per second.
}

void loop()
{
    const char *msg = "hello";
    vw_send((uint8_t *)msg, strlen(msg));  // Send 'hello' every 400ms.
    delay(400);

}
```

Receptor:

```
//Grove - 315(433) RF link kit Demo v1.0
//by :https://www.seeedstudio.com/
//connect the receive module to D2 to use ..
#include <VirtualWire.h>

int RF_RX_PIN = 2;

void setup()
{
    Serial.begin(9600);
    Serial.println("setup");
    vw_set_rx_pin(RF_RX_PIN);  // Setup receive pin.
    vw_setup(2000); // Transmission speed in bits per second.
    vw_rx_start(); // Start the PLL receiver.
}

void loop()
{
    uint8_t buf[VW_MAX_MESSAGE_LEN];
    uint8_t buflen = VW_MAX_MESSAGE_LEN;
    if(vw_get_message(buf, &buflen)) // non-blocking I/O
    {
        int i;
        // Message with a good checksum received, dump HEX
        Serial.print("Got: ");
        for(i = 0; i < buflen; ++i)
        {
            Serial.print(buf[i], HEX);
            Serial.print(" ");
            //Serial.print(buf[i]);
        }
        Serial.println("");
    }
}
```

* Abre el Monitor Serial del módulo receptor para ver el resultado.

![](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/img/Receive_Data.jpg)

Este es solo un ejemplo simple de comunicación transmisor–receptor como referencia.

## Historial de versiones

<table>
<tr>
<th> Versión
</th>
<th> Descripción
</th>
<th> Fecha de lanzamiento
</th></tr>
<tr>
<td width="300px"> v0.9b
</td>
<td width="500px"> Primera versión pública
</td>
<td width="200px"> 03,Oct,2011
</td></tr></table>

## Recursos

* [File:VirtualWire Library.zip](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/res/VirtualWire_Library.zip)

* [File:315MHz_demo.zip](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/res/315MHz_Demo.zip)

* [Documentación de VirtualWire (PDF)](http://www.open.com.au/mikem/arduino/VirtualWire.pdf)

## Soporte Técnico y Discusión de Producto
Si tienes algún problema técnico, envía tu consulta en nuestro [foro](http://forum.seeedstudio.com/).  
¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Contamos con distintos canales de comunicación para atender tus necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
