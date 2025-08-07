---
description: 无代码边缘AI工具
title: 无代码边缘AI工具
keywords:
  - 边缘
  - reComputer应用
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/No-code-Edge-AI-Tool
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # 用于Disqus

---

# 无代码边缘AI工具

我们很高兴为您带来基于Jetson Nano构建的reComputer的新体验，能够快速且轻松地实现目标识别。

只需几个简单的命令，就可以下载和部署环境，监控、识别和从实时屏幕输出结果的过程只需三个模块，简单至极。

## 演示视频

**仓库安全演示**

<iframe width={560} height={315} src="https://www.youtube.com/embed/QI_3g5kkh0I" title="YouTube视频播放器" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

**农场守卫演示**

<iframe width={560} height={315} src="https://www.youtube.com/embed/Jt66IG4E6uM" title="YouTube视频播放器" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## 初步准备

在本示例中，我们将介绍如何在全新的NVIDIA Jetson系统下下载和安装所需内容，然后打开边缘AI工具并使用实时摄像头进行目标检测。以下是步骤概览。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/node-red/step.png" /></div>

1. 下载和部署
2. 放置模块
3. 显示结果

### 硬件要求

在开始之前，您需要准备以下硬件。

<table>
  <thead>
    <tr>
      <th>硬件图片</th>
      <th>硬件名称</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/node-red/reComputer-Jetson-Nano.jpg" width={210} /></td>
      <td><a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">带Jetson Nano模块的reComputer J1010</a><br />或<br /><a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html">带Jetson Nano模块的reComputer J1020</a></td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/node-red/3.png" width={210} /></td>
      <td>Logitech C270高清摄像头<br />或<br /><a href="https://developer.nvidia.com/embedded/jetson-partner-supported-cameras?t1_camera-interface=USB&t1_max-resolution=4K&t1_supported-jetson-products=Nano" target="_blank" rel="noopener noreferrer">其他Jetson支持的V4L2 USB摄像头</a></td>
    </tr>
  </tbody>
</table>

!!!注意
    本示例仅适用于基于Jetson Nano构建的reComputer。请注意，目前基于Jetson Xavier NX构建的reComputer尚不支持运行，但未来将会支持。

### 软件要求

在开始之前，请确保您的设备已刷入[JetPack 4.6.1](https://developer.nvidia.com/embedded/jetpack-sdk-461)。如果您想将Jetson Nano eMMC重新刷入JetPack 4.6.1，请参考[此处](https://docs.nvidia.com/sdk-manager/install-with-sdkm-jetson/index.html)。

您可以通过在终端中输入以下命令检查已安装的JetPack版本：

```sh
cat /etc/nv_tegra_release
```

输出应如下所示：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/node-red/check-jp-version.png" /></div>

**注意：** R32.7.1对应于JetPack 4.6.1

## 入门指南

当硬件和软件按照上述描述准备就绪后，我们可以开始体验 Edge AI Tool。在本示例中，请根据需要连接显示器、鼠标或键盘，您也可以通过 SSH 或 VNC 远程控制您的 NVIDIA Jetson。

### 第 1 步：下载和部署

在 NVIDIA Jetson 上打开命令行窗口，并输入以下命令，将所需文件下载到 Jetson。

```sh
git clone https://github.com/Seeed-Studio/node-red-contrib-ml.git
```

下载完成后，运行以下命令启动所需的 Docker。

```sh
cd node-red-contrib-ml
sudo ./docker-ubuntu.sh
```

整个安装和启动过程大约需要 7 到 9 分钟。

### 第 2 步：放置模块

安装完成后，使用 NVIDIA Jetson 系统自带的 Google Chrome 浏览器，输入以下 URL 访问操作界面。

```
127.0.0.1:1880
```

您也可以在地址栏中输入 IP 地址加端口号（1880）来访问操作页面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/6.png" /></div>

我们可以在下图中看到 Edge AI Tool 操作界面的分布。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/8.png" /></div>

- **模块区域：** 该区域包含许多用户可以操作的模块。

- **编程区域：** 这是用户的编程区域。用户可以将模块区域中的模块拖放到编程区域中以完成程序。

- **设置区域：** 最右侧是设置区域。在这里我们可以查看编程区域的流程，并完成一些必要的设置或对模块进行操作等。

在模块区域中，有一个名为 **seeed recomputer** 的部分，我们将重点使用其中的三个模块。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/7.png" /></div>

- **video input：** 该模块用于从摄像头输入获取视频流。可以设置该模块以选择网络摄像头或本地 V4L2 USB 摄像头等。

- **detection：** 该模块用于选择要识别的模型。输入的视频流将使用您选择的模型进行识别。目前，该版本仅支持 **COCO 数据集**。

- **video view：** 该模块用于在屏幕上输出处理后的视频流。

接下来我们可以看一下模块的组成。以 **video input** 模块为例。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/12.png" /></div>

在该模块的左侧有一个蓝色方块区域。当该区域隐藏时，表示视频流输入已关闭。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/11.png" /></div>

当该区域显示时，表示视频流输入已开启。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/13.png" /></div>

类似地，**video view** 模块在右侧也有一个这样的方块。隐藏表示关闭视频流输出显示，反之亦然。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/14.png" /></div>

如果模块右上角有一个蓝点，这表示该模块已被编辑，但尚未部署。顺便提一下，整个项目运行需要通过模块编程并部署后才能显示结果。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/15.png" /></div>

模块右侧的灰色方块是模块的连接点。左键单击此处并将其拖动到下一个模块的左侧连接点，即可将两个模块连接起来形成程序流程。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/16.png" /></div>

需要注意的是，程序流程按 **从左到右** 的顺序执行，左侧连接点只能连接到右侧连接点。

如果模块左侧没有连接点，则应将其用作程序流程的起始节点。如果模块右侧没有连接点，则应将其用作整个程序流程的结束节点。

像 **object detection** 这样的模块有两个连接点，表示可以向模块输出多种不同的内容。这样可以同时输出视频流和日志。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/17.png" /></div>

模块的使用也非常简单快捷。您可以长按鼠标左键拖动所需的模块，然后将其拖动到主屏幕的编程区域。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/9.png" /></div>

根据上述对模块的描述，我们可以设计一个简单的模块程序，如下所示。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/18.png" /></div>

上述程序是从摄像头获取输入视频流，然后使用模型检测识别对象并输出结果。

### 第 3 步：显示结果

模块放置完成后，我们仍需对模块进行简单配置才能使用。如果您想设置某个特定模块，可以双击它，右侧会弹出相应的设置框。

我们先来设置 **video input** 模块。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/19.png" /></div>

- **设备类型：** 在这里您可以设置摄像头的类型，目前支持两种类型的摄像头：网络摄像头和本地摄像头。

- **视频:** 在此选择您的摄像头。如果此处没有可用的摄像头，请仔细检查摄像头是否受支持或是否已成功连接。

- **URL:** 如果您选择了网络摄像头，视频字段将变为一个 URL。在此填写网络摄像头的输入源。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/20.png" /></div>

- **分辨率:** 在此选择您的摄像头分辨率。选择错误的分辨率可能会导致运行时错误。

对于 **目标检测**模块，设置如下。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/21.png" /></div>

- **模型名称:** 在此选择用于目标识别的模型名称，目前仅支持 COCO 数据集。

!!!注意
    COCO 是一个大规模目标检测、分割和标注数据集。COCO 具有以下特点：
    - 目标分割
    - 上下文中的识别
    - 超像素物体分割
    - 330K 张图片（>200K 标注）
    - 150 万个目标实例
    - 80 个目标类别
    - 91 个物体类别
    - 每张图片 5 个标注
    - 250,000 人体关键点

    <div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/node-red/22.png"/></div>

完成设置后，点击界面右上角的 **部署** 按钮，程序流将开始运行。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/23.png" /></div>

如果一切正常，您可以看到视频流中识别出的目标被框选，并显示置信度值。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/24.png" /></div>

## 深入操作

在上一章中，我们体验了 Edge AI Tool 程序的最简单形式。在本节中，我们将带您了解 Edge AI Tool 的更多扩展功能。

<iframe width={560} height={315} src="https://www.youtube.com/embed/QI_3g5kkh0I" title="YouTube 视频播放器" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

### 模块下载

除了模块部分中的模块，我们可以下载更多模块以完成更复杂的项目。

在右侧的设置区域，有一个用于更多选项的按钮，我们选择 **管理调色板**。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/25.png" /></div>

在弹出页面中，您可以看到已安装的模块，并选择 **安装** 以下载更多模块。这里以邮箱模块为例。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/27.png" /></div>

安装后，可以在模块部分底部看到新安装的模块。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/30.png" /></div>

### 导入其他项目

有时您可能希望分享您的有趣项目供其他人体验。或者您希望使用其他人的项目，那么您可以参考以下方法。

在右侧的设置区域，有一个用于更多选项的按钮，我们选择 **导入**。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/33.png" /></div>

接下来，我们可以在弹出窗口中粘贴我们分享或获得的代码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/34.png" /></div>

在此示例中，我们将与您分享一个精彩项目，该项目专注于实时检测是否有人通过摄像头进入环境，并在检测到人员时发送电子邮件通知。

```json
[
    {
        "id": "7963f97f362cdfc6",
        "type": "tab",
        "label": "警告邮件",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "41a8f267df4eb722",
        "type": "video input",
        "z": "7963f97f362cdfc6",
        "name": "",
        "deviceType": "rtsp",
        "rtsp": "",
        "local": "video0",
        "resolution": "2560",
        "frequency": "60",
        "senderr": true,
        "active": false,
        "x": 160,
        "y": 140,
        "wires": [
            [
                "c5fef75b0ab418c6"
            ]
        ]
    },
    {
        "id": "c5fef75b0ab418c6",
        "type": "detection",
        "z": "7963f97f362cdfc6",
        "name": "",
        "modelName": "coco_dataset",
        "showResult": true,
        "senderr": true,
        "x": 380,
        "y": 200,
        "wires": [
            [
                "40523cc8b61cfcc9"
            ],
            [
                "689c67f6610be9e2"
            ]
        ]
    },
    {
        "id": "40523cc8b61cfcc9",
        "type": "video view",
        "z": "7963f97f362cdfc6",
        "name": "",
        "width": 640,
        "data": "payload",
        "dataType": "msg",
        "thumbnail": false,
        "active": false,
        "pass": false,
        "outputs": 0,
        "x": 650,
        "y": 140,
        "wires": []
    },
    {
        "id": "689c67f6610be9e2",
        "type": "switch",
        "z": "7963f97f362cdfc6",
        "name": "检测到人员入侵",
        "property": "payload.labels",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "person",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 410,
        "y": 540,
        "wires": [
            [
                "40f6ca0fbb322dd5"
            ]
        ]
    },
    {
        "id": "40f6ca0fbb322dd5",
        "type": "e-mail",
        "z": "7963f97f362cdfc6",
        "server": "",
        "port": "465",
        "secure": true,
        "tls": true,
        "name": "",
        "dname": "警告邮件",
        "credentials": {
            "userid": "",
            "password": ""
        },
        "x": 720,
        "y": 620,
        "wires": []
    },
    {
        "id": "80a51065a9ee835e",
        "type": "ui_spacer",
        "z": "7963f97f362cdfc6",
        "name": "间隔",
        "group": "529bf2dedebe9911",
        "order": 2,
        "width": 12,
        "height": 1
    },
    {
        "id": "529bf2dedebe9911",
        "type": "ui_group",
        "name": "默认",
        "tab": "ad4ccf9922566f44",
        "order": 1,
        "disp": true,
        "width": 20,
        "collapse": false,
        "className": ""
    },
    {
        "id": "ad4ccf9922566f44",
        "type": "ui_tab",
        "name": "主页",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    }
]
```

请注意，代码不能直接使用，您需要将 `"rtsp": "",` 填写为您的摄像头输入源，将 `"server": "",` 填写为您的邮件服务器地址，并将 `"credentials": {
            "userid": "",
            "password": ""
        },` 填写为您的用户名和密码。

当一切准备就绪时，该程序块将正常工作，并在检测到活动时向您发送电子邮件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/36.png" /></div>

在本项目中，使用了两个新模块，**switch** 和 **email**。

**switch** 模块是根据您设置的判断信息决定程序走向的地方。例如，在本程序中，我将 switch 模块命名为 **person intrusion detected**（检测到人员入侵），并填写了属性 **payload.labels**。**payload.labels** 是前一个模块 **object detection**（对象检测）的关键值。当属性的值等于 **person** 时，switch 后连接的模块将被执行。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/31.png" /></div>

**email** 模块的设置相对简单，您只需根据邮箱支持的协议填写您希望接收消息的邮箱地址和服务器地址。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/32.png" /></div>

当然，如果您直接复制代码并完成代码修改，则无需对模块进行进一步更改。如果您更习惯使用图形界面，也可以在模块设置中完成这些元素的配置。

## 故障排除

### 如果 Docker 无法成功启动，或者模块中没有 Seeed ReComputer，该怎么办？

我们可以关闭 Docker 并使用以下命令重新启动它。

```sh
cd node-red-contrib-ml/
sudo docker-compose --file docker-compose.yaml down
sudo docker-compose --file docker-compose.yaml up
```

### 如果无法观察到结果或调试中出现错误，该怎么办？

请使用以下命令检查 Docker 安装是否正确。您应该看到图中显示的三个 Docker。如果缺少任何一个，请返回 **Getting Started**（入门指南）的第一步并重新安装 Docker。

```sh
sudo docker image ls
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/37.png" /></div>

如果安装与图像匹配，请使用以下命令检查已启动 Docker 的运行状态。

```sh
sudo docker ps
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/38.png" /></div>

如果如上图所示没有启动 Docker，请尝试重新启动 Docker，或检查设备的型号和系统版本是否符合要求。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>