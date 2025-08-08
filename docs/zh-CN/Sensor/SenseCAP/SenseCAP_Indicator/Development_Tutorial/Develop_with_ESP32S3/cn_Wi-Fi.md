---
description: Wi-Fi
title: Wi-Fi
keywords:
- SenseCAP Indicator ESP32 Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_ESP32_Wi-Fi
last_update:
  date: 5/23/2023
  author: Thomas
---
# **Wi-Fi**

[**示例**](https://github.com/espressif/esp-idf/tree/master/examples/wifi)

这个[目录](https://github.com/espressif/esp-idf/tree/master/examples/wifi)包含一系列项目示例，演示了Wi-Fi功能，并提供了您可以复制并适配到自己项目中的代码。

**使用示例**

在构建示例之前，请确保遵循ESP-IDF入门指南，以确保您拥有所需的开发环境。

构建示例与构建任何其他项目相同：

- 步骤1：切换到您想要构建的新示例目录。

运行以下命令选择正确的芯片目标进行构建，然后再打开项目配置菜单：

`idf.py set-target esp32s3`

（默认目标是esp32。有关所有选项，请参见idf.py set-target --help）

- 步骤2：运行以下命令打开项目配置菜单：

`idf.py menuconfig`

大多数示例在这里都有一个项目特定的"示例配置"部分（例如，设置要使用的WiFi SSID和密码）

- 步骤3：构建示例：

`idf.py build`

按照打印的说明进行烧录，或运行
`idf.py -p PORT flash`

# **技术支持**

别担心，我们会为您提供支持！请访问我们的[Seeed官方Discord频道](https://discord.com/invite/QqMgVwHT3X)提出您的问题！

如果您有大批量订单或定制需求，请联系 [iot@seeed.cc](mailto:iot@seeed.cc)
