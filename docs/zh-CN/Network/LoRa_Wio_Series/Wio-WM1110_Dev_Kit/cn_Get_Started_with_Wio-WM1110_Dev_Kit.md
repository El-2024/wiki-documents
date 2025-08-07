---
description: Wio-WM1110 开发套件快速入门
title: Wio-WM1110 开发套件快速入门
keywords:
- Wio-WM1110 开发套件
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Get_Started_with_Wio-WM1110_Dev_Kit
sidebar_position: 2
last_update:
  date: 8/7/2023
  author: Jessie
---

## 准备工作

* Wio-WM1110 开发套件 x 1
* 电脑 x 1
* USB Type-C 数据线 x 1
* J-Link 调试编程器 x 1

### 设备连接

将 Wio-WM1110 开发板连接到 J-Link 调试编程器，连接方式如下：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/hardware_connection.png" alt="pir" width={800} height="auto" /></p>

:::info 连接说明：
**3V3** (Wio-WM1110 开发板) -> **VTref** (J-Link 调试编程器引脚 1)  
**CLK** (Wio-WM1110 开发板) -> **SWCLK** (J-Link 调试编程器引脚 9)  
**DIO** (Wio-WM1110 开发板) -> **SWDIO** (J-Link 调试编程器引脚 7)  
**GND** (Wio-WM1110 开发板) -> **GND** (J-Link 调试编程器 GND)
:::

### 设置开发工具链

在开始开发之前，本快速入门指南需要以下工具。

#### SEGGER Embedded Studio (SES)

SES 是一个集成的解决方案，用于管理、构建、测试和部署嵌入式应用程序。它提供了广泛的功能，确保开发过程的流畅和高效。强大的项目管理器可以管理大大小小的项目，版本控制功能支持自动应用程序部署。

<a  href="https://www.segger.com/products/development-tools/embedded-studio/" target="_blank"><span>SEGGER Embedded Studio (SES)-下载</span></a>

:::tip 
推荐使用 5.68 版本。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/5.68version.png" alt="pir" width={800} height="auto" /></p>

#### SEGGER J-Link 软件和文档包

<a  href="https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack" target="_blank"><span>SEGGER J-Link 软件和文档包-下载</span></a>

#### nRF5 SDK

nRF5 SDK 为 nRF5 系列设备提供了丰富的开发环境，包括大量的驱动程序、库、外设示例、SoftDevices 和专有无线电协议。

SDK 中包含的所有代码示例均针对 Wio-WM1110 开发套件进行了编译和运行优化。

<a  href="https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs" target="_blank"><span>nRF5 SDK-下载</span></a>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/SDK_version.png" alt="pir" width={800} height="auto" /></p>

#### Seeed 示例包

Seeed 提供了一个示例项目，帮助开发者更快上手。该示例包括 LoRaWAN 通信、位置信息获取、板载传感器数据获取等功能。

<a  href="https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board" target="_blank"><span>Seeed 示例-下载</span></a>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/list.png" alt="pir" width={600} height="auto" /></p>

## 运行第一个测试

**将 Seeed 示例文件添加到 nRF5 SDK**

将 [Seeed 示例文件](https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board) 复制到 nRF5 SDK 的以下路径：
`.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/copyfile.png" alt="pir" width={800} height="auto" /></p>

让我们构建 `ses_blinky` 项目以检查您的工具链是否已正确设置。
导入 `ses_blinky` 项目。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/opensolution.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/open-project.png" alt="pir" width={800} height="auto" /></p>

**编译测试应用程序**

选择 "Build" > "Compile project_target"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/complie.png" alt="pir" width={800} height="auto" /></p>

**烧录测试应用程序**

编译应用程序后，您可以将其烧录到开发板上。

点击 "Target" -- "Connect J-Link"。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/connect-to-JLink.png" alt="pir" width={800} height="auto" /></p>

点击 "Build" -- "Build and Run" 来构建并运行 blinky 项目。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/run.png" alt="pir" width={800} height="auto" /></p>

完成后，您将看到 "Download successful"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/download-seccessful.png" alt="pir" width={800} height="auto" /></p>

然后开发板上的两个 LED 将如下闪烁。

<div align="center"><img width={253} src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/blink-test.gif" /></div>

## 开始使用

本章将指导您通过 TTN 在 Node-Red 上显示当前位置信息，并解释如何设置所有必需的服务器（网络服务器(NS) 和应用服务器(AS)）。

**架构与数据流**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/flow.png" alt="pir" width={800} height="auto" /></p>

### 设置密钥

在设备能够通过 NS 通信之前，我们需要用 3 个密钥注册它。

Wio-WM1110 DK 允许用户设置 DevEUI、AppEUI 和 AppKey。这将在下一步中使用，因此您可以在 `lorawan_key_config.h` 文件中定义自己的参数，然后将其烧录到开发板上。

文件位置：
`.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board/apps/common/lorawan_key_config.h`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/keys.png" alt="pir" width={800} height="auto" /></p>

或者，您可以通过 TTN 生成密钥，然后将其填写到 `lorawan_key_config.h` 文件中并在开发板上运行。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device3.png" alt="pir" width={800} height="auto" /></p>

### LoRa Cloud™ Modem 和地理定位服务

LoRa Cloud Modem 和地理定位服务为运行在 LoRaWAN 网络上的 LoRa® 设备提供了一整套生命周期管理功能。这些功能包括但不限于：

* 全面的设备遥测
* 设备和应用配置
* 时钟同步
* 提供对数据包丢失具有鲁棒性的高级数据传输服务以及透明的数据分片（缓冲区流和文件上传）
* 地理定位

首先，访问 [LoRa Cloud™ 门户](https://www.loracloud.com/?__hstc=212684107.3eb7c02aaa159a9e414cb1b589ca989c.1678419369281.1686727930327.1686794688289.35&__hssc=212684107.3.1686794688289&__hsfp=1476773244) 并注册一个账户。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/signup.png" alt="pir" width={800} height="auto" /></p>

#### 第 1 步：创建一个所有者
要创建令牌，您需要先创建一个所有者。
导航到 DEVICE OWNERS 页面。
点击 CREATE NEW OWNER。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_owner.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_owner2.png" alt="pir" width={800} height="auto" /></p>

#### 第 2 步：获取令牌

应用服务器需要令牌来验证对 LoRa Cloud Modem 和地理定位服务服务器的调用。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/tokens.png" alt="pir" width={800} height="auto" /></p>

#### 第 3 步：API URL

LoRa Cloud Modem 和地理定位服务的 URL 取决于设备将部署的区域。
点击 "Manage Tokens"，然后您可以查看 API URL：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MGS.png" alt="pir" width={800} height="auto" /></p>

:::tip 
当从设备接收到数据时，它会自动注册到 LoRa Cloud Modem 和地理定位服务服务器。这意味着设备无需事先注册。
:::

### LoRaWAN® 网络服务器 (TTN)

目前我们使用 [The Things Network V3](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3)。

首先，注册一个 The Things Industries 或 The Things Network 的账户。

#### 第 1 步：创建一个应用程序

导航到 Applications 页面，点击 "+Create application"。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

输入一个应用程序 ID，点击“Create Application”以保存更改。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>


#### 第 2 步：注册设备

点击“Register end device”。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png" alt="pir" width={800} height="auto" /></p>

设置以下参数：

**Frequency Plan（频率计划）**：选择目标区域的适当频率计划

**LoRaWAN version（LoRaWAN 版本）**：LoRaWAN 规范 1.0.3

**Regional Parameters version（区域参数版本）**：V1.0.3 REV A

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png" alt="pir" width={800} height="auto" /></p>

:::tip
JoinEUI/DevEUI/APPEUI：这些是在之前设置中定义在 `lorawan_key_config.h` 文件中的。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png" alt="pir" width={800} height="auto" /></p>

#### 第 3 步：创建凭据

The Things Network V3 网络服务器要求您生成一个唯一的 MQTT 密码。在控制台的应用程序页面上：

* 点击“Integrations”，然后选择 MQTT。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT1.png" alt="pir" width={800} height="auto" /></p>

* 选择“Generate new API Key”。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/API_key.png" alt="pir" width={800} height="auto" /></p>

* 复制以下字段的值：Server Address、Username 和 Password。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT2.png" alt="pir" width={800} height="auto" /></p>

### 应用服务器

应用服务器处理应用数据和设备管理帧。由于 LoRaWAN® 网络服务器与 LoRa Cloud™ Modem & Geolocation Services 之间没有后台连接，所有与调制解调器流量相关的上行链路必须由应用服务器转发到 LoRa Cloud Modem & Geolocation Services。

我们使用 Node-RED 作为应用服务器。Node-RED 是一个基于浏览器的可视化编程工具，允许快速原型开发。Node-RED 构建于 Node.js 之上，可以使用各种节点将流程连接在一起。这些节点可以通过单击部署到 Node-RED 运行时。

#### 安装 Node.js®

要在本地安装 Node-RED，您需要一个 <a href="https://nodered.org/docs/faq/node-versions" target="_blank"><span>支持的 Node 版本</span></a>。

从官方 <a href="https://nodejs.org/en/" target="_blank"><span>Node.js</span></a> 下载最新的 16.x LTS 版本。这将为您的系统提供最佳版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/nodejs_version.png" alt="pir" width={600} height="auto" /></p>

安装 Node.js 时，如果您使用的计算机尚未安装任何编程环境，我们建议您在安装 Node.js 时勾选安装必要工具的选项，这将为您节省许多不必要的麻烦。

安装 Node-RED 最简单的方法是使用 Node 的包管理工具 npm。然而，我们不建议使用 npm 1.x 安装 Node-RED，而是将其升级到最新的 npm 2.x 版本。

:::note
在 Windows 上（需要 Windows 10 及以上版本），使用 Win+R 快捷键并在弹出的窗口中输入 cmd 以打开终端，然后执行以下命令。
:::

如果您使用的是 MacOS 或 Linux，请在终端中执行以下命令，并为非 root 用户在命令前添加 sudo。

```cpp
npm install -g npm@2.x
```

安装完成后，打开命令提示符并运行以下命令以确保 Node.js 和 npm 安装正确。

```cpp
node --version && npm --version
```

您应该会收到类似以下的输出：

```cpp
> v18.7.0
> 9.6.5
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/npm_version.png" alt="pir" width={600} height="auto" /></p>

#### 安装 Node-RED

将 Node-RED 安装为全局模块会将命令 node-red 添加到您的系统路径中。在命令提示符下执行以下命令：

```cpp
npm install -g --unsafe-perm node-red
```

如果 Node-RED 已作为全局 npm 包安装，则直接执行命令 node-red：

```cpp
node-red
```

这将允许您在 http://localhost:1880 上查看 Node-RED 编辑器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/node-red.png" alt="pir" width={600} height="auto" /></p>

用户界面有三个关键区域：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/nodered1.png" alt="pir" width={800} height="auto" /></p>

* **Palette（调色板）**：这是您可以选择节点的地方；这些是功能块，可以拖放，然后可以链接在一起以创建流程。
* **Flow（流程）**：这是程序的源代码。在此窗格中，您可以将节点链接在一起以创建应用程序。
* **Sidebar（侧边栏）**：侧边栏显示所选节点的任何帮助或调试信息。

#### 安装库

为了设置演示，我们将安装两个额外的库：

* [node-red-contrib-loracloud-utils](https://www.npmjs.com/package/@semtech-wsp-apps/node-red-contrib-loracloud-utils)：处理与 LoRa Cloud™ 服务器的连接

* [node-red-contrib-web-worldmap](https://www.npmjs.com/package/node-red-contrib-web-worldmap): 用于在网页上绘制“事物”的世界地图

点击右上角的菜单并选择“管理调色板”。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install.png" alt="pir" width={800} height="auto" /></p>

在调色板菜单中选择“安装”。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_pak.png" alt="pir" width={800} height="auto" /></p>

搜索“node-red-contrib-loracloud-utils”并安装。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_loracloud.png" alt="pir" width={800} height="auto" /></p>

重复这些步骤以安装“node-red-contrib-web-worldmap”库。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/install_worldmap.png" alt="pir" width={800} height="auto" /></p>

#### 导入流程

Seeed 包含了一些有用的示例，帮助您完成此示例项目，只需导入以下两个配置文件。

```
.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board-master/apps/examples/geolocation_application_server/modem.json

.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/Seeed_Wio_WM1110_Dev_Board-master/apps/examples/geolocation_application_server/geolocation.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow2.png" alt="pir" width={800} height="auto" /></p>

然后您将看到以下流程：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/importflow3.png" alt="pir" width={800} height="auto" /></p>

#### 配置流程

**配置 LoRaWAN 网络服务器 (MQTT)**  
所有网络服务器连接器默认已激活；然而，MQTT 连接需要单独设置。  
在开始之前，请获取以下数据：
* MQTT 服务器地址
* MQTT 端口
* MQTT 用户名
* MQTT 密码

这些数据可以在 **步骤 3：创建凭据** 中获取。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/MQTT2.png" alt="pir" width={800} height="auto" /></p>

双击 "TTN v3-Uplinks" 节点，并编辑 MQTT 节点。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/configure_mqtt1.png" alt="pir" width={800} height="auto" /></p>

您可以在[上一步](https://wiki.seeedstudio.com/cn/Wio-WM1110_Dev_Kit_Server_Configuration/#step-3-create-credentials:~:text=Copy%20the%20values%20from%20the%20following%20fields%3A%20Server%20Address%2C%20Username%2C%20and%20Password.)中找到服务器和端口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/TTN_TLS.png" alt="pir" width={800} height="auto" /></p>

然后将用户名和密码添加到“安全性”中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/TTN_se.png" alt="pir" width={800} height="auto" /></p>

点击“添加”，然后点击“完成”。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/add_and_done.png" alt="pir" width={600} height="auto" /></p>

双击 "TTN joinReq" 节点，并选择我们在上一步中添加的 MQTT 服务器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/select_server.png" alt="pir" width={800} height="auto" /></p>

**调制解调器和地理定位服务配置**

要配置服务器，请从[上一步](https://wiki.seeedstudio.com/cn/Wio-WM1110_Dev_Kit_Server_Configuration/#step-2-get-a-token)中获取 MGS URL 和 MGS TOKEN 值。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_token.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev_Kit/set_url.png" alt="pir" width={800} height="auto" /></p>

填写您的设备 EUI。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/set_eui.png" alt="pir" width={800} height="auto" /></p>

点击“部署”按钮以部署流程。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/deploy.png" alt="pir" width={800} height="auto" /></p>

#### 数据查看

点击“调试”，查看 LoRa Cloud 调制解调器和地理定位服务返回的数据：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/debug_page.png" alt="pir" width={800} height="auto" /></p>

**地理定位**

要显示地图，在您的浏览器 URL 中添加 `/worldmap`。  
例如：http://127.0.0.1:1880/worldmap

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/map_page.png" alt="pir" width={800} height="auto" /></p>

## 资源

[Seeed_Wio_WM1110_Dev_Board](https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board)

[nRF5-SDK](https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs)

[SEGGER J-Link 软件和文档包](https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack)



## 技术支持

**需要帮助解决您的 Wio-WM1110 开发套件问题？我们随时为您提供支持！**




<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions" class="button_discussion"></a>
</div>