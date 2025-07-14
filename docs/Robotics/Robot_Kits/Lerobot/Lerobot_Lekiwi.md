---
description: This wiki provides the assembly and debugging tutorial for the Lekiwi and realizes data collection and training within the Lerobot framework. 
title: How to use the Lekiwi in Lerobot
keywords:
- Lerobot
- Huggingface
- Car
- Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/lekiwi_cad_v1.webp
slug: /lerobot_lekiwi
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
---

# How to use the Lekiwi in Lerobot
 
:::tip

This tutorial repository maintains the verified stable release of Lerobot as of June 5, 2025. Currently, ​Hugging Face​ has rolled out a ​major upgrade​ to Lerobot, introducing many new features. If you want to experience the latest tutorials, please follow the [​official documentation​ for guidance](https://huggingface.co/docs/lerobot/index).

:::



## Introduction

The [Lekiwi](https://github.com/SIGRobotics-UIUC/LeKiwi) is a fully open-source robotic car project launched by [SIGRobotics-UIUC](https://github.com/SIGRobotics-UIUC). It includes the detailed 3D printing files and operation guides, designed to be compatible with the [LeRobot](https://github.com/huggingface/lerobot/tree/main) imitation learning framework. It supports the SO101 robotic arm to enable a complete imitation learning pipeline, 

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/lekiwi_cad_v1.png" />
  </div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>


## Main Features
 
1. **Open-source and low-cost**:  It is an open-source, low-cost robotic car solution from The [Lekiwi](https://github.com/SIGRobotics-UIUC/LeKiwi)
2. **Integration with LeRobot**: Designed for integration with [LeRobot platform](https://github.com/huggingface/lerobot)
3. **Abundant learning resources**: Provides comprehensive open-source learning resources like assembly and calibration guides, and tutorials for testing, data collection, training and deployment to assist users in quickly getting started and developing robotic applications.
4. **Compatible with Nvidia**: Deploy this arm kit with reComputer Mini J4012 Orin NX 16 GB.
5. **Multi-Scene Application**: It is applicable to fields such as education, scientific research, automated production, and robotics, helping users achieve efficient and precise robot operations in various complex tasks.

:::caution

Seeed Studio is only responsible for the quality of the hardware itself. The tutorials are strictly updated in accordance with the official documentation. If you encounter software issues or environment dependency problems that cannot be resolved, please promptly report the issue to the [LeRobot platform](https://github.com/huggingface/lerobot) or the [LeRobot Discord channel](https://discord.gg/8TnwDdjFGU).
:::

:::danger

- All servo motors in the LeKiwi chassis require 12V power supply. For users with 5V robotic arms, we provide a 12V-to-5V step-down converter module. Please note that circuit modification will be required on your part.

- A 12V power supply - You may select this option at checkout if needed. If you already own a 12V power supply, you may skip this option and simply convert your power supply's output connector to a 5521 DC plug.

- Raspberry Pi controller and camera - These must be purchased separately through the order interface.
:::


## Specification

| Type | Lekiwi | 
|--|--|
|  Servo Motos | 3x 12v STS3215 1:345 Gear Rate| 
| Power Supply | 12V DC or Battery |
| Angle sensor| 12-bit magnetic encoder | 
| Recommended Operating Temperature Range | 0℃～40℃ | 
| Communication Method| UART | 
| Control Method | PC |


## Bill of Materials(BOM)

| Part | Amount | Included|
|--|--|--|
| STS3215 1:345 12V Servo Motos | 3 | ✅ |
| Omnidirectional wheel/universal wheel | 3 | ✅ |
| Lekiwi 3D printed enclosure | 1 | ✅ |
| DC-DC Buck Power Module - 24V/12V to 5V | 1 | ✅ |
| Motor Control Board | 1 | ✅ |
| DC Male to Dual DC Male 5521 Y-Cable | 1 | ✅ |
| USB Cable;Type C 2.0 to Type C 2.0-Black;L150mm| 1 | ✅ |
| USB 3.1 Type C to A Cable 0.5 Meter | 1 | ✅ |
| Plug Power Adapter;Black-12V-2A AC/DC | 1 | ✅ |
| M2 M3 M4 Assorted Screw | Enough | ✅ |
| Raspberry pi | 1 | Option |
| USB Camera | 1 | Option |
| Depth Camera | 2 | Option |
| SO-ARM101 Pro | 1 | Option |
| 12V High - Capacity Lithium - ion Battery Pack E326S| 1 | Option |

## Initial System Environment

**For Ubuntu x86:**
- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6  

**For Jetson Orin:**
- Jetson JetPack 6.2  
- Python 3.10  
- Torch 2.6  

**For Raspberry Pi:**
- Raspberry Pi5 4G~16G


## 3D Printing Guide

### Parts
We provide ready-to-print STL files for the 3D-printed parts below. These can be printed with generic PLA filament on consumer-grade FDM printers. We tested on a Bambu Lab P1S printer. For all components, we just load into bambuslicer, auto-rotate and auto-arrange, enable any recommended supports, and print.

| Item | Quantity | Notes | 
|:---|:---:|:---:|
| [Base plate Top](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_plate_layer2.stl) | 1 | |
| [Base plate Bottom](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_plate_layer1.stl) | 1 | |
| [Drive motor mount](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/drive_motor_mount_v2.stl) | 3 | |
| [Servo wheel hub](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/servo_wheel_hub.stl) | 3 | Use Supports|
| [RasPi case Top](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/pi_case_top.stl) | 1 | 2|
| [RasPi case Bottom](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/pi_case_bottom.stl) | 1 | |
| Arducam [base mount](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_camera_mount.stl) and [Wrist mount](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/wrist_camera_mount.stl)| 1 | **Compatible with [this camera](https://www.amazon.com/Arducam-Camera-Computer-Without-Microphone/dp/B0972KK7BC)** |
| Webcam [base mount](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/webcam_mount.stl), [gripper insert](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/so100_gripper_cam_mount_insert.stl), and [wrist mount](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/webcam_mount_wrist.stl) | 1 | **Compatible with [this camera](https://www.amazon.fr/Vinmooog-equipement-Microphone-Enregistrement-conférences/dp/B0BG1YJWFN/)** |


### Printing Parameters

The STL files provided are ready to print on many FDM printers. Below are the tested and suggested settings though others may work.
- Material: PLA+ 
- Nozzle Diameter and Precision: 0.2mm nozzle diameter at 0.2mm layer height
- Infill Density: 15%  
- Printing Speed: 150 mm/s
- If needed, upload G-code (slice file) to printer and print

## Install LeRobot

On your Raspberry Pi:

### 1. [Install Miniconda](https://docs.anaconda.com/miniconda/install/#quick-command-line-install):
```bash
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
```

### 2. Restart shell
Copy paste in your shell: `source ~/.bashrc` or for Mac: `source ~/.bash_profile` or `source ~/.zshrc` if you're using zshell

### 3. Create and activate a fresh conda environment for lerobot

```bash
conda create -y -n lerobot python=3.10
```

Then activate your conda environment (do this each time you open a shell to use lerobot!):
```bash
conda activate lerobot
```

### 4. Clone LeRobot:
```bash
git clone https://github.com/huggingface/lerobot.git ~/lerobot
```

### 5. Install ffmpeg in your environment:
When using `miniconda`, install `ffmpeg` in your environment:
```bash
conda install ffmpeg -c conda-forge
```

### 6. Install LeRobot with dependencies for the feetech motors:
```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

## C. Install LeRobot on laptop
If you already have install LeRobot on your laptop you can skip this step, otherwise please follow along as we do the same steps we did on the Pi.

> [!TIP]
> We use the Command Prompt (cmd) quite a lot. If you are not comfortable using the cmd or want to brush up using the command line you can have a look here: [Command line crash course](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)

On your computer:

### 1. [Install Miniconda](https://docs.anaconda.com/miniconda/install/#quick-command-line-install):

### 2. Restart shell
Copy paste in your shell: `source ~/.bashrc` or for Mac: `source ~/.bash_profile` or `source ~/.zshrc` if you're using zshell

### 3. Create and activate a fresh conda environment for lerobot


```bash
conda create -y -n lerobot python=3.10
```

Then activate your conda environment (do this each time you open a shell to use lerobot!):
```bash
conda activate lerobot
```

### 4. Clone LeRobot:
```bash
git clone https://github.com/ZhuYaoHui1998/lerobot ~/lerobot
```

### 5. Install ffmpeg in your environment:
When using `miniconda`, install `ffmpeg` in your environment:
```bash
conda install ffmpeg -c conda-forge
```

### 6. Install LeRobot with dependencies for the feetech motors:
```bash
cd ~/lerobot && pip install -e ".[feetech]"
```


## Configure the motors

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/huggingface/lerobot/refs/heads/main/media/lekiwi/motor_ids.webp" />
</div>


**Find USB ports associated to your arms**
To find the correct ports for single motor, run the utility script twice:

```bash
python lerobot/scripts/find_motors_bus_port.py
```

Example output when identifying the port (e.g., `/dev/tty.usbmodem575E0031751` on Mac, or possibly `/dev/ttyACM0` on Linux):

Example output when identifying the port (e.g., `/dev/tty.usbmodem575E0032081`, or possibly `/dev/ttyACM1` on Linux):

Troubleshooting: On Linux, you might need to give access to the USB ports by running:

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

**Configure your motors**

Plug your first motor and run this script to set its ID to 7-9. It will also set its present position to 2048, so expect your motor to rotate:

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 7
```

Note: These motors are currently limitated. They can take values between 0 and 4096 only, which corresponds to a full turn. They can't turn more than that. 2048 is at the middle of this range, so we can take -2048 steps (180 degrees anticlockwise) and reach the maximum range, or take +2048 steps (180 degrees clockwise) and reach the maximum range. The configuration step also sets the homing offset to 0, so that if you misassembled the arm, you can always update the homing offset to account for a shift up to ± 2048 steps (± 180 degrees).

Then unplug your motor and plug the second motor and set its ID to 8 and 9.

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 8
```


## Assembly

<details>
<summary>Assemble Lekiwi</summary>

You can refer official [assemble tutorial](https://github.com/SIGRobotics-UIUC/LeKiwi).

Upon receiving the printed parts, all printed components are as shown below.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/1.jpg" />
</div>


**A. Attach the drive motor to the motor mount using 12 m2x6 tap screws.**

| **Step 1** | **Step 2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/2.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/3.jpg) |

**B. Screw the drive motor mount onto the bottom base plate using 12 m3x16 machine screws.**

:::tip
Remember the ID arrangement: 8 represents the rear wheel, while 7 and 9 correspond to the left front and right front wheels respectively.
:::

| **Step 1** | **Step 2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/4.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/5.jpg) |

**C. Attach the wheel hub to the omniwheel.**

**Step 1 and Step 2**: Remove the three screws.

| **Step 1** | **Step 2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/7.jpg) |

**Step 3 and Step 4**: Attach the wheel hub to the omniwheel using 9 m4x18 machine screws.

| **Step 3** | **Step 4** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/8.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/9.jpg) |

**D. Attach the servo horn to the wheel hub using 6 m3x16 machine screws.**

| **Step 1** | **Step 2** |**Step 3** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/10.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/11.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/12.jpg) |

**E. Attach the servo horn to the drive motor using 3 m3x10 machine screw.**

| **Step 1** | **Step 2** |**Step 3** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/15.jpg) |


**H. Add the servo driver and connect all circuits.**

| **Step 1** | **Step 2** |**Step 3** |**Step 4** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/16.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/17.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/18.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/19.jpg) |

| **Step 5** | **Step 6** |**Step 7** |**Step 8** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/20.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/20-1.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/21.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/22.jpg) |

The **Power IN** connects directly to the power supply, like Step8, while the **USB-C** port provides 5V power to the Raspberry Pi.  

For the additional **2-pin terminals (5V & 12V)**:  
- If using a **7.4V SO10x robotic arm**, power the **Servo Motors Board** via the **5V output**.  
- If using a **12V robotic arm**, power the **Servo Motors Board** directly from the **DC power splitter**, like Step 8.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/23.jpg" />
</div>

**I. You can now proceed to mount the Raspberry Pi onto the vehicle's second-layer top plate. Before doing so, connect both the **USB-C power cable** and **USB-C servo motor communication cable**, then route them out through the top panel of the vehicle.**

**Step 1** Connect the power cable to your Raspberry Pi and route it through the center opening of the top panel.

|  | | |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/24.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/25.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/26.jpg) |

**Step 2** Among the three servo motors in the chassis, one servo has only one cable connected. If you need to install the SO10x robotic arm, please:Remove the ID1 cable from the robotic arm. Connect it to the chassis motor. Route it through the top panel as a reserved cable

|  | | |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/27.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/28.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/29.jpg) |

**Step 3** Now you can connect the USB-C from the servo driver board to the USB port on the Raspberry Pi.

|  | |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/30.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/31.jpg) |

**J. Now you need to secure the Raspberry Pi and the remaining parts of the top plate using 12 M3×16 screws.**

|  | ||
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/32.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/33.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/34.jpg) |

**K. Now you can install the USB camera and Follower Arm using 1 M3x16 and 4 M5×25 screws**

|  |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/35.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/36.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/37.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/29.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/38.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/39.jpg) |

And ensure both the servo control cable and USB camera are connected to the Raspberry Pi.

|  | 
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/31.jpg) |

</details>


## Update config
Both config files on the LeKiwi LeRobot and on the laptop should be the same. First we should find the Ip address of the Raspberry Pi of the mobile manipulator. This is the same Ip address used in SSH. We also need the usb port of the control board of the leader arm on the laptop and the port of the control board on LeKiwi. We can find these ports with the following script.

On Linux, you might need to give access to the USB ports by running:
```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

IMPORTANTLY: Now that you have your ports of leader and follower arm and ip address of the mobile-so100, update the **ip** in Network configuration, **port** in leader_arms and **port** in lekiwi. In the [`LeKiwiRobotConfig`](https://github.com/huggingface/lerobot/blob/main/lerobot/common/robot_devices/robots/configs.py) file. Where you will find something like:
```python
@RobotConfig.register_subclass("lekiwi")
@dataclass
class LeKiwiRobotConfig(RobotConfig):
    # `max_relative_target` limits the magnitude of the relative positional target vector for safety purposes.
    # Set this to a positive scalar to have the same value for all motors, or a list that is the same length as
    # the number of motors in your follower arms.
    max_relative_target: int | None = None

    # Network Configuration
    ip: str = "172.17.133.91"
    port: int = 5555
    video_port: int = 5556

    cameras: dict[str, CameraConfig] = field(
        default_factory=lambda: {
            "mobile": OpenCVCameraConfig(camera_index="/dev/video0", fps=30, width=640, height=480),
            "mobile2": OpenCVCameraConfig(camera_index="/dev/video2", fps=30, width=640, height=480),
        }
    )

    calibration_dir: str = ".cache/calibration/lekiwi"

    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": FeetechMotorsBusConfig(
                port="/dev/tty.usbmodem585A0077581",
                motors={
                    # name: (index, model)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
        }
    )

    follower_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": FeetechMotorsBusConfig(
                port="/dev/ttyACM0",
                motors={
                    # name: (index, model)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                    "left_wheel": (7, "sts3215"),
                    "back_wheel": (8, "sts3215"),
                    "right_wheel": (9, "sts3215"),
                },
            ),
        }
    )

    teleop_keys: dict[str, str] = field(
        default_factory=lambda: {
            # Movement
            "forward": "w",
            "backward": "s",
            "left": "a",
            "right": "d",
            "rotate_left": "z",
            "rotate_right": "x",
            # Speed control
            "speed_up": "r",
            "speed_down": "f",
            # quit teleop
            "quit": "q",
        }
    )

    mock: bool = False
```

## Wired version

For the wired LeKiwi version your configured IP address should refer to your own laptop (127.0.0.1), because leader arm and LeKiwi are in this case connected to own laptop. Below and example configuration for this wired setup:
```python
@RobotConfig.register_subclass("lekiwi")
@dataclass
class LeKiwiRobotConfig(RobotConfig):
    # `max_relative_target` limits the magnitude of the relative positional target vector for safety purposes.
    # Set this to a positive scalar to have the same value for all motors, or a list that is the same length as
    # the number of motors in your follower arms.
    max_relative_target: int | None = None

    # Network Configuration
    ip: str = "127.0.0.1"
    port: int = 5555
    video_port: int = 5556

    cameras: dict[str, CameraConfig] = field(
        default_factory=lambda: {
            "front": OpenCVCameraConfig(
                camera_index=0, fps=30, width=640, height=480, rotation=90
            ),
            "wrist": OpenCVCameraConfig(
                camera_index=1, fps=30, width=640, height=480, rotation=180
            ),
        }
    )

    calibration_dir: str = ".cache/calibration/lekiwi"

    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": FeetechMotorsBusConfig(
                port="/dev/tty.usbmodem585A0077581",
                motors={
                    # name: (index, model)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
        }
    )

    follower_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": FeetechMotorsBusConfig(
                port="/dev/tty.usbmodem58760431061",
                motors={
                    # name: (index, model)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                    "left_wheel": (7, "sts3215"),
                    "back_wheel": (8, "sts3215"),
                    "right_wheel": (9, "sts3215"),
                },
            ),
        }
    )

    teleop_keys: dict[str, str] = field(
        default_factory=lambda: {
            # Movement
            "forward": "w",
            "backward": "s",
            "left": "a",
            "right": "d",
            "rotate_left": "z",
            "rotate_right": "x",
            # Speed control
            "speed_up": "r",
            "speed_down": "f",
            # quit teleop
            "quit": "q",
        }
    )

    mock: bool = False
```


## Calibration
Now we have to calibrate the leader arm and the follower arm. The wheel motors don't have to be calibrated.

### Calibrate follower arm (on mobile base)

Run the following commands on your computer to calibrate the leader robotic arm. Note: The images shown here are for the SO101 model.

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --robot.cameras='{}' \
  --control.type=calibrate \
  --control.arms='["main_leader"]'
```

| **LeaderMiddle Position** | **Leader Zero Position** | **Leader Rotated Position** | **Leader Rest Position** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig8](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_middle.webp) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_zero.webp) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_rotated.webp) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_rest.webp) |

Now run the following commands on your Raspberry Pi to calibrate the follower arm on LeKiwi. Ignore its current placement on the table - normal calibration should be performed when mounted on the vehicle.

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --robot.cameras='{}' \
  --control.type=calibrate \
  --control.arms='["main_follower"]'
```

| **Follower Middle Position** | **Follower Zero Position** | **Follower Rotated Position** | **Follower Rest Position** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig7](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_middle.webp) | ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_zero.webp) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_rotated.webp) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_rest.webp) |

## Teleoperate

> [!TIP]
> If you're using a Mac, you might need to give Terminal permission to access your keyboard. Go to System Preferences > Security & Privacy > Input Monitoring and check the box for Terminal.

To teleoperate SSH into your Raspberry Pi, and run `conda activate lerobot` and this script:
```bash
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --control.type=remote_robot
```

Then on your laptop, also run `conda activate lerobot` and this script:
```bash
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --control.type=teleoperate \
  --control.fps=30
```

> **NOTE:** To visualize the data, enable `--control.display_data=true`. This streams the data using `rerun`. For the `--control.type=remote_robot` you will also need to set `--control.viewer_ip` and `--control.viewer_port`

You should see on your laptop something like this: ```[INFO] Connected to remote robot at tcp://172.17.133.91:5555 and video stream at tcp://172.17.133.91:5556.``` Now you can move the leader arm and use the keyboard (w,a,s,d) to drive forward, left, backwards, right. And use (z,x) to turn left or turn right. You can use (r,f) to increase and decrease the speed of the mobile robot. There are three speed modes, see the table below:

| Speed Mode | Linear Speed (m/s) | Rotation Speed (deg/s) |
| ---------- | ------------------ | ---------------------- |
| Fast       | 0.4                | 90                     |
| Medium     | 0.25               | 60                     |
| Slow       | 0.1                | 30                     |


| Key | Action         |
| --- | -------------- |
| W   | Move forward   |
| A   | Move left      |
| S   | Move backward  |
| D   | Move right     |
| Z   | Turn left      |
| X   | Turn right     |
| R   | Increase speed |
| F   | Decrease speed |

> [!TIP]
>  If you use a different keyboard you can change the keys for each command in the `LeKiwiRobotConfig`.

### Wired version
If you have the **wired** LeKiwi version please run all commands including both these teleoperation commands on your laptop.

## Troubleshoot communication

If you are having trouble connecting to the Mobile SO100, follow these steps to diagnose and resolve the issue.

### 1. Verify IP Address Configuration
Make sure that the correct ip for the Pi is set in the configuration file. To check the Raspberry Pi's IP address, run (on the Pi command line):
```bash
hostname -I
```

### 2. Check if Pi is reachable from laptop/pc
Try pinging the Raspberry Pi from your laptop:
```bach
ping <your_pi_ip_address>
```

If the ping fails:
- Ensure the Pi is powered on and connected to the same network.
- Check if SSH is enabled on the Pi.

### 3. Try SSH connection
If you can't SSH into the Pi, it might not be properly connected. Use:
```bash
ssh <your_pi_user_name>@<your_pi_ip_address>
```
If you get a connection error:
- Ensure SSH is enabled on the Pi by running:
  ```bash
  sudo raspi-config
  ```
  Then navigate to: **Interfacing Options -> SSH** and enable it.

### 4. Same config file
Make sure the configuration file on both your laptop/pc and the Raspberry Pi is the same.

# G. Record a dataset
Once you're familiar with teleoperation, you can record your first dataset with LeKiwi.

To start the program on LeKiwi, SSH into your Raspberry Pi, and run `conda activate lerobot` and this script:
```bash
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --control.type=remote_robot
```

If you want to use the Hugging Face hub features for uploading your dataset and you haven't previously done it, make sure you've logged in using a write-access token, which can be generated from the [Hugging Face settings](https://huggingface.co/settings/tokens):
```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Store your Hugging Face repository name in a variable to run these commands:
```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```
On your laptop then run this command to record 2 episodes and upload your dataset to the hub:
```bash
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=${HF_USER}/lekiwi_test \
  --control.tags='["tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=2 \
  --control.push_to_hub=true
```

Note: You can resume recording by adding `--control.resume=true`.

### Wired version
If you have the **wired** LeKiwi version please run all commands including both these record dataset commands on your laptop.

# H. Visualize a dataset

If you uploaded your dataset to the hub with `--control.push_to_hub=true`, you can [visualize your dataset online](https://huggingface.co/spaces/lerobot/visualize_dataset) by copy pasting your repo id given by:
```bash
echo ${HF_USER}/lekiwi_test
```

If you didn't upload with `--control.push_to_hub=false`, you can also visualize it locally with (a window can be opened in the browser `http://127.0.0.1:9090` with the visualization tool):
```bash
python lerobot/scripts/visualize_dataset_html.py \
  --repo-id ${HF_USER}/lekiwi_test \
  --local-files-only 1
```

# I. Replay an episode
Now try to replay the first episode on your robot:
```bash
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --control.type=replay \
  --control.fps=30 \
  --control.repo_id=${HF_USER}/lekiwi_test \
  --control.episode=0
```

## J. Train a policy

To train a policy to control your robot, use the `python lerobot/scripts/train.py` script. A few arguments are required. Here is an example command:
```bash
python lerobot/scripts/train.py \
  --dataset.repo_id=${HF_USER}/lekiwi_test \
  --policy.type=act \
  --output_dir=outputs/train/act_lekiwi_test \
  --job_name=act_lekiwi_test \
  --policy.device=cuda \
  --wandb.enable=true
```

Let's explain it:
1. We provided the dataset as argument with `--dataset.repo_id=${HF_USER}/lekiwi_test`.
2. We provided the policy with `policy.type=act`. This loads configurations from `configuration_act.py`. Importantly, this policy will automatically adapt to the number of motor states, motor actions and cameras of your robot (e.g. `laptop` and `phone`) which have been saved in your dataset.
4. We provided `policy.device=cuda` since we are training on a Nvidia GPU, but you could use `policy.device=mps` to train on Apple silicon.
5. We provided `wandb.enable=true` to use [Weights and Biases](https://docs.wandb.ai/quickstart) for visualizing training plots. This is optional but if you use it, make sure you are logged in by running `wandb login`.

Training should take several hours. You will find checkpoints in `outputs/train/act_lekiwi_test/checkpoints`.

## K. Evaluate your policy

You can use the `record` function from `lerobot/scripts/control_robot.py` but with a policy checkpoint as input. For instance, run this command to record 10 evaluation episodes:
```bash
python lerobot/scripts/control_robot.py \
  --robot.type=lekiwi \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Drive to the red block and pick it up" \
  --control.repo_id=${HF_USER}/eval_act_lekiwi_test \
  --control.tags='["tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=10 \
  --control.push_to_hub=true \
  --control.policy.path=outputs/train/act_lekiwi_test/checkpoints/last/pretrained_model
```

As you can see, it's almost the same command as previously used to record your training dataset. Two things changed:
1. There is an additional `--control.policy.path` argument which indicates the path to your policy checkpoint with  (e.g. `outputs/train/eval_act_lekiwi_test/checkpoints/last/pretrained_model`). You can also use the model repository if you uploaded a model checkpoint to the hub (e.g. `${HF_USER}/act_lekiwi_test`).
2. The name of dataset begins by `eval` to reflect that you are running inference (e.g. `${HF_USER}/eval_act_lekiwi_test`).

## Help 🙋‍

For hardware issues, please contact customer service. For usage questions, join Discord.

[LeRobot platform](https://github.com/huggingface/lerobot) 

[LeRobot Discord channel](https://discord.gg/8TnwDdjFGU)

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
