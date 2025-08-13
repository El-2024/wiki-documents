---
description: LoRa 演示使用方法
title: LoRa 通信 - SenseCAP Indicator
keywords:
- SenseCAP Indicator
- LoRa
- ESP32S3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_LoRa
toc_max_heading_level: 4
sidebar_position: 3
last_update:
  date: 11/17/2023
  author: Spencer
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SenseCAP Indicator - LoRa 应用开发

## 介绍

LoRa® 是一种长距离无线通信技术，专为在远距离传输少量数据而优化。它通过使用称为啁啾扩频（CSS）的方法在亚GHz频谱中调制无线电信号来工作。

Seeed Studio 的 SenseCAP Indicator（版本 D1L 和 D1Pro）包含内置的 LoRa 收发器模块（Semtech SX1262 LoRa® 芯片），使您的项目能够轻松添加低功耗无线连接。在这篇文章中，我们将介绍如何在两个 SenseCAP Indicator 板之间建立 LoRa 通信。

### 概述

这个[演示](https://github.com/Seeed-Solution/indicator_lora_commu)展示了如何在 SenseCAP Indicator 和 XIAO 板之间建立基本的 LoRa 通信，使用 Wio-E5 作为中介。SenseCAP Indicator 从 XIAO 获取传感器数据，然后通过 Wio-E5 传输。传输的有效载荷随后被 SenseCAP Indicator 接收，解密并输出结果，并在其屏幕上显示数据。

无 LVGL 代码：[代码 · GitHub](https://github.com/Seeed-Solution/indicator_lora_commu/tree/29624d10643a41ae5e1e24124b81e93b5e3cd3bb)

## 硬件

### SenseCAP Indicator

从页面 [深入了解硬件](/cn/SenseCAP_Indicator_Dive_into_the_Hardware/#hardware-diagram) 中，我们可以看到 LoRa 收发器通过 SPI 接口连接到 ESP32-S3 MCU。

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png
"/></div>

关键组件包括：
- Semtech SX1262 射频前端
- ESP32-S3 MCU

LoRa 收发器处理所有 LoRa 信号的低级调制和解调。我们可以使用 ESP32-S3 的 SPI 接口与其通信。

### XIAO

此演示中的 XIAO 需要收集传感器数据并通过 Wio-E5 将其传输到 SenseCAP Indicator。XIAO 通过 UART 接口连接到 Wio-E5。

- XIAO
- Wio-E5
- SEN5x

## 软件

由于 [SenseCAP_Indicator_ESP32](https://github.com/Seeed-Solution/sensecap_indicator_esp32) SDK 已经提供了 LoRa 库，我们可以直接使用它，您可以快速查看页面 [LoRa®](/cn/SenseCAP_Indicator_ESP32_LoRa) 了解如何使用 LoRa 库。

## 入门指南

此演示展示了如何为物联网连接设置本地 LoRa® 集线器。

### 先决条件

请按照[说明](/cn/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware)设置开发环境。

### 步骤 1：下载演示代码

从[此链接](https://github.com/Seeed-Solution/indicator_lora_commu)克隆或下载演示代码。此代码将作为您的 LoRa 应用程序的起点。

### 步骤 2：实现有效载荷编码器（XIAO；Arduino）

#### 步骤 2.1：实现您的有效载荷结构和编码器

<Tabs>

  <TabItem value="XIAO/include/Frame.h">

```cpp
  #ifndef _FRAME_H
  #define _FRAME_H
  #include <Arduino.h>
  #include <vector>

  /** 载荷格式
  * | 主题 | 数据长度 | 数据载荷 | CRC |
  * | 1字节 | 1字节      | n字节       | 2字节 |
  * 示例:
  * | 0x01 | 0x0E | 14字节 | 2字节 | 用于 SEN54
  * | 0x01 | 0x10 | 16字节 | 2字节 | 用于 SEN55
  */

  #pragma pack(1)
  enum topics {
      TOPICS_MIN   = 0x00,
      TOPICS_SEN5x = 0x01,
      TOPIC_MAX,
  };

  #pragma pack(1)
  /* highlight-start */
  typedef struct
  {
      enum topics topic;         /*消息类型*/
      uint8_t dataLength;
      std::vector<uint8_t> data; /*载荷的实际数据*/
      uint16_t crc;
  } Frame_t;
  /* highlight-end */
  String packFrame(Frame_t frame);
  void deleteFrame(Frame_t *frame);
  uint16_t crc16_ccitt(const uint8_t *data, size_t length);
  #endif
  ```
  </TabItem>

  <TabItem value="XIAO/include/Frame.cpp">

  ```cpp
  #include "Frame.h"
  String packFrame(Frame_t frame) {
      uint8_t *packedData = (uint8_t *)malloc(2 + frame.dataLength + 2);
      if (packedData == NULL) {
          return String(); // 如果内存分配失败，返回空字符串
      }
      // 打包帧主题
      packedData[0] = frame.topic;
      packedData[1] = frame.dataLength;
      // highlight-start
      // 打包数据载荷
      for (size_t i = 0; i < frame.dataLength; i++) {
          packedData[2 + i] = frame.data[i];
      }
      // highlight-end
      // 计算CRC（为简单起见，我们假设CRC只是所有字节的总和）
      frame.crc = crc16_ccitt(packedData, 2 + frame.dataLength);

      // 打包CRC
      packedData[2 + frame.dataLength]     = (frame.crc & 0xFF00) >> 8;
      packedData[2 + frame.dataLength + 1] = frame.crc & 0x00FF;
      // highlight-start
      // String packedFrame; 将打包的数据序列化为字符串
      char packedFrameBuffer[(2 + frame.dataLength + 2) * 2];
      for (size_t i = 0; i < 2 + frame.dataLength + 2; i++) {
          snprintf(&packedFrameBuffer[i * 2], 3, "%02X", packedData[i]); // 3 包含空终止符
      }
      // highlight-end
      free(packedData);

      return String(packedFrameBuffer);
  }

  void deleteFrame(Frame_t *frame) {
      free(frame);
  }

  uint16_t crc16_ccitt(const uint8_t *data, size_t length) {
      uint16_t crc = 0xFFFF;

      for (size_t i = 0; i < length; i++) {
          crc ^= (uint8_t)data[i] << 8;
          for (uint8_t j = 0; j < 8; j++) {
              if (crc & 0x8000) {
                  crc = (crc << 1) ^ 0x1021;
              } else {
                  crc <<= 1;
              }
          }
      }

      return crc & 0xFFFF;
  }
  ```
  </TabItem>
</Tabs>


#### 步骤 2.2: 实现传感器数据结构并适配载荷编码器
<Tabs>
  <TabItem value="XIAO/include/sensor_sen5x.h">

  ```cpp
  #ifndef PAYLOAD_SEN5X_H
  #define PAYLOAD_SEN5X_H
  #include "Frame.h"
  #include "SensorPayload.h"
  #include <SensirionI2CSen5x.h>

  #define DEVICE_SEN54

  #if defined(DEVICE_SEN54)
  #elif defined(DEVICE_SEN55)
  #else
  #error "请在编译器选项中定义设备。"
  #endif

  class PayloadSEN5x : public SensorPayload<SensirionI2CSen5x> {
    public:
      PayloadSEN5x(SensirionI2CSen5x handler);
      uint16_t init() override;
      String toPayloadString() override;

    private:
    //highlight-start
      uint16_t massConcentrationPm1p0;
      uint16_t massConcentrationPm2p5;
      uint16_t massConcentrationPm4p0;
      uint16_t massConcentrationPm10p0;
      int16_t ambientHumidity;
      int16_t ambientTemperature;
      int16_t vocIndex;
  #ifdef DEVICE_SEN55
  // int16_t noxIndex; // 传感器 SEN54 不支持 NOx
  #endif
      //highlight-end
      SensirionI2CSen5x _sen5x;
  };
  #endif // PAYLOAD_SEN5X_H
  ```
  </TabItem>
  <TabItem value="XIAO/src/sensor_sen5x.cpp">

  ```cpp
  #include "sensor_sen5x.h"
  #include "main.h"

  PayloadSEN5x::PayloadSEN5x(SensirionI2CSen5x handler)
      : SensorPayload<SensirionI2CSen5x>(handler), _sen5x(handler) {
      // 在此处初始化 SEN5X 的特定数据成员（如果需要）
      _sen5x.begin(Wire);
  }

  uint16_t PayloadSEN5x::init() {
      // 在此处实现 SEN5X 的初始化逻辑
      uint16_t error;
      char errorMessage[256];
      error = _sen5x.deviceReset();
      if (error) {
          Serial.print("尝试执行 deviceReset() 时出错: ");
          errorToString(error, errorMessage, 256);
          Serial.println(errorMessage);
      }
      float tempOffset = 0.0;
      error            = _sen5x.setTemperatureOffsetSimple(tempOffset);
      if (error) {
          Serial.print("尝试执行 setTemperatureOffsetSimple() 时出错: ");
          errorToString(error, errorMessage, 256);
          Serial.println(errorMessage);
      } else {
          Serial.print("温度偏移设置为 ");
          Serial.print(tempOffset);
          Serial.println(" 摄氏度 (仅限 SEN54/SEN55)");
      }

      // 开始测量
      error = _sen5x.startMeasurement();
      if (error) {
          Serial.print("尝试执行 startMeasurement() 时出错: ");
          errorToString(error, errorMessage, 256);
          Serial.println(errorMessage);
      }
      return 0;
  }

  String PayloadSEN5x::toPayloadString() {
  // 在此处添加将数据转换为载荷字符串的代码
  #ifdef DEVICE_SEN55
      _sen5x.readMeasuredValuesAsIntegers(massConcentrationPm1p0, massConcentrationPm2p5, massConcentrationPm4p0, massConcentrationPm10p0, ambientHumidity, ambientTemperature, vocIndex, noxIndex);
      _frame.dataLength = 16;
  #else
      int16_t __noxIndex;
      _sen5x.readMeasuredValuesAsIntegers(massConcentrationPm1p0, massConcentrationPm2p5, massConcentrationPm4p0, massConcentrationPm10p0, ambientHumidity, ambientTemperature, vocIndex, __noxIndex);
      _frame.dataLength = 14;
  #endif

      _frame.topic = TOPICS_SEN5x;

      // 清空数据向量
      _frame.data.clear();
      //highlight-start
      // 将值转换为十六进制载荷字符串
      _frame.data.push_back((uint8_t)(massConcentrationPm1p0 >> 8));
      _frame.data.push_back((uint8_t)(massConcentrationPm1p0 & 0xFF));
      _frame.data.push_back((uint8_t)(massConcentrationPm2p5 >> 8));
      _frame.data.push_back((uint8_t)(massConcentrationPm2p5 & 0xFF));
      _frame.data.push_back((uint8_t)(massConcentrationPm4p0 >> 8));
      _frame.data.push_back((uint8_t)(massConcentrationPm4p0 & 0xFF));
      _frame.data.push_back((uint8_t)(massConcentrationPm10p0 >> 8));
      _frame.data.push_back((uint8_t)(massConcentrationPm10p0 & 0xFF));
      _frame.data.push_back((uint8_t)(ambientHumidity >> 8));
      _frame.data.push_back((uint8_t)(ambientHumidity & 0xFF));
      _frame.data.push_back((uint8_t)(ambientTemperature >> 8));
      _frame.data.push_back((uint8_t)(ambientTemperature & 0xFF));
      _frame.data.push_back((uint8_t)(vocIndex >> 8));
      _frame.data.push_back((uint8_t)(vocIndex & 0xFF));
  #ifdef DEVICE_SEN55
  // _frame.data.push_back((uint8_t)(noxIndex >> 8));
  // _frame.data.push_back((uint8_t)(noxIndex & 0xFF));
  #endif
      //highlight-end
      char data[256];
      sprintf(data, "%d,%d,%d,%d,%d,%d,%d", massConcentrationPm1p0, massConcentrationPm2p5, massConcentrationPm4p0, massConcentrationPm10p0, ambientHumidity, ambientTemperature, vocIndex);
      Serial.println("字符串: " + String(data));

      for (int i = 0; i < _frame.dataLength; i++) {
          Serial.print(_frame.data[i], HEX);
          Serial.print(" ");
      }
      Serial.println();

      return packFrame(_frame);
  }
  ```
  </TabItem>
</Tabs>

函数 `toPayloadString` 将把数据序列化为字符串，该字符串将通过 Wio-E5 发送到 SenseCAP Indicator。

#### 步骤 2.3: 编译代码并上传到 XIAO

```cpp
#include "sensor_sen5x.h"
#include "wio_e5_at.h"
#include <Arduino.h>
#include <SensirionI2CSen5x.h>
#include <Wire.h>
SoftwareSerial serial_lora( D2, D3 );
Radio radio( serial_lora, RF_FREQUENCY, LORA_SF12, LORA_BW_125, 15, 15, 14, LORA_CRC_ON, LORA_IQ_NORMAL, LORA_PUBLIC_OFF );

SensirionI2CSen5x sen5x;
PayloadSEN5x payloadSEN5x( sen5x );

void setup() {
    delay( 2000 );
    wait_serial();
    Serial.println( "启动中..." );

    radio.begin();

    Wire.begin();
    payloadSEN5x.init();

    Serial.println( "应用程序开始" );
}

void loop() {
    static int count               = 0;
    static unsigned long task_time = 0;
    static String test_string;

    if ( millis() - task_time > 10000 ) {
        task_time   = millis();

        radio.sendPayload( payloadSEN5x.toPayloadString() );

        Serial.printf( "发送数据 %d\r\n", count++ );
    }
}
```

完成载荷后，现在我们将深入 SenseCAP Indicator 来编程载荷解码器。

### 步骤 3：实现载荷解码器（SenseCAP Indicator；ESP-IDF）

> 载荷解码器是一个将从 LoRa 收发器接收到的二进制载荷转换为人类可读格式的函数。载荷解码器特定于您的应用程序，必须由您实现。此演示的载荷解码器在演示代码中提供。

#### 步骤 3.1：实现您的载荷解码器

<Tabs>
  <TabItem value="Indicator/main/Frame/frame.h">

  ```cpp
    #ifndef __SIMPLE_FRAME_H
    #define __SIMPLE_FRAME_H
    #include <stdint.h>
    #include <stdio.h>
    #include <stdlib.h>

    /** 载荷格式
    * | 主题 | 数据长度 | 数据载荷 | CRC |
    * | 1字节 | 1字节      | n 字节       | 2字节 |
    * 示例:
    * | 0x01 | 0x0E | 14 字节 | 2字节 | 用于 SEN54
    * | 0x01 | 0x10 | 16 字节 | 2字节 | 用于 SEN55
    */

    #pragma pack(1)
    enum topics {
        TOPICS_MIN   = 0x00,
        TOPICS_SEN5x = 0x01,
        TOPIC_MAX,
    };
    typedef struct
    {
        enum topics topic; /*消息类型或数据ID*/
        uint8_t dataLength;
    /* highlight-start */
        uint8_t *data;     /*载荷的实际数据*/
    /* highlight-end */
        uint16_t crc;
    } Frame_t;
    Frame_t *parsePayload( uint8_t *payload, uint8_t length );
    void deleteFrame( Frame_t *frame );
    uint16_t crc16_ccitt( const uint8_t *data, size_t length );
    #endif
  ```

  </TabItem>
  <TabItem value="Indicator/main/Frame/frame.c">

  ```cpp
    #include "frame.h"
    #include "esp_log.h"

    Frame_t *parsePayload( uint8_t *payload, uint8_t length )
    {
        Frame_t *frame = (Frame_t *)malloc( sizeof( Frame_t ) );
        if ( frame == NULL ) {
            ESP_LOGE( "parsePayload", "为帧分配内存失败" );
            return NULL;
        }

        frame->topic = (enum topics)payload[0];

        frame->dataLength = payload[1];
        /* highlight-start */
        frame->data = (uint8_t *)malloc( frame->dataLength );
        if ( frame->data == NULL ) {
            ESP_LOGE( "parsePayload", "为帧数据分配内存失败" );
            free( frame ); // 清理之前分配的内存
            return NULL;
        }
        /* highlight-end */
        memcpy( frame->data, payload + 2, frame->dataLength );

        frame->crc = (uint16_t)payload[length - 2] << 8 | (uint16_t)payload[length - 1];

        if ( frame->crc != crc16_ccitt( payload, length - 2 ) ) {
            ESP_LOGE( "parsePayload", "CRC 不匹配" );
            free( frame->data );
            free( frame );
            return NULL;
        }

        return frame;
    }

    void deleteFrame( Frame_t *frame )
    {
        free( frame->data );
        free( frame );
    }

    uint16_t crc16_ccitt( const uint8_t *data, size_t length )
    {
        uint16_t crc = 0xFFFF;

        for ( size_t i = 0; i < length; i++ ) {
            crc ^= (uint8_t)data[i] << 8;
            for ( uint8_t j = 0; j < 8; j++ ) {
                if ( crc & 0x8000 ) {
                    crc = ( crc << 1 ) ^ 0x1021;
                } else {
                    crc <<= 1;
                }
            }
        }

        return crc & 0xFFFF;
    }
  ```
  </TabItem>
</Tabs>

#### 步骤 3.2：实现传感器数据结构

<Tabs>
  <TabItem value="Indicator/main/Sensors/sen5x.h">

  ```cpp
    #ifndef PAYLOAD_SEN5X_H
    #define PAYLOAD_SEN5X_H
    #include "SensorPayload.h"

    #define DEVICE_SEN54

    #if defined( DEVICE_SEN54 )
    #elif defined( DEVICE_SEN55 )
    #else
    #error "请在编译器选项中定义设备。"
    #endif
    // highlight-start
    #pragma pack(push, 1)
    typedef union {
        struct
        {
            uint16_t massConcentrationPm1p0;
            uint16_t massConcentrationPm2p5;
            uint16_t massConcentrationPm4p0;
            uint16_t massConcentrationPm10p0;
            int16_t  ambientHumidity;
            int16_t  ambientTemperature;
            int16_t  vocIndex;
    #ifdef DEVICE_SEN55
            int16_t noxIndex;
    #endif
        };

    #ifdef DEVICE_SEN55
        int16_t data[8];
    #else
        int16_t data[7];
    #endif
    } SEN5xData_t;
    #pragma pack(pop)
    // highlight-end
    void phraseSEN5xData( uint8_t *data_arry, SEN5xData_t *SEN5x );
    void prinSEN5xData( const SEN5xData_t *SEN5x );
    #endif // PAYLOAD_SEN5X_H
  ```
  </TabItem>
  <TabItem value="Indicator/main/Sensors/sen5x.c">

  ```cpp
    #include "sen5x.h"
    #include "esp_log.h"
    // highlight-start
    void phraseSEN5xData( uint8_t *data_arry, SEN5xData_t *SEN5x )
    {
        for ( uint8_t i = 0; i < sizeof( SEN5xData_t ); i++ ) {
            SEN5x->data[i] = data_arry[2 * i] << 8 | data_arry[2 * i + 1];
        }
    }
    // highlight-end
    void prinSEN5xData( const SEN5xData_t *SEN5x )
    {
        static const char *TAG = "sen5x_";
        ESP_LOGI( TAG, "massConcentrationPm1p0: %d", SEN5x->massConcentrationPm1p0 );
        ESP_LOGI( TAG, "massConcentrationPm2p5: %d", SEN5x->massConcentrationPm2p5 );
        ESP_LOGI( TAG, "massConcentrationPm4p0: %d", SEN5x->massConcentrationPm4p0 );
        ESP_LOGI( TAG, "massConcentrationPm10p0: %d", SEN5x->massConcentrationPm10p0 );
        ESP_LOGI( TAG, "ambientHumidity: %d", SEN5x->ambientHumidity );
        ESP_LOGI( TAG, "ambientTemperature: %d", SEN5x->ambientTemperature );
        ESP_LOGI( TAG, "vocIndex: %d", SEN5x->vocIndex );
    #ifdef DEVICE_SEN55
        ESP_LOGI( TAG, "noxIndex: %d", SEN5x->noxIndex );
    #endif
    }
  ```
  </TabItem>
</Tabs>

#### 步骤 3.3：配置 LoRa

##### 设置 LoRa 参数

设置必要的 LoRa 参数，如频率、扩频因子和带宽。这些设置必须在两个 LoRa 通道之间匹配才能成功通信。

```cpp
#define RF_FREQUENCY               868000000 // Hz
#define LORA_BANDWIDTH             0         // [0: 125 kHz, 1: 250 kHz, 2: 500 kHz, 3: Reserved]
#define LORA_SPREADING_FACTOR      12        // [SF7..SF12]
#define LORA_CODINGRATE            1         // [1: 4/5, 2: 4/6, 3: 4/7, 4: 4/8]
#define LORA_PREAMBLE_LENGTH       15        // Same for Tx and Rx
#define LORA_SYMBOL_TIMEOUT        5         // Symbols
#define LORA_FIX_LENGTH_PAYLOAD_ON false
#define LORA_IQ_INVERSION_ON       false
```

##### 设置 LoRa 收发器接收器

```cpp
void OnRxDone( uint8_t *payload, uint16_t size, int16_t rssi, int8_t snr )
{
    SEN5xData_t sen5x_data;
    // highlight-start
    Frame_t *frame = parsePayload( payload, size );
    // highlight-end
    if ( frame == NULL ) {
        ESP_LOGE( TAG, "parsePayload error" );
        return;
    }
    ESP_LOGI( TAG, "frame->type: %s", dataIDToString( frame->topic ) );

    // highlight-start
    switch ( frame->topic ) {
        case TOPICS_SEN5x:
            phraseSEN5xData( frame->data, &sen5x_data );
            break;
        default:
            break;
    }
    // highlight-end
    deleteFrame( frame );
}
```

##### 初始化 LoRa 收发器

```cpp
RadioEvents.RxDone = OnRxDone;
Radio.Init( &RadioEvents );

Radio.SetChannel( RF_FREQUENCY );

Radio.SetRxConfig( MODEM_LORA, LORA_BANDWIDTH, LORA_SPREADING_FACTOR,
                    LORA_CODINGRATE, 0, LORA_PREAMBLE_LENGTH,
                    LORA_SYMBOL_TIMEOUT, LORA_FIX_LENGTH_PAYLOAD_ON,
                    0, true, 0, 0, LORA_IQ_INVERSION_ON, true );
Radio.SetMaxPayloadLength( MODEM_LORA, 255 );

Radio.Rx( 0 ); // Continuous Rx

```

#### 步骤 3.4：编译代码并烧录到 SenseCAP Indicator

```cpp
/**
 * @source: https://github.com/Seeed-Solution/indicator_lora_commu/blob/29624d10643a41ae5e1e24124b81e93b5e3cd3bb/Indicator/main/main.c
 */
#include "bsp_board.h"
#include "esp_log.h"
#include "frame.h"
#include "radio.h"
#include "sen5x.h"

static const char *TAG = "app_main";

#define VERSION "v0.0.1"

#define SENSECAP "\n\
   _____                      _________    ____         \n\
  / ___/___  ____  ________  / ____/   |  / __ \\       \n\
  \\__ \\/ _ \\/ __ \\/ ___/ _ \\/ /   / /| | / /_/ /   \n\
 ___/ /  __/ / / (__  )  __/ /___/ ___ |/ ____/         \n\
/____/\\___/_/ /_/____/\\___/\\____/_/  |_/_/           \n\
--------------------------------------------------------\n\
 Version: %s %s %s\n\
--------------------------------------------------------\n\
"

#define RF_FREQUENCY               868000000 // Hz
#define LORA_BANDWIDTH             0         // [0: 125 kHz, 1: 250 kHz, 2: 500 kHz, 3: Reserved]
#define LORA_SPREADING_FACTOR      12        // [SF7..SF12]
#define LORA_CODINGRATE            1         // [1: 4/5, 2: 4/6, 3: 4/7, 4: 4/8]
#define LORA_PREAMBLE_LENGTH       15        // Same for Tx and Rx
#define LORA_SYMBOL_TIMEOUT        5         // Symbols
#define LORA_FIX_LENGTH_PAYLOAD_ON false
#define LORA_IQ_INVERSION_ON       false

static RadioEvents_t RadioEvents;

SEN5xData_t sen5x_data;

void OnRxDone( uint8_t *payload, uint16_t size, int16_t rssi, int8_t snr ) {
    int i = 0;
    ESP_LOGI( TAG, "rssi:%d dBm, snr:%d dB, len:%d, payload:", rssi, snr, size );
    for ( i = 0; i < size; i++ ) {
        printf( "0x%x ", payload[i] );
    }
    printf( "\n" );

    Frame_t *frame = parsePayload( payload, size );
    if ( frame == NULL ) {
        ESP_LOGE( TAG, "parsePayload error" );
        return;
    }
    ESP_LOGI( TAG, "frame->type: %s", dataIDToString( frame->topic ) );

    switch ( frame->topic ) {
        case TOPICS_SEN5x:
            phraseSEN5xData( frame->data, &sen5x_data );
            prinSEN5xData( &sen5x_data );
            break;

        default:
            break;
    }

    deleteFrame( frame );
}

void app_main( void ) {
    ESP_LOGI( "", SENSECAP, VERSION, __DATE__, __TIME__ );

    ESP_ERROR_CHECK( bsp_board_init() );

    ESP_LOGI( TAG, "APP MAIN START" );

    RadioEvents.RxDone = OnRxDone;
    Radio.Init( &RadioEvents );

    Radio.SetChannel( RF_FREQUENCY );

    Radio.SetRxConfig( MODEM_LORA, LORA_BANDWIDTH, LORA_SPREADING_FACTOR,
                       LORA_CODINGRATE, 0, LORA_PREAMBLE_LENGTH,
                       LORA_SYMBOL_TIMEOUT, LORA_FIX_LENGTH_PAYLOAD_ON,
                       0, true, 0, 0, LORA_IQ_INVERSION_ON, true );
    Radio.SetMaxPayloadLength( MODEM_LORA, 255 );

    Radio.Rx( 0 ); // Continuous Rx

    while ( 1 ) {
        vTaskDelay( pdMS_TO_TICKS( 10000 ) );
    }
}

```

### 步骤 4：测试通信

给两个 SenseCAP Indicator 开发板上电并打开串口监视器。您应该能看到两个开发板之间发送和接收的消息。恭喜！您已经成功使用 SenseCAP Indicator 建立了 LoRa 通信。

```sh title="XIAO 串口监视器"
String: 76,80,81,81,5389,5990,980
0 4C 0 50 0 51 0 51 15 D 17 66 3 D4
CRC: 629
<<<AT+TEST=TXLRPKT,"010E004C005000510051150D176603D40629"
>>>+TEST: TX DONE
+TEST: TXLRPKT

Send payload successfully
Send data 1

```

```sh title="SenseCAP Indicator 串口监视器"
I (95490) app_main: rssi:-22 dBm, snr:5 dB, len:18, payload:
0x1 0xe 0x0 0x4c 0x0 0x50 0x0 0x51 0x0 0x51 0x15 0xd 0x17 0x66 0x3 0xd4 0x6 0x29
W (95541) parsePayload: topic: 1
W (95541) parsePayload: dataLength: 14
W (95545) parsePayload: payload[0]: 00
W (95549) parsePayload: payload[1]: 4C
W (95554) parsePayload: payload[2]: 00
W (95558) parsePayload: payload[3]: 50
W (95563) parsePayload: payload[4]: 00
W (95567) parsePayload: payload[5]: 51
W (95572) parsePayload: payload[6]: 00
W (95576) parsePayload: payload[7]: 51
W (95580) parsePayload: payload[8]: 15
W (95585) parsePayload: payload[9]: 0D
W (95589) parsePayload: payload[10]: 17
W (95594) parsePayload: payload[11]: 66
W (95598) parsePayload: payload[12]: 03
W (95603) parsePayload: payload[13]: D4
I (95607) app_main: frame->type: SEN5X
I (95612) sen5x_: massConcentrationPm1p0: 76
I (95617) sen5x_: massConcentrationPm2p5: 80
I (95622) sen5x_: massConcentrationPm4p0: 81
I (95627) sen5x_: massConcentrationPm10p0: 81
I (95632) sen5x_: ambientHumidity: 5389
I (95636) sen5x_: ambientTemperature: 5990
I (95641) sen5x_: vocIndex: 980
```

## 资源

<div class="table-center">
  <table align="center">
  <tr>
    <th> 名称 </th>
    <th> 功能 </th>
  </tr>
  <tr>
    <td> <a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lora/main/demo/beep.c"><span> 蜂鸣器控制 </span></a> </td>
    <td> 接收字符串 "ON" 或 "OFF"，可以执行相应的功能</td>
  </tr>
  <tr>
    <td> <a href="https://github.com/Seeed-Solution/indicator_lora_commu"><span> PingPong </span></a></td>
    <td> 在主设备和从设备之间建立乒乓通信模式。</td>
  </tr>
  <tr>
    <td> <a href="https://github.com/Seeed-Solution/indicator_lora_commu"><span> 多传感器数据上传 </span></a></td>
    <td> XIAOS3 收集数据并利用 Wio-E5（带有 LoRa 模块和 AT 命令）将传感器数据上传到 Indicator。</td>
  </tr>
 </table>
</div>

更多详细信息，请参阅 [README](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lora/README.md) 文件。

## 技术支持

**需要 SenseCAP Indicator 的帮助？我们随时为您提供协助！**

如果您在学习本教程时遇到任何问题或有任何疑问，请随时联系我们的技术支持。我们随时为您提供帮助！

访问我们的 [Seeed 官方 Discord 频道](https://discord.gg/kpY74apCWj) 提出您的问题，或访问 [GitHub 讨论区](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) 分享您想要的一切！