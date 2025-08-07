---
description: SenseCAP M2 多平台网关 LNS 配置
title: LNS 配置
keywords:
- SenseCAP 网络
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_m2_LNS_config
last_update:
  date: 08/29/2023
  author: Jessie
---



SenseCAP M2 多平台网关内置了 LoRaWAN 网络服务器，基于 Chirpstack，提供了一种快速可靠的解决方案，用于启动 LoRaWAN 网络。


## 网关配置

通过 Web UI 配置网关，请参考 [快速入门](https://files.seeedstudio.com/products/SenseCAP%20M2/Quick%20Start%20for%20SenseCAP%20M2%20Multi-Platfrom%20Gateway%20&%20Sensors.pdf) 登录 Luci。


### 信道计划设置

导航到 `LoRa` > `Channel Plan` 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP3.png" alt="pir" width={800} height="auto" /></p>

选择区域和频率计划。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP4.png" alt="pir" width={800} height="auto" /></p>


设置完成后，点击 `Save&Apply`。

### 本地网络服务器配置

导航到 `LoRa` > `LoRa Network`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP1.png" alt="pir" width={800} height="auto" /></p>

将模式设置为 `Local Network Server`，添加您的 MQTT 信息（Broker Host/Port/User/Password），其他参数可保持默认值。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP2.png" alt="pir" width={800} height="auto" /></p>

点击 `Save&Apply` 应用您的设置。

:::tip 注意
启动过程大约需要 1 分钟，然后您可以访问 GUI 配置。
:::


## ChirpStack GUI 配置

通过 `http://localhost:8080` 登录 ChirpStack GUI。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP.png" alt="pir" width={800} height="auto" /></p>


默认账号和密码为：`admin`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP5.png" alt="pir" width={800} height="auto" /></p>


然后您将看到仪表板页面。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP6.png" alt="pir" width={800} height="auto" /></p>

### 检查区域

导航到 `Network Server` > `Regions`。

应该有一个区域 ID，点击它并确认信息，确保与您在前一步中的设置相同。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP7.png" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP8.png" alt="pir" width={800} height="auto" /></p>

### 添加设备配置文件

导航到 `Tenant` > `Device Profiles`，然后点击 `Add Profile`。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP9.png" alt="pir" width={800} height="auto" /></p>


**MAC 版本**: LoRaWAN 1.0.3

**区域参数版本**: A

**ADR 算法**: 默认 ADR 算法（仅 LoRa）

**预期上行间隔**: 自定义，默认 3600 秒

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP10.png" alt="pir" width={800} height="auto" /></p>



导航到 `Codec`，选择 `JavaScript functions`，复制 [SenseCAP 解码器 for TTN](https://github.com/Seeed-Solution/SenseCAP-Decoder) 并提交。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/decode.png" alt="pir" width={800} height="auto" /></p>

### 添加网关

导航到 `Gateway`，然后点击 `Add Gateway`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP11.png" alt="pir" width={800} height="auto" /></p>


定义名称和网关 ID（您可以点击随机生成 ID），然后提交。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP13.png" alt="pir" width={800} height="auto" /></p>


### 添加设备

导航到 `Tenant` > `Application`，然后点击 `Add Application`。

为您的应用命名并提交。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/add-applications.png" alt="pir" width={800} height="auto" /></p>

导航到您的应用，然后点击 `Add device`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP14.png" alt="pir" width={800} height="auto" /></p>



粘贴您的设备 EUI，并选择我们之前添加的设备配置文件，然后提交。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP15.png" alt="pir" width={800} height="auto" /></p>


粘贴应用密钥并点击提交。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP16.png" alt="pir" width={800} height="auto" /></p>

:::tip
请查看用户指南以正确设置设备，并将平台选择为 `Other Platform`。
:::

### 检查设备状态

检查设备的 `Events`，当设备加入网络时，您将收到加入数据包。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP17.png" alt="pir" width={800} height="auto" /></p>

您还可以检查数据包的详细信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP18.png" alt="pir" width={800} height="auto" /></p>

## 集成

本章节适用于云服务开发，以下指南供参考。

### MQTT 

#### 主题

MQTT 集成公开了所有事件类型，如事件类型文档所述。

默认事件主题为：
```cpp
application/APPLICATION\_ID/device/DEV\_EUI/event/EVENT
```

查看 [事件类型](https://www.chirpstack.io/docs/chirpstack/integrations/events.html) 了解更多详情。

您可以在应用程序标签页找到应用程序 ID：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP19.png" alt="pir" width={800} height="auto" /></p>

- **事件类型**

|up|上行事件|
| - | - |
|status|信号强度和电池状态|
|join|设备加入事件|
|ack|确认下行 (n)ack|
|txack|下行传输确认|
|log|日志（或错误）事件|
|location|位置事件|
|integration|集成事件|

:::info 注意
`+` 表示接收所有消息
:::

**示例**：

* 接收某个网关下所有设备的上行消息：

```cpp
gateway/<GATEWAY\_EUI>/device/+/event/up
```

* 接收应用程序下所有设备的所有消息：

```cpp
application/+/device/+/event/+
```

* 接收所有网关下所有设备的消息：

```cpp
gateway/+/device/+/event/+
```

您可以检查 `gatewayid` 来区分网关。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/gateway-id.png" alt="pir" width={800} height="auto" /></p>

#### 负载

当 object.valid 为 true 时，表示数据分析成功，您可以遍历 object.messages 并提取所需的数据类型。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP20.png" alt="pir" width={800} height="auto" /></p>

1) SenseCAP LoRaWAN S210X 传感器的上行事件负载示例描述：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP21.png" alt="pir" width={800} height="auto" /></p>

- `upload\_battery`: 电池
- `upload\_interval`: 上传间隔，单位：秒
- `upload\_version`: 硬件/固件版本
- `report\_telemetry`: 测量值

‘report\_telemetry’ 消息中的 `measurementId` 请查看 [SenseCAP Measurement ID](https://sensecap-statics.seeed.cn/hardware/lorapp/httpserver/src/constants/sensor-name-lang-dictionary.json) 了解更多详情。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP22.png" alt="pir" width={800} height="auto" /></p>

1) SenseCAP 数据记录仪的上行事件负载示例描述：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP23.png" alt="pir" width={600} height="auto" /></p>

‘report\_telemetry’ 消息中的 `measurementId` 请查看 [SenseCAP Measurement ID](https://sensecap-statics.seeed.cn/hardware/lorapp/httpserver/src/constants/sensor-name-lang-dictionary.json) 了解更多详情。

### HTTP 

点击 HTTP 标签中的 `+` 添加新的 HTTP 集成。

LNS 将以 POST 的形式将消息发送到配置的 URL。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP24.png" alt="pir" width={800} height="auto" /></p>

提交您的 URL 信息。

:::info 注意
仅支持 http，不支持 https。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP25.png" alt="pir" width={800} height="auto" /></p>

HTTP 集成将向配置的事件端点或端点（可以配置多个 URL，用逗号分隔）发送 POST 请求。事件 URL 查询参数指示事件的类型。

HTTP 集成公开了所有事件类型，如 [事件类型](https://www.chirpstack.io/docs/chirpstack/integrations/events.html) 文档所述。

**示例**：

(main.py)

```cpp
from http.server import HTTPServer, BaseHTTPRequestHandler 

from urllib.parse import urlparse, parse\_qs 

from chirpstack\_api import integration 

from google.protobuf.json\_format import Parse 

class Handler(BaseHTTPRequestHandler): 

\# True - JSON 序列化器 

\# False - Protobuf 序列化器（二进制） 

json = False 

def do\_POST(self): 

self.send\_response(200) 

self.end\_headers() 

query\_args = parse\_qs(urlparse(self.path).query) 

content\_len = int(self.headers.get('Content-Length', 0)) 

body = self.rfile.read(content\_len) 

if query\_args["event"][0] == "up": 

self.up(body) 

elif query\_args["event"][0] == "join": 

self.join(body) 

else:

print("事件 %s 的处理程序未实现" % query\_args["event"][0]) 

def up(self, body): 

up = self.unmarshal(body, integration.UplinkEvent()) 

print("从设备 %s 接收到上行消息，负载为: %s" % (up.device\_info.dev\_eui, up.data.hex())) 

def join(self, body): 

join = self.unmarshal(body, integration.JoinEvent()) 

print("设备 %s 加入，DevAddr 为: %s" % (join.device\_info.dev\_eui, join.dev\_addr)) 

def unmarshal(self, body, pl): 

if self.json: 

return Parse(body, pl) 

pl.ParseFromString(body) 

return pl 

httpd = HTTPServer(('', 8090), Handler) 

httpd.serve\_forever() 
```

### 下行

下行消息：

:::info 
建议将下行消息标记为保留，这样命令不会被重复执行。
:::

默认主题为：`application/APPLICATION\_ID/device/DEV\_EUI/command/down`

`command`：请查看 **设备用户手册** 中的下行命令了解更多详情。

|主题|application/APPLICATION\_ID/device/DEV\_EUI/command/down|
| - | :- |
|devEUI|设备 EUI|
|confirmed|true/false（是否必须以确认数据下行发送负载）|
|fPort|使用的 FPort（必须 > 0）|
|data|base64 编码数据（明文，将由 ChirpStack 加密）|

**示例**：

1) 重启 SenseCAP S210x LoRaWAN 传感器：

**主题**：

`application/dbf6\*\*\*\*6c92/device/2CF7F1C2\*\*\*/command/down`
**Json：** 

```cpp
{

"devEui":"2CF7F1C2\*\*\*", 

"confirmed":true, 

"fPort":2, 

"data":"AMgAAAAAACsm" 

} 
```

1) 将 SenseCAP S210x LoRaWAN 传感器的上传间隔设置为 1 分钟：

**主题**：

`application/dbf6\*\*\*\*6c92/device/2CF7F1C2\*\*\*/command/down`

**Json**：
```cpp
{

"devEui":"2CF7F1C2\*\*\*", 

"confirmed":true, 

"fPort":2, 

"data":"AIkAESIBAJBQ

" 
} 
```