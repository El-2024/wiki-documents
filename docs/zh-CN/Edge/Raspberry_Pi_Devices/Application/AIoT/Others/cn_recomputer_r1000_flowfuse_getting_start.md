---
description: 学习如何在 reComputer 上设置和配置 FlowFuse。本指南涵盖了创建账户、安装 Node.js、添加和配置设备、创建 Node-RED 流程，以及从云端向设备部署快照以实现无缝集成和管理。
title: 使用 FlowFuse 的 reComputer R1000
keywords:
  - Flow Fuse
  - reComputer R1000
  - Node-Red
  
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/recomputer_r1000_flow_fuse
last_update:
  date: 07/30/2024
  author: Kasun Thushara
---
## 简介

[FlowFuse](https://flowfuse.com/) 通过为 Node-RED 添加协作开发、远程部署管理、支持 DevOps 交付管道以及托管 Node-RED 应用程序的功能，提升了 Node-RED 的能力。它是一个专为 Node-RED 应用程序开发和交付设计的 DevOps 平台，使团队能够更轻松地协作并高效地部署项目。

## 入门指南

在开始本项目之前，您需要按照以下说明提前准备好硬件和软件。

### 硬件准备

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

## 软件准备

### 在 reComputer 上为 FlowFuse 安装 Node.js

为了让您的 reComputer 为 FlowFuse 做好准备，您需要安装 Node.js。按照以下步骤安装 Node.js 版本 20：

1. **准备 Node.js 仓库**

首先，更新您的软件包列表并安装必要的证书和工具：

```sh
sudo apt update
sudo apt install -y ca-certificates curl gnupg
```
2. **设置 NodeSource 仓库**

接下来，在您的 reComputer 上设置 NodeSource 仓库：

```sh
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /usr/share/keyrings/nodesource.gpg
```

3. **添加 Node.js 仓库**

根据 FlowFuse 文档，建议安装 Node.js 版本 20。将 `NODE_MAJOR` 变量设置为 20：

```sh
NODE_MAJOR=20
```

将 Node.js 仓库添加到您的 reComputer 的源列表中：

```sh
echo "deb [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
```
再次更新您的软件包列表以包含 Node.js 仓库：

```sh
sudo apt update
```
4. **安装 Node.js**

最后，安装 Node.js：

```sh
sudo apt install nodejs
```
现在，您的设备上已经安装了 Node.js 版本 20。

要开始使用 FlowFuse，您需要创建一个账户并验证您的电子邮件。请按照以下简单步骤操作：

## 创建账户

1. **访问注册页面**：
   - 前往 [FlowFuse账户创建页面](https://app.flowfuse.com/account/create)。

2. **填写注册表单**：
   - **用户名**：选择一个唯一的用户名。
   - **全名**：输入您的全名。
   - **邮箱**：提供一个有效的邮箱地址。
   - **密码**：创建一个强密码。

3. **提交表单**：
   - 填写所有必填字段后，点击“创建账户”按钮。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/signinpage.PNG" /></center>

4. **检查您的邮箱**：
   - 前往您的邮箱收件箱，查找来自FlowFuse的验证邮件。

5. **打开验证邮件**：
   - 打开邮件并使用代码验证邮箱。

6. **返回FlowFuse登录页面**：
   - 前往FlowFuse登录页面。

7. **输入您的凭证**：
   - 用户名/邮箱：输入您注册时使用的用户名或邮箱。
   - 密码：输入您的密码。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/email.PNG" /></center>

8. **登录**：
   - 点击 `登录` 按钮访问您的FlowFuse账户，您可能会被要求创建一个团队。

## 在FlowFuse中创建应用

为了组织您的Node-RED实例，它们会被分组到应用中。在您的应用中，您可以拥有一个或多个Node-RED实例。实例是一个定制化的Node-RED版本，包含各种FlowFuse插件以与平台集成。

1. **导航到应用部分**：
   - 在FlowFuse仪表板上，点击 `创建应用`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/application.PNG" /></center>

2. **填写应用详情**：
   - **名称**：为您的应用输入一个名称。
   - **描述**：提供您的应用的简短描述。
   - **实例名称**：为您的Node-RED实例选择一个名称。
   - **蓝图**：选择 `空白工作区` 作为蓝图。
   - **Node-RED版本**：从下拉菜单中选择最新的Node-RED版本。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/application2.PNG" /></center>

3. **创建应用**：
   - 填写所有详情后，点击 `创建` 按钮。

## 在FlowFuse中创建流程

让我们在Node-RED中创建一个流程，用于生成随机数并将其显示在仪表板上。如果您是Node-RED的新手，可以访问我们的 [Node-RED入门指南](https://wiki.seeedstudio.com/cn/recomputer_r1000_getting_started_node_red/)。以下是创建流程的步骤：

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/selectin.PNG" /></center>

1. **打开Node-RED编辑器**：
   - 前往您的实例并选择您刚刚创建的实例。
   - 点击 `打开编辑器` 启动Node-RED编辑器。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/openeditor.png" /></center>

2. **安装所需节点**：
   - 您可能默认看不到 `random` 节点和 `gauge` 节点。要安装这些节点：
   - 前往右上角菜单，选择 `管理调色板`。
   - 转到 `安装` 标签。
   - 搜索 `Random` 和 `Dashboard` 节点并安装它们。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/noderedflow.PNG" /></center>

3. **创建流程**：
   - 复制以下流程并将其导入到您的Node-RED编辑器中以节省时间：

```sh
[
    {
        "id": "fd017c5f719054f5",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "45888468a69bbabb",
        "type": "random",
        "z": "fd017c5f719054f5",
        "name": "Random",
        "low": 1,
        "high": "100",
        "inte": "true",
        "property": "payload",
        "x": 340,
        "y": 160,
        "wires": [
            [
                "ce3820147521aaa6"
            ]
        ]
    },
    {
        "id": "5e571c440b2340e9",
        "type": "inject",
        "z": "fd017c5f719054f5",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "5",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 130,
        "y": 160,
        "wires": [
            [
                "45888468a69bbabb"
            ]
        ]
    },
    {
        "id": "ce3820147521aaa6",
        "type": "ui_gauge",
        "z": "fd017c5f719054f5",
        "name": "",
        "group": "7ac87662e9cf0550",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "Random Number",
        "label": "units",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "diff": false,
        "className": "",
        "x": 670,
        "y": 160,
        "wires": []
    },
    {
        "id": "7ac87662e9cf0550",
        "type": "ui_group",
        "name": "Default",
        "tab": "0dc7fe4a8add5b68",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    },
    {
        "id": "0dc7fe4a8add5b68",
        "type": "ui_tab",
        "name": "Home",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    }
]
```

4. **部署流程**：
   - 点击右上角的 `部署` 按钮以部署您的流程。

## 在 FlowFuse 中添加和配置设备

1. **按照以下步骤在 FlowFuse 中添加和配置设备**：
 - 在 FlowFuse 仪表板中，导航到 `Devices` 部分。
 - 点击 `Add Device` 按钮。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/device.PNG" /></center>

 - 填写设备详细信息。
 - 点击 `Add` 按钮以创建您的设备。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_device.PNG" /></center>

2. **复制设备配置**

  - 添加设备后，系统会显示设备配置。
  - 在手动说明下，复制提供的代码片段。您需要这些凭据来将设备连接到 FlowFuse 云。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_device2.PNG" /></center>

## 安装设备代理

在您的 reComputer 终端上运行以下命令以安装 FlowFuse 设备代理：

```sh
sudo npm install -g @flowfuse/device-agent
```
### 配置设备代理

1. **创建配置目录**：
   - 逐一运行以下命令以创建配置目录并设置适当的权限：

```sh
   sudo mkdir /opt/flowfuse-device
   sudo chown -R $USER /opt/flowfuse-device
   sudo su
   cd /
   cd opt/flowfuse-device
```
2. **创建并编辑配置文件**：
   - 打开一个名为 `device.yml` 的新配置文件：

```sh
nano device.yml
``` 
- 将复制的设备配置粘贴到此文件中，并通过按 `Ctrl + X`，然后 `Y` 和 `Enter` 保存。

3. **运行设备代理**：
   - 执行以下命令以启动 FlowFuse 设备代理：

```sh
flowfuse-device-agent --port=1881
```
您的设备现已配置并连接到 FlowFuse 云，可以使用。

## 部署流程到设备

要将流程部署到您的设备，您需要创建 Node-RED 实例的快照并将其推送到 reComputer 终端。请按照以下步骤操作：

### 创建快照

1. **导航到应用程序**：
   - 转到您的 FlowFuse 应用程序并选择您创建的实例。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot1.PNG" /></center>

2. **选择“Snapshot”**：
   - 点击实例菜单中的 `Snapshot` 选项。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot2.PNG" /></center>

3. **创建新快照**：
   - 由于尚无快照，您需要创建一个。
   - 点击 `Create Snapshot`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot3.PNG" /></center>

4. **填写快照详细信息**：
   - `Name`：输入快照的名称。
   - `Description`：提供快照的简要描述。
   - `Set as Target`：勾选此框以将此快照设置为目标。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot4.PNG" /></center>

5. **创建快照**：
   - 点击 `Create` 按钮以创建快照。这将捕获您的 Node-RED 实例的当前状态，包括流程、凭据、环境变量、NPM 包（带锁定版本）和运行时设置。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/snapshot5.PNG" /></center>

## 将快照推送到设备

要将快照部署到您的设备，请按照以下步骤操作：

1. **进入设备部分**
   - 在 FlowFuse 仪表板中，进入 `Devices` 部分。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/device_add_sanp.PNG" /></center>

2. **选择设备**
   - 找到您之前创建并配置的设备。
   - 点击设备名称旁边的三个点。
   - 点击 `Add Instance`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_instance.PNG" /></center>

3. **将实例添加到设备**
   - 选择您之前创建的应用程序和实例。
   - 点击 `Add` 按钮。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/add_instance2.PNG" /></center>

4. **部署流程**
   - 您的流程将在几秒钟内部署到设备上。它将按照快照中捕获的配置和设置运行。

5. **访问设备**
   - 在您的浏览器中导航到 `<ip_address_recomputer>:1881/ui` 以访问您的设备。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/flowfuse/gauge.PNG" /></center>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>