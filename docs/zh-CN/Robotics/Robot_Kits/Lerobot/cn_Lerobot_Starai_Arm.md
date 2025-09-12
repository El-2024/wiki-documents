---
description: 本 wiki 提供了 StarAI 机械臂的调试教程，并在 Lerobot 框架内实现数据收集和训练。
title: LeRobot 中的 StarAI 机械臂
keywords:
- Lerobot
- Huggingface
- Arm
- Robotics 
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/starai_robotic_arm.webp
slug: /cn/lerobot_starai_arm
last_update:
  date: 9/1/2025
  author: LiShanghang
---

# 开始使用 StarAI 机械臂与 LeRobot

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/IJKTeBYAG7k?si=iS-jqT27fDjeI6yX" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

| **从动臂 Viola** | **主动臂 Violin** | **从动臂 Cello** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png) |

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Fashionstar-Star-Arm-Viola-Violin-p-6497.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买!!! 🖱️</font></span></strong>
</a></div>

## 产品介绍

1. **开源且易于二次开发**
    这一系列舵机由[Fashion Star Robotics](https://fashionrobo.com/)提供，提供开源、易于定制的 6+1 自由度机械臂解决方案。

2. **具有不同载荷的双臂系统**
    Violin 作为主动机械臂。当处于 70%臂展时，从动臂 Viola 的工作载荷为 300g，而从动臂 Cello 的工作载荷为 750g。

3. **支持 ROS2、Moveit2 和 Isaac Sim**
    它支持 ROS2 用于发布和订阅机械臂数据主题以及控制机械臂，还支持 MoveIt2 进行逆运动学计算，以及在 Isaac Sim 中进行仿真。

4. **LeRobot 平台集成支持**
    它专门设计用于与[LeRobot 平台](https://github.com/huggingface/lerobot)集成。该平台为现实世界机器人任务中的模仿学习提供 PyTorch 模型、数据集和工具，包括数据收集、仿真、训练和部署。

5. **开源 SDK**
     支持 Python 和 C++ SDK 开发

6. **按钮悬停**
    模拟重力补偿，允许机械臂通过按钮在任何位置悬停。

7. **模块化末端执行器**
    支持快速 DIY 更换。

8. **丰富的学习资源**
    我们提供全面的开源学习资源，包括环境设置、安装和调试指南，以及自定义抓取任务示例，帮助用户快速入门并开发机器人应用。

9. **Nvidia 平台兼容性**
    支持通过 Nvidia Jetson 平台进行部署。

## 规格参数

| 项目                 | 从动臂 \| Viola                             | 主动臂 \|Violin                                |    从动臂 \|Cello    |
| -------------------- | ------------------------------------------------- | ------------------------------------------------- |-----------------|
| 自由度   | 6+1                                               | 6+1                                               | 6+1             |
| 臂展                | 470mm                                             | 470mm                                             | 670mm |
| 跨度                 | 940mm                                             | 940mm                                             | 1340mm |
| 重复精度        | 2mm                                               | -                                                 | 1mm  |
| 工作载荷      | 300g (70%臂展时)                            | -                                                 |  750g (70%臂展时)   |
| 舵机               | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 |RX18-U100H-M x3<br/> RX8-U50H-M x3<br/> RX8-U51H-M x1|
| 平行夹爪套件  | ✅                                                 | -                                                 | ✅   |
| 腕部旋转         | 是                                               | 是                                               | 是 |
| 任意位置保持 | 是                                               | 是 (带手柄按钮)                          |  是|
| 腕部相机安装   |提供参考 3D 打印文件 | | 提供参考 3D 打印文件
| 兼容 LeRobot   | ✅                                                 | ✅                                                 | ✅|
| 兼容 ROS 2     | ✅                                                 | ✅                                                | ✅|
| 兼容 MoveIt2    | ✅                                                 | ✅                                               |✅ |
| 兼容 Gazebo    | ✅                                                 |✅                                              |✅ |
| 通信集线器    | UC-01                                             | UC-01                                             | UC-01 |
| 电源供应         | 12V10A/120w XT30                                   | 12V10A/120w XT30                                 |12V25A/300w XT60  |

有关舵机的更多信息，请访问以下链接。

[RA8-U25H-M](https://fashionrobo.com/actuator-u25/23396/)

[RX18-U100H-M](https://fashionrobo.com/actuator-u100/22853/)

[RX8-U50H-M](https://fashionrobo.com/actuator-u50/136/)

## 初始环境设置

**对于 Ubuntu x86：**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6  

**对于 Jetson Orin：**

- Jetson JetPack 6.0+  
- Python 3.10  
- Torch 2.6  

## 安装和调试

### 安装 LeRobot

需要根据您的 CUDA 版本安装 pytorch 和 torchvision 等环境。

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
git clone https://github.com/servodevelop/lerobot-starai.git
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

:::

5. 安装带有 feetech 电机依赖项的 LeRobot：

```bash
cd ~/lerobot-starai && pip install -e ".[feetech]"
```

对于 Jetson Jetpack 设备（请确保在执行此步骤之前从第 5 步安装[Pytorch-gpu 和 Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)）：

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

6. 检查 Pytorch 和 Torchvision

由于通过 pip 安装 lerobot 环境会卸载原有的 Pytorch 和 Torchvision 并安装 CPU 版本的 Pytorch 和 Torchvision，您需要在 Python 中进行检查。

```python
import torch
print(torch.cuda.is_available())
```

如果打印结果为 False，您需要根据[官方网站教程](https://pytorch.org/index.html)重新安装 Pytorch 和 Torchvision。

如果您使用的是 Jetson 设备，请根据[此教程](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)安装 Pytorch 和 Torchvision。

### 机械臂开箱

机械臂套件包含

- 主动臂
- 从动臂
- 控制器（手柄）
- 平行夹爪
- 安装工具（螺丝、内六角扳手）
- 电源 ×2
- C 型夹具 ×2
- UC-01 调试板 ×2

UC-01 调试板开关：

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/UC-01 debuging board switch.png" />
</div>

### 配置机械臂端口

在终端中运行以下命令来查找与您的机械臂关联的 USB 端口：

```bash
python lerobot/scripts/find_motors_bus_port.py
```

:::tip
记住要拔掉 usb，否则无法检测到接口。
:::

例如：

1. 识别主动臂端口时的示例输出（例如，Mac 上的`/dev/tty.usbmodem575E0031751`，或 Linux 上可能的`/dev/ttyACM0`）：
2. 识别从动臂端口时的示例输出（例如，Mac 上的`/dev/tty.usbmodem575E0032081`，或 Linux 上可能的`/dev/ttyACM1`）：

您可能需要通过运行以下命令来授予 USB 端口访问权限：

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1```

:::tip

如果无法识别 ttyUSB0 串口，请尝试以下解决方案：

列出所有 USB 端口。

```sh
lsusb
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate1.png" />
</div>

识别后，检查 ttyusb 的信息。

```sh
sudo dmesg | grep ttyUSB
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate2.png" />
</div>

最后一行显示断开连接，因为 brltty 正在占用 USB。移除 brltty 将解决此问题。

```sh
sudo apt remove brltty
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate3.png" />
</div>

最后，使用 chmod 命令。

```sh
sudo chmod 666 /dev/ttyUSB0
```

:::

打开文件 `lerobot-starai\lerobot\common\robot_devices\robots\configs.py`

使用 Ctrl+F 搜索 starai 并定位到以下代码。然后，您需要修改 follower_arms 和 leader_arms 的端口设置以匹配实际的端口设置。

```python
@RobotConfig.register_subclass("starai")
@dataclass
class StaraiRobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/starai"
    max_relative_target: int | None = None

    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": StaraiMotorsBusConfig(
                port="/dev/ttyUSB1",  #<-------- UPDATE HEARE
                interval = 100,        
                motors={
                    # name: (index, model)
                    "joint1": [0, "rx8-u50"],
                    "joint2": [1, "rx8-u50"],
                    "joint3": [2, "rx8-u50"],
                    "joint4": [3, "rx8-u50"],
                    "joint5": [4, "rx8-u50"],
                    "joint6": [5, "rx8-u50"],
                    "gripper": [6, "rx8-u50"],
                },
            ),
        }
    )

    follower_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": StaraiMotorsBusConfig(
                port="/dev/ttyUSB0",  #<-------- UPDATE HEARE
                interval = 100,        
                motors={
                    # name: (index, model)
                    "joint1": [0, "rx8-u50"],
                    "joint2": [1, "rx8-u50"],
                    "joint3": [2, "rx8-u50"],
                    "joint4": [3, "rx8-u50"],
                    "joint5": [4, "rx8-u50"],
                    "joint6": [5, "rx8-u50"],
                    "gripper": [6, "rx8-u50"],
                },
            ),
        }
    )
```

### 设置运行时参数

打开文件 `lerobot-starai\lerobot\common\robot_devices\robots\configs.py`

使用 Ctrl + F 搜索 starai 并定位到以下代码。然后，您需要修改 follower_arms 的 interval 设置。

- 描述：时间间隔越小，跟随器响应越快；时间间隔越大，跟随器运行越稳定。
- 取值范围：整数，大于 50 且小于 2000。

建议在遥操作期间将间隔设置为 100（默认值）以获得更好的响应性，在评估阶段的自主执行期间设置为 1000 以确保更稳定的运动。

```python
@RobotConfig.register_subclass("starai")
@dataclass
class StaraiRobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/starai"
    max_relative_target: int | None = None

    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": StaraiMotorsBusConfig(
                port="/dev/ttyUSB1",
                interval = 100,  #<-------- UPDATE HEARE       
                motors={
                    # name: (index, model)
                    "joint1": [0, "rx8-u50"],
                    "joint2": [1, "rx8-u50"],
                    "joint3": [2, "rx8-u50"],
                    "joint4": [3, "rx8-u50"],
                    "joint5": [4, "rx8-u50"],
                    "joint6": [5, "rx8-u50"],
                    "gripper": [6, "rx8-u50"],
                },
            ),
        }
    )

    follower_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": StaraiMotorsBusConfig(
                port="/dev/ttyUSB0",
                interval = 100,  #<-------- UPDATE HEARE
                motors={
                    # name: (index, model)
                    "joint1": [0, "rx8-u50"],
                    "joint2": [1, "rx8-u50"],
                    "joint3": [2, "rx8-u50"],
                    "joint4": [3, "rx8-u50"],
                    "joint5": [4, "rx8-u50"],
                    "joint6": [5, "rx8-u50"],
                    "gripper": [6, "rx8-u50"],
                },
            ),
        }
    )

```

### 校准

通常，机械臂在出厂时已经预校准，不需要重新校准。如果发现关节电机长时间保持在极限位置，请联系我们获取校准文件并重新执行校准。

## 遥操作

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/Uz-x-2P2xaE?si=HJTjALt5yFntR6-s" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

将机械臂移动到图中所示位置并设置为待机状态。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Specifications.png" />
</div>

**简单遥操作**
然后您就可以遥操作您的机器人了！运行这个简单的脚本（它不会连接和显示摄像头）：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --robot.cameras='{}' \
  --control.type=teleoperate
```

程序启动后，Hold 按钮保持功能正常。

## 添加摄像头

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/-p8K_-XxW8U?si=UmYWvEyKNPpTRxDC" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

插入两个 USB 摄像头后，运行以下脚本检查摄像头的端口号。重要的是要记住，摄像头不能连接到 USB 集线器；相反，它应该直接插入设备。USB 集线器的较慢速度可能导致无法读取图像数据。

```bash
python lerobot/common/robot_devices/cameras/opencv.py \
    --images-dir outputs/images_from_opencv_cameras
```

终端将打印出以下信息。例如，笔记本电脑摄像头是 `index 0`，USB 摄像头是 `index 2`。

```markdown
Mac or X86 Ubuntu detected. Finding available camera indices through scanning all indices from 0 to 60
[...]
Camera found at index 0
Camera found at index 2
[...]
Connecting cameras
OpenCVCamera(0, fps=30.0, width=640, height=480, color_mode=rgb)
OpenCVCamera(2, fps=30.0, width=640, height=480, color_mode=rgb)
Saving images to outputs/images_from_opencv_cameras
Frame: 0000 Latency (ms): 39.52
[...]
Frame: 0046 Latency (ms): 40.07
Images have been saved to outputs/images_from_opencv_cameras
```

您可以在 `outputs/images_from_opencv_cameras` 目录中找到每个摄像头拍摄的图片，并确认不同位置摄像头对应的端口索引信息。然后在 `lerobot-starai/lerobot/common/robot_devices/robots/configs.py` 文件中完成摄像头参数的对齐。

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/camera.png" />
</div>

```python
@RobotConfig.register_subclass("starai")
@dataclass
class StaraiRobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/starai"

    cameras: dict[str, CameraConfig] = field(
        default_factory=*lambda*: {
            "laptop": OpenCVCameraConfig(
                camera_index=2,             #<------ UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
            "phone": OpenCVCameraConfig(
                camera_index=0,             #<------ UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
        }
    )

​    mock: bool = False

```

然后您就能够在遥操作时在计算机上显示摄像头：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=teleoperate \
  --control.display_data=true
```

:::tip
如果您发现这样的错误。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" />
</div>

您可以降级 rerun 版本来解决此问题。

```bash
pip3 install rerun-sdk==0.23
```

:::

## 记录数据集

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/OpaC0CA3-Mc?si=rbNhJJRkG9zngQB-" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

一旦您熟悉了遥操作，就可以记录您的第一个数据集。

如果您想使用 Hugging Face hub 功能上传数据集，并且之前没有这样做过，请确保您已使用写入访问令牌登录，该令牌可以从 [Hugging Face 设置](https://huggingface.co/settings/tokens) 生成：
```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

将您的 Hugging Face 仓库名称存储在变量中以运行这些命令：

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

:::tip
如果您不希望使用 Hugging Face Hub 的数据集上传功能，可以选择 `--control.push_to_hub=false`。此外，将 `--control.repo_id=${HF_USER}/starai` 替换为自定义的本地文件夹名称，例如 `--control.repo_id=starai/starai`。数据将存储在系统主目录下的 `~/.cache/huggingface/lerobot` 目录中。
:::

记录 20 个片段并将您的数据集上传到 hub：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=${HF_USER}/starai \
  --control.tags='["starai","tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=20 \
  --control.display_data=true \
  --control.push_to_hub=ture
```

不上传到 Hub：
**（推荐，以下教程将主要关注本地数据）**

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=starai/starai \#Assign a name to the local storage file yourself
  --control.tags='["starai","tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=20 \
  --control.display_data=true \
  --control.push_to_hub=false #set push_to_hub to false
```

您将看到类似以下的数据：

```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

```markdown
Parameter Explanations
- wormup-time-s: It refers to the initialization time.
- episode-time-s: It represents the time for collecting data each time.
- reset-time-s: It is the preparation time between each data collection.
- num-episodes: It indicates how many groups of data are expected to be collected.
- push-to-hub: It determines whether to upload the data to the HuggingFace Hub. 
```

:::tip

- **再次提醒**："如果您想在本地保存数据（`--control.push_to_hub=false`），请将 `--control.repo_id=${HF_USER}/starai` 替换为自定义的本地文件夹名称，例如 `--control.repo_id=starai/starai`。然后它将存储在系统主目录的 `~/.cache/huggingface/lerobot` 中。"

- 注意：您可以通过添加 `--control.resume=true` 来恢复记录。如果您还没有推送数据集，请添加 `--control.local_files_only=true`。如果您想从头开始记录，需要手动删除数据集目录。

- 如果您使用 `--control.push_to_hub=true` 将数据集上传到 hub，您可以通过复制粘贴您的仓库 ID 来[在线可视化您的数据集](https://huggingface.co/spaces/lerobot/visualize_dataset)：

- 在片段记录期间的任何时候按右箭头 → 可以提前停止并进入重置。在重置期间也是如此，可以提前停止并进入下一个片段记录。

- 在片段记录或重置期间的任何时候按左箭头 ← 可以提前停止，取消当前片段，并重新记录。

- 在片段记录期间的任何时候按 ESC 键可以提前结束会话，直接进入视频编码和数据集上传。

- 一旦您熟悉了数据记录，就可以创建一个更大的数据集用于训练。一个好的起始任务是在不同位置抓取物体并将其放入容器中。我们建议记录至少 50 个片段，每个位置 10 个片段。保持摄像头固定，在整个记录过程中保持一致的抓取行为。还要确保您操作的物体在摄像头中可见。一个好的经验法则是，您应该能够仅通过查看摄像头图像来完成任务。

- 在接下来的章节中，您将训练您的神经网络。在实现可靠的抓取性能后，您可以开始在数据收集期间引入更多变化，例如额外的抓取位置、不同的抓取技术和改变摄像头位置。

- 避免过快添加太多变化，因为这可能会影响您的结果。

- 在 Linux 上，如果左右箭头键和 ESC 键在数据记录期间没有任何效果，请确保您已设置 $DISPLAY 环境变量。请参阅 [pynput 限制](https://pynput.readthedocs.io/en/latest/limitations.html#linux)。

:::

## 可视化数据集

数据集保存在本地。您可以使用以下命令在本地可视化它：

```bash
python lerobot/scripts/visualize_dataset_html.py \
  --repo-id starai/starai \
```

这里，`starai/starai` 是收集数据时定义的自定义 `repo_id` 名称。

## 重放片段

现在尝试在您的机器人上重放第一个片段：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=replay \
  --control.fps=30 \
  --control.repo_id=starai/starai \
  --control.episode=0 \# 0 is the first episode
  --control.local_files_only=true
```

:::tip
参数 `--control.local_files_only=true` 用于指示程序使用本地数据集而不是 Hub 中的数据集。
:::

## 训练策略

要训练控制机器人的策略，请使用 `python lerobot/scripts/train.py` 脚本。需要一些参数。以下是示例命令：

```bash
python lerobot/scripts/train.py \
  --dataset.repo_id=starai/starai \
  --policy.type=act \
  --output_dir=outputs/train/act_starai \
  --job_name=act_starai \
  --policy.device=cuda \
  --wandb.enable=false
```

让我们解释一下：

1. 我们使用本地数据集作为参数 `--dataset.repo_id=starai/starai`。
2. 我们使用 `policy.type=act` 提供策略，这将从 [`lerobot-starai/lerobot/common/policies/act/configuration_act.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/common/policies/act/configuration_act.py) 加载配置。目前，ACT 已经过测试，但您也可以尝试其他策略，如 diffusion、pi0、pi0fast、tdmpc 和 vqbet。
3. 我们提供了 policy.device=cuda，因为我们在 Nvidia GPU 上训练，但您可以使用 policy.device=mps 在 Apple silicon 上训练。
4. 我们提供了 `wandb.enable=true` 来使用 [Weights and Biases](https://docs.wandb.ai/quickstart) 可视化训练图表。这是可选的，但如果您使用它，请确保通过运行 `wandb login` 登录。

如果您想在本地数据集上训练，请确保 `repo_id` 与数据收集期间使用的匹配。训练应该需要几个小时。您将在 `outputs/train/act_starai/checkpoints` 中找到检查点。

要从检查点恢复训练，以下是从 `act_starai` 的最后一个检查点恢复的示例命令：

```bash
python lerobot/scripts/train.py \
  --config_path=outputs/train/act_starai/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

## 评估您的策略

您可以使用 [`lerobot/scripts/control_robot.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/scripts/control_robot.py) 中的 `record` 函数，但以策略检查点作为输入。例如，运行此命令记录 10 个评估片段：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=starai/eval_act_starai \
  --control.tags='["tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=0 \#Set the reset time to 0 to skip the reset phase and ensure continuous operation.
  --control.num_episodes=10 \
  --control.push_to_hub=false \#Choose don't upload to Hub
  --control.policy.path=outputs/train/act_starai/checkpoints/last/pretrained_model
```

如您所见，这与之前用于记录训练数据集的命令几乎相同。只有两个区别：

1. 添加了 `--control.policy.path` 参数来指示策略检查点的路径（例如，`outputs/train/act_starai/checkpoints/last/pretrained_model`）。
2. 评估数据集的名称**必须**以 `eval` 开头，以反映您正在运行推理（例如，`--control.repo_id=starai/eval_act_starai`）。此操作将专门在评估期间记录视频和数据，并将它们保存到 `eval_act_starai`。

:::warning
如果您第二次运行评估命令时出现错误，您需要删除相应的 `eval_act_starai` 文件，以确保在目录 `~/.cache/huggingface/lerobot/starai/` 下没有同名文件。
:::

:::tip
如果您将模型检查点上传到 Hub，您也可以使用模型仓库（例如，`--control.repo_id=${HF_USER}/eval_act_starai`），同时设置 `--control.push_to_hub=true`。
:::

## 常见问题

- 如果您正在遵循此文档/教程，请 git clone 推荐的 GitHub 仓库 `git clone https://github.com/servodevelop/lerobot-starai.git`。

- 如果您遇到以下错误，您需要检查连接到相应端口的机械臂是否已通电，以及总线舵机是否有松动或断开的电缆。

  ```bash
  ConnectionError: Read failed due to comunication eror on port /dev/ttyACM0 for group key Present_Position_Shoulder_pan_Shoulder_lift_elbow_flex_wrist_flex_wrist_roll_griper: [TxRxResult] There is no status packet!
  ```

- 如果您已修复或更换了机械臂的任何部件，请完全删除 `~/lerobot/.cache/huggingface/calibration/so100` 文件夹并重新校准机械臂。
- 如果遥控器功能正常但带摄像头的遥控器无法显示图像界面，您可以在[这里](https://github.com/huggingface/lerobot/pull/757/files)找到解决方案

- 如果在数据集远程操作过程中遇到 libtiff 问题，请更新 libtiff 版本。

  ```bash
  conda install libtiff==4.5.0  #for Ubuntu 22.04 is libtiff==4.5.1
  ```

- 执行[Lerobot 安装](https://wiki.seeedstudio.com/cn/lerobot_so100m/#install-lerobot)后，pytorch 的 GPU 版本可能会被自动卸载，因此您需要手动安装 torch-gpu。

- 对于 Jetson，请在执行`conda install -y -c conda-forge ffmpeg`之前先安装[Pytorch 和 Torchvsion](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)，否则在编译 torchvision 时可能会出现 ffmpeg 版本不匹配的问题。

- 如果出现以下问题，说明您的计算机不支持此视频编解码器格式。您需要修改文件`lerobot-starai/lerobot/common/datasets/video_utils.py`中的第 134 行，将`vcodec: str = "libsvtav1"`的值更改为`libx264`或`libopenh264`。不同的计算机可能需要不同的参数，因此您可以尝试各种选项。[Issues 705](https://github.com/huggingface/lerobot/issues/705)

  ```bash
  [vost#0:0 @ 0x13207240] Unknown encoder 'libsvtav1' [vost#0:0 @ 0x13207240] Error selecting an encoder Error opening output file /home/han/.cache/huggingface/lerobot/lyhhan/so100_test/videos/chunk-000/observation.images.laptop/episode_000000.mp4. Error opening output files: Encoder not found
  ```

- 重要！！！如果在执行过程中舵机的电缆松动，请将舵机恢复到初始位置，然后重新连接舵机电缆。您也可以使用[舵机初始化命令](https://wiki.seeedstudio.com/cn/lerobot_so100m/#configure-the-motors)单独校准舵机，确保在单独校准期间舵机和驱动板之间只连接一根电缆。如果您遇到

  ```bash
  Auto-correct calibration of motor 'wrist roll' by shifting value by 1 full turns, from '-270 < -312.451171875 < 270degrees' to'-270<-312.451171875 < 270 degrees'.
  ```

  或在机械臂校准过程中遇到与角度和超出限制值相关的其他错误，此方法仍然适用。

- 在 8G 3060 笔记本电脑上训练 50 组 ACT 数据大约需要 6 小时，而在 4090 或 A100 计算机上，训练 50 组数据大约需要 2-3 小时。

- 在数据收集过程中，确保摄像头的位置、角度和环境光照保持稳定，并尽量减少捕获过多不稳定的背景和行人；否则，在部署期间显著的环境变化可能会导致机械臂无法正确抓取。

- 确保数据收集命令中的`num-episodes`参数设置为收集足够的数据，并且不要中途手动暂停。这是因为数据的均值和方差只有在数据收集完成后才会计算，这对训练是必需的。

- 如果程序提示无法读取 USB 摄像头图像数据，请确保 USB 摄像头没有连接到集线器。USB 摄像头必须直接连接到设备以确保快速的图像传输速率。

- 如果您发现类似`AttributeError: module 'rerun' has no attribute 'scalar'. Did you mean: 'scalars'?`的错误，您可以降级 rerun 版本来解决此问题。

```bash
pip3 install rerun-sdk==0.23
```

:::tip
如果您遇到无法解决的软件问题或环境依赖问题，除了查看本教程末尾的 FAQ 部分外，请及时向[LeRobot 平台](https://github.com/huggingface/lerobot)或[LeRobot Discord 频道](https://discord.gg/8TnwDdjFGU)报告问题。
:::

## 引用

Seeedstudio 英文 Wiki 文档：[如何在最新版本的 Lerobot 中使用 SO10xArm 机械臂](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/)

lerobot-starai github: [lerobot-starai](https://github.com/Welt-liu/lerobot-starai)

STEP: [STEP](https://github.com/Welt-liu/star-arm-moveit2/tree/main/hardware)

URDF: [URDF](https://github.com/Welt-liu/star-arm-moveit2/tree/main/src/cello_description)

StarAI 机械臂 moveit2: [star-arm-moveit2](https://github.com/Welt-liu/star-arm-moveit2)

Huggingface 项目: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

ACT 或 ALOHA: [Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware](https://tonyzhaozh.github.io/aloha/)

VQ-BeT: [VQ-BeT: Behavior Generation with Latent Actions](https://sjlee.cc/vq-bet/)

Diffusion Policy: [Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

TD-MPC: [TD-MPC](https://www.nicklashansen.com/td-mpc/)

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
