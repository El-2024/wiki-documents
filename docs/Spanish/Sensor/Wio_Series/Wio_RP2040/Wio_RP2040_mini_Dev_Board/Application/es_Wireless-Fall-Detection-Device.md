---
title: Wireless Fall Detection Device
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wireless-Fall-Detection-Device/
slug: /es/Wireless-Fall-Detection-Device
last_update:
  date: 07/25/2025
  author: Guillermo
---

# Dispositivo inalámbrico de detección de caídas

## Introducción

A medida que más personas trabajan arduamente en sus carreras, la economía nacional comienza a despegar. Sin embargo, el envejecimiento de la sociedad también se profundizará. Sin el cuidado de los jóvenes, la vida para los adultos mayores siempre es difícil y peligrosa.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/fall.jpg)

Cada año, entre un tercio y la mitad de las personas de 65 años o más sufren una caída. Las caídas son la principal causa de lesiones en adultos mayores y la principal causa de muerte accidental en personas de 75 años o más. Que una persona sufra una caída sin ser notada puede ser doblemente peligroso. La posibilidad clara de una lesión inicial puede agravar aún más las posibles consecuencias si no se trata en un corto período de tiempo. Las estadísticas muestran que las consecuencias más graves no son el resultado directo de la caída, sino la consecuencia de un retraso en la asistencia y tratamiento. Las consecuencias de una caída pueden reducirse significativamente si los rescatistas son alertados a tiempo.

Muchos adultos mayores viven solos en apartamentos o casas pequeñas después de que sus hijos han crecido y se han ido. Después de una caída, no es raro que los ancianos no puedan levantarse por sí mismos ni pedir ayuda. Por lo tanto, se necesita un sistema automático de detección de caídas que pueda solicitar ayuda incluso si el paciente pierde el conocimiento o no puede levantarse después de una caída.

## Hardware

- [Grove - Acelerómetro Digital de 3 Ejes (LIS3DHTR)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g.html)  
- [Wio RP2040 mini Dev Board](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html) para completar este proyecto.

El [Grove - Acelerómetro Digital de 3 Ejes (LIS3DHTR)](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g.html) puede usarse como sensor para detectar caídas, y el [Wio RP2040 mini Dev Board](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html) puede procesar datos y enviar información de emergencia de forma inalámbrica. Además, necesitas una computadora y WiFi.

### Diagrama de conexiones

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/wiring.jpg)

## [Software](https://wiki.seeedstudio.com/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/#software)

### 1. Instalar Thonny

Fácil para empezar. Thonny viene con Python 3.7 incorporado, así que solo necesitas un instalador sencillo y estarás listo para aprender a programar. Primero, haz clic en [Thonny.org](https://thonny.org/) para entrar a la página de descarga. En la esquina superior derecha de la página, selecciona el paquete de instalación de Thonny según tu sistema operativo para descargarlo. Haz doble clic en el paquete descargado para abrirlo e instala siguiendo los pasos.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny1.jpg)

Ya que tienes Thonny instalado, abre la aplicación. Deberías ver la interfaz principal de Thonny:

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny2.jpg)

La interfaz principal de Thonny es muy simple, dividida en las siguientes cuatro partes:

1. Barra de herramientas: herramientas básicas comunes, como nuevo, abrir, guardar, ejecutar el script actual, detener, etc.

2. Editor de código: área principal de Thonny, donde escribiremos el código Python/MicroPython.

3. Shell: Aquí podemos ejecutar comandos y los resultados se mostrarán inmediatamente. También se ven las salidas de nuestro código en la ventana Shell.

4. Intérprete: Aquí puedes seleccionar el tipo de intérprete para compilar el programa. Haz clic en Python 3.7.9, busca MicroPython (Raspberry pi Pico) en el menú emergente y haz clic en OK para cambiar al intérprete de Pico. También puedes hacer clic en "Tools>>>Options>>>Interpreter" para seleccionar.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny3.jpg)

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny4.jpg)

### 2. Conectar Wio RP2040 mini Dev Board

Usa el cable de datos para conectar la placa de desarrollo a la computadora, luego haz clic en el botón "Restart backend" en la barra de herramientas. Si Wio RP2040 se conecta correctamente a la computadora, verás la información de la versión de MicroPython y el nombre del dispositivo en el Shell.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny5.jpg)

### 3. Código

Para usar el acelerómetro digital de 3 ejes, necesitamos importar el archivo de la biblioteca del sensor en la memoria del Wio RP2040.  
Esto se hace de la siguiente manera: copia el siguiente código, pégalo en una nueva ventana del editor de Thonny, luego guárdalo en la placa de desarrollo y renómbralo a "ACC_Adxl345.py"

```python
from machine import I2C
import time

ADXL345_DEVICE = (0x53)

""" ------- Register names ------- """
ADXL345_DEVID           =0x00
ADXL345_RESERVED1       =0x01
ADXL345_THRESH_TAP      =0x1d
ADXL345_OFSX            =0x1e
ADXL345_OFSY            =0x1f
ADXL345_OFSZ            =0x20
ADXL345_DUR             =0x21
ADXL345_LATENT          =0x22
ADXL345_WINDOW          =0x23
ADXL345_THRESH_ACT      =0x24
ADXL345_THRESH_INACT    =0x25
ADXL345_TIME_INACT      =0x26
ADXL345_ACT_INACT_CTL   =0x27
ADXL345_THRESH_FF       =0x28
ADXL345_TIME_FF         =0x29
ADXL345_TAP_AXES        =0x2a
ADXL345_ACT_TAP_STATUS  =0x2b
ADXL345_BW_RATE         =0x2c
ADXL345_POWER_CTL       =0x2d
ADXL345_INT_ENABLE      =0x2e
ADXL345_INT_MAP         =0x2f
ADXL345_INT_SOURCE      =0x30
ADXL345_DATA_FORMAT     =0x31
ADXL345_DATAX0          =0x32
ADXL345_DATAX1          =0x33
ADXL345_DATAY0          =0x34
ADXL345_DATAY1          =0x35
ADXL345_DATAZ0          =0x36
ADXL345_DATAZ1          =0x37
ADXL345_FIFO_CTL        =0x38
ADXL345_FIFO_STATUS     =0x39

ADXL345_BW_1600         =0xF                 #  1111
ADXL345_BW_800          =0xE                 #  1110
ADXL345_BW_400          =0xD                 #  1101
ADXL345_BW_200          =0xC                 #  1100
ADXL345_BW_100          =0xB                 #  1011
ADXL345_BW_50           =0xA                 #  1010
ADXL345_BW_25           =0x9                 #  1001
ADXL345_BW_12           =0x8                 #  1000
ADXL345_BW_6            =0x7                 #  0111
ADXL345_BW_3            =0x6                 #  0110

"""
Interrupt PINs
INT1: 0
INT2: 1
"""
ADXL345_INT1_PIN            =0x00
ADXL345_INT2_PIN            =0x01

"""Interrupt bit position"""
ADXL345_INT_DATA_READY_BIT  =0x07
ADXL345_INT_SINGLE_TAP_BIT  =0x06
ADXL345_INT_DOUBLE_TAP_BIT  =0x05
ADXL345_INT_ACTIVITY_BIT    =0x04
ADXL345_INT_INACTIVITY_BIT  =0x03
ADXL345_INT_FREE_FALL_BIT   =0x02
ADXL345_INT_WATERMARK_BIT   =0x01
ADXL345_INT_OVERRUNY_BIT    =0x00

ADXL345_DATA_READY          =0x07
ADXL345_SINGLE_TAP          =0x06
ADXL345_DOUBLE_TAP          =0x05
ADXL345_ACTIVITY            =0x04
ADXL345_INACTIVITY          =0x03
ADXL345_FREE_FALL           =0x02
ADXL345_WATERMARK           =0x01
ADXL345_OVERRUNY            =0x00

ADXL345_OK                  =1                   #  no error
ADXL345_ERROR               =0                   #  indicates error is predent

ADXL345_NO_ERROR            =0                   #  initial state
ADXL345_READ_ERROR          =1                   #  problem reading accel
ADXL345_BAD_ARG             =2                   #  bad method argument


class AccelerationAdxl345(object):

    def __init__(self, i2c, addr=ADXL345_DEVICE, drdy=None):
        self.i2c_device = i2c
        time.sleep(0.1)
        #self.rgbMatrixData = [0xFF]*64

    def read(self, reg_base, reg, buf):
        self.write(reg)
        time.sleep(.001)
        self.i2c_device.readfrom_into(59,buf)

    def write(self, buf=None):
        if buf is not None:
            self.i2c_device.writeto(ADXL345_DEVICE, buf)
        # i2c_device.writeto(0x58, bytearray([3,100,100,16,39]))

    def writeTo(self,address, val):
        dta_send = bytearray([address, val])
        self.write(dta_send)
    
    def readFrom(self, address, num):
        data_0 = address & 0xff
        dta_send = bytearray([data_0])
        self.write(dta_send)
        time.sleep(.001)
        result=self.i2c_device.readfrom(ADXL345_DEVICE, num)
        return result

    def setRegisterBit(self, regAdress,  bitPos,  state):  
        bytes=self.readFrom(regAdress, 1)
        for _b in bytes:
            value = int(_b)
        if (state):
            value |= (1 << bitPos)                 
        else:
            value &= ~(1 << bitPos)                   
        self.writeTo(regAdress, value)

    def acc_adxl345_init(self):
        #Turning on the ADXL345
        self.writeTo(ADXL345_POWER_CTL, 0)
        self.writeTo(ADXL345_POWER_CTL, 16)
        self.writeTo(ADXL345_POWER_CTL, 8)

        self.writeTo(ADXL345_THRESH_ACT, 75)
        self.writeTo(ADXL345_THRESH_INACT, 75)
        self.writeTo(ADXL345_TIME_INACT, 10)

        #look of activity movement on this axes - 1 == on; 0 == off
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 6, 1)
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 5, 1)
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 4, 1)

        #look of inactivity movement on this axes - 1 == on; 0 == off
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 2, 1)
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 1, 1)
        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 0, 1)

        self.setRegisterBit(ADXL345_TAP_AXES, 2, 0)
        self.setRegisterBit(ADXL345_TAP_AXES, 1, 0)
        self.setRegisterBit(ADXL345_TAP_AXES, 0, 0)

        #set values for what is a tap, and what is a double tap (0-255)
        #setTapThreshold(50); # 62.5mg per increment
        self.writeTo(ADXL345_THRESH_TAP, 50)

        self.writeTo(ADXL345_DUR, 15)

        self.writeTo(ADXL345_LATENT, 80)

        #setDoubleTapWindow(200); # 1.25ms per increment
        self.writeTo(ADXL345_WINDOW, 200)

        #set values for what is considered freefall (0-255)

        self.writeTo(ADXL345_THRESH_FF, 7)

        self.writeTo(ADXL345_TIME_FF, 45)
        #setting all interrupts to take place on int pin 1
        #I had issues with int pin 2, was unable to reset it

        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_SINGLE_TAP_BIT,   ADXL345_INT1_PIN)
        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_DOUBLE_TAP_BIT,   ADXL345_INT1_PIN)
        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_FREE_FALL_BIT,    ADXL345_INT1_PIN)
        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_ACTIVITY_BIT,     ADXL345_INT1_PIN)
        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_INACTIVITY_BIT,   ADXL345_INT1_PIN)

        #register interrupt actions - 1 == on; 0 == off
        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_SINGLE_TAP_BIT, 1)
        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_DOUBLE_TAP_BIT, 1)
        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_FREE_FALL_BIT,  1)
        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_ACTIVITY_BIT,   1)
        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_INACTIVITY_BIT, 1)

    def acc_adxl345_read_xyz(self):
        ADXL345_TO_READ = (6)
        _buff = self.readFrom(ADXL345_DATAX0, ADXL345_TO_READ) #read the acceleration data from the ADXL345
        if _buff[1] <= 0:
            x=_buff[0]
        else:
            x=(_buff[0]-255)

        if _buff[3] <= 0:
            y=_buff[2]
        else:
            y=(_buff[2]-255)

        if _buff[5] <= 0:
            z=_buff[4]
        else:
            z=(_buff[4]-255)

        #x = int(((_buff[1]) << 8) | _buff[0]) 
        #y = int(((_buff[3]) << 8) | _buff[2]) 
        #z = int(((_buff[5]) << 8) | _buff[4]) 

        #print("%d, %d, %d\r\n", x, y, z) 
        return [x,y,z]

    def acc_adxl345_read_acc(self):
        __Gains = [0.00376390, 0.00376009, 0.00389265]
        xyz=self.acc_adxl345_read_xyz()

        ax = xyz[0] * __Gains[0]
        ay = xyz[1] * __Gains[1]
        az = xyz[2] * __Gains[2]
        return [ax,ay,az]

    def get_acc_adxl345_property(self,xyz):
        axyz=self.acc_adxl345_read_acc()
        if(xyz == 0):
            return axyz[0]
        if(xyz == 1):
            return axyz[1]
        if(xyz == 2):
            return axyz[2]

"""
acceleration = AccelerationAdxl345()
acceleration.acc_adxl345_init()
acceleration.get_acc_adxl345_property(0)
acceleration.get_acc_adxl345_property(1)
acceleration.get_acc_adxl345_property(2)
"""
```

Luego crea un nuevo programa en el cual escribir el siguiente código.

```python
import network
import mqtt
from Acc_Adxl345 import AccelerationAdxl345
from machine import Pin,I2C
from time import sleep
i2c = I2C(0,sda = Pin(4),scl= Pin(5))
ax = AccelerationAdxl345(i2c)
ax.acc_adxl345_init()

N1 = network.WLAN_SPI(network.STA_IF)
N1.active(True)
N1.connect("CHCK","depot0510")
sleep(1)
print('network information:', N1.ifconfig())
led = Pin(13, Pin.OUT)
button = Pin(12,Pin.IN,Pin.PULL_UP)
led.value(1)

SERVER = 'mqtt.p2hp.com'
CLIENT_ID = 'Wio_RP2040'
TOPIC = 'Security_status'

def mqtt_callback(topic):
    print('topic: {}'.format(topic[0]))
    print('msg:{}'.format(topic[1]))
    
cl = mqtt.MQTTClient(CLIENT_ID, SERVER, mqtt_port = 1883)
cl.connect()
cl.set_callback(mqtt_callback)

val_last = 1
print("ready")
cl.publish(TOPIC,"ready")

while True:
    a = ax.acc_adxl345_read_acc()
    b = ax.acc_adxl345_read_acc()
    for i in range(0,3):
        a[0] = a[i] * a[i]
        b[0] = b[i] * b[i]
    if a[0] - b[0] > 0.4 or b[0] - a[0] > 0.4:
        cl.publish(TOPIC,"help!")
```

> **Nota:** en la línea 12 del programa, cambia el nombre y la contraseña de tu red WiFi.

### 4. Configuración del cliente MQTT

MQTT es un protocolo de transporte de mensajes tipo Cliente-Servidor basado en el modelo de publicación/suscripción. El cliente puede funcionar como publicador, suscriptor o ambos.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt1.jpg)

El publicador puede crear un tema (topic) con un mensaje adjunto. Por ejemplo, puedes crear un nuevo tema llamado `"Clima de hoy"` y el contenido del mensaje es `"25 grados Celsius"`, luego se envía este mensaje al servidor. Después de recibir el mensaje del tema, el servidor distribuye esta información a todos los clientes que estén suscritos a dicho tema. Es decir, el suscriptor recibirá el mensaje `"25 grados Celsius"` solo si está suscrito al tema `"Clima de hoy"`. Si el suscriptor **no** está suscrito al tema, **no** recibirá ningún mensaje del publicador.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt2.jpg)

Descarga el software **MQTTX** e instálalo en tu computadora. Luego configura el servidor MQTT.

Usaremos el servidor gratuito **mqtt.p2hp.com** en este proyecto.

**Servidor en línea**

- Dirección: `mqtt.p2hp.com`  
- Puertos: `1883` (TCP), `8083` (WebSocket)  
- Tipo: EMQ  
- Compatible con MQTT V3.1.1/V5.0  

Abre MQTTX y crea una nueva conexión. Completa los campos de nombre, servidor, puerto y tema. Luego haz clic en **Connect** para conectarte al servidor.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt3.jpg)

Después de una conexión exitosa, aparecerá una notificación emergente en la esquina superior derecha del software.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt4.jpg)

Luego, configura el **tema** (topic) y el **mensaje** (msg) como se muestra:

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt5.jpg)

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt6.jpg)

Cuando se recibe un mensaje, el número de mensajes se mostrará en la parte superior. Si no ves el mensaje, haz clic sobre el tema suscrito.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt7.jpg)

Con esto, la configuración del cliente MQTT está completa.  
Regresa al editor **Thonny**, ejecuta el código, y deja caer el acelerómetro de 3 ejes desde una altura para observar si el cliente MQTT recibe el mensaje correctamente.

<iframe width="560" height="315" src="https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/show.mp4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt8.jpg)

## Instalación y pruebas

Si recibiste el mensaje correctamente, ¡felicidades! Has completado la mayor parte del trabajo.  
Ahora solo necesitas conectar una batería al Wio RP2040 y fijar el dispositivo en una pieza de cartón de **5cm x 5cm**.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/sample.jpg)

Finalmente, coloca todo dentro de una pequeña bolsa de tela.  
¡Tu dispositivo de detección de caídas ya está completo!  
Este proyecto es un prototipo experimental básico, por lo que pueden ocurrir falsas alarmas en su uso real. Puedes compartir tus comentarios para seguir mejorándolo juntos.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/device.jpg)

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
