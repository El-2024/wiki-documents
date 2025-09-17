---
description: 在 Edgebox RPi 200 上部署 InfluxDB，用于 IoT 应用中高效的时间序列数据收集和分析。本指南涵盖安装、配置和使用，以在您的树莓派驱动的边缘控制器上发挥 InfluxDB 的强大功能。直接在网络边缘实现实时洞察和强大的监控能力。

title: Edge Box RPi 200 与 Node Red 和 InfluxDB
keywords:
  - Edge Controller
  - Edge-Box
  - Node-Red
  - InfluxDB
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /cn/edge_box_rpi_200_node_red_influxdb
last_update:
  date: 06/13/2024
  author: Kasun Thushara
---
## 介绍

在 Edgebox RPi 200（一个树莓派驱动的边缘控制器）上部署 [InfluxDB](https://www.influxdata.com/) 可以在网络边缘实现强大的时间序列数据收集和分析。这种设置非常适合 IoT 应用，提供实时洞察和监控能力。通过利用轻量级但功能强大的 InfluxDB 数据库，您可以直接在 Edgebox 上高效地管理和分析传感器数据。以下指南概述了在您的 Edgebox RPi 200 上安装、配置和使用 InfluxDB 的步骤，确保无缝集成到您的数据基础设施中。

### 硬件准备

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### 软件准备

Edge Box 出厂时预装了 Raspberry Pi OS。如果您是第一次启动此设备，请阅读我们的[入门指南 Wiki](https://wiki.seeedstudio.com/cn/Edge_Box_introduction/)。我们已经准备了一份[Node-RED 入门指南](https://wiki.seeedstudio.com/cn/Edge-Box-Getting-Started-with-Node-Red/)。建议您在继续阅读本 wiki 之前先查看此指南。在本教程中，我们将连接运行 YABE 室温模拟器的主机 PC 与运行在 Edge Box 上的 Node-RED。

## 在 Edgebox RPi 200 上安装 InfluxDB

本指南介绍了在 Edgebox RPi 200 边缘控制器上安装和设置 InfluxDB 的步骤。

**步骤 1**：更新系统

首先，通过运行以下命令确保您的系统是最新的：SSH 到 EdgeBox 并

```sh
sudo apt update
```

**Step 2**: Add the InfluxDB Repository

Add the InfluxDB GPG key and repository to your system.

Add the GPG key:

```sh
curl https://repos.influxdata.com/influxdata-archive.key | gpg --dearmor | sudo tee /usr/share/keyrings/influxdb-archive-keyring.gpg >/dev/null
 ```

Add the repository to the sources list:

```sh
echo "deb [signed-by=/usr/share/keyrings/influxdb-archive-keyring.gpg] https://repos.influxdata.com/debian stable main" | sudo tee /etc/apt/sources.list.d/influxdb.list
```

**Step 3**: Update Package List

Update the package list to include the InfluxDB repository:

```sh
sudo apt update
```

**Step 4**: Install InfluxDB

Install InfluxDB version 1

```sh
sudo apt install influxdb
```

## Start InfluxDB Server

Enable and start the InfluxDB service:

**Step 1**. Unmask the service:

```sh
sudo systemctl unmask influxdb
 ```

**Step 2**. Enable the service:

```sh
sudo systemctl enable influxdb
```

**Step 3**. Start the service:

```sh
sudo systemctl start influxdb
```

## Testing InfluxDB

Access the InfluxDB CLI tool to perform basic database operations.

**Step 1**. Open terminal :

```sh
influx
```

**Step 2**. Create a database:

```sh
CREATE DATABASE data
 ```

**Step 3**. Use the database:

```sh
USE data
```

**Step 4**. Insert a sample data point:

```sh
INSERT room,temperature=30.1 humidity=80.2
 ```

**Step 5**. Query the inserted data:

```sh
SELECT * FROM room
 ```

## 为 InfluxDB 添加身份验证

**步骤 1**. 打开终端：

```sh
influx
```

**Step 2**. Create an admin user with all privileges (replace `<password>` with your secure password):

```sh
CREATE USER admin WITH PASSWORD '<password>' WITH ALL PRIVILEGES
 ```

**Step 3**. Exit the InfluxDB CLI:

```sh
exit
```

**Step 4**. Edit the InfluxDB configuration to enable authentication:

```sh
sudo nano /etc/influxdb/influxdb.conf
```

Under the `[HTTP]` section, add or modify the following lines:

```
    auth-enabled = true
    pprof-enabled = true
    pprof-auth-enabled = true
    ping-auth-enabled = true
    enabled=true
    bind-address=":8086"
```

**Step 5**. Restart the InfluxDB service to apply the changes:

```sh
sudo systemctl restart influxdb
```

**Step 6**. Connect to InfluxDB with the admin user:

```sh
influx -username admin -password <password>
```

确保将 `<password>` 替换为您为管理员用户设置的密码。

## 通过 Node-RED 向 InfluxDB 发送数据

**步骤 1**. 在浏览器中打开您的 Node-RED（通常是 `http://<your-edgebox-ip>:1880`）。

**步骤 2**. 使用 Node-RED 管理面板安装 `node-red-contrib-influxdb`。

**步骤 3**. 将一个 `inject` 节点、一个 `function` 节点和一个 `influxdb out` 节点拖放到流画布上，并按如下方式连接它们：

```
[Inject Node] -> [Function Node] -> [InfluxDB Out Node]
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/ifdb-flow.PNG" /></center>

### Function 节点

此节点格式化要发送到 InfluxDB 的数据。

**步骤 1**. 双击 `function` 节点。

**步骤 2**. 输入名称（例如，`Format Data for InfluxDB`）。

**步骤 3**. 在函数编辑器中输入以下代码：

```javascript
msg.payload = [
    {
        temperature: 30.1,
        humidity: 80.2
    }
];
return msg;
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/js-influxdb.PNG" /></center>

**步骤 4**. 点击"Done"。

### InfluxDB Out 节点

此节点将格式化的数据发送到 InfluxDB。

**步骤 1**. 双击 `influxdb out` 节点。

**步骤 2**. 输入以下详细信息：

- **Name**: labdata
- **Database**: data（之前创建的）
- **Measurement**: lab

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/influxin.PNG" /></center>

**步骤 3**. 点击铅笔图标添加新的 InfluxDB 服务器配置。

**步骤 4**. 输入以下详细信息：

- **Name**: InfluxDB
- **Version**: 1.8-flux
- **URL**: `http://localhost:8086`
- **Username**: admin
- **Password**: `<password>`（您创建的密码）

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/server-ifdb.PNG" /></center>

**步骤 5**. 点击"Add"然后点击"Done"。

**步骤 6**. 点击"Deploy"保存并部署您的流程。

### 测试流程

1. 点击 `inject` 节点上的按钮手动触发流程。

2. 通过在终端运行以下命令检查您的 InfluxDB 数据库，查看数据是否已成功写入：

```sh
influx -username admin -password <password>
USE data
SELECT * FROM lab
```

确保将 `<password>` 替换为您为管理员用户设置的密码。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/result-lab.PNG" /></center>

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
