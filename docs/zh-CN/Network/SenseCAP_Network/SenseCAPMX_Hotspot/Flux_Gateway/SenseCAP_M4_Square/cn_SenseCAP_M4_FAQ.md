---
description: SenseCAP M4 常见问题解答
title: SenseCAP M4 常见问题解答
keywords:
- SenseCAP 网络
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_FAQ
last_update:
  date: 02/14/2023
  author: Matthew
---

常见问题解答
===

### **节点的平均 Flux 链同步时间是多少？**

下载并加载一个 20GB 的快照文件，大约需要一个小时的链同步时间以赶上最新的区块。具体的同步时间取决于设备的网络，请确保设备拥有良好的网络连接。

### **SenseCAP M4 Square 是否支持 NIMBUS 和 STRATUS？**

**不支持**，SenseCAP M4 Square 仅支持 CUMULUS。如果需要 NIMBUS，请点击[这里](https://www.seeedstudio.com/flux?utm_source=discord&utm_campaign=sensecapm4)。

### **如何检查我的端口是否打开？**

SenseCAP M4 Square 打开了 Flux 所需的所有端口。SenseCAP Hotspot 应用提供了 UPNP 检测功能。如果 UPNP 状态为 ON，则端口已打开。如果状态为 OFF，请检查路由器的 UPNP 设置。更多详情，请访问 [Flux 节点网络设置](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)。

### **M4 是否需要静态 IP？是否可以在同一外部 IP 下运行多个 SenseCAP M4 Square？**

需要一个外部 IP。

每个 IP 最多可运行 8 台设备，并确保路由器支持 UPnP 或端口转发。

### **如何测试网络带宽是否满足要求？**

请访问：https://www.speedtest.net

### **Flux 和 Flux 代币有什么区别？**

Flux 代币即为 Flux。Flux 代币是分布在不同区块链上的平行资产，例如 ETH Flux、BSC Flux 等。它们可以在 Zelcore 的 Fusion 应用中领取。点击右上角的“三点”选择“Parallel Mining Claim”。只有当您的 Flux 代币数量高于领取所需的费用时，才会显示可领取的金额。

### **如果我是专业用户，可以擦除原系统并安装其他系统吗？**

这不是推荐的操作。然而，SenseCAP M4 是基于 x86 的设备，您可以重新安装任何您想要的系统，但在此之前，请确保您知道自己在做什么。

请注意，如果擦除标准系统，您将失去保修，并且很难恢复到原始系统。

### **我需要自己选择电源插头吗？**

M4 Square 包含一个宽范围输入的电源适配器，并配备了美规（US）、澳规（AU）、英规（UK）和欧规（EU）插头。

### **需要外置天线吗？**

WiFi 天线内置于设备中。SenseCAP M4 Square-Fluxnode 不需要外置天线。

### **我需要质押 1000 Flux 吗？**

**是的**，1000 Flux 不包含在硬件中，因此您需要自行质押。

### **我的 M1 可以变成 FluxNode 吗？可以将 8GB 的树莓派转换为 FluxNode 吗？**

目前，Raspi 8GB 已被 Flux 支持，但它需要外置 SSD，并且稳定性无法保证，这可能会影响设备的稳定运行。