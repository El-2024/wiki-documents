---
description: SenseCAP M1 常见问题解答
title: SenseCAP M1 常见问题解答
keywords:
- SenseCAP 网络
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_FAQ
last_update:
  date: 02/14/2023
  author: Matthew
---

# 如何找到 ETH 或 Wi-Fi MAC ID？

MAC ID 位于热点设备底部标签上，如下所示。您可以看到 ETH 和 Wi-Fi MAC ID。

![SenseCAP M1 Mac-ID](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-ids.png)

---

# 如何从设备中找到我的 SN（序列号）？

序列号位于热点设备底部标签上，如下所示。

![SenseCAP M1 Serial Number](https://www.sensecapmx.com/wp-content/uploads/2022/07/sn.webp)

---

# 2G / 4G / 8G RAM 版本之间有什么区别？

2G / 4G / 8G 代表 SenseCAP M1 中 Raspberry Pi 4 的 RAM（随机存取存储器）差异。对于热点功能，不同 RAM 版本之间没有区别。此外，在 Seeed 在线商店购买 SenseCAP M1 时，我们无法选择 RAM 版本，请注意所有分发将根据库存随机进行。

---

# 如何知道我拥有哪个 RAM 版本？

您可以通过型号名称来判断。M1-X，X 代表 RAM。例如，M1-2915 代表 2GB RAM，而 M1-4915 代表 4GB RAM。

---

# 为什么我的 SenseCAP M1 无法见证其他 Helium 热点？

导致 Helium 热点 RF 信号弱和传输距离短的一些可能原因包括：

- 障碍物，包括建筑物、山脉和森林等密集环境
- 城市周围可能存在的电磁干扰、视线干扰、菲涅耳区干扰或 RF 干扰
- 天气条件
- 系统运行裕度、阴影效应或链路衰减。

---

# 为什么我的 SenseCAP M1 收益/奖励不如预期？

收益和奖励机制非常复杂。只要您的热点配置正确、位置合理、没有中继状态且互联网连接稳定，那么应该没有问题。  
如果您对机制感到困惑，建议您在 Helium 频道讨论以寻求进一步解释。**[Helium 文档](https://docs.helium.com/)** 也可以帮助您了解更多信息。

---

# 如何改善 SenseCAP M1 的 RF 信号？

将设备设置并放置在宽阔且无障碍的环境中（例如，靠近窗户或将天线放置在室外，例如屋顶）。

---

# SenseCAP M1 大约使用多少伏电力？

大约 5W，与普通灯泡的电力消耗相当。

---

# 网关之间推荐的距离是多少？

热点之间不应部署得太近。一个好的经验法则是热点之间至少保持 300 至 500 米的距离；不过这可能因环境而异（在密集的城市环境中可以更近，而在农村环境中则需要更远）。

---

# 设置 SenseCAP M1 是否有额外费用？

设备包含用户设置 SenseCAP M1 的 \$40 激活费，以及在 Helium 应用中设置 SenseCAP M1 位置的 \$10 费用。

如果您在首次设置后重新声明到另一个位置，则需要支付额外费用，大约为 \$10。有关费用的详细信息，请参阅 Helium 交易费用页面。

---

# SenseCAP M1 是否支持连接到 Helium 以外的第三方服务器？

不，SenseCAP M1 LoRaWAN 网关仅兼容 Helium 网络服务器。

---

# SenseCAP M1 是否支持 PoE？

不支持。设备通过以太网端口旁边的 Type-C 接口使用 5V-3A 电源适配器供电。如果需要在 SenseCAP M1 上支持 PoE，则需要使用 PoE 注入器和分离器。

---

# 作为室内网关，它可以用于室外吗？

SenseCAP M1 是一款室内网关，因此它并未设计用于承受恶劣的室外环境。如果没有额外的保护措施，不应将其放置在室外环境中。

---

# SenseCAP LoRaWAN 传感器是否与 SenseCAP M1 网关兼容？

是的。只要终端节点（例如 SenseCAP LoRaWAN 传感器系列产品）与 Helium 网络兼容并已在网络上注册，它们就可以与 SenseCAP M1 网关一起工作。

---

# SenseCAP M1 是全热点还是轻热点？

SenseCAP M1 LoRaWAN 室内网关是一个全热点，支持 POC 和数据传输。

---

# 是否会有用于室外的热点？

目前，SenseCAP M1 仅适用于室内使用，但我们会考虑这一需求。

---

# 是否也会有轻热点？

是的，SenseCAP M2 Data Only 是一个轻热点。

---

# 是否会支持 AS923、AU915、IN865 和其他频段？

目前，仅支持 US915（通过 FCC 认证）和 EU868（通过 CE 认证）。其他频段尚未支持。我们已经注意到对不同频段的需求。硬件设备的规格范围为 902MHz ~ 928MHz / 863MHz ~ 870MHz，因此可以配置为该范围内的不同频段。然而，在配置后，产品必须通过特定认证才能进入不同市场。

目前，我们的团队专注于 US915 和 EU868 的供应链和制造。

---

# 所有 SenseCAP LoRaWAN 网关都是 Helium 热点吗？

当您搜索 SenseCAP 时，可能会发现其他也以 SenseCAP 命名的网关。请注意，并非所有 SenseCAP 品牌的网关都是 Helium 热点。目前，只有 SenseCAP M1 LoRaWAN 室内网关支持 Helium 网络。

---

# 如果我在欧洲购买热点并带到印度，它会自动切换到 865 MHz 吗？

是的，它会自动切换。但我们只有 CE 和 FCC 认证，没有印度所需的 BIS 认证。

---

# SenseCAP M1 是否也列在 Helium 应用中？

是的，SenseCAP M1 已经添加到 Helium 应用中！

---

# SenseCAP M1 使用哪种类型的天线连接器？

SenseCAP M1 配备 RP-SMA 母头连接器，天线为 RP-SMA 公头连接器。我们的库存玻璃纤维天线均配备 N 型公头连接器，并提供带有 N 型母头和 RP-SMA 公头连接器的 LMR200 电缆。

![SenseCAP M1 天线连接](https://www.sensecapmx.com/wp-content/uploads/2022/06/connectors-1.png)

---

# 设备运行的电压/电流是多少？

电压为 5V DC。

---

# 设备 PCB 的尺寸/测量值是多少？

设备尺寸为 154×100×44 mm，重量为 370g。

---

# 有些人不喜欢他们所在区域的5GHz频段，是否可以关闭热点设备上的WiFi？

此设备是一个WiFi发射器。如果它未连接到接入点（AP），它将自动停止发射电磁波。

---

# 为什么按下按钮后我的 SenseCAP M1 没有进入慢闪模式？

请持续按住按钮6-10秒，不要松开。有时可能需要用力按下设备背面的按钮。如果需要额外支持，请点击此处访问我们的 Discord 社区。  
请注意，如果 SenseCAP M1 正在更新固件，按下按钮可能不会使蓝色LED进入慢闪模式，请稍等10-15分钟后再试。

---

# SenseCAP M1 何时退出慢闪模式？

慢闪模式大约持续10分钟，然后会恢复为常亮模式或快闪模式。

如果在配置过程中 SenseCAP M1 退出了慢闪模式，请按住按钮5-10秒重新进入慢闪模式并重新开始配置。

---

# 为什么蓝色LED总是处于快闪模式？

这表示 SenseCAP M1 未连接到互联网或正在尝试连接到 Helium P2P 网络。在每次启动后，SenseCAP M1 可能需要5-20分钟连接到 Helium P2P 网络，这取决于您的网络质量。

如果 SenseCAP M1 启动超过20分钟，请检查您的网络状态，确保以太网线或WiFi连接正常。

使用以太网线时，请将以太网线牢牢插入端口，直到听到“咔嗒”声，以确保连接牢固且不会松动。

---

# 检查热点固件版本的步骤：

1. 长按热点蓝牙按钮6-10秒，蓝色LED将慢闪，然后配对您的热点。
2. 运行诊断程序并找到热点固件版本。或者，您可以在注册后使用 SenseCAP Dashboard 检查固件版本。

![SenseCAP M1 固件版本](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-1.png)

![SenseCAP M1 固件版本步骤2](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-1-1.png)

![SenseCAP M1 固件版本步骤3](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-2.png)

---

# SenseCAP M1 在没有天线时的发射功率是多少？

<table style={{borderCollapse: 'collapse', width: '100%', height: 125}} border={1}><tbody><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>频率计划</strong></td><td style={{width: '33.3333%', height: 21}}>EU868</td><td style={{width: '33.3333%', height: 21}}>US915</td></tr><tr style={{height: 20}}><td style={{width: '33.3333%', height: 20}}><strong>认证</strong></td><td style={{width: '33.3333%', height: 20}}>CE</td><td style={{width: '33.3333%', height: 20}}>FCC</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>法规最大发射功率</strong></td><td style={{width: '33.3333%', height: 21}}>14 dBm</td><td style={{width: '33.3333%', height: 21}}>30 dBm</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>使用原装天线的发射功率</strong></td><td style={{width: '33.3333%', height: 21}}>13.487 dBm</td><td style={{width: '33.3333%', height: 21}}>26.7 dBm</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>没有天线时的发射功率</strong></td><td style={{width: '33.3333%', height: 21}}>10.687 dBm</td><td style={{width: '33.3333%', height: 21}}>25 dBm</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>原装天线增益</strong></td><td style={{width: '33.3333%', height: 21}}>2.8 dBi</td><td style={{width: '33.3333%', height: 21}}>2.6 dBi</td></tr></tbody></table>

---

**风扇自动控制规则是什么？**
---------------------------------------

![SenseCAP M1 风扇自动控制逻辑](https://www.sensecapmx.com/wp-content/uploads/2022/07/fan-control-logic-1.png)

---

**如果我的SD卡使用率超过85%该怎么办？**
------------------------------------------------------

通常情况下，您无需担心SD卡的使用率，因为系统会自动管理。如果您发现SD卡无法从满负荷状态恢复，您可以重启设备使其恢复正常。

如果问题仍未解决，或者技术支持建议您重置区块，您可以点击此处了解如何“重置区块”。