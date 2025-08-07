---
description: 将 Wio Tracker 1110 连接到 Home Assistant 
title: Home Assistant 集成
keywords:
- Home assistant
- Wio tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/wio_tracker_home_assistant
sidebar_position: 5
last_update:
  date: 2024/1/25
  author: Jessie
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/dog-locate.png" alt="pir" width={800} height="auto" /></p>



将 [Wio Tracker 1110 开发板](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) 集成到 Home Assistant 中，用于实时跟踪和环境分析。[Wio Tracker 1110 开发板](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) 是一个用户友好的基于 LoRa 的跟踪开发平台，您可以使用该开发板开发更多自定义功能，使您的家庭环境更加智能和响应迅速。




## 开始使用

在本教程中，我们使用 [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html) 作为 Home Assistant 主机，您可以使用任何带有 Supervisor 的 Home Assistant 主机。有关详细信息，请查看 [安装指南](https://www.home-assistant.io/installation/)。



### 设备配置

在开始之前，请确保您已阅读 [Wio Tracker 1110 开发板用户指南](https://wiki.seeedstudio.com/cn/Get_Started_with_Wio-Trakcer_1110/)，并将平台选择为 `SenseCAP`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/4.jpeg" alt="pir" width={300} height="auto" /></p>


### Home Assistant 配置

导航到您的 [Home Assistant Web 界面](http://homeassistant.local:8123/)。 

为了充分发挥 Home Assistant 的潜力并访问高级功能，建议在用户界面中启用 `高级模式`。

点击您的个人资料，并启用 `高级模式`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/advanced-mode.png" alt="pir" width={800} height="auto" /></p>


#### 安装附加组件

转到 [设置 > 附加组件](https://my.home-assistant.io/redirect/supervisor)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-ons.png" alt="pir" width={800} height="auto" /></p>


在官方 `附加组件` 部分，您会找到 `文件编辑器` 和 `高级 SSH & Web 终端` 附加组件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/2-ons.png" alt="pir" width={800} height="auto" /></p>

建议启用 `在侧边栏显示`，这样您可以更轻松地找到它。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/show-sidebar.png" alt="pir" width={800} height="auto" /></p>

#### 安装 HACS


Home Assistant 社区商店为您提供了一个强大的 UI，用于处理所有自定义需求的下载。

打开您的终端并导航到配置目录：

```cpp
cd /config
```

下载并运行 HACS 安装脚本：

```cpp
wget -q -O - https://install.hacs.xyz | bash -
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/comand-page.png" alt="pir" width={600} height="auto" /></p>


安装脚本完成后，重启 Home Assistant 以应用更改。 

转到 `设置` > `系统` > `重启`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/restart.png" alt="pir" width={800} height="auto" /></p>



导航到 `设置` ->  `设备与服务`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/device-service.png" alt="pir" width={800} height="auto" /></p>


点击 `添加集成` 以添加新的集成。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-inte.png" alt="pir" width={800} height="auto" /></p>


搜索 `HACS` 并点击它。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/HACS.png" alt="pir" width={800} height="auto" /></p>


只有最后一项（实验性功能）是可选的，您需要接受上面所有内容才能设置 HACS。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/submit.png" alt="pir" width={600} height="auto" /></p>


按照说明授权 Home Assistant 访问您的 GitHub 账户。这通常涉及输入 GitHub 提供的验证码以确认您的身份。




HACS 使用设备 OAuth 流进行 GitHub API 的身份验证。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png
" alt="pir" width={600} height="auto" /></p>


#### 安装 SenseCraft 插件

导航到 `HACS`，点击右上角的图标，然后选择 `自定义仓库`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png
" alt="pir" width={800} height="auto" /></p>

复制以下 `仓库地址`：

**仓库地址**: 
```cpp
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```
**类别**: `集成`

点击 `添加`。仓库现在已添加到您的 HACS，您还可以在 `集成` 列表中找到 SenseCraft 集成。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/custom-re.png" alt="pir" width={800} height="auto" /></p>

导航到 `SenseCraft` 集成并点击 `下载`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" alt="pir" width={800} height="auto" /></p>

我们现在已成功完成 SenseCraft 插件的安装。

#### 添加设备

导航到 `设置` -> `设备与服务` -> `SenseCraft`，点击 `添加设备`。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-device-.png" alt="pir" width={800} height="auto" /></p>

选择 `通过 SenseCraft 账号添加设备(账号集成)`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/account-inte.png" alt="pir" width={800} height="auto" /></p>

使用您的 SenseCAP Mate APP 账号登录，并选择 `global` 版本。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/craft-login.png" alt="pir" width={800} height="auto" /></p>

然后，您账号中的所有设备将会列出，选择您想要连接的设备，然后点击 `SUBMIT`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/craft-device.png" alt="pir" width={800} height="auto" /></p>

连接成功后，您将看到设备和实体显示在界面中。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/cloud-device.png" alt="pir" width={800} height="auto" /></p>

点击设备，您将看到所有上传的数据，点击 `ADD TO DASHBOARD`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-dashboard.png" alt="pir" width={800} height="auto" /></p>

#### 添加地图卡片

在添加地图卡片之前，我们需要先添加一个位置实体。

打开 `File Editor` 并导航到 `configuration.yaml` 文件，添加以下代码：

```cpp
template:
  - sensor:
      - name: "Device Location"
        state: >
          {{ states('sensor.latitude') }},{{ states('sensor.longitude') }}
        attributes:
          latitude: "{{ states('sensor.latitude') }}"
          longitude: "{{ states('sensor.longitude') }}"
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/yaml2.png" alt="pir" width={800} height="auto" /></p>

:::tip
`name` 可以自定义，`states` 应与您的设备实体 ID 相同。

您可以在 `Settings` -> `Devices and Services` -> `Entities` 中查看实体 ID。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/entity-id.png" alt="pir" width={600} height="auto" /></p>
:::

在仪表板上点击 `ADD CARD`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-card.png" alt="pir" width={800} height="auto" /></p>

选择地图卡片。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/map-card.png" alt="pir" width={800} height="auto" /></p>

将以下代码复制到 `CODE EDITOR` 中并点击 `SAVE`。

```cpp
type: map
entities:
  - entity: sensor.device_location
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/code-editor.png" alt="pir" width={800} height="auto" /></p>

:::tip
实体应与您的实体 ID 相同。您可以在 `Settings` -> `Devices and Services` -> `Entities` 中查看实体 ID。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/entity-location.png" alt="pir" width={600} height="auto" /></p>
:::

现在，您可以在地图上查看实时位置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/map-map.png" alt="pir" width={800} height="auto" /></p>

开发板的所有数据都可以在仪表板中查看。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/dog-locate.png" alt="pir" width={800} height="auto" /></p>