---
description: ReSpeaker XVF3800 USB 4-Mic Array 是一款专业的圆形麦克风阵列，具有 AEC、波束成形、噪声抑制和 360° 语音捕获功能。与 XIAO ESP32S3 配对，可为智能设备、机器人和物联网应用提供先进的语音控制。探索无缝集成和双模式灵活性。

title: 通过 XIAO ESP32-S3 控制 reSpeaker XVF3800 GPIO

keywords:
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.jpg
slug: /cn/respeaker_xvf3800_xiao_gpio
last_update:
  date: 7/16/2025
  author: Kasun Thushara
---

## 通过 XIAO ESP32-S3 控制 reSpeaker XVF3800 GPIO

## 目标

本指南解释了如何使用 I2C 接口**读取和控制 XVF3800 语音处理器上的 GPIO 引脚**。您将学习如何：
- **读取 GPI 和 GPO 引脚状态**
- **控制输出引脚（例如，静音麦克风、控制 LED、放大器）**
- **了解 GPIO 映射及其用途**

## GPIO 概述


reSpeaker XVF3800 提供 3 个输入引脚（GPI）和 5 个输出引脚（GPO）用于外部控制。您可以使用这些引脚读取按钮状态或控制硬件，如静音 LED、放大器或 LED。

| **引脚名称** | **方向** | **功能**                                         |
|--------------|---------------|------------------------------------------------------|
| X1D09        | 输入 (RO)    | 静音按钮状态（释放时为高电平）              |
| X1D13        | 输入 (RO)    | 浮空                                             |
| X1D34        | 输入 (RO)    | 浮空                                             |
| X0D11        | 输出 (RW)   | 浮空                                             |
| X0D30        | 输出 (RW)   | 静音 LED + 麦克风静音控制（高电平 = 静音）            |
| X0D31        | 输出 (RW)   | 放大器使能（低电平 = 使能）                     |
| X0D33        | 输出 (RW)   | WS2812 LED 电源控制（高电平 = 开启）                 |
| X0D39        | 输出 (RW)   | 浮空                                             |

## 读取 GPO 引脚状态

**目标**：检查所有**输出功能 GPIO（GPO）**的逻辑电平。
**代码要点**：
- 使用以下参数发送读取请求：
    - 资源 ID：20（GPO）
    - 命令 ID：0（GPO_READ_VALUES）
- 按顺序读取 5 个 GPO 引脚状态：X0D11 → X0D30 → X0D31 → X0D33 → X0D39
- 包含状态字节以验证响应

```bash
#include <Wire.h>

#define XMOS_ADDR 0x2C  // I2C 7位地址

#define GPO_SERVICER_RESID 20
#define GPO_SERVICER_RESID_GPO_READ_VALUES 0
#define GPO_GPO_READ_NUM_BYTES 5

void setup() {
  Serial.begin(115200);
  while (!Serial);
  Wire.begin();
  delay(1000);
  Serial.println("XVF3800 GPO 读取测试开始...");
}

void loop() {
  uint8_t gpo_values[GPO_GPO_READ_NUM_BYTES] = {0};
  uint8_t status = 0xFF;

  bool success = read_gpo_values(gpo_values, &status);

  if (success) {
    Serial.print("I2C 通信成功。状态字节：0x");
    Serial.print(status, HEX);
    Serial.print(" | GPO 输出值：");
    for (uint8_t i = 0; i < GPO_GPO_READ_NUM_BYTES; i++) {
      Serial.print("0x");
      Serial.print(gpo_values[i], HEX);
      Serial.print(" ");
    }
    Serial.println();
  } else {
    Serial.println("读取 GPO 值失败。");
  }

  delay(1000);
}

bool read_gpo_values(uint8_t *buffer, uint8_t *status) {
  const uint8_t resid = GPO_SERVICER_RESID;
  const uint8_t cmd = GPO_SERVICER_RESID_GPO_READ_VALUES;
  const uint8_t read_len = GPO_GPO_READ_NUM_BYTES;

  // 步骤 1：写入命令
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd);
  Wire.write(read_len);
  uint8_t result = Wire.endTransmission();

  if (result != 0) {
    Serial.print("I2C 写入错误：");
    Serial.println(result);
    return false;
  }

  // 步骤 2：读取响应（状态 + 载荷）
  Wire.requestFrom(XMOS_ADDR, (uint8_t)(read_len + 1));
  if (Wire.available() < read_len + 1) {
    Serial.println("I2C 读取错误：接收到的数据不足。");
    return false;
  }

  *status = Wire.read();
  for (uint8_t i = 0; i < read_len; i++) {
    buffer[i] = Wire.read();
  }

  return true;
}

```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/GPO.PNG" alt="pir" width={600} height="auto" /></p>

## 读取 GPI 引脚状态

**目标**：检查**输入功能 GPIO**的状态（例如，静音按钮状态）。
**代码要点**：
- 发送命令到：
    - 资源 ID：36 (IO_CONFIG)
    - 命令 ID：6 (GPI_VALUE_ALL)
- 接收 3 个 GPI，表示 X1D09、X1D13 和 X1D34 的状态

```bash
#include <Wire.h>

#define XMOS_ADDR 0x2C  // 7-bit I2C address

// GPI related definitions
#define IO_CONFIG_SERVICER_RESID 36
#define IO_CONFIG_SERVICER_RESID_GPI_READ_VALUES 0
#define GPI_READ_NUM_BYTES 3  // Defined in the header

void setup() {
  Serial.begin(115200);
  while (!Serial);
  Wire.begin();
  delay(1000);
  Serial.println("XVF3800 GPI Read Test Starting...");
}

void loop() {
  uint8_t gpi_values[GPI_READ_NUM_BYTES] = {0};
  uint8_t status = 0xFF;

  if (read_gpi_values(gpi_values, &status)) {
    Serial.print("SUCCESS. Status byte: 0x");
    Serial.print(status, HEX);
    Serial.print(" | GPI Input Values: ");
    for (uint8_t i = 0; i < GPI_READ_NUM_BYTES; i++) {
      Serial.print("0x");
      Serial.print(gpi_values[i], HEX);
      Serial.print(" ");
    }
    Serial.println();
  } else {
    Serial.println("Failed to read GPI values.");
  }

  delay(1000);
}

bool read_gpi_values(uint8_t *buffer, uint8_t *status) {
  const uint8_t resid = IO_CONFIG_SERVICER_RESID;
  const uint8_t cmd = IO_CONFIG_SERVICER_RESID_GPI_READ_VALUES;
  const uint8_t read_len = GPI_READ_NUM_BYTES;

  // Write phase: Request GPI read
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd);
  Wire.write(read_len);
  uint8_t result = Wire.endTransmission();

  if (result != 0) {
    Serial.print("I2C Write Error: ");
    Serial.println(result);
    return false;
  }

  // Read phase: Read status + GPI values
  Wire.requestFrom(XMOS_ADDR, (uint8_t)(read_len + 1));
  if (Wire.available() < (read_len + 1)) {
    Serial.println("I2C Read Error: Not enough data received.");
    return false;
  }

  *status = Wire.read();
  for (uint8_t i = 0; i < read_len; i++) {
    buffer[i] = Wire.read();
  }

  return true;
}


```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/GPI.PNG" alt="pir" width={600} height="auto" /></p>

## 写入 GPO 引脚 – 静音麦克风示例

**目标**：控制输出 GPIO，例如，通过切换 GPIO 30 (X0D30) 来静音麦克风。
**代码要点**：
- 发送写入命令到：
    - 资源 ID：20
    - 命令 ID：1 (GPO_WRITE_VALUE)
    - 载荷：引脚号，值 `例如，{30, 1} 来静音`
  
**便利函数**：
- muteMic() → 设置 GPIO 30 为高电平以**静音麦克风并点亮红色 LED**
- unmuteMic() → 设置 GPIO 30 为低电平以**取消静音麦克风并关闭 LED**

```bash
#include <Wire.h>

// 定义 XVF3800 设备的 7 位 I2C 地址
#define XMOS_ADDR 0x2C  

// 定义 XVF3800 资源和命令 ID
#define GPO_SERVICER_RESID 20                         // GPIO 输出 (GPO) 的资源 ID
#define GPO_SERVICER_RESID_GPO_WRITE_VALUE 1          // 向 GPIO 写入值的命令 ID
#define IO_CONFIG_SERVICER_RESID 36                   // IO 配置的资源 ID
#define IO_CONFIG_SERVICER_RESID_GPI_VALUE_ALL 6      // 读取所有 GPIO 输入值的命令 ID

void setup() {
  Wire.begin();                 // 初始化 I2C 通信
  Serial.begin(115200);        // 初始化串口通信用于调试
  delay(1000);                 // 短暂延时以允许设备启动

  Serial.println("静音麦克风 (设置 GPIO 30 为高电平)");
  muteMic();                   // 设置 GPIO 30 为高电平以静音麦克风
  delay(5000);                 // 等待 5 秒

  Serial.println("取消静音麦克风 (设置 GPIO 30 为低电平)");
  unmuteMic();                 // 设置 GPIO 30 为低电平以取消静音麦克风
  delay(3000);                 // 等待 3 秒

  Serial.println("读取 GPIO 状态...");
  readGPIOStatus();            // 读取并打印所有 GPIO 的状态
}

void loop() {
  // 空循环 - 目前没有重复操作
}

// 将 GPIO 30 设置为特定逻辑电平的函数 (0 = 低电平, 1 = 高电平)
void setGPIO30(uint8_t level) {
  uint8_t payload[2] = {30, level};  // 载荷格式: [GPIO 索引, 值]
  xmos_write_bytes(GPO_SERVICER_RESID, GPO_SERVICER_RESID_GPO_WRITE_VALUE, payload, 2);
  
  Serial.print("命令已发送: GPIO 30 = ");
  Serial.println(level);
}

// 静音麦克风的便利函数 (设置 GPIO 30 为高电平)
void muteMic() {
  setGPIO30(1);  // 逻辑高电平以静音
}

// 取消静音麦克风的便利函数 (设置 GPIO 30 为低电平)
void unmuteMic() {
  setGPIO30(0);  // 逻辑低电平以取消静音
}

// 通过 I2C 向 XVF3800 写入字节序列的函数
void xmos_write_bytes(uint8_t resid, uint8_t cmd, uint8_t *value, uint8_t write_byte_num) {
  Wire.beginTransmission(XMOS_ADDR); // 开始向 XVF3800 的 I2C 传输
  Wire.write(resid);                 // 写入资源 ID
  Wire.write(cmd);                   // 写入命令 ID
  Wire.write(write_byte_num);       // 写入载荷字节数
  for (uint8_t i = 0; i < write_byte_num; i++) {
    Wire.write(value[i]);           // 写入每个载荷字节
  }
  Wire.endTransmission();           // 结束 I2C 传输
}

// 从 XVF3800 读取所有 GPIO 输入状态 (32 位) 的函数
void readGPIOStatus() {
  uint8_t buffer[4] = {0};  // 用于保存 4 字节 GPIO 状态响应的缓冲区

  // --- 写入阶段: 发送读取请求 ---
  Wire.beginTransmission(XMOS_ADDR);                        // 开始 I2C 写入事务
  Wire.write(IO_CONFIG_SERVICER_RESID);                     // 写入 IO 配置的资源 ID
  Wire.write(IO_CONFIG_SERVICER_RESID_GPI_VALUE_ALL);       // 写入获取所有 GPIO 值的命令 ID
  Wire.write(1);                                             // 载荷长度 (1 字节)
  Wire.endTransmission(false);                              // 结束传输并重复启动 (无停止位)

  // --- 读取阶段: 从设备读取响应 ---
  Wire.requestFrom(XMOS_ADDR, 5); // 请求 5 字节: 1 个状态字节 + 4 个数据字节

  if (Wire.available() < 5) {
    Serial.println("错误: 从 XVF3800 接收的字节数不足。");
    return;
  }

  uint8_t status = Wire.read();  // 读取状态字节 (成功时应为 0)

  // 读取 4 字节 GPIO 输入状态值
  for (int i = 0; i < 4; i++) {
    buffer[i] = Wire.read();
  }

  // 将 4 字节合并为单个 32 位无符号整数
  uint32_t gpio_status = ((uint32_t)buffer[3] << 24) |
                         ((uint32_t)buffer[2] << 16) |
                         ((uint32_t)buffer[1] << 8)  |
                         ((uint32_t)buffer[0]);

  Serial.print("GPIO 状态寄存器 = 0x");
  Serial.println(gpio_status, HEX);

  // 检查并打印 GPIO 30 的具体状态
  bool gpio30 = (gpio_status >> 30) & 0x01;
  Serial.print("GPIO 30 状态: ");
  Serial.println(gpio30 ? "高电平 (已静音)" : "低电平 (未静音)");
}

```

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