---
description: One Stop Model Training with Edge Impulse
title: Entrenamiento de Modelos One Stop con Edge Impulse
keywords:
- Sensor Vision_AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/One-Stop-Model-Training-with-Edge-Impulse
last_update:
  date: 07/22/2025
  author: Guillermo
---

## Descripción general

En este wiki, te enseñaremos cómo entrenar tu propio modelo de IA para tu aplicación específica con **Edge Impulse** y luego desplegarlo fácilmente en el SenseCAP A1101 - Sensor IA de Visión LoRaWAN. ¡Comencemos!

:::tip
**¿Qué es Edge Impulse?**  
Edge Impulse es la plataforma de IA en el borde para equipos empresariales que construyen modelos optimizados en cualquier dispositivo edge. Entrega valor más rápido y logra innovación de productos con avanzadas funciones de IA para sensores.
:::

## Preparación de hardware

[Seeed SenseCAP A1101](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html) - **Sensor IA de Visión LoRaWAN** es un sensor de reconocimiento de imagen diseñado para desarrolladores. SenseCAP A1101 combina TinyML y transmisión LoRaWAN de largo alcance para ofrecer una solución de IA de bajo consumo y alto rendimiento, tanto en interior como en exterior.  
Este sensor integra la solución de visión IA de Himax, compatible con Google TensorFlow Lite y múltiples plataformas TinyML, y está totalmente soportado por Edge Impulse: podrás muestrear datos crudos de la cámara, construir modelos y desplegarlos al módulo directamente desde el estudio sin programación adicional.  

- SenseCAP A1101 – Sensor IA de Visión LoRaWAN  
- Cable USB tipo C  
- Windows/Linux/macOS con acceso a Internet  

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p1.jpg"/></div>

## Preparación de software

Para configurar este A1101 en Edge Impulse, instala lo siguiente:

1. [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation).  
2. En Linux:  
   - GNU Screen: por ejemplo `sudo apt install screen`.  
3. Descarga el último [Bouffalo Lab Dev Cube](https://dev.bouffalolab.com/download).

:::tip
**¿Problemas al instalar Edge Impulse CLI?**  
Consulta la [guía de instalación y solución de problemas](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation).
:::

## Conexión a Edge Impulse

Con todo el software instalado, es momento de conectar el A1101 a Edge Impulse.

:::caution **Nota:**  
Si compraste el dispositivo después del **30 de marzo de 2023**, no necesitas actualizar el firmware de EI; salta directamente a [PASO 3](#step-3-setting-keys) Configurar llaves. Recuerda que actualizar el firmware de EI sobrescribirá el modelo por defecto.  
:::

### Paso 1. Actualizar el firmware del chip BL702

BL702 es el chip USB-UART que habilita la comunicación entre el PC y el chip Himax. Debes actualizar este firmware para que funcione correctamente el firmware de Edge Impulse.

1. Descarga el bootloader más reciente de [aquí](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases): **tinyuf2-sensecap_vision_ai_xxx.bin**.  
2. Conecta el A1101 al PC con el cable USB tipo C manteniendo pulsado el botón **Boot** en el A1101.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p2.png"/></div>
<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p3.png"/></div>

3. Abre Bouffalo Lab Dev Cube, selecciona **BL702/704/706** y haz clic en **Finish**.

<div align="center"><img width="300" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p4.png"/></div>

4. Ve a la pestaña **MCU**. Bajo **Image file**, haz clic en **Browse** y selecciona el firmware descargado.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p5.png"/></div>

5. Haz clic en **Refresh**, elige el **Port** del A1101, activa **Chip Erase = True**, pulsa **Open UART**, luego **Create & Download** y espera a que finalice.

<div align="center"><img width="300" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p6.png"/></div>

Verás **All Success** si todo salió bien.

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p7.png"/></div>

:::note  
Si hay errores, vuelve a pulsar **Create & Download** hasta ver **All Success**.  
:::

### Paso 2. Actualizar el firmware de Edge Impulse

El A1101 no viene con el firmware de EI correcto. Para actualizarlo:

1. [Descarga el firmware de EI](https://files.seeedstudio.com/wiki/SenseCAP-A1101/ei_sensecap_vision_ai.uf2.zip) y extrae **firmware.uf2**.  
2. Conecta el A1101 al PC, pulsa dos veces el botón **Boot** para entrar en modo de almacenamiento masivo.  
3. Aparecerá la unidad **SENSECAP** en tu explorador. Arrastra y suelta **firmware.uf2** en ella.

<div align="center"><img width="300" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

Cuando termine de copiar, la unidad **SENSECAP** desaparecerá, indicando éxito.

### Paso 3. Configurar llaves {#step-3-setting-keys}

Desde una terminal, ejecuta:

```
edge-impulse-daemon
```

Esto iniciará un asistente que te pedirá iniciar sesión y seleccionar un proyecto de Edge Impulse. Si deseas cambiar de proyecto más adelante, ejecuta el comando con `--clean`.

De forma alternativa, las versiones recientes de Google Chrome y Microsoft Edge pueden recolectar datos directamente desde tu A1101, sin necesidad de usar Edge Impulse CLI. Consulta [esta entrada de blog](https://www.edgeimpulse.com/blog/collect-sensor-data-straight-from-your-web-browser) para más información.

### Paso 4. Verificar que el dispositivo esté conectado

¡Eso es todo! Tu dispositivo ahora está conectado a Edge Impulse. Para verificarlo, accede a [tu proyecto en Edge Impulse](https://studio.edgeimpulse.com/studio/select-project?autoredirect=1) y haz clic en **Devices**. Tu dispositivo aparecerá listado allí.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p9.png"/></div>

## Recolección de datos con el A1101 - Vision AI

Con todo listo, ahora puedes construir y ejecutar tu primer modelo de aprendizaje automático con estos tutoriales:

- [Detección de objetos](https://docs.edgeimpulse.com/docs/tutorials/object-detection).
- [Conteo de objetos con FOMO](https://docs.edgeimpulse.com/docs/tutorials/detect-objects-using-fomo).

Puedes capturar imágenes directamente desde la cámara del dispositivo a través del estudio:

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p16.png"/></div>

Finalmente, una vez entrenado el modelo, puede desplegarse fácilmente al módulo A1101 – Vision AI para comenzar con la inferencia.

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p17.png"/></div>

## Desplegar el modelo en el A1101 - Vision AI

Después de construir el modelo de aprendizaje automático y descargar el firmware desde Edge Impulse Studio, despliega el archivo `.uf2` al SenseCAP - Vision AI siguiendo los **pasos 1 y 2** de la sección [Actualizar firmware de Edge Impulse](https://docs.edgeimpulse.com/docs/development-platforms/officially-supported-mcu-targets/seeed-sensecap-a1101#2.-update-edge-impulse-firmware).  
Arrastra el archivo **firmware.uf2** desde EDGE IMPULSE a la unidad **SENSECAP**.

Luego, en tu terminal local, ejecuta:

```
edge-impulse-daemon --debug
```

Te pedirá hacer clic en una URL, y luego verás una vista previa en vivo de la cámara en tu dispositivo.

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/p33.png"/></div>

## Configura tu modelo con SenseCAP Mate

- Descarga [SenseCAP Mate](https://wiki.seeedstudio.com/Cloud_Chain/SenseCAP_Mate_APP/SenseCAP_APP/#docusaurus_skipToContent_fallback)  
   - [Android](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate&hl=en&gl=US)  
   - [iOS](https://apps.apple.com/gb/app/sensecap-mate/id1619944834)  
- Abre SenseCAP Mate e inicia sesión

<div align="center"><img width="600" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p10.png"/></div>

- En la pantalla **Config**, selecciona **Vision AI Sensor**

<div align="center"><img width="300" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p11.jpg"/></div>

- Mantén presionado el botón de configuración del SenseCAP A1101 durante 3 segundos para entrar en modo de emparejamiento Bluetooth

<div align="center"><img width="300" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p12.jpg"/></div>
<div align="center"><img width="300" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p13.jpg"/></div>

- Haz clic en **Setup** y comenzará a escanear dispositivos SenseCAP A1101 cercanos  
  Ve a **Settings** y asegúrate de que estén seleccionados **Object Detection** y **User Defined 1**. Si no están seleccionados, selecciónalos y haz clic en **Send**

<div align="center"><img width="300" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p14.jpg"/></div>

- Ve a **General** y haz clic en **Detect**

<div align="center"><img width="300" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p15.jpg"/></div>

- [Haz clic aquí](https://files.seeedstudio.com/grove_ai_vision/index.html) para abrir una ventana de vista previa de la cámara

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/p31.png"/></div>

- Haz clic en el botón **Connect**. Aparecerá una ventana emergente en el navegador. Selecciona **SenseCAP Vision AI - Paired** y haz clic en **Connect**

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/p32.png"/></div>

- ¡Visualiza los resultados de inferencia en tiempo real en la ventana de vista previa!

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/33.png"/></div>

Por ejemplo, como se muestra arriba, los gatos están siendo detectados con recuadros alrededor. Aquí, **"0"** corresponde a cada detección de la misma clase. Si tienes múltiples clases, se etiquetarán como 0, 1, 2, 3, 4, y así sucesivamente. Además, se muestra la puntuación de confianza para cada detección (por ejemplo, **0.72** en la demostración anterior).

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos canales de soporte y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos múltiples vías de comunicación que se adaptan a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
