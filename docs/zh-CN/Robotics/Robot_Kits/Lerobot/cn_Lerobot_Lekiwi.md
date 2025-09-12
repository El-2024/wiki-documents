---
description: 本 wiki 提供了 Lekiwi 的组装和调试教程，并在 Lerobot 框架内实现数据收集和训练。
title: Lerobot 中的 Lekiwi
keywords:
- Lerobot
- Huggingface
- Car
- Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/lekiwi_cad_v1.webp
slug: /cn/lerobot_lekiwi
last_update:
  date: 8/8/2025
  author: LiShanghang
---

# 如何在 Lerobot 中使用 Lekiwi

:::tip

本教程仓库维护了截至 2025 年 6 月 5 日验证的 Lerobot 稳定版本。目前，Hugging Face 已推出 Lerobot 的重大升级，引入了许多新功能。如果您想体验最新教程，请遵循[官方文档指导](https://huggingface.co/docs/lerobot/index)。

:::

## 介绍

[Lekiwi](https://github.com/SIGRobotics-UIUC/LeKiwi)是由[SIGRobotics-UIUC](https://github.com/SIGRobotics-UIUC)推出的完全开源机器人小车项目。它包含详细的 3D 打印文件和操作指南，设计为与[LeRobot](https://github.com/huggingface/lerobot/tree/main)模仿学习框架兼容。它支持 SO101 机械臂以实现完整的模仿学习流水线，

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/lekiwi_cad_v1.png" />
  </div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

## 主要特性

1. **开源且低成本**：这是来自[Lekiwi](https://github.com/SIGRobotics-UIUC/LeKiwi)的开源、低成本机器人小车解决方案
2. **与 LeRobot 集成**：专为与[LeRobot 平台](https://github.com/huggingface/lerobot)集成而设计
3. **丰富的学习资源**：提供全面的开源学习资源，如组装和校准指南，以及测试、数据收集、训练和部署教程，帮助用户快速入门和开发机器人应用。
4. **与 Nvidia 兼容**：使用 reComputer Mini J4012 Orin NX 16 GB 部署此机械臂套件。
5. **多场景应用**：适用于教育、科研、自动化生产和机器人等领域，帮助用户在各种复杂任务中实现高效、精确的机器人操作。

:::caution

Seeed Studio 仅对硬件本身的质量负责。教程严格按照官方文档更新。如果您遇到无法解决的软件问题或环境依赖问题，请及时向[LeRobot 平台](https://github.com/huggingface/lerobot)或[LeRobot Discord 频道](https://discord.gg/8TnwDdjFGU)报告问题。
:::

:::danger

- LeKiwi 底盘中的所有舵机都需要 12V 电源供应。对于使用 5V 机械臂的用户，我们提供 12V 转 5V 降压转换器模块。请注意，您需要进行电路改装。

- 12V 电源 - 如果需要，您可以在结账时选择此选项。如果您已经拥有 12V 电源，可以跳过此选项，只需将电源输出连接器转换为 5521 DC 插头。

- Raspberry Pi 控制器和摄像头 - 这些必须通过订单界面单独购买。

:::

## 规格参数

| 类型 | Lekiwi |
|--|--|
|  舵机 | 3x 12v STS3215 1:345 齿轮比|
| 电源供应 | 12V DC 或电池 |
| 角度传感器| 12 位磁编码器 |
| 推荐工作温度范围 | 0℃～40℃ |
| 通信方式| UART |
| 控制方式 | PC |

## 物料清单(BOM)

| 部件 | 数量 | 包含|
|--|--|--|
| STS3215 1:345 12V 舵机 | 3 | ✅ |
| 全向轮/万向轮 | 3 | ✅ |
| Lekiwi 3D 打印外壳 | 1 | ✅ |
| DC-DC 降压电源模块 - 24V/12V 转 5V | 1 | ✅ |
| 电机控制板 | 1 | ✅ |
| DC 公头转双 DC 公头 5521 Y 型线缆 | 1 | ✅ |
| USB 线缆;Type C 2.0 转 Type C 2.0-黑色;L150mm| 1 | ✅ |
| USB 3.1 Type C 转 A 线缆 0.5 米 | 1 | ✅ |
| 插头电源适配器;黑色-12V-2A AC/DC | 1 | ✅ |
| M2 M3 M4 螺丝套装 | 足够 | ✅ |
| Raspberry pi | 1 | 可选 |
| USB 摄像头 | 1 | 可选 |
| 深度摄像头 | 2 | 可选 |
| SO-ARM101 Pro | 1 | 可选 |
| 12V 大容量锂离子电池包 E326S| 1 | 可选 |

## 初始系统环境

**对于 Ubuntu x86:**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6  

**对于 Jetson Orin:**

- Jetson JetPack 6.0+
- Python 3.10  
- Torch 2.6  

**对于 Raspberry Pi:**

- Raspberry Pi5 4G~16G

## 3D 打印指南

### 部件

我们为下面的 3D 打印部件提供了即用型 STL 文件。这些可以使用通用 PLA 耗材在消费级 FDM 打印机上打印。我们在 Bambu Lab P1S 打印机上进行了测试。对于所有组件，我们只需加载到 bambuslicer 中，自动旋转和自动排列，启用任何推荐的支撑，然后打印。

| 项目 | 数量 | 备注 |
|:---|:---:|:---:|
| [底板顶层](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_plate_layer2.stl) | 1 | |
| [底板底层](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_plate_layer1.stl) | 1 | |
| [驱动电机支架](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/drive_motor_mount_v2.stl) | 3 | |
| [舵机轮毂](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/servo_wheel_hub.stl) | 3 | 使用支撑|
| [RasPi 外壳顶部](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/pi_case_top.stl) | 1 | 2|
| [RasPi 外壳底部](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/pi_case_bottom.stl) | 1 | |
| Arducam [底座支架](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_camera_mount.stl)和[腕部支架](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/wrist_camera_mount.stl)| 1 | **与[此摄像头](https://www.amazon.com/Arducam-Camera-Computer-Without-Microphone/dp/B0972KK7BC)兼容** |
| 网络摄像头[底座支架](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/webcam_mount.stl)、[夹爪插件](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/so100_gripper_cam_mount_insert.stl)和[腕部支架](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/webcam_mount_wrist.stl) | 1 | **与[此摄像头](https://www.amazon.fr/Vinmooog-equipement-Microphone-Enregistrement-conférences/dp/B0BG1YJWFN/)兼容** |

### 打印参数

提供的 STL 文件可以在许多 FDM 打印机上直接打印。以下是经过测试和建议的设置，尽管其他设置也可能有效。

- 材料：PLA+
- 喷嘴直径和精度：0.2mm 喷嘴直径，0.2mm 层高
- 填充密度：15%  
- 打印速度：150 mm/s
- 如需要，将 G 代码（切片文件）上传到打印机并打印

## 安装 LeRobot

在您的 Raspberry Pi 上：

### 1. [安装 Miniconda](https://docs.anaconda.com/miniconda/install/#quick-command-line-install)

```bash
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
```

### 2. 重启 shell

在您的 shell 中复制粘贴：`source ~/.bashrc` 或对于 Mac：`source ~/.bash_profile` 或如果您使用 zshell 则使用 `source ~/.zshrc`

### 3. 为 lerobot 创建并激活新的 conda 环境

```bash
conda create -y -n lerobot python=3.10
```

然后激活您的 conda 环境（每次打开 shell 使用 lerobot 时都要这样做！）：

```bash
conda activate lerobot
```

### 4. 克隆 LeRobot

```bash
git clone https://github.com/huggingface/lerobot.git ~/lerobot
```

### 5. 在您的环境中安装 ffmpeg

使用`miniconda`时，在您的环境中安装`ffmpeg`：

```bash
conda install ffmpeg -c conda-forge
```

### 6. 安装带有 feetech 电机依赖的 LeRobot

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

## 在笔记本电脑(PC)上安装 LeRobot

如果您已经在笔记本电脑上安装了 LeRobot，可以跳过此步骤，否则请按照我们在 Pi 上执行的相同步骤进行操作。

:::tip
我们经常使用命令提示符(cmd)。如果您不熟悉使用 cmd 或想复习命令行的使用，可以查看这里：[命令行速成课程](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)
:::

在您的计算机上：

### 1. [安装 Miniconda](https://docs.anaconda.com/miniconda/install/#quick-command-line-install)

### 2. 重启 shell

在您的 shell 中复制粘贴：`source ~/.bashrc` 或对于 Mac：`source ~/.bash_profile` 或如果您使用 zshell 则使用 `source ~/.zshrc`

### 3. 为 lerobot 创建并激活新的 conda 环境

```bash
conda create -y -n lerobot python=3.10
```

然后激活您的 conda 环境（每次打开 shell 使用 lerobot 时都要这样做！）：

```bash
conda activate lerobot
```

### 4. 克隆 LeRobot

```bash
git clone https://github.com/ZhuYaoHui1998/lerobot ~/lerobot
```

### 5. 在您的环境中安装 ffmpeg

使用`miniconda`时，在您的环境中安装`ffmpeg`：

```bash
conda install ffmpeg -c conda-forge
```

### 6. 安装带有 feetech 电机依赖的 LeRobot

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

## 组装

<details>
<summary>组装 Lekiwi</summary>

### 视频教程

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/_QjhOMSnobU?si=xjhfCztoWZcFwW6j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/62_JWFpvJyA?si=0YCwKUJgy0YVL-A0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/r0LtrTidWdA?si=MEdIJ5XzI8-wbpDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/qk1iYHW-0qg?si=0zXmcVIkBXJcf1M5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/RYu7WLpi7jw?si=Tjc5_4-WLE2xyNWr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/q7zp4qIFdnM?si=fIYgI_3xbrWL7wUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 以下是图片教程

您可以参考官方[组装教程](https://github.com/SIGRobotics-UIUC/LeKiwi)。

收到打印部件后，所有打印组件如下所示。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/1.jpg" />
</div>

**A. 使用 12 个 m2x6 自攻螺丝将驱动电机固定到电机支架上。**

| **步骤 1** | **步骤 2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/2.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/3.jpg) |

**B. 使用 12 个 m3x16 机械螺丝将驱动电机支架固定到底部基板上。**

:::tip
记住 ID 排列：8 代表后轮，而 7 和 9 分别对应左前轮和右前轮。
:::

| **步骤 1** | **步骤 2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/4.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/5.jpg) |

**C. 将轮毂固定到全向轮上。**

**步骤 1 和步骤 2**：拆下三个螺丝。

| **步骤 1** | **步骤 2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/7.jpg) |

**步骤 3 和步骤 4**：使用 9 个 m4x18 机械螺丝将轮毂固定到全向轮上。

| **步骤 3** | **步骤 4** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/8.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/9.jpg) |

**D. 使用 6 个 m3x16 机械螺丝将舵机臂固定到轮毂上。**

| **步骤 1** | **步骤 2** |**步骤 3** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/10.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/11.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/12.jpg) |

**E. 使用 3 个 m3x10 机械螺丝将舵机臂固定到驱动电机上。**

| **步骤 1** | **步骤 2** |**步骤 3** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/15.jpg) |

**H. 添加舵机驱动器并连接所有电路。**

| **步骤 1** | **步骤 2** |**步骤 3** |**步骤 4** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/16.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/17.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/18.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/19.jpg) |

| **步骤 5** | **步骤 6** |**步骤 7** |**步骤 8** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/20.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/20-1.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/21.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/22.jpg) |

**Power IN** 直接连接到电源，如步骤 8 所示，而 **USB-C** 端口为 Raspberry Pi 提供 5V 电源。

对于额外的 **2 针端子（5V 和 12V）**：

- 如果使用 **7.4V SO10x 机械臂**，通过 **5V 输出**为**舵机电机板**供电。
- 如果使用 **12V 机械臂**，直接从 **DC 电源分配器**为**舵机电机板**供电，如步骤 8 所示。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/23.jpg" />
</div>

**I. 现在您可以将 Raspberry Pi 安装到车辆的第二层顶板上。在此之前，请连接 **USB-C 电源线**和 **USB-C 舵机通信线**，然后将它们从车辆顶板穿出。**

**步骤 1** 将电源线连接到您的 Raspberry Pi，并通过顶板的中央开口穿出。

|  |  |  |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/24.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/25.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/26.jpg) |

**步骤 2** 在底盘的三个舵机中，有一个舵机只连接了一根线。如果您需要安装 SO10x 机械臂，请：从机械臂上拆下 ID1 线缆。将其连接到底盘电机。将其穿过顶板作为预留线缆

|  | | |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/27.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/28.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/29.jpg) |

**步骤 3** 现在您可以将舵机驱动板的 USB-C 连接到 Raspberry Pi 的 USB 端口。

|  | |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/30.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/31.jpg) |

**J. 现在您需要使用 12 个 M3×16 螺丝固定 Raspberry Pi 和顶板的其余部分。**

|  |  |  |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/32.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/33.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/34.jpg) |

**K. 现在您可以使用 1 个 M3x16 和 4 个 M5×25 螺丝安装 USB 摄像头和从动臂**

|  |  |  |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/35.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/36.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/37.jpg) |
| ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/29.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/38.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/39.jpg) |

并确保舵机控制线和 USB 摄像头都连接到 Raspberry Pi。

|  |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/31.jpg) |

</details>

:::tip
检查电路连接；组装后，Lekiwi 应连接到开发板（Raspberry Pi / Jetson）。主导臂应连接到您的 PC。

| Lekiwi --> Raspberry Pi / Jetson |

| 主导臂 --> PC                |
:::

## 配置电机

### 主导臂

要查找每个总线舵机适配器的端口，请运行此脚本：

```bash
python -m lerobot.find_port
```

示例输出：

```bash
Finding all available ports for the MotorBus.
['/dev/tty.usbmodem575E0032081']
Remove the USB cable from your MotorsBus and press Enter when done.

[...Disconnect corresponding leader or follower arm and press Enter...]

The port of this MotorsBus is /dev/tty.usbmodem575E0032081
Reconnect the USB cable.
```

识别端口时的示例输出（例如，Mac 上的 `/dev/tty.usbmodem575E0031751`，或 Linux 上可能的 `/dev/ttyACM0`）：

识别端口时的示例输出（例如，`/dev/tty.usbmodem575E0032081`，或 Linux 上可能的 `/dev/ttyACM1`）：

:::tip

```bash
Finding all available ports for the MotorBus.
['/dev/tty.usbmodem575E0032081']
Remove the USB cable from your MotorsBus and press Enter when done.
```

记住要拔掉 USB，然后按 Enter，否则无法检测到接口。
:::

故障排除：在 Linux 上，您可能需要通过运行以下命令来授予对 USB 端口的访问权限：

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```
将 USB 线缆从您的计算机和电源连接到主控机械臂的控制板。然后，运行以下命令或使用您在上一步中获得的端口运行 API 示例。您还需要使用`id`参数为您的主控机械臂命名。

```bash
python -m lerobot.setup_motors \
    --teleop.type=so101_leader \
    --teleop.port=/dev/tty.usbmodem575E0031751  # <- paste here the port found at previous step
```

您应该看到以下指令。

```bash
Connect the controller board to the 'gripper' motor only and press enter.
```

按照指示，插入夹爪的电机。确保它是连接到控制板的唯一电机，并且电机本身尚未菊花链连接到任何其他电机。当您按下[Enter]时，脚本将自动为该电机设置 id 和波特率。

然后您应该看到以下消息：

```bash
'gripper' motor id set to 6
```

接下来是下一个指令：

```bash
Connect the controller board to the 'wrist_roll' motor only and press enter.
```

您可以从控制板断开 3 针线缆，但可以让它保持连接到另一端的夹爪电机，因为它已经在正确的位置。现在，将另一根 3 针线缆插入腕部滚转电机并连接到控制板。与之前的电机一样，确保它是连接到控制板的唯一电机，并且电机本身没有连接到任何其他电机。

:::caution
按照指示对每个电机重复此操作。
:::

在按 Enter 之前，请检查每一步的线缆连接。例如，在您操作控制板时，电源线缆可能会断开。

完成后，脚本将简单地结束，此时电机就可以使用了。现在您可以将每个电机的 3 针线缆连接到下一个电机，并将第一个电机（id=1 的"肩部平移"）的线缆连接到控制板，控制板现在可以安装到机械臂的底座上。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/hbW6eFYkHTg?si=jKdpTyI8wRC-iHxO" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Lekiwi

您应该按照之前的命令找到正确的 USB 并设置电机。

配置电机的说明可以在 SO101[文档](https://huggingface.co/docs/lerobot/so101#configure-the-motors)中找到（与主控机械臂相同）。除了机械臂电机的 id 外，我们还需要为移动底座设置电机 id。这些需要按特定顺序才能工作。下面是移动底座的电机 id 和电机安装位置的图像。请注意，我们在 LeKiwi 上只使用一个电机控制板。这意味着车轮的电机 id 是 7、8 和 9。

您可以运行此命令为 LeKiwi 设置电机。它将首先设置机械臂的电机（id 6..1），然后设置车轮的电机（9,8,7）。

```bash
python -m lerobot.setup_motors \
    --robot.type=lekiwi \
    --robot.port=/dev/tty.usbmodem58760431551 # <- paste here the port found at previous step
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/motor_ids.png" />
</div>

## 校准

现在我们必须校准主控机械臂和从动机械臂。车轮电机不需要校准。校准过程非常重要，因为它允许在一个机器人上训练的神经网络在另一个机器人上工作。

### 校准从动机械臂（在移动底座上）

确保机械臂连接到 Raspberry Pi，并运行此脚本或 API 示例（通过 SSH 在 Raspberry Pi 上）来启动从动机械臂的校准：

```bash
python -m lerobot.calibrate \
    --robot.type=lekiwi \
    --robot.id=my_awesome_kiwi # <- Give the robot a unique name
```

我们统一了大多数机器人的校准方法，因此，这个 SO100 机械臂的校准步骤与 Koch 和 SO101 的步骤相同。首先，我们必须将机器人移动到每个关节都在其范围中间的位置，然后按`Enter`。其次，我们将所有关节移动通过其完整的运动范围。可以在[这里](https://huggingface.co/docs/lerobot/en/so101#calibration-video)找到 SO101 相同过程的参考视频。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/22n6f5xH9Dk?si=2QTzn1CDbsSv6Y_H" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 有线版本

如果您有有线 LeKiwi 版本，请在您的笔记本电脑上运行所有命令。

### 校准主控机械臂

然后，校准主控机械臂（连接到笔记本电脑/PC）。在您的笔记本电脑上运行以下命令或 API 示例：

```bash
python -m lerobot.calibrate \
    --teleop.type=so100_leader \
    --teleop.port=/dev/tty.usbmodem58760431551 \ # <- The port of your robot
    --teleop.id=my_awesome_leader_arm # <- Give the robot a unique name
```

## 远程操作 LeKiwi

:::tip
如果您使用 Mac，您可能需要给 Terminal 访问键盘的权限。转到系统偏好设置 > 安全性与隐私 > 输入监控，并勾选 Terminal 的复选框。
:::

要进行远程操作，SSH 到您的 Raspberry Pi，运行`conda activate lerobot`和此脚本：

```bash
python -m lerobot.robots.lekiwi.lekiwi_host --robot.id=my_awesome_kiwi
```

然后在您的笔记本电脑上，也运行`conda activate lerobot`并运行 API 示例，确保在`examples/lekiwi/teleoperate.py`中设置正确的`remote_ip`和`port`。

<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/teleoperate.png" />
</div>

```bash
python examples/lekiwi/teleoperate.py
```

您应该在笔记本电脑上看到类似这样的内容：```[INFO] Connected to remote robot at tcp://172.17.133.91:5555 and video stream at tcp://172.17.133.91:5556.``` 现在您可以移动主控机械臂并使用键盘（w,a,s,d）来驱动前进、左转、后退、右转。使用（z,x）来左转或右转。您可以使用（r,f）来增加和减少移动机器人的速度。有三种速度模式，见下表：

| 速度模式 | 线性速度 (m/s) | 旋转速度 (deg/s) |
| -------- | -------------- | ---------------- |
| 快速     | 0.4            | 90               |
| 中等     | 0.25           | 60               |
| 慢速     | 0.1            | 30               |

| 按键 | 动作     |
| ---- | -------- |
| W    | 前进     |
| A    | 左移     |
| S    | 后退     |
| D    | 右移     |
| Z    | 左转     |
| X    | 右转     |
| R    | 增加速度 |
| F    | 减少速度 |

:::tip
如果您使用不同的键盘，您可以在`LeKiwiRobotConfig`中更改每个命令的按键。
:::

### 有线版本

如果您有**有线**LeKiwi 版本，请在您的笔记本电脑上运行所有命令，包括这两个远程操作命令。

## 通信故障排除

如果您在连接到移动 SO100 时遇到问题，请按照以下步骤诊断和解决问题。

### 1. 验证 IP 地址配置

确保在配置文件中设置了 Pi 的正确 ip。要检查 Raspberry Pi 的 IP 地址，请运行（在 Pi 命令行上）：

```bash
hostname -I
```

### 2. 检查 Pi 是否可从笔记本电脑/PC 访问

尝试从您的笔记本电脑 ping Raspberry Pi：

```bach
ping <your_pi_ip_address>
```

如果 ping 失败：

- 确保 Pi 已开机并连接到同一网络。
- 检查 Pi 上是否启用了 SSH。

### 3. 尝试 SSH 连接

如果您无法 SSH 到 Pi，它可能没有正确连接。使用：

```bash
ssh <your_pi_user_name>@<your_pi_ip_address>
```

如果您收到连接错误：

- 通过运行以下命令确保 Pi 上启用了 SSH：

  ```bash
  sudo raspi-config
  ```

  然后导航到：**接口选项 -> SSH** 并启用它。

### 4. 相同的配置文件

确保您的笔记本电脑/PC 和 Raspberry Pi 上的配置文件相同。

## 记录数据集

一旦您熟悉了远程操作，就可以用 LeKiwi 记录您的第一个数据集。

我们使用 Hugging Face hub 功能来上传您的数据集。如果您之前没有使用过 Hub，请确保您可以使用写入访问令牌通过 cli 登录，此令牌可以从[Hugging Face 设置](https://huggingface.co/settings/tokens)生成。

通过运行此命令将您的令牌添加到 CLI：

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

然后将您的 Hugging Face 存储库名称存储在变量中：

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

现在您可以记录数据集。要记录片段并将您的数据集上传到 hub，请执行这个为 LeKiwi 定制的 API 示例。确保首先在脚本中调整`remote_ip`、`repo_id`、`port`和`task`。如果您想运行脚本更长时间，可以增加`NB_CYCLES_CLIENT_CONNECTION`。

<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/record.png" />
</div>

```bash
python examples/lekiwi/record.py
```

数据集上传

在本地，您的数据集存储在此文件夹中：`~/.cache/huggingface/lerobot/{repo-id}`。在数据记录结束时，您的数据集将上传到您的 Hugging Face 页面（例如 https://huggingface.co/datasets/cadene/so101_test），您可以通过运行以下命令获得：

```bash
echo https://huggingface.co/datasets/${HF_USER}/so101_test
```
您的数据集将自动标记为 `LeRobot`，以便社区轻松找到它，您还可以添加自定义标签（在这种情况下，例如 `tutorial`）。

您可以通过搜索 `LeRobot` [标签](https://huggingface.co/datasets?other=LeRobot)在 hub 上查找其他 LeRobot 数据集。

:::tip

### 数据收集技巧

一旦您熟悉了数据记录，就可以创建一个更大的数据集用于训练。一个好的起始任务是在不同位置抓取物体并将其放入箱子中。我们建议至少记录 50 个回合，每个位置 10 个回合。保持摄像头固定，并在整个记录过程中保持一致的抓取行为。还要确保您操作的物体在摄像头上可见。一个好的经验法则是，您应该能够仅通过查看摄像头图像来完成任务。

在接下来的部分中，您将训练您的神经网络。在实现可靠的抓取性能后，您可以开始在数据收集过程中引入更多变化，例如额外的抓取位置、不同的抓取技术和改变摄像头位置。

避免过快添加太多变化，因为这可能会影响您的结果。

如果您想深入了解这个重要话题，可以查看我们写的关于什么构成好数据集的[博客](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset)[文章](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset)。

### 故障排除

在 Linux 上，如果在数据记录期间左右箭头键和 escape 键没有任何效果，请确保您已设置 `$DISPLAY` 环境变量。请参阅 [pynput 限制](https://pynput.readthedocs.io/en/latest/limitations.html#linux)。

:::

### 有线版本

如果您有**有线** LeKiwi 版本，请在您的笔记本电脑上运行所有命令，包括这些记录数据集命令。

## 可视化数据集

如果您使用 `--dataset.push_to_hub=true` 将数据集上传到 hub，您可以通过复制粘贴您的仓库 ID 来[在线可视化您的数据集](https://huggingface.co/spaces/lerobot/visualize_dataset)，仓库 ID 由以下命令给出：

```bash
echo ${HF_USER}/lekiwi_test
```

如果您没有使用 `--dataset.push_to_hub=false` 上传，您也可以在本地可视化它（可以在浏览器中打开窗口 `http://127.0.0.1:9090` 使用可视化工具）：

```bash
python -m lerobot.scripts.visualize_dataset_html \
  --repo-id ${HF_USER}/lekiwi_test \# <-change to your repo-id
  --local-files-only 1
```

## 重放回合

要重放回合，请运行下面的 API 示例，确保更改 `remote_ip`、`port`、LeRobotDatasetId 和回合索引。文件位于路径 `examples/lekiwi/replay.py`。

<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/Replay an episode.png" />
</div>

执行以下命令：

```bash
python examples/lekiwi/replay.py
```

## 训练策略

要训练控制机器人的策略，请使用 `python lerobot/scripts/train.py` 脚本。需要一些参数。以下是示例命令：

```bash
python lerobot/scripts/train.py \
  --dataset.repo_id=${HF_USER}/lekiwi_test \
  --policy.type=act \
  --output_dir=outputs/train/act_lekiwi_test \
  --job_name=act_lekiwi_test \
  --policy.device=cuda \
  --wandb.enable=true # You can choose false if you don't need wandb
```

让我们解释一下：

1. 我们使用 `--dataset.repo_id=${HF_USER}/lekiwi_test` 提供了数据集作为参数。
2. 我们使用 `policy.type=act` 提供了策略。这会从 `configuration_act.py` 加载配置。重要的是，此策略将自动适应您机器人的电机状态数量、电机动作和摄像头（例如 `laptop` 和 `phone`），这些已保存在您的数据集中。
4. 我们提供了 `policy.device=cuda`，因为我们在 Nvidia GPU 上训练，但您可以使用 `policy.device=mps` 在 Apple silicon 上训练。
5. 我们提供了 `wandb.enable=true` 来使用 [Weights and Biases](https://docs.wandb.ai/quickstart) 可视化训练图表。这是可选的，但如果您使用它，请确保通过运行 `wandb login` 登录。

训练应该需要几个小时。您将在 `outputs/train/act_lekiwi_test/checkpoints` 中找到检查点。

## 评估您的策略

要评估您的策略，请运行 `evaluate.py` API 示例，确保更改 `remote_ip`、`port`、模型等。

路径是 `examples/lekiwi/evaluate.py`。
<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/evaluation.png" />
</div>

```bash
python examples/lekiwi/evaluate.py
```

如您所见，这与之前用于记录训练数据集的命令几乎相同。有两个地方发生了变化：

1. 有一个额外的 `policy` 参数，它指示您的策略检查点的路径（例如 `outputs/train/eval_act_lekiwi_test/checkpoints/last/pretrained_model`）。如果您将模型检查点上传到 hub，您也可以使用模型仓库（例如 `${HF_USER}/act_lekiwi_test`）。
2. 数据集的名称以 `eval` 开头，以反映您正在运行推理（例如 `${HF_USER}/eval_act_lekiwi_test`）。

## 帮助 🙋‍

对于硬件问题，请联系客户服务。对于使用问题，请加入 Discord。

[LeRobot 平台](https://github.com/huggingface/lerobot)

[LeRobot Discord 频道](https://discord.gg/8TnwDdjFGU)

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
