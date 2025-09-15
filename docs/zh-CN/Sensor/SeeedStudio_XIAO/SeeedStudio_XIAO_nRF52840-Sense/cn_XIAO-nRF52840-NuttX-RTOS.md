---
description: XIAO nRF52840(sense) With NuttX(RTOS)
title: XIAO nRF52840(sense) With NuttX(RTOS)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nuttx.webp
slug: /cn/xiao_nrf52840_nuttx
last_update:
    date: 02/12/2025
    author: rcsim
---

# Seeed Studio XIAO nRF52840 与 NuttX(RTOS)

## 介绍

[NuttX](https://nuttx.apache.org/) 是一个成熟的实时操作系统（RTOS），以其标准合规性和小占用空间而广受认可。NuttX 的主要特性之一是其可扩展性，使其能够在从 8 位微控制器到 64 位系统的各种环境中使用。这种灵活性通过遵循 POSIX 和 ANSI 标准来实现，使您能够在来自不同架构、系列和半导体供应商的各种芯片上体验类似的 NuttX 功能。

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nuttx.svg"/></div>

此外，NuttX 提供了许多先进且有用的功能，如 USB、以太网、音频和图形子系统。这些特性使 NuttX 成为寻求能够在各种类型硬件上运行的多功能、强大 RTOS 的开发者的有吸引力的选择。

NuttX 支持大量且不断扩展的开发板。[官方文档](https://nuttx.apache.org/docs/latest/platforms/) 提供了按架构和片上系统（SoC）系列组织的支持开发板的完整列表。

例如，NuttX 文档中的 [Seeed Studio Xiao nRF52840](https://nuttx.apache.org/docs/latest/platforms/arm/nrf52/boards/xiao-nrf52840/index.html) 页面提供了每个支持功能的详细描述和如何使用它们的说明。此外，NuttX 文档中还有一个专门针对 [Nordic Semiconductor nRF52](https://nuttx.apache.org/docs/latest/platforms/arm/nrf52/index.html) 系列芯片的页面。

## 工具设置

在 XIAO nRF52840 上开始使用 NuttX 的第一步是安装 UF2 工具，该工具用于将 hex 文件格式转换为 uf2，然后下载 NuttX 源代码本身。Nuttx 为不同平台提供了一个[指南](https://nuttx.apache.org/docs/latest/quickstart/install.html)。按照以下步骤操作：

1. 下载 UF2 工具：

    ```bash
    git clone https://github.com/microsoft/uf2.git
    ```

2. 创建工作空间

    ```bash
    mkdir nuttxspace
    ```

3. 克隆仓库

    ```bash
    cd nuttxspace
    git clone https://github.com/apache/nuttx.git nuttx
    git clone https://github.com/apache/nuttx-apps apps
    ```

Apache Nuttx 分为两个项目：

- Nuttx：包含已实现的内核、驱动程序和子系统。
- Apps：包含工具、shell、网络实用程序、库和解释器的集合。

## 应用程序

要启动应用程序，需要在 NuttX 上加载配置，调用命令：

```bash
./tools/configurate.sh board_name:your_application
```

Also it's possible to check the list of board-supported a running the command:

```bash
./tools/configurate.sh -L
```

4. 构建 NuttX

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh xiao-nrf52840:nsh
    make V=1
    ```

5. 使用 U2F 工具将 nuttx.hex 转换为 UF2 格式：

    ```bash
    python3 uf2/utils/uf2conv.py -c -f 0xADA52840 -i nuttx.hex -o nuttx.uf2
    ```

6. 连接 Seeed Studio XIAO nRF52840，通过快速双击进入引导加载程序模式。开发板将被检测为 USB 大容量存储设备。然后将 "nuttx.uf2" 复制到设备中。

## 实践操作

现在是实际探索 NuttX 的时候了。在本节中，提供了三个应用程序：NSH、USBNSH 和 JUMBO。

### NSH

NuttShell(NSH) 是用于 NuttX 的 shell 系统，类似于 bash 和其他类似选项。它支持丰富的内置命令集、脚本编写以及将您自己的应用程序作为"内置"（同一个 NuttX 二进制文件的一部分）运行的能力。NSH 配置使用 115200 bps 在 UART0 启用控制台。

我们可以通过清除之前的配置来开始构建过程

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Now we select the NSH configuration to the xiao-nrf5200 board:

```bash
./tools/configurate.sh xiao-nrf52840:nsh
```

Compile the source code.

```bash
make -j
```

Convert nuttx.hex to UF2 format using U2F Tools:

```bash
python3 uf2/utils/uf2conv.py -c -f 0xADA52840 -i nuttx.hex -o nuttx.uf2
```

将固件加载到您的开发板中，并将USB转串口连接到TX和RX引脚，然后运行串口通信程序，如minicon或picocom：

```bash
picocom -b 115200 /dev/ttyUSB0
```

Access the NuttShell console:

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> 
```

Typing `?`, you will access the available options for commands and built-in applications.

```bash
nsh> ?
help usage: [-v] [<cmd>]

    .           cp          exec        ls          reboot      truncate    
    [           cmp         exit        mkdir       rm          uname       
    ?           dirname     expr        mkrd        rmdir       umount      
    alias       date        false       mount       set         unset       
    unalias     dd          fdinfo      mv          sleep       uptime      
    basename    df          free        pidof       source      usleep      
    break       dmesg       help        printf      test        xd          
    cat         echo        hexdump     ps          time        
    cd          env         kill        pwd         true        

Builtin Apps:
    getprime    hello       nsh         ostest      sh 
```

让我们向 NuttX 问好，输入 `hello`，然后它执行命令：

```bash
nsh> hello
Hello, World!!
```

恭喜，您与 NuttX 的第一次交互已完成。

### USBNSH

类似于 NSH 配置，但使用 CDC/ACM 串口（控制台在 USB 端口启用，波特率为 115200 bps）。

我们可以通过清除之前的配置来开始构建过程

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Now we select the NSH configuration to the xiao-nrf5200 board:

```bash
./tools/configurate.sh xiao-nrf52840:usbnsh
```

Compile the source code.

```bash
make -j
```

Convert nuttx.hex to UF2 format using U2F Tools:

```bash
python3 uf2/utils/uf2conv.py -c -f 0xADA52840 -i nuttx.hex -o nuttx.uf2
```

Load the firmware into you board, run a serial communication program such as minicon or picocom:

```bash
picocom -b 115200 /dev/ttyACM0
```

You must to press Enter 3 times, and then this message will show in the terminal.

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> 
```

### JUMBO

此配置启用了两个示例应用程序：gpio 和 leds。通用输入/输出（GPIO）是微控制器最基本的部分，允许它连接到外部世界。这样我们将使用 NSH 来访问和配置这些引脚。但首先，让我们清除之前的配置。

```bash
cd ~/nuttxspace/nuttx
make distclean
```

Select the jumbo configuration to the xiao-nrf52840 board.

```bash
./tools/configurate.sh xiao-nrf52840:jumbo
```

Compile de the source code.

```bash
make -j
```

Load the firmware into you board, run a serial communication program such as minicon or picocom:

```bash
picocom -b 115200 /dev/ttyACM0
```

You must to press Enter 3 times, and then this message will show in the terminal.

```bash
NuttShell (NSH) NuttX-12.8.0
nsh>
```

要查看与此应用程序交互时接受哪些选项，请输入 `gpio -h`，它将返回参数列表。

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> gpio -h
USAGE: gpio [-t <pintype>] [-w <signo>] [-o <value>] <driver-path>
       gpio -h
Where:
 <driver-path>: The full path to the GPIO pin driver.
 -t <pintype>:  Change the pin to this pintype (0-10):
 -w <signo>:    Wait for a signal if this is an interrupt pin.
 -o <value>:    Write this value (0 or 1) if this is an output pin.
mation and exit.
Pintypes:
  0: GPIO_INPUT_PIN
  1: GPIO_INPUT_PIN_PULLUP
IO_INPUT_PIN_PULLDOWN
  3: GPIO_OUTPUT_PIN
  4: GPIO_OUTPUT_PIN_OPENDRAIN
  5: GPIO_INTERRUPT_PIN
  6: GPIO_INTERRUPT_HIGH_PIN
  7: GPIO_INTERRUPT_LOW_PIN
  8: GPIO_INTERRUPT_RISING_PIN
  9: GPIO_INTERRUPT_FALLING_PIN
 10: GPIO_INTERRUPT_BOTH_PIN
```

要确认 GPIO 设备文件已创建，请输入 `ls/dev`。输入后，您可以看到一些 gpio 在 [xiao-nrf52840.h](https://github.com/apache/nuttx/blob/5b9d535ce6d7089a55742a748d7111f31ec74204/boards/arm/nrf52/xiao-nrf52840/src/xiao-nrf52840.h#L61) 中被声明定义，它们代表：

- 板载 RGB LED：

  - RGB_RED   -> P0.26
  - RGB_GREEN -> P0.30
  - RGB_BLUE  -> P0.06

- GPIO
  - 1 个输入          - P0.02(/dev/gpio0)
  - 1 个中断输入 - P0.03(/dev/gpio2)
  - 1 个输出          - P0.28(/dev/gpio1)

```bash
nsh> ls /dev
/dev:
 console
 gpio0
 gpio1
 gpio2
 null
 ttyACM0
 userleds
 zero
nsh> 
```

按照以下命令读取 gpio0 和 gpio2（带中断）并写入 gpio1。

```bash
nsh> gpio /dev/gpio0
Driver: /dev/gpio0
  Input pin:     Value=0
nsh> gpio /dev/gpio0
Driver: /dev/gpio0
  Input pin:     Value=1

nsh> gpio -o 0 /dev/gpio1
Driver: /dev/gpio1
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0

nsh> gpio -w 1 /dev/gpio2
Driver: /dev/gpio2
  Interrupt pin: Value=0
  Verify:        Value=1
```

USERLEDS 是一个子系统，允许通过单个操作来控制 LED。此外，您可以使用类似 printf 的命令行。在这个演示中，我们将每隔 1 秒钟打开和关闭板载 RGB LED。

输入 `leds`，您会观察到 LED 同时闪烁。

```bash
NuttShell (NSH) NuttX-12.8.0
nsh> leds
leds_main: Starting the led_daemon
leds_main: led_daemon started

led_daemon (pid# 3): Running
led_daemon: Opening /dev/userleds
led_daemon: Supported LEDs 0x07
led_daemon: LED set 0x01
nsh> led_daemon: LED set 0x02
led_daemon: LED set 0x03
led_daemon: LED set 0x04
led_daemon: LED set 0x05
led_daemon: LED set 0x06
led_daemon: LED set 0x07
```

查看下面的 gpio 和 leds 示例演示视频：

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-nRF52840-NuttX/nrf52840_nuttx_demo.mp4" type="video/mp4" />
  </video>
</div>


有关 NuttX RTOS 的更多信息，请访问 [NuttX 文档](https://nuttx.apache.org/docs/latest/index.html)

## ✨ 贡献者项目

- 此项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) 支持。
- 特别感谢 [Rodrigo](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92947609) 的专注努力。您的工作将被[展示](https://wiki.seeedstudio.com/contributors/)。

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
