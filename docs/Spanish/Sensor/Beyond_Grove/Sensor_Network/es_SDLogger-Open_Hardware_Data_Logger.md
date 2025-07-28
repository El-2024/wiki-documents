---
title: SDLogger – Registrador de Datos Open Hardware
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/SDLogger-Open_Hardware_Data_Logger/
slug: /es/SDLogger-Open_Hardware_Data_Logger
last_update:
  date: 07/15/2025
  author: Guillermo
---
![](http://bz.seeedstudio.com/depot/images/product/sdlogger1.jpg)

**SDLogger** es un registrador de datos serial simple basado en el proyecto [OpenLog](https://github.com/sparkfun/OpenLog/wiki/) de [SparkFun/Nathan Seidle](http://www.sparkfun.com/). Utiliza un microcontrolador **ATmega644P** funcionando a **14.7456 MHz** y graba en tarjetas SD de tamaño completo. Es compatible tanto con tarjetas **SD estándar (FAT16)** como con **SDHC (FAT32)**. El SDLogger se entrega con el firmware **OpenLog v1.61** preinstalado (compilado con soporte para SDHC/FAT32 y un búfer de entrada ampliado a 2048 caracteres), junto con un bootloader compatible con Arduino para facilitar la actualización del programa.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/sdlogger-open-hardware-data-logger-p-723.html?cPath=132_136)


## Características

* Fácil de configurar y usar  
* Registra automáticamente los datos recibidos por el puerto serial de entrada  
* Puede configurarse mediante un archivo de configuración en la tarjeta SD  
* Compatible con tasas de baudios seriales de 2400, 4800, 9600, 19200, 38400, 57600, 115200 y 230400 a 8-N-1  
* Compatible con tarjetas SD estándar de hasta 2 GB (FAT16) y tarjetas SDHC de hasta 16 GB (FAT32)  
* Búfer de entrada grande (2048 caracteres)  
* Factor de forma de tarjeta SD de tamaño completo  
* Oscilador de cristal de 14.7456 MHz para una generación precisa de baudios  
* Rango de voltaje de entrada: 3.3 a 12 V  
* Bootloader compatible con Arduino preinstalado para facilitar la actualización del programa  
* Soporte completo para el entorno Arduino: puede usarse como una placa Arduino económica para desarrollo  
* Puertos de E/S compatibles en el entorno Arduino (además del puerto serial principal): 4 entradas analógicas, segundo puerto serial, puerto I2C  
* Procedimiento sencillo para restaurar el firmware original de SDLogger usando el entorno Arduino  
* Hardware y firmware de SDLogger diseñados por Saanlima/Magnus Karlsson y publicados bajo licencia CC BY-SA v3  
* Archivos de diseño, código para Arduino y otros códigos portados disponibles en [GitHub](http://github.com/magnuskarlsson/SDLogger)  

## Recursos

1. Páginas wiki de SDLogger  
   * [Funcionamiento básico](https://github.com/magnuskarlsson/SDLogger/wiki/Basic-operation)  
   * [Cómo usar el cable FTDI con SDLogger](https://github.com/magnuskarlsson/SDLogger/wiki/FTDI-cable-Howto)  
   * [Cómo usar SDLogger como una placa Arduino](https://github.com/magnuskarlsson/SDLogger/wiki/Arduino-howto)  
   * [Cómo restaurar el firmware original usando el entorno Arduino](https://github.com/magnuskarlsson/SDLogger/wiki/SDLogger-firmware-restore)  

2. Páginas wiki de OpenLog (mucha de esta información también es relevante para SDLogger)  
   * [Enlace a la wiki de hoja de datos de OpenLog](https://github.com/sparkfun/OpenLog/wiki/datasheet)  
   * [Enlace a la wiki del conjunto de comandos del firmware de OpenLog](https://github.com/sparkfun/OpenLog/wiki/command-set)  

### Créditos

1. El firmware FAT16/FAT32 fue diseñado originalmente por Roland Riegel y se publica bajo la licencia GPL v2  
2. El hardware y firmware de OpenLog fueron desarrollados por [SparkFun](http://www.sparkfun.com/)/Nathan Seidle y se publican bajo la licencia CC-SA v3  
3. La biblioteca SdFat para Arduino fue escrita por Bill Greiman y se publica bajo la licencia GPL v3  

## Soporte técnico y discusión sobre el producto

Si tienes algún problema técnico, envía el reporte en nuestro [foro](http://forum.seeedstudio.com/).  
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes formas de soporte para asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>