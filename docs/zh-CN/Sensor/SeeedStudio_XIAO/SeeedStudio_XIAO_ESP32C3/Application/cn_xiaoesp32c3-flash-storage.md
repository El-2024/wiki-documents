---
description: XIAO ESP32C3 Flash存储
title: XIAO ESP32C3 Flash存储
keywords:
- XIAO ESP32C3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/xiaoesp32c3-flash-storage
last_update:
  date: 03/03/2023
  author: Citric
---

# XIAO ESP32C3 以不同方式永久存储数据

当我们使用开发板时，许多人都希望能够使用芯片上的闪存来存储一些重要数据。这需要一种存储方法，确保即使在开发板异常情况下也不会丢失数据。

本教程将介绍如何通过以下两种不同的存储方法在XIAO ESP32C3的闪存上存储重要数据：

1. 第一个指南展示如何使用`Preferences.h`库在ESP32闪存上**永久保存数据**。存储在闪存中的数据在重启或断电后仍然保持。使用`Preferences.h`库对于保存网络凭据、API密钥、阈值或甚至GPIO的最后状态等数据非常有用。您将学习如何从闪存中保存和读取数据。

2. 第二个指南解释了什么是XIAO ESP32C3的**EEPROM**以及它的用途。我们还将向您展示如何从EEPROM写入和读取数据，并构建一个项目示例来将所学概念付诸实践。

本文的绝大部分内容来自[**RandomNerdTutorials.com**](https://randomnerdtutorials.com/)，一些程序和描述已经稍作修改以适配XIAO ESP32C3。特别感谢[**RandomNerdTutorials.com**](https://randomnerdtutorials.com/)提供的教程和方法。以下是原始资源的直接链接。

- [ESP32 Flash Memory – Store Permanent Data (Write and Read)](https://randomnerdtutorials.com/esp32-flash-memory/)

- [Arduino EEPROM Explained – Remember Last LED State](https://randomnerdtutorials.com/arduino-eeprom-explained-remember-last-led-state/)

- [ESP32 Save Data Permanently using Preferences Library](https://randomnerdtutorials.com/esp32-save-data-permanently-preferences/)

## 使用Preferences库永久保存数据

### Preferences.h库

当您在Arduino IDE中安装XIAO ESP32C3开发板时，此库会"自动"安装。

`Preferences.h`库最好用于通过键值对存储变量值。永久保存数据对以下情况很重要：

- 记住变量的最后状态；

- 保存设置；

- 保存设备被激活的次数；

- 或任何其他需要永久保存的数据类型。

如果您想使用XIAO ESP32C3存储文件或非常长的字符串或数据，我们建议您使用扩展板和SD卡，我们不建议您使用本教程中的两种方法。

以下是**Preferences.h库的有用函数**

**函数1**. `begin()`方法使用定义的命名空间打开一个"存储空间"。false参数意味着我们将在读写模式下使用它。使用true以只读模式打开或创建命名空间。

```c
preferences.begin("my-app", false);
```

在这种情况下，命名空间名称是my-app。命名空间名称限制为15个字符。

**函数2**. 使用`clear()`清除打开的命名空间下的所有首选项（它不会删除命名空间）：

```c
preferences.clear();
```

**函数3**. 从打开的命名空间中删除一个键：

```c
preferences.remove(key);
```

**函数4**. 使用`end()`方法关闭打开的命名空间下的首选项：

```c
preferences.end();
```

**函数5**. 您应该根据要保存的变量类型使用不同的方法。

使用`Preferences.h`库时，您应该定义要保存的数据类型。稍后，如果您想读取该数据，您必须知道保存的数据类型。换句话说，写入和读取的数据类型应该相同。

您可以使用`Preferences.h`保存以下数据类型：char、Uchar、short、Ushort、int、Uint、long、Ulong、long64、Ulong64、float、double、bool、string和bytes。

<table align="center">
  <tbody><tr>
      <td align="center">Char</td>
      <td align="left"><code>putChar(const char*key, int8_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Char</td>
      <td align="left"><code>putUChar(const char* key, int8_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Short</td>
      <td align="left"><code>putShort(const char*key, int16_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Short</td>
      <td align="left"><code>putUShort(const char* key, uint16_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Int</td>
      <td align="left"><code>putInt(const char*key, int32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Int</td>
      <td align="left"><code>putUInt(const char* key, uint32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Long</td>
      <td align="left"><code>putLong(const char*key, int32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Long</td>
      <td align="left"><code>putULong(const char* key, uint32_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Long64</td>
      <td align="left"><code>putLong64(const char*key, int64_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Unsigned Long64</td>
      <td align="left"><code>putULong64(const char* key, uint64_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Float</td>
      <td align="left"><code>putFloat(const char*key, const float_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Double</td>
      <td align="left"><code>putDouble(const char* key, const double_t value)</code></td>
    </tr>
    <tr>
      <td align="center">Bool</td>
      <td align="left"><code>putBool(const char*key, const bool value)</code></td>
    </tr>
    <tr>
      <td align="center">String</td>
      <td align="left"><code>putString(const char* key, const String value)</code></td>
    </tr>
    <tr>
      <td align="center">Bytes</td>
      <td align="left"><code>putBytes(const char*key, const void* value, size_t len)</code></td>
    </tr>
  </tbody></table>

**功能 6**. 同样，您应该根据要获取的变量类型使用不同的方法。

<table align="center">
    <tr>
     <td align="center">Char</td>
     <td align="left"><code>getChar(const char*key, const int8_t defaultValue)</code></td>
 </tr>
 <tr>
     <td align="center">Unsigned Char</td>
     <td align="left"><code>getUChar(const char* key, const uint8_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Short</td>
     <td align="left"><code>getShort(const char*key, const int16_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Short</td>
     <td align="left"><code>getUShort(const char* key, const uint16_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Int</td>
     <td align="left"><code>getInt(const char*key, const int32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Int</td>
     <td align="left"><code>getUInt(const char* key, const uint32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Long</td>
     <td align="left"><code>getLong(const char*key, const int32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Long</td>
     <td align="left"><code>getULong(const char* key, const uint32_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Long64</td>
     <td align="left"><code>getLong64(const char*key, const int64_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Unsigned Long64</td>
     <td align="left"><code>gettULong64(const char* key, const uint64_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Float</td>
     <td align="left"><code>getFloat(const char*key, const float_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Double</td>
     <td align="left"><code>getDouble(const char* key, const double_t defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">Bool</td>
     <td align="left"><code>getBool(const char*key, const bool defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">String</td>
     <td align="left"><code>getString(const char* key, const String defaultValue)</code></td>
 </tr>
    <tr>
     <td align="center">String</td>
     <td align="left"><code>getString(const char*key, char* value, const size_t maxLen)</code></td>
 </tr>
    <tr>
     <td align="center">Bytes</td>
     <td align="left"><code>getBytes(const char*key, void* buf, size_t maxLen)</code></td>
 </tr>
</table>

**功能 7**. 删除命名空间

在 Preferences 的 Arduino 实现中，没有完全删除命名空间的方法。因此，在多个项目过程中，ESP32 非易失性存储 (nvs) Preferences 分区可能会变满。要完全擦除和重新格式化 Preferences 使用的 NVS 内存，请创建一个包含以下内容的程序：

```c
#include <nvs_flash.h>

void setup() {
  nvs_flash_erase(); // 擦除 NVS 分区并...
  nvs_flash_init(); // 初始化 NVS 分区。
  while(true);
}

void loop() {

}
```

运行上述程序后，您应该立即将新程序下载到您的开发板，否则每次上电时都会重新格式化 NVS 分区。

有关更多信息，您可以在[这里](https://github.com/espressif/arduino-esp32/blob/master/libraries/Preferences/src/Preferences.cpp)访问 Preferences.cpp 文件。

### 使用 Preferences.h 库的一般方法

**步骤 1.** 要使用 Preferences.h 库存储数据，首先需要在程序中包含它：

```c
#include <Preferences.h>
```

**步骤 2.** 然后，您必须创建 Preferences 库的实例。例如，您可以称其为 preferences：

```c
Preferences preferences;
```

**步骤 3.** 在 `setup()` 中，以 115200 波特率初始化串行监视器。

```c
Serial.begin(115200);
```

**步骤 4.** 在闪存中创建一个名为 `my-app` 的"存储空间"，以读/写模式运行。您可以给它任何其他名称。

```c
preferences.begin("my-app", false);
```

**步骤 5.** 使用 get 和 put 方法来获取/存储数据内容。

#### 存储/获取键值对数据

使用 preferences 保存的数据结构如下：

```c
namespace {
  key:value
}
```

您可以在同一个命名空间中保存不同的键，例如：

```c
namespace {
  key1: value1
  key2: value2
}
```

您也可以有多个命名空间使用相同的键（但每个键都有其值）：

```c
namespace1{
  key:value1
}
namespace2{
  key:value2
}
```

例如，在"counter"键上存储新值：

```c
preferences.putUInt("counter", counter);
```

然后，获取保存在 preferences 中的 `counter` 键的值。如果找不到任何值，默认返回 0（这在代码第一次运行时会发生）。

```c
unsigned int counter = preferences.getUInt("counter", 0);
```

因此，您的数据结构如下：

```c
my-app{
  counter: counter
}
```

#### 存储/获取字符串数据

以下代码使用 `Preferences.h` 将您的网络凭据永久保存在 ESP32 闪存中。

创建一个名为 ssid 的键来保存您的 SSID 值（ssid 变量）- 使用 `putString()` 方法。

```c
preferences.putString("ssid", ssid);
```

添加另一个名为 password 的键来保存密码值（password 变量）：

```c
preferences.putString("password", password);
```

因此，您的数据结构如下：

```c
my-app{
  ssid: ssid
  password: password
}
```

使用 `getString()` 方法获取 SSID 和密码值。您需要使用保存变量时使用的键名，在这种情况下是 ssid 和 password 键：

```c
String ssid = preferences.getString("ssid", ""); 
String password = preferences.getString("password", "");
```

作为 `getString()` 函数的第二个参数，我们传递了一个空字符串。这是在 preferences 中没有保存 `ssid` 或 `password` 键时的返回值。

**步骤 6.** 关闭 Preferences。

```c
preferences.end();
```

- 存储/获取键值对数据的完整过程如下所示。

```c
#include <Preferences.h>

Preferences preferences;

void setup() {
  Serial.begin(115200);
  delay(3000);
  Serial.println();

  // 使用 my-app 命名空间打开 Preferences。每个应用程序模块、库等
  // 都必须使用命名空间名称来防止键名冲突。我们将以
  // RW 模式打开存储（第二个参数必须为 false）。
  // 注意：命名空间名称限制为 15 个字符。
  preferences.begin("my-app", false);

  // 删除打开的命名空间下的所有 preferences
  //preferences.clear();

  // 或仅删除 counter 键
  //preferences.remove("counter");

  // 获取 counter 值，如果键不存在，返回默认值 0
  // 注意：键名限制为 15 个字符。
  unsigned int counter = preferences.getUInt("counter", 0);

  // counter 增加 1
  counter++;

  // 将 counter 打印到串行监视器
  Serial.printf("Current counter value: %u\n", counter);

  // 将 counter 存储到 Preferences
  preferences.putUInt("counter", counter);

  // 关闭 Preferences
  preferences.end();

  // 等待 10 秒
  Serial.println("Restarting in 10 seconds...");
  delay(10000);

  // 重启 ESP
  ESP.restart();
}

void loop() {

}
```

将代码上传到您的开发板，您应该在串口监视器中看到以下内容：

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/1.png"/></div>

- 存储/获取字符串数据的完整过程如下所示。

使用 `Preferences.h` 保存网络凭据。

```c
#include <Preferences.h>

Preferences preferences;

const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";

void setup() {
  Serial.begin(115200);
  delay(3000);
  Serial.println();

  preferences.begin("credentials", false);
  preferences.putString("ssid", ssid); 
  preferences.putString("password", password);

  Serial.println("Network Credentials Saved using Preferences");

  preferences.end();
}

void loop() {

}
```

将代码上传到您的开发板，您应该在串口监视器中看到以下内容：

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/2.png"/></div>

使用保存在 Preferences 中的网络凭据连接到 Wi-Fi。

```c
#include <Preferences.h>
#include "WiFi.h"

Preferences preferences;

String ssid;
String password;

void setup() {
  Serial.begin(115200);
  delay(3000);
  Serial.println();
  
  preferences.begin("credentials", false);
 
  ssid = preferences.getString("ssid", ""); 
  password = preferences.getString("password", "");

  if (ssid == "" || password == ""){
    Serial.println("No values saved for ssid or password");
  }
  else {
    // Connect to Wi-Fi
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    delay(100);
    WiFi.begin(ssid.c_str(), password.c_str());
    Serial.print("Connecting to WiFi ");
    Serial.println(ssid);
    Serial.println(password);
    while (WiFi.status() != WL_CONNECTED) {
      Serial.print('.');
      delay(1000);
    }
    Serial.println(WiFi.localIP());  
  }
}

void loop() {
  // put your main code here, to run repeatedly:
}
```

在上一个代码之后将此代码上传到您的开发板（以确保您已保存凭据）。如果一切按预期进行，您应该在串口监视器中看到以下内容。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/3.png"/></div>

## 使用 EEPROM 存储永久数据

### 什么是 EEPROM？

EEPROM 是 ESP32 微控制器的内部存储器，允许在重启开发板后将数据保留在内存中。在使用微控制器时，保持数据在内存中是很有意义的，特别是当开发板关闭时，无论是有意还是无意的，比如在断电的情况下。

ESP32 微控制器有一个闪存区域，可以像 Arduino 的 EEPROM 一样进行接口操作，即使在开发板关闭后也能将数据保留在内存中。

:::caution
需要注意的重要一点是，EEPROM 的大小和寿命是有限的。内存单元可以根据需要读取任意次数，但写入周期数限制为 **100,000** 次。建议密切关注存储数据的大小以及更新频率。EEPROM 内存可以存储 512 个从 0 到 255 的值，或 128 个 IP 地址或 RFID 标签。
:::

ESP32 上的微控制器具有 EEPROM（电可擦可编程只读存储器）。这是一个可以存储字节变量的小空间。存储在 EEPROM 中的变量会保留在那里，即使您重置或关闭 ESP32 电源也是如此。简单来说，EEPROM 是类似于计算机硬盘的永久存储。

EEPROM 可以电子方式读取、擦除和重写。在 Arduino 中，您可以使用 EEPROM 库轻松地从 EEPROM 读取和写入。

每个 EEPROM 位置可以保存一个字节，这意味着您只能存储 8 位数字，包括 0 到 255 之间的整数值。

### 可用的 EEPROM 函数

要使用 Arduino IDE 从 ESP32 闪存读取和写入，我们将使用 EEPROM 库。在 ESP32 上使用此库与在 Arduino 上使用非常相似。因此，如果您之前使用过 Arduino EEPROM，这没有太大区别。

所以，我们也建议查看我们关于 [Arduino EEPROM](https://randomnerdtutorials.com/arduino-eeprom-explained-remember-last-led-state/) 的文章。

**函数 1**. 初始化内存大小

在使用函数之前，我们必须使用 `EEPROM.begin()` 初始化内存大小。

```c
EEPROM.begin(EEPROM_SIZE);
```

**函数 2**. Write & Put

要将数据写入 EEPROM，您使用 `EEPROM.write()` 函数，该函数接受两个参数。第一个是您要保存数据的 EEPROM 位置或地址，第二个是我们要保存的值：

```c
EEPROM.write(address, value);
```

`EEPROM.write()` 等同于使用 `EEPROM.put()`。

```c
EEPROM.put(address, value);
```

例如，要在地址 0 写入 9，您将有：

```c
EEPROM.write(0, 9);
```

:::tip
如果我们想要存储浮点数据，我们通常使用 `EEPROM.put()` 方法而不是 `EEPROM.write()` 方法。如果您想使用 write() 方法存储它，那么您需要使用 `EEPROM.writeFloat()`。
:::

**函数 3**. Read & Get

要从 EEPROM 读取一个字节，您使用 `EEPROM.read()` 函数。此函数将字节的地址作为参数。

```c
EEPROM.read(address);
```

`EEPROM.read()` 等同于使用 `EEPROM.get()`。

```c
EEPROM.get(address);
```

例如，要读取之前存储在地址 0 的字节：

```c
EEPROM.read(0);
```

这将返回 **9**，这是存储在该位置的值。

:::tip
如果我们想要获取浮点数据，我们通常使用 `EEPROM.get()` 方法而不是 `EEPROM.read()` 方法。如果您想使用 read() 方法获取它，那么您需要使用 `EEPROM.readFloat()`。
:::

**函数 4**. 更新值

`EEPROM.update()` 函数特别有用。它只有在写入的值与已保存的值不同时才会写入 EEPROM。

由于 EEPROM 由于有限的写入/擦除周期而具有有限的预期寿命，使用 `EEPROM.update()` 函数而不是 `EEPROM.write()` 可以节省周期。

您按如下方式使用 `EEPROM.update()` 函数：

```c
EEPROM.update(address, value);
```

目前，我们在地址 0 中存储了 9。所以，如果我们调用：

```c
EEPROM.update(0, 9);
```

它不会再次写入 EEPROM，因为当前保存的值与我们要写入的值相同。

:::note
要了解更多关于 EEPROM 操作的信息，您可以阅读[官方 Arduino 文档](https://docs.arduino.cc/learn/programming/eeprom-guide#eeprom-clear)。
:::

### 使用 EEPROM 的一般方法

为了向您展示如何在 XIAO ESP32C3 闪存中保存数据，我们将保存输出的最后状态，在这种情况下是一个 LED。

按照以下原理图将 LED 连接到 XIAO ESP32C3。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/connect-led-2.png"/></div>

首先，您需要包含 EEPROM 库。

```c
#include <EEPROM.h>
```

然后，您定义 EEPROM 大小。这是您想要在闪存中访问的字节数。在这种情况下，我们只保存 LED 状态，所以 EEPROM 大小设置为 1。

```c
#define EEPROM_SIZE 1
```

我们还定义了使此程序工作所需的其他变量。

```c
// constants won't change. They're used here to set pin numbers:
const int ledPin = D10;      // the number of the LED pin

// Variables will change:
int ledState = LOW;  // ledState used to set the LED

// Generally, you should use "unsigned long" for variables that hold time
// The value will quickly become too large for an int to store
unsigned long previousMillis = 0;  // will store last time LED was updated

// constants won't change:
const long interval = 10000;  // interval at which to blink (milliseconds)
```

在 `setup()` 中，您使用预定义的大小初始化 EEPROM。

```c
EEPROM.begin(EEPROM_SIZE);
```

为了确保您的代码使用最新的 LED 状态初始化，在 `setup()` 中，您应该从闪存中读取最后的 LED 状态。它存储在地址零。

然后，您只需要根据从闪存读取的值相应地打开或关闭 LED。

```c
digitalWrite (ledPin, ledState);
```

在 `loop()` 函数部分，我们需要做的就是在一段时间内翻转 LED 的状态。

```c
// check to see if it's time to blink the LED; that is, if the difference
// between the current time and last time you blinked the LED is bigger than
// the interval at which you want to blink the LED.
unsigned long currentMillis = millis();

if (currentMillis - previousMillis >= interval) {
    // save the last time you blinked the LED
    previousMillis = currentMillis;
    Serial.println("State changed");
    // if the LED is off turn it on and vice-versa:
    if (ledState == LOW) {
      ledState = HIGH;
    } else {
      ledState = LOW;
    }

    // set the LED with the ledState of the variable:
    digitalWrite(ledPin, ledState);
}
```

接下来，我们需要确定倒计时是否已结束，在结束后翻转 LED 的状态，并将其存储在闪存中。

```c
EEPROM.write(0, ledState);
```

最后，我们使用 EEPROM.commit() 使更改生效。

```c
EEPROM.commit();
```

以下是完整的程序。

:::caution
请注意，您**不应该**长时间运行此示例。在此示例中，我们将每十秒写入一次 EEPROM，长时间运行此示例将**大大缩短** EEPROM 的寿命。
:::

```c
// include library to read and write from flash memory
#include <EEPROM.h>

// define the number of bytes you want to access
#define EEPROM_SIZE 1

// constants won't change. They're used here to set pin numbers:
const int ledPin = D10;      // the number of the LED pin

// Variables will change:
int ledState = LOW;  // ledState used to set the LED

// Generally, you should use "unsigned long" for variables that hold time
// The value will quickly become too large for an int to store
unsigned long previousMillis = 0;  // will store last time LED was updated

// constants won't change:
const long interval = 10000;  // interval at which to blink (milliseconds)

void setup() { 
  Serial.begin(115200);
  
  // initialize EEPROM with predefined size
  EEPROM.begin(EEPROM_SIZE);

  pinMode(ledPin, OUTPUT);

  // read the last LED state from flash memory
  ledState = EEPROM.read(0);
  // set the LED to the last stored state
  digitalWrite(ledPin, ledState);
}

void loop() {
  // here is where you'd put code that needs to be running all the time.

  // check to see if it's time to blink the LED; that is, if the difference
  // between the current time and last time you blinked the LED is bigger than
  // the interval at which you want to blink the LED.
  unsigned long currentMillis = millis();

  if (currentMillis - previousMillis >= interval) {
    // save the last time you blinked the LED
    previousMillis = currentMillis;
    Serial.println("State changed");
    // if the LED is off turn it on and vice-versa:
    if (ledState == LOW) {
      ledState = HIGH;
    } else {
      ledState = LOW;
    }
    // save the LED state in flash memory
    EEPROM.write(0, ledState);
    EEPROM.commit();
    Serial.println("State saved in flash memory");

    // set the LED with the ledState of the variable:
    digitalWrite(ledPin, ledState);
  }
}
```

将代码上传到您的开发板，这是您应该在串口监视器上看到的内容：

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-permanently-data/4.png"/></div>

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