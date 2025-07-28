---
title: Mini Soldering Iron
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Mini_Soldering_Iron/
slug: /es/Mini_Soldering_Iron
last_update:
  date: 07/14/2025
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_product_view.jpg)

Mini Soldering Iron es un soldador delgado, liviano, con control preciso de temperatura y calentamiento rápido (de temperatura ambiente a 300 ℃ en 10 segundos) con pantalla OLED, que será una herramienta esencial en tu kit de desarrollo. También cuenta con modo de reposo y notificación de sobrecalentamiento. Además, es fácil de ensamblar y seguro contra ESD (a través de pinza de tierra). El rango de temperatura de este soldador es de 100 ~ 400 ℃ (212 ~ 752 ℉), y contiene dos puntas de soldador integradas (con calentador) y compactas para diferentes circunstancias. Puedes configurar los ajustes mediante la interfaz USB micro tipo B.<sup>[1]</sup>

<sup>[1]</sup>Esta página solo muestra una forma rápida y la información principal para comenzar. Para información detallada, consulta el manual incluido.

|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Mini%C2%A0Soldering%C2%A0Iron%C2%A0Deluxe%C2%A0Kit%C2%A0Europe-Standard-p-2592.html?ref=newInBazaar)|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Mini%C2%A0Soldering%C2%A0Iron%C2%A0Deluxe%C2%A0Kit%C2%A0US%C2%A0Standard-p-2593.html?ref=newInBazaar)|
|:---:|:---:|
|Para edición EU|Para edición US|

## Características
---
* Control de temperatura preciso (estabilidad dentro de ± 2%)

* Soldador delgado y liviano, sin fatiga para trabajos prolongados

* Calentamiento rápido para alta eficiencia

* Adaptador de corriente separado para mayor seguridad personal

* Pinza de tierra para protección contra ESD

* Interfaz USB micro tipo B para configuración personalizada y actualización de firmware

* No requiere calibración manual

* Unidad de temperatura intercambiable (℃ o ℉)

## Especificaciones
---
<table>
<tr>
<td> Pantalla </td>
<td> OLED
</td></tr>
<tr>
<td> Interfaz USB </td>
<td> USB micro tipo B
</td></tr>
<tr>
<td> Peso </td>
<td> 33g (adaptador de corriente no incluido)
</td></tr>
<tr>
<td> Potencia </td>
<td> 65W
</td></tr>
<tr>
<td> Voltaje de entrada (para adaptador) </td>
<td> 100 ~ 240 V
</td></tr>
<tr>
<td> Rango de temperatura </td>
<td> 100 ~ 400 ℃ (212 ~ 752 ℉)
</td></tr>
<tr>
<td> Impedancia de las puntas a tierra </td>
<td> 2 Ω
</td></tr>
<tr>
<td> Estabilidad de temperatura </td>
<td> ± 2%
</td></tr>
<tr>
<td> Temperatura modo reposo </td>
<td> 200℃ (392℉), ajustable
</td></tr></table>

## Lista de piezas
---

<table>
<tr>
<th>Nombre de la pieza</th>
<th>Cantidad</th>
</tr>
<tr>
<td> Mini Soldering Iron (parte principal) </td>
<td> 1PC
</td></tr>
<tr>
<td> Kit de soldadura PCB </td>
<td> 1PC
</td></tr>
<tr>
<td> Punta de soldador tipo BC2 </td>
<td> 1PC
</td></tr>
<tr>
<td> Punta de soldador tipo B2 </td>
<td> 1PC
</td></tr>
<tr>
<td> Soporte para soldador </td>
<td> 1PC
</td></tr>
<tr>
<td> Kit de soldadura PCB </td>
<td> 1PC
</td></tr>
<tr>
<td> Adaptador de corriente DC5525 </td>
<td> 1PC
</td></tr>
<tr>
<td> Pinzas de tierra </td>
<td> 1PC
</td></tr>
<tr>
<td> Llave hexagonal (y dos tornillos de repuesto) </td>
<td> 1PC
</td></tr>
<tr>
<td> Manual </td>
<td> 1PC
</td></tr></table>

## Primeros pasos
---
**Nota:** En este caso mostramos un entorno general de desarrollo.  
Esta sección te muestra las operaciones básicas con este soldador. Para más detalles, por favor consulta el manual incluido en el paquete.

### Vista Explodida

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_exploded_view_s.jpg)
<dl><dd> ①. Tornillo de fijación de la punta del soldador
</dd><dd> ②. Botón A
</dd><dd> ③. Botón B
</dd><dd> ④. Tornillo de ajuste
</dd><dd> ⑤. Puerto de alimentación
</dd><dd> ⑥. Micro USB
</dd><dd> ⑦. Puerto DC5525 12-24V
</dd><dd> ⑧. Puerto de conexión de la punta del soldador
</dd><dd> ⑨. Lado de conexión del soldador
</dd><dd> ⑩. Elemento calefactor del soldador
</dd></dl>

### Montaje del soldador

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_installation_guide.jpg)

1. Afloja el tornillo de la punta, inserta la punta del soldador en el puerto de conexión y luego aprieta el tornillo.

2. Conecta los cables de tierra con el tornillo de tierra.

3. Conecta el conector DC al Mini Soldering Iron, enchufa el cable de alimentación y enciende el dispositivo según corresponda.

### Operaciones básicas

**Ajustar la temperatura**

Presiona los botones para ajustar la temperatura.

Presiona el botón A para aumentar la temperatura, presiona el botón B para disminuirla.

**Calibración**

1. Presiona el botón B en modo espera (sin calentamiento) para entrar en modo termómetro.

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_calibration_step_1.jpg)

2. Presiona simultáneamente los botones B y A para entrar en modo termómetro. Se ejecutará la calibración automáticamente, no requiere operación manual.

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_calibration_step_2.jpg)

3. Después de aproximadamente 30 segundos, mantén presionado cualquiera de los dos botones para salir del modo calibración.

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_calibration_step_3.jpg)

4. La figura de la izquierda muestra que la auto-calibración fue exitosa, la figura de la derecha muestra que falló. Si falla, repite los pasos anteriores.

### Un poco de práctica

Puedes hacer un ejercicio soldando algunos LEDs y resistencias en una placa PCB con forma de hoja que viene incluida en el paquete.

1. Monta el soldador siguiendo los pasos descritos arriba.  
2. Suelda los cuatro LEDs y las cuatro resistencias en la placa PCB.

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_solderin_iron_practice_s.JPG)

_**Nota**_ Debes alinear los LEDs en la dirección correcta ya que son componentes bipolares:

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_solderin_iron_practice-directions-s.jpg)

_**Nota**_ Debes soldar un componente electrónico siguiendo estos pasos básicos:

- Aplica un poco de estaño en el punto de soldadura, y luego aplica un poco en el pin correspondiente.  
- Une ambos puntos con el soldador.

## Recursos
---
[Manual de usuario](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/res/Mini_Soldering_Iron_manual.zip)

## Soporte técnico y discusión
Si tienes algún problema técnico, envía tu consulta a nuestro [foro](http://forum.seeedstudio.com/).  
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurar que tu experiencia sea lo más satisfactoria posible. Ofrecemos varios canales de comunicación para diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>