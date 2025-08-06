---
description: Tango with Home Assistant and SenseCAP Sensors
title: Tango with Home Assistant and SenseCAP Sensors
keywords:
- LoRaWAN
- Sensor
- Home Assistant
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/home_assistant_with_sensecap_lorawan_sensors
last_update:
  date: 07/21/2025
  author: Guillermo
---

Cómo integrar un sensor LoRaWAN® SenseCAP en Home Assistant

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527151/_HMPRnIpF0p.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="pir" width={800} height="auto" /></p>

Ya existen suficientes dispositivos inteligentes (sensores, luces, interruptores) en el ámbito del hogar inteligente, y probablemente ya tengas múltiples aplicaciones como Apple Homekit, Google Home y Amazon Alexa para controlar distintos dispositivos. Es muy necesario conectarlos todos en un mismo lugar. Leí una noticia en septiembre de 2022 sobre el lanzamiento de Matter 1.0, cuyo objetivo es unificar el ecosistema. Sin embargo, eso definitivamente tomará tiempo.

En realidad, antes del lanzamiento de Matter, [Home Assistant](https://www.home-assistant.io/) ya era una de las mejores plataformas para construir un ecosistema de hogar inteligente completamente personalizado, integrando dispositivos de las principales marcas y creando reglas de automatización para hacer de tu hogar un lugar mejor e inteligente. Eso es definitivamente algo que quiero aprender y compartir.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527037/image_AC7YowxKbT.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

En esta serie de artículos, compartiré cómo construyo un hogar inteligente funcional con Home Assistant y sensores de la línea SenseCAP de Seeed Studio. Este es el primer hito:

Ejecutar Home Assistant desde cero e integrar sensores meteorológicos SenseCAP.

### Pasos a seguir:

* Instalar Home Assistant en una Raspberry Pi  
* Incorporar el sensor SenseCAP usando la App  
* Agregar la integración MQTT y suscribirse a los datos de SenseCAP  
* Añadir entidades con los distintos valores de medición  
* Crear un panel de datos para los sensores

### Instalar Home Assistant en una Raspberry Pi

Para comenzar con Home Assistant, el [tutorial oficial](https://www.home-assistant.io/getting-started/) es muy útil.

Existen muchos dispositivos y plataformas donde puedes ejecutar Home Assistant, pero yo tenía una Raspberry Pi sin uso, así que comencé desde [aquí](https://www.home-assistant.io/installation/raspberrypi).

En lugar de usar Balena Etcher para grabar la imagen en la tarjeta SD, prefiero usar el [Raspberry Pi Imager](https://www.raspberrypi.com/software/), que es ligero y fácil de usar.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527038/image_xXpG0MaQJS.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Consigue una tarjeta micro SD mayor a 32GB y conéctala a tu computadora. Aquí uso una MacBook como ejemplo.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527041/image_vb64IHZx5B.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Navega a "otros sistemas operativos con propósito específico" y selecciona Home Assistant and Home Automation.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527042/image_xf5OXUliuo.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Selecciona Home Assistant.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527044/image_tIB5zVlxm5.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Elige la versión del sistema operativo de Home Assistant para la Raspberry Pi 4.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527045/image_UQdhYJt88T.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Luego selecciona la unidad de la tarjeta SD con cuidado. ¡NO elijas el disco equivocado! Podrías perder tus datos.

<img src="https://hackster.imgix.net/uploads/attachments/1527046/image_Le62Kc3fGH.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" />
<img src="https://hackster.imgix.net/uploads/attachments/1527047/image_tiE1gwdlBw.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" />

Puede tardar un rato en descargarse la imagen de Home Assistant, según tu velocidad de internet.

Luego inserta la tarjeta SD en la Raspberry Pi, conecta un cable ethernet y enciéndela. El LED rojo debería permanecer encendido y el LED verde comenzará a parpadear. Si el LED verde no parpadea, algo salió mal durante la grabación de la imagen.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527053/image_UaCcGJHjzs.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Ve a `http://homeassistant.local:8123/` y espera a que finalice la instalación.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527051/image_rEn7iALm78.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={400} height="auto" /></p>

Sigue este [enlace](https://www.home-assistant.io/getting-started/onboarding/) para registrar tu cuenta y acceder a Home Assistant.

¡Listo! Ya tienes Home Assistant instalado.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527055/image_5mAwRA0PMG.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### Incorporar el sensor SenseCAP usando la App

SenseCAP es una serie de sensores industriales y productos gateway. Entre ellos, los sensores LoRaWAN S210x están diseñados principalmente para escenarios de largo alcance y bajo consumo de batería.

Voy a utilizar la nueva [Estación Meteorológica S2120](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html), que planeo instalar en la azotea de mi edificio de 6 pisos. Así que la comunicación de largo alcance de LoRa resulta ideal. El kit ya incluye todos los accesorios necesarios para una instalación rápida.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527056/image_61yawsK9oe.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

La estación meteorológica funciona como un dispositivo estándar LoRaWAN, por lo que puedo utilizar una [gateway LoRaWAN SenseCAP M2 para interiores](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) en casa. Viene con una antena de 3dBi con base magnética.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527058/image_BRnDKw5tLD.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

Ahora descarga la app **SenseCAP Mate** y crea una cuenta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={500} height="auto" /></p>

Solo como referencia, este video de Seeed Studio muestra el proceso básico de incorporación:

<iframe class="youtube-video" src="https://youtu.be/TUQ9UmF7e7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Conecta la gateway M2 a Internet mediante un cable Ethernet y conecta la antena **antes** de encenderla. Cuando el LED RGB se mantenga en verde, significa que está lista.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527070/image_zEm7RxadAf.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

Ahora incorporamos la gateway M2 LoRaWAN:

* Abre la app SenseCAP Mate y ve a la pestaña **"Device"**  
* Pulsa el ícono "+" en la esquina superior derecha para escanear el código QR de la gateway (en la etiqueta del dispositivo)  
* Asigna un nombre y ubicación al dispositivo

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527073/image_xoxYLPEmeE.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Del mismo modo, escanea el código QR para incorporar el sensor meteorológico S2120. Al tocar el sensor en la app, podrás ver los datos meteorológicos disponibles:

* Temperatura del aire  
* Humedad del aire  
* Intensidad lumínica  
* Presión barométrica  
* Dirección del viento  
* Velocidad del viento  
* Lluvia por hora  
* Índice UV

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527082/image_Tr85o39OKT.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

¡Ahora es momento de ir a la azotea e instalarlo en un mástil!

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527110/img_3683_qMfEaREbxR.jpeg?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

También tengo otro sensor: [S2103 de CO₂, temperatura y humedad](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html) y el [S2105 de humedad del suelo, temperatura y EC](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html). Ambos comparten las mismas ventajas de la serie S210x y el proceso de incorporación es idéntico. Además, tienen calidad de grado industrial.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527107/image_Q55T2OnZjs.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

Así que también los agregué en la app SenseCAP Mate e instalé uno en mi dormitorio y otro en una maceta.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527108/image_rkLg6bXCX9.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Ahora, ya tengo todo listo del lado de los sensores SenseCAP.

### Agregar la integración MQTT

* **¿Por qué necesito integrar los datos del sensor en Home Assistant?**

`Puedo aprovechar los flujos de automatización en Home Assistant, y la aplicación SenseCAP actualmente no ofrece esa funcionalidad.`

* **¿Cuál es el proceso para llevar los datos de SenseCAP a Home Assistant?**

`Obtener tu clave API de la cuenta SenseCAP<br/>
Leer la documentación de la API de datos abiertos de SenseCAP (MQTT)<br/>
Agregar la integración MQTT en Home Assistant<br/>
Suscribirse a los datos de SenseCAP vía MQTT usando la clave API<br/>`

* **Ahora, vamos al portal de SenseCAP, allí puedes encontrar tu:**

`OrgID` = ID de organización<br/>
`Password` = Clave de acceso API

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527113/image_Q3vkEnuKU2.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Mi información de suscripción MQTT es la siguiente:

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527114/image_V4qotIEmN1.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

Volvamos a la interfaz web de Home Assistant.

Hay muchas integraciones disponibles en Home Assistant:

https://www.home-assistant.io/integrations/

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527115/image_igs1T1yKAk.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Hoy usaremos la integración MQTT para suscribirse a datos en formato JSON y utilizaremos la [integración de sensores MQTT](https://www.home-assistant.io/integrations/sensor.mqtt/) para vincular los valores a entidades específicas.

Ve a `Configuración > Dispositivos y servicios`.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527116/image_udflzRbXDp.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Haz clic en el botón **Agregar integración** y busca **MQTT**.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527118/image_VPTvmh0hMc.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Recuerda habilitar las **opciones avanzadas**. Si olvidas ingresar el `Client ID`, la configuración fallará.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527120/image_y4yAFffD4f.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Luego puedes probar si la suscripción funciona haciendo clic en el botón **CONFIGURAR** y escuchando el *topic* deseado.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527123/image_Fku83wMfdA.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527121/image_G5lZNHW9P5.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Espera un momento, y empezarán a llegar los mensajes del sensor.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527122/image_5pGjBZ4ZqZ.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

¡Hasta este punto, el cliente MQTT está configurado correctamente!

### Agregar entidades

Voy a añadir múltiples entidades para almacenar los datos de medición de los sensores. Por ejemplo, crearé una nueva entidad llamada **"Temperatura del aire"** que tome su valor del mensaje JSON MQTT del S2120. Después añadiré otras entidades del mismo modo.

Todo esto lo haré editando el archivo de configuración de Home Assistant (`configuration.yaml`).

```cpp
configuration.yaml
```

Ve a las configuraciones y ve a Add-ons, luego:

<img src="https://hackster.imgix.net/uploads/attachments/1527130/image_em25CYMJaj.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" /><img src="https://hackster.imgix.net/uploads/attachments/1527131/image_DfFNubnQaf.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" />

Instalalo y habilita mostrar en la barra lateral, luego haz clic en start.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527132/image_RNwnNZNnBX.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>


Ahora esta es la parte ipmortante, modifica el YAML, con los siguientes scripts

```cpp
mqtt:
  sensor:
    - name: "Air Temperature"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4097"
      unit_of_measurement: "℃"
      value_template: "{{ value_json.value }}"
    - name: "Air Humidity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4098"
      unit_of_measurement: "%RH"
      value_template: "{{ value_json.value }}"
    - name: "Light Intensity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4099"
      unit_of_measurement: "Lux"
      value_template: "{{ value_json.value }}"
    - name: "Barometric Pressure"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4101"
      unit_of_measurement: "Pa"
      value_template: "{{ value_json.value }}"
    - name: "Wind Direction"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4104"
      unit_of_measurement: "°"
      value_template: "{{ value_json.value }}"
    - name: "Wind Speed"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4105"
      unit_of_measurement: "m/s"
      value_template: "{{ value_json.value }}"
    - name: "Rainfall Hourly"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4113"
      unit_of_measurement: "mm/hour"
      value_template: "{{ value_json.value }}"
    - name: "UV Index"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4190"
      unit_of_measurement: "UV"
      value_template: "{{ value_json.value }}"
    - name: "Soil Temperature"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4102"
      unit_of_measurement: "℃"
      value_template: "{{ value_json.value }}"
    - name: "Soil Moisture"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4103"
      unit_of_measurement: "%"
      value_template: "{{ value_json.value }}"
    - name: "Electrical Conductivity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4108"
      unit_of_measurement: "dS/m"
      value_template: "{{ value_json.value }}"
    - name: "Bed Room Temperature"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4102"
      unit_of_measurement: "℃"
      value_template: "{{ value_json.value }}"
    - name: "Bed Room Humidity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4103"
      unit_of_measurement: "%RH"
      value_template: "{{ value_json.value }}"
    - name: "Bed Room CO2"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4108"
      unit_of_measurement: "ppm"
      value_template: "{{ value_json.value }}"
```

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527133/image_sWi5PsDmyl.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

guarda el archivo y ve a las herramientas de desarrollador para verificar que el archivo YAML sea correcto.

luego, reinicia Home Assistant.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527134/image_4eyghWeM61.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

después de reiniciar, asegúrate de que MQTT esté escuchando el tópico de SenseCAP.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527135/image_2zfIHuOxvC.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

luego, ve a Configuración -> Dispositivos y Servicios -> Entidades.

wow~~~ todas las mediciones del sensor están listadas ahí.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527136/image_nf7n2EARnh.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### Crear un panel de datos del sensor

El último paso es agregar las entidades de sensores a un panel.

ve a la vista general y busca la opción "Editar Panel".

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527137/image_aUUUbBvb9V.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Elige la tarjeta de entidades; esta tarjeta puede incluir múltiples valores de sensores en una sola tarjeta.

Voy a crear tres tarjetas, una para cada sensor.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527138/image_Ebs1nBNDow.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Finalmente, he realizado una integración básica para mostrar los datos del sensor SenseCAP en Home Assistant.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527146/image_zV3lKcDL3T.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Luego, dedicaré más tiempo a optimizar la interfaz y hacer que se vea bonita.

Y usaré ESP32 para añadir nuevos sensores a Home Assistant.

### Recurso

[Tango con Home Assistant y sensores SenseCAP](https://www.hackster.io/Pistachio9to5/tango-with-home-assistant-and-sensecap-sensors-1ee587)

