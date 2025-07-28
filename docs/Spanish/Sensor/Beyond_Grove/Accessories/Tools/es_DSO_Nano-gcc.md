---
title: Compilar en DSO Nano usando gcc
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/DSO_Nano-gcc/
slug: /es/DSO_Nano-gcc
last_update:
  date: 07/14/2025
  author: Guillermo
---
# Cómo compilar el firmware del DSO Nano usando gcc

El firmware del [DSO Nano](/DSO_Nano "DSO Nano") puede compilarse con una herramienta gcc. Los archivos específicos para gcc residen en la carpeta project/gcc del árbol del código fuente del firmware.

## Obtener un toolchain gcc para compilación cruzada ARM

El toolchain ARM que la mayoría usamos es el GCC de ARM en <https://launchpad.net/gcc-arm-embedded>.

Para Linux, puedes elegir el tarball o el instalador. Este último es una descarga mucho más grande que el primero, por alguna razón. En cualquier caso, asegúrate de tener el directorio "bin" del toolchain en tu ruta (PATH). Por ejemplo, si extrajiste el tarball en /opt, escribe esto en tu consola o agrégalo a tu .bashrc o .pam_environment:

```
PATH=/opt/gcc-arm-none-eabi-4_6-2012q2/bin:$PATH
```

Una vez que tengas el toolchain configurado correctamente, simplemente escribir:

```
arm-none-eabi-gcc -v
```

debería listar la versión del compilador y las opciones con las que fue construido. Si en cambio obtienes un error, por favor corrige la instalación del toolchain antes de continuar.

Si no puedes encontrar un toolchain ARM precompilado para tu plataforma, o si quieres compilar el toolchain tú mismo, puedes descargar el código fuente o consultar [https://open-bldc.org/wiki/Building_ARM_Toolchain](https://open-bldc.org/wiki/Building_ARM_Toolchain)

## Obtener y compilar el código fuente del firmware

Por ahora, obtén el código desde el repositorio gitlab de Tormod:

```
git clone https://gitlab.com/dsonano/dso-firmware.git
cd dso-firmware
```

Si más tarde quieres actualizar tu copia al último código:

```
git pull
```

### Compilar la parte de la aplicación

```
cd DS0201_APP/project/gcc
make
```

### Compilar la parte de la biblioteca

```
cd ../../../DS0201_LIB/project/gcc
make clean
make
```

## Pruebas

Usa [Dfu-util](/Dfu-util "Dfu-util") para descargar los archivos dso-lib.bin y dso-app.bin a tu Nano V1 o V2. Para el modelo Nano V3, copia los archivos dso-lib.hex y dso-app.hex uno por uno a la unidad virtual USB DFU.

## Soporte técnico y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes opciones de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
