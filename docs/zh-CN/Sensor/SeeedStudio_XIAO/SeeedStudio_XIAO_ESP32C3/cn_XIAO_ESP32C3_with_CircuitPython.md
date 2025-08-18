---
description: Seeed Studio XIAO ESP32C3 与 CircuitPython
title: XIAO ESP32C3 与 CircuitPython
keywords:
- xiao
- esp32c3
- circuitpython
image: https://files.seeedstudio.com/wiki/esp32c3_circuitpython/title.png
slug: /cn/xiao_esp32c3_with_circuitpython
last_update:
  date: 08/14/2024
  author: Evelyn Chen
---

# **Seeed Studio XIAO ESP32C3 与 CircuitPython**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/title.png" /></div>

本教程介绍如何在 Seeed Studio XIAO ESP32C3 开发板上安装和运行由 Adafruit Industries 开发的官方 CircuitPython！
CircuitPython 是一种编程语言，旨在简化在低成本微控制器板上进行实验和学习编程的过程。它让入门变得比以往任何时候都更容易，无需预先下载桌面软件。一旦设置好开发板，打开任何文本编辑器，就可以开始编辑代码。更多信息，请参考[这里](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython)。

## 安装 CircuitPython

### 方法 1：命令行 esptool

#### 安装 Esptool
如果您还没有安装 esptool.py，可以在您的电脑上使用 pip 进行安装：

``` linux
pip install esptool
```

#### 下载 XIAO ESP32C3 CircuitPython 固件
您需要从 [circirtpython.org](https://circuitpython.org/board/seeed_xiao_esp32c3/) 下载固件二进制文件
下载正确的 bin 文件后，导航到该文件夹，并在那里打开一个 cmd 终端。
截至最终草稿，最新版本的 bin 文件是：

```
adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin
```

#### 将 XIAO ESP32C3 连接到您的电脑

您需要在将 Type C USB 线缆插入电脑时，按住 XIAO ESP32C3 板上的 BOOT 按钮以进入"引导加载程序"模式。

#### 检查端口

找出您电脑上的所有串行设备。


* Linux 

在 Linux 上，您可以使用 *dmesg* 命令查看连接的设备：

```Linux
dmesg | grep tty
```

或者，您可以使用 *ls* 列出串行设备：

```
ls /dev/ttyS* /dev/ttyUSB*
```

* Windows

在 Windows 上，您可以通过设备管理器检查串行端口。查看"端口 (COM 和 LPT)"部分以查看可用的串行端口。您也可以在命令提示符中使用 mode 命令列出串行端口：

```
mode
```

* macOS

在 macOS 上，您可以使用 *ls* 命令列出可用的串行端口：

```
ls /dev/cu*
```

这将显示所有串行端口设备。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/1.png" /></div>

:::tip
如果端口忙碌，您可以使用以下命令查找并终止使用该端口的进程（在 macOS 上）：
识别使用端口的进程：

```
lsof | grep port
```

此命令列出打开的文件并搜索使用指定端口的任何进程。
从输出中找到进程 ID（PID）并终止进程：

```
kill -9 <PID>
```

将 *PID* 替换为找到的实际进程 ID。
:::


#### 擦除闪存

```linux
esptool.py --chip esp32c3 --port /dev/cu.usbmodem11301 erase_flash
```

将 '/dev/cu.usbmodem11301' 替换为您系统中正确的端口名称（例如 Windows 上的 `COM3`，Linux 上的 `/dev/ttyUSB0`）。


#### 写入闪存
将固件刷写到 XIAO ESP32C3：

```linux
esptool.py --chip esp32c3 --port /dev/cu.usbmodem11301 --baud 460800 write_flash -z 0x0 adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin
```

同样，将 '/dev/cu.usbmodem11301' 替换为正确的端口名称，将 'adafruit-circuitpython-seeed_xiao_esp32c3-en_GB-9.1.1.bin' 替换为您的空白固件文件的路径。
通过 RTS 引脚进行硬复位...


### 方法 2：Web Serial esptool
WebSerial ESPTool 被设计为一个支持 Web 的选项，用于对具有基于串行的 ROM 引导加载程序的 Espressif ESP 系列微控制器板进行编程。它允许您擦除微控制器的内容并在不同偏移量处编程多达 4 个文件。请参考 [Web Serial ESPtool](https://learn.adafruit.com/circuitpython-with-esp32-quick-start/web-serial-esptool)。

然后可以开始使用您喜欢的工具将脚本编译到 XIAO ESP32C3！

## 推荐的 CircuitPython 编辑器

通常，当 CircuitPython 完成安装，或者您将已安装 CircuitPython 的 CircuitPython 开发板插入计算机时，该开发板会在您的计算机上显示为名为 CIRCUITPY 的 USB 驱动器。
但是，不支持原生 USB 的 ESP32 或 ESP32-C3 微控制器无法显示 CIRCUITPY 驱动器。
在这些开发板上，有其他方法来传输和编辑文件。您可以使用 [Thonny](https://thonny.org/)，它使用发送到 REPL 的隐藏命令来读取和写入文件。或者您可以使用在 Circuitpython 8 中引入的 [CircuitPython web workflow](https://code.circuitpython.org/)。Web workflow 提供基于浏览器的 WiFi 访问 CircuitPython 文件系统，请参考 [getting started with web workflow using the code editor](https://learn.adafruit.com/getting-started-with-web-workflow-using-the-code-editor/overview.)

### 1. Thonny
安装并打开 thonny，然后按照说明配置 Thonny：

```
pip install thonny
#安装后打开 thonny
thonny
```

转到 Run-->Configure Interpreter，确保 Thonny 选项中的 Interpreter 选项卡如下所示，选择"CircuitPython (generic)"和端口：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/2.png" /></div>

在对话框中点击"OK"，您应该会在 thonny 窗口底部看到 Micropython shell，如下图所示。
然后您可以使用 **R**ead-**E**valuate-**P**rint-**L**oop，或 REPL 进行串行连接，这允许您输入单独的代码行并在 shell 中立即运行它们。如果您在特定程序中遇到问题并且无法找出原因，这非常方便。它是交互式的，因此非常适合测试新想法。请参考 [REPL](https://learn.adafruit.com/welcome-to-circuitpython/the-repl) 获取更多信息。

使用 *help()* 与 REPL 交互，它会告诉您从哪里开始探索 REPL。要在 REPL 中运行代码，请在 REPL 提示符旁边输入代码。
要列出内置模块，请输入 *help("modules")*，会显示内置到 CircuitPython 中的所有核心模块列表，包括"*board*"。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/3.png" /></div>

然后可以在 REPL 中输入 *"import board"* 并按回车。接下来，在 REPL 中输入 *"dir(board)"* 并获取开发板上所有引脚的列表。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/4.png" /></div>

### 2. CircuitPython Web Workflow

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/5.png" /></div>

[The CircuitPython Code Editor](https://code.circuitpython.org/) 在编辑运行最新版本 CircuitPython 的基于 ESP32 的设备上的文件时，提供了更完整和更丰富的体验。
该编辑器允许您使用 web Bluetooth、USB 和通过 WiFi 的 Web Workflow 来编辑文件。

## 引脚/端口信息

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/6.png" /></div>

* 更多信息请参考[硬件概述](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started/#hardware-overview)
* [Seeed Studio XIAO ESP32C3 原理图](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-SCH.pdf)


## 在 XIAO ESP32C3 上开始使用 CircuitPython

### 网络-WLAN

对于没有原生 USB 的开发板（如 ESP32-C3 或 ESP32），您需要使用 REPL 连接到 Wi-Fi。当在 CircuitPython 文件系统的根文件夹中添加名为 *settings.toml* 的文件时，Wi-Fi 功能就会启用。
通过 REPL 创建 *settings.toml* 文件：

```r
f = open('settings.toml', 'w')
f.write('CIRCUITPY_WIFI_SSID = "wifissid"\n')
f.write('CIRCUITPY_WIFI_PASSWORD = "wifipassword"\n')
f.write('CIRCUITPY_WEB_API_PASSWORD = "webpassword"\n')
f.close()
```

* 将 *wifissid* 替换为您本地 wifi 网络的名称
* 将 *wifipassword* 替换为您本地 wifi 密码
* 另一个密码 *webpassword* 用于通过网页浏览器访问开发板时使用。将其设置为您想要的任何密码

连接后，您可以按下 **Reset** 按钮重启固件，然后按几次回车键进入 REPL 提示符。然后重新连接设备到 Thonny，您的 XIAO ESP32C3 的 IP 地址就会显示出来。

:::note
别忘了，ESP32 不支持 5 GHz 网络，所以如果您有两个网络，请使用您的 2.4 GHz SSID。
:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/7.png" /></div>

### 延时和定时

*time* 模块：

```python
import time
time.sleep(1)           # 休眠 1 秒
time.sleep_ms(500)      # 休眠 500 毫秒
time.sleep_us(10)       # 休眠 10 微秒
start = time.ticks_ms() # 获取毫秒计数器
delta = time.ticks_diff(time.ticks_ms(), start) # 计算时间差
```


### 引脚和 GPIO

可以使用模块 "*board*" 和 "*microcontroller*" 通过以下代码控制 gpio，并将 LED 连接到 D5：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/14.png" /></div>

```python
# 使用 board 模块
import board
import digitalio
import time

led = digitalio.DigitalInOut(board.D5)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True  # 点亮 LED
    time.sleep(1)
    led.value = False  # 熄灭 LED
    time.sleep(1)
    
# 使用 microcontroller 模块
import microcontroller
import digitalio
import time

led = digitalio.DigitalInOut(microcontroller.pin.GPIO7)
led.direction = digitalio.Direction.OUTPUT

while True:
    led.value = True  # 点亮 LED
    time.sleep(1)
    led.value = False  # 熄灭 LED
    time.sleep(1)
```
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/8.png" /></div>

### UART(串行总线)

使用 *busio* 模块：

```python
import board
import busio

# 初始化 UART
uart = busio.UART(board.TX, board.RX, baudrate=9600)

# 发送数据
uart.write(b"Hello UART\n")

# 接收数据
while True:
    if uart.in_waiting > 0:
        data = uart.read()
        print("Received:", data)

```

XIAO ESP32C3 有一个硬件 UART。引脚列表如下：

| UART | 引脚 |
|------|-----|
| TX   | D6  |
| RX   | D7  |

### PWM(脉宽调制)

使用 *pwmio* 模块：

```python
import board
import pwmio
from digitalio import DigitalInOut
import time

# 初始化 PWM
pwm = pwmio.PWMOut(board.D5, frequency=5000, duty_cycle=0)

# 调光 LED
while True:
    for duty_cycle in range(0, 65535, 1000):
        pwm.duty_cycle = duty_cycle
        time.sleep(0.1)

```

### ADC(模数转换)

使用 *analogio* 模块：

```python
import board
import analogio
import time

# 初始化 ADC
adc = analogio.AnalogIn(board.A0)

while True:
    value = adc.value
    print("ADC Value:", value)
    time.sleep(1)

```

### SPI

```python
import board
import busio
import digitalio

# 初始化 SPI
spi = busio.SPI(board.SCK, board.MOSI, board.MISO)

# 选择芯片
cs = digitalio.DigitalInOut(board.D5)
cs.direction = digitalio.Direction.OUTPUT
cs.value = True 

# 发送和接收数据
data_out = bytearray([0x01, 0x02, 0x03])
data_in = bytearray(3)
spi.write_readinto(data_out, data_in)
print("Received:", data_in)
```

| SPI  | 引脚 |
|------|-----|
| SCK  | D8  |
| MOSI | D10 |
| MISO | D9  |

### I2C

```python
import board
import busio

# 初始化 I2C
i2c = busio.I2C(board.SCL, board.SDA, frequency=400000)
```

### XIAO 扩展板底座

*前提条件*：

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3<br /> 已焊接排针</th>
      <th>XIAO 扩展板底座</th>
      <th>Grove 光传感器</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/15.png" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/16.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

#### 读取光传感器数据

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/9.png" /></div>

```python
import time
import board
import analogio

# 在A0引脚上初始化模拟输入
analog_in = analogio.AnalogIn(board.A0)

def get_voltage(pin):
    return (pin.value * 3.3) / 65536

while True:
    # 读取原始模拟值
    raw_value = analog_in.value
    # 将原始值转换为电压
    voltage = get_voltage(analog_in)
    
    # 将原始值和电压打印到串行控制台
    print("[Light] Raw value: {:5d} Voltage: {:.2f}V".format(raw_value, voltage))
    
    # 在再次读取之前延迟一小段时间
    time.sleep(1)
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/10.png" /></div>

#### 点亮OLED屏幕

**下载并解压库包**：
* 前往[库](https://circuitpython.org/libraries)并下载适用于CircuitPython的库包。要安装，请下载适合您的CircuitPython版本的相应包。

**将库复制到CIRCUITPY**：

* 解压库包ZIP文件。您将找到一个名为lib的文件夹，其中包含各种*.mpy*文件。
* 打开Thonny-->View-->Files，然后将必要的.mpy文件和lib文件夹复制到CircuitPython设备/lib。
您需要从包中手动安装必要的库：
  * adafruit_ssd1306
  * adafruit_bus_device
  * adafruit_register
  * adafruit_framebuf.mpy

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/11.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/12.png" /></div>

**创建您的CircuitPython代码**：

* 创建一个code.py文件（或main.py）。此文件应包含您的CircuitPython代码。

```python
import board
import busio
import displayio
import adafruit_ssd1306
import terminalio

# 初始化I2C
i2c = busio.I2C(board.SCL, board.SDA)

# 定义显示参数
oled_width = 128
oled_height = 64

# 初始化OLED显示屏
oled = adafruit_ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)

# 用颜色0填充显示屏
oled.fill(0)
# 将第一个像素设置为白色
oled.pixel(0, 0, 1)
oled.show()
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/esp32c3_circuitpython/13.png" /></div>


## "卸载"CircuitPython

我们的许多开发板可以与多种编程语言一起使用。例如，Circuit Playground Express可以与MakeCode、Code.org CS Discoveries、CircuitPython和Arduino一起使用。您可能想要回到Arduino或MakeCode。没有什么需要卸载的。CircuitPython只是"另一个程序"，被加载到您的开发板中。因此，您可以简单地加载另一个程序（Arduino或MakeCode），它将覆盖CircuitPython。

### 备份您的代码

在替换CircuitPython之前，不要忘记备份您在CIRCUITPY驱动器上的代码。这意味着您的*code.py*和任何其他文件、lib文件夹等。当您移除CircuitPython时，您可能会丢失这些文件，所以备份是关键！只需将文件拖到您的笔记本电脑或台式电脑上的文件夹中，就像您对任何USB驱动器所做的那样。

### 转移到Arduino

如果您想使用Arduino，您只需使用Arduino IDE加载Arduino程序。这里是上传一个简单的"Blink"Arduino程序的示例，但您不必使用这个特定的程序。
首先插入您的开发板，然后双击复位，直到您看到板载LED灯亮起。

感谢您阅读本文！欢迎在评论中分享您的想法。

## 资源

* [XIAO ESP32C3 的固件二进制文件](https://circuitpython.org/board/seeed_xiao_esp32c3/)，适用于 CircuitPython
* [CircuitPython 的库包](https://circuitpython.org/libraries)

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