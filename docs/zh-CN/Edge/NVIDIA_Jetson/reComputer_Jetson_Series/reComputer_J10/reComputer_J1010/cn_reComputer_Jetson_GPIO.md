---
description: 如何在 reComputer Jetson 板上使用 40 针 GPIO
title: 如何在 reComputer Jetson 板上使用 40 针 GPIO
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_Jetson_GPIO
last_update:
  date: 04/12/2023
  author: Lakshantha
---

# 如何在 reComputer Jetson 板上使用 40 针 GPIO

本指南演示了如何访问和控制 reComputer Jetson 板的 40 针 GPIO。在本指南中，我们以 reComputer J4012 为例。然而，对于其他 reComputer Jetson 板，步骤也类似。

## 开始之前

在开始使用 reComputer Jetson 设备上的 40 针 GPIO 之前，您需要了解以下信息：

- 每个 GPIO 引脚的电压等级为 3.3V
- 由于 GPIO 引脚的电流限制，您无法通过 GPIO 为 reComputer Jetson 板供电

## 查找 GPIO 名称

**步骤 1：** 打开 reComputer Jetson 板的数据手册。以下是所有可用 reComputer Jetson 板的数据手册链接。

- [J101 载板](https://files.seeedstudio.com/products/102991694/reComputer%20J101V2%20datasheet.pdf)
    - reComputer J1010

- [A206 载板](https://files.seeedstudio.com/products/114110049/A206%20carrier%20board%20pin%20description.pdf)
    - reComputer J2011
    - reComputer J2012
    - reComputer J1020
    
- [J202 载板](https://files.seeedstudio.com/wiki/reComputer/reComputer-J202-carrier-board-datasheet.pdf)
    - reComputer J2021
    - reComputer J2022
    - reComputer J1020 V2

- [J401 载板](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J401-datasheet.pdf)
    - reComputer J4011
    - reComputer J4012 
    - reComputer J3010
    - reComputer J3011

这里我们选择 [reComputer J4012](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf) 的数据手册。

**步骤 2：** 导航到 **40 针扩展头 - J10** 部分

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/1.png" /></div>

**步骤 3：** 在 **Default Usage / Description** 列中，找到 **Header Pin #** 的名称，并确保其默认用途为 **GPIO**

例如，检查 **Header Pin 15**。其 **Default Usage** 为 **GPIO**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/2.jpg" /></div>

**步骤 4：** 对于同一个引脚，在 **Module Pin Name** 列中找到名称。在我们的示例中，它是 **GPIO12**

## 访问和控制 GPIO

现在我们有两种不同的方法可以访问 Jetson 板上的 GPIO，具体取决于是否可以直接获得 GPIO 标签。在第一种方法中，我们可以通过设备执行命令直接获取 GPIO 引脚标签。然而，如果引脚标签未直接显示，可以使用第二种方法。

### 方法 1

在此方法中，GPIO 的 dts 文件已包含在您刷入的 JetPack 版本中，并且 GPIO 已正确标记，因此您可以直接从设备中获取引脚标签。

**步骤 1：** 进入 Jetson 设备的终端并执行以下命令

```sh
sudo su
cat /sys/kernel/debug/gpio
```

**步骤 2：** 找到与之前获取的 **Module Pin Name** 对应的 **GPIO 编号**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/3.png" /></div>

在此示例中，**gpio-268** 对应于 **GPIO12**

**步骤 3：** 在终端中执行以下命令以导出 gpio-268 引脚

```sh
cd /sys/class/gpio
echo 268 > export
```

**步骤 4：** 设置方向并设置值。方向可以是 **in/ out**，值可以是 **0/ 1**

例如，将 GPIO12 设置为高电平

```sh
cd gpio268
echo "out" > direction
echo 1 > value
```

将 GPIO12 设置为低电平

```sh
echo 0 > value
```

**步骤 5：** 要将您导出的 GPIO 引脚恢复为默认状态，请执行以下命令

```sh
cd ..
echo 268 > unexport
```

### 方法 2

在此方法中，GPIO 的 dts 文件未包含在您刷入的 JetPack 版本中，并且 GPIO 未正确标记。因此，我们需要参考另一份文档（pinmux）以获取引脚标签信息。根据 SoM 参考以下链接。

- [Jetson Nano](https://developer.nvidia.com/jetson-nano-pinmux)
- [Jetson Xavier NX](https://developer.nvidia.com/jetson-xavier-nx-pinmux-configuration-template-v106)
- [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)

**步骤 1：** 根据您使用的 SoM 下载 pinmux 文档。这里我们选择 [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template) 文档

**步骤 2：** 找到与之前获取的 Module Pin Name 对应的 GPIO 标签（在 Customer Usage 列下）。例如，对于 **GPIO12**，它是 **GPIO3_PN.01**，这里我们参考 **PN.01**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/4.png" /></div>

**步骤 3：** 进入 Jetson 设备的终端并执行以下命令

```sh
sudo su
cat /sys/kernel/debug/gpio
```

**步骤 4：** 找到与之前获取的 **GPIO 标签** 对应的 **GPIO 编号**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/5.png" /></div>

在此示例中，**gpio-433** 对应于 **PN.01**，也等于 **GPIO12**

**步骤 5：** 在终端中执行以下命令以导出 gpio-433 引脚

```sh
cd /sys/class/gpio
echo 433 > export
```

**步骤 6：** 设置方向并设置值。方向可以是 **in/ out**，值可以是 **0/ 1**

例如，将 GPIO12 设置为高电平

```sh
cd PN.01
echo "out" > direction
echo 1 > value
```

将 GPIO12 设置为低电平

```sh
echo 0 > value
```

**步骤 7：** 要将您导出的 GPIO 引脚恢复为默认状态，请执行以下命令

```sh
cd ..
echo 433 > unexport
```

### 针对 Jetpack6+

与方法 2 类似，我们需要参考另一份文档（pinmux）以获取引脚标签信息。根据 SoM 参考以下链接。

- [Jetson Nano](https://developer.nvidia.com/jetson-nano-pinmux)  
- [Jetson Xavier NX](https://developer.nvidia.com/jetson-xavier-nx-pinmux-configuration-template-v106)  
- [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)  

**步骤 1：** 根据您使用的 SoM 下载对应的 pinmux 文档。这里我们选择 [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template) 文档。

**步骤 2：** 找到与之前获取的模块引脚名称对应的 GPIO 标签（在 Customer Usage 列下）。例如，对于 **GPIO12**，它是 **GPIO3_PN.01**，这里我们参考 **PN.01**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/4.png" /></div>

**步骤 3：** 进入 Jetson 设备的终端并执行以下命令：

```bash
sudo apt update
sudo apt install gpiod

gpioinfo
```

**步骤 4：** 找到与之前获取的 **GPIO 标签** 对应的 **GPIO 编号**。

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpio/gpioinfo1.png" />
  <img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpio/gpioinfo2.png" />
</div>

在这个例子中，**gpiochip0 line85** 对应 **PN.01**，也等于 **GPIO12**。

**步骤 5：** 然后我们可以使用 **gpioset** 命令来配置 GPIO 的工作模式。

```bash
# 将 GPIO12 设置为 HIGH
sudo gpioset --mode=wait gpiochip0 85=1
# 将 GPIO12 设置为 LOW
sudo gpioset --mode=wait gpiochip0 85=0 
```

:::info  
如果您想了解更多关于 **gpioset** 命令的信息，请参考：  
https://www.acmesystems.it/gpiod  
:::

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>