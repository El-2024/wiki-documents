---
description: J101 启用 SD 卡
title: J101 启用 SD 卡
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/J101_Enable_SD_Card
last_update:
  date: 01/05/2022
  author: w0x7ce

no_comments: false # 用于 Disqus

---

<!-- # 从 SD 卡启动 NVIDIA JetPack 操作系统，适用于 J101 扩展板 -->

# J101 启用 SD 卡

此方法是在 J101 扩展板上将 NVIDIA JetPack 操作系统刷入 SD 卡，并在 reComputer J1010 上运行。因此，首先需要<a href="https://wiki.seeedstudio.com/cn/reComputer_J1010_J101_Flash_Jetpack/" target="_blank"><span>将 JetPack 操作系统刷入 reComputer J1010</span></a>。

## 驱动配置

首先，我们需要启动 reComputer 并进入如下所示的桌面：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/S.png" /></div>

### 第 1 步：克隆代码库

右键单击并打开终端，然后执行以下命令以下载相关代码：

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git
```

### 第 2 步：编译 jetson-sdmmc-overlay

进入工作目录：

```bash
cd seeed-linux-dtoverlays
```

对于 J101 扩展板，我们需要修改文件 "overlays\jetsonnano\jetson-sdmmc-overlay.dts" 中的 "compatible" 值。

```bash
sed -i '17s#JETSON_COMPATIBLE#\"nvidia,p3449-0000-b00+p3448-0002-b00\"\, \"nvidia\,jetson-nano\"\, \"nvidia\,tegra210\"#' overlays/jetsonnano/jetson-sdmmc-overlay.dts
```

<!-- 如下所示。

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/change.png"/></div> -->

然后，我们编译修改过的文件以确保其被正确修改。

```bash
make overlays/jetsonnano/jetson-sdmmc-overlay.dtbo
```

### 第 3 步：确保 SD 卡可以被识别

将 SD 卡插入 **J101 扩展板**。

```bash
sudo cp overlays/jetsonnano/jetson-sdmmc-overlay.dtbo /boot/
cd /boot/
sudo /opt/nvidia/jetson-io/config-by-hardware.py -l
```

执行上述命令后，我们应该会得到**类似**（**可能不完全相同，具体取决于外设和已安装的驱动程序**）如下的输出，并确认 SD 卡已被识别：

```txt
    Header 1 [default]: Jetson 40pin Header
    Available hardware modules:
    1. Adafruit SPH0645LM4H
    2. Adafruit UDA1334A
    3. FE-PI Audio V1 and Z V2
    4. MCP251x CAN Controller
    5. ReSpeaker 4 Mic Array
    6. ReSpeaker 4 Mic Linear Array
    7. reComputer sdmmc
    Header 2: Jetson Nano CSI Connector


    Available hardware modules:
    1. Camera IMX219 Dual
    2. Camera IMX477 Dual
    3. Camera IMX477-A and IMX219-B
    Header 3: Jetson M.2 Key E Slot
    No hardware configurations found!
```

### 第 4 步：命名设备并完成驱动安装

```bash
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "reComputer sdmmc"
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/fix01.png" /></div>

!!!注意
    完成首次安装后，您可能需要**重启**以运行 jtop。

<!-- ## 将系统迁移到 SD 卡

首先，我们需要克隆包含所需工具的脚本。

```bash
git clone https://github.com/limengdu/bootFromUSB
```

其次，我们需要确保 SD 卡为 ext4 格式，可以在 "磁盘" 工具中直观地看到。如果不是 ext4 格式，我们需要格式化并将其更改为 ext4 格式。

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_view_1.png"/></div>

然后，进入脚本目录，执行以下命令：

```bash
cd bootFromUSB
./copyRootToUSB.sh -p /dev/mmcblk1p1
```

等待一段时间，直到自动完成。如果没有报错，则烧录完成。


## 启动配置

当驱动程序成功安装并配置后，我们可以通过类似 "lsblk" 的命令查看，或者在 "/dev" 中查看设备。

### 更改启动设备

我们需要修改 "/boot/extlinux/extlinux.conf" 文件中的配置。

- 从 SD 卡启动

    在我们从载板上的 eMMC 启动后，想要修改为从 SD 卡启动。我们需要确保之前的步骤，包括系统烧录到 SD 卡以及 SD 卡驱动程序已正确安装。将 root 参数修改为我们要启动的设备地址。当完成修改后，重新启动系统。

    **重新启动前修改 "/boot/extlinux/extlinux.conf"，重新启动后查看 "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf"**

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_3.png"></div>

    !!!注意
        从 SD 卡启动系统后的配置文件是 "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf"，而从板载 eMMC 启动系统后的配置文件是 "/boot/extlinux/extlinux.conf"。它们是设备读取配置并在上电后选择启动系统的同一个文件，当系统完成启动后，相关路径会发生变化。

- 从板载 eMMC 启动

    如果我们从 SD 卡启动后想要切换回 eMMC 启动，或者需要更换 SD 卡，我们需要将设备切换回 eMMC 启动。以下是需要进行的修改。

    **重新启动前修改 "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf"，重新启动后查看 "/boot/extlinux/extlinux.conf"**

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_4.png"></div>

最终，我们发现它确实运行良好。

- 从 eMMC 启动

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_emmc.png"></div>

- 从 SD 卡启动

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_sd.png"></div> -->

## 更多

### 更改 SD 卡 I/O 速度

我们在 <a href="https://wiki.seeedstudio.com/cn/install_NVIDIA_software_to_Jetson-101" target="_blank"><span>reComputer J101 载板</span></a> 上提供了 SD 卡功能，支持 CLK 频率为 48MHz。这里的 CLK 设计是为了满足认证要求（如 CE/FCC）。如果您希望自行提高 CLK，可以使用以下指令。

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/jetsonnano/jetson-sdmmc-overlay.dts" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/jetsonnano/jetson-sdmmc-overlay.dts" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

- **步骤 1**. 克隆此仓库并修改以下代码。

    ```bash
    git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
    ```

- **步骤 2**. 修改并编译 max-clk-limit 值

    ```bash
    cd seeed-linux-dtoverlays
    sed -i '10s#48000000#208000000#' overlays/jetsonnano/jetson-sdmmc-overlay.dts
    make overlays/jetsonnano/jetson-sdmmc-overlay.dtbo
    sudo cp overlays/jetsonnano/jetson-sdmmc-overlay.dtbo /boot/
    sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "reComputer sdmmc"
    ```

- **步骤 3**. 重启

    ```bash
    reboot
    ```

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>