---
description: Esta wiki demuestra la implementación de detección de armas basada en el NVR Frigate y la caja de IA reComputer.
title: Detección de armas de fuego con NVR Frigate en R2000
keywords:
  - Raspberry pi
  - Edge AI Computer
  - reComputer r2130
  - Object detecton
  - Frigate
image: https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/setting_3.webp
slug: /es/firearm_detection_with_frigate_nvr_on_r2000
last_update:
  date: 08/12/2025
  author: Nolan Chen

no_comments: false # for Disqus
---

# Detección de armas de fuego con NVR Frigate en R2000

## Introducción

**Frigate NVR** es un grabador de video en red de código abierto diseñado para análisis de video en tiempo real con IA en el borde. Desplegado en una **caja de IA reComputer** con Hailo, el sistema ingiere localmente múltiples flujos de cámara, ejecuta un modelo cuantitativo de detección de objetos y emite eventos MQTT en milisegundos, eliminando la latencia de la nube y los costos de ancho de banda.

Para este despliegue, expandimos la biblioteca de modelos existente de Frigate y agregamos un modelo personalizado **yolov11s** específicamente ajustado para el reconocimiento de pistolas y rifles. Cuando se detecta un arma de fuego, el motor de reglas de Frigate inmediatamente activa una alerta, dando a los equipos de seguridad segundos preciosos para bloquear el área y coordinar una respuesta antes de que la amenaza escale.

## Prerrequisitos

### Requisitos de Hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>reComputer AI Industrial R2000</th>
         <th>reComputer AI R2000</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114993595-recomputer-ai-industrial-r2135-12.jpg" style={{width:250, height:'auto'}}/></div></td>
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2135-12-p-6432.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Configurando Frigate

### Modificando la Configuración PCIe

Abriendo `config.txt`:

```bash
sudo nano /boot/firmware/config.txt
```

Añade lo siguiente a `config.txt`:

```bash
dtparam=pciex1_gen=3
dtoverlay=pciex1-compat-pi5,no-mip
```

Luego guarda el archivo usando `Ctrl+x` y reinicia la caja de IA.

### Instalar Docker y hailo-all

```bash
sudo apt update
sudo apt install hailo-all
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
sudo apt install docker-compose-plugin
```

### Creando un archivo yml

Crea el archivo `frigate.yml` para que Docker Compose pueda ejecutar Frigate.

```bash
cd ~
sudo nano frigate.yml
```

Aquí hay un ejemplo de `frigate.yml`:

```bash
services:
  frigate-hailo:
    container_name: frigate-hailo
    privileged: true
    restart: unless-stopped
    image: ghcr.io/blakeblackshear/frigate:0.16.0-beta3-standard-arm64
    shm_size: "512mb" # calculate on your own
    stop_grace_period: 30s # allow enough time to shut down the various services
    devices:
      - /dev/hailo0:/dev/hailo0
      - /dev/video19:/dev/video19  # USB camera (physical device)
      - /dev/video20:/dev/video20  # USB camera backup device
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - ./config/:/config
      - ./data/db/:/data/db
      - ./data/storage:/media/frigate
      - ./media:/media/frigate  # Mapping local media files to the container
      - type: tmpfs
        target: /tmp/cache
        tmpfs:
          size: 1g
    ports:
      - 5000:5000
    environment:
      - FRIGATE_RTSP_PASSWORD=password
      - LIBVA_DRIVER_NAME=i965
    group_add:
      - "44"  # video group
```

Descarga el video del caso:

```bash
mkdir media && cd media
wget -c \
"https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/model_cache/yolov11s.hef"
```

Descarga el modelo YOLO y crea config.yml:

```bash
cd .. && mkdir config && cd config && mkdir model_cache
cd model_cache && wget https://hailo-model-zoo.s3.eu-west-2.amazonaws.com/ModelZoo/Compiled/v2.14.0/hailo8/yolov8n.hef
cd .. && nano config.yml
```

El siguiente es un ejemplo de config.yml:

```bash
database:
  path: /data/db/frigate.db

go2rtc:
  streams:
    # USB camera streaming
    usb_camera:
      - "ffmpeg:/dev/video0#input=-f v4l2 -input_format mjpeg -video_size 640x480 -framerate 15"
    
    # RTSP stream configuration

    hikvision_main:
      - "rtsp://admin:password@192.168.1.100:554/h264/ch1/main/av_stream"
    
    # Video file streaming - close.mp4
    video_files_close:
      - "ffmpeg:/media/frigate/close.mp4"
    
    # Video file streaming - close2.mp4
    video_files_close2:
      - "ffmpeg:/media/frigate/close2.mp4"
    
    # Video file streaming - y4.mp4
    video_files_y4:
      - "ffmpeg:/media/frigate/y4.mp4"
    
    # Video file streaming - y5.mp4
    video_files_y5:
      - "ffmpeg:/media/frigate/y5.mp4"

cameras:
  # USB camera
  usb_camera:
    ffmpeg:
      inputs:
        - path: /dev/video0
          input_args: -f v4l2 -input_format mjpeg -video_size 640x480 -framerate 15
          roles:
            - record
            - detect
    detect:
      width: 640
      height: 480
      fps: 3
    record:
      enabled: true
      retain:
        days: 7
        mode: motion
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 10
          max_area: 100000
          threshold: 0.25

  # Video file camera - close.mp4
  video_files_close:
    ffmpeg:
      inputs:
        - path: /media/frigate/close.mp4
          input_args: -stream_loop -1 -re
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
      fps: 2
    record:
      enabled: false
      retain:
        days: 3
        mode: all
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 20
          max_area: 500000
          threshold: 0.25

  # Video file camera - close2.mp4
  video_files_close2:
    ffmpeg:
      inputs:
        - path: /media/frigate/close2.mp4
          input_args: -stream_loop -1 -re
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
      fps: 2
    record:
      enabled: false
      retain:
        days: 3
        mode: all
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 20
          max_area: 500000
          threshold: 0.25

  # Video file camera - y4.mp4
  video_files_y4:
    ffmpeg:
      inputs:
        - path: /media/frigate/y4.mp4
          input_args: -stream_loop -1 -re
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
      fps: 3
    record:
      enabled: true
      retain:
        days: 3
        mode: all
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 10
          max_area: 500000
          threshold: 0.3

  # Video file camera - y5.mp4
  video_files_y5:
    ffmpeg:
      inputs:
        - path: /media/frigate/y5.mp4
          input_args: -stream_loop -1 -re
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
      fps: 3
    record:
      enabled: true
      retain:
        days: 3
        mode: all
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 10
          max_area: 500000
          threshold: 0.25

  # RTSP IP camera - hikvision
  hikvision_main:
    ffmpeg:
      inputs:
        - path: rtsp://admin:password@192.168.1.100:554/h264/ch1/main/av_stream
          input_args: -rtsp_transport tcp -avoid_negative_ts make_zero
          roles:
            - detect
            - record
    detect:
      width: 1920
      height: 1080
      fps: 3
    record:
      enabled: true
      retain:
        days: 7
        mode: motion
    objects:
      track:
        - gun
      filters:
        gun:
          min_area: 20
          max_area: 500000
          threshold: 0.25

mqtt:
  enabled: false

objects:
  track:
    - gun
  filters:
    gun:
      min_area: 10
      max_area: 500000
      threshold: 0.25

detectors:
  hailo8l:
    type: hailo8l
    device: PCIe

model:
  width: 640
  height: 640
  input_tensor: nhwc
  input_pixel_format: rgb
  input_dtype: int
  model_type: yolo-generic
  path: /config/model_cache/yolov11s.hef
  labelmap:
    0: person
    1: gun

detect:
  enabled: true

snapshots:
  enabled: true
  clean_copy: true
  timestamp: true
  bounding_box: true
  crop: false
  retain:
    default: 14
  quality: 95

record:
  enabled: true
  retain:
    days: 30
    mode: all

ui:
  timezone: Asia/Shanghai

auth:
  enabled: false

live:
  height: 720
  quality: 8

birdseye:
  enabled: true
  width: 1280
  height: 720
  quality: 8
  mode: objects
version: 0.16-0
semantic_search:
  enabled: false
  reindex: false
  model_size: small
face_recognition:
  enabled: false
lpr:
  enabled: false
```

## Ejecutar el proyecto

Descargar y ejecutar el proyecto:

```bash
cd ~
sudo docker pull mjqx2023/frigate_seeed
docker compose -f frigate.yml up -d
```

Luego abre **localhost:5000** en el navegador web de la caja AI:

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/first.png"
    style={{ width: 1000}}
  />
</div>

Selecciona uno de los videos para comenzar la depuración, selecciona la caja de visualización, y los resultados se mostrarán automáticamente:

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/setting_1.png"
    style={{ width: 1000}}
  />
</div>

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/setting_2.png"
    style={{ width: 1000}}
  />
</div>

Cambia de pestañas para ver los resultados de pruebas anteriores:

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/setting_3.png"
    style={{ width: 1000}}
  />
</div>

## Resultado

Cuando ve a alguien sosteniendo un arma, el modelo la identificará y la seleccionará.
Cambia al modo de depuración, selecciona la caja de visualización, y los resultados se mostrarán automáticamente; cambia de pestañas para ver los resultados de detección anteriores.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/gun_detection_gif.gif" alt="pir" width={1000} height="auto"/></p>

## Otras configuraciones

| Configuración de otras fuentes de video | Configuración de velocidad de fotogramas|
|--------------------------|--------------------|
| Frigate soporta RTSP, transmisión de video y cámaras USB. Una vez que el archivo de configuración esté configurado, tomará efecto después del reinicio.                | El archivo de configuración puede configurar la velocidad de fotogramas de detección de cada cámara, lo cual tomará efecto después del reinicio.|
| Puedes acceder a las opciones de configuración en Configuración, como cambiar la ruta RTSP para conectar a una cámara RTSP. Una vez que hayas hecho cambios, haz clic en Guardar y Reiniciar en la esquina superior derecha para que los cambios tomen efecto.| ![page](https://files.seeedstudio.com/wiki/reComputer/Application/Firearm_Detection_With_Frigate_NVR_on_R2130/other.png)|

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
