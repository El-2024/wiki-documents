---
description: A607 载板
title: A607 载板
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_A607_Flash_System
last_update:
  date: 05/15/2025
  author: Lakshantha
---

# 将 JetPack OS 刷写到 A607 载板（支持 NVIDIA Jetson Orin NX/Nano）

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A607/1.png" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A607-Carrier-Board-for-Jetson-Orin-NX-Nano-p-5634.html"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

在本篇 Wiki 中，我们将向您展示如何将 [Jetpack](https://developer.nvidia.com/embedded/jetpack) 刷写到连接到 A607 载板的 NVMe SSD 上。A607 载板支持 NVIDIA Jetson Orin NX 模块和 NVIDIA Jetson Orin Nano 模块。

## 前置条件

- Ubuntu 主机 PC（原生或使用 VMware Workstation Player 的虚拟机）
- 带有 Jetson Orin NX 或 Jetson Orin Nano 模块的 A607 载板
- USB Type-C 数据传输线

## 进入强制恢复模式

在进行安装步骤之前，我们需要确保开发板处于强制恢复模式。

**步骤 1.** 使用 USB 数据线将开发板上的 Type-C 接口与 Linux 主机 PC 连接。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A607/3.png" /></div>

**步骤 2.** 按住 RECOVERY 按钮，同时连接电源适配器到开发板上的 DC JACK 接口以启动开发板。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A607/2.png" /></div>

**步骤 3.** 在 Linux 主机 PC 上，打开终端窗口并输入命令 `lsusb`。如果返回的内容中包含以下输出之一（根据您使用的 Jetson SoM），则说明开发板已进入强制恢复模式。

- 对于 Orin NX 16GB: **0955:7323 NVidia Corp**
- 对于 Orin NX 8GB: **0955:7423 NVidia Corp**
- 对于 Orin Nano 8GB: **0955:7523 NVidia Corp**
- 对于 Orin Nano 4GB: **0955:7623 NVidia Corp**

以下图片为 Orin NX 16GB 的示例：

<div align="center"><img width="{700}" src="https://files.seeedstudio.com/wiki/A607/4.png" /></div>

**步骤 4.** 移除跳线。

## 下载外设驱动

首先，您需要为此开发板安装外设驱动。这些驱动是开发板上一些硬件外设正常运行所必需的。点击以下链接，根据您的 Jetson 模块下载相应的驱动。

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetson 模块</th>
      <th>JetPack 版本</th>
      <th>L4T 版本</th>
      <th>下载链接</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>Jetson Orin NX 8GB/ 16GB</td>
      <td>5.1</td>
      <td>35.2.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-NX-JP5.1.zip/download" target="_blank" rel="noopener noreferrer">下载</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-NX-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">下载</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQS4f032w2VIsYE-4Bs80K8BIRD7YGXgBdDq6umW3zCIlw?e=l0LWr0" target="_blank" rel="noopener noreferrer">下载</a></td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ecv3iI8SWcNJs7f_6_bOcyIB9xr9o9x7Ghs98Hj07Im1Ew?e=fkwe6b" target="_blank" rel="noopener noreferrer">下载</a></td>
    </tr>
    <tr>
      <td rowSpan={3}>Jetson Orin Nano 4GB</td>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-Nano-4GB-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">下载</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQS4f032w2VIsYE-4Bs80K8BIRD7YGXgBdDq6umW3zCIlw?e=l0LWr0" target="_blank" rel="noopener noreferrer">下载</a></td>
    </tr>  
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ecv3iI8SWcNJs7f_6_bOcyIB9xr9o9x7Ghs98Hj07Im1Ew?e=fkwe6b" target="_blank" rel="noopener noreferrer">下载</a></td>
    </tr>
    <tr>
      <td rowSpan={3}>Jetson Orin Nano 8GB</td>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-Nano-8GB-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">下载</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQS4f032w2VIsYE-4Bs80K8BIRD7YGXgBdDq6umW3zCIlw?e=l0LWr0" target="_blank" rel="noopener noreferrer">下载</a></td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ecv3iI8SWcNJs7f_6_bOcyIB9xr9o9x7Ghs98Hj07Im1Ew?e=fkwe6b" target="_blank" rel="noopener noreferrer">下载</a></td>
    </tr>
  </tbody>
</table>
</div>

**注意：** 目前我们提供以上驱动。随着新 JetPack 版本的发布，我们将持续更新驱动。

## 刷写到 Jetson

:::note
 在开始刷写之前，请注意，Jetson Orin NX 模块仅支持 JetPack 5.1 及以上版本，而 Jetson Orin Nano 模块仅支持 JetPack 5.1.1 及以上版本。
:::  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1/JP5.1.1" label="JP5.1/JP5.1.1">

### Jetson Orin NX

这里我们将使用 NVIDIA L4T **35.3.1** 在搭载 Jetson Orin NX 模块的 A607 扩展板上安装 **Jetpack 5.1.1**。

**步骤 1：** 在主机 PC 上[下载](https://developer.nvidia.com/embedded/jetson-linux-r3531) NVIDIA 驱动程序。所需的驱动程序如下所示：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**步骤 2：** 将之前下载的外设驱动程序移动到与 NVIDIA 驱动程序相同的文件夹中。现在您将在同一文件夹中看到三个压缩文件。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/A607/5.png" /></div>

**步骤 3：** 解压 **Jetson_Linux_R35.3.1_aarch64.tbz2** 和 **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2**，通过导航到包含这些文件的文件夹，应用更改并安装必要的前置条件。

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**步骤 4：** 解压 **A607-Orin-NX-JP5.1.1.zip**。这里我们需要额外安装 **unzip** 软件包来解压 .zip 文件。

```sh
cd ..
sudo apt install unzip 
unzip A607-Orin-NX-JP5.1.1.zip
```

此时系统会询问是否替换文件。输入 **A** 并按 **ENTER** 键以替换必要的文件。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/A607/7.jpg" /></div>

**步骤 5：** 配置您的用户名、密码和主机名，以便设备启动完成后无需进入 Ubuntu 安装向导。

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例如（用户名："nvidia"，密码："nvidia"，设备名："nvidia-desktop"）：

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**步骤 6：** 将系统刷写到 NVMe SSD 或 USB 闪存驱动器。

#### NVMe SSD

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

#### USB 闪存驱动器

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

如果刷写过程成功，您将看到以下输出：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

### Jetson Orin Nano

这里我们将使用 NVIDIA L4T **35.3.1** 在搭载 Jetson Orin Nano 模块的 A607 扩展板上安装 **Jetpack 5.1.1**。请注意，4GB 和 8GB 的 Orin Nano 模块使用不同的驱动文件，安装步骤略有不同。

**步骤 1：** 在主机 PC 上[下载](https://developer.nvidia.com/embedded/jetson-linux-r3531) NVIDIA 驱动程序。所需的驱动程序如下所示：

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**步骤 2：** 将之前下载的外设驱动程序移动到与 NVIDIA 驱动程序相同的文件夹中。现在您将在同一文件夹中看到三个压缩文件。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/A607/8.png" /></div>

**步骤 3：** 解压 **Jetson_Linux_R35.3.1_aarch64.tbz2** 和 **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2**，通过导航到包含这些文件的文件夹，应用更改并安装必要的前置条件。

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**步骤 4：** 对于 8GB 版本，解压 **A607-Orin-Nano-8GB-JP5.1.1.zip**；对于 4GB 版本，解压 **A607-Orin-Nano-4GB-JP5.1.1.zip**。这里我们需要额外安装 **unzip** 软件包来解压 .zip 文件。

```sh
cd ..
sudo apt install unzip 
# 对于 8GB 版本
unzip A607-Orin-Nano-8GB-JP5.1.1.zip
# 对于 4GB 版本
unzip A607-Orin-Nano-4GB-JP5.1.1.zip
```

此时系统会询问是否替换文件。输入 **A** 并按 **ENTER** 键以替换必要的文件。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/A607/10.jpg" /></div>

**步骤 5：** 配置您的用户名、密码和主机名，以便设备启动完成后无需进入 Ubuntu 安装向导。

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

例如（用户名："nvidia"，密码："nvidia"，设备名："nvidia-desktop"）：

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**步骤 6：** 将系统刷写到 NVMe SSD 或 USB 闪存驱动器。

#### NVMe SSD

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit internal
```

#### USB 闪存驱动器

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit internal
```

如果刷写过程成功，您将看到以下输出：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>
</TabItem>

<TabItem value="JP6.0" label="JP6.0">

这里我们将使用 NVIDIA L4T **36.3** 在搭载 Jetson Orin NX 模块的 A607 扩展板上安装 **Jetpack 6.0**。

## 配置步骤

### **步骤 1:** [下载](https://developer.nvidia.com/embedded/jetson-linux-r363) NVIDIA 驱动到主机 PC 上。所需的驱动如下所示：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

### **步骤 2:** 将之前下载的外设驱动移动到与 NVIDIA 驱动相同的文件夹中。现在你会在同一个文件夹中看到三个压缩文件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A607/compressed_files.png" /></div>

### **步骤 3:** 解压 **Jetson_Linux_R36.3.0_aarch64.tbz2** 和 **Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2**，进入包含这些文件的文件夹，应用更改并安装必要的前置条件：

```sh
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

### **步骤 4:** 解压 **A607-JP6.0.zip**。这里我们需要额外安装 **unzip** 软件包来解压 .zip 文件：

```sh
cd ..
sudo apt install unzip 
sudo unzip A607-JP6.0.zip
```

在此过程中会询问是否替换文件。输入 **A** 并按下 **ENTER** 键以替换必要的文件：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A607/replace_files.png" /></div>

### **步骤 5:** 将系统刷写到 NVMe SSD：

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

如果刷写过程成功，你将看到以下输出：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

在这里，我们将使用 NVIDIA L4T **36.4** 在 A607 扩展板上安装 **Jetpack 6.1**，搭配 Jetson Orin NX 模块。

### **步骤 1:** [下载](https://developer.nvidia.com/embedded/jetson-linux-r3640) NVIDIA 驱动到主机 PC 上。所需的驱动如下所示：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

### **步骤 2:** 将之前下载的外设驱动移动到与 NVIDIA 驱动相同的文件夹中。现在你会在同一个文件夹中看到三个压缩文件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A607/a607_jp6.1.png" /></div>

:::note
你可以使用以下命令验证下载的文件是否完整。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A607/verify_download_file.webp"/>
</div>
:::

### **步骤 3:** 解压 **Jetson_Linux_R36.4.0_aarch64.tbz2** 和 **Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2**，进入包含这些文件的文件夹并应用更改：

```bash
cd <path_to_files>
tar xf Jetson_Linux_R36.4.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

### **步骤 4:** 解压 **A607_Jetpack_6.1.tar.gz**：

```sh
cd ..
tar xf A607_Jetpack_6.1.tar.gz
sudo cp -r 607_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/
```

### **步骤 5:** 将系统刷写到 NVMe SSD：

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

如果刷写过程成功，你将看到以下输出：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>

</Tabs>

---

## 配置 WiFi 和蓝牙

刷写成功后，Jetson 将启动到操作系统。现在你需要额外配置 WiFi 和蓝牙。

### **步骤 1:** 访问 [此页面](https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/WiFi-BT-Driver) 并点击 **8723du.ko** 下载所需的 WiFi/蓝牙驱动文件，然后将其复制到设备中。

### **步骤 2:** 为驱动创建一个新目录：

```sh
cd /lib/modules/5.10.104-tegra/kernel/drivers/net/wireless/realtek/
sudo mkdir rtl8723du
```

### **步骤 3:** 将之前下载的 **8723du.ko** 文件复制到新创建的目录中：

```sh
cd ~
sudo cp 8723du.ko /lib/modules/5.10.104-tegra/kernel/drivers/net/wireless/realtek/rtl8723du
```

### **步骤 4:** 启用驱动：

```sh
sudo modprobe cfg80211
sudo insmod /lib/modules/5.10.104-tegra/kernel/drivers/net/wireless/realtek/rtl8723du/8723du.ko
sudo depmod -a
sudo modprobe 8723du
sudo echo 8723du >> /etc/modules
```

### **步骤 5:** 重启设备：

```sh
sudo reboot
```

---

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>