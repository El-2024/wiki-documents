---
description: SenseCAP M2 数据仅限本地控制台
title: SenseCAP M2 数据仅限本地控制台
keywords:
- SenseCAP 网络
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Data_Only/M2_Local_Console
last_update:
  date: 02/14/2023
  author: Matthew
---

**如何访问本地控制台**
===================================

有两种方式可以访问本地控制台。

* * *

**通过路由器访问**
---------------------

*   **步骤 1**：将您的电脑和热点连接到同一个路由器。

您可以通过网线将设备连接到路由器，或者通过 SenseCAP Hotspot APP 设置 Wi-Fi 连接。

**注意**：您的电脑和设备应连接到同一个路由器/网络。

![SenseCAP M2 本地控制台 步骤 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3.png)

*   **步骤 2**：获取设备的 IP 地址

如果您没有 SenseCAP MX Dashboard 的账户，或者尚未将设备添加到 Dashboard，请在路由器管理页面上找到设备的 IP 地址，或者通过 Helium APP 运行诊断以获取 IP 地址。

如果您已经注册了 SenseCAP MX Dashboard 账户并添加了设备，可以从 Dashboard 中找到设备的 IP 地址：

*   *   如果通过 Wi-Fi 连接，您将看到设备的 Wi-Fi IP 地址并可点击。
    *   如果通过以太网线或本地 LAN 连接，您将看到设备的 LAN 地址并可点击。

*   **步骤 3**：获取设备的用户名和密码

从设备背面的信息中获取用户名和密码。

**出于安全原因，每台设备都有唯一的密码。登录后，您可以更改密码。**

![SenseCAP M2 本地控制台 步骤 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png)

*   **步骤 4**：在电脑上打开浏览器并登录

在浏览器中输入您获取的 IP 地址以进入本地控制台。然后输入设备的用户名和密码，并点击登录按钮。

![SenseCAP M2 本地控制台 登录](https://www.sensecapmx.com/wp-content/uploads/2022/07/login.png)

* * *

**通过设备 AP 热点访问**
--------------------------------

*   **步骤 1**：打开设备 AP 热点

按下按钮 5 秒，直到蓝色指示灯慢速闪烁以进入配置模式。

*   **步骤 2**：连接到 AP 热点

AP 热点名称为 SenseCAP\_XXXXXX（6 位 MAC 地址），将您的电脑连接到此 AP 热点。

*   **步骤 3**：获取设备的用户名和密码
*   **步骤 4**：在电脑上打开浏览器并登录

在浏览器中输入 IP 地址（**192.168.168.1**）以进入本地控制台。然后输入设备的用户名和密码，并点击登录按钮。

* * *

**状态**
==========

在主页上，主要显示一些状态信息，例如网络连接、LoRa 数据包的发送和接收、系统信息、内存使用情况等。

**注意：** 您需要等待一段时间才能看到完整的信息。

![SenseCAP M2 本地控制台 指南](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-5.png)

**注意：** 在 LoRa 数据包直方图中，不一定是有效的 Helium 数据包网络。

在系统信息中，您可以看到 Helium 程序的版本、热点的地址以及当前使用的区域参数。

![SenseCAP M2 本地控制台 指南 区域](https://www.sensecapmx.com/wp-content/uploads/2022/07/system.png)

* * *

**系统**
==========

**系统和时间**
-------------------

*   _页面路径_：System -> System

在这里，您可以配置设备的基本设置，例如主机名或时区。您还可以修改时间同步配置。当然，通常情况下，您无需更改此页面上的任何内容。

![SenseCAP M2 本地控制台 指南 时间](https://www.sensecapmx.com/wp-content/uploads/2022/07/time.png)

* * *

**呼吸灯**
-------------------

*   _页面路径_： System -> Breathing Light

呼吸灯是热点设备的指示灯，您可以配置灯光的行为。

![SenseCAP M2 本地控制台 指南 呼吸灯](https://www.sensecapmx.com/wp-content/uploads/2022/07/breathing-light.png)

* * *

**区域**
----------

*   _页面路径_：System -> Region

在这里，您可以更改区域参数。出厂默认值为 “AUTO”，这意味着：

*   如果您的热点没有声明位置，则使用的区域基于您的热点类型，例如设备型号 M2-EU868 使用区域 EU868。
*   如果您的热点已声明位置，则根据位置自动调整区域。

通常情况下，您无需设置区域。在特殊情况下：如果您的热点（仅数据）没有声明位置，您可以选择其他区域。例如，设备型号 M2-US915 在澳大利亚可以设置为 AU915。

![SenseCAP M2 本地控制台 指南 区域配置](https://www.sensecapmx.com/wp-content/uploads/2022/07/region.png)

**注意：** 如果您的热点已声明位置，区域配置必须为 **AUTO**。

* * *

**LuCi 密码**
-----------------

*   **页面路径**：System -> Administration

在这里，您可以更改 LuCi 密码。

![SenseCAP M2 本地控制台 指南 LuCi 密码](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password.png)

* * *

**恢复出厂设置**
----------------------------

*   _页面路径_：System -> Firmware

如果您忘记了 LuCi 密码，可以通过恢复出厂设置来找回。然而，恢复出厂设置后，设备将再次更新。

![SenseCAP M2 本地控制台 指南 恢复出厂设置](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password.png)

* * *

**重启**
----------

*   _页面路径_：System -> Reboot

您可以在这里重置设备或配置设备的定时重置。

![SenseCAP M2 本地控制台 重启](https://www.sensecapmx.com/wp-content/uploads/2022/07/reboot.png)

* * *

**网络**
===========

**接口**
--------------

*   _页面路径_： Network -> Interfaces

您可以在此处获取有关网络接口的信息。LAN IP 默认值为 "192.168.168.1"。当您的路由器网关 IP 也是此地址时，您需要更改设备的 LAN IP。

![SenseCAP M2 本地控制台指南 网络接口](https://www.sensecapmx.com/wp-content/uploads/2022/07/network_interface.png)

**无线网络**
------------

*   _页面路径_： Network -> Wireless

您可以在此处连接 Wi-Fi。以下是步骤：

*   **步骤 1**：点击 '**scan**' 按钮扫描您所在区域的 Wi-Fi。

![SenseCAP M2 本地控制台指南 网络接口 无线网络](https://www.sensecapmx.com/wp-content/uploads/2022/07/wireless_home.png)

*   **步骤 2**：选择您的 Wi-Fi 以加入网络。

![SenseCAP M2 本地控制台指南 网络接口 Wi-Fi](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_join.png)

*   **步骤 3**：输入您的 Wi-Fi 密码，然后提交并保存。

![SenseCAP M2 本地控制台指南 网络接口 Wi-Fi 指南](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_submit.png)

![SenseCAP M2 本地控制台指南 网络接口 Wi-Fi 保存](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_save.png)

几秒钟后，您将能够连接到 Wi-Fi，您可以在接口页面中看到连接状态。

* * *

**多WAN**
------------

*   _页面路径_： Network -> MultiWan

您可以在此处查看网络接口的优先级和状态。MultiWAN 的优先级为：wan(ETH) > wwan(Wi-Fi) > wwan0 (4G\*)。

![SenseCAP M2 本地控制台指南 网络接口 多WAN](https://www.sensecapmx.com/wp-content/uploads/2022/07/multiwan.png)

* * *

**诊断**
---------------

*   _页面路径_：Network -> Diagnostics

您可以在此处测量您的互联网连接速度。

![SenseCAP M2 本地控制台指南 网络接口 网络测试](https://www.sensecapmx.com/wp-content/uploads/2022/07/network_test.png)