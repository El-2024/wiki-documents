---
description: Covers the device's construction and operation, detailing how each component contributes to the SenseCAP Indicator's overall functionality.
title: Descripción General del Hardware
keywords:
- Indicator Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Indicator_Dive_into_the_Hardware
sidebar_position: 1
last_update:
  date: 07/22/2025
  author: Guillermo
---
# **Descripción General del Hardware - SenseCAP Indicator**

El **SenseCAP Indicator** es un dispositivo con pantalla táctil de 4 pulgadas, impulsado por un diseño de doble microcontrolador: **ESP32-S3** y **RP2040**. Ambos son altamente capaces y permiten integrar múltiples sensores, interfaces y funcionalidades avanzadas para proyectos IoT.

Esta sección proporciona una vista técnica detallada del hardware y la comunicación entre ambos MCUs, incluyendo programación, conexión con sensores y otros dispositivos.

## **Explorando el Hardware**

### **Diagrama de Hardware**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>

Como muestra el diagrama, el SenseCAP Indicator está impulsado principalmente por los microcontroladores **ESP32-S3** y **RP2040**, conectados a la pantalla LCD, transceptor LoRa y otros circuitos periféricos.

## **ESP32-S3**

El **ESP32-S3** es un SoC (System on Chip) altamente integrado que combina:

- CPU dual-core Xtensa® LX7
- Wi-Fi de 2.4 GHz y Bluetooth 5.0 LE
- Interfaces: UART, SPI, I2C, PWM, ADC, DAC, etc.
- Capacidades de procesamiento y conectividad para aplicaciones IoT, multimedia y control de periféricos.

## **RP2040**

El [RP2040](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html?) es el primer microcontrolador desarrollado por Raspberry Pi Foundation. El SenseCAP Indicator lo integra como coprocesador. Sus características principales:

- Doble núcleo **ARM Cortex-M0+** @ 133 MHz
- 264 KB de RAM
- Interfaces: SPI, I2C, UART, USB
- Soporte para **PIO (Programmable I/O)** para crear interfaces personalizadas

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/rppinout.png"/></div>

## **Comunicación entre ESP32-S3 y RP2040**

Los dos microcontroladores se comunican vía **UART serial** utilizando el protocolo **COBS (Consistent Overhead Byte Stuffing)**, lo cual permite una transmisión de datos confiable y eficiente.

### Bibliotecas utilizadas

- **ESP32**: [cmcqueen/cobs-c](https://github.com/cmcqueen/cobs-c)
- **RP2040 (Arduino)**: [bakercp/PacketSerial](https://github.com/bakercp/PacketSerial)

### Estructura de los datos transmitidos

| Byte 0   | Byte 1–4              |
|----------|------------------------|
| `PKT_TYPE` | `PKT_PARA` (Little Endian) |

`PKT_TYPE` representa el tipo de paquete  
`PKT_PARA` contiene el valor o parámetro (por ejemplo, `uint32_t` o `float`)

### **Lista de Comandos `PKT_TYPE`**

| `PKT_TYPE` | Dirección | Descripción |  
|------------|-----------|-------------|
| `0x00`     | Bidireccional | ACK, texto: `"ACK"` |
| `0xA0`     | ESP32 → RP2040 | Comando de intervalo de recolección (`uint32_t`) |
| `0xA1`     | ESP32 → RP2040 | Activar zumbador (`uint32_t`) |
| `0xA2`     | ESP32 → RP2040 | Desactivar zumbador (`uint32_t`) |
| `0xA3`     | ESP32 → RP2040 | Comando de apagado (`uint32_t`) |
| `0xA4`     | ESP32 → RP2040 | Encender dispositivo (`uint32_t`) |
| `0xA0–0xAF` | ESP32 → RP2040 | Comandos personalizados |
| `0xB0`     | RP2040 → ESP32 | Temperatura (SCD41) `float` |
| `0xB1`     | RP2040 → ESP32 | Humedad (SCD41) `float` |
| `0xB2`     | RP2040 → ESP32 | CO₂ (SCD41) `float` |
| `0xB3`     | RP2040 → ESP32 | Temperatura (AHT20) `float` |
| `0xB4`     | RP2040 → ESP32 | Humedad (AHT20) `float` |
| `0xB5`     | RP2040 → ESP32 | Índice tVOC (SGP40) `float` de 0 a 500 |
| `0xB6–0xBF`| RP2040 → ESP32 | Datos personalizados `float` |

> *Puedes definir tus propios comandos para adaptarlos a diferentes sensores o funciones.*

# **Soporte Técnico**

¡No te preocupes, te tenemos cubierto! Por favor visita nuestro [Canal Oficial de Discord de Seeed](https://discord.com/invite/QqMgVwHT3X) para hacer tus preguntas.

Si tienes un pedido grande o necesitas una personalización, por favor contacta a iot@seeed.cc

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
