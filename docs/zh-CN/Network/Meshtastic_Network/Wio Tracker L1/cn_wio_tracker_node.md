---
description: Wio Tracker L1 Meshtastic 节点介绍
title: Wio Tracker L1 Meshtastic 节点
keywords:
- Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-L1.webp
slug: /cn/wio_tracker_l1_node
sidebar_position: 1
last_update:
  date: 2025/5/19
  author: Jessie
---



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.jpg" alt="pir" width={600} height="auto" /></p>


Wio Tracker L1 系列是一款低功耗、高扩展性的 Meshtastic 节点，具有 LoRa（862–930 MHz）、高效处理的 nRF52840 和用于精准定位的 L76K GPS 模块。该设备设计灵活，支持 OLED 和电子墨水屏显示，以及太阳能板和电池供电，非常适合各种物联网和离网应用场景。


## 版本对比
 
:::tip
Wio Tracker L1 系列提供 4 个版本——选择最适合您需求的版本。
:::

|产品名称|Wio Tracker L1 Lite|Wio Tracker L1|Wio Tracker L1 Pro|Wio Tracker L1 E-Ink|
|------------------|------------------|--------------------------|-----------------------|-----------------------|
|图片|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993653-wio-tracker-l1-lite.jpg" alt="pir" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993648-wio-tracker-l1.jpg" alt="pir" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993649-wio-tracker-l1-pro.jpg" alt="pir" width={300} height="auto" />|<img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/L1-e-ink.png" alt="pir" width={300} height="auto" />|
|购买链接|<p style={{textAlign: 'center'}}>[立即购买！](https://www.seeedstudio.com/Wio-Tracker-L1-Lite-p-6455.html)</p>|<p style={{textAlign: 'center'}}>[立即购买！](https://www.seeedstudio.com/Wio-Tracker-L1-p-6453.html)</p>|<p style={{textAlign: 'center'}}>[立即购买！](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html)</p>|<p style={{textAlign: 'center'}}>[立即购买！](https://www.seeedstudio.com/Wio-Tracker-L1-E-ink-p-6456.html)</p>|
|LoRa|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|GPS|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|屏幕|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>1.3 英寸 OLED</p><br/><p style={{textAlign: 'center'}}>分辨率：128 × 64 像素</p>|<p style={{textAlign: 'center'}}>1.3 英寸 OLED</p><br/><p style={{textAlign: 'center'}}>分辨率：128 × 64 像素</p>|<p style={{textAlign: 'center'}}>2.13 英寸电子墨水屏</p><br/><p style={{textAlign: 'center'}}>分辨率：122 × 250 像素</p>|
|太阳能+电池连接器|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>内置 2000mAh 电池</p>|<p style={{textAlign: 'center'}}>✅</p>|
|外壳|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>-</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>-</p>|

## 概述

### 特性

* **预装 Meshtastic 固件**
预装 Meshtastic 固件，开箱即用，轻松设置。

* **三种供电方式**
支持 Type-C 快速充电、太阳能输入和锂电池供电，可灵活部署于各种环境，非常适合户外和移动应用。

* **灵活的显示支持**
可选 1.3 英寸 OLED 和 2.13 英寸电子墨水屏，提供多种显示选项以满足不同的功耗和视觉反馈需求。

* **高扩展性**
完全兼容 Grove 生态系统，包含 PTH 接口和 SWD 调试接口，支持自定义硬件扩展和高级开发。



### 规格

<table>
  <tr>
    <th colspan="1">处理器</th>
    <th colspan="1">
      Nordic nRF52840<br />ARM® Cortex®-M4 with FPU，最高运行频率 64 MHz
    </th>
  </tr>
  <tr>
    <td colspan="1">片上存储</td>
    <td colspan="1">1 MB 闪存和 256 kB RAM</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="2">无线</td>
    <td colspan="1">
      LoRa：基于 <a href="https://www.seeedstudio.com/Wio-SX1262-Wireless-Module-p-5981.html">Wio-SX1262</a>，支持 862-930MHz
    </td>
  </tr>
  <tr>
    <td colspan="1">蓝牙 5.0</td>
  </tr>
  <tr>
    <td colspan="1">GPS</td>
    <td colspan="1">L76K（支持 GPS、北斗、GLONASS、QZSS）</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">接口</td>
    <td colspan="1">Grove *1：UART/IIC/GPIO</td>
  </tr>
  <tr>
    <td colspan="1">通孔焊盘（PTH）：UART/IIC/GPIO/模拟</td>
  </tr>
  <tr>
    <td colspan="1">预留 SWD 焊盘</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">电源输入</td>
    <td colspan="1">USB Type-C：5V — 1A</td>
  </tr>
  <tr>
    <td colspan="1">太阳能板：5V — 1A</td>
  </tr>
  <tr>
    <td colspan="1">锂电池：3.7V — 1A</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">OLED 屏幕</td>
    <td colspan="1">尺寸：1.3 英寸</td>
  </tr>
  <tr>
    <td colspan="1">分辨率：128 × 64 像素</td>
  </tr>
  <tr>
    <td colspan="1">显示区域（毫米）：34.5 × 23.0</td>
  </tr>
  <tr>
    <td colspan="1" rowspan="3">电子墨水屏</td>
    <td colspan="1">尺寸：2.13 英寸</td>
  </tr>
  <tr>
    <td colspan="1">分辨率：122 × 250 像素</td>
  </tr>
  <tr>
    <td colspan="1">显示区域（毫米）：48.55 × 23.7046</td>
  </tr>
  <tr>
    <td colspan="1">认证</td>
    <td colspan="1">FCC, CE, RoHS</td>
  </tr>
</table>


### 硬件概览


**Wio Tracker L1**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio_tracker-l1.png" alt="pir" width={800} height="auto" /></p>


**Wio Tracker L1 Lite**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio_tracker_l1_lite.png" alt="pir" width={800} height="auto" /></p>


**Wio Tracker L1 Pro**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio_tracker_l1-pro.png" alt="pir" width={800} height="auto" /></p>



**结构图**


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/l1-diagram.png" alt="pir" width={800} height="auto" /></p>