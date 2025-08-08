---
description: Data_OpenStream_API_Quickstart
title: Data OpenStream API 快速入门
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /cn/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_quickstart
aliases:
  - /Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Quickstart
last_update:
  date: 02/14/2023
  author: Matthew
---

<div class="post-content">
<div class="summary">

本指南将引导您如何订阅设备的消息，以及如何使用 Eclipse Mosquitto 的命令行工具订阅或发布消息来向特定设备发送命令。

</div>
<div id="toc"></div>
<h2 id="setup" class="clickable-header top-level-header">设置</h2>
<i class="icon-arrow-up back-to-top"></i>
<ul>
  <li>安装或<a href="https://mosquitto.org/download/">下载</a> Mosquitto。</li>
</ul>
<h2 id="credentials" class="clickable-header top-level-header">凭证</h2>
<i class="icon-arrow-up back-to-top"></i>浏览 SenseCAP 门户，导航到“Security/Access API keys”，点击“Create Access Key”，即可获取“Access API keys”，将其设置为 &lt;Password&gt;，同时将“Organization ID”设置为 &lt;OrgID&gt;。
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/open_api/access_key_en.png" alt="" /></figure>
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/open_api/access_key_en_2.png" alt="" /></figure>
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/open_api/access_key_en_3.png" alt="" /></figure>
<h2 id="receive-devices-messages" class="clickable-header top-level-header">接收设备消息</h2>
<i class="icon-arrow-up back-to-top"></i>让我们监听所有设备的消息。

1. 打开终端窗口并执行以下命令。
<ul>
  <li>OrgID = 组织 ID</li>
  <li>Password = Access API keys</li>
</ul>

```bash
mosquitto_sub -h sensecap-openstream.seeed.cn -t '/device_sensor_data/<OrgID>/+/+/+/+' -u 'org-<OrgID>' -P '<Password>' -I 'org-<OrgID>-quickstart' -v
```

请将刚刚获取的组织 ID 和 Access API Key 替换为上述的 &lt;OrgID&gt; 和 &lt;Password&gt;。

2. 启动设备，当设备持续发送消息时，您应该会收到如下数据：
<div className="language-ruby highlighter-rouge">
  <div className="highlight">
    <pre className="highlight"><code><span className="sr">/device_sensor_data/</span><span className="mi">1234</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12000000001</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4105</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">2</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151824139</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4097</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">23</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151900992</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4101</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">101629</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151901112</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4098</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">71</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151900992</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4099</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mf">69.12</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151902224</span><span className="p" />{"\n"}<span className="sr">/device_sensor_data/xxxx</span><span className="o">/</span><span className="mi">2</span><span className="no">CF7F12XXXXXXXXX</span><span className="o">/</span><span className="mi">1</span><span className="o">/</span><span className="n">vs</span><span className="o">/</span><span className="mi">4100</span> <span className="p" /><span className="s2">"value"</span><span className="p">:</span><span className="mi">437</span><span className="p">,</span><span className="s2">"timestamp"</span><span className="p">:</span><span className="mi">1544151922137</span><span className="p" />{"\n"}</code></pre>
  </div>
</div>

<table>
<thead>
<tr>
<th>示例</th>
<th>字段</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>1234</td>
<td>OrgId</td>
<td>组织 ID</td>
</tr>
<tr>
<td>2CF7F12000000001</td>
<td>DeviceEUI</td>
<td>设备的唯一标识</td>
</tr>
<tr>
<td>1</td>
<td>Channel</td>
<td>设备上用于连接传感器的物理接口</td>
</tr>
<tr>
<td>vs</td>
<td>Reserved</td>
<td>保留字段</td>
</tr>
<tr>
<td>4105</td>
<td>MeasureID</td>
<td>测量类型，4105 表示风速</td>
</tr>
<tr>
<td>2</td>
<td>value</td>
<td>采集的测量值，风速为 2m/s</td>
</tr>
<tr>
<td>1544151824139</td>
<td>timestamp</td>
<td>数据采集的时间戳</td>
</tr>
</tbody>
</table>
<h2 id="subscribe-a-specific-key" class="clickable-header top-level-header">订阅特定键值</h2>
<i class="icon-arrow-up back-to-top"></i>指定一个特定的键值可以让您订阅某个特定设备或通道的数据。

示例：  
订阅由空气温湿度传感器（DeviceEUI: 2CF7F12210400083；Channel: 1）采集的温度值。温度的测量 ID 是 4097。  
将 &lt;OrgID&gt; 替换为组织 ID，将 &lt;Password&gt; 替换为访问 API 密钥，执行以下命令：

```bash
mosquitto_sub \
  -h sensecap-openstream.seeed.cn \
  -t '/device_sensor_data/<OrgID>/2CF7F12210400083/1/vs/4097' \
  -u 'org-<OrgID>' \
  -P '<Password>' \
  -I 'org-<OrgID>-quickstart' \
  -v
```

接收到的数据：
```cpp
/device_sensor_data/521853156991/2CF7F12210400083/1/vs/4097 {"value":28,"timestamp":1561373812474}
```
恭喜！现在您已经学会了如何通过 MQTT 监控和接收消息。去构建一些令人惊叹的东西吧！


</div>