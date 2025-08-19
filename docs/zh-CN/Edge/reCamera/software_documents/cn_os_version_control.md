---
description: 版本控制，例如升级或回滚
title: 操作系统版本控制
keywords:
  - Edge
  - reCamera
  - recamera
  - 操作系统
  - 版本升级
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.webp
slug: /cn/recamera_os_version_control
sidebar_position: 1
last_update:
  date: 2025/2/14
  author: Parker Hu & Dawn Yao
---

# 使用 Web 进行操作系统更新/升级指南

使用 Type-C 数据线将 reCamera 连接到您的计算机，并在计算机的浏览器中访问 `http://192.168.42.1/#/system`，如果通过网络访问设备，请替换 IP 地址。在升级之前，请通过检查 `ip_address/#/network` 确保 reCamera 已连接到互联网。

点击 `System` 配置，如果有新固件发布，点击 `Apply` 更新/升级设备系统。如果未自动检测到新固件，按钮文本将显示为 "Check"。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image.png" /></div>

等待进度条完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-1.png" /></div>

点击 `Restart` 完成系统更新/升级。**刷新浏览器**，大约 30 秒后重新连接设备。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-2.png" /></div>

系统会自动检查是否有可更新/升级的新固件版本。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-3.png" /></div>

## 使用命令进行操作系统版本管理

### 通过 OTA 进行设备管理

#### 更新/升级到最新的 OTA 版本

您可以在[此处](https://github.com/Seeed-Studio/reCamera-OS)查看 reCamera OS 的最新版本。

手动更新/升级到最新的 OTA 固件：
```bash
# 升级到最新固件版本
sudo /mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/latest 

sudo /mnt/system/upgrade.sh start
```

或者

#### 更新/升级或回滚到任何特定的 OTA 版本

如果您希望部署特定版本，可以使用以下命令：
```bash
# 例如，安装 0.1.4 版本
sudo /mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/tag/0.1.4

sudo /mnt/system/upgrade.sh start
```

如果您正在开发操作系统，并且在 GitHub 上有自己的分支，也可以使用您的分支链接更新/升级系统版本：
```bash
sudo /mnt/system/upgrade.sh latest https://github.com/your-user-name/reCamera-OS/releases/your-version-file-address

sudo /mnt/system/upgrade.sh start
```

#### 针对 0.1.3 及以下版本的操作系统

如果您希望使用 `upgrade.sh` 进行 OTA，但您的版本是 **0.1.3 或以下**，请按照以下步骤操作：

1. 使用 USB Type-C 数据线将设备连接到计算机，然后访问 **192.168.42.1/#/terminal**。在文件夹中找到 `upgrade.sh` 脚本：
```bash
cd /mnt/system
ls
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/find_upgrade_script.png" /></div>

2. 更改此脚本的权限：
```bash
sudo rootfs_rw on
sudo chmod +x upgrade.sh
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/change_file_permission.png" /></div>

3. 删除旧的 `upgrade.sh` 文件，并检查是否成功删除：
```bash
sudo rm upgrade.sh
ls
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/remove_script.png" /></div>

4. 前往 [Github](https://github.com/Seeed-Studio/reCamera-OS/blob/sg200x-reCamera/external/ramdisk/rootfs/overlay/cv181x_musl_riscv64/system/upgrade.sh) 下载最新的 `upgrade.sh` 脚本。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/download_sh_github.png" /></div>

5. 更改文件夹权限：
```bash
sudo chmod 777 /mnt/system
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/change_folder_permission.png" /></div>

6. 打开桌面/PC 终端，将下载的脚本复制到 reCamera 的同一文件夹下：
```bash
sudo scp your_folder_address/upgrade.sh recamera@192.168.42.1:/mnt/system/
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/scp_file.png" /></div>

7. 返回网页检查新的 `upgrade.sh` 是否已存在：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/new_script.png" /></div>

8. 为了安全起见，将文件夹权限改回：
```bash
sudo chmod 755 /mnt/system
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/chang_back_permission.png" /></div>

9. 现在，您可以尝试使用 [OTA 命令](#device-management-by-ota) 进行任何版本控制。

### 通过本地包进行设备管理

您还可以使用本地 OTA 包手动更新/升级固件。OTA 固件可在[此处下载](https://github.com/Seeed-Studio/reCamera-OS/releases/)。使用如 scp 等工具将文件传输到 reCamera：
```bash
sudo scp sg2002_reCamera_0.1.3_emmc_ota.zip recamera@ip_address:~/
```

然后使用 bash 部署：
```bash
sudo /mnt/system/upgrade.sh start sg2002_reCamera_0.1.3_emmc_ota.zip
```

:::note
如果您没有足够的权限将文件传输到 reCamera，可以通过输入 `rootfs_rw on/off` 将系统文件设置为可读或可写。
:::

### 手动恢复出厂设置

此命令可将 reCamera 恢复到出厂设置。如果使用此命令，您的所有用户数据（如 Node-RED 流程和本地存储）将被删除：
```bash
sudo /mnt/system/upgrade.sh recovery
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>