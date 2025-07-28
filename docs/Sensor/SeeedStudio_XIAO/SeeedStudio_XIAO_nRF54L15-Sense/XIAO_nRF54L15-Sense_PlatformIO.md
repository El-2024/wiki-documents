---
description: Seeed Studio XIAO nRF54L15 with PlatformIO
title: XIAO nRF54L15 with PlatformIO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/mg24_platform/top_mg24_platform02.webp
slug: /xiao_nrf54l15_with_platform_io
last_update:
  date: 7/4/2025
  author: Jason
  sidebar_position: 5
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/
platformIO_nrf54l15.png" style={{width:600, height:'auto'}}/></div>

## PlatformIO Introduce

PlatformIO stands as a powerful and highly extensible development ecosystem designed for embedded systems. It seamlessly integrates support for a vast array of development boards and microcontrollers, offering unparalleled flexibility. What sets PlatformIO apart is its remarkable scalability: even if your specific board isn't natively supported, its architecture allows for straightforward custom board definitions.

Crucially, PlatformIO bridges the gap for developers familiar with Arduino, enabling the compilation and deployment of Arduino-style code by simply including the relevant libraries. This guide will walk you through the process of setting up PlatformIO for your XIAO nRF54L15 and demonstrate how to compile, upload, and monitor sample code, making complex Zephyr RTOS development remarkably accessible.

## Setting Up PlatformIO for XIAO nRF54L15

Follow these streamlined steps to configure your development environment and deploy your first application on the XIAO nRF54L15 Sense.


### Install PlatformIO IDE Extension for VS Code

If you haven't already, install the PlatformIO IDE extension directly within Visual Studio Code. This powerful extension transforms VS Code into a comprehensive embedded development environment.

- Open VS Code.

- Go to the Extensions view (Ctrl+Shift+X or Cmd+Shift+X).

- Search for ["PlatformIO IDE"](https://platformio.org/platformio-ide) and click Install.


### Create a New PlatformIO Project

Here you can choose any one of the development version to create a project file, I take XIAO ESP32 C3 for example.

<table align="center">
  <tr>
      <th>Operation one</th>
        <th>Operation two</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_platform/mg24patform2.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/mg24_platformIO.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
</table>


### Configure platformio.ini for XIAO nRF54L15 Zephyr Support

Once your project is created, locate the platformio.ini file in the root of your project directory (visible in the VS Code Explorer on the left). This file is the heart of your PlatformIO project configuration.

<table align="center">
  <tr>
      <th>Operation three</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/platform54.jpg"/></div>
  </tr>
</table>


You need to replace the entire content of your platformio.ini file with the following configuration:

```
[env:seeed-xiao-nrf54l15]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54l15
```

:::tip
Crucial Step: After pasting the code, remember to save the platformio.ini file (Ctrl+S or Cmd+S). PlatformIO will automatically detect the changes and begin downloading the necessary Zephyr framework and board-specific tools from the platform-seeedboards GitHub repository. This process might take a few moments.
:::


### Compile and Upload Your First Blink Example

Now, let's test your setup with a classic "Blink" example. This code will toggle the built-in LED on your XIAO nRF54L15.

Replace the content of your src/main.cpp (or src/main.c) file with the following Zephyr-compatible C code:

<div className="download_platformio_container" style={{ textAlign: 'center' }}>
    <a
        className="download_platformio_item"
        href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-blink"
        style={{
            backgroundColor: '#FFA500', 
            color: '#FFFFFF',
            padding: '10px 20px',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            fontSize: '16px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            style={{ verticalAlign: 'middle', marginRight: '8px' }}
        >
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414L12 15z"/>
            <path d="M19 19H5v-4h2v2h10v-2h2v4zm0-14v10h-2V7h-4v2h-2V7H7v10H5V5h14zm-2 2H7v2h10V7z"/>
        </svg>
        <span>Download Source Code</span>
    </a>
</div>

**Next we compile and burn using this code**

```cpp
/*
 * Copyright (c) 2016 Intel Corporation
 *
 * SPDX-License-Identifier: Apache-2.0
 */

 #include <zephyr/kernel.h>
 #include <zephyr/device.h>
 #include <zephyr/drivers/gpio.h>
 #include <nrfx_power.h>
 
 /* 1000 msec = 1 sec */
 #define SLEEP_TIME_MS   1000
 
 /* The devicetree node identifier for the "led0" alias. */
 #define LED0_NODE DT_ALIAS(led0)
 
 /*
  * 获取 LED 的 GPIO 规范
  */
 static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
 
 int main(void)
 {
	 int ret;
	 bool led_is_on = true;
	nrfx_power_constlat_mode_request();
	 if (!gpio_is_ready_dt(&led)) {
		 return -1;
	 }
 
	 ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_ACTIVE);
	 if (ret < 0) {
		 return ret;
	 }
 
	 while (1) {
		 ret = gpio_pin_set_dt(&led, (int)led_is_on);
		 if (ret < 0) {
			 return ret;
		 }
		 led_is_on = !led_is_on;
		 k_msleep(SLEEP_TIME_MS);
	 }
 
	 return 0;
 }

```

Now, connect your XIAO nRF54L15 to your computer via USB. In VS Code:

- Build: Click the "Build" icon (checkmark) in the PlatformIO toolbar at the bottom of VS Code, or use the PlatformIO sidebar: PROJECT TASKS -> your_project_name -> General -> Build.

- Upload: After a successful build, click the "Upload" icon (right arrow) in the PlatformIO toolbar, or use the PlatformIO sidebar: PROJECT TASKS -> your_project_name -> General -> Upload.


<table align="center">
  <tr>
      <th>Operation four</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/blink.jpg" /></div>
  </tr>
</table>

The output in the terminal should indicate a successful compilation and burning process.


### Observe the Result

After a successful upload, your XIAO nRF54L15's built-in LED should begin blinking at a 1-second interval.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light.gif" style={{width:400, height:'auto'}}/></div>



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
