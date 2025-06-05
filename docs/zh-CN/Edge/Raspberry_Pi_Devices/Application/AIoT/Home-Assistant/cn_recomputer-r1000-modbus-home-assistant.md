---
description: 学习如何在 reComputer R1000 上使用 Home Assistant 设置和配置 Modbus TCP 和 Modbus RTU，这是一种强大的基于树莓派的解决方案，可在楼宇管理系统 (BMS) 中实现无缝集成和控制您的 Modbus 设备。
title: reComputer R1000 和 Home Assistant 的 Modbus 集成
keywords:
  - Home Assistant 
  - reComputer R1000
  - 家庭自动化
  - BMS
  - Modbus
  
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/recomputer_r1000_home_assistant_modbus
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介

在现代楼宇管理系统 (BMS) 中，集成各种协议和设备对于高效的监控和控制至关重要。本指南重点介绍如何利用 Modbus 通信协议（Modbus TCP 和 Modbus RTU）的功能，通过强大的 reComputer R1000（基于树莓派的解决方案）与 Home Assistant OS 集成。无论您是在设置新系统还是增强现有系统，本指南将引导您完成将 Modbus 设备连接到 Home Assistant 的过程，确保无缝集成和控制。

## 开始之前

在开始此项目之前，您可能需要按照以下说明提前准备好硬件。

### 硬件准备

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### 软件准备

在开始集成过程之前，确保已安装所有必要的驱动程序和工具至关重要。正确的[驱动程序安装](https://wiki.seeedstudio.com/reComputer_r1000_use_rs485_modbus_rtu/)是 Modbus RTU 设备与 Home Assistant 之间实现无缝通信的前提条件。强烈建议在继续本指南之前，仔细阅读并安装所需的驱动程序。

此外，如果您尚未安装 Home Assistant，请按照 [Home Assistant 安装指南](https://wiki.seeedstudio.com/recomputer_r1000_home_automation/)在您的 reComputer R1000 上进行设置。

## 文件编辑器插件

虽然您可以直接从 Home Assistant 的用户界面（设置中）配置大部分内容，但某些部分需要编辑诸如 `configuration.yaml` 的文件。此文件包含要加载的集成及其配置。通过向此配置文件添加代码片段，您可以启用特定功能，包括 Modbus 集成。

要开始，您需要在 Home Assistant 中安装文件编辑器插件：

- 打开 Home Assistant。
- 导航到 `设置 > 插件`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/settings.PNG" style={{width:600}}/></div>

- 点击 `插件商店`。
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/add-ons.PNG" style={{width:600}}/></div>

- 搜索 `File Editor` 并点击它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/fileeditor.PNG" style={{width:600}}/></div>

- 点击安装按钮。
- 安装完成后，点击启动以运行文件编辑器。
- 可选：启用“在侧边栏显示”以便快速访问。
 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/fileeditor-start.PNG" style={{width:600}}/></div>

通过文件编辑器插件，您现在可以编辑 `configuration.yaml` 文件以添加 Modbus 集成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/config.PNG" style={{width:600}}/></div>

## 启用 Modbus TCP 集成

要在 Home Assistant 中启用 Modbus 集成，您需要在 `configuration.yaml` 文件中添加特定参数。以下是您需要配置的参数及其说明：

- **name**: 此 hub 的名称，必须唯一。
- **host**: 您的 Modbus 设备的 IP 地址或名称，例如 `192.168.1.1`。
- **port**: 用于通信的网络端口。
- **type**: Modbus 连接的类型。选项为 `tcp` 或 `serial`。这里我们使用 `tcp`。

要为 Modbus 集成配置实体，您需要为每个实体定义各种参数。以下是设置二进制传感器所需的参数：
有多个实体可供配置。您可以在 [Home Assistant 官方 Modbus 页面](https://www.home-assistant.io/integrations/modbus) 上查看。

- **binary_sensors**: 为此连接配置的所有二进制传感器的列表。
- **address**: 线圈/寄存器的地址。
- **name**: 实体的名称，在实体类型中必须唯一。
- **scan_interval**: 更新间隔（以秒为单位）。设置 `scan_interval = 0` 表示不轮询。实体会在启动后短时间内读取一次，然后根据 `scan_interval` 进行读取。
- **slave**: 与 `device_address` 相同。
- **input_type**: 请求的类型。选项为 `coil`、`holding` 或 `input`。

**示例**：

```bash
modbus:
  - name: modbus_hub
    type: tcp
    host: IP_ADDRESS_of_PLC
    port: 502
    binary_sensors:
      - name: Relay_1
        address: 8193
        slave: 1
        input_type: coil
        scan_interval: 1
      - name: Relay_2
        address: 8194
        slave: 1
        input_type: coil
        scan_interval: 1
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/modbus-settings.PNG" style={{width:600}}/></div>

:::note
在更改 `configuration.yml` 文件后，必须保存并重启 Home Assistant。
:::

## 启用 Modbus RTU 集成

要在 Home Assistant 中启用 Modbus RTU 集成，您需要在 `configuration.yaml` 文件中添加以下参数：

- **name**: 此 hub 的名称，必须唯一。
- **type**: Modbus 连接的类型。这里应为 `serial`。
- **port**: Modbus 设备连接到 Home Assistant 主机的串口或 USB 设备。我们发现它是 `/dev/ttyAMA30`。
- **baudrate**: 串行连接的速度。
- **method**: 连接到 Modbus 的方法。选项为 `rtu` 和 `ascii`。
- **parity**: 数据字节的校验。选项为 `E`（偶校验）、`O`（奇校验）、`N`（无校验）。
- **bytesize**: 每个字节的数据大小（以位为单位）。通常为 8。
- **stopbits**: 数据字节的停止位。

要为 Modbus RTU 集成配置实体，您需要为每个传感器定义各种参数。以下是设置传感器所需的参数：

- **sensors**: Modbus 传感器允许您从 Modbus 寄存器中收集数据。
- **name**: 实体的名称，在实体类型中必须唯一。
- **address**: 寄存器的地址。
- **slave**: 与 `device_address` 相同。
- **input_type**: 传感器的 Modbus 寄存器类型。选项为 `holding` 或 `input`。
- **scale**: 缩放因子。
- **device_class**: 传感器的类型/类别，用于在前端设置图标。
- **unit_of_measurement**: 附加到值的单位。

**示例**：

```bash
modbus:
  - name: modbus_hub2
    type: serial
    port: /dev/ttyAMA30
    baudrate: 9600
    bytesize: 8
    method: rtu
    parity: N
    stopbits: 1
    sensors:
      - name: Room Temperature
        address: 1
        input_type: input
        slave: 1
        scale: 0.01
        device_class: temperature
        unit_of_measurement: °C
      - name: Room Humidity
        address: 2
        input_type: input
        slave: 1
        scale: 0.01
        unit_of_measurement: '%'
        device_class: humidity
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/modbus-rtu-setting.PNG" style={{width:600}}/></div>

:::note
在更改 `configuration.yml` 文件后，必须保存并重启 Home Assistant。
:::

最后，您将能够看到实际运行的现象。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/demo.gif" style={{width:600}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>