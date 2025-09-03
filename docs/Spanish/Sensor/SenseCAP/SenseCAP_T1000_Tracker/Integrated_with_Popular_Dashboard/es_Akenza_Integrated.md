---
description: Connect SenseCAP T1000 Tracker to Akenza
title: Integración de Akenza(via TTS)
keywords:
- Tracker
- Akenza
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_T1000_Tracker_Akenza
last_update:
  date: 07/25/2025
  author: Guillermo
---

[Akenza](https://akenza.io/) es la plataforma de habilitación de aplicaciones IoT, que te permite construir excelentes productos y servicios IoT con valor. Conecta, controla y administra dispositivos IoT; todo en un solo lugar.

En este tutorial aprenderás a integrar el [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) de Seeed con TTN en Akenza.

<div align="right">
Escrito por el equipo de Akenza
</div>

[Fuente](https://docs.akenza.io/akenza.io/tutorials/add-devices/how-to-integrate-the-seeed-sensecap-t1000-tracker-on-akenza)

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FBvnwVdfDW4JXHXEbrjs3%2FT1000%20tracker.png?alt=media&token=dedacd81-e952-4e83-90bf-f004e99adc08" alt="pir" width={400} height="auto" /></p>

:::info
**Aplicaciones**:  
Rastreo de activos interiores/exteriores para varios casos de uso: <br/>
Rastreo internacional de activos<br/>
Monitoreo de equipos<br/>
Rastreo de equipos compartidos y más.<br/>
Casos de seguridad personal (hogar de retiro, búsqueda y rescate) gracias al botón SOS y buzzer integrado.<br/>

**Características del producto**: <br/>
3 tecnologías de posicionamiento para interiores y exteriores: GNSS, Bluetooth y Wi-Fi<br/>
Sensor de temperatura, luz y movimiento<br/>
Botón SOS y buzzer<br/>
Dispositivo tamaño tarjeta con solo 6.5 mm de grosor
:::

### Primeros pasos

En este tutorial, aprenderás a registrar el tracker T1000 de Seeed en akenza usando el proveedor de conectividad The Things Network (TTN).

:::info
Aquí asumimos que no tienes una cuenta TTN existente y conectarás el dispositivo usando [Connectivity-as-a-Service](https://docs.akenza.io/akenza.io/get-started/your-integration) de akenza.

Si ya tienes cuenta en TTN, puedes sincronizarla directamente usando nuestro panel de [integraciones](https://docs.akenza.io/akenza.io/get-started/your-integration#2.-integrations).
:::

Para registrar un dispositivo nuevo en la plataforma, necesitarás crear un `Data Flow`, que define la cadena de procesamiento de datos en akenza.

### Creando un Data Flow

#### Conector de dispositivo

Para crear un **Data Flow**, ve a `Data Flow` y selecciona `Create Data Flow`.

Elige `LoRa` como tu conector de dispositivo. Si integraste tu cuenta TTN, la verás listada aquí. Si no tienes cuenta propia, puedes usar el [Connectivity-as-a-Service](https://docs.akenza.io/akenza.io/get-started/your-integration) de akenza.

Selecciona The Things Network.

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FBNwN5xlVesDpVxHQ3H4d%2FT1000-DF.png?alt=media&token=540e39fd-bea3-46dd-84a7-6af601e772f7" alt="pir" width={800} height="auto" /></p>

#### Tipo de dispositivo

El **Tipo de dispositivo** especifica el decodificador de payload que se usará para decodificar los datos del dispositivo.

Usa el campo de búsqueda para encontrar el dispositivo **T1000** y selecciona el Tipo de dispositivo correspondiente. Continúa a los conectores de salida.

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FUuglz0pXA3SEsX59cdxJ%2FT1000-DF-2.png?alt=media&token=16c0dd80-f402-4477-857b-b0de9601b27b" alt="pir" width={800} height="auto" /></p>

#### Conector de salida

Elige uno o varios conectores de salida para tu Data Flow. Los **Conectores de salida** definen dónde se almacenarán y/o procesarán los datos del dispositivo.

Continúa seleccionando **Akenza DB**.

Con la conexión a Akenza DB, aseguramos que todos los datos que pasan por este flujo se guardan en la base de datos de Akenza y así quedan accesibles para ti. Guarda tu **Data Flow** y asígnale un nombre.

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FSOGhuXN5SrmIMjchCCJP%2FT1000-DF-3.png?alt=media&token=7e43e9ab-1a9a-4609-b1c7-36ceeaf71635" alt="pir" width={800} height="auto" /></p>

### Conecta el dispositivo T1000 de Seeed

Para crear un nuevo dispositivo, selecciona `Create Device` dentro del menú de Inventario de Activos. Añade un nombre al dispositivo y opcionalmente una descripción, una [etiqueta](https://docs.akenza.io/akenza.io/get-started/create-new-device/how-to-use-tags-on-akenza) o [campos personalizados](https://docs.akenza.io/akenza.io/get-started/create-new-device/how-to-use-custom-fields-on-akenza).

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FI6gtMgKsAlazzNMO2Umz%2FT1000-CD-1.png?alt=media&token=ef5c5b56-1409-4b89-8893-66ca3bdb5822" alt="pir" width={800} height="auto" /></p>

En el siguiente paso, selecciona el **Data Flow** que creaste previamente.

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FVPZ35a4DKdujIqlP84gR%2FT1000-CD-2.png?alt=media&token=73ced82f-ea7b-436c-a42d-36dc44ec3f12" alt="pir" width={800} height="auto" /></p>

Ahora llena todos los **Parámetros de conectividad** de tu tracker T1000. Estos son proporcionados por el fabricante del dispositivo.

Termina el proceso haciendo clic en Crear dispositivo.

Tu dispositivo tracker T1000 ahora aparecerá en el **Inventario de Activos**.

Para revisar los datos entrantes de tu dispositivo, selecciona tu dispositivo de la lista y revisa el estado en la **Vista de datos**.

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2Fllgd7HtP8VBZbAgeNU4M%2FT1000-Asset.png?alt=media&token=2665b736-aed6-4533-b7bb-aaa5542f5d67" alt="pir" width={800} height="auto" /></p>

**¡Felicidades!** Has conectado exitosamente el tracker Seeed SenseCAP T1000-A en akenza vía la red TTN LoRaWAN.

### Cómo configurar el tracker vía Bluetooth

La app SenseCAP Mate de Seeed te permite configurar los diferentes modos de trabajo y otras opciones del tracker.<br/>
Para iOS, busca “SenseCAP Mate” en la App Store y descárgala.<br/>
Para Android, busca “SenseCAP Mate” en Google Play y descárgala.<br/>
Consulta la [Guía de usuario](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide.pdf) del dispositivo para una descripción detallada de los modos de trabajo y configuraciones.

### Cómo configurar el tracker vía LoRa Downlink

Como alternativa a la app móvil, puedes configurar el tracker T1000 directamente usando paquetes de [downlink](https://docs.akenza.io/akenza.io/get-started/connectors/downlink).<br/>
Para ello, navega a la página de detalles del dispositivo y selecciona la pestaña Downlink.<br/>
Introduce el payload HEX correcto y el número de puerto, y luego haz clic en Enviar mensaje.<br/>
Consulta la [Guía de usuario](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide.pdf) para una descripción detallada de los modos y configuraciones.

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2F5KtoZmSstaZQ7vMLevdo%2FT1000-downlink.png?alt=media&token=e8d29de7-9b7a-4c57-8376-443ceb8c9ee1" alt="pir" width={800} height="auto" /></p>

### 🚀Avanzando con geovallas y vista de mapa

Ahora que recibes datos de ubicación de tu dispositivo, puedes aprovechar otras funciones de rastreo de activos de akenza, como el bloque lógico de geovallas y el constructor de dashboards.

#### Bloque lógico de geovallas

Crea acciones y notificaciones basadas en la ubicación de tu dispositivo gracias a nuestro bloque de geovallas sin código.

Simplemente especifica una entrada de datos, en este caso el tracker T1000, añade el bloque de geovalla, crea tu cerca personalizada y finalmente define una acción que se active cuando el dispositivo entre o salga de la cerca.

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FhlQoCpjhK7JyUYmUTGSg%2FT1000-geofense.png?alt=media&token=835f6423-4474-44d6-8712-cd6c500e6f7f" alt="pir" width={800} height="auto" /></p>

#### Vista de mapa en el constructor de dashboards

Muestra la posición de tu tracker T1000 en tiempo real gracias al componente de mapa del constructor de dashboards.

Solo ve al Constructor de dashboards y crea uno nuevo. Alternativamente, puedes usar la plantilla de Rastreo de Activos como punto de partida. Añade un componente Mapa y selecciona el tracker T1000 como fuente de datos. Selecciona las lecturas de Latitud y Longitud del sensor y añade puntos de datos de marcador adicionales si es necesario (por ejemplo, carga de batería).

Ahora puedes seguir tus activos en tiempo real en el mapa e incluso mostrar su ruta haciendo clic en Rastrear junto al ícono del dispositivo.

​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FaCi1AyERgs0q0L1Gidjq%2FT1000-map.png?alt=media&token=5d461816-1e73-48ab-bbd8-3edb8bc139f8" alt="pir" width={800} height="auto" /></p>