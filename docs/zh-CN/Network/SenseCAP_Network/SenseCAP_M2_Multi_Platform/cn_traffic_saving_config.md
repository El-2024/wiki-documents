---
description: 低流量消耗模式配置（适用于4G版本）
title: 低流量消耗模式配置（适用于4G版本）
keywords:
- SenseCAP_M2
- Gateway
image: https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/sensecap_m2.jpg
slug: /cn/traffic_saving_config
last_update:
  date: 12/4/2024
  author: Jessie
---

本教程将指导用户为 M2 多平台网关 **4G版本** 配置低流量消耗模式。在此模式下，每月的流量预计约为 **60M**。具体流量取决于节点数据包等因素。

:::caution 注意
1. APP 的状态显示可能会有延迟
2. 网络切换和 RGB 指示灯将在 5 分钟后发生变化
:::

### 检查固件版本

在配置低流量消耗模式之前，请先检查操作系统和固件版本。

:::tip
操作系统版本需要高于 0.9.5<br/>
固件版本需要高于 1.1.6
:::

参考 [快速入门](https://wiki.seeedstudio.com/cn/quick_start_with_M2_MP/) 登录 Luci 页面。

导航到 `Status` -> `Overview`，检查当前的操作系统和固件版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/version-check.png" alt="pir" width={800} height="auto" /></p>

#### 升级操作系统

固件会自动升级，但用户需要手动升级操作系统版本。

导航到 `System` -> `Backup/Flash Firmware`，点击 `Update`。

:::danger
在升级期间保持电源连接。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/online-update.png" alt="pir" width={800} height="auto" /></p>

### 白名单配置

此选项卡用于过滤掉不需要的节点以节省流量。

* 对于 `SenseCAP` 模式，除 SenseCAP 外的节点将自动过滤，无需额外配置。

* 对于 `Packet Forwarder` 和 `Basic Station` 模式，需要启用白名单模式。

:::tip
如果您使用的是 AWS 平台，可以跳过此步骤，只需在 AWS 控制台上配置白名单。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/aws-white-list.png" alt="pir" width={600} height="auto" /></p>
:::

`OUI List`：节点 EUI 的前三个字节。*用于过滤 join-request 数据包*。<br/>
例如，对于 SenseCAP 节点，OUI 是 '2CF7F1'

`Network ID List`/`DevAddr`：*用于过滤上行数据包*。<br/>
例如，对于 SenseCAP 节点，NetID 是 '000013'，DevAddr 是 '27000000 - 27FFFFFF'

更多详情请参考 [NetID 和 DevAddr 前缀分配](https://www.thethingsnetwork.org/docs/lorawan/prefix-assignments/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/white-list-config.png" alt="pir" width={800} height="auto" /></p>

### 设置 PING 参数

用于检查链接是否正常，留空则假定接口始终在线。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/mwan3.png" alt="pir" width={800} height="auto" /></p>

### 启用低流量消耗模式

启用 `低流量消耗模式`，并设置 `存活时间`，SenseCAP 平台默认值为：86400。

设置完成后，请重启网关以应用更改。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/mode-enable.png" alt="pir" width={800} height="auto" /></p>