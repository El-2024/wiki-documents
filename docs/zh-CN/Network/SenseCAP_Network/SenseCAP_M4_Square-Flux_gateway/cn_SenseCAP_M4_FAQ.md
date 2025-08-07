---
description: SenseCAP M4 常见问题解答
title: SenseCAP M4 常见问题解答
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_FAQ
last_update:
  date: 02/14/2023
  author: Matthew
---

# 常见问题解答

### **节点的平均 Flux 链同步时间是多少？**

下载并加载一个 20GB 的快照文件，大约需要一个小时的链同步时间以赶上最新区块。正确的同步时间取决于设备的网络，请确保设备拥有良好的网络连接。

### **SenseCAP M4 Square 是否支持 NIMBUS 和 STRATUS？**

**不支持**，SenseCAP M4 Square 仅支持 CUMULUS。如果需要 NIMBUS，请点击 [这里](https://www.seeedstudio.com/flux?utm_source=discord&utm_campaign=sensecapm4)。

### **如何检查我的端口是否打开？**

SenseCAP M4 Square 打开了 Flux 所需的所有端口。SenseCAP Hotspot App 提供 UPNP 检测功能。如果 UPNP 状态为 ON，则端口已打开。如果状态为 OFF，请检查路由器的 UPNP。更多详情请访问 [Flux 节点网络设置](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)。

### **M4 是否需要静态 IP？是否可以在同一个外部 IP 下运行多个 SenseCAP M4 Square？**

需要一个外部 IP。

每个 IP 最多可运行 8 台设备，并确保您的路由器支持 UPnP 或端口转发。

### **如何测试网络带宽以满足要求？**

请访问 https://www.speedtest.net。

### **Flux 和 Flux 代币有什么区别？**

Flux 代币即为 Flux。Flux 代币是支付在不同区块链上的并行资产，例如 ETH Flux、BSC Flux 等。它们可以在 Zelcore 的 Fusion 应用中进行申领。点击右上角的“三点菜单”，选择“Parallel Mining Claim”。只有当您的 Flux-Token 数量高于申领所需的费用时，您才会看到可申领的金额。

### **如果我是专业用户，可以擦除原系统并安装其他系统吗？**

这不是推荐的操作。然而，SenseCAP M4 是基于 x86 的设备，您可以重新安装任何您想要的系统，但在此之前，请确保您知道自己在做什么。

请注意，如果擦除标准系统，您将失去保修，并且很难恢复到原始系统。

### **我需要自己选择电源插头吗？**

M4 Square 包括一个宽范围输入电源适配器，并配备了美标、澳标、英标和欧标插头。

### **需要外部天线吗？**

设备内置了 WiFi 天线。SenseCAP M4 Square-Fluxnode 不需要外部天线。

### **我需要质押 1000 Flux 吗？**

**是的**，硬件中不包含 1000 Flux，因此您需要自行质押。

### **我的 M1 可以变成 FluxNode 吗？可以将 8GB 的树莓派转换为 FluxNode 吗？**

目前，Raspi 8GB 是被 Flux 支持的，但它需要外部 SSD，并且稳定性无法保证，这可能会影响设备的稳定运行。