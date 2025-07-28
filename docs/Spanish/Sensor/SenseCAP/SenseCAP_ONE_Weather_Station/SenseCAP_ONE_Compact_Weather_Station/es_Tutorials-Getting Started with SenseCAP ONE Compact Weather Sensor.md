---
description:  Getting Started with SenseCAP ONE Compact Weather Sensor
title: Guía de Inicio con el Sensor Meteorológico Compacto SenseCAP ONE
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor
last_update:
  date: 07/23/2025
  author: Guillermo
---
# Guía de Inicio con el Sensor Meteorológico Compacto SenseCAP ONE

# Preinstalación

## Diagrama

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image1.png"/></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image2.png"/></div>

# Instalación

### Introducción a las Interfaces del Dispositivo

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image3.png"/></div>

Hay dos conectores en la parte inferior del dispositivo:

- La interfaz USB tipo C permite conectar el dispositivo a tu computadora mediante un cable USB-C para configurarlo.

- La interfaz principal de datos puede conectarse al cable M12 de 8 pines, compatible con múltiples protocolos de bus.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image4.png"/></div>

### Conectar con Cable USB

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image5.png"/></div>

### Cable M12

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image6.png"/></div>

El dispositivo utiliza un conector M12 de 8 pines. Los pines de diferentes colores proporcionan alimentación y comunicación de datos (como se muestra en el diagrama anterior).

Al trabajar con RS-485, puedes conectar solo 4 cables (sin usar la función de calefacción), y el resto puede envolverse individualmente con cinta para evitar cortocircuitos.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image7.png"/></div>

Los orificios del cable y los pines del conector del dispositivo deben estar alineados al conectar el cable.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image8.png"/></div>

Inserta el cable y ajústalo en sentido horario.

**Nota**: El cable debe estar apuntando hacia la parte inferior antes de insertarlo. De lo contrario, los pines podrían quedar torcidos y causar fallas en la comunicación.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image9.png"/></div>

Al utilizar el dispositivo con función de calefacción, se requiere una fuente de alimentación separada de 24 V (se recomienda 24 V@1 A). El cable gris (pin 5) se conecta al polo negativo de la fuente, y el cable rosa (pin 6) al polo positivo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image10.png"/></div>

### Instalar el Dispositivo

Existen dos métodos principales de instalación: montado en un poste con manguito o en una plataforma con placa de brida.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image11.png" /></div>

El tamaño del manguito se muestra a continuación.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image12.png"/></div>

Se recomienda que el diámetro del poste sea menor o igual a 75 cm.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image13.png"/></div>

Las dimensiones de la placa de brida se muestran a continuación.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image14.png"/></div>

# Modo de Operación del Dispositivo

Después de la instalación, puedes encender el dispositivo, configurarlo y comenzar a recolectar datos.

El dispositivo tiene dos modos de operación: **modo de configuración** y **modo de trabajo**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image15.png"/></div>

## Configurar el Dispositivo vía Puerto USB

En la parte inferior del dispositivo hay una tapa redonda impermeable. Gírala en sentido antihorario para retirarla y verás un conector USB tipo C y un botón de configuración.

Conecta el dispositivo a tu computadora con un cable USB tipo C. El sistema instalará automáticamente el controlador. Después de la instalación, aparecerá un puerto serial en el administrador de dispositivos.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image16.png"/></div>

Si el controlador no se instala automáticamente, puedes [descargarlo](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers) e [instalarlo](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers) manualmente (versión CP210x para Windows).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image17.png"/></div>

**Existen dos métodos para configurar el dispositivo:**

- Herramienta de Configuración SenseCAP ONE  
- Herramienta de depuración serial

## Herramienta de Configuración SenseCAP ONE

Esta herramienta ofrece una interfaz gráfica para configurar el dispositivo. Puedes descargarla desde el siguiente enlace de GitHub:

<https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases>

Selecciona el software según tu sistema operativo: Windows, macOS o Linux.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image18.png"/></div>

A continuación, se muestra la interfaz principal de la herramienta:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image19.png"/></div>

1. Abre el software, haz clic en la lista desplegable del puerto serial y selecciona el puerto correspondiente al dispositivo.  
2. Configura la tasa de baudios a 9600.  
3. Haz clic en **Connect**. Si la conexión es exitosa, el área de datos del sensor mostrará las mediciones.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image20.png"/></div>

Haz clic en **Settings** para entrar en la configuración del dispositivo y luego en **Read From Device** para obtener la información.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image21.png"/></div>

1. Selecciona el protocolo de comunicación. En este ejemplo, elegimos RS-485 Modbus RTU.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image22.png"/></div>

2. Modifica la dirección Modbus: escribe la dirección y haz clic en **Write to Device**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image23.png"/></div>

En la página de configuración, puedes modificar: nombre del dispositivo, tipo de datos y frecuencia de envío. Luego de cualquier cambio, haz clic en **Write to Device** para aplicarlos.

En los ajustes de aplicación, puedes establecer el intervalo de lectura del sensor (mínimo: 2 s) y el rango de puntos de la curva.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image24.png"/></div>

Haz clic en **Firmware Update** para actualizar el firmware. Contacta a soporte técnico o ventas (sensecap@seeed.cc) para obtenerlo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image25.png"/></div>

En la página de actualización, elige si deseas actualizar el firmware de la placa principal o del controlador. Selecciona el archivo desde tu computadora y haz clic en **Update Now**. Si hay un corte de energía durante el proceso, la actualización no se completará y deberás repetirla.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image26.png"/></div>

## Herramienta de Depuración Serial

La configuración de comunicación es la siguiente:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image27.png"/></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image28.png"/></div>

- En la herramienta Serial Debug Assistant, selecciona el puerto COM correspondiente.  
- Marca la opción **"click Enter to start a new line"**.  
- Establece la tasa de baudios en 9600.  
- Escribe y envía el comando en el área de envío.  
- Si recibes el mensaje 0xA en la ventana de recepción, la configuración fue exitosa. Si no, revisa el puerto COM y la tasa de baudios.

Consulta los comandos ASCII detallados en el siguiente capítulo.

# Protocolos de Comunicación

El dispositivo admite los siguientes protocolos de comunicación:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image29.png"/></div>

## Protocolo Modbus-RTU

**Parámetros de comunicación del protocolo**

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image31.png"/></div>

### Formato de Mensaje del Protocolo Modbus-RTU

Los datos del sensor se almacenan en el **Input Register** (registro de entrada) y son de solo lectura.

La dirección del dispositivo y la velocidad en baudios de comunicación RS-485 se almacenan en el **Holding Register** (registro de retención) y pueden modificarse.

Cada registro tiene 16 bits (2 bytes).

**Lectura de registros de entrada (Input Register)**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image32.png"/></div>

**Lectura y escritura del registro de retención (Holding Register)**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image33.png"/></div>

### Definición de Direcciones de Registro

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image34.png"/></div>

### Lectura Modbus-RTU

Ejemplo utilizando la herramienta **Modbus Poll**  
(Descarga: <https://www.modbustools.com/download.html>)

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image35.png"/></div>

Parámetros de conexión:  
- Tasa de baudios: 9600 bps  
- 8 bits de datos  
- Sin paridad  
- 1 bit de parada

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image36.png"/></div>

Leer el registro de temperatura del aire desde la dirección 0x0000 a 0x0001. Haz clic en **Setup**, selecciona **Read/Write Definition**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image37.png"/></div>

Configura los valores:  
- ID de esclavo: 5-en-1 = 10, 7-en-1 = 20, 9-en-1 = 38  
- Código de función: 04  
- Dirección inicial: 0  
- Cantidad: 5-en-1 = 6, 7-en-1 = 28, 9-en-1 = 32

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image38.png"/></div>

El ordenador leerá los datos del sensor cada 1 s. En el ejemplo, la medición mostrada es `28300`, que al dividirla por 1000 da el valor real de temperatura:  
**28300 / 1000 = 28.3 °C**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image39.png"/></div>

### Decodificación Modbus

**Temperatura positiva**  
1. El host envía: `01 04 00 00 00 02 71 CB`  
2. El esclavo responde: `01 04 04 00 00 6E 8C D6 41`  
3. Dato retornado: `0x00006E8C` → 28300 (decimal) → **28.3 °C**

**Temperatura negativa**  
1. El host envía: `01 04 00 00 00 02 71 CB`  
2. El esclavo responde: `01 04 04 FF FF FC 18 D6 41`  
3. Dato retornado: `0xFFFFFC18`  
4. Cálculo de complemento a dos: `-((FFFFFC18 - 1) = FFFFFC17)` = `-1000`  
5. Temperatura: **-1000 / 1000 = -1 °C**

### Decodificación por Modelo

**S500**  
Leer registros 0x0000~0x0005  
Comando: `0A 04 00 00 00 06 71 73`  
Respuesta: contiene temperatura, humedad y presión atmosférica.

**S700**  
Leer registros 0x0000~0x001F y 0x0030~0x0033  
Comando: `14 04 00 00 00 20 F3 06`  
Respuesta: contiene temperatura, humedad, presión, luz, viento, lluvia y temperatura calefactor.

**S900**  
Leer registros 0x0000~0x001F y 0x0030~0x0033  
Comando: `26 04 00 00 00 20 F7 05`  
Respuesta: datos similares a S700 + PM2.5 y PM10.

PM2.5/PM10 se leen por separado:  
Comando: `26 04 00 30 00 04 F7 11`

**S1000**  
Leer registros 0x0000~0x001F y 0x0030~0x0033  
Comando: `2B 04 00 00 00 20 F6 18`  
Respuesta: incluye temperatura, humedad, presión, luz, viento, lluvia, calefacción y volcamiento.

PM2.5, PM10 y CO₂ se leen por separado:  
Comando PM: `2B 04 00 30 00 04 F6 0C`  
Comando CO₂: `2B 04 00 40 00 02 77 D5`

 

## Sensor de Ruido

El sensor de ruido se comporta como un sensor RS-485 independiente, conectado en paralelo con otros en el mismo bus. Se configura y consulta por separado.

### Especificaciones:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image40.png"/></div>

### Protocolo y Configuración

Comunicación mediante RS485 Modbus-RTU. Parámetros:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image41.png"/></div>

### Consulta de Datos

Dirección del sensor: `40` (0x28)  
Consulta exitosa devuelve:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image42.png"/></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image01.png"/></div>

Cálculo:  
**DB Real = valor del registro / 100**  
Ejemplo: `0x128E = 4750` → **47.5 dB**

 

## Protocolo ASCII

### Definición de Comandos

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image44.png"/></div>

### Formato de Comandos de Consulta

Existen dos formatos:

**1. Sin `=` → consulta básica**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/11.png"/></div>

Ejemplo: `?<CR><LF>` → consulta la dirección del dispositivo.

**2. Con `=` → consulta con argumento**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/22.png"/></div>

Ejemplo: `0XA;BD=?<CR><LF>` → consulta velocidad en baudios.

### Formato de Comando de Configuración

**Establecer parámetros, como la tasa de baudios**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/33.png"/></div>

Ejemplo: `0XA;BD=96<CR><LF>` → establece velocidad a 9600 bps.

### Lista de Comandos

Consulta la guía completa:  
<https://files.seeedstudio.com/products/101990784/SenseCAP%20ONE%20Compact%20Weather%20Sensor%20User%20Guide-v2.0.pdf>

 

## SDI-12

SDI-12 utiliza tres cables:  
- 2 para alimentación  
- 1 para señal de datos

Cada sensor en el bus tiene una dirección única ('0'–'9', 'A'–'Z').  
Dirección predeterminada: `'0'`.

Admite comandos conforme a SDI-12 v1.4. Alimentación: 3.6~16 V CC. El sensor entra en modo de reposo tras energizarse, a la espera de instrucciones.

Configuración de bits:  
- 9600 bps  
- 1 bit de inicio  
- 7 bits de datos (lógica inversa)  
- 1 bit de paridad par  
- 1 bit de parada

Formato de byte:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/44.png"/></div>

### Comandos y Respuestas SDI-12

Consulta también:  
<https://files.seeedstudio.com/products/101990784/SenseCAP%20ONE%20Compact%20Weather%20Sensor%20User%20Guide-v2.0.pdf>

 

### Lectura SDI-12

**Cableado del protocolo SDI-12**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image47.png"/></div>

**Uso del adaptador USB a SDI-12 para comunicarse con el dispositivo**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image48.png"/></div>

**Configuración de la comunicación**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image49.png"/></div>

Conecta los siguientes cables al adaptador USB-SDI-12:

- Cable verde (GND Datos)  
- Cable amarillo (SDI-12 Datos)

Conecta los siguientes cables a una fuente de alimentación de 12 V:

- Cable rojo (Vin+, positivo)  
- Cable marrón (Vin-, negativo)

Descarga el asistente de depuración de puerto serie:  
<https://github.com/Neutree/COMTool>

Pasos:

1. Selecciona el puerto COM correcto  
2. Configura la tasa de baudios según el adaptador USB–SDI-12 (no la del protocolo SDI-12)  
3. Marca la opción "CRLF"  
4. Abre el puerto serie  
5. Envía el comando de consulta de dirección: `?!`  
   - Si la respuesta es `"0"`, la conexión es correcta.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image50.png"/></div>

 

**Iniciar medición**

Para leer: temperatura, humedad, presión barométrica e intensidad lumínica:  
- Envía el comando: `0M!`  
- El sensor responde con: `00024` → tarda 2 s y devuelve 4 valores.  
- Después de 2 s, responde con `"0"` indicando que completó la medición.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image51.png"/></div>

Luego, envía el comando: `0D0!`  
- Valores devueltos:  
  - Temperatura del aire: +27.01 °C  
  - Humedad: 64.74 %  
  - Presión barométrica: 100720 Pa  
  - Intensidad lumínica: 10 Lux

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image52.png"/></div>

 

**Medición extendida**

- Envía el comando: `0M1!`  
- Respuesta: `00056` → tarda 5 s y devuelve 6 valores.  
- Luego responde con `"0"` cuando termina la medición.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image53.png"/></div>

Envía el comando: `0D0!`  
- Valores devueltos:  
  - Dirección mínima del viento: 345.9°  
  - Dirección máxima del viento: 347.5°  
  - Dirección promedio del viento: 346.3°  
  - Velocidad mínima del viento: 2.8 m/s  
  - Velocidad máxima del viento: 2.8 m/s  
  - Velocidad promedio del viento: 2.8 m/s

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image54.png"/></div>

 

**Medición continua**

- Envía el comando: `0R2!`  
- Valores devueltos:  
  - Lluvia acumulada: 1.2 mm  
  - Duración acumulada de lluvia: 20 s  
  - Intensidad de lluvia: 1.2 mm/h  
  - Intensidad máxima de lluvia: 72.0 mm/h

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image55.png"/></div>

 

# Códigos de Error

## Códigos de error Modbus

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image56.png"/></div>

## Códigos de error ASCII

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image57.png"/></div>

## Códigos de error SDI-12

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image58.png"/></div>
