---
description: Grove - 温湿度传感器(DHT20)
title: Grove - 温湿度传感器(DHT20)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Temperature-Humidity-Sensor-DH20
last_update:
  date: 1/3/2023
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" /></div>

全新的 Grove - 温湿度传感器基于 DHT20 传感器。DHT20 是 DHT11 的升级版本，与之前的版本相比，温度和湿度测量精度更高，测量范围更大。它具有 I2C 输出功能，这意味着使用起来更加简单。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 可升级为工业级传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了使用 SenseCAP 系列坚固耐用的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x 系列工业传感器为环境感知提供开箱即用的体验。请参考具有更高性能和稳定性的 S2101 无线温湿度传感器，用于空气质量监测。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 和 8 合 1 气象站传感器。试试最新的 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)，助力您下一个成功的工业项目。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size="{4}"><strong>SenseCAP 工业传感器</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
          <strong>S2101 空气温湿度传感器</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## 特性

- 高精度：
  - 温度精度：± 0.5 ℃
  - 湿度精度：± 3 % RH ( 25 ℃ )
- 宽测量范围：
  - 测量范围（湿度）：0 ~ 100% RH
  - 测量范围（温度）：-40 ~ + 80 ℃
- 更好的兼容性：
  - 数字输出
  - I²C 接口
- 完全校准
- 优异的长期稳定性
- 快速响应和抗干扰能力
- 宽电压支持 2.5-5.5V DC

## 规格参数

|参数 |值|
|---|---|
|输入电压|2.0 V – 5.5 V|
|湿度测量范围|0 ~ 100% RH|
|温度测量范围|-40 ~ + 80 ℃ |
|湿度精度|± 3 % RH ( 25 ℃ )|
|温度精度|± 0.5 ℃|
|输出信号|I2C 信号|

## 硬件概述

### 引脚图

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pin-mode.jpg" /></div>

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上述提到的支持平台是模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。无法为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 入门指南

### 与 Arduino 一起使用

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield| Grove - Temperature & Humidity Sensor V2.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/getonenow.png" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">立即购买</a>|

- **步骤 1.** 将 Grove Temperature & Humidity Sensor V2.0 连接到 Grove-Base Shield 的 **I2C** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 通过 USB 线将 Seeeduino 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/zhanshitu4.png" /></div>

#### 软件

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

与 DHT11 相比，DHT20 温湿度传感器在供电电压、温湿度测量范围、精度和输出信号质量方面都有明显的改进。

它配备了完全校准的数字 I2C 接口，因此引脚定义略有不同。您应该在[这里](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)下载并安装库来使用 DHT20。

一旦全部设置完成，我们可以上传示例代码来查看是否工作：

```cpp
// Example testing sketch for various DHT humidity/temperature sensors
// Written by ladyada, public domain
#include "Wire.h"
#include "DHT.h"
#define DHTTYPE DHT20   // DHT 20
/*Notice: The DHT10 and DHT20 is different from other DHT* sensor ,it uses i2c interface rather than one wire*/
/*So it doesn't require a pin.*/
DHT dht(DHTTYPE);         //   DHT10 DHT20 don't need to define Pin

#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial

#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
#else
    #define debug  Serial
#endif

void setup() {

    debug.begin(115200);
    debug.println("DHTxx test!");
    Wire.begin();

    /*if using WIO link,must pull up the power pin.*/
    // pinMode(PIN_GROVE_POWER, OUTPUT);
    // digitalWrite(PIN_GROVE_POWER, 1);

    dht.begin();
}

void loop() {
    float temp_hum_val[2] = {0};
    // Reading temperature or humidity takes about 250 milliseconds!
    // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)


    if (!dht.readTempAndHumidity(temp_hum_val)) {
        debug.print("Humidity: ");
        debug.print(temp_hum_val[0]);
        debug.print(" %\t");
        debug.print("Temperature: ");
        debug.print(temp_hum_val[1]);
        debug.println(" *C");
    } else {
        debug.println("Failed to get temprature and humidity value.");
    }

    delay(1500);
}
```

上传完成后，我们可以在Arduino的串口监视器中查看结果。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Serial-Monitor.png" /></div>

输出应该类似于...：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/output.png" /></div>

这些数值基于当前环境。

## 使用MicroPython

### 连接RaspberryPi Pico

**所需材料**

| RaspberryPi Pico | Grove Shield for Pi Pico v1.0 | Grove - Temperature & Humidity Sensor V2.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https:///files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pico1.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pico-shield1.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/getonenow.png" /></div>
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[立即获取](https://www.seeedstudio.com/Grove-Shield-for-Pi-Pico-v1-0-p-4846.html)|[立即获取](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html)|

#### I2C连接

- **步骤1.** 将RaspberryPi Pico插入Grove Shield for Pi Pico。

- **步骤2.** 将Grove - CO2 & Temperature & Humidity Sensor - SCD41连接到Grove Shield for Pi Pico的**I2C0**端口。

- **步骤3.** 通过USB线将RaspberryPi Pico连接到PC。
:::tip
请注意使用I2C0，如果使用I2C1，将无法工作。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/pico-connect.jpeg" /></div>

这是基本的硬件连接。

### 软件

- **步骤1.** 我们需要使用第三方库来控制**Grove - Temperature & Humidity Sensor V2.0**

1. 下载[dht20_demo2.py](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/dht/dht20_demo2.py)和[DHT20.py](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/dht/DHT20.py)库并保存到计算机。

2. 使用Thonny打开dht20_demo2.py和DHT20.py，点击左上角的"file"选项，然后选择"save as"。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny1.png" /></div>

3. 选择"Raspberry Pi Pico"并保存到Pico中。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny2.png" /></div>

:::note
保存时，Thonny会要求命名文件。这里我们输入"dht20_demo2.py"作为文件名，我们还需要输入文件的扩展名，否则无法使用。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny3.png" /></div>

- **步骤2.** 开始过程。

1. 首先初始化DHT20.py。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny4.png" /></div>

2. 启动演示过程，然后您可以看到下面的结果。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Thonny5.png" /></div>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Grove-Temperature&Humidity-Sensor-V2.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove - Temperature & Humidity Sensor V2.0(DHT20)](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Pico-micropython-master.zip)

## 技术支持与产品讨论

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 可升级为工业级传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 传感器以及 8 合 1 气象站。为您下一个成功的工业项目尝试最新的 SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>