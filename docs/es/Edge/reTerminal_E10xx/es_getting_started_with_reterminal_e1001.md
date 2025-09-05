---
description: Este artículo te guiará para comenzar rápidamente con el reTerminal E1001.
title: Comenzando con reTerminal E1001
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/getting_started_with_reterminal_e1001
sidebar_position: 2
last_update:
  date: 07/21/2025
  author: Citric
---

# Comenzando con reTerminal E1001

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

:::caution Consejos para Actualizar el Firmware
Le recomendamos que **[complete la actualización del firmware de su producto](#preliminar)** tan pronto como lo reciba para obtener la mejor experiencia.
:::

## Introducción

reTerminal E1001 es una pantalla ePaper monocromática de código abierto de 7.5 pulgadas con una excepcional duración de batería de 3 meses. Alimentado por ESP32-S3, soporta nativamente nuestra plataforma de interfaz de usuario sin código SenseCraft HMI para la creación sin esfuerzo de paneles de control, mientras que soporta Home Assistant, panel de control E-ink TRMNL, Arduino y ESP-IDF para desarrollo adicional. Ya sea para visualización de paneles de control de hogar inteligente, pantallas de oficina o proyectos educativos, este dispositivo HMI listo para usar ofrece visuales hermosos y personalización flexible en un paquete elegante.

### Características

- **Pantalla ePaper Hermosa y Lista para Usar**
- **Ultra Bajo Consumo con Duración de Batería de 3 Meses**
- **Diseño e Implementación de UI Sin Código con SenseCraft HMI**
- **Funciona con Plataformas de Software Populares**
- **Personalización Flexible de Hardware y Software**

## Descripción General del Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/150.png" style={{width:1000, height:'auto'}}/></div><br />

El hardware del reTerminal E1001 incluye:

1. **Pantalla ePaper de 7.5 pulgadas**: Pantalla monocromática con resolución de 800×480
2. **Botones**: Ubicados en la parte superior del dispositivo para el uso manual de la pantalla  
3. **Micrófono**  
4. **Ranura para Tarjeta MicroSD**: Para almacenamiento expandible  
5. **Interruptor de Encendido**: Ubicado en la parte trasera para encender/apagar el dispositivo  
6. **LED de Estado**: Indicador del usuario (verde)  
7. **LED de Encendido**: Indicador de carga (rojo)  
8. **Puerto USB-C**: Para carga y actualizaciones de firmware  
9. **Puerto de Expansión**: Conector de expansión de 8 pines que proporciona VDD, GND, I2C y conexiones GPIO

## Comenzando

### Preliminar

**Paso 1.** Desempaca tu reTerminal E1001 y asegúrate de que todos los componentes estén incluidos:

- Dispositivo reTerminal E1001
- Cable USB-C
- Guía de inicio rápido

**Paso 2.** (Opcional) Inserta una tarjeta microSD si planeas usar el dispositivo como marco de fotos digital o necesitas almacenamiento adicional.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
El reTerminal E10xx solo soporta tarjetas MicroSD de hasta 64GB en formato Fat32.
:::

**Paso 3.** (Opcional) Instala controladores USB si es necesario:

Dependiendo de tu sistema operativo, puede que necesites instalar controladores USB para asegurar una comunicación adecuada con tu reTerminal E1001:

- **Para computadoras Mac**: Descarga e instala el controlador CH34X desde el [sitio web oficial de WCH](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html)

- **Para computadoras Windows**:
  - Los sistemas Windows 11 típicamente incluyen el controlador por defecto
  - Para Windows 10 y versiones anteriores, puede que necesites descargar e instalar el controlador CH341 desde el [sitio web oficial de WCH](https://www.wch-ic.com/downloads/CH341SER_ZIP.html)

- **Para sistemas Linux**: La mayoría de las distribuciones Linux modernas incluyen los controladores necesarios por defecto

**Paso 4.** Actualiza el firmware para asegurar que tu dispositivo esté ejecutando la versión más reciente:

1. Conecta tu reTerminal E1001 a tu computadora usando el cable USB-C

2. Enciende el dispositivo usando el interruptor de alimentación en la parte posterior

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/134.jpg" style={{width:700, height:'auto'}}/></div>

3. Visita **[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)** e inicia sesión en tu cuenta

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

4. Navega a la sección **Workspace**

5. Haz clic en **Device Flasher** en la esquina superior derecha

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/9.png" style={{width:1000, height:'auto'}}/></div>

6. Selecciona tu dispositivo reTerminal E1001 de la lista. Según este tutorial, deberías elegir **reTerminal E1001 7.5" Monochrome Display**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/11.png" style={{width:800, height:'auto'}}/></div>

7. Elige la versión de firmware más reciente del menú desplegable

8. Haz clic en **Flash** y espera a que el proceso de actualización se complete

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/10.png" style={{width:800, height:'auto'}}/></div>

:::note

1. Actualizar el firmware asegura un rendimiento óptimo y acceso a las características más recientes. Se recomienda realizar esta actualización antes de usar tu dispositivo por primera vez.

2. No es posible flashear el firmware correctamente cuando el dispositivo está en estado de apagado o suspensión. Si seleccionas el puerto correcto para tu dispositivo pero nunca ves el progreso de flasheo del firmware, entonces puede que necesites despertar el dispositivo presionando el botón verde en la parte superior de la unidad e intentar de nuevo.

:::

### Encendido

**Paso 1.** Enciende el dispositivo deslizando el interruptor de alimentación a la posición **ON**. El interruptor de alimentación está ubicado en la parte posterior de la unidad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/135.gif" style={{width:700, height:'auto'}}/></div>

**Paso 2.** En el primer arranque, el dispositivo mostrará información del producto e instrucciones de configuración de red.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/1.png" style={{width:600, height:'auto'}}/></div><br />

**Paso 3.** El LED verde del usuario se encenderá durante aproximadamente 30 segundos, indicando que el dispositivo está encendido e inicializándose. Después de 30 segundos sin operación del dispositivo, para asegurar la energía, el dispositivo entrará automáticamente en modo de suspensión y el LED se apagará automáticamente.

:::tip
Por lo tanto, necesitamos completar los siguientes pasos de configuración de red durante este tiempo. Cuando el dispositivo entre en suspensión, no podrás encontrar el punto de acceso del dispositivo. Si este es el caso, puedes despertar el dispositivo haciendo clic una vez en el botón verde Wake del dispositivo.
:::

### Configuración de Red

**Paso 1.** Conéctate al punto de acceso Wi-Fi del dispositivo desde tu smartphone o computadora. El nombre del AP aparecerá en la pantalla (no se requiere contraseña). Las credenciales de red son `reTerminal E1001-{Dirección MAC}`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

**Paso 2.** Una vez conectado, tu teléfono debería redirigirse automáticamente a la página de configuración Wi-Fi. Si no es así, abre un navegador y navega a `192.168.4.1`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

**Paso 3.** Selecciona tu red Wi-Fi local e ingresa la contraseña, luego haz clic en "Connect".

:::note
La serie reTerminal E10xx solo soporta redes WiFi de 2.4GHz, no 5GHz u otras bandas.
:::

**Paso 4.** Al conectarse exitosamente, el dispositivo emitirá un pitido de confirmación y mostrará una pantalla con código de emparejamiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/136.png" style={{width:600, height:'auto'}}/></div>

### Conectando a la Plataforma SenseCraft

**Paso 1.** Visita [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) en tu navegador web y crea una cuenta o inicia sesión.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

**Paso 2.** Navega a la sección **Workspace** y haz clic en **Add Device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/7.png" style={{width:1000, height:'auto'}}/></div>

**Paso 3.** Nombra tu dispositivo e ingresa el código de emparejamiento mostrado en la pantalla de tu dispositivo y haz clic en **Create**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

**Paso 4.** Una vez emparejado, el dispositivo mostrará un mensaje solicitándote crear tu primer panel de control.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/3.png" style={{width:600, height:'auto'}}/></div>

## Creando un Panel de Control

El reTerminal E1001 se integra perfectamente con la plataforma SenseCraft HMI, que proporciona herramientas poderosas para crear y personalizar contenido para tu dispositivo. En lugar de detallar operaciones paso a paso aquí, exploremos las características clave de la plataforma para ayudarte a entender qué es posible.

### Características de SenseCraft HMI

**Generador de IA**

¡Deja que la inteligencia artificial diseñe tu panel de control! Simplemente describe qué información quieres mostrar, y el Generador de IA creará automáticamente un diseño atractivo y funcional. Esto es perfecto para generar rápidamente pantallas del clima, calendarios, listas de tareas pendientes o paneles informativos sin trabajo de diseño manual.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/12.png" style={{width:300, height:'auto'}}/></div>

**Galería**

Transforma tu reTerminal E1001 en un marco de fotos digital con la función Galería. Sube tus imágenes favoritas, y la plataforma las optimizará para la pantalla ePaper. Crea presentaciones de diapositivas con tiempos de transición personalizados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/19.png" style={{width:1000, height:'auto'}}/></div>

**Lienzo**

Diseña tu panel de control desde cero con Lienzo, una interfaz de arrastrar y soltar que ofrece varios elementos:

- Bloques de texto con fuentes y tamaños personalizables
- Marcadores de posición para imágenes
- Widgets para hora, fecha y clima
- Herramientas de visualización de datos
- Formas y divisores para organización del diseño

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/20.png" style={{width:1000, height:'auto'}}/></div>

**Integración de Fuentes RSS**

Mantente actualizado con tus fuentes de noticias, blogs o sitios web favoritos agregando fuentes RSS a tu panel de control. La función RSS te permite mostrar titulares, resúmenes o artículos completos de múltiples fuentes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/21.png" style={{width:1000, height:'auto'}}/></div>

**Visualización de Contenido Web**

Captura y muestra contenido web específico en tu dispositivo. La función Web puede renderizar porciones seleccionadas de sitios web, permitiéndote mostrar información como horarios de tránsito, indicadores de acciones u otras fuentes de datos en línea.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/16.png" style={{width:1000, height:'auto'}}/></div>

### Comenzando con SenseCraft HMI

Después de emparejar tu dispositivo con la plataforma SenseCraft como se describe en la sección anterior, estarás listo para crear tu primer panel de control. Para instrucciones detalladas sobre el uso de cada función, por favor consulta las páginas Wiki correspondientes:

- [Descripción General de SenseCraft HMI](https://wiki.seeedstudio.com/es/sensecraft_hmi_overview)
- [Guía del Generador de IA](https://wiki.seeedstudio.com/es/sensecraft_hmi_ai_generation)
- [Guía de Uso de Galería](https://wiki.seeedstudio.com/es/sensecraft_hmi_gallery)
- [Herramientas de Diseño de Lienzo](https://wiki.seeedstudio.com/es/sensecraft_hmi_canvas)
- [Configuración de Fuentes RSS](https://wiki.seeedstudio.com/es/sensecraft_hmi_rss)
- [Visualización de Contenido Web](https://wiki.seeedstudio.com/es/sensecraft_hmi_web)

Una vez que hayas creado y guardado tu panel de control en la plataforma SenseCraft, simplemente haz clic en "Implementar en Dispositivo", selecciona tu reTerminal E1001 emparejado, y tu contenido personalizado será transmitido de forma inalámbrica al dispositivo. La pantalla ePaper se actualizará para mostrar tu panel de control, y puedes usar los botones de navegación para cambiar entre múltiples páginas si las has creado.

## Operación del Dispositivo

### Botón de Actualización

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/137.jpg" style={{width:700, height:'auto'}}/></div>

El botón de actualización en la parte superior del dispositivo tiene varias funciones:

- **Pulsación Simple**: Actualiza manualmente la pantalla y verifica nuevo contenido desde la plataforma SenseCraft. El zumbador emitirá un pitido una vez para confirmar la acción. Este botón también se usa comúnmente para despertar el dispositivo. Puedes usar este botón para despertar un dispositivo cuando se ha quedado dormido y un comando de actualización del panel de control generalmente no está disponible inmediatamente para el dispositivo.

- **Pulsación Larga** (funcionalidad futura): Activará el modo de entrada de voz.

### Botones de Navegación

Los botones izquierdo y derecho te permiten navegar entre múltiples páginas si tu panel de control contiene más de una página:

- **Botón Izquierdo**: Navegar a la página anterior

- **Botón Derecho**: Navegar a la página siguiente

### Reinicio de Red

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/138.jpg" style={{width:700, height:'auto'}}/></div>

Si necesitas conectarte a una red Wi-Fi diferente:

**Paso 1.** Mantén presionados ambos botones de navegación (izquierdo y derecho) simultáneamente durante 2 segundos.

**Paso 2.** El dispositivo entrará en modo de configuración Wi-Fi, y puedes seguir los pasos de [Configuración de Red](#network-setup) nuevamente para conectarte a una nueva red.

### Indicadores LED

- **LED Rojo**:
  - Apagado: Completamente cargado o no cargando
  - Siempre encendido: cargando

- **LED Verde**:
  - Encendido durante 30 segundos al arrancar: El dispositivo se está encendiendo

### Operación con Batería

Cuando opera con energía de batería:

- El dispositivo entrará automáticamente en modo de bajo consumo entre actualizaciones

- La duración de la batería depende de la frecuencia de actualización (típicamente 3 meses con una carga completa con configuraciones predeterminadas)

- El dispositivo mostrará un icono de batería baja en la esquina superior derecha cuando el nivel de batería esté por debajo del 20%

### Pines de Expansión

El reTerminal E1001 cuenta con un conector de expansión de 8 pines (J2) que proporciona opciones de conectividad para agregar sensores externos, módulos u otro hardware para extender la funcionalidad de tu dispositivo. Este conector de expansión expone varios pines GPIO del ESP32-S3 e interfaces de comunicación, convirtiéndolo en un punto de conexión versátil para tus proyectos DIY.

#### Distribución de Pines del Conector de Expansión

El conector de expansión de 8 pines (J2) tiene la siguiente distribución de pines:

<div class="table-center">
 <table align="center">
  <tr>
   <th>Pin (de arriba hacia abajo)</th>
   <th>Etiqueta</th>
   <th>Pin ESP32-S3</th>
   <th>Función</th>
   <th>Descripción</th>
  </tr>
  <tr>
   <td>1</td>
   <td>HEADER_3V3</td>
   <td>-</td>
   <td>Alimentación</td>
   <td>Suministro de energía de 3.3V para dispositivos externos</td>
  </tr>
  <tr>
   <td>2</td>
   <td>GND</td>
   <td>-</td>
   <td>Tierra</td>
   <td>Referencia de tierra común</td>
  </tr>
  <tr>
   <td>3</td>
   <td>ESP_IO46</td>
   <td>GPIO46</td>
   <td>GPIO/ADC</td>
   <td>E/S de propósito general con capacidad de entrada analógica</td>
  </tr>
  <tr>
   <td>4</td>
   <td>ESP_IO2/ADC1_CH4</td>
   <td>GPIO2</td>
   <td>GPIO/ADC</td>
   <td>E/S de propósito general con capacidad de entrada analógica (canal 4 de ADC1)</td>
  </tr>
  <tr>
   <td>5</td>
   <td>ESP_IO17/TX1</td>
   <td>GPIO17</td>
   <td>GPIO/UART TX</td>
   <td>GPIO o señal de transmisión UART (TX)</td>
  </tr>
  <tr>
   <td>6</td>
   <td>ESP_IO18/RX1</td>
   <td>GPIO18</td>
   <td>GPIO/UART RX</td>
   <td>GPIO o señal de recepción UART (RX)</td>
  </tr>
  <tr>
   <td>7</td>
   <td>ESP_IO20/I2C0_SCL</td>
   <td>GPIO20</td>
   <td>GPIO/I2C SCL</td>
   <td>GPIO o señal de reloj I2C</td>
  </tr>
  <tr>
   <td>8</td>
   <td>ESP_IO19/I2C0_SDA</td>
   <td>GPIO19</td>
   <td>GPIO/I2C SDA</td>
   <td>GPIO o señal de datos I2C</td>
  </tr>
 </table>
</div>

## Colocación del Dispositivo

El reTerminal E1001 viene con un accesorio de soporte impreso en 3D que te permite posicionar el dispositivo en posición vertical para una visualización óptima:

**Paso 1.** Localiza el soporte impreso en 3D incluido en el paquete.

**Paso 2.** Posiciona el soporte contra el área de montaje designada en la parte inferior trasera del reTerminal E1001 donde se encuentran las tuercas empotradas.

**Paso 3.** Usa un destornillador largo para asegurar el soporte al dispositivo apretando los tornillos en las tuercas empotradas en la parte trasera del reTerminal E1001.

**Paso 4.** Una vez asegurado firmemente, coloca el reTerminal E1001 en una superficie plana donde el soporte lo mantenga en posición vertical.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/139.jpg" style={{width:600, height:'auto'}}/></div>

:::note
El soporte proporciona un ángulo de visualización fijo y no se puede ajustar. Este posicionamiento fijo está diseñado para ofrecer una visibilidad óptima en la mayoría de escenarios de uso.

El soporte permite que el dispositivo se coloque en escritorios, encimeras o estantes, haciéndolo ideal para usar como pantalla de información, panel de control o marco de fotos digital en varios entornos.
:::

## Solución de Problemas

### P1: El Dispositivo No Se Enciende

- Asegúrate de que el interruptor de encendido esté en la posición ON
- Conecta el cable USB-C para cargar el dispositivo
- Verifica si el LED rojo está siempre encendido (indicando carga)
- Si usas energía de batería, asegúrate de que la batería esté correctamente conectada y cargada

### P2: No Se Puede Conectar a Wi-Fi

- Verifica que estés ingresando la contraseña de Wi-Fi correcta
- Asegúrate de que tu red Wi-Fi esté operativa
- Verifica si tu router Wi-Fi soporta redes de 2.4GHz (5GHz no es compatible)
- Intenta posicionar el dispositivo más cerca de tu router Wi-Fi

### P3: La Pantalla No Se Actualiza

- Presiona el botón de actualización para activar manualmente una actualización
- Verifica que el dispositivo esté conectado a Wi-Fi (sin icono de desconexión en la esquina)
- Revisa tu cuenta de SenseCraft para asegurar que el panel esté correctamente desplegado
- Si el problema persiste, intenta reiniciar el dispositivo

### P4: Conexión de Red Perdida

- El dispositivo intentará automáticamente reconectarse a redes conocidas
- Cuando se reconecte, el icono de desconexión Wi-Fi desaparecerá
- Si no puede reconectarse, sigue el procedimiento de Reinicio de Red mencionado arriba

## Recursos

- [Esquemático del reTerminal E1001 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004307_reTerminal_E1001_V1.0_SCH_250805.pdf)
- [Hoja de Datos del ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [Documentación de la Plataforma SenseCraft HMI](https://wiki.seeedstudio.com/es/sensecraft_hmi_overview)
<!-- - [Repositorio de GitHub](/es/getting_started_with_reterminal_e1001) -->

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
