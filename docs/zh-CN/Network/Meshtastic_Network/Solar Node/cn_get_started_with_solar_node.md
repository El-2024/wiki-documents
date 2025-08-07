---
description: 使用 SenseCAP 太阳能节点快速入门 Meshtastic 和 LoRa
title: 使用 SenseCAP 太阳能节点快速入门
keywords:
- Meshtastic
- 太阳能
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /cn/get_started_with_meshtastic_solar_node
sidebar_position: 2
last_update:
  date: 2025/4/27
  author: Jessie
---




## 快速入门

在正式部署之前，请先测试并配置节点。

### 刷写固件

访问 [Meshtastic Web Flasher](https://flasher.meshtastic.org/)。

选择目标设备为 `Seeed SenseCAP Solar Node` 并选择最新的固件，然后点击 `Flash`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-solar.png" alt="pir" width={800} height="auto" /></p>



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/3-steps.png" alt="pir" width={800} height="auto" /></p>

点击 `Enter DFU Mode`，会出现一个名为 `XIAO-xxx` 的串口，点击并连接它，应该会显示一个名为 `XIAO-xxx` 的驱动器。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

将 UF2 文件拖到 DFU 驱动器中。文件下载完成并设备重启后，固件应该已经刷写完成。



### 安装电池和 GPS 模块（可选）

:::tip
推荐电池：18650 锂离子电池 3.6V（带按钮顶部）。
:::

P1-Pro 版本内置电池和 GPS 模块，而 P1 版本需要用户根据需要手动安装电池和 GPS 模块。

* 步骤 1：卸下所有螺丝并取下盖子。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

* 步骤 2：安装电池和 GPS 模块。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>


* 步骤 3：组装外壳。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>


:::caution note
确保外壳正确安装，并将螺丝拧紧，以保持设备的防水性能。
:::



### 启动设备

连接 USB 数据线以激活设备。


### 通过 App 连接

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS App">

* 在蓝牙面板中选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>


* 输入代码（默认代码为 `123456`），然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">


* 点击 `+` 并选择目标设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>


* 输入代码（默认代码为 `123456`），然后点击 `OK` 连接设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

  
</TabItem>
</Tabs>





### 配置参数



为了开始通过网状网络通信，您必须设置您的区域。此设置控制设备使用的频率范围，应根据您的区域位置进行设置。



<Tabs>
<TabItem value="ios" label="IOS App">


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>



</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>


</TabItem>
</Tabs>




**区域列表**



|**区域代码**|**描述**|**频率范围 (MHz)**|**占空比 (%)**|**功率限制 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未设置|N/A|N/A|N/A|
|US|美国|902\.0 - 928.0|100|30|
|EU\_868|欧盟 868MHz|869\.4 - 869.65|10|27|


有关更全面的列表，请参考 [按国家划分的 LoRa 区域](https://meshtastic.org/docs/configuration/region-by-country/)。


:::info
**EU_868** 必须遵守每小时 10% 的占空比限制，该限制按滚动的 1 小时基础每分钟计算。如果达到限制，您的设备将停止传输，直到允许再次传输。
:::


现在您已经在设备上设置了 LoRa 区域，可以继续配置任何适合您需求的 [LoRa 配置](https://meshtastic.org/docs/configuration/radio/lora/)。





## 安装

:::danger 注意
由于设备将长时间在户外使用，请避免将面板水平安装。建议采用倾斜或对角安装方式，以防止积水。此外，请确保所有螺丝已拧紧，盖子已正确安装。为了增强防水性能，您还可以考虑采取额外的密封措施。
:::



* **部件清单**


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>




* 第一步：使用垫圈和螺丝将部件1连接到设备底部。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

* 第二步：使用螺丝将万向节（部件2）和支架（部件3）连接起来。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

* 第三步：连接RF电缆（部件4）和天线（部件5）。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

* 第四步：在适当的位置安装箍环。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/hoop-ring.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>


* 第五步：连接万向节支架。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connector.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

* 第六步：松开螺丝，调整万向节到适当位置，然后拧紧螺丝。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>


* 第七步：将天线连接到设备。

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>



## 常见问题解答

### 功耗

功耗主要取决于数据传输频率和GPS更新速率等因素。
以下数据仅供参考；实际功耗可能因实际使用条件而有所不同。

* **关机睡眠模式功耗**

|描述|功耗|
|---|---|
|GPS_LED工作电流|1.02 mA|
|通电但未激活|56.195 μA|
|通电并激活|611 μA|

**示例：**

|电池容量 |电池寿命|
|---|---|
|3350|136.8|
|12000|490.2|


* **活动模式功耗**

|模式|电流|
|---|---|
|静态电流|10.65 mA|
|EU868传输电流|157.74 mA|
|US915传输电流|205.22 mA|
|GPS工作电流|50 mA|
|GPS_LED工作电流|1.02 mA|

更多详情请查看 [太阳能节点电池寿命计算表](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Solar%20Node%20Battery%20Life%20Calculation%20Table.xlsx)