---
description: SenseCAP M2 数据型快速入门指南
title: SenseCAP M2 数据型快速入门指南
keywords:
- SenseCAP 网络
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Data_Only/Quick_Start
last_update:
  date: 02/14/2023
  author: Matthew
---

SenseCAP M2 数据型快速入门指南
=================================

以下是几分钟内轻松设置您的热点所需的步骤！

**视频教程**
=====================

* * *

**步骤 1：安装 Helium 和 SenseCAP 应用并创建账户**
===============================================================

*   安装 Helium Hotspot 和 SenseCAP MX Hotspot 应用
*   在 Apple Store 或 Google Play 中搜索并下载 "Helium Hotspot" 和 "SenseCAP MX Hotspot"，并在您的手机上安装这两个应用。

"**Helium Hotspot**" 应用是官方的 Helium 应用，必需用于 Helium 钱包认证。您可以使用它注册和管理 Helium 钱包，并进行热点和 HNT 交易。

![Helium Hotspot 应用](https://www.sensecapmx.com/wp-content/uploads/2022/07/helium-app-logos-1.webp)

"**SenseCAP MX Hotspot**" 应用是由 SenseCAP MX 团队开发的官方 SenseCAP 热点应用。您可以使用它注册和管理您的 SenseCAP 热点。

![SenseCAP Hotspot 应用](https://www.sensecapmx.com/wp-content/uploads/2022/07/SenseCAP-Hotspot-App.png)

*   在 Helium 应用中创建 Helium 钱包

生成新的 Helium 钱包时，系统会显示一个包含 12 个单词的密码。请按顺序记录或备份这 12 个单词的密码，并将其保存在安全的地方，因为如果丢失，这 12 个单词的密码将无法恢复。

*   在 SenseCAP MX Hotspot 应用中创建账户

将 Helium 钱包链接到您的 SenseCAP 账户，您就可以添加新的热点了。

![Deeplink Helium Wallet 应用](https://www.sensecapmx.com/wp-content/uploads/2022/07/deeplink-1.png)

**如何下载 Helium 应用并创建钱包**
==================================================

**如何下载 SenseCAP 应用并创建账户**
===============================================

* * *

**步骤 2：设置 SenseCAP M2 并连接到互联网**
==========================================================

*   设置 SenseCAP M2

连接天线、电源适配器和以太网线（非必要），然后启动热点。

**电源指示灯**将显示为**红色**，大约 15 秒后（如果使用 PoE 供电，等待时间会稍长），顶部指示灯将闪烁**绿色**，表示热点正在启动。

启动约 1 分钟后，如果热点通过以太网线连接到互联网，指示灯将显示为**绿色常亮**；如果等待进一步的 Wi-Fi 配置，则显示为**蓝色常亮**。

![SenseCAP M2 快速入门](https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-1.png)

**固件更新**
===================

首次启动时，建议通过以太网线连接热点到互联网，并等待约 30 分钟完成固件更新，然后再进行下一步。（您也可以在热点连接到 Wi-Fi 网络后执行此步骤）。

固件更新是自动的，通常需要 10-30 分钟。在更新过程中，指示灯会从闪烁的**橙色**变为**绿色常亮**一到两次。固件更新完成后，热点将重新启动，指示灯将保持**绿色常亮**。

**注意**：在热点更新到最新固件之前进行下一步操作可能会导致意外错误并无法继续，请耐心等待更新过程，并且不要断电或断开互联网连接。

**PoE 连接**
==================

SenseCAP M2 支持 PoE（以太网供电），兼容 IEEE 802.3 af 标准。如果您的调制解调器/路由器不支持 PoE，您需要额外的 PoE 交换机作为 PSE（供电设备），提供 40V-57V DC 电源。

![SenseCAP M2 POE 连接设置](https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-poe.png)

*   通过 SenseCAP Hotspot 应用使用蓝牙连接热点

按下按钮 5 秒，直到蓝色指示灯缓慢闪烁以进入配置模式，然后按照应用中的说明连接热点。

![SenseCAP M2 设置 - 应用](https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-setup-app-scaled.jpg)

**注意**：请为 SenseCAP M2 数据型热点选择 "**SenseCAP M2 (Data-Only)**"。如果周围有多个热点，您可以通过热点名称下的 6 位 MAC 地址识别热点。

*   设置 Wi-Fi 连接

点击 "扫描网络"，选择 Wi-Fi 并输入密码；或者点击 "改用以太网" 如果您已经使用了以太网线。

![SenseCAP M2 Wi-Fi 设置](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi.png)

* * *

**步骤 3：Helium 热点注册和位置声明**
=========================================================

*   将热点添加到 Helium 网络

请按照应用中的说明将热点添加到 Helium 网络。

**注意**：请注意，注册费用不包含在产品中。注册时用户钱包将扣除 \$10 的注册费用和 \$5 的位置声明费用。请确保您的钱包中有足够的 Helium 数据信用以完成注册过程。

*   声明热点位置

请按照应用中的说明，在地图上选择实际放置位置并声明位置。

* * *

**您的 SenseCAP M2 已准备就绪！欢迎加入人民网络！**
=====================================================================

![Longfi](https://www.sensecapmx.com/wp-content/uploads/2022/06/longfi.webp)