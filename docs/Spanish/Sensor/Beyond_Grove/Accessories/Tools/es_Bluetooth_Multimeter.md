---
title: Multímetro Bluetooth
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Bluetooth_Multimeter/
slug: /es/Bluetooth_Multimeter
last_update:
  date: 07/14/2025
  author: Guillermo
---


El **Multímetro Bluetooth** es un periférico inteligente para teléfonos Android, diseñado especialmente para ingenieros. No solo puede recopilar fácilmente datos como voltaje, corriente y resistencia, sino que también puede comunicarse con los teléfonos mediante Bluetooth. Así, los datos recolectados se muestran directamente en tu teléfono. La optimización continua de hardware y software garantiza la precisión en las mediciones de este multímetro.

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Bluetooth_Multimeter.jpg)

¡Tanto el hardware como el software son de código abierto! Además, proporcionamos una API y documentación detallada, lo que convierte a este multímetro Bluetooth en una plataforma abierta para desarrolladores, permitiendo su uso y rediseño de forma más conveniente. Puede recolectar datos de diversos sensores, como los de ritmo cardíaco, y transmitirlos a teléfonos inteligentes para su monitoreo. La combinación perfecta de hardware y software brinda infinitas posibilidades para tus aplicaciones y desarrollos.

Este multímetro Bluetooth cuenta con una batería de litio incorporada y un circuito de recarga. El control estricto del consumo de energía desde el software asegura una aplicación sencilla del producto. Su carcasa de acrílico facilita el ensamblado y mejora la estabilidad y confiabilidad del dispositivo.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-Multimeter-p-1535.html)

##   Especificaciones
---
<table cellspacing="0" width="80%">
<tr>
<th>Parámetro</th>
<th>Mínimo</th>
<th>Típico</th>
<th>Máximo</th>
<th>Unidad</th>
</tr>

<tr>
<td>Rango de medición de voltaje</td>
<td>-30</td>
<td>-</td>
<td>30</td>
<td>VDC</td>
</tr>

<tr>
<td>Precisión en medición de voltaje</td>
<td colspan="3">3</td>
<td>%</td>
</tr>

<tr>
<td>Rango de medición de corriente (máx)</td>
<td colspan="3">1</td>
<td>A</td>
</tr>

<tr>
<td>Precisión en medición de corriente</td>
<td colspan="3">3</td>
<td>%</td>
</tr>

<tr>
<td>Rango de medición de resistencia</td>
<td>10</td>
<td>-</td>
<td>1,000,000</td>
<td>Ω</td>
</tr>

<tr>
<td>Precisión en medición de resistencia</td>
<td colspan="3">5</td>
<td>%</td>
</tr>

<tr>
<td>Temperatura de operación</td>
<td>0</td>
<td>-</td>
<td>45</td>
<td>℃</td>
</tr>
</table>

##  Descripción General del Producto
---
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/产品视图.png)

*   ①: Interfaz USB. No solo provee energía, también carga la batería interna. Usamos una batería de litio de 500mAh, con una duración estimada de 10 horas.
*   ②: Conector de programación para el módulo Bluetooth Serial.
*   ③: Interruptor de encendido del Multímetro Bluetooth.
*   ④: Indicador de emparejamiento.  
    - Luz roja y azul parpadean alternativamente → durante el emparejamiento.  
    - Luz azul parpadeando → emparejado.

*   ⑤: Indicador de carga.  
    - Luz roja encendida → cargando.  
    - Luz verde encendida → carga completa.

*   ⑥: Indicador de transferencia de datos. Parpadea mientras se transmiten datos.
*   ⑦: Conector de audio para medir resistencia.
*   ⑧: Conector de audio para medir voltaje.
*   ⑨: Conector de audio para medir corriente.
*   ⑩: Interruptor de rango para corriente.

##   Diagrama de Funcionamiento
---
El siguiente esquema muestra cómo trabaja el Multímetro Bluetooth junto con un dispositivo Android:

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_Multimater_Work_Principle_1.jpg)

##   Demostración
---
Este multímetro Bluetooth es un dispositivo portátil que mide voltaje, resistencia y corriente, y envía los datos a otros dispositivos vía Bluetooth para su monitoreo. A continuación se muestra cómo utilizarlo:

### **Emparejar teléfono y Multímetro Bluetooth**

1. Descarga [el paquete de la aplicación: SmartMeter](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/SmartMeterWithUI_Installation_package.zip) e instálalo.

2. Ejecuta la aplicación SmartMeter. Si el Bluetooth no está activado, se mostrará un mensaje pidiendo permiso. Haz clic en "YES" para activarlo.  
   ![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_request.JPG)

3. Al ingresar a la interfaz de usuario (UI), enciende el interruptor rojo. La pantalla mostrará 0.0.  
   ![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_Switch.jpg)

4. Haz clic en el ícono de Bluetooth para seleccionar el dispositivo.  
   ![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_device.jpg)

5. Selecciona el dispositivo "BT MULTIMETER" para emparejarlo. Si no aparece, haz clic en "Scan for device" para buscarlo.  
   ![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Bt_list_device.JPG)

   Nota: Si no aparece ningún dispositivo ni la opción de escaneo, primero empareja el Bluetooth desde la configuración del teléfono y luego ejecuta la app.

6. Ingresa "0000" (por defecto) o "1234" como código de emparejamiento. Verifica el indicador de emparejamiento para confirmar si fue exitoso.  
   ![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Pair.JPG)

7. ¡Felicidades! El emparejamiento ha sido completado.  
   ![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_Interface.jpg)

### **Medición**

Como con cualquier multímetro, hay precauciones: por ejemplo, **no medir resistencia si el circuito está alimentado**. Te recomendamos leer las advertencias antes de usarlo.

#### Medir Resistencia  
Selecciona "Ω" en la app de Android y conecta la línea de audio al conector marcado como **R**.  
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Om.JPG)

#### Medir Voltaje  
Selecciona "V" en la app y conecta la línea de audio al conector **VOL**.  
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/V.JPG)

#### Medir Corriente  
El procedimiento es igual al de cualquier multímetro. Recuerda seleccionar el rango correcto de corriente.

<font color="blue">Nota: Asegúrate de que la línea de audio esté conectada al conector correspondiente y que el cursor esté en la posición correcta para obtener datos precisos.</font>

##   Referencia
---
###  Interfaz de Usuario

Contamos con tres versiones de UI para la app Android del multímetro Bluetooth:

|UI 1.jpg|UI 2.jpg|UI 3.jpg|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_1.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_2.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_3.jpg)

Se determinó que los colores de las dos primeras versiones eran poco llamativos. Se sugirió usar tonos comunes en multímetros como naranja con negro o rojo con negro. La versión amarilla incluye botón de retención (Hold), botón de rango (Range), y dial con cinco posiciones: mA, A, Ω, V y OFF (opcional). Comentarios y retroalimentación de usuarios:

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Red_Version.jpg)

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/GreenSumsung.jpg)

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Yellow.jpg)

### Estructura y Apariencia

**Dibujo Renderizado**

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_effect.jpg)

**Imagen Impresa**  

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Printed_Picture.jpg)

## Visualizador de Esquemáticos Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/Bluetooth_Multimater_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Archivo Eagle del Multímetro Bluetooth](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/Bluetooth_Multimater_Eagle_File.zip)
- [Librería del Multímetro Bluetooth](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/SmartMultimeter_Library.zip)
- [Aplicación SmartMeter (instalador)](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/SmartMeterWithUI_Installation_package.zip)

## Soporte Técnico y Discusión del Producto

Si tienes algún problema técnico, envíalo en nuestro [foro](http://forum.seeedstudio.com/). Gracias por elegir nuestros productos. Estamos aquí para ofrecerte soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Contamos con diversos canales de comunicación para adaptarnos a tus preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>