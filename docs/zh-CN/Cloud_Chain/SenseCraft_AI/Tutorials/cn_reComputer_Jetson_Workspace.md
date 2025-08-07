---
sidebar_position: 13
description: SenseCraft AI 平台上的 Nvidia Jetson 工作区
title: reComputer Jetson 工作区
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/sensecraft-ai/tutorials/nvidia-jetson-workspace
aliases:
  - /nvidia_jetson_workspace
last_update:
  date: 08/22/2024
  author: Frank
---

## 入门指南

在将 Jetson 设备添加到工作区之前，请先将 SenseCraft AI 应用安装到 Jetson 上。

SenseCraft AI-Jetson 是一个为 NVIDIA Jetson 边缘 AI 设备设计的开发工具包和平台。只需运行“快速启动脚本”，即可获得一个交互式用户界面，用于查看带有预加载视频和预加载 AI 模型的示例应用程序。如果您想添加自己的 USB 摄像头或 IP 摄像头，只需点击几下即可完成！

**硬件要求**
- NVIDIA Jetson 设备
- 通过以太网/无线网络的互联网连接
- 显示器

**软件要求**
- JetPack 5.1.2 (L4T 35.4.1)
- JetPack 5.1.1 (L4T 35.3.1)
- JetPack 5.1 (L4T 35.2.1)

**快速启动**<br />
1. 将 Jetson 连接到显示器并启动<br />
2. 将鼠标和键盘插入设备，并在终端中输入以下命令以运行应用程序

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

3. 在应用程序安装过程中，您需要设置以下可选配置，请根据需要进行设置：

- **[可选] 是否启用 jetson_clocks 脚本以通过将 CPU、GPU 和 EMC 时钟设置为最大频率来最大化 Jetson 性能？[y/n]（默认：y）：y**<br />
提供 jetson_clocks 脚本，通过将 CPU、GPU 和 EMC 时钟设置为静态最大频率来最大化 Jetson 性能。

- **[可选] 通过卸载一些不必要的软件包（如 libreoffice）来节省空间，是否更改交换内存的大小？(/swapfile) [y/n]（默认：n）：n**<br />
在内存不足的情况下（尤其是 Jetson Nano），建议启用交换内存以确保程序正常运行。

- **[可选] 是否要创建或更改交换内存的大小？(/swapfile)**<br />
为了从 Nano 中获得更好的性能，请启用交换内存。

- **[可选] 是否使用外部存储来存储 Docker 数据目录？（用于 Docker 镜像和卷）**<br />

- **（如果根分区小于 32 GB，建议启用）。[y/n]（默认：n）：n**<br />

Edge AI 程序运行至少需要 32G 的存储空间，如果不足，可以选择将 Docker 数据卷挂载到外部磁盘。

4. 现在您可以体验 SenseCraft AI-Jetson

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

### 添加设备

1. 在设备工作区页面点击“添加设备”按钮
2. 输入设备自定义名称并从设备获取绑定代码。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image28.png)

3. 返回设备的 SenseCraft AI 应用程序。点击“绑定到 SenseCraft AI 平台”，然后应用程序将显示绑定代码和临时名称。

- 绑定代码：在 SenseCraft AI-Model Zoo 上输入正确且有效的绑定代码以完成设备绑定。
- 临时名称：如果绑定代码重复，则需要输入正确的临时名称。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image29.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image30.png)

4. 输入正确且有效的绑定代码并点击“确认”按钮

5. 绑定成功，现在您可以管理设备

:::note

每个账户只能添加 5 个免费设备

:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image31.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image32.png)

### 设备信息

设备信息分为三部分：常规信息、视频流信息和 AI 模型。

### 常规信息

设备信息分为三部分：常规信息、视频流信息和 AI 模型。请查看下表了解详细信息。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image33.png)

| **字段** | **内容** |
| --- | --- |
| **设备名称** | 设备自定义名称，用户可以更改名称 |
| **设备 SN** | 设备的唯一生产序列号 |
| **设备 EUI** | 设备 EUI |
| **在线状态** | 在线：设备在线<br />离线：设备离线，用户无法操作离线设备 |
| **配备模块** | 设备的模块 |
| **CPU 使用率** | 设备 CPU 使用率 |
| **内存** | 设备 RAM 使用情况 |
| **存储** | 设备磁盘使用情况 |
| **IP 地址** | 设备的网络 IP 地址 |
| **MAC 地址** | 设备的 MAC 地址 |
| **SenseCraft AI 版本** | 设备上安装的 SenseCraft AI 应用程序版本 |
| **采集时间** | 上次从设备采集信息的时间 |

### 删除设备

如果您已完成 AI 模型的部署且不需要远程管理设备，可以将设备从平台中移除。设备可以在边缘独立进行本地推理、流管理和 AI 模型管理。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image34.png)

### 视频流管理

视频流可以远程查看实时推理结果并管理设备的视频流。支持添加流、编辑流、查看流和删除流。

#### 实时推理

如果设备已添加视频流，用户可以在平台上查看所有流的实时推理结果。支持实时监控推理结果和异常情况。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image35.png)

#### 添加流

点击“添加流”并输入有效的流信息，然后点击“确认”按钮将新流发送到设备。设备添加新流需要时间，平台信息稍后会更新。请查看下表了解详细信息。

:::note

设备必须在线才能添加新流

:::

| **字段** | **内容** |
| --- | --- |
| **流名称** | 1. 此流的自定义名称<br />2. 不能为空 |
| **视频类型** | 1. IP 摄像头：接入 IP 摄像头，需要输入有效的 rtsp URL<br />2. USB 摄像头：将 USB 摄像头连接到设备，自动识别 USB，然后在视频路径中选择正确的 USB 摄像头。 |
| **视频路径** | 视频路径，格式由“视频类型”决定，如果错误，将使用默认视频。 |
| **设备 AI 模型** | 1. 选择已下载到设备上的 AI 模型<br />2. 如果设备上没有 AI 模型，请转到 AI 模型页面将模型下载到设备上。 |
| **置信度阈值** | 1. 检测对象的置信度阈值<br />2. 格式：浮点数 [0, 1] |
| **IoU 阈值** | 1. IoU 用于评估预测边界框与真实边界框的准确性<br />2. 格式：浮点数 [0, 1] |
| **FPS** | 1. 流的每秒帧数<br />2. 格式：整数 [1,60] |
| **质量** | 1. 输出流质量，默认：50<br />2. 格式：整数 [0,100] |
| **最大检测数** | 1. 每张图像的最大检测数，默认：300<br />2. 格式：整数 [0,1000] |
| **显示帧率** | 1. 是否显示流的帧率<br />2. 格式：布尔值 [True,False]<br />● True：显示 FPS<br />● False：不显示 FPS |
| **显示时钟** | 1. 是否显示时间<br />2. 格式：布尔值 [True,False]<br />● True：显示时间<br />● False：不显示时间 |

#### 流详情

点击流的“眼睛”图标，您将查看流的详细信息。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image36.png)

#### 编辑流

点击流的“编辑”图标，用户可以编辑流的所有配置，并点击“确认”按钮将修改后的流信息发送到设备。设备更新流配置需要一些时间，平台信息会稍后更新。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image37.png)

#### 删除流

点击流的“删除”图标以删除流。设备删除流需要一些时间，平台信息会稍后更新。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image38.png)

### 设备 AI 模型

管理设备上已下载的所有 AI 模型，并支持添加模型、查看模型详情和删除模型。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/image39.png)

## **技术支持**

**需要帮助解决您的 SenseCAP Indicator 问题？我们随时为您提供支持！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>