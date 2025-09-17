---
description: このwikiは、Raspberry Pi 4ベースの産業用IoTエッジHMIであるreTerminal DMの操作に関する包括的なガイドを提供します。Node-REDのセットアップ、YABEを使用した室温シミュレーション、効率的なビル管理システム（BMS）統合のためのBACnet IPデバイスパラメータの検出と読み取りの手順が含まれています。

title: reTerminal DMとNode Red、BACnet TCP
keywords:
  - BMS
  - HMI
  - Raspberry pi
  - Node-Red
  - Bacnet
image: https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet-reterminaldm.png
slug: /ja/reterminal_dm_rpi_200_node_red_bacnet_tcp
last_update:
  date: 06/26/2024
  author: Kasun Thushara
---
## はじめに

BACnet IP（Building Automation and Control Network over IP）は、ビルシステムの管理と自動化のために設計された通信プロトコルです。異なるメーカーのデバイスが標準IPネットワーク上でシームレスに相互運用できるようにし、システム統合と柔軟性を向上させます。ビル管理システム（BMS）におけるBACnet IPの主な利点には、スケーラビリティの向上、設置とメンテナンスの簡素化、既存のネットワークインフラストラクチャの活用能力が含まれます。BACnet IPはリアルタイムデータ交換もサポートし、ビルシステムのより良い監視と制御を促進します。これにより、エネルギー効率の向上、運用コストの削減、居住者の快適性と安全性の向上が実現されます。

## はじめに

このプロジェクトを開始する前に、ここで説明されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

### ハードウェア

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### ソフトウェアの準備

[Node-REDを使った入門ガイド](https://wiki.seeedstudio.com/ja/reTerminal-DM-Getting-Started-with-Node-Red/)を用意しました。このwikiに進む前に、このガイドを確認することをお勧めします。

### YABE

この[リンク](https://sourceforge.net/projects/yetanotherbacnetexplorer/)にアクセスして、YABE（Yet Another BACnet Explorer）をダウンロードしてください。YABEはBACnetデバイスをシミュレートし、探索することができる多機能ツールで、テストや開発目的に最適です。ホストPCにダウンロードしてインストールすると、YABEを使用して室温データをシミュレートし、reTerminal DMのNode-REDを使ってそのデータを読み取り、処理します。

### BACnet IP用のイーサネット設定の構成

デバイスのIPドメインがワイヤレス設定と異なるため、IP設定を手動で変更する必要がある場合があります。そのために、

- **ステップ01**: 次のコマンドを実行します：

```sh
sudo nano /etc/dhcpcd.conf
```

- **ステップ 02**: 次に、PLC/デバイスのネットワークドメインに応じてイーサネットポートの設定を構成し、**metric** コマンドを使用して優先度を設定します。最も低いメトリックが最も高い優先度を持ちます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/ipconfig.PNG"/></center>

## BACnet ノードのインストール

1. **Node-REDを開く:**
   reTerminalでNode-REDを起動します。通常、Webブラウザを開いて `http://<your-reTerminal-DM-ip>:1880` にアクセスすることでアクセスできます。

2. **パレット管理にアクセス:**
   Node-REDインターフェースの右上角にある3本の水平線（メニュー）をクリックしてメインメニューを開きます。ドロップダウンメニューから「Manage palette」を選択します。

3. **新しいノードをインストール:**
   「Manage palette」ウィンドウで、「Install」タブに移動します。

4. **パッケージを検索:**
   検索ボックスに `node-red-contrib-bacnet-extended` と入力してパッケージを見つけます。

5. **パッケージをインストール:**
   利用可能なノードのリストに `node-red-contrib-bacnet-extended` が表示されたら、その横にある「Install」ボタンをクリックします。これによりインストールプロセスが開始されます。

6. **インストール完了を待つ:**
   インストールには数分かかる場合があります。完了すると、確認メッセージが表示されます。

7. **インストールを確認:**
   インストールが完了すると、BACnet ノードがNode-REDパレットで利用可能になります。Node-REDエディターの左サイドバーのノードリストを確認することで、これを確認できます。

これで、`node-red-contrib-bacnet-extended` のインストールが正常に完了し、Node-REDフローで BACnet デバイスを統合するために使用を開始できます。

## 室温コントローラーシミュレーターの開始

YABEをインストールしたら、`add-on` フォルダに移動し、`bacnet.Room.Simulator` をダブルクリックして起動します。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/room-simulator.PNG" /></center>

完了したら、YABEを起動する必要があります。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/Yabe-app.png" /></center>

次に、`+` マークをクリックしてデバイスを追加し、PCのイーサネットポートのIPアドレスを入力します。「Start」をクリックします。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/YABE-config.PNG" /></center>

:::note
reTerminal DMとPCの両方が同じネットワークドメインにあることを確認するために、イーサネットポートのIPアドレスを設定する必要がある場合があります。
:::

その後、室温シミュレーターと同じデバイスIDを持つデバイスが表示されるはずです。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/simulator&YABE.PNG" /></center>

## BACnet IPデバイスの発見

1. **必要なノード:**
   以下の4つのノードが必要です:
   - Inject
   - Function
   - Discover-devices
   - Debug

2. **フローにノードを追加:**
   上記のノードをNode-REDワークベンチフローにドラッグアンドドロップします。

3. **ノードを接続:**
   以下の方法でノードを接続します:
   - Inject >>> Function >>> Discover-devices >>> Debug

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/discover-device.PNG" /></center>

4. **Functionノードを設定:**
   Functionノードをダブルクリックして設定ダイアログを開きます。ファンクションブロックに以下のコードを記述します:

   ```javascript
   msg.reuseAddr = true;
   msg.transportClosedDuration = 8000;
   return msg;
   ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/discover-func.PNG" /></center>

5. **フローをデプロイする:**
   Node-REDインターフェースの右上角にある「Deploy」ボタンをクリックしてフローをデプロイします。

6. **デバイス検出をトリガーする:**
   タイムスタンプボタン（Injectノード）をクリックして検出プロセスを開始します。

7. **デバッグ出力を確認する:**
   Debugウィンドウに出力が表示されるまで待ちます。デバッグメッセージでデバイスIPとデバイスIDが表示されます。

<center><img width={600} height={400} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/debug-discover.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet1.gif" /></center>

## 全デバイスパラメータの読み取り

Node-REDを使用してBACnetデバイスから全パラメータを読み取るには、以下の手順に従ってください：

1. **ノードを準備する:**
   - 4つのノードが必要です：Inject、Function、Read-All-Devices、Debug。

2. **ワークベンチにノードを追加する:**
   - Inject、Function、Read-All-Devices、Debugノードをワークベンチにドラッグ&ドロップします。

3. **ノードを接続する:**
   - 以下の順序でノードを接続します：

     ```
     Inject >>>> Function >>>> Read-All-Devices >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/read-all-devices.PNG" /></center>

4. **Functionノードを設定する:**
   - Functionノードをダブルクリックして設定ウィンドウを開きます。
   - ファンクションブロックに以下のコードを入力します：
   -

     ```javascript
     msg.reuseAddr = true;
     msg.transportClosedDuration = 8000;
     return msg;
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/discover-func.PNG" /></center>

5. **フローをデプロイする:**
   - Node-REDインターフェースの右上角にある「Deploy」ボタンをクリックしてフローをデプロイします。

6. **デバイスパラメータ読み取りを開始する:**
   - Injectノードのタイムスタンプボタンをクリックしてプロセスを開始します。

7. **出力を確認する:**
   - Debugウィンドウに出力が表示されるまで待ちます。BACnetネットワークエリア内のデバイスのパラメータが表示されます。

この設定により、ネットワーク上のBACnetデバイスから全パラメータを読み取り、Node-REDのDebugウィンドウに表示します。

<center><img width="300" src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/debug-read-all.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet2.gif" /></center>

## 単一デバイスデータの読み取り

1. **ノードを準備する:**
   - 4つのノードが必要です：Inject、Function、Read-All-Devices、Debug。

2. **ワークベンチにノードを追加する:**
   - Inject、Function、Read-Single-Device、Debugノードをワークベンチにドラッグ&ドロップします。

3. **ノードを接続する:**
   - 以下の順序でノードを接続します：

     ```
     Inject >>>> Function >>>> Read-Single-Device >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/read-single-device.PNG" /></center>

4. **Functionノードを設定する:**
   - Functionノードをダブルクリックして設定ウィンドウを開きます。
   - ファンクションブロックに以下のコードを入力します：
   -

     ```javascript
        msg.deviceId=DeviceID;
        msg.address="IP:PORT ADD";
        return msg;
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/read-single-func.PNG" /></center>

5. **フローをデプロイする:**
   - Node-REDインターフェースの右上角にある「Deploy」ボタンをクリックしてフローをデプロイします。

6. **デバイスパラメータ読み取りを開始する:**
   - Injectノードのタイムスタンプボタンをクリックしてプロセスを開始します。

7. **出力を確認する:**
   - Debugウィンドウに出力が表示されるまで待ちます。BACnetネットワークエリア内の選択されたデバイスのパラメータが表示されます。

<center><img width={300} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/debug-single-device.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet3.gif" /></center>

## 単一デバイスの特定オブジェクトデータの読み取り

1. **ノードの準備:**
   - 4つのノードが必要です：Inject、2つのFunctionノード、Read-Single-Device、およびDebug。

2. **ワークベンチにノードを追加:**
   - Inject、2つのFunctionノード、Read-Single-Device、およびDebugノードをワークベンチにドラッグ&ドロップします。

3. **ノードの接続:**
   - 以下の順序でノードを接続します：

     ```
     Inject >>>> Function >>>> Read-Single-Devices >>>> Function >>>> Debug
     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/single-object.PNG" /></center>

4. **Functionノードの設定:**
   - Injectノードの近くにあるFunctionノードをダブルクリックして設定ウィンドウを開きます。
   - Functionブロックに以下のコードを入力します：
   -

     ```javascript
        msg.deviceId=DeviceID;
        msg.address="IP:PORT ADD";
        return msg;
     ```

   - Debugノードの近くにあるFunctionノードをダブルクリックして設定ウィンドウを開きます。
   - Functionブロックに以下のコードを入力します：
   -

     ```javascript
        const objects = msg.payload['OBJECT_LIST(76)'];
        let temperatureIndoor = null;

        for (let obj of objects) {
        if (obj['OBJECT_NAME(77)'] === 'Temperature.Indoor' && obj['OBJECT_TYPE(79)'] === 'ANALOG_INPUT(0)') {
        temperatureIndoor = obj['PRESENT_VALUE(85)'];
        break;
        }
        }

        if (temperatureIndoor !== null) {
        msg.payload = { 'Temperature.Indoor': temperatureIndoor };
        } else {
        msg.payload = { error: 'Temperature.Indoor not found' };
        }

        return msg;

     ```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/single-object-func.PNG" /></center>

5. **フローのデプロイ:**
   - Node-REDインターフェースの右上角にある「Deploy」ボタンをクリックしてフローをデプロイします。

6. **デバイスパラメータ読み取りの開始:**
   - Injectノードのタイムスタンプボタンをクリックしてプロセスを開始します。

7. **出力の確認:**
   - Debugウィンドウに出力が表示されるまで待ちます。BACnetネットワークエリア内の選択されたデバイスの特定のオブジェクトのパラメータのみが表示されます。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/debug-single-object.PNG" /></center>

<center><img width={800} src="https://files.seeedstudio.com/wiki/reTerminalDM/nodered/bacnet4.gif" /></center>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
