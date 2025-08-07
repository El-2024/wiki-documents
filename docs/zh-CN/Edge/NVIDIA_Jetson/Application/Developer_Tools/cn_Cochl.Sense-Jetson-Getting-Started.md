---
description: 在 NVIDIA Jetson 设备上使用 Cochl.Sense 部署 AI 模型
title: Cochl.Sense 入门指南
tags:
  - AI 模型部署
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Cochl.Sense-Jetson-Getting-Started
last_update:
  date: 03/27/2023
  author: Lakshantha
---

# 在 NVIDIA® Jetson 设备上使用 Cochl.Sense 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Cochl.Sense/1.gif" style={{width:700, height:'auto'}}/></div>

在本教程中，您将使用 Cochl.Sense 在 NVIDIA Jetson 开发板上构建一个声音识别系统。[Cochl.Sense](https://www.cochl.ai) 是一个机器听觉开发平台，用于在 NVIDIA® Jetson 等边缘设备上部署深度学习应用程序。

机器听觉，也称为音频分析或声音识别，是一个快速发展的领域，它利用人工智能和机器学习来分析和理解音频数据。其目标是对音乐、动物、车辆、机器、城市噪音以及人类语音等声音进行自动化分析和理解。Cochl.Sense 内置了一个预训练的机器听觉模型，包含 37 种不同的目标声音，例如枪声、狗叫声、警笛声或婴儿哭声。

使用大量数据训练模型并从头开发机器听觉应用程序需要深厚的音频信号处理和深度学习知识。Cochl.Sense 使机器听觉变得对开发者和公司更加易用，您只需几行代码即可构建和实现性能强大的机器听觉应用程序。

## Cochl.Sense 主要特点

- IEEE 官方测量的 94% F-1 分数
- 经过实际环境测试和验证的预训练模型
- 支持多标签（同时检测多种声音）
- [支持 30+ 种目标声音](https://docs.cochl.ai/sense/tags)

## 获取试用许可证

由于 Cochl.Sense SDK 提供完整的产品功能，访问权限需要经过审核。要访问 SDK，您需要提交这个简短的 [Google 表单](https://forms.gle/Pa2iYWirLJVNS7Pp6)，并告诉我们您计划如何使用 SDK。Cochl 将通过电子邮件向您发送为期两周的试用许可证。

如果您想快速开始，您还可以免费使用具有相同功能的云 API，但它运行在云端。[点击这里](https://www.cochl.ai/product) 了解更多！

## 支持的硬件

- NVIDIA Jetson

    - [Seeed 提供的完整 NVIDIA SoM 系统](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)
    - NVIDIA 官方开发套件

- Raspberry Pi 3+ 或更高版本
- Google Coral Board

尽管 Cochl.Sense 支持多种硬件平台，但在本教程中，我们将仅关注在 NVIDIA Jetson 平台上使用 Cochl.Sense。

## 前置条件

在本教程中，您需要：

- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 或任何运行 JetPack 4.6 或更高版本的 NVIDIA Jetson 设备
- 支持 16 位深度音频、采样率为 22,050 Hz 的 USB 麦克风

## 将 JetPack 刷写到 Jetson

现在，您需要确保 Jetson 设备已刷写了包含 SDK 组件（如 CUDA、TensorRT、cuDNN 等）的 [JetPack](https://developer.nvidia.com/embedded/jetpack) 系统。您可以使用 NVIDIA SDK Manager 或命令行将 JetPack 刷写到设备上。

有关 Seeed 基于 Jetson 的设备刷写指南，请参考以下链接：
- [reComputer J1010 | J101](https://wiki.seeedstudio.com/cn/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/cn/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/cn/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/cn/reComputer_J4012_Flash_Jetpack)
- [A203 承载板](https://wiki.seeedstudio.com/cn/reComputer_A203_Flash_System)
- [A205 承载板](https://wiki.seeedstudio.com/cn/reComputer_A205_Flash_System)
- [Jetson Xavier AGX H01 套件](https://wiki.seeedstudio.com/cn/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 套件](https://wiki.seeedstudio.com/cn/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

## 入门

部署您的第一个机器听觉项目只需几分钟！在本教程结束时，您将能够从连接到 Jetson 设备的麦克风的实时音频流中检测声音。在本教程中，您将学习如何：

1. 使用 Cochl 仪表板创建项目
2. 下载 Cochl.Sense SDK 和示例应用程序的源代码
3. 验证您的示例应用程序
4. 运行您的声音检测应用程序

### 1. 使用 Cochl 仪表板创建项目

**步骤 1：** 从 Jetson 打开一个网页浏览器。为了创建一个新项目，请[注册](https://dashboard.cochl.ai)一个免费的 Cochl 账户并登录到您的仪表板账户。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/2.png" /></div>

**步骤 2：** 登录后，点击 **+ New project** 按钮。为您的项目命名，从产品类型中选择 **Edge SDK**，并**选择标签**以添加您想要检测的目标声音。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/3.png" /></div>

### 2. 下载 SDK 和示例应用程序的源代码

**步骤 1：** 点击您刚刚创建的项目，然后点击 **Cochl.Sense SDK**，访问外部链接以在 [Cochl Docs](https://docs.cochl.ai) 下载 SDK 文件。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/4.png" /></div>

**步骤 2：** 在 **Cochl Docs** 页面，点击左侧标签中的 **Resources**。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/5.png" /></div>

**步骤 3：** 向下滚动找到 C++ SDK 和 Python SDK 的**下载链接**。在本教程中，我们下载 `AArch64` SDK，因为我们使用的是 Jetson 平台。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/6.png" /></div>

**步骤 4：** 打开一个新标签，访问 [这个仓库](https://github.com/cochlearai/sense-sdk-cpp-tutorials) 获取 Sense-sdk C++ 教程，并下载源代码。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/7.png" /></div>

**步骤 5：** 解压您刚刚下载的文件。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/8.png" /></div>

**步骤 6：** 将 sense 文件夹移动到 `sense-sdk-cpp-tutorials-main` 文件夹中。以下是 `sense-sdk-cpp-tutorials-main` 文件夹的样子。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/9.png" /></div>

### 3. 验证您的示例应用程序

**步骤 1：** 进入 `example` 文件夹，找到 `sense-stream.cc` 文件，并用任意文本编辑器打开它。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/10.png" /></div>

**步骤 2：** 返回浏览器，打开项目页面，导航到 **Settings** 页面，并复制 `Project key`。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/11.png" /></div>

**步骤 3：** 打开您用文本编辑器打开的 `sense-stream.cc` 文件。将刚刚复制的 `Project Key` 粘贴到 `"Your project key"` 行以替换，并**保存**文件。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/12.png" /></div>

### 4. 运行您的声音检测应用程序

**步骤 1：** 从 Jetson 打开终端。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/13.png" /></div>

**步骤 2：** 运行以下命令安装依赖项：

```sh
sudo apt update
sudo apt install libpulse-dev pulseaudio pulseaudio-utilss
```

**步骤 3：** 进入源代码文件夹，并使用以下命令构建您的应用程序。

```sh
cd Downloads/sense-sdk-cpp-tutorials-main
g++ -fopenmp examples/sense-stream.cc -I./sense/include/ -lsense-core -L./sense/lib -o sense-stream -lm -std=c++11 -ldl -lstdc++ -lpulse -lpulse-simple -Wl,-rpath -Wl,./sense/lib
```

**步骤 4：** 运行应用程序，并尝试自己发出声音或从其他来源（如 YouTube）播放声音。您可以实时查看声音检测结果。在运行应用程序之前，请确保麦克风已连接到 Jetson 设备。

```sh
./sense-stream 
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/14.png" /></div>

:::note
请注意，当从扬声器播放时，枪声检测可能无法很好地检测到，因为模型经过训练以最佳方式处理真实枪声。
:::

**步骤 5：** 要停止应用程序，请按 **Ctrl+C**。

**步骤 6：** 如果您想从网页查看检测结果，请转到您的 **Dashboard**，点击 Analytics 标签，并在 **Filter** 按钮旁设置时间范围。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/15.png" /></div>

恭喜！您已成功部署了一个实时机器听觉应用程序。您可以进一步开发自定义的智慧城市或智慧家庭应用程序，或者将其与其他应用程序集成。如果您对其他机器听觉技术感兴趣，可以访问[此页面](https://labs.cochl.ai)，尝试其他 Cochl 解决方案，例如音乐识别、音乐内容分析或说话人验证。

## 资源

- [Cochl 文档](https://docs.cochl.ai)
- [Cochl 官网](https://www.cochl.ai)
- [基于网页的演示](https://labs.cochl.ai)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时拥有顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>