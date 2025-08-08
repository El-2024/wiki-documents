---
description: XIAO 总线舵机适配器入门指南
title: XIAO 总线舵机适配器入门指南
keywords:
  - servo
image: https://files.seeedstudio.com/wiki/bus_servo_driver_board/10.webp
sidebar_position: 8
slug: /cn/xiao_bus_servo_adapter
last_update:
  date: 05/26/2025
  author: Citric
---

# 总线舵机驱动板 / XIAO 总线舵机适配器入门指南

本 wiki 涵盖两个相关产品：**总线舵机驱动板**和 **XIAO 总线舵机适配器**。

- **总线舵机驱动板**不包含板载 XIAO ESP32-C3 微控制器，也不配备 3D 打印外壳。它被设计为通用总线舵机接口板，允许您通过外部控制器连接和控制舵机。

- **XIAO 总线舵机适配器**则包含 XIAO ESP32-C3 作为主控制器，并配有 3D 打印外壳。使用此版本，您可以直接使用板载 XIAO 控制总线舵机，使其成为机器人项目更集成和即用的解决方案。

请参考本指南的其余部分了解两种产品的设置和使用详情。


<div class="table-center">
  <table align="center">
    <tr>
        <th>总线舵机驱动板</th>
        <th>XIAO 总线舵机适配器</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/6.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/5.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Bus-Servo-Driver-Board-for-XIAO-p-6413.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-Bus-Servo-Adapter-for-XIAO-p-6397.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>


## 介绍

总线舵机驱动板 / XIAO 总线舵机适配器是 Seeed Studio 推出的紧凑而强大的硬件解决方案，专为机器人和自动化项目驱动串行总线舵机而设计。通过支持 UART 通信，它能够精确控制多个 ST/SC 系列舵机并获得反馈，包括飞特 SCS 系列（参见[飞特 SCS/STS/TTL 系列官方网站](https://www.feetechrc.com/en/scs_ttl_Servo.html)）。这使其非常适合需要舵机角度和负载反馈的机械臂、六足机器人、人形机器人和轮式机器人等应用。

本指南重点介绍硬件设置、物理连接、关键规格和**重要跳线设置**，帮助用户有效地将该板集成到他们的项目中。

:::warning 安全警告

在连接或断开舵机或接线之前，请务必断开电源。确保输入电压与舵机要求匹配，以避免损坏。

:::

## 硬件概述

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Bus Servo Driver Board" label="Bus Servo Driver Board">


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/1.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/2.png" style={{width:800, height:'auto'}}/></div>

总线舵机驱动板具有几个关键连接点：

**输入：**

* **DC IN (5.5 * 2.1mm)：** 这是板子和连接的舵机的电源输入。在此连接5~12V电源。*关键是，此电源的电压必须与您的舵机的电压要求匹配。* 例如，ST系列舵机通常在9V下工作，而SC系列舵机可能需要12V。

**输出：**

* **舵机接口：** 这个专用端口是您连接ST/SC系列总线舵机的地方。确保连接器正确对齐。

**控制接口：**

* **UART (RX/TX)：** 这些引脚提供用于控制舵机的串行通信。连接方法和跳线设置取决于您的主机设备。详情请参见下文。

</TabItem>

<TabItem value="XIAO Bus Servo Adapter" label="XIAO Bus Servo Adapter">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/3.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/4.png" style={{width:800, height:'auto'}}/></div>

**输入：**

* **DC IN (5.5 * 2.1mm)：** 这是板子和连接的舵机的电源输入。在此连接5~12V电源。*关键是，此电源的电压必须与您的舵机的电压要求匹配。* 例如，ST系列舵机通常在9V下工作，而SC系列舵机可能需要12V。

**输出：**

* **舵机接口：** 这个专用端口是您连接ST/SC系列总线舵机的地方。确保连接器正确对齐。

</TabItem>

</Tabs>

## 入门指南

### 选择驱动板的工作模式 **（仅适用于总线舵机驱动板）**

:::tip
对于XIAO总线舵机适配器，您无需修改任何电路即可使用内置的XIAO ESP32-C3来控制舵机，您可以直接跳过这部分。
:::

总线舵机驱动板提供两种主要连接方法：直接UART连接和通过USB转UART适配器的USB连接。*正确的跳线设置对于正常工作至关重要。*

#### UART连接（用于MCU、XIAO、ESP32等）

当直接连接到微控制器（MCU）的UART引脚时使用此方法，如ESP32、Arduino、Seeed Studio XIAO或单板计算机。

* **接线：**
    * 将驱动板上的`RX`引脚连接到主机设备上的`TX`引脚（D7）。
    * 将驱动板上的`TX`引脚连接到主机设备上的`RX`引脚（D6）。
    * 对于Seeed Studio XIAO等设备，您可以直接将XIAO插入提供的排针，确保引脚对齐正确。这样就无需为UART连接使用单独的杜邦线。

* **跳线设置（关键）：** 

    * 使用2.54mm跳线帽短接板子正面的2pin引脚。（默认已短接）
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/change-2.png" style={{width:400, height:'auto'}}/></div>

* **为主机供电：** 您的主机设备（例如Raspberry Pi Zero、ESP32、XIAO）需要自己的独立电源。

#### USB连接

当连接到带有USB端口的计算机或单板计算机时使用此方法（例如PC或Raspberry Pi 4B）。您只需使用USB线将控制板连接到计算机。

* **接线：**
    * 只需使用USB线将控制板连接到您的计算机。

* **跳线设置（关键）：** 

    * **步骤1.** 找到板子背面的焊接跳线。**对于USB通信，您必须确保两个焊盘已连接（它们之间有焊桥）。**

    - 版本1的背面焊盘：

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/7.jpg" style={{width:400, height:'auto'}}/></div>

    - 版本2的背面焊盘：

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/change-1.png" style={{width:400, height:'auto'}}/></div>

    * **步骤2.** 使用2.54mm跳线帽短接板子正面的2pin引脚。（默认已短接）
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/change-2.png" style={{width:400, height:'auto'}}/></div>

### 所需组件（开始之前）

在连接任何东西之前，请确保您有以下物品：

* **总线舵机驱动板 / XIAO总线舵机适配器**
* **兼容的ST/SC系列总线舵机**：请参见[飞特SCS/STS/TTL系列官方网站](https://www.feetechrc.com/en/scs_ttl_Servo.html)。
* **5~12V电源：** 电池或电源适配器。*电压必须与您的舵机规格匹配。*
* **主机设备：**
    * **对于直接UART：** 支持UART的设备，如Raspberry Pi、Arduino、ESP32或Seeed Studio XIAO。
    * **对于USB：** 计算机（PC、Mac、Linux）或单板计算机如Raspberry Pi 4B，*加上* USB转UART适配器。

:::note
对于XIAO总线舵机适配器，XIAO ESP32-C3是内置的，因此无需准备主机设备。
:::

* **连接线/适配器：** 如果使用直接UART，需要跳线（杜邦线）（除非使用XIAO直接排针连接）。如果使用USB连接方法，需要USB转UART适配器。

:::caution
如果使用SC系列舵机，请确认电源与其电压要求匹配。板子的DC输入标签是为ST系列舵机定制的，但也支持SC系列电压。**错误的跳线设置将阻止与驱动板的通信。**
:::

## 通过 USB 控制舵机

本节描述如何通过 USB 连接使用总线舵机驱动板控制多个总线舵机。

### 原理概述

总线舵机驱动板的工作原理是通过 USB 接收来自主机设备（如 PC、树莓派或微控制器）的串行（UART）命令。这些命令随后被转发到连接的总线舵机。通过发送适当的串行协议命令，您可以单独控制每个舵机的位置、速度和其他参数。

驱动板本身不会自主解释或生成舵机控制信号；相反，它充当主机和舵机之间的透明桥梁。这意味着您需要负责根据舵机的通信协议发送正确的命令数据包。

### 示例参考

有关如何向飞特（ST/SC/STS/TTL 系列）总线舵机发送命令的实际示例，您可以参考以下 Python 示例：  
[GitHub 上的 lerobot/common/robot_devices/motors/feetech.py](https://github.com/huggingface/lerobot/blob/main/lerobot/common/robot_devices/motors/feetech.py)

此示例演示了如何构造和发送串行数据包来控制飞特舵机。您可以根据需要将代码适配到您自己的主机平台和编程语言。

> **注意：**  
> - 具体的命令格式和协议可能因您的舵机型号而异。  
> - 请查阅您舵机的官方文档以获取正确的串行协议和命令结构。  
> - 您需要编写或适配一个符合您舵机要求的驱动程序。

有关飞特 SCS/STS/TTL 系列协议的更多详细信息，请参阅[飞特官方文档](https://www.feetechrc.com/en/scs_ttl_Servo.html)。

## 通过 XIAO 控制舵机

接下来，我们描述如何通过 XIAO 发送信号来控制舵机运动以及如何使用库。

### Arduino 库概述

:::tip
如果这是您第一次使用 Arduino，我们强烈建议您参考[Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/workloads/scservo">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### 功能

在我们开始开发代码之前，让我们看看库的可用功能。

- `SMS_STS(uint8_t id)` —— 创建具有指定 ID 的舵机对象。  
  参数：`uint8_t id`（舵机 ID）  
  输出：无

- `void WritePos(uint8_t id, int16_t Position, uint16_t Time, uint16_t Speed)` —— 设置舵机的目标位置、时间和速度。  
  参数：`uint8_t id`、`int16_t Position`、`uint16_t Time`、`uint16_t Speed`  
  输出：无

- `void RegWritePos(uint8_t id, int16_t Position, uint16_t Time, uint16_t Speed)` —— 设置舵机的目标位置、时间和速度，但稍后使用 Action 命令执行。  
  参数：`uint8_t id`、`int16_t Position`、`uint16_t Time`、`uint16_t Speed`  
  输出：无

- `void RegWriteAction()` —— 执行所有已注册的 RegWritePos 命令。  
  参数：无  
  输出：无

- `void WriteSpe(uint8_t id, int16_t Speed)` —— 设置舵机的旋转速度。  
  参数：`uint8_t id`、`int16_t Speed`  
  输出：无

- `void WritePosEx(uint8_t id, int16_t Position, uint16_t Time, uint16_t Speed, uint8_t ACC)` —— 设置位置、时间、速度和加速度。  
  参数：`uint8_t id`、`int16_t Position`、`uint16_t Time`、`uint16_t Speed`、`uint8_t ACC`  
  输出：无

- `void RegWritePosEx(uint8_t id, int16_t Position, uint16_t Time, uint16_t Speed, uint8_t ACC)` —— 注册位置、时间、速度和加速度，稍后执行。  
  参数：`uint8_t id`、`int16_t Position`、`uint16_t Time`、`uint16_t Speed`、`uint8_t ACC`  
  输出：无

- `void RegWriteActionEx()` —— 执行所有已注册的 RegWritePosEx 命令。  
  参数：无  
  输出：无

- `int16_t ReadPos(uint8_t id)` —— 读取舵机的当前位置。  
  参数：`uint8_t id`  
  输出：`int16_t`（位置）

- `int16_t ReadSpeed(uint8_t id)` —— 读取舵机的当前速度。  
  参数：`uint8_t id`  
  输出：`int16_t`（速度）

- `int16_t ReadLoad(uint8_t id)` —— 读取舵机的当前负载。  
  参数：`uint8_t id`  
  输出：`int16_t`（负载）

- `int16_t ReadVoltage(uint8_t id)` —— 读取舵机的当前电压。  
  参数：`uint8_t id`  
  输出：`int16_t`（电压）

- `int16_t ReadTemper(uint8_t id)` —— 读取舵机的当前温度。  
  参数：`uint8_t id`  
  输出：`int16_t`（温度）

- `int16_t ReadMove(uint8_t id)` —— 检查舵机是否正在移动。  
  参数：`uint8_t id`  
  输出：`int16_t`（1：移动中，0：已停止）

- `int16_t ReadCurrent(uint8_t id)` —— 读取舵机的电流。  
  参数：`uint8_t id`  
  输出：`int16_t`（电流）

- `void SetID(uint8_t id, uint8_t newid)` —— 为舵机设置新的 ID。  
  参数：`uint8_t id`、`uint8_t newid`  
  输出：无

- `void Load(uint8_t id)` —— 启用舵机扭矩。  
  参数：`uint8_t id`  
  输出：无

- `void Unload(uint8_t id)` —— 禁用舵机扭矩。  
  参数：`uint8_t id`  
  输出：无

- `int16_t ReadTorque(uint8_t id)` —— 读取舵机的扭矩状态。  
  参数：`uint8_t id`  
  输出：`int16_t`（1：已启用，0：已禁用）

- `void LEDAlarm(uint8_t id, uint8_t enable)` —— 设置LED报警状态。  
  参数：`uint8_t id`，`uint8_t enable`  
  输出：无

- `void Reset(uint8_t id)` —— 将舵机重置为出厂设置。  
  参数：`uint8_t id`  
  输出：无

- `void LockEprom(uint8_t id)` —— 锁定舵机的EEPROM。  
  参数：`uint8_t id`  
  输出：无

- `void UnlockEprom(uint8_t id)` —— 解锁舵机的EEPROM。  
  参数：`uint8_t id`  
  输出：无

### XIAO示例

现在我们已经安装了库并了解了基本功能，让我们为产品名称运行一些示例，看看它的表现如何。

**步骤1.** 启动Arduino应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载Arduino IDE</font></span></strong></a>
</div>

**步骤2.** 选择您的开发板型号并将其添加到Arduino IDE中。

- 要在后续例程中使用**Seeed Studio XIAO ESP32-C3**，请参考**[此教程](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started#software-setup)**完成添加。

**步骤3.** 按照图示完成接线。如果需要连接多个舵机，可以使用舵机附带的线缆完成连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/8.jpg" style={{width:600, height:'auto'}}/></div>

#### 控制多个舵机

```cpp
#include <SCServo.h>

// 为你的目标板定义正确的串口
#if defined(CONFIG_IDF_TARGET_ESP32C3) || defined(CONFIG_IDF_TARGET_ESP32C6) || defined(CONFIG_IDF_TARGET_ESP32S3)
#define COMSerial Serial0
#else
#define COMSerial Serial1
#endif

// 为舵机总线定义 RX/TX 引脚（供参考）
// 注意：在 ESP32 上，引脚通常在 COMSerial.begin() 中指定。
// 例如：COMSerial.begin(1000000, SERIAL_8N1, S_RXD, S_TXD);
// 如果你的板子使用 Serial1 的默认引脚，则不需要额外指定。
#define S_RXD D7
#define S_TXD D6

#define SERVO_NUM 2 // 舵机数量

SMS_STS st; // 舵机控制对象

// --- 舵机配置 ---
byte ID[SERVO_NUM] = {1, 2};                // 舵机的 ID
u16 Speed[SERVO_NUM] = {1500, 1500};         // 为舵机设置中等速度
byte ACC[SERVO_NUM] = {50, 50};             // 为舵机设置中等加速度
s16 Pos[SERVO_NUM] = {2048, 2048};           // 舵机位置数组，初始化为中点（2048）

void setup()
{
  // 启动主串口用于调试和接收命令
  Serial.begin(115200);
  // 等待一会儿让串口监视器连接
  delay(2000); 
  Serial.println("--- 舵机控制程序启动 ---");

  // 启动用于控制舵机的串口
  COMSerial.begin(1000000, SERIAL_8N1);
  st.pSerial = &COMSerial; // 将控制对象与串口关联
  
  Serial.println("检查舵机连接状态...");
  for (int i = 0; i < SERVO_NUM; i++) {
    if (st.Ping(ID[i]) != -1) {
      Serial.print("ID 为 ");
      Serial.print(ID[i]);
      Serial.println(" 的舵机已连接。");
    } else {
      Serial.print("错误：ID 为 ");
      Serial.print(ID[i]);
      Serial.println(" 的舵机没有响应！");
    }
  }

  // --- 上电自检 ---
  // 这部分让舵机在上电时自动移动，以确认它们工作正常。
  Serial.println("\n执行上电自检运动...");
  
  // 1. 移动到位置 1024
  Serial.println("移动到位置 1024...");
  for(int i=0; i<SERVO_NUM; i++) {
    Pos[i] = 1024;
  }
  st.SyncWritePosEx(ID, SERVO_NUM, Pos, Speed, ACC);
  delay(2000); // 等待运动完成

  // 2. 移动到位置 3072
  Serial.println("移动到位置 3072...");
  for(int i=0; i<SERVO_NUM; i++) {
    Pos[i] = 3072;
  }
  st.SyncWritePosEx(ID, SERVO_NUM, Pos, Speed, ACC);
  delay(2000); // 等待运动完成

  // 3. 返回中心位置（2048）以准备用户命令
  Serial.println("返回中心位置（2048）...");
  for(int i=0; i<SERVO_NUM; i++) {
    Pos[i] = 2048;
  }
  st.SyncWritePosEx(ID, SERVO_NUM, Pos, Speed, ACC);
  delay(1500);

  Serial.println("\n--- 初始化完成 ---");
  Serial.println("输入 'j' 减小角度，或输入 'k' 增大角度。");
  Serial.println("-----------------------------------");
}

void loop()
{
  // 检查用户是否通过串口监视器发送了命令
  if (Serial.available()) {
    String input = Serial.readString();
    input.trim(); // 移除多余的空格或换行符

    bool shouldMove = false; // 标志位，指示是否收到了有效命令

    if (input.startsWith("j")) {
      Serial.println("收到命令：'j'。减小角度。");
      for (int i = 0; i < SERVO_NUM; i++) {
        Pos[i] -= 512; // 移动一个小步长以便观察
        if (Pos[i] < 0) {
          Pos[i] = 0; // 防止低于最小范围
        }
      }
      shouldMove = true;
    } else if (input.startsWith("k")) {
      Serial.println("收到命令：'k'。增大角度。");
      for (int i = 0; i < SERVO_NUM; i++) {
        Pos[i] += 512; // 移动一个小步长
        if (Pos[i] > 4095) {
          Pos[i] = 4095; // 防止超过最大范围
        }
      }
      shouldMove = true;
    } else {
      Serial.print("未知命令：'");
      Serial.print(input);
      Serial.println("'。请输入 'j' 或 'k'。");
    }

    // 如果收到了有效命令，将新位置发送给舵机
    if (shouldMove) {
      Serial.print("将舵机移动到新位置：[");
      for(int i = 0; i < SERVO_NUM; i++){
        Serial.print(Pos[i]);
        if(i < SERVO_NUM - 1) Serial.print(", ");
      }
      Serial.println("]");
      
      st.SyncWritePosEx(ID, SERVO_NUM, Pos, Speed, ACC);
    }
  }
}
```

这个示例演示了如何使用 XIAO 和 SCServo 库控制多个飞特 SCS 系列总线舵机。代码初始化两个舵机，对它们进行校准，并允许用户通过串口命令交互式调整它们的位置。当您通过串口监视器发送 'j' 或 'k' 时，代码将分别减少或增加所有连接舵机的角度。每个舵机的当前位置都会被跟踪和更新，新位置通过 `SyncWritePosEx` 函数发送到舵机。

如何为您自己的项目进行定制：

- **舵机数量**：更改 `Servo_Num` 的值，并更新 ID、Speed、ACC 和 Pos 数组以匹配您舵机的数量和 ID。
舵机 ID：修改 ID 数组以匹配您连接的舵机的 ID。

- **速度和加速度**：调整 Speed 和 ACC 数组为每个舵机设置不同的速度和加速度。

- **串口引脚**：如果您使用不同的 UART 引脚，请更新 S_RXD 和 S_TXD 定义。

- **运动逻辑**：您可以更改 `loop()` 函数中的逻辑来实现更复杂或项目特定的行为，例如响应不同的串口命令、添加传感器反馈或与其他硬件集成。

- **初始位置**：设置 `Pos` 数组中的初始值来定义舵机的起始位置。


## 常见问题

:::tip

建议在开始项目之前阅读这些常见问题。它们解决了常见问题和潜在的问题。

:::

<details>
<summary>如果电源电压与我的舵机不匹配怎么办？</summary>

电路板和舵机可能会出现故障或损坏。始终确保输入电压与您舵机的要求匹配。
</details>

<details>
<summary>我可以同时连接多个舵机吗？</summary>

是的，支持多个舵机，但请确保您的电源能够处理组合的电流消耗。

</details> <br/>

## 资源

- **[PDF]** [总线舵机驱动板原理图](https://files.seeedstudio.com/wiki/bus_servo_driver_board/202004237_Servo_Driver_Board_for_Seeed_Studio_XIAO_SCH_PDF_250225.pdf)
- **[STL]** [XIAO 总线舵机适配器上壳](https://files.seeedstudio.com/wiki/bus_servo_driver_board/xiao_bus_servo_adapter_top.stl)
- **[STL]** [XIAO 总线舵机适配器下壳](https://files.seeedstudio.com/wiki/bus_servo_driver_board/xiao_bus_servo_adapter_bottom.stl)

### 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">

<a href="https://forum.seeedstudio.com/" class="button_forum"></a>

<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>

</div>

<div class="button_tech_support_container">

<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>

<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>

</div>