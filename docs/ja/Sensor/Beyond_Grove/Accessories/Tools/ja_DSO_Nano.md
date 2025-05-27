---
title: DSO Nano
nointro:
keywords:
  - ドキュメント
  - Docusaurus
image: https://wiki.seeedstudio.com/ja/DSO_Nano/
slug: /ja/DSO_Nano
last_update:
  date: 05/15/2025
  author: gunengyu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

DSO Nano は、1 チャンネルのハンドヘルドオシロスコープで、フィールドでの迅速な測定などに適しています。非常に使いやすいですが、それでも驚くべき小型ツールです。

新しくダイナミックなオープンハードウェアおよびオープンソースプロジェクトであるため、情報が散在している傾向があります。このページでは、最も関連性の高い情報を一箇所に集め、新規ユーザーが既に利用可能な膨大な未整理の資料を見つけやすくすることを目指します。

画像をクリックして、DSO Nano の異なるバージョンにアクセスしてください。

|[![](https://files.seeedstudio.com/wiki/DSO_Nano/img/Dsonanointro.jpg)](https://www.seeedstudio.com/DSO-nano-Pocket-size-digital-storage-oscilloscope-p-512.html)|[![](https://files.seeedstudio.com/wiki/DSO_Nano/img/Dsonanov2intro.jpg)](https://www.seeedstudio.com/DSO-Nano-v2-p-681.html)|[![](https://files.seeedstudio.com/wiki/DSO_Nano/img/Nano_v3.jpg)](https://www.seeedstudio.com/DSO-Nano-v3-p-1358.html)|

<div>
  |:---:|:---:|:---:|
  |[DSO Nano v1](https://www.seeedstudio.com/DSO-nano-Pocket-size-digital-storage-oscilloscope-p-512.html)<br />**(販売終了)**|[DSO Nano v2](https://www.seeedstudio.com/DSO-Nano-v2-p-681.html)<br />**(販売終了)**|[DSO Nano v3](https://www.seeedstudio.com/DSO-Nano-v3-p-1358.html)
</div>

##   ハードウェアの詳細
---
これまでに DSO Nano には 3 つの主要なバージョンがあり、最初のものは 2009 年、DSO Nano V2 は 2010 年に登場しました。（デュアルチャンネルを含む大幅なハードウェアアップグレードは [DSO Quad](https://wiki.seeedstudio.com/ja/DSO_Quad) で導入されました。）V2 では充電ユニットの改良と PCB の再設計が行われましたが、仕様はほぼ同じです。同じファームウェアを使用することができます。

V2 の内部写真が [フォーラム](https://community.seeedstudio.com/discover.html?t=DSO) に投稿されています。

<table >
<tr>
<td> CPU
</td>
<td> ARM Cortex™-M3 (STM32F103VBT6)
</td></tr>
<tr>
<td> RAM
</td>
<td> 20k
</td></tr>
<tr>
<td> フラッシュ ROM
</td>
<td> 128k
</td></tr>
<tr>
<td> クロック周波数
</td>
<td> 72MHz
</td></tr>
<tr>
<td> ディスプレイ
</td>
<td> 2.8″ カラー TFT LCD
</td></tr>
<tr>
<td> ディスプレイ解像度
</td>
<td> 320×240
</td></tr>
<tr>
<td> ディスプレイカラー
</td>
<td> 65K
</td></tr>
<tr>
<td> USB 経由の PC 接続
</td>
<td> SD カードリーダーとして
</td></tr>
<tr>
<td> アップグレード
</td>
<td> USB 経由のブートローダーで
</td></tr>
<tr>
<td> 電源供給
</td>
<td> 3.7V 充電式リチウムバッテリー / USB (LTC4054 充電コントローラー)
</td></tr></table>

##   ファームウェアのアップグレード
---
お手元の DSO Nano が届くまでには時間がかかっています。そのため、すでに新しいバージョンのファームウェアが利用可能である可能性が高いです。

BenF による最新のファームウェアは [Tech Support](https://forum.seeedstudio.com/viewtopic.php?f=12&amp;t=1793)（このリンクは壊れています。ファームウェアをお探しの場合は [DSO Nano V3](https://wiki.seeedstudio.com/ja/DSO_Nano_v3/) の Wiki を参照してください）フォーラムから入手できます。ZIP ファイル内には、このファームウェアリリースの操作マニュアルも含まれています。

最新バージョンのファームウェアにアップグレードするには、以下のオプションがあります：

*   Windows を使用している場合は、公式の [v2 ユーザーマニュアル](https://files.seeedstudio.com/wiki/DSO_Nano/res/DSO%20Nano%20v2%20Manual.pdf)（8～10 ページ）に記載されている手順に従ってください。必要なユーティリティ DfuSeDemo.exe は [こちら](http://dsonano.googlecode.com/files/um0412.zip) から入手できます。
*   Linux および Mac OS X では [Dfu-util](https://wiki.seeedstudio.com/ja/Dfu-util)（0.5 以上）を使用できます。

## 機能
---
<table>
<tr>
<td> アナログ帯域幅
</td>
<td> 0 - 1MHz
</td></tr>
<tr>
<td> 最大サンプルレート
</td>
<td> 1Msps 12ビット
</td></tr>
<tr>
<td> サンプルメモリ深度
</td>
<td> 4096ポイント
</td></tr>
<tr>
<td> 水平感度
</td>
<td> 1μS/Div～10S/Div (1-2-5ステップ)
</td></tr>
<tr>
<td> 水平位置
</td>
<td> インジケータで調整可能
</td></tr>
<tr>
<td> 垂直感度
</td>
<td> 10mV/Div～10V/Div (×1プローブ使用時)
</td></tr>
<tr>
<td>
</td>
<td> 0.5V/Div～100V/Div (×10プローブ使用時)
</td></tr>
<tr>
<td> 垂直位置
</td>
<td> インジケータで調整可能
</td></tr>
<tr>
<td> 入力インピーダンス
</td>
<td> &gt;500KΩ
</td></tr>
<tr>
<td> 最大入力電圧
</td>
<td> 80Vpp (×1プローブ使用時)
</td></tr>
<tr>
<td> カップリング
</td>
<td> DC
</td></tr>
<tr>
<td> トリガーモード
</td>
<td> オート、ノーマル、シングル、なし、スキャン
</td></tr>
<tr>
<td> 機能:
</td>
<td> 自動測定: 周波数、周期、デューティ比、
</td></tr>
<tr>
<td>
</td>
<td> V<sub>pp</sub>, V<sub>ram</sub>, V<sub>avg</sub>、およびDC電圧
</td></tr>
<tr>
<td>
</td>
<td> マーカーによる正確な垂直測定
</td></tr>
<tr>
<td>
</td>
<td> マーカーによる正確な水平測定
</td></tr>
<tr>
<td>
</td>
<td> 立ち上がり/立ち下がりエッジトリガー
</td></tr>
<tr>
<td>
</td>
<td> トリガーレベルをインジケータで調整可能
</td></tr>
<tr>
<td>
</td>
<td> トリガー感度をインジケータで調整可能
</td></tr>
<tr>
<td>
</td>
<td> ホールド/ラン機能
</td></tr>
<tr>
<td> テスト信号
</td>
<td> 内蔵10Hz～1MHz (1-2-5ステップ)
</td></tr>
<tr>
<td> 波形保存
</td>
<td> SDカード
</td></tr>
<tr>
<td> USB経由でPC接続
</td>
<td> SDカードリーダーとして
</td></tr></table>

## リソース
---
*   [DSO Nanoフォーラム](https://community.seeedstudio.com/discover.html?t=DSO)を訪問して、迅速な技術サポートや使用に関する議論を行ってください。
*   [公式ファームウェア、回路図、開発ドキュメント](http://code.google.com/p/dsonano/)

*   [コミュニティファームウェアソースgitツリー](https://gitlab.com/dsonano/dso-firmware) (gccおよびIAR用)

*   [DSO Nano UIをMODする](https://files.seeedstudio.com/wiki/DSO_Nano/res/DSOUI.pdf)

*   [Sewa Mobil Jakarta](http://www.awanirentcar.com), [Aksesoris mobil](http://kiosauto.com)

## 技術サポートと製品に関する議論
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品をお選びいただきありがとうございます！お客様の製品体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>