---
title: Conexión de Wio Terminal a Microsoft Azure IoT Central
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central/
slug: /es/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central
last_update:
  date: 07/27/2025
  author: Guillermo
---
# Conectar Wio Terminal a Microsoft Azure IoT Central

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>

## Introducción
En este tutorial, te guiaremos en el proceso para conectar el Wio Terminal a Microsoft Azure IoT Central y enviar datos de telemetría desde los sensores/hardware integrados del Wio Terminal, tales como el acelerómetro de 3 ejes, sensor de luz y 3 botones, hacia Microsoft Azure IoT Central.  
Luego podrás visualizar los datos del sensor en dashboards interactivos. Además, podrás usar Azure IoT Central para controlar hardware, como activar el buzzer integrado del Wio Terminal.  
Microsoft Azure IoT Central soporta los protocolos HTTP, MQTT y AMQP para la comunicación, pero en este tutorial usaremos el protocolo MQTT.

### ¿Qué es Microsoft Azure?

[Microsoft Azure](https://azure.microsoft.com) es la plataforma pública de computación en la nube de Microsoft. Puedes usar Microsoft Azure para construir, probar, desplegar y administrar aplicaciones y servicios a través de centros de datos gestionados por Microsoft.  

Además, provee una variedad de servicios en la nube, incluyendo computación, análisis, almacenamiento y redes. Microsoft Azure ofrece software como servicio (SaaS), plataforma como servicio (PaaS), infraestructura como servicio (IaaS) y soluciones serverless. Finalmente, soporta múltiples lenguajes de programación, herramientas y frameworks.

### ¿Qué es Microsoft Azure IoT?

[Microsoft Azure IoT](https://azure.microsoft.com/en-us/overview/iot) es un conjunto de servicios gestionados por Microsoft que conectan, monitorean y controlan miles de millones de dispositivos IoT. Incluye seguridad y sistemas operativos para dispositivos, junto con datos y análisis que ayudan a las empresas a construir, desplegar y gestionar aplicaciones IoT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png" alt="pir" width={1200} height="auto" /></p>

### ¿Qué es Microsoft Azure IoT Central?

[Microsoft Azure IoT Central](https://azure.microsoft.com/en-us/services/iot-central) es una solución SaaS global totalmente gestionada para IoT que facilita la conexión, monitoreo y gestión de tus activos IoT a escala.  
Es altamente segura, se adapta al crecimiento de tu negocio, garantiza que tus inversiones sean reutilizables e integra con tus aplicaciones empresariales existentes. También cierra la brecha entre tus aplicaciones y los datos IoT, ofreciendo gestión centralizada para reconfigurar y actualizar tus dispositivos.

### ¿Qué es IoT Plug and Play?

[IoT Plug and Play](https://docs.microsoft.com/en-us/azure/iot-pnp) permite a los desarrolladores integrar dispositivos inteligentes con sus soluciones sin configuración manual.  
El núcleo de IoT Plug and Play es un modelo de dispositivo que describe las capacidades de un dispositivo a una aplicación compatible. Contiene:

- Propiedades: estados de solo lectura o editables del dispositivo u otras entidades  
- Telemetría: datos enviados por un dispositivo  
- Comandos: funciones u operaciones que se pueden realizar en un dispositivo  

Los dispositivos certificados IoT Plug and Play eliminan la necesidad de configurar manualmente dispositivos en Azure IoT Central, como crear plantillas o agregar características e interfaces.

### Dispositivos Certificados IoT Plug and Play

Los dispositivos certificados aparecen en el [Catálogo de Dispositivos Certificados Azure](https://devicecatalog.azure.com) con el sello IoT Plug and Play.

El [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) es un dispositivo certificado IoT Plug and Play.

<p style={{textAlign: 'center'}}><a href="https://devicecatalog.azure.com/devices/8b9c5072-68fd-4fc3-8e5f-5b15e3a20bd9"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" alt="pir" width={650} height="auto" /></a></p>

Para ser certificado IoT Plug and Play, debes cumplir ciertos requisitos, uno de ellos es publicar un modelo DTDL (Digital Twins Definition Language) que define las capacidades del dispositivo en el repositorio [Azure/iot-plugandplay-models (DMR)](https://github.com/Azure/iot-plugandplay-models) en GitHub.  
Esto permite que servicios en la nube compatibles aprendan sobre las capacidades del dispositivo desde este repositorio.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/PnP_devices.png" alt="pir" width={850} height="auto" /></p>

## Conectar Wio Terminal a Microsoft Azure IoT Central vía MQTT

Como se explicó antes, usaremos MQTT para la comunicación entre el Wio Terminal y Microsoft Azure IoT Central.  
Sin embargo, también puedes usar el puente HTTP si así lo requieres.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_receive.png" alt="pir" width={1200} height="auto" /></p>

### Configuración en Microsoft Azure IoT Central

Primero, ingresa a Microsoft Azure IoT Central, inicia sesión con tu cuenta Microsoft y crea una nueva aplicación para tu proyecto.

- **PASO 1:** Visita [aquí](https://apps.azureiotcentral.com) para crear una nueva aplicación

- **PASO 2:** Haz clic en **Build** en el menú de navegación a la izquierda, y luego en **Custom apps**

**Nota:** Inicia sesión en tu cuenta Microsoft si te lo solicita

- **PASO 3:** Completa el campo **Application name** y elige **Free** en **Pricing plan**.

**Nota:** La URL de la aplicación se generará automáticamente al completar el nombre

- **PASO 4:** Haz clic en **Create** para crear la aplicación

¡Ya tienes Azure IoT Central configurado correctamente!

### Configuración del Wio Terminal

#### Actualizar firmware RTL8720

Necesitamos actualizar el firmware del núcleo inalámbrico Realtek RTL8720 en el Wio Terminal. Sigue esta [wiki](https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview) para actualizar el firmware RTL8720.

**Nota:** Asegúrate de actualizar el [firmware](https://github.com/SeeedJP/wioterminal-aziot-example/releases) según la versión especificada en la descripción de la release.

#### Descargar y subir código demo al Wio Terminal

Primero usaremos un código demo que envía datos de telemetría desde los sensores integrados en el Wio Terminal a Microsoft Azure IoT Central.

##### Descargar código demo

- **PASO 1:** Navega a [este repositorio](https://github.com/SeeedJP/wioterminal-aziot-example) en GitHub  
- **PASO 2:** Haz clic en **Releases**  
- **PASO 3:** En la última release, descarga el archivo **wioterminal-aziot-example.uf2**

##### Subir código demo al Wio Terminal

- **PASO 1:** Conecta el Wio Terminal a la PC y enciéndelo  
- **PASO 2:** Entra en **Modo Bootloader** deslizando el interruptor de encendido hacia abajo más allá de la posición "ON", suelta, vuelve a deslizar y suelta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" alt="pir" width={500} height="auto" /></p>

**Nota:** Cuando el Wio Terminal está en modo Bootloader, el LED azul parpadea en un patrón distinto a cuando está encendido normalmente.

- **PASO 3:** Abre el explorador de archivos de tu PC y verás una nueva unidad llamada **Arduino**  
- **PASO 4:** Arrastra el archivo **.uf2** descargado a esta unidad **Arduino**  
- **PASO 5:** Apaga el Wio Terminal

¡Ya has subido correctamente el código demo al Wio Terminal!

##### Configuración Wi-Fi y Azure IoT

Ahora configuraremos la conexión Wi-Fi y Azure IoT

- **PASO 1:** Mantén presionados los 3 botones y enciende el Wio Terminal para entrar en modo configuración

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config.png" alt="pir" width={700} height="auto" /></p>

- **PASO 2:** Abre una aplicación de consola serial como [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)  
- **PASO 3:** Escribe el puerto serial COM correcto, configura la velocidad en **9600** baudios y conecta con el Wio Terminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config_new.png" alt="pir" width={500} height="auto" /></p>

- **PASO 4:** Presiona **ENTER** y escribe **help** en la consola para ver las opciones de configuración  
- **PASO 5:** Configura el SSID Wi-Fi con:  
  `set_wifissid tu_nombre_de_red_WiFi`

**Nota:** Deja un espacio entre el comando y el nombre de la red  
- **PASO 6:** Configura la contraseña Wi-Fi con:  
  `set_wifipwd tu_contraseña_WiFi`

**Nota:** Deja un espacio entre el comando y la contraseña  
- **PASO 7:** Entra en la aplicación creada en [Azure IoT Central](https://apps.azureiotcentral.com)  
- **PASO 8:** Navega a `Administration > Device Connection` y copia el **ID scope** en un bloc de notas  
- **PASO 9:** Entra a **SAS-IoT-Devices** y copia la **clave primaria** en el bloc de notas  
- **PASO 10:** En la consola serial escribe:  
  `set_az_iotc tu_ID_scope tu_clave_primaria tu_nombre_de_dispositivo`

**Nota:** Deja un espacio entre cada campo, y elige un nombre de dispositivo a tu gusto  
- **PASO 11:** Reinicia el Wio Terminal deslizando el interruptor hacia abajo y soltándolo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" alt="pir" width={500} height="auto" /></p>

Ahora verás en la pantalla LCD del Wio Terminal que se conecta a Wi-Fi y luego a Azure IoT Hub, y empezará a enviar datos de telemetría a Azure IoT Central.

### Visualizar datos de telemetría en Microsoft Azure IoT Central

Ahora vamos a mostrar los datos de telemetría entrantes del acelerómetro de 3 ejes, sensor de luz y los 3 botones del Wio Terminal en el Dashboard de Azure IoT Central.

- **PASO 1:** Abre el Dashboard de Azure IoT Central que usaste antes

- **PASO 2:** Haz clic en **Devices** (Dispositivos) en el menú de navegación izquierdo

- **PASO 3:** Verás aparecer **Seeed Wio Terminal** en la lista de dispositivos. Haz clic en él

- **PASO 4:** Haz clic en la entrada con el **nombre del dispositivo** que configuraste anteriormente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/wio_demo.png" alt="pir" width={800} height="auto" /></p>

Ahora podrás visualizar los datos del acelerómetro de 3 ejes en un dashboard interactivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/accel_demo.png" alt="pir" width={800} height="auto" /></p>

Esta es la vista por defecto y necesitamos hacer algunos cambios para mostrar otros datos de telemetría también.

- **PASO 5:** Haz clic en **Device templates** (Plantillas de dispositivo) en el menú lateral izquierdo y selecciona **Seeed Wio Terminal** para configurar la plantilla

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/device_template.png" alt="pir" width={400} height="auto" /></p>

- **PASO 6:** Haz clic en **Overview** (Resumen) en el menú de navegación izquierdo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/overview.png" alt="pir" width={400} height="auto" /></p>

- **PASO 7:** Despliega el menú **select a telemetry** (seleccionar una telemetría) y elige la telemetría que deseas visualizar

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/overview_edit.png" alt="pir" width={800} height="auto" /></p>

- **PASO 8:** Haz clic en **Add tile** (Agregar ficha) y verás que la ficha se agrega al Dashboard de Azure IoT Central

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard_add.png" alt="pir" width={300} height="auto" /></p>

**Nota:** Puedes cambiar el tamaño o tipo de visualización de las fichas según tu preferencia

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/resize.png" alt="pir" width={400} height="auto" /></p>

- **PASO 9:** Repite el mismo procedimiento para los 3 botones (izquierdo, central, derecho)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/draft_visual.png" alt="pir" width={850} height="auto" /></p>

**Nota:** En esta configuración hemos usado:

| Nombre de ficha | Tamaño de ficha | Visualización |
|-|-|-|
| Intensidad de luz | 2 x 2 | Gráfico de líneas |
| Botón izquierdo | 1 x 1 | KPI |
| Botón derecho | 1 x 1 | KPI |
| Botón central | 2 x 2 | KPI |

- **PASO 10:** Haz clic en **Save** (Guardar) y luego en **Publish** (Publicar)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/save.png" alt="pir" width={600} height="auto" /></p>

- **PASO 11:** Regresa al Dashboard de Azure IoT Central y podrás visualizar todos los datos que llegan desde el Wio Terminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/final.png" alt="pir" width={750} height="auto" /></p>

- **PASO 12:** También puedes hacer clic en la pestaña **Raw data** para ver todos los datos de telemetría en tiempo real

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/raw_data.png" alt="pir" width={700} height="auto" /></p>

#### Agregar una Regla para Enviar un Correo Electrónico

Las reglas en IoT Central sirven como herramienta personalizable que se activan ante eventos monitoreados en los dispositivos conectados.  
Por ejemplo, en esta demo podemos configurar IoT Central para enviar un correo cuando la intensidad de luz esté por debajo de 50.

- **PASO 1:** Haz clic en **Rules** (Reglas) en el menú lateral izquierdo de Azure IoT Central

- **PASO 2:** Haz clic en **+New** o **Create a rule** (Crear una regla)

- **PASO 3:** Escribe un nombre para la regla

- **PASO 4:** En **Device template** (Plantilla de dispositivo), selecciona **Seeed Wio Terminal**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/rule_1.png" alt="pir" width={830} height="auto" /></p>

- **PASO 5:** En **Conditions** (Condiciones), activa **time aggregation** (agregación temporal) y selecciona una **ventana de tiempo** a tu elección. Aquí configuramos 5 minutos

**Nota:** Cada **xx** minutos, la regla evalúa los datos de los últimos **xx** minutos

- **PASO 6:** En **Telemetry** (Telemetría), selecciona la telemetría deseada. Aquí seleccionamos **Light intensity** (Intensidad de luz)

- **PASO 7:** En **Aggregation** (Agregación), selecciona **Average** (Promedio). Esto tomará el promedio durante la ventana de tiempo configurada

- **PASO 8:** En **Operator** (Operador), elige la condición deseada. Aquí usamos **is less than** (es menor que)

- **PASO 9:** En **Value** (Valor), escribe un número. Aquí usamos **50**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/conditions_1.png" alt="pir" width={1200} height="auto" /></p>

- **PASO 10:** En **Actions** (Acciones), haz clic en **Email**

- **PASO 11:** Escribe un **Display name** (Nombre a mostrar), dirección **To address** (destino del correo) y una **Nota** para el correo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/email_3.png" alt="pir" width={1200} height="auto" /></p>

**Nota:** La dirección de correo electrónico debe estar registrada en esta aplicación de Azure IoT Central y haber iniciado sesión al menos una vez.

- Navega a `Administration > Users`, haz clic en **Assign user**, completa el correo, asigna un **Role** y guarda

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/assign_user.png" alt="pir" width={800} height="auto" /></p>

- **PASO 12:** Haz clic en **Done**

- **PASO 13:** Finalmente, haz clic en **Save**

¡Listo! Has creado exitosamente una regla para enviar un correo electrónico.

### Controlar Hardware desde Microsoft Azure IoT Central

No solo puedes ver los datos de telemetría en Azure IoT Central, sino también usarlo para controlar hardware. En esta demo, podrás controlar el buzzer incorporado en el Wio Terminal y especificar la duración durante la cual el buzzer emitirá un sonido.

- **PASO 1:** Haz clic en la pestaña **Command** (Comando)

- **PASO 2:** Ingresa un **valor** en la columna bajo **Duration** (Duración)

**Nota:** Los valores están en milisegundos. Ej: 1000 = 1000ms = 1s

- **PASO 3:** Al hacer clic en **Run** (Ejecutar), escucharás un sonido de beep en el buzzer durante el tiempo especificado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/1000.png" alt="pir" width={500} height="auto" /></p>

## ¿Cómo agregar otros sensores?

Puedes agregar cualquier sensor al Wio Terminal y enviar datos de telemetría del sensor conectado a Azure IoT Central. En este ejemplo conectaremos un [Grove - Sensor de Temperatura y Humedad (DHT11)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html) al Wio Terminal y enviaremos datos de temperatura y humedad a Azure IoT Central para visualizar en los dashboards.

### Configuración de Microsoft Visual Studio Code

#### Descargar, instalar y configurar Visual Studio Code

Si quieres agregar más sensores al Wio Terminal para enviar datos a Azure IoT Central, no puedes usar directamente el archivo .uf2 como antes, porque el código ya está compilado ahí. Para agregar código al demo, necesitas usar un IDE llamado Microsoft Visual Studio Code, agregar el código necesario y subirlo al Wio Terminal.

Ahora, vamos a instalar Microsoft Visual Studio Code en tu computadora.

- **PASO 1:** Visita [code.visualstudio.com](https://code.visualstudio.com) y haz clic en **Download**

**Nota:** Elige el instalador según tu sistema operativo

- **PASO 2:** Sigue el asistente de instalación y completa la instalación

- **PASO 3:** Abre Visual Studio Code

- **PASO 4:** Haz clic en **Extensions** (Extensiones) en el menú lateral izquierdo y escribe **platformIO** en el buscador

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio.png" alt="pir" width={380} height="auto" /></p>

- **PASO 5:** Haz clic en **Install** (Instalar)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_install.png" alt="pir" width={550} height="auto" /></p>

#### Código del demo en Visual Studio Code

- **PASO 1:** Visita [este enlace](https://github.com/SeeedJP/wioterminal-aziot-example/releases) para encontrar las releases disponibles dentro del repositorio [SeeedJP/wioterminal-aziot-example](https://github.com/SeeedJP/wioterminal-aziot-example)

- **PASO 2:** Navega a la **Latest release** (Última release) y bajo **Assets**, haz clic en **Source code (zip)** para descargar el código fuente como archivo .zip

- **PASO 3:** Extrae el archivo **.zip**

- **PASO 4:** Regresa a Visual Studio Code y navega a `File > Open Folder...`

- **PASO 5:** Selecciona la carpeta extraída y haz clic en **Select Folder**

- **PASO 6:** Navega a `wioterminal-aziot-example-0.10 > include > config.h` desde el menú lateral

- **PASO 7:** Abre el archivo **config.h** y busca `"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"` y cámbialo por `"dtmi:local:wioterminal_aziot_example;5"`

**Nota:** `"dtmi:local:wioterminal_aziot_example;5"` es el Model ID

- **PASO 8:** Navega a `wioterminal-aziot-example-0.10 > seeedkk-wioterminal-wioterminal_aziot_example.json`

- **PASO 9:** Abre el archivo **seeedkk-wioterminal-wioterminal_aziot_example.json** y cambia `"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"` a `"dtmi:local:wioterminal_aziot_example;5"`

**Nota:** Este archivo JSON es el modelo DTDL que mencionamos antes

Actualmente el modelo define datos para **aceleración, intensidad de luz y conteo de botones**. Vamos a agregar **temperatura y humedad** a este modelo DTDL.

- **PASO 10:** Agrega el siguiente código justo debajo de **"contents": [**:

```sh
  "contents": [
    {
      "@type": [
        "Telemetry",
        "Temperature"
      ],
      "name": "temp",
      "unit": "degreeCelsius",
      "displayName": {
        "en": "Temperature (C)",
        "ja": "温度"
      },
      "schema": "integer"
    },
    {
      "@type": "Telemetry",
      "name": "humi",
      "displayName": {
        "en": "Humidity (%RH)",
        "ja": "湿度"
      },
      "schema": "integer"
    },
```

**Nota:** Aquí, **name** es el identificador que usaremos para distinguir datos específicos de telemetría más adelante en el código, **unit** es la unidad correspondiente al dato, **displayName** es el nombre que se mostrará en Azure IoT Central ("en" para inglés / "ja" para japonés), y **schema** es el tipo de dato.

- **PASO 11:** Navega a `wioterminal-aziot-example-0.10 > platformio.ini` desde el menú lateral

- **PASO 12:** Abre el archivo **platformio.ini** y bajo la sección **lib_deps**, agrega la siguiente línea: **https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor**

```sh 
lib_deps = 
    https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor
```

**Nota:** Esta es la librería para el Grove - Sensor de Temperatura y Humedad (DHT11)

- **PASO 13:** Navega a `wioterminal-aziot-example-0.10 > src > main.cpp`

- **PASO 14:** Abre **main.cpp** y añade la inclusión de la librería DHT11 justo después de la línea:

```cpp
#include "CliMode.h"
#include "DHT.h"
```

- **PASO 15:** Agrega las definiciones y la inicialización para DHT11 justo después de la línea: **LIS3DHTR AccelSensor;**

```cpp
LIS3DHTR<TwoWire> AccelSensor;

#define DHTPIN 0 //Define signal pin of DHT sensor 
// #define DHTPIN PIN_WIRE_SCL //Use I2C port as Digital Port */
#define DHTTYPE DHT11 //Define DHT sensor type 
DHT dht(DHTPIN, DHTTYPE); //Initializing DHT sensor
```

**Nota:** El sensor DHT11 puede conectarse a cualquiera de los puertos Grove en el Wio Terminal.  
- Si usas el **Puerto Digital**, el pin se define como **0**.  
- Si usas el **Puerto I2C**, el pin se define como **PIN_WIRE_SCL**.  

El diagrama de puertos se mostrará más adelante en este documento.

- **PASO 16:** Agrega el siguiente código dentro de la función **SendTelemetry()** para parsear el JSON junto con los datos de telemetría del sensor DHT11:

```cpp
static az_result SendTelemetry()
{
    float accelX;
    float accelY;
    float accelZ;
    AccelSensor.getAcceleration(&accelX, &accelY, &accelZ);

    int light;
    light = analogRead(WIO_LIGHT) * 100 / 1023;

    int temp; //assign variable to store temperature
    int humi; //assign variable to store humidity
    temp = dht.readTemperature(); //read temperature
    humi = dht.readHumidity(); //read humidity

    char telemetry_topic[128];
    if (az_result_failed(az_iot_hub_client_telemetry_get_publish_topic(&HubClient, NULL, telemetry_topic, sizeof(telemetry_topic), NULL)))
    {
        Log("Failed az_iot_hub_client_telemetry_get_publish_topic" DLM);
        return AZ_ERROR_NOT_SUPPORTED;
    }

    az_json_writer json_builder;
    char telemetry_payload[200];
    AZ_RETURN_IF_FAILED(az_json_writer_init(&json_builder, AZ_SPAN_FROM_BUFFER(telemetry_payload), NULL));
    AZ_RETURN_IF_FAILED(az_json_writer_append_begin_object(&json_builder));
    AZ_RETURN_IF_FAILED(az_json_writer_append_property_name(&json_builder, AZ_SPAN_LITERAL_FROM_STR("temp")));
    AZ_RETURN_IF_FAILED(az_json_writer_append_int32(&json_builder, temp));
    AZ_RETURN_IF_FAILED(az_json_writer_append_property_name(&json_builder, AZ_SPAN_LITERAL_FROM_STR("humi")));
    AZ_RETURN_IF_FAILED(az_json_writer_append_int32(&json_builder, humi));
```

- **PASO 17:** Agrega el siguiente código después de la línea **ntp.begin**, para iniciar el sensor DHT11:

```cpp
dht.begin(); //start DHT sensor
```

Now we have completed all the codes for this demo. 

- **PASO 18:** Haz clic en el ícono de **PlatformIO icon** en el menú lateral izquierdo y selecciona **Build** para compilar el proyecto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_build.png" alt="pir" width={400} height="auto" /></p>

Si ves el siguiente mensaje en la terminal, has compilado el código exitosamente:

```sh
================================== [SUCCESS] Took 30.56 seconds ==================================
```

### Configuración de Microsoft Azure IoT Central

Ahora necesitamos crear una plantilla de dispositivo personalizada para que los datos del Wio Terminal puedan visualizarse en el panel de Azure IoT Central.

#### Crear una nueva plantilla de dispositivo

- **PASO 1:** Visita Azure IoT Central y haz clic en `Plantillas de dispositivos` desde el menú de navegación izquierdo.

- **PASO 2:** Haz clic en **+ Nuevo**, selecciona **Dispositivo IoT** y luego haz clic en **Siguiente: Personalizar**.

- **PASO 3:** Escribe un nombre dentro del cuadro **Nombre de la plantilla de dispositivo** y haz clic en **Siguiente: Revisar**.

- **PASO 4:** Haz clic en **Crear**.

#### Importar un modelo de dispositivo personalizado

- **PASO 1:** Haz clic en **Importar un modelo**.

- **PASO 2:** Navega a la carpeta **wioterminal-aziot-example-0.10** que usamos anteriormente, encuentra el archivo **seeedkk-wioterminal-wioterminal_aziot_example.json** y haz clic sobre él.

- **PASO 3:** Haz clic en **Abrir**.

- **PASO 4:** Haz clic en **Vistas** en el menú izquierdo y luego en **Generar vistas predeterminadas**.

- **PASO 5:** Haz clic en **Generar vista(s) predeterminada del panel**.

- **PASO 6:** Navega a **Resumen** en el menú izquierdo y personaliza el panel según tus preferencias.

**Nota:** Anteriormente en este documento se mencionó cómo personalizar el panel.

- **PASO 7:** Sigue la configuración que se muestra a continuación:

| Nombre del Módulo | Tamaño | Visualización |
|-|-|-|
| Intensidad de Luz | 2 x 2 | Gráfico de líneas |
| Intensidad de Luz | 1 x 1 | Último valor conocido |
| Temperatura (°C), Humedad (%HR) | 2 x 2 | Gráfico de líneas |
| Temperatura (°C) | 1 x 1 | Último valor conocido |
| Humedad (%HR) | 1 x 1 | Último valor conocido |
| Botón izquierdo | 1 x 1 | KPI |
| Botón central | 1 x 1 | KPI |
| Botón derecho | 1 x 1 | KPI |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard.png" alt="pir" width={1000} height="auto" /></p>

- **PASO 8:** Haz clic en **Guardar** y luego en **Publicar**.

### Configuración del Wio Terminal

#### Configuración del hardware

- Conecta el **Sensor de Temperatura y Humedad Grove (DHT11)** al **Puerto Digital Grove** del Wio Terminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/connection.png" alt="pir" width={380} height="auto" /></p>

#### Configuración del software

##### Subir el código al Wio Terminal

Ahora necesitamos cargar el código al Wio Terminal para enviar los datos de telemetría a Azure IoT Central.

- **PASO 1:** Regresa a VS Code, haz clic en el **icono de PlatformIO** y luego en **Upload**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformIO_upload.png" alt="pir" width={380} height="auto" /></p>

##### Configuración de Wi-Fi y Azure IoT

A continuación, configuraremos la conexión Wi-Fi y de Azure IoT como hicimos anteriormente.

- **PASO 1:** Mantén presionados los 3 botones y enciende el Wio Terminal para entrar en modo de configuración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config.png" alt="pir" width={700} height="auto" /></p>

- **PASO 2:** Abre una aplicación de consola serial como [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

- **PASO 3:** Introduce el **Puerto COM** correcto, ajusta la velocidad en **9600 baudios** e ingresa al Wio Terminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config_new.png" alt="pir" width={500} height="auto" /></p>

- **PASO 4:** Presiona **ENTER** en el teclado y escribe **help** en el terminal serial para ver los comandos disponibles.

**Nota:** Ya no es necesario ingresar el SSID y contraseña del Wi-Fi porque se guardaron en la configuración anterior.

- **PASO 5:** Establece la información de conexión con Azure IoT visitando la aplicación que creaste anteriormente en [Azure IoT Central](https://apps.azureiotcentral.com)

- **PASO 6:** Navega a `Administración > Conexión del dispositivo` desde el menú de la izquierda y **copia el ID scope** en un **bloc de notas**.

- **PASO 7:** Haz clic en **SAS-IoT-Devices** y copia la **clave primaria** en el **bloc de notas**.

- **PASO 8:** En la terminal serial abierta, escribe el siguiente comando:

```bash
set_az_iotc your_ID_scope your_primary_key your_device_name
```

**Nota:** Asegúrate de dejar un solo espacio entre cada campo. Puedes elegir cualquier nombre para el `device name`.

- **PASO 9:** Reinicia el Wio Terminal deslizando el interruptor más allá de la posición ON y soltándolo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" alt="pir" width={500} height="auto" /></p>

Ahora verás en la pantalla LCD del Wio Terminal que se está conectando al Wi-Fi y luego al Azure IoT Hub. Después mostrará los datos de telemetría enviados a Azure IoT Central.

### Visualización en Azure IoT Central

Vuelve a Azure IoT Central y desde el menú de navegación izquierdo, haz clic en **Dispositivos**, luego selecciona tu **nombre de dispositivo**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard_final1.png" alt="pir" width={1000} height="auto" /></p>

¡Ahora podrás visualizar todos los datos del sensor del Wio Terminal en el panel de Microsoft Azure IoT Central!

## Soporte técnico y discusión de productos

Si tienes algún problema técnico, por favor envía tu consulta en nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes formas de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>