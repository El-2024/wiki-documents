---
description: Reading Raspberry Pi's Info using Wio Terminal
title: Lectura de Información de Raspberry Pi's usando Wio Terminal
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-Reading-Raspberry-Pi
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Lectura del Estado de Sistema de Raspberry Pi's Usando Wio Terminal

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-rasp.gif)

Esta guía muestra cómo leer el estado del sistema de una Raspberry Pi a través de comunicación serial USB usando Wio Terminal. En este ejemplo, la Raspberry Pi actúa como computadora host y envía información del sistema vía puerto serial USB. El Wio Terminal es el dispositivo esclavo que recibe esos datos y los muestra en su pantalla LCD.

## Lista de Materiales

- [Raspberry Pi](https://www.seeedstudio.com/Boards-c-17.html) (modelo 3B+ usado en el ejemplo)

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- Cable USB Tipo-C

## Funciones

- Leer el estado del sistema de Raspberry Pi

- Mostrar la información en la pantalla del Wio Terminal

## Programa Host en Raspberry Pi

Ejecuta este código Python en la Raspberry Pi para enviar información del sistema a través del puerto serial USB al Wio Terminal.

> **Nota:** Asegúrate que el puerto serial (`serialPort`) es el correcto para tu dispositivo (ver Arduino IDE).

```python
import os
import time 
import serial

# Configuración puerto serial
serialPort= "/dev/ttyACM0"  # Cambia según tu puerto serial
baudRate = 115200
ser = serial.Serial(serialPort, baudRate, timeout=0.5)
time.sleep(2)

def getCPUtemperature():
    res = os.popen('vcgencmd measure_temp').readline()
    return(res.replace("temp=","").replace("'C\n",""))

def getRAMinfo():
    p = os.popen('free')
    i = 0
    while 1:
        i += 1
        line = p.readline()
        if i==2:
            return(line.split()[1:4])

def getCPUuse():
    return(str(os.popen("top -n1 | awk '/Cpu\(s\):/ {print $2}'").readline().strip()))

def getDiskSpace():
    p = os.popen("df -h /")
    i = 0
    while 1:
        i += 1
        line = p.readline()
        if i==2:
            return(line.split()[1:5])
 
def main():
    while True:
        CPU_temp = getCPUtemperature()
        CPU_usage = getCPUuse()

        RAM_stats = getRAMinfo()
        RAM_total = str(round(int(RAM_stats[0]) / 1000,1))
        RAM_used = str(round(int(RAM_stats[1]) / 1000,1))
        RAM_free = str(round(int(RAM_stats[2]) / 1000,1))

        DISK_stats = getDiskSpace()
        DISK_total = DISK_stats[0]
        DISK_used = DISK_stats[1]
        DISK_perc = DISK_stats[3]

        data=ser.write(str.encode(CPU_temp+':'+CPU_usage+':'+RAM_total+':'+RAM_used+':'+RAM_free+':'+DISK_total+':'+DISK_used+':'+DISK_perc))
        ser.flush()
        time.sleep(2)

        print('')
        print('CPU Temperature = '+CPU_temp)
        print('CPU Use = '+CPU_usage)
        print('')
        print('RAM Total = '+RAM_total+' MB')
        print('RAM Used = '+RAM_used+' MB')
        print('RAM Free = '+RAM_free+' MB')
        print('')  
        print('DISK Total Space = '+DISK_total+'B')
        print('DISK Used Space = '+DISK_used+'B')
        print('DISK Used Percentage = '+DISK_perc) 

if __name__ == '__main__':
    try:    
        main()
    except KeyboardInterrupt:    
        if ser != None:    
            ser.close()
```

## Código Arduino para Wio Terminal

### Librerías necesarias

* Instala la librería para pantalla LCD `Seeed_Arduino_LCD`. Consulta [Wio Terminal LCD Overview](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/) para detalles.

* Descarga el archivo [`Free_Fonts.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Free_Fonts.h) para usar abreviaciones de fuentes en el LCD. Colócalo en la misma carpeta que el sketch Arduino.

### Código completo

Puedes descargar el código Arduino completo [aquí](https://files.seeedstudio.com/wiki/Wio-Terminal/res/readRasp.ino).

## Instrucciones

1. Sube el código Arduino al Wio Terminal. Debería mostrar una pantalla inicial.

2. Conecta el Wio Terminal a la Raspberry Pi con un cable USB Tipo-C.

3. Ejecuta el código Python en la Raspberry Pi.

4. Ahora deberías ver la información del sistema de la Raspberry Pi en la pantalla LCD del Wio Terminal.

## Soporte Técnico y Discusión

Gracias por elegir nuestros productos. Estamos para ayudarte y ofrecer soporte en diversos canales para que tu experiencia sea óptima.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
