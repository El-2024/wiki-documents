---
description: Seeed Studio XIAO SAMD21 与 Nanase
title: Nanase
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino-XIAO-by-Nanase
last_update:
  date: 05/15/2025
  author: shuxu hu
---

# Seeed Studio XIAO SAMD21 入门指南（由 Nanase 提供）

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

本文档由 [@nanase_coder](https://twitter.com/nanase_coder) 编写。（由 Seeed 从原始日文文档翻译：[コインサイズ Arduino互換機 Seeed Studio XIAO SAMD21 を使ってみた](https://qiita.com/nanase/items/0fed598975c49b1d707e#spi-microsd%E3%82%AB%E3%83%BC%E3%83%89)）。感谢 Nanase 与我们分享！

## 文档

关于 **Seeeduino XIAO** 的使用，有两份文档分别侧重于不同的领域，请参考下表：

|[**Seeed 官方文档**](https://wiki.seeedstudio.com/Seeeduino-XIAO/)|[**Nanase 提供的文档**](https://wiki.seeedstudio.com/Seeeduino-XIAO-by-Nanase/)|
|---|---|
|引脚图|接口|
|Seeed Studio XIAO SAMD21 入门指南|Seeed Studio XIAO SAMD21 与 MicroSD 卡（SPI）|
|Seeed Studio XIAO SAMD21 GPIO 使用|Seeed Studio XIAO SAMD21 与 GPS（UART）|
|Seeed Studio XIAO SAMD21 资源|单周期 IOBUS|

## 特性

* ARM Cortex M0 + CPU (SAMD21G18) 48MHz
* 256 KB Flash，32 KB SRAM
* USB Type-C
* 支持 SPI、I2C、UART、DMA
* 硬币大小（21mm x 17.8mm）
* 逻辑电平：3.3V

电路板背面没有任何元件，所有引脚都带有镀金边孔，便于焊接到其他电路板上。

### 部件清单

- 1 x Seeeduino XIAO
- 2 x 7 针排针
- 4 x 焊片

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F65443a20-c82c-09b8-10e9-6b067e055cb3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=6dd2a53df162d5676a9f8436b91bb7a2) -->
<p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F65443a20-c82c-09b8-10e9-6b067e055cb3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=6dd2a53df162d5676a9f8436b91bb7a2" alt="pir" width={600} height="auto" /></p>

镀金边孔：

<!-- ![image](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Castellated-holes-of-xiao-jp.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Castellated-holes-of-xiao-jp.jpg" alt="pir" width={600} height="auto" /></p>

## 规格

|  | 规格 |
| --- | --- |
| CPU | ARM Cortex-M0+ CPU (SAMD21G18)，最高运行频率 48MHz（由 32.768 kHz 倍频） |
| 存储 | 256KB Flash，32KB SRAM |
| I/O 引脚 | 14 个 GPIO 引脚，11 个模拟引脚，11 个数字引脚，1 个 DAC 输出引脚 |
| 引脚功能 | SPI、I2C、UART、PWM、外部中断、SWD（电源焊盘） |
| 逻辑电平 | 3.3V |
| LED | 1 个用户 LED，1 个电源 LED，2 个串口下载 LED |
| 电源 | USB Type-C 接口，背面电源焊盘 |
| 尺寸 | 21x17.8x3.5mm |

如您所见，这是一个基于 SAMD 的 Arduino，与 Arduino MKR 系列类似，因此技术上可以使用为它们编写的任何库在 Seeed Studio XIAO SAMD21 上运行。另一方面，由于它与基于 ATmega 的 Arduino（如 Arduino Uno）不同，依赖于 ATmega 特定寄存器的库无法使用。

GPIO 14 引脚包括侧面的 11 个引脚、复位引脚以及背面的 SWD（SWDIO、SWCLK）。

引脚功能中的 UART 不同于通过 USB 的串口通信，可以通过 `Serial1` 操作。

## 重置您的开发板

请查看[此处](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)，了解如何将 Seeed Studio XIAO SAMD21 添加到您的 Arduino IDE。

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fd8ff0409-7841-0a07-f9aa-ee49fef757b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=c44f4d6b316014dd3a10476ad49311fd) -->
<p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fd8ff0409-7841-0a07-f9aa-ee49fef757b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=c44f4d6b316014dd3a10476ad49311fd" alt="pir" width={600} height="auto" /></p>

Seeed Studio XIAO SAMD21 没有复位按钮，而是提供了一个复位焊盘。
短接此复位焊盘并接地即可重置开发板。

## Bootloader 模式

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9a0107ab-2584-1251-c3c3-184ef2a216ee.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=f688d27c6a82bc7e51932b4504ebd9e1) -->
<p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9a0107ab-2584-1251-c3c3-184ef2a216ee.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=f688d27c6a82bc7e51932b4504ebd9e1" alt="pir" width={600} height="auto" /></p>

有时程序可能会崩溃，或者无法上传草图。您可以快速重置开发板两次以进入 Bootloader 模式。在此模式下，LED 会缓慢闪烁，Seeed Studio XIAO SAMD21 会被识别为 USB 存储设备。串口与正常模式分离，并始终处于草图写入模式，而不会运行开发板上的先前程序。

要从 Bootloader 模式返回到正常模式，可以上传草图或再次快速重置两次。

如果在 Bootloader 模式下，Seeed Studio XIAO SAMD21 未被 PC 识别为 USB 设备，LED 将快速闪烁。

## LCD

与原始 Arduino 类似，从示例草图中选择 Basics > Blink 并上传。

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
```

与原始 Arduino 相反，LED 在 LOW 时点亮，在 HIGH 时熄灭。

### 两个可闪烁的内置 LED

官方文档描述了另外两个内置 LED 为 `串口下载的两个 LED`。然而，从原理图来看，这些 RX 和 TX LED 没有物理引脚连接。

如果你查看 [USBCore.cpp](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/1.7.2/cores/arduino/USB/USBCore.cpp#L622-L627)，可以看到每次串行 USB 传输/接收发生时，LED 都会通过 `digitalWrite` 被点亮，这意味着这两个 LED 是可编程的。

```cpp
uint32_t USBDeviceClass::recv(uint32_t ep, void *_data, uint32_t len)
{
    if (!_usbConfiguration)
        return -1;

#ifdef PIN_LED_RXL
    if (rxLEDPulse == 0)
        digitalWrite(PIN_LED_RXL, LOW); // 如果 rxLEDPulse 为 0，则点亮 RX LED

    rxLEDPulse = TX_RX_LED_PULSE_MS; // 设置 RX LED 的脉冲持续时间
#endif
```

具体的引脚编号在 `variant.h / variant.cpp` 中定义，例如在 SAMD Arduino 中，而对于 Seeeduino XIAO，它们被分配为 11 和 12，如下所示：

```cpp
#define PIN_LED_13  (13u)
#define PIN_LED     PIN_LED_13
#define LED_BUILTIN PIN_LED

#define PIN_LED_RXL          (12u) // RX LED 引脚
#define PIN_LED_TXL          (11u) // TX LED 引脚
#define PIN_LED2             PIN_LED_RXL
#define PIN_LED3             PIN_LED_TXL
```

以下是一个让三个 LED 闪烁的示例代码。RX 和 TX 的 LED 是蓝色的。

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT); // 设置内置 LED 为输出模式
  pinMode(PIN_LED2, OUTPUT);    // 设置 RX LED 为输出模式
  pinMode(PIN_LED3, OUTPUT);    // 设置 TX LED 为输出模式
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH); // 点亮内置 LED
  digitalWrite(PIN_LED2, HIGH);    // 点亮 RX LED
  digitalWrite(PIN_LED3, HIGH);    // 点亮 TX LED
  delay(1000);                     // 延迟 1 秒
  digitalWrite(LED_BUILTIN, LOW);  // 熄灭内置 LED
  digitalWrite(PIN_LED2, LOW);     // 熄灭 RX LED
  digitalWrite(PIN_LED3, LOW);     // 熄灭 TX LED
  delay(1000);                     // 延迟 1 秒
}
```

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F94756423-5b1b-e4af-1dac-5fe238689b0a.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=8e0d97933fbf6fbb4ccfe6cd66c1adf0) -->
<p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F94756423-5b1b-e4af-1dac-5fe238689b0a.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=8e0d97933fbf6fbb4ccfe6cd66c1adf0" alt="pir" width={600} height="auto" /></p>

## 接口

### USB CDC 串行通信

与 ATmega 类型的 Arduino 不同，Seeed Studio XIAO SAMD21 的串行通信实际上是通过 USB CDC 实现的。换句话说，它的速度比普通串行通信更快。

因此，通过 `Serial.begin (speed)` 指定波特率没有意义，但除了这一点外，它可以像普通串行通信一样使用。

### 测量速度

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fc18063f3-999d-6d2a-a5ad-01a137309f9a.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26eda0dc6f1070e2085a15821ec6b4b9) -->
<p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fc18063f3-999d-6d2a-a5ad-01a137309f9a.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26eda0dc6f1070e2085a15821ec6b4b9" alt="pir" width={600} height="auto" /></p>

我使用 [这个代码](https://gist.github.com/nanase/6cc57e14a572196baefd893ade67d32e) 测量了从 Seeed Studio XIAO SAMD21 到 PC 的传输速度，从 PC 到 Seeed Studio XIAO SAMD21 的传输速率应该是相同的。

横轴表示缓冲区大小（通过 `Serial.write (buf, len)` 一次发送的字节数）。  
如果每次发送 1 字节，速度只有 0.11 Mbps（14.53 KB/s）；但如果每次发送 64 字节，速度会显著提高到 6.30 Mbps（805.86 KB/s）。可以推测内部缓冲区的大小为 64 字节。

如上所述，在串行通信中 LED 会闪烁，但几乎没有因此导致的速度下降。

### SPI（MicroSD 卡）

Seeed Studio XIAO SAMD21 的逻辑电平为 3.3V。换句话说，可以通过 SPI 直接操作 microSD 卡而无需电平转换器。  
SPI 的某些功能与 ATmega 类型的 Arduino 不同，详情请参考 [这里](https://qiita.com/nanase/items/406a8a848d1b259d3af4)。

这里我们使用秋月电子的 [micro SD 卡槽 DIP 套件](http://akizukidenshi.com/catalog/g/gK-05488/) 来读取 microSD 卡。

我们使用 Arduino 示例代码，但 `SD.begin (cs_pin)` 的参数需要指定为 `SS`。根据 `variant.h`，SS = 4，与 D4/A4/SDA 引脚相同。当然，你也可以指定其他引脚。

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fba2f4257-e0ca-a525-4afd-793296235f7b.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=122cf093757e673a26309a4c54602956) -->
<p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fba2f4257-e0ca-a525-4afd-793296235f7b.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=122cf093757e673a26309a4c54602956" alt="pir" width={600} height="auto" /></p>

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fb10e707a-949d-e937-95c3-8c5b3d7f56bc.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=1d1117fd8be3286bdd235671098973dd) -->
<p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fb10e707a-949d-e937-95c3-8c5b3d7f56bc.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=1d1117fd8be3286bdd235671098973dd" alt="pir" width={600} height="auto" /></p>

```cpp
#include <SPI.h>
#include <SD.h>

File myFile;

void setup() {
  Serial.begin(9600);
  while (!Serial) ; // 等待串口初始化完成

  Serial.print("Initializing SD card... ");

  if (!SD.begin(SS)) { // <-------------------------------- SS = D4/A4/SDA 引脚
    Serial.println("initialization failed!"); // 初始化失败
    while (1) ;
  }
  Serial.println("initialization done."); // 初始化完成

  myFile = SD.open("test.txt", FILE_WRITE);

  if (myFile) {
    Serial.print("Writing to test.txt...");
    myFile.println("testing 1, 2, 3."); // 写入测试数据

    myFile.close();
    Serial.println("done."); // 写入完成
  }
  else
    Serial.println("error opening test.txt"); // 打开文件失败

  myFile = SD.open("test.txt");
  if (myFile) {
    Serial.println("test.txt:");

    while (myFile.available())
      Serial.write(myFile.read()); // 读取文件内容

    myFile.close();
  }
  else
    Serial.println("error opening test.txt"); // 打开文件失败
}

void loop() { }
```

结果：

```
初始化 SD 卡...初始化完成。
写入 test.txt...完成。
test.txt:
测试 1, 2, 3。
```

### I2C

I2C 也可用。3.3V 设备可以直接连接，无需电平转换器。

这次我们使用 BME280 来测量温度、湿度和大气压力。BME280 工作电压为 3.3V，因此可以直接连接，无需电平转换器。有关 Arduino 和 BME280 连接的详细说明，请查看 [这里](https://qiita.com/nanase/items/f34e03c29410add9c4d0)。

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F19f35ca3-f9a6-33d6-124b-a37cf9d1344c.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=1f51b8fa4b19fbe4df4707da8ef9ec58) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F19f35ca3-f9a6-33d6-124b-a37cf9d1344c.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=1f51b8fa4b19fbe4df4707da8ef9ec58" alt="pir" width={600} height="auto" /></p>

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9fc6d103-1dce-e367-7ef4-ba1be6ee50b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26e6b8e99374c545265758ea41ba218c) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9fc6d103-1dce-e367-7ef4-ba1be6ee50b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26e6b8e99374c545265758ea41ba218c" alt="pir" width={600} height="auto" /></p>

```cpp
#include <Wire.h>
#include "SparkFunBME280.h"

BME280 sensor;

void setup() {
  Serial.begin(9600);
  Wire.begin();
  sensor.beginI2C(); // 使用 Wire 开始 I2C 连接
}

void loop() {
  Serial.print("温度: ");
  Serial.print(sensor.readTempC(), 2);

  Serial.print(" °C, 湿度: ");
  Serial.print(sensor.readFloatHumidity(), 2);

  Serial.print(" %, 压力: ");
  Serial.print(sensor.readFloatPressure() / 100.0, 1);
  Serial.println(" hPa");

  delay(5000);
}
```

结果：

```
温度: 22.05 °C, 湿度: 44.99 %, 压力: 1009.0 hPa
温度: 22.05 °C, 湿度: 44.72 %, 压力: 1008.9 hPa
温度: 22.06 °C, 湿度: 44.81 %, 压力: 1008.9 hPa
```

### UART

如前所述，物理 UART 引脚与 USB CDC 的引脚不同。`Serial1` 用于使用 TX 和 RX 引脚进行串行通信。

这次，我们将 Seeed Studio XIAO SAMD21 连接到 GPS 接收器套件，并从 PC 获取 NMEA 信息。使用 Xiao 时，这是一项非常简单的工作，它只是 GPS 套件和 PC 串行之间的桥梁。

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Ff304a688-f887-a7f4-5cd1-17be3f39815b.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=74e3abdb6a325a7076b4260b14ac0ef8) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Ff304a688-f887-a7f4-5cd1-17be3f39815b.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=74e3abdb6a325a7076b4260b14ac0ef8" alt="pir" width={600} height="auto" /></p>

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F6fbef634-ae29-3a9b-1760-d3419524df31.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=3fea2b970a346d758a31bf8a4ff77c3a) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F6fbef634-ae29-3a9b-1760-d3419524df31.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=3fea2b970a346d758a31bf8a4ff77c3a" alt="pir" width={600} height="auto" /></p>

```cpp
void setup() {
  Serial.begin(9600);
  Serial1.begin(9600);
}

void loop() {
  if (Serial.available()) {
    char c = (char)Serial.read();
    Serial1.write(c);
  }

  if (Serial1.available()) {
    char c = (char)Serial1.read();
    Serial.write(c);
  }
}
```

这次我们使用 GPSFox 来查看 NMEA 信息，可以轻松测量坐标。

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F76361d26-4036-aea5-bcdd-d38f30cf16e3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=e346fb482f4d33f4b368c9b812a94308) -->
<p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F76361d26-4036-aea5-bcdd-d38f30cf16e3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=e346fb482f4d33f4b368c9b812a94308" alt="pir" width={600} height="auto" /></p>

## 其他功能

### DMA（直接存储器访问）

作为 SAMD 系列 Arduino 的一项功能，Xiao 支持使用 DMA（直接存储器访问）。有关 DMA 的更多信息，请查阅 [这里](https://qiita.com/nanase/items/406a8a848d1b259d3af4#dma)。

### 单周期 IOBUS（Single Cycle IOBUS）

Cortex M0+ 具有一种称为 [单周期 IOBUS（Single Cycle IOBUS）](https://microchipdeveloper.com/32arm:samd21-iobus-overview) 的功能，可在一个时钟周期内操作 GPIO 输出。通过写入特定寄存器，可以实现逻辑反转、禁用引脚或更改引脚驱动电流等功能。

### digitalWrite

你可以使用 `digitalWrite` 来生成脉冲。这是一种适用于所有 Arduino 板的方法，但每次调用都会产生一定的开销。

```cpp
void setup() {
  pinMode(PIN_A7, OUTPUT);
}

#define P                     \
  digitalWrite(PIN_A7, HIGH); \
  digitalWrite(PIN_A7, LOW);

#define W P P P P P P P P P P P P P P P P
void loop() { W W W W W W W W W W W W W W W W }
```

### 使用寄存器

你也可以通过直接操作寄存器来生成脉冲，而无需使用 `digitalWrite`。

```cpp
void setup() {
  pinMode(PIN_A7, OUTPUT);
}

#define P                                                             \
  digitalPinToPort(PIN_A7)->OUTSET.reg = digitalPinToBitMask(PIN_A7); \
  digitalPinToPort(PIN_A7)->OUTCLR.reg = digitalPinToBitMask(PIN_A7);

#define W P P P P P P P P P P P P P P P P
void loop() { W W W W W W W W W W W W W W W W }
```

### 使用单周期 IOBUS

我们使用在[此处](https://lab.sasapea.mydns.jp/2020/03/16/seeeduino-xiao/)介绍的 `IOBUS.h` 库来实现。

```cpp
#include "IOBUS.h"

#define digitalPinToIOPin(P) ((g_APinDescription[P].ulPort << 5) + g_APinDescription[P].ulPin)
#define PIN_NUM digitalPinToIOPin(PIN_A7)

void setup() {
  IOBUS::pinMode(PIN_NUM, OUTPUT, true);
}

#define P IOBUS::toggleOutput(PIN_NUM);

#define W P P P P P P P P P P P P P P P P
void loop() { W W W W W W W W W W W W W W W W }
```

|  | DigitalWrite | 寄存器 | 单周期 IOBUS |
| --- | --- | --- | --- |
| 波形 |<p><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9a269f4e-5bd0-8eb4-127e-14b8d239a6a3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=7099c88e5d117efd215ba24fefa7448b" alt="pir" width={600} height="auto" /></p> |<p><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F84a04db3-c854-8862-d253-6ff8fc94aa8f.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=d20b7a169be510b3f73e0bea1c97f2bf" alt="pir" width={600} height="auto" /></p>|<p><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F4358d74f-285c-6d16-1cc3-809946c42125.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=d2e46ad06befc79f8b897fc538f1de89" alt="pir" width={600} height="auto" /></p> |
| 频率 | 333 kHz | 6 MHz | 24 MHz |
| 产生一个脉冲所需的时钟周期数 | 144 | 8 | 2 |

逻辑确实可以在一个周期内反转（48MHz）。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>