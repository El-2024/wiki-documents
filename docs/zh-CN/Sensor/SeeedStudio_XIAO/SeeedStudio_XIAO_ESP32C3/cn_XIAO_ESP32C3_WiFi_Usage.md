---
description: Seeed Studio XIAO ESP32C3 上的 WiFi 使用
title: WiFi 使用
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO_ESP32C3_WiFi_Usage
last_update:
  date: 07/26/2024
  author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 开始

Seeed Studio XIAO ESP32C3 支持 IEEE 802.11b/g/n WiFi 连接。本教程将介绍在此开发板上使用 WiFi 的基础知识。

:::caution attention
⚠️ 将开发板用作热点（接入点）时请小心。它可能会过热并造成烫伤。
:::

## 硬件设置

- **步骤 1.** 将随附的 **WiFi/ 蓝牙天线** 连接到开发板上的 **IPEX 连接器**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-6.png" alt="pir" width={130} height="auto" /></div>

- **步骤 2.** 通过 USB Type-C 数据线将 XIAO ESP32C3 连接到您的计算机

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" alt="pir" width={120} height="auto" /></div>

## 模式 1：STA 模式（站点模式）- 扫描 WiFi 网络

### 扫描 Wi-Fi 接入点

在此示例中，我们将使用 XIAO ESP32C3 扫描其周围可用的 WiFi 网络。这里开发板将配置为站点（STA）模式。

- **步骤 1.** 将下面的代码复制并粘贴到 Arduino IDE 中

<Tabs>
  <TabItem value="basic wifi scan" label="基础 Wi-Fi 扫描" default>

```cpp
#include "WiFi.h"

void setup() {
  Serial.begin(115200);

  // 将 WiFi 设置为站点模式，如果之前连接过 AP 则断开连接
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  Serial.println("Setup done");
}

void loop() {
  Serial.println("scan start");

  // WiFi.scanNetworks 将返回找到的网络数量
  int n = WiFi.scanNetworks();
  Serial.println("scan done");
  if (n == 0) {
    Serial.println("no networks found");
  } else {
    Serial.print(n);
    Serial.println(" networks found");
    for (int i = 0; i < n; ++i) {
      // 打印找到的每个网络的 SSID 和 RSSI
      Serial.print(i + 1);
      Serial.print(": ");
      Serial.print(WiFi.SSID(i));
      Serial.print(" (");
      Serial.print(WiFi.RSSI(i));
      Serial.print(")");
      Serial.println((WiFi.encryptionType(i) == WIFI_AUTH_OPEN) ? " " : "*");
      delay(10);
    }
  }
  Serial.println("");

  // 再次扫描前等待一段时间
  delay(5000);
}
```

</TabItem>
<TabItem value="advan-wifi-scan" label="高级 Wi-Fi 扫描">

```cpp title="https://github.com/espressif/arduino-esp32/blob/master/libraries/WiFi/examples/WiFiScan/WiFiScan.ino"
/*
 *  此示例演示如何扫描WiFi网络。
 *  该API基于Arduino WiFi Shield库，但由于支持更新的WiFi功能，因此有重大变化。
 *  例如，`encryptionType()`的返回值不同，因为支持更现代的加密方式。
 */
#include "WiFi.h"

void setup() {
  Serial.begin(115200);

  // 将WiFi设置为站点模式，如果之前连接过AP则断开连接。
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  Serial.println("Setup done");
}

void loop() {
  Serial.println("Scan start");

  // WiFi.scanNetworks将返回找到的网络数量。
  int n = WiFi.scanNetworks();
  Serial.println("Scan done");
  if (n == 0) {
    Serial.println("no networks found");
  } else {
    Serial.print(n);
    Serial.println(" networks found");
    Serial.println("Nr | SSID                             | RSSI | CH | Encryption");
    for (int i = 0; i < n; ++i) {
      // 打印找到的每个网络的SSID和RSSI
      Serial.printf("%2d", i + 1);
      Serial.print(" | ");
      Serial.printf("%-32.32s", WiFi.SSID(i).c_str());
      Serial.print(" | ");
      Serial.printf("%4ld", WiFi.RSSI(i));
      Serial.print(" | ");
      Serial.printf("%2ld", WiFi.channel(i));
      Serial.print(" | ");
      switch (WiFi.encryptionType(i)) {
        case WIFI_AUTH_OPEN:            Serial.print("open"); break;
        case WIFI_AUTH_WEP:             Serial.print("WEP"); break;
        case WIFI_AUTH_WPA_PSK:         Serial.print("WPA"); break;
        case WIFI_AUTH_WPA2_PSK:        Serial.print("WPA2"); break;
        case WIFI_AUTH_WPA_WPA2_PSK:    Serial.print("WPA+WPA2"); break;
        case WIFI_AUTH_WPA2_ENTERPRISE: Serial.print("WPA2-EAP"); break;
        case WIFI_AUTH_WPA3_PSK:        Serial.print("WPA3"); break;
        case WIFI_AUTH_WPA2_WPA3_PSK:   Serial.print("WPA2+WPA3"); break;
        case WIFI_AUTH_WAPI_PSK:        Serial.print("WAPI"); break;
        default:                        Serial.print("unknown");
      }
      Serial.println();
      delay(10);
    }
  }
  Serial.println("");

  // 删除扫描结果以释放内存供下面的代码使用。
  WiFi.scanDelete();

  // 再次扫描前稍等一会儿。
  delay(5000);
}
```

</TabItem>
</Tabs>

**步骤 2.** 上传代码并打开串口监视器开始扫描WiFi网络

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-1.jpg" alt="pir" width={500} height="auto" /></div>

### 连接到WiFi网络

在这个示例中，我们将使用XIAO ESP32C3连接到WiFi网络。

- **步骤 1.** 复制并粘贴以下代码到Arduino IDE中

<Tabs>
  <TabItem value="basic wifi connect" label="基本Wi-Fi连接" default>

```cpp
#include <WiFi.h>

const char* ssid = "your-ssid";
const char* password = "your-password";

void setup() {
  Serial.begin(115200);
  delay(10);

  // 我们首先连接到WiFi网络
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}
void loop() {}
```

</TabItem>
  <TabItem value="advan-wifi-connect" label="高级 Wi-Fi 连接">

```cpp title="https://github.com/espressif/arduino-esp32/blob/master/libraries/WiFi/examples/WiFiClientConnect/WiFiClientConnect.ino"
#include <WiFi.h>

const char *ssid = "your-ssid";
const char *password = "your-password";

void setup() {
  Serial.begin(115200);
  delay(10);

  // 我们首先连接到 WiFi 网络
  Serial.println();
  Serial.println();
  Serial.print("正在连接到 ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  // 将尝试大约 10 秒（20 次 x 500ms）
  int tryDelay = 500;

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  while (true) {
      switch (WiFi.status()) {
        case WL_NO_SSID_AVAIL: Serial.println("[WiFi] 未找到 SSID"); break;
        case WL_CONNECT_FAILED:
          Serial.print("[WiFi] 失败 - WiFi 未连接！原因：");
          return;
          break;
        case WL_CONNECTION_LOST: Serial.println("[WiFi] 连接丢失"); break;
        case WL_SCAN_COMPLETED:  Serial.println("[WiFi] 扫描完成"); break;
        case WL_DISCONNECTED:    Serial.println("[WiFi] WiFi 已断开连接"); break;
        case WL_CONNECTED:
          Serial.println("[WiFi] WiFi 已连接！");
          Serial.print("[WiFi] IP 地址：");
          Serial.println(WiFi.localIP());
          return;
          break;
        default:
          Serial.print("[WiFi] WiFi 状态：");
          Serial.println(WiFi.status());
          break;
      }
          delay(tryDelay);

    if (numberOfTries <= 0) {
      Serial.print("[WiFi] 连接 WiFi 失败！");
      // 使用断开连接功能强制停止尝试连接
      WiFi.disconnect();
      return;
    } else {
      numberOfTries--;
    }
  }

  Serial.println("");
  Serial.println("WiFi 已连接");
  Serial.println("IP 地址：");
  Serial.println(WiFi.localIP());
}
void loop() {}
```

</TabItem>
</Tabs>

**步骤 2.** 上传代码并打开串口监视器，检查开发板是否已连接到WiFi网络

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-2.jpg" alt="pir" width={500} height="auto" /></div>

## 模式 2：软AP模式（作为STA工作）- 用作接入点

在这个示例中，我们将使用XIAO ESP32C3作为WiFi接入点，其他设备可以连接到它。这类似于手机上的WiFi热点功能。

- **步骤 1.** 将下面的代码复制并粘贴到Arduino IDE中

```cpp
#include "WiFi.h"
void setup() {
  Serial.begin(115200);
  WiFi.softAP("ESP_AP", "123456789");
}

void loop() {
  Serial.print("Host Name:");
  Serial.println(WiFi.softAPgetHostname());
  Serial.print("Host IP:");
  Serial.println(WiFi.softAPIP());
  Serial.print("Host IPV6:");
#if ESP_ARDUINO_VERSION_MAJOR < 3
  Serial.println(WiFi.softAPIPv6());
#else
  Serial.println(WiFi.softAPlinkLocalIPv6());
#endif
  Serial.print("Host SSID:");
  Serial.println(WiFi.SSID());
  Serial.print("Host Broadcast IP:");
  Serial.println(WiFi.softAPBroadcastIP());
  Serial.print("Host mac Address:");
  Serial.println(WiFi.softAPmacAddress());
  Serial.print("Number of Host Connections:");
  Serial.println(WiFi.softAPgetStationNum());
  Serial.print("Host Network ID:");
  Serial.println(WiFi.softAPNetworkID());
  Serial.print("Host Status:");
  Serial.println(WiFi.status());
  delay(1000);
}
```

:::caution note
如果您的ESP32开发板版本已经更新到3.0.0，您需要将代码从```softAPIPv6()```更改为```softAPlinkLocalIPv6()```。
:::

**步骤 2.** 上传代码并打开串口监视器，查看WiFi接入点的更多详细信息

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-3.png" alt="pir" width={700} height="auto" /></div>

**步骤 3.** 在PC或手机上扫描WiFi网络，您将能够使用我们在代码中指定的密码连接到这个新创建的网络

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-4.png" alt="pir" width="{300}" height="auto" /></div>

现在您将看到串口监视器上的**Number of Host Connections**已更新为**1**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-5.png" alt="pir" width={700} height="auto" /></div>

## XIAO ESP32C3 & Home Assistant

我们很高兴地宣布，我们已经支持XIAO ESP32C3接入ESPHome和Home Assistant！

有关本节的更多信息，请参考相关教程。

- [使用ESPHome将Grove模块连接到Home Assistant](https://wiki.seeedstudio.com/cn/Connect-Grove-to-Home-Assistant-ESPHome/)
- [LinkStar Home Assistant](https://wiki.seeedstudio.com/cn/h68k-ha-esphome/)

## 参考资料

- [Wi-Fi API - esp-arduino](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/wifi.html)

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