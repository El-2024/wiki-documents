---
description: この記事では、reTerminal E シリーズ ePaper ディスプレイを Arduino で動作させる方法について説明します。
title: reTerminal E シリーズ ePaper ディスプレイを Arduino で動作させる
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /ja/reterminal_e10xx_with_arduino
sidebar_position: 4
last_update:
  date: 08/21/2025
  author: Allen
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Arduino での reTerminal E シリーズ ePaper ディスプレイの使用開始

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/147.png" style={{width:800, height:'auto'}}/></div>

## はじめに

reTerminal E シリーズは、ESP32-S3 をメインコントローラーとし、統合された ePaper ディスプレイを特徴とする、Seeed Studio の産業用 HMI ソリューションの最新の進歩を表しています。このガイドでは、Arduino IDE を使用して reTerminal E シリーズデバイスの ePaper ディスプレイをプログラミングし、優れた視認性と超低消費電力でカスタムインターフェースとアプリケーションを作成する方法を説明します。

### 必要な材料

このチュートリアルを完了するには、以下の reTerminal E シリーズデバイスのいずれかを準備してください：

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### 環境準備

reTerminal E シリーズ ePaper ディスプレイを Arduino でプログラミングするには、ESP32 サポート付きの Arduino IDE をセットアップする必要があります。

:::tip
Arduino を初めて使用する場合は、[Arduino の使用開始](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

#### Arduino IDE セットアップ

**ステップ 1.** [Arduino IDE](https://www.arduino.cc/en/software) をダウンロードしてインストールし、Arduino アプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div><br />

**ステップ 2.** Arduino IDE に ESP32 ボードサポートを追加します。

Arduino IDE で、**ファイル > 環境設定** に移動し、「追加のボードマネージャーの URL」フィールドに以下の URL を追加します：

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**ステップ 3.** ESP32 ボードパッケージをインストールします。

**ツール > ボード > ボードマネージャー** に移動し、「esp32」を検索して、Espressif Systems による ESP32 パッケージをインストールします。

**ステップ 4.** 正しいボードを選択します。

**ツール > ボード > ESP32 Arduino** に移動し、**XIAO_ESP32S3** を選択します。

**ステップ 5.** USB-C ケーブルを使用して reTerminal E シリーズ ePaper ディスプレイをコンピューターに接続します。

**ステップ 6.** **ツール > ポート** から正しいポートを選択します。

## ePaper ディスプレイプログラミング

**reTerminal E1001 は 7.5 インチの白黒 ePaper ディスプレイを搭載**し、**reTerminal E1002 は 7.3 インチのフルカラー ePaper ディスプレイを搭載**しています。両方のディスプレイは、さまざまな照明条件で優れた視認性と超低消費電力を提供し、最小限の電力使用で常時表示が必要な産業用アプリケーションに最適です。

### Seeed_GFX ライブラリの使用

ePaper ディスプレイを制御するために、さまざまな Seeed Studio ディスプレイデバイスの包括的なサポートを提供する Seeed_GFX ライブラリを使用します。

**ステップ 1.** GitHub から Seeed_GFX ライブラリをダウンロードします：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**ステップ 2.** Arduino IDE で ZIP ファイルを追加してライブラリをインストールします。**スケッチ > ライブラリをインクルード > .ZIP 形式のライブラリをインストール** に移動し、ダウンロードした ZIP ファイルを選択します。

:::note
以前に TFT_eSPI ライブラリをインストールしている場合は、競合を避けるために Arduino ライブラリフォルダから一時的に削除または名前を変更する必要がある場合があります。Seeed_GFX は TFT_eSPI のフォークで、Seeed Studio ディスプレイ用の追加機能があります。
:::

<Tabs>
<TabItem value="Programming reTerminal E1001" label="reTerminal E1001 のプログラミング" default>

#### reTerminal E1001 のプログラミング（7.5 インチ白黒 ePaper）

白黒 ePaper ディスプレイでの基本的な描画操作を実演する簡単な例を見てみましょう。

**ステップ 1.** Seeed_GFX ライブラリからサンプルスケッチを開きます：**ファイル > スケッチ例 > Seeed_GFX > ePaper > Basic > HelloWorld**

**ステップ 2.** スケッチと同じフォルダに `driver.h` という名前の新しいファイルを作成します。Arduino IDE の矢印ボタンをクリックして「新しいタブ」を選択し、`driver.h` と名前を付けることでこれを行うことができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select.jpg" style={{width:1000, height:'auto'}}/></div>

**ステップ 3.** [Seeed GFX 設定ツール](https://seeed-studio.github.io/Seeed_GFX/)に移動し、デバイスリストから **reTerminal E1001** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:900, height:'auto'}}/></div>

**ステップ 4.** 生成された設定コードをコピーして、`driver.h` ファイルに貼り付けます。コードは次のようになります：

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 (UC8179)
```

**ステップ 5.** スケッチを reTerminal E1001 にアップロードします。基本的な描画機能を実演する線、テキスト、図形を含むさまざまなグラフィックスがディスプレイに表示されるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/148.jpg" style={{width:500, height:'auto'}}/></div>

</TabItem>
<TabItem value="Programming reTerminal E1002" label="reTerminal E1002 のプログラミング">

#### reTerminal E1002 のプログラミング（7.3 インチフルカラー ePaper）

フルカラー ePaper ディスプレイは赤、黒、白の色をサポートし、より視覚的に豊かなインターフェースを可能にします。

**ステップ 1.** Seeed_GFX ライブラリからカラーサンプルスケッチを開きます：**ファイル > スケッチ例 > Seeed_GFX > ePaper > Colorful > HelloWorld**

**ステップ 2.** 前と同じプロセスに従って、スケッチと同じフォルダに `driver.h` という名前の新しいファイルを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select2.jpg" style={{width:1000, height:'auto'}}/></div>

**ステップ 3.** [Seeed GFX 設定ツール](https://seeed-studio.github.io/Seeed_GFX/)に移動し、デバイスリストから **reTerminal E1002** を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx2.jpg" style={{width:900, height:'auto'}}/></div>

**ステップ 4.** 生成された設定コードをコピーして、`driver.h` ファイルに貼り付けます。コードは次のようになります：

```cpp
#define BOARD_SCREEN_COMBO 521 // reTerminal E1002 (UC8179C)
```

**ステップ 5.** スケッチを reTerminal E1002 にアップロードします。ディスプレイには ePaper ディスプレイのフルカラー機能を実演するカラフルなグラフィックスが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/149.jpg" style={{width:500, height:'auto'}}/></div>

</TabItem>
</Tabs>

### GxEPD2 ライブラリの使用

Seeed_GFX の他に、`GxEPD2` ライブラリを使用して reTerminal の ePaper ディスプレイを駆動することもできます。`GxEPD2` は、幅広い e-paper ディスプレイをサポートする強力で人気のあるライブラリです。

**GxEPD2 ライブラリのインストール**

最新の機能とデバイスサポートを確実に利用するために、GitHub リポジトリから `GxEPD2` ライブラリを手動でインストールするのが最適です。

**ステップ 1.** GxEPD2 GitHub リポジトリに移動します。「Code」ボタンをクリックし、「Download ZIP」を選択してライブラリをコンピューターに保存します。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/ZinggJM/GxEPD2" target="_blank" rel="noopener noreferrer">

    <strong><span><font color={'FFFFFF'} size={"4"}>ライブラリをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**ステップ 2.** Arduino IDEで、ダウンロードしたファイルからライブラリをインストールします。**スケッチ > ライブラリをインクルード > .ZIP形式のライブラリをインストール...** に移動し、先ほどダウンロードしたZIPファイルを選択します。

**ステップ 3.** `GxEPD2`ライブラリが機能するには`Adafruit GFX Library`が必要で、これもインストールする必要があります。最も簡単な方法はライブラリマネージャーを使用することです：**ツール > ライブラリを管理...** に移動し、「Adafruit GFX Library」を検索して「インストール」をクリックします。

:::note
`GxEPD2`は便宜上Arduino Library Managerで利用できますが、そこにあるバージョンは古い場合があります。GitHubリポジトリは最新バージョンの決定的なソースであり、最新の機能、バグ修正、最新のe-paperディスプレイのサポートが含まれています。したがって、最新のコードを確実に入手するために、GitHubから直接ライブラリをダウンロードすることが推奨されるアプローチです。
:::

<Tabs>
<TabItem value="Programming reTerminal E1001 GxEPD2" label="Programming reTerminal E1001" default>

#### reTerminal E1001のプログラミング（白黒画面）

以下は、`GxEPD2`ライブラリを使用してreTerminal E1001の白黒ePaperディスプレイに「Hello World!」を表示するサンプルコードです。E1001用のドライバーを選択するために`EPD_SELECT`を`0`に設定します。

```cpp
#include <GxEPD2_BW.h>
#include <GxEPD2_7C.h>
#include <Fonts/FreeMonoBold9pt7b.h>

// Define ePaper SPI pins
#define EPD_SCK_PIN  7
#define EPD_MOSI_PIN 9
#define EPD_CS_PIN   10
#define EPD_DC_PIN   11
#define EPD_RES_PIN  12
#define EPD_BUSY_PIN 13

// Select the ePaper driver to use
// 0: reTerminal E1001 (7.5'' B&W)
// 1: reTerminal E1002 (7.3'' Color)
#define EPD_SELECT 0

#if (EPD_SELECT == 0)
#define GxEPD2_DISPLAY_CLASS GxEPD2_BW
#define GxEPD2_DRIVER_CLASS GxEPD2_750_GDEY075T7 // 7.5'' B&W driver
#elif (EPD_SELECT == 1)
#define GxEPD2_DISPLAY_CLASS GxEPD2_7C
#define GxEPD2_DRIVER_CLASS GxEPD2_730c_GDEP073E01 // 7.3'' Color driver
#endif

#define MAX_DISPLAY_BUFFER_SIZE 16000

#define MAX_HEIGHT(EPD)                                        \
    (EPD::HEIGHT <= MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8) \
         ? EPD::HEIGHT                                         \
         : MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8))

// Initialize display object
GxEPD2_DISPLAY_CLASS<GxEPD2_DRIVER_CLASS, MAX_HEIGHT(GxEPD2_DRIVER_CLASS)>
    display(GxEPD2_DRIVER_CLASS(/*CS=*/EPD_CS_PIN, /*DC=*/EPD_DC_PIN,
                                /*RST=*/EPD_RES_PIN, /*BUSY=*/EPD_BUSY_PIN));

SPIClass hspi(HSPI);

void setup()
{
  pinMode(EPD_RES_PIN, OUTPUT);
  pinMode(EPD_DC_PIN, OUTPUT);
  pinMode(EPD_CS_PIN, OUTPUT);

  // Initialize SPI
  hspi.begin(EPD_SCK_PIN, -1, EPD_MOSI_PIN, -1);
  display.epd2.selectSPI(hspi, SPISettings(2000000, MSBFIRST, SPI_MODE0));

  // Initialize display
  display.init(0);
  helloWorld();
}

const char HelloWorld[] = "Hello World!";

void helloWorld()
{
  display.setRotation(0);
  display.setFont(&FreeMonoBold9pt7b);
  display.setTextColor(GxEPD_BLACK);
  int16_t tbx, tby; uint16_t tbw, tbh;
  display.getTextBounds(HelloWorld, 0, 0, &tbx, &tby, &tbw, &tbh);

  // center the bounding box by transposition of the origin:
  uint16_t x = ((display.width() - tbw) / 2) - tbx;
  uint16_t y = ((display.height() - tbh) / 2) - tby;

  display.setFullWindow();
  display.firstPage();
  do
  {
    display.fillScreen(GxEPD_WHITE);
    display.setCursor(x, y);
    display.print(HelloWorld);
  }
  while (display.nextPage());
}

void loop() {};
```

</TabItem>
<TabItem value="Programming reTerminal E1002 GxEPD2" label="Programming reTerminal E1002">

#### reTerminal E1002のプログラミング（フルカラー画面）

reTerminal E1002の場合、`EPD_SELECT`の値を`1`に変更するだけです。これにより、7.3インチフルカラーePaperディスプレイ用の適切なドライバーが選択されます。コードの残りの部分は同じです。

```cpp
#include <GxEPD2_BW.h>
#include <GxEPD2_7C.h>
#include <Fonts/FreeMonoBold9pt7b.h>

// Define ePaper SPI pins
#define EPD_SCK_PIN  7
#define EPD_MOSI_PIN 9
#define EPD_CS_PIN   10
#define EPD_DC_PIN   11
#define EPD_RES_PIN  12
#define EPD_BUSY_PIN 13

// Select the ePaper driver to use
// 0: reTerminal E1001 (7.5'' B&W)
// 1: reTerminal E1002 (7.3'' Color)
#define EPD_SELECT 1

#if (EPD_SELECT == 0)
#define GxEPD2_DISPLAY_CLASS GxEPD2_BW
#define GxEPD2_DRIVER_CLASS GxEPD2_750_GDEY075T7 // 7.5'' B&W driver
#elif (EPD_SELECT == 1)
#define GxEPD2_DISPLAY_CLASS GxEPD2_7C
#define GxEPD2_DRIVER_CLASS GxEPD2_730c_GDEP073E01 // 7.3'' Color driver
#endif

#define MAX_DISPLAY_BUFFER_SIZE 16000

#define MAX_HEIGHT(EPD)                                        \
    (EPD::HEIGHT <= MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8) \
         ? EPD::HEIGHT                                         \
         : MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8))

// Initialize display object
GxEPD2_DISPLAY_CLASS<GxEPD2_DRIVER_CLASS, MAX_HEIGHT(GxEPD2_DRIVER_CLASS)>
    display(GxEPD2_DRIVER_CLASS(/*CS=*/EPD_CS_PIN, /*DC=*/EPD_DC_PIN,
                                /*RST=*/EPD_RES_PIN, /*BUSY=*/EPD_BUSY_PIN));

SPIClass hspi(HSPI);

void setup()
{
  pinMode(EPD_RES_PIN, OUTPUT);
  pinMode(EPD_DC_PIN, OUTPUT);
  pinMode(EPD_CS_PIN, OUTPUT);

  // Initialize SPI
  hspi.begin(EPD_SCK_PIN, -1, EPD_MOSI_PIN, -1);
  display.epd2.selectSPI(hspi, SPISettings(2000000, MSBFIRST, SPI_MODE0));

  // Initialize display
  display.init(0);
  helloWorld();
}

const char HelloWorld[] = "Hello World!";

void helloWorld()
{
  display.setRotation(0);
  display.setFont(&FreeMonoBold9pt7b);
  // For the color screen, you can set different colors, e.g., GxEPD_BLACK, GxEPD_RED
  display.setTextColor(GxEPD_GREEN);
  int16_t tbx, tby; uint16_t tbw, tbh;
  display.getTextBounds(HelloWorld, 0, 0, &tbx, &tby, &tbw, &tbh);

  // center the bounding box by transposition of the origin:
  uint16_t x = ((display.width() - tbw) / 2) - tbx;
  uint16_t y = ((display.height() - tbh) / 2) - tby;

  display.setFullWindow();
  display.firstPage();
  do
  {
    display.fillScreen(GxEPD_WHITE);
    display.setCursor(x, y);
    display.print(HelloWorld);
  }
  while (display.nextPage());
}

void loop() {};
```

</TabItem>
</Tabs>

:::note
ePaperディスプレイは比較的遅いリフレッシュレート（フルリフレッシュで通常1〜3秒）を持ちます。これは正常な動作であり、超低消費電力とバックライトなしでの優れた視認性とのトレードオフです。
:::

## reTerminalハードウェアの使用ルーチン

それでは、Arduinoコードの例を使ってreTerminal Eシリーズの主要機能を探ってみましょう。

### LED制御

reTerminal EシリーズにはGPIO6経由で制御できるオンボードLEDがあります。LEDロジックは反転していることに注意してください（LOW = ON、HIGH = OFF）。

```cpp
// reTerminal E Series - LED Control Example

#define SERIAL_RX 44
#define SERIAL_TX 43
#define LED_PIN 6  // GPIO6 - Onboard LED (inverted logic)

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("LED Control Example");

  // Configure LED pin
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  // Turn LED ON (LOW because it's inverted)
  digitalWrite(LED_PIN, LOW);
  Serial1.println("LED ON");
  delay(1000);

  // Turn LED OFF (HIGH because it's inverted)
  digitalWrite(LED_PIN, HIGH);
  Serial1.println("LED OFF");
  delay(1000);
}
```

### ブザー制御

reTerminal EシリーズにはGPIO7にブザーが含まれており、さまざまなトーンやアラート音を生成できます。

```cpp
// reTerminal E Series - Buzzer Control Example

#define SERIAL_RX 44
#define SERIAL_TX 43
#define BUZZER_PIN 45  // GPIO45 - Buzzer

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("Buzzer Control Example");
}

void loop() {
  Serial1.println("Simple beep");
  tone(BUZZER_PIN, 1000, 100);  // 1kHz for 100ms
  delay(1000);

  Serial1.println("Double beep");
  for (int i = 0; i < 2; i++) {
    tone(BUZZER_PIN, 2000, 50);  // 2kHz for 50ms
    delay(100);
  }
  delay(900);

  Serial1.println("Long beep");
  tone(BUZZER_PIN, 800, 500);  // 800Hz for 500ms
  delay(1500);

  Serial1.println("Alarm sound");
  for (int i = 0; i < 5; i++) {
    tone(BUZZER_PIN, 1500, 100);
    delay(100);
    tone(BUZZER_PIN, 1000, 100);
    delay(100);
  }
  delay(2000);
}
```

**トーン付きブザー**

```cpp
#define SERIAL_RX 44
#define SERIAL_TX 43
#define BUZZER_PIN 45  // GPIO7 - Buzzer

// Reference:  This list was adapted from the table located here:
//    http://www.phy.mtu.edu/~suits/notefreqs.html
#define  NOTE_C0  16.35  //C0
#define  NOTE_Db0 17.32  //C#0/Db0
#define  NOTE_D0  18.35  //D0
#define  NOTE_Eb0 19.45 //D#0/Eb0
#define  NOTE_E0  20.6  //E0
#define  NOTE_F0  21.83  //F0
#define  NOTE_Gb0 23.12  //F#0/Gb0
#define  NOTE_G0  24.5  //G0
#define  NOTE_Ab0 25.96  //G#0/Ab0
#define  NOTE_A0  27.5  //A0
#define  NOTE_Bb0 29.14  //A#0/Bb0
#define  NOTE_B0  30.87  //B0
#define  NOTE_C1  32.7  //C1
#define  NOTE_Db1 34.65  //C#1/Db1
#define  NOTE_D1  36.71  //D1
#define  NOTE_Eb1 38.89  //D#1/Eb1
#define  NOTE_E1  41.2  //E1
#define  NOTE_F1  43.65  //F1
#define  NOTE_Gb1 46.25  //F#1/Gb1
#define  NOTE_G1  49 //G1
#define  NOTE_Ab1 51.91  //G#1/Ab1
#define  NOTE_A1  55  //A1
#define  NOTE_Bb1 58.27  //A#1/Bb1
#define  NOTE_B1  61.74  //B1
#define  NOTE_C2  65.41  //C2 (Middle C)
#define  NOTE_Db2 69.3  //C#2/Db2
#define  NOTE_D2  73.42  //D2
#define  NOTE_Eb2 77.78  //D#2/Eb2
#define  NOTE_E2  82.41  //E2
#define  NOTE_F2  87.31  //F2
#define  NOTE_Gb2 92.5  //F#2/Gb2
#define  NOTE_G2  98  //G2
#define  NOTE_Ab2 103.83  //G#2/Ab2
#define  NOTE_A2  110  //A2
#define  NOTE_Bb2 116.54  //A#2/Bb2
#define  NOTE_B2  123.47  //B2
#define  NOTE_C3  130.81  //C3
#define  NOTE_Db3 138.59  //C#3/Db3
#define  NOTE_D3  146.83  //D3
#define  NOTE_Eb3 155.56  //D#3/Eb3
#define  NOTE_E3  164.81  //E3
#define  NOTE_F3  174.61  //F3
#define  NOTE_Gb3 185  //F#3/Gb3
#define  NOTE_G3  196  //G3
#define  NOTE_Ab3 207.65  //G#3/Ab3
#define  NOTE_A3  220  //A3
#define  NOTE_Bb3 233.08  //A#3/Bb3
#define  NOTE_B3  246.94  //B3
#define  NOTE_C4  261.63  //C4
#define  NOTE_Db4 277.18  //C#4/Db4
#define  NOTE_D4  293.66  //D4
#define  NOTE_Eb4 311.13  //D#4/Eb4
#define  NOTE_E4  329.63  //E4
#define  NOTE_F4  349.23  //F4
#define  NOTE_Gb4 369.99  //F#4/Gb4
#define  NOTE_G4  392  //G4
#define  NOTE_Ab4 415.3  //G#4/Ab4
#define  NOTE_A4  440  //A4
#define  NOTE_Bb4 466.16  //A#4/Bb4
#define  NOTE_B4  493.88  //B4
#define  NOTE_C5  523.25  //C5
#define  NOTE_Db5 554.37  //C#5/Db5
#define  NOTE_D5  587.33  //D5
#define  NOTE_Eb5 622.25  //D#5/Eb5
#define  NOTE_E5  659.26  //E5
#define  NOTE_F5  698.46  //F5
#define  NOTE_Gb5 739.99  //F#5/Gb5
#define  NOTE_G5  783.99  //G5
#define  NOTE_Ab5 830.61  //G#5/Ab5
#define  NOTE_A5  880  //A5
#define  NOTE_Bb5 932.33  //A#5/Bb5
#define  NOTE_B5  987.77  //B5
#define  NOTE_C6  1046.5  //C6
#define  NOTE_Db6 1108.73  //C#6/Db6
#define  NOTE_D6  1174.66  //D6
#define  NOTE_Eb6 1244.51  //D#6/Eb6
#define  NOTE_E6  1318.51  //E6
#define  NOTE_F6  1396.91  //F6
#define  NOTE_Gb6 1479.98  //F#6/Gb6
#define  NOTE_G6  1567.98  //G6
#define  NOTE_Ab6 1661.22  //G#6/Ab6
#define  NOTE_A6  1760  //A6
#define  NOTE_Bb6 1864.66  //A#6/Bb6
#define  NOTE_B6  1975.53  //B6
#define  NOTE_C7  2093  //C7
#define  NOTE_Db7 2217.46  //C#7/Db7
#define  NOTE_D7  2349.32  //D7
#define  NOTE_Eb7 2489.02  //D#7/Eb7
#define  NOTE_E7  2637.02  //E7
#define  NOTE_F7  2793.83  //F7
#define  NOTE_Gb7 2959.96  //F#7/Gb7
#define  NOTE_G7  3135.96  //G7
#define  NOTE_Ab7 3322.44  //G#7/Ab7
#define  NOTE_A7  3520  //A7
#define  NOTE_Bb7 3729.31  //A#7/Bb7
#define  NOTE_B7  3951.07  //B7
#define  NOTE_C8  4186.01  //C8
#define  NOTE_Db8 4434.92  //C#8/Db8
#define  NOTE_D8  4698.64  //D8
#define  NOTE_Eb8 4978.03  //D#8/Eb8

void buzzer_tone (float noteFrequency, long noteDuration, int silentDuration){
  if(silentDuration==0) {silentDuration=1;}

  tone(BUZZER_PIN, noteFrequency, noteDuration);
  delay(noteDuration);     // milliseconds
  noTone(BUZZER_PIN);      // stop the tone

  delay(silentDuration);
}

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("Buzzer Control Example");

  // Configure buzzer pin
  pinMode(BUZZER_PIN, OUTPUT);
}

void loop() {
  buzzer_tone(NOTE_C5, 80, 20);
  buzzer_tone(NOTE_E5, 80, 20);
  buzzer_tone(NOTE_G5, 80, 20);
  buzzer_tone(NOTE_C6, 150, 0);
  delay(30000);
}

```

**Buzzer Functions:**

- `digitalWrite()`: Simple ON/OFF control for basic beeps
- `tone(pin, frequency, duration)`: Generate specific frequencies for melodies or alerts
- `noTone(pin)`: Stop tone generation

**Common Alert Patterns:**

- Single beep: Confirmation
- Double beep: Warning
- Triple beep: Error
- Continuous: Critical alert

### User Buttons

The reTerminal E Series features three user-programmable buttons that can be used for various control purposes. This section demonstrates how to read button states and respond to button presses using Arduino.

The reTerminal E Series has three buttons connected to the ESP32-S3:

- **KEY0** (GPIO3): Right button (Green Button)
- **KEY1** (GPIO4): Middle button
- **KEY2** (GPIO5): Left button

All buttons are active-low, meaning they read LOW when pressed and HIGH when released.

#### Basic Button Reading Example

This example demonstrates how to detect button presses and print messages to the serial monitor.

```cpp
// reTerminal E Series - ボタンテスト
// ハードウェア回路図に基づく

// 回路図に従ってボタンピンを定義
const int BUTTON_KEY0 = 3;   // KEY0 - GPIO3
const int BUTTON_KEY1 = 4;   // KEY1 - GPIO4
const int BUTTON_KEY2 = 5;   // KEY2 - GPIO5

// ボタン状態変数
bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

void setup() {
  // シリアル通信を初期化
  Serial1.begin(115200, SERIAL_8N1, 44, 43);
  while (!Serial1) {
    delay(10); // シリアルポートの接続を待機
  }

  Serial1.println("=================================");
  Serial1.println("reTerminal E Series - ボタンテスト");
  Serial1.println("=================================");
  Serial1.println("任意のボタンを押して出力を確認してください");
  Serial1.println();

  // ボタンピンを入力として設定
  // ハードウェアには既にプルアップ抵抗があるため、INPUTモードを使用
  pinMode(BUTTON_KEY0, INPUT);
  pinMode(BUTTON_KEY1, INPUT);
  pinMode(BUTTON_KEY2, INPUT);

  // 初期状態を読み取り
  lastKey0State = digitalRead(BUTTON_KEY0);
  lastKey1State = digitalRead(BUTTON_KEY1);
  lastKey2State = digitalRead(BUTTON_KEY2);

  Serial1.println("セットアップ完了。ボタン押下の検出準備完了...");
}

void loop() {
  // 現在のボタン状態を読み取り
  bool key0State = digitalRead(BUTTON_KEY0);
  bool key1State = digitalRead(BUTTON_KEY1);
  bool key2State = digitalRead(BUTTON_KEY2);

  // KEY0をチェック
  if (key0State != lastKey0State) {
    if (key0State == LOW) {
      Serial1.println("KEY0 (GPIO3) が押されました！");
    } else {
      Serial1.println("KEY0 (GPIO3) が離されました！");
    }
    lastKey0State = key0State;
    delay(50); // デバウンス遅延
  }

  // KEY1をチェック
  if (key1State != lastKey1State) {
    if (key1State == LOW) {
      Serial1.println("KEY1 (GPIO4) が押されました！");
    } else {
      Serial1.println("KEY1 (GPIO4) が離されました！");
    }
    lastKey1State = key1State;
    delay(50); // デバウンス遅延
  }

  // KEY2をチェック
  if (key2State != lastKey2State) {
    if (key2State == LOW) {
      Serial1.println("KEY2 (GPIO5) が押されました！");
    } else {
      Serial1.println("KEY2 (GPIO5) が離されました！");
    }
    lastKey2State = key2State;
    delay(50); // デバウンス遅延
  }

  delay(10); // CPU使用率の過度な上昇を防ぐための小さな遅延
}
```

**How the Code Works:**

1. **Pin Definition**: We define constants for each button's GPIO pin number.

2. **Pin Configuration**: In `setup()`, we configure each button pin as `INPUT`.

3. **Button Detection**: In `loop()`, we continuously check each button's state using `digitalRead()`. When a button is pressed, the pin reads LOW.

4. **Debouncing**: A simple 200ms delay after each button press prevents multiple detections from a single press due to mechanical bounce.

5. **Serial Output**: Each button press triggers a message to the serial monitor for debugging and verification.

---

**Step 1.** Upload the code to your reTerminal E Series device.

**Step 2.** Open the Serial Monitor in Arduino IDE (Tools > Serial Monitor).

**Step 3.** Set the baud rate to 115200.

**Step 4.** Press each button and observe the output in the Serial Monitor.

Expected output when pressing buttons:

```
=================================
reTerminal E Series - ボタンテスト
=================================
任意のボタンを押して出力を確認してください

KEY0 (GPIO3) が押されました！
KEY0 (GPIO3) が離されました！
KEY1 (GPIO4) が押されました！
KEY1 (GPIO4) が離されました！
KEY2 (GPIO5) が押されました！
KEY2 (GPIO5) が離されました！
```

### Environmental Sensor (SHT4x)

The reTerminal E Series includes an integrated SHT4x temperature and humidity sensor connected via I2C.

#### Installing Required Libraries

Install two libraries via Arduino Library Manager (**Tools > Manage Libraries...**):

1. Search and install "**Sensirion I2C SHT4x**"
2. Search and install "**Sensirion Core**" (dependency)

#### Basic Temperature and Humidity Example

```cpp
// reTerminal E Series - SHT40 温度・湿度センサーの例

#include <Wire.h>
#include <SensirionI2cSht4x.h>

// reTerminal E Series のシリアル設定
#define SERIAL_RX 44
#define SERIAL_TX 43

// reTerminal E Series の I2C ピン
#define I2C_SDA 19
#define I2C_SCL 20

// センサーオブジェクトを作成
SensirionI2cSht4x sht4x;

void setup() {
    // reTerminal E Series 用に Serial1 を初期化
    Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
    while (!Serial1) {
        delay(10);
    }

    Serial1.println("SHT4x 基本例");

    // カスタムピンで I2C を初期化
    Wire.begin(I2C_SDA, I2C_SCL);

    uint16_t error;
    char errorMessage[256];

    // センサーを初期化
    sht4x.begin(Wire, 0x44);

    // シリアル番号を読み取って印刷
    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);

    if (error) {
        Serial1.print("serialNumber() の実行中にエラーが発生しました: ");
        errorToString(error, errorMessage, 256);
        Serial1.println(errorMessage);
    } else {
        Serial1.print("シリアル番号: ");
        Serial1.println(serialNumber);
        Serial1.println();
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(5000);  // 測定間隔を5秒待機

    float temperature;
    float humidity;

    // 高精度で温度と湿度を測定
    error = sht4x.measureHighPrecision(temperature, humidity);

    if (error) {
        Serial1.print("measureHighPrecision() の実行中にエラーが発生しました: ");
        errorToString(error, errorMessage, 256);
        Serial1.println(errorMessage);
    } else {
        Serial1.print("温度: ");
        Serial1.print(temperature);
        Serial1.print("°C\t");
        Serial1.print("湿度: ");
        Serial1.print(humidity);
        Serial1.println("%");
    }
}
```

**Setup Function:**

1. **Serial Initialization**: Uses `Serial1` with pins 44 (RX) and 43 (TX) specific to reTerminal E Series
2. **I2C Initialization**: Configures I2C with pins 19 (SDA) and 20 (SCL)
3. **Sensor Initialization**: Calls `sht4x.begin(Wire, 0x44)` to initialize the SHT4x sensor at address 0x44
4. **Serial Number Reading**: Reads and displays the sensor's unique serial number for verification

**Loop Function:**

1. **Delay**: Waits 5 seconds between measurements to avoid oversampling
2. **Measurement**: Uses `measureHighPrecision()` for accurate readings (takes ~8.3ms)
3. **Error Handling**: Checks for errors and converts them to readable messages using `errorToString()`
4. **Display Results**: Prints temperature in Celsius and relative humidity percentage

**Expected Output**

```
SHT4x 基本例
シリアル番号: 331937553

温度: 27.39°C 湿度: 53.68%
温度: 27.40°C 湿度: 53.51%
温度: 27.38°C 湿度: 53.37%
```

### Battery Management System

The reTerminal E Series includes battery voltage monitoring capability through an ADC pin with voltage divider circuit.

#### Simple Battery Voltage Monitoring

```cpp
// reTerminal E Series - シンプルなバッテリー電圧読み取り

// シリアル設定
#define SERIAL_RX 44
#define SERIAL_TX 43

// バッテリー監視ピン
#define BATTERY_ADC_PIN 1      // GPIO1 - バッテリー電圧 ADC
#define BATTERY_ENABLE_PIN 21  // GPIO21 - バッテリー監視有効化

void setup() {
  // シリアルを初期化
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("バッテリー電圧モニター");

  // バッテリー監視有効化ピンを設定
  pinMode(BATTERY_ENABLE_PIN, OUTPUT);
  digitalWrite(BATTERY_ENABLE_PIN, HIGH);  // バッテリー監視を有効化

  // ADC を設定
  analogReadResolution(12);  // 12ビット解像度
  analogSetPinAttenuation(BATTERY_ADC_PIN, ADC_11db);

  delay(100);  // 回路の安定化を待機
}

void loop() {
  // バッテリー監視を有効化
  digitalWrite(BATTERY_ENABLE_PIN, HIGH);
  delay(5);

  // 電圧をミリボルト単位で読み取り
  int mv = analogReadMilliVolts(BATTERY_ADC_PIN);

  // バッテリー監視を無効化
  digitalWrite(BATTERY_ENABLE_PIN, LOW);

  // 実際のバッテリー電圧を計算（分圧回路により2倍）
  float batteryVoltage = (mv / 1000.0) * 2;

  // 電圧を印刷
  Serial1.print("バッテリー: ");
  Serial1.print(batteryVoltage, 2);
  Serial1.println(" V");

  delay(2000);
}
```

**Code Explanation:**

- GPIO1 reads the divided battery voltage through ADC
- GPIO21 enables the battery monitoring circuit
- The actual battery voltage is twice the measured voltage due to the voltage divider
- For a fully charged LiPo battery, expect around 4.2V
- When battery is low, voltage drops to around 3.3V

**Expected Output**

```
バッテリー電圧モニター

バッテリー: 4.18 V
バッテリー: 4.19 V
バッテリー: 4.18 V
```

### Using the MicroSD Card

For applications requiring additional storage, such as a digital photo frame or data logging, the reTerminal E Series includes a MicroSD card slot.

Insert a microSD card if you plan to use the device as a digital photo frame or need additional storage.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
The reTerminal E Series only supports MicroSD cards up to 64GB formatted with the **Fat32** file system.
:::

#### Basic SD Card Operations: Listing Files

This example demonstrates how to initialize the SD card, detect when it is inserted or removed, and list all the files and directories in its root. The code is identical for both the **reTerminal E1001** and **reTerminal E1002**.


以下のコードをArduino IDEスケッチにコピーしてください。

```cpp
#include <SD.h>
#include <SPI.h>

// SD Card Pin Definitions
#define SD_EN_PIN   16  // Power enable for the SD card slot
#define SD_DET_PIN  15  // Card detection pin
#define SD_CS_PIN   14  // Chip Select for the SD card
#define SD_MOSI_PIN 9   // Shared with ePaper Display
#define SD_MISO_PIN 8
#define SD_SCK_PIN  7   // Shared with ePaper Display

// Serial configuration for reTerminal E Series
#define SERIAL_RX 44
#define SERIAL_TX 43

// Use the HSPI bus for the SD card to avoid conflict with other peripherals
SPIClass spiSD(HSPI);

// Global variables to track SD card state
bool sdMounted = false;
bool lastCardPresent = false;
unsigned long lastCheckMs = 0;
const unsigned long checkIntervalMs = 1000; // Check for card changes every second

// Checks if a card is physically inserted.
// The detection pin is LOW when a card is present.
bool isCardInserted() {
  return digitalRead(SD_DET_PIN) == LOW;
}

// Helper function to print indentation for directory listing
void printIndent(uint8_t level) {
  for (uint8_t i = 0; i < level; ++i) {
    Serial1.print("  ");
  }
}

// Recursively lists files and directories
void listDir(File dir, uint8_t level) {
  while (true) {
    File entry = dir.openNextFile();
    if (!entry) {
      // No more entries in this directory
      break;
    }

    printIndent(level);
    if (entry.isDirectory()) {
      Serial1.print("[DIR]  ");
      Serial1.println(entry.name());
      // Recurse into the subdirectory
      listDir(entry, level + 1);
    } else {
      // It's a file, print its name and size
      Serial1.print("[FILE] ");
      Serial1.print(entry.name());
      Serial1.print("  ");
      Serial1.print(entry.size());
      Serial1.println(" bytes");
    }
    entry.close();
  }
}

// Opens the root directory and starts the listing process
void listRoot() {
  File root = SD.open("/");
  if (!root) {
    Serial1.println("[SD] Failed to open root directory.");
    return;
  }
  if (!root.isDirectory()) {
    Serial1.println("[SD] Root is not a directory.");
    root.close();
    return;
  }
  Serial1.println("[SD] Listing files in /");
  listDir(root, 0);
  root.close();
}

// Initializes the SPI bus and mounts the SD card
bool mountSD() {
  // Enable power to the SD card slot
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);
  delay(5);

  // Initialize the HSPI bus with the correct pins for the SD card
  spiSD.end(); // Guard against repeated begin calls
  spiSD.begin(SD_SCK_PIN, SD_MISO_PIN, SD_MOSI_PIN, SD_CS_PIN);

  // Attempt to mount the SD card file system
  if (!SD.begin(SD_CS_PIN, spiSD)) {
    Serial1.println("[SD] MicroSD initialization failed. Check card formatting.");
    return false;
  }
  Serial1.println("[SD] MicroSD mounted successfully.");
  return true;
}

// Unmounts the SD card by releasing the SPI bus
void unmountSD() {
  SD.end();
  spiSD.end();
  Serial1.println("[SD] MicroSD unmounted.");
}

void setup() {
  // Start the secondary serial port for output
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10); // Wait for Serial1 to be ready
  }

  // Set up the card detection pin with an internal pull-up resistor
  pinMode(SD_DET_PIN, INPUT_PULLUP);
  // Set up the power enable pin
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);

  // Check for a card at startup
  lastCardPresent = isCardInserted();
  if (lastCardPresent) {
    sdMounted = mountSD();
    if (sdMounted) {
      listRoot(); // If mounted, list files
    }
  } else {
    Serial1.println("[SD] No card detected at startup. Please insert a card.");
  }
}

void loop() {
  // Periodically check for card insertion or removal without blocking the loop
  unsigned long now = millis();
  if (now - lastCheckMs >= checkIntervalMs) {
    lastCheckMs = now;

    bool present = isCardInserted();
    if (present != lastCardPresent) {
      lastCardPresent = present; // Update the state

      if (present) {
        Serial1.println("\n[SD] Card inserted.");
        if (!sdMounted) {
          sdMounted = mountSD();
        }
        if (sdMounted) {
          listRoot(); // List files upon insertion
        }
      } else {
        Serial1.println("\n[SD] Card removed.");
        if (sdMounted) {
          unmountSD();
          sdMounted = false;
        }
      }
    }
  }
  // You can place other non-blocking code here
}
```

##### コードの説明

- **ピン定義：** コードはMicroSDカードスロットに使用されるGPIOピンを定義することから始まります。SPIピン（`MOSI`、`SCK`）はe-paperディスプレイと共有されていますが、独立したチップセレクト（`SD_CS_PIN`）と専用のSPIインスタンス（`spiSD`）により、独立して使用できることに注意してください。
- **SPI初期化：** ESP32の2番目のハードウェアSPIコントローラー（HSPI）を使用するために、新しいSPIオブジェクト`spiSD(HSPI)`をインスタンス化します。これは他のSPIデバイスとの競合を避けるためのベストプラクティスです。
- **カード検出：** `isCardInserted()`関数は`SD_DET_PIN`を読み取ります。reTerminalハードウェアでは、カードが挿入されているときにこのピンはLOWにプルされます。
- **マウント/アンマウント：** `mountSD()`関数はカードへの電源を有効にし、正しいピンでHSPIバスを設定し、`SD.begin()`を呼び出してファイルシステムを初期化します。`unmountSD()`はリソースを解放します。
- **ファイル一覧：** `listRoot()`はルートディレクトリ（`/`）を開き、`listDir()`はファイルシステムを再帰的に走査し、すべてのファイルとディレクトリの名前を出力する再帰関数です。
- **`setup()`：** 出力用に`Serial1`を初期化し、カード検出ピンを設定し、デバイスの電源投入時にカードがすでに挿入されているかどうかの初期チェックを実行します。
- **`loop()`：** カードを常にチェックする代わりに、コードは非ブロッキングタイマー（`millis()`）を使用して、1秒に1回カードのステータスの変化をチェックします。変化が検出された場合（カードの挿入または取り外し）、カードをマウントまたはアンマウントし、ステータスをシリアルモニターに出力します。

##### 期待される結果

1. コードをreTerminalにアップロードします。
2. Arduino IDEのシリアルモニターを開きます（**ツール > シリアルモニター**）。
3. ボーレートが**115200**に設定されていることを確認します。

以下のアクションに対応する出力が表示されます：

- **カードなしでの起動時：** モニターに`[SD] No card detected at startup...`と表示されます
- **カードを挿入したとき：** モニターに`[SD] Card inserted.`と表示され、続いてカード上のすべてのファイルとディレクトリの完全な一覧が表示されます。
- **カードを取り外したとき：** モニターに`[SD] Card removed.`と表示されます

```
[FILE] live.0.shadowIndexGroups  6 bytes
[FILE] reverseStore.updates  1 bytes
[DIR]  journals.repair
[FILE] Cab.modified  0 bytes
[FILE] live.1.indexPositionTable  8192 bytes
[FILE] live.1.indexTermIds  8192 bytes
[FILE] tmp.spotlight.loc  2143 bytes
[FILE] live.1.shadowIndexTermIds  624 bytes
[FILE] live.1.indexArrays  65536 bytes
[FILE] live.1.shadowIndexArrays  65536 bytes
[FILE] live.1.indexHead  4096 bytes
[FILE] live.1.indexPostings  4096 bytes
```

### 高度な例：SDカードからのBMP画像表示

この包括的な例は、前のセクションの機能を組み合わせたものです。MicroSDカードからビットマップ（`.bmp`）画像ファイルを読み取り、reTerminalのe-paperスクリーンに表示するプログラムを作成します。これは、デバイスの実用的で現実的なアプリケーションを実演します。

プログラムは、SDカードのルートディレクトリにある`test.bmp`という名前のファイルを探します。

#### 準備

コードを実行する前に、MicroSDカードと画像ファイルの両方を正しく準備する必要があります。これは、画像が正しく表示されることを保証するための最も重要なステップです。

**1. MicroSDカードのフォーマット**

MicroSDカード（64GB以下を推奨）を準備し、**FAT32**ファイルシステムでフォーマットします。

**2. 画像ファイルの準備**

画像を準備する方法は、reTerminalモデルによって若干異なります。お使いのデバイスに合ったガイドに従ってください。

<Tabs>
<TabItem value="For reTerminal E1001 (B&W Screen)" label="reTerminal E1001（白黒スクリーン）用" default>

白黒スクリーンは白と黒のピクセルのみを表示できます。コードはカラー画像をリアルタイムでグレースケールに変換できますが、**コンピューター上で画像を高品質のグレースケール画像に事前変換する**ことで、はるかに良いコントラストと詳細を得ることができます。

1. **画像のリサイズ：** 画像を**800x480ピクセル**にリサイズします。

2. **グレースケールに変換（推奨）：** 画像エディターで、まず画像をグレースケールに変換します。**GIMP**では：
    - メニューの**色 > 脱色 > 脱色...**に移動します。最良の結果を得るために「輝度」などのモードを選択します。

3. **標準BMPとして保存：** カラースクリーンガイドと同じ手順に従ってファイルを保存します。画像がグレースケールであっても、24ビットBMPとして保存することで、コードとの最大の互換性が保証されます。
    - **ファイル > エクスポート...**に移動し、`test.bmp`と名前を付けます。
    - エクスポートダイアログで、**詳細オプション**の下で**「24ビット：R8 G8 B8」**を選択します。
    - **エクスポート**をクリックします。

4. **SDカードにコピー：** 最終的な`test.bmp`ファイルをMicroSDカードのルートディレクトリにコピーします。

</TabItem>
<TabItem value="For reTerminal E1002 (Color Screen)" label="reTerminal E1002（カラースクリーン）用">

カラースクリーンは6色を表示できます：黒、白、赤、黄、青、緑。提供されたコードには、ソース画像の任意の色をスクリーン上で利用可能な最適な色にインテリジェントにマッピングする「最近色」アルゴリズムが含まれています。最適な結果を得るには、以下の手順に従ってください：

1. **画像のリサイズ：** 任意の画像エディターを使用して、画像を**800x480ピクセル**にリサイズします。

2. **標準BMPとして保存：** コードは**非圧縮**の24ビットまたは32ビットBMPファイルを読み取るように設計されています。プロフェッショナルな画像エディターを使用することが、フォーマットが正しいことを保証する最良の方法です。無料でオープンソースのソフトウェア**GIMP**をお勧めします：
    - リサイズした画像をGIMPで開きます。
    - メニューの**ファイル > エクスポート...**に移動します。
    - ファイルに`test.bmp`と名前を付けて**エクスポート**をクリックします。
    - 表示される「BMPとして画像をエクスポート」ダイアログで、**詳細オプション**を展開します。
    - **「24ビット：R8 G8 B8」**を選択します。これは最も互換性のある非圧縮フォーマットです。
    - **エクスポート**をクリックします。


3. **SDカードにコピー:** 最終的な`test.bmp`ファイルをMicroSDカードのルートディレクトリにコピーします。

</TabItem>
</Tabs>

テスト用の既製画像を使用したい場合は、GxEPD2が提供する[サンプル画像](https://github.com/ZinggJM/GxEPD2/tree/master/examples/GxEPD2_SD_Example/bitmaps)を使用できます。

#### コード

これは最終的な検証済みコードです。必要なチェックと高度な色マッチングアルゴリズムがすべて含まれています。E1001（白黒）の場合は`EPD_SELECT`マクロを`0`に、E1002（カラー）の場合は`1`に設定するだけです。

<Tabs>
<TabItem value="For reTerminal E1001 (B&W Screen)" label="For reTerminal E1001 (B&W Screen)" default>

```cpp
#include <SD.h>
#include <SPI.h>
#include <GxEPD2_BW.h>
#include <GxEPD2_7C.h>
#include <cmath>

// === Pin Definitions ===
// ePaper Display
#define EPD_SCK_PIN  7
#define EPD_MOSI_PIN 9
#define EPD_CS_PIN   10
#define EPD_DC_PIN   11
#define EPD_RES_PIN  12
#define EPD_BUSY_PIN 13

// SD Card
#define SD_EN_PIN   16
#define SD_DET_PIN  15
#define SD_CS_PIN   14
#define SD_MISO_PIN 8

// Serial Port
#define SERIAL_RX 44
#define SERIAL_TX 43

// File to display
const char* BMP_FILENAME = "/test.bmp";

// === ePaper Driver Selection ===
// 0: reTerminal E1001 (7.5'' B&W)
// 1: reTerminal E1002 (7.3'' Color)
#define EPD_SELECT 1

#if (EPD_SELECT == 0)
#define GxEPD2_DISPLAY_CLASS GxEPD2_BW
#define GxEPD2_DRIVER_CLASS GxEPD2_750_GDEY075T7
#elif (EPD_SELECT == 1)
#define GxEPD2_DISPLAY_CLASS GxEPD2_7C
#define GxEPD2_DRIVER_CLASS GxEPD2_730c_GDEP073E01
#endif

// For displays with RAM limitations
#define MAX_DISPLAY_BUFFER_SIZE 16000
#define MAX_HEIGHT(EPD) (EPD::HEIGHT <= MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8) ? EPD::HEIGHT : MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8))

// === Global Objects ===
SPIClass hspi(HSPI);

GxEPD2_DISPLAY_CLASS<GxEPD2_DRIVER_CLASS, MAX_HEIGHT(GxEPD2_DRIVER_CLASS)>
    display(GxEPD2_DRIVER_CLASS(/*CS=*/EPD_CS_PIN, /*DC=*/EPD_DC_PIN, /*RST=*/EPD_RES_PIN, /*BUSY=*/EPD_BUSY_PIN));

// === BMP Drawing Function ===
// Helper functions to read values from the BMP file
uint16_t read16(File &f) {
  uint16_t result;
  ((uint8_t *)&result)[0] = f.read(); // LSB
  ((uint8_t *)&result)[1] = f.read(); // MSB
  return result;
}

uint32_t read32(File &f) {
  uint32_t result;
  ((uint8_t *)&result)[0] = f.read(); // LSB
  ((uint8_t *)&result)[1] = f.read();
  ((uint8_t *)&result)[2] = f.read();
  ((uint8_t *)&result)[3] = f.read(); // MSB
  return result;
}

#if (EPD_SELECT == 1)
// Define the RGB values for the 6 available e-paper colors
const uint8_t palette[][3] = {
  {  0,   0,   0}, // 0: Black
  {255, 255, 255}, // 1: White
  {  0, 255,   0}, // 2: Green
  {  0,   0, 255}, // 3: Blue
  {255,   0,   0}, // 4: Red
  {255, 255,   0}, // 5: Yellow
};

// Define the corresponding GxEPD2 color codes
const uint16_t epaper_colors[] = {
  GxEPD_BLACK,
  GxEPD_WHITE,
  GxEPD_GREEN,
  GxEPD_BLUE,
  GxEPD_RED,
  GxEPD_YELLOW,
};

const int num_colors = sizeof(palette) / sizeof(palette[0]);

// This function finds the closest e-paper color for a given RGB color
uint16_t findNearestColor(uint8_t r, uint8_t g, uint8_t b) {
  long min_dist_sq = -1;
  int best_color_index = 0;

  for (int i = 0; i < num_colors; i++) {
    long dr = r - palette[i][0];
    long dg = g - palette[i][1];
    long db = b - palette[i][2];
    long dist_sq = dr * dr + dg * dg + db * db;

    if (min_dist_sq == -1 || dist_sq < min_dist_sq) {
      min_dist_sq = dist_sq;
      best_color_index = i;
    }
  }
  return epaper_colors[best_color_index];
}
#endif


// This function reads a BMP file and draws it to the screen.
// It includes robust error checking and a color-matching algorithm.
void drawBmp(const char *filename, int16_t x, int16_t y) {
  File bmpFile;
  int32_t bmpWidth, bmpHeight;
  uint16_t bmpDepth;
  uint32_t bmpImageoffset;
  bool flip = true;

  if ((x >= display.width()) || (y >= display.height())) return;

  Serial1.print("Loading image '");
  Serial1.print(filename);
  Serial1.println("'");

  bmpFile = SD.open(filename, FILE_READ);
  if (!bmpFile) {
    Serial1.println("File not found");
    return;
  }

  if (read16(bmpFile) != 0x4D42) {
    Serial1.println("Not a valid BMP file");
    bmpFile.close();
    return;
  }

  read32(bmpFile);
  read32(bmpFile);
  bmpImageoffset = read32(bmpFile);
  read32(bmpFile);
  bmpWidth = read32(bmpFile);
  bmpHeight = read32(bmpFile);

  if (read16(bmpFile) != 1) {
    Serial1.println("Unsupported BMP format (planes)");
    bmpFile.close();
    return;
  }

  bmpDepth = read16(bmpFile);
  uint32_t compression = read32(bmpFile);

  if (compression != 0) {
    if (compression == 3) {
      Serial1.println("Error: BMP file uses BI_BITFIELDS compression.");
      Serial1.println("This example only supports uncompressed BMPs.");
      Serial1.println("Please re-save the image with standard R8G8B8 (24-bit) or A8R8G8B8 (32-bit) format.");
    } else {
      Serial1.printf("Unsupported BMP format. Depth: %d, Compression: %d\n", bmpDepth, compression);
    }
    bmpFile.close();
    return;
  }

  if (bmpDepth != 24 && bmpDepth != 32) {
      Serial1.printf("Unsupported BMP bit depth: %d. Only 24-bit and 32-bit are supported.\n", bmpDepth);
      bmpFile.close();
      return;
  }

  if (bmpHeight < 0) {
    bmpHeight = -bmpHeight;
    flip = false;
  }

  Serial1.printf("Image: %d x %d, %d-bit\n", bmpWidth, bmpHeight, bmpDepth);

  display.setPartialWindow(x, y, bmpWidth, bmpHeight);

  uint8_t bytesPerPixel = bmpDepth / 8;
  uint32_t rowSize = (bmpWidth * bytesPerPixel + 3) & ~3;
  uint8_t sdbuffer[rowSize];

  display.firstPage();
  do {
    for (int16_t row = 0; row < bmpHeight; row++) {
      uint32_t rowpos = flip ? (bmpImageoffset + (bmpHeight - 1 - row) * rowSize) : (bmpImageoffset + row * rowSize);
      bmpFile.seek(rowpos);
      bmpFile.read(sdbuffer, rowSize);

      for (int16_t col = 0; col < bmpWidth; col++) {
        uint8_t b = sdbuffer[col * bytesPerPixel];
        uint8_t g = sdbuffer[col * bytesPerPixel + 1];
        uint8_t r = sdbuffer[col * bytesPerPixel + 2];

        uint16_t GxEPD_Color;

        #if (EPD_SELECT == 1) // Color Display
          GxEPD_Color = findNearestColor(r, g, b);
        #else // Black and White Display
          if ((r * 0.299 + g * 0.587 + b * 0.114) < 128) GxEPD_Color = GxEPD_BLACK;
          else GxEPD_Color = GxEPD_WHITE;
        #endif

        display.drawPixel(x + col, y + row, GxEPD_Color);
      }
    }
  } while (display.nextPage());

  bmpFile.close();
  Serial1.println("Done!");
}


void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) delay(10);
  delay(2000); // A small delay to allow Serial Monitor to connect
  Serial1.println("--- ePaper SD Card BMP Example ---");

  // Initialize shared SPI bus
  hspi.begin(EPD_SCK_PIN, SD_MISO_PIN, EPD_MOSI_PIN, -1);

  // Initialize Display
  display.epd2.selectSPI(hspi, SPISettings(4000000, MSBFIRST, SPI_MODE0));
  display.init(115200);
  display.setRotation(0);
  display.fillScreen(GxEPD_WHITE);
  display.hibernate(); // Power down display until needed

  // Initialize SD Card
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);
  pinMode(SD_DET_PIN, INPUT_PULLUP);
  delay(100);

  if (digitalRead(SD_DET_PIN) == HIGH) {
    Serial1.println("No SD card detected. Please insert a card.");
    display.firstPage();
    do {
      display.setCursor(10, 20);
      display.print("No SD card detected.");
    } while(display.nextPage());
    return;
  }

  Serial1.println("SD card detected, attempting to mount...");
  if (!SD.begin(SD_CS_PIN, hspi)) {
    Serial1.println("SD Card Mount Failed!");
    display.firstPage();
    do {
      display.setCursor(10, 20);
      display.print("SD Card Mount Failed!");
    } while(display.nextPage());
    return;
  }
  Serial1.println("SD card mounted successfully.");

  // Draw the BMP from the SD card
  drawBmp(BMP_FILENAME, 0, 0);

  display.hibernate(); // Power down display after drawing
}

void loop() {
  // Nothing to do here for this example
}
```

</TabItem>
<TabItem value="For reTerminal E1002 (Color Screen)" label="For reTerminal E1002 (Color Screen)">

```cpp
#include <SD.h>
#include <SPI.h>
#include <GxEPD2_BW.h>
#include <GxEPD2_7C.h>
#include <cmath>

// === Pin Definitions ===
// ePaper Display
#define EPD_SCK_PIN  7
#define EPD_MOSI_PIN 9
#define EPD_CS_PIN   10
#define EPD_DC_PIN   11
#define EPD_RES_PIN  12
#define EPD_BUSY_PIN 13

// SD Card
#define SD_EN_PIN   16
#define SD_DET_PIN  15
#define SD_CS_PIN   14
#define SD_MISO_PIN 8

// Serial Port
#define SERIAL_RX 44
#define SERIAL_TX 43

// File to display
const char* BMP_FILENAME = "/test.bmp";

// === ePaper Driver Selection ===
// 0: reTerminal E1001 (7.5'' B&W)
// 1: reTerminal E1002 (7.3'' Color)
#define EPD_SELECT 0

#if (EPD_SELECT == 0)
#define GxEPD2_DISPLAY_CLASS GxEPD2_BW
#define GxEPD2_DRIVER_CLASS GxEPD2_750_GDEY075T7
#elif (EPD_SELECT == 1)
#define GxEPD2_DISPLAY_CLASS GxEPD2_7C
#define GxEPD2_DRIVER_CLASS GxEPD2_730c_GDEP073E01
#endif

// For displays with RAM limitations
#define MAX_DISPLAY_BUFFER_SIZE 16000
#define MAX_HEIGHT(EPD) (EPD::HEIGHT <= MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8) ? EPD::HEIGHT : MAX_DISPLAY_BUFFER_SIZE / (EPD::WIDTH / 8))

// === Global Objects ===
SPIClass hspi(HSPI);

GxEPD2_DISPLAY_CLASS<GxEPD2_DRIVER_CLASS, MAX_HEIGHT(GxEPD2_DRIVER_CLASS)>
    display(GxEPD2_DRIVER_CLASS(/*CS=*/EPD_CS_PIN, /*DC=*/EPD_DC_PIN, /*RST=*/EPD_RES_PIN, /*BUSY=*/EPD_BUSY_PIN));

// === BMP Drawing Function ===
// Helper functions to read values from the BMP file
uint16_t read16(File &f) {
  uint16_t result;
  ((uint8_t *)&result)[0] = f.read(); // LSB
  ((uint8_t *)&result)[1] = f.read(); // MSB
  return result;
}

uint32_t read32(File &f) {
  uint32_t result;
  ((uint8_t *)&result)[0] = f.read(); // LSB
  ((uint8_t *)&result)[1] = f.read();
  ((uint8_t *)&result)[2] = f.read();
  ((uint8_t *)&result)[3] = f.read(); // MSB
  return result;
}

#if (EPD_SELECT == 1)
// Define the RGB values for the 6 available e-paper colors
const uint8_t palette[][3] = {
  {  0,   0,   0}, // 0: Black
  {255, 255, 255}, // 1: White
  {  0, 255,   0}, // 2: Green
  {  0,   0, 255}, // 3: Blue
  {255,   0,   0}, // 4: Red
  {255, 255,   0}, // 5: Yellow
};

// Define the corresponding GxEPD2 color codes
const uint16_t epaper_colors[] = {
  GxEPD_BLACK,
  GxEPD_WHITE,
  GxEPD_GREEN,
  GxEPD_BLUE,
  GxEPD_RED,
  GxEPD_YELLOW,
};

const int num_colors = sizeof(palette) / sizeof(palette[0]);

// This function finds the closest e-paper color for a given RGB color
uint16_t findNearestColor(uint8_t r, uint8_t g, uint8_t b) {
  long min_dist_sq = -1;
  int best_color_index = 0;

  for (int i = 0; i < num_colors; i++) {
    long dr = r - palette[i][0];
    long dg = g - palette[i][1];
    long db = b - palette[i][2];
    long dist_sq = dr * dr + dg * dg + db * db;

    if (min_dist_sq == -1 || dist_sq < min_dist_sq) {
      min_dist_sq = dist_sq;
      best_color_index = i;
    }
  }
  return epaper_colors[best_color_index];
}
#endif


// This function reads a BMP file and draws it to the screen.
// It includes robust error checking and a color-matching algorithm.
void drawBmp(const char *filename, int16_t x, int16_t y) {
  File bmpFile;
  int32_t bmpWidth, bmpHeight;
  uint16_t bmpDepth;
  uint32_t bmpImageoffset;
  bool flip = true;

  if ((x >= display.width()) || (y >= display.height())) return;

  Serial1.print("Loading image '");
  Serial1.print(filename);
  Serial1.println("'");

  bmpFile = SD.open(filename, FILE_READ);
  if (!bmpFile) {
    Serial1.println("File not found");
    return;
  }

  if (read16(bmpFile) != 0x4D42) {
    Serial1.println("Not a valid BMP file");
    bmpFile.close();
    return;
  }

  read32(bmpFile);
  read32(bmpFile);
  bmpImageoffset = read32(bmpFile);
  read32(bmpFile);
  bmpWidth = read32(bmpFile);
  bmpHeight = read32(bmpFile);

  if (read16(bmpFile) != 1) {
    Serial1.println("Unsupported BMP format (planes)");
    bmpFile.close();
    return;
  }

  bmpDepth = read16(bmpFile);
  uint32_t compression = read32(bmpFile);

  if (compression != 0) {
    if (compression == 3) {
      Serial1.println("Error: BMP file uses BI_BITFIELDS compression.");
      Serial1.println("This example only supports uncompressed BMPs.");
      Serial1.println("Please re-save the image with standard R8G8B8 (24-bit) or A8R8G8B8 (32-bit) format.");
    } else {
      Serial1.printf("Unsupported BMP format. Depth: %d, Compression: %d\n", bmpDepth, compression);
    }
    bmpFile.close();
    return;
  }

  if (bmpDepth != 24 && bmpDepth != 32) {
      Serial1.printf("Unsupported BMP bit depth: %d. Only 24-bit and 32-bit are supported.\n", bmpDepth);
      bmpFile.close();
      return;
  }

  if (bmpHeight < 0) {
    bmpHeight = -bmpHeight;
    flip = false;
  }

  Serial1.printf("Image: %d x %d, %d-bit\n", bmpWidth, bmpHeight, bmpDepth);

  display.setPartialWindow(x, y, bmpWidth, bmpHeight);

  uint8_t bytesPerPixel = bmpDepth / 8;
  uint32_t rowSize = (bmpWidth * bytesPerPixel + 3) & ~3;
  uint8_t sdbuffer[rowSize];

  display.firstPage();
  do {
    for (int16_t row = 0; row < bmpHeight; row++) {
      uint32_t rowpos = flip ? (bmpImageoffset + (bmpHeight - 1 - row) * rowSize) : (bmpImageoffset + row * rowSize);
      bmpFile.seek(rowpos);
      bmpFile.read(sdbuffer, rowSize);

      for (int16_t col = 0; col < bmpWidth; col++) {
        uint8_t b = sdbuffer[col * bytesPerPixel];
        uint8_t g = sdbuffer[col * bytesPerPixel + 1];
        uint8_t r = sdbuffer[col * bytesPerPixel + 2];

        uint16_t GxEPD_Color;

        #if (EPD_SELECT == 1) // Color Display
          GxEPD_Color = findNearestColor(r, g, b);
        #else // Black and White Display
          if ((r * 0.299 + g * 0.587 + b * 0.114) < 128) GxEPD_Color = GxEPD_BLACK;
          else GxEPD_Color = GxEPD_WHITE;
        #endif

        display.drawPixel(x + col, y + row, GxEPD_Color);
      }
    }
  } while (display.nextPage());

  bmpFile.close();
  Serial1.println("Done!");
}


void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) delay(10);
  delay(2000); // A small delay to allow Serial Monitor to connect
  Serial1.println("--- ePaper SD Card BMP Example ---");

  // Initialize shared SPI bus
  hspi.begin(EPD_SCK_PIN, SD_MISO_PIN, EPD_MOSI_PIN, -1);

  // Initialize Display
  display.epd2.selectSPI(hspi, SPISettings(4000000, MSBFIRST, SPI_MODE0));
  display.init(115200);
  display.setRotation(0);
  display.fillScreen(GxEPD_WHITE);
  display.hibernate(); // Power down display until needed

  // Initialize SD Card
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);
  pinMode(SD_DET_PIN, INPUT_PULLUP);
  delay(100);

  if (digitalRead(SD_DET_PIN) == HIGH) {
    Serial1.println("No SD card detected. Please insert a card.");
    display.firstPage();
    do {
      display.setCursor(10, 20);
      display.print("No SD card detected.");
    } while(display.nextPage());
    return;
  }

  Serial1.println("SD card detected, attempting to mount...");
  if (!SD.begin(SD_CS_PIN, hspi)) {
    Serial1.println("SD Card Mount Failed!");
    display.firstPage();
    do {
      display.setCursor(10, 20);
      display.print("SD Card Mount Failed!");
    } while(display.nextPage());
    return;
  }
  Serial1.println("SD card mounted successfully.");

  // Draw the BMP from the SD card
  drawBmp(BMP_FILENAME, 0, 0);

  display.hibernate(); // Power down display after drawing
}

void loop() {
  // Nothing to do here for this example
}

```

</TabItem>
</Tabs>

#### How It Works

- **`setup()`**: The `setup` function initializes all necessary hardware in sequence: the Serial port for debugging, the shared SPI bus, the e-paper display, and finally the SD card. If all initializations are successful, it makes a single call to `drawBmp()` to perform the main task.
- **`drawBmp()`**: This is the core function. It opens the BMP file, parses the header to read its dimensions and properties, and performs crucial validation checks. It specifically checks for unsupported compression types and provides a helpful error message if it finds one.
- **Drawing Loop**: The function reads the image from the SD card one row at a time. For each pixel in the row, it extracts the Red, Green, and Blue color values.
- **Color Handling**: This is where the logic splits based on the `EPD_SELECT` macro:
  - **For Color (E1002)**: It calls `findNearestColor(r, g, b)`. This function calculates the "distance" between the pixel's color and each of the 6 colors in the screen's palette. It returns the palette color with the smallest distance, ensuring the most accurate possible color representation.
  - **For B&W (E1001)**: It uses a standard luminance formula (`r * 0.299 + g * 0.587 + b * 0.114`) to convert the RGB color to a single brightness value. If this value is below a threshold (128), the pixel is drawn as black; otherwise, it's drawn as white.

#### Upload and Run

1. In the Arduino IDE, make sure you have the correct board selected (`XIAO_ESP32S3`).
2. Set the `EPD_SELECT` macro at the top of the code to `1` for the reTerminal E1002 or `0` for the E1001.
3. Insert your prepared MicroSD card into the reTerminal.
4. Upload the code.
5. Open the Serial Monitor at a baud rate of `115200`. You will see the progress logs, and after a few moments, the image will be rendered on the e-paper display.

:::tip About Refresh Speed
The screen refresh speed may be slow, sometimes the screen will not respond until 2~3 minutes after uploading the program.
:::

## Troubleshooting

### Q1: Why does the reTerminal's ePaper display not show anything or refresh when running the code above?

This issue may occur if you have inserted a MicroSD card into the reTerminal. The reason is that the MicroSD card and the ePaper display share the same SPI bus on the reTerminal. If a MicroSD card is inserted but its enable (chip select) pin is not properly managed, it can cause a conflict on the SPI bus. Specifically, the MicroSD card may hold the BUSY line high, which prevents the ePaper display from functioning correctly—resulting in no display updates or refreshes.

```cpp
// SDカードを初期化
pinMode(SD_EN_PIN, OUTPUT);
digitalWrite(SD_EN_PIN, HIGH);
pinMode(SD_DET_PIN, INPUT_PULLUP);
```

To resolve this, you must ensure that the MicroSD card is properly enabled using the code provided above. The code initializes and enables the MicroSD card by setting the correct pin states, which prevents SPI bus conflicts and allows both the SD card and the ePaper display to work together. Always use the recommended initialization code when using a MicroSD card with the reTerminal to avoid such issues.

If the MicroSD card is not used inside your project, we recommend powering down the device and removing the card before running the display program. If the card has been inserted into the reTerminal, you will need to add the above code to ensure that you can get the screen to display properly, regardless of whether you are using a MicroSD card or not.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
