---
description: このwikiは、Starai Arm Manipulator - ROS2 MoveItガイドを提供します。
title: Starai Arm Manipulator - ROS2 MoveItガイド
keywords:
- Moveit
- ROS2
- Arm
- Robotics 
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/starai_robotic_arm.webp
slug: /ja/starai_arm_ros_moveit
last_update:
  date: 8/1/2025
  author: LiShanghang
---

# Starai Arm Manipulator - ROS2 MoveItガイド

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/IJKTeBYAG7k?si=iS-jqT27fDjeI6yX" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

| **Follower Viola** | **Leader Violin** | **Follower Cello** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png) |

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Fashionstar-Star-Arm-Viola-Violin-p-6497.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入!!! 🖱️</font></span></strong>
</a></div>

## 製品紹介

1. **オープンソース & 二次開発が容易**
    [Fashion Star Robotics](https://fashionrobo.com/)が提供するこのシリーズのサーボモーターは、オープンソースで簡単にカスタマイズ可能な6+1自由度ロボットアームソリューションを提供します。

2. **様々なペイロードを持つデュアルアームシステム**
    Violinはリーダーロボットアームとして機能します。アーム範囲の70%において、フォロワーアームViolaは300gの動作ペイロードを持ち、フォロワーアームCelloは750gの動作ペイロードを持ちます。

3. **ROS2、Moveit2、Isaac Simをサポート**
    ロボットアームデータトピックの発行・購読とロボットアームの制御にROS2をサポートし、逆運動学計算にMoveIt2、Isaac Simでのシミュレーションもサポートします。

4. **LeRobotプラットフォーム統合サポート**
    [LeRobotプラットフォーム](https://github.com/huggingface/lerobot)との統合のために特別に設計されています。このプラットフォームは、データ収集、シミュレーション、トレーニング、デプロイメントを含む実世界のロボティクスタスクにおける模倣学習のためのPyTorchモデル、データセット、ツールを提供します。

5. **オープンソースSDK**
     PythonとC++ SDK開発をサポート

6. **ボタンホバー**
    重力補償をシミュレートし、ボタンを介してロボットアームを任意の位置でホバーさせることができます。

7. **モジュラーエンドエフェクター**
    迅速なDIY交換を可能にします。

8. **豊富な学習リソース**
    環境設定、インストールとデバッグガイド、カスタム把持タスクの例を含む包括的なオープンソース学習リソースを提供し、ユーザーが迅速に開始してロボットアプリケーションを開発できるよう支援します。

9. **Nvidiaプラットフォーム互換性**
    Nvidia Jetsonプラットフォーム経由でのデプロイメントをサポートします。

## 仕様

| 項目                 | フォロワーアーム \| Viola                             | リーダーアーム \|Violin                                | フォロワーアーム \|Cello    |
| -------------------- | ------------------------------------------------- | ------------------------------------------------- |-----------------|
| 自由度   | 6+1                                               | 6+1                                               | 6+1             |
| リーチ                | 470mm                                             | 470mm                                             | 670mm |
| スパン                 | 940mm                                             | 940mm                                             | 1340mm |
| 再現性        | 2mm                                               | -                                                 | 1mm  |
| 動作ペイロード      | 300g（リーチ70%時）                            | -                                                 |  750g（リーチ70%時）   |
| サーボ               | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 |RX18-U100H-M x3<br/> RX8-U50H-M x3<br/> RX8-U51H-M x1|
| パラレルグリッパーキット  | ✅                                                 | -                                                 | ✅   |
| 手首回転         | Yes                                               | Yes                                               | Yes |
| 任意位置での保持 | Yes                                               | Yes（ハンドルボタン付き）                          |  Yes|
| リストカメラマウント   |参考3Dプリンティングファイルを提供 | | 参考3Dプリンティングファイルを提供
| LeRobotとの連携   | ✅                                                 | ✅                                                 | ✅|
| ROS 2との連携     | ✅                                                 | ✅                                                | ✅|
| MoveIt2との連携    | ✅                                                 | ✅                                               |✅ |
| Gazeboとの連携    | ✅                                                 |✅                                              |✅ |
| 通信ハブ    | UC-01                                             | UC-01                                             | UC-01 |
| 電源供給         | 12V10A/120w XT30                                   | 12V10A/120w XT30                                 |12V25A/300w XT60  |

サーボモーターの詳細については、以下のリンクをご覧ください。

[RA8-U25H-M](https://fashionrobo.com/actuator-u25/23396/)

[RX18-U100H-M](https://fashionrobo.com/actuator-u100/22853/)

[RX8-U50H-M](https://fashionrobo.com/actuator-u50/136/)

## 依存環境

LSBモジュールは利用できません。

ディストリビューターID: Ubuntu

説明:    Ubuntu 22.04.5 LTS

リリース:        22.04

コードネーム:       Jammy

ROS2:           Humble

### ROS2 Humbleのインストール

[ROS2 Humbleインストール](https://wiki.seeedstudio.com/install_ros2_humble/)

### Moveit2のインストール

```bash
sudo apt install ros-humble-moveit*
```

### サーボモーターのSDKをインストール

```bash
sudo pip install pyserial
sudo pip install fashionstar-uart-sdk
```

### ワークスペースの作成と初期化

```bash
mkdir -p ~/starai_ws/src
cd ~/starai_ws
colcon build
```

### Clone `starai-arm-moveit2` Ros2's Package

```
cd ~/starai_ws/src
git clone https://github.com/Welt-liu/starai-arm-moveit2.git
cd ~/starai_ws
colcon build
echo "source ~/starai_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

## Starai Arm MoveIt2 シミュレーションスクリプト

```bash
ros2 launch viola_configure demo.launch.py 
```

## 実際のロボットアームの使用

### ターミナル1: アーム制御ノードの開始

アームはゼロ位置に移動します。

```bash
ros2 run robo_driver driver
```

### コントローラーノードの開始

```bash
ros2 run viola_controller controller
```

### Moveit2を開始する

```bash
ros2 launch viola_configure actual_robot_demo.launch.py
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/L82y7e9uk9Q?si=Fa8YorBPgbRszYGn" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## FAQ

- RViz2インターフェースでちらつきが発生する場合は、以下のコマンドを試してください：

    ```bash
    export QT_AUTO_SCREEN_SCALE_FACTOR=0
    ```
