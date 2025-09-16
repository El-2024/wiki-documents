---
description: ReSpeaker Mic Array v3.0
title: ReSpeaker Mic Array v3.0
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/v3/ReSpeaker_Mic_Array_v3.0.webp
slug: /cn/respeaker_mic_array_v3.0
last_update:
  date: 8/13/2025
  author: Kasun Thushara
---


![](https://files.seeedstudio.com/products/107990053/01.png)

ReSpeaker Mic Array v3.0 是 Seeed Studio USB 麦克风阵列的下一代产品，继承了 ReSpeaker Mic Array v2.0。虽然 v2.0 基于 XMOS 的 XVF-3000 芯片组构建，并被设计为相对于 v1.0 的重大升级，但 v3.0 专注于改进音频质量和算法性能，即使物理麦克风数量更少。

与 v2.0 的 4 麦克风阵列相比，v3.0 同样使用 4 个麦克风，但集成了改进的内置音频处理算法，提供比前代产品更清晰的远场语音捕获和更好的噪声处理能力。v3.0 将 v2.0 中的 WM8960 编解码器替换为 TLV320AIC3104 编解码器，有助于实现更高保真度的声音捕获。

虽然 v2.0 通常与 ReSpeaker Core 配对使用或用作开发板，但 v3.0 更像是一个即插即用的 USB 设备——与 v2.0 类似，支持 USB Audio Class 1.0，完全兼容 Windows、macOS 和 Linux——但针对开箱即用的语音接口性能进行了调优，无需额外硬件。

在功能方面，两者都支持远场语音捕获和语音增强算法，如 AEC（声学回声消除）、VAD（语音活动检测）、DOA（到达方向）、波束成形和噪声抑制，但 v3.0 的算法优化在真实世界的嘈杂环境中提供更清洁的音频。

LED 系统在两个版本中都保持 12 个可编程 RGB LED，但 v3.0 采用了较新的 USB 4 Mic Array 设计，使其比 v2.0 面向开发者的外形更小更简单，同时仍保留关键的专业语音接口功能。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2.0-p-3053.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

<p style={{textAlign: 'center'}}><a href="https://www.amazon.com/dp/B07D29L3Q1" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/amaon.png"  width="300" height="48"  border="0"/></a></p>

## 版本

| 产品版本                    | 变更                                                                  | 发布日期      |
|--------------------------|--------------------------------------------------------------------------|---------------|
| ReSpeaker Mic Array v1.0 | 初始版本                                                                  | 2016年8月15日  |
| ReSpeaker Mic Array v2.0 | XVSM-2000 停产，MCU 更换为 XVF-3000，麦克风数量从 7 个减少到 4 个。 | 2018年1月25日  |
| ReSpeaker Mic Array v3.0 | 编解码器更换为 TLV320AIC3104  | 2021年1月19日  |

## 特性

- 远场语音捕获
- 支持 USB Audio Class 1.0 (UAC 1.0)
- 四麦克风阵列
- 12 个可编程 RGB LED 指示灯
- 语音算法和功能
  - 语音活动检测
  - 到达方向检测
  - 波束成形
  - 噪声抑制
  - 去混响
  - 声学回声消除

## 规格参数

- 来自 XMOS 的 XVF-3000
- 4 个高性能数字麦克风
- 支持远场语音捕获
- 片上语音算法
- 12 个可编程 RGB LED 指示灯  
- 麦克风：ST MP34DT01TR-M  
- 灵敏度：-26 dBFS（全向）  
- 声学过载点：120 dBSPL  
- 信噪比：61 dB  
- 电源：通过 Micro USB 或扩展接头提供 5V DC  
- 尺寸：70mm（直径）  
- 3.5mm 音频插孔输出接口
- 功耗：5V，LED 开启时 180mA，LED 关闭时 170mA
- 最大采样率：16Khz

## 硬件概览

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Hardware%20Overview.png)

- **<font face="" size="3" font color="ff0000">①</font> XMOS XVF-3000:**
它集成了先进的 DSP 算法，包括声学回声消除 (AEC)、波束成形、去混响、噪声抑制和增益控制。

- **<font face="" size="3" font color="ff0000">②</font> 数字麦克风:**
MP34DT01-M 是一款超紧凑、低功耗、全向数字 MEMS 麦克风，采用电容式传感元件和 IC 接口构建。

- **<font face="" size="3" font color="ff0000">③</font> RGB LED:**
三色 RGB LED。

- **<font face="" size="3" font color="ff0000">④</font> USB 端口:**
提供电源并控制麦克风阵列。

- **<font face="" size="3" font color="ff0000">⑤</font> 3.5mm 耳机插孔:**
音频输出，我们可以将有源扬声器或耳机插入此端口。

- **<font face="" size="3" font color="ff0000">⑥</font> TLV320AIC3104:**
TLV320AIC3104 是一款低功耗立体声编解码器，具有 D 类扬声器驱动器，可为 8Ω 负载提供每通道 1W 的功率。

**系统框图**
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/v3/system_diag.png)

**引脚图**
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Pin_Map.png)

**尺寸**
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/v3/Dimension.png)

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/v3/Dimension1.png)

<iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=759d56d7-c97c-4aa7-ad96-3ca1e0d5a13e" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="800" height="450" allowfullscreen></iframe>

## 应用

- USB 语音捕获
- 智能音箱
- 智能语音助手系统
- 录音设备
- 语音会议系统
- 会议通信设备
- 语音交互机器人
- 车载语音助手
- 其他语音接口场景

## 入门指南

:::note
ReSpeaker Mic Array v3.0 兼容 Windows、Mac、Linux 系统和 Android。以下脚本在 Python2.7 上测试。
:::

对于 Android，我们在树莓派上使用 [emteria.OS](https://help.emteria.com/kb/emteria-os-installation)（Android 7.1）进行了测试。我们将麦克风阵列 v3.0 插入树莓派 USB 端口，并选择 ReSpeaker 麦克风阵列 v3.0 作为音频设备。这是音频录制界面。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/andriod7.1_record.png)

这是音频播放界面。我们将扬声器插入 ReSpeaker 麦克风阵列 v3.0 的 3.5mm 音频插孔，听取我们录制的内容。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/andriod7.1_play.png)

### 更新固件

有 2 个固件。一个包含 1 通道数据，另一个包含 6 通道数据（出厂固件）。以下是差异对比表。

| 固件             | 通道数 | 说明                                                                                                                                                                    |
|----------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1_channel_firmware.bin  | 1              | 用于 ASR 的处理音频 |
| 6_channels_firmware.bin | 6  |通道 0：用于 ASR 的处理音频 <br /> 通道 1：mic1 原始数据 <br />通道 2：mic2 原始数据 <br />通道 3：mic3 原始数据 <br />通道 4：mic4 原始数据 <br />通道 5：合并播放|

**对于 Linux：** 麦克风阵列支持 USB DFU。我们开发了一个 Python 脚本 dfu.py 来通过 USB 更新固件。

```python
sudo apt-get update
sudo pip install pyusb click
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
sudo python dfu.py --download MicArrayV3_firmware/6_channels_dfu_4.0.0_firmware.bin # The 6 channels version 

# if you want to use 1 channel,then the command should be like:

sudo python dfu.py --download MicArrayV3_firmware/1_channel_dfu_4.0.0_firmware.bin


```

**对于 Windows/Mac：** 我们不建议使用 Windows/Mac 和 Linux 虚拟机来更新固件。

### 开箱即用演示

这是一个使用 6 通道固件的声学回声消除示例。

- 步骤 1. 将 USB 线缆连接到 PC，将音频插头连接到扬声器。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/playback.jpg)

- 步骤 2. 在 PC 端选择麦克风阵列 v3.0 作为输出设备。
- 步骤 3. 启动 audacity 开始录音。
- 步骤 4. 先在 PC 端播放音乐，然后我们说话。
- 步骤 5. 我们将看到如下的 audacity 界面，请点击 **Solo** 来听取每个通道的音频。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Audacity.png)

通道0音频（经算法处理）：

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel0_asr.wav" />
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel0_asr.ogg" />
</audio>

通道1音频（Mic1原始数据）：

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel1_raw.wav" />
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel1_raw.ogg" />
</audio>

通道5音频（回放数据）：

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel5_playback.wav" />
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel5_playback.ogg" />
</audio>

这是关于 DOA 和 AEC 的视频。

<iframe width="800" height="450" src="https://www.youtube.com/embed/XivM-6PRgX8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### 安装 DFU 和 LED 控制驱动

- **Windows：** 音频录制和播放默认工作良好。在 Windows 上只需要 Libusb-win32 驱动来控制 LED 和 DSP 参数。我们使用[一个便捷工具 - Zadig](http://zadig.akeo.ie/)来为 `SEEED DFU` 和 `SEEED Control` 安装 libusb-win32 驱动（ReSpeaker Mic Array 在 Windows 设备管理器中有 2 个设备）。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/usb_4mic_array_driver.png)

:::caution
    请确保选择的是 libusb-win32，而不是 WinUSB 或 libusbK。
:::

- **MAC：** 不需要驱动。
- **Linux：** 不需要驱动。

### 调优

**对于 Linux/Mac/Windows：** 我们可以配置内置算法的一些参数。

- 获取完整的参数列表，更多信息请参考 FAQ。

```
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
python tuning.py -p
```

- Example#1, we can turn off Automatic Gain Control (AGC):

```
python tuning.py AGCONOFF 0
```

- Example#2, We can check the DOA angle.

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python tuning.py DOAANGLE
DOAANGLE: 180
```

### 控制 LED

我们可以通过 USB 控制 ReSpeaker Mic Array V2 的 LED。USB 设备具有供应商特定类接口，可用于通过 USB 控制传输发送数据。我们参考了 [pyusb python 库](https://github.com/pyusb/pyusb) 并开发了 [usb_pixel_ring python 库](https://github.com/respeaker/pixel_ring/blob/master/pixel_ring/usb_pixel_ring_v2.py)。

LED 控制命令通过 pyusb 的 usb.core.Device.ctrl_transfer() 发送，其参数如下：

```
ctrl_transfer(usb.util.CTRL_OUT | usb.util.CTRL_TYPE_VENDOR | usb.util.CTRL_RECIPIENT_DEVICE, 0, command, 0x1C, data, TIMEOUT)

```

以下是 usb_pixel_ring API。

| 命令    | 数据                           | API                            | 说明                                                                                                              |
|---------|--------------------------------|--------------------------------|-------------------------------------------------------------------------------------------------------------------|
| 0       | [0]                            | pixel_ring.trace()             | 跟踪模式，LED 变化取决于 VAD*和 DOA*                                                                                |
| 1       | [red, green, blue, 0]          | pixel_ring.mono()              | 单色模式，将所有 RGB LED 设置为单一颜色，例如红色(0xFF0000)，绿色(0x00FF00)，蓝色(0x0000FF)                         |
| 2       | [0]                            | pixel_ring.listen()            | 监听模式，类似于跟踪模式，但不会关闭 LED                                                                           |
| 3       | [0]                            | pixel_ring.speak()             | 等待模式                                                                                                         |
| 4       | [0]                            | pixel_ring.think()             | 说话模式                                                                                                        |
| 5       | [0]                            | pixel_ring.spin()              | 旋转模式                                                                                                         |
| 6       | [r, g, b, 0] * 12              | pixel_ring.custimize()         | 自定义模式，将每个 LED 设置为自己的颜色                                                                        |
| 0x20    | [brightness]                   | pixel_ring.set_brightness()    | 设置亮度，范围：0x00~0x1F                                                                                  |
| 0x21    | [r1, g1, b1, 0, r2, g2, b2, 0] | pixel_ring.set_color_palette() | 设置调色板，例如，pixel_ring.set_color_palette(0xff0000, 0x00ff00) 与 pixel_ring.think() 一起使用 |
| 0x22    | [vad_led]                      | pixel_ring.set_vad_led()       | 设置中心 LED：0 - 关闭，1 - 开启，其他 - 取决于 VAD                                                            |
| 0x23    | [volume]                       | pixel_ring.set_volume()        | 显示音量，范围：0 ~ 12                                                                                        |
| 0x24    | [pattern]                      | pixel_ring.change_pattern()    | 设置模式，0 - Google Home 模式，其他 - Echo 模式                                                       |

**对于 Linux：** 以下是控制 LED 的示例。请按照以下命令运行演示。

```python
git clone https://github.com/respeaker/pixel_ring.git
cd pixel_ring
sudo python setup.py install
sudo python examples/usb_mic_array.py
```

Here is the code of the usb_mic_array.py.

```python
import time
from pixel_ring import pixel_ring


if __name__ == '__main__':
    pixel_ring.change_pattern('echo')
    while True:

        try:
            pixel_ring.wakeup()
            time.sleep(3)
            pixel_ring.think()
            time.sleep(3)
            pixel_ring.speak()
            time.sleep(6)
            pixel_ring.off()
            time.sleep(3)
        except KeyboardInterrupt:
            break


    pixel_ring.off()
    time.sleep(1)

```

**For Windows/Mac:** Here is the example to control the leds.

- Step 1. Download pixel_ring.

```python
git clone https://github.com/respeaker/pixel_ring.git
cd pixel_ring/pixel_ring
```

- 步骤 2. 创建一个 [led_control.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/led_control.py) 文件，包含以下代码，然后运行 'python led_control.py'

```python
from usb_pixel_ring_v2 import PixelRing
import usb.core
import usb.util
import time

dev = usb.core.find(idVendor=0x2886, idProduct=0x0018)
print dev
if dev:
    pixel_ring = PixelRing(dev)

    while True:
        try:
            pixel_ring.wakeup(180)
            time.sleep(3)
            pixel_ring.listen()
            time.sleep(3)
            pixel_ring.think()
            time.sleep(3)
            pixel_ring.set_volume(8)
            time.sleep(3)
            pixel_ring.off()
            time.sleep(3)
        except KeyboardInterrupt:
            break

    pixel_ring.off()
```

:::note
如果您在屏幕上看到打印的"None"，请重新安装 libusb-win32 驱动程序。
:::

### DOA（到达方向）

**适用于 Windows/Mac/Linux：** 这是查看 DOA 的示例。绿色 LED 是语音方向的指示器。有关角度，请参考硬件概述。

- 步骤 1. 下载 usb_4_mic_array。

```python
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
```

- 步骤 2. 在 usb_4_mic_array 文件夹下创建一个包含以下代码的 [DOA.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/DOA.py) 文件，然后运行 'python DOA.py'

:::note
如果您使用的是 Python 3，此文件适合使用 [DOA.py](https://github.com/KasunThushara/xvf3000/blob/main/DOA.py)。调优文件是 [tuning.py](https://github.com/KasunThushara/xvf3000/blob/main/tuning.py)
:::

```
from tuning import Tuning
import usb.core
import usb.util
import time

dev = usb.core.find(idVendor=0x2886, idProduct=0x0018)

if dev:
    Mic_tuning = Tuning(dev)
    print Mic_tuning.direction
    while True:
        try:
            print Mic_tuning.direction
            time.sleep(1)
        except KeyboardInterrupt:
            break
```

- Step 3. We will see the DOA as below.

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python doa.py 
184
183
175
105
104
104
103
```

### VAD (语音活动检测)

**适用于 Windows/Mac/Linux：** 这里是查看 VAD 的示例。红色 LED 是 VAD 的指示器。

- 步骤 1. 下载 usb_4_mic_array。

```python
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
```

- 步骤 2. 在 usb_4_mic_array 文件夹下创建一个包含以下代码的 [VAD.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/VAD.py) 文件，并运行 'python VAD.py'

:::note
如果您使用的是 Python 3，此文件适合使用 [VAD.py](https://github.com/KasunThushara/xvf3000/blob/main/VAD.py)。调优文件是 [tuning.py](https://github.com/KasunThushara/xvf3000/blob/main/tuning.py)
:::

```
from tuning import Tuning
import usb.core
import usb.util
import time

dev = usb.core.find(idVendor=0x2886, idProduct=0x0018)
#print dev
if dev:
    Mic_tuning = Tuning(dev)
    print Mic_tuning.is_voice()
    while True:
        try:
            print Mic_tuning.is_voice()
            time.sleep(1)
        except KeyboardInterrupt:
            break
```

- Step 3. We will see the DOA as below.

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python VAD.py 
0
0
0
1
0
1
0
```

:::note
对于VAD的阈值，我们也可以使用GAMMAVAD_SR来设置。更多详细信息请参考[调优](https://wiki.seeedstudio.com/ReSpeaker_Mic_Array_v2.0/#tuning)。
:::

### 提取语音

我们使用[PyAudio python库](https://people.csail.mit.edu/hubert/pyaudio/)通过USB提取语音。

**对于Linux：** 我们可以使用以下命令来录制或播放语音。

```python
arecord -D plughw:1,0 -f cd test.wav # record, please use the arecord -l to check the card and hardware first
aplay -D plughw:1,0 -f cd test.wav # play, please use the aplay -l to check the card and hardware first
arecord -D plughw:1,0 -f cd |aplay -D plughw:1,0 -f cd # record and play at the same time
```

我们也可以使用 python 脚本来提取语音。

- 步骤 1，我们需要运行以下脚本来获取麦克风阵列的设备索引号：

```python
sudo pip install pyaudio
cd ~
nano get_index.py
```

- 步骤 2，复制下面的代码并粘贴到 [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py)。

:::note
如果您使用的是 Python 3，此文件适合使用 [get_index.py](https://github.com/KasunThushara/xvf3000/blob/main/get_index.py)
:::

```python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```

- 步骤 3，按 `Ctrl` + `X` 退出并按 Y 保存。

- 步骤 4，运行 'sudo python get_index.py'，我们将看到如下所示的设备 ID。

```
Input Device id  2  -  ReSpeaker 4 Mic Array (UAC1.0): USB Audio (hw:1,0)
```

- 步骤 5，将 `RESPEAKER_INDEX = 2` 更改为索引号。运行 python 脚本 [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) 来录制语音。

```python
import pyaudio
import wave

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 6 # change base on firmwares, 1_channel_firmware.bin as 1 or 6_channels_firmware.bin as 6
RESPEAKER_WIDTH = 2
# run getDeviceInfo.py to get index
RESPEAKER_INDEX = 2  # refer to input device id
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

- 步骤 6. 如果您想从 6 个通道中提取通道 0 的数据，请按照以下代码操作。对于其他通道 X，请将 [0::6] 更改为 [X::6]。

```
import pyaudio
import wave
import numpy as np

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 6 # change base on firmwares, 1_channel_firmware.bin as 1 or 6_channels_firmware.bin as 6
RESPEAKER_WIDTH = 2
# run getDeviceInfo.py to get index
RESPEAKER_INDEX = 3  # refer to input device id
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
    # extract channel 0 data from 6 channels, if you want to extract channel 1, please change to [1::6]
    a = np.fromstring(data,dtype=np.int16)[0::6]
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

**For Windows:**

- Step 1. We run below command to install pyaudio.

```
 pip install pyaudio
```

- 步骤 2. 使用 [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) 获取设备索引。

```
C:\Users\XXX\Desktop>python get_index.py
Input Device id  0  -  Microsoft Sound Mapper - Input
Input Device id  1  -  ReSpeaker 4 Mic Array (UAC1.0)
Input Device id  2  -  Internal Microphone (Conexant I)
```

- 步骤 3. 修改 [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) 的设备索引和通道，然后提取语音。

```
C:\Users\XXX\Desktop>python record.py
* recording
* done recording
```

:::caution
如果我们看到"错误：%1 不是有效的 Win32 应用程序。"，请安装 Python Win32 版本。
:::

**对于 MAC：**

- 步骤 1. 我们运行以下命令来安装 pyaudio。

```
 pip install pyaudio
```

- 步骤 2. 使用 [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) 获取设备索引。

```
MacBook-Air:Desktop XXX$ python get_index.py 
Input Device id  0  -  Built-in Microphone
Input Device id  2  -  ReSpeaker 4 Mic Array (UAC1.0)
```

- 步骤 3. 修改 [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) 的设备索引和通道，然后提取语音。

```
MacBook-Air:Desktop XXX$ python record.py 
2018-03-24 14:53:02.400 Python[2360:16629] 14:53:02.399 WARNING:  140: This application, or a library it uses, is using the deprecated Carbon Component Manager for hosting Audio Units. Support for this will be removed in a future release. Also, this makes the host incompatible with version 3 audio units. Please transition to the API's in AudioComponent.h.
* recording
* done recording
```

## FAQ

**Q1: Parameters of built-in algorithms**

```
pi@raspberrypi:~/usb_4_mic_array $ python tuning.py -p
name   type max min r/w info
-------------------------------
AECFREEZEONOFF   int 1 0 rw Adaptive Echo Canceler updates inhibit.
                                                            0 = Adaptation enabled
                                                            1 = Freeze adaptation, filter only
AECNORM          float 16 0.25 rw Limit on norm of AEC filter coefficients
AECPATHCHANGE    int 1 0 ro AEC Path Change Detection.
                                                            0 = false (no path change detected)
                                                            1 = true (path change detected)
AECSILENCELEVEL  float 1 1e-09 rw Threshold for signal detection in AEC [-inf .. 0] dBov (Default: -80dBov = 10log10(1x10-8))
AECSILENCEMODE   int 1 0 ro AEC far-end silence detection status. 
                                                            0 = false (signal detected) 
                                                            1 = true (silence detected)
AGCDESIREDLEVEL  float 0.99 1e-08 rw Target power level of the output signal. 
                                                            [−inf .. 0] dBov (default: −23dBov = 10log10(0.005))
AGCGAIN          float 1000 1 rw Current AGC gain factor. 
                                                            [0 .. 60] dB (default: 0.0dB = 20log10(1.0))
AGCMAXGAIN       float 1000 1 rw Maximum AGC gain factor. 
                                                            [0 .. 60] dB (default 30dB = 20log10(31.6))
AGCONOFF         int 1 0 rw Automatic Gain Control. 
                                                            0 = OFF 
                                                            1 = ON
AGCTIME          float 1 0.1 rw Ramps-up / down time-constant in seconds.
CNIONOFF         int 1 0 rw Comfort Noise Insertion.
                                                            0 = OFF
                                                            1 = ON
DOAANGLE         int 359 0 ro DOA angle. Current value. Orientation depends on build configuration.
ECHOONOFF        int 1 0 rw Echo suppression.
                                                            0 = OFF
                                                            1 = ON
FREEZEONOFF      int 1 0 rw Adaptive beamformer updates.
                                                            0 = Adaptation enabled
                                                            1 = Freeze adaptation, filter only
FSBPATHCHANGE    int 1 0 ro FSB Path Change Detection.
                                                            0 = false (no path change detected)
                                                            1 = true (path change detected)
FSBUPDATED       int 1 0 ro FSB Update Decision.
                                                            0 = false (FSB was not updated)
                                                            1 = true (FSB was updated)
GAMMAVAD_SR      float 1000 0 rw Set the threshold for voice activity detection.
                                                            [−inf .. 60] dB (default: 3.5dB 20log10(1.5))
GAMMA_E          float 3 0 rw Over-subtraction factor of echo (direct and early components). min .. max attenuation
GAMMA_ENL        float 5 0 rw Over-subtraction factor of non-linear echo. min .. max attenuation
GAMMA_ETAIL      float 3 0 rw Over-subtraction factor of echo (tail components). min .. max attenuation
GAMMA_NN         float 3 0 rw Over-subtraction factor of non- stationary noise. min .. max attenuation
GAMMA_NN_SR      float 3 0 rw Over-subtraction factor of non-stationary noise for ASR. 
                                                            [0.0 .. 3.0] (default: 1.1)
GAMMA_NS         float 3 0 rw Over-subtraction factor of stationary noise. min .. max attenuation
GAMMA_NS_SR      float 3 0 rw Over-subtraction factor of stationary noise for ASR. 
                                                            [0.0 .. 3.0] (default: 1.0)
HPFONOFF         int 3 0 rw High-pass Filter on microphone signals.
                                                            0 = OFF
                                                            1 = ON - 70 Hz cut-off
                                                            2 = ON - 125 Hz cut-off
                                                            3 = ON - 180 Hz cut-off
MIN_NN           float 1 0 rw Gain-floor for non-stationary noise suppression.
                                                            [−inf .. 0] dB (default: −10dB = 20log10(0.3))
MIN_NN_SR        float 1 0 rw Gain-floor for non-stationary noise suppression for ASR.
                                                            [−inf .. 0] dB (default: −10dB = 20log10(0.3))
MIN_NS           float 1 0 rw Gain-floor for stationary noise suppression.
                                                            [−inf .. 0] dB (default: −16dB = 20log10(0.15))
MIN_NS_SR        float 1 0 rw Gain-floor for stationary noise suppression for ASR.
                                                            [−inf .. 0] dB (default: −16dB = 20log10(0.15))
NLAEC_MODE       int 2 0 rw Non-Linear AEC training mode.
                                                            0 = OFF
                                                            1 = ON - phase 1
                                                            2 = ON - phase 2
NLATTENONOFF     int 1 0 rw Non-Linear echo attenuation.
                                                            0 = OFF
                                                            1 = ON
NONSTATNOISEONOFF int 1 0 rw Non-stationary noise suppression.
                                                            0 = OFF
                                                            1 = ON
NONSTATNOISEONOFF_SR int 1 0 rw Non-stationary noise suppression for ASR.
                                                            0 = OFF
                                                            1 = ON
RT60             float 0.9 0.25 ro Current RT60 estimate in seconds
RT60ONOFF        int 1 0 rw RT60 Estimation for AES. 0 = OFF 1 = ON
SPEECHDETECTED   int 1 0 ro Speech detection status.
                                                            0 = false (no speech detected)
                                                            1 = true (speech detected)
STATNOISEONOFF   int 1 0 rw Stationary noise suppression.
                                                            0 = OFF
                                                            1 = ON
STATNOISEONOFF_SR int 1 0 rw Stationary noise suppression for ASR.
                                                            0 = OFF
                                                            1 = ON
TRANSIENTONOFF   int 1 0 rw Transient echo suppression.
                                                            0 = OFF
                                                            1 = ON
VOICEACTIVITY    int 1 0 ro VAD voice activity status.
                                                            0 = false (no voice activity)
                                                            1 = true (voice activity)
```

**Q2: ImportError: No module named usb.core**

A2: Run sudo pip install pyusb to install the pyusb.

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python tuning.py DOAANGLE
Traceback (most recent call last):
  File "tuning.py", line 5, in <module>
    import usb.core
ImportError: No module named usb.core
pi@raspberrypi:~/usb_4_mic_array $ sudo pip install pyusb
Collecting pyusb
  Downloading pyusb-1.0.2.tar.gz (54kB)
    100% |████████████████████████████████| 61kB 101kB/s 
Building wheels for collected packages: pyusb
  Running setup.py bdist_wheel for pyusb ... done
  Stored in directory: /root/.cache/pip/wheels/8b/7f/fe/baf08bc0dac02ba17f3c9120f5dd1cf74aec4c54463bc85cf9
Successfully built pyusb
Installing collected packages: pyusb
Successfully installed pyusb-1.0.2
pi@raspberrypi:~/usb_4_mic_array $ sudo python tuning.py DOAANGLE
DOAANGLE: 180
```

**Q3: 你们有树莓派 alexa 应用的示例吗？**

A3: 是的，我们可以将麦克风阵列 v3.0 连接到树莓派 USB 端口，并按照 [Raspberry Pi Quick Start Guide with Script](https://github.com/alexa/avs-device-sdk/wiki/Raspberry-Pi-Quick-Start-Guide-with-Script) 来实现与 alexa 的语音交互。

**Q4: 你们有 Mic array v3.0 与 ROS 系统的示例吗？**

A4: 是的，感谢 Yuki 分享了将 [ReSpeaker Mic Array v2 与 ROS (Robot Operating System) 中间件集成](https://github.com/furushchev/respeaker_ros) 的软件包。

**Q5: 如何启用 3.5mm 音频端口来接收信号以及 USB 端口？**

A5: 请下载 [新固件](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/i2s_i1o2.bin) 并按照 [如何更新固件](https://wiki.seeedstudio.com/ReSpeaker_Mic_Array_v2.0/#update-firmware) 来烧录 XMOS。

## 资源

- **[PDF]** [ReSpeaker MicArray v3.0 原理图](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/v3/202004229_ReSpeakerMicArray_V3.0_SCH%26PCB_250427.zip)
- **[PDF]** [ReSpeaker MicArray v3.0 产品简介](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/ReSpeaker%20MicArray%20v2.0%20Product%20Brief.pdf)
- **[PDF]** [ReSpeaker MicArray v3.0 3D 模型](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/RESPEAKER%20MIC%20v2.0.pdf)
- **[SKP]** [ReSpeaker MicArray v3.0 3D 模型](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/Respeaker%20Microphone%20Array%20v2.0_20180316.skp.zip)
- **[STP]** [ReSpeaker MicArray v3.0 3D 模型](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/RESPEAKER%20MIC-3D%20v2.0.stp.zip)
- **[PDF]** [XVF3000 产品简介](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/XVF3000-3100-product-brief_1.4.pdf)
- **[PDF]** [XVF3000 数据手册](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/XVF3000-3100-TQ128-Datasheet_1.0.pdf)
- **[Github]** [ReSpeaker Mic Array v2 与 ROS (Robot Operating System) 中间件](https://github.com/furushchev/respeaker_ros)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
