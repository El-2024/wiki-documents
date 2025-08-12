---
description: 热点管理
title: 热点管理
keywords:
- 云与链
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/sensecraft-blockchain/sensecraft-hotspot-app/hotspot-management
aliases:
  - /cn/Cloud_Chain/cloud/sensecraft-data/sensecraft-hotspot/sensecraft-hotspot-app/hotspot_management
last_update:
  date: 02/14/2023
  author: Matthew
---

**热点管理**
======================

**热点信息**
=======================

SenseCAP Hotspot App 管理既在 SenseCAP Dashboard 中又在您的钱包中的热点。如果您的热点已添加到 SenseCAP Dashboard 账户，SenseCAP App 将为您提供有关热点的所有信息，例如奖励、在线状态、P2P 状态、见证、位置等。

SenseCAP App 根据以下四种状态决定为热点提供的信息和操作：

1.  **SenseCAP**：SenseCAP 热点不仅已添加到 Dashboard 账户，而且热点所属的 Helium 钱包也已添加到 SenseCAP App。
2.  **仅钱包**：SenseCAP 热点的钱包已添加到 SenseCAP App。
3.  **仅 Dashboard**：SenseCAP 热点已添加到 Dashboard 账户。
4.  **其他制造商**：非 SenseCAP 热点，其钱包已添加到 SenseCAP App。

<table style={{borderCollapse: 'collapse', width: '100%', height: 105}} border={1}><tbody><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>状态类型</strong></td><td style={{width: '33.3333%', height: 21}}><strong>信息</strong></td><td style={{width: '33.3333%', height: 21}}><strong>操作</strong></td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}>SenseCAP</td><td style={{width: '33.3333%', height: 21}}>所有信息</td><td style={{width: '33.3333%', height: 21}}>所有操作</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}>仅钱包</td><td style={{width: '33.3333%', height: 21}}>奖励<br />规模<br />位置<br />中继<br />见证<br />Helium 在线状态</td><td style={{width: '33.3333%', height: 21}}>所有操作</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}>仅 Dashboard</td><td style={{width: '33.3333%', height: 21}}>所有信息</td><td style={{width: '33.3333%', height: 21}}>设置标签<br />关注<br />复制地址<br />添加到 Dashboard</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}>其他制造商</td><td style={{width: '33.3333%', height: 21}}>-</td><td style={{width: '33.3333%', height: 21}}>-</td></tr></tbody></table>


![SenseCAP 热点应用](https://www.sensecapmx.com/wp-content/uploads/2022/07/hotspot-app-sensecap.png)

**热点操作**
=====================

SenseCAP App 集成了 Helium Hotspot App 和 SenseCAP Dashboard，并提供以下操作，帮助您管理热点和奖励。

*   **更新位置**：将热点位置更新到 Helium 区块链
*   **更新天线**：将热点天线更新到 Helium 区块链
*   **配对（更新 Wi-Fi 或运行诊断）**：通过蓝牙设置热点的 Wi-Fi 并运行诊断
*   **标签**：设置类似 SenseCAP Dashboard 的标签
*   **复制地址**：复制热点地址或所有者地址
*   等等...