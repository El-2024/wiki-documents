---
description: 本文档将介绍如何快速开始使用 HighTorque 系列电机。
title: HighTorque 系列电机
keywords:
- Joint Module
- Motor
- Robotics
- Robotic Arm
image: https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/damiao.webp
slug: /cn/hightorque_series
last_update:
  date: 06/24/2025
  author: ZhuYaoHui
---

# HighTorque 系列电机用户手册

<div className="quick-nav-container">
  <nav className="quick-nav">
    <a className="nav-item">
      <img width={100}  src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/4438.png" className="nav-icon" alt="4438-32"/>
      <span className="text">4438-32</span>
      <div className="hover-effect"></div>
    </a>
    <a className="nav-item">
      <img width={100} src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/5047-3.png" className="nav-icon" alt="5047-36"/>
      <span className="text">5047-36</span>
      <div className="hover-effect"></div>
    </a>
  </nav>
</div>

# HighTorque 系列电机快速入门指南

本文档将介绍如何快速开始使用 HighTorque 系列电机。

<div align="center">
    <img width={400}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque.png" />
</div>

## 技术规格

### 行星关节模块参数对比表

| **技术规格下载** | **[HTDW-5047-36-NE](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/HTDW-5047-36-NE.pdf)** |  **[HTDW-4438-32-NE](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/HTDW-4438-32-NE.pdf)** |  
|------------------------|------------------|---------------------|
| **减速比**    | 36               | 30                  |
| **峰值扭矩 (Nm)**   | 16               | 6                   |
| **额定扭矩 (Nm)**  | 4                | 1.5                 |
| **堵转扭矩 (Nm)**  | 24               | 10                  |
| **额定转速 (RPM)**  | 40               | 36                  |
| **空载转速 (RPM)**| 60               | 75                  |
| **额定功率 (W)**    | 17               | 13                  |
| **扭矩常数 (Nm/A)** | 0.062        | 0.039               |
| **极对数**         | 14               | -                   |
| **额定电压 (V)**  | 12-48            | 12-48               |
| **额定电流 (A)**  | 2                | 1                   |
| **峰值电流 (A)**   | 10               | 5                   |
| **扭矩控制精度** | ±10%         | ±20%                |
| **速度控制精度** | ±8%           | ±10%                |
| **响应时间 (μs)** | ≤200             | ≤200                |
| **高速编码器分辨率** | 14bit | 14bit               |
| **低速编码器分辨率** | 12bit  | 12bit               |
| **通信波特率 (Mbps)** | 5 | 5                   |
| **控制频率 (Hz)** | 3k      | 3k                  |

### 电机安装尺寸

- **HTDM-4438-32**:

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/4438_install.png" />
</div>

- **HTDM-5047-36**:

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/5047_install.png" />
</div>

**Windows PC 准备**

- 下载 [电机调试助手 v1.2.1](https://www.hightorque.cn/wp-content/uploads/2025/03/%E9%AB%98%E6%93%8E%E7%94%B5%E6%9C%BA%E8%B0%83%E8%AF%95%E5%8A%A9%E6%89%8Bv1.2.1.zip)
- 下载 [PC 调试手册](https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/Hightorque_Motor_Debugging_Manual_EN.pdf)
- 购买 CAN-USB 驱动板

<details>
<summary>协议分析</summary>

# 协议分析

## 1.1 CAN 相关说明

1. CAN 波特率：
   - 仲裁段：1 Mbps
   - 数据段：1 Mbps
2. ID：由 16 位组成，其中 0x7F 为广播地址。
   - 高 8 位：表示源地址：
     - 最高位为 1：需要响应，作为主开关。启用它而不发送查询命令将返回数据段长度为 0 的帧。
     - 最高位为 0：不需要响应。
     - 其余 7 位：信号源地址。
   - 低 8 位：表示目标地址：
     - 最高位为 0。
     - 其余 7 位表示目标地址。

例如：

1. ID：0x8001
   - 信号源地址为 0。
   - 目标地址为 1。
   - 最高位为 1，表示需要响应，即响应主开关打开。
2. ID：0x100
   - 信号源地址为 1。
   - 目标地址为 0。
   - 最高位为 0，表示不需要响应，即响应主开关关闭。

## 1.2 模式说明

### 1.2.1 普通模式（位置和速度不能同时控制）

```bash
uint8_t cmd[] = {0x07, 0x07, pos1, pos2, val1, val2, tqe1, tqe2};
```

普通协议由：命令位（2 字节）+ 位置（2 字节）+ 速度（2 字节）+ 扭矩（2 字节）组成，共 8 字节。

0x07 0x07：普通模式，可以控制速度和扭矩，或位置和扭矩（参见 [[#2.1-普通模式]]）。

协议中的位置、速度和扭矩数据采用小端模式，即先发送低字节，再发送高字节。例如，如果 pos = 0x1234，则 pos1 = 0x34，pos2 = 0x12。

此模式可分为两种控制方法：

- 位置和扭矩控制（此时，val = 0x8000，表示无限制）。
- 速度和扭矩控制（此时，pos = 0x8000，表示无限制）。

### 1.2.2 扭矩模式

```bash
uint8_t cmd[] = {0x05, 0x13, tqe1, tqe2};
```

扭矩模式协议由：命令位（2 字节）+ 扭矩（2 字节）组成。

0x05 0x13：纯扭矩模式，后跟两字节扭矩数据（参见 [[#2.3-扭矩模式]]）。

协议中的扭矩数据采用小端模式，即先发送低字节，再发送高字节。例如，如果 tqe = 0x1234，则 tqe1 = 0x34，tqe2 = 0x12。

### 1.2.3 协作控制模式（位置、速度和扭矩可同时控制）

```bash
uint8_t cmd[] = {0x07, 0x35, val1, val2, tqe1, teq2, pos1, pos2};
```

协作控制模式协议：命令位（2 字节）+ 速度（2 字节）+ 扭矩（2 字节）+ 位置（2 字节），共 8 字节。

0x07 0x35：协作控制模式，指定以指定速度旋转到指定位置并限制最大扭矩。

在此模式下，使用参数 0x8000 表示无限制（速度和扭矩无限制意味着最大值）。例如，val = 5000，tqe = 1000，pos = 0x8000：表示电机以每秒 0.5 转的速度旋转，最大扭矩为 0.1 NM。

协议中的位置、速度和扭矩数据均采用小端模式，即先发送低字节，再发送高字节。例如，如果 pos = 0x1234，则 pos1 = 0x34，pos2 = 0x12。

## 1.3 电机状态数据读取

1. 读取电机状态部分的协议与 CAN-FD 中的协议相同，唯一区别是 CAN 受 8 字节数据段限制。
2. 有关寄存器地址和功能说明，请参考"寄存器功能、电机运行模式、错误代码说明.xlsx"文件。
3. 由于 CAN 的 8 字节数据段限制，单个 CAN 帧可返回的电机信息有限：
   - 寄存器中的一个 float 类型或 int32_t 类型电机信息。
   - 三个连续的 int16_t 类型电机信息。
   - 六个连续的 int8_t 类型电机信息。
4. 示例程序提供了查询 int16_t 类型电机位置、速度和扭矩信息以及电机信息解析的示例函数（示例程序使用 C 语言中的联合体直接复制 CAN 中第 3 到第 8 字节的数据）。

### 1.3.1 发送协议说明

```bash
uint8_t tdata[] = {cmd, addr, cmd1, addr1, cmd2, add2};
```

一般含义是：从 addr 读取 cmd[0, 1] 个 cmd[3, 2] 类型的数据。

cmd：

- 高四位 [7, 4]：0001 表示读取。
- 第 2-3 位 [3, 2]：表示类型。
  - 00：int8_t 类型。
  - 01：int16_t 类型。
  - 10：int32_t 类型。
  - 11：float 类型。
- 低 2 位 [1, 0]：表示数量。
  - 01：一个数据。
  - 10：两个数据。
  - 11：三个数据。

addr：要获取的起始地址。

可以连接多个 cmd 和 addr 来一次性读取地址不连续且类型不同的数据。

### 1.3.2 接收协议说明

假设获取的数据是 uint16_t。

```bash
uint8_t rdata[] = {cmd, addr, a1, a2, b1, b2, ..., cmd1, addr1, c1, c2, c3, c4}
```

cmd：

- 高四位 [7, 4]：0010 表示响应。
- 第 2-3 位 [3, 2]：表示类型。
  - 00：int8_t 类型。
  - 01：int16_t 类型。
  - 10：int32_t 类型。
  - 11：float 类型。
- 低 2 位 [1, 0]：表示数量。
  - 01：一个数据。
  - 10：两个数据。
  - 11：三个数据。

addr：要获取的起始地址。

a1, a2：数据 1，小端模式。

b1, b2：数据 2，小端模式。

### 1.3.3 示例

1. 我们需要读取位置、速度和扭矩数据。
2. 从寄存器 excel 表中，我们知道位置、速度和扭矩的数据地址为：01、02、03。
3. 由此可以看出，我们可以从地址 01 开始读取 3 个连续数据。考虑到 CAN 一次最多可传输 8 字节数据，而 cmd + addr 占用两字节，数据类型最多只能是 int16_t 类型。
4. 由上可知，cmd 的二进制为：0001 0111，十六进制为：0x17。
5. 需要从地址 01 开始读取，所以 addr 为 0x01。
6. 要发送的总数据为 uint8_t tdata[] = {0x17, 0x01}。

示例代码如下：

```c
/**
* @brief Read the motor
* @param id
*/
void motor_read(uint8_t id)
{
static uint8_t tdata[8] = {0x17, 0x01};
CAN_Send_Msg(0x8000 | id, tdata, sizeof(tdata));
}

uint8_t cmd[] = {0x17, 0x01};
```
整体含义是：从地址 0x01 开始读取 3 个 int16_t 寄存器（根据表格，地址 0x01 到 0x03 的寄存器分别代表位置、速度和扭矩）。因此，此命令是查询电机的位置、速度和扭矩信息。

0x17：0x17[7:4]的二进制是 0001：表示读取。0x17[3:2]的二进制是 01：表示数据类型是 int16_t。0x17[1:0]的二进制是 11：表示数据数量是 3。0x01：从地址 0x01 开始。

对应接收数据示例：

```bash
uint8_t rdata[] = {0x27, 0x01, 0x38, 0xf6, 0x09, 0x00, 0x00, 0x00};
```

0x27：对应发送的 0x17。0x01：从地址 0x01 开始。0x38 0xf6：位置数据：0xf638，即-2505。0x09 0x00：速度数据：0x0009，即 9。0x00 0x00：扭矩数据：0x0000，即 0。

## 1.4 电机停止

说明：

1. 停止电机。
2. 对应上位机指令 d stop。

```c
/**
* @brief Stop the motor
*/
void motor_stop(uint8_t id)
{
uint8_t tdata[] = {0x01, 0x00, 0x00};
CAN_Send_Msg(0x8000 | id, tdata, sizeof(tdata));
}
```

## 1.5 重置电机零位

说明：

1. 将当前位置设置为电机的零位。
2. 此指令仅在 RAM 中修改，需要配合 conf write 指令保存到 flash。
3. 建议在使用此指令约 1 秒后发送 conf write 指令。

```c
void rezero_pos(uint8_t id)
{
uint8_t tdata[] = {0x40, 0x01, 0x04, 0x64, 0x20, 0x63, 0x0a};
CAN_Send_Msg(0x8000 | id, tdata, sizeof(tdata));
HAL_Delay(1000); // It is recommended to delay for 1s
conf_write(id); // Save the settings
}
```

## 1.6 保存电机设置（conf write）

说明：

1. 将 RAM 中的电机设置保存到 flash。
2. 建议在使用此指令后重新给电机上电。

```c
void conf_write(uint8_t id)
{
uint8_t tdata[] = {0x05, 0xb3, 0x02, 0x00, 0x00};
CAN_Send_Msg(0x8000 | id, tdata, sizeof(tdata));
}
```

## 1.7 读取电机状态

说明：

1. 读取一次电机位置、速度和扭矩数据。
2. 电机反馈状态信息数据的解析，请参考示例中中断函数 HAL_FDCAN_RxFifo0Callback 中的代码。

```c
* @brief Instruction to read motor position, speed, and torque
* @param id Motor ID
*/
void motor_read(CAN_HandleTypeDef *hcan, uint8_t id)
{
static uint8_t tdata[8] = {0x17, 0x01};
can_send(hcan, 0x8000 | id, tdata, sizeof(tdata));
}
```

## 1.8 周期性返回电机状态数据

说明：

1. 周期性返回电机位置、速度和扭矩数据。
2. 返回的数据格式与使用 0x17, 0x01 指令获得的数据格式相同（即 1.7 读取位置状态）。
3. 周期单位为 ms。
4. 最小周期为 1ms。
5. 要停止周期性返回数据，请将周期设置为 0 或关闭电机电源。
6. 电机反馈状态信息数据的解析，请参考示例中中断函数 HAL_FDCAN_RxFifo0Callback 中的代码。

```c
void timed_return_motor_status(uint8_t id, int16_t t_ms)
{
uint8_t tdata[] = {0x05, 0xb4, 0x02, 0x00, 0x00};
*(int16_t *)&tdata[3] = t_ms;
CAN_Send_Msg(0x8000 | id, tdata, sizeof(tdata));
}
```

## 2. 示例函数

### 2.1 普通模式

#### 2.1.1 位置控制

```c
/**
* @brief Position control
* @param id Motor ID
* @param pos Position: Unit 0.0001 circle, e.g., pos = 5000 means rotating to the position of 0.5 circle.
* @param torque
*/
void motor_control_Pos(uint8_t id,int32_t pos,int16_t tqe)
{
uint8_t tdata[8] = {0x07, 0x07, 0x0A, 0x05, 0x00, 0x00, 0x80, 0x00};
*(int16_t *)&tdata[2] = pos;
*(int16_t *)&tdata[6] = tqe;
uint32_t ext_id = (0x8000 | id);
CAN_Send_Msg(ext_id, tdata, 8);
}
```

#### 2.1.2 速度控制

```c
/**
* @brief Speed control
* @param id Motor ID
* @param vel Speed: Unit 0.00025 rotations/second, e.g., val = 1000 means 0.25 rotations/second
* @param tqe Torque
*/
uint8_t tdata[8] = {0x07, 0x07, 0x00, 0x80, 0x20, 0x00, 0x80, 0x00};
*(int16_t *)&tdata[4] = vel;
*(int16_t *)&tdata[6] = tqe;
uint32_t ext_id = (0x8000 | id);
CAN_Send_Msg(ext_id, tdata, 8);
}
```

### 2.3 扭矩模式

```c
/**
* @brief Torque mode
* @param id Motor ID
* @param tqe Torque
*/
void motor_control_tqe(uint8_t id,int32_t tqe)
{
uint8_t tdata[8] = {0x05, 0x13, 0x00, 0x80, 0x20, 0x00, 0x80, 0x00};
*(int16_t *)&tdata[2] = tqe;
CAN_Send_Msg(0x8000 | id, tdata, 4);
}
```

### 2.4 协作控制模式

```c
/**
* @brief Motor position-speed-feedforward torque (maximum torque) control, int16 type
* @param id Motor ID
* @param pos Position: Unit 0.0001 circle, e.g., pos = 5000 means rotating to the position of 0.5 circle.
* @param val Speed: Unit 0.00025 rotations/second, e.g., val = 1000 means 0.25 rotations/second
* @param tqe Maximum torque
*/
void motor_control_pos_val_tqe(uint8_t id, int16_t pos, int16_t val, int16_t tqe)
{
static uint8_t tdata[8] = {0x07, 0x35, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
*(int16_t *)&tdata[2] = val;
*(int16_t *)&tdata[4] = tqe;
*(int16_t *)&tdata[6] = pos;
CAN_Send_Msg(0x8000 | id, tdata, 8);
}
```

### 2.5 DQ 电压模式

说明：

1. 可以控制 Q 相电压，单位：0.1v，例如 vol = 10 表示 Q 相电压为 1V。

```c
void motor_control_volt(FDCAN_HandleTypeDef *hfdcanx, uint8_t id, int16_t vol)
static uint8_t tdata[7] = {0x01, 0x00, 0x08, 0x05, 0x1b, 0x00, 0x00};
*(int16_t *)&tdata[5] = vol;
can_send(hfdcanx, 0x8000 | id, tdata, sizeof(tdata));
}
```

### 2.6 DQ 电流模式

说明：

1. 可以控制 Q 相电流，单位：0.1A，例如 cur = 10 表示 Q 相电压为 1A。

```c
void motor_control_cur(FDCAN_HandleTypeDef *hfdcanx, uint8_t id, int16_t cur)
{
static uint8_t tdata[7] = {0x01, 0x00, 0x09, 0x05, 0x1c, 0x00, 0x00};
*(int16_t *)&tdata[5] = cur;
can_send(hfdcanx, 0x8000 | id, tdata, sizeof(tdata));
}
```

### 2.7 制动

说明：

1. 电机制动，转动电机会有阻尼。

```c
/**
* @brief Motor brake
* @param fdcanHandle &hfdcanx
* @param motor id Motor ID
*/
void set_motor_brake(FDCAN_HandleTypeDef *fdcanHandle, uint8_t id)
static uint8_t cmd[] = {0x01, 0x00, 0x0f};
can_send(fdcanHandle, 0x8000 | id, cmd, sizeof(cmd));
}
```

### 2.8 停止

说明：

1. 电机停止并失去保持位置的力。

```c
/**
* @brief Stop the motor. Note: The motor must be stopped before resetting the zero position, otherwise it will be invalid.
* @param fdcanHandle &hfdcanx
* @param motor id Motor ID
*/
void set_motor_stop(FDCAN_HandleTypeDef *fdcanHandle, uint8_t id)
{
static uint8_t cmd[] = {0x01, 0x00, 0x00};
can_send(fdcanHandle, 0x8000 | id, cmd, sizeof(cmd));
}
```

## 3. 常用类型说明（单位）

### 3.1 电流（A）

| 数据类型 | LSB | 实际值（A） |
| --- | --- | --- |
| int8 | 1 | 1 |
| int16 | 1 | 0.1 |
| int32 | 1 | 0.001 |
| float | 1 | 1 |

### 3.2 电压（V）

| 数据类型 | LSB | 实际值（V） |
| --- | --- | --- |
| int8 | 1 | 0.5 |
| int16 | 1 | 0.1 |
| int32 | 1 | 0.001 |
| float | 1 | 1 |

### 3.3 扭矩（Nm）

真实扭矩 = k * tqe + d

#### 3.3.1 5046 扭矩（Nm）

| 数据类型 | 斜率（k） | 偏移量（d） |
| --- | --- | --- |
| int16 | 0.005397 | -0.455107 |
| int32 | 0.000528 | -0.414526 |
| float | 0.533654 | -0.519366 |

#### 3.3.2 4538 扭矩（Nm）

| 数据类型 | 斜率（k） | 偏移量（d） |
| --- | --- | --- |
| int16 | 0.004587 | -0.290788 |
| int32 | 0.000445 | -0.234668 |
| float | 0.493835 | -0.473398 |

#### 3.3.2 5047/6056（双极，36 齿轮比）扭矩（Nm）

| 数据类型 | 斜率（k） | 偏移量（d） |
| --- | --- | --- |
| int16 | 0.004563 | -0.493257 |
| int32 | 0.000462 | -0.512253 |
| float | 0.465293 | -0.554848 |

#### 3.3.3 5047（单极，9 齿轮比）扭矩（Nm）

| 数据类型 | 斜率（k） | 偏移量（d） |
| --- | --- | --- |
| int16 | 0.005332 | -0.072956 |
| int32 | 0.000533 | -0.034809 |
| float | 0.547474 | -0.150232 |

### 3.4 温度（℃）

| 数据类型 | LSB | 实际值（℃） |
| --- | --- | --- |
| int8 | 1 | 1 |
| int16 | 1 | 0.1 |
| int32 | 1 | 0.001 |
| float | 1 | 1 |

### 3.5 时间（s）

| 数据类型 | LSB | 实际值（s） |
| --- | --- | --- |
| int8 | 1 | 0.01 |
| int16 | 1 | 0.001 |
| int32 | 1 | 0.000001 |
| float | 1 | 1 |

### 3.6 位置（转数）

| 数据类型 | LSB | 实际值（转数） | 实际值（°） |
| --- | --- | --- | --- |
| int8 | 1 | 0.01 | 3.6 |
| int16 | 1 | 0.0001 | 0.036 |
| int32 | 1 | 0.00001 | 0.0036 |
| float | 1 | 1 | 360 |

### 3.7 速度（转数/秒）

| 数据类型 | LSB | 实际值（转数/秒） |
| --- | --- | --- |
| int8 | 1 | 0.01 |
| int16 | 1 | 0.00025 |
| int32 | 1 | 0.00001 |
| float | 1 | 1 |

### 3.8 加速度（转数/秒²）

| 数据类型 | LSB | 实际值（转数/秒²） |
| --- | --- | --- |
| int8 | 1 | 0.05 |
| int16 | 1 | 0.001 |
| int32 | 1 | 0.00001 |
| float | 1 | 1 |

### 3.9 PWM 比例（无单位）

| 数据类型 | LSB | 实际值 |
| --- | --- | --- |
| int8 | 1 | 1/127 - 0.007874 |
| int16 | 1 | 1/32767 - 0.000030519 |
| int32 | 1 | (1/2147483647) - 4.657^10 |
| float | 1 | 1 |

### 3.10 Kp、Kd 比例（无单位）

| 数据类型 | LSB | 实际值 |
| --- | --- | --- |
| int8 | 1 | 1/127 - 0.007874 |
| int16 | 1 | 1/32767 - 0.000030519 |
| int32 | 1 | (1/2147483647) - 4.657^10 |
| float | 1 | 1 |

</details>

## C++示例

C++控制需要额外的 CAN-USB 驱动板。请参考[livelybot_hardware_sdk](https://github.com/HighTorque-Robotics/livelybot_hardware_sdk)

<div align="center">
    <img width={400}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/USB-CAN.png" />
</div>

## 使用[reComputer Mini Jetson Orin](/cn/recomputer_jetson_mini_getting_started)控制电机

目前，市场上电机最常用的 CAN 通信接口是 XT30(2+2)和 JST 连接器。我们的**reComputer Mini Jetson Orin**和**reComputer Robotics**设备配备了双 XT30(2+2)端口和基于 JST 的 CAN 接口，提供无缝兼容性。

**reComputer Mini：**
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>
**reComputer 机器人**
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg"/>  
</div>

有关 CAN 使用的更多详细信息，请参考此 [wiki](https://wiki.seeedstudio.com/cn/recomputer_jetson_mini_hardware_interfaces_usage/#can)。

### 启用 CAN 接口

**步骤 1：** 在使用 CAN0 和 CAN1 之前，拆下底盖并将两个 120Ω 终端电阻设置为 ON 位置。

<div align="center">
    <img width={300}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png" />
</div>

**步骤 2：** 通过 XT30(2+2) 接口将电机直接连接到 reComputer Mini 的 CAN0。

:::tip
reComputer Mini 的 CAN 接口的 H/L 引脚与电机的相反，因此 XT30 2+2 线束中的 H/L 连接需要反接。
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png"/>
</div>

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/reComputer_mini_control.png" />
</div>

:::danger
此电源解决方案仅适用于单电机学习和测试。对于多电机应用，请设计独立的电源板以将 Jetson 电源与电机电源隔离，避免大电流直接通过 Jetson。
:::

#### 启用 Jetson CAN 通信

打开终端并输入以下命令将 GPIO 引脚拉高以激活 CAN0：

```bash
gpioset --mode=wait 0 43=0
```

如果使用 JST 接口的 CAN1，将引脚 106 拉高：

```bash
gpioset --mode=wait 0 106=0
```

保持此终端打开并创建新终端来配置 CAN0：

```bash
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### Python 控制

- **安装 Python 环境**  

```bash
pip install python-can numpy
```

- **创建脚本目录**  

```bash
mkdir -p ~/hightorque/scripts
```

- **创建 hightorque_motor.py 文件**

```bash
cd ~/hightorque/scripts
touch hightorque_motor.py
```

将以下代码复制到 hightorque_motor.py 中。

<details>
<summary>hightorque_motor.py</summary>

```python
import can
import numpy as np
from time import sleep
from enum import IntEnum

class MotorType(IntEnum):
    """Motor Type Enum"""
    HT5046 = 0  # 5046 Motor
    HT4538 = 1  # 4538 Motor
    HT5047_36 = 2  # 5047/6056 Dual-pole 36 Reduction Ratio
    HT5047_9 = 3  # 5047 Single-pole 9 Reduction Ratio

class ControlMode(IntEnum):
    """Control Mode Enum"""
    NORMAL = 0  # Normal Mode
    TORQUE = 1  # Torque Mode
    COOPERATIVE = 2  # Cooperative Control Mode

class Motor:
    def __init__(self, motor_type: MotorType, slave_id: int, master_id: int):
        """
        Initialize Motor Object
        :param motor_type: Motor Type
        :param slave_id: Slave ID
        :param master_id: Master ID
        """
        self.motor_type = motor_type
        self.slave_id = slave_id
        self.master_id = master_id
        self.position = 0
        self.velocity = 0
        self.torque = 0
        self.temperature = 0

        # Set Torque Conversion Parameters Based on Motor Type
        if motor_type == MotorType.HT5046:
            self.torque_k = 0.005397
            self.torque_d = -0.455107
        elif motor_type == MotorType.HT4538:
            self.torque_k = 0.004587
            self.torque_d = -0.290788
        elif motor_type == MotorType.HT5047_36:
            self.torque_k = 0.004563
            self.torque_d = -0.493257
        elif motor_type == MotorType.HT5047_9:
            self.torque_k = 0.005332
            self.torque_d = -0.072956

    def update_status(self, position: float, velocity: float, torque: float, temperature: float):
        """Update Motor Status"""
        self.position = position
        self.velocity = velocity
        self.torque = torque
        self.temperature = temperature

class MotorControl:
    def __init__(self, channel: str, bitrate: int = 1000000):
        """
        Initialize Motor Controller
        :param channel: CAN Channel
        :param bitrate: CAN Baud Rate
        """
        self.bus = can.interface.Bus(channel=channel, bustype='socketcan', bitrate=bitrate)
        self.motors = {}

    def add_motor(self, motor: Motor):
        """Add Motor to Controller"""
        self.motors[motor.slave_id] = motor

    def __send_data(self, motor_id: int, data: bytes):
        """
        Send CAN Data
        :param motor_id: Motor ID
        :param data: Data to Send
        """
        msg = can.Message(
            arbitration_id=0x8000 | motor_id,
            data=data,
            is_extended_id=True
        )
        self.bus.send(msg)

    def enable(self, motor: Motor):
        """Enable Motor"""
        data = bytes([0x01, 0x00, 0x01])
        self.__send_data(motor.slave_id, data)
        sleep(0.1)

    def disable(self, motor: Motor):
        """Disable Motor"""
        data = bytes([0x01, 0x00, 0x00])
        self.__send_data(motor.slave_id, data)
        sleep(0.1)

    def set_zero_position(self, motor: Motor):
        """Set Motor Zero Position"""
        data = bytes([0x40, 0x01, 0x04, 0x64, 0x20, 0x63, 0x0a])
        self.__send_data(motor.slave_id, data)
        sleep(1.0)  # Wait 1 second
        self.save_settings(motor)

    def save_settings(self, motor: Motor):
        """Save Motor Settings to Flash"""
        data = bytes([0x05, 0xb3, 0x02, 0x00, 0x00])
        self.__send_data(motor.slave_id, data)

    def control_position(self, motor: Motor, position: float, torque: float):
        """
        Position Control
        :param motor: Motor Object
        :param position: Target Position (Unit: 0.0001 turns)
        :param torque: Torque Limit
        """
        pos_bytes = int(position).to_bytes(2, 'little')
        tqe_bytes = int(torque).to_bytes(2, 'little')
        data = bytes([0x07, 0x07]) + pos_bytes + bytes([0x80, 0x00]) + tqe_bytes
        self.__send_data(motor.slave_id, data)

    def control_velocity(self, motor: Motor, velocity: float, torque: float):
        """
        Velocity Control
        :param motor: Motor Object
        :param velocity: Target Velocity (Unit: 0.00025 turns/second)
        :param torque: Torque Limit
        """
        vel_bytes = int(velocity).to_bytes(2, 'little')
        tqe_bytes = int(torque).to_bytes(2, 'little')
        data = bytes([0x07, 0x07, 0x00, 0x80]) + vel_bytes + tqe_bytes
        self.__send_data(motor.slave_id, data)

    def control_torque(self, motor: Motor, torque: float):
        """
        Torque Control
        :param motor: Motor Object
        :param torque: Target Torque
        """
        tqe_bytes = int(torque).to_bytes(2, 'little')
        data = bytes([0x05, 0x13]) + tqe_bytes
        self.__send_data(motor.slave_id, data)

    def control_cooperative(self, motor: Motor, position: float, velocity: float, torque: float):
        """
        Cooperative Control (Position, Velocity, Torque Simultaneous Control)
        :param motor: Motor Object
        :param position: Target Position (Unit: 0.0001 turns)
        :param velocity: Target Velocity (Unit: 0.00025 turns/second)
        :param torque: Torque Limit
        """
        vel_bytes = int(velocity).to_bytes(2, 'little')
        tqe_bytes = int(torque).to_bytes(2, 'little')
        pos_bytes = int(position).to_bytes(2, 'little')
        data = bytes([0x07, 0x35]) + vel_bytes + tqe_bytes + pos_bytes
        self.__send_data(motor.slave_id, data)

    def read_motor_status(self, motor: Motor):
        """Read Motor Status"""
        data = bytes([0x17, 0x01])
        self.__send_data(motor.slave_id, data)
        sleep(0.01)  # Wait for Data Reception

        # Receive and Parse Data
        msg = self.bus.recv(timeout=0.1)
        if msg and msg.arbitration_id == (0x8000 | motor.slave_id):
            data = msg.data
            if len(data) >= 8 and data[0] == 0x27:
                position = int.from_bytes(data[2:4], 'little')
                velocity = int.from_bytes(data[4:6], 'little')
                torque = int.from_bytes(data[6:8], 'little')
                motor.update_status(position, velocity, torque, 0)

    def periodic_read_status(self, motor: Motor, period_ms: int):
        """
        Set Periodic Motor Status Reading
        :param motor: Motor Object
        :param period_ms: Period (milliseconds)
        """
        period_bytes = int(period_ms).to_bytes(2, 'little')
        data = bytes([0x05, 0xb4, 0x02, 0x00]) + period_bytes
        self.__send_data(motor.slave_id, data)

    def close(self):
        """Close CAN Bus"""
        self.bus.shutdown() 
```

</details>

- **创建 hightorque_test.py 文件**

将以下代码复制到 hightorque_test.py 中。

<details>
<summary>hightorque_test.py</summary>

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import time
import math
import numpy as np
from hightorque_motor import Motor, MotorControl, MotorType

# Configuration Parameters
NUM_MOTORS = 2  # Number of Motors to Control
CAN_INTERFACE = "can0"  # CAN Interface Name
CAN_BITRATE = 1000000  # CAN Baud Rate
MOTOR_TYPE = MotorType.HT5047_36  # Motor Type

# Sine Wave Parameters
FREQUENCY = 0.1  # Frequency (Hz)
AMPLITUDE = 2500  # Amplitude (0.0001 turns)
OFFSET = 2500    # Offset to Ensure Positive Position
DURATION = 60.0  # Run Duration (s)

def main():
    # Create Motor Control Object
    controller = MotorControl(channel=CAN_INTERFACE, bitrate=CAN_BITRATE)

    try:
        # Create and Add Motors
        motors = []
        for i in range(NUM_MOTORS):
            motor = Motor(MOTOR_TYPE, slave_id=i+1, master_id=0)
            controller.add_motor(motor)
            motors.append(motor)

            # Enable Motor
            print(f"Enabling Motor {i+1}...")
            controller.enable(motor)
            time.sleep(1)  # Wait for Motor Enable

            # Set Zero Position
            print(f"Setting Motor {i+1} Zero Position...")
            controller.set_zero_position(motor)
            time.sleep(1)

            # Save Settings to Flash
            print(f"Saving Motor {i+1} Settings...")
            controller.save_settings(motor)
            time.sleep(1)

            # Read Initial Status
            controller.read_motor_status(motor)
            print(f"Motor {i+1} Initial Status:")
            print(f"Position: {motor.position * 0.0001:.4f} turns")
            print(f"Velocity: {motor.velocity * 0.00025:.4f} turns/second")
            print(f"Torque: {motor.torque * motor.torque_k + motor.torque_d:.4f} Nm")

        # Start Sine Wave Position Control
        print("\nStarting Sine Wave Position Control...")
        start_time = time.time()
        while time.time() - start_time < DURATION:
            current_time = time.time() - start_time

            # Calculate Sine Wave Position with Offset to Ensure Positive
            position = AMPLITUDE * math.sin(2 * math.pi * FREQUENCY * current_time) + OFFSET

            # Control All Motors
            for motor in motors:
                # Use Position Control Mode with Max Torque of 1000
                controller.control_position(motor, position=int(position), torque=1000)

            # Control Frequency
            time.sleep(0.001)  # 1kHz Control Frequency

    except KeyboardInterrupt:
        print("\nProgram Interrupted by User")
    finally:
        # Disable All Motors
        for motor in motors:
            print(f"Disabling Motor {motor.slave_id}...")
            controller.disable(motor)

        # Close CAN Bus
        controller.close()
        print("CAN Bus Closed")

if __name__ == "__main__":
    main() 
```

</details>

- **运行 hightorque_test.py**

```bash
python hightorque_test.py
```

<div class="video-container">
<iframe width="960" height="640" src="https://www.youtube.com/embed/iwE-8klCB2Q?si=QYcVnxF8YpYSYxvl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 技术支持和产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，确保您获得最佳体验。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

<style>{`
/* 导航容器 */
.quick-nav-container {
  margin: 2rem 0;
  padding: 1rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #f8f9fa 100%);
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.card-container {
  margin: 0.1rem 0;
  padding: 0.5rem;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

/* Dark 模式 - 导航容器 */
html[data-theme='dark'] .quick-nav-container {
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
}

/* 导航主体 */
.quick-nav {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  flex-wrap: wrap; /* 关键属性 */
  justify-content: left; /* 可选居中 */
}

/* 导航项 */
.nav-item {
  position: relative;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(20% - 20px);
  margin-bottom: 20px;
  align-items: center;
  text-decoration: none !important;
  color: #333;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  z-index: 1;
}

/* Dark 模式 - 导航项 */
html[data-theme='dark'] .nav-item {
  color: #e5e7eb;
  background: #374151;
  box-shadow: 0 2px 4px rgba(0,0,0,0.4);
}

/* 图标样式 */
.nav-item .icon {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  transition: transform 0.3s;
}

/* 文字样式 */
.nav-item .text {
  font-size: 0.95rem;
  white-space: nowrap;
}

/* 悬浮特效 */
.nav-item .hover-effect {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%);
  border-radius: 12px;
  transition: height 0.3s ease;
  z-index: -1;
}

/* 悬浮动画 */
.nav-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  color: white;
}

/* Dark 模式 - 悬浮动画 */
html[data-theme='dark'] .nav-item:hover {
  box-shadow: 0 6px 12px rgba(0,0,0,0.6);
  color: white;
}

.nav-item:hover .icon {
  transform: scale(1.2) rotate(10deg);
}

.nav-item:hover .hover-effect {
  height: 100%;
}

.nav-item img {
  pointer-events: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .quick-nav {
    flex-direction: column;
    gap: 0.5rem;
  }
  .nav-item {
    flex-direction: row;
    justify-content: start;
    padding: 0.8rem 1rem;
  }
  .nav-item .icon {
    margin-bottom: 0;
    margin-right: 0.8rem;
  }
}
`}</style>

<style>{`
/* 内容卡片增强版样式 */
.nav-grid {
  display: block;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 2rem;
}

.category-card {
  position: relative;
  padding: 1.5rem;
  border-radius: 16px;
  background: white;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  z-index: 1;
}

/* Dark 模式 - 内容卡片 */
html[data-theme='dark'] .category-card {
  background: #374151;
  box-shadow: 0 4px 6px rgba(0,0,0,0.4);
  color: #e5e7eb;
}

.category-group {
  margin-bottom: 2rem;
}

/* 分类色标 */
.category-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
}

.robot-kits::before { background: linear-gradient(to bottom, #4a90e2, #50e3c2); }
.actuators::before { background: linear-gradient(to bottom, #50e3c2, #a0e3c2); }
.sensors::before { background: linear-gradient(to bottom, #ff6b6b, #ff8e8e); }
.software::before { background: linear-gradient(to bottom, #f5a623, #f5c623); }

/* 悬浮特效 */
.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0,0,0,0.1);
}

/* Dark 模式 - 悬浮特效 */
html[data-theme='dark'] .category-card:hover {
  box-shadow: 0 12px 20px rgba(0,0,0,0.6);
}

.category-card:hover::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  z-index: -1;
}

/* Dark 模式 - 悬浮光效 */
html[data-theme='dark'] .category-card:hover::after {
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
}

/* 链接动画 */
.category-card a {
  position: relative;
  display: inline-block;
  transition: all 0.2s;
  text-decoration: none !important;
  color: #333;
}

/* Dark 模式 - 链接 */
html[data-theme='dark'] .category-card a {
  color: #d1d5db;
}

.category-card a:hover {
  color: #4a90e2;
  transform: translateX(5px);
}

/* Dark 模式 - 链接悬浮 */
html[data-theme='dark'] .category-card a:hover {
  color: #60a5fa;
}

.category-card a::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #4a90e2;
  transition: width 0.3s;
}

/* Dark 模式 - 链接下划线 */
html[data-theme='dark'] .category-card a::after {
  background: #60a5fa;
}

.category-card a:hover::after {
  width: 100%;
}

/* 标签样式增强 */
.tag {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 12px;
  margin-left: 8px;
  transition: all 0.3s;
}

.stable {
  background: #e6f4ea;
  color: #137333;
  box-shadow: 0 2px 4px rgba(0,100,0,0.1);
}

/* Dark 模式 - Stable 标签 */
html[data-theme='dark'] .stable {
  background: #065f46;
  color: #a7f3d0;
  box-shadow: 0 2px 4px rgba(0,100,0,0.3);
}

.recommended {
  background: #fce8e6;
  color: #a50e0e;
  box-shadow: 0 2px 4px rgba(200,0,0,0.1);
}

/* Dark 模式 - Recommended 标签 */
html[data-theme='dark'] .recommended {
  background: #7f1d1d;
  color: #fca5a5;
  box-shadow: 0 2px 4px rgba(200,0,0,0.3);
}

.category-card:active {
  transform: translateY(-2px) scale(0.98);
  box-shadow: 0 6px 10px rgba(0,0,0,0.1);
}

/* Dark 模式 - 点击效果 */
html[data-theme='dark'] .category-card:active {
  box-shadow: 0 6px 10px rgba(0,0,0,0.4);
}

/* 响应式优化 */
@media (max-width: 768px) {
  .nav-grid {
    grid-template-columns: 1fr;
  }

  .category-card {
    width: 100%;
    margin-top: 0.5rem; /* 卡片紧贴标题 */
  }
}

/* Dark 模式 - 标题文字 */
html[data-theme='dark'] h1,
html[data-theme='dark'] h2,
html[data-theme='dark'] h3,
html[data-theme='dark'] h4,
html[data-theme='dark'] h5,
html[data-theme='dark'] h6 {
  color: #f9fafb;
}

/* Dark 模式 - 正文文字 */
html[data-theme='dark'] p,
html[data-theme='dark'] li,
html[data-theme='dark'] strong {
  color: #e5e7eb;
}

/* Dark 模式 - 引用块 */
html[data-theme='dark'] blockquote {
  color: #9ca3af;
  border-left-color: #4b5563;
}
`}</style>
