---
description: 本 wiki 提供 MyActuator 系列电机的教程。
title: MyActuator 系列电机
keywords:
- actuator
- motor
- arm
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/all.webp
slug: /cn/myactuator_series
last_update:
  date: 05/29/2025
  author: ZhuYaoHui
---

# MyActuator X 系列电机入门指南

本文将介绍如何开始使用 MyActuator 系列电机，以及如何在 reComputer Mini Jetson Orin 上使用 C++和 Python 进行控制。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/all.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱</font></span></strong>
    </a>
</div>

## 规格参数

以下是所有电机型号的完整参数表：

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>X2-7</th>
      <th>X4-10</th>
      <th>X4-36</th>
      <th>X8-120</th>
      <th>X12-320</th>
      <th>X15-450</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>减速比</td><td>28.17</td><td>12.6</td><td>36</td><td>19.61</td><td>20</td><td>20.25</td></tr>
    <tr><td>输入电压 (V)</td><td>24</td><td>24</td><td>24</td><td>48</td><td>48</td><td>72</td></tr>
    <tr><td>空载转速 (RPM)</td><td>178</td><td>317</td><td>111</td><td>158</td><td>125</td><td>108</td></tr>
    <tr><td>空载输入电流 (A)</td><td>1</td><td>1</td><td>0.9</td><td>1.6</td><td>2.7</td><td>3.5</td></tr>
    <tr><td>额定转速 (RPM)</td><td>142</td><td>238</td><td>83</td><td>127</td><td>100</td><td>98</td></tr>
    <tr><td>额定扭矩 (N.m)</td><td>2.5</td><td>4</td><td>10.5</td><td>43</td><td>85</td><td>145</td></tr>
    <tr><td>额定输出功率 (W)</td><td>37</td><td>100</td><td>100</td><td>574</td><td>900</td><td>1480</td></tr>
    <tr><td>额定相电流 A(rms)</td><td>3</td><td>7.8</td><td>6.1</td><td>17.6</td><td>30</td><td>25</td></tr>
    <tr><td>峰值扭矩 (N.m)</td><td>7</td><td>10</td><td>34</td><td>120</td><td>320</td><td>450</td></tr>
    <tr><td>峰值相电流 A(rms)</td><td>8.1</td><td>19.5</td><td>21.5</td><td>43.8</td><td>100</td><td>69.2</td></tr>
    <tr><td>效率 (%)</td><td>63</td><td>69.5</td><td>63.1</td><td>79</td><td>75</td><td>82.4</td></tr>
    <tr><td>电机反电动势常数 (Vdc/Krpm)</td><td>4.3</td><td>6</td><td>6</td><td>19.2</td><td>17.9</td><td>29.9</td></tr>
    <tr><td>模块扭矩常数 (N.m/A)</td><td>0.8</td><td>0.8</td><td>1.9</td><td>2.4</td><td>3.3</td><td>5.8</td></tr>
    <tr><td>电机相电阻 (Ω)</td><td>0.61</td><td>0.32</td><td>0.35</td><td>0.18</td><td>0.12</td><td>0.08</td></tr>
    <tr><td>电机相电感 (mH)</td><td>0.13</td><td>0.14</td><td>0.17</td><td>0.31</td><td>0.05</td><td>0.14</td></tr>
    <tr><td>极对数</td><td>13</td><td>13</td><td>13</td><td>10</td><td>20</td><td>20</td></tr>
    <tr><td>三相连接</td><td colspan="6">Y</td></tr>
    <tr><td>反驱动扭矩 (N.m)</td><td>0.4</td><td>0.8</td><td>1.14</td><td>3.21</td><td>3.8</td><td>4</td></tr>
    <tr><td>回程间隙 (弧分)</td><td>12</td><td>10</td><td>10</td><td>10</td><td>10</td><td>10</td></tr>
    <tr><td>输出轴承类型</td><td colspan="2">深沟球轴承</td><td colspan="4">交叉滚子轴承</td></tr>
    <tr><td>轴向承受力 (KN)</td><td>0.25</td><td>1.2</td><td>1.3</td><td>4</td><td>4.5</td><td>5.4</td></tr>
    <tr><td>轴向应力 (KN)</td><td>0.25</td><td>1.2</td><td>1.3</td><td>1</td><td>4.5</td><td>5.4</td></tr>
    <tr><td>径向负载 (KN)</td><td>1</td><td>1.2</td><td>1.5</td><td>4.5</td><td>5</td><td>6</td></tr>
    <tr><td>惯量 (Kg.cm²)</td><td>0.17</td><td>0.25</td><td>0.3</td><td>1.5</td><td>12.9</td><td>31.6</td></tr>
    <tr><td>编码器类型和接口</td><td colspan="6">双编码器 ABS-17BIT (输入) / 17-18BIT (输出)</td></tr>
    <tr><td>控制精度 (度)</td><td colspan="6">&lt;0.01</td></tr>
    <tr><td>通信方式</td><td colspan="6">CAN BUS / EtherCAT</td></tr>
    <tr><td>重量 (Kg)</td><td>0.26</td><td>0.33</td><td>0.36</td><td>1.40</td><td>2.37</td><td>3.50</td></tr>
    <tr><td>绝缘等级</td><td colspan="6">F</td></tr>
  </tbody>
</table>

## RMD-X V4 系列命名规则

- **RMD**: 品牌名称 R-减速器 M-电机 D-驱动器
- **X2**: X 代表系列名称：集成行星执行器，2 代表电机型号，如：X2 X4 X6 X8 等
- **P28**: 行星齿轮减速比，如：P12 P28 P32 等
- **7**: 峰值扭矩 7N.m
- **E**: 通信方式 E: CAN BUS & EtherCAT

## 主要特性

1. **CAN BUS & EtherCAT**
2. **交叉滚子轴承**
3. **双编码器**
4. **高扭矩密度**
5. **高精度**
6. **中空设计**

## 入门指南

### 使用前的环境准备

**PC 端 Windows 系统**

- 下载[相应的产品手册](https://www.myactuator.com/_files/archives/cab28a_b3f2a1c77d4645a08052a923690b40fc.zip?dn=MYACTUATOR_Setup%20Software_V4.0_20250206.zip)。
- 下载[MYACTUATOR_Setup Software_V4.0.zip](https://www.myactuator.com/_files/archives/cab28a_b3f2a1c77d4645a08052a923690b40fc.zip?dn=MYACTUATOR_Setup%20Software_V4.0_20250206.zip)

- 解压`MYACTUATOR_Setup Software_V4.0.zip`并安装以下程序：
  - 位于`Required Runtime Environment\ZLGUSBCAN_Driver`目录中的`USBCAN_AllInOne_x86_x64_2.0.0.1.exe`
  - 位于`Required Microsoft Runtime Libraries`目录中的`MSVBCRT.AIO.2019.10.19.X86 X64.exe`

### 连接电路

这里我们选择了 X4-36 电机，其接口图如下所示。

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/X4-36-circuit.png" />
</div>

<table>
  <tr>
    <th>端口定义</th>
    <th>端口描述</th>
  </tr>
  <tr>
    <td>① VCC</td>
    <td>电源正极</td>
  </tr>
  <tr>
    <td>② GND</td>
    <td>电源负极</td>
  </tr>
  <tr>
    <td>③ CAN_H</td>
    <td>CAN_H 网络信号端</td>
  </tr>
  <tr>
    <td>④ CAN_L</td>
    <td>CAN_L 网络信号端</td>
  </tr>
  <tr>
    <td>⑤ EtherCAT_IN</td>
    <td>EtherCAT 输入端</td>
  </tr>
  <tr>
    <td>⑥ EtherCAT_OUT</td>
    <td>EtherCAT 输出端</td>
  </tr>
  <tr>
    <td>⑦ T+</td>
    <td>主机向模块发送控制命令</td>
  </tr>
  <tr>
    <td>⑧ T-</td>
    <td>模块向主机发送状态反馈</td>
  </tr>
  <tr>
    <td>⑨ R+</td>
    <td>主机反映模块状态数据</td>
  </tr>
  <tr>
    <td>⑩ R-</td>
    <td>模块反映主机控制命令</td>
  </tr>
</table>

这里，我们使用 CAN 通信方式，需要额外的 USB-CAN 接口通过 Windows 上位机进行调试。

<div align="center">
    <img width={500}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/6.jpg" />
</div>

这里，您需要为电机提供单独的 24V 电源，并将 USB 连接到您的计算机。

### 使用`MYACTUATOR Setup Software 250206.exe`测试电机

| **设置 ID 和连接** | **读取电机信息** | **校准电机** | **校准电机** |**运行电机旋转测试** |
|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/1.png) | ![fig2](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/2.png) | ![fig3](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/3.png) | ![fig4](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/4.png) |![fig5](https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/5.png) |
| 默认电机 ID 为 1。输入 ID 为 1 并点击"连接"。 | 连接后，点击"读取"获取电机当前信息。|首次使用时，点击"校准电机"进行校准。|校准后，点击"读取"和"保存"。 |现在您可以在电机运行部分测试不同的电机控制模式。 |

更多详细功能，请参考[MYACTUATOR_Setup Software_V4.0.zip](https://www.myactuator.com/_files/archives/cab28a_b3f2a1c77d4645a08052a923690b40fc.zip?dn=MYACTUATOR_Setup%20Software_V4.0_20250206.zip)文件中包含的**Setup Software Instruction Manual - V3.0.pdf**。

## 使用[reComputer Mini Jetson Orin](/cn/recomputer_jetson_mini_getting_started)控制电机

目前，市场上电机最常见的 CAN 通信接口使用**XT30 (2+2)**和**JST 连接器**。我们的**reComputer Mini Jetson Orin**和**reComputer Robotics**设备配备了**双 XT30 (2+2)端口**和**基于 JST 的 CAN 接口**，提供无缝兼容性。

**reComputer Mini:**
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

**reComputer Robotics**
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg"/>  
</div>

有关 CAN 使用的更多详细信息，您可以参考此[wiki](https://wiki.seeedstudio.com/cn/recomputer_jetson_mini_hardware_interfaces_usage/#can)。

### 启用 CAN 接口

**步骤 1：** 在使用 CAN0 和 CAN1 之前，请拆下底盖并将两个 120Ω终端电阻都设置为 ON 位置。

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png" />
</div>

**步骤 2：** 通过 XT30 (2+2)接口将电机直接连接到 reComputer Mini CAN0。

这是 reComputer Mini 的 CAN0 接口

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png"/>
</div>

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/8.jpg" />
</div>

:::danger此电源仅适用于单电机学习和测试。对于多电机，请设计单独的电源板，并将 Jetson 的电源与电机电源隔离，以避免大电流直接通过 Jetson。
:::

#### 启用 Jetson CAN 通信

打开终端并输入以下命令将 GPIO 引脚拉高并激活 CAN0：

```bash
gpioset --mode=wait 0 43=0
```

如果您使用的是 JST 接口的 CAN1，请将引脚 106 拉高。

```bash
gpioset --mode=wait 0 106=0
```

保持此终端打开，启动新终端，并配置 CAN0。

```bash
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### 构建 Python 和 C++ 环境

**步骤 1：** Git 克隆 SDK。

```bash
git clone https://github.com/ZhuYaoHui1998/myactuator_rmd.git
```

**步骤 2：** 此驱动程序 SDK 需要安装以下依赖项。对于 Debian Linux，可以通过 apt 安装如下：

```bash
sudo apt-get install -y build-essential cmake
sudo apt install linux-modules-extra-5.15.0-1025-nvidia-tegra # For Jetson Jetpack 6.0
```

如果您想使用 Python 绑定，还需要额外安装 Python 3、pip 和 pybind11：

```bash
sudo apt-get install -y python3 python3-pip python3-pybind11 python3-setuptools
```

安装依赖项后，您需要将驱动程序 SDK 安装为 C++ 库或 Python 包，如以下步骤所述。两者都将使用 CMake 编译 C++ 代码。

#### 构建 C++ 库

要构建 C++ 驱动程序 SDK，请在此文件夹内打开新终端并执行以下命令。在较旧版本的 Linux 上，构建可能会失败并显示错误消息 error: 'const struct can_frame' has no member named 'len'，您需要应用 [issue 5](https://github.com/2b-t/myactuator_rmd/issues/5) 中讨论的代码修改。

```bash
cd ~/myactuator_rmd
mkdir build
cd build
cmake .. -D PYTHON_BINDINGS=on
make -j $(nproc)
sudo make install
```

标志 PYTHON_BINDINGS（默认为关闭）除了 C++ 库外还构建 Python 绑定。如果您只对使用 C++ 库感兴趣，可以将其保持关闭状态。当像这样构建 Python 绑定时，它们将被编译为共享库但不会被安装。这意味着您要么必须手动安装库，要么只能在构建文件夹内本地导入它们。

要再次卸载包，您可以使用以下命令 `xargs rm < install_manifest.txt`。

#### 构建 Python 库

要为此 SDK 构建和安装 Python 绑定，请在主文件夹内打开新终端并执行以下命令：

```bash
cd ~/myactuator_rmd
pip3 install .
```

这将使用 setup.py 调用 CMake 并将绑定安装为 C++ 库。如果您想再次删除它们，只需调用 `pip3 uninstall myactuator-rmd-py`。

### 使用 C++ 控制

1. 创建项目目录结构  
在代码 src 目录下创建您的项目目录，例如命名为 `myactuator_example`，并在子目录下创建 src 文件夹。

```bash  
cd ~/myactuator_rmd
mkdir -p ~/myactuator_rmd/src/myactuator_example/src  
cd ~/myactuator_rmd/src/myactuator_example  
```  

2. 编写 CMakeLists.txt  
在 `~/myactuator_rmd/src/myactuator_example/CMakeLists.txt` 文件中，编写以下内容：

```bash
touch CMakeLists.txt
```

```cmake  
cmake_minimum_required(VERSION 3.20)  
project(myactuator_example)  

# Find the myactuator_rmd library  
find_package(myactuator_rmd REQUIRED)  

# Create executable  
add_executable(myactuator_node  
src/main.cpp  
)  

# Use C++17 standard  
target_compile_features(myactuator_node PUBLIC  
cxx_std_17  
)  

# Link the myactuator_rmd library  
target_link_libraries(myactuator_node PUBLIC  
myactuator_rmd::myactuator_rmd  
)  
```

3. 编写 main.cpp  
在 `~/myactuator_rmd/src/myactuator_example/src/main.cpp` 文件中，编写以下代码：  

```bash
touch src/main.cpp
```

```cpp
#include <cstdlib>
#include <iostream>
#include <myactuator_rmd/myactuator_rmd.hpp>

int main() {
myactuator_rmd::CanDriver driver {"can0"};
myactuator_rmd::ActuatorInterface actuator {driver, 1};

std::cout << actuator.getVersionDate() << std::endl;
std::cout << actuator.sendPositionAbsoluteSetpoint(180.0, 500.0) << std::endl;
actuator.shutdownMotor();
return EXIT_SUCCESS;
}
```

4. 构建项目  

```bash
cd ~/myactuator_rmd/src/myactuator_example
mkdir build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
make
```

5. 运行程序  

```bash
sudo ./myactuator_node
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/Cresult.png" />
</div>

**前提条件**  

- CAN 接口 `can0` 必须正确配置（确保您的电机和 CAN 总线正确连接）。  
- `myactuator_rmd` 库必须正确安装（如果没有，请先安装）。

有关更多 C++ 实现细节，请参考 `myactuator_rmd.hpp` 中的所有内容。我们将提供 Python 使用方法的详细介绍。

### 使用 Python 控制

在目录 `~/myactuator_rmd/src/myactuator_example` 下创建一个名为 scripts 的文件夹来存储 Python 脚本。

```bash
cd ~/myactuator_rmd/src/myactuator_example
mkdir scripts
```

#### **获取版本号**

在 scripts 目录下创建一个名为 `test.py` 的自定义 Python 脚本，并填入以下代码。

```python
import myactuator_rmd_py as rmd
import time

# Initialize CAN driver and actuator interface
driver = rmd.CanDriver("can0")  # Using can0
actuator = rmd.ActuatorInterface(driver, 1)  # CAN ID set to 1

# Get version number
print("Version number:", actuator.getVersionDate())
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/8.png" />
</div>

加载库并继续为特定网络接口（这里是 can0）和驱动器（这里是 1，对应 CAN 地址 0x140 + 1 = 0x141）创建驱动程序。

#### **获取电机状态**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Motor Status 1
status1 = actuator.getMotorStatus1()
print(f"""
Motor Status 1:
Temperature: {status1.temperature}°C
Brake Status: {'Released' if status1.is_brake_released else 'Locked'}
Voltage: {status1.voltage}V
Error Code: {status1.error_code}
""")

# Motor Status 2
status2 = actuator.getMotorStatus2()
print(f"""
Motor Status 2:
Temperature: {status2.temperature}°C
Current: {status2.current}A
Shaft Speed: {status2.shaft_speed} RPM
Shaft Angle: {status2.shaft_angle}°
""")

# Motor Status 3
status3 = actuator.getMotorStatus3()
print(f"""
Motor Status 3:
Temperature: {status3.temperature}°C
Phase A Current: {status3.current_phase_a}A
Phase B Current: {status3.current_phase_b}A
Phase C Current: {status3.current_phase_c}A
""")

## Torque Calculation

import myactuator_rmd_py as rmd
from myactuator_rmd_py.actuator_constants import X4_24  # Import according to your motor model

def get_normalized_torque(actuator):
    """Calculate normalized torque from current"""
    # Get current value
    status = actuator.getMotorStatus2()
    current = status.current

    # Calculate normalized torque (current/rated)
    torque_ratio = current / X4_24.rated_current
    actual_torque = torque_ratio * X4_24.rated_torque
    return actual_torque

# Usage example
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

try:
    while True:
        torque = get_normalized_torque(actuator)
        print(f"Current Torque: {torque:.3f} Nm (Rated: {X4_24.rated_torque} Nm)", end='\r')
        time.sleep(0.1)
except KeyboardInterrupt:
    actuator.shutdownMotor()
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/9.png" />
</div>

#### **控制模式**

- **获取当前控制模式**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)
mode = actuator.getControlMode()
print(f"Current Control Mode: {mode}")
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/10.png" />
</div>

- **绝对位置控制**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Move to 180 degree position at 100 deg/s
actuator.sendPositionAbsoluteSetpoint(180.0, 300.0)
time.sleep(5)  # Wait for motor to reach target position

# Get current position
angle = actuator.getMultiTurnAngle()
print(f"Current position: {angle}°")

time.sleep(5)
mode = actuator.getControlMode()
print(f"Current control mode: {mode}")
actuator.shutdownMotor()
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/11.png" />
</div>

您将看到您的电机旋转到 180 度位置。

- **相对位置控制**

```python
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Move an additional 90 degrees from current position
current_angle = actuator.getMultiTurnAngle()
target_angle = current_angle + 90.0
actuator.sendPositionAbsoluteSetpoint(target_angle, 50.0)
time.sleep(3)
angle = actuator.getMultiTurnAngle()
print(f"Current position: {angle}°")
mode = actuator.getControlMode()
print(f"Current control mode: {mode}")
actuator.shutdownMotor()
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/12.png" />
</div>

您将观察到电机逆时针旋转 90 度。

- **速度控制**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Continuous rotation at 500 RPM
actuator.sendVelocitySetpoint(500.0)
time.sleep(15)

# Stop motor
actuator.stopMotor()

# Get current position
angle = actuator.getMultiTurnAngle()
print(f"Current position: {angle}°")

mode = actuator.getControlMode()
print(f"Current control mode: {mode}")```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/13.png" />
</div>

- **扭矩控制**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Apply 0.5A current (torque)
actuator.sendCurrentSetpoint(0.5)
time.sleep(2)

# Stop torque output
actuator.stopMotor()

# Get current position
angle = actuator.getMultiTurnAngle()
print(f"Current position: {angle}°")

mode = actuator.getControlMode()
print(f"Current control mode: {mode}")
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/14.png" />
</div>

- **闭环运动控制**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time

# Initialization
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Position control with feedback
feedback = actuator.sendPositionAbsoluteSetpoint(180.0, 100.0)
time.sleep(5)
print(feedback)


# Velocity control with feedback
feedback = actuator.sendVelocitySetpoint(20.0)
time.sleep(5)
print(feedback)

# Torque control with feedback
torque_constant = 0.32  # Set according to motor model
feedback = actuator.sendTorqueSetpoint(1.5, torque_constant)
time.sleep(5)
print(feedback)

actuator.stopMotor()
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/15.png" />
</div>

#### 电机制动控制

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Engage brake
actuator.lockBrake()
print("Brake engaged")

# Release brake
actuator.releaseBrake()
print("Brake released")
```

#### 电机电源控制

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Power off motor
actuator.shutdownMotor()
print("Motor powered off")
```

#### 编码器功能

- **获取多圈编码器位置**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)
encoder_pos = actuator.getMultiTurnEncoderPosition()
print(f"Multi-turn encoder position: {encoder_pos}")
```

- **将当前位置设为零点（需要重启）**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)
actuator.setCurrentPositionAsEncoderZero()
print("Current position set as encoder zero point")
```

- **设置自定义零点（需要重启）**

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time

driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

# Get current position as zero point
current_pos = actuator.getMultiTurnEncoderOriginalPosition()
print(f"Raw encoder position: {current_pos}")

# Set zero offset
actuator.setEncoderZero(current_pos)
print(f"Encoder zero point set to: {current_pos}")

# Reboot to apply settings
actuator.shutdownMotor()
time.sleep(1)  # Wait for shutdown
actuator = rmd.ActuatorInterface(driver, 1)  # Reinitialize

# Verify
new_pos = actuator.getMultiTurnEncoderPosition()
print(f"Post-reboot position (should be near 0): {new_pos}")
```

#### 加速度设置

```python
# -*- coding: gbk -*-
import myactuator_rmd_py as rmd
import time
from myactuator_rmd_py.actuator_state import AccelerationType

# Initialization
driver = rmd.CanDriver("can0")
actuator = rmd.ActuatorInterface(driver, 1)

## Get initial acceleration
print(f"Initial acceleration: {actuator.getAcceleration()}")

actuator.setAcceleration(5000, AccelerationType.POSITION_PLANNING_ACCELERATION)

## Get modified acceleration
print(f"Modified acceleration: {actuator.getAcceleration()}")

# Set different acceleration types
actuator.setAcceleration(1000, AccelerationType.POSITION_PLANNING_ACCELERATION)
actuator.setAcceleration(800, AccelerationType.POSITION_PLANNING_DECELERATION)
actuator.setAcceleration(1200, AccelerationType.VELOCITY_PLANNING_ACCELERATION)
actuator.setAcceleration(1000, AccelerationType.VELOCITY_PLANNING_DECELERATION)
```

<iframe width="960" height="640" src="https://www.youtube.com/embed/0HLx3iQitXg?si=Z39mFeatUdp4j9dh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您对我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
