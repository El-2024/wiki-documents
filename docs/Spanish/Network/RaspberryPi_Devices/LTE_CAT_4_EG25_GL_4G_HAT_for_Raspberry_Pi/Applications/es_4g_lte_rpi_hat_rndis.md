---
description: Configura RNDIS en Windows para conectar el HAT 4G LTE de Raspberry Pi mediante USB, permitiendo acceso a internet y red de forma fluida.

title: RNDIS en HAT 4G LTE para Raspberry Pi en Windows
keywords:
  - Raspberry Pi Hat
  - Getting started
  - IIoT
  - RNDIS
  - 4G LTE
  
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/1-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi.webp
slug: /es/raspberry_pi_4g_lte_hat_rndis
last_update:
  date: 06/03/2025
  author: Guillermo
---

## Introducción

**RNDIS (Remote Network Driver Interface Specification)** es un protocolo de Microsoft que permite a los dispositivos USB emular adaptadores de red, lo que les permite proporcionar acceso a internet o red a una PC con Windows a través de una conexión USB. En Windows, instalar el controlador RNDIS correcto es esencial para que dispositivos como los módulos Quectel funcionen como interfaces Ethernet virtuales. Una vez instalado, el controlador permite que la PC reconozca el dispositivo como un adaptador de red, habilitando el uso compartido de internet o la comunicación en red local. Este proceso es especialmente común en módulos celulares que proporcionan conectividad a internet por USB.

## Requisitos previos

### Requisitos de hardware 

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
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Requisitos de software

Si ya tienes instalado NDIS u otro controlador en Windows, desinstálalo antes de instalar el controlador RNDIS que se proporciona a continuación.

- [Descargar desde aquí](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Quectel_Windows_RNDIS_V1.1.12.zip)
- [Obtener actualizaciones más recientes](https://www.quectel.com/download-zone/?_sf_s=rndis)

Puedes verificar el resultado de la instalación a través de `Administración de equipos` → `Administrador de dispositivos`. La interfaz del "Administrador de dispositivos" después de una instalación exitosa del controlador se muestra a continuación.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/devicetree.PNG" 
    style={{ width: 600}} 
  />
</div>


### Configurar en Modo RNDIS

To configure RNDIS mode, use the QCOM tool and follow these steps:  
1. Ingresa y envía el siguiente comando en la [herramienta QCOM](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/QCOM_V1.6.rar):  
   **AT+QCFG="usbnet"?**  
   
2. Si la respuesta no muestra lo siguiente: **AT+QCFG="usbnet",3**, entonces configura manualmente el modo RNDIS enviando:  
   **AT+QCFG="usbnet",3**


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usbnetcommnad.PNG" 
    style={{ width: 600}} 
  />
</div>

### Conectar a la Red

Deberías ver una interfaz de red (por ejemplo, Red X) que indica que la conexión se ha establecido.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/connection.PNG" 
    style={{ width: 400}} 
  />
</div>

Puedes verificar la nueva configuración RNDIS usando el comando `ipconfig`.

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/3.PNG" 
    style={{ width: 600}} 
  />
</div>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte distintos tipos de soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible.  
Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

