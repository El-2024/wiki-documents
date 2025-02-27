---
description: XIAO nRF52840(sense) With Zephyr(RTOS)
title:  XIAO nRF52840(sense) con Zephyr(RTOS)
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-nRF52840-Zephyr-RTOS_spanish
last_update:
  date: 02/17/2025
  author: Guillermo
---

# XIAO nRF52840 (sense) con Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-ble.png"/></div>

## ¿Qué es RTOS?

Uno de los componentes más importantes de los sistemas embebidos actuales es el **RTOS**, también conocido como **Sistema Operativo en Tiempo Real**, que se encarga de todo, desde la programación de tareas hasta la ejecución de aplicaciones.

El **RTOS** está diseñado para proporcionar un modo de ejecución predecible. Cuando el procesamiento debe cumplir con el límite de tiempo del sistema, se utiliza un RTOS. Por lo tanto, en comparación con los GPOS (Sistemas Operativos de Propósito General), el RTOS suele ser ligero y de tamaño pequeño, y generalmente solo proporciona las funciones necesarias para ejecutar tipos específicos de aplicaciones en hardware específico. En algunos casos, los desarrolladores pueden modificar el RTOS existente, reducirlo para que solo proporcione las funcionalidades requeridas por una aplicación específica y/o personalizar su funcionalidad o características de rendimiento.


## ¿Qué es [Zephyr](https://www.zephyrproject.org/)?

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

El sistema operativo [**Zephyr**](https://www.zephyrproject.org/) se basa en un núcleo de bajo consumo diseñado para su uso en sistemas embebidos y con recursos limitados: desde sensores ambientales embebidos simples y wearables con LED hasta controladores embebidos sofisticados, relojes inteligentes y aplicaciones inalámbricas IoT.

## Características

Zephyr ofrece una gran cantidad de características que siguen creciendo, incluyendo:

### Amplia gama de servicios del Kernel

Zephyr ofrece varios servicios conocidos para el desarrollo:

- *Servicios de Multihilo* para hilos cooperativos, basados en prioridades, no preemptivos y preemptivos con segmentación opcional por ronda. Incluye soporte para API compatible con POSIX pthreads.
- *Servicios de Interrupción* para el registro de controladores de interrupción en tiempo de compilación.
- *Servicios de Asignación de Memoria* para la asignación dinámica y liberación de bloques de memoria de tamaño fijo o variable.
- *Servicios de Sincronización entre Hilos* para semáforos binarios, semáforos contadores y semáforos mutex.
- *Servicios de Paso de Datos entre Hilos* para colas de mensajes básicas, colas de mensajes mejoradas y flujos de bytes.
- *Servicios de Gestión de Energía* como la Gestión de Energía del Sistema definida por la aplicación o la política, y la Gestión de Energía del Dispositivo definida por el controlador, con un control más preciso.

### Múltiples Algoritmos de Programación

Zephyr ofrece un conjunto completo de opciones para la programación de hilos:
- Programación cooperativa y preemptiva
- Earliest Deadline First (EDF)
- Programación Meta IRQ implementando comportamiento de "interrupción en la segunda mitad" o "tasklet"
- Segmentación de tiempo: Permite la segmentación de tiempo entre hilos preemptivos de igual prioridad
- Múltiples estrategias de encolado:
  - Cola lista simple
  - Cola lista roja/negra
  - Cola lista múltiple tradicional

### Soporte para Bluetooth Low Energy 5.0
Cumple con Bluetooth 5.0 (ESR10) y soporte para el controlador Bluetooth Low Energy (Capa de Enlace LE). Incluye soporte para Bluetooth mesh y un controlador Bluetooth listo para calificación.

- Perfil de Acceso Genérico (GAP) con todos los roles LE posibles
- Perfil de Atributo Genérico (GATT)
- Soporte para emparejamiento, incluyendo la función de Conexiones Seguras de Bluetooth 4.2
- Abstracción del controlador HCI limpio
- Interfaz HCI cruda para ejecutar Zephyr como un Controlador en lugar de una pila completa de Host
- Verificado con múltiples controladores populares
- Altamente configurable

Soporte para Mesh:

- Características de Relay, Nodo Amigo, Nodo de Baja Potencia (LPN) y Proxy GATT
- Soporte para ambos portadores de aprovisionamiento (PB-ADV y PB-GATT)
- Altamente configurable, adecuado para dispositivos con al menos 16k de RAM

*Referencia: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## Empezando

El primer paso para trabajar con Zephyr es configurar el SDK y la cadena de herramientas para el desarrollo local. Debes consultar la [guía para empezar con Zephyr](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) para el procedimiento de configuración necesario según tu entorno.

Una vez que la cadena de herramientas de Zephyr esté configurada y se haya descargado el SDK asociado, puedes comenzar el desarrollo de la aplicación.

Para el Xiao ESP32C3, puedes consultar el [archivo de descripción de la placa](https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32c3/doc/index.html) para obtener más información sobre la configuración.

Para obtener los archivos necesarios para usar el ESP32C3, ejecuta el siguiente comando:

```
west blobs fetch hal_espressif
```

Después de esto, los ejemplos pueden ser construidos y flasheados a la placa.

El ejemplo más sencillo es ejecutar el ejemplo "Hello World" en la placa. Después de cambiar al directorio de la instalación de Zephyr, ejecuta los siguientes comandos.

```
west build -p always -b xiao_esp32c3 samples/hello_world
west flash
west espressif monitor
```

Con el comando final deberías ver la respuesta mostrando el saludo "¡Hello World!".

```
*** Booting Zephyr OS build v3.6.0-2566-gc9b45bf4672a ***
Hello World! xiao_esp32c3/esp32c3
```

Para ayudar con el proceso de usar Zephyr con Xiao y su placa de expansión, se ha creado un repositorio con varios overlays y configuraciones que se utilizan aquí. Los comandos incluidos en este artículo de la wiki asumen que se encuentra en `../applications/xiao-zephyr-examples` relativo a la raíz de Zephyr. Se puede proporcionar una ruta alternativa a los comandos a continuación actualizándola.

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## Hardware Preparation

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO nrf52840 Sense</th>
      <th>Seeed Studio Expansion Board</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### Developer Knowledge

#### XIAO Expansion Board

Para utilizar módulos Grove con XIAO nrf52840 de Seeed Studio, utilizaremos una [Placa de Expansión Seeed Studio para XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) y conectaremos la XIAO nrf52840 en ella.

  Después de eso, se pueden utilizar los conectores Grove en la placa para conectar módulos Grove.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### Definiciones de PIN

  Debes seguir el gráfico a continuación para usar los números de pin internos adecuados al conectar los módulos Grove a los conectores en el Grove Shield para XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/pinout2.png"style={{width:900, height:'auto'}}/></div>

### Funcionalidad Principal

- LED a bordo
- IMU a bordo (Sense)
- Micrófono a bordo (Sense)
- Bluetooth
- TFLite

#### LED a bordo

Para este ejemplo utilizaremos el ejemplo de parpadeo para hacer parpadear el LED a bordo.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/basic/blinky
```

Haz doble clic en el botón RESET y luego flashea:

```
west flash -r uf2
```

Verás el LED rojo a bordo alternando entre encendido y apagado, creando un efecto de parpadeo.

Vamos a profundizar un poco en este ejemplo para entender por qué funciona.

El código de ejemplo asociado hace referencia al led0:
```
#define LED0_NODE DT_ALIAS(led0)
static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
```

Esto se define en el código del devicetree de XIAO nRF52840 a través de un alias:
```
	aliases {
		led0 = &led0;
	};

	leds {
		compatible = "gpio-leds";
		led0: led_0 {
			gpios = <&gpio0 26 GPIO_ACTIVE_LOW>;
			label = "Red LED";
		};
  ...
  }
```

Esto corresponde con el pin 26 de la placa.

Para los pines con el conector XIAO, no es necesario usar directamente el mapeo de pin `&gpio0`, ya que los archivos de la placa proporcionan un conector XIAO que simplifica la interfaz.

Por ejemplo, si quisiera hacer referencia a D0, lo haría como `&gpio 2` o `&xiao_d 0`.

```
/ {
	xiao_d: connector {
		compatible = "seeed,xiao-gpio";
		#gpio-cells = <2>;
		gpio-map-mask = <0xffffffff 0xffffffc0>;
		gpio-map-pass-thru = <0 0x3f>;
		gpio-map
			= <0 0 &gpio0 2 0>		/* D0 */
			, <1 0 &gpio0 3 0>		/* D1 */
			, <2 0 &gpio0 28 0>		/* D2 */
			, <3 0 &gpio0 29 0>		/* D3 */
			, <4 0 &gpio0 4 0>		/* D4 */
			, <5 0 &gpio0 5 0>		/* D5 */
			, <6 0 &gpio1 11 0>		/* D6 */
			, <7 0 &gpio1 12 0>		/* D7 */
			, <8 0 &gpio1 13 0>		/* D8 */
			, <9 0 &gpio1 14 0>		/* D9 */
			, <10 0 &gpio1 15 0>		/* D10 */
			;
	};
};
```

#### IMU a bordo (Sense)

Una de las características principales del Xiao nrf52840 es su sensor IMU incorporado. Con estos datos, se podría entrenar un modelo de aprendizaje automático, detectar gestos, movimientos de la placa, etc.

Para probar esta funcionalidad, utilizaremos un ejemplo incorporado que utiliza el IMU y luego analizaremos el código asociado para entender por qué funciona.

```
cd ~/zephyrproject/zephyr
west build -p -b xiao_ble/nrf52840/sense samples/sensor/lsm6dsl
```

Haz doble clic en el botón RESET y luego flashea:

```
west flash -r uf2
```

A continuación, deberá conectarse para ver la salida:

```
screen /dev/ttyACM0 115200
```

Esto debería mostrar algo así:
```
3LSM6DSL sensor samples:

accel x:1.330409 ms/2 y:-1.705484 ms/2 z:9.957133 ms/2
gyro x:0.049632 dps y:-0.070860 dps z:-0.006184 dps
loop:46 trig_cnt:9677

3LSM6DSL sensor samples:

accel x:1.314257 ms/2 y:-1.734198 ms/2 z:9.902696 ms/2
gyro x:-0.220216 dps y:0.032833 dps z:-0.000458 dps
loop:47 trig_cnt:9892

3LSM6DSL sensor samples:

accel x:1.414158 ms/2 y:-1.476371 ms/2 z:9.835697 ms/2
gyro x:0.035430 dps y:-0.132252 dps z:-0.007788 dps
loop:48 trig_cnt:10107
```

¿Por qué funciona? Podemos ver el [código de ejemplo](https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/sensor/lsm6dsl) a través del repositorio de GitHub de Zephyr.

```
	const struct device *const lsm6dsl_dev = DEVICE_DT_GET_ONE(st_lsm6dsl);
```

La lógica del ejemplo encuentra el objeto `st_lsm6dsl` en el *devicetree* asociado para la placa de destino. Podemos ver el *devicetree* de la Xiao nrf52840 Sense para ver más detalles sobre cómo está configurado:

```
	lsm6ds3tr-c-en {
		compatible = "regulator-fixed-sync", "regulator-fixed";
		enable-gpios = <&gpio1 8 (NRF_GPIO_DRIVE_S0H1 | GPIO_ACTIVE_HIGH)>;
		regulator-name = "LSM6DS3TR_C_EN";
		regulator-boot-on;
		startup-delay-us = <3000>;
	};
```

```
&i2c0 {
	compatible = "nordic,nrf-twim";
	/* Cannot be used together with spi0. */
	status = "okay";
	pinctrl-0 = <&i2c0_default>;
	pinctrl-1 = <&i2c0_sleep>;
	pinctrl-names = "default", "sleep";
	clock-frequency = <I2C_BITRATE_FAST>;

	lsm6ds3tr_c: lsm6ds3tr-c@6a {
		compatible = "st,lsm6dsl";
		reg = <0x6a>;
		irq-gpios = <&gpio0 11 GPIO_ACTIVE_HIGH>;
		status = "okay";
	};
};
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/imu.jpg" style={{width:500, height:'auto'}}/></div>

Se está utilizando un GPIO para habilitar la alimentación del pin. Puedes ver en el archivo de definición que está usando GPIO1 8. He resaltado la parte relevante del [esquema de Xiao nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf) a continuación:

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/schematic-pin-highlight-imu.png?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/schematic-pin-highlight-imu.png" style={{width:500, height:'auto'}}/></div>

En este esquema resaltado, puedes ver que GPIO1 8 es el pin de habilitación para el IMU. Además, GPIO0 11 es el pin de interrupción. Esto se refleja en el fragmento del *devicetree* anterior.

#### Micrófono a bordo (Sense)

Una de las principales características del Xiao nrf52840 es su micrófono incorporado. Al igual que su IMU, permite muchas aplicaciones de aprendizaje automático a través de su uso.

Para probar esta funcionalidad, utilizaremos un ejemplo incorporado que utiliza el micrófono y luego analizaremos el código asociado para entender por qué funciona.

```
cd ~/zephyrproject/zephyr
west build -p -b xiao_ble/nrf52840/sense samples/drivers/audio/dmic
```

Presione dos veces el botón RESET y luego flashea:

```
west flash -r uf2
```

A continuación, deberá conectarse para ver la salida:

```
screen /dev/ttyACM0 115200
```

Esto debería mostrar algo así:
```
[00:00:00.297,088] <inf> dmic_sample: PCM output rate: 16000, channels: 1
[00:00:00.297,119] <inf> dmic_nrfx_pdm: PDM clock frequency: 1280000, actual PCM rate: 16000
[00:00:00.397,216] <inf> dmic_sample: 0 - got buffer 0x20008380 of 3200 bytes
[00:00:00.497,222] <inf> dmic_sample: 1 - got buffer 0x20006a80 of 3200 bytes
[00:00:00.597,229] <inf> dmic_sample: 2 - got buffer 0x20005180 of 3200 bytes
[00:00:00.697,235] <inf> dmic_sample: 3 - got buffer 0x20008380 of 3200 bytes
[00:00:00.797,241] <inf> dmic_sample: 4 - got buffer 0x20006a80 of 3200 bytes
[00:00:00.897,247] <inf> dmic_sample: 5 - got buffer 0x20005180 of 3200 bytes
[00:00:00.997,222] <inf> dmic_sample: 6 - got buffer 0x20008380 of 3200 bytes
[00:00:01.097,229] <inf> dmic_sample: 7 - got buffer 0x20006a80 of 3200 bytes
[00:00:01.097,259] <inf> dmic_sample: PCM output rate: 16000, channels: 2
[00:00:01.097,259] <inf> dmic_nrfx_pdm: PDM clock frequency: 1280000, actual PCM rate: 16000
[00:00:01.197,387] <inf> dmic_sample: 0 - got buffer 0x20008380 of 6400 bytes
[00:00:01.297,393] <inf> dmic_sample: 1 - got buffer 0x20005180 of 6400 bytes
[00:00:01.397,399] <inf> dmic_sample: 2 - got buffer 0x20006a80 of 6400 bytes
[00:00:01.497,375] <inf> dmic_sample: 3 - got buffer 0x20008380 of 6400 bytes
[00:00:01.597,381] <inf> dmic_sample: 4 - got buffer 0x20005180 of 6400 bytes
[00:00:01.697,387] <inf> dmic_sample: 5 - got buffer 0x20006a80 of 6400 bytes
[00:00:01.797,393] <inf> dmic_sample: 6 - got buffer 0x20008380 of 6400 bytes
[00:00:01.897,399] <inf> dmic_sample: 7 - got buffer 0x20005180 of 6400 bytes
[00:00:01.897,399] <inf> dmic_sample: Exiting
```

¿Por qué funciona? Podemos ver el [código de ejemplo](https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/drivers/audio/dmic) a través del repositorio de GitHub de Zephyr.

Este ejemplo demuestra lo siguiente:

> Esta es una aplicación muy simple destinada a mostrar cómo utilizar la :ref:`Audio DMIC API` y también ser una ayuda en el desarrollo de controladores para implementar esta API. Realiza dos transferencias PDM con diferentes configuraciones (usando un canal y dos canales), pero no procesa en ningún momento los datos de audio recibidos.

```
const struct device *const dmic_dev = DEVICE_DT_GET(DT_NODELABEL(dmic_dev));
```

La lógica del ejemplo encuentra el objeto `dmic_dev` en el *devicetree* asociado para la placa de destino. Podemos ver el *devicetree* de la Xiao nrf52840 Sense para ver más detalles sobre cómo está configurado:

```
/ {
	msm261d3526hicpm-c-en {
		compatible = "regulator-fixed";
		enable-gpios = <&gpio1 10 (NRF_GPIO_DRIVE_S0H1 | GPIO_ACTIVE_HIGH)>;
		regulator-name = "MSM261D3526HICPM-C-EN";
	};
}

&pdm0 {
	pinctrl-0 = <&pdm0_default>;
	pinctrl-1 = <&pdm0_sleep>;
	pinctrl-names = "default", "sleep";
	clock-source = "PCLK32M";
};
```

In the sample project overlay this regulator is then enabled:
```
/ {
	msm261d3526hicpm-c-en {
		regulator-boot-on;
	};
};

dmic_dev: &pdm0 {
	status = "okay";
};
```

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/mic.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/mic.jpg" style={{width:500, height:'auto'}}/></div>

Se está utilizando un GPIO para habilitar la alimentación del pin. He resaltado la parte relevante del [esquema de XIAO nRF52840](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf) a continuación:

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/schematic-pin-highlight-mic.png?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/schematic-pin-highlight-mic.png" style={{width:500, height:'auto'}}/></div>

En este esquema resaltado, puedes ver que GPIO1 10 es el pin de habilitación para el micrófono.

#### Bluetooth

Para probar esta configuración, podemos usar un ejemplo existente con Zephyr:

```
west build -p always -b xiao_ble samples/bluetooth/observer
```

Flashea tu tarjeta:
```
west flash -r uf2
```

Espera un momento a que el MCU se reinicie después de flashear y conéctalo al monitor:
```
screen /dev/ttyACM0 115200
```


Verás una consola disponible para enviar comandos a la placa:

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
Starting Observer Demo
Started scanning...
Exiting main thread.
Device found: EC:11:27:22:AF:D2 (public) (RSSI -74), type 0, AD data len 31
Device found: 0D:9A:BE:8D:10:FC (random) (RSSI -81), type 3, AD data len 31
Device found: D2:70:D8:F2:6F:C4 (random) (RSSI -68), type 0, AD data len 20
Device found: 72:7C:3C:87:E2:17 (random) (RSSI -77), type 0, AD data len 17
Device found: 65:65:23:B9:AD:EC (random) (RSSI -68), type 0, AD data len 17
Device found: 6D:39:26:C2:94:B5 (random) (RSSI -70), type 0, AD data len 18
```

```
CONFIG_BT=y
CONFIG_BT_OBSERVER=y
```

El [archivo de configuración](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf) aquí habilita las características relacionadas con Bluetooth para la compilación de Zephyr.

#### TFLite - Hola Mundo

Habilita TFLite con Zephyr y actualiza:
```
west config manifest.project-filter -- +tflite-micro
west update
```

Construye el ejemplo y flashea a tu placa:
```
west build -p always -b xiao_ble samples/modules/tflite-micro/hello_world
```

Flashea tu placa:
```
west flash -r uf2
```

Espera un momento a que el MCU se reinicie después de flashear y conéctalo al monitor.
```
screen /dev/ttyACM0 115200
```


Verás los resultados devueltos desde la consola.
```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
x_value: 1.0*2^-127, y_value: 1.0*2^-127

x_value: 1.2566366*2^-2, y_value: 1.4910772*2^-2

x_value: 1.2566366*2^-1, y_value: 1.1183078*2^-1

x_value: 1.8849551*2^-1, y_value: 1.677462*2^-1

x_value: 1.2566366*2^0, y_value: 1.9316229*2^-1

x_value: 1.5707957*2^0, y_value: 1.0420598*2^0

x_value: 1.8849551*2^0, y_value: 1.9146791*2^-1

x_value: 1.0995567*2^1, y_value: 1.6435742*2^-1

x_value: 1.2566366*2^1, y_value: 1.0674761*2^-1

x_value: 1.4137159*2^1, y_value: 1.8977352*2^-3
```

La información adicional sobre TFLite está fuera del alcance de esta guía, pero el ejemplo sirve como una referencia para las capacidades del dispositivo y los componentes necesarios para ejecutar la configuración de TFLite.

### Componentes adicionales

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C Display
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Button
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Buzzer
- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - SD Card
- [Grove - Temperature and Humidity Sensor (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)
- [1.69inch LCD Display Module, 240×280 Resolution, SPI Interface](https://www.seeedstudio.com/1-69inch-240-280-Resolution-IPS-LCD-Display-Module-p-5755.html)
- [Round Display for Xiao](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- [Round Display for Xiao](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html) - SD Card

#### Grove - Expansion Board - Display I2C

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/xiao_expansion_oled-nrf.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/xiao_expansion_oled-nrf.jpg" style={{width:500, height:'auto'}}/></div>

Para probar esta configuración, podemos usar una muestra existente con Zephyr:

```
west build -p always -b xiao_ble samples/drivers/display --  -DSHIELD=seeed_xiao_expansion_board
west flash -r uf2
```

Verás una pantalla que muestra varios cuadros negros y un cuadro parpadeante en la esquina, ya que esta pantalla solo admite dos colores.

Vamos a profundizar un poco en este ejemplo para ver por qué funciona:
```
/ {
    chosen {
      zephyr,display = &ssd1306;
    };
};

&xiao_i2c {
  status = "okay";

  ssd1306: ssd1306@3c {
    compatible = "solomon,ssd1306fb";
    reg = <0x3c>;
    width = <128>;
    height = <64>;
    segment-offset = <0>;
    page-offset = <0>;
    display-offset = <0>;
    multiplex-ratio = <63>;
    segment-remap;
    com-invdir;
    prechargep = <0x22>;
  };
};

```

El escudo configura una pantalla OLED SSD1306 en el registro 0x3C. Se selecciona como la pantalla Zephyr en la sección correspondiente.

#### Grove - Placa de Expansión - Botón

Para probar esta configuración, podemos usar un ejemplo existente con Zephyr:

```
west build -p always -b xiao_ble samples/basic/button -- -DSHIELD=seeed_xiao_expansion_board
```

Flaseha tu tarjeta:
```
west flash -r uf2
```

Espera un momento a que el MCU se reinicie después de flashear y conéctalo al monitor.
```
screen /dev/ttyACM0 115200
```


Al presionar el botón con el ejemplo, se encenderá el LED integrado.

Verás los resultados devueltos desde la consola:

```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
Set up button at gpio@50000000 pin 3
Set up LED at gpio@50000000 pin 26
Press the button
Button pressed at 839637
Button pressed at 857904
Button pressed at 883367
Button pressed at 1001258
```

Vamos a adentrarnos un poco en este ejemplo para ver por qué funciona:
```
/ {
    aliases {
      sw0 = &xiao_button0;
    };

    buttons {
      compatible = "gpio-keys";
      xiao_button0: button_0 {
        gpios = <&xiao_d 1 (GPIO_PULL_UP | GPIO_ACTIVE_LOW)>;
        label = "SW0";
        zephyr,code = <INPUT_KEY_0>;
      };
    };
};
```

El archivo de "shield" o "overlay" se utiliza para configurar varios componentes de la placa. Usando este archivo, el ejemplo del botón puede ser utilizado, ya que el overlay permite que Zephyr configure el botón y lo haga disponible para el código asociado.

En este caso, el D1 en el Xiao nRF52840 está configurado en este overlay para actuar como un botón y está aliasado con el nombre `sw0`, permitiendo que se use en el ejemplo cuyo código espera este alias.

#### Grove - Expansion Board - Buzzer

Activaremos nuestro zumbador utilizando el ejemplo de PWM de parpadeo para controlar su activación mediante una señal PWM. Para esto, utilizaremos un overlay personalizado que habilita el PWM para el pin A3.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/basic/blinky_pwm -- -DDTC_OVERLAY_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-nrf52480/xiao_expansion_buzzer.overlay"
```

Después de flashear, deberías comenzar a escuchar una serie de zumbidos que cambian en tono a medida que el ejemplo avanza.

Vamos a ver por qué esto funciona:
```
&pwm0 {
	status = "disabled";
};

&sw_pwm {
	status = "okay";
	channel-gpios = <&gpio0 29 PWM_POLARITY_INVERTED>;
};

&pwm_led0 {
	pwms = <&sw_pwm 0 PWM_MSEC(20) PWM_POLARITY_INVERTED>;
};
```

La superposición configura la lógica PWM para el pin 29, que corresponde con el pin A3 del esquema de pines del Xiao nrf52840.

#### Grove - Placa de expansión - Tarjeta SD

Usaremos aquí el ejemplo del sistema de archivos junto con el escudo de la Placa de expansión Xiao para intentar interactuar con el lector de tarjetas SD a través de SPI. El escudo de la placa de expansión tiene el pin CS configurado para el pin asociado `&xiao_d 2`, por lo que no es necesario realizar ninguna tarea adicional para asociar esta funcionalidad con la placa, salvo agregar el escudo. Para prepararlo, estamos utilizando una configuración personalizada que habilita la funcionalidad de la tarjeta SD.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_expansion_board
```

Ahora, flashea y monitorea (primero presionando RESET dos veces para entrar en el modo de arranque UF2):
```
west flash -r uf2
```

Deberías ver una respuesta similar a esta:
```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
[00:00:00.483,367] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.483,856] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.

Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

En este caso, mi tarjeta SD tenía dos archivos. Sus nombres y tamaños fueron mostrados en mi consola.

Veamos los elementos relevantes que intervienen aquí:
```
CONFIG_SPI=y
CONFIG_DISK_DRIVER_SDMMC=y
CONFIG_GPIO=y
```

En la configuración asociada, estamos habilitando SPI, el controlador de disco SDMMC y los pines GPIO. Sin esta configuración, la superposición provocará un error, ya que el ejemplo no podrá encontrar la tarjeta SD.

La parte relevante del escudo de la Placa de expansión Xiao se muestra a continuación:

```
&xiao_spi {
	status = "okay";
	cs-gpios = <&xiao_d 2 GPIO_ACTIVE_LOW>;

	sdhc0: sdhc@0 {
		compatible = "zephyr,sdhc-spi-slot";
		reg = <0>;
		status = "okay";
		mmc {
			compatible = "zephyr,sdmmc-disk";
			status = "okay";
		};
		spi-max-frequency = <24000000>;
	};
};
```

Como se mencionó anteriormente, se utiliza el mapeo de pin `&xiao_d 2` para permitir que se seleccione el pin D2 para esto, independientemente de la placa que se utilice, siempre que sea compatible con la configuración de pines `&xiao_d`.

#### Grove - Sensor de temperatura y humedad (SHT31)

Primero, suelda los pines y conecta tu Xiao nrf52840 a la placa de expansión. Luego, conecta un cable de conector Grove entre el Grove SHT31 y uno de los puertos I2C de la placa de expansión.

Para probar esta configuración, podemos usar un ejemplo existente con Zephyr:

```
west build -p always -b xiao_ble samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
```

Flashea tu placa después de que esté en modo de arranque UF2:
```
west flash -r uf2
```

Espera un momento para que el MCU se reinicie después de flashear y conéctate al monitor:
```
screen /dev/ttyACM0 115200
```

Verás los resultados devueltos desde la consola:
```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
SHT3XD: 25.68 Cel ; 54.73 %RH
SHT3XD: 25.75 Cel ; 55.44 %RH
SHT3XD: 25.79 Cel ; 55.95 %RH
SHT3XD: 25.82 Cel ; 55.93 %RH
SHT3XD: 25.84 Cel ; 56.07 %RH
SHT3XD: 25.84 Cel ; 55.69 %RH
```

Vamos a profundizar un poco en este ejemplo para ver por qué funciona:
```
 &xiao_i2c {
	sht3xd@44 {
			compatible = "sensirion,sht3xd";
			reg = <0x44>;
		};
	};
```

El archivo de superposición de la aplicación se usa para configurar varios componentes de la placa. Usando este archivo, el ejemplo SHT31 puede ser utilizado, ya que la superposición informa a la [lógica del ejemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c) cómo configurar el sensor para nuestra placa.

#### Módulo de Display LCD de 1.69 pulgadas, resolución 240×280, interfaz SPI

Para este ejemplo usaremos SPI para conectar una pantalla LCD de 1.69 pulgadas con resolución 240x280.

Primero conecta tu placa a la pantalla LCD usando la siguiente imagen como guía (en este caso estamos utilizando el Xiao nrf52840, pero se usa el mismo diseño de pines para la conexión aquí).

| Display LCD SPI 1.69-pulg | XIAO nrf52840 |
| ------------- | ------------------------- |
| VCC | 3V3 |
| GND | GND |
| DIN | D10 |
| CLK | D8 |
| CS | D1 |
| DC | D3 |
| RST | D0 |
| BL | D6 |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/lcd_spi_display/10.png" style={{width:700, height:'auto'}}/></div>

Ahora podemos compilar y flashear el firmware:
```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.overlay -DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/240x280_st7789v2.conf
west flash -r uf2
```

Con el nuevo firmware cargado, el dispositivo ahora muestra la misma pantalla de demostración que vimos previamente en la placa de expansión, pero ahora actualizada para la pantalla LCD a color a través de SPI.

<!-- <div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/nrf52840/spi_lcd-nrf.jpg?raw=true" style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoble_zigbee/spi_lcd-nrf.jpg" style={{width:500, height:'auto'}}/></div>

#### Pantalla redonda para XIAO

Para probar esta configuración, podemos usar un ejemplo existente con Zephyr:

```
west build -p always -b xiao_ble samples/drivers/display --  -DSHIELD=seeed_xiao_round_display
```

Ingresa al modo de arranque y flashea tu dispositivo:
```
west flash -r uf2
```

Verás una pantalla mostrando varias esquinas de colores con una esquina negra parpadeando.

Otro ejemplo demuestra el uso de la pantalla táctil:

```
west build -p always -b xiao_ble samples/modules/lvgl/demos --  -DSHIELD=seeed_xiao_round_display -DCONFIG_LV_Z_DEMO_MUSIC=y
```

La demostración de música que se muestra aquí es solo una parte de la pantalla real, pero aún así demuestra el funcionamiento de la pantalla táctil. Como puedes ver, al tocar el botón de reproducción se activa la animación de música.

Puedes ver en el [archivo de escudo](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/shields/seeed_xiao_round_display/seeed_xiao_round_display.overlay) que esto funciona al interactuar con el controlador de pantalla redonda GC9A01 a través de SPI y el módulo táctil CHSC6X a través de I2C.

Vamos a profundizar un poco en este ejemplo para ver cómo funciona:
```
/ {
    chosen {
      zephyr,display = &gc9a01_xiao_round_display;
    };

	lvgl_pointer {
		compatible = "zephyr,lvgl-pointer-input";
		input = <&chsc6x_xiao_round_display>;
	};
};

/*
 * xiao_serial uses pins D6 and D7 of the Xiao, which are used respectively to
 * control the screen backlight and as touch controller interrupt.
 */
&xiao_serial {
	status = "disabled";
};

&xiao_i2c {
	clock-frequency = < I2C_BITRATE_FAST >;

	chsc6x_xiao_round_display: chsc6x@2e {
		status = "okay";
		compatible = "chipsemi,chsc6x";
		reg = <0x2e>;
		irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;
	};
};

&xiao_spi {
	status = "okay";
	cs-gpios = <&xiao_d 1 GPIO_ACTIVE_LOW>, <&xiao_d 2 GPIO_ACTIVE_LOW>;

	gc9a01_xiao_round_display: gc9a01@0 {
		status = "okay";
		compatible = "galaxycore,gc9x01x";
		reg = <0>;
		spi-max-frequency = <DT_FREQ_M(100)>;
		cmd-data-gpios = <&xiao_d 3 GPIO_ACTIVE_HIGH>;
		pixel-format = <PANEL_PIXEL_FORMAT_RGB_565>;
		width = <240>;
		height = <240>;
		display-inversion;
	};
};
```

Este shield hace lo siguiente:
- Selecciona la pantalla GC9A01 como la pantalla elegida para Zephyr.
- Establece la lógica del puntero LVGL para usar el módulo CHSC6X.
- Desactiva el puerto serie, ya que los pines se usan para la retroiluminación y la interrupción táctil (como se muestra arriba a través de: `irq-gpios = <&xiao_d 7 GPIO_ACTIVE_LOW>;`).
- Configura la pantalla redonda para SPI usando los pines D1, D2 y D3.

La [lógica del ejemplo](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/modules/lvgl/demos/src/main.c) depende del [código de ejemplo de LVGL](https://github.com/lvgl/lvgl/tree/master/demos/music), que puede ser examinado más a fondo.

#### Pantalla redonda para Xiao - Tarjeta SD

Usaremos el ejemplo del sistema de archivos junto con el escudo de la Placa de expansión Xiao para intentar interactuar con el lector de tarjetas SD a través de SPI. El escudo de la placa de expansión tiene el pin CS configurado para el pin asociado `&xiao_d 2`, por lo que no es necesario realizar ninguna tarea adicional para asociar esta funcionalidad con la placa, salvo agregar el escudo. Para prepararlo, estamos utilizando una configuración personalizada que habilita la funcionalidad de la tarjeta SD.

```
cd ~/zephyrproject/zephyr
west build -p always -b xiao_ble samples/subsys/fs/fs_sample -- -DEXTRA_CONF_FILE="$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao_expansion_sd.conf" -DSHIELD=seeed_xiao_round_display
```

Ahora, flashea y monitorea (primero presionando RESET dos veces para entrar en el modo de arranque UF2):
```
west flash -r uf2
```

Espera un momento para que el MCU se reinicie después de flashear y conéctate al monitor:
```
screen /dev/ttyACM0 115200
```

Debería ver una respuesta similar a esta:
```
*** Booting Zephyr OS build v3.6.0-5403-gd9e2b0c70763 ***
[00:00:00.491,485] <inf> sd: Maximum SD clock is under 25MHz, using clock of 24000000Hz
[00:00:00.491,973] <inf> main: Block count 15519744
Sector size 512
Memory Size(MB) 7578
Disk mounted.

Listing dir /SD: ...
[FILE] IMAGE1.JPG (size = 58422)
[FILE] IMAGE2.JPG (size = 97963)
```

Como se esperaba, el contenido del archivo se muestra de manera similar a la salida del ejemplo de la tarjeta SD de la placa de expansión Xiao.

La parte relevante del escudo de la pantalla redonda se muestra a continuación:

```
&xiao_spi {
	status = "okay";
	cs-gpios = <&xiao_d 1 GPIO_ACTIVE_LOW>, <&xiao_d 2 GPIO_ACTIVE_LOW>;

	sdhc_xiao_round_display: sdhc@1 {
		compatible = "zephyr,sdhc-spi-slot";
		reg = <1>;
		status = "okay";
		mmc {
			compatible = "zephyr,sdmmc-disk";
			status = "okay";
		};
		spi-max-frequency = <DT_FREQ_M(24)>;
	};
};
```

D2 se usa para el pin CS de la tarjeta SD.

## ✨ Proyecto de Contribuidor

- Este proyecto es respaldado por el [Proyecto de Contribuidor](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=57293418) de Seeed Studio.
- Gracias a **los esfuerzos de Tim** y tu trabajo será [exhibido aquí](https://wiki.seeedstudio.com/Honorary-Contributors/).

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte soporte en diferentes áreas para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
