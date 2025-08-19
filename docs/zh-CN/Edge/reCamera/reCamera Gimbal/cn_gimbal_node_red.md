---
description: 介绍为 reCamera 云台设计的 Node-RED 节点和流程。如果您正在使用 Node-RED 开发云台，本文档将指导您了解如何使用这些节点来控制云台。
title: 云台的 Node-RED 节点和流程
keywords:
  - AI
  - reCamera
  - 云台
  - Node-RED
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/workspace_flow.webp
slug: /cn/recamera_gimbal_node_red
sidebar_position: 3
last_update:
  date: 2025/04/09
  author: Dawn Yao
---

# 云台的 Node-RED 介绍
本 Wiki 提供了逐步指导，帮助您使用 Node-RED 节点操作和控制云台上的电机。设备上的默认流程是一个更全面的示例，展示了如何将 UI 节点与云台节点结合使用，但我们将逐一拆解这些节点，解释如何使用它们。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/workspace_flow.png" /></div>

如果您是 Node-RED 的新手，或者对如何将视觉 AI 与云台控制集成感兴趣，请参考[此页面](https://wiki.seeedstudio.com/cn/recamera_develop_with_node-red/)。

请注意云台的轴范围，如下图所示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/movement_range.png" /></div>

## 节点
### 设置电机角度
此节点允许您通过传递目标值来将云台设置为特定角度。当提供角度时，云台将相应移动以实现所需的定位。

示例：使用一个注入节点将偏航电机移动到 50°

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/set_motor_angle.png" /></div>

#### 配置
- 名称：节点的自定义名称。
- 输入：通过 msg、flow 或全局变量自由解析角度值。
- 单位：输入值格式：
    - 十进制输入：输入值为十进制角度（例如，180.23°）
    - 整数输入：输入值为表示百分之一度的整数格式（例如，18023 = 180.23°）
- 电机选择：选择要控制的电机及控制模式：
    - 偏航轴（左右）：水平移动
    - 俯仰轴（上下）：垂直移动
    - 绝对位置：将电机设置为特定角度
    - 相对偏移：使电机移动相对量
- 同时设置双轴：通过单个命令控制两个电机
    - 绝对位置：将两个电机设置为特定角度
    - 相对偏移：使两个电机移动相对量

#### 输入

对于单轴控制，输入是一个表示角度值的数字。

对于双轴控制，输入应为具有以下结构的 JSON 对象：

```json
{
    "yaw_angle": value,           // 水平角度（单位：度）
    "yaw_speed": speed_value,     // 可选：0-720
    "pitch_angle": value,         // 垂直角度（单位：度）
    "pitch_speed": speed_value    // 可选：0-720
}
```

#### 输出

此节点不生成任何输出消息。它仅设置电机角度并更新其状态显示以反映操作结果。

#### 状态显示

节点在其状态中显示当前操作：

- **处理中**：蓝点，带有 `Processing` 文本，表示命令正在发送
- **成功**：绿点，显示操作完成的详细信息：
    - 单轴示例：`Set Yaw: 90°` 或 `Offset Pitch: 10°`
    - 双轴示例：`Set Yaw: 90°, Pitch: 45°` 或 `Offset Yaw: 5°, Pitch: 10°`
- **错误**：红圈，带有错误消息，表示设置失败
- **忙碌**：黄圈，带有 `Busy` 文本，表示节点正在处理命令

### 设置电机速度
此节点设置偏航（水平）或俯仰（垂直）电机的速度值。此速度设置存储在全局上下文中，并在通过 SocketCAN 发送移动命令时由其他电机控制节点使用。

示例：使用滑块节点创建一个 UI 滑块来调整偏航电机速度。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/set_speed_slider.png" /></div>

仪表板由以下流程创建：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/set_speed_nodes.png" /></div>

在此示例中，我们需要确保将范围设置为 1-720，这是电机速度范围。同时需要确保您传递到下一个节点的 `msg` 是正确的。在这里我们选择 `msg.topic`。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/slider_config.png" /></div>

由于在滑块节点中选择了 `msg.topic`，我们需要确保从 `msg.topic` 接收以响应滑块。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/speed_config.png" /></div>

#### 配置
您可以指定从哪里获取输入值：

- msg：传入消息的属性（例如，payload）
- flow：流程上下文变量
- global：全局上下文变量

电机选择：
- 偏航轴（左右）：设置水平移动电机的速度
- 俯仰轴（上下）：设置垂直移动电机的速度

#### 输入
输入应为表示所需电机速度的数值。如果未设置自定义速度，默认速度值为 `90`。值可以以以下格式提供：

- 数字：90
- 包含数字的字符串："45"

**速度单位**：速度值以 `dps/LSB`（每秒度数 / 最小有效位）为单位，这是电机速度控制的分辨率。有效范围为 0 到 65535，云台的典型值为 50 到 720。

**速度参考值**：

- 慢速移动：1-120
- 中速移动：120-360
- 快速移动：360-720

#### 输出
此节点不生成任何输出消息。它仅更新以下全局上下文变量：

- 偏航电机：can$$currentYawSpeed
- 俯仰电机：can$$currentPitchSpeed

速度值以十六进制格式存储（例如，`5A.00` 表示速度为 90）在全局上下文中。

电机控制节点在通过 CAN 总线发送命令时会检索这些值。

#### 状态显示
节点在其状态中显示当前速度设置：

- 成功设置时显示绿色点，状态为 `Yaw Speed: X` 或 `Pitch Speed: X`
- 设置失败时显示红色环，并伴随错误信息。节点将在以下情况下报告错误：

    - 输入值无效（不是数字）
    - 输入值为空

### 获取电机角度
节点检索偏航（水平）或俯仰（垂直）电机的当前位置，并输出角度值。这对于监控摄像头的当前方向或在流程中实现基于位置的逻辑非常有用。

示例：使用按钮获取当前偏航电机角度位置

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_yaw_angle.gif" /></div>

仪表板由以下流程构成：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_yaw_angle.gif" /></div>

`按钮 UI 节点`将触发`获取电机角度节点`，然后解析结果并传递给`文本 UI 节点`。
您还可以将以下 JSON 导入到空流程中以获得此示例：
```json
[{"id":"24bca102bda2cc7b","type":"ui-button","z":"4c965edca3cbeb30","group":"e339fda5d481fc57","name":"","label":"Get Angle","order":0,"width":0,"height":0,"emulateClick":false,"tooltip":"","color":"","bgcolor":"","className":"","icon":"","iconPosition":"left","payload":"","payloadType":"str","topic":"topic","topicType":"msg","buttonColor":"","textColor":"","iconColor":"","enableClick":true,"enablePointerdown":false,"pointerdownPayload":"","pointerdownPayloadType":"str","enablePointerup":false,"pointerupPayload":"","pointerupPayloadType":"str","x":180,"y":200,"wires":[["254d3292e774ea35"]]},{"id":"e339fda5d481fc57","type":"ui-group","name":"get angle","page":"d682a21c64a5b02a","width":"6","height":"1","order":1,"showTitle":true,"className":"","visible":"true","disabled":"false","groupType":"default"},{"id":"d682a21c64a5b02a","type":"ui-page","name":"Page 1","ui":"a6b81038728cf4fb","path":"/page1","icon":"home","layout":"grid","theme":"d7858d0ba6eee558","breakpoints":[{"name":"Default","px":0,"cols":3},{"name":"Tablet","px":576,"cols":6},{"name":"Small Desktop","px":768,"cols":9},{"name":"Desktop","px":1024,"cols":12}],"order":1,"className":"","visible":"true","disabled":"false"},{"id":"a6b81038728cf4fb","type":"ui-base","name":"My Dashboard","path":"/dashboard","appIcon":"","includeClientData":true,"acceptsClientConfig":["ui-notification","ui-control"],"showPathInSidebar":false,"headerContent":"page","navigationStyle":"default","titleBarStyle":"default","showReconnectNotification":true,"notificationDisplayTime":1,"showDisconnectNotification":true},{"id":"d7858d0ba6eee558","type":"ui-theme","name":"Default Theme","colors":{"surface":"#ffffff","primary":"#0094CE","bgPage":"#eeeeee","groupBg":"#ffffff","groupOutline":"#cccccc"},"sizes":{"density":"default","pagePadding":"12px","groupGap":"12px","groupBorderRadius":"4px","widgetGap":"12px"}}]
```

#### 配置

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_motor_anlge_node.png" /></div>

电机选择：

- **偏航轴（左右移动）**：检索水平运动电机的角度
- **俯仰轴（上下移动）**：检索垂直运动电机的角度

单位：

- **输出为十进制**：以十进制度数输出角度值（例如，180.23°）
- **输出为整数**：以整数格式输出角度值，表示百分之一度（例如，18023 = 180.23°）

#### 输入
任何输入消息都会触发节点读取当前电机角度。输入消息的内容不会被使用。

#### 输出
节点将当前角度值输出到 `msg.payload` 属性中：

```json
// 选择“输出为十进制”
{
    "payload": 90.5
}

// 选择“输出为整数”
{
    "payload": 9050
}
```
单位：

- **原始整数值**：电机单位（百分之一度，偏航范围为 0-36000，俯仰范围为 0-18000）
- **转换后的十进制值**：度数（偏航范围为 0° 到 360°，俯仰范围为 0° 到 180°）

#### 状态显示
节点在其状态中显示当前角度：

- 查询电机时显示蓝色点，状态为 `Reading`
- 成功检索时显示绿色点，状态为 `Yaw: X°` 或 `Pitch: X°`
- 如果另一个查询正在进行中，显示黄色环，状态为 `Busy`
- 检索失败时显示红色环，并伴随错误信息：
    - 与电机的通信错误
    - 电机响应无效
    - 并发请求（将显示 `Busy` 状态）

### 获取电机速度
节点从全局上下文中读取存储的当前速度值，用于偏航（水平）或俯仰（垂直）电机。此速度值由其他电机控制节点在使用 SocketCAN 发送移动命令时使用。

示例：使用 `注入节点` 获取电机速度并解析到调试窗口

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/get_motor_speed_flow.png" /></div>

点击注入节点后，您将在调试窗口中看到当前偏航电机速度。

#### 配置

- 偏航轴（左右移动）：检索水平运动电机的速度设置
- 俯仰轴（上下移动）：检索垂直运动电机的速度设置
- 速度值以 `dps/LSB`（每秒度数 / 最低有效位）为单位测量，这是电机速度控制的分辨率。有效范围为 0 到 65535，通常值在 50 到 720 之间，用于云台。

#### 输入
任何输入消息都会触发节点从全局上下文中读取当前电机速度。输入消息的内容不会被使用。

#### 输出
节点将当前速度值输出到 `msg.payload` 属性中：
```json
{
  "payload": 90
}
```

#### 状态显示
节点在其状态中显示当前速度值：

- 成功检索时显示绿色点，带有 `Speed: X`
- 检索失败时显示红色圆环和错误信息

### 角度到 CAN
该节点接收一个数值角度作为输入，并生成一个 CAN 消息对象，可以直接发送到 CAN 总线接口或 CAN Write 节点。

示例：使用 `inject nodes` 让偏航轴顺时针或逆时针旋转 30 度。`angle to CAN` 节点会将数字转换为 CAN 命令，并使用 `CAN Write` 执行该命令。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/angle_to_can_flow.png" /></div>

您可以在 inject 节点中设置消息负载，如下所示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/counterclockwise.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/clockwise.png" /></div>

并为 angle to CAN 节点设置相对偏移：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/angle_to_can.png" /></div>

对于 `CAN write`，只需添加默认客户端并选择客户端。

#### 配置
- 电机选择：选择要控制的电机和控制模式：
    - 偏航轴（左右）：水平移动
    - 俯仰轴（上下）：垂直移动
    - 绝对位置：将电机设置到特定角度
    - 相对偏移：使电机移动相对量
- 单位：输入值格式：
    - 十进制输入：输入值为十进制角度（例如，180.23°）
    - 整数输入：输入值为表示百分之一度的整数格式（例如，18023 = 180.23°）

#### 输入
指定角度值的来源：

- msg.xxx：使用 msg 中的值
- flow.xxx：使用 flow 上下文中的值
- global.xxx：使用 global 上下文中的值

输入应为表示目标角度（用于绝对定位）或角度偏移（用于相对角度移动）的数值。

示例：

    90.5 - 移动到 90.5 度（使用十进制角度时）
    9050 - 移动到 90.5 度（使用电机单位时）
    -10 - 逆时针移动 10 度（使用相对偏移时）
    10 - 顺时针移动 10 度（使用相对偏移时）

#### 输出
该节点输出一个 CAN 消息对象，可以直接发送到 CAN 总线：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/angle_to_can_debug.png" /></div>

```json
{
  "payload": {
    "id": 0x141,  // 电机 ID，十六进制格式（偏航轴为 0x141，俯仰轴为 0x142）
    "data": [0xA4, 0x00, 0x5A, 0x00, 0x10, 0x27, 0x00, 0x00]  // 命令数据，字节数组
  }
}
```

注意：321 是偏航电机的十六进制格式（ID 141），322 是俯仰电机的十六进制格式（ID 142）。

##### 命令格式
输出的 CAN 消息遵循以下格式，详情请访问 [最新电机手册](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Gimbal/MotorTools/EN/CAN_Protocol_DescriptionV2.36.pdf)：

##### 绝对位置命令：
- **字节 0**：命令类型（0xA4）
- **字节 1**：方向（0x00）
- **字节 2-3**：速度（2 字节，小端序）
- **字节 4-7**：角度（4 字节，小端序）

##### 相对偏移命令：
- **字节 0**：命令类型（0xA8）
- **字节 1**：方向（0x00）
- **字节 2-3**：速度（2 字节，小端序）
- **字节 4-7**：偏移量（4 字节，小端序）

##### 角度限制
- **偏航轴**：-180° 到 +180°
- **俯仰轴**：-90° 到 +90°

超出这些范围的值将自动限制在允许范围内。

#### 状态显示
该节点在其状态中显示当前角度：

- 绿色点，带有 `command ID` + `motor ID` + `move degrees`

### CAN Write
CAN Write 节点允许您向 CAN 总线设备发送命令帧并接收其响应帧。它特别适用于查询设备状态、发送控制命令以及监控来自 CAN 总线设备的响应。

上述示例中展示了与 `angle to CAN` 节点的结合使用。

#### 配置
- 名称：节点的可选名称
- 客户端：选择要使用的 CAN 总线配置（必须在 CAN-config 节点中配置）

#### 输入
输入支持两种格式：

##### 格式 1：字符串格式（推荐）
格式为：`ID#DATA` 的字符串，其中 ID 是十六进制的 CAN 标识符，DATA 是点分隔的十六进制字节。

示例：`141#c1.0a.64.00.00.00.00.00`

##### 格式 2：对象格式
具有以下结构的对象：

```json
{
  "id": "141",
  "data": ["A4", "00", "2C", "01", "50", "46", "00", "00"]
}
```

其中：
- **id**：CAN 标识符，字符串格式（十六进制，无 0x 前缀）
- **data**：十六进制数据字节数组（无 0x 前缀）

#### 输出
该节点输出一个具有以下结构的对象：（有关每个 CAN 命令的详细信息，请访问 [最新电机手册](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Gimbal/MotorTools/EN/CAN_Protocol_DescriptionV2.36.pdf)）

```json
{
  "payload": "141#90.00.AB.02.3C.4C.91.49",
  "details": {
    "id": "141",
    "data": ["90", "00", "AB", "02", "3C", "4C", "91", "49"],
    "raw": "90.00.AB.02.3C.4C.91.49"
  },
  "timestamp": 1632048172456,
  "topic": "can-response"
}
```

其中：
- **payload**：格式为 `ID#DATA` 的字符串
- **details**：包含详细信息的对象：
  - **ID**：CAN 标识符（与请求相同）
  - **data**：响应字节的十六进制数组
  - **raw**：响应字节的点分隔字符串
- **timestamp**：接收到响应的时间
- **topic**：设置为 "can-response"

#### 示例
请求（输入字符串）：
```
141#90.00.00.00.00.00.00.00
```

响应（输出）：
```json
{
  "payload": "141#90.00.AB.02.3C.4C.91.49",
  "details": {
    "id": "141",
    "data": ["90", "00", "AB", "02", "3C", "4C", "91", "49"],
    "raw": "90.00.AB.02.3C.4C.91.49"
  },
  "timestamp": 1632048172456,
  "topic": "can-response"
}
```

##### 响应处理
该节点等待来自 CAN 设备的响应，并自动过滤响应帧，以确保您接收到与特定命令相关的响应。

##### 超时
如果在配置的超时时间内未收到响应，节点将输出错误消息。

##### 错误处理
节点将在以下情况下报告错误：
- 输入格式无效
- CAN 总线通信错误
- 响应超时

### CAN 转角度
该节点接收一个 CAN 消息对象作为输入，并提取电机 ID、命令类型以及角度/偏移值。它支持绝对位置命令（A4）、相对偏移命令（A8）和状态查询命令（94）。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_to_angle.png" /></div>

#### 配置
输入字段允许您指定包含 CAN 消息对象的消息属性、流程上下文或全局上下文变量。默认情况下，它使用 `msg.payload`。

#### 输入
输入应为具有以下结构的 CAN 消息对象：
```json
{
  "id": 0x141,  // 电机 ID，十六进制格式（0x141 表示 Yaw，0x142 表示 Pitch）
  "data": [...]  // 包含命令数据的字节数组（8 字节）
}
```

示例：
```json
{
  "id": 0x141,
  "data": [0xA4, 0x00, 0x5A, 0x00, 0x10, 0x27, 0x00, 0x00]
}
```

##### 命令验证
节点包含高级验证功能，以确保仅处理有意义的数据命令：

- **94 命令**：其余字节不能全部为零（这将表示查询，而不是响应）
- **A4/A6 命令**：第二个字节必须为 0x00 或 0x01 才被视为有效（排除类似 0x2F 的 ACK 响应）
- **A8 命令**：第二个字节必须为 0x00 才被视为有效

这些验证规则可防止处理 ACK 响应和查询命令，从而避免错误的角度计算。

##### 单位
- **十进制输出**：以十进制角度值输出（例如，180.23°）
- **整数输出**：以表示角度百分之一的整数格式输出（例如，18023 = 180.23°）

#### 输出
节点输出一个包含解码信息的 JSON 对象：

对于绝对位置命令（A4），选择“十进制输出”时：
```json
{
    "payload": {
        "motorId": 0x141,
        "angle": 90.5
    }
}
```

对于绝对位置命令（A4），选择“整数输出”时：
```json
{
    "payload": {
        "motorId": 0x141,
        "angle": 9050
    }
}
```

对于相对偏移命令（A8），选择“十进制输出”时：
```json
{
    "payload": {
        "motorId": 0x142,
        "offset": 5.0
    }
}
```

对于状态查询命令（94），选择“十进制输出”时：
```json
{
    "payload": {
        "motorId": 0x141,
        "status": true,
        "angle": 90.5
    }
}
```

##### 电机 ID
- Yaw 电机（水平）：`0x141`
- Pitch 电机（垂直）：`0x142`

##### 命令类型
- `0xA4`：绝对位置命令
- `0xA8`：相对偏移命令
- `0x94`：状态查询命令

## 默认流程的解释
默认流程是一个示例，展示了如何使用仪表板 UI 调色板、视觉 AI 调色板和 reCamera 调色板来构建一个仪表板，该仪表板可以预览摄像头、跟踪特定对象并控制电机。仪表板如下所示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_preview.png" /></div>

我们将逐一分解每个功能，以帮助您更好地理解此流程。

### 自动跟踪

此流程部分处理自动跟踪功能。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_to_angle.png" /></div>

- `Model Node`：运行 YOLO 模型并输出检测结果，例如检测框的 x、y、w、h 和对象 ID。

- `Function get_target_box Node`：函数节点仅提取所需对象的边界框信息。算法选择最大的边界框，通常是最近或最相关的目标进行跟踪。

- `Function control_motor Node`：计算此边界框中心与摄像头画面中心之间的偏移。

- `Set motor offset Node`：接收偏移值，然后解析 CAN 命令发送到电机，以保持目标居中于画面。

- `Function get_track_target Node`：将 YOLO 算法中的对象 ID 与实际对象名称匹配，并更新全局变量 `trackTarget`。

- `Dropdown List UI Node`：在仪表板中提供下拉列表 UI。用户可以实时选择 TrackTarget。

- `Function save_track_target Node`：通过下拉列表交互更新 TrackTarget。

- `Function get_track_enable Node`：获取全局变量 `trackEnabled` 的状态。

- `Track Enable Button Group Node`：在仪表板中提供切换按钮 UI，供用户启用或禁用自动跟踪。

- `Function save_track_enabled Node`：更新全局变量 `trackEnabled` 是否启用。

### 手动控制

手动控制流程允许用户通过交互式 UI 滑块移动云台电机。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/manual_control_motors.png" /></div>

- `Joystick Node`：使用模板 UI 节点绘制交互式摇杆，并将运动数据解析到下一个节点。

- `Set dual motor angle Node`：选择“同时设置双轴”配置。使用来自摇杆的解析 JSON 数据同时控制电机运动。请注意，这控制的是图像的移动，而不是物理云台的实际方向。

- `Get motor angle Node`：检索设备开机时 Yaw 和 Pitch 电机的初始位置，并与滑块 UI 节点同步。

- `Get motor speed Node`：检索设备开机时 Yaw 电机的初始速度，并与滑块 UI 节点同步。

- `Slider UI Node`：在仪表板上提供滑块 UI，供用户与电机交互。请注意，这里仅使用一个速度滑块同时控制两个电机的速度。您可以使用两个节点为两个电机分配不同的速度。

- `Set motor angle Node`：接收来自滑块 UI 节点的数据，并解析 CAN 命令以执行电机到达特定位置。

- `设置电机速度节点`：接收来自滑块 UI 节点的数据，并更新电机速度的全局变量，以便与位置命令一起发送。

### 快捷按钮

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/short_cut_buttons.png" /></div>

- `按钮 UI 节点`：在仪表板上提供按钮 UI，供用户与云台交互。点击时，节点将发送指定的值：
    - 睡眠模式: 
    ```json
    {"yaw_angle":180, "yaw_speed":360, "pitch_angle":175, "pitch_speed":360}
    ```
    - 待机模式: 
    ```json
    {"yaw_angle":180, "yaw_speed":360,"pitch_angle":90, "pitch_speed":360}
    ```
    - 校准：触发执行节点
    - 紧急停止：触发执行节点

通过点击这些按钮，`trackEnabled` 也会被更新为禁用状态，以停止自动跟踪（如果已开启）。

- `执行节点`：运行系统命令并返回其输出。您可以通过此节点执行任何云台的 bash 脚本：
    - 校准: 
    ```bash
    gimbal cali
    ```
    - 紧急停止:
    ```bash
    gimbal stop 1; gimbal stop 2
    ```
    如果您在终端中输入 `gimbal`，可以查看所有可用的脚本。

    <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script.png" /></div>

### CAN 节点

此示例未显示在仪表板上，因为它没有任何 UI 节点。它是工作区中的一个示例，用于演示如何使用以下节点。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/eg_using_can.png" /></div>

- `CAN 读取节点`：持续监听配置接口上的 CAN 消息，并以标准化格式输出。

- `CAN 转角度`：解码并将从 CAN 总线读取的原始数据转换为角度值。

- `注入节点`：为 `角度转 CAN` 节点解析 `30` 度以移动电机。

- `角度转 CAN`：将一个数值角度（此处为 30）作为输入，并生成一个 CAN 消息对象，可直接发送到 CAN 总线接口或 CAN 写入节点。

- `CAN 写入`：向 CAN 总线设备发送命令帧并接收其响应帧。在此示例中，它将解析以下内容：
        
    ```json        
    "payload": {
        "id": 0x141,  // 电机 ID，十六进制格式（0x141 表示 Yaw，0x142 表示 Pitch）
        "data": [0xA8, 0x00, 0x5A, 0x00, 0xb8, 0xb, 0x00, 0x00]  // 命令数据，字节数组形式
    }

    ```
    并发送 CAN 命令以逆时针旋转 30 度。

### PID 控制

请查看关于 PID 节点的文档 [这里](https://wiki.seeedstudio.com/cn/recamera_pid_adjustment/#adjust-pid-with-node-red)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>