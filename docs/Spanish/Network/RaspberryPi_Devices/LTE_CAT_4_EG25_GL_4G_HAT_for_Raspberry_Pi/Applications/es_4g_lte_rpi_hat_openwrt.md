---
description: Disfruta de acceso a internet confiable en cualquier lugar con una Raspberry Pi 5, OpenWrt y un HAT 4G LTE. Aprende a crear un punto de acceso portátil de alto rendimiento para casa, viajes y ubicaciones remotas.

title: Configuración de OpenWrt en una Raspberry Pi 5 con un módulo 4G LTE
keywords:
  - Raspberry Pi Hat
  - Getting started
  - Hotspot
  - Mobile Data
  - 4G LTE
  - OpenWRT
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mobile-cop.webp
slug: /es/4g_lte_hat_and_raspberry_pi_router_with_openwrt
last_update:
  date: 06/03/2025
  author: Guillermo
---

## Introducción

El Raspberry Pi 5, combinado con **OpenWrt** y un HAT 4G LTE, ofrece una solución potente y flexible para crear un punto de acceso portátil. Esta configuración es ideal para proporcionar acceso a internet en ubicaciones remotas, soportar dispositivos IoT o crear una red inalámbrica personal en movimiento. La personalización de OpenWrt garantiza una integración fluida con módulos 4G LTE, permitiendo a los usuarios aprovechar al máximo el potencial del Raspberry Pi 5 como un router inalámbrico confiable y de alto rendimiento. Ya sea para uso doméstico, de viaje o profesional, esta guía te ayudará a transformar tu Raspberry Pi 5 en un punto de acceso completamente funcional impulsado por OpenWrt y conectividad 4G LTE.

## Requisitos Previos

### Requisitos de Hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
         <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>    
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>


## Construir la Imagen de OpenWrt

### Elegir la Versión Snapshot de OpenWrt

Para trabajar con un módulo 4G LTE, se requieren ciertas dependencias. El Selector de Firmware de OpenWrt ofrece la flexibilidad de incluir estas dependencias durante el proceso de creación de la imagen, permitiéndote compilar un firmware personalizado. Sin este método, necesitarías una fuente de internet alternativa para instalar las dependencias en el Raspberry Pi después de la configuración. Por lo tanto, se recomienda construir una imagen de firmware que ya incluya las dependencias necesarias.

- **Visita el [Selector de firmware de OpenWrt](https://firmware-selector.openwrt.org/?version=SNAPSHOT&target=bcm27xx%2Fbcm2712&id=rpi-5) y elige la versión snapshot.**

- Las snapshots se actualizan con frecuencia y son ideales para usuarios avanzados.

- Haz clic en `Customize installed packages and/or first boot script`.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-build-1.PNG" 
    style={{ width: 500}} 
  />
</div>


Asegúrate de que los siguientes paquetes estén incluidos durante el proceso de compilación personalizada:

- kmod-usb-net-cdc-ether
- kmod-usb-serial-option
- picocom
- minicom

### Pasos para Compilar

- Añade los paquetes requeridos a tu archivo de configuración.
- Compila el firmware de OpenWrt.
- Descarga la imagen factory generada después de la compilación.


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-build.PNG" 
    style={{ width: 500}} 
  />
</div>

## Instalar OpenWrt en Raspberry Pi 5

- Graba la imagen compilada en una tarjeta SD usando herramientas como **Balena Etcher**.
- Inserta la tarjeta SD en el Raspberry Pi 5.
- Conecta tu Raspberry Pi a un módulo 4G LTE.

### Verificar Conexión del Dispositivo

Accede al Raspberry Pi usando SSH:

```bash
ssh root@192.168.1.1
```

### Verificar Detalles del Dispositivo:

- Usa dmesg para revisar los dispositivos conectados:

```bash
dmesg | grep usb
```
<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-dmsg.PNG" 
    style={{ width: 500}} 
  />
</div>

- Ver detalles del USB:
```bash
cat/sys/kernel/debug/usb/devices
```
:::note
Esto mostrará información sobre el fabricante, producto y otros detalles específicos del dispositivo. Asegúrate de que el módulo esté encendido.
:::

## Configurar el Módulo LTE

### Usar Minicom para Ajustar Configuraciones

Abrir **Minicom**

```bash
minicom -s
```
Verás una interfaz similar. Selecciona "Serial port setup" usando las teclas de flecha.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-minicom-serial.PNG" 
    style={{ width: 500}} 
  />
</div>

Configura los ajustes:
- Establece la velocidad de baudios que coincida con tu módulo 4G (por ejemplo, 9600).
- Selecciona el puerto COM correcto (por ejemplo, /dev/ttyUSB2).

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-minicom.PNG" 
    style={{ width: 500}} 
  />
</div>

- Y guarda la configuración como predeterminada.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-minicom-save.PNG" 
    style={{ width: 500}} 
  />
</div>

### Habilitar modo ECM / Dial-Up:

Envía los siguientes comandos AT para configurar el modo de red USB:

```bash
minicom -D /dev/ttyUSB2
```

```bash
AT+QCFG="usbnet"
AT+QCFG="usbnet",1 
```
### Añadir una nueva interfaz de red

- Ingresa a la interfaz web LuCI de OpenWrt desde un navegador en **192.168.1.1**.
- Ve a **Network > Interfaces > Add New Interface**.
- Configura la interfaz:
    - Selecciona el dispositivo detectado (**eth1** or **usb0**).
    - Usa el protocolo **DHCP Client**.
    - Nombra la interfaz (por ejemplo, **USB_Modem**).


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-new-interface.PNG" 
    style={{ width: 500}} 
  />
</div>

- Configura el firewall:
    - Asigna la interfaz a la zona WAN.

<div style={{ textAlign: 'center' }}>  
<img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-firewall-interface.PNG" 
    style={{ width: 500}} 
  />
</div>

- En el servidor DHCP, activa Ignore Interface.

###  Configurar un Punto de Acceso Inalámbrico

- En la interfaz web LuCI, navega a **Network > Wireless > Add**.

<div style={{ textAlign: 'center' }}>  
<img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-wireless.PNG" 
    style={{ width: 500}} 
  />
</div>

- Configura la nueva interfaz inalámbrica:
    - **SSID**: Usa el valor predeterminado o personalízalo.
    - **Modo**: Access Point.
    - **NRed**: LAN.

<div style={{ textAlign: 'center' }}>  
<img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-wireless-settings.PNG" 
    style={{ width: 500}} 
  />
</div>

- Para la **Seguridad Inalábrica**
    - Configura la encriptación a **WPA2**.
    - Crea una contraseña segura.

<div style={{ textAlign: 'center' }}>  
<img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-password-wireless.PNG" 
    style={{ width: 500}} 
  />
</div>

- Reinicia el dispositivo.

### Probar la red inalámbrica:
- Tu SSID inalámbrico debería ser visible en dispositivos cercanos.
- Conéctate usando la contraseña configurada para acceder a internet 4G LTE.

<div style={{ textAlign: 'center' }}>  
<img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-connection.PNG" 
    style={{ width: 500}} 
  />
</div>

<div style={{ textAlign: 'center' }}>  
<img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mobile-cop.png" 
    style={{ width: 500}} 
  />
</div>

## Recursos

- **[Página Web]** [LTE EG25-G](https://www.quectel.com/product/lte-eg25-g/)

- **[Página Web]** [OpenWRT usa dongles con driver cdc_ether para conexión WAN](https://openwrt.org/docs/guide-user/network/wan/wwan/ethernetoverusb_cdc)


## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes canales de soporte que garanticen que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varias vías de comunicación para cubrir diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>



