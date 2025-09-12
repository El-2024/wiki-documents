---
description: Wio Tracker L1 Meshtastic ノード紹介
title: Wio Tracker L1 Meshtastic ノード
keywords:
- Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-L1.webp
slug: /ja/wio_tracker_l1_node
sidebar_position: 1
last_update:
  date: 5/19/2025
  author: Jessie
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg" alt="pir" width={600} height="auto" /></p>

Wio Tracker L1シリーズは、LoRa（862–930 MHz）、効率的な処理のためのnRF52840、正確な位置追跡のためのL76K GPSモジュールを搭載した低消費電力で高い拡張性を持つMeshtasticノードです。柔軟性を重視して設計されており、OLEDおよびE-Inkディスプレイ、ソーラーパネルとバッテリー電源をサポートし、幅広いIoTおよびオフグリッドアプリケーションに最適です。

## バージョン比較

:::tip
Wio Tracker L1シリーズは4つのバージョンで利用可能です—ニーズに最適なものをお選びください。
:::

|製品名|Wio Tracker L1 Lite|Wio Tracker L1|Wio Tracker L1 Pro|Wio Tracker L1 E-Ink|
|------------------|------------------|--------------------------|-----------------------|-----------------------|
|画像|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993653-wio-tracker-l1-lite.jpg" alt="pir" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993648-wio-tracker-l1.jpg" alt="pir" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993649-wio-tracker-l1-pro.jpg" alt="pir" width={300} height="auto" />|<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/L1-e-ink.png" alt="pir" width={300} height="auto" />|
|購入リンク|<p style={{textAlign: 'center'}}>[今すぐ購入！](https://www.seeedstudio.com/Wio-Tracker-L1-Lite-p-6455.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ購入！](https://www.seeedstudio.com/Wio-Tracker-L1-p-6453.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ購入！](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html)</p>|<p style={{textAlign: 'center'}}>[今すぐ購入！](https://www.seeedstudio.com/Wio-Tracker-L1-E-ink-p-6456.html)</p>|
|LoRa|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|GPS|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|スクリーン|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>1.3インチOLED</p><br/><p style={{textAlign: 'center'}}>解像度：128 × 64ピクセル</p>|<p style={{textAlign: 'center'}}>1.3インチOLED</p><br/><p style={{textAlign: 'center'}}>解像度：128 × 64ピクセル</p>|<p style={{textAlign: 'center'}}>2.13インチE-ink</p><br/><p style={{textAlign: 'center'}}>解像度：122 × 250ピクセル</p>|
|ソーラー+バッテリーコネクタ|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>内蔵2000mAhバッテリー</p>|<p style={{textAlign: 'center'}}>✅</p>|
|シェル|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>-</p>|

## 概要

### 機能

- **Meshtasticファームウェアをプリフラッシュ**
Meshtasticファームウェアがプリインストールされており、箱から出してすぐにシームレスなセットアップが可能です。

- **3つの電源供給オプション**
Type-C急速充電、ソーラー入力、Li-ionバッテリー電源をサポートし、様々な環境での柔軟な展開が可能—屋外およびモバイルアプリケーションに最適です。

- **柔軟なディスプレイサポート**
オプションの1.3インチOLEDと2.13インチE-Inkスクリーンにより、異なる消費電力と視覚的フィードバックのニーズに対応する多様なディスプレイオプションを提供します。

- **高い拡張性**
Groveエコシステムと完全に互換性があり、PTHヘッダーとSWDデバッグインターフェースを含み、カスタムハードウェア拡張と高度な開発に対応します。

### 仕様

<table>
  <tr>
    <th colspan="1">プロセッサ</th>
    <th colspan="1">
      Nordic nRF52840<br />ARM® Cortex®-M4 with FPU 最大64 MHzで動作
    </th>
  </tr>
  <tr>
    <td colspan="1">オンチップメモリ</td>
    <td colspan="1">1 MBフラッシュと256 kB RAM</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="2">ワイヤレス</td>
    <td colspan="1">
      LoRa: <a href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html">Wio-SX1262</a>ベース、862-930MHzをサポート
    </td>
  </tr>
  <tr>
    <td colspan="1">Bluetooth 5.0</td>
  </tr>
  <tr>
    <td colspan="1">GPS</td>
    <td colspan="1">L76K (GPS, BeiDou, GLONASS, QZSS)</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">インターフェース</td>
    <td colspan="1">Grove *1: UART/IIC/GPIO</td>
  </tr>
  <tr>
    <td colspan="1">スルーホール（PTH）: UART/IIC/GPIO/Analog</td>
  </tr>
  <tr>
    <td colspan="1">SWD用はんだパッドを予約</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">電源入力</td>
    <td colspan="1">USB Type-C: 5V — 1A</td>
  </tr>
  <tr>
    <td colspan="1">ソーラーパネル: 5V — 1A</td>
  </tr>
  <tr>
    <td colspan="1">リチウムバッテリー: 3.7V — 1A</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">OLEDスクリーン</td>
    <td colspan="1">サイズ: 1.3インチ</td>
  </tr>
  <tr>
    <td colspan="1">解像度: 128 × 64ピクセル</td>
  </tr>
  <tr>
    <td colspan="1">アクティブエリア (mm): 34.5 × 23.0</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">E-Inkスクリーン</td>
    <td colspan="1">サイズ: 2.13インチ</td>
  </tr>
  <tr>
    <td colspan="1">解像度: 122 × 250ピクセル</td>
  </tr>
  <tr>
    <td colspan="1">アクティブエリア (mm): 48.55 × 23.7046</td>
  </tr>
  <tr>
    <td colspan="1">認証</td>
    <td colspan="1">FCC, CE, RoHS</td>
  </tr>
</table>

### ハードウェア概要

**Wio Tracker L1**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio_tracker-l1.png" alt="pir" width={800} height="auto" /></p>

**Wio Tracker L1 Lite**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio_tracker_l1_lite.png" alt="pir" width={800} height="auto" /></p>

**Wio Tracker L1 Pro**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio_tracker_l1-pro.png" alt="pir" width={800} height="auto" /></p>

**図表**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/l1-diagram.png" alt="pir" width={800} height="auto" /></p>
