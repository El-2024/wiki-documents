---
description: 利用 Embedded Swift 与 XIAO ESP32C6 协作
title: XIAO ESP32C6 与 (Embedded) Swift
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/swift-xiao-esp32.png
slug: /cn/xiao-esp32-swift
last_update:
  date: 2024-07-12T02:50:00.462Z
  author: Spencer
---
# Seeed Studio XIAO-C6 嵌入式 Swift 指南

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/swift-xiao-esp32.png" alt="pir" width={600} height="auto" /></p>

## 介绍

Seeed Studio XIAO ESP32C6 是一款功能强大且用途广泛的开发板，基于 ESP32-C6 SoC 构建，配备双核 32 位 **RISC-V** 处理器。高性能处理器运行频率高达 160 MHz，而低功耗处理器运行频率高达 20 MHz。XIAO ESP32C6 配备 512KB SRAM 和 4MB Flash，提供了充足的编程空间，非常适合各种物联网应用。该开发板在无线连接方面表现出色，支持 2.4 GHz Wi-Fi 6、Bluetooth® 5.3、Zigbee 和 Thread (802.15.4)，并且原生支持 Matter，这对智能家居互操作性至关重要。

<div class="table-center">
	<table>
		<tr>
			<th>Seeed Studio XIAO ESP32C6</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html
        ">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

[Swift](https://www.swift.org/) 是由 Apple Inc. 开发的一种功能强大且直观的编程语言，用于开发 iOS、macOS、watchOS、tvOS 及其他平台的软件。在 [WWDC2024](https://developer.apple.com/wwdc24/) 上，Apple 宣布了 Embedded Swift，这是一个开源项目，旨在将 Swift 带入嵌入式系统和物联网世界。它使得在没有操作系统且资源极其有限的微控制器上使用 Swift 成为可能。目前，官方的 swift-embedded-examples 支持 STM32、Raspberry Pi Pico、Nordic Semiconductor，甚至 RISC-V ESP32 (ESP32C6) 等硬件平台。

<div style={{ textAlign: 'center' }}>
<img width={680} src="https://user-images.githubusercontent.com/1186214/264192528-ec5673ba-eec5-422a-b28c-8c0a1e814d1c.png" alt="Vision of Embedded Swfit " />

<div style={{ marginTop: '-8px' }}><em>Swift 语言</em></div>

</div>  

<br></br>

Embedded Swift 提供了几个优势：

- **性能和易用性**：它提供 C/C++ 级别的性能，同时保持 Swift 用户友好的语法和特性 ([Swift Forums](https://forums.swift.org/t/accepted-a-vision-for-embedded-swift/68067))。
- **库和框架集成**：Swift 能够直接与 C/C++ 库链接，使开发者能够无缝利用现有框架 ([GitHub](https://github.com/swiftlang/swift-evolution/blob/main/visions/embedded-swift.md))。
- **开发者熟悉度**：已经熟练掌握 Swift 的开发者可以快速采用 Embedded Swift 进行项目开发，利用熟悉的 API 和工具 ([Swift.org](https://www.swift.org/getting-started/embedded-swift/))。

:::tip 本指南的目标

在本页面中，我们将涵盖以下内容：

- 如何设置必要的开发环境。
- 运行基于 GPIO 的闪烁示例。

:::

## 前置条件

要在 Seeed Studio XIAO-C6 上开始使用 Embedded Swift，您需要以下技能和设置：

- **Seeed Studio XIAO-C6**：本指南的核心硬件。
- **USB-C 数据线**：用于将 XIAO-C6 连接到您的计算机。
- **一台计算机**：运行 *Linux*、*macOS* 或 Windows（使用 **WSL2**）。
- **[ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/release-v5.2/esp32/get-started/index.html)**：使用 ESP32-C6 进行开发需要版本 5.2（*推荐*）。您可以从 [Espressif 网站](https://github.com/espressif/esp-idf) 下载并安装。
- **[Swift 工具链](https://www.swift.org/getting-started/embedded-swift/)**：确保您的计算机上安装了 Swift 6.0。可以从官方 Swift 网站或通过操作系统的包管理器获取。

:::info 安装指南

**ESP-IDF 安装：**

- 按照 [Linux 和 macOS](https://docs.espressif.com/projects/esp-idf/en/release-v5.2/esp32/get-started/linux-macos-setup.html) 页面安装 ESP-IDF
- 按照 [使用 Espressif ESP-IDF 在 XIAO 上开发指南](/cn/xiao_idf) 获取详细步骤。

**Swift 工具链安装：**

- 从 [官方网站](https://www.swift.org/install/) 安装 Swift `release/6.0` 工具链。

如果您偏好 docker 解决方案，请参考 `apple/swift-matter-examples/` 中的 [Dockerfile](https://github.com/apple/swift-matter-examples/blob/main/Dockerfile)
:::

在继续之前，请确保您具备所有必要的前置条件，以便顺利进行设置和开发过程。

:::caution 注意

在本页面中，我们将在 Ubuntu 22.04 Jammy Linux (WSL2) 上进行 Embedded Swift 的设置和使用。

:::

### 安装 ESP-IDF

```shell
#!/bin/bash
# 更新并安装所需的包
sudo apt-get update
sudo apt-get install -y git wget flex bison gperf python3 python3-pip python3-venv python3.10-venv cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0

# 克隆 ESP-IDF 仓库
cd ~
git clone --recursive https://github.com/espressif/esp-idf.git --jobs 10
cd esp-idf
git checkout v5.2.1; git submodule update --init --recursive

# 运行 ESP-IDF 安装脚本
cd ~/esp-idf && ./install.sh

# 为 ESP-IDF 环境设置别名
echo 'alias get_idf=". ~/esp-idf/export.sh"' >> ~/.bashrc
source ~/.bashrc

echo "安装完成。使用 'get_idf' 来设置 ESP-IDF 环境。"
```

### 安装 Swift 6.0

您可以直接运行此脚本来安装 swift 6.0。

```shell
#!/bin/bash
# 下载 Swift 6.0 快照
wget https://download.swift.org/swift-6.0-branch/ubuntu2204/swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a/swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a-ubuntu22.04.tar.gz

# 解压压缩包
tar -xvzf swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a-ubuntu22.04.tar.gz

sudo mv swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a-ubuntu22.04 $HOME/swift-6.0

# 更新 PATH
echo 'export PATH=$HOME/swift-6.0/usr/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# 验证安装
swift --version

echo "Swift 6.0 安装完成。"
```

## 使用 Swift 运行你的第一个 Blink 程序

### 步骤 1. 获取示例

```shell showLineNumbers
get_idf #获取 idf 环境
cd ~ && git clone https://github.com/apple/swift-embedded-examples.git #获取 GitHub 仓库
cd ~/swift-embedded-examples/esp32-led-blink-sdk
```

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/apple/swift-embedded-examples">
    <strong><span><font color={'FFFFFF'} size={"4"}> GitHub 仓库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### 步骤 2. 构建示例

由于用户 LED 连接到 GPIO15，你需要修改代码为 `let led = Led(gpioPin: 15)`：

```swift
@_cdecl("app_main")
func app_main() {
    print("Hello from Swift on ESP32-C6!")

    var ledValue: Bool = false
    let blinkDelayMs: UInt32 = 500
    let led = Led(gpioPin: 15)

    while true {
        led.setLed(value: ledValue)
        ledValue.toggle() // Toggle the boolean value
        vTaskDelay(blinkDelayMs / (1000 / UInt32(configTICK_RATE_HZ)))
    }
}
```

然后你可以构建固件：

```shell
idf.py set-target esp32c6
idf.py build
```

:::info 遇到问题？
如果你遇到问题 `/bin/sh: 1: -target: not found`，你可以通过编辑位于构建文件夹中的 `build.ninja` 文件来解决。

找到关键词 `-target` 并在其前面添加 `swiftc` 关键词，使其读作 `swiftc -target ...`。这个调整应该有助于解决问题。
:::

现在我们可以将固件烧录到我们的 XIAO C6 中，一旦你得到提示 `Project build complete.`

### 步骤 3. 烧录固件

<details>
<summary>如果使用 WSL2 需要 usbipd</summary>

如果你使用 WSL2，你需要安装 [usbipd](https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/WSL.md#usbipd)。

要安装，使用 Windows 包管理器命令：
```shell
winget install usbipd
```

安装后，使用以下命令共享 USB 设备：
```shell
usbipd list #检查 BUSID
usbipd bind -b '<BUSID>'
```

要从 WSL2 内部连接设备：
```shell
usbipd attach --wsl --busid=<BUSID>
```

要查看哪个端口被共享：
```shell
dmesg | tail
# dmesg | tail -n 100 | sed -n 's/.*\(ttyACM[0-9]*\).*/\1/p'
```
</details>

假设你检测到了 `ttyACM0`，命令将是：

```shell
idf.py -p /dev/ttyACM0 flash monitor
```

*此命令将：*
1. 将固件烧录到连接到 ttyACM0 的设备。
2. 开始监控设备的串行输出，显示任何打印语句或日志。

### 演示

<center>
<iframe width="407" height="724" src="https://www.youtube.com/embed/byqY2bYfVjA" title="Embedded Swift on XIAO ESP32C6 #Swift #Embedded #ESP32C6 #iot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>

## 参考资料

- [Embedded Swift Blog](https://www.swift.org/blog/embedded-swift-examples/)
- [A Vision for Embedded Swift](https://github.com/swiftlang/swift-evolution/blob/main/visions/embedded-swift.md)
- [swift-embedded-examples](https://github.com/apple/swift-embedded-examples)
- [esp32-led-blink-sdk - GitHub](https://github.com/apple/swift-embedded-examples/tree/main/esp32-led-blink-sdk)

## 资源

- [WWDC24: Go small with Embedded Swift - Apple YouTube](https://www.youtube.com/watch?v=LqxbsADqDI4&t)
- [Add support for Matter in your smart home app](https://developer.apple.com/videos/play/wwdc2021/10298)
- [Embedde Swift - Apple Forum](https://forums.swift.org/c/development/embedded/107)
- [Use C, C++ and Objective C Libraries in a Swift Project - Cecilia Humlelu - YouTube](https://www.youtube.com/watch?v=jcNxtM_yTfk)
- [Mixing Swift and C++](https://www.swift.org/documentation/cxx-interop/)
- [awesome-embedded-swift](https://github.com/Cosmo/awesome-embedded-swift)

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