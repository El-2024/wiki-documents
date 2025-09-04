---
description: Este wiki demuestra cómo usar clip en raspberry pi5 con AI kit.
title: Aplicación Clip en Raspberry Pi con AI Kit
keywords:
  - Edge
  - reComputer r1000
  - Object detecton
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/clip_application_on_rpi5_with_ai_kit
last_update:
  date: 09/27/2024
  author: Jiahao

no_comments: false # for Disqus
---

# Aplicación Clip en Raspberry Pi con AI Kit

## Introducción

[CLIP](https://github.com/openai/CLIP)(Contrastive Language-Image Pre-Training) es una red neuronal entrenada en una variedad de pares (imagen, texto). Puede ser instruida en lenguaje natural para predecir el fragmento de texto más relevante, dada una imagen, sin optimizar directamente para la tarea, de manera similar a las capacidades zero-shot de GPT-2 y 3. Encontramos que CLIP iguala el rendimiento del ResNet50 original en ImageNet "zero-shot" sin usar ninguno de los 1.28M ejemplos etiquetados originales, superando varios desafíos importantes en visión por computadora.

Este wiki te enseñará cómo desplegar la aplicación clip en una [Raspberry Pi5](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html) o [Recomputer r1000](https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html), clip realizará inferencia en [AI kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html).

## Preparar Hardware

### Para Recomputer R1000

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer r1000</th>
  <th>Raspberry Pi AI Kit</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113060086-raspberry-pi-ai-kit-all.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Para Raspberry Pi 5

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2130</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Instalar el Software de Hailo y Verificar la Instalación

### actualizar el sistema

```
sudo apt update
sudo apt full-upgrade
```

:::note
A veces puedes encontrarte con los siguientes problemas durante las actualizaciones:

```

Get:1 [http://deb.debian.org/debian](http://deb.debian.org/debian) bookworm InRelease [151 kB]
Get:2 [http://deb.debian.org/debian-security](http://deb.debian.org/debian-security) bookworm-security InRelease [48.0 kB]
Get:3 [http://deb.debian.org/debian](http://deb.debian.org/debian) bookworm-updates InRelease [55.4 kB]
Get:4 [http://archive.raspberrypi.com/debian](http://archive.raspberrypi.com/debian) bookworm InRelease [39.0 kB]
Reading package lists... Done
E: Release file for [http://deb.debian.org/debian/dists/bookworm/InRelease](http://deb.debian.org/debian/dists/bookworm/InRelease) is not valid yet (invalid for another 58d 8h 26min 35s). Updates for this repository will not be applied.
E: Release file for [http://deb.debian.org/debian-security/dists/bookworm-security/InRelease](http://deb.debian.org/debian-security/dists/bookworm-security/InRelease) is not valid yet (invalid for another 84d 18h 23min 59s). Updates for this repository will not be applied.
E: Release file for [http://archive.raspberrypi.com/debian/dists/bookworm/InRelease](http://archive.raspberrypi.com/debian/dists/bookworm/InRelease) is not valid yet (invalid for another 84d 13h 13min 5s). Updates for this repository will not be applied.
E: Release file for [http://deb.debian.org/debian/dists/bookworm-updates/InRelease](http://deb.debian.org/debian/dists/bookworm-updates/InRelease) is not valid yet (invalid for another 85d 0h 52min 29s). Updates for this repository will not be applied.

```

Esto ocurre porque la hora en la Raspberry Pi está configurada incorrectamente. Necesitas establecer manualmente la hora en la Raspberry Pi con el siguiente comando:

```

# Este comando requiere que puedas conectarte a google.com

sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"

```

Después de configurar la hora correctamente, podrás actualizar tu Raspberry Pi.
:::

### Configurar pcie a gen2/gen3 (gen3 es más rápido que gen2)

Añade el siguiente texto a ```/boot/firmware/config.txt```

```
#Enable the PCIe external connector

dtparam=pciex1

#Force Gen 3.0 speeds

dtparam=pciex1_gen=3

```

:::note
Si deseas utilizar gen2, por favor comenta la línea `dtparam=pciex1_gen=3`.
:::

### Instalar hailo-all y reiniciar

Abre la terminal en la Raspberry Pi5, e ingresa el comando como se muestra a continuación para instalar el software Hailo.

```
sudo apt install hailo-all
sudo apt-get -y install libblas-dev nlohmann-json3-dev
sudo reboot
```

### Verificar Software y Hardware

Abre la terminal en la Raspberry Pi5, e ingresa el comando como se muestra a continuación para verificar si hailo-all ha sido instalado.

```
hailortcli fw-control identify
```

El resultado correcto se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Abre la terminal en la Raspberry Pi5, e ingresa el comando como se muestra a continuación para verificar si hailo-8L ha sido conectado.

```
lspci | grep Hailo
```

El resultado correcto se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

## Ejecutar Proyecto

### Instalar Proyecto

```
git clone https://github.com/hailo-ai/hailo-CLIP.git
cd hailo-CLIP
./install.sh
```

### Ejecutar el proyecto

Ingresa el comando a continuación y verás una demostración de clip:

```
 source setup_env.sh
 clip_app --input demo
```

Y si quieres usar tu cámara, debes ingresar el comando a continuación después de asegurarte de que la raspberry esté conectada a tu propia cámara:

```
clip_app --input /dev/video0
```

## Resultado

En el video que se muestra a continuación, puedes ver que cuando ingreso "banana," el modelo CLIP reconoce un plátano, y cuando ingreso "apple," el modelo reconoce una manzana. Solo necesitas ingresar diferentes palabras, y el modelo CLIP reconocerá diferentes objetos.

<iframe width="800" height="400" src="https://www.youtube.com/embed/JMHtqSmAGCA" title="CLIP Zero Shot Classification on Raspberry Pi 5 with Hailo AI Accelerator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
