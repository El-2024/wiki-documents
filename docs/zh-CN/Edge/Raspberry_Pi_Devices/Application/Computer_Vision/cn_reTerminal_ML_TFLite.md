---
description: 使用 TensorFlow Lite 入门
title: 使用 TensorFlow Lite 入门
keywords:
  - Edge
  - reTerminal 应用
  - 嵌入式机器学习
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal_ML_TFLite
last_update:
  date: 2023/2/1
  author: jianjing Huang
---

# 在 reTerminal 上使用 TensorFlow Lite 入门

<p align="center">
  <img alt="Light" src="https://www.tensorflow.org/site-assets/images/project-logos/tensorflow-lite-logo-social.png" width="45%"/>
&nbsp; &nbsp;
  <img alt="Dark" src="https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/wiki_thumb.png" width="45%"/>
</p>

TensorFlow Lite 是一组工具，能够通过帮助开发者在移动设备、嵌入式设备和物联网设备上运行模型来实现设备端机器学习。  
TensorFlow Lite 的关键特性是针对设备端机器学习进行了优化，重点关注延迟、隐私、连接性、大小和功耗。该框架支持多个平台，包括 Android 和 iOS 设备、嵌入式 Linux 和微控制器。它还内置支持多种语言，如 Java、Swift、Objective-C、C++ 和 Python，并通过硬件加速和模型优化提供高性能。TensorFlow Lite 提供了多平台的端到端示例，用于常见的机器学习任务，例如图像分类、目标检测、姿态估计、问答和文本分类。

## TensorFlow Lite 运行时包安装

`tflite_runtime` 包是一个更小、更简化的 Python 包，包含运行 TensorFlow Lite 推理所需的最少代码。当您只想执行 `.tflite` 模型并避免因大型 TensorFlow 库浪费磁盘空间时，此包是理想选择。

为了获得最佳性能，建议使用 64 位操作系统和相应的 TFLite 包，并启用优化的 XNNPACK 委托。这些可以通过自行从源代码编译，或者使用 Seeed Studio 提供的预构建二进制文件安装。此外，您也可以通过 pip 安装最新的稳定版本。

#### 最新稳定版本（官方构建）

```
pip3 install --index-url https://google-coral.github.io/py-repo/ tflite_runtime
```

#### 针对启用 XNNPACK 的 64 位操作系统的性能优化包

在撰写本文时，官方尚未提供针对 Python 3.7 64 位操作系统并启用 XNNPACK 优化的预构建轮文件，因此我们自行编译并分享了这些文件。

```
wget www.files.seeedstudio.com/ml/TFLite/tflite_runtime-2.6.0-cp37-cp37m-linux_aarch64.whl
pip3 install tflite_runtime-2.6.0-cp37-cp37m-linux_aarch64.whl
```

安装完成后，尝试导入 tflite 包：

```
pi@raspberrypi:~ $ python3
Python 3.7.3 (default, Jul 25 2020, 13:03:44) 
[GCC 8.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import tflite_runtime
>>> tflite_runtime.__version__
'2.6.0'
```

## 示例

可以使用 TFLite 转换器将任何 TensorFlow 模型转换为 `.tflite` 格式，前提是它仅包含 TFLite 运行时支持的操作。以下是目前在 reTerminal 上测试的演示列表，未来将进一步扩展和完善：

### 目标检测

![车辆检测](https://files.seeedstudio.com/wiki/reTerminal_ML/000402.jpg)

演示：车辆检测  
[Jupyter Notebook](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_multi_stage.ipynb)  
[示例脚本](https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/detector)  
- alpha 0.25 224x224 66.7 FPS（15 毫秒）
- alpha 0.5 224x224 40 FPS（25 毫秒）
- alpha 0.75 320x320 14.9 FPS（67 毫秒）
- alpha 1.0 320x320 10.4 FPS（96 毫秒）

### 图像分类

![工业传送带](https://files.seeedstudio.com/wiki/reTerminal_ML/belt.png)

演示：工业传送带裂纹识别  
[Jupyter Notebook](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_conveyor_belt_rip_recognition.ipynb)  
[示例脚本](https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/classifier)

### 语义分割

![肺部分割](https://files.seeedstudio.com/wiki/reTerminal_ML/CHNCXR_0331_1.png)

演示：肺部分割  
[Jupyter Notebook](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_lung_segmentation.ipynb)  
[示例脚本](https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/segnet)

### 面部年龄/性别识别

![年龄性别识别](https://files.seeedstudio.com/wiki/reTerminal_ML/output.gif)

演示：多阶段推理：MobileNet YOLOv3 alpha 0.25 -> MobileFaceNet  
[Github 仓库](https://github.com/AIWintermuteAI/edge_ml_age_gender_recognition/tree/master)  
[示例脚本](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/tensorflow_lite/multi_stage_inference_age_gender)  
~16-20 FPS（使用 [ARM NN](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/armnn/face_age-gender)）

### 面部表情识别

![情感识别](https://files.seeedstudio.com/ml/emotion/emotions.gif)

演示：多阶段推理：MobileNet YOLOv3 alpha 0.25 -> MobileFaceNet  
[Github 仓库](https://github.com/AIWintermuteAI/edge_ml_emotion_recognition/tree/master)  
[示例脚本](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/tensorflow_lite/multi_stage_inference_emotion)  
~11 FPS

### 面部防伪

![面部防伪](https://files.seeedstudio.com/ml/face_anti-spoofing/face_anti-spoofing.gif)

演示：多阶段推理：MobileNet YOLOv3 alpha 0.25 -> MobileNet v1 alpha 0.25  
[Jupyter Notebook](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_face_anti_spoofing.ipynb)  
[示例脚本](https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/classifier)  
~23 FPS（ARM NN）

### 人脸识别

![人脸识别](https://files.seeedstudio.com/wiki/reTerminal_ML/face_recognition.gif)

演示：多阶段推理：超轻量级人脸检测器与标志点检测 -> MobileFaceNet  
[Jupyter Notebook](#)  
[示例脚本](https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/armnn/face_recognition)  
~15 FPS (ARM NN)

## 进一步优化

除非另有说明，示例表中的 FPS 和推理结果均基于 Tensorflow Lite 的 INT8 量化模型推理。  
由于 reTerminal 基于 Raspberry Pi 4，它没有额外的硬件加速器用于神经网络推理，因此只能应用标准的 CPU 推理优化方法。  
关于此主题的视频概述如下：

<iframe width="800" height="450" src="https://www.youtube.com/embed/BEDEscDQFxk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

以下是 CPU 推理优化方法的简要概述：

1) **设计更小的网络**。如果目标足够简单（例如小于 100 类的图像分类或小于 10 类的目标检测等），较小的网络可以实现可接受的准确性并运行得非常快。例如，MobileNet v1 alpha 0.25 YOLOv2 网络仅训练用于检测一个类别的对象（人脸），无需进一步优化即可实现 62.5 FPS。

**原始 Tensorflow Lite FP32 推理：**  
MobileNetv1(alpha 0.25) YOLOv2 1 类 0.89 MB 62.5 FPS  
MobileNetv1(alpha 1.0) YOLOv3 20 类 13.1 MB 7 FPS  

2) **量化**。量化是降低神经网络权重精度的过程，通常从 FP32 降低到 INT8。它可以将模型大小减少 4 倍，并使用默认的 Tensorflow Lite 内核将延迟减少约 60-80%。通过使用 QAT（量化感知训练），可以将量化节点插入网络并进行微调，从而将准确性损失降到最低。

**原始 Tensorflow Lite INT8 推理：**  
MobileNetv1(alpha 0.25) YOLOv2 1 类 0.89 MB 77 FPS  
MobileNetv1(alpha 1.0) YOLOv3 20 类 13.1 MB 11.5 FPS  

3) 使用**优化内核**。通过利用针对特定 CPU 指令集（例如 ARM 的 NEON SIMD 指令）优化的 CNN 内核，可以提高推理速度。这类网络的示例包括 ARM NN 和 XNNPACK。

Arm NN SDK 是一套开源软件和工具，能够在高效能设备上运行机器学习工作负载。  
其描述和提供的基准测试看起来很有前景，但目前在最新的 Raspberry Pi OS 上安装 ARM NN 的过程非常复杂——目前安装最新版本 ARM NN 的唯一正确方法是从源码交叉编译。虽然有适用于 Debian Bullseye 的二进制文件，但 Raspberry Pi OS 仍基于 Debian Buster。使用基准测试脚本进行推理测试的结果参差不齐，对于单一模型，它的性能甚至比原始 Tensorflow Lite 更差，但在多模型推理中表现更快，这可能是由于更高效的多进程利用。

**ARM NN FP32 推理：**  
MobileNetv1(alpha 0.25) YOLOv2 1 类 0.89 MB 83 FPS  
MobileNetv1(alpha 1.0) YOLOv3 20 类 13.1 MB 7.2 FPS  

XNNPACK 是一个用于加速神经网络推理的库，支持 ARM、x86 和 WebAssembly 架构，可在 Android、iOS、Windows、Linux 和 macOS 环境中运行。它作为 Tensorflow Lite 的一个委托集成，默认在 Android 构建中启用，但在其他环境中需要手动启用——因此，如果您希望在 Raspberry Pi 4 上使用 XNNPACK，您需要从源码构建 TensorFlow Lite 解释器包或下载第三方二进制文件，例如我们上面提供的文件。

**XNNPACK 委托 Tensorflow Lite FP32 推理：**  
MobileNetv1(alpha 0.25) YOLOv2 1 类 0.89 MB 83 FPS  
MobileNetv1(alpha 1.0) YOLOv3 20 类 13.1 MB 7.2 FPS  

优化内核的主要问题是不同框架对不同架构/神经网络操作符/精度类型的支持不均。例如，INT8 优化内核在 ARM NN 和 XNNPACK 中仍在开发中。XNNPACK 对 INT8 优化内核的支持最近才添加，似乎带来了约 30% 的适度性能提升，具体取决于模型中使用的操作符。  
[XNNPACK GitHub Issue](https://github.com/google/XNNPACK/issues/999#issuecomment-870791779)

另一个有前景的方向是针对动态量化模型的优化内核，请参阅开发者的讨论：  
[TensorFlow GitHub PR](https://github.com/tensorflow/tensorflow/pull/48751#issuecomment-869111116)

开发者声称延迟改善了 3-4 倍，但目前仅限于非常特定的模型集。一个允许更方便使用的 PR 正在开发中。

4) **剪枝和稀疏推理**。剪枝是微调训练好的神经网络以找到对正确预测没有贡献的权重的过程。这可以减少模型的大小和延迟——准确性降低取决于稀疏设置。实验表明，可以在对准确性影响微乎其微的情况下实现高达 80% 的稀疏性。详情请参阅[这里](https://ai.googleblog.com/2021/03/accelerating-neural-networks-on-mobile.html)，以及 TensorFlow 剪枝指南[这里](https://www.tensorflow.org/model_optimization/guide/pruning/pruning_for_on_device_inference)。  
不幸的是，目前只有非常有限的模型集支持使用 XNNPACK 进行剪枝和稀疏推理。

## 常见问题解答

#### 问题1：我们公司的政策不允许使用第三方二进制文件

您可以使用官方的 TFLite 解释器包，或者按照[此处](https://github.com/PINTO0309/TensorflowLite-bin#2-tensorflow-v230-version-or-later)的说明从源码编译。

## 资源

- **[网页]** [TensorFlow Lite 官方网页](https://www.tensorflow.org/lite)

- **[网页]** [TensorFlow Lite 官方文档](https://www.tensorflow.org/lite/guide)