---
description: 本文档提供了在 Raspberry Pi 5 上部署 Frigate NVR 和 Hailo 8 的分步指南。
title: 使用 Raspberry Pi 5 部署 Frigate NVR
keywords:
  - Edge
  - reComputer r1000
  - 目标检测
image: https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/frigate.webp
slug: /cn/frigate_nvr_with_raspberrypi_5
last_update:
  date: 05/15/2025
  author: Joshua Lee

no_comments: false # 用于 Disqus
---
:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 简介

**Frigate NVR** 是一个开源的网络视频录像机，专为使用 AI 模型进行实时目标检测而设计。结合 **Raspberry Pi 5**，它可以实现高效的边缘视频监控。本指南将引导您完成安装和配置过程，以实现最佳设置。

## 官方 Frigate 

### 准备硬件

#### 推荐组件

<div class="table-center">
	<table align="center">
	<tr>
		<th>reComputer AI R2130</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

**或者，您还需要至少一台用于视频流的摄像头。您可以参考 [推荐硬件](https://docs.frigate.video/frigate/hardware#cameras) 查看推荐的摄像头。**

### 安装 Hailo PCIe 驱动

#### 第 1 步：启用 PCIe Gen 3

打开终端并运行以下命令。

```bash
$ sudo apt update
$ sudo raspi-config
```

在对话框中，选择 **6 Advanced Options**，然后选择 **A8 PCIe Speed**。

![6 Advanced Options](https://raw.githubusercontent.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/main/resource/1.png)
![A8 PCIe Speed](https://raw.githubusercontent.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/main/resource/2.png)

选择“是”以启用 PCIe Gen 3 模式。

![Choose Yes](https://raw.githubusercontent.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L/main/resource/3.png)

之后，点击“完成”退出。

编辑 `/boot/firmware/config.txt` 文件，在文件末尾添加以下行。

```
dtoverlay=pciex1-compat-pi5,no-mip
```

#### 第 2 步：安装 Hailo PCIe 驱动

安装 dkms 包。此包是安装 Hailo PCIe 驱动所需的。

```bash
$ sudo apt update
$ sudo apt install dkms
```

从 [GitHub](https://github.com/hailo-ai/hailort-drivers) 获取 Hailo PCIe 驱动。

```bash
$ git clone https://github.com/hailo-ai/hailort-drivers
$ cd hailort-drivers/linux/pcie
$ git checkout 24e7ff2fb58fab7029024c1a1d3f2d1914f56d7b
```

然后，安装 Hailo PCIe 驱动。

```bash
$ sudo make install_dkms
```

安装完成后，下载 Hailo 固件并将其复制到 `/lib/firmware/hailo` 目录。

```bash
$ cd ../..
$ ./download_firmware.sh
$ sudo mkdir -p /lib/firmware/hailo
$ sudo cp hailo8_fw*.bin /lib/firmware/hailo/hailo8_fw.bin
```

为避免 PCIe max_desc_page_size 问题，我们还需要在 `/etc/modprobe.d/hailo_pci.conf` 中创建一个规则，内容如下。

```bash
options hailo_pci force_desc_page_size=4096
```

重启系统以使更改生效。

```bash
$ sudo reboot
```

系统重启后，Hailo PCIe 驱动已成功安装。将会创建 `/dev/hailo0` 设备。运行以下命令检查设备。

```bash
$ ls /dev/hailo*
/dev/hailo0
```

### 安装 Frigate NVR

在本部分中，我们假设您已设置好摄像头，并准备通过 RTSP 协议以 1920x1080 分辨率进行流媒体传输。

- 示例 RTSP URL: `rtsp://admin:passw0rd@192.168.98.11:554/cam/realmonitor?channel=1&subtype=0`

#### 第 1 步：准备环境

1. **更新系统：**

   ```bash
   $ sudo apt update
   ```

2. **安装 Docker：**

   ```bash
   $ curl -fsSL get.docker.com | bash
   $ sudo usermod -aG docker $USER
   ```

3. **重启系统：**

   ```
   $ sudo reboot
   ```

#### 第 2 步：部署 Frigate

1. **拉取 Frigate 镜像：**

    前往 [Package frigate](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/versions)，选择一个带有 `-h8l` 后缀的镜像。在本例中，我们选择 `ghcr.io/blakeblackshear/frigate:0.15.0-rc2-h8l`。

    ```bash
    $ docker pull ghcr.io/blakeblackshear/frigate:0.15.0-rc2-h8l
    ```

2. **创建 Docker Compose 文件：**

    以下是 `frigate.yml` 文件的示例，其中 `hailo0` 设备是您在前一步中创建的，配置文件位于 `./config` 目录，数据文件位于 `./data` 目录：

    ```yml
    services:
        frigate-hailo:
            container_name: frigate-hailo
            privileged: true
            restart: unless-stopped
            image: ghcr.io/blakeblackshear/frigate:0.15.0-rc2-h8l
            shm_size: 1024mb
            devices:
                - /dev/hailo0:/dev/hailo0
            volumes:
                - /etc/localtime:/etc/localtime:ro
                - ./config/:/config
                - ./data/db/:/data/db
                - ./data/storage:/media/frigate
                - type: tmpfs
                  target: /tmp/cache
                  tmpfs:
                    size: 1g
            ports:
                - 5000:5000
    ```

3. **编辑 Frigate 配置：**

    以下是 `config/config.yml` 文件的示例，用于 Frigate 应用程序：

    ```yml
    database:
        path: /data/db/frigate.db

    go2rtc:
        streams:
            home:
                - rtsp://admin:passw0rd@192.168.98.11:554/cam/realmonitor?channel=1&subtype=0

    cameras:
        home:
            ffmpeg:
              inputs:
                - path: rtsp://admin:passw0rd@192.168.98.11:554/cam/realmonitor?channel=1&subtype=0
                  roles:
                    - record
                    - detect

    mqtt:
        enabled: False

    objects:
        track:
            - person
            - cat

    detectors:
        hailo8l:
            type: hailo8l
            device: PCIe

    model:
        width: 300
        height: 300
        model_type: ssd
        path: /config/model_cache/h8l_cache/ssd_mobilenet_v1.hef

    version: 0.15-1
    ```

4. **启动 Docker 实例：**

    ```bash
    $ docker compose -f frigate.yml up -d
    ```

    当 Frigate 启动并运行后，您可以通过访问 `http://<your-raspberry-pi-ip>:5000` 打开 Frigate 的 Web 界面以检查摄像头流。

    ![frigate-web](https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/frigate_web.webp)

## Seeed Frigate 

### 修改 PCIe 设置

打开 config.txt 文件
```
sudo nano /boot/firmware/config.txt 
```

在 config.txt 中添加以下内容
```
dtparam=pciex1_gen=3
dtoverlay=pciex1-compat-pi5,no-mip
```
然后使用 `Ctrl+x` 保存文件并重启 AI 盒子。

### 安装 Docker 和 hailo-all

```
sudo apt update
sudo apt install hailo-all
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
sudo apt install docker-compose-plugin
```

### 创建 yml 文件 

创建 frigate.yml 文件以通过 Docker Compose 运行 Frigate
```
cd ~
sudo nano frigate.yml
```
以下是一个 frigate.yml 的示例
```
version: "3.9"
services:
    frigate-hailo:
        container_name: frigate-hailo
        privileged: true
        restart: unless-stopped
        image: frigate_seeed:latest
        shm_size: 1024mb
        environment:
            - HAILO_MONITOR=1
        devices:
            - /dev/hailo0:/dev/hailo0
        volumes:
            - /etc/localtime:/etc/localtime:ro
            - ./config/:/config
            - ./data/db/:/data/db
            - ./data/storage:/media/frigate
            - type: tmpfs
              target: /tmp/cache
              tmpfs:
                  size: 1000000000
        ports:
            - 5000:5000
            - 1984:1984
            - 5002:5002
            - 5003:5003
```

下载 YOLO 模型并创建 config.yml。
```
mkdir config && cd config && mkdir model_cache
cd model_cache && wget https://hailo-model-zoo.s3.eu-west-2.amazonaws.com/ModelZoo/Compiled/v2.14.0/hailo8/yolov8n.hef

cd .. && nano config.yml
```
以下是一个 config.yml 的示例

```yml
database:
  path: /data/db/frigate.db

go2rtc:
  streams:
    home:
      - rtsp://admin:passw0rd@10.1.1.188:554/cam/realmonitor?channel=1&subtype=1
    home1:
      - rtsp://admin:passw0rd@10.1.1.188:554/cam/realmonitor?channel=1&subtype=1
    yard:
      - rtsp://admin:passw0rd@10.1.1.189:554/cam/realmonitor?channel=1&subtype=1
    yard1:
      - rtsp://admin:passw0rd@10.1.1.189:554/cam/realmonitor?channel=1&subtype=1

cameras:
  home:
    ffmpeg:
      inputs:
        - path: rtsp://127.0.0.1:8554/home
          roles:
            - detect

    motion:
      threshold: 45
      contour_area: 60
      improve_contrast: true

  yard:
    ffmpeg:
      inputs:
        - path: rtsp://127.0.0.1:8554/yard
          roles:
            - detect

    motion:
      threshold: 45
      contour_area: 60
      improve_contrast: true
      
  home1:
    ffmpeg:
      inputs:
        - path: rtsp://127.0.0.1:8554/home1
          roles:
            - detect


    motion:
      threshold: 45
      contour_area: 60
      improve_contrast: true
      
  yard1:
    ffmpeg:
      inputs:
        - path: rtsp://127.0.0.1:8554/yard1
          roles:
            - detect

    motion:
      threshold: 45
      contour_area: 60
      improve_contrast: true
mqtt:
  enabled: false

objects:
  track:
    - person
    - cat

detectors:
  hailo8l:
    type: hailo8l
    device: PCIe

model:
  width: 640
  height: 640
  path: /config/model_cache/yolov8n.hef

version: 0.16-0

camera_groups:
  test:
    order: 1
    icon: LuAlignEndHorizontal
    cameras:
      - home
      - home1
      - yard
      - yard1
``` 

### 拉取 Docker 镜像并运行 Frigate

拉取 frigate_seeed 镜像

```
cd ~
docker pull frigate_seeed
docker compose -f frigate.yml start 
```
然后在 AI 盒子的 Web 浏览器中打开 `localhost:5000`：
 ![frigate-web](https://files.seeedstudio.com/wiki/AI_box_deepseek/seeed_frigate.png)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>