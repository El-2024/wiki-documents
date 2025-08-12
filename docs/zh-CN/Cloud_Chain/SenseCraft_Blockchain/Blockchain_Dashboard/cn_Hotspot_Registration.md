---
sidebar_position: 3
description: 热点注册
title: 热点注册
keywords:
- 云与链
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/sensecraft-blockchain/blockchain-dashboard/hotspot-registration
aliases:
  - /cn/sensecraft-blockchain/sensecap-mx-dashboard/hotspot-registration
last_update:
  date: 06/06/2025
  author: Matthew
---

# 热点注册

**如何使用 Helium 钱包注册热点**
===============================================

*    请通过访问 [**https://status.sensecapmx.cloud/**](https://status.sensecapmx.cloud/) 登录 SenseCAP Dashboard。
*    确保您的 "Helium APP" 是最新版本，并登录到您的 Helium 钱包。

您可以通过访问 [**Android Store**](https://play.google.com/store/apps/details?id=com.helium.wallet&hl=en_US) 或 [**iOS Store**](https://apps.apple.com/app/id1450463605) 下载最新版本。

*   在 SenseCAP Dashboard 上，点击左侧菜单中的 "Hotspot"，然后点击蓝色按钮 "+ Add New Hotspot"。

接下来，您会看到一个二维码提示，用于从 Helium 钱包导入您的热点，如下所示：

![SeneseCAP 热点注册](https://www.sensecapmx.com/wp-content/uploads/2022/07/dash-qr.png)

使用 "Helium App" 扫描 Dashboard 上显示的二维码。

![SenseCAP 热点注册 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-1-register.png)

用您的 Helium 钱包扫描二维码，并在 "**Helium App**" 中授权链接钱包。

**注意**：这不会让任何人访问您的钱包种子短语，这只允许 Dashboard 连接并将您的热点添加到 Dashboard。

![SenseCAP 热点注册 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-2-register.png)

选择并添加您希望添加到 SenseCAP Dashboard 的热点，然后点击按钮。

![SenseCAP 热点注册 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-3-register.png)

如果您的钱包成功链接，您将看到以下消息。**一切就绪！**

![SenseCAP 热点注册 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4-register.png)

**使用设备信息注册热点**
=============================================

**注意**：您可以使用 Helium 钱包或设备信息将热点注册到 Dashboard。如果您选择使用设备信息注册热点，您需要登录到热点的本地控制台以获取设备信息。

![SenseCAP 热点注册 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-6-1.png)

*   登录到 Dashboard ⇒ [**https://status.sensecapmx.cloud/**](https://status.sensecapmx.cloud/)
*   输入您在注册时创建的凭据并登录
*   导航到左侧菜单栏中的 “Hotspot”
*   点击 "Add new Hotspot"

![SenseCAP 热点注册 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-7-1.png)

*   系统会提示您输入 "**SN", "ETH MAC**" 地址, "**CPU ID**" 和 "**bind key**"，其中 "**SN**" 位于 SenseCAP M1 底部标签上，其他信息在本地控制台页面中。
*   点击 “**Confirm**”，热点将被添加到您的 Dashboard。

**注意**：CPU ID 通常以 1 开头，后面跟着 7 个零。例如，_**10000000**_

**恭喜**！您已成功将热点添加到 Dashboard 开始监控。您可以重复这些步骤以监控其他热点。