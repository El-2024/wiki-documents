---
description: 24GHz mmWave Human Fall Detection
title: Sensor mmWave 24GHz - Sensor de Detección de Caída
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Radar_MR24FDB1
last_update:
  date: 07/18/2025
  author: Guillermo
---

# 24GHz mmWave Sensor - Human Fall Detection Sensor(MR24FDB1)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmWave-radar/radar.jpg" style={{width:400, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Fall-Detection-Module-p-5268.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El módulo de detección de caídas con radar mmWave es un módulo autónomo, que protege la privacidad, y opera a 24GHz. Con el radar Doppler mejorado de Infineon y el algoritmo estándar, el módulo es una solución ideal para aplicaciones individuales como cuidado de personas mayores, hogar inteligente y alarma de peligro.

### Aplicaciones

- Detección de caídas
- Hogar inteligente
- Cuidado de la salud

### **Características**

- Tecnología confiable: Radar industrial FMCW mmWave de Infineon
- Teoría habilitada: Aplica tecnología de radar Doppler con sensor de distancia cercana (NDS) operando a 24GHz
- Algoritmo estándar: Distingue estados ocupado/desocupado e identifica actividades humanas en un entorno auto-adaptativo
- Detección singular de caídas: Detecta simultáneamente, protegiendo la privacidad, de forma inalámbrica y sin necesidad de usar dispositivos portátiles, caídas sospechosas, caídas rápidas o estancias anormalmente largas en un área de hasta 20 metros cuadrados
- Protección perfecta de la privacidad: Proporciona capacidades de vigilancia sin identificación
- Ubicación de instalación flexible: Funciona correctamente sin importar obstáculos o coberturas
- Estado de funcionamiento inofensivo: Emite una potencia de energía inofensiva de 10 dBm
- Alta precisión: Reduce la interferencia de objetos no vivos y logra más del 95% de precisión en los resultados
- Alta robustez: Mantiene su funcionamiento adecuado en entornos complejos con diferentes temperaturas, humedad, ruido, corrientes de aire, polvo, luz, etc.
- Antena de alto rendimiento: Detecta incluso micromovimientos con un patrón de haz en abanico de 90° horizontal y 60° vertical
- Distancia de medición:
  - Distancia máxima de percepción de movimiento: hasta 12 metros
  - Distancia máxima de percepción de micromovimiento: hasta 5 metros
  - Distancia máxima de percepción corporal: hasta 3 metros
- Tiempo de detección:
  - Estado desocupado a ocupado: dentro de 0.5 segundos
  - Estado ocupado a desocupado: más de 1 minuto
- Radar personalizable: Soporta desarrollo secundario incluyendo parámetros del radar, protocolo, antena y funciones

### **Descripción del hardware**

![](https://files.seeedstudio.com/wiki/mmWave-radar/yinjiaotu.png)

1. Salida S1: nivel alto - ocupado, nivel bajo - desocupado.
2. Salida S2: nivel alto - activo, nivel bajo - estacionario.
3. GP1 a GP4 son controles para selección de parámetros, que pueden redefinirse según los requerimientos del usuario.
4. Las señales de salida de esta interfaz son todas a nivel 3.3V.

:::caution  
El consumo de energía del producto es de 500mW, por lo que no es adecuado para alimentación a largo plazo.
:::

### **Características**

![](https://files.seeedstudio.com/wiki/mmWave-radar/radar1.png)

## Comenzando

### Descripción general de la librería Arduino

:::tip
Si es tu primera vez usando Arduino, recomendamos encarecidamente que consultes [Comenzando con Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

El código de la librería usado en este ejemplo puede descargarse haciendo clic en el siguiente ícono.

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed_24GHz_mmWave_Radar_Sensor" target="_blank"><div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

Antes de empezar a desarrollar un sketch, veamos las funciones disponibles en la librería.

- `void recvRadarBytes()` —— Esta función recibe la longitud del cuadro actual que devuelve el radar. Los cuadros se almacenan en un arreglo según esa longitud.  
  **Parámetros de entrada:** Ninguno  
  **Valor de retorno:** Ninguno

- `void Bodysign_judgment(byte inf[], float Move_min, float Move_max)` —— Los datos devueltos por el radar contienen gran cantidad de datos físicos. El usuario puede ajustar la información de movimiento detectada según los datos de signos y el algoritmo de decodificación proporcionado por la función. El contenido del juicio se enviará por el puerto serial.  
  **Parámetros de entrada:**  
  - `byte inf[]` —— Cuadros de datos enviados por el radar.  
  - `float Move_min` —— Umbral para determinar si el usuario está en estado estacionario o desocupado.  
  - `float Move_max` —— Umbral para determinar si el usuario está en estado estacionario o en movimiento.

  **Valor de retorno:** Ninguno  
  Sobre la descripción de los parámetros de signos: Teóricamente, los valores calculados van de **0 a 100**. Cuando el valor es **0**, significa que **no se detecta nadie** en el entorno. Cuando es **1**, significa que el entorno está ocupado y en estado **estacionario**. Un valor de **2 a 100** indica que el entorno está ocupado y **activo**.

- `void Situation_judgment(byte inf[])` —— Esta función detecta si el cuerpo humano se está acercando o alejando del radar y determina su movimiento, según el algoritmo interno. Esta información se envía por el puerto serial.  
  **Parámetros de entrada:**  
  - `byte inf[]` —— Cuadros de datos enviados por el radar.

  **Valor de retorno:** Ninguno

- `void Fall_inf(byte inf[])` —— Esta función decodifica la información de detección de caídas retornada por el radar e imprime los resultados por el puerto serial.  
  **Parámetros de entrada:**  
  - `byte inf[]` —— Cuadros de datos enviados por el radar.

  **Valor de retorno:** Ninguno

- `unsigned short int us_CalculateCrc16(unsigned char *lpuc_Frame, unsigned short int lus_Len)` —— Función para generar checksum CRC16.  
  **Parámetros de entrada:**  
  - `unsigned char *lpuc_Frame` —— Cuadro de datos a enviar al radar (sin incluir los 2 bytes finales de checksum).  
  - `unsigned short int lus_Len` —— Longitud del cuadro de datos a enviar.

  **Valor de retorno:** Dígito de chequeo de 2 bytes.

- `void SerialInit()` —— Configura la velocidad del puerto serial del radar a 9600 baudios. Si es una placa Seeeduino, configura el puerto serial software en RX: 2, TX: 3.  
  **Parámetros de entrada:** Ninguno  
  **Valor de retorno:** Ninguno

### Instalación

**Paso 1.** Instala el software Arduino.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**Paso 2.** Abre la aplicación Arduino.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**Paso 3.** Selecciona el modelo de tu placa de desarrollo y agrégala al IDE Arduino.

- Si quieres usar **Seeeduino V4.2** para los siguientes ejemplos, sigue [este tutorial](https://wiki.seeedstudio.com/Seeed_Arduino_Boards/).

- Si quieres usar **Seeeduino XIAO**, sigue [este tutorial](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software).

- Si quieres usar **XIAO RP2040**, sigue [este tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup).

- Si quieres usar **XIAO BLE**, sigue [este tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup).

**Paso 4.** Instala la librería Arduino.

Descarga la base de código desde [GitHub](https://github.com/limengdu/Seeed_24GHz_mmWave_Radar_Sensor) a tu computadora.

Una vez descargado el archivo zip de la librería, abre Arduino IDE, haz clic en **Sketch > Include Library > Add .ZIP Library**, selecciona el archivo zip descargado y si la instalación es correcta, aparecerá el mensaje **Library added to your libraries**, lo que indica que la librería fue instalada con éxito.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

### Materiales requeridos

Antes de realizar los siguientes ejemplos, prepara los siguientes materiales.

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width="{210}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radar.jpg"/></div>|<div align="center"><img width="{210}" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>|<div align="center"><img width="{150}" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**Sensor Radar mmWave 24GHz**](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Fall-Detection-Module-p-5268.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)|**Cable plano pitch 2mm a 2.54mm**|

**Paso 1.** Conecta el dispositivo a la computadora a través de la placa principal. El diagrama de conexiones se muestra en la tabla a continuación.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radarconnect.png" /></div></td>
    </tr>
    <tr>
      <td align="center">Sensor Radar</td>
      <td align="center" />
      <td align="center">Placa Principal</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--&gt;</td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">RX</td>
      <td align="center">--&gt;</td>
      <td align="center">D6</td>
    </tr>
    <tr>
      <td align="center">TX</td>
      <td align="center">--&gt;</td>
      <td align="center">D7</td>
    </tr>
  </tbody></table>

**Paso 2.** En la barra de menú superior izquierda del IDE Arduino, selecciona **Herramientas**, elige el tipo de placa de desarrollo que usas y selecciona el puerto serial correspondiente.

:::tip
Si usas **MacOS**, el nombre del puerto serial usualmente comienza con **/dev/cu.usbmodem xxx**, terminando con el nombre del dispositivo. Si usas **Windows**, el nombre del puerto serial generalmente comienza con **COM**, también terminando con el nombre del dispositivo.
:::

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

En este ejemplo, demostraremos cómo funciona el radar con nuestro popular producto XIAO BLE.

### Demo 1 Decodificación de datos del algoritmo integrado del radar que muestra el estado ambiental

El radar tiene un conjunto completo de algoritmos integrados que pueden mostrar directamente las condiciones ambientales detectadas por el radar. Esta rutina explica cómo imprimir las condiciones detectadas por el radar directamente en el puerto serial mediante código.

El código de este ejemplo es el siguiente.

```cpp
#include <falldetectionradar.h>

FallDetectionRadar radar;

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
 radar.recvRadarBytes();                       //Receive radar data and start processing
 if (radar.newData == true) {                  //The data is received and transferred to the new list dataMsg[]
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;                         //Add the header frame as the first element of the array
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //Frame-by-frame transfer
    radar.newData = false;                     //A complete set of data frames is saved
    
    //radar.ShowData(dataMsg);                 //Serial port prints a set of received data frames
    radar.Fall_inf(dataMsg);                  //Sleep information output
  }
  
}
```

En el código de `setup()`, activamos el **puerto Serial** y el **puerto Serial1** en el XIAO BLE. Serial se usa para imprimir datos y Serial1 se usa para la comunicación entre el XIAO BLE y el radar. Según la velocidad en baudios del radar, configuramos la velocidad en baudios de ambos puertos seriales a 9600. Cuando está listo, el monitor serial imprimirá **Ready**.

```c
radar.Situation_judgment(dataMsg);
```

Cuando la lista `dataMsg` se obtiene por completo, se usará como parámetro de la función `Situation_judgment()` para completar la salida de datos de monitoreo ambiental, y el resultado se imprimirá directamente en el monitor serial.

Sube el programa. Al abrir el monitor serial a una velocidad de 9600 baudios deberías ver el resultado. La salida debería ser similar a la imagen a continuación.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/5.png"/></div>

:::tip
Si no ves datos después de abrir el monitor serial, puede ser normal. La adquisición de esta parte de los datos del radar depende de los cambios en el movimiento humano dentro del rango de monitoreo del radar. Sólo cuando el movimiento de la persona dentro del rango cambia, el radar enviará datos y sólo entonces se imprimirán los datos.

Si quieres ver qué datos devuelve el radar, puedes descomentar `radar.ShowData(dataMsg);`, lo cual imprimirá el conjunto completo de tramas de datos recibidas a través del monitor serial.
:::

### Demo 2: Obtención de movimiento humano usando análisis de parámetros de características

Entre la gran cantidad de datos devueltos por el radar, la información de datos físicos constituye la mayor parte. A veces, confiar demasiado en los propios algoritmos del radar puede producir resultados insatisfactorios en algunos escenarios. Entonces, podemos elegir usar la información devuelta por el radar para hacer ajustes adecuados según los escenarios de aplicación reales.

El código de este ejemplo es el siguiente.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/1.png"/></div>

```cpp
//Physical_Parameters_Example.ino

#include <sleepbreathingradar.h>

SleepBreathingRadar radar;

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
 radar.recvRadarBytes();                       //Receive radar data and start processing
 if (radar.newData == true) {                  //The data is received and transferred to the new list dataMsg[]
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;                         //Add the header frame as the first element of the array
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //Frame-by-frame transfer
    radar.newData = false;                     //A complete set of data frames is saved
    
    //radar.ShowData(dataMsg);                 //Serial port prints a set of received data frames
    radar.Bodysign_judgment(dataMsg, 1, 15); //Output of human movement using sign parameters
  }
}
```

```c
radar.Bodysign_judgment(dataMsg, 1, 15);
```

Una vez que se obtiene el arreglo `dataMsg`, podemos pasar los datos de este arreglo como el primer argumento a la función `Bodysign_judgment()`, que analiza los parámetros de la señal corporal.

El segundo y tercer parámetro de la función `Bodysign_judgment()` son los valores críticos para juzgar el estado desocupado y el cuerpo humano en reposo, respectivamente, y el estado del cuerpo humano en reposo y en movimiento.

(1, 15) significa que cuando el valor calculado de la señal corporal es menor que 1, se imprime que no hay nadie en el ambiente. Cuando el valor corporal es mayor o igual a 1 y menor que 15, la salida indica que el ambiente actual está ocupado por alguien en estado estacionario. Cuando el valor de la señal corporal es mayor o igual a 35, se indica que hay alguien en movimiento en el ambiente.

Sube el programa. Al abrir tu monitor serial con una velocidad en baudios de 9600, deberías ver el resultado. La salida debería parecerse a la siguiente imagen.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/2.png"/></div>

:::tip
Los valores que siguen al marco de datos de salida representan los valores calculados de la señal corporal.
:::

### Demo 3: Envío de datos al radar

El radar abre una gran cantidad de interfaces para que podamos obtener información y configurar la sensibilidad o escena del radar. Esta rutina indicará al usuario cómo usar el manual para enviar mensajes de datos al radar, para ajustar parámetros del radar u obtener la información de datos deseada.

**Paso 1.** Obtén los marcos de datos basados en la consulta deseada.

Descarga el [manual de usuario](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf) en el área de Recursos, y en el **Capítulo 8.2**, encuentra el contenido de los marcos que necesitas consultar o configurar, y organízalos.

En este ejemplo, asumiendo que deseas consultar el ID del dispositivo radar, deberías obtener el código de función deseado, código de dirección 1 y código de dirección 2.

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/60GHzradar/11.png"/></div>

**Paso 2.** Abre el código de ejemplo en Arduino IDE.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/9.png"/></div>

El código en este ejemplo es el siguiente.

```c
//CRC_Checksum_Generation.ino

#include <sleepbreathingradar.h>

SleepBreathingRadar radar;
char buff[30];

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
  //Please fill in the data frame you want to set according to the datasheet(Excluding 2 Byte checksum frames)
  unsigned char data[] = {0x55, 0x08, 0x00, 0x05, 0x01, 0x04, 0x03};
  
  unsigned int length = sizeof(data)/sizeof(unsigned char);
  unsigned char datas[length + 2];
  for (int n = 0; n < length; n++)datas[n] = data[n];
  unsigned short int crc_data = radar.us_CalculateCrc16(data, length);
  sprintf(buff, "The CRC16 values is: %04x", crc_data);
  Serial.println(buff);
  datas[length] = (crc_data & 0xff00) >> 8;
  datas[length+1] = crc_data & 0xff;
  Serial.print("The datas send to the radar: ");
  for (int n = 0; n < length + 2; n++){
    char buffsend[1];
    sprintf(buffsend, "0x%02x ", datas[n]);
    Serial.print(buffsend);
  }
  Serial.println();
  delay(6000);
}
```

**Paso 3.** Modifica el contenido del marco de datos para generar el marco completo que se enviará al radar.

Lo que necesitamos modificar es el arreglo `data[]` dentro del ciclo.

```c
//Please fill in the data frame you want to set according to the datasheet(Excluding 2 Byte checksum frames)
unsigned char data[] = {0x55, 0x08, 0x00, 0x05, 0x01, 0x04, 0x03};
```

Los lugares que debemos modificar son el segundo elemento, y del cuarto hasta el último elemento. El marco de encabezado 0x55 es fijo y no necesita modificarse. El segundo marco es el marco de longitud, modifícalo según la longitud de los datos que envíes. El tercer marco es fijo en 0x00. El cuarto marco es el código de función, el quinto marco es el código de dirección 1, y así sucesivamente.

:::tip
Sobre el método de cálculo del marco de longitud:  
Longitud = Longitud de datos + Código de función + Código de dirección 1 + Código de dirección 2 + Datos + Checksum. (Los marcos de encabezado no se cuentan)

Consulta el Capítulo 8 del [manual de usuario](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf) para más información sobre formatos y reglas de los marcos.
:::

Sube el programa. Al abrir el monitor serial a una velocidad de 9600 baudios, deberías ver el resultado. La salida debería parecerse a la imagen a continuación.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/10.png"/></div>

Los datos completos que deben enviarse al radar se mostrarán en el monitor serial.

**Otras formas**

Si no quieres usar ningún maestro para generar los marcos de datos completos, también puedes pegar este código a continuación en un editor que pueda ejecutar programas en C. Sigue el procedimiento anterior y llena el arreglo `data` con el contenido de tus marcos.

```c
#include <stdio.h>

const unsigned char cuc_CRCHi[256]= {
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40
};

const unsigned char  cuc_CRCLo[256]= {
  0x00, 0xC0, 0xC1, 0x01, 0xC3, 0x03, 0x02, 0xC2, 0xC6, 0x06, 0x07, 0xC7,
  0x05, 0xC5, 0xC4, 0x04, 0xCC, 0x0C, 0x0D, 0xCD, 0x0F, 0xCF, 0xCE, 0x0E,
  0x0A, 0xCA, 0xCB, 0x0B, 0xC9, 0x09, 0x08, 0xC8, 0xD8, 0x18, 0x19, 0xD9,
  0x1B, 0xDB, 0xDA, 0x1A, 0x1E, 0xDE, 0xDF, 0x1F, 0xDD, 0x1D, 0x1C, 0xDC,
  0x14, 0xD4, 0xD5, 0x15, 0xD7, 0x17, 0x16, 0xD6, 0xD2, 0x12, 0x13, 0xD3,
  0x11, 0xD1, 0xD0, 0x10, 0xF0, 0x30, 0x31, 0xF1, 0x33, 0xF3, 0xF2, 0x32,
  0x36, 0xF6, 0xF7, 0x37, 0xF5, 0x35, 0x34, 0xF4, 0x3C, 0xFC, 0xFD, 0x3D,
  0xFF, 0x3F, 0x3E, 0xFE, 0xFA, 0x3A, 0x3B, 0xFB, 0x39, 0xF9, 0xF8, 0x38,
  0x28, 0xE8, 0xE9, 0x29, 0xEB, 0x2B, 0x2A, 0xEA, 0xEE, 0x2E, 0x2F, 0xEF,
  0x2D, 0xED, 0xEC, 0x2C, 0xE4, 0x24, 0x25, 0xE5, 0x27, 0xE7, 0xE6, 0x26,
  0x22, 0xE2, 0xE3, 0x23, 0xE1, 0x21, 0x20, 0xE0, 0xA0, 0x60, 0x61, 0xA1,
  0x63, 0xA3, 0xA2, 0x62, 0x66, 0xA6, 0xA7, 0x67, 0xA5, 0x65, 0x64, 0xA4,
  0x6C, 0xAC, 0xAD, 0x6D, 0xAF, 0x6F, 0x6E, 0xAE, 0xAA, 0x6A, 0x6B, 0xAB,
  0x69, 0xA9, 0xA8, 0x68, 0x78, 0xB8, 0xB9, 0x79, 0xBB, 0x7B, 0x7A, 0xBA,
  0xBE, 0x7E, 0x7F, 0xBF, 0x7D, 0xBD, 0xBC, 0x7C, 0xB4, 0x74, 0x75, 0xB5,
  0x77, 0xB7, 0xB6, 0x76, 0x72, 0xB2, 0xB3, 0x73, 0xB1, 0x71, 0x70, 0xB0,
  0x50, 0x90, 0x91, 0x51, 0x93, 0x53, 0x52, 0x92, 0x96, 0x56, 0x57, 0x97,
  0x55, 0x95, 0x94, 0x54, 0x9C, 0x5C, 0x5D, 0x9D, 0x5F, 0x9F, 0x9E, 0x5E,
  0x5A, 0x9A, 0x9B, 0x5B, 0x99, 0x59, 0x58, 0x98, 0x88, 0x48, 0x49, 0x89,
  0x4B, 0x8B, 0x8A, 0x4A, 0x4E, 0x8E, 0x8F, 0x4F, 0x8D, 0x4D, 0x4C, 0x8C,
  0x44, 0x84, 0x85, 0x45, 0x87, 0x47, 0x46, 0x86, 0x82, 0x42, 0x43, 0x83,
  0x41, 0x81, 0x80, 0x40
};

static unsigned short int us_CalculateCrc16(unsigned char *lpuc_Frame, unsigned short int lus_Len){
  unsigned char luc_CRCHi = 0xFF;
  unsigned char luc_CRCLo = 0xFF;
  int li_Index=0;
  while(lus_Len--){
    li_Index = luc_CRCLo ^ *( lpuc_Frame++);
    luc_CRCLo = (unsigned char)( luc_CRCHi ^ cuc_CRCHi[li_Index]);
    luc_CRCHi = cuc_CRCLo[li_Index];
  }
  return (unsigned short int )(luc_CRCLo << 8 | luc_CRCHi);
}

int main() {
    //Please fill in the data frame you want to set according to the datasheet(Excluding 2 Byte checksum frames)
    unsigned char data[] = {0x55, 0x07, 0x00, 0x01, 0x01, 0x01};

    unsigned short int crc_data = 0x0000;
    unsigned int length = sizeof(data)/sizeof(unsigned char);
    unsigned char datas[length + 2];
    for (int n = 0; n < length; n++)datas[n] = data[n];
    printf("The data frame length is: %d\n", length);
    crc_data = us_CalculateCrc16(data, length);
    datas[length] = (crc_data & 0xff00) >> 8;
    datas[length+1] = crc_data & 0xff;
    printf("The last two CRC check digits are: %04x\n", crc_data);
    printf("The datas send to the radar: ");
    for (int n = 0; n < length + 2; n++){
        printf("0x%02x ", datas[n]);
    }
    printf("\n");
    return 0;
}
```

Después de ejecutar el editor, también es posible obtener los marcos de datos completos que deben enviarse al radar.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/8.png"/></div>

**Paso 4.** Enviar los marcos de datos al radar.

Conecta el radar directamente al puerto USB de la computadora mediante un dispositivo [**UART a USB**](https://www.seeedstudio.com/USB-To-Uart-5V-p-1833.html?queryID=588a892811a774ad3005ea0d31427532&objectID=1111&indexName=bazaar_retailer_products). El cableado se muestra en la tabla a continuación.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/22.png" /></div></td>
    </tr>
    <tr>
      <td align="center">Sensor Radar</td>
      <td align="center" />
      <td align="center">Placa Principal</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--&gt;</td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">RX</td>
      <td align="center">--&gt;</td>
      <td align="center">TX</td>
    </tr>
    <tr>
      <td align="center">TX</td>
      <td align="center">--&gt;</td>
      <td align="center">RX</td>
    </tr>
  </tbody></table>

Usa un software como un asistente de depuración serial para seleccionar el puerto serial donde se encuentra el radar.

<div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/60GHzradar/17.png"/></div>

:::caution
El radar de 24GHz necesita alimentación de 5V, de lo contrario el radar puede no funcionar correctamente.
:::

Después de una conexión exitosa, verás que el radar envía un flujo continuo de mensajes.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/16.png"/></div>

Pega el marco de datos completo que obtuvimos en el **paso 3** en el área de envío del software. Luego haz clic en Enviar.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/18.png"/></div>

Puedes buscar un conjunto de datos devuelto cuyo tercer elemento sea 0x03. Este conjunto de datos es la información obtenida tras la consulta. Si envías datos que ajustan los parámetros del radar, también devolverá dicha información.

:::caution
Si eliges **ASCII** como formato para enviar datos, cada conjunto de datos debe tener el prefijo **0x**. Si eliges **HEX**, entonces cada conjunto de datos no necesita el prefijo **0x**.
:::

## Solución de problemas

**FAQ1: ¿Cómo aplicar el código a Seeeduino (o Arduino)?**

> Debido a la diferente arquitectura de hardware, el puerto serial de las series XIAO o Wio Terminal se llama Serial1, mientras que Seeeduino o Arduino necesitan usar un puerto serial por software. Si quieres usar el radar con Seeeduino, puedes cambiar el puerto serial por software o usar los pines 2 (RX) y 3 (TX).  
> <div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/19.png"/></div>

**FAQ2: ¿Qué debo hacer si XIAO BLE y Radar recopilan datos por mucho tiempo y no puedo subir el código?**

> En este caso, puedes presionar ligeramente con el dedo el botón de reset en la parte superior del XIAO BLE para volver a subir el programa y ejecutarlo.

## Recursos

- **[PDF]** [Datasheet del Sensor de Radar para Detección de Respiración en Sueño](http://files.seeedstudio.com/wiki/mmWave-radar/MR24FDB1_Datasheet.pdf)
- **[ZIP]** [Esquema Respiratorio 24GHz](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-respiratory-schematic.zip)
- **[PDF]** [Manual de usuario](https://files.seeedstudio.com/wiki/mmWave-radar/MR24FDB1_User_manual.pdf)
- **[PPTX]** [Serie de sensores Seeed mmWave V2.0](https://files.seeedstudio.com/wiki/mmWave-radar/Seeed-mmWave-sensor-series-V2.0.pptx)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes apoyos y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
