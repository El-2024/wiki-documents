---
description: Wio-WM1110 开发套件硬件概述
title: 硬件概述
keywords:
- Wio-WM1110 开发套件
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-WM1110_Dev_Kit_Hardware_Overview
last_update:
  date: 8/8/2023
  author: Jessie
---



Wio WM1110 开发套件是一个用于构建物联网项目的开源平台。它提供低功耗的 LoRa 网络连接以及全面的定位覆盖服务。该套件还包括一系列传感器和外设，使其成为构建物联网项目的多功能平台。

在本教程中，我们将介绍硬件概述以及如何开发您自己的应用程序！


## 硬件概述

Wio-WM1110 开发套件基于 [Wio-WM1110 模块](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html)，集成了 Semtech 的 LoRa® 收发器和用于定位的多功能无线电前端。该板内置了温湿度传感器和三轴加速度计，同时还提供了多种外设的连接选项。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/hardware_overview1.png" alt="pir" width={800} height="auto" /></p>



## 引脚图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/PIN.png" alt="pir" width={800} height="auto" /></p>




## LoRaWAN® 通信

### 设置密钥

在设备通过网络服务器 (NS) 通信之前，我们需要用三个密钥注册设备。

Wio-WM1110 DK 允许用户设置 DevEUI、AppEUI 和 AppKey，因此您可以在 'lorawan_key_config.h' 文件中设置自己的参数，然后将其烧录到开发套件中。

```cpp
...\Seeed_Wio_WM1110_Dev_Board\apps\common\lorawan_key_config.h
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/keys.png" alt="pir" width={800} height="auto" /></p>


**LoRa Basics Modem LoRaWAN® Class A/C 示例**

应用程序将自动启动加入 LoRaWAN 网络的过程，请参阅 **lorawan_key_config.h**。

一旦网络加入成功（即触发相应事件时），上行消息会定期发送。此定期操作基于 LoRa Basics Modem 的报警功能。每次触发与报警相关的事件时，应用程序都会请求发送上行消息。

上行消息的内容是通过调用 `smtc_modem_get_charge()` 从充电计数器读取的值。

应用程序还能够显示接收到的下行消息的数据和元数据。

**配置**

可以在 `main_lorawan.h` 头文件中更新多个参数：

| 常量                       | 描述                                                                           |
| -------------------------- | ----------------------------------------------------------------------------- |
| `LORAWAN_APP_PORT`         | 用于上行消息的 LoRaWAN® FPort                                                 |
| `LORAWAN_CONFIRMED_MSG_ON` | 请求网络服务器确认已接收到上行消息                                             |
| `APP_TX_DUTYCYCLE`         | 两次上行消息之间的延迟时间（以秒为单位）                                       |

## 定位

### GNSS

通过捕获由 GNSS 卫星广播的一小段信号，并提取计算设备位置所需的信息——伪距。这些信息被聚合到一个 NAV 消息中，可以发送到后端系统以计算设备位置。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_47857_JbH8r_MU_X1uz1V7_1687329215?w=1265&h=592&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

Wio-WM1110 的 GNSS 扫描器有两种操作模式：自主模式和辅助模式。

**GNSS 自主模式：** 不需要任何辅助位置信息或星历数据，旨在检测强卫星信号。因此，它适合在具有良好天空可见性的户外条件下使用。

**GNSS 辅助模式：** 它允许最有效的 GNSS 定位。辅助信息可以生成当前时间和位置可见卫星的列表，从而减少 GNSS 卫星的搜索空间，并优化定位所需的时间和能量。辅助信息专为 LPWAN 网络设计，限制了发送的数据量，尤其是下行数据的大小和频率。辅助信息包括：
* LR1110 近似位置
* 当前时间
* 最新的精简星历信息（少于 3 个月）

**GNSS 定位示例**

此示例说明了 GNSS 扫描过程：

- 配置 LoRa Basics Modem 库；以及
- 使用 *GNSS 定位中间件* 执行 GNSS *扫描与发送* 功能。

**GNSS 演示相关配置**

`main_geolocation_gnss.h` 头文件定义了几个常量，用于配置定位参数。

| 常量                                     | 说明                                                                                  | 可能的值         | 默认值        |
| ---------------------------------------- | ------------------------------------------------------------------------------------- | ---------------- | ------------- |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_AUTO` | 如果设置为 `true`：配置应用程序自动获取辅助位置                                       | {`true`,`false`} | `true`        |

如果为辅助位置选择手动模式，则以下常量定义要使用的位置。

| 常量                                     | 说明                                                                        | 可能的值                | 默认值          |
| ---------------------------------------- | --------------------------------------------------------------------------- | ----------------------- | --------------- |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LAT`  | GNSS 辅助扫描使用的纬度（十进制度数）                                       | [-90, 90] 范围内的任意 `float` | 45.181454       |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LONG` | GNSS 辅助扫描使用的经度（十进制度数）                                       | [-180, 180] 范围内的任意 `float` | 5.720893        |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_TEXT` | 辅助位置的文本表示，仅用于信息打印                                          | 任意常量 c-string       | "Grenoble, FRANCE" |

***注意***：预定义的辅助位置必须在实际位置的 150 公里范围内。

| 常量                     | 说明                                                                                      | 可能的值               | 默认值           |
| ------------------------ | ----------------------------------------------------------------------------------------- | ---------------------- | ---------------- |
| `GNSS_SCAN_GROUP_PERIOD` | 定义扫描与发送序列结束与下一次序列开始之间的时间间隔                                      | `uint32_t`            | 30               |
| `GNSS_SCAN_MODE`         | 定义用于扫描与发送序列的 GNSS 扫描模式（静态或移动）。                                    | `gnss_mw_mode_t` 中的值 | `GNSS_MW_MODE_STATIC` |

默认选择的 GNSS 扫描模式是 `GNSS_MW_MODE_STATIC`，这意味着此应用示例针对非移动对象。

### Wi-Fi

通过发现设备附近可用的 Wi-Fi b/g/n 接入点，并提取 MAC 地址以实现设备定位。目标是获取至少 2 个 MAC 地址，这些地址在发送到在线 Wi-Fi 查询服务后可用于定位设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Schematic02.png" alt="pir" width={800} height="auto" /></p>

**Wi-Fi 定位示例**

此应用程序演示了 Wi-Fi 定位中间件的使用，以及如何配置 LoRa Basics Modem 以满足前提条件。此示例说明了 Wi-Fi 扫描过程：

- 配置 LoRa Basics Modem 库；以及
- 使用 *Wi-Fi 定位中间件* 执行 Wi-Fi *扫描与发送* 功能。

**Wi-Fi 演示相关配置**

`main_geolocation_wifi.h` 头文件定义了几个常量，这些常量可以设置以定义应用程序的可配置参数。

| 常量               | 说明                                                                                      | 可能的值   | 默认值        |
| ------------------ | ----------------------------------------------------------------------------------------- | ---------- | ------------- |
| `WIFI_SCAN_PERIOD` | 定义扫描与发送序列结束与下一次序列开始之间的时间间隔                                      | `uint32_t` | 30            |

### GNSS 和 Wi-Fi

**GNSS 和 Wi-Fi 定位示例**

此示例说明了 GNSS 和 Wi-Fi 扫描过程的结合：

- 配置 LoRa Basics Modem 库；以及
- 使用 *GNSS 定位中间件* 和 *Wi-Fi 定位中间件* 并发执行 GNSS 和 Wi-Fi *扫描与发送* 功能。

**与地理定位演示相关的配置**

`main_geolocation_gnss_wifi.h` 头文件定义了若干常量，用于配置地理定位参数。

| 常量                                     | 注释                                                                                  | 可能的值         | 默认值        |
| ---------------------------------------- | ------------------------------------------------------------------------------------- | ---------------- | ------------- |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_AUTO` | 如果设置为 `true`：配置应用程序自动获取辅助位置                                       | {`true`,`false`} | `false`       |

如果为辅助位置选择了手动模式，则以下常量定义了要使用的位置。

| 常量                                     | 注释                                                                            | 可能的值                | 默认值            |
| ---------------------------------------- | ------------------------------------------------------------------------------- | ----------------------- | ----------------- |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LAT`  | GNSS 辅助扫描使用的纬度（十进制度数）                                           | [-90, 90] 范围内的任意 `float` | 45.181454         |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LONG` | GNSS 辅助扫描使用的经度（十进制度数）                                           | [-180, 180] 范围内的任意 `float` | 5.720893          |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_TEXT` | 辅助位置的文本表示，仅用于信息打印                                              | 任意常量 c-string        | "Grenoble, FRANCE" |

***注意***：预定义的辅助位置必须在实际位置的 150 公里范围内。

| 常量                     | 注释                                                                                          | 可能的值               | 默认值             |
| ------------------------ | --------------------------------------------------------------------------------------------- | ---------------------- | ------------------ |
| `GNSS_SCAN_GROUP_PERIOD` | 定义扫描和发送序列结束与下一次序列开始之间的时间间隔                                          | `uint32_t`             | 30                 |
| `GNSS_SCAN_MODE`         | 定义用于扫描和发送序列的 GNSS 扫描模式（静态或移动）。                                        | `gnss_mw_mode_t` 中的值 | `GNSS_MW_MODE_MOBILE` |

默认选择的 GNSS 扫描模式是 `GNSS_MW_MODE_MOBILE`，这意味着该应用示例面向移动对象。


## BLE

低功耗蓝牙（BLE），也称为蓝牙低功耗，是一种无线通信技术，旨在为需要长期供电、低数据传输速率和短通信距离的设备提供低功耗和低复杂度的通信方法。基于蓝牙技术优化，BLE 具有更低的功耗和更简单的协议栈，使其适用于低功耗和物联网（IoT）应用。

Wio-WM1110 的低功耗蓝牙基于 nRF52840 芯片。


**使用蓝牙例程进行测试**

SDK 中有一个“蓝牙：外围 UART”示例。测试要求您已连接到该示例并打开了连接的终端仿真器。

BLE 演示位于：
`nRF5_SDK_17.1.0_ddde560/examples/ble_peripheral/ble_app_uart/pca10056/s140/ses/`


* [使用移动设备进行测试](https://infocenter.nordicsemi.com/index.jsp?topic=%2Fug_gsg_ses%2FUG%2Fgsg%2Ftest_mobile.html)

* [使用计算机进行测试](https://infocenter.nordicsemi.com/index.jsp?topic=%2Fug_gsg_ses%2FUG%2Fgsg%2Ftest_desktop.html)

## 板载传感器

### 温湿度传感器 (SHT41)

SHT41 是一款数字湿度和温度传感器，通过 I2C 接口与微控制器或其他数字设备通信。

SHT41 传感器广泛应用于各种场景，包括 HVAC 系统、气象站、室内空气质量监测和工业过程控制。其小巧的尺寸、低功耗和高精度使其成为许多不同类型项目的热门选择。

|  | 范围 | 精度 |
| -------- | -------- | -------- |
| 温度 | -40~125°C | 0.2°C |
| 湿度 | 0~100%RH | 1.8%RH |

**代码：**

以下示例提供了初始化传感器、读取温度和湿度值以及设置温度单位的功能。

以下是代码中定义的功能的简要总结：

**SHT41Init**：一个初始化传感器的函数，通过重置传感器并等待 1 毫秒后继续操作。

**SHT41GetTemperature、SHT41GetHumidity 和 SHT41GetTempAndHumi**：用于从传感器读取温度和/或湿度值的函数。这些函数将原始传感器值转换为以摄氏度或华氏度为单位的浮点值，具体取决于当前的温度单位设置。

**SHT41SetTemperatureUnit 和 SHT41GetTemperatureUnit**：用于设置和获取温度单位的函数。

**crc8**：一个内部函数，用于计算字节数组的 CRC-8 校验和。

### 三轴加速度计 (LIS3DHTR)

LIS3DHTR 是一款高性能传感器，可测量三维加速度并提供准确可靠的读数。

LIS3DHTR 传感器通过 I2C 或 SPI 接口与微控制器或其他数字设备通信。它还包括可编程中断和多种省电模式等高级功能，以帮助最大限度地减少功耗。

| 范围 | 带宽 | 灵敏度 (LSB/g) |
| -------- | -------- | -------- | 
| ±2g, 4g, 8g, 16g | 0.5Hz ~ 625Hz | 1000 (±2g) ~ 83 (±16g) |

## Grove

开发套件 (DK) 中有 3 个 Grove 接口，可连接 400 多种 Grove 模块，并支持 ADC/UART 和 IIC 传输协议。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/grove_pins.png" alt="pir" width={600} height="auto" /></p>

### Grove IIC

开发套件中有一个 Grove IIC 接口，其中 `SDA` 位于引脚 27，`SCL` 位于引脚 26。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_iic.png" alt="pir" width={300} height="auto" /></p>

要连接到 Grove IIC 模块，必须启用传感器电源：`I2C_PWR`（引脚 7）。此引脚控制 IIC 信号线上的上拉电压：

```cpp
#define IIC_POWER          7
```

在使用前需要在 `sdk_config.h` 文件中启用 TWI。

```cpp
// <e> TWI_ENABLED - nrf_drv_twi - TWI/TWIM 外设驱动 - 传统层
//==========================================================
#ifndef TWI_ENABLED
#define TWI_ENABLED 1
#endif
// <e> TWI0_ENABLED - 启用 TWI0 实例
//==========================================================
#ifndef TWI0_ENABLED
#define TWI0_ENABLED 1
#endif
// <q> TWI0_USE_EASY_DMA  - 使用 EasyDMA（如果存在）
#ifndef TWI0_USE_EASY_DMA
#define TWI0_USE_EASY_DMA 1
#endif
// </e>
// <e> TWI1_ENABLED - 启用 TWI1 实例
//==========================================================
#ifndef TWI1_ENABLED
#define TWI1_ENABLED 1
#endif
// <q> TWI1_USE_EASY_DMA  - 使用 EasyDMA（如果存在）
 #ifndef TWI1_USE_EASY_DMA
#define TWI1_USE_EASY_DMA 1
#endif
```

**示例代码**

以下示例通过 IIC 接口读取 [SHT41 温湿度传感器](https://wiki.seeedstudio.com/cn/Grove-SHT4x/) 的值，并将其打印到串行监视器。

```cpp
#include "nrf_gpio.h"
#include "nrf_gpiote.h"
#include "nrf_drv_gpiote.h"
#include "nrf_delay.h"
#include "app_error.h"
#include "sht41.h"
#include "nrf_drv_twi.h"

int main(void)
{   
    float   temp = 0;
    float   humi = 0;
    hal_i2c_master_init( );
    hal_gpio_init_out( SENSOR_POWER, HAL_GPIO_SET ); 
    nrf_delay_ms(10);

    SHT41Init();
    
    while(1){
        SHT41GetTempAndHumi(&temp,&humi);
        nrf_delay_ms(1000);  
        printf("temperature:%.3f humidity:%.3f\n",temp,humi);
    }

}
```

然后您将获得温度和湿度值：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/valueSHT41.png" alt="pir" width={500} height="auto" /></p>

### Grove UART

Wio-WM1110 开发套件具有两个 UART 外设，分别为 `uart0` 和 `uart1`。`uart0` 引脚连接到 CH340C 用于调试，而 `uart1` 用作 Grove UART 接口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_uart.png" alt="pir" width={300} height="auto" /></p>

根据原理图，TXD 位于引脚 8，RXD 位于引脚 6。

```cpp
#define     LED1                      13
#define     LED2                      14
#define     TXD                       8
#define     RXD                       6
#define     UART_TX_RX_BUF_SIZE       256
```

:::提示
除了 ADC 等模拟接口外，nRF52840 芯片的其他数字外设具有固定引脚。然而，其他数字外设可以重新映射到任意引脚。例如，可以交换 RXD 和 TXD 引脚配置。
:::

在使用前需要在 `sdk_config.h` 文件中启用 UART：

```cpp
/ <e> NRFX_UARTE_ENABLED - nrfx_uarte - UARTE 外设驱动
//==========================================================
#ifndef NRFX_UARTE_ENABLED
#define NRFX_UARTE_ENABLED 1
#endif
// <o> NRFX_UARTE0_ENABLED - 启用 UARTE0 实例 
#ifndef NRFX_UARTE0_ENABLED
#define NRFX_UARTE0_ENABLED 1
#endif

// <o> NRFX_UARTE1_ENABLED - 启用 UARTE1 实例 
#ifndef NRFX_UARTE1_ENABLED
#define NRFX_UARTE1_ENABLED 1
#endif

// <e> UART_ENABLED - nrf_drv_uart - UART/UARTE 外设驱动 - 传统层
//==========================================================
#ifndef UART_ENABLED
#define UART_ENABLED 1
#endif
```

**示例代码**

以下示例代码实现了串口传输和接收带反馈的功能。

```cpp
#include "nrf_gpio.h"
#include "nrf_gpiote.h"
#include "nrf_drv_gpiote.h"
#include "nrf_delay.h"
#include "smtc_hal.h"
#include "app_uart.h"
#include "app_error.h"
#include "nrf_uart.h"
#include "nrf_drv_uart.h"

static void uart_handleEvent( app_uart_evt_t *pEvent );

APP_UART_DEF( uart, 0, UART_TX_RX_BUF_SIZE, uart_handleEvent );

static app_uart_comm_params_t const commParams =
{
    .rx_pin_no    = RXD,
    .tx_pin_no    = TXD,
    .rts_pin_no   = NRF_UART_PSEL_DISCONNECTED,
    .cts_pin_no   = NRF_UART_PSEL_DISCONNECTED,                    
    .flow_control = APP_UART_FLOW_CONTROL_DISABLED,
    .use_parity   = false,
    .baud_rate    = NRF_UART_BAUDRATE_115200
};

void uart_tx( uint8_t* buff, uint16_t len )
{
        for( uint16_t i = 0; i < len; i++ )
        {
            app_uart_put( &uart, buff[i] );
        }
}


int main(void)
{
    uint32_t err_code;
    uart.comm_params = &commParams;
    uint8_t arr[] = "hello world\n";
    nrf_gpio_cfg_output(LED1);
    nrf_gpio_cfg_output(LED2);
    nrf_gpio_pin_clear(LED1);
    nrf_gpio_pin_clear(LED2);
    app_uart_init( &uart, &uart_buffers, APP_IRQ_PRIORITY_LOWEST );
    
    
    while( 1 )
    {
        nrf_delay_ms(1000);
        nrf_gpio_pin_toggle(LED2);
        uart_tx(arr,strlen(arr));
    }
}
            
void uart_handleEvent(app_uart_evt_t * p_event)
{
	uint8_t dat;
    if (p_event->evt_type == APP_UART_COMMUNICATION_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_communication);
    }
    else if (p_event->evt_type == APP_UART_FIFO_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_code);
    }
	
    else if (p_event->evt_type == APP_UART_DATA_READY)
	{
		app_uart_get(&uart,&dat); 
		app_uart_put(&uart,dat); 
	}
    else if (p_event->evt_type == APP_UART_TX_EMPTY) 
	{
		nrf_gpio_pin_toggle(LED1);
	}
}
```

### Grove ADC

开发套件（DK）上有八个ADC外设（0~7），其中`ADC6`和`ADC7`被用作Grove ADC端口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_adc.png" alt="pir" width={300} height="auto" /></p>

:::tip 注意
ADC引脚是固定的，不能重新映射。
:::

ADC引脚的对应关系如下表所示：

|ADC0|ADC1|ADC2|ADC3|ADC4|ADC5|ADC6|ADC7|
|:-------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
|2|3|4|5|28|29|30|31

在使用之前，需要在`sdk_config.h`文件中启用SAADC：

```cpp
// <e> SAADC_ENABLED - nrf_drv_saadc - SAADC peripheral driver - legacy layer
//==========================================================
#ifndef SAADC_ENABLED
#define SAADC_ENABLED 1
#endif
// <e> NRFX_SAADC_ENABLED - nrfx_saadc - SAADC peripheral driver
//==========================================================
#ifndef NRFX_SAADC_ENABLED
#define NRFX_SAADC_ENABLED 1
#endif
// <o> SAADC_CONFIG_RESOLUTION  - Resolution
 
// <0=> 8 bit 
// <1=> 10 bit 
// <2=> 12 bit 
// <3=> 14 bit 

#ifndef SAADC_CONFIG_RESOLUTION
#define SAADC_CONFIG_RESOLUTION 2
#endif
```

**示例代码**

以下是一个针对ADC6的示例程序，实现了读取ADC6引脚单通道模拟输入值的功能，并通过UART输出测量的ADC值：

```cpp
#include "nrf_gpio.h"
#include "nrf_gpiote.h"
#include "nrf_drv_gpiote.h"
#include "nrf_delay.h"
#include "app_uart.h"
#include "app_error.h"
#include "nrf_uart.h"
#include "nrf_drv_uart.h"
#include "nrf_drv_saadc.h"
#define     LED1                     13
#define     LED2                     14
#define     TXD                       8
#define     RXD                       6
#define     UART_TX_RX_BUF_SIZE       256

static void uart_handleEvent( app_uart_evt_t *pEvent );

APP_UART_DEF( uart, 0, UART_TX_RX_BUF_SIZE, uart_handleEvent );

static app_uart_comm_params_t const commParams =
{
    .rx_pin_no    = RXD,
    .tx_pin_no    = TXD,
    .rts_pin_no   = NRF_UART_PSEL_DISCONNECTED,
    .cts_pin_no   = NRF_UART_PSEL_DISCONNECTED,                    
    .flow_control = APP_UART_FLOW_CONTROL_DISABLED,
    .use_parity   = false,
    .baud_rate    = NRF_UART_BAUDRATE_115200
};

void uart_tx( uint8_t* buff, uint16_t len )
{
        for( uint16_t i = 0; i < len; i++ )
        {
            app_uart_put( &uart, buff[i] );
        }
}

void ADC_Interrupt(nrfx_saadc_evt_t const *p_event){
    
}

void uart_handleEvent(app_uart_evt_t * p_event)
{
	uint8_t dat;
    if (p_event->evt_type == APP_UART_COMMUNICATION_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_communication);
    }
    else if (p_event->evt_type == APP_UART_FIFO_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_code);
    }
	
    else if (p_event->evt_type == APP_UART_DATA_READY)
	{
		app_uart_get(&uart,&dat); 
		//app_uart_put(&uart,dat); 
	}
    else if (p_event->evt_type == APP_UART_TX_EMPTY) 
	{
		//nrf_gpio_pin_toggle(LED1);
	}
}

int main(void)
{
    nrf_saadc_value_t  saadc_val = 0; 
    uint8_t arr[32];
    nrf_saadc_channel_config_t channel_config = 
    {                                                   
        .resistor_p = NRF_SAADC_RESISTOR_DISABLED,      
        .resistor_n = NRF_SAADC_RESISTOR_DISABLED,      
        .gain       = NRF_SAADC_GAIN1_6,                
        .reference  = NRF_SAADC_REFERENCE_INTERNAL,     
        .acq_time   = NRF_SAADC_ACQTIME_10US,           
        .mode       = NRF_SAADC_MODE_SINGLE_ENDED,      
        .burst      = NRF_SAADC_BURST_DISABLED,         
        .pin_p      = NRF_SAADC_INPUT_AIN6,       
        .pin_n      = NRF_SAADC_INPUT_DISABLED          
    };
    
    nrf_drv_saadc_init(NULL, ADC_Interrupt);
    nrf_drv_saadc_channel_init(0, &channel_config);

    uart.comm_params = &commParams;
    app_uart_init( &uart, &uart_buffers, APP_IRQ_PRIORITY_LOWEST );

    nrf_gpio_cfg_output(LED2);
    while( 1 )
    {
        nrf_drv_saadc_sample_convert (0,&saadc_val);
        sprintf(arr,"value:%d\n",saadc_val);
        uart_tx(arr,strlen(arr));
        nrf_delay_ms(1000);
        nrf_gpio_pin_toggle(LED2);
    }
}
```

## 资源

[Seeed_Wio_WM1110_Dev_Board](https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board)

[nRF5-SDK](https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs)


## 技术支持

**需要帮助解决 Wio-WM1110 开发套件的问题吗？我们随时为您提供支持！**




<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions" class="button_discussion"></a>
</div>