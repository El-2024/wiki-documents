---
description: 本文介绍了如何在 NVIDIA Jetson 设备上使用 Gapi，这是一种可嵌入的 API 网关，旨在通过低代码工作流引擎和微服务框架快速将 Jetson AI Lab 的成果转化为现实应用。
title: Gapi 入门指南
tags:
  - AI 模型优化
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/gapi_getting_started-with_jetson
last_update:
  date: 09/20/2024
  author: Youjiang
---

# 在 NVIDIA® Jetson 设备上使用 Gapi 入门

[Gapi](https://genainerds.com/#/Gapi) 是一种可嵌入的 API 网关，它在 AI 微服务与用户日常使用的系统之间创建流式集成。

该项目的目标是加速将 Jetson AI Lab 的成果从试验和演示转化为现实环境的速度。“设备上的”生成式 AI 并不意味着它必须孤立存在！

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/GapiGIF.gif"/></div>

- 具有低代码 UI 的工作流引擎，提供数十种开放集成和可定制的移动、网页和桌面客户端。
- 微服务框架，用于封装 Jetson 容器（如 Ollama、Whisper、Piper TTS 等，更多容器正在添加中）。或者封装您自己的模型/代码并将其集成到工作流中。
- 实时、混合的二进制+JSON 消息传递，优化服务间调用并降低延迟。
- 快速向利益相关者展示生成式 AI 在实际环境中的价值。

## Gapi 服务器

可嵌入的 API 网关软件，在后台运行，并带有低代码工作流 UI 以供测试。服务器是一个消息中心和状态机，用于连接与微服务通信的工作流“节点”。可以将其视为应用程序的连接组织部分。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/GapiDiagram3.png"/></div>

:::note
微服务是一个进程，它运行一些包装的 Python 脚本，通过流式 API 将自定义代码/模型集成到工作流中。
:::

- Gapi 服务器可以运行在任何 Jetson Orin 或其他任何计算机上，因为微服务通过安全的 WebSocket 向外连接。它不使用任何 GPU 资源。此外，还有一个小型演示版本，可以跳过服务器安装（但您仍然需要运行自己的微服务）。
- [Gapi 项目页面](https://genainerds.com/#/Gapi)
- [Gapi Github](https://github.com/GenAI-Nerds/Gapi/)
- [Gapi 文档](https://genainerds.com/#/Docs)
- [Gapi 托管演示](https://genaigapi.com/)

## 要求
- 任意 NVIDIA Jetson Orin
- Docker
- 足够的存储空间：1.3GB

## 在 Jetson 上安装 Gapi

**按照以下步骤在 Jetson 上安装 Gapi：**
```bash
mkdir ~/gapiData && cd ~/gapiData
curl -L https://raw.githubusercontent.com/genai-nerds/Gapi/main/gapiConfigs.zip -o gapiConfigs.zip
unzip -q gapiConfigs.zip
docker run -d --name gapi --network host -v ~/gapiData:/opt/gapi/vdata genainerds/gapi:arm64 /bin/bash -c "cd /opt/gapi/bin && ./startGapi.sh"
echo "You may need to hit Enter now. Afterwards the Docker container 'gapi' s
```

**登录**
- 在浏览器中访问：http://[host-device-ip]:8090
- 用户名：root
- 密码：!gapi2024
- 请在设置中更改密码！文档中显示了如何添加 SSL 证书。

## 工作流

工作流以可视化的方式连接节点之间的执行和数据流。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/gapi-diagram-pic.png"/></div>

一次事务（或单次触发）具有“滚动输入”数据，它在节点之间的步骤中累积，每个节点与微服务和 API 交互。所有节点都可以使用熟悉的 JSON 和 JavaScript 概念进行变量操作和流程控制。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/switchproperties.png"/></div>

每个节点可以在事务中追加或引用滚动数据，同时在过程中做出决策。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/visualfeedback.png"/></div>

通过可视化反馈和调试，实时观察事务从客户端、Webhook 和微服务发布的消息开始的全过程。

## 微服务

微服务是一个运行包装 Python 脚本的进程，用于集成您的自定义代码/模型，使其能够集成到 Gapi 工作流中。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices2.png"/></div>

您可以在任何地方运行微服务，并通过流式、混合二进制+JSON 消息协议将其连接到 Gapi 服务器。

我们提供一些开箱即用的“社区微服务”，这些服务经过集成、测试并打包成 Docker 镜像。当您运行它们时，它们会自动集成，正确加载 NVIDIA 层，并提供对主机系统的日志记录。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices3.png"/></div>

更棒的是，您可以创建自己的微服务！只需实现一个 `on_message` Python 处理程序来处理请求并响应。其余的部分系统会为您处理。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices4.png"/></div>

可以将微服务视为一些代码或模型的简单包装器。它在工作流中与任何其他节点的工作方式相同。当轮到您的微服务节点时，系统会调用您的 `on_message` 函数。您的脚本会获取滚动事务数据以提供上下文，然后您可以将数据直接发布回流程中。

<div align="center"><img width ="800" src="https://genainerds.com/assets/img/MicroServices1.png"/></div>

## 运行社区微服务

**社区微服务的要求**
1. 任意 NVIDIA Jetson Orin
2. 足够的存储空间：
    - 自定义微服务仅需 4KB
    - 每个社区微服务大约需要 ~4GB 到 ~10GB

**步骤：**
1. 登录并进入微服务标签页
2. 按照页面蓝框中的说明下载您的自定义配置
3. 然后按照下方的说明安装您需要的微服务

## 恭喜！您现在可以查看工作流提示了

<div align="center"><img width ="1000" src="https://genainerds.com/assets/img/WorkflowsHome.png"/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>