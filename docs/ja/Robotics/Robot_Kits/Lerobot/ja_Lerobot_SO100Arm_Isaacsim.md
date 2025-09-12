---
description: このwikiでは、SO100 Arm Kitロボットアームを NVIDIA の Isaac Sim シミュレーションプラットフォームにインポートし、ROS2 と Python スクリプトを使用して制御する方法について説明します。
title: Isaac Sim で SO100Arm Kit をインポートして制御する方法
keywords:
- Lerobot
- Huggingface
- Arm
- Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Isaac_sim_import_success.webp
slug: /ja/lerobot_so100m_isaacsim
last_update:
  date: 01/16/2025
  author: ZhuYaoHui
---

# Isaac Sim 4.2 で SO100Arm Kit をインポートして制御する方法（4.2のみ対応）

## はじめに

[SO-100ARM](https://github.com/TheRobotStudio/SO-ARM100) は、[TheRobotStudio](https://www.therobotstudio.com/) が開始した完全オープンソースのロボットアームプロジェクトです。フォロワーアームとリーダーロボットアームが含まれており、詳細な3Dプリントファイルと操作ガイドも提供されています。[LeRobot](https://github.com/huggingface/lerobot/tree/main) は、PyTorch で実世界のロボティクス向けのモデル、データセット、ツールを提供することに取り組んでいます。その目的は、ロボティクスの参入障壁を下げ、誰もがデータセットと事前訓練済みモデルの共有に貢献し、その恩恵を受けられるようにすることです。

このwikiでは、SO100 Arm Kitロボットアームを NVIDIA の Isaac Sim シミュレーションプラットフォームにインポートし、ROS2 と Python スクリプトを使用して制御する方法について説明します。

<iframe width="900" height="600" src="https://www.youtube.com/embed/buiqdmNQKwY?si=CvovjaHNQy2nZsR2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## プロジェクト紹介

SO-ARM100 と reComputer Jetson AI インテリジェントロボットキットは、高精度ロボットアーム制御と強力な AI コンピューティングプラットフォームをシームレスに組み合わせ、包括的なロボット開発ソリューションを提供します。このキットは Jetson Orin または AGX Orin プラットフォームをベースとし、SO-ARM100 ロボットアームと LeRobot AI フレームワークを組み合わせて、教育、研究、産業オートメーションなどの複数のシナリオに適用可能なインテリジェントロボットシステムをユーザーに提供します。
このwikiでは、SO ARM100 の組み立てとデバッグのチュートリアルを提供し、Lerobot フレームワーク内でのデータ収集とトレーニングを実現します。

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
  </div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a></div>

## 仕様

| 仕様 | Arm Kit | Arm Kit Pro |
|--|--|--|
| タイプ | Arm Kit | Arm Kit Pro |
| 自由度 | 6 | 6 |
| 最大トルク | 19.5kg.cm 7.4V | 30kg.cm 12V |
| サーボ | STS3215 Bus Servo | STS3215 Bus Servo |
| 電源 | 5.5mm*2.1mm DC 5V4A | 5.5mm*2.1mm DC 12V1A |
| 角度センサー | 12ビット磁気エンコーダー | 12ビット磁気エンコーダー |
| 推奨動作温度範囲 | 0℃～40℃ | 0℃～40℃ |
| 通信方式 | UART | UART |
| 制御方式 | PC | PC |

## 部品表(BOM)

| 部品 | 数量 | 含まれているか|
|--|--|--|
| STS3215 サーボ1 | 12 | ✅ |
| モーター制御ボード | 2 | ✅ |
| USB-Cケーブル 2本 | 1 | ✅ |
| 電源2 | 2 | ✅ |
| テーブルクランプ| 1 | ❌ |
| アームの3Dプリント部品 | 1 | ❌ |

:::caution
3Dプリント部品とテーブルクランプは製品に含まれていません。ただし、SO-100ARMは詳細な[3DプリントSTLファイル](https://github.com/TheRobotStudio/SO-ARM100/tree/main/stl_files_for_3dprinting)と印刷パラメータを提供しています。さらに、[テーブルクランプの3Dプリント部品](https://makerworld.com/zh/models/908660)も提供しています。
:::

## 前提条件

  1. [Lerobot SO100Armの基本的な使用方法チュートリアルに慣れ親しんでください](/lerobot_so100m)。
  2. [チュートリアルに従ってIsaac Simをインストールしてください](https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_workstation.html)
  3. [チュートリアルに従ってROS2のインストールと設定を完了してください](https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_ros.html)

## Lerobot環境のインストール

  **ステップ1. Lerobotプロジェクトをクローンする**

  ```bash
    cd ~/
    git clone https://github.com/ZhuYaoHui1998/lerobot.git
    cd lerobot
  ```

  [Lerobot環境がチュートリアルに従ってインストールされていることを確認してください](/lerobot_so100m)
  
## URDFをIsaac Simにインポートする

  **ステップ1. Isaac Simを開く**

  **Isaac SimがNVIDIAの[公式チュートリアル](https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_workstation.html)に従ってインストールされ、[ROS2がインストールされ、基本的な環境設定が完了している](https://docs.omniverse.nvidia.com/isaacsim/latest/installation/install_ros.html)ことを確認してください。下図に示すパラメータでIsaac Simインターフェースを開きます。**
  <div align="center">
      <img width={600}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/open_isaac_sim.png" />
  </div>

  **ステップ2. URDF Importerを使用する**

  **Isaac SimツールバーでIsaac Utils → Workflows → URDF Importerを開きます**

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/isaacsim_tooltab.png" />
  </div>

  **ステップ3. URDFをインポートする**

  **デフォルトパラメータを保持し、Inputでファイルを参照し、クローンしたLerobotリポジトリから`/lerobot/SO-ARM100/URDF/SO_5DOF_ARM100_8j_URDF.SLDASM/urdf/SO_5DOF_ARM100_8j_URDF.SLDASM.urdf`のURDFをインポートします**

  <div align="center">
      <img width={600}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/urdf_importer.png" />
  </div>

  <div align="center">
      <img width={600}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/urdf_file.png" />
  </div>

  **これで、SO100ロボットアームがIsaac Simにインポートされたことが確認できます。**

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Isaac_sim_import_success.png" />
  </div>

  **ステップ4. Physics要素を追加する**

  **Isaac Simツールバーで、Create → Physicsに移動し、`Physics Scene`と`Ground Plane`の両方を追加して物理環境と地面を設定します。**

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/import_physics.png" />
  </div>

 **ステップ5. `root_joint`の`Articulation Root`を削除する**

  **右側のStageパネルで`root_joint`を見つけます。それをクリックし、下のPropertiesでPhysicsの下にある`Articulation Root`を見つけ、右側の×をクリックしてこのルートを削除します。**
  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/delete_root.png" />
  </div>

 **ステップ6. `root_joint`の`Articulation Root`を追加する**

  **Stageパネルで、SO100をクリックし、右クリックして、Add → Physics → Articulation Rootを選択します。**
  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/add_root.png" />
  </div>

## Action Graphを追加する

  **ステップ1. ツールバーで、Create → Visual Scriptingに移動し、Action Graphを追加します。**

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/add_graph.png" />
  </div>

  **ステップ2. Actionコンポーネントを追加する。**

  **検索ボックスで、順番に追加します：On Playback Tick、Isaac Read Simulation Time、ROS2 Publish Joint State、Articulation Controller、ROS2 Subscribe Joint State。**
  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/add_graph_action.png" />
  </div>

**この部分をより明確に理解するために、ビデオコンテンツに従ってアクション接続と基本パラメータ設定を実行してください。**

<iframe width="900" height="600" src="https://www.youtube.com/embed/buiqdmNQKwY?si=sHjysqfqxPVz-r3T&amp;start=92" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  **ステップ3. 再生**

  **右側のPlayボタンをクリックしてアクションを正常に開始します。この時点で、`ros2 topic list`コマンドを使用してトピック情報を表示します。**
  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/ros2topic.png" />
  </div>

## **ROS2 Pythonによるロボットアーム動作制御**

**これで、ROS2環境で以下のPythonスクリプトを実行してロボットアームを制御できます。スクリプトファイルは`lerobot/lerobot/scripts/`の下に`control_motor.py`と`lerobot_publisher.py`として配置されています。**

**`control_motor.py`では、特定のサーボの角度を個別に送信でき、角度値は-πとπの間の範囲です。**

<details>
<summary>control_motor.py</summary>

  ```python
  import threading

  import rclpy
  from sensor_msgs.msg import JointState

  rclpy.init()
  node = rclpy.create_node('position_velocity_publisher')
  pub = node.create_publisher(JointState, 'joint_command', 10)

  thread = threading.Thread(target=rclpy.spin, args=(node, ), daemon=True)
  thread.start()

  joint_state_position = JointState()

  joint_state_position.name = ["Rotation", "Pitch","Elbow","Wrist_Pitch","Wrist_Roll","Jaw"]

  joint_state_position.position = [0.2,0.2,float('nan'),0.2,0.2,0.2]
  #joint_state_position.position = [0.0,0.0,0.0,0.0,0.0,0.0]

  rate = node.create_rate(10)
  try:
      while rclpy.ok():
          pub.publish(joint_state_position)

          rate.sleep()
  except KeyboardInterrupt:
      pass
  rclpy.shutdown()
  thread.join()
  ```

</details>

**`lerobot_publisher.py` はサーボに対してアクションコマンドを継続的に送信することを実装しています。**

<details>
<summary>lerobot_publisher.py</summary>

  ```python
import rclpy
from rclpy.node import Node
from sensor_msgs.msg import JointState
import numpy as np
import time


class TestROS2Bridge(Node):
    def __init__(self):

        super().__init__("test_ros2bridge")

        # Create the publisher. This publisher will publish a JointState message to the /joint_command topic.
        self.publisher_ = self.create_publisher(JointState, "joint_command", 10)

        # Create a JointState message
        self.joint_state = JointState()

        self.joint_state.name = [
            "Rotation",
            "Pitch",
            "Elbow",
            "Wrist_Pitch",
            "Wrist_Roll",
            "Jaw"
        ]


        num_joints = len(self.joint_state.name)

        # make sure kit's editor is playing for receiving messages
        self.joint_state.position = np.array([0.0] * num_joints, dtype=np.float64).tolist()
        self.default_joints = [0, 0, 0, 0, 0, 0]

        # limiting the movements to a smaller range (this is not the range of the robot, just the range of the movement
        self.max_joints = np.array(self.default_joints) + 0.3
        self.min_joints = np.array(self.default_joints) - 0.3

        # position control the robot to wiggle around each joint
        self.time_start = time.time()

        timer_period = 0.05  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)

    def timer_callback(self):
        self.joint_state.header.stamp = self.get_clock().now().to_msg()

        joint_position = (
            np.sin(time.time() - self.time_start) * (self.max_joints - self.min_joints) * 0.5 + self.default_joints
        )
        self.joint_state.position = joint_position.tolist()

        # Publish the message to the topic
        self.publisher_.publish(self.joint_state)


def main(args=None):
    rclpy.init(args=args)

    ros2_publisher = TestROS2Bridge()

    rclpy.spin(ros2_publisher)

    # Destroy the node explicitly
    ros2_publisher.destroy_node()
    rclpy.shutdown()


if __name__ == "__main__":
    main()
  ```

  </details>

<iframe width="900" height="600" src="https://www.youtube.com/embed/buiqdmNQKwY?si=3CizpKK3Nhj4Vlp9&amp;start=232" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 引用

TheRobotStudio プロジェクト: [SO-ARM100](https://github.com/TheRobotStudio/SO-ARM100)

Huggingface プロジェクト: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
