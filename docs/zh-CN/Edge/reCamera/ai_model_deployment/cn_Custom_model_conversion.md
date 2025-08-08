---
description: 转换和量化 AI 模型以适配 reCamera
title: 模型转换指南
keywords:
  - Edge
  - reCamera
image: https://files.seeedstudio.com/wiki/reCamera/013.jpg
slug: /cn/recamera_model_conversion
last_update:
  date: 10/18/2024
  author: Dayu Li
---

# 转换和量化 AI 模型

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/013.jpg" /></div>

**reCamera** 的 AI 模型转换工具目前支持 `PyTorch`、`ONNX`、`TFLite` 和 `Caffe` 等框架。其他框架的模型需要先转换为 `ONNX` 格式。关于如何将其他深度学习架构的模型转换为 `ONNX` 格式的说明，可以参考 ONNX 官方网站：https://github.com/onnx/tutorials。

以下是 **reCamera** 上部署 AI 模型的流程图。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/InferToolchain_Arch.png" /></div>
本文通过简单示例介绍如何使用 reCamera 的 AI 模型转换工具。

## 设置工作环境

### 方法 1：在 Docker 镜像中安装（推荐）

从 [DockerHub（点击这里）](https://hub.docker.com/r/sophgo/tpuc_dev) 下载所需镜像，我们推荐使用 **版本 3.1**：

```bash
docker pull sophgo/tpuc_dev:v3.1
```

如果您是第一次使用 Docker，可以运行以下命令进行安装和配置（仅需首次设置）：

```bash
sudo apt install docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
```

然后在当前目录下创建一个容器，命令如下：

```bash
docker run --privileged --name MyName -v $PWD:/workspace -it sophgo/tpuc_dev:v3.1
```

**将 `"MyName"` 替换为您希望为容器设置的名称**

在 Docker 容器中使用 `pip` 安装 `tpu_mlir`，与 `方法 1` 相同：

```bash
pip install tpu_mlir[all]==1.7
```

### 方法 2：本地安装

首先检查当前系统环境是否满足以下要求：

- [Ubuntu 22.04](#jump1)
- [Python 3.10](#jump2)

如果不满足或安装失败，请选择 `方法 2` 来安装模型转换工具。

使用 `pip` 安装 `tpu_mlir`：

```bash
pip install tpu_mlir==1.7
```

`tpu_mlir` 在处理不同框架的模型时需要安装不同的依赖项。对于由 ONNX 或 Torch 生成的模型文件，可以使用以下命令安装额外的依赖项：

```bash
pip install tpu_mlir[onnx]==1.7
pip install tpu_mlir[torch]==1.7
```

目前支持五种配置：onnx、torch、tensorflow、caffe 和 paddle。或者您可以使用以下命令安装所有依赖项：

```bash
pip install tpu_mlir[all]==1.7
```

当本地已存在 `tpu_mlir-{version}.whl` 文件时，也可以使用以下命令安装：

```bash
pip install path/to/tpu_mlir-{version}.whl[all]
```

## 将 AI 模型转换和量化为 cvimodel 格式

### 准备 ONNX

reCamera 已经适配了 YOLO 系列以进行本地推理。因此，本节以 `yolo11n.onnx` 为例，演示如何将 ONNX 模型转换为 `cvimodel`。
**`cvimodel` 是 reCamera 本地推理使用的 AI 模型格式。**

转换和量化 PyTorch、TFLite 和 Caffe 模型的方法与本节相同。

以下是 yolo11n.onnx 的下载链接。您可以点击链接下载模型并将其复制到您的 `Workspace` 中以供后续使用。

下载模型：
[下载 yolo11n.onnx](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ESj2_zJM4oxOiv62Hh1XKu8BA9gWPQy6zAGSXWd4VL--9w?e=tagPRA)
**此 ONNX 文件可直接用于以下章节中的示例，无需修改 IR 版本或 Opset 版本。**
:::info
目前，本 Wiki 中的 ONNX 基于 **IR 版本 8 和 Opset 版本 17**。如果您的 ONNX 文件是由 Ultralytics 在 2024 年 12 月之后的示例中转换的，可能由于版本较高而在后续过程中出现问题。
:::

您可以使用 [Netron](https://netron.app/) 查看 ONNX 文件的信息：

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reCamera/ONNX_IR_opset.jpg" />
</div>

**如果您的 ONNX 文件高于 IR v8 和 Opset v17，我们在此提供了一个示例帮助您降级。** 首先，通过 pip 安装 `onnx`：

```bash
pip install onnx
```

从 GitHub 拉取用于修改 ONNX 文件版本的程序：

```bash
git clone https://github.com/jjjadand/ONNX_Downgrade.git
cd ONNX_Downgrade/
```

通过命令行参数提供输入和输出模型文件路径来运行脚本：

```bash
python downgrade_onnx.py <input_model_path> <output_model_path> --target_ir_version <IR_version> --target_opset_version <Opset_version>
```

- `<input_model_path>`：您希望降级的原始 ONNX 模型的路径。
- `<output_model_path>`：降级后的模型保存路径。
- --target_ir_version `<IR_version>`：可选。目标 IR 版本，默认为 8。
- --target_opset_version `<Opset_version>`：可选。目标 Opset 版本，默认为 17。

例如，使用默认版本（IR v8，Opset v17）：

```bash
python downgrade_onnx.py model_v12.onnx model_v8.onnx
```

这将加载 `model_v12.onnx`，将其降级为 IR 版本 8，设置 Opset 版本 17，验证并保存新模型为 `model_v8.onnx`。

使用自定义版本（IR v9，Opset v11）：

```bash
python downgrade_onnx.py model_v12.onnx model_v9.onnx --target_ir_version 9 --target_opset_version 11
```

这将加载 `model_v12.onnx`，将其降级为 IR 版本 9，设置 Opset 版本 11，验证并保存新模型为 `model_v9.onnx`。

<p style={{ fontSize: '1.2em', color: 'yellow' , textAlign: 'left'}}>
  * 为避免错误，我们推荐使用 IR v8 和 Opset v17 的 ONNX。
</p>

### 准备工作区


在与 `tpu-mlir` 同级的位置创建 `model_yolo11n` 目录。图像文件通常是模型训练数据集的一部分，用于后续量化过程中的校准。
在终端中输入以下命令：

```bash
git clone -b v1.7 --depth 1 https://github.com/sophgo/tpu-mlir.git
cd tpu-mlir
source ./envsetup.sh
./build.sh
mkdir model_yolo11n && cd model_yolo11n
cp -rf ${REGRESSION_PATH}/dataset/COCO2017 .
cp -rf ${REGRESSION_PATH}/image .
mkdir Workspace && cd Workspace
```

在获取可用的 ONNX 文件后，将其放置在你创建的 `Workspace` 目录中。目录结构如下：

```bash
model_yolo11n
├── COCO2017
├── image
└── Workspace
    └──yolo11n.onnx
```

**后续步骤将在你的 `Workspace` 中进行。**

### ONNX 转换为 MLIR

从 ONNX 转换为 `MLIR` 是模型转换过程中的中间步骤。在获得适合 reCamera 推理的模型之前，需要先将 ONNX 模型转换为 `MLIR` 格式。这个 `MLIR` 文件是生成最终优化模型以适配 reCamera 推理引擎的桥梁。

如果输入是图像，则需要了解模型在转换前的预处理过程。如果模型使用预处理后的 npz 文件作为输入，则无需考虑预处理。预处理过程公式如下（`x` 表示输入）：

<div align="center">

y = (x − mean) × scale

</div>

yolo11 的归一化范围为 **[0, 1]**，官方 yolo11 的图像为 RGB 格式。每个值分别乘以 **1/255**，对应于 **0.0, 0.0, 0.0** 和 **0.0039216, 0.0039216, 0.0039216**，当其转换为 `mean` 和 `scale` 时。`mean` 和 `scale` 的参数因模型而异，这取决于每个特定模型使用的归一化方法。

你可以参考以下模型转换命令在终端中运行：

```bash
model_transform \
  --model_name yolo11n \
  --model_def yolo11n.onnx \
  --input_shapes "[[1,3,640,640]]" \
  --mean "0.0,0.0,0.0" \
  --scale "0.0039216,0.0039216,0.0039216" \
  --keep_aspect_ratio \
  --pixel_format rgb \
  --output_names "/model.23/cv2.0/cv2.0.2/Conv_output_0,/model.23/cv3.0/cv3.0.2/Conv_output_0,/model.23/cv2.1/cv2.1.2/Conv_output_0,/model.23/cv3.1/cv3.1.2/Conv_output_0,/model.23/cv2.2/cv2.2.2/Conv_output_0,/model.23/cv3.2/cv3.2.2/Conv_output_0" \
  --test_input ../image/dog.jpg \
  --test_result yolo11n_top_outputs.npz \
  --mlir yolo11n.mlir
```

在转换为 `MLIR` 文件后，会生成一个 `${model_name}_in_f32.npz` 文件，这是后续模型的输入文件。

关于 `--output_names` 参数的选择，本例中的 YOLO11 模型转换并未选择最终输出名为 output0 的输出，而是选择了模型头部之前的六个输出作为参数。你可以将 `ONNX` 文件导入 [Netron](https://netron.app/) 查看模型结构。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion04.png" /></div>

YOLO 的 `head` 中的算子在 **INT8** 量化后精度非常低。如果选择最后的 output0 作为参数，则需要进行混合精度量化。

**由于本文后续部分将提供混合精度量化的示例，而本节使用单一量化精度作为示例**，因此选择了 `head` 之前的输出作为参数。通过在 [Netron](https://netron.app/) 中可视化 ONNX 模型，可以看到六个输出名称的位置：

<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion.00.png" />
</div>
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion.01png" />
</div>
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion02.png" />
</div>

`model_transform` 的主要参数说明：

<table style={{ width: '80%', fontSize: '14px', borderCollapse: 'collapse', margin: '20px auto' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid #000', padding: '8px' }}>参数名称</th>
      <th style={{ border: '1px solid #000', padding: '8px' }}>是否必需</th>
      <th style={{ border: '1px solid #000', padding: '8px' }}>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>model_name</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>是</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定模型名称。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>model_def</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>是</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定模型定义文件，例如 '.onnx'、'.tflite' 或 '.prototxt'。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>input_shapes</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定输入形状，例如 [[1,3,640,640]]。支持多输入的二维数组。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>input_types</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定输入类型，例如 int32。多个输入用逗号分隔。默认值为 float32。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>resize_dims</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定原始图像应调整到的尺寸。如果未指定，将调整为模型的输入尺寸。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>keep_aspect_ratio</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>调整尺寸时是否保持宽高比。默认值为 false；如果为 true，则使用零填充缺失区域。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>mean</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>图像每个通道的均值。默认值为 0,0,0,0。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>scale</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>图像每个通道的缩放值。默认值为 1.0,1.0,1.0。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>pixel_format</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>图像类型，可以是 'rgb'、'bgr'、'gray' 或 'rgbd'。默认值为 'bgr'。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>channel_format</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>图像输入的通道类型，可以是 'nhwc' 或 'nchw'。非图像输入使用 'none'。默认值为 'nchw'。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>output_names</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定输出名称。如果未指定，则使用模型的默认输出名称。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>test_input</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定用于验证的输入文件，例如图像、npy 或 npz 文件。如果未指定，则不进行精度验证。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>test_result</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定验证结果的输出文件。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>excepts</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定从验证中排除的网络层，用逗号分隔。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>mlir</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>是</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定输出 MLIR 文件的名称和路径。</td>
    </tr>
  </tbody>
</table>

### MLIR 转换为 F16 cvimodel

如果您想将 `mlir` 转换为 F16 精度的 `cvimodel`，可以在终端中输入以下参考命令：

```bash
model_deploy \
  --mlir yolo11n.mlir \
  --quant_input \
  --quantize F16 \
  --customization_format RGB_PACKED \
  --processor cv181x \
  --test_input ../image/dog.jpg \
  --test_reference yolo11n_top_outputs.npz \
  --fuse_preprocess \
  --tolerance 0.99,0.9 \
  --model yolo11n_1684x_f16.cvimodel
```

成功转换后，您将获得一个 FP16 精度的 `cvimodel` 文件，可以直接用于推理。如果您需要 **INT8 精度** 或 **混合精度** 的 `cvimodel` 文件，请参考本文后续部分的内容。

`model_deploy` 的主要参数说明：

<table style={{ width: '80%', fontSize: '14px', borderCollapse: 'collapse', margin: '20px auto' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid #000', padding: '8px' }}>参数名称</th>
      <th style={{ border: '1px solid #000', padding: '8px' }}>是否必需</th>
      <th style={{ border: '1px solid #000', padding: '8px' }}>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>mlir</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>是</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>MLIR 文件</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>quantize</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>是</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>量化类型 (F32/F16/BF16/INT8)</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>processor</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>是</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>根据所使用的平台选择。2024 版 reCamera 选择 "cv181x" 作为参数。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>calibration_table</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>校准表路径。当为 INT8 量化时需要</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>tolerance</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>MLIR 量化与 MLIR FP32 推理结果之间的最小相似度容差</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>test_input</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>用于验证的输入文件，可以是图像、npy 或 npz。如果未指定，则不会进行验证</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>test_reference</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>用于验证 MLIR 容差的参考数据（npz 格式）。它是每个操作的结果</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>compare_all</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>如果设置，则比较所有张量</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>excepts</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>需要从验证中排除的网络层名称。用逗号分隔</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>op_divide</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>尝试将较大的操作拆分为多个较小的操作，以达到节省离子内存的目的，适用于某些特定模型</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>model</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>是</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>输出模型文件的名称（包括路径）</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>skip_validation</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>跳过 cvimodel 正确性验证以提高部署效率；默认开启 cvimodel 验证</td>
    </tr>
  </tbody>
</table>

编译完成后，将生成一个名为 `yolo11n_1684x_f16.cvimodel` 的文件。量化模型可能会有轻微的精度损失，但它将更加轻量化并具有更快的推理速度。

### MLIR 转换为 INT8 cvimodel

#### 校准表生成

在转换为 **INT8** 模型之前，**需要运行校准以生成校准表。**
根据情况，输入数据的数量大约为 100 到 1000。
然后使用校准表生成对称或非对称的 `cvimodel`。如果对称模型已经满足要求，通常不建议使用非对称模型，因为非对称模型的性能会略低于对称模型。
以下是使用 `COCO2017` 中现有的 100 张图像进行校准的示例：

```bash
run_calibration \
  yolo11n.mlir \
  --dataset ../COCO2017 \
  --input_num 100 \
  -o yolo11n_calib_table
```

运行上述命令后，将生成一个名为 `yolo11n_calib_table` 的文件，该文件将作为后续编译 **INT8** 模型的输入文件。

`run_calibration` 的主要参数说明：

<table style={{ width: '80%', fontSize: '14px', borderCollapse: 'collapse', margin: '20px auto' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid #000', padding: '8px' }}>参数</th>
      <th style={{ border: '1px solid #000', padding: '8px' }}>是否必需</th>
      <th style={{ border: '1px solid #000', padding: '8px' }}>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>N/A</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>是</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定 MLIR 文件</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>dataset</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定输入样本目录，路径中包含对应的图像、npz 或 npy 文件</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>data_list</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定样本列表；dataset 或 data_list 必须选择一个</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>input_num</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定校准样本数量；如果设置为 0，则使用所有样本</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>tune_num</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定调优样本数量；默认值为 10</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>histogram_bin_num</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>直方图的 bin 数量；默认值为 2048</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>o</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>是</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>输出校准表文件</td>
    </tr>
  </tbody>
</table>

#### 编译为 INT8 对称量化的 cvimodel

在获得 `yolo11n_cali_table` 文件后，运行以下命令将其转换为 **INT8** 对称量化模型：

```bash
model_deploy \
  --mlir yolo11n.mlir \
  --quantize INT8 \
  --quant_input \
  --processor cv181x \
  --calibration_table yolo11n_calib_table \
  --test_input ../image/dog.jpg \
  --test_reference yolo11n_top_outputs.npz \
  --customization_format RGB_PACKED \
  --fuse_preprocess \
  --aligned_input \
  --model yolo11n_1684x_int8_sym.cvimodel
```

编译完成后，将生成一个名为 `yolo11n_1684x_int8_sym.cvimodel` 的文件。量化为 **INT8** 的模型相比于量化为 **F16/BF16** 的模型更加轻量化，并且推理速度更快。

### 快速测试

您可以使用 reCamera 上的 Node-RED 进行可视化，以快速验证转换后的 `yolo11n_1684x_int8_sym.cvimodel`。只需设置几个节点，如下方示例视频所示：

<div style={{textAlign:'center'}}><iframe width={600} height={300} src="https://www.youtube.com/embed/XdgCt44UR1M" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>

您需要在 `model` 节点中选择 `yolo11n_1684x_int8_sym.cvimodel` 进行快速验证。双击模型节点，点击 `"Upload"` 导入量化模型，然后点击 `"Done"`，最后点击 `"Deploy"`。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion05.png" />
</div>

我们可以在 `preview` 节点中查看 **INT8** 量化模型的推理结果。通过正确的转换和量化方法获得的 `cvimodel` 依然是可靠的：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion06.png" />
</div>

:::tip
目前，reCamera 的 Node-RED 仅支持对少量模型进行预览测试。未来我们将适配更多模型。如果您将自定义模型导入 Node-RED，或者未按照示例设置指定的输出张量，即使您的 `cvimodel` 是正确的，Node-RED 的后端也不支持预览测试。
:::

我们将发布针对各种模型的预处理和后处理教程，以便您编写自己的代码来推理自定义的 `cvimodel`。

### 混合精度量化

当模型中的某些层对量化非常敏感，但我们仍然需要更快的推理速度时，单一精度量化可能不再适用。在这种情况下，**混合精度**量化可以更好地解决问题。对于对量化更敏感的层，我们可以选择 **F16/BF16** 量化，而对于精度损失较小的层，则可以使用 **INT8**。

接下来，我们将以 `yolov5s.onnx` 为例，演示如何快速转换并量化模型为 **混合精度** 的 `cvimodel`。在阅读本节之前，**请确保您已经阅读了文章的前面部分，因为本节的操作是基于前面内容的。**

以下是 `yolov5s.onnx` 的下载链接。您可以点击链接下载模型并将其复制到工作区以供后续使用。

下载模型：
[下载 yolov5s.onnx](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdX8QYfqMnFEvXGUQ-_NjCoBmOalVQNKPWnZpFxcdNchrw?e=KDUkUP)

下载模型后，请将其放置到您的 `workspace` 中以进行下一步操作。

```bash
mkdir model_yolov5s && cd model_yolov5s
cp -rf ${REGRESSION_PATH}/dataset/COCO2017 .
cp -rf ${REGRESSION_PATH}/image .
mkdir workspace && cd workspace
```

第一步仍然是将模型转换为 `.mlir` 文件。由于在 YOLO 的 `head` 中使用**混合精度**量化时精度损失最小，与之前的方法不同，我们将在 `--output_names` 参数中选择最终输出名称，而不是 `head` 之前的输出。可以在 [Netron](https://netron.app/) 中可视化 `ONNx`：

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion07.png" />
</div>

由于 yolov5 的归一化参数与 yolo11 相同，我们可以使用以下命令进行模型转换：

```bash
model_transform \
  --model_name yolov5s \
  --model_def yolov5s.onnx \
  --input_shapes [[1,3,640,640]] \
  --mean 0.0,0.0,0.0 \
  --scale "0.0039216,0.0039216,0.0039216" \
  --keep_aspect_ratio \
  --pixel_format rgb \
  --output_names output \
  --test_input ../image/dog.jpg \
  --test_result yolov5s_top_outputs.npz \
  --mlir yolov5s.mlir
```

接下来，我们还需要生成校准表，这一步与上一节相同：

```bash
run_calibration \
  yolov5s.mlir \
  --dataset ../COCO2017 \
  --input_num 100 \
  -o yolov5s_calib_table
```

**与转换 int8 对称量化的 yolo11 模型的部分不同，在执行 model_deploy 之前，我们需要生成一个混合精度量化表**。**参考命令如下：**

```bash
run_qtable \
  yolov5s.mlir \
  --dataset ../COCO2017 \
  --calibration_table yolov5s_calib_table \
  --processor cv181x \
  --min_layer_cos 0.99 \
  --expected_cos 0.999 \
  -o yolov5s_qtable
```

`run_qtable` 的参数说明如下表所示：

<table style={{ width: '80%', fontSize: '14px', borderCollapse: 'collapse', margin: '20px auto' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid #000', padding: '8px' }}>参数</th>
      <th style={{ border: '1px solid #000', padding: '8px' }}>是否必需</th>
      <th style={{ border: '1px solid #000', padding: '8px' }}>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>N/A</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>是</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定 MLIR 文件</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>dataset</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定输入样本目录，包含图像、npz 或 npy 文件</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>data_list</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定样本列表，`dataset` 或 `data_list` 必须选择一个</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>calibration_table</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>是</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>输入校准表</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>processor</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>是</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>取决于所使用的平台。2024 版 reCamera 选择 "cv181x" 作为参数。</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>fp_type</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定混合精度的浮点精度类型，支持 auto、F16、F32、BF16；默认值为 auto</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>input_num</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定输入样本数量；默认值为 10</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>expected_cos</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定最终网络输出层的最小期望余弦相似度；默认值为 0.99</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>min_layer_cos</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定每层输出的最小余弦相似度；低于此阈值的层将使用浮点计算；默认值为 0.99</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>debug_cmd</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定用于开发的调试命令字符串；默认值为空</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>global_compare_layers</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定用于最终输出比较的替换层，例如 'layer1,layer2' 或 'layer1:0.3,layer2:0.7'</td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>loss_table</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>否</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>指定保存所有量化为浮点类型的层的损失值的文件名；默认值为 full_loss_table.txt</td>
    </tr>
  </tbody>
</table>

在每一层的前置层根据其 `cos` 值转换为相应的浮点模式后，会检查该层计算的 `cos` 值。如果 `cos` 值仍然小于 `min_layer_cos` 参数，则当前层及其直接后继层将被设置为使用浮点运算。

`run_qtable` 在将每对相邻层设置为使用浮点计算后，会重新计算整个网络输出的 `cos` 值。如果 `cos` 超过指定的 `expected_cos` 参数，搜索将终止。因此，设置更大的 `expected_cos` 值将导致更多的层尝试使用浮点运算。

最后，运行 `model_deploy` 来生成 **混合精度** 的 `cvimodel`：

```bash
model_deploy \
  --mlir yolov5s.mlir \
  --quantize INT8 \
  --quantize_table yolov5s_qtable \
  --calibration_table yolov5s_calib_table \
  --customization_format RGB_PACKED \
  --fuse_preprocess \
  --aligned_input \
  --processor cv181x \
  --model yolov5s_mix-precision.cvimodel
```

生成 `yolov5s_mix-precision.cvimodel` 后，我们可以使用 `model_tool` 查看模型的详细信息：

```bash
model_tool --info yolov5s_mix-precision.cvimodel
```

关键信息如 `TensorMap` 和 `WeightMap` 将打印到终端：

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/reCamera/recamera_model_conversion08.png" />
</div>

我们可以在 reCamera 上运行一个示例来验证混合精度量化的 YOLOv5 模型。拉取已编译的测试示例：

```bash
git clone https://github.com/jjjadand/yolov5_Test_reCamera.git
```

使用类似 [FileZilla](https://filezilla-project.org/) 的软件将已编译的示例和 `yolov5s_mix-precision.cvimodel` 复制到 reCamera。（您可以参考 [Getting Started with reCamera](https://wiki.seeedstudio.com/cn/recamera_getting_started/)）

复制完成后，**在 reCamera 终端运行以下命令：**

```bash
cp /path/to/yolov5s_mix-precision.cvimodel /path/to/yolov5_Test_reCamera/solutions/sscma-model/build/
cd yolov5_Test_reCamera/solutions/sscma-model/build/
sudo ./sscma-model yolov5s_mix-precision.cvimodel Dog.jpg Out.jpg
```

预览 `Out.jpg`，混合精度量化的 YOLOv5 模型推理结果如下：

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/reCamera/yolov5Out.jpg" />
</div>

## 资源

[reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

[reCamera 系列](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

[reCamera 示例](https://github.com/Seeed-Studio/sscma-example-sg200x)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>