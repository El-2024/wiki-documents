---
description: Build a HMI Display for Raspberry Pi using Wio Terminal
title: Construye una Pantalla HMI para Raspberry Pi
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-HMI
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Construye una Pantalla HMI para Raspberry Pi usando Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/Wio-Terminal-HMI.gif"/></div>

En este wiki, te mostramos cómo usar el [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) como una pantalla USB **HMI (Interfaz Hombre-Máquina)** para [**Raspberry Pi**](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-2GB-V1-2-p-4299.html), [**Nvidia Jetson Nano**](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html), [**BeagleBone**](https://www.seeedstudio.com/beaglebone-c-954.html) e incluso [**Odyssey X86J4105**](https://www.seeedstudio.com/ODYSSEY-X86J4105864-p-4447.html). Esto convierte al Wio Terminal en una pantalla USB HMI mucho más poderosa para escenarios industriales.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/pyqt-new.gif"/></div>

Soporta **múltiples Wio Terminals conectados al dispositivo anfitrión**. En teoría, puedes conectar tantos como puertos USB tengas disponibles. En Raspberry Pi, se soportan hasta 4 Wio Terminals (4 puertos USB), funcionando como pantallas HMI en **modo extendido** o **modo espejo**.

## Hardware Necesario

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)  
- [**Raspberry Pi**](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-2GB-V1-2-p-4299.html) / [**Nvidia Jetson Nano**](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) / [**BeagleBone**](https://www.seeedstudio.com/beaglebone-c-954.html) / [**Odyssey X86J4105**](https://www.seeedstudio.com/ODYSSEY-X86J4105864-p-4447.html)

## Firmware para Wio Terminal

Primero, sube un programa Arduino al Wio Terminal desde tu PC.

- Descarga la librería [**Seeed_Arduino_USBDISP**](https://github.com/Seeed-Studio/Seeed_Arduino_USBDISP).

Existen dos ejemplos:

1. Para **mayor tasa de refresco de pantalla**, sube el ejemplo **`NullFunctional`**.
2. Para que el Wio Terminal funcione también como **mouse USB**, sube el ejemplo **`USBDisplayAndMouseControl`**.

### Método `uf2` para subir firmware

Para facilitar, también proveemos archivos `.uf2` listos para cargar:

- Descarga el [NullFunctional.uf2](http://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/NullFunctional.uf2)
- Descarga el [USBDisplayAndMouseControl.uf2](https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/USBDisplayAndMouseControl.uf2)

Para entrar en modo bootloader, desliza el interruptor de encendido dos veces rápidamente. Aparecerá una unidad llamada `Arduino` en tu PC. Solo arrastra el archivo `.uf2` descargado a esa unidad.

## Firmware para el Dispositivo Anfitrión

Configura el driver de pantalla en el dispositivo anfitrión (Raspberry Pi, Jetson Nano, Odyssey X86J4105, etc.):

### Raspberry Pi

1. Actualiza paquetes:

```sh
sudo apt-get update
```

2. Instala los paquetes necesarios:

```sh
sudo apt-get install raspberrypi-kernel-headers raspberrypi-kernel build-essential dkms
```

3. Reinicia Raspberry Pi:

```sh
sudo reboot
```

4. Clona el repositorio del driver:

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-usbdisp
```

5. Compila e instala el driver:

```sh
cd ~/seeed-linux-usbdisp/drivers/linux-driver
make && sudo make install
sudo reboot
```

6. Copia los archivos de configuración:

```sh
sudo cp ~/seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/10-disp.conf /usr/share/X11/xorg.conf.d/
```

> Nota: Existen diferentes configuraciones de pantalla disponibles. La configuración por defecto asocia un Wio Terminal a una pantalla.

7. Reinicia el gestor de pantalla:

```sh
sudo service lightdm restart
```

8. Configura la resolución:

```sh
sudo raspi-config
```

Navega a:

```sh
Display Options > Resolution
```

Selecciona una resolución diferente a la "default", por ejemplo:

```sh
DMT Mode 82 1920x1080 60Hz 16:9
```

9. Apaga Raspberry Pi:

```sh
sudo poweroff
```

10. Conecta el Wio Terminal a un puerto USB de Raspberry Pi.

11. Enciende Raspberry Pi.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-new.png"/></div>

Ahora deberías ver el escritorio de Raspberry Pi en tu Wio Terminal. Si cargaste el firmware `USBDisplayAndMouseControl`, podrás usar los botones y el control de 5 vías para manejar el mouse del Raspberry Pi.

> **Nota:** Esta versión del driver USB no soporta hot swapping.

### Jetson Nano, Beaglebone y Odyssey X86

Para Nvidia Jetson Nano y Odyssey X86J4105 (Ubuntu):

1. Reinstala los headers del kernel:

```sh
sudo apt install --reinstall linux-headers-$(uname -r)
```

2. Clona el driver:

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-usbdisp
```

3. Compila e instala el driver:

```sh
cd ~/seeed-linux-usbdisp/drivers/linux-driver
make && sudo make install
sudo reboot
```

4. Copia los archivos de configuración:

```sh
sudo cp ~/seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/10-disp.conf /usr/share/X11/xorg.conf.d/
```

5. Reinicia el gestor de pantalla:

```sh
sudo service lightdm restart
```

6. Conecta el Wio Terminal al puerto USB del dispositivo.

Nota: Para Odyssey X86J4105 solo se ha probado en Ubuntu y Debian. Otros Linux pueden no funcionar.

## Configuraciones de Pantalla

Puedes conectar **múltiples** Wio Terminals al Raspberry Pi y configurar la distribución de pantallas editando el archivo `10-disp.conf`. Proveemos varias configuraciones de expansión de pantalla para tu conveniencia.

# Configuraciones de Pantalla Múltiple para Wio Terminal USB HMI

### Configuración 1: Disposición 2x2

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-1-removebg.png"/></div>

```python
# Distribución de 4 pantallas:
# patrón: 1  2
#         3  4
```

Archivo: `10-disp-1.conf` (ubicado en `seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/`)

Para usarlo, copia y renombra:

```bash
sudo cp ~/seeed-linux-usbdisp/drivers/linux-driver/xserver_conf/10-disp-1.conf /usr/share/X11/xorg.conf.d/10-disp.conf
```

### Configuración 2: Disposición vertical y horizontal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-2-removebg.png"/></div>

```python
# Distribución de 4 pantallas:
# patrón: 1
#         2  3  4
```

Archivo: `10-disp-2.conf`

### Configuración 3: Disposición en línea horizontal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-3-removebg.png"/></div>

```python
# Distribución de 4 pantallas:
# patrón: 1  2  3  4
```

Archivo: `10-disp-3.conf`

### Configuración 4: Modo espejo (clonación de pantalla)

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/display-4.png"/></div>

```python
# Clonación de 4 pantallas idénticas
```

Archivo: `10-disp-4.conf`

# Ejemplo PyQtGraph para GUI en Wio Terminal

Puedes crear interfaces gráficas fácilmente con [PyQtGraph](http://www.pyqtgraph.org/) y desplegarlas en las pantallas conectadas.

## Instalación de dependencias

```bash
sudo apt update
sudo apt install python3 python3-distutils python3-pyqt5 python3-pip python3-numpy -y
sudo pip3 install pyqtgraph
```

## Configurar variable de entorno para seleccionar pantalla

Ejemplo para pantalla 1:

```bash
export QT_QPA_PLATFORM=linuxfb:fb=/dev/fb1
```

Para pantalla 2 usa `fb2`, para pantalla 3 `fb3`, etc.

Verifica con:

```bash
echo $QT_QPA_PLATFORM
```

## Código de ejemplo PyQtGraph

Guarda el siguiente código en `test.py` y ejecútalo para probar:

```python
# -*- coding: utf-8 -*-
import pyqtgraph as pg
from pyqtgraph.Qt import QtCore, QtGui
import numpy as np

pg.setConfigOptions(imageAxisOrder='row-major')

pg.mkQApp()
win = pg.GraphicsLayoutWidget()
win.setWindowTitle('pyqtgraph example: Image Analysis')

p1 = win.addPlot(title="")
img = pg.ImageItem()
p1.addItem(img)

roi = pg.ROI([-8, 14], [6, 5])
roi.addScaleHandle([0.5, 1], [0.5, 0.5])
roi.addScaleHandle([0, 0.5], [0.5, 0.5])
p1.addItem(roi)
roi.setZValue(10)

iso = pg.IsocurveItem(level=0.8, pen='g')
iso.setParentItem(img)
iso.setZValue(5)

hist = pg.HistogramLUTItem()
hist.setImageItem(img)
win.addItem(hist)

isoLine = pg.InfiniteLine(angle=0, movable=True, pen='g')
hist.vb.addItem(isoLine)
hist.vb.setMouseEnabled(y=False)
isoLine.setValue(0.8)
isoLine.setZValue(1000)

win.nextRow()
p2 = win.addPlot(colspan=2)
p2.setMaximumHeight(250)
win.resize(800, 800)
win.show()

data = np.random.normal(size=(200, 100))
data[20:80, 20:80] += 2.
data = pg.gaussianFilter(data, (3, 3))
data += np.random.normal(size=(200, 100)) * 0.1
img.setImage(data)
hist.setLevels(data.min(), data.max())

iso.setData(pg.gaussianFilter(data, (2, 2)))

img.scale(0.2, 0.2)
img.translate(-50, 0)

p1.autoRange()

def updatePlot():
    selected = roi.getArrayRegion(data, img)
    p2.plot(selected.mean(axis=0), clear=True)

roi.sigRegionChanged.connect(updatePlot)
updatePlot()

def updateIsocurve():
    iso.setLevel(isoLine.value())

isoLine.sigDragged.connect(updateIsocurve)

def imageHoverEvent(event):
    if event.isExit():
        p1.setTitle("")
        return
    pos = event.pos()
    i, j = pos.y(), pos.x()
    i = int(np.clip(i, 0, data.shape[0] - 1))
    j = int(np.clip(j, 0, data.shape[1] - 1))
    val = data[i, j]
    ppos = img.mapToParent(pos)
    x, y = ppos.x(), ppos.y()
    p1.setTitle(f"pos: ({x:.1f}, {y:.1f})  pixel: ({i}, {j})  value: {val}")

img.hoverEvent = imageHoverEvent

if __name__ == '__main__':
    import sys
    if (sys.flags.interactive != 1) or not hasattr(QtCore, 'PYQT_VERSION'):
        QtGui.QApplication.instance().exec_()
```

### 1. Ejecutarel script Python:

```bash
python3 test.py
```

### 2. Posible problema con el mouse y PyQtGraph

* Puede que experimentes que el mouse se "crashea" o se comporta erráticamente al ejecutar el script PyQtGraph en el escritorio del Raspberry Pi.

* **Solución rápida:** Deshabilita el escritorio gráfico para evitar conflictos.

### 3. Cómo deshabilitar el escritorio gráfico

Ejecuta:

```bash
sudo raspi-config
```

En el menú que aparece:

* Ve a: `Boot Options`

* Luego a: `Desktop / CLI`

* Selecciona: `Console Autologin`

Esto hará que el sistema arranque en modo consola, sin interfaz gráfica que pueda interferir.

### 4. Ventajas al usar modo consola

* El script PyQtGraph puede correr directo en el framebuffer `/dev/fb1` (la pantalla del Wio Terminal) sin que haya interferencia del entorno gráfico.

* Así el gráfico se muestra perfectamente sin problemas con mouse o interfaz.

### 5. Múltiples pantallas PyQtGraph

Puedes lanzar distintos scripts PyQtGraph en cada Wio Terminal conectado (cada uno mapeado a `/dev/fb1`, `/dev/fb2`, `/dev/fb3`, etc.) y tener interfaces independientes.

Ejemplo para lanzar en segunda pantalla:

```bash
export QT_QPA_PLATFORM=linuxfb:fb=/dev/fb2
python3 test_segunda_pantalla.py
```

### Recursos adicionales

* Documentación PyQtGraph: [https://pyqtgraph.readthedocs.io/en/latest/](https://pyqtgraph.readthedocs.io/en/latest/)

* Documentación de configuración `xorg.conf`: [https://www.x.org/releases/current/doc/man/man5/xorg.conf.5.xhtml](https://www.x.org/releases/current/doc/man/man5/xorg.conf.5.xhtml)

### Preguntas frecuentes

**Q:** Al conectar el Wio Terminal, la pantalla queda blanca.
**A:** Vuelve a compilar e instalar el driver USB display en Raspberry Pi:

```bash
cd ~/seeed-linux-usbdisp/drivers/linux-driver
make && sudo make install
sudo reboot
```

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
