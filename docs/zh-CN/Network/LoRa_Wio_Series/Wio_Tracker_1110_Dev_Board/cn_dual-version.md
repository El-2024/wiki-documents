---
description: Wio Tracker 双栈版本
title: 通过 Amazon Sidewalk 和 LoRaWAN 网络实现无缝资产追踪
keywords:
- 追踪器
- AWS
- Sidewalk
- LoRaWAN
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/wio_tracker_dual_stack
sidebar_position: 8
sidebar_class_name: hidden
last_update:
  date: 2024/3/4
  author: Jessie
---




## 介绍

通过此双设备演示体验无缝的网络集成。该设置包括多功能的 Seeed Studio Wio Tracker 开发板和强大的 Seeed Studio SenseCAP T1000-S 追踪器设备，两者均展示了在 LoRaWAN 和 Sidewalk 网络之间的无缝切换，以实现最佳覆盖范围。



* **双网络支持**：只需按下一个按钮，即可在 LoRaWAN 和 Sidewalk 之间切换，以保持持续连接。
* **云连接**：实时见证数据传输至 AWS IoT Core，并通过笔记本显示器上的 AWS Web 应用程序进行可视化。
* **电池供电高效性**：设备确保持续运行，无需电线，实现真正的移动体验。


整个过程分为以下主要步骤：

* [SDK 安装和设置](https://wiki.seeedstudio.com/cn/wio_tracker_dual_stack#setup-toolchain)
* [固件烧录](https://wiki.seeedstudio.com/cn/wio_tracker_dual_stack#build-and-flash-the-demo)
* AWS IoT Core 配置
* Amazon Location 配置
* [Web 应用程序配置](https://wiki.seeedstudio.com/cn/wio_tracker_dual_stack#building-web-app)



## 前置条件


### 安装 nRF Connect SDK

根据您的首选开发环境和 [工具链管理工具](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#toolchain-management-tools)，有多种方式可以安装 nRF Connect SDK：

* 使用 Visual Studio Code 和 nRF Connect for VS Code 扩展（推荐）

* 使用命令行和 nRF Util

**步骤 1：更新操作系统**


在开始设置工具链之前，请为您的操作系统安装可用的更新。有关支持的操作系统信息，请参阅 [要求](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#requirements)。


**步骤 2：安装前置条件**

<!-- 代码 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="VSc" label="Visual Studio Code">

  
* 最新版本的 <a href="https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#requirements-clt">nRF 命令行工具</a>包。可从 <a href="https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Command-Line-Tools">nRF 命令行工具</a> 页面下载。<br/>

* 适用于您的操作系统的最新版本的 Visual Studio Code，可从 <a href="https://code.visualstudio.com/download">Visual Studio Code 下载页面</a> 下载。<br/>

* 在 Visual Studio Code 中，安装最新版本的 <a href="https://marketplace.visualstudio.com/items?itemName=nordic-semiconductor.nrf-connect-extension-pack">nRF Connect for VS Code 扩展包</a>。

</TabItem>
<TabItem value="CLine" label="命令行">

  
* 最新版本的 <a href="https://www.nordicsemi.com/Products/Development-tools/nrf-util">nRF Util 开发工具</a>，这是一个用于 Nordic 产品的统一命令行工具。<br/>



<div className="tip" style={{backgroundColor: 'lightblue', padding: '1em', borderRadius: '0.5em'}}>
  <p style={{marginBottom: '0.5em'}}>
    <strong>注意：</strong>
  </p>
  <p style={{marginTop: '0'}}>
      下载 nRF Util 可执行文件后，将其移动到系统 <code>PATH</code> 中的某个目录。在 macOS 和 Linux 上，还需要通过输入 <code>chmod +x nrfutil</code> 或在文件属性中勾选复选框来授予执行权限。
  </p>
</div>

* 最新版本的 <a href="https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/recommended_versions.html#requirements-clt">nRF 命令行工具</a>包，可从 <a href="https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Command-Line-Tools">nRF 命令行工具</a> 页面下载。



<div className="tip" style={{backgroundColor: 'lightblue', padding: '1em', borderRadius: '0.5em'}}>
    <p style={{marginBottom: '0.5em'}}>
      <strong>注意：</strong>
    </p>
    <p style={{marginTop: '0'}}>
      下载并安装工具后，将 nrfjprog 添加到环境变量中的系统 <code>PATH</code>。
    </p>
  </div>

</TabItem>
</Tabs>




**步骤 3：安装 nRF Connect SDK 工具链**

<Tabs>
<TabItem value="VScode" label="nRF Connect for Visual Studio Code">
  

* 在 Visual Studio Code 中，通过单击 <code>活动栏</code> 中的图标打开 nRF Connect 扩展。<br/><br/>
* 在扩展的 <code>欢迎视图</code> 中，单击 <code>安装工具链</code>。<br/><br/>
* 选择要安装的工具链版本。工具链版本应与您将要使用的 nRF Connect SDK 版本匹配。我们使用 <code>V2.5.0</code>（推荐）。<br/><br/>

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/bar2.png"/></div>
安装工具链后，您可以通过单击 <code>管理工具链</code> 访问 <code>安装工具链</code> 选项。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/manage-toolchain.png"/></div>

</TabItem>
<TabItem value="CL" label="命令行">

* 打开一个终端窗口。

* 运行以下命令以安装 nRF Util 工具链管理器命令：
 ```cpp
 nrfutil install toolchain-manager
 ```

* 运行以下命令以列出可用的安装版本：
 ```cpp
 nrfutil toolchain-manager search
 ```

从此列表中选择的版本对应于 nRF Connect SDK 的版本，并将在下一步中使用。

* 运行以下命令以安装您选择的 SDK 版本的工具链版本：
 ```cpp
 nrfutil toolchain-manager install --ncs-version version
 ```

例如：
```cpp
nrfutil toolchain-manager install --ncs-version v2.5.0
```
此示例命令安装了 nRF Connect SDK v2.5.0 所需的工具链（推荐版本）。

:::提示
工具链默认安装在以下位置：Windows 为 C:/ncs/toolchains，Linux 为 ~/ncs/toolchains，macOS 为 /opt/nordic/ncs/toolchains。
:::

要检查当前配置设置，请使用以下命令：<code>nrfutil toolchain-manager config --show</code>。<br/>要了解更多关于这些命令的信息，请使用以下命令：<code>nrfutil toolchain-manager --help</code>。
</TabItem>
</Tabs>

---

**步骤 4：获取 nRF Connect SDK 代码**

<Tabs>
<TabItem value="VScode4" label="nRF Connect for Visual Studio Code">

要克隆 nRF Connect SDK 代码，请完成以下步骤：

* 在 Visual Studio Code 中打开 nRF Connect 扩展，点击 <code>Activity Bar</code> 中的图标。

* 在扩展的 <code>Welcome View</code> 中，点击 <code>Manage SDKs</code>。操作列表会显示在 Visual Studio Code 的快速选择中。

* 点击 <code>Install SDK</code>。可用的 SDK 版本列表会显示在 Visual Studio Code 的快速选择中。

* 选择要安装的 SDK 版本，我们使用 `V2.5.0`。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/manage-sdk2.png"/></div>

SDK 开始安装，可能需要几分钟时间。

</TabItem>
<TabItem value="CLine4" label="命令行">

要克隆代码库，请完成以下步骤：

* 在命令行中，打开目录 `ncs`。默认情况下，该目录位于工具链安装位置的上一级目录。此目录将包含所有 nRF Connect SDK 的代码库。

* 根据您的操作系统，使用以下命令启动工具链环境：

  Windows
  ```cpp
  nrfutil toolchain-manager launch --terminal
  ```
  Linux/macOS
  ```cpp
  nrfutil toolchain-manager launch --shell
  ```

* 确定您要使用的 nRF Connect SDK 修订版本的标识符。有关更多信息，请参阅上表。首次安装 nRF Connect SDK 时，建议安装最新发布的 SDK 和工具链版本。

* 使用您想要检出的 nRF Connect SDK 修订版本初始化 west，将 nRFConnectSDK_revision 替换为标识符：

  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr nRFConnectSDK_revision
  ```
例如：

  **特定版本**：要检出 v2.5.0 版本，请输入以下命令：

  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr v2.5.0
  ```
  **开发标签**：要检出 v1.9.2-dev1 标签，请输入以下命令：
  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr v1.9.2-dev1
  ```

  **分支**：要检出包含最新开发状态的主分支，请输入以下命令：
  ```cpp
  west init -m https://github.com/nrfconnect/sdk-nrf --mr main
  ```
这将克隆 manifest 仓库 sdk-nrf 到 nrf。

使用 manifest 文件的特定修订版本初始化 west 并不会将您的代码库锁定到该版本。检出 sdk-nrf 仓库中的不同分支或标签并运行 west update 会更改您使用的 nRF Connect SDK 版本。

<div className="tip" style={{backgroundColor: 'lightblue', padding: '1em', borderRadius: '0.5em'}}>
    <p style={{marginBottom: '0.5em'}}>
      <strong>注意：</strong>
    </p>
    <p style={{marginTop: '0'}}>
      如果运行 west 时出现错误消息，请将 west 更新到最新版本。有关更多信息，请参阅 Zephyr 文档中的 <a href="https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/zephyr/develop/west/troubleshooting.html#west-troubleshooting">West 故障排除</a>。
    </p>
  </div>

* 输入以下命令以克隆项目代码库：
  ```cpp
  west update
  ```

根据您的网络连接情况，这可能需要一些时间。

* 导出 Zephyr CMake 包。这允许 CMake 自动加载构建 nRF Connect SDK 应用程序所需的模板代码：
  ```cpp
  west zephyr-export
  ```

有关更多详细信息，请查看 [安装 nRF Connect SDK](https://developer.nordicsemi.com/nRF_Connect_SDK/doc/latest/nrf/installation/install_ncs.html#id9)。

</TabItem>
</Tabs>

---

### 设置 Sidewalk 环境

按照以下步骤下载 nRF Connect SDK 的 Sidewalk 应用程序：

* 打开一个终端窗口。您的目录结构应如下所示：

```cpp
.
|___ .west
|___ bootloader
|___ modules
|___ nrf
|___ nrfxlib
|___ zephyr
|___ ...
```

* 确保 manifest 路径指向 nrf 目录中的 west.yml 文件：

```cpp
west manifest --path
/path-to-ncs-folder/nrf/west.yml
```
如果 manifest 路径指向其他文件，请使用以下命令：

```cpp
west config manifest.path nrf
```
* 为 west 启用 Sidewalk 组过滤器。

```cpp
west config manifest.group-filter "+sidewalk"
```

检查 west 中是否存在 Sidewalk：

```cpp
west list sidewalk
sidewalk     sidewalk                     <sidewalk_revision> https://github.com/nrfconnect/sdk-sidewalk
```

* 更新所有代码库：
```cpp
west update
```

根据您的网络连接情况，更新可能需要一些时间。

* 为 Sidewalk 安装 Python 依赖项。
```cpp
pip install -r sidewalk/requirements.txt
```

---

### 将 LR11xx 添加到 nRF Connect SDK Sidewalk 扩展

此代码库包含的软件驱动程序使 [LR11xx 系列](https://www.semtech.com/products/wireless-rf/lora-edge) 的芯片能够在与 [Nordic nRF52840 MCU](https://www.nordicsemi.com/Products/Development-hardware/nrf52840-dk) 和 nRF Connect SDK 配对时支持 Sidewalk 协议。驱动程序以二进制形式提供，作为静态库实现了支持 LoRa 或 FSK 连接所需的 "平台抽象层" 接口。静态库内部包含 Semtech 的 SWDR001 (LR11xx 驱动程序) 的完整实现，可用于访问 LR11xx 芯片的其他功能，例如 WIFI 和 GNSS 扫描与测距。

* 下载 [SWDM016](https://drive.google.com/drive/folders/1vHJVEFgyx4arHHPlSjdMkffVStnTpHqg?usp=sharing)

* 在克隆的 Nordic 仓库中，将工作目录设置为顶级目录，例如 ``~/ncs/<version>/sidewalk``：

 ```cpp
 patch -p1 < ../nRF52840_LR11xx_driver_v010000.diff
 ```
父目录路径 `..` 假设您将差异文件放在那里，否则您可以指定其位置的完整路径。

* 将无线电驱动库 ``lib*.a`` 复制到 sidewalk 项目中 ``~/ncs/<version>/sidewalk/lib/lora_fsk/``  
提供了两个库，一个启用了 ``LOG_RUNTIME_FILTERING``，另一个未启用。

* 将 ``~/template_lbm_wio_tracker/boards/arm/wio_tracker_1110`` 文件夹复制到 ``~/ncs/v2.5.0/zephyr/boards/arm``。

```cpp
·
├─── .west/
├─── modules/
├─── nrf/
├─── ...
└─── zephyr/
     └─── Boards/
          └─── arm/
               └─── wio_tracker_1110/
```

### 创建资源

**步骤 1：部署 Cloud9 环境**

在本节中，您将创建开始之前所需的所有资源。首先，您将创建一个 Cloud9 工作空间，用于构建和部署其他资源。然后，您将部署一个包含 Asset Tracker 应用后端资源的 CDK 堆栈。最后，您将安装所有前端依赖项并配置应用程序。

* 打开 [AWS Cloud9 控制台](https://us-east-1.console.aws.amazon.com/cloud9/home?region=us-east-1)，点击 `Create Environment`

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/cloud-9-environment.png"/></div>

* 除 **Instance type** 外，保留所有其他设置为默认值。选择 `m5.large`。

<div align="center"><img width="{600}" src="https://static.us-east-1.prod.workshops.aws/public/f3adb45a-50d1-499b-a20d-93bbbb82ee26/static/images/001/002/c9.3.png"/></div>

**步骤 2：配置先决条件**

* 打开 Cloud9 IDE。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/open-cloud9.png"/></div>

* 在 Cloud9 环境终端中克隆 GitHub 仓库，输入以下命令：

 ```cpp
 git clone --recurse-submodules https://github.com/aws-samples/aws-iot-asset-tracker-demo.git /home/ec2-user/environment/asset-tracking-workshop
 ``` 
<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/open-could9.png"/></div>

* 导航到示例应用程序目录：

 ```cpp
 cd ~/environment/asset-tracking-workshop
 ```

* 调整底层 EC2 实例的 EBS 卷大小。

 ```cpp
 npm run utils:resizeC9EBS
 ```

* 安装项目的依赖项：
 ```cpp
 npm ci
 ```

* 部署后端基础设施：
 ```cpp
 # 准备 AWS 账户以支持 CDK
 npm run infra:bootstrap
 # 部署后端资源
 npm run infra:deploy
 ```

* 创建配置文件：

 ```cpp
 npm run utils:createConfig
 ```

## LoRaWAN 配置

### 在 AWS 上添加 LoRaWAN 网关

查看此 [入门指南](https://wiki.seeedstudio.com/cn/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT/#add-gateway)，将 [SenseCAP M2 多平台网关](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html) 添加到 AWS IoT Core。

### 在 AWS 上添加 LoRaWAN 设备

**步骤 1：定义密钥**

在 `src/lorawan_v4/example_options.h` 中定义 `DevEUI/JoinEUI/APPkey` 和 `REGION`。

:::提示
JoinEUI 也称为 AppEUI
:::

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/3-params.png"/></div>

**步骤 2：创建配置文件**

登录到 [AWS IoT 控制台](https://console.aws.amazon.com/iot/home)，导航到 `Devices`，点击 `Profiles`。

* 设备配置文件

设备配置文件定义了设备的功能和启动参数，网络服务器使用这些参数来设置 LoRaWAN 无线电接入服务。它包括选择诸如 LoRa 频段、LoRa 区域参数版本和设备的 MAC 版本等参数。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/device-profiles.png"/></div>

要了解不同的频段，请参阅 [选择适合网关和设备连接的 LoRa 频段](https://docs.aws.amazon.com/iot-wireless/latest/developerguide/lorawan-rfregion-permissions.html#lorawan-frequency-bands)。

* 服务配置文件

我们建议启用设置 `AddGWMetaData`，这样您将收到每个负载的额外网关元数据，例如 RSSI 和 SNR 数据传输。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/service-profiles.png"/></div>

**步骤 3：添加设备**

导航到 `LPWAN devices` > `Devices`，点击 `Add wireless device`。

`无线设备规格`：OTAAv1.0x

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/AWS20.PNG" alt="pir" width={800} height="auto" /></p>

选择您在上一步中创建的设备配置文件和目标。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/device-eui2.png" alt="pir" width={800} height="auto" /></p>

导航到设备页面，选择您之前添加的设备。

## Sidewalk 配置

### 设置 Sidewalk 网关（可选）

您可以设置一个 Sidewalk 网关，对其进行配置，并将网关与您的 Amazon 账户关联。在注册到 Amazon Sidewalk 后，您的 Sidewalk 终端设备将连接并与 Sidewalk 网关通信。

有关更多详细信息，请查看 [设置 Sidewalk 网关](https://docs.sidewalk.amazon/getting-started/sidewalk-onboard-prereq-gateway.html)。

### 设置您的 Sidewalk 设备

#### 添加您的 Sidewalk 设备

**步骤 1：添加设备配置文件和 Sidewalk 终端设备**

在创建无线设备之前，首先需要创建一个设备配置文件。

导航到 [设备中心的 Sidewalk 标签页](https://console.aws.amazon.com/iot/home#/wireless/devices?tab=sidewalk)，选择 `Provision device`，然后执行以下步骤。

**步骤 2：获取设备 JSON 文件**

要获取用于配置 Sidewalk 设备的 JSON 文件：

* 前往 [Sidewalk 设备中心](https://console.aws.amazon.com/iot/home#/wireless/devices?tab=sidewalk)。

* 选择您添加到 AWS IoT Core for Amazon Sidewalk 的设备以查看其详细信息。

* 在设备详情页面中，选择 `Download device JSON file` 以获取 JSON 文件。

  一个名为 `certificate.json` 的文件将被下载，其中包含配置终端设备所需的信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/dual/download-json.png" alt="pir" width={800} height="auto" /></p>

**步骤 3：配置您的 Sidewalk 终端设备**

**生成二进制镜像**

* 安装 requirements 文件

  转到 Sidewalk SDK 文件夹 `$[Amazon Sidewalk repository]/tools/scripts/public/provision/`，然后运行以下命令以安装 `requirements` 文件。

  ```cpp
  pip3 install -r requirements.txt
  ```

* 生成制造二进制镜像

  运行 `provision.py` 脚本以生成制造二进制镜像文件，该文件将用于配置您用作 Sidewalk 终端设备的开发板。

* 如果您使用的是从 AWS IoT 控制台获取的组合设备 JSON 文件，请在运行配置脚本时使用 certificate_json 参数指定该文件作为输入。

  ```cpp
  python3 provision.py aws --output_bin mfg.bin --certificate_json certificate.json \ 
     --config config/[device_vendor]/[device]_dk/config.yaml
  ```

  如果您使用的是从 GetDeviceProfile 和 GetWirelessDevice API 操作中获取的单独设备 JSON 文件，请在运行配置脚本时使用 wireless_device_json 和 device_profile_json 参数指定这些文件作为输入。

  ```cpp
  python3 provision.py aws --output_bin mfg.bin \  
     --wireless_device_json wireless_device.json \
     --device_profile_json device_profile.json \ 
     --config config/[device_vendor]/[device]_dk/config.yaml
  ```

  您应该会看到以下输出：

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/gen-files.png"/></div>

* 刷写 mfg.hex 文件

  您的配置文件通常位于 `EdgeDeviceProvisioning` 目录中。

  要刷写二进制镜像，请使用地址 `0xFD000` 将二进制镜像加载到 Nordic Semiconductor HDK 上。有关刷写二进制镜像的信息，请参阅 Nordic Semiconductor 文档。

**步骤 4：构建并刷写示例程序**

* 打开一个终端窗口。

* 转到 `template_lbm_wio_tracker` 目录。

  例如：

  ```cpp
  cd /opt/nordic/ncs/v2.5.0/sidewalk/samples/template_lbm_wio_tracker
  ```

* 使用以下 west 命令构建应用程序：

  ```cpp
  west build --board wio_tracker_1110 -- -DRADIO=LR1110_SRC
  ```
  或使用预编译的无线电驱动库：
  ```cpp
  west build --board wio_tracker_1110 -- -DRADIO=LR1110
  ```

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/comparing.png"/></div>

* 使用以下 west 命令刷写应用程序：

  ```cpp
  west flash
  ```

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/flash-suc.png"/></div>

### Sidewalk 注册

在配置 Sidewalk 终端设备后，必须注册该终端设备，以便其能够通过 Sidewalk 网络进行通信。

要注册您的 Sidewalk 终端设备，可以使用 Sidewalk 无接触注册（Sidewalk Frustration Free Networking，FFN）进行自动注册，或者使用运行注册脚本的 Mac 或原生 Ubuntu 机器手动注册设备。

| 条件 | 自动注册（使用 Sidewalk FFN） | 手动注册 |
|--|--|--|
| 用户与终端设备关联 | 此注册方法不需要在 Sidewalk 终端设备与用户之间建立任何关联。终端设备可以在未与任何用户关联的情况下加入 Sidewalk 网络。 | 此注册方法需要在 Sidewalk 终端设备与用户的 Amazon 账户之间建立关联。 |
| LWA（使用 Amazon 登录） | 不需要 LWA。 | 需要 LWA 以链接用户的 Amazon 账户和 Sidewalk 终端设备开发者使用的 AWS 账户。 |

**使用 Sidewalk FFN 进行注册：**

* 您的 Sidewalk 网关和终端设备必须已通电。
* 您的网关必须已加入 Sidewalk，并且与终端设备距离较近。我们建议将设备保持在 10 米范围内。

有关 `手动 Sidewalk 注册` 和其他详细信息，请查看 [此处](https://docs.sidewalk.amazon/provisioning/iot-sidewalk-register-endpoint.html)。

### 网络切换

默认网络为 LoRaWAN，点击 `用户按钮` 切换网络。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/click-button.png"/></div>

### 查看消息

#### 添加目标

在 [IoT Core 控制台](https://us-east-1.console.aws.amazon.com/iot/home?region=us-east-1#/home) 中，从左侧菜单中选择 `LPWAN devices`，然后选择 `Destinations`。

选择 `Edit` 并选择 `Publish to AWS IoT Core message broker`。在主题文本框中，输入 `assets` 作为 MQTT 主题。

在 `Permissions` 下选择 `Create a new service role`，并将 `Role name` 留空。

- **ExpressionType**: `MqttTopic`
- **Expression**: `EmbeddedWorldTrackerDemo`

#### 添加解码规则

导航到 `Message routing` 标签 → `Rules`，然后点击 `Create Rule` 按钮。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules.png"/></div>

为规则命名并提交。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/rules2.png"/></div>

从 IoT Core 规则中，选择 `Lambda` 函数，然后点击 `Create a Lambda function`。

从头开始创建<br/>
`Function name`: 为函数命名。<br/>
`Runtime`: Node.js 14.x<br/>
`Architexture`: x86_64<br/>

点击 `Create function` 按钮以创建新函数。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cre-function.png"/></div>

在接下来的函数配置页面中，删除所有代码并替换为以下脚本，然后点击 `Deploy` 按钮。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decod.png"/></div>

<details>
<summary>Lambda 代码</summary>

```javascript
const {IoTDataPlaneClient, PublishCommand} = require("@aws-sdk/client-iot-data-plane");
const {IoTWirelessClient, GetWirelessDeviceCommand} = require("@aws-sdk/client-iot-wireless");
const client = new IoTDataPlaneClient({
    "region": "us-east-1"
});
const wireless_client = new IoTWirelessClient({
    "region": "us-east-1"
});

function decodeUplink(input) {
    const originMessage = input.toLocaleUpperCase()
    const decoded = {
        valid: true,
        err: 0,
        payload: input,
        messages: []
    }
    let measurement = messageAnalyzed(originMessage)
    if (measurement.length === 0) {
        decoded.valid = false
        return {data: decoded}
    }

    for (let message of measurement) {
        if (message.length === 0) {
            continue
        }
        let elements = []
        for (let element of message) {
            if (element.errorCode) {
                decoded.err = element.errorCode
                decoded.errMessage = element.error
            } else {
                elements.push(element)
            }
        }
        if (elements.length > 0) {
            decoded.messages.push(elements)
        }
    }
    return {data: decoded}
}

function messageAnalyzed(messageValue) {
    try {
        let frames = unpack(messageValue)
        let measurementResultArray = []
        for (let i = 0; i < frames.length; i++) {
            let item = frames[i]
            let dataId = item.dataId
            let dataValue = item.dataValue
            let measurementArray = deserialize(dataId, dataValue)
            measurementResultArray.push(measurementArray)
        }
        return measurementResultArray
    } catch (e) {
        return e.toString()
    }
}

function unpack(messageValue) {
    return [{dataId: 0, dataValue: messageValue}]
}

function deserialize(dataId, dataValue) {
    let measurementArray = null
    measurementArray = [
        {
            measurementId: '4198',
            type: 'Latitude',
            measurementValue: parseFloat(getSensorValue(dataValue.substring(0, 8), 1000000))
        },
        {
            measurementId: '4197',
            type: 'Longitude',
            measurementValue: parseFloat(getSensorValue(dataValue.substring(8, 16), 1000000))
        },
        {
            measurementId: '4097',
            type: 'Air Temperature',
            measurementValue: getSensorValue(dataValue.substring(16, 20), 10)
        },
        {
            measurementId: '4098',
            type: 'Air Humidity',
            measurementValue: getSensorValue(dataValue.substring(20, 22))
        }
    ]
    return measurementArray
}

function getSensorValue(str, dig) {
    if (str === '8000') {
        return null
    } else {
        return loraWANV2DataFormat(str, dig)
    }
}

function bytes2HexString(arrBytes) {
    var str = ''
    for (var i = 0; i < arrBytes.length; i++) {
        var tmp
        var num = arrBytes[i]
        if (num < 0) {
            tmp = (255 + num + 1).toString(16)
        } else {
            tmp = num.toString(16)
        }
        if (tmp.length === 1) {
            tmp = '0' + tmp
        }
        str += tmp
    }
    return str
}

function loraWANV2DataFormat(str, divisor = 1) {
    let strReverse = bigEndianTransform(str)
    let str2 = toBinary(strReverse)
    if (str2.substring(0, 1) === '1') {
        let arr = str2.split('')
        let reverseArr = arr.map((item) => {
            if (parseInt(item) === 1) {
                return 0
            } else {
                return 1
            }
        })
        str2 = parseInt(reverseArr.join(''), 2) + 1
        return '-' + str2 / divisor
    }
    return parseInt(str2, 2) / divisor
}

function bigEndianTransform(data) {
    let dataArray = []
    for (let i = 0; i < data.length; i += 2) {
        dataArray.push(data.substring(i, i + 2))
    }
    return dataArray
}

function toBinary(arr) {
    let binaryData = arr.map((item) => {
        let data = parseInt(item, 16)
            .toString(2)
        let dataLength = data.length
        if (data.length !== 8) {
            for (let i = 0; i < 8 - dataLength; i++) {
                data = `0` + data
            }
        }
        return data
    })
    return binaryData.toString().replace(/,/g, '')
}

exports.handler = async (event) => {
    try {
        let device_id = event['WirelessDeviceId'];
        let lorawan_info = null;
        let sidewalk_info = null;
        let payload = null
        let timestamp = null

        let queryDeviceRequest = {
            Identifier: device_id,
            IdentifierType: "WirelessDeviceId"
        }
        let deviceInfo = await wireless_client.send(new GetWirelessDeviceCommand(queryDeviceRequest))
        console.log("device_info：" + JSON.stringify(deviceInfo))
        if (!deviceInfo || deviceInfo.name) {
            return {
                statusCode: 500,
                body: 'can not find this wirelessDeviceId: ' + device_id
            };
        }
        let device_name = deviceInfo.Name

        if (event["WirelessMetadata"]["LoRaWAN"]) {
            lorawan_info = event["WirelessMetadata"]["LoRaWAN"]
            timestamp = lorawan_info["Timestamp"]
            let bytes = Buffer.from(event["PayloadData"], 'base64');
            payload = bytes2HexString(bytes)
        } else if (event["WirelessMetadata"]["Sidewalk"]) {
            timestamp = new Date().getTime()
            let origin = new Buffer(event["PayloadData"], 'base64')
            payload = origin.toString('utf8')
        }

        console.log(`event.PayloadData: ${payload}`)
        const resolved_data = decodeUplink(payload);
        
        // publish all measurement data
        const input = { // PublishRequest
            topic: `tracker/EmbeddedWorldTrackerDemo/sensor/${device_id}`,
            qos: 0,
            retain: false,
            payload: JSON.stringify({
                DeviceName: "assettracker",
                timestamp: timestamp,
                data: resolved_data.data,
                WirelessDeviceId: device_id,
                PayloadData: event['PayloadData'],
                WirelessMetadata: event["WirelessMetadata"]
            })
        };

        const command = new PublishCommand(input);
        const response = await client.send(command);
        console.log("response: " + JSON.stringify(response));
        return {
            statusCode: 200,
            body: 'Message published successfully' + JSON.stringify(event)
        };
    } catch (error) {
        console.error('Error publishing message:', error);

        return {
            statusCode: 500,
            body: 'Error publishing message'
        };
    }
};
```
</details>

<div align="center"><img width="{600}" src="https://static.us-east-1.prod.workshops.aws/public/f3adb45a-50d1-499b-a20d-93bbbb82ee26/static/images/004/001/lambda.1.png"/></div>

现在返回到 `Device Destination`，选择输入规则名称，并输入我们刚刚创建的名称。

导航到 `AWS IoT Core Console`，选择 `MQTT Test Client` 并订阅该主题。

#### 添加追踪器规则

重复上述步骤以创建一个新规则，并复制以下 Lambda 代码：

<details>
<summary>Lambda 代码</summary>

```javascript
const {IoTDataPlaneClient, PublishCommand} = require("@aws-sdk/client-iot-data-plane");

const {LocationClient, BatchUpdateDevicePositionCommand} = require("@aws-sdk/client-location")

const {IoTWirelessClient, UpdateResourcePositionCommand } = require("@aws-sdk/client-iot-wireless");
const client = new IoTDataPlaneClient({
    "region": "us-east-1"
});
const wireless_client = new IoTWirelessClient({
    "region": "us-east-1"
});

exports.handler = async (event) => {
    console.log(`接收到消息: ${JSON.stringify(event)}`)
    let device_id = event['WirelessDeviceId']
    let device_name = event['DeviceName']
    let measurements = event['data']['messages']
    let resolver_time = event['timestamp']
    let network = 1; // 1: lorawan 2: sidewalk
    if (event["WirelessMetadata"] && event["WirelessMetadata"]["Sidewalk"]) {
        network = 2
    }

    let longitude;
    let latitude;
    let gps_data = null
    let sensor_map = {}
    if (measurements && measurements.length > 0) {
        for (let i = 0; i < measurements.length; i++) {
            for (let j = 0; j < measurements[i].length; j++) {
                if (measurements[i][j].measurementId === "4097") {
                    sensor_map["Temperature"] = measurements[i][j].measurementValue;
                }
                if (measurements[i][j].measurementId === "4098") {
                    sensor_map["Humidity"] = measurements[i][j].measurementValue;
                }
                if (measurements[i][j].measurementId === "4197") {
                    longitude = measurements[i][j]["measurementValue"];
                }
                if (measurements[i][j].measurementId === "4198") {
                    latitude = measurements[i][j]["measurementValue"];
                }

                if (latitude && longitude) {
                    try {
                        gps_data = {
                            "type": "Point",
                            "coordinates": [longitude, latitude]
                            // "coordinates": [33.3318, -22.2155, 13.123]
                        }
                    } catch (e) {
                        console.log(`===>错误`, e)
                    }
                }
            }
        }
    }

    if (gps_data) {
        console.log(`更新设备位置: ${JSON.stringify(gps_data)}`)
        await updateDevicePosition(gps_data, device_id);
        const input = { // PublishRequest
            topic: `tracker/EmbeddedWorldTrackerDemo/location/${device_id}`,
            qos: 0,
            retain: false,
            payload: JSON.stringify({
                timestamp: resolver_time,
                deviceId: device_id,
                deviceName: device_name,
                latitude: gps_data.coordinates[1],
                longitude: gps_data.coordinates[0],
                positionProperties: {'batteryLevel': 90, "sensor:": 60}
            })
        };
        const command = new PublishCommand(input);
        const response = await client.send(command);
        console.log("MQTT 推送响应: " + JSON.stringify(response));

        let locationClient = new LocationClient()
        let location_info = {
            TrackerName: 'AssetTracker',
            Updates: [
                {
                    DeviceId: 'assettracker',
                    SampleTime: new Date(resolver_time),
                    Position: [
                        gps_data.coordinates[0], gps_data.coordinates[1]
                    ],
                    Accuracy: {
                        Horizontal: 1,
                    },
                    PositionProperties: {
                        "context": JSON.stringify({net: network}),
                        "sensor": JSON.stringify(sensor_map)
                    }
                }
            ]
        }
        let loc_response = await locationClient.send(new BatchUpdateDevicePositionCommand(location_info))
        console.log("位置更新响应: " + JSON.stringify(loc_response));

    }
}

async function updateDevicePosition(gps_data, device_id) {
    const input = { // UpdateResourcePositionRequest
        ResourceIdentifier: device_id, // 必填
        ResourceType: "WirelessDevice", // 必填
        GeoJsonPayload: JSON.stringify(gps_data),
    };
    const command = new UpdateResourcePositionCommand(input);
    const wireless_response = await wireless_client.send(command);
    console.log(wireless_response)
}
```
</details>

## 构建 Web 应用

我们将部署必要的 Amazon Location Service 资源，以便在地图上显示我们的设备。

### 创建地图

第一步，您需要创建一个新的 Amazon Location Service 地图资源。您将通过 AWS 控制台完成此操作。

* 打开 [Amazon Location Service 控制台](https://console.aws.amazon.com/location/home)。

* 然后展开屏幕左侧的导航栏，选择 Maps。

* 在此页面中，创建一个新地图：

* 输入地图的名称并选择 `HERE Explore` 地图样式，然后点击 `Create map`。

<div align="center"><img width="{600}" src="https://static.us-east-1.prod.workshops.aws/public/f3adb45a-50d1-499b-a20d-93bbbb82ee26/static/images/003/create-map.2.png"/></div>

### 创建路由计算器

* 打开 [Amazon Location Service 控制台](https://console.aws.amazon.com/location/home)。

* 然后展开屏幕左侧的导航栏，选择 `Route calculators`。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/router-cal.png"/></div>

继续选择 `HERE` 作为数据提供商，点击 `Create route calculator` 按钮。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/create-router.png"/></div>

### 创建追踪器

导航到 `Trackers` -> `Create tracker`：

输入追踪器的名称，并在位置过滤中选择 `Time-based filtering`。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/time-based.png"/></div>

然后向下滚动，在 EventBridge 配置下勾选 `Enable EventBridge events` 设置，然后点击 `Create tracker`。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/enable-bridge.png"/></div>

### 创建地理围栏集合

导航到 `Geofence collections`，然后点击 `create geofence collection`。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/geolocate.png"/></div>

## 显示 Web 应用

### 部署应用到 Cloudfront

* 在您的 Cloud9 终端中，导航到 `/home/ec2-user/environment/asset-tracking-workshop`：

 ```cpp
 cd /home/ec2-user/environment/asset-tracking-workshop
 ```

* 运行以下命令：

 ```cpp
 npm run frontend:publish
 ```

* 完成后，您将收到网站的 URL。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/web-url.png"/></div>

* 在浏览器中导航到此 URL 以查看您的追踪应用。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/dual/s3-map.png"/></div>

## 资源

[SWDM016](https://drive.google.com/drive/folders/1vHJVEFgyx4arHHPlSjdMkffVStnTpHqg?usp=sharing)

[template_lbm_wio_tracker](https://drive.google.com/drive/folders/1UVte1UbfFor1remgAcpfmCHSKXvOGyYn)