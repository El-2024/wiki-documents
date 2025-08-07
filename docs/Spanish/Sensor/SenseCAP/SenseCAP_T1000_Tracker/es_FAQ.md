---
description: SenseCAP_Tracker_T1000-A/B_FAQ
title: Preguntas Frecuentes
keywords:
- Tracker
- FAQ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/faq_for_SenseCAP_T1000
last_update:
  date: 07/27/2025
  author: Guillermo
---


## Relacionado con la Ubicación

### Precisión del posicionamiento GPS

Los satélites GPS transmiten sus señales con cierta precisión, pero lo que recibes depende de factores adicionales, como la geometría de los satélites, bloqueo de señales, condiciones atmosféricas y características/diseño/calidad del receptor.

Muchas cosas pueden degradar la precisión del GPS. Causas comunes incluyen:

* Bloqueo de señal por edificios, puentes, árboles, etc.
* Uso en interiores o subterráneo
* Señales reflejadas en edificios o paredes ("multipath")

Por lo tanto, en un área amplia y despejada obtendrás mejor señal GPS y resultados más precisos.

### ¿Por qué no hay datos de ubicación GPS?

* La ubicación GPS puede no estar disponible cuando el tracker está en interiores. GNSS requiere un ambiente exterior abierto. En interiores, el GPS puede agotarse por señal débil. Asegúrate que el dispositivo esté colocado en exteriores para mejor precisión GPS.

* Asegura una instalación correcta orientando el dispositivo con el frente hacia arriba para no bloquear la antena.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/install.png" alt="pir" width={700} height="auto" /></p>

### ¿Por qué no se muestra la ubicación Wi-Fi o Bluetooth en el mapa de la App SenseCAP?

* La ubicación Wi-Fi requiere un servicio de terceros para interpretar los datos y debe ser invocado por el usuario. Actualmente la app Mate solo soporta ubicación GNSS.

* La ubicación Bluetooth depende de balizas Bluetooth y su ubicación precisa.

## Relacionado con la Red

### Red Helium

:::caution nota
Para usuarios que operan en la región **EU868**/**RU864**:

**No se recomienda** establecer el intervalo de subida menor a 4 minutos.

Si se configura un intervalo menor a 4 minutos, puede haber desalineación de tiempo entre la carga útil enviada y el tiempo actual.
:::

**Explicación:**

Debido a la restricción de [ciclo de trabajo 1%](https://www.thethingsnetwork.org/docs/lorawan/duty-cycle/#maximum-duty-cycle) en EU868, el dispositivo debe esperar aproximadamente 4 minutos para cada transmisión. Además, la red Helium solo inicia correcciones de tasa y potencia luego de acumular 20 paquetes consecutivos con bit ADR=1.

Si configuras un intervalo menor a 4 minutos, los datos en tiempo real se almacenan temporalmente en RAM y se envían cuando la red Helium realiza la corrección.

### Cómo obtener las llaves

En la página de configuración, selecciona una plataforma distinta a SenseCAP para obtener las llaves.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/get-keys.png" alt="pir" width={700} height="auto" /></p>

## Relacionado con el Botón

### Unirse a la red

Presiona y mantén presionado el botón por 3 segundos, la luz verde parpadeará lentamente, luego presiona el botón una vez, la luz verde se volverá fija y el dispositivo intentará unirse a la red LoRaWAN.

### Reinicio forzado

Mantén presionado el botón, conecta el cable de carga, suelta el botón después de conectar, la luz verde se mantendrá fija y el dispositivo se reiniciará forzadamente.


## Relacionado con la Batería

### Duración de la batería

La duración depende del intervalo de subida, uso de sensores, distancia de transmisión LoRa y temperatura de operación. El cálculo está basado en un ambiente típico (25°C) y es solo referencial.

#### EU868 (1C/SF12)

| Intervalo de subida | 1 minuto | 5 minutos | 60 minutos | 1 día |
|---------------------|----------|-----------|------------|--------|
| Duración (días)     | 2.62     | 27.21     | 106.78     | 209.3  |

#### US915 (1C/SF9)

| Intervalo de subida | 1 minuto | 5 minutos | 60 minutos | 1 día |
|---------------------|----------|-----------|------------|--------|
| Duración (días)     | 3.02     | 37.52     | 117.32     | 210.7  |

Para cálculos detallados consulta el [Formulario de cálculo de duración de batería](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/Trcaker_Battery_%20Life_Calculation_T1000_AB.xlsx).

### Estado de carga

|Estado          |Indicador                               |
|----------------|---------------------------------------|
|Cargando        | El LED parpadea una vez cada 3 segundos.|
|Carga completa  | El LED permanece siempre encendido.   |
|Anomalía carga  | Si se carga por debajo de 0 °C o arriba de 45 °C, entra en modo protección y no carga.<br/>El LED parpadea rápidamente.|

:::caution Alarma de anomalía de carga
Si el indicador `parpadea rápidamente` durante la carga, puede ser insuficiente voltaje o mal contacto.

Verifica tu fuente de alimentación o prueba otro adaptador.
:::

### ¿Cuánto tarda en cargarse completamente?

Aproximadamente **2 horas**.

### ¿Puede seguir subiendo datos mientras se carga?

Sí, puede continuar subiendo datos durante la carga.

## Relacionado con Sensores

### Sin datos de sensor

Para ahorrar energía, el sensor de temperatura/luz está deshabilitado por defecto, por lo que debes activarlo primero en la app SenseCAP Mate.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/enable-sensor.png" alt="pir" width={500} height="auto" /></p>

## Datos en Caché

### ¿Cómo funciona?

Cuando la señal LoRaWAN es débil o no hay cobertura, los datos se guardan en el dispositivo. Al regresar a área con cobertura, primero envía datos en tiempo real y luego los datos en caché.

En cada ciclo de subida, se envía primero la ubicación más reciente y luego datos almacenados. Solo se suben algunos paquetes históricos por ciclo para no afectar el ciclo de trabajo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={700} height="auto" /></p>

### Nota

El dispositivo solo puede almacenar unos 1,000 datos offline. Si permaneces mucho tiempo sin cobertura, al alcanzar el límite, datos antiguos serán sobreescritos y podrías "perder" algunos datos.

## Cómo configurar en lote

Consulta el [Inicio rápido](https://wiki.seeedstudio.com/Get_Started_with_SenseCAP_T1000_tracker/#connect-to-sensecap-mate-app) para configurar el primer dispositivo y luego usa el módulo `Template` arriba a la derecha.

Haz clic en `Save as Template`, nombra tu plantilla y confirma.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/template-save.png" alt="pir" width={600} height="auto" /></p>

Al configurar otros dispositivos, selecciona la plantilla guardada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/choose-template.png" alt="pir" width={600} height="auto" /></p>

Para compartir tu plantilla con otros, usa `Copy Link to Share` o `Download Template`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/share-temp.png" alt="pir" width={600} height="auto" /></p>

Otros usuarios pueden usar tu plantilla copiando el URL compartido o importando el archivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/import-temp.png" alt="pir" width={600} height="auto" /></p>

## Error de timestamp

Si notas que la marca de tiempo en la carga útil es incorrecta, actualiza el firmware a la última versión.

Consulta [Actualización de Firmware y Notas de Lanzamiento](https://wiki.seeedstudio.com/fm_release_for_SenseCAP_T1000/) para más detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/time-error.png" alt="pir" width={400} height="auto" /></p>

## Integración

Integrar una aplicación puede hacerse de varias maneras, según tus necesidades y objetivos. Aquí algunas opciones comunes:

* **API SenseCAP**:

Usar una Interfaz de Programación de Aplicaciones (API) permite que tu aplicación se comunique con otros servicios. Puedes conectar tu dispositivo a SenseCAP Cloud y usar la API SenseCAP para obtener datos.

SenseCAP API combina tres tipos de métodos: HTTP, MQTT y WebSocket.

Consulta [SenseCAP API](https://wiki.seeedstudio.com/Cloud_Chain/SenseCAP_API/SenseCAP_API_Introduction/) para más información.

* **Servidor de Red LoRaWAN**：

Puedes usar el [gateway SenseCAP M2 Multi-Plataforma](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) que incluye un Servidor de Red LoRaWAN para integración directa.

Consulta la [Configuración LNS](https://wiki.seeedstudio.com/SenseCAP_m2_LNS_config) para más detalles.


