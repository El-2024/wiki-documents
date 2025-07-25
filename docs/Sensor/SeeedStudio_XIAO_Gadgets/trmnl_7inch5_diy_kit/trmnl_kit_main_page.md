---
description: 'This page is the navigation page for TRMNL 7inch5(OG) DIY Kit.'
title: Getting Started with TRMNL 7.5inch(OG) DIY Kit
image: https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/trmnl_head.webp
slug: /trmnl_7inch5_diy_kit_main_page
sidebar_position: 1
last_update:
  date: 06/29/2025
  author: Allen
---

# TRMNL 7.5" (OG) DIY Kit

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/head.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/TRMNL-7-5-Inch-OG-DIY-Kit-p-6481.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction
### Product Overview
The TRMNL 7.5" (OG) DIY Kit, co-developed by Seeed Studio and TRMNL, is a versatile e-ink development solution. It combines a 7.5-inch 800×480 monochrome e-ink display, XIAO ESP32-S3 PLUS driver board, 2000 mAh rechargeable battery, and 10cm FPC extension cable. Fully compatible with the TRMNL BYOD ecosystem, this kit enables no-code dashboard building with over 375 plugins and 8 layouts, ideal for DIY enthusiasts, smart home interfaces, and creative digital signage.

### Features
:::tip
To celebrate the collaboration, Team TRMNL offers 30% off on TRMNL BYOD firmware access (35 dollar, usually for 50 dollar). Use code **trmnl-seeed-diy** at checkout (first 200 customers, 1 per customer). First come, first serve!
:::

- **TRMNL BYOD Compatibility**: Official kit for building TRMNL 7.5'' OG device with 375+ plugins and 8 no-code layouts (e.g., Calendar, Shopify, GitHub)
- **7.5" E-Ink Display**: 800×480 monochrome display with partial refresh (0.34s) and full refresh (3.5s)
- **Energy-Efficient Design**: 2000mAh battery provides up to 3 months of operation in deep sleep mode (6-hour refresh interval)
- **Dual Ecosystem Support**: Compatible with Home Assistant (via ESPHome) and Arduino IDE for custom development
- **Open Source Enclosures**: Available on Printables and Thingiverse for easy customization

### Specification
| Parameter | Description |
| --- | --- |
| MCU | XIAO ePaper Display Dev Board with XIAO ESP32-S3 Plus onboard |
| Display | 7.5-inch Monocolor ePaper Display |
| Resolution | 800x480 |
| Operating Voltage | 5V |
| Battery | 2000mAh Rechargeable Li-ion Battery (3-month battery life in deep sleep mode) |
| Operating Temperature | -40°C to 85°C |
| Enclosure | Not included (open-source designs on Printables and Thingiverse) |

## Hardware Overview
### Component Diagram
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_7.5_Epaper_Panel/hardware_components.jpg" style={{width:1000, height:'auto'}}/></div>

### Part List
| Product | Quantity |
| --- | --- |
| XIAO ePaper Display Dev Board (XIAO ESP32-S3 Plus) | 1 |
| 7.5-inch Monocolor ePaper Display (800×480) | 1 |
| FPC Extension Cable (10 cm) | 1 |
| FPC Connector | 1 |
| 2000mAh Rechargeable Li-ion Battery | 1 |

## Getting Started
### Equipment Installation
**Step 1. Connect Display to Driver Board**  
Align the FPC cable with the connector on the XIAO ePaper Display Board, then secure the latch to ensure a firm connection.  

:::tip
The metal side of the FPC cable should face upwards, otherwise, no content will be displayed.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**Step 2. Attach Battery**  
Connect the battery cable to the JST connector on the driver board, ensuring correct polarity (red wire to +, black to -).  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**Step 3. Enclosure Assembly (Optional)**  
Print open-source enclosure parts from [Printables](https://www.printables.com/) and assemble the components inside.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:600, height:'auto'}}/></div>


## Wiki Center
### Explore Detailed Guides

#### 1. [TRMNL BYOD Ecosystem Tutorial](https://wiki.seeedstudio.com/works_with_trmnl/)  
Discover how to use the TRMNL BYOD platform with 375+ plugins, including no-code dashboard creation for your work and life.  

#### 2. [Works with Home Assistant](https://wiki.seeedstudio.com/works_with_esphome)  
Learn how to set up your TRMNL kit with Home Assistant via ESPHome, including firmware upload and basic programming.  

#### 3. [Works with Arduino](https://wiki.seeedstudio.com/works_with_arduino/)  
Master TRMNL kit control with Arduino, including refresh mechanisms, graphics rendering, and power management.  

## Resources
- **[Firmware]** [TRMNL ePaper Library (GitHub)](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)   
- **[Hardware]** [Driver Board SCH](https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/XIAO_ePaper_driver_board_sch.pdf)
- **[Printable]** [triangular base](https://www.printables.com/model/1354873)  
- **[Printable]** [L-shaped base](https://www.printables.com/model/1354879)  
- **[Thingiverse]** [triangular base](https://www.thingiverse.com/thing:7091094)
- **[Thingiverse]** [L-shaped base](https://www.thingiverse.com/thing:7091096)

## Tech Support & Product Discussion -->

Thank you for choosing our products! We offer multiple support channels:
<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>
  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>