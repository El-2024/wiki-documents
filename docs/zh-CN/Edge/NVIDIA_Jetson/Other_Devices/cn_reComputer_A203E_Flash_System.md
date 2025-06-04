---
description: 将 Jetpack 刷入 A203E Mini PC
title: A203E Mini PC
tags:
  - Mini PC Jetpack 刷入
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_A203E_Flash_System
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # 用于 Disqus

---
# 将 JetPack OS 刷入 A203E Mini PC (NVIDIA Jetson Xavier NX)

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- ---
name: 
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 
tags:
--- -->

在本教程中，我们将向您展示如何将 Jetpack OS 刷入支持 NVIDIA Jetson Xavier NX 模块的 A203E Mini PC。我们将介绍两种刷入系统的方法，并且由于 A203E Mini PC 与官方 NVIDIA Jetson 承载板不同，因此需要安装相应的驱动程序。

<div align="center">
  <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"><a href="https://www.seeedstudio.com/A203-Mini-PC-with-128GB-SSD-p-5494.html" target="_blank" rel="noopener"><img width={600} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/a/2/a203_mini_pc_-1.png" alt /></a></p>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A203-Mini-PC-with-128GB-SSD-p-5494.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 入门指南

我们可以通过 **Linux 终端**轻松完成此操作。对于有 Linux 基础知识的用户，我们强烈推荐仅使用 Linux 终端。

- [通过 Linux 终端刷入 JetPack OS](#flashing-jetpack-os-via-command-line)

### 软件准备

- <a href="https://developer.nvidia.com/login" target="_blank"><span>NVIDIA 账户</span></a>
- 主机电脑上安装 Ubuntu 18.04 操作系统

!!!note
	在本教程中，我们将使用基于 Ubuntu 18.04 LTS 的系统完成安装。

### 硬件准备（强制恢复模式）

* 安装了 Ubuntu 18.04 操作系统的主机电脑
* 一根 Micro-USB 数据线
* A203E 的电源适配器

在进行安装步骤之前，我们需要确保开发板处于强制恢复模式。

**步骤 1.** 首先，请找到 A203E 侧面的 Micro-USB 接口、电源键和复位键。

要将 A203E 置于强制恢复模式，请确保 A203E 已关闭电源。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/A203E/a203E_interface.png" /></div>

**步骤 2.** 使用 Micro-USB 数据线将 A203E 和主机电脑连接起来。

**步骤 3.** 连接 A203E 的电源适配器。

**步骤 4.** **按住**复位键，然后**按住**电源键，等待 LED 灯亮起后，**松开**电源键，**等待 2 秒**后**松开**复位键。

**步骤 5.** 在 Linux 主机电脑屏幕上，右键单击鼠标打开终端并输入命令 `lsusb`。当返回的内容中包含 `NVidia Corp.` 时，表示您的 A203 承载板已进入强制恢复模式，可以继续后续操作。

ID 取决于承载板上的模块，信息如下所示：

- 对于 Jetson Xavier NX: **0955:7e19 NVidia Corp**

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/A203E/NX_lsusb.png" /></div>

## 通过命令行刷入 JetPack OS

以下是使用命令行脚本刷入 Jetpack OS 的工作流程：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png" /></div>

### 步骤 1. 下载适配的 NVIDIA Linux 驱动包

在 **Linux 主机电脑**上，我们需要打开浏览器并访问 <a href="https://developer.nvidia.com/embedded/jetson-linux-archive" target="_blank"><span>Jetson Linux Archive</span></a>。首先，我们需要检查 Jetson Linux 的版本是否受支持。在本例中，我们使用 NVIDIA L4T 35.1.0（相当于 Jetpack 5.0.2）。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/select_35_1.png" /></div>

找到合适的版本后，点击进入下载页面。找到并点击 "L4T Driver Package (BSP)" 和 "Sample Root Filesystem" 下载驱动文件。文件名类似于 `Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2` 和 `Jetson-210_Linux_Rxx.x.x_aarch64.tbz2`。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A203E/download_files.png" /></div>

以此为例，我们选择 NVIDIA L4T 35.1.0 版本，文件名应为：

- Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
- Jetson_Linux_R35.1.0_aarch64.tbz2

### 步骤 2. 解压包文件并通过命令行组装 Rootfs

在 Linux 主机电脑上，请打开 ``终端`` 并使用以下命令解压文件并组装 rootfs：

```sh
$ tar xf ${L4T_RELEASE_PACKAGE}
$ cd Linux_for_Tegra/rootfs/
$ sudo tar xpf ../../${SAMPLE_FS_PACKAGE}
$ cd ..
$ sudo ./apply_binaries.sh
```

!!!Note
    `${XXX_XX_XXX}` 是您下载文件的名称。

* 例如，下载的文件存储在 `~/Downloads/` 中，请在 Ubuntu 主机电脑上打开 ``终端`` 并输入以下命令：

```bash
cd ~/Downloads/
mkdir Jetpack_502
mv Jetson_Linux_R35.1.0_aarch64.tbz2 Jetpack_502/
mv Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2 Jetpack_502/
cd Jetpack_502/
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

### 步骤 3. 下载并应用驱动程序

在 Linux 主机电脑上，请通过点击 <a href="https://files.seeedstudio.com/wiki/A203_V.2/203_jp5.0.2.zip">*A203E 驱动下载*</a> 下载我们准备好的驱动程序。

要应用驱动程序，请在 ``终端`` 中输入以下命令，继续之前的示例步骤，其中驱动文件已下载并保存在 **~/Downloads** 文件夹中，同时我们在 **~/Downloads** 文件夹中创建了 **Jetpack_502** 文件夹，以确保我们仅在 **Linux_for_Tegra** 文件夹中拥有最新的 **Jetpack 5.0.2** 系统文件：

```
cd ~/Downloads/
unzip 203_jp5.0.2.zip
cp -r203_jp5.0.2/203_jp5.0.2/Linux_for_Tegra Jetpack_501/Linux_for_Tegra
```

### 第 4 步. 将系统刷写到开发板

在本示例中，我们使用 NVIDIA Jetson Xavier NX 模块，可以直接将系统刷写到开发板上，执行以下命令：

```sh
cd ~/Downlands/Jetpack_502/Linux_for_Tegra
sudo ./flash.sh -r jetson-xavier-nx-devkit-emmc mmcblk0p1
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png" /></div>


## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>