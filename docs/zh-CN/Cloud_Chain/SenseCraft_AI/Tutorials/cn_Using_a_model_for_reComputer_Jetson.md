---
sidebar_position: 4
description: 在 Sensecraft AI 平台上将模型部署到 Jetson
title: 在 reComputer Jetson 上使用模型
keywords:
- Cloud and Chain
- SenseCraft
- SenseCraft AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /cn/sensecraft-ai/tutorials/sensecraft-deploy-model-to-jetson
aliases:
  - /cn/sensecraft_deploy_model_to_jetson
last_update:
  date: 08/22/2024
  author: Frank
---

## 入门指南

SenseCraft AI 平台提供了一种非常简单的方法，将 AI 模型部署到边缘设备，例如 Jetson Orin、XIAO ESP32 等。现在就享受无缝的边缘 AI 模型部署吧！<br />

1. 为 Jetson 设备选择或上传一个 AI 模型<br />
2. 访问 AI 模型详情页面并点击“Deploy Model”按钮<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/10.png)

### **步骤 1 安装 SenseCraft AI-Jetson**

1. 如果您的 Jetson 设备已经安装了 SenseCraft AI，请直接跳到步骤 2

2. 将 Jetson 连接到显示器并打开电源

3. 将鼠标和键盘插入设备，并在终端中输入以下命令以运行应用程序

```
bash <(wget -qO- https://sensecraft-statics.seeed.cc/edge-ai/init-script/edge-ai-setup.sh)
```

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/11.png)

4. SenseCraft AI-Jetson 安装完成，请继续步骤 2<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/12.png)

### **步骤 2 选择设备**
1. 如果您已经将设备添加到平台，可以直接选择设备并点击下一步进入步骤 3<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/13.png)

2. 如果需要添加新设备，请点击“Add Device”按钮，添加设备窗口将会出现。<br />
3. 输入设备名称<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/14.png)

4. 在设备上访问 SenseCraft AI-Jetson 应用程序并进入设置页面<br />
5. 启用“Bind to SenseCraft AI platform”设置并获取绑定代码<br />
6. 返回 SenseCraft AI 平台并输入有效的绑定代码以完成添加<br />

:::note
如果绑定代码重复，您需要输入临时名称。
:::

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/15.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/16.png)

7. 现在选择设备并点击下一步进入步骤 3

### **步骤 3 选择视频流**
1. 如果您希望将 AI 模型应用于设备的现有视频流，请直接选择视频流并点击“Send”按钮，将模型发送到设备。<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/17.png)

2. 如果您希望将 AI 模型应用于新的视频流，请点击“Add Stream”按钮并输入新视频流的信息<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/18.png)

视频流信息详情请参考以下表格：

| **字段** | **内容** |
| --- | --- |
| **Stream Name** | 1. 此视频流的自定义名称。<br />2. 不能为空 |
| **Video Type** | 1. IP 摄像头：访问 IP 摄像头，需要输入有效的 RTSP URL<br />2. USB 摄像头：将 USB 摄像头连接到设备，自动识别 USB，然后在视频路径中选择正确的 USB 摄像头。<br />3. 视频：设备内置视频，输入视频路径 |
| **Video Path** | 视频路径，格式由“Video Type”决定，如果错误，将使用默认视频。 |
| **Confidence Threshold** | 1. 检测对象的置信度阈值。<br />2. 格式：浮点数 [0, 1] |
| **IoU Threshold** | 1. IoU 用于评估预测边界框与真实边界框的准确性。<br />2. 格式：浮点数 [0, 1] |
| **FPS** | 1. 视频流的每秒帧数<br />2. 格式：整数 [1,60] |
| **Quality** | 1. 输出视频流质量。默认值：50<br />2. 格式：整数 [0,100] |
| **Maximum Detections** | 1. 每张图像的最大检测数量。默认值：300<br />2. 格式：整数 [0,1000] |
| **Display Frame Rate** | 1. 是否显示视频流的帧率<br />2. 格式：布尔值 [True,False]<br />● True: 显示 FPS<br />● False: 不显示 FPS |
| **Display Clock** | 1. 是否显示时间<br />2. 格式：布尔值 [True,False]<br />● True: 显示时间<br />● False: 不显示时间 |

3. 点击“Send”按钮将模型发送到设备。模型部署大约需要 5 分钟，您可以随时关闭预览页面，部署完成后在设备工作区中检查。

4. 在设备或 AI 平台的设备工作区中检查新模型<br />

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/19.png)

![](https://files.seeedstudio.com/wiki/SenseCraft_AI/img/20.png)

## **技术支持**

**需要帮助解决 SenseCAP Indicator 的问题？我们随时为您提供支持！**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>