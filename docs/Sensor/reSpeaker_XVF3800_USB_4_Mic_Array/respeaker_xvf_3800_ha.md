---
description: Experience the power of the ReSpeaker XVF3800 USB 4-Mic Array—an advanced circular microphone array with AEC, beamforming, noise suppression, and 360° voice capture. Paired with the compact XIAO ESP32S3, it delivers high-performance voice control for smart devices, robotics, and IoT applications. Join us as we demonstrate seamless integration with Home Assistant to control devices using voice commands.

title: Smart Home Voice Control with Home Assistant

keywords:
- reSpeaker
- XIAO
- ESP32S3
- Home Assistant
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /respeaker_xvf3800_xiao_home_assistant
last_update:
  date: 9/17/2025
  author: Kasun Thushara
---

## Overview

Talk with smart spaces with new **ReSpeaker XMOS XVF3800 with XIAO ESP32S3** switch up the lights, crank up the tunes, or even ask about the weather  using voice

This chapter we will use the ReSpeaker XMOS XVF3800 with XIAO ESP32S3  HA Voice Assistant to connect the Sonoff smart switch to realize voice control of the light switch.

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

## Hardware Required

<table align="center">
  <tr>
      <th>ReSpeaker XVF3800 with XIAO ESP32S3</th>
        <th>Home Assistant Device</th>
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
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Yellow-Standard-Version-with-CM4-p-5809.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Sonoff-BasicR2-p-5514.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

## Firmware update

To get the best playback experience, we need to update XMOS firmware to
Download the firmware from here. On your computer, plug in the ReSpeaker XMOS XVF3800 with XIAO ESP32S3 and run the in our guide:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/firmware_1.png" alt="pir" width={800} height="auto" /></p>

:::note
The XVF3800 mic array needs a 12.288 MHz MCLK to work, but ESPHome (used in Home Assistant) can't generate it due to API limits. This firmware makes the XVF3800 act as the I2S master instead, so it can generate its own clocks without needing MCLK from the ESP32.
Our firmware fixes this limitation, so the mic works properly with Home Assistant.
:::

You can download Firmware From [Here](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/i2s)

The installtion guide is [Here](https://wiki.seeedstudio.com/respeaker_xvf3800_introduction/#update-firmware)

## Prepare ReSpeaker XMOS XVF3800 with XIAO ESP32S3

Go to **Home Assistant > Settings > Add-ons**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_Settings.PNG" alt="pir" width={800} height="auto" /></p>

Click **Add-on Store** (usually at the bottom right)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_addon.PNG" alt="pir" width={800} height="auto" /></p>

Under **Official add-ons**, search for and install **ESPHome Device Builder**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome.PNG" alt="pir" width={800} height="auto" /></p>

After installation, click **Start** to run the ESPHome add-on.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_Start.PNG" alt="pir" width={800} height="auto" /></p>

Enable **Start on Boot, Watchdog, and Show in Sidebar** for easier access.

From the Home Assistant sidebar, go to **ESPHome Builder**.

Click **+ NEW DEVICE**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_add_new.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_device.PNG" alt="pir" width={500} height="auto" /></p>

When prompted, click **SKIP** – we’ll create the configuration manually.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_skip.PNG" alt="pir" width={500} height="auto" /></p>

Select your new device entry and click **EDIT**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_respeaker_device.PNG" alt="pir" width={800} height="auto" /></p>

Replace the content with your custom **YAML configuration**

### YAML description

#### WiFi

This section sets up how your device connects to Wi-Fi.

```yml
wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
```

- **ssid & password**: Taken from your secrets.yaml file so your password isn’t visible in plain text.
- **Events**: Run actions when Wi-Fi connects or disconnects:
  - on_connect:
    - Stops BLE improv setup.
    - Runs control_leds script (LED effect for Wi-Fi connected).

  - on_disconnect:
    - Runs control_leds script (LED effect for Wi-Fi disconnected).

#### I²C Bus

I²C is a communication line that lets your ESP32 talk to other chips like the microphone or audio codec.

```yml
i2c:
  id: internal_i2c
  sda: GPIO5
  scl: GPIO6
  scan: true
  frequency: 100kHz
```

- **id**: A name to reference this bus elsewhere.
- **sda** / scl: Pins used for data and clock.
- **scan**: Checks connected devices at startup.
- **frequency**: Communication speed (100kHz is standard).

#### Switches

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

Switches are software-controlled “buttons” in Home Assistant. They control features like sound, timers, or alarms.

**Wake Word Sound Switch**: Controls wake word audio.

**Timer Ringing Internal Switch**:

- Tracks if a timer is active.
- on_turn_on: Ducks other audio by -20dB, starts timer sound, updates LED, auto-stops after 15 min.
- on_turn_off: Stops timer, restores volume, updates LED.

**Alarm On Switch**:

- Tracks alarm status.
- Runs LED script when on/off.

**LED Ring Brightness**:

- Lets user adjust brightness with a slider.
- min_value / max_value define limits.
- restore_value keeps previous setting after restart.

#### Sensors

**Next Timer**

- Shows remaining time for the next timer.
- Updates only when a timer changes (saves resources).

**Alarm Time & Device Time**

- Displays current alarm and ESP32 system time.

#### LED Effects on interval

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

- Intervals run code repeatedly in the background.
- 50ms: Runs code 20 times per second.
- Controls LED animations based on system state or selected effect.

#### LED Control

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

**Central Controller (led_set_effect)**

- Manages all LED effects in one place.
- Can dynamically set effect type, color (R/G/B), and speed.
- Uses update scripts for smooth motion.
- Off effect immediately turns LEDs off.

**Individual Scripts**

- Each animation (breathe, rainbow, comet, twinkle, timer tick, volume display, LED beam) has its own script.
- Makes system modular and easy to maintain.
- Triggered periodically by led_animation_interval or by central controller.

| Device State           | LED Effect             |
|------------------------|----------------------|
| Startup failed         | Red breathe           |
| Improv BLE mode        | Warm twinkle          |
| Initialization         | Blue twinkle          |
| No HA connection       | Red twinkle           |
| Voice Assistant waiting             | Purple beam           |
| Voice Assistant listening           | Bright purple beam    |
| Voice Assistant thinking            | Purple breathe        |
| Voice Assistant replying            | Purple comet          |
| Voice Assistant error               | Red breathe           |
| Voice Assistant idle                | LEDs off              |
| Timer ringing          | Purple fast breathe   |
| Volume change          | Temporary display     |

#### Audio Configuration

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

**I²S Input / Output**

- Handles microphone input and speaker output via I²S.
- i2s_input: Captures 48kHz, 32-bit stereo audio from mic/codec.
- i2s_output: Plays back 48kHz, 32-bit stereo audio to DAC/speaker.

**Mixer**

- Combines multiple audio streams (media + announcements) into one output.

**Resamplers**

- Ensures all audio sources match sample rate and bit depth.

**Media Player**

- Controls volume, mute, playback, and ducking (reduces media volume during announcements).
- Preloaded sounds for events (timer, wake word, errors).

#### Respeaker XVF3800 Integration

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

- i2c address: 0x2C
- ID: respeaker
- Microphone Mute Switch: Updates every 1 second, plays sound on toggle.
- DFU Version Reporting: Reports firmware every 120s.
- Beam Direction Sensor: Tracks voice beam (internal only).
- Firmware Management: Auto-flash XVF3800 firmware if needed.

#### References / Repositories

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

- formatBCE/esphome: Custom I²S audio component.
- formatBCE/Respeaker-XVF3800-ESPHome-integration:
- XVF3800 driver
- AIC3104 audio codec driver
- refresh: 0s: Always fetches latest code from repositories.

#### Micro Wake Word

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

Detects your wake words (like “Okay Nabu”) and starts the voice assistant.

- id: mww → Reference name.
- microphone: i2s_mics, 1 channel.
- stop_after_detection: false → Keeps listening continuously.
- okay_nabu, kenobi, hey_jarvis, hey_mycroft, stop (internal stop command; you can add your own).
- vad probability_cutoff: 0.05 → Speech sensitivity.

**On Detection (if mic not muted)**

- Stops timers, announcements, or voice assistant if active.
- Plays wake sound (if enabled).
- Starts voice assistant for commands.

#### Voice Assistant

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

Controls your voice assistant (VA) behavior and interactions.

- **Microphone & media**: Uses i2s_mics and an external media player.
- **Wake word**: Linked to mww but wake word not required (use_wake_word: false).
- **Audio settings**: Noise suppression off, auto gain 0 dB, normal volume.

##### Events / What happens

- **on_client_connected**: Starts VA, LEDs update, unmute mic if needed.
- **on_client_disconnected**: Stops VA, resets LEDs.
- **on_error: Shows error state on LEDs**; plays local sound if cloud auth fails.
- **on_start**: Lowers media volume (ducking) when VA starts.
- **on_listening / on_stt_vad_start / on_stt_vad_end**: Update VA phase and LEDs during listening and thinking.
- **on_intent_progress / on_tts_start / on_tts_end**: Handles speaking, updates LEDs, can trigger stop-word script.
- **on_stt_end**: Sends recognized text event.
- **on_end**: Stops VA, resets LEDs, ends ducking.

##### Timer events

- on_timer_started / on_timer_updated / on_timer_cancelled / on_timer_finished / on_timer_tick:
  - Updates timer states and names.
  - Updates LEDs.
  - Reduces LED updates to every 5 seconds for ticking timer.

:::important
You can Found the YAML file from [Here](https://github.com/formatBCE/Respeaker-XVF3800-ESPHome-integration/tree/main/config)
:::

Once your YAML is saved, click **INSTALL**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_yaml.PNG" alt="pir" width={800} height="auto" /></p>

Choose **Manual Download**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_manual.PNG" alt="pir" width={800} height="auto" /></p>

Wait for the firmware to compile.

Download the generated .bin firmware file to your computer.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_factory.PNG" alt="pir" width={800} height="auto" /></p>

Connect the **ESP32-S3** board (with XVF3800 connected) to your PC using a **USB Type-C cable**.

Open [**Web-ESPHome**](https://web.esphome.io/?dashboard_wizard) in Chrome or Edge.

Click **CONNECT** and choose the appropriate serial port

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/connect-port.png" alt="pir" width={800} height="auto" /></p>

Once connected, click **INSTALL**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_install.PNG" alt="pir" width={500} height="auto" /></p>

Select the .bin file you just downloaded.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_bin_write.PNG" alt="pir" width={500} height="auto" /></p>

Wait for the installation to complete (may take a few minutes).

After success, you’ll see a confirmation message.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_congrats.PNG" alt="pir" width={500} height="auto" /></p>

Return to **Home Assistant > Settings > Devices & Services**.

You should see **ESPHome** listed as a discovered integration.

Click **CONFIGURE**, then **Submit** to finish setup.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_discover.PNG" alt="pir" width={800} height="auto" /></p>

## Add your smart device

Set up the **Sonoff BASICR2** device according to the manufacturer's user manual. You will need to create eWELink account.

### Install HACS

If not already installed, follow the official guide to set up the [**Home Assistant Community Store**](https://hacs.xyz/docs/use/):

Open **HACS** from the sidebar.
Search for **Sonoff LAN** in the Search section.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_HACS.PNG" alt="pir" width={800} height="auto" /></p>

Click **Install** to add the integration.
Restart Home Assistant to apply changes.

### Sonoff

Navigate to **Settings → Devices & Services**.
Click **Add Integration**.
Search for and select **Sonoff**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_esphome_sonoff.PNG" alt="pir" width={800} height="auto" /></p>

Enter your **eWeLink account credentials** to authenticate.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/credentials.png" alt="pir" width={500} height="auto" /></p>

Once connected successfully, you will see the associated entities listed under:
**Settings → Devices & Services → Entities**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/sonoff-id.png" alt="pir" width={800} height="auto" /></p>

## Voice Assistant with Nabu Cloud

In this demo, we are showcasing how to connect with **Home Assistant Cloud (Nabu Casa)** using voice. The setup is simple, and you can take advantage of a **one-month free trial** to explore its full capabilities.
With the built-in **wake word**: “Okay Nabu”, you can effortlessly trigger voice commands and **seamlessly integrate** with devices and services **anywhere, anytime** — all without complex configurations.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_voice.PNG" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/HA/HA_voice_nabu.PNG" alt="pir" width={800} height="auto" /></p>

## Special Thanks

We would like to thank FormatBCE for creating this awesome YAML file for the Seeed Studio ReSpeaker XVF3800.
Support him on his [GitHub](https://github.com/formatBCE/Respeaker-XVF3800-ESPHome-integration)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
