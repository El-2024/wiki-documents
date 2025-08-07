---
description: 本文介绍如何在 XIAO nRF52840 Sense 上使用 QSPI Flash。
title: XIAO nRF52840 Sense 的 QSPI Flash
keywords:
- QSPI Flash
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao-ble-qspi-flash-usage
last_update:
  date: 05/12/2023
  author: Citric
---

# Seeed Studio XIAO nRF52840 Sense 上的 QSPI Flash 使用

:::tip
特别感谢社区用户 **JM_Laird** 和 **Haakonish** 对本教程的支持和帮助！本文使用的程序来源于 Github 用户 **PMCheetham**，源代码可以在**[这里](https://github.com/PMCheetham/SEEED_nRF52840_QSPI/tree/main)**找到。
:::


欢迎来到这个关于在 XIAO nRF52840 和 XIAO nRF52840 Sense 上使用 QSPI Flash 的教程！XIAO 是一款功能强大且紧凑的开发板，具有 256 KB RAM、1 MB Flash 和 2 MB 板载 Flash。在本教程中，您将学习如何利用 XIAO 开发板上的 QSPI Flash，这可以大大扩展存储容量并加速您的项目。让我们开始吧！

以下是 PMCheetham 提供的示例程序，该程序在 XIAO nRF52840 Sense 上运行良好。通过以下程序，您可以自由使用 XIAO 上的 QSPI Flash。

```cpp
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "nrfx_qspi.h"
#include "app_util_platform.h"
#include "nrf_log.h"
#include "nrf_log_ctrl.h"
#include "nrf_log_default_backends.h"
#include "sdk_config.h"
#include "nrf_delay.h"
#include "avr/interrupt.h"

/* 
 * 这段代码的奇怪部分...或者说我不理解的地方
 * 
 * 在Setup()中第一次READ之后，它成功读取了数据（返回0 = NRFX_SUCCESS），但状态标志
 * 的高8位设置为0xFF，这导致nrfx_qspi_mem_busy_check()显示17（返回17 = NRFX_ERROR_BUSY）。
 * 然而，用8掩码STATUS寄存器显示Ready Status = 1，QSPI已准备就绪！
 * 这就是我编写QSPI_IsReady()的原因。
 * 
 * 如果你尝试像这样设置nrf_qspi_phy_conf_t，它作为结构体不可见：
 *   QSPIConfig.phy_if {
 *     .xxx = yyy,
 *     .aaa = bbb
 *   };
 *   
 * 我不知道48ms深度掉电模式（DPM）的意义是什么。
 * 如果48ms内不使用，它会进入DPM，然后在收到指令时需要48ms来唤醒吗？
 * 
 * 希望你喜欢这个小代码片段！随意修改和使用它。
 * 感谢Case ID: 224515中的JM_Laird和Haakonish。
 * 是的，我本可以让它更整洁，但真的需要将一些部分添加到项目中并在那里整理它们！
 */

// QSPI设置
#define QSPI_STD_CMD_WRSR   0x01
#define QSPI_STD_CMD_RSTEN  0x66
#define QSPI_STD_CMD_RST    0x99
#define QSPI_DPM_ENTER      0x0003 // 3 x 256 x 62.5ns = 48ms
#define QSPI_DPM_EXIT       0x0003

static uint32_t               *QSPI_Status_Ptr = (uint32_t*) 0x40029604;  // 为SEEED XIAO BLE - nRF52840设置
static nrfx_qspi_config_t     QSPIConfig;
static nrf_qspi_cinstr_conf_t QSPICinstr_cfg;
static const uint32_t         MemToUse = 64 * 1024;  // 修改此值以创建更大的读写，64Kb是擦除的大小
static bool                   Debug_On = true;
static uint16_t               pBuf[MemToUse / 2] = {0};  // 使用16位，因为这是此内存将要使用的格式
static uint32_t               *BufMem = (uint32_t*) &pBuf;
static bool                   QSPIWait = false;
// QSPI设置完成

static void qspi_handler(nrfx_qspi_evt_t event, void *p_context) {
  // UNUSED_PARAMETER(p_context);
  // Serial.println("QSPI中断");
  // if (event == NRFX_QSPI_EVENT_DONE) {
  //   QSPI_HasFinished = true;
  // }
}

static void QSPI_Status(char ASender[]) { // 打印QSPI状态
  Serial.print("(");
  Serial.print(ASender);
  Serial.print(") QSPI忙碌/空闲状态...结果 = ");
  Serial.println(nrfx_qspi_mem_busy_check() & 8);
  Serial.print("(");
  Serial.print(ASender);
  Serial.print(") QSPI状态标志 = 0x");
  Serial.print(NRF_QSPI->STATUS, HEX);
  Serial.print("（来自NRF_QSPI）或0x");
  Serial.print(*QSPI_Status_Ptr, HEX);
  Serial.println("（来自*QSPI_Status_Ptr）");
}

static void QSPI_PrintData(uint16_t *AnAddress, uint32_t AnAmount) {
  uint32_t i;

  Serial.print("数据："); 
  for (i = 0; i < AnAmount; i++) {
    Serial.print(" 0x");
    Serial.print(*(AnAddress + i), HEX);
  }
  Serial.println("");
}

static nrfx_err_t QSPI_IsReady() {
  if (((*QSPI_Status_Ptr & 8) == 8) && (*QSPI_Status_Ptr & 0x01000000) == 0) {
    return NRFX_SUCCESS;  
  } else {
   return NRFX_ERROR_BUSY; 
  }
}

static nrfx_err_t QSPI_WaitForReady() {
  while (QSPI_IsReady() == NRFX_ERROR_BUSY) {
    if (Debug_On) {
      Serial.print("*QSPI_Status_Ptr & 8 = ");
      Serial.print(*QSPI_Status_Ptr & 8);
      Serial.print(", *QSPI_Status_Ptr & 0x01000000 = 0x");
      Serial.println(*QSPI_Status_Ptr & 0x01000000, HEX);
      QSPI_Status("QSPI_WaitForReady");
    }   
  }
  return NRFX_SUCCESS;
}

static nrfx_err_t QSPI_Initialise() { // 初始化QSPI和NRF LOG
  uint32_t Error_Code;

  NRF_LOG_INIT(NULL); // 初始化NRF日志
  NRF_LOG_DEFAULT_BACKENDS_INIT();
  // QSPI配置
  QSPIConfig.xip_offset = NRFX_QSPI_CONFIG_XIP_OFFSET;                       
  QSPIConfig.pins = { // 为SEEED XIAO BLE - nRF52840设置                                                     
   .sck_pin     = 21,                                
   .csn_pin     = 25,                                
   .io0_pin     = 20,                                
   .io1_pin     = 24,                                
   .io2_pin     = 22,                                
   .io3_pin     = 23,                                
  };                                                                  
  QSPIConfig.irq_priority = (uint8_t)NRFX_QSPI_CONFIG_IRQ_PRIORITY;           
  QSPIConfig.prot_if = {                                                        
    // .readoc     = (nrf_qspi_readoc_t)NRFX_QSPI_CONFIG_READOC,
    .readoc     = (nrf_qspi_readoc_t)NRF_QSPI_READOC_READ4O,       
    // .writeoc    = (nrf_qspi_writeoc_t)NRFX_QSPI_CONFIG_WRITEOC,     
    .writeoc    = (nrf_qspi_writeoc_t)NRF_QSPI_WRITEOC_PP4O,
    .addrmode   = (nrf_qspi_addrmode_t)NRFX_QSPI_CONFIG_ADDRMODE,   
    .dpmconfig  = false,                                            
  };                   
  QSPIConfig.phy_if.sck_freq   = (nrf_qspi_frequency_t)NRF_QSPI_FREQ_32MDIV1;  // 我必须这样做，因为它抱怨nrf_qspi_phy_conf_t不可见                                        
  // QSPIConfig.phy_if.sck_freq   = (nrf_qspi_frequency_t)NRFX_QSPI_CONFIG_FREQUENCY; 
  QSPIConfig.phy_if.spi_mode   = (nrf_qspi_spi_mode_t)NRFX_QSPI_CONFIG_MODE;
  QSPIConfig.phy_if.dpmen      = false;
  // QSPI配置完成
  // 设置QSPI以允许DPM但将其关闭
  QSPIConfig.prot_if.dpmconfig = true;
  NRF_QSPI->DPMDUR = (QSPI_DPM_ENTER << 16) | QSPI_DPM_EXIT; // 在Nordic Q&A页面上找到这个，设置深度掉电模式定时器
  Error_Code = 1;
  while (Error_Code != 0) {
    Error_Code = nrfx_qspi_init(&QSPIConfig, NULL, NULL);
    if (Error_Code != NRFX_SUCCESS) {
      if (Debug_On) {
        Serial.print("(QSPI_Initialise) nrfx_qspi_init返回：");
        Serial.println(Error_Code);
      }
    } else {
      if (Debug_On) {
        Serial.println("(QSPI_Initialise) nrfx_qspi_init成功");
      }
    }
  }
  QSPI_Status("QSPI_Initialise（在QSIP_Configure_Memory之前）");
  QSIP_Configure_Memory();
  if (Debug_On) {
    Serial.println("(QSPI_Initialise) 等待QSPI准备就绪...");
  }
  NRF_QSPI->TASKS_ACTIVATE = 1;
  QSPI_WaitForReady();
  if (Debug_On) {
    Serial.println("(QSPI_Initialise) QSPI已准备就绪");
  }
  return QSPI_IsReady(); 
}

static void QSPI_Erase(uint32_t AStartAddress) {
  uint32_t   TimeTaken;
  bool       QSPIReady = false;
  bool       AlreadyPrinted = false;

  if (Debug_On) {
    Serial.println("(QSPI_Erase) 正在擦除内存");
  }
  while (!QSPIReady) {
    if (QSPI_IsReady() != NRFX_SUCCESS) {
      if (!AlreadyPrinted) {
        QSPI_Status("QSPI_Erase（等待中）");
        AlreadyPrinted = true;
      }
    } else {
      QSPIReady = true;
      QSPI_Status("QSPI_Erase（等待循环跳出）");
    }
  }
  if (Debug_On) {
    QSPI_Status("QSPI_Erase（完成等待）");
    TimeTaken = millis();
  }
  if (nrfx_qspi_erase(NRF_QSPI_ERASE_LEN_64KB, AStartAddress) != NRFX_SUCCESS) {
    if (Debug_On) {
      Serial.print("(QSPI_Initialise_Page) QSPI地址0x");
      Serial.print(AStartAddress, HEX);
      Serial.println("擦除失败！");
    }
  } else {     
    if (Debug_On) {
      TimeTaken = millis() - TimeTaken;
      Serial.print("(QSPI_Initialise_Page) QSPI花费");
      Serial.print(TimeTaken);
      Serial.println("ms擦除64Kb页面");
    }
  }
}

static void QSIP_Configure_Memory() {
  // uint8_t  temporary = 0x40;
  uint8_t  temporary[] = {0x00, 0x02};
  uint32_t Error_Code;
  
  QSPICinstr_cfg = {
    .opcode    = QSPI_STD_CMD_RSTEN,
    .length    = NRF_QSPI_CINSTR_LEN_1B,
    .io2_level = true,
    .io3_level = true,
    .wipwait   = QSPIWait,
    .wren      = true
  };
  QSPI_WaitForReady();
  if (nrfx_qspi_cinstr_xfer(&QSPICinstr_cfg, NULL, NULL) != NRFX_SUCCESS) { // 发送复位使能
    if (Debug_On) {
      Serial.println("(QSIP_Configure_Memory) QSPI'发送复位使能'失败！");
    }
  } else {
    QSPICinstr_cfg.opcode = QSPI_STD_CMD_RST;
    QSPI_WaitForReady();
    if (nrfx_qspi_cinstr_xfer(&QSPICinstr_cfg, NULL, NULL) != NRFX_SUCCESS) { // 发送复位命令
      if (Debug_On) {
        Serial.println("(QSIP_Configure_Memory) QSPI复位失败！");
      }
    } else {
      QSPICinstr_cfg.opcode = QSPI_STD_CMD_WRSR;
      QSPICinstr_cfg.length = NRF_QSPI_CINSTR_LEN_3B;
      QSPI_WaitForReady();
      if (nrfx_qspi_cinstr_xfer(&QSPICinstr_cfg, &temporary, NULL) != NRFX_SUCCESS) { // 切换到qspi模式
        if (Debug_On) {
          Serial.println("(QSIP_Configure_Memory) QSPI切换到QSPI模式失败！");
        }
      } else {
          QSPI_Status("QSIP_Configure_Memory");
      }
    }
  }
}

void setup() {
  uint32_t Error_Code;
  uint32_t TimeTaken;
  uint16_t i;

  delay(10000);
  Serial.begin(9600);
  while (!Serial) {}

  if (Debug_On) {
    Serial.println("(Setup) QSPI正在初始化...");
  }
  if (QSPI_Initialise() != NRFX_SUCCESS) {
    if (Debug_On) {
      Serial.println("(Setup) QSPI内存启动失败！");
    }
  } else {
    if (Debug_On) {
      Serial.println("(Setup) QSPI已初始化并准备就绪");
      QSPI_Status("Setup（初始化后）");
    }
  }

  if (Debug_On) {
    Serial.print("(Setup) QSPI即将被读取然后擦除。当前忙碌状态 = ");
    Serial.println(QSPI_IsReady());
  }

  // QSPI速度测试
  if (Debug_On) {
    QSPI_Status("Setup（读取前）");
    TimeTaken = millis();
  }
  Error_Code = nrfx_qspi_read(pBuf, MemToUse, 0x0);
  if (Debug_On) {
    TimeTaken = millis() - TimeTaken;
    Serial.print("(Setup) QSPI花费");
    Serial.print(TimeTaken);
    Serial.print("ms读取");
    Serial.print(MemToUse / 1024);
    Serial.print("Kb...读取结果 = ");
    Serial.println(Error_Code);
    QSPI_Status("Setup（读取后）");
    QSPI_WaitForReady();
    QSPI_PrintData(&pBuf[0], 10);
  }
  if (Debug_On) {
    Serial.println("QSPI正在擦除64Kb内存");
  }
  QSPI_Erase(0); 
  if (Debug_On) {
    Serial.println("(Setup) QSPI擦除后读取");
    TimeTaken = millis();
  }
  QSPI_WaitForReady();
  Error_Code = nrfx_qspi_read(pBuf, MemToUse, 0x0);
  if (Debug_On) {
    TimeTaken = millis() - TimeTaken;
    Serial.print("(Setup) QSPI花费");
    Serial.print(TimeTaken);
    Serial.print("ms读取");
    Serial.print(MemToUse / 1024);
    Serial.print("Kb...读取结果 = ");
    Serial.println(Error_Code);
    QSPI_WaitForReady();
    QSPI_PrintData(&pBuf[0], 10);
  }
  for (i = 0; i < MemToUse / 2; i++) {
    pBuf[i] = i * 2;
  }
  QSPI_WaitForReady();
  if (Debug_On) {
    Serial.println("(Setup) QSPI写入前");
    TimeTaken = millis();
  }
  Error_Code = nrfx_qspi_write(pBuf, MemToUse, 0x0);
  if (Debug_On) {
    TimeTaken = millis() - TimeTaken;
    Serial.print("(Setup) QSPI花费");
    Serial.print(TimeTaken);
    Serial.print("ms写入");
    Serial.print(MemToUse / 1024);
    Serial.print("Kb...写入结果 = ");
    Serial.println(Error_Code);
  }
  QSPI_WaitForReady();
  if (Debug_On) {
    Serial.println("(Setup) QSPI读取前");
    TimeTaken = millis();
  }
  Error_Code = nrfx_qspi_read(pBuf, MemToUse, 0x0);
  if (Debug_On) {
    TimeTaken = millis() - TimeTaken;
    Serial.print("(Setup) QSPI花费");
    Serial.print(TimeTaken);
    Serial.print("ms读取");
    Serial.print(MemToUse / 1024);
    Serial.print("Kb...读取结果 = ");
    Serial.println(Error_Code);
    QSPI_WaitForReady();
    QSPI_PrintData(&pBuf[0], 10);
  }
  QSPI_WaitForReady();
  QSPI_Status("Setup");
  // QSPI速度测试完成
}

void loop() {
  delay(10000);
}
```

该程序仅适用于 **mbed** 开发板，因此在编译和上传时，请在 mbed 选项卡下选择 XIAO nRF52840。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" alt="pir" width={800} height="auto" /></p>


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