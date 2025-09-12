---
description: 本 wiki 提供 Starai 机械臂 - ROS2 MoveIt 指南。
title: ROS2 MoveIt 中的 Starai 机械臂
keywords:
- Moveit
- ROS2
- Arm
- Robotics 
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/starai_robotic_arm.webp
slug: /cn/starai_arm_ros_moveit
last_update:
  date: 8/1/2025
  author: LiShanghang
---

# Starai 机械臂操作器 - ROS2 MoveIt 指南

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
    这一系列由[Fashion Star Robotics](https://fashionrobo.com/)提供的舵机，提供了一个开源、易于定制的 6+1 自由度机械臂解决方案。

2. **具有不同载荷的双臂系统**
    Violin 作为主动机械臂。当处于其臂展的 70%时，从动臂 Viola 的工作载荷为 300g，而从动臂 Cello 的工作载荷为 750g。

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
    我们提供全面的开源学习资源，包括环境设置、安装和调试指南，以及自定义抓取任务示例，帮助用户快速入门和开发机器人应用。

9. **Nvidia 平台兼容性**
    支持通过 Nvidia Jetson 平台进行部署。

## 规格参数

| 项目                 | 从动臂 \| Viola                             | 主动臂 \|Violin                                |    从动臂 \|Cello    |
| -------------------- | ------------------------------------------------- | ------------------------------------------------- |-----------------|
| 自由度   | 6+1                                               | 6+1                                               | 6+1             |
| 臂展                | 470mm                                             | 470mm                                             | 670mm |
| 跨度                 | 940mm                                             | 940mm                                             | 1340mm |
| 重复精度        | 2mm                                               | -                                                 | 1mm  |
| 工作载荷      | 300g（70%臂展时）                            | -                                                 |  750g（70%臂展时）   |
| 舵机               | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 |RX18-U100H-M x3<br/> RX8-U50H-M x3<br/> RX8-U51H-M x1|
| 平行夹爪套件  | ✅                                                 | -                                                 | ✅   |
| 腕部旋转         | 是                                               | 是                                               | 是 |
| 任意位置保持 | 是                                               | 是（带手柄按钮）                          |  是|
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

## 依赖环境

No LSB modules are available.

Distributor ID: Ubuntu

Description:    Ubuntu 22.04.5 LTS

Release:        22.04

Codename:       Jammy

ROS2:           Humble

### 安装 ROS2 Humble

[ROS2 Humble 安装](https://wiki.seeedstudio.com/cn/install_ros2_humble/)

### 安装 Moveit2

```bash
sudo apt install ros-humble-moveit*
```

### 安装舵机 SDK

```bash
sudo pip install pyserial
sudo pip install fashionstar-uart-sdk
```

### 创建工作空间并初始化

```bash
mkdir -p ~/starai_ws/src
cd ~/starai_ws
colcon build
```

### 克隆`starai-arm-moveit2` ROS2 包

```
cd ~/starai_ws/src
git clone https://github.com/Welt-liu/starai-arm-moveit2.git
cd ~/starai_ws
colcon build
echo "source ~/starai_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

## Starai 机械臂 MoveIt2 仿真脚本

```bash
ros2 launch viola_configure demo.launch.py 
```

## 使用真实机械臂

### 终端 1：启动机械臂控制节点

机械臂将移动到零位。

```bash
ros2 run robo_driver driver
```

### 启动控制器节点

```bash
ros2 run viola_controller controller
```

### 启动 Moveit2

```bash
ros2 launch viola_configure actual_robot_demo.launch.py
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/L82y7e9uk9Q?si=Fa8YorBPgbRszYGn" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 常见问题

- 如果您在 RViz2 界面中遇到闪烁问题，请尝试以下命令：

    ```bash
    export QT_AUTO_SCREEN_SCALE_FACTOR=0
    ```
