---
description: Flash The Native Firmware
title: Actualizar y Flashear Firmware  
keywords:
- SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware
toc_max_heading_level: 4
sidebar_position: 3
last_update:
  date: 07/22/2025
  author: Guillermo
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# **Cómo Flashear el Firmware Nativo**

El SenseCAP Indicator tiene dos microcontroladores: ESP32-S3 y RP2040. Este tutorial proporciona una guía completa para que los desarrolladores puedan comenzar, incluyendo cómo flashear el firmware nativo de fábrica y actualizar los dispositivos enviados antes a la versión más reciente.

La actualización del firmware aplica especialmente en dos escenarios:

1. Si compraste un producto sin firmware de OpenAI antes de junio de 2023, con la versión de firmware `1.0.0`, puedes descargar y actualizar al firmware más reciente que incluye funcionalidades de OpenAI. Descárgalo desde [aquí](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases).
2. Si has desarrollado una aplicación propia y deseas flashear un firmware personalizado, puedes seguir [el tutorial que se muestra más abajo](#flash-esp32-s3-frimware-using-espressif-idf).

Necesitas este tutorial si:
1. Tienes un firmware que necesitas cargar en el ESP32-S3 o RP2040.
2. Has modificado el código y necesitas compilarlo y cargarlo en el dispositivo.

¡Vamos con el tutorial!

## Preparación

Para comenzar, solo necesitas tu SenseCAP Indicator y una computadora con Windows, macOS o Linux.

<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/usb1.png"/></div>

## Obtener el Firmware Nativo

El firmware predeterminado que viene con el SenseCAP Indicator es completamente de código abierto tanto para el ESP32-S3 como para el RP2040.

:::tip Tienes dos opciones para obtener el firmware original de fábrica:

- **Código fuente:** Puedes modificarlo antes de flashearlo, según tus necesidades. Necesitarás una cadena de herramientas ([ESP-IDF](#ESP-IDF), [Arduino](#RP_Arduino)) para **compilarlo**.
- **Firmware:** Puedes flashear directamente el archivo binario precompilado sin necesidad de modificar o compilar el código. Utiliza herramientas como [Esptool](#ESPTOOL) o [Flash Download Tools](#Flash_Tools).
:::

**Código fuente**

- [🖱️Haz clic para obtener el código fuente del firmware para ESP32-S3](https://github.com/Seeed-Solution/sensecap_indicator_esp32)
- [🖱️Haz clic para obtener ejemplos en Arduino para RP2040](https://github.com/Seeed-Solution/sensecap_indicator_rp2040)

**Firmware**

- [🖱️Haz clic para descargar firmware para ESP32-S3](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.0)
- [🖱️Haz clic para descargar firmware para RP2040](https://github.com/Seeed-Solution/SenseCAP_Indicator_RP2040/releases/tag/v1.0.0)

## Para **ESP32-S3**

### **ESP-IDF** {#ESP-IDF}

> ESP-IDF (Espressif IoT Development Framework) es un framework de desarrollo proporcionado por Espressif Systems para diseñar firmware y aplicaciones específicas para sus series de microcontroladores ESP32 y ESP8266. Para más información, consulta la [Guía de programación de ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/index.html)

Si decides compilar el código fuente en firmware, necesitarás ESP-IDF para realizar el proceso de compilación.

:::note **Nota**:
La versión de ESP-IDF debe ser superior a la v5.0. Si estás usando una versión anterior, deberás actualizarla a la más reciente.
:::

Para nuevos usuarios, este video puede ayudarte a entender mejor los pasos:

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/oqJz6zKfc4A?si=glzTFfR7m392eITb" title="Configurar ESP-IDF para SenseCAP Indicator en Windows" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

#### **Instalación del toolchain**

<Tabs
groupId="operating-systems"
defaultValue='Win'
values={[
{label: 'Windows', value: 'Win'},
{label: 'Linux y macOS', value: 'Unix'},
]}>
<TabItem value="Win">

  > Documentación oficial de Espressif: [Configuración estándar para Windows](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/windows-setup.html)

  **Opción 1: Usar el instalador offline**

  Para usuarios de Windows, puedes descargar directamente el instalador offline del ESP-IDF:  
  [🖱️Descargar Offline Installer v5.1.1](https://dl.espressif.com/dl/idf-installer/esp-idf-tools-setup-offline-5.1.1.exe)

  **Opción 2: Usar el script recomendado**

  Consulta la sección [Usando la línea de comandos](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/windows-setup.html#using-the-command-prompt)

</TabItem>

<TabItem value="Unix">

  > Documentación oficial de Espressif: [Configuración estándar para Linux y macOS](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32/get-started/linux-macos-setup.html)

  Si usas Linux o macOS, puedes seguir esta guía para cambiar la versión del repositorio Git:

  ```
  git clone --recursive https://github.com/espressif/esp-idf.git
  ```

**Navega al directorio esp-idf:**:

1. Ejecuta `./install.sh esp32s3`, para añadir soporte al ESP32-S3 (necesario para el SenseCAP Indicator)
2. Escribe `./export.sh` para configurar las variables PATH e IDF_PATH en la terminal actual

Si deseas activarlo automáticamente en cualquier sesión de terminal, añade esta línea a tu archivo de configuración de shell (por ejemplo, ~/.bash_profile):

```
alias get_idf='. $HOME/esp/esp-idf/export.sh'
```

Luego podrás usar `get_idf` para activar el entorno.[^refer](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/linux-macos-setup.html#step-4-set-up-the-environment-variables)

</TabItem>
</Tabs>

Compilar y flashear el proyecto

Si optas por compilar el código fuente, necesitarás ESP-IDF para llevar a cabo el proceso.

<!-- Please differentiate between flashing compiled firmware and directly downloading firmware using IDF! -->

Para construir, flashear y monitorear tu proyecto, ejecuta el siguiente comando:

```
cd  <your_sdk_path>/examples/indicator_basis/
idf.py -p PORT build flash monitor
```

:::tip
Si no defines PORT, el IDF seleccionará automáticamente un puerto disponible.
:::

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/upgrade.png"/></div>

<!-- Need to change the PIcure -->

En este punto, al ejecutar el comando `idf.py -p PORT flash`, el firmware se habrá cargado correctamente al ESP32-S3.

<!-- Why is this patch not placed in the later Q/A section? Also, are there too few Compile Code instructions? There's no Compile Code, just direct flashing. -->

### **Esptool** {#ESPTOOL}

> [ESPtool - GitHub](https://github.com/espressif/esptool) es una utilidad de código abierto basada en Python que proporciona una forma independiente de plataforma para comunicarse con el bootloader ROM en chips Espressif.

Esptool puede usarse como parte de tus scripts en Python. En esta guía, utilizaremos el `software empaquetado` disponible en la [página de lanzamientos de Esptool](https://github.com/espressif/esptool/releases). Elige el software que corresponda al sistema operativo de tu computadora.

#### Uso de Esptool para flashear

Se proporcionan dos scripts que muestran cómo utilizar Esptool de forma efectiva para flashear firmware en microcontroladores ESP32-S3.

:::note **Nota**:
Ten en cuenta que los scripts proporcionados están diseñados para sistemas operativos Windows. Si usas otro sistema operativo, deberás adaptar los scripts para que funcionen en tu entorno.
:::

El script `merge.bat` es especialmente útil, ya que consolida inteligentemente el bootloader, la tabla de particiones y los binarios base del indicador en un único archivo de firmware. Una vez fusionado, este firmware puede ser flasheado fácilmente al ESP32-S3 usando el script `flash.bat`. Cuando se te solicite, ingresa el puerto COM correspondiente a tu dispositivo y el proceso de flasheo comenzará. El proceso completo puede resumirse así:

```sh title="merge.bat"
esptool.exe --chip esp32s3 ^
merge_bin -o sensecap_indicator_basis_v1.0.0.bin ^ # Target file name
--flash_mode dio ^
--flash_size 8MB ^
0x0 ../../build/bootloader/bootloader.bin ^
0x8000 ../../build/partition_table/partition-table.bin ^
0x10000 ../../build/indicator_basis.bin
```

Alternativamente, si prefieres flashear archivos binarios individuales en lugar de fusionarlos antes de flashear, puedes usar directamente el script `just_flash.bat`:

```sh title="just_flash.bat"
esptool.exe --chip esp32s3 --port COMx --baud 921600 write_flash -z ^
0x0 ../../build/bootloader/bootloader.bin ^
0x8000 ../../build/partition_table/partition-table.bin ^
0x10000 ../../build/indicator_basis.bin
```

Y para un proceso de flasheo sencillo usando el firmware fusionado:

```sh title="flash.bat"
esptool.exe --chip esp32s3 --port COMx --baud 921600 write_flash -z 0x0 indicator_basis_v1.0.0.bin
```

> Presta especial atención a la dirección inicial (0x0), especialmente cuando no se fusionan los binarios. Para archivos binarios separados, consulta las instrucciones en [Herramientas de descarga para archivos binarios separados](#Address_Note). Seguir estas indicaciones asegura un flasheo sin errores.

Para utilizar estos scripts, guarda el código en archivos de texto separados llamados `merge.bat` y `flash.bat` dentro de la carpeta del proyecto. Esta organización facilita el acceso y uso.

Al usar estos scripts, optimizas tanto la preparación del firmware como las etapas de flasheo, contribuyendo a un proceso más fluido y confiable.

```
├── indicator_basis
│   ├── CMakeLists.txt
│   ├── build
│   ├── docs
│   ├── main
│   ├── partitions.csv
│   ├── sdkconfig
│   └── .defaults
│   └── flash.bat
│   └── merge.bat
```

1. Fusiona los binarios usando `merge.bat`.
2. Flashea el firmware fusionado usando `flash.bat`.

#### Flasheo de Firmware

Para flashear el firmware, puedes usar el script `flash.bat` proporcionado. Este script está diseñado para simplificar el proceso de flashear tu firmware en el microcontrolador ESP32-S3.

<details>
   <summary>Mostrar código flash.bat</summary>
   ```bat
   @echo off
   setlocal
   cd /d "%~dp0"
   :: Set Chip
   set chip=esp32s3
   :: Set Baud
   set baud=921600
   :: List COM ports
   echo Available ports and devices:
   echo.
   for /F "tokens=* delims=" %%A in ('wmic path Win32_PnPEntity get Name ^| findstr /C:"COM" ^| findstr /C:"CH340"') do (
   echo %%A
   )
   :: Prompt for port
   :chooseport
   echo.
   echo Please enter the COM port to use (e.g., COM5):
   set /p port=
   :: Check if chosen port is valid and contains "CH340"
   for /F "tokens=* delims=" %%A in ('wmic path Win32_PnPEntity get Name ^| findstr /C:"%port%" ^| findstr /C:"CH340"') do (
   set device=%%A
   goto :flash
   )
   echo Port %port% not found
   goto :chooseport
   :flash:: Print chosen parameters
   echo.
   echo You have chosen:
   echo Chip: %chip%
   echo Port: %port% - %device%
   echo Baud: %baud%
   @REM echo Press any key to continue to...
   @REM pause >nul
   :: Run esptool for the single file
   esptool.exe --chip %chip% --port %port% --baud %baud% write_flash -z 0x0 indicator_basis_v1.0.0.bin
   if ERRORLEVEL 1 (
   echo Flashing with the single file failed with error %ERRORLEVEL%.
   goto :end
   )
   :: End of script
   :end
   endlocal
   ```
</details>

#### Fusión de binarios

El script `merge.bat` proporcionado puede usarse para fusionar los archivos binarios necesarios en un solo archivo de firmware. Este script simplifica el proceso y asegura una fusión correcta para un flasheo exitoso, lo que te permite flashear un único archivo binario en lugar de [flashear archivos separados](#Address_Note).


<details>
   <summary>Mostrar código merge.bat</summary>
   ```bat
   @echo off
   SETLOCAL
   SET CurrentDir=%cd%
   SET ScriptDir=%~dp0
   SET CurrentDir=%CurrentDir:~0,-1%
   SET ScriptDir=%ScriptDir:~0,-1%
   IF NOT "%CurrentDir%"=="%ScriptDir%" (
   cd /d "%ScriptDir%"
   )
   esptool.exe --chip esp32s3 ^
   merge_bin -o indicator_basis_v1.0.0.bin ^
   --flash_mode dio ^
   --flash_size 8MB ^
   0x0 ../../build/bootloader/bootloader.bin ^
   0x8000 ../../build/partition_table/partition-table.bin ^
   0x10000 ../../build/indicator_basis.bin
   ENDLOCAL
   ```
</details>

### **Flash Download Tools** (solo Windows) {#Flash_Tools}

> **Flash Download Tools** se utilizan para programar o flashear firmware en microcontroladores ESP8266 y ESP32. Proporcionan una interfaz gráfica (GUI) para que los usuarios puedan flashear firmware fácilmente en los microcontroladores ESP.

Sigue estos pasos para flashear un firmware precompilado:

**Descarga:**  
[Flash Download Tools (solo para Windows)](https://www.espressif.com.cn/en/support/download/other-tools?keys=&field_type_tid%5B%5D=842)

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_18.png"/></div>

- **Paso 1**: **Haz doble clic** en el archivo `.exe` para abrir la interfaz principal de la herramienta.

- **Paso 2**: Selecciona las siguientes opciones:

<div className="table-center">
  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <thead>
      <tr>
        <th>Opción</th>
        <th>Parámetro</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Tipo de chip</strong></td>
        <td>ESP32-S3</td>
      </tr>
      <tr>
        <td><strong>Modo de trabajo</strong></td>
        <td>Develop</td>
      </tr>
      <tr>
        <td><strong>Modo de carga</strong></td>
        <td>UART</td>
      </tr>
    </tbody>
  </table>
</div>

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_59.png"/></div>

- **Paso 3**: Conecta el SenseCAP Indicator a tu computadora portátil con un cable USB tipo C.

- **Paso 4**: En la pestaña SPI Download, haz clic en "..." y navega hasta el firmware que acabas de descargar.

- **Paso 5**: Configura la SPI Flash:

<div className="table-center">
  <table style={{ margin: '0 auto', textAlign: 'center' }}>
    <thead>
      <tr>
        <th>Opción</th>
        <th>Parámetro</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Velocidad SPI</strong></td>
        <td>40MHz</td>
      </tr>
      <tr>
        <td><strong>Modo SPI</strong></td>
        <td>DIO</td>
      </tr>
    </tbody>
  </table>
</div>

- **Paso 6**: Configura el panel de descarga:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator23.png"/></div>

- **COM**: Revisa los puertos en el Administrador de dispositivos, el USB-SERIAL es el correcto.  
(`Aquí seleccionamos COM4`)  
- **Baud**: 921600 (valor recomendado)

Luego haz clic en `START` para iniciar el flasheo.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/start.png"/></div>

Cuando aparezca `FINISH`, el flasheo del firmware se habrá completado.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/finish.png"/></div>

#### Flash Download Tools para archivos binarios separados {#Address_Note}

En la guía anterior, el archivo binario "Default_Factory_Firmware_ESP32-S3.bin" fusiona tres binarios en uno solo.

Sin embargo, si usas ESP-IDF para construir el firmware, flashear un solo archivo directamente puede causar errores. En su lugar, necesitarás encontrar **tres archivos binarios separados** que hayas construido y especificar las direcciones correctas (puedes usar las tuyas propias) como sigue:

- **bootloader.bin** ----> **0x0**  
- **partition-table.bin** ----> **0x6800**  
- **terminal_demo.bin** ----> **0x10000**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/3binfiles.png"/></div>

## Para **RP2040**

### Flasheo con Arduino IDE {#RP_Arduino}

La herramienta de desarrollo RP2040 aprovecha Arduino para mejorar tu experiencia de programación.

> Arduino IDE es un software gratuito para programar placas Arduino. Con su interfaz amigable, puedes escribir y cargar código fácilmente. Basado en una versión simplificada de C++, ofrece librerías y ejemplos, ideal para principiantes.

**Descarga:**

- **Paso 1**: Instala [Arduino IDE](https://www.arduino.cc/en/software)

- **Paso 2**: Añade la placa Raspberry Pi Pico

Abre Arduino IDE, ve a **Arduino IDE** > **Preferencias** y copia esta URL en **Gestor de URLs adicionales de tarjetas**:

`https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json`

<div className="table-center">
  <table style={{ margin: '0 auto' }}>
    <tbody>
      <tr>
        <td style={{ textAlign: 'center' }}>
          <img
            src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_29.png"
            style={{ width: '680px', height: 'auto' }}
          />
        </td>
        <td style={{ textAlign: 'center' }}>
          <img
            src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_80.png"
            style={{ width: '680px', height: 'auto' }}
          />
        </td>
      </tr>
    </tbody>
  </table>
</div>

Luego ve a **Herramientas** > **Placa** > **Gestor de Placas**.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_30.png"/></div>

Busca "indicator" e instala "Raspberry Pi Pico/RP2040" en el Gestor de Placas.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator.png"/></div>

- **Paso 3**: Añade las librerías necesarias

:::note **Librerías para referencia**
* Sensirion Core: [Sensirion Arduino Core library](https://github.com/Sensirion/arduino-core)
* PacketSerial : [Protocolo de comunicación serial](https://github.com/bakercp/PacketSerial)
* Sensirion I2C SGP40 : [Librería sensor TVOC SGP40](https://github.com/Sensirion/arduino-i2c-sgp40)
* Sensirion I2C SCD4x : [Librería sensor CO2 SCD41](https://github.com/Sensirion/arduino-i2c-scd4x)
* Sensirion Gas Index Algorithm : [Librería algoritmo índice de gas](https://github.com/Sensirion/arduino-gas-index-algorithm)
* Seeed_Arduino_AHT20 : [Librería sensor temperatura y humedad AHT20](https://github.com/Seeed-Studio/Seeed_Arduino_AHT20)
:::

En Arduino IDE, busca estas librerías en el `Gestor de Librerías` e instálalas, por ejemplo `Seeed_Arduino_AHT20`.

<details>
<summary>Vista previa de instalación offline</summary>

Para instalar *offline*, descarga el repositorio en formato zip desde GitHub, luego en Arduino IDE ve a **Sketch** -> **Incluir librería** -> **Añadir librería .ZIP** y selecciona los archivos descargados.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_32.png"/></div>

</details>

- **Paso 4**: Conecta el dispositivo a tu PC con el cable USB tipo C provisto.

- **Paso 5**: Selecciona la placa y puerto

Busca "Indicator" y selecciona la placa `Seeed INDICATOR RP2040` y el puerto serial `usbmodem`.

<div className="table-center">
  <table style={{ margin: '0 auto' }}>
    <tbody>
      <tr>
        <td style={{ textAlign: 'center' }}>
          <img
            src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/board.png"
            style={{ width: '680px', height: 'auto' }}
          />
        </td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>
          <img
            src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/portport.png"
            style={{ width: '680px', height: 'auto' }}
          />
        </td>
      </tr>
    </tbody>
  </table>
</div>

- **Paso 6**: Abre el código ejemplo

Ve a **Archivo** -> **Abrir** y selecciona el archivo de ejemplo ([.ino file](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/tree/main/examples/terminal_rp2040)).

Puedes modificar este código según tus necesidades.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_35.png"/></div>

- **Paso 7**: Verifica y sube el código.

<div className="table-center">
  <table style={{ margin: '0 auto' }}>
    <tbody>
      <tr>
        <td style={{ textAlign: 'center' }}>
          <img
            src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_36.png"
            style={{ width: '680px', height: 'auto' }}
          />
        </td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>
          <img
            src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_37.png"
            style={{ width: '680px', height: 'auto' }}
          />
        </td>
      </tr>
      <tr>
        <td style={{ textAlign: 'center' }}>
          <img
            src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_38.png"
            style={{ width: '680px', height: 'auto' }}
          />
        </td>
      </tr>
    </tbody>
  </table>
</div>

Con esto habrás terminado de compilar y flashear (descargar) el firmware en el RP2040.

### Flashear el archivo .uf2

- **Paso 1**: Conecta el dispositivo a tu PC

Mantén presionado el botón interno con una aguja, conecta el dispositivo a tu PC con el cable USB tipo C, y suelta el botón una vez conectado.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_56.png"/></div>

- **Paso 2**: Flasheo del firmware

Cuando la conexión sea exitosa, tu PC mostrará un disco extraíble.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/disk.png"/></div>

Copia el archivo [.uf2](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/releases/download/v1.0.0/terminal_rp2040_v1.0.0.uf2) al disco, luego el disco se expulsará automáticamente.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/uf2.png"/></div>

La actualización se ejecutará automáticamente.

## Comunicación entre ESP32 y RP2040

ESP32 y RP2040 se comunican por puerto serial, usando el protocolo de comunicación [COBS](http://www.stuartcheshire.org/papers/COBSforToN.pdf).  
El formato de comando consiste en el tipo de paquete y parámetros del paquete.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_41.png"/></div>

## Recursos

[SenseCAP Indicator ESP32 SDK](https://github.com/Seeed-Solution/sensecap_indicator_esp32.git)  
[SenseCAP Indicator RP2040 Demo](https://github.com/Seeed-Solution/sensecap_indicator_rp2040/tree/main)

## Preguntas frecuentes (FAQ)

<details>
    <summary>¿Cómo distinguir el puerto serial?</summary>
    <Tabs
    groupId="operating-systems"
    defaultValue='Win'
    values={[
    {label: 'Windows', value: 'Win'},
    {label: 'MacOS', value: 'Unix'},
    ]}
    >
    <TabItem value="Win" >
      Revisa el puerto en el Administrador de dispositivos:  
      - "USB Serial Device(COMx)" o "USB 串行设备" es para RP2040  
      - "USB-SERIAL CH340" es para ESP32  
      En resumen, el puerto CH340 es para ESP32.  
      <div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_39.png"/></div>
    </TabItem>
    <TabItem value="Unix">
      - "/dev/cu.usbmodem" es para RP2040  
      <div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_40.png"/></div>
    </TabItem>
    </Tabs>
</details>

# **Actualizaciones recientes**

- 2023-11-17  
  - Se eliminó la sección de parcheo  
- 2023-08-25  
  - Se aclaró la sección de parcheo  
- 2023-07-25  
  - Se agregó contenido para flashear firmware con Esptool  
- 2023-05-29  
  - Se agregó la sección de parcheo  

# **Soporte técnico**

**¿Necesitas ayuda con tu SenseCAP Indicator? ¡Estamos aquí para asistirte!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
