---
title: LAN_Communications
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/LAN_Communications/
slug: /es/LAN_Communications
last_update:
  date: 07/25/2025
  author: Guillermo
---

### 1. Configurar el servidor LAN

Este proyecto requiere que el servidor (PC) y la placa de control principal estén conectados a la **misma red local (LAN)**.  
**Principio de funcionamiento:** se configura una PC como servidor, se conecta la placa de control principal a esa PC a través de la red local, y luego ambos se comunican mediante un puerto fijo.

Primero, descarga e instala un asistente de depuración de red. En este proyecto se utiliza **Net Assistant**.

Si la instalación es exitosa, abre el software, selecciona `"TCP Server"` en la parte superior izquierda para establecer el protocolo. Luego configura la `"Local host addr"` (dirección IP local) y `"Local host port"` (puerto local).  
Una vez configurado, haz clic en `"Open"` para activar el servidor.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_8.png)

### 2. Depurar el programa en MicroPython

Ingresa el siguiente código en tu editor de código:

```python
import network
import usocket
from machine import Pin, I2C, ADC, UART, SPI, PWM
from time import sleep

N1 = network.WLAN_SPI(network.STA_IF)
N1.active(True)

print("API list:")
dir(N1)

print("wifi list:")
lis = N1.scan()
for q in lis:
    print(q)
    
N1.connect("CHCK","depot0510")
if N1.isconnected():
    print("    ip               gateway           netmask            MAC            ssid")
    print(N1.ifconfig())
    s=usocket.socket()
    addr=('192.168.9.243',9999)
    s.connect(addr)
    s.send('Hello! Wio RP2040')
```

**Asegúrate de completar la línea 17** con el **nombre y contraseña de tu red WiFi**, y la **línea 22** con la **dirección IP y el número de puerto** del servidor en tu computadora. Luego ejecuta el programa. Deberías ver el mensaje enviado por la placa de control principal en la sección **Data log** del asistente de depuración de red.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_9.png)

---

Si deseas ejecutar otros programas después de haber corrido uno con funciones de red, haz clic en el botón **"RUN"** de la placa para reiniciar. Después de reiniciar, la placa podrá ejecutar otros códigos normalmente.

---

## Soporte técnico y discusión del producto

Si tienes algún problema técnico, por favor repórtalo en nuestro [foro de soporte](http://forum.seeedstudio.com/).  
Gracias por elegir nuestros productos. Estamos aquí para ayudarte y asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para satisfacer tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

