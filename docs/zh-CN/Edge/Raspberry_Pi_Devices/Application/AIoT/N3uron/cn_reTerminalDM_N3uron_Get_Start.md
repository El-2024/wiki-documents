---
description: 开始使用 N3uron
title: 开始使用 N3uron
keywords:
  - reTerminal DM
  - 入门指南
  - IIoT
  - 工业
  - N3uron
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminalDM_N3uron_Get_Start
last_update:
  date: 05/15/2025
  author: Xabier Fernández 和 Kasun Thushara
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 什么是 N3uron？

[N3uron](https://n3uron.com/) 是一个完整的 **工业边缘平台，用于 IIoT 和 DataOps**，能够实现工业生产车间与第三方应用程序之间的无缝集成，无论是在本地还是云端。

通过 N3uron，您可以轻松创建 OT 和 IT 系统之间的双向数据管道，并通过整合、建模、处理和可视化所有操作数据，将设备与应用程序解耦，从而在单一数据源中提供所有数据，并最终使整个组织都能访问这些数据。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_1.png" /></center>

- **模块化**：它是完全模块化的，拥有近五十个模块，用户可以根据项目需求进行堆叠，仅获取其应用所需的模块。
- **跨平台**：N3uron 可以运行在大多数 Windows 和 Linux 发行版以及像 Raspberry Pi 这样的 ARM 架构上。
- **无限许可**：N3uron 提供无限许可模式，以实惠的价格提供不限标签、用户、设备和连接的使用。
- **基于 Web**：安装后，您只需使用一个网页浏览器即可访问节点。
- **快速部署和开发**：N3uron 可以在不到一分钟内安装，其开发环境能够快速创建数据模型，尤其是在使用模板时。
- **极高效率**：单个节点可以轻松管理数十万个标签，同时保持较低的硬件需求。
- **可扩展且多功能的架构**：从一开始，N3uron 就被设计为能够无缝部署具有数百或数千个节点的分布式架构。用户可以使用 N3uron Links 快速连接多个节点，轻松扩展架构以满足需求。

## 前置条件

### 硬件

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### 软件

我们推荐从 Raspberry Pi 官方网站安装 **Bullseye** 版本的 64 位操作系统。如果您希望安装新的 Raspbian 操作系统，请按照此 [**指南**](https://wiki.seeedstudio.com/reterminal-dm-flash-OS/) 中的步骤进行操作。

## 安装

N3uron 可以通过我们的单步自动安装脚本轻松安装。在进行以下步骤之前，请确保您的 reTerminal DM 已连接到互联网。此外，我们假设您正在使用 reTerminal 提供的默认 Raspberry Pi OS。

**步骤 1**：首先，您需要访问 reTerminal DM。

- 桌面：直接连接鼠标和键盘。请打开 reTerminal DM 设备上的终端应用程序。

- VNC：使用虚拟网络计算 (VNC) 进行完整的远程桌面访问。

- SSH：使用安全外壳 (SSH) 进行远程连接。确保您的 reTerminal 可以通过网络访问，并且 SSH 服务器已启用。

有关更多信息，请访问：[在 reTerminal DM 上设置 SSH 服务器](https://wiki.seeedstudio.com/reterminal-dm-flash-OS/#access-reterminal-dm-via-ssh)。

在您的终端中输入以下命令：

```sh
ssh {USERNAME}@{RETERMINALDM_IP_ADDRESS}
```
在 Raspberry Pi OS 中，默认用户名是 pi。
例如：

```sh
ssh pi@192.168.2.100
```
系统会要求您输入密码，在 Raspberry Pi OS 中，默认密码是 **raspberry**。

**步骤 2**：使用单步自动安装脚本安装 N3uron。

```sh
curl -fsSL https://get.n3uron.com/install.sh | sudo bash
```
几秒钟后，您将完成 N3uron 的安装，并使其正常运行。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_3.gif" /></center>

## 卸载

要从 reTerminal 卸载 N3uron，请在终端中运行以下命令：

**步骤 1**：卸载 N3uron 服务。
```sh
sudo <n3uron folder>/bin/n3uron uninstall
```
例如，如果 N3uron 安装在 ‘/opt/n3uron’ 文件夹中，命令将是：
```sh
sudo /opt/n3uron/bin/n3uron uninstall
```
**步骤 2**：删除 N3uron 文件夹（可选）。
```sh
sudo rm -r <n3uron folder>
```
例如，如果 N3uron 文件夹是 ‘/opt/n3uron’，命令将是：

```sh
sudo rm -r /opt/n3uron
```

## 访问 N3uron WebUI

要访问 N3uron WebUI，请按照以下步骤操作：

**步骤 1**：在您的本地计算机上打开一个网页浏览器。

**步骤 2**：在浏览器地址栏中输入以下地址之一：
- 本地访问：http://localhost:8003。
- 在局域网 (LAN) 内的远程访问：http://reTerminal_IpAddress:8003。
- 本地安全访问：https://localhost:8443。
- 在局域网 (LAN) 内的安全远程访问：https://reTerminal_IpAddress:8443。

**步骤 3**：按 Enter 键导航到 N3uron WebUI 登录页面。

**步骤 4**：在提示时输入默认用户名 **admin** 和密码 **n3uron**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_4.gif" /></center>

## 使用

N3uron 采用了微服务架构设计，其中每个模块作为独立进程运行，而 Bootstrap 是管理其他进程的核心服务。默认情况下，**WebUI** 模块会自动激活，使其在安装完成后即可访问，其他功能可以通过创建新的模块实例来启用。

每个模块需要有效的许可证才能以生产模式运行。如果模块未找到有效许可证，它将以演示模式运行两小时。要重新开始演示期，必须重新启动模块。

让我们利用 WebVision 模块来创建我们的第一个 HMI 体验，从而增强 reTerminal DM 的可视化能力。

## 将 WebVision 引入 reTerminal DM

WebVision 是一个独立的、纯 Web HMI/SCADA 界面，专为工业应用量身打造。完全基于 JavaScript、HTML5 和 CSS 技术构建，WebVision 提供了无与伦比的灵活性，使用户能够在智能手机、平板电脑、触摸屏、笔记本电脑、台式电脑以及控制室视频墙等多种设备上无缝控制其应用程序。

作为一体化解决方案，WebVision 消除了对外部应用程序的需求——您所需的一切都开箱即用。从监控和控制到数据收集和分析，WebVision 为效率和便利性设定了新标准。
有关更多信息，请访问我们在 [知识库](https://docs.n3uron.com/docs/web-vision) 上专门为 WebVision 提供的页面。

### 实例化 WebVision 模块

**步骤 1：** 打开 N3uron 并导航到 Config 菜单。

**步骤 2：** 点击 Modules，然后创建一个新模块。此实例可以被赋予任何名称（但不能包含特殊字符，如 ‘.’、‘/’ 等），尽管建议用户将实例命名为与所实例化模块名称相似的名称以便于识别。在本例中，选择了 WebVision 模块，并将其命名为 WebVision。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_5.gif" /></center>

**步骤 3：** 导航到 WebVision 的主配置页面并选择适当的服务器设置。默认设置应适用于大多数使用场景。有关更多详细信息，请参考以下链接：[WebVision 初始配置](https://docs.n3uron.com/docs/web-vision-configuration)。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_6.png" /></center>

**步骤 4：** 一旦 WebVision 模块被实例化，第一步是为之前在 WebUI 的 Roles 部分创建的角色分配权限。默认情况下，存在两个角色：Administrator（管理员）用于管理访问，User（用户）用于常规访问。您可以根据需要将用户添加到这些角色中或创建新角色。一旦角色建立后，为 Designer 和 Viewer 角色分别设置权限。
此外，为每个角色建立一个 Tag 过滤路径。Tag 过滤路径访问决定了从 Tag 模型中哪些 Tag 可供相应角色进行可视化访问。在本例中，我们将为两个角色分配 Tag 模型的完整路径。

- Administrator（管理员）：
    - Designer（设计器）：Edit（编辑）
    - Viewer（查看器）：View（查看）
    - TagFilterPath（Tag 过滤路径）：
        - Mode（模式）：Include（包含）
        - Path（路径）：/
        - Regex pattern（正则表达式模式）：.*
- User（用户）：
    - Designer（设计器）：None（无）
    - Viewer（查看器）：View（查看）
    - TagFilterPath（Tag 过滤路径）：
        - Mode（模式）：Include（包含）
        - Path（路径）：/
        - Regex pattern（正则表达式模式）：.*

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_7.gif" /></center>

- 有用链接：

  - [用户和角色配置](https://docs.n3uron.com/docs/platform-security-users-and-roles)

  - [访问配置](https://docs.n3uron.com/docs/web-vision-configuration#access-configuration)

**步骤 5：** 为了测试我们的初始 WebVision 界面，让我们创建一个 Tag。进入 WebUI，选择 **Config**，然后点击 **Tag**。在 **Model** 部分，点击菜单并选择 **New Tag**。将其命名为 **TestTag**，例如，选择类型为 **Number**，授予其 **Read-Write 权限**，将其初始化为 0（可选），然后保存设置。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_8.gif" /></center>

**步骤 6：** 接下来，导航到 Config 部分中的 WebVision 并点击 **Open Designer**。
使用您的 **Administrator 凭据**登录。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_9.png" /></center>

**步骤 7：** 在 Templates 部分，创建一个名为 Main 的新容器。然后，将此容器指定为启动容器。这将设置 Main 为我们的初始 WebVision 界面。它将显示一个星号符号（*）在旁边。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_10.gif" /></center>

**步骤 8：** 更改 Main 容器的背景颜色。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_11.gif" /></center>

**步骤 9：** 在 Main 容器内，导航到 Components 并添加一个新组件。在本例中，选择 Gauge 组件。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_12.gif" /></center>

**步骤 10：** 在 Gauge 组件中，选择将为 Gauge 组件提供显示值的 Tag。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_13.gif" /></center>

**步骤 11：** 接下来，导航到 Config 部分中的 WebVision 并点击 Open UI。
使用您的 Administrator 凭据登录。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_14.png" /></center>

**步骤 12：** 为了测试我们的简单设计，导航到 WebUI 并选择 Data > Realtime。更改 TestTag 的值。然后返回到 WebVision UI 并验证 Gauge 组件显示的值是否已更新。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_15.gif" /></center>

关于 WebVision，还有许多内容可以探索，以增强您的 reTerminal DM 体验。有关更多详细信息，请参考我们的 [WebVision 知识库](https://docs.n3uron.com/docs/web-vision-configuration)。

N3uron 的 WebVision 模块与 Seeed Studio 的 reTerminal DM 相结合，为 SCADA 和 HMI 应用提供了强大的可视化处理能力，如下图所示，仅供说明。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/N3uron/Image_16.png" /></center>

你所看到的仅仅是开始。拥抱其近 50 个模块所提供的无限可能性。敢于梦想，创新，并通过 N3uron 的尖端功能将您的项目提升到新的高度。想要更深入地了解这个强大的平台，请访问 [https://n3uron.com/](https://n3uron.com/)，开启一段令人兴奋的探索之旅！

## 技术支持

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>