---
description: MT3620 Ethernet Shield v1.0
title: MT3620 Ethernet Shield v1.0
keywords:
- Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/MT3620_Ethernet_Shield_v1.0
last_update:
  date: 07/13/2025
  author: Guillermo
---

![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/product_picture.png)

El [kit de desarrollo Azure Sphere MT3620](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html) incluye cuatro encabezados (headers) de 2.54 mm para la extensión de recursos de hardware desde el MT3620. El **MT3620 Ethernet Shield** es una placa complementaria diseñada como expansión para el kit de desarrollo MT3620. Este shield permite habilitar la conectividad en redes LAN privadas únicamente. Puedes consultar más información al respecto [aquí](https://docs.microsoft.com/en-us/azure-sphere/network/connect-private-network).

Microsoft **Azure Sphere** es una solución diseñada para crear dispositivos conectados, seguros y basados en microcontroladores (MCU). Azure Sphere combina lo mejor de la experiencia de Microsoft en la nube, software y hardware, ofreciendo un enfoque único de seguridad que comienza desde el silicio y se extiende hasta la nube. Los **MCUs certificados por Azure Sphere**, el **sistema operativo Azure Sphere OS** y el **servicio de seguridad Azure Sphere Security Service** te proporcionan la confianza y el poder para reinventar tu negocio y construir el futuro.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/MT3620-Ethernet-Shield-v1-0-p-2917.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

:::caution
Se requiere conexión Wi-Fi externa para el acceso a Internet y los servicios de Azure Sphere. Azure Sphere no admite el enrutamiento ni el puenteo entre la red LAN privada y la interfaz Wi-Fi.
:::

## Características

- Procesador: Microchip, ENC28J60  
- Controlador Ethernet compatible con IEEE 802.3TM  
- Totalmente compatible con redes 10/100/1000Base-T  
- MAC integrado y PHY 10Base-T  
- Soporta un puerto 10Base-T con detección y corrección automática de polaridad  
- Compatible con modos de dúplex completo y medio  
- Interfaz SPI con velocidades de reloj de hasta 20 MHz  
- Temperatura de operación (℃): 0 ~ +70℃  

:::note
Si necesitas que funcione entre -40 ~ +85℃, por favor contacta a iot@seeed.cc para personalización.
:::

## Descripción del Hardware

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/hardware_overview.png)

- **<font face="" size="3" font color="ff0000">①</font> J1**: Interfaz RJ45, conectada al ENC28J60.

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/J1.png)

- **<font face="" size="3" font color="ff0000">②</font> LED1**: LED rojo de alimentación de 3.3V. Al energizar la placa, este LED se encenderá.

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/led.png)

- **<font face="" size="3" font color="ff0000">③</font> U1**: ENC28J60, controlador Ethernet independiente con interfaz SPI, encargado de convertir SPI a Ethernet.

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/U1.png)

- **<font face="" size="3" font color="ff0000">④</font> H4**: Header de expansión H4 del Azure Sphere (placa de desarrollo MT3620).

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H4.png)

- **<font face="" size="3" font color="ff0000">⑤</font> H3**: Encabezado de expansión H3 del Azure Sphere (placa de desarrollo MT3620).

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H3.png)

- **<font face="" size="3" font color="ff0000">⑥</font> H2**: Header de expansión H2 del Azure Sphere (placa de desarrollo MT3620).

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H2.png)

- **<font face="" size="3" font color="ff0000">⑦</font> H1**: Header de expansión H1 del Azure Sphere (placa de desarrollo MT3620).

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/H1.png)

- **<font face="" size="3" font color="ff0000">⑧</font> J2**: Encabezado UART3, conectado a los pines GPIO66~GPIO69 del MT3620.

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/J2.png)

**Pin Out**

- Los conectores H1, H2, H3 y H4 corresponden al pinout de la placa Azure Sphere MT3620.

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/H1_2.png)

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/H3_4.png)

**Dimensiones**

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/drawing1.png)

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/drawing2.png)

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/drawing3.png)

## Ideas de Aplicación

- Automatización en hogares, edificios o instalaciones
- Control industrial y automatización
- Sistemas de seguridad
- Gestión de equipos
- Servicios públicos (utilities)
- Seguridad pública

:::tip
Para entender cómo Azure Sphere se aplica en escenarios reales, consulta el ejemplo de [Contoso, Ltd](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere).
:::

## Primeros Pasos

### Requisitos Previos

**Instalar Azure Sphere**

Si tienes un kit de desarrollo Azure Sphere que aún no ha sido configurado, completa [estos pasos](https://docs.microsoft.com/en-us/azure-sphere/install/overview) para empezar.

**Librería Ethernet Shield para MT3620**

Esta aplicación de ejemplo en C demuestra cómo puedes [conectar un dispositivo Azure Sphere a una red Ethernet privada](https://docs.microsoft.com/azure-sphere/network/connect-private-network). <!-- Enlace 404 --> Configura el dispositivo Azure Sphere para ejecutar un servidor **DHCP** y un servidor **SNTP**, y también implementa un servidor TCP básico. Los pasos a continuación muestran cómo verificar esta funcionalidad conectando tu computadora a esta red privada.

Los servidores **DHCP** y **SNTP** son gestionados por el sistema operativo Azure Sphere, según la configuración proporcionada por la aplicación. Estos servidores se iniciarán solo después de que la aplicación lo solicite, pero continuarán funcionando incluso si la aplicación se detiene.

El servidor **TCP** se ejecuta dentro del propio proceso de la aplicación y se detiene cuando esta se detiene. Ten en cuenta que esta implementación de servidor TCP es básica, solo para propósitos ilustrativos, y **no autentica ni encripta** las conexiones: deberías reemplazarla por tu propia lógica en producción.

Esta muestra utiliza las siguientes bibliotecas de Azure Sphere e incluye [APIs beta](https://docs.microsoft.com/azure-sphere/app-development/use-beta).

| Biblioteca | Propósito |
|-----------|-----------|
| `log` | Muestra mensajes en la ventana **Device Output** de Visual Studio durante la depuración |
| `networking` | Obtiene y establece la configuración de la interfaz de red |

:::note
Actualmente, el MT3620 Ethernet Shield **no admite conexión a Internet** debido a que el software de Microsoft aún no está listo. Solo admite conexión con una PC.
:::

## **Conexión de Hardware**

| Kits de desarrollo MT3620 | MT3620 Ethernet Shield |
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/ethernet_s.png)|
|[Consigue uno ahora](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[Consigue uno ahora](https://www.seeedstudio.com/MT3620-Ethernet-Shield-v1-0-p-2917.html)|

1. Conecta el MT3620 Ethernet Shield a la placa de desarrollo Azure Sphere MT3620.  
2. Conecta el cable USB entre la placa MT3620 y tu PC.  
3. Conecta un cable de red entre el MT3620 Ethernet Shield y la PC.

![](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/img/stack_with_azuresphere.png)

## **Para compilar y ejecutar el ejemplo**

- Configura tu dispositivo Azure Sphere y el entorno de desarrollo como se describe en la [documentación oficial](https://docs.microsoft.com/azure-sphere/install/install).<!-- 链接404 -->

- Incluso si ya realizaste esta configuración anteriormente, asegúrate de tener instalada la versión 19.02 o superior del SDK de Azure Sphere. En un símbolo del sistema de desarrollador de Azure Sphere, ejecuta **azsphere show-version** para verificar. Descarga e instala el [SDK más reciente](https://aka.ms/AzureSphereSDKDownload) si es necesario.
- Conecta tu dispositivo Azure Sphere a tu PC mediante USB.
- Habilita el [desarrollo de aplicaciones](https://docs.microsoft.com/azure-sphere/quickstarts/qs-blink-application#prepare-your-device-for-development-and-debugging), <!-- 链接404 --> si aún no lo has hecho:

   `azsphere device prep-debug`

- Empaqueta y despliega la [imagen de configuración de placa](https://docs.microsoft.com/azure-sphere/network/connect-private-network)<!-- 链接404 --> para el chip Ethernet Microchip ENC286J60:

   `azsphere image package-board-config --preset lan-enc28j60-isu0-int5 --output enc28j60-isu0-int5.imagepackage`

   `azsphere device sideload deploy --imagepackage enc28j60-isu0-int5.imagepackage`

- Clona el repositorio de [ejemplos de Azure Sphere](https://github.com/Azure/azure-sphere-samples) y encuentra el ejemplo **PrivateEthernet**.
- En Visual Studio, abre `PrivateEthernet.sln` y presiona F5 para compilar, construir la solución y cargarla en el dispositivo para depuración.
- Deja la aplicación corriendo mientras realizas los siguientes pasos.

**Solución de problemas**

Si ves numerosos errores en la Lista de errores de Visual Studio relacionados con encabezados faltantes e identificadores indefinidos, o si al compilar la aplicación ves el siguiente error en la salida de compilación de Visual Studio:

   `error MSB6004: The specified task executable location "C:\Program Files (x86)\Microsoft Azure Sphere SDK\\SysRoot\tools\gcc\arm-poky-linux-musleabi-gcc.exe" is invalid.`

Es probable que tengas instalada una versión antigua del SDK de Azure Sphere. Asegúrate de tener la versión 19.02 o más reciente.

**Configura la conexión Ethernet en tu computadora**

- Abre **Configuración** y luego haz clic en **Red e Internet** > **Cambiar opciones del adaptador**.
- Haz clic derecho en tu adaptador Ethernet y selecciona **Propiedades**.
- En la ventana de **Propiedades de Ethernet**, desactiva todos los elementos excepto **Protocolo de Internet versión 4 (TCP/IPv4)**.
- Selecciona **Protocolo de Internet versión 4 (TCP/IPv4)** y luego haz clic en el botón **Propiedades** para abrir la ventana de **Propiedades de IPv4**.
- Asegúrate de que la opción "Obtener una dirección IP automáticamente" esté seleccionada. (Las versiones anteriores de este ejemplo requerían configurar una IP estática en este punto. Ya no es necesario porque la aplicación ahora actúa como servidor DHCP).
- Haz clic en **Aceptar** para cerrar la ventana de propiedades de IPv4 y luego cierra la ventana de **Propiedades de Ethernet**.
- Conecta un cable Ethernet desde el ENC286J60-H a la conexión Ethernet de tu computadora.

:::note
Si tu computadora está administrada por políticas que impiden conectarse a múltiples interfaces de red al mismo tiempo, es posible que debas desactivar otras interfaces de red mientras usas este ejemplo.
:::

:::note
El ejemplo utiliza el rango de direcciones IP 192.168.100.xxx. Si tienes otro adaptador de red usando el mismo rango, deberás modificar el ejemplo o desactivar temporalmente ese otro adaptador.
:::

**Prueba del servidor DHCP del dispositivo**

Abre una ventana de comandos en tu computadora y escribe **ipconfig**. Deberías ver que el servidor DHCP ha asignado la dirección IP `192.168.100.11` a tu PC para su conexión Ethernet:

```sh
Ethernet adapter <name>:

   Connection-specific DNS Suffix  . :
   Link-local IPv6 Address . . . . . : fe80::8c67:be24:4d9a:d4bb%9
   IPv4 Address. . . . . . . . . . . : 192.168.100.11
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . :
```

También puedes buscar, descargar y utilizar una herramienta de prueba de cliente DHCP en tu PC para inspeccionar con más detalle la respuesta del servidor DHCP, por ejemplo, para ver las direcciones del servidor NTP que se devuelven.

**Prueba del servidor SNTP del dispositivo**

- Asegúrate de que el dispositivo esté [conectado a Wi-Fi](https://docs.microsoft.com/azure-sphere/install/configure-wifi), para que pueda obtener la hora desde un servidor NTP público. El servidor SNTP del propio dispositivo no responderá hasta que conozca la hora actual.

- Abre una ventana de comandos en tu computadora y escribe:

   **w32tm /stripchart /computer:192.168.100.10 /dataonly /samples:1**

   Esto invoca la herramienta [Windows Time](https://docs.microsoft.com/windows-server/networking/windows-time-service/windows-time-service-tools-and-settings) para consultar el servidor SNTP del dispositivo y mostrar la diferencia calculada entre la hora de tu computadora y la del dispositivo:

   ```sh
   Tracking 192.168.100.10 [192.168.100.10:123].
   Collecting 1 samples.
   The current time is 06/02/2019 14:18:09.
   14:18:09, +00.0349344s
   ```

- Si el servidor SNTP no se está ejecutando o no responde, podrías ver la siguiente salida. Verifica que la aplicación esté corriendo y que el Wi-Fi esté configurado:

   ```sh
   Tracking 192.168.100.10 [192.168.100.10:123].
   Collecting 1 samples.
   The current time is 06/02/2019 14:16:50.
   14:16:50, error: 0x800705B4
   ```

**Prueba del servidor TCP de la aplicación**

Asegúrate de que la aplicación de ejemplo aún esté ejecutándose en tu dispositivo Azure Sphere. Luego, en tu computadora, utiliza una aplicación de terminal para abrir una conexión TCP en bruto al servidor TCP de la aplicación en la dirección 192.168.100.10 y puerto 11000. Puedes abrir esta conexión con una aplicación de terminal de terceros como PuTTY (usando el tipo de conexión "raw") o con el cliente Telnet incorporado de Windows.

Para usar el cliente Telnet incorporado de Windows:

- Open Control Panel and click **Programs and Features** > **Turn Windows features on or off** to launch the **Windows Features** window.
- Ensure **Telnet Client** is selected and click **OK**.
- Open a command prompt and type **telnet 192.168.100.10 11000**.

- Abre el Panel de control y haz clic en **Programas y características** > **Activar o desactivar las características de Windows** para abrir la ventana **Características de Windows**.
- Asegúrate de que esté seleccionada la opción **Cliente Telnet** y haz clic en **Aceptar**.
- Abre una ventana de comandos y escribe: **telnet 192.168.100.10 11000**.

Los caracteres que escribas aparecerán en la consola de depuración de Visual Studio—ya sea de forma inmediata o cuando presiones Enter—lo que indica que han sido recibidos por el servidor TCP de ejemplo en el MT3620. Además, al presionar Enter, el MT3620 enviará una cadena de respuesta al terminal, que dirá:

   ```sh
   Received "<last-received-line>"
   ```

Ten en cuenta que este servidor de ejemplo tiene un búfer de entrada simple de 16 caracteres. Si envías más que eso, la ventana de salida en Visual Studio podría mostrar:  
**"Input data overflow. Discarding 16 characters."**

**Solución de problemas**

- Si ejecutas el ejemplo sin tener conectado el ENC28J60 (o conectado incorrectamente), la aplicación de ejemplo se cerrará inmediatamente. La salida de depuración mostrará un error como:  
  `"ERROR: Networking_SetStaticIp: 5 (I/O error)"` justo antes de salir.  
  Si posteriormente conectas o corriges la conexión al ENC28J60, también debes reiniciar el MT3620.

- Si ejecutas el ejemplo sin haber cargado la configuración de la placa en el dispositivo, la aplicación de ejemplo también se cerrará inmediatamente. La salida de depuración mostrará un error como:  
  `"ERROR: Networking_SetStaticIp: 2 (No such file or directory)"` justo antes de salir.

**Eliminar la configuración Ethernet de la placa**

Si ya no necesitas Ethernet, por ejemplo, porque deseas usar tu placa para otro proyecto, debes eliminar manualmente la imagen de configuración Ethernet:

- Encuentra la imagen instalada con tipo 'Board config' y anota su ID de componente:

   `azsphere device image list-installed`

- Elimina esta imagen:

   `azsphere device sideload delete --componentid <component ID>`

- Presiona el botón de reinicio en la placa de desarrollo MT3620.

**Nota:** Este ejemplo utiliza el puerto ISU0 (I2C/SPI/UART 0) del MT3620, el cual también es utilizado por otros ejemplos. Es posible adaptar otros ejemplos para usar un puerto ISU diferente. Sin embargo, **actualmente no es posible adaptar este ejemplo de Ethernet privado para usar otro puerto ISU**.

## Visor del esquemático en línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/202002332_MT3620%20Ethernet%20Shield_v1.0_SCH%20%26%20PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [MT3620 Ethernet Shield v1.0](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/MT3620%20Ethernet%20Shield_v1.0_SCH_181220.pdf)
- **[Eagle]** [MT3620 Ethernet Shield v1.0](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/202002332_MT3620%20Ethernet%20Shield_v1.0_SCH%20%26%20PCB.zip)
- **[Dibujo Mecánico]** [Dibujo mecánico del MT3620 Ethernet Shield](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/103990403%2C%20MT3620%20Ethernet%20Shield%20v1.0.pdf)
<!-- - **[Library]** [MT3620 Ethernet Shield Library](https://github.com/Azure/azure-sphere-samples/tree/master/Samples/PrivateEthernet)链接缺失 -->
- **[Hoja de datos]** [Datasheet del ENC28J60](https://files.seeedstudio.com/wiki/MT3620_Ethernet_Shield_v1.0/res/ENC28J60.pdf)
- **[Preguntas Frecuentes]** [Foro de Azure Sphere](https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere)
- **[Preguntas Frecuentes]** [Azure Sphere – Issues en GitHub](https://github.com/MicrosoftDocs/azure-sphere-issues/issues?utf8=%E2%9C%93&q=is%3Aissue)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurar que tu experiencia con nuestros dispositivos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
