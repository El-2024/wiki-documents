---
description: 本文概述了 reCamera 云台的功能、规格、硬件接口和部件清单。
title: 硬件与规格
keywords:
  - Edge
  - AI
  - reCamera
  - reCamera 云台
  - 无刷电机
  - 硬件概览
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.webp
slug: /cn/recamera_gimbal_hardware_and_specs
sidebar_position: 2
last_update:
  date: 2025/03/27
  author: Evelyn Chen
---

# reCamera 云台概览

reCamera Gimbal 2002 系列是首款开源的摄像头控制系统，配备 1TOPS AI 摄像头（reCamera）和 2 轴云台。其双无刷电机支持 360° 水平旋转和 180° 垂直旋转，实现全方位覆盖。

## 功能特点

- 完全开源的硬件和软件生态系统
  * [开发者门户](https://github.com/Seeed-Studio/OSHW-reCamera-Series?tab=readme-ov-file#recamera-software-development-guide)
- 快速安装与精确运动
  * 支持类似乐高的模块化组装
  * 360° 水平旋转全覆盖，180° 垂直范围从地面到天花板
  * 无刷电机精度：0.01° 步进精度，确保平滑的目标跟踪
- AI 驱动的运动控制
  * 内置定制 AI 模型：内置商业授权的 YOLO11，支持 Roboflow 和 SenseCraft AI
  * 智能跟踪：AI 自动调整云台运动
- 灵活开发，适合各类技能水平
  * 内置 Node-RED，支持低代码流式定制云台运动
  * 支持 C++ SDK，便于深度开发

## 规格参数

### 处理系统

| **参数**              | **值**                                                                 |
|------------------------|-------------------------------------------------------------------------|
| **SOC**                | SG2002                                                                 |
| **CPU**                | C906@1GHz + C906@700MHz                                                |
| **AI 性能**            | 1 TOPS @ Int8                                                          |
| **MCU**                | 8051 @ 8KB SRAM                                                       |
| **操作系统**           | Linux                                                                 |
| **内存**               | 256 MB                                                                |
| **视频编码器**         | 5MP @ 30Fps                                                           |

### 基本参数

| **参数**              | **值**                                                                 |
|------------------------|-------------------------------------------------------------------------|
| **eMMC**               | 8GB / 64GB                                                            |
| **电源供应**           | 12V DC 插孔至 XT30 接头                                                |
| **功耗**               | 12V, 185mA（静态）                                                    |

### 摄像头

| **参数**              | **值**                                                                 |
|------------------------|-------------------------------------------------------------------------|
| **传感器**             | OV5647                                                                |
| **分辨率**             | 5M (2592×1944) 像素                                                  |
| **芯片**               | 1/4" CMOS 传感器                                                     |
| **像素大小**           | 1.4μm                                                                |
| **输出格式**           | RAW 10                                                               |
| **最大帧率**           | 全尺寸：15fps                                                        |
| **光圈**               | F2.8                                                                 |
| **等效焦距**           | 3.46mm                                                               |
| **视场角**             | 65°                                                                  |
| **畸变**               | &lt;1%                                                               |
| **镜头结构**           | 5P                                                                   |

### 接口

| **参数**              | **值**                                                                 |
|------------------------|-------------------------------------------------------------------------|
| **USB**                | USB 2.0 Type-C                                                        |
| **无线**               | Wi-Fi 2.4G/5G，蓝牙 4.2/5.0                                           |
| **按钮**               | 1 × 重启按钮，1 × 用户按钮                                            |
| **补光灯**             | 4 × 0.3W 白光                                                        |
| **LED**                | 1 × 电源指示灯，2 × IO 可编程指示灯                                   |
| **麦克风**             | 板载麦克风                                                           |
| **扬声器**             | 外接扬声器                                                           |

### 电机规格

| **参数**              | **MS3008**               | **MS3506**          |
|------------------------|--------------------------|---------------------|
| **线圈匝数**           | 54                       | 60                  |
| **额定电压 (V)**       | 12                       | 12                  |
| **最大速度 (rpm)**     | 2000                     | 2100                |
| **额定扭矩 (N·m)**     | 0.04                     | 0.05                |
| **额定速度 (rpm)**     | 1160                     | 1250                |
| **额定电流 (A)**       | 0.64                     | 0.79                |
| **最大功率 (W)**       | 4.6                      | 6.4                 |
| **电机极数**           | 14                       | 14                  |
| **工作温度 (℃)**       | -25~60                   | -25~60              |
| **重量 (g)**           | 49                       | 63                  |
| **驱动输入电压 (V)**   | 6~16                     | 6~16                |
| **通信方式**           | CAN                      | CAN                 |
| **通信频率**           | CAN@1Mbps:2KHz           | CAN@1Mbps:2KHz      |
| **编码器**             | 15 位磁性编码器          | 15 位磁性编码器     |
| **CAN 波特率**         | 100K、125K、250K、500K、1M | 100K、125K、250K、500K、1M |
| **控制模式**           | 开环 (24KHz) / 速度环 (4KHz) / 位置环 (2KHz) | 开环 (24KHz) / 速度环 (4KHz) / 位置环 (2KHz) |

### 云台规格
| **参数**               | **值**                                                                    |
|------------------------|---------------------------------------------------------------------------|
| **俯仰范围**           | 0～180°                                                                    |
| **偏航范围**           | 0～360°                                                                    |


### 环境条件

| **参数**               | **值**                                                                    |
|------------------------|---------------------------------------------------------------------------|
| **工作温度**           | -20～50 ℃                                                                 |
| **工作湿度**           | 0～90%                                                                    |


### 机械参数

| **参数**               | **值**                                                                    |
|------------------------|---------------------------------------------------------------------------|
| **尺寸 (宽 × 高 × 深)** | 68×112×71mm                                                              |
| **外壳材料**           | 聚酰胺 (PA) 尼龙                                                         |
| **重量 (净重)**        | 230g                                                                      |

### 其他

| **参数**               | **值**                                                                    |
|------------------------|---------------------------------------------------------------------------|
| **保修期**             | 1年                                                                      |

## 硬件概览

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Interface.png" /></div>


### 核心板-C101

[**点击下载 8GB 的 PCBA 文件**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_Core_2002w_8GB_v1.zip)

[**点击下载 64GB 的 PCBA 文件**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_Core_2002w_64GB_v1.zip)

顶部视图             |  底部视图
:-------------------------:|:-------------------------:
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

#### 模块图

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/C101_block.png" /></div> 

### 传感器板-S101

[**点击下载 PCBA 文件**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_OV5647_S101_v1.1.zip)

顶部视图             |  底部视图
:-------------------------:|:-------------------------:
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_UP.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_Bottom.png" /></div>


### 底板-B401

[**点击下载 PCBA 文件**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_B401_v1.zip)

顶部视图             |  底部视图
:-------------------------:|:-------------------------:
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_Top.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_Bottom.png" /></div>


#### 模块图
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_block.png" /></div> 

### 电源板

此电源板提供稳定的电力供应和过压保护功能。支持 12V DC 输入，为电机和 reCamera 系统供电。

**过压保护阈值**：
- 最大跳闸电压：25.66V
- 正常工作电压：25.54V
- 最低安全电压：25.4V

[**点击下载 PCBA 文件**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_power_supply_board_v1.zip)

#### 模块图
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/power_supply_block.png" /></div> 

## 硬件接口

- [灯光](#jump1)
- [麦克风和扬声器](#jump2)
- [Wi-Fi](#jump3)
- [按钮](#jump4)
- [电机](#jump5)
- [CAN](#jump6)

### <span id="jump1">灯光</span>

在 reCamera 上有 3 个指示灯，**红色和蓝色**灯是可编程指示灯，**绿色**指示灯是电源指示灯，不可编程。**红色**灯是 CPU 的状态指示灯，**蓝色**灯是系统 eMMC 的读写状态指示灯。

**指示灯状态**：

| LED（颜色） | 状态 | 说明 |
| ---- | ---- | ---- |
| LED1 - 绿色 | 常亮 | 电源开启 |
| LED2 - 红色 | 闪烁 | CPU 工作（用户定义） |
| LED3 - 蓝色 | 闪烁 | eMMC 读写中 |

示例 1：使用 Linux 命令将 **红色指示灯**亮度设置为零
``` bash
echo 0 | sudo tee /sys/class/leds/red/brightness
```

示例 2：完全关闭 **红色指示灯**
``` bash
echo none | sudo tee /sys/class/leds/red/trigger
```

reCamera 上还有四个 **白色**灯，它们是摄像头的补光灯。可以通过以下指令控制补光灯的开关。

``` bash
echo 1 > /sys/devices/platform/leds/leds/white/brightness //打开灯光
echo 0 > /sys/devices/platform/leds/leds/white/brightness //关闭灯光
```

### <span id="jump2">麦克风和扬声器</span>

reCamera 配备了麦克风和扬声器。可以通过以下命令调用麦克风和扬声器。reCamera 可以播放 **wav** 格式的音频文件。

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //录制五秒音频

sudo aplay -D hw:1,0 /home/recamera/test.wav //播放音频
```

本地的 mp3 音频文件可以通过 [在线音频转换](https://www.aconvert.com/audio/) 转换为 wav 文件后在 reCamera 上播放。
播放器的默认格式为：16 位比特率；采样率为 16,000。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Convert_audio_online.png" /></div>

### <span id="jump3">Wi-Fi</span>

2002w 版本的 reCamera 硬件中集成了 Wi-Fi 模块。Wi-Fi 支持 AP+STA 双模式，可用于配置设备网络或在 AP 模式下配置设备。

AP 模式下 Wi-Fi 的 **SSID** 为：`reCamera_+ MAC 地址的后六位`。

AP 模式下 Wi-Fi 的 **密码** 为：`12345678`。

WiFi_AP 的 SSID 和密码可以在 reCamera 系统的 `/etc/hostapd_2g4.conf` 文件中配置。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-2.png" /></div>

reCamera 的 STA 配置文件位于 **/etc/wpa_supplicant.conf**，可以在其中配置 Wi-Fi 的账号和密码以进行连接。
在 STA 模式下，请连接到 **5G** 频段的 Wi-Fi。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-3.png" /></div>

在终端中，可以使用以下命令扫描并连接 Wi-Fi：

```bash
wpa_cli -i wlan0 scan                           #启动扫描

wpa_cli -i wlan0 scan_results                   #返回 Wi-Fi 扫描结果

wpa_cli add_network                             #添加新网络，返回网络 ID
wpa_cli set_network ID ssid "your_wifi_name"    #设置网络 SSID
wpa_cli set_network ID psk "your_wifi_password" #设置网络密码
wpa_cli enable_network ID                       #启用网络并连接
wpa_cli status                                  #检查连接状态
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-4.png" /></div>

### <span id="jump4">按钮</span>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Interface.png" /></div>

#### 用户按钮

**10 用户按钮**位于 **reCamera Gimbal** 板-B401 上。如果您忘记设备的密码等需要重置设备，可以长按用户按钮，然后连接设备电源。当设备的红灯常亮而不是闪烁时，松开用户按钮。

如果您想将设备的固件恢复到特定版本，请访问 [操作系统版本控制](https://wiki.seeedstudio.com/cn/recamera_os_version_control)。

#### 重启按钮

**11 重启按钮**位于 **reCamera Gimbal** 板-B401 上。按下按钮时，系统将重启。

### <span id="jump5">电机</span>

reCamera Gimbal 中有一个云台脚本，可用于调试和控制云台的电机。
要查看云台脚本的运行情况，请运行以下命令：

```bash
gimbal --help
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script.png" /></div>

`gimbal` 是一个 bash 脚本，您可以修改脚本以满足二次开发需求。脚本位置如下：

```bash
cd /usr/bin
cat gimbal
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script_content.png" /></div>

### <span id="jump6">CAN</span>

使用 `ifconfig` 命令查看 **can0** 接口：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_ifconfig.png" /></div>

使用 `cansend can0 can_id#9C.00.00.00.00.00.00.00` 命令发送 CAN 消息：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_cansend.png" /></div>

使用 `candump can0` 命令接收 CAN 消息：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_candump.png" /></div>

## 部件清单

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_Partlist.png" /></div>


## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时获得流畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>