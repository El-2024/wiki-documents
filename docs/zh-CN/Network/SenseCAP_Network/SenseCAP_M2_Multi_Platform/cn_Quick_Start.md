---
description: 快速入门
title: 快速入门
keywords:
- 网关
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/quick_start_with_M2_MP
last_update:
  date: 2023/9/26
  author: Jessie
---

## POE连接

SenseCAP M2支持PoE（以太网供电），兼容IEEE 802.3 af标准。

:::tip
如果您的调制解调器/路由器不支持PoE，您需要额外准备一个提供40V-57V DC电源的PoE交换机作为PSE（供电设备）。
:::

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-poe.png" alt="pir" width={800} height="auto" /></p>

## 网关网络配置

将天线和电源适配器连接到网关。电源指示灯将显示红色，大约15秒后，顶部指示灯将闪烁绿色，表示网关正在启动。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-1.png" alt="pir" width={800} height="auto" /></p>

有两种方式连接到互联网。选择适合您的方式。

### 以太网连接

将以太网线连接到以太网端口，如果网关成功连接到互联网，顶部指示灯将显示绿色常亮。

### WIFI连接

用户可以通过两种方式登录Luci配置页面。

#### 通过路由器访问

* 步骤1：将您的设备连接到以太网线，并将您的电脑连接到同一个路由器。

:::note 您的电脑和设备应连接到同一个路由器/网络。
:::

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3.png" alt="pir" width={800} height="auto" /></p>

* 步骤2：获取设备的IP地址

在您的路由器管理页面检查设备的IP地址。

* 步骤3：获取设备的用户名和密码

您可以在设备标签上找到用户名和密码。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png" alt="pir" width={800} height="auto" /></p>

* 步骤4：登录Luci

在浏览器中输入设备的IP地址以进入Luci页面。然后输入设备的用户名和密码进行登录。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/login.png" alt="pir" width={800} height="auto" /></p>

#### 通过设备AP热点访问

* 步骤1：打开设备AP热点

按下按钮5秒，直到蓝色指示灯慢速闪烁以进入配置模式。

* 步骤2：连接到AP热点

AP热点名称为SenseCAP_XXXXXX（6位MAC地址），默认密码为12345678；将您的电脑连接到此AP热点。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wifi.png" alt="pir" width={400} height="auto" /></p>

* 步骤3：获取设备的用户名和密码

您可以在设备标签上找到用户名和密码。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png" alt="pir" width={800} height="auto" /></p>

* 步骤4：登录本地控制台

在浏览器中输入IP地址（192.168.168.1）以进入本地控制台。然后输入设备的用户名和密码，并点击登录按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-login.png" alt="pir" width={800} height="auto" /></p>

#### 连接到WIFI

* 步骤1：点击`网络` - `无线`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless.png" alt="pir" width={800} height="auto" /></p>

* 步骤2：点击`扫描`按钮扫描WIFI。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless2.png" alt="pir" width={800} height="auto" /></p>

* 步骤3：选择您的WIFI加入网络。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless3.png" alt="pir" width={800} height="auto" /></p>

* 步骤4：提交Wi-Fi密码，然后点击`提交`并保存。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless4.png" alt="pir" width={800} height="auto" /></p>

然后点击保存并应用以应用您的设置。

如果网关成功连接到WIFI，顶部指示灯将显示绿色常亮。

### 蜂窝连接（适用于4G版本）

* 步骤1：将您的SIM卡插入Nano-SIM卡槽

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/%E6%8F%92%E5%9B%BE-01.jpg" alt="pir" width={666} height="auto" /></p>

* 步骤2：登录Luci页面，点击`网络` - `蜂窝`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/4g1.png" alt="pir" width={800} height="auto" /></p>

* 步骤3：设置APN信息，然后点击`保存并应用`以应用您的设置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/4g3.png" alt="pir" width={800} height="auto" /></p>

:::tip
为了减少数据消耗，请检查[低数据消耗模式配置](https://wiki.seeedstudio.com/cn/traffic_saving_config)。
:::

### 通道计划设置

导航到`LoRa` > `通道计划`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP3.png" alt="pir" width={800} height="auto" /></p>

选择区域和频率计划。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP4.png" alt="pir" width={800} height="auto" /></p>

设置完成后，点击`保存并应用`。

### 检查网关连接状态

网关通电后，您可以通过以下两种方式检查网关工作状态：

#### LED指示灯

<table>
<tr><th colspan="2" valign="top"><b>模式</b></th><th colspan="1" valign="top"><b>描述</b></th></tr>
<tr><td colspan="1" rowspan="2" valign="top"><p></p><p></p><p>绿色</p></td><td colspan="1" valign="top">常亮</td><td colspan="1" valign="top">网关运行正常，互联网连接良好。</td></tr>
<tr><td colspan="1" valign="top">慢速闪烁</td><td colspan="1" valign="top">网关正在启动，请稍候。</td></tr>
<tr><td colspan="1" rowspan="3" valign="top"><p></p><p></p><p></p><p></p><p>蓝色</p></td><td colspan="1" valign="top"><p></p><p>常亮</p></td><td colspan="1" valign="top"><p>网关已准备好连接互联网。</p><p>需要进一步配置。</p></td></tr>
<tr><td colspan="1" valign="top">慢速闪烁</td><td colspan="1" valign="top">配置模式，如果没有活动，将在5分钟后自动退出。</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>快速闪烁</p></td><td colspan="1" valign="top">按住按钮30秒，直到指示灯快速闪烁，将触发恢复出厂设置。</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>橙色</p></td><td colspan="1" valign="top"><p></p><p>慢速闪烁</p></td><td colspan="1" valign="top">固件正在更新，请勿关闭网关电源或断开互联网连接。</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>白色</p></td><td colspan="1" valign="top"><p></p><p>常亮</p></td><td colspan="1" valign="top">网关仅安装了出厂固件，连接互联网后将自动更新到最新固件。</td></tr>
<tr><td colspan="1" rowspan="2" valign="top"><p></p><p>红色</p></td><td colspan="1" valign="top">常亮</td><td colspan="1" valign="top">硬件问题或互联网连接失败。</td></tr>
<tr><td colspan="1" valign="top">慢速闪烁</td><td colspan="1" valign="top">网关未连接到LNS。</td></tr>
</table>

#### SenseCAP Mate APP

在 SenseCAP Mate APP 中，当网关连接到网络时，`在线状态`会显示为`在线`。
有关获取 SenseCAP APP 的详细信息，请参考下一章节。

## 绑定网关

SenseCAP Mate APP 支持设备配置和远程管理。

* 第一步：下载 SenseCAP Mate APP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={600} height="auto" /></p>

* 第二步：登录 APP  
如果您是第一次使用 SenseCAP 平台，请先注册一个账户。

:::tip
请选择服务器位置为 Global。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app-register.png" alt="pir" width={500} height="auto" /></p>

* 第三步：添加设备  

点击右上角的 `+`，选择添加设备，然后扫描网关标签上的二维码。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app2.png" alt="pir" width={500} height="auto" /></p>

设置设备名称和位置，然后确认设置。
绑定成功后，您将在设备目录中看到您的网关。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app3.png" alt="pir" width={380} height="auto" /></p>

## 连接 SenseCAP 传感器

* 第一步：添加设备  

点击右上角的 `+`，选择添加设备，然后扫描网关标签上的二维码。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app2.png" alt="pir" width={500} height="auto" /></p>

* 第二步：选择频率计划  

点击 `设置`，设置平台和频率，频率应与您的网关频率匹配。

例如：如果您的网关是 US915 版本，那么您需要将传感器设置为 US915 频率。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app7.png" alt="pir" width={500} height="auto" /></p>

:::tip 
SenseCAP M2 多平台网关无法连接到 Helium 网络。
:::

有关 SenseCAP 传感器的更多配置，请参考：SenseCAP Sensors

## SenseCAP Portal 和 Mate APP

SenseCAP Mate APP 和 SenseCAP Portal 可用于检查设备状态和设备管理。

* [iOS 版 SenseCAP Mate APP（App Store）](https://apps.apple.com/cn/app/sensecap-mate/id1619944834)
* [Android 版 SenseCAP Mate APP（Google Play Store）](https://install.appcenter.ms/orgs/seeed/apps/sensecap-mate/distribution_groups/public)
* [SenseCAP Portal](https://sensecap.seeed.cc/portal/)

### 网关信息

在 SenseCAP Portal 和 SenseCAP Mate APP 上查看网关信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app8.png" alt="pir" width={700} height="auto" /></p>

### 传感器数据

在 SenseCAP Portal 和 SenseCAP Mate APP 上查看传感器数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app9.png" alt="pir" width={700} height="auto" /></p>