---
description: 本文档演示如何使用 Ollama 在 Raspberry Pi AI Box 上部署 DeepSeek LLM。
title: 在 Raspberry Pi AI Box 上部署 DeepSeek
keywords:
  - Edge
  - RasberryPi 5
  - Deepseek
  - Ollama
image: https://files.seeedstudio.com/wiki/AI_box_deepseek/install_deepseek.webp
slug: /cn/deploy_deepseek_on_raspberry_pi_ai_box
last_update:
  date: 03/11/2025
  author: Jiahao

no_comments: false # 用于 Disqus
---

# 在 Raspberry Pi AI Box 上部署 DeepSeek

## 简介

本文档解释了如何使用 [Ollama](https://ollama.com/) 部署框架在 Raspberry Pi AI Box 上部署 [DeepSeek](https://github.com/deepseek-ai/DeepSeek-LLM) 模型。Ollama 简化了在 Raspberry Pi 等紧凑型硬件上安装和运行 AI 模型的过程，处理依赖管理和系统配置。在本指南中，您将找到有关设置环境、安装必要软件以及启动 DeepSeek 模型的清晰分步说明。本资源面向希望在低功耗设备上利用 AI 功能的开发者和 AI 爱好者。

## 准备硬件

<div class="table-center">
	<table align="center">
	<tr>
		<th>reComputer AI R2130</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## 准备软件

### 更新系统：

```
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### 安装 Ollama 

打开一个终端（使用 `Ctrl+Alt+T`），并输入以下命令安装 Ollama：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/AI_box_deepseek/install_ollama.png" alt="pir" width={1000} height="auto"/></p>

```
curl -fsSL https://ollama.com/install.sh | sh
```

### 安装并运行 DeepSeek 模型

然后输入以下命令安装并运行 DeepSeek 7b 模型：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/AI_box_deepseek/install_deepseek.png" alt="pir" width={1000} height="auto"/></p>

```
ollama run deepseek-r1
```

## 结果

在本演示中，我使用了 DeepSeek 1.5b 模型。您可以根据需求和硬件的容量选择使用哪个模型。

<iframe width="800" height="400" src="https://www.youtube.com/embed/qo2iv5RLgbA" title="如何在 Raspberry Pi AI Box 上部署 DeepSeek？ #deepseek #raspberrypi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>