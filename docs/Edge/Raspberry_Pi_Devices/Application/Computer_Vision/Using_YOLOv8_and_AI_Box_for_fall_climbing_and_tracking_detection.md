---
description: This wiki shows how to use a YOLO model on the AI Box for fall, climbing over barriers, and tracking people.
title: YOLOv8 on AI Box for Fall, Climb & Track
keywords:
  - Edge AI
  - rpi5
  - Hailo
  - YOLO
image: https://files.seeedstudio.com/R2000/tracking_people.png
slug: /yolov8_on_ai_box_for_fall_climbing_tracking
last_update:
  date: 07/29/2025
  author: Jiahao

no_comments: false # for Disqus
---

# YOLOv8 AI Box: Fall, Climb & Track


## Introduction

This project will guide you on how to use the [reComputed AI Box](https://www.seeedstudio.com/reComputer-AI-R2140-12-p-6431.html) or [reComputed Industry AI Box](https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html) to implement fall detection, climbing detection, and tracking detection using the YOLOv8 model.


## Hardware prepare

|                                               reCompuer AI Box                                              |                                               reComputer Industry AI Box                                               |
| :----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
| ![Raspberry Pi AI Kit](https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image114993560.jpeg) | ![reComputer R1100](https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114993595-recomputer-ai-industrial-r2135-12.jpg) |
| [**Purchase Now**](https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html?utm_source=PiAICourse&utm_medium=github&utm_campaign=Course) | [**Purchase Now**](https://www.seeedstudio.com/reComputer-AI-Industrial-R2135-12-p-6432.html?utm_source=PiAICourse&utm_medium=github&utm_campaign=Course) |

> 💡 **Note**: This project requires a reComputer AI Box or a reComputer Industry AI Box.


##  Fall down detection

### Install the runtime environment

```bash
sudo apt update && sudo apt full-upgrade -y && sudo apt install hailo-all
```

### Download the project

```bash
git clone https://github.com/Seeed-Projects/fall_detection_with_AIBox.git
cd fall_detection_with_AIBox
```

### Prepare the python environment

```bash
python -m venv .env --system-site-packages  && source .env/bin/activate
pip install -r requirements.txt
```

### Run the project
```bash
python app.py -i ./falldown_test.mp4 -n ./yolov8n.hef --show-fps -l ./common/coco.txt
```

### Result

<iframe width="800" height="400" src="https://www.youtube.com/embed/H0NaAevLo2k" title="How the Seeed Raspberry Pi AI Box Helps in Abnormal Event Detection" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Fence climbing

### Install the runtime environment

```bash
sudo apt update && sudo apt full-upgrade -y && sudo apt install hailo-all
```

### Download the project

```
git clone https://github.com/Seeed-Projects/cross_fence_with_AIBox.git
cd cross_fence_with_AIBox
```

### Prepare the python environment

```bash
python -m venv .env --system-site-packages  && source .env/bin/activate
pip install -r requirements.txt
```

### Run the project

```bash
python app.py -i ./scale_the_fence.mp4 -n ./yolov8n.hef --show-fps -l ./common/coco.txt 
```

### Result

<iframe width="800" height="400" src="https://www.youtube.com/embed/_-89czNbZ_M?list=PLpH_4mf13-A3Wm6hJp7JeT4DD9NXXUAca" title="Seeed Raspberry Pi AI Box Helps in Abnormal Event Detection: Fence Climbing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Tracking 

### Install the runtime environment

```bash
sudo apt update && sudo apt full-upgrade -y && sudo apt install hailo-all
```

### Download the project

```bash
git clone https://github.com/Seeed-Projects/track_people_with_AIBox.git
cd fall_detection_with_AIBox
```

### Prepare the python environment

```bash
python -m venv .env --system-site-packages  && source .env/bin/activate
pip install -r requirements.txt
```

### Run the project

```bash
python app.py -i ./people-walking.mp4 -n ./yolov8n.hef --show-fps -l ./common/coco.txt --track
```

### result 

<iframe width="800" height="400" src="https://www.youtube.com/embed/xoeMcaG_FxE?list=PLpH_4mf13-A3Wm6hJp7JeT4DD9NXXUAca" title="reComputer Object Detection and Tracking: The Role of YOLOv8 in Shaping Results" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


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