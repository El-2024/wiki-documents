---
description: 如何在 reTerminal 上安装 Home Assistant
title: 使用 Home Assistant 入门指南
image: https://avatars.githubusercontent.com/u/4452826?s=400&amp;v=4
slug: /cn/reTerminal_Home_Assistant
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# 使用 Home Assistant 入门指南（适用于 reTerminal）

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/94.jpg" /></center>

## 简介

本指南将逐步引导您如何仅使用 reTerminal 将普通的房屋变成智能家居！在完成本指南后，您将能够在 reTerminal 的 LCD 上查看一个美观的仪表盘，并能够控制家用电器以及查看其他信息（如传感器数据），一切尽在掌控之中。那么，让我们开始吧！

## 什么是 Home Assistant？

[Home Assistant](https://www.home-assistant.io) 是一款免费的开源家庭自动化软件，旨在成为智能家居设备的中央控制系统，也可以称为智能家居中心。它提供无需云端的家庭自动化，这意味着您的家庭自动化系统不依赖于远程服务器或互联网连接。这种本地控制方式可以为您提供比云连接设备更高的安全性。此外，它在 24x7 持续运行方面也具有更高的可靠性。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" /></center>

它使用灵活且非常容易上手，即使是初学者也可以通过 Home Assistant 提供的优秀文档轻松入门。此外，在 [Home Assistant 论坛](https://community.home-assistant.io) 上有一个活跃的社区，许多成员会在您构建和运行 Home Assistant 时遇到问题时提供帮助。
设置完成后，Home Assistant 可以通过基于 Web 的用户界面访问，也可以通过 Android 和 iOS 的配套应用程序访问，或者通过支持的虚拟助手（如 Google Assistant 或 Amazon Alexa）进行语音命令控制。
如果您想快速在浏览器中体验演示，请[点击这里](https://demo.home-assistant.io)。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/3.png" /></center>

## 不同的安装方法

Home Assistant 支持在不同的硬件上运行，例如 Raspberry Pi、ODROID、ASUS Tinkerboard、Intel NUC、Windows/Linux/Mac 电脑。因此，不同的硬件有不同的安装方法。要了解所有这些安装方法，请访问[此页面](https://www.home-assistant.io/installation)。
如您所见，下面有 4 种主要的安装方法，但并非所有安装方法都支持 Home Assistant 的所有功能。

<center><img width={650} src="https://files.seeedstudio.com/wiki/Home-Assistant/2.png" /></center>

## reTerminal 的安装方法

根据 Home Assistant 的建议，推荐的两种安装方法是 **OS 方法和容器方法**。然而，我们不会使用这两种方法在 reTerminal 上安装。为什么呢？

### 为什么不选择 Home Assistant 操作系统？

如果我们在 reTerminal 上安装 Home Assistant 操作系统，我们将无法在 reTerminal 的 LCD 上查看 Home Assistant 仪表盘界面。这是因为，Home Assistant 操作系统只会向任何连接的显示器输出 CLI 界面，如下所示。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Home-Assistant/5.png" /></center>

因此，仪表盘界面只能通过其他设备上的 **homeassistant.local:8123** 访问。然而，如果您希望以这种方式安装并且不需要在 reTerminal 的 LCD 上查看仪表盘，您可以按照[此指南](https://www.home-assistant.io/installation/raspberrypi#install-home-assistant-operating-system)进行操作。它与 Raspberry Pi 的安装方法相同，因为 reTerminal 基于 Raspberry Pi Compute Module 4。

### 为什么不选择 Home Assistant 容器？

如果我们在 reTerminal 上安装 Home Assistant 容器，我们将会错过一些 Home Assistant 的功能。因此，我们将跳过这种安装方法。然而，如果您想探索这种安装方法，可以按照[此指南](https://www.home-assistant.io/installation/raspberrypi#install-home-assistant-container)。它与 Raspberry Pi 的安装方法相同，因为 reTerminal 基于 Raspberry Pi Compute Module 4。

### 为什么选择 Home Assistant 监督版？

如果我们在 reTerminal 上安装 Home Assistant 监督版，我们将能够使用 Home Assistant 的所有功能，并且可以在 reTerminal 的 LCD 上查看仪表盘界面！但与 OS 和容器方法相比，这种安装方法需要更多步骤。然而，如果您仔细按照本指南操作，您将能够成功完成安装！

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Method 1" label="Bullseye">

## 开始构建

:::note
在某些步骤中，如果您通过 Wi-Fi 连接，可能会丢失连接。建议改用 LAN 连接。
:::

现在让我们一起完成在 reTerminal 上安装 Home Assistant Supervised 的过程。

- **步骤 1.** 准备一个已安装 Raspberry Pi OS 的 reTerminal。reTerminal 自带预装的 RPi OS 32 位系统。如果您需要重新安装，请参考[此文档](https://wiki.seeedstudio.com/cn/reTerminal-FAQ/#q2-how-can-i-flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)。

**注意：** 请确保使用 32 位版本，因为在 reTerminal LCD 上运行 Home Assistant 的 Dashboard UI 时，32 位版本会更加流畅。

- **步骤 2.** 更新软件包管理器列表

```sh
sudo apt update
```

- **步骤 3.** 安装依赖项

```sh
sudo apt-get install \
apparmor \
jq \
wget \
curl \
udisks2 \
libglib2.0-bin \
network-manager \
dbus \
systemd-journal-remote -y
```

- **步骤 4.** 修复损坏的安装

```sh
sudo apt --fix-broken install
```

- **步骤 5.** 重启 reTerminal

```sh
sudo reboot
```

- **步骤 6.** 下载官方 Docker 脚本

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
```

- **步骤 7.** 运行 Docker 脚本

```sh
sudo sh get-docker.sh
```

- **步骤 8.** 将 Docker 用户添加到系统中

```sh
sudo usermod -aG docker pi
```

- **步骤 9.** 检查 Docker 是否正常工作

```sh
docker --version
```

如果您看到如下输出，则说明 Docker 已正确安装：

```
Docker version 20.10.18, build b40c2f6
```

:::note
Home Assistant Supervisor 的兼容性依赖于特定的 Docker CGroup v1。为了确保兼容性，需要进行以下更改：
:::

- **使用编辑器打开此文件**

```sh
sudo nano /etc/default/grub
```

- **添加以下行并保存**

```sh
systemd.unified_cgroup_hierarchy=false
```

- **打开此文件**

```sh
sudo nano /boot/cmdline.txt
```

- **在末尾添加以下内容并保存**

```sh
systemd.unified_cgroup_hierarchy=false apparmor=1 security=apparmor
```

- **步骤 10.** 访问 [Home Assistant OS Agent 页面](https://github.com/home-assistant/os-agent/releases)，在最新版本下，右键点击以 ***linux_armv7.deb** 结尾的文件并复制链接

:::note
目前在 reTerminal(CM4) 上测试稳定且可用的 Home Assistant Agent 版本是 V1.3.0。
:::

<center><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/4.jpg" /></center>

- **步骤 11.** 使用以下格式下载文件

```sh
wget <copied_link>
```

例如：

```sh
wget https://github.com/home-assistant/os-agent/releases/download/1.3.0/os-agent_1.3.0_linux_armv7.deb
```

- **步骤 12.** 安装 Home Assistant OS Agent

```sh
sudo dpkg -i os-agent_<version_number>_linux_armv7.deb
```

例如：

```sh
sudo dpkg -i os-agent_1.3.0_linux_armv7.deb
```

- **步骤 13.** 下载 Home Assistant-Supervised 安装脚本

:::note
同样，目前在 reTerminal(CM4) 上测试稳定且可用的 Home Assistant-Supervised 版本也是 V1.3.0。
:::

```sh
wget https://github.com/home-assistant/supervised-installer/releases/download/1.3.0/homeassistant-supervised.deb
```

- **步骤 14.** 安装 Home Assistant-Supervised

```sh
sudo dpkg -i homeassistant-supervised.deb
```

- **步骤 15.** 如果安装过程中出现任何错误，请运行以下命令修复损坏的安装

```sh
sudo apt --fix-broken install
```

- **步骤 16.** 在 **Package configuration** 窗口中，选择 **raspberrypi4** 并按 **ENTER**

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/6.png" /></center>

输出结果如下：

<center><img width={550} src="https://files.seeedstudio.com/wiki/Home-Assistant/7.png" /></center>

:::note
如果重启后遇到 Wi-Fi 连接问题，请按照以下步骤操作：
:::

- 执行以下命令启用 'dhcpcd'：
```sh
sudo systemctl enable dhcpcd
```

- 使用以下命令禁用网络服务：
```sh
sudo systemctl disable networking
```

- 重启 Raspberry Pi 以应用更改：
```sh
sudo reboot
```

:::note
为了解决 "Network Manager 问题"（在设置中找到），您可以通过启动并启用 Network Manager 来修复。使用以下命令完成此操作：
:::

```sh
sudo systemctl enable NetworkManager
```

## 在网页浏览器中查看 Home Assistant 仪表板界面

- **步骤 1.** 在网页浏览器中输入以下 URL

```sh
homeassistant.local:8123
```

这可能需要一些时间来完成初始启动过程。

- **步骤 2.** 启动完成后，创建一个账户并按照初始设置说明进行操作。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" /></center>

之后，您将看到如下的欢迎仪表板：

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/15.png" /></center>

## 在 reTerminal 上以 Kiosk 模式查看 Home Assistant 仪表板界面

为了能够在 reTerminal 的 LCD 上查看 Home Assistant 仪表板界面，我们将使用 Raspberry Pi OS 中自带的 Chromium 浏览器。我们将设置 Chromium，使其在 reTerminal 启动后以全屏模式自动启动。

- **步骤 1.** 导航到以下目录

```sh
cd /etc/xdg/lxsession/LXDE-pi/
```

- **步骤 2.** 使用 **nano 文本编辑器** 打开 **autostart** 文件

```sh
sudo nano autostart
```

- **步骤 3.** 在文件末尾添加以下行

```sh
@chromium-browser --kiosk --incognito --disable-pinch --overscroll-history-navigation=0 homeassistant.local:8123
```

- **步骤 4.** 重启 reTerminal

```sh
sudo reboot 
```

现在，当 reTerminal 启动时，Home Assistant 仪表板界面将以全屏窗口打开！

## 额外内容

在集成了智能灯光、温度、湿度传感器、CCTV 等设备后，Home Assistant 上的完整智能家居仪表板将如下所示：

<center><img width={1000} src="https://files.seeedstudio.com/wiki/Home-Assistant/16.png" /></center>

<video style={{display: 'block', maxWidth: '100%'}} id="video" controls preload="none" poster="https://files.seeedstudio.com/wiki/Home-Assistant/thumb.png">
  <source id="mp4" src="https://files.seeedstudio.com/wiki/Home-Assistant/HA-dashboard.mp4" type="video/mp4" />
</video>
<br />

</TabItem>



<TabItem value="Method 2" label="Bookworm">

:::note
在安装 HA 的过程中，我们使用了无线连接进行测试。
:::

## Home Assistant Supervised 安装 - Bookworm

#### 步骤 1: 更新并安装依赖项

```bash
sudo apt update
sudo apt-get install -y jq wget curl udisks2 apparmor-utils libglib2.0-bin network-manager dbus systemd-journal-remote systemd-resolved
```

#### 步骤 2: 启动并启用 Network Manager

检查 Network Manager 的状态

```bash
sudo systemctl status NetworkManager.service
```

如果 NetworkManager 未启动，请启动并启用它

```bash
sudo systemctl start NetworkManager
sudo systemctl enable NetworkManager
```

#### 步骤 3: 修改启动参数

编辑 `cmdline.txt` 文件：
```bash
sudo nano /boot/firmware/cmdline.txt
```

在行末添加以下内容：

```bash
systemd.unified_cgroup_hierarchy=false lsm=apparmor
```

重启系统：
```bash
sudo reboot
```

#### 步骤 4: 安装 Docker

```bash
sudo curl -fsSL get.docker.com | sh
sudo gpasswd -a $USER docker
newgrp docker
```

#### 步骤 5: 安装 OS Agent

```bash
wget https://github.com/home-assistant/os-agent/releases/download/1.6.0/os-agent_1.6.0_linux_aarch64.deb
sudo dpkg -i os-agent_1.6.0_linux_aarch64.deb
```

#### 步骤 6: 安装 Home Assistant Supervised

```bash
wget https://github.com/home-assistant/supervised-installer/releases/download/1.6.0/homeassistant-supervised.deb
sudo dpkg -i homeassistant-supervised.deb
```

安装成功后，将出现一个蓝屏，允许您选择 **Raspberry Pi4 64** 模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png" style={{width:600}}/></div>

几分钟后，安装将开始。

然后，您可以通过 `<your_reTerminal_ip>:8123` 在网页浏览器中查看 Home Assistant 仪表板界面。

完成初始启动过程可能需要一些时间。启动完成后，创建一个账户并按照初始设置说明进行操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" style={{width:600}}/></div>

:::note
如果通知中有警告，请重启 reTerminal。
:::


</TabItem>

</Tabs>

# 技术支持

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>