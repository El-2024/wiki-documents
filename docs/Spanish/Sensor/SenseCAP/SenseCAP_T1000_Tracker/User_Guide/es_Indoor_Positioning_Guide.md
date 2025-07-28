---
description: SenseCAP_Tracker_T1000-A/B_IPS
title: SenseCAP T1000 Indoor Positioning System Guide
keywords:
- Tracker
- BLE
- Positioning
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/IPS_For_SenseCAP_T1000_Traker
last_update:
  date: 07/24/2025
  author: Guillermo
---

# Guía del Sistema de Posicionamiento Interior SenseCAP T1000

Este capítulo ofrece una guía general sobre cómo integrar el [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) en una solución de posicionamiento interior usando Traxmate.

[Traxmate](https://traxmate.io/) es una plataforma IoT que permite a ti o a tus clientes desplegar fácil y eficientemente una solución completa de rastreo IoT, con posicionamiento interior y exterior, seguimiento y capacidades de enrutamiento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/system-archi.png" alt="pir" width={800} height="auto" /></p>

## Resumen de Arquitectura

A continuación encuentras breves resúmenes, pero por favor lee el resto del documento para tener la visión completa.

● Inicia sesión en Traxmate y crea tu(s) edificio(s).<br/>
● Despliega más puntos Wi-Fi y/o el [Despliegue de Beacons Bluetooth E5](https://wiki.seeedstudio.com/bluetooth_beacon_for_SenseCAP_Traker/#deployment-guidelines) (si es necesario).<br/>
● Realiza un levantamiento interior para verificar la precisión de la infraestructura Wi-Fi y/o Bluetooth instalada.<br/>
● Realiza un nuevo levantamiento para validar.<br/>
● Repite los pasos anteriores o comienza a usar la solución de posicionamiento interior.<br/>
● Conecta el dispositivo a [TTN](https://www.thethingsnetwork.org/) y envía datos a Traxmate.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/flow.png" alt="pir" width={800} height="auto" /></p>

## Despliegue de Beacons Wi-Fi/Bluetooth

Si aún no cuentas con una infraestructura instalada de puntos de acceso Wi-Fi y/o beacons Bluetooth, puedes hacer un despliegue optimizado para posicionamiento. La mayoría de las infraestructuras instaladas están optimizadas para rango y rendimiento de conexión de datos. Para posicionamiento, piensa en “distribuirlos y mantenerlos cerca de esquinas y paredes, y con mayor densidad donde quieras mayor precisión”.

:::tip
Los beacons Bluetooth suelen ser alimentados por batería, por lo que son más fáciles de desplegar. Los puntos Wi-Fi tienen mayor alcance. Una malla densa de beacons Bluetooth ofrece mejor precisión que una malla dispersa de puntos Wi-Fi.
:::

Consulta más detalles en [Despliegue de Beacons Bluetooth E5](https://wiki.seeedstudio.com/bluetooth_beacon_for_SenseCAP_Traker/#deployment-guidelines).

## Añadir Lugares

Navega a `Places` -> `Add New`, luego haz clic en el mapa o busca una dirección o nombre, haz clic en el popup `Add place` y envía los datos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-place.png" alt="pir" width={800} height="auto" /></p>

El siguiente paso es especificar el número de pisos del edificio y subir planos para los pisos donde desees activar el posicionamiento interior. Los planos admiten archivos PNG y JPEG. Al subirlos, usa las herramientas para escalar, rotar y posicionar correctamente el plano en el mapa. También hay herramienta para recortar la imagen según la forma del edificio.

Después de configurar el edificio, haz clic en `SAVE`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buildings.png" alt="pir" width={800} height="auto" /></p>

## Realizar el Levantamiento

Una vez agregado el edificio y subidos los planos, es momento de realizar el levantamiento usando la App Traxmate (versión Android).

:::note
La versión iOS de Traxmate no puede usarse porque iOS no permite escaneo Wi-Fi a apps de terceros.
:::

:::tip
Android limita la frecuencia de escaneo Wi-Fi a una vez cada 30 segundos. Para una encuesta más precisa, se recomienda desactivar esta limitación activando el modo desarrollador:

Ve a `Settings` > `Developer options` > busca "Wi-Fi scan throttling" > desactívalo (o `Settings > System > Advanced > Developer options`).  
Con el escaneo Wi-Fi sin limitaciones, NetSpot podrá hacer un escaneo óptimo durante el levantamiento.  
Más info [aquí](https://developer.android.com/guide/topics/connectivity/wifi-scan).
:::

Abre la app, inicia sesión, selecciona `Places` -> `Select your Place` -> `Select Floor` -> `Start Survey`.

La app escaneará continuamente Wi-Fis y Bluetooth. Debes entrenar el sistema de posicionamiento colocando repetidamente Puntos de Referencia. Mientras más puntos, mejor. El Punto de Referencia debe colocarse en el mapa donde estés físicamente ubicado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/survey1.png" alt="pir" width={600} height="auto" /></p>

● Coloca el punto de referencia haciendo zoom y desplazando el mapa para que el lugar donde estás quede bajo la mira. Cuando esté correcto, haz clic en el botón con el signo más (+).<br/><br/>
● Continúa caminando, intentando mantener una línea recta y velocidad constante. Se recomienda ir un poco más lento que el paso normal. Busca un nuevo buen lugar para el siguiente Punto de Referencia, preferentemente lugares reconocibles en el mapa, como esquinas, cruces, puertas, elevadores, escaleras, etc.<br/><br/>
● Coloca Puntos de Referencia cada 5-10 metros. Cuanto más precisos, más exacto será el posicionamiento interior.<br/><br/>
● Cuando termines de levantar toda la zona o piso, detén la encuesta con el botón rojo de stop. La encuesta se enviará al servidor y será procesada. En pocos minutos habrá un nuevo Modelo de Edificio publicado automáticamente para tu edificio (si la encuesta mejoró la precisión).

## Evaluar la Precisión Actual

Tras realizar los levantamientos, debes evaluar los resultados. Ingresa al [portal Traxmate](https://online.traxmate.io/) y visita la pestaña Positioning de tu Lugar/Edificio.  
Los datos crudos de los levantamientos serán procesados por los servidores y los resultados aparecerán como Modelos de Edificio. Los detalles del último modelo publicado se muestran en la pestaña Positioning.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/51.png" alt="pir" width={800} height="auto" /></p>

<center><i>Esta imagen muestra un error medio (mediana) de 4.33 metros. El 51% del edificio ha sido cubierto por las encuestas realizadas, y se encontró que Wi-Fis y Bluetooth (cobertura RF) cubren el 13% del edificio.</i></center>

### Modelos de Edificio y Error Mediano

Un modelo de edificio es una representación electrónica de dónde están ubicados los beacons dentro de un edificio. Se genera cuando uno o varios usuarios realizan encuestas o recorridos de referencia. Una vez finalizados, se envían al sistema para calcular un modelo de edificio.

Para cada modelo se calcula un error mediano, basado en la diferencia (error) entre la pista de referencia (puntos de referencia colocados en la encuesta) y la pista calculada (basada en el posicionamiento interior usando la API Combain Location). El sistema publica automáticamente el mejor modelo disponible, basado en combinación de tasa de cobertura y error mediano.

Este proceso automático puede ser sobreescrito manualmente publicando un modelo seleccionado. Los modelos se pueden editar para añadir o modificar beacons y mejorar el posicionamiento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model98.png" alt="pir" width={400} height="auto" /></p>

<center><i>Modelo publicado 1892 para el edificio Mattehuset1. Hay 98 modelos disponibles en total. El modelo actual incluye 179 direcciones MAC Wi-Fi únicas y cubre 4 de 6 pisos. El error mediano en todos los pisos es 4.33 m. El mejor piso fue el piso 3 con error mediano de 3.9 m.</i></center>

### Cobertura de la Encuesta, Cobertura RF y Mapa de Error Mediano

Al evaluar un modelo específico, para mejorar la precisión puede ser útil observar los mapas de Cobertura de Encuesta, Cobertura RF y Error Mediano.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sc-rf.png" alt="pir" width={800} height="auto" /></p>

### Cómo Mejorar la Precisión del Posicionamiento Interior

Si el mapa de error mediano muestra una precisión que no cumple con tus requerimientos, considera:

●  **Paso 1** - Más encuestas  
¿Has realizado encuestas en todas las áreas donde usarás posicionamiento interior? Si no, realiza más encuestas.

●  **Paso 2** - Aumentar cobertura Wi-Fi y Bluetooth  
¿Tienes Wi-Fi y Bluetooth en todas las áreas donde usarás posicionamiento interior? Si no, despliega más dispositivos en esas áreas y realiza encuestas.

●  **Paso 3** - Aumentar densidad de Wi-Fi y Bluetooth  
Tienes cobertura en todas las áreas, pero la precisión no es suficiente. Revisa la densidad y compárala con las tablas teóricas en el Apéndice 1. Si es necesario, despliega más dispositivos para mejorar.

●  **Paso 4** - Mejorar precisión de la encuesta  
Tienes cobertura y densidad adecuadas según el Apéndice 1, pero aún así la precisión no es buena. Realiza encuestas más detalladas colocando puntos de referencia con alta frecuencia (idealmente uno por metro cuadrado) y con precisión. Es crucial colocar los puntos correctamente en el mapa para evitar errores.

## Comenzando a Usar

El SenseCAP T1000 Tracker recopila información de escaneo Wi-Fi y Bluetooth, direcciones MAC y potencia de señal, y la envía a The Things Stack, luego se envía al portal Traxmate vía API.

Por favor revisa primero [Conexión a TTN](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN/) para configurar correctamente el tracker.

### Agregar dispositivo

Inicia sesión en el portal Traxmate, navega a `Devices` -> `Add new` -> `Device`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-devices.png" alt="pir" width={800} height="auto" /></p>

### Configuración TTS

Inicia sesión en [The Things Stack](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3), navega a `Integrations` → `Webhooks`, y haz clic en `Add Webhook`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

Selecciona la plantilla `Custom Webhook`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-web.png" alt="pir" width={800} height="auto" /></p>

Nombra tu Webhook ID y selecciona el formato `JSON`, luego copia la Base URL.

```cpp
https://capture.v1.traxmate.io/service/<Service Token>/device
```

Habilita los siguientes tipos de evento recomendados y luego haz clic en `Add webhook`:

* Uplink message
* Normalized uplink

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/websettings.png" alt="pir" width={800} height="auto" /></p>

### Verificar datos del dispositivo

Cuando el dispositivo esté conectado exitosamente, regresa al portal Traxmate y podrás ver los datos del dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-data.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-map.png" alt="pir" width={800} height="auto" /></p>

## Apéndice

### Requisitos de Precisión

**El método y la tecnología descritos en este capítulo son adecuados para casos de uso que requieren un error mediano de aproximadamente 2 a 10 metros.**

Los requisitos de precisión deben basarse en las necesidades del caso de uso. Algunos casos tienen exigencias mayores y presupuestos diferentes para la infraestructura de posicionamiento interior. La solución debe buscar un equilibrio entre precisión y presupuesto disponible. La regla general es que a mayor inversión y esfuerzo en infraestructura, mejor precisión. Sin embargo, muchos casos pueden ser soportados usando infraestructura existente.

Las siguientes tablas muestran la precisión estimada según la cantidad de Wi-Fis/Bluetooth y el área en metros cuadrados.

### Matriz Estimada de Precisión Interior

Las tablas a continuación muestran la precisión estimada usando posicionamiento interior basado en IA (ANN). La precisión dependerá del área a cubrir y la cantidad de puntos de acceso Wi-Fi (AP) o beacons Bluetooth desplegados.

El error mediano de precisión es:

● VERDE: de 1 hasta 5 metros
● AMARILLO: de 5 hasta 10 metros
● ROJO: más de 10 metros

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table1.png" alt="pir" width={700} height="auto" /></p>
<center><i>Tabla que muestra precisión si se realiza una encuesta muy detallada con un punto de referencia por metro cuadrado.</i></center>
<br/>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table2.png" alt="pir" width={700} height="auto" /></p>
<center><i>Tabla que muestra precisión si se realiza una encuesta detallada con un punto de referencia por 4 metros cuadrados.</i></center>
<br/>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table3.png" alt="pir" width={700} height="auto" /></p>
<center><i>Tabla que muestra precisión si se realiza una encuesta dispersa con un punto de referencia por 100 metros cuadrados.</i></center>
