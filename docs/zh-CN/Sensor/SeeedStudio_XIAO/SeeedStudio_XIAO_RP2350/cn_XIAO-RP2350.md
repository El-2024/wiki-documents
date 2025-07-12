---
title: 入门指南：Seeed Studio XIAO RP2350（MicroPython）
description: |
  XIAO RP2350 是 Seeed Studio 推出的尖端微控制器。它具有双核处理器、扩展的 SRAM 和闪存，以及增强的连接功能。
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/RP2350-thumbnail.webp
slug: /cn/getting-started-xiao-rp2350
last_update:
  date: 05/15/2025
  author: Spencer
keywords:
  - xiao
  - RP2350
sidebar_position: 0
---

# 初始化 GPIO25 为输出引脚，用于控制 USER LED

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Seeed Studio XIAO RP2350

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550%20XIAO%20RP2350-45font.jpg"
    style={{ width: 480, height: 'auto', "border-radius": '12.8px' }}
  />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html?utm_source=seeed&utm_medium=wiki">
  <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
  </a>
</div><br></br>

XIAO RP2350 将 Raspberry Pi RP2350 的强大性能（双 Cortex-M33 核心，运行频率为 150MHz，带 FPU，增强的安全性和加密功能）融入经典的 XIAO 外形尺寸中。其尺寸仅为 21x17.8mm，配备 19 个多功能 GPIO、一个 RGB LED 和一个电池管理系统，具有超低功耗（50μA）、电池供电以及直接电池电压测量功能。得益于 XIAO 生态系统，XIAO RP2350 兼容多种扩展模块，包括显示屏、LED 矩阵、Grove 模块、CAN 总线、视觉 AI 传感器和毫米波传感器。它原生支持 MicroPython、C 和 C++，非常适合各级开发者创建紧凑型、支持电池供电的智能控制、可穿戴设备、DIY 键盘等应用。

## 特性

- **强大的 MCU 板：** 配备 Raspberry Pi RP2350 芯片，具有对称双核 Arm Cortex-M33 @ 150MHz 和 FPU。
- **增强的安全功能：** 内置安全启动和加密引导加载程序，确保应用程序安全。
- **软件支持：** 兼容 C/C++ 和 MicroPython，确保项目开发和原型制作的便利性。
- **丰富的板载资源：** 集成 RGB LED、2MB 闪存、520kB SRAM 和 19 个多功能 GPIO（模拟、数字、I²C、UART、SPI、PWM）。
- **新增 8 个 IO：** 相较于之前的 XIAO MCU，在背面增加了 8 个 IO 引脚，支持更复杂的应用。
- **高效的电源设计：** 睡眠模式下功耗仅为 50μA，支持电池供电。通过内部 IO 直接测量电池电压，增强电池管理系统（BMS）。
- **紧凑的拇指大小设计：** 尺寸为 21 x 17.8mm，采用 Seeed Studio 的经典 XIAO 外形，非常适合空间受限的应用。
- **适合量产：** 表面贴装器件（SMD）设计，所有组件位于正面，两侧带有焊盘孔，便于高效量产。

## 规格

<table align="center">
    <tr>
        <td>产品</td>
        <td>XIAO RP2040</td>
        <td><b>XIAO RP2350</b></td>
    </tr>
    <tr>
        <td rowspan="2">处理器</td>
        <td>Raspberry Pi RP2040</td>
        <td>Raspberry Pi RP2350</td>
    </tr>
    <tr>
        <td>双 Cortex-M0+ @ 133MHz</td>
        <td>双 Cortex-M33 @ 150MHz，带 FPU</td>
    </tr>
    <tr>
        <td>RAM</td>
        <td>264kB SRAM</td>
        <td>520kB SRAM</td>
    </tr>
    <tr>
        <td>闪存</td>
        <td>板载 2MB</td>
        <td>2MB 闪存</td>
    </tr>
    <tr>
        <td>LED</td>
        <td>1 个用户 LED（3 色），1 个电源 LED，1 个 RGB LED</td>
        <td>1 个用户 LED，1 个充电 LED（电池充电指示灯），1 个 RGB LED</td>
    </tr>
    <tr>
        <td>接口</td>
        <td>11 个引脚：4x 模拟，11x 数字，1x I²C，1x UART，1x SPI，全部支持 PWM</td>
        <td><b>19 个引脚：3x 模拟，19x 数字，2x I²C，2x UART，2x SPI，全部支持 PWM</b></td>
    </tr>
    <tr>
        <td>按钮</td>
        <td align="center" colspan="2">1 个 RESET 按钮，1 个 BOOT 按钮</td>
    </tr>
    <tr>
        <td>安全性</td>
       <td align="center"> - </td>
        <td>OTP，安全启动，Arm TrustZone</td>
    </tr>
    <tr>
        <td>低功耗</td>
       <td align="center"> - </td>
        <td>4.2V/50μA</td>
    </tr>
    <tr>
        <td>软件兼容性</td>
        <td>Arduino，PlatformIO，MicroPython，CircuitPython，Zephyr，<a href="https://wiki.seeedstudio.com/xiao_topic_page/">更多即将支持</a></td>
        <td>Arduino，PlatformIO，MicroPython，CircuitPython，<a href="https://wiki.seeedstudio.com/xiao_topic_page/">更多即将支持</a></td>
    </tr>
    <tr>
        <td>工作温度</td>
        <td align="center" colspan="2">-20°C~70°C</td>
    </tr>
    <tr>
        <td>尺寸</td>
        <td align="center" colspan="2">21x17.8 mm</td>
    </tr>
</table>

## 硬件概览

<div class="table-center">
<table align="center">
 <tr>
     <th>XIAO RP2350 前部引脚图</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-front.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 前部引脚图" /></div></td>
 </tr>
    <tr>
     <th>XIAO RP2350 背部引脚图</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-back.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 背部引脚图" /></div></td>
 </tr>
    <tr>
     <th>XIAO RP2350 组件</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-components.png" style={{width:480, height:'auto'}} alt="XIAO RP2350 组件" /></div></td>
 </tr>
</table>
</div>

需要更多关于引脚图的详细信息？请查看下方的 [资源与资产](#assets--resources)。

## 支持的平台

XIAO RP2350 由 RP2350 提供支持，支持 MicroPython 和 Raspberry Pi 提供的 C/C++ SDK。这种灵活性使开发者能够选择自己喜欢的编程语言和环境进行原型设计和开发。

<div class="table-center">
  <table align="center">
    <tr>
      <th>C/C++ SDK</th>
      <th>MicroPython</th>
    </tr>
    <tr>
      <td style={{ textAlign: 'center' }}>
        <img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/C%2B%2B-Logo.wine.png" alt="c-cpp logo" width={200} height="auto" />
      </td>
      <td style={{ textAlign: 'center' }}>
        <img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" alt="MicroPython" width={200} height="auto" />
      </td>
    </tr>
  </table>
</div>

## 入门指南▶️

:::info 注意
本页面主要面向 MicroPython 用户。如果您对学习 SDK 编程感兴趣或是高级用户，可以从 [Raspberry Pi Pico 系列 C/C++ SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf) 开始。这份指南将帮助您设置环境并通过示例代码入门。此外，您还可以访问 [XIAO RP2350 的 C/C++ SDK](/xiao-rp2350-c-cpp-sdk) 获取与 XIAO RP2350 相关的具体说明。
:::

:::warning MicroPython 固件问题

截至 **2024 年 11 月 10 日**，可从 [MicroPython.org for RPI_PICO2](https://micropython.org/download/RPI_PICO2/) 下载的稳定 MicroPython 固件版本 **`1.24.0`** 当前由于闪存芯片的差异 **与某些设备不兼容**。

**Seeed 团队**正在与官方 MicroPython 维护者积极合作解决此问题。在此期间，您可以使用 MicroPython 固件的 **预览版本** 作为临时解决方案：[RP2350 MicroPython 固件预览版](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/RPI_PICO2-20240809-v1.24.0-preview.201.g269a0e0e1.uf2)

:::

### 第一步：在 XIAO RP2350 上安装 MicroPython

要在 XIAO RP2350 上安装 MicroPython 固件，请按照以下步骤操作：

**步骤 1.1 下载 MicroPython 固件：**  

- 访问 [MicroPython 下载页面](https://micropython.org/download/RPI_PICO2/)。
- 下载与 XIAO RP2350 兼容的最新 `.uf2` 固件文件。

**步骤 1.2 进入 BOOTSEL 模式：**  

您可以通过以下两种方法之一进入 XIAO RP2350 的 BOOTSEL 模式：

<Tabs>
<TabItem value="method1" label="方法 1：连接电脑前" default>

1. **按住 BOOT 按钮：**  
   在您的 XIAO RP2350 未连接电脑时，**按住** BOOT 按钮。
2. **连接到电脑：**  
   按住 BOOT 按钮的同时，使用 USB 数据线将 XIAO RP2350 连接到您的电脑。
3. **释放 BOOT 按钮：**  
   板子连接到电脑后，您可以释放 BOOT 按钮。XIAO RP2350 现在应该处于 BOOTSEL 模式，您的电脑会将其识别为一个可移动存储设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-no-charge.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/>
<div style={{ marginTop: '-8px' }}><em>按住 BOOT -> 插入数据线 -> 释放 BOOT</em></div>
</div>

</TabItem>

<TabItem value="method2" label="方法 2：已连接电脑时">

1. **按住 BOOT 按钮：**  
   在 XIAO RP2350 已连接到电脑的情况下，按住 BOOT 按钮。
2. **点击 RESET 按钮：**  
   按住 BOOT 按钮的同时，按下并释放 RESET 按钮，该按钮在板子底部右下角标记为 "B"。
3. **释放 BOOT 按钮：**  
   按下 RESET 按钮后，释放 BOOT 按钮。XIAO RP2350 现在应该处于 BOOTSEL 模式，您的电脑会将其识别为一个可移动存储设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-charged.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/>
<div style={{ marginTop: '-8px' }}><em>按住 BOOT -> 点击 RESET -> 释放 BOOT</em></div>
</div>

</TabItem>
</Tabs>

**步骤 1.3 安装固件：**  

- **拖放** 下载的 `.uf2` 文件到 XIAO RP2350 的可移动存储驱动器中。
- 文件复制完成后，板子会自动重启，完成固件安装。

### 第二步：安装 Thonny IDE

:::tip 关于 MicroPython

[MicroPython](https://micropython.org/) 是一种类似于 [Python](https://www.python.org/) 的解释型语言。然而，与 Python 不同的是，MicroPython 直接运行在硬件上（裸机），提供交互式提示（REPL）以立即执行命令，同时支持运行和导入内置文件系统中的脚本。

要连接到 XIAO RP2350 板并开始编写和运行您的 Python 代码，您可以使用任何支持串口连接的终端工具，例如 minicom、PuTTY、electerm、warp 等。为了获得更 *用户友好的体验*，您可以使用 **[Thonny](https://thonny.org/)**，它具有易用性、集成功能和适合初学者的界面。这样，您可以直接在设备上编写和运行 Python 代码。

:::

Thonny IDE 是一个适合初学者的 Python 编辑器，非常适合 MicroPython 开发。以下是安装步骤：

1. **下载 Thonny：**  
   - 访问 [Thonny 下载页面](https://thonny.org/)。
   - 选择适合您操作系统（Windows、macOS 或 Linux）的安装程序并下载。

2. **安装 Thonny：**  
   - **运行** 下载的安装程序。
   - **按照**屏幕上的说明完成安装过程。

3. **配置 Thonny 以支持 MicroPython：**  
   - **打开** Thonny IDE。
   - 查看 Thonny 窗口右下角。
   - 点击 **解释器** 选择区域。
   - 从下拉菜单中选择 **'MicroPython (RP2040)'**。
   - 确保选择正确的 **端口**——Thonny 通常会自动检测。

现在，您可以使用 Thonny IDE 在 XIAO RP2350 上编写和上传 MicroPython 代码了！

<Tabs>
  <TabItem value="thonny-mpy" label="Thonny IDE" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/thonny-mpy.png" style={{width:680, height:'auto'}}/></div>

</TabItem>
<TabItem value="putty-mpy" label="PuTTY 控制台">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/putty-mpy.png" style={{width:680, height:'auto'}}/></div>

</TabItem>
</Tabs>

如果你的设备已经准备好运行 MicroPython，让我们从一个简单的项目开始：

### 让它闪烁！✨

让开发板点亮一个 LED 通常是每个人运行的第一个程序。对于 XIAO RP2350 也是如此。

:::note
根据原理图，XIAO RP2350 上的 `USER LED`（黄色 LED）连接到 `GPIO25/D19`。
对于所有 XIAO 系列开发板，当设置为 `低电平` 时，`USER LED` 会**点亮**；当设置为 `高电平` 时，`USER LED` 会**熄灭**。
:::

<Tabs>
<TabItem value="blink" label="闪烁" default>

```python showLineNumbers
from machine import Pin # 从 machine 模块导入 Pin 类
from time import sleep  # 从 time 模块导入 sleep 函数

led = Pin(25, Pin.OUT) 

# 初始状态关闭 LED
led.value(1) # led.on() -> 高电平 -> 灯熄灭
sleep(0.5) # 等待 0.5 秒

# 打开 LED
led.value(0) # led.off() -> 低电平 -> 灯点亮
sleep(0.5) # 等待 0.5 秒

# 进入无限循环
while True:
    # 切换 LED 状态（从开到关或从关到开）
    led.toggle() 
    # 打印当前 LED 的状态
    print(f"LED {'ON' if led.value() == 0 else 'OFF'}")
    sleep(0.5) # 等待 0.5 秒后再切换
```

<table>
<tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/tonny-blink-led.png" style={{width:680, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-blink.gif" style={{width:400, height:'auto'}}/></div></td>
</tr>
</table>

</TabItem>
<TabItem value="pwm" label="LED 渐变" default>

```python title="examples/rp2/pwm_fade.py" showLineNumbers
# 使用 PWM 让 LED 渐变的示例。

import time
from machine import Pin, PWM

# 构造 PWM 对象，控制连接到 Pin(25) 的 LED。
pwm = PWM(Pin(25))

# 设置 PWM 频率。
pwm.freq(1000)

# 让 LED 渐亮和渐暗几次。
duty = 0
direction = 1
for _ in range(8 * 256):
    duty += direction
    if duty > 255:
        duty = 255
        direction = -1
    elif duty < 0:
        duty = 0
        direction = 1
    pwm.duty_u16(duty * duty)
    time.sleep(0.001)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-mpy-fade-led.gif" style={{width:240, height:'auto', "border-radius": '12.8px'}}/></div>

</TabItem>
</Tabs>

将代码复制到 Thonny IDE 中，如下图所示，只需点击 `运行当前脚本` 按钮或按下 `F5` 键即可。这将执行代码片段，你会看到 XIAO RP2350 上的 LED 开始闪烁。

### 玩转 RGB LED

XIAO RP2350 配备了一个内置的 RGB LED，你可以使用 MicroPython 来控制它。以下是一个循环显示不同颜色的示例：

```python showLineNumbers
import array, time, random
from machine import Pin
import rp2

NUM_LEDS = 1
LED_PIN = 22  # PICO_DEFAULT_WS2812_PIN
POWER_PIN = 23  # PICO_DEFAULT_WS2812_POWER_PIN

# 全局亮度变量（0.0 到 1.0）
BRIGHTNESS = 0.1

@rp2.asm_pio(sideset_init=rp2.PIO.OUT_LOW, out_shiftdir=rp2.PIO.SHIFT_LEFT, autopull=True, pull_thresh=24)
def ws2812():
    T1 = 2
    T2 = 5
    T3 = 3
    wrap_target()
    label("bitloop")
    out(x, 1)               .side(0)    [T3 - 1]
    jmp(not_x, "do_zero")   .side(1)    [T1 - 1]
    jmp("bitloop")          .side(1)    [T2 - 1]
    label("do_zero")
    nop()                   .side(0)    [T2 - 1]
    wrap()

# 设置电源引脚
power_pin = Pin(POWER_PIN, Pin.OUT)
power_pin.value(1)  # 打开 LED 电源

# 使用 ws2812 程序创建 StateMachine，输出到 LED_PIN
sm = rp2.StateMachine(0, ws2812, freq=8_000_000, sideset_base=Pin(LED_PIN))

# 启动 StateMachine，它将等待 FIFO 中的数据。
sm.active(1)

def set_led_color(color):
    sm.put(array.array("I", [color]), 8)

def random_color():
    return random.randint(0, 255) | (random.randint(0, 255) << 8) | (random.randint(0, 255) << 16)

def interpolate(color1, color2, factor):
    r1, g1, b1 = color1 & 255, (color1 >> 8) & 255, (color1 >> 16) & 255
    r2, g2, b2 = color2 & 255, (color2 >> 8) & 255, (color2 >> 16) & 255
    r = int(r1 + factor * (r2 - r1))
    g = int(g1 + factor * (g2 - g1))
    b = int(b1 + factor * (b2 - b1))
    return (b << 16) | (g << 8) | r

def apply_brightness(color, brightness):
    r, g, b = color & 255, (color >> 8) & 255, (color >> 16) & 255
    r = int(r * brightness)
    g = int(g * brightness)
    b = int(b * brightness)
    return (b << 16) | (g << 8) | r

print("开始随机颜色过渡并调整亮度...")

# 主循环
current_color = random_color()
while True:
    next_color = random_color()
    for i in range(100):  # 100 步实现平滑过渡
        transition_color = interpolate(current_color, next_color, i / 100)
        final_color = apply_brightness(transition_color, BRIGHTNESS)
        set_led_color(final_color)
        time.sleep_ms(20)  # 调整此值以更改过渡速度
    current_color = next_color

    # 可选：你可以在此处更改亮度以进行演示
    # BRIGHTNESS = random.random()  # 每个循环设置一个随机亮度
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-mpy-rgb-led.gif" style={{width:240, height:'auto', "border-radius": '12.8px'}}/></div>

### 电池与电源管理

无需额外组件就能读取电池电压？是的，使用 XIAO RP2350，这比以往更简单。在之前的 XIAO 系列成员（如 [XIAO ESP32C3](/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage)）中，读取电池电压需要手动通过电阻连接到 *A0*。

但在 XIAO RP2350 中，这一过程得到了简化。你现在可以直接使用 `A3/GPIO29` 引脚读取电池电压水平，从而简化你的设计和开发。只需记住将 `GPIO19` 引脚设置为高电平，因为这是启用电池电压读取所必需的。

按照以下代码片段，通过 Pico SDK 读取电池电压：

<Tabs>
  <TabItem value="python" label="MicroPython" default>

```python
from machine import Pin, ADC
import time

# 初始化 GPIO 引脚以启用电池电压读取的函数
def init_gpio():
    enable_pin = Pin(19, Pin.OUT)
    enable_pin.value(1)  # 将引脚设置为高电平以启用电池电压读取

def main():
    print("ADC 电池示例 - GPIO29 (A3)")
    
    init_gpio()  # 初始化启用引脚
    adc = ADC(Pin(29))  # 在 GPIO29 上初始化 ADC

    conversion_factor = 3.3 / (65535)  # 12 位 ADC 和 3.3V 参考电压的转换因子
    
    while True:
        result = adc.read_u16()  # 读取 ADC 值
        voltage = result * conversion_factor * 2  # 计算电压，考虑到电压分压器（乘以 2 的因子）
        print("原始值: 0x{:03x}, 电压: {:.2f} V".format(result, voltage))
        time.sleep(0.5)  # 延迟 500 毫秒

if __name__ == '__main__':
    main()
```

  </TabItem>
  <TabItem value="sdk" label="C/C++ SDK">

```c title='adc_bat.c'
#include <stdio.h>
#include "pico/stdlib.h"
#include "hardware/gpio.h"
#include "hardware/adc.h"

// 初始化 GPIO 引脚以启用电池电压读取的函数
void init_gpio() {
    const int enable_pin = 19; // 用于启用电池电压读取的引脚

    gpio_init(enable_pin); // 初始化引脚
    gpio_set_dir(enable_pin, GPIO_OUT); // 将引脚设置为输出
    gpio_put(enable_pin, 1); // 将引脚设置为高电平以启用电池电压读取
}

int main() {
    stdio_init_all(); // 初始化标准输入/输出
    printf("ADC 电池示例 - GPIO29 (A3)\n");

    init_gpio(); // 初始化启用引脚
    adc_init(); // 初始化 ADC

    // 初始化 ADC GPIO 引脚 (GPIO29)
    adc_gpio_init(29);
    // 选择 ADC 输入 3 (对应 GPIO29)
    adc_select_input(3);

    while (1) {
        // 12 位转换，假设最大值 == ADC_VREF == 3.3 V
        const float conversion_factor = 3.3f / (1 << 12); // 12 位 ADC 和 3.3V 参考电压的转换因子
        uint16_t result = adc_read(); // 读取 ADC 值
        // 计算电压，考虑到电压分压器（乘以 2 的因子）
        printf("原始值: 0x%03x, 电压: %f V\n", result, result * conversion_factor * 2); 
        sleep_ms(500); // 延迟 500 毫秒
    }
}
```

  </TabItem>
</Tabs>

## 资源与资产 {#assets--resources}

XIAO RP2350 利用 Raspberry Pi RP2350 的强大功能，并借助 Raspberry Pi 社区的丰富资源。这为您在这个小型开发板上定制项目提供了无限的创造力。以下是帮助您入门的关键资源和资产。

***数据手册与原理图***

- 📄 **[PDF]** [RP2350 数据手册](https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf)
- 📄 **[PDF]** [Seeed Studio XIAO RP2350 原理图](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/Seeed-Studio-XIAO-RP2350-v1.0.pdf)
- 📄 **[XLSX]** [Seeed Studio XIAO RP2350 引脚表](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-pinout-sheet.xlsx)
- 📄 **[DXF]** [Seeed Studio XIAO RP2350 尺寸 DXF 文件](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-dimension-v1.0.dxf)
- 🔗 **[链接]** [Seeed Studio XIAO RP2350 3D STEP 文件](https://grabcad.com/library/seeed-studio-xiao-rp2350-1)
- 📄 **[ZIP]** [Seeed Studio XIAO RP2350 v1.0 SCH&PCB](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO_RP2350_v1.0_SCH&PCB_240626.zip)

- 📄 **[UF2]** [低功耗测试固件](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/powman_timer-56.uf2)

***相关资源***

- 📄 **[PDF]** [Raspberry Pi Pico 系列入门指南](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf)：全面的指南，适合初学者学习 MicroPython 或 C/C++。
- 📄 **[PDF]** [Raspberry Pi Pico 系列 Python SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-python-sdk.pdf)：记录 MicroPython 设置教程和 API 的书籍。
- 📄 **[PDF]** [Raspberry Pi Pico 系列 C/C++ SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf)：记录 Pico C/C++ SDK API 的书籍。
- 🔗 **[Kicad]** [Seeed Studio XIAO RP2350 尺寸库](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### 扩展与应用

[XIAO 系列](/xiao_topic_page)拥有丰富的外设和配件供您学习和使用，无论您需要一个色彩丰富的屏幕以实现完美交互，还是一个集成了明亮简单 RGB 灯的板子，都可以在这里找到。

作为 XIAO 家族的一员，XIAO RP2350 同样如此。当然，为了更好地利用额外的引脚，新*外设和板子*将不断推出，充分发挥其性能。

- 🌟 **[扩展配件](/SeeedStudio_XIAO_Series_Introduction/#seeed-studio-xiao-series-compatible-accessories)**  
  探索与 XIAO 家族兼容的各种附加模块和配件，从显示屏和 LED 矩阵到 Grove 模块和传感器，了解它们如何增强您的项目。

### 社区与学习

此外，深入活跃的 Raspberry Pi 社区以扩展您的知识并发现新的项目创意。利用社区共享资源、论坛和教程来提升您使用 XIAO RP2350 的体验。除了 Seeed Studio Wiki，这里还有一些推荐的学习资源：

- **[Raspberry Pi 文档](https://www.raspberrypi.com/documentation/microcontrollers/rp2040.html)**：获取关于 RP2350 的可靠和最新信息。
- **[Raspberry Pi 论坛](https://www.raspberrypi.org/forums/)**：与其他爱好者互动，提问并分享您的项目。
- **[XIAO GitHub 仓库](https://github.com/Seeed-Studio/OSHW-XIAO-Series)**：探索官方 XIAO 仓库，获取更多集中化文档并与我们的团队互动，**加入我们！**
- **[r/embedded 在 Reddit](https://www.reddit.com/r/embedded/)**：加入嵌入式系统社区，分享见解并讨论各种主题。
- **[Pico 主题在 GitHub](https://github.com/topics/pico)**：探索与 Pico 相关的仓库和讨论。
- **[Hackster.io](https://www.hackster.io/)**：发现与 XIAO 和 Raspberry Pi 相关的项目和教程。
- **[Instructables](https://www.instructables.com/)**：查找 DIY 项目和逐步指南，使用 XIAO 和其他硬件创建。
- **[Element14 社区](https://www.element14.com/community/)**：参与与电子和嵌入式系统相关的讨论、网络研讨会和项目。

此外，欢迎随时在我们的 [Seeed Studio Discord](https://discord.com/invite/kpY74apCWj) 和 [Seeed Studio 论坛](https://forum.seeedstudio.com/) 上分享您的项目。这些平台为您提供了与其他创客交流、获取反馈和寻找灵感的绝佳机会。无论您是需要帮助解决问题、展示您的最新创作，还是希望成为一个支持性社区的一部分，*Seeed Studio 的 Discord 和论坛* 都是参与和协作的理想场所。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>