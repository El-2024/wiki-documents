---
description: Jetson-常见问题
title: Jetson 使用常见问题解答
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Jetson_FAQ
last_update:
  date: 2023/7/5
  author: Seraphina
---

本文档包含与 Jetson 系列产品相关的所有常见问题。如果您在使用 Jetson 时遇到任何问题，这将对您非常有帮助。

#### Q1: 安装故障排查

详情请点击[这里](/cn/Troubleshooting_Installation)

#### Q2: 收到的 reComputer 中 eMMC 的剩余空间只有大约 2GB，如何解决空间不足的问题？

详情请点击[这里](/cn/solution_of_insufficient_space)

#### Q3: 如何解决 reComputer 和 VEYE 摄像头之间的兼容性问题？

详情请点击[这里](/cn/Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera)

#### Q4: 如何解决 IMX477 摄像头和 A603 承载板之间的兼容性问题？

详情请点击[这里](/cn/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board)

#### Q5: 如何获取 reComputer J30/J40 的系统日志？

详情请点击[这里](/cn/get_the_system_log_of_recomputer_j30_and_j40)

#### Q6: 闪存 Jetpack 时出现超时问题。

详情请点击[这里](/cn/usb_timeout_during_flash)

#### Q7: 闪存设备后无法使用 USB-A 接口、以太网接口或没有 HDMI 显示。
**答：** 请检查文件完整性（例如，我们提供了 SHA256 校验和）。对于某些承载板（尤其是 A60X 系列），请确保驱动补丁已成功复制/应用到 **Linux_for_tegra** 目录中。有些文件需要 **sudo** 权限，在复制目录时，请确保命令中包含 **-r** 参数。

#### Q8: 执行 "sudo apt-get update && sudo apt-get upgrade" 命令后，系统崩溃/无法启动/黑屏/丢失外设驱动。
**答：** 这些问题可以归结为 **"为什么不能在定制承载板上使用 apt upgrade 升级系统？"** 简短回答是：**不要** 在 **定制/第三方** 承载板上运行 apt upgrade 命令。此外，请避免运行包含 apt upgrade 命令的任何脚本或在 Ubuntu 中使用 GUI 更新工具。服务器上的 Debian 包未考虑我们定制板的特定设计，强制升级可能会导致不兼容，从而使设备变砖。此过程仅适用于官方开发套件。要解决这些问题，请按照我们的指南重新刷写 JetPack。

#### Q9: 如果不能执行 apt upgrade，我该如何升级软件包？如果不升级软件会有安全风险吗？

详情请点击[这里](/cn/upgrade_software_packages_for_jetson)

<!-- #### Q10: 如何使用 OTA（空中下载）方法升级 Jetson 设备的系统版本。 -->

<!-- 详情请点击[这里](/cn/updating_jetpack_with_ota) -->

#### Q11: Seeed 对 NVIDIA 的 Jetson BSP 做了哪些修改？

详情请点击[这里](/cn/differences_of_l4t_between_seeed_and_nvidia)


# 技术支持

感谢您选择我们的产品！我们**在这里**为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>