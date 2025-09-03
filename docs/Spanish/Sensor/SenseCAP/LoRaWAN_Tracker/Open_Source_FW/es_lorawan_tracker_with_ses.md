---
description: Get Started with SenseCAP Card Tracker T1000-E for LoRaWAN via SES
title: Primeros Pasos con SES 
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/SenseCAP/LoRaWAN_Tracker/lorawan_opensource.webp
slug: /es/open_source_lorawan
sidebar_position: 2
last_update:
  date: 07/21/2025
  author: Guillermo
---

## Preparación

### Preparación de Hardware

* SenseCAP T1000-E x 1  
* Cable USB x 1  
* Computadora x 1  

### Preparación de Software

Antes de comenzar a desarrollar, se requieren las siguientes herramientas de software.

#### SEGGER Embedded Studio (SES)

SES es una solución todo en uno para gestionar, compilar, probar y desplegar aplicaciones embebidas. Permite un desarrollo fluido y eficiente gracias a su amplia gama de funciones. El potente gestor de proyectos facilita la gestión de proyectos grandes y pequeños. Las funciones de control de versiones permiten el despliegue automático de aplicaciones.

Descarga el paquete de instalación correspondiente a tu sistema operativo.

<a  href="https://www.segger.com/products/development-tools/embedded-studio/" target="_blank"><span>SEGGER Embedded Studio (SES) - Descargar</span></a>

:::tip  
Se recomienda usar la versión 5.68.  
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/5.68version.png" alt="pir" width={800} height="auto" /></p>

#### nRF5 SDK

El nRF5 SDK ofrece un entorno completo para desarrollar con dispositivos de la serie nRF5, incluyendo drivers, librerías, ejemplos para periféricos, SoftDevices y protocolos radio propietarios.

<a  href="https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs" target="_blank"><span>nRF5 SDK - Descargar</span></a>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/SDK_version.png" alt="pir" width={800} height="auto" /></p>

#### Paquete de Ejemplo Seeed T1000-E

Seeed proporciona un proyecto de ejemplo para que los desarrolladores comiencen rápidamente. Incluye comunicación LoRaWAN, adquisición de información de posicionamiento, datos de sensores a bordo, etc.

<a  href="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Seeed_T1000_E_Dev_Board_Alpha-main.zip" target="_blank"><span>Seeed Example - Descargar</span></a>

**Agregar el archivo de ejemplo Seeed al nRF5 SDK**

Copia el archivo de ejemplo Seeed T1000-E a la siguiente ruta dentro del SDK:  
`.../nRF5_SDK_17.1.0_ddde560/examples/ble_peripheral/`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/file-path.png" alt="pir" width={600} height="auto" /></p>

### Verificar información del Bootloader

Antes de comenzar, revisa la información del bootloader.

* **Paso 1:** Entrar en modo DFU  

Conecta el cable USB a tu PC, presiona y mantén presionado el botón del dispositivo, luego conecta el cable de carga. Debería aparecer un dispositivo llamado `T1000-E`.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

* **Paso 2:** Verificar archivo INFO_UF2.TXT  

La información correcta del bootloader se muestra así:

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/bootloader-info.png" alt="pir" width={600} height="auto" /></p>

### Ejecutar Proyecto de Ejemplo LoRaWAN

**Importar proyecto ejemplo**

Tomaremos como ejemplo el proyecto `08_ses_lorawan_gnss`.  
Abre SES y carga el proyecto ejemplo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/opensolution.png" alt="pir" width={800} height="auto" /></p>

**Modificar parámetros LoRaWAN**

Define REGION/DEVICE_EUI/JOIN_EUI/APP_KEY en el archivo `lorawan_key_config.h`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keys-define.png" alt="pir" width={800} height="auto" /></p>

**Compilar el proyecto modificado**

Selecciona el proyecto requerido en el Explorador de Proyectos.  
Elige `Build` > `Build` o presiona `F7`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/build-done.png" alt="pir" width={800} height="auto" /></p>

#### Convertir a archivo UF2

Después de compilar con éxito, habrá un archivo `.hex` en la carpeta de salida. Se incluye un script Python `uf2conv.py` en la carpeta `Firmware` para convertir el archivo hex a uf2.

Navega a la ruta y ejecuta:

```py
python uf2conv.py filename.hex -c -f 0xADA52840 -o filename.uf2
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/convert-uf2.png" alt="pir" width={600} height="auto" /></p>

#### Flashear Firmware de Aplicación

* **Paso 1:** Entrar en modo DFU

 Conecta el cable USB, presiona y mantén presionado el botón del dispositivo, conecta el cable de carga, aparece el dispositivo `T1000-E`.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

* **Paso 2:** Flashear Firmware LoRaWAN

 Copia el archivo `UF2` al drive DFU. El firmware se flasheará automáticamente y el dispositivo se reiniciará.

### Conectar a un LNS (Network Server)

Aquí conectaremos el dispositivo a un LNS, usando TTN como ejemplo para ver los datos y la ubicación en TTN Mapper.

Primero, registra una cuenta en The Things Industries o The Things Network.

#### Paso 1: Crear una aplicación

Ve a la página de Aplicaciones y haz clic en "+Create application".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Introduce un Application ID y haz clic en Create Application.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>

#### Paso 2: Registrar el dispositivo

Haz clic en "Register end device".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png" alt="pir" width={800} height="auto" /></p>

Configura los siguientes parámetros:

**Frequency Plan**: selecciona el plan de frecuencias adecuado para tu región.

**LoRaWAN version**: LoRaWAN Specification 1.0.4

**Regional Parameters version**: PR002 Regional Parameters V1.0.3

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png" alt="pir" width={800} height="auto" /></p>

:::tip 
JoinEUI/DevEUI/APPEUI: Los valores que definiste en el archivo lorawan_key_config.h anteriormente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keys-define.png" alt="pir" width={600} height="auto" /></p>
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png" alt="pir" width={800} height="auto" /></p>

**Verificar datos en tiempo real**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/payload-data.png" alt="pir" width={800} height="auto" /></p>

### Restaurar firmware de fábrica

* Para volver al firmware original, flashea el archivo `t1000_e_dev_kit_11_lorawan_tracker.uf2`.
* Si usas SenseCAP cloud, importa las llaves SenseCAP escaneando el código QR en la etiqueta del dispositivo.
