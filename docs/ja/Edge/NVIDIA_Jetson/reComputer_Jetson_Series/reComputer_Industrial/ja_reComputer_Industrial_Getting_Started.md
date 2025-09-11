---
description: reComputer Industrial 入門ガイド
title: reComputer Industrial 入門ガイド
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_Industrial_Getting_Started
last_update:
  date: 05/16/2023
  author: Lakshantha
---

# reComputer Industrial 入門ガイド

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/2.png"/></div>

reComputer industrial シリーズは、NVIDIA Jetson™ Xavier NX/ Orin Nano/Orin NX/ モジュールを含む完全なシステムを提供し、20 TOPS から 100 TOPS の AI パフォーマンスを実現します。Jetpack 5.1.1 がプリインストールされており、reComputer industrial は開発を簡素化し、ビデオ分析、物体検出、自然言語処理、医療画像、ロボットのアプリケーション構築に最適で、スマートシティ、セキュリティ、産業オートメーション、スマートファクトリーなどの業界にデジタル変革をもたらします。

reComputer industrial は、パッシブヒートシンクとファンレス設計を採用しており、厳しい環境での使用に最適です。パッシブヒートシンクにより、ファンを必要とせずに効率的な冷却が可能で、ほこりやその他の汚染物質による部品故障のリスクを軽減します。ファンレス設計により、騒音レベルと消費電力も削減され、騒音に敏感な環境での使用に適し、エネルギーコストを最小限に抑えます。

reComputer industrial には 2 つの RJ45 GbE ポートがあり、そのうち 1 つは IP カメラなどのデバイスに Power over Ethernet で電力を供給する PoE PSE ポートです。これにより、別の電源が不要になり、電源コンセントが容易に利用できない場所でのネットワークデバイスの展開が簡単になります。もう一方の GbE ポートは、ネットワークスイッチやルーターへの接続に使用され、ネットワーク上の他のデバイスとの通信やインターネットへのアクセスを可能にします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J4011-p-5681.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a></div>

## 特徴

- **ファンレスコンパクト PC:** 熱設計リファレンス、0.7m/s エアフローで -20 ~ 60°C の広い温度サポート
- **産業用インターフェース設計:** 2x RJ-45 GbE（1 つは POE-PSE 802.3 af）; 1x RS-232/RS-422/RS-485; 4x DI/DO; 1x CAN; 3x USB3.2; 1x TPM2.0（モジュールオプション）
- **ハイブリッド接続:** 1x Nano SIM カードスロット付きで 5G/4G/LTE/LoRaWAN® をサポート（モジュールオプション）
- **柔軟な取り付け:** デスク、DIN レール、壁面取り付け、VESA
- **認証:** FCC、CE、RoHS、UKCA

## 仕様

<table>
  <thead>
    <tr>
      <th colSpan={2}>製品名</th>
      <th>reComputer Industrial J4012</th>
      <th>reComputer Industrial J4011</th>
      <th> reComputer Industrial J3011 </th>
      <th> reComputer Industrial J3010</th>
      <th>reComputer Industrial J2012</th>
      <th>reComputer Industrial J2011</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan={2}>NVIDIA Jetsonモジュール</td>
      <td>Orin NX 16GB</td>
      <td>Orin NX 8GB</td>
      <td>Orin Nano 8GB</td>
      <td>Orin Nano 4GB</td>
      <td>Xavier NX 16GB</td>
      <td>Xavier NX 8GB</td>
    </tr>
    <tr>
      <td colSpan={2}>SKU</td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html">110110191</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J4011-p-5681.html">110110190</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html">110110193</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J3010-p-5686.html">110110192</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J2012-p-5685.html">110110189</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J2011-p-5683.html">110110188</a></td>
    </tr>
    <tr>
      <td rowSpan={6}>プロセッサシステム</td>
      <td>AI性能</td>
      <td>100 TOPS</td>
      <td>70 TOPS</td>
      <td>40 TOPS</td>
      <td>20 TOPS</td>
      <td colSpan={2}>21 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td colSpan={3}>1024コア NVIDIA Ampereアーキテクチャ GPU（32 Tensor Core搭載）</td>
      <td>512コア NVIDIA Ampereアーキテクチャ GPU（16 Tensor Core搭載）</td>
      <td colSpan={2}>384コア NVIDIA Volta™ GPU（48 Tensor Core搭載）</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8コア Arm® Cortex®-A78AE v8.2 64ビット CPU<br />2MB L2 + 4MB L3</td>
      <td colSpan={3}>6コア Arm® Cortex®-A78AE v8.2 64ビット CPU<br />1.5MB L2 + 4MB L3</td>
      <td colSpan={2}>6コア NVIDIA Carmel ARM®v8.2 64ビット CPU、6MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>メモリ</td>
      <td>16GB 128ビット LPDDR5<br />102.4GB/s</td>
      <td>8GB 128ビット LPDDR5<br />102.4GB/s</td>
      <td>8GB 128ビット LPDDR5<br />68 GB/s</td>
      <td>4GB 64ビット LPDDR5<br />34 GB/s</td>
      <td>16GB 128ビット LPDDR4x<br />59.7GB/s</td>
      <td>8GB 128ビット LPDDR4x<br />59.7GB/s</td>
    </tr>
    <tr>
      <td>ビデオエンコード</td>
      <td colSpan={2}>1*4K60 (H.265) | 3*4K30 (H.265) | 6*1080p60 (H.265) | 12*1080p30 (H.265)</td>
      <td colSpan={2}>1080p30 1-2 CPUコアでサポート</td>
      <td colSpan={2}>2*4K60 | 4*4K30 | 10*1080p60 | 22*1080p30 (H.265)<br /> 2*4K60 | 4*4K30 | 10*1080p60 | 20*108p30 (H.264)</td>
    </tr>
    <tr>
      <td>ビデオデコード</td>
      <td colSpan={2}>1×8K30 (H.265) | 2×4K60 (H.265) | 4×4K30 (H.265) | 9×1080p60 (H.265) | 18×1080p30 (H.265)</td>
      <td colSpan={2}>1*4K60 (H.265) | 2*4K30 (H.265) | 5*1080p60 (H.265) | 11*1080p30 (H.265)</td>
      <td colSpan={2}>2*8K30 | 6*4K60 | 12*4K30 | 22*1080p60 | 44*1080p30 (H.265)<br /> 2*4K60 | 6*4K30 | 10*1080p60 | 22*1080p30 (H.264)</td>
    </tr>
    <tr>
      <td rowSpan={2}>ストレージ</td>
      <td>eMMC<br /></td>
      <td><br />-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td colSpan={2}>16GB eMMC 5.1</td>
    </tr>
    <tr>
      <td>拡張</td>
      <td colSpan={6}>M.2 Key M PCIe Gen4.0 SSD（M.2 NVMe 2280 SSD 128G付属）</td>
    </tr>
    <tr>
      <td rowSpan={6}>I/O</td>
      <td>ネットワーク</td>
      <td colSpan={6}>1* LAN1 RJ45 GbE PoE(PSE 802.3 af 15 W)<br />1* LAN2 RJ45 GbE (10/100/1000Mbps) </td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={6}>3* USB3.2 Gen1、1* USB2.0 Type C（デバイスモード）、1* USB2.0 Type C デバッグUART &amp; RP2040用</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={6}>4*DI、4*DO、3*GND_DI、2*GND_DO、1*GND_ISO、1*CAN<br /></td>
    </tr>
    <tr>
      <td>COM</td>
      <td colSpan={6}>1* DB9 (RS232/RS422/RS485)</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td colSpan={6}>1*HDMI 2.0 Type A</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td colSpan={6}>1* Nano SIMカードスロット</td>
    </tr>
    <tr>
      <td rowSpan={7}>拡張</td>
      <td>Mini PCIe</td>
      <td colSpan={6}>Mini PCIe 4G/LoRaWAN®用&nbsp;&nbsp;（モジュールオプション） <br /></td>
    </tr>
    <tr>
      <td>Wi-Fi</td>
      <td colSpan={6}>SMD Wi-Fi/Bluetoothサポート（モジュールオプション） </td>
    </tr>
    <tr>
      <td>M.2 Key B </td>
      <td colSpan={6}>M.2 Key B 4G/5Gサポート（モジュールオプション） </td>
    </tr>
    <tr>
      <td>ファン</td>
      <td colSpan={6}>ファンレス、パッシブヒートシンク<br />1*ファンコネクタ（5V PWM）</td>
    </tr>
    <tr>
      <td>TPM</td>
      <td colSpan={6}>1* TPM 2.0コネクタ（モジュールオプション） </td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={6}>1* RTCソケット（CR1220付属）、1* RTC 2ピン</td>
    </tr>
    <tr>
      <td>カメラ</td>
      <td colSpan={6}>2* CSI（2レーン 15ピン）</td>
    </tr>
    <tr>
      <td rowSpan={2}>電源</td>
      <td>電源供給</td>
      <td colSpan={6}>DC 12V-24V ターミナルブロック 2ピン</td>
    </tr>
    <tr>
      <td>電源アダプタ</td>
      <td colSpan={6}>19V 電源アダプタ（電源コード別売） </td>
    </tr>
    <tr>
      <td rowSpan={3}>機械的仕様<br /></td>
      <td>寸法（W x D x H）</td>
      <td colSpan={6}>159mm×155mm×57mm</td>
    </tr>
    <tr>
      <td>重量</td>
      <td colSpan={6}>1.57kg</td>
    </tr>
    <tr>
      <td>設置方法</td>
      <td colSpan={6}>デスク、DINレール、壁面取付、VESA</td>
    </tr>
    <tr>
      <td rowSpan={4}>環境</td>
      <td>動作温度</td>
      <td colSpan={6}> -20 ~ 60°C（0.7m/s風速時）</td>
    </tr>
    <tr>
      <td>動作湿度</td>
      <td colSpan={6}>95% @ 40 °C（結露なし）</td>
    </tr>
    <tr>
      <td>振動</td>
      <td colSpan={6}>3 Grms @ 5 ~ 500 Hz、ランダム、1時間/軸</td>
    </tr>
    <tr>
      <td>衝撃</td>
      <td colSpan={6}>50G ピーク加速度（11 msec）</td>
    </tr>
    <tr>
      <td colSpan={2}>OS</td>
      <td colSpan={6}>Jetpack 5.1（以上）プリインストール（ボードサポートパッケージ付きLinux OS提供）</td>
    </tr>
    <tr>
      <td colSpan={2}>認証</td>
      <td colSpan={6}>FCC、CE、RoHS、UKCA</td>
    </tr>
    <tr>
      <td colSpan={2}>保証</td>
      <td colSpan={6}>2年</td>
    </tr>
  </tbody>
</table>

## ハードウェア概要

### フルシステム

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/3.jpg"/></div>

### キャリアボード

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/4.jpg"/></div>

## JetPackのフラッシュ

reComputer Industrialには、必要なドライバーと共に128GB SSDにJetPack 5.1.1がプリインストールされています。これには、CUDA、CUDNN、TensorRTなどのSDKコンポーネントが含まれています。ただし、付属のSSDまたは新しいSSDにJetpackを再フラッシュしたい場合は、以下の手順に従ってください。

:::note
reComputer IndustrialでSSDを使用したい場合は、Seeedの[128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)、[512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)バージョンのみを選択することをお勧めします。
:::

### 前提条件

reComputer Industrialを開始する前に、以下のハードウェアを準備する必要があります

- reComputer Industrial
- 付属の電源アダプター（電源コード付き）（[US版](https://www.seeedstudio.com/AC-US-p-5122.html)または[EU版](https://www.seeedstudio.com/AC-EU-p-5121.html)）
- Ubuntu 20.04ホストPC
- USB Type-Cデータ転送ケーブル
- 外部モニター
- HDMIケーブル
- キーボードとマウス

:::info
仮想マシンではなく、物理的なubuntuホストデバイスを使用することをお勧めします。
ホストマシンを準備するには、以下の表を参照してください。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPackバージョン </td>
        <td class="dbon" colspan="3"> Ubuntuバージョン（ホストコンピューター） </td>
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

### フォースリカバリモードに入る

reComputer Industrialボードをフラッシュするために、リカバリモードに入る必要があります。

1. **USB2.0 DEVICE**ポートとPCの間にUSB Type-Cケーブルを接続します。
2. ピンを使って**RECOVERY**ホールに挿入し、リカバリボタンを押しながら保持します。
3. 付属の**2ピンターミナルブロック電源コネクタ**をボードの電源コネクタに接続し、付属の電源アダプタに電源コードを接続してボードの電源を入れます。
4. リカバリボタンを離します。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/97.png"/></div>

:::note
RECOVERYボタンを押しながらデバイスの電源を入れることを確認してください。そうしないとリカバリモードに入りません
:::

Ubuntu ホストPCで、ターミナルウィンドウを開き、**lsusb**コマンドを入力します。使用するJetson SoMに応じて、返される内容に以下の出力のいずれかがある場合、ボードはフォースリカバリモードになっています。

- Orin NX 16GBの場合: **0955:7323 NVidia Corp**
- Orin NX 8GBの場合: **0955:7423 NVidia Corp**
- Orin Nano 8GBの場合: **0955:7523 NVidia Corp**
- Orin Nano 4GBの場合: **0955:7623 NVidia Corp**

### Jetsonにフラッシュ

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Jetpack 5.1.1" label="Jetpack 5.1.1">

ここでは2つの異なるフラッシュ方法を提供します。

1. NVIDIA JetPack、ハードウェア周辺機器ドライバを含む、私たちが準備した完全なシステムイメージをダウンロードし、デバイスにフラッシュする
2. 公式のNVIDIA L4Tをダウンロードし、付属のハードウェア周辺機器ドライバを使用してデバイスにフラッシュする

:::note
最初の方法のダウンロードは約14GBで、2番目の方法のダウンロードは約3GBです。
:::

<Tabs>
<TabItem value="Method 1" label="Method 1">

- **ステップ 1:** 使用しているボードに対応するシステムイメージをUbuntu PCにダウンロードします

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>デバイス</th>
      <th>イメージリンク1</th>
      <th>イメージリンク2</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUhr3fzFqx9DmH83QrXmFAwBEpfC-VGsyBnqHSoOPPAzGQ?e=Wv7d8f" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EcXVegQs83tJpv3kmJPMmSEB8M9djK_gWgJapIJnOJQeUw?e=ntbXLi" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>F6623A277E538F309999107297405E1<br />378CF3791EA9FD19F91D263E3B4C88333</td>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbaTHCLEwfNOqAR1DH-IAWYB20HBEPG2G-IkPJ1dJJcWJw?e=2VYQXJ" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EStCSSWeyUtLkJXMj5Y6tXcBru2PIQNHLl6p2BZsRbzxjA?e=Gaaa6m" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>414DFE16703D0A2EE972DF1C77FCE2E<br />8B44BC71726BB6EE4B1439C2D0F19A653</td>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbQu844dGA5Fjn3n-320hmoBt6wngMrIv6fErKLEZI1GyQ?e=uSU6qb" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERgyc60CqY9Aog6BMW9-yqQBj8pMaakSFTzHHvb4edt_eg?e=9qFHKp" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>347AB7247ED83286BDFAEF84B49B84C<br />5F5B871AEE68192339EDE4773149D8737</td>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ETnL5lrC6IBPqm6Lafx1nCMBJJjml1IrCagrHPGhxFpzxA?e=BBM0kl" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eb7J_TSNsDBCrvc1RbSOmnoBqmjR9jYhkvZpdQJOzkH5KA?e=h4r74v" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>860EC8EB3245CB91E7C5C321B26333B<br />59456A3418731FEF73AE0188DF655EE46</td>
    </tr>
    <tr>
      <td>reComputer Industrial J2012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeD01G8dJ8pIm187oS_VX-sBu3SmD4LhaBmwVz7X4-n_Gw?e=x9ULSq" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Ef_fEAq0aA5JksfnEz62JKABfYTUzlTdOxkiKwoThp17xg?e=UlSs7A" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>821CF92AF1FE8A785689FAF4751615A<br />A30E7F0770B4FA23327DFAF2C8B53FDD7</td>
    </tr>
    <tr>
      <td>reComputer Industrial J2011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVYQRYavCVRJrHGz12qUPlIBdmK3hrjEyglRkuLhBSlYuA?e=SBnrTU" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EVVUAexfVKxDnjbUGtYrJhEB1He6ZXIAD4uriNP76fxbMg?e=kGYF6h" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td>DAB8FC069E4C62434C77AE3A6BA13EE<br />FB30003C9A14BFE82DE879B88ACDD85FA</td>
    </tr>
  </tbody>
  </table>
</div>

<p style={{ fontSize: '0.9em', color: 'yellow' , textAlign: 'center'}}>
  * Download1とDownload2の画像ファイルは同じです。ダウンロード速度の速いリンクを選択できます。
</p>

:::info
ダウンロードしたファームウェアの整合性を確認するには、SHA256ハッシュ値を比較できます。

Ubuntuホストマシンで、ターミナルを開き、コマンド `sha256sum <File>` を実行して、ダウンロードしたファイルのSHA256ハッシュ値を取得します。結果のハッシュがwikiで提供されているSHA256ハッシュと一致する場合、ダウンロードしたファームウェアが完全で破損していないことが確認されます。
:::

上記の画像のソースコードは[こちら](https://github.com/Seeed-Studio/Linux_for_Tegra)で見つけることができます

- **ステップ2:** 生成されたファイルを展開する

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **ステップ 3:** 前に展開したファイルに移動し、以下のようにフラッシュコマンドを実行します

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

システムイメージのボードへの書き込みが開始されます。書き込みが成功すると、以下の出力が表示されます

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **ステップ 4:** ボード上のHDMIコネクタを使用してボードをディスプレイに接続し、初期設定セットアップを完了します

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

その後、ボードが再起動し、使用準備が完了します！

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>
  </TabItem>
<TabItem value="Method 2" label="Method 2">

**NVIDIA L4Tとrootfsのダウンロードと準備**

```sh
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/jetson_linux_r35.3.1_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2
tar xf jetson_linux_r35.3.1_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**ドライバーのダウンロードと準備**

- **ステップ 1:** 使用しているボードに対応するドライバーファイルをUbuntu PCにダウンロードします

<table>
  <thead>
    <tr>
      <th>Jetsonモジュール</th>
      <th>ダウンロードリンク</th>
      <th>JetPackバージョン</th>
      <th>L4Tバージョン</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>Jetson Orin NX 8GB/ 16GB,<br />Orin Nano 8GB</td>
      <td rowSpan={2}><a href="https://sourceforge.net/projects/nvidia-jetson/files/reComputer-Industrial/orin-nx-8-16-nano-8-recomputer-industrial.zip/download" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <td rowSpan={4}>5.1.1</td>
      <td rowSpan={4}>35.3.1</td>
    </tr>
    <tr>
    </tr>
    <tr>
      <td>Jetson Orin Nano 4GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reComputer-Industrial/orin-nano-4-recomputer-industrial.zip/download" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
    <tr>
      <td>Jetson Xavier NX 8GB/ 16GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reComputer-Industrial/xavier-nx-8-16-recomputer-industrial.zip/download" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
    </tr>
  </tbody>
</table>

- **ステップ 2:** ダウンロードした周辺機器ドライバーを**Linux_For_Tegra**ディレクトリと同じフォルダに移動します

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/125.png"/></div>

- **ステップ 3:** ダウンロードしたドライバーの.zipファイルを展開します。ここでは.zipファイルの解凍に必要な**unzip**パッケージを追加でインストールします

```sh
sudo apt install unzip
sudo unzip xxxx.zip # Replace xxxx with the driver file name
```

ここで、ファイルを置き換えるかどうかを尋ねられます。Aを入力してENTERを押し、必要なファイルを置き換えてください

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/126.png"/></div>

- **Step 4:** **Linux_for_Tegra**ディレクトリに移動し、以下のようにflashコマンドを実行します

```sh
cd Linux_for_Tegra

# For Orin NX and Orin Nano
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --network usb0 recomputer-orin-industrial external

# For Xavier NX
sudo ADDITIONAL_DTB_OVERLAY_OPT="BootOrderNvme.dtbo" ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_l4t_t194_qspi_p3668.xml --no-systemimg" --network usb0  recomputer-xavier-nx-industrial external
```

これでシステムイメージのボードへの書き込みが開始されます。書き込みが成功すると、以下の出力が表示されます

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **ステップ 5:** ボード上のHDMIコネクタを使用してボードをディスプレイに接続し、初期設定セットアップを完了します

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

その後、ボードが再起動し、以下が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

- **ステップ 6:** デバイス内でターミナルウィンドウを開き、以下を実行すると、デバイスが再起動して使用準備が完了します！

```sh
systemctl disable nvgetty.service
sudo depmod -a
sudo reboot
```

さらに、CUDA、cuDNN、TensorRTなどのSDKコンポーネントをインストールしたい場合は、以下を実行してください

```sh
sudo apt update
sudo apt install nvidia-jetpack -y
```

  </TabItem>
  </Tabs>

---

</TabItem>

<TabItem value="Jetpack 5.1.3" label="Jetpack5.1.3">

- **ステップ1:** 使用しているボードに対応するシステムイメージをUbuntu PCにダウンロードします

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>デバイス</th>
      <th>リンク</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWzTx7AJjbtFksz5DSwvW1sBjUa1RgnSlk-prR0kK_ymWw?e=dq9zIb" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>436017DA6FBA2EF910F5F6C5D80749FB53029EC5108A461101CA3A69C1F8CEC3</th>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQwbQHuBbGhDpLP_Prr6NgkBMtu41jENXa_zTRoQ2pYCBQ?e=tNeW4d" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>B8FFB1C7BF5B5436CCA6BA0E32E9A71752B25C1494527EC25129895A2FBC7D93</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdhYh3cLibBPloeruCn9_TwBwyxtn8XycXp0jTqS5UlMaA?e=efwpWa" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>484CB81F399301B8A6FF61429E974AE790365B9498FB8B20DF02C603656CF6D0</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeC0UJ66ZKFHi71CnyHPS5gBxEXQE9yVVB9-Kt6P_flA0A?e=Pxid2b" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>A238C5229219CCF1F6AC2B2E4D93A914E6B2E471F56C975990CC03BEEFC5F9DD</th>
    </tr>
        <tr>
      <td>reComputer Industrial J2012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfB-onLVAIxFreZTCSpejYIBPX42dZoKnKrDm8ZC27DI_w?e=fAOXZr" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>B54CF2545A8ED8BFE115C439B0B427112BD882F03292B9F5C03AB55746C707C1</th>
    </tr>
        <tr>
      <td>reComputer Industrial J2011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXmfIDIx80hCk61-dZogyUwBe6uOlz0U6tZEW3i7WC2JBw?e=BLjUW3" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>11BDB47D06CA8409CFCEA109B8BACD9BB79A54A275D2664D6CF492BFEAD31131</th>
    </tr>
  </tbody>
  </table>
</div>

:::info
ダウンロードしたファームウェアの整合性を確認するために、SHA256ハッシュ値を比較することができます。

Ubuntuホストマシンで、ターミナルを開いて`sha256sum <File>`コマンドを実行し、ダウンロードしたファイルのSHA256ハッシュ値を取得します。結果のハッシュがwikiで提供されているSHA256ハッシュと一致する場合、ダウンロードしたファームウェアが完全で破損していないことが確認されます。
:::

:::info
上記イメージのソースコードは[こちら](https://github.com/Seeed-Studio/Linux_for_Tegra)で見つけることができます。
:::

- **ステップ2:** 生成されたファイルを展開する

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **ステップ 3:** 前に展開したファイルに移動し、以下のようにフラッシュコマンドを実行します

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

システムイメージのボードへの書き込みが開始されます。書き込みが成功すると、以下の出力が表示されます

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **ステップ 4:** J401をボード上のHDMIコネクタを使用してディスプレイに接続し、初期設定セットアップを完了します：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
必要に応じて**システム設定**を完了してください。
:::

</TabItem>

<TabItem value="Jetpack 6.0" label="Jetpack6.0">

- **ステップ 1:** 使用しているボードに対応するシステムイメージをUbuntu PCにダウンロードします

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>デバイス</th>
      <th>リンク</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcQJulAOt3ZJlnG-xr0lzdcB_d-yLXxEpicXuHr8sIca1w?e=dUWeYw" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>77B5967DCDFAAE6725381EAE7BD570A254BD1F9E6E4C28DE8D9D84760C204DF1</th>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERWRQ6mJe2hIoSwsatwN68IBF0prjvm7XX1aHFmsTd25fQ?e=x06NFw" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>FEB6B83441F4C812921ED4554A3F6E903FCBF48DB1C2CF6C4240E764C3C3A4A3</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcSZGn8G8QRKqJc1yV8wErsBhCgy_E2UmCX5O9utZtj4ug?e=uel2DE" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>0C5D1A7814E50270A78AD3AE3C04E90C4D7803111567A04018B26C43CEA8D564</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Eaj1r69kX5hNjzgb0xcOun0BWtd9sjq318O4FFi8bMKHvQ?e=n8wrM1" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>30184A2A2800733118F4CC711010AE523C9A3F0E9565617B1C2E9CF64AE21CF0</th>
    </tr>
  </tbody>
  </table>
</div>

:::info
ダウンロードしたファームウェアの整合性を確認するために、SHA256ハッシュ値を比較することができます。

Ubuntuホストマシンで、ターミナルを開いて`sha256sum <File>`コマンドを実行し、ダウンロードしたファイルのSHA256ハッシュ値を取得します。結果のハッシュがwikiで提供されているSHA256ハッシュと一致する場合、ダウンロードしたファームウェアが完全で破損していないことが確認されます。
:::

:::info
上記イメージのソースコードは[こちら](https://github.com/Seeed-Studio/Linux_for_Tegra)で見つけることができます。
:::

- **ステップ2:** 生成されたファイルを展開する

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **ステップ 3:** 前に展開したファイルに移動し、以下のようにフラッシュコマンドを実行します

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

システムイメージのボードへの書き込みが開始されます。書き込みが成功すると、以下の出力が表示されます

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **ステップ 4:** ボード上のHDMIコネクタを使用してボードをディスプレイに接続し、初期設定セットアップを完了します

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

その後、ボードが再起動し、使用準備が完了します！

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>
</TabItem>

<TabItem value="Jetpack 6.1" label="Jetpack6.1">

- **ステップ 1:** 使用しているボードに対応するシステムイメージをUbuntu PCにダウンロードします

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>デバイス</th>
      <th>リンク</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUNMocOFBZNPqqC-W9uiIM4BgYUw-ZL0pk6juOVPFd_vqg?e=C8ldYX" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>6A2B3A71EE77E7000034351020FBF9A5260F944FB30B5DE672BF7897DEE87B5A</th>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfYrDXxD_oRCuk5nv8WmtqIBPY9FjkEHiAmsZDpvDj-sfQ?e=qxV5MG" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>EC94A1F9E10D07CE2C78D8C1B742575A84DA543CCD95564D8E0BEC823C0CA514</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeOq0sfMDhBEqZPX-ti_gJ0BzUdSGeFf5RrSdxFnQ70aNQ?e=GVr10a" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>547E541E40A133A2CDEB3FAC399850ABC108325BBF109771420DDBCAF19E5E29</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXK1GomjByJKnmt3OdE5Vq8BSqzYZm1MY_yD18YjmRplLw?e=dIWPKA" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>B7F400C225423C8BC4C00A5915C3C634D2D7B15145FE0735479E6AD7613D07E5</th>
    </tr>
  </tbody>
  </table>
</div>

:::info
ダウンロードしたファームウェアの整合性を確認するために、SHA256ハッシュ値を比較することができます。

Ubuntuホストマシンで、ターミナルを開いて`sha256sum <File>`コマンドを実行し、ダウンロードしたファイルのSHA256ハッシュ値を取得します。結果のハッシュがwikiで提供されているSHA256ハッシュと一致する場合、ダウンロードしたファームウェアが完全で破損していないことが確認されます。
:::

:::info
上記イメージのソースコードは[こちら](https://github.com/Seeed-Studio/Linux_for_Tegra)で見つけることができます。
:::

- **ステップ2:** 生成されたファイルを展開する

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **ステップ 3:** 前に展開したファイルに移動し、以下のようにフラッシュコマンドを実行します

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

システムイメージのボードへの書き込みが開始されます。書き込みが成功すると、以下の出力が表示されます

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **ステップ 4:** J401をボード上のHDMIコネクタを使用してディスプレイに接続し、初期設定セットアップを完了します：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
必要に応じて**システム設定**を完了してください。
:::

</TabItem>

<TabItem value="Jetpack 6.2" label="Jetpack6.2">

- **ステップ 1:** 使用しているボードに対応するシステムイメージをUbuntu PCにダウンロードします

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>デバイス</th>
      <th>リンク</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdypjC_kT7RAqqBHytE_KLwBLU6fEpoQ5Rv_MWYk-lMszQ?e=VV0U9A" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>7273143FCC46E2F7441BCF5FE6B4043C<br />A6428E126C50373462EC3091959CE0AA</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXRpfNGzXmdCi36MrQYtzvABYW0gWcLGshzVhBiodVtPWQ?e=pO824v" target="_blank" rel="noopener noreferrer">ダウンロード</a></td>
      <th>0C07EC7C852DD72A7E8034965A274193<br />9B2DDA9C88AB9C6E4CB41E6264B95BDC</th>
    </tr>
  </tbody>
  </table>
</div>

:::info
ダウンロードしたファームウェアの整合性を確認するために、SHA256ハッシュ値を比較することができます。

Ubuntuホストマシンで、ターミナルを開き、コマンド `sha256sum <File>` を実行して、ダウンロードしたファイルのSHA256ハッシュ値を取得します。結果のハッシュがwikiで提供されているSHA256ハッシュと一致する場合、ダウンロードしたファームウェアが完全で破損していないことが確認されます。
:::

:::info
上記画像のソースコードは[こちら](https://github.com/Seeed-Studio/Linux_for_Tegra)で確認できます。
:::

:::note
`super mode`を有効にした後の消費電力の増加と発熱により、[reComputer Industrial J4011](https://www.seeedstudio.com/reComputer-Industrial-J4011-p-5681.html)と[reComputer Industrial J4012](https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html)は最高モードで安定して動作できないことにご注意ください。そのため、今回のアップデートにはこれら2つの製品は含まれていません。
現在、新しいバージョンのreComputerを設計中です。ご期待ください！
:::

- **Step 2:** 生成されたファイルを展開する

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **ステップ 3:** 前に展開したファイルに移動し、以下のようにフラッシュコマンドを実行します

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

システムイメージのボードへの書き込みが開始されます。書き込みが成功すると、以下の出力が表示されます

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **ステップ 4:** J401をボード上のHDMIコネクタを使用してディスプレイに接続し、初期設定セットアップを完了します：

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
必要に応じて**システム設定**を完了してください。
:::

</TabItem>

</Tabs>

<!-- Code END -->

## ハードウェアとインターフェースの使用方法

reComputer Industrialボード上のすべてのハードウェアとインターフェースの使用方法について詳しく学ぶには、私たちが準備した関連するwikiドキュメントに従うことをお勧めします。

- [reComputer Industrial J20 ハードウェアとインターフェースの使用方法](https://wiki.seeedstudio.com/reComputer_Industrial_J20_Hardware_Interfaces_Usage)
- [reComputer Industrial J40, J30 ハードウェアとインターフェースの使用方法](https://wiki.seeedstudio.com/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage)

## リソース

- [reComputer Industrial データシート](https://files.seeedstudio.com/products/NVIDIA/reComputer-Industrial-datasheet.pdf)
- [reComputer Industrial リファレンスガイド](https://files.seeedstudio.com/products/NVIDIA/reComputer-Industrial-Reference-Guide.pdf)
- [NVIDIA Jetson デバイスとキャリアボードの比較](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [reComputer Industrial 3Dファイル](https://files.seeedstudio.com/products/NVIDIA/Industrial/reComputer-Industrial.stp)
- [Seeed Jetson シリーズカタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio Edge AI 成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson シリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson デバイス ワンページ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
