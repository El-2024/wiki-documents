---
description: Configure the 12V RS485 Sensor
title: Configurando el Sensor de RS485 12V 
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/f/i/first_page_all-22.jpg
slug: /es/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_12V_RS485_Sensor_for_S2100_Data_Logger
keywords: [SenseCAP data logger, data logger, collector]
last_update:
  date: 07/21/2025
  author: Guillermo
---

# Primeros pasos con el S2100 y un sensor RS485 de 12 V

Esta guía te ayudará a comenzar con el S2100 y un sensor RS485 de 12 V. Después de completarla, comprenderás cómo conectar tu propio sensor personalizado en el futuro.

## Paso 1: Reunir los elementos necesarios

- Registrador de datos
- Sensor meteorológico compacto ONE (como ejemplo)
- Caja de conexiones
- Cable M12
- Cable de 8 pines (40 cm)
- Destornillador de cruz (tipo cruz No. 2)
- App SenseCAP Mate

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/2.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

## Paso 2: Conectar el sensor

Sigue los pasos a continuación para completar el proceso de cableado.

### Paso 2.1: Desmontar el registrador de datos

1. Desatornilla los tres tornillos.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/3.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

2. Retira la tapa.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/4.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. Quita el tapón roscado, pasa el cable del sensor a través del tapón y de la tapa inferior, y conéctalo al terminal de cableado.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/5.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

### Paso 2.2: Descripción del terminal de cableado

|**N.º**|**Pin**|**Descripción**|
| - | - | - |
| 1 | 12V | Entrada externa de 12 V. El registrador de datos puede alimentarse con una fuente de 12 V CC. Al usar una fuente de 12 V, la batería se usa como respaldo. |
| 2 | 5V  | Salida de 5 V, proporciona 5 V al sensor. |
| 3 | 3V  | Salida de 3 V, proporciona 3 V al sensor. |
| 4 | IO  | Nivel de adquisición o entrada de pulsos. |
| 5 | V1  | Entrada de voltaje de 0 a 10 V. |
| 6 | V2  | Entrada de voltaje de 0 a 10 V. |
| 7 | A   | RS485 A/+ |
| 8 | B   | RS485 B/- |
| 9 | I1  | Entrada de corriente de 4 a 20 mA. |
| 10 | I2 | Entrada de corriente de 4 a 20 mA. |
| 11 | GND| Pin de tierra. |
| 12 | GND| Pin de tierra. |

### Paso 2.3: Opciones de alimentación para el sensor

El registrador de datos admite dos modos de alimentación. Usaremos aquí el modo de fuente externa de 12 V CC:

| **Modo** | **Descripción** |
| - | - |
| Batería interna | El registrador y los sensores se alimentan con batería. En este caso, solo puede conectarse un sensor de 5 V. |
| Fuente externa de 12 V CC | Alimenta el registrador y el sensor mediante una fuente externa de 12 V. Si se desconecta, el sistema cambia a batería. Usa la caja de conexiones para mantener la impermeabilidad del dispositivo. |

### Paso 2.4: Conectar la caja de conexiones

Secuencia del cable M12:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/6.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

Cuando tu sensor necesita 12 V, la batería no es suficiente para alimentarlo. Por lo tanto, se requiere una fuente externa de 12 V.

1. Prepara los siguientes elementos: adaptador de 12 V CC, caja de conexiones y cable de 8 pines (solo se usarán 4).
2. Cablea el terminal del registrador de datos.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/7.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

   Coloca la tapa, anillo de goma y el tapón roscado en orden.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/8.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/9.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. Cablea el terminal de la caja de conexiones.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/10.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

4. Conecta el cable del sensor M12 a la caja de conexiones.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/11.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

5. Conecta el adaptador de 12 V CC a la fuente de alimentación.

## Paso 3: Conectar el sensor

Una vez conectada la caja de conexiones al S2100, pasamos a conectar el sensor.

### Paso 3.1: Conocer la secuencia de cables del sensor ONE Compact Weather Station

El dispositivo usa un conector M12 de 8 pines. Los distintos colores de los pines proporcionan alimentación y comunicación, como se muestra:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/12.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

En modo RS-485 puedes conectar solo 4 cables (sin usar la función de calefacción). Aísla los demás con cinta para evitar cortos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/13.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

Asegúrate de **alinear correctamente** los agujeros del cable con los pines del conector del dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/14.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

Conecta el cable y gíralo en sentido horario para ajustarlo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/15.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

Finalmente, completa el ensamblaje.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/16.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

**Aprieta los tornillos y tapas** para garantizar impermeabilidad. Si el cable es muy delgado, añade cinta impermeable.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/17.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

**\*Nota:** Asegúrate de instalar la junta impermeable del registrador y de la caja adaptadora, y de apretar las tapas y tornillos. Si el cable es delgado, envuélvelo con cinta impermeable como se muestra:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/18.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

En este punto, el cableado está completo. Ahora configuraremos el S2100 con la app.

## Paso 4: Configurar el S2100

### Paso 4.1: Conectarse al sensor desde la app

1. Mantén presionado el botón durante **3 segundos**. El LED parpadeará cada 1 s. Usa la app para conectarte en menos de 1 minuto; de lo contrario, el dispositivo se apagará o reiniciará.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/19.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

2. Selecciona “S2100 Data Logger”.

   Activa Bluetooth haciendo clic en “Setup” y luego “Scan” para buscar el sensor.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/20.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/21.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. Selecciona el sensor por S/N (impreso en la etiqueta delantera). Se mostrará su información básica.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/22.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/23.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

4. Al conectarse por Bluetooth, se entra en modo de configuración. El LED parpadea cada 2 s.

### Paso 4.2: Configurar parámetros básicos desde la app

#### Seleccionar plataforma y frecuencia

Los sensores S210x admiten frecuencias entre 863 MHz y 928 MHz, con siete planes disponibles.

Selecciona “SenseCAP for Helium” o “SenseCAP for TTN” según tu caso.

**\*Nota:** El Data Logger puede enviar datos si hay red Helium cercana. Usa la consola privada de Helium de SenseCAP, así que no necesitas registrar un dispositivo en Helium.

Para TTN se necesita usarlo con el [gateway LoRaWAN SenseCAP](https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/25.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

#### Establecer el intervalo

El dispositivo recopila y sube datos **cada 60 minutos por defecto**. Puedes ajustar este valor según tus necesidades.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/26.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

#### Establecer política de paquetes

Selecciona la estrategia de envío de datos que prefieras. Aquí elegimos 1N.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/27.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

| **Parámetro** | **Descripción** |
| - | - |
| 2C+1N (predeterminado) | 2 paquetes confirmados y 1 no confirmado. Minimiza pérdida de paquetes pero consume más datos o créditos. |
| 1C | Envía 1 paquete confirmado y entra en modo de reposo tras la respuesta del servidor. |
| 1N | Envía 1 paquete no confirmado y entra en modo de reposo sin esperar confirmación del servidor. |

#### Restaurar configuración de fábrica

Si cambias de otras plataformas a la plataforma SenseCAP, restaura la configuración de fábrica. Esto reinicia los ajustes básicos del dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/28.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

### Paso 4.3: Configurar sensor RS485 Modbus-RTU desde la app

Selecciona “Protocolo” como “RS485 Modbus RTU” y ajusta los siguientes parámetros en orden:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/29.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

| **Parámetro**            | **Descripción**                                                                                                                                                                                                                       |
|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Baud Rate**            | Velocidad de comunicación con el sensor. Selecciona **9600**.                                                                                                                                                                         |
| **Modbus Address**       | Dirección del esclavo Modbus. Por defecto: 10 (Five in ONE), 20 (Seven in ONE), 38 (Nine in ONE), 43 (Ten in ONE). Rango 1–247. Aquí introduce **20**.                                                                               |
| **Power Type**           | Tipo de alimentación. Selecciona **Always on**. “Periodic power” reduce consumo al activar el sensor solo antes de cada lectura.                                                                                                        |
| **Power Voltage**        | Tensión de alimentación al sensor. Selecciona **12V**.                                                                                                                                                                                 |
| **Sensor Warm-up Time**  | Tiempo para que el sensor alcance su máxima precisión tras aplicar energía. Introduce **200 ms**.                                                                                                                                     |
| **Response Timeout**     | Tiempo que espera el registrador por respuesta tras solicitar lectura. Si se excede, reenvía comando. **5 × 100 ms** es adecuado.                                                                                                     |
| **Startup Time**         | Tiempo que tarda el sensor en iniciar comunicación Modbus tras encenderse. **10 × 100 ms** es adecuado.                                                                                                                              |
| **Measurement Number**   | Número de lecturas a recopilar (0–10). El sensor tiene 7 registros, así que selecciona **7**.                                                                                                                                         |
| **Work Mode**            | Modo de operación. Selecciona **Periodic collect**: recopila y envía datos periódicamente.                                                                                                                                           |
| **Measurement Setting**  | Configuración de cada registro de medición.                                                                                                                                                                                           |

#### Configuración de mediciones

A continuación, ajusta cada medición por separado.

##### Medición 1 (Temperatura del aire)

| **Opción**             | **Valor**                                                                                                                                                                                                                                                                                                                                                                  |
|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Register Address       | 0 — Dirección del registro de temperatura. Introduce **0**.                                                                                                                                                                                                                                                                                                                  |
| Function Code          | Selecciona **03**.                                                                                                                                                                                                                                                                                                                                                          |
| Data Type              | Selecciona **Signed 32bit integer, 0xABCD**.                                                                                                                                                                                                                                                                                                                                 |
| Precision              | Número de decimales. Selecciona **2, #.##**.                                                                                                                                                                                                                                                                                                                                  |
| Y = A×x + B            | Factor de escala: A = 0.001, B = 0.                                                                                                                                                                                                                                                                                                                                           |
| Write Strategy         | Estrategia de escritura: **None** (desactivado).                                                                                                                                                                                                                                                                                                                             |

##### Medición 2 (Humedad del aire)

| **Opción**             | **Valor**                           |
|------------------------|-------------------------------------|
| Register Address       | 2 — Introduce **2**.                |
| Function Code          | **03**                              |
| Data Type              | **Signed 32bit integer, 0xABCD**    |
| Precision              | **2, #.##**                         |
| Y = A×x + B            | A = 0.001, B = 0.                   |
| Write Strategy         | **None**                            |

##### Medición 3 (Presión barométrica)

| **Opción**             | **Valor**                           |
|------------------------|-------------------------------------|
| Register Address       | 4 — Introduce **4**.                |
| Function Code          | **03**                              |
| Data Type              | **Signed 32bit integer, 0xABCD**    |
| Precision              | **0, #**                            |
| Y = A×x + B            | A = 0.001, B = 0.                   |
| Write Strategy         | **None**                            |

##### Medición 4 (Intensidad de luz)

| **Opción**             | **Valor**                           |
|------------------------|-------------------------------------|
| Register Address       | 6 — Introduce **6**.                |
| Function Code          | **03**                              |
| Data Type              | **Signed 32bit integer, 0xABCD**    |
| Precision              | **0, #**                            |
| Y = A×x + B            | A = 0.001, B = 0.                   |
| Write Strategy         | **None**                            |

##### Medición 5 (Dirección media del viento)

| **Opción**             | **Valor**                           |
|------------------------|-------------------------------------|
| Register Address       | 12 — Introduce **12**.              |
| Function Code          | **03**                              |
| Data Type              | **Signed 32bit integer, 0xABCD**    |
| Precision              | **1, #.#**                          |
| Y = A×x + B            | A = 0.001, B = 0.                   |
| Write Strategy         | **None**                            |

##### Medición 6 (Velocidad media del viento)

| **Opción**             | **Valor**                           |
|------------------------|-------------------------------------|
| Register Address       | 18 — Introduce **18**.              |
| Function Code          | **03**                              |
| Data Type              | **Signed 32bit integer, 0xABCD**    |
| Precision              | **1, #.#**                          |
| Y = A×x + B            | A = 0.001, B = 0.                   |
| Write Strategy         | **None**                            |

##### Medición 7 (Intensidad de lluvia)

| **Opción**             | **Valor**                           |
|------------------------|-------------------------------------|
| Register Address       | 24 — Introduce **24**.              |
| Function Code          | **03**                              |
| Data Type              | **Signed 32bit integer, 0xABCD**    |
| Precision              | **1, #.#**                          |
| Y = A×x + B            | A = 0.001, B = 0.                   |
| Write Strategy         | **None**                            |

Después de configurar todas las mediciones, pulsa **“Volver al inicio”**. App y registrador se desconectarán. El dispositivo intentará conectarse a la red; el LED parpadeará en rojo lentamente y, al conectar, en verde rápidamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/30.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

## Paso 5: Ver datos en el portal SenseCAP

### Paso 5.1: Asociar sensor al portal SenseCAP

En la app SenseCAP Mate:

1. **Escanear QR**: Pulsa **“Añadir dispositivo”** en la esquina superior para ingresar a la página de asociación.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/31.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

2. Escanea el QR del dispositivo para asociarlo. Si no asignas un grupo, se meterá en el grupo **“default”**.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/32.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

3. **Introducir EUI manualmente**: Si el QR está dañado, rellena el EUI en el formato sugerido y pulsa **“confirmar”**.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/33.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/34.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

### Paso 5.2: Consultar datos en el portal SenseCAP

En la app o en el [Portal SenseCAP](http://sensecap.seeed.cc/), revisa el estado en línea y la hora de la última subida de cada sensor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/35.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>

También puedes ver los datos en la app SenseCAP Mate:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/36.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/1.png" style={{width:400, height:'auto', "border-radius": '6.66px' }}/></div>
