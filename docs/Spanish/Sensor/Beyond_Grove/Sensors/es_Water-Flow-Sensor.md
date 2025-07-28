---
title: Sensor de Flujo de Agua
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Water-Flow-Sensor/
slug: /es/Water-Flow-Sensor
last_update:
  date: 07/16/2025
  author: Guillermo
---

<div align="center">
  <figure>
    <img src="https://static-cdn.seeedstudio.site/media/catalog/product/cache/ab187aaa5f626ad16c8031644cd2de5b/h/t/httpsstatics3.seeedstudio.comseeedfile2017-06bazaar483771_1.jpg" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
    <figcaption><b /><i /></figcaption>
  </figure>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Water-Flow-Sensor-YF-B1-p-2878.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

El sensor de flujo de agua está compuesto por un cuerpo de cobre, un rotor interno y un sensor de efecto Hall.  
Cuando el agua pasa por el rotor, este gira; su velocidad varía según el caudal.  
El sensor de efecto Hall emite una señal de pulsos correspondiente.  
Este modelo es ideal para dispensadores de agua o cafeteras.  
**Lo más importante es que su cuerpo de cobre ofrece mayor durabilidad que uno de plástico.**

## Características

- Compacto y fácil de instalar  
- Excelente rendimiento de sellado  
- Sensor de efecto Hall de alta calidad  
- Cumple con RoHS  

## Especificaciones

| Parámetro                      | Valor                                 |
|-------------------------------|----------------------------------------|
| Dimensiones                   | 0mm × 0mm × 0mm                        |
| Peso                          | 79 g                                   |
| Batería                       | No incluida                            |
| Voltaje mínimo de operación   | DC 4.5 V                               |
| Corriente máx. de trabajo     | 15 mA (DC 5 V)                         |
| Voltaje de trabajo            | DC 5 V ~ 15 V                          |
| Dimensiones de interfaz       | G1/2 pulgada                           |
| Rango de caudal               | 1 ~ 25 L/min                           |
| Frecuencia                    | F = 11 × Q (Q = L/min) ±3 %            |
| Margen de error               | (1 ~ 30 L/min) ±3 %                    |
| Capacidad de carga            | ≤10 mA (DC 5 V)                        |
| Temperatura de operación      | 0 ~ 80 ℃                               |
| Temperatura del líquido       | ≤120 ℃                                 |
| Humedad de operación          | 35 % ~ 90 % RH                         |
| Presión de agua               | ≤1.75 MPa                              |
| Material                      | Cobre H57 + POM                        |
| Temperatura de almacenamiento | -25 ~ +80 ℃                            |
| Humedad de almacenamiento     | 25 % ~ 95 % RH                         |
| Nivel alto de salida de pulso | > DC 4.7 V (entrada 5 V)               |
| Nivel bajo de salida de pulso | < DC 0.5 V (entrada 5 V)               |
| Ciclo útil de pulso           | 50 % ±10 %                             |

## ¿Qué es un sensor de flujo de agua?

Un sensor de flujo de agua mide el caudal, es decir, el volumen de agua que pasa por unidad de tiempo.  
Se utiliza comúnmente en **calentadores de agua automáticos**, **máquinas expendedoras de agua** o **cafeteras DIY**.  
Para proyectos con **Arduino** o **Raspberry Pi**, los más usados son sensores de flujo basados en **dispositivo Hall**, como los clásicos modelos [YF-S402](https://www.seeedstudio.com/M11-1-25-Water-Flow-Sensor-p-1345.html) y [YF-S201](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-p-635.html).

## ¿Cómo funciona el sensor de flujo de agua?

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/DSC03966-1030x686.jpg" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>Figura 1</b>. <i>Componentes del YF-402</i></figcaption>
</figure>
</div>

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/how-does-water-flow-sensor-work-1030x599.jpg" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>Figura 2</b>. <i>Funcionamiento del sensor</i></figcaption>
</figure>
</div>

El sensor contiene un **sensor Hall**, una **rueda de turbina** y un **imán**.  
Cuando el agua entra por la entrada, empuja la rueda que empieza a girar.  
El imán girando genera un campo magnético variable que es detectado por el sensor Hall, generando **pulsos digitales (cuadrados)**.

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/Water-flow-sensor-principle-1.gif" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>Figura 3</b>. <i>Principio animado del sensor</i></figcaption>
</figure>
</div>

Cada vuelta de la rueda representa un volumen fijo de agua, y un número determinado de pulsos.  
Por tanto, **contando pulsos** podemos calcular el caudal de agua.

## Plataformas Compatible

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Primeros Pasos

### Materiales requeridos

| Seeeduino | Grove Base Shield | Sensor de flujo de agua |
|--------------|--------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/Seeeduino_s.png)| ![enter image description here](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/base_shield.png)| ![enter image description here](https://files.seeedstudio.com/wiki/Water_Flow_Sensor/IMG/Water-Flow-Sensor.png)
|[Consigue uno ahora](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)|[Consigue uno ahora](https://www.seeedstudio.com/Base-Shield-V2.html)|[Consigue uno ahora](https://www.seeedstudio.com/catalogsearch/result/?q=Water+flow+sensor)|

#### Conexión del Hardware

Para los sensores de la serie YF, hay tres cables:

- **Rojo**: Vcc  
- **Negro**: GND  
- **Amarillo**: salida de pulsos

Para placas basadas en **Atmega 328** como [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html), se pueden usar dos pines digitales como interrupciones:

- Pin digital **2** → `interrupt 0`  
- Pin digital **3** → `interrupt 1`

En este caso, usamos el pin **D2** para detectar los pulsos del sensor de flujo de agua.  
Si usas Seeeduino junto con el [Grove Base Shield](https://www.seeedstudio.com/Base-Shield-V2.html), simplemente conecta el sensor al puerto **D2**.  
Si estás usando otra placa Arduino, usa cables jumper para conectar correctamente.

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/image-34.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>Figura 4</b>. <i>Conexión del sensor de flujo de agua con Arduino</i></figcaption>
</figure>
</div>

:::tip
    Conecta con cuidado el cable USB y el sensor de flujo a la placa Seeeduino para evitar dañar los puertos.
:::

#### Programación

Aunque puedes usar `digitalRead()` dentro del bucle `loop()` para leer la señal de salida del sensor, esta forma **no es en tiempo real**.  
Cada ejecución requiere cierto tiempo de espera durante el cual se pueden perder pulsos.

Para aplicaciones donde se requiere **detección en tiempo real**, se recomienda usar **interrupciones**.  
Cada vez que se detecta un flanco ascendente del pulso, se activa la interrupción y se incrementa un contador.

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/image-33.png" alt="Water-Flow-Sensor'' OUTCOME" title="demo" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

Consulta más detalles sobre interrupciones en [attachInterrupt](https://www.arduino.cc/reference/en/language/functions/external-interrupts/attachinterrupt/).

:::caution
Si es tu primera vez con Arduino, te recomendamos revisar esta guía: [Primeros pasos con Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Paso 1.** Conecta el sensor de flujo de agua al Grove Base Shield, y este a la placa Seeeduino. Luego conecta la placa a tu computadora mediante cable USB.

- **Paso 2.** Abre el IDE de Arduino, copia el siguiente código y súbelo a la placa.

:::note
Este código funciona con los sensores más comunes como **YF-S201**, **YF-S402** y otros disponibles en Seeed Studio.
:::

#### Código

```cpp
/*
YF‐ S201 Water Flow Sensor
Water Flow Sensor output processed to read in litres/hour
Adaptation Courtesy: www.hobbytronics.co.uk
*/

volatile int flow_frequency; // Measures flow sensor pulsesunsigned 

int l_hour; // Calculated litres/hour
unsigned char flowsensor = 2; // Sensor Input
unsigned long currentTime;
unsigned long cloopTime;

void flow () // Interrupt function

{
   flow_frequency++;
}

   void setup()
 {
   pinMode(flowsensor, INPUT);
   digitalWrite(flowsensor, HIGH); // Optional Internal Pull-Up
   Serial.begin(9600);
   attachInterrupt(0, flow, RISING); // Setup Interrupt
   sei(); // Enable interrupts
   currentTime = millis();
   cloopTime = currentTime;
}

   void loop ()
{
   currentTime = millis();// Every second, calculate and print litres/hour
   if(currentTime >= (cloopTime + 1000))
   {
      cloopTime = currentTime; // Updates cloopTime
      // Pulse frequency (Hz) = 7.5Q, Q is flow rate in L/min.
      l_hour = (flow_frequency * 60 / 7.5); // (Pulse frequency x 60 min) / 7.5Q = flowrate in L/hour
      flow_frequency = 0; // Reset Counter
      Serial.print(l_hour, DEC); // Print litres/hour
      Serial.println(" L/hour");
   }
}
```

:::tipsuccess
Si todo está correctamente conectado, abre el monitor serial y ajusta la velocidad de baudios a **9600**.  
Cuando el agua comience a fluir, el valor de caudal se imprimirá en la ventana correspondiente.
:::

## Fórmula para el cálculo del sensor de flujo de agua

En la sección de código usamos una fórmula. ¿De dónde viene?

```cpp
l_hour = (flow_frequency * 60 / 7.5)
```

Como se explicó antes, **por cada vuelta de la rueda interna**, fluye un volumen determinado de agua, y se generan un número fijo de pulsos. Por ejemplo, en el caso del sensor **YF-S201**, por **cada litro** de agua, el sensor Hall genera **450 pulsos**.

Para el modelo **YF-S201**, el sensor Hall genera **450 pulsos por cada litro** de agua que fluye. Hagamos algunas cuentas:
- 450 pulsos = 1 litro  
- 1 pulso = 1 / 450 litros
Si tomamos el volumen total de líquido que pasa por el sensor en un tiempo determinado **t** (en segundos), como **V_total** (en litros), y el número total de pulsos detectados como **N**, entonces:

```cpp
V_total(L) = N* 1/450(L) 
```

Por otro lado, el volumen total de líquido también es igual al caudal (**Q** en L/s) multiplicado por el tiempo:

```cpp
V_total(L) = Q(L/s)*t(s) 
```

Igualando ambas ecuaciones:

```cpp
N* 1/450 = Q(L/s)*t(s) 
N/t = 450 * Q(L/s) 
```

Ya que **N / t** es la frecuencia (**f**) de los pulsos:

```cpp
f = 450*Q(L/s); 
Q(L/s) = f/450; 
Q(L/min) = f*60/450 = f/7.5 
Q(L/hour) = f*60*60/450 = f*60 /7.5 
```

Para el modelo **YF-S402**, el sensor genera **4380 pulsos por litro**:

```cpp
f = 4380*Q(L/s); 
Q(L/s) = f/4380; 
Q(L/min) = f*60/4380 = f/73 
Q(L/hour) = f*60*60/4380 = f*60 /73 
```

## Sensores de flujo de agua disponibles en Seeed

:::tip
Seeed ofrece una amplia variedad de sensores de flujo de agua con diferentes dimensiones, materiales y rangos de detección. Entre ellos se encuentran los modelos [YF-S201](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-p-635.html) y [YF-S402](https://www.seeedstudio.com/M11-1-25-Water-Flow-Sensor-p-1345.html).
:::

| Modelo | Diámetro (DN) | Voltaje de trabajo | Rango de caudal | Longitud | Tipo de rosca | Largo rosca | Material |
|:--------:|:--------------:|:---------------:|:---------------:|:------:|:------------------:|:----------------:|:--------:|
|   [YF-B1](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B1-p-2878.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  44mm  |     Double Male    |       10mm       |  Copper  |
|   [YF-B2](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B2-p-2879.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  50mm  | Male in Female out |       10mm       |  Copper  |
|   [YF-B3](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B3-p-2880.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  66mm  |     Double Male    |       18mm       |  Copper  |
|   [YF-B4](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B4-p-2881.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  66mm  | Male in Female out |       10mm       |  Copper  |
|   [YF-B5](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B5-p-2882.html)  |      DN20      |    5V~15V(DC)   |    1~30L/min    |  50mm  |     Double Male    |       10mm       |  Copper  |
|   [YF-B6](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B6-p-2883.html)  |      DN20      |    5V~15V(DC)   |    1~30L/min    |  60mm  |     Double Male    |       11mm       |  Copper  |
|   [YF-B7](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B7-p-2884.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  66mm  |     Double Male    |       10mm       |  Copper  |
|   [G1&2](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-Enclosure-p-1915.html)   |      DN15      |    5V~24V(DC)   |    1~30L/min    |    -   |     Double Male    |         -        |  Plastic |
|   [G3&4](https://www.seeedstudio.com/G3-4-Water-Flow-Sensor-p-1083.html)   |      DN20      |    5V~24V(DC)   |    1~60L/min    |    -   |     Double Male    |         -        |  Plastic |
|   [G1&2](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-p-635.html)   |      DN15      |    5V~24V(DC)   |    1~30L/min    |  60mm  |     Double Male    |       13mm       |  Plastic |
|   [G1&8](https://www.seeedstudio.com/G1-8-Water-Flow-Sensor-p-1346.html)   |        -       |    5V~24V(DC)   |    0.3~6L/min   |    -   |          -         |         -        |  Plastic |
| [M11*1.25](https://www.seeedstudio.com/M11-1-25-Water-Flow-Sensor-p-1345.html) |        -       |    5V~24V(DC)   |    0.3~6L/min   |    -   |          -         |         -        |  Plastic |

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
