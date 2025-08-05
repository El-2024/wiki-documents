---
title: DSO Quad:Calibración
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/DSO_Quad-Calibration/
slug: /es/DSO_Quad-Calibration
last_update:
  date: 11/14/2025
  author: Guillermo
---

La calibración consta de diferentes partes:

* Calibración de DC con

* Desplazamiento a cero (Zero Offset)

* Ganancia (Gain)

* Calibración de AC (respuesta de pendiente, sobreoscilación)

* Para 1 ... 10V/div

* Para 50 ... 500mV/div  
* Para sonda x10

## Desplazamiento a cero (Zero Offset)

Esta calibración se realiza casi automáticamente. El DSO debe estar bien a temperatura de operación para esto. Por lo tanto, deberías haberlo encendido al menos unos 10 minutos antes. Después de seleccionar "Calibr" desde el menú "Save/Recall" (botón "Square", desplazarse hasta el último ítem, presionar el botón -/+), se te pedirá que pongas el canal CH_A en corto a tierra (GND). Si estás usando una sonda, esta debe estar en modo "x1", no en "x10". La calibración se inicia presionando el botón "Square". Después de unos segundos, termina y espera el primer paso de la calibración de Ganancia. Si no quieres hacer la calibración de ganancia aquí, ve con la flecha derecha a través de todos los rangos sin modificar nada con el navegador -/+. Entonces puedes repetirla (botón cuadrado) o ir a la "siguiente operación" con la flecha derecha del navegador y hacer el ajuste de cero en CH_B.

Información adicional: Aunque el voltaje de entrada sea cero, un amplificador real tiene un pequeño valor no nulo en la salida. Y este valor cambia si se cambian las resistencias del rango. Este desplazamiento a cero se evalúa aquí para cada rango y esos valores se usan luego para corregir digitalmente sumando o restando ese offset.

## Calibración de Ganancia (Gain Calibration)

Para la calibración de ganancia se requiere hardware externo adicional. En cada rango debe aplicarse un voltaje DC conocido de aproximadamente 80 a 100% del rango completo. Ese "rango completo" es, por ejemplo, 50mV/div * 6 divisiones = 0.3V o 10V/div * 6 divisiones = 60V. Por lo tanto, necesitas los siguientes voltajes:

```
0.25... 0.3 V for 50mV/div range
0.5 ... 0.6 V for 0.1V/div range
1.0 ... 1.2 V for 0.2V/div range
2.5 ... 3.0 V for 0.5V/div range
5.0 ... 6.0 V for   1V/div range
10  ... 12  V for   2V/div range
25  ... 30  V for   5V/div range
50  ... 60  V for  10V/div range
```


Sugiero usar algunas resistencias como divisor de voltaje y un multímetro para medir el voltaje. Ten en cuenta que los multímetros muy baratos a menudo no son precisos. Pero uno de precio entre 25 y 40 € (o US-$) debería ser suficientemente preciso. Los voltajes más bajos pueden obtenerse, por ejemplo, de un cargador USB o de una fuente de 12V o 19V (como un adaptador de notebook). Los 50 ... 60V pueden ser lo más difícil de conseguir. Puedes calibrar solo los rangos más bajos y aceptar una menor precisión en los rangos altos. Una solución posible para el voltaje alto es usar convertidores DC/DC, por ejemplo dos convertidores de 5V a 24V, que se consiguen por unos 5€ cada uno. Un corriente de salida de 5mA es suficiente. Un circuito completo que se pueda alimentar con 5V podría ser así: [[[1]](https://files.seeedstudio.com/wiki/DSO_Quad-Calibration/res/GainCalibrationCircuit.PNG)] Los valores de salida dados pueden variar según el voltaje de entrada y las tolerancias de las resistencias, pero estarán dentro del rango requerido mencionado arriba. **Atención:** ¡54V es un voltaje peligroso!

Con este equipo puedes conectar el multímetro y el canal del DSO paso a paso a la salida de ese circuito y usar los botones -/+ para ajustar el valor del DSO al mismo valor que el multímetro.

## Calibración AC

Mientras que la calibración DC se aplica en la parte digital del DSO, la calibración AC se realiza cambiando los valores de algunos capacitores en el hardware. La relación de división de los capacitores debe coincidir con la relación de división de las resistencias.

![](https://files.seeedstudio.com/wiki/DSO_Quad-Calibration/img/DSO203_AC-Cal_Circuit_Diagr.PNG).

El procedimiento de calibración para el DSO Quad ya está descrito, por ejemplo, aquí: [[2]](http://neophob.com/2012/03/dso-quad-for-dummies/) Usa la salida de onda cuadrada incorporada. Para el canal Ch_A primero pon la sonda en x1 y ajusta A1 (=C5A) en el rango 1V/div. Luego ajusta A2 (C3A) en el rango 500mV/div. Después revisa de nuevo el ajuste A1 y luego el A2, porque cada uno afecta un poco al otro. Finalmente pon la sonda en x10, selecciona un rango adecuado y ajusta A3.

## Véase también

* [DSO Quad](/DSO_Quad "DSO Quad")

* [DSO Quad: Actualización de firmware](/DSO_Quad-Building_Firmware "DSO Quad:Upgrading Firmware")

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte distintos tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
