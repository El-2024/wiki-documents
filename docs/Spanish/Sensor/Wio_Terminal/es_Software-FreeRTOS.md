---
description: FreeRTOS with Wio Terminal
title:  FreeRTOS con Wio Terminal
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Software-FreeRTOS
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Cómo usar FreeRTOS para Multitarea en Arduino

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/FreeRTOS/full.gif"/></div>

## ¿Qué es RTOS?

Uno de los componentes más importantes de los sistemas embebidos actuales es el **RTOS**, también conocido como **Sistema Operativo en Tiempo Real**, el cual se encarga de todo, desde la planificación de tareas hasta la ejecución de aplicaciones.

**RTOS** está diseñado para proporcionar un modo de ejecución predecible. Cuando el procesamiento debe cumplir con límites de tiempo del sistema, se utiliza RTOS. Por lo tanto, comparado con un GPOS (Sistema Operativo de Propósito General), un RTOS suele ser más ligero y pequeño en tamaño, y generalmente solo proporciona las funciones necesarias para ejecutar tipos específicos de aplicaciones en hardware específico. En algunos casos, los desarrolladores pueden modificar el RTOS existente, reducirlo para que solo proporcione la funcionalidad requerida por una aplicación específica y/o personalizar su funcionalidad o características de rendimiento.

## ¿Cómo funciona RTOS?

El **kernel** es el componente central del sistema operativo. Sistemas operativos como Linux usan un kernel que permite a los usuarios aparentar tener acceso simultáneo al computador. Cada programa que se ejecuta es una tarea (o hilo) bajo control del sistema operativo. Si un sistema operativo puede ejecutar múltiples tareas de esta forma, se puede decir que es **multitarea**.

- **Multitarea**

Los procesadores tradicionales solo pueden ejecutar **una tarea** a la vez, pero un sistema operativo multitarea puede hacer que cada tarea parezca ejecutarse simultáneamente al cambiar rápidamente entre tareas. La siguiente figura muestra la relación entre el modo de ejecución de tres tareas y el tiempo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/FreeRTOS/TaskExecution.gif"/></div>

- **Planificación**

El **planificador** es la parte del kernel responsable de decidir qué tarea se ejecutará en un momento determinado. El kernel puede pausar y reanudar una tarea múltiples veces durante su ciclo de vida.

Una **estrategia de planificación** es un algoritmo usado por el planificador para decidir qué tarea ejecutar en cada momento. En un sistema multiusuario (no en tiempo real), la estrategia probablemente dará a cada tarea una porción "justa" del tiempo del procesador.

Además de ser suspendida involuntariamente por el kernel, una tarea también puede optar por suspenderse a sí misma. Si desea **retrasarse (dormir)** por un período de tiempo, o **esperar (bloquearse)** a que un recurso esté disponible (como un puerto serie) o un evento (como una pulsación de tecla), lo hará.

<div align="center"><img src="https://files.seeedstudio.com/wiki/FreeRTOS/suspending.gif"/></div>

*Referencia: [**Fundamentos de FreeRTOS**](https://www.freertos.org/implementation/a00002.html)*

## ¿Qué es FreeRTOS?

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/FreeRTOS/FreeRTOS-logo.png"/></div>

[**FreeRTOS**](https://www.freertos.org/) es una clase de RTOS diseñado para ser lo suficientemente pequeño como para ejecutarse en un microcontrolador —aunque su uso no se limita únicamente a aplicaciones con microcontroladores. FreeRTOS incluye un kernel y un conjunto creciente de librerías de software adecuadas para su uso en diversos sectores y aplicaciones. ¡Con la ayuda de FreeRTOS, puedes hacer multitarea en hardware basado en microcontroladores!

**Para compatibilidad con Arduino**, hemos portado FreeRTOS al framework de Arduino para que puedas usarlo fácilmente con tus placas Arduino favoritas.

:::note
En 2017, [Amazon](https://aws.amazon.com/freertos/) asumió el mantenimiento de FreeRTOS, lo que lo hace confiable y seguro para el mundo embebido.
:::

## Inicio Rápido con FreeRTOS para Arduino

### Instalación de las Librerías de FreeRTOS para Arduino

1. Visita el repositorio [**Seeed_Arduino_FreeRTOS**](https://github.com/Seeed-Studio/Seeed_Arduino_FreeRTOS) y descarga todo el repositorio a tu computadora.

2. Ahora puedes instalar la librería Seeed_Arduino_FreeRTOS en el IDE de Arduino. Abre el IDE de Arduino, haz clic en `Programa` -> `Incluir Librería` -> `Añadir biblioteca .ZIP`, y selecciona el archivo `Seeed_Arduino_FreeRTOS` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

:::note
Esta librería porta la versión más reciente de FreeRTOS (10.2.1) y te permite crear proyectos FreeRTOS en el IDE de Arduino.
:::

### Placas Soportadas

La librería [**Seeed_Arduino_FreeRTOS**](https://github.com/Seeed-Studio/Seeed_Arduino_FreeRTOS) soporta todas las placas SAMD de Seeed:

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- Serie Seeeduino Zero:
  - [Seeeduino Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html)
  - [Seeeduino Lotus Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)
  - [Wio Lite W600 - Placa de Desarrollo Inalámbrica ATSAMD21 Cortex-M0](https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html)
  - [Wio Lite MG126 - Placa de Desarrollo Inalámbrica Azul ATSAMD21 Cortex-M0](https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html)
- [Seeeduino LoRaWAN](https://www.seeedstudio.com/Seeeduino-LoRaWAN-p-2780.html)

## Ejemplos de FreeRTOS para Arduino

FreeRTOS puede ser muy potente al proporcionar al microcontrolador **funcionalidad de planificación en tiempo real, comunicación entre tareas, temporización y primitivas de sincronización**.

Para que puedas comenzar fácilmente con FreeRTOS, aquí te presentamos algunos ejemplos de referencia. Los siguientes ejemplos están construidos y probados en el Wio Terminal.

### Ejemplo Hola Mundo

Este ejemplo simplemente crea **dos hilos** que imprimen diferentes `cadenas` en el monitor serial a diferente velocidad.

<div align="center"><img src="https://files.seeedstudio.com/wiki/FreeRTOS/helloworld.png"/></div>

```cpp
#include <Seeed_Arduino_FreeRTOS.h>

TaskHandle_t Handle_aTask;
TaskHandle_t Handle_bTask;

static void ThreadA(void* pvParameters) {
    Serial.println("Hilo A: Iniciado");

    while (1) {
        Serial.println("¡Hola Mundo!");
        delay(1000);
    }
}

static void ThreadB(void* pvParameters) {
    Serial.println("Hilo B: Iniciado");

    for (int i = 0; i < 10; i++) {
        Serial.println("---Este es el Hilo B---");
        delay(2000);
    }
    Serial.println("Hilo B: Eliminado");
    vTaskDelete(NULL);
}

void setup() {

    Serial.begin(115200);

    vNopDelayMS(1000); // previene el fallo del driver USB al inicio, no omitir
    while(!Serial);  // Espera a que se abra el puerto serie antes de iniciar el programa

    Serial.println("");
    Serial.println("******************************");
    Serial.println("        Inicio del programa   ");
    Serial.println("******************************");

    // Crear los hilos que serán gestionados por el RTOS
    // Establece el tamaño de pila y prioridad de cada tarea
    // También inicializa un puntero manejador para cada tarea, útil para comunicación
    xTaskCreate(ThreadA,     "Tarea A",       256, NULL, tskIDLE_PRIORITY + 2, &Handle_aTask);
    xTaskCreate(ThreadB,     "Tarea B",       256, NULL, tskIDLE_PRIORITY + 1, &Handle_bTask);

    // Iniciar el RTOS; esta función no retorna y gestiona la planificación de tareas
    vTaskStartScheduler();
}

void loop() {
    // NADA
}
```

### Ejemplo Blink (Parpadeo)

Este ejemplo también crea dos hilos y genera señales de salida para encender un LED. Uno simplemente hace parpadear el LED, y el otro crea un efecto de respiración en el LED.

:::note
Asegúrate de que el LED con efecto respiración esté conectado a un pin PWM.
:::

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/FreeRTOS/Blink.gif"/></div>

```cpp
#include <Seeed_Arduino_FreeRTOS.h>

#define LEDPIN_1 PIN_WIRE_SCL // Lado izquierdo del puerto Grove del Wio Terminal
#define LEDPIN_2 D0 // Lado derecho del puerto Grove del Wio Terminal

TaskHandle_t Handle_aTask;
TaskHandle_t Handle_bTask;

// LED Parpadeante
static void LED_1(void* pvParameters) {
    while (1) {
        digitalWrite(LEDPIN_1, HIGH);
        delay(1000);
        digitalWrite(LEDPIN_1, LOW);
        delay(1000);
    }
}

// LED Respirante
static void LED_2(void* pvParameters) {
    int cnt = 5;
    while (1) {
        for (byte value = 0 ; value < 255; value += cnt) {
            analogWrite(LEDPIN_2, value);
            delay(20);
        }
        delay(200);
        for (byte value = 255 ; value > 0; value -= cnt) {
            analogWrite(LEDPIN_2, value);
            delay(20);
        }
    }
}

void setup() {
    Serial.begin(115200);

    vNopDelayMS(1000); // Previene fallos del controlador USB al arrancar, no omitir
//    while(!Serial);  // Espera a que se abra el monitor serial antes de iniciar el programa

    pinMode(LEDPIN_1, OUTPUT);
    pinMode(LEDPIN_2, OUTPUT);

    xTaskCreate(LED_1, "Tarea A", 256, NULL, tskIDLE_PRIORITY + 2, &Handle_aTask);
    xTaskCreate(LED_2, "Tarea B", 256, NULL, tskIDLE_PRIORITY + 1, &Handle_bTask);

    // Inicia el RTOS; esta función no retorna y planifica las tareas.
    vTaskStartScheduler();
}

void loop() {

}
```

### Ejemplo LCD

Este ejemplo es una demostración de FreeRTOS junto con otras librerías de Arduino como LCD Sprites en Wio Terminal. Este ejemplo crea dos sprites en dos hilos que cuentan números en sentido opuesto. `taskMonitor` es una función utilizada para monitorear los hilos e imprimir información sobre la pila de cada hilo.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/FreeRTOS/FreeRTOS-LCD.gif"/></div>

```cpp
#include <Seeed_Arduino_FreeRTOS.h>
#include <TFT_eSPI.h>

TaskHandle_t Handle_aTask;
TaskHandle_t Handle_bTask;
TaskHandle_t Handle_monitorTask;

TFT_eSPI tft = TFT_eSPI();
TFT_eSprite img = TFT_eSprite(&tft);
TFT_eSprite img2 = TFT_eSprite(&tft);

static void LCD_TASK_1 (void* pvParameters) {
    Serial.println("Hilo A: Iniciado");
    img.createSprite(100, 100);
    img.fillSprite(tft.color565(229,58,64)); // ROJO
    img.setTextSize(8);
    img.setTextColor(TFT_WHITE);
    for(int i = 0; i < 100; i++) {
        img.drawNumber(i, 10, 25);
        img.pushSprite(30, 70);
        img.fillSprite(tft.color565(229,58,64));
        delay(1000);
        if(i == 99) i = 0;
    }
}

static void LCD_TASK_2 (void* pvParameters) {
    Serial.println("Hilo B: Iniciado");
    img2.createSprite(100, 100);
    img2.fillSprite(tft.color565(48,179,222)); // AZUL
    img2.setTextSize(8);
    img2.setTextColor(TFT_WHITE);
    for(int x = 99; x >= 0; x--) {
        img2.drawNumber(x, 10, 25);
        img2.pushSprite(190, 70);
        img2.fillSprite(tft.color565(48,179,222));
        delay(500);
        if(x == 0) x = 99;
    }
}

void taskMonitor(void* pvParameters) {
    int x;
    int measurement;

    Serial.println("Monitor de tareas: Iniciado");

    // Ejecutar esta tarea varias veces antes de terminarla
    for (x = 0; x < 10; ++x) {

        Serial.println("");
        Serial.println("******************************");
        Serial.println("[Bytes libres restantes en la pila] ");

        measurement = uxTaskGetStackHighWaterMark(Handle_aTask);
        Serial.print("Hilo A: ");
        Serial.println(measurement);

        measurement = uxTaskGetStackHighWaterMark(Handle_bTask);
        Serial.print("Hilo B: ");
        Serial.println(measurement);

        measurement = uxTaskGetStackHighWaterMark(Handle_monitorTask);
        Serial.print("Pila Monitor: ");
        Serial.println(measurement);

        Serial.println("******************************");

        delay(10000); // imprimir cada 10 segundos
    }

    // eliminar a sí mismo
    // Es necesario llamar a esta función para evitar que el sistema falle cuando termina esta función y vuelve a planificar.
    Serial.println("Monitor de tareas: Eliminando");
    vTaskDelete(NULL);
}

void setup() {

    Serial.begin(115200);

    vNopDelayMS(1000); // previene fallos del controlador USB al arrancar, no omitir
    while (!Serial) ;  // Esperar que el monitor serial abra el puerto antes de iniciar el programa

    tft.begin();
    tft.setRotation(3);
    tft.fillScreen(tft.color565(9,7,7)); // Fondo NEGRO
    tft.setTextColor(tft.color565(239,220,5)); // Texto AMARILLO
    tft.setTextSize(2);
    tft.drawString("Hilo A", 30, 50);
    tft.drawString("Hilo B", 190, 50);

    Serial.println("");
    Serial.println("******************************");
    Serial.println("        Inicio del programa         ");
    Serial.println("******************************");

    // Crear los hilos que serán gestionados por el RTOS
    // Configura el tamaño de pila y la prioridad de cada tarea
    // También inicializa un puntero handler para cada tarea, importante para comunicar y obtener info de las tareas
    xTaskCreate(LCD_TASK_1, "Tarea A", 256, NULL, tskIDLE_PRIORITY + 3, &Handle_aTask);
    xTaskCreate(LCD_TASK_2, "Tarea B", 256, NULL, tskIDLE_PRIORITY + 2, &Handle_bTask);
    xTaskCreate(taskMonitor, "Monitor de Tareas", 128, NULL, tskIDLE_PRIORITY + 1, &Handle_monitorTask);

    // Iniciar el RTOS; esta función no retorna y planifica las tareas.
    vTaskStartScheduler();
}

void loop() {
    //NADA
}
```

## FreeRTOS en C++ para Arduino

Además, ofrecemos [**Seeed_Arduino_ooFreeRTOS**](https://github.com/Seeed-Studio/Seeed_Arduino_ooFreeRTOS), que es **una colección de wrappers en C++ que encapsulan la funcionalidad de FreeRTOS y funcionan dentro del framework de Arduino.**

### Instalación de las librerías FreeRTOS en C++ para Arduino

1. Visita el repositorio [**Seeed_Arduino_ooFreeRTOS**](https://github.com/Seeed-Studio/Seeed_Arduino_ooFreeRTOS) y descarga el repositorio completo en tu disco local.

2. Instala la librería Seeed_Arduino_ooFreeRTOS en el IDE de Arduino: abre el IDE, haz clic en `Sketch` -> `Include Library` -> `Add .ZIP Library` y selecciona el archivo `.zip` descargado.

### Ejemplo Blink en C++

```cpp
#include <Seeed_Arduino_ooFreeRTOS.h>
#include "thread.hpp"
#include "ticks.hpp"

using namespace cpp_freertos;

class BlinkThread : public Thread {
  
public:
  
  BlinkThread(int i, int delayInSeconds)
    : Thread(256, 1), 
      Id(i), 
      DelayInSeconds(delayInSeconds)
  {
    Start();
  };
  
protected:

  virtual void Run() {
    while (true) {
      Serial.printf("Blink Thread: %d\n\r", Id);
      digitalWrite(LED_BUILTIN, HIGH);   // Enciende el LED
      Delay(Ticks::SecondsToTicks(DelayInSeconds));
      digitalWrite(LED_BUILTIN, LOW);    // Apaga el LED
      Delay(Ticks::SecondsToTicks(DelayInSeconds));      
    }
  };

private:
  int Id;
  int DelayInSeconds;
};

void setup() {
  Serial.begin(115200);
  Serial.println("Probando wrappers en C++ para FreeRTOS");
  Serial.println("Tareas simples");

  pinMode(LED_BUILTIN, OUTPUT);

  static BlinkThread p1(1, 3);
  static BlinkThread p2(2, 5);

  Thread::StartScheduler();

  // No deberíamos llegar aquí a menos que alguien llame a Thread::EndScheduler()
  Serial.println("¡Scheduler terminado!");
}

void loop() {
  // Vacío: las tareas se ejecutan en los threads.
}
```

## Recursos

* [Guía oficial de inicio rápido de FreeRTOS](https://www.freertos.org/FreeRTOS-quick-start-guide.html)
