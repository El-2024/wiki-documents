---
description: ReSpeaker USB 麦克风阵列
title: ReSpeaker USB 麦克风阵列
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ReSpeaker-USB-Mic-Array
last_update:
  date: 1/12/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/ReSpeaker-USB-Mics/img/Bazaar/ReSpeaker-USB-Mics-box-preview.jpg)

一个开箱即用的语音拾取设备，是客户的声音解决方案。

在过去的一年里，[Respeaker Mic Array V2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html) 已经以开发板的形式售出了超过 10,000 个单元。客户不断要求提供一个带外壳的完整设备，因为设计这样的设备对他们来说是一个挑战，尤其是考虑到声学原理。

现在，Seeed 提供了答案——ReSpeaker USB 麦克风阵列：

- 一个开箱即用的设备，拥有精心设计的声学结构，为客户集成到他们的解决方案中提供了灵活性。
- 提供模具注塑外壳，节省了进入市场的时间和模具成本。

ReSpeaker USB 麦克风阵列内部的 PCBA 与 Respeaker Mic Array V2.0 的区别：

- 优化了电源电路
- 将音频插孔和 Micro USB 接口移至背面。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-USB-Mic-Array-p-4247.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 远场语音捕捉
- 支持 USB 音频类 1.0 (UAC 1.0)
- 四麦克风阵列
- 12 个可编程 RGB LED 指示灯
- 语音算法和功能
  - 语音活动检测
  - 到达方向检测
  - 波束形成
  - 噪声抑制
  - 去混响
  - 声学回声消除

## 规格

- XMOS 的 XVF-3000
- 4 个高性能数字麦克风
- 支持远场语音捕捉
- 芯片内置语音算法
- 12 个可编程 RGB LED 指示灯  
- 麦克风：ST MP34DT01TR-M  
- 灵敏度：-26 dBFS（全向）  
- 声学过载点：120 dBSPL  
- 信噪比：61 dB  
- 电源：通过 Micro USB 提供 5V DC  
- 尺寸：直径 70mm  
- 3.5mm 音频插孔输出接口  
- 功耗：5V，LED 开启时 180mA，LED 关闭时 170mA  
- 最大采样率：16Khz

## 硬件概览

![](https://files.seeedstudio.com/wiki/ReSpeaker-Mic-Array-v2.1/img/hardware_overview.jpg)

- **<font face="" size="3" font color="ff0000">①</font> XMOS XVF-3000：**
集成了高级 DSP 算法，包括声学回声消除（AEC）、波束形成、去混响、噪声抑制和增益控制。

- **<font face="" size="3" font color="ff0000">②</font> 数字麦克风：**
MP34DT01-M 是一种超紧凑、低功耗、全向数字 MEMS 麦克风，采用电容感应元件和 IC 接口构建。

- **<font face="" size="3" font color="ff0000">③</font> RGB LED：**
三色 RGB LED。

- **<font face="" size="3" font color="ff0000">④</font> USB 接口：**
提供电源并控制麦克风阵列。

- **<font face="" size="3" font color="ff0000">⑤</font> 3.5mm 耳机插孔：**
输出音频，可以将有源扬声器或耳机插入此接口。

- **<font face="" size="3" font color="ff0000">⑥</font> WM8960：**
WM8960 是一个低功耗立体声编解码器，具有 Class D 扬声器驱动器，可为 8Ω 负载提供每通道 1W 功率。

**系统框图**
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/system_diag.png)

## 应用场景

- USB语音采集
- 智能音箱
- 智能语音助手系统
- 语音录音设备
- 语音会议系统
- 会议通信设备
- 语音交互机器人
- 汽车语音助手
- 其他语音接口场景

## 入门指南

:::note
ReSpeaker USB Mic Array兼容Windows、Mac、Linux系统以及安卓。以下脚本在Python2.7上进行了测试。
:::

### 更新固件

以下是固件的差异表。

| 固件                                | 通道数 | 备注                                                                                          |
|------------------------------------|----------|-----------------------------------------------------------------------------------------------|
| 1_channel_firmware.bin             | 1        | 为语音识别（ASR）处理过的音频                                                                 |
| 6_channels_firmware.bin            | 6        | 通道0：为语音识别（ASR）处理过的音频，通道1-4：4个麦克风的原始数据，通道5：回放数据（出厂固件） |

**针对Linux系统：** 麦克风阵列支持USB DFU。我们开发了一个Python脚本dfu.py，通过USB更新固件。

```python
sudo apt-get update
sudo pip install pyusb click
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
sudo python dfu.py --download 6_channels_firmware.bin  # 6通道版本

# 如果您想使用1通道版本，命令应如下：

sudo python dfu.py --download 1_channel_firmware.bin

```

以下是固件下载结果。
![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Download_firmware.png)

**针对Windows/Mac系统：** 我们不建议使用Windows/Mac以及Linux虚拟机来更新固件。

### 开箱演示

以下是使用6通道固件进行声学回声消除（AEC）的示例。

- 第一步：将USB线连接到电脑，并将音频插孔连接到扬声器。

![](https://files.seeedstudio.com/wiki/ReSpeaker-USB-Mics/img/Bazaar/_DAS5930.jpg)

- 第二步：在电脑端选择麦克风阵列v2.1作为输出设备。
- 第三步：启动Audacity进行录音。
- 第四步：先在电脑端播放音乐，然后开始讲话。
- 第五步：您将在Audacity屏幕上看到如下界面，请点击**Solo**以听取每个通道的音频。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/Audacity.png)

通道0音频（经过算法处理）：

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel0_asr.wav"></source>
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel0_asr.ogg"></source>
</audio>

通道1音频（麦克风1原始数据）：

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel1_raw.wav"></source>
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel1_raw.ogg"></source>
</audio>

通道5音频（回放数据）：

<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel5_playback.wav"></source>
  <source type="audio/ogg" src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/channel5_playback.ogg"></source>
</audio>

以下是关于DOA和AEC的视频。

<iframe width="800" height="450" src="https://www.youtube.com/embed/gGVQ-9f7azs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 安装DFU和LED控制驱动

- **Windows：** 音频录制和回放默认情况下运行良好。Libusb-win32驱动仅用于在Windows上控制LED和DSP参数。我们使用[一个便捷工具 - Zadig](http://zadig.akeo.ie/)来为`SEEED DFU`和`SEEED Control`安装libusb-win32驱动（ReSpeaker Mic Array在Windows设备管理器中有两个设备）。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/img/usb_4mic_array_driver.png)

:::caution
    请确保选择libusb-win32，而不是WinUSB或libusbK。
:::

- **MAC：** 不需要驱动。
- **Linux：** 不需要驱动。

### 调试

**针对Linux/Mac/Windows：** 我们可以配置内置算法的一些参数。

- 获取完整参数列表，更多信息请参考FAQ。

```
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
python tuning.py -p
```

- 示例#1：我们可以关闭自动增益控制（AGC）：

```
sudo python tuning.py AGCONOFF 0
```

- 示例#2：我们可以检查DOA角度。

```
pi@raspberrypi:~/usb_4_mic_array $ sudo python tuning.py DOAANGLE
DOAANGLE: 180
```

### 控制LED

我们可以通过USB控制ReSpeaker USB Mic Array的LED。USB设备具有一个供应商特定类接口，可用于通过USB控制传输发送数据。我们参考了[pyusb Python库](https://github.com/pyusb/pyusb)，并开发了[usb_pixel_ring Python库](https://github.com/respeaker/pixel_ring/blob/master/pixel_ring/usb_pixel_ring_v2.py)。

LED控制命令通过pyusb的usb.core.Device.ctrl_transfer()发送，其参数如下：

```
ctrl_transfer(usb.util.CTRL_OUT | usb.util.CTRL_TYPE_VENDOR | usb.util.CTRL_RECIPIENT_DEVICE, 0, command, 0x1C, data, TIMEOUT)

```

以下是usb_pixel_ring的API。

| 命令   | 数据                           | API                            | 备注                                                                                                              |
|---------|--------------------------------|--------------------------------|-------------------------------------------------------------------------------------------------------------------|
| 0       | [0]                            | pixel_ring.trace()             | 跟踪模式，LED根据VAD*和DOA*变化                                                                                   |
| 1       | [red, green, blue, 0]          | pixel_ring.mono()              | 单色模式，将所有RGB LED设置为单一颜色，例如红色(0xFF0000)、绿色(0x00FF00)、蓝色(0x0000FF)                        |
| 2       | [0]                            | pixel_ring.listen()            | 监听模式，类似于跟踪模式，但不会关闭LED                                                                           |
| 3       | [0]                            | pixel_ring.speak()             | 等待模式                                                                                                         |
| 4       | [0]                            | pixel_ring.think()             | 讲话模式                                                                                                         |
| 5       | [0]                            | pixel_ring.spin()              | 旋转模式                                                                                                         |
| 6       | [r, g, b, 0] * 12              | pixel_ring.customize()         | 自定义模式，为每个LED设置其独立颜色                                                                              |
| 0x20    | [brightness]                   | pixel_ring.set_brightness()    | 设置亮度，范围：0x00~0x1F                                                                                         |
| 0x21    | [r1, g1, b1, 0, r2, g2, b2, 0] | pixel_ring.set_color_palette() | 设置颜色调色板，例如pixel_ring.set_color_palette(0xff0000, 0x00ff00)与pixel_ring.think()一起使用                  |
| 0x22    | [vad_led]                      | pixel_ring.set_vad_led()       | 设置中心LED：0 - 关闭，1 - 打开，其他 - 根据VAD变化                                                               |
| 0x23    | [volume]                       | pixel_ring.set_volume()        | 显示音量，范围：0 ~ 12                                                                                           |
| 0x24    | [pattern]                      | pixel_ring.change_pattern()    | 设置模式，0 - Google Home模式，其他 - Echo模式                                                                    |

**对于 Linux：** 以下是控制 LED 的示例。请按照以下命令运行演示。

```python
git clone https://github.com/respeaker/pixel_ring.git
cd pixel_ring
sudo python setup.py install
sudo python examples/usb_mic_array.py
```

以下是 usb_mic_array.py 的代码。

```python
import time
from pixel_ring import pixel_ring


if __name__ == '__main__':
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

**对于 Windows/Mac：** 以下是控制 LED 的示例。

- 第一步：下载 pixel_ring。

```python
git clone https://github.com/respeaker/pixel_ring.git
cd pixel_ring/pixel_ring
```

- 第二步：创建一个 [led_control.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/led_control.py)，将以下代码复制到文件中并运行 `python led_control.py`。

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
如果屏幕上打印出 "None"，请重新安装 libusb-win32 驱动程序。
:::

### DOA（到达方向）

**对于 Windows/Mac/Linux：** 以下是查看 DOA 的示例。绿色 LED 是声音方向的指示器。关于角度，请参考硬件概述。

- 第一步：下载 usb_4_mic_array。

```python
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
```

- 第二步：在 usb_4_mic_array 文件夹下创建一个 [DOA.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/DOA.py)，将以下代码复制到文件中并运行 `sudo python DOA.py`。

```python
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

- 第三步：我们将看到如下的 DOA 输出。

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

### VAD（语音活动检测）

**对于 Windows/Mac/Linux：** 以下是查看 VAD 的示例。红色 LED 是 VAD 的指示器。

- 第一步：下载 usb_4_mic_array。

```python
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
```

- 第二步：在 usb_4_mic_array 文件夹下创建一个 [VAD.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/VAD.py)，将以下代码复制到文件中并运行 `sudo python VAD.py`。

```python
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

- 第三步：我们将看到如下的 VAD 输出。

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
对于 VAD 的阈值，我们也可以使用 GAMMAVAD_SR 进行设置。请参考 [Tuning](https://wiki.seeedstudio.com/cn/ReSpeaker_Mic_Array_v2.0/#tuning) 获取更多详细信息。
:::

### 提取语音

我们使用 [PyAudio Python 库](https://people.csail.mit.edu/hubert/pyaudio/) 通过 USB 提取语音。

**对于 Linux：** 我们可以使用以下命令录制或播放语音。

```python
arecord -D plughw:1,0 -f cd test.wav # 录制，请先使用 arecord -l 检查声卡和硬件
aplay -D plughw:1,0 -f cd test.wav # 播放，请先使用 aplay -l 检查声卡和硬件
arecord -D plughw:1,0 -f cd |aplay -D plughw:1,0 -f cd # 同时录制和播放
```

我们也可以使用 Python 脚本提取语音。

- 第一步：运行以下脚本以获取麦克风阵列的设备索引号：

```python
sudo pip install pyaudio
cd ~
nano get_index.py
```

- 第二步：将以下代码复制并粘贴到 [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py)。

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

- 第四步：运行 `sudo python get_index.py`，我们将看到如下的设备 ID。

```
Input Device id  2  -  ReSpeaker 4 Mic Array (UAC1.0): USB Audio (hw:1,0)
```

- 第五步：将 `RESPEAKER_INDEX = 2` 更改为设备索引号。运行 Python 脚本 [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) 录制语音。

```python
import pyaudio
import wave

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 6 # 根据固件更改，1_channel_firmware.bin 为 1 或 6_channels_firmware.bin 为 6
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

- 第 6 步：如果您想从 6 个通道中提取通道 0 的数据，请参考以下代码。对于其他通道 X，请将 [0::6] 更改为 [X::6]。

```
import pyaudio
import wave
import numpy as np

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 6 # 根据固件更改，1_channel_firmware.bin 为 1 或 6_channels_firmware.bin 为 6
RESPEAKER_WIDTH = 2
# 运行 getDeviceInfo.py 获取索引
RESPEAKER_INDEX = 3  # 对应输入设备 ID
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

print("* 录音中")

frames = [] 

for i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    # 从 6 个通道中提取通道 0 的数据，如果您想提取通道 1，请更改为 [1::6]
    a = np.fromstring(data, dtype=np.int16)[0::6]
    frames.append(a.tostring())

print("* 录音完成")

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

**对于 Windows 系统：**

- 第 1 步：运行以下命令安装 pyaudio。

```
 pip install pyaudio
```

- 第 2 步：使用 [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) 获取设备索引。

```
C:\Users\XXX\Desktop>python get_index.py
Input Device id  0  -  Microsoft Sound Mapper - Input
Input Device id  1  -  ReSpeaker 4 Mic Array (UAC1.0)
Input Device id  2  -  Internal Microphone (Conexant I)
```

- 第 3 步：修改 [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) 的设备索引和通道数，然后提取语音。

```
C:\Users\XXX\Desktop>python record.py
* 录音中
* 录音完成
```

:::caution
    如果出现 "Error: %1 is not a valid Win32 application." 错误，请安装 Python Win32 版本。
:::

**对于 MAC 系统：**

- 第 1 步：运行以下命令安装 pyaudio。

```
 pip install pyaudio
```

- 第 2 步：使用 [get_index.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/get_index.py) 获取设备索引。

```
MacBook-Air:Desktop XXX$ python get_index.py 
Input Device id  0  -  Built-in Microphone
Input Device id  2  -  ReSpeaker 4 Mic Array (UAC1.0)
```

- 第 3 步：修改 [record.py](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/record.py) 的设备索引和通道数，然后提取语音。

```
MacBook-Air:Desktop XXX$ python record.py 
2018-03-24 14:53:02.400 Python[2360:16629] 14:53:02.399 WARNING:  140: 此应用程序或其使用的库正在使用已弃用的 Carbon Component Manager 来托管音频单元。未来版本将移除对此的支持。此外，这使得主机与版本 3 的音频单元不兼容。请迁移到 AudioComponent.h 中的 API。
* 录音中
* 录音完成
```

### 实时声音源定位与跟踪

[ODAS](https://github.com/introlab/odas) 是 Open embeddeD Audition System 的缩写。这是一个专门用于执行声音源定位、跟踪、分离和后期滤波的库。让我们来体验一下它的乐趣。

**对于 Linux 系统：**

- 第 1 步：获取 ODAS 并进行构建。

```
sudo apt-get install libfftw3-dev libconfig-dev libasound2-dev libgconf-2-4
git clone https://github.com/introlab/odas.git
mkdir odas/build
cd odas/build
cmake ..
make
```

- 第 2 步：获取 [ODAS Studio](https://github.com/introlab/odas_web/releases) 并打开它。

- 第 3 步：odascore 位于 **odas/bin/odaslive**，**配置文件**为 [odas.cfg](https://raw.githubusercontent.com/respeaker/usb_4_mic_array/master/odas.cfg)。

- 第 4 步：使用 6_channels_firmware.bin 升级麦克风阵列，该固件包含 4 通道原始音频数据。

<iframe width="800" height="500" src="https://www.youtube.com/embed/K5gZabfaaPI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 常见问题解答

**问题1：内置算法的参数**

```
pi@raspberrypi:~/usb_4_mic_array $ python tuning.py -p
名称              类型 最大值 最小值 读/写 信息
-----------------------------------------------
AECFREEZEONOFF    int  1     0     rw 自适应回声消除器更新抑制。
                                                            0 = 启用适应
                                                            1 = 冻结适应，仅过滤
AECNORM           float 16    0.25 rw AEC滤波器系数的规范限制
AECPATHCHANGE     int  1     0     ro AEC路径变化检测。
                                                            0 = false（未检测到路径变化）
                                                            1 = true（检测到路径变化）
AECSILENCELEVEL   float 1     1e-09 rw AEC中信号检测的阈值 [-inf .. 0] dBov（默认值：-80dBov = 10log10(1x10-8)）
AECSILENCEMODE    int  1     0     ro AEC远端静音检测状态。
                                                            0 = false（检测到信号）
                                                            1 = true（检测到静音）
AGCDESIREDLEVEL   float 0.99  1e-08 rw 输出信号的目标功率水平。
                                                            [−inf .. 0] dBov（默认值：−23dBov = 10log10(0.005)）
AGCGAIN           float 1000  1     rw 当前AGC增益因子。
                                                            [0 .. 60] dB（默认值：0.0dB = 20log10(1.0)）
AGCMAXGAIN        float 1000  1     rw 最大AGC增益因子。
                                                            [0 .. 60] dB（默认值：30dB = 20log10(31.6)）
AGCONOFF          int  1     0     rw 自动增益控制。
                                                            0 = 关闭
                                                            1 = 开启
AGCTIME           float 1     0.1   rw 上升/下降时间常数（单位：秒）。
CNIONOFF          int  1     0     rw 舒适噪声插入。
                                                            0 = 关闭
                                                            1 = 开启
DOAANGLE          int  359   0     ro DOA角度。当前值。方向取决于构建配置。
ECHOONOFF         int  1     0     rw 回声抑制。
                                                            0 = 关闭
                                                            1 = 开启
FREEZEONOFF       int  1     0     rw 自适应波束形成器更新。
                                                            0 = 启用适应
                                                            1 = 冻结适应，仅过滤
FSBPATHCHANGE     int  1     0     ro FSB路径变化检测。
                                                            0 = false（未检测到路径变化）
                                                            1 = true（检测到路径变化）
FSBUPDATED        int  1     0     ro FSB更新决策。
                                                            0 = false（FSB未更新）
                                                            1 = true（FSB已更新）
GAMMAVAD_SR       float 1000  0     rw 设置语音活动检测的阈值。
                                                            [−inf .. 60] dB（默认值：3.5dB 20log10(1.5)）
GAMMA_E           float 3     0     rw 回声（直接和早期成分）的过度减弱因子。最小..最大衰减
GAMMA_ENL         float 5     0     rw 非线性回声的过度减弱因子。最小..最大衰减
GAMMA_ETAIL       float 3     0     rw 回声（尾部成分）的过度减弱因子。最小..最大衰减
GAMMA_NN          float 3     0     rw 非平稳噪声的过度减弱因子。最小..最大衰减
GAMMA_NN_SR       float 3     0     rw 用于ASR的非平稳噪声的过度减弱因子。
                                                            [0.0 .. 3.0]（默认值：1.1）
GAMMA_NS          float 3     0     rw 平稳噪声的过度减弱因子。最小..最大衰减
GAMMA_NS_SR       float 3     0     rw 用于ASR的平稳噪声的过度减弱因子。
                                                            [0.0 .. 3.0]（默认值：1.0）
HPFONOFF          int  3     0     rw 麦克风信号的高通滤波器。
                                                            0 = 关闭
                                                            1 = 开启 - 70 Hz截止
                                                            2 = 开启 - 125 Hz截止
                                                            3 = 开启 - 180 Hz截止
MIN_NN            float 1     0     rw 非平稳噪声抑制的增益底线。
                                                            [−inf .. 0] dB（默认值：−10dB = 20log10(0.3)）
MIN_NN_SR         float 1     0     rw 用于ASR的非平稳噪声抑制的增益底线。
                                                            [−inf .. 0] dB（默认值：−10dB = 20log10(0.3)）
MIN_NS            float 1     0     rw 平稳噪声抑制的增益底线。
                                                            [−inf .. 0] dB（默认值：−16dB = 20log10(0.15)）
MIN_NS_SR         float 1     0     rw 用于ASR的平稳噪声抑制的增益底线。
                                                            [−inf .. 0] dB（默认值：−16dB = 20log10(0.15)）
NLAEC_MODE        int  2     0     rw 非线性AEC训练模式。
                                                            0 = 关闭
                                                            1 = 开启 - 阶段1
                                                            2 = 开启 - 阶段2
NLATTENONOFF      int  1     0     rw 非线性回声衰减。
                                                            0 = 关闭
                                                            1 = 开启
NONSTATNOISEONOFF int  1     0     rw 非平稳噪声抑制。
                                                            0 = 关闭
                                                            1 = 开启
NONSTATNOISEONOFF_SR int 1    0     rw 用于ASR的非平稳噪声抑制。
                                                            0 = 关闭
                                                            1 = 开启
RT60              float 0.9   0.25  ro 当前RT60估计值（单位：秒）
RT60ONOFF         int  1     0     rw AES的RT60估计。
                                                            0 = 关闭
                                                            1 = 开启
SPEECHDETECTED    int  1     0     ro 语音检测状态。
                                                            0 = false（未检测到语音）
                                                            1 = true（检测到语音）
STATNOISEONOFF    int  1     0     rw 平稳噪声抑制。
                                                            0 = 关闭
                                                            1 = 开启
STATNOISEONOFF_SR int  1     0     rw 用于ASR的平稳噪声抑制。
                                                            0 = 关闭
                                                            1 = 开启
TRANSIENTONOFF    int  1     0     rw 瞬态回声抑制。
                                                            0 = 关闭
                                                            1 = 开启
VOICEACTIVITY     int  1     0     ro VAD语音活动状态。
                                                            0 = false（无语音活动）
                                                            1 = true（有语音活动）
```

**Q2: ImportError: No module named usb.core**

A2: 运行`sudo pip install pyusb`命令安装 pyusb：

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

**Q3: 是否有用于 Raspberry Alexa 应用的示例？**

A3: 有，我们可以将麦克风阵列 v2.0 连接到 Raspberry 的 USB 端口，并按照 [Raspberry Pi 快速入门指南和脚本](https://github.com/alexa/avs-device-sdk/wiki/Raspberry-Pi-Quick-Start-Guide-with-Script) 进行 Alexa 的语音交互。

**Q4: 是否有用于 Mic Array v2.1 与 ROS 系统的示例？**

A4: 有，感谢 Yuki 分享了用于集成 [ReSpeaker USB Mic Array 与 ROS（机器人操作系统）中间件](https://github.com/furushchev/respeaker_ros) 的包。

**Q5: 如何启用 3.5mm 音频端口以接收信号，同时使用 USB 端口？**

A5: 请下载 [新固件](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/i2s_i1o2.bin)，并按照 [如何更新固件](https://wiki.seeedstudio.com/cn/ReSpeaker_Mic_Array_v2.0/#update-firmware) 的步骤烧录 XMOS。

**Q6: 运行 "sudo pip install pyaudio" 时出现 #include "portaudio.h" 错误。**

A6: 请运行以下命令解决问题：

```
sudo apt-get install portaudio19-dev
```

## 资源

- **[PDF]** [ReSpeaker USB Mic Array 尺寸图](https://files.seeedstudio.com/wiki/ReSpeaker-USB-Mics/res/dimension.pdf)
- **[DWG]** [ReSpeaker USB Mic Array 外壳 3D 模型](https://files.seeedstudio.com/wiki/ReSpeaker-USB-Mics/res/case.dwg)
- **[PDF]** [XVF3000 产品简介](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/XVF3000-3100-product-brief_1.4.pdf)
- **[PDF]** [XVF3000 数据手册](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array_V2/res/XVF3000-3100-TQ128-Datasheet_1.0.pdf)

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