---
description: Build a HMI Display for Windows/MacOS using Wio Terminal
title: Construye un HMI Display para Windows/MacOS usando Wio Terminal
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-HMI-Usermode-SDK
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Construye un HMI Display para Windows/MacOS usando Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/banner.png" /></div>

En esta wiki, te mostraremos cómo usar el [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) como una pantalla HMI (Human Machine Interface) usando el **usermode SDK para Windows/Linux/Mac OS**. Esto amplía las posibilidades del Wio Terminal en aplicaciones industriales.

Si quieres usar el Wio Terminal como pantalla HMI con Raspberry Pi, consulta esta [wiki](https://wiki.seeedstudio.com/Wio-Terminal-HMI/).

## Hardware requerido

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## Firmware para Wio Terminal

Primero, debes cargar un programa Arduino en tu Wio Terminal desde tu PC.

- Descarga la librería [**Seeed_Arduino_USBDISP**](https://github.com/Seeed-Studio/Seeed_Arduino_USBDISP).

Hay dos ejemplos principales: `NullFunctional` y `USBDisplayAndMouseControl`:

1. Para **mayor tasa de refresco de pantalla**, carga el ejemplo **`NullFunctional`**.
2. Para que el Wio Terminal también funcione como ratón USB, carga **`USBDisplayAndMouseControl`**.

:::note
Para el usermode SDK, cambia `USBDISP().begin(true);` por `USBDISP().begin(true, true);` en el código.
:::

### Método `uf2`

Para mayor comodidad, también proporcionamos archivos `uf2` para flashear el firmware.

- Descarga [NullFunctional.uf2](http://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/NullFunctional-sdk.uf2).
- Descarga [USBDisplayAndMouseControl.uf2](https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/USBDisplayAndMouseControl-sdk.uf2).

Para entrar en modo bootloader, desliza rápidamente el interruptor de encendido dos veces. Para más información, visita [aquí](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq).

Aparecerá un disco externo llamado `Arduino` en tu PC. Arrastra el archivo `uf2` descargado dentro de esta unidad.

## Firmware para el dispositivo anfitrión (Host PC)

En este caso, el dispositivo anfitrión es tu PC. A continuación, te explicamos cómo usar el Wio Terminal como pantalla HMI con el usermode SDK.

### Para MacOS/Linux — SDK en C++

- Clona el repositorio del firmware:

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-usbdisp.git
```

* Entra en la ruta del usermode SDK:

```sh
cd ~/seeed-linux-usbdisp/drivers/usermode-sdk/rpusbdisp-drv/src
```

* Abre `rpusbdisp.cc` y define los macros según el firmware cargado en tu Wio Terminal (NullFunctional o USBDisplayAndMouseControl). Descomenta el que corresponda.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/macros.png" /></div>

* Regresa a la carpeta usermode-sdk:

```sh
cd ~/seeed-linux-usbdisp/drivers/usermode-sdk
```

* Compila y construye el driver:

```sh
make
```

* Entra a la carpeta de build:

```sh
cd ~/seeed-linux-usbdisp/drivers/usermode-sdk/build/
```

* Ejecuta el demo:

```sh
sudo ./rpusbdispdemo --demo 1
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/demo.gif" /></div>

Deberías ver cómo el Wio Terminal comienza a mostrar gráficos. El código fuente está en `seeed-linux-usbdisp/drivers/usermode-sdk/demo/src/main.cc`.

#### Soporte para múltiples pantallas

Este SDK en C++ soporta múltiples pantallas (varios Wio Terminal). Para usar 2 pantallas, ejecuta:

```sh
sudo ./rpusbdispdemo --demo 2
```

Hay demos para hasta 4 pantallas. Consulta el código fuente para adaptar a tus necesidades.

### Para Windows — SDK en Python

En Windows, puedes usar el SDK con Python. Asegúrate de tener Python instalado y luego instala la librería dependiente:

```sh
pip3 install pyusb
```

* Ve a la ruta del demo Python:

```sh
cd ~/seeed-linux-usbdisp/drivers/python-demo/
```

* Abre `simple-test.py` y define los macros que coincidan con el firmware de tu Wio Terminal, guarda el archivo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/macros-2.png" /></div>

* Ejecuta el demo:

```sh
python3 simple-test.py
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/simple-test.gif" /></div>

#### Soporte para múltiples pantallas

Este SDK en Python también soporta múltiples pantallas. Consulta `USBDisplay.py` para ejemplos.

Ejemplo para 4 pantallas:

```python
devices = list(usb.core.find(find_all=True, idVendor=0x2886, idProduct=0x802D))
dev1 = devices[0] # dispositivo 0
dev2 = devices[1] # dispositivo 1
dev3 = devices[2] # dispositivo 2
dev4 = devices[3] # dispositivo 3
```

## Demo simple

Este demo transfiere una imagen desde el PC al Wio Terminal usando Python.

* Ve a la ruta del demo:

```sh
cd ~/seeed-linux-usbdisp/drivers/python-demo/
```

* Descarga `image.jpg` y guárdalo en la misma carpeta que `image-test.py`.

**Nota:** Elige los macros que coincidan con el firmware de tu Wio Terminal, de lo contrario el programa fallará.

* Ejecuta el demo:

```sh
python3 image-test.py
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/image-demo.png" /></div>

## Recursos

* [Documento de protocolos de interfaz rpusbdisp](https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/rpusbdisp_interface_protocol.pdf)

## Soporte Técnico y Discusión de Producto

Gracias por elegir nuestros productos. Estamos aquí para ayudarte y ofrecer diferentes canales de soporte para garantizar una experiencia fluida con nuestros dispositivos.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
