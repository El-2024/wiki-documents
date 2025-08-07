---
description: 配置 Wio Tracker 1110 的参数
title: 参数配置
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/configure_param_for_wio_tracker
sidebar_position: 9
sidebar_class_name: hidden
last_update:
  date: 2023/9/14
  author: Jessie
---



在开始之前，请先检查 [设置您的工具链](https://wiki.seeedstudio.com/cn/setup_toolchain_for_wio_tracker)。

### 区域配置

出厂固件的默认区域为 EU868。为了满足不同区域的频率要求，可以按照以下步骤更改区域。



替换 LoRaWAN 示例中的 'Region' 部分。

```cpp
REGION = SMTC_MODEM_REGION_'Region'
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/set-region.png" alt="pir" width={800} height="auto" /></p>

然后点击 `Upload` 上传程序。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/program.png" alt="pir" width={800} height="auto" /></p>

您还可以使用右上角的 `Serial Monitor` 按钮检查日志。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/port-monitor.png" alt="pir" width={800} height="auto" /></p>




### 三元组信息配置


Wio Tracker 1110 开发板允许用户设置 DevEUI、AppEUI 和 AppKey，这是在注册到其他网络服务器时所需的。

打开 `LoRaWAN/TTN 示例`，定义三元组信息并点击 `Upload`。


```cpp
static const uint8_t DEV_EUI[8]  = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
static const uint8_t JOIN_EUI[8] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
static const uint8_t APP_KEY[16] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/change-3-codes.png" alt="pir" width={800} height="auto" /></p>


<details>
<summary>信息</summary>

或者，您可以直接获取由网络服务器生成的三元组信息，然后将其填写到 `Constants` 部分并运行在您的开发板上。

示例：来自 TTS。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device3.png" alt="pir" width={800} height="auto" /></p>

</details>