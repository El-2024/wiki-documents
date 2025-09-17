---
description: 体验 ReSpeaker XVF3800 USB 4-Mic Array 的强大功能——一款先进的圆形麦克风阵列，具备 AEC、波束成形、噪声抑制和 360° 语音捕获功能。与紧凑的 XIAO ESP32S3 配对，为智能设备、机器人和物联网应用提供高性能语音控制。加入我们，演示与 Home Assistant 的无缝集成，使用语音命令控制设备。

title: 使用 Home Assistant 的智能家居语音控制

keywords:
- reSpeaker
- XIAO
- ESP32S3
- Home Assistant
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /cn/respeaker_xvf3800_xiao_home_assistant
last_update:
  date: 9/17/2025
  author: Kasun Thushara
---

## 概述

使用全新的 **ReSpeaker XMOS XVF3800 with XIAO ESP32S3** 与智能空间对话，通过语音开关灯光、播放音乐，甚至询问天气

在本章中，我们将使用 ReSpeaker XMOS XVF3800 with XIAO ESP32S3 HA 语音助手连接 Sonoff 智能开关，实现语音控制灯光开关。

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/iqlsNezHYuE"
          title="ReSpeaker XVF3800 with XIAO ESP32S3 Home Assistant"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

## 所需硬件

<table align="center">
  <tr>
      <th>ReSpeaker XVF3800 with XIAO ESP32S3</th>
        <th>Home Assistant 设备</th>
        <th>Sonoff BASICR2</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home_Assistant_Green/HAyellow.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991074-sonoff-basicr2-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Yellow-Standard-Version-with-CM4-p-5809.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Sonoff-BasicR2-p-5514.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

## 固件更新

为了获得最佳的播放体验，我们需要将 XMOS 固件更新到
从这里下载固件。在您的计算机上，插入 ReSpeaker XMOS XVF3800 with XIAO ESP32S3 并运行我们指南中的：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/firmware_1.png" alt="pir" width={800} height="auto" /></p>

:::note
XVF3800 麦克风阵列需要 12.288 MHz MCLK 才能工作，但 ESPHome（在 Home Assistant 中使用）由于 API 限制无法生成它。此固件使 XVF3800 充当 I2S 主设备，因此它可以生成自己的时钟，而无需来自 ESP32 的 MCLK。
我们的固件修复了这个限制，因此麦克风可以与 Home Assistant 正常工作。
:::

您可以从[这里](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/i2s)下载固件

安装指南在[这里](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/#update-firmware)

## 准备 ReSpeaker XMOS XVF3800 with XIAO ESP32S3

转到 **Home Assistant > 设置 > 加载项**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_Settings.PNG" alt="pir" width={800} height="auto" /></p>

点击 **加载项商店**（通常在右下角）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_addon.PNG" alt="pir" width={800} height="auto" /></p>

在 **官方加载项** 下，搜索并安装 **ESPHome Device Builder**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome.PNG" alt="pir" width={800} height="auto" /></p>

安装后，点击 **启动** 来运行 ESPHome 加载项。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_Start.PNG" alt="pir" width={800} height="auto" /></p>

启用 **开机启动、看门狗和在侧边栏显示** 以便更容易访问。

从 Home Assistant 侧边栏，转到 **ESPHome Builder**。

点击 **+ 新设备**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_add_new.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_device.PNG" alt="pir" width={500} height="auto" /></p>

当提示时，点击 **跳过** – 我们将手动创建配置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_skip.PNG" alt="pir" width={500} height="auto" /></p>

选择您的新设备条目并点击 **编辑**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_respeaker_device.PNG" alt="pir" width={800} height="auto" /></p>

用您的自定义 **YAML 配置** 替换内容

### YAML 描述

#### WiFi

此部分设置您的设备如何连接到 Wi-Fi。

```yml
wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
```

- **ssid & password**：从您的 secrets.yaml 文件中获取，因此您的密码不会以明文显示。
- **事件**：在 Wi-Fi 连接或断开时运行操作：
  - on_connect:
    - 停止 BLE improv 设置。
    - 运行 control_leds 脚本（Wi-Fi 连接的 LED 效果）。

  - on_disconnect:
    - 运行 control_leds 脚本（Wi-Fi 断开的 LED 效果）。

#### I²C 总线

I²C 是一条通信线路，让您的 ESP32 与其他芯片（如麦克风或音频编解码器）通信。

```yml
i2c:
  id: internal_i2c
  sda: GPIO5
  scl: GPIO6
  scan: true
  frequency: 100kHz
```

- **id**：在其他地方引用此总线的名称。
- **sda** / scl：用于数据和时钟的引脚。
- **scan**：在启动时检查连接的设备。
- **frequency**：通信速度（100kHz 是标准）。

#### 开关

```yml
switch:
  # Mute Sound Switch.
  - platform: template
    id: mute_sound
    name: Mute/unmute sound
    icon: "mdi:bullhorn"
    entity_category: config
    optimistic: true
    restore_mode: RESTORE_DEFAULT_ON
    ......
    ......
```

开关是 Home Assistant 中的软件控制"按钮"。它们控制声音、定时器或闹钟等功能。

**唤醒词声音开关**：控制唤醒词音频。

**定时器响铃内部开关**：

- 跟踪定时器是否处于活动状态。
- on_turn_on：将其他音频降低 -20dB，启动定时器声音，更新 LED，15 分钟后自动停止。
- on_turn_off：停止定时器，恢复音量，更新 LED。

**闹钟开启开关**：

- 跟踪闹钟状态。
- 在开启/关闭时运行 LED 脚本。

**LED 环亮度**：

- 让用户使用滑块调整亮度。
- min_value / max_value 定义限制。
- restore_value 在重启后保持之前的设置。

#### 传感器

**下一个定时器**

- 显示下一个定时器的剩余时间。
- 仅在定时器更改时更新（节省资源）。

**闹钟时间和设备时间**

- 显示当前闹钟和 ESP32 系统时间。

#### 间隔 LED 效果

```yml
interval:
  - interval: 50ms
    id: led_animation_interval
    then:
      - lambda: |-
          if (id(volume_display_active)) {
            id(update_volume_display_effect).execute();
            return;
          }
          std::string effect = id(current_led_effect);
          if (effect == "off") {
            return;
          } else if (effect == "breathe") {
            id(update_breathe_effect).execute();
          } else if (effect == "rainbow") {
            id(update_rainbow_effect).execute();
          } else if (effect == "comet_cw") {
            id(update_comet_cw_effect).execute();
          } else if (effect == "comet_ccw") {
            id(update_comet_ccw_effect).execute();
          } else if (effect == "twinkle") {
            id(update_twinkle_effect).execute();
          } else if (effect == "timer_tick") {
            id(update_timer_tick_effect).execute();
          } else if (effect == "led_beam") {
            id(update_led_beam_effect).execute();
          }
```

- 间隔在后台重复运行代码。
- 50ms：每秒运行代码 20 次。
- 根据系统状态或选定效果控制 LED 动画。

#### LED 控制

```yml
 # =========================================================================
  # == Centralized script to control all LED effects ==
  # =========================================================================
  - id: led_set_effect
    mode: restart
    parameters:
      effect: std::string
      r: float
      g: float
      b: float
      speed: float
    then:
      - lambda: |-
          // Update global variables with the new parameters
          id(led_ring_color_r) = r;
          id(led_ring_color_g) = g;
          id(led_ring_color_b) = b;
          id(led_ring_speed) = speed;
          id(current_led_effect) = effect;

          // Handle the two types of effects: Off and Animated
          if (effect == "off") {
            uint32_t colors[12] = {0};
            id(respeaker).set_led_ring(colors);
          } else {
            id(last_led_update_time) = millis(); // Reset timer for smooth animation start
          }

  # Individual update scripts for each animated effect
  - id: update_breathe_effect
    then:
      - lambda: |-
          static float phase = 0.0f;
          uint32_t now = millis();
          float dt = (now - id(last_led_update_time)) / 1000.0f;
          id(last_led_update_time) = now;

          phase += dt * id(led_ring_speed);
          while (phase >= 1.0f) phase -= 1.0f;

          float master_brightness = id(led_ring_brightness).state;
          float breath_brightness = 0.5f * (1.0f + sinf(phase * 2.0f * M_PI)) * master_brightness;
    ......
    ......
```

**中央控制器 (led_set_effect)**

- 在一个地方管理所有 LED 效果。
- 可以动态设置效果类型、颜色（R/G/B）和速度。
- 使用更新脚本实现平滑运动。
- 关闭效果会立即关闭 LED。

**独立脚本**

- 每个动画（呼吸、彩虹、彗星、闪烁、定时器滴答、音量显示、LED 光束）都有自己的脚本。
- 使系统模块化且易于维护。
- 由 led_animation_interval 或中央控制器定期触发。

| 设备状态           | LED 效果             |
|------------------------|----------------------|
| 启动失败         | 红色呼吸           |
| Improv BLE 模式        | 暖色闪烁          |
| 初始化         | 蓝色闪烁          |
| 无 HA 连接       | 红色闪烁           |
| 语音助手等待             | 紫色光束           |
| 语音助手监听           | 亮紫色光束    |
| 语音助手思考            | 紫色呼吸        |
| 语音助手回复            | 紫色彗星          |
| 语音助手错误               | 红色呼吸           |
| 语音助手空闲                | LED 关闭              |
| 定时器响铃          | 紫色快速呼吸   |
| 音量变化          | 临时显示     |

#### 音频配置

```yml
i2s_audio:
  - id: i2s_output
    i2s_lrclk_pin: 
      number: GPIO7
      allow_other_uses: true
    i2s_bclk_pin:  
      number: GPIO8
      ...
      ...
```

**I²S 输入/输出**

- 通过 I²S 处理麦克风输入和扬声器输出。
- i2s_input：从麦克风/编解码器捕获 48kHz、32 位立体声音频。
- i2s_output：向 DAC/扬声器播放 48kHz、32 位立体声音频。

**混音器**

- 将多个音频流（媒体+公告）合并为一个输出。

**重采样器**

- 确保所有音频源匹配采样率和位深度。

**媒体播放器**

- 控制音量、静音、播放和闪避（在公告期间降低媒体音量）。
- 为事件预加载声音（定时器、唤醒词、错误）。

#### Respeaker XVF3800 集成

```yml
respeaker_xvf3800:
  id: respeaker
  address: 0x2C
  mute_switch:
    id: mic_mute_switch
    name: "Microphone Mute"
    update_interval: 1s
    on_turn_on:
    ...
    ...
```

- i2c 地址：0x2C
- ID：respeaker
- 麦克风静音开关：每 1 秒更新一次，切换时播放声音。
- DFU 版本报告：每 120 秒报告固件。
- 波束方向传感器：跟踪语音波束（仅内部）。
- 固件管理：如需要自动刷写 XVF3800 固件。

#### 参考/仓库

```yml
external_components:
  - source:
      type: git
      url: https://github.com/formatBCE/esphome
      ref: respeaker_microphone
    components:
      - i2s_audio
    refresh: 0s
  - source:
      type: git
      url: https://github.com/formatBCE/Respeaker-XVF3800-ESPHome-integration
      ref: main
    components: 
      - respeaker_xvf3800
      - aic3104
    refresh: 0s

```

- formatBCE/esphome：自定义 I²S 音频组件。
- formatBCE/Respeaker-XVF3800-ESPHome-integration：
- XVF3800 驱动程序
- AIC3104 音频编解码器驱动程序
- refresh：0s：始终从仓库获取最新代码。

#### 微唤醒词

```yml
micro_wake_word:
  id: mww
  microphone:
    microphone: i2s_mics
    channels: 1
    # gain_factor: 4
  stop_after_detection: false
  ....
  ....
```

检测您的唤醒词（如"Okay Nabu"）并启动语音助手。

- id：mww → 引用名称。
- microphone：i2s_mics，1 通道。
- stop_after_detection：false → 持续监听。
- okay_nabu、kenobi、hey_jarvis、hey_mycroft、stop（内部停止命令；您可以添加自己的）。
- vad probability_cutoff：0.05 → 语音敏感度。

**检测时（如果麦克风未静音）**

- 停止定时器、公告或语音助手（如果活跃）。
- 播放唤醒声音（如果启用）。
- 启动语音助手接收命令。

#### 语音助手

```yml
voice_assistant:
  id: va
  microphone:
    microphone: i2s_mics
    channels: 0
  media_player: external_media_player
  micro_wake_word: mww
  use_wake_word: false
  noise_suppression_level: 0
  ....
  ....
```

控制您的语音助手（VA）行为和交互。

- **麦克风和媒体**：使用 i2s_mics 和外部媒体播放器。
- **唤醒词**：链接到 mww 但不需要唤醒词（use_wake_word：false）。
- **音频设置**：噪声抑制关闭，自动增益 0 dB，正常音量。

##### 事件/发生的情况

- **on_client_connected**：启动 VA，LED 更新，如需要取消麦克风静音。
- **on_client_disconnected**：停止 VA，重置 LED。
- **on_error：在 LED 上显示错误状态**；如果云认证失败播放本地声音。
- **on_start**：VA 启动时降低媒体音量（闪避）。
- **on_listening / on_stt_vad_start / on_stt_vad_end**：在监听和思考期间更新 VA 阶段和 LED。
- **on_intent_progress / on_tts_start / on_tts_end**：处理说话，更新 LED，可触发停止词脚本。
- **on_stt_end**：发送识别文本事件。
- **on_end**：停止 VA，重置 LED，结束闪避。

##### 定时器事件

- on_timer_started / on_timer_updated / on_timer_cancelled / on_timer_finished / on_timer_tick：
  - 更新定时器状态和名称。
  - 更新 LED。
  - 对于滴答定时器，将 LED 更新减少到每 5 秒一次。

:::important
您可以从[这里](https://github.com/formatBCE/Respeaker-XVF3800-ESPHome-integration/tree/main/config)找到 YAML 文件
:::

保存 YAML 后，点击**安装**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_yaml.PNG" alt="pir" width={800} height="auto" /></p>

选择**手动下载**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_manual.PNG" alt="pir" width={800} height="auto" /></p>

等待固件编译。

将生成的.bin 固件文件下载到您的计算机。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_factory.PNG" alt="pir" width={800} height="auto" /></p>

使用**USB Type-C 线缆**将**ESP32-S3**开发板（连接 XVF3800）连接到您的 PC。

在 Chrome 或 Edge 中打开[**Web-ESPHome**](https://web.esphome.io/?dashboard_wizard)。

点击**连接**并选择适当的串口

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/connect-port.png" alt="pir" width={800} height="auto" /></p>

连接后，点击**安装**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_install.PNG" alt="pir" width={500} height="auto" /></p>

选择您刚下载的.bin 文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_bin_write.PNG" alt="pir" width={500} height="auto" /></p>

等待安装完成（可能需要几分钟）。

成功后，您将看到确认消息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_congrats.PNG" alt="pir" width={500} height="auto" /></p>

返回**Home Assistant > 设置 > 设备和服务**。

您应该看到**ESPHome**列为已发现的集成。

点击**配置**，然后**提交**完成设置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_discover.PNG" alt="pir" width={800} height="auto" /></p>

## 添加您的智能设备

根据制造商的用户手册设置**Sonoff BASICR2**设备。您需要创建 eWELink 账户。

### 安装 HACS

如果尚未安装，请按照官方指南设置[**Home Assistant Community Store**](https://hacs.xyz/docs/use/)：

从侧边栏打开**HACS**。
在搜索部分搜索**Sonoff LAN**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_HACS.PNG" alt="pir" width={800} height="auto" /></p>

点击**安装**添加集成。
重启 Home Assistant 以应用更改。

### Sonoff

导航到**设置 → 设备和服务**。
点击**添加集成**。
搜索并选择**Sonoff**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_sonoff.PNG" alt="pir" width={800} height="auto" /></p>

输入您的**eWeLink 账户凭据**进行身份验证。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/credentials.png" alt="pir" width={500} height="auto" /></p>

成功连接后，您将在以下位置看到关联的实体：
**设置 → 设备和服务 → 实体**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/sonoff-id.png" alt="pir" width={800} height="auto" /></p>

## 使用 Nabu Cloud 的语音助手

在此演示中，我们展示如何使用语音连接**Home Assistant Cloud（Nabu Casa）**。设置简单，您可以利用**一个月免费试用**来探索其全部功能。
通过内置**唤醒词**："Okay Nabu"，您可以轻松触发语音命令并**无缝集成**设备和服务**随时随地** — 无需复杂配置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_voice.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_voice_nabu.PNG" alt="pir" width={800} height="auto" /></p>

## 特别感谢

我们要感谢 FormatBCE 为 Seeed Studio ReSpeaker XVF3800 创建了这个出色的 YAML 文件。
在他的[GitHub](https://github.com/formatBCE/Respeaker-XVF3800-ESPHome-integration)上支持他

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
