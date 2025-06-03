---
description: 从 Watcher 和 Node-RED 发送消息到 Open Interpreter
title: Watcher 和 Node-RED 到 Open Interpreter
keywords:
- watcher
- Open Interpreter
image: https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/banner.png
slug: /cn/watcher_node_red_to_open_interpreter
last_update:
  date: 05/15/2025
  author: Allen
---

# Watcher 到 Open Interpreter 快速入门

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/banner.png" style={{width:1000, height:'auto'}}/></div>

## 第一部分：[Open Interpreter](https://docs.openinterpreter.com/getting-started/introduction) 是什么

Open Interpreter 是一个开源工具，它通过自然语言命令与用户的计算机交互，能够执行各种编程语言的代码。它充当桥梁，使用户可以用简单的语言编写指令，然后由解释器将其转换为可执行代码。这种方式提高了生产力，并使编程变得更加容易，尤其是对于那些不熟悉编码语法的人。

## 第二部分：Node-RED 中的操作

在这一部分，我们需要 4 个模块来完成任务。这些模块包括 **SenseCap Watcher OpenSteam、function、http request 和 debug** 模块。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/6.png" style={{width:1000, height:'auto'}}/></div>

1. **SenseCap Watcher OpenSteam 模块**：从 Watcher 获取消息到 Node-RED。
2. **function 模块**：处理数据以获取所需的消息。
3. **http request 模块**：通过 HTTP 协议将消息发送到 Open Interpreter。
4. **debug 模块**：调试整个工作流程以检查是否一切正常。

我们将在以下步骤中展示如何配置这些模块。

### 第一步：配置 SenseCap Watcher OpenSteam 模块

首先，您需要按照下面的视频在 Watcher 中运行一个任务。如果您想了解更多，[请点击这里](https://wiki.seeedstudio.com/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

如果您还不知道如何从 Watcher 发送消息到 Node-RED，[请点击这里](https://wiki.seeedstudio.com/watcher_to_node_red/)。

### 第二步：配置 function 模块

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/7.png" style={{width:800, height:'auto'}}/></div>

```javascript
msg.payload = {
    content: msg.payload.value[0].content,
    image_url: msg.payload.value[0].image_url
};
return msg;
```

### 第三步：配置 http request 模块

我们使用 POST 请求以确保安全，并发送到端口 3000。稍后我们将使用 Open Interpreter 持续监听端口 3000。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/8.png" style={{width:800, height:'auto'}}/></div>

### 第四步：配置 debug 模块

按照下图选择设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/9.png" style={{width:800, height:'auto'}}/></div>

完成配置后，不要忘记点击 **Deploy** 部署。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/10.png" style={{width:1000, height:'auto'}}/></div>

## 第三部分：Open Interpreter 中的操作

:::tip
在继续之前，前提是您的计算机需要有 Python 开发环境。

如果尚未安装，[请点击这里参考安装指南。](https://phoenixnap.com/kb/how-to-install-python-3-windows)
:::

### 第五步：安装 Open Interpreter

安装 Python 后，您可以通过 Python 轻松安装 Open Interpreter，只需一条命令。

```python
pip install open-interpreter
```

### 第六步：启动 Open Interpreter

Interpreter 有两种模式：在线模式和本地模式。默认情况下，Interpreter 选择在线模式，使用 OpenAI ChatGPT gpt-4-turbo API Key。您也可以设置为本地模式，这意味着您需要下载模型以在本地运行。

:::tip
我推荐使用在线模式，因为在线模式比本地模式更快、更智能，而本地模式经常会卡住。
:::

#### 在线模式

1. 在开始之前，我们需要一个 OpenAI API Key。[如果您是 OpenAI GPT-4 付费会员，可以点击这里获取。](https://platform.openai.com/api-keys)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/16.png" style={{width:1000, height:'auto'}}/></div>

2. 然后，我们输入命令 ```interpreter``` 启动它，并输入 API Key。之后，我们成功将模型设置为 gpt-4-turbo。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/2_1.png" style={{width:1000, height:'auto'}}/></div>

#### 本地模式

1. 在开始之前，我们需要下载一个模型以在本地运行。我推荐使用 **Ollama**。[点击这里跳转。](https://ollama.com/) 您需要下载并安装此应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/12.png" style={{width:1000, height:'auto'}}/></div>

2. 安装成功后，在 **PowerShell（或终端）** 中运行 ```ollama```，界面将如下图所示。然后运行 ```ollama run llama3.1``` 下载模型 **llama3.1** 并运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/15.png" style={{width:1000, height:'auto'}}/></div>

3. 如果您想尝试其他模型，[点击这里跳转。](https://ollama.com/library) 只需运行 ```ollama run xxx```。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/13.png" style={{width:1000, height:'auto'}}/></div>

4. 在成功安装模型并运行后，我们可以继续操作。我们需要输入 ```interpreter -l``` 这个命令来进入它，然后选择 **ollama** 和 **llama3.1**（就是你刚刚下载的模型）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/11.png" style={{width:1000, height:'auto'}}/></div>

### 第7步.运行命令

:::tip
我尝试了多次在 Interpreter 中运行以下命令，但并不是每次 Interpreter 的反应都相同。

因此，你需要根据 Interpreter 的反应与它进行交互。有时需要重启并重新尝试。
:::

以下是我发送给 Open Interpreter 的自然语言命令：

```
我希望你持续监听计算机端口 3000，提取 image_url 并在浏览器中打开它。
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/2.png" style={{width:1000, height:'auto'}}/></div>

第一次运行时，Interpreter 表示它的初始设置仅支持 GET 请求以简化操作，但我的请求是为了安全性使用 POST，因此它无法支持，并建议我修改服务器以处理 POST 请求。我同意了，然后它会自动运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/3.png" style={{width:1000, height:'auto'}}/></div>

如你所见，代码成功运行，正在监听端口 3000。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/4.png" style={{width:1000, height:'auto'}}/></div>

现在，使用 Watcher 自行检测。图像将被捕获并自动在浏览器中打开。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/5.png" style={{width:1000, height:'auto'}}/></div>

恭喜你成功集成了 Watcher 和 Open Interpreter 应用程序！这一成就标志着你旅程中的重要一步，展示了你的奉献精神和技能。随着你的前进，你会发现更多令人着迷的概念和工具。拥抱未来的挑战和发现，享受这段激动人心的冒险旅程的每一刻！

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>