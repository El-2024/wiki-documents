---
title: 315MHz Simple RF Link Kit
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/315MHz_Simple_RF_Link_Kit/
slug: /ja/315MHz_Simple_RF_Link_Kit
last_update:
  date: 05/15/2025
  author: gunengyu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

![](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/img/315M_433M.jpg)

このキットは、315MHzの周波数で一方向の無線通信を行うためのもので、送信モジュールと受信モジュールが含まれています。このキットのGrove構成により、屋内で約40メートル、屋外で約100メートルの送信距離が可能です。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/grove-315mhz-simple-rf-link-kit-p-1061.html?cPath=139_140)

## 特徴

---

* GROVE互換インターフェース

* ASK（振幅変調）方式を使用

* 一方向通信

## 仕様

### 送信モジュール

<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> 項目
</th>
<th scope="col"> 最小値
</th>
<th scope="col"> 標準値
</th>
<th scope="col"> 最大値
</th>
<th scope="col"> 単位
</th></tr>
<tr>
<th scope="row"> 動作電圧
</th>
<td> 3.0
</td>
<td> 5.0
</td>
<td> 12.0
</td>
<td> VDC
</td></tr>
<tr>
<th scope="row"> 電流
</th>
<td> 3
</td>
<td> /
</td>
<td> 10
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> 動作モード
</th>
<td colspan="3"> ASK
</td>
<td> /
</td></tr>
<tr>
<th scope="row"> 最大送信出力
</th>
<td colspan="3"> 15
</td>
<td> mW
</td></tr>
<tr>
<th scope="row"> 動作距離
</th>
<td> 40
</td>
<td> /
</td>
<td> 100
</td>
<td> m
</td></tr></table>

### 受信モジュール

<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> 項目
</th>
<th scope="col"> 標準値
</th>
<th scope="col"> 単位
</th></tr>
<tr>
<th scope="row"> 動作電圧
</th>
<td> 5
</td>
<td> VDC
</td></tr>
<tr>
<th scope="row"> 待機電流
</th>
<td> 5
</td>
<td> mA
</td></tr>
<tr>
<th scope="row"> 受信感度
</th>
<td> -103
</td>
<td> dBm
</td></tr>
<tr>
<th scope="row"> 動作周波数
</th>
<td> 315
</td>
<td> MHz
</td></tr></table>

## 応用例

* リモートコントロール

* リモートオートメーション

* アラーム

## 使用方法

送信モジュールと受信モジュールはどちらも1本のワイヤで通信を行います。Arduinoプラットフォームが提供するUARTを使用することも可能ですが、代わりにAmplitude Shift Keyingを使用するVirtualWireライブラリを使用することを推奨します。これにより、より良い通信が可能になります。

送信モジュールと受信モジュールの両方には、Vcc、Ground、信号の3本のワイヤが必要です。キットのピン2部分はどちらも接続されていません。

* 送信モジュールを使用するArduinoの[Grove_-_Base_Shield](/Base_Shield_V2 "Grove - Base Shield")のデジタルI/O 2に接続します。
Grove-433MHz_Simple_RF_Link_Kit
* 受信モジュールを受信側のArduinoの[Grove_-_Base_Shield](/Base_Shield_V2 "Grove - Base Shield")のデジタルI/O 2に接続します。

**注意:** ハードウェアのインストールについては、[Grove - 433MHz Simple RF Link Kitの使用方法](/Grove-433MHz_Simple_RF_Link_Kit "Grove-433MHz_Simple_RF_Link_Kit")を参照してください。

* [VirtualWireライブラリ](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/res/VirtualWire_Library.zip)をダウンロードし、Arduino IDEのライブラリフォルダに解凍します。パスは..\arduino-1.0\librariesです。[こちら](http://www.pjrc.com/teensy/td_libs_VirtualWire.html)を参考にしてください。
* 以下のコードを送信モジュールにアップロードします：

```
#include <VirtualWire.h>

//Grove - 315(433) RF link kit Demo v1.0
//by :https://www.seeedstudio.com/
//connect the sent module to D2 to use
#include <VirtualWire.h>

int RF_TX_PIN = 2;

void setup()
{
    vw_set_tx_pin(RF_TX_PIN); // 送信ピンを設定
    vw_setup(2000); // 送信速度（ビット/秒）
}

void loop()
{
    const char *msg = "hello";
    vw_send((uint8_t *)msg, strlen(msg));  // 400msごとに「hello」を送信
    delay(400);

}
```

* 以下のコードを受信モジュールにアップロードします：

```
//Grove - 315(433) RF link kit Demo v1.0
//by :https://www.seeedstudio.com/
//connect the receive module to D2 to use ..
#include <VirtualWire.h>

int RF_RX_PIN = 2;

void setup()
{
    Serial.begin(9600);
    Serial.println("setup");
    vw_set_rx_pin(RF_RX_PIN);  // 受信ピンを設定
    vw_setup(2000); // 送信速度（ビット/秒）
    vw_rx_start(); // PLL受信機を開始
}

void loop()
{
    uint8_t buf[VW_MAX_MESSAGE_LEN];
    uint8_t buflen = VW_MAX_MESSAGE_LEN;
    if(vw_get_message(buf, &buflen)) // 非ブロッキングI/O
    {
        int i;
        // チェックサムが正しいメッセージを受信、HEXでダンプ
        Serial.print("Got: ");
        for(i = 0; i < buflen; ++i)
        {
            Serial.print(buf[i], HEX);
            Serial.print(" ");
            //Serial.print(buf[i]);
        }
        Serial.println("");
    }
}
```

* 受信モジュールのシリアルモニターを開いて結果を確認します。

![](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/img/Receive_Data.jpg)

これは参考用の簡単な送信および受信の例です。

## バージョントラッカー

<table>
<tr>
<th> リビジョン
</th>
<th> 説明
</th>
<th> リリース日
</th></tr>
<tr>
<td width="300px"> v0.9b
</td>
<td width="500px"> 初回公開リリース
</td>
<td width="200px"> 2011年10月3日
</td></tr></table>

## リソース

* [ファイル: VirtualWire Library.zip](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/res/VirtualWire_Library.zip)

* [ファイル: 315MHz_demo.zip](https://files.seeedstudio.com/wiki/315MHz_Simple_RF_Link_Kit/res/315MHz_Demo.zip)

* [VirtualWire ドキュメント](http://www.open.com.au/mikem/arduino/VirtualWire.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを用意しております。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>