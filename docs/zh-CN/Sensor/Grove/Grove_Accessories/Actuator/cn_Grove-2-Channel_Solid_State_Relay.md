---
title: Grove - 2通道固态继电器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-2-Channel_Solid_State_Relay/
slug: /cn/Grove-2-Channel_Solid_State_Relay
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/mian.jpg)

与使用线圈的机械继电器不同，封装的固态继电器（SSR）使用电力半导体器件，例如晶闸管和晶体管，这提供了比机械继电器更快的开关速度。**Grove - 2通道固态继电器**基于高质量的**G3MC202P**模块，可让您使用5VDC控制最大240VAC。该模块具有两个通道，您可以分别控制它们。借助Grove接口，使用固态继电器与Arduino变得非常方便。

根据不同的应用场景，我们为您准备了一系列固态继电器。

[Grove - 固态继电器 V2](https://wiki.seeedstudio.com/cn/Grove-Solid_State_Relay_V2)

Grove - 2通道固态继电器

[Grove - 4通道固态继电器](https://wiki.seeedstudio.com/cn/Grove-4-Channel_Solid_State_Relay)

[Grove - 8通道固态继电器](https://wiki.seeedstudio.com/cn/Grove-8-Channel_Solid_State_Relay)

<p style={{}}><a href="https://www.seeedstudio.com/Grove-2-Channel-Solid-State-Relay-p-3129.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

| 产品版本  | 变更                                                                                               | 发布日期 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 2通道固态继电器 | 初始版本                                                                                               | 2018年8月      |

## 特性

- 相较于机械继电器的优势：

  - 固态继电器相比机械继电器具有更快的开关速度，并且没有物理接触点会磨损
  - 完全静音操作
  - 无物理接触点意味着无火花，可用于爆炸性环境中，在开关过程中不会产生火花是至关重要的
  - 即使多次激活，寿命更长，因为没有活动部件磨损，也没有接触点产生凹坑或积碳
  - 紧凑、薄型的单块结构固态继电器，集成了PCB、端子和散热片，比机械继电器小得多，并且可以集成更多通道

- 劣势：

  - 闭合时，较高的电阻（产生热量），并增加电噪声
  - 开启时，较低的电阻和反向漏电流
  - 仅适用于交流负载

## 规格

|项目|值|
|---|---|
|工作输入电压|4~6V|
|额定输入电压|5V|
|额定负载电压|100至240 VAC 50/60 Hz|
|负载电压范围|75至264 VAC 50/60 Hz|
|负载电流|每个开关0.1至2A|
|漏电流|最大1.5mA（在200VAC时）|
|绝缘电阻|最小1,000 MΩ（在500VDC时）|
|操作时间|负载电源周期的一半 + 最大1ms|
|释放时间|负载电源周期的一半 + 最大1ms|
|存储温度|-30°C至100°C（无结冰或凝结）|
|工作温度|-30°C至80°C（无结冰或凝结）|
|工作湿度|45%至85%RH|
|输入接口|数字|
|输出端口|两个DIP蓝色2针母头|
|零交叉|支持|
|认证|UL / CSA|
|尺寸|长：40mm 宽：40mm 高：23mm|
|重量|16.0g|
|包装尺寸|长：115mm 宽：65mm 高：50mm|
|毛重|138g|

:::note
请注意**漏电流**，1.5mA足以驱动低功率LED，因此当继电器关闭时，LED可能仍会发出微弱的光。
:::

## 应用场景

- 需要低延迟切换的操作，例如舞台灯光控制
- 需要高稳定性的设备，例如医疗设备、交通信号灯
- 需要防爆、防腐、防潮的场景，例如煤矿、化工行业

## 硬件概述

### 引脚图

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/pin_map.jpg)

### 原理图

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/schematic_.jpg)

**K1** 是继电器模块，当在 **INT+** 和 **INT-** 之间施加 5V 电压时，继电器将被打开。此时 **LOAD1** 将连接到 **LOAD2**。我们使用一个 NPN 晶体管 **Q2**（BC817-40）来控制 **INT+** 和 **INT-** 之间的电压。

**CTR1** 是来自 Arduino 或其他板子的控制信号。它通过 10k 电阻 R7 下拉，如果没有信号，**Q2** 的“栅极”（端口 1）将为 0V，**Q2** 将关闭，因此 **K1** 将关闭。如果 **CTR1** 变为 5V，则 **Q2** 将打开。**K1** 的 **INT-** 将连接到系统的 GND，对于 **K1** 来说，**INT+** 和 **INT-** 之间将有 5V，因此 **K1** 将打开，**LOAD1** 将连接到 **LOAD2**。

:::note
在本节中我们仅展示部分原理图，完整文档请参考 [资源](/#resources)
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg)  |

:::caution
上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - 2通道固态继电器 |
|----------------|-------------|-----------------------------|
|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-2-Channel-Solid-State-Relay-p-3129.html" target="_blank">立即购买</a>|

:::note
    **1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

    **2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了 Grove 数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。

    **3** 您需要自行准备两个风扇。
:::

- **步骤 1.** 将 Grove - 2通道固态继电器连接到 Grove-Base Shield 的 **D2** 端口。

- **步骤 2.** 剪断一根电线，一端连接到开关1的 **LOAD1**，另一端连接到开关1的 **LOAD2**。

- **步骤 3.** 再剪断一根电线，一端连接到开关2的 **LOAD1**，另一端连接到开关2的 **LOAD2**。

- **步骤 4.** 将开关1的 **LOAD1** 连接到电源，将开关1的 **LOAD2** 连接到风扇1。

- **步骤 5.** 将开关2的 **LOAD1** 连接到电源，将开关2的 **LOAD2** 连接到风扇2。

- **步骤 6.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 7.** 使用 Micro-USB 数据线将 Seeeduino 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/img/connect.jpg)

#### 软件

:::note
        如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 打开 Arduino IDE 并创建一个新文件，您可以点击代码块右上角的图标 ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) 将以下代码复制到 Arduino IDE 的新草稿中。

```cpp
#include <Arduino.h>
uint8_t channel1 = 2;
uint8_t channel2 = 3;
void setup() {
  pinMode(channel1, OUTPUT);
  pinMode(channel2, OUTPUT);
}
void loop() {
  digitalWrite(channel1, HIGH);
  digitalWrite(channel2, LOW);
  delay(2000);
  digitalWrite(channel1, LOW);
  digitalWrite(channel2, HIGH);
  delay(2000);
}
```

- **步骤 2.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

:::tip
    您将看到两个板载 LED 交替亮灭，两个风扇交替打开和关闭。
:::

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/res/Grove-2-Channel_Solid_State_Relay.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - 2通道固态继电器 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-2-Channel_Solid_State_Relay/res/Grove-2-Channel_Solid_State_Relay.zip)
- **[PDF]** [G3MC202P 数据手册](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay_V2/res/G3MC202p.pdf)

## 项目

这是该产品的介绍视频，包含简单的演示，您可以尝试观看。

<iframe width="560" height="315" src="https://www.youtube.com/embed/5uBLf_a0DNc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>