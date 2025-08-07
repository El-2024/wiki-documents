---
description: Google Assistant for reSpeaker
title: Google Assistant for reSpeaker
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Google_Assistant
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Front.jpg)

本维基适用于 ReSpeaker Core v2.0，我们建议您先阅读 [ReSpeaker Core v2.0 的维基](https://wiki.seeedstudio.com/cn/ReSpeaker_Core_v2.0/#preparation)。

## 开始之前

您需要进行以下准备：

- 最新镜像的 ReSpeaker Core v2.0
- Wi-Fi 网络（确保您可以通过此网络 ping Google）
- PC 或 Mac
- 一根 Micro-USB 数据线
- [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

我们假设您已经阅读了 [准备工作](https://wiki.seeedstudio.com/cn/ReSpeaker_Core_v2.0/#preparation) 并设置了 WiFi 和串口。

现在让我们开始吧 😃

## 入门指南

### 硬件

这部分非常简单，只需通过 `OTG` 端口将您的 ReSpeaker Core v2.0 插入电脑即可。

### 软件

#### 设置您的项目

- **步骤 1. 添加您的项目**

打开 [链接](https://console.actions.google.com/?pli=1) 添加您的项目。

:::note
    如果您没有 Google 账户，请先在 google.com 注册。
:::

点击 `Add/Import project`

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_0.png)

然后输入您的 `项目名称` 并选择 `国家/地区`。点击 `CREATE PROJECT` 继续。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_1.png)

- **步骤 2. 注册模型**

点击 `Connected properties -> DEVICE MODELS -> REGISTER MODEL`，如下图所示。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_2.png)

填写您的产品信息，然后点击 `REGISTER MODEL` 继续。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_3.png)

直接点击 `NEXT`

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_4.png)

请确保您选择了选项 `ALL 7 traits`，这样您可以开启所有权限。然后点击 `SAVE TRAITS`。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_5.png)

现在请点击您刚刚创建的项目名称。在本示例中，您可以看到我们使用的是 `ReSpeaker Core v2.0`。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_6.png)

您将看到如下图所示的一些信息。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_7.png)

请记下 `Model Id`，在本示例中为 `respeaker-xxxx-respeaker-core-v2.0-xxxxx`，这是重要信息，稍后会用到。

现在让我们下载 json 文件。点击右上角的按钮，然后点击 `Download credentials.json` 将 json 文件下载到您的电脑。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_8.png)

然后使用 [WinCP](https://winscp.net/eng/docs/lang:chs) 或其他传输工具将 json 文件复制到您的 ReSpeaker Core v2.0。例如，我们将其复制到路径 `/home/respeaker`。

接下来，请点击左上角的齿轮图标，点击 `Project settings`，记住 `Project ID`，在本示例中为 ``。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_9.png)
![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_10.png)

好的，让我们再次检查，在本节中您将获得两个 ID。

模型 ID `respeaker-xxxx-respeaker-core-v2.0-xxxxx`

项目 ID `respeaker-440eb`

稍后会用到它们。

#### 启用 Google Assistant API

在您选择的项目上启用 Google Assistant API（请参阅 [服务条款](https://developers.google.com/assistant/sdk/terms-of-service)）。您需要在 Cloud Platform Console 中完成此操作。

点击 [这里](https://console.developers.google.com/apis/api/embeddedassistant.googleapis.com/overview) 启用 Google Assistant API。

确保以下切换开关已启用（蓝色）：

- `Web & App Activity`
- 此外，请确保选中 `Include Chrome browsing history and activity from websites and apps that use Google services` 复选框。
- `Device Information`
- `Voice & Audio Activity`

#### 安装 SDK 和示例代码

您可以参考 [Google 文档](https://developers.google.com/assistant/sdk/guides/service/python/embed/install-sample) 了解更多详细信息。

您可以使用 python2.7 和 python3 完成此部分，在本示例中我们使用 python2.7。

**对于 python2.7**

**步骤 1.**

输入以下命令：
```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install python-dev python-virtualenv
sudo virtualenv env --no-site-packages  
env/bin/python -m pip install --upgrade pip setuptools wheel
source env/bin/activate
```

**步骤 2. 获取包**

Google Assistant SDK 包含运行 Google Assistant 所需的所有代码，包括示例代码。

安装包的系统依赖项：

```
sudo apt-get install portaudio19-dev libffi-dev libssl-dev
使用 pip 在虚拟环境中安装最新版本的 Python 包：
sudo python -m pip install --upgrade google-assistant-sdk[samples]
```

**步骤 3. 生成凭证**

安装或更新授权工具：

```
sudo python -m pip install --upgrade google-auth-oauthlib[tool]==0.2
```

创建目标文件夹。

```
sudo mkdir –p /path/to/assistant-sdk/
```

使用以下命令将 `credentials.json` 复制到目标位置。

```
sudo cp /home/respeaker/credentials.json /path/to/assistant-sdk/ 
```

输入以下命令以获取令牌生成代码。

```
google-oauthlib-tool --scope https://www.googleapis.com/auth/assistant-sdk-prototype \
          --save --headless --client-secrets /path/to/assistant-sdk/credentials.json
```

:::note
    使用上述命令时，每次都会生成不同的授权代码。请确保记录下来。
:::

然后您将获得代码，请复制 `Please visit this URL to authorize this application:` 后面的代码。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code0.png)

将代码粘贴到您的互联网浏览器中，然后按下 `Enter` 键。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code1.png)

如果一切顺利，将会弹出以下窗口。选择您的 Google 账户并点击 `ALLOW`。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code2.png)
![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code3.png)

好了，接下来您将获得授权代码，如下图所示。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code4.png)

将此代码复制到您的控制台中。
![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code5.png)

然后您会看到提示 `credentials saved: /path/to/.config/google-oauthlib-tool/credentials.json`。这意味着到目前为止一切正常。

#### 安装 Respeakerd

输入以下命令以安装 respeakerd：

```
sudo apt-get install portaudio19-dev libffi-dev libssl-dev
git clone https://github.com/respeaker/googleassistant_respeakerd
cd googleassistant_respeakerd
sudo python setup.py install
sudo cp script/io.respeaker.respeaker.conf /etc/dbus-1/system.d/
# 设置 respeakerd 为 pulse 模式
sudo vim /etc/respeaker/respeakerd.conf 
# 重启以使其生效
sudo reboot
```

#### 激活 Google Assistant

还记得我们之前标记的两个 ID 吗？现在是使用它们的时候了。

将命令 `googlesamples-assistant-respeakerd --project-id my-dev-project --device-model-id my-model` 中的 ID 替换为您自己的。

对于上述命令，将 `my-dev-project` 替换为您的 `project-id`，将 `my-model` 替换为您的 `Model ID`。

对于本示例，命令应如下所示：

```
googlesamples-assistant-respeakerd --project-id respeaker-440eb --device-model-id respeaker-xxxx-respeaker-core-v2.0-xxxxx
```

现在，干杯吧！！！

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/codel.png)

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>