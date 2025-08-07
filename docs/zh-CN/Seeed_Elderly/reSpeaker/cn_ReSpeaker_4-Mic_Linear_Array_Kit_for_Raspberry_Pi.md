---
description: ReSpeaker 4-Mic Linear Array Kit
title: ReSpeaker 4-Mic Linear Array Kit
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![输入图片描述](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/main_wiki.jpg)

Seeed 的 ReSpeaker 4-Mic Linear Array Kit 是一个扩展板，也称为 HAT，专为 Raspberry Pi 设计。它是一个线性麦克风阵列套件，配备四个麦克风，专为 AI 和语音应用设计。这意味着您可以使用 Raspberry Pi 构建更强大、更灵活的语音产品，并集成 Amazon Alexa 语音服务、Google Assistant 等。

ReSpeaker 4-Mic Linear Array Kit for Raspberry Pi 包括两个板，一个是语音配件 HAT，另一个是四麦克风线性阵列。

<iframe width="800" height="450" src="https://www.youtube.com/embed/NxZx9nz67Bc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

ReSpeaker 4-Mic Linear Array Kit for Raspberry Pi 在 Raspberry Pi OS 中支持 8 个输入和 8 个输出通道。前 6 个输入通道用于麦克风录音（仅前 4 个输入通道有效捕获数据），其余 2 个输入通道为回放的回声通道。前 2 个输出通道用于声音输出，其余 6 个输出通道为虚拟通道。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-4-Mic-Linear-Array-Kit-p-3066.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 2 个 ADC 芯片和 1 个 DAC 芯片
- 8 个输入和 8 个输出通道
- 四麦克风阵列
- 支持 Grove
- 兼容 Raspberry Pi（支持 Raspberry Pi Zero 和 Zero W、Raspberry Pi B+、Raspberry Pi 2 B、Raspberry Pi 3 B、Raspberry Pi 3 B+、Raspberry Pi 3 A+ 和 Raspberry Pi 4）
- 耳机和扬声器语音输出

## 规格

- 2 x X-Power AC108 ADC
- 4 x 高性能模拟麦克风
- 1 x X-Power AC101 DAC
- 语音输出：
  - 3.5mm 耳机音频插孔
  - 扬声器插孔
- 兼容 Raspberry Pi 40 针引脚
- 麦克风：MSM321A3729H9BP
- 灵敏度：-22 dBFS（全向）
- 信噪比（SNR）：59 dB
- 最大采样率：48Khz

## 应用场景

- 智能音箱
- 智能语音助手系统
- 语音录音设备
- 语音会议系统
- 会议通信设备
- 语音交互机器人
- 汽车语音助手
- 其他需要语音命令的场景

## 硬件概览

**系统图**

<a href="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc-correct.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc-correct.png"/></a>

**接口**

![](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/Hardware.jpg)

:::note
连接后，请务必使用万用表检查电路的导通情况是否与上图所示一致。
:::

## 装配图  

![](https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/ab.png)

## 入门指南

**连接 ReSpeaker 4-Mic 阵列到 Raspberry Pi**

**步骤 1.**  使用排线将 *ReSpeaker Voice Accessory HAT* 与 *ReSpeaker 4-Mic 线性阵列* 连接。

**步骤 2.**  通过 40 Pin GPIO 将 *ReSpeaker Voice Accessory HAT* 插入 *Raspberry Pi*。

**步骤 3.**  将 *耳机* 插入 *3.5mm 耳机音频插孔* 或将 *扬声器* 插入 *JST 2.0 扬声器插孔*。

**步骤 4.**  使用 micro-USB 数据线将 *Raspberry Pi* 连接到 *PC*。

![图片](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/4-mic.jpg)

### 软件

**步骤 1. 安装 seeed-voicecard**

获取 seeed voice card 源代码，并安装所有 Linux 内核驱动。

```
sudo apt-get update
git clone https://github.com/HinTak/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh  
sudo reboot
```

**步骤 2. 检查声卡**

输入以下命令检查录音设备。

```
pi@raspberrypi:~ $ arecord -L
```

输出应类似于：

```
pi@raspberrypi:~ $ arecord -L
null
    Discard all samples (playback) or generate zero samples (capture)
default
    Playback/recording through the PulseAudio sound server
ac108
dmixer
ac101
sysdefault:CARD=seeed8micvoicec
    seeed-8mic-voicecard, 
    Default Audio Device
dmix:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct sample mixing device
dsnoop:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct sample snooping device
hw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct hardware device without any conversions
plughw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Hardware device with all software conversions
```

使用以下命令检查播放设备。

```
pi@raspberrypi:~ $ aplay -L
```

输出应类似于：

```
pi@raspberrypi:~ $ aplay -L
null
    Discard all samples (playback) or generate zero samples (capture)
default
    Playback/recording through the PulseAudio sound server
ac108
dmixer
ac101
sysdefault:CARD=ALSA
    bcm2835 ALSA, bcm2835 ALSA
    Default Audio Device
dmix:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Direct sample mixing device
dmix:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Direct sample mixing device
dsnoop:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Direct sample snooping device
dsnoop:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Direct sample snooping device
hw:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Direct hardware device without any conversions
hw:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Direct hardware device without any conversions
plughw:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Hardware device with all software conversions
plughw:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Hardware device with all software conversions
sysdefault:CARD=seeed8micvoicec
    seeed-8mic-voicecard, 
    Default Audio Device
dmix:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct sample mixing device
dsnoop:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct sample snooping device
hw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct hardware device without any conversions
plughw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Hardware device with all software conversions
```

**步骤 3. 录音和播放**

您可以先录音后播放，也可以同时录音和播放。

```
# 在 AC108 上捕获声音并保存为 a.wav
arecord -Dac108 -f S32_LE -r 16000 -c 8 a.wav
# 注意捕获的麦克风音频在前 6 个通道

# 在 AC101 上播放音频文件 a.wav
aplay -D ac101 a.wav
# 除非您的音频文件是单通道，否则不要直接使用 -D plughw:1,0。
```

:::note
开发者使用 4-Mic 线性阵列套件同时进行录音和播放的限制：

- 1. 必须先开始录音，否则录音通道可能会混乱。

- 2. 播放输出通道必须填充 8 个相同通道数据或 4 个相同立体声通道数据，否则扬声器或耳机可能不会输出任何声音。

- 3. 如果您想同时播放和录音，aplay 的音乐文件必须是单声道，否则无法使用该命令播放。
:::

您也可以使用 Audacity 进行播放和录音。

:::tip
您应该通过 VNC 打开 Audacity，或者直接使用显示器打开它。
:::

```
sudo apt update
sudo apt install audacity
audacity                      // 运行 Audacity
```

![](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/audacity.png)

## 使用概述

要运行以下示例，请将 [4mics_hat 仓库](https://github.com/respeaker/4mics_hat.git) 克隆到您的 Raspberry Pi 上：

```
git clone https://github.com/respeaker/4mics_hat.git
```

所有在下面示例中提到的 Python 脚本都可以在此仓库中找到。要安装必要的依赖项，请在 mic_hat 仓库文件夹中运行以下命令：

```
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

### 使用 Python 录制声音

我们使用 [PyAudio Python 库](https://people.csail.mit.edu/hubert/pyaudio/) 来录制声音。

首先，运行以下脚本以获取 2 Mic Pi Hat 的设备索引号：

```
python3 recording_examples/get_device_index.py
```

您将看到如下设备 ID：

```
Input Device id  2  -  seeed-8mic-voicecard: - (hw:1,0)
```

要录制声音，请使用 nano 或其他文本编辑器打开 ```recording_examples/record.py``` 文件，并将 `RESPEAKER_INDEX = 2` 更改为您系统中 ReSpeaker 的索引号。然后运行 Python 脚本 record.py 进行录音：

```
python3 recording_examples/record.py
```

- 第 6 步：如果您想从 8 个通道中提取通道 0 的数据，请查看 ```record_one_channel.py``` 的内容。对于其他通道 X，请将 [0::8] 更改为 [X::8]。

```
python3 recording_examples/record_one_channel.py
```

要播放录制的样本，您可以使用 aplay 系统工具，例如：

```bash
aplay -f cd -Dhw:0 output.wav #用于立体声
aplay -D plughw:0,0 output_one_channel.wav #用于单声道（来自一个通道）
```

## 常见问题

**Q1: Mic 阵列中只有 4 个麦克风，为什么会有 8 个通道？**

A1: 此阵列中有 2 个 AC108，每个 AC108 芯片有 4 个通道输出。因此总共有 8 个通道，其中 4 个用于麦克风，2 个用于播放，剩下的 2 个通道未使用。

**Q2: 如果 Raspberry 能检测到 ReSpeaker 2-mics hat，但无法检测到 ReSpeaker 4-mics 线性阵列怎么办？**

A2: 请点击 Raspberry -> Preferences -> Raspberry Pi Configuration，然后选择 Interfaces 选项卡，确保 1-Wire 已禁用。

## 资源

- **[PDF]** [AC101 数据手册](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC101_User_Manual_v1.1.pdf)
- **[PDF]** [AC108 数据手册](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC108_Datasheet_V1.2.pdf)
- **[驱动]** [Seeed-Voice 驱动](https://github.com/respeaker/seeed-voicecard)
- **[算法]** [算法包括 DOA、VAD、NS](https://github.com/respeaker/mic_array)
- **[语音引擎]** [Voice Engine 项目，提供创建语音启用对象的构建模块](https://github.com/voice-engine/voice-engine)
- **[算法]** [AEC](https://github.com/voice-engine/ec)
- **[机械图纸]** [二维图纸](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/res/2d.zip)

## 项目

[Mojing Mojing - 使用 ReSpeaker 的智能镜子！](https://www.hackster.io/SeeedStudio/mojing-mojing-a-smart-mirror-with-respeaker-e1ae20)：一个通过 ReSpeaker 进行语音界面控制的智能镜子。我们还连接了 Wio Link 来控制其他对象！基于 Raspberry Pi。

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