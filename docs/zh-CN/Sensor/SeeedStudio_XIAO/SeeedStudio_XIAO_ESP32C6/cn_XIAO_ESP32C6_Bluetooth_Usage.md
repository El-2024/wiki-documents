---
description: 使用 Seeed Studio XIAO ESP32C6 的蓝牙功能。
title: 蓝牙使用
keywords:
- esp32c6
- xiao
- ble
- bluetooth
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32c6_bluetooth
last_update:
  date: 04/11/2024
  author: Citric
---

# 使用 Seeed Studio XIAO ESP32C6 的蓝牙功能

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32C6</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

Seeed Studio XIAO ESP32C6 是一款功能强大的开发板，支持蓝牙 5、BLE 和 Mesh 网络，使其成为需要无线连接的各种物联网应用的理想选择。凭借其出色的射频性能，XIAO ESP32C6 可以在各种距离上提供可靠和高速的无线通信，使其成为短距离和长距离无线应用的多功能解决方案。在本教程中，我们将重点介绍 XIAO ESP32C6 蓝牙功能的基本特性，例如如何扫描附近的蓝牙设备、如何建立蓝牙连接，以及如何通过蓝牙连接传输和接收数据。

## 蓝牙低功耗 (BLE) 使用

蓝牙低功耗，简称 BLE，是蓝牙的一种节能变体。BLE 的主要应用是小数据量的短距离传输（低带宽）。与始终开启的蓝牙不同，BLE 除了在启动连接时，其余时间都保持在睡眠模式。

由于其特性，BLE 适用于需要定期交换少量数据并运行在纽扣电池上的应用。例如，BLE 在医疗保健、健身、跟踪、信标、安全和家庭自动化行业中非常有用。

这使得它的功耗非常低。BLE 的功耗大约比蓝牙低 100 倍（取决于使用情况）。

关于 XIAO ESP32C6 的 BLE 部分，我们将在以下三个部分介绍其使用方法。

- [一些基本概念](#一些基本概念) -- 我们将首先了解一些在 BLE 中可能经常使用的概念，以帮助我们理解 BLE 程序的执行过程和思路。
- [BLE 扫描器](#ble-扫描器) -- 本节将解释如何搜索附近的蓝牙设备并在串行监视器中打印它们。
- [BLE 服务器/客户端](#ble-服务器客户端) -- 本节将解释如何使用 XIAO ESP32C6 作为服务器和客户端来发送和接收指定的数据消息。它还将用于从手机接收或向 XIAO 发送消息。
- [BLE 传感器数据交换](#ble-传感器数据交换) -- 这是完整教程的最后一节，我们将通过一个传感器示例来解释如何通过 BLE 发送传感器数据。

### 一些基本概念

#### 服务器和客户端

在蓝牙低功耗中，有两种类型的设备：服务器和客户端。XIAO ESP32C6 可以充当客户端或服务器。

服务器广播其存在，以便其他设备可以找到它，并包含客户端可以读取的数据。客户端扫描附近的设备，当它找到要寻找的服务器时，它建立连接并监听传入的数据。这称为点对点通信。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/ble.png" style={{width:800, height:'auto'}}/></div>

#### 属性

属性实际上是一段数据。每个蓝牙设备都用于提供服务，服务是数据的集合，该集合可以称为数据库，数据库中的每个条目都是一个属性，所以这里我将属性翻译为数据条目。您可以将蓝牙设备想象为一个表格，表格内的每一行都是一个属性。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/52.png" style={{width:600, height:'auto'}}/></div>

#### GATT

当两个蓝牙设备建立连接时，它们需要一个协议来确定如何通信。GATT（通用属性配置文件）就是这样一个协议，它定义了蓝牙设备之间如何传输数据。

在 GATT 协议中，设备的功能和属性被组织成称为服务、特征和描述符的结构。服务表示设备提供的一组相关功能和特性。每个服务可以包含多个特征，这些特征定义了服务的某种属性或行为，例如传感器数据或控制命令。每个特征都有一个唯一标识符和一个值，可以读取或写入以进行通信。描述符用于描述特征的元数据，例如特征值的格式和访问权限。

通过使用 GATT 协议，蓝牙设备可以在不同的应用场景中进行通信，例如传输传感器数据或控制远程设备。

#### BLE 特征

ATT，全名属性协议。最终，ATT 由一组 ATT 命令组成，即请求和响应命令，ATT 也是蓝牙空包的最上层，即 ATT 是我们分析蓝牙包最多的地方。

ATT 命令，正式称为 ATT PDU（协议数据单元）。它包括 4 个类别：读取、写入、通知和指示。这些命令可以分为两种类型：如果需要响应，则会跟随一个请求；相反，如果只需要 ACK 但不需要响应，则不会跟随请求。

Service 和 Characteristic 在 GATT 层中定义。Service 端提供 Service，Service 是数据，数据是属性，Service 和 Characteristic 是数据的逻辑表示，或者用户可以看到的数据最终转换为 Service 和 Characteristic。

让我们从移动设备的角度来看看 service 和 characteristic 是什么样子的。nRF Connect 是一个应用程序，它非常直观地向我们展示了每个数据包应该是什么样子。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/62.png" style={{width:400, height:'auto'}}/></div>

如您所见，在蓝牙规范中，每个特定的蓝牙应用程序由多个 Service 组成，每个 Service 由多个 Characteristic 组成。一个 Characteristic 由 UUID、Properties 和 Value 组成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/50.png" style={{width:300, height:'auto'}}/></div>

Properties 用于描述对特征进行操作的类型和权限，例如是否支持读取、写入、通知等。这类似于 ATT PDU 中包含的四个类别。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/51.png" style={{width:800, height:'auto'}}/></div>

#### UUID

每个 service、characteristic 和 descriptor 都有一个 UUID（通用唯一标识符）。UUID 是一个唯一的 128 位（16 字节）数字。例如：

```
ea094cbd-3695-4205-b32d-70c1dea93c35
```

对于[SIG（蓝牙特殊兴趣小组）](https://www.bluetooth.com/specifications/gatt/services)中指定的所有类型、服务和配置文件，都有缩短的UUID。但如果您的应用程序需要自己的UUID，您可以使用这个[UUID生成器网站](https://www.uuidgenerator.net/)来生成它。

### BLE扫描器

创建一个XIAO ESP32C6 BLE扫描器很简单。以下是创建扫描器的示例程序。

```cpp
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>

int scanTime = 5; //以秒为单位
BLEScan* pBLEScan;

class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
    void onResult(BLEAdvertisedDevice advertisedDevice) {
      Serial.printf("Advertised Device: %s \n", advertisedDevice.toString().c_str());
    }
};

void setup() {
  Serial.begin(115200);
  Serial.println("Scanning...");

  BLEDevice::init("");
  pBLEScan = BLEDevice::getScan(); //创建新扫描
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true); //主动扫描使用更多电力，但获得结果更快
  pBLEScan->setInterval(100);
  pBLEScan->setWindow(99);  // 小于或等于setInterval值
}

void loop() {
  // 在这里放置您的主要代码，重复运行：
  BLEScanResults foundDevices = *pBLEScan->start(scanTime, false);
  Serial.print("Devices found: ");
  Serial.println(foundDevices.getCount());
  Serial.println("Scan done!");
  pBLEScan->clearResults();   // 从BLEScan缓冲区删除结果以释放内存
  delay(10000);
}
```

现在您可以选择 XIAO ESP32C6 主板并上传程序。如果程序运行顺利，打开串口监视器并将波特率设置为 115200，您可以看到以下结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/54.png" style={{width:700, height:'auto'}}/></div>

此程序打印出扫描到的蓝牙设备的名称、MAC 地址、制造商数据和信号。

#### 程序注释

首先导入 BLE 功能所需的库。

然后定义一个名为 `MyAdvertisedDeviceCallbacks` 的类，该类继承自 `BLEAdvertisedDeviceCallbacks` 类。它有一个名为 `onResult` 的函数，当在扫描过程中发现广播的蓝牙设备时会调用该函数。该函数使用 `Serial.printf` 函数将设备信息打印到串口。此类可用于在扫描过程中处理蓝牙设备信息。

```c
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
    void onResult(BLEAdvertisedDevice advertisedDevice) {
      Serial.printf("Advertised Device: %s \n", advertisedDevice.toString().c_str());
    }
};
```

在 `Setup` 函数中，我们使用指定的参数设置 BLE 扫描，包括扫描间隔和窗口值。它还初始化 BLE 设备并设置回调函数来处理扫描期间发现的广播设备。

```c
BLEDevice::init("");
pBLEScan = BLEDevice::getScan();
pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
pBLEScan->setActiveScan(true);
pBLEScan->setInterval(100);
pBLEScan->setWindow(99);
```

最后，`loop` 函数使用指定的扫描时间和阻塞标志开始 BLE 扫描。然后将找到的设备数量打印到串口，并清除结果缓冲区以释放内存。

```c
BLEScanResults foundDevices = *pBLEScan->start(scanTime, false);
Serial.print("Devices found: ");
Serial.println(foundDevices.getCount());
Serial.println("Scan done!");
pBLEScan->clearResults();
```

### BLE 服务器/客户端

如前所述，XIAO ESP32C6 可以同时充当服务器和客户端。让我们看看作为服务器的程序以及如何使用它。将以下程序上传到 XIAO 后，它将充当服务器并向所有连接到 XIAO 的蓝牙设备发送"Hello World"消息。

```cpp
//Server Code
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>

#define SERVICE_UUID        "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"

void setup() {
  Serial.begin(115200);
  Serial.println("Starting BLE work!");

  BLEDevice::init("XIAO_ESP32C6");
  BLEServer *pServer = BLEDevice::createServer();
  BLEService *pService = pServer->createService(SERVICE_UUID);
  BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                         CHARACTERISTIC_UUID,
                                         BLECharacteristic::PROPERTY_READ |
                                         BLECharacteristic::PROPERTY_WRITE
                                       );

  pCharacteristic->setValue("Hello World");
  pService->start();
  // BLEAdvertising *pAdvertising = pServer->getAdvertising();  // this still is working for backward compatibility
  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(SERVICE_UUID);
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x06);  // functions that help with iPhone connections issue
  pAdvertising->setMinPreferred(0x12);
  BLEDevice::startAdvertising();
  Serial.println("Characteristic defined! Now you can read it in your phone!");
}

void loop() {
  // put your main code here, to run repeatedly:
  delay(2000);
}
```

同时，您可以在主要的移动应用商店中搜索并下载 **nRF Connect** 应用，该应用允许您的手机搜索并连接到蓝牙设备。

- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

下载软件后，按照下面显示的步骤搜索并连接 XIAO ESP32C6，您将看到广播的"Hello World"。

<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/55.jpg" style={{width:200, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/ble_app.png" style={{width:200, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/58.jpg" style={{width:200, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/59.jpg" style={{width:200, height:'auto'}}/></div></td>
 </tr>
</table>

如果您想使用另一个 XIAO ESP32C6 作为客户端来接收来自服务器的消息，那么您可以为客户端 XIAO 使用以下程序。

```cpp
// 客户端代码
#include "BLEDevice.h"
//#include "BLEScan.h"

// 我们希望连接的远程服务。
static BLEUUID serviceUUID("4fafc201-1fb5-459e-8fcc-c5c9c331914b");
// 我们感兴趣的远程服务的特征。
static BLEUUID    charUUID("beb5483e-36e1-4688-b7f5-ea07361b26a8");

static boolean doConnect = false;
static boolean connected = false;
static boolean doScan = false;
static BLERemoteCharacteristic* pRemoteCharacteristic;
static BLEAdvertisedDevice* myDevice;

static void notifyCallback(
  BLERemoteCharacteristic* pBLERemoteCharacteristic,
  uint8_t* pData,
  size_t length,
  bool isNotify) {
    Serial.print("特征的通知回调 ");
    Serial.print(pBLERemoteCharacteristic->getUUID().toString().c_str());
    Serial.print(" 数据长度 ");
    Serial.println(length);
    Serial.print("数据: ");
    Serial.write(pData, length);
    Serial.println();
}

class MyClientCallback : public BLEClientCallbacks {
  void onConnect(BLEClient* pclient) {
  }

  void onDisconnect(BLEClient* pclient) {
    connected = false;
    Serial.println("断开连接");
  }
};

bool connectToServer() {
    Serial.print("正在建立连接到 ");
    Serial.println(myDevice->getAddress().toString().c_str());
    
    BLEClient*  pClient  = BLEDevice::createClient();
    Serial.println(" - 已创建客户端");

    pClient->setClientCallbacks(new MyClientCallback());

    // 连接到远程BLE服务器。
    pClient->connect(myDevice);  // 如果你传递BLEAdvertisedDevice而不是地址，它将识别对等设备地址的类型（公共或私有）
    Serial.println(" - 已连接到服务器");
    pClient->setMTU(517); //设置客户端请求服务器的最大MTU（否则默认为23）
  
    // 获取远程BLE服务器中我们需要的服务的引用。
    BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
    if (pRemoteService == nullptr) {
      Serial.print("未能找到我们的服务UUID: ");
      Serial.println(serviceUUID.toString().c_str());
      pClient->disconnect();
      return false;
    }
    Serial.println(" - 找到了我们的服务");

    // 获取远程BLE服务器服务中特征的引用。
    pRemoteCharacteristic = pRemoteService->getCharacteristic(charUUID);
    if (pRemoteCharacteristic == nullptr) {
      Serial.print("未能找到我们的特征UUID: ");
      Serial.println(charUUID.toString().c_str());
      pClient->disconnect();
      return false;
    }
    Serial.println(" - 找到了我们的特征");

    // 读取特征的值。
    if(pRemoteCharacteristic->canRead()) {
      String value = pRemoteCharacteristic->readValue();
      Serial.print("特征值为: ");
      Serial.println(value);
    }

    if(pRemoteCharacteristic->canNotify())
      pRemoteCharacteristic->registerForNotify(notifyCallback);

    connected = true;
    return true;
}
/**
 * 扫描BLE服务器并找到第一个广播我们正在寻找的服务的服务器。
 */
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
 /**
   * 为每个广播的BLE服务器调用。
   */
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    Serial.print("发现BLE广播设备: ");
    Serial.println(advertisedDevice.toString().c_str());

    // 我们找到了一个设备，现在让我们看看它是否包含我们正在寻找的服务。
    if (advertisedDevice.haveServiceUUID() && advertisedDevice.isAdvertisingService(serviceUUID)) {

      BLEDevice::getScan()->stop();
      myDevice = new BLEAdvertisedDevice(advertisedDevice);
      doConnect = true;
      doScan = true;

    } // 找到了我们的服务器
  } // onResult
}; // MyAdvertisedDeviceCallbacks

void setup() {
  Serial.begin(115200);
  Serial.println("启动Arduino BLE客户端应用程序...");
  BLEDevice::init("");

  // 获取扫描器并设置我们想要使用的回调，以便在检测到新设备时得到通知。
  // 指定我们想要主动扫描并开始扫描运行5秒。
  BLEScan* pBLEScan = BLEDevice::getScan();
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setInterval(1349);
  pBLEScan->setWindow(449);
  pBLEScan->setActiveScan(true);
  pBLEScan->start(5, false);
} // setup结束。

// 这是Arduino主循环函数。
void loop() {
  // 如果标志"doConnect"为真，那么我们已经扫描并找到了我们希望连接的所需BLE服务器。
  // 现在我们连接到它。一旦我们连接，我们将connected标志设置为真。
  if (doConnect == true) {
    if (connectToServer()) {
      Serial.println("我们现在已连接到BLE服务器。");
    } else {
      Serial.println("我们连接服务器失败；我们不会再做任何事情。");
    }
    doConnect = false;
  }

  // 如果我们连接到对等BLE服务器，每次到达时都用自启动以来的当前时间更新特征
  if (connected) {
    String newValue = "启动后时间: " + String(millis()/1000);
    Serial.println("将新特征值设置为 \"" + newValue + "\"");
    
    // 将特征的值设置为实际上是字符串的字节数组。
    pRemoteCharacteristic->writeValue(newValue.c_str(), newValue.length());
  }else if(doScan){
    BLEDevice::getScan()->start(0);  // 这只是断开连接后开始扫描的示例，很可能在arduino中有更好的方法来做到这一点
  }
  
  delay(1000); // 循环之间延迟一秒。
} // loop结束
```

上述程序将把 XIAO 变成一个客户端，搜索附近的蓝牙设备。当蓝牙设备的 UUID 与您提供的 UUID 匹配时，它将连接到该设备并获取其特征值。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/60.png" style={{width:800, height:'auto'}}/></div>

#### 程序注释

让我们快速了解一下 BLE 服务器示例代码的工作原理。它首先导入蓝牙功能所需的库。然后，您需要为服务和特征定义一个 UUID。

```c
#define SERVICE_UUID "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"
```

您可以保留默认的 UUID，或者可以访问 [uuidgenerator.net](https://www.uuidgenerator.net/) 为您的服务和特征创建随机 UUID。

然后，您创建一个名为"XIAO_ESP32C6"的 BLE 设备。您可以将此名称更改为您喜欢的任何名称。在下一行中，您将 BLE 设备设置为服务器。之后，您使用之前定义的 UUID 为 BLE 服务器创建一个服务。

```c
BLEServer *pServer = BLEDevice::createServer();
BLEService *pService = pServer->createService(SERVICE_UUID);
```

然后，您为该服务设置特征。如您所见，您还使用了之前定义的UUID，并且需要传递特征的属性作为参数。在这种情况下，它是：READ和WRITE。

```c
BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                     CHARACTERISTIC_UUID,
                                     BLECharacteristic::PROPERTY_READ |
                                     BLECharacteristic::PROPERTY_WRITE
                                     );
```

创建特征后，您可以使用 `setValue()` 方法设置其值。在这种情况下，我们将值设置为文本"Hello World"。您可以将此文本更改为您喜欢的任何内容。在未来的项目中，此文本可以是传感器读数或灯的状态等。

最后，您可以启动服务和广播，以便其他BLE设备可以扫描并找到此BLE设备。

```c
BLEAdvertising *pAdvertising = pServer->getAdvertising();
pAdvertising->start();
```

这只是一个如何创建BLE服务器的简单示例。在这段代码中，`loop()` 函数中没有执行任何操作，但你可以添加新客户端连接时发生的操作（查看 `BLE_notify` 示例以获取一些指导）。

### BLE传感器数据交换

接下来，我们将进入现实世界来完成一个案例。在这个案例中，我们将让XIAO ESP32C6连接到光强度传感器，然后通过蓝牙将光传感器的值发送到另一个XIAO ESP32C6并在扩展板的屏幕上显示。

为了方便接线，我们将使用两个XIAO扩展板，示例程序仅供参考，你可以根据实际项目需求选择产品。

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32C6</th>
      <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
      <th>Grove - Digital Light Sensor - TSL2561</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/hardware%20overview.jpg" style={{width:180, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Digital-Light-Sensor-TSL2561.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

除了上述硬件准备外，你可能需要准备以下库，下载并将它们添加到Arduino IDE环境中。

- **OLED显示屏u8g2库**：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

- **Grove - Digital Light Sensor - TSL2561库**：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Digital_Light_Sensor">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

我们需要准备两个XIAO，一个作为服务器，一个作为客户端。这里是作为服务器的示例程序。作为服务器的XIAO有以下主要任务：

- 首先，从光传感器获取实时值；
- 其次，创建蓝牙服务器；
- 第三，通过蓝牙广播光强度值；
- 第四，在显示屏上显示实时光强度和发送状态。

```c
//服务器端
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLE2902.h>
#include <BLEServer.h>
#include <Wire.h>
#include <Digital_Light_TSL2561.h>
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

// 没有显示器复位功能的OLED
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

//BLE服务器名称（运行服务器代码的另一个ESP32的名称）
#define bleServerName "XIAOESP32C6_BLE"

BLECharacteristic *pCharacteristic;
bool deviceConnected = false;

int light_val = 0;

class MyServerCallbacks: public BLEServerCallbacks {
  void onConnect(BLEServer* pServer) {
    deviceConnected = true;
  };
  
  void onDisconnect(BLEServer* pServer) {
    deviceConnected = false;
  }
};

void setup() {
  Serial.begin(115200);
  
  //OLED显示器设置
  u8x8.begin();
  u8x8.setFlipMode(1);

  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.drawString(0, 3, "启动中...");

  Wire.begin();
  TSL2561.init();
  
  BLEDevice::init(bleServerName);
  BLEServer *pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());
  
  BLEService *pService = pServer->createService(BLEUUID((uint16_t)0x181A)); // 环境感知
  pCharacteristic = pService->createCharacteristic(
    BLEUUID((uint16_t)0x2A59), // 模拟输出
    BLECharacteristic::PROPERTY_NOTIFY
  );
  pCharacteristic->addDescriptor(new BLE2902());
  
  pService->start();
  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(pService->getUUID());
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x0);
  pAdvertising->setMinPreferred(0x1F);
  BLEDevice::startAdvertising();
  u8x8.clearDisplay();
}

void loop() {
  if (deviceConnected) {
    light_val = TSL2561.readVisibleLux();
    pCharacteristic->setValue(light_val);
    pCharacteristic->notify();
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 0);
    u8x8.print("光照值:");
    u8x8.clearLine(2);
    u8x8.setCursor(0, 2);
    u8x8.print(light_val);
    u8x8.drawString(0, 4, "发送中...");
    delay(10); // 如果发送太多数据包，蓝牙协议栈会出现拥塞
  }
}
```

在为其中一个 XIAO 上传程序后，如果程序运行顺利，那么你可以拿出手机并使用 nRF Connect APP 搜索名为 **XIAOESP32C6_BLE** 的蓝牙设备，连接它，然后点击下面显示的按钮，你将收到传感器数据信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/63.jpg" style={{width:300, height:'auto'}}/></div>

在这里你会发现我们操作软件的方式与之前的示例不太相同，因为一般来说，当我们发送传感器类型的消息时，我们会选择使用 **notify** 属性来确保消息的高效性。

接下来，我们需要拿出另一个 XIAO，它作为客户端来收集和显示我们的数据。

```c
//客户端
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEClient.h>
#include <BLEServer.h>
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

// 无显示器复位的OLED
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

BLEClient*  pClient;
bool doconnect = false;

//BLE服务器名称（运行服务器代码的另一个ESP32名称）
#define bleServerName "XIAOESP32C6_BLE"

//外围设备的地址。地址将在扫描过程中找到...
static BLEAddress *pServerAddress;

BLEUUID serviceUUID("181A"); // 环境感知
BLEUUID charUUID("2A59");    // 模拟输出

char light_val[1024];

//回调函数，当接收到其他设备的广播时被调用
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    if (advertisedDevice.getName() == bleServerName) { //检查广播者的名称是否匹配
      advertisedDevice.getScan()->stop(); //可以停止扫描，我们找到了要找的设备
      pServerAddress = new BLEAddress(advertisedDevice.getAddress()); //广播者的地址就是我们需要的
      Serial.println("设备已找到。正在连接！");
    }
  }
};

//在OLED显示器上打印最新传感器读数的函数
void printReadings(){
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("光照值:");
  u8x8.drawString(0, 2, light_val);
}

void setup() {
  Serial.begin(115200);
  //OLED显示器设置
  u8x8.begin();
  u8x8.setFlipMode(1);

  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.drawString(0, 3, "启动中...");
  
  Serial.println("启动BLE客户端...");

  BLEDevice::init("XIAOESP32C6_Client");

  // 获取扫描器并设置回调函数，当检测到新设备时通知我们。
  // 指定我们要主动扫描并开始扫描，运行30秒。
  BLEScan* pBLEScan = BLEDevice::getScan();
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true);
  pBLEScan->start(30);

  pClient = BLEDevice::createClient();
  // 连接到远程BLE服务器。
  pClient->connect(*pServerAddress);
  Serial.println(" - 已连接到服务器");

  // 获取远程BLE服务器中我们需要的服务的引用。
  BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
  if (pRemoteService == nullptr) {
    u8x8.clearDisplay();
    u8x8.drawString(0, 3, "错误的UUID");
    Serial.print("未能找到我们的服务UUID: ");
    Serial.println(serviceUUID.toString().c_str());
    return;
  }

  // 获取远程BLE服务器服务中特征的引用。
  BLERemoteCharacteristic* pCharacteristic = pRemoteService->getCharacteristic(charUUID);
  if (pCharacteristic == nullptr) {
    u8x8.clearDisplay();
    u8x8.drawString(0, 3, "错误的UUID");
    Serial.print("未能找到我们的特征UUID");
    return;
  }
  Serial.println(" - 找到光照值特征");
  u8x8.clearDisplay();
  u8x8.drawString(0, 3, "已连接！");
  
  pCharacteristic->registerForNotify([](BLERemoteCharacteristic* pBLERemoteCharacteristic, uint8_t* pData, size_t length, bool isNotify) {
    Serial.println("收到通知");
    Serial.print("值: ");
    Serial.println(*pData);
    snprintf(light_val, sizeof(light_val), "%d", *pData);
  });

  doconnect = true;
  u8x8.clearDisplay();
  u8x8.drawString(0, 4, "接收中...");
}

void loop() {
  if (doconnect) {
    BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
    BLERemoteCharacteristic* pCharacteristic = pRemoteService->getCharacteristic(charUUID);
    pCharacteristic->registerForNotify([](BLERemoteCharacteristic* pBLERemoteCharacteristic, uint8_t* pData, size_t length, bool isNotify) {
      Serial.println("收到通知");
      Serial.print("值: ");
      Serial.println(*pData);
      snprintf(light_val, sizeof(light_val), "%d", *pData);
    });
  }
  printReadings();
  delay(1000);
  u8x8.clearLine(2);
}
```

使用上述示例时，我们建议先上传服务器程序并确保其成功运行，然后再使用客户端程序。如果程序运行顺利，您将看到以下结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/65.gif" style={{width:700, height:'auto'}}/></div>

#### 程序注释

对于上述程序，我们将挑选更重要的部分进行解释。我们先从服务器程序开始。

在程序开始时，我们定义蓝牙服务器的名称，这个名称可以是您设置的名称，但您需要记住它，因为您需要依靠这个名称来搜索这个蓝牙设备。

```c
#define bleServerName "XIAOESP32C6_BLE"
```

在教程的前面部分，我们已经讨论过在服务器下会有特征值，在特征值下会有数值和其他内容。所以我们在创建广告时需要遵循这一原则。

```c
BLEService *pService = pServer->createService(BLEUUID((uint16_t)0x181A)); // Environmental Sensing
  pCharacteristic = pService->createCharacteristic(
    BLEUUID((uint16_t)0x2A59), // Analog Output
    BLECharacteristic::PROPERTY_NOTIFY
  );
  pCharacteristic->addDescriptor(new BLE2902());
```

在上述程序中，您可以看到使用 `createService()` 来创建服务器。参数是一个特定的 UUID：**0x181A**。在 GATT 规则中，**0x181A** 表示环境监测类型数据，相同 Characteristic 的 UUID：**0x2A59** 也有特殊含义。在 GATT 中，它表示模拟输出。这符合我们光传感器值的情况，所以这里我将其定义为这样。您可以在[这里](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/GATT.pdf)阅读 GATT 为我们准备的一些特定 UUID 的含义。

当然，您也可以不遵循 GATT 标准来设置 UUID，您只需要确保这两个值是唯一的，并且不会影响您的客户端通过识别这些 UUID 来找到值的能力。您可以访问 [uuidgenerator.net](https://www.uuidgenerator.net/) 为您的服务和特征创建随机 UUID。

`createCharacteristic()` 函数的第二个参数是设置属性。请注意，这里我们需要将其设置为 **PROPERTY_NOTIFY** 以确保数据连续发送。

```c
pCharacteristic->setValue(light_val);
pCharacteristic->notify();
```

最后，在 `loop` 中，我们只是每 10ms 广播一次读取的光传感器值。

下一步是客户端程序，这看起来会复杂得多。

在程序开始时，仍然是非常熟悉的内容。您需要确保此内容与您在服务器端配置的内容一致。

```c
//BLE Server name (the other ESP32 name running the server sketch)
#define bleServerName "XIAOESP32C6_BLE"

BLEUUID serviceUUID("181A"); // Environmental Sensing
BLEUUID charUUID("2A59");    // Analog Output
```

接下来我们编写一个回调函数，这个函数的主要功能是搜索附近的蓝牙设备，然后将其与您提供的蓝牙设备名称进行比较，捕获它，并获取其MAC地址。

```c
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    if (advertisedDevice.getName() == bleServerName) { //检查广播者的名称是否匹配
      advertisedDevice.getScan()->stop(); //可以停止扫描，我们找到了要找的设备
      pServerAddress = new BLEAddress(advertisedDevice.getAddress()); //广播者的地址就是我们需要的
      Serial.println("Device found. Connecting!");
    }
  }
};
```

以下过程是在服务器中查找光强度值的关键。首先，我们需要找到我们的服务器 UUID，然后在服务器下查找特征的 UUID，最后找到光值。这种解析方法与蓝牙的数据结构一一对应。

```c
// Obtain a reference to the service we are after in the remote BLE server.
BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
if (pRemoteService == nullptr) {
  Serial.print("Failed to find our service UUID: ");
  Serial.println(serviceUUID.toString().c_str());
  return;
}

// Obtain a reference to the characteristics in the service of the remote BLE server.
BLERemoteCharacteristic* pCharacteristic = pRemoteService->getCharacteristic(charUUID);
if (pCharacteristic == nullptr) {
  Serial.print("Failed to find our characteristic UUID");
  return;
}
Serial.println(" - Found light value characteristics");

pCharacteristic->registerForNotify([](BLERemoteCharacteristic* pBLERemoteCharacteristic, uint8_t* pData, size_t length, bool isNotify) {
    Serial.println("Notify received");
    Serial.print("Value: ");
    Serial.println(*pData);
  });
```

最后，光照值被放置在指针 pData 中。

:::tip
上述示例给出了单个传感器单个值的最简单示例。如果您想通过蓝牙广播多个传感器或多个传感器值，我们建议您阅读这里的教程示例。

- [ESP32 BLE 服务器和客户端（低功耗蓝牙）](https://randomnerdtutorials.com/esp32-ble-server-client/)

:::

## NimBLE-Arduino

### 介绍

与基于 bluedroid 的库相比，该库显著减少了 ESP32 BLE 应用程序的资源使用并提高了性能。目标是在合理范围内尽可能保持与原始库的兼容性，但使用 NimBLE 协议栈。此外，该库将得到更积极的开发和维护，以提供比原始库更好的功能和稳定性。

更多信息请访问作者的 Github [链接](https://github.com/h2zero/NimBLE-Arduino/tree/master)。

### 步骤 1.添加库

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/NimBLE.jpg" alt="pir" width={500} height="auto" /></div>

### 步骤 2.示例

**代码**

```cpp
#include <Arduino.h>
#include <NimBLEDevice.h>
#include <NimBLEAdvertisedDevice.h>
#include "NimBLEEddystoneTLM.h"
#include "NimBLEBeacon.h"

#define ENDIAN_CHANGE_U16(x) ((((x) & 0xFF00) >> 8) + (((x) & 0xFF) << 8))

int         scanTime = 5 * 1000; // 以毫秒为单位
NimBLEScan* pBLEScan;

class ScanCallbacks : public NimBLEScanCallbacks {
    void onResult(const NimBLEAdvertisedDevice* advertisedDevice) override {
        if (advertisedDevice->haveName()) {
            Serial.print("设备名称: ");
            Serial.println(advertisedDevice->getName().c_str());
            Serial.println("");
        }

        if (advertisedDevice->haveServiceUUID()) {
            NimBLEUUID devUUID = advertisedDevice->getServiceUUID();
            Serial.print("发现服务UUID: ");
            Serial.println(devUUID.toString().c_str());
            Serial.println("");
        } else if (advertisedDevice->haveManufacturerData() == true) {
            std::string strManufacturerData = advertisedDevice->getManufacturerData();
            if (strManufacturerData.length() == 25 && strManufacturerData[0] == 0x4C && strManufacturerData[1] == 0x00) {
                Serial.println("发现一个iBeacon!");
                NimBLEBeacon oBeacon = NimBLEBeacon();
                oBeacon.setData(reinterpret_cast<const uint8_t*>(strManufacturerData.data()), strManufacturerData.length());
                Serial.printf("iBeacon帧\n");
                Serial.printf("ID: %04X Major: %d Minor: %d UUID: %s Power: %d\n",
                              oBeacon.getManufacturerId(),
                              ENDIAN_CHANGE_U16(oBeacon.getMajor()),
                              ENDIAN_CHANGE_U16(oBeacon.getMinor()),
                              oBeacon.getProximityUUID().toString().c_str(),
                              oBeacon.getSignalPower());
            } else {
                Serial.println("发现其他制造商的信标!");
                Serial.printf("strManufacturerData: %d ", strManufacturerData.length());
                for (int i = 0; i < strManufacturerData.length(); i++) {
                    Serial.printf("[%X]", strManufacturerData[i]);
                }
                Serial.printf("\n");
            }
            return;
        }

        NimBLEUUID eddyUUID = (uint16_t)0xfeaa;

        if (advertisedDevice->getServiceUUID().equals(eddyUUID)) {
            std::string serviceData = advertisedDevice->getServiceData(eddyUUID);
            if (serviceData[0] == 0x20) {
                Serial.println("发现一个EddystoneTLM信标!");
                NimBLEEddystoneTLM foundEddyTLM = NimBLEEddystoneTLM();
                foundEddyTLM.setData(reinterpret_cast<const uint8_t*>(serviceData.data()), serviceData.length());

                Serial.printf("报告的电池电压: %dmV\n", foundEddyTLM.getVolt());
                Serial.printf("TLM类报告的温度: %.2fC\n", (double)foundEddyTLM.getTemp());
                int   temp     = (int)serviceData[5] + (int)(serviceData[4] << 8);
                float calcTemp = temp / 256.0f;
                Serial.printf("数据报告的温度: %.2fC\n", calcTemp);
                Serial.printf("报告的广播计数: %d\n", foundEddyTLM.getCount());
                Serial.printf("报告的上次重启后时间: %ds\n", foundEddyTLM.getTime());
                Serial.println("\n");
                Serial.print(foundEddyTLM.toString().c_str());
                Serial.println("\n");
            }
        }
    }
} scanCallbacks;

void setup() {
    Serial.begin(115200);
    Serial.println("扫描中...");

    NimBLEDevice::init("Beacon-scanner");
    pBLEScan = BLEDevice::getScan();
    pBLEScan->setScanCallbacks(&scanCallbacks);
    pBLEScan->setActiveScan(true);
    pBLEScan->setInterval(100);
    pBLEScan->setWindow(100);
}

void loop() {
    NimBLEScanResults foundDevices = pBLEScan->getResults(scanTime, false);
    Serial.print("发现的设备: ");
    Serial.println(foundDevices.getCount());
    Serial.println("扫描完成!");
    pBLEScan->clearResults(); // 删除扫描结果缓冲区以释放内存
    delay(2000);
}
```

**结果**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/NimBLE2.jpg" alt="pir" width={700} height="auto" /></div>

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
