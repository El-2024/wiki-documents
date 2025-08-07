---
description: Grove - 温湿度传感器专业版(DHT22)
title: Grove - 温湿度传感器专业版(DHT22)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Temperature_and_Humidity_Sensor_Pro
last_update:
  date: 1/3/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/main.jpg" /></div>

这是我们Grove - 温湿度传感器专业版的强大姊妹版本。它比基础版本具有更完整和准确的性能。该传感器的检测范围为5% RH - 99% RH，以及-40°C - 80°C。其精度达到2% RH和0.5°C。对于有相对严格要求的应用来说，这是一个专业的选择。

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro%EF%BC%88AM2302%EF%BC%89-p-838.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 可升级为工业传感器

通过SenseCAP [S2110控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和[S2100数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松地将Grove转换为LoRaWAN®传感器。Seeed不仅帮助您进行原型设计，还为您提供了通过SenseCAP系列强大的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x系列工业传感器为环境感知提供开箱即用的体验。请参考具有更高性能和稳健性的S2101无线温湿度传感器，用于空气质量监测。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC传感器以及8合1气象站。尝试最新的[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)，助力您下一个成功的工业项目。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size="{4}"><strong>SenseCAP工业传感器</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
          <strong>S2101空气温湿度传感器</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## 规格参数

|项目|  最小值 |标准值 |最大值 |单位|
|---|---|---|---|---|
|输入电压 (VCC) | 3.3| -| 6| V|
|I/O 逻辑电平|-|基于 VCC|-| V|
|测量电流供应 | 1| -| 1.5| mA|
|待机电流供应 | 40| -| 50| uA|
|测量范围 **(湿度)** |5%| -| 99%| RH|
|测量范围 **(温度)**| -40| - |80| °C|
|精度 **(湿度)**|- | -| ±2%| RH|
|精度 **(温度)** |-|-| ±0.5| °C|
|分辨率 **(湿度)** |-| -| 0.1% |RH|
|分辨率 **(温度)** | -|-| 0.1| °C|
|重复性 **(湿度)**| -| -| ±0.3%| RH|
|重复性 **(温度)**| - |- |±0.2| °C|
|长期稳定性|  -| - |±0.5% |RH/年|
|信号采集周期 |-| 2| -| S|
|响应时间 1/e(63%)| 6| - |20| S|
|信号引脚模式|-|数字|-|-|

:::tip
    有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 入门指南

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前先查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 与 Arduino 一起使用

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield| 温湿度传感器 Pro |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html" target="_blank">立即购买</a>|

:::note
 **1** 请轻轻插入 USB 线缆，否则可能会损坏端口。请使用内部有 4 根线的 USB 线缆，2 根线的线缆无法传输数据。如果您不确定您拥有的线缆，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买

**2** 每个 Grove 模块在购买时都配有一根 Grove 线缆。如果您丢失了 Grove 线缆，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买
:::

- **步骤 1.** 将 Grove - 温湿度传感器 Pro 连接到 Grove-Base Shield 的 **D2** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 通过 USB 线缆将 Seeeduino 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/connect_arduino.jpg" /></div>

:::note
 如果我们没有 Grove Base Shield，我们也可以直接将 Grove - 温湿度传感器 Pro 连接到 Seeeduino，如下所示。
:::

| Seeeduino       | 温湿度传感器 Pro |
|---------------|-------------------------|
| 5V           | 红色                     |
| GND           | 黑色                   |
| 未连接 | 白色                   |
| D2            | 黄色                  |

#### 软件

- **步骤 1.** 从 Github 下载 [Seeed DHT 库](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。通过路径打开 "DHTtester" 示例：**文件 --> 示例 --> Grove_Humidity_Temperature_Sensor-master --> DHTtester**。通过这个演示，我们可以读取环境的温度和相对湿度信息。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/path.png" /></div>

:::note
这个Grove - 温湿度传感器Pro和我们的另一个产品[Grove-温度湿度传感器](https://wiki.seeedstudio.com/cn/Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680/)共享这个库。无论您使用哪个产品，请确保您已经使您板子上传感器的定义行生效，并注释掉其他规格的定义行。例如，我们在Grove - 温湿度传感器Pro上使用的传感器是DHT 22。所以传感器规格的定义部分应该是：
:::

```
//#define DHTTYPE DHT11   // DHT 11
#define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)
```

- **步骤4.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤5.** 通过点击**工具-> 串口监视器**打开Arduino IDE的**串口监视器**。或者同时按下++ctrl+shift+m++键。如果一切正常，您将得到结果。

结果应该如下所示：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/result_arduino.png" /></div>

### 与树莓派一起使用（配合树莓派Grove扩展板）

#### 硬件

- **步骤1**. 本项目中使用的物品：

| 树莓派 | 树莓派Grove扩展板| Grove - 温湿度传感器Pro|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Thumbnail.jpg" /></div>|
|[立即获取](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即获取](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即获取](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-Pro-AM230-p-838.html)|

- **步骤2**. 将Grove扩展板插入树莓派。
- **步骤3**. 将温湿度传感器pro连接到扩展板的端口12。
- **步骤4**. 通过USB线将树莓派连接到PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Temp&Hum_Pro_Hat.jpg" /></div>

:::note
对于步骤3，您可以将温湿度传感器pro连接到**任何GPIO端口**，但请确保您使用相应端口号更改命令。
:::

#### 软件

:::caution
如果您使用的是**Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用Python3**运行此命令行。
:::

- **步骤1**. 按照[设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation)配置开发环境。
- **步骤2**. 通过克隆grove.py库下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/Seeed_Python_DHT.git

```

- **步骤3**. 执行以下命令运行代码。

```
cd Seeed_Python_DHT
sudo python3 setup.py install
cd ~/Seeed_Python_DHT/examples
nano dht_simpleread.py 
```

将sensor = seeed_dht.DHT("11", 12)更改为sensor = seeed_dht.DHT("22", 12)，以下是dht_simpleread.py代码。

```python
import time
import seeed_dht
def main():

    # for DHT11/DHT22
    sensor = seeed_dht.DHT("22", 12)
    # for DHT10
    # sensor = seeed_dht.DHT("10")
    
    while True:
        humi, temp = sensor.read()
        if not humi is None:
            print('DHT{0}, humidity {1:.1f}%, temperature {2:.1f}*'.format(sensor.dht_type, humi, temp))
        else:
            print('DHT{0}, humidity & temperature: {1}'.format(sensor.dht_type, temp))
        time.sleep(1)


if __name__ == '__main__':
    main()
```

:::tip
如果一切正常，您将能够通过运行python dht_simpleread.py看到以下结果
:::

```python

pi@raspberrypi:~/Seeed_Python_DHT/examples $ python3 dht_simpleread.py 
DHT22, humidity 39.2%, temperature 29.1*
DHT22, humidity 39.2%, temperature 29.1*
DHT22, humidity 39.2%, temperature 29.1*
DHT22, humidity 39.1%, temperature 29.1*
DHT22, humidity 40.0%, temperature 29.1*
DHT22, humidity 39.9%, temperature 29.1*
DHT22, humidity 40.3%, temperature 29.1*
DHT22, humidity 42.0%, temperature 29.1*
```

您可以通过简单地按下++ctrl+c++退出此程序。

### 与树莓派一起使用（配合GrovePi_Plus）

#### 硬件

**所需材料**

| 树莓派 | GrovePi_Plus | 温湿度传感器Pro |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/Thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/GrovePi%2B-p-2241.html" target="_blank">立即获取</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html" target="_blank">立即获取</a>|

- **步骤1.** 将GrovePi_Plus插入树莓派。

- **步骤2.** 将Grove - 温湿度传感器Pro连接到GrovePi_Plus的**D4**端口。

- **步骤3.** 通过USB线将树莓派连接到PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/connect_pi.jpg" /></div>

#### 软件

如果这是您第一次使用 GrovePi，请逐步执行此部分。如果您是 GrovePi 的老用户，可以跳过 **步骤1** 和 **步骤2**。

- **步骤 1.** 设置软件。在命令行中，输入以下命令：

:::caution
如果您使用的是 **Raspberry Pi with Raspberrypi OS >= Bullseye**，您 **不能使用此命令行**。
:::

```
sudo curl -kL dexterindustries.com/update_grovepi | bash
```

```
sudo reboot
```

```
cd /home/pi/Desktop
```

```
git clone https://github.com/DexterInd/GrovePi.git
```

有关此部分的更多详细信息，请参考 [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/)。

- **步骤 2.** 按照 [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) 更新 GrovePi 的最新固件。

:::note
我们强烈建议您更新固件，否则某些传感器可能会出现错误。
:::

- **步骤 3.** 配置参数

:::caution
如果您使用的是 **Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须 **仅使用 Python3** 来使用此命令行。
:::

```

cd /home/pi/Desktop/GrovePi/Software/Python/
sudo nano grove_dht_pro.py

```

:::note
Grove - Temperature&Humidity Sensor 和 Grove - Temperature&Humidity Sensor pro 共享相同的 python 代码，名为
`grove_dht_pro.py`。唯一的区别是对于语句 `[temp,humidity] = grovepi.dht(sensor,blue)`。我们对 Grove - Temperature&Humidity Sensor 使用参数 `blue`，而对 Grove - Temperature&Humidity Sensor pro 使用 `white`。默认值是 blue，所以对于这个传感器您需要更改代码。
:::

将默认参数 `[temp,humidity] = grovepi.dht(sensor,blue)` 更改为 `[temp,humidity] = grovepi.dht(sensor,white)`。然后代码应该如下所示：

```python
import grovepi
import math
# Connect the Grove Temperature & Humidity Sensor Pro to digital port D4
# This example uses the blue colored sensor.
# SIG,NC,VCC,GND
sensor = 4  # The Sensor goes on digital port 4.

# temp_humidity_sensor_type
# Grove Base Kit comes with the blue sensor.
blue = 0    # The Blue colored sensor.
white = 1   # The White colored sensor.

while True:
    try:
        # This example uses the blue colored sensor.
        # The first parameter is the port, the second parameter is the type of sensor.
        [temp,humidity] = grovepi.dht(sensor,white)  
        if math.isnan(temp) == False and math.isnan(humidity) == False:
            print("temp = %.02f C humidity =%.02f%%"%(temp, humidity))

    except IOError:
        print ("Error")

```

然后按 ++ctrl+x++ 退出 nano。按 ++y++ 保存更改。

- **步骤 4.** 运行以下命令获取结果。

```
sudo python3 grove_dht_pro.py
```

结果应该如下所示：

```python

pi@raspberrypi:~/GrovePi/Software/Python $ sudo python3 grove_dht_pro.py
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%

```

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/Temp_Humi_Pro_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Eagle格式的温湿度传感器Pro文件](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/Temp_Humi_Pro_eagle_files.zip)
- **[PDF]** [PDF格式的温湿度传感器Pro PCB文件](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/TemperatureHumidiy%20Pro%20PCB.pdf)
- **[PDF]** [PDF格式的温湿度传感器Pro原理图](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/TemperatureHumidiy%20Pro%20Schematic.pdf)
- **[Library]** [温湿度传感器Pro库文件](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/Humidity_Temperature_Sensor_pro.zip)
- **[Datasheet]** [AM2302-CN.pdf](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302-CN.pdf)
- **[Datasheet]**  [AM2302-EN.pdf](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302-EN.pdf)

## 项目

**温湿度数据记录器**：该项目有助于监测特定位置的温湿度值以及设备电池电量。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/alpha007/temperature-humidity-data-logger-767570/embed' width='350'></iframe>

**LinkIt ONE IoT演示**：使用LinkIt ONE制作的IoT演示。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/loovee/linkit-one-iot-demo-546a9c/embed' width='350'></iframe>

**带摄像头的自动化蛇类饲养箱**：交互式蛇类饲养箱，具有温湿度控制功能，使用经纬度模拟自然光照周期，并配有在线摄像头。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/hagakure/automated-snake-enclosure-with-camera-a56ea9/embed' width='350'></iframe>

**Foton - 联网光剑**：Foton是一把特殊的光剑，可以监测房间的温湿度，检测运动，并将这些数据发送到智能手机。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/Momy93/foton-the-connected-lightsaber-a6c159/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>