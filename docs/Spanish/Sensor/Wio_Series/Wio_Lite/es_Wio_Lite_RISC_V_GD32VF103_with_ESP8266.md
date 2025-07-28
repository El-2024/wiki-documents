---
title: Wio Lite RISC V GD32VF103 con ESP8266
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio_Lite_RISC_V_GD32VF103_with_ESP8266/
slug: /es/Wio_Lite_RISC_V_GD32VF103_with_ESP8266
last_update:
  date: 06/25/2025
  author: Guillermo
---

<!-- ！[](https://files.seeedstudio.com/wiki/Wio-Lite-RISC-V-GD32VF103/img/%E4%BA%A7%E5%93%81%E6%8B%8D%E6%91%84%E6%A8%A1%E6%9D%BF_perspective-09.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Lite-RISC-V-GD32VF103/img/%E4%BA%A7%E5%93%81%E6%8B%8D%E6%91%84%E6%A8%A1%E6%9D%BF_perspective-09.png" alt="pir" width={600} height="auto" /></p>


# Wio Lite RISC-V

Wio Lite RISC-V es una placa de desarrollo con factor de forma Feather basada en RISC-V GD32VF103, con un núcleo WiFi ESP8266 Wio Core integrado, que le otorga función WiFi.

El GD32VF103CBT6 es un núcleo Bumblebee basado en Nuclei System Technology. Soporta el conjunto de instrucciones RV32IMAC y la función de interrupción rápida ECLIC. El consumo de energía del núcleo es solo 1/3 del de un Cortex-M3 tradicional.

El núcleo WiFi ESP8266 y el circuito de carga para batería LiPo a bordo hacen de esta placa una solución ideal para IoT. Además, cuenta con una ranura micro SD en la parte trasera para ampliar recursos del sistema.

Como parte de la familia Wio Lite, el Wio Lite RISC-V es totalmente compatible con el [Grove Shield para Wio Lite](https://www.seeedstudio.com/Grove-Shield-for-Wio-Lite-p-4156.html), que permite usar más de [200 módulos Grove](https://www.seeedstudio.com/grove.html). Por ejemplo, puedes usar cualquier [OLED Grove](https://www.seeedstudio.com/catalogsearch/result/?cat=&q=grove+OLED) para convertirlo en una placa de desarrollo visual.

<p style="text-align: center;">
<a href="https://www.seeedstudio.com/Wio-Lite-RISC-V-GD32VF103-p-4293.html" target="_blank">
<img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38" border="0" />
</a>
</p>

## Características

- MCU RISC-V GD32VF103CBT6  
- Núcleo WiFi ESP8266 Wio Core  
- Factor de forma Feather  
- Puerto JST2.0 para batería LiPo  
- Ranura SD onboard  
- USB Tipo C  

## Vista General del Hardware

![](https://files.seeedstudio.com/wiki/Wio-Lite-RISC-V-GD32VF103/img/hardware.png)

### Plataformas Soportadas

| PlatformIO                                                                                       | Arduino                                                                                       | Raspberry Pi                                                                                |                                                                                              |                                                                                          |
|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/products/102991310/img/platformio-logo.png)                   | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo_n.jpg)            | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg)       | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg)               | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg)          |

## Primeros Pasos

### Primeros pasos con PlatformIO

#### Hardware

**Materiales necesarios**

- [Wio Lite RISC-V (GD32VF103) - con ESP8266](https://www.seeedstudio.com/Wio-Lite-RISC-V-GD32VF103-p-4293.html)  
- [Cable USB 3.1 Tipo C a A](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A.html)  

- **Paso 1:** Conecta la placa Wio Lite y tu PC mediante el cable USB Tipo C a A para alimentación y comunicación serial.

#### Software

:::note
El RISC-V GD32 ya cuenta con soporte para PlatformIO IDE usando el framework Arduino, pero hasta ahora no tiene soporte para Arduino IDE directamente.
:::

- **Paso 1:**  

Configura PlatformIO IDE, que se basa en Visual Studio Code.  
Descarga [Visual Studio Code](https://code.visualstudio.com/).  
Haz clic en el icono "Extensiones" en el lado izquierdo.

![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki1.png)

Escribe "platformIO" en el buscador e instálalo.

![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki2.png)

- **Paso 2:**  

Abre PlatformIO IDE y haz clic en "New project" para crear un proyecto nuevo.  
Escribe el nombre del proyecto y elige la placa **GD32VF103V-EVAL(Sipeed)**. El framework es Arduino. Haz clic en "Finish".

- **Paso 3:**  

Edita tu código usando el framework Arduino y compílalo con el botón en la parte inferior de Visual Studio Code.

![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki5.png)

- **Paso 4:**  

El código se compila en un archivo binario. Puedes usar la [herramienta DFU](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar) para cargar el binario en la placa. Necesitas instalar el firmware DFU para permitir la descarga vía DFU, que está incluido en el mismo paquete de la herramienta DFU.

- **Paso 5:**  

Presiona el botón reset en el Wio Lite mientras mantienes presionado el interruptor "boot" en el lado izquierdo; la herramienta DFU reconocerá la placa luego de instalar el firmware DFU.

![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki6.png)

Ahora cambia el interruptor "boot" al lado derecho, selecciona tu archivo binario compilado y cárgalo en la memoria flash de la placa. Haz clic en "Leave DFU" para desconectar la herramienta DFU y tu código estará correctamente instalado.

## Demo: Controlar el LED de usuario onboard vía web

#### Hardware

**Materiales necesarios**

- [Wio Lite RISC-V (GD32VF103) - con ESP8266](https://www.seeedstudio.com/Wio-Lite-RISC-V-GD32VF103-p-4293.html)  
- Adaptador USB a TTL, como el [UartSBee V5](https://www.seeedstudio.com/UartSBee-V5.html)  
- [Cable USB 3.1 Tipo C a A](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A.html)  

- **Paso 1:** Conecta el adaptador USB a TTL al puerto serial del Wio Lite (pines PA9-TX y PA10-RX).  
- **Paso 2:** (Opcional) Usa otro adaptador USB a TTL para monitorear la comunicación del ESP8266.  
- **Paso 3:** Conecta la placa Wio Lite a tu PC vía cable USB Tipo C a A para alimentación y comunicación.

## Código de software

```
#include <Arduino.h>
const bool printReply = true;
const char line[] = "-----\n\r";
int loopCount=0;
 
char html[50];
char command[20];
char reply[500]; // you wouldn't normally do this
 
char ipAddress [20];
char LED[30];
int lenHtml = 0;
char temp[5];
 
void getReply(int wait)
{ 
    int tempPos = 0;
    long int time = millis();
    while( (time + wait) > millis())
    {   
        while(Serial1.available()>0)
        {   
            char c = Serial1.read(); 
            if (tempPos < 500) { reply[tempPos] = c; tempPos++;   }
        }
        reply[tempPos] = 0;
    } 
   
    if (printReply) { Serial.println( reply );  Serial.println(line);     }
}
void setup() 
{
  Serial.begin(115200);  //serial port of GD32
  Serial1.begin(115200);  //serial port of ESP8266
  pinMode(LED_BUILTIN, OUTPUT);
  
  delay(3000);

  Serial1.println("AT+CWQAP");
  getReply(2000);

  Serial1.println("AT+CWMODE=1");
  getReply(2000);

  Serial1.println("AT+CWJAP=\"Your WiFi SSID\",\"Password\""); // add your own wifi
  getReply(5000);

  Serial1.print("AT+CIFSR\r\n");
  getReply(2000);
  
   int len = strlen( reply ); 
      bool done=false;
      bool error = false;
      int pos = 0;
      while (!done)
      {
           if ( reply[pos] == 34) { done = true;} 
           pos++;
           if (pos > len) { done = true;  error = true;}
      }
 
      if (!error)
      {
            int buffpos = 0;
            done = false;
            while (!done)
            {
               if ( reply[pos] == 34 ) { done = true; }
               else { ipAddress[buffpos] = reply[pos];    buffpos++; pos++;   }
            }
            ipAddress[buffpos] = 0;
      }
      else { strcpy(ipAddress,"ERROR"); }


      Serial.println(ipAddress);

      Serial1.print("AT+CIPMUX=1\r\n");
      getReply( 1500 );

      Serial1.print("AT+CIPSERVER=1,80\r\n");
      getReply( 1500 );
      
      
}

void loop()
{
          if(Serial1.available()) // check if the ESO8266 is sending data
        {
          // this is the +IPD reply - it is quite long. 
          // normally you would not need to copy the whole message in to a variable you can copy up to "HOST" only
          // or you can just search the data character by character as you read the serial port.
        
          getReply( 2000 );      
 
 
          bool foundIPD = false;
          for (int i=0; i<strlen(reply); i++)
          {
               if (  (reply[i]=='I') && (reply[i+1]=='P') && (reply[i+2]=='D')   ) { foundIPD = true;    }
          }


 
 
          if ( foundIPD  )  
          {
 
              loopCount++;
              // Serial.print( "Have a request.  Loop = ");  Serial.println(loopCount); Serial.println(""); 

            bool LEDstate = false;
            int LEDstatepos = 0;
              for (int i=0; i<strlen(reply); i++)
              {
                   if (!LEDstate) // just get the first occurrence of name
                   {
                         if ( (reply[i]=='L') &&  (reply[i+1]=='E')&&  (reply[i+2]=='D')&&  (reply[i+3]=='=')) 
                         { 
                             LEDstate = true;
                             LEDstatepos = i+4;
                           
                         }
                        
                   }     
              }

                  if (LEDstate)
              {
                    int tempPos = 0;
                    bool finishedCopying = false;
                    for (int i= LEDstatepos; i<strlen(reply); i++)
                    {
                         if ( (reply[i]==' ') && !finishedCopying )  { finishedCopying = true;   } 
                         if ( !finishedCopying )                     { LED[tempPos] = reply[i];   tempPos++; }
                    }              
                    //LED[tempPos] = 0;
              }
 
              if (LEDstate) { Serial.print( "LED state = ");  Serial.println(LED); Serial.println("");
                         
              } 
              else          { Serial.println( "format incorrect");   Serial.println("");           }
              
              Serial.println("111");
              Serial.println(LED);
              Serial.println("000");
                  if(strcmp(LED,"on")==0){digitalWrite(LED_BUILTIN, HIGH); }
                  if(strcmp(LED ,"off")==0){digitalWrite(LED_BUILTIN, LOW); }
            strcpy(html,"<html><head></head><body>");
            strcpy(command,"AT+CIPSEND=0,25\r\n");
            Serial1.print(command);
            getReply(2000);
            Serial1.print(html);
            getReply(2000);


            strcpy(html,"<h1>LED Test</h1>");
            strcpy(command,"AT+CIPSEND=0,17\r\n");
            Serial1.print(command); 
            getReply(2000);      
            Serial1.print(html);
            getReply(2000);

            strcpy(html,"<p>LED Statment</p>");
            strcpy(command,"AT+CIPSEND=0,19\r\n");
            Serial1.print(command);  
            getReply(2000);     
            Serial1.print(html);
            getReply(2000);


            
                if (LEDstate)
             {
                  // write name
                  strcpy(html,"<p>LED state is "); strcat(html, LED ); strcat(html,"</p>");
 
                  // need the length of html for the cipsend command
                  lenHtml = strlen( html );
                  strcpy(command,"AT+CIPSEND=0,"); __itoa( lenHtml, temp, 10); strcat(command, temp); strcat(command, "\r\n");
                  Serial1.print(command);
                  getReply( 2000 );          
                  Serial1.print(html);
                  getReply( 2000 );                           
             }
 
 
              strcpy(html,"<form action=\""); strcat(html, ipAddress); strcat(html, "\" method=\"GET\">"); strcat(command, "\r\n");
 
              lenHtml = strlen( html );
              __itoa( lenHtml, temp, 10);
              strcpy(command,"AT+CIPSEND=0,"); 
              __itoa( lenHtml, temp, 10); 
              strcat(command, temp);  
              strcat(command, "\r\n");
 
              Serial1.print(command);
              getReply( 2000 );          
              Serial1.print(html);
              getReply( 2000 );          
 
              strcpy(html,"LEDstate:<br><input type=\"text\" name=\"LED\">");
              strcpy(command,"AT+CIPSEND=0,43\r\n");
              Serial1.print(command);
              getReply( 2000 );
              Serial1.print(html);         
              getReply( 2000 );         
 
              strcpy(html,"<input type=\"submit\" value=\"Submit\"></form>");
              strcpy(command,"AT+CIPSEND=0,43\r\n");
              Serial1.print(command);
              getReply( 2000 );       
              Serial1.print(html);
              getReply( 2000 );   
   
              
 
            strcpy(html,"</body></html>");
            strcpy(command,"AT+CIPSEND=0,14\r\n");
            Serial1.print(command);
            getReply( 2000 ); 
            Serial1.print(html);
            getReply( 2000 ); 

            Serial1.print( "AT+CIPCLOSE=0\r\n" );
            getReply( 1500 ); 
 
          } // if(espSerial.find("+IPD"))
      } //if(espSerial.available())
 
      for (int i=0; i<3 ;i++)
      {LED[i]=NULL;}
      delay (100);
 
      // drop to here and wait for next request.
}



```

- **Step 1** Crate an PlatformIO Arduino framework like above, copy this code and compile it. Use the DFU tool to download it on the board.


- **Step 2** Use an Serial assistant like Mobaxterm, set the correct bundrate and the serial port. 

- **Step 3** Press reset button, you will see the "AT command" printed on the Serial assistant.

- **Step 4** After printing "AT+CIPSERVER=1,80"; Set your ip address of your ESP8266 for the website address and open it, you will see a website to control the on-board LED after the Serial prints "AT+CIPCLOSE=0".


![](https://files.seeedstudio.com/products/102991310/img/wiki2.png)


- **Step 5** Type "on" or "off" and submit, the on-board user LED will be turned on or off. And the statment of LED will be printed on the website. And your on-board LED will follow the statment.


![](https://files.seeedstudio.com/products/102991310/img/wiki3.png)



![](https://files.seeedstudio.com/products/102991310/img/wiki4.png)



## Resourse

- **[PDF]** [GD32VF103_Datasheet_Rev1.0](https://files.seeedstudio.com/wiki/Bazaar_Document/GD32VF103_Datasheet_Rev1.0.pdf)
- **[PDF]** [GD32VF103_User_Manual_EN_V1.0](https://files.seeedstudio.com/wiki/Bazaar_Document/GD32VF103_User_Manual_EN_V1.0.pdf)
- **[Zip]** [DFU Tool](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar)


## Tech Support & Product Discussion
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

