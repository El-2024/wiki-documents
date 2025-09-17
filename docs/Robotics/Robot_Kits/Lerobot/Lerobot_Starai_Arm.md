---
description: This wiki provides the debugging tutorial for the StarAI Robot Arm and realizes data collection and training within the Lerobot framework.
title: StarAI Arm in LeRobot
keywords:
- Lerobot
- Huggingface
- Arm
- Robotics 
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/starai_robotic_arm.webp
slug: /lerobot_starai_arm
last_update:
  date: 9/16/2025
  author: LiShanghang
---

# Getting started with StarAI Robot Arm with LeRobot

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/IJKTeBYAG7k?si=iS-jqT27fDjeI6yX" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

| **Follower Viola** | **Leader Violin** | **Follower Cello** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png) |

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Fashionstar-Star-Arm-Viola-Violin-p-6497.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now!!! 🖱️</font></span></strong>
</a></div>

## Products Introduction

1. **Open-Source & Developer-Friendly**
   It is an open-source, developer-friendly 6+1 DoF robotic arm solution from [Fishion Star Technology Limited](https://fashionrobo.com/).
2. **Integration with LeRobot**
   Designed for integration with [LeRobot Platform](https://github.com/huggingface/lerobot) , which provides PyTorch models, datasets, and tools for imitation learning in real-world robotic tasks — including data collection, simulation, training, and deployment.
3. **Comprehensive Learning Resources**
   Provides comprehensive open-source learning resources like assembly and calibration guides, and example custom grasping tasks to assist users in quickly getting started and developing robotic applications.
4. **Compatible with Nvidia**
   Supports deployment on the reComputer Mini J4012 Orin NX 16GB platform.

## Main Features

- Ready to Go — No Assembly Required. Just Unbox and Dive into the World of AI.
- 6+1 Degrees of Freedom and a 470mm Reach — Built for Versatility and Precision.
- Powered by Dual Brushless Bus Servos — Smooth, Silent, and Strong with up to 300g Payload.
- Parallel Gripper with 66mm Maximum Opening — Modular Fingertips for Quick-Replace Flexibility.
- Exclusive Hover Lock Technology — Instantly Freeze Leader Arm at Any Position with a Single Press.

## Specifications

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.jpg" />
</div>

| Item                 | Follower Arm \| Viola                             | Leder Arm \|Violin                                |    Follower Arm \|Cello    |
| -------------------- | ------------------------------------------------- | ------------------------------------------------- |-----------------|
| Degrees of Freedom   | 6+1                                               | 6+1                                               | 6+1             |
| Reach                | 470mm                                             | 470mm                                             | 670mm |
| Span                 | 940mm                                             | 940mm                                             | 1340mm |
| Repeatability        | 2mm                                               | -                                                 | 1mm  |
| Working Payload      | 300g (with 70% Reach)                            | -                                                 |  750g (with 70% Reach)   |
| Servos               | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 |RX18-U100H-M x3<br/> RX8-U50H-M x3<br/> RX8-U51H-M x1|
| Parallel Gripper Ki  | ✅                                                 | -                                                 | ✅   |
| Wrist Rotate         | Yes                                               | Yes                                               | Yes |
| Hold at any Position | Yes                                               | Yes (with handle button)                          |  Yes|
| Wrist Camera Mount   |Provides reference 3D printing files | | Provides reference 3D printing files
| Works with LeRobot   | ✅                                                 | ✅                                                 | ✅|
| Works with ROS 2     | ✅                                                 | ✅                                                | ✅|
| Works with MoveIt2    | ✅                                                 | ✅                                               |✅ |
| Works with Gazebo    | ✅                                                 |✅                                              |✅ |
| Communication Hub    | UC-01                                             | UC-01                                             | UC-01 |
| Power Supply         | 12V10A/120w XT30                                   | 12V10A/120w XT30                                 |12V25A/300w XT60  |

For more information about servo motors, please visit the following link.

[RA8-U25H-M](https://fashionrobo.com/actuator-u25/23396/)

[RX18-U100H-M](https://fashionrobo.com/actuator-u100/22853/)

[RX8-U50H-M](https://fashionrobo.com/actuator-u50/136/)

## Initial environment setup

**For Ubuntu x86:**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6  

**For Jetson Orin:**

- Jetson JetPack 6.0+  
- Python 3.10  
- Torch 2.6  

## Installation and Debugging

### Install LeRobot

Environments such as pytorch and torchvision need to be installed based on your CUDA.

1. Install Miniconda:
For Jetson:

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

Or, For X86 Ubuntu 22.04:

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
conda init --all
```

2. Create and activate a fresh conda environment for lerobot

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
```

3. Clone Lerobot:

```bash
git clone https://github.com/servodevelop/lerobot.git
```

Switch to the starai-arm-develop branch.

```bash
git checkout starai-arm-develop
```

4. When using miniconda, install ffmpeg in your environment:

```bash
conda install ffmpeg -c conda-forge
```

:::tip
This usually installs ffmpeg 7.X for your platform compiled with the libsvtav1 encoder. If libsvtav1 is not supported (check supported encoders with ffmpeg -encoders), you can:

- [On any platform] Explicitly install ffmpeg 7.X using:

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- [On Linux only] Install ffmpeg build dependencies and compile ffmpeg from source with libsvtav1, and make sure you use the corresponding ffmpeg binary to your install with which ffmpeg.

:::

5. Install LeRobot with dependencies for the feetech motors:

```bash
cd ~/lerobot && pip install -e ".[starai]"
```

For Jetson Jetpack devices (please make sure to install [Pytorch-gpu and Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) from step 5 before executing this step):

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

6. Check Pytorch and Torchvision

Since installing the lerobot environment via pip will uninstall the original Pytorch and Torchvision and install the CPU versions of Pytorch and Torchvision, you need to perform a check in Python.

```python
import torch
print(torch.cuda.is_available())
```

If the printed result is False, you need to reinstall Pytorch and Torchvision according to the [official website tutorial](https://pytorch.org/index.html).

If you are using a Jetson device, install Pytorch and Torchvision according to [this tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson).

### Unboxing the Robotic Arm

Robotic Arm Kit Includes

- Leader arm
- Follower arm
- Controller (handle)
- Parallel gripper
- Installation tools (screws, hex wrench)
- Power supply ×2
- C-clamp ×2
- UC-01 debuging board ×2

UC-01 debuging board switch：

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/UC-01 debuging board switch.png" />
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/C0DsNSNl0dI?si=HQzFXNwGEEqdXz3R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Configure Arm Port

Enter the `src` directory:

```bash
cd src
```

Run the following command in the terminal to find USB ports associated to your arms：

```bash
python -m lerobot.find_port
```

:::tip
Remember to remove the usb, otherwise the interface will not be detected.
:::

For example：

1. Example output when identifying the leader arm's port (e.g., `/dev/tty.usbmodem575E0031751` on Mac, or possibly `/dev/ttyUSB0` on Linux):
2. Example output when identifying the follower arm's port (e.g., `/dev/tty.usbmodem575E0032081`on Mac, or possibly `/dev/ttyUSB1` on Linux):

:::tip
If the ttyUSB0 serial port cannot be identified, try the following solutions:

List all USB ports.

```sh
lsusb
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate1.png" />
</div>

Once identified, check the information of the ttyusb.

```sh
sudo dmesg | grep ttyUSB
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate2.png" />
</div>

The last line indicates a disconnection because brltty is occupying the USB. Removing brltty will resolve the issue.

```sh
sudo apt remove brltty
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate3.png" />
</div>

Finally，use chmod command.

```sh
sudo chmod 777 /dev/ttyUSB*
```

:::

You might need to give access to the USB ports by running:

```bash
sudo chmod 666 /dev/ttyUSB0
sudo chmod 666 /dev/ttyUSB1
```

## Calibrate

### For Initial Calibration

Please rotate each joint left and right to the corresponding positions.

### For Re-Calibration

Follow the on-screen prompt: enter the letter "c" and press the Enter key.

Below are the reference values. Under normal circumstances, the actual limit reference values should fall within the range of **±10°** of these references.

| Servo ID | Lower Angle Limit (°) | Upper Angle Limit (°) | Notes                                          |
| -------- | --------------------- | --------------------- | ---------------------------------------------- |
| motor\_0 | -180°                 | 180°                  | Rotate to the limit position                   |
| motor\_1 | -90°                  | 90°                   | Rotate to the limit position                   |
| motor\_2 | -90°                  | 90°                   | Rotate to the limit position                   |
| motor\_3 | -180°                 | 180°                  | No limit; rotate to the reference angle limits |
| motor\_4 | -90°                  | 90°                   | Rotate to the limit position                   |
| motor\_5 | -180°                 | 180°                  | No limit; rotate to the reference angle limits |
| motor\_6 | 0°                    | 100°                  | Rotate to the limit position                   |

:::tip
Taking PC (Linux) and Jetson board as examples, the `first` USB device inserted will be mapped to `ttyUSB0`, and the `second` USB device inserted will be mapped to `ttyUSB1`.

Please pay attention to the mapping interfaces of the leader and follower before running the code.
:::

#### Leader Robotic Arm

Connect the leader to `/dev/ttyUSB0`, or modify the `--teleop.port` parameter, and then execute:

```bash
python -m lerobot.calibrate --teleop.type=starai_violin --teleop.port=/dev/ttyUSB0 --teleop.id=my_awesome_staraiviolin_arm
```

#### Follower Robotic Arm

Connect the follower to `/dev/ttyUSB1`, or modify the `--teleop.port` parameter, and then execute:

```bash
python -m lerobot.calibrate --robot.type=starai_viola --robot.port=/dev/ttyUSB1 --robot.id=my_awesome_staraiviola_arm
```

After running the command, you need to **manually move the robotic arm** to allow each joint to reach its **limit position**. The terminal will display the recorded range data. Once this operation is completed, press Enter.

:::tip
The calibration files will be saved to the following paths: `~/.cache/huggingface/lerobot/calibration/robots` and `~/.cache/huggingface/lerobot/calibration/teleoperators`.
:::

### Dual-Arm Calibration Setup

<details>
<summary> Tutorial </summary>

#### Leader Robotic Arm

Connect `left_arm_port` to `/dev/ttyUSB0` and `right_arm_port` to `/dev/ttyUSB2`, or modify the `--teleop.left_arm_port` and `--teleop.right_arm_port` parameters, and then execute:

```bash
python -m lerobot.calibrate --teleop.type=bi_starai_leader --teleop.left_arm_port=/dev/ttyUSB0 --teleop.right_arm_port=/dev/ttyUSB2 --teleop.id=bi_starai_leader
```

#### Follower Robotic Arm

Connect `left_arm_port` to `/dev/ttyUSB1` and `right_arm_port` to `/dev/ttyUSB3`, or modify the `--robot.left_arm_port` and `--robot.right_arm_port` parameters, and then execute:

```bash
python -m lerobot.calibrate --robot.type=bi_starai_follower --robot.left_arm_port=/dev/ttyUSB1 --robot.right_arm_port=/dev/ttyUSB3 --robot.id=bi_starai_follower
```

:::tip

The difference between single-arm and dual-arm setups lies in the `--teleop.type` and `--robot.type` parameters. Additionally, dual-arm setups require separate USB ports for the left and right arms, totaling four USB ports: `--teleop.left_arm_port`, `--teleop.right_arm_port`, `--robot.left_arm_port`, and `--robot.right_arm_port`.

If using a dual-arm setup, you need to manually modify the robotic arm file types `--teleop.type` and `--robot.type`, as well as the USB ports `--teleop.left_arm_port`, `--teleop.right_arm_port`, `--robot.left_arm_port`, and `--robot.right_arm_port`, to adapt to teleoperation, data collection, training, and evaluation commands.

:::

</details>

## Teleoperate

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/Uz-x-2P2xaE?si=HJTjALt5yFntR6-s" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Move the arm to the position shown in the diagram and set it to standby.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Specifications.png" />
</div>

Then you are ready to teleoperate your robot (It won't display the cameras)! Run this simple script :

```bash
python -m lerobot.teleoperate \
    --robot.type=starai_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --teleop.type=starai_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm
```

<details>
<summary> Dual-Arm </summary>

```bash
python -m lerobot.teleoperate \
    --robot.type=bi_starai_follower \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_follower \
    --teleop.type=bi_starai_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_leader
```

</details>

The remote operation command will automatically detect the following parameters:

1. Identify any missing calibrations and initiate the calibration procedure.
2. Connect the robot and the remote operation device and start the remote operation.

After the program starts, the Hover Lock Technology remains functional.

## Add cameras

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/-p8K_-XxW8U?si=UmYWvEyKNPpTRxDC" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

After inserting your two USB cameras, run the following script to check the port numbers of the cameras. It is important to remember that the camera must not be connected to a USB Hub; instead, it should be plugged directly into the device. The slower speed of a USB Hub may result in the inability to read image data.

```bash
python -m lerobot.find_cameras opencv # or realsense for Intel Realsense cameras
```

The terminal will print out the following information. For example, the laptop camera is `index 2`, and the USB camera is `index 4`.

```markdown
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ /dev/video2
  Type: OpenCV
  Id: /dev/video2
  Backend api: V4L2
  Default stream profile:
    Format: 0.0
    Width: 640
    Height: 480
    Fps: 30.0
--------------------
Camera #1:
  Name: OpenCV Camera @ /dev/video4
  Type: OpenCV
  Id: /dev/video4
  Backend api: V4L2
  Default stream profile:
    Format: 0.0
    Width: 640
    Height: 360
    Fps: 30.0
--------------------

Finalizing image saving...
Image capture finished. Images saved to outputs/captured_images
```

You can find the images captured by each camera in the `outputs/images_from_opencv_cameras` directory and verify the port index information corresponding to cameras at different positions.

After confirming the external cameras, replace the camera information below with your actual camera information, and you will be able to display the cameras on your computer during remote operation:

```bash
python -m lerobot.teleoperate \
    --robot.type=starai_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30}}" \
    --teleop.type=starai_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true
```

<details>
<summary> Dual-Arm </summary>

```bash
python -m lerobot.teleoperate \
    --robot.type=bi_starai_follower \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_follower \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30}}" \
    --teleop.type=bi_starai_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_leader \
    --display_data=true
```

</details>

:::tip
If you find bug like this.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" />
</div>

You can downgrade the rerun version to resolve the issue.

```bash
pip3 install rerun-sdk==0.23
```

:::

## Record the dataset

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/OpaC0CA3-Mc?si=rbNhJJRkG9zngQB-" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Once you're familiar with teleoperation, you can record your first dataset.

If you want to use the Hugging Face hub features for uploading your dataset and you haven't previously done it, make sure you've logged in using a write-access token, which can be generated from the [Hugging Face settings](https://huggingface.co/settings/tokens):

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Store your Hugging Face repository name in a variable to run these commands:

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

Record 10 episodes and upload your dataset to the hub:

```bash
python -m lerobot.record \
    --robot.type=starai_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30}}" \
    --teleop.type=starai_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/starai \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=True \
    --dataset.single_task="Grab the black cube"
```

<details>
<summary> Dual-Arm </summary>

```bash
python -m lerobot.record \
    --robot.type=bi_starai_follower \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_follower \
    --teleop.type=bi_starai_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_leader \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30}}" \
    --display_data=true \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=True \
    --dataset.single_task="Grab the black cube"
```

:::tip
To differentiate between single-arm and dual-arm setups, the `--dataset.repo_id` here is named `starai/record-test_bi_arm`.
:::

</details>

:::tip
If you do not want to use the Hugging Face Hub dataset upload feature, you can choose `--dataset.push_to_hub=false`. Also, replace `--dataset.repo_id=${HF_USER}/starai` with a custom local folder name, for example, `--dataset.repo_id=starai/record-test`. The data will be stored in `~/.cache/huggingface/lerobot` under the system's home directory.
:::

Not uploading to Hub:
**（Recommended, the following tutorials will focus on local data）**

```bash
python -m lerobot.record \
    --robot.type=starai_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30}}" \
    --teleop.type=starai_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true \
    --dataset.repo_id=starai/record-test \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=False \#修改push_to_hub为false
    --dataset.single_task="Grab the black cube"
```

<details>
<summary> Dual-Arm </summary>

```bash
python -m lerobot.record \
    --robot.type=bi_starai_follower \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_follower \
    --teleop.type=bi_starai_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_leader \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30}}" \
    --display_data=true \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=False \#修改push_to_hub为false
    --dataset.single_task="Grab the black cube"
```

:::tip
To differentiate between single-arm and dual-arm setups, the `--dataset.repo_id` here is named `starai/record-test_bi_arm`.
:::

</details>

- `record` provides a set of tools for capturing and managing data during robot operations:

#### 1. Data Storage

- Data is stored in the `LeRobotDataset` format and saved to disk during the recording process.

#### 2. Checkpointing and Resuming

- Checkpoints are automatically created during recording.
- If an issue occurs, you can resume by rerunning the same command with `--resume=true`. When resuming recording, you must set `--dataset.num_episodes` to the **additional number of episodes to record**, not the target total number of episodes in the dataset!
- To start recording from scratch, **manually delete** the dataset directory.

#### 3. Recording Parameters

Set the data recording workflow using command-line parameters:

```markdown
Parameter Description
- warmup-time-s: The initialization time.
- episode-time-s: The duration for each data collection session.
- reset-time-s: The preparation time between each data collection.
- num-episodes: The expected number of data sets to collect.
- push-to-hub: Determines whether to upload the data to HuggingFace Hub.
```

#### 4. Keyboard Controls During Recording

Use keyboard shortcuts to control the data recording workflow:

- Press **right arrow key (→)**: Prematurely stop the current episode or reset the time, then move to the next one.
- Press **left arrow key (←)**: Cancel the current episode and re-record it.
- Press **ESC**: Immediately stop the session, encode the video, and upload the dataset.

:::tip
On Linux, if the left and right arrow keys and the escape key have no effect during data recording, ensure that the $DISPLAY environment variable is set. See pynput limitations.

Once you are familiar with data recording, you can create a larger dataset for training. A good starting task is to grasp an object at different positions and place it in a small box. We recommend recording at least 50 episodes, with 10 episodes per location. Keep the camera fixed and maintain consistent grasping behavior throughout the recording. Also, ensure that the object you are manipulating is visible in the camera. A good rule of thumb is that you should be able to complete the task by looking only at the camera image.
:::

## Visualize the dataset

:::tip
Unstable, can be skipped, or can be attempted.
:::

```bash
echo ${HF_USER}/starai  
```

If you used `--dataset.push_to_hub=true` and uploaded the data, you can visualize it locally with the following command:

```bash
python -m lerobot.scripts.visualize_dataset_html \
  --repo-id ${HF_USER}/starai
```

If you used `--dataset.push_to_hub=false` and did not upload the data, you can visualize it locally with the following command:

```bash
python -m lerobot.scripts.visualize_dataset_html \
  --repo-id starai/record-test
```

Here, `starai/record-test` is the custom `repo_id` name you specified when collecting the data.

## Replay an episode

Now try to replay the first episode on your robot:

```bash
python -m lerobot.replay \
    --robot.type=starai_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --dataset.repo_id=starai/record-test \
    --dataset.episode=0 # choose the episode you want to replay
```

<details>
<summary> Dual-Arm </summary>

```bash
python -m lerobot.replay \
    --robot.type=bi_starai_follower \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_follower \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode=0 # choose the episode you want to replay
```

</details>

## Train policy

To train a policy to control your robot, here is an example command:

```bash
python -m lerobot.scripts.train \
  --dataset.repo_id=starai/record-test \
  --policy.type=act \
  --output_dir=outputs/train/act_viola_test \
  --job_name=act_viola_test \
  --policy.device=cuda \
  --wandb.enable=False \
  --policy.repo_id=starai/my_policy
```

<details>
<summary> Dual-Arm </summary>

```bash
python -m lerobot.scripts.train \
  --dataset.repo_id=starai/record-test_bi_arm \
  --policy.type=act \
  --output_dir=outputs/train/act_bi_viola_test \
  --job_name=act_bi_viola_test \
  --policy.device=cuda \
  --wandb.enable=False \
  --policy.repo_id=starai/my_policy
```

</details>

1. We provide the dataset as a parameter: `dataset.repo_id=starai/record-test`.
2. We will load the configuration from [`configuration_act.py`](https://github.com/huggingface/lerobot/blob/main/src/lerobot/policies/act/configuration_act.py). Importantly, this policy will automatically adapt to the robot's motor states, motor actions, and the number of cameras, and will be saved in your dataset.
3. We provide `wandb.enable=true` to use [Weights and Biases](https://docs.wandb.ai/quickstart) for visualizing training charts. This is optional, but if you use it, make sure you have logged in by running `wandb login`.

Resume training from a specific checkpoint.

```bash
python -m lerobot.scripts.train \
  --config_path=outputs/train/act_viola_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

## Evaluate your policy

Run the following command to record 10 evaluation episodes:

```bash
python -m lerobot.record  \
  --robot.type=starai_viola \
  --robot.port=/dev/ttyUSB1 \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30}}" \
  --robot.id=my_awesome_staraiviola_arm \
  --display_data=false \
  --dataset.repo_id=starai/eval_record-test \
  --dataset.single_task="Grab the black cube" \
  --policy.path=outputs/train/act_viola_test/checkpoints/last/pretrained_model
```

<details>
<summary> Dual-Arm </summary>

```bash
python -m lerobot.record  \
    --robot.type=bi_starai_follower \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video0, width: 640, height: 480, fps: 30},front: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30}}" \
    --robot.id=bi_starai_follower \
    --display_data=false \
    --dataset.repo_id=starai/eval_record-test_bi_arm \
    --dataset.single_task="test" \
    --policy.path=outputs/train/act_bi_viola_test/checkpoints/last/pretrained_model
```

</details>

As you can see, this is almost the same as the command previously used to record the training dataset, with a few changes:

1. The `--policy.path` parameter, which indicates the path to your trained policy weights file (for example, `outputs/train/act_viola_test/checkpoints/last/pretrained_model`). If you have uploaded your model weights to the Hub, you can also use the model repository (for example, `${HF_USER}/starai`).

2. The name of the evaluation dataset `dataset.repo_id` starts with `eval_`. This operation will record videos and data specifically for the evaluation phase, which will be saved in a folder starting with `eval_`, such as `starai/eval_record-test`.

3. If you encounter `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/starai/eval_xxxx'` during the evaluation phase, please delete the folder starting with `eval_` and run the program again.

4. When encountering `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`, please ensure that the keywords such as `up` and `front` in the `--robot.cameras` parameter are strictly consistent with those used during the data collection phase.

## FAQ

- If you are using the tutorial in this document, please `git clone` the recommended GitHub repository: `https://github.com/servodevelop/lerobot.git`.

- If teleoperation works normally but teleoperation with a Camera does not display the image interface, please refer to [here](https://github.com/huggingface/lerobot/pull/757/files).

- If you encounter a libtiff issue during dataset teleoperation, please update the libtiff version.

  ```bash
  conda install libtiff==4.5.0  # for Ubuntu 22.04, use libtiff==4.5.1
  ```

- After installing LeRobot, it may automatically uninstall the GPU version of PyTorch, so you need to manually install torch-gpu.

- For Jetson, please first install [PyTorch and Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) before running `conda install -y -c conda-forge ffmpeg`, otherwise, there will be a version mismatch issue when compiling torchvision.

- Training 50 episodes of ACT data on a 3060 8GB laptop takes approximately 6 hours, while training 50 episodes on a 4090 or A100 computer takes about 2-3 hours.

- During data collection, ensure the stability of the camera position and angle, as well as the environmental lighting, and minimize the unstable background and pedestrians captured by the camera. Otherwise, significant changes in the deployment environment may cause the robotic arm to fail to grasp objects normally.

- The `num-episodes` in the data collection command should ensure sufficient data collection and should not be manually paused midway. This is because the mean and variance of the data are calculated only after data collection is completed, which is necessary for training.

- If the program prompts that it cannot read the USB camera image data, please ensure that the USB camera is not connected through a Hub. The USB camera must be directly connected to the device to ensure fast image transmission rates.

## Citation

Seeedstudio English Wiki document：[How to use the SO10xArm robotic arm in the latest version of Lerobot](https://wiki.seeedstudio.com/lerobot_so100m_new/)

lerobot-starai github: [lerobot-starai](https://github.com/Welt-liu/lerobot-starai)

STEP: [STEP](https://github.com/Welt-liu/star-arm-moveit2/tree/main/hardware)

URDF: [URDF](https://github.com/Welt-liu/star-arm-moveit2/tree/main/src/cello_description)

StarAI Robot Arm moveit2: [star-arm-moveit2](https://github.com/Welt-liu/star-arm-moveit2)

Huggingface Project: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

ACT or ALOHA: [Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware](https://tonyzhaozh.github.io/aloha/)

VQ-BeT: [VQ-BeT: Behavior Generation with Latent Actions](https://sjlee.cc/vq-bet/)

Diffusion Policy: [Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

TD-MPC: [TD-MPC](https://www.nicklashansen.com/td-mpc/)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
