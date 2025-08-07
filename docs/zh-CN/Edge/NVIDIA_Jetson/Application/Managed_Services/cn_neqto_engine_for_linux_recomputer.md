---
description: 在 reComputer J30 上开始使用适用于 Linux 的 NEQTO 引擎
title: 在 reComputer J30 上开始使用适用于 Linux 的 NEQTO 引擎
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/neqto_engine_for_linux_recomputer
last_update:
  date: 2024/03/14
  author: Kazuhiro Ozuchi
---

## 介绍

NEQTO 是一个轻量级且安全的软件包，允许企业远程安装和配置其边缘设备上的软件。通过即插即用的平台连接器和内置的软件生命周期管理，NEQTO 使企业能够为终端用户提供改进的软件服务。

安装了 NEQTO 的设备可以通过 API 或现成的 NEQTO 控制台进行管理，控制台包括数据存储、警报和看门狗监控的可选服务。企业可以在任何 Linux 设备上快速安装 NEQTO，并与任何本地或云服务器无缝集成数据，从而实现 AIoT。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/header-img_2x.png" alt="pir" width={600} height="auto" /></p>

## 前置条件

### 支持的硬件

您可以选择以下任意一种：

<div class="table-center">
  <table align="center">
    <tr>
        <th>reComputer J3011 - NVIDIA Jetson Orin™ Nano 8GB </th>
        <th>reComputer J4011 - NVIDIA Jetson Orin™ NX 8GB</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image1_1_1.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image2.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J3011-p-5590.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4011-p-5585.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

- （任何 Linux 机器）

:::tip
- 支持的架构：armv6l（32位）、armv7l（32位）、aarch64（64位）、x86_64（64位）
- 所需磁盘空间：≥ 32 MB
- 所需内存空间：≥ 4MB（默认设置下）
- 网络通信接口：必须配备物理网络适配器
- 显示器、键盘、鼠标（可选）
:::

## 入门

### 注册 NEQTO 账户：

- 第 1 步：访问 [官方页面](https://console.neqto.com/register) 注册 NEQTO 账户
- 第 2 步：输入您的电子邮件地址，创建密码并继续
- 第 3 步：通过收到的激活邮件验证账户

### 安装 NEQTO Linux

1. 在 NEQTO 控制台中选择 `Manage API Keys for Linux-based Device`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65eee22eccae06004c6d9459.png" alt="pir" width={20} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65effd1accae06004c6d94a0.png" alt="pir" width={600} height="auto" /></p>

2. 点击 `CREATE API KEY`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65efff89ccae06004c6d94a6.png" alt="pir" width={600} height="auto" /></p>

然后 API Key 将会显示出来

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65efff33ccae06004c6d94a5.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

3. 通过 curl 或 wget 下载 `NEQTO Engine Linux Installer`。

    此处使用 wget 命令。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65eeeaa3ccae06004c6d945d.png" alt="pir" width={600} height="auto" /></p>

复制 `Installer of NEQTO Engine for Linux` 的 `下载链接`，并将其粘贴到 "wget␣" 后。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00259ccae06004c6d94a8.png" alt="pir" width={600} height="auto" /></p>

安装程序下载成功

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f002fbccae06004c6d94aa.png" alt="pir" width={600} height="auto" /></p>

4. 在运行 NEQTO Engine for Linux 的安装程序之前，使用 chmod 命令更改下载的安装程序 (`neqto-daemon-install.latest.sh`) 的执行权限。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00369ccae06004c6d94ab.png" alt="pir" width={600} height="auto" /></p>


<!--<div style="page-break-before:always"></div>-->

5. 从 NEQTO 控制台的 `API Keys for NEQTO Engine for Linux` 中复制 `API Key`，并将其粘贴到 `sudo . /neqto-daemon-install.sh␣-k␣` 后。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00476ccae06004c6d94ae.png" alt="pir" width={600} height="auto" /></p>

6. 输入密码

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00529ccae06004c6d94af.png" alt="pir" width={600} height="auto" /></p>

7. 执行后，将显示重要说明。请检查并在同意后输入“agree”。随后将执行设备注册，并继续软件安装。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f005c1ccae06004c6d94b1.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

8. 请等待直到显示最终状态 `Installation completed successfully!`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00657ccae06004c6d94b3.png" alt="pir" width={600} height="auto" /></p>

确认设备已在 NEQTO Console 上注册

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00722ccae06004c6d94b5.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

### Hello World

1. 点击 `GROUPS` 下的 `ADD GROUP`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65eef7b9ccae06004c6d947b.png" alt="pir" width={600} height="auto" /></p>

2. 在 `Name` 中输入 `reComputer J30`，然后点击 `SAVE`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65eef7d6ccae06004c6d947c.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f007ddccae06004c6d94b6.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

3. 选择你创建的 `reComputer J30`，然后点击 `SCRIPTS`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f0392accae06004c6d9518.png" alt="pir" width={600} height="auto" /></p>

4. 点击 `ADD SCRIPT`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f0379fccae06004c6d9512.png" alt="pir" width={600} height="auto" /></p>

5. 在 `Name` 字段中输入 `Hello World`，然后点击 `SAVE`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f03861ccae06004c6d9515.png" alt="pir" width={600} height="auto" /></p>

6. 从 [Getting Started](https://docs.neqto.com/docs/en/getting-started/tutorial-step1#sample-code) 中复制示例代码，并粘贴到 NEQTO Console 脚本编辑器中，然后点击 `Save`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f036f4ccae06004c6d950f.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

7. 点击 `TEMPLATES`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f035d5ccae06004c6d950d.png" alt="pir" width={600} height="auto" /></p>

然后点击 `ADD TEMPLATE`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f03451ccae06004c6d950a.png" alt="pir" width={600} height="auto" /></p>

8. 将 `DEVICE INFORMATION` 设置如下：

    - 在 `Name` 字段中输入 `reComputer J30 Template`

    - 在 `Firmware Type` 字段中选择 `Linux-based device`

    - 在 `Firmware Version` 字段中选择最新版本

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f03337ccae06004c6d9505.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

9. 对于 `OPTIONS`，在 `Script` 字段中选择 `Hello World`，然后点击 `SAVE`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f03261ccae06004c6d9501.png" alt="pir" width={600} height="auto" /></p>

10. 点击 `NODES`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f0313accae06004c6d94fe.png" alt="pir" width={600} height="auto" /></p>

然后点击 `ADD NODE`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f03019ccae06004c6d94fb.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

11. 将 `META DATA` 设置如下：

    - 将 `Name` 字段设置为 `reComputer J30`

    - 将 `Template` 字段设置为 `reComputer J30 Template`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f02f56ccae06004c6d94f8.png" alt="pir" width={600} height="auto" /></p>

12. 在 `DEVICE INFORMATION` 中选择刚刚注册的设备，然后点击 `SAVE`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f02e10ccae06004c6d94f5.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f02d0dccae06004c6d94f2.png" alt="pir" width={600} height="auto" /></p>

13. 在 reComputer J30 的终端上输入 `tail -F /tmp/neqto/log/neqto.log`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00ac6ccae06004c6d94c8.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

14. 在 NEQTO 控制台上运行 `Reload Script` 后，您可以在 reComputer J30 的终端上看到 `Hello World!!!`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f02b89ccae06004c6d94ef.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00bf7ccae06004c6d94cd.png" alt="pir" width={600} height="auto" /></p>

## 更多信息 / 故障排查

- [NEQTO 支持](https://support.neqto.com/hc/en-us)
- [支持指南](https://docs.neqto.com/docs/en/neqto/support-guidelines)

## 资源

- [NEQTO 资源中心](https://docs.neqto.com/docs/en/linux/software/requirements)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>