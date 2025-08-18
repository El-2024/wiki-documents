---
description: 使用 Wio Tracker 开发套件快速上手 Meshtastic®
title: Meshtastic® 套件快速入门
keywords:
- Meshtastic
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/meshtastic_kit_wio_tracker_1110
last_update:
  date: 2024/6/17
  author: Jessie
---

## 简介

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/mesh-kit.gif" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Kit-for-Meshtastic.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

Wio Tracker 1110 开发板（基于 Nordic nRF52840 用于 BLE，Semtech LR1110 用于 LoRa），[Grove Air530 GPS 模块](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html)，[Grove 0.96" OLED 显示屏](https://www.seeedstudio.com/Grove-OLED-Display-0-96.html) 和对 Meshtastic 固件的原生兼容性，这是一款即插即用的开发套件，帮助您构建低功耗的 Meshtastic 追踪设备。

### 特性

* **简单设置**：只需刷入固件，即可体验 Meshtastic 网络的强大功能。
* **实时定位**：配备 GPS（Air530）模块，支持高精度 GPS 定位。
* **信息显示**：配备 Grove - OLED 显示屏 0.96 英寸屏幕，提供清晰的实时数据可视化。
* **丰富的扩展接口**：兼容 Grove 生态系统，可轻松扩展更多传感器和模块。
* **开源硬件和软件**：支持二次开发和定制，提供丰富的开发资源和 Meshtastic 社区支持。

### 规格

<table>
<tr><th colspan="3"><b>通用</b></th></tr>
<tr><td colspan="1" rowspan="2"><b>电压 - 供电</b></td><td colspan="2">5V (USB 2.0 Type-C)</td></tr>
<tr><td colspan="1">电池接口</td><td colspan="1">3.7V</td></tr>
<tr><td colspan="1" rowspan="3"><b>接口</b></td><td colspan="1">RFIO</td><td colspan="1"><p>GNSS 天线接口* 1</p><p>LoRa 天线接口* 1</p></td></tr>
<tr><td colspan="1">USB Type-C</td><td colspan="1">* 1</td></tr>
<tr><td colspan="1">Grove 接口</td><td colspan="1"><p>ADC* 1 I2C* 1 UART* 1</p><p>数字接口*3</p></td></tr>
<tr><td colspan="1" rowspan="2"><b>按钮</b></td><td colspan="1">USER</td><td colspan="1">可配置按钮</td></tr>
<tr><td colspan="1">RESET</td><td colspan="1">复位</td></tr>
<tr><td colspan="1"><b>外部 FLASH 存储</b></td><td colspan="2">4M</td></tr>
<tr><td colspan="3"><b>LoRa® 和定位（Semtech LR1110）</b></td></tr>
<tr><td colspan="1"><b>LoRaWAN® 协议</b></td><td colspan="2">V1.0.4</td></tr>
<tr><td colspan="1"><b>频率计划</b></td><td colspan="2">863&#126;928MHz</td></tr>
<tr><td colspan="1"><b>灵敏度</b></td><td colspan="2"><p>-125dBm @125K/SF7</p><p>-141dBm @125K/SF12</p></td></tr>
<tr><td colspan="1"><b>输出功率</b></td><td colspan="2">最大 20dBm @LoRa®</td></tr>
<tr><td colspan="1"><b>定位技术</b></td><td colspan="2">GNSS(GPS/北斗)，WiFi 嗅探</td></tr>
<tr><td colspan="1"><b>范围</b></td><td colspan="2">2&#126;10km（取决于天线和环境）</td></tr>
<tr><td colspan="3"><b>蓝牙（Nordic nRF52840）</b></td></tr>
<tr><td colspan="1"><b>蓝牙</b></td><td colspan="2">蓝牙 5.3</td></tr>
<tr><td colspan="1"><b>Flash</b></td><td colspan="2">1MB</td></tr>
<tr><td colspan="1"><b>RAM</b></td><td colspan="2">256KB</td></tr>
<tr><td colspan="1"><b>协议</b></td><td colspan="2">蓝牙 LE，蓝牙 Mesh，Thread，Zigbee，802.15.4，ANT 和 2.4 GHz 专有协议栈</td></tr>
<tr><td colspan="1"><b>输出功率</b></td><td colspan="2">最大 6dBm @蓝牙</td></tr>
<tr><td colspan="3"><b>板载传感器 -- 温湿度传感器 (SHT41)</b></td></tr>
<tr><td colspan="1"></td><td colspan="1"><b>范围</b></td><td colspan="1"><b>精度</b></td></tr>
<tr><td colspan="1"><b>温度</b></td><td colspan="1">-40&#126;85°C</td><td colspan="1">± 0.2°C</td></tr>
<tr><td colspan="1"><b>湿度</b></td><td colspan="1">0&#126;100%RH</td><td colspan="1">±1.8%RH</td></tr>
<tr><td colspan="3"><b>板载传感器 -- 三轴加速度计（未使用）</b></td></tr>
<tr><td colspan="1"><b>范围</b></td><td colspan="2">±2g, 4g, 8g, 16g</td></tr>
<tr><td colspan="1"><b>带宽</b></td><td colspan="2">0.5Hz &#126; 625Hz</td></tr>
<tr><td colspan="1"><b>灵敏度 (LSB/g)</b></td><td colspan="2">1000 (±2g) &#126; 83 (±16g)</td></tr>
</table>

**Grove - OLED 显示屏 0.96 英寸**

|**供电电压 (VCC)**|3.3 / 5 V|
| :- | :- |
|**驱动 IC**|SSD1308Z|
|**显示颜色**|白色|
|**点阵**|128×64|
|**面板尺寸**|26.7(W)×19.26(H) mm|
|**活动区域**|21.74(W)×11.175(H) mm|
|**点间距**|0.17(W)×0.175(H) mm|
|**点大小**|0.15(W)×0.15(H) mm|
|**宽工作温度范围**|-20&#126;70 ℃|

## 入门指南

### 硬件连接

将 `Grove-GPS 模块` 连接到 `UART` 端口，将 `Grove-OLED 显示屏` 连接到 `I2C` 端口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/mesh-grove.png" alt="pir" width={800} height="auto" /></p>

打开电源。

### 配置

#### 设备连接

根据不同的连接类型，找到最适合您的连接类型的客户端。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS 应用">

* 下载 `Meshtastic` 应用。<br/>

* 在蓝牙面板中选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

* 显示屏将显示设备名称和 PIN 码。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pin-code.png" alt="pir" width={400} height="auto" /></p>

* 输入 PIN 码，然后点击 `Pair` 配对设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android 应用">

* 下载 `Meshtastic` 应用。<br/>

* 点击 `+` 并选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

* 显示屏将显示设备名称和 PIN 码。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pin-code.png" alt="pir" width={400} height="auto" /></p>

* 输入 PIN 码，然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>

<TabItem value="web" label="Web 客户端">

打开 [Web 客户端](https://client.meshtastic.org/)，点击 `New Connection`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-new.png" alt="pir" width={600} height="auto" /></p>

* **通过蓝牙连接**

  启用电脑的蓝牙功能，选择 `Bluetooth` 选项卡连接新设备。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/ble-new.png" alt="pir" width={600} height="auto" /></p>

  选择设备并输入显示屏上的 PIN 码以连接设备。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-ble-pair.png" alt="pir" width={600} height="auto" /></p>

* **通过串口连接**

  将开发板连接到电脑，选择 `Serial` 选项卡连接新设备。

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-serial-new.png" alt="pir" width={600} height="auto" /></p>

  您可以通过以下命令检查端口：
  ```
  ls /dev/cu.*
  ```
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-serial-connect.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="cli" label="CLI">

该库提供了一个命令行界面（CLI），用于管理 Meshtastic 节点的用户设置，并提供了一个简单的 API，用于通过网状无线电发送和接收消息。

</TabItem>
</Tabs>

#### 参数配置

为了开始通过网状网络通信，您必须设置您的区域。此设置控制设备使用的频率范围，应根据您的区域位置进行设置。

<Tabs>
<TabItem value="ios" label="IOS 应用">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android 应用">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
<TabItem value="web" label="Web 客户端">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/web-lora-config.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="cli" label="CLI">

运行以下命令，将 `REGION-CODE` 替换为根据您的区域位置列出的区域代码。

```
meshtastic --set lora.region <REGION-CODE>
```

例如：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/cli-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

**区域列表**

请参考 [按国家划分的 LoRa 区域](https://meshtastic.org/docs/configuration/region-by-country/) 以获取更全面的列表。

|**区域代码**|**描述**|**频率范围 (MHz)**|**占空比 (%)**|**功率限制 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未设置|N/A|N/A|N/A|
|US|美国|902\.0 - 928.0|100|30|
|EU\_433|欧盟 433MHz|433\.0 - 434.0|10|12|
|EU\_868|欧盟 868MHz|869\.4 - 869.65|10|27|
|CN|中国|470\.0 - 510.0|100|19|
|JP|日本|920\.8 - 927.8|100|16|
|ANZ|澳大利亚和新西兰|915\.0 - 928.0|100|30|
|KR|韩国|920\.0 - 923.0|100||
|TW|台湾|920\.0 - 925.0|100|27|
|RU|俄罗斯|868\.7 - 869.2|100|20|
|IN|印度|865\.0 - 867.0|100|30|
|NZ\_865|新西兰 865MHz|864\.0 - 868.0|100|36|
|TH|泰国|920\.0 - 925.0|100|16|
|UA\_433|乌克兰 433MHz|433\.0 - 434.7|10|10|
|UA\_868|乌克兰 868MHz|868\.0 - 868.6|1|14|
|MY\_433|马来西亚 433MHz|433\.0 - 435.0|100|20|
|MY\_919|马来西亚 919MHz|919\.0 - 924.0|100|27|
|SG\_923|新加坡 923MHz|917\.0 - 925.0|100|20|
|LORA\_24|全球 2\.4 GHz 频段|2400\.0 - 2483.5|100|10|

:::info
**EU_433** 和 **EU_868** 必须遵守每小时 10% 的占空比限制，该限制按滚动的 1 小时周期每分钟计算。如果达到限制，您的设备将停止传输，直到允许再次传输。
:::

现在您已经在设备上设置了 LoRa 区域，您可以继续配置任何[附加设置](https://meshtastic.org/docs/configuration/)以满足您的需求。

## 资源

[Wio Tracker 1110 开发板 v1.0 电路图](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%201110%20v1.0_SCH_PDF_20230822.pdf)

[Meshtastic 文档](https://meshtastic.org/docs/introduction/)

[Github-Meshtastic 固件](https://github.com/meshtastic/firmware/blob/master/boards/wio-tracker-wm1110.json)

[外壳文件（3D打印）](https://files.seeedstudio.com/products/E24070201/wio%20tracker%20723.stp)

[外壳文件（亚克力）](https://files.seeedstudio.com/products/114993370/%E4%BA%9A%E5%85%8B%E5%8A%9B%E5%A4%96%E5%A3%B3%E5%9B%BE%E7%BA%B8.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>