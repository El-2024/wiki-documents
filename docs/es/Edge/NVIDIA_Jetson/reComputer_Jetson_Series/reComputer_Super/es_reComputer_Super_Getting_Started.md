---
description: Primeros pasos con reComputer Super
title: Primeros pasos con reComputer Super
keywords:
  - reComputer Super
  - reComputer Super Getting Started
  - Super
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp
slug: /es/recomputer_jetson_super_getting_started
last_update:
  date: 06/19/2025
  author: Yaohui
---

# Primeros pasos con reComputer Super

La Serie reComputer Super potencia el reComputer Classic, ofreciendo hasta un impulso de 1.7x de 157 TOPS en rendimiento de IA. Incluye modelos con Jetson Orin Nano (11410311, 11410312) y Jetson Orin NX (11410313, 11410314).
Diseñado tanto para desarrollo como para producción, viene con una rica variedad de interfaces, incluyendo M.2 Key E/M, Ethernet dual RJ45, Mini-PCIe, 4xUSB 3.2, HDMI 2.1, 4xCSI, y CAN. Con Jetpack 6.2 y Linux OS BSP preinstalados, permite entrada inmediata al mercado.
También soporta una amplia gama de marcos de trabajo LLM y IA Física, como NVIDIA, Hugging Face, ONNX, PyTorch, y ROS2/1 en el borde sin problemas, incluso fusionando estas capacidades multimodales con aplicaciones de robótica para enriquecer el desarrollo de IA Física.

<div align="center">
  <img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Obtener uno ahora 🖱️</font></span></strong>
</a></div>

## Características principales  

### 🚀 ​**Impulso de rendimiento**  

- ​**Impulso de rendimiento de IA 1.7x** sobre reComputer Classic, ofreciendo ​**157 TOPS**  
- Impulsado por ​**Jetson Orin Nano** (Modelos: 11410311, 11410312) y ​**Jetson Orin NX** (Modelos: 11410313, 11410314)  

### 🔌 ​**Rica conectividad e interfaces**  

- ​**M.2 Key E/M** + ​**Mini-PCIe** para expandibilidad  
- ​**Puertos Ethernet dual RJ45** para redes de alta velocidad  
- ​**4x USB 3.2**, ​**HDMI 2.1**, ​**4x CSI** (Interfaz Serial de Cámara)  
- Soporte ​**bus CAN** para aplicaciones industriales/robóticas  

### 🛠️ ​**Listo para desarrollo y producción**  

- ​**Jetpack 6.2** y ​**Linux OS BSP** preinstalados para despliegue inmediato  
- Integración perfecta de IA en el borde con marcos de trabajo:  
  - ​**NVIDIA**, ​**Hugging Face**, ​**ONNX**, ​**PyTorch**  
  - ​**ROS2/1** para aplicaciones de robótica  
- Soporta desarrollo de ​**IA multimodal** e ​**IA Física**  

### 🤖 ​**Optimizado para IA en el borde y robótica**  

- Fusiona capacidades ​**LLM (Modelo de Lenguaje Grande)** con ​**IA Física** en el borde  
- Ideal para robótica, automatización industrial e inferencia de IA en tiempo real  
- Acelera la ​**entrada al mercado** con pila de software preconfigurada  

:::tip

### ⚠️ Directrices de Alimentación y Accesorios  

#### 1. ​**Adaptador de Energía**  

- ​**Jetson Orin Nano**: 12V 5A (conector barrel 5525)  
- ​**Jetson Orin NX**: 19V 4.74A (conector barrel 5525)  
- Siempre utiliza ​**adaptadores oficiales** que cumplan con los requisitos de energía.  

#### 2. ​**Cable de Alimentación AC**  

- Usa cables tipo trébol ​**específicos para tu región**.  

#### 3. ​**Accesorios**  

- Solo accesorios ​**oficialmente recomendados** (por ejemplo, cámaras, módulos inalámbricos) para un rendimiento y compatibilidad óptimos.

:::

## Especificaciones

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Sistema en Módulo Jetson Orin Super</th>
    </tr>
    <tr>
      <th>Especificaciones</th>
      <th>reComputer Super J3010</th>
      <th>reComputer Super J3011</th>
      <th>reComputer Super J4011</th>
      <th>reComputer Super J4012</th>
    </tr>
    <tr>
      <td>Módulo</td>
      <td>NVIDIA Jetson Orin™ Nano 4GB</td>
      <td>NVIDIA Jetson Orin™ Nano 8GB</td>
      <td>NVIDIA Jetson Orin™ NX 8GB</td>
      <td>NVIDIA Jetson Orin™ NX 16GB</td>
    </tr>
    <tr>
      <td>Rendimiento de IA</td>
      <td>34 TOPS</td>
      <td>67 TOPS</td>
      <td>117 TOPS</td>
      <td>157 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>GPU de arquitectura NVIDIA Ampere de 512 núcleos con 16 Tensor Cores</td>
      <td colSpan={3}>GPU de arquitectura NVIDIA Ampere de 1024 núcleos con 32 Tensor Cores</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan={2}>CPU de 6 núcleos Arm® Cortex®-A78AE v8.2 de 64 bits<br />1.5MB L2 + 4MB L3</td>
      <td>CPU de 6 núcleos Arm® Cortex®-A78AE v8.2 de 64 bits 1.5MB L2 + 4MB L3</td>
      <td>CPU de 8 núcleos Arm® Cortex®-A78AE v8.2 de 64 bits 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Frecuencia Máxima de CPU</td>
      <td colSpan={2}>1.7 GHz (MAXN_SUPER)</td>
      <td colSpan={2}>2 GHz</td>
    </tr>
    <tr>
      <td>Memoria</td>
      <td>4GB 64-bit LPDDR5<br />34 GB/s</td>
      <td>8GB 128-bit LPDDR5<br />68 GB/s</td>
      <td>8GB 128-bit LPDDR5 102.4GB/s</td>
      <td>16GB 128-bit LPDDR5 102.4GB/s</td>
    </tr>
    <tr>
      <td>Acelerador DL</td>
      <td colSpan={2}>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>Codificador de Video</td>
      <td colSpan={2}>1080p30 soportado por 1-2 núcleos de CPU</td>
      <td colSpan={2}>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Decodificador de Video</td>
      <td colSpan={2}>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan={2}>1x 8K30 (H.265)<br />2x 4K60 (H.265)<br />4x 4K30 (H.265)<br />9x 1080p60 (H.265)<br />18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>CSI</td>
      <td colSpan={5}>Hasta 4 cámaras<br />(8 vía canales virtuales)<br />8 carriles MIPI CSI-2<br />D-PHY 2.1 (hasta 20Gbps)</td>
    </tr>
    <tr>
      <td>Mecánico</td>
      <td colSpan={5}>69.6mm x 45mm<br />Conector SO-DIMM de 260 pines</td>
    </tr>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Placa Portadora</th>
    </tr>
    <tr>
      <td>Almacenamiento</td>
      <td colSpan={4}>1x M.2 KEY M PCIe (SSD M.2 NVMe 2280 de 128G incluido)</td>
    </tr>
    <tr>
      <td rowSpan={3}>Redes</td>
      <td>M.2 KEY E</td>
      <td colSpan={3}>1x M.2 Key E para módulo WiFi/Bluetooth</td>
    </tr>
    <tr>
      <td>Mini PCIe</td>
      <td colSpan={3}>1x mini-PCIe para módulo LTE 4G</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td colSpan={3}>2x RJ45 Gigabit Ethernet</td>
    </tr>
    <tr>
      <td rowSpan={11}>E/S</td>
      <td >USB</td>
      <td colSpan={3}>4x USB 3.2 Tipo-A (5Gbps); <br />1x USB 2.0 Tipo-C (Modo Dispositivo/Debug);</td>
    </tr>
    <tr>
      <td>Cámara</td>
      <td colSpan={3}>4x mipi CSI(2-carriles 15-Pines)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={3}>1 x CAN(Conector de 4 Pines)</td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td colSpan={3}>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>Ventilador</td>
      <td colSpan={3}>1x Conector de Ventilador de 4 pines (5V PWM); <br />1x Conector de Ventilador de 4 Pines (12V PWM);</td>
    </tr>
    <tr>
      <td>Puerto de Extensión</td>
      <td colSpan={3}>1x conector de extensión de 40 pines;<br />1x conector de control y UART de 12 pines;</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={3}>1x RTC de 2 pines;<br />1x Socket RTC</td>
    </tr>
    <tr>
      <td>LED</td>
      <td colSpan={3}>2x LED(PWR y ACT)</td>
    </tr>
    <tr>
      <td>Botón de Orificio</td>
      <td colSpan={3}>1x PWR;<br />1x RESET;</td>
    </tr>
    <tr>
      <td>Interruptor DIP</td>
      <td colSpan={3}>1x REC</td>
    </tr>
    <tr>
      <td>Orificio de Antena</td>
      <td colSpan={3}>4x Orificio de Antena</td>
    </tr>
    <tr>
      <td>Alimentación</td>
      <td colSpan={4}>Conector DC Barrel 5525 de 12-19V </td>
    </tr>
    <tr>
      <td>Versión Jetpack</td>
      <td colSpan={4}>Jetpack 6.2 </td>
    </tr>
    <tr>
      <td>Dimensiones Mecánicas</td>
      <td colSpan={4}>130mm x 120mm x 66mm</td>
    </tr>
    <tr>
      <td>Instalación</td>
      <td colSpan={4}>Escritorio, Montaje en pared</td>
    </tr>
    <tr>
      <td>Temperatura de Operación</td>
      <td colSpan={4}>-10℃~60℃</td>
    </tr>
    <tr>
      <td>Garantía</td>
      <td colSpan={4}>2 Años</td>
    </tr>
    <tr>
      <td>Certificación</td>
      <td colSpan={4}>CE,FCC,RoHS,REACH,Telec, KC, Prueba de Vibración(GB/T 2423)</td>
    </tr>
  </tbody>
</table>
</div>

## Flash JetPack OS

### Módulo Compatible

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

### Prerrequisitos

- PC host Ubuntu
- reComputer Super
- Cable de transmisión de datos USB Type-C

:::info

Recomendamos que uses dispositivos físicos con Ubuntu en lugar de máquinas virtuales.  
Por favor, consulta la tabla a continuación para preparar la máquina anfitriona.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td rowspan="2"> Versión de JetPack </td>
        <td class="dbon" colspan="3"> Versión de Ubuntu (Computadora Anfitriona) </td>
    </tr>
    <tr>
        <td> 18.04 </td>
        <td> 20.04 </td>
        <td> 22.04 </td>
    </tr>
    <tr>
        <td>JetPack 6.x</td>
        <td> </td>
        <td> ✅ </td>
        <td> ✅ </td>
    </tr>
  </tbody>
</table>

:::

### Preparar la Imagen de Jetpack

Aquí, necesitamos descargar la imagen del sistema a nuestro PC Ubuntu correspondiente al módulo Jetson que estamos usando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versión de Jetpack</th>
      <th>Módulo Jetson</th>
      <th> GMSL </th>
      <th>Enlace de Descarga1</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>6.2</td>
      <td> Orin Nano 4GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQiC_is_O2tEkvFzu-3SrWYBFdcQr0zZRUf81lkjnXpnkQ?e=f3ISaO">Descargar</a></td>
      <td>8FF204A65C006717ED45241186C14B4 <br />FAA8ACE5BEBCDCE755F94C3CBF1311C38</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbEYa6n_P6pCh1TQbVBSpcQBZlFVm_-il3sqXEBDGpdPJA?e=S1dgfv">Descargar</a></td>
      <td>7EC06C0D17E33AE43D3C69EED791F64<br />CB9CFDC497E01D525E18EBAC1547A0236</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EevZ9hO7BfhDuJvDPYIdHGkBGhrKcWgCyAuTQu1gpHsz4g?e=xbXfbL">Descargar</a></td>
      <td>06B175484220DA7A63CC7CDAAE339F7E<br />FF8997180AF1C4B836D1098CBD8A169D</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeIg8k2osZFAuPzOlcO-FtIBdhbgULGQrsQOg4uUrXoK4w?e=uo29A8">Descargar</a></td>
      <td> CF37D028D6466DCC13201367E6358A6<br />9B7B5305CAE2A2B785E3ECFD3D8C66304</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
El archivo de imagen de Jetpack6 tiene un tamaño aproximado de **14.1GB** y debería tardar alrededor de 60 minutos en descargarse. Por favor, espera a que la descarga se complete.
:::

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina anfitriona con Ubuntu, abre la terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en la wiki, se confirma que el firmware que descargaste está completo e intacto.
:::

### Entrar al Modo de Recuperación Forzada

:::info
Antes de poder continuar con los pasos de instalación, debemos asegurarnos de que la placa esté en modo de recuperación forzada.
:::

<details>

<summary> Paso a Paso </summary>

**Paso 1.** Cambie el interruptor al modo RESET.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/flash.jpg"/>  
</div>

**Paso 2.** Encienda el reComputer Super conectando el cable de alimentación.

**Paso 3.** Conecte el Super a la PC host Ubuntu con un cable de transmisión de datos USB Type-C.

**Paso 4.** En la PC host Linux, abra una ventana de Terminal e ingrese el comando `lsusb`. Si el contenido devuelto tiene una de las siguientes salidas según el Jetson SoM que use, entonces la placa está en modo de recuperación forzada.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

La imagen de abajo es para Orin Nano 8GB

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"/>
</div>

</details>

### Flashear a Jetson

**Paso 1:** Extraiga el archivo de imagen descargado:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-super-orin-nx-16g-j401-6.2-36.4.3-2025-05-22.tar.gz
```

**Paso 2:** Ejecuta el siguiente comando para flashear el sistema jetpack al SSD NVMe:

```bash
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Verás la siguiente salida si el proceso de flasheo es exitoso

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
El comando de flasheo puede ejecutarse entre 2 y 10 minutos.
:::

**Paso 3:** Conecta el monitor usando un cable HDMI y completa la configuración de inicialización del sistema reComputer Super:

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Por favor, completa la **Configuración del Sistema** según tus necesidades.
:::

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
