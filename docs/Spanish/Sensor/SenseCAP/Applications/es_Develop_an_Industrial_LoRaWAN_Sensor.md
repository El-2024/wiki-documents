---
description: 5 Minutes to Develop an Industrial LoRaWAN Sensor
title: 5 Minutos para Desarrollar un Sensor Industrial LoRaWAN Develop
keywords:
- LoRaWAN
- Sensor
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/develop_an_industrial_lorawan_sensor
last_update:
  date: 07/21/2025
  author: Guillermo
---

Construye en 5 minutos un sensor inalámbrico LoRaWAN de grado industrial para uso comercial

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519816/_CFY3itZc4v.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="pir" width={600} height="auto" /></p>

Al prototipar para un proyecto comercial de adquisición de datos, se invierte mucho tiempo y dinero. Por ejemplo, para un sensor de pH inalámbrico en agricultura, hay que:  
1. Buscar la placa de desarrollo y la sonda.  
2. Escribir el código.  
3. Imprimir en 3D la carcasa.  
4. Ensamblar y probar.  

Esto puede llevar días o semanas.  

Hoy podemos usar un colector inalámbrico LoRa, configurar sensores vía Bluetooth en una app y tener un producto listo para un proyecto comercial en sólo cinco minutos.

## Preparación

Prepara el data logger, la sonda, el gateway y las herramientas:

1. **Data Logger**  
   [SenseCAP S2100 LoRaWAN Data Logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)  
   Convierte sensores MODBUS RS485 / Analógicos / GPIO en dispositivos habilitados para LoRa y transmite datos por LoRaWAN.

2. **Sonda**  
   Sonda con cable que entregue RS485 / 4–20 mA / 0–10 V / pulso / nivel.  
   En este tutorial usamos un sensor ultrasónico RS485 para medición de nivel de líquido.

3. **Destornillador de cruz**  
   Para ensamblar la sonda.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519859/image_iq7PU8q7nt.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

4. **Gateway LoRaWAN**  
   El sensor transmite datos al gateway, que los envía al servidor en la nube.  
   - **Opción 1**: Usa la red Helium si hay cobertura ([Helium Explorer](https://explorer.helium.com/)).  
   - **Opción 2**: Compra un [SenseCAP Multi-Platform LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html).

5. **App SenseCAP Mate**  
   Descárgala para configuración.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519867/image_hQX9CstNtP.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={500} height="auto" /></p>

¡Preparación lista, comencemos!

## Arquitectura de Red

El data logger convierte los datos del sensor a LoRa y los envía al gateway, que los sube al servidor.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519879/image_SUwd9Yyglx.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

## Conectar la Sonda

1. Desmonta el data logger.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519881/image_TmNcqHz98z.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

2. Conecta la sonda al terminal y alimenta el equipo con la batería interna.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519884/image_XZETiBWTBz.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

:::info  
**Tip:** Si usas otro protocolo (4–20 mA, etc.), consulta la tabla de pines:
:::


<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519889/image_RHiaxQkid9.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

3. Ensambla la sonda de nuevo.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519904/image_6qTGLlXoOZ.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>




<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519908/image_LDPEOEC9ik.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>



<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519912/image_jStYF3uKW6.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

## Configurar el Sensor vía App

1. Abre e inicia sesión en la app SenseCAP Mate.  
2. Selecciona “S2100 Data Logger” y pulsa **Setup**.


<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519915/image_au0YfmfVoo.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

3. Mantén presionado el botón 3 s hasta que el LED verde parpadee a 1 s de intervalo. Pulsa **Scan** para buscar el data logger por Bluetooth.

<center>
<iframe width="220" height="380" src="https://hackster.imgix.net/uploads/attachments/1520082/video_ZKG2GDw54j.gif?auto=compress&gifq=35&w=740&h=555&fit=max&fm=mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>


4. Configura los parámetros LoRaWAN y del sensor (incluye comando Modbus-RTU RS485).


<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520084/image_tAKr7NohSn.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

```cpp
#########Basic Setting#############
Platform: 
    -SenseCAP for helium (use helium network)
    -SenseCAP for The Things Network (use SenseCAP gateway)
Frequency Plan: EU868 (Select this based on the frequency or region of the gateway)
Uplink Interval: 5 min
Packet Policy: 2C+1N (use the default parameter)

#########Sensor Setting#############
Protocol: RS485 Modbus RTU
Baud Rate: 9600
Modbus Address: 128 (Sensor's modbus address)
Power Type: Periodic power (Power the sensor before data collection, and power off the sensor after data collection)
Power Voltage: 5V
Sensor Warm-up Time: 100ms
Response Timeout: 100ms
Startup Time: 100ms
Measurement Number: 2 (distance and temperature)

#########Measurement1#############
Register Address: 256 (DEC)
Function code: 03
Data Type: Unsigned 16bit integer,0xAB
Precision: 0,# (No decimal number)
FactoryA: 1 (Y=Ax+B, “Y”: It is the value of Data Logger will upload.
“x”: It is the original current value.If only raw values are uploaded, set A=1 and B=0.)
FactoryB: 0
Write Strategy: None

#########Measurement2#############
Register Address: 258 (DEC)
Function code: 03
Data Type: Unsigned 16bit integer,0xAB
Precision: 0,# (No decimal number)
FactoryA: 0.1 (The final value is divided by 10)
FactoryB: 0
Write Strategy: None
```

5. Pulsa **Send** y luego **Measure** para probar el sensor.


<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520088/image_iAmOflFRIQ.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

¡Distancia y temperatura obtenidas con éxito!

## Subir Datos al Portal SenseCAP y App

Asegúrate de que el gateway funcione o haya cobertura Helium.

1. La app vuelve a la pantalla principal y desconecta Bluetooth. El data logger intentará unirse a LoRaWAN.  
   - Luz roja respiratoria: esperando unirse.  
   - Luz verde rápida 2 s: ¡unido con éxito!

<center>
<iframe width="220" height="380" src="https://hackster.imgix.net/uploads/attachments/1520108/video(1)_yWY0orezqU.gif?auto=compress&gifq=35&w=740&h=555&fit=max&fm=mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

2. Vincula el data logger escaneando el código QR.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520115/image_9JdYx3MCrg.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

3. Consulta los datos en la app y en el portal: (https://sensecap.seeed.cc/).

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520128/image_K6j6TDHXX4.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

## Prueba en Entorno Real

Aplica el sensor en exteriores para monitoreo a largo plazo.


<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520150/image_MoA2h9E8lq.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>


¡En sólo 5 minutos ya tienes un sensor LoRaWAN industrial listo para tu proyecto!

## Recursos

* [5 Minutes to Develop an Industrial LoRaWAN Sensor](https://www.hackster.io/jenkinlu001/5-minutes-to-develop-an-industrial-lorawan-sensor-6631dc)  
* [SenseCAP S2100 Data Logger User Guide (PDF)](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)
