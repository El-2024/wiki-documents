---
description: Configure the Analog Sensor
title: Configuración de Sensor Analógico
keywords:
- SenseCAP data logger
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger
last_update:
  date: 07/21/2025
  author: Guillermo
---

# Primeros pasos con el S2100 y un sensor de entrada analógica

Aprenderás a usar el S2100 con un sensor de entrada analógica y, una vez completado, sabrás cómo conectar tu propio sensor personalizado.

## Reúne estos elementos

- Registrador de datos  
- Sensor de luz (como ejemplo)  
- Destornillador de cruz (tipo cruz nº 2)  
- App SenseCAP Mate  

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/2.png"/></div>

# Conectar la sonda del sensor

Primero haremos el cableado. Sigue los pasos a continuación.

## Desmontar el registrador de datos

1. Desatornilla los tres tornillos.  

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/3.png"/></div>

2. Retira la tapa.  

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/4.png"/></div>

3. Quita la tapa roscada, pasa el cable del sensor por ella y la cubierta inferior, y conéctalo al terminal de cableado.  

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/5.png"/></div>

## Descripción del terminal de cableado

| **N.º** | **Pin** | **Descripción** |
| --- | --- | --- |
| 1  | 12V  | Entrada externa de 12 V. Alimenta el registrador con fuente de 12 V CC; la batería actúa como respaldo. |
| 2  | 5V   | Salida de 5 V para el sensor. |
| 3  | 3V   | Salida de 3 V para el sensor. |
| 4  | IO   | Entrada digital o de pulso. |
| 5  | V1   | Entrada de voltaje de 0 – 10 V. |
| 6  | V2   | Entrada de voltaje de 0 – 10 V. |
| 7  | A    | RS485 A/+ |
| 8  | B    | RS485 B/- |
| 9  | I1   | Entrada de corriente de 4 – 20 mA. |
| 10 | I2   | Entrada de corriente de 4 – 20 mA. |
| 11 | GND  | Tierra. |
| 12 | GND  | Tierra. |

## Opciones de alimentación del sensor

El registrador soporta dos modos; aquí usamos Batería interna porque el sensor de luz solo necesita 5 V:

| **Modo**           | **Descripción**                                                                                |
|--------------------|------------------------------------------------------------------------------------------------|
| Batería interna    | El registrador y el sensor se alimentan por batería. Solo admite sensores de 5 V.              |

## Conectar al registrador

Secuencia de cableado del registrador:

| **Color de cable** | **Descripción**      |
|--------------------|----------------------|
| Rojo               | 5 V                  |
| Negro              | GND (cualquier pin)  |
| Amarillo           | IO                   |

1. Pasa el cable de 8 pines por la cubierta inferior y conéctalo según la secuencia.  

   <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/6.png"/></div>

2. Coloca la tapa superior, anillo de goma y la tapa roscada en orden.  

   <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/7.png"/></div>  
   <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/8.png"/></div>

3. Aprieta los tornillos y tapas para verificar la impermeabilidad. Si el cable es muy fino, envuélvelo con cinta impermeable.  

   <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/9.png"/></div>  
   <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/10.png"/></div>

**\*Nota:** Instala la junta impermeable y aprieta bien tornillos y tapas, o la estanqueidad puede verse comprometida.  

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/11.png"/></div>

Habiendo terminado el cableado, pasamos a configurar el S2100 en la app.

# Configurar el S2100

## Conectar el sensor a la app

1. Mantén presionado el botón **3 s**; el LED parpadeará cada 1 s. Conéctate desde la app en 1 min; si no, el dispositivo se apagará o reiniciará.  

   <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/12.png"/></div>

2. Selecciona **“S2100 Data Logger”**. Pulsa **“Setup”** para activar Bluetooth y luego **“Scan”**.  

   <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/13.png"/></div>  
   <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/14.png"/></div>

3. Elige el sensor por S/N (etiqueta frontal). Se mostrará la información básica.  

   <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/15.png"/></div>  
   <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/16.png"/></div>

4. Al conectarse, entra en modo configuración y el LED parpadea cada 2 s.

## Configurar parámetros básicos en la app

### Seleccionar plataforma y frecuencia

Los sensores S210x soportan de 863 MHz a 928 MHz (7 planes). Elige **“SenseCAP for Helium”** o **“SenseCAP for TTN”** según tu caso.

**\*Nota:** Con Helium cercano, no necesitas dar de alta el dispositivo en su consola. Para TTN usa el [gateway LoRaWAN SenseCAP](https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html).  

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/17.png"/></div>

### Establecer intervalo

El dispositivo despierta cada intervalo, mide y sube datos vía LoRa. Por defecto **60 min**.  

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/18.png"/></div>

### Establecer política de paquetes

Tres modos; aquí usamos **1N**.  

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/19.png"/></div>

| **Parámetro**          | **Descripción**                                                                                                                                           |
|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2C+1N (predeterminado) | 2 confirmados + 1 no confirmado: minimiza pérdida, pero consume más datos/créditos.                                                                       |
| 1C                     | 1 confirmado: duerme tras recibir la confirmación.                                                                                                        |
| 1N                     | 1 no confirmado: envía y duerme sin esperar confirmación.                                                                                                |

### Restaurar ajustes de fábrica

Antes de volver a SenseCAP desde otra plataforma, restaura ajustes de fábrica (solo reinicia configuración básica).  

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/20.png"/></div>

# Configurar sensor analógico en la app

Selecciona **“Protocol”** = **“Analog Input”** y ajusta:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/21.png"/></div>

- **Power Type**: Periodical power  
- **Power Voltage**: 5 V  
- **Sensor Warm-up Time**: 200 ms  
- **Voltage Range**: 0 – 10 V (ajuste automático de límite superior)  
- **Interface V1**: Activo (habilita señal en V1)  
- **Interface V2**: (sin usar)  
- **Y = A×x + B**: A = 100, B = 0  

Al completar, pulsa **“Back to Home”**. App y registrador se desconectan; el LED parpadea rojo lento al intentar conectar y verde rápido con éxito.  

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/22.png"/></div>

# Verificar datos en el portal SenseCAP

## Asociar sensor al portal

En la app SenseCAP Mate:

1. Pulsa **“Add device”** para entrar a la página de asociación.  

   <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/23.png"/></div>

2. Escanea el QR del dispositivo; si no asignas grupo, irá a **“default”**.  

   <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/24.png"/></div>

3. **Introducir EUI manual** si el QR está dañado y pulsa **“confirm”**.  

   <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/25.png"/></div>  
   <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/26.png"/></div>

## Consultar datos en SenseCAP Mate o portal

En la app o en [http://sensecap.seeed.cc/](http://sensecap.seeed.cc/) revisa el estado en línea y la hora de la última subida.  

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/27.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/28.png"/></div> 

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/1.png"/></div> 

