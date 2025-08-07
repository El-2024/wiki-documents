---
description: reServer J2032
title: reServer J2032 刷写 NVIDIA JetPack™ 操作系统
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reServer_J2032_Flash_Jetpack
last_update:
  date: 01/03/2023
  author: w0x7ce
---

<!-- ---
name: reServer 2032 刷写 Jetpack
category: reServer 2032 刷写 Jetpack
bzurl: 
wikiurl: 
sku: 
--- -->

# 简介
在本篇文档中，我们将向您展示如何在搭载 Jetson Xavier NX 模组的 reServer J2032 上刷写 NVIDIA Jetpack 操作系统。

以下是 reServer J2030 承载板的概览图供参考：

<div align="center">
  <p style={{fontSize: 'x-large', fontWeight: 'bold'}}>
    reServer J2030 承载板概览
  </p><table>
    <tbody><tr>
      </tr>
      <tr>
        <td align="center">正面</td>
        <td align="center">背面</td>
      </tr>
      <tr>
        <td align="center">
          <img width={700} src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ2032hardware1.png" alt />
        </td>
        <td align="center">
          <img width={700} src="https://files.seeedstudio.com/wiki/reComputer/reComputerJ2032hardware2.png" alt />
        </td>
      </tr>
    </tbody></table>
</div>


## 开始

我们可以使用 **NVIDIA SDK Manager** 来刷写系统，也可以通过 **命令行脚本** 轻松完成此操作。对于有 Linux 基础知识的用户，我们强烈推荐使用 **命令行脚本**，因为它提供了更多功能。

- [通过 NVIDIA SDK Manager 和 Linux 终端刷写 JetPack 操作系统](#flashing-jetpack-os-via-nvidia-sdk-manager)
- [通过 Linux 终端刷写 JetPack 操作系统](#flashing-jetpack-os-via-command-line)

在开始之前，仍需进行一些准备工作：

### 软件准备

- <a href="https://developer.nvidia.com/login" target="_blank"><span>NVIDIA 账户</span></a>
- 安装了 Ubuntu 18.04 或更高版本的 Linux 主机电脑

!!!note
	在本教程中，我们将使用基于 Ubuntu 18.04 LTS 的系统完成安装。

### 硬件准备（强制恢复模式）

在进行安装步骤之前，我们需要确保 reServer J2032 处于强制恢复模式。

**步骤 1.** 在开始之前，您需要断开 reServer J2032 的电源。

**步骤 2.** 要进入恢复模式，您需要使用跳线连接 **FC REC** 和 **GND** 引脚。引脚位置如下图所示：

<div align="center">
  <p style={{fontSize: 'x-large', fontWeight: 'bold'}}>
    强制恢复跳线设置指南
  </p><table>
    <tbody><tr>
      </tr>
      <tr>
        <td align="center">
          <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reServerJ2032/force_recover.png" /></div>
        </td>
        <td align="center">
          <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/debugheader_REC.png" /></div>
          <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/j2032jumper.png" /></div>
        </td>
      </tr>
    </tbody></table>
</div>



**步骤 3.** 使用 Type-C 数据线将 reServer J2032 的 `NX USB`（如图所示）Type-C 接口连接到 Linux 主机电脑，插入 12V/5A DC 电源线，然后按下前面的电源按钮为 reServer J2032 通电。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/back_type_c.png" /></div>


<!-- !!!Attention
    接线前，请注意电源连接器和数据连接器，请勿将数据连接器直接连接到 DC 电源。 -->

**步骤 4.** 现在在 **主机电脑（Ubuntu 18.04）** 上打开 `终端`，输入命令 `lsusb`。当返回内容中包含 `ID 0955:7e19 NVidia Corp.` 时，说明 reServer J2032 已进入强制恢复模式，我们可以继续下一步。

- 对于 Jetson Xavier NX：**0955:7e19 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/A203E/NX_lsusb.png" /></div>

## 通过 NVIDIA SDK Manager 刷写 JetPack 操作系统

接下来我们将学习如何通过 NVIDIA SDK Manager 安装系统。NVIDIA SDK Manager 是一个集成开发工具，包含开发者软件并提供端到端的开发环境设置解决方案，因此推荐初学者使用。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png" /></div>


### 第 1 步：在 Linux 主机 PC 上安装 NVIDIA SDK Manager

我们需要在 Linux 主机 PC 上打开浏览器，并从 NVIDIA 官方网站<a href="https://developer.nvidia.com/nvidia-sdk-manager" target="_blank"><span>下载 NVIDIA SDK Manager</span></a>。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk.png" /></div>


### 第 2 步：打开 NVIDIA SDK Manager 并登录

在 Linux 主机 PC 的屏幕上，我们可以右键单击并打开一个 `Terminal`。然后输入以下命令以启动 SDK Manager：

`sdkmanager`

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png" /></div>


首次使用 NVIDIA SDK Manager 时，会弹出一个网页，提示您使用之前注册的 NVIDIA 账户登录。

### 第 3 步：选择目标设备

登录后，您将进入安装的第一个界面。由于我们已经连接了 reServer J2032，会弹出一个窗口让您选择硬件设备。

reServer J2032 配备了 **NVIDIA Jetson NX 模块**，因此我们可以选择第一个选项。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg" /></div>


在第一个界面中还有更多选项可供选择：

- 在产品类别面板中需要选择 **Jetson**。
- 在硬件配置面板中，我们建议**不要选择 Host Machine**。如果选择此项，将需要更多时间来为当前的 Ubuntu 主机安装 NVIDIA 组件。如果需要，可以选择此项。
- 在目标操作系统面板中，我们可以选择不同的**操作系统**和 **JetPack 版本**。但请注意 JetPack 的版本，不同模块可能支持不同类型的 JetPack。我们推荐使用 "JetPack 4.6.1"。
- 在附加 SDK 中，由于 eMMC 的存储空间只有 16GB，如果在此安装 DeepStream，可能会导致内存不足。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png" /></div>


点击 Continue 继续下一步。

### 第 4 步：检查所需组件

在 **Details and License** 中，您可以展开主机组件和目标组件面板，查看将安装到系统中的组件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png" /></div>


如果您只需要安装系统，可以取消勾选 SDK 组件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png" /></div>


!!!提示
    在选择安装哪些组件时，请注意容量的使用情况。内置的 eMMC 大小只有 16GB，请根据实际需求合理分配和使用空间。
    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>

    实际测试后，安装完整的 SDK 组件后，eMMC 空间仅剩约 500MB。

    <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>


    如果您想了解如何解决容量不足的问题，请参考 [故障排除](https://wiki.seeedstudio.com/cn/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space)。

如果您希望 SDK Manager 将所有文件下载到默认路径以外的位置，请转到屏幕底部的 Download & Install Options，然后选择您希望使用的路径。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png" /></div>


选择 Continue 继续下一步。

### 第 5 步：安装系统

在安装开始之前，SDK Manager 会提示您输入 `sudo` 密码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png" /></div>


稍后，我们将被要求为 reServer J2032 设置新系统。由于我们手动强制进入恢复模式，因此在此选择 `Manual setup: set the target to Force Recovery Mode via manual operations`。同时，选择默认的 **Pre-Config**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png" /></div>


之后，我们需要为 reServer J2032 的新 Jetson 系统输入用户名和密码，这些信息由您自行设置。

准备就绪后，点击 `Flash` 继续。

显示屏将显示软件下载和安装的进度。请耐心等待安装完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png" /></div>


### （可选）第 6 步：安装 SDK 组件

如果您在之前的 **第 4 步** 中勾选了组件安装，则需要完成此步骤。

稍后，您将在 NVIDIA SDK Manager 中看到一个新窗口弹出，提示您需要通过 IP 地址连接到设备。这意味着系统已经安装完成，组件安装将继续进行。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png" /></div>

在这种情况下，我们可以**拔出跳线帽**并重新启动 reServer J2032。然后需要通过 HDMI/Display Port 将 reServer J2032 连接到显示器，输入您在**步骤 4**中设置的密码，并登录到主界面。

此时，您需要将 reServer J2032 连接到与 Linux 主机 PC 相同的局域网，并使用命令 `ifconfig` 确定 Jetson 的**IP 地址**。

返回到 Linux 主机 PC，输入刚刚获取的 IP 地址。NVIDIA SDK Manager 将尝试连接到 Jetson 设备，并继续完成下一步 SDK 组件的安装。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png" /></div>

当您看到以下窗口出现时，说明安装已经完成。您可以开始使用 Jetson，或者继续按照以下步骤完成新系统的一些基本配置。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png" /></div>

!!!注意
    在重新上电进入系统之前，请务必拔掉跳线帽并退出强制恢复模式。

## 通过命令行刷写 JetPack 操作系统

由于可以自由定制 BSP（NVIDIA Linux 驱动程序包），对于熟悉 Linux 的用户来说，通过命令行刷写 JetPack 操作系统非常简单。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### 第 1 步：下载适配的 NVIDIA Linux 驱动程序包

在**Linux 主机 PC**上，我们需要打开浏览器并访问 <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>。首先，我们需要检查 Jetson Linux 的版本是否支持我们的 reServer J2032 Jetson 模块。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/select_L4T.png" /></div>

找到适配的版本后，点击进入下载页面。找到并点击“L4T Driver Package (BSP)”和“Sample Root Filesystem”以下载驱动文件。文件名类似于 `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` 和 `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reServerJ2032/download_file.png" /></div>

例如，我们选择 NVIDIA L4T 32.7.1 版本，因为它包含在 JetPack4.6.1 中，并支持 Jetson Nano 模块。文件名如下：

- Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
- Jetson_Linux_R32.7.1_aarch64.tbz2

### 第 2 步：解压缩包文件并通过命令行组装 Rootfs

在 Linux 主机 PC 上，我们需要找到一个文件夹来存储之前下载的包文件。然后在该文件夹中打开命令行窗口（终端），并使用以下命令解压文件并组装 rootfs：

```sh
$ tar xf ${L4T_RELEASE_PACKAGE}
$ cd Linux_for_Tegra/rootfs/
$ sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
$ cd ..
$ sudo ./apply_binaries.sh
```

!!!注意
    `${}` 是您放置文件名的地方。

*以 **NVIDIA L4T 32.7.1** 为例，下载的文件存储在 `/Desktop/L4T_Drivers` 中，因此我们在 `/Desktop/L4T_Drivers` 路径下打开命令行窗口（终端）并执行以下命令。

```sh
$ tar xf Jetson_Linux_R32.7.1_aarch64.tbz2
$ cd Linux_for_Tegra/rootfs/
$ sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2
$ cd ..
$ sudo ./apply_binaries.sh
```

输出应如下所示：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png" /></div>

### 第 3 步：将系统刷写到 reComputer

由于我们已经将 reComputer J1020 强制进入恢复模式，并且模块是 Jetson Nano，因此可以直接执行以下命令将系统刷写到 reComputer：

```sh
sudo ./flash.sh -r jetson-xavier-nx-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>

!!!提示
    刷写 L4T 大约需要 10 分钟，或者在主机性能较低时可能需要更长时间。

此时，我们可以拔掉跳线帽，然后重新为 reComputer 上电以开始使用。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时能够获得尽可能顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>