---
title: Resumen
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/
slug: /es/Wio-Terminal-Network-Overview
last_update:
  date: 07/27/2025
  author: Guillermo
---
# Resumen

Este wiki explica cómo actualizar el firmware más reciente del núcleo inalámbrico Realtek RTL8720 en el Wio Terminal, así como instalar todas las librerías dependientes para habilitar la conectividad inalámbrica.

## Actualizar el firmware del núcleo inalámbrico

Primero, necesitamos actualizar el firmware del núcleo inalámbrico Realtek RTL8720 en el Wio Terminal. **Esto es esencial y se debe actualizar al firmware más reciente antes de continuar con los ejemplos.**

<div style={{ display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', width: '100%' }}>
  <div style={{ display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, width: 38, textAlign: 'center' }}>
    <img
      style={{ width: 26, verticalAlign: 'middle' }}
      src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg"
      alt="icono de atención"
    />
  </div>
  <div style={{ display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15 }}>
    <p style={{ color: '#000000', fontWeight: 'bold', margin: '10px 0 0' }}>Atención</p>
    <p style={{ color: '#000000', fontSize: 14, margin: 0 }}>
      ¡Por favor actualiza el núcleo Wi-Fi antes de usar!
    </p>
  </div>
</div>

### Paso 1 - Borrar el firmware inicial de fábrica

Cuando recibes el Wio Terminal por primera vez, debes borrar el firmware inicial del RTL8720 y flashear el firmware más reciente. Hemos preparado una herramienta llamada **ambd\_flash\_tool**, que primero habilita una conexión serial desde el SAMD51 al RTL8720 para instalar el firmware en el RTL8720, porque no se puede comunicar directamente con este chip. Después, esta herramienta permite borrar el firmware existente y flashear el firmware más reciente.

**NOTA:** Solo es necesario borrar el firmware de fábrica la primera vez. Después puedes flashear nuevo firmware para sobrescribir el existente.

#### Para Windows

* **PASO 1:** Abre **Windows PowerShell** en tu PC y ejecuta los siguientes comandos para descargar la herramienta de flasheo

```sh
cd ~
git clone https://github.com/Seeed-Studio/ambd_flash_tool
```

**NOTA:** El comando `cd ~` te dirige a tu carpeta de usuario y `git clone` descarga el repositorio desde GitHub.

* **PASO 2:** Navega al directorio **ambd\_flash\_tool**

```sh
cd ambd_flash_tool
```

* **PASO 3:** Conecta el Wio Terminal a la PC y enciéndelo

* **PASO 4:** Ejecuta el siguiente comando para borrar el firmware inicial

```sh
.\ambd_flash_tool.exe erase
```

**NOTA:** El proceso de borrado puede tardar. Por favor espera y **no cierres la ventana**.

> ¡El puerto serial conectado del Wio Terminal se detectará automáticamente!

**NOTA:** Para ver la ayuda de la herramienta, ejecuta `.\ambd_flash_tool.exe`

<p style={{ textAlign: 'center' }}>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ambd_tool_win_2.png" alt="imagen herramienta Windows" width="700" />
</p>

#### Para Mac/Linux

* **PASO 1:** Abre **Terminal** en Mac/Linux y ejecuta los siguientes comandos para descargar la herramienta de flasheo

```sh
cd ~
git clone https://github.com/Seeed-Studio/ambd_flash_tool
```

**NOTA:** El comando `cd ~` te dirige a tu carpeta de usuario y `git clone` descarga el repositorio desde GitHub.

* **PASO 2:** Navega al directorio **ambd\_flash\_tool**

```sh
cd ambd_flash_tool
```

* **PASO 3:** Conecta el Wio Terminal a la PC y enciéndelo

* **PASO 4:** Ejecuta el siguiente comando para borrar el firmware inicial

```sh
python3 ambd_flash_tool.py erase
```

**NOTA:** Asegúrate de tener instalado **Python 3 en tu Mac/Linux**; el script descargará automáticamente las librerías dependientes.

> Si en tu sistema solo tienes Python 3 disponible como `python`, reemplaza `python3 ambd_flash_tool.py` por `python ambd_flash_tool.py`

**NOTA:** El proceso de borrado puede tardar. Por favor espera y **no cierres la ventana**.

> ¡El puerto serial conectado del Wio Terminal se detectará automáticamente!

**NOTA:** Para ver la ayuda de la herramienta, ejecuta `python3 ambd_flash_tool.py`

<p style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ambd_tool_linux.png"
    alt="imagen herramienta Linux"
    width="750"
  />
</p>

### Paso 2 - Flashear el firmware más reciente

#### Para Windows

* Dentro del directorio **ambd\_flash\_tool**, ejecuta el siguiente comando para flashear el **firmware más reciente** en el RTL8720

```sh
.\ambd_flash_tool.exe flash
```

#### Para Mac/Linux

* Dentro del directorio **ambd\_flash\_tool**, ejecuta el siguiente comando para flashear el **firmware más reciente** en el RTL8720

```sh
python3 ambd_flash_tool.py flash
```

### Flashear un firmware antiguo (Opcional)

Si deseas probar tu código con una versión antigua del firmware, sigue estos pasos. Si prefieres usar el firmware más reciente, puedes omitir este paso y seguir directamente el **Paso 2**.

#### Para Windows

* **PASO 1:** Visita el repositorio [**RTL8720 Firmware**](https://github.com/Seeed-Studio/seeed-ambd-firmware/releases) en GitHub

* **PASO 2:** Elige una versión de lanzamiento y descarga el archivo **xxx-seeed-ambd-firmware-rpc-vxxx.zip**

* **PASO 3:** Navega al directorio **ambd\_flash\_tool** y ejecuta el siguiente comando

```sh
.\ambd_flash_tool.exe flash -d [ruta-del-firmware-RTL8720]
```

**NOTA:** Reemplaza `[ruta-del-firmware-RTL8720]` por la ruta donde descargaste y descomprimiste el firmware. La carpeta debe contener estos 3 archivos: `km0_boot_all.bin`, `km0_km4_image2.bin` y `km4_boot_all.bin`.

Si todo sale bien, verás un mensaje de éxito y habrás flasheado el firmware en el núcleo RTL8720.

#### Para Mac/Linux

* **PASO 1:** Visita el repositorio [**RTL8720 Firmware**](https://github.com/Seeed-Studio/seeed-ambd-firmware/releases) en GitHub

* **PASO 2:** Elige una versión de lanzamiento y descarga el archivo **xxx-seeed-ambd-firmware-rpc-vxxx.zip**

* **PASO 3:** Navega al directorio **ambd\_flash\_tool** y ejecuta el siguiente comando

```sh
python3 ambd_flash_tool.py flash -d [ruta-del-firmware-RTL8720]
```

**NOTA:** Reemplaza `[ruta-del-firmware-RTL8720]` por la ruta donde descargaste y descomprimiste el firmware. La carpeta debe contener estos 3 archivos: `km0_boot_all.bin`, `km0_km4_image2.bin` y `km4_boot_all.bin`.

Si todo sale bien, verás un mensaje de éxito y habrás flasheado el firmware en el núcleo RTL8720.

## Verificar versión del firmware RTL8720 desde Arduino IDE

Después de instalar el firmware, puedes verificar si fue instalado correctamente subiendo el siguiente código al Wio Terminal desde **Arduino IDE**

```cpp
#include "rpcWiFi.h"
#include <erpc/erpc_port.h>
 
void setup() {
    Serial.begin(115200);
    while(!Serial); // Esperar que se abra el Monitor Serial
    char* version = rpc_system_version();
    Serial.print("Versión del firmware RTL8720: ");
    Serial.println(version);
    erpc_free(version);
}
 
void loop() {
}
```

Al abrir el **Monitor Serial**, deberías ver impresa la **versión del firmware**.

## Actualizar Seeed SAMD ArduinoCore

* **PASO 1:** Abre el **Arduino IDE**, y haz clic en `Tools` -> `Board` -> `Boards Manager`, y busca **Wio Terminal**

* **PASO 2:** Asegúrate de tener instalada la versión más reciente (1.8.1). Si no, selecciona la versión más nueva en el menú desplegable y haz clic en `Install`.

<p style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/ArduinoCore_new.png"
    alt="ArduinoCore"
    width="850"
  />
</p>

> También puedes consultar el código fuente del Seeed SAMD ArduinoCore [**aquí**](https://github.com/Seeed-Studio/ArduinoCore-samd).

## Instalación de librerías

Hay varias librerías Arduino necesarias para la conectividad inalámbrica. Hemos incluido todas las librerías relacionadas con Wi-Fi para el Wio Terminal en el **Arduino Library Manager**, así que solo debes abrirlo dentro del IDE y buscar las librerías que necesites para instalarlas fácilmente.

### Cómo instalar una librería desde el Arduino Library Manager

* **PASO 1:** Abre el **Arduino IDE**, y haz clic en `Sketch` -> `Include Library` -> `Manage Libraries...`

* **PASO 2:** Escribe el **nombre de la librería** que necesites y selecciona la **versión más reciente** del menú desplegable (si está disponible)

* **PASO 3:** Haz clic en **Install**

<p style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/library_install_1.jpg"
    alt="Instalación de librerías"
    width="870"
  />
</p>

### Librerías necesarias para Wi-Fi

Necesitas las siguientes librerías para comenzar a usar Wi-Fi en el Wio Terminal. Puedes buscarlas por nombre en el Arduino Library Manager.

Para tu comodidad, hemos agrupado todas estas librerías. Por ello, para futuras actualizaciones solo necesitas instalar `rpcwifi` y se instalarán todas las librerías dependientes de Wi-Fi automáticamente.

* [**Seeed\_Arduino\_rpcWiFi**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcWiFi) – busca `"seeed rpcwifi"`

* [**Seeed\_Arduino\_rpcUnified**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcUnified) – busca `"seeed rpcunified"`

* [**Seeed\_Arduino\_mbedtls**](https://github.com/Seeed-Studio/Seeed_Arduino_mbedtls) – busca `"seeed mbedtls"`

* [**Seeed\_Arduino\_FS**](https://github.com/Seeed-Studio/Seeed_Arduino_FS) – busca `"seeed fs"`

* [**Seeed\_Arduino\_SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD) – busca `"seeed sfud"`

<p style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/newliarary.png"
    alt="Librerías Wi-Fi"
    width="700"
  />
</p>

## Lanzamientos

<table align="center">
  <tbody><tr>
      <td align="center">Fecha de actualización</td>
      <td align="center">Autor</td>
      <td align="center">Detalle</td>
    </tr>
    <tr>
      <td align="center">10.12</td>
      <td align="center">BILL y LAKSHANTHA</td>
      <td align="center">Agrupación de todas las librerías requeridas</td>
    </tr>
  </tbody></table>

## Soporte Técnico y Discusión de Productos

Si tienes algún problema técnico, por favor envía tu consulta a nuestro [foro](http://forum.seeedstudio.com/).
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
