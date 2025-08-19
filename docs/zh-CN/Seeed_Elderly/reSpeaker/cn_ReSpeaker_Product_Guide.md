---
description: ReSpeaker 产品指南
title: ReSpeaker 产品指南
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ReSpeaker_Product_Guide
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

# **ReSpeaker 产品指南**

## 开放的开发者语音生态系统

[![所有 ReSpeaker 开发板](https://files.seeedstudio.com/wiki/ReSpeakerSolutions/img/FullReSpeakerLine.png)](https://www.seeedstudio.com/series/Respeaker-10.html)

## **选择适合您的 ReSpeaker**

您可能已经通过我们的 [解决方案页面](https://wiki.seeedstudio.com/cn/ReSpeaker_Solutions/) 或 [介绍页面](https://wiki.seeedstudio.com/cn/ReSpeaker/) 对 ReSpeaker 系列的用途和功能有所了解，但哪些产品真正适合您的需求呢？别担心，这个页面将帮助您找到答案。

## **三大类别**

目前，ReSpeaker 系列主要分为三种开发板类别。虽然这三种类别都旨在实现语音接口，但它们在项目中的集成方式各不相同。

- SBC 解决方案
- 麦克风阵列解决方案
- 树莓派麦克风阵列解决方案

### **SBC 解决方案**

![SBC 解决方案](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/SBC_Solution.png)

对于完全围绕语音交互的项目，ReSpeaker Core 系列是理想选择。作为单板计算机（SBC），它不仅能够监听语音，执行基于软件的 DSP 前端音频处理，还能控制项目的整体流程。从硬件操作到运行高级用户应用代码，ReSpeaker Core 系列旨在成为项目的核心。

建议对象：开发者、企业

**[ReSpeaker Core v2.0](https://wiki.seeedstudio.com/cn/ReSpeaker_Core_v2.0/)** 提供了强大的处理能力以及集成的 6 麦克风圆形阵列。开发板中央是核心模块，包含 SoC、内存（RAM）和 PMU。板的外部边缘是外设，包括连接器、WiFi 模块、LED 和麦克风阵列。这种设计便于定制，使 ReSpeaker Core v2.0 成为项目的优秀一体化解决方案，降低项目规模化时的成本。

### **麦克风阵列解决方案**

![麦克风阵列解决方案](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/Mic_Array_Solution.png)

ReSpeaker 麦克风阵列系列使用硬件 DSP 进行前端加速，为集成系统返回清晰的语音。这使其成为现有项目中需要语音接口的理想选择。

建议对象：开发者、专业创客、企业

**[ReSpeaker Mic Array v2.0](https://wiki.seeedstudio.com/cn/ReSpeaker_Mic_Array_v2.0/)** 是一个由 XMOS XVF3000 驱动的圆形麦克风阵列。它具有硬件支持的前端音频处理功能，并兼容大多数常见操作系统，包括 Windows、macOS 和许多 Linux 发行版。它还支持音频输出，当启用时可以实现回声消除（AEC）。麦克风配置可以进行调整和定制。

### **树莓派麦克风阵列解决方案**

![树莓派麦克风阵列解决方案](https://files.seeedstudio.com/wiki/ReSpeakerProductGuide/img/Raspberry_Pi_Mic_Array_Solutions.png)

我们为树莓派开发了多个 ReSpeaker 扩展板。对于希望尝试简单语音命令、创建自己的 Amazon Echo 或 Google Home，或在树莓派上开发的用户来说，树莓派麦克风阵列是一个绝佳选择。与其他 ReSpeaker 产品类似，这些阵列也可以进行定制。

建议对象：创客、专业创客、开发者

**[ReSpeaker 4-Mic Linear Array Kit](https://wiki.seeedstudio.com/cn/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi/)** 非常适合固定在墙边的项目。该套件能够实现 180° 语音检测，可以检测相对位置，或专注于特定方向，同时忽略其他语音输入。阵列配备了灵活的电缆，可以以多种方向放置，为外壳设计提供更多选择。与其他开发板不同，该阵列仅包含一个蓝色 LED。

主要特点：

- 4 麦克风线性阵列
- 带状电缆，便于灵活放置
- 1 个蓝色 LED
- 2 个 Grove 接口（I2C 和数字）
- 1 个 3.5mm 音频插孔（立体声）
- 1 个 JST 扬声器接口（单声道）

**[ReSpeaker 6-Mic Circular Array Kit](https://wiki.seeedstudio.com/cn/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi/)** 非常适合放置在人群中央的项目。该套件能够实现 360° 语音检测，可以检测相对位置，或专注于特定方向，同时忽略其他语音输入。阵列配备了灵活的电缆，可以以多种方向放置，为外壳设计提供更多选择。

主要特点：

- 6 麦克风圆形阵列
- 带状电缆，便于灵活放置
- 12 个 RGB LED
- 2 个 Grove 接口（I2C 和数字）
- 1 个 3.5mm 音频插孔（立体声）
- 1 个 JST 扬声器接口（单声道）

**[ReSpeaker 4-Mic Array](https://wiki.seeedstudio.com/cn/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/)**（圆形）能够实现 360° 语音检测。然而，与其他开发板不同的是，它不具备音频输出功能，需要树莓派单独支持所有音频输出。该开发板配备 4 个麦克风、12 个 RGB LED 和 2 个 Grove 接口。

主要特点：

- 4 麦克风圆形阵列
- 12 个 RGB LED
- 2 个 Grove 接口（I2C 和 GPIO）

:::note
树莓派 ReSpeaker 4-Mic Array 没有音频输出接口，仅用于语音捕捉。您可以使用树莓派上的 [耳机插孔](https://www.raspberrypi.org/documentation/configuration/audio-config.md) 进行音频输出。如果您的项目需要更高质量的音频输出，请选择其他产品。
:::

**[ReSpeaker 2-Mic Pi HAT](https://wiki.seeedstudio.com/cn/ReSpeaker_2_Mics_Pi_HAT/)** 是一个非常适合入门级的选择。需要注意的是，与此类别中的其他产品不同，2-Mic HAT 无法检测说话者的方向，它仅设计用于远场语音输入。

主要特点：

- 双麦克风
- 带状电缆，便于灵活放置
- 3 个 RGB LED
- 2 个 Grove 接口（I2C 和数字）
- 1 个 3.5mm 音频插孔（立体声）
- 1 个 JST 扬声器接口（单声道）

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>