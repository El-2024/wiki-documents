---
description: reCamera 的基础 Linux 命令
title: Linux 基础知识
keywords:
  - Edge
  - reCamera
  - recamera
  - linux 命令
  - linux
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.png
slug: /cn/recamera_linux_fundamentals
sidebar_position: 4
last_update:
  date: 2/14/2025
  author: Parker Hu & Dawn Yao
---
# Linux 基础知识

## **1. Linux 系统简介**

Linux 是一种开源的、类 Unix 的操作系统，因其可靠性、灵活性和高性能而被广泛采用。它广泛应用于服务器、桌面、移动设备和嵌入式系统中。

### Linux 的主要特点：

- **免费和开源**：Linux 的源代码是免费的，用户可以根据自己的需求进行修改。
- **多任务处理**：Linux 支持同时运行多个应用程序。
- **安全性**：以其强大的安全功能而闻名，例如文件权限、用户管理和 SELinux。
- **可移植性**：Linux 可以运行在多种硬件架构上。

## **2. Linux 文件系统简介**

Linux 以层次结构组织其文件和目录。在该结构的顶部是根目录 `/`，其他目录从此处分支。

### Linux 文件系统中的关键目录：

- `/`：根目录。它是 Linux 文件系统的起点。
- `/home`：用户主目录。每个用户都有一个子目录（例如 `/home/user`）。
- `/etc`：系统的配置文件。
- `/bin`：基本的二进制文件和命令。
- `/var`：可变数据，例如日志和数据库。
- `/tmp`：临时文件。
- `/dev`：表示硬件组件的设备文件。

## **3. 使用终端和命令行**

终端是与 Linux 操作系统交互的强大工具。它允许用户通过命令执行各种任务。

**打开终端：**

- 访问地址：http://192.168.42.1/#/terminal（默认用户名和密码：`recamera`）
- 通过 ssh [工具](https://mobaxterm.mobatek.net/) 远程登录。
您可以使用以下命令远程访问 reCamera：
```
ssh recamera@recamera.local
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ssh_connection.png" /></div>

然后按下 ```Enter```，您现在应该可以远程控制 reCamera。

### 基本命令行结构：

Linux 中的命令遵循以下通用结构：

```bash
command [options] [arguments]
```

例如，`ls -l /home/recamera` 将以长格式列出 `/home/recamera` 目录中的所有文件。

## **4. 用户 recamera 和 root**

首次使用 reCamera 时，您需要重置默认的 recamera 密码，该密码也是登录终端时使用的密码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-1.png" /></div>

:::note

在终端中输入密码时，内容不会显示。输入密码后按 `Enter` 执行。

:::

在某些特殊操作中可能会出现权限不足的问题。要执行命令，您需要在命令前添加 sudo，或者切换到 `root` 用户以执行系统中的所有命令。

默认情况下，root 用户未设置密码；使用以下命令设置密码。

- `sudo passwd root`：更改用户密码
- `su root`：切换到 root 用户。

:::note

root 用户可以修改与系统相关的文件，这可能导致系统故障。请谨慎操作。

:::

## **5. 基本 Linux 命令**

以下是一些基本命令及其用法：

### 文件和目录管理：

- `pwd`：打印当前工作目录。
- `ls`：列出当前目录中的文件和目录。
- `cd [directory]`：切换当前目录。
- `mkdir [directory]`：创建一个新目录。
- `rm [file]`：删除一个文件。
- `rmdir [directory]`：删除一个空目录。

### 文件权限和所有权：

- `chmod [permissions] [file]`：更改文件的权限。
- `chown [owner] [file]`：更改文件的所有者。

### 文件操作：

- `cp [source] [destination]`：复制文件或目录。
- `mv [source] [destination]`：移动或重命名文件或目录。
- `cat [file]`：显示文件内容。
- `nano [file]`：在文本编辑器（Nano）中打开文件。

### 系统信息：

- `top`：显示实时系统进程和资源使用情况。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-2.png" /></div>
- `df`：显示磁盘空间使用情况。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/linux_fundamentals/image-3.png" /></div>
- `free`：显示内存使用情况。
- `uname -r`：显示内核版本。

## 6. 文件传输

Linux 提供了多种方法在系统之间传输文件，无论是通过本地网络还是互联网。以下是 Linux 中常用的文件传输工具和协议。

### **使用 SCP（安全复制协议）**

SCP 允许您在本地和远程主机之间，或两个远程主机之间安全地复制文件。

#### 基本 SCP 命令：

- 从本地复制文件到远程主机：

  ```bash
  scp [file] username@remote_host:/path/to/destination
  ```

- 从远程主机复制文件到本地：

  ```bash
  scp username@remote_host:/path/to/file /local/destination
  ```

- 复制目录（使用 `-r` 标志进行递归复制）：

  ```bash
  scp -r [directory] username@remote_host:/path/to/destination
  ```

#### 示例：

将文件从本地机器复制到远程服务器：

```bash
scp myfile.txt recamera@192.168.1.100:/home/recamera/
```

### **使用 SFTP（安全文件传输协议）**

SFTP 是另一种安全的文件传输方法，它基于 SSH 协议运行。SFTP 允许您交互式地管理远程服务器上的文件。

#### 基本 SFTP 命令：

1. 启动 SFTP 会话：

   ```bash
   sftp username@remote_host
   ```

2. 连接后，使用以下命令：

   - `ls`：列出远程目录中的文件。
   - `cd [directory]`：切换远程目录。
   - `get [file]`：从远程服务器下载文件到本地机器。
   - `put [file]`：将本地机器上的文件上传到远程服务器。
   - `exit`：关闭 SFTP 会话。

#### 示例：

将文件上传到远程服务器：

```bash
sftp recamera@192.168.42.1
sftp> put myfile.txt /home/user/Documents/
```

## **7. 硬件命令**

您可以参考此[文档](https://wiki.seeedstudio.com/cn/recamera_hardware_and_specs/#hardware-interface)来控制 recamera 设备上的硬件。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>