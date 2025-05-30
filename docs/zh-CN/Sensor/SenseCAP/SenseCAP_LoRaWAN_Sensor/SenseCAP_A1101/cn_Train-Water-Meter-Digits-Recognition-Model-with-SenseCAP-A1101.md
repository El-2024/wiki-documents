---
description: 使用 SenseCAP A1101 训练水表数字识别模型
title: 使用 SenseCAP A1101 训练水表数字识别模型
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Train-Water-Meter-Digits-Recognition-Model-with-SenseCAP-A1101
last_update:
  date: 05/15/2025
  author: JoJang
date: 05/15/2025
---

# 使用 SenseCAP A1101 训练水表数字识别模型

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

## 概述

在本篇教程中，我们将教您如何为特定应用训练自己的水表模型，并轻松将其部署到 SenseCAP A1101 上。让我们开始吧！
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/0.jpg"/></div>

## 硬件准备

- [SenseCAP A1101 - LoRaWAN 视觉 AI 传感器](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html)
- USB Type-C 数据线
- 具有互联网连接的 Windows/ Linux/ Mac 设备

## 软件准备

在本教程中，我们将使用以下软件技术：

- [Roboflow](https://roboflow.com) - 用于标注
- [SenseCraft Model Assistant](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process) - 用于训练
- [TensorFlow Lite](https://www.tensorflow.org/lite) - 用于推理

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/11.png"/></div>

现在让我们开始设置软件。Windows、Linux 和 Intel Mac 的软件设置相同，而 M1/M2 Mac 的设置会有所不同。

:::tip
**什么是 SenseCraft Model Assistant？**  
Seeed Studio SenseCraft Model Assistant 是一个专注于嵌入式 AI 的开源项目。我们对 OpenMMLab 的优秀算法进行了优化，使其更适合实际场景，并使实现过程更加用户友好，从而在嵌入式设备上实现更快、更准确的推理。
:::

### Windows、Linux、Intel Mac

- **步骤 1.** 确保计算机上已安装 Python。如果尚未安装，请访问 [此页面](https://www.python.org/downloads/) 下载并安装最新版本的 Python。

- **步骤 2.** 安装以下依赖项：

```sh
pip3 install libusb1
```

### M1/M2 Mac

- **步骤 1.** 安装 Homebrew：

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- **步骤 2.** 安装 conda：

```sh
brew install conda
```

- **步骤 3.** 下载 libusb：

```sh
wget https://conda.anaconda.org/conda-forge/osx-arm64/libusb-1.0.26-h1c322ee_100.tar.bz2
```

- **步骤 4.** 安装 libusb：

```sh
conda install libusb-1.0.26-h1c322ee_100.tar.bz2
```

:::caution
在进行以下操作之前，您需要确保 BootLoader 的版本大于 2.0.0。如果不确定，请按照 [此部分](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101/#check-bootloader-version) 中提到的步骤检查 BootLoader 版本。如果版本低于 2.0.0，请按照 [此部分](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101/#update-bootloader) 中的步骤更新 BootLoader。
:::

## 1. 收集图像数据

- **步骤 1.** 使用 USB Type-C 数据线将 SenseCAP A1101 连接到电脑

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **步骤 2.** 双击启动按钮进入 **启动模式**

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

完成后，您将在文件资源管理器中看到一个名为 **SENSECAP** 的新存储驱动器。

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **步骤 3.** 将 [此 .uf2 文件](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_capture_firmware_v01-00.uf2) 拖放到 **SENSECAP** 驱动器中

当 .uf2 文件复制完成后，驱动器将消失。这表示 .uf2 文件已成功上传到模块。

- **步骤 4.** 将 [此 Python 脚本](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/tools/capture_images_script.py) 复制并粘贴到电脑中新创建的名为 **capture_images_script.py** 的文件中

- **步骤 5.** 执行 Python 脚本以开始捕获图像

```sh
python3 capture_images_script.py
```

默认情况下，它每 300 毫秒捕获一张图像。如果您想更改此设置，可以使用以下格式运行脚本：

```sh
python3 capture_images_script.py --interval <time_in_ms>
```

例如，每秒捕获一张图像：

```sh
python3 capture_images_script.py --interval 1000
```

执行上述脚本后，SenseCAP A1101 将开始连续从内置摄像头捕获图像，并将所有图像保存到名为 **save_img** 的文件夹中。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/1.png"/></div>

同时，它将在录制时打开一个预览窗口。

当您捕获了足够的图像后，点击终端窗口并按以下组合键停止捕获过程：

- Windows: Ctrl + Break
- Linux: Ctrl + Shift + \
- Mac: CMD + Shift + \

### 图像采集完成后更改设备固件

完成数据集的图像录制后，您需要将 SenseCAP A1101 内的固件更改回原始版本，以便再次加载目标检测模型进行检测。以下是步骤：

- **步骤 1.** 按照之前的说明进入 SenseCAP A1101 的 **启动模式**

- **步骤 2.** 将 [此 .uf2 文件](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_v01-30.uf2) 拖放到 **SENSECAP** 驱动器中

当 .uf2 文件复制完成后，驱动器将消失。这表示 .uf2 文件已成功上传到模块。

## 2. 使用 RoboFlow 生成数据集

[Roboflow](https://roboflow.com) 是一个基于在线的标注工具。我们可以直接将录制的视频导入到 Roboflow 中，它会将其导出为一系列图像。这个工具非常方便，因为它可以帮助我们将数据集分为“训练、验证和测试”部分。此外，该工具还允许我们在标注图像后对其进行进一步处理。此外，它可以轻松地将标注后的数据集导出为 **COCO 格式**，这正是我们所需要的！

- **步骤 1.** 点击 [此处](https://app.roboflow.com/login) 注册一个 Roboflow 账户

- **步骤 2.** 点击 **Create New Project** 开始我们的项目

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/2.jpg"/></div>

- **步骤 3.** 填写 **Project Name**，保持 **License (CC BY 4.0)** 和 **Project type (Object Detection (Bounding Box))** 为默认值。在 **What will your model predict?** 栏中填写一个标注组名称。
<div align="center"><img width="{350}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/2.png"/></div>

- **步骤 4.** 将使用 SenseCAP A1101 捕获的图像拖放到项目中

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/3.png"/></div>

- **步骤 5.** 图像处理完成后，点击 **Finish Uploading**。耐心等待图像上传完成。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/4.jpg"/></div>

- **步骤 6.** 图像上传完成后，点击 **Assign Images**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/5.jpg"/></div>

- **步骤 7.** 选择一张图像，在数字周围绘制一个矩形框，选择标签为 **digits**，然后按 **ENTER**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4.png"/></div>

- **步骤 8.** 对剩余图像重复相同操作
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/5.png"/></div>

- **步骤 9.** 继续为数据集中的所有图像进行标注

- **步骤 10.** 标注完成后，点击 **Add images to Dataset**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/25.jpg"/></div>

- **步骤 11.** 接下来我们将图像分为“训练、验证和测试”部分。如果数据集较多，可以按 80/20 分配；如果数据集较少，可以按 85/15 分配。请注意，“训练”部分不应少于 80%。

<div align="center"><img width="{330}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/12.png"/></div>

- **步骤 12.** 点击 **Generate New Version**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/27.jpg"/></div>

- **步骤 13.** 如果需要，您可以添加 **预处理** 和 **增强**。在这里，我们将 **Resize** 选项更改为 **192x192**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/6.png"/></div>

在这里我们将图像大小更改为 192x192，因为我们将在训练中使用该大小，这样训练速度会更快。否则，在训练过程中需要将所有图像转换为 192x192，这会消耗更多的 CPU 资源并使训练过程变慢。

- **步骤 14.** 接下来，继续使用其余默认设置并点击 **Generate（生成）**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/7.png"/></div>

- **步骤 15.** 点击 **Export（导出）**，选择 **Format（格式）** 为 **COCO**，选择 **show download code（显示下载代码）**，然后点击 **Continue（继续）**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/8.png"/></div>

这将生成一个代码片段，我们稍后将在 Google Colab 训练中使用。因此，请将此窗口保持打开状态。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/55.png"/></div>

### 使用 SenseCraft Model Assistant 在 Google Colab 上进行训练

在我们选择了一个公共数据集后，我们需要对数据集进行训练。这里我们使用 Google Colaboratory 环境在云端进行训练。此外，我们在 Colab 中使用 Roboflow API 来轻松下载数据集。

点击 [这里](https://colab.research.google.com/github/Seeed-Studio/EdgeLab/blob/main/notebooks/Google-Colab-YOLOv5-A1101-Example.ipynb) 打开一个已准备好的 Google Colab 工作区，按照工作区中提到的步骤逐一运行代码单元。

**注意：** 在 Google Colab 中，在 **步骤 4** 的代码单元中，您可以直接复制上述提到的 Roboflow 代码片段。

它将引导完成以下内容：

- 设置训练环境
- 下载数据集
- 执行训练
- 下载训练好的模型

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/9.png"/></div>

## 3. 部署训练好的模型并进行推理

现在我们将训练结束时获得的 **model-1.uf2** 文件移动到 SenseCAP A1101 中。

- **步骤 1.** 安装最新版本的 [Google Chrome](https://www.google.com/chrome) 或 [Microsoft Edge 浏览器](https://www.microsoft.com/en-us/edge?r=1) 并打开它

- **步骤 2.** 使用 USB Type-C 数据线将 SenseCAP A1101 连接到您的电脑

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **步骤 3.** 双击 SenseCAP A1101 上的启动按钮以进入大容量存储模式

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

完成后，您将在文件资源管理器中看到一个名为 **SENSECAP** 的新存储驱动器。

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **步骤 4.** 将 **model-1.uf2** 文件拖放到 **SENSECAP** 驱动器中

当 uf2 文件复制完成后，驱动器将消失。这意味着 uf2 文件已成功上传到模块。

**注意：** 如果您有 4 个模型文件准备好，可以一个接一个地拖放每个模型。先拖放第一个模型，等待复制完成，再次进入启动模式，拖放第二个模型，依此类推。如果您只加载了一个模型（索引为 1）到 SenseCAP A1101 中，它将加载该模型。

- **步骤 5.** [点击这里](https://vision-ai-demo.seeed.cn/) 打开摄像头流的预览窗口

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/31.png"/></div>

- **步骤 6.** 点击 **Connect（连接）** 按钮。然后您将在浏览器中看到一个弹出窗口。选择 **SenseCAP Vision AI - Paired** 并点击 **Connect（连接）**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/32.png"/></div>

- **步骤 7.** 使用预览窗口查看实时推理结果！

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/10.png"/></div>

如上图所示，数字被检测到并用边界框标记出来。

## 4. 使用 SenseCAP A1101 在 SenseCAP Mate 上进行推理
除了在浏览器上进行推理外，我们还可以使用 SenseCAP Mate 来实现模型推理，以下是逐步实现的步骤。

- **步骤 1.** 首先，我们需要擦除 A1101 的固件，这可以通过使用 `erase_model.uf2` 来完成。然后将 A1101 的固件升级到最新版本，并将水表数字识别模型加载到 A1101 中。

  *固件*: [erase_model.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/erase_model.uf2)、[SenseCAP-A1101_v02-00.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/sensecap_ai_v02-00.uf2)

  *模型*: [water_meter.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/meter_water_pre_6.uf2)、[pfld_meter.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/pfld_meter_pre_5.uf2)、[digital_meter.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v2.0.0/meter_seg7_pre_6.uf2)

  ***注意:*** `water_meter` 和 `digital_meter` 在桌面端识别的模型名称为 `user-define6`，在 APP 端显示为 `digital_meter`。`pfld_meter` 识别的模型名称为 `user-define5`，在 APP 端显示为 `Point_meter`。用户需要根据实际使用需求在部署过程中上传相应的模型。

- **步骤 2.** [点击此处](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/dashboard/workplace) 打开摄像头流的预览窗口。

- **步骤 3.** 点击 **Connect** 按钮。随后浏览器会弹出一个窗口，选择 **SenseCAP A1101** - Paired 并点击 Connect。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step3.jpg"/></div>

- **步骤 4（可选）.** 在 Model 中选择 Digital Meter，在 Algorithm 中选择 Digital Meter，点击 Save，然后点击 Invoke。现在我们可以通过预览窗口查看实时推理结果。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step4.jpg"/></div>

- **步骤 5.** 打开 SenseCAP Mate 并与您的 A1101 配对，选择与上述相同的 Model 和 Algorithm。然后点击 General 并点击底部的 Detect。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step_all.jpg"/></div>

- **步骤 6.** 如下图所示，AI 预览显示了数字表的识别结果。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4step5.jpg"/></div>

完成上述步骤后，我们将尝试将自己的 A1101 添加到设备中。通过以下 4 个步骤，我们可以随时随地通过云平台（如 SenseCAP Mate）查看设备识别的结果数据。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/Meter-model/4stepfinal.png"/></div>

## 资源

- **[网页]** [SenseCraft Model Assistant 文档](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/dashboard/workplace)

- **[网页]** [Ultralytics HUB](https://ultralytics.com/hub)

- **[网页]** [Roboflow 文档](https://docs.roboflow.com)

- **[网页]** [TensorFlow Lite 文档](https://www.tensorflow.org/lite/guide)

- **[PDF]** [SenseCAP A1101 LoRaWAN Vision AI 传感器规格书](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf)

- **[PDF]** [SenseCAP A1101 LoRaWAN Vision AI 传感器用户指南](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_LoRaWAN_Vision_AI_Sensor_User_Guide_V1.0.2.pdf)

- **[PDF]** [SenseCAP S210X LoRaWAN 传感器目录](https://files.seeedstudio.com/products/114992867/SenseCAP%20S210X%20LoRaWAN%20Sensor%20Catalogue.pdf)

- **[PDF]** [SenseCAP A1101 LoRaWAN Vision AI 传感器常见问题解答](https://files.seeedstudio.com/wiki/SenseCAP-A1101/FAQ_for_SenseCAP_A1101_LoRaWAN_AI_Vision_Sensor_v1.0.0.pdf)

## 技术支持与产品讨论

 <br />

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得流畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>