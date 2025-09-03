---
description: SenseCAP S2100 LoRaWAN Data Logger
title: SenseCAP S2100 LoRaWAN Data Logger
keywords:
- SenseCAP data logger
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Sensor/SenseCAP/SenseCAP_Data_Logger/Data_Logger
last_update:
  date: 07/21/2025
  author: Guillermo
---

# SenseCAP S2100 Registrador de Datos LoRaWAN

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/1.png"/></div>

El SenseCAP S2100 Data Logger es un dispositivo versátil que puede conectarse a sensores MODBUS-RTU RS485, analógicos o GPIO, permitiendo una fácil transmisión de datos a través de la red LoRaWAN. Gracias a su diseño con tecnología LoRa e índice de protección IP66, ofrece una gran estabilidad y fiabilidad, con un alcance de transmisión de largo rango y consumo de energía ultra bajo.

Es ideal para aplicaciones en exteriores, y puede alimentarse mediante batería o una fuente externa de 12 V, lo que le brinda mayor flexibilidad. Cuando se conecta a una fuente de 12 V, la batería interna reemplazable actúa como respaldo.

Además, el S2100 está optimizado para actualizaciones OTA mediante Bluetooth integrado, lo que facilita la configuración y mantenimiento. Finalmente, con el convertidor S2110 es posible conectarlo a sensores Grove, convirtiéndolo en una excelente opción para sensores industriales DIY LoRaWAN y despliegues a pequeña escala.

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

# Características

- **Alta compatibilidad con diferentes sensores:** Soporta sensores MODBUS-RTU RS485, analógicos (4 ~ 20 mA / 0 ~ 10 V) y GPIO (nivel/pulso).
- **Compatible con redes LoRaWAN® en todo el mundo:** Compatible con el protocolo LoRaWAN® V1.0.3 y puede trabajar con gateways LoRaWAN®. (Soporta planes de frecuencia universales desde 863 MHz hasta 928 MHz).
- **Largo alcance y alimentación mediante batería reemplazable:** Transmisión inalámbrica LoRaWAN®, batería integrada de 19Ah o alimentación externa de 12 V DC, con un alcance de hasta 2 km en zonas urbanas y 10 km en línea de vista.
- **Diseñado para entornos hostiles:** Temperatura operativa de -40 °C a +85 °C y carcasa IP66, ideal para uso en exteriores con alta exposición solar, lluvia intensa, polvo, etc.
- **Gestión y configuración remota:** Compatible con SenseCAP Mate App y SenseCAP Portal para configuración y monitoreo remoto.

# Especificaciones

## Interfaces

| Elemento | Valor |
|---------|-------|
| Entrada de corriente | 4 a 20 mA (2 canales) |
| Entrada de voltaje | 0 a 10 V (2 canales) |
| RS485 | Protocolo Modbus-RTU RS485 |

## Parámetros Generales

| Elemento | Valor |
|---------|-------|
| Modelo del producto | SenseCAP S2100 |
| Microcontrolador | Wio-E5 |
| Protocolo soportado | LoRaWAN v1.0.3 Clase A |
| Bluetooth integrado | Herramienta App para configurar parámetros y algoritmos de conversión de datos |
| Plan de canales de largo alcance | IN865 / EU868 / US915 / AU915 / AS923 |
| Potencia máxima de transmisión | 19 dBm |
| Sensibilidad | -136 dBm @ SF12 BW = 125 kHz |
| Distancia de comunicación | 2 a 10 km (dependiendo del entorno) |
| Índice de protección (IP) | IP66 |
| Temperatura de operación | -40 °C a +85 °C |
| Humedad de operación | 0 a 100 % RH (sin condensación) |
| Peso del dispositivo | 280 g |
| Certificaciones | CE / FCC / RoHS |

## Batería (incluida en el equipo)

| Elemento | Valor |
|---------|-------|
| Vida útil de la batería | Hasta 10 años |
| Capacidad de la batería | 19 Ah (no recargable) |
| Tipo de batería | Batería estándar tipo D SOCl₂ |

# Arquitectura del Sistema

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/2.png"/></div>

# Opciones de Alimentación

- **Opción 1:** El registrador puede trabajar en modo periódico, alimentado por una batería Li-SOCl₂ tipo D estándar de 19 Ah (fácil de adquirir), permitiendo su instalación en exteriores sin necesidad de energía externa.

- **Opción 2:** Puede trabajar en **modo de alimentación constante** con una fuente externa de 12 V DC. Se ofrece un **Kit de Caja de Conexiones** para facilitar el ensamblaje rápido.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/3.png"/></div>

# Compatibilidad con sensores industriales de diferentes interfaces

El S2100 es un recolector de canal único, lo que significa que **solo puede operar con un protocolo a la vez**:

- **RS485:** Soporta protocolo estándar Modbus-RTU RS485.
- **Analógico:** 2 canales de 0 ~ 10 V o 4 ~ 20 mA.
- **GPIO:** 1 entrada GPIO, para recolectar señales de nivel o pulsos.

:::tip
**Modbus-RTU:** Este protocolo usa interfaces serie RS-232 o RS-485, es ampliamente soportado por SCADA, HMI, servidores OPC y software de adquisición de datos. Esto permite integrar fácilmente equipos Modbus en sistemas nuevos o existentes.

**GPIO:** Significa “Entrada/Salida de Propósito General”. Es una interfaz estándar utilizada para conectar microcontroladores con otros dispositivos electrónicos como sensores, diodos, pantallas o módulos SoC.
:::

# Aplicaciones

<div align="center"><img width="{800}" src="https://wdcdn.qpic.cn/MTY4ODg1NTA2NTM1OTkxNw_136830_-0LyGczsW0uya6Pi_1670038120?w=1280&h=696.6093366093365"/></div>




