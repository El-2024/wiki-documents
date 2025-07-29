---
description: SenseCAP T1000 Tracker Payload Format
title: Payload Format
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/T1000_payload
last_update:
  date: 07/24/2025
  author: Guillermo
---

## Uplink Packet Parsing

El protocolo de datos del Tracker proporciona diferentes paquetes para distintos tipos de información, y el tamaño de cada paquete puede variar. La estructura del frame se muestra en la siguiente imagen. El contenido del frame se envía en **orden de bytes big-endian**.

|Data ID|Data Value|
| - | :- |
|1 byte|50 bytes (Max)|

**Data ID**: Número de función.  
**Data Value**: Posición, datos de sensores y otra información.

### Paquete de Estado del Dispositivo - Modo Evento 0x01

El paquete de estado del dispositivo se envía al unirse a la red LoRaWAN. Tiene dos formatos según modo de trabajo:

- Modo Evento, ID=0x01  
- Modo Periódico, ID=0x02  

### Paquete de Estado del Dispositivo - Modo Evento 0x01

|0x01|Byte2|Byte3~4|Byte5~6|Byte7|Byte8|Byte9~10|Byte11~12|
| - | :- | :- | :- | :- | :- | :- | :- |
|ID|Nivel de batería|Versión software|Versión hardware|Modo trabajo|Estrategia posicionamiento|Intervalo latido|Intervalo uplink|

|Byte13~14|Byte15|Byte16|Byte17|Byte18~19|Byte20~21|
| :- | :- | :- | :- | :- | :- |
|Intervalo uplink modo evento|Sensor temp & luz|Modo SOS|Habilitar evento movimiento|Umbral movimiento 3-ejes|Intervalo inicio movimiento|

|Byte22|Byte23~24|Byte25|Byte26~27|Byte28|Byte29~30|
| :- | :- | :- | :- | :- | :- |
|Habilitar evento sin movimiento|Timeout sin movimiento|Habilitar evento choque|Umbral choque 3-ejes|Habilitar evento temperatura|Intervalo uplink evento temperatura|

|Byte31~32|Byte33~34|Byte35~36|Byte37|Byte38|Byte39~40|
| :- | :- | :- | :- | :- | :- |
|Intervalo muestreo temperatura|Umbral temperatura máx.|Umbral temperatura mín.|Tipo aviso temperatura|Habilitar evento luz|Intervalo uplink evento luz|

|Byte41~42|Byte43~44|Byte45~46|Byte47|
| :- | :- | :- | :- |
|Intervalo muestreo luz|Umbral luz máx.|Umbral luz mín.|Tipo aviso luz|

**Payload bruto:**  
`0153010501050207001e00050005010000001e000500016801012c000005001e025800000000000500010064000000`

|**Byte**|**Valor**|**Tipo**|**Dato Crudo**|**Descripción**|
| - | - | - | - | - |
|1|ID Frame|uint8|01|Identificador de paquete: 0x01.|
|2|Nivel de batería|uint8|53|0x53 = 83 decimal, batería al 83%.|
|3~4|Versión software|uint16|0105|0x0105 = v1.5|
|5~6|Versión hardware|uint16|0105|0x0105 = v1.5|
|7|Modo trabajo|uint8|02|0x02: Modo Evento (00: Standby, 01: Periódico, 02: Evento).|
|8|Estrategia posicionamiento|uint8|07|0x07: Bluetooth + Wi-Fi + GNSS (ver lista en texto original).|
|9~10|Intervalo latido|uint16|001e|0x001E = 30 min.|
|11~12|Intervalo uplink|uint16|0005|0x0005 = 5 min.|
|13~14|Intervalo uplink modo evento|uint16|0005|0x0005 = 5 min.|
|15|Sensor temp & luz|uint8|01|01 = sensores de temperatura y luz activados.|
|16|Modo SOS|uint8|00|00 = modo SOS simple.|
|17|Habilitar evento movimiento|uint8|00|00 = deshabilitado.|
|18~19|Umbral movimiento 3-ejes|uint16|001e|0x001E = 30 mg.|
|20~21|Intervalo inicio movimiento|uint16|0005|0x0005 = 5 min.|
|22|Habilitar evento sin movimiento|uint8|00|00 = deshabilitado.|
|23~24|Timeout sin movimiento|uint16|0168|0x0168 = 360 min.|
|25|Habilitar evento choque|uint8|01|01 = habilitado.|
|26~27|Umbral choque 3-ejes|uint16|012c|0x012C = 300 mg.|
|28|Habilitar evento temperatura|uint8|00|00 = deshabilitado.|
|29~30|Intervalo uplink evento temperatura|uint16|0005|0x0005 = 5 min.|
|31~32|Intervalo muestreo temperatura|uint16|001e|0x001E = 30 segundos.|
|33~34|Umbral temperatura máx.|int16|0258|0x0258 = 600 /10 = 60.0 ℃.|
|35~36|Umbral temperatura mín.|int16|0000|0 = 0.0 ℃.|
|37|Tipo aviso temperatura|uint8|00|0x00: evento cuando temperatura ≤ umbral mín. (ver opciones).|
|38|Habilitar evento luz|uint8|00|00 = deshabilitado.|
|39~40|Intervalo uplink evento luz|uint16|0005|0x0005 = 5 min.|
|41~42|Intervalo muestreo luz|uint16|0001|0x0001 = 1 segundo.|
|43~44|Umbral luz máx.|uint16|0064|0x0064 = 100% luz máxima.|
|45~46|Umbral luz mín.|uint16|0000|0% luz mínima.|
|47|Tipo aviso luz|uint8|00|0x00: evento cuando luz ≤ umbral mín. (ver opciones).|

### Paquete de Estado del Dispositivo - Modo Periódico 0x02

|0x02|Byte2|Byte3~4|Byte5~6|Byte7|Byte8|Byte9~10|Byte11~12|
| - | :- | :- | :- | :- | :- | :- | :- |
|ID|Nivel batería|Versión software|Versión hardware|Modo trabajo|Estrategia posicionamiento|Intervalo latido|Intervalo uplink|

|Byte13~14|Byte15|Byte16|
| :- | :- | :- |
|Intervalo uplink modo evento|Sensor temp & luz|Modo SOS|

**Payload bruto:**  
`025601050105010002d0003c003c0000`

|**Byte**|**Valor**|**Tipo**|**Dato Crudo**|**Descripción**|
| - | - | - | - | - |
|1|ID Frame|uint8|02|Paquete ID 0x02.|
|2|Nivel batería|uint8|56|0x56 = 86%.|
|3~4|Versión software|uint16|0105|v1.5|
|5~6|Versión hardware|uint16|0105|v1.5|
|7|Modo trabajo|uint8|01|Modo Periódico.|
|8|Estrategia posicionamiento|uint8|00|Solo GNSS.|
|9~10|Intervalo latido|uint16|02d0|720 min.|
|11~12|Intervalo uplink|uint16|003c|60 min.|
|13~14|Intervalo uplink modo evento|uint16|003c|60 min.|
|15|Sensor temp & luz|uint8|00|Sensores apagados.|
|16|Modo SOS|uint8|00|Modo SOS simple.|

### Paquete Latido - 0x05

Cuando no se envían datos durante el intervalo latido, se envía un paquete latido con solo información de batería.

|0x05|Byte2|Byte3|Byte4|Byte5|
| - | :- | :- | :- | :- |
|ID|Nivel batería|Modo trabajo|Estrategia posicionamiento|Modo SOS|

**Payload bruto:**  
`0564010001`

|**Byte**|**Valor**|**Tipo**|**Dato Crudo**|**Descripción**|
| - | - | - | - | - |
|1|ID Frame|uint8|05|Paquete ID 0x05.|
|2|Nivel batería|uint8|64|100%.|
|3|Modo trabajo|uint8|01|Modo Periódico.|
|4|Estrategia posicionamiento|uint8|00|Solo GNSS.|
|5|Modo SOS|uint8|00|Modo SOS simple.|

### Paquete GNSS y Sensor - 0x06

ID 0x06 para ubicación GNSS, datos sensores y batería.

|0x06|Byte2~4|Byte5|Byte6~9|Byte10~13|Byte14~17|
| - | :- | :- | :- | :- | :- |
|ID|Estado evento|Número segmento movimiento|Hora UTC|Longitud|Latitud|

|Byte18~19|Byte20~21|Byte22|
| - | :- | :- |
|Temperatura|Luz|Nivel batería|

**Payload bruto:**  
`06000008006462248d06ca502801587ec600fe000057`

|**Byte**|**Valor**|**Tipo**|**Dato Crudo**|**Descripción**|
| - | - | - | - | - |
|1|ID Frame|uint8|06|Paquete ID 0x06.|
|2~4|Estado evento|uint24|000008|0x000008: evento choque (bit4).|
|5|Segmento movimiento|uint8|00|0.|
|6~9|Hora UTC|uint32|6462248d|1684153485 seg = 2023-05-15 20:24:45 (Beijing).|
|10~13|Longitud|int32|06ca5028|113.922088° (dividir entre 1,000,000).|
|14~17|Latitud|int32|01587ec6|22.576838° (dividir entre 1,000,000).|
|18~19|Temperatura|int16|00fe|25.4 ℃ (dividir entre 10).|
|20~21|Luz|uint16|0000|0%.|
|22|Nivel batería|uint8|57|87%.|

### Paquete Wi-Fi y Sensor - 0x07

ID 0x07 para MACs Wi-Fi, datos sensores y batería.

|0x07|Byte2~4|Byte5|Byte6~9|Byte10~15|Byte16|
| - | :- | :- | :- | :- | :- |
|ID|Estado evento|Segmento movimiento|Hora UTC|MAC 1|RSSI MAC 1|

|Byte17~22|Byte23|Byte24~29|Byte30|Byte31~36|Byte37|
| :- | :- | :- | :- | :- | :- |
|MAC 2|RSSI MAC 2|MAC 3|RSSI MAC 3|MAC 4|RSSI MAC 4|

|Byte38~39|Byte40~41|Byte42|
| - | :- | :- |
|Temperatura|Luz|Nivel batería|

**Payload bruto:**

`070000080064622472487397162234bb3ccd5798fd2ebc74cf002f3ad0a9ec26ca022958b900fe000057`

|**Byte**|**Valor**|**Tipo**|**Datos en crudo**|**Descripción**|
| - | - | - | - | - |
|1|ID de trama|uint8|07|07 es el ID del paquete.|
|2~4|estado del evento|uint24|000008|<p>000008 es 0x000008, 0x0000XX está reservado y 0x08 es el estado del evento. Este byte tiene 8 bits, cada uno representa un evento.</p><p>Bit1: Evento de inicio de movimiento.</p><p>Bit2: Evento de fin de movimiento.</p><p>Bit3: Evento de inmovilidad.</p><p>Bit4: Evento de choque.</p><p>Bit5: Evento de temperatura.</p><p>Bit6: Evento de luz.</p><p>Bit7: Evento SOS.</p><p>Bit8: Evento de pulsación simple.</p><p></p><p>Convertir a hexadecimal:</p><p>0x000000: sin evento</p><p>0x000001: Evento de inicio de movimiento.</p><p>0x000002: Evento de fin de movimiento.</p><p>0x000004: Evento de inmovilidad.</p><p>0x000008: Evento de choque.</p><p>0x000010: Evento de temperatura.</p><p>0x000020: Evento de luz.</p><p>0x000040: Evento SOS.</p><p>0x000080: Evento de pulsación simple.</p>|
|5|Número de segmento de movimiento|uint8|00|<p>00 es 0x00 == 0.</p><p>Cuando comienza el movimiento, el conteo aumenta en 1. Registra que es un movimiento.</p>|
|6~9|Hora UTC|uint32|64622472|<p>64622472 es 0x64622472 = 1684153458 (DEC) segundos.</p><p>Convertir a hora de Pekín: 2023-05-15 20:24:18</p>|
|10~15|Dirección MAC 1|----|487397162234|<p>487397162234 </p><p>La dirección MAC (HEX)= 48:73:97:16:22:34</p>|
|16|RSSI de la dirección MAC 1|int8|bb|<p>bb es 0xBB = -69(DEC), tipo int8</p><p>RSSI = -69</p>|
|17~22|Dirección MAC 2|----|3ccd5798fd2e|<p>3ccd5798fd2e </p><p>La dirección MAC (HEX)= 3C:CD:57:98:FD:2E</p>|
|23|RSSI de la dirección MAC 2|int8|bc|<p>bc es 0xBC = -68(DEC), tipo int8</p><p>RSSI = -68</p>|
|24~29|Dirección MAC 3|----|74cf002f3ad0|<p>74cf002f3ad0</p><p>La dirección MAC (HEX)= 74:CF:00:2F:3A:D0</p>|
|30|RSSI de la dirección MAC 3|int8|a9|<p>a9 es 0xA9 = -87(DEC), tipo int8</p><p>RSSI = -87</p>|
|31~36|Dirección MAC 4|----|ec26ca022958|<p>ec26ca022958</p><p>La dirección MAC (HEX)= EC:26:CA:02:29:58</p>|
|37|RSSI de la dirección MAC 4|int8|b9|<p>b9 es 0xA9 = -71(DEC), tipo int8</p><p>RSSI = -71</p>|
|38~39|Temperatura|int16|00fe|00fe es 0x00FE = 254(DEC), temperatura=254/10=25.4℃|
|40~41|Luz|uint16|0000|0000 es 0x0000 = 0(DEC) minutos, luz=0=0%|
|42|Nivel de batería|uint8|57|<p>57 es 0x57 = 87(DEC)</p><p>El nivel de batería es 87%</p>|

### Paquete de Ubicación Bluetooth y Sensor - 0x08

ID 0x08 se usa para subir direcciones MAC de Bluetooth Beacon, datos del sensor y batería.

|0x08|Byte2~4|Byte5|Byte6~9|Byte10~15|Byte16|
| - | :- | :- | :- | :- | :- |
|ID|estado del evento|número de segmento de movimiento |hora UTC|dirección MAC 1|RSSI de la dirección MAC 1, int8|

|Byte17~22|Byte23|Byte24~29|Byte30|Byte31~32|Byte33~34|Byte35|
| :- | :- | :- | :- | :- | :- | :- |
|Dirección MAC 2|RSSI de la dirección MAC 2, int8|Dirección MAC 3|RSSI de la dirección MAC 3, int8|Temperatura|Luz|Nivel de batería|

**Carga útil en crudo:**

`0800000800646225bb5162d2c1b9d3ca1b5bd2afeae5c0d0e2d70529e8c900fa000057`

|**Byte**|**Valor**|**Tipo**|**Datos en crudo**|**Descripción**|
| - | - | - | - | - |
|1|ID de trama|uint8|08|08 es el ID del paquete.|
|2~4|estado del evento|uint24|000008|<p>000008 es 0x000008, 0x0000XX está reservado y 0x08 es el estado del evento. Este byte tiene 8 bits, cada uno representa un evento.</p><p>Bit1: Evento de inicio de movimiento.</p><p>Bit2: Evento de fin de movimiento.</p><p>Bit3: Evento de inmovilidad.</p><p>Bit4: Evento de choque.</p><p>Bit5: Evento de temperatura.</p><p>Bit6: Evento de luz.</p><p>Bit7: Evento SOS.</p><p>Bit8: Evento de pulsación simple.</p><p></p><p>Convertir a hexadecimal:</p><p>0x000000: sin evento</p><p>0x000001: Evento de inicio de movimiento.</p><p>0x000002: Evento de fin de movimiento.</p><p>0x000004: Evento de inmovilidad.</p><p>0x000008: Evento de choque.</p><p>0x000010: Evento de temperatura.</p><p>0x000020: Evento de luz.</p><p>0x000040: Evento SOS.</p><p>0x000080: Evento de pulsación simple.</p>|
|5|Número de segmento de movimiento|uint8|00|<p>00 es 0x00 == 0.</p><p>Cuando comienza el movimiento, el conteo aumenta en 1. Registra que es un movimiento.</p>|
|6~9|Hora UTC|uint32|646225bb|<p>646225bb es 0x646225BB = 1684153787 (DEC) segundos.</p><p>Convertir a hora de Pekín: 2023-05-15 20:29:47</p>|
|10~15|Dirección MAC 1|-----|5162d2c1b9d3|<p>5162d2c1b9d3</p><p>La dirección MAC (HEX)=51:62:D2:C1:B9:D3</p>|
|16|RSSI de la dirección MAC 1|int8|c0|<p>c0 es 0xC0 = -64(DEC), tipo int8</p><p>RSSI = -64</p>|
|17~22|Dirección MAC 2|-----|1b5bd2afeae5|<p>1b5bd2afeae5</p><p>La dirección MAC (HEX)= 1B:5B:D2:AF:EA:E5</p>|
|23|RSSI de la dirección MAC 2|int8|bc|<p>bc es 0xBC = -68(DEC), tipo int8</p><p>RSSI = -68</p>|
|24~29|Dirección MAC 3|-----|d0e2d70529e8|<p>d0e2d70529e8</p><p>La dirección MAC (HEX)= D0:E2:D7:05:29:E8</p>|
|30|RSSI de la dirección MAC 3|int8|c9|<p>c9 es 0xC9 = -55(DEC), tipo int8</p><p>RSSI = -55</p>|
|31~32|Temperatura|int16|00fa|00fa es 0x00FA = 250(DEC), temperatura=250/10=25.0℃|
|33~34|Luz|uint16|0000|0000 es 0x0000 = 0(DEC) minutos, luz=0=0%|
|35|Nivel de batería|uint8|57|<p>57 es 0x57 = 87(DEC)</p><p>El nivel de batería es 87%</p>|


### Paquete Solo Ubicación GNSS - 0x09

Cuando el sensor está apagado, el dispositivo no sube el valor de medición del sensor. Solo se suben datos de ubicación.

|0x09|Byte2~4|Byte5|Byte6~9|Byte10~13|Byte14~17|Byte18|
| - | :- | :- | :- | :- | :- | :- |
|ID|estado del evento|número de segmento de movimiento |hora UTC|longitud|latitud|nivel de batería|

**Carga útil en crudo:**

`09000000006463186806ca506801587e4c56`

|**Byte**|**Valor**|**Tipo**|**Datos en crudo**|**Descripción**|
| - | - | - | - | - |
|1|ID de trama|uint8|09|09 es el ID del paquete.|
|2~4|estado del evento|uint24|000000|<p>000000 es 0x000000, 0x0000XX está reservado y 0x08 es el estado del evento. Este byte tiene 8 bits, cada uno representa un evento.</p><p>Bit1: Evento de inicio de movimiento.</p><p>Bit2: Evento de fin de movimiento.</p><p>Bit3: Evento de inmovilidad.</p><p>Bit4: Evento de choque.</p><p>Bit5: Evento de temperatura.</p><p>Bit6: Evento de luz.</p><p>Bit7: Evento SOS.</p><p>Bit8: Evento de pulsación simple.</p><p></p><p>Convertir a hexadecimal:</p><p>0x000000: sin evento</p><p>0x000001: Evento de inicio de movimiento.</p><p>0x000002: Evento de fin de movimiento.</p><p>0x000004: Evento de inmovilidad.</p><p>0x000008: Evento de choque.</p><p>0x000010: Evento de temperatura.</p><p>0x000020: Evento de luz.</p><p>0x000040: Evento SOS.</p><p>0x000080: Evento de pulsación simple.</p>|
|5|Número de segmento de movimiento|uint8|00|<p>00 es 0x00 == 0.</p><p>Cuando comienza el movimiento, el conteo aumenta en 1. Registra que es un movimiento.</p>|
|6~9|Hora UTC|uint32|64631868|<p>64631868 es 0x64631868 = 1684215912 (DEC) segundos.</p><p>Convertir a hora de Pekín: 2023-05-16 13:45:12</p>|
|10~13|Longitud|int32|06ca5068|06ca5068 es 0x06CA5068 = 113922152 (DEC), longitud= 113922152/1000000=113.922152|
|14~17|Latitud|int32|01587e4c|01587e4c es 0x01587E4C = 22576716 (DEC), latitud=22576716/1000000=22.576716|
|18|Nivel de batería|uint8|56|<p>56 es 0x56 = 86(DEC)</p><p>El nivel de batería es 86%</p>|


### Paquete Solo Ubicación Wi-Fi - 0x0A

|0x0A|Byte2~4|Byte5|Byte6~9|Byte10~15|Byte16|
| - | :- | :- | :- | :- | :- |
|ID|estado del evento|número de segmento de movimiento |hora UTC|dirección MAC 1|RSSI de la dirección MAC 1, int8|


|Byte17~22|Byte23|Byte24~29|Byte30|Byte31~36|Byte37|Byte38|
| :- | :- | :- | :- | :- | :- | :- |
|Dirección MAC 2|RSSI de la dirección MAC 2, int8|Dirección MAC 3|RSSI de la dirección MAC 3, int8|Dirección MAC 4|RSSI de la dirección MAC 4, int8|nivel de batería|

**Carga útil en crudo:**

`0A0000080064622472487397162234bb3ccd5798fd2ebc74cf002f3ad0a9ec26ca022958b957`


|**Byte**|**Valor**|**Tipo**|**Datos en crudo**|**Descripción**|
| - | - | - | - | - |
|1|ID de trama|uint8|0A|0A es el ID del paquete.|
|2~4|estado del evento|uint32|000008|<p>000008 es 0x000008, 0x0000XX está reservado y 0x08 es el estado del evento. Este byte tiene 8 bits, cada uno representa un evento.</p><p>Bit1: Evento de inicio de movimiento.</p><p>Bit2: Evento de fin de movimiento.</p><p>Bit3: Evento de inmovilidad.</p><p>Bit4: Evento de choque.</p><p>Bit5: Evento de temperatura.</p><p>Bit6: Evento de luz.</p><p>Bit7: Evento SOS.</p><p>Bit8: Evento de pulsación simple.</p><p></p><p>Convertir a hexadecimal:</p><p>0x000000: sin evento</p><p>0x000001: Evento de inicio de movimiento.</p><p>0x000002: Evento de fin de movimiento.</p><p>0x000004: Evento de inmovilidad.</p><p>0x000008: Evento de choque.</p><p>0x000010: Evento de temperatura.</p><p>0x000020: Evento de luz.</p><p>0x000040: Evento SOS.</p><p>0x000080: Evento de pulsación simple.</p>|
|5|Número de segmento de movimiento|uint8|00|<p>00 es 0x00 == 0.</p><p>Cuando comienza el movimiento, el conteo aumenta en 1. Registra que es un movimiento.</p>|
|6~9|Hora UTC|uint32|64622472|<p>64622472 es 0x64622472 = 1684153458 (DEC) segundos.</p><p>Convertir a hora de Pekín: 2023-05-15 20:24:18</p>|
|10~15|Dirección MAC 1|-----|487397162234|<p>487397162234 </p><p>La dirección MAC (HEX)= 48:73:97:16:22:34</p>|
|16|RSSI de la dirección MAC 1|int8|bb|<p>bb es 0xBB = -69(DEC), tipo int8</p><p>RSSI = -69</p>|
|17~22|Dirección MAC 2|-----|3ccd5798fd2e|<p>3ccd5798fd2e </p><p>La dirección MAC (HEX)= 3C:CD:57:98:FD:2E</p>|
|23|RSSI de la dirección MAC 2|int8|bc|<p>bc es 0xBC = -68(DEC), tipo int8</p><p>RSSI = -68</p>|
|24~29|Dirección MAC 3|-----|74cf002f3ad0|<p>74cf002f3ad0</p><p>La dirección MAC (HEX)= 74:CF:00:2F:3A:D0</p>|

### Paquete Solo Ubicación Bluetooth - 0x0B

|<a name="ole_link4"></a>0x0B|Byte2~4|Byte5|Byte6~9|Byte10~15|Byte16|
| - | :- | :- | :- | :- | :- |
|ID|estado del evento|número de segmento de movimiento|hora UTC|dirección MAC 1|El RSSI de la dirección MAC 1, int8|

|Byte17~22|Byte23|Byte24~29|Byte30|Byte31|
| :- | :- | :- | :- | :- |
|dirección MAC 2|El RSSI de la dirección MAC 2, int8|dirección MAC 3|El RSSI de la dirección MAC 3, int8|nivel de batería|

**El payload en crudo:**

0B00000800646225bb5162d2c1b9d3ca1b5bd2afeae5c0d0e2d70529e8c957

|**Byte**|**Valor**|**Tipo**|**Dato Crudo**|**Descripción**|
| - | - | - | - | - |
|1|ID de trama|uint8|0B|0B es el ID del paquete.|
|2~4|estado del evento|uint24|000008|<p>000008 es 0x000008, 0x0000XX está reservado y 0x08 es el estado del evento. Este byte tiene 8 bits, cada uno representa un evento.</p><p>Bit1: Evento de inicio de movimiento.</p><p>Bit2: Evento de fin de movimiento.</p><p>Bit3: Evento de inmovilidad.</p><p>Bit4: Evento de choque.</p><p>Bit5: Evento de temperatura.</p><p>Bit6: Evento de luz.</p><p>Bit7: Evento SOS.</p><p>Bit8: Evento de pulsación simple.</p><p></p><p>Convertido a hexadecimal:</p><p>0x000000: sin evento</p><p>0x000001: Evento de inicio de movimiento.</p><p>0x000002: Evento de fin de movimiento.</p><p>0x000004: Evento de inmovilidad.</p><p>0x000008: Evento de choque.</p><p>0x000010: Evento de temperatura.</p><p>0x000020: Evento de luz.</p><p>0x000040: Evento SOS.</p><p>0x000080: Evento de pulsación simple.</p>|
|5|Número de segmento de movimiento|uint8|00|<p>00 es 0x00 == 0.</p><p>Cuando comienza el movimiento, el contador aumenta en 1. Esto registra que hay movimiento.</p>|
|6~9|Hora UTC|uint32|646225bb|<p>646225bb es 0x646225BB = 1684153787 (DEC) segundos.</p><p>Convertido a hora de Beijing: 2023-05-15 20:29:47</p>|
|10~15|Dirección MAC 1|-----|5162d2c1b9d3|<p>5162d2c1b9d3</p><p>Dirección MAC (HEX) = 51:62:D2:C1:B9:D3</p>|
|16|RSSI de MAC 1, int8|int8|c0|<p>c0 es 0xC0 = -64(DEC), tipo int8</p><p>RSSI = -64</p>|
|17~22|Dirección MAC 2|-----|1b5bd2afeae5|<p>1b5bd2afeae5</p><p>Dirección MAC (HEX) = 1B:5B:D2:AF:EA:E5</p>|
|23|RSSI de MAC 2, int8|int8|bc|<p>bc es 0xBC = -68(DEC), tipo int8</p><p>RSSI = -68</p>|
|24~29|Dirección MAC 3|-----|d0e2d70529e8|<p>d0e2d70529e8</p><p>Dirección MAC (HEX) = D0:E2:D7:05:29:E8</p>|
|30|RSSI de MAC 3, int8|int8|c9|<p>c9 es 0xC9 = -55(DEC), tipo int8</p><p>RSSI = -55</p>|
|31|Nivel de batería|uint8|57|<p>57 es 0x57 = 87(DEC)</p><p>El nivel de batería es 87%</p>|


### Paquete Código de Error - 0x0D

El paquete con ID 0x0D se usa para enviar el código de error.

**El payload en crudo:**

0D00000001

|**Byte**|**Valor**|**Tipo**|**Dato Crudo**|**Descripción**|
| - | - | - | - | - |
|1|ID de trama|uint8|0D|0D es el ID del paquete.|
|2~5|Código de error|uint32|00000001|<p>0x00000001: Fallo en la adquisición de hora UTC</p><p>0x00000002: Almanaque muy antiguo</p><p>0x00000003: Error Doppler</p>|


### Paquete Estado de Posicionamiento y Sensor - 0x11

ID 0x11 se usa para enviar estado de posicionamiento, datos del sensor y batería.

**El payload en crudo:**

110100000064a763a0014100002f

|**Byte**|**Valor**|**Tipo**|**Dato Crudo**|**Descripción**|
| - | - | - | - | - |
|1|ID de trama|uint8|11|11 es el ID del paquete.|
|2|Estado de posicionamiento|uint8|01|<p>00: Posicionamiento exitoso</p><p>01: Escaneo GNSS expirado y falló obtener ubicación.</p><p>02: Escaneo Wi-Fi expirado y falló obtener ubicación.</p><p>03: Escaneo Wi-Fi + GNSS expirado y falló obtener ubicación.</p><p>04: Escaneo GNSS + Wi-Fi expirado y falló obtener ubicación.</p><p>05: Escaneo Bluetooth expirado y falló obtener ubicación.</p><p>06: Escaneo Bluetooth + Wi-Fi expirado y falló obtener ubicación.</p><p>07: Escaneo Bluetooth + GNSS expirado y falló obtener ubicación.</p><p>08: Escaneo Bluetooth + Wi-Fi + GNSS expirado y falló obtener ubicación.</p><p>09: El servidor de ubicación falló al interpretar ubicación GNSS.</p><p>0A: El servidor de ubicación falló al interpretar ubicación Wi-Fi.</p><p>0B: El servidor de ubicación falló al interpretar ubicación Bluetooth.</p><p>0C: Fallo al interpretar ubicación GNSS por baja precisión.</p><p>0D: Fallo en sincronización de tiempo.</p><p>0E: Fallo en posicionamiento por almanaque antiguo.</p>|
|3～5|Estado del evento|uint24|000000|<p>000000 es 0x000000, 0x0000XX está reservado y 0x00 es el estado del evento. Este byte tiene 8 bits, cada uno representa un evento.</p><p>Bit1: Evento de inicio de movimiento.</p><p>Bit2: Evento de fin de movimiento.</p><p>Bit3: Evento de inmovilidad.</p><p>Bit4: Evento de choque.</p><p>Bit5: Evento de temperatura.</p><p>Bit6: Evento de luz.</p><p>Bit7: Evento SOS.</p><p>Bit8: Evento de pulsación simple.</p><p></p><p>Convertido a hexadecimal:</p><p>0x000000: sin evento</p><p>0x000001: Evento de inicio de movimiento.</p><p>0x000002: Evento de fin de movimiento.</p><p>0x000004: Evento de inmovilidad.</p><p>0x000008: Evento de choque.</p><p>0x000010: Evento de temperatura.</p><p>0x000020: Evento de luz.</p><p>0x000040: Evento SOS.</p><p>0x000080: Evento de pulsación simple.</p>|
|6～9|Timestamp UTC|uint32|64a763a0|<p>64a763a0 es 0x64a763a0 = 1688691616 (DEC) segundos.</p><p>Convertido a hora de Beijing: 2023-07-07 09:00:16</p>|
|10～11|Temperatura|int16|0141|0141 es 0x0141 = 321(DEC), temperatura=321/10=32.1℃|
|12～13|Luz|uint16|0000|0000 es 0x0000 = 0(DEC) minutos, luz=0=0%|
|14|Nivel de batería|uint8|2F|<p>2F es 0x2F = 47(DEC)</p><p>El nivel de batería es 47%</p>|


## Paquete Downlink, FPort=5

El tracker soporta LoRaWAN para downlink de comandos que ajustan parámetros. Si el dispositivo está en hibernación, el comando se ejecutará la próxima vez que despierte para subir datos.

**Nota: FPort=5**

### Configuración del modo SOS - 0x80

|0x80|Byte2|
| - | :- |
|ID|<p>Modo SOS</p><p>0: modo único</p><p>1: modo continuo</p>|

8000: configurar SOS a modo único.

8001: configurar SOS a modo continuo.

### Configuración del intervalo de uplink - 0x81

|0x81|Byte2~3|Byte4~5|Byte6~7|
| - | :- | :- | :- |
|ID|<p>Intervalo de uplink de latido</p><p>0000: Mantener configuración actual</p><p>Unidad: minutos</p>|<p>Intervalo de uplink modo periódico</p><p>0000: Mantener configuración actual</p><p>Unidad: minutos </p>|<p>Intervalo de uplink modo evento</p><p>0000: Mantener configuración actual</p><p>Unidad: minutos</p>|

**Ejemplo**: establecer intervalo modo periódico a 30 minutos

Comando: 810000001E0000

### Activar el buzzer - 0x82

Después de enviar este comando, una alarma sonora se activará cuando el dispositivo despierte y sonará por 1 minuto.

|0x82|Byte2|
| - | :- |
|ID|<p>Activar buzzer.</p><p>00: apagar</p><p>01: encender</p>|

8200: apagar buzzer<br/>
8201: encender buzzer<br/>

### Configuración del Modo de Trabajo - 0x83

|0x83|Byte2|
| - | :- |
|ID|<p>Activar el buzzer.</p><p>00: modo en espera</p><p>01: modo periódico</p><p>02: modo por evento</p>|

8300: configurar modo de trabajo a modo en espera<br/>
8301: configurar modo de trabajo a modo periódico<br/>
8302: configurar modo de trabajo a modo por evento


### Configuración del Modo de Trabajo - 0x84

|0x84|Byte2|Byte3~4|Byte5~6|Byte7|Byte8~9|
| - | :- | :- | :- | :- | :- |
|ID|activar evento de movimiento|umbral de movimiento 3 ejes|intervalo de inicio de movimiento|activar evento de inmovilidad|tiempo de espera de inmovilidad|

|Byte10|Byte11~12|Byte13|Byte14~15|Byte16~17|Byte18~19|
| - | - | - | - | :- | :- |
|activar evento de choque|umbral de choque 3 ejes|activar evento de temperatura|intervalo uplink evento temperatura|intervalo muestreo temperatura|umbral máximo de temperatura|

|Byte20~21|Byte22|Byte23|Byte24~25|Byte26~27|Byte28~29|
| - | - | - | - | :- | :- |
|umbral mínimo de temperatura|tipo de advertencia temperatura|activar evento de luz|intervalo uplink evento luz|intervalo muestreo luz|umbral máximo de luz|

|Byte30~31|Byte32|
| - | - |
|umbral mínimo de luz|tipo de advertencia luz|

**El comando:**

8400001e000500016801012c000005001e025800000000000500010064000000

|**Byte**|**Valor**|**Tipo**|**Dato Crudo**|**Descripción**|
| - | - | - | - | - |
|1|ID de trama|uint8|84|84 es el ID del paquete.|
|2|Activar evento de movimiento|uint8|00|<p>00 significa desactivar modo evento.</p><p>00: desactivar modo evento.</p><p>01: activar modo evento.</p>|
|3~4|Umbral de movimiento 3 ejes|uint16|001e|<p>001e es 0x001E=30(DEC) mg</p><p>Cuando la aceleración supera 30mg, se determina que el dispositivo está en movimiento; si está por debajo durante 2 minutos, se considera inmóvil.</p>|
|5~6|Intervalo inicio de movimiento|uint16|0005|0005 es 0x0005 = 5(DEC), intervalo de 5 minutos mientras el dispositivo está en movimiento.|
|7|Activar evento de inmovilidad|uint8|00|<p>00 significa desactivar evento de inmovilidad.</p><p>00: desactivar evento de inmovilidad.</p><p>01: activar evento de inmovilidad.</p>|
|8~9|Tiempo de espera inmovilidad|uint16|0168|0168 es 0x0168 = 360(DEC), tras 360 minutos de inmovilidad, se dispara evento de timeout.|
|10|Activar evento de choque|uint8|01|<p>01 significa activar evento de choque.</p><p>00: desactivar evento de choque.</p><p>01: activar evento de choque.</p>|
|11~12|Umbral choque 3 ejes|uint16|012c|<p>012c es 0x012C=300(DEC) mg</p><p>Cuando la aceleración supera 300mg, se activa evento de choque.</p>|
|13|Activar evento de temperatura|uint8|00|<p>00 significa desactivar evento de temperatura.</p><p>00: desactivar evento de temperatura.</p><p>01: activar evento de temperatura.</p>|
|14~15|Intervalo uplink evento temperatura|uint16|0005|0005 es 0x0005 = 5(DEC), intervalo de 5 minutos para subir datos cuando se supera el umbral de temperatura.|
|16~17|Intervalo muestreo temperatura|uint16|001e|<p>001e es 0x001E=30(DEC) segundos</p><p>La temperatura se detecta cada 30 segundos; al superar umbral, se suben datos.</p>|
|18~19|Umbral máximo temperatura|int16|0258|<p>0258 es 0x0258 = 600(DEC),</p><p>Umbral máximo = 600/10=60.0 ℃</p>|
|20~21|Umbral mínimo temperatura|int16|0000|<p>0000 es 0x0000 = 0(DEC),</p><p>Umbral mínimo = 0/10=0.0 ℃</p>|
|22|Regla de umbral temperatura|uint8|00|<p>00: sube datos si temperatura ≤ umbral mínimo.</p><p>00: temp ≤ umbral mínimo</p><p>01: temp ≥ umbral máximo</p><p>02: temp ≤ mínimo y temp ≥ máximo</p><p>03: mínimo ≤ temp ≤ máximo</p>|
|23|Activar evento de luz|uint8|00|<p>00 significa desactivar evento de luz.</p><p>00: desactivar evento de luz.</p><p>01: activar evento de luz.</p>|
|24~25|Intervalo uplink evento luz|uint16|0005|0005 es 0x0005 = 5(DEC), intervalo para subir datos al superar umbral de luz.|
|26~27|Intervalo muestreo luz|uint16|0001|<p>0001 es 0x0001=1(DEC) segundo</p><p>La luz se detecta cada 1 segundo; al superar umbral, se suben datos.</p>|
|28~29|Umbral máximo luz|uint16|0064|<p>0064 es 0x0064 = 100(DEC) %</p><p>Umbral máximo = 100%</p>|
|30~31|Umbral mínimo luz|uint16|0000|<p>0000 es 0x0000 = 0(DEC) %</p><p>Umbral mínimo = 0%</p>|
|32|Tipo de advertencia luz|uint8|00|<p>00: sube datos si luz ≤ umbral mínimo.</p><p>00: luz ≤ umbral mínimo</p><p>01: luz ≥ umbral máximo</p><p>02: luz ≤ mínimo y luz ≥ máximo</p><p>03: mínimo ≤ luz ≤ máximo</p>|


### Solicitar Ubicación - 0x85

El tracker inicia solicitud de ubicación y subida de datos según configuración actual. Usualmente se usa en modo espera.

|0x85|
| - |
|ID|

Ejemplo: 

85: solicitar ubicación.

### Configurar Estrategia de Posicionamiento - 0x86

|0x86|Byte2|
| - | :- |
|ID|<p>Estrategia de posicionamiento</p><p>00: Solo GNSS</p><p>01: Solo Wi-Fi</p><p>02: Wi-Fi + GNSS</p><p>03: GNSS + Wi-Fi</p><p>04: Solo Bluetooth</p><p>05: Bluetooth + Wi-Fi</p><p>06: Bluetooth + GNSS</p><p>07: Bluetooth + Wi-Fi + GNSS</p>|

Ejemplo:

8600: Configurar estrategia a “Solo GNSS”.

### Solicitar Parámetros de Evento - 0x87

|0x87|
| - |
|ID|

Ejemplo:

87: solicitar parámetros de evento.

### Solicitar Paquete de Estado del Dispositivo - 0x88

|0x88|
| - |
|ID|

Ejemplo:

88: solicitar paquete de estado del dispositivo (0x01 o 0x02).

### Reiniciar Dispositivo - 0x89

|0x89|
| - |
|ID|

Ejemplo:

89: tras enviar el comando, el dispositivo se reinicia y se conecta nuevamente a la red. Usar con precaución.

### Activar Sensor de Temperatura y Luz - 0x8C

Activa la recolección y subida de datos del sensor de temperatura y luz.

|0x8C|Byte2|
| - | :- |
|ID|<p>Encender sensor de temperatura y luz.</p><p>00: Apagar sensor de temperatura y luz.</p><p>01: Encender sensor de temperatura y luz.</p>|

Ejemplo:

8C00: Apagar sensor de temperatura y luz.<br/>
8C01: Encender sensor de temperatura y luz.

### Activar Alarma SOS - 0x8D

Activa modo SOS continuo, sube ubicación rápidamente, una vez por minuto, se detiene después de 30 veces consecutivas, acompañado de alarma sonora y luminosa.

Se apaga cerrando el comando o con doble pulsación del botón.

|0x8D|Byte2|
| - | :- |
|ID|<p>Activar SOS.</p><p>00: Apagar.</p><p>01: Encender.</p>|

Ejemplo:

8D00: Apagar alarma SOS.<br/>
8D01: Encender alarma SOS.
