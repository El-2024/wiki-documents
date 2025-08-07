---
description: Seeed Studio XIAO SAMD21 上的 SPI 通信
title: Seeed Studio XIAO SAMD21 上的 SPI 通信
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-SPI-Communication-Interface
last_update:
  date: 1/11/2023
  author: shuxu hu
---
### SPI 通信接口

### 硬件

**所需材料**

- [Seeed Studio XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) x 1

- [Grove-高精度压力传感器](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)

- Type-C 数据线 x1

**硬件连接**

- **步骤 1.** Grove-高精度压力传感器的 **CSK** 连接到 Seeed Studio XIAO 的 **SCK**。

- **步骤 2.** 传感器的 **CS** 连接到 Seeed Studio XIAO 的 **D3**。

- **步骤 3.** 传感器的 **SDO** 连接到 Seeed Studio XIAO 的 **MISO**。

- **步骤 4.** 传感器的 **SDI** 连接到 Seeed Studio XIAO 的 **MOSI**。

- **步骤 5.** 传感器的 **GND** 连接到 Seeed Studio XIAO 的 **GND**。

- **步骤 6.** 传感器的 **3V3** 连接到 Seeed Studio XIAO 的 **3.3V**。

- **步骤 7.** 通过 Type-C 数据线将 Seeed Studio XIAO 连接到 PC。

### 软件

:::note

如果这是您第一次使用 Arduino，我们强烈建议您在开始之前先查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [DPS310-Pressure-Sensor](https://github.com/Infineon/DPS310-Pressure-Sensor.git) 库。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 将代码复制到 Arduino IDE 中并上传。

```c
#include <Dps310.h>

// Dps310 对象
Dps310 Dps310PressureSensor = Dps310();

void setup()
{
  //从机选择线的引脚号
  //XMC2GO
  int16_t pin_cs = 3;
  //对于 XMC 1100 Bootkit 和 XMC4700 Relax Kit，请取消注释以下行
  //int16_t pin_cs = 10;

  Serial.begin(9600);
  while (!Serial);


  //调用 begin 来初始化 Dps310
  //参数 pin_nr 是您的微控制器上 CS 引脚的编号
  Dps310PressureSensor.begin(SPI, pin_cs);

  //温度测量速率（值从 0 到 7）
  //每秒 2^temp_mr 个温度测量结果
  int16_t temp_mr = 2;
  //温度过采样率（值从 0 到 7）
  //每个结果进行 2^temp_osr 次内部温度测量
  //更高的值增加精度
  int16_t temp_osr = 2;
  //压力测量速率（值从 0 到 7）
  //每秒 2^prs_mr 个压力测量结果
  int16_t prs_mr = 2;
  //压力过采样率（值从 0 到 7）
  //每个结果进行 2^prs_osr 次内部压力测量
  //更高的值增加精度
  int16_t prs_osr = 2;
  //startMeasureBothCont 启用后台模式
  //温度和压力自动测量
  //高精度和高测量速率不能同时使用。
  //请查阅数据手册（或试错）获取更多信息
  int16_t ret = Dps310PressureSensor.startMeasureBothCont(temp_mr, temp_osr, prs_mr, prs_osr);
  //使用下面注释的行之一来仅测量温度或压力
  //int16_t ret = Dps310PressureSensor.startMeasureTempCont(temp_mr, temp_osr);
  //int16_t ret = Dps310PressureSensor.startMeasurePressureCont(prs_mr, prs_osr);


  if (ret != 0)
  {
    Serial.print("初始化失败！ret = ");
    Serial.println(ret);
  }
  else
  {
    Serial.println("初始化完成！");
  }
}


void loop()
{
  uint8_t pressureCount = 20;
  float pressure[pressureCount];
  uint8_t temperatureCount = 20;
  float temperature[temperatureCount];

  //此函数将连续测量的结果写入作为参数给出的数组
  //调用函数时，参数 temperatureCount 和 pressureCount 应保存数组 temperature 和 pressure 的大小
  //函数结束后，temperatureCount 和 pressureCount 保存写入数组的值的数量
  //注意：Dps310 不能保存超过 32 个结果。当其结果缓冲区满时，它不会保存任何新的测量结果
  int16_t ret = Dps310PressureSensor.getContResults(temperature, temperatureCount, pressure, pressureCount);

  if (ret != 0)
  {
    Serial.println();
    Serial.println();
    Serial.print("失败！ret = ");
    Serial.println(ret);
  }
  else
  {
    Serial.println();
    Serial.println();
    Serial.print(temperatureCount);
    Serial.println(" 个温度值找到：");
    for (int16_t i = 0; i < temperatureCount; i++)
    {
      Serial.print(temperature[i]);
      Serial.println(" 摄氏度");
    }

    Serial.println();
    Serial.print(pressureCount);
    Serial.println(" 个压力值找到：");
    for (int16_t i = 0; i < pressureCount; i++)
    {
      Serial.print(pressure[i]);
      Serial.println(" 帕斯卡");
    }
  }

  //等待一段时间，以便 Dps310 可以重新填充其缓冲区
  delay(10000);
}
```

- **步骤 4.** 点击 **工具** > **串口监视器**，或同时按 **Ctrl+Shift+M**，成功上传后打开串口监视器，输出如下所示：

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/spi.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/spi.png" alt="pir" width={600} height="auto" /></p>