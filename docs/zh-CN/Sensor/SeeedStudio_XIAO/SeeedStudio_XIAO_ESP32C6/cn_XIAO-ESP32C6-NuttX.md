---
description: XIAO ESP32C6 搭载 NuttX(RTOS)
title: XIAO ESP32C6 搭载 NuttX(RTOS)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-ESP32C6-NuttX/nuttx.webp
slug: /cn/xiao_esp32c6_nuttx
last_update:
    date: 05/08/2025
    author: rcsim
---

# Seeed Studio XIAO ESP32C6 搭载 NuttX(RTOS)

## 简介

[NuttX](https://nuttx.apache.org/) 是一个成熟的实时操作系统 (RTOS)，以其符合标准和小巧的占用空间而广受认可。NuttX 的主要特点之一是其可扩展性，使其能够在从 8 位微控制器到 64 位系统的环境中使用。这种灵活性通过遵循 POSIX 和 ANSI 标准得以实现，使您能够在不同架构、系列和半导体厂商的芯片上实验类似的 NuttX 功能。

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-ESP32C6-NuttX/nuttx.svg"/></div>

此外，NuttX 提供了许多先进且实用的功能，例如 USB、以太网、音频和图形子系统。这些特性使 NuttX 成为开发者的一个有吸引力的选择，它能够在各种类型的硬件上运行，是一个多功能且强大的 RTOS。

NuttX 支持大量且不断扩展的开发板。[官方文档](https://nuttx.apache.org/docs/latest/platforms/) 提供了一个按架构和系统芯片 (SoC) 系列组织的支持板列表。

例如，NuttX 文档中的 [Seeed Studio XIAO ESP32C6](https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c6/boards/esp32c6-xiao/index.html) 页面详细描述了每个支持的功能以及如何使用它们。此外，NuttX 文档中还有一个专门针对 [Espressif ESP32C6](https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c6/index.html) 系列芯片的页面，您可以在其中找到支持的 MCU 和外设列表。

## 安装

NuttX 文档提供了一个适用于不同平台的[指南](https://nuttx.apache.org/docs/latest/quickstart/install.html)。对于 Seeed Studio XIAO ESP32C6，请按照以下步骤操作：

1. 下载 Espressif esptool(https://docs.espressif.com/projects/esptool/en/latest/esp32/)：

    ```bash
    ~/nuttxspace/nuttx$ esptool.py version
    esptool.py v4.8.1
    4.8.1
    ```

2. 创建一个工作区

    ```bash
    mkdir nuttxspace
    ```

3. 克隆代码库

    ```bash
    cd nuttxspace
    git clone https://github.com/apache/nuttx.git nuttx
    git clone https://github.com/apache/nuttx-apps apps
    ```

Apache Nuttx 被分为两个项目：

- Nuttx：包含内核、驱动程序和子系统的实现。
- Apps：包含工具、shell、网络实用程序、库和解释器的集合。

## 应用程序

要启动一个应用程序，需要在 NuttX 上加载一个配置，使用以下命令：

```bash
./tools/configurate.sh board_name:your_application
```

也可以通过运行以下命令检查支持的开发板列表：

```bash
./tools/configurate.sh -L
```

4. 构建 NuttX（构建过程将生成固件二进制文件，包括 nuttx.bin）：

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh esp32c6-xiao:usbnsh
    make V=1
    ```
5. 使用 RESET 和 BOOT 按钮进入“Bootloader”模式：按住 BOOT 键的同时上电，然后按一次 RESET 键。

6. 使用 esptool.py 加载固件：

    ```bash
    make flash ESPTOOL_PORT=/dev/ttyACM0 ESPTOOL_BINDIR=./
    ```

## 实践操作

现在是实际探索 NuttX 的时候了。在本节中，有四个可用的应用程序：USBNSH、GPIO 和 WIFI。

### USBNSH

NuttShell (NSH) 是一个用于 NuttX 的 shell 系统，类似于 bash 和其他类似选项。它支持丰富的内置命令集、脚本功能以及运行您自己的应用程序作为“内置”（与 NuttX 二进制文件一起）。NSH 配置启用了 USB 控制台，使用 115200 bps。

我们可以通过清除之前的配置来开始构建过程：

```bash
cd ~/nuttxspace/nuttx
make distclean
```

现在我们为 esp32c6-xiao 板选择 NSH 配置：

```bash
./tools/configurate.sh esp32c6-xiao:usbnsh
```

编译源代码：

```bash
make -j
```

将固件加载到您的开发板，重启开发板，并通过 CDC/ACM 串口接口连接到 NuttShell (NSH) 控制台：

```bash
picocom -b 115200 /dev/ttyACM0
```

访问 NuttShell 控制台：

```bash
NuttShell (NSH) NuttX-12.9.0
nsh> uname -a
NuttX  12.9.0 ebf883ba72 May  8 2025 17:15:47 risc-v esp32c6-xiao
nsh> 
```

输入 `?`，您将看到可用的命令和内置应用程序选项：

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

让我们向 NuttX 打个招呼，输入 `hello`，然后执行命令：

```bash
nsh> hello
Hello, World!!
```

恭喜您，您完成了与 NuttX 的第一次交互。

### GPIO

此配置启用了 GPIO 示例应用程序。通用输入/输出 (GPIO) 是微控制器最基本的部分，使其能够与外部世界连接。我们将使用 NSH 来访问和配置这些引脚。但首先，让我们清除之前的配置。

```bash
cd ~/nuttxspace/nuttx
make distclean
```

为 xiao-esp32c6 板选择 GPIO 配置：

```bash
./tools/configurate.sh esp32c6-xiao:gpio
```

编译源代码：

```bash
make -j
```

将固件加载到您的开发板，运行串行通信程序，例如 minicon 或 picocom：

```bash
picocom -b 115200 /dev/ttyACM0
```

```bash
NuttShell (NSH) NuttX-12.9.0
nsh>
```

要检查与此应用程序交互的可接受选项，请输入 `gpio -h`，它将返回参数列表：

```bash
NuttShell (NSH) NuttX-12.9.0
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

要确认 GPIO 设备文件已创建，请输入 `ls/dev`。输入后，您可以看到一些 GPIO 已在 boards/risc-v/esp32c6/esp32c6-xiao/src/esp32c6_gpio.c 中定义，具体如下：

- GPIOs
  - 1 输入带中断 -> GPIO2 -> /dev/gpio1
  - 1 输出       -> GPIO1 -> /dev/gpio0

```bash
nsh> ls /dev
/dev:
 console
 gpio0
 gpio1
 null
 ttyACM0
 ttyS0
 zero
nsh> 
```

按照以下命令读取 GPIO1 (/dev/gpio1)（带中断）并写入 GPIO2 (/dev/gpio0)：

```bash
NuttShell (NSH) NuttX-12.9.0
nsh> gpio -o 1 /dev/gpio0
Driver: /dev/gpio0
  Output pin:    Value=1
  Writing:       Value=1
  Verify:        Value=1
nsh> 
nsh> gpio -o 0 /dev/gpio0
Driver: /dev/gpio0
  Output pin:    Value=1
  Writing:       Value=0
  Verify:        Value=0
nsh> gpio -w 1 /dev/gpio1
Driver: /dev/gpio1
  Interrupt pin: Value=0
  Verify:        Value=1
```

### WIFI

此配置启用了 WLAN 网络接口，可以使用以下命令进行配置和初始化：

```bash
nsh> ifup wlan0
nsh> wapi psk wlan0 mypasswd 3
nsh> wapi essid wlan0 myssid 1
nsh> renew wlan0
```

在这种情况下，将连接到 SSID 为 myssid 的 AP，使用 mypasswd 作为密码。IP 地址通过 DHCP 使用 renew 命令获取。您可以通过运行 ifconfig 来检查结果。

首先清除之前的配置：

```bash
cd ~/nuttxspace/nuttx
make distclean
```

为 xiao-esp32c6 板选择 WIFI 配置：

```bash
./tools/configurate.sh esp32c6-xiao:wifi
```

编译源代码：

```bash
make -j
```

将固件加载到您的开发板，运行串行通信程序，例如 minicon 或 picocom：

```bash
picocom -b 115200 /dev/ttyACM0
```

```bash
NuttShell (NSH) NuttX-12.9.0
nsh>
```

我们现在可以使用 WAPI 命令，如 [WAPI NuttX 文档](https://nuttx.apache.org/docs/latest/applications/wireless/wapi/index.html) 中所记录：

```bash
NuttShell (NSH) NuttX-12.9.0
nsh> wapi psk wlan0 nuttxpwd 3
nsh> wapi essid wlan0 nuttxnw 1
nsh> renew wlan0
nsh> ifconfig
wlan0   Link encap:Ethernet HWaddr a0:85:e3:0e:4a:30 at RUNNING mtu 576
        inet addr:192.168.59.144 DRaddr:192.168.59.134 Mask:255.255.255.0

nsh> ping 8.8.8.8
PING 8.8.8.8 56 bytes of data
56 bytes from 8.8.8.8: icmp_seq=0 time=50.0 ms
56 bytes from 8.8.8.8: icmp_seq=1 time=40.0 ms
56 bytes from 8.8.8.8: icmp_seq=2 time=30.0 ms
56 bytes from 8.8.8.8: icmp_seq=3 time=60.0 ms
56 bytes from 8.8.8.8: icmp_seq=4 time=100.0 ms
56 bytes from 8.8.8.8: icmp_seq=5 time=100.0 ms
56 bytes from 8.8.8.8: icmp_seq=6 time=140.0 ms
56 bytes from 8.8.8.8: icmp_seq=7 time=40.0 ms
56 bytes from 8.8.8.8: icmp_seq=8 time=50.0 ms
56 bytes from 8.8.8.8: icmp_seq=9 time=30.0 ms
10 packets transmitted, 10 received, 0% packet loss, time 10100 ms
rtt min/avg/max/mdev = 30.000/64.000/140.000/34.985 ms
nsh> nslookup google.com
Host: google.com Addr: 142.251.128.238
nsh> nslookup nuttx.apache.org
Host: nuttx.apache.org Addr: 151.101.2.132
```

查看下面的视频，了解 WiFi 演示：

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-ESP32C6-NuttX/xiao-esp32c6-nuttx-wifi.mp4" type="video/mp4" />
  </video>
</div>

有关 NuttX RTOS 的更多信息，请访问 [NuttX 文档](https://nuttx.apache.org/docs/latest/index.html)

## ✨ 贡献者项目

- 此项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) 支持。
- 特别感谢 [Rodrigo](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92947609) 的辛勤努力。您的工作将被 [展示](https://wiki.seeedstudio.com/contributors/)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>