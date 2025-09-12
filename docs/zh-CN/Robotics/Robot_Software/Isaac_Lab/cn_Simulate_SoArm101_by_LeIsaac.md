---
description: 本教程演示如何使用 LeIsaac 在 Isaac Lab 中遥控和训练 SOArm101 机械臂，包括数据收集、使用 NVIDIA Isaac GR00T 进行模型微调和部署。
title: Lightwheel LeIsaac
keywords:
- NVIDIA
- Isaac Lab
image: https://files.seeedstudio.com/wiki/robotics/isaac_lab/simulate_soarm101_by_leisaac.webp
slug: /cn/simulate_soarm101_by_leisaac
last_update:
  date: 8/1/2025
  author: Youjiang
---

# 开始使用 Lightwheel LeIsaac — 结合 Hugging Face LeRobot x GR00T N1.5 x Isaac Sim 的开源工作流

## 介绍

本 wiki 将遵循 leisaac 的文档，展示如何通过 leisaac 在 IsaacLab 中遥控 SoArm101 机械臂。此外，我们将演示在 Isaac Lab 仿真环境中部署微调后的 Nvidia Isaac GR00T N1.5 模型，使用从 Isaac Lab 收集的数据。本 wiki 中使用的主要项目：

- [LeIsaac](https://github.com/LightwheelAI/leisaac) 使用 SO101Leader (LeRobot) 在 IsaacLab 中提供遥控功能，包括数据收集、数据转换和后续策略训练。
- [NVIDIA Isaac™ Lab](https://developer.nvidia.com/isaac/lab) 是一个开源的统一机器人学习框架，旨在帮助训练机器人策略。
- [SO-ARM101](https://github.com/TheRobotStudio/SO-ARM100) 是一个低成本、开源的 3D 打印机械臂套件。设计为与开源 LeRobot 库无缝协作。
- [NVIDIA Isaac GR00T N1.5](https://github.com/NVIDIA/Isaac-GR00T) 是用于通用人形机器人推理和技能的开放基础模型。

## 要求

- Ubuntu PC
- SoArm101 Leader Arm

:::info
本 wiki 中使用的计算机配备 NVIDIA RTX 3080 GPU，运行 Ubuntu 22.04 LTS。
:::

## 仿真环境设置

在终端中使用以下命令安装 Isaac Lab 运行时环境：

```bash
# Create and activate environment
conda create -n leisaac python=3.10
conda activate leisaac

# Install cuda-toolkit
conda install -c "nvidia/label/cuda-11.8.0" cuda-toolkit

# Install PyTorch
pip install torch==2.5.1 torchvision==0.20.1 --index-url https://download.pytorch.org/whl/cu118

# Install IsaacSim
pip install --upgrade pip
pip install 'isaacsim[all,extscache]==4.5.0' --extra-index-url https://pypi.nvidia.com

# Install IsaacLab
git clone https://github.com/isaac-sim/IsaacLab.git
sudo apt install cmake build-essential

cd IsaacLab
# fix isaaclab version for isaacsim4.5
git checkout v2.1.0
./isaaclab.sh --install
```

:::note
如果您的计算机没有安装 conda，请参考[此指南](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html)进行安装。
:::

:::info
如果您使用的是 50 系列 GPU，我们建议使用 isaacsim5.0 和带有 feature/isaacsim_5_0 分支的 isaaclab。
:::

## 安装 LeIsaac

克隆 LeIsaac 仓库并将其安装为依赖项。

```bash
cd ..
git clone https://github.com/LightwheelAI/leisaac.git
cd leisaac
pip install -e source/leisaac
pip install pynput pyserial deepdiff feetech-servo-sdk
```

:::note
请确保在 `leisaac` conda 虚拟环境中安装。
:::

## 资产准备

LeIsaac 提供了一个示例 USD 资产——厨房场景。我们可以在[这里](https://github.com/LightwheelAI/leisaac/releases/tag/v0.1.0)下载相关场景并将其解压到 assets 目录中。目录结构应如下所示：

```txt
<assets>
├── robots/
│   └── so101_follower.usd
└── scenes/
    └── kitchen_with_orange/
        ├── scene.usd
        ├── assets
        └── objects/
            ├── Orange001
            ├── Orange002
            ├── Orange003
            └── Plate
```

## 收集数据集

通过 USB 线缆将 SO-ARM101 leader 连接到 Ubuntu 计算机，然后使用命令授予串口权限。

```bash
ls /dev/ttyACM*
sudo chmod 666 /dev/ttyACM0
```

如果一切正常工作，您应该看到类似的日志输出。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/connect_arm.png" />
</div>

使用以下脚本运行遥控任务来收集数据集：

```bash
python scripts/environments/teleoperation/teleop_se3_agent.py \
    --task=LeIsaac-SO101-PickOrange-v0 \
    --teleop_device=so101leader \
    --port=/dev/ttyACM0 \
    --num_envs=1 \
    --device=cpu \
    --enable_cameras \
    --record \
    --dataset_file=./datasets/dataset.hdf5
```

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/XY3LEXGP8hI" title="Simulate SoArm101 by LeIsaac (1)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

进入 IsaacLab 窗口后，按键盘上的 `b` 键开始遥控。然后您可以使用指定的 teleop_device 在仿真中控制机器人。如果您需要在完成操作后重置环境，只需按 `r` 或 `n` 键。`r` 表示重置环境并将任务标记为失败，而 `n` 表示重置环境并将任务标记为成功。

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/XkgBY4aa8AE" title="Teleoperate SoArm101 by LeIsaac" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 数据集回放

遥控操作后，您可以使用以下脚本在仿真环境中回放收集的数据集：

```bash
python scripts/environments/teleoperation/replay.py \
    --task=LeIsaac-SO101-PickOrange-v0 \
    --num_envs=1 \
    --device=cpu \
    --enable_cameras \
    --dataset_file=./datasets/dataset.hdf5 \
    --episode_index=0
```

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/C6KHxKRsWx0" title="Simulate SoArm101 by LeIsaac" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 数据转换

收集的遥控数据以 HDF5 格式存储在指定目录中。如果使用此数据训练代理模型，必须使用 LeIsaac 的转换脚本将数据集转换为 LeRobot 兼容格式。

此脚本必须在 LeRobot 虚拟环境中执行。请按照此 [wiki](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#install-lerobot) 中的步骤创建新的 LeRobot 环境。

```bash
cd ..
git clone https://github.com/huggingface/lerobot.git
cd lerobot
conda create -y -n lerobot python=3.10
conda activate lerobot
pip install -e .
```

然后，我们可以修改脚本中的参数并运行以下命令：

```bash
cd ../leisaac
python scripts/convert/isaaclab2lerobot.py
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/data_conversion.png" />
</div>

:::note
如果您在数据收集期间修改了数据集存储路径，必须在执行前更新转换脚本中的相应路径。
:::

程序执行完成后，转换后的数据集可以在以下位置找到：`~/.cache/huggingface/lerobot/`。

我们还可以使用 LeRobot 的内置数据集可视化工具包检查转换后的数据。

```bash
cd ../lerobot
python -m lerobot.scripts.visualize_dataset --repo-id EverNorif/so101_test_orange_pick  --episode-index 0
```

<div class="video-container">
<iframe width="900" height="450" src="https://www.youtube.com/embed/LPSxPMoP-pk" title="Simulate SoArm101 by LeIsaac (2)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 策略训练

在本 wiki 中，我们将微调 NVIDIA Isaac GR00T N1.5。让我们首先设置 Isaac-GR00T 虚拟环境：

```bash
cd ..
git clone https://github.com/NVIDIA/Isaac-GR00T
cd Isaac-GR00T
conda create -n gr00t python=3.10
conda activate gr00t
pip install --upgrade setuptools
pip install -e .[base]
pip install --no-build-isolation flash-attn==2.7.1.post4
```

:::info
flash-attn 的安装涉及包编译，可能会非常缓慢。建议[下载](https://github.com/Dao-AILab/flash-attention/releases/tag/v2.7.1.post4)与您系统环境匹配的预编译包版本，并使用命令本地安装：pip install ./package_name。
:::

在终端中运行以下命令启动训练：

```bash
cd <path-to-Isaac-GR00T>
cp ./getting_started/examples/so100_dualcam__modality.json ~/.cache/huggingface/lerobot/EverNorif/so101_test_orange_pick/meta/modality.json
python scripts/gr00t_finetune.py \
   --dataset-path ~/.cache/huggingface/lerobot/EverNorif/so101_test_orange_pick \
   --num-gpus 1 \
   --output-dir ./so101-checkpoints  \
   --max-steps 10000 \
   --data-config so100_dualcam \
   --video-backend torchvision_av \
   --batch_size 2
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/train.png" />
</div>

## 策略推理

在此阶段，我们可以部署微调后的 NVIDIA Isaac GR00T N1.5 模型来控制 Isaac Lab 中的 SO-ARM101 机械臂。
Isaac-GR00T 的部署架构采用推理端点和控制端点之间的解耦设计：

- 推理端点（服务器）：专门用于执行模型推理任务。
- 控制端点（客户端）：负责获取机械臂状态和协调运动控制。

**服务器**
打开新的终端窗口并运行：

```bash
conda activate gr00t
cd <path-to-Isaac-GR00T>
python scripts/inference_service.py --server --model_path  ./so101-orange-checkpoints/checkpoint-10000 --embodiment_tag new_embodiment --data_config so100_dualcam --port 5555
```

<div align="center">
    <img width={800}    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/leisaac/server.png" />
</div>

**客户端**
打开一个新的终端窗口并运行：

```bash
conda activate leisaac
cd <path-to-leisaac>
python scripts/evaluation/policy_inference.py \
    --task=LeIsaac-SO101-PickOrange-v0 \
    --policy_type=gr00tn1.5 \
    --policy_host=localhost \
    --policy_port=5555 \
    --policy_timeout_ms=5000 \
    --policy_action_horizon=16 \
    --policy_language_instruction="Pick up the orange and place it on the plate" \
    --device=cuda \
    --enable_cameras
```

:::note
如果遇到 ZMQ 相关错误，请运行 `pip install pyzmq` 来解决。
:::

<div class="video-container">
<iframe width="900" height="450" src="https://www.youtube.com/embed/GRzFK7o3lOQ" title="Simulate SoArm101 by LeIsaac (3)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

最终训练的模型未能成功控制 SOArm101 机械臂抓取橙子。这是因为我在实验中只收集了三组数据。如果能收集更多数据，模型的准确性将会显著提高！

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
