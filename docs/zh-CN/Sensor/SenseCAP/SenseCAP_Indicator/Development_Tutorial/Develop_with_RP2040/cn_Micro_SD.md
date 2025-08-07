---
description: MicroSD
title: MicroSD
keywords:
- Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_RP2040_MicroSD
last_update:
  date: 5/23/2023
  author: Thomas
---
# **MicroSD**

RP2040 有一组 GPIO 引脚，可用于与外部 MicroSD 卡模块进行接口连接。

要在 RP2040 上使用 MicroSD 卡，我们使用 SPI（串行外设接口）协议将 SD 卡模块连接到微控制器的 GPIO 引脚。这涉及将 RP2040 上的以下引脚连接到 MicroSD 卡模块上的相应引脚：

SPI SCK（如 GPIO10）连接到 SD_SCK
SPI TX（如 GPIO11）连接到 SD_MOSI
SPI RX（如 GPIO12）连接到 SD_MISO
单个 GPIO 引脚（如 GPIO13）连接到 SD 卡模块上的 CS（片选）引脚

```cpp
 // 为 SD 卡初始化 SPI 接口
  const int chipSelect = 13;
  SPI1.setSCK(10);
  SPI1.setTX(11);
  SPI1.setRX(12);
```

一旦建立了硬件连接，您可以使用软件库（如 Arduino 的 SD 库）来读取和写入 MicroSD 卡的数据。SD 库提供了初始化 SD 卡、打开和关闭文件、读取和写入文件数据以及执行其他文件系统操作的函数。

**注意**：RP2040 上 MicroSD 卡接口的性能将取决于 SD 卡速度、布线质量和软件效率等因素，支持最大 32GB 的 SD 卡


## **示例代码**

此示例代码实现读取 CO2 数据并将数据存储在 SD 卡中。

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <SPI.h>
#include <SD.h>
#include <SensirionI2CScd4x.h>


SensirionI2CScd4x scd4x;
//初始化一个字符串来存储写入 SD 卡的数据
String SDDataString = "";

void sensor_power_on(void) {
  pinMode(18, OUTPUT);
  digitalWrite(18, HIGH);
}
// 传感器上电功能
void sensor_scd4x_init(void) {
  uint16_t error;
  char errorMessage[256];

  scd4x.begin(Wire);

  // 停止可能之前启动的测量
  error = scd4x.stopPeriodicMeasurement();
  if (error) {
    Serial.print("Error trying to execute stopPeriodicMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }

  // 开始测量
  error = scd4x.startPeriodicMeasurement();
  if (error) {
    Serial.print("Error trying to execute startPeriodicMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }
}

void sensor_scd4x_get(void) {
  uint16_t error;
  char errorMessage[256];

  Serial.print("sensor scd4x: ");
  // 读取测量值
  uint16_t co2;
  float temperature;
  float humidity;
  error = scd4x.readMeasurement(co2, temperature, humidity);
  if (error) {
    Serial.print("Error trying to execute readMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else if (co2 == 0) {
    Serial.println("Invalid sample detected, skipping.");
  } else {
    Serial.print("Co2:");
    Serial.print(co2);
    Serial.print("\t");
    Serial.print("Temperature:");
    Serial.print(temperature);
    Serial.print("\t");
    Serial.print("Humidity:");
    Serial.println(humidity);
  }
  // 将数据添加到 SD 数据字符串
  SDDataString += "scd4x,";
  if (error) {
    SDDataString += "-,-,-,";
  } else {
    SDDataString += String(co2);
    SDDataString += ',';
    SDDataString += String(temperature);
    SDDataString += ',';
    SDDataString += String(humidity);
    SDDataString += ',';
  }
}


int cnt = 0;
void setup() {
  Serial.begin(115200);

  sensor_power_on();
  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();
 // 为 SD 卡初始化 SPI 接口
  const int chipSelect = 13;
  SPI1.setSCK(10);
  SPI1.setTX(11);
  SPI1.setRX(12);
// 检查 SD 卡是否初始化
  if (!SD.begin(chipSelect, 1000000, SPI1)) {
    Serial.println("Card failed, or not present");
  } else {
    Serial.println("card initialized.");
  }

  sensor_scd4x_init();
}

void loop() {

  delay(5000);
  // 清除 SD 数据字符串并向串行监视器打印消息
  SDDataString = "";
  Serial.printf("\r\n\r\n--------- start measure %d-------\r\n", cnt);

  SDDataString += String(cnt);
  SDDataString += ',';

  cnt++;
  sensor_scd4x_get();
  // 打开 datalog.csv 文件进行写入
  File dataFile = SD.open("datalog.csv", FILE_WRITE);
  // 如果文件可用，写入数据：
  if (dataFile) {
    dataFile.println(SDDataString);
    dataFile.close();
    // 同时打印到串行端口：
    Serial.print("sd write: ");
    Serial.println(SDDataString);
  } else {
    Serial.println("error opening datalog.txt");
  }

}


```


# **技术支持**

别担心，我们为您提供支持！请访问我们的 [Seeed 官方 Discord 频道](https://discord.com/invite/QqMgVwHT3X) 提出您的问题！

如果您有大批量订单或定制需求，请联系 iot@seeed.cc