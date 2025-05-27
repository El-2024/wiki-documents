---
description: Grove - ガスセンサー(MQ5)
title: Grove - ガスセンサー(MQ5)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Gas_Sensor-MQ5
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/Twig-Gas_Sensor.bmp) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/Twig-Gas_Sensor.bmp" alt="pir" width={600} height="auto" /></p>


Grove - ガスセンサー(MQ5)モジュールは、ガス漏れ検知（家庭および産業用）に役立ちます。このセンサーは<font color="Blue">H2、LPG、CH4、CO、アルコール</font>の検出に適しています。高感度と高速応答時間により、測定を迅速に行うことができます。センサーの感度は、ポテンショメーターを使用して調整可能です。

<div class="admonition danger">
<p class="admonition-title">注意</p>
センサーの値は、許容誤差範囲内でガス濃度の概略的な傾向を反映するだけであり、正確なガス濃度を示すものではありません。空気中の特定の成分を検出するには、通常、より正確で高価な機器が必要であり、単一のガスセンサーでは実現できません。プロジェクトで非常に正確なレベルのガス濃度を取得することを目的としている場合、このガスセンサーはお勧めできません。
</div>


<!-- |Sensor|Gas Type|Get One Now|
|---|---|---|
|MQ2|Combustible Gas, Smoke|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-937.html)|
|MQ3|Alcohol Vapor|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1418.html)|
|MQ5|LPG, Natural Gas, Town Gas|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-938.html)|
|MQ9|Carbon Monoxide, Coal Gas, Liquefied Gas|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1419.html)| -->

<table align="center">
  <tbody>
    <tr>
    <td><h4>センサー</h4></td>
    <td><h4>ガスタイプ</h4></td>
    <td><h4>今すぐ購入</h4></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ2/" target="_blank"><span>MQ2</span></a></td>
    <td>可燃性ガス、煙</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ3/" target="_blank"><span>MQ3</span></a></td>
    <td>アルコール蒸気</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ3%29-p-1418.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ5/" target="_blank"><span>MQ5</span></a></td>
    <td>LPG、天然ガス、都市ガス</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ5%29-p-938.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ9/" target="_blank"><span>MQ9</span></a></td>
    <td>一酸化炭素、石炭ガス、液化ガス</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ9%29-p-1419.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
</tr>
</tbody></table>


:::tip
    [Seeed ガスセンサー選択ガイド](https://wiki.seeedstudio.com/Seeed_Gas_Sensor_Selection_Guide/)を公開しました。このガイドは、あなたのニーズに最適なガスセンサーを選ぶのに役立ちます。
:::

## 特徴

- 広い検知範囲  
- 安定性が高く長寿命  
- 高速応答と高感度  

## 仕様

| 項目  | パラメータ               | 最小値 | 典型値       | 最大値 | 単位 |
|-------|-------------------------|--------|--------------|--------|------|
| VCC   | 動作電圧               | 4.9    | 5            | 5.1    | V    |
| PH    | ヒーター消費電力       | 0.5    | -            | 800    | mW   |
| RL    | 負荷抵抗               |        | 調整可能     |        |      |
| RH    | ヒーター抵抗           | -      | 31±10%       | -      | Ω    |
| Rs    | 検知抵抗               | 10     | -            | 60     | kΩ   |
| Scope | 検知濃度範囲           | 200    | -            | 10000  | ppm  |

## 応用例

- ガス漏れ検知  
- 玩具  

## ハードウェア概要

これはアナログ出力センサーです。このセンサーは Grove Base Shield の任意のアナログソケットに接続する必要があります。このチュートリアルで使用される例では、A0 アナログピンを使用しています。このモジュールを Base Shield の A0 ポートに接続してください。

ジャンパーワイヤーを使用して、以下の表に示す接続方法で Grove モジュールを Arduino に直接接続することも可能です：

| Arduino   | ガスセンサー |
|-----------|-------------|
| 5V        | VCC         |
| GND       | GND         |
| NC        | NC          |
| Analog A0 | SIG         |

ガスセンサーからの出力電圧は、ガス濃度が増加すると上昇します。感度はポテンショメーターを調整することで変更できます。  
<font color="Red">センサーの最適な予熱時間は24時間以上であることに注意してください</font>。MQ-5センサーに関する詳細情報については、**リソース**セクションで提供されているデータシートを参照してください。

## 対応プラットフォーム

| Arduino | Raspberry Pi |
|---------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduino プラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能な MCU プラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

### Arduinoで遊ぶ

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - Gas Sensor(MQ5) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ購入</a>|<a href="https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-938.html" target="_blank">今すぐ購入</a>|

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/Read_Gas_Sensor_data_MQ2_MQ5.jpg) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/Read_Gas_Sensor_data_MQ2_MQ5.jpg" alt="pir" width={600} height="auto" /></p>

Grove - Gas Sensor(MQ5)をA0ポートに接続してください。上記の画像のように接続します。

#### ガス検知：基本例

この例では、センサーをA0ピンに接続します。センサーから読み取った電圧が表示されます。この値を閾値として使用し、ガス濃度の増減を検知することができます。

<div class="admonition note">
<p class="admonition-title">注意</p>
特定の空気条件に対する閾値を見つけるために追加のツールが必要です。その後、コード内で閾値を設定してください。
</div>

```
void setup() {
    Serial.begin(9600);
}

void loop() {
    float sensor_volt;
    float sensorValue;

    sensorValue = analogRead(A0);
    sensor_volt = sensorValue/1024*5.0;

    Serial.print("sensor_volt = ");
    Serial.print(sensor_volt);
    Serial.println("V");
    delay(1000);
}
```

#### 測定：概算

この例では、ガス濃度の概算を知る方法を示します。MQ5センサーのデータシートによると、これらの方程式は標準条件下でテストされており、校正されていません。温度や湿度の変化によって異なる場合があります。

1. ガスセンサーを清浄な空気環境に置き、以下のプログラムをアップロードしてください。

```
void setup() {
    Serial.begin(9600);
}

void loop() {
    float sensor_volt;
    float RS_air; // 清浄な空気中でRSの値を取得
    float R0;  // H2中でR0の値を取得
    float sensorValue;

        /*--- 100回のテストで平均データを取得 ---*/
    for(int x = 0 ; x < 100 ; x++)
    {
        sensorValue = sensorValue + analogRead(A0);
    }
    sensorValue = sensorValue/100.0;
        /*---------------------------------------*/

    sensor_volt = sensorValue/1024*5.0;
    RS_air = (5.0-sensor_volt)/sensor_volt; // *RLを省略
    R0 = RS_air/6.5; // グラフから清浄な空気中でのRS/R0比率は6.5（WebPlotDigitizerを使用して取得）

    Serial.print("sensor_volt = ");
    Serial.print(sensor_volt);
    Serial.println("V");

    Serial.print("R0 = ");
    Serial.println(R0);
    delay(1000);
}
```

2. 次に、Arduino IDEのシリアルモニターを開きます。R0の値を記録し、この値を次のプログラムで使用する必要があります。読み取り値が安定した後にR0を記録してください。

<font color="Red">以下のR0を上記でテストしたR0の値に置き換えてください</font>。センサーを上記のいずれかのガスにさらしてください。

```
void setup() {
    Serial.begin(9600);
}

void loop() {

    float sensor_volt;
    float RS_gas; // ガス中でのRS値を取得
    float ratio; // RS_GAS/RS_airの比率を取得
    int sensorValue = analogRead(A0);
    sensor_volt=(float)sensorValue/1024*5.0;
    RS_gas = (5.0-sensor_volt)/sensor_volt; // *RLを省略

          /*-最初のテストのデモでのR0の値に置き換えてください-*/
    ratio = RS_gas/R0;  // ratio = RS/R0
          /*---------------------------------------------*/

    Serial.print("sensor_volt = ");
    Serial.println(sensor_volt);
    Serial.print("RS_ratio = ");
    Serial.println(RS_gas);
    Serial.print("Rs/R0 = ");
    Serial.println(ratio);

    Serial.print("\n\n");

    delay(1000);

}
```

次に、以下の図からガス濃度を取得できます。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/Gas_Sensor_4.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/Gas_Sensor_4.png" alt="pir" width={600} height="auto" /></p>

図によると、テスト可能な最小濃度は200ppm、最大濃度は10000ppmであることがわかります。つまり、0.02%から1%の間のガス濃度を取得できます。ただし、比率と濃度の関係が非線形であるため、公式を提供することはできません。

### Raspberry Piで遊ぶ (Grove Base Hat for Raspberry Piを使用)

#### ハードウェア

- **ステップ1**. このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Gas Sensor(MQ5)|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-938.html)|

- **ステップ2**. Grove Base HatをRaspberry Piに接続します。
- **ステップ3**. Grove - Gas Sensor(MQ5)をBase HatのA0ポートに接続します。
- **ステップ4**. Raspberry PiをUSBケーブルを介してPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_MQ5/image/With_Hat.jpg) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_MQ5/image/With_Hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    ステップ3では、Grove - Gas Sensor(MQ5)を**任意のアナログポート**に接続できますが、対応するポート番号に合わせてコマンドを変更することを忘れないでください。
:::

#### ソフトウェア

- **ステップ 1**. [Setting Software](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) に従って開発環境を設定します。
- **ステップ 2**. grove.pyライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **ステップ 3**. 以下のコマンドを実行してコードを書きます。

```
cd grove.py/grove
nano grove_gas_sensor_mq5.py
```

次に、以下のコードをこのファイルにコピーし、++ctrl+x++を押して終了し、保存します。

```python
import math
import sys
import time
from grove.adc import ADC


class GroveGasSensorMQ5:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def MQ5(self):
        value = self.adc.read(self.channel)
        return value

Grove = GroveGasSensorMQ5


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveGasSensorMQ5(int(sys.argv[1]))

    print('Detecting...')
    while True:
        print('Gas value: {0}'.format(sensor.MQ5))
        time.sleep(.3)

if __name__ == '__main__':
    main()
```

- **ステップ 4**. 以下のコマンドを実行してコードを実行します。

```python
python grove_gas_sensor_mq5.py  0
```

:::success
    すべてが正常に動作すれば、以下の結果が表示されます。
:::

```python
pi@raspberrypi:~/grove.py/grove $ python grove_gas_sensor_mq5.py  0
Detecting...
Gas value: 28
Gas value: 28
Gas value: 27
Gas value: 26
Gas value: 26
^CTraceback (most recent call last):
  File "grove_gas_sensor_mq5.py", line 69, in <module>
    main()
  File "grove_gas_sensor_mq5.py", line 66, in main
    time.sleep(.3)
KeyboardInterrupt
```

このプログラムを終了するには、++ctrl+c++を押すだけです。

:::notice
    アナログポートの場合、シルクスクリーンのピン番号は**A0, A1**のようになっていますが、コマンドでは**0**や**1**というパラメータを使用します。デジタルポートと同じです。そのため、モジュールを正しいポートに接続してください。そうしないとピンの競合が発生する可能性があります。
:::

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/res/Gas_Sensor_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

**推奨読書 / 参考資料**

-   ガスセンサーの選び方
-   [LELとは](https://en.wikipedia.org/wiki/Flammability_limit)

**回路図**

-   [Grove Gas Sensor - EAGLE (回路図と基板ファイル)](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/res/Gas_Sensor_Eagle_files.zip)
-   [Grove Gas Sensor - PDF回路図](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/res/Gas_Sensor_Schematic.pdf)

**データシート**

-   [MQ-5 データシート](https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/res/MQ-5.pdf)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_Gas_Sensor(MQ5) から作成されました -->

## 技術サポート & 製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード可能
SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングをサポートするだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66のハウジング、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そして強力なAPPサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして8-in-1気象ステーション用センサーが含まれています。次の成功する産業プロジェクトには最新のSenseCAP S210xをぜひお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>