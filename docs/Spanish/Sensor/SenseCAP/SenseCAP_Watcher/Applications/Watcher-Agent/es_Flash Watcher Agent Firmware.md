---
description: Guide for flashing firmware to your SenseCAP Watcher Agent
title: Flash Watcher Agent Firmware
sidebar_position: 1
keywords:
- SenseCAP
- Watcher
- Agent
- Firmware
- Flash
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /es/flash_watcher_agent_firmware
last_update:
  date: 07/25/2025
  author: Guillermo
---

# Flashear el Firmware Watcher Agent

## Descripción general

Agradecimientos especiales a [XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) por sus contribuciones de código abierto que hicieron posible este proyecto.

Esta guía proporciona instrucciones para flashear el firmware Watcher Agent en tu dispositivo SenseCAP Watcher usando la herramienta Flash Download Tool de Espressif.

:::danger Advertencia
Flashear este firmware borrará la información de fábrica del Watcher, puedes usar el siguiente comando para respaldarla:

esptool.py --chip esp32s3 --baud 2000000 --before default_reset --after hard_reset --no-stub read_flash 0x9000 204800 nvsfactory.bin
:::

## Requisitos previos

### Hardware necesario
- Dispositivo SenseCAP Watcher
- Cable USB Tipo-C con capacidad de datos
- PC con Windows

### Software necesario
- [Flash Download Tool](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip) (versión 3.9.6 o posterior)
- [Archivo binario del firmware Watcher Agent]

## Proceso de flasheo

### Paso 1. Descargar e instalar Flash Download Tool

1. Descarga la herramienta desde el sitio web oficial de Espressif:  
   [Flash Download Tool v3.9.6](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip)
2. Extrae el archivo ZIP en una carpeta de tu elección
3. No se requiere instalación: simplemente haz doble clic en el ejecutable para abrir la herramienta

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/flash%20download%20tool.jpg" style={{width:500, height:'auto'}}/></div>

### Paso 2. Preparar el archivo de firmware

1. Descarga el archivo binario del firmware Watcher Agent:  
   [Archivo binario](http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/watcher_agent_firmware.bin)

:::caution Nota
Asegúrate de que la ruta al archivo no contenga símbolos especiales.
:::

### Paso 3. Conectar el dispositivo

1. Conecta tu Watcher a la computadora usando el puerto Tipo-C ubicado en la parte inferior
2. Haz doble clic en `flash_download_tool_3.9.7.exe` para lanzar la herramienta
3. Configura los siguientes parámetros:
   - ChipType: selecciona `ESP32-S3`
   - WorkMode: selecciona `Develop`
   - LoadMode: selecciona `UART`

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting1.jpg" style={{width:300, height:'auto'}}/></div>

### Paso 4. Configurar ajustes del firmware

1. Haz clic en el botón "..." en la primera fila para buscar y seleccionar el archivo binario descargado
2. Asegúrate de que la casilla junto al archivo esté seleccionada
3. Ingresa `0x0` en el campo de dirección después de seleccionar el archivo

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting2.jpg" style={{width:600, height:'auto'}}/></div>

### Paso 5. Seleccionar el puerto COM y configuraciones de flasheo

Configura los siguientes parámetros:
- SPI SPEED: 80MHz
- SPI MODE: DIO
- FLASH SIZE: 32Mbit
- COM: selecciona el puerto COM correspondiente (Nota: tu dispositivo mostrará dos puertos COM)

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>

:::note
Si el flasheo no inicia al hacer clic en START, haz clic en STOP y prueba con el otro puerto COM. Solo uno de los dos funcionará para flashear.
:::

### Paso 6. Borrar la memoria flash

1. Haz clic en el botón `ERASE` para borrar el firmware existente
2. Espera a que el proceso de borrado se complete

### Paso 7. Flashear el firmware

1. Haz clic en el botón `START` para comenzar el flasheo
2. Deberías ver el progreso en la ventana de registro (log)
3. Si no aparece progreso o hay error, prueba con el otro puerto COM

### Paso 8. Verificar éxito

El proceso habrá terminado correctamente cuando veas el mensaje de éxito en la ventana de log.

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish1.jpg" style={{width:300, height:'auto'}}/></div>

### Paso 9. Reiniciar el dispositivo

1. Ubica el orificio de reinicio en el Watcher
2. Usa un pin para presionar suavemente el botón de reinicio
3. El dispositivo se reiniciará con el nuevo firmware

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:500, height:'auto'}}/></div>

## Solución de problemas

### Problemas comunes

1. **No se detecta el puerto COM**
   - Asegúrate de usar el puerto Tipo-C inferior
   - Prueba con otro cable USB
   - Verifica si los drivers USB están correctamente instalados

2. **El flasheo falla**
   - Prueba con el otro puerto COM
   - Verifica que la dirección (0x0) esté correctamente ingresada

3. **El dispositivo no responde**
   - Usa un pin para presionar el botón de reinicio
   - Intenta borrar antes de flashear

## Soporte técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
