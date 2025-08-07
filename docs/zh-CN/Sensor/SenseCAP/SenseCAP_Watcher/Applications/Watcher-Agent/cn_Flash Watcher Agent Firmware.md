---
description: 为您的 SenseCAP Watcher Agent 刷写固件的指南
title: 刷写 Watcher Agent 固件
sidebar_position: 1
keywords:
- SenseCAP
- Watcher
- Agent
- Firmware
- Flash
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /cn/flash_watcher_agent_firmware
last_update:
  date: 2025/04/25
  author: Zeke
---

# 刷写 Watcher Agent 固件

## 概述

特别感谢 [XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) 的开源贡献，使这个项目成为可能。

本指南提供了使用乐鑫 Flash Download Tool 为您的 SenseCAP Watcher 设备刷写 Watcher Agent 固件的说明。

:::danger 警告
刷写此固件将擦除 Watcher 的出厂信息，您可以使用以下命令进行备份：

esptool.py --chip esp32s3 --baud 2000000 --before default_reset --after hard_reset --no-stub read_flash 0x9000 204800 nvsfactory.bin
:::
## 前提条件

### 所需硬件
- SenseCAP Watcher 设备
- USB Type-C 数据线
- Windows PC

### 所需软件
- [Flash Download Tool](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip) (3.9.6 或更高版本)
- [Watcher Agent 固件二进制文件]

## 刷写过程

### 步骤 1. 下载并安装 Flash Download Tool

1. 从乐鑫官方网站下载 Flash Download Tool：
   [Flash Download Tool v3.9.6](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip)
2. 将下载的 zip 文件解压到您选择的目录
3. 无需安装 - 只需双击可执行文件即可运行工具

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/flash%20download%20tool.jpg" style={{width:500, height:'auto'}}/></div>

### 步骤 2. 准备固件文件

1. 下载 Watcher Agent 固件[二进制文件](http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/watcher_agent_firmware.bin)
:::caution 注意
确保所有路径不包含特殊符号。
:::


### 步骤 3. 连接设备

1. 使用设备底部的 Type-C 端口将您的 Watcher 连接到计算机
2. 双击 `flash_download_tool_3.9.7.exe` 启动工具
3. 配置以下设置：
   - ChipType：选择 `ESP32-S3`
   - WorkMode：选择 `Develop`
   - LoadMode：选择 `UART`

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting1.jpg" style={{width:300, height:'auto'}}/></div>

### 步骤 4. 配置固件设置

1. 点击第一行的 "..." 按钮浏览并选择您下载的固件二进制文件
2. 确保固件文件旁边的复选框已选中
3. 在固件文件选择后的地址字段中输入 `0x0`

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting2.jpg" style={{width:600, height:'auto'}}/></div>

### 步骤 5. 选择 COM 端口和刷写设置

配置以下设置：
- SPI SPEED：80MHz
- SPI MODE：DIO
- FLASH SIZE：32Mbit
- COM：选择适当的 COM 端口（注意：您的设备将显示两个 COM 端口）

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>

:::note
如果点击 START 后刷写没有开始，请点击 STOP 并尝试另一个 COM 端口。两个 COM 端口中只有一个可以用于刷写。
:::

### 步骤 6. 擦除闪存

1. 点击 `ERASE` 按钮清除现有固件
2. 等待擦除过程完成


### 步骤 7. 刷写固件

1. 点击 `START` 按钮开始刷写
2. 您应该在日志窗口中看到进度信息
3. 如果没有进度显示或失败，请尝试另一个 COM 端口


### 步骤 8. 验证成功

当您在日志窗口中看到成功消息时，刷写过程就完成了。

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish1.jpg" style={{width:300, height:'auto'}}/></div>

### 步骤 9. 重启设备

1. 找到您的 Watcher 设备上的复位孔
2. 使用针轻轻按下复位按钮
3. 设备将使用新固件重启

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:500, height:'auto'}}/></div>

## 故障排除

### 常见问题

1. **未检测到 COM 端口**
   - 确保您使用的是底部的 Type-C 端口
   - 尝试不同的 USB 线
   - 检查 USB 驱动程序是否正确安装

2. **刷写失败**
   - 尝试另一个 COM 端口
   - 检查地址 (0x0) 是否正确输入

3. **设备无响应**
   - 使用针轻轻按下复位按钮
   - 尝试在刷写前先擦除

## 技术支持

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>