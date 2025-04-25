---
description: Connect Seeed Studio IoT Button To ESPHome
title: Connect Seeed Studio IoT Button To ESPHome
keywords:
  - ESPHOME
  - IoT Button
  - ESP32-C6
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.webp
slug: /iot_button_for_esphome
last_update:
  date: 03/14/2025
  author: qiuyu wei, Citric
---

# Connect Seeed Studio IoT Button To ESPHome

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.jpg" style={{width:600, height:'auto'}}/></div>

In this tutorial, we will show you how to connect the Seeed Studio IoT Button to Home Assistant using ESPHome. You'll learn how to set up the button to detect different press patterns (single click, double click, and long press) and trigger different actions in your smart home.

## Materials Required

<div class="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio IoT Button</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

The Seeed Studio IoT Button is a versatile smart button with a built-in ESP32-C6 chip. It's a complete, standalone device that can be integrated with Home Assistant to control various devices and trigger automations. With its ESP32-C6 chip, it offers low power consumption and reliable connectivity without requiring any additional development boards.

## Install ESPHome on Home Assistant

 **Step 1**. **Click Settings** --> **Add-on** --> **ADD-ON STORE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/1.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/1.5.png" style={{width:1000, height:'auto'}}/></div>

**Step 2**. Search **ESPHome**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/2.png" style={{width:1000, height:'auto'}}/></div>

**Step 3**. Click **INSTALL**, then click **START**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/3.png" style={{width:1000, height:'auto'}}/></div>

**Step 4**. Successful installation

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/4.png" style={{width:1000, height:'auto'}}/></div>

## Adding the IoT Button to ESPHome

**Step 5**. Click **+NEW DEVICE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/5.png" style={{width:1000, height:'auto'}}/></div>

**Step 6**. Click **NEXT** and give your device a name of your choice. We recommend using "seeedstudio-iot-button" or something similar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/6.png" style={{width:600, height:'auto'}}/></div>

**Step 7**. Select your device type

For the IoT Button with its built-in ESP32-C6, select "ESP32" as the device type. We'll modify the configuration later to specify the correct ESP32 variant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/7.png" style={{width:580, height:'auto'}}/></div>

**Step 8**. Add device successfully, finally click **SKIP**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/8.png" style={{width:600, height:'auto'}}/></div>

## Configuring the IoT Button

### Using Web Flasher (Recommended Method)

The easiest way to get started with the IoT Button is to use the Web Flasher tool to install the pre-built ESPHome firmware directly from your browser.

**Step 1**: Visit the [Seeed Studio IoT Button Firmware Flasher](https://gadgets.seeed.cc/) website.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/3.png" style={{width:800, height:'auto'}}/></div>

**Step 2**: Connect your IoT Button to your computer using a USB cable.

**Step 3**: Click the "Install" button on the Web Flasher page.

**Step 4**: Select the correct USB port from the popup dialog.

**Step 5**: The browser will automatically download and flash the firmware to your device.

**Step 6**: After flashing is complete, the IoT Button will create its own WiFi network. Connect to the WiFi network named "seeedstudio-iot-button" from your computer or smartphone.

**Step 7**: Once connected, your device should automatically open a configuration page. If not, open a browser and navigate to `http://192.168.4.1`.

**Step 8**: On the configuration page:
   - Enter your home WiFi network name (SSID) and password
   - Make sure this is the same network that your Home Assistant is connected to
   - Click "Save" to apply the settings

**Step 9**: The IoT Button will restart and connect to your home WiFi network.

**Step 10**: In Home Assistant, go to Settings > Devices & Services. You should see a notification that a new ESPHome device has been discovered. Click "Configure" to add the device to Home Assistant.

**Step 11**: Follow the prompts to complete the setup. The IoT Button will now appear in your Home Assistant dashboard with three virtual switches corresponding to the different button actions.

### Alternative Method: Using ESPHome Dashboard

If you prefer to use the ESPHome dashboard for more control over the configuration, follow the steps below.

### Adding the ESPHome Configuration

**Step 1**. The corresponding device card will appear on the ESPHome page, then click the **EDIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/9.png" style={{width:1000, height:'auto'}}/></div>

**Step 2**. Replace the entire configuration with the following code:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/10.png" style={{width:1000, height:'auto'}}/></div>

<details>

<summary>Click here to preview the full code</summary>

```yaml
substitutions:
  name: "seeedstudio-iot-button"
  friendly_name: "Seeed Studio IoT Button"

esphome:
  name: "${name}"
  friendly_name: "${friendly_name}"
  name_add_mac_suffix: true
  project:
    name: "seeedstudio.iot_button"
    version: "3.3"
  platformio_options:
    board_upload.maximum_size: 4194304
  on_boot:
    priority: -100.0
    then:
      - light.turn_on: blue_led
      - delay: 5min  # Wait for initialization
      - logger.log: "Boot complete, entering light sleep"
      - light_sleep.enter:
          id: light_sleep_1

esp32:
  board: esp32-c6-devkitc-1
  variant: esp32c6
  flash_size: 4MB # upload.flash_size
  framework:
    type: esp-idf
    sdkconfig_options:
      CONFIG_FREERTOS_UNICORE: y
      CONFIG_FREERTOS_HZ: '1000'
      CONFIG_PM_USE_RTC_TIMER_REF: y
      CONFIG_XTAL_FREQ_40: y
      CONFIG_ESP_DEFAULT_CPU_FREQ_MHZ: '80000000'
      CONFIG_PM_DFS_INIT_AUTO: n
      CONFIG_FREERTOS_USE_TICKLESS_IDLE: y
      CONFIG_PM_ENABLE: y
      CONFIG_PM_SLP_IRAM_OPT: y
      CONFIG_PM_RTOS_IDLE_OPT: y
      CONFIG_ESP_WIFI_SLP_IRAM_OPT: y
      CONFIG_PM_POWER_DOWN_CPU_IN_LIGHT_SLEEP: y
      CONFIG_PM_PROFILING: y

external_components:
  - source:
      type: git
      url: https://github.com/Seeed-Studio/xiao-esphome-projects
      ref: main
    components: [ light_sleep ]
    refresh: 0s

  - source:
      type: git
      url: https://github.com/ackPeng/esphome.git
      ref: api
    components: [ api ]
    refresh: 0s
    
# Enable logging
logger:
  hardware_uart: USB_SERIAL_JTAG
  level: DEBUG

# Enable Home Assistant API
api:

ota:
  - platform: esphome

wifi:
  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "seeedstudio-iot-button"
    # ap_timeout: 10s

  # WiFi network status events
  on_connect:
    then:
      - logger.log: "WiFi Connected!"
      # Show green color for 3 seconds then turn off to save power
      - light.turn_on: 
          id: rgb_led
          brightness: 100%
          red: 0%
          green: 100%
          blue: 0%
          effect: "Subtle Flicker"
      - delay: 1s
      - light.turn_off: rgb_led

  on_disconnect:
    then:
      - logger.log: "WiFi Disconnected!"

captive_portal:

output:
  - platform: gpio
    pin: GPIO2
    id: user_led
    inverted: True
  - platform: gpio
    pin: GPIO18
    id: enable_pin

light_sleep:
  id: light_sleep_1
  wakeup_pin: 9
  on_prepare_sleep:
    then:
      - logger.log: "Preparing to enter light sleep"
      - light.turn_off: blue_led
      - light.turn_off: rgb_led
  on_wakeup:
    then:
      - light.turn_on: blue_led
      - logger.log: "Device woke up from light sleep"
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'

# Switch to control the LED strip power
switch:
  - platform: output
    name: "LED Strip Power"
    output: enable_pin
    id: led_power
    restore_mode: ALWAYS_ON  # Auto-enable on startup
    internal: true

  # Virtual switches for button actions
  - platform: template
    name: "Switch 1"
    id: virtual_toggle_1
    optimistic: true
    turn_on_action:
      - logger.log: "Single Short Clicked"
      - logger.log: "Switch 1 turned ON"
      # Toggle blue LED to indicate button press
      - light.turn_on:
          id: rgb_led
          effect: "Blink"
      - delay: 1s
      - light.turn_off: rgb_led
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
      # Add your switch-on action
    turn_off_action:
      - logger.log: "Single Short Clicked"
      - logger.log: "Switch 1 turned OFF"
      # Toggle blue LED to indicate button press
      - light.turn_on:
          id: rgb_led
          effect: "Blink"
      - delay: 1s
      - light.turn_off: rgb_led
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
      # Add your closing action

  - platform: template
    name: "Switch 2"
    id: virtual_toggle_2
    optimistic: true
    turn_on_action:
      - logger.log: "Double Clicked"
      - logger.log: "Switch 2 turned ON"
      # Double blink blue LED to indicate button press
      - light.turn_on:
          id: rgb_led
          brightness: 100%
          red: 100%
          green: 50%
          blue: 0%
          effect: "Subtle Flicker"
      - delay: 1s
      - light.turn_off: rgb_led
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
      # Add your switch-on action
    turn_off_action:
      - logger.log: "Double Clicked"
      - logger.log: "Switch 2 turned OFF"
      # Double blink blue LED to indicate button press
      - light.turn_on:
          id: rgb_led
          brightness: 100%
          red: 100%
          green: 50%
          blue: 0%
          effect: "Subtle Flicker"
      - delay: 1s
      - light.turn_off: rgb_led
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
      # Add your closing action

  - platform: template
    name: "Switch 3"
    id: virtual_toggle_3
    optimistic: true
    turn_on_action:
      - logger.log: "Long Press"
      - logger.log: "Switch 3 turned ON"
      # Long blue LED on to indicate button press
      - light.turn_on:
          id: rgb_led
          effect: "Rainbow"
      - delay: 1s
      - light.turn_off: rgb_led
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
      # Add your switch-on action
    turn_off_action:
      - logger.log: "Long Press"
      - logger.log: "Switch 3 turned OFF"
      # Long blue LED on to indicate button press
      - light.turn_on:
          id: rgb_led
          effect: "Rainbow"
      - delay: 1s
      - light.turn_off: rgb_led
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
      # Add your closing action


light:
  - platform: binary
    name: "SeeedStudio IoT Button Blue LED"
    output: user_led
    id: blue_led
    internal: true
  - platform: esp32_rmt_led_strip
    internal: true
    pin: GPIO19
    num_leds: 1
    restore_mode: RESTORE_AND_OFF
    chipset: WS2812
    rgb_order: GRB
    is_rgbw: False
    name: "RGB Status LED"
    id: rgb_led
    effects:
      - random:
          name: "Random Color"
          transition_length: 5s
          update_interval: 10s
      - addressable_rainbow:
          name: "Rainbow"
      - strobe:
          name: "Blink"
          colors:
            - state: True
              brightness: 100%
              red: 100%
              green: 0%
              blue: 50%
              duration: 500ms
            - state: False
              duration: 500ms
      - flicker:
          name: "Subtle Flicker"
          alpha: 95%
          intensity: 1.5%

binary_sensor:
  - platform: gpio
    pin:
      number: GPIO9
      inverted: True
      mode:
        input: True
        pullup: True
    name: "SeeedStudio IoT Button"
    on_multi_click:
      - timing:
          - ON for at most 300ms
          - OFF for at least 0.5s
        then:
          - logger.log: "Single Short Clicked"
          - switch.toggle: virtual_toggle_1

      - timing:
          - ON for at most 300ms
          - OFF for at most 0.5s
          - ON for at most 300ms
          - OFF for at least 0.2s 
        then:
          - logger.log: "Double Clicked"
          - switch.toggle: virtual_toggle_2

      - timing:
          - ON for 1s to 1.5s
          - OFF for at least 0.5s
        then:
          - logger.log: "Long Press"
          - switch.toggle: virtual_toggle_3
    on_press:
      - globals.set:
          id: button_press_time
          value: !lambda 'return millis();'
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
    on_release:
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
      - if:
          condition:
            lambda: 'return (millis() - id(button_press_time)) >= 5000;'
          then:
            - logger.log: "Entering Light Sleep Mode"
            - light_sleep.enter:
                id: light_sleep_1

globals:
  - id: button_press_time
    type: uint32_t
    restore_value: no
    initial_value: '0'
  - id: last_activity_time
    type: uint32_t
    restore_value: no
    initial_value: '0'

interval:
  - interval: 10s
    then:
      - if:
          condition:
            lambda: 'return (millis() - id(last_activity_time)) >= 120000;'
          then:
            - logger.log: "No activity for 2 minutes, entering light sleep"
            - light_sleep.enter:
                id: light_sleep_1
```

</details>

:::note
Make sure to replace "Your_WiFi_SSID" and "Your_WiFi_Password" with your actual WiFi credentials. The WiFi configuration should match the network where your Home Assistant server is running to ensure proper connectivity.
:::

### Understanding the Configuration

Let's break down the key parts of this configuration:

1. **ESP32 Configuration**: 
   - Specifies the ESP32-C6 variant and board type for the IoT Button's built-in chip
   - Sets the flash size to 4MB
   - Uses the ESP-IDF framework which is required for ESP32-C6

2. **Button Configuration**:
   - Connects to GPIO9 where the physical button is wired internally
   - Inverted: True means the pin is pulled high when not pressed and goes low when pressed
   - Configures three different press patterns:
     - Single short click (press and release quickly)
     - Double click (two quick presses)
     - Long press (hold for 1-2.5 seconds)

3. **Virtual Switches**:
   - Creates three template switches that will appear in Home Assistant
   - Each switch corresponds to a different button press pattern
   - These switches can be used in automations to control other devices

**Step 3**. After completing the configuration, click on **INSTALL** in the upper right corner and then select **Plug into this computer**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/12.png" style={{width:1000, height:'auto'}}/></div>

**Step 4**. Wait for the compilation process to complete. Then click **Download project**, select **Factory format** to download the project file, and then click **Open ESPHome Web**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.2.png" style={{width:1000, height:'auto'}}/></div>

**Step 5**. Connect the IoT Button to your computer via USB. Click **CONNECT** and select the correct serial port.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.3.png" style={{width:1000, height:'auto'}}/></div>

**Step 6**. Click **INSTALL** to flash the firmware to your IoT Button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/15.png" style={{width:1000, height:'auto'}}/></div>

**Step 7**. If all goes well, you will see a successful installation message.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/16.png" style={{width:1000, height:'auto'}}/></div>

## Adding the IoT Button to Home Assistant

**Step 16**. Go back to Home Assistant. Click on **Settings** and then select **Devices & services**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/17.png" style={{width:1000, height:'auto'}}/></div>

**Step 17**. You should see a notification about a new device discovered. Click on **CONFIGURE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/18.png" style={{width:1000, height:'auto'}}/></div>

**Step 18**. Follow the prompts to add the IoT Button to Home Assistant. You can select which area the device belongs to and click **FINISH**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/19.png" style={{width:1000, height:'auto'}}/></div>

**Step 19**. The IoT Button and its three virtual switches will now appear in your Home Assistant dashboard.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/20.png" style={{width:1000, height:'auto'}}/></div>

## Creating Automations with the IoT Button

Now that your IoT Button is set up, you can create automations to control devices in your smart home. Let's create a simple automation that turns on a light when you press the button.

**Step 20**. In Home Assistant, go to **Settings** > **Automations & scenes**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/21.png" style={{width:1000, height:'auto'}}/></div>

**Step 21**. Click **CREATE AUTOMATION**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/22.png" style={{width:1000, height:'auto'}}/></div>

**Step 22**. Set up your automation:

1. **Name**: Give your automation a descriptive name, like "IoT Button Single Press - Turn On Light"
2. **Trigger**: Select "State" as the trigger type
   - Entity: Select "Switch 1" (for single press)
   - From: "off"
   - To: "on"
3. **Action**: Choose the device you want to control
   - For example, select a light and set it to turn on

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/23.png" style={{width:1000, height:'auto'}}/></div>

**Step 23**. Click **SAVE** to create the automation.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/24.png" style={{width:1000, height:'auto'}}/></div>

## Advanced Usage: Controlling Different Devices with Different Press Patterns

One of the powerful features of the IoT Button configuration is the ability to detect different press patterns. Here are some ideas for using each pattern:

1. **Single Press (Switch 1)**:
   - Turn on/off lights in the current room
   - Toggle a frequently used device

2. **Double Press (Switch 2)**:
   - Activate a scene (e.g., "Movie Night" that dims lights and turns on the TV)
   - Control a group of devices simultaneously

3. **Long Press (Switch 3)**:
   - Activate security features (arm/disarm alarm)
   - Trigger emergency routines
   - Power off multiple devices at once

To set up these advanced automations, create additional automations following the steps above, but select the appropriate switch (Switch 1, 2, or 3) as the trigger and configure the desired actions.

## Troubleshooting

If you encounter issues with your IoT Button, here are some common troubleshooting steps:

1. **Button not connecting to WiFi**:
   - Verify your WiFi credentials in the ESPHome configuration
   - Ensure your WiFi network is 2.4GHz (ESP32-C6 supports both 2.4GHz and 5GHz, but 2.4GHz typically has better range)

2. **Button not appearing in Home Assistant**:
   - Check that the button and Home Assistant are on the same network
   - Restart the ESPHome add-on and Home Assistant

3. **Button presses not detected**:
   - Verify the GPIO pin configuration (GPIO9 for the standard IoT Button)
   - Check the logs in ESPHome to see if button presses are being detected

4. **Automations not triggering**:
   - Verify that the automation is enabled
   - Check that the trigger conditions match exactly (state changes from "off" to "on")

## Troubleshooting

### Q1: Why does my device keep dropping out and not being able to connect to the internet after replacing the battery? I can confirm that the battery is charged.

After the battery has been removed, due to the chip protection strategy of the 18650 battery, it needs to be activated a bit by a charged USB power cable to work properly.

## Resources

- **[GITHUB]** [Seeed IoT Button Github Zigbee Repository](https://github.com/Seeed-Projects/Seeed_IoT_Button_Zigbee)
- **[GITHUB]** [Seeed IoT Button Github ESPHome Repository](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/seeedstudio-iot-button)
- **[PDF]** [Seeed IoT Button SCH PDF](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH.pdf)
- **[SCH&PCB]** [Seeed IoT Button SCH & PCB](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH&PCB.zip)


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
