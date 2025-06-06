---
description: 本教程主要介绍 M.2 Hat 和双 Hat 的硬件连接配置，以及如何让 Raspberry Pi 从 SSD 启动。
title: Raspberry Pi 5 使用 PCIe Hat/双 Hat
keywords:
  - M.2 hat
  - 双 hat
  - Raspberry Pi
image: https://files.seeedstudio.com/wiki/M.2_Hat/new/m.2-dual-hat-for-raspberry-pi-5.webp
slug: /cn/raspberry_pi_5_uses_pcie_hat_dual_hat
last_update:
  date: 05/15/2025
  author: Jiahaoli

---

# 写入速度命令

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介

本教程主要介绍 M.2 Hat/双 Hat 的硬件连接配置，以及如何让 Raspberry Pi 从 SSD 启动。还包括两种安装方法：带外壳和不带外壳，并测试在不同条件下的 SSD 读写速度。

## 入门

### 硬件准备

<div class="table-center">
	<table align="center">
	<tr>
		<th>Raspberry Pi5 8GB</th>
		<th>M.2 Hat/双 Hat</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102110919-raspberry-pi-5-8gb-font.jpg" style={{width:600, height:'auto'}}/></div></td>
	  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-103110064-pcie-to-m.2-dual-hat-for-raspberry-pi-5-fonmt.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/PCIe-to-dual-M-2-hat-for-Raspberry-Pi-5-p-5973.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

对于不带外壳的安装，您需要准备以下材料：

- ① Raspberry Pi 5
- ② M.2 Hat/双 Hat
- ③ SSD/AI Kit PCIe 设备
- ④ PCIe 设备固定螺丝
- ⑤ M.2 Hat 和 Raspberry Pi 之间的 PCIe 连接线
- ⑥ 螺纹套筒、长螺丝和螺母

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/1.jpg" alt="pir" width="700" height="auto" /></div>

对于带外壳的安装，您需要准备以下材料：

- ① Raspberry Pi 5
- ② M.2 Hat/双 Hat
- ③ SSD/AI Kit PCIe 设备
- ④ PCIe 设备固定螺丝
- ⑤ M.2 Hat 和 Raspberry Pi 之间的 PCIe 连接线
- ⑥ 长螺丝和螺母
- ⑦ [外壳](https://files.seeedstudio.com/wiki/M.2_Hat/Seeed%20M.2%20hat%20with%20Pi5%20case_sam-20240827.stp)

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/1_2.jpg" alt="pir" width="700" height="auto" /></div>

### 安装

> **注意：** 这是一个提示。`在使用 M.2 双 Hat 于 Raspberry Pi 上之前，请用酒精棉擦拭 pogo pin 和 GPIO pad，然后再连接。`

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/hat.jpg" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/pi5_GPIO_Pad.png" alt="pir" width="700" height="auto" /></div>


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="不带外壳的安装">
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/2.jpg" alt="pir" width="700" height="auto" /></div>

**步骤 1**：将 PCIe 连接线插入 M.2 Hat，注意电缆的插入方向。将 M.2 Hat 的 PCIe 接口金属面朝下插入，如图所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/3.jpg" alt="pir" width="700" height="auto" /></div>

**步骤 2**：将 PCIe 连接线插入 Raspberry Pi 5。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/4.jpg" alt="pir" width="700" height="auto" /></div>

请注意电缆的插入方向。将 Raspberry Pi 5 的 PCIe 接口金属面朝上插入，如图所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/5.jpg" alt="pir" width="700" height="auto" /></div>

**步骤 3**：将 Raspberry Pi 5 与 M.2 Hat 重叠，并将螺纹套筒插入螺丝中。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/6.jpg" alt="pir" width="700" height="auto" /></div>

然后将螺丝插入 Raspberry Pi 5 和 M.2 Hat 的螺丝孔中，如图所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/7.jpg" alt="pir" width="700" height="auto" /></div>

**步骤 4**：将螺柱拧入螺丝，并将螺丝固定到电路板上，如图所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/8.jpg" alt="pir" width="700" height="auto" /></div>

**步骤 5**：将 SSD 和 AI Kit 插入 M.2 双 Hat。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/10.jpg" alt="pir" width="700" height="auto" /></div>

然后插入固定螺丝，将 SSD 和 AI Kit 固定在 M.2 Hat 上，如图所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/11.jpg" alt="pir" width="700" height="auto" /></div>
</TabItem>

<TabItem value="Method 2" label="带外壳的安装">
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/2.jpg" alt="pir" width="700" height="auto" /></div>

**步骤 1**：将 PCIe 连接线插入 M.2 Hat。请注意电缆的插入方向，将金属面朝下插入 M.2 Hat 的 PCIe 接口。插入后，如图所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/3.jpg" alt="pir" width="700" height="auto" /></div>

**步骤 2**：将 PCIe 连接线插入 Raspberry Pi 5。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/4.jpg" alt="pir" width="700" height="auto" /></div>

请注意电缆的插入方向，将金属面朝上插入 Raspberry Pi 5 的 PCIe 接口。插入后，如图所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/5.jpg" alt="pir" width="700" height="auto" /></div>

**步骤 3**：将 Raspberry Pi 5 和 M.2 Hat 叠放在一起，并准备外壳、螺丝、螺母和 PCIe 设备。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/12.jpg" alt="pir" width="700" height="auto" /></div>

将叠放好的 M.2 Hat 和 Raspberry Pi 放入外壳中，Raspberry Pi 位于顶部，如图所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/13.jpg" alt="pir" width="700" height="auto" /></div>

**步骤 4**：将螺丝拧入外壳中预留的螺丝孔中。此孔将连接 M.2 Hat 和 Raspberry Pi，从而固定 M.2 Hat、Raspberry Pi 5 和外壳。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/14.jpg" alt="pir" width="700" height="auto" /></div>

**步骤 5**：将螺柱拧入螺丝中，以固定 M.2 Hat、Raspberry Pi 5 和外壳。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/15.jpg" alt="pir" width="700" height="auto" /></div>

**步骤 6**：将 SSD 和 AI Kit 插入 M.2 Hat，如图所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/16.jpg" alt="pir" width="700" height="auto" /></div>

**步骤 7**：拧入固定螺丝以将 SSD 固定在 M.2 Hat 上。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/17.jpg" alt="pir" width="700" height="auto" /></div>

**步骤 8**：安装剩余的外壳。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/18.jpg" alt="pir" width="700" height="auto" /></div>
</TabItem>
</Tabs>

### 使用 SD 卡复制工具将操作系统刷入 Raspberry Pi OS 上的 NVMe SSD

*此方法适用于您拥有 SD 卡并已成功启动设备的情况。请确保您的系统是最新的 Raspberry Pi 系统（Bookworm 或更高版本），并且您的 RPi 5 固件已更新至 2023-12-06（12 月 6 日）或更新版本，否则可能无法识别与 NVMe 相关的配置。*

**步骤 1**：确保您的 Raspberry Pi 系统是最新的（Bookworm 或更高版本），输入以下命令以更新 RPi 5 固件：
```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # 如果固件不是 2023 年 12 月之后的版本，请在终端中输入以下命令以启动配置工具
  sudo raspi-config
```
向下滚动到 `Advanced Options` 并按 Enter：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

向下滚动到 `Bootloader Version` 并按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

最后选择 `Latest`，并按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

在此选择 `No` - 您需要的是 `latest` 引导程序。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

通过选择 `Finish` 退出工具：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

如果要求重启，请选择 `Yes`。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

**步骤 2**：点击主屏幕上的 **Applications** => **Accessories** => **SD Card Copier**，运行 **SD Card Copier** 程序，并将操作系统复制到 NVMe SSD，如下图所示。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="700" height="auto" /></div>

### 设置 Raspberry Pi 从 NVMe SSD 启动

如果您可以轻松访问 SD 卡插槽，可以关闭您的 Raspberry Pi，取出 SD 卡，并在下一次启动时（如果一切正常）它应该会自动从 NVMe 驱动器启动。如果您希望保留 SD 卡并仍然从 NVMe 启动，则需要更改启动顺序。

**步骤 1**：输入以下命令：
```shell
  sudo raspi-config
```
向下滚动到 `Advanced Options` 并按 Enter：
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="700" height="auto" /></div>

**步骤 2**：向下滚动到 `Boot Order` 并按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="700" height="auto" /></div>

**步骤 3**：选择 `NVMe/USB Boot` 并按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="700" height="auto" /></div>

配置将被确认。按 Enter：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="700" height="auto" /></div>

**步骤 4**：通过选择 `Back` 或按 Esc 键返回到第一个屏幕。然后使用右方向键导航到 Finish。

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="700" height="auto" /></div>

系统会询问您是否需要立即重启。点击 `Yes`：

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="700" height="auto" /></div>


### 修改 PCIe

<Tabs>
<TabItem value="Method 1" label="M.2 Hat">
M.2 Hat 支持 PCIe Gen 2 和 PCIe Gen 3 模式

**步骤 1**：输入以下命令打开 `/boot/firmware/config.txt` 文件
```shell
sudo nano /boot/firmware/config.txt
```

**步骤 2**：在 `/boot/firmware/config.txt` 文件末尾的 [all] 部分添加以下内容：
```shell
dtparam=pciex1_gen=3
```
保存文件并再次重启，您可能会看到速度提升！
</TabItem>

<TabItem value="Method 2" label="M.2 dual Hat">

PCIe2.0 M.2 dual Hat 支持 PCIe Gen 2，而 PCIe3.0 M.2 dual Hat 支持 PCIe Gen 2 和 PCIe 3。

**步骤 1**：输入以下命令打开 `/boot/firmware/config.txt` 文件
```shell
sudo nano /boot/firmware/config.txt
```

**步骤 2**：在 `/boot/firmware/config.txt` 文件末尾的 [all] 部分添加以下内容：

```shell
dtparam=pciex1
dtparam=pciex1_gen=3
dtoverlay=pciex1-compat-pi5,no-mip,mmio-hi 

```

</TabItem>
</Tabs>

### 速度基准测试

<Tabs>
<TabItem value="Method 1" label="M.2 hat">

此测试显示 Raspberry Pi 从 SD 卡启动并使用 SSD 作为备份存储：
```

sudo dd if=/dev/zero of=/mnt/nvme/testfile bs=1M count=1024 oflag=direct

# 读取速度命令
sudo dd if=/mnt/nvme/testfile of=/dev/null bs=1M iflag=direc
```

| M.2 hat | 读取速度 | 写入速度 |
|:-------------|:--------------:|--------------:|
| PCIe 3.0       | 822MB/s       | 716MB/s         |
| PCIe 2.0       | 431 MB/s      | 389MB/s         |


</TabItem>

<TabItem value="Method 2" label="M.2 dual Hat">

此测试显示 Raspberry Pi 从 SSD 启动并使用另一个 SSD 作为备份存储：

```
# 写入速度命令
dd if=/dev/zero of=tempfile bs=1M count=1024 oflag=direct
# 读取速度命令
dd if=/dev/zero of=tempfile bs=1M count=1024 
```

| M.2 dual Hat | 读取 & 读取 | 写入 & 写入 | 读取 & 写入 |
|:-------------|:--------------:|--------------:|--------------:|
| PCIe 3.0       | 平均 454MB/s      | 平均 407MB/s        |   697MB/s 663MB/s|
| PCIe 2.0       | 平均 234MB/s      | 平均 214MB/s        |      414MB/s 324MB/s|


</TabItem>

<TabItem value="Method 3" label="M.2 dual Hat with hailo8">

此测试显示 Raspberry Pi 从 SSD 启动并使用 Hailo8 AI 加速器：

```
# 写入速度命令
dd if=/dev/zero of=tempfile bs=1M count=1024 oflag=direct
# 读取速度命令
dd if=/dev/zero of=tempfile bs=1M count=1024 
```

| M.2 dual Hat with hailo8| 读取 | 读取 & Hailo8 | 写入 | 写入 & Hailo8 |
|:-------------|:--------------:|--------------:|--------------:|--------------:|
| PCIe 3.0       | 812MB/S     | 416MB/S 187FPS      |   701MB/s |  340MB/s  188FPS|
| PCIe 2.0       | 429MB/S      | 233MB/S/s 128FPS       |      372MB/S|  273MB/S 111FPS|

> **注意：** 要测试 Hailo8，请查看此 [链接](https://github.com/hailo-ai/hailo-rpi5-examples) 并准备一个 240 FPS 的视频。


</TabItem>
</Tabs>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>


<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>