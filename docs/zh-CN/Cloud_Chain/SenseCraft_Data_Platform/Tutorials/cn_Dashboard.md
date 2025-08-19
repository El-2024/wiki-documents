---
sidebar_position: 1
description: SenseCAP Portal 仪表板
title: 仪表板
keywords:
- 云与链
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /cn/sensecraft-data-platform/tutorials/dashboard
aliases:
  - /cn/Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Dashboard
last_update:
  date: 02/14/2023
  author: Matthew
---

仪表板允许您实时监控设备状态和传感器数据。

## 概览

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-1.jpg)

① 添加“场景”或“图表”。  
② 设备概览：显示设备总数。  
③ 监控：统计所有离线设备和低电量设备。  
④ 数据更新间隔：设置页面（网页）刷新方式和时间。  
⑤ 公告：提示门户版本升级及其他信息。  
⑥ 场景：根据传感器区域配置相应的可视化显示模块。  
⑦ 图表：可以选择一个或多个相同类型的传感器，显示一段时间内的历史数据。

## 配置场景

根据安装位置或应用场景，您可以选择创建场景数据，通过分组不同数据并以图标形式显示最新数据。  
示例：账户下有多个分组：station-1、station-2、station-3……为 station-1 创建一个场景。  
① 自定义名称，创建“station-1”的场景显示，并选择“添加测量类型”。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-2.jpg)

② 选择要在“station-1”分组下显示的测量数据并确认。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-3.jpg)

## 配置图表

您可以创建图表以显示测量类型、设备 EUI、时间范围等信息。  
① 选择“添加”-“图表”。  
② 自定义名称并选择“添加测量类型”。  
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-4.jpg)  
③ 选择要显示的数据类型和时间。  
④ 选择一个分组。  
⑤ 选择分组下的具体传感器节点。  
⑥ 选择测量类型。  
⑦ 确认。

:::note
每个图表只能添加一种测量类型。每个图表最多可添加 5 条曲线。
:::

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-5.jpg)