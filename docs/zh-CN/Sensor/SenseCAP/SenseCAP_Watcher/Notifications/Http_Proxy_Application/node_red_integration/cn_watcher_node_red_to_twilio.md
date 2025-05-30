---
description: 从 Watcher 和 Node-RED 发送消息到 Twilio
title: Watcher 和 Node-RED 到 Twilio
keywords:
- watcher
- twilio
image: https://files.seeedstudio.com/wiki/watcher_to_twilio_image/tw1.png
slug: /cn/watcher_node_red_to_twilio
last_update:
  date: 05/15/2025
  author: Allen
---

# Watcher 到 Twilio 快速入门

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/watcher_twilio.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## 第 1 部分：[Twilio](https://www.twilio.com/) 是什么

Twilio 是一个领先的云通信平台，专为开发者设计。它提供了一组 API，用于将语音、视频和消息功能集成到应用程序中。通过 Twilio，开发者可以轻松构建强大的通信功能，例如语音通话、视频聊天和短信消息。它提供用户友好的工具和可靠的基础设施，使其成为开发者创建创新应用程序和提升用户体验的首选。Twilio 采用按需付费模式，开发者只需为使用的特定通信服务付费。

## 第 2 部分：如何注册

**步骤 1.** [点击这里跳转到 Twilio](https://console.twilio.com/)。完成注册后，您将看到您的 **SID** 和 **Token**。此外，我们需要购买一个号码来发送消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/1.png" style={{width:1000, height:'auto'}}/></div>

**步骤 2.** 进入此页面，选择一个您喜欢的号码并购买。作为新用户，Twilio 将赠送您 15 美元以试用其功能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/2.png" style={{width:1000, height:'auto'}}/></div>

**步骤 3.** 这里是关于此号码的介绍，您可以查看，然后点击购买按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/3.png" style={{width:600, height:'auto'}}/></div>

**步骤 4.** 此页面将显示所有活动号码。您刚刚购买的号码将显示在这里。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/4.png" style={{width:1000, height:'auto'}}/></div>

**步骤 5.** 返回控制台页面，您将看到 **SID**、**Token** 和 **电话号码**。这些是我们稍后需要的内容 <span id="jump">稍后</span>。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/5.png" style={{width:1000, height:'auto'}}/></div>

## 第 3 部分：如何在 Node-RED 中配置 Twilio

如果您还不知道如何从 Watcher 发送消息到 Node-RED，[请点击这里](https://wiki.seeedstudio.com/watcher_to_node_red/)。

**步骤 1.** 首先，我们需要在 Node-RED 中下载 Twilio 插件，因此点击 **Manage palette**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/6.png" style={{width:600, height:'auto'}}/></div>

**步骤 2.** 搜索 twilio 并安装第一个结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/7.png" style={{width:600, height:'auto'}}/></div>

**步骤 3.** 将 Twilio 模块拖到工作区并双击它，然后添加一个新的 Twilio 配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/8.png" style={{width:1000, height:'auto'}}/></div>

**步骤 4.** 填写这些属性，**SID**、**From** 和 **Token** 来自 [Twilio 控制台](#jump)。**Name** 表示此配置的名称。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/9.png" style={{width:600, height:'auto'}}/></div>

**步骤 5.** 填写这些属性，**Output** 表示您想要短信还是电话，**To** 表示您想发送到哪个电话号码，**Name** 表示此模块的名称。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/10.png" style={{width:600, height:'auto'}}/></div>

**步骤 6.** 完成后，您将看到此页面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/12.png" style={{width:600, height:'auto'}}/></div>

## 第 4 部分：发送消息到 Twilio

### 获取所有结果

**步骤 1.** 在 Watcher 中运行一个任务。

首先，您需要按照下面的视频在 Watcher 中运行一个任务。如果您想了解更多，[请点击这里](https://wiki.seeedstudio.com/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**步骤 2.** 将 SenseCAP **OpenStream** 模块和 **debug** 模块拖到工作区并进行配置。如果您不知道如何配置，[请点击这里](https://wiki.seeedstudio.com/watcher_to_node_red/)。连接它们并点击右上角的 **Deploy** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/101.png" style={{width:700, height:'auto'}}/></div>

**步骤 3.** 您将在 **debug 页面** 和手机上的 **Twilio 消息** 中收到消息。

<div class="table-center">
  <table align="center">
    <tr>
      <th>debug 页面</th>
      <th>Twilio 消息</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/11.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/allmsg.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

### 获取特定结果

**步骤 1.** 如果您觉得获取所有结果太多，而您只想获取特定结果，您需要将一个 **function 模块** 拖到中间并连接它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/13.png" style={{width:1000, height:'auto'}}/></div>

**步骤 2.** 双击 **function module**（功能模块），编写一些代码以获取您想要的消息。点击 **Done**（完成）并 **Deploy**（部署）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/14.png" style={{width:1000, height:'auto'}}/></div>

获取一条特定的消息。

```cpp
msg.payload = msg.payload.value[0].content;
return msg;
```

如果您想获取多条消息，请参考以下代码。

```cpp
var content = msg.payload.value[0].content;
var image_url = msg.payload.value[0].image_url;
var timestamp = new Date(msg.payload.timestamp).toLocaleString();

msg.payload = {
    value1: content,
    value2: image_url,
    value3: "警报接收到的时间：" + timestamp
};
return msg;
```

**步骤 2.** 在 Watcher 中运行一个任务，如果您不知道如何运行任务，[请参考这里。](https://wiki.seeedstudio.com/getting_started_with_watcher_task)

**步骤 3.** 您将在 **调试页面** 和手机上的 **Twilio 消息** 中收到消息。

<div class="table-center">
  <table align="center">
    <tr>
      <th>调试页面</th>
      <th>Twilio 消息</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/15.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_twilio_image/onemsg.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

恭喜您成功将 Watcher 与 Twilio 连接！现在，释放这种集成的强大功能，开始构建利用无缝通信能力的创新应用吧～

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>