---
description: 在 Jetson-Nano 上启用 SPI 接口
title: 在 Jetson-Nano 上启用 SPI 接口
keywords:
- SPI
- Jetson-nano
- BSP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/enable_spi_interface_on_jetsonnano
last_update:
  date: 07/02/2025
  author: Dayu
---

## 简介

Jetson Nano 提供了两个与 GPIO 复用的 SPI 接口，但默认情况下未启用 SPI。与其他 Jetson 系列（如 Orin）不同，Jetson Nano **无法通过** `/opt/nvidia/jetson-io/jetson-io.py` 配置工具启用 SPI。

本节以 **SPI1** 控制器为例，提供了一种在 Jetson Nano 上启用 SPI 功能的方法。请注意，此方法必须在将镜像刷写到 Jetson 设备之前应用。

:::note
本教程中的方法必须在将镜像刷写到 Jetson 设备之前应用。
:::

## 修改 SPI 并刷写镜像
首先，需要将 Jetson Nano 上的 `REC` 引脚和 `GND` 引脚短接以进入恢复模式。然后，在主机 PC 上准备好要刷写的镜像。但在完成 SPI 修改之前，请勿将其刷写到 Jetson Nano。

您可以参考 [**J101 的 JetPack 刷写教程**](https://wiki.seeedstudio.com/cn/reComputer_J1010_J101_Flash_Jetpack/#:~:text=On%20the%20Linux%20host%20PC%2C%20we%20need%20to%20open%20a%20browser%20and%20go%20the%20Jetson%20Linux%20Archive.%20First%20we%20should%20check%20if%20the%20version%20of%20Jetson%20Linux%20is%20supported%20our%20reComputer%20Jetson%20module)，并确保仅使用命令行方法。

从 [NVIDIA DEVELOPER](https://developer.nvidia.com/embedded/jetson-linux-archive#:~:text=Previous%20Jetson%20Linux%20Versions) 下载您选择的版本，包括 **BSP** 和 **简单根文件系统**。
在本指南中，我们以 **L4T 32.7.2** 为例。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/source_nvidia_jetson-nao.png" /></div>

将 **BSP** 和 **简单根文件系统** 放在同一目录下，然后按照以下说明解压并运行 `apply_binaries.sh`：
```bash
tar xf Jetson-210_Linux_R32.7.2_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

在 **Linux_for_Tegra** 目录中创建一个新的 `.sh` 文件，并运行该脚本。脚本内容如下：
<details>

<summary> modify_spi.sh </summary>

```shell
#!/bin/bash
set -e


cd "$(dirname "$0")"
cd kernel/dtb

DTS=tegra210-p3448-0002-p3449-0000-b00.dts
DTB=tegra210-p3448-0002-p3449-0000-b00.dtb


echo "📥 正在反编译 $DTB 到 $DTS..."
sudo dtc -I dtb -O dts -o "$DTS" "$DTB"

fix_spi_node() {
    local node=$1
    if grep -A5 "$node {" "$DTS" | grep -q 'status'; then
        sudo sed -i "/$node {/,/spi-max-frequency/ s/status = \".*\";/status = \"okay\";/" "$DTS"
    else
        sudo sed -i "/$node {/,/spi-max-frequency/ s/compatible = \"tegra-spidev\";/&\n\t\tstatus = \"okay\";/" "$DTS"
    fi
}

echo "🔧 启用 spi@0 和 spi@1..."
fix_spi_node "spi@0"
fix_spi_node "spi@1"


patch_pin() {
    local pin=$1
    sudo sed -i "/${pin} {/,/nvidia,enable-input/ {
        s/nvidia,function = \"rsvd1\"/nvidia,function = \"spi1\"/
        s/nvidia,tristate = <0x01>/nvidia,tristate = <0x00>/
        s/nvidia,enable-input = <0x00>/nvidia,enable-input = <0x01>/
    }" "$DTS"
}

echo "🔧 修补 pinmux 块..."
for pin in spi1_mosi_pc0 spi1_miso_pc1 spi1_sck_pc2 spi1_cs0_pc3 spi1_cs1_pc4; do
    patch_pin "$pin"
done

echo "🔧 修复 SPI1 引脚的 tristate 和 input-enable..."


fix_pinmux_field() {
  local pin=$1
  awk -v pin="$pin" '
  BEGIN { in_block = 0 }
  {
    if ($0 ~ pin " {") {
      in_block = 1
    }
    if (in_block && /nvidia,tristate =/) {
      sub(/<0x1>/, "<0x0>")
    }
    if (in_block && /nvidia,enable-input =/) {
      sub(/<0x0>/, "<0x1>")
    }
    print
    if (in_block && /}/) {
      in_block = 0
    }
  }' "$DTS" | sudo tee "$DTS.fixed" > /dev/null && sudo mv "$DTS.fixed" "$DTS"
}

fix_pinmux_field "spi1_mosi_pc0"
fix_pinmux_field "spi1_miso_pc1"
fix_pinmux_field "spi1_sck_pc2"
fix_pinmux_field "spi1_cs0_pc3"
fix_pinmux_field "spi1_cs1_pc4"


echo "📦 正在重新编译 DTS 到 $DTB..."
sudo dtc -I dts -O dtb -o "$DTB" "$DTS"

echo "✅ SPI DTS 补丁已应用，DTB 重新生成成功。"
```
</details>

```bash
sudo bash modify_spi.sh
```
运行 `modify_spi.sh` 后，该脚本将更新设备树中的 **SPI1** 配置，重新编译并覆盖旧的配置。如果您想启用 **SPI2**，只需在 `modify_spi.sh` 脚本中将关键字 `spi1` 替换为 `spi2`。

修改设备树后，将镜像刷写到 Jetson-Nano：
```bash
sudo ./flash.sh jetson-nano-emmc mmcblk0p1
```

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/flashing_over_jetson-nano.png" /></div>

重启后，**40-pin** 接口上的 `SPI0_MOSI`、`SPI0_MISO`、`SPI0_CS0` 和 `SPI0_CS1` 引脚将可用。

## 测试 Jetson-Nano 上的 SPI1
将引脚 19 和引脚 21 短接，这两个引脚分别对应 `SPI0_MOSI` 和 `SPI0_MISO`，以使用 **SPI1** 控制器执行回环测试。  
Jetson-Nano 数据手册可以[在此处](https://developer.download.nvidia.com/assets/embedded/secure/jetson/Nano/docs/DA-09753-001_v1.0.pdf?__token__=exp=1751957680~hmac=6683559201b449f5191cbe0069e9299b1c3b373e82307d09a6a92d596bee4745&t=eyJscyI6ImdzZW8iLCJsc2QiOiJodHRwczovL3d3dy5nb29nbGUuY29tLyJ9)下载和查看，特别是**第 6 页**。

<div align="center"><img width="{200}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/40-pin_jetson-nano.jpg" /></div>

物理连接图如下所示：
<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/real-connecr-spi.png" /></div>

加载 SPI 驱动模块，然后下载并编译测试程序：
```bash
sudo modprobe spidev
git clone https://github.com/rm-hull/spidev-test
cd spidev-test/
gcc spidev_test.c -o spidev_test
```

运行测试程序并指定 `spidev0.0`（对应于 **SPI1**）：
```bash
./spidev_test -v -D /dev/spidev0.0 -p "Test"
```

测试结果如下所示，表明 **SPI1** 成功完成了回环传输。您还可以运行 `ls /dev/spidev*` 检查可用的 SPI 控制器。
<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/spi_res_jetson-nano.png" /></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>