---
description: reTerminal 和 Pi 摄像头模块集成
title: reTerminal 和 Pi 摄像头模块
keywords:
  - Edge
  - reTerminal 
  - piCamera
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-piCam
last_update:
  date: 5/17/2023
  author: Kasun Thushara
---
# reTerminal 和 Pi 摄像头模块
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/cam_images.jpg" alt="pir" width="600" height="auto"/></p>

Raspberry Pi 摄像头，通常称为 PiCam，是专为 Raspberry Pi 单板计算机设计的摄像头模块。它提供了一种紧凑且方便的解决方案，可直接从您的 Raspberry Pi 设备捕获图像和录制视频。

以下是每个版本 PiCam 的规格：

**PiCam v1 (Camera Module v1.3):**

- 传感器：OmniVision OV5647
- 分辨率：5 百万像素
- 视频模式：1080p30、720p60、640x480p60/90

**PiCam v2 (Camera Module v2):**
- 传感器：Sony IMX219
- 分辨率：8 百万像素 (3280 x 2464 像素)
- 视频模式：1080p30、720p60、640x480p90

**PiCam v3 (Camera Module 3):**
- 传感器：Sony IMX708
- 分辨率：12 百万像素 (4056 x 3040 像素)
- 视频模式：1080p30、720p60、640x480p90

| Raspberry Pi 摄像头模块 V1 | Raspberry Pi 摄像头模块 V2 | Raspberry Pi 摄像头模块 3 |
|----------|---------------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/pi_cam3.jpg)|
|[立即购买！](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-p-1659.html?queryID=9e37f656a0eb0086c424e93bcfffadf4&objectID=1242&indexName=bazaar_retailer_products)|[立即购买！](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)|[立即购买！](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-p-5574.html?queryID=11243e5e9f95c4f4f0716b229dd8dcf0&objectID=5574&indexName=bazaar_retailer_products)|

| Raspberry Pi 摄像头模块 3 Wide NoIR | Raspberry Pi 摄像头模块 3 NoIR | Raspberry Pi 摄像头模块 3 Wide |
|----------|---------------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picamWN.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picamnoir.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam3w.jpg)|
|[立即购买！](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-Wide-NoIR-p-5577.html?queryID=f7e448b5e2e91156540a55c164fe9806&objectID=5577&indexName=bazaar_retailer_products)|[立即购买！](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-NoIR-p-5575.html?queryID=580ed0215d20c7d125b592090e007ba6&objectID=5575&indexName=bazaar_retailer_products)|[立即购买！](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-Wide-p-5576.html?queryID=b165ed9d2e2ff82f45003dbb7c921182&objectID=5576&indexName=bazaar_retailer_products)|

所有版本的 PiCam 都通过 MIPI CSI-2 接口连接到 Raspberry Pi，提供直接且高速的连接，用于传输图像和视频数据。

PiCam 提供了一系列功能和能力，使其适用于各种应用，**包括摄影、摄像、计算机视觉项目、监控等**。其小巧的外形和与 Raspberry Pi 的易集成使其成为爱好者、创客和专业人士的热门选择。

请注意，上述规格适用于标准 PiCam 模块，第三方制造商可能提供其他变体或替代摄像头模块。

在安装 PiCam 时，您有两种选择。第一种选择是使用 Seeed Studio 提供的预构建镜像，这些镜像可以在我们的 wiki 页面上找到。这些预构建镜像专为 PiCam 配置，确保兼容性和易用性。然而，请注意，这些镜像仅适用于 PiCam v1（OmniVision OV5647 传感器）。

或者，您可以选择从官方网站安装最新版本的 Raspberry Pi OS。通过这样做，您将能够访问最新的功能和改进。Seeed Studio 推荐此方法，并在我们的 wiki 页面上提供了安装必要驱动程序和相关组件的说明，以确保 PiCam 在全新 Raspberry Pi OS 安装上的正常运行。

## 使用预构建的 Raspberry Pi 镜像

要在 Seeed Studio reTerminal 上安装 PiCam，您可以选择使用 Seeed Studio 提供的预构建镜像。这些镜像可以在我们的 Wiki 页面上找到，并专为 reTerminal 设计。

:::note

需要注意的是，预构建镜像目前**仅支持 PiCam v1，该模块使用 OmniVision OV5647 传感器**。这意味着您可以使用 `raspistill` 命令捕获图像或录制视频。

:::

- **步骤 1** 访问 Seeed Studio 专门为 reTerminal 提供的 Wiki 页面，并导航到提供预构建镜像的部分。（您可以参考此链接获取镜像并了解安装步骤。如果您已经完成此步骤，请跳过。[此链接](https://wiki.seeedstudio.com/cn/reTerminal-FAQ/#q2-how-can-i-flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)）

- **步骤 2** 关闭 reTerminal 电源，并将 PiCam v1 模块连接到 reTerminal 的摄像头接口。确保连接牢固。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/reterminal_inside.png" alt="pir" width="600" height="auto"/></p>

- **步骤 3** 组装 reTerminal 并启动设备。进入桌面上的 reTerminal 图标，启用摄像头功能并重新启动设备。

- **步骤 4** 打开终端或通过 SSH 连接到 reTerminal，以访问命令行界面。

- **步骤 5** 使用 `raspistill` 命令捕获图像。您可以访问此网站获取更多命令。[链接](https://projects.raspberrypi.org/en/projects/getting-started-with-picamera/3)
```sh
raspistill -o Desktop/image.jpg
```

## 对于全新安装的 Raspberry Pi OS

我们推荐从 Raspberry Pi 官方网站下载 Raspbian Bullseye 64 位全新镜像，以用于 Seeed Studio reTerminal：

- **步骤 1** Seeed Studio 提供了详细的说明，指导您在刷入新的 Raspberry Pi OS 或其他操作系统后如何安装驱动程序。请参考 Seeed Studio reTerminal 的 Wiki 页面，并按照 ["刷入新的 Raspberry Pi OS"](https://wiki.seeedstudio.com/cn/reTerminal#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc) 和 ["如何安装 reTerminal 驱动程序"](https://wiki.seeedstudio.com/cn/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os) 部分的说明。如果您已经完成此步骤，请跳过。

- **步骤 2** 关闭 reTerminal 电源，并将 PiCam 模块连接到 reTerminal 的摄像头接口。确保连接牢固。

- **步骤 3** 打开终端或通过 SSH 连接到您的 reTerminal，并执行以下命令以编辑 config.txt 文件：

```sh
sudo nano /boot/config.txt 
```

- **步骤 4** 在 config.txt 文件中，您需要进行以下更改以启用 PiCam：

    - 找到 `camera_auto_detect=1` 这一行，并在行首添加 `#` 将其注释掉。这一步是为了禁用摄像头模块的自动检测功能。

    - 在 config.txt 文件中添加以下行：
        - `dtoverlay=ov5647,cam0`
        - `dtoverlay=camera-mux-2port`

            
:::note

如果您使用的是 PiCam v3 NoIR wide 而不是 PiCam v1，请将 **`dtoverlay=ov5647,cam0`** 替换为 **`dtoverlay=imx708,cam0`**。`dtoverlay` 配置指定了所使用的摄像头模块和摄像头多路复用器。

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/muxcam.PNG" alt="pir" width="600" height="auto"/></p>

- **步骤 5** 保存对 config.txt 文件的更改，按下 `Ctrl + X`，然后按 `Y`，最后按回车键确认。最后，重新启动 reTerminal 以应用修改：

```sh
sudo reboot
```

重新启动后，PiCam 应该已配置完成，可以与您的 Seeed Studio reTerminal 一起使用。您现在可以使用 libcamera 捕获图像或录制视频。

- **步骤 6** 打开终端并输入以下代码以测试一切是否正常工作：

```sh
sudo libcamera-hello
```

`libcamera-hello` 是摄像头的 "hello world" 应用程序。它启动摄像头，显示预览窗口，并不执行其他操作。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/imx708.PNG" alt="pir" width="600" height="auto"/></p>

您可以参考以下文档以获取更多关于 [libcamera](https://www.raspberrypi.com/documentation/computers/camera_software.html) 的详细信息。