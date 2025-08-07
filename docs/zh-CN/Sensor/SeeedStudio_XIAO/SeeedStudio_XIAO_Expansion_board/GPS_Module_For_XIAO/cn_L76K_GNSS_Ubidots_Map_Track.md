---
title: L76K 在 Ubidots 上的路径追踪
description: 连接 L76K GNSS 模块和 SeeedStudio XIAO 到 Ubidots，在地图上进行位置路径追踪
keywords: 
  - XIAO
  - Expansion Boards for XIAO
  - GPS Module for XIAO
  - L76K Path Tracking on Ubidots
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/L76K_Path_Tracking_on_Ubidots
last_update: 
  date: 03/07/2024
  author: Harrison Xu
---


# 连接 L76K GNSS 模块和 SeeedStudio XIAO 到 Ubidots 进行地图位置路径追踪

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic00_Track.png" alt="pir" width={600} height="auto"/>
</p>

## 介绍
在完成[SeeedStudio XIAO L76K GNSS 模块入门指南](https://wiki.seeedstudio.com/cn/get_start_l76k_gnss/)后，您可能希望使用 L76K GNSS 模块来定位物体并在地图上显示轨迹。为此，我们可以通过结合 SeeedStudio XIAO 开发板和 Ubidots 物联网数据平台来实现。

[Ubidots](https://ubidots.com/) 是一个低代码物联网开发平台，专为没有时间或精力自己构建完整的、生产就绪的物联网应用程序的工程师和开发人员而设计。从设备友好的 API 到面向最终用户的简洁 UI，Ubidots 提供了必要的构建模块，让您更快地进入市场，而无需雇用昂贵的工程师团队来开发和维护定制解决方案。

### 特性
- 连接到 Wi-Fi 时上传实时位置数据（纬度和经度）
- 在地图上显示由位置点连接的路径

## 入门指南
### 步骤 1：获取 Ubidots 令牌
首先，在浏览器中打开 https://ubidots.com，然后注册一个账户。确认您的邮箱，并登录到 Ubidots 控制台。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic02_SignUp.png" alt="pir" width={600} height="auto"/>
</p>

点击右上角的头像 - "My Profile"，向下滚动并将"Decimal places"从 2 更改为 6，以提高纬度和经度的精度。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic04_Setting.png" alt="pir" width={600} height="auto"/>
</p>

然后转到左侧的"API Credentials"，复制令牌（**不是 API Key**）以备后用。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic05_Token.png" alt="pir" width={600} height="auto"/>
</p>

### 步骤 2：将代码上传到 XIAO
连接 SeeedStudio XIAO 开发板（这里我们以 SeeedStudio XIAO ESP32S3 为例）、L76K GNSS 模块、GNSS 天线、Wi-Fi 天线，并将它们连接到您的计算机。

:::danger **警告**
请特别注意模块的安装方向，不要插反，否则很可能烧坏模块或 XIAO。
:::

接下来，让我们启动 Arduino IDE。记住在库管理器中添加 `EspSoftwareSerial` 和 `TinyGPSPlus` 库，下载 [Ubidots ESP32 库](https://github.com/ubidots/ubidots-esp32) 并同样添加它。

选择相应的开发板和端口，然后粘贴以下代码：

```cpp
#include <SoftwareSerial.h>
#include <TinyGPSPlus.h>
#include <WiFi.h>
#include <Ubidots.h>

static const int RXPin = D7, TXPin = D6;
static const uint32_t GPSBaud = 9600;
const char WIFI_SSID[]     = "在此输入您的WIFI名称";
const char WIFI_PASS[]     = "在此输入您的WIFI密码";
const char UBIDOTS_TOKEN[] = "在此输入您的UBIDOTS令牌";

SoftwareSerial MySerial(RXPin, TXPin);
TinyGPSPlus gps;
Ubidots ubidots(UBIDOTS_TOKEN, UBI_UDP);
double lat;
double lng;

void setup() {
  Serial.begin(115200);
  MySerial.begin(GPSBaud);
  ubidots.setDebug(true);    // 用于观察Ubidots上传日志。您也可以将其更改为"false"以获得更简化的串行监视器。
  Serial.println("\nTinyGPSPlus库版本: " + String(TinyGPSPlus::libraryVersion()));

  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  while (WiFi.status() != 3) {
    WiFi.begin(WIFI_SSID, WIFI_PASS);
    Serial.println(WiFi.status());
    delay(5000);
  }

  /*
    WL_NO_SHIELD        = 255,    // 为了与WiFi Shield库兼容
    WL_IDLE_STATUS      = 0,
    WL_NO_SSID_AVAIL    = 1,
    WL_SCAN_COMPLETED   = 2,
    WL_CONNECTED        = 3,
    WL_CONNECT_FAILED   = 4,
    WL_CONNECTION_LOST  = 5,
    WL_DISCONNECTED     = 6
  */

  Serial.println("WiFi已连接!");
}

void loop() {
  while (MySerial.available() > 0) {
    if (gps.encode(MySerial.read())) {
      getLocation();
      sendToUbidots();
      delay(10 * 1000);  // 在此更改参数以修改获取和上传位置的间隔。
    }
  }

  if (millis() > 5000 && gps.charsProcessed() < 10) {
    Serial.println("未检测到GPS，请检查接线。");
  }
}

void getLocation() {
  if (gps.location.isValid()) {
    lat = gps.location.lat();
    lng = gps.location.lng();

    Serial.print("位置: ");
    Serial.print(gps.location.lat(), 6);
    Serial.print(", ");
    Serial.print(gps.location.lng(), 6);
    Serial.println();
  } else {
    Serial.println("当前无法获取位置");
  }
}

void sendToUbidots() {
  if (lat != 0 && lng != 0) {
    char charLat[20];
    char charLng[20];
    sprintf(charLat, "%.6lf", lat);
    sprintf(charLng, "%.6lf", lng);

    ubidots.addContext("lat", charLat);
    ubidots.addContext("lng", charLng);
    char* context = (char*)malloc(sizeof(char) * 60);
    ubidots.getContext(context);
    ubidots.add("position", 1, context);

    if (ubidots.send()) {
      Serial.println("数值已发送");
    } else {
      Serial.println("数值未发送");
    }
    free(context);
  }
}
```

上传到开发板，很快您将在串行监视器中看到如下输出：

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic06_SerialMonitor.png" alt="pir" width={600} height="auto"/>
</p>

<!--硬件连接正常工作与屏幕截图放一起-->

如上图所示，等待一段时间连接到Wi-Fi网络并从卫星获取位置信息是正常的。如果这些错误输出持续几分钟，请尝试使用USB-C端口旁边的小"R"按钮重启XIAO开发板。

:::tip
L76K GNSS模块用于户外，因此请将其放置在无遮挡的开阔地方，否则可能无法获取位置信息。
:::

### 步骤3：在地图上显示数据
现在L76K GNSS模块和SeeedStudio XIAO正在从GNSS获取位置并将经纬度信息发送到Ubidots。让我们回到Ubidots查看一下。转到https://industrial.ubidots.com/app/devices，有一个新的"设备"已经由Ubidots自动创建，因为我们通过令牌发送了新数据。点击设备名称，您可以看到此设备的位置自动设置为我们上传的数据。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic08_DeviceInfo.png" alt="pir" width={600} height="auto"/>
</p>

接下来，让我们创建一个地图来显示轨迹。转到顶部的"Data" - "Dashboards"，点击"Demo Dashboard"旁边的汉堡菜单按钮，然后"CREATE"一个新的仪表板。您可以像这样修改设置，或自定义以满足您自己的需要。记住"SAVE"新的仪表板。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic10_NewDashboard.png" alt="pir" width={600} height="auto"/>
</p>

在新仪表板中，点击"Add new widget"并向下滚动找到"Map"。"ADD MARKER GROUP"，设置我们刚才检查的设备，地图将出现。将光标移动到地图的右下角以将其调整得更大。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic11_NewWidget.png" alt="pir" width={600} height="auto"/>
</p>

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic12_MapSetting.png" alt="pir" width={600} height="auto"/>
</p>

万岁！由位置点连接的路径就显示在我们面前！

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic00_Track.png" alt="pir" width={600} height="auto"/>
</p>

:::tip
如果L76K GNSS模块停留在固定位置而不移动，地图将只显示一个点而不是路径，这很明显。
:::

## 参考链接
- [GPS Location | Ubidots API Reference](https://docs.ubidots.com/reference/gps-location)

- [Create Map Widgets in Ubidots | Ubidots Help Center](https://help.ubidots.com/en/articles/1712418-create-map-widgets-in-ubidots)

- [How to create a real-time map? | Ubidots Help Center](https://help.ubidots.com/en/articles/693652-how-to-create-a-real-time-map)

- [Ubidots ESP32 Library on GitHub](https://github.com/ubidots/ubidots-esp32)

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