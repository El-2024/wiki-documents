---
description: Seeed Studio XIAO nRF54L15 with PlatformIO
title: XIAO nRF54L15 with PlatformIO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/mg24_platform/top_mg24_platform02.webp
slug: /ja/xiao_nrf54l15_with_platform_io
last_update:
  date: 7/4/2025
  author: Jason
  sidebar_position: 5
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/
platformIO_nrf54l15.png" style={{width:600, height:'auto'}}/></div>

## PlatformIO 紹介

PlatformIOは、組み込みシステム向けに設計された強力で高度に拡張可能な開発エコシステムです。膨大な数の開発ボードとマイクロコントローラーのサポートをシームレスに統合し、比類のない柔軟性を提供します。PlatformIOの特徴は、その優れたスケーラビリティです：特定のボードがネイティブでサポートされていない場合でも、そのアーキテクチャにより簡単にカスタムボード定義を追加できます。

重要なことに、PlatformIOはArduinoに慣れ親しんだ開発者のギャップを埋め、関連するライブラリを含めるだけでArduinoスタイルのコードのコンパイルとデプロイを可能にします。このガイドでは、XIAO nRF54L15用のPlatformIOのセットアップ手順を説明し、サンプルコードのコンパイル、アップロード、モニタリング方法を実演して、複雑なZephyr RTOS開発を驚くほどアクセシブルにします。

## XIAO nRF54L15用のPlatformIOセットアップ

以下の合理化された手順に従って、開発環境を構成し、XIAO nRF54L15 Senseで最初のアプリケーションをデプロイしてください。


### VS Code用PlatformIO IDE拡張機能のインストール

まだインストールしていない場合は、Visual Studio Code内でPlatformIO IDE拡張機能を直接インストールしてください。この強力な拡張機能により、VS Codeが包括的な組み込み開発環境に変わります。

- VS Codeを開きます。

- 拡張機能ビュー（Ctrl+Shift+XまたはCmd+Shift+X）に移動します。

- ["PlatformIO IDE"](https://platformio.org/platformio-ide)を検索し、インストールをクリックします。


### 新しいPlatformIOプロジェクトの作成

ここでは、プロジェクトファイルを作成するために任意の開発バージョンを選択できます。例としてXIAO ESP32 C3を使用します。

<table align="center">
  <tr>
      <th>操作1</th>
        <th>操作2</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_platform/mg24patform2.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/mg24_platformIO.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
</table>

### XIAO nRF54L15 Zephyr サポート用の platformio.ini を設定する

プロジェクトが作成されたら、プロジェクトディレクトリのルートにある platformio.ini ファイルを見つけます（VS Code の左側のエクスプローラーで確認できます）。このファイルは PlatformIO プロジェクト設定の中核です。

<table align="center">
  <tr>
      <th>操作3</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/platform54.jpg"/></div>
  </tr>
</table>


platformio.ini ファイルの内容全体を以下の設定に置き換える必要があります：

```
[env:seeed-xiao-nrf54l15]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54l15
```

<table align="center">
  <tr>
      <th>操作4</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/platformiozephyr.jpg"/></div>
  </tr>
</table>


cMakeLists.txtの内容を以下の設定に置き換える必要があります
```
set(BOARD_ROOT "$ENV{ZEPHYR_BASE}/../../platforms/Seeed Studio/zephyr")
cmake_minimum_required(VERSION 3.13.1)

find_package(Zephyr REQUIRED HINTS $ENV{ZEPHYR_BASE})
project(blinky)

target_sources(app PRIVATE ../src/main.cpp) # If the main source file is.c, please change it to src/main.c
```

その後、platformio.iniファイルを再保存し（Ctrl+SまたはCmd+S）、完全に読み込まれるまで待ちます。

:::tip
以前に他のXIAOライブラリをダウンロードしたことがある場合は、platform.iniファイルを変更して必要なライブラリを再ダウンロードする前に、手動でそれらを削除する必要があります。
:::

Macパス：
`/Users/YourName/.platformio/platforms`

Windowパス：
`C:\Users\000.platformio\platforms\Seeed Studio`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/
platformmodify.jpg" style={{width:600, height:'auto'}}/></div>


### 最初のBlinkサンプルをコンパイルしてアップロード

それでは、クラシックな「Blink」サンプルでセットアップをテストしてみましょう。このコードは、XIAO nRF54L15の内蔵LEDを点滅させます。

src/main.cpp（またはsrc/main.c）ファイルの内容を、以下のZephyr対応Cコードに置き換えてください：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-blink" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />


**次に、このコードを使用してコンパイルと書き込みを行います**

```cpp
/*
 * Copyright (c) 2016 Intel Corporation
 *
 * SPDX-License-Identifier: Apache-2.0
 */

 #include <zephyr/kernel.h>
 #include <zephyr/device.h>
 #include <zephyr/drivers/gpio.h>
 #include <nrfx_power.h>
 
 /* 1000 msec = 1 sec */
 #define SLEEP_TIME_MS   1000
 
 /* The devicetree node identifier for the "led0" alias. */
 #define LED0_NODE DT_ALIAS(led0)
 
 static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
 
 int main(void)
 {
	 int ret;
	 bool led_is_on = true;
	nrfx_power_constlat_mode_request();
	 if (!gpio_is_ready_dt(&led)) {
		 return -1;
	 }
 
	 ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_ACTIVE);
	 if (ret < 0) {
		 return ret;
	 }
 
	 while (1) {
		 ret = gpio_pin_set_dt(&led, (int)led_is_on);
		 if (ret < 0) {
			 return ret;
		 }
		 led_is_on = !led_is_on;
		 k_msleep(SLEEP_TIME_MS);
	 }
 
	 return 0;
 }

```

次に、XIAO nRF54L15をUSB経由でコンピュータに接続します。VS Codeで：

- ビルド：VS Code下部のPlatformIOツールバーの「Build」アイコン（チェックマーク）をクリックするか、PlatformIOサイドバーを使用します：PROJECT TASKS -> your_project_name -> General -> Build。

- アップロード：ビルドが成功した後、PlatformIOツールバーの「Upload」アイコン（右矢印）をクリックするか、PlatformIOサイドバーを使用します：PROJECT TASKS -> your_project_name -> General -> Upload。


<table align="center">
  <tr>
      <th>操作5</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/blink.jpg" /></div>
  </tr>
</table>

ターミナルの出力は、コンパイルと書き込みプロセスが成功したことを示すはずです。


### 結果を確認する

アップロードが成功した後、XIAO nRF54L15の内蔵LEDが1秒間隔で点滅を開始するはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light.gif" style={{width:400, height:'auto'}}/></div>


## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
