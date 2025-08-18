---
description: Seeed Studio XIAO 扩展板
title: XIAO 扩展底板
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino-XIAO-Expansion-Board
last_update:
  date: 07/18/2024
  author: Spencer
---

## 概述

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" /></div>

这是一款为 Seeed Studio XIAO 设计的功能强大的扩展板，尺寸仅为树莓派 4 的一半。它能够以简单快速的方式构建原型和项目。凭借其丰富的外设，包括 OLED、RTC、可扩展存储器、无源蜂鸣器、复位/用户按钮、5V 舵机连接器、多种数据接口等，您可以探索 Seeed Studio XIAO 的无限可能性。该板还很好地支持 [Circuitpython](https://circuitpython.org/)。

作为 Seeed Studio XIAO 外形规格，所有 Seeed Studio XIAO 板都支持 [Grove Shield for Seeed Studio XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) 和 [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)。引脚之间存在细微差异，参考引脚图可以轻松管理。

Seeed Studio XIAO SAMD21、Seeed Studio XIAO RP2040 和 Seeed Studio XIAO nRF52840 都与 Seeed Studio Expansion Base for XIAO 兼容。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

- **快速原型制作：** 通过复位按钮和引出到公头的 SWD 引脚，轻松调试和复位。
<!-- 0.96"OLED, enables visual data display without PC serial monitor; Convenient plug and play Grove connectors support multiple data protocols, including IIC, Uart, Analog/Digital; No soldering needed with all pin led out. -->
- **丰富的外设：** OLED 显示屏、RTC、可扩展存储空间、无源蜂鸣器、用户按钮、板载电池管理芯片。
- **无需焊接：** 所有引脚均已引出。便捷的即插即用 Grove 连接器支持多种数据协议，包括 IIC、UART、模拟/数字。
- **支持 Circuit Python：** 很好地支持 circuit python。MicroSD 卡槽可扩展存储空间，使得在原型制作和项目构建中分配更多所需库成为可能。
- **小型尺寸：** 紧凑优雅，仅为树莓派 4 的一半大小，特别适合需要小型尺寸的项目。

## 规格参数

<div class="table-center">
<table align="center">
  <tr>
    <th>项目</th>
    <th>数值</th>
  </tr>
  <tr>
    <td>工作电压</td>
    <td>5V / 3.7V 锂电池</td>
  </tr>
  <tr>
    <td>充电电流</td>
    <td>460mA（最大）</td>
  </tr>
  <tr>
    <td>RTC 计时精度</td>
    <td>± 1.5S/天（25°C）</td>
  </tr>
  <tr>
    <td>RTC 电池</td>
    <td>CR1220</td>
  </tr>
  <tr>
    <td>显示屏</td>
    <td>0.96" OLED 显示屏</td>
  </tr>
  <tr>
    <td>可扩展存储器</td>
    <td>MicroSD 卡</td>
  </tr>
  <tr>
    <td>Grove 接口</td>
    <td>Grove IIC*2，Grove UART*1，A0/D0 Grove*1</td>
  </tr>
  <tr>
    <td>其他外部设备</td>
    <td>无源蜂鸣器、用户按钮、5V 舵机连接器</td>
  </tr>
</table>
</div>

## 应用

- SWD 调试
- 快速原型制作
- 数据显示
- 迷你尺寸项目

## 零件清单

|项目|数值|
|---|---|
|Seeed Studio XIAO 扩展底板  | *1 |

:::note
本产品不包含 Seeed Studio XIAO 和电池，Seeed Studio XIAO 正在不断推出新产品。要了解该系列的最新产品开发动态，请访问 [XIAO 系列主页](https://www.seeedstudio.com/xiao-series-page)。

<!-- please click this link to get [**Seeed Studio XIAO SAMD21**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html?gclid=Cj0KCQjwufn8BRCwARIsAKzP695mYBI8wwzrR8rXiJgv9QBK5DeTJGCU9bzXvzGUheFVZxqHcuw0SgYaAqDqEALw_wcB) -->

:::

## 入门指南

### 所需材料

| Seeed Studio XIAO SAMD21（预焊接） | Seeed Studio XIAO 扩展底板|
|--------------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/102010388_Preview-07.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" alt="pir" width={600} height="auto" /></p>
|[**立即购买**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[**立即购买**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)|

### 硬件概述

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/2222222222222222222222222222221.jpg" /></div>

有一个外部 MicroSD 卡插槽和 RTC 电池座，MicroSD 卡主要用于保存和运行 `python.py` 文件，RTC 用于跟踪当前时间，可用于在特定时间编程执行操作。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/1111111111111111111111110.jpg" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/ssssssssssccccccccc.png" /></div>

### 引脚图

Seeed Studio XIAO Grove 扩展板的外部接头引脚描述。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/pinpinpin4.jpg" /></div>

## 扩展板使用

### 连接

将 Seeed Studio XIAO SAMD21 放在扩展板上，Seeed Studio XIAO SAMD21 绿色 LED 应该亮起。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO-to-board.png" /></div>

:::note
请先将 Seeed Studio XIAO 插在扩展板上，然后插入 Type-C，记住将 Seeed Studio XIAO 插入**两个母头连接器的中间**，否则会损坏 Seeed Studio XIAO 和扩展板。
:::

## 电池使用

Seeed Studio XIAO 扩展底板可以由电池供电，所以如果您做一些需要移动的演示，电池将帮助您解决电源供应问题。当您插入电池时，请注意正负极，按照图片连接电池以免损坏电路板。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/battery-board.png" /></div>

此外，当您插入电池线和 type-C 线并将开关按钮切换到开启时，电路板会给电池充电。

如下图所示，如果 LED 闪烁，表示电池没有充电或电路板没有连接电池；如果 LED 持续亮起，表示电池正在充电。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO_flash_light.png" /></div>

## 扩展板上的模块

板载丰富的外设包括：

- **OLED显示屏：** 无需连接PC即可进行可视化数据显示，能够更高效地进行调试，并构建传感器集线器、数据监控系统等应用。

- **复位按钮：** 无需跳线和短路，一键轻松复位。

- **SWD调试：** SWD引脚引出为公头排针，使调试器连接和固件下载更加容易。

- **高精度RTC：** 带电池备份的高精度实时时钟，能够在主电源关闭时保持准确时间。

- **可扩展存储：** 背面配有MicroSD卡槽，添加库和使用circuit python时不再担心内存限制。

- **用户按钮：** 除了复位按钮外，还提供另一个用户自定义按钮。

- **无源蜂鸣器：** 您可以改变PWM频率来产生不同的蜂鸣声，制作"蜂鸣器音乐"。

- **Grove连接器：** 所有引脚引出，即插即用的grove连接器支持常见数据协议（Grove IIC*2，Grove UART*1，A0/D0 Grove*1）

- **锂电池充电：** JST2.0mm标准锂电池连接器和电池管理系统，支持USB和锂电池双电源供电，并可轻松进行板载电池充电。

- **5V舵机连接器：** 5V输出引出到公头排针，用于5V舵机和传感器连接。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/444.png" /></div>

### OLED显示屏

本示例介绍如何使用Seeed Studio XIAO扩展底板上的OLED显示屏。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Hello_world11.jpg" /></div>

**步骤1**. 将Seeed Studio XIAO SAMD21安装到扩展板上，然后连接Type-C线缆。

**步骤2**. 安装[**u8g2**](https://github.com/olikraus/U8g2_Arduino)库，这是[**如何安装库**](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)的指南。

**步骤3**. 复制代码并粘贴到Arduino IDE中，然后上传。

**OLED代码**

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup(void) {
  u8x8.begin();
  u8x8.setFlipMode(1);   // Enable (1) and disbale (0) 180 degree rotation of the display content
}

void loop(void) {
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("Hello World!");
}
```

### 通过用户按钮控制LED

本示例介绍如何使用Seeed Studio XIAO扩展底板上的按钮来控制Seeed Studio XIAO SAMD21上的LED。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/LED_botton.gif" /></div>

**步骤 1**. 将Seeed Studio XIAO SAMD21安装到扩展板上，然后连接Type-C线缆。

**步骤 2**. 打开Arduino IDE，复制代码并粘贴到Arduino IDE中，然后上传。

**代码**

```cpp
const int buttonPin = 1;     // 按钮引脚的编号
int buttonState = 0;         // 用于读取按钮状态的变量

void setup() {
  // 将LED引脚初始化为输出：
  pinMode(LED_BUILTIN, OUTPUT);
  // 将按钮引脚初始化为输入：
  pinMode(buttonPin, INPUT_PULLUP);

}

void loop() {
  // 读取按钮的状态值：
  buttonState = digitalRead(buttonPin);

  // 检查按钮是否被按下。如果是，buttonState为HIGH：
  if (buttonState == HIGH) {
    // 点亮LED：
    digitalWrite(LED_BUILTIN, HIGH);
  } else {
    // 熄灭LED：
    digitalWrite(LED_BUILTIN, LOW);
  }

}
```

### 蜂鸣器

蜂鸣器默认连接到引脚 A3，如果您想要移除蜂鸣器功能，只需按照下图所示，切断连线。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/111123232325.png" /></div>

#### **使用无源蜂鸣器播放歌曲**

此示例使用 Seeed Studio XIAO 扩展底板上的蜂鸣器播放生日快乐歌。

**步骤 1**. 将 Seeed Studio XIAO SAMD21 安装到扩展板上，然后连接 Type-C 数据线。

**步骤 2**. 打开 Arduino IDE，复制代码并粘贴到 Arduino IDE 中，然后上传。

**代码**

```cpp
int speakerPin = D3;
int length = 28; // the number of notes
char notes[] = "GGAGcB GGAGdc GGxecBA yyecdc";
int beats[] = { 2, 2, 8, 8, 8, 16, 1, 2, 2, 8, 8, 8, 16, 1, 2, 2, 8, 8, 8, 8, 16, 1, 2, 2, 8, 8, 8, 16 };
int tempo = 150;
void playTone(int tone, int duration) {
  for (long i = 0; i < duration * 1000L; i += tone * 2) {
    digitalWrite(speakerPin, HIGH);
    delayMicroseconds(tone);
    digitalWrite(speakerPin, LOW);
    delayMicroseconds(tone);
  }
}

void playNote(char note, int duration) {
  char names[] = {'C', 'D', 'E', 'F', 'G', 'A', 'B',
                  'c', 'd', 'e', 'f', 'g', 'a', 'b',
                  'x', 'y'
                 };
  int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014,
                  956,  834,  765,  593,  468,  346,  224,
                  655 , 715
                };
  int SPEE = 5;

  // play the tone corresponding to the note name

  for (int i = 0; i < 16; i++) {
    if (names[i] == note) {
      int newduration = duration / SPEE;
      playTone(tones[i], newduration);
    }
  }
}

void setup() {
  pinMode(speakerPin, OUTPUT);
}

void loop() {
  for (int i = 0; i < length; i++) {
    if (notes[i] == ' ') {
      delay(beats[i] * tempo); // rest
    } else {
      playNote(notes[i], beats[i] * tempo);
    }
    // pause between notes
    delay(tempo);
  }
}
```

### 通过旋转角度传感器控制舵机

此示例使用旋转角度传感器通过 Seeed Studio XIAO 扩展底板上的集成端口来控制舵机。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/rotary_servo.gif" /></div>

**步骤 1**. 将 Seeed Studio XIAO SAMD21 安装到扩展底板上，然后连接 Type-C 数据线。

**步骤 2**. 将舵机线缆连接到 **I2C** 端口，将旋转角度传感器连接到 **D0**。

**步骤 3**. 打开 Arduino IDE，复制代码并粘贴到 Arduino IDE 中，然后上传。

:::tip
如果您的开发板是 **XIAO ESP32 系列**。在运行以下代码之前，您需要先在 **Arduino 库管理器** 中安装 ESP32Servo 库，并将以下代码从

```#include <Servo.h>``` 更改为 ```#include <ESP32Servo.h>```。
:::

```cpp
#include <Servo.h>
#include <Arduino.h>
#include <Wire.h>

#define ROTARY_ANGLE_SENSOR A0
#define ADC_REF 3 //ADC的参考电压是3v。如果seeeduino上的Vcc开关
#define GROVE_VCC 3 //grove接口的VCC通常是3v
#define FULL_ANGLE 300 //旋转角度的满值是300度

Servo myservo;  // 创建舵机对象来控制舵机
// 在大多数板子上可以创建十二个舵机对象

int pos = 0;    // 存储舵机位置的变量

void setup() {
  Serial.begin(9600);
  pinMode(ROTARY_ANGLE_SENSOR, INPUT);
  myservo.attach(5);  // 将引脚5上的舵机连接到舵机对象
}

void loop() {

  float voltage;
  int sensor_value = analogRead(ROTARY_ANGLE_SENSOR);
  voltage = (float)sensor_value * ADC_REF / 1023;
  float degrees = (voltage * FULL_ANGLE) / GROVE_VCC;
  Serial.println("标记与起始位置之间的角度：");
  Serial.println(degrees);
  delay(50);
  myservo.write(degrees);
}

```

### RTC时钟显示

此示例使用RTC在OLED上显示时钟。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/time_clock.gif" /></div>

**步骤1**. 将Seeed Studio XIAO SAMD21安装在扩展板上，然后连接Type-C线缆。

**步骤2**. 安装[**u8g2**](https://github.com/olikraus/U8g2_Arduino)和[**PCF8563**](https://github.com/Bill2462/PCF8563-Arduino-Library)库，这是[**如何安装库**](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)的指南。

**步骤3**. 复制代码并粘贴到Arduino IDE中，然后上传。

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <PCF8563.h>
PCF8563 pcf;
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // 无复位引脚的OLED显示屏

void setup() {
  Serial.begin(115200);
  u8x8.begin();
  u8x8.setFlipMode(1);
  Wire.begin();
  pcf.init();//初始化时钟
  pcf.stopClock();//停止时钟
  pcf.setYear(20);//设置年份
  pcf.setMonth(10);//设置月份
  pcf.setDay(23);//设置日期
  pcf.setHour(17);//设置小时
  pcf.setMinut(33);//设置分钟
  pcf.setSecond(0);//设置秒
  pcf.startClock();//启动时钟
}

void loop() {
  Time nowTime = pcf.getTime();//获取当前时间
  u8x8.setFont(u8x8_font_chroma48medium8_r);   // 选择合适的字体

  u8x8.setCursor(0, 0);
  u8x8.print(nowTime.day);
  u8x8.print("/");
  u8x8.print(nowTime.month);
  u8x8.print("/");
  u8x8.print("20");
  u8x8.print(nowTime.year);
  u8x8.setCursor(0, 1);
  u8x8.print(nowTime.hour);
  u8x8.print(":");
  u8x8.print(nowTime.minute);
  u8x8.print(":");
  u8x8.println(nowTime.second);
  delay(1000);
}

```

### SD卡功能

对于XIAO SAMD21、XIAO RP2040、XIAO ESP32C3和XIAO ESP32S3，您无需安装单独的SD卡库来使用第三方库。以下程序适用于这些XIAO。

:::tip
扩展板电路设计使SD卡插槽的CS引脚连接到XIAO的**D2**引脚。
:::

```cpp
#include <SPI.h>
#include <SD.h>
#include "FS.h"

File myFile;

void setup() {
  // Open serial communications and wait for port to open:
  Serial.begin(115200);
  while(!Serial);              // 打开串口监视器后执行
  delay(500);

  Serial.print("Initializing SD card...");

  pinMode(D2, OUTPUT);          // 修改此处的引脚以适配您使用的SD卡的CS引脚。
  if (!SD.begin(D2)) {
    Serial.println("initialization failed!");
    return;
  }
  Serial.println("initialization done.");

  // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  myFile = SD.open("/test.txt", FILE_WRITE);          // 读写文件的路径需要以"/"开头

  // if the file opened okay, write to it:
  if (myFile) {
    Serial.print("Writing to test.txt...");
    myFile.println("testing 1, 2, 3.");
    // close the file:
    myFile.close();
    Serial.println("done.");
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }

  // re-open the file for reading:
  myFile = SD.open("/test.txt");                       // 读写文件的路径需要以"/"开头
  if (myFile) {
    Serial.println("test.txt:");

    // read from the file until there's nothing else in it:
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // close the file:
    myFile.close();
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }
}

void loop() {
  // nothing happens after setup
}

```

如果您使用的是XIAO nRF52840系列，那么您可能需要单独下载[SdFat库](https://github.com/greiman/SdFat)才能使用SD卡功能。

```cpp
#include <SPI.h>
#include "SdFat.h"
SdFat SD;

#define SD_CS_PIN D2
File myFile;

void setup() {
  // 打开串口通信并等待端口打开：
  Serial.begin(9600);
  while (!Serial) {
    ; // 等待串口连接。仅对原生USB端口需要
  }


  Serial.print("正在初始化SD卡...");

  if (!SD.begin(SD_CS_PIN)) {
    Serial.println("初始化失败！");
    return;
  }
  Serial.println("初始化完成。");

  // 打开文件。注意一次只能打开一个文件，
  // 所以在打开另一个文件之前必须先关闭这个文件。
  myFile = SD.open("/test.txt", FILE_WRITE);

  // 如果文件打开成功，写入数据：
  if (myFile) {
    Serial.print("正在写入test.txt...");
    myFile.println("testing 1, 2, 3.");
    // 关闭文件：
    myFile.close();
    Serial.println("完成。");
  } else {
    // 如果文件没有打开，打印错误信息：
    Serial.println("打开test.txt时出错");
  }

  // 重新打开文件进行读取：
  myFile = SD.open("test.txt");
  if (myFile) {
    Serial.println("test.txt:");

    // 从文件中读取数据直到没有更多内容：
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // 关闭文件：
    myFile.close();
  } else {
    // 如果文件没有打开，打印错误信息：
    Serial.println("打开test.txt时出错");
  }
}

void loop() {
  // setup后什么都不会发生
}

```

## Seeed Studio XIAO 扩展底板亚克力外壳

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/110010024_Preview-08.png" /></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/XIAO-p-4812.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

我们为保护 Seeed Studio XIAO 扩展底板制作了这个[**亚克力外壳**](https://www.seeedstudio.com/XIAO-p-4812.html)，这些是亚克力外壳组件。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/componets.png" /></div>

与 Seeed Studio XIAO 的 Grove 扩展板相比，Seeed Studio XIAO 扩展底板为用户增加了许多有用的模块。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/board_compare.png" /></div>

这个亚克力外壳易于组装，还能让外壳看起来更整洁。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/build_up.gif" /></div>

## 在带扩展板的 Seeed Studio XIAO SAMD21 上运行 CircuitPython

本教程介绍如何在[**Seeed Studio XIAO SAMD21 开发板**](https://www.seeedstudio.com/Seeeduino-XIAO-Pre-Soldered-p-4747.html)上安装和运行 Adafruit Industries 官方的[**CircuitPython**](https://circuitpython.org/)！

CircuitPython 是一种编程语言，旨在简化在低成本微控制器板上的实验和编程学习。它让入门变得前所未有的简单，无需预先下载桌面软件。一旦设置好开发板，打开任何文本编辑器就可以开始编辑代码。更多信息请参考[**这里**](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython)。

## 安装 CircuitPython

**步骤 1.** 将 Seeed Studio XIAO SAMD21 安装到扩展板上，然后连接 Type-C 数据线。

**步骤 2.** 下载官方的[**Seeed Studio XIAO SAMD21 的 CircuitPython 引导程序**](https://circuitpython.org/board/seeeduino_xiao/)。这是一个 `.uf2` 文件，将存储在您的 PC 下载文件夹中。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circutpyhthon.png" /></div>

**步骤 3.** 通过在 Seeed Studio XIAO 扩展底板上快速按两次复位按钮进入 DFU 引导程序模式，然后您的 PC 将出现 Arduino 驱动器。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/reboot_XIAO.gif" /></div>

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/arduino_boot.png" /></div>

**步骤 4.** 您的 PC 中应该出现一个名为 `Arduino` 的外部驱动器。将下载的 CircuitPython uf2 文件拖到 `Arduino` 驱动器中。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/python_to_arduino.png" /></div>

**步骤 5.** 加载 CircuitPython 引导程序后，拔掉 USB Type-C 并重新连接。应该会出现一个名为 `CIRCUITPY` 的新外部驱动器。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Circuitpy.png" /></div>

**步骤 6.** 现在，CircuitPython 已加载到 Seeed Studio XIAO SAMD21 上！您需要做的就是编写您的 Python 程序，将其命名为 `main.py` 并将其拖到 `CIRCUITPY` 驱动器上。

### CircuitPython 闪烁示例

这是一个简单的示例，介绍如何在 Seeed Studio XIAO 上使用 CircuitPython。

**步骤 1** 在 `CIRCUITPY` 驱动器上创建一个名为 `main` 的 txt 文件。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/main_create.png" /></div>
<br />

:::note
`main` 名称可以是以下之一：**code.txt**、**code.py**、**main.py**、**main.txt**，关于[**此行为**](https://docs.circuitpython.org/en/latest/README.html#behavior)有更多详细信息。
:::

**步骤 2** 使用 REPL 获取橙色 LED 的引脚。有关 REPL 的详细信息，请参阅[欢迎使用 CircuitPython！](https://learn.adafruit.com/welcome-to-circuitpython/the-repl) 要使用 REPL，您首先需要连接到串行控制台。建立连接后，按 CTRL+C 两次进入编辑模式。然后，复制以下代码并分别输入。

```
>>> import board
>>> dir(board)
```

您将看到板上所有可用于代码中的引脚列表。每个板子会根据可用引脚数量略有不同。
![image.png](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/zh-CN/Seeeduino-XIAO-Expansion-Board12.png)

您看到 YELLOW_LED_INVERTED 了吗？这就是您用来闪烁橙色 LED 的引脚！

**步骤 3** 将代码粘贴到 `main` 文件中然后保存，您将看到 Seeed Studio XIAO SAMD21 板上的橙色 LED 闪烁。

**代码**

```py
import time
import board
from digitalio import DigitalInOut, Direction

led = DigitalInOut(board.YELLOW_LED_INVERTED)
led.direction = Direction.OUTPUT

while True:
    led.value = True
    time.sleep(1)
    led.value = False
    time.sleep(1)

```

### 用于 CircuitPython 的 MicroSD 卡

Seeed Studio XIAO SAMD21 内置约 40 KB 闪存，但可能没有足够的空间来存储大型 Python 代码文件，幸运的是，Seeed Studio XIAO SAMD21 扩展板内置了一个 MicroSD 卡插槽用于扩展存储空间，因此您可以按照此说明学习如何在 MicroSD 卡上运行 CircuitPython。

:::note
MicroSD 卡系统格式为 FAT 或 exFAT。如果您使用其他 MicroSD 卡系统格式，将导致 MicroSD 卡无法被识别。
:::
**步骤 1.** 准备一张 micro SD 卡插入 Seeed Studio XIAO SAMD21 扩展板。

**步骤 2.** 假设您尚未下载 [**CircuitPython 文件**](https://circuitpython.org/board/seeeduino_xiao/)，请参考 [**安装 CircuitPython**](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO-Expansion-Board/#installing-circuitpython) 章节。

**步骤 3.** 下载 [**lib**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/lib.zip) 解压文件，然后用新的 lib 替换 `CIRCUITPY` 中的 lib。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/lib_replace.png" /></div>

**步骤 4.** 在 `CIRCUITPY` 驱动器中下载 [**main.py**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/main.py) 文件。

**`main.py` 代码**

```cpp
import sd
f = open("/sd/hello.txt", "r")   ## 从SD卡读取文件
print(f.read())
```

**步骤 5.** 在 `CIRCUITPY` 驱动器中下载 [**sd.py**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/sd.py) 文件。

**`sd.py` 代码**

```cpp
import os
import adafruit_sdcard
import board
import busio
import digitalio
import storage
import sys

# 连接到卡并为 Seeed Studio XIAO 挂载文件系统。
spi = busio.SPI(board.SCK, board.MOSI, board.MISO)
cs = digitalio.DigitalInOut(board.D2)
sdcard = adafruit_sdcard.SDCard(spi, cs)
vfs = storage.VfsFat(sdcard)
storage.mount(vfs, "/sd")
sys.path.append("/sd")
sys.path.append("/sd/lib")  ## 切换到 SD 卡的路径
```

**蜂鸣器示例**

此示例通过在 MicroSD 卡中运行 `buzzer.py` 来测试蜂鸣器。

**步骤 1.** 您可以直接将 [**buzzer.py**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/buzzer.py) 粘贴到 MicroSD 卡中。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/sd_card_store.png" /></div>

**步骤 2.** 在 `CIRCUITPY` 驱动器中打开 `main.py`。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/main.PY.png" /></div>

**步骤 3.** 在 main.py 文件中添加 `import buzzer`。
<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/add_buzzer.png" /></div>

当您完成所有步骤后，蜂鸣器将开始工作。如果您要运行 MicroSD 卡中的其他 python 文件，请模仿此示例。

:::note
如果您想返回 Arduino 模式，只需在 Arduino IDE 上上传任何程序即可。
:::

## 演示

### 项目 1 - 遥控风扇

**概述**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remoteFan-g.gif" /></div>

本教程介绍如何制作一个迷你风扇放在您的房间里保持凉爽。

**特性**

- 自动摆动风扇

**所需组件**

- [**Seeed Studio XIAO SAMD21**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio Expansion Base for XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Grove 迷你风扇**](https://www.seeedstudio.com/Grove-Mini-Fan-v1-1.html)
- [**Grove-舵机**](https://www.seeedstudio.com/Grove-Servo.html)
- [**Grove - IR (红外) 接收器**](https://www.seeedstudio.com/Grove-Infrared-Receiver.html)

**硬件连接**

请按照相同颜色的线将每个传感器连接到板上。请将风扇 grove 线缆连接到 D0，舵机 grove 线缆连接到 **I2C**，IR grove 线缆连接到 **D7**。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_fan_pic.png" /></div>

**Arduino 说明**

**步骤 1**. 按照连接图将所有传感器连接到板上。

**步骤 2**. 安装 [**Arduino-IRremote**](https://github.com/Seeed-Studio/Seeed_Arduino_IRSendRev) 库，这是 [**如何安装库**](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/) 的指南。

**步骤 3**. 复制代码粘贴到 Arduino IDE 中然后上传。

**步骤 4**. 将风扇放置在安全位置，尝试按下按钮确保它能安全工作。

**代码**

```cpp
#include <IRremote.h>
#include <Servo.h>

Servo myservo;  // 创建舵机对象来控制舵机
int RECV_PIN = 7; // 设置引脚2为红外控制

IRrecv irrecv(RECV_PIN);

decode_results results;

int pos = 90;    // 存储舵机位置的变量
int fanPin = 0;  // 设置D6为控制开关
int fanState = LOW;
int IO = 0;

void setup()
{
  Serial.begin(9600);
  Serial.println("Enabling IRin");  // 提醒启用红外
  irrecv.enableIRIn(); // 启动接收器
  Serial.println("Enabled IRin");
  myservo.attach(5);  // 将引脚2上的舵机连接到舵机对象
  pinMode(fanPin, OUTPUT);

}

void loop() {
  if (irrecv.decode(&results)) { //检查红外信号
    if (results.value == 2155829415) {    // 电源关闭/开启
      IO++;
      if (IO % 2 == 0) {
        fanState = HIGH;
        digitalWrite(fanPin, fanState);
        delay(100);
      }
      else {
        fanState = LOW;
        digitalWrite(fanPin, fanState);
        delay(100);
      }
    }

    if (results.value == 2155821255 ) {    // 风扇向左摆动
      for (pos; pos <= 89; pos += 1) { // 从0度到90度
        // 以1度为步长
        myservo.write(pos);              // 告诉舵机转到变量'pos'中的位置

        delay(40);                       // 等待15ms让舵机到达位置
        if (irrecv.decode(&results)) {
          irrecv.resume();
          if (results.value == 2155870215)
            break;
        }
      }
    }

    if (results.value == 2155870215 ) {    // 风扇向右摆动
      for (pos; pos >= 1; pos -= 1) { // 从90度到0度
        myservo.write(pos);              // 告诉舵机转到变量'pos'中的位置
        delay(40);                       // 等待15ms让舵机到达位置

        if (irrecv.decode(&results)) {
          irrecv.resume();
          if (results.value == 2155821255)
            break;
        }
      }
    }
    Serial.println(pos);
    Serial.println(results.value, HEX);
    Serial.println(results.value);
    irrecv.resume();                    //接收下一个指令
  }
  delay(100);
}

```

### 项目2 - 遥控小车

**概述**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_control_car.gif" /></div>

本教程介绍如何制作遥控小车。

**特点**

- 迷你尺寸小车，易于穿越狭窄道路

**所需组件**

- [**Seeed Studio XIAO **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio Expansion Base for XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Grove - I2C Mini Motor Driver**](https://www.seeedstudio.com/Grove-I2C-Mini-Motor-Driver.html)
- [**DC Motor**](https://www.seeedstudio.com/130-DC-Motor-p-2023.html)
- [**Grove - IR (Infrared) Receiver**](https://www.seeedstudio.com/Grove-Infrared-Receiver.html)

**硬件连接**

请按照相同颜色的线将每个传感器连接到板上。请将红外传感器grove线缆连接到D0，Mini Motor Driver grove线缆连接到I2C。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_car.jpg" /></div>

**Arduino说明**

**步骤1**. 按照连接图将所有传感器连接到板上。

**步骤2**. 下载[**Aruidno IDE**](https://www.arduino.cc/en/Main/software)

**步骤3**. 安装[**Arduino-IRremote**](https://github.com/Seeed-Studio/Seeed_Arduino_IRSendRev)和[**Motor driver**](https://github.com/Seeed-Studio/Drv8830_Motor_Driver)库，这是[**如何安装库**](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)的指南。

**步骤4**. 复制代码粘贴到Aruino IDE中然后上传。

**代码**

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <IRremote.h>
#include <SparkFunMiniMoto.h>  // 包含 MiniMoto 库
// 创建两个 MiniMoto 实例，使用不同的地址设置。
MiniMoto motor0(0xC4); // A1 = 1, A0 = clear
MiniMoto motor1(0xC0); // A1 = 1, A0 = 1 (默认)

#define FAULTn  1     // 用于故障检测的引脚。

int RECV_PIN = 0; // 设置引脚 2 作为红外控制
IRrecv irrecv(RECV_PIN);
decode_results results;

void setup() {
  Serial.begin(9600);
  Serial.println("Enabling IRin");  // 提醒启用红外
  irrecv.enableIRIn(); // 启动接收器
  pinMode(FAULTn, INPUT);
}

void loop() {
  if (irrecv.decode(&results)) { //检查红外信号
    if (results.value == 2155862055) {
      //前进  2155862055
      motor0.drive(-600);
      motor1.drive(600);
      delayUntil(20);
    }
    if (results.value == 2155813095) {
      //刹车   2155813095
      motor0.brake();
      motor1.brake();
      delay(100);
    }
    if (results.value == 2155823295) {
      //后退  2155823295
      motor0.drive(600);
      motor1.drive(-600);
      delayUntil(20);
    }
    if (results.value == 2155829415) {
      //停止  2155829415
      motor0.stop();
      motor1.stop();
      delay(100);
    }
    if (results.value == 2155821255) {
      //右转   2155821255
      motor0.drive(600);
      motor1.drive(600);
      delayUntil(20);
    }
    if (results.value == 2155837575) {
      //左转    2155837575
      motor0.drive(-600);
      motor1.drive(-600);
      delayUntil(20);
    }
    irrecv.resume();                    //接收下一个指令

  }
  delay(100);
}

void delayUntil(unsigned long elapsedTime) {
  unsigned long startTime = millis();
  while (startTime + elapsedTime > millis()) {
    if (digitalRead(FAULTn) == LOW) {
      byte result = motor0.getFault();
      result = motor1.getFault();
    }
  }
}
```

### 项目 3 - 指纹解锁宝盒 - Seeed Studio XIAO

**概述**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_open.gif" /></div>

这个盒子可以存放您的重要物品，您不用担心有人会拿走您的东西，该盒子具有指纹功能来保护您的物品，如果指纹验证失败，蜂鸣器会报警，LED环会显示红色，只有在开始时在板上注册了您的指纹，然后将您的手指放在板上，当指纹通过验证时，LED环会显示绿色。

**特点**

- 易于记录您的指纹
- LED环可以提醒您锁定状态
- OLED屏幕可以显示当前信息
- 蜂鸣器可以提醒您指纹是否通过验证

**所需组件**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio Expansion Base for XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - Capacitive Fingerprint Scanner/Sensor**](https://www.hackster.io/products/buy/80263?s=BAhJIhMzNzA5MzAsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove RGB LED Ring - 24**](https://www.hackster.io/products/buy/80264?s=BAhJIhMzNzA5MzAsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - Servo**](https://www.hackster.io/products/buy/80265?s=BAhJIhMzNzA5MzAsUHJvamVjdAY6BkVG%0A)

**硬件连接**

请按照图片所示将每个模块连接到板上。将指纹模块连接到XIAO扩展板的UART端口，将舵机连接到XIAO扩展板的D0端口。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/finger_pinter.png" /></div>

请注意，NeoPixel环通过三根不同颜色的线直接连接到XIAO开发板的引脚：用黄线将NeoPixel环的DIN引脚连接到XIAO的D1引脚，用红线将NeoPixel环的VIN引脚连接到XIAO的3V3引脚，用黑线将NeoPixel环的GND引脚连接到XIAO的GND引脚。

![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/zh-CN/Seeeduino-XIAO-Expansion-Board13.jpeg)

**Arduino说明**

**步骤 1**. 按照连接图将所有传感器连接到板上。

**步骤 2**. 下载[**Arduino IDE**](https://www.arduino.cc/en/Main/software)

**步骤 3**. 安装[**u8g2**](https://github.com/olikraus/U8g2_Arduino)、[**Servo**](https://github.com/arduino-libraries/Servo)、[**Seeed_Arduino_KCT202**](https://github.com/Seeed-Studio/Seeed_Arduino_KCT202)和[**Seeed_LED_Ring**](https://github.com/Seeed-Studio/Seeed_LED_Ring)库，这是[**如何安装库**](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)的指南。

**步骤 4**. 复制代码粘贴到Arduino IDE中然后上传。

**演示**

1. 记录您的指纹

屏幕开始时会显示指纹记录，您只需要将手指放在指纹设备上，之后程序会分析您的指纹，然后完成注册。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_record.gif" /></div>

2. 身份验证（通过认证）

屏幕会显示"请验证"，您需要将手指放在指纹设备上，然后LED环会变成绿色。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_open.gif" /></div>

3. 身份验证（未通过认证）

如果其他人将手指放在上面，LED环会变成红色，板子会显示"身份拒绝"，同时警报会工作。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_close.gif" /></div>

**代码**

```cpp
#include <Servo.h>
#include <Arduino.h>
#include <U8x8lib.h>
#include "ATSerial.h"
#include "Protocol.h"
#include "KCT202.h"
#include "Adafruit_NeoPixel.h"

#define PIXEL_PIN    2    // 连接到NeoPixels的数字IO引脚
#define PIXEL_COUNT 24
#define debug SerialUSB
#define uart  Serial1
FingerPrint_KCT202<Uart, Serial_> kct202;
Adafruit_NeoPixel strip = Adafruit_NeoPixel(PIXEL_COUNT, PIXEL_PIN, NEO_GRB + NEO_KHZ800);

Servo myservo;

Protocol_oprt oprt;
uint8_t err_code = 0;
uint8_t param[10];
uint32_t param_len;
int pos = 0;
const int buttonPin = 1;
int buttonState = 0;
int BuzzerPin = A3;

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  Serial.begin(115200);
  strip.setBrightness(255);
  strip.begin();
  strip.show(); // 将所有像素初始化为'关闭'状态
  colorWipe(strip.Color(125, 0, 125), 50);
  u8x8.begin();
  u8x8.setFlipMode(0);
  debug.begin(115200);
  pinMode(buttonPin, INPUT_PULLUP);
  pinMode(BuzzerPin, OUTPUT);
  kct202.begin(uart, debug);
  myservo.attach(0);
  myservo.write(0);
  kct202.autoRegisterFingerPrint(1, 4, LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP | OVERRIDE_CURR_FINGER_PRINT);

  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 3);
  u8x8.print("finger recording");
  if (0 == kct202.getRegisterResponAndparse()) {
    debug.println("Register ok!");
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print("    be ready    ");
    delay(500);
    colorWipe(strip.Color(0, 125, 125), 50);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 3 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 2 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 1 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   Registered");
    delay(800);
  }
}

void loop(void) {
  uint16_t finger_num = 0;

  kct202.autoVerifyFingerPrint(CHECK_ALL_FINGER_TEMP,
                               LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP);
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 3);
  u8x8.print(" Please verify  ");

  if (0 == kct202.getVerifyResponAndparse(finger_num)) {
    debug.println("Verify ok!");
    debug.print("Your finger temp id = ");
    debug.println(finger_num, HEX);
    colorWipe(strip.Color(0, 255, 30), 50);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print("Identity comfirm");
    delay(800);

    analogWrite(BuzzerPin, 128);
    delay(100);
    analogWrite(BuzzerPin, 0);
    delay(100);
    analogWrite(BuzzerPin, 128);
    delay(100);
    analogWrite(BuzzerPin, 0);
    delay(100);

    for (pos = 0; pos <= 90; pos += 1) {
      myservo.write(pos);
      delay(15);
    }
    while (1) {
      //      pinMode(buttonPin, INPUT);
      buttonState = digitalRead(buttonPin);
      u8x8.setFont(u8x8_font_chroma48medium8_r);
      u8x8.setCursor(0, 3);
      u8x8.print("Please close    ");
      Serial.println(pos);
      Serial.println(buttonState);
      if (buttonState == LOW && pos == 91) {
        for (pos = 91; pos >= 0; pos -= 1) { // 从180度到0度
          u8x8.setFont(u8x8_font_chroma48medium8_r);
          u8x8.setCursor(0, 3);
          u8x8.print("Lock closing    ");
          myservo.write(pos);              // 告诉舵机转到变量'pos'的位置
          delay(15);                       // 等待15ms让舵机到达位置
        }
        colorWipe(strip.Color(255, 0, 0), 50);
        break;
      }
    }
  }

  else {
    colorWipe(strip.Color(255, 0, 0), 50);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print(" Identity deny ");
    //    myservo.write(0);
    delay(200);

  analogWrite(BuzzerPin, 250);
  delay(2000);
    analogWrite(BuzzerPin, 0);
  delay(100);

    u8x8.setCursor(0, 3);
    u8x8.print("  Please retry  ");
    delay(1500);
  }
}

void colorWipe(uint32_t c, uint8_t wait) {
  for (uint16_t i = 0; i < strip.numPixels(); i++) {
    strip.setPixelColor(i, c);
    strip.show();
    delay(70);
  }
}
```

### 项目 4 - Seeed Studio XIAO 扩展底板 - mjolnir

**概述**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/mjolnir/humer1.png" /></div>

这个锤子是模拟雷神之锤 Mjolnir，你需要在这个设备上记录你的指纹，然后你就会成为它的主人。锤子需要磁铁吸附在 Grove - 电磁铁上，直到它的主人通过指纹解锁，锤子才能被拿走。

**所需组件**

- [**Seeed Studio XIAO SAMD21**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio XIAO 扩展底板**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - 电容式指纹扫描器/传感器**](https://www.hackster.io/products/buy/81052?s=BAhJIhMzNzQxMDUsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - 电磁铁**](https://www.hackster.io/products/buy/32769?s=BAhJIhMzNzQxMDUsUHJvamVjdAY6BkVG%0A)

**硬件连接**

请用 Grove 线将扩展底板和所需模块连接，将 Grove 电磁铁模块连接到 D0 端口，将指纹模块连接到 I2C 端口。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/mjolnir/66666.png" /></div>

**Arduino 说明**

**步骤 1**. 按照连接图将所有传感器连接到板上。

**步骤 2**. 下载 [**Arduino IDE**](https://www.arduino.cc/en/Main/software)

**步骤 3**. 安装 [**u8g2**](https://github.com/olikraus/U8g2_Arduino) 和 [**Seeed_Arduino_KCT202**](https://github.com/Seeed-Studio/Seeed_Arduino_KCT202) 库，这是 [**如何安装库**](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/) 的指南。

**步骤 4**. 复制代码粘贴到 Arduino IDE 中然后上传。

**代码**

```cpp
#include <U8x8lib.h>
#include "ATSerial.h"
#include "Protocol.h"
#include "KCT202.h"

#define debug SerialUSB
#define uart  Serial1
FingerPrint_KCT202<Uart, Serial_> kct202;

Protocol_oprt oprt;
uint8_t err_code = 0;
uint8_t param[10];
uint32_t param_len;

int Electromagnet = 0;

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

// 设置程序在按下重置键时运行一次:
void setup() {
  // 将数字引脚初始化为输出。

  u8x8.begin();
  u8x8.setFlipMode(0);
  debug.begin(115200);
  pinMode(Electromagnet, OUTPUT);
  digitalWrite(Electromagnet, HIGH);  // 打开电磁铁 (HIGH是电压电平)
  kct202.begin(uart, debug);
  kct202.autoRegisterFingerPrint(1, 4, LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP | OVERRIDE_CURR_FINGER_PRINT);
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 3);
  u8x8.print("finger recording");
  if (0 == kct202.getRegisterResponAndparse()) {
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print("    be ready    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 3 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 2 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 1 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   Registered");
    delay(800);
  }

}

  // 循环程序永远重复运行:
  void loop() {

    uint16_t finger_num = 0;
    kct202.autoVerifyFingerPrint(CHECK_ALL_FINGER_TEMP, LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print(" Please verify  ");

    if (0 == kct202.getVerifyResponAndparse(finger_num)) {
      u8x8.setFont(u8x8_font_chroma48medium8_r);
      u8x8.setCursor(0, 3);
      u8x8.print("Identity comfirm");
      delay(800);
      digitalWrite(Electromagnet, LOW);  // 打开电磁铁 (HIGH是电压电平)
      delay(5000);
      digitalWrite(Electromagnet, HIGH);
    }

    else {
      u8x8.setFont(u8x8_font_chroma48medium8_r);
      u8x8.setCursor(0, 3);
      u8x8.print(" Identity deny ");
      //    myservo.write(0);
      delay(200);

      u8x8.setCursor(0, 3);
      u8x8.print("  Please retry  ");
      delay(1500);
      digitalWrite(Electromagnet, HIGH);  // 打开电磁铁 (HIGH是电压电平)

    }
  }
```

### 项目 5 - 空气质量传感器集线器 - Seeed Studio XIAO 扩展底板

**概述**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Air_Quality_Sensor_Hub/environment_detect_g.gif" /></div>

这是一个环境检测设备，通过 Grove - 激光 PM2.5 传感器、Grove - CO2 & 温湿度传感器和 Grove - 粉尘传感器分别收集 PM2.5、PM10、温度、湿度、CO2 和粉尘颗粒数据。

**所需组件**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio XIAO 扩展底板**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - Arduino CO2 & 温湿度传感器 (SCD30) - 三合一**](https://www.hackster.io/products/buy/80471?s=BAhJIhMzNzE2NzQsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - 激光 PM2.5 粉尘传感器 - Arduino 兼容 - HM3301**](https://www.hackster.io/products/buy/80472?s=BAhJIhMzNzE2NzQsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - 粉尘传感器（PPD42NS）**](https://www.hackster.io/products/buy/30140?s=BAhJIhMzNzE2NzQsUHJvamVjdAY6BkVG%0A)

**硬件连接**

请按照图表所示连接每个传感器。将 CO2 传感器和 PM2.5 传感器分别连接到两个 I2C 端口，将粉尘传感器连接到 UART 端口。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Air_Quality_Sensor_Hub/environment_detect_g.png" /></div>

**Arduino 说明**

**步骤 1**. 按照连接图将所有传感器连接到板上。

**步骤 2**. 下载 [**Arduino IDE**](https://www.arduino.cc/en/Main/software)

**步骤 3**. 安装 [**u8g2**](https://github.com/olikraus/U8g2_Arduino)、[**Seeed_PM2_5_sensor_HM3301**](https://github.com/Seeed-Studio/Seeed_PM2_5_sensor_HM3301) 和 [**Seeed_SCD30**](https://github.com/Seeed-Studio/Seeed_SCD30) 库，这是 [**如何安装库**](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/) 的指南。

**步骤 4**. 复制代码粘贴到 Arduino IDE 中然后上传。

**代码**

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <Seeed_HM330X.h>
#include "SCD30.h"

#define SERIAL_OUTPUT SerialUSB
#define SERIAL SerialUSB

int pin = 7;
unsigned long duration;
unsigned long starttime;
unsigned long sampletime_ms = 5000;//采样 30s ;
unsigned long lowpulseoccupancy = 0;
float ratio = 0;
float concentration = 0;

const int buttonPin = 1;
int buttonState = 0;
int memu = 0;

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);
HM330X sensor;
uint8_t buf[30];

const char* str[] = {"传感器编号: ", "PM1.0浓度(CF=1,标准颗粒物,单位:ug/m3): ",
                     "PM2.5浓度(CF=1,标准颗粒物,单位:ug/m3): ",
                     "PM10浓度(CF=1,标准颗粒物,单位:ug/m3): ",
                     "PM1.0浓度(大气环境,单位:ug/m3): ",
                     "PM2.5浓度(大气环境,单位:ug/m3): ",
                     "PM10浓度(大气环境,单位:ug/m3): ",
                    };


///////////////////////////////////////////////////////////////////
//PM2.5浓度(大气环境,单位:ug/m3): 数值
///////////////////////////////////////////////////////////////////
HM330XErrorCode print_result(const char* str, uint16_t value) {
  if (NULL == str) {
    return ERROR_PARAM;
  }
  //  SERIAL_OUTPUT.print(str);
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("PM2.5: ");
  u8x8.setCursor(7, 0);
  u8x8.print(value);
  u8x8.setCursor(11, 0);
  u8x8.print("ug/m");
  Serial.println(value);
  return NO_ERROR;
}

HM330XErrorCode print_result_1(const char* str, uint16_t value) {
  if (NULL == str) {
    return ERROR_PARAM;
  }
  //  SERIAL_OUTPUT.print(str);
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("PM10: ");
  u8x8.setCursor(7, 0);
  u8x8.print(value);
  u8x8.setCursor(11, 0);
  u8x8.print("ug/m");
  Serial.println(value);
  return NO_ERROR;
}

/*解析包含29个uint8_t数据的缓冲区*/
HM330XErrorCode parse_result(uint8_t* data) {
  uint16_t value = 0;
  if (NULL == data) {
    return ERROR_PARAM;
  }
  value = (uint16_t) data[6 * 2] << 8 | data[6 * 2 + 1];
  print_result(str[6 - 1], value);
  return NO_ERROR;
}


HM330XErrorCode parse_result2(uint8_t* data) {
  uint16_t value = 0;
  if (NULL == data) {
    return ERROR_PARAM;
  }
  value = (uint16_t) data[7 * 2] << 8 | data[7 * 2 + 1];
  print_result_1(str[7 - 1], value);
  return NO_ERROR;
}

////////////////////////////////////////////////////////////////////

/*30s*/
void setup() {
  Serial.begin(115200);
  Wire.begin();
  u8x8.begin();
  u8x8.setFlipMode(0);
  scd30.initialize();
  pinMode(pin, INPUT);
  pinMode(buttonPin, INPUT_PULLUP);
  starttime = millis();//获取当前时间;

}

void loop() {
  float result[3] = {0};
  duration = pulseIn(pin, LOW);
  lowpulseoccupancy = lowpulseoccupancy + duration;

  buttonState = digitalRead(buttonPin);

  if (buttonState == LOW) {
    memu++;
    delay(15);
    if (memu == 2) {
      memu = 0;
    }
  }
  Serial.println(memu);

  if (scd30.isAvailable() && memu == 0) {
    scd30.getCarbonDioxideConcentration(result);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print("CO2: ");
    u8x8.setCursor(5, 3);
    u8x8.print(result[0]);
    u8x8.setCursor(12, 3);
    u8x8.print("pmm");
    delay(1000);
  }

  if (sensor.read_sensor_value(buf, 29) && memu == 0) {
    SERIAL_OUTPUT.println("HM330X读取结果失败!!!");
  }
  if(memu == 0){
  parse_result(buf);
  }

  if ((millis() - starttime) > sampletime_ms  && memu == 0) {
    ratio = lowpulseoccupancy / (sampletime_ms * 10.0); // 整数百分比 0=>100
    concentration = 1.1 * pow(ratio, 3) - 3.8 * pow(ratio, 2) + 520 * ratio + 0.62; // 使用规格表曲线

    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 6);
    u8x8.print("Dust: ");

    u8x8.setCursor(6, 6);
    u8x8.print(concentration);

    u8x8.setCursor(12, 6);
    u8x8.print("pcs");

    //    Serial.println(concentration);
    lowpulseoccupancy = 0;
    starttime = millis();
  }


  if (scd30.isAvailable() && memu == 1) {
    scd30.getCarbonDioxideConcentration(result);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print("Temp: ");
    u8x8.setCursor(6, 3);
    u8x8.print(result[1]);
    u8x8.setCursor(10, 3);
    u8x8.print(" C   ");

    u8x8.setCursor(0, 6);
    u8x8.print("Humi: ");
    u8x8.setCursor(5, 6);
    u8x8.print(result[2]);
    u8x8.setCursor(8, 6);
    u8x8.print("  %     ");

    delay(1000);
  }

  if (sensor.read_sensor_value(buf, 29) && memu == 1) {
    SERIAL_OUTPUT.println("HM330X读取结果失败!!!");
  }
  if(memu == 1){
  parse_result2(buf);
  }
}
```

### 项目 6 - Seeed Studio XIAO 扩展底板 - 心率监测

**概述**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Heartrate_Monitor_Watch/heartRate.gif" /></div>

这个基于 Seeed Studio XIAO 扩展底板的简单且低成本的项目可以报告心率。
所使用的设备具有 I2C 双线接口，因此将接线保持在最少。

**所需组件**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio XIAO 扩展底板**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - 指夹式心率传感器**](https://www.hackster.io/products/buy/80359?s=BAhJIhMzNzExNzMsUHJvamVjdAY6BkVG%0A)

**硬件连接**

如下图所示，将心率传感器连接到 XIAO 扩展板的 I2C 接口。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Heartrate_Monitor_Watch/heart_detect.png" /></div>

**Arduino 说明**

**步骤 1**. 按照连接图将所有传感器连接到板上。

**步骤 2**. 下载 [**Arduino IDE**](https://www.arduino.cc/en/Main/software)

**步骤 3**. 安装 [**u8g2**](https://github.com/olikraus/U8g2_Arduino) 库，这是 [**如何安装库**](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/) 的指南。

**步骤 4**. 复制代码粘贴到 Arduino IDE 中然后上传。

**代码**

```cpp
#include <Arduino.h>
#include <U8x8lib.h>

#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

void setup() {
  Serial.begin(9600);
  Serial.println("heart rate sensor:");

  u8x8.begin();
  u8x8.setFlipMode(1);
  Wire.begin();
}
void loop() {
  Wire.requestFrom(0xA0 >> 1, 1);    // 从从设备请求 1 字节
  while (Wire.available()) {         // 从设备可能发送少于请求的数据
    unsigned char c = Wire.read();   // 接收心率值（一个字节）
    u8x8.setFont(u8x8_font_chroma48medium8_r);
//    u8x8.setCursor(0, 3);
//    u8x8.print("blood detecting ");
//    delay(10000);

    u8x8.setCursor(0, 3);
    u8x8.print("HeartRate: ");
    u8x8.setCursor(10, 3);
    u8x8.print(c);
    u8x8.setCursor(13, 3);
    u8x8.print("bpm");
    Serial.println(c);

  }
  delay(500);
}
```

## 资源

- **[PDF]**[**ETA1038**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/ETA1038.pdf)
- **[PDF]**[**ETA3410**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/ETA3410.pdf)
- **[PDF]**[**ETA6003**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/ETA6003.pdf)
- **[PDF]**[**PCF8563T**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/PCF8563T.pdf)
- **[PDF]**[**Seeed Studio XIAO 扩展底板_v1.0_SCH_200824**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/Seeeduino%20XIAO%20Expansion%20board_v1.0_SCH_200824.pdf)
- **[SCH]**[**Seeed Studio XIAO 扩展底板_v1.0_200824**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/Seeeduino%20XIAO%20Expansion%20board_v1.0_200824.sch)
- **[BRD]**[**Seeed Studio XIAO 扩展底板_v1.0_200824**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/Seeeduino%20XIAO%20Expansion%20board_v1.0_200824.brd)

## 常见问题

### Q1: XIAO 扩展板上的 PMIC 是否在 5V 引脚上输出电源？

PMIC 不输出电源；5V 直接来自 USB。5V 引脚上提供的电流等于 USB 连接可用的电流。

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