---
description: 本文介绍如何使用电子纸面板与 TRMNL 配合工作。
title: 与 TRMNL 配合使用
keywords:
- ePaper display
- TRMNL
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.webp
slug: /cn/xiao_7_5_inch_epaper_panel_with_trmnl
sidebar_position: 4
last_update:
  date: 05/19/2025
  author: Citric
---

# XIAO 7.5 英寸电子纸面板与 TRMNL 配合使用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/202.png" style={{width:900, height:'auto'}}/></div>

<br></br>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
</div>


## 什么是 [TRMNL](https://trmnl.app/)？

TRMNL 是一个创新平台，旨在帮助人们在日益分散注意力的数字世界中保持专注和冷静。TRMNL 成立于 2023 年，迅速成为 E Ink® 仪表板管理的领先解决方案，为显示信息提供了独特的方法，避免了传统屏幕的持续通知和干扰。

从核心来看，TRMNL 建立在这样的理念之上：技术应该增强我们的生活，而不需要持续的关注。该平台通过 E Ink® 显示器提供了一种优雅的方式来一目了然地查看重要信息，创造了更加专注且较少侵扰的技术体验。

### 为什么将 TRMNL 与 XIAO 7.5" 电子纸面板集成？

将 TRMNL 与我们的 XIAO 7.5" 电子纸面板集成带来了几个引人注目的好处：

- **简化仪表板创建**：TRMNL 不断增长的应用程序和集成库使得创建自定义信息显示变得容易，无需复杂的编程
- **低功耗**：TRMNL 高效软件与我们 E Ink® 显示器最小功耗要求的结合创造了极其节能的解决方案
- **无干扰信息**：获取您需要的信息，而无需传统屏幕相关的持续通知和眼疲劳
- **定期更新**：TRMNL 的积极开发意味着每周都会添加新功能和集成，不断扩展您显示器的可能性
- **开发者友好**：通过 TRMNL 的开放 API 和开发者工具，您可以为特定需求创建自定义插件和集成

通过将 TRMNL 强大的平台与我们高质量的 E Ink® 显示器相结合，我们为用户提供了一个优雅的解决方案，用于创建个性化、低功耗的信息仪表板，既尊重他们的注意力，也尊重他们的时间。

## TRMNL 入门

在深入设置您的 XIAO 7.5" 电子纸面板与 TRMNL 之前，让我们收集必要的材料并准备您的 TRMNL 凭据。

### 所需材料

对于此集成，您需要：

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO 7.5" 电子纸面板</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/209.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

### TRMNL 账户设置和 TRMNL 访问权限

在将您的电子纸面板连接到 TRMNL 之前，您需要：

1. **购买 TRMNL 访问权限**

   - 在以下网址购买 TRMNL 网络应用程序 + 设备功能的访问权限：[https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
   - 这为您提供了使用 TRMNL 平台所需的凭据
   - 前往 [https://usetrmnl.com/claim-a-device](https://usetrmnl.com/claim-a-device) 激活虚拟设备（购买后可能需要最多 10 分钟）

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/211.png" style={{width:700, height:'auto'}}/></div>

2. **创建 TRMNL 账户**

   - 访问 [TRMNL 网站](https://usetrmnl.com)
   - 点击"注册"创建新账户
   - 按照注册流程操作

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/210.png" style={{width:900, height:'auto'}}/></div>

:::note
您的 TRMNL 凭据是敏感信息。切勿公开分享或将其提交到版本控制系统。
:::

一旦您拥有材料并购买了 TRMNL 访问权限，您就可以继续将电子纸面板连接到 TRMNL 平台。如果您遇到任何问题或有疑问，可以直接通过 team@usetrmnl.com 联系 TRMNL 团队。


### 固件刷写

要让您的 XIAO 7.5" 电子纸面板与 TRMNL 配合工作，您需要将适当的固件刷写到您的设备上。有三种推荐的方法：

#### 方法 1：通过 TRMNL 网络刷写器刷写（最简单）

1. **前往 TRMNL 网络刷写器**

:::tip
请使用 **FW 1.5.12** 或更新版本的固件以获得 Seeed 兼容性。
:::

   - 访问 [https://usetrmnl.com/flash](https://usetrmnl.com/flash)
   - 此工具允许您直接从浏览器刷写设备。
   - 按照屏幕上的说明完成刷写过程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/224.png" style={{width:700, height:'auto'}}/></div>

#### 方法 2：从源代码构建和刷写（适用于高级用户/开发者）

1. **克隆固件仓库**

  - 访问[官方固件仓库](https://github.com/usetrmnl/trmnl-firmware)并克隆它：

    ```
    git clone https://github.com/usetrmnl/trmnl-firmware.git
    ```

:::tip

有时我们会更新代码并需要向 TRMNL 提交 PR 并在显示之前进行审查，如果您想要第一时间使用最新的固件版本，您也可以使用 Seeed Project 下的 TRMNL 仓库。

  - 访问 [Seeed 仓库](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project) 并克隆它：
  
    ```
    git clone https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project.git
    ```
:::

2. **安装 PlatformIO**

   - 将 [PlatformIO](https://platformio.org/) 安装为 VSCode 扩展或通过命令行安装。

3. **打开项目**

   - 在 VSCode 中打开克隆的 `firmware` 文件夹。

4. **选择正确的环境**

   - 在 `platformio.ini` 中，选择 `seeed_xiao_esp32c3` 环境。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/214.png" style={{width:1000, height:'auto'}}/></div>

5. **连接您的设备**

   - 插入您的 XIAO 7.5" ePaper Panel。

6. **构建和上传**

   - 在 PlatformIO 中，点击"Upload"按钮，或运行：
     ```
     pio run --target upload
     ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

   - 固件将被编译并上传到您的设备。


## 配置 Wi-Fi 并向 TRMNL 发送播放列表

要将您的 XIAO 7.5" ePaper Panel 与 TRMNL 一起使用并发送播放列表，您首先需要将设备连接到您的 Wi-Fi 网络。这个过程称为"WiFi 配对模式"，通过一个简单的强制门户完成。请按照以下步骤操作：

> 💡 **Wi-Fi 故障排除？** 如果您在将设备连接到 Wi-Fi 时遇到问题，请参考 [TRMNL 设备 Wi-Fi 故障排除指南](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting) 以获得常见网络和路由器兼容性问题的解决方案。

### 开机并进入配置模式

- 刷入 TRMNL 固件并为设备通电后，如果尚未连接到 Wi-Fi，它将自动进入配置模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

### 连接到 TRMNL Wi-Fi

- 在您的**手机**或**电脑**上，打开可用 Wi-Fi 网络列表。
- 查找名为 **TRMNL** 的网络并连接到它。（默认情况下不需要密码。）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### 打开强制门户

- 连接后，打开网络浏览器（如 Chrome 或 Edge）。
- 设备应该自动重定向您到 TRMNL 配置页面。如果没有，请在浏览器中手动访问 [http://4.3.2.1](http://4.3.2.1)。

### 输入您的 Wi-Fi 凭据

- 在配置页面上，您将看到可用 Wi-Fi 网络的列表。
- **选择您的 2.4GHz Wi-Fi 网络**（TRMNL 不支持 5GHz 网络）。
- 输入您的 Wi-Fi 密码。
- 点击**保存**或**连接**。

> ⚠️ **重要：** 确保使用 2.4GHz Wi-Fi 网络。ESP32-C3 芯片不支持 5GHz 网络。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### 设备连接到您的网络

- 设备将尝试连接到您的 Wi-Fi。
- 成功后，它将断开与 TRMNL Wi-Fi 的连接并加入您的家庭网络。
- 窗口将显示设备的 MAC 地址。**请记录 MAC 地址**，因为您在后续步骤中需要它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **注意：** MAC 地址在强制门户中只显示 1-2 秒。如果您错过了，您也可以：
> - 从 VS Code > PlatformIO 构建/上传日志中检索它。
> - 使用 [usetrmnl.com/flash](https://usetrmnl.com/flash) 方法并在刷写期间检查 Chrome/Edge/Firefox 开发者控制台中的 MAC 地址。
> - 在您的路由器或 Mesh 网络应用的已连接设备列表中找到它。
>
> 有关更多详细信息和截图，请参阅官方指南：[查找您的 TRMNL MAC 地址](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address)

### 访问 TRMNL Web 界面

在您的 XIAO 7.5" ePaper Panel 连接到您的 Wi-Fi 并记录了其 MAC 地址（设备 ID）后，您可以将其添加到您的 TRMNL 账户：

1. **打开 TRMNL Web 界面**  
   - 在您的电脑或移动设备上，打开浏览器并访问 [TRMNL web 界面](https://trmnl.app)。

2. **转到设备页面**  
   - 在 TRMNL 界面中，导航到**设备**部分。

3. **添加新设备**  
   - 点击**添加新设备**按钮，通常位于右上角或设备页面的中央。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. **输入设备 ID**  
   - 在弹出窗口中，输入您购买 TRMNL 访问权限时收到的设备 ID（这不是 MAC 地址）。使用购买确认邮件或 TRMNL 仪表板中的设备 ID。
   - 点击**添加新设备**完成该过程。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. **注册 XIAO 7.5" 设备 MAC 地址**

   为了在 XIAO 电子纸面板和 TRMNL 之间建立连接，我们需要在 TRMNL 设置页面中绑定正确的设备 MAC 地址。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

- 您可以在 PlatformIO 上传过程中获取 MAC 地址（检查上传日志），或从配置门户获取（Wi-Fi 设置后会显示）。
   - 提前添加您的 MAC 地址有助于确保顺畅的设备接入过程和设备管理。

   - 然后您可以为您的 ePaper Panel 设置自定义名称，并根据需要调整其他设置。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

您的 XIAO 7.5" ePaper Panel 现在已链接到您的 TRMNL 账户！您现在可以直接从 TRMNL 界面向您的显示器发送播放列表、图像或其他内容。

> 💡 **提示：** 如果您有多个 ePaper Panel，请使用每个设备的唯一设备 ID 为每个设备重复上述步骤。

:::caution
在 TRMNL 网页界面中添加您的设备后，请转到设备的设置页面并**关闭** **固件早期发布**和**启用 OTA 更新**这两个选项。

如果这些选项保持启用状态，您的设备在连接到互联网时可能会自动从 TRMNL 下载并安装固件更新。这些更新是为官方 TRMNL 硬件设计的，**与 XIAO 7.5" ePaper Panel 不兼容**。安装不兼容的固件可能导致您的设备故障或无响应。

请始终保持这两个选项禁用，以确保您的 XIAO ePaper Panel 稳定运行。
:::

## 了解 TRMNL 播放列表功能

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

TRMNL 播放列表功能允许您精确控制在 ePaper Panel 上显示什么内容以及何时显示。以下是主要部分和控件的详细说明，如上面的截图所示：

### 播放列表概览
- **播放列表标题**：在顶部，您可以看到您的 TRMNL 设备名称（例如，"MengDu's TRMNL"）。
- **显示时间范围**：您可以设置播放列表活跃的时间范围（例如，从 00:00 到 23:45）。
- **更新间隔**：选择显示更新的频率（例如，每 5 分钟）。
- **添加组 / 添加插件**：使用这些按钮将您的播放列表组织成组或添加新的内容插件（如天气、日历或自定义文本）。

### 播放列表项目
播放列表中的每一行代表将在您的 ePaper Panel 上显示的屏幕或小部件（仅供参考）：

1. **天气**
   - 显示您选择位置的当前天气信息。
   - 绿色的"正在显示"标签表示此屏幕当前正在您的设备上显示。
2. **今年剩余天数**
   - 显示当前年份剩余天数的倒计时（例如，"2025"）。
   - 标签（例如，"9 天前"）显示此屏幕上次更新或显示的时间。
3. **自定义文本**
   - 让您显示任何自定义消息（例如，"Hello World"）。
   - 也显示上次更新的时间。

对于每个项目，您有几个控件：
- **设置（齿轮图标）**：配置插件的选项。
- **删除（X 图标）**：从播放列表中移除项目。
- **预览（眼睛图标）**：预览屏幕的外观。
- **重新排序（条形图标）**：拖动以更改屏幕显示的顺序。

### 智能播放列表
- **智能播放列表选项**：在底部，您可以选择是否自动跳过内容未更改的屏幕（例如，"从不跳过屏幕"）。

> 📖 想了解更多？阅读[智能播放列表博客文章](https://usetrmnl.com/blog/smart-playlists)获取高级技巧和详细信息。

这个灵活的播放列表系统让您完全自定义 ePaper Panel 显示的内容、更新频率和显示顺序。您可以混合搭配不同的插件来创建符合您需求的个性化仪表板。

## 探索 TRMNL 插件

TRMNL 的插件系统是让您的电子纸面板真正强大和可定制的关键。插件是模块化的应用程序或小部件，您可以将其添加到设备中以显示各种信息和内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

### 什么是插件？
插件是独立的内容块，可以显示天气、日历事件、股票价格、RSS 订阅、励志名言、GitHub 活动等内容。您可以混合搭配插件来创建符合您需求的仪表板。

### 已连接的插件
在插件页面顶部，您将看到已连接到 TRMNL 账户的所有插件。这些插件已准备好添加到您的播放列表中并在电子纸面板上显示。示例包括：
- **天气**：显示当前天气状况。
- **今年剩余天数**：倒计时到年底。
- **股票价格**：跟踪您喜爱的股票。
- **RSS 订阅**：显示新闻或博客更新。
- **Reddit、Hacker News**：显示热门帖子。
- **语言学习、励志名言、自定义文本**：使用学习工具或自定义消息个性化您的显示。

### 插件市场
在您已连接的插件下方，您会找到插件市场。在这里您可以浏览、搜索和发现要添加到设备的新插件。插件按类别和标签（如 #productivity、#news、#ecommerce 等）组织，便于找到您需要的内容。

- **浏览和搜索**：使用搜索栏或标签快速找到您感兴趣的插件。
- **添加插件**：点击任何插件将其连接到您的账户并开始在播放列表中使用。

开发者甚至可以创建和发布自己的插件供他人使用，使生态系统不断扩展新的可能性（[了解更多关于插件创建的信息](https://docs.usetrmnl.com/go/plugin-marketplace/introduction)）。

---

如果您对使用 TRMNL 有任何疑问或想探索更多高级功能，欢迎阅读官方 TRMNL 文档获取更多信息：[https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go)


## 特别感谢

特别感谢整个 **TRMNL 团队** 对本项目的大力支持和宝贵帮助。特别是，我们要感谢 **Bogdan**、**Ryan Kulp**、**Fr3d**、**Schappi** 以及所有其他团队成员在整个开发和文档编写过程中的奉献和协助。

您的专业知识和承诺使这种集成成为可能，并大大改善了 XIAO 7.5" 电子纸面板社区的用户体验。


## 资源

- **[STP]**：[3D 模型外壳](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**：[电子纸驱动板原理图 PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)
- **[GITHUB]**：[TRMNL 固件仓库](https://github.com/usetrmnl/firmware)
- **[GITHUB]**：[Seeed_TRMNL_Eink_Project 仓库](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>