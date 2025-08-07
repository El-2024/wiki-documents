---
title: Usa MQTT para prender luces LED remotamente
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Use_MQTT_to_remotely_light_up_LED_lights/
slug: /es/Use_MQTT_to_remotely_light_up_LED_lights
last_update:
  date: 07/25/2025
  author: Guillermo
---

MQTT es un protocolo de transporte de mensajes de publicación/suscripción cliente-servidor. El cliente puede funcionar como publicador, suscriptor o ambos.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_10.png)
El publicador puede crear un tema con mensajes adjuntos a dicho tema. Por ejemplo, puedo crear un nuevo tema "El clima de hoy" y el contenido del mensaje es "25 grados Celsius", y luego enviar el mensaje al servidor. Después de recibir el mensaje del tema, el publicador distribuye la información a cualquier cliente que se haya suscrito a ese tema. Es decir, el suscriptor recibirá el mensaje "25 grados Celsius" solo si se suscribe al tema "El clima de hoy". Si el suscriptor no se suscribe al tema "El clima de hoy", sin importar qué mensaje envíe el publicador, el suscriptor no recibirá el mensaje.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_11.png)
### 1. Configurar el servidor MQTT
Descarga el software del servidor MQTTX e instálalo en la computadora, luego configura el servidor MQTT.

---

En este proyecto usaremos el servidor gratuito "mqtt.p2hp.com".  
**Servidor en línea**

- Dirección: mqtt.p2hp.com  
- Puertos: 1883 (TCP), 8083 (WebSocket)  
- Tipo: EMQ  
- Compatible con MQTT V3.1.1/V5.0

---

Abre el software MQTTX para crear una nueva conexión, completa el nombre, servidor, puerto, tema, y luego haz clic en "Connect" para conectar al servidor.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_12.png)

Una vez que la conexión sea exitosa, aparecerá una ventana emergente en la esquina superior derecha del software.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_13.png)

Luego configura el tema y mensaje a continuación. En este proyecto, usamos mensajes MQTT para controlar el encendido y apagado del LED en la placa principal, por lo que rellena el tema ("LED") y el contenido del mensaje ("on") a continuación.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_14.png)
### 2. Código
Introduce el siguiente código en el editor de código:

```python
import network
import mqtt
from machine import Pin, I2C, ADC, UART, SPI, PWM
from time import sleep

N1 = network.WLAN_SPI(network.STA_IF)
N1.active(True)
N1.connect("CHCK","depot0510")
sleep(1)

led = Pin(13, Pin.OUT)
led.value(0)

SERVER = 'mqtt.p2hp.com'
CLIENT_ID = 'Wio RP2040_Dev_board'
TOPIC = 'LED'

def mqtt_callback(topic):
    print('topic: {}'.format(topic[0]))
    print('msg:{}'.format(topic[1]))
    if(topic[1] == "off"):
        led.value(0)
    if(topic[1] == "on"):
        led.value(1)
    
cl = mqtt.MQTTClient(CLIENT_ID, SERVER, mqtt_port = 1883)
cl.connect()

    
cl.publish("webscket_test","start")
cl.subscribe(TOPIC)
cl.set_callback(mqtt_callback)
print('ok')

while True:
    cl.wait_msg()
    sleep(0.1)
```

**Presta atención a rellenar el nombre y la contraseña de tu WiFi en la línea 8 del código**, y luego ejecuta el programa. Espera el mensaje "ok" en la ventana Shell, lo que significa que la conexión ha sido exitosa. En ese momento, podrás enviar información desde MQTTX para controlar.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_15.png)

Rellena "LED" y "on" en la esquina inferior derecha del software y haz clic en el ícono de enviar. En ese momento, el LED azul de la placa principal debería encenderse. También puedes apagar el LED enviando "off".

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_16.png)
![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_17.png)

## Soporte Técnico y Discusión de Producto
Si tienes algún problema técnico, envía tu consulta a nuestro [foro](http://forum.seeedstudio.com/).  
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte diverso y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


