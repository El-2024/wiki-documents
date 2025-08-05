---
description:  LoRa Node with AIoTs GPS
title:  Nodo LoRa con GPS AIoTs
keywords:
- Wio_terminal 
- Embedded_ML 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/AIoTs_GPS_state_tester
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Nodo LoRa con GPS AIoTs en Wio Terminal

## Introducción

El comprobador de GPS y estado AIoTs está basado en el Wio Terminal Chassis-LoRa-E5 y GNSS. En comparación con el IoT tradicional, este enfoque es más conciso e inteligente. Mientras que el IoT tradicional simplemente recibe datos y ejecuta comandos sin verificar su validez, el AIoTs usa algoritmos de redes neuronales para filtrar datos inúctiles y conservar solo los correctos.

En este proyecto se utilizará el sensor acelerómetro de 3 ejes incorporado y algoritmos de redes neuronales para construir un sistema de reconocimiento inteligente. Dependiendo del movimiento del Wio Terminal, este puede mostrar su estado en tiempo real. El proyecto incluye tres estados entrenados: Stop (estado inactivo), Turn (giro del dispositivo) y Wave (agitar el dispositivo con la mano). Se recomienda visitar [Edge Impulse](https://www.edgeimpulse.com/) para añadir más acciones de entrenamiento.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png" /></div>

## Características

* Muestra el DevEUI, AppEUI y AppKey en la primera página
* Algoritmo de red neuronal para validar datos
* Detección precisa del estado del Wio Terminal
* Muestra longitud, latitud y número de satélites
* Muestra el estado de conexión del dispositivo y TTN

## Primeros pasos

### Hardware necesario

* [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
* [Chasis Wio Terminal - LoRa-E5 y GNSS](https://www.seeedstudio.com/Wio-Terminal-Chassis-LoRa-E5-and-GNSS-p-5053.html)
* [Chasis Wio Terminal - Batería (opcional)](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)

**Conexión del hardware**

Se conecta a la computadora mediante un cable Type-C.

![](https://files.seeedstudio.com/wiki/Alots/connectpc.jpg)

### Aprendizaje automático con Wio Terminal

Este proyecto se basa en la plataforma Arduino, por lo que necesitarás el IDE de Arduino y varias bibliotecas.

Guía recomendada: [Comenzar con Wio Terminal](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/).

Instala en tu biblioteca Arduino:

* [Seeed\_Arduino\_SFUD](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD)

#### Entrenamiento en Edge Impulse

**Paso 1.** Regístrate en [Edge Impulse](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1)

![](https://files.seeedstudio.com/wiki/Alots/Alots1.png)

**Paso 2.** Crea un nuevo proyecto

![](https://files.seeedstudio.com/wiki/Alots/Alots2.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots3.png)

#### Conexión del Wio Terminal al sitio web

**Paso 3.** Descarga el firmware [wio-terminal-ei-1.4.0.uf2](https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2)

Conecta el Wio Terminal a tu PC y presiona dos veces el botón izquierdo inferior. Aparecerá una unidad (por ejemplo, `Arduino (F:)`). Arrastra el archivo `.uf2` a esta unidad. Cuando desaparezca, significa que el firmware fue programado correctamente.

![](https://files.seeedstudio.com/wiki/Alots/Alots5.png)

**Paso 4.** Haz clic en `connect using WebUSB` para vincular el Wio Terminal al sitio.

![](https://files.seeedstudio.com/wiki/Alots/Alots4.png)

Cuando veas los campos `Device`, `Label` y `Sensor`, estás listo para adquirir datos.

![](https://files.seeedstudio.com/wiki/Alots/Alots6.png)

#### Adquisición de datos

**Paso 5.** Ingresa un `Label`, la `duración` y haz clic en `Start sampling`.

![](https://files.seeedstudio.com/wiki/Alots/Alots8.png)

Se recomienda tomar más de 10 muestras por clase.

![](https://files.seeedstudio.com/wiki/Alots/Alots9.png)

#### Generación del modelo ML

**Paso 6.** Tras obtener los datos, ve a `Create impulse`, selecciona los bloques de procesamiento y aprendizaje, luego haz clic en `Save Impulse`.

![](https://files.seeedstudio.com/wiki/Alots/Alots10.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots11.png)

**Paso 7.** Ve a `Spectral features`, haz clic en `Save parameters` y luego en `Generate features`.

![](https://files.seeedstudio.com/wiki/Alots/Alots12.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots13.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots15.png)

**Paso 8.** En `NN Classifier`, haz clic en `Start training` para generar el modelo.

![](https://files.seeedstudio.com/wiki/Alots/Alots16.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots17.png)

#### Despliegue del modelo

**Paso 9.** En la sección `Deployment`, selecciona `Arduino Library`, haz clic en `Build` y se descargará una biblioteca en formato zip.

![](https://files.seeedstudio.com/wiki/Alots/Alots18.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots19.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots20.png)

**Paso 10.** Descarga el [código](https://github.com/0hotpotman0/AIoTs_GPS_state_tester) de GitHub, ábrelo con Arduino IDE y reemplaza la biblioteca por la descargada.

![](https://files.seeedstudio.com/wiki/Alots/Alots22.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots35.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots36.png)

![](https://files.seeedstudio.com/wiki/Alots/connect1.jpg)

## Visualización de datos en TheThingsNetwork con LoRa

### Requisitos

* Gateway compatible con LoRaWAN

### Configuración en TheThingsNetwork

**Paso 1.** Regístrate en [TTN](https://www.thethingsnetwork.org/) y crea una cuenta. Ve a `Go to gateways`.

![](https://files.seeedstudio.com/wiki/Alots/Alots24a.png)

**Paso 2.** Haz clic en `Add gateway` y completa:

* Owner
* Gateway ID
* Gateway EUI
* Gateway name
* Frecuencia regional (ej. EU868, CN470, etc.)

![](https://files.seeedstudio.com/wiki/Alots/Alots25.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots26.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots27.png)

**Paso 3.** Agrega una nueva aplicación y luego haz clic en `Add end device`

![](https://files.seeedstudio.com/wiki/Alots/Alots28.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots29.png)

**Paso 4.** En el registro del dispositivo:

* Brand: `Select Sense CAP`
* Model: `LoRa-E5`
* Region y Frequency plan igual al gateway
* Obtén AppEUI, DevEUI y AppKey cargando el firmware [Gateway\_Tester.uf2](https://files.seeedstudio.com/wiki/Alots/Gateway_Tester.uf2)

![](https://files.seeedstudio.com/wiki/Alots/Alots31.png)

**Paso 5.** En `Payload formatters`, selecciona `Javascript` y agrega:

```js
function Decoder(bytes, port) {
  var decoded = {};
  if (port === 8) {
    decoded.Stop = bytes[1];
    decoded.Turn = bytes[3];
    decoded.Wave = bytes[5];
  }
  return decoded;
}
```

![](https://files.seeedstudio.com/wiki/Alots/Alots32.png)

**Paso 6.** Ve al gateway y haz clic en `Live data` para ver los resultados:

![](https://files.seeedstudio.com/wiki/Alots/Alots33a.png)
