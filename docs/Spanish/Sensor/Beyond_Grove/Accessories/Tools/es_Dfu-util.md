---
title: Dfu-util
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Dfu-util/
slug: /es/Dfu-util
last_update:
  date: 07/14/2025
  author: Guillermo
---

## Actualización de firmware con dfu-util

Necesitarás **dfu-util versión 0.5 o superior** para cargar archivos `.dfu` al [DSO Nano](/DSO_Nano "DSO Nano").  
Las versiones anteriores de dfu-util **no funcionarán**. El DSO Nano, al igual que muchos otros dispositivos basados en microcontroladores de ST Micro, utiliza extensiones DFU propias de ST (DfuSe), las cuales **no son compatibles** con el estándar DFU.

Puedes encontrar un paquete de dfu-util 0.8 para Ubuntu 10.04 en el [PPA de Tormod](https://launchpad.net/~tormodvolden/+archive/ppa/+packages?field.series_filter=lucid).  
Solo descarga e instala el paquete `.deb` correspondiente. Este mismo paquete debería funcionar también en versiones posteriores de Ubuntu o en Debian unstable.  
Para otros sistemas operativos, es posible que tengas que compilar dfu-util tú mismo, como se describe en la página oficial de dfu-util.

Para cargar un archivo de firmware `.dfu` desde tu computadora al Nano, ejecuta este comando:

```
dfu-util -a 0 -D your-firmware-file.dfu
```

Es posible que necesites ejecutarlo varias veces hasta que se complete con éxito.
Si obtienes errores de “permiso denegado”, antepone sudo al comando:

## Cargar un archivo que no es DfuSe a un dispositivo DfuSe (avanzado)

Un dispositivo DFU estándar aceptará un archivo binario sin formato (.bin) desde la computadora y lo cargará en la ubicación correcta de la memoria flash.
En cambio, con DfuSe, las direcciones están definidas por el archivo .dfu, por lo que la computadora debe indicarle al dispositivo dónde debe cargarse.

Para cargar un archivo binario sin formato en un dispositivo DfuSe, debes conocer la dirección de destino.

Ejemplo (para desarrolladores):

```
dfu-util -a 0 --dfuse-address 0x08004000 -D your-lib.bin
dfu-util -a 0 --dfuse-address 0x0800C000 -D your-app.bin
```

## Cómo compilar dfu-util desde el código fuente

Consulta las [instrucciones de compilación](http://dfu-util.sourceforge.net/build.html) en la página oficial de dfu-util.

## Enlaces

**Publicaciones originales del foro y discusiones:**

- [Procedimiento en Linux](https://forum.seeedstudio.com/viewtopic.php?f=12&amp;t=1353&amp;start=10)

- [Instrucciones específicas para macOS](https://forum.seeedstudio.com/viewtopic.php?f=12&amp;t=1364)

**Sitio oficial:**

- [Página principal de dfu-util](http://dfu-util.sourceforge.net/)

## Soporte técnico y discusión de producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte distintas formas de soporte y asegurarnos de que tu experiencia con nuestros dispositivos sea lo más fluida posible.  
Ofrecemos múltiples canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
