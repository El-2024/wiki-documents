---
description: このwikiは、LekiwiとLerobotフレームワーク内でのデータ収集とトレーニングを実現するための組み立てとデバッグのチュートリアルを提供します。
title: LerobotでLekiwiを使用する方法
keywords:
- Lerobot
- Huggingface
- Car
- Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/lekiwi_cad_v1.webp
slug: /ja/lerobot_lekiwi
last_update:
  date: 8/8/2025
  author: LiShanghang
---

# LerobotでLekiwiを使用する方法

:::tip

このチュートリアルリポジトリは、2025年6月5日時点で検証済みの安定版Lerobotを維持しています。現在、​Hugging Face​はLerobotの​メジャーアップグレード​をリリースし、多くの新機能を導入しています。最新のチュートリアルを体験したい場合は、[​公式ドキュメント​のガイダンス](https://huggingface.co/docs/lerobot/index)に従ってください。

:::

## 概要

[Lekiwi](https://github.com/SIGRobotics-UIUC/LeKiwi)は、[SIGRobotics-UIUC](https://github.com/SIGRobotics-UIUC)によって開始された完全オープンソースのロボットカープロジェクトです。詳細な3Dプリントファイルと操作ガイドが含まれており、[LeRobot](https://github.com/huggingface/lerobot/tree/main)模倣学習フレームワークとの互換性を持つように設計されています。SO101ロボットアームをサポートして、完全な模倣学習パイプラインを実現します。

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/lekiwi_cad_v1.png" />
  </div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a></div>

## 主な特徴

1. **オープンソースで低コスト**: [Lekiwi](https://github.com/SIGRobotics-UIUC/LeKiwi)からのオープンソース、低コストのロボットカーソリューションです
2. **LeRobotとの統合**: [LeRobotプラットフォーム](https://github.com/huggingface/lerobot)との統合を目的として設計されています
3. **豊富な学習リソース**: 組み立てと校正ガイド、テスト、データ収集、トレーニング、デプロイメントのチュートリアルなど、包括的なオープンソース学習リソースを提供し、ユーザーが迅速に開始してロボットアプリケーションを開発できるよう支援します。
4. **Nvidiaとの互換性**: このアームキットをreComputer Mini J4012 Orin NX 16 GBでデプロイします。
5. **マルチシーンアプリケーション**: 教育、科学研究、自動化生産、ロボット工学などの分野に適用可能で、ユーザーが様々な複雑なタスクで効率的で精密なロボット操作を実現するのに役立ちます。

:::caution

Seeed Studioはハードウェア自体の品質についてのみ責任を負います。チュートリアルは公式ドキュメントに厳密に従って更新されます。解決できないソフトウェアの問題や環境依存の問題に遭遇した場合は、[LeRobotプラットフォーム](https://github.com/huggingface/lerobot)または[LeRobot Discordチャンネル](https://discord.gg/8TnwDdjFGU)に速やかに問題を報告してください。
:::

:::danger

- LeKiwiシャーシのすべてのサーボモーターには12V電源が必要です。5Vロボットアームをお持ちのユーザーには、12V-5V降圧コンバーターモジュールを提供します。回路の改造が必要になることにご注意ください。

- 12V電源 - 必要に応じてチェックアウト時にこのオプションを選択できます。すでに12V電源をお持ちの場合は、このオプションをスキップして、電源の出力コネクタを5521 DCプラグに変換するだけで済みます。

- Raspberry Piコントローラーとカメラ - これらは注文インターフェースを通じて別途購入する必要があります。

:::

## 仕様

| タイプ | Lekiwi |
|--|--|
|  サーボモーター | 3x 12v STS3215 1:345 ギア比|
| 電源 | 12V DCまたはバッテリー |
| 角度センサー| 12ビット磁気エンコーダー |
| 推奨動作温度範囲 | 0℃～40℃ |
| 通信方式| UART |
| 制御方式 | PC |

## 部品表(BOM)

| 部品 | 数量 | 含まれる|
|--|--|--|
| STS3215 1:345 12V サーボモーター | 3 | ✅ |
| 全方向ホイール/ユニバーサルホイール | 3 | ✅ |
| Lekiwi 3Dプリント筐体 | 1 | ✅ |
| DC-DC降圧電源モジュール - 24V/12V to 5V | 1 | ✅ |
| モーター制御基板 | 1 | ✅ |
| DCオス to デュアルDCオス 5521 Yケーブル | 1 | ✅ |
| USBケーブル;Type C 2.0 to Type C 2.0-ブラック;L150mm| 1 | ✅ |
| USB 3.1 Type C to A ケーブル 0.5メートル | 1 | ✅ |
| プラグ電源アダプター;ブラック-12V-2A AC/DC | 1 | ✅ |
| M2 M3 M4 各種ネジ | 十分な量 | ✅ |
| Raspberry pi | 1 | オプション |
| USBカメラ | 1 | オプション |
| 深度カメラ | 2 | オプション |
| SO-ARM101 Pro | 1 | オプション |
| 12V大容量リチウムイオンバッテリーパック E326S| 1 | オプション |

## 初期システム環境

**Ubuntu x86の場合:**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6  

**Jetson Orinの場合:**

- Jetson JetPack 6.0+
- Python 3.10  
- Torch 2.6  

**Raspberry Piの場合:**

- Raspberry Pi5 4G~16G

## 3Dプリンティングガイド

### パーツ

以下の3Dプリント部品用のプリント可能なSTLファイルを提供しています。これらは一般的なPLAフィラメントを使用して、コンシューマーグレードのFDMプリンターで印刷できます。Bambu Lab P1Sプリンターでテストしました。すべてのコンポーネントについて、bambuslicer に読み込み、自動回転と自動配置を行い、推奨されるサポートを有効にして印刷するだけです。

| アイテム | 数量 | 備考 |
|:---|:---:|:---:|
| [ベースプレート上部](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_plate_layer2.stl) | 1 | |
| [ベースプレート下部](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_plate_layer1.stl) | 1 | |
| [駆動モーターマウント](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/drive_motor_mount_v2.stl) | 3 | |
| [サーボホイールハブ](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/servo_wheel_hub.stl) | 3 | サポートを使用|
| [RasPiケース上部](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/pi_case_top.stl) | 1 | 2|
| [RasPiケース下部](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/pi_case_bottom.stl) | 1 | |
| Arducam [ベースマウント](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_camera_mount.stl) と [リストマウント](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/wrist_camera_mount.stl)| 1 | **[このカメラ](https://www.amazon.com/Arducam-Camera-Computer-Without-Microphone/dp/B0972KK7BC)と互換性あり** |
| Webカメラ [ベースマウント](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/webcam_mount.stl)、[グリッパーインサート](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/so100_gripper_cam_mount_insert.stl)、および [リストマウント](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/webcam_mount_wrist.stl) | 1 | **[このカメラ](https://www.amazon.fr/Vinmooog-equipement-Microphone-Enregistrement-conférences/dp/B0BG1YJWFN/)と互換性あり** |

### 印刷パラメータ

提供されているSTLファイルは、多くのFDMプリンターで印刷できる状態になっています。以下はテスト済みで推奨される設定ですが、他の設定でも動作する可能性があります。

- 材料: PLA+
- ノズル径と精度: 0.2mmノズル径、0.2mmレイヤー高さ
- インフィル密度: 15%  
- 印刷速度: 150 mm/s
- 必要に応じて、Gコード（スライスファイル）をプリンターにアップロードして印刷してください

## LeRobotのインストール

Raspberry Pi上で：

### 1. [Minicondaのインストール](https://docs.anaconda.com/miniconda/install/#quick-command-line-install)

```bash
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
```

### 2. シェルを再起動

シェルに以下をコピー＆ペーストしてください：`source ~/.bashrc` または Mac の場合：`source ~/.bash_profile` または zshell を使用している場合は `source ~/.zshrc`

### 3. lerobot 用の新しい conda 環境を作成してアクティベート

```bash
conda create -y -n lerobot python=3.10
```

次に、conda環境をアクティベートします（lerobotを使用するためにシェルを開くたびにこれを実行してください！）：

```bash
conda activate lerobot
```

### 4. LeRobotをクローンする

```bash
git clone https://github.com/huggingface/lerobot.git ~/lerobot
```

### 5. 環境にffmpegをインストールする

`miniconda`を使用する場合、環境に`ffmpeg`をインストールします：

```bash
conda install ffmpeg -c conda-forge
```

### 6. feetechモーター用の依存関係を含むLeRobotをインストール

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

## ラップトップ（PC）にLeRobotをインストール

すでにラップトップにLeRobotをインストールしている場合は、このステップをスキップできます。そうでない場合は、Piで行ったのと同じ手順に従ってください。

:::tip
コマンドプロンプト（cmd）をよく使用します。cmdの使用に慣れていない場合や、コマンドラインの使用方法を復習したい場合は、こちらを参照してください：[Command line crash course](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)
:::

お使いのコンピューターで：

### 1. [Minicondaをインストール](https://docs.anaconda.com/miniconda/install/#quick-command-line-install)

### 2. シェルを再起動

シェルに以下をコピー＆ペースト：`source ~/.bashrc` またはMacの場合：`source ~/.bash_profile` またはzshellを使用している場合は `source ~/.zshrc`

### 3. lerobot用の新しいconda環境を作成してアクティベート

```bash
conda create -y -n lerobot python=3.10
```

次に、conda環境をアクティベートします（lerobotを使用するためにシェルを開くたびにこれを実行してください！）：

```bash
conda activate lerobot
```

### 4. LeRobotをクローンする

```bash
git clone https://github.com/ZhuYaoHui1998/lerobot ~/lerobot
```

### 5. 環境にffmpegをインストールする

`miniconda`を使用する場合、環境に`ffmpeg`をインストールします：

```bash
conda install ffmpeg -c conda-forge
```

### 6. feetechモーター用の依存関係を含むLeRobotをインストール

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

## 組み立て

<details>
<summary>Lekiwiを組み立てる</summary>

### ビデオチュートリアル

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/_QjhOMSnobU?si=xjhfCztoWZcFwW6j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/62_JWFpvJyA?si=0YCwKUJgy0YVL-A0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/r0LtrTidWdA?si=MEdIJ5XzI8-wbpDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/qk1iYHW-0qg?si=0zXmcVIkBXJcf1M5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/RYu7WLpi7jw?si=Tjc5_4-WLE2xyNWr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/q7zp4qIFdnM?si=fIYgI_3xbrWL7wUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 以下は写真チュートリアルです

公式の[組み立てチュートリアル](https://github.com/SIGRobotics-UIUC/LeKiwi)を参照できます。

印刷されたパーツを受け取ったら、すべての印刷コンポーネントは以下のようになります。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/1.jpg" />
</div>

**A. 12本のm2x6タップスクリューを使用して、駆動モーターをモーターマウントに取り付けます。**

| **ステップ1** | **ステップ2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/2.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/3.jpg) |

**B. 12本のm3x16機械ネジを使用して、ドライブモーターマウントをボトムベースプレートにネジ止めします。**

:::tip
ID配置を覚えておいてください：8は後輪を表し、7と9はそれぞれ左前輪と右前輪に対応します。
:::

| **ステップ 1** | **ステップ 2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/4.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/5.jpg) |

**C. ホイールハブをオムニホイールに取り付けます。**

**ステップ1とステップ2**：3本のネジを取り外します。

| **ステップ 1** | **ステップ 2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/7.jpg) |

**ステップ3とステップ4**: 9本のm4x18機械ねじを使用して、ホイールハブをオムニホイールに取り付けます。

| **ステップ3** | **ステップ4** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/8.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/9.jpg) |

**D. 6本のm3x16機械ねじを使用して、サーボホーンをホイールハブに取り付けます。**

| **ステップ1** | **ステップ2** |**ステップ3** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/10.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/11.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/12.jpg) |

**E. 3本のm3x10機械ねじを使用して、サーボホーンをドライブモーターに取り付けます。**

| **Step 1** | **Step 2** |**Step 3** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/15.jpg) |

**H. サーボドライバーを追加し、すべての回路を接続します。**

| **Step 1** | **Step 2** |**Step 3** |**Step 4** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/16.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/17.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/18.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/19.jpg) |

| **Step 5** | **Step 6** |**Step 7** |**Step 8** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/20.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/20-1.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/21.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/22.jpg) |

**Power IN** は電源に直接接続します（Step8と同様）。一方、**USB-C** ポートはRaspberry Piに5V電源を供給します。

追加の **2ピン端子（5V & 12V）** については：

- **7.4V SO10x ロボットアーム** を使用する場合は、**5V出力** から **サーボモーターボード** に電源を供給します。
- **12V ロボットアーム** を使用する場合は、Step 8のように **DC電源スプリッター** から直接 **サーボモーターボード** に電源を供給します。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/23.jpg" />
</div>

**I. これで、Raspberry Piを車両の2層目トッププレートに取り付けることができます。取り付ける前に、**USB-C電源ケーブル** と **USB-Cサーボモーター通信ケーブル** の両方を接続し、車両のトップパネルから外に配線してください。**

**Step 1** 電源ケーブルをRaspberry Piに接続し、トップパネルの中央開口部を通して配線します。

|  |  |  |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/24.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/25.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/26.jpg) |

**ステップ2** シャーシの3つのサーボモーターのうち、1つのサーボには1本のケーブルのみが接続されています。SO10xロボットアームを取り付ける必要がある場合は、以下の手順を実行してください：ロボットアームからID1ケーブルを取り外します。それをシャーシモーターに接続します。予備ケーブルとしてトップパネルを通して配線します

|  | | |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/27.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/28.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/29.jpg) |

**Step 3** これで、サーボドライバーボードからのUSB-CをRaspberry PiのUSBポートに接続できます。

|  | |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/30.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/31.jpg) |

**J. 次に、12本のM3×16ネジを使用してRaspberry Piとトッププレートの残りの部品を固定する必要があります。**

|  |  |  |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/32.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/33.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/34.jpg) |

**K. これで、1本のM3x16ネジと4本のM5×25ネジを使用してUSBカメラとFollower Armを取り付けることができます**

|  |  |  |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/35.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/36.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/37.jpg) |
| ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/29.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/38.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/39.jpg) |

そして、サーボ制御ケーブルとUSBカメラの両方がRaspberry Piに接続されていることを確認してください。

|  |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/31.jpg) |

</details>

:::tip
回路接続を確認してください。組み立て後、LekiwiはRaspberry Pi / Jetsonに接続されている必要があります。リーダーアームはPCに接続されている必要があります。

| Lekiwi --> Raspberry Pi / Jetson |

| リーダーアーム --> PC                |
:::

## モーターを設定する

### リーダーアーム

各バスサーボアダプターのポートを見つけるには、このスクリプトを実行してください：

```bash
python -m lerobot.find_port
```

出力例：

```bash
Finding all available ports for the MotorBus.
['/dev/tty.usbmodem575E0032081']
Remove the USB cable from your MotorsBus and press Enter when done.

[...Disconnect corresponding leader or follower arm and press Enter...]

The port of this MotorsBus is /dev/tty.usbmodem575E0032081
Reconnect the USB cable.
```

ポートを識別する際の出力例（例：Macでは `/dev/tty.usbmodem575E0031751`、Linuxでは `/dev/ttyACM0` の可能性があります）：

ポートを識別する際の出力例（例：`/dev/tty.usbmodem575E0032081`、またはLinuxでは `/dev/ttyACM1` の可能性があります）：

:::tip

```bash
Finding all available ports for the MotorBus.
['/dev/tty.usbmodem575E0032081']
Remove the USB cable from your MotorsBus and press Enter when done.
```

USBを取り外してからEnterキーを押してください。そうしないとインターフェースが検出されません。
:::

トラブルシューティング：Linuxでは、以下を実行してUSBポートへのアクセス権を付与する必要がある場合があります：

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

コンピューターからリーダーアームのコントローラーボードにUSBケーブルと電源を接続します。その後、以下のコマンドを実行するか、前のステップで取得したポートでAPIの例を実行してください。また、`id`パラメータでリーダーアームに名前を付ける必要があります。

```bash
python -m lerobot.setup_motors \
    --teleop.type=so101_leader \
    --teleop.port=/dev/tty.usbmodem575E0031751  # <- paste here the port found at previous step
```

以下の指示が表示されるはずです。

```bash
Connect the controller board to the 'gripper' motor only and press enter.
```

指示に従って、グリッパーのモーターを接続してください。ボードに接続されているモーターがそのモーターのみであること、そしてそのモーター自体がまだ他のモーターにデイジーチェーン接続されていないことを確認してください。[Enter]を押すと、スクリプトが自動的にそのモーターのIDとボーレートを設定します。

その後、以下のメッセージが表示されるはずです：

```bash
'gripper' motor id set to 6
```

次の指示に従ってください：

```bash
Connect the controller board to the 'wrist_roll' motor only and press enter.
```

コントローラーボードから3ピンケーブルを取り外すことができますが、もう一方の端のグリッパーモーターには接続したままにしておくことができます。すでに正しい位置にあるためです。次に、別の3ピンケーブルを手首回転モーターに接続し、コントローラーボードに接続します。前のモーターと同様に、ボードに接続されているモーターがそのモーターのみであり、モーター自体が他のモーターに接続されていないことを確認してください。

:::caution
指示に従って各モーターに対してこの操作を繰り返してください。
:::

Enterキーを押す前に、各ステップでケーブル接続を確認してください。例えば、ボードを操作する際に電源ケーブルが外れる可能性があります。

完了すると、スクリプトは単純に終了し、この時点でモーターが使用可能になります。これで、各モーターから次のモーターへ3ピンケーブルを接続し、最初のモーター（id=1の「ショルダーパン」）からコントローラーボードへケーブルを接続できます。コントローラーボードはアームのベースに取り付けることができます。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/hbW6eFYkHTg?si=jKdpTyI8wRC-iHxO" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Lekiwi

正しいUSBを見つけてモーターをセットアップするために、前のコマンドに従ってください。

モーターの設定手順は、SO101の[ドキュメント](https://huggingface.co/docs/lerobot/so101#configure-the-motors)（リーダーアームと同じ）で確認できます。アームモーターのIDに加えて、モバイルベースのモーターIDも設定する必要があります。これらは動作するために特定の順序である必要があります。以下は、モバイルベースのモーターIDとモーター取り付け位置の画像です。LeKiwiでは1つのモーター制御ボードのみを使用することに注意してください。これは、ホイールのモーターIDが7、8、9であることを意味します。

このコマンドを実行してLeKiwiのモーターをセットアップできます。最初にアーム用のモーター（id 6..1）をセットアップし、次にホイール用のモーター（9,8,7）をセットアップします。

```bash
python -m lerobot.setup_motors \
    --robot.type=lekiwi \
    --robot.port=/dev/tty.usbmodem58760431551 # <- paste here the port found at previous step
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/motor_ids.png" />
</div>

## キャリブレーション

次に、リーダーアームとフォロワーアームをキャリブレーションする必要があります。ホイールモーターはキャリブレーションする必要がありません。キャリブレーションプロセスは非常に重要です。なぜなら、1つのロボットで訓練されたニューラルネットワークが別のロボットでも動作するようになるからです。

### フォロワーアーム（モバイルベース上）のキャリブレーション

アームがRaspberry Piに接続されていることを確認し、このスクリプトまたはAPIの例を実行して（SSH経由でRaspberry Pi上で）フォロワーアームのキャリブレーションを開始します：

```bash
python -m lerobot.calibrate \
    --robot.type=lekiwi \
    --robot.id=my_awesome_kiwi # <- Give the robot a unique name
```

ほとんどのロボットでキャリブレーション方法を統一したため、このSO100アームのキャリブレーション手順は、KochやSO101の手順と同じです。まず、各関節がその可動範囲の中央にある位置にロボットを移動させ、次に`Enter`を押します。次に、すべての関節を可動範囲全体にわたって動かします。SO101での同じプロセスの参考動画は[こちら](https://huggingface.co/docs/lerobot/en/so101#calibration-video)で見ることができます。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/22n6f5xH9Dk?si=2QTzn1CDbsSv6Y_H" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 有線版

有線のLeKiwiバージョンをお持ちの場合は、ラップトップですべてのコマンドを実行してください。

### リーダーアームのキャリブレーション

次に、リーダーアーム（ラップトップ/PCに接続されている）をキャリブレートします。ラップトップで以下のAPIサンプルコマンドを実行してください：

```bash
python -m lerobot.calibrate \
    --teleop.type=so100_leader \
    --teleop.port=/dev/tty.usbmodem58760431551 \ # <- The port of your robot
    --teleop.id=my_awesome_leader_arm # <- Give the robot a unique name
```

## LeKiwiの遠隔操作

:::tip
Macを使用している場合、ターミナルにキーボードへのアクセス許可を与える必要があるかもしれません。システム環境設定 > セキュリティとプライバシー > 入力監視に移動し、ターミナルのチェックボックスにチェックを入れてください。
:::

遠隔操作するには、Raspberry PiにSSHで接続し、`conda activate lerobot`を実行してから、このスクリプトを実行してください：

```bash
python -m lerobot.robots.lekiwi.lekiwi_host --robot.id=my_awesome_kiwi
```

ノートパソコンでも `conda activate lerobot` を実行し、API サンプルを実行してください。`examples/lekiwi/teleoperate.py` で正しい `remote_ip` と `port` を設定することを確認してください。

<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/teleoperate.png" />
</div>

```bash
python examples/lekiwi/teleoperate.py
```

ラップトップで次のようなメッセージが表示されるはずです：```[INFO] Connected to remote robot at tcp://172.17.133.91:5555 and video stream at tcp://172.17.133.91:5556.``` これで、リーダーアームを動かし、キーボード（w,a,s,d）を使って前進、左、後退、右に移動できます。また、（z,x）を使って左右に回転できます。（r,f）を使ってモバイルロボットの速度を上げたり下げたりできます。3つの速度モードがあります。下の表を参照してください：

| Speed Mode | Linear Speed (m/s) | Rotation Speed (deg/s) |
| ---------- | ------------------ | ---------------------- |
| Fast       | 0.4                | 90                     |
| Medium     | 0.25               | 60                     |
| Slow       | 0.1                | 30                     |

| Key | Action         |
| --- | -------------- |
| W   | 前進           |
| A   | 左移動         |
| S   | 後退           |
| D   | 右移動         |
| Z   | 左回転         |
| X   | 右回転         |
| R   | 速度を上げる   |
| F   | 速度を下げる   |

:::tip
異なるキーボードを使用している場合は、`LeKiwiRobotConfig`で各コマンドのキーを変更できます。
:::

### 有線版

**有線**のLeKiwi版をお持ちの場合は、これらのテレオペレーションコマンドを含むすべてのコマンドをラップトップで実行してください。

## 通信のトラブルシューティング

Mobile SO100への接続に問題がある場合は、以下の手順に従って問題を診断し、解決してください。

### 1. IPアドレス設定の確認

設定ファイルにPi用の正しいIPが設定されていることを確認してください。Raspberry PiのIPアドレスを確認するには、（Piのコマンドラインで）以下を実行します：

```bash
hostname -I
```

### 2. Check if Pi is reachable from laptop/pc

Try pinging the Raspberry Pi from your laptop:

```bach
ping <your_pi_ip_address>
```

pingが失敗した場合：

- Piの電源が入っており、同じネットワークに接続されていることを確認してください。
- PiでSSHが有効になっているかを確認してください。

### 3. SSH接続を試す

PiにSSH接続できない場合、適切に接続されていない可能性があります。以下を使用してください：

```bash
ssh <your_pi_user_name>@<your_pi_ip_address>
```

接続エラーが発生した場合：

- 以下を実行してPiでSSHが有効になっていることを確認してください：

  ```bash
  sudo raspi-config
  ```

  次に移動します：**Interfacing Options -> SSH** を選択して有効にします。

### 4. 同じ設定ファイル

ラップトップ/PCとRaspberry Piの両方で設定ファイルが同じであることを確認してください。

## データセットの記録

テレオペレーションに慣れたら、LeKiwiで最初のデータセットを記録できます。

データセットのアップロードにはHugging Face hubの機能を使用します。以前にHubを使用したことがない場合は、書き込みアクセストークンを使用してCLI経由でログインできることを確認してください。このトークンは[Hugging Face設定](https://huggingface.co/settings/tokens)から生成できます。

次のコマンドを実行してトークンをCLIに追加します：

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

次に、Hugging Faceリポジトリ名を変数に保存します：

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

これで、データセットを記録できます。エピソードを記録してデータセットをハブにアップロードするには、LeKiwi用にカスタマイズされたこのAPIサンプルを実行してください。まず、スクリプト内の`remote_ip`、`repo_id`、`port`、`task`を適応させることを確認してください。スクリプトをより長時間実行したい場合は、`NB_CYCLES_CLIENT_CONNECTION`を増やすことができます。

<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/record.png" />
</div>

```bash
python examples/lekiwi/record.py
```

データセットのアップロード

ローカルでは、データセットはこのフォルダに保存されます：`~/.cache/huggingface/lerobot/{repo-id}`。データ記録の終了時に、データセットはあなたのHugging Faceページ（例：https://huggingface.co/datasets/cadene/so101_test）にアップロードされます。このページは以下を実行することで取得できます：

```bash
echo https://huggingface.co/datasets/${HF_USER}/so101_test
```

あなたのデータセットは、コミュニティが簡単に見つけられるように自動的に `LeRobot` でタグ付けされ、カスタムタグ（この場合は例として `tutorial`）も追加できます。

ハブ上の他のLeRobotデータセットは、`LeRobot` [タグ](https://huggingface.co/datasets?other=LeRobot)で検索することで見つけることができます。

:::tip

### データ収集のコツ

データ記録に慣れたら、トレーニング用により大きなデータセットを作成できます。良い開始タスクは、異なる場所でオブジェクトを掴み、ビンに置くことです。少なくとも50エピソード、場所ごとに10エピソードを記録することをお勧めします。カメラを固定し、記録全体を通して一貫した掴み動作を維持してください。また、操作しているオブジェクトがカメラに映っていることを確認してください。良い経験則は、カメラ画像だけを見てタスクを自分で実行できることです。

以下のセクションでは、ニューラルネットワークをトレーニングします。信頼性の高い掴み性能を達成した後、追加の掴み場所、異なる掴み技術、カメラ位置の変更など、データ収集中により多くのバリエーションを導入し始めることができます。

結果に悪影響を与える可能性があるため、あまりにも早く多くのバリエーションを追加することは避けてください。

この重要なトピックについてより深く掘り下げたい場合は、良いデータセットとは何かについて書いた[ブログ](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset)[投稿](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset)をチェックできます。

### トラブルシューティング

Linuxで、データ記録中に左右の矢印キーとエスケープキーが効果がない場合は、`$DISPLAY` 環境変数が設定されていることを確認してください。[pynputの制限事項](https://pynput.readthedocs.io/en/latest/limitations.html#linux)を参照してください。

:::

### 有線版

**有線**のLeKiwiバージョンをお持ちの場合は、これらのレコードデータセットコマンドを含むすべてのコマンドをラップトップで実行してください。

## データセットの可視化

`--dataset.push_to_hub=true` でデータセットをハブにアップロードした場合、以下で与えられるリポジトリIDをコピー＆ペーストして[データセットをオンラインで可視化](https://huggingface.co/spaces/lerobot/visualize_dataset)できます：

```bash
echo ${HF_USER}/lekiwi_test
```

`--dataset.push_to_hub=false` でアップロードしなかった場合、以下のコマンドでローカルでも可視化できます（ブラウザで `http://127.0.0.1:9090` のウィンドウが開き、可視化ツールが表示されます）：

```bash
python -m lerobot.scripts.visualize_dataset_html \
  --repo-id ${HF_USER}/lekiwi_test \# <-change to your repo-id
  --local-files-only 1
```

## エピソードの再生

エピソードを再生するには、以下のAPIサンプルを実行してください。`remote_ip`、`port`、LeRobotDatasetId、およびエピソードインデックスを必ず変更してください。ファイルは`examples/lekiwi/replay.py`のパスにあります。

<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/Replay an episode.png" />
</div>

以下のコマンドを実行してください：

```bash
python examples/lekiwi/replay.py
```

## ポリシーの訓練

ロボットを制御するポリシーを訓練するには、`python lerobot/scripts/train.py` スクリプトを使用します。いくつかの引数が必要です。以下はコマンドの例です：

```bash
python lerobot/scripts/train.py \
  --dataset.repo_id=${HF_USER}/lekiwi_test \
  --policy.type=act \
  --output_dir=outputs/train/act_lekiwi_test \
  --job_name=act_lekiwi_test \
  --policy.device=cuda \
  --wandb.enable=true # You can choose false if you don't need wandb
```

説明しましょう：

1. `--dataset.repo_id=${HF_USER}/lekiwi_test` でデータセットを引数として提供しました。
2. `policy.type=act` でポリシーを提供しました。これにより `configuration_act.py` から設定が読み込まれます。重要なことに、このポリシーはあなたのロボットのモーター状態数、モーターアクション数、カメラ数（例：`laptop` と `phone`）に自動的に適応し、これらはデータセットに保存されています。
4. Nvidia GPU でトレーニングを行うため `policy.device=cuda` を提供しましたが、Apple silicon でトレーニングする場合は `policy.device=mps` を使用できます。
5. トレーニングプロットの可視化に [Weights and Biases](https://docs.wandb.ai/quickstart) を使用するため `wandb.enable=true` を提供しました。これはオプションですが、使用する場合は `wandb login` を実行してログインしていることを確認してください。

トレーニングには数時間かかります。チェックポイントは `outputs/train/act_lekiwi_test/checkpoints` に保存されます。

## ポリシーの評価

ポリシーを評価するには、`evaluate.py` API サンプルを実行してください。`remote_ip`、`port`、model などを変更することを忘れないでください。

パスは `examples/lekiwi/evaluate.py` です。
<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/evaluation.png" />
</div>

```bash
python examples/lekiwi/evaluate.py
```

ご覧のとおり、これは以前にトレーニングデータセットを記録するために使用したコマンドとほぼ同じです。2つの点が変更されました：

1. 追加の `policy` 引数があり、これはポリシーチェックポイントへのパスを示します（例：`outputs/train/eval_act_lekiwi_test/checkpoints/last/pretrained_model`）。モデルチェックポイントをハブにアップロードした場合は、モデルリポジトリも使用できます（例：`${HF_USER}/act_lekiwi_test`）。
2. データセット名は推論を実行していることを反映するために `eval` で始まります（例：`${HF_USER}/eval_act_lekiwi_test`）。

## ヘルプ 🙋‍

ハードウェアの問題については、カスタマーサービスにお問い合わせください。使用方法に関する質問については、Discordにご参加ください。

[LeRobotプラットフォーム](https://github.com/huggingface/lerobot)

[LeRobot Discordチャンネル](https://discord.gg/8TnwDdjFGU)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
