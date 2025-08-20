---
description: Guide for flashing firmware to your SenseCAP Watcher Agent
title: Flash Watcher Agent Firmware
sidebar_position: 1
keywords:
- SenseCAP
- Watcher
- Agent
- Firmware
- Flash
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /flash_watcher_agent_firmware
last_update:
  date: 2024/04/25
  author: Zeke
---

# Flash Watcher Agent Firmware

## Overview

Special thanks to [XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) for their open-source contributions that made this project possible.

This guide provides instructions for flashing the Watcher Agent firmware to your SenseCAP Watcher device using Espressif's Flash Download Tool.

:::danger Note
The firmware provided in this guide may require authentication information. If needed, please contact [sensecap@seeed.cc](mailto:sensecap@seeed.cc).
:::

## Prerequisites

### Required Hardware
- SenseCAP Watcher device
- USB Type-C data cable
- Windows PC

### Required Software
- [Flash Download Tool](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip) (3.9.6 or later)
- [Watcher Agent firmware binary file](http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/watcher_agent_firmware.bin)

## Flashing Process

### Step 1. Download and Install Flash Download Tool

1. Download the Flash Download Tool from Espressif's official website:
   [Flash Download Tool v3.9.6](https://www.espressif.com/sites/default/files/tools/flash_download_tool_3.9.6.zip)
2. Extract the downloaded zip file to a directory of your choice
3. No installation is required - simply double-click the executable file to run the tool

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/flash%20download%20tool.jpg" style={{width:500, height:'auto'}}/></div>

### Step 2. Prepare the Firmware File

1. Download the Watcher Agent firmware [binary file](http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/watcher_agent_firmware.bin)
:::caution Note
Ensure all path contains no special symbols.
:::


### Step 3. Connect the Device

1. Connect your Watcher to your computer using the Type-C port on the bottom of the device
2. Double-click `flash_download_tool_3.9.7.exe` to launch the tool
3. Configure the following settings:
   - ChipType: Select `ESP32-S3`
   - WorkMode: Select `Develop`
   - LoadMode: Select `UART`

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting1.jpg" style={{width:300, height:'auto'}}/></div>

### Step 4. Configure Firmware Settings

1. Click the "..." button in the first row to browse and select the firmware binary file you download
2. Ensure the checkbox next to the firmware file is selected
3. Enter `0x0` in the address field after the firmware file selection

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting2.jpg" style={{width:600, height:'auto'}}/></div>

### Step 5. Select COM Port and Flash Settings

Configure the following settings:
- SPI SPEED: 80MHz
- SPI MODE: DIO
- FLASH SIZE: 32Mbit
- COM: In Device Manager, find the COM port whose name ends with “B” — select this one for flashing.
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting4.jpg" style={{width:500, height:'auto'}}/></div>

:::note
If flashing doesn’t start after clicking START, click STOP and confirm you have selected the COM port ending with “B”.
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/tools%20setting3.jpg" style={{width:500, height:'auto'}}/></div>
:::

### Step 6. Erase Flash

1. Click the `ERASE` button to clear the existing firmware
2. Wait for the erase process to complete


### Step 7. Flash the Firmware

1. Click the `START` button to begin flashing
2. You should see progress information in the log window
3. If no progress appears or failed, try the other COM port


### Step 8. Verify Success

The flashing process is complete when you see the success message in the log window.

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish1.jpg" style={{width:300, height:'auto'}}/></div>

### Step 9. Restart the Device

1. Locate the reset hole on your Watcher device
2. Use a pin to gently press the reset button
3. The device will restart with the new firmware

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Flash/finish2.jpg" style={{width:500, height:'auto'}}/></div>

## Troubleshooting

### Common Issues

1. **No COM Port Detected**
   - Ensure you're using the bottom Type-C port
   - Try a different USB cable
   - Check if USB drivers are installed properly

2. **Flashing Fails**
   - Try the another COM port
   - Check if the address (0x0) is correctly entered

3. **Device Not Responding**
   - Use a pin to gently press the reset button
   - Try erasing before flashing

## Technical Support

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
