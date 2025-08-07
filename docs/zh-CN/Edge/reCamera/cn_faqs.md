---
description: 连接网络及一些潜在的故障排查
title: 常见问题解答
keywords:
  - Edge
  - reCamera
  - 网络
  - 网络故障排查
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/recamera_network_connection
sidebar_position: 4
last_update:
  date: 2025/04/08
  author: Parker Hu
---

# 常见问题解答

如果您在为 reCamera 配置网络时遇到 USB 连接设备无法识别 reCamera 的情况，或者在配置网络后出现网络连接失败的问题，请参考本文。

需要对计算机的网络环境进行修改和配置，包括在 Windows 系统上安装驱动程序、在 Linux 系统上查询网卡以及在 Mac 系统上配置网络优先级。

## 设置工作环境

### USB 网络设置
为了使用 USB 网络，我们在系统中默认启用了 UsbNcm 和 DHCP。
UsbNcm 在 Linux、macOS 和最新的 Windows 系统上无需驱动。您可以直接使用 `ssh recamera@192.168.42.1` 登录 reCamera 的终端，`密码 = recamera`。

- [Windows](#jump1)
- [Linux](#jump2)
- [MacOS](#jump3)

### <span id="jump1"> Windows </span>
确保您的计算机上正确安装了 Ncm 驱动程序，如下图所示。您可以通过以下路径检查：设备管理器 -> 网络适配器。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/002.png" /></div>

如果您的计算机没有此驱动程序，请按照以下步骤安装 Ncm。

#### 为 Windows 安装 NCM

**步骤1**:  
按下 `win+x` 并选择 `设备管理器`。  
在 `其他设备` 中找到未识别的设备并选择 `更新驱动程序`。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/003.png" /></div>

**步骤2**:  
选择 `浏览我的计算机以查找驱动程序`。

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/004.png" /></div>

**步骤3**:  
选择 `让我从计算机上的可用驱动程序列表中选取`。

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/005.png" /></div>

**步骤4**:  
选择 `网络适配器`，然后点击 `下一步`。

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/014.png" /></div>

**步骤5**:  
选择 `Microsoft` -> `UsbNcm Host Device`，然后点击 `下一步`。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/006.png" /></div>

**步骤6**:  
当弹出警告栏时，选择 `是`。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/007.png" /></div>

**步骤7**:  
在终端窗口中输入 `ping 192.168.42.1`。  
<br />
以下输出表明您已成功连接到 reCamera。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/008.png" /></div>

### <span id="jump2"> Linux </span>

无需额外设置，只需插入 USB 数据线。输入 `ifconfig`，您将看到 usb1 网络适配器。例如：192.168.42.89。设备的 IP 地址为 192.168.42.1。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/009.png" /></div>

### <span id="jump3"> MacOS </span>

在系统设置 -> 网络中检查 USB 网络适配器。设备的 IP 地址为 192.168.42.1。

## 计算机网络错误

### Windows

如果您的 Windows 10 系统计算机在使用 reCamera 的 USB 网络后出现网络访问问题，请按照以下步骤操作：

按下 `win+x`，点击控制面板。选择“所有控制面板项” -> “网络连接”。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/010.png" /></div>

右键单击 UsbNcm Host Device。选择 `属性` -> `TCP/IPv4` -> `属性` -> `高级` -> 取消勾选 `自动跃点` -> 在 `接口跃点` 字段中输入 `255` -> 点击 `确定`
<br />

然后您的网络将恢复正常。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/011.png" /></div>

### Mac

如果您的计算机运行的是 MacOS，您只需要将计算机网络适配器的 UsbNcm 网络适配器优先级设置为最后。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/012.png" /></div>

具体设置如下：

**步骤1**：选择 `系统设置`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/015.png" /></div>

**步骤2**：您将看到以下顺序，我们需要对其进行更改。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/016.png" /></div>

**步骤3**：将其拖动到最底部，然后点击它。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/017.png" /></div>

**步骤4**：选择 `设置服务顺序`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/018.png" /></div>

**步骤5**：将 NCM 拖动到 Wi-Fi 下方，然后点击 `确定`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/019.png" /></div>

**步骤6**：最后，您应该看到如下所示的设置

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/020.png" /></div>


## 资源

[reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

[reCamera 系列](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

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