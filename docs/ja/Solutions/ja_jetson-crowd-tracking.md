---
description: Jetson群衆追跡のAIデモを紹介します
title: 群衆追跡・カウンティング
image: https://files.seeedstudio.com/wiki/solution/crowd_tracking/crowd%20tracking.webp
slug: /ja/solutions/jetson-crowd-tracking
last_update:
  date: 08/15/2025
  author: lian
---

このガイドは **NVIDIA Jetson Ubuntu 22 + JetPack 6.x** 環境向けで、デプロイメントを迅速に完了するのに役立ちます。

## 📋 環境要件

- **デバイス**: NVIDIA Jetsonシリーズ（Nano、Xavier、Orinなど）
- **システム**: Ubuntu 22.x + JetPack 6.x
- **ネットワーク**: GitHubとDocker Hubにアクセス可能
- **権限**: `sudo`権限

> お使いのデバイスに適切なシステム環境がまだインストールされていない場合は、システムインストールと環境準備について公式フラッシュガイドを参照してください：  
> [JetPack フラッシュチュートリアル（Seeed Studio）](/flash/jetpack_to_selected_product/)

## ⚡ ワンクリックデプロイメント

Jetsonデバイスのターミナルで以下のコマンドを実行してください：

```bash
curl -fsSL https://raw.githubusercontent.com/Seeed-Studio/SenseCraft-AI_Server/refs/heads/jetson/scripts/install.sh | bash
```

> 💡 このスクリプトは**冪等実行**をサポートしており、複数回実行しても安全です。

## 🔍 デプロイメントプロセス

このスクリプトは以下のステップを自動的に実行します：

1. **Docker (27.x) のインストール**  
   - Docker がインストールされているかチェック  
   - インストール済みだがバージョン 27.x でない場合 → 自動的にアンインストールして再インストール  
   - NVIDIA Container Toolkit を設定  
   - Docker のデフォルトランタイムを `nvidia` に設定

2. **MQTT ブローカーのインストール**  
   - `mosquitto` と `mosquitto-clients` をインストール  
   - 外部アクセスを許可するよう設定：  

     ```shell
     listener 1883 0.0.0.0
     allow_anonymous true
     ```

3. **SenseCraft AI Server のデプロイ**  
   - 指定されたブランチを `~/sensecraft-ai_server` にクローン  
   - `scripts/run.sh` を実行してサービスを開始  
   - YOLOv11 モデルを `~/sensecraft-ai_server/models/yolo11n.pt` にダウンロード

---

## 🛡 例外処理

- **冪等実行**:  
  - **ほとんどの問題**（例：ネットワーク中断、部分的なインストール失敗）は**単純にスクリプトを再実行する**ことで修正可能  
  - スクリプトはソフトウェアのバージョンと設定をチェックし、不足または不正確な部分のみをインストール  
- **稀な問題**（例：apt ソースの永続的な障害、外部リポジトリへの到達不可）は手動介入が必要

---

## 🖥 サービスの開始とアクセス

1. **サービスの開始**  

   ```bash
   cd ~/sensecraft-ai_server
   sudo bash scripts/run.sh
   ```

### 📷 コマンドライン出力（例）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Command%20Line%20Output%20%28Example%29.png" alt="Command"/></div>

2. **メインページにアクセス**  
   - ブラウザで：  

     ```bash
     http://<JETSON_IP>:46654
     ```

   - デフォルトパラメータが事前設定されています；開始して結果を確認してください

### 📷 Web インターフェース（例）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Web%20Interface%20%28Example%29.png"/></div>

3. **設定ページにアクセス**  
   - ブラウザで：  

     ```bash
     http://<JETSON_IP>:46654/config.html
     ```

   - ここでビデオソース、モデル、推論パラメータなどを調整し、サーバーに保存できます

## ⚙ 設定ページ概要

### 📷 設定ページ（例）

<div style={{textAlign:'center'}}><img  alt="Configuration" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Configuration%20Page%20%28Example%29.png"/></div>

### ビデオソース

- **ローカルビデオファイル**、**USB カメラ**（デフォルトは最初のデバイス）、**RTSP ストリーム**をサポート
- MP4、AVI、MOV、MKV のアップロードをサポート
- アップロードされたビデオソースの表示と削除

### AI モデル

- 利用可能な AI 推論モデルから選択
- `.pt`、`.pth`、`.onnx`、`.engine` 形式をサポート
- アップロードされたモデルの表示と削除

### 推論パラメータ

- **信頼度閾値**: 0.1–1.0
- **最大検出数**: 1–1000
- **半精度推論**: 速度を向上（小さなモデルでは最小限の差）

### 表示

- 検出ボックスの表示（カスタマイズ可能な色、デフォルトはオレンジ）
- タイムスタンプと FPS は常に有効

### トラッキング

- マルチオブジェクトトラッキングを有効化
- カスタマイズ可能な長さ、太さ、色の軌跡線を表示

### トリップワイヤー検出

- 水平または垂直トリップワイヤーをサポート（垂直を推奨）
- 開始/終了点を描画；リアルタイムデバッグのための表示を有効化
- 許容範囲: 1–20 ピクセル
- カスタマイズ可能な色と太さ
- カウンターの表示/非表示とリセット（サービス再起動時にリセット）

### 設定管理

- 現在の設定をサーバーに保存（実行時に読み込まれます）
- 設定ファイルのエクスポート/インポート
- デフォルト設定の復元

---

## 🛠 よくある問題

| 問題                        | 原因                      | 解決方法                                                              |
| ---------------------------- | -------------------------- | --------------------------------------------------------------------- |
| `Docker installation failed` | ネットワークが不安定またはソース | ネットワークを確認してスクリプトを再実行                                   |
| Mosquitto に接続できない     | ファイアウォール/設定の問題      | `/etc/mosquitto/mosquitto.conf` に `listener 1883 0.0.0.0` が含まれていることを確認 |
| YOLO モデルがダウンロードされない    | ネットワーク中断       | `~/sensecraft-ai_server/models/yolo11n.pt` を削除してスクリプトを再実行 |


---

## 📦 サービスのアンインストール

```bash
# Uninstall MQTT
sudo apt remove -y mosquitto mosquitto-clients

# Uninstall Docker
sudo apt-get purge -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras

# Remove service directory
rm -rf ~/sensecraft-ai_server
```

## 📚 参考資料

- [Jetson フラッシュガイド](/flash/jetpack_to_selected_product/)
- [SenseCraft-AI\_Server ソースリポジトリ](https://github.com/Seeed-Studio/SenseCraft-AI_Server/tree/jetson)
- [NVIDIA Jetson Docker ガイド](https://www.jetson-ai-lab.com/tips_ssd-docker.html)
- [Mosquitto 公式ドキュメント](https://mosquitto.org/man/mosquitto-conf-5.html)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
