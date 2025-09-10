---
description: ReSpeaker 麦克风阵列
title: ReSpeaker 麦克风阵列
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ReSpeaker_Mic_Array
last_update:
  date: 1/12/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/respeaker_mic_array.jpeg)

## 描述

ReSpeaker 麦克风阵列可以直接堆叠（连接）到 ReSpeaker Core 的顶部，从而显著提升语音交互体验。它基于 XMOS 的 XVSM-2000 智能麦克风开发。该板集成了 7 个 PDM 麦克风，有助于将 ReSpeaker 的声学 DSP 性能提升到更高水平。

## 主要特点

- 远场语音捕捉
- 声源定位
- 波束形成
- 噪声抑制
- 去混响
- 声学回声消除

## 技术规格

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/respeaker_mic_array.jpeg)

- XVSM-2000，内置 16 个核心：
  - 16 个实时逻辑核心，分布于 2 个 xCore 芯片。
  - 核心在双发射模式下共享最高 2000 MIPS。
  - 512KB 内部单周期 SRAM 和 2MB 内置闪存。
  - 16KB 内部 OTP（每个芯片最大 8KB）。
  - USB PHY，完全符合 USB 2.0 规范。
  - 可编程 I/O。
  - 支持 DFU 模式。
- 7 个数字麦克风：
  - 适用于远场语音识别或声音定位。
  - ST MP34DT01-M。
  - -26 dBFS 灵敏度。
  - 120 dBSPL 声学过载点。
  - 61 dB 信噪比。
  - 全向灵敏度。
  - PDM 输出。
- 12 个 RGB LED：
  - 256 级亮度。
  - 800kHz 数据传输速率。
- 音频输出：
  - 板载 3.5mm Aux 输出。
  - WOLFSON WM8960。
  - 24 或 16 位 16kHz 立体声输出。
  - 在 3.3V 下，16 Ω 输出功率为 40 mW。
- 时钟同步：
  - 板载 PLL。
  - 可编程 DAC 和麦克风采样时钟。
    （如果 XVSM-2000 使用 DSP，则禁用）。
- 电源供应：
  - 通过 Micro USB 或扩展头提供 5V 电源。
- 尺寸：
  - 直径 70mm。
- 重量：
  - 15.25g

## ReSpeaker 麦克风阵列驱动程序

- 对于 Windows 用户，请点击 [这里](https://github.com/Fuhua-Chen/ReSpeaker_Microphone_Array_Driver) 安装驱动程序
- 对于 Linux 或 Mac 用户，无需安装驱动程序

## 使用 ReSpeaker Core 提取语音

当麦克风阵列堆叠在 ReSpeaker Core 上时，它会被自动检测到（通过 `aplay -l` 检查）。我们建议您使用我们的 [respeaker_python_library](https://github.com/respeaker/respeaker_python_library) 来开发语音交互应用程序，这样您无需担心麦克风阵列是否已连接。我们的库会自动检查并在麦克风阵列连接时选择它。

此外，在该库中，基于 **Pyaudio** 的 [*Microphone 类*](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/microphone.py) 提供了一个名为 [*listen*](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/microphone.py#L207) 的方法，用于提取语音。请参阅我们的 [示例代码](https://github.com/respeaker/respeaker_python_library/blob/master/examples/SpeechRecognition_translator.py) 了解使用方法。

## 在 PC、Mac、Linux 或 Raspberry Pi 上提取语音

以下是一个基于 Pyaudio 的示例：

首先，运行以下脚本以获取麦克风阵列的设备索引号：

```python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "输入设备 ID ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```

然后，将 `RESPEAKER_INDEX = 1` 更改为您的设备索引号。运行以下脚本以录制语音：

```python
import pyaudio
import wave

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 2
RESPEAKER_WIDTH = 2
# 运行 getDeviceInfo.py 获取索引
RESPEAKER_INDEX = 1
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

print("* 正在录音")

frames = []

for i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    frames.append(data)

print("* 录音完成")

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

## ReSpeaker 麦克风阵列固件

您可以在 [这里](https://github.com/Fuhua-Chen/ReSpeaker_Microphone_Array_Firmware) 下载用于 DFU 的 ReSpeaker 麦克风阵列固件。我们提供了两个版本：

- **xvsm 版本**：初始版本，输出带有 DSP 支持的 2 通道数据。
- **raw 版本**：输出 8 通道麦克风原始数据，此固件不支持 xvsm DSP，因此不支持一些功能，例如 DOA、AEC 等。

请参阅 [这里](https://github.com/respeaker/mic_array_dfu) 了解 **在 Linux 上更新固件**。
请参阅 [这里](https://github.com/jerryyip/respeaker_micarray_dfu_mac_linux) 了解 **在 Mac 上更新固件**。

## 用于控制 ReSpeaker 麦克风阵列的 HID

用户可以通过 USB HID 控制 ReSpeaker 麦克风阵列。请参阅我们的 [通信协议](https://github.com/Fuhua-Chen/ReSpeaker-Microphone-Array-HID-tool)。

注意，如果您使用最新的 **raw 版本**，您只能控制 LED。

以下是一个 Python 示例：

```python
#!/usr/bin/env python

import respeaker.usb_hid as usb_hid

class MicArray:
    def __init__(self):
        self.hid = usb_hid.get()

    def write(self, address, data):
        data = self.to_bytearray(data)
        length = len(data)
        if self.hid:
            packet = bytearray([address & 0xFF, (address >> 8) & 0x7F, length & 0xFF, (length >> 8) & 0xFF]) + data
            packet = list(packet)
            self.hid.write(packet)

    def read(self, address, length):
        self.hid.write(list(bytearray([address & 0xFF, (address >> 8) & 0xFF | 0x80, length & 0xFF, (length >> 8) & 0xFF])))
        for _ in range(6):
            data = self.hid.read()
            # print [int(x) for x in data]
            # 跳过 VAD 数据
            if int(data[0]) != 0xFF and int(data[1]) != 0xFF:
                return data[4:(4 + length)]

    @staticmethod
    def to_bytearray(data):
        if type(data) is int:
            array = bytearray([data & 0xFF])
        elif type(data) is bytearray:
            array = data
        elif type(data) is str:
            array = bytearray(data)
        elif type(data) is list:
            array = bytearray(data)
        else:
            raise TypeError('%s 类型不支持' % type(data))
        return array

def main():
    import sys
    import struct

    mic = MicArray()

    print("使用: %s" % usb_hid.usb_backend)

    if len(sys.argv) < 3:
        print('用法: python {} w 0x0 0x000003'.format(sys.argv[0]))
        sys.exit(1)

    try:
        if sys.argv[2].startswith('0x'):
            address = int(sys.argv[2], 16)
        else:
            address = int(sys.argv[2])

        if sys.argv[1] == 'w':
            if sys.argv[3].startswith('0x'):
                data = int(sys.argv[3], 16)
            else:
                data = int(sys.argv[3])

            if data > 0xFFFF:
                data = struct.pack('<I', data)
            elif data > 0xFF:
                data = struct.pack('<H', data)

            mic.write(address, data)
        else:
            print [int(x) for x in mic.read(address, 4)]
    except Exception as e:
        print(e.message)

if __name__ == '__main__':
    main()
```

## 常见问题解答

### 问题 1：如何通过 *xvsm 版本* 固件从麦克风阵列获取音频源方向？

  在使用 Windows 时，请按照[指南](https://github.com/respeaker/get_started_with_respeaker/wiki/Mic-Array)操作，或者使用我们的 [HID 工具](https://github.com/Fuhua-Chen/ReSpeaker-Microphone-Array-HID-tool)。

  Python 和 C 的 hidapi 示例代码在[这里](https://github.com/elthef/respeaker-xmos-hid)。

### 问题 2：如何在 Windows 上使用 Audacity 提取 8 通道原始数据？

  请选择 Windows WASAPI，这里是相关图片。如果您需要将固件版本从 0x032 切换到 0x082，在操作之前，请先在设备管理中卸载您的设备。卸载后，通过 DFU 更新固件并重新安装设备。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/audacity.png)

### 问题 3：麦克风阵列如何与 Respeaker Core 通信？

  麦克风阵列通过 USB 与 Respeaker Core 通信。

### 问题 4：[ReSpeaker-Microphone-Array-HID-tool](https://github.com/Fuhua-Chen/ReSpeaker-Microphone-Array-HID-tool) 中的 VAD 代表什么？

  ![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/VAD.png)

  | 数据  | 角度 |
  |-------|------|
  | 1e, 0 | 30   |
  | e, 1  | 270  |
  | d2,0  | 210  |
  | 96,0  | 150  |

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0%20Eagle%20File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle]** [ReSpeaker Microphone Array 原理图](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0.sch.zip)
- **[Eagle]** [ReSpeaker Microphone Array PCB](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0.brd.zip)
- **[PDF]** [ReSpeaker Microphone Array 原理图](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0%20Sch.pdf)
- **[PDF]** [ReSpeaker Microphone Array PCB](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0%20PCB.pdf)

## 项目

**在 RPi 上使用 ReSpeaker Mic Array 构建 Google Assistant**：借助 ReSpeaker Mic Array，现在我们可以在 Raspberry Pi 上构建 Google Assistant！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/build-google-assistant-on-rpi-with-respeaker-mic-array-1030bb/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式以满足不同的需求和偏好。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>