---
description: Grove - 二氧化碳、温度和湿度传感器 (SCD30)
title: Grove - 二氧化碳、温度和湿度传感器 (SCD30)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-CO2_Temperature_Humidity_Sensor-SCD30
last_update:
  date: 12/30/2022
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/main.jpg" /></div>

Grove - 二氧化碳、温度和湿度传感器 (SCD30) 是一款高精度的二氧化碳传感器，基于 Sensirion SCD30。该传感器的测量范围为 0 ppm-40'000 ppm，测量精度在 400ppm 至 10'000ppm 范围内可达到 ±(30 ppm + 3%)。

除了用于二氧化碳检测的非分散红外 (NDIR) 测量技术外，SCD30 还在同一传感器模块中集成了 Sensirion 的湿度和温度传感器。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>


## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 升级为 LoRaWAN® 传感器。Seeed 不仅帮助您完成原型设计，还为您提供通过 SenseCAP 系列的高性能 [工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) 扩展项目的可能性。

SenseCAP S210x 系列工业传感器为环境监测提供了开箱即用的体验。请参考性能更高、更加坚固的 S2103 无线二氧化碳、温度和湿度传感器，用于空气质量监测。该系列包括用于土壤湿度、空气温湿度、光照强度、二氧化碳、电导率 (EC) 以及 8 合 1 气象站的传感器。尝试最新的 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)，为您的下一个工业项目取得成功。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size="{4}"><strong>SenseCAP 工业传感器</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2103 空气温湿度 &amp; 二氧化碳</strong></a></td>
    </tr>
  </tbody>
</table>

## 版本

| 产品版本  | 变更                                                                                               | 发布日期       |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - CO2 & 温度 & 湿度传感器 (SCD30) V1.0 | 初始版本                                                                                               | 2018年12月      |

## 应用场景

- 空气净化器
- 环境监测
- 植物环境监测

## 特性

- NDIR CO2传感器技术
- 集成温度和湿度传感器
- 最佳性能与价格比
- 双通道检测，提供卓越稳定性
- 数字接口 I2C
- 低功耗
- 超长传感器寿命（15年）

## 规格

|参数|值|
|---|---|
|供电电压|3.3V / 5V|
|工作温度| 0 – 50℃|
|存储温度|- 40°C – 70°C|
|湿度工作条件|0 – 95 %RH|
|传感器寿命|15年|
|接口|I2C|
|I2C地址|0x61|
|尺寸|长: 61mm 宽: 42mm 高: 19mm|
|重量|19.7g|
|包装尺寸|长: 110mm 宽: 70mm 高: 40mm|
|毛重| 27g|

<div align="center"><b>表 1.</b><i>通用规格</i></div>

|参数|条件|值|
|---|---|----|
|CO2测量范围||0 – 40’000 ppm|
|精度| 400ppm – 10'000ppm| ± (30 ppm + 3%)|
|重复性|400ppm – 10'000ppm|10ppm|
|响应时间|τ63%|20 s|

<div align="center"><b>表 2.</b><i>CO2传感器规格</i></div>

|参数|条件|值|
|---|---|----|
|湿度测量范围||0 %RH – 100 %RH|
|精度| 0 – 50°C, 0 – 100%RH| ±2 %RH|
|重复性||0.1 %RH|
|响应时间|τ63%|8 s|

<div align="center"><b>表 3.</b><i>湿度传感器规格</i></div>

|参数|条件|值|
|---|---|----|
|温度测量范围||-40°C – 120°C|
|精度| 0 – 50°C| ±0.5°C|
|重复性||0.1°C|
|响应时间|τ63%|> 2 s|

<div align="center"><b>表 4.</b><i>温度传感器规格</i></div>

|参数|条件|值|
|---|---|----|
|平均电流|更新间隔 2 s|19 mA|
|最大电流| 测量期间| 75 mA|
|能耗|1次测量|120 mJ|

<div align="center"><b>表 5.</b><i>电气规格</i></div>

## 硬件概览

<div align="center">
<figure>
  <p style={{textAlign: 'center' }}><a href="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/pinout.jpg" /></a></p>
</figure>
</div>

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## 入门指南

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove-CO2 & T&H SCD30 |
|----------------|-------------|---------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/thumbnial.png" /></div>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html)|

>此外，您可以考虑我们的新产品 [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它相当于 Seeeduino V4.2 和 Base Shield 的组合。

:::note
  **1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

  **2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

**硬件连接**

- **步骤 1.** 将 Grove - CO2 & 温湿度传感器 (SCD30) 连接到 Base Shield 的 **I2C** 接口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 使用 USB 数据线将 Seeeduino 连接到电脑。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/connect.png" /></div>

#### 软件

:::caution
        如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [Seeed SCD30 Library](https://github.com/Seeed-Studio/Seeed_SCD30) 库。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。打开示例代码，可以通过以下三种方式打开：
    a. 在 Arduino IDE 中直接通过路径打开：**File --> Examples --> Grove_scd30_co2_sensor --> SCD30_Example**。

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/c1.jpg" /></div>

    b. 在电脑中找到并点击 **SCD30_Example.ino** 文件，路径为 **XXXX\Arduino\libraries\Seeed_SCD30-master\examples\SCD30_Example**，其中 **XXXX** 是您安装 Arduino IDE 的位置。

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/c3.jpg" /></div>

    c. 或者，您可以点击代码块右上角的图标 ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg)，将以下代码复制到 Arduino IDE 的新草图中。

```cpp
#include "SCD30.h"

#if defined(ARDUINO_ARCH_AVR)
 #pragma message("Defined architecture for ARDUINO_ARCH_AVR.")
 #define SERIAL Serial
#elif defined(ARDUINO_ARCH_SAM)
 #pragma message("Defined architecture for ARDUINO_ARCH_SAM.")
 #define SERIAL SerialUSB
#elif defined(ARDUINO_ARCH_SAMD)
 #pragma message("Defined architecture for ARDUINO_ARCH_SAMD.") 
 #define SERIAL SerialUSB
#elif defined(ARDUINO_ARCH_STM32F4)
 #pragma message("Defined architecture for ARDUINO_ARCH_STM32F4.")
 #define SERIAL SerialUSB
#else
 #pragma message("Not found any architecture.")
 #define SERIAL Serial
#endif



void setup()
{
    Wire.begin();
    SERIAL.begin(115200);
    SERIAL.println("SCD30 Raw Data");
    scd30.initialize();
}

void loop()
{
    float result[3] = {0};
    
    if(scd30.isAvailable())
    {
        scd30.getCarbonDioxideConcentration(result);
        SERIAL.print("Carbon Dioxide Concentration is: ");
        SERIAL.print(result[0]);
        SERIAL.println(" ppm");
        SERIAL.println(" ");
        SERIAL.print("Temperature = ");
        SERIAL.print(result[1]);
        SERIAL.println(" ℃");
        SERIAL.println(" ");
        SERIAL.print("Humidity = ");
        SERIAL.print(result[2]);
        SERIAL.println(" %");
        SERIAL.println(" ");
        SERIAL.println(" ");
        SERIAL.println(" ");
    }
    
    delay(2000);
}

```

:::caution
        库文件可能会更新。此代码可能不适用于更新后的库文件，因此我们建议您使用前两种方法。
:::

- **步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

:::tip
  如果一切正常，您应该能够在串口监视器中读取到 Grove - CO2 & 温湿度传感器 (SCD30) 的原始数据。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/c2.jpg" /></div>

## 校准与安装

为了在实际场景中获得更准确的结果，您需要注意以下两点：  

- 1. 正确的安装位置  
- 2. 校准

### 安装位置

请参考 [SCD30 设计指南](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/CD_AN_SCD30_Design-In_Guidelines_D2.pdf) 以确保正确的安装位置。

### 校准

首次激活时，需要至少 7 天的时间让算法找到 ASC 的初始参数集。传感器每天必须至少暴露在新鲜空气中 1 小时。此外，在此期间传感器不得断开电源，否则校准参数的查找过程将被中断，并需要从头开始重新启动。成功计算的参数存储在 SCD30 的非易失性存储器中，这意味着在重新启动后，之前找到的 ASC 参数仍然存在。有关校准的更多详细信息，请参考 [Sensirion SCD30 传感器模块接口描述](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Sensirion_CO2_Sensors_SCD30_Interface_Description.pdf)。

在 SCD30 库文件夹中有两个 ino 示例，您可以运行 `SCD30_auto_calibration.ino` 来启动校准。

### 使用 Wio Terminal (ArduPy)

#### 硬件

- **步骤 1.** 准备以下物品：

| Wio Terminal | Grove-CO2 & T&H SCD30 |
|--------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/thumbnial.png" /></div>|
|[立即购买](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[立即购买](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html)|

- **步骤 2.** 将 Grove-CO2 & T&H SCD30 连接到 Wio Terminal 的 **I2C** Grove 端口。

- **步骤 3.** 使用 USB Type-C 数据线将 Wio Terminal 连接到电脑。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/WT-SCD30.png"/></div>

#### 软件

- **步骤 1.** 按照 [**ArduPy 入门指南**](https://wiki.seeedstudio.com/cn/ArduPy/) 配置 Wio Terminal 上的 ArduPy 开发环境。

- **步骤 2.** 确保 ArduPy 固件已刷入 Wio Terminal。有关更多信息，请参考 [**这里**](https://wiki.seeedstudio.com/cn/ArduPy/#ardupy-aip-cli-getting-started)。

```sh
aip install Seeed-Studio/seeed-ardupy-scd30
aip build
aip flash
```

- **步骤 3.** 复制以下代码并保存为 `ArduPy-scd30.py`：

```python
from arduino import grove_scd30
from machine import LCD
from machine import Sprite
import time

scd30 = grove_scd30()
lcd = LCD()
spr = Sprite(lcd) # 创建缓冲区

def main():
    spr.createSprite(320, 240)
    while True:
        spr.setTextSize(2)
        spr.fillSprite(spr.color.BLACK)
        spr.setTextColor(lcd.color.ORANGE)
        spr.drawString("SCD30 数据读取", 90, 10)
        spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
        spr.setTextColor(lcd.color.WHITE)
        spr.drawString("- CO2 浓度: ", 20, 50)
        spr.drawString("- 温度: ", 20, 80)
        spr.drawString("- 湿度: ", 20, 110)

        if(scd30.isAvailable()):
            data = scd30.getCarbonDioxideConcentration()
            spr.drawFloat(data[0], 2,220,50) # CO2
            spr.drawFloat(data[1], 2, 220,80)
            spr.drawFloat(data[2], 2, 220,110)
            spr.pushSprite(0,0)
        time.sleep_ms(500)

        print("\n二氧化碳浓度:", data[0])
        print("温度:", data[1])
        print("湿度:", data[2])

if __name__ == "__main__":
    main()
```

- **步骤 4.** 将 `ArduPy-scd30.py` 保存到您知道的位置。运行以下命令，并用您的 `ArduPy-scd30.py` 文件路径替换 `<YourPythonFilePath>`。

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# 示例:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-scd30.py"
```

- **步骤 5.** 您将在终端上看到以下 3 个数据值，同时这些数据也会显示在 Wio Terminal 的 LCD 屏幕上。

```python
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-scd30.py"
Positional argument (/dev/cu.usbmodem1414301) takes precedence over --open.
Connected to ardupy
二氧化碳浓度: 2360.639
温度: 29.18707
湿度: 66.88538

二氧化碳浓度: 2360.639
温度: 29.18707
湿度: 66.88538

二氧化碳浓度: 2500.573
温度: 29.17372
湿度: 66.61072
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/Ardupy-SCD30.png"/></div>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Grove-CO2_Temperature_Humidity_Sensor-SCD30.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove - CO2 & 温度 & 湿度传感器 (SCD30) 原理图文件](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Grove-CO2_Temperature_Humidity_Sensor-SCD30.zip)
- **[PDF]** [SCD30 设计指南](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/CD_AN_SCD30_Design-In_Guidelines_D2.pdf)
- **[PDF]** [SCD30 数据手册](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Sensirion_CO2_Sensors_SCD30_Datasheet.pdf)
- **[PDF]** [SCD30 接口说明](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Sensirion_CO2_Sensors_SCD30_Interface_Description.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同用户的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>