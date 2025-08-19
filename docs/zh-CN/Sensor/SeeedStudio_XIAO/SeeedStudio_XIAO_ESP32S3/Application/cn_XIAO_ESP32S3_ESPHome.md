---
description: ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3
title: ESPHome Support on Seeed Studio XIAO ESP32S3
keywords:
- ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/XIAO_ESP32S3_esphome
last_update:
  date: 12/25/2023
  author: Zachay-NAU
---

# XIAO ESP32S3 sense 通过 ESPHome 连接 Home Assistant（支持所有端口）

本教程将逐步介绍如何将 [Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started/) 与运行在 Home Assistant 上的 ESPHome 连接，并在将 Grove 模块连接到 XIAO ESP32S3 后发送传感器数据/控制设备。让我们开始吧！


## 什么是 ESPHome 和 Home Assistant？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:600, height:'auto'}}/></div>
<br />

[ESPHome](https://esphome.io/) 是一个旨在让管理 ESP 开发板尽可能简单的工具。它读取 YAML 配置文件并创建自定义固件，然后将其安装到您的 ESP 设备上。在 ESPHome 配置中添加的设备或传感器将自动显示在 Home Assistant 的用户界面中。ESPHome 可以帮助您连接设备并将数据发送到 Home Assistant 设备。

## 硬件准备

如果您想完整地跟随本教程，您需要准备以下物品。

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32S3 Sense</th>
      <th>Seeed Studio 扩展板</th>
      <th>Home Assistant 设备</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/home_assistant_topic/#-devices-for-home-assistant-" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 查看更多 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>


#### 使用的传感器

- [Grove - 温湿度传感器 (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)<br />
- [Grove -智能空气质量传感器 (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html)<br />
- [6x10 RGB MATRIX for XIAO](https://www.seeedstudio.com/6x10-RGB-MATRIX-for-XIAO-p-5771.html#)

## 软件准备

### 安装 Home Assistant

确保您已经安装并运行了 Home Assistant。您可以按照[这个wiki](https://wiki.seeedstudio.com/cn/ODYSSEY-X86-Home-Assistant)获取在ODYSSEY-X86 SBC上安装 Home Assistant 的分步指南，或者按照这个[链接](https://www.mbreviews.com/how-to-home-assistant-seeed-mini-router/)获取在Seeed Mini Router上使用 Home Assistant 的详细说明。

### 在 Home Assistant 上安装 ESPHome

ESPHome 作为 **Home Assistant 插件**提供，可以通过插件商店简单安装。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/3.png" width="700" />  -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/1.png" style={{width:900, height:'auto'}}/></div>

<!--  
- **Step 1.** To quickly setup ESPHome on Home Asssistant, click the below button

<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/4.png" width="300">

- **Step 2.** Once you see the following pop-up, click **OPEN LINK**

<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/5.png" width="300">

-->

- **步骤 1.** 点击 **INSTALL**


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 启用所有选项并点击 **START**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>


<!-- 
- **Step 3.** Click **INSTALL**

<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/6.png" width="700">

- **Step 4.** Enable all the options and click **START**

<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/7.png" width="700">

- **Step 5.** Click **OPEN WEB UI** or **ESPHOME from the side-panel**

<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/8.png" width="700">

-->
<br />
如果 ESPHome 成功加载，您将看到以下窗口

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/9.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div> 


## 开始使用

一旦所有软件和硬件都准备就绪，我们现在就可以开始了。


### 1. 将Seeed Studio XIAO ESP32S3 (Sense)添加到 ESPHome

- **步骤 1.** 点击 **+ NEW DEVICE**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/10.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 点击 CONTINUE

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/11.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>


- **步骤 3.** 为设备输入一个**名称**，并输入WiFi凭据，如**网络名称**和**密码**。然后点击 **NEXT**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/12.png" width="300"> 1.png-->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/1.png" style={{width:400, height:'auto'}}/></div>


- **步骤 4.** 选择 **ESP32-S3** 并点击

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/13.png" width="300"> 2.png-->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/2.png" style={{width:400, height:'auto'}}/></div>


- **步骤 5.** 点击 **SKIP**，因为我们将手动配置这个开发板

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/14.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

- **步骤 6.** 点击新创建的开发板下方的 **EDIT**
 
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/15.png" width="300"> 3.png-->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/3.png" style={{width:400, height:'auto'}}/></div>


- **步骤 7.** 这将打开一个 **YAML** 文件，该文件将用于设置所有开发板配置。按如下方式编辑 **esp32** 下的内容

```
esphome:
  name: esp32s3
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino


# Enable logging
logger:

# Enable Home Assistant API
api:

ota:

wifi:
  ssid: "your wifi name"
  password: "your password"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

```

**注意：** 这里我们使用最新版本的 [Arduino core](https://github.com/espressif/arduino-esp32/releases) for ESP32 和 [ESP32 support for PlatformIO](https://github.com/platformio/platform-espressif32/releases)

- **步骤 8.** 点击 **SAVE**，然后点击 **INSTALL**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/16.png" width="700"> 4.png-->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/4.png" style={{width:900, height:'auto'}}/></div>

- **步骤 9.** 将 USB Type-C 线缆的一端连接到 Seeed Studio XIAO ESP32S3，另一端连接到 reRouter CM4 1432 的其中一个 USB 端口

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/17.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/17.png" style={{width:900, height:'auto'}}/></div>


- **步骤 10.** 点击 **Plug into the computer running ESPHome Dashboard**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/18.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/5.png" style={{width:900, height:'auto'}}/></div>

- **步骤 11.** 选择已连接的端口。它很可能是

```/dev/ttyACM1 因为 /dev/ttyACM0``` 已连接到 reRouter CM4 1432

 <!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/19.png" width="700"> -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/6.png" style={{width:900, height:'auto'}}/></div>

:::tip 
最好使用 2.4GHz Wi-Fi
:::

现在它将下载所有必要的开发板包并将 ESPHome 固件刷入 XIAO ESP32S3。如果刷写成功，您将看到以下输出。如果您看到错误，请尝试重启您的 xiao esp32S3 或按住 BOOT 按钮进入引导加载程序模式并连接 XIAO ESP32S3。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/20.png" width="700"> -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/7.png" style={{width:900, height:'auto'}}/></div>

- **步骤 12.** 上面的窗口显示来自连接开发板的实时日志。点击 **STOP** 关闭它

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/21.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/8.png" style={{width:900, height:'auto'}}/></div>

- **步骤 13.** 如果您看到开发板状态为 **ONLINE**，这意味着开发板已成功连接到 WiFi

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/9.png" style={{width:400, height:'auto'}}/></div>

:::tip

现在您可以断开 XIAO ESP32S3 与 reRouter CM4 1432 的连接，只需通过 USB 线缆为其供电。这是因为从现在开始，如果您想要向 XIAO ESP32S3 刷写固件，您可以简单地通过 OTA 方式进行，无需通过 USB 线缆连接到 X86 开发板。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/22.png" width="300"> -->


- 1. 点击 **三个点** 并点击 **Install**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/23.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/10.png" style={{width:400, height:'auto'}}/></div>

- 2. 选择 **Wirelessly**，它将无线推送更改到开发板

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/24.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/11.png" style={{width:400, height:'auto'}}/></div>

:::

- **步骤 14.** 转到 **Settings** 并选择 **Devices & Services**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/25.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/19.png" style={{width:900, height:'auto'}}/></div>


- **步骤 15.** 您将看到 **ESPHome** 作为已发现的集成。点击 **CONFIGURE**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/26.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/12.png" style={{width:900, height:'auto'}}/></div>

- **步骤 16.** 点击 **SUBMIT**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/27.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/13.png" style={{width:900, height:'auto'}}/></div>

- **步骤 17.** 点击 **FINISH**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/28.png" width="300"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

### 2. 将 Grove 模块与 ESPHome 和 Home Assistant 连接

现在我们将 Grove 模块连接到 Seeed Studio XIAO ESP32S3 (sense)，这样我们就可以使用 Home Assistant 显示传感器数据或控制设备！

### 开发知识

#### XIAO 扩展板

  为了将 Grove 模块与 Seeed Studio XIAO ESP32S3 一起使用，我们将使用 [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) 并将 XIAO ESP32S3 连接到其上。
  
  之后，开发板上的 Grove 连接器可用于连接 Grove 模块

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### 引脚定义

  当将 Grove 模块连接到 Seeed Studio XIAO 的 Grove Shield 上的 Grove 连接器时，您需要按照下图使用适当的内部引脚编号。
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/pinout.png" width="1000"> -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg"style={{width:900, height:'auto'}}/></div>
<br />

例如，如果您想将 Grove 模块连接到 D0 端口，您需要在 ESPHome 上将引脚定义为 GPIO1。您可以通过[点击这里](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started/#resources)找到更多详细信息。

#### Grove 与 ESPHome 兼容性列表
  
  目前 ESPHome 支持以下 Grove 模块
  
  查看[这里](https://esphome.io/components/sensor/index.html#see-also)
  
  现在我们将从上表中选择 6 个 Grove 模块，并解释如何将它们与 ESPHome 和 Home Assistant 连接。

### 3. Grove 连接和数据传输

现在我们将选择几个 Grove 模块，并解释如何将它们与 ESPHome 和 Home Assistant 连接。

#### Grove - 温湿度传感器 (BME680)
  
##### 设置配置

- **步骤 1.** 将 Grove - [温度、湿度、压力和气体传感器 (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html) 连接到 Seeed Studio Expansion Base for XIAO 上的其中一个 I2C 连接器

- **步骤 2.** 在我们之前创建的 **xiao-esp32s3-bme680.yaml** 文件中，更改文件并通过 OTA 推送到 XIAO ESP32S3
  
```

# ESPHome 配置
esphome:
  # ESP32-S3 设备名称
  name: esp32s3
  
  # PlatformIO 构建选项
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# ESP32 配置
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# 启用日志记录
logger:

# 启用 Home Assistant API
api:

# 空中升级配置
ota:

# Wi-Fi 配置
wifi:
  ssid: "your wifi name"
  password: "your password"

  # 在 wifi 连接失败时启用备用热点（强制门户）
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

# 强制门户配置
captive_portal:

# BME680 传感器的 I2C 配置
i2c:
  sda: GPIO5
  scl: GPIO6

# BME680 传感器配置
sensor:
  - platform: bme680
    temperature:
      name: "BME680 Temperature"
      oversampling: 16x
    pressure:
      name: "BME680 Pressure"
    humidity:
      name: "BME680 Humidity"
    gas_resistance:
      name: "BME680 Gas Resistance"
    address: 0x76
    update_interval: 60s

```

您可以在[这里](https://esphome.io/components/sensor/bme680)了解更多关于 [BME680 组件](https://esphome.io/components/sensor/bme680) 的信息。它允许您使用基于 BME280、BME680、BMP085、BMP280、AHT10、AHT20 和 AHT21 的传感器。这里我们添加了 I²C 总线组件，因为 AHT20 使用 I2C 协议进行通信。


##### 在仪表板上可视化

- **步骤 1.** 在 Home Assistant 的概览页面上，点击 3 个点并点击 **Edit Dashboard**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/31.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/15.png" style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 点击 **+ ADD CARD**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/32.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/16.png" style={{width:900, height:'auto'}}/></div>


- **步骤 3.** 选择 **By ENTITY**，输入 **temperature** 并选择 **Temperature** 旁边的 **复选框**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/33.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/17.png" style={{width:900, height:'auto'}}/></div>

- **步骤 4.** 对 **Humidity**、**Gas Resitance** 和 **Pressure** 重复相同操作

- **步骤 5.** 点击 **CONTINUE**

- **步骤 6.** 点击 **ADD TO DASHBOARD**

现在您的 Home Assistant 仪表板将如下所示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/18.png" style={{width:900, height:'auto'}}/></div>

- **步骤 7.** 您也可以将传感器数据可视化为仪表。在 **BY CARD** 下点击 **Gauge**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/35.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/19.png" style={{width:900, height:'auto'}}/></div>

- **步骤 8.** 从下拉菜单中选择 **Temperature**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/36.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/20.png" style={{width:900, height:'auto'}}/></div>

- **步骤 9.** 点击 **SAVE**

- **步骤 10.** 对 **Humidity**、**Gas Resitance** 和 **Pressure** 重复相同操作

- 现在您的仪表板将如下所示

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/37.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/21.png" style={{width:900, height:'auto'}}/></div>
   
<br />

#### Grove -智能空气质量传感器 (SGP41)
  
- **步骤 1.** 将 Grove - [智能空气质量传感器 (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products) 连接到 Seeed Studio Expansion Base for XIAO 上的其中一个 I2C 连接器

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/38.jpg" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/22.jpg" style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 在我们之前创建的 **xiao-esp32S3.yaml** 文件中，修改文件并通过 OTA 推送到 XIAO ESP32S3 sense

```

# ESPHome 配置
esphome:
  # ESP32-S3 设备名称
  name: esp32s3
  
  # PlatformIO 构建选项
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# ESP32 配置
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# 启用日志记录
logger:

# 启用 Home Assistant API
api:

# 无线更新配置
ota:

# Wi-Fi 配置
wifi:
  ssid: "your wifi name"
  password: "your password"

  # 在 wifi 连接失败时启用备用热点（强制门户）
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

# 强制门户配置
captive_portal:

# SPI 配置
spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

# BME680 传感器的 I2C 配置
i2c:
  sda: GPIO5
  scl: GPIO6
  scan: True
  id: bus_a
  frequency: 1MHz

# SGP4X 传感器配置
sensor:
  - platform: sgp4x
    voc:
      id: sgp41_voc
      name: "VOC Index"
    nox:
      id: sgp41_nox
      name: "NOx Index"

```

- **步骤 3.** 带补偿的示例
compensation（可选）：包含用于补偿的传感器的块。如果未设置，将使用默认值。
我们将使用温湿度传感器（BME680）对智能空气质量传感器（SGP41）进行补偿。
以下是更新后的 **xiao-esp32S3.yaml** 文件：

```

# ESPHome 配置
esphome:
  # ESP32-S3 设备名称
  name: esp32s3
  
  # PlatformIO 构建选项
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# ESP32 配置
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# 启用日志记录
logger:

# 启用 Home Assistant API
api:

# 无线更新配置
ota:

# Wi-Fi 配置
wifi:
  ssid: "your wifi name"
  password: "your password"

  # 如果 wifi 连接失败，启用后备热点（强制门户）
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

# 强制门户配置
captive_portal:

# SPI 配置
spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

# BME680 传感器的 I2C 配置
i2c:
  sda: GPIO5
  scl: GPIO6
  scan: True
  id: bus_a
  frequency: 1MHz

# BME680 传感器配置
sensor:
  - platform: bme680
    temperature:
      id: bme680_temp
      name: "BME680 Temperature"
      oversampling: 16x
    pressure:
      name: "BME680 Pressure"
    humidity:
      id: bme680_hum
      name: "BME680 Humidity"
    gas_resistance:
      name: "BME680 Gas Resistance"
    address: 0x76

# SGP4X 传感器配置
  - platform: sgp4x
    voc:
      name: "VOC Index"
    nox:
      name: "NOx Index"
    compensation:
      humidity_source: bme680_hum
      temperature_source: bme680_temp

```

**注意：** 此传感器需要 90 个周期来收集足够的数据样本，目前无法避免警告。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/38.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/23.png" style={{width:900, height:'auto'}}/></div>

##### 在仪表板上可视化

与之前相同。
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/43.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/24.png" style={{width:900, height:'auto'}}/></div>
<br />


#### OV2640/OV3660 摄像头（XIAO ESP32S3 Sense）

##### 设置配置

- **步骤 1.** 将 OV2640 或 OV660 摄像头外部板连接到 xiao esp32s3 sense

- **步骤 2.** 在我们之前创建的 **xiao-esp32s3-camera.yaml** 文件中，更改文件并通过 OTA 推送到 XIAO ESP32S3 sense

```

# ESPHome 配置
esphome:
  # ESP32-S3 设备名称
  name: esp32s3
  
  # PlatformIO 构建选项
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# ESP32 配置
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# 启用日志记录
logger:

# 启用 Home Assistant API
api:

# 空中升级配置
ota:

# Wi-Fi 配置
wifi:
  ssid: "your wifi name"
  password: "your password"

  # 在 wifi 连接失败时启用备用热点（强制门户）
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

# 强制门户配置
captive_portal:

# ESP32 摄像头配置
esp32_camera:
  id: espcam
  name: My Camera
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

```

**注意**：更多信息请阅读[这里](https://esphome.io/components/esp32_camera.html?highlight=camera)
  
##### 在仪表板上可视化

- **步骤 1.** 在 Home Assistant 的概览页面上，点击 3 个点并点击 **Edit Dashboard**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/31.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/15.png" style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 点击 **+ ADD CARD**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/32.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/16.png" style={{width:900, height:'auto'}}/></div>

- **步骤 3.** 选择 **By ENTITY**，输入 **Camera** 并选择 **My Camera**
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/cameravisulization.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/25.png" style={{width:900, height:'auto'}}/></div>

- **步骤 4.** 点击 **Add to Dashboard**
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/cameravisulization2.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/26.png" style={{width:400, height:'auto'}}/></div>

- **步骤 5.** 在仪表板上查看网络流时，它处于空闲模式，每分钟只刷新几帧。当我们点击卡片时，它会转换为活动模式，通常刷新率在每秒一到十帧之间。在本教程中，刷新率约为每秒四帧。

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/camera.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/27.png" style={{width:400, height:'auto'}}/></div>


#### PDM 麦克风用于语音助手
  
##### 设置配置

- **步骤 1.** 在我们之前创建的 **xiao-esp32s3-microphone.yaml** 文件中，修改文件并通过 OTA 推送到 XIAO ESP32S3 sense

```

# ESPHome 配置
esphome:
  name: esp32s3
  platformio_options:
    build_flags: -DBOARD_HAS_PSRAM
    board_build.arduino.memory_type: qio_opi
    board_build.f_flash: 80000000L
    board_build.flash_mode: qio 

# ESP32 配置
esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: arduino

# 启用日志记录
logger:

# 启用 Home Assistant API
api:

# 无线更新配置
ota:

# Wi-Fi 配置
wifi:
  ssid: "your wifi name"
  password: "your password"

  # 在 wifi 连接失败时启用备用热点（强制门户）
  ap:
    ssid: "Xiao-Esp32s3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

# 强制门户配置
captive_portal:

# 状态 LED 灯配置
light:
  - platform: status_led
    id: light0
    name: "Voice Assistant State"
    pin:
      number: GPIO21
      inverted: true

# I2S 音频配置
i2s_audio:
  i2s_lrclk_pin: GPIO46 # 注意：标记为"无用"
  i2s_bclk_pin: GPIO42

# 使用 I2S 音频的麦克风配置
microphone:
  - platform: i2s_audio
    id: echo_microphone
    i2s_din_pin: GPIO41
    adc_type: external
    pdm: true

# 语音助手配置
voice_assistant:
  microphone: echo_microphone

# 二进制传感器配置（启动开关）
binary_sensor:    
  - platform: gpio
    pin: 
      number: GPIO2
      mode:
        input: true
        pullup: true
    name: Boot Switch
    internal: true
    on_press:
      - voice_assistant.start:
      - light.turn_off: light0
    on_release:
      - voice_assistant.stop:
      - light.turn_on: light0

```

**注意**：更多信息请阅读[这里](https://esphome.io/components/microphone/i2s_audio)。

##### 在仪表板上可视化


- **步骤 1.** 在Home Assistant的概览页面上，点击3个点并点击**编辑仪表板**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/31.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/15.png" style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 点击**+ 添加卡片**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/32.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/16.png" style={{width:900, height:'auto'}}/></div>

- **步骤 3.** 选择**按实体**，然后选择**Esp32S3 Assist in progress**、**Esp32S3 Assist in progress**、**Esp32S3 Finished speaking detection**、**Status**和**voice assistant state**
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/va1.png" width="700">
<img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/va2.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/28.png" style={{width:900, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/29.png" style={{width:900, height:'auto'}}/></div>

- **步骤 4.** 点击**添加到仪表板**
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/va3.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/30.png" style={{width:400, height:'auto'}}/></div>

- **步骤 5.** 当您按下Seeed Studio XIAO扩展底板上的**按钮(D1)**时，esp32s3上的用户定义LED（GPIO2）将点亮，您可以通过**语音助手**与esphome对话。
<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32S3/blob/main/Figures/va4.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/31.png" style={{width:600, height:'auto'}}/></div>

**注意：** 更多信息请[阅读这里](https://esphome.io/components/voice_assistant.html)。


#### XIAO 6x10 RGB矩阵

##### 设置配置

- **步骤 1.** 首先您需要将6x10 RGB矩阵连接到XIAO，详情请参见[此Wiki](https://wiki.seeedstudio.com/cn/rgb_matrix_for_xiao/#hardware-preparation)。

- **步骤 2.** 复制下面的.yaml信息并通过OTA推送到XIAO ESP32S3。

```
esphome:
  name: sixtyled
  friendly_name: sixtyled

esp32:
  board: seeed_xiao_esp32s3
  variant: esp32s3
  framework:
    type: arduino
    version: latest
    platform_version: 6.4.0

# 启用日志记录
logger:

# 启用Home Assistant API
api:

ota:

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # 在wifi连接失败时启用回退热点（强制门户）
  ap:
    ssid: "Sixtyled Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:
    
light:
  - platform: esp32_rmt_led_strip
    rgb_order: GRB
    pin: GPIO1
    num_leds: 60
    rmt_channel: 0
    chipset: ws2812
    name: "XIAO LEDS"
```

##### 在仪表板上可视化

- **步骤 1.** 打开路径`设置 - 设备和服务 - ESPHome - sixtyled（您设置的名称）`将卡片添加到仪表板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/sixty_dashboard_add.png" style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 在Home Assistant的概览页面上，点击3个点并点击**编辑仪表板**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/31.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/15.png" style={{width:900, height:'auto'}}/></div>


- **步骤 3.** 点击**+ 添加卡片**

<!-- <img src="https://github.com/Zachay-NAU/ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3/blob/main/pictures/32.png" width="700"> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/16.png" style={{width:900, height:'auto'}}/></div>


- **步骤 4.** 选择**按实体**，输入**xiao**并选择**sixtyled XIAO LEDS**旁边的**复选框**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/add_card.png" style={{width:900, height:'auto'}}/></div>


- **步骤 5.** 点击**继续**和**添加到仪表板**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/sixty_dashboard_add2.png" style={{width:900, height:'auto'}}/></div>

- **步骤 6.** 随后，您可以在"概览"部分找到一个卡片，您可以在其中控制XIAO的6x10 RGB矩阵。在这里，您可以切换其开/关状态并自定义其颜色和亮度。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-ESPHome-full_function/LEDdemo.gif" style={{width:600, height:'auto'}}/></div>


## ✨ 贡献者项目

- 此项目由Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)支持。
- 感谢**Zachary的努力**，您的工作将被[展示](https://wiki.seeedstudio.com/cn/Honorary-Contributors/)。
- 感谢**python的努力**，项目源码在[这里](https://community.home-assistant.io/t/seeed-studio-6x10-rgb-matrix-on-xiao-esp32s3/629867)分享。

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