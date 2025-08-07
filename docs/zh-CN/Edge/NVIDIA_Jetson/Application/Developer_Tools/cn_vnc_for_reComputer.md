---
description: 本文档逐步介绍如何在 reComputer Jetson 上使用 VNC 远程桌面工具。
title: 在 reComputer Jetson 上使用 VNC
tags:
  - AI 模型部署
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/vnc_for_recomputer
last_update:
  date: 2024/9/30
  author: YaoHui Zhu
---

# 如何在 reComputer Nvidia Jetson 上使用 VNC 远程桌面工具

## 简介

VNC 是一种远程桌面工具，允许您通过其他 PC 设备远程控制 reComputer Nvidia Jetson，并实时访问图形桌面。本文档描述了如何在 reComputer Nvidia Jetson 上安装和使用 VNC。

## 前置条件
- 一台 Jetson 设备：适用于 [所有 Seeed Studio Nvidia 设备](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

- [一个 HDMI 虚拟插头](https://www.cytron.io/p-full-size-hdmi-dummy-plug-for-headless-setup)。 
:::note
如果您不想连接显示器，则必须使用 **`HDMI 虚拟插头`** 来启用远程桌面控制。
:::

<div align="center">
    <img width={300} 
     src="https://static.cytron.io/image/cache/catalog/products/CA-HDMI-DMP/HDMI%20USB%20(a)-800x800.png" />
</div>

## 开始使用
### 安装 VNC
 **步骤 1.** 在 Jetson 上安装 VNC：
 ```bash
  sudo apt update
  sudo apt install vino
 ```

 **步骤 2.** 启用 VNC 服务器在每次登录时启动：
 ```bash
  cd /usr/lib/systemd/user/graphical-session.target.wants
  sudo ln -s ../vino-server.service ./.
 ```

 **步骤 3.** 配置 VNC 服务器：
 ```bash
  gsettings set org.gnome.Vino prompt-enabled false
  gsettings set org.gnome.Vino require-encryption false
 ```

 **步骤 4.** 设置访问 VNC 服务器的密码：
 ```bash
 # 将 thepassword 替换为您想要设置的密码
  gsettings set org.gnome.Vino authentication-methods "['vnc']"
  gsettings set org.gnome.Vino vnc-password $(echo -n 'thepassword'|base64)
 ```

 **步骤 5.** 编辑 `org.gnome` 以添加 `enabled` 键的参数：
 ```bash
  cd /usr/share/glib-2.0/schemas
  sudo cp org.gnome.Vino.gschema.xml org.gnome.Vino.gschema.xml.old
  sudo vi org.gnome.Vino.gschema.xml 
 ```
将以下代码粘贴到指定位置，确保格式与下方一致。

  ```bash
  <key name='enabled' type='b'>
        <summary>Enable remote access to the desktop</summary>
        <description>
                If true, allows remote access to the desktip via the RFB
                protocol. Users on remote machines may then connect to the
                desktop using a VNC viewer.
        </description>
        <default>false</default>
      </key>
  ```

<div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig1.png" />
  </div>

### 编译并启动
 编译：

 ```bash
  sudo glib-compile-schemas /usr/share/glib-2.0/schemas
  sudo reboot
 ```
 启动：

 ```bash
  /usr/lib/vino/vino-server
 ```

## 从其他计算机连接到 VNC 服务

要从其他计算机连接，您需要知道 Jetson 开发套件的 IP 地址。在开发套件上运行 `ifconfig` 命令，并记下分配给 `eth0` 接口（如果使用以太网）、`wlan0` 接口（如果使用无线网络）或 `l4tbr0`（如果使用 USB 设备模式以太网连接）的 IP 地址。然后，您需要将 HDMI 虚拟插头连接到 Jetson。

- Windows:
  - 步骤 1：从[这里](https://www.realvnc.com/en/connect/download/viewer/)下载并安装 VNC viewer。
  - 步骤 2：启动 VNC viewer 并输入开发套件的 IP 地址。
  - 步骤 3：如果您已为 VNC 服务器配置了身份验证，请输入 VNC 密码。

- MacOS:
  - 步骤 1：打开 Finder 并从菜单栏中选择“前往 | 前往文件夹”。
  - 步骤 2：输入 “/System/Library/CoreServices/Applications” 并点击“前往”。
  - 步骤 3：打开名为“屏幕共享”的应用程序，并输入连接信息。例如：username@。
  - 步骤 4：点击“连接”。
  - 步骤 5：如果您已为 VNC 服务器配置了身份验证，请输入 VNC 密码。

- Linux: 以下示例使用 gvncviewer，但您喜欢的任何 VNC 客户端都应该可以正常工作。一个流行的替代方案是 remmina。
  - 步骤 1：通过以下命令安装 gvncviewer：

    ```bash
    sudo apt update
    sudo apt install gvncviewer
    ```
  - 步骤 2：启动 gvncviewer：
      ```bash
    gvncviewer 
    ```
  - 步骤 3：如果您已为 VNC 服务器配置了身份验证，请输入 VNC 密码。

## 启用 VNC 服务器在每次登录时启动：
**步骤 1.** 在应用程序中搜索 `Startup Application Preferences`（启动应用程序首选项）。
<div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig2.png" />
  </div>

**步骤 2.** 点击 `Add`（添加）按钮，您可以在 `Name`（名称）和 `Comment`（注释）字段中填写任意文本。在 `Command`（命令）字段中，添加以下指令：
```bash
nohup /usr/lib/vino/vino-server > /dev/null 2>&1 &
```

<div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig3.png" />
  </div>

点击 `Save`（保存）并重启 reComputer。断开显示器连接，并将 **HDMI Dummy Plug** 插入 Jetson。现在，您可以通过 VNC 验证。

<div align="center">
      <img width={700} 
      src="https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig4.png" />
  </div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时拥有顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>