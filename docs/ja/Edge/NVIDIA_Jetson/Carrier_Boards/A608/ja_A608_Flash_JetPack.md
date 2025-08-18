---
description: この記事では、NVIDIA Jetson Orin NX/NanoモジュールをサポートするA608キャリアボードにJetPackオペレーティングシステムをフラッシュする方法についての詳細なガイドを提供します。必要条件、フォースリカバリーモードへの移行、システムイメージとドライバのダウンロード、NVMe SSD、USBフラッシュドライブ、またはSDカードへのOSフラッシュまで、システムインストールと起動を成功させるための手順を網羅しています。
title: A608キャリアボード
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608CB.webp
slug: /ja/reComputer_A608_Flash_System
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# JetPack OSをA608キャリアボードにフラッシュする (NVIDIA Jetson Orin NX/Nano対応)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608CB.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Jetson-A608-Carrier-Board-for-Orin-NX-Orin-Nano-Series-p-5853.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

このWikiでは、NVIDIA Jetson Orin NXモジュールおよびNVIDIA Jetson Orin Nanoモジュールの両方をサポートするA608キャリアボードに接続されたNVMe SSDおよびUSBフラッシュドライブにJetPackをフラッシュする方法を説明します。

## 必要条件

- UbuntuホストPC
- Jetson Orin NXまたはJetson Orin Nanoモジュールを搭載したA608キャリアボード
- USB Type-Cデータ転送ケーブル

:::info
物理的なUbuntuホストデバイスを使用することを推奨します。仮想マシンの使用は避けてください。
以下の表を参照してホストマシンを準備してください。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPackバージョン </td>
        <td class="dbon" colspan="3"> Ubuntuバージョン (ホストコンピュータ) </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
    </tr>
    <tr>
        <td >JetPack 5.x</td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

:::

## フォースリカバリーモードに入る

インストール手順に進む前に、ボードがフォースリカバリーモードにあることを確認する必要があります。

**ステップ1.** システムの電源をオフにします。スタンバイモードではなく、完全に電源をオフにしてください。

**ステップ2.** Type-CからUSB Type-Aケーブルを使用してキャリアボードとホストを接続します。

**ステップ3.** GH1.25MMロッキング端子ワイヤーを使用して、Recoveryのピン1とピン2を短絡させ、リカバリーモードに入ります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/hardware_connection.png" /></div>

**ステップ4.** デバイスの電源を入れます。

**ステップ5.** LinuxホストPCでターミナルウィンドウを開き、コマンド`lsusb`を入力します。使用しているJetson SoMに応じて、以下のいずれかの出力が表示されれば、ボードはフォースリカバリーモードにあります。

- Orin NX 16GBの場合: **0955:7323 NVidia Corp**
- Orin NX 8GBの場合: **0955:7423 NVidia Corp**
- Orin Nano 8GBの場合: **0955:7523 NVidia Corp**
- Orin Nano 4GBの場合: **0955:7623 NVidia Corp**

以下の画像はOrin NX 8GBの場合です。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/lsusb.png" /></div>

**ステップ6.** 短絡ワイヤーを取り外します。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.1" label="JP5.1.1">

ここでは、NVIDIA L4T 35.3.1を使用して、A608キャリアボードにJetPack 5.1.1をインストールします。

**ステップ1.** ホストPCにNVIDIAドライバを[ダウンロード](https://developer.nvidia.com/embedded/jetson-linux-r3531)します。必要なドライバは以下の通りです。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/nvidia_driver.png" /></div>

**ステップ2.** 周辺機器ドライバを[ダウンロード](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZ5nv2iWBQlIvPq7_aTQiucBp_HUwDmFNgkBMR04SI_teg?e=wseTuy)し、すべてのドライバを同じフォルダに配置します。

同じフォルダ内に以下の3つの圧縮ファイルが表示されます。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/drivers.png" /></div>

**ステップ3.** システムイメージを準備します。

ホストPCでターミナルウィンドウを開き、以下のコマンドを実行します：

```bash
cd <path to drivers>
sudo apt install unzip 
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
cd ..
unzip 608_jp511.zip
cp -r ./608_jp511/Linux_for_Tegra/* ./Linux_for_Tegra/
```

**ステップ4.** A608にシステムをフラッシュします。

- NVMeにフラッシュ
  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```
- USBにフラッシュ
  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```
- SDにフラッシュ
  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device mmcblk1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

フラッシュプロセスが成功すると、以下のような出力が表示されます。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/flash.png" /></div>

フラッシュ後、Jetsonデバイスの電源を再投入し、システムにログインします。
</TabItem>
<TabItem value="JP5.1.2" label="JP5.1.2">

ここでは、NVIDIA L4T 35.4.1 を使用して、Jetson Orin NX モジュールを搭載した A608 キャリアボードに Jetpack 5.1.2 をインストールします。

**ステップ 1.** [NVIDIA ドライバー](https://developer.nvidia.com/embedded/jetson-linux-r3541)をホスト PC にダウンロードします。必要なドライバーは以下の通りです：
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P1.png" /></div>

**ステップ 2.** [周辺機器ドライバー](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZcvwwGTgLBBq_M_pAa2tmEB-pZmFQraF9v9JcdiqcRbLA?e=Px98MO)をダウンロードし、すべてのドライバーを同じフォルダーに配置します。

同じフォルダー内に3つの圧縮ファイルが表示されます：

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P2.png" /></div>

**ステップ 3.** システムイメージを準備します。

ホスト PC でターミナルウィンドウを開き、以下のコマンドを実行します：

```bash
cd <path to drivers>
sudo apt install unzip 
tar xf Jetson_Linux_R35.4.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
cd ..
unzip a608_jp512.zip
cp -r ./608_jp512/Linux_for_Tegra/* ./Linux_for_Tegra/
```

**ステップ 4.** A608 にシステムをフラッシュします。

- NVMe にフラッシュする場合
  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```
- USB にフラッシュする場合
  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```
- SD にフラッシュする場合
  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device mmcblk1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

フラッシュプロセスが成功すると、以下の出力が表示されます。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

フラッシュ後、Jetson デバイスの電源を再投入し、システムにログインします。

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

ここでは、NVIDIA L4T 36.3 を使用して、Jetson Orin NX モジュールを搭載した A608 キャリアボードに Jetpack 6.0 をインストールします。

**ステップ 1.** [NVIDIA ドライバー](https://developer.nvidia.com/embedded/jetson-linux-r363)をホスト PC にダウンロードします。必要なドライバーは以下の通りです：
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P1.png" /></div>

**ステップ 2.** [周辺機器ドライバー](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZdUUKln2yBKhPS8yegaLzMBWZm2MtIaFnHbFYkwazArzA?e=blzKtI)をダウンロードし、すべてのドライバーを同じフォルダーに配置します。

同じフォルダー内に3つの圧縮ファイルが表示されます：

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/6.0.png" /></div>

**ステップ 3.** システムイメージを準備します。

ホスト PC でターミナルウィンドウを開き、以下のコマンドを実行します：

```sh
cd <path to drivers>
sudo apt install unzip 
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
cd ..
unzip 608_jp60.zip
sudo cp -r ./608_jp60/Linux_for_Tegra/* ./Linux_for_Tegra/
```

**ステップ 4.** A608 の Nvme にシステムをフラッシュします。

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

フラッシュプロセスが成功すると、以下の出力が表示されます。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

フラッシュ後、Jetson デバイスの電源を再投入し、システムにログインします。

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

ここでは、NVIDIA L4T 36.4 を使用して、Jetson Orin NX モジュールを搭載した A608 キャリアボードに Jetpack 6.1 をインストールします。

**ステップ 1.** [NVIDIA ドライバー](https://developer.nvidia.com/embedded/jetson-linux-r3640)をホスト PC にダウンロードします。必要なドライバーは以下の通りです：
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P1.png" /></div>

**ステップ 2.** [周辺機器ドライバー](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVrGntfS1wxHhrgnwGeHQmQBtQ0gvHj4udkREIDIACvFDw?e=5B07Za)をダウンロードし、すべてのドライバーを同じフォルダーに配置します。

同じフォルダー内に3つの圧縮ファイルが表示されます：

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/a608_jp6.1.png" /></div>

**ステップ 3.** システムイメージを準備します。

ホスト PC でターミナルウィンドウを開き、以下のコマンドを実行します：

```bash
cd <path to drivers>
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
cd ..
tar xf A608_Jetpack_6.1.tar.gz
sudo cp -r 608_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/
```

**ステップ 4.** A608 の Nvme にシステムをフラッシュします。

```bash
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

フラッシュプロセスが成功すると、以下の出力が表示されます。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

フラッシュ後、Jetsonデバイスの電源を再度オンにしてシステムにログインしてください。

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

ここでは、NVIDIA L4T 36.4.3を使用して、Jetson Orin NXモジュールを搭載したA608キャリアボードにJetpack 6.2をインストールします。

**ステップ 1.** [NVIDIAドライバーをダウンロード](https://developer.nvidia.com/embedded/jetson-linux-r3643)し、ホストPCに保存します。必要なドライバーは以下の通りです：
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/jp6.2.png" /></div>

**ステップ 2.** [周辺機器ドライバーをダウンロード](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWjgLHXcemlLjraZ5JAohrcBv0gPkuoQ4vKGyu5U0JmHrQ?e=c0vJNG)し、すべてのドライバーを同じフォルダーに保存します。

同じフォルダー内に以下の3つの圧縮ファイルが表示されます：

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/jp62_files.png" /></div>

**ステップ 3.** システムイメージを準備します。

ホストPCでターミナルウィンドウを開き、以下のコマンドを実行してください：

```bash
cd <path to drivers>
tar xf Jetson_Linux_r36.4.3_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
sudo tar zxpf 608_jp62.tar.gz
sudo cp -r 608_jp62/Linux_for_Tegra/* Linux_for_Tegra/ 
cd Linux_for_Tegra/
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

**ステップ 4.** A608のNvmeにシステムをフラッシュします。

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit-super internal
```

フラッシュプロセスが成功すると、以下の出力が表示されます。

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

フラッシュ後、Jetsonデバイスの電源を再度オンにしてシステムにログインしてください。

</TabItem>

</Tabs>

## リソース
- [A608 CADファイル](https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608_V1.2.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>