---
description: 介绍 mmWave 传感器如何连接到 HA。
title: mmWave for XIAO 通过蓝牙或 Wifi 连接到 Home Assistant
keywords:
- mmwave
- radar
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/mmwave_for_xiao_to_ha_bt
last_update:
  date: 09/14/2024
  author: Allen, Djair
---

# mmWave for XIAO 通过蓝牙连接到 Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/9.png" style={{width:1000, height:'auto'}}/></div>

## 介绍

24GHz mmWave Sensor for XIAO - Human Static Presence 是 Seeed Studio XIAO 系列的扩展板。它是一个集成天线的高灵敏度毫米波传感器，基于 FMCW 原理。结合传感器信号处理和精确的人体感应算法，它可以识别运动和静止状态下的人体。

本章主要介绍 24GHz mmWave Sensor for XIAO 如何通过蓝牙连接到 HA。有关 24GHz mmWave Sensor for XIAO 的详细功能特性，您可以参考[这里](https://wiki.seeedstudio.com/cn/mmwave_for_xiao/)。

:::caution
本 Wiki 的所有内容仅适用于 24GHz mmWave for XIAO，可能不适用于其他毫米波传感器。
:::

## 入门指南

### 硬件准备

在本文中，我们将使用 mmWave for XIAO 与 XIAO ESP32C3 结合使用，将其插入 Home Assistant，以获得美观和易于布线的效果。如果您想完全按照本教程进行操作，那么您需要准备以下模块。

<table align="center">
	<tr>
		<th>Seeed Studio XIAO ESP32C3</th>
        <th>24GHz mmWave for XIAO</th>
	</tr>
	<tr>
		<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/1.png" style={{width:150, height:'auto'}}/></div></td>
	</tr>
    <tr>
		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
        </div></td>
	</tr>
</table>

该传感器专为 XIAO 兼容性而设计，因此一般来说，如果您想使用此传感器，您需要准备一个 XIAO 并为传感器安装母排针。连接到 XIAO 时，请特别注意传感器的安装方向，请不要插反，否则很可能会烧坏传感器或 XIAO。

:::caution
正确的方向是传感器的天线应朝外。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/5.png" style={{width:800, height:'auto'}}/></div>

确认连接方向正确后，您可以将 USB-C 类型电缆连接到计算机或 3.3V 电源，传感器将开始工作。

:::tip
如果您目前手头没有 XIAO，那么您可以选择通过将 TTL 连接到其 3.3V 引脚和 GND 引脚来单独为 mmwave for XIAO 供电，这也可以使用本教程的内容来完成。对于本教程，不需要使用 RX 和 TX 引脚。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/10.jpg" style={{width:300, height:'auto'}}/></div>
:::


### 软件准备

如果您还没有安装 HomeAssistant，您可以点击[这里](https://www.home-assistant.io/installation/)参考官方 HomeAssistant 教程。

## 步骤

### 步骤 1. 发现设备

在 Home Assistant 中，点击左下角的 **设置**，在中间选择 **设备和服务**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/1.png" style={{width:1000, height:'auto'}}/></div>

在发现区域中，会有一个传感器图标，点击 **配置**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/2.png" style={{width:1000, height:'auto'}}/></div>

会出现一个弹出窗口，点击 **提交**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/3.png" style={{width:1000, height:'auto'}}/></div>

您将看到一个成功配置的弹出窗口，点击 **完成**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/4.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 2. 配置设备

在已配置区域中，点击 **ld2410_ble**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/5.png" style={{width:1000, height:'auto'}}/></div>

进入传感器设置页面后，点击 **1 个设备**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/6.png" style={{width:1000, height:'auto'}}/></div>

将传感器的返回值添加到仪表板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/7.png" style={{width:1000, height:'auto'}}/></div>

在弹出窗口中选择 **添加到仪表板**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/8.png" style={{width:1000, height:'auto'}}/></div>

最后，点击左上角的 **概览**，您将看到 mmwave-for-xiao 传感器数据成功显示在仪表板上。到此为止，mmwave for xiao 传感器已成功连接到 Home Assistant。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/HA-HiLink/9.png" style={{width:1000, height:'auto'}}/></div>

接下来，您可以发挥创意进行自动化设置！

# 通过 Wifi 使用 ESPHome 将 mmWave for XIAO 连接到 Home Assistant
以下 yaml 文件使用 ESPHome 固件将带有雷达模块的 Seeed XIAO ESP32S3 Sense 连接到 Home Assistant：

```
# ESPHome 配置
esphome:
  # ESP32-S3 设备名称
  name: "seeed-xiao-esp32s3-cam"
  
  # PlatformIO 构建选项
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# ESP32 开发板配置
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# 启用日志记录
logger:

# 启用 Home Assistant API - 使用您的 api 和密码
api:
  encryption:
    key: ""

ota:
  - platform: esphome
    password: ""

# Wi-Fi 配置 - 填入您的数据
wifi:
  ssid: ""
  password: ""

  # 启用备用热点（强制门户），以防 wifi 连接失败
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: ""

# 强制门户配置
captive_portal:

# ESP32 摄像头配置
esp32_camera:
  id: espcam
  name: Xiao Cam
  external_clock:
    pin: GPIO10
    frequency: 20MHz
  i2c_pins:
    sda: GPIO40
    scl: GPIO39
  data_pins: [GPIO15, GPIO17, GPIO18, GPIO16, GPIO14, GPIO12, GPIO11, GPIO48]
  vsync_pin: GPIO38
  href_pin: GPIO47
  pixel_clock_pin: GPIO13
  resolution: 800x600
  
# ESP32 摄像头 Web 服务器配置
esp32_camera_web_server:
  - port: 8080
    mode: stream
  - port: 8081
    mode: snapshot

# 24GHz 毫米波 XIAO 雷达配置
ld2410:
  id: ld2410_radar
  
uart:
  tx_pin: GPIO4
  rx_pin: GPIO3
  baud_rate: 256000
  parity: NONE
  stop_bits: 1

number:
  - platform: ld2410
    timeout:
      name: 雷达超时
    max_move_distance_gate:
      name: 雷达最大移动距离
    max_still_distance_gate:
      name: 雷达最大静止距离
    g0:
      move_threshold:
        name: g0 移动阈值
      still_threshold:
        name: g0 静止阈值
    g1:
      move_threshold:
        name: g1 移动阈值
      still_threshold:
        name: g1 静止阈值
    g2:
      move_threshold:
        name: g2 移动阈值
      still_threshold:
        name: g2 静止阈值
    g3:
      move_threshold:
        name: g3 移动阈值
      still_threshold:
        name: g3 静止阈值
    g4:
      move_threshold:
        name: g4 移动阈值
      still_threshold:
        name: g4 静止阈值
    g5:
      move_threshold:
        name: g5 移动阈值
      still_threshold:
        name: g5 静止阈值
    g6:
      move_threshold:
        name: g6 移动阈值
      still_threshold:
        name: g6 静止阈值
    g7:
      move_threshold:
        name: g7 移动阈值
      still_threshold:
        name: g7 静止阈值
    g8:
      move_threshold:
        name: g8 移动阈值
      still_threshold:
        name: g8 静止阈值

binary_sensor:
  - platform: ld2410
    has_target:
      name: 雷达目标
      id: radar_has_target
    has_moving_target:
      name: 雷达移动目标
    has_still_target:
      name: 雷达静止目标

sensor:
  - platform: ld2410
    moving_distance:
      name: 雷达移动距离
      id: moving_distance
    still_distance:
      name: 雷达静止距离
      id: still_distance
    moving_energy:
      name: 雷达移动能量
    still_energy:
      name: 雷达静止能量
    detection_distance:
      name: 雷达检测距离
      id: radar_detection_distance
    g0:
      move_energy:
        name: g0 移动能量
      still_energy:
        name: g0 静止能量
    g1:
      move_energy:
        name: g1 移动能量
      still_energy:
        name: g1 静止能量
    g2:
      move_energy:
        name: g2 移动能量
      still_energy:
        name: g2 静止能量
    g3:
      move_energy:
        name: g3 移动能量
      still_energy:
        name: g3 静止能量
    g4:
      move_energy:
        name: g4 移动能量
      still_energy:
        name: g4 静止能量
    g5:
      move_energy:
        name: g5 移动能量
      still_energy:
        name: g5 静止能量
    g6:
      move_energy:
        name: g6 移动能量
      still_energy:
        name: g6 静止能量
    g7:
      move_energy:
        name: g7 移动能量
      still_energy:
        name: g7 静止能量
    g8:
      move_energy:
        name: g8 移动能量
      still_energy:
        name: g8 静止能量
```

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