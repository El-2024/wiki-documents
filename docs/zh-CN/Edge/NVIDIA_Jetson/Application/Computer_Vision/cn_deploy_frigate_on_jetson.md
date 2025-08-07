---
description: Frigate 是一个开源的网络视频录像机（NVR），支持对 IP 摄像头进行实时目标检测。在本指南中，我们将介绍如何在 NVIDIA Jetson 设备上部署 Frigate。
title: 在 Jetson 上部署 Frigate 
image: https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/3.png
slug: /cn/deploy_frigate_on_jetson
last_update:
  date: 08/29/2024
  author: kourosh
---

# 在 reComputer（NVIDIA Jetson）设备上部署 Frigate

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/3.png)

Frigate 是一个开源的网络视频录像机（NVR），支持对 IP 摄像头进行实时目标检测。在本指南中，我们将介绍如何在 NVIDIA Jetson 设备上部署 Frigate。NVIDIA Jetson 是一个边缘 AI 平台，可高效部署 AI 工作负载。将 Frigate 与 Jetson 结合使用，可以利用硬件加速的机器学习高效处理视频流并检测目标。

项目目标：

* 在 NVIDIA Jetson 设备上设置 Frigate 环境，以实现高效的视频处理。
* 启用对多个 IP 摄像头视频流的实时目标检测。

完成本项目后，用户将拥有一个功能齐全的监控系统，能够实时检测目标、发送警报，并与其他智能设备集成。此解决方案不仅增强了安全性，还确保了本地处理，保护隐私并减少对云服务的依赖。

<p style={{textAlign: 'center'}}><img src="https://docs.frigate.video/assets/images/media_browser-min-1f8a7c629d1bdbee1c78f99a97a0219a.png" alt="pir" width={900} height="auto" /></p>

## 硬件准备

要成功在 NVIDIA Jetson 上使用 IP 摄像头部署 Frigate，您需要准备以下硬件组件。本节将列出必要的设备并提供简要说明，帮助您快速入门。

### 1. NVIDIA Jetson 设备：

NVIDIA Jetson 设备是运行 Frigate 并执行实时目标检测的核心处理单元。根据您的需求和预算，您可以选择以下几种型号：

* Jetson Nano：一种经济实惠的选择，适合少量摄像头的小型监控设置。
* Jetson Xavier NX：提供更强的性能，可处理更大规模的部署或更复杂的目标检测任务。
* Jetson Orin 系列：性能最强的选项，适用于高性能应用和多摄像头设置。

:::info
**所需配件**：

* 与 Jetson 型号匹配的电源适配器。
* MicroSD 卡（适用于 Jetson Nano 和 Orin）或 eMMC（适用于 Jetson Xavier NX/AGX Orin），容量至少为 32GB。
* 一个散热解决方案（例如风扇或散热片），以确保最佳工作温度。
* 初始设置所需的显示器、键盘和鼠标。
:::


### 2. IP 摄像头：
IP 摄像头提供高质量的视频流，是实现有效目标检测的关键。您至少需要一台兼容 RTSP（实时流协议）的 Dahua IP 摄像头，以便 Frigate 接收视频流。

### 3. 所需硬件总结：

* Jetson 设备：Jetson Nano、Xavier NX 或 Orin 系列
* IP 摄像头：兼容 RTSP
* MicroSD 卡/eMMC：至少 32GB（用于 Jetson 设置）
* 电源和散热设备：适用于 Jetson 设备
* 网络设备：以太网线
* 可选：外部存储、PoE 注入器/交换机

## 软件准备

设置软件环境是将 Frigate 部署到 NVIDIA Jetson 设备上的关键步骤。本节概述了确保系统能够运行 Frigate 并处理来自 IP 摄像机的视频流所需的软件组件和安装步骤。

### 1. 操作系统 (Jetpack):

确保您的 NVIDIA Jetson 设备运行的是最新版本的 NVIDIA JetPack SDK。JetPack 提供了一个基于 Linux 的操作系统以及用于 AI 开发的必要库和工具。

* 下载 JetPack SDK: 访问 NVIDIA JetPack 下载页面，下载与您的 Jetson 设备兼容的最新 JetPack SDK（本文使用 Jetpack 5.1.3 和 Xavier NX）。

* 刷写 Jetson 设备: 使用 SDK Manager 将 JetPack 镜像刷写到 Jetson 设备的 SD 卡（适用于 Jetson Nano）或 eMMC（适用于 Jetson Xavier NX/AGX Orin）。

有关 Seeed 基于 Jetson 的设备刷写指南，请参考以下链接：

* [reComputer J1010 | J101](https://wiki.seeedstudio.com/cn/reComputer_J1010_J101_Flash_Jetpack)
* [reComputer J2021 | J202](https://wiki.seeedstudio.com/cn/reComputer_J2021_J202_Flash_Jetpack)
* [reComputer J1020 | A206](https://wiki.seeedstudio.com/cn/reComputer_J1020_A206_Flash_JetPack)
* [reComputer J4012 | J401](https://wiki.seeedstudio.com/cn/reComputer_J4012_Flash_Jetpack)
* [A203 Carrier Board](https://wiki.seeedstudio.com/cn/reComputer_A203_Flash_System)
* [A205 Carrier Board](https://wiki.seeedstudio.com/cn/reComputer_A205_Flash_System)
* [Jetson Xavier AGX H01 Kit](https://wiki.seeedstudio.com/cn/Jetson_Xavier_AGX_H01_Driver_Installation)
* [Jetson AGX Orin 32GB H01 Kit](https://wiki.seeedstudio.com/cn/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

### 2. 系统更新和依赖项:

在设置操作系统后，执行系统更新并安装所需的依赖项。

:::info
**更新系统: 在 Jetson 设备上打开终端并运行以下命令:**

```
sudo apt-get update && sudo apt-get upgrade
```

**安装额外的依赖项: 安装在 Jetson 上构建和运行软件所需的常见依赖项:**
```
sudo apt-get install -y \
python3-pip \
python3-dev \
python3-venv \
build-essential \
libssl-dev \
libffi-dev \
git
```

:::



### 2. Docker 安装:

Frigate 作为 Docker 容器运行。在 Jetson 设备上安装 Docker 的步骤如下：

##### 1. 安装 Docker:
* 安装 Docker 的依赖项:
```
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
```
* 添加 Docker 的官方 GPG 密钥:
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```
* 添加 Docker 仓库:
```
sudo add-apt-repository "deb [arch=arm64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```
* 安装 Docker:
```
sudo apt-get update
sudo apt-get install -y docker-ce
```

##### 2. Docker Compose 安装:
Docker Compose 用于定义和运行多容器 Docker 应用程序，例如 Frigate，并处理运行 Docker 容器的 yaml 文件。

* 安装 Docker Compose: 使用以下命令安装 Docker Compose:
```
sudo apt-get install -y python3-pip
sudo pip3 install docker-compose
```
* 验证 Docker Compose 安装:
```
docker-compose --version
```


##### 3. NVIDIA 容器工具包:

要安装 NVIDIA 容器工具包，您可以参考参考链接。根据您的系统，按照以下安装指南进行操作。您需要安装它以便在 Docker 容器中使用 GPU。

##### 4. Frigate 配置:
* 设置配置目录: 创建一个目录以保存 Frigate 配置文件:
```
mkdir ~/frigate
cd ~/frigate
```
* 创建配置文件: 您需要在 ~/frigate 目录中创建一个 docker-compose.yml 和一个 config.yml 文件。这些文件将定义 Frigate 的部署方式以及它如何连接到您的 IP 摄像机。docker-compose.yml 定义了 Frigate 的 Docker 服务，而 config.yml 指定了 Frigate 的设置，例如摄像机流、检测设置和 MQTT 集成。

完成这些步骤后，您的 NVIDIA Jetson 设备将完全准备好运行 Frigate，您将可以继续部署 Frigate 并集成您的 IP 摄像机以进行实时目标检测。

## 入门指南

现在您已经准备好了硬件并设置了软件环境，是时候在您的 NVIDIA Jetson 设备上部署 Frigate 并将其连接到您的 Dahua IP 摄像机了。按照以下步骤开始部署：

### 1. 拉取 Frigate Docker 镜像：

在 Frigate 网站中，使用 Docker 和 Compose 是推荐的安装方法。首先，您需要拉取为 TensorRT 优化的 Frigate Docker 镜像。此镜像专为利用 NVIDIA Jetson 设备的 GPU 功能进行高效目标检测而设计。

我们这里使用的是 JP5.1.3，拉取命令如下：
```
docker pull ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5
```

当前稳定版本的官方 Docker 镜像标签如下：

* stable：标准 Frigate 构建，适用于 amd64 和为 RPi 优化的 arm64 构建
* stable-standard-arm64：标准 Frigate 构建，适用于 arm64
* stable-tensorrt：专为运行 NVIDIA GPU 的 amd64 设备设计的 Frigate 构建

当前稳定版本的社区支持 Docker 镜像标签如下：

* stable-tensorrt-jp5：为运行 Jetpack 5 的 NVIDIA Jetson 设备优化的 Frigate 构建
* stable-tensorrt-jp4：为运行 Jetpack 4.6 的 NVIDIA Jetson 设备优化的 Frigate 构建
* stable-rk：适用于带有 Rockchip SoC 的 SBC 的 Frigate 构建
* stable-rocm：适用于 AMD GPU 和 iGPU 的 Frigate 构建

您可以根据您的部署选择使用这些标签。但在这里，我们使用 Jetson、TensorRT 和 Jetpack 5.1.3，因此需要拉取 `stable-tensorrt-jp5`。此 Docker 镜像包含运行 Frigate 所需的所有软件包，无需额外安装 TensorRT 等。

### 2. 准备 Frigate 配置文件：

在开始部署之前，您需要配置 Frigate 以适应您的特定设置，包括摄像机流和检测设置。

**config.yml 文件**：此文件将包含 Frigate 的配置，包括摄像机设置和检测参数。使用文本编辑器创建一个名为 config.yml 的新文件，并添加以下内容。此配置将在 NVIDIA Jetson 设备上使用 TensorRT 从 Dahua IP 摄像机进行高效目标检测。
```
mqtt:
  enabled: False

cameras:
  dummy_camera: # <--- 之后将替换为您的实际摄像机
    enabled: True
    ffmpeg:
      hwaccel_args: preset-jetson-h264
      inputs:
        - path: rtsp://admin:admin1234@192.168.1.108:554/cam/realmonitor?channel=1&subtype=0
          roles:
            - detect

birdseye:

  enabled: True
  mode: objects
         
detectors:
  tensorrt:
    type: tensorrt
    device: 0 # 默认值，选择第一个 GPU

model:
  path: /config/model_cache/tensorrt/yolov7-320.trt
  input_tensor: nchw
  input_pixel_format: rgb
  width: 320
  height: 320

detect:
  fps : 20
  width: 1280
  height: 720
  
objects:
  track:
    - person 
```

关键点包括：

**禁用 MQTT**：MQTT 集成被关闭，因此 Frigate 不会通过 MQTT 发送检测事件。

**摄像机设置**：启用了一个名为 dummy_camera 的占位摄像机，使用 FFmpeg 的硬件加速处理 H.264 视频流。它通过 RTSP URL 连接到 Dahua IP 摄像机进行检测。

**启用鸟瞰视图**：提供一个仅显示所有摄像机源中检测到的对象的概览。

**TensorRT 检测器**：使用 TensorRT 在主 GPU 上进行推理，优化检测速度和效率。

**模型细节**：指定了一个为 TensorRT 优化的 YOLOv7 模型进行目标检测，输入大小为 320x320，格式为 RGB。

**检测设置**：以每秒 20 帧的速度处理视频，检测分辨率为 1280x720。

**目标跟踪**：配置为仅跟踪人，减少计算负载并专注于相关检测。

### 3. 准备 docker-compose.yml 文件：

此文件定义了 Frigate 服务以及如何使用 Docker Compose 运行它。在同一目录下创建一个名为 docker-compose.yml 的新文件，并添加以下内容：
```
services:
  frigate:
    privileged: true
    environment:
      - YOLO_MODELS=yolov7-320
      - USE_FP16=false
    container_name: frigate
    runtime: nvidia 
    #devices:
      #- /dev/video0:/dev/video0 
    volumes:
      - /home/jetson/frigate/config:/config
      - /home/jetson/frigate/storage:/media/frigate
      #- type: tmpfs # 可选：1GB 内存，减少 SSD/SD 卡磨损
        #target: /tmp/cache
        #tmpfs:
          #size: 1000000000
    ports:
      - "5000:5000"
      - "8554:8554"
    image: ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5
```

提供的代码片段是 Docker Compose 设置中 Frigate 服务的配置。Frigate 是一个开源的 AI 驱动视频监控系统，可用于实时检测和跟踪目标。

以下是配置的详细说明：

1. **services**：此部分定义了 Docker Compose 设置中的服务。

2. **frigate**：这是 Frigate 容器的服务名称。

3. **privileged: true**：授予 Frigate 容器特权访问权限，这通常是访问摄像机等硬件设备所必需的。

4. **environment**：此部分为 Frigate 容器设置了两个环境变量：
   - `YOLO_MODELS=yolov7-320`：指定用于目标检测的 YOLO（You Only Look Once）模型。
   - `USE_FP16=false`：禁用 16 位浮点精度，这可以在某些硬件上提高性能。

5. **container_name: frigate**：设置 Frigate 容器的名称。

6. **runtime: nvidia**：指定 Frigate 容器的运行时环境，在此情况下为 NVIDIA 运行时，用于 GPU 加速处理。

7. **volumes**：挂载以下目录：
   - `/home/jetson/frigate/config:/config`：将本地配置目录挂载到容器的 `/config` 目录。
   - `/home/jetson/frigate/storage:/media/frigate`：将本地存储目录挂载到容器的 `/media/frigate` 目录。
   - 注释掉的行显示了一个可选配置，使用 tmpfs（内存文件系统）进行缓存，这可以帮助减少存储设备的磨损。

8. **端口**: 暴露以下端口：
   - `5000:5000`: 将容器的 5000 端口映射到主机的 5000 端口。
   - `8554:8554`: 将容器的 8554 端口映射到主机的 8554 端口。

9. **镜像: ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5**: 指定用于 Frigate 容器的 Docker 镜像，此处使用的是 GitHub Container Registry 中 `blakeblackshear/frigate` 仓库的 `stable-tensorrt-jp5` 标签。

此配置在 Docker Compose 环境中设置了一个 Frigate 服务，提供运行 Frigate 视频监控系统的方式，并支持定制设置和硬件加速。

### 3. 使用 Docker Compose 部署 Frigate:
在配置文件设置完成并拉取了 Docker 镜像后，现在可以使用 Docker Compose 部署 Frigate。

1.  进入 Frigate 目录: 确保您位于创建配置文件的目录中：
```
cd ~/frigate
```

2.  使用 Docker Compose 启动 Frigate: 运行以下命令启动 Frigate：
```
docker-compose up -d
```
此命令以分离模式启动 Frigate 服务。Docker 容器现在将在后台运行。

3.  验证 Frigate 是否正在运行: 使用以下命令检查 Frigate 容器是否正在运行：
```
docker ps
```
4.  运行 Docker 后，您可以看到 Tensorrt 的日志，这表明 Frigate 正在 GPU 上运行。

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/1.png)


### 4. 访问 Frigate Web 界面:
一旦 Frigate 启动并运行，您可以访问 Web 界面来监控视频流并配置设置：

1.  打开一个网页浏览器: 在连接到与 Jetson 设备相同网络的设备上，打开网页浏览器。
2.  输入 Jetson 设备的 IP 地址: 在地址栏中输入 Jetson 设备的 IP 地址，后跟端口 5000（例如，`http://jetson-ip-address:5000` 或 `http://127.0.0.1:5000`）。
3. 查看仪表板: Frigate 仪表板将显示来自连接的 Dahua IP 摄像头的实时视频流、检测事件和配置选项。
4. 现在您可以通过 jtop 或 Frigate 系统检查 Jetson 是否正在使用 GPU 进行检测。如下图所示，检测部分每帧运行约 33 毫秒。

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/2.png)

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/4.png)

## 故障排除

在硬件连接、软件调试或上传过程中可能会遇到一些问题，尤其是在运行 Docker 时。您可以使用 Docker 日志来解决错误。
```
docker logs frigate
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 参考文献
1.  [Frigate 网站](https://frigate.video/)
2.  [Frigate Github](https://github.com/blakeblackshear/frigate)
3.  [NVIDIA 容器工具包](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)