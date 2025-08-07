---
description: XIAO ESP32C3 与 NuttX(RTOS)
title: XIAO ESP32C3 与 NuttX(RTOS)
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/XIAO-ESP32C3-NuttX/nuttx.webp
slug: /cn/xiao_esp32c3_nuttx
last_update:
    date: 04/28/2025
    author: rcsim
---

# Seeed Studio XIAO ESP32C3 与 NuttX(RTOS)

## 介绍

[NuttX](https://nuttx.apache.org/) 是一个成熟的实时操作系统（RTOS），因其标准合规性和小占用空间而广受认可。NuttX 的主要特性之一是其可扩展性，这使得它可以在从 8 位微控制器到 64 位系统的各种环境中使用。这种灵活性是通过遵循 POSIX 和 ANSI 标准实现的，使您能够在来自不同架构、系列和半导体供应商的各种芯片上体验类似的 NuttX 功能。

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO-ESP32C3-NuttX/nuttx.svg"/></div>

此外，NuttX 提供了许多先进且有用的功能，如 USB、以太网、音频和图形子系统。这些特性使 NuttX 成为寻求能够在各种类型硬件上运行的多功能、强大 RTOS 的开发者的有吸引力的选择。

NuttX 支持大量且不断扩展的开发板。[官方文档](https://nuttx.apache.org/docs/latest/platforms/)提供了按架构和片上系统（SoC）系列组织的支持开发板的完整列表。

例如，NuttX 文档中的 [Seeed Studio XIAO ESP32C3](https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c3/boards/esp32c3-xiao/index.html) 页面提供了每个支持功能的详细描述和如何使用它们的说明。此外，在 NuttX 文档中还有一个专门针对 [Espressif ESP32C3](https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c3/index.html) 系列芯片的页面，您可以在其中找到支持的 MCU 和外设列表。

## 安装

Nuttx 文档为不同平台提供了[指南](https://nuttx.apache.org/docs/latest/quickstart/install.html)。对于 Seeed Studio XIAO ESP32C3，请按照以下步骤操作：

1. 下载 Espressif esptool(https://docs.espressif.com/projects/esptool/en/latest/esp32/)：

    ```bash
    ~/nuttxspace/nuttx$ esptool.py version
    esptool.py v4.8.1
    4.8.1
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

也可以通过运行命令检查支持的开发板列表：

```bash
./tools/configurate.sh -L
```

4. 构建 NuttX（构建过程将生成固件二进制文件，包括 nuttx.bin）：

    ```bash
    cd nuttx
    make distclean
    ./tools/configure.sh xiao-esp32c3:usbnsh
    make V=1
    ```
5. 可以使用 RESET 和 BOOT 按钮进入"Bootloader"模式，方法是在上电时按住 BOOT 键，然后按一次 RESET 键。

6. 使用 esptool.py 加载固件：

    ```bash
    make flash ESPTOOL_PORT=/dev/ttyACM0 ESPTOOL_BINDIR=./
    ```

## 实践操作

现在是时候实际探索 NuttX 了。在本节中，有四个应用程序可用：USBNSH、COMBO、WIFI 和 BLE。

### USBNSH

NuttShell(NSH) 是在 NuttX 中使用的 shell 系统，类似于 bash 和其他类似选项。它支持丰富的内置命令集、脚本编写以及将您自己的应用程序作为"内置"（同一个 NuttX 二进制文件的一部分）运行的能力。NSH 配置使用 115200 bps 在 USB 上启用控制台。

我们可以通过清除之前的配置来开始构建过程

```bash
cd ~/nuttxspace/nuttx
make distclean
```

现在我们为 xiao-esp32c3 开发板选择 NSH 配置：

```bash
./tools/configurate.sh xiao-esp32c3:usbnsh
```

编译源代码。

```bash
make -j
```

将固件加载到您的开发板中，重启开发板并使用 CDC/ACM 串行接口通过 USB 连接 NuttShell (NSH) 控制台：

```bash
picocom -b 115200 /dev/ttyACM0
```

访问 NuttShell 控制台：

```bash
NuttShell (NSH) NuttX-12.9.0
nsh> uname -a
NuttX  12.9.0 6b4bc72626-dirty Apr 26 2025 17:40:37 risc-v esp32c3-xiao
nsh> 
```

输入 `?`，您将访问命令和内置应用程序的可用选项。

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

### GPIO

此配置启用 gpio 示例应用程序。通用输入/输出 (GPIO) 是微控制器最基本的部分，允许它连接到外部世界。这样我们将使用 NSH 来访问和配置这些引脚。但首先，让我们清除之前的配置。

```bash
cd ~/nuttxspace/nuttx
make distclean
```

为 xiao-esp32c3 开发板选择 gpio 配置。

```bash
./tools/configurate.sh xiao-esp32c3:gpio
```

编译源代码。

```bash
make -j
```

将固件加载到您的开发板中，运行串行通信程序，如 minicon 或 picocom：

```bash
picocom -b 115200 /dev/ttyACM0
```

```bash
NuttShell (NSH) NuttX-12.9.0
nsh>
```

要检查与此应用程序交互接受哪些选项，输入 `gpio -h`，它将返回参数列表。

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

要确认 GPIO 设备文件已创建，输入 `ls/dev`。输入后，您可以看到一些 gpio 被声明定义在 boards/risc-v/esp32c3/esp32c3-xiao/src/esp32c3_gpio.c 中，它们代表：
 
- GPIOs
  - 1 Input w/ IRQ    -> GPIO3
  - 1 Output          -> GPIO2

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

按照这些命令读取 GPIO1(/dev/gpio1)（带中断）并写入 GPIO2(/dev/gpio0)。

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

查看下面的 gpio 演示视频：

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-ESP32C3-NuttX/xiao-esp32c3-nuttx-gpio.mp4" type="video/mp4" />
  </video>
</div>

### WIFI

此配置启用可以使用以下命令配置和初始化的 wlan 网络接口：

```bash
nsh> ifup wlan0
nsh> wapi psk wlan0 mypasswd 3
nsh> wapi essid wlan0 myssid 1
nsh> renew wlan0
```

在这种情况下，连接到 SSID 为 myssid 的 AP，使用 mypasswd 作为密码。IP 地址通过使用 renew 命令的 DHCP 获得。您可以通过之后运行 ifconfig 来检查结果。

让我们从清理之前的配置开始：

```bash
cd ~/nuttxspace/nuttx
make distclean
```

为 xiao-esp32c3 开发板选择 wifi 配置。

```bash
./tools/configurate.sh xiao-esp32c3:wifi
```

编译源代码。

```bash
make -j
```

将固件加载到您的开发板中，运行串行通信程序，如 minicon 或 picocom：

```bash
picocom -b 115200 /dev/ttyACM0
```

```bash
NuttShell (NSH) NuttX-12.9.0
nsh>
```

我们现在可以使用 [WAPI NuttX 文档](https://nuttx.apache.org/docs/latest/applications/wireless/wapi/index.html) 中记录的 WAPI 命令，

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

查看下面的 wifi 演示视频：

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-ESP32C3-NuttX/xiao-esp32c3-nuttx-wifi.mp4" type="video/mp4" />
  </video>
</div>

### BLE

此配置用于启用 ESP32-C3 芯片的蓝牙低功耗（BLE）功能。

让我们首先清理之前的配置：

```bash
cd ~/nuttxspace/nuttx
make distclean
```

为 xiao-esp32c3 开发板选择 ble 配置。

```bash
./tools/configurate.sh xiao-esp32c3:ble
```

编译源代码。

```bash
make -j
```

将固件加载到您的开发板中，运行串口通信程序，如 minicon 或 picocom：

```bash
picocom -b 115200 /dev/ttyACM0
```

```bash
NuttShell (NSH) NuttX-12.9.0
nsh>
```

现在我们可以使用 BT 命令，如 [btsak NuttX 文档](https://nuttx.apache.org/docs/latest/applications/wireless/btsak/index.html) 中所述，

```bash
NuttShell (NSH) NuttX-12.9.0
nsh> bt bnep0 scan start
nsh> bt bnep0 scan stop
nsh> bt bnep0 scan get
Scan result:
 1.     addr:            a0:46:5a:22:ea:c4 type: 0
        rssi:            -92
        response type:   0
        advertiser data: 02 01 02 19 16 f1 fc 04 f9 6e e8 58 e6 33 58 26                         c5 4b bd 91 1c e0 4f b2 d9 51 455
 2.     addr:            a0:46:5a:22:ea:c4 type: 0
        rssi:            -91
        response type:   0
        advertiser data: 02 01 02 19 16 f1 fc 04 f9 6e e8 58 e6 33 58 26                         c5 4b bd 91 1c e0 4f b2 d9 51 455
 3.     addr:            a0:46:5a:22:ea:c4 type: 0
        rssi:            -100
        response type:   0
        advertiser data: 02 01 02 19 16 f1 fc 04 f9 6e e8 58 e6 33 58 26                         c5 4b bd 91 1c e0 4f b2 d9 51 455
 4.     addr:            a0:46:5a:22:ea:c4 type: 0
        rssi:            -100
        response type:   4
        advertiser data:
 5.     addr:            a0:46:5a:22:ea:c4 type: 0
        rssi:            -97
        response type:   0
        advertiser data: 02 01 02 19 16 f1 fc 04 f9 6e e8 58 e6 33 58 26 
```

查看下面的 ble 演示视频：

<div style={{ maxWidth: '100%', textAlign: 'center' }}>
  <video style={{ width: '100%', height: 'auto' }} controls>
    <source src="https://files.seeedstudio.com/wiki/XIAO-ESP32C3-NuttX/xiao-esp32c3-nuttx-ble.mp4" type="video/mp4" />
  </video>
</div>

有关 NuttX RTOS 的更多信息，请访问 [NuttX 文档](https://nuttx.apache.org/docs/latest/index.html)

## ✨ 贡献者项目

- 此项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) 支持。
- 特别感谢 [Rodrigo](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92947609) 的专注努力。您的工作将被[展示](https://wiki.seeedstudio.com/cn/contributors/)。

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