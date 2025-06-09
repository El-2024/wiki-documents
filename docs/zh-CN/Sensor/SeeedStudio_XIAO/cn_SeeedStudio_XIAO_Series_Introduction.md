---
description: SeeedStudio XIAO 系列介绍
title: XIAO 介绍
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/SeeedStudio_XIAO_Series_Introduction
last_update:
  date: 05/15/2025
  author: Citric
---

# Seeed Studio XIAO 介绍

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<br />
<br />
<br />

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/xiao_topicpage/main.jpg" style={{width:1000, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>Seeed Studio XIAO 系列是一组拇指大小的强大微控制器单元（MCUs），专为需要高性能和无线连接的空间受限项目量身定制。它融合了流行硬件平台的精髓，如 ESP32、RP2350、RP2040、nRF52840 和 SAMD21。Arduino 兼容的 XIAO 系列是您在边缘设备上拥抱微型机器学习（TinyML）的完美工具。</font>
    </div>
</div>
<br/> <br/>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/xiao-series-page"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 了解更多 </font></span></strong></a>
</div>

<br/> <br/>

## Seeed Studio XIAO 系列对比表

<table align="center">
<font size={"2"}>
	<tr>
        <th></th>
	    <th><a href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html">Seeed Studio XIAO SAMD21</a></th>
	    <th><a href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html">Seeed Studio XIAO RP2040</a></th>
        <th><a href="https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html">Seeed Studio XIAO RP2350</a></th>
        <th><a href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html">Seeed Studio XIAO nRF52840</a></th>
        <th><a href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">Seeed Studio XIAO nRF52840 Sense</a></th>
        <th><a href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">Seeed Studio XIAO ESP32C3</a></th>
        <th><a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">Seeed Studio XIAO ESP32C6</a></th>
        <th><a href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">Seeed Studio XIAO ESP32S3</a></th>
        <th><a href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">Seeed Studio XIAO ESP32S3 Sense</a></th>
        <th><a href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html">Seeed Studio XIAO RA4M1</a></th>
        <th><a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html">Seeed Studio XIAO MG24</a></th>
        <th><a href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html">Seeed Studio XIAO MG24 Sense</a></th>
	</tr>
	<tr>
	    <th>SKU</th>
	    <td align="center">102010328</td>
	    <td align="center">102010428</td>
        <td align="center">102010550</td>
	    <td align="center">102010448</td>
	    <td align="center">102010469</td>
        <td align="center">113991054</td>
        <td align="center">113991254</td>
        <td align="center">113991114</td>
        <td align="center">113991115</td>
        <td align="center">102010551</td>
        <td align="center">102010590</td>
        <td align="center">102010610</td>
	</tr>
	<tr>
        <th>简短描述</th>
	    <td>通用，具有强大的稳定性和兼容性</td>
	    <td>兼容 Raspberry Pi RP2040 生态系统</td>
        <td>兼容 Raspberry Pi RP2350 生态系统</td>
	    <td>超低功耗蓝牙 5.0，适合消费级产品应用</td>
	    <td>XIAO nRF52840 的高级版本，带有板载麦克风和六轴 IMU</td>
        <td>支持 WiFi 和 BLE，经济实惠的 RISC-V</td>
        <td>支持 WiFi-6、BLE、Zigbee 和 Thread for Matter</td>
        <td>支持 WiFi 和 BLE，高性能</td>
        <td>XIAO ESP32S3 的高级版本，带 OV2640 摄像头和麦克风</td>
        <td>Renesas 32 位 ARM Cortex-M4 MCU，兼容 Arduino IDE</td>
        <td>Matter、Open Thread、Zigbee、蓝牙低功耗（BLE 5.3）、蓝牙 Mesh、专有 2.4 GHz</td>
        <td>XIAO MG24 的高级版本，带六轴加速度传感器和麦克风</td>
	</tr>
	<tr>
	    <th>芯片</th>
	    <td align="center">Microchip SAMD21</td>
	    <td align="center">Raspberry Pi RP2040</td>
        <td align="center">Raspberry Pi RP2350</td>
	    <td align="center">Nordic nRF52840</td>
	    <td align="center">Nordic nRF52840</td>
        <td align="center">Expressif ESP32C3</td>
        <td align="center">Expressif ESP32C6</td>
        <td align="center">Expressif ESP32S3</td>
        <td align="center">Expressif ESP32S3</td>
        <td align="center">Renesas RA4M1</td>
        <td align="center">Silicon Labs EFR32MG24</td>
        <td align="center">Silicon Labs EFR32MG24 Sense</td>
	</tr>
	<tr>
	    <th>架构</th>
	    <td align="center">Cortex-M0+<br />运行频率高达 48MHz</td>
	    <td align="center">双核 Cortex-M0+<br />运行频率高达 133 MHz</td>
        <td align="center">双核 ARM Cortex-M33<br />运行频率高达 150 MHz，带 FPU<br />可切换至 RISC‑V，使用双 Hazard3 RISC‑V 核心</td>
	    <td align="center">Cortex-M4<br />运行频率高达 64 MHz</td>
	    <td align="center">Cortex-M4<br />运行频率高达 64 MHz</td>
        <td align="center">RISC-V<br/>运行频率高达 160 MHz</td>
        <td align="center">两个 RISC-V 处理器<br />高性能核心运行频率高达 160 MHz<br/>低功耗核心运行频率高达 20 MHz</td>
        <td align="center">双核 Xtensa LX7<br />运行频率高达 240 MHz</td>
        <td align="center">双核 Xtensa LX7<br />运行频率高达 240 MHz</td>
        <td align="center">Cortex-M4<br />运行频率高达 48 MHz，带 FPU</td>
        <td align="center">ARM Cortex-M33 <br />运行频率高达 78 MHz</td>
        <td align="center">ARM Cortex-M33 <br />运行频率高达 78 MHz</td>
	</tr>
	<tr>
	    <th>RAM</th>
	    <td align="center">32 KB SRAM</td>
	    <td align="center">264 KB SRAM</td>
        <td align="center">520kB SRAM<br/>2MB Flash</td>
	    <td align="center">256 KB RAM</td>
	    <td align="center">256 KB RAM</td>
        <td align="center">400 KB SRAM</td>
        <td align="center">512KB SRAM</td>
        <td align="center">512 KB SRAM<br />8MB PSRAM</td>
        <td align="center">512 KB SRAM<br />8MB PSRAM</td>
        <td align="center">32 KB SRAM</td>
        <td align="center">256kB RAM</td>
        <td align="center">256kB RAM</td>
	</tr>
    <tr>
	    <th>Flash&ROM（芯片）</th>
	    <td align="center">256KB</td>
	    <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center">1MB</td>
	    <td align="center">1MB</td>
        <td align="center">4MB</td>
        <td align="center">4MB</td>
        <td align="center">384KB</td>
        <td align="center">384KB</td>
        <td align="center">256KB</td>
        <td align="center">1536KB+4MB</td>
        <td align="center">1536KB+4MB</td>
	</tr>
    <tr>
	    <th>Flash（板载）</th>
	    <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center">2MB</td>
        <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center">2MB</td>
	    <td align="center">2MB</td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center">8MB</td>
        <td align="center">8MB</td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
	</tr>
    <tr>
	    <th>内置传感器</th>
	    <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center">IMU，麦克风</td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center">OV2640 摄像头，麦克风</td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center">六轴加速度传感器，麦克风</td>
	</tr>
    <tr>
	    <th>PWM/模拟引脚</th>
	    <td align="center">11/11</td>
	    <td align="center">11/4</td>
        <td align="center">19/3</td>
	    <td align="center">11/6</td>
	    <td align="center">11/6</td>
        <td align="center">11/4</td>
        <td align="center">11/7</td>
        <td align="center">11/9</td>
        <td align="center">13/11</td>
        <td align="center">19/14</td>
        <td align="center">22/18</td>
        <td align="center">22/18</td>
	</tr>
    <tr>
	    <th>I2C/UART/SPI</th>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	</tr>
    <tr>
	    <th>蓝牙</th>
	    <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	</tr>
    <tr>
	    <th>WiFi</th>
	    <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	</tr>
    <tr>
	    <th>复位按钮</th>
	    <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	</tr>
    <tr>
	    <th>启动按钮</th>
	    <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
	</tr>
    <tr>
	    <th>用户 LED</th>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	</tr>
    <tr>
	    <th>电池充电 LED 和芯片</th>
	    <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	</tr>
    <tr>
	    <th>低功耗模式</th>
	    <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>❌</font></td>
        <td align="center">50μA</td>
	    <td align="center">5μA</td>
	    <td align="center">5μA</td>
        <td align="center">44μA</td>
        <td align="center">15μA</td>
        <td align="center">14μA</td>
        <td align="center">26.5mA</td>
        <td align="center">45μA</td>
        <td align="center">1.95μA</td>
        <td align="center">1.95μA</td>
	</tr>
   <tr>
	    <td colspan="11"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/xiao_topic_page/"><strong><span><font color={'FFFFFF'} size={"3"}>📚 兼容项目</font></span></strong></a></div></td>        
	</tr>
    <tr>
	    <th>Arduino</th>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	</tr>
    <tr>
	    <th>PlatformIO</th>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
	</tr>
    <tr>
	    <th>MicroPython</th>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
	</tr>
    <tr>
        <th>CircuitPython</th>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
    </tr>
    <tr>
        <th>Zephyr</th>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>❌</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
	    <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>
        <td align="center"><font size={"3"}>✅</font></td>    
        <td align="center"><font size={"3"}>❌</font></td>   
        <td align="center"><font size={"3"}>❌</font></td>
        <td align="center"><font size={"3"}>❌</font></td> 
    </tr>
</font>
</table>

## Seeed Studio XIAO 系列兼容配件
作为不断发展的 Seeed Studio XIAO 生态系统的一部分，我们提供了多种扩展配件，这些配件与 Seeed Studio XIAO 板兼容。[点击此处探索更多](https://www.seeedstudio.com/xiao-series-page)。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/xiao_topicpage/add_on_accessories.png" /></div>

## Seeed Studio XIAO 入门指南

<table align="center">
<font size={"2"}>
    <tr>
        <th align="center"><strong>维基</strong></th>
        <th align="center"><strong>书籍</strong></th>
        <th align="center"><strong>Fab Academy</strong></th>
        <th align="center"><strong>视频</strong></th>
        <th align="center"><strong>课程</strong></th>
    </tr>
    <tr>
        <td><strong>入门维基</strong><br />由 Seeed Studio AE 团队和社区提供</td>
        <td>强大而小巧的开发板：掌握 Arduino 和 TinyML<br />作者：Marcelo Rovai 和 Leo Feng</td>
        <td>Fab XIAO: 如何从零开始创建开发板<br />作者：<a href="https://www.linkedin.com/in/adri%C3%A1n-torres-oma%C3%B1a/">ADRIÁN TORRES</a></td>
        <td>使用 Seeed XIAO 进行 TinyML<br/>作者：Jim Bob Bennett</td>
        <td>Maker100-Eco（经济型）机器人、物联网和 TinyML 机器学习课程<br />作者：Jeremy Ellis</td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/xiao_topic_page/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 维基</font></span></strong></a></div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-Kit-Courses/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 课程</font></span></strong></a></div></td> 
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://fabacademy.org/2020/labs/leon/students/adrian-torres/fabxiao.html"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Fab-Xiao</font></span></strong></a></div></td> 
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.youtube.com/watch?v=ZsQ0-jXdnRY"><strong><span><font color={'FFFFFF'} size={"4"}>📚 第1部分</font></span></strong></a></div><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.youtube.com/watch?v=-1EP3iqYYdU"><strong><span><font color={'FFFFFF'} size={"4"}>📚 第2部分</font></span></strong></a></div></td> 
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://github.com/hpssjellis/maker100-eco"><strong><span><font color={'FFFFFF'} size={"4"}>📚 GitHub</font></span></strong></a></div></td>  
    </tr>
</font>
</table>

## 开源 Seeed Studio XIAO

### Seeed 系列 Kicad 文件

- **[kicad_sym]** [Kicad 符号](https://files.seeedstudio.com/wiki/XIAO/Seeed_Studio_XIAO_Series-20240814.kicad_sym)
- **[ZIP]** [Kicad 封装](https://files.seeedstudio.com/wiki/XIAO/Seeed_Studio_XIAO_Series-20240814.pretty.zip)

### Seeed Studio XIAO SAMD21 开源材料

- **[PDF]** [ATSAMD218A-MU 数据手册](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)

- **[PDF]** [Seeed Studio XIAO SAMD21 原理图](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0-SCH-191112.pdf)

- **[ZIP]** [Seeed Studio XIAO SAMD21 KiCAD 文件](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-KICAD.zip)

- **[ZIP]** [Seeed Studio XIAO SAMD21 Eagle 文件](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0.zip)

- **[DXF]** [Seeed Studio XIAO SAMD21 尺寸 DXF 文件](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_Dimension.rar)

- **[LBR]** [Seeed Studio XIAO SAMD21 Eagle 封装](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-footprint-eagle.lbr)

- **[ZIP]** [Seeed Studio XIAO SAMD21 工厂固件](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_final_firmware.zip)

- **[XLSX]** [Seeed Studio XIAO SAMD21 引脚分布表](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO SAMD21 3D 模型](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/seeeduino-xiao-samd21-3d-model.zip)

### Seeed Studio XIAO RP2040 开源材料

- **[PDF]** [RP2040 数据手册](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/rp2040_datasheet.pdf)

- **[PDF]** [Seeed Studio XIAO RP2040 原理图](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-v1.3.pdf)

- **[ZIP]** [Seeed Studio XIAO RP2040 KiCAD 文件](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeeduino-xiao-rp2040-KiCAD-Library.zip)

- **[ZIP]** [Seeed Studio XIAO RP2040 Eagle 文件](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO_RP2040_v1.22_SCH&PCB.zip)

- **[DXF]** [Seeed Studio XIAO RP2040 尺寸 DXF 文件](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-DXF.zip)

- **[LBR]** [Seeed Studio XIAO RP2040 Eagle 封装](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/Seeed-Studio-XIAO-RP2040-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO RP2040 引脚分布表](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/XIAO-RP2040-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO RP2040 3D 模型](https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip)

### Seeed Studio XIAO nRF52840 开源材料

- **[PDF]** [nRF52840 数据手册](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)

- **[PDF]** [Seeed Studio XIAO nRF52840 原理图](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF52840 KiCAD 文件](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_SCH&PCB.zip)

- **[ZIP]** [Seeed Studio XIAO nRF52840 Eagle 文件](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_KiCAD.zip)

### Seeed Studio XIAO nRF52840 开源资料

- **[DXF]** [Seeed Studio XIAO nRF52840 尺寸图（DXF 格式）](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-DXF.zip)

- **[LBR]** [Seeed Studio XIAO nRF52840 Eagle 封装库](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO nRF52840 引脚分布表](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-pinout_sheet.xlsx)


### Seeed Studio XIAO nRF52840 Sense 开源资料

- **[PDF]** [nRF52840 数据手册](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)

- **[PDF]** [Seeed Studio XIAO nRF52840 Sense 原理图](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF52840 KiCAD 文件](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_SCH&PCB.zip)

- **[ZIP]** [Seeed Studio XIAO nRF52840 Eagle 文件](https://files.seeedstudio.com/wiki/XIAO-BLE/SeeedStudio_XIAO_nRF52840_v1.1_KiCAD.zip)

- **[DXF]** [Seeed Studio XIAO nRF52840 Sense 尺寸图（DXF 格式）](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Sense-DXF.zip)

- **[LBR]** [Seeed Studio XIAO nRF52840 Sense Eagle 封装库](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO nRF52840 Sense 引脚分布表](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Senese-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO nRF52840 Sense 3D 模型](https://files.seeedstudio.com/wiki/XIAO-BLE/seeed-studio-xiao-nrf52840-3d-model.zip)


### Seeed Studio XIAO nRF52840 (Sense) Plus 开源资料

- **[PDF]** [nRF52840 数据手册](https://files.seeedstudio.com/wiki/XIAO-BLE/nrf52840_datasheet.pdf)

- **[ZIP]** [Seeed Studio XIAO nRF52840 (Sense) Plus 原理图](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XIAO_nRF52840_Plus_SCH_PCB_v1.0.zip)

- **[ZIP]** [Seeed Studio XIAO nRF52840 KiCAD 文件](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XlAO_nRF52840_KiCAD_file.zip)

- **[DXF]** [Seeed Studio XIAO nRF52840 Sense 尺寸图（DXF 格式）](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_Studio_XlA0_nRF52840_Sense_Dimension_in_DXF.dxf)

- **[ZIP]** [Seeed Studio XIAO Plus Base 带底部焊盘引出](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_with_botton_pad_lead_out_V1.0.zip)

- **[ZIP]** [Seeed Studio XIAO Plus Base 不带底部焊盘引出](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_without_botton_pad_lead_out_V1.0.zip)


### Seeed Studio XIAO ESP32C3 开源资料

- **[WiKi]** [初探 Seeed Studio XIAO ESP32C3](https://sigmdel.ca/michel/ha/xiao/xiao_esp32c3_intro_en.html)

- **[PDF]** [ESP32C3 数据手册](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/esp32-c3_datasheet.pdf)

- **[PDF]** [Seeed Studio XIAO ESP32C3 原理图](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-SCH.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32C3 KiCAD 库](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-KiCAD-Library.zip)

- **[ZIP]** [Seeed Studio XIAO ESP32C3 Eagle 库](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-v1.2_SCH-PCB.zip)

- **[DXF]** [Seeed Studio XIAO ESP32C3 尺寸图（DXF 格式）](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-DXF.zip)

- **[LBR]** [Seeed Studio XIAO ESP32C3 Eagle 封装库](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeed-Studio-XIAO-ESP32C3-footprint-eagle.lbr)

- **[ZIP]** [Seeed Studio XIAO ESP32C3 出厂固件](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin)

- **[XLSX]** [Seeed Studio XIAO ESP32C3 引脚分布表](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO ESP32C3 3D 模型](https://grabcad.com/library/seeed-studio-xiao-esp32-c3-1)


### Seeed Studio XIAO ESP32C6 开源资料

- **[PDF]** [ESP32C6 数据手册](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/esp32-c6_datasheet_en.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32C6 KiCAD 库](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO-ESP32-C6_v1.0_SCH&PCB_24028.zip)

- **[PDF]** [Seeed Studio XIAO ESP32C6 原理图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/XIAO-ESP32-C6_v1.0_SCH_PDF_24028.pdf)

- **[XLSX]** [Seeed Studio XIAO ESP32C6 引脚分布表](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/XIAO_ESP32C6_Pinout.xlsx)


### Seeed Studio XIAO ESP32S3 开源资料

- **[PDF]** [Seeed Studio XIAO ESP32S3 原理图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Eagle 库](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)

- **[DXF]** [Seeed Studio XIAO ESP32S3 尺寸图（DXF 格式）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)

- **[LBR]** [Seeed Studio XIAO ESP32S3 Eagle 封装库](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 出厂固件](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware.zip)

- **[XLSX]** [Seeed Studio XIAO ESP32S3 引脚分布表](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)

- **[STEP]** [Seeed Studio XIAO ESP32S3 3D 模型](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip)


### Seeed Studio XIAO ESP32S3 Sense 开源资料

- **[PDF]** [Seeed Studio XIAO ESP32S3 Sense 原理图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense KiCAD 库](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeeduino-xiao-ESP32S3-KiCAD-Library.zip)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense Eagle 库文件](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_SCH&PCB_230324.zip)

- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense DXF 尺寸图（顶部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_top.dxf)

- **[DXF]** [Seeed Studio XIAO ESP32S3 Sense DXF 尺寸图（底部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_ExpBoard_v1.0_bot.dxf)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Sense 出厂固件](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAOESP32S3-Sense-firmware.zip)

- **[XLSX]** [Seeed Studio XIAO ESP32S3 Sense 引脚分布表](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)

- **[STP]** [XIAO ESP32S3 Sense 外壳设计（顶部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp)

- **[STP]** [XIAO ESP32S3 Sense 外壳设计（底部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp)

- **[STEP]** [Seeed Studio XIAO ESP32S3 Sense 3D 模型](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-sense-3d_model.zip)


### Seeed Studio XIAO ESP32S3 Plus 开源资料

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Plus 原理图](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Plus_V1.0_SCH_PCB.zip)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Plus KiCAD 库文件](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_KiCAD_Library.zip)

- **[DXF]** [Seeed Studio XIAO ESP32S3 Plus DXF 尺寸图（顶部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/TOP.dxf)

- **[DXF]** [Seeed Studio XIAO ESP32S3 Plus DXF 尺寸图（底部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/BOTTOM.dxf)

- **[XLSX]** [Seeed Studio XIAO ESP32S3 Plus 引脚分布表](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_Pinout.xlsx)

- **[ZIP]** [Seeed Studio XIAO ESP32S3 Plus KiCAD 文件](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed_Studio_XIAO_ESP32S3_Plus_V1.0_SCH%26PCB_KICAD.zip)

- **[ZIP]** [Seeed Studio XIAO Plus 基板（带底部焊盘引出）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_with_botton_pad_lead_out_V1.0.zip)

- **[ZIP]** [Seeed Studio XIAO Plus 基板（不带底部焊盘引出）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_Plus_Base_without_botton_pad_lead_out_V1.0.zip)

### Seeed Studio XIAO RP2350 Sense 开源资料

- **[PDF]** [Seeed Studio XIAO RP2350 原理图](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/Seeed-Studio-XIAO-RP2350-v1.0.pdf)

- **[XLSX]** [Seeed Studio XIAO RP2350 引脚分布表](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-pinout-sheet.xlsx)

- **[DXF]** [Seeed Studio XIAO RP2350 DXF 尺寸图](https://files.seeedstudio.com/wiki/XIAO-RP2350/res/XIAO-RP2350-dimension-v1.0.dxf)

- **[STEP]** [Seeed Studio XIAO RP2350 3D STEP 文件](https://grabcad.com/library/seeed-studio-xiao-rp2350-1)

### Seeed Studio XIAO MG24 Sense 开源资料

- **[PDF]** [Seeed Studio XIAO MG24 Sense 数据手册](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24-group-datasheet.PDF)

- **[PDF]** [Seeed Studio XIAO MG24 Sense 原理图](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MGM240S_KICAD_Prj.pdf)

- **[PDF]** [Seeed Studio XIAO MG24 Sense 无线 SoC](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/efr32xg24_rm.pdf)

- **[Kicad]** [Seeed Studio XIAO MG24 Sense 封装库](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

- **[ZIP]** [Seeed Studio XIAO MG24 Sense PCB 和原理图](https://files.seeedstudio.com/wiki/XIAO_MG24/XIAO_MG24_Sense_v1.0_SCH&PCB.zip)

### Seeed Studio XIAO MG24 开源资料

- **[PDF]** [Seeed Studio XIAO MG24 数据手册](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/mg24-group-datasheet.PDF)

- **[PDF]** [Seeed Studio XIAO MG24 原理图](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/XIAO_MGM240S_KICAD_Prj.pdf)

- **[PDF]** [Seeed Studio XIAO MG24 无线 SoC](https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/efr32xg24_rm.pdf)

- **[Kicad]** [Seeed Studio XIAO MG24 封装库](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

- **[ZIP]** [Seeed Studio XIAO MG24 PCB 和原理图](https://files.seeedstudio.com/wiki/XIAO_MG24/XIAO_MG24_v1.0_SCH&PCB.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，确保您在使用我们的产品时获得顺畅的体验。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>