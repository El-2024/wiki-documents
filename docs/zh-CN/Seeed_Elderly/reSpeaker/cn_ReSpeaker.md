---
description: ReSpeaker 介绍
title: ReSpeaker 介绍
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ReSpeaker
last_update:
  date: 1/11/2023
  author: jianjing Huang
---


ReSpeaker 是一个开放的模块化语音接口，用于控制您周围的设备。它可以让您通过语音与家用电器、植物、办公室设备、联网设备或日常生活中的任何其他物品进行交互。ReSpeaker 项目提供了硬件组件和软件库，用于构建支持语音的设备。

![](https://files.seeedstudio.com/wiki/ReSpeaker/img/vui.png)

## 硬件

硬件组件包括用于 Raspberry Pi 的 I2S 麦克风阵列、适用于 Linux/Windows/macOS 的 USB 麦克风阵列，以及独立的 ReSpeaker Core v1.0 和 v2.0。

### 麦克风阵列

|              |  USB 6+1 麦克风阵列  | Raspberry Pi 4 麦克风阵列 | Raspberry Pi 2 麦克风阵列 | USB 4 麦克风阵列 |
|:------------:|:-------------------:|:------------------:|:------------------:|:---------------:|
|  麦克风数量  |          7          |          4         |          2         |        4        |
|     形状     |       圆形          |       方形         |      长方形        |     圆形        |
|   接口类型   |         USB         |         I2S        |         I2S        |       USB       |
|   RGB LED    |          12         |         12         |          3         |        12       |
| 音频输出     |         单声道      |         无         |       立体声       |       单声道    |
|     备注     | 内置算法            |                    |                    |   即将推出      |

### 独立 ReSpeaker Core

|             | ReSpeaker Core v1 (MT7688)  | ReSpeaker Core v2 (RK3229)                    |
|-------------|-----------------------------|-----------------------------------------------|
| CPU         | MT7688 (MIPS24KEc, 580 MHz) | RK3229 (4 ARM Cortex A7 核心, 1.5GHz)         |
| RAM         | 256 MB                      | 1 GB                                          |
| 麦克风数量  | 1                           | 6                                             |
| 形状        | 圆形                        | 六边形                                        |
| 接口类型    | WiFi, USB 设备              | WiFi, 蓝牙, 以太网, HDMI, USB otg/host        |
| 回环        | 无                          | 2 通道                                        |

## 软件

音频处理算法包括 VAD（语音活动检测）、DOA（到达方向）、Beamforming（波束形成）、NS（噪声抑制）、AEC（回声消除）和 KWS（关键词检测），这些算法正在快速发展。

![](https://files.seeedstudio.com/wiki/ReSpeaker/img/mic_array.png)

## 产品列表

---
以下是您可以在 Seeed WiKi 中找到的 ReSpeaker 板卡列表。该列表将不断更新。

- [ReSpeaker 2-Mics Pi HAT](https://wiki.seeedstudio.com/cn/ReSpeaker_2_Mics_Pi_HAT/)
- [ReSpeaker 4-Mic Array for Raspberry Pi](https://wiki.seeedstudio.com/cn/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/)
- [ReSpeaker Core](https://wiki.seeedstudio.com/cn/ReSpeaker_Core/)
- [ReSpeaker Core v2.0](https://wiki.seeedstudio.com/cn/ReSpeaker_Core_v2.0/)
- [ReSpeaker Drive Unit](https://wiki.seeedstudio.com/cn/ReSpeaker_Drive_Unit/)
- [ReSpeaker Mic Array](https://wiki.seeedstudio.com/cn/ReSpeaker_Mic_Array/)
- [ReSpeaker Mic Array v2.0](https://wiki.seeedstudio.com/cn/ReSpeaker_Mic_Array_v2.0/)
- [ReSpeaker 4-Mic Linear Array Kit for Raspberry Pi](https://wiki.seeedstudio.com/cn/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi/)
- [ReSpeaker 6-Mic Circular Array kit for Raspberry Pi](https://wiki.seeedstudio.com/cn/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi/)

## ReSpeaker 项目

请访问 [ReSpeaker.io](https://respeaker.io/) 获取更多信息。
感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>