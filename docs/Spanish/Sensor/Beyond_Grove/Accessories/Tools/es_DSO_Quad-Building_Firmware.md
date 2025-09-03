---
title: DSO Quad:Building Firmware
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/DSO_Quad-Building_Firmware/
slug: /es/DSO_Quad-Building_Firmware
last_update:
  date: 07/14/2025
  author: Guillermo
---

## Compilando el firmware de DSO Quad desde el código fuente

Esta página actualmente solo contiene información para GCC en Debian. Por favor, agrega información sobre más entornos si sabes cómo configurarlos.

### Usando GCC y Debian

```
apt-get install --no-install-recommends  build-essential autoconf flex bison texinfo libncurses5-dev libgmp3-dev libmpfr-dev libmpc-dev libftdi-dev
 cd
 git clone [git://github.com/esden/summon-arm-toolchain.git](git://github.com/esden/summon-arm-toolchain.git)
 cd summon-arm-toolchain
 $EDITOR summon-arm-toolchain
```

..y asegúrate de que las siguientes configuraciones estén activas:

```
 TARGET=arm-none-eabi
 USE_LINARO=1
 LIBSTM32_EN=1
 DEFAULT_TO_CORTEX_M3=1
```

..luego:

```
 ./summon-arm-toolchain
```

La cadena de herramientas se instala en <tt>~/sat/</tt>. A continuación:

```
cd
 git clone [https://github.com/tmbinc/dsoquad](https://github.com/tmbinc/dsoquad)
 cd dsoquad/src/app
 PATH=$PATH:~/sat/bin make
```


Y entonces deberías encontrar archivos <tt>.hex</tt> en ese directorio listos para cargar.

#### Uso de espacio en disco

```
$ du -sh  summon-arm-toolchain/  sat/  dsoquad/
 117M    summon-arm-toolchain/
 229M    sat/
 1.9M    dsoquad/
```

## Soporte Técnico y Discusión del Producto

Si tienes algún problema técnico, por favor envía tu consulta a nuestro [foro](http://forum.seeedstudio.com/).  
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>