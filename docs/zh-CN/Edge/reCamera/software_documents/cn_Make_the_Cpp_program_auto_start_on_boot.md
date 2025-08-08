---
description: 本文档演示如何设置程序在启动时自动运行。
title: 使 C++ 程序在启动时自动运行。
keywords:
  - reCamera
  - C++
  - 自动启动
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/make_the_cpp_program_auto_start_on_boot
last_update:
  date: 07/26/2025
  author: Liangyuxin

no_comments: false 

---

# 使 C++ 程序在启动时自动运行

本文档演示如何设置程序在启动时自动运行。

## 方法 1：编写启动脚本

ReCamera 使用轻量级的 **SysVinit 系统**，通过 **/etc/inittab** 进行初始化。当 ReCamera 开机时，它会读取 **inittab** 的内容，并通过以下代码启动 **/etc/init.d/rcS**：
```
# now run any rc scripts
::sysinit:/etc/init.d/rcS
```
**rcS** 文件定义了程序将按顺序启动以 "S??" 开头的脚本：
```
for i in /etc/init.d/S??* ;do

     # Ignore dangling symlinks (if any).
     [ ! -f "$i" ] && continue

     case "$i" in
	*.sh)
	    # Source shell script for speed.
	    (
		trap - INT QUIT TSTP
		set start
		. $i
	    )
	    ;;
	*)
	    # No sh extension, so fork subprocess.
	    $i start
	    ;;
    esac
done
```
在 **/etc/init.d** 目录中，您可以添加程序的自动启动脚本。（脚本以 "S" 开头，后跟数字，数字决定了启动时的执行顺序。）

命名示例：
- **S10network**: 提早启动（数字越小，启动越早）
- **S99myprogram**: 延迟启动（数字越大，启动越晚）

自动启动脚本的内容必须包括：

- 变量定义部分
  - 定义服务运行所需的配置参数。
  - 关键变量：
    - **DAEMON**: 可执行文件的路径
    - **PIDFILE**: 进程 ID 记录文件的位置
    - **LD_LIBRARY_PATH**: 自定义库路径
- 功能函数部分
  - 包括四个主要函数：
    - **start()**: 启动服务
    - **stop()**: 停止服务
    - **restart()**: 重启服务
    - **status()**: 检查服务状态
- 主控制逻辑
  - 根据输入参数调用相应的函数。

您可以参考现有脚本来编写自己的脚本。以下是 **sccma-node** 的示例供参考：
```
#!/bin/sh

### BEGIN INIT INFO
# Provides:          sscma-node
# Required-Start:    $all
# Required-Stop:     $all
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: Start SSCMA Node at boot time
# Description:       Start SSCMA Node service.
### END INIT INFO

DAEMON=/usr/local/bin/sscma-node
DAEMON_OPTS="--start"
NAME=sscma-node
DESC="SSCMA Node Service"
PIDFILE=/var/run/$NAME.pid
LOGFILE=/var/log/$NAME.log
USER=root

# Set up the library path if necessary
LD_LIBRARY_PATH=/mnt/system/lib:/mnt/system/usr/lib:/mnt/system/usr/lib/3rd:$LD_LIBRARY_PATH
export LD_LIBRARY_PATH

start() {
    echo "Starting $DESC: $NAME"
    if [ -f $PIDFILE ]; then
        PID=$(cat $PIDFILE)
        if [ -n "$PID" ] && kill -0 "$PID" 2>/dev/null; then
            echo "$NAME is already running (PID: $PID)."
            return 1
        else
            echo "Removing stale PID file."
            rm -f $PIDFILE
        fi
    fi
    start-stop-daemon -S -q -m -b -p $PIDFILE --exec $DAEMON -- $DAEMON_OPTS
    [ $? = 0 ] && echo "OK" || echo "FAIL"
}

stop() {
    echo "Stopping $DESC: $NAME"
    if [ -f $PIDFILE ]; then
        PID=$(cat $PIDFILE)
        if [ -n "$PID" ] && kill -0 "$PID" 2>/dev/null; then
            start-stop-daemon -K -q -p $PIDFILE
            rm -f $PIDFILE
            [ $? = 0 ] && echo "OK" || echo "FAIL"
        else
            echo "Process not running but PID file exists, cleaning up."
            rm -f $PIDFILE
        fi
    else
        echo "$NAME is not running."
    fi
}

restart() {
    stop
    start
}

status() {
    if [ -f $PIDFILE ]; then
        PID=$(cat $PIDFILE)
        if [ -n "$PID" ] && kill -0 "$PID" 2>/dev/null; then
            echo "$NAME is running (PID: $PID)."
        else
            echo "$NAME PID file exists but process is not running."
        fi
    else
        echo "$NAME is not running."
    fi
}

case "$1" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    restart)
        restart
        ;;
    status)
        status
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status}"
        exit 1
        ;;
esac

exit 0
```
然后，为脚本授予可执行权限：
```
sudo chmod +x {your script}
ls -l
```
将程序的可执行文件放置在指定路径，通常为：**/usr/local/bin**：
```
sudo scp {your program} /usr/local/bin
sudo chmod +x {your program}
ls -l
```
测试脚本和程序是否可以正常启动：
```
sudo /etc/init.d/{your script} start
cd /usr/local/bin
sudo {your program}
```
如果成功，重启您的 ReCamera。

## 方法 2：使用 opkg 安装 C++ 项目

您还可以在 C++ 项目中预先配置自动启动脚本，然后将其安装到 recamera 上。

**添加 Control 目录**

在您的项目中，需要包含以下 **control** 脚本：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Make_the_Cpp_program_auto_start_on_boot/1.png" /></div>

- **preinst**（预安装脚本）
  - 它在软件包安装之前执行。此脚本的功能包括：
    - 检查系统是否满足安装要求
    - 停止将被替换的旧版本服务
    - 备份现有的配置文件
    - 验证依赖项是否满足
    - 创建必要的系统用户/组
    - 执行时机：在执行 `dpkg -i` 或 `apt install` 时运行，文件部署之前。

示例：
```
#!/bin/sh
set -e

if [ -f /etc/init.d/S93sscma-supervisor ]; then
    /etc/init.d/S93sscma-supervisor stop
fi

exit 0
```

- **postinst**（后安装脚本）
  - 它在软件包完全安装后执行。此脚本的功能包括：
    - 启动新安装的服务
    - 更新系统缓存或数据库（例如 `ldconfig`、`update-rc.d`）
    - 执行初始配置步骤
    - 设置文件权限/所有权
    - 更新替代系统（例如 `update-alternatives`）
    - 显示后安装说明
    - 执行时机：在执行 `dpkg -i` 或 `apt install` 时运行，所有文件部署之后。

示例：
```
#!/bin/sh
set -e

if [ -f /etc/init.d/S93sscma-supervisor ]; then
    /etc/init.d/S93sscma-supervisor start   
fi

exit 0
```

- **prerm**（预移除脚本）
  - 它在软件包卸载之前执行。此脚本的功能包括：
    - 优雅地停止相关服务
    - 检查是否有进程正在使用该软件（防止强制删除）
    - 在删除前备份用户数据
    - 清理临时文件或运行时资源
    - 执行时机：在执行 `dpkg -r` 或 `apt remove` 时运行，文件删除之前。

示例：
```
#!/bin/sh
set -e

if [ -f /etc/init.d/S93sscma-supervisor ]; then
    /etc/init.d/S93sscma-supervisor stop
fi

exit 0
```

**添加 rootfs 目录**

然后将自动启动脚本放入对应的路径：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Make_the_Cpp_program_auto_start_on_boot/2.png" /></div>

将整个项目放入 Linux 交叉编译环境中进行编译和打包。在打包之前，必须检查文件是否为 Linux 兼容的 LF 换行格式。如果发现是 CRLF 格式（Windows 风格），请先进行转换。

```
dos2unix {your files}
```

然后执行以下命令：
```
cd {your project}
cmake -B build -DCMAKE_BUILD_TYPE=Release .
cmake --build build
cd build && cpack
scp {your project.deb} recamera@192.168.42.1:/tmp/
```

在 recamera 终端中，使用 opkg 安装：
```
sudo opkg install /tmp/{your project.deb}
```

如果您的项目之前已安装，请先卸载：
```
sudo opkg remove {your program}

sudo opkg install /tmp/{your project.deb}
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>