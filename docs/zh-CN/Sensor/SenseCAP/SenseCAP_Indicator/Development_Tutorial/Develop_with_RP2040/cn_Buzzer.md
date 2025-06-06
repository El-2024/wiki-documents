---
description: 蜂鸣器
title: 蜂鸣器
keywords:
- SenseCAP Indicator RP2040 开发教程
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_RP2040_Buzzer
last_update:
  date: 05/15/2025
  author: Thomas
---

# **蜂鸣器**

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

SenseCAP Indicator 的内置蜂鸣器是一个无源蜂鸣器，这意味着它需要一个交流信号（PWM）来触发并输出声音。您可以生成各种音调和效果。

## **基础**

```cpp
#include <Arduino.h>

#define Buzzer  19 // 蜂鸣器 GPIO

void setup() {
  digitalWrite(Buzzer, OUTPUT); // 将蜂鸣器设置为输出
  analogWrite(Buzzer, 127);   // 生成占空比为50%的PWM信号
}

void loop() {
  delay(1000);
  digitalWrite(Buzzer, LOW); // 关闭蜂鸣器
}
```

## **示例代码 1**

此示例使用蜂鸣器播放旋律。它向蜂鸣器发送适当频率的方波，从而生成相应的音调。
"一闪一闪亮晶晶..."

```cpp
#include <Arduino.h>
#define Buzzer  19 // 蜂鸣器 GPIO

int length = 15;         /* 音符数量 */
char notes[] = "ccggaagffeeddc ";
int beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };
int tempo = 300;

void setup() {
    // 将蜂鸣器引脚设置为输出
    pinMode(19, OUTPUT);
}

void loop() {
    for(int i = 0; i < length; i++) {
        if(notes[i] == ' ') {
            delay(beats[i] * tempo);
        } else {
            playNote(notes[i], beats[i] * tempo);
        }
        delay(tempo / 2);    /* 音符之间的延迟 */
    }
}

// 播放音调
void playTone(int tone, int duration) {
    for (long i = 0; i < duration * 1000L; i += tone * 2) {
        digitalWrite(19, HIGH);
        delayMicroseconds(tone);
        digitalWrite(19, LOW);
        delayMicroseconds(tone);
    }
}

void playNote(char note, int duration) {
    char names[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C' };
    int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014, 956 };

    // 播放与音符名称对应的音调
    for (int i = 0; i < 8; i++) {
        if (names[i] == note) {
            playTone(tones[i], duration);
        }
    }
}
```

## **示例代码 2**

此示例演示当 CO2 值大于 1000ppm 时触发报警。

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <SPI.h>
#include <SD.h>
#include <SensirionI2CScd4x.h>

#define Buzzer  19 // 蜂鸣器 GPIO

SensirionI2CScd4x scd4x;
String SDDataString = "";

void sensor_power_on(void) {
  pinMode(18, OUTPUT);
  digitalWrite(18, HIGH);
}

void sensor_scd4x_init(void) {
  uint16_t error;
  char errorMessage[256];

  scd4x.begin(Wire);

  // 停止可能之前启动的测量
  error = scd4x.stopPeriodicMeasurement();
  if (error) {
    Serial.print("尝试执行 stopPeriodicMeasurement() 时出错: ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }

  // 启动测量
  error = scd4x.startPeriodicMeasurement();
  if (error) {
    Serial.print("尝试执行 startPeriodicMeasurement() 时出错: ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }
}

void sensor_scd4x_get(void) {
  uint16_t error;
  char errorMessage[256];

  Serial.print("传感器 scd4x: ");
  // 读取测量值
  uint16_t co2;
  float temperature;
  float humidity;
  error = scd4x.readMeasurement(co2, temperature, humidity);
  if (error) {
    Serial.print("尝试执行 readMeasurement() 时出错: ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else if (co2 == 0) {
    Serial.println("检测到无效样本，跳过。");
  } else {
    Serial.print("CO2:");
    Serial.print(co2);
    Serial.print("\t");
    Serial.print("温度:");
    Serial.print(temperature);
    Serial.print("\t");
    Serial.print("湿度:");
    Serial.println(humidity);
  }

  if( co2 > 1000 ) {
    analogWrite(Buzzer, 10);
  } else {
    analogWrite(Buzzer, 0);
  }
}

int cnt = 0;
void setup() {
  Serial.begin(115200);

  sensor_power_on();

  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();

  sensor_scd4x_init();

  digitalWrite(Buzzer, OUTPUT);
}

void loop() {
  delay(5000);
  sensor_scd4x_get();
}
```

# **技术支持**

别担心，我们为您提供支持！请访问我们的 [Seeed 官方 Discord 频道](https://discord.com/invite/QqMgVwHT3X) 提问！

如果您有大批量订单或定制需求，请联系 iot@seeed.cc