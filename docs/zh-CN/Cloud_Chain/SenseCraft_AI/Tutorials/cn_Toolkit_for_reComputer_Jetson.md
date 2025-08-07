---
sidebar_position: 12
description: SenseCraft AI Jetson
title: reComputer Jetson 工具包
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /cn/sensecraft-ai/tutorials/sensecraft-ai-jetson
aliases:
  - /sensecraft_ai_jetson
last_update:
  date: 08/16/2024
  author: Frank
---

SenseCraft AI-Jetson 是一个为 NVIDIA Jetson 边缘 AI 设备设计的开发工具包和平台。只需运行“快速启动脚本”，即可呈现一个交互式用户界面，展示一个带有预加载视频和预加载 AI 模型的示例应用程序。如果您想添加自己的 USB 摄像头或 IP 摄像头，只需几次点击即可完成！

除了我们提供的各种内置 AI 模型，您还可以访问 SenseCraft AI 平台上的大量公共模型，下载并部署适用于特定场景的 AI 模型，根据您的需求创建个性化的 AI 解决方案。SenseCraft AI 是您视觉 AI 的智能决策伙伴，为您提供简单、灵活且高效的推理和解决方案构建能力。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/video.gif)

## 安装 SenseCraft AI-Jetson

**硬件要求**
- NVIDIA Jetson 设备
- 通过以太网/无线网络连接互联网
- 显示器

**软件要求**
- JetPack 5.1.2 (L4T 35.4.1)
- JetPack 5.1.1 (L4T 35.3.1)
- JetPack 5.1 (L4T 35.2.1)

**快速开始**<br />
1. 将 Jetson 连接到显示器并打开电源<br />
2. 将鼠标和键盘插入设备，并在终端中输入以下命令以运行应用程序

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

3. 在应用程序安装过程中，您需要设置以下可选配置，请根据您的需求进行设置：

- **[可选] 是否启用 jetson_clocks 脚本以通过将 CPU、GPU 和 EMC 时钟设置为最大频率来最大化 Jetson 性能？[y/n]（默认：y）：y**<br />
提供 jetson_clocks 脚本，通过将 CPU、GPU 和 EMC 时钟设置为静态最大频率来最大化 Jetson 性能。

- **[可选] 通过卸载一些不必要的软件包（如 libreoffice）来节省空间，是否更改交换内存的大小？（/swapfile）[y/n]（默认：n）：n**<br />
在内存不足的情况下（尤其是 Jetson Nano），建议启用交换内存以确保程序正常运行。

- **[可选] 您是否希望创建或更改交换内存的大小？（/swapfile）？**<br />
为了从 Nano 中获得更好的性能，请启用交换内存。

- **[可选] 是否使用外部存储设备存储 Docker 数据目录？（用于 Docker 镜像和卷）？**<br />

- **（如果根分区小于 32 GB，推荐启用）。[y/n]（默认：n）：n**<br />

Edge AI 程序运行至少需要 32G 的存储空间，如果不足，您可以选择将 Docker 数据卷挂载到外部磁盘。

4. 现在您可以体验 SenseCraft AI-Jetson

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/35.png)

### **部署新模型**
1. 访问“AI 模型”页面并选择您需要的 AI 模型<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/36.png)

2. 点击“部署模型”按钮

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/37.png)

3. 查看说明文档，确保设备已安装 SenseCraft AI-Jetson 且 AI 模型适配设备类型。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/38.png)

4. 选择一个在线设备

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/39.png)

5. AI 模型需要应用视频流，如果没有流，请先添加一个有效的视频流。模型库会将流信息直接发送到设备。

:::note 
更多流信息描述请查看流管理
:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/40.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/41.png)

6. 将 AI 模型和流信息发送到设备。AI 模型部署需要几分钟，因此您可以离开当前页面，几分钟后前往设备查看已部署的 AI 模型。

### **流管理**

SenseCraft AI-Jetson 支持添加多个视频流，并支持根据需要添加 USB 摄像头和 IP 摄像头。

可添加的视频流数量取决于设备的 CPU 和内存资源。请注意设备的资源使用情况。

#### **添加流**

1. 访问流页面并点击 + 图标<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/42.png)

2. 设置新的视频流有效信息，详情请查看下表<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/43.png)

| **字段** | **内容** |
| --- | --- |
| **流名称** | 1 为此流自定义名称。<br />2 不能为空 |
| **视频类型** | 1 IP 摄像头：接入 IP 摄像头，需要输入有效的 rtsp URL<br />2 USB 摄像头：将 USB 摄像头连接到设备，自动识别 USB，然后在视频路径中选择正确的 USB 摄像头。 |
| **视频路径** | 视频路径，格式由“视频类型”决定，如果错误，将使用默认视频。 |
| **设备 AI 模型** | 1 选择设备上已下载的 AI 模型<br />2 如果设备上没有 AI 模型，请转到 AI 模型页面将模型下载到设备。 |
| **置信度阈值** | 1 检测对象的置信度阈值。<br />2 格式：float [0, 1] |
| **IoU 阈值** | 1 IoU 用于评估预测边界框与真实边界框的准确性<br />2 格式：float [0, 1] |
| **FPS** | 1 流的每秒帧数<br />2 格式：INT [1,60] |
| **质量** | 1 输出流质量。默认值：50<br />2 格式：int [0,100] |
| **最大检测数** | 1 每张图片的最大检测数。默认值：300<br />2 格式：int [0,1000] |
| **显示帧率** | 1 是否显示流的帧率<br />2 格式：Bool [True,False]<br />● True：显示 FPS<br />● False：不显示 FPS |
| **显示时钟** | 1 是否显示时间<br />2 格式：Bool [True,False]<br />● True：显示时间<br />● False：不显示时间 |

3. 点击“保存”按钮，返回主页检查新的流和 AI 检测结果。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/44.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/45.png)


#### **删除流**
进入流的详情页面，点击“删除”图标以删除流<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/46.png)

### **AI 模型管理**

管理设备上已下载的所有 AI 模型。

- AI 模型会显示使用该模型的流的名称。<br />
- 未在流中使用的 AI 模型可以被删除。<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/47.png)

### **设置**

#### **关于**

设备信息，更多信息请参考下表<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/48.png)

| **字段** | **内容** |
| --- | --- |
| **产品** | 设备的模块 |
| **IP** | 设备的网络 IP 地址 |
| **序列号** | 设备的唯一生产序列号 |
| **MAC 地址** | 网络 MAC 地址 |
| **CPU 使用率** | 设备的 CPU 使用率 |
| **内存** | 设备的内存 |
| **交换分区** | 设备的交换分区 |
| **磁盘使用率** | 设备的磁盘使用率 |
| **Cuda 版本** | 设备上安装的 Cuda 版本 |
| **Jetpack 版本** | 设备上安装的 Jetpack 版本 |

#### **绑定到 SenseCraft AI 平台**
SenseCraft AI -Jetson 专为边缘 AI 设计。AI 推理和视频流处理在设备上本地完成，仅当需要下载更多 AI 模型时，才需要将设备绑定到 [SenseCraft AI-Model Zoo](https://sensecraft.seeed.cc/ai/#/home)，下载完成后可以从平台移除设备。

1. 访问 [SenseCraft AI-Model Zoo](https://sensecraft.seeed.cc/ai/#/home)<br />
2. 使用有效的电子邮件地址注册。SenseCraft-AI Model Zoo 账户与 SenseCAP 云账户相同，如果您已有 SenseCAP 云账户，可以直接登录。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/49.png)

3. 访问“设备工作区”，点击“添加设备”按钮。<br />
4. 输入设备自定义名称，并从设备获取绑定码。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/50.png)

5. 返回设备的 SenseCraft AI 应用程序。点击“绑定到 SenseCraft AI 平台”，然后应用程序将显示绑定码和临时名称。

- 绑定码：在 [SenseCraft AI-Model Zoo](https://sensecraft.seeed.cc/ai/#/home) 上输入正确且有效的绑定码以完成设备绑定。<br />
- 临时名称：如果绑定码重复，则需要输入正确的临时名称。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/51.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/52.png)

6. 输入正确且有效的绑定码并点击“确认”按钮<br />
7. 绑定成功，现在您可以从模型库中添加新的 AI 模型。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/53.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/54.png)

#### **解绑**
如果您不需要在 AI 平台上远程管理设备，可以从 AI 平台账户中删除设备。您可以从设备或平台上解绑。<br />

- 从 AI 模型库解绑设备，点击“删除”<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/59.png)

- 通过禁用“绑定到 SenseCraft AI 平台”来解绑设备<br />
![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/55.png)


### **应用更新**

SenseCraft AI 应用更新分为自动更新和手动更新，您可以根据需要进行设置。

**自动更新**：每 5 分钟检查一次更新，当检测到新版本时，信息会自动更新，无需手动操作。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/56.png)

**手动更新**：手动检查更新，当检测到新版本时，点击更新按钮进行更新。

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/57.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/58.png)

## **技术支持**

**需要帮助解决您的 SenseCAP Indicator 问题吗？我们随时为您提供支持！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>