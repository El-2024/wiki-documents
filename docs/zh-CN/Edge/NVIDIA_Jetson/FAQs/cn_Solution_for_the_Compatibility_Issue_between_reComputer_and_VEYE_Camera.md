---
description: 解决 reComputer 和 VEYE 摄像头之间的兼容性问题
title: 解决 reComputer 和 VEYE 摄像头之间的兼容性问题
keywords:
- reComputer
- VEYE 摄像头
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera
last_update:
  date: 08/01/2024
  author: Youjiang
---

问题已被追踪到 USB 集线器芯片的固件问题。

具体步骤如下：

**步骤 1.** 使用 SSH 远程登录到您的 Jetson 设备，因为在升级过程中，要求 USB 接口上不能连接任何外部设备。

**步骤 2.** 设法将 [摄像头驱动](https://files.seeedstudio.com/wiki/reComputer/Hard_ware/VEYE_Camera/vl822-fw.tar.bz2) 复制到 Jetson 系统中。如果使用 USB 驱动器进行复制，请记得在复制完成后拔下 USB 驱动器。

**步骤 3.** 按照以下说明执行升级。
```sh
$ tar -xjvf vl822-fw.tar.bz2
$ cd vl822-fw
```
然后，请按照 `readme.md` 文件中的说明安装固件。

**步骤 4.** 断电并等待 5 秒钟后重新上电。然后，执行以下命令以确认 USB 集线器固件的版本。
```sh
$ ./run_2822_ver.sh
```

**步骤 5.** 恭喜您，升级已成功。现在，您应该可以使用 i2cdetect 在 0x3b 地址检测到 VEYE 摄像头。



## 技术支持

如果有任何问题，请随时在我们的 [论坛](https://forum.seeedstudio.com/) 中提交问题。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>