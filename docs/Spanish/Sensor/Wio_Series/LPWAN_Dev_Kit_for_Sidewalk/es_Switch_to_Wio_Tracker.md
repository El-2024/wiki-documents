---
description: Flash the Sidewalk version to LoRaWAN version
title: Flashear LPWAN Dev Board para Amazon Sidewalk a Wio Tracker 1110 Dev Board
keywords:
- Tracker
- sidewalk
- Amazon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/flash_to_wio_tracker
last_update:
  date: 06/26/2025
  author: Jessie
---

# Tutorial para Flashear LPWAN Dev Board para Amazon Sidewalk a Wio Tracker 1110 Dev Board

Este tutorial guía a los usuarios para flashear la LPWAN Dev Board para Amazon Sidewalk al Wio Tracker 1110 Dev Board, ideal para quienes desean usar la red LoRaWAN.

### Preparación

* LPWAN Dev Kit para Amazon Sidewalk x 1  
* Computadora x 1  
* Cable USB Tipo-C x 1  
* Programador J-Link Debug x 1  
* [Archivo Bootloader](https://github.com/Seeed-Studio/Adafruit_nRF52_Arduino/tree/master/bootloader/Seeed_Wio_Tracker_1110)  
* [Firmware de Aplicación](https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/wio_tracker_app_release_sw_0.5_2024-06-06.uf2)  

:::note  
Ten en cuenta que después de flashear la placa, no podrá usar SenseCAP Cloud porque no tiene las claves de SenseCAP Cloud, pero puedes usar otras plataformas como TTN, Helium, AWS, etc.  
:::

### Conectar la placa

Conecta la Dev Board al programador J-Link Debug como sigue:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/connection-pin.png" alt="pir" width={700} height="auto" /></p>

:::info Conexión:  
**DIO** (Wio-WM1110 Dev Board Pin2) -> **SWDIO** (J-Link Debug Programmer Pin7)  
**CLK** (Wio-WM1110 Dev Board Pin4) -> **SWDCLK** (J-Link Debug Programmer Pin9)  
**GND** (Wio-WM1110 Dev Board Pin5) -> **GND** (J-Link Debug Programmer GND)  
:::

### Flashear el bootloader

* **Paso 1**: Crear un nuevo proyecto

Abre JFlash y selecciona `Create new project`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/jlink-create.png" alt="pir" width={700} height="auto" /></p>

Haz clic en `...` para seleccionar el dispositivo destino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/jlink-create.png" alt="pir" width={700} height="auto" /></p>

Selecciona `nRF52840_xxAA`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/choose-device.png" alt="pir" width={700} height="auto" /></p>

Interfaz destino: `SWD`, luego haz clic en `OK`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/new-created.png" alt="pir" width={700} height="auto" /></p>

* **Paso 2**: Conectar el objetivo

Enciende la placa y conéctala al JLink, luego haz clic en `Target` -> `Connect`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/connect-target.png" alt="pir" width={700} height="auto" /></p>

Al conectar exitosamente, verás un aviso como este:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/connected-.png" alt="pir" width={700} height="auto" /></p>

<details>
<summary>Respaldo de Datos</summary>

Antes de comenzar a flashear, se recomienda hacer un respaldo por precaución.

Haz clic en `Target` -> `Manual Programming` -> `Read Back` -> `Entire chip`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/entire-chip.png" alt="pir" width={700} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/entire-success.png" alt="pir" width={700} height="auto" /></p>

Guarda los datos, haz clic en `File` -> `Save data file as`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/files-save.png" alt="pir" width={700} height="auto" /></p>

</details>

* **Paso 3**: Descargar el archivo

Haz clic en `File` -> `Open data file`, selecciona el archivo [bootloader](https://github.com/Seeed-Studio/Adafruit_nRF52_Arduino/tree/master/bootloader/Seeed_Wio_Tracker_1110) para la Wio Tracker 1110 Dev Board.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/open-data-file.png" alt="pir" width={700} height="auto" /></p>

Haz clic en `Target` -> `Production Programming`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/flashing.png" alt="pir" width={700} height="auto" /></p>

Cuando la programación sea exitosa, aparecerá este mensaje:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/flash-success.png" alt="pir" width={700} height="auto" /></p>

### Descargar la aplicación

Presiona dos veces el botón `Reset`, debería aparecer un disco llamado `BOOT` en tu PC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/boot-disk.png" alt="pir" width={700} height="auto" /></p>

Copia el archivo .uf2 al disco, la descarga se ejecutará automáticamente y luego el disco se expulsará.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/uf2-file.png" alt="pir" width={700} height="auto" /></p>

También puedes actualizar tu propia aplicación vía Arduino.

### Verificar el log

Abre el monitor serial para revisar el log.  
Después del flasheo, el DevEUI/AppEUI/Appkey serán 0.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/join-fail.png" alt="pir" width={700} height="auto" /></p>

Puedes usar la SenseCAP Mate APP para elegir la plataforma y definir el DevEUI/AppEUI/Appkey, consulta el [Get Started](https://wiki.seeedstudio.com/Get_Started_with_Wio-Trakcer_1110/#configure-the-frequency-and-connect-to-the-gateway) para más detalles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>

:::info  
Si quieres usar SenseCAP Cloud, contacta a sensecap@seeed.cc  
:::

Después de configurar, la placa se reiniciará y se unirá nuevamente a la red.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/joined.png" alt="pir" width={700} height="auto" /></p>
