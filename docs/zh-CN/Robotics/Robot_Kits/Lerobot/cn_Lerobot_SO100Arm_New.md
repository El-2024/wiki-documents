---
description: 本 wiki 提供了 SO ARM100 的组装和调试教程，并在最新版本的 Lerobot 框架内实现数据收集和训练。
title: Lerobot 中的 SoArm
keywords:
- Lerobot
- Huggingface
- Arm
- Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /cn/lerobot_so100m_new
last_update:
  date: 8/20/2025
  author: LiShanghang
---

# 如何在最新版本的 Lerobot 中使用 SO-ARM100 和 SO-ARM101 机械臂

:::tip
本教程维护已更新到最新版本的[lerobot](https://huggingface.co/docs/lerobot/index)，如果您想参考之前版本的教程，请点击[这里](https://wiki.seeedstudio.com/cn/lerobot_so100m/)。
:::

## 介绍

[SO-10xARM](https://github.com/TheRobotStudio/SO-ARM100)是由[TheRobotStudio](https://www.therobotstudio.com/)推出的完全开源机械臂项目。它包括从动臂和主动机械臂，还提供详细的 3D 打印文件和操作指南。[LeRobot](https://github.com/huggingface/lerobot/tree/main)致力于在 PyTorch 中为现实世界机器人技术提供模型、数据集和工具。其目标是降低机器人技术的入门门槛，使每个人都能通过共享数据集和预训练模型做出贡献并从中受益。LeRobot 集成了经过现实世界应用验证的前沿方法，以模仿学习为中心。它提供了一套预训练模型、包含人类收集演示的数据集和仿真环境，使用户无需组装机器人即可开始使用。在接下来的几周内，计划增强对目前可获得的最具成本效益和最有能力的机器人的现实世界机器人技术支持。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/sD34HnAkGNc?si=hqKd_sH5Oc9sdcwd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 项目介绍

SO-ARM10x 和 reComputer Jetson AI 智能机器人套件无缝结合了高精度机械臂控制和强大的 AI 计算平台，提供了全面的机器人开发解决方案。该套件基于 Jetson Orin 或 AGX Orin 平台，结合 SO-ARM10x 机械臂和 LeRobot AI 框架，为用户提供适用于教育、研究和工业自动化等多种场景的智能机器人系统。
本 wiki 提供了 SO ARM10x 的组装和调试教程，并在 Lerobot 框架内实现数据收集和训练。

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
  </div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

## 主要特性

1. **开源且低成本**：这是来自[TheRobotStudio](https://github.com/TheRobotStudio/SO-ARM100)的开源、低成本机械臂解决方案
2. **与 LeRobot 集成**：专为与[LeRobot 平台](https://github.com/huggingface/lerobot)集成而设计
3. **丰富的学习资源**：提供全面的开源学习资源，如组装和校准指南，以及测试、数据收集、训练和部署教程，帮助用户快速入门和开发机器人应用。
4. **与 Nvidia 兼容**：使用 reComputer Mini J4012 Orin NX 16 GB 部署此机械臂套件。
5. **多场景应用**：适用于教育、科研、自动化生产和机器人技术等领域，帮助用户在各种复杂任务中实现高效、精确的机器人操作。

## 新功能：

- 布线优化：与 SO-ARM100 相比，SO-ARM101 具有改进的布线，防止了之前在关节 3 处出现的断开问题。新的布线设计也不再限制关节的运动范围。
- 主动臂的不同齿轮比：主动臂现在使用具有优化齿轮比的电机，提高了性能并消除了对外部齿轮箱的需求。
- 新功能支持：主动臂现在可以实时跟随从动臂，这对即将到来的学习策略至关重要，人类可以干预并纠正机器人的动作。

:::caution

Seeed Studio 仅对硬件本身的质量负责。教程严格按照官方文档更新。如果您遇到无法解决的软件问题或环境依赖问题，除了查看本教程末尾的 FAQ 部分外，请及时向[LeRobot 平台](https://github.com/huggingface/lerobot)或[LeRobot Discord 频道](https://discord.gg/8TnwDdjFGU)报告问题。

:::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/JrF_ymUvrqc?si=vslu5NNI-ZIzVXLc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 规格参数

<table>
  <thead>
    <tr>
      <th>类型</th>
      <th colSpan="2">SO-ARM100</th>
      <th colSpan="2">SO-ARM101</th>
    </tr>
    <tr>
      <th></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">机械臂套件</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">机械臂套件专业版</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">机械臂套件</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">机械臂套件专业版</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>主动臂</td>
      <td rowSpan="2">12 个 ST-3215-C001 (7.4V)电机，所有关节均为 1:345 齿轮比</td>
      <td rowSpan="2">12 个 ST-3215-C018/ST-3215-C047 (12V)电机，所有关节均为 1:345 齿轮比</td>
      <td colSpan="2">
        1 个 ST-3215-C001 (7.4V)电机，仅用于关节 2，齿轮比 1:345<br />
        2 个 ST-3215-C044 (7.4V)电机，用于关节 1 和 3，齿轮比 1:191<br />
        3 个 ST-3215-C046 (7.4V)电机，用于关节 4、5 和夹爪（关节 6），齿轮比 1:147
      </td>
    </tr>
    <tr>
      <td>从动臂</td>
      <td colSpan="2">与 SO-ARM100 相同</td>
    </tr>
    <tr>
      <td>电源</td>
      <td>5.5 mm × 2.1 mm DC 5 V 4 A</td>
      <td>5.5 mm × 2.1 mm DC 12 V 2 A</td>
      <td>5.5 mm × 2.1 mm DC 5 V 4 A</td>
      <td>
        5.5 mm × 2.1 mm DC 12 V 2 A（从动臂）<br />
        5.5 mm × 2.1 mm DC 5 V 4 A（主动臂）
      </td>
    </tr>
    <tr>
      <td>角度传感器</td>
      <td colSpan="4">12 位磁编码器</td>
    </tr>
    <tr>
      <td>推荐工作温度</td>
      <td colSpan="4">0 °C 至 40 °C</td>
    </tr>
    <tr>
      <td>通信</td>
      <td colSpan="4">UART</td>
    </tr>
    <tr>
      <td>控制方式</td>
      <td colSpan="4">PC</td>
    </tr>
  </tbody>
</table>

:::danger

如果您购买的是机械臂套件版本，两个电源都是 5V。如果您购买的是机械臂套件专业版，请在主动机械臂的校准和每个步骤中使用 5V 电源，在从动机械臂的校准和每个步骤中使用 12V 电源。

:::

## 物料清单(BOM)

| 部件 | 数量 | 包含|
|--|--|--|
|  舵机电机 | 12 | ✅ |
| 电机控制板 | 2 | ✅ |
| USB-C 线缆 2 根 | 1 | ✅ |
| 电源 2 个 | 2 | ✅ |
| 桌夹| 4 | ✅ |
| 机械臂 3D 打印部件 | 1 | 可选 |

## 初始系统环境

**对于 Ubuntu x86：**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6+  

**对于 Jetson Orin：**

- Jetson JetPack 6.0 和 6.1，不支持 6.1
- Python 3.10  
- Torch 2.3+

## 目录

  [A. 3D 打印指南](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#install-lerobot)

  [B. 安装 LeRobot](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#install-lerobot)

  [C. 配置电机](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#configure-the-motors)

  [D. 组装](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#assembly)

  [E. 校准](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#calibrate)

  [F. 远程操作](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#teleoperate)

  [G. 添加摄像头](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#add-cameras)

  [H. 记录数据集](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#record-the-dataset)

  [I. 可视化数据集](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#visualize-the-dataset)

  [J. 重放一个片段](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#replay-an-episode)

  [K. 训练策略](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#train-a-policy)

  [L. 评估您的策略](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#evaluate-your-policy)

## 3D 打印指南

:::caution
随着 SO101 的官方更新，SO100 将不再支持，源文件将按官方要求删除，但源文件仍可在我们的[Makerworld](https://makerworld.com/zh/models/908660)中找到。但是，对于之前购买 SO100 的用户，教程和安装方法仍然兼容。SO101 的打印与 SO100 的电机套件安装完全兼容。
:::

### 步骤 1：选择打印机

提供的 STL 文件可以在许多 FDM 打印机上直接打印。以下是经过测试和建议的设置，尽管其他设置也可能有效。

- 材料：PLA+
- 喷嘴直径和精度：0.4mm 喷嘴直径，0.2mm 层高或 0.6mm 喷嘴，0.4mm 层高。
- 填充密度：15%  

### 步骤 2：设置打印机
- 确保打印机已校准，并使用打印机特定说明正确设置床面水平。
- 清洁打印床，确保无灰尘或油脂。如果使用水或其他液体清洁床面，请将床面擦干。
- 如果您的打印机建议使用，请使用标准胶棒在床面打印区域涂抹一层薄而均匀的胶水。避免结块或不均匀涂抹。
- 使用打印机特定说明装载打印机耗材。
- 确保打印机设置与上述建议的设置匹配（大多数打印机有多种设置，请选择最接近的设置）。
- 设置为到处支撑，但忽略与水平面夹角大于 45 度的斜面。
- 水平轴螺丝孔中不应有支撑。

### 步骤 3：打印零件

领导者或跟随者的所有零件都已包含在单个文件中，便于 3D 打印，正确定向为 z 向上以最小化支撑。

- 对于 220mmx220mm 的打印床尺寸（如 Ender），打印这些文件：
  - [跟随者](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl)
  - [领导者](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl)

- 对于 205mm x 250mm 的打印床尺寸（如 Prusa/Up）：
  - [跟随者](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl)
  - [领导者](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl)

## 安装 LeRobot

需要根据您的 CUDA 安装 pytorch 和 torchvision 等环境。

1. 安装 Miniconda：
对于 Jetson：

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

或者，对于 X86 Ubuntu 22.04：

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
conda init --all
```

2. 为 lerobot 创建并激活一个新的 conda 环境

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
```

3. 克隆 Lerobot：

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

4. 使用 miniconda 时，在您的环境中安装 ffmpeg：

```bash
conda install ffmpeg -c conda-forge
```

:::tip
这通常会为您的平台安装使用 libsvtav1 编码器编译的 ffmpeg 7.X。如果不支持 libsvtav1（使用 ffmpeg -encoders 检查支持的编码器），您可以：

- [在任何平台上] 使用以下命令显式安装 ffmpeg 7.X：

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- [仅在 Linux 上] 安装 ffmpeg 构建依赖项并使用 libsvtav1 从源代码编译 ffmpeg，并确保使用 which ffmpeg 对应您安装的 ffmpeg 二进制文件。

如果您遇到这样的错误，也可以使用此命令。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" />
</div>

:::

5. 安装带有 feetech 电机依赖项的 LeRobot：

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

对于 Jetson Jetpack 6.0+设备（请确保在执行此步骤之前从步骤 5 安装[Pytorch-gpu 和 Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)）：

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

6. 检查 Pytorch 和 Torchvision

由于通过 pip 安装 lerobot 环境会卸载原始的 Pytorch 和 Torchvision 并安装 CPU 版本的 Pytorch 和 Torchvision，您需要在 Python 中进行检查。

```python
import torch
print(torch.cuda.is_available())
```

如果打印结果为 False，您需要根据[官方网站教程](https://pytorch.org/index.html)重新安装 Pytorch 和 Torchvision。

如果您使用的是 Jetson 设备，请根据[此教程](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)安装 Pytorch 和 Torchvision。

## 配置电机

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="SO101" label="SO101">

SO-ARM101 的舵机校准和初始化过程在方法和代码方面与 SO-ARM100 相同。但是，请注意 SO-ARM101 领导臂前三个关节的齿轮比与 SO-ARM100 不同，因此重要的是要仔细区分和校准它们。

要配置电机，为您的领导臂指定一个总线舵机适配器和 6 个电机，同样为跟随臂指定另一个总线舵机适配器和 6 个电机。方便的做法是给它们贴标签，在每个电机上写明它是用于跟随者 F 还是领导者 L，以及它的 ID 从 1 到 6。我们使用**F1–F6**表示**跟随臂**的关节 1 到 6，使用**L1–L6**表示**领导臂**的关节 1 到 6。相应的舵机型号、关节分配和齿轮比详情如下：

| 舵机型号                            | 齿轮比 | 对应关节         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
您现在应该将 5V 或 12V 电源插入电机总线。STS3215 7.4V 电机使用 5V，STS3215 12V 电机使用 12V。请注意，领导臂始终使用 7.4V 电机，因此如果您有 12V 和 7.4V 电机，请注意插入正确的电源，否则可能会烧坏您的电机！现在，通过 USB 将电机总线连接到您的计算机。请注意，USB 不提供任何电源，电源和 USB 都必须插入。
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" />
</div>

***以下是代码校准步骤，请参考上图中的接线舵机进行校准***

查找与您的机械臂关联的 USB 端口
要为每个机械臂找到正确的端口，请运行实用程序脚本两次：

```bash
python -m lerobot.find_port
```

示例输出：

```bash
Finding all available ports for the MotorBus.
['/dev/ttyACM0', '/dev/ttyACM1']
Remove the usb cable from your MotorsBus and press Enter when done.

[...Disconnect corresponding leader or follower arm and press Enter...]

The port of this MotorsBus is /dev/ttyACM1
Reconnect the USB cable.
```

:::tip
记住要拔掉 usb，否则接口将不会被检测到。
:::

识别领导臂端口时的示例输出（例如，Mac 上的`/dev/tty.usbmodem575E0031751`，或 Linux 上可能的`/dev/ttyACM0`）：

识别跟随臂端口时的示例输出（例如，`/dev/tty.usbmodem575E0032081`，或 Linux 上可能的`/dev/ttyACM1`）：

您可能需要通过运行以下命令来授予 USB 端口访问权限：

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

**配置您的电机**

:::danger
请使用 5V 电源校准领导电机（ST-3215-C046、C044、001）。
:::

| **领导臂关节 6 校准** | **领导臂关节 5 校准** | **领导臂关节 4 校准** | **领导臂关节 3 校准** | **领导臂关节 2 校准** | **领导臂关节 1 校准** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) |

:::danger
如果您购买的是机械臂套件版本（ST-3215-C001），请使用 5V 电源。如果您购买的是机械臂套件专业版，请使用 12V 电源校准舵机（ST-3215-C047/ST-3215-C018）。
:::

| **跟随臂关节 6 校准** | **跟随臂关节 5 校准** | **跟随臂关节 4 校准** | **跟随臂关节 3 校准** | **跟随臂关节 2 校准** | **跟随臂关节 1 校准** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) |
:::tip
再次提醒，请确保舵机关节 ID 和齿轮比严格对应 SO-ARM101 的配置。
:::

将 USB 线缆从您的计算机连接到从动臂控制器板，并连接电源。然后运行以下命令。

```bash
python -m lerobot.setup_motors \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0  # <- paste here the port found at previous step
```

您应该看到以下指令。

```bash
Connect the controller board to the 'gripper' motor only and press enter.
```

按照指示，插入夹爪的电机。确保它是连接到控制板的唯一电机，并且电机本身尚未菊花链连接到任何其他电机。当您按下[Enter]时，脚本将自动为该电机设置 ID 和波特率。

然后您应该看到以下消息：

```bash
'gripper' motor id set to 6
```

接着是下一个指令：

```bash
Connect the controller board to the 'wrist_roll' motor only and press enter.
```

您可以从控制器板上断开 3 针线缆，但可以让它保持连接到另一端的夹爪电机，因为它已经在正确的位置。现在，将另一根 3 针线缆插入腕部滚转电机并连接到控制器板。与之前的电机一样，确保它是连接到控制板的唯一电机，并且电机本身没有连接到任何其他电机。

:::caution
按照指示对每个电机重复此操作。
:::

在按 Enter 之前，请检查每一步的线缆连接。例如，在您操作控制板时，电源线缆可能会断开。

完成后，脚本将简单地结束，此时电机就可以使用了。您现在可以将每个电机的 3 针线缆插入下一个电机，并将第一个电机（ID=1 的"肩部平移"）的线缆连接到控制器板，控制器板现在可以安装到机械臂的底座上。

对主动臂执行相同的步骤。

```bash
python -m lerobot.setup_motors \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0  # <- paste here the port found at previous step
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/hbW6eFYkHTg?si=jKdpTyI8wRC-iHxO" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

</TabItem>

</Tabs>

## 组装

:::tip

- SO-ARM101 的双臂组装过程与 SO-ARM100 相同。唯一的区别是 SO-ARM101 增加了线缆夹，以及主动臂关节舵机的齿轮比不同。因此 SO100 和 SO101 都可以参考以下内容进行安装
- 在组装之前，请再次检查您的电机型号和减速比。如果您购买的是 SO100，可以忽略此步骤。如果您购买的是 SO101，请查看下表以区分 F1 到 F6 和 L1 到 L6。

:::

  | 舵机型号                            | 齿轮比 | 对应关节         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
如果您购买的是**SO101 机械臂套件标准版**，所有电源都是 5V。如果您购买的是**SO101 机械臂套件专业版**，主动臂应在每个步骤中使用 5V 电源进行校准和操作，而从动臂应在每个步骤中使用 12V 电源进行校准和操作。
:::

**组装主动臂**

| **步骤 1** | **步骤 2** | **步骤 3** | **步骤 4** | **步骤 5** | **步骤 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L4.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L5.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L6.jpg) |
| **步骤 7** | **步骤 8** | **步骤 9** | **步骤 10** | **步骤 11** | **步骤 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L7.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L8.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L9.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L10.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L12.jpg) |
| **步骤 13** | **步骤 14** | **步骤 15** | **步骤 16** | **步骤 17** | **步骤 18** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L18.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L21.jpg) |
| **步骤 19** | **步骤 20** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L22.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L23.jpg) |

**组装从动臂**

:::tip

- 从动臂的组装步骤与主动臂基本相同。唯一的区别在于步骤 12 之后末端执行器（夹爪和手柄）的安装方法。

:::

| **步骤 1** | **步骤 2** | **步骤 3** | **步骤 4** | **步骤 5** | **步骤 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.5.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F4.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F5.jpg) |
| **步骤 7** | **步骤 8** | **步骤 9** | **步骤 10** | **步骤 11** | **步骤 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F7.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F8.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F9.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F12.jpg) |
| **步骤 13** | **步骤 14** | **步骤 15** | **步骤 16** | **步骤 17** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F17.jpg) |

## 校准

:::tip
SO100 和 SO101 的代码是兼容的。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::

:::danger
如果您购买的是**SO101 机械臂套件标准版**，所有电源都是 5V。如果您购买的是**SO101 机械臂套件专业版**，主动臂应在每个步骤中使用 5V 电源进行校准和操作，而从动臂应在每个步骤中使用 12V 电源进行校准和操作。
:::

接下来，您需要将电源和数据线缆连接到您的 SO-10x 机器人进行校准，以确保主动臂和从动臂在相同物理位置时具有相同的位置值。这种校准是必需的，因为它允许在一个 SO-10x 机器人上训练的神经网络在另一个机器人上工作。如果您需要重新校准机械臂，请删除`~/.cache/huggingface/lerobot/calibration/robots`或`~/.cache/huggingface/lerobot/calibration/teleoperators`目录下的文件并重新校准机械臂。否则，将出现错误提示。机械臂的校准信息将存储在此目录下的 JSON 文件中。

**从动臂手动校准**

请通过 3 针线缆连接 6 个机器人舵机的接口，并将底盘舵机连接到舵机驱动板，然后运行以下命令或 API 示例来校准机械臂：

***首先给予接口权限***

```bash
sudo chmod 666 /dev/ttyACM*
```
***然后校准从动臂***

```python
python -m lerobot.calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm
```

下面的视频展示了如何执行校准。首先，您需要将机器人移动到所有关节都处于其运动范围中间位置的位置。然后按下回车键后，您必须将每个关节移动到其完整的运动范围。

**主动臂的手动校准**

执行相同的步骤来校准主动臂，运行以下命令或 API 示例：

```python
python -m lerobot.calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/22n6f5xH9Dk?si=2QTzn1CDbsSv6Y_H" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 远程操作

**简单远程操作**
然后您就可以远程操作您的机器人了！运行这个简单的脚本（它不会连接和显示摄像头）：

请注意，与机器人关联的 id 用于存储校准文件。在使用相同设置进行远程操作、录制和评估时，使用相同的 id 非常重要。

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
python -m lerobot.teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm
```

远程操作命令将自动：

1. 识别任何缺失的校准并启动校准程序。
2. 连接机器人和远程操作设备并开始远程操作。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 添加摄像头

:::tip
SO100 和 SO101 代码是兼容的。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::

要实例化摄像头，您需要一个摄像头标识符。如果您重启计算机或重新插拔摄像头，此标识符可能会发生变化，这种行为主要取决于您的操作系统。

要查找插入系统的摄像头索引，请运行以下脚本：

```python
python -m lerobot.find_cameras opencv # or realsense for Intel Realsense cameras
```

终端将打印出以下信息。

```markdown
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Format: 16.0
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)
```

您可以在`outputs/captured_images`目录中找到每个摄像头拍摄的图片。

:::warning
在 macOS 中使用 Intel RealSense 摄像头时，您可能会遇到此错误：Error finding RealSense cameras: failed to set power state，这可以通过使用 sudo 权限运行相同命令来解决。请注意，在 macOS 中使用 RealSense 摄像头是不稳定的。
:::

然后您就能够在远程操作时在计算机上显示摄像头，运行以下代码。这对于在录制第一个数据集之前准备设置很有用。

```bash
python -m lerobot.teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

如果您有更多摄像头，可以更改`--robot.cameras`来添加摄像头。您应该注意 index_or_path 的格式，它由`python -m lerobot.find_cameras opencv`输出的摄像头 ID 的最后一位数字决定。

例如，您想添加一个侧面摄像头：

```bash
python -m lerobot.teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

:::tip
如果您遇到这样的错误。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" />
</div>

您可以降级 rerun 版本来解决这个问题。

```bash
pip3 install rerun-sdk==0.23
```

:::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/EUcXlLlOjGE?si=6ncQ7o5ZFLR4PGTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 录制数据集

- 如果您想在本地保存数据集，可以直接运行：

```bash
python -m lerobot.record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeedstudio123/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 
```

其中，`repo_id`可以自定义修改，`push_to_hub=false`。最终，数据集将保存在主文件夹的`~/.cache/huggingface/lerobot`目录中，其中将创建上述的`seeedstudio123/test`文件夹。

- 如果您想使用 Hugging Face hub 功能上传数据集，并且之前没有这样做过，请确保您已使用具有写入权限的令牌登录，该令牌可以从[Hugging Face 设置](https://huggingface.co/settings/tokens)生成：

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

将您的 Hugging Face 仓库名称存储在变量中以运行这些命令：

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

录制 5 个片段并将数据集上传到 hub：

```bash
python -m lerobot.record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=true \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 
```

您将看到很多类似这样的行出现：

```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

**参数说明**

- episode-time-s：表示每次收集数据的时间。
- reset-time-s：是每次数据收集之间的准备时间。
- num-episodes：表示预期收集多少组数据。
- push-to-hub：决定是否将数据上传到 HuggingFace Hub。

:::tip

- "如果您想在本地保存数据（`--dataset.push_to_hub=false`），请将`--dataset.repo_id=${HF_USER}/so101_test`替换为自定义的本地文件夹名称，例如`--dataset.repo_id=seeed_123/so101_test`。然后它将存储在系统主目录的`~/.cache/huggingface/lerobot`中。"

- 如果您使用`--dataset.push_to_hub=true`将数据集上传到 hub，您可以通过复制粘贴您的 repo id 来[在线可视化您的数据集](https://huggingface.co/spaces/lerobot/visualize_dataset)：

- 在片段录制期间随时按右箭头→可以提前停止并进入重置。在重置期间也是如此，可以提前停止并进入下一个片段录制。

- 在片段录制或重置期间随时按左箭头←可以提前停止，取消当前片段，并重新录制。

- 在片段录制期间随时按 ESC 键可以提前结束会话，直接进入视频编码和数据集上传。

- 注意：录制期间会自动创建检查点。如果出现问题，您可以通过使用`--resume=true`重新运行相同命令来恢复。要从头开始录制，请手动删除数据集目录。
- 一旦您熟悉了数据记录，就可以创建一个更大的数据集用于训练。一个好的起始任务是在不同位置抓取物体并将其放入容器中。我们建议至少记录 50 个回合，每个位置 10 个回合。保持摄像头固定，并在整个记录过程中保持一致的抓取行为。还要确保您操作的物体在摄像头中可见。一个好的经验法则是，您应该能够仅通过观看摄像头图像来完成任务。

- 在接下来的章节中，您将训练您的神经网络。在实现可靠的抓取性能后，您可以开始在数据收集过程中引入更多变化，例如额外的抓取位置、不同的抓取技术和改变摄像头位置。

- 避免过快添加太多变化，因为这可能会影响您的结果。

- 在 Linux 上，如果在数据记录期间左右箭头键和 Escape 键没有任何效果，请确保您已设置$DISPLAY 环境变量。请参阅[pynput 限制](https://pynput.readthedocs.io/en/latest/limitations.html#linux)。

:::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=-eDB73KgUksyJXa-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 可视化数据集

:::tip
SO100 和 SO101 代码兼容。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::

```bash
echo ${HF_USER}/so101_test  
```

如果您没有使用`--dataset.push_to_hub=false`上传，您也可以在本地可视化：

```bash
python -m lerobot.scripts.visualize_dataset_html \
  --repo-id ${HF_USER}/so101_test \
```

如果您使用`--dataset.push_to_hub=false`上传，您也可以在本地可视化：

```bash
python -m lerobot.scripts.visualize_dataset_html \
  --repo-id seeed_123/so101_test \
```

**这里，`seeed_123`是收集数据时定义的自定义`repo_id`名称。**

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" />
</div>

## 重放回合

:::tip
SO100 和 SO101 代码兼容。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::

现在尝试在您的机器人上重放第一个回合：

```bash
python -m lerobot.replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.episode=0
```

## 训练策略

:::tip
SO100 和 SO101 代码兼容。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::

要训练策略来控制您的机器人，请使用 python -m lerobot.scripts.train 脚本。需要一些参数。以下是示例命令：

```bash
python -m lerobot.scripts.train \
  --dataset.repo_id=${HF_USER}/so101_test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --steps=300000 
```

**如果您想在本地数据集上训练，请确保`repo_id`与数据收集期间使用的匹配，并添加`--policy.push_to_hub=False`。**

```bash
python -m lerobot.scripts.train \
  --dataset.repo_id=seeedstudio123/test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false\
  --steps=300000 
```

让我们解释一下：

- **数据集规范**：我们通过参数`--dataset.repo_id=${HF_USER}/so101_test`提供数据集。
- **训练步数**：我们使用`--steps=300000`修改训练步数。算法默认为 800000 步，您可以根据任务的难度和观察训练期间的损失来调整。
- **策略类型**：我们使用`policy.type=act`提供策略。同样，您可以在策略之间切换，如[act, diffusion, pi0, pi0fast, pi0fast, sac, smolvla]，这将从`configuration_act.py`加载配置。重要的是，此策略将自动适应您的机器人（例如，`laptop`和`phone`）的电机状态、电机动作和摄像头数量，因为这些信息已存储在您的数据集中。
- **设备选择**：我们提供`policy.device=cuda`，因为我们在 Nvidia GPU 上训练，但您可以使用`policy.device=mps`在 Apple Silicon 上训练。
- **可视化工具**：我们提供`wandb.enable=true`来使用[Weights and Biases](https://docs.wandb.ai/quickstart)可视化训练图表。这是可选的，但如果您使用它，请确保您已通过运行`wandb login`登录。

如果您遇到以下错误：

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/stack_bug.png" />
</div>

尝试运行以下命令来解决：

```bash
pip install datasets==2.19
```

训练应该需要几个小时。您将在`outputs/train/act_so100_test/checkpoints`中找到检查点。

要从检查点恢复训练，以下是从`act_so101_test`策略的最后检查点恢复的示例命令：

```bash
python -m lerobot.scripts.train \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

**上传策略检查点**

训练完成后，使用以下命令上传最新检查点：

```bash
huggingface-cli upload ${HF_USER}/act_so101_test \
  outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

您也可以上传中间检查点：

```bash
CKPT=010000
huggingface-cli upload ${HF_USER}/act_so101_test${CKPT} \
  outputs/train/act_so101_test/checkpoints/${CKPT}/pretrained_model
```

## 评估您的策略

:::tip
SO100 和 SO101 代码兼容。SO100 用户可以直接使用 SO101 的参数和代码进行操作。
:::

您可以使用[`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py)中的`record`函数，但以策略检查点作为输入。例如，运行此命令记录 10 个评估回合：

```bash
python -m lerobot.record  \
  --robot.type=so100_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video10, width: 640, height: 480, fps: 30}, side: {type: intelrealsense, serial_number_or_name: 233522074606, width: 640, height: 480, fps: 30}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=${HF_USER}/eval_so100 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=${HF_USER}/my_policy
```

例如：

```bash
python -m lerobot.record  \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

1. `--policy.path`参数指示您的策略训练结果的权重文件路径（例如，`outputs/train/act_so101_test/checkpoints/last/pretrained_model`）。如果您将模型训练结果权重文件上传到 Hub，您也可以使用模型仓库（例如，`${HF_USER}/act_so100_test`）。

2. 数据集名称`dataset.repo_id`以`eval_`开头。此操作将在评估期间单独记录视频和数据，这些将保存在以`eval_`开头的文件夹中，例如`seeed/eval_test123`。

3. 如果您在评估阶段遇到`File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'`，请先删除以`eval_`开头的文件夹，然后重新运行程序。

4. 当遇到`mean is infinity. You should either initialize with stats as an argument or use a pretrained model`时，请注意`--robot.cameras`参数中的 front 和 side 等关键词必须与收集数据集时使用的严格一致。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=Y2SXU9T0DSmtz4ll" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 常见问题

- 如果您正在遵循此文档/教程，请 git clone 推荐的 GitHub 仓库`https://github.com/Seeed-Projects/lerobot.git`。本文档推荐的仓库是经过验证的稳定版本；官方 Lerobot 仓库持续更新到最新版本，这可能会导致不可预见的问题，如不同的数据集版本、不同的命令等。

- 如果您在校准舵机 ID 时遇到以下错误：

  ```bash
  `Motor ‘gripper’ was not found, Make sure it is connected`
  ```

  请仔细检查通信电缆是否正确连接到舵机，以及电源是否提供正确的电压。

- 如果您遇到：

  ```bash
  Could not connect on port "/dev/ttyACM0"
  ```

  并且运行`ls /dev/ttyACM*`时可以看到 ACM0 存在，这意味着您忘记授予串口权限。在终端中输入`sudo chmod 666 /dev/ttyACM*`来修复它。

- 如果您遇到：

  ```bash
  No valid stream found in input file. Is -1 of the desired media type?
  ```
  请使用 `conda install ffmpeg=7.1.1 -c conda-forge` 安装 ffmpeg 7.1.1。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" />
</div>

- 如果遇到：

  ```bash
  ConnectionError: Failed to sync read 'Present_Position' on ids=[1,2,3,4,5,6] after 1 tries. [TxRxResult] There is no status packet!
  ```

  您需要检查对应端口上的机械臂是否已通电，以及总线舵机的数据线是否松动或断开。如果某个舵机的指示灯不亮，说明前一个舵机的线缆松动了。

- 如果在校准机械臂时遇到以下错误：

  ```bash
  Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)
  ```

  断电并重启机械臂，然后重新尝试校准。如果校准过程中 MAX 角度达到数万的值，也可以使用此方法。如果这样做无效，您需要重新校准相应的舵机，包括中位校准和 ID 写入。

- 如果在评估阶段遇到：

  ```bash
  File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'
  ```

  请先删除以 `eval_` 开头的文件夹，然后重新运行程序。

- 如果在评估阶段遇到：

  ```bash
  `mean` is infinity. You should either initialize with `stats` as an argument or use a pretrained model
  ```

  请注意 `--robot.cameras` 参数中的 "front" 和 "side" 等关键词必须与收集数据集时使用的关键词严格一致。

- 如果您已经修理或更换了机械臂的部件，请完全删除 `~/.cache/huggingface/lerobot/calibration/robots` 或 `~/.cache/huggingface/lerobot/calibration/teleoperators` 下的文件，并重新校准机械臂。否则可能会出现错误信息，因为校准信息存储在这些目录的 JSON 文件中。

- 在配备 RTX 3060（8GB）的笔记本电脑上，使用 50 组数据训练 ACT 大约需要 6 小时，在配备 RTX 4090 或 A100 GPU 的计算机上大约需要 2-3 小时。

- 在数据收集过程中，确保摄像头位置、角度和环境光照稳定。减少摄像头捕获的不稳定背景和行人数量，因为部署环境的过度变化可能导致机械臂无法正确抓取。

- 对于数据收集命令，确保 `num-episodes` 参数设置为收集足够的数据。不要中途手动暂停，因为数据的均值和方差只有在数据收集完成后才会计算，这些对训练是必需的。

- 如果程序提示无法从 USB 摄像头读取图像数据，请确保 USB 摄像头没有通过集线器连接。USB 摄像头必须直接连接到设备以确保快速的图像传输速度。

- 如果您发现类似 `AttributeError: module 'rerun' has no attribute 'scalar'. Did you mean: 'scalars'?` 的错误，您可以降级 rerun 版本来解决此问题。

```bash
pip3 install rerun-sdk==0.23
```

:::tip
如果您遇到无法解决的软件问题或环境依赖问题，除了查看本教程末尾的 FAQ 部分外，请及时向 [LeRobot 平台](https://github.com/huggingface/lerobot) 或 [LeRobot Discord 频道](https://discord.gg/8TnwDdjFGU) 报告问题。
:::

## 引用

[中文文档](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/)

TheRobotStudio 项目：[SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)

Huggingface 项目：[Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty：[Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

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
