---
description: Things Indoor Gateway
title: Things Indoor Gateway
keywords:
- Sorftware Mender
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/The-Things-Indoor-Gateway
last_update:
  date: 2/1/2023
  author: jianjing Huang
---



![TTIG](https://files.seeedstudio.com/products/113990896/wiki/113990894_All-22.png)


<div style={{textAlign: 'center'}}>
    <a href="https://www.seeedstudio.com/The-Things-Indoor-Gateway-US-p-4710.html">
            <strong><span style={{color: '#FFFFFF', fontSize: '1.2em'}}> 立即购买 🖱️</span></strong>
    </a>
</div>

## 产品介绍

[Things Indoor Gateway](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/) 是一款 [The Things Network](https://www.thethingsnetwork.org/) 产品，具有高可靠性、高性能和成本效益。它是一款基于 SX1308 的 8 通道 LoRaWAN 网关，内置 ESP8266 WiFi 连接功能。该网关提供多个版本和多种电源插座，满足需要动态覆盖的广泛应用需求。作为由 The Things Network 设计的物联网网关，它享有 TTN 为其客户提供的所有卓越功能。当然，这款网关能够连接到安全且协作的物联网网络，该网络覆盖全球多个国家，为数百万人提供服务。许多人在社区中使用的工具是 [TTN Mapper](https://ttnmapper.org/)。因此，您可以通过加载到 [The Network Console](https://console.thethingsnetwork.org/) 来使用此网关成为该网络的贡献者之一，或者享受由其他 TTN 网关构建的公共社区网络！

Things Indoor Gateway 支持 LoRaWAN 1.0.3，因此与其他 LoRaWAN 传感器兼容。Seeed Studio 提供许多专注于各种类型无线环境传感应用的传感器。如果您还需要一些用于户外场景的传感器，例如测量二氧化碳、土壤湿度和温度，[SenseCAP 传感器](https://www.seeedstudio.com/SenseCAP-c-1339.html) 是您的最佳选择。

通过使用 Things Indoor LoRaWAN WiFi Gateway、The Things Network Console 和 SenseCAP LoRaWAN Sensors，您可以轻松在家中、花园、办公室、供应链和工厂中构建自己的物联网系统。按照下面提供的[逐步安装说明](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/Getting_Started_TTIG.pdf)，您可以在不到 5 分钟内设置自己的 LoRaWAN 网关，开启您的物联网之旅！

![spec](https://files.seeedstudio.com/products/113990896/wiki/TTN%20gateway%20specification%20picture_page-0001.jpg)

## 特点

* **安装简便**：通过 ESP8266 支持 802.11 b/g/n WiFi 回程；简单设置，5 分钟内完成
* **全球适用**：支持 EU868、US915 和 AU915；支持 LBT（监听后发）
* **先进软件**：支持最先进的 BasicStation 协议
* **高可靠性**：通过 CE/FCC/IC/RCM/WPC/RoHS 认证
* **便捷设计**：紧凑设计便于携带；支持多种电源选项：墙插和 USB Type-C，900mA 工作。内置全向天线，适合家庭使用
* **强大性能**：基于 SX1308 的 8 通道 LoRaWAN 室内网关

## 规格

### LoRa

| 参数 | 值 |
|------|----|
| 芯片组 | Semtech SX1308 |
| 通道 | 8 通道 |
| 接收灵敏度 | -140/-135 dBm (EU/US) |
| 发射功率 | 高达 +27 dBM |
| LoRaWAN® 规范版本 | V.1.0.3 |
| 数据包转发器 | 基础站协议 |

### Wi-Fi

| 参数 | 值 |
|------|----|
| SoC | ESP9266 |
| 模式 | 802.11 b/g/n，客户端模式 |
| 发射功率 | +20 dBm |
| 频段 | 2.4 GHz |
| WAN/LAN 端口 | - |
| USB 端口 | USB Type-C (900 mA) |
| 安全性 | WPA/WPA2 |
| 尺寸 | 90*80*40 mm |
| 工作温度 | 0-40℃ |
| 认证 | CE/FC/IC/RCM/WPC/RoHS |

### 其他规格

| 参数 | 值 |
|------|----|
| 接口 | LED 指示灯 |
| 天线类型 | 集成式 |
| 频段 | AU915 |

## 资源

* [开始使用 The Things Indoor Gateway](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/Getting_Started_TTIG.pdf)
* [The Things Indoor Gateway 数据表](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/TTIG_datasheet.pdf)
* [AWS 入门指南](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/Getting_Started_TTIG_AWS.pdf)

## The Things Indoor Gateway 与 SenseCAP 的入门指南

![组合图](https://files.seeedstudio.com/products/113990896/wiki/connection%20diagram.png)

注意：如果您不了解 SenseCAP，这里有一个简短介绍：
> SenseCAP 是 Seeed 工业物联网 (IIoT) 产品系列的首批推出产品之一，专注于无线环境传感应用：智能农业、精准农业和智慧城市等。它由硬件产品（传感器、数据记录器和网关等）、软件服务（SenseCAP 门户、移动应用、开放仪表板）以及设备和数据管理的 API 组成。SenseCAP 支持多种通信协议，例如 LoRa、2G、4G、NB-IoT 等。

如需了解更多，请点击 [SenseCAP 介绍](https://wiki.seeedstudio.com/cn/Industrial-IoT-SenseCAP-Introduction/)

### 第一步：激活您的 TTIG 网关

* 按住复位按钮（网关背面 USB-C 端口旁的小按钮）5 秒，直到 LED 快速闪烁绿色和红色几次。
* 按住 SETUP 按钮（网关顶部 LED 旁的按钮）10 秒，直到 LED 快速闪烁红色。
* 网关现在会暴露一个 WiFi AP，其 SSID 为 MINIHUB-xxxxxx，其中 xxxxxx 是网关 ID 的最后 6 位数字。
* 此网络的密码打印在设备背面的 WiFi PW 下方。
* 然后，在浏览器中访问 192.168.4.1 进入 WiFi 配置页面。

![192](https://files.seeedstudio.com/products/113990896/wiki/192.168.4.1.png)

* 选择 WiFi 网络并输入密码（如果是封闭网络）。
* 选择“保存并重启”选项。
* 如果您的配置正确：
  * 网关会闪烁绿色几秒钟，表示正在连接到该网络。
  * 然后会闪烁绿色和红色几秒钟，表示正在连接到 CUPS 端点并获取连接到 LNS 流量端点所需的信息。
* 如果配置成功，LED 会变为绿色常亮，表示网关已连接到 LoRaWAN 网络并准备处理数据包。

### 第二步：在 TTN 控制台上注册网关

登录 TTN 网站：[https://www.thethingsnetwork.org](https://www.thethingsnetwork.org)，创建您的账户，然后访问“控制台”，首先点击“网关”。

![2.1](https://files.seeedstudio.com/products/113990896/wiki/s2.1.png)

注册您的网关：

![2.2](https://files.seeedstudio.com/products/113990896/wiki/s2.2.png)

1. 网关 EUI：显示在“添加网络”页面 192.168.4.1 上。

![2.3](https://files.seeedstudio.com/products/113990896/wiki/s2.3.png)

2. 频率计划：查看网关上的标签。
3. 路由器：选择适合您的路由器。
4. 注册：网关状态显示已连接，表示注册成功。

![2.4](https://files.seeedstudio.com/products/113990896/wiki/s2.4.png)

### 第三步：在 TTN 控制台上添加 SenseCAP 传感器

#### 1. 获取设备 EUI、设备代码、App Key 和 App EUI

* 设备 EUI 和设备代码位于 SenseCAP 产品标签上。

![3.1](https://files.seeedstudio.com/products/113990896/wiki/s3.1.png)

* SenseCAP 传感器设备的 AppEUI 和 AppKey 已由 Seeed 写入设备。使用 HTTP API 检索 App EUI 和 App Key。您可以使用浏览器发出 HTTP GET 请求。

![3.2](https://files.seeedstudio.com/products/113990896/wiki/s3.2.png)

在 API 中，将设备 EUI 和设备代码替换为您自己的设备 EUI 和设备代码。您将在网页上获得以下响应，显示您的 App EUI 和 App Key：

![3.3](https://files.seeedstudio.com/products/113990896/wiki/s3.3.png)

#### 2. 添加应用程序和 AppEUI

![3.4](https://files.seeedstudio.com/products/113990896/wiki/s2.1.png)

1. 进入“添加应用程序”页面。

![3.5](https://files.seeedstudio.com/products/113990896/wiki/s3.5.png)

* 应用程序 ID：输入一个唯一名称。
* 描述：输入描述。
* 处理器注册：选择与网关路由器相同的处理器。
* 选择“添加应用程序”继续。

![3.6](https://files.seeedstudio.com/products/113990896/wiki/s3.6.png)

![3.7](https://files.seeedstudio.com/products/113990896/wiki/s3.7.png)

* 应用程序 → 应用程序 EUIS → 管理 EUIs。
* 添加 EUI。
* 输入您在上一步（步骤 3.1）中获得的节点 AppEUI。
* 添加 EUI。

![3.8](https://files.seeedstudio.com/products/113990896/wiki/s3.8.png)

2. 在 TTN 控制台上将传感器节点添加为设备

* 应用程序 → 设备 → 注册设备。

![3.9](https://files.seeedstudio.com/products/113990896/wiki/s3.9.png)

![3.10](https://files.seeedstudio.com/products/113990896/wiki/s3.10.png)

* 设备 ID：输入一个唯一名称。
* 设备 EUI：输入您在上一步（步骤 3.1）中获得的节点设备 EUI。
* App Key：输入您在上一步中获得的节点 App Key。
* App EUI：选择节点的 App EUI。
* 注册。

### 第四步：激活您的 SenseCAP 传感器

#### 开机

电源开关隐藏在设备内部。在安装传感器之前，请打开设备并开启电源。以下是逐步操作说明：

* 逆时针旋转传感器探头的盖子以松开它。使用白色的开盖器可以使这个过程更容易。以下图片以 TH 传感器为例，适用于所有其他 SenseCAP 传感器。

![4.1](https://files.seeedstudio.com/products/113990896/wiki/s4.1.png)

* 打开设备后，将开关拨到“ON”位置，右下角的 LED 灯会闪烁，表示电源已开启。等待大约 10 秒钟，然后 LED 会快速闪烁 2 秒钟，表示设备已连接到网络。

![4.2](https://files.seeedstudio.com/products/113990896/wiki/s4.2.png)

* 设备连接到网络后，将传感器探头顺时针旋转连接回传感器节点控制器。请注意，两个部分的标签需要对齐，如下图所示，否则两部分无法正确连接，设备将无法正常工作，数据也无法上传。

* 在 TTN 控制台上检查传感器节点的连接状态：当状态变为绿色时，表示连接成功。

![4.3](https://files.seeedstudio.com/products/113990896/wiki/s4.3.png)

### 第五步：数据检查

在数据页面上，数据包会被上传。有关有效载荷的格式，请参考解码部分。以下展示了 SenseCAP LoRaWAN 土壤湿度和温度传感器以及 SenseCAP LoRaWAN CO2 传感器成功获取的数据：

![4.4](https://files.seeedstudio.com/products/113990896/wiki/soil%20data%20board.png)

![4.5](https://files.seeedstudio.com/products/113990896/wiki/co2%20data%20board.png)