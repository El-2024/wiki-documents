---
description: 概述 JetPack 和 Jetson 之间的关系
title: JetPack 和 Jetson 关系概述
keywords:
- jetson
- jetpack
- L4T
image: https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.webp
slug: /cn/overview_of_the_relationship_between_jetpack_and_jetson
last_update:
  date: 06/05/2025
  author: Dayu
---

本 Wiki 简要介绍了 JetPack 的组成部分，帮助您快速了解 JetPack 和 Jetson 之间的关系，并解答一些常见问题。

## 1. JetPack 由什么组成？
JetPack 是一组软件包的集合，主要包括两个部分：

**① L4T (Linux for Tegra)。** L4T 是为 Jetson 硬件平台定制的中间件 Linux 发行版。它包括：

- Ubuntu 根文件系统

- Linux 内核（带有 NVIDIA 补丁）

- 驱动程序（GPU、ISP、CSI、I2C 等）

- 固件（引导加载程序、UEFI、U-Boot、initrd）

- BSP（板级支持包），包括设备树、引导配置和刷写工具

- 以及更多

**② JetPack SDK。** 这是上层的软件层，主要提供应用开发工具，包括：

- CUDA 工具包

- cuDNN（深度学习库）

- TensorRT（AI 模型推理引擎）

- 以及更多

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.png"/></div>

## 2. JetPack 和 Ubuntu 之间的关系是什么？

如上文所述，Ubuntu 是 JetPack 的一部分。每个 JetPack 版本都包含特定版本的 Ubuntu。我们的 JetPack 版本包括以下 Ubuntu 版本：

| JetPack 版本 | L4T 版本     | Ubuntu 版本     |
|------------------|--------------|-----------------|
| JetPack 6.2      | L4T 36.4.3   | Ubuntu 22.04    |
| JetPack 6.1      | L4T 36.4.0   | Ubuntu 22.04    |
| JetPack 6.0      | L4T 36.3.0   | Ubuntu 22.04    |
| JetPack 5.1.3    | L4T 35.5.0   | Ubuntu 20.04    |
| JetPack 5.1.1    | L4T 35.3.1   | Ubuntu 20.04    |
| JetPack 4.6.6    | L4T 32.7.6   | Ubuntu 18.04    |

## 3. 我们的产品支持哪些 JetPack 版本？
我们当前可用产品支持的 JetPack 版本可以在以下链接中找到：

[seeed's jetpack verson](https://docs.google.com/spreadsheets/d/1Sf7IdmVkKTAUH95XwxHK0ojV5aFq3ItKZ-iT28egzIk/edit?pli=1&gid=0#gid=0)

## 4. JetPack 6.2 和超级模式之间的关系

使用 JetPack 6.2 刷写的设备支持激活超级模式。然而，请注意超级模式目前仅适用于部分 Seeed 产品。

## 5. 如何查找每个 JetPack 版本的内容？

您可以参考 NVIDIA 发布的官方资源。详情请参阅以下链接：

[contents of each jetpack](https://developer.nvidia.com/embedded/jetpack-archive)

## 资源

- [Seeed 的 L4T 源代码](https://github.com/Seeed-Studio/Linux_for_Tegra)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>