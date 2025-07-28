---
description: Overview
title: Vista General del ReSpeaker 2-Mics Pi HAT
keywords:
- ReSpeaker_2-Mics_Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ReSpeaker_2_Mics_Pi_HAT
last_update:
  date: 07/19/2025
  author: Guillermo
---

![](https://files.seeedstudio.com/products/107100001/01.png)

ReSpeaker 2-Mics Pi HAT es una placa de expansión con dos micrófonos para Raspberry Pi diseñada para aplicaciones de IA y voz. Esto significa que puedes construir un producto de voz más potente y flexible que integre Amazon Alexa Voice Service, Google Assistant, entre otros.

La placa está desarrollada sobre el códec estéreo de bajo consumo WM8960. Tiene 2 micrófonos a ambos lados para la captura de sonido y proporciona 3 LEDs RGB APA102, 1 botón de usuario y 2 interfaces Grove a bordo para expandir tus aplicaciones. Además, cuenta con salida de audio por conector de 3.5 mm o conector JST 2.0 para altavoz.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- Compatible con Raspberry Pi (soporta Raspberry Pi Zero y Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ y Raspberry Pi 4)
- 2 Micrófonos
- 2 Interfaces Grove
- 1 Botón de usuario
- Jack de audio de 3.5 mm
- Salida para altavoz JST 2.0
- Frecuencia máxima de muestreo: 48 kHz

## Ideas de Aplicación

- Aplicaciones de interacción por voz
- Asistentes de IA

## Vista General del Hardware

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/mic_hatv1.0.png)

- **BUTTON**: Botón de usuario conectado a GPIO17  
- **MIC_L y MIC_R**: 2 micrófonos a ambos lados de la placa  
- **RGB LED**: 3 LEDs RGB APA102 conectados a la interfaz SPI  
- **WM8960**: códec estéreo de bajo consumo  
- **Conectores de 40 pines para Raspberry Pi**: compatible con Raspberry Pi Zero, Raspberry Pi 1 B+, Raspberry Pi 2 B, Raspberry Pi 3 B y Raspberry Pi 3 B+  
- **POWER**: puerto Micro USB para alimentar la placa, se recomienda proporcionar corriente suficiente cuando se use altavoz  
- **I2C**: puerto Grove I2C conectado a I2C-1  
- **GPIO12**: puerto digital Grove conectado a GPIO12 y GPIO13  
- **JST 2.0 SPEAKER OUT**: para conectar altavoz con conector JST 2.0  
- **Jack de audio 3.5mm**: para conectar auriculares o altavoz con plug de 3.5 mm

## Plataformas Soportadas

<div align="center"><img src="https://files.seeedstudio.com/products/107100001/01.png"/></div>

* **[Comenzar con Raspberry Pi](https://wiki.seeedstudio.com/ReSpeaker_2_Mics_Pi_HAT_Raspberry)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/JetsonNano-2MICS.png"/></div>

* **[Comenzar con Nvidia Jetson Nano Series](https://wiki.seeedstudio.com/ReSpeaker_2_Mics_Pi_HAT_Jetson)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/IMX6-2MIC-removebg-preview.png"/></div>

* **[Comenzar con NPi i.MX6ULL Dev Board Linux SBC](https://wiki.seeedstudio.com/NPi-i.MX6ULL-Dev-Board-Linux-SBC/#iis)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/STM32-2MIC-removebg-preview.png"/></div>

* **[Comenzar con ODYSSEY – STM32MP157C](https://wiki.seeedstudio.com/ODYSSEY-STM32MP157C/#i2s-on-odyssey-stm32mp157c)**

## Habilitando Reconocimiento de Voz en el Edge con Picovoice

<div align="center"><img width = "{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/banner.gif"/></div>

[**Picovoice**](https://picovoice.ai/) **permite a las empresas innovar y diferenciarse rápidamente con IA privada por voz**. Construye una estrategia unificada de IA alrededor de tu marca y productos con nuestras tecnologías de reconocimiento de voz y [**entendimiento del lenguaje natural (NLU)**](https://searchenterpriseai.techtarget.com/definition/natural-language-understanding-NLU).

**Seeed ha colaborado con Picovoice para llevar soluciones de reconocimiento de voz en el edge usando el [ReSpeaker 2-Mic Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html) para desarrolladores.**

Picovoice es una plataforma completa para crear productos de voz a tu manera. Permite crear experiencias de voz similares a Alexa y Google, pero funciona 100% en el dispositivo. Sus ventajas:

- **Privacidad**: Todo se procesa offline, cumpliendo intrínsecamente con HIPAA y GDPR.  
- **Confiabilidad**: Funciona sin necesidad de conexión constante.  
- **Latencia Cero**: Arquitectura edge-first que elimina retrasos impredecibles de red.  
- **Precisión**: Resistente al ruido y reverberación, superando ampliamente a soluciones en la nube.  
- **Multiplataforma**: Diseña una vez, despliega en cualquier lugar. Usa lenguajes y frameworks familiares.

## Detección de Palabras Clave Open-Source con Mycroft Precise

Además de Picovoice, ofrecemos soporte limitado para Mycroft Precise, un paquete open-source para detección en tiempo real de palabras clave. Mycroft Precise es totalmente open source y puede entrenarse para reconocer desde nombres hasta tos. Está diseñado para Linux y funciona en varias distribuciones como Debian, Ubuntu y Raspbian. Según el README oficial, "probablemente funciona en otras distribuciones *nx".

Mycroft Precise tiene licencia Apache-2.0, lo que significa que puedes modificarlo y distribuirlo, incluso con fines comerciales, siempre que mantengas la licencia original.

**Puedes encontrar ejemplos para productos Picovoice y Mycroft Precise en la documentación de inicio rápido para cada plataforma.**

## Visor Online del Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/ReSpeaker 2-Mics Pi HAT.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* **[Eagle]** [Respeaker_2_Mics_Pi_HAT_SCH](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_SCH.zip)
* **[Eagle]** [Respeaker_2_Mics_Pi_HAT_PCB](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_PCB.zip)
* **[PDF]** [Respeaker_2_Mics_Pi_HAT_SCH](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_SCH.pdf)
* **[PDF]** [Respeaker_2_Mics_Pi_HAT_PCB](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_PCB.pdf)
* **[3D]** [ReSpeaker 2 Mics Pi HAT 3D](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT.zip)
* **[Driver]** [Seeed-Voice Driver](https://github.com/respeaker/seeed-voicecard)
* **[Algoritmos]** [Algorithms includes DOA, VAD, NS](https://github.com/respeaker/mic_array)
* **[Motor de Voz]** [Voice Engine project, provides building blocks to create voice enabled objects](https://github.com/voice-engine/voice-engine)
* **[Algoritmos]** [AEC](https://github.com/voice-engine/ec)

## Proyectos

**Construye tu propio Amazon Echo usando una Raspberry Pi y ReSpeaker HAT**  
Cómo construir tu propio Amazon Echo con Raspberry Pi y ReSpeaker 2-Mics HAT.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/idreams/build-your-own-amazon-echo-using-a-rpi-and-respeaker-hat-7f44a0/embed' width='350'></iframe>

**Tu barista personal cobra vida con esta cafetera activada por voz**  
Una cafetera open-source, privada por diseño, que mantiene tu café favorito y horario de cafeína en privado.

<iframe width="800" height="450" src="https://www.youtube.com/embed/4gN1bvl24ZM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos!  
Estamos aquí para brindarte soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible.  
Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
