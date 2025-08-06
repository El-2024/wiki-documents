---
title: WT OTA para Blynk
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Blynk-wireless-OTA-functionality-to-Wio-Terminal/
slug: /es/Blynk-wireless-OTA-functionality-to-Wio-Terminal
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Uso de la funcionalidad OTA inalámbrica de Blynk con Wio Terminal

En este wiki describiremos cómo usar la funcionalidad OTA inalámbrica de Blynk con Wio Terminal.

- **¿Qué es Blynk?**

[**Blynk**](https://blynk.io/) es una nueva plataforma que te permite construir rápidamente interfaces para controlar y monitorear tus proyectos de hardware desde tu dispositivo iOS o Android. Tras descargar la app Blynk, puedes crear un panel de proyecto y organizar botones, deslizadores, gráficos y otros widgets en la pantalla.

## Hardware requerido

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- Teléfono móvil
- Descargar la app Blynk desde la tienda de aplicaciones
- WiFi

## Trabajo preparatorio

Ingresa a [**Blynk para registrarte e iniciar sesión**](https://blynk.cloud/dashboard/login), ve a la pantalla de Templates y crea una nueva plantilla.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/1.png)

Luego edita el nombre y selecciona el dispositivo y modo de conexión, en este caso "Seeed Wio Terminal" y "WiFi".

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/60.jpg)

Anota BLYNK_TEMPLATE_ID y BLYNK_DEVICE_NAME.  
En el ejemplo, son:

```cpp
#define BLYNK_TEMPLATE_ID "TMPLCc16MxA1"
#define BLYNK_DEVICE_NAME "WioTerminal"
```

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/3.png)

Después haz clic en el botón guardar en la esquina superior derecha.

## Configura el Arduino IDE y ajusta el código

Luego, descarga y abre el código de ejemplo en el Arduino IDE.

[**Edgent\_Wio\_Terminal\_0-2.zip**](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/Edgent_Wio_Terminal_0-2.zip)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/4.jpg)

Selecciona el dispositivo Wio Terminal desde las opciones de placas ( [**ver página wiki de Wio Terminal**](https://blynk.cloud/dashboard/login) para cómo añadir Wio Terminal en Arduino IDE).

Añade la [**blynk-library**](https://github.com/blynkkk/blynk-library).

Busca y añade las siguientes librerías en el gestor de librerías del Arduino IDE:

* Seeed Arduino rpcunified
* Seeed Arduino rpcWiFi
* Seeed Arduino SFUD
* Seeed Arduino FS
* Seeed Arduino mbedtls
* ArduinoOTA
* ArduinoHttpClient

En las líneas 16 y 17 del código, completa el ID y NOMBRE que el sistema generó:

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/5.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/6.jpg)

Luego compila y sube el código al Wio Terminal (si falta alguna librería en la compilación, búscala en el gestor y descárgala).

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/7.png)

Después de subir el programa exitosamente, abre el monitor serial y ajusta la velocidad a 115200 baudios. Espera 5-10 segundos. El puerto serial mostrará la siguiente información: (si el monitor serial no responde, intenta reconectar el cable de datos y volver a abrir el monitor serial).

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/8.jpg)

## Configuración en la APP móvil

Descarga Blynk IoT APP：

Android: [https://play.google.com/store/apps/details?id=cloud.blynk\&hl=en\_IN\&gl=US](https://play.google.com/store/apps/details?id=cloud.blynk&hl=en_IN&gl=US)

iOS: [https://apps.apple.com/us/app/blynk-iot/id1559317868](https://apps.apple.com/us/app/blynk-iot/id1559317868)

Inicia sesión en la pantalla principal.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji111.png)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji222.png)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji333.png)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji4454.png)

Después de configurar la APP correctamente, el monitor serial indicará el estado de conexión de red. Cuando aparezca "Ready", la conexión WiFi fue exitosa.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/21.jpg)

Ahora es momento de probar la función OTA.

## OTA: Actualizar BLYNK\_FIRMWARE\_VERSION

Puedes escribir un programa personal en "edgent\_wio\_terminal\_0-2" con "void setup()" y "void loop()". En este ejemplo, cambiaremos directamente la información de versión del programa para demostrar. Si el programa se sube con éxito, la información de versión cambiará.

Cambiamos BLYNK\_FIRMWARE\_VERSION de "0.2.0" a "0.2.11"

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/22.jpg)

Luego haz clic en "Export compiled Binary" y espera a que termine la compilación.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/23.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/24.png)

Luego abre la carpeta y busca el archivo BIN.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/25.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/26.jpg)

Abre Blynk Air y selecciona "New Shipping" en la esquina superior derecha. Haz clic abajo en esta pantalla para encontrar la opción "Firmware".

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/27.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/28.jpg)

Selecciona el archivo bin que acabas de generar, verás que la versión del software cambió a "0.2.11" que acabas de configurar. Luego haz clic en el botón "Start Shipping" en la esquina inferior derecha para comenzar la subida inalámbrica del programa.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/29.jpg)

Puedes ver la carga en tiempo real en la página web o en el monitor serial.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/30.jpg)

Espera aproximadamente 2 minutos; si el monitor serial no muestra salida, intenta reiniciar el dispositivo y abrir nuevamente el monitor serial para ver la carga en tiempo real.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/31.jpg)

Reinicia el dispositivo y verás que la versión del software cambió a "0.2.11" que acabas de actualizar.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/32.jpg)

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
