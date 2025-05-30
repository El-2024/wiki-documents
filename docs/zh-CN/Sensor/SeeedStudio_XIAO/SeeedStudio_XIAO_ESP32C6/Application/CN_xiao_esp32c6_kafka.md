---
description: 使用 XIAO ESP32C6 和传感器采集数据并发送到 Apache Kafka
title: 基于 Apache Kafka 的实时物联网数据处理节点
keywords:
- xiao esp32c6
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32c6_kafka
last_update:
  date: 05/15/2025
  author: Allen
---

# 初始化生产者

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/kafka_xiao.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

我们的前沿处理节点 Kafka-ESP32 结合了 Apache Kafka 和 ESP32C6 微控制器的强大功能，为处理物联网数据流提供了高效的解决方案。通过使用 XIAO ESP32C6 和 DHT20 环境传感器，数据被采集并通过 ESP32C6 无缝发送到 Apache Kafka。Kafka 的高吞吐量、低延迟消息功能实现了实时数据处理和分析，而其分布式架构允许轻松扩展。Kafka-ESP32 使您能够开发定制应用程序和集成，彻底改变您在当今数据驱动的环境中管理和利用物联网资产的方式。

## 所需材料

本示例将介绍如何使用 XIAO ESP32C6 和 Grove DHT20 温湿度传感器完成 AWS IoT Core 的 SageMaker 任务。以下是完成此流程所需的所有硬件设备。

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32C6</th>
			<th>DHT20</th>
			<th>扩展板</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td><td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/extensionboard.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## Docker 安装

为什么使用 Docker？因为 Docker 可以在单台机器上模拟多台计算机的环境，并且可以非常轻松地部署应用程序。因此，在本项目中，我们将使用 Docker 来设置环境并提高效率。

### 第一步：下载 Docker

根据您的计算机操作系统下载不同类型的安装程序。点击[这里](https://www.docker.com/products/docker-desktop)跳转。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/1.png" style={{width:1000, height:'auto'}}/></div>

:::tip
如果您的电脑是 **Windows**，请在完成 **第二步** 后再安装 Docker。
:::

### 第二步：安装 WSL（Windows Subsystem for Linux）

:::tip
此步骤适用于 **Windows**。如果您的电脑是 Mac 或 Linux，可以跳过此步骤。
:::

1. 以管理员身份运行以下代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/3.png" style={{width:1000, height:'auto'}}/></div>

```bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

2. 从[这里](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)下载此工具并双击安装。

3. 打开 **Microsoft Store**，搜索并下载您喜欢的 Linux 版本，这里我安装了 Ubuntu。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/4.png" style={{width:1000, height:'auto'}}/></div>

4. 安装 Linux 后，您需要打开它并设置用户名和密码，然后等待几分钟完成初始化。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/5.png" style={{width:1000, height:'auto'}}/></div>

5. 运行以下指令以使用 **WSL**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/6.png" style={{width:1000, height:'auto'}}/></div>

6. 安装 WSL 后，现在您可以双击 Docker 安装程序进行安装。当您看到以下界面时，说明安装成功。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/2.png" style={{width:1000, height:'auto'}}/></div>

## 部署服务

在开始之前，我想介绍一下本项目中每个服务的功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/structure.png" style={{width:700, height:'auto'}}/></div>

以下是本项目的目录结构供您参考。我将在接下来的步骤中逐一创建这些文件。每个文件的位置非常重要。我强烈建议您参考此目录结构。创建一个名为 **kafka_xiao_project** 的目录，并包含这些文件。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/30.png" style={{width:1000, height:'auto'}}/></div>

### 第三步：部署 Python 服务器

由于 MCU 设备性能不足，无法直接作为 Kafka 的客户端使用。因此需要构建一个服务器来进行数据中转。本步骤将使用 Python 构建一个简单的服务器。XIAO ESP32C6 主要用于从 DHT20 收集环境数据并将其发送到服务器。

1. 首先，我们需要创建 **app.py** 文件，这是服务器的主要功能代码。

```python
from flask import Flask
from kafka import KafkaProducer, KafkaConsumer

app = Flask(__name__)

@app.route('/favicon.ico')
def favicon():
    return '', 204

@app.route('/<temperature>/<humidity>')
def send_data(temperature, humidity):
    producer = KafkaProducer(bootstrap_servers='kafka:9092')
    data = f'Temperature: {temperature}, Humidity: {humidity}'
    producer.send('my_topic', data.encode('utf-8'))
    return f'Temperature: {temperature}, Humidity: {humidity}'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
```

2. 创建 **requirements.txt** 文件，定义依赖库。

```
flask
kafka-python
```

3. 创建 **Dockerfile**

```
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "app.py"]
```

4. 创建上述三个文件后，可以运行以下命令来构建 Docker 镜像。

```
docker build -t pyserver .
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/9.png" style={{width:1000, height:'auto'}}/></div>

### 第四步：部署 Jupyter Notebook

Jupyter Notebook 主要用于调试，是一个非常好用的工具，同时可以使用 Python 操作 Kafka。

1. 首先创建 **Dockerfile**。

```
FROM python:3.9

RUN pip install jupyter

WORKDIR /notebook

EXPOSE 8888

CMD ["jupyter", "notebook", "--ip=0.0.0.0", "--port=8888", "--no-browser", "--allow-root"]
```

2. 构建 Jupyter Docker 镜像。
```
docker build -t jupyter .
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/8.png" style={{width:1000, height:'auto'}}/></div>

### 第五步：启动 Docker 集群

我们可以使用 **docker-compose.yml** 来构建 Docker 集群。Docker Compose 中的每个服务代表一个独立的计算机，并使用 *kafka-net* 将它们连接起来。

1. 首先创建 **docker-compose.yml** 文件。

```
services:
  zookeeper:
    container_name: zookeeper
    hostname: zookeeper
    image: docker.io/bitnami/zookeeper
    ports:
      - "2181:2181"
    environment:
      - ALLOW_ANONYMOUS_LOGIN=yes
    networks:
      - kafka-net

  kafka:
    container_name: kafka
    hostname: kafka
    image: docker.io/bitnami/kafka
    ports:
      - "9092:9092"
      - "9093:9093"
    environment:
      - KAFKA_CFG_ZOOKEEPER_CONNECT=zookeeper:2181
      - KAFKA_CFG_BROKER_ID=0
      - ALLOW_PLAINTEXT_LISTENER=yes
      - KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP=INTERNAL:PLAINTEXT,EXTERNAL:PLAINTEXT
      - KAFKA_CFG_LISTENERS=INTERNAL://kafka:9092,EXTERNAL://localhost:9093
      - KAFKA_CFG_ADVERTISED_LISTENERS=INTERNAL://kafka:9092,EXTERNAL://localhost:9093
      - KAFKA_CFG_INTER_BROKER_LISTENER_NAME=INTERNAL
    depends_on:
      - zookeeper
    networks:
      - kafka-net
      
  jupyter:
    image: jupyter:latest
    depends_on:
      - kafka
    volumes:
      - ./myjupyter:/notebook
    ports:
      - "8888:8888"
    environment:
      - JUPYTER_ENABLE_LAB=yes
    networks:
      - kafka-net
      
  pyserver:
    image: pyserver:latest
    depends_on:
      - kafka
    volumes:
      - ./myserver/app.py:/app/app.py
    ports:
      - "5001:5001"
    networks:
      - kafka-net

networks:
  kafka-net:
    driver: bridge
```

2. 然后运行以下命令启动 Docker 集群。

```
docker-compose up -d
```

:::提示
如果端口被占用，可以将端口从 5001 更改为 5002 等，或者关闭占用端口的应用程序。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/10.png" style={{width:1000, height:'auto'}}/></div>

3. 接下来我们将测试集群是否正常工作。首先打开软件 **Docker Desktop** 并点击进入 **pyserver**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/11.png" style={{width:1000, height:'auto'}}/></div>

4. 现在服务器运行在 `http://127.0.0.1:5001`。点击该链接打开。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/12.png" style={{width:800, height:'auto'}}/></div>

5. 然后按照格式输入两个参数，测试 Docker 集群是否正常工作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/13.png" style={{width:700, height:'auto'}}/></div>

6. 进入 Kafka 查看数据是否已发送到 Kafka。
```
docker exec -it kafka bash

cd opt/bitnami/kafka/bin/

kafka-console-consumer.sh --bootstrap-server localhost:9093 --topic my_topic --from-beginning
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/14.png" style={{width:1000, height:'auto'}}/></div>

7. 再次尝试输入不同的参数，可以看到数据立即发送到 Kafka。现在，恭喜你！Docker 集群已经完美运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/15.png" style={{width:1000, height:'auto'}}/></div>

### 第七步：使用 Python 测试 Kafka

:::提示
本步骤主要介绍如何使用 Python 操作 Kafka。你也可以跳过此步骤，对整个项目的运行没有影响。
:::

1. 打开 Docker Desktop 并点击进入 Jupyter。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/16.png" style={{width:1000, height:'auto'}}/></div>

2. 点击链接访问 Jupyter。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/17.png" style={{width:1000, height:'auto'}}/></div>

3. 成功访问 Jupyter 后，你将看到以下页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/18.png" style={{width:1000, height:'auto'}}/></div>

4. 右键单击并创建 **New Notebook**，选择 Python3(ipykernel)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/19.png" style={{width:800, height:'auto'}}/></div>

5. 通过运行以下命令安装 kafka-python 库：```pip install kafka-python```。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/21.png" style={{width:1000, height:'auto'}}/></div>

6. 安装该库后，需要重启 Jupyter。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/22.png" style={{width:1000, height:'auto'}}/></div>

7. 现在运行以下代码，通过 Python 向 Kafka 发送一些数据。

```python
from kafka import KafkaProducer, KafkaConsumer

producer = KafkaProducer(bootstrap_servers='localhost:9093')
# 发送消息
producer.send('my_topic', b'Hello, Kafka2')
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/23.png" style={{width:1000, height:'auto'}}/></div>

8. 你还可以在 Kafka 中检查这些数据。

```python
from kafka import KafkaConsumer

# 初始化消费者
consumer = KafkaConsumer(
    'my_topic',
    bootstrap_servers='localhost:9093',
    auto_offset_reset='earliest',
    enable_auto_commit=True,
    group_id='group1'
)

# 接收数据并打印
for message in consumer:
    print(f"Received message: {message.value.decode('utf-8')}")
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/25.png" style={{width:1000, height:'auto'}}/></div>

## XIAO ESP32C6 和 Apache Kafka

[Kafka](https://kafka.apache.org/) 是一个分布式流处理平台，能够实现大规模数据流的实时处理。它支持系统之间的数据发布-订阅消息传递，并提供容错性、持久性和高吞吐量。Kafka 广泛应用于构建实时数据管道和流处理应用程序，适用于各种领域。

现在，我们将使用 XIAO ESP32C6 和 DHT20 温湿度传感器来收集数据并实时发送到 Kafka。

### 第8步：收集数据并发送到 Apache Kafka

1. 将以下代码复制到你的 Arduino IDE。

```cpp
#include <WiFi.h>
#include <HTTPClient.h>

// 在此处更改为你的 WiFi 名称和密码。
const char* ssid = "Maker_2.4G";
const char* password = "15935700";

// 在此处更改为你的电脑 IP 地址和服务器端口。
const char* serverUrl = "http://192.168.1.175:5001";

void setup() {
  Serial.begin(115200);
  
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  
  Serial.println("Connected to WiFi");
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    
    // 创建访问链接
    String url = serverUrl;
    url += "/";
    url += "30.532";  // 温度
    url += "/";
    url += "60.342";  // 湿度
    
    http.begin(url);
    
    int httpResponseCode = http.GET();
    
    // 获取 HTTP 响应并打印
    if (httpResponseCode == 200) {
      String response = http.getString();
      Serial.println("Server response:");
      Serial.println(response);
    } else {
      Serial.print("HTTP error code: ");
      Serial.println(httpResponseCode);
    }
    
    http.end();
  } else {
    Serial.println("WiFi disconnected");
  }
  
  delay(5000);  // 每5秒访问一次服务器。
}
```

如果你不知道你的电脑 IP 地址，可以运行 ```ipconfig```（Windows）或 ```ifconfig | grep net```（Mac 或 Linux）来查看。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/26.png" style={{width:600, height:'auto'}}/></div>

2. 使用 Type-C 数据线将你的电脑连接到 C6，并使用 Grove 数据线将 XIAO 扩展板的 **I2C 接口**连接到 DHT20 传感器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/hardware.jpeg" style={{width:600, height:'auto'}}/></div>

3. 选择你的开发板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/27.png" style={{width:1000, height:'auto'}}/></div>

4. 上传代码并打开串口监视器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/28.png" style={{width:1000, height:'auto'}}/></div>

5. 打开运行 Kafka 的 Windows PowerShell。现在你将看到环境数据正在发送到 Kafka。恭喜你！你成功运行了这个项目！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/29.png" style={{width:1000, height:'auto'}}/></div>

## 资源

- **[链接]** [Apache Kafka 简介](https://kafka.apache.org/)

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持渠道，确保你在使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>