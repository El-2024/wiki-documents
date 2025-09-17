---
title: Seeed Studio XIAO RP2350入門（MicroPython）
description: |
  XIAO RP2350は、Seeed Studioの最先端マイクロコントローラーです。デュアルコアプロセッサ、増加したSRAMとフラッシュメモリ、強化された接続性を特徴としています。
image: https://files.seeedstudio.com/wiki/XIAO-RP2350/img/RP2350-thumbnail.webp
slug: /ja/getting-started-xiao-rp2350
keywords:
  - xiao
  - RP2350
sidebar_position: 0
last_update:
  author: Spencer
  date: 2024-11-22T05:59:15.764Z
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Seeed Studio XIAO RP2350

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/2-102010550%20XIAO%20RP2350-45font.jpg"
    style={{ width: 480, height: 'auto', "border-radius": '12.8px' }}
  />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html?utm_source=seeed&utm_medium=wiki" target="_blank">
  <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
  </a>
</div><br></br>

XIAO RP2350は、Raspberry Pi RP2350（150MHzで動作するデュアルCortex-M33コア、FPU、強化されたセキュリティと暗号化機能を搭載）の力を、クラシックなXIAOフォームファクターに詰め込んでいます。わずか21x17.8mmのサイズで、19個の多機能GPIO、RGB LED、50μAの超低消費電力、バッテリー電源供給、直接バッテリー電圧測定機能を備えたバッテリー管理システムを特徴としています。XIAOエコシステムのおかげで、XIAO RP2350は、ディスプレイ、LEDマトリックス、Groveモジュール、CAN Bus、Vision AIセンサー、mmWaveセンサーなど、幅広いアドオンと互換性があります。MicroPython、C、C++のネイティブサポートにより、XIAO RP2350は、スマート制御、ウェアラブル、DIYキーボードなどのコンパクトでバッテリー駆動のアプリケーションを作成したいあらゆるレベルの開発者に最適です。

## 特徴

- **強力なMCUボード:** FPU搭載のRaspberry Pi RP2350チップを搭載し、対称デュアルArm Cortex-M33 @ 150MHzを特徴としています。
- **強化されたセキュリティ機能:** 内蔵のセキュアブートと暗号化ブートローダーがアプリケーションのセキュリティを確保します。
- **ソフトウェアサポート:** C/C++とMicroPythonに対応し、簡単なプロジェクト開発とプロトタイピングを保証します。
- **豊富なオンボードリソース:** RGB LED、2MBフラッシュ、520kB SRAM、19個の多機能GPIO（アナログ、デジタル、I²C、UART、SPI、PWM）を統合しています。
- **拡張された8つの新しいIO:** 以前のXIAO MCUと比較して、背面に8つのIOピンが追加され、より複雑なアプリケーションをサポートします。
- **効率的な電源設計:** スリープモードでわずか50μAの超低消費電力により、バッテリー電源供給を可能にします。内部IOを介した直接バッテリー電圧測定により、バッテリー管理システム（BMS）を強化します。
- **コンパクトな親指サイズ設計:** 21 x 17.8mmのサイズで、Seeed StudioのクラシックなXIAOフォームファクターを採用し、スペースを重視するアプリケーションに理想的です。
- **量産対応:** 表面実装デバイス（SMD）設計で、すべてのコンポーネントが前面にあり、両側にスタンプホールがあり、効率的な大量生産を促進します。

## 仕様

<table align="center">
    <tr>
        <td>製品</td>
        <td>XIAO RP2040</td>
        <td><b>XIAO RP2350</b></td>
    </tr>
    <tr>
        <td rowspan="2">プロセッサ</td>
        <td>Raspberry Pi RP2040</td>
        <td>Raspberry Pi RP2350</td>
    </tr>
    <tr>
        <td>デュアル Cortex-M0+ @ 133MHz</td>
        <td>デュアル Cortex-M33 @ 150MHz、FPU</td>
    </tr>
    <tr>
        <td>RAM</td>
        <td>264kB SRAM</td>
        <td>520kB SRAM</td>
    </tr>
    <tr>
        <td>Flash</td>
        <td>2MB オンボード</td>
        <td>2MB Flash</td>
    </tr>
    <tr>
        <td>LED</td>
        <td>1 ユーザーLED（3色）、1 電源LED、1 RGB LED</td>
        <td>1 ユーザーLED、1 充電LED（バッテリー充電インジケーター）、1 RGB LED</td>
    </tr>
    <tr>
        <td>インターフェース</td>
        <td>11 ピン：4x アナログ、11x デジタル、1x I²C、1x UART、1x SPI、全PWM</td>
        <td><b>19 ピン：3x アナログ、19x デジタル、2x I²C、2x UART、2x SPI、全PWM</b></td>
    </tr>
    <tr>
        <td>ボタン</td>
        <td align="center" colspan="2">1 RESETボタン、1 BOOTボタン</td>
    </tr>
    <tr>
        <td>セキュリティ</td>
       <td align="center"> - </td>
        <td>OTP、セキュアブート、Arm TrustZone</td>
    </tr>
    <tr>
        <td>低消費電力</td>
       <td align="center"> - </td>
        <td>4.2V/50uA</td>
    </tr>
    <tr>
        <td>ソフトウェア互換性</td>
        <td>Arduino、PlatformIO、MicroPython、CircuitPython、Zephyr、<a href="https://wiki.seeedstudio.com/ja/xiao_topic_page/">その他多数</a></td>
        <td>Arduino、PlatformIO、MicroPython、CircuitPython、<a href="https://wiki.seeedstudio.com/ja/xiao_topic_page/">その他多数</a></td>
    </tr>
    <tr>
        <td>動作温度</td>
        <td align="center" colspan="2">-20°C~70°C</td>
    </tr>
    <tr>
        <td>寸法</td>
        <td align="center" colspan="2">21x17.8 mm</td>
    </tr>
</table>

## ハードウェア概要

<div class="table-center">
<table align="center">
 <tr>
     <th>XIAO RP2350 フロントピン配置</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-front.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 Front Pinout" /></div></td>
 </tr>
    <tr>
     <th>XIAO RP2350 バックピン配置</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-back.png" style={{width:680, height:'auto'}} alt="XIAO RP2350 Back Pinout" /></div></td>
 </tr>
    <tr>
     <th>XIAO RP2350 コンポーネント</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/XIAO-RP2350-components.png" style={{width:480, height:'auto'}} alt="XIAO RP2350 Components" /></div></td>
 </tr>
</table>
</div>

ピン配置の詳細が必要ですか？下記の[アセットとリソース](#assets--resources)をご覧ください。

## サポートされているプラットフォーム

RP2350を搭載したXIAO RP2350は、MicroPythonとRaspberry Piが提供するC/C++ SDKをサポートしています。この柔軟性により、開発者はプロトタイピングと開発において好みのプログラミング言語と環境を選択できます。

<div class="table-center">
  <table align="center">
    <tr>
      <th>C/C++ SDK</th>
      <th>MicroPython</th>
    </tr>
    <tr>
      <td style={{ textAlign: 'center' }}>
        <img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/C%2B%2B-Logo.wine.png" alt="c-cpp logo" width={200} height="auto" />
      </td>
      <td style={{ textAlign: 'center' }}>
        <img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/MicroPython-Logo.png" alt="MicroPython" width={200} height="auto" />
      </td>
    </tr>
  </table>
</div>

## はじめに▶️

:::info attention
このページは主にMicroPythonユーザーに焦点を当てています。SDK プログラミングの学習に興味がある方や上級ユーザーの方は、[Raspberry Pi Pico-series C/C++ SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf)から始めることをお勧めします。このガイドは環境のセットアップとサンプルコードの使用開始に役立ちます。また、XIAO RP2350に関するより具体的な手順については、[XIAO RP2350 with C/C++ SDK](/ja/xiao-rp2350-c-cpp-sdk)をご覧ください。
:::

:::tip
公式ウェブサイトからファームウェアをダウンロードする場合は、バージョン1.26.0以上を使用する必要があります。[SEEED_XIAO_RP2350](https://micropython.org/download/SEEED_XIAO_RP2350/)
:::

### ステップ1：XIAO RP2350にMicroPythonをインストールする

XIAO RP2350にMicroPythonファームウェアをインストールするには、以下の手順に従ってください：

**ステップ1.1. MicroPythonファームウェアをダウンロードする：**  

- [MicroPython Downloads](https://micropython.org/download/SEEED_XIAO_RP2350/)ページに移動します。
- XIAO RP2350と互換性のある最新の`.uf2`ファームウェアファイルをダウンロードします。

:::tip
デフォルトのファームウェアはARMアーキテクチャ用です。RISC-Vを使用したい場合は、リンク内の対応するファームウェアバージョンを使用してください。
:::

**ステップ1.2 BOOTSELモードに入る：**  

以下の2つの方法のいずれかを使用してXIAO RP2350をBOOTSELモードに入れることができます：

<Tabs>
<TabItem value="method1" label="方法1：コンピューターに接続する前" default>

1. **BOOTボタンを押し続ける**：  
   XIAO RP2350がコンピューターから切断されている状態で、BOOTボタンを**押し続けます**。
2. **コンピューターに接続する**：  
   BOOTボタンを押し続けながら、USBケーブルを使用してXIAO RP2350をコンピューターに接続します。
3. **BOOTボタンを離す**：  
   ボードがコンピューターに接続された後、BOOTボタンを離すことができます。XIAO RP2350はBOOTSELモードになり、コンピューターはそれをリムーバブルストレージデバイスとして認識します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-no-charge.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/>
<div style={{ marginTop: '-8px' }}><em>Bootを押し続ける→ケーブルを接続→Bootを離す</em></div>
</div>

</TabItem>

<TabItem value="method2" label="方法2：コンピューターに接続されている間">

1. **BOOTボタンを押し続ける**：  
   XIAO RP2350がすでにコンピューターに接続されている状態で、BOOTボタンを押し続けます。
2. **RESETボタンをクリックする**：  
   BOOTボタンを押し続けながら、上の画像でボードの右下角に「B」とラベル付けされているRESETボタンを押して離します。
3. **BOOTボタンを離す**：  
   RESETボタンを押した後、BOOTボタンを離します。XIAO RP2350はBOOTSELモードになり、コンピューターはそれをリムーバブルストレージデバイスとして認識します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/enter-boot-charged.gif" style={{width:500, height:'auto', "border-radius": '12.8px' }}/>
<div style={{ marginTop: '-8px' }}><em>Bootを押し続ける→Resetをクリック→Bootを離す</em></div>
</div>

</TabItem>
</Tabs>

**ステップ1.3. ファームウェアをインストールする：**  

- ダウンロードした`.uf2`ファイルをXIAO RP2350のリムーバブルストレージドライブに**ドラッグアンドドロップ**します。
- ファイルがコピーされた後、ボードは自動的に再起動し、ファームウェアのインストールが完了します。

### ステップ2：Thonny IDEをインストールする

:::tip MicroPythonについて

[MicroPython](https://micropython.org/)は[Python](https://www.python.org/)に似たインタープリター言語です。しかし、Pythonとは異なり、MicroPythonはハードウェア上で直接実行され（ベアメタル）、コマンドを即座に実行するためのインタラクティブプロンプト（REPL）と、内蔵ファイルシステムからスクリプトを実行およびインポートする機能を提供します。

XIAO RP2350ボードに接続してPythonコードの記述と実行を開始するには、minicom、PuTTY、electerm、warpなど、シリアル接続をサポートする任意のターミナルツールを使用できます。より*ユーザーフレンドリーな体験*のために、使いやすさ、統合機能、初心者向けのインターフェースを理由に**[Thonny](https://thonny.org/)**を使用できます。これにより、デバイス上で直接Pythonコードを記述して実行することを楽しめます。

:::

Thonny IDEはMicroPython開発に優れた初心者向けのPythonエディターです。インストール方法は以下の通りです：

1. **Thonnyをダウンロードする：**  
   - [Thonny Download Page](https://thonny.org/)にアクセスします。
   - お使いのオペレーティングシステム（Windows、macOS、またはLinux）に適したインストーラーを選択してダウンロードします。

2. **Thonnyをインストールする：**  
   - ダウンロードしたインストーラーを**実行**します。
   - 画面の指示に**従って**インストールプロセスを完了します。

3. **MicroPython用にThonnyを設定する：**  
   - Thonny IDEを**開きます**。
   - Thonnyウィンドウの右下角を確認します。
   - **インタープリター**選択エリアをクリックします。
   - ドロップダウンから**'MicroPython (RP2040)'**を選択します。
   - 正しい**ポート**が選択されていることを確認します—Thonnyは通常自動検出します。

これで、Thonny IDEを使用してXIAO RP2350にMicroPythonコードを記述およびアップロードする準備が整いました！

<Tabs>
  <TabItem value="thonny-mpy" label="Thonny IDE" default>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/thonny-mpy.png" style={{width:680, height:'auto'}}/></div>

  </TabItem>
  <TabItem value="putty-mpy" label="PuTTY Console">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/putty-mpy.png" style={{width:680, height:'auto'}}/></div>

  </TabItem>
</Tabs>

デバイスがMicroPythonで準備できたら、簡単なプロジェクトから始めましょう：

### LEDを点滅させてみよう！ ✨

ボードでLEDを点滅させることは、多くの人が最初に実行するプログラムです。XIAO RP2350でも同様です。

:::note
XIAO RP2350の黄色いLEDである`USER LED`は、回路図によると`GPIO25/D19`に接続されています。
すべてのXIAOファミリーボードでは、`USER LED`は`ローレベル`に設定すると**点灯**し、`ハイレベル`に設定すると**消灯**します。
:::

<Tabs>
  <TabItem value="blink" label="Blink" default>

```python showLineNumbers
from machine import Pin # Import the Pin class from the machine module
from time import sleep  # Import the sleep function from the time module

# Initialize GPIO25 as an output pin, which controls the USER LED
led = Pin(25, Pin.OUT) 

# Turn off the LED initially
led.value(1) # led.on() -> high level -> light off
sleep(0.5) # Wait for 0.5 seconds

# Turn on the LED
led.value(0) # led.off() -> low level -> light on
sleep(0.5) # Wait for 0.5 seconds

# Enter an infinite loop
while True:
    # Toggle the LED state (on to off or off to on)
    led.toggle() 
    # Print the current state of the LED
    print(f"LED {'ON' if led.value() == 0 else 'OFF'}")
    sleep(0.5) # Wait for 0.5 seconds before the next toggle
```

<table>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/tonny-blink-led.png" style={{width:680, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-blink.gif" style={{width:400, height:'auto'}}/></div></td>
 </tr>
</table>

  </TabItem>
  <TabItem value="pwm" label="LEDのフェード" default>

```python title="examples/rp2/pwm_fade.py" showLineNumbers
# Example using PWM to fade an LED.

import time
from machine import Pin, PWM

# Construct PWM object, with LED on Pin(25).
pwm = PWM(Pin(25))

# Set the PWM frequency.
pwm.freq(1000)

# Fade the LED in and out a few times.
duty = 0
direction = 1
for _ in range(8 * 256):
    duty += direction
    if duty > 255:
        duty = 255
        direction = -1
    elif duty < 0:
        duty = 0
        direction = 1
    pwm.duty_u16(duty * duty)
    time.sleep(0.001)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-mpy-fade-led.gif" style={{width:240, height:'auto', "border-radius": '12.8px'}}/></div>

  </TabItem>
</Tabs>

コードをThonny IDEにコピーしたら、下の画像に示すように、単に`Run current script`ボタンをクリックするか`F5`を押してください。これによりコードスニペットが実行され、XIAO RP2350のLEDが点滅し始めるのを確認できます。

### RGB LEDで遊ぶ

XIAO RP2350には内蔵のRGB LEDが搭載されており、MicroPythonを使用して制御できます。以下は異なる色を循環させる方法の例です：

```python showLineNumbers
import array, time, random
from machine import Pin
import rp2

NUM_LEDS = 1
LED_PIN = 22  # PICO_DEFAULT_WS2812_PIN
POWER_PIN = 23  # PICO_DEFAULT_WS2812_POWER_PIN

# Global brightness variable (0.0 to 1.0)
BRIGHTNESS = 0.1

@rp2.asm_pio(sideset_init=rp2.PIO.OUT_LOW, out_shiftdir=rp2.PIO.SHIFT_LEFT, autopull=True, pull_thresh=24)
def ws2812():
    T1 = 2
    T2 = 5
    T3 = 3
    wrap_target()
    label("bitloop")
    out(x, 1)               .side(0)    [T3 - 1]
    jmp(not_x, "do_zero")   .side(1)    [T1 - 1]
    jmp("bitloop")          .side(1)    [T2 - 1]
    label("do_zero")
    nop()                   .side(0)    [T2 - 1]
    wrap()

# Set up the power pin
power_pin = Pin(POWER_PIN, Pin.OUT)
power_pin.value(1)  # Turn on power to the LED

# Create the StateMachine with the ws2812 program, outputting on LED_PIN
sm = rp2.StateMachine(0, ws2812, freq=8_000_000, sideset_base=Pin(LED_PIN))

# Start the StateMachine, it will wait for data on its FIFO.
sm.active(1)

def set_led_color(color):
    sm.put(array.array("I", [color]), 8)

def random_color():
    return random.randint(0, 255) | (random.randint(0, 255) << 8) | (random.randint(0, 255) << 16)

def interpolate(color1, color2, factor):
    r1, g1, b1 = color1 & 255, (color1 >> 8) & 255, (color1 >> 16) & 255
    r2, g2, b2 = color2 & 255, (color2 >> 8) & 255, (color2 >> 16) & 255
    r = int(r1 + factor * (r2 - r1))
    g = int(g1 + factor * (g2 - g1))
    b = int(b1 + factor * (b2 - b1))
    return (b << 16) | (g << 8) | r

def apply_brightness(color, brightness):
    r, g, b = color & 255, (color >> 8) & 255, (color >> 16) & 255
    r = int(r * brightness)
    g = int(g * brightness)
    b = int(b * brightness)
    return (b << 16) | (g << 8) | r

print("Starting random color transitions with adjustable brightness...")

# Main loop
current_color = random_color()
while True:
    next_color = random_color()
    for i in range(100):  # 100 steps for smooth transition
        transition_color = interpolate(current_color, next_color, i / 100)
        final_color = apply_brightness(transition_color, BRIGHTNESS)
        set_led_color(final_color)
        time.sleep_ms(20)  # Adjust this value to change transition speed
    current_color = next_color

    # Optionally, you can change the brightness here for demo purposes
    # BRIGHTNESS = random.random()  # This will set a random brightness each cycle
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/rp2350-mpy-rgb-led.gif" style={{width:240, height:'auto', "border-radius": '12.8px'}}/></div>

### バッテリーと電源管理

追加のコンポーネントなしでバッテリー電圧を読み取ることは可能でしょうか？はい、XIAO RP2350では、これまで以上に簡単になりました。[XIAO ESP32C3](/ja/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage)などの以前のXIAOファミリーメンバーでは、バッテリー電圧を読み取るには抵抗を使って手動で*A0*に接続する必要がありました。

しかし、XIAO RP2350では、このプロセスが簡素化されています。`A3/GPIO29`ピンを直接使用してバッテリー電圧レベルを読み取ることができるようになり、設計と開発が合理化されます。バッテリーレベルの読み取りを有効にするために`GPIO19`ピンをハイに設定することが必要であることを覚えておいてください。

Pico SDKを使用してバッテリー電圧を読み取るこのコードスニペットに従ってください：

<Tabs>
  <TabItem value="python" label="MicroPython" default>

```python
from machine import Pin, ADC
import time

# Function to initialize the GPIO pin for enabling battery voltage reading
def init_gpio():
    enable_pin = Pin(19, Pin.OUT)
    enable_pin.value(1)  # Set the pin to high to enable battery voltage reading

def main():
    print("ADC Battery Example - GPIO29 (A3)")
    
    init_gpio()  # Initialize the enable pin
    adc = ADC(Pin(29))  # Initialize the ADC on GPIO29

    conversion_factor = 3.3 / (65535)  # Conversion factor for 12-bit ADC and 3.3V reference
    
    while True:
        result = adc.read_u16()  # Read the ADC value
        voltage = result * conversion_factor * 2  # Calculate the voltage, considering the voltage divider (factor of 2)
        print("Raw value: 0x{:03x}, voltage: {:.2f} V".format(result, voltage))
        time.sleep(0.5)  # Delay for 500 milliseconds

if __name__ == '__main__':
    main()
```

  </TabItem>
  <TabItem value="sdk" label="C/C++ SDK">

```c title='adc_bat.c'
#include <stdio.h>
#include "pico/stdlib.h"
#include "hardware/gpio.h"
#include "hardware/adc.h"

// Function to initialize the GPIO pin for enabling battery voltage reading
void init_gpio() {
    const int enable_pin = 19; // Pin to enable battery voltage reading

    gpio_init(enable_pin); // Initialize the pin
    gpio_set_dir(enable_pin, GPIO_OUT); // Set the pin as output
    gpio_put(enable_pin, 1); // Set the pin to high to enable battery voltage reading
}

int main() {
    stdio_init_all(); // Initialize standard input/output
    printf("ADC Battery Example - GPIO29 (A3)\n");

    init_gpio(); // Initialize the enable pin
    adc_init(); // Initialize the ADC

    // Initialize the ADC GPIO pin (GPIO29)
    adc_gpio_init(29);
    // Select ADC input 3 (corresponding to GPIO29)
    adc_select_input(3);

    while (1) {
        // 12-bit conversion, assume max value == ADC_VREF == 3.3 V
        const float conversion_factor = 3.3f / (1 << 12); // Conversion factor for 12-bit ADC and 3.3V reference
        uint16_t result = adc_read(); // Read the ADC value
        // Calculate the voltage, considering the voltage divider (factor of 2)
        printf("Raw value: 0x%03x, voltage: %f V\n", result, result * conversion_factor * 2); 
        sleep_ms(500); // Delay for 500 milliseconds
    }
}
```

  </TabItem>
</Tabs>

## アセット & リソース

XIAO RP2350 は Raspberry Pi RP2350 の力を活用し、Raspberry Pi コミュニティの豊富な共有リソースを活用しています。これにより、この小さなボードで無限の創造性を持ってプロジェクトをカスタマイズする可能性の世界が開かれます。以下は、開始に役立つ重要なリソースとアセットです。

***データシートと回路図***

- 📄 **[PDF]** [RP2350 データシート](https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf)
- 📄 **[PDF]** [Seeed Studio XIAO RP2350 回路図](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/Seeed-Studio-XIAO-RP2350-v1.0.pdf)
- 📄 **[XLSX]** [Seeed Studio XIAO RP2350 ピン配置シート](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-pinout-sheet.xlsx)
- 📄 **[DXF]** [Seeed Studio XIAO RP2350 DXF 寸法図](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-dimension-v1.0.dxf)
- 🔗 **[Link]** [Seeed Studio XIAO RP2350 3D STEP ファイル](https://grabcad.com/library/seeed-studio-xiao-rp2350-2)
- 📄 **[ZIP]** [Seeed Studio XIAO RP2350 v1.0 SCH&PCB](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO_RP2350_v1.0_SCH&PCB_240626.zip)

- 📄 **[UF2]** [低消費電力テストファームウェア](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/powman_timer-56.uf2)

***関連リソース***

- 📄 **[PDF]** [Raspberry Pi Pico シリーズ入門](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf): Raspberry Pi Pico ボードのセットアップとプログラミングに関する包括的なガイド。MicroPython や C/C++ を学びたい初心者に最適です。
- 📄 **[PDF]** [Raspberry Pi Pico シリーズ Python SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-python-sdk.pdf) MicroPython セットアップチュートリアルと API を文書化した書籍
- 📄 **[PDF]** [Raspberry Pi Pico シリーズ C/C++ SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf) Pico C/C++ SDK API を文書化した書籍
- 🔗 **[Kicad]** [Seeed Studio XIAO RP2350 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

### 拡張とアプリケーション

[XIAO シリーズ](/ja/xiao_topic_page)には、学習と使用のための膨大な範囲の周辺機器と周辺アクセサリがあります。完璧なインタラクションを可能にするカラフルなスクリーン、明るくシンプルな RGB ライトを備えた統合ボードなど、チェックアウトを待っているものがあります。

XIAO ファミリーのメンバーとして、XIAO RP2350 も同様です。もちろん、引き出された追加のピンをより良く活用するために、新しい*周辺機器とボード*が継続的に登場し、作成された性能を完全に活用します。

- 🌟 **[アクセサリによる拡張](/ja/SeeedStudio_XIAO_Series_Introduction/#seeed-studio-xiao-series-compatible-accessories)**  
  ディスプレイや LED マトリックスから Grove モジュールやセンサーまで、XIAO ファミリーと互換性のある幅広いアドオンとモジュールを発見し、それらがプロジェクトをどのように強化できるかを学びます。

### コミュニティと学習

さらに、活気に満ちた Raspberry Pi コミュニティに飛び込んで知識を広げ、新しいプロジェクトアイデアを発見してください。コミュニティ共有リソース、フォーラム、チュートリアルを活用して、XIAO RP2350 での体験を向上させてください。Seeed Studio Wiki に加えて、学習におすすめの他の場所をいくつか紹介します：

- **[Raspberry Pi ドキュメント](https://www.raspberrypi.com/documentation/microcontrollers/rp2040.html)**: RP2350 に関する信頼性の高い最新情報を入手してください。
- **[Raspberry Pi フォーラム](https://www.raspberrypi.org/forums/)**: 他の愛好家と交流し、質問し、プロジェクトを共有してください。
- **[XIAO GitHub リポジトリ](https://github.com/Seeed-Studio/OSHW-XIAO-Series)**: より集中化されたドキュメントと私たちのチームとのより多くのインタラクションのために、公式 XIAO リポジトリを探索してください。**参加してください！**
- **[Reddit の r/embedded](https://www.reddit.com/r/embedded/)**: 組み込みシステムコミュニティに参加し、洞察を共有し、様々なトピックについて議論してください。
- **[GitHub の Pico トピック](https://github.com/topics/pico)**: Pico に関連するリポジトリと議論を探索してください。
- **[Hackster.io](https://www.hackster.io/)**: XIAO や Raspberry Pi を含む様々なハードウェアプラットフォームに関連するプロジェクトとチュートリアルを発見してください。
- **[Instructables](https://www.instructables.com/)**: XIAO や他のハードウェアでの作成のための DIY プロジェクトとステップバイステップガイドを見つけてください。
- **[Element14 コミュニティ](https://www.element14.com/community/)**: エレクトロニクスと組み込みシステムに関連する議論、ウェビナー、プロジェクトに参加してください。

さらに、私たちの [Seeed Studio Discord](https://discord.com/invite/kpY74apCWj) と [Seeed Studio フォーラム](https://forum.seeedstudio.com/) でプロジェクトを共有することをいつでも歓迎します。これらのプラットフォームは、他のメーカーとつながり、フィードバックを得て、インスピレーションを見つける優れた機会を提供します。問題のトラブルシューティングでヘルプが必要な場合、最新の作品を披露したい場合、または単にサポートコミュニティの一員になりたい場合、*Seeed Studio の Discord とフォーラム*は参加と協力のための完璧な場所です。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
