---
description: 本教程讲解如何使用 XIAO ESP32S3，录制语音、识别语音，然后向 ChatGPT 提问并将答案显示在屏幕上。
title: 基于 XIAO ESP32S3 Sense 的迷你 ChatGPT 语音助手
keywords:
- xiao esp32s3 sense
- chatGPT
- 语音转文字
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32s3_speech2chatgpt
last_update:
  date: 05/15/2025
  author: Citric
---

# 基于 XIAO ESP32S3 Sense 的迷你 ChatGPT 语音助手

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

<iframe width="100%" height="400" src="https://www.youtube.com/embed/wPi-XjeJPNw?controls=0" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

今天我们很高兴为您带来一个全新的项目，使用 XIAO ESP32S3 Sense 和 XIAO 圆形显示屏！该项目旨在首先使用 XIAO ESP32S3 Sense 的麦克风和 Google Cloud 的语音转文字服务构建一个语音识别系统。识别的语音文本随后用于调用 OpenAI 的接口向 ChatGPT 提问并返回答案。最后，我们将识别的语音和答案内容显示在屏幕上。

这就是我们的智能 "XIAO" 助手！

让我们来看看完成此项目所需的一些基本步骤。

- 注册并启用 Google Cloud 语音转文字服务
- 在本地主机上部署语音转文字服务
- 将 XIAO ESP32S3 Sense 录制的声音文件上传到 Google Cloud 进行识别
- 在 XIAO ESP32S3 Sense 上部署 ChatGPT
- 屏幕显示内容设计与程序集成

以下是项目的总体框架结构图。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/17.png" style={{width:1000, height:'auto'}}/></div>

## 开始入门

在开始这个项目之前，您可能需要按照以下说明提前准备好硬件和软件。

### 硬件准备

如果您想完整体验整个程序内容，您至少需要以下硬件设备：

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio XIAO 圆形显示屏</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

除此之外，我们需要一个 FAT32 格式且不大于 32GB 的 microSD 卡来存储录音文件。

由于 XIAO ESP32S3 Sense 的设计中，三个上拉电阻 R4~R6 连接到 SD 卡插槽，而圆形显示屏也有上拉电阻，因此两者同时使用时无法读取 SD 卡。为了解决这个问题，我们需要切断 XIAO ESP32S3 Sense 扩展板上的 J3。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:500, height:'auto'}}/></div>

切断 J3 后，XIAO ESP32S3 Sense 上的 SD 卡插槽将无法正常工作，因此您需要将 microSD 卡插入圆形显示屏上的 SD 卡插槽。

接下来，请依次安装 microSD 卡、XIAO ESP32S3 Sense 和圆形显示屏。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/101.gif" style={{width:500, height:'auto'}}/></div>

:::tip
我们建议您先移除摄像头模块，以避免在用刀片切断 J3 连接时刮伤摄像头。
:::

### 软件准备

由于使用了 XIAO ESP32S3，请在开始之前根据 Wiki 指南安装 XIAO ESP32S3 的板载包。

- [Seeed Studio XIAO ESP32S3 (Sense) 入门指南](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/#software-preparation)

除此之外，我们还使用了 XIAO 圆形显示屏，因此您还需要根据 Wiki 准备扩展板的库。

- [Seeed Studio XIAO 圆形显示屏入门指南](https://wiki.seeedstudio.com/get_start_round_display/#getting-started)

在项目过程中，我们可能还会使用一些第三方库，例如 ChatGPT 的库和 ArduinoJSON，您可以在此处下载并添加到 Arduino 开发环境中。

- [库文件](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/tree/main/libraries)

除了基础库，我们还需要使用 Node 服务，因此您需要自行安装 Nodejs，您可以直接从 [官方网站](https://nodejs.org/en) 下载。

一切准备就绪后，让我们开始今天的教程。

## 注册并启用 Google Cloud 语音转文字服务

:::tip
您也可以直接参考 [Google Cloud 官方教程](https://cloud.google.com/speech-to-text/docs/before-you-begin#setting_up_your_google_cloud_platform_project)，了解如何注册并启动 Google Cloud 语音转文字服务以进行配置。
:::

Speech-to-Text 是一个由 Google 人工智能 (AI) 技术驱动的 API。您可以将音频数据发送到 Speech-to-Text，然后接收音频数据的文本转录作为响应。在开始向 Speech-to-Text 发送请求之前，您需要在 Google Cloud 控制台中启用该 API。

### 第一步：登录 Google Cloud 控制台

您可以通过点击 [此处](https://console.cloud.google.com/?_ga=2.241031875.1758680688.1685496686-1606155345.1684977559) 跳转到 Google Cloud 控制台，如果您尚未注册 Google Cloud，可以点击 [此处](https://console.cloud.google.com/?_ga=2.241031875.1758680688.1685496686-1606155345.1684977559) 进行注册。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/18.png" style={{width:1000, height:'auto'}}/></div>

### 第二步：[转到项目选择页面](https://console.cloud.google.com/projectselector2/home/dashboard?_ga=2.5754355.1758680688.1685496686-1606155345.1684977559)

您可以选择一个现有项目或创建一个新项目。有关创建项目的更多信息，请参阅 [创建和管理项目](https://cloud.google.com/resource-manager/docs/creating-managing-projects)。

如果您创建了一个新项目，系统会提示您将一个结算账户链接到该项目。如果您使用的是预先存在的项目，请确保已启用结算。

:::note
注意：您必须启用结算才能使用 Speech-to-Text API，但除非您超出免费配额，否则不会产生费用。有关详细信息，请参阅 [定价](https://cloud.google.com/speech-to-text/pricing) 页面。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/2.png" style={{width:1000, height:'auto'}}/></div>

### 第三步：启动 Speech-to-Text 服务

选择一个项目并将其链接到结算账户后，您可以启用 Speech-to-Text API。在页面顶部的搜索产品和资源栏中输入 **speech**。从结果列表中选择 **Cloud Speech-to-Text API**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/1.png" style={{width:600, height:'auto'}}/></div>

### 第四步：创建服务账户

如果您的项目尚未拥有服务账户，请创建一个新的服务账户。您必须创建服务账户才能使用 Speech-to-Text。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/3.png" style={{width:600, height:'auto'}}/></div>

在新的弹出页面中，在 **CREATE CREDENTIALS** 下选择 **Service account**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/4.png" style={{width:1000, height:'auto'}}/></div>

在 **service account name** 框中，为新的服务账户输入一个唯一名称。您的输入会自动填充到 **Service account ID box** 中。**Service account description box** 是可选的，但如果您计划将多个服务账户与您的项目关联，建议填写。输入服务账户的简要描述，然后点击 **CREATE AND CONTINUE**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/5.png" style={{width:500, height:'auto'}}/></div>

我们建议您为您的服务账户分配一个基本的 IAM 角色。如果需要，您还可以为单个服务账户分配多个角色。有关可用角色及其允许的权限的详细信息，请参阅 [IAM 角色](https://cloud.google.com/iam/docs/understanding-roles)。点击下拉菜单 **Select a role** 并向下滚动到 **Owner**。您可以从右侧列出的选项中为该服务账户选择一个角色。点击 **CONTINUE**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/6.png" style={{width:500, height:'auto'}}/></div>

最后一步可选地允许其他实体（个人、Google 群组等）访问您的服务账户。如果您不需要授予额外访问权限，可以直接点击 **DONE** 而无需输入任何信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/7.png" style={{width:500, height:'auto'}}/></div>

服务账户现在会列在 **Service Accounts** 页面上。您可以随时更改服务账户的权限、添加或生成新密钥以及授予访问权限。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/8.png" style={{width:1000, height:'auto'}}/></div>

### 第五步：为您的服务账户创建 JSON 密钥

在发送请求到 Speech-to-Text 时，您需要在 [认证过程中](https://cloud.google.com/speech-to-text/docs/before-you-begin#set_up_your_environment_variables) 使用此私钥。

要创建密钥，请点击服务账户并选择 **KEYS** 标签。点击 **ADD KEY -> Create new key**。我们建议您创建 JSON 格式的密钥。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/9.png" style={{width:800, height:'auto'}}/></div>

一个新的密钥会自动以您选择的格式下载。将此文件存储在安全的位置，并记录文件路径。在每次新的 Speech-to-Text 会话开始时，您需要将 **GOOGLE_APPLICATION_CREDENTIALS** 环境变量指向此文件。这是认证请求到 Speech-to-Text 的必要步骤。密钥的唯一 ID 会显示在服务账户名称旁边。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/10.png" style={{width:1000, height:'auto'}}/></div>

:::note
请保持密钥为 JSON 格式，因为我们将在后续步骤中使用它。
:::

## 在本地主机上部署语音转文字服务

### 第 6 步：下载项目文件

我们已经打包了完成整个教程所需的项目文件，您可以通过下面的按钮直接从 Github 下载，也可以使用 Git 命令下载到本地。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载项目文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

```
git clone https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT.git
```

同时，您可以将我们在 **第 5 步** 中准备好的 JSON 文件复制到 **NodejsServer** 文件夹中，我们稍后会使用它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/19.png" style={{width:600, height:'auto'}}/></div>

### 第 7 步：设置您的身份验证环境变量

为了设置您的 **GOOGLE_APPLICATION_CREDENTIALS**，您必须拥有与您的项目关联的服务账户，并且能够访问服务账户的 JSON 密钥。

通过设置环境变量 **GOOGLE_APPLICATION_CREDENTIALS** 为您的应用程序代码提供身份验证凭据。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Windows" label="Windows">

对于 PowerShell：

```
$env:GOOGLE_APPLICATION_CREDENTIALS="KEY_PATH"
```

将 **KEY_PATH** 替换为包含您的服务账户密钥的 JSON 文件路径。

例如：

```
$env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\username\Downloads\service-account-file.json"
```

对于命令提示符：

```
set GOOGLE_APPLICATION_CREDENTIALS=KEY_PATH
```

将 **KEY_PATH** 替换为包含您的服务账户密钥的 JSON 文件路径。

</TabItem>

<TabItem value="MacOS or Linux" label="MacOS 或 Linux">

```
export GOOGLE_APPLICATION_CREDENTIALS="KEY_PATH"
```

将 **KEY_PATH** 替换为包含您的服务账户密钥的 JSON 文件路径。

例如：

```
export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"
```

</TabItem>
</Tabs>

在上一步中，我们已经将 JSON 文件放置在 **NodejsServer** 文件夹中，因此我们可以直接进入该文件夹，右键点击并选择 **在 Powershell 中打开** 来进入 Windows 终端。

然后只需输入以下命令：

```
$env:GOOGLE_APPLICATION_CREDENTIALS="tensile-yen-3xxxxx-fdxxxxxxxxxx.json"
```

:::tip
执行上述命令时，请使用您的 JSON 文件名。
:::

:::caution
如果您重新启动了计算机或关闭了 Powershell，可能需要重新配置环境变量以添加密钥。
:::

### 第 8 步：测试本地 Google Cloud 语音转文字服务的部署

在所有设置完成后，我们可以使用一段录音文件结合 JSON 程序来检查我们的部署是否成功将录音转换为文本。

请在项目文件夹中的 **NodejsServer** 中打开一个 Powershell 窗口。

然后输入以下命令。此命令将执行 `speechAPItest.js` 文件，并使用项目资源文件夹中的录音文件作为音频输入源发送到 Google Cloud 进行分析，并返回识别的语音内容。

```
node ./speechAPItest.js
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/13.png" style={{width:800, height:'auto'}}/></div>

如果您的实现如上图所示，则表明您已成功在本地主机上部署 Google Cloud 服务，并可以继续下一步。

如果遇到问题，您可以参考 [Google Cloud 官方说明](https://cloud.google.com/speech-to-text/docs/) 检查部署过程中是否有任何错误或遗漏的步骤。

## 上传 XIAO ESP32S3 Sense 录制的音频文件到 Google Cloud 进行识别

接下来，我们将上传音频文件的路径从本地上传更改为通过 XIAO ESP32S3 Sense 录音上传。而 XIAO ESP32S3 Sense 录制的音频文件首先保存到 microSD 卡，然后通过本地端口传输到 Google Cloud。

### 第 9 步：开启 Google Cloud 语音识别服务的端口监听

同样，在 NodejsServer 文件夹中，使用 Powershell 执行以下命令。

```
node ./speechAPIServer.js
```

执行后，**speechAPIServer.js** 程序将被运行，并持续监听 `localhost:8888`。一旦有文件传输到此端口，将调用 Google Cloud 服务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/20.png" style={{width:800, height:'auto'}}/></div>

监听启动后，只需保持窗口打开，服务将保持运行状态。

### 第 10 步：检查主机 IP 地址

由于 XIAO 录音文件需要通过主机的端口号上传到 Google Cloud 服务，我们需要知道您计算机主机的 IP 地址。

<Tabs>
<TabItem value="Windows" label="Windows">

在 Powershell 中执行以下命令以获取计算机的 IP 地址信息。

```
ipcofig
```

</TabItem>

<TabItem value="MacOS or Linux" label="MacOS or Linux">

在 shell 中执行以下命令以获取计算机的 IP 地址信息。

```
ifconfig
```

</TabItem>
</Tabs>

请记下您的 IP 地址，因为我们稍后将需要使用它。

### 第 11 步：为 XIAO ESP32S3 Sense 上传程序

在项目文件夹 **[XIAOESP32S3-RECORD-UPLOAD](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/main/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino)** 中，我们已经为本节的示例准备好了程序。

<details>

<summary>如果您的 ESP32 版本是 2.0.x，点击此处预览完整程序</summary>

```cpp
#include <I2S.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// 录音程序中使用的变量，为了最佳效果请勿更改
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2
#define RECORD_TIME 10      // 秒，最大值为 240

// 录音缓冲区所需的字节数
uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;

File file;
const char filename[] = "/recording.wav";

bool isWIFIConnected;

void setup() {
  // 在此处放置您的初始化代码，仅运行一次：
  Serial.begin(115200);
  while (!Serial) ;
  
  I2S.setAllPins(-1, 42, 41, -1, -1);
  
  // 传输模式为 PDM_MONO_MODE，这意味着使用脉冲密度调制单声道模式进行传输
  if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
    Serial.println("Failed to initialize I2S!");
    while (1) ;
  }

  if(!SD.begin(D2)){
    Serial.println("Failed to mount SD Card!");
    while (1) ;
  }
  
  xTaskCreate(i2s_adc, "i2s_adc", 1024 * 8, NULL, 1, NULL);
  delay(500);
  xTaskCreate(wifiConnect, "wifi_Connect", 4096, NULL, 0, NULL);
}

void loop() {
  // 在此处放置您的主代码，循环运行：
}

void i2s_adc(void *arg)
{
  uint32_t sample_size = 0;

  // 此变量将用于指向实际的录音缓冲区
  uint8_t *rec_buffer = NULL;
  Serial.printf("Ready to start recording ...\n");

  File file = SD.open(filename, FILE_WRITE);

  // 将头信息写入 WAV 文件
  uint8_t wav_header[WAV_HEADER_SIZE];

  // 将 WAV 文件头信息写入 wav_header 数组
  generate_wav_header(wav_header, record_size, SAMPLE_RATE);

  // 调用 file.write() 函数将 wav_header 数组中的数据写入新创建的 WAV 文件
  file.write(wav_header, WAV_HEADER_SIZE);

  // 此代码使用 ESP32 的 PSRAM（外部缓存内存）动态分配一段内存来存储录音数据。
  rec_buffer = (uint8_t *)ps_malloc(record_size);
  if (rec_buffer == NULL) {
    Serial.printf("malloc failed!\n");
    while(1) ;
  }
  Serial.printf("Buffer: %d bytes\n", ESP.getPsramSize() - ESP.getFreePsram());

  // 开始录音
  // I2S 端口号（此处为 I2S_NUM_0），
  // 指向要写入数据的缓冲区的指针（即 rec_buffer），
  // 要读取的数据大小（即 record_size），
  // 指向实际读取数据大小的变量的指针（即 &sample_size），
  // 以及读取数据的最大等待时间（此处为 portMAX_DELAY，表示无限等待时间）。
  esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
  if (sample_size == 0) {
    Serial.printf("Record Failed!\n");
  } else {
    Serial.printf("Record %d bytes\n", sample_size);
  }

  // 增加音量
  for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
    (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
  }

  // 将数据写入 WAV 文件
  Serial.printf("Writing to the file ...\n");
  if (file.write(rec_buffer, record_size) != record_size)
    Serial.printf("Write file Failed!\n");

  free(rec_buffer);
  rec_buffer = NULL;
  file.close();
  Serial.printf("The recording is over.\n");
    
  listDir(SD, "/", 0);

  if(isWIFIConnected){
    uploadFile();
  }
  
  vTaskDelete(NULL);
}


void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // 参考此处：http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // Format
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (16 for PCM)
    0x01, 0x00, // AudioFormat (1 for PCM)
    0x01, 0x00, // NumChannels (1 channel)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate
    0x02, 0x00, // BlockAlign
    0x10, 0x00, // BitsPerSample (16 bits)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}


void listDir(fs::FS &fs, const char * dirname, uint8_t levels){
    Serial.printf("Listing directory: %s\n", dirname);

    File root = fs.open(dirname);
    if(!root){
        Serial.println("Failed to open directory");
        return;
    }
    if(!root.isDirectory()){
        Serial.println("Not a directory");
        return;
    }

    File file = root.openNextFile();
    while(file){
        if(file.isDirectory()){
            Serial.print("  DIR : ");
            Serial.println(file.name());
            if(levels){
                listDir(fs, file.path(), levels -1);
            }
        } else {
            Serial.print("  FILE: ");
            Serial.print(file.name());
            Serial.print("  SIZE: ");
            Serial.println(file.size());
        }
        file = root.openNextFile();
    }
}

void wifiConnect(void *pvParameters){
  isWIFIConnected = false;
  char* ssid = "wifi-ssid";
  char* password = "wifi-password";
  Serial.print("Try to connect to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    vTaskDelay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fi Connected!");
  isWIFIConnected = true;
  while(true){
    vTaskDelay(1000);
  }
}

void uploadFile(){
  file = SD.open(filename, FILE_READ);
  if(!file){
    Serial.println("FILE IS NOT AVAILABLE!");
    return;
  }

  Serial.println("===> Upload FILE to Node.js Server");

  HTTPClient client;
  client.begin("http://192.168.1.208:8888/uploadAudio");
  client.addHeader("Content-Type", "audio/wav");
  int httpResponseCode = client.sendRequest("POST", &file, file.size());
  Serial.print("httpResponseCode : ");
  Serial.println(httpResponseCode);

  if(httpResponseCode == 200){
    String response = client.getString();
    Serial.println("==================== Transcription ====================");
    Serial.println(response);
    Serial.println("====================      End      ====================");
  }else{
    Serial.println("Error");
  }
  file.close();
  client.end();
}
```

</details>

<details>

<summary>如果您的 ESP32 版本是 3.0.x，请点击这里查看完整程序</summary>

```cpp
#include <ESP_I2S.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// 录音程序中使用的变量，为了最佳效果，请勿更改
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2
#define RECORD_TIME 10      // 秒，最大值为 240

// 定义 I2S
I2SClass I2S;

// 录音缓冲区所需的字节数
uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;

File file;
const char filename[] = "/recording.wav";

bool isWIFIConnected;

void setup() {
  // 在此处放置您的初始化代码，仅运行一次：
  Serial.begin(115200);
  while (!Serial) ;
  
  // 设置 42 号 PDM 时钟引脚和 41 号 PDM 数据引脚
  I2S.setPinsPdmRx(42, 41);

  // 传输模式为 PDM_MONO_MODE，表示使用 PDM（脉冲密度调制）单声道模式进行传输
  if (!I2S.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
    Serial.println("I2S 初始化失败！");
    while (1) ;
  }

  if(!SD.begin(D2)){
    Serial.println("SD 卡挂载失败！");
    while (1) ;
  }
  
  xTaskCreate(i2s_adc, "i2s_adc", 1024 * 8, NULL, 1, NULL);
  delay(500);
  xTaskCreate(wifiConnect, "wifi_Connect", 4096, NULL, 0, NULL);
}

void loop() {
  // 在此处放置您的主代码，重复运行：
}

void i2s_adc(void *arg)
{
  uint32_t sample_size = 0;

  // 此变量将用于指向实际的录音缓冲区
  uint8_t *rec_buffer = NULL;
  Serial.printf("准备开始录音...\n");

  File file = SD.open(filename, FILE_WRITE);

  // 将头信息写入 WAV 文件
  uint8_t wav_header[WAV_HEADER_SIZE];

  // 将 WAV 文件头信息写入 wav_header 数组
  generate_wav_header(wav_header, record_size, SAMPLE_RATE);

  // 调用 file.write() 函数将 wav_header 数组中的数据写入新创建的 WAV 文件
  file.write(wav_header, WAV_HEADER_SIZE);

  // 此代码使用 ESP32 的 PSRAM（外部缓存内存）动态分配一部分内存来存储录音数据。
  rec_buffer = (uint8_t *)ps_malloc(record_size);
  if (rec_buffer == NULL) {
    Serial.printf("内存分配失败！\n");
    while(1) ;
  }
  Serial.printf("缓冲区：%d 字节\n", ESP.getPsramSize() - ESP.getFreePsram());

  // 开始录音
  // 参数包括：I2S 端口号（此处为 I2S_NUM_0），
  // 指向要写入数据的缓冲区的指针（即 rec_buffer），
  // 要读取的数据大小（即 record_size），
  // 指向实际读取数据大小的变量的指针（即 &sample_size），
  // 以及读取数据的最大等待时间（此处为 portMAX_DELAY，表示无限等待时间）。
  esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
  if (sample_size == 0) {
    Serial.printf("录音失败！\n");
  } else {
    Serial.printf("录音 %d 字节\n", sample_size);
  }

  // 增加音量
  for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
    (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
  }

  // 将数据写入 WAV 文件
  Serial.printf("正在写入文件...\n");
  if (file.write(rec_buffer, record_size) != record_size)
    Serial.printf("写入文件失败！\n");

  free(rec_buffer);
  rec_buffer = NULL;
  file.close();
  Serial.printf("录音结束。\n");
    
  listDir(SD, "/", 0);

  if(isWIFIConnected){
    uploadFile();
  }
  
  vTaskDelete(NULL);
}


void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // 参考：http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // Format
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (16 for PCM)
    0x01, 0x00, // AudioFormat (1 for PCM)
    0x01, 0x00, // NumChannels (1 channel)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate
    0x02, 0x00, // BlockAlign
    0x10, 0x00, // BitsPerSample (16 bits)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}


void listDir(fs::FS &fs, const char * dirname, uint8_t levels){
    Serial.printf("列出目录：%s\n", dirname);

    File root = fs.open(dirname);
    if(!root){
        Serial.println("打开目录失败");
        return;
    }
    if(!root.isDirectory()){
        Serial.println("不是目录");
        return;
    }

    File file = root.openNextFile();
    while(file){
        if(file.isDirectory()){
            Serial.print("  目录 : ");
            Serial.println(file.name());
            if(levels){
                listDir(fs, file.path(), levels -1);
            }
        } else {
            Serial.print("  文件: ");
            Serial.print(file.name());
            Serial.print("  大小: ");
            Serial.println(file.size());
        }
        file = root.openNextFile();
    }
}

void wifiConnect(void *pvParameters){
  isWIFIConnected = false;
  char* ssid = "wifi-ssid";
  char* password = "wifi-password";
  Serial.print("尝试连接到 ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    vTaskDelay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fi 已连接！");
  isWIFIConnected = true;
  while(true){
    vTaskDelay(1000);
  }
}

void uploadFile(){
  file = SD.open(filename, FILE_READ);
  if(!file){
    Serial.println("文件不可用！");
    return;
  }

  Serial.println("===> 上传文件到 Node.js 服务器");

  HTTPClient client;
  client.begin("http://192.168.1.208:8888/uploadAudio");
  client.addHeader("Content-Type", "audio/wav");
  int httpResponseCode = client.sendRequest("POST", &file, file.size());
  Serial.print("HTTP 响应代码 : ");
  Serial.println(httpResponseCode);

  if(httpResponseCode == 200){
    String response = client.getString();
    Serial.println("==================== 转录结果 ====================");
    Serial.println(response);
    Serial.println("====================      结束      ====================");
  }else{
    Serial.println("错误");
  }
  file.close();
  client.end();
}
```

</details>

在编译和上传示例程序之前，有一些设置需要根据您的实际情况进行修改。

1. **录音时间** - 在代码的 [第13行](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino#LL13C2-L13C2)，默认录音时间设置为10秒，您可以根据需要调整录音时间，最大值为240秒。
2. **保存录音文件的名称** - 在代码的 [第19行](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino#L19)，您可以更改录音文件的名称。
3. **WiFi网络名称** - 修改代码 [第172行](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino#L172) 中的网络名称为与部署 Google Cloud Services 的主机处于同一局域网的网络名称。
4. **WiFi网络密码** - 在代码的 [第173行](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino#LL173C5-L173C5)，修改对应网络的密码。
5. **主机IP地址** - 在代码的 [第198行](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino#LL198C7-L198C7)，您需要将此处的IP地址更改为您的主机IP地址，并保持端口号为8888。

完成上述修改并上传程序后，您可以打开串口监视器并开始准备录制您想要说的话。录音结束后，Google Cloud 将分析您的录音文件并将识别结果返回给您。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/15.png" style={{width:1000, height:'auto'}}/></div>

## 在 XIAO ESP32S3 Sense 上部署 ChatGPT

接下来我们将增加难度，继续在代码中添加 ChatGPT 的调用。

### 第12步：使用识别出的文本作为问题向 ChatGPT 提问

在项目文件夹 **[XIAOESP32S3-SPEECH-TO-CHATGPT](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/main/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino)** 中，我们已经为本节的示例准备了程序。

<details>

<summary>如果您的 ESP32 版本是 2.0.x，请点击此处预览完整程序</summary>

```cpp
#include <I2S.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h>
#include <ArduinoJson.h>
#include <ChatGPT.hpp>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// 用于录音程序的变量，不要更改，以获得最佳效果
#define SAMPLE_RATE 16000U  // 采样率
#define SAMPLE_BITS 16      // 采样位数
#define WAV_HEADER_SIZE 44  // WAV文件头的大小
#define VOLUME_GAIN 2       // 音量增益
#define RECORD_TIME 5       // 录音时间（秒），最大值为240

const char* ssid = "wifi-ssid";    // Wi-Fi的SSID
const char* password = "wifi-password";  // Wi-Fi密码


// 录音缓冲区所需的字节数
uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;

File file;  // 文件对象，用于保存录音文件
const char filename[] = "/recording.wav";  // 录音文件名
bool isWIFIConnected;  // Wi-Fi连接状态

String chatgpt_Q;  // ChatGPT问题

TaskHandle_t chatgpt_handle;  // 用于管理ChatGPT任务的句柄
WiFiClientSecure client;  // 安全的Wi-Fi客户端
ChatGPT<WiFiClientSecure> chat_gpt(&client, "v1", "OpenAI-TOKEN");  // 创建ChatGPT对象，传入API密钥


//*****************************************Arduino 基础设置******************************************//

void setup() {
  // 在此设置代码，只执行一次：
  Serial.begin(115200);  // 初始化串口通信
  while (!Serial) ;  // 等待串口连接（仅在某些平台上需要）

  I2S.setAllPins(-1, 42, 41, -1, -1);  // 设置I2S的引脚，具体视硬件而定
  
  // 设置传输模式为PDM_MONO_MODE，即使用脉冲密度调制的单声道模式
  if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
    Serial.println("I2S初始化失败！");
    while (1) ;  // 初始化失败则进入死循环
  }

  if(!SD.begin(D2)){
    Serial.println("SD卡挂载失败！");
    while (1) ;  // 如果SD卡初始化失败，则进入死循环
  }

  // 创建任务：Wi-Fi连接任务
  xTaskCreate(wifiConnect, "wifi_Connect", 4096, NULL, 0, NULL);
  delay(500);  // 等待一段时间

  // 创建任务：I2S录音任务
  xTaskCreate(i2s_adc, "i2s_adc", 1024 * 8, NULL, 1, NULL);

  // 创建任务：ChatGPT处理任务
  xTaskCreate(chatgpt, "chatgpt", 1024 * 8, NULL, 2, &chatgpt_handle);
}

void loop() {
  // 主程序，重复执行：
}

//*****************************************RTOS任务******************************************//

void i2s_adc(void *arg)
{
  while(1){
    uint32_t sample_size = 0;
  
    // 这个变量将用于指向实际的录音缓冲区
    uint8_t *rec_buffer = NULL;
    Serial.printf("准备开始录音 ...\n");
  
    File file = SD.open(filename, FILE_WRITE);
  
    // 写入WAV文件的头部
    uint8_t wav_header[WAV_HEADER_SIZE];
  
    // 将WAV文件头信息写入wav_header数组
    generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  
    // 调用file.write()函数将wav_header数组中的数据写入新创建的WAV文件
    file.write(wav_header, WAV_HEADER_SIZE);
  
    // 这段代码使用ESP32的PSRAM（外部缓存内存）动态分配一块内存来存储录音数据
    rec_buffer = (uint8_t *)ps_malloc(record_size);
    if (rec_buffer == NULL) {
      Serial.printf("malloc失败！\n");
      while(1) ;
    }
    Serial.printf("缓冲区: %d 字节\n", ESP.getPsramSize() - ESP.getFreePsram());
  
    // 开始录音
    // I2S端口号（在此为I2S_NUM_0），
    // 数据将写入的缓冲区指针（即rec_buffer），
    // 要读取的数据大小（即record_size），
    // 指向实际读取数据大小的变量指针（即&sample_size），
    // 以及最大等待时间（在此为portMAX_DELAY，表示无限等待）。
    esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
    if (sample_size == 0) {
      Serial.printf("录音失败！\n");
    } else {
      Serial.printf("录音 %d 字节\n", sample_size);
    }
  
    // 增加音量
    for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
      (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
    }
  
    // 写入数据到WAV文件
    Serial.printf("写入文件 ...\n");
    if (file.write(rec_buffer, record_size) != record_size)
      Serial.printf("写入文件失败！\n");
  
    free(rec_buffer);
    rec_buffer = NULL;
    file.close();
    Serial.printf("录音结束。\n");
      
    listDir(SD, "/", 0);

    bool uploadStatus = false;
  
    if(isWIFIConnected){
      uploadStatus = uploadFile();
    }
    
    if(uploadStatus)
      xTaskNotifyGive(chatgpt_handle);
    vTaskDelay(10000);       // 每次录音间隔10秒
  }
//  vTaskDelete(NULL);
}

void wifiConnect(void *pvParameters){
  isWIFIConnected = false;
  Serial.print("尝试连接到 ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    vTaskDelay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fi 已连接！");
  isWIFIConnected = true;
  // 忽略SSL证书验证
  client.setInsecure();
  while(true){
    vTaskDelay(1000);
  }
}

void chatgpt(void *pvParameters){
  while(1){
    // 等待来自任务1的通知信号
    ulTaskNotifyTake(pdTRUE, portMAX_DELAY);

    String result;
    if (chat_gpt.simple_message("gpt-3.5-turbo-0301", "user", chatgpt_Q, result)) {
      Serial.println("===成功===");
      Serial.println(result);
    } else {
      Serial.println("===错误===");
      Serial.println(result);
    }

  }
}

//*****************************************音频处理******************************************//

void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // 参考此链接： http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // 格式
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (PCM的大小为16)
    0x01, 0x00, // 音频格式 (PCM为1)
    0x01, 0x00, // 通道数 (1个通道)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // 采样率
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // 字节率
    0x02, 0x00, // 块对齐
    0x10, 0x00, // 每个采样的位数 (16位)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}

//*****************************************文件处理******************************************//

void listDir(fs::FS &fs, const char * dirname, uint8_t levels){
    Serial.printf("列出目录：%s\n", dirname);

    File root = fs.open(dirname);
    if(!root){
        Serial.println("打开目录失败");
        return;
    }
    if(!root.isDirectory()){
        Serial.println("不是目录");
        return;
    }

    File file = root.openNextFile();
    while(file){
        if(file.isDirectory()){
            Serial.print("  目录 : ");
            Serial.println(file.name());
            if(levels){
                listDir(fs, file.path(), levels -1);
            }
        } else {
            Serial.print("  文件: ");
            Serial.print(file.name());
            Serial.print("  大小: ");
            Serial.println(file.size());
        }
        file = root.openNextFile();
    }
}

bool uploadFile(){
  file = SD.open(filename, FILE_READ);
  if(!file){
    Serial.println("文件不可用！");
    return false;
  }

  Serial.println("===> 上传文件到Node.js服务器");

  HTTPClient client;
  client.begin("http://192.168.1.208:8888/uploadAudio");
  client.addHeader("Content-Type", "audio/wav");
  int httpResponseCode = client.sendRequest("POST", &file, file.size());
  Serial.print("httpResponseCode : ");
  Serial.println(httpResponseCode);

  if(httpResponseCode == 200){
    String response = client.getString();
    Serial.println("==================== 转录结果 ====================");
    Serial.println(response);
    chatgpt_Q = response;
    Serial.println("====================      结束      ====================");
    file.close();
    client.end();
    return true;
  }else{
    Serial.println("错误");
    return false;
  }
}
```

</details>

<details>

<summary>如果您的 ESP32 版本是 3.0.x，请点击此处查看完整程序</summary>

```cpp
#include <ESP_I2S.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h>
#include <ArduinoJson.h>
#include <ChatGPT.hpp>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// 录音程序中使用的变量，为了获得最佳效果，请勿更改
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2
#define RECORD_TIME 5  // 秒，最大值为 240

const char* ssid = "wifi-ssid";
const char* password = "wifi-password";

// 定义 I2S
I2SClass I2S;

// 录音缓冲区所需的字节数
uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;

File file;
const char filename[] = "/recording.wav";
bool isWIFIConnected;

String chatgpt_Q;

TaskHandle_t chatgpt_handle;
WiFiClientSecure client;
ChatGPT<WiFiClientSecure> chat_gpt(&client, "v1", "OpenAI-TOKEN");

//*****************************************Arduino 基础设置******************************************//

void setup() {
  // 初始化设置
  Serial.begin(115200);
  while (!Serial) ;
  
  // 设置 42 号 PDM 时钟和 41 号 PDM 数据引脚
  I2S.setPinsPdmRx(42, 41);

  // 传输模式为 PDM_MONO_MODE，表示使用 PDM（脉冲密度调制）单声道模式进行传输
  if (!I2S.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
    Serial.println("I2S 初始化失败！");
    while (1) ;
  }

  if(!SD.begin(D2)){
    Serial.println("SD 卡挂载失败！");
    while (1) ;
  }

  xTaskCreate(wifiConnect, "wifi_Connect", 4096, NULL, 0, NULL);
  delay(500);
  xTaskCreate(i2s_adc, "i2s_adc", 1024 * 8, NULL, 1, NULL);
  xTaskCreate(chatgpt, "chatgpt", 1024 * 8, NULL, 2, &chatgpt_handle);
}

void loop() {
  // 主循环代码
}

//*****************************************RTOS 任务******************************************//

void i2s_adc(void *arg)
{
  while(1){
    uint32_t sample_size = 0;
  
    // 用于指向实际录音缓冲区的变量
    uint8_t *rec_buffer = NULL;
    Serial.printf("准备开始录音...\n");
  
    File file = SD.open(filename, FILE_WRITE);
  
    // 写入 WAV 文件头
    uint8_t wav_header[WAV_HEADER_SIZE];
  
    // 将 WAV 文件头信息写入 wav_header 数组
    generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  
    // 调用 file.write() 函数将 wav_header 数组中的数据写入新创建的 WAV 文件
    file.write(wav_header, WAV_HEADER_SIZE);
  
    // 使用 ESP32 的 PSRAM（外部缓存内存）动态分配一部分内存来存储录音数据
    rec_buffer = (uint8_t *)ps_malloc(record_size);
    if (rec_buffer == NULL) {
      Serial.printf("内存分配失败！\n");
      while(1) ;
    }
    Serial.printf("缓冲区：%d 字节\n", ESP.getPsramSize() - ESP.getFreePsram());
  
    // 开始录音
    // 参数包括 I2S 端口号（此处为 I2S_NUM_0）、指向缓冲区的指针（即 rec_buffer）、要读取的数据大小（即 record_size）、指向实际读取数据大小的变量（即 &sample_size）以及最大等待时间（此处为 portMAX_DELAY，表示无限等待时间）。
    esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
    if (sample_size == 0) {
      Serial.printf("录音失败！\n");
    } else {
      Serial.printf("录制了 %d 字节\n", sample_size);
    }
  
    // 增加音量
    for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
      (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
    }
  
    // 将数据写入 WAV 文件
    Serial.printf("写入文件...\n");
    if (file.write(rec_buffer, record_size) != record_size)
      Serial.printf("文件写入失败！\n");
  
    free(rec_buffer);
    rec_buffer = NULL;
    file.close();
    Serial.printf("录音结束。\n");
      
    listDir(SD, "/", 0);

    bool uploadStatus = false;
  
    if(isWIFIConnected){
      uploadStatus = uploadFile();
    }
    
    if(uploadStatus)
      xTaskNotifyGive(chatgpt_handle);
    vTaskDelay(10000);       // 每次录音间隔 10 秒
  }
//  vTaskDelete(NULL);
}

void wifiConnect(void *pvParameters){
  isWIFIConnected = false;
  Serial.print("尝试连接到 ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    vTaskDelay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fi 已连接！");
  isWIFIConnected = true;
  // 忽略 SSL 证书验证
  client.setInsecure();
  while(true){
    vTaskDelay(1000);
  }
}

void chatgpt(void *pvParameters){
  while(1){
    // 等待来自任务 1 的通知信号
    ulTaskNotifyTake(pdTRUE, portMAX_DELAY);

    String result;
    if (chat_gpt.simple_message("gpt-3.5-turbo-0301", "user", chatgpt_Q, result)) {
      Serial.println("===成功===");
      Serial.println(result);
    } else {
      Serial.println("===错误===");
      Serial.println(result);
    }

  }
}

//*****************************************音频处理******************************************//

void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // 参考：http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // Format
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (16 for PCM)
    0x01, 0x00, // AudioFormat (1 for PCM)
    0x01, 0x00, // NumChannels (1 channel)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate
    0x02, 0x00, // BlockAlign
    0x10, 0x00, // BitsPerSample (16 bits)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}

//*****************************************文件处理******************************************//

void listDir(fs::FS &fs, const char * dirname, uint8_t levels){
    Serial.printf("列出目录: %s\n", dirname);

    File root = fs.open(dirname);
    if(!root){
        Serial.println("无法打开目录");
        return;
    }
    if(!root.isDirectory()){
        Serial.println("不是目录");
        return;
    }

    File file = root.openNextFile();
    while(file){
        if(file.isDirectory()){
            Serial.print("  目录 : ");
            Serial.println(file.name());
            if(levels){
                listDir(fs, file.path(), levels -1);
            }
        } else {
            Serial.print("  文件: ");
            Serial.print(file.name());
            Serial.print("  大小: ");
            Serial.println(file.size());
        }
        file = root.openNextFile();
    }
}

bool uploadFile(){
  file = SD.open(filename, FILE_READ);
  if(!file){
    Serial.println("文件不可用！");
    return false;
  }

  Serial.println("===> 上传文件到 Node.js 服务器");

  HTTPClient client;
  client.begin("http://192.168.1.208:8888/uploadAudio");
  client.addHeader("Content-Type", "audio/wav");
  int httpResponseCode = client.sendRequest("POST", &file, file.size());
  Serial.print("HTTP 响应代码 : ");
  Serial.println(httpResponseCode);

  if(httpResponseCode == 200){
    String response = client.getString();
    Serial.println("==================== 转录结果 ====================");
    Serial.println(response);
    chatgpt_Q = response;
    Serial.println("====================      结束      ====================");
    file.close();
    client.end();
    return true;
  }else{
    Serial.println("错误");
    return false;
  }
  
}
```

</details>

在使用此程序之前，您需要根据需要对代码进行以下更改：

1. **网络的 WiFi 名称** - 将代码中的网络名称 [第18行](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#L18) 更改为与部署 Google Cloud Services 的主机在同一局域网下的网络名称。
2. **网络的 WiFi 密码** - 在代码的 [第19行](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#LL19C40-L19C40) 更改为对应网络的密码。
3. **主机 IP 地址** - 在代码的 [第241行](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#LL241C7-L241C7)，需要将此处的 IP 地址更改为您的主机 IP 地址，并保持端口号为 8888。
4. **OpenAI API Token** - 由于需要调用 ChatGPT 接口，您需要准备 OpenAI Token 并将其填写到代码的 [第33行](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#L33)。如果您是第一次使用 Token，可以阅读 [此 Wiki 内容](https://wiki.seeedstudio.com/xiaoesp32c3-chatgpt/#submit-questions-via-the-built-in-web-page) 了解如何获取。

修改完成后，上传程序并打开串口监视器。录音后，您将看到 ChatGPT 返回的答案。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/16.png" style={{width:1000, height:'auto'}}/></div>

## 屏幕显示内容设计及程序集成

最后，我们添加了一些额外的功能。我们没有使用串口监视器这种不太适合显示效果的界面，而是使用了触摸屏进行触摸和点击功能。

### 第13步：使用 SquareLine Studio 绘制显示屏界面

SquareLine Studio 是由 LVGL 开发的一款 GUI 设计工具，LVGL 是一个嵌入式系统的图形库。SquareLine Studio 旨在帮助开发者快速高效地创建和设计嵌入式系统的用户界面。它提供了拖放式的界面设计，并支持各种小部件和主题。

因此，我们推荐您使用此工具设计这样的简单界面。如果您想了解更多关于在 SquareLine Studio 中使用圆形显示屏的内容，可以访问我们的使用 [Wiki](https://wiki.seeedstudio.com/using_lvgl_and_tft_on_round_display/#drawing-complex-ui-interfaces-with-squareline-studio)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/21.png" style={{width:1000, height:'auto'}}/></div>

由于篇幅原因，本文不会详细介绍如何设计显示页面，但我们会提供导出的程序代码供您使用。目前它位于该 [项目文件夹](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/tree/main/ui) 下的 **ui** 文件夹中。

:::caution
我们建议您使用 SquareLine Studio 的 **v1.2.3** 版本。经过测试，v1.3.0 版本可能与 tft_eSPI 库存在兼容性问题。
:::

### 第14步：集成程序

最终完整的项目代码位于 **[XIAOESP32S3-SPEECH-CHATGPT-COMPLETE](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/main/XIAOESP32S3-SPEECH-CHATGPT-COMPLETE/XIAOESP32S3-SPEECH-CHATGPT-COMPLETE.ino)** 文件夹中。

<details>

<summary>如果您的 ESP32 版本是 2.0.x，请点击此处预览完整程序</summary>

```cpp
#include <lvgl.h>
#include <TFT_eSPI.h>
#include "ui.h"
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <ArduinoJson.h>
#include <ChatGPT.hpp>
#include <I2S.h>
#include <HTTPClient.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"


// 导入圆形显示器库并定义用于TFT显示的框架
#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"


/* 更改为你的屏幕分辨率 */
static const uint16_t screenWidth  = 240;
static const uint16_t screenHeight = 240;


// 录音程序中使用的变量，请勿更改以确保最佳效果
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2
#define RECORD_TIME 5  // 秒，最大值为240


// 录音缓冲区所需的字节数
uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;


// 录音保存的文件名
File file;
const char filename[] = "/recording.wav";


// 网络连接状态标志
bool isWIFIConnected;


// ChatGPT回答问题的内容
String response;


// 不同任务启动的标志
bool recordTask = false;
bool chatgptTask = false;

WiFiClientSecure client;
ChatGPT<WiFiClientSecure> chat_gpt(&client, "v1", "OpenAI-TOKEN");   // 请填写你的OpenAI密钥


// 请更改为你的网络信息
const char* ssid = "wifi-ssid";
const char* password = "wifi-password";

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[ screenWidth * screenHeight / 10 ];


//****************************************LVGL****************************************************//

#if LV_USE_LOG != 0
/* 串口调试 */
void my_print(const char * buf)
{
    Serial.printf(buf);
    Serial.flush();
}
#endif

/* 显示刷新 */
void my_disp_flush( lv_disp_drv_t *disp, const lv_area_t *area, lv_color_t *color_p )
{
    uint32_t w = ( area->x2 - area->x1 + 1 );
    uint32_t h = ( area->y2 - area->y1 + 1 );

    tft.startWrite();
    tft.setAddrWindow( area->x1, area->y1, w, h );
    tft.pushColors( ( uint16_t * )&color_p->full, w * h, true );
    tft.endWrite();

    lv_disp_flush_ready( disp );
}

/* 读取触摸屏 */
void my_touchpad_read( lv_indev_drv_t * indev_driver, lv_indev_data_t * data )
{
    // uint16_t touchX = 0, touchY = 0;
    // bool touched = false; // tft.getTouch( &touchX, &touchY, 600 );

    lv_coord_t touchX, touchY;
    chsc6x_get_xy(&touchX, &touchY);

    // if( !touched )
    if(!chsc6x_is_pressed())
    {
        data->state = LV_INDEV_STATE_REL;
    }
    else
    {
        data->state = LV_INDEV_STATE_PR;

        /* 设置坐标 */
        data->point.x = touchX;
        data->point.y = touchY;

        // Serial.print( "Data x " );
        // Serial.println( touchX );
        // Serial.print( "Data y " );
        // Serial.println( touchY );

        // 你也可以通过点击徽标来启动录音，取消注释并进行配置
//        if((touchX < 240 && touchX > 230) && (touchY < 120 && touchY > 100)){
          recordTask = true;
//        }
    }
}

//****************************************Arduino基础****************************************************//

void setup()
{
    Serial.begin( 115200 ); /* 准备可能的串口调试 */
    //    while(!Serial);

    pinMode(TOUCH_INT, INPUT_PULLUP);
    Wire.begin();

    String LVGL_Arduino = "Hello Arduino! ";
    LVGL_Arduino += String('V') + lv_version_major() + "." + lv_version_minor() + "." + lv_version_patch();

    Serial.println( LVGL_Arduino );
    Serial.println( "I am LVGL_Arduino" );

    lv_init();

#if LV_USE_LOG != 0
    lv_log_register_print_cb( my_print ); /* 注册打印函数用于调试 */
#endif

    tft.begin();          /* TFT初始化 */
    tft.setRotation( 0 ); /* 横屏显示，翻转 */

    lv_disp_draw_buf_init( &draw_buf, buf, NULL, screenWidth * screenHeight / 10 );

    /* 初始化显示器 */
    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init( &disp_drv );
    /* 修改以下行以匹配你的显示分辨率 */
    disp_drv.hor_res = screenWidth;
    disp_drv.ver_res = screenHeight;
    disp_drv.flush_cb = my_disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register( &disp_drv );

    /* 初始化（虚拟）输入设备驱动 */
    static lv_indev_drv_t indev_drv;
    lv_indev_drv_init( &indev_drv );
    indev_drv.type = LV_INDEV_TYPE_POINTER;
    indev_drv.read_cb = my_touchpad_read;
    lv_indev_drv_register( &indev_drv );

    ui_init();

    I2S.setAllPins(-1, 42, 41, -1, -1);
  
    // 传输模式为PDM_MONO_MODE，表示使用单声道PDM（脉冲密度调制）模式进行传输
    if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
        Serial.println("Failed to initialize I2S!");
        while (1) ;
    }

    if(!SD.begin(D2)){
        Serial.println("Failed to mount SD Card!");
        while (1) ;
    }

    Serial.println( "Setup done" );

    // 创建一个FreeRTOS任务，定期检查网络连接状态。
    xTaskCreate(wifiConnect, "wifi_Connect", 4096, NULL, 0, NULL);
}

void loop()
{
    lv_timer_handler(); /* 让GUI执行工作 */
    record();
    chatgpt();
    delay(5);
}

//*****************************************音频处理******************************************//

void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // 参考资料：http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // Format
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (16 for PCM)
    0x01, 0x00, // AudioFormat (1 for PCM)
    0x01, 0x00, // NumChannels (1 channel)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate
    0x02, 0x00, // BlockAlign
    0x10, 0x00, // BitsPerSample (16 bits)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}

//*****************************************文件处理******************************************//

void listDir(fs::FS &fs, const char * dirname, uint8_t levels){
    Serial.printf("Listing directory: %s\n", dirname);

    File root = fs.open(dirname);
    if(!root){
        Serial.println("Failed to open directory");
        return;
    }
    if(!root.isDirectory()){
        Serial.println("Not a directory");
        return;
    }

    File file = root.openNextFile();
    while(file){
        if(file.isDirectory()){
            Serial.print("  DIR : ");
            Serial.println(file.name());
            if(levels){
                listDir(fs, file.path(), levels -1);
            }
        } else {
            Serial.print("  FILE: ");
            Serial.print(file.name());
            Serial.print("  SIZE: ");
            Serial.println(file.size());
        }
        file = root.openNextFile();
    }
}

bool uploadFile(){
  file = SD.open(filename, FILE_READ);
  if(!file){
    Serial.println("FILE IS NOT AVAILABLE!");
    return false;
  }

  Serial.println("===> Upload FILE to Node.js Server");

  HTTPClient client;
  client.begin("http://192.168.1.208:8888/uploadAudio");
  client.addHeader("Content-Type", "audio/wav");
  int httpResponseCode = client.sendRequest("POST", &file, file.size());
  Serial.print("httpResponseCode : ");
  Serial.println(httpResponseCode);

  if(httpResponseCode == 200){
    response = client.getString();
    Serial.println("==================== Transcription ====================");
    Serial.println(response);
    const char* chatgpt_Q = response.c_str();
    lv_label_set_text(ui_question, chatgpt_Q);
    Serial.println("====================      End      ====================");
    file.close();
    client.end();
    recordTask = false;
    chatgptTask = true;
    return true;
  }else{
    Serial.println("Error");
    lv_label_set_text(ui_question, "Error");
    recordTask = false;
    chatgptTask = false;
    return false;
  }
}


//*****************************************主函数******************************************//

void record(){
  if(recordTask){
    Serial.println("Record Task Begin!!!");
    lv_label_set_text(ui_question, "Recording ...");
    lv_timer_handler();
    uint32_t sample_size = 0;
    
    // 这个变量将用于指向实际的录音缓冲区
    uint8_t *rec_buffer = NULL;
    Serial.printf("Ready to start recording ...\n");
  
    File file = SD.open(filename, FILE_WRITE);
  
    // 写入WAV文件的头信息
    uint8_t wav_header[WAV_HEADER_SIZE];
  
    // 将WAV文件头信息写入wav_header数组
    generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  
    // 调用file.write()函数将wav_header数组中的数据写入新创建的WAV文件
    file.write(wav_header, WAV_HEADER_SIZE);
  
    // 此段代码使用ESP32的PSRAM（外部缓存内存）动态分配内存来存储录音数据
    rec_buffer = (uint8_t *)ps_malloc(record_size);
    if (rec_buffer == NULL) {
      Serial.printf("malloc failed!\n");
      while(1) ;
    }
    Serial.printf("Buffer: %d bytes\n", ESP.getPsramSize() - ESP.getFreePsram());
  
    // 开始录音
    // I2S端口号（此处为I2S_NUM_0），
    // 指向数据写入缓冲区的指针（即rec_buffer），
    // 读取的数据大小（即record_size），
    // 指向实际读取数据大小的变量的指针（即&sample_size），
    // 读取数据的最大等待时间（此处为portMAX_DELAY，表示无限等待）
    esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
    if (sample_size == 0) {
      Serial.printf("Record Failed!\n");
    } else {
      Serial.printf("Record %d bytes\n", sample_size);
    }
  
    // 提高音量
    for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
      (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
    }
  
    // 写入数据到WAV文件
    Serial.printf("Writing to the file ...\n");
    if (file.write(rec_buffer, record_size) != record_size)
      Serial.printf("Write file Failed!\n");
  
    free(rec_buffer);
    rec_buffer = NULL;
    file.close();
    Serial.printf("The recording is over.\n");
    lv_label_set_text(ui_question, "Identifying ...");
    lv_timer_handler();
    listDir(SD, "/", 0);
  
    bool uploadStatus = false;
  
    if(isWIFIConnected){
      uploadStatus = uploadFile();
    }
  }
}

void chatgpt(){
  if(chatgptTask){
    Serial.println("ChatGPT Task Begin!!!");
    lv_label_set_text(ui_answer,"Answering ...");
    lv_timer_handler();
    String result;
    if (chat_gpt.simple_message("gpt-3.5-turbo-0301", "user", response, result)) {
      Serial.println("===OK===");
      Serial.println(result);
      const char* chatgpt_A = result.c_str();
      lv_label_set_text(ui_answer, chatgpt_A);
    } else {
      Serial.println("===ERROR===");
      Serial.println(result);
      lv_label_set_text(ui_answer, "ERROR");
      lv_timer_handler();
    }
    recordTask = false;
    chatgptTask = false;
  }
}

//*****************************************RTOS******************************************//

void wifiConnect(void *pvParameters){
  isWIFIConnected = false;
  Serial.print("Try to connect to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    vTaskDelay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fi Connected!");
  isWIFIConnected = true;
  // 忽略SSL证书验证
  client.setInsecure();
  while(true){
    vTaskDelay(1000);
  }
}
```

</details>

<details>

<summary>如果您的 ESP32 版本是 3.0.x，请点击此处查看完整程序</summary>

```cpp
#include <lvgl.h>
#include <TFT_eSPI.h>
#include "ui.h"
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <ArduinoJson.h>
#include <ChatGPT.hpp>
#include <ESP_I2S.h>
#include <HTTPClient.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// 导入用于圆形显示屏的库，并定义用作 TFT 显示框架的框架
#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"

/*更改为您的屏幕分辨率*/
static const uint16_t screenWidth  = 240;
static const uint16_t screenHeight = 240;

// 在录音程序中使用的变量，为了最佳效果请勿更改
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2
#define RECORD_TIME 5  // 秒，最大值为 240

// 录音缓冲区所需的字节数
uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;

// 定义 I2S
I2SClass I2S;

// 保存录音的文件名
File file;
const char filename[] = "/recording.wav";

// 网络连接状态标志
bool isWIFIConnected;

// ChatGPT 回复的问题答案
String response;

// 各种任务启动标志
bool recordTask = false;
bool chatgptTask = false;

WiFiClientSecure client;
ChatGPT<WiFiClientSecure> chat_gpt(&client, "v1", "OpenAI-TOKEN");   // 请填写您的 OpenAI 密钥

// 请更改为您的网络
const char* ssid = "wifi-ssid";
const char* password = "wifi-password";

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[ screenWidth * screenHeight / 10 ];

//****************************************LVGL****************************************************//

#if LV_USE_LOG != 0
/* 串口调试 */
void my_print(const char * buf)
{
    Serial.printf(buf);
    Serial.flush();
}
#endif

/* 显示刷新 */
void my_disp_flush( lv_disp_drv_t *disp, const lv_area_t *area, lv_color_t *color_p )
{
    uint32_t w = ( area->x2 - area->x1 + 1 );
    uint32_t h = ( area->y2 - area->y1 + 1 );

    tft.startWrite();
    tft.setAddrWindow( area->x1, area->y1, w, h );
    tft.pushColors( ( uint16_t * )&color_p->full, w * h, true );
    tft.endWrite();

    lv_disp_flush_ready( disp );
}

/* 读取触摸板 */
void my_touchpad_read( lv_indev_drv_t * indev_driver, lv_indev_data_t * data )
{
    lv_coord_t touchX, touchY;
    chsc6x_get_xy(&touchX, &touchY);

    if(!chsc6x_is_pressed())
    {
        data->state = LV_INDEV_STATE_REL;
    }
    else
    {
        data->state = LV_INDEV_STATE_PR;

        /* 设置坐标 */
        data->point.x = touchX;
        data->point.y = touchY;

        // 您还可以通过取消注释并配置点击图标来启动录音
        recordTask = true;
    }
}

//****************************************Arduino 基础****************************************************//

void setup()
{
    Serial.begin( 115200 ); /* 准备可能的串口调试 */
    pinMode(TOUCH_INT, INPUT_PULLUP);
    Wire.begin();

    String LVGL_Arduino = "Hello Arduino! ";
    LVGL_Arduino += String('V') + lv_version_major() + "." + lv_version_minor() + "." + lv_version_patch();

    Serial.println( LVGL_Arduino );
    Serial.println( "I am LVGL_Arduino" );

    lv_init();

#if LV_USE_LOG != 0
    lv_log_register_print_cb( my_print ); /* 注册打印函数用于调试 */
#endif

    tft.begin();          /* 初始化 TFT */
    tft.setRotation( 0 ); /* 横向方向，翻转 */

    lv_disp_draw_buf_init( &draw_buf, buf, NULL, screenWidth * screenHeight / 10 );

    /* 初始化显示 */
    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init( &disp_drv );
    /* 更改以下行以匹配您的显示分辨率 */
    disp_drv.hor_res = screenWidth;
    disp_drv.ver_res = screenHeight;
    disp_drv.flush_cb = my_disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register( &disp_drv );

    /* 初始化（虚拟）输入设备驱动程序 */
    static lv_indev_drv_t indev_drv;
    lv_indev_drv_init( &indev_drv );
    indev_drv.type = LV_INDEV_TYPE_POINTER;
    indev_drv.read_cb = my_touchpad_read;
    lv_indev_drv_register( &indev_drv );

    ui_init();

    // 设置 42 PDM 时钟和 41 PDM 数据引脚
    I2S.setPinsPdmRx(42, 41);  

    // 传输模式为 PDM_MONO_MODE，表示使用 PDM（脉冲密度调制）单声道模式进行传输
    if (!I2S.begin(I2S_MODE_PDM_RX, 16000, I2S_DATA_BIT_WIDTH_16BIT, I2S_SLOT_MODE_MONO)) {
        Serial.println("Failed to initialize I2S!");
        while (1) ;
    }

    if(!SD.begin(D2)){
        Serial.println("Failed to mount SD Card!");
        while (1) ;
    }

    Serial.println( "Setup done" );

    // 创建一个 FreeRTOS 任务以定期检查网络的连接状态
    xTaskCreate(wifiConnect, "wifi_Connect", 4096, NULL, 0, NULL);
}

void loop()
{
    lv_timer_handler(); /* 让 GUI 执行其工作 */
    record();
    chatgpt();
    delay(5);
}

//*****************************************音频处理******************************************//

void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // 参考：http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // Format
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (16 for PCM)
    0x01, 0x00, // AudioFormat (1 for PCM)
    0x01, 0x00, // NumChannels (1 channel)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate
    0x02, 0x00, // BlockAlign
    0x10, 0x00, // BitsPerSample (16 bits)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}

//*****************************************文件处理******************************************//

void listDir(fs::FS &fs, const char * dirname, uint8_t levels){
    Serial.printf("Listing directory: %s\n", dirname);

    File root = fs.open(dirname);
    if(!root){
        Serial.println("Failed to open directory");
        return;
    }
    if(!root.isDirectory()){
        Serial.println("Not a directory");
        return;
    }

    File file = root.openNextFile();
    while(file){
        if(file.isDirectory()){
            Serial.print("  DIR : ");
            Serial.println(file.name());
            if(levels){
                listDir(fs, file.path(), levels -1);
            }
        } else {
            Serial.print("  FILE: ");
            Serial.print(file.name());
            Serial.print("  SIZE: ");
            Serial.println(file.size());
        }
        file = root.openNextFile();
    }
}

bool uploadFile(){
  file = SD.open(filename, FILE_READ);
  if(!file){
    Serial.println("FILE IS NOT AVAILABLE!");
    return false;
  }

  Serial.println("===> Upload FILE to Node.js Server");

  HTTPClient client;
  client.begin("http://192.168.1.208:8888/uploadAudio");
  client.addHeader("Content-Type", "audio/wav");
  int httpResponseCode = client.sendRequest("POST", &file, file.size());
  Serial.print("httpResponseCode : ");
  Serial.println(httpResponseCode);

  if(httpResponseCode == 200){
    response = client.getString();
    Serial.println("==================== Transcription ====================");
    Serial.println(response);
    const char* chatgpt_Q = response.c_str();
    lv_label_set_text(ui_question, chatgpt_Q);
    Serial.println("====================      End      ====================");
    file.close();
    client.end();
    recordTask = false;
    chatgptTask = true;
    return true;
  }else{
    Serial.println("Error");
    lv_label_set_text(ui_question, "Error");
    recordTask = false;
    chatgptTask = false;
    return false;
  }
}

//*****************************************主要功能******************************************//

void record(){
  if(recordTask){
    Serial.println("Record Task Begin!!!");
    lv_label_set_text(ui_question, "Recording ...");
    lv_timer_handler();
    uint32_t sample_size = 0;
    
    // 此变量将用于指向实际的录音缓冲区
    uint8_t *rec_buffer = NULL;
    Serial.printf("Ready to start recording ...\n");
  
    File file = SD.open(filename, FILE_WRITE);
  
    // 将头部写入 WAV 文件
    uint8_t wav_header[WAV_HEADER_SIZE];
  
    // 将 WAV 文件头信息写入 wav_header 数组
    generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  
    // 调用 file.write() 函数将 wav_header 数组中的数据写入新创建的 WAV 文件
    file.write(wav_header, WAV_HEADER_SIZE);
  
    // 此代码使用 ESP32 的 PSRAM（外部缓存内存）动态分配一部分内存以存储录音数据
    rec_buffer = (uint8_t *)ps_malloc(record_size);
    if (rec_buffer == NULL) {
      Serial.printf("malloc failed!\n");
      while(1) ;
    }
    Serial.printf("Buffer: %d bytes\n", ESP.getPsramSize() - ESP.getFreePsram());
  
    // 开始录音
    // I2S 端口号（此处为 I2S_NUM_0），
    // 指向用于接收数据的缓冲区的指针（即 rec_buffer），
    // 要读取的数据大小（即 record_size），
    // 指向实际读取数据大小变量的指针（即 &sample_size），
    // 以及读取数据的最大等待时间（此处为 portMAX_DELAY，表示无限等待）。

    esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
    if (sample_size == 0) {
      Serial.printf("Record Failed!\n");
    } else {
      Serial.printf("Record %d bytes\n", sample_size);
    }
  
    // 增加音量
    for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
      (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
    }
  
    // 将数据写入 WAV 文件
    Serial.printf("Writing to the file ...\n");
    if (file.write(rec_buffer, record_size) != record_size)
      Serial.printf("Write file Failed!\n");
  
    free(rec_buffer);
    rec_buffer = NULL;
    file.close();
    Serial.printf("The recording is over.\n");
    lv_label_set_text(ui_question, "Identifying ...");
    lv_timer_handler();
    listDir(SD, "/", 0);
  
    bool uploadStatus = false;
  
    if(isWIFIConnected){
      uploadStatus = uploadFile();
    }
  }
}

void chatgpt(){
  if(chatgptTask){
    Serial.println("ChatGPT Task Begin!!!");
    lv_label_set_text(ui_answer,"Answering ...");
    lv_timer_handler();
    String result;
    if (chat_gpt.simple_message("gpt-3.5-turbo-0301", "user", response, result)) {
      Serial.println("===OK===");
      Serial.println(result);
      const char* chatgpt_A = result.c_str();
      lv_label_set_text(ui_answer, chatgpt_A);
    } else {
      Serial.println("===ERROR===");
      Serial.println(result);
      lv_label_set_text(ui_answer, "ERROR");
      lv_timer_handler();
    }
    recordTask = false;
    chatgptTask = false;
  }
}

//*****************************************RTOS******************************************//

void wifiConnect(void *pvParameters){
  isWIFIConnected = false;
  Serial.print("Try to connect to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    vTaskDelay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fi Connected!");
  isWIFIConnected = true;
  // 忽略 SSL 证书验证
  client.setInsecure();
  while(true){
    vTaskDelay(1000);
  }
}
```

</details>

在编译和上传示例程序之前，您需要根据您的实际情况更改以下几项内容：

1. **网络的 WiFi 名称** - 将代码中 [第 18 行](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#L18) 的网络名称更改为与部署 Google Cloud Services 的主机处于同一局域网的网络名称。
2. **网络的 WiFi 密码** - 在代码的 [第 19 行](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#LL19C40-L19C40)，将密码更改为对应网络的密码。
3. **主机 IP 地址** - 在代码的 [第 241 行](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#LL241C7-L241C7)，需要将此处的 IP 地址更改为您的主机 IP 地址，并保持端口号为 8888。
4. **OpenAI API Token** - 由于需要调用 ChatGPT 接口，您需要准备 OpenAI Token，并将其填写到代码的 [第 33 行](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#L33)。如果这是您第一次使用 Token，可以阅读 [此 Wiki 的内容](https://wiki.seeedstudio.com/xiaoesp32c3-chatgpt/#submit-questions-via-the-built-in-web-page) 了解如何获取。

上传程序并点击屏幕后，录音任务将开始，此时您可以对着麦克风说出您想要提问的问题。一旦识别出结果，问题将显示在屏幕的上半部分。紧接着，我们将获得 ChatGPT 的回答，并显示在屏幕的下半部分。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/22.jpg" style={{width:600, height:'auto'}}/></div>


## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>