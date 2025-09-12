---
description: 本 wiki 提供 HEXFELLOW Y200 IMU 传感器的教程。
title: HEXFELLOW Y200 IMU 传感器
keywords:
- IMU
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig1.webp
slug: /cn/hexfellow_y200
last_update:
  date: 06/18/2025
  author: ZhuYaoHui
---

# HEXFELLOW Y200 IMU 传感器入门指南

Y200 是专为机器人开发的 9 轴陀螺仪。该设备支持最大 60V 电源供应，使用标准 XT30 CAN 接口快速集成到机器人网络中。它具有内部灌封工艺，具有出色的抗冲击性，其外壳采用加强结构设计，安装稳定可靠。

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig1.jpg" />
</div>

## 规格参数

以下是所有电机型号的完整参数表：

### 角度输出参数

| 角度  |   | 数值                     | 备注     |
|----------------|-------|--------------------------|----------|
| **横滚角**            | 精度:  | 0.15°          | 1σ RMS   |
|                     | 范围:  | ±180°             |          |
| **俯仰角**           | 精度:  | 0.15°          | 1σ RMS   |
|                     | 范围:  | ±90°              |          |
| **偏航角（无参考）** | 精度:  | 0.2°        | 1σ RMS   |
|                     | 范围:  | ±180°             |          |
| **分辨率**      |   | 0.001°                   |          |

### 陀螺仪参数

| 参数           | 数值             | 备注                     |
|---------------------|-------------------|--------------------------|
| **量程**           | ±2000°/s         |                          |
| **非线性度**   | ±0.05%FS         |                          |
| **噪声密度**   | 0.015°/s/√Hz     |                          |
| **偏置不稳定性**| 5°/h             | Allan 方差, 1σ       |
| **带宽(-3dB)**| 50Hz             |                          |
| **零偏**     | ±0.5°/s          | 1σ RMS                   |
| **温度漂移**| ±1°/s           | 1σ RMS, -40~85°C         |

### 加速度计参数

| 参数            | 数值           | 备注                      |
|----------------------|-----------------|---------------------------|
| **量程**            | ±12g           |                           |
| **非线性度**    | ±0.5%FS        |                           |
| **噪声密度**    | 190μg/√Hz      |                           |
| **偏置不稳定性** | 0.05mg         | Allan 方差, 1σ        |
| **带宽(-3dB)** | 50Hz           |                           |
| **零偏**      | ±20mg          | 1σ RMS                    |
| **温度漂移**| ±20mg          | 1σ RMS, -40~85°C          |

### 其他参数

| 参数              | 数值             | 备注                                  |
|------------------------|-------------------|---------------------------------------|
| **电压容差**  | 12-60V            | 适用于 XT30 2+2 连接器。非 USB-C，但 USB-C 电源兼容 |
| **通信方式**      | CAN               |                                       |
| **最大输出频率** | 200Hz           |                                       |
| **尺寸**         | 60×60×15 mm       |                                       |
| **工作温度** | -20~85°C       |                                       |

### **支持的平台**

- [x] **reComputer Mini**
- [x] **reComputer Robotics**

### **支持的 ROS 版本**

- [x] **ROS Noetic**
- [x] **ROS Humble**

### 安装尺寸图

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig3.png"/>
</div>

## 在 reComputer Jetson 上开始使用 IMU

我们提供使用 SocketCAN 的 Linux 驱动程序。这是使用 IMU 的推荐方式。
在开始之前，您需要将设备连接到您的 PC！以下是 IMU 的 CAN 总线接线和波特率定义

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg"/>  
</div>

我们的 reComputer Mini 和 reComputer Robotics J40（如上所示）都配备了 XT30 2+2 CAN 通信接口，支持 IMU 的同时供电和通信。

:::tip

我们设备上的 CAN_H 和 CAN_L 引脚分配与大多数市售电机和传感器相反。因此，在接线时，您必须交换 H 和 L 连接以确保正常通信。有关更多设备上 CAN 使用教程，请参考[链接](https://wiki.seeedstudio.com/cn/recomputer_jetson_mini_hardware_interfaces_usage/#can)。

:::

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig4.jpg"/>  
</div>

### 连接 XT30 2+2 电缆

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig2.jpg"/>  
</div>

:::tip

我们设备上的 CAN_H 和 CAN_L 引脚分配与大多数市售电机和传感器相反。因此，在接线时，您必须交换 H 和 L 连接以确保正常通信。有关更多设备上 CAN 使用教程，请参考[链接](https://wiki.seeedstudio.com/cn/recomputer_jetson_mini_hardware_interfaces_usage/#can)。
:::

### 在 Jetson 上安装 ROS

请参考关于在 reComputer Jetson 上[安装 ROS2 Humble](/cn/install_ros2_humble)或[安装 ROS1](/cn/installing_ros1)的教程

### 启用 CAN 功能

**对于 reComputer Robotics J401：**

```bash
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 500000
sudo ip link set can0 up
gpioset --mode=time --sec=60 2 3=0 & # For CAN1: gpioset --mode=time --sec=60 2 4=0 &
```

**对于 reComputer Mini：**

```bash
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 500000
sudo ip link set can0 up
gpioset --mode=time --sec=30 0 43=0 # For CAN1: gpioset --mode=time --sec=30 0 106=0 &
```

### 安装依赖项

克隆仓库：

```bash
cd ~/
pip3 install numpy==1.24
git clone https://github.com/hexfellow/hex_utils.git
```

构建包：

```bash
cd hex_utils
sudo apt-get install python3-venv
python3 -m build
```

安装包：

```bash
pip3 install dist/hex_utils-0.0.1-py3-none-any.whl
```

### 创建工作空间`catkin_ws`并进入`src`目录

```shell
mkdir -p catkin_ws/src
cd catkin_ws/src
```

### 克隆此仓库

```shell
git clone git@github.com:hexfellow/hex_imu.git
```

### 进入`catkin_ws`目录并构建仓库

- **ROS1**

```shell
cd ../
catkin_make
```

- **ROS2**

```shell
cd ../
colcon build
```

### 加载`setup.bash`并运行下面的测试

- **ROS 1**

```shell
source devel/setup.bash --extend
```

- **ROS 2**

```shell
source install/setup.bash --extend
```

### **使用方法**

1. 启动主节点：

- **ROS 1**

```shell
roslaunch hex_imu canopen_imu.launch
```

- **ROS 2**

```shell
ros2 launch hex_imu canopen_imu.launch.py
```

2. 我们还提供了专用的启动文件来可视化 IMU 数据。按照以下步骤开始：

 在开始之前，请确保您已为 RViz 安装了必要的插件：

- **ROS 1**

```
sudo apt install ros-noetic-rviz-imu-plugin
```

- **ROS 2**

```
sudo apt install ros-humble-rviz-imu-plugin
```

	安装插件后，您可以使用以下命令启动可视化工具：

- **ROS 1**

```shell
roslaunch hex_imu canopen_imu_display.launch
```

- **ROS 2**

```shell
ros2 launch hex_imu canopen_imu_display.launch.py
```

3. 如果您想输出方位角，可以运行以下示例代码（仅支持 ROS1）

```shell
roslaunch hex_imu canopen_imu.launch

rosrun hex_imu example.py
```

## **公共 API**

### **发布**

| 话题              | 消息类型                  | 描述                                |
| ------------------ | ------------------------- | ------------------------------------------ |
| `/imu_data`        | `sensor_msgs/Imu`         | IMU 数据，包括方向、角速度和线性加速度 |
| `/magnetic_data`   | `sensor_msgs/MagneticField` | 磁场数据 |

### **订阅**

| 话题    | 消息类型                      | 描述                           |
| -------- | ----------------------------- | ------------------------------------- |
| 无     | 无                          | 无需订阅              |

### **参数**

| 名称                    | 数据类型             | 描述                                                                                |
| ----------------------- | --------------------- | ------------------------------------------------------------------------------------------ |
| `node_id`              | `int`                 | IMU 设备的 CANopen 节点 ID                                                          |
| `channel`              | `string`              | CAN 通道名称（例如，'can0'）                                                            |
| `imu_topic`            | `string`              | 发布 IMU 数据的话题名称                                                         |
| `magnetic_topic`       | `string`              | 发布磁场数据的话题名称                                              |

---

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a><a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
