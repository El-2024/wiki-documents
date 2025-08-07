---
description: 本文档演示如何通过 HTTP 在 reCamera 上连接到 XIAO 以运行 C++ 项目。
title: reCamera 通过 HTTP 连接到 XIAO
keywords:
  - Http
  - reCamera
  - XIAO
  - YOLO
  - C++
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /cn/recamera_connects_to_xiao_via_http
last_update:
  date: 07/11/2025
  author: Liangyuxin

no_comments: false # 用于 Disqus
---

# reCamera 通过 HTTP 连接到 XIAO

本文档演示如何通过 HTTP 实现 reCamera 和 [XIAO](https://wiki.seeedstudio.com/cn/SeeedStudio_XIAO_Series_Introduction/) 之间的通信，将数据传输到 [XIAO](https://wiki.seeedstudio.com/cn/SeeedStudio_XIAO_Series_Introduction/)，以便将 reCamera 集成到您的项目中。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/1.png" /></div>

## 准备工作

### reCamera

#### HTTP API 和网络连接

**首先**，准备好 reCamera 的 C++ supervisor 项目和运行环境。

- **步骤 1.** 下载 [Supervisor_add_detection_http](https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/Supervisor_add_detection_http.zip) 项目，编译并将 **.exe** 文件复制到 reCamera 的终端目录。（详细说明请参考 wiki：[基于 Cpp 的 reCamera 实时 YOLO 目标检测 / 环境准备 / 预编译](https://wiki.seeedstudio.com/cn/real_time_yolo_object_detection_using_recamera_based_on_cpp/)。）这是一个 supervisor 项目，我们将仅使用照片 YOLO 检测接口进行演示。如果您有自己的项目，可以在此项目中添加新的 HTTP API 和项目代码。

- **步骤 2.** 使用 USB 数据线将 reCamera 连接到 PC，使用 **MobaXterm** 访问 reCamera 终端（**192.168.42.1**），并导航到 **/etc/init.d/** 删除三个自动启动程序：**S93sscma-supervisor, S03node-red 和 S91sscma-node**。（详细说明请参考 wiki：[基于 Cpp 的 reCamera 实时 YOLO 目标检测 / 环境准备 / reCamera 准备](https://wiki.seeedstudio.com/cn/real_time_yolo_object_detection_using_recamera_based_on_cpp/)。）

**其次**，reCamera 和 XIAO 必须在同一个 2.4GHz 局域网（LAN）中才能通信。reCamera 内置无线网卡，可以连接到 WiFi。通常，您可以通过相机的 [Node-RED 网页](http://192.168.42.1/#/workspace) 连接到 WiFi。但是，当运行自定义 C++ 项目时，必须禁用 Node-RED 并重新启动 reCamera。（参考：[Seeed Studio Wiki](https://wiki.seeedstudio.com/cn/real_time_yolo_object_detection_using_recamera_based_on_cpp/)。）因此，我们需要通过 Linux 终端建立 WiFi 连接。

```
cd /etc/
ls
```

您可以看到 **wpa_supplicant.conf** 文件：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/2.png" /></div>
您也可以在左侧文件目录中查看：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/3.png" /></div>

将文件拖到桌面并用记事本打开。按照图片所示添加网络，并更改为您的 SSID 和密码。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/4.png" /></div>

删除 reCamera 终端中的原始文件：/etc/。

```
sudo rm wpa_supplicant.conf
```

打开 PC 的 Windows PowerShell 并将文件复制到 reCamera 终端：**/home/recamera/**：

```
scp "C:\Users\{your username}\Desktop\wpa_supplicant.conf" recamera@192.168.42.1:/home/recamera
```

将文件从 **/home/recamera/** 复制到：**/etc/**：

```
sudo scp wpa_supplicant.conf /etc/
```

重启 reCamera。然后运行程序。

```
sudo ./Supervisor_add_detection_http
```

确保您的 reCamera 已连接到 WiFi 网络。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/5.png" /></div>

### XIAO

#### 网络连接和发送 HTTP 请求

需要下载 [Arduino](https://www.arduino.cc/en/software) 来为 XIAO（ESP32-C3）烧录程序。

**步骤 1.** 根据您的操作系统下载并安装最新版本的 [Arduino IDE](https://www.arduino.cc/en/software/)。启动 Arduino 应用程序。

**步骤 2.** 将 ESP32 板包添加到 Arduino IDE  
导航到 **文件 > 首选项**，在 **"附加开发板管理器网址"** 中填写以下 URL：  
**https://jihulab.com/esp-mirror/espressif/arduino-esp32.git**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/6.png" /></div>

导航到 **工具 > 开发板 > 开发板管理器...**，在搜索框中输入关键字 "**esp32**"，选择最新版本的 **esp32** 并安装。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/12.png" /></div>

**步骤 3.** 选择您的开发板和端口

**开发板**  
导航到 **工具 > 开发板 > ESP32 Arduino** 并选择 "**XIAO_ESP32C3**"。开发板列表较长，您需要滚动到最底部才能找到。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/13.png" /></div>

**端口**  
导航到 **工具 > 端口** 并选择连接的 XIAO ESP32C3 的串口名称。通常是 COM3 或更高（**COM1** 和 **COM2** 通常保留给硬件串口）。

**步骤 4.** 编写以下程序并点击上传按钮进行编译和上传。reCamera 和 XIAO 必须在同一个 2.4GHz 局域网（LAN）中才能通信。

```
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

const char* ssid = "{Your wifi name}";
const char* password = "{Your wifi password}";
const char* apiUrl = "http://{Your reCamera wlan0 IP}/modeldetector"; // 您可以将 "modeldetector" 替换为您的项目接口。
// 您可以通过在终端中运行 'ifconfig' 检查 reCamera 的 wlan0 IP 地址。

void setup() {
  Serial.begin(115200);
  // 网络连接 
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    // 发送 HTTP 请求
    HTTPClient http;
    http.begin(apiUrl); 
    http.addHeader("Content-Type", "application/json"); 

    int httpCode = http.GET();
    if (httpCode > 0) {
      String payload = http.getString(); 
      Serial.println("HTTP Response:");
      // Serial.println(payload);

      DynamicJsonDocument doc(1024); // 根据实际 JSON 大小调整缓冲区大小。
      DeserializationError error = deserializeJson(doc, payload);
      if (error) {
        Serial.print("JSON 反序列化失败: ");
        Serial.println(error.c_str());
      } 
      // 根据实际 JSON 内容调整键值。
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
      Serial.print("HTTP Get 失败: ");
      Serial.println(httpCode);
    }
    http.end();  
  } else {
    Serial.println("WiFi 断开连接");
  }

  delay(5000); 
}

```

**注意**: 修改为您的 WiFi 名称 (SSID)、密码，以及 reCamera 的 wlan0 IP 地址。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/7.png" /></div>

等待上传完成后，您可以在 **串口监视器** 中看到 XIAO 已成功连接到 WiFi。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/8.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/9.png" /></div>

## 运行

确保您的 reCamera 正在运行 Supervisor 项目并已成功连接到 WiFi。

```
sudo ./Supervisor_add_detection_http
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/10.png" /></div>

您可以在 XIAO 的 **串口监视器** 中看到 HTTP 服务的 Json 结果。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/11.png" /></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
