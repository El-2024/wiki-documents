---
sidebar_position: 1
title: 概述
description: SenseCraft 数据平台快速入门指南——管理您的 SenseCAP 设备，并通过安全可靠的云平台可视化传感器数据。
keywords:
- 云与链
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /cn/cloud/sensecraft-data/sensecraft-data-platform/overview
aliases:
  - /Cloud_Chain/SenseCAP_Portal/QuickStart
last_update:
  date: 06/06/2025
  author: Matthew
---

# SenseCraft 数据平台快速入门

:::tip
**注意：**  
自 2025 年起，**SenseCAP Portal** 已正式更名为 **SenseCraft 数据平台**。功能保持不变，并持续优化以更好地支持 AIoT 和多传感器场景。
:::

如何使用 SenseCraft 数据平台？让我们开始吧！

## 简介

SenseCraft 数据平台的主要功能是管理 SenseCAP 设备并存储数据。它基于微软的安全可靠云服务 Azure 构建。您可以申请一个账户并将所有设备绑定到该账户。SenseCraft 提供了一个网页平台和 API。网页平台包括仪表盘、设备管理、数据管理和访问密钥管理，而 API 则向用户开放以便进一步开发。

## 网站

- 全球站点：<a href="https://sensecap.seeed.cc/">https://sensecap.seeed.cc</a>

## 创建新账户

① 选择“注册账户”，输入邮箱信息并点击“注册”。一封注册邮件将发送到您的邮箱。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-1.jpg)

② 打开 "SenseCAP..." 或 "SenseCraft…" 邮件，点击链接，填写相关信息并完成注册。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-2.jpg)

③ 返回登录界面并完成登录。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-3.jpg)

:::note
如果找不到邮件，可能被自动识别为“垃圾邮件”并放入“垃圾箱”。<br />
如果登录时忘记密码，可以通过邮箱找回。
:::

## 下载 SenseCAP 应用

安装 `SenseCraft App` 并登录。

- 安卓：<a href="http://sensecap-app-download.seeed.cn/">点击此处下载应用</a>，并扫描二维码。
- iOS：在 App Store 中搜索 “SenseCraft”。

## 绑定设备

每个 SenseCAP 设备的外壳上都有一个标签，如下图所示。EUI 是 SenseCAP 设备的唯一代码。Key 是一个加密字段，可以忽略。
在 SenseCAP 应用主页面，点击“绑定”按钮，然后扫描二维码以绑定设备。

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/label.jpg)

## 查看数据

登录 `SenseCraft 数据平台`，在“设备/传感器节点”部分查看设备状态和基本信息，并在“数据/表格”部分查看传感器数据。
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/data_overview.jpg)