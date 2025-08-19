---
description: 使用 Allxon 进行 Jetson Linux 的空中更新
title: 使用 Allxon 进行 NVIDIA Jetson 的 OTA 更新
keywords:
- 软件 Allxon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Update-Jetson-Linux-OTA-Using-Allxon
last_update:
  date: 2023/1/13
  author: jianjing Huang
---

# 使用 Allxon 进行 Jetson Linux 的空中更新

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/thumb.png" alt="pir" width="1000" height="auto"/></p>

## 简介

通常情况下，NVIDIA 提供了“OTA Payload Package Update”（OTA 负载包更新）机制，允许用户将 Jetson 设备更新到更新版本的 JetPack。尽管更新 Jetson 设备的操作系统看似方便，但用户需要额外付出一些努力。也就是说，用户需要托管一个 OTA 服务器来将 OTA 负载包传递到 Jetson 设备。这对于用户来说是一个巨大的工作量，尤其是在生成 OTA 负载包的基础上。

现在，您无需再为此担心。[Allxon](https://www.allxon.com) 可以通过 Allxon DMS 门户帮助您将 OTA 负载包传递到 Jetson 设备。对于负责生成 OTA 负载包的用户或制造商来说，上传 OTA 负载包非常简单。而对于希望为 Jetson 设备执行 OTA 负载包更新的用户来说，分发新版本的 OTA 负载包到设备群也非常容易。以上所有内容都在本 Wiki 中有详细的分步说明。所以，请继续阅读并开始使用 Allxon 对 Jetson 设备进行空中更新吧！

## 工作流程

工作流程如下：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/20.jpg" alt="pir" width="1000" height="auto"/></p>

我们希望制造商或开发人员向 Allxon 提供 OTA 负载包以进行验证。为什么 Allxon 希望这样做？这是因为 Allxon 想确保 OTA 负载包能够在相应的 Jetson 设备上正常工作。而由 Allxon 进行验证的好处是，Allxon 可以帮助您上传 OTA 负载包并确保其可用。在本指南的后续步骤中，您将会遇到这一过程。

## 支持的硬件

使用 Allxon 进行 OTA 负载包更新支持以下硬件：

- NVIDIA 官方开发套件：

  - NVIDIA® Jetson Xavier™ NX 开发套件
  - NVIDIA Jetson AGX Xavier 开发套件
  - NVIDIA Jetson TX2 开发套件

- Seeed 提供的载板：

  - Jetson SUB Mini PC
  - A203 载板
  - A203（版本 2）载板
  - A205 载板
  - A206 载板

**注意：** 在为上述载板选择 SoM 时，请确保使用 Jetson Xavier NX 或 Jetson TX2 NX 模块。Jetson Nano 模块不支持此机制。

## 前置条件

- 运行 JetPack（基础 BSP）的上述任意 Jetson 设备
- [已安装 Allxon DMS Agent](https://wiki.seeedstudio.com/cn/Allxon-Jetson-Getting-Started) 并与 Allxon DMS 门户配对的 Jetson 设备
- 安装了 Ubuntu 的主机 PC（推荐使用原生系统）
- HDMI 显示器和键盘（可选）

**注意：** 请注意，本指南中使用的主机 PC 是运行 Ubuntu 20.04 的机器。

## 入门指南

本指南分为两个主要部分。第一部分将介绍如何生成 OTA 负载包并上传到 Allxon DMS 门户。第二部分将介绍如何通过 Allxon DMS 门户对 Jetson 设备执行 OTA 负载包更新。

首先，通过执行以下命令检查当前安装在 Jetson 设备上的 L4T 版本：

```sh
cat /etc/nv_tegra_release
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/21.png" alt="pir" width="1000" height="auto"/></p>

现在我们将更新到 L4T 32.6.1。

### 生成 OTA 负载包并上传到 Allxon DMS 门户

在开始生成 OTA 负载包之前，以下是一些背景知识：

1. 什么是 OTA 负载包？

    - OTA 负载包用于将 Jetson 设备从较低版本 BSP 更新到较新版本。
    - 它需要基于 **BASE BSP** 和 **目标 BSP** 生成。
    - 这意味着即使目标 BSP 相同，但 BASE BSP 不同，OTA 负载包也会不同。
    - 此外，OTA 负载包仅包含文件的 **差异**，而不是整个目标 BSP 镜像。

2. Allxon 在此机制和流程中的角色是什么？

    - Allxon DMS 可以通过 DMS 门户协助您将 OTA 负载包传递到 Jetson 设备。
    - 制造商和开发人员只需将 OTA 负载包上传到 Allxon DMS 门户。
    - 最终用户只需在 Allxon DMS 门户上将相应的 OTA 负载包分配给设备组。

3. 在执行 OTA 负载包更新后，设备上是否有任何地方不会被擦除？

    - 我们发现路径 **"/ota"** 下的文件在 OTA 负载包更新后不会被擦除。
    - 用户可以在此处备份重要数据，并在 OTA 负载包过程中恢复这些数据。

#### 初始准备 - Base BSP

如前所述，OTA 负载包是基于 Base BSP 和目标 BSP 生成的。因此，在生成 OTA 负载包之前，我们需要准备 Base BSP 和目标 BSP。如何选择需要准备的 Base BSP？这取决于您想要更新的设备。例如，如果您想更新运行 JetPack 版本 4.4.4 的 Xavier NX 设备，那么您需要准备 Xavier NX 的 JetPack 版本 4.4.4 作为 Base BSP。

- **步骤 1.** 根据当前安装在 Jetson 设备上的版本，从 [这里](https://developer.nvidia.com/embedded/linux-tegra-archive) 选择 L4T 版本。

- **步骤 2.** 根据您的板卡下载 L4T 驱动包（BSP）和示例根文件系统。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/1.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 3.** 将两个文件放在同一目录中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/2.png" alt="pir" width="500" height="auto"/></p>

- **步骤 4.** 打开终端窗口，导航到上述目录并解压 L4T 驱动包（BSP）。

```sh
sudo tar -vxjf <Base_BSP_file_name>.tbz2
```

- **步骤 5.** 导航到解压后的 NVIDIA 驱动包的 **rootfs 目录**。

```sh
cd <Base_BSP_L4T_root>/Linux_for_Tegra/rootfs
```

- **步骤 6.** 将示例文件系统解压到 rootfs 目录。

```sh
sudo tar -jxpf ../../<rootfs_file_name>.tbz2
```

- **步骤 7.** 运行 apply_binaries.sh 脚本，将 NVIDIA 用户空间库复制到目标文件系统。

```sh
cd ..
sudo ./apply_binaries.sh
```

#### 初始准备 - 目标 BSP

接下来我们将准备目标 BSP。这将是设备上要更新的 BSP。

- **步骤 1.** 按照上述 **初始准备 - Base BSP** 部分中的 **步骤 1 - 步骤 7**，但这次根据设备上要更新的 BSP 下载必要的文件。

- **步骤 2.** 导航到目标 BSP 的 **rootfs/etc/init.d 目录**。

```sh
cd <Target_BSP_L4T_root>/Linux_for_Tegra/rootfs/etc/init.d
```

- **步骤 3.** 创建一个名为 **install_allxon_dms.sh** 的新文件。

```sh
sudo nano install_allxon_dms.sh
```

**注意：** 您可以使用任何文本编辑器。这里使用的是 **nano 文本编辑器**。

- **步骤 4.** 将以下代码复制到上述创建的文件中。

```sh
#!/bin/bash
    
DOWNLOAD_URL="https://get.allxon.net"
RESUME_DATA="/ota/resume_data.sh"
 
SYNCAGENT_FOLDER="/var/lib/SyncAgent"
AGENT_IN_OTA_SRC_DIR="/ota/agent"
TRIAL_TAG="${AGENT_IN_OTA_SRC_DIR}/trial.tag"
TRIAL_AGENT_SN="${AGENT_IN_OTA_SRC_DIR}/agentsn"
    
verify_nvidia_jetson() {
    if [ -f "/etc/nv_tegra_release" ]; then
        echo "这是 Jetson 平台。"
    else
        echo "这是非 Jetson 平台，退出进程。"
        exit 1
    fi
}
   
check_ota_folder() {
    if [ -d "/ota" ]; then
        echo "这是 OTA 负载包更新的情况。"
    else
        echo "这不是 OTA 负载包的情况。"
        exit 0
    fi
}
 
resume_agent_cache() {
    echo "恢复代理缓存"
    mkdir -p "${SYNCAGENT_FOLDER}"
 
    if [ -d "${AGENT_IN_OTA_SRC_DIR}/SyncAgent" ]; then
        echo " - 恢复 ${SYNCAGENT_FOLDER}"
        cp -r ${AGENT_IN_OTA_SRC_DIR}/SyncAgent/* ${SYNCAGENT_FOLDER}
    fi
 
    if [ -f "${TRIAL_AGENT_SN}" ]; then
        echo " - 恢复 ${TRIAL_AGENT_SN}"
        cp ${TRIAL_AGENT_SN} /var
    fi
}
 
remove_agent_cache() {
    echo "移除代理缓存"
 
    if [ -d "${AGENT_IN_OTA_SRC_DIR}" ]; then
        rm -rf ${AGENT_IN_OTA_SRC_DIR}
    fi
}
  
resume_data_after_ota() {
    if [ -f "${RESUME_DATA}" ]; then
        echo "找到文件 ${RESUME_DATA}，开始恢复数据。"
        chmod 777 ${RESUME_DATA}
        bash ${RESUME_DATA}
        rm ${RESUME_DATA}
    else
        echo "没有需要恢复的数据，跳过此过程。"
    fi
}
   
check_agent_exists() {
    dpkg -l | grep "$@"
}
 
install_agent() {
    if [ -f "${TRIAL_TAG}" ]; then
        wget -qO - "$DOWNLOAD_URL/linux/trial" | bash -s -- --upgrade
    else
        wget -qO - "$DOWNLOAD_URL/linux/enterprise" | bash -s -- --upgrade
    fi
}
    
do_install() {
    verify_nvidia_jetson
    check_ota_folder
    resume_data_after_ota  
    if check_agent_exists allxon-dms-agent; then
        echo "Allxon DMS Agent 已安装在系统中。"
    else
        echo "Allxon DMS Agent 不存在，准备安装。"
        resume_agent_cache
        install_agent
        #remove_agent_cache
    fi  
}
    
do_install
```

- **步骤 5.** 进入目标 BSP 的 **rootfs/etc/systemd/system** 目录

```sh
cd <Target_BSP_L4T_root>/Linux_for_Tegra/rootfs/etc/systemd/system
```

- **步骤 6.** 创建一个名为 **dms-install.service** 的新文件，并将以下代码复制到文件中

```sh
[Unit]
Description=Service for Auto Install Allxon DMS Agent
Documentation=https://dms.allxon.com/
Wants=network-online.target
After=network.target network-online.target

[Service]
Type=simple
ExecStart=/etc/init.d/install_allxon_dms.sh
StandardOutput=null
Restart=always
RestartSec=60
DefaultStartLimitInterval=3600s
DefaultStartLimitBurst=10

[Install]
WantedBy=multi-user.target
```

- **步骤 7.** 执行以下命令更改文件权限，并为目标 BSP 的 **dms-install.service** 创建符号链接

```sh
sudo chmod 644 ./etc/systemd/system/dms-install.service
sudo chmod 777 ./etc/init.d/install_allxon_dms.sh
sudo ln -s /etc/systemd/system/dms-install.service ./etc/systemd/system/multi-user.target.wants/dms-install.service
```

#### 目标 BSP 中的自动安装 Agent 机制

##### 背景

- 在大多数情况下，执行 OTA 负载包更新后，文件系统会被擦除为全新状态，只有一个地方不会被擦除，那就是 **"/ota"** 文件夹。
- 现在有一个严重的问题。由于文件系统被擦除，系统中没有 Allxon DMS Agent。在 OTA 负载包更新后，设备如何仍然能够连接到 Allxon DMS Portal 并帮助用户进行远程管理？
- 此外，如果用户希望在 OTA 负载包更新后恢复设备数据，我们如何帮助他们实现这一点？

##### 解决方案 1 - 自动安装企业版 Agent

- 为了让 Jetson 设备在完成 Jetpack 更新后自动安装企业版 Allxon DMS Agent，我们需要将脚本 **"install_allxon_dms.sh"** 放置在 OTA 负载包的系统目录 **"/etc/init.d/"** 下，同时将服务 **"dms-install.service"** 放置在 OTA 负载包中。
- 当设备在 OTA 负载包更新后启动时，系统会执行该脚本，然后安装企业版 Allxon DMS Agent。

##### 解决方案 2 - 恢复设备数据

- 为了恢复设备数据，用户应在执行 OTA 负载包更新之前，将需要恢复的数据放置在 Jetson 设备的 **"/ota"** 目录下。
- 此外，用户需要实现一个脚本来从 **"/ota"** 文件夹恢复数据，该脚本文件名应为 **"resume_data.sh"**。
- 一旦 **"/ota"** 下存在脚本 **"resume_data.sh"**，脚本 **"install_allxon_dms.sh"** 将执行 **"resume_data.sh"**，帮助用户从 **"/ota"** 文件夹恢复数据。该脚本在执行后会被删除，以防止无限循环。

#### 生成 OTA 负载包

在准备好 Base BSP 和 Target BSP 后，您只需使用我们提供的脚本来帮助生成 OTA 负载包。现在，让我们开始吧！

- **步骤 1.** 从 [此处](https://developer.nvidia.com/embedded/linux-tegra-archive) 导航到目标 BSP 的 L4T 版本，并点击 **Jetson Platform Over-The-Air Update Tools** 下载工具

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/3.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 2.** 将下载的 **Jetson Platform Over-The-Air Update Tools**（例如 ota_tools_R32.6.1_aarch64.tbz2）文件放置在目标 BSP 的 **Linux_for_Tegra** 文件夹中

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/4.png" alt="pir" width="500" height="auto"/></p>

- **步骤 3.** 创建一个名为 **generate_ota_payload.sh** 的新文件，并将其放置在任意位置（建议放置在上述相同文件夹中）

- **步骤 4.** 将以下代码复制到文件中

```sh
#!/bin/bash

BASE_BSP_PATH="<Base_BSP_L4T_root>/Linux_for_Tegra"
TOT_BSP_PATH="<Target_BSP_L4T_root>/Linux_for_Tegra"
 
OTA_TOOL="<ota_tools_file_name>.tbz2"
JETSON_MODEL="<name of Jetson SoM>"
BSP_VERSION="<Base_BSP_version--ex:R32-4>"
 
TARGET_FOLDER="<location of target folder>"
 
echo "1. Export variable BASE_BSP"
export BASE_BSP=${BASE_BSP_PATH}
 
echo "2. Export variable ToT_BSP"
export ToT_BSP=${TOT_BSP_PATH}
 
echo "3. Install OTA tool to ToT_BSP"
cd ${ToT_BSP}/../
tar xpf ${OTA_TOOL}
 
echo "4. Export variable ToT_BSP to TARGET_BSP"
export TARGET_BSP=${ToT_BSP}
 
echo "5. Check all exported variables"
echo " - BASE_BSP=${BASE_BSP}"
echo " - ToT_BSP=${ToT_BSP}"
echo " - TARGET_BSP=${TARGET_BSP}"
echo " - JETSON_MODEL=${JETSON_MODEL}"
echo " - BSP_VERSION=${BSP_VERSION}"
 
echo "6. Generate the base recovery image and recovery DTB. Go to TARGET_BSP folder"
cd ${TARGET_BSP}/
 
sudo ./tools/ota_tools/version_upgrade/build_base_recovery_image.sh ${JETSON_MODEL} ${BSP_VERSION} ${BASE_BSP} ${BASE_BSP}/rootfs ${TARGET_BSP}
 
echo "7. Generate the OTA update payload package. Go to TARGET_BSP folder"
cd ${TARGET_BSP}/
 
sudo ./tools/ota_tools/version_upgrade/l4t_generate_ota_package.sh ${JETSON_MODEL} ${BSP_VERSION}
 
echo "8. Copy ota_payload_package.tar.gz to ${TARGET_FOLDER}"
cp bootloader/${JETSON_MODEL}/ota_payload_package.tar.gz ${TARGET_FOLDER}
```

- **步骤 5.** 修改上述代码中的以下变量

  - BASE_BSP_PATH: Base BSP 的目录路径
  - TOT_BSP_PATH: Target BSP 的目录路径
  - OTA_TOOL: OTA 工具的文件名
  - JETSON_MODEL: 模型信息（请使用 [此页面](https://docs.nvidia.com/jetson/l4t/index.html#page/Tegra%20Linux%20Driver%20Package%20Development%20Guide/quick_start.html#wwpID0EAAPNHA) 查找对应的模型）
  - BSP_VERSION: Base BSP 的版本
  - TARGET_FOLDER: 用于存放生成的 OTA 负载包的目录路径

- **步骤 6.** 为 **generate_ota_payload.sh** 赋予可执行权限

```sh
chmod 777 generate_ota_payload.sh
```

- **步骤 7.** 执行脚本

```sh
sudo ./generate_ota_payload.sh
```

现在 OTA 负载包将会生成为 **ota_payload_package.tar.gz**，并存放在我们之前定义的 **TARGET_FOLDER** 中。

#### 准备用于上传的 OTA 负载包压缩文件

- **步骤 1.** 将之前下载的 **Jetson 平台 OTA 更新工具（例如 ota_tools_R32.6.1_aarch64.tbz2）** 复制到之前创建的 **TARGET_FOLDER** 中。

- **步骤 2.** 在 **TARGET_FOLDER** 中创建一个名为 **run_ota_payload.sh** 的文件，并将以下代码复制到文件中：

```sh
#!/bin/bash
    
OTA_TOOL="<ota_tools_file_name>.tbz2"
OTA_PAYLOAD="ota_payload_package.tar.gz"
    
WORK_DIR="/allxon_ota" # OTA 负载、工具和脚本在更新前应放置在此文件夹中
OTA_SRC_DIR="/ota" # 除非 eMMC 存储空间不足，否则无需修改此路径
TARGET_VERSION="<Target_BSP_version--ex:R32.6.1>"
  
DMS_BACKUP_SERVICE="dms-backup.service"
BACKUP_AGENT_CACHE="backup_agent_cache.sh"
   
release_space_rm_ota_files() {
    echo "释放未使用的文件和空间..."
   
    if [ -f "${OTA_PAYLOAD}" ]; then
        echo " - 删除 ${OTA_PAYLOAD}"
        sudo rm ${OTA_PAYLOAD}
    fi
   
    if [ -f "${OTA_TOOL}" ]; then
        echo " - 删除 ${OTA_TOOL}"
        sudo rm ${OTA_TOOL}
    fi     
}
  
enable_backup_agent_cache() {
    echo "启用备份代理缓存服务"
    chmod 777 ${BACKUP_AGENT_CACHE}
    chmod 644 ${DMS_BACKUP_SERVICE}
 
    cp ${BACKUP_AGENT_CACHE} /etc/init.d/
    cp ${DMS_BACKUP_SERVICE} /etc/systemd/system/
  
    systemctl daemon-reload
    systemctl enable ${DMS_BACKUP_SERVICE}
}
   
   
if [ ! -f "/etc/nv_tegra_release" ]; then
    sudo echo "不支持"
    exit 1
fi
    
REVISION=$(cat /etc/nv_tegra_release | cut -d "," -f 2 | cut -d " " -f 3 | sed 1q) > /dev/null
    
if [ "$REVISION" == "" ]; then
    echo "错误！"
    exit 1
else
    if [ "$REVISION" == "$TARGET_VERSION" ]; then
        echo "更新到 JetPack $REVISION 成功！"
        release_space_rm_ota_files
        exit 0
    else
        echo "当前版本为 JetPack $REVISION，需要更新！"
        enable_backup_agent_cache
    fi
fi
    
echo "1. 创建 ${OTA_SRC_DIR} 目录"
    
sudo mkdir -p ${OTA_SRC_DIR}
    
echo "2. 移动 ${OTA_PAYLOAD} 到 ${OTA_SRC_DIR}"
    
sudo mv ${OTA_PAYLOAD} ${OTA_SRC_DIR}
    
echo "3. 解压 ${OTA_TOOL}"
    
tar -jxvf ${OTA_TOOL}
    
echo "4. 设置变量 WORKDIR"
    
export WORKDIR=${WORK_DIR}
    
echo "WORKDIR=${WORKDIR}"
    
echo "5. 切换目录到 ${WORKDIR}/Linux_for_Tegra/tools/ota_tools/version_upgrade"
    
cd ${WORKDIR}/Linux_for_Tegra/tools/ota_tools/version_upgrade
    
echo "6. 执行 nv_ota_start.sh"
    
sudo ./nv_ota_start.sh /dev/mmcblk0 ${OTA_SRC_DIR}/ota_payload_package.tar.gz

```

- **步骤 3.** 根据需求和条件修改上述 **run_ota_payload.sh** 脚本中的变量：

  - OTA_TOOL（确保文件名是否正确）
  - OTA_PAYLOAD（确保文件名是否正确）
  - TARGET_VERSION（根据目标 BSP 版本，格式为 "Rxx.x.x"）

- **步骤 4.** 在 **TARGET_FOLDER** 中创建一个名为 **dms-backup.service** 的文件，并将以下代码复制到文件中：

```sh
[Unit]
Description=在关机前备份 Allxon DMS Agent 缓存
DefaultDependencies=no
Before=shutdown.target reboot.target halt.target
 
[Service]
Type=oneshot
User=root
Group=root
ExecStart=/etc/init.d/backup_agent_cache.sh
 
[Install]
WantedBy=halt.target reboot.target shutdown.target
```

- **步骤 5.** 在 **TARGET_FOLDER** 中创建一个名为 **backup_agent_cache.sh** 的文件，并将以下代码复制到文件中：

```sh
#!/bin/bash
 
SYNCAGENT_FOLDER="/var/lib/SyncAgent"
TRIAL_TAG="/usr/share/allxon-dms-agent/trial.tag"
TRIAL_AGENT_SN="/var/agentsn"
AGENT_IN_OTA_SRC_DIR="/ota/agent"
 
backup_agent_cache() {
    echo "备份代理缓存"
    sudo mkdir -p "${AGENT_IN_OTA_SRC_DIR}"
 
    if [ -d "${SYNCAGENT_FOLDER}" ]; then
        echo " - 复制 ${SYNCAGENT_FOLDER}"
        sudo cp -r ${SYNCAGENT_FOLDER} ${AGENT_IN_OTA_SRC_DIR}
    fi
 
    if [ -f "${TRIAL_TAG}" ]; then
        echo " - 复制 ${TRIAL_TAG}"
        sudo cp ${TRIAL_TAG} ${AGENT_IN_OTA_SRC_DIR}
 
        if [ -f "${TRIAL_AGENT_SN}" ]; then
            echo " - 复制 ${TRIAL_AGENT_SN}"
            sudo cp ${TRIAL_AGENT_SN} ${AGENT_IN_OTA_SRC_DIR}
        fi
    fi
}
 
backup_agent_cache
```

- **步骤 6.** 从终端窗口导航到 **TARGET_FOLDER**，并执行以下命令以创建包含上述文件的 zip 文件：

```sh
zip ota_payload.zip *
```

现在 **TARGET_FOLDER** 将如下所示，其中包含生成的 **ota_payload.zip** 文件：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/5.png" alt="pir" width="400" height="auto"/></p>

#### 上传 OTA 负载包压缩文件

在生成用于 OTA 负载包的 zip 文件后，我们可以开始将此 zip 文件上传到 Allxon DMS Portal 或您自己的存储中。

如果您希望 Allxon 进行验证并上传 zip 文件，只需通过[此处联系 Allxon](https://www.allxon.com/contact) 将此包交付给 Allxon。然后您可以跳过此部分。

如果您希望自行上传 zip 文件，请按照以下步骤操作：

- **步骤 1.** 访问 [Allxon DMS Portal](https://dms.allxon.com/) 并登录。

**注意：** 请确保您已按照[此 Wiki](https://wiki.seeedstudio.com/cn/Allxon-Jetson-Getting-Started) 在 Jetson 设备上安装 Allxon DMS Agent 并将其与 Allxon DMS Portal 配对。

- **步骤 2.** 导航到 **Applications** 页面并点击 **Register** 注册一个新应用。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/6.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 3.** 填写以下信息并点击 **Next**：

  - 应用名称：brand_model_BaseBSP_to_TargetBSP
  - 应用 GUID：brand_model_BaseBSP_to_TargetBSP
  - 平台：Linux

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/8.png" alt="pir" width="400" height="auto"/></p>

- **步骤 4.** 添加描述并点击 **Register**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/9.png" alt="pir" width="400" height="auto"/></p>

现在您将看到已创建的应用程序

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/10.1.png" alt="pir" width="650" height="auto"/></p>

- **步骤 5.** 点击它，然后在 **Versions** 部分下点击 **+** 号

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/11.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 6.** 添加版本号，并根据以下两种场景填写安装命令以满足您的需求

1. 如果您希望将 zip 文件上传到 Allxon DMS Portal，请使用以下安装命令。

```sh
mkdir -p /allxon_ota
unzip -o /var/lib/SyncAgent/download/"Application registered name" -d /allxon_ota/
chmod 777 /allxon_ota/run_ota_payload.sh
rm -rf /var/lib/SyncAgent/download/*
cd /allxon_ota/ && /allxon_ota/run_ota_payload.sh
shutdown -r +5 "Restart the system to upgrade the JetPack will be started in 5 mins."
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/12.png" alt="pir" width="400" height="auto"/></p>

**注意：** "Application registered name" 应替换为您之前创建的应用程序名称。例如：**"jetson-xavier-nx-devkit-emmc_4.4_to_4.6"**

2. 如果您希望将 zip 文件上传到您自己的存储或网站，请使用以下安装命令。

```sh
mkdir -p /allxon_ota
wget -qO /allxon_ota/ota_payload.zip "ota_payload_package_download_url"
unzip -o /allxon_ota/ota_payload.zip -d /allxon_ota/
chmod 777 /allxon_ota/run_ota_payload.sh
rm /allxon_ota/ota_payload.zip
cd /allxon_ota/ && /allxon_ota/run_ota_payload.sh
shutdown -r +5 "Restart the system to upgrade the JetPack will be started in 5 mins."
```

- **步骤 7.** 选择之前生成的 **ota_payload.zip** 文件进行上传，上传完成后点击 **Create**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/13.png" alt="pir" width="400" height="auto"/></p>

- **步骤 8.** 输入 **Version Description** 并点击 **Save** 保存应用程序

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/14.png" alt="pir" width="400" height="auto"/></p>

- **步骤 9.** 点击 **Versions** 部分下的 **+** 号并点击 **Release**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/15.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 10.** 最后，点击 **Release**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/16.png" alt="pir" width="400" height="auto"/></p>

现在我们已成功将 OTA Payload Package 上传并发布到 Allxon DMS Portal。下一步是将此更新分发到我们的 Jetson 设备。

### 通过 Allxon DMS Portal 执行 OTA Payload Package 更新

在继续之前，请注意以下事项：

- 在执行 OTA Payload Package 更新之前，请确保 Jetson 设备在整个过程中通过以太网电缆连接。否则，更新将失败。
- 如果升级过程失败，您可以前往 **/ota_log** 查看升级过程的日志。
- 如果升级过程成功，文件夹 **/ota** 下的文件将被保留。
- 请确保 eMMC 或内部存储至少有 **"OTA Payload Package * 2.5"** 的可用空间。

现在让我们通过 Allxon DMS Portal 执行 OTA Payload Package 更新。

- **步骤 1.** 在 **Allxon DMS Portal** 的 **Applications** 页面中导航并点击 **Register**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/6.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 2.** 点击 **Existing**，选择 OTA Payload Package 并点击 **Register**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/25.png" alt="pir" width="400" height="auto"/></p>

- **步骤 3.** 点击新添加的应用程序

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/26.png" alt="pir" width="600" height="auto"/></p>

- **步骤 4.** 点击 **Versions** 部分下的 **+** 号并点击 **Distribute**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/27.png" alt="pir" width="1000" height="auto"/></p>

- **步骤 5.** 选择您想要分发的组并点击 **Distribute**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/18.png" alt="pir" width="400" height="auto"/></p>

- **步骤 6.** 设置 **Distribution Time** 并点击 **Schedule**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/19.png" alt="pir" width="400" height="auto"/></p>

现在，选定组中的 Jetson 设备将接收到此 OTA Payload Package 并开始升级过程。

如果您的 Jetson 设备连接到 HDMI 显示器，安装完成后您将看到以下内容。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/23.jpg" alt="pir" width="1000" height="auto"/></p>

如果您通过 SSH 连接到 Jetson 设备，安装完成后您还将看到消息 **"Restart the system to upgrade the JetPack will be started in 5 mins."**

现在设备将在 5 分钟后重新启动以开始升级过程。这是为了给用户一些额外的时间保存未保存的工作。不过，您可以在看到上述消息后立即重新启动 Jetson 设备。

- **步骤 4.** 当 Jetson 设备再次启动后，您会看到一个黑屏。等待几分钟后，设备会再次自动重启。接下来，您将看到新操作系统的初始配置界面，您需要完成此设置以重新进入设备。

**注意：** 建议将 Jetson 设备连接到 HDMI 显示器和键盘，以完成上述配置设置。

- **步骤 5.** 设置完成后，设备启动进入桌面，执行以下命令以检查 JetPack 版本是否已更新：

```sh
cat /etc/nv_tegra_release
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/24.png" alt="pir" width="1000" height="auto"/></p>

如您所见，在此示例中，L4T 已更新至 32.6.1。

## 从 Jetson 设备中卸载 Allxon DMS

如果您希望从设备中卸载 Allxon DMS Agent，请首先使用以下命令禁用自动安装 Allxon DMS Agent 的机制（服务）：

```sh
sudo systemctl disable dms-install.service
```

之后，您可以使用以下命令卸载 Allxon DMS Agent：

```sh
sudo wget -qO - "https://get.allxon.net/linux/uninstall" | sudo bash -s
```