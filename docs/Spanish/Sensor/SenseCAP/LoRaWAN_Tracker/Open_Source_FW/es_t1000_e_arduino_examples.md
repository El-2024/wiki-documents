---
description: Arduino examples for T1000-E user guide
title: Primeros Pasos con Arduino
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/tracker-t1000-e-for-meshtastic.webp
slug: /es/t1000_e_arduino_examples
sidebar_position: 3
last_update:
  date: 06/21/2025
  author: Guillermo
---

Los siguientes ejemplos de Arduino están disponibles:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Ejemplo</th>
      <th>Descripción</th>
    </tr>
    <tr>
      <td>Blinky</td>
      <td>Parpadeo de LED - Controla los pines GPIO para hacer que un LED parpadee, usado para pruebas de funcionamiento e indicación de estado.</td>
    </tr>
    <tr>
      <td>Button</td>
      <td>Imprime evento del botón - Detecta cambios en el estado del botón e imprime información del evento para interacción del usuario.</td>
    </tr>
    <tr>
      <td>Buzzer</td>
      <td>Reproduce sonido en bucle - Controla un buzzer para producir sonidos como recordatorios o alarmas.</td>
    </tr>
    <tr>
      <td>Sensor</td>
      <td>Imprime valores de temperatura/lux/batería - Lee e imprime datos de temperatura, intensidad de luz y voltaje de batería.</td>
    </tr>
    <tr>
      <td>Accelerometer</td>
      <td>Imprime valores ax/ay/az/evento - Recoge datos de aceleración para detección de movimiento y reconocimiento de postura.</td>
    </tr>
    <tr>
      <td>GNSS</td>
      <td>Imprime valores de latitud/longitud - Obtiene e imprime datos de ubicación basados en GNSS.</td>
    </tr>
    <tr>
      <td>LoRaWAN</td>
      <td>Conecta vía OTAA, envía datos de prueba a LNS - Se conecta a LoRaWAN y envía datos de prueba.</td>
    </tr>
    <tr>
      <td>LoRaWAN Sensor</td>
      <td>Conecta vía OTAA, lee temp/lux/bat/ax/ay/az, envía datos a LNS - Recoge y transmite varios datos de sensores vía LoRaWAN.</td>
    </tr>
    <tr>
      <td>LoRaWAN GNSS</td>
      <td>Conecta vía OTAA, escanea lat/lon, envía datos a LNS - Captura y transmite datos de ubicación GNSS en tiempo real.</td>
    </tr>
    <tr>
      <td>LoRaWAN WiFi</td>
      <td>Conecta vía OTAA, escanea MAC WiFi, envía datos a LNS - Escanea direcciones MAC WiFi y transmite datos para posicionamiento.</td>
    </tr>
    <tr>
      <td>LoRaWAN Beacon</td>
      <td>Conecta vía OTAA, escanea MAC Beacon, envía datos a LNS - Escanea y transmite datos MAC de Beacons para rastreo e identificación.</td>
    </tr>
  </table>
</div>


## Preparación

### Preparación de hardware

* SenseCAP T1000-E x 1
* Cable USB x 1
* Computadora x 1


### Preparación de software

Antes de comenzar a desarrollar, se requieren las siguientes herramientas de software.

Consulta aquí para [Comenzar con Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).

:::tip
La versión debe ser superior a la v1.6.12.
:::


## Primeros pasos

### Requisitos previos

1. Agregar URL

Navega a `Archivo` -> `Preferencias`, y agrega la siguiente URL en `URLs adicionales del Gestor de tarjetas`: 

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/add-url.png" alt="pir" width={800} height="auto" /></p>


2. Instalar placa

Ve a `Gestor de tarjetas`, busca `seeed nrf52`, selecciona la versión más reciente e instálala.



### Compilar un ejemplo

1. Seleccionar placa y puerto

**Placa**: Seeed Tracker T1000 E <br/>
**Puerto**: Puerto de tu dispositivo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/board-select.png" alt="pir" width={800} height="auto" /></p>

2. Abrir ejemplo

Navega a `Archivo` -> `Ejemplos` -> `Seeed Tracker T1000 E LoRaWAN`, luego abre un ejemplo de tu elección (en este caso el de acelerómetro):

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/example_select.png" alt="pir" width={800} height="auto" /></p>

### Subir al dispositivo objetivo

Como el bootloader del T1000-E _solo_ soporta flasheo vía `.uf2` arrastrar y soltar, no es posible subir los ejemplos directamente desde el IDE de Arduino.

En su lugar, sigue estos pasos:

1. Exporta el binario compilado desde el IDE de Arduino. Lo encontrarás en la misma carpeta que el sketch `.ino`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/export_binary.png" alt="pir" width={800} height="auto" /></p>

2. Convierte el archivo `.hex` a `.uf2` usando un script en python que puedes descargar [aquí](https://github.com/Seeed-Studio/Adafruit_nRF52_Arduino/blob/1.1.9/tools/uf2conv/uf2conv.py). Descarga y ejecuta el script con los siguientes parámetros desde una terminal:  
`python uf2conv.py -f 0xADA52840 -c -o test.uf2 <tu_archivo_hex>.hex`

3. Pon el dispositivo en modo DFU presionando y manteniendo presionado el botón del dispositivo, luego conecta rápidamente dos veces el cable de carga; el LED verde quedará fijo encendido. Ahora deberías ver el T1000-E como un dispositivo de almacenamiento masivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

4. Copia el archivo `.uf2` al dispositivo de almacenamiento masivo. Una vez copiado, el dispositivo arrancará automáticamente el nuevo firmware.

## Lectura de mensajes seriales

Los mensajes que el dispositivo imprime usando `Serial.println` y `Serial.printf` pueden leerse con el terminal integrado del IDE de Arduino.

Asegúrate de haber seleccionado y habilitado USB-CDC:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/usb_cdc.png" alt="pir" width={800} height="auto" /></p>

Luego abre el monitor serial desde `Herramientas -> Monitor Serial` y comienza a observar los mensajes:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/serial_monitor.png" alt="pir" width={800} height="auto" /></p>

## Ejemplos LoRaWAN

Los ejemplos que incluyen mensajería LoRaWAN necesitan dos pasos adicionales.

### Configurar un LNS

Necesitas un servidor de red LoRaWAN (LNS) al cual tu rastreador pueda conectarse. En este ejemplo usamos The Things Network (TTN), pero cualquiera otro debería funcionar bien.

Para trabajar con TTN, necesitas una cuenta en The Things Industries o The Things Network y acceso a un gateway (público o propio si no hay disponible).

#### Paso 1: Crear una aplicación

Navega a la página de Aplicaciones y haz clic en "+ Crear aplicación".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Ingresa un ID de Aplicación y haz clic en "Crear aplicación" para guardar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>

#### Paso 2: Registrar el dispositivo

Haz clic en "+ Registrar dispositivo final".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png" alt="pir" width={800} height="auto" /></p>

Configura los siguientes parámetros:

**Plan de frecuencia**: Selecciona el plan de frecuencia adecuado para tu región  
**Versión LoRaWAN**: Especificación LoRaWAN 1.0.4  
**Versión de parámetros regionales**: V1.0.3 REV A

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png" alt="pir" width={800} height="auto" /></p>

Ahora crea las credenciales para tu dispositivo. Genera un nuevo conjunto o ingresa las existentes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png" alt="pir" width={800} height="auto" /></p>

### Ajustar el código de ejemplo

Para que funcione, configura las credenciales del paso anterior en el código de ejemplo. También especifica la región, por ejemplo: `SMTC_MODEM_REGION_AS_923_GRP1`, `SMTC_MODEM_REGION_EU_868` o `SMTC_MODEM_REGION_US_915`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/lorawan_credentials.png" alt="pir" width={800} height="auto" /></p>

Si tu región tiene restricciones de ciclo de trabajo, asegúrate de habilitar la limitación en el manejador de reinicio:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/duty_cycle_limitation.png" alt="pir" width={800} height="auto" /></p>

### Ejecutar el código de ejemplo

Compila y flashea el ejemplo LoRaWAN igual que los otros ejemplos (crea el archivo `.uf2` y flashea vía arrastrar y soltar).

Después deberías ver mensajes entrantes en la interfaz TTN:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/ttn_live_data.png" alt="pir" width={800} height="auto" /></p>

## ✨ Proyecto colaborativo

- Este proyecto está soportado por el [Proyecto Colaborador](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) de Seeed Studio.
- Un agradecimiento especial a [Frederik](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=Support+Arduino+to+our+new+open-source+LoRaWAN+device%2C+the+new+T1000-E+for+LoRaWAN&pane=issue&itemId=94352679&issue=Seeed-Studio%7Cwiki-documents%7C2144) por sus dedicados esfuerzos. Su trabajo será [exhibido](https://wiki.seeedstudio.com/contributors/).

## Soporte técnico y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes apoyos y asegurarnos de que tu experiencia sea lo más fluida posible. Disponemos de varios canales de comunicación para atender distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>
<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>






