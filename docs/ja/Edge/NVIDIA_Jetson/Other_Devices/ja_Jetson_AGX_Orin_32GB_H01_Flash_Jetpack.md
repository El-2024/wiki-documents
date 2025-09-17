---
description: NVIDIA® Jetson AGX Orin 32GB H01 Kit に JetPack をフラッシュする
title: NVIDIA® Jetson AGX Orin 32GB H01 Kit
tags:
  - NVIDIA Jetson H01
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack
last_update:
  date: 3/30/2023
  author: Lakshantha
---

<!-- # Flash JetPack to NVIDIA® Jetson AGX Orin 32GB H01 Kit  -->

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/6.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a>
</div>

:::info
2024年11月25日に製品に以下の更新が行われましたのでご注意ください：

1. 5V電源供給方式が変更されました（電源ICがONNCP3020ADR2GからTI TPS53015DGSに交換され、周辺部品も適宜調整されました）。これにより、高動的電流を持つ特定のUSBデバイス使用時のデバイス再起動問題が解決されます。
2. ボードレイアウトが最適化され、ファンケーブル配線に対応するためファンケーブル用スロットが拡大されました。
3. アクセサリ供給を安定化するため、WiFiモジュールモデルが8265.NGWからBL-M8822CP1に変更され、ソフトウェアドライバも適宜更新されました。

:::

このwikiでは、Jetson AGX Orin 32GB H01 KitにJetPackをインストールする方法をガイドします。

## 前提条件

- [Ubuntu Host PC](https://developer.nvidia.com/sdk-manager)（ネイティブまたはVMware Workstation Playerを使用したVM）
- Jetson AGX Xavier H01 Kit
- USB Type-Cデータ転送ケーブル

## Force Recovery Modeに入る

- **ステップ1:** ボード上にリカバリボタンがあります。下の画像に示すように3つのボタンの中央にあります。リカバリボタンを押したまま、ボードを電源に接続してforce recovery modeに入ります。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/4.jpg"/></div>

- **ステップ2:** Jetson AGX Orin 32GB H01 KitをUSB Type-Cデータ転送ケーブルでUbuntu host PCに接続します

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/5.jpg"/></div>

## 周辺機器ドライバのダウンロード

まず最初に、このボード用の周辺機器ドライバをインストールする必要があります。これらはボード上の一部のハードウェア周辺機器が機能するために必要です。JetPackバージョンに応じて、以下のリンクをクリックしてドライバをダウンロードしてください

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>JetPack バージョン</th>
      <th>L4T バージョン</th>
      <th>ドライバダウンロードリンク</th>
      <th>L4T ダウンロードリンク</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>5.0.2</td>
      <td>35.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.0.2/AGX-Orin-32GB-H01-JP5.0.2.zip/download" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r351" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.1.1/AGX-Orin-32GB-H01-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3531" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfdaZCD6wMZPrW_LtMm3eQgBXnPq_8ri8WmKw3nsxXVf1Q?e=uvKRhE" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r363" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbYu41kk-LNNmsssNIuM5AoBLYjTFZo_mEUTUtIJlCCnyw?e=dvCgKk" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3640" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
    <tr>
    <td>6.2</td>
      <td>36.4.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ES6058EFNl1LkrJGAvTYR6IBFTldWYyxJ4ZxQP3EM00BbQ?e=rjshwu" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3643" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
  </tbody>
</table>
</div>

## JetsonへのFlash

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.0.2/JP5.1.1" label="JP5.0.2/JP5.1.1">

ここでは、**NVIDIA L4T 35.1**を使用して**Jetpack 5.0.2**を、または**NVIDIA L4T 35.3.1**を使用して**Jetpack 5.1.1**をJetson AGX Orin 32GB H01 Kitにインストールします。

- **ステップ1:** ホストPCに適切なNVIDIAドライバーをダウンロードします。必要なドライバーは以下の通りです：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

- **ステップ2:** 以前にダウンロードした周辺機器ドライバーを、NVIDIAドライバーと同じフォルダに移動します。これで、同じフォルダに3つの圧縮ファイルが表示されます。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/7.png"/></div>

- **ステップ3:** これらのファイルを含むフォルダに移動して、**Jetson_Linux_R35.1.0_aarch64.tbz2**と**Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2**を展開し、変更を適用します

```sh
cd <directory_where_the_files_are_located>
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_tegra/rootfs
sudo tar xfp ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

- **ステップ4:** **AGX-Orin-32GB-H01-JP5.0.2.zip**を展開します。ここでは、.zipファイルを解凍するために必要な**unzip**パッケージを追加でインストールします

```sh
cd ..
sudo apt install unzip 
unzip AGX-Orin-32GB-H01-JP5.0.2.zip
```

ここで、ファイルを置き換えるかどうかを尋ねられます。**A** を入力し、**ENTER** を押して必要なファイルを置き換えてください

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/3.jpg"/></div>

- **ステップ 5:** システムをeMMCにフラッシュする

```sh
cd Linux_for_Tegra
sudo ./flash.sh jetson‐agx‐orin‐devkit mmcblk0p1
```

フラッシュプロセスが成功した場合、以下の出力が表示されます

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/9.jpg"/></div>

### 発生したエラー

- **Jetpack 5.1.1** の **AGX Orin** および **NX Orin** で **ERROR: failed to read rcm_state**
  - NVidiaによってJetson AGX OrinにPCN変更がありましたが、これはSeeedのPCN変更ではありません。
  - Wikiで言及されている資料に加えて、Jetson Linux 35.3.1ページの下部から[Overlay_PCN210361_PCN210100_r35.3.1.tbz2](https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/overlay_pcn210361_pcn210100_r35.3.1.tbz2)をダウンロードしてください。
  - *Jetson_Linux*を展開した後、バイナリを適用する前に、*Overlay_PCN210361_PCN210100_r35.3.1.tbz2*を展開してください。次に、すべてのファイルとフォルダを*Linux_For_Tegra*にコピーします（スキップではなくマージ）。
  - その後、ガイダンスの残りの手順を続行してください。

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

ここでは**NVIDIA L4T 36.3**を使用してJetson AGX Orin 32GB H01 Kitに**Jetpack 6.0**をインストールします。

- **ステップ 1:** ホストPCに[NVIDIAドライバをダウンロード](https://developer.nvidia.com/embedded/jetson-linux-r363)します。必要なドライバは以下の通りです：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **ステップ 2:** 前にダウンロードした周辺機器ドライバを、NVIDIAドライバと同じフォルダに移動します。これで同じフォルダに3つの圧縮ファイルが表示されます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/files.png"/>
</div>

- **ステップ 3:** これらのファイルを含むフォルダに移動して**Jetson_Linux_R36.3.0_aarch64.tbz2**と**Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2**を展開し、変更を適用します：

```bash
cd < directory_where_the_files_are_located >
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **ステップ 4:** **AGX-Orin-H01-JP6.0.zip** を展開します。ここでは、.zip ファイルを解凍するために必要な **unzip** パッケージを追加でインストールします。

```sh
cd ..
sudo apt install unzip 
sudo unzip AGX-Orin-H01-JP6.0.zip
```

ここで、ファイルを置き換えるかどうかを尋ねられます。**A** を入力して **ENTER** を押し、必要なファイルを置き換えてください

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/extract_drivers.png"/>
</div>

- **ステップ 5:** システムをeMMCにフラッシュする

```sh
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

フラッシュプロセスが成功した場合、以下の出力が表示されます：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

ここでは **NVIDIA L4T 36.4** を使用して、Jetson AGX Orin 32GB H01 Kit に **Jetpack 6.1** をインストールします。

- **ステップ 1:** Ubuntu ホスト PC に NVIDIA ドライバーを[ダウンロード](https://developer.nvidia.com/embedded/jetson-linux-r3640)します。必要なドライバーは以下の通りです：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **ステップ 2:** 前にダウンロードした周辺機器ドライバーを NVIDIA ドライバーと同じフォルダに移動します。これで同じフォルダに 3 つの圧縮ファイルが表示されます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/a605_jp6.1.png"/>
</div>

:::note
以下のコマンドを使用して、ダウンロードしたファイルが完全であることを確認できます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/verify_download_file.webp"/>
</div>
:::

- **ステップ 3:** これらのファイルが含まれているフォルダに移動して、**Jetson_Linux_R36.4.0_aarch64.tbz2** と **Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2** を展開し、変更を適用します：

```bash
cd <path_to_files>
tar xf Jetson_Linux_R36.4.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **Step 4:** Extract **A605_Jetpack_6.1.tar.gz**:

```bash
cd ..
tar xf A605_Jetpack_6.1.tar.gz
sudo cp -r 605_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/
```

- **ステップ 5:** システムをeMMCにフラッシュします：

```bash
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

フラッシュプロセスが成功すると、以下の出力が表示されます：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

:::info
以下のコマンドを実行してSSDにシステムをインストールすることもできます：

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml --showlogs --network usb0 jetson-agx-orin-devkit external
```

:::

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

ここでは **NVIDIA L4T 36.4** を使用して、Jetson AGX Orin 32GB H01 Kit に **Jetpack 6.2** をインストールします。

- **ステップ 1:** Ubuntu ホスト PC に NVIDIA ドライバーを[ダウンロード](https://developer.nvidia.com/embedded/jetson-linux-r3643)します。必要なドライバーは以下の通りです：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **ステップ 2:** 以前にダウンロードした周辺機器ドライバーを NVIDIA ドライバーと同じフォルダに移動します。これで同じフォルダに 3 つの圧縮ファイルが表示されます。

:::info
Jetpack 6.1 のフラッシュプロセスと同様です！
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/a605_jp6.1.png"/>
</div>

:::note
以下のコマンドを使用して、ダウンロードしたファイルが完全であることを確認できます。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/verify_download_file.webp"/>
</div>
:::

- **ステップ 3:** **Jetson_Linux_R36.4.3_aarch64.tbz2** と **Tegra_Linux_Sample-Root-Filesystem_R36.4.3_aarch64.tbz2** を、これらのファイルが含まれているフォルダに移動して展開し、変更を適用します：

```bash
cd <path_to_files>
tar xf Jetson_Linux_R36.4.3_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **Step 4:** Extract **605_jp62.tar.gz**:

```bash
cd ..
tar xf 605_jp62.tar.gz
sudo cp -r 605_jp62/Linux_for_Tegra/* Linux_for_Tegra/
```

- **Step 5:** Flash the system to the eMMC:

```bash
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

フラッシュプロセスが成功すると、以下の出力が表示されます：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

:::info
以下のコマンドを実行してSSDにシステムをインストールすることもできます：

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml --showlogs --network usb0 jetson-agx-orin-devkit external
```

:::

</TabItem>

</Tabs>

## 開発者ツール

### 高速開発とエッジAI統合のためのプリインストールJetpack

[Jetson Software](https://developer.nvidia.com/embedded/develop/software)は、完全な開発環境を提供し、CUDA-X加速ライブラリやその他のNVIDIA技術を含む、開発をスタートさせるためのNVIDIA JetPack™ SDKから始まります。JetPackには、Jetsonプラットフォーム用のLinuxカーネル、ブートローダー、NVIDIAドライバー、フラッシュユーティリティ、サンプルファイルシステム、ツールチェーンを提供するJetson Linux Driverパッケージが含まれています。また、セキュリティ機能、OTA（Over-the-Air）アップデート機能なども含まれています。

### コンピュータビジョンと組み込み機械学習

- [Deepstream](https://developer.nvidia.com/deepstream-sdk)は、Jetson上でのAIベースのマルチセンサー処理、動画・画像理解のための完全なストリーミング分析ツールキットを提供します。
- [TAO](https://developer.nvidia.com/tao-toolkit)は、TensorFlowとPyTorchをベースに構築された、モデル訓練を加速するNVIDIA TAOフレームワークのローコード版です。
- [alwaysAI](https://alwaysai.co/blog/getting-started-with-the-jetson-nano-using-alwaysai): reComputerのエッジで直接コンピュータビジョンアプリケーションを構築、訓練、デプロイできます。100以上の事前訓練済みコンピュータビジョンモデルへの無料アクセスと、エンタープライズサブスクリプションによるクラウドでのカスタムAIモデル訓練が数クリックで可能です。alwaysAIの開始方法については、[wiki](https://wiki.seeedstudio.com/ja/alwaysAI-Jetson-Getting-Started/#object-detection-on-pre-loaded-video-file)ガイドをご確認ください。
- [edge impulse](https://www.edgeimpulse.com/) : クラウドに依存することなく、エッジで音声、分類、物体検出アプリケーションをデプロイするための最も簡単な組み込み機械学習パイプラインです。
- [Roboflow](https://blog.roboflow.com/deploy-to-nvidia-jetson/)は、生画像をカスタム訓練されたコンピュータビジョンモデル（物体検出・分類）に変換し、アプリケーションで使用するためにモデルをデプロイするツールを提供します。RoboflowでNVIDIA Jetsonにデプロイする方法については、https://docs.roboflow.com/inference/nvidia-jetson をご覧ください。
- [ultralytics yolo](https://github.com/ultralytics/yolov5): 非常に少ない訓練サンプルのみを必要とするYOLOv5で転移学習を使用してfew-shot物体検出を実現します。ステップバイステップの[wiki](https://wiki.seeedstudio.com/ja/YOLOv5-Object-Detection-Jetson/)チュートリアルをご覧ください。
- [Deep Learning](https://deci.ai/blog/jetson-machine-learning-inference/): NVIDIA Jetson Nanoでモデルを最適化します。NVIDIA Jetson NanoとXavier NXデバイスでのランタイムパフォーマンスの自動ベンチマークと最適化については、Deciの[こちら](https://info.deci.ai/benchmark-optimize-runtime-performance-nvidia-jetson)をご確認ください。

### 音声AI

- [Riva](https://developer.nvidia.com/riva)は、ユースケースに合わせてカスタマイズされ、リアルタイムパフォーマンスを提供する音声AIアプリケーションを構築するためのGPU加速SDKです。

### リモートフリート管理

[allxon](https://www.allxon.com/)で安全なOTAとリモートデバイス管理を実現します。コードH4U-NMW-CPKで90日間の無料トライアルをご利用いただけます。

### ロボットとROS開発

- NVIDIA Isaac ROS GEMsは、ROS開発者がNVIDIAハードウェア上で高性能ソリューションを構築しやすくするハードウェア加速パッケージです。[NVIDIA Isaac](https://developer.nvidia.com/embedded/develop/software)について詳しく学んでください。
- [Cogniteam Nimbus](https://www.cogniteam.com/nimbus)は、開発者が自律ロボットをより効果的に管理できるクラウドベースのソリューションです。NimbusプラットフォームはNVIDIA® Jetson™とISAAC SDKおよびGEMsを標準でサポートしています。NimbusでROSプロジェクトをクラウドに接続する[ウェビナー](https://www.seeedstudio.com/blog/2022/04/21/webinar-connect-your-ros-project-to-the-cloud-with-nimbus/)をご覧ください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
