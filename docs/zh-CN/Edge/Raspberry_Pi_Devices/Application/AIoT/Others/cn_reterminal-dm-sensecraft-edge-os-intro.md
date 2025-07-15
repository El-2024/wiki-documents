---
description: reTerminal DM SenseCraft Edge OS 入门指南
title: reTerminal DM SenseCraft Edge OS 入门指南
keywords:
  - Edge
  - reTerminal-DM
  - SenseCraft Edge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reterminal-dm-sensecraft-edge-os-intro
last_update:
  date: 05/15/2025
  author: Peter Pan
---

#  reTerminal DM SenseCraft Edge OS 入门指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/splash.png" alt="pir" width="600" height="auto"/></p>

SenseCraft Edge OS 是一款为 reTerminal DM 的 10.1 英寸人机界面 (HMI) 设备精心设计的尖端操作系统，集成了多种功能，极大地提升了用户体验。这款革命性的操作系统拥有直观的界面，内置设置和控制功能，使用户能够轻松配置和管理设备。此外，它无缝集成了 Node-RED 编辑器和 Node-RED Dashboard，使用户能够解锁前所未有的定制化和自动化能力。借助 Node-RED 的可视化编程和自动化工具，该操作系统使用户能够轻松创建复杂的工作流并部署先进的控制系统。凭借直观的 HMI 控制与 Node-RED 的多功能性的完美结合，SenseCraft Edge OS 在各种使用场景中为 HMI 设备设立了增强功能和无与伦比的用户友好性的新标准。内置的 OSTree 版本化文件系统提供了一个强大的框架，用于以可扩展和可靠的方式管理和部署基于 Linux 的操作系统，重点在于原子性、不变性和高效的存储使用。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html">
            <strong><span><font color={'FFFFFF'} size={"2"}> 立即获取 reTerminal DM 🖱️</font></span></strong>
    </a>
</div>

:::note
reTerminal DM 将从下一批产品发布开始预装 Raspberry Pi OS 作为默认操作系统。
:::

:::note
此操作系统目前基于 reTerminal DM 开发，仅适用于生产版本的 reTerminal DM，您可以下载 [Sensecraft Edge OS](https://sourceforge.net/projects/reterminal-dm/files/Sensecraft-edge-OS-V0.3.10.tar.gz/download)
:::

## 功能

* **触摸友好的用户界面设计**，专为人机界面 (HMI) 设备量身定制，确保直观且无缝的用户体验。
* **无缝集成**广受欢迎的**“无代码和低代码”开发环境 Node-RED**，以及其配套组件 **Node-RED Dashboard**。这种集成为用户提供了强大的可视化编程能力和多功能的仪表板框架，无需广泛的编码知识即可构建定制化应用程序。
* **内置系统设置和控制**功能，提供全面且直观的界面，用于配置和管理 reTerminal DM 的各个方面。
* **内置应用中心以支持未来的用例扩展**，它是一个访问和安装各种应用程序和扩展的中心，允许用户定制和扩展操作系统的功能。
* **内置可配置服务**，如 **MQTT、MySQL 和 ChirpStack**，为用户在构建数据可视化仪表板应用程序时提供了增强的功能和灵活性。
* **OSTree 版本化文件系统**支持操作系统的**原子升级**，并允许您跟踪和管理操作系统及其组件的不同版本。这使得在需要时更容易回滚到以前的版本。
* **内置系统健康检查功能**，允许用户监控 reTerminal DM 的整体健康状况和性能。此功能提供有关系统状态的宝贵见解，确保最佳功能并识别潜在问题。


<!-- ## 选择 SenseCraft Edge 版本 -->

<!-- Code

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="V1.2.0" label="v0.1.8-1.2.0"> -->

## 布局概览

### 状态栏

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/status-bar.png" /></div>

可点击的项目及功能：

<div class="table-center">

| 图标 | 功能 | 
|---| ---|
|电源控制 | 打开一个下拉列表，包含“重启”、“关机”、“睡眠”选项 |
|蓝牙连接 | 跳转到蓝牙设置视图 |
|以太网连接| 跳转到以太网设置视图 |
|WiFi连接 | 跳转到 WiFi 设置视图 |

</div>

### 仪表盘 标签页

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/overview.png" /></div>

仪表盘 标签页在 reTerminal DM 上本地渲染 "node-red-dashboard" 视图，以下是一些设计参考：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/dashboard-size.png" /></div>

* 无需滚动的最大宽度：1075px
* 无需滚动的最大高度：752px

您还可以在与 reTerminal DM 位于同一网络的外部设备上访问仪表盘视图，只需在外部设备上打开您喜欢的网页浏览器，输入 reTerminal DM 的 IP 地址，后接默认的 Node-RED 端口 1880，再加上 **'/ui/'**，URL 应如下所示：**"ipaddress:1880/ui/"**

> 例如：在我的情况下，reTerminal DM 的 IP 地址是 "192.168.49.163"，那么 URL 是：**"192.168.49.163:1880/ui/"**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/dashboard-eg.png" /></div>

### Node-RED 编辑器标签页 {#node-red-editor-tab}

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/node-red.png" /></div>

请注意，您可以在与 reTerminal DM 位于同一网络的外部设备上打开 Node-RED 编辑器，只需在外部设备上打开您喜欢的网页浏览器，输入 reTerminal DM 的 IP 地址，后接默认的 Node-RED 端口 1880。要找到 reTerminal DM 的 IP 地址，您可以参考下图：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/node-red-ipaddress.png" /></div>

> 例如：在我的情况下，reTerminal DM 的 IP 地址是 "192.168.49.163"，那么 URL 是：**"192.168.49.163:1880/"**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/node-red-editer-eg.png" /></div>

:::note
您可以下载 [默认流程](https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/default-flow.json) 作为参考。
:::

有关如何在 reTerminal DM 上使用 Node-RED 的更多信息，请访问 Node-RED 的 Wiki 页面：

* [reTerminal DM RS485 接口与 Node-RED](/reTerminal-DM-Node-Red-RS485)
* [reTerminal DM MQTT 与 Node-RED](/reTerminal-DM-Node-Red-mqtt)
* [reTerminal DM CAN BUS 与 Node-RED](/reTerminal-DM-Node-Red-canbus)

### 系统设置标签页 {#system-settings-tab}

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/settings.png" /></div>

#### 网络子标签页

网络部分用于查看和设置以太网、WiFi 和蓝牙的网络功能。

##### 以太网子标签页

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/network.png" /></div>

##### WiFi 子标签页

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/wifi.png" /></div>

要连接 WiFi，请点击您想要连接的 WiFi SSID，然后您会看到以下弹出窗口，请输入 WiFi 凭据，然后点击 `确认` 继续。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/connect-wifi.png" /></div>

##### 蓝牙子标签页

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/Bluetooth.png" /></div>

#### 数据集

数据集部分用于启用和禁用与数据集控制相关的服务，目前我们内置了 MySQL 服务器和 MQTT 服务器。

##### MySQL 子标签页

您可以在此标签页中启用或禁用 MySQL 服务，还可以查看 MySQL 服务信息，例如 MySQL 服务器地址和服务器访问凭据。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/mysql.png" /></div>

##### MQTT 子标签页

您可以在此标签页中启用或禁用 MQTT 服务，还可以查看 MQTT 服务信息，例如 MQTT 服务器地址和服务访问凭据。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/mqtt.png" /></div>

#### 常规

常规部分用于在“关于”标签页获取设备信息，在“更新”标签页控制设备更新，在“屏幕”标签页调整屏幕设置，在“语言和时间”标签页更改本地设置，以及在“PIN”标签页设置屏幕锁定 PIN 以增强安全性。

##### 关于

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/about.png" /></div>

##### 更新

:::note
SenseCraft Edge OS 需要更新两部分内容。

系统更新：

* 负责系统后端组件

SenseCraft Edge 更新：

* 与 SenseCraft 应用程序 UI 界面相关的后端和前端组件

有两种方式可以更新它们。

本地更新：

* 使用包含更新文件的 USB 存储设备。

网络更新：

* 通过网络更新

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/updates.png" /></div>

##### 检查和更新

您可以分别点击 `立即更新` 按钮来更新系统或 SenseCraft Edge 应用程序。

如果您的系统是最新版本，您将会收到弹出的通知 `The System Version is latest version`（系统版本是最新版本）。

关于系统更新：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/system-update-success.png" /></div>

关于 SenseCraft Edge 更新：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/app-upgrade-success.png" /></div>

您可以点击 `Check Update`（检查更新）按钮来检查最新的可用更新并确认更新。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/check-update.png" /></div>

##### 本地更新

<!-- 第一步：请下载更新文件并保存到一个 USB 存储设备 -->

第一步：请点击 `Local Update`（本地更新）按钮

您应该会看到以下弹出窗口。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/local-update.png" /></div>

第二步：请将包含更新文件的 USB 存储设备插入 reTerminal DM，如上图所示。

第三步：在弹出窗口中点击 `next`（下一步），点击后请耐心等待，这可能需要一些时间来加载。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/select-update-file.png" /></div>

:::warning

**USB 错误**

如果 USB 出现问题，您将看到 `No USB flash drive detected`（未检测到 USB 闪存驱动器）。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/local-update.png" /></div>

为了让系统更新更加顺利，请确保您使用的是质量良好的 USB 存储设备，并格式化为 FAT32 或 EXT4，且 USB 存储设备的容量小于或等于 64GB。
:::

第四步：点击下一步并等待更新过程完成。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/local-updating.png" /></div>

##### 屏幕

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/screen.png" /></div>

##### 语言和时间

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/timezone.png" /></div>

##### PIN码

默认情况下 PIN 未设置，此 PIN 用于为 [Node-RED 编辑器标签](#node-red-editor-tab) 和 [系统设置标签](#system-settings-tab) 设置密码锁。

##### 设置 PIN 码：

设置 PIN 的步骤：

第一步：点击并切换 `Set PIN`（设置 PIN）按钮以进入 PIN 设置流程。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/toggle-pin-setting.png" /></div>

第二步：请输入 8 位 PIN 码。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin.png" /></div>

第三步：请重复输入 8 位 PIN 码以确认。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin-confirm.png" /></div>

##### 重置 PIN 码：

:::note
此步骤仅在您已设置 PIN 码时有效。
:::

第一步：点击 `RESET`（重置）按钮。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/reset-pins.png" /></div>

第二步：请输入当前 PIN 码以确认重置流程。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/enter-pin-to-reset.png" /></div>

第三步：请输入新的 8 位 PIN 码。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin.png" /></div>

第四步：请重复输入新的 8 位 PIN 码以确认。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin-confirm.png" /></div>

##### 解锁

一旦您设置了 PIN 码，当您进入 [Node-RED 编辑器标签](#node-red-editor-tab) 或 [系统设置标签](#system-settings-tab) 时，您需要输入 PIN 码进行解锁。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/unlock.png" /></div>

#### 中心

中心部分用于控制已安装的应用程序，其中中心标签充当应用商店，您可以安装、打开、禁用以及托管自己的应用程序，其功能类似于 Google Play 商店或 Apple 应用商店。目前此应用中心的功能有限，新功能将会更新，请保持关注并耐心等待。同时，我们欢迎您对应用中心的贡献，一旦社区贡献功能实现。

ChirpStack 标签显示为应用程序配置视图，ChirpStack 应用程序是从应用中心安装的。

##### 中心

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/appcenter.png" /></div>

:::note
目前此应用中心的功能有限，新功能将会更新，请保持关注并耐心等待。同时，我们欢迎您对应用中心的贡献，一旦社区贡献功能实现。
:::

##### ChirpStack

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/chirpstack.png" /></div>

<!-- </TabItem>
<TabItem value="DALL·E" label="DALL·E Code">

</TabItem>
</Tabs>

代码结束 -->

## 额外资源

*  [reTerminal DM 数据手册](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminalDM_datasheet.pdf)
*  [reTerminal DM 用户手册](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-User-Manual.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>