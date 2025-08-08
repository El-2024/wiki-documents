---
description: SenseCAP M4 快速入门
title: SenseCAP M4 快速入门
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Quick_Start
last_update:
  date: 02/14/2023
  author: Matthew
---

# SenseCAP M4 Square 快速入门

**SenseCAP M4 Square** 提供了部署下一代计算网络（FluxNode）的最简单方式。无需 Linux 命令，无需构建环境，仅需 4 步即可完成部署。

## 前置条件

* 部署 CUMULUS FluxNode 所需的网络上传速度 **（最低 25Mbps 上传速度）**
* 一个新创建的 CUMULUS FluxNode

## 所需物品

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.png" alt="quick-start" width={600} height="auto" /></div>

## 质押 Flux CUMULUS 节点

本教程以 Binance 为例

### 第一步 前往交易所购买 Flux

1. 下载 [Binance App](https://www.binance.com/zh-CN/download) 并注册账户

2. Flux 无法直接用法币购买。请先购买 USDT，然后将 USDT 转换为 Flux

3. 在交易页面，选择现货交易，并在市场中选择 FLUX/USDT

4. 输入 USDT 数量，并确保转换后的 Flux 数量大于 1000

5. 点击购买按钮，现在您已成功购买 Flux

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node.jpg" alt="stake-flux" width={600} height="auto" /></div>

### 第二步 下载 Zelcore App 并注册账户

1. 下载 [Zelcore App](https://zelcore.io/) 并登录您的 Zelcore 账户

2. 在资产页面，点击添加资产按钮，添加 FLUX BSC 资产（支付资产组合）

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node-1.png" alt="zelcore" width={600} height="auto" /></div>

### 第三步 从 Binance 提现 Flux 到 Zelcore 钱包

1. 打开 Binance App 并访问钱包页面

2. 找到 Flux，点击提现并选择通过加密网络发送

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_342796_dUNV1mJGFQqnbdUX_1672995944?w=1200&h=1200" alt="binance" width={600} height="auto" /></div>

3. 输入提现信息并发送

* 地址：打开 Zelcore App，复制 FLUX BSC 接收地址，并粘贴到 Binance

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_846590_gzvPZu5rXihuT8F5_1672996316?w=1280&h=1268.796498905908" alt="withdraw" width={600} height="auto" /></div>

* 网络：选择 BB Smart Chain (BEP20)
* 数量：1000+ Flux
* 发送自：现货&资金钱包

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_462161_Dwa_CwJs_TZZu9PS_1672996442?w=1200&h=1200" alt="send" width={600} height="auto" /></div>

4. 检查您的提现信息并发送到 Zelcore

### 第四步 创建一个新的 Flux Cumulus 节点

1. 打开 Zelcore App，检查您的 Flux 是否已发送到您的 FLUX BSC 资产（支付资产组合）

2. 访问应用页面，打开 Fusion，将 FLUX BSC 交换为 Flux（支付资产组合）。

* 卖出资产：选择 FLUX BSC
* 买入资产：选择 FLUX

注意：确保您有足够的 BNB 支付交换费用

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_153450_KYFKcuB_o6xATDxg_1672996615?w=1200&h=1200" alt="swap" width={600} height="auto" /></div>

3. 将 Flux 从支付资产组合发送到另一个资产组合，例如 Mining 的 Flux 资产

4. 现在，您可以在 SenseCAP M4 Square 上部署新的 Flux Cumulus 节点！

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_337290_CDU9M2a95R8QqPsg_1672997135?w=1280&h=1277.1806167400882" alt="deploy" width={600} height="auto" /></div>

## 在 SenseCAP M4 Square 上部署 FluxNode

### 第一步：启动设备并连接到互联网

1. 将提供的 12V/2A 电源适配器插入 DC-IN 电源接口。

2. 将网线连接到 Ethernet2。

3. 设备将自动完成自我设置。L3 指示灯稳定橙色表示设置和连接互联网成功。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.png" alt="power" width={600} height="auto" /></div>

### 第二步：安装 SenseCAP Hotspot App 和 Zelcore App

1. SenseCAP Hotspot App 用于设置和管理设备。请扫描以下二维码安装 SenseCAP Hotspot App。

2. 使用您的电子邮件注册 SenseCAP 账户或直接登录。

<div style={{textAlign: 'center'}}><a href="https://app.sensecapmx.com/"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-2.png" alt="app" width={600} height="auto" /></a></div>

3. Zelcore App 是由 Flux 发布的，用于查找、管理、交易以及真正拥有您的数字资产、**FluxNode** 和信息。请点击以下图片安装 Zelcore App。

<div style={{textAlign: 'center'}}><a href="https://zelcore.io/"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-3.png" alt="zelcore" width={600} height="auto" /></a></div>

### 第三步：设置 SenseCAP M4

1. 按下设备左下角的顶针，取下端盖。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-4.png" alt="setup1" width={600} height="auto" /></div>

2. 按住 B1 按钮 5 秒，直到 L2 指示灯闪烁蓝色以开启蓝牙配置模式。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-5.png" alt="setup2" width={600} height="auto" /></div>

3. 在 SenseCAP Hotspot App 中选择 Flux 并点击 Setup。

* 通过蓝牙扫描设备
* 选择设备进行连接

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.jpg" alt="setup3" width={600} height="auto" /></div>

4. App 成功连接到设备后，点击安装按钮在设备上安装 Flux dApp。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-7.png" alt="setup4" width={600} height="auto" /></div>

### 第四步：部署 Flux Node

1. Flux dApp 安装完成后，点击 Open 按钮开始部署 CUMULUS FluxNode。

**注意：请购买 1000 Flux 作为抵押，并将其转移到您的 Zelcore Flux 钱包以进行 CUMULUS FluxNode 设置。**

**指南**

* [FluxNode 设置指南](https://medium.com/@mmalik4/flux-light-node-setup-as-easy-as-it-gets-833f17c73dbb)
* [Flux Light Node 设置视频教程指南（设置 Zelcore 和存入 Flux 教程从 8:07 到 12:30）](https://www.youtube.com/watch?v=RT1uaSrurv4)

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-8.png" alt="deploy1" width={600} height="auto" /></div>

2. 输入来自 Zelcore APP 的 Identity Key、Collateral TX ID、Output Index、Zel ID 和 Kadena Address，请下载 Zelcore 以获取更多信息。

> **Identity Key**：点击 Apps > 在 Apps 页面点击 FluxNodes > 点击您的 FluxNode > 在展开菜单中点击 Edit > 点击 Identity Key 复制它
> 
> **Collateral TX ID**：点击 Apps > 在 Apps 页面点击 FluxNodes > 点击您的 FluxNode > 在展开菜单中点击 Edit > 点击 Collateral TX ID 复制它
> 
> **Output Index**：点击 Apps > 在 Apps 页面点击 FluxNodes > 点击您的 FluxNode > 在展开菜单中点击 Edit > 点击 Output Index 复制它
> 
> **Zel ID**：点击 Apps > 在 Apps 页面点击 Zel ID > 点击二维码复制 Zel ID
> 
> **Kadena Address**：NIMBUS 和 STRATUS 可以输入 Kadena 地址以获得额外的 KDA 奖励。如果您部署的是 CUMULUS 则无需输入。点击 Portfolio > 在页面点击 Show Zero Sum > 点击 Kadena > 点击 Details > 点击 Receive 操作 > 点击二维码复制 Kadena 地址

3. 点击 Start Deploy，SenseCAP M4 将自动部署 FluxNode。部署时间取决于设备网络，请确保设备网络良好。现在 App 可以断开与 SenseCAP M4 的连接，或者通过 App 继续监控部署进度。

**注意：确保您的设备网络具有公共 IP，下载速度 >= 25 Mb/s，上传速度 >= 25 Mb/s。否则，Flux 基准测试将失败。**

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-13.png" alt="deploy2" width={600} height="auto" /></div>

4. 当开始同步 Flux 链时，请前往 Zelcore App 并输入您的 FluxNode 的公共 IP 和名称。然后点击 Start 按钮启动您的 FluxNode。

如果您的 FluxNode 运行正常并通过基准测试，它将需要 1 个区块被挖掘以使您的 FluxNode 状态更改为 Started，并需要 1-10 个区块（2 到 20 分钟）以获得 Confirmed 状态。Confirmed 是最终状态。如果节点获得 Confirmed，您可以通过刷新 FluxOS 的主页在状态页面查看。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-14.png" alt="deploy3" width={600} height="auto" /></div>

## 高级功能

UPnP 设置
------------

UPnP（通用即插即用）允许网络中的设备向路由器请求打开端口以接收外部流量。如果您的路由器支持并遵循正确的 UPnP 标准，UPnP 可以成为一种更简单的解决方案。

如果您希望在单个外部 IP 地址上部署多个 SenseCAP M4 Square，请确保**设备连接的路由器支持 UPnP 并已启用该功能。**

注意：单个外部 IP 地址**最多支持部署 8 个 FluxNodes**。

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-16.png)

*   1 个 SenseCAP M4 Square 已部署 FluxNode
    
*   通过 SenseCAP Hotspot App 使用蓝牙连接 M4
    
*   点击设置图标并选择 UPnP 设置
    
*   启用 UPnP 并选择一个未使用的端口
    
*   点击确认并发送配置
    
*   现在 M4 的 UPnP 已启用，UPnP 状态为 ENABLE
    

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.jpg)

Fractus 设置
---------------

Fractus 节点旨在增加 Flux 网络存储容量。Fractus 节点是一个 Cumulus 级别节点，提供至少 10TB 的存储空间。Fractus 节点将在原生 Flux 区块奖励的基础上额外获得 15% 的 Flux。

运行 Fractus 节点的最低要求：

*   1000 Flux 抵押。
*   2 个 CPU 核心。
*   4 个 CPU 线程。
*   每秒 240 个 CPU 事件。
*   单个分区上至少 9250 GB 的存储空间（支持 RAID）。
*   80MB/s 的磁盘写入速度。
*   100Mb/s 的下载/上传速度。

![](https://wdcdn.qpic.cn/MTMxMDI3MDEwODc4Njk2MTk_47467_AZXsjpYcOQweNFnJ_1675844077?w=1200&h=654)

*   1 个 SenseCAP M4 Square 已部署 FluxNode
*   将一个 10TB 的硬盘插入 SenseCAP M4 Square 的 USB3.1 接口
*   通过 SenseCAP Hotspot App 使用蓝牙连接 M4
*   点击设置图标并选择 Fractus 设置
*   启用 Fractus 并点击确认发送配置
*   现在 M4 的 Fractus 已启用，Fractus 状态为 True

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/稿定设计导出-20230220-153442.jpg)

添加到仪表板
----------------

有关 SenseCAP M4 Square 的更多信息，请将其添加到 SenseCAP 仪表板。

*   直接添加：在 FluxNode 页面，点击 + 图标并输入自定义名称和设备标签上的 SN，将设备添加到仪表板
    
*   通过蓝牙添加：如果您的 M4 已部署 FluxNode，通过 SenseCAP Hotspot App 使用蓝牙连接 M4，然后将其添加到仪表板。
    

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-15.png)

恢复区块
-------------

通过 SenseCAP Hotspot App 使用蓝牙连接 M4，然后打开 Flux 应用并点击“恢复区块”按钮。M4 将自动恢复区块，无需其他步骤。恢复时间取决于设备的网络，请确保设备网络良好。

删除
------

**请谨慎操作！** 删除已部署在 SenseCAP M4 上的 CUMULUS FluxNode。通过 SenseCAP Hotspot App 使用蓝牙连接 M4，然后打开 Flux 应用并点击“删除”按钮以删除 FluxNode。

重新部署
--------

**请谨慎操作！** 重新部署将自动先删除已部署的 FluxNode。通过 SenseCAP Hotspot App 使用蓝牙连接 M4，然后打开 Flux 应用并点击“重新部署”按钮，并输入新的 FluxNode 信息以重新部署。

**去中心化应用支持列表**
====================================

*   Flux Cumulus Node
    
*   Flux Cumulus Fractus（待定）
    

**Flux Cumulus 节点网络配置**
===========================================

为了确保您的 Flux 节点正常运行，请务必正确设置网络。以下将介绍单节点和多节点的网络要求。

**要求**

*   一个外部 IP 地址，单个外部 IP 地址最多支持 8 个 Flux 节点。如果您有超过 8 个设备，可能需要更多的外部 IP 地址。
    
*   稳定的有线网络环境，带宽 ≥25 Mbps。
    
*   路由器支持 UPnP 和端口转发功能，以将端口转发到设备。
    

**设置单节点**

[参考 Flux 官方文档](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)

**设置多节点**

SenseCAP M4 Square 不支持多个 FluxNodes。