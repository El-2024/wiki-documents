---
description: 4WD メカナムホイールロボットキットシリーズ
title: 4WD メカナムホイールロボットキットシリーズ
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/4WD_Mecanum_Wheel_Robot_Kit_Series
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

4WD メカナムホイールロボットキットシリーズ製品は、メカナムホイールを基盤とした4輪駆動の移動プラットフォームです。各キットには、左用メカナムホイール2つと右用メカナムホイール2つが含まれています。4つのメカナムホイールはそれぞれ独立した制御が可能なモーターに接続されています。各ホイールの方向と速度に応じて、移動プラットフォームは前進、後退、横移動、その他任意の方向への移動や回転が可能です。このキットには、リモートコントロールを可能にする2つのモジュール（BLEモジュールとRFモジュール）を追加することができます。

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/4WD_Mecanum_Wheel_Robot_Kit-RF_Version-.PNG)

メカナムホイールは、車両を任意の方向に移動させることができるホイールの設計の一つです。これは、周囲に一連のローラーが取り付けられた従来型のホイールです。これらのローラーは、それぞれホイールの平面に対して45°、およびホイールの回転軸に平行な中心線に対して45°の回転軸を持っています。メカナムホイールには左用と右用の2種類があり、それらの違いはローラーの向きにあります。以下に示すように、左用メカナムホイールではローラーが右下から左上に向かって配置されています。一方、右用ホイールのローラーは逆方向に取り付けられています。

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/LeftAndRight_Mecanum_Wheel.PNG)

4WD メカナムホイールキットの取り付けには注意が必要です。正しい構成では、以下に示すように、4つのホイールそれぞれの上部ローラーの回転軸がプラットフォームの中心を指すように設定する必要があります。この構成に基づいて、すべての動的解析と事前に書かれたコードが設計されています。

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Mecanum_Wheel_Installation_02.PNG)

角度のついた周辺ローラーは、ホイールの回転方向の力の一部をホイール方向に垂直な力に変換します。各ホイールの方向と速度に応じて、これらの力の組み合わせにより、任意の方向に向かう合計の力ベクトルが生成されます。ホイールの半径をR、4つのホイールの角速度をω1、ω2、ω3、ω4、各ホイールのローラーの速度を_ν_g1、_ν_g2、_ν_g3、_ν_g4、プラットフォームのx方向、y方向の速度および角速度を_ν_x、_ν_y、ω0とします。グローバル座標系の原点はプラットフォームの中心Oにあり、各ホイールのローカル座標系の原点はO1、O2、O3、O4です。プラットフォームの中心からホイールの中心までの距離をL1、プラットフォームの中心からホイールの回転軸までの距離をL2とします。ローラーの角度αは45°です。

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Coordinate_System.PNG)

グローバル座標系において、ホイール1の中心O1の速度は以下の通りです。

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Velocity_of_O1.PNG)

一方、ホイール1のローカル座標系におけるO1の速度は以下の通りです。

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Velocity_of_O12.PNG)

式(1)～(4)を組み合わせると、以下の式が得られます。

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Mecanum_Equation_010.PNG)

式(5)と(6)を解くと、ホイール1の角速度は以下の通りです。

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Mecanum_Equation_02.PNG)

同様に、他の3つのホイールの速度も以下のように計算できます。

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Mecanum_Equation_03.PNG)

式(8)は、ホイールの回転速度とプラットフォームの動きの関係を示しています。理論的には、4つのホイールの角速度を適切に組み合わせることで、プラットフォームは任意の方向に移動できます。しかし、実際には、このプラットフォームで最も一般的に使用される動きは非常に限られています。以下に、プラットフォームの簡略化された動作原理を示します。数式や計算が苦手な場合は、動的解析のセクションを無視して、以下の図を参照してください。

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Working_Principle-Simplified-.PNG)

4つのホイールを同じ方向に動かすと前進または後退し、一方の側のホイールを反対方向に動かすと車両が回転します。また、対角線上のホイールを反対方向に動かすと横方向に移動します。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/4WD-Mecanum-Wheel-Robot-Kit-p-2276.html)

## 特徴

* メカナムホイール内蔵

* 全方向移動性

* 高い荷重容量

* 柔軟性と拡張性

* RF/BLE制御オプション

## 部品リスト

1. 左メカナムホイールキット

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Left_Mecanum_Wheel_Kit.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col">
</th>
<th scope="col"> 部品名
</th>
<th scope="col"> 仕様
</th>
<th scope="col"> 材質
</th>
<th scope="col"> 数量
</th></tr>
<tr>
<th scope="row"> 1
</th>
<td> 左メカナムホイール
</td>
<td> Φ60mm H32mm
</td>
<td> アルミニウム＆ゴム
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 2
</th>
<td> DCモーター
</td>
<td> 25GA 370
</td>
<td> 金属
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 3
</th>
<td> DCモーター用モーターサポート
</td>
<td> 25シリーズ
</td>
<td> 金属
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 4
</th>
<td> シャフトコネクター
</td>
<td> Ф13.9mm*23mm/6mm
</td>
<td> アルミニウム
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 5
</th>
<td> セットスクリュー
</td>
<td> M3×5
</td>
<td> 金属
</td>
<td> 2 個
</td></tr>
<tr>
<th scope="row"> 6
</th>
<td> スクリュー、スプリングロックワッシャーおよび平ワッシャーアセンブリ
</td>
<td> M4×18
</td>
<td> 金属
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 7
</th>
<td> 十字穴付き丸頭スクリュー
</td>
<td> M3×8
</td>
<td> 金属
</td>
<td> 2 個
</td></tr>
<tr>
<th scope="row"> 8
</th>
<td> ワッシャー付き十字穴付き丸頭スクリュー
</td>
<td> M3×8
</td>
<td> 金属
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 9
</th>
<td> 六角ナット
</td>
<td> M3
</td>
<td> 金属
</td>
<td> 4 個
</td></tr></table>

2. 右メカナムホイールキット

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Right_Mecanum_Wheel_Kit.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col">
</th>
<th scope="col"> 部品名
</th>
<th scope="col"> 仕様
</th>
<th scope="col"> 材質
</th>
<th scope="col"> 数量
</th></tr>
<tr>
<th scope="row"> 1
</th>
<td> 右メカナムホイール
</td>
<td> Φ60mm H32mm
</td>
<td> アルミニウム＆ゴム
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 2
</th>
<td> DCモーター
</td>
<td> 25GA 370
</td>
<td> 金属
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 3
</th>
<td> DCモーター用モーターサポート
</td>
<td> 25シリーズ
</td>
<td> 金属
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 4
</th>
<td> シャフトコネクター
</td>
<td> Ф13.9mm*23mm/6mm
</td>
<td> アルミニウム
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 5
</th>
<td> セットスクリュー
</td>
<td> M3×5
</td>
<td> 金属
</td>
<td> 2 個
</td></tr>
<tr>
<th scope="row"> 6
</th>
<td> スクリュー、スプリングロックワッシャーおよび平ワッシャーアセンブリ
</td>
<td> M4×18
</td>
<td> 金属
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 7
</th>
<td> 十字穴付き丸頭スクリュー
</td>
<td> M3×8
</td>
<td> 金属
</td>
<td> 2 個
</td></tr>
<tr>
<th scope="row"> 8
</th>
<td> ワッシャー付き十字穴付き丸頭スクリュー
</td>
<td> M3×8
</td>
<td> 金属
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 9
</th>
<td> 六角ナット
</td>
<td> M3
</td>
<td> 金属
</td>
<td> 4 個
</td></tr></table>

3. 基本バージョン

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Part_List_for_Basic_Version.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col">
</th>
<th scope="col"> 部品名
</th>
<th scope="col"> 仕様
</th>
<th scope="col"> 材質
</th>
<th scope="col"> 数量
</th></tr>
<tr>
<th scope="row"> 1
</th>
<td> シャーシ
</td>
<td> 250*145*5mm, 黒
</td>
<td> PMMA
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 2
</th>
<td> 上部デッキ
</td>
<td> 192*145*5mm, 黒
</td>
<td> PMMA
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 3
</th>
<td> バッテリーカバー
</td>
<td> 68*47*2mm, 黒
</td>
<td> PMMA
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 4
</th>
<td> 左メカナムホイール
</td>
<td> Φ60mm H32mm
</td>
<td> アルミニウム＆ゴム
</td>
<td> 2 個
</td></tr>
<tr>
<th scope="row"> 5
</th>
<td> 右メカナムホイール
</td>
<td> Φ60mm H32mm
</td>
<td> アルミニウム＆ゴム
</td>
<td> 2 個
</td></tr>
<tr>
<th scope="row"> 6
</th>
<td> DCモーター
</td>
<td> 25GA 370
</td>
<td> 金属
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 7
</th>
<td> DCモーター用モーターサポート
</td>
<td> 25シリーズ
</td>
<td> 金属
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 8
</th>
<td> シャフトコネクター
</td>
<td> Ф13.9mm*23mm/6mm
</td>
<td> アルミニウム
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 9
</th>
<td> セットスクリュー
</td>
<td> M3×5
</td>
<td> 金属
</td>
<td> 8 個
</td></tr>
<tr>
<th scope="row"> 10
</th>
<td> スクリュー、スプリングロックワッシャーおよび平ワッシャーアセンブリ
</td>
<td> M4×18
</td>
<td> 金属
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 11
</th>
<td> スクリュー、スプリングロックワッシャーおよび平ワッシャーアセンブリ
</td>
<td> M2×8
</td>
<td> 金属
</td>
<td> 20 個
</td></tr>
<tr>
<th scope="row"> 12
</th>
<td> 十字穴付き丸頭スクリュー
</td>
<td> M3×8
</td>
<td> 金属
</td>
<td> 26 個
</td></tr>
<tr>
<th scope="row"> 13
</th>
<td> ワッシャー付き十字穴付き丸頭スクリュー
</td>
<td> M3×8
</td>
<td> 金属
</td>
<td> 16 個
</td></tr>
<tr>
<th scope="row"> 14
</th>
<td> 六角ナット
</td>
<td> M3
</td>
<td> 金属
</td>
<td> 16 個
</td></tr>
<tr>
<th scope="row"> 15
</th>
<td> 六角距離ホルダー
</td>
<td> M3×40
</td>
<td> 金属
</td>
<td> 5 個
</td></tr>
<tr>
<th scope="row"> 16
</th>
<td> 六角距離ホルダー
</td>
<td> M3×10
</td>
<td> 金属
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 17
</th>
<td> 六角距離ホルダー
</td>
<td> M2×15
</td>
<td> 金属
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 18
</th>
<td> 六角距離ホルダー
</td>
<td> M2×10
</td>
<td> 金属
</td>
<td> 6 個
</td></tr></table>

4. RFバージョン

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Parts_of_Mecanum_Wheel_Robot_Kit-RF_Version-.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col">
</th>
<th scope="col"> 部品名
</th>
<th scope="col"> 仕様
</th>
<th scope="col"> 材質
</th>
<th scope="col"> 数量
</th></tr>
<tr>
<th scope="row"> 1
</th>
<td> シャーシ
</td>
<td> 250*145*5mm, 黒
</td>
<td> PMMA
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 2
</th>
<td> 上部デッキ
</td>
<td> 192*145*5mm, 黒
</td>
<td> PMMA
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 3
</th>
<td> バッテリーカバー
</td>
<td> 68*47*2mm, 黒
</td>
<td> PMMA
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 4
</th>
<td> リモートコントロールパネル
</td>
<td> 165*90*4mm, 透明
</td>
<td> PMMA
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 5
</th>
<td> 左メカナムホイール
</td>
<td> Φ60mm H32mm
</td>
<td> アルミニウム＆ゴム
</td>
<td> 2 個
</td></tr>
<tr>
<th scope="row"> 6
</th>
<td> 右メカナムホイール
</td>
<td> Φ60mm H32mm
</td>
<td> アルミニウム＆ゴム
</td>
<td> 2 個
</td></tr>
<tr>
<th scope="row"> 7
</th>
<td> DCモーター
</td>
<td> 25GA 370
</td>
<td> 金属
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 8
</th>
<td> DCモーター用モーターサポート
</td>
<td> 25シリーズ
</td>
<td> 金属
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 9
</th>
<td> シャフトコネクター
</td>
<td> Ф13.9mm*23mm/6mm
</td>
<td> アルミニウム
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 10
</th>
<td> セットスクリュー
</td>
<td> M3×5
</td>
<td> 金属
</td>
<td> 8 個
</td></tr>
<tr>
<th scope="row"> 11
</th>
<td> スクリュー、スプリングロックワッシャーおよび平ワッシャーアセンブリ
</td>
<td> M4×18
</td>
<td> 金属
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 12
</th>
<td> スクリュー、スプリングロックワッシャーおよび平ワッシャーアセンブリ
</td>
<td> M2×8
</td>
<td> 金属
</td>
<td> 32 個
</td></tr>
<tr>
<th scope="row"> 13
</th>
<td> 十字穴付き丸頭スクリュー
</td>
<td> M3×8
</td>
<td> 金属
</td>
<td> 34 個
</td></tr>
<tr>
<th scope="row"> 14
</th>
<td> ワッシャー付き十字穴付き丸頭スクリュー
</td>
<td> M3×8
</td>
<td> 金属
</td>
<td> 16 個
</td></tr>
<tr>
<th scope="row"> 15
</th>
<td> 六角ナット
</td>
<td> M3
</td>
<td> 金属
</td>
<td> 16 個
</td></tr>
<tr>
<th scope="row"> 16
</th>
<td> 六角距離ホルダー
</td>
<td> M3×40
</td>
<td> 金属
</td>
<td> 5 個
</td></tr>
<tr>
<th scope="row"> 17
</th>
<td> 六角距離ホルダー
</td>
<td> M3×10
</td>
<td> 金属
</td>
<td> 8 個
</td></tr>
<tr>
<th scope="row"> 18
</th>
<td> 六角距離ホルダー
</td>
<td> M2×15
</td>
<td> 金属
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 19
</th>
<td> 六角距離ホルダー
</td>
<td> M2×10
</td>
<td> 金属
</td>
<td> 12 個
</td></tr>
<tr>
<th scope="row"> 20
</th>
<td> [Grove - I2C Motor Driver](https://www.seeedstudio.com/depot/Grove-I2C-Motor-Driver-p-907.html)
</td>
<td>
</td>
<td>
</td>
<td> 2 個
</td></tr>
<tr>
<th scope="row"> 21
</th>
<td> [RF Bee](https://www.seeedstudio.com/depot/RFbee-V11-Wireless-arduino-compatible-node-p-614.html?cPath=19_22)
</td>
<td>
</td>
<td>
</td>
<td> 2 個
</td></tr>
<tr>
<th scope="row"> 22
</th>
<td> [Grove - XBee Carrier](https://www.seeedstudio.com/depot/Grove-XBee-Carrier-p-905.html?cPath=98_16)
</td>
<td>
</td>
<td>
</td>
<td> 2 個
</td></tr>
<tr>
<th scope="row"> 23
</th>
<td> [Grove - Thumb Joystick](https://www.seeedstudio.com/depot/Grove-Thumb-Joystick-p-935.html?cPath=85_51)
</td>
<td>
</td>
<td>
</td>
<td> 2 個
</td></tr>
<tr>
<th scope="row"> 24
</th>
<td> [Grove - Universal 4 Pin Buckled 20cm Cable](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-20cm-Cable-5-PCs-pack-p-936.html)
</td>
<td>
</td>
<td>
</td>
<td> 2 個
</td></tr>
<tr>
<th scope="row"> 25
</th>
<td> [Grove - Branch Cable](https://www.seeedstudio.com/depot/Grove-Branch-Cable-5PCs-pack-p-847.html)
</td>
<td>
</td>
<td>
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 26
</th>
<td> 電源ケーブル
</td>
<td> 100mm, 黒
</td>
<td>
</td>
<td> 3 個
</td></tr>
<tr>
<th scope="row"> 27
</th>
<td> 電源ケーブル
</td>
<td> 100mm, 赤
</td>
<td>
</td>
<td> 3 個
</td></tr>
<tr>
<th scope="row"> 28
</th>
<td> ロッカースイッチ
</td>
<td>
</td>
<td>
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 29
</th>
<td> T型プラグ
</td>
<td>
</td>
<td>
</td>
<td> 1 個
</td></tr></table>

### 5. BLE バージョン

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Parts_of_Mecanum_Wheel_Robot_Kit-BLE_Version-.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col">
</th>
<th scope="col"> 部品名
</th>
<th scope="col"> 仕様
</th>
<th scope="col"> 材質
</th>
<th scope="col"> 数量
</th></tr>
<tr>
<th scope="row"> 1
</th>
<td> シャーシ
</td>
<td> 250*145*5mm, ブラック
</td>
<td> PMMA
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 2
</th>
<td> アッパーデッキ
</td>
<td> 192*145*5mm, ブラック
</td>
<td> PMMA
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 3
</th>
<td> バッテリーカバー
</td>
<td> 68*47*2mm, ブラック
</td>
<td> PMMA
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 4
</th>
<td> 左メカナムホイール
</td>
<td> Φ60mm H32mm
</td>
<td> アルミニウム＆ゴム
</td>
<td> 2 個
</td></tr>
<tr>
<th scope="row"> 5
</th>
<td> 右メカナムホイール
</td>
<td> Φ60mm H32mm
</td>
<td> アルミニウム＆ゴム
</td>
<td> 2 個
</td></tr>
<tr>
<th scope="row"> 6
</th>
<td> DC モーター
</td>
<td> 25GA 370
</td>
<td> 金属
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 7
</th>
<td> DC モーター用モーターサポート
</td>
<td> 25 シリーズ
</td>
<td> 金属
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 8
</th>
<td> シャフトコネクタ
</td>
<td> Ф13.9mm*23mm/6mm
</td>
<td> アルミニウム
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 9
</th>
<td> セットスクリュー
</td>
<td> M3×5
</td>
<td> 金属
</td>
<td> 8 個
</td></tr>
<tr>
<th scope="row"> 10
</th>
<td> スクリュー、スプリングロックワッシャーおよび平ワッシャーアセンブリ
</td>
<td> M4×18
</td>
<td> 金属
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 11
</th>
<td> スクリュー、スプリングロックワッシャーおよび平ワッシャーアセンブリ
</td>
<td> M2×8
</td>
<td> 金属
</td>
<td> 20 個
</td></tr>
<tr>
<th scope="row"> 12
</th>
<td> 十字穴付き丸頭スクリュー
</td>
<td> M3×8
</td>
<td> 金属
</td>
<td> 10 個
</td></tr>
<tr>
<th scope="row"> 13
</th>
<td> ワッシャー付き十字穴付き丸頭スクリュー
</td>
<td> M3×8
</td>
<td> 金属
</td>
<td> 32 個
</td></tr>
<tr>
<th scope="row"> 14
</th>
<td> 六角ナット
</td>
<td> M3
</td>
<td> 金属
</td>
<td> 16 個
</td></tr>
<tr>
<th scope="row"> 15
</th>
<td> 六角スペーサー
</td>
<td> M3×40
</td>
<td> 金属
</td>
<td> 5 個
</td></tr>
<tr>
<th scope="row"> 16
</th>
<td> 六角スペーサー
</td>
<td> M3×10
</td>
<td> 金属
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 17
</th>
<td> 六角スペーサー
</td>
<td> M2×15
</td>
<td> 金属
</td>
<td> 4 個
</td></tr>
<tr>
<th scope="row"> 18
</th>
<td> 六角スペーサー
</td>
<td> M2×10
</td>
<td> 金属
</td>
<td> 6 個
</td></tr>
<tr>
<th scope="row"> 19
</th>
<td> [Grove - I2C モータードライバ](https://www.seeedstudio.com/depot/Grove-I2C-Motor-Driver-p-907.html)
</td>
<td>
</td>
<td>
</td>
<td> 2 個
</td></tr>
<tr>
<th scope="row"> 20
</th>
<td> [Grove - BLE](https://www.seeedstudio.com/depot/Grove-BLE-p-1929.html)
</td>
<td>
</td>
<td>
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 21
</th>
<td> [Seeeduino](https://www.seeedstudio.com/depot/Seeeduino-V30-Atmega-328P-p-669.html)
</td>
<td>
</td>
<td>
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 22
</th>
<td> [Base Shield](https://www.seeedstudio.com/depot/Base-Shield-V2-p-1378.html)
</td>
<td>
</td>
<td>
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 23
</th>
<td> [Grove - ユニバーサル 4 ピンバックル 20cm ケーブル](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-20cm-Cable-5-PCs-pack-p-936.html)
</td>
<td>
</td>
<td>
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 24
</th>
<td> [Grove - ブランチケーブル](https://www.seeedstudio.com/depot/Grove-Branch-Cable-5PCs-pack-p-847.html)
</td>
<td>
</td>
<td>
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 25
</th>
<td> 電源ケーブル
</td>
<td> 100mm, ブラック
</td>
<td>
</td>
<td> 3 個
</td></tr>
<tr>
<th scope="row"> 26
</th>
<td> 電源ケーブル
</td>
<td> 100mm, レッド
</td>
<td>
</td>
<td> 3 個
</td></tr>
<tr>
<th scope="row"> 27
</th>
<td> ロッカースイッチ
</td>
<td>
</td>
<td>
</td>
<td> 1 個
</td></tr>
<tr>
<th scope="row"> 28
</th>
<td> T字型プラグ
</td>
<td>
</td>
<td>
</td>
<td> 1 個
</td></tr></table>

## 組み立て手順

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Assembly_Instructions.PNG)

## 添付資料

[モーター仕様](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/res/Motor_Specs_for_4WD_Mecanum_Wheel_Robot_Kit_Series_Products.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>