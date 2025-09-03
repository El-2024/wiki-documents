---
description: Connect to The Things Network
title: Conectarse a The Things Network
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/003.webp
slug: /es/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-The-Things-Network
last_update:
  date: 07/23/2025
  author: Guillermo
---

# Conectarse a The Things Network

## The Things Network  
The Things Stack es un servidor de red LoRaWAN de nivel empresarial basado en un núcleo de código abierto. Permite construir y gestionar redes LoRaWAN en tu propio hardware o en la nube.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/003.png)

## Conexión a The Things Network

### Crear una cuenta nueva  
Sitio web de [TTN](https://www.thethingsnetwork.org/)

### Configurar el sensor

1. Abre la aplicación SenseCAP Mate.  
2. Mantén presionado el botón del sensor durante 3 segundos. El LED parpadeará con una frecuencia de 1 s.  

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/004.png)

3. Pulsa el botón “Setup” para activar el Bluetooth y luego pulsa “Scan” para buscar el sensor.  

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/005.png)

4. Selecciona el sensor por su número de serie (S/N en la etiqueta). Se mostrará su información básica.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/006.png)  
![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/007.png)

### Configurar la frecuencia del sensor desde SenseCAP Mate App

1. Haz clic en “Setting” y selecciona la plataforma “**The Things Network**”.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/008.png)

2. Selecciona el plan de frecuencia correspondiente. Por ejemplo, si tu gateway es US915, selecciona US915.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/009.png)

3. El dispositivo utiliza OTAA por defecto para unirse a la red LoRaWAN. Puedes configurar los siguientes parámetros:

| **Parámetro** | **Tipo** |
|--------------|----------|
| Device EUI   | 16 dígitos hexadecimales (0 ~ F) |
| App EUI      | 16 dígitos hexadecimales (0 ~ F) |
| App Key      | 32 dígitos hexadecimales (0 ~ F) |

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0010.png)

4. Configura la política de envío de paquetes (Packet Policy). El sensor tiene tres modos de envío:

| **Parámetro** | **Descripción** |
|--------------|------------------|
| 2C+1N (predeterminado) | 2 paquetes confirmados y 1 sin confirmar. Minimiza la pérdida de paquetes pero consume más datos. |
| 1C | 1 paquete confirmado. El dispositivo duerme tras recibir confirmación del servidor. |
| 1N | 1 paquete sin confirmar. Envía y duerme sin esperar respuesta del servidor. |

5. Pulsa el botón “Send” para aplicar la configuración al sensor.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0011.png)

6. Pulsa el botón “Home” para desconectar el sensor del Bluetooth.  
   El sensor se reiniciará.

7. Al desconectarse del Bluetooth, el LED se enciende por **5 segundos** y luego parpadea con efecto de **luz de respiración**.

## Configuración en TTN

### Registrar gateway en TTN
Crea un gateway en la consola TTN según tu configuración física.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0012.png)

### Crear una aplicación
Crea una aplicación en TTN Console para registrar dispositivos y gestionar datos de red.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0013.png)

## Añadir el sensor a TTN Console

1. Selecciona la aplicación creada y haz clic en **Register end device**.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0014.png)

2. Selecciona el dispositivo desde el repositorio LoRaWAN.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0015.png)

Configura los siguientes campos:

- **End device brand**: SenseCAP  
- **Model**: Tu modelo de sensor (si no está, usar modo manual)  
- **Hardware/Firmware Version**: La más reciente  
- **Profile/Plan de frecuencia**: Lo obtienes desde SenseCAP Mate App

| **Frecuencia del sensor** | **Nombre común** | **Descripción** |
|---------------------------|------------------|------------------|
| EU863-870                 | EU868            | Europa |
| US902-928                 | US915            | Estados Unidos |
| AU915-928                 | AU915            | Australia |
| KR920-923                 | KR920            | Corea del Sur |
| IN865-867                 | IN865            | India |
| AS923                    | AS923-1/2        | Asia |

Para Helium, consulta:  
https://docs.helium.com/lorawan-on-helium/frequency-plans

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0017.png)

3. Configura la información de aprovisionamiento:

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0018.png)

- **JoinEUI** (App EUI): desde la app SenseCAP Mate  
- **Device EUI y App Key**: desde la configuración del sensor

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0019.png)  
![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0020.png)  
![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0021.png)

4. Haz clic en **Register end device** para guardar.

:::tip Nota
Si el sensor se une exitosamente a la red, el LED parpadeará rápidamente durante **2 segundos**.
:::

## Ver datos en la consola de TTN

En la sección **Data**, verás los paquetes enviados por el sensor.  
Para decodificar el payload, consulta la sección de "Payload Decoding".

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0022.png)
