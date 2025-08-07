---
description: SenseCAP M1 故障排除
title: 故障排除
keywords:
- SenseCAP 网络
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/Troubleshooting
last_update:
  date: 02/14/2023
  author: Matthew
---

SenseCAP M1 故障排除
===================

硬件相关
========

* * *

**蓝色 LED 不闪烁**
-------------------

![SenseCAP M1 蓝色 LED](https://www.sensecapmx.com/wp-content/uploads/2022/07/blue-led-1.webp)

![SenseCAP M1 蓝色 LED 不正常](https://www.sensecapmx.com/wp-content/uploads/2022/08/back-front-led-m1.png)

**故障排除步骤**

1. 检查以太网（ETH）LED 是否闪烁。如果 ETH 的绿色和黄色灯亮起，而蓝色 LED 熄灭，**[请先刷新新的 SD 卡](https://www.sensecapmx.com/docs/sensecap-m1/m1-troubleshooting/#how-to-flash-a-new-image-to-a-new-micro-sd-card)**。如果蓝灯仍然熄灭，则可能是硬件故障问题。
2. 如果绿色和黄色 LED 熄灭，请确保电源适配器正常。您可以尝试用 5V-3A 的手机充电器（带 Type-C 数据线）和新的网络线替换，看看问题是否解决。
3. 如果热点通过 Wi-Fi 连接互联网，请检查前面板上的红灯是否亮起。如果没有亮起，则可能是硬件故障问题。

* * *

网络相关
========

* * *

**无法连接到互联网？**
----------------------

正确设置网络配置至关重要。请确保阅读以下所有详细信息以确保正确配置。

如果热点处于防火墙后面或使用不兼容的 NAT 类型（如下所述），Helium 热点可能无法正常工作。在其他情况下，可能是由于路由器配置/网络配置问题或您的连接离线（无互联网）。

**注意**：如果您无法正确设置网络配置或以下步骤对您不起作用，请访问我们的 >> 官方 Discord 频道以获取进一步指导。

**故障排除步骤 - 以太网连接**

**如果未使用 Wi-Fi，请检查您的以太网电缆**：确保以太网电缆牢固地插入热点与您的路由器/调制解调器之间。

* **热点以太网端口旁边的琥珀色灯闪烁**：表示已建立稳定连接。
* 如果您未看到以太网端口中的琥珀色灯闪烁，请尝试使用其他电缆，因为电缆随着时间可能会失效。

**检查您的互联网连接**：请确保您可以使用家中的计算机/笔记本电脑/手机在同一网络上连接到互联网。如果您无法连接到互联网，您需要联系您的互联网服务提供商（ISP）以获取有关连接的额外帮助。

**故障排除步骤 - Wi-Fi 连接**

* **如果您使用 Wi-Fi**：请确认您可以使用 WEP 或 WPA 安全密码（即 Wi-Fi 密码）连接到您的无线网络。如果您不知道如何连接或访问您的无线调制解调器，您需要直接联系设备制造商。
* 如果您无法连接到互联网，请重启您的路由器。将热点和路由器从墙壁或电源插座上拔下 2 分钟。然后重新插入，看看是否可以连接到互联网。

* * *

**如何将热点连接到我的手机 Wi-Fi？**
--------------------------------------

**以下示例适用于 Apple iOS 设备。**

* 在手机上找到 "**设置**"。
* 点击 "**个人热点**"。

![iOS 个人热点](https://www.sensecapmx.com/wp-content/uploads/2022/07/hotspot.png)

* 启用允许其他设备加入。
* 配对您的热点。
* 将您的热点连接到 Apple iOS 手机的个人热点名称。

![iOS 热点设置](https://www.sensecapmx.com/wp-content/uploads/2022/07/hotspot-setup.png)

现在，您可以通过 Wi-Fi 将 SenseCAP 网关与手机的个人热点配对，以排除固件更新和网络连接问题。

* * *

SD 卡相关
=========

* * *

**如何替换 'config.json' 文件**
-------------------------------

**谨慎操作**：以下步骤仅在您已获得我们技术支持团队的建议时使用。如果您**未**获得建议，则无需执行这些步骤。

**注意**：请勿将相同的 '**config.json**' 文件用于其他热点。每个热点都有一个与其序列号唯一绑定的 '**config.json**' 文件。

* * *

**说明**

以下说明将帮助您替换 Micro SD 卡中的 'config.json' 文件。如果您发现设备卡在固件/旧版本上，并认为可能是导致故障的潜在错误，请按照说明解决问题。

**注意**：请先检查您的互联网连接，以确保问题与互联网无关，然后再按照以下步骤替换 Micro SD 卡。

* * *

**需求**

1. SenseCAP M1 热点中的 Micro SD 卡
2. Micro SD 卡读卡器
3. 螺丝刀
4. 从原始卡复制的 '**config.json**' 文件

**注意**：如果您无法检索原始文件，请向我们的技术支持人员索取。

![替换 Config.json 文件需求](https://www.sensecapmx.com/wp-content/uploads/2022/07/requirements-sd-flash.png)

_所需物品_

* * *

**步骤**

* **步骤 1**：关闭您的热点电源
* **步骤 2**：移除天线
* **步骤 3**：转到面板的正面

![Config.json 文件替换步骤 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step1-1.png)

* **步骤 4**：使用螺丝刀松开面板前部的两个螺丝

![Config.json 文件替换步骤 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step2-1.png)

* **步骤 5**：移开前面板并将其放在一旁

![Config.json 文件替换步骤 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step3-1.png)

*   **步骤 6**: 使用镊子移除 Micro SD 卡顶部的黄色贴纸，并取出 Micro SD 卡

![Config.json 文件替换 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step4-1.png)

![Config.json 文件替换 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/step5-1.png)

![Config.json 文件替换 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/step6-1.png)

*   **步骤 7**: 将 Micro SD 卡插入读卡器并连接到电脑

![Config.json 文件替换 7](https://www.sensecapmx.com/wp-content/uploads/2022/07/step7-1.png)

![Config.json 文件替换 7B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step8-1.png)

**注意**: 如果您使用的是 Windows 操作系统，并出现 "**在使用驱动器** '**X**' **之前需要格式化磁盘**" 的提示，请点击 "**取消**"，否则 Micro SD 卡上的数据将被清除。

![格式化 SD 卡](https://www.sensecapmx.com/wp-content/uploads/2022/07/format-1.png)

_Windows 插入 Micro SD 卡时的提示_

*   **步骤 8**: 您现在会发现 '**resin-boot**' 文件夹中有一个 '**config.json**' 文件，请使用记事本打开以确认其内容是否为空。

如果内容**不为空**，则可能是由于配置文件引起的 OTA（空中更新）问题，这是网络连接问题。请检查您的网络和安全/防火墙设置。

如果内容**为空**，请使用我们提供的新 'config.json' 文件替换它。

![空的 config.json 文件](https://www.sensecapmx.com/wp-content/uploads/2022/07/config-1.png)

*   **步骤 9**: 如果 '**config.json**' 文件为空，您需要用我们提供的文件替换它。将新文件拖入磁盘并点击“替换”。

**注意**: 请勿删除其他文件，否则可能会导致 SenseCAP M1 出现意外问题。

**注意**: 每台设备都有一个与之注册的独特 'config.json' 文件，请勿与他人共享您的 'config.json' 文件，也不要使用他人的文件。

**对于 MacOS**

![MacOS 复制 Config.json 文件](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)

_MacOS - 复制_ 'config.json' _文件_

![MacOS 替换 Config.json 文件](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-2.png)

**对于 Windows**

![Windows 复制 Config.json 文件](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)

_Windows - 复制 "config.json" 文件_

![Windows 替换 Config.json 文件](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-2.png)

**注意**: 建议在复制后通过记事本打开 '**config.json**' 文件，双重检查其内容是否正确。

*   **步骤 10**: 将 Micro SD 卡重新插入到热点设备中

**提示**: 在确认您的热点设备正常运行后，再组装前面板。

![组装 SenseCAP M1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step10-1.png)

![组装 SenseCAP M1 - 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step11-1.png)

![组装 SenseCAP M1 - 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step12-1.png)

![组装 SenseCAP M1 - 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step13-1.png)

*   **步骤 11**: 组装天线并启动您的热点设备

启动 SenseCAP M1，连接到互联网（建议使用以太网线），等待约 20 分钟进行 OTA 更新，并在仪表板上检查状态（[**https://status.sensecapmx.cloud/**](https://status.sensecapmx.cloud/)）或在 Helium APP 中运行诊断。

如果您有任何其他问题或疑问，请在此提交工单：[**https://support.sensecapmx.com**](https://support.sensecapmx.com)

* * *

**如何将新镜像刷入新的 Micro SD 卡**
---------------------------------------------------

**谨慎操作**: 以下步骤仅在您已获得技术支持团队的建议时使用。如果您**未**被建议执行这些步骤，则无需操作。

由于用户对热点设备的误用，我们发现频繁的电源循环、插拔 Micro SD 卡可能导致未知的 Micro SD 卡错误，例如文件系统对齐问题。

**如果您被建议更换 Micro SD 卡以调试问题，请仔细按照以下说明操作。**

* * *

**说明**

以下说明将帮助您将镜像刷入新的 Micro SD 卡，并替换 SenseCAP M1 中的原始卡，以解决可能由 Micro SD 卡错误引起的问题。

**注意**: 请先检查您的互联网连接，以确保问题与互联网无关，然后再按照以下步骤更换 Micro SD 卡。

* * *

**需求**

**注意**: 我们现在提供 SD 卡更换套件，您可以点击 [**这里**](https://www.seeedstudio.com/SenseCAP-M1-SD-Card-Replacement-Kit-p-5279.html) 购买。

![SenseCAP M1 更换 SD 卡套件](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card.png)

_该套件包含螺丝刀、MicroSD 卡读卡器、64GB MicroSD 卡以及更换 MicroSD 的说明。_

1.  新的 Micro SD 卡（SanDisk 高耐久性 64GB）
2.  Micro SD 卡读卡器
3.  螺丝刀
4.  从原始卡复制的 '**config.json**' 文件  
    1.  **注意**: 如果您无法获取原始文件，请向我们的技术支持人员索取。

* * *

**步骤**

1.  关闭设备电源，打开前面板，移除 Micro SD 卡顶部的黄色贴纸（可使用镊子），拔出并取出原始 Micro SD 卡。
2.  使用 Micro SD 卡读卡器将原始 Micro SD 卡连接到电脑，从原始 SD 卡的 "resin-boot" 分区中复制 'config.json' 文件，并将其保存到电脑中  
    1.  **注意**: 如果您无法获取原始文件，请向我们的技术支持人员索取。
3.  从此处下载 **SenseCap M1 镜像**：[**sensecap-m1-sd-version-20220213.img.zip**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0)
4.  从此处下载 **Balena Etcher 工具**：[**balenaEtcher - 将操作系统镜像刷入 SD 卡和 USB 驱动器**](https://www.balena.io/etcher/)
5.  使用 Balena Etcher 将 **SenseCap M1 镜像** 刷入新的 Micro SD 卡。
6.  在刷写完成后，将我们提供的 "**config.json**" 文件从电脑复制到新 Micro SD 卡的 "**resin-boot**" 分区中。
7.  从电脑中拔出新的 Micro SD 卡，并将其插入 SenseCap M1。
8.  启动 SenseCap M1，连接到互联网（建议使用以太网线），等待 20 分钟更新，并在仪表板上检查状态（[**https://status.sensecapmx.cloud**](https://status.sensecapmx.cloud/)）或在 Helium APP 中运行诊断。

**注意**：只有在确认您的 Hotspot 正常工作后，才应组装 Hotspot 的前面板。

* * *

**如何打开 SenseCAP M1 并更换 Micro SD 卡**

*   **步骤 1**：关闭 Hotspot 电源，然后移除天线。

![SenseCAP M1 SD 卡步骤 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-1-1.png)

*   **步骤 2**：使用螺丝刀松开前面板上的两颗螺丝。

![SenseCAP M1 SD 卡步骤 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-2.png)

*   **步骤 3**：移开前面板并将其放在一旁。

![SenseCAP M1 SD 卡步骤 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-3.png)

*   **步骤 4**：移除 Micro SD 卡顶部的黄色贴纸（可以使用镊子）。

![SenseCAP M1 SD 卡步骤 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4.png)

![SenseCAP M1 SD 卡步骤 4B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4a.png)

* * *

**如何读取 Micro SD 卡并刷写镜像**

*   **步骤 1**：将新的 Micro SD 卡插入 Micro SD 卡读卡器。

![SenseCAP M1 SD 卡镜像步骤 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-1.png)

_将新的 Micro SD 卡插入 Micro SD 卡读卡器_

![SenseCAP M1 SD 卡镜像步骤 1B](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-2.png)

_确保完全插入_

*   **步骤 2**：使用 Balena Etcher 将 SenseCAP M1 镜像刷写到新的 Micro SD 卡上。
    *   从此处下载 **SenseCap M1 镜像**：[**sensecap-m1.img.zip**](https://drive.google.com/file/d/1fZf09U2_jQOpsSKPWc8TAZ_Jl82X9tzx/view?usp=sharing)
    *   从此处下载 **Balena Etcher 工具**：[**balenaEtcher - 将操作系统镜像刷写到 SD 卡和 USB 驱动器**](https://www.balena.io/etcher/)

![Balena Etcher](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena.png)

_根据您的操作系统选择_

![Balena Etcher 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena-2.png)

_将镜像 ZIP 文件拖到 Balena Etcher_

*   **步骤 3**：成功将镜像刷写到 Micro SD 卡后，将我们提供的或您原先复制的 "config.json" 文件从计算机复制到名为 "resin-boot" 的分区。

**对于 MacOS**

![MacOS 复制 Config.json 文件](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)

_MacOS - 复制 '_config.json' 文件_

**对于 Windows**

![Windows 复制 Config.json 文件](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)

*   **步骤 4**：从计算机上拔下新的 Micro SD 卡。
*   **步骤 5**：将新的 Micro SD 卡插入 SenseCAP M1。

![SenseCAP M1 SD 卡步骤 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-5.png)

*   **步骤 6**：打开 SenseCAP M1 电源，并重新连接到互联网（最好使用以太网线）。
*   **步骤 7**：等待大约 20 分钟以应用更新，然后检查仪表板（[**https://status.sensecapmx.cloud/**](https://status.sensecapmx.cloud/)）或在 Helium 应用中运行诊断。

![SenseCAP M1 SD 卡步骤 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/diagnostics-1.png)

**注意**：只有在确认您的 Hotspot 正常工作后，才应组装 Hotspot 的前面板。

如果您有任何其他问题或疑问，请在此处提交工单：[**https://support.sensecapmx.com/**](https://support.sensecapmx.com/)

* * *

**如何格式化 Micro SD 卡并刷写镜像**
-------------------------------------------------------

**谨慎操作**：以下步骤仅在您已收到我们技术支持团队的建议时使用。如果您**未**收到建议，则无需执行这些步骤。

由于用户对 Hotspot 的误操作，我们发现频繁的电源循环、插拔 Micro SD 卡可能会导致未知的 Micro SD 卡错误，例如文件系统对齐问题。

**如果您已被建议更换 Micro SD 卡以调试问题，请仔细按照以下说明操作。**

* * *

**说明**

以下说明将帮助您将镜像刷写到新的 Micro SD 卡上，并替换 SenseCAP M1 中的原始卡，以解决可能由 Micro SD 卡错误引起的问题。

**注意**：请先检查您的互联网连接，以确保问题与互联网无关，然后再按照以下步骤更换 Micro SD 卡。

* * *

**需求**

1.  SenseCAP M1 Hotspot 中的 Micro SD 卡
2.  Micro SD 卡读卡器
3.  螺丝刀
4.  从原始卡复制的 '**config.json**' 文件  
    1.  **注意**：如果您无法检索原始文件，请向我们的技术支持人员索取。
5.  SD Card Formatter 5.0.1
6.  对于 **Windows** => [**点击此处**](https://drive.google.com/file/d/15KMqnVpeOMRcFOYIRLbwA4CJooNsdkLM/view?usp=sharing) 下载并安装
7.  对于 **Mac OS** => [**点击此处**](https://drive.google.com/file/d/1FjxMOdGDjW3iKx3COeexY7E2bpF2cqDy/view?usp=sharing) 下载并安装
8.  SenseCAP M1 镜像 => [**点击此处**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0) 下载
9.  Balena Etcher => [**点击此处**](https://www.balena.io/etcher/) 下载

![SenseCAP M1 替换 SD 卡套件](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card.png)

_套件包括螺丝刀、MicroSD 卡读卡器、64GB MicroSD 卡以及更换 MicroSD 卡的说明。_

* * *

**步骤**

1.  关闭设备电源，打开前面板，移除 Micro SD 卡顶部的黄色贴纸，拔出 Micro SD 卡。
2.  使用 Micro SD 卡读卡器将 Micro SD 卡连接到计算机，并从分区 "resin-boot" 中复制 '**config.json'** 文件，保存到计算机上。  
    1.  **注意**：如果您无法检索原始文件，请向我们的技术支持人员索取。
3.  使用 “**SD Card Formatter 5.0.1**” 格式化 Micro SD 卡。
4.  使用 **Balena Etcher** 将 **SenseCap M1 镜像** 刷写到 Micro SD 卡。
5.  将 '**config.json**' 文件从计算机复制到 Micro SD 卡的 "**resin-boot**" 分区。
6.  将 Micro SD 卡从计算机插回 SenseCAP M1 Hotspot。
7.  打开 SenseCAP M1 电源，连接到互联网（最好使用以太网线），等待约 20 分钟进行 OTA 更新，并在 [**仪表板**](https://docs.sensecapmx.com/home/sensecap-dashboard) 上检查状态，或在 Helium 应用中运行诊断。

**注意**：只有在确认您的 Hotspot 正常工作后，才应组装 Hotspot 的前面板。

* * *

**如何打开 SenseCAP M1 并更换 Micro SD 卡**

*   **步骤 1**：关闭 Hotspot 电源，然后拆下天线。

![SenseCAP M1 SD 卡 步骤 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-1-1.png)

*   **步骤 2**：使用螺丝刀松开前面板上的两颗螺丝。

![SenseCAP M1 SD 卡 步骤 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-2.png)

*   **步骤 3**：移开前面板并将其放在一旁。

![SenseCAP M1 SD 卡 步骤 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-3.png)

*   **步骤 4**：移除 Micro SD 卡顶部的黄色贴纸（可以使用镊子）。

![SenseCAP M1 SD 卡 步骤 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4.png)

![SenseCAP M1 SD 卡 步骤 4B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4a.png)

* * *

**如何格式化 Micro SD 卡（Windows）**

*   **步骤 1**：将新的 Micro SD 卡插入 Micro SD 卡读卡器。  
    

![SenseCAP M1 SD 卡 图像 步骤 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-1.png)

_将新的 Micro SD 卡插入 Micro SD 卡读卡器_

![SenseCAP M1 SD 卡 图像 步骤 1B](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-2.png)

_确保完全插入_

*   **步骤 2**：安装并运行 SD Card Formatter

![SD 卡格式化工具](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-formatter-1.png)

*   **步骤 3**：选择连接到计算机的 Micro SD 卡，选择“Overwrite format”，在卷标中输入“resin-boot”，然后点击“Format”按钮。  
    

![SD 卡格式化工具 Resin-Boot 文件夹](https://www.sensecapmx.com/wp-content/uploads/2022/07/formatter-resin-1.png)

*   **步骤 4**：在对话窗口中选择“是”。  
    

![格式化 SD 卡](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-2.png)

*   **步骤 5**：等待大约 30-45 分钟，格式化过程完成。

![SD 卡格式化工具屏幕](https://www.sensecapmx.com/wp-content/uploads/2022/07/formatter-3-1.png)

* * *

**如何格式化 Micro SD 卡（MacOS）**

步骤类似，请参见以下图片：

![SD 卡格式化工具 MacOS](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-formatter-1-1.png)

![SD 卡格式化工具 MacOS 完成](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-formatter-2-1.png)

* * *

**如何将镜像写入 Micro SD 卡**

*   从此处下载 **SenseCap M1 镜像**：[**sensecap-m1-sd-version-20220213.img.zip**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0)
*   从此处下载 **Balena Etcher 工具**：[**balenaEtcher - 将操作系统镜像写入 SD 卡和 USB 驱动器**](https://www.balena.io/etcher/)

![Balena Etcher](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena.png)

_根据您的操作系统选择_

![Balena Etcher 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena-2.png)

_将 Image.ZIP 文件拖到 Balena Etcher_

* * *

**如何将 'config.json' 文件添加到 Micro SD 卡**
------------------------------------------------------

在成功将镜像写入 Micro SD 卡后，将我们提供的或您原先复制的 "**config.json**" 文件从计算机复制到名为 "resin-boot" 的分区。

**注意**：请不要删除任何其他文件，否则会导致您的 SenseCAP M1 出现意外问题。

**注意**：每个设备都有一个不同的 '**config.json**' 文件与之绑定，请不要与他人共享您的 '**config.json**' 文件，也不要使用他人的文件。

**对于 macOS**

![MacOS 复制 Config.json 文件](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)

_MacOS - 复制 'config.json' 文件_

![MacOS 替换 Config.json 文件](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-2.png)

**对于 Windows**

![Windows 复制 Config.json 文件](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)

_Windows - 复制 'config.json' 文件_

![Windows 替换 Config.json 文件](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-2.png)

* * *

**格式化 Micro SD 卡并写入镜像后**
-------------------------------------------------------------

*   **步骤 1**：从计算机上拔下新的 Micro SD 卡。
*   **步骤 2**：将新的 Micro SD 卡插入 SenseCAP M1。

![SenseCAP M1 SD 卡 步骤 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-5.png)

*   **步骤 6**：打开 SenseCAP M1 的电源，并重新连接到互联网（最好使用以太网线）。
*   **步骤 7**：等待大约 20 分钟以完成更新，然后检查仪表板（**[https://status.sensecapmx.cloud/)](https://status.sensecapmx.cloud/))** 或在 Helium 应用中运行诊断。

![SenseCAP M1 SD 卡 步骤 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/diagnostics-1.png)

**注意**：只有在确认您的 Hotspot 正常工作后，才应组装 Hotspot 的前面板。

如果您有任何其他问题或疑问，请在此处提交工单：[**https://support.sensecapmx.com/**](https://support.sensecapmx.com/)

* * *

Helium 应用错误
================

**未找到 Onboarding Key**
---------------------------

请在此处提交支持工单：[**https://support.sensecapmx.com**](https://support.sensecapmx.com)，并发送您的 Hotspot SN（序列号），以便我们解决您的问题。

![Helium 应用 - 未找到 Onboarding Key](https://www.sensecapmx.com/wp-content/uploads/2022/07/onboarding.png)

* * *

**未找到 Hotspot**
--------------------

Helium 应用中显示“未找到 Hotspot”。

**故障排除步骤**

1.  首先检查蓝色 LED 灯，它应该处于慢闪模式。
2.  如果不是，这表明您的 SenseCAP M1 尚未启用蓝牙配置模式。检查您的 Hotspot 和手机，确保蓝牙已打开。
3.  按住 SenseCAP M1 背面的按钮 6-10 秒以启用 SenseCAP M1 的配置模式，您会发现蓝色 LED 灯变为慢闪模式（每 2 秒闪烁 1 次），然后重新扫描 Hotspot。

![Helium 应用错误 - 未找到热点](https://www.sensecapmx.com/wp-content/uploads/2022/07/no-hotspots-found.png)

* * *

**设备断开连接**
-----------------------

设备在通过蓝牙配对时断开连接

**故障排查步骤**

当您使用比三星 S9 更新的手机时，会出现兼容性问题。

请[**刷新 SD 卡以加载新镜像**](https://www.sensecapmx.com/docs/sensecap-m1/m1-troubleshooting/#how-to-flash-a-new-image-to-a-new-micro-sd-card)。

![Helium 应用错误 - 设备断开连接](https://www.sensecapmx.com/wp-content/uploads/2022/07/error-device-disconnected.png)

* * *

**特性写入失败**
-------------------------------

无法在 Helium 应用中注册热点

**故障排查步骤**

1. 如果您在通过以太网或 Wi-Fi 连接后立即注册热点，由于 OTA（空中更新）正在运行，您会看到此错误。
2. 请保持您的热点通过以太网或 Wi-Fi 连接至少 10 分钟以上。这将允许 OTA 更新完成。
3. 长按按钮 6-10 秒以进入配置模式，然后再次尝试注册。

![Helium 应用错误 - 特性写入失败](https://www.sensecapmx.com/wp-content/uploads/2022/07/unable-to-register.webp)

* * *

**特性读取失败**
------------------------------

通过蓝牙配对或连接到 Wi-Fi 时出错

如果您在尝试通过蓝牙配对热点或连接到 Wi-Fi 时收到以下错误消息，这意味着您的 Wi-Fi 网络的 SSID 包含无法识别的无效字符。

请避免使用非字母数字字符（例如 a - z、0 - 9 以外的字符）和符号。

**解决方案**：重命名您的 Wi-Fi 网络，避免使用符号和非字母数字字符。

![Helium 应用错误 - 特性读取失败](https://www.sensecapmx.com/wp-content/uploads/2022/07/read-error.png)

* * *

**构建添加热点事务**
----------------------------------------

在注册热点时，Helium 应用显示构建添加热点事务时出错

**故障排查步骤**

1. 如果您在通过以太网或 Wi-Fi 连接后立即注册热点，由于 OTA（空中更新）正在运行或区块尚未完全同步，您会看到此错误。
2. 请保持您的热点通过以太网或 Wi-Fi 连接至少 30 分钟，以等待完成固件 OTA 和区块同步过程。之后，请长按按钮 6-10 秒以进入配置模式，然后再次尝试注册。
3. 使用诊断工具或 SenseCAP 仪表板检查固件版本，确保其是最新的。  
    1. **注意**：如果您的热点固件无法更新到最新版本，建议将设备使用的网络更换为其他网络，例如您的手机热点，然后按照上述第二步操作。
    2. **注意**：如果设备在固件 OTA 完成后仍无法自行完全同步区块，建议在本地控制台中重置区块。

![Helium 应用错误 - 构建添加热点事务](https://www.sensecapmx.com/wp-content/uploads/2022/07/transaction-failed-add-hotspot.png)

* * *

**断言位置/天线**
------------------------------

尝试更新天线详情或断言位置时，您看到以下错误

**故障排查步骤**

问题与网络连接或应用程序有关。尝试重新启动您的应用程序或稍后再试。

![Helium 应用错误 - 断言位置/天线](https://www.sensecapmx.com/wp-content/uploads/2022/07/assert-location-error.png)