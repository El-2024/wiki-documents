---
description: 使用 Stream-pi 和 OBS Studio 控制 reTerminal
title: 使用 Stream-pi 和 OBS Studio 控制 reTerminal
keywords:
  - Edge
  - reTerminal OS_安装
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Streampi_OBS_On_reTerminal
last_update:
  date: 2023/2/1
  author: jianjing Huang
---


# 使用 Seeed reTerminal 搭配 Stream-pi 实现 OBS Studio 控制与便捷操作

## 简介

### 什么是 reTerminal 🤔

[reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) 是一款基于 Raspberry Pi 的一体化开发板，由 Raspberry Pi Compute Module 4 (CM4) 模块驱动，集成了一块 IPS 面板类型的多点触控屏幕，支持双频 2.4GHz/5GHz Wi-Fi 和 Bluetooth 5.0，预装基于 Raspberry Pi 的 Linux 系统，配备 4 GB RAM 和 32 GB eMMC 存储。通过模块化设计，该开发板配备了多种可访问的组件和高速连接器。它不仅适用于家庭助手和个人 AI 开发应用，还能执行工业级功能，非常适合作为工业设备使用。

特点：

- **Raspberry Pi 一体化开发板**：由 RPi CM4 32GB 驱动，集成 IPS 多点触控屏幕、双频 Wi-Fi 和 Bluetooth，预装兼容的 Linux 系统

- **模块化设计**：具有工业级高速扩展接口和 40 针 Raspberry Pi 兼容引脚

- **丰富的接口与组件**：配备 USB Type-A 接口、千兆以太网、micro-HDMI、micro-SD 卡槽、MIPI 摄像头接口、光传感器、加速度计、蜂鸣器、RTC 和可编程按钮

- **简洁的个人助手**：利用内置传感器和组件，通过 Seeed 和社区提供的多种仪表盘或 AI 项目，享受多样化的乐趣

- **优秀的工业设备**：得益于稳定的基于 Raspberry Pi 的操作系统、多种扩展工业级连接器、加密协处理器以及官方 Seeed 扩展板 reTerminal E10-1

### 什么是 Stream-pi 🤔

Stream-Pi 是一款为艺术家、创作者、玩家和极客设计的强大宏键盘软件。

Stream-Pi 是一个真正的开源替代方案，它提供了丰富的主题系统，用户可以使用 CSS 个性化用户界面的每一个细节。

Stream-Pi 还提供了丰富的 API，开发者可以利用它编写自己的自定义插件——类似于一些当前付费和专有的选项。不同之处在于，Stream-Pi 完全免费且开源！

### 什么是 OBS Studio 🤔

OBS Studio 是一款用于屏幕录制和直播的免费开源应用程序。它使用 C/C++ 编写，并基于 Qt 构建，提供实时捕获、场景组合、录制、编码以及通过实时消息传输协议 (RTMP) 进行广播的功能。它可以将视频流传输到任何支持 RTMP 的平台，包括 YouTube、Twitch、Instagram 和 Facebook。

### 为什么要这样做 🤨

我们发现，reTerminal 的内置显示屏、卓越性能以及对 Raspberry Pi 相关生态系统的支持，使其能够轻松实现智能化和便捷控制，成为一款高效的生产力工具。

所以，跟随我们一起尝试吧！😊

## 安装 🐱‍🚀

- 硬件准备
  - reTerminal
  - 电脑

为了保证教程的稳定性，我们基于 Ubuntu 18.04，同时也支持其他系统，例如 Windows、Mac 和其他 Linux 发行版。

### 安装 OBS Studio ⌛

有两种方法可以安装 OBS Studio：使用预编译包或自行编译。**推荐使用预编译包**，因为它经过测试并始终可用。如果您想尝试最新功能，可以按照官方的 OBS 编译流程，但由于依赖大量软件包，可能会遇到一些不可预见的问题。

#### 使用预编译包

```bash
sudo apt update 
sudo apt install wget git 
```

```bash
wget https://github.com/obsproject/obs-studio/releases/download/27.2.4/obs-studio_27.2.4-0obsproject1.bionic_amd64.deb
sudo apt install ./obs-studio_27.2.4-0obsproject1.bionic_amd64.deb
sudo apt install -f
```

#### 自定义编译 OBS

```bash
sudo apt install build-essential checkinstall cmake git libmbedtls-dev libasound2-dev libavcodec-dev libavdevice-dev libavfilter-dev libavformat-dev libavutil-dev libcurl4-openssl-dev libfontconfig1-dev libfreetype6-dev libgl1-mesa-dev libjack-jackd2-dev libjansson-dev libluajit-5.1-dev libpulse-dev libqt5x11extras5-dev libspeexdsp-dev libswresample-dev libswscale-dev libudev-dev libv4l-dev libvlc-dev libx11-dev libx11-xcb1 libx11-xcb-dev libxcb-xinput0 libxcb-xinput-dev libxcb-randr0 libxcb-randr0-dev libxcb-xfixes0 libxcb-xfixes0-dev libx264-dev libxcb-shm0-dev libxcb-xinerama0-dev libxcomposite-dev libxinerama-dev pkg-config python3-dev qtbase5-dev libqt5svg5-dev swig libwayland-dev qtbase5-private-dev libpci-dev
```

```bash
git clone https://github.com/obsproject/obs-studio.git -b release/27.2 obs_27.2
cd obs-studio
git submodule update --init --recursive
```

```bash
mkdir build
cd build
cmake -DBUILD_BROWSER=OFF ..
```

### 为 OBS Studio 安装 WebSocket 插件

```bash
wget https://github.com/obsproject/obs-websocket/releases/download/4.9.0/obs-websocket_4.9.0-1_amd64.deb
```

```bash
sudo apt update 
sudo apt install ./obs-websocket_4.9.0-1_amd64.deb
sudo apt install -f
```

### 安装 Stream Pi 服务器（在电脑上）

[推荐版本](https://github.com/stream-pi/server/releases/tag/2.0.0-SNAPSHOT)

```bash
wget https://github.com/stream-pi/server/releases/download/2.0.0-SNAPSHOT/stream-pi-server-linux-x64-2.0.0-SNAPSHOT.deb
```

```bash
sudo apt install ./stream-pi-server-linux-x64-2.0.0-SNAPSHOT.deb
```

### 安装 Stream Pi 客户端（在 reTerminal 上）

[推荐版本](https://github.com/stream-pi/client/releases/tag/2.0.0-SNAPSHOT)

```bash
wget https://github.com/stream-pi/server/releases/download/2.0.0-SNAPSHOT/stream-pi-server-linux-aarch64-2.0.0-SNAPSHOT-executable.zip
```

```bash
mkdir Stream_pi_client 
unzip stream-pi-server-linux-aarch64-2.0.0-SNAPSHOT-executable.zip -d Stream_pi_client
```

## Stream Pi 客户端-服务器交互

### 启动服务

在 reTerminal 上：

```bash
cd Stream_pi_client
./run_desktop
```

在电脑（Ubuntu）上：

直接点击图标

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/01.jpg"/></div>

### 定义功能 😏

1. 打开 Stream Pi 服务器

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/02.jpg"/></div>

2. 点击 文件 -> 设置 -> 常规

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/03.jpg"/></div>

3. 设置 Stream Pi 服务器地址、框大小并点击保存

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/04.jpg"/></div>

4. 连接到 OBS 服务

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/06.jpg"/></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/05.jpg"/></div>

5. 在 reTerminal 客户端上，将服务器地址配置为电脑的 IP 地址，然后点击保存并连接。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/09.jpg"/></div>

6. 返回 Stream Pi 服务器，将对应的标签拖动到对应的框中以实现相应功能

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/07.jpg"/></div>

7. 我们还可以直接编写命令来实现程序调用、更改显示图标、更改显示名称、调整框大小以及实现更多功能

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/11.jpg"/></div>

8. 在 OBS Studio 软件中添加屏幕视图和对应的图像源

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/08.jpg"/></div>

9. 最后，我们可以点击 reTerminal 来完成相应的控制 👍👍👍

    - 这是我们在 reTerminal 上的界面

    <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/10.jpg"/></div>

    - 这是我们在电脑上的界面

    <div align="center"><video width={500} controls><source src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/demo.mkv"/></video></div>

    - reTerminal 的外观

    <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/12.jpg"/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时拥有顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>