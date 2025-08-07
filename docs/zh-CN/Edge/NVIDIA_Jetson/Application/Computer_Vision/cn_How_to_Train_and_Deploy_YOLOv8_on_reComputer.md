---
description: 在 reComputer 上完成 YOLOv8 模型训练
title: 如何在 reComputer 上训练和部署 YOLOv8
keywords:
- reComputer
- 训练 YOLOv8
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/How_to_Train_and_Deploy_YOLOv8_on_reComputer
last_update:
  date: 12/6/2023
  author: Youjiang
---

# 如何在 reComputer 上训练和部署 YOLOv8

## 简介
面对日益复杂和动态的挑战，人工智能的应用为解决问题提供了新的途径，并对全球社会的可持续发展和人们生活质量的提升做出了重要贡献。通常，在部署人工智能算法之前，AI 模型的设计和训练是在高性能计算服务器上完成的。一旦模型训练完成，它会被导出到边缘计算设备上进行边缘推理。事实上，所有这些过程都可以直接在边缘计算设备上完成。具体来说，诸如准备数据集、训练神经网络、验证神经网络以及部署模型等任务都可以在边缘设备上执行。这不仅确保了数据安全，还节省了购买额外设备的成本。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=3d7dba9378be2accafeaff54420edb6a&objectID=5586&indexName=bazaar_retailer_products"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
</div>

在本文档中，我们将在 
[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=f6de8f6c8d814c021e13f4455d041d03&objectID=5586&indexName=bazaar_retailer_products) 
上训练和部署一个用于交通场景的目标检测模型。本文档以 
[YOLOv8](https://www.ultralytics.com/) 
目标检测算法为例，详细介绍了整个过程。请注意，以下描述的所有操作均在 Jetson 边缘计算设备上进行，确保 Jetson 设备安装了 
[JetPack 5.0](https://wiki.seeedstudio.com/cn/NVIDIA_Jetson/) 
或更高版本的操作系统。

## 数据集
机器学习的过程涉及在给定数据中寻找模式，然后使用一个函数来捕捉这些模式。因此，数据集的质量直接影响模型的性能。一般来说，训练数据的质量和数量越好，训练出的模型效果越佳。因此，数据集的准备至关重要。

收集训练数据集的方法有多种。这里介绍两种方法：1. 下载预标注的开源公共数据集。2. 收集并标注训练数据。最后，将所有数据整合，为后续的训练阶段做好准备。

### 下载公共数据集
公共数据集是广泛用于机器学习和人工智能研究的共享标准化数据资源。它们为研究人员提供了评估算法性能的标准基准，促进了该领域的创新与合作。这些数据集推动了 AI 社区向更加开放、创新和可持续的方向发展。

有许多平台可以免费下载数据集，例如 
[Roboflow](https://roboflow.com/)、 
[Kaggle](https://www.kaggle.com/) 
等。这里，我们从 Kaggle 下载了一个与交通场景相关的标注数据集， 
[Traffic Detection Project](https://www.kaggle.com/datasets/yusufberksardoan/traffic-detection-project/download?datasetVersionNumber=1)。

解压后的文件结构如下：

```sh
archive
├── data.yaml
├── README.dataset.txt
├── README.roboflow.txt
├── test
│   ├── images
│   │   ├── aguanambi-1000_png_jpg.rf.7179a0df58ad6448028bc5bc21dca41e.jpg
│   │   ├── aguanambi-1095_png_jpg.rf.4d9f0370f1c09fb2a1d1666b155911e3.jpg
│   │   ├── ...
│   └── labels
│       ├── aguanambi-1000_png_jpg.rf.7179a0df58ad6448028bc5bc21dca41e.txt
│       ├── aguanambi-1095_png_jpg.rf.4d9f0370f1c09fb2a1d1666b155911e3.txt
│       ├── ...
├── train
│   ├── images
│   │   ├── aguanambi-1000_png_jpg.rf.0ab6f274892b9b370e6441886b2d7b9d.jpg
│   │   ├── aguanambi-1000_png_jpg.rf.dc59d3c5df5d991c1475e5957ea9948c.jpg
│   │   ├── ...
│   └── labels
│       ├── aguanambi-1000_png_jpg.rf.0ab6f274892b9b370e6441886b2d7b9d.txt
│       ├── aguanambi-1000_png_jpg.rf.dc59d3c5df5d991c1475e5957ea9948c.txt
│       ├── ...
└── valid
    ├── images
    │   ├── aguanambi-1085_png_jpg.rf.0608a42a5c9090a4efaf9567f80fa992.jpg
    │   ├── aguanambi-1105_png_jpg.rf.0aa6c5d1769ce60a33d7b51247f2a627.jpg
    │   ├── ...
    └── labels
        ├── aguanambi-1085_png_jpg.rf.0608a42a5c9090a4efaf9567f80fa992.txt
        ├── aguanambi-1105_png_jpg.rf.0aa6c5d1769ce60a33d7b51247f2a627.txt
        ├──...
```

每张图片都有一个对应的文本文件，其中包含该图片的完整标注信息。`data.json` 文件记录了训练集、测试集和验证集的位置，你需要修改路径：

```json
train: ./train/images
val: ./valid/images
test: ./test/images

nc: 5
names: ['bicycle', 'bus', 'car', 'motorbike', 'person']
```

### 收集和标注数据

当公共数据集无法满足用户需求时，需要考虑收集和创建针对特定需求的自定义数据集。这可以通过收集、标注和组织相关数据来实现。
为了演示，我从 
[YouTube](https://www.youtube.com/watch?v=iJZcjZD0fw0) 
捕获并保存了三张图片，并尝试使用 
[Label Studio](https://www.youtube.com/watch?v=iJZcjZD0fw0) 
对这些图片进行标注。

**步骤 1.** 收集原始数据：

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/raw_datas.png" />
</div>

**步骤 2.** 安装并运行标注工具：
```bash
sudo groupadd docker
sudo gpasswd -a ${USER} docker
sudo systemctl restart docker
sudo chmod a+rw /var/run/docker.sock

mkdir label_studio_data
sudo chmod -R 776 label_studio_data
docker run -it -p 8080:8080 -v $(pwd)/label_studio_data:/label-studio/data heartexlabs/label-studio:latest
```

**步骤 3.** 创建一个新项目并根据提示完成标注：
[Label Studio 参考文档](https://labelstud.io/blog/quickly-create-datasets-for-training-yolo-object-detection-with-label-studio/#output-the-dataset-in-yolo-format)

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/labeling.png" />
</div>

完成标注后，您可以将数据集导出为 YOLO 格式，并将标注数据与下载的数据一起整理。最简单的方法是将所有图片复制到公共数据集的 train/images 文件夹中，并将生成的标注文本文件复制到公共数据集的 train/labels 文件夹中。

至此，我们通过两种不同的方法获取了训练数据并进行了整合。如果您需要更高质量的训练数据，还可以考虑许多额外的步骤，例如数据清理、类别平衡等。由于我们的任务相对简单，目前将跳过这些步骤，直接使用上述数据进行训练。

## 模型
在本节中，我们将在 reComputer 上下载 YOLOv8 源代码并配置运行环境。

**步骤 1.** 使用以下命令下载源代码：

```bash
git clone https://github.com/ultralytics/ultralytics.git
cd ultralytics
```

**步骤 2.** 打开 requirements.txt 并修改相关内容：

```bash
# 使用 `vi` 命令打开文件
vi requirements.txt

# 按 `a` 进入编辑模式，并修改以下内容：
torch>=1.7.0 --> # torch>=1.7.0
torchvision>=0.8.1 --> # torchvision>=0.8.1

# 按 `ESC` 退出编辑模式，最后输入 `:wq` 保存并退出文件。
```

**步骤 3.** 运行以下命令下载 YOLO 所需的依赖并安装 YOLOv8：
```bash
pip3 install -e .
cd ..
```

**步骤 4.** 安装 Jetson 版本的 PyTorch：

```bash
sudo apt-get install -y libopenblas-base libopenmpi-dev
wget https://developer.download.nvidia.cn/compute/redist/jp/v512/pytorch/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl -O torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
pip3 install torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
```

**步骤 5.** 安装对应版本的 torchvision：
```bash
sudo apt install -y libjpeg-dev zlib1g-dev
git clone --branch v0.16.0 https://github.com/pytorch/vision torchvision
cd torchvision
python3 setup.py install --user
cd ..
```

**步骤 6.** 使用以下命令确保 YOLO 已成功安装：
```bash
yolo detect predict model=yolov8s.pt source='https://ultralytics.com/images/bus.jpg'
```

## 训练
模型训练是更新模型权重的过程。通过训练模型，机器学习算法可以从数据中学习，识别模式和关系，从而对新数据进行预测和决策。

**步骤 1.** 创建一个用于训练的 Python 脚本：

```bash
vi train.py
```

按下 `a` 进入编辑模式，并修改以下内容：

```bash
from ultralytics import YOLO

# 加载模型
model = YOLO('yolov8s.pt')

# 训练模型
results = model.train(
    data='/home/nvidia/Everything_Happens_Locally/Dataset/data.yaml', 
    batch=8, epochs=100, imgsz=640, save_period=5
)
```

按下 `ESC` 退出编辑模式，最后输入 `:wq` 保存并退出文件。
`YOLO.train()` 方法有许多配置参数；请参考 
[文档](https://docs.ultralytics.com/modes/train/#arguments) 
了解详细信息。此外，您还可以根据具体需求使用更简洁的 `CLI` 方法启动训练。

**步骤 2.** 使用以下命令开始训练：
```bash
python3 train.py
```

接下来是漫长的等待过程。考虑到在等待期间可能会关闭远程连接窗口，本教程使用 
[Tmux](https://github.com/tmux/tmux/wiki)
终端复用器。因此，我在过程中看到的界面如下所示：

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/training.png" />
</div>

Tmux 是可选的；只要模型正常训练即可。在训练程序完成后，您可以在指定文件夹中找到训练过程中保存的模型权重文件：

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/models.png" />
</div>

## 验证
验证过程是使用部分数据来验证模型的可靠性。此过程有助于确保模型在实际应用中能够准确且稳健地执行任务。如果仔细观察训练过程中输出的信息，会发现许多验证步骤穿插在训练过程中。本节不会分析每个评估指标的含义，而是通过检查预测结果来分析模型的可用性。

**步骤 1.** 使用训练好的模型对特定图像进行推理：

```bash
yolo detect predict \
    model='./runs/detect/train2/weights/best.pt' \ 
    source='./datas/test/images/ant_sales-2615_png_jpg.rf.0ceaf2af2a89d4080000f35af44d1b03.jpg' \
    save=True show=False
```

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/inference_cmd.png" />
</div>

**步骤 2.** 检查推理结果。

从检测结果可以看出，训练好的模型达到了预期的检测性能。

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/inference.jpeg" />
</div>

## 部署
部署是将训练好的机器学习或深度学习模型应用于实际场景的过程。上文介绍的内容验证了模型的可行性，但尚未考虑模型的推理效率。在部署阶段，需要在检测精度和效率之间找到平衡。可以使用 TensorRT 推理引擎来提高模型的推理速度。

**步骤 1.** 为了直观地展示轻量化模型与原始模型之间的对比，使用 vi 工具创建一个新的 `inference.py` 文件，用于实现视频文件的推理。通过修改第 8 行和第 9 行，可以替换推理模型和输入视频。本文档中的输入是我用手机拍摄的视频。

```python
from ultralytics import YOLO
import os
import cv2
import time
import datetime


model = YOLO("/home/nvidia/Everything_Happens_Locally/runs/detect/train2/weights/best.pt")
cap = cv2.VideoCapture('./sample_video.mp4')

save_dir = os.path.join('runs/inference_test', datetime.datetime.now().strftime('%Y-%m-%d-%H-%M-%S'))
if not os.path.exists(save_dir):
    os.makedirs(save_dir)
fourcc = cv2.VideoWriter_fourcc(*'mp4v')
fps = cap.get(cv2.CAP_PROP_FPS)
size = (int(cap.get(cv2.CAP_PROP_FRAME_WIDTH)), int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT)))
output = cv2.VideoWriter(os.path.join(save_dir, 'result.mp4'), fourcc, fps, size)

while cap.isOpened():
    success, frame = cap.read()
    if success:
        start_time = time.time()
        results = model(frame)
        annotated_frame = results[0].plot()
        total_time = time.time() - start_time
        fps = 1/total_time
        cv2.rectangle(annotated_frame, (20, 20), (200, 60), (55, 104, 0), -1)
        cv2.putText(annotated_frame, f'FPS: {round(fps, 2)}', (30, 50), 0, 0.9, (255, 255, 255), thickness=2, lineType=cv2.LINE_AA)
        print(f'FPS: {fps}')
        cv2.imshow("YOLOv8 Inference", annotated_frame)
        output.write(annotated_frame)
        if cv2.waitKey(1) & 0xFF == ord("q"):
            break
    else:
        break

cv2.destroyAllWindows()
cap.release()
output.release()
```

**步骤 2.** 运行以下命令，并记录模型量化前的推理速度：

```bash
python3 inference.py
```

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/inference_pt.png" />
</div>

结果表明，模型量化前的推理速度为 21.9 FPS。

**步骤 3.** 生成量化模型：

```bash
pip3 install onnx
yolo export model=/home/nvidia/Everything_Happens_Locally/runs/detect/train2/weights/best.pt format=engine half=True device=0
```

程序完成后（大约 10-20 分钟），将在输入模型的同一目录下生成一个 `.engine` 文件。该文件即为量化后的模型。

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/model_engine.png" />
</div>

**步骤 4.** 使用量化模型测试推理速度。

此处需要修改步骤 1 中脚本的第 8 行内容。

```bash
model = YOLO(<path to .pt>) --> model = YOLO(<path to .engine>)
```

然后，重新运行推理命令：

```bash
python3 inference.py
```

<div align="center">
    <img width={800} src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_is_all_you_need/inference_engine.png" />
</div>

从推理效率的角度来看，量化模型的推理速度有了显著提升。

## 总结

本文为读者提供了一份全面的指南，涵盖了从数据收集、模型训练到部署的各个方面。重要的是，所有过程均在 reComputer 中完成，无需用户额外使用 GPU。





<!-- 代码结束 -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>