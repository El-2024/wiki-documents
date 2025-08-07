---
description: SenseCAP M1 本地控制台
title: SenseCAP M1 本地控制台
keywords:
- SenseCAP 网络
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_Local_Console
last_update:
  date: 02/14/2023
  author: Matthew
---


**概述**
============

**最新功能更新于 2022 年 1 月 14 日：** 为了提高 SenseCAP 本地控制台的安全级别，除了 CPUID 外，登录本地控制台还需要额外的密码，默认密码为热点的序列号（Serial Number）。强烈建议在首次登录后更改密码。

**注意**：您的计算机和热点必须连接到同一个路由器/网络才能使用本地控制台。如果您的热点是远程的，目前将无法运行本地控制台中的任何功能。

![本地控制台](https://www.sensecapmx.com/wp-content/uploads/2022/07/local-console.png)

**登录**
=========

**1\. 获取您的热点的 CPU ID 和 S/N**

*   如果您没有 SenseCAP M1 仪表板的账户，或者尚未将您的热点添加到仪表板，请找到 SenseCAP M1 的设备标签，并获取 S/N 和 CPU ID。

![本地控制台登录详情](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-16.png)

*   如果您已经注册了 SenseCAP M1 仪表板账户并添加了您的热点，您可以从仪表板中复制热点的 CPU ID 和 S/N。

![本地控制台登录详情 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-1-1.png)

**2\. 获取您的热点的 IP 地址**

*   如果您没有 SenseCAP M1 仪表板的账户，或者尚未将您的热点添加到仪表板，请在路由器管理页面中找到热点的 IP 地址，或者在 Helium APP 上运行诊断以获取 IP 地址。然后在浏览器中输入 IP 地址以进入本地控制台页面。
*   如果您已经注册了 SenseCAP M1 仪表板账户并添加了您的热点，您可以从仪表板中找到热点的 IP 地址：
    *   点击 "**Wi-Fi IP Address**" 或 "**LAN IP Address**" 链接，这将直接进入 Turbo Sync 本地控制台页面。
    *   如果您通过 Wi-Fi 连接，您将看到热点的 Wi-Fi IP 地址可供点击。
    *   如果您通过以太网线或本地 LAN 连接，您将看到热点的 LAN 地址可供点击。

![本地控制台登录详情 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi-name-ts-1.png)

**3\. 使用热点的 CPU ID 和默认密码（序列号，即 S/N）登录**

![本地控制台登录详情 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/login-1.png)

![本地控制台登录详情 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-2-1.png)

**4\. 更改默认密码**

![本地控制台更改密码](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password-1.png)

首次登录后，请点击 "**Change Password**" 按钮修改默认密码。新密码应包含 8~32 位字符，并至少包含数字、字母和符号的两种组合。密码将被加密并仅存储在您的 SenseCAP M1 本地设备中。

出于安全考虑，我们尚未提供“**忘记密码**”功能，因此请务必妥善记住您的密码。如果您忘记密码，您需要重新刷写 MicroSD 卡以恢复默认密码。

对于 CLI 用户，请注意每次更改密码时，本地控制台设备令牌也会自动更新。刷新本地控制台网页后，您将看到新的设备令牌。请妥善保管您的设备令牌，切勿在任何情况下将其分享给第三方。

**5\. 获取绑定密钥并将您的热点添加到 SenseCAP 仪表板**

![本地控制台绑定密钥](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3-2.png)

在本地控制台页面上获取设备的 CPU ID、设备 ETH MAC 和设备绑定密钥。

* * *

**重要信息**

**注意**：Turbo Sync 可能会导致 MicroSD 卡频繁擦写，仅在必要时建议使用。

如果您的设备的同步区块高度非常接近区块链（少于 200 个区块），则您的设备不需要 Turbo Sync，您也将无法运行此功能。

![Turbo Sync](https://www.sensecapmx.com/wp-content/uploads/2022/07/TS-console.png)

Turbo Sync 过程可能需要一段时间完成，具体取决于网络速度。请保持稳定的互联网连接，并耐心等待同步过程完成。

**重要**：请勿在 Turbo Sync 过程中关闭设备，否则设备在下次启动时将出现损坏的账本，并从上次的快照重新开始同步。在这种情况下，您需要重复 Turbo Sync 过程。

* * *

**重启**
==========

**注意**：您需要登录本地控制台。

点击橙色的 "Reboot" 按钮以开始重启过程。

*   当您看到 \[reboot\] 请求已发送 + \[reboot going\] 时，表示过程已开始。
*   当您看到 "----log stream disconnected from the host----" 和 "----log stream connected to the host----" 时，表示您已完成重启过程。

![重启 SenseCAP 热点](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4-2.png)

**注意**：Helium 区块链账本有时会因 MicroSD 卡中的意外错误而损坏，导致区块链同步过程停滞在某个区块并无法继续同步。

在本地控制台中重启热点可能有助于解决 MicroSD 卡中的潜在错误。

**重要**：请勿频繁重启热点，仅在必要时重启。

当区块高度卡住且不增加，高度停留在 -1 或 1 时，请执行区块重置。完成这些步骤后，热点将再次完全同步。

* * *

**关机**
=============

建议在拔掉设备电源之前使用关机功能，以防止设备因突然断电而损坏。

**如何使用关机功能**

点击 "**Shutdown**" 按钮并接受提示。

*   关机过程需要几分钟时间。
*   当关机完成时，您会看到蓝色指示灯和以太网端口的指示灯熄灭。

![SenseCAP 关机功能](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-5-2.png)

**注意**: 请确保在关机时您在 SenseCAP M1 设备旁边，因为如果您想重新启动设备，需要重新插入适配器。

* * *

**重置区块**
===============

**注意**: 您需要登录到本地控制台。

点击红色的 "**Reset Blocks**" 按钮以开始重置区块的过程。

![重置区块 SenseCAP](https://www.sensecapmx.com/wp-content/uploads/2022/07/reset-blocks.png)

**注意**: SenseCAP M1 将开始加载最新的已认证快照。仪表板中的状态可能会有延迟，暂时看到 "**Unknown**" 同步状态是正常的。

如果您需要运行 Turbo Sync，请等待最新的已认证快照加载完成（大约需要 30 分钟）。