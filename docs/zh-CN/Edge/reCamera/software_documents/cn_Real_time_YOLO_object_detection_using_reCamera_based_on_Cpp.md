---
description: 本文档演示如何在 reCamera 上使用 C++ 实现实时 YOLO 目标检测。
title: 基于 C++ 的 reCamera 实时 YOLO 目标检测
keywords:
  - Http
  - reCamera
  - 目标检测
  - YOLO
  - C++
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /cn/real_time_yolo_object_detection_using_recamera_based_on_cpp
last_update:
  date: 06/26/2025
  author: Liangyuxin

no_comments: false # 用于 Disqus
---

# 基于 C++ 的 reCamera 实时 YOLO 目标检测

本文档演示如何基于 reCamera 终端，通过交叉编译使用 C++ 实现实时拍照、YOLO 目标检测以及通过 HTTP 获取结果。此方法避免了在 reCamera 上使用 Node-RED 时遇到的过热问题。您可以参考本文档修改 C++ 代码以实现自定义的计算机视觉应用。

## 环境准备
### 编译前准备

首先，您需要参考“[使用 C/C++ 开发](https://wiki.seeedstudio.com/cn/recamera_develop_with_c_cpp)”文档，在您的 Linux 系统上配置交叉编译环境。
**注意**：每次启动后需要重新配置路径：
```
export SG200X_SDK_PATH=$HOME/recamera/sg2002_recamera_emmc/
export PATH=$HOME/recamera/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```
然后，下载 **[Realtime_detection_http](https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/Realtime_detection_http.zip)** 项目，并进行编译。

```
cd Realtime_detection_http/
mkdir build && cd build
cmake ..
make
```
如果在 build 目录中出现绿色的可执行文件 **Realtime_detection_http**，则表示编译成功：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/1.png" /></div>

接着打开 reCamera 终端，将可执行文件复制到 reCamera 终端目录中：
```
sudo scp Realtime_detection_http recamera@192.168.42.1:/home/recamera/
```
### reCamera 准备工作
1. 下载已部署的 **YOLOv11** 模型（可从 **[On Device Models](https://wiki.seeedstudio.com/cn/recamera_on_device_models/)** 获取），然后将模型的 **.cvimodel** 文件复制到 reCamera 终端目录：**/home/recamera/**。
2. 在执行代码之前，请访问 reCamera 的 [工作区](http://192.168.42.1/#/workspace) 终止相关进程（参考 **[使用 C/C++ 开发](https://wiki.seeedstudio.com/cn/recamera_develop_with_c_cpp)**），以防止内存占用。
3. 然后导航到 **/etc/init.d/**，将 **S93sscma-supervisor** 和 **S91sscma-node** 文件夹复制到 **/home/recamera/** 或其他位置进行备份，并删除原始的 **S93sscma-supervisor** 和 **S91sscma-node** 文件夹，以防止内存占用和程序冲突。

```
cd /etc/init.d/
sudo scp S93sscma-supervisor /home/recamera/
sudo scp S91sscma-node /home/recamera/
sudo rm -r S93sscma-supervisor
sudo rm -r S91sscma-node
```
## 运行程序

在 reCamera 终端的 **/home/recamera/** 目录下以管理员身份运行程序：
```
sudo ./Realtime_detection_http
```

## 结果

终端显示以下内容，表明程序正常运行：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/2.png" /></div>

您可以通过网页浏览器或 Postman 访问 http://192.168.42.1/modeldetector。reCamera 将立即捕获一张照片并返回 YOLOv11 检测到的对象。
浏览器：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/3.png" /></div>

Postman:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/4.png" /></div>

返回的信息包括以下数据：
- **Code**: 1（运行中）
- **Msg**: 错误信息
- **Initialize_camera_duration**: 摄像头初始化时长，仅在首次访问时显示。
- **Initialize_model_duration**: 模型初始化时长，仅在首次访问时显示。
- **Data**:
    - **Score**: 检测置信度分数（0-1）
    - **Target**: 检测到的对象名称
    - **Box**: [x1, y1, x2, y2]：检测框坐标（以像素表示，分别为[左，上，右，下]边缘）
    - **Center**: [x, y]：检测框的归一化中心位置（相对于图像宽度/高度的比例）
    - **Size**: [w, h]：检测框的归一化宽度和高度（相对于图像尺寸的比例）
    - **Release_duration**: 清除摄像头缓存所需时间（毫秒）
    - **Capture_duration**: 图像采集时长（毫秒）
    - **Image_preprocessing_duration**: 推理前的图像预处理时长（毫秒）
    - **Detection_duration**: 模型检测时长（毫秒）（包括预处理、推理、后处理）
- **Duration**: 程序总执行时间（毫秒）
- **Timestamp**: Unix 时间戳

终端将显示：
- 摄像头初始化参数：
    - 分辨率：**1920×1080**
    - 帧率：**5 fps**
    - 捕获通道：**通道 2**
- 捕获图像大小（例如 **Jpeg 大小：216149（像素）**）
- 不同步骤中的内存使用情况（MB）：
    - 捕获前（**Memory usage**）
    - 释放中（**Memory usage_during_**）
    - 捕获后（**Memory usage_after**）
    - 图像预处理后（**Memory usage_before_model**）
    - 模型检测后（**Memory usage_after_model**）
- 模型检测时长（毫秒）：
    - 预处理（例如 **pre: 9ms**）
    - 推理（例如 **infer: 40ms**）
    - 后处理（例如 **post: 395ms**）

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/5.png" /></div>


<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/6.png" /></div>



在 reCamera 终端上，检测到的图像可以自动保存：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/7.jpg" /></div>

您可以通过设备持续访问以获取实时检测结果，用于智能安防和监控等应用。

您可以在 **registerModelDetector()**（**Realtime_detection_http/src/http.cpp**）和 **model_detector()**（**Realtime_detection_http/src/model_detector.cpp**）中修改返回消息的格式。
您还可以在调用 **initialize_model(const std::string& model_path)** 时使用您自己部署的模型，并在 **initialize_camera()**（**Realtime_detection_http/src/model_detector.cpp**）中修改摄像头初始化设置：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/8.png" /></div>


检测完成后，您可以按 Ctrl+C 终止操作。程序将停止摄像头。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/9.png" /></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>