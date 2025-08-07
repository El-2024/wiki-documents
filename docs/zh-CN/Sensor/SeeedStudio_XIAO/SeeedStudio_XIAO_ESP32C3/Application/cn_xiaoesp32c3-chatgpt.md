---
description: XIAO ESP32C3-Chatgpt
title: XIAO ESP32C3-Chatgpt
keywords:
- XIAO ESP32C3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/xiaoesp32c3-chatgpt
last_update:
  date: 03/03/2023
  author: Citric
---
# 学习在 XIAO ESP32C3 上使用 WiFiClient 和 HTTPClient - XIAO ESP32C3 与 ChatGPT 实战

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/18.png"/></div>

ChatGPT 是一个新的聊天机器人模型，是一个由人工智能技术驱动的自然语言处理工具，由人工智能研究实验室 OpenAI 于 2022 年 11 月 30 日发布。

它能够通过学习和理解人类语言来进行对话，还能根据聊天的上下文进行互动，真正像人类一样聊天交流，甚至能完成撰写邮件、视频脚本、文案、翻译、代码等任务。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/2.png"/></div>

在嵌入式系统中，ChatGPT 可以成为一个很好的助手，帮助我们编写简单的程序，甚至检查和修复程序中出现的错误。

令人兴奋的是，OpenAI 官方提供了调用 GPT-3 模型的接口，这使我们能够通过多种方法调用这些接口，并将这个强大的模型部署到我们自己的嵌入式系统中。

Seeed Studio XIAO ESP32C3 是一款基于乐鑫 ESP32-C3 WiFi/蓝牙双模芯片的物联网迷你开发板。它具有出色的射频性能，支持 IEEE 802.11 b/g/n WiFi 和蓝牙 5 (LE) 协议。它能够完美支持 ESP32 官方提供的 WiFi Client 和 WiFi Server 服务。当然，它也能够完美支持 Arduino。

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>


因此在本教程中，我们将指导用户学习和使用 XIAO ESP32C3 WiFiClient 和 HTTPClient 库，如何连接到网络，如何发布网页以及 HTTP GET 和 POST 的基础知识。目标是调用 OpenAI ChatGPT 并创建您自己的问答网站。

## 入门指南

在本教程中，我们将使用 XIAO ESP32C3 来配置我们自己的 ChatGPT 问答页面。在这个页面中，您可以输入您的问题，XIAO ESP32C3 将记录您的问题并使用 OpenAI 提供的 API 调用方法，通过 HTTP Client 发送请求命令来获取 ChatGPT 的答案并在串口中打印出来。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/19.png"/></div>

本教程中的任务可以分为以下四个主要步骤。

1. [配置 XIAO ESP32C3 连接到网络](#configure-the-xiao-esp32c3-to-connect-to-the-network)：在这个步骤中，我们将学习使用 XIAO ESP32C3 的基本 WiFi 配置过程，并学习 XIAO ESP32C3 的基本操作，如网络配置、连接到网络服务和获取 IP 地址。

2. [构建嵌入式网页](#build-the-embedded-web-page)：在这个步骤中，我们主要涉及 WiFi Client 库。通过使用该库的 GET 和 POST 功能，我们可以使用 HTML 编写我们自己的问答网页并将其部署在 XIAO ESP32C3 上。

3. [通过内置网页提交问题](#submit-questions-via-the-built-in-web-page)：在这个步骤中，我们将主要学习使用 HTTP Client 中的 POST 方法，根据 OpenAI API 标准 POST 我们提出的问题。我们将把主要注意力集中在如何从网页收集和存储问题的过程上。

4. [从 ChatGPT 获取答案](#get-answers-from-chatgpt)：在这个步骤中，我们学习使用 HTTP Client 中的 POST 方法，并从返回的消息中提取我们需要的问题答案。最后一步是整理代码结构并进行最终集成。

### 所需材料

<table align="center">
 <tr>
     <th>材料</th>
 </tr>
    <tr>
     <td align="center"><div align="center"><img width ="130" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
 </tr>
 <tr>
     <td align="center"><a href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html"><strong>立即获取</strong></a></td>
 </tr>
</table>

### 前期准备

本教程中的所有程序和步骤都是基于 XIAO ESP32C3 完成的。在准备阶段，我们首先需要完成使用 XIAO ESP32C3 的环境配置。

**步骤 1.** 通过 USB Type-C 数据线将 XIAO ESP32C3 连接到您的计算机。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" alt="pir" width="120" height="auto"/></div>

**步骤 2.** 根据您的操作系统下载并安装最新版本的 Arduino IDE

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width="600" height="auto"/></a></p>

**步骤 3.** 启动 Arduino 应用程序。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

- **步骤 4.** 将 ESP32 开发板包添加到您的 Arduino IDE

导航到 **文件 > 首选项**，并在 **"附加开发板管理器网址"** 中填入以下网址：
*[https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_dev_index.json](https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_dev_index.json)*

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/4.png"/></div>

导航到 **工具 > 开发板 > 开发板管理器...**，在搜索框中输入关键词"**esp32**"，选择最新版本的 **esp32**，然后安装它。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_esp32c3.png" alt="pir" width="650" height="auto"/></div>

- **步骤 5.** 选择您的开发板和端口

导航到 **工具 > 开发板 > ESP32 Arduino** 并选择"**XIAO_ESP32C3**"。开发板列表有点长，您需要滚动到底部才能找到它。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_board.png" alt="pir" width="800" height="auto"/></div>

导航到 **工具 > 端口** 并选择已连接的 XIAO ESP32C3 的串行端口名称。这很可能是 COM3 或更高（**COM1** 和 **COM2** 通常保留给硬件串行端口）。

## 配置 XIAO ESP32C3 连接到网络

WiFi 的使用已在 [XIAO ESP32C3 WiFi 使用教程](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_WiFi_Usage/#connect-to-a-wifi-network) 中详细描述。

当 ESP32 设置为 Wi-Fi 站点时，它可以连接到其他网络（如您的路由器）。在这种情况下，路由器会为您的 ESP 开发板分配一个唯一的 IP 地址。

要使用 ESP32 Wi-Fi 功能，您需要做的第一件事是在代码中包含 WiFi.h 库，如下所示：

```c
#include <WiFi.h>
```

要将 ESP32 连接到特定的 Wi-Fi 网络，您必须知道其 SSID 和密码。此外，该网络必须在 ESP32 Wi-Fi 范围内。

首先，设置 Wi-Fi 模式。如果 ESP32 将连接到另一个网络（接入点/热点），它必须处于站点模式。

```c
WiFi.mode(WIFI_STA);
```

然后，使用 `WiFi.begin()` 连接到网络。您必须将网络 SSID 和密码作为参数传递。

连接到 Wi-Fi 网络可能需要一段时间，因此我们通常添加一个 while 循环，通过使用 `WiFi.status()` 不断检查连接是否已建立。当连接成功建立时，它返回 `WL_CONNECTED`。

当 ESP32 设置为 Wi-Fi 站点时，它可以连接到其他网络（如您的路由器）。在这种情况下，路由器会为您的 ESP32 开发板分配一个唯一的 IP 地址。要获取开发板的 IP 地址，您需要在与网络建立连接后调用 `WiFi.localIP()`。

```c
void WiFiConnect(void){
    WiFi.begin(ssid, password);
    Serial.print("Connecting to ");
    Serial.println(ssid);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }

    Serial.println("");
    Serial.println("WiFi connected!");
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());
}
```

`ssid` 和 `password` 变量保存您要连接的网络的 SSID 和密码。

```c
// Replace with your network credentials
const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";
```

这是一个非常简单的 WiFi 连接程序，将程序上传到 XIAO ESP32C3，然后打开串行助手并将波特率设置为 115200。如果连接顺利，您将看到打印出的 XIAO 的 IP 地址。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/5.png"/></div>

如果您有兴趣了解更多关于 ESP32C3 在 WiFi 中的应用和功能，我们建议阅读 [ESP32 有用的 Wi-Fi 库函数](https://randomnerdtutorials.com/esp32-useful-wifi-functions-arduino/)。

## 构建嵌入式网页

ESP32在WiFi库中集成了许多非常有用的WiFiClient功能，这使我们能够在不添加额外库的情况下设计和开发嵌入式网页。

创建一个新的WiFiServer对象，以便使用此对象来控制XIAO ESP32C3建立的IoT服务器。

```c
WiFiServer server(80);
WiFiClient client1;
```

在上述步骤中，我们让XIAO ESP32C3连接到WiFi。WiFi连接成功后，您将能够从串行监视器获取XIAO的当前IP地址。此时，XIAO已成功建立了Web服务器。您可以通过XIAO的IP地址访问此Web服务器。

假设您的XIAO ESP32C3的IP地址是`192.168.7.152`。然后您可以通过浏览器输入此IP地址。

输入此IP地址后，我们可能只会看到一个空白页面。这是因为我们尚未为该页面发布页面内容。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/6.png"/></div>

所以现在让我们创建一个数组来存储我们想要布局的页面内容，即在C中的HTML代码。

```c
const char html_page[] PROGMEM = {
    "HTTP/1.1 200 OK\r\n"
    "Content-Type: text/html\r\n"
    "Connection: close\r\n"  // the connection will be closed after completion of the response
    //"Refresh: 1\r\n"         // refresh the page automatically every n sec
    "\r\n"
    "<!DOCTYPE HTML>\r\n"
    "<html>\r\n"
    "<head>\r\n"
      "<meta charset=\"UTF-8\">\r\n"
      "<title>Cloud Printer: ChatGPT</title>\r\n"
      "<link rel=\"icon\" href=\"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/chatgpt-logo.png\" type=\"image/x-icon\">\r\n"
    "</head>\r\n"
    "<body>\r\n"
    "<img alt=\"SEEED\" src=\"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/logo.png\" height=\"100\" width=\"410\">\r\n"
    "<p style=\"text-align:center;\">\r\n"
    "<img alt=\"ChatGPT\" src=\"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/chatgpt-logo.png\" height=\"200\" width=\"200\">\r\n"
    "<h1 align=\"center\">Cloud Printer</h1>\r\n" 
    "<h1 align=\"center\">OpenAI ChatGPT</h1>\r\n" 
    "<div style=\"text-align:center;vertical-align:middle;\">"
    "<form action=\"/\" method=\"post\">"
    "<input type=\"text\" placeholder=\"Please enter your question\" size=\"35\" name=\"chatgpttext\" required=\"required\"/>\r\n"
    "<input type=\"submit\" value=\"Submit\" style=\"height:30px; width:80px;\"/>"
    "</form>"
    "</div>"
    "</p>\r\n"
    "</body>\r\n"
    "<html>\r\n"
};
```

此代码为我们提供了如下图所示的页面效果。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/7.png"/></div>

:::tip
网页的HTML语法超出了本教程的范围。您可以自己学习使用HTML，或者，我们可以使用现有的生成工具来完成代码生成工作。我们推荐使用[HTML Generator](https://webcode.tools/generators/html)。
值得注意的是，在C程序中，"\\"和"""是特殊字符，如果您想在程序中保留这些特殊字符的功能，您需要在它们前面添加一个右斜杠。
:::

Client1指的是Web服务器建立后的Socket客户端，以下代码是Web服务器处理的流程。

```c
client1 = server.available();
if (client1){
    Serial.println("New Client.");           // print a message out the serial port
    // an http request ends with a blank line
    boolean currentLineIsBlank = true;    
    while (client1.connected()){
        if (client1.available()){  // Check if the client is connected
            char c = client1.read();
            json_String += c;
            if (c == '\n' && currentLineIsBlank) {                                 
                dataStr = json_String.substring(0, 4);
                Serial.println(dataStr);
                if(dataStr == "GET "){
                    client1.print(html_page);  //Send the response body to the client
                }         
                else if(dataStr == "POST"){
                    json_String = "";
                    while(client1.available()){
                        json_String += (char)client1.read();
                    }
                    Serial.println(json_String); 
                    dataStart = json_String.indexOf("chatgpttext=") + strlen("chatgpttext=");
                    chatgpt_Q = json_String.substring(dataStart, json_String.length());                    
                    client1.print(html_page);        
                    // close the connection:
                    delay(10);
                    client1.stop();       
                }
                json_String = "";
                break;
            }
            if (c == '\n') {
                // you're starting a new line
                currentLineIsBlank = true;
            }
            else if (c != '\r') {
                // you've gotten a character on the current line
                currentLineIsBlank = false;
            }
        }
    }
}
```

在上面的示例程序中，我们需要使用`server.begin()`来启动IoT服务器。该语句需要放在`setup`函数中。

```c
void setup()
{
    Serial.begin(115200);
 
    // Set WiFi to station mode and disconnect from an AP if it was previously connected
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    while(!Serial);

    Serial.println("WiFi Setup done!");
    WiFiConnect();

    // Start the TCP server server
    server.begin();
}
```

一旦运行上述程序并将XIAO ESP32C3的IP地址输入到浏览器中（前提是您的主机也需要与XIAO ESP32C3在同一局域网中），那么WiFiClient的GET步骤将开始执行。此时，借助客户端打印方法，我们提交页面的HTML代码。

```c
if(dataStr == "GET "){
    client1.print(html_page);
}
```

并且，我们在页面中设计了用于问题输入的输入框，当用户输入内容并点击**提交**按钮后，网页将获取按钮的状态并将输入的问题存储到字符串变量`chatgpt_Q`中。

```c
json_String = "";
while(client1.available()){
    json_String += (char)client1.read();
}
Serial.println(json_String); 
dataStart = json_String.indexOf("chatgpttext=") + strlen("chatgpttext=");
chatgpt_Q = json_String.substring(dataStart, json_String.length());                    
client1.print(html_page);        
// close the connection:
delay(10);
client1.stop();      
```

运行效果如下所示。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/15.png"/></div>

## 通过内置网页提交问题

在上述步骤的页面中，有一个输入框。输入框是我们需要用户输入他们想要询问的问题的地方。我们所需要做的就是获取这个问题，并通过OpenAI提供的API请求将其发送出去。

**步骤1**. 注册OpenAI账户。

您可以点击[这里](https://beta.openai.com/signup)前往OpenAI的注册地址。如果您之前已经注册过账户，那么可以跳过这一步。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/8.png"/></div>

**步骤2**. 获取OpenAI API。

登录[OpenAI网站](https://platform.openai.com/overview)，点击右上角的账户头像，然后选择**查看API密钥**。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/9.png"/></div>

在新弹出的页面中选择**+创建新的密钥**，然后复制您的密钥并保存。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/10.png"/></div>

同时，我们可以在程序中创建字符串变量并将此密钥复制到这里。

```c
char chatgpt_token[] = "sk**********Rj9DYiXLJJH";
```

:::tip
截至2023年2月15日，OpenAI为每个新用户免费提供价值**$18**的积分。详细费率可以在OpenAI的[文档](https://openai.com/api/pricing/)中找到。
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/11.png"/></div>
:::

**步骤3**. 根据OpenAI的HTTP请求编写程序。

OpenAI提供了非常详细的[API使用说明](https://platform.openai.com/docs/api-reference/making-requests)，以便用户可以使用自己的API密钥来调用ChatGPT。

根据ChatGPT的文档，我们需要发送请求的格式如下：

```shell
curl https://api.openai.com/v1/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{"model": "gpt3.5-turbo-instruct", "prompt": "Say this is a test", "temperature": 0, "max_tokens": 7}'
```

超文本传输协议（HTTP）作为客户端和服务器之间的请求-响应协议工作。
**GET**用于从指定资源请求数据。它通常用于从API获取值。
**POST**用于向服务器发送数据以创建/更新资源。
ESP32可以使用三种不同类型的主体请求进行HTTP POST请求：URL编码、JSON对象或纯文本。这些是最常见的方法，应该与大多数API或Web服务集成。

上述信息非常重要，为编写HTTP POST程序提供了理论基础。首先，我们从导入HTTPClient库开始。

```c
#include <HTTPClient.h>
```

您还需要输入OpenAI域名，以便ESP将问题发布到ChatGPT。不要忘记OpenAI API密钥。

```c
HTTPClient https;

const char* chatgpt_token = "YOUR_API_KEY";
char chatgpt_server[] = "https://api.openai.com/v1/completions";
```

我们需要使用JSON对象进行HTTP POST请求。

```c
if (https.begin(chatgpt_server)) {  // HTTPS
    https.addHeader("Content-Type", "application/json"); 
    String token_key = String("Bearer ") + chatgpt_token;
    https.addHeader("Authorization", token_key);
    String payload = String("{\"model\": \"gpt-3.5-turbo-instruct\", \"prompt\": \"") + chatgpt_Q + String("\", \"temperature\": 0, \"max_tokens\": 100}"); //Instead of TEXT as Payload, can be JSON as Paylaod
    httpCode = https.POST(payload);   // start connection and send HTTP header
    payload = "";
}
else {
    Serial.println("[HTTPS] Unable to connect");
    delay(1000);
}
```

在程序中，我们通过`POST()`方法将`payload`发送到服务器。`chatgpt_Q`是我们想要发送给ChatGPT的问题内容，这将在获取问题页面中可用。

如果您对ESP32C3 HTTPClient的更多功能感兴趣，我们建议您阅读[ESP32 HTTP GET和HTTP POST与Arduino IDE](https://randomnerdtutorials.com/esp32-http-get-post-arduino/)。

## 从 ChatGPT 获取答案

下一步是整个教程的最后一步，我们如何从 ChatGPT 获取答案并记录它。

让我们继续阅读 OpenAI 提供的 [API 文档](https://platform.openai.com/docs/api-reference/making-requests)，了解 ChatGPT 返回的消息内容结构是什么样的。这将允许我们编写程序来解析我们需要的内容。

```shell
{
  "id": "cmpl-uqkvlQyYK7bGYrRHQ0eXlWi7",
  "object": "text_completion",
  "created": 1589478378,
  "model": "gpt-3.5-turbo-instruct",
  "system_fingerprint": "fp_44709d6fcb",
  "choices": [
    {
      "text": "\n\nThis is indeed a test",
      "index": 0,
      "logprobs": null,
      "finish_reason": "length"
    }
  ],
  "usage": {
    "prompt_tokens": 5,
    "completion_tokens": 7,
    "total_tokens": 12
  }
}
```

从 OpenAI 提供的参考文档中，我们知道接口返回的消息中问题答案的位置在 `{"choices": [{"text": "\n\nxxxxxxx",}]}`。

所以现在我们可以确定我们需要的"答案"应该以 **\n\n** 开头，以 **,** 结尾。然后，在程序中，我们可以通过使用 `indexOf()` 方法检索文本开始和结束的位置，并存储返回答案的内容。

```c
dataStart = payload.indexOf("\\n\\n") + strlen("\\n\\n");
dataEnd = payload.indexOf("\",", dataStart); 
chatgpt_A = payload.substring(dataStart, dataEnd);
```

总之，我们可以使用 switch 方法与程序的当前状态来确定我们应该执行程序的哪一步。

```c
typedef enum 
{
  do_webserver_index,
  send_chatgpt_request,
  get_chatgpt_list,
}STATE_;

STATE_ currentState;

switch(currentState){
    case do_webserver_index:
        ...
    case send_chatgpt_request:
        ...
    case get_chatgpt_list:
        ...
}
```

至此，整个程序的逻辑结构已经完成。完整的程序代码可以通过点击下面的图片获得。请不要急于上传程序，您需要将程序的 **ssid、password 和 chatgpt_token** 更改为您自己的。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/xiaoesp32c3-chatgpt" target="_blank"><div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></div></a></p>

然后，随意使用它！

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/16.gif"/></div>

## 下一步是什么？

在本教程中，我们提供了使用 ChatGPT 为像 Arduino - XIAO ESP32C3 这样的嵌入式开发板调用 OpenAI 接口的基本方法。接下来，您可以让您的创造力自由发挥！

例如，您是否可以考虑添加屏幕或键盘，使其成为一个只为您工作的独立显示设备？来看看 Gavin 的创意，他制作了一个特别有趣的监控设备！我们也特别感谢他为本教程提供了必要的步骤和想法。

- [Gavin - ChatGPT Recorder & Monitor](https://www.hackster.io/gavinchiong/chatgpt-recorder-monitor-601ef6)

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/14.jpg"/></div>

或者更进一步，添加语音识别模块，从此摆脱键盘和鼠标，制作您自己的语音助手等等。总之，我们很乐意看到您与像 XIAO ESP32C3 这样的优秀产品分享您的作品！

## 故障排除

### Q1: 使用 XIAO ESP32C3 调用 OpenAI API 获取答案时，在地理位置或网络使用方面是否有任何限制？

> A: 截至 2023 年 2 月 17 日的测试，中国大陆的作者使用中国网络也能够非常顺畅地获得 ChatGPT 响应，目前没有限制。只要我们能够获得 OpenAI API 密钥，调用就会顺利完成。

### Q2: 为什么我会收到超时错误？

>A: 这可能是因为 ChatGPT 回复消息等待时间过长，这可能导致程序错误地认为它没有响应。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>