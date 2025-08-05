---
title: Wio Lite MG126
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Lite-MG126/
slug: /es/Wio-Lite-MG126
last_update:
  date: 06/25/2025
  author: Guillermo
---

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/Wio-Lite-MG126-wiki.jpg)

Wio Lite MG126 es una placa de desarrollo económica basada en SAMD21 con el módulo Bluetooth MG126 integrado. SAM D21 es un microcontrolador basado en ARM Cortex-M0+ y el MG126 es un transceptor Bluetooth de modo único de 2.4GHz. Al igual que Wio Lite W600, esta placa también es compatible con Arduino Zero (usa el mismo Arduino Core SAM D21) y tiene el mismo factor de forma compatible con la serie Adafruit Feather.

Desplegamos los pines I/O de 3.3V del SAM D21, el chip SAM D21 tiene abundantes recursos I/O, incluyendo 14 pines digitales, 6 pines analógicos, 1 puerto UART, 1 puerto I2C y 1 puerto ICSP. Cada vez más placas de Seeed usan interfaces tipo C para suministro de energía y transmisión de datos, y Wio Lite MG126 no es la excepción. Además, cuenta con un puerto de batería Li-Po JST2.0, que permite usar baterías Li-Po de 3.5V o 4.2V para alimentar la placa.

Ahora, hablemos del núcleo Bluetooth, el MG126. MG126 es un transceptor RF BLE de 2.4GHz con registros configurables por software y motor de manejo de paquetes embebido. Puede operar con ultra bajo consumo energético. La tasa de datos por aire Bluetooth de MG126 es de 1Mbps y puede comunicarse con el core Arduino a una velocidad de 4Mbps vía interfaz SPI.

<p style={{}}><a href="https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Compatible con Arduino Zero / Compatible con Adafruit Feather
- Operación en banda ISM 2.4GHz con espaciamiento de canal de 2MHz
- Tasa de datos por aire de 1Mbps
- Ultra bajo consumo energético

## Especificaciones

|Parámetro|Valor|
|---|--------|
|**Controlador principal**||
|Microcontrolador|SAM D21|
|Pines digitales I/O|14|
|Canales de entrada analógica|6|
|Corriente DC por pin I/O|40 mA|
|Voltaje de entrada I/O|3.3 V|
|SRAM|32 KB|
|Flash|256 KB|
|Frecuencia máxima CPU|48 MHz|
|**Bluetooth**||
|Núcleo Bluetooth|MG126|
|Banda de frecuencia|ISM 2.4GHz|
|Tasa de datos|1Mbps por aire|
|Comunicación con MCU|SPI (máx. 4Mbps)|
|Transmisor|Potencia de salida programable: -28 ~ +4 dBm sin PA RF externo; 20mA a 0dBm de potencia de salida|
|Receptor|Filtros de canal integrados; sensibilidad -85 dBm; ganancia LNA programable|
|Antena|Antena PCB integrada|
|Distancia máxima de conexión Bluetooth|10 m|
|**Otros**||
|Puerto de alimentación|USB Tipo C, batería JST2.0 LiPo|
|Voltaje de operación|USB 5V, batería 4.2 V|
|Fusible recuperable|Protección de corriente 1A|
|Corriente de carga de batería|400 mA|

## Descripción general del hardware

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/Hardware-overview.jpg)

:::tip
- La antena PCB no debe quedar cubierta por metal al montarla, de lo contrario se atenuará la señal Bluetooth.
- Los terminales positivo y negativo de la batería están indicados en la parte trasera del módulo. Está estrictamente prohibido invertir los terminales positivo y negativo de la batería.
:::

## Comenzando

Antes de empezar, descarga la app **nRF Connect** desde Google Play o Apple Store. **nRF Connect** es compatible con funciones estándar del protocolo Bluetooth y todos los ejemplos han sido probados con esta app.

## Hardware

**Materiales requeridos**

- Wio Lite MG126 x1  
- Computadora x1  
- Cable USB tipo C x1  
- Jumpers x1

:::tip
Algunos cables USB solo suministran energía y no transfieren datos. Si no tienes un cable USB o no sabes si tu cable puede transferir datos, revisa [Soporte USB tipo C de Seeed con USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).
:::

Conecta la Wio Lite MG126 a tu computadora mediante el cable USB.

## Software

### Paso 1. Instala el software Arduino

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Inicia la aplicación Arduino**

Haz doble clic en la aplicación Arduino (arduino.exe) que descargaste previamente.

:::note
Si el software Arduino carga en un idioma distinto, puedes cambiarlo en el diálogo de preferencias. Consulta la [página de Arduino Software (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para más detalles.
:::

### Paso 2. Agrega la placa Wio Lite MG126 al Arduino IDE

Abre tu Arduino IDE, haz clic en **Archivo > Preferencias** y copia la siguiente URL en “Gestor de URLs adicionales de placas”:

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```


![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/preference.png)

Haz clic en **Herramientas > Placa > Gestor de placas**. Busca la placa por nombre, escribe la palabra clave `Seeeduino_Wio_Lite_MG126` e instala la placa correspondiente.

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-2.jpg)

### Paso 3. Selecciona tu placa y puerto

Necesitas seleccionar la opción en el menú **Herramientas > Placa** que corresponda a tu Arduino, selecciona **Wio Lite MG126**.

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-4.jpg)

Selecciona el dispositivo serial de la placa Arduino desde el menú Herramientas | Puerto serial. Probablemente sea COM3 o superior (**COM1** y **COM2** suelen estar reservados para puertos seriales hardware). Para confirmarlo, desconecta la placa Arduino y abre el menú; la opción que desaparezca será tu placa. Luego reconecta la placa y selecciona ese puerto serial.

:::caution
Puede que no encuentres los ejemplos de MG126 en la pestaña **Archivo > Ejemplos** antes de seleccionar la placa Wio Lite MG126. Al seleccionar la placa, los ejemplos aparecerán aquí.
:::

### Paso 4. Abre el demo

Descarga la [librería MG126](https://github.com/Seeed-Studio/Seeed_Arduino_MG126) desde GitHub de Seeed. Luego sigue la guía [Cómo instalar librerías en Arduino](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) para instalar la librería en Arduino.  
Haz clic en **Archivo > Ejemplos > Seeeduino Wio Lite MG126 > analog_output**.

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-5.png)

Puedes encontrar 7 demos en esta carpeta. Los demos `button` y `get_bat_vol` no usan la librería Bluetooth, los demás sí.

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-6.jpg)

|Nombre del Demo|Función|DeviceInfo|
|-----|-----|----|
|analog_output|Obtiene el valor analógico en la placa de desarrollo vía Bluetooth y lo muestra en la app móvil.|Wio_BLE_Analog|
|button|Presiona el botón de usuario integrado y muestra el resultado en el monitor serial.||
|echo_ble|Servidor eco Bluetooth, es decir, el móvil recibe datos enviados por la placa de desarrollo.|Wio_Lite_BLE|
|get_bat_vol|Obtiene el voltaje de la batería externa.||
|rgb_led_matrix_control|Controla la [Matriz LED RGB Grove](https://www.seeedstudio.com/Grove-RGB-LED-Matrix-w-Driver.html) para mostrar información.|Wio_Led_matrix|
|serial_transparent_transmission|Los datos seriales se transmiten transparentemente, los datos enviados desde el móvil son enviados al puerto serial de la placa, y los datos enviados al puerto serial son enviados al móvil.|Wio_Lite_Serial|
|temp_humidity|Obtiene información del [Sensor de Temperatura y Humedad Grove I2C Alta Precisión (SHT35)](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html) y la envía al móvil.|Wio_BLE_T&H|

### Paso 5. Carga el programa

Ahora, simplemente haz clic en el botón **"Subir"** en el entorno. Espera unos segundos y si la carga es exitosa, aparecerá el mensaje **"Done uploading."** en la barra de estado.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" />
  </figure>
</div>

Cuando finalice, la información **Done Uploading** aparecerá en la esquina inferior izquierda del Arduino IDE.

### Paso 6. Conecta el MG126 con el teléfono

Abre la app [nRF Connect](#getting-started), haz clic en **SCANNER** y busca el nombre del DeviceInfo en esta página. Los diferentes demos tienen distintos DeviceInfo, y el DeviceInfo correspondiente para `analog_output` es `Wio_BLE_Analog`.

Selecciona `Wio_BLE_Analog` en la lista de dispositivos Bluetooth. Toca **CONNECT**, luego haz clic en **Automation IO > Analog**, y se mostrará el valor del pin A0.

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/ana-0.jpg)

:::caution
Debido a la función de caché del Bluetooth, cada vez que modifiques el valor de la característica Bluetooth (es decir, descargues un ejemplo con diferentes funciones Bluetooth), necesitas borrar la caché de la app una vez y también reiniciar el teléfono.
:::

## Interfaz de funciones

### Interfaz de función WiFi

- 1. Clase del paquete Bluetooth

```
MG126_Ble  
```

- 2. Inicializar la pila de protocolos Bluetooth y activar Bluetooth

```
MG126_Ble .ble_init();
```

- 3. Reportar mensajes vía Bluetooth

```
sconn_notifydata();
```

Aquí solo se listan algunas interfaces comunes, otras pueden consultarse en el ejemplo.

## Visor de esquemáticos online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio-Lite-MG126/res/Wio%20Lite%20MG126.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Archivos esquemáticos Wio Lite MG126](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/res/Wio%20Lite%20MG126.zip)

- **[PDF]** [Hoja de datos DS-MG126-BLE](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/res/DS-MG126-BLE.pdf)

## Soporte técnico y discusión del producto

Si tienes algún problema técnico, por favor envía tu consulta a nuestro [foro](http://forum.seeedstudio.com/).  
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>