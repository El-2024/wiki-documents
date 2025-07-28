---
title: Sensor de Peso - Celda de Carga 0-500g
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Weight_Sensor_Load_Cell_0-500g/
slug: /es/Weight_Sensor_Load_Cell_0-500g
last_update:
  date: 07/16/2025
  author: Guillermo
---
![](https://files.seeedstudio.com/wiki/Weight_Sensor_Load_Cell_0-500g/img/loadcell500.jpg)

Aplicable a básculas electrónicas, básculas con cálculo de precio, básculas de plataforma, balanzas digitales; básculas postales, balanzas electrónicas y todo tipo de básculas comerciales con una sola celda de carga.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/weight-sensor-load-cell-0500g-p-525.html?cPath=144_150)

## Especificaciones
---
- **Capacidad:** 500 g  
- **Sensibilidad de salida:** 0.5 ± 0.1 mV/V  
- **No linealidad:** 0.05 % F.S  
- **Histéresis:** 0.05 % F.S  
- **Repetibilidad:** 0.05 % F.S  
- **Creep (30 min):** 0.05 % F.S  
- **Efecto térmico sobre sensibilidad:** 0.05 % F.S / 10 °C  
- **Efecto térmico sobre cero:** 0.05 % F.S / 10 °C  
- **Balance de cero:** ± 0.5 % F.S  
- **Resistencia de entrada:** 1120 ± 10 Ω  
- **Resistencia de salida:** 1000 ± 10 Ω  
- **Resistencia de aislamiento:** ≥ 2000 MΩ  
- **Voltaje de excitación recomendado:** 5 V  
- **Colores de cableado:**  
  - Rojo: Exc +  
  - Negro: Exc –  
  - Verde: Señal +  
  - Blanco: Señal –

##   Uso
---
###  **Instalación de Hardware**

![](https://files.seeedstudio.com/wiki/Weight_Sensor_Load_Cell_0-500g/img/Weight_Sensor.png)

**Nota:** El sensor de peso entrega 0 V cuando la carga es inferior a 150 g. Por lo tanto, no es posible medir directamente desde 0 g. La solución consiste en usar una carga de 200 g como referencia de "cero", y una carga de 700 g como "carga completa" (500 g útiles). Así se evita el punto ciego del sensor y se calibra correctamente.

## Programación (Lectura en Arduino)
```
void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int value;
    value = analogRead(0);
    Serial.println(value);
}
```

###   Enlaces Externos

[Cómo usar arduino](http://cerulean.dk/words/?page_id=42).

##   Recursos
---
- [INA125 datasheet](https://files.seeedstudio.com/wiki/Weight_Sensor_Load_Cell_0-500g/res/INA125.pdf)

## Soporte Técnico y Discusión

Si tienes algún problema técnico, publícalo en nuestro [foro](http://forum.seeedstudio.com/).  
¡Gracias por elegir nuestros productos! Estamos aquí para ayudarte y asegurarnos de que tu experiencia sea lo más fluida posible.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>