---
description: このwikiはROS2 humbleをインストールするためのステップバイステップガイドを提供します。
title: ROS2 Humbleのインストール
keywords:
- NVIDIA
- Isaac ROS
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/install_ros2_humble
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
---

# ROS2 Humbleインストール

## 前提条件
- ReComputerにはJetpack 5.1.2とUbuntu 20.04環境がインストールされている必要があります

## ロケールの設定
```bash
locale  # UTF-8をチェック
sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8
locale  # 設定を確認
```

## 依存関係のインストール
```bash
sudo apt update && sudo apt install gnupg wget
sudo apt install software-properties-common
sudo add-apt-repository universe
```

## ソースの初期化（地域を選択）
```bash
# 米国地域
echo 'deb https://isaac.download.nvidia.com/isaac-ros/ubuntu/main focal main' | sudo tee -a /etc/apt/sources.list

# 中国地域
echo 'deb https://isaac.download.nvidia.cn/isaac-ros/ubuntu/main focal main' | sudo tee -a /etc/apt/sources.list
```

## ROS 2 APTリポジトリの追加
```bash
sudo apt update && sudo apt install curl -y \
&& sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu focal main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```

## ROS2のインストール
```bash
sudo apt update
sudo apt install ros-humble-desktop-full  # オプション: ros-humble-desktop-full、ros-humble-desktop、またはros-humble-ros-base
```

## 追加のビルドツールのインストール
```bash
sudo apt install ros-dev-tools
```

## ROS環境の初期化
```bash
sudo rosdep init
rosdep update
```

## ROS環境変数の設定
```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc
```


## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>