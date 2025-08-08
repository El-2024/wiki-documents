---
description: 内存扩展
title: 内存扩展
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_Jetson_Memory_Expansion
last_update:
  date: 01/05/2023
  author: w0x7ce

no_comments: false # 用于 Disqus

---

# reComputer for Jetson 内存扩展

reComputer for Jetson 配备了 16 GB 的 eMMC，并预装了 **Ubuntu 18.04 LTS** 和 **NVIDIA JetPack 4.6**，因此剩余的用户可用空间大约为 2 GB，这对某些项目中使用 reComputer 进行训练和部署是一个显著的障碍。本教程将基于这种情况介绍不同型号 reComputer 的扩展过程，并帮助开发者通过将系统转移到外部存储设备来扩展系统。

## 容量扩展基础

系统安装磁盘的第一个扇区称为 **主引导记录 (Master Boot Record, MBR)**，其中包含有关 **BootLoader**、分区表和固定标识符 **55AA** 的信息。在 Linux 的启动过程中，**BootLoader** 和 **内核** 会经历两个重要阶段。

**阶段 1：** BootLoader 初始化 **(initrd)** 一个临时根文件系统 **(ramfs)**。ramfs 包含启动时所需的驱动程序、文件系统 (fs)、网络 (net) 等的配置程序。之后，BootLoader 的控制权会被转移到内核，以便内核可以提取这些程序，将它们移动到内存 **(RAM)** 并运行它们以加载各种功能模块。

**阶段 2：** 在内核使用 ramfs 加载必要模块后，它会释放系统并配置真实的根文件系统 **(rootfs)**，以挂载到真实的根目录。

1. 在上述两个阶段中，我们不需要修改内核加载功能模块的 ramfs 部分（阶段 1），因此即使扩展了 reComputer，它仍然需要使用 eMMC。
2. 我们需要修改的是第二阶段，将根文件系统挂载到外部存储设备，从而实现扩展。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/2.png" /></div>

## 容量扩展注意事项

1. 通过外部存储扩展的主要原则是将 rootfs 设置在外部存储设备上。

2. 此扩展方法会修改 Linux 内核级别的系统文件，可能会遇到一些不易解决的问题。您应该使用一个新的 reComputer 和一个新的存储设备来完成本教程中的扩展，并且 **不要尝试在设备上存储重要文件**。如果一切未按预期工作，您可能需要重新格式化存储设备甚至 reComputer。对于最终的保留选项，我们将尽可能通过串口帮助您恢复备份，但您需要自行承担任何数据丢失的责任。

3. 此扩展过程不需要重新编译内核，与其他在线可用的早期扩展方法相比，节省了大约 40 分钟的安装时间。

## 通过载板上的 M.2 插槽和 SSD 扩展

SSD（固态硬盘）通常用作笔记本电脑、台式机等设备的主要存储设备。凭借其高可靠性和快速的数据读写速度，它是 reComputer 扩展的最佳选择。以下表格列出了当前支持 SSD 扩展解决方案的 reComputer 系列产品。reComputer J1010 不支持 SSD 扩展的主要原因是其载板未配备合适的 M.2 插槽。

<table align="center">
  <tbody><tr>
      <th align="center">产品</th>
      <th align="center">reComputer J1020</th>  
      <th align="center">reComputer J2011</th>
      <th align="center">reComputer J2012</th>
      <th align="center">reComputer J2021</th>
    </tr>
    <tr>
      <th align="center">SKU
      </th><td align="center">110061361</td>
      <td align="center">110061363</td>
      <td align="center">110061401</td>
      <td align="center">110061381</td>
    </tr>
    <tr>
      <th align="center">侧视图</th>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview5.png" /></div></td>
    </tr>
    <tr>
      <th align="center">配备模块</th>
      <td align="center">Jetson Nano 4G</td>
      <td align="center">Jetson Xavier NX 8GB</td>
      <td align="center">Jetson Xavier NX 16GB</td>
      <td align="center">Jetson Xavier NX 8GB</td>
    </tr>
    <tr>
      <th align="center">运行载板</th>
      <td align="center">Jetson A206</td>
      <td align="center">Jetson A206</td>
      <td align="center">Jetson A206</td>
      <td align="center">J202</td>
    </tr>
  </tbody>
</table>


### 软件和硬件要求

以下条件需要满足才能使用 SSD 扩展解决方案，这是验证扩展成功的基本要求。

<table align="center">
  <tbody><tr>
      <th align="center"> </th>
      <th align="center">软件和硬件要求</th>  
    </tr>
    <tr>
      <th align="center">Jetson 系列 reComputer</th>
      <td align="left">JetPack 版本 4.4 ~ 4.6 <br />
        载板必须包含 M.2 M-Key 插槽</td>
    </tr>
    <tr>
      <th align="center">SSD</th>
      <td align="left">SSD 需要为第四代扩展文件系统（Ext4）<br />
        M.2 M-Key 接口，支持 NVMe 协议 <br />
        推荐容量 ≤ 512 GB</td>
    </tr>
  </tbody>
</table>


!!!注意
    更新后的 JetPack 版本尚未经过扩展测试，因此无法保证扩展的稳定性或成功性，请仔细按照本教程操作。

    SSD 必须为 M.2 M-Key，否则将无法匹配载板上的接口。
    <div align="center"><img width="300" src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/3.jpeg"/></div>

    不支持非第四代扩展文件系统（Ext4）的存储设备完成扩展操作。

### 扩展步骤

**步骤 1.** 安装 SSD

按照 [硬件说明](https://wiki.seeedstudio.com/cn/reComputer_Jetson_Series_Hardware_Layout/) 中的步骤为 reComputer 安装 SSD。

**步骤 2.** 准备 SSD

使用快捷键 `Ctrl+F` 或点击左上角的 Ubuntu 图标，搜索 **Disks** 并打开 Ubuntu 18.04 自带的 Disks 工具。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/1.png" /></div>

在左侧选择您的 SSD，然后在右上角的菜单栏下选择 **Format Disk**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd1.jpg" /></div>


将您的 SSD 格式化为 GPT 格式。弹出窗口会要求您确认并输入用户密码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd3.png" /></div>


然后，点击中间的 **+** 添加磁盘分区。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd6.png" /></div>


点击“下一步”。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd7.png" /></div>


请为您的 SSD 命名，并在类型中选择 **Ext4**，然后点击“创建”。至此，我们已根据扩展要求完成 SSD 的准备工作。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd8.png" /></div>


**步骤 3.** 将根目录构建到 SSD

使用 git 命令下载我们需要的脚本文件到 reComputer。

```sh
$ git clone https://github.com/limengdu/rootOnNVMe.git
$ cd rootOnNVMe/
```

然后执行以下命令，将 eMMC 中的根目录文件构建到 SSD 上，此步骤的等待时间取决于您使用的根目录大小。

```sh
$ ./copy-rootfs-ssd.sh
```

**步骤 4.** 配置环境并完成扩展

执行以下命令完成 rootfs 的配置。

```sh
$ ./setup-service.sh
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/9.png" /></div>

当您重新启动 reComputer 时，您会看到 eMMC 已经成为主界面上的一个外部存储设备，并且系统占用空间已经减少，因此扩展已成功。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/11.png" /></div>

!!!注意
    脚本文件中的默认 SSD 路径是 `/dev/nvme0n1p1`，这也是 reComputer 默认分配的路径。如果您通过命令 `sudo fdisk -l` 发现您的 SSD 路径与此不符，请将 **copy-rootfs-ssd.sh**、**data/setssdroot.service** 和 **data/setssdroot.sh** 文件中所有的 `/dev/nvme0n1p1` 路径更改为您的 SSD 所在路径。
   <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/21.png" /></div>

    上述扩展不会从 eMMC 中删除原始根目录内容。如果您不想从 SSD 启动，可以移除 SSD，系统仍然会从 eMMC 启动。

## 通过 USB 存储设备进行容量扩展

USB 存储设备（如 U 盘和移动硬盘）在生活中的各个领域被广泛用作外部存储，USB 扩展同样适用于 reComputer。下表列出了当前可用于 USB 扩展解决方案的 reComputer 产品。

<table align="center">
  <tbody><tr>
      <th align="center">产品</th>
      <th align="center">reComputer J1010</th>  
    </tr>
    <tr>
      <th align="center">SKU</th>
      <td align="center">110061362</td>
    </tr>
    <tr>
      <th align="center">侧视图</th>
      <td align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/frontview3_1.png" /></div></td>
    </tr>
    <tr>
      <th align="center">配备模块</th>
      <td align="center">Jetson Nano 4G</td>
    </tr>
    <tr>
      <th align="center">运行载板</th>
      <td align="center">J1010 载板</td>
    </tr>
  </tbody>
</table>

通过 USB 存储设备扩展相比于通过 SSD 扩展的最大优势在于 USB 设备的高便利性以及移除的简单性。
然而，即使使用高速 USB 3.2 接口，数据传输速率仍远低于标准 PCIe 总线，因此在稳定性、可靠性和数据传输速度方面，SSD 扩展方法更具优势。

### 软件和硬件要求

使用 USB 的扩展解决方案需要满足以下条件，这是验证扩展是否能成功的基本要求。

<table align="center">
  <tbody><tr>
      <th align="center"> </th>
      <th align="center">软件和硬件要求</th>  
    </tr>
    <tr>
      <th align="center">Jetson 专用 reComputer</th>
      <td align="left">JetPack 版本 4.4 ~ 4.6 <br />
        配备模块需为 Jetson Nano</td>
    </tr>
    <tr>
      <th align="center">USB 存储设备</th>
      <td align="left">USB 存储设备需为第四代扩展文件系统（Ext4）<br />
        USB 存储设备供电电流 ≤ 0.5 A</td>
    </tr>
  </tbody>
</table>

!!!注意
    更新后的 JetPack 版本尚未经过扩展测试，因此无法保证扩展的稳定性或成功性，请仔细按照本教程操作。

    大容量 USB 存储设备要求 reComputer 正常供电以维持正常运行，不推荐使用容量超过 512 GB 的 USB 存储设备。供电不足可能导致 reComputer 断电。

    除 Jetson Nano 外的配备模块目前不支持使用此方法进行扩展。

    非第四代扩展文件系统（Ext4）的存储设备无法完成扩展操作。

### 扩展步骤

**步骤 1.** 准备必要的文件

使用 git 命令下载我们需要用于 reComputer 的脚本文件。

```sh
$ git clone https://github.com/limengdu/bootFromUSB.git
$ cd bootFromUSB
```

**步骤 2.** 准备 USB 存储设备

将 USB 存储设备连接到 reComputer，并通过快捷键 `Ctrl+F` 或点击左上角的 Ubuntu 图标并搜索 **Disks** 打开 Ubuntu 18.04 自带的 Disks 工具。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/1.png" /></div>

在左侧选择您的 USB 存储设备，然后在右上角菜单栏下选择 **Format Disk**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd1.jpg" /></div>

将您的 USB 存储设备格式化为 GPT 格式。弹出窗口会要求您确认并输入用户密码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd2.png" /></div>

然后，我们点击中间的 **+** 来添加磁盘分区。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd4.png" /></div>

点击“下一步”。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd5.png" /></div>

请为您的 USB 存储设备命名，并在类型中选择 **Ext4**，然后点击“创建”。至此，我们已根据扩展要求完成 USB 存储设备的准备。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/sd6.png" /></div>

**步骤 3.** 挂载 USB 存储设备

根据 **步骤 2** 准备的 USB 存储设备可以在 Disks 软件中看到为未挂载状态。

!!!注意
	如果您发现您的 USB 设备在格式化后已自动挂载，请跳过此步骤。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/60.png" /></div>

我们使用以下命令挂载 USB 设备。

```sh
$ mkdir /media/USB/
$ sudo mount <USB Device Path> /media/USB/
```

其中 `<USB Device Path>` 指的是 USB 存储设备的路径，这个参数可以在 Disks 软件的设备信息中看到，或者通过命令 `sudo fdisk -l` 查询。例如，对于我的 USB 设备，我可以使用以下命令将 `/dev/sda1` 挂载到 `/media/USB/`：

```sh
$ sudo mount /dev/sda1 /media/USB/
```

使用以下命令检查设备的挂载位置：

```sh
$ sudo findmnt -rno TARGET <USB Device Path>
```

对于我的 USB 设备，我需要使用的命令是：

```sh
$ sudo findmnt -rno TARGET /dev/sda1
```

**步骤 4.** 将系统复制到 USB 存储设备

**copyRootToUSB.sh** 脚本会将整个 eMMC 系统的内容复制到 USB 存储设备。当然，USB 存储设备的存储空间应大于 eMMC。

使用的命令如下：

```sh
usage: ./copyRootToUSB.sh [OPTIONS]
-d | --directory     Directory path to parent of kernel

-v | --volume_label  Label of Volume to lookup

-p | --path          Device Path to USB drive (e.g. /dev/sda1)

-h | --help  This message
```

通常，对于常规的扩展需求，我们只需在 `[OPTIONS]` 参数中选择 `-p`，然后添加我们在 **步骤 3** 中获取的 USB 设备路径（例如 `/dev/sda1`）。例如，对于我的 USB 设备，我需要使用的完整命令是：

```sh
$ ./copyRootToUSB.sh -p /dev/sda1
```

此命令的执行时间取决于 eMMC 上存储文件的大小。

**步骤 5.** 查询 USB 设备的 UUID

为了确保万无一失，我们需要查找 USB 设备的 UUID。

```sh
$ ./partUUID.sh 
```

此命令的默认路径是 **sda1 (/dev/sda1)**，但您也可以通过 `-d` 标志指定其他 USB 设备的 UUID。例如，对于我的 USB 设备，命令如下：

```sh
$ ./partUUID.sh -d sdb1

UUID of Disk: /dev/sdb1
e34d67bb-83bb-4fc5-b9a4-a1388d2b2be5
Sample for /boot/extlinux/extlinux.conf entry:
APPEND ${cbootargs} root=UUID=e34d67bb-83bb-4fc5-b9a4-a1388d2b2be5 rootwait rootfstype=ext4
```

!!!注意
    如果返回的 UUID 格式和长度与上述示例不同，则设备可能未格式化为 Ext4，请从 **步骤 2** 重新开始！

**步骤 6.** 修改启动配置以完成扩展

首先，我们需要备份启动配置文件。

```sh
$ sudo cp /boot/extlinux/extlinux.conf /boot/extlinux/extlinux.conf.bak
```

此步骤是 USB 设备扩展操作中最重要且最危险的一步。编辑 `/boot/extlinux/extlinux.conf` 文件和 `/media/nvidia/boot/extlinux/extlinux.conf` 文件，然后添加一个条目以指向新的 rootfs，位置是 USB 设备的路径，在以下参数 `<path>` 中填写。路径信息在 **步骤 3** 中获取。

```sh
$ sudo vi /boot/extlinux/extlinux.conf
$ sudo vi /media/nvidia/boot/extlinux/extlinux.conf

LABEL primary
      MENU LABEL primary kernel
      LINUX /boot/Image
      INITRD /boot/initrd
      APPEND ${cbootargs} quiet root=<path> rw rootwait rootfstype=ext4 console=ttyS0,115200n8 console=tty0 fbcon=map:0 net.ifnames=0 sdhci_tegra.en_boot_part_access=1
```

对于我使用的 USB 存储设备，修改后的 `/boot/extlinux/extlinux.conf` 文件和 `/media/nvidia/boot/extlinux/extlinux.conf` 文件内容如下：

```sh
TIMEOUT 30
DEFAULT primary

MENU TITLE L4T boot options

LABEL primary
      MENU LABEL primary kernel
      LINUX /boot/Image
      INITRD /boot/initrd
      APPEND ${cbootargs} quiet root=/dev/sda1 rw rootwait rootfstype=ext4 console=ttyS0,115200n8 console=tty0 fbcon=map:0 net.ifnames=0 sdhci_tegra.en_boot_part_access=1
#      APPEND ${cbootargs} quiet root=/dev/mmcblk0p1 rw rootwait rootfstype=ext4 console=ttyS0,115200n8 console=tty0 fbcon=map:0 net.ifnames=0 sdhci_tegra.en_boot_part_access=1 

# When testing a custom kernel, it is recommended that you create a backup of
# the original kernel and add a new entry to this file so that the device can
# fallback to the original kernel. To do this:
#
# 1, Make a backup of the original kernel
#      sudo cp /boot/Image /boot/Image.backup
#
# 2, Copy your custom kernel into /boot/Image
#
# 3, Uncomment below menu setting lines for the original kernel
#
# 4, Reboot

# LABEL backup
#    MENU LABEL backup kernel
#    LINUX /boot/Image.backup
#    INITRD /boot/initrd
#    APPEND ${cbootargs}
```

保存文件并重启 reComputer，系统根目录将切换到 USB 存储设备，扩展完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/62.png" /></div>

## 通过串口控制台恢复系统备份

当您的系统由于错误或其他原因无法正常启动时（一个常见的场景是启动时 Nvidia 图标不断重复出现），您在扩展期间创建的备份将发挥重要作用。我们理解您此刻的焦虑，但请耐心按照以下步骤操作，将 reComputer 连接到串口控制台，并通过 U-boot 恢复您的备份。

### 材料准备

<table align="center">
  <tbody><tr>
      <th align="center">材料准备</th>
      <th align="center">描述</th>  
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/7.jpeg" /></div></th>
      <td align="left">Ubuntu 主机 x1</td>
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerheadline.png" /></div></th>
      <td align="left">无法访问系统的 reComputer Jetson x1</td>
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/5.png" /></div></th>
      <td align="left"><a href="https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html?queryID=cb30ad1a9d75c9ef437912535186b130&objectID=1112&indexName=bazaar_retailer_products">UART 转 USB 模块 x1</a></td>
    </tr>
    <tr>
      <th align="center"><div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/6.png" /></div></th>
      <td align="left"><a href="https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html?queryID=a51c4491cb6b462a1e844c832c98c52a&objectID=2042&indexName=bazaar_retailer_products">母对母杜邦线 x3</a></td>
    </tr>
  </tbody>
</table>

### 访问串口控制台的步骤

**步骤 1.** 将 UART 转 USB 模块连接到 reComputer

根据下表中的接线说明，将 reComputer 连接到 UART 转 USB 模块。

<table align="center">
  <tbody><tr>
      <td colSpan={3}><div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/8.jpeg" /></div></td>
    </tr>
    <tr>
      <td align="center">reComputer</td>
      <td align="center"> </td>
      <td align="center">UART 转 USB 模块</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">UART TXD</td>
      <td align="center">--&gt;</td>
      <td align="center">RX</td>
    </tr>
    <tr>
      <td align="center">UART RXD</td>
      <td align="center">--&gt;</td>
      <td align="center">TX</td>
    </tr>
  </tbody>
</table>

!!!提示
    reComputer 和 UART 转 USB 模块之间的 VCC 接口无需连接。

    连接线缆后，暂时无需为 reComputer 通电，请将其放置一旁。

    请断开扩展的外部存储设备。

**步骤 2.** 在 Ubuntu 主机上安装并启动 minicom

如果您的 Ubuntu 主机尚未安装 minicom，可以使用以下命令在计算机上安装 minicom。

```sh
$ sudo apt-get install minicom
```

等待安装完成后，输入以下命令启动 minicom。

```sh
$ sudo minicom
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/40.png" /></div>

**步骤 3.** 准备配置 minicom

在 minicom 菜单栏中，我们打开串口并进行配置，以便通过 minicom 获取 reComputer 的启动信息。在菜单栏中，按键盘上的 **o** 键进入配置界面。使用键盘的上下箭头键控制光标移动到 **Serial port setup**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/41.png" /></div>

**步骤 4.** 将 reComputer 连接到 Ubuntu 主机

此时，我们创建一个新的命令行窗口，并在窗口中输入命令以监控新设备的接入。

```sh
$ dmesg --follow
```

此时我们将为 reComputer 通电，并通过 USB 端口将连接了 UART 转 USB 模块的 reComputer 连接到 Ubuntu 主机。命令行窗口将显示新连接设备的名称，我们需要找到以 **tty** 开头的片段并记录下来。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/44.png" /></div>

**步骤 5.** U-boot 操作

返回到 minicom，并将 **步骤 4** 中获得的设备名称填写到 **Serial Device** 中。同时，检查波特率是否配置为 **115200**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/42.png" /></div>

修改完成后，按回车保存。选择 **Save setup as dfl** 并退出 minicom 界面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/43.png" /></div>

重新输入命令 `sudo minicom`，进入 minicom 后，我们将在窗口中看到 reComputer 的启动信息。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/45.png" /></div>

我们可以通过返回的信息排查 reComputer 无法启动的原因，并使用命令帮助查看 U-boot 系统下可用的所有命令。了解如何使用这些命令是解决问题的必要条件，但当然这可能会比较困难。

```sh
Tegra210 (P3450-0000) # help
?         - 'help' 的别名
base      - 打印或设置地址偏移
bdinfo    - 打印板信息结构
blkcache  - 块缓存诊断和控制
boot      - 默认启动，即运行 'bootcmd'
bootd     - 默认启动，即运行 'bootcmd'
bootefi   - 从内存启动 EFI 负载
bootelf   - 从内存中的 ELF 映像启动
booti     - 从内存启动 Linux 内核 'Image' 格式
bootm     - 从内存启动应用程序映像
bootp     - 使用 BOOTP/TFTP 协议通过网络启动映像
bootvx    - 从 ELF 映像启动 vxWorks
cmp       - 内存比较
coninfo   - 打印控制台设备和信息
cp        - 内存复制
crc32     - 校验和计算
dcache    - 启用或禁用数据缓存
dfu       - 设备固件升级
dhcp      - 使用 DHCP/TFTP 协议通过网络启动映像
dm        - 驱动模型低级访问
echo      - 将参数回显到控制台
editenv   - 编辑环境变量
enterrcm  - 重置 Tegra 并进入 USB 恢复模式
env       - 环境处理命令
exit      - 退出脚本
ext2load  - 从 Ext2 文件系统加载二进制文件
ext2ls    - 列出目录中的文件（默认 /）
ext4load  - 从 Ext4 文件系统加载二进制文件
ext4ls    - 列出目录中的文件（默认 /）
ext4size  - 确定文件大小
ext4write - 在根目录中创建文件
false     - 什么都不做，失败
fatinfo   - 打印文件系统信息
fatload   - 从 DOS 文件系统加载二进制文件
fatls     - 列出目录中的文件（默认 /）
fatmkdir  - 创建目录
fatrm     - 删除文件
fatsize   - 确定文件大小
fatwrite  - 写入文件到 DOS 文件系统
fdt       - 扁平设备树实用命令
fstype    - 查找文件系统类型
go        - 从地址 'addr' 启动应用程序
gpio      - 查询和控制 GPIO 引脚
gzwrite   - 解压并将内存写入块设备
help      - 打印命令描述/用法
i2c       - I2C 子系统
icache    - 启用或禁用指令缓存
imxtract  - 提取多映像的一部分
itest     - 返回整数比较的真/假
ln        - 创建符号链接
load      - 从文件系统加载二进制文件
loadb     - 通过串行线加载二进制文件（kermit 模式）
loads     - 通过串行线加载 S-Record 文件
loadx     - 通过串行线加载二进制文件（xmodem 模式）
loady     - 通过串行线加载二进制文件（ymodem 模式）
loop      - 在地址范围内无限循环
ls        - 列出目录中的文件（默认 /）
lzmadec   - 解压 lzma 内存区域
md        - 内存显示
mii       - MII 实用命令
mm        - 内存修改（自动递增地址）
mmc       - MMC 子系统
mmcinfo   - 显示 MMC 信息
mw        - 内存写入（填充）
nm        - 内存修改（固定地址）
nvme      - NVM Express 子系统
part      - 磁盘分区相关命令
pci       - 列出并访问 PCI 配置空间
ping      - 向网络主机发送 ICMP ECHO_REQUEST
printenv  - 打印环境变量
pxe       - 获取并从 pxe 文件启动的命令
reset     - 执行 CPU 重置
run       - 运行环境变量中的命令
save      - 保存文件到文件系统
saveenv   - 将环境变量保存到持久存储
setenv    - 设置环境变量
sf        - SPI 闪存子系统
showvar   - 打印本地 hushshell 变量
size      - 确定文件大小
sleep     - 延迟执行一段时间
source    - 从内存运行脚本
sspi      - SPI 实用命令
sysboot   - 获取并从 syslinux 文件启动的命令
test      - 类似 /bin/sh 的最小测试
tftpboot  - 使用 TFTP 协议通过网络启动映像
true      - 什么都不做，成功
ums       - 使用 UMS [USB 大容量存储]
unzip     - 解压内存区域
usb       - USB 子系统
usbboot   - 从 USB 设备启动
version   - 打印监视器、编译器和链接器版本
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>