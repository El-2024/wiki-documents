---
title: Módulo Transceptor Serial WiFi
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/WiFi_Serial_Transceiver_Module/
slug: /es/WiFi_Serial_Transceiver_Module
last_update:
  date: 07/15/2025
  author: Guillermo
---
![](https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/WiFi%20Serial%20Transceiver%20Module.jpg)

WiFi Serial Transceiver Module

In this tutorial, we'll use a seeeduino to control the ESP8266 WiFi module to request a static page from the internet. This is a basic use of TCP socket, for other usage, please refer to the AT command guide of the module.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/WiFi-Serial-Transceiver-Module-w-ESP8266-p-1994.html)

**Lista de materiales:**

- [Seeeduino V3](https://www.seeedstudio.com/Seeeduino-V30-Atmega-328P-p-669.html) / Arduino Uno  
- [Módulo WiFi Serial ESP8266](https://www.seeedstudio.com/depot/WiFi-Serial-Transceiver-Module-w-ESP8266-p-1994.html)  
- [UartSBee v4](https://www.seeedstudio.com/UartSBee-V4-p-688.html) / otro convertidor USB a TTL  

!!!Nota  
    Usamos una comunicación serial por software para imprimir algunos mensajes de depuración, ya que la placa Seeeduino solo tiene un puerto serial por hardware. Pero la limitación del serial por software es que no puede comunicarse a una velocidad de baudios mayor a 19200. Por lo tanto, parte de la salida del módulo ESP se perderá porque su velocidad de 57600 es mayor a la soportada por el serial por software. Si tienes una placa con más de un puerto serial por hardware (por ejemplo, Arduino Mega 2560), el proceso será más sencillo.

## Paso a paso
---

- **Paso 1**: Conecta el módulo como se muestra en la siguiente imagen:

![](https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/Wifi_connection.jpg)

- **Paso 2**: Programa la placa Seeeduino.

   - Abre el IDE de Arduino y crea un nuevo *sketch*;  
   - Copia el siguiente código en el editor del *sketch* (necesitarás modificar los macros `SSID` y `PASS` con tu propia configuración);  

```c
#include <SoftwareSerial.h>
   #define SSID "xxxxxxxx"
   #define PASS "xxxxxxxx"
   #define DST_IP "220.181.111.85" //baidu.com
   SoftwareSerial dbgSerial(10, 11); // RX, TX
   void setup()
   {
     // Open serial communications and wait for port to open:
     Serial.begin(57600);
     Serial.setTimeout(5000);
     dbgSerial.begin(9600); //can't be faster than 19200 for softserial
     dbgSerial.println("ESP8266 Demo");
     //test if the module is ready
     Serial.println("AT+RST");
     delay(1000);
     if(Serial.find("ready"))
     {
       dbgSerial.println("Module is ready");
     }
     else
     {
       dbgSerial.println("Module have no response.");
       while(1);
     }
     delay(1000);
     //connect to the wifi
     boolean connected=false;
     for(int i=0;i<5;i++)
     {
       if(connectWiFi())
       {
         connected = true;
         break;
       }
     }
     if (!connected){while(1);}
     delay(5000);
     //print the ip addr
     /*Serial.println("AT+CIFSR");
     dbgSerial.println("ip address:");
     while (Serial.available())
     dbgSerial.write(Serial.read());*/
     //set the single connection mode
     Serial.println("AT+CIPMUX=0");
   }
   void loop()
   {
     String cmd = "AT+CIPSTART=\"TCP\",\"";
     cmd += DST_IP;
     cmd += "\",80";
     Serial.println(cmd);
     dbgSerial.println(cmd);
     if(Serial.find("Error")) return;
     cmd = "GET / HTTP/1.0\r\n\r\n";
     Serial.print("AT+CIPSEND=");
     Serial.println(cmd.length());
     if(Serial.find(">"))
     {
       dbgSerial.print(">");
       }else
       {
         Serial.println("AT+CIPCLOSE");
         dbgSerial.println("connect timeout");
         delay(1000);
         return;
       }
       Serial.print(cmd);
       delay(2000);
       //Serial.find("+IPD");
       while (Serial.available())
       {
         char c = Serial.read();
         dbgSerial.write(c);
         if(c=='\r') dbgSerial.print('\n');
       }
       dbgSerial.println("====");
       delay(1000);
     }
     boolean connectWiFi()
     {
       Serial.println("AT+CWMODE=1");
       String cmd="AT+CWJAP=\"";
       cmd+=SSID;
       cmd+="\",\"";
       cmd+=PASS;
       cmd+="\"";
       dbgSerial.println(cmd);
       Serial.println(cmd);
       delay(2000);
       if(Serial.find("OK"))
       {
         dbgSerial.println("OK, Connected to WiFi.");
         return true;
         }else
         {
           dbgSerial.println("Can not connect to the WiFi.");
           return false;
         }
       }
```

- **Paso 3**: Abre el Monitor Serial y presiona el botón de reinicio de la placa Seeeduino; verás la salida en pantalla.

Y por último, ¡feliz hackeo! :)

## Proyectos relacionados
---

[Recipe Community](https://www.seeedstudio.com/recipe/) es un lugar increíble donde los makers comparten sus proyectos. Nuestros usuarios han creado muchos proyectos geniales con el ESP8266, ¡échales un vistazo!

**Escáner WiFi – Conoce las señales WiFi a tu alrededor**

![](https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/Recipe-WiFi_Scanner-Know_the_WiFi_Signal_around_you.jpg)

Construye tu propio escáner WiFi en unos pocos pasos. Solo necesitas:

- Una placa NodeMcu Dev  
- Una pantalla OLED I2C  
- Algunos cables  
- Y lo más importante: UN CORAZÓN APASIONADO POR EL ESP8266  

[¿Por qué no hacer uno tú mismo?](https://community.seeedstudio.com/project_detail.html?id=220)


**Primer proyecto IoT con NodeMcu, ESP8266**

![](https://files.seeedstudio.com/wiki/WiFi_Serial_Transceiver_Module/img/Recipe-Primary_IoT_Make_with_NodeMcu--ESP8266--.jpg)

Un monitor en línea de temperatura y humedad hecho con:

- Una placa NodeMcu Dev  
- Sensor Grove - Temp&Humi  
- Algunos cables  

Otro truco sencillo, [¿por qué no hacer uno tú mismo?](https://community.seeedstudio.com/project_detail.html?id=232)

¿No es suficiente? Hay más [Proyectos increíbles con ESP8266](https://community.seeedstudio.com/discover.html?t=wio).

Y aún más proyectos en [Recipe](https://community.seeedstudio.com/projects.html#recipe)

## Soporte técnico y discusión sobre el producto

Si tienes algún problema técnico, envía tu consulta en nuestro [foro](http://forum.seeedstudio.com/).  
Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Contamos con varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>