---
description: ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi
title: ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![输入图片描述](https://files.seeedstudio.com/products/107990055/01.png)

Seeed 的 ReSpeaker 6-Mic Circular Array Kit 是一个扩展板，也称为 HAT，专为 Raspberry Pi 设计。它是一个圆形麦克风阵列套件，配备六个麦克风，专为 AI 和语音应用设计。这意味着您可以使用 Raspberry Pi 构建更强大、更灵活的语音产品，并集成 Amazon Alexa 语音服务、Google Assistant 等。

ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi 由两个板组成，一个是语音配件 HAT，另一个是六麦克风圆形阵列。

ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi 在 Raspbian 系统中支持 8 个输入和 8 个输出通道。前 6 个输入通道用于麦克风录音，其余 2 个输入通道是回放的回声通道。前 2 个输出通道用于播放，其余 6 个输出通道为虚拟通道。

<iframe width="800" height="450" src="https://www.youtube.com/embed/NxZx9nz67Bc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-6-Mic-Circular-Array-Kit-for-Raspberry-Pi-p-3067.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 2 个 ADC 芯片和 1 个 DAC 芯片
- 8 个输入和 8 个输出通道
- 六麦克风阵列
- 支持 Grove
- 兼容 Raspberry Pi（支持 Raspberry Pi Zero 和 Zero W、Raspberry Pi B+、Raspberry Pi 2 B、Raspberry Pi 3 B、Raspberry Pi 3 B+、Raspberry Pi 3 A+ 和 Raspberry Pi 4）
- 耳机和扬声器语音输出

## 规格

- 2 x X-Power AC108 ADC
- 6 x 高性能麦克风
- 1 x X-Power AC101 DAC
- 语音输出：
  - 3.5mm 耳机音频插孔
  - 扬声器插孔
- 兼容 Raspberry Pi 40 针引脚
- 麦克风：MSM321A3729H9CP
- 灵敏度：-22 dBFS（全向）
- 信噪比：59 dB
- 最大采样率：48Khz

## 应用场景

- 智能音箱
- 智能语音助手系统
- 语音录音设备
- 语音会议系统
- 会议通信设备
- 语音交互机器人
- 汽车语音助手
- 其他需要语音指令的场景

## 硬件概览

**系统图**

<a href="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png"/></a>

**接口**

![](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/hardware.jpg)

:::note
连接后，请务必使用万用表确定电路的导通情况是否与上图所示一致。
:::

## 装配图

![](https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/ab.png)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/6-mic_array_assemble.gif" /></p>

## 入门指南

### 硬件

**准备工作**

ReSpeaker 6-Mic Circular Array    x1

[Raspberry Pi 3B 或 3B+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B%2B-p-3037.html?utm_source=homepage&utm_medium=homepagebanner&utm_campaign=hp_0605)              x1

[Micro-USB 数据线](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)                     x1

PC                                  x1

耳机或扬声器                        x1

:::提示
实际上，ReSpeaker 6-Mic Circular Array 支持 Raspberry Pi Zero、Raspberry Pi 1 B+、Raspberry Pi 2 B、Raspberry Pi 3 B、Raspberry Pi 3 Model B+、Raspberry Pi 3 A+ 和 Raspberry Pi 4。在本教程中，我们使用的是 Raspberry Pi 3。
:::

**连接步骤**

**步骤 1.**  使用排线将 *ReSpeaker Voice Accessory HAT* 与 *ReSpeaker 6-Mic Circular Array* 连接。

**步骤 2.**  将 *ReSpeaker Voice Accessory HAT* 插入 *Raspberry Pi* 的 40 Pin GPIO 接口。

**步骤 3.**  将 *耳机* 插入 *3.5mm 耳机音频接口* 或将 *扬声器* 插入 *JST 2.0 扬声器接口*。

**步骤 4.**  使用 Micro-USB 数据线将 *Raspberry Pi* 与 *PC* 连接。

![图片](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/6-mic.jpg)

### 软件

**准备工作**

*方案 A*

[PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

您需要使用 *Putty* 或其他 *ssh* 工具连接到您的 Raspberry Pi。在开始之前，请确保：

1. 打开 Raspberry Pi 的 *ssh* 功能以允许 Putty 连接。如果您不知道如何打开 *ssh*，请搜索 `如何设置 Raspberry Pi 的 ssh`。

2. 确保您的 Raspberry Pi 和 PC 在同一个 WiFi 网络中。如果您不知道如何配置 WiFi，请搜索 `如何设置 Raspberry Pi 的 WiFi`。

3. 获取 Raspberry Pi 的 IP 地址。如果您不知道如何获取 IP 地址，请参考 [Raspberry Pi 官方文档](https://www.raspberrypi.org/documentation/remote-access/ip-address.md)。

4. 使用 IP 地址通过 Putty 的 ssh 服务连接 Raspberry Pi 和您的 PC。

![图片](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/putty.png)

然后输入主机名和密码。默认 ID 是 `pi`，密码是 `raspberry`。

```
login as: pi
pi@192.168.43.210's password:raspberry
```

现在您已登录，可以在 Putty 中输入命令并操作您的 Raspberry Pi。

[VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)

为了让此套件与 Alexa 或 DuerOS 一起工作，您需要打开一个网站以获取授权。因此，您需要使用 *VNC Viewer* 登录您的 Amazon 或百度账户。因此，请确保您已打开 Raspberry Pi 的 *VNC* 服务。

或者，您可以考虑方案 B。

*方案 B*

如果您觉得上述步骤太麻烦，您可以直接使用 HDMI 显示器，并将 USB 键盘和 USB 鼠标插入 Raspberry Pi，这种方法简单易行。

**步骤 1. 安装 seeed-voicecard**

获取 seeed voice card 源代码，并安装所有 Linux 内核驱动。

```
sudo apt-get update
sudo apt-get upgrade
git clone https://github.com/respeaker/seeed-voicecard.git
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
# 使用 AC108 录制声音并保存为 a.wav
arecord -Dac108 -f S32_LE -r 16000 -c 8 a.wav
# 注意录制的麦克风音频在前 6 个通道

# 使用 AC101 播放声音文件 a.wav
aplay -D ac101 a.wav
# 除非您的音频文件是单声道，否则不要直接使用 -D plughw:1,0。

# 同时进行录音和播放
arecord -D hw:1,0 -f S32_LE -r 16000 -c 8 to_be_record.wav &
# mono_to_play.wav 是一个单声道音频文件，用于播放
aplay -D plughw:1,0 -r 16000 mono_to_play.wav

```

:::note
开发者在使用 6-Mic Circular Array Kit（或 4-Mics Linear Array Kit）同时进行捕获和播放时的限制：

-1. 必须先启动捕获，否则捕获通道可能会出现混乱。

-2. 播放输出通道必须填充 8 个相同的通道数据或 4 个相同的立体声通道数据，否则扬声器或耳机可能不会输出任何声音。

-3. 如果您希望同时播放和录音，播放的音乐文件必须是单声道，否则无法使用该命令进行播放。
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

![](https://files.seeedstudio.com/wiki/Respeaker_V2/img/audacity.png)

### 使用 LED 播放

6-Mic Circular Array 上有 12 个 GRB LED，您可以自行配置这些 LED，现在让我们看看如何点亮它们。

```
git clone --depth 1 https://github.com/respeaker/pixel_ring.git
cd pixel_ring
pip install -U -e .
python examples/respeaker_4mic_array.py

```

您将看到 LED 点亮并运行。您可以参考 `python examples/respeaker_4mic_array.py` 文件来制作自己的效果。

## 实时声音源定位和跟踪

[ODAS](https://github.com/introlab/odas) 是 Open embeddeD Audition System 的缩写。这是一个专门用于声音源定位、跟踪、分离和后过滤的库。让我们来体验一下它的功能。

- 第一步：获取 ODAS 并构建它。

```
sudo apt-get install libfftw3-dev libconfig-dev libasound2-dev libgconf-2-4
sudo apt-get install cmake
git clone https://github.com/introlab/odas.git
mkdir odas/build
cd odas/build
cmake ..
make
```

- 第二步：获取 [ODAS Studio](https://github.com/introlab/odas_web/releases) 并打开它。

- 第三步：odascore 位于 **odas/bin/odaslive**，**配置文件**位于 [这里](https://raw.githubusercontent.com/xiongyihui/odas/master/config/odaslive/respeaker_6_mic_array.cfg)。

![](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/odas.png)

## 提取语音

我们使用 [PyAudio Python 库](https://people.csail.mit.edu/hubert/pyaudio/) 来提取语音。

- 第一步：运行以下脚本以获取 6 Mic Pi Hat 的设备索引号：

```python
sudo pip install pyaudio
cd ~
nano get_index.py
```

- 第二步：复制以下代码并粘贴到 get_index.py 中。

```python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```

- 第三步：按 Ctrl + X 退出并按 Y 保存。

- 第四步：运行 `sudo python get_index.py`，您将看到如下设备 ID：

```
Input Device id  2  -  seeed-8mic-voicecard: - (hw:1,0)
```

- 第五步：将 `RESPEAKER_INDEX = 2` 更改为设备索引号。运行 Python 脚本 record.py 以录制语音。

```python
import pyaudio
import wave

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 8 
RESPEAKER_WIDTH = 2
# 运行 getDeviceInfo.py 获取索引
RESPEAKER_INDEX = 2  # 参考输入设备 ID
CHUNK = 1024
RECORD_SECONDS = 5
WAVE_OUTPUT_FILENAME = "output.wav"

p = pyaudio.PyAudio()

stream = p.open(
            rate=RESPEAKER_RATE,
            format=p.get_format_from_width(RESPEAKER_WIDTH),
            channels=RESPEAKER_CHANNELS,
            input=True,
            input_device_index=RESPEAKER_INDEX,)

print("* recording")

frames = []

for i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    frames.append(data)

print("* done recording")

stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(RESPEAKER_CHANNELS)
wf.setsampwidth(p.get_sample_size(p.get_format_from_width(RESPEAKER_WIDTH)))
wf.setframerate(RESPEAKER_RATE)
wf.writeframes(b''.join(frames))
wf.close()
```

- 第六步：如果您希望从 8 个通道中提取通道 0 的数据，请参考以下代码。对于其他通道 X，请将 `[0::8]` 更改为 `[X::8]`。

```python
import pyaudio
import wave
import numpy as np

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 8
RESPEAKER_WIDTH = 2
# 运行 getDeviceInfo.py 获取索引
RESPEAKER_INDEX = 2  # 参考输入设备 ID
CHUNK = 1024
RECORD_SECONDS = 3
WAVE_OUTPUT_FILENAME = "output.wav"

p = pyaudio.PyAudio()

stream = p.open(
            rate=RESPEAKER_RATE,
            format=p.get_format_from_width(RESPEAKER_WIDTH),
            channels=RESPEAKER_CHANNELS,
            input=True,
            input_device_index=RESPEAKER_INDEX,)

print("* recording")

frames = [] 

for i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    # 从 8 个通道中提取通道 0 的数据，如果您希望提取通道 1，请更改为 [1::8]
    a = np.fromstring(data,dtype=np.int16)[0::8]
    frames.append(a.tostring())

print("* done recording")

stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(1)
wf.setsampwidth(p.get_sample_size(p.get_format_from_width(RESPEAKER_WIDTH)))
wf.setframerate(RESPEAKER_RATE)
wf.writeframes(b''.join(frames))
wf.close()
```

## DOA

### 带关键词的 DOA

**需求**

- pyaudio
- numpy
- snowboy

**安装**

安装 pyaudio、numpy 和 snowboy，建议使用 virtualenv 创建虚拟 Python 环境。

```shell
sudo apt install python-pyaudio python-numpy python-virtualenv
sudo apt-get install swig python-dev libatlas-base-dev build-essential make
git clone --depth 1 https://github.com/Kitt-AI/snowboy.git
cd snowboy
virtualenv --system-site-packages env
source env/bin/activate
python setup.py build
python setup.py bdist_wheel
pip install dist/snowboy*.whl
git clone https://github.com/voice-engine/voice-engine.git
cd voice-engine
python setup.py bdist_wheel
pip install dist/*.whl
```

**让我们说“snowboy”**

- 第一步：运行 `kws_doa.py`

```shell
cd ~/voice-engine/examples/respeaker_6mic_array_for_pi/
python kws_doa.py
```

以下是 `kws_doa.py` 的代码：

```python
"""
搜索关键词 "snowboy"。
找到关键词后，估算到达方向 (DOA)。

硬件：ReSpeaker 6 Mic Array for Raspberry Pi
"""

import sys
import time
from voice_engine.source import Source
from voice_engine.channel_picker import ChannelPicker
from voice_engine.kws import KWS
from voice_engine.doa_respeaker_6mic_array import DOA


def main():
    src = Source(rate=16000, channels=8)
    ch0 = ChannelPicker(channels=src.channels, pick=0)
    kws = KWS(model='snowboy', sensitivity=0.6, verbose=True)
    doa = DOA(rate=16000)

    src.link(ch0)
    ch0.link(kws)
    src.link(doa)

    def on_detected(keyword):
        print('检测到 {}，方向为 {}'.format(keyword, doa.get_direction()))

    kws.set_callback(on_detected)

    src.recursive_start()
    while True:
        try:
            time.sleep(1)
        except KeyboardInterrupt:
            break

    src.recursive_stop()

    # 等待一秒以允许其他线程退出
    time.sleep(1)


if __name__ == '__main__':
    main()
```

- 第二步：说“snowboy”，以下是 DOA 的输出结果。

```shell
(env) pi@raspberrypi:~/voice-engine/examples/respeaker_6mic_array_for_pi $ python kws_doa.py 
['arecord', '-t', 'raw', '-f', 'S16_LE', '-c', '8', '-r', '16000', '-D', 'default', '-q']
0000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222/usr/local/lib/python2.7/dist-packages/voice_engine-0.1.3-py2.7.egg/voice_engine/gcc_phat.py:22: RuntimeWarning: invalid value encountered in divide
  cc = np.fft.irfft(R / np.abs(R), n=(interp * n))
检测到 1，方向为 283.32811392
3000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222检测到 1，方向为 210.0
30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222检测到 1，方向为 62.5448292531
30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222222检测到 1，方向为 62.5448292531
300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222检测到 1，方向为 223.32811392
300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022222222222222222222222222222222222222222222222222检测到 1，方向为 223.32811392
30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000222222222222222222222222222222222222222检测到 1，方向为 283.32811392
300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222检测到 1，方向为 237.455170747
```

## 按钮

如果您想检查您的 ReSpeaker 6-Mic 是否正确安装在树莓派上，使用按钮是一个不错的选择。我们可以使用以下代码进行检查。

```python

import RPi.GPIO as GPIO
import time

BUTTON = 26

GPIO.setmode(GPIO.BCM)
GPIO.setup(BUTTON, GPIO.IN)

while True:
    state = GPIO.input(BUTTON)
    if state:
        print("off")
    else:
        print("on")
    time.sleep(1)
```

## 常见问题解答

**问题1：麦克风阵列中只有6个麦克风，为什么会有8个通道？**

回答1：该阵列中有2个 AC108 芯片，每个 AC108 芯片有4个通道输出。因此总共会有8个通道，其中6个用于麦克风，另外2个是回放通道。

**问题2：树莓派可以检测到 ReSpeaker 2-Mics HAT，但无法检测到 ReSpeaker 6-Mics Circular Array？**

回答2：请点击树莓派 -> Preferences -> Raspberry Pi Configuration，然后选择 Interfaces 标签页，确保 1-Wire 已禁用。

## 资源

- **[PDF]** [AC101 数据手册](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC101_User_Manual_v1.1.pdf)
- **[PDF]** [AC108 数据手册](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC108_Datasheet_V1.2.pdf)
- **[Dxf]** [带6个麦克风的 ReSpeaker Circular Array 语音配件 HAT 外壳文件](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/ReSpeaker%20Circular%20Array%20for%20Voice%20Accessory%20HAT%20with%206%20Microphones.dxf)
- **[Dxf]** [带6个麦克风的 ReSpeaker Circular Array 语音配件 HAT 2D 文件](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/2d.zip)
- **[驱动]** [Seeed-Voice 驱动](https://github.com/respeaker/seeed-voicecard)
- **[算法]** [算法包括 DOA、VAD、NS](https://github.com/respeaker/mic_array)
- **[语音引擎]** [语音引擎项目，提供创建语音启用对象的构建模块](https://github.com/voice-engine/voice-engine)
- **[算法]** [AEC](https://github.com/voice-engine/ec)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>