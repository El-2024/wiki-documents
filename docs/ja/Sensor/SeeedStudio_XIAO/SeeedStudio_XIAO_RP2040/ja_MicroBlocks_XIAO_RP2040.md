---
description: XIAO RP2040をMicroBlocksで使用する。
title: MicroBlocks
image: https://files.seeedstudio.com/wiki/microblocks/microblocks.png
slug: /ja/xiao_rp2040_microblocks
last_update:
  date: 09/09/2025
  author: MicroBlocks
---

# XIAO RP2040をMicroBlocksで使用する


## MicroBlocks

MicroBlocksは、初心者（9歳から大人まで）がマイクロコントローラーを簡単にプログラミングできるブロック言語です。見た目のシンプルさにもかかわらず、MicroBlocksはMicroPythonよりも優れたパフォーマンスを持つ強力なプログラミング言語です。GPIOピンの制御やI2C、SPI、シリアル経由での周辺機器とのインターフェース機能、そして約200の拡張ライブラリを提供します。実際、一部のハードウェア設計者は、高速でインタラクティブな開発サイクルのため、ラピッドプロトタイピングやテストにMicroBlocksを好んで使用しています。

### XIAO RP2040のピン配置とハードウェア機能

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2040-overview.jpg" style={{width:600, height:'auto'}}/></div><br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2040-pinout.png" style={{width:700, height:'auto'}}/></div><br />

このボードには11個のGPIOピン（ピン0..10）があります。ピン0..3はアナログ入力として使用できます。
また、3つの小さなLEDがあります：赤（ピン11、ユーザーLED）、緑（ピン12）、青（ピン13）。
すべてのLEDは反転しています：LEDを点灯させるには、関連するピンをLOWに設定します。

このボードには、ピン14に単一のRGB LED（NeoPixel）もあります。

## MicroBlocksファームウェアのインストール

ブートローダーモードに入るには、R（リセット）ボタンをクリックしながらB（ブート）ボタンを押し続けます。
3つのLEDがすべて点灯し、**RPI-RP2**という名前の仮想USBドライブが表示されます。

[vmフォルダ](https://microblocks.fun/downloads/latest/vm)から[ファームウェアファイル](https://microblocks.fun/downloads/latest/vm/vm_xiao_rp2040.uf2)をダウンロードし、
そのファイルを仮想USBドライブにドラッグします。

ファームウェアがインストールされ、数秒後に仮想USBドライブが消えます。
ディスクが適切に取り出されなかったという警告は無視してください。

## ボードをMicroBlocksに接続する

データUSBケーブル（電源専用ケーブルでは**ない**）でボードをコンピューターに接続します。

ChromeまたはEdgeブラウザで[MicroBlocksエディター](https://microblocks.fun/run/microblocks.html)を実行します。
**connect**（プラグアイコン）ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-button.png" style={{width:200, height:'auto'}}/></div>

メニューから**connect (USB)**を選択します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-menu.png" style={{width:200, height:'auto'}}/></div>

ダイアログからボードを選択し、**connect**ボタンをクリックします：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connect-dialog-rp2040.png" style={{width:400, height:'auto'}}/></div>

ボードが接続されると、緑色の円とボード名が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/connected-rp2040.png" style={{width:200, height:'auto'}}/></div>

## MicroBlocksでのコーディング

MicroBlocksは**ライブ**コーディング環境なので、コーディングしながらテストできます。
ブロックやスクリプトをクリックして実行します。
ブロックをスクリプトペインにドラッグして組み立て、スクリプトを作成します。

コードは永続的なフラッシュメモリに保存され、ボードがMicroBlocksエディターに接続されていなくても実行できます。
**when started**ブロックの下にあるスクリプトは、ボードの電源が入ったときに実行されます。

MicroBlocksは並行処理をサポートしています。最大10個のスクリプトを同時に実行できます。

多くの組み込みブロックに加えて、MicroBlocksには追加機能や周辺機器をサポートする約200のライブラリがあります。
**Add Library**ボタンをクリックしてライブラリを追加します。

## 例

このスクリプトは、赤、青、緑のLEDを順番に点滅させます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-three-led-blink.png" style={{width:300, height:'auto'}}/></div>

このスクリプトは、RGB NeoPixelの色を変化させます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/microblocks/xiao-rp2040-neopixel.png" style={{width:300, height:'auto'}}/></div>

[ブロックリファレンス](https://wiki.microblocks.fun/en/reference_manual)には、さらに多くの例が含まれています。

## 特別な謝辞

この記事を執筆してくださったMicroBlocksのJohnさんに特別な感謝を申し上げます。

## MicroBlocksリソース

- [ウェブサイト](https://microblocks.fun)

- [ユーザーガイド](https://wiki.microblocks.fun/en/ide)

- [ブロックリファレンス](https://wiki.microblocks.fun/en/reference_manual)

- [ライブラリリファレンス](https://wiki.microblocks.fun/en/libraries)

- [学習ガイド](https://learn.microblocks.fun)