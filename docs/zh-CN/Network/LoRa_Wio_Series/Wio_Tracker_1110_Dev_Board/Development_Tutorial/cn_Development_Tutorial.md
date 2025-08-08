---
description: Wio-Tracker 1110 开发教程
title: 开发教程
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/development_tutorial_for_Wio-trakcer
sidebar_position: 2
sidebar_class_name: hidden
last_update:
  date: 2023/9/4
  author: Jessie
---

在开始开发之前，请先查看 [设置您的工具链](https://wiki.seeedstudio.com/cn/setup_toolchain_for_wio_tracker/) 以完成工具的设置。

## 硬件概览

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/hard-overview.png" alt="pir" width={800} height="auto" /></p>

## 固件概览

<p style={{textAlign: 'center'}}><img src="https://github.com/Seeed-Studio/Wio_Tracker_1110_Examples/raw/b2ebc5f1de0af24a9f72316418f9313de4264e0f/media/1.png
" alt="pir" width={600} height="auto" /></p>

## Grove

Wio Tracker 1110 开发板上有 6 个 Grove 接口，可以连接 300 多种 Grove 模块。点击 [这里](https://wiki.seeedstudio.com/cn/Grove_Sensor_Intro/) 了解更多关于 Grove 模块的信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio-tracker-grove.png" alt="pir" width={800} height="auto" /></p>

### Grove I2C

开发板上有一个 Grove I2C 接口，其中 `SDA` 位于引脚 27，`SCL` 位于引脚 26。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_iic.png" alt="pir" width={300} height="auto" /></p>

### Grove UART

Wio Tracker 1110 开发板有两个 UART 外设，分别是 `uart0` 和 `uart1`。`uart0` 引脚连接到 CH340C，用于调试，而 `uart1` 用作 Grove UART 接口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_uart.png" alt="pir" width={300} height="auto" /></p>

根据原理图，TXD 位于引脚 8，RXD 位于引脚 6。

```cpp
#define     LED1                      13
#define     LED2                      14
#define     TXD                       8
#define     RXD                       6
#define     UART_TX_RX_BUF_SIZE       256
```

### Grove 数字接口

```cpp
#include <Adafruit_TinyUSB.h>  
#include <Wire.h>              
#include <Ultrasonic.h>        

// 定义超声波传感器连接的引脚
constexpr int ULTRASONIC_PIN = D0;  

Ultrasonic ultrasonic(ULTRASONIC_PIN);  

void setup()
{
  delay(100);                 
  Serial.begin(115200);        // 以 115200 波特率启动串行通信
  while (!Serial) delay(100); 
}

void loop()
{
  long RangeInInches;         // 用于存储以英寸为单位的距离
  long RangeInCentimeters;    // 用于存储以厘米为单位的距离

  Serial.println("前方障碍物的距离是: ");  

  RangeInInches = ultrasonic.MeasureInInches();  // 使用超声波传感器测量英寸距离
  Serial.print(RangeInInches);  
  Serial.println(" 英寸");       

  delay(250); 

  RangeInCentimeters = ultrasonic.MeasureInCentimeters();  
  Serial.print(RangeInCentimeters);  
  Serial.println(" 厘米");             

  delay(2500);  
}
```

### Grove 模拟接口

<details> 
<summary>示例代码：</summary>

```cpp
#include <Adafruit_TinyUSB.h> // 用于串行通信

constexpr int ADCIN = A0;
constexpr float MV_PER_LSB = 3600.0f / 1024.0f; // 10 位 ADC，输入范围为 3.6V

void setup()
{
  delay(100);
  Serial.begin(115200);
  while (!Serial) delay(100);
}

void loop()
{
	// 获取新的 ADC 值
  long sum = 0;
  for (int i = 0; i < 32; i++)
  {
    sum += analogRead(ADCIN);
  }
  int adcvalue = sum / 32;

  // 显示结果
  Serial.print(adcvalue);
  Serial.print(" [");
  Serial.print((float)adcvalue * MV_PER_LSB);
  Serial.println(" mV]");

  delay(1000);
}
```
</details> 

### LoRaWAN

## 资源

**[Github]** [Seeed-Studio/Wio_Tracker_1110_Dev_Board](https://github.com/Seeed-Studio/Wio_Tracker_1110_Examples)