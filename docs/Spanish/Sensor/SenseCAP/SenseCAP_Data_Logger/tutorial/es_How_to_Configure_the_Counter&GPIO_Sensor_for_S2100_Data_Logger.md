---
description: Configure the Counter & GPIO Sensor
title: Configuración de Counter & GPIO Sensor
keywords:
- SenseCAP data logger
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger
last_update:
  date: 4/12/2023
  author: Guillermo
---

# Primeros pasos con el S2100 y un sensor Counter & GPIO

Comencemos aprendiendo a usar el S2100 con un sensor tipo Counter & GPIO. Una vez que domines esto, exploraremos los aspectos básicos de su aplicación, lo que te dará una buena idea de cómo conectar tu propio sensor personalizado en el futuro.

## Sonda del sensor

Prepara los siguientes elementos:

- Registrador de datos (Data Logger)  
- Sensor de lluvia RG-15 (como ejemplo)  
- Cable de 8 pines  
- Destornillador de cruz (n.º 2)  
- App SenseCAP Mate  

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/2.png"/></div>

# Conectar la sonda del sensor

## Desmontar el registrador de datos

1. Desatornilla los tres tornillos.  
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/3.png"/></div>

2. Retira la tapa.  
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/4.png"/></div>

3. Retira la tapa roscada, pasa por ella el cable del sensor, luego por la tapa inferior y conéctalo al terminal de cableado.  
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/5.png"/></div>

### Tabla de pines del registrador

| **N.º** | **Pin** | **Descripción** |
|--------|---------|------------------|
| 1 | 12V | Entrada de 12V DC externa. La batería interna actúa como respaldo. |
| 2 | 5V | Salida de 5V para alimentar el sensor. |
| 3 | 3V | Salida de 3V para alimentar el sensor. |
| 4 | IO | Entrada de nivel o de pulsos. |
| 5 | V1 | Entrada de voltaje de 0 a 10 V. |
| 6 | V2 | Entrada de voltaje de 0 a 10 V. |
| 7 | A | RS485 A/+ |
| 8 | B | RS485 B/- |
| 9 | I1 | Entrada de corriente de 4 a 20 mA. |
|10 | I2 | Entrada de corriente de 4 a 20 mA. |
|11 | GND | Tierra |
|12 | GND | Tierra |

## Opciones de alimentación para el sensor

El registrador admite dos modos de alimentación. Elegiremos el modo **Batería interna**:

| **Modo**             | **Descripción** |
|----------------------|------------------|
| Batería interna      | El registrador y el sensor se alimentan por baterías internas. Puede conectarse un sensor de 5V. |

## Conectar al registrador

### Secuencia de cableado:

| **Color del cable** | **Descripción**             |
|---------------------|-----------------------------|
| Rojo                | 5V                          |
| Negro               | GND (cualquier puerto GND)  |
| Amarillo            | IO                          |

1. Pasa el cable de 8 pines por la cubierta inferior y conéctalo a la base del registrador según la secuencia indicada.  
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/6.png"/></div>

2. Conecta la tapa superior, el anillo de goma y la tapa roscada en ese orden.  
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/7.png"/></div>  
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/8.png"/></div>

3. **Aprieta los tornillos y las tapas roscadas** para verificar la impermeabilidad. Si el cable es demasiado delgado, agrega cinta impermeable como se muestra:  
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/9.png"/></div>

> **Nota:** Durante el montaje, asegúrate de instalar correctamente las juntas impermeables del registrador y la caja adaptadora, y de apretar adecuadamente las tapas roscadas y tornillos para garantizar la estanqueidad.

## Conectar el sensor de lluvia

### Secuencia de cables del sensor RG-15:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/10.png"/></div>

1. Quita los cuatro tornillos y la tapa. Pasa el cable de 8 pines por la tapa inferior y conéctalo a la base J1 según la siguiente secuencia:

| **Color del cable** | **Descripción** |
|---------------------|-----------------|
| Rojo                | V+              |
| Negro               | GND             |
| Amarillo            | OUT             |

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/11.png"/></div>  
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/12.png"/></div>  
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/13.png"/></div>

2. Configura los interruptores DIP del sensor:  
   - Interruptor 1: **ON**  
   - Interruptores 2, 3 y 4: **OFF**  
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/14.png"/></div>

3. Coloca la tapa del sensor y aprieta los tornillos para completar la conexión.  
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/15.png"/></div>

¡Con esto hemos finalizado el cableado! Ahora pasemos a configurar el S2100 en la aplicación.

# Configurar el S2100

## Conectar el sensor a la app

1. Mantén presionado el botón durante **3 segundos**. El LED parpadeará con una frecuencia de 1 s. Usa la app para conectarte en menos de un minuto o el dispositivo se apagará o reiniciará.  
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/16.png"/></div>

2. Selecciona **“S2100 Data Logger”**.

Pulsa el botón **“Setup”** para activar el Bluetooth y luego pulsa **“Scan”** para comenzar el escaneo.  
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/17.png"/></div>  
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/18.png"/></div>

3. Selecciona el sensor por su número de serie (S/N), que aparece en la etiqueta delantera del dispositivo. Se mostrará la información básica del sensor.  
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/19.png"/></div>  
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/20.png"/></div>

4. Cuando la conexión por Bluetooth sea exitosa, entrarás al **modo de configuración**. El LED parpadeará con una frecuencia de 2 s.

## Configurar parámetros básicos desde la App

### Seleccionar la plataforma y la frecuencia

Los sensores S210x están fabricados para soportar un plan de frecuencias universal que abarca de 863 MHz a 928 MHz en un solo SKU. Es decir, cada dispositivo puede operar con 7 planes de frecuencia distintos.

Aquí seleccionamos la plataforma **"SenseCAP for Helium"** o **"SenseCAP for TTN"**, según tu situación.

> **Nota:** El registrador puede subir datos si existe una red Helium cerca del usuario. Utiliza la consola privada de Helium de SenseCAP, por lo que **no es necesario crear un dispositivo en la consola de Helium**.

Para la plataforma SenseCAP sobre TTN, se necesita usar un [gateway LoRaWAN exterior de SenseCAP](https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html).

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/21.png"/></div>

### Establecer el intervalo

El modo de trabajo del dispositivo consiste en despertarse cada cierto intervalo para medir y subir datos vía LoRa.

Por ejemplo, el valor por defecto es **cada 60 minutos**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/22.png"/></div>

### Configurar política de paquetes

La estrategia de envío de paquetes tiene tres modos. Aquí seleccionamos **1N**, aunque puedes elegir según tus necesidades.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/23.png"/></div>

| **Parámetro** | **Descripción** |
|--------------|-----------------|
| 2C+1N (por defecto) | 2 confirmaciones + 1 sin confirmar. Minimiza la pérdida de paquetes pero consume más datos o créditos en la red Helium. |
| 1C | 1 paquete confirmado. El dispositivo duerme tras recibir confirmación del servidor. |
| 1N | 1 paquete no confirmado. El dispositivo duerme sin importar si el servidor recibe el dato o no. |

### Restaurar configuración de fábrica

Cuando se selecciona la plataforma SenseCAP, es necesario usar EUI/App EUI/App Key fijos. Por eso, se recomienda **restaurar los valores de fábrica** si se cambia desde otra plataforma a SenseCAP.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/24.png"/></div>

Si cometemos un error o queremos empezar de nuevo, simplemente haz clic en el botón. El dispositivo se restaurará a su configuración de fábrica.

> **Nota:** Esta función solo reinicia los parámetros básicos, no toda la configuración avanzada.

## Configurar sensor GPIO desde la App

Selecciona el protocolo **"GPIO"** y ajusta los siguientes parámetros:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/25.png"/></div>

1. Selecciona el voltaje de alimentación para el sensor. Se admiten **3V / 5V / 12V**. Seleccionamos **5V** aquí.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/26.png"/></div>  
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/27.png"/></div>

2. Configura el tiempo de **calentamiento del sensor** (Warm-up time), que es el tiempo que necesita para alcanzar su máxima precisión tras recibir energía. Introduce **50 ms**.

3. Selecciona el tipo de entrada:

| **Modo Nivel** | Se recolecta una señal de nivel (alto = 1, bajo = 0). |
|----------------|-------------------------------------------------------|
| **Modo Contador** | Se recolectan pulsos y se cuenta su número.         |

Seleccionamos **Modo Contador** aquí.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/28.png"/></div>

### Configurar el sensor en modo contador

Una vez seleccionado el **Modo Contador** como tipo de entrada, configura lo siguiente:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/29.png"/></div>

| **Parámetro** | **Descripción** |
|--------------|-----------------|
| Entrada digital | Determina el tipo de pulso válido:<br />**Pull High**: válido al detectar un flanco ascendente.<br />**Pull Low**: válido al detectar un flanco descendente.<br />Seleccionamos **Pull High**. |
| Filtro digital | Habilita esta opción si el ancho del pulso supera los 10 ms.<br />**Habilitado por defecto.** |
| Reiniciar el conteo tras reinicio | Si está activado, el contador se reinicia a 0 al reiniciar el datalogger.<br />**Desactivado por defecto.** |
| Y = Ax + B | Fórmula de conversión:<br />**Y** es el valor que se sube,<br />**x** es el valor del contador.<br />A = 0.2, B = 0. |
| Conteo por unidad de tiempo | Si se habilita, el valor subido será el conteo por hora (por ejemplo, 1000/h).<br />**Desactivado** aquí. |

Una vez completada la configuración, pulsa **"Back to Home"**. La conexión Bluetooth con el nodo se desconectará automáticamente y el dispositivo intentará conectarse a la red:

- LED rojo parpadeando lento: intentando conectar
- LED verde parpadeando rápido: conexión exitosa

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/30.png"/></div>

# Ver datos en el portal SenseCAP

## Vincular sensor al portal SenseCAP

Abre la app **SenseCAP Mate** y sigue estos pasos:

1. Escanea el código QR del dispositivo.  
2. Pulsa **"Add device"** (Agregar dispositivo) en la esquina superior derecha.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/31.png"/></div>

3. Escanea el QR para vincularlo a tu cuenta. Si no lo asignas a un grupo, se colocará en el grupo predeterminado.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/32.png"/></div>

4. Si el código QR está dañado, puedes ingresar manualmente el **EUI** del dispositivo. Asegúrate de usar el formato correcto y pulsa **"Confirm"**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/33.png"/></div>  
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/34.png"/></div>

## Ver datos en el portal SenseCAP

En la app **SenseCAP Mate** o desde el sitio web [http://sensecap.seeed.cc/](http://sensecap.seeed.cc/), puedes revisar el estado en línea del dispositivo y los datos más recientes.

En la lista de sensores, se muestra el estado de conexión y la hora del último envío de datos:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/35.png"/></div>

También puedes ver los datos directamente en la app:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/36.png"/></div>  
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/1.png"/></div>
