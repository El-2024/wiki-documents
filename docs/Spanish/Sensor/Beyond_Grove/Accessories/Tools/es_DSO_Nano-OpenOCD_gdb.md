---
title: Depuración de DSO Nano con OpenOCD y gdb
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/DSO_Nano-OpenOCD_gdb/
slug: /es/DSO_Nano-OpenOCD_gdb
last_update:
  date: 07/14/2025
  author: Guillermo
---

# Depuración con OpenOCD y gdb

Por favor, utiliza OpenOCD versión 4.0 o superior.

Este ejemplo asume que tienes un adaptador JTAG compatible con Segger J-Link entre tu computadora y el dispositivo (o placa de desarrollo) que estás depurando. También es posible usar un adaptador SWD (ST-Link); para esto usa OpenOCD versión 0.7 o superior.

Inicia el servidor OpenOCD con los archivos de configuración que correspondan a tu hardware:

```
openocd -f interface/jlink.cfg -f target/stm32.cfg
```

O, si usas SWD:

```
openocd -f interface/stlink-v2.cfg -f target/stm32f1x_stlink.cfg
```

En una segunda ventana, inicia una sesión interactiva con OpenOCD:

```
telnet localhost 4444
```

Esto parece necesario para evitar errores como "target is not halted" y otros problemas posteriores:

```
reset_config trst_and_srst
```

Detén el target (el procesador ARM):

```
reset halt
```

Si aún no has cargado el binario, por ejemplo con dfu-util, puedes hacerlo vía JTAG así:

```
reset init
flash write_image erase dso-lib.hex 0 ihex
reset halt
```

En una tercera ventana, inicia gdb o gdbtui:

```
arm-none-eabi-gdb
(gdb) file dso-lib.elf
(gdb) target remote localhost:3333"
(gdb) load dso-lib.elf
```

Ahora deberías poder ejecutar y depurar:

```
(gdb) set $pc = Reset_Handler
(gdb) display/i $pc
(gdb) stepi
```

## Soporte técnico y discusión de productos

Si tienes algún problema técnico, por favor envía tu consulta a nuestro [foro](http://forum.seeedstudio.com/).  
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes opciones de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>