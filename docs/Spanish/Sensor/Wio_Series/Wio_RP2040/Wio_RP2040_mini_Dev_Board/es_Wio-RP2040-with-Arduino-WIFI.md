---
title: Wio RP2040 mini Dev Board con Arduino
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-RP2040-with-Arduino-WIFI/
slug: /es/Wio-RP2040-with-Arduino-WIFI
last_update:
  date: 07/25/2025
  author: Guillermo
---

# **Wio RP2040 mini Dev Board con Arduino**

En esta guía usaremos la placa Wio RP2040 mini Dev Board para transmitir datos mediante MQTT y Socket con Arduino.

## **Hardware necesario**

* [Wio RP2040 mini Dev Board](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html) x1
* Computadora x1
* Cable USB tipo C x1

### Pasos iniciales:

1. Prepara la placa Wio RP2040 mini Dev Board y un cable USB Tipo-C.
2. **Mantén presionado** el botón 'BOOT' mientras conectas la placa a la computadora.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_5.png)

3. Una vez conectada, verifica si aparece un disco en tu computadora. Si todo es correcto, el LED rojo de encendido debe iluminarse y una unidad nueva debe mostrarse.

## **Software**

Antes de cargar el código y transmitir datos, se debe configurar el servidor.

### **Comunicación con MQTT**

MQTT es un protocolo cliente-servidor de tipo publicación/suscripción. Los clientes pueden actuar como publicadores, suscriptores o ambos.

#### **Configuración del servidor MQTT**

Descarga e instala el [software MQTTX](https://github.com/emqx/MQTTX/) en tu computadora. Si no está disponible en tu región, puedes utilizar otro servidor MQTT.

**Servidor gratuito usado en este proyecto:**

* Dirección: `mqtt.p2hp.com`
* Puertos: 1883 (TCP), 8083 (WebSocket)
* Tipo: EMQ
* Compatibilidad: MQTT V3.1.1/V5.0

Configura una nueva conexión en MQTTX rellenando nombre, servidor, puerto y tópico, luego haz clic en "Connect".

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_12.png)

Una vez conectado, configura el **tópico** con el nombre `temperature`.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window5.png)

### **Código Arduino con MQTT**

1. **Instala el entorno Arduino IDE** desde: [https://www.arduino.cc/en/software](https://www.arduino.cc/en/software)

2. **Descarga el ejemplo** [MQTT.ino](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/MQTT.ino) y ábrelo en el IDE de Arduino.

3. **Agrega soporte para Wio RP2040 mini**:

   * Ve a **Archivo > Preferencias** y añade esta URL:
     `https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json`

   * Luego ve a **Herramientas > Placa > Gestor de placas**, busca `XIAO RP2040` e instala la placa.

4. **Selecciona la placa**:

   * Herramientas > Placa > "Wio RP2040 Mini Dev Board"

5. **Sube el código** y abre MQTTX para ver los resultados.

Si envías mensajes al mismo tópico (`temperature`), se mostrarán en el **Monitor Serie** del IDE de Arduino.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window16.png)

### **Comunicación con Socket (TCP)**

Vamos a crear un servidor TCP en tu computadora usando [NetAssist](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/NetAssist.exe).

#### **Configuración del servidor TCP**

1. Ejecuta `NetAssist.exe`
2. Selecciona "TCP Server" como protocolo.
3. Configura `Local host addr` y `Local host port`, luego haz clic en "Open" para iniciar el servidor.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window14.png)

### **Código Arduino con Socket**

1. **Descarga el ejemplo** [Socket.ino](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Socket.ino) y ábrelo.

2. **Selecciona la placa** desde el menú Herramientas.

3. **Sube el programa** y observa en NetAssist si se reciben los mensajes.

Si envías mensajes desde NetAssist, también aparecerán en la interfaz, siempre que el IP y puerto coincidan.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window11.png)

## Soporte técnico y discusión

Si tienes problemas técnicos, por favor publícalos en nuestro [foro oficial](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para ayudarte y hacer que tu experiencia sea lo más fluida posible, ofreciendo distintos canales de soporte según tus necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
