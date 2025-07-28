---
title: Dínamo para Bicicleta con Soporte – 6V 3W
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Bicycle_Dynamo_With_Bracket-6V_3W/
slug: /es/Bicycle_Dynamo_With_Bracket-6V_3W
last_update:
  date: 02/03/2025
  author: Guillermo
---
![](http://bz.seeedstudio.com/depot/images/product/Bidynamo.jpg)

Este producto proporciona energía limpia y ecológica. Produce electricidad sin necesidad de combustible. Funciona de manera segura y silenciosa. Es moderno, y los usuarios pueden contribuir a proteger el planeta llevando una vida con bajas emisiones de carbono.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/bicycle-dynamo-with-bracket-6v-3w-p-798.html?cPath=155)

## Características
---
* Diseño simple y atractivo con disipación de calor, resistente a la lluvia, al polvo y a las vibraciones.
* Salida de corriente constante.

## Precauciones
---
1. No toques la carcasa del dínamo después de un uso prolongado, ya que podría causar quemaduras. Espera al menos 10 minutos antes de manipularlo.
2. Puede usarse en días lluviosos, pero no lo sumerjas en agua. Manténlo fuera del alcance de los niños.

##   Especificaciones
---
###   Tamaño general y estructura del dínamo

1. El diámetro máximo del cuerpo es: 40.5 mm. Longitud total del cuerpo principal: 94.5 mm

![](https://files.seeedstudio.com/wiki/Bicycle_Dynamo_With_Bracket-6V_3W/img/Bicycle-spec.JPG)

1. Rodillo de fricción  
2. Cuerpo del dínamo  
3. Imán permanente  
4. Soporte de bobinado  
5. Resorte de presión  
6. Bobina  
7. Llave de ajuste  
8. Placa de fijación  
9. Tapa trasera

2. **Salida**: 6 V, 3 W 

3. **Garantía**: 1 año  

4. **Vida útil estimada**: 2–3 años

### Parámetros Técnicos

**Prueba de potencia de salida bajo voltaje constante**

<table>
  <tbody><tr>
      <th>Velocidad(km/h)
      </th>
      <th>Potencia de salida(W)
      </th>
      <th>Voltaje de salida(V)
      </th>
      <th>Corriente de salida(A)
      </th></tr>
    <tr>
      <td width="200px">5
      </td>
      <td width="200px">0.56
      </td>
      <td width="200px">6.00
      </td>
      <td width="200px">0.126
      </td></tr>
    <tr>
      <td>15
      </td>
      <td>1.89
      </td>
      <td>6.00
      </td>
      <td>0.369
      </td></tr>
    <tr>
      <td>30
      </td>
      <td>4.09
      </td>
      <td>6.00
      </td>
      <td>0.560
      </td></tr></tbody></table>

**Prueba con carga de resistencia constante (18 ohms)**

<table>
  <tbody><tr>
      <th>Velocidad (km/h)
      </th>
      <th>Potencia de salida (W)
      </th>
      <th>Voltaje de salida (V)
      </th>
      <th>Corriente de salida (A)
      </th></tr>
    <tr>
      <td width="200px">5
      </td>
      <td width="200px">0.45
      </td>
      <td width="200px">2.45
      </td>
      <td width="200px">0.115
      </td></tr>
    <tr>
      <td>15
      </td>
      <td>1.89
      </td>
      <td>5.78
      </td>
      <td>0.325
      </td></tr>
    <tr>
      <td>30
      </td>
      <td>3.21
      </td>
      <td>7.23
      </td>
      <td>0.435
      </td></tr></tbody></table>


**Prueba de temperatura：**

<table>
  <tbody><tr>
      <th>Temp. ambiente
      </th>
      <th>Temp. carcasa
      </th>
      <th>Aumento de temperatura
      </th>
      <th>Observaciones
      </th></tr>
    <tr>
      <td width="200px">20℃
      </td>
      <td width="200px">55.2℃
      </td>
      <td width="200px">32.2℃
      </td>
      <td width="200px">Prueba a 30 cm de distancia
      </td></tr></tbody></table>


## Uso

### Instalación de hardware

Fija el dínamo en la horquilla delantera, cerca de la rueda. Ajusta la altura a una posición adecuada.  
(*Asegúrate de montar el dínamo en el lado correcto — izquierdo o derecho — según corresponda.*)

1. Mueve la llave para que el rodillo del dínamo toque el borde de la rueda en la posición correcta.


## Preguntas Frecuentes (FAQ)
---
*   Could it be used to power an Arduino directly?

**P: ¿Se puede usar para alimentar un Arduino directamente?**  
**R:** No directamente. Como todos los generadores, el dínamo genera **corriente alterna (AC)**, adecuada para focos incandescentes, pero los LEDs y dispositivos como Arduino requieren **corriente directa (DC)**.  
Necesitarás un **puente rectificador** primero. Después puedes agregar un circuito de carga o un convertidor DC-DC (por ejemplo, un *boost-buck converter*) para estabilizar el voltaje. Es mejor usar el dínamo para cargar una batería, y luego alimentar tu Arduino desde ella.

**P: ¿Qué pasa si me detengo (por ejemplo, en un semáforo)? ¿Puedo mantener el flujo de energía con un capacitor?**  
**R:** Sí. Un capacitor puede mantener la energía unos segundos o incluso más de un minuto, dependiendo del tamaño del capacitor y el brillo del LED.

**P: ¿Y si uso una batería? ¿Qué especificaciones debe tener?**  
**R:** Puedes buscar en internet guías para hacer luces de bicicleta con *standlight* (ese es el término de búsqueda). Esto te ayudará a encontrar una batería adecuada y cómo integrarla.

**P: Quiero usarlo para cargar un celular o alimentar un Arduino. ¿Es posible?**  
**R:** Sí, es totalmente posible. Pero necesitas convertir el voltaje AC variable (3–12 V aprox.) a DC regulado. También debes tener cuidado con los picos de voltaje si no hay carga, ya que podrías dañar los componentes. Una opción segura es mantener los dispositivos conectados todo el tiempo o usar una batería intermedia.

**IMPORTANTE:** Este dínamo está diseñado para montarse **solo en la horquilla delantera**. Cada dínamo tiene un lado específico (izquierdo o derecho). Consulta [este artículo](https://en.wikipedia.org/wiki/Bottle_dynamo) para ver imágenes y más detalles sobre su montaje.

##   Recursos
---
- [Archivo de especificaciones (DOC)](https://files.seeedstudio.com/wiki/Bicycle_Dynamo_With_Bracket-6V_3W/res/Spec.doc)

## Enlaces Externos

- [Cómo conectar cables de un dínamo](http://www.yellowjersey.org/dami.html)

- [Circuitos de dínamos para bicicletas](http://pilom.com/BicycleElectronics/DynamoCircuits.htm)

- [Foro sobre iluminación y electrónica de bicicletas](http://www.candlepowerforums.com/vb/forumdisplay.php?86-Bicycle)

## Soporte Técnico y Discusión

Si tienes problemas técnicos, por favor publica tu duda en nuestro [foro oficial](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte el soporte que necesites y asegurar que tu experiencia sea lo más fluida posible.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>