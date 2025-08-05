---
description: Get Started with Wio Terminal and Wappsto IoT
title: Primeros Pasos con Wio Terminal y Wappsto IoT
keywords:
- Wio_terminal Easy_IoT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Get-Started-with-Wio-Terminal-and-Wappsto-IoT
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Primeros Pasos con Wio Terminal y Wappsto IoT

## Descripción General

El **Wio Terminal** es un microcontrolador basado en el SAMD51 con conectividad inalámbrica gracias al **Realtek RTL8720DN**, compatible con Arduino y MicroPython. Actualmente, la conectividad inalámbrica solo está soportada por Arduino. Funciona a **120 MHz** (con Boost hasta 200 MHz), cuenta con **4 MB** de Flash externa y **192 KB** de RAM. Soporta Wi-Fi y Bluetooth, ideal para proyectos IoT. El Wio Terminal incluye una **pantalla LCD de 2.4”**, **IMU (LIS3DHTR)**, micrófono, buzzer, ranura microSD, sensor de luz e **infrarrojo (IR 940 nm)**. Además, dispone de dos puertos Grove multifunción para el [ecosistema Grove](https://www.seeedstudio.com/grove.html) y 40 pines GPIO compatibles con Raspberry Pi para añadir más periféricos.

**Wappsto** es una plataforma potente e inteligente que permite recopilar datos automáticamente desde diversas fuentes. Cuenta con un panel estándar para monitorear y analizar tus datos.

También ofrece herramientas para desarrolladores que permiten crear aplicaciones IoT como apps web con integraciones y automatizaciones. Integra un marketplace donde se pueden compartir aplicaciones entre usuarios y desarrolladores.

**Wappsto by Seluxit** es una plataforma IoT con dashboards personalizables, visualización de datos en tiempo real o históricos, y muchas otras funciones como automatizaciones en la nube.

También cuenta con app para **iOS y Android**, permitiéndote visualizar y controlar dispositivos en cualquier momento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto1.png" alt="wappsto-ui" width={500} height="auto" /></p>

## Funciones de Wappsto

Al conectar con Wappsto puedes realizar las siguientes operaciones. Para más información, visita: [Wappsto IoT Solution Builder](https://www.seluxit.com/iot-products/iot-solution-builder/wapps)

### Funciones de Dashboard

#### Tipos de Dashboard

1. **Blank dashboard:** Lienzo en blanco para combinar widgets libremente.  
2. **Fleet management:** Lienzo dinámico que permite cambiar entre dispositivos para detectar anomalías fácilmente.  
3. **Geolocalización:** Vista en mapa de dispositivos, con filtros por alarmas.  
   *(Nota: Algunas imágenes externas pueden estar caídas.)*

#### Widgets disponibles

1. **Lista filtrada:** Configura umbrales para disparar alarmas y señales visuales.
2. **Ubicación histórica:** Muestra la ruta en el mapa según ubicación del dispositivo en intervalos definidos.
3. **Gráfica:** Permite múltiples fuentes de datos, configurar estilo y métodos de agregación.
4. **Datos en vivo:** Activación en tiempo real de widgets con actualización inmediata.
5. **Lista de valores:** Muestra datos actuales junto con valores de control o deseados.
6. **Brújula:** Indica el ángulo de un dispositivo con datos en vivo.
7. **Gráfico de líquido:** Representa el nivel relativo de un dato.
8. **Medidor (Gauge):** Muestra un valor en vivo con límites y colores configurables.
9. **Ubicación actual:** Visualiza ubicación presente de uno o más dispositivos.
10. **Lista de eventos:** Muestra logs de valores o dispositivos.

### Automatización en la Nube y Aplicaciones Web

1. Integración con Twitter  
2. Integración con Philips Hue  
3. Integración con Shelly  
4. Pronóstico del clima desde yr.no  
5. Automatizaciones con bloques visuales (Blockly)  
6. Programación sin código o con JavaScript  
7. Ejemplo de automatización cruzada con [bit.wappsto.com](https://bit.wappsto.com/project/wappsto-blocks/)

### Funciones poco conocidas de Wappsto

- Nube distribuida con respaldos múltiples  
- Compartición de dispositivos  
- Cifrado de extremo a extremo  
- Claves únicas por dispositivo y red  
- Reenvío de datos  
- Exportación de datos en CSV  
- Inicio de sesión inteligente (email, Google, Facebook, Apple)  
- Compatible con Web y Apps móviles  

## Primeros Pasos

### Requisitos de Hardware

- 1× Wio Terminal  
- 1× Computadora  
- 1× Cable USB Tipo-C  

### Requisitos de Software

Sigue esta guía para instalar el entorno: [Guía de inicio para Wio Terminal](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#software)

## Actualización del Firmware Wi-Fi del Wio Terminal

Consulta esta guía para actualizar el módulo inalámbrico: [Actualizar Firmware de Wi-Fi](https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/#update-the-wireless-core-firmware)

## Requisitos Previos de Wappsto

### Cuenta en Wappsto

Necesitas tener una cuenta en [Wappsto](https://wappsto.com/). Si aún no la tienes, créala primero.

### Tener Arduino IDE instalado

Guía oficial de [instalación](https://www.arduino.cc/en/Guide)

#### Instalar la librería ArduinoJson

Desde el gestor de librerías, instala **ArduinoJson**. Más [info](https://arduinojson.org/v6/doc/installation/)

#### Instalar la librería de Wappsto

1. Descarga este proyecto como archivo ZIP desde GitHub.  
2. En Arduino IDE ve a: `Sketch -> Include Library -> Add .ZIP Library...`  
Más [info](https://docs.arduino.cc/software/ide-v1/tutorials/installing-libraries)

### Generar certificados e ID para un nuevo dispositivo

Tu dispositivo físico necesita una identificación única, certificado CA del servidor y par de certificados cliente/clave. Estos se generan en **Wappsto.com** y se colocan en el archivo `wappsto_config.h`.

#### Generar `wappsto_config.h`

Puedes usar el **script Python** incluido en el repositorio en la carpeta `generate_config_header`.

1. Instala las dependencias:

```bash
cd <ruta/al/repositorio/arduino_wappstoiot>
cd generate_config_header
pip install -r requirements.txt
```

2. Genera el archivo `.h`:

```bash
cd generate_config_header
python main.py --type arduino
```

3. Inicia sesión con tu usuario de Wappsto cuando se te solicite.

4. Copia el archivo `wappsto_config.h` generado a tu carpeta del sketch de Arduino.

**Nota:** Si ves algo como:

```cpp
const char* network_uuid = "d7fafe76-b020-4594-8f2a-aae11c6b6589";
```

significa que la UUID fue generada correctamente.

#### Python 3 y errores comunes

Si tienes Python 2 y 3 instalados:

```bash
pip3 install -r requirements.txt
python3 main.py --type arduino
```

Si ves el siguiente error:

```text
ImportError: cannot import name 'soft_unicode' from 'markupsafe'
```

Ejecuta:

```bash
pip install -U MarkupSafe==0.20
```

#### Reclamar y propiedad - No permitido acceder a valores

Si obtienes un error de "no permitido acceder" a valores en el dispositivo que has creado, es porque o bien no lo has reclamado, o la propiedad ha sido reiniciada.

Como tú serías el fabricante, aún verás el dispositivo en tu lista de redes, podrás ver que está en línea, pero no podrás ver valores ni controlar el dispositivo.

Para reclamar un dispositivo, ve a la pestaña [IoT Devices](https://wappsto.com/devices), haz clic en el botón "+ Add an IoT device" en la esquina superior derecha, e ingresa el UUID de la red en el recuadro.

Si haces clic en el botón eliminar para una red, se eliminará la propiedad del dispositivo, para que otro usuario pueda reclamarlo. Una vez que un dispositivo ha sido reclamado no puede ser reclamado por otro.

## Esta librería Wappsto

### Estructura requerida

El id de la red es generado por [Wappsto](https://wappsto.com/) y está vinculado a los certificados.

```
├── "Network Name"
│   └── "Device 1 name"
│   |   └── "Value 1 name"
│   |   └── "Value 2 name"
|   |   ...
│   └── "Device 2 name"
│       └── "Value 1 name"
│       └── "Value 2 name"
...

```

Nota que el "nombre" para objetos dispositivo y valor tiene funcionalidad extra y reglas.

- Una red no debe tener dispositivos con nombres idénticos.
- Un único dispositivo no debe tener valores con nombres idénticos. (como en el ejemplo, está permitido usar el mismo nombre bajo un dispositivo diferente).

La librería consultará a Wappsto si un dispositivo/valor existe con ese nombre antes de crearlo, así enlazará al valor correcto. Si nada tiene ese nombre se creará uno nuevo. Si un padre tiene múltiples hijos con el mismo nombre, la librería elegirá el primero disponible.

Si cambias un nombre se creará uno nuevo, pero el viejo no se eliminará. Esto debes hacerlo tú manualmente, [aquí](https://wappsto.com/devices).

### Inicializar Wappsto

Wappsto necesita una referencia a WiFiClientSecure al ser creado, ejemplo:

```c
WiFiClientSecure client;
Wappsto wappsto(&client);
```

#### Configurar y conectar

```c
#include "wappsto_config.h"
...
wappsto.config(network_uuid, ca, client_crt, client_key);
if(wappsto.connect()) {
    // Connected
} else {
    // Failed to connect
}
```

### Parámetros opcionales de configuración, log y ping

Además de los comandos obligatorios, también puedes configurar el intervalo de ping y el nivel de log:

```c
wappsto.config(network_uuid, ca, client_crt, client_key, ping interval in minutes, log level);
```

- El intervalo de ping envía un paquete corto del dispositivo a Wappsto para mantener la conexión activa. Si tu dispositivo envía datos raramente, puede ser útil para evitar timeout en la conexión.
- El nivel de log puede imprimir información de la librería Wappsto en el puerto serial de depuración - los niveles posibles son:

```
   VERBOSE
   INFO
   WARNING
   ERROR
   NO_LOGS <- Default
```

### Crear tu red

```c
myNetwork = wappsto.createNetwork("Network Name");
```

### Crear un dispositivo

```c
DeviceDescription_t myDeviceDescription = {
    .name = "Device name",
    .product = "Product name",
    .manufacturer = "Company name",
    .description = "Description of the product",
    .version = "1.0",
    .serial = "00001",
    .protocol = "Json-RPC",
    .communication = "WiFi",
};

myDevice = myNetwork->createDevice("Device Name", &myDeviceDescription);
```

#### Valores

Los valores son probablemente lo que más te interesa, y pueden ser uno de estos tipos:

- Number - enteros o decimales, estos serán registrados y mostrados en gráfico.
- String - una cadena legible por humanos (UTF-8)
- Blob - datos, por ejemplo una imagen codificada en base64, valores hexadecimales, etc.
- Xml - un documento XML completo

#### Leer y escribir datos

Cada valor puede tener uno o dos puntos de datos:

- Report: Datos leídos en el dispositivo y reportados al servidor [LECTURA]
- Control: Datos enviados del servidor al dispositivo para controlarlo [ESCRITURA]

Tu valor puede ser uno de ellos o ambos.

### Parámetros del valor

Para explicar los parámetros, usaremos un ejemplo para un valor de temperatura ubicado en la sala.

- name: Un nombre para el valor, aquí "Sala"
- type: Ayuda para la UI a encontrar valores del tipo correcto, aquí "temperature"
- El parámetro PERMISSION_e indica a la librería si debe crear reporte y/o control para este valor.
  - READ -> estado de reporte
  - WRITE -> estado de control
  - READ_WRITE -> reporte y control
- min: (Solo números) número más bajo (para usar en la UI)
- max: Para números, el valor más alto; para string/blob, la longitud máxima
- step: (Solo números) tamaño del paso para un número, por ejemplo 1 para enteros, 0.1 para decimales
- unit: (Solo números) si hay una unidad para este número, en el ejemplo de temperatura es °C

La primera vez que se crea un valor, un número tendrá el valor NA, y el string/blob estará vacío, para control y reporte.

Si el valor ya existe, los datos no cambiarán. Si quieres que el valor se actualice cuando el dispositivo reinicie, debes llamar a report/control.

#### Crear un valor numérico

```c
ValueNumber_t myNumberValueParameters = {   .name = "Living room",
                                            .type = "temperature", // value type
                                            .permission = READ_WRITE,
                                            .min = -20,
                                            .max = 100,
                                            .step = 0.1,
                                            .unit = "°C",
                                            .si_conversion = ""};

myNumberValue = myDevice->createValueNumber(&myNumberValueParameters);
```

#### Crea un string

```c
ValueString_t myStringValueParameters = { .name = "Value String Name",
                                          .type = "value type",
                                          .permission = READ_WRITE,
                                          .max = 200,
                                          .encoding = ""};

myStringValue = myDevice->createValueString("Value String Name", "value type", READ_WRITE, &myStringValueParameters);
```

#### Crea un valor blob

```c
ValueBlob_t myBlobValueParameters =  { .name = "Value Blob Name",
                                       .type = "value type",
                                       .permission = READ_WRITE,
                                       .max = 200,
                                       .encoding = ""};

myBlobValue = myDevice->createValueBlob(&myBlobValueParameters);
```

#### Crea un valor xml

```c
ValueXml_t myXmlValueParameters =  { .name = "Value Xml Name",
                                     .type = "value type",
                                     .permission = READ_WRITE,
                                     .xsd = "test",
                                     .namespace = "test"};

myXmlValue = myDevice->createValueXml(&myXmlValueParameters);
```

#### Envía un reporte de valor

```c
int myInt = 123;
double myDouble = 42.7;

myNumberValue.report("987");    // You can send numbers as a string you format
myNumberValue.report(myInt);    // Report the number as an int
myNumberValue.report(myDouble); // Report the number as a double


myStringValue.report("Example string");

myBlobValue.report("A5FF2C");

```

#### Establecer un valor de control

Normalmente el valor de control solo se actualizará desde wappsto.com, pero puede que necesites establecer un valor actual al iniciar o en otras situaciones.  
Establecerlo es similar a reportar:

```c
int myInt = 123;
double myDouble = 42.7;

myNumberValue.control("987");    // Puedes enviar números como string formateado
myNumberValue.control(myInt);    // Establecer control como int
myNumberValue.control(myDouble); // Establecer control como double

myStringValue.control("Ejemplo de cadena");

myBlobValue.control("A5FF2C");
```

## Agregar Wappsto en tu función loop

Para que Wappsto pueda recibir datos (control, refrescos y pings), debe incluirse en la función loop de Arduino — si no, nunca recibirás callbacks con datos y la conexión podría expirar.

También se recomienda no bloquear el loop por períodos prolongados.

```c
wappsto.dataAvailable();
```

### Recibir una solicitud de control de valor

Puedes elegir si quieres que el dato de control se traduzca a double o si prefieres recibir el string directamente.

```c
// Recibir control con un número (double)
void controlNumberCallback(Value *value, double data, String timestamp)
{
    // manejar solicitud de control
}

// Recibir control con un string
void controlStringCallback(Value *value, String data, String timestamp)
{
    // manejar solicitud de control
}

...
myNumberValue->onControl(&controlNumberCallback);
myStringValue->onControl(&controlStringCallback);
```

### Recibir una solicitud de refresco de valor (solo report)

```c
void refreshNumberCallback(Value *value)
{
    // manejar solicitud de refresco
}
...
myNumberValue->onRefresh(&refreshNumberCallback);
```

### Obtener últimos datos y timestamp de un valor

Puedes acceder al último dato recibido/enviado y timestamp usando estas funciones.
Por ejemplo, después de un reinicio, el último estado controlado establecido en Wappsto.com será recuperado, así tu programa puede empezar con ese estado.

*Nota*: obtener numberData de un valor vacío devuelve 0.

```c
String ctrlData = myNumberValue.getControlData();

double ctrlDataNumber = myNumberValue.getControlNumberData();

String ctrlTime = myNumberValue.getControlTimestamp();

String reportData = myNumberValue.getReportData();

double reportDataNumber = myNumberValue.getReportNumberData();

String reportTime = myNumberValue.getReportTimestamp();
```

Para más ejemplos revisa el código en la carpeta de ejemplos, o ve a 'File -> Examples -> Wappsto' en el IDE de Arduino.

### Demo de detección de temperatura

Aquí usaremos el ejemplo provisto de temperatura y lo mostraremos en Wappsto como ves abajo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto2.png" alt="pir" width={500} height="auto" /></p>

* **Paso 1**. Después de subir el código, verás que se muestra conexión exitosa en "IoT Devices" en la web de Wappsto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto3.png" alt="pir" width={800} height="auto" /></p>

* **Paso 2**. Haz clic en la columna "Dashboards" a la izquierda y selecciona "Add widget"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto4.png" alt="pir" width={800} height="auto" /></p>

* **Paso 3**. Estos bloques provistos pueden mostrar datos de varias formas, aquí elegimos "Chart"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto5.png" alt="pir" width={800} height="auto" /></p>

* **Paso 4**. Selecciona "Temperature Example" que subimos antes y haz clic en "Next"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto6.png" alt="pir" width={800} height="auto" /></p>

* **Paso 5**. Configura los datos a mostrar. Aquí configuramos los datos en "Line"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto7.png" alt="pir" width={800} height="auto" /></p>

* **Paso 6**. Después de todo configurado, podrás ver la salida de datos en el Dashboard

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto8a.jpeg" alt="pir" width={800} height="auto" /></p>
