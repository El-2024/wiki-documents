---
description: ... 
title: Updating Jetson Linux with Image-Based Over-the-Air Update
keywords:
- reComputer
- OTA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /updating_jetpack_with_ota
last_update:
  date: 3/19/2025
  author: Youjiang
---


This wiki will use the [reComputer J3010](https://www.seeedstudio.com/reComputer-J3010-p-5589.html) as an example to demonstrate how to update Jetson linux from jetpack5.1.3 to jetpack6.0 with image-based over-the-air.

## Prerequisites

- reComputer J4012/ J4011/ J3010 or J3011
- Ubuntu 20.04 Host Computer
- USB Type-C data transmission cable

:::info
Here, we use the reComputer classic series for demonstration. Other series of reComputers can also follow this tutorial to achieve OTA firmware upgrades.
:::

## 1 Generate the System Image of JP5.1.3

### 1.1 Prepare JP5.1.3 BSP

First, you need to open a terminal window on the **host PC** and execute the following command to download the NVIDIA Jetpack 5.1.3 version BSP.

```bash
cd <root_dir>
mkdir jp5 && cd jp5
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v5.0/release/jetson_linux_r35.5.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v5.0/release/tegra_linux_sample-root-filesystem_r35.5.0_aarch64.tbz2
```
:::note
Where `<root_dir>` is the root directory of the project.
:::

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ota/bsp_jp5.png"/>
</div>


### 1.2 Build System Image of JP5.1.3

Run the following command in the terminal window of the host PC to build the 5.1.3 system image.

```bash
tar xf jetson_linux_r35.5.0_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.5.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra
sudo ./apply_binaries.sh
sudo  BOARDID=<BOARDID> BOARDSKU=<BOARDSKU> FAB=<FAB>  BOARDREV=<BOARDREV> CHIP_SKU=<CHIP_SKU> ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --no-flash  --massflash 5  --network usb0  jetson-orin-nano-devkit  external
```

:::info
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <td> Jetson </td>
      <td> BOARDID </td>
      <td> BOARDSKU </td>
      <td> FAB </td>
      <td> BOARDREV </td>
      <td> CHIP_SKU </td>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td > Orin Nano 4G </td>
        <td > 3767 </td>
        <td > 0004 </td>
        <td > 300 </td>
        <td > N.2 </td>
        <td > 00:00:00:D6 </td>
    </tr>
    <tr>
        <td > Orin Nano 8G </td>
        <td > 3767 </td>
        <td > 0003 </td>
        <td > 300 </td>
        <td > N.2 </td>
        <td > 00:00:00:D6 </td>
    </tr>
    <tr>
        <td > Orin Nx 8G </td>
        <td > 3767 </td>
        <td > 0001 </td>
        <td > 300 </td>
        <td > M.3 </td>
        <td > 00:00:00:D4 </td>
    </tr>
    <tr>
        <td > Orin Nx 16G </td>
        <td > 3767 </td>
        <td > 0000 </td>
        <td > 300 </td>
        <td > G.3 </td>
        <td > 00:00:00:D3 </td>
    </tr>
  </tbody>
</table>

Please replace the corresponding variables based on the specific Jetson module you are using. For reComputer J3010:
`sudo  BOARDID=3767 BOARDSKU=0004 FAB=300  BOARDREV=N.2 CHIP_SKU=00:00:00:D6 ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --no-flash  --massflash 5  --network usb0  jetson-orin-nano-devkit  external`
:::

Upon successful compilation, a system image package will be generated in the `Linux_for_Tegra` directory.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ota/build_jp5.png"/>
</div>

### 1.3 Flash the JP5.1.3 to Device (Optional)

If you want to test this firmware on the Jetson device, you can refer to [this wiki](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack/) to flash the firmware into the Jetson device.

```bash
sudo tar xpf mfi_jetson-orin-nano-devkit.tar.gz
cd mfi_jetson-orin-nano-devkit
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

## 2 Generate the OTA Package of JP6.0


### 2.1 Prepare the BSP

You need to open a terminal window on the **host PC** and execute the following command to download the NVIDIA Jetpack 6.0 version BSP.

```bash
cd <root_dir>
mkdir jp6 && cd jp6
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v3.0/release/jetson_linux_r36.3.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v3.0/release/tegra_linux_sample-root-filesystem_r36.3.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v3.0/release/ota_tools_R36.3.0_aarch64.tbz2
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ota/bsp_jp6.png"/>
</div>

### 2.2 Build System Image of JP6

Please refer to the steps in [1.2](./#12-build-system-image-of-jp513) for execution, and pay attention to modifying the variables therein.

```bash
tar xf jetson_linux_r36.3.0_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs
cd Linux_for_Tegra
sudo ./apply_binaries.sh
sudo BOARDID=<BOARDID> BOARDSKU=<BOARDSKU> FAB=<FAB> BOARDREV=<BOARDREV> CHIP_SKU=<CHIP_SKU> ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml --no-systemimg" --no-flash --massflash 5 --network usb0 jetson-orin-nano-devkit external
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/ota/build_jp6.png"/>
</div>

### 2.3 Generate OTA Payload Package

Execute the following commands in the terminal window of the host PC.

```bash
cd <root_dir>/jp6
tar xf ota_tools_R36.3.0_aarch64.tbz2
cd Linux_for_Tegra
sudo BASE_BSP=<root_dir>/jp5/Linux_for_Tegra ./tools/ota_tools/version_upgrade/l4t_generate_ota_package.sh --external-device nvme0n1 -S 80GiB jetson-orin-nano-devkit R35-5
```

After the command finished. You will get the `ota_payload_package.tar.gz` in Linux_for_Tegra/bootloader/jetson-orin-nano-devkit.


## 3 Apply OTA Package on Device

### 3.1 Prepare work

Copy the generated OTA package(`ota_payload_package.tar.gz`) to the Jetson device, and execute the following commands in the terminal window of the Jetson device.

```bash
scp <...>/jp6/Linux_for_Tegra/bootloader/jetson-orin-nano-devkit/ota_payload_package.tar.gz ~
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v3.0/release/ota_tools_R36.3.0_aarch64.tbz2
sudo mkdir /ota
sudo mv ~/ota_payload_package.tar.gz /ota
tar xf ota_tools_R36.3.0_aarch64.tbz2
```

### 3.2 Apply OTA
```bash
cd ~/Linux_for_Tegra/tools/ota_tools/version_upgrade
sudo ./nv_ota_start.sh /ota/ota_payload_package.tar.gz
```

After this command finished successfully. Reboot the device.

Finally, the device upgrade from 5.1.3 to 6.0 successfully.


## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
