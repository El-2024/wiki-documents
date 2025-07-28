---
description: Get Started with SenseCAP Indicator
title: Primeros Pasos con SenseCAP Indicator
keywords:
- Get Started SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png
slug: /es/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator
sidebar_position: 1
last_update:
  date: 07/22/2025
  author: Guillermo
---

## Vista General

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/IOdI5_MGbCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<div class="button-container">
<a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">
        Consigue uno ahora 🖱️</a>
</div>

SenseCAP Indicator es una pantalla táctil de 4 pulgadas impulsada por los microcontroladores duales ESP32-S3 y RP2040, que soporta comunicación Wi-Fi, Bluetooth y LoRa.

El dispositivo cuenta con dos interfaces Grove que soportan protocolos de transmisión ADC e I2C, y dos puertos USB tipo C con pines de expansión GPIO internos, lo que permite al usuario expandir fácilmente accesorios externos vía USB.

SenseCAP Indicator es una plataforma de desarrollo IoT potente y completamente de código abierto para desarrolladores. También se ofrece un servicio integral de fusión ODM para personalización y escalamiento rápido.

<div align="center">
  <img class="img-responsive" width="680" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png"/>
</div>

## Características

- **Microcontroladores duales y GPIOs abundantes**  
Equipado con potentes MCUs ESP32S3 y RP2040 duales, y más de 400 GPIO compatibles con Grove para flexibles opciones de expansión.

- **Monitoreo en tiempo real de la calidad del aire**  
Sensores integrados de tVOC y CO2, y un sensor Grove externo AHT20 para mediciones más precisas de temperatura y humedad.

- **Concentrador LoRa local para conectividad IoT**  
Módulo Semtech SX1262 LoRa integrado (opcional) para conectar dispositivos LoRa a plataformas IoT populares como Matter a través de Wi-Fi, sin necesidad de dispositivos compatibles adicionales.

- **Plataforma completamente de código abierto**  
Aprovecha el extenso ecosistema open source de ESP32 y Raspberry Pi para infinitas posibilidades de aplicación.

- **Servicio Fusion ODM disponible**  
Seeed Studio ofrece servicio ODM integral para rápida personalización y escalamiento para diversas necesidades. (contactar a iot@seeed.cc)

## Descripción del hardware

<div align="center"><img width="600" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_2.png"/></div>
<div align="center"><img width="600" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_3.png"/></div>

### Diagrama del sistema

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>
<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_7.png"/></div>

### Función de los botones

- **Pulsación corta:** Apagar/Encender la pantalla.  
- **Pulsación larga (3 segundos):** Encender/Apagar el dispositivo.  
- **Pulsación larga (10 segundos):** Restaurar firmware de fábrica.

### Grove

Cuenta con dos interfaces Grove para conectar módulos Grove, brindando más posibilidades para desarrolladores.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/new-grove.png"/></div>

Grove es un sistema modular y estandarizado de conectores para prototipos y un fuerte ecosistema de hardware open source. Haz clic [**aquí**](https://www.seeedstudio.com/category/Grove-c-1003.html) para saber más.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_4.png"/></div>

### LoRa®

El módulo LoRa® Semtech SX1262 integrado permite construir aplicaciones LoRa® y conectar sensores LoRa locales a la nube vía Wi-Fi. Por ejemplo, puedes crear un concentrador LoRa para conectar sensores LoRa a tu ecosistema de hogar inteligente y usar Matter sobre Wi-Fi. Así, los dispositivos LoRa pueden integrarse en el ecosistema Matter sin comprar nuevos dispositivos compatibles con Matter.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_55.png"/></div>

## Especificaciones

| Pantalla                      | 3.95 pulgadas, pantalla táctil capacitiva RGB |
|------------------------------|-----------------------------------------------|
| **Resolución de pantalla**   | 480 x 480 píxeles                             |
| **Alimentación**              | 5V DC, 1A                                    |
| **Batería**                  | Sin batería, solo alimentación por USB       |
| **Procesador**               | **ESP32-S3:** Xtensa® dual-core 32-bit hasta 240 MHz  
**RP2040:** Dual ARM Cortex-M0+ hasta 133MHz |
| **Memoria Flash**            | **ESP32-S3:** 8MB  
**RP2040:** 2MB                                 |
| **Almacenamiento externo**   | Soporta Micro SD hasta 32GB (no incluida)    |
| **Wi-Fi**                   | 802.11b/g/n, 2.4GHz                          |
| **Bluetooth**               | Bluetooth 5.0 LE                             |
| **LoRa (SX1262)**           | LoRa y módem FSK  
Potencia máxima de transmisión +21dBm  
Sensibilidad RX -136dBm@SF12 BW=125KHz  
Alcance hasta 5 km                             |
| **Sensores** (Opcional)     | **CO2 (Sensirion SCD41)**  
Rango: 0-40000 ppm  
Precisión: 400-5000 ppm ±(50ppm + 5% de lectura)  

**TVOC (SGP40)**  
Rango: 1-500 puntos índice VOC  

**Sensor Grove temperatura y humedad (AHT20)**  
Rango temperatura: -40 a +85 ℃ ± 0.3 ℃  
Humedad: 0 ~ 100% RH ± 2% RH (25 ℃)             |

## Recursos

- [**PDF**]: [Ficha técnica RP2040](https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf)  
- [**PDF**]: [Ficha técnica ESP32-S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)  

## Soporte Técnico

**¿Necesitas ayuda con tu SenseCAP Indicator? ¡Estamos para ayudarte!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
