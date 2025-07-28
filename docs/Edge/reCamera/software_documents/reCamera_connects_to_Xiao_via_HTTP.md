---
description: This wiki demonstrates how to connect to XIAO via HTTP on reCamera to run C++ project.
title: reCamera connects to XIAO via HTTP
keywords:
  - Http
  - reCamera
  - XIAO
  - YOLO
  - C++
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_connects_to_xiao_via_http
last_update:
  date: 07/11/2025
  author: Liangyuxin

no_comments: false # for Disqus
---

# reCamera connects to XIAO via HTTP

This document demonstrates how to enable communication between the reCamera and [XIAO](https://wiki.seeedstudio.com/SeeedStudio_XIAO_Series_Introduction/) via HTTP, transmitting data to [XIAO](https://wiki.seeedstudio.com/SeeedStudio_XIAO_Series_Introduction/) so that you can integrate the reCamera into your own projects.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/1.png" /></div>

## Preparation

### reCamera

#### HTTP API and Network connection

**Firstly**, prepare your reCamera's C++ supervisor project and the running environment.

- **Step 1.** Download the [Supervisor_add_detection_http](https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/Supervisor_add_detection_http.zip) project, compile it and copy the **.exe** file to the reCamera terminal directory.(For detailed instructions, refer to the wiki: [Real-time YOLO object detection using reCamera based on Cpp / Environment Preparation / Pre-compilation](https://wiki.seeedstudio.com/real_time_yolo_object_detection_using_recamera_based_on_cpp/).) This is a supervisor project, we will only use the photo YOLO detection interface for demonstration purposes.If you have your own project, you can add new HTTP APIs and project code within this project.

- **Step 2.** Connect the reCamera to the PC using a USB cable, use **MobaXterm** to access the reCamera terminal (**192.168.42.1**), and navigate to **/etc/init.d/** to remove the three auto-start programs: **S93sscma-supervisor, S03node-red, and S91sscma-node**.(For detailed instructions, refer to the wiki: [Real-time YOLO object detection using reCamera based on Cpp / Environment Preparation / reCamera Preparation](https://wiki.seeedstudio.com/real_time_yolo_object_detection_using_recamera_based_on_cpp/).)

**Secondly**, reCamera and XIAO must be on the same 2.4GHz local area network (LAN) to communicate. ReCamera has an internal wireless network card that can connect to WiFi. Typically, you can connect to WiFi through the camera's [Node-RED web](http://192.168.42.1/#/workspace). However, when running a custom C++ project, you must disable Node-RED and restart reCamera.(Reference: [Seeed Studio Wiki](https://wiki.seeedstudio.com/real_time_yolo_object_detection_using_recamera_based_on_cpp/)). Therefore, we need to establish the WiFi connection via the Linux terminal.

```
cd /etc/
ls
```

You can see the **wpa_supplicant.conf** :
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/2.png" /></div>
You can also view it in the left file directory:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/3.png" /></div>

Drag the file(s) to the desktop and open it with Notepad.Add the network as shown in the image, and change it to your SSID and password.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/4.png" /></div>

Delete the original file in reCamera terminal: /etc/.

```
sudo rm wpa_supplicant.conf
```

Open your PC windows powershell and copy the file to the reCamera terminal : **/home/recamera/**:

```
scp "C:\Users\{your username}\Desktop\wpa_supplicant.conf" recamera@192.168.42.1:/home/recamera
```

Copy the file from **/home/recamera/** to : **/etc/**:

```
sudo scp wpa_supplicant.conf /etc/
```

Restart the reCamera.Then, run the program.

```
sudo ./Supervisor_add_detection_http
```

Ensure your reCamera is connected to your WiFi network.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/5.png" /></div>

### XIAO

#### Network connection and send HTTP requests

It is necessary to download [Arduino](https://www.arduino.cc/en/software) to flash the program for XIAO (ESP32-C3).

**Step 1.** Download and Install the latest version of [Arduino IDE](https://www.arduino.cc/en/software/) according to your operating system.Launch the Arduino application.

**Step 2.** Add ESP32 board package to your Arduino IDE
Navigate to **File > Preferences**, and fill **"Additional Boards Manager URLs"** with the url below:
**https://jihulab.com/esp-mirror/espressif/arduino-esp32.git**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/6.png" /></div>

Navigate to **Tools > Board > Boards Manager...**, type the keyword "**esp32**" in the search box, select the latest version of **esp32**, and install it.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/12.png" /></div>

**Step 3.** Select your board and port

**Board**
Navigate to **Tools > Board > ESP32 Arduino** and select "**XIAO_ESP32C3**". The list of board is a little long and you need to roll to the buttom to reach it.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/13.png" /></div>

**Port**
Navigate to **Tools > Port** and select the serial port name of the connected XIAO ESP32C3. This is likely to be COM3 or higher (**COM1** and **COM2** are usually reserved for hardware serial ports).

**Step 4.** Write the following program and click the upload button to compile and upload. The reCamera and XIAO must be on the same 2.4GHz local area network (LAN) to communicate.

```
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

const char* ssid = "{Your wifi name}";
const char* password = "{Your wifi password}";
const char* apiUrl = "http://{Your reCamera wlan0 IP}/modeldetector"; //You can replace "modeldetector" with your project interface.
//You can check the reCamera IP address of wlan0 using 'ifconfig' in the terminal.

void setup() {
  Serial.begin(115200);
  //network connection 
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    //send HTTP requests
    HTTPClient http;
    http.begin(apiUrl); 
    http.addHeader("Content-Type", "application/json"); 

    int httpCode = http.GET();
    if (httpCode > 0) {
      String payload = http.getString(); 
      Serial.println("HTTP Response:");
      // Serial.println(payload);

   
      DynamicJsonDocument doc(1024); // Adjust the buffer size according to the actual JSON size.
      DeserializationError error = deserializeJson(doc, payload);
      if (error) {
        Serial.print("JSON Deserialization fail: ");
        Serial.println(error.c_str());
      } 
      // Adjust the json key according to the actual JSON content.
      Serial.print("Code:  ");
      Serial.println(doc["Code"].as<String>());      
      Serial.print("Msg:  ");
      Serial.println(doc["Msg"].as<String>());
      Serial.print("Target:  ");
      Serial.println(doc["Target"].as<String>());
      Serial.print("Score:  ");
      Serial.println(doc["Score"].as<String>());
      Serial.print("Release_duration:  ");
      Serial.print(doc["Release_duration"].as<String>());
      Serial.println("ms");
      Serial.print("Capture_duration:  ");
      Serial.print(doc["Capture_duration"].as<String>());
      Serial.println("ms");
      Serial.print("Image_preprocessing_duration:  ");
      Serial.print(doc["Image_preprocessing_duration"].as<String>());
      Serial.println("ms");
      Serial.print("Detection_duration:  ");
      Serial.print(doc["Detection_duration"].as<String>());
      Serial.println("ms");
      Serial.print("Total Duration:  ");
      Serial.print(doc["Duration"].as<String>());
      Serial.println("ms");


    } else {
      Serial.print("HTTP Get fail: ");
      Serial.println(httpCode);
    }
    http.end();  
  } else {
    Serial.println("WiFi disconnected");
  }

  delay(5000); 
}

```

**Note**: Modify to your WiFi name (SSID), password, and reCamera wlan0 IP address.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/7.png" /></div>

Wait for the upload to complete,and you can see XIAO has successfully connected to WiFi in the **serial monitor**.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/8.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/9.png" /></div>

## Running

Ensure your reCamera is running the Supervisor project and has successfully connected to WiFi.

```
sudo ./Supervisor_add_detection_http
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/10.png" /></div>

You can see the Json results of HTTP service in the **serial monitor** of XIAO.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/11.png" /></div>

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
