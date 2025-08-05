---
description: Read and Write
title: Lectura/Escritura desde la Tarjeta SD
keywords:
- Wio_terminal File_System
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-FS-ReadWrite
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Lectura/Escritura desde la Tarjeta SD

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-12-16_13-53-10.jpg"/></div>

Este repositorio describe cómo leer/escribir desde o hacia la tarjeta SD. Con esto, puedes cargar datos desde la tarjeta SD; una demostración simple será almacenar lecturas de sensores en la tarjeta SD.

## Inicializando la Tarjeta SD en Wio Terminal

Incluye las librerías `Seeed_FS` como sigue. E inicializa la tarjeta SD usando: `SD.begin(SDCARD_SS_PIN, SDCARD_SPI)`, donde SPI se usa para comunicarse en el Wio Terminal con la tarjeta SD.

```cpp
#include <SPI.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

File myFile; // Inicializa la clase File y la nombra myFile

void setup() {
  Serial.begin(115200);
  while (!Serial) {
  }

  Serial.print("Inicializando tarjeta SD...");
  if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
    Serial.println("¡falló la inicialización!");
    while (1);
  }
  Serial.println("inicialización completada.");
```

## Escritura en la Tarjeta SD

Para escribir en la tarjeta SD, primero se debe abrir el archivo. Hay diferentes modos para el sistema de archivos, así que debes especificar qué modo usar al abrir el archivo, los modos son:

| MODO DE ARCHIVO | Nombre Definido |
| --------------- | --------------- |
| WRITE           | FILE\_WRITE     |
| READ            | FILE\_READ      |
| APPEND          | FILE\_APPEND    |

Para abrir el archivo, se usa la función miembro `open` de la clase File con 2 parámetros:

```cpp
open(const char *filepath, uint8_t mode = FILE_READ) // modo por defecto es READ
```

En este caso, abre un archivo txt llamado `test.txt` y se usa `FILE_WRITE`. Para escribir dentro de un archivo txt se puede usar la función `println` (clase File):

```cpp
  // abre el archivo. Nota que solo un archivo puede estar abierto a la vez,
  // así que debes cerrar este antes de abrir otro.
  myFile = SD.open("test.txt", FILE_WRITE); // Modo escritura

  // si el archivo se abrió bien, escribe en él:
  if (myFile) {
    Serial.print("Escribiendo en test.txt...");
    myFile.println("probando 1, 2, 3."); // Escribiendo en el archivo txt
    // cierra el archivo:
    myFile.close();
    Serial.println("listo.");
  } else {
    // si no se pudo abrir el archivo, muestra error:
    Serial.println("error abriendo test.txt");
  }
```

**Nota:** Solo un archivo a la vez, así que cierra el archivo cuando termines.

## Lectura desde la Tarjeta SD

Para leer un archivo de la tarjeta SD también se debe abrir el archivo. Esta vez, se usa el modo `FILE_READ` para solo lectura.

Usa la función `available()` para verificar la disponibilidad y `read()` para imprimir el contenido del archivo.

```cpp
myFile = SD.open("test.txt", FILE_READ); // Modo lectura
  if (myFile) {
    Serial.println("test.txt:");

    // lee el archivo hasta que no haya más datos:
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // cierra el archivo:
    myFile.close();
  } else {
    // si no se pudo abrir el archivo, muestra error:
    Serial.println("error abriendo test.txt");
  }
}
```

## Código Completo

```cpp
#include <SPI.h>
#include <Seeed_FS.h>
#include "SD/Seeed_SD.h"

File myFile;

void setup() {
  Serial.begin(115200);
  while (!Serial) {
  }
  Serial.print("Inicializando tarjeta SD...");
  if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
    Serial.println("¡falló la inicialización!");
    while (1);
  }
  Serial.println("inicialización completada.");

  // abre el archivo. Nota que solo un archivo puede estar abierto a la vez,
  // así que debes cerrar este antes de abrir otro.
  myFile = SD.open("test.txt", FILE_WRITE);

  // si el archivo se abrió bien, escribe en él:
  if (myFile) {
    Serial.print("Escribiendo en test.txt...");
    myFile.println("probando 1, 2, 3.");
    // cierra el archivo:
    myFile.close();
    Serial.println("listo.");
  } else {
    // si no se pudo abrir el archivo, muestra error:
    Serial.println("error abriendo test.txt");
  }

  // vuelve a abrir el archivo para lectura:
  myFile = SD.open("test.txt", FILE_READ);
  if (myFile) {
    Serial.println("test.txt:");

    // lee el archivo hasta que no haya más datos:
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // cierra el archivo:
    myFile.close();
  } else {
    // si no se pudo abrir el archivo, muestra error:
    Serial.println("error abriendo test.txt");
  }
}

void loop() {
  // no hace nada después del setup
}
```

## Lectura/Escritura de la Flash usando QSPI

Como la librería FS se ha actualizado y hemos incorporado [**SFUD**](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD) en el sistema, ahora puedes acceder a la Flash del Wio Terminal usando QSPI.

### Código de Ejemplo Completo

Este ejemplo demuestra **Lectura/Borrado/Escritura**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/SFUD.png"/></div>

```cpp
#include <sfud.h>

#define SFUD_DEMO_TEST_BUFFER_SIZE                     1024
static uint8_t sfud_demo_test_buf[SFUD_DEMO_TEST_BUFFER_SIZE];
static void sfud_demo(uint32_t addr, size_t size, uint8_t *data);
 
#define SERIAL Serial

void setup()
{
    SERIAL.begin(115200);
    while(!SERIAL) {};
    while(!(sfud_init() == SFUD_SUCCESS));
    #ifdef SFUD_USING_QSPI
    sfud_qspi_fast_read_enable(sfud_get_device(SFUD_W25Q32_DEVICE_INDEX), 2);
    #endif
    sfud_demo(0, sizeof(sfud_demo_test_buf), sfud_demo_test_buf);
}

void loop()
{

}
/**
 * Demo SFUD para el primer dispositivo flash.
 *
 * @param addr dirección inicial de la flash
 * @param size tamaño de prueba
 * @param data buffer con datos de prueba
 */
static void sfud_demo(uint32_t addr, size_t size, uint8_t *data) {
    sfud_err result = SFUD_SUCCESS;
    const sfud_flash *flash = sfud_get_device_table() + 0;
    size_t i;
    /* prepara datos para escritura */
    for (i = 0; i < size; i++) {
        data[i] = i;
    }
    /* prueba de borrado */
    result = sfud_erase(flash, addr, size);
    if (result == SFUD_SUCCESS) {
        SERIAL.println("Borrado de datos en flash finalizado");
    } else {
        SERIAL.println("Fallo al borrar datos en flash");
        return;
    }
    /* prueba de escritura */
    result = sfud_write(flash, addr, size, data);
    if (result == SFUD_SUCCESS) {
        SERIAL.println("Escritura de datos en flash finalizada");
    } else {
        SERIAL.println("Fallo al escribir datos en flash");
        return;
    }
    /* prueba de lectura */
    size_t BaseTime = micros();
    result = sfud_read(flash, addr, size, data);
    size_t CostTime = micros() - BaseTime;
    if (result == SFUD_SUCCESS) {
        SERIAL.println("Lectura de datos en flash exitosa.");
        SERIAL.println("Offset (h) 00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F\r\n");
        for (i = 0; i < size; i++) {
            if (i % 16 == 0) {
                SERIAL.print("0x");
                SERIAL.print(addr + i,HEX);
                SERIAL.print("\t");
            }
            SERIAL.print(data[i],HEX);
            SERIAL.print("\t");
            if (((i + 1) % 16 == 0) || i == size - 1) {
                SERIAL.println("");
            }
        }
        SERIAL.println(" ");
    } else {
        SERIAL.println("Fallo al leer datos de flash.");
    }
    /* verificación de datos */
    for (i = 0; i < size; i++) {
        if (data[i] != i % 256) {
            SERIAL.println("Error en la lectura y verificación de los datos escritos.");
            break;
        }
    }
    if (i == size) {
        SERIAL.println("Prueba de flash exitosa.\r\n");
        SERIAL.print("Tiempo de lectura: ");
        SERIAL.print(CostTime);
        SERIAL.println(" us");
    }
}
```