---
title: Paquete de controlador de motor paso a paso con engranajes
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Gear_Stepper_Motor_Driver_Pack/
slug: /es/Gear_Stepper_Motor_Driver_Pack
last_update:
  date: 07/15/2025
  author: Guillermo
---

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/main.jpg)

El **Gear Stepper Motor Driver Pack** incluye un motor paso a paso y una placa controladora. Se trata de un motor paso a paso de cuatro fases y ocho pasos, que puedes controlar fácilmente mediante la placa controladora.

Puedes usar este paquete para control de posición.

<p style={{}}><a href="https://www.seeedstudio.com/Gear-Stepper-Motor-Driver-Pack-p-3200.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Bajo nivel de ruido  
- Gran torque  
- Caja de engranajes incorporada  

## Especificaciones

| Ítem | Valor |
|------|-------|
|Voltaje de operación|5V|
|Fase|4|
|Relación de reducción|1/64|
|Ángulo de paso|5.625°/64|
|Diámetro|28mm / Nema 11|
|Frecuencia de tracción en vacío|>500Hz|
|Frecuencia de liberación en vacío|>1000Hz|
|Resistencia|21±7%|
|Ruido|≤40dB|
|Modo de control|cuatro fases, ocho pasos|

## Aplicaciones típicas

- Impresoras de escritorio  
- Trazadores gráficos (plotters)  
- Impresoras 3D  
- Máquinas CNC

## Vista general del hardware

### Asignación de pines

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/pin_out_1.jpg)

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/pin_out_2.jpg)

### Dibujo mecánico

Haz clic en la imagen para verla en tamaño original.

<p style={{}}><a href="https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/mechanical.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/mechanical.jpg" /></a></p>

## Plataformas compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::tip
Las plataformas mencionadas anteriormente son una indicación de compatibilidad teórica o de software del módulo. En la mayoría de los casos, solo proporcionamos bibliotecas o ejemplos de código para la plataforma Arduino. No es posible ofrecer soporte de código para todas las plataformas MCU. Por lo tanto, los usuarios deberán escribir sus propias bibliotecas si usan otras plataformas.
:::

## Primeros pasos

### Usar con Arduino

#### Hardware

**Materiales necesarios**

| Seeeduino V4.2 | Gear Stepper Motor Driver Pack | Jumpers Hembra-Macho |
|--------------|-------------------------------|----------------------|
|![Seeeduino](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![Motor Pack](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/thumbnail.jpg)|![Jumpers](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/jumper.jpg)|
|[Comprar aquí](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Comprar aquí](https://www.seeedstudio.com/Gear-Stepper-Motor-Driver-Pack-p-3200.html)|[Comprar aquí](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html)|

:::note
**1** Conecta el cable USB con cuidado para no dañar el puerto. Asegúrate de usar un cable USB de 4 hilos, ya que los de solo 2 no pueden transferir datos. Si no estás seguro, puedes adquirir uno [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html).

**2** Para que el Gear-Stepper-Motor-Driver-Pack funcione con tu Arduino, se requieren varios jumpers Hembra-Macho. Si no los tienes, puedes comprarlos [aquí](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html).
:::

- **Paso 1.** Conecta la placa controladora del motor paso a paso a tu Seeeduino con los jumpers:

| Seeeduino | Placa controladora |
|-----------|--------------------|
| Pin digital 8  | IN1 |
| Pin digital 9  | IN2 |
| Pin digital 10 | IN3 |
| Pin digital 11 | IN4 |
| GND            | GND |
| VCC_5V         | VCC |
| VCC_5V         | VM  |

:::tip
Puedes conectar el pin VM a VCC_5V, o simplemente no usarlo, siempre que selecciones VCC en el interruptor.
:::

- **Paso 2.** Conecta el motor paso a paso a la placa controladora.

- **Paso 3.** Conecta el Seeeduino al PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/connect.jpg)

#### Software

:::note
Si es la primera vez que trabajas con Arduino, te recomendamos ver [Primeros pasos con Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Haz clic en el ícono ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) en la esquina superior derecha del bloque de código para copiar el siguiente código a un nuevo sketch en el IDE de Arduino.

```cpp
int pwm1=9;
int pwm2=10;
int ctr_a =9;
int ctr_b =8;
int ctr_c =11;
int ctr_d =10;
int sd =6;
int i=0;
int t=1500;

void setup()
{
    pinMode(ctr_a,OUTPUT);
    pinMode(ctr_b,OUTPUT);
    pinMode(ctr_c,OUTPUT);
    pinMode(ctr_d,OUTPUT); 
    delay(1);     
}


void loop ()
{
   for(i=1500;i>=1;i--)
   {
       digitalWrite(ctr_a,LOW);//A
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,HIGH);
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,LOW);
       digitalWrite(ctr_b,LOW);//AB
       digitalWrite(ctr_c,HIGH);
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,LOW);//B
       digitalWrite(ctr_c,HIGH);
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,LOW);
       digitalWrite(ctr_c,LOW);//BC
        digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,LOW);//C
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,LOW);//CD
       digitalWrite(ctr_d,LOW);
       delayMicroseconds(t);
        digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,HIGH);//D
       digitalWrite(ctr_d,LOW);
       delayMicroseconds(t);
       digitalWrite(ctr_a,LOW);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,HIGH);//DA
       digitalWrite(ctr_d,LOW);
       delayMicroseconds(t);
       
   }
}
```

- **Paso 2.** Sube el código de demostración. Si no sabes cómo subir el código, consulta esta guía: [Cómo subir código](https://wiki.seeedstudio.com/Upload_Code/).

:::tip
Si todo funciona correctamente, verás que el motor comienza a girar:
:::

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/_DAS7726.MOV_20181115_134717.gif)

### Raspberry Pi + Python

#### Materiales necesarios

| Raspberry Pi Pico | Gear Stepper Motor Driver Pack | Jumpers Hembra-Hembra |
|-------------------|-------------------------------|------------------------|
|![Raspberry Pi Pico](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![Motor Pack](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/thumbnail.jpg)|![Jumpers](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/jumper.jpg)|
|[Comprar aquí](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html)|[Comprar aquí](https://www.seeedstudio.com/Gear-Stepper-Motor-Driver-Pack-p-3200.html)|[Comprar aquí](https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html)|

#### Contexto

El motor paso a paso tiene 4 electroimanes independientes en su interior, los cuales deben ser alimentados uno por uno en secuencia para hacer avanzar un "paso" el engranaje. El engranaje tiene 64 pasos, por lo que necesitas hacer esto 64 veces para lograr una vuelta completa del eje.

Puedes controlar esto manualmente activando los pines uno por uno, o usar una biblioteca como [RpiMotorLib](https://github.com/gavinlyonsrepo/RpiMotorLib).

#### Método

1. Si aún no lo has hecho, sigue esta guía para configurar tu Raspberry Pi Pico con Python usando Thonny + picozero:  
[Introducción a Pico](https://projects.raspberrypi.org/en/pathways/pico-intro)

2. Conecta la placa controladora del motor paso a paso a tu Pi Pico usando jumpers:

    | Pi Pico | Placa controladora del motor |
    |---------|-------------------------------|
    | VBUS    | VCC                           |
    | GND     | GND                           |
    | GP2     | IN1                           |
    | GP3     | IN2                           |
    | GP4     | IN3                           |
    | GP5     | IN4                           |

3. Observa cuidadosamente tu placa controladora. Verás un pequeño interruptor con las etiquetas **VCC** y **VM**. Esto permite seleccionar si alimentar el motor desde el mismo pin que el controlador (VCC) o desde una fuente externa (VM).  
Por ahora usaremos VCC, asegúrate de que el interruptor esté en la posición **VCC**.

4. Conecta tu Pi Pico a la computadora por USB (o conéctate inalámbricamente) y abre Thonny.

5. Sube el siguiente código a Thonny y ejecútalo.

```python
from gpiozero import Button, LED
from time import sleep

wait = 0.001 # seconds

ctrA = LED(2) # IN1
ctrB = LED(3) # IN2
ctrC = LED(4) # IN3
ctrD = LED(5) # IN4

while True:
  # A
  ctrA.on()
  ctrB.off()
  ctrC.off()
  ctrD.off()
  sleep(wait)

  # AB
  ctrA.on()
  ctrB.on()
  ctrC.off()
  ctrD.off()
  sleep(wait)

  # B
  ctrA.off()
  ctrB.on()
  ctrC.off()
  ctrD.off()
  sleep(wait)

  # BC
  ctrA.off()
  ctrB.on()
  ctrC.on()
  ctrD.off()
  sleep(wait)

  # C
  ctrA.off()
  ctrB.off()
  ctrC.on()
  ctrD.off()
  sleep(wait)

  # CD
  ctrA.off()
  ctrB.off()
  ctrC.on()
  ctrD.on()
  sleep(wait)

  # D
  ctrA.off()
  ctrB.off()
  ctrC.off()
  ctrD.on()
  sleep(wait)

  # DA
  ctrA.on()
  ctrB.off()
  ctrC.off()
  ctrD.on()
  sleep(wait)
```

:::tip
_¿Qué está pasando aquí?_  
El motor paso a paso tiene 4 electroimanes. Estás activándolos uno a uno en bucle, lo que hace girar el engranaje un paso. Si repites esto 64 veces rápidamente, el eje completa una rotación.
:::

#### Usando una biblioteca

También puedes usar bibliotecas como [RpiMotorLib](https://github.com/gavinlyonsrepo/RpiMotorLib) para simplificar el proceso:

1. En Thonny ve a: Herramientas -> Administrar paquetes -> busca `RpiMotorLib` -> instala

2. Sigue los mismos pasos de conexión del apartado anterior

3. Reemplaza tu código por el siguiente:

```
from RpiMotorLib import RpiMotorLib

GpioPins = [2, 3, 4, 5]
mymotortest = RpiMotorLib.BYJMotor("MyMotorName", "28BYJ")
mymotortest.motor_run(GpioPins, 0.001, 512, False, False, "half", 0.05)
```

:::tip
La parte `"28BYJ"` hace referencia al modelo del motor paso a paso que estás utilizando.  
Puedes encontrar explicaciones sobre los demás argumentos en la [documentación de RpiMotorLib](https://github.com/gavinlyonsrepo/RpiMotorLib/blob/master/Documentation/28BYJ.md).  
(Esta documentación utiliza una placa controladora diferente, pero la mayoría de los parámetros son iguales).
:::

## Recursos

- **[ZIP]** [Archivos Eagle de la Placa Controladora del Motor Paso a Paso](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/res/Stepper%20Motor%20Driver.rar)

- **[PDF]** [Hoja de datos del motor CX28BYJ48](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/res/CX28BYJ48.pdf)

## Soporte técnico y discusión sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes formas de soporte y asegurar que tu experiencia con ellos sea lo más fluida posible.
Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
