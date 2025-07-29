---
title: DSO Nano v3
nointro:
keywords:
  - docs
  - docusaurus
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/DSO_Nano_v3
last_update:
  date: 07/14/2025
  author: Guillermo
---
<!-- ---
name: DSO Nano v3
category: MakerPro
bzurl: https://www.seeedstudio.com/DSO-Nano-v3-p-1358.html
oldwikiname:  DSO Nano v3
prodimagename:  Nano_v3.jpg
surveyurl: https://www.research.net/r/DSO_Nano_v3
sku:     109990013
--- -->
![](https://files.seeedstudio.com/wiki/DSO_Nano_v3/img/Nano_v3.jpg)

El **DSO Nano v3** es un osciloscopio digital portátil de almacenamiento. Basado en un microcontrolador ARM Cortex-M3 de 32 bits, está equipado con una pantalla a color de 320×240, puerto USB y función de recarga. Es compacto, fácil de operar y cumple con las necesidades básicas de laboratorios escolares, reparaciones electrónicas e ingeniería. A diferencia de la versión 2, la versión 3 no utiliza una carcasa plástica blanca, sino una carcasa metálica negra más resistente y duradera.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/DSO-Nano-v3-p-1358.html)

## Características

---

- Portátil y liviano  
- Pantalla a color  
- Almacenamiento y reproducción de formas de onda  
- 6 modos de disparo  
- Ancho de banda analógico de 200 kHz  
- Marcadores de medición completos y características de señal  
- Generador de señales incorporado  
- Accesorios disponibles  
- Hardware y firmware de código abierto


## Reglas generales de seguridad

---
Para garantizar tu seguridad y evitar daños al producto o dispositivos conectados, lee cuidadosamente las siguientes reglas.  
Utiliza este producto conforme a las recomendaciones para evitar posibles peligros:

- **Usa el cable de alimentación adecuado.** Solo emplea cables certificados en tu país o región.

- **Conecta/desconecta correctamente.** No conectes o desconectes sondas cuando estén conectadas a una fuente de energía. Asegúrate de desconectar primero la energía del circuito en prueba.

- **Respeta las especificaciones de los terminales.** No midas señales con voltaje DC mayor a 100 V o podrías dañar el equipo.

- **No operes en ambientes húmedos, inflamables o explosivos.**

- **Mantén la superficie del dispositivo limpia y seca.**

## Especificaciones

---

### Especificaciones clave

<table>
  <tr>
    <td width="400px"> Pantalla </td>
    <td width="600px"> TFT LCD a color de 2.8", 65K colores, 320×240 </td>
  </tr>
  <tr>
    <td> Ancho de banda analógico </td>
    <td> 0 - 200KHz </td>
  </tr>
  <tr>
    <td> Tasa de muestreo máxima </td>
    <td> 1 Msps a 12 bits </td>
  </tr>
  <tr>
    <td> Memoria de muestreo </td>
    <td> 4096 puntos </td>
  </tr>
  <tr>
    <td> Sensibilidad horizontal </td>
    <td> 1uS/Div~10S/Div </td>
  </tr>
  <tr>
    <td> Posición horizontal </td>
    <td> Ajustable con indicador </td>
  </tr>
  <tr>
    <td rowspan="2"> Sensibilidad vertical </td>
    <td> 10 mV/div – 10 V/div (con sonda ×1) </td>
  </tr>
  <tr>
    <td> 0.5 V/div – 100 V/div (con sonda ×10) </td>
  </tr>
  <tr>
    <td> Posición vertical </td>
    <td> Ajustable con indicador </td>
  </tr>
  <tr>
    <td> Impedancia de entrada </td>
    <td> &gt;500KΩ </td>
  </tr>
  <tr>
    <td> Voltaje de entrada máximo </td>
    <td> 40 Vpp (con sonda ×1) </td>
  </tr>
  <tr>
    <td> Acoplamiento </td>
    <td> DCs </td>
  </tr>
  <tr>
    <td rowspan="4"> Modos de disparo </td>
    <td> Auto, Normal, Simple, Ninguno, Escaneo y Ajuste automático (Fit) </td>
  </tr>
  <tr>
    <td> Modos de disparo avanzados </td>
  </tr>
  <tr>
    <td> Flanco de subida/bajada </td>
  </tr>
  <tr>
    <td> Nivel ajustable, sensibilidad ajustable </td>
  </tr>
  <tr>
    <td rowspan="4"> Funciones de medición </td>
    <td> Frecuencia, ciclo, duty cycle, voltaje pico, voltaje RMS, promedio y DC </td>
  </tr>
  <tr>
    <td> Marcadores verticales: Precisión aumentada con marcadores </td>
  </tr>
  <tr>
    <td> Marcadores horizontales: Precisión aumentada con marcadores </td>
  </tr>
  <tr>
    <td> Hold/Run </td>
  </tr>
  <tr>
    <td> Generador de señal </td>
    <td> Onda cuadrada de 10 Hz a 1 MHz </td>
  </tr>
  <tr>
    <td> Almacenamiento de forma de onda </td>
    <td> Tarjeta Micro SD </td>
  </tr>
  <tr>
    <td> Conexión a PC </td>
    <td> Vía USB como lector de tarjeta SD </td>
  </tr>
  <tr>
    <td> Actualización de firmware </td>
    <td> USB y batería de litio de 500 mAh 3.7 V </td>
  </tr>
  <tr>
    <td> Dimensiones (sin sonda) </td>
    <td> 91 mm × 62 mm × 13 mm </td>
  </tr>
</table>

### Structure

![](https://files.seeedstudio.com/wiki/DSO_Nano_v3/img/DSO_Nano_v3_Structure.jpg)

Nota: En algunos dispositivos (como el número de serie E1C5A0C1), no hay ranura para tarjeta TF ni conector en la PCB.

## Uso

---

### Operación básica

- Los botones **Izquierda/Derecha** navegan por el menú.  
- **Arriba/Abajo** ajustan valores.  
- El botón **OK** muestra/oculta marcadores o confirma acciones.  
- El botón **A (Run/Stop)** congela la señal; presiona de nuevo para reanudar.  
- El botón **B (Shift)** activa funciones rápidas.  

En este texto, los elementos ajustables se indican en <span style={{color: 'red'}}>rojo</span>.

![](https://files.seeedstudio.com/wiki/DSO_Nano_v3/img/Dsonanov2-user-interface-1.jpg)

### Interfaz de usuario

La pantalla se divide en un área central de visualización y 3 barras de operación.  
- La barra superior contiene los ajustes más frecuentes.  
- La barra inferior muestra resultados de medición precisos.  
- La columna derecha permite ajustes avanzados mediante iconos.

### Ampliación de señales

Mueve el cursor a la <font color="red">Escala vertical</font> y a la <font color="red">Base de tiempo</font> para comenzar a explorar la visualización de la señal. Presiona los botones de arriba/abajo para ajustar el voltaje/div o el tiempo/div. Cada “div” es una unidad de división de la cuadrícula en la pantalla; cuenta las divisiones para obtener una medición rápida. La escala vertical va de 10 mV/div a 10 V/div. La base de tiempo va de 1 µs/div a 10 s/div. Ten en cuenta que en bases de tiempo grandes la pantalla puede parecer congelada, ya que 10 s/div significa que toma 120 segundos actualizar toda la pantalla (12 divisiones de ancho).

La forma de onda podría estar fuera del rango visible incluso con una configuración adecuada de voltaje/div. Puedes cambiar la posición en Y para mover la forma de onda hacia arriba o hacia abajo y centrarla en pantalla. El <font color="red">marcador de posición Y</font> indica 0 V como referencia.

Presiona el botón A para congelar la visualización actual (cambiando el <font color="red">estado</font> a HOLD) y presiónalo de nuevo para reanudar la actualización (estado RUN). Con el estado en HOLD, puedes seleccionar el ícono <font color="red">T0</font> y presionar los botones arriba/abajo para desplazarte hacia adelante o hacia atrás. Presiona el botón OK para mostrar u ocultar el marcador de posición X (una línea vertical amarilla punteada).

### Modos de disparo (trigger)

El Nano tiene seis modos de disparo, accesibles en la esquina superior izquierda de la pantalla. Estos son:

**AUTO**: Siempre actualiza la pantalla y se sincroniza al detectar un disparo.  
**NORM (al)**: Muestra una forma de onda sincronizada al disparar; en caso contrario, queda en blanco.  
**SING (le)**: Muestra una forma de onda disparada y la congela; luego queda en blanco hasta un nuevo disparo.  
**SCAN:** Barre continuamente la forma de onda de izquierda a derecha en pantalla.  
**NONE:** Muestra la forma de onda sin sincronización, ignorando el disparo.  
**FIT:** Ajusta automáticamente la escala vertical y horizontal para mostrar la forma de onda.

<table>
<caption> Tabla comparativa de los modos de disparo </caption>
<tr>
<th>Modo</th>
<th>Disparo</th>
<th>Forma de onda en pantalla</th>
<th>Sincronización</th>
<th>Aplicaciones recomendadas</th>
</tr>
<tr>
<td width="150px">AUTO</td>
<td width="150px">Sí</td>
<td width="200px">Siempre</td>
<td width="200px">Sí</td>
<td width="300px">Uso general</td>
</tr>
<tr>
<td>NORM</td>
<td>Sí</td>
<td>Disparada</td>
<td>Sí</td>
<td>Visualizar señales periódicas</td>
</tr>
<tr>
<td>SING</td>
<td>Sí</td>
<td>Disparada</td>
<td>Auto-hold</td>
<td>Capturar un pulso aleatorio</td>
</tr>
<tr>
<td>SCAN</td>
<td>No</td>
<td>Siempre</td>
<td>No</td>
<td>Monitoreo continuo de señales</td>
</tr>
<tr>
<td>NONE</td>
<td>No</td>
<td>Siempre</td>
<td>No</td>
<td>Observar señales sin sincronización</td>
</tr>
<tr>
<td>FIT</td>
<td>Sí</td>
<td>Ajuste automático</td>
<td>Sí</td>
<td>Visualización fácil de señales periódicas</td>
</tr>
</table>

Mueve el cursor a <font color="red">Vt = ??.? mV</font> y presiona los botones de arriba/abajo. Presiona OK para mostrar u ocultar los marcadores de nivel de disparo (líneas verdes punteadas horizontales). Para afinar el disparo, puedes ajustar el rango de sensibilidad del disparador <font color="red">TR</font> y el <font color="red">tipo de disparo</font>. Por defecto, el tipo de disparo está configurado en <font color="red">up S</font>, lo que significa que el disparo se activa cuando la señal cruza desde la línea de disparo inferior a la superior. <font color="red">Down S</font> activará el disparo en un flanco descendente de la señal.

Esto ayuda a evitar disparos erróneos causados por ruido, especialmente al medir señales rápidas de baja amplitud. Si ajustas la sensibilidad a 0, de modo que los dos marcadores de nivel de disparo se superpongan, obtendrás un disparo por nivel. Puedes consultar [Wikipedia para más información sobre disparo en osciloscopios](https://es.wikipedia.org/wiki/Osciloscopio#Barridos_con_disparo).

### Medición

![](https://files.seeedstudio.com/wiki/DSO_Nano_v3/img/Dsonanov2measurement.jpg)

La medición automática es útil para explorar rápidamente las características de la señal. Las opciones de medición incluyen: frecuencia, tiempo de ciclo, ciclo de trabajo, voltaje pico, voltaje RMS, voltaje promedio y voltaje DC. Ten en cuenta que la frecuencia, el tiempo de ciclo y el ciclo de trabajo solo se pueden medir con disparo activado.

Para una medición más precisa, utiliza los marcadores de medición. T2 y T1 controlan los marcadores de tiempo (dos líneas punteadas verticales). La diferencia de tiempo exacta entre las dos posiciones se muestra como "medida de tiempo" en la parte inferior de la pantalla. Los marcadores V1 y V2 se ajustan desde el panel de resultados de medición de voltaje ("V1-V2 = ? V") en el centro inferior de la pantalla.

Presionar el botón OK en un ítem del menú mostrará u ocultará la línea correspondiente en pantalla.

### Almacenamiento de formas de onda

Las formas de onda se pueden guardar en una tarjeta microSD o cargar desde ella. Necesitas una tarjeta microSD para esto (no incluida). Ten en cuenta que las tarjetas SDHC (tarjetas de alta velocidad mayores a 2 GB) **no son compatibles** actualmente. Sigue los pasos a continuación para preparar tu microSD:

1. Asegúrate de que tu tarjeta SD sea compatible con el modo SPI. (Memoria máxima: 2 GB)  
2. Formatea tu tarjeta SD con el sistema de archivos FAT16.

Una vez preparada la microSD, se habilitan los iconos **FS** (guardar archivo), **FL** (cargar archivo) y **SI** (guardar imagen). Presiona el botón OK en **FS** para guardar una forma de onda, o en **FL** para cargar una forma de onda desde la microSD. También puedes seleccionar **SI** para guardar un oscilograma en formato PNG.

### Generador de señales

El conector de audio de 3.5 mm debajo del puerto mini USB se utiliza para el generador de señales. Emite una onda cuadrada con frecuencia ajustable de 10 Hz a 1 MHz. La frecuencia se ajusta con Fo ("frecuencia de salida"). El voltaje pico es igual al voltaje de alimentación: aproximadamente 3.7 V si funciona con batería y 5 V si se alimenta por USB.

### Alimentación

El DSO Nano puede alimentarse con la batería interna de 500 mAh LiPo o mediante el puerto mini-USB. La carga toma aproximadamente 2 horas y 20 minutos hasta alcanzar los 4.12 V. Una unidad nueva solo funciona alrededor de 1 hora con batería, pero la duración se extenderá una vez que la batería se haya cargado completamente.

![](https://files.seeedstudio.com/wiki/DSO_Nano_v3/img/Dsonanov2-charging.JPG)

### Actualización del firmware

Para actualizar el firmware, sigue estos pasos:

1. Descarga el firmware más reciente para tu equipo en tu PC.

2. Presiona **la tecla “Down”** al mismo tiempo que enciendes el equipo para entrar en modo de actualización DFU.  
3. Conecta el DSO Nano v3 a tu PC mediante el cable USB. Aparecerá un disco removible llamado `DFU V3_11_A`. Copia el archivo `.hex` del firmware al directorio raíz del disco. Una vez que la extensión cambie de “.hex” a “.rdy”, reinicia el DSO Nano v3. El firmware se habrá actualizado.

**NOTA**: Si tienes varios archivos `.hex` (por ejemplo, el firmware BenF), debes copiar **cada archivo UNO por uno** y esperar a que cambie a “.rdy” antes de copiar el siguiente.  
Ejemplo:

1. Copia `file1.hex`  
2. Espera a que se convierta en `file1.rdy`  
3. Copia `file2.hex`  
4. Espera a que se convierta en `file2.rdy`

En Windows, verás que la "unidad" desaparece tras copiar cada archivo `.hex` y reaparece con el archivo `.rdy`.

![](https://files.seeedstudio.com/wiki/DSO_Nano_v3/img/DSO_Nano_v3_Firmware_Upgrades1.png)

 ![](https://files.seeedstudio.com/wiki/DSO_Nano_v3/img/DSO_Nano_v3_Firmware_Upgrades2.png)

## Preguntas frecuentes (FAQ)

---

* **¿Cuál es la versión de hardware y firmware del DSO Nano v3?**  
  El DSO Nano v3 tiene hardware versión 2.6 y firmware versión 2.6. Puedes encontrarlos en la sección de Recursos.

* **¿Cuál es la diferencia principal entre el DSO Nano v2 y v3?**  
  En realidad, ambos tienen el mismo hardware y firmware, así como la misma versión de DFU utilizada para actualizaciones. La principal diferencia está en el diseño del chasis: el DSO Nano v3 tiene una carcasa metálica negra, mientras que el DSO Nano v2 tiene una carcasa plástica blanca.

## Recursos

---

* [Manual de usuario DSO Nano V3 v4.22 (PDF)](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DS201V_4.22%20User%20Manual%EF%BC%88Increase%20the%20alignment%20and%20hidden%20reference%20line%EF%BC%89.pdf)
* [Firmware oficial DSO Nano V4.32](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DS201.V4.32.zip)
* [Firmware oficial App 2.6](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DSO_Nano_2.6_firmware.zip)

* [Firmware BenF v3.64](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/BenF364_LIB353.zip)  
  Agradecemos a **BenF** por compartir este excelente firmware y a **Alf** por adaptarlo para funcionar con DFU versión 3.22.  
  Ten en cuenta que el firmware BenF v3.64 **NO GUARDARÁ** en la memoria interna del V3. Si tu DSO Nano V3 no tiene ranura para tarjeta externa, no podrás guardar imágenes ni datos.

* [Diseño de hardware DSO Nano v2.6 (PDF)](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DSO_Nano_V2.6_VCT_PCB_Layout.pdf)
* [Esquemático de hardware DSO Nano v2.6 (PDF)](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DSO_Nano_V2.6_VCT_Schematic.pdf)
* [Manual de usuario DSO Nano V3 (PDF)](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DSO_Nano_V3_User_Manual.pdf)

### Archivos DFU Hex/Binarios

Útiles si tu DSO se ha bloqueado.

* [DFU_D329_VB_2M_SEEED para nano v3 (.hex)](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DFU_D329_VB_2M_SEEED_for_nano_v3.hex.zip)
* [DFU_A322 para nano v3 (.hex)](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DFU_A322_for_nano_v3.hex.zip)
* [Bootloader para nano v2 (.bin)](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/Bootloader_for_nano_v2.bin.zip)
* [DFU_D326_SD_MINI para hardware 1.7 (.hex)](https://files.seeedstudio.com/wiki/DSO_Nano_v3/res/DFU_D326_SD_MINI_for_hw1.7.hex.zip)

## Enlaces externos

* [DSO Nano en el foro de SeeedStudio](https://forum.seeedstudio.com/viewforum.php?f=22)
* [Foro Pocket Oscilloscope - DS0201](http://www.minidso.com/bbs/thread.php?fid=6)

## Soporte técnico y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintas formas de soporte y asegurar que tu experiencia con nuestros equipos sea lo más fluida posible.  
Ofrecemos varios canales de comunicación para adaptarnos a tus necesidades y preferencias.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
