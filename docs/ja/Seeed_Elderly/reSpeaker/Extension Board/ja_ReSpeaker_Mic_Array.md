---
description: ReSpeaker Mic Array
title: ReSpeaker Mic Array
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ReSpeaker_Mic_Array
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/respeaker_mic_array.jpeg)

## 説明

ReSpeaker Mic Arrayは、ReSpeaker Coreの上に直接積み重ねて（接続して）使用することで、音声インタラクションの体験を大幅に向上させることができます。この製品はXMOSのXVSM-2000スマートマイクを基に開発されています。このボードには7つのPDMマイクが統合されており、ReSpeakerの音響DSP性能を大幅に向上させることができます。

## 主な特徴

- 遠距離音声キャプチャ
- 音響源の位置特定
- ビームフォーミング
- ノイズ抑制
- 残響除去
- 音響エコーキャンセル

## 技術仕様

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/respeaker_mic_array.jpeg)

- XVSM-2000（内部に16コアを搭載）：
  - 2つのxCoreタイル上に16のリアルタイム論理コア。
  - デュアルイシューモードで最大2000 MIPSを共有。
  - 512KBの内部単一サイクルSRAMと2MBの内蔵フラッシュ。
  - 16KBの内部OTP（タイルごとに最大8KB）。
  - USB PHY、USB 2.0仕様に完全準拠。
  - プログラム可能なI/O。
  - DFUモードをサポート。
- 7つのデジタルマイク：
  - 遠距離音声認識や音源位置特定に有用。
  - ST MP34DT01-M。
  - -26 dBFSの感度。
  - 120 dBSPLの音響過負荷ポイント。
  - 61 dBの信号対雑音比。
  - 全方向性の感度。
  - PDM出力。
- 12個のRGB LED：
  - 256段階の明るさ。
  - 800kHzのラインデータ伝送。
- オーディオ出力：
  - オンボード3.5mm Aux出力。
  - WOLFSON WM8960。
  - 24または16ビット、16kHzステレオ出力。
  - 16Ωで40mWの出力（3.3V時）。
- クロック同期：
  - オンボードPLL。
  - DAC、MIC用のプログラム可能なサンプルクロック。
    （XVSM-2000でDSPが使用されている場合は無効）。
- 電源供給：
  - Micro USBまたは拡張ヘッダーからの5V供給。
- サイズ：
  - 直径70mm。
- 重量：
  - 15.25g。

## ReSpeaker Mic Array用ドライバー

- Windowsユーザーの場合、[こちら](https://github.com/Fuhua-Chen/ReSpeaker_Microphone_Array_Driver)をクリックしてドライバーをインストールしてください。
- LinuxまたはMacユーザーの場合、ドライバーをインストールする必要はありません。

## ReSpeaker Coreで音声を抽出する

Mic ArrayがReSpeaker Coreに積み重ねられると、自動的に検出されます（`aplay -l`で確認）。また、[respeaker_python_library](https://github.com/respeaker/respeaker_python_library)を使用して音声インタラクションアプリケーションを開発することをお勧めします。このライブラリを使用することで、Mic Arrayがオンかどうかを気にする必要がなくなります。ライブラリがこれをチェックし、Mic Arrayがオンの場合はそれを選択します。

さらに、このライブラリ内の[*class Microphone*](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/microphone.py)（**Pyaudio**に基づいています）には、音声を抽出するための[*listen*](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/microphone.py#L207)というメソッドがあります。使用方法については、[こちらのサンプルコード](https://github.com/respeaker/respeaker_python_library/blob/master/examples/SpeechRecognition_translator.py)をご覧ください。

## PC、Mac、Linux、Raspberry Piでの音声抽出

以下はPyaudioを使用した例です：

まず、以下のスクリプトを実行して、Mic Arrayのデバイスインデックス番号を取得します：

```python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```

次に、`RESPEAKER_INDEX = 1`を取得したインデックス番号に変更します。以下のスクリプトを実行して音声を録音します。

```python
import pyaudio
import wave

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 2
RESPEAKER_WIDTH = 2
# getDeviceInfo.pyを実行してインデックスを取得
RESPEAKER_INDEX = 1
CHUNK = 1024
RECORD_SECONDS = 5
WAVE_OUTPUT_FILENAME = "output.wav"

p = pyaudio.PyAudio()

stream = p.open(
            rate=RESPEAKER_RATE,
            format=p.get_format_from_width(RESPEAKER_WIDTH),
            channels=RESPEAKER_CHANNELS,
            input=True,
            input_device_index=RESPEAKER_INDEX,)

print("* 録音中")

frames = []

for i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    frames.append(data)

print("* 録音完了")

stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(RESPEAKER_CHANNELS)
wf.setsampwidth(p.get_sample_size(p.get_format_from_width(RESPEAKER_WIDTH)))
wf.setframerate(RESPEAKER_RATE)
wf.writeframes(b''.join(frames))
wf.close()
```

## ReSpeaker Mic Array用ファームウェア

ReSpeaker Mic Array用のDFUファームウェアは[こちら](https://github.com/Fuhua-Chen/ReSpeaker_Microphone_Array_Firmware)からダウンロードできます。以下の2つのバージョンを提供しています：

- **xvsmバージョン**：初期バージョンで、DSPサポート付きの2チャンネルデータを出力します。
- **rawバージョン**：8チャンネルのマイク生データを出力します。このファームウェアにはxvsm DSPサポートがないため、DOAやAECなどの機能はサポートされていません。

**Linuxでのファームウェア更新**については[こちら](https://github.com/respeaker/mic_array_dfu)をご覧ください。  
**Macでのファームウェア更新**については[こちら](https://github.com/jerryyip/respeaker_micarray_dfu_mac_linux)をご覧ください。

## ReSpeaker Mic ArrayのHIDによる制御

ユーザーはUSB HIDを介してReSpeaker Mic Arrayを制御できます。詳細は[通信プロトコル](https://github.com/Fuhua-Chen/ReSpeaker-Microphone-Array-HID-tool)をご覧ください。

注意：最新の**rawバージョン**を使用している場合、LEDのみを制御できます。

以下はPythonの例です：

```python
#!/usr/bin/env python

import respeaker.usb_hid as usb_hid

class MicArray:
    def __init__(self):
        self.hid = usb_hid.get()

    def write(self, address, data):
        data = self.to_bytearray(data)
        length = len(data)
        if self.hid:
            packet = bytearray([address & 0xFF, (address >> 8) & 0x7F, length & 0xFF, (length >> 8) & 0xFF]) + data
            packet = list(packet)
            self.hid.write(packet)

    def read(self, address, length):
        self.hid.write(list(bytearray([address & 0xFF, (address >> 8) & 0xFF | 0x80, length & 0xFF, (length >> 8) & 0xFF])))
        for _ in range(6):
            data = self.hid.read()
            # print [int(x) for x in data]
            # VADデータをスキップ
            if int(data[0]) != 0xFF and int(data[1]) != 0xFF:
                return data[4:(4 + length)]

    @staticmethod
    def to_bytearray(data):
        if type(data) is int:
            array = bytearray([data & 0xFF])
        elif type(data) is bytearray:
            array = data
        elif type(data) is str:
            array = bytearray(data)
        elif type(data) is list:
            array = bytearray(data)
        else:
            raise TypeError('%sはサポートされていません' % type(data))
        return array

def main():
    import sys
    import struct

    mic = MicArray()

    print("使用中: %s" % usb_hid.usb_backend)

    if len(sys.argv) < 3:
        print('使用方法: python {} w 0x0 0x000003'.format(sys.argv[0]))
        sys.exit(1)

    try:
        if sys.argv[2].startswith('0x'):
            address = int(sys.argv[2], 16)
        else:
            address = int(sys.argv[2])

        if sys.argv[1] == 'w':
            if sys.argv[3].startswith('0x'):
                data = int(sys.argv[3], 16)
            else:
                data = int(sys.argv[3])

            if data > 0xFFFF:
                data = struct.pack('<I', data)
            elif data > 0xFF:
                data = struct.pack('<H', data)

            mic.write(address, data)
        else:
            print [int(x) for x in mic.read(address, 4)]
    except Exception as e:
        print(e.message)

if __name__ == '__main__':
    main()
```

## FAQ

### Q1: *xvsm バージョン*のファームウェアを使用して、Mic Arrayから音声ソースの方向を取得する方法は？

  Windowsを使用している場合は、[ガイド](https://github.com/respeaker/get_started_with_respeaker/wiki/Mic-Array)に従うか、[HIDツール](https://github.com/Fuhua-Chen/ReSpeaker-Microphone-Array-HID-tool)を使用してください。

  Python & C hidapi の例は[こちら](https://github.com/elthef/respeaker-xmos-hid)です。

### Q2: WindowsでAudacityを使用して8チャンネルの生データを抽出する方法は？

  Windows WASAPIを選択してください。以下の画像をご参照ください。ファームウェアバージョンを0x032から0x082に切り替えたい場合は、切り替える前にデバイスマネージャーでデバイスをアンインストールしてください。アンインストール後、DFUを介してファームウェアを更新し、デバイスを再インストールしてください。

![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/audacity.png)

### Q3: Mic ArrayはどのようにRespeaker Coreと通信しますか？

  Mic ArrayはUSBを介してRespeaker Coreと通信します。

### Q4: [ReSpeaker-Microphone-Array-HID-tool](https://github.com/Fuhua-Chen/ReSpeaker-Microphone-Array-HID-tool) のVADは何を意味しますか？

  ![](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/VAD.png)

  | データ  | 角度 |
  |-------|--------|
  | 1e, 0 | 30     |
  | e, 1  | 270    |
  | d2,0  | 210    |
  | 96,0  | 150    |

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0%20Eagle%20File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Eagle]** [ReSpeaker Microphone Array SCH](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0.sch.zip)
- **[Eagle]** [ReSpeaker Microphone Array BRD](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0.brd.zip)
- **[PDF]** [ReSpeaker Microphone Array SCH](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0%20Sch.pdf)
- **[PDF]** [ReSpeaker Microphone Array PCB](https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0%20PCB.pdf)

## プロジェクト

**ReSpeaker Mic Arrayを使用してRaspberry PiでGoogleアシスタントを構築する**: ReSpeaker Mic Arrayを使用すれば、Raspberry PiでGoogleアシスタントを構築できます！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/build-google-assistant-on-rpi-with-respeaker-mic-array-1030bb/embed' width='350'></iframe>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>