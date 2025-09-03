---
title: Wio Link
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio_Link/
slug: /es/Wio_Link
last_update:
  date: 06/25/2025
  author: Guillermo
---

# ¿Cuál es la parte más difícil de construir aplicaciones IoT?

Alguien dice que los cables jumper suelen frustrarlo, mientras que otro dice que lo que más odia es soldar. Incluso hay personas que no les gusta usar protoboard. Quizá tú no seas uno de ellos, pero el conocimiento en ingeniería electrónica, programación de microcontroladores, programación de redes y manejo de protocolos IoT siguen siendo un gran obstáculo entre tú y un proyecto IoT exitoso.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/WioLink.png)

Para simplificar todos estos pasos, a finales de 2015, Seeed Studio inició Wio Link en [KickStarter](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat?ref=nav_search), definiendo una nueva forma de desarrollar aplicaciones IoT. Wio Link es una placa de desarrollo Wi-Fi open-source basada en el SoC ESP8266, y lo mejor es su plataforma asociada que permite a los usuarios crear aplicaciones IoT virtualizando módulos plug-n-play como APIs RESTful a través de Apps móviles. Esto significa que no habrá programación de hardware, ni protoboard, ni cables jumper, ni soldadura; sólo instalando una App en tu teléfono móvil podrás construir un proyecto IoT simple en 5 minutos.

[![](https://files.seeedstudio.com/wiki/Wio_Link/image/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Link-p-2604.html)


:::caution
     La función Wio IFTTT está en fin de vida (EOL). Pero la App Wio sigue disponible. Puedes usar la API de la App Wio para leer el estado de sensores y controlar actuadores. 
:::

## Características

- Sin programación de hardware, sin protoboard, sin cables jumper, sin soldadura requerida.
- Soporta muchos módulos Grove (consulta la lista en la App móvil).
- Módulos Grove Plug-n-Play.
- Configuración visual en lugar de programación de microcontrolador.
- Actualización automática vía compilación en la nube y OTA.
- Lleva el mundo real a la plataforma virtual. Todos los sensores se vuelven APIs RESTful virtuales.
- Apps para Android & iOS para gestionar Wio Link.
- Soporte IFTTT vía el canal de Seeed.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio_Link_Banner.gif)

## Especificaciones
----
|General|Valor|Gestión de energía|Valor|
|:---|---|:---|---:|
|**Tamaño**|55mm * 48mm|**Corriente DC por Pin I/O**|12mA|
|**Cristal**|26MHz|**Voltaje de entrada (Micro USB)**| 5V|
|**Memoria Flash**|4MBytes (W25Q32B)|**Voltaje de entrada (Porta batería)**|3.4~4.2V|
|**Protocolo Wi-Fi**|802.11b/g/n|**Corriente DC máxima de salida**|1000mA MAX|
|**Tecnología de cifrado Wi-Fi**|WEP/TKIP/AES|**Voltaje operativo**|3.3V|
|**Conectores Grove**|6|**Corriente de carga**|500mA MAX|
|**Flash**|4MB (W25Q32B)|

## Proyectos con Wio Link
----
Wio Link está diseñado para proveer soluciones Wi-Fi simples para proyectos como:

- Hogar inteligente
- Monitoreo ambiental inteligente
- Juguetes divertidos
- Web de las cosas
- Internet de las cosas

De hecho, ya hemos diseñado muchos proyectos en nuestra [**receta**](https://community.seeedstudio.com/projects.html?t=Wio), visítala para encontrar proyectos interesantes o incluso comparte los tuyos, seguro ganarás muchos seguidores~

|Sistema de control de riego|Internet de pared LED|Máquina para alimentar perros|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/1.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/3.png)|
|[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1274)|[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1594)|[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1066)|

|Monitor Kickstarter|Monitor de llamadas perdidas|Botón de emergencia|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/4.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/5.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/6.png)|
|[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1081)|[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1059)|[HAZLO AHORA](https://community.seeedstudio.com/project_detail.html?id=1077)|

:::note
       * Algunas recetas están hechas para Wio Node, pero aplican también para Wio Link.
:::

## Descripción del Hardware
---

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Hardware%20overview.jpg)

|Parte|Función|
|---|---|
|MCU|ESP8266|
|Puerto Digital 0|GPIO 14|
|Puerto Digital 1|GPIO 12|
|Puerto Digital 2|GPIO 13|
|Puerto Analógico|A3|
|Puerto UART|Pin 1 & Pin 3|
|Puerto I2C|Pin 4 & Pin 5|
|LED de estado|El LED azul indica el estado WiFi, el LED rojo indica el estado de funcionamiento|
|Botón de configuración|Para configurar y gestionar tu Wio Link|
|Porta batería|JST2.0|
|Micro USB|Para alimentar la placa o comunicar con la PC|
|Botón de reset|Para reiniciar el MCU|

### LEDs de estado
Cerca del botón FUNCTION hay 2 LEDs de estado, uno azul y uno rojo. El LED AZUL indica el estado de red con estos patrones de parpadeo:

- Respiración bajo modo de configuración
- Parpadea dos veces rápido y apaga 1s solicitando IP del router
- Parpadea una vez rápido y apaga 1s conectándose al servidor
- Encendido 1s y apagado 1s: el nodo está online
- Encendido constante: el nodo está muerto por no obtener IP o no conectar con servidor.
- Parpadeo rápido (on 100ms, off 100ms): OTA

:::note
     * El LED AZUL está conectado a GPIO2 que es también el pin TX del UART1. Al descargar firmware, el UART1 retransmite datos por UART0, así que el LED azul parpadeará durante la descarga. Al iniciar, GPIO2 se configura como GPIO normal y no como TX del UART1.
:::

El LED ROJO es otro LED de estado que indica el estado de alimentación de los módulos Grove. Las 6 interfaces Grove comparten VCC controlado por GPIO 15. Cuando el nodo está en modo deep sleep, los módulos Grove se quedan sin energía. El LED ROJO se enciende cuando los módulos Grove están alimentados y se apaga cuando no.

### ¡Bonus!
Wio Link tiene un cargador de batería LiPo integrado, por lo que puedes cargar una batería LiPo de 3.7V a través del puerto JST 2.0 cuando el USB está conectado.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/500px-Wio_Link_Battery.jpg)

:::note
     * La batería se compra por separado. Visita [Bazaar](https://www.seeedstudio.com/s/Battery.html) donde hay muchas opciones para ti.
:::

## Comencemos
---

Construyamos una aplicación básica con LED usando Wio Link, en esta aplicación podrás controlar un LED desde tu smartphone en unos 5 minutos. Antes de empezar, asegúrate de tener los siguientes elementos a la mano:

|Wio Link|Grove - LED|Cable Micro USB|
|:------:|:---------:|:-------------:|
|![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio%20link%20small%20image.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/Red%20LED.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/48cmUSBc.jpg)|
|[CONSIGUE UNO](https://www.seeedstudio.com/Wio-Link-p-2604.html)|[CONSIGUE UNO](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|[CONSIGUE UNO](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|

:::note
    * También necesitas un smartphone (Android 4.1 o superior, iOS 7 o superior)
    * Grove - LED incluye un cable Grove ya incluido
:::

### **PASO 1:** Instalar App Android/iOS  
Necesitas instalar la App Wio Link para gestionar y configurar tus dispositivos Wio Link.

Descarga e instala la App Android o iOS. O puedes buscar "Wio Link" en la App Store de Apple o Google Play Store.

|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Android%20Robot%20new.jpg)](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Apple%20new.jpg)](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|
|:---:|:---:|
|[Obtener App Android](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[Obtener App iOS](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|

:::note
    * Asegúrate que tu Android sea 4.1 o superior, iOS 7 o superior.
:::

### **PASO 2:** Crea tu cuenta  
- Si es tu primera vez usando la App Wio, puede pedir autorización GPS, apruébala y luego regístrate.
- Si ya tienes cuenta, revisa la ubicación del servidor antes de iniciar sesión.

:::note
    * Presta atención a la ubicación del servidor, ya que si eliges el incorrecto, la conexión a Wio Link fallará.
:::

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)

### **PASO 3**: Conectar Wio Link al punto de acceso Wi-Fi
- Mantén presionado el botón CONFIG hasta que el LED azul entre en modo “respiración” (es decir, parpadeo con efecto de desvanecimiento). Esto significa que Wio Link ha entrado con éxito en modo configuración y puede ser detectado por la App Wio.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/WioLink_Configure-middle.png)

- Pulsa en "Agregar tu primer dispositivo".
- Elige Wio Link.
- "Ir a la lista de Wi-Fi" te llevará a la interfaz de configuración Wi-Fi de tu smartphone.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-1new.png)

- Si lograste que el LED azul entre en modo respiración, encontrarás Wio Link en la lista de Wi-Fi, ¡conéctate a él! (Normalmente no se llama “Wio Link” en la lista; en el ejemplo mío es Wio_8B2F12, tú verás algo como wio_xxxxxx).
- Una vez conectado, recibirás una notificación y podrás regresar a la app.
- El siguiente paso es conectarte al Wi-Fi de tu casa o empresa.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-2.png)

- Si la red Wi-Fi tiene contraseña, deberás ingresarla.
- Considera que en el futuro podrías conectar más de un dispositivo Wio, un nombre especial te ayudará a distinguirlos fácilmente.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-3.png)

### **PASO 4:** Interconectar módulos virtualmente con Wio Link y actualizar firmware
- Pulsa sobre Wio Link para entrar en la interfaz principal.
- Hay 6 conectores Grove, selecciona el primero de la izquierda.
- Como el LED es un dispositivo de salida, elige la categoría “output”.
- Encuentra el ícono que parece una bombilla y selecciónalo.
- Verás que el botón rectangular inferior cambia a rojo y “Ver API” se vuelve “Actualizar Firmware”. Selecciona “Actualizar Firmware”.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step4.png)

- Como seleccionaste el puerto Digital 0 para conectar el LED en la app, también debes conectar el Grove-LED real al puerto Digital 0 de Wio Link.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio_Link_Grove_LED%20middle.JPG)

### **PASO 5**: Probar la aplicación usando las APIs
- Ya que conectaste exitosamente el LED a Wio Link, haz clic en "Ver API" para revisar la API de Wio Link.
- Ingresa “1” o “0” en el área “Test Request”, pulsa el botón “Post” y observa qué sucede.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step5.png)


## Comenzar con IFTTT & DoButton
---
¿No sabes programar? No te preocupes, con la ayuda de [IFTTT](https://es.wikipedia.org/wiki/IFTTT), incluso sin conocimientos de programación puedes crear proyectos simples.

IFTTT significa “If This Then That”, es un servicio web gratuito que permite crear cadenas de declaraciones condicionales simples llamadas “recetas”, que se disparan según cambios en otros servicios web como Gmail, Facebook o Instagram. ¿Cómo funciona IFTTT con Wio Link? Como ves en las imágenes abajo, Seeed proporciona un servicio en la nube en wio.seeed.io que intercambia datos y envía instrucciones entre IFTTT y Wio Link. Así, creando recetas simples puedes hackear cosas sin programar.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/IFTTT.png)

Si no tienes cuenta IFTTT, regístrate [aquí](https://ifttt.com/join).

Si ya tienes cuenta, conéctate con Seeed [aquí](https://ifttt.com/recipes/search?q=seeed) o busca “Seeed” en la web de IFTTT. Encontrarás 9 recetas para enseñarte a usar IFTTT.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/IFTTT%20recipes.png)

¿Qué es DoButton? DoButton es una aplicación de IFTTT que te permite crear tu propio botón personalizado con un solo toque, ideal para proyectos IoT y controlarlos desde tu smartphone. Aquí dos ejemplos de cómo usar IFTTT & DoButton para crear aplicaciones útiles.

### Ejemplo:

|**IFTTT**|**DoButton**|
|:---|:---|
|[**Receta**][DIY un sistema automático de riego sin programar](https://community.seeedstudio.com/project_detail.html?id=1080)|[**Receta**][Cómo alimentar a tus mascotas cuando no estás](https://community.seeedstudio.com/project_detail.html?id=1066)|
|[**Video**][Cómo usar IFTTT](https://vimeo.com/148590984)|[**Video**][Cómo usar DoButton](https://vimeo.com/146988454)|


## Guía para usuarios avanzados
----
¿Te parecieron simples esos ejemplos? ¿Quieres proyectos más complejos? Aquí las mejores guías para usuarios avanzados para hackear con Wio Link. Estas guías permiten conocer detalles del Wio Link, desplegar servidores privados e incluso escribir drivers para módulos Wio Link.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/GOTO_ADVANCED_GUIDE.png)](https://github.com/Seeed-Studio/Wio_Link/wiki)

La guía cubre:

- Referencia API
- Guía para desplegar servidor
- Guía para usuarios avanzados
- ¿Cómo escribir drivers para módulos Wio Link?

## Tutorial avanzado
Si ya controlaste el Grove-LED con tu smartphone y quieres probar algo más difícil pero no complicado, prueba este tutorial. Aprenderás a construir un monitor de temperatura y humedad y encender una tira LED RGB con Wio Link.

Antes de empezar, verifica que tengas estos dispositivos:

|Tira LED RGB|Sensor Grove de Temperatura y Humedad|
|:---:|:---:|
|![](https://files.seeedstudio.com/wiki/Wio_Link/image/RGB%20LED%20Strip.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/grove-T%26H%20sensor.jpg)|
|[Consigue uno aquí](https://www.seeedstudio.com/s/led%20strip.html)|[Consigue uno aquí](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|


- Paso 1: Desconecta el Grove LED del conector, conecta la tira LED a Wio Link y arrastra el módulo correspondiente en la App.
- Actualiza el firmware.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/advance%20tutorial%20video.png)

- Paso 2: Conecta el sensor Grove de temperatura y humedad a Wio Link y arrastra el módulo correspondiente en la App.
- Actualiza el firmware.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/advance%20tutorial%20video%202.png)

- Paso 3: Consulta las APIs y lee la temperatura y humedad en tu casa. La imagen abajo muestra el cambio de temperatura antes y después de sostener el sensor en la mano. Aumenté la temperatura en 1 °C. Prueba a ver cómo cambia la temperatura y humedad en tu entorno.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Celsuis%202%20pics.png)

- Paso 4: Controla la luz de la tira LED cambiando el valor RGB.

Como la App Wio Link lee valores hexadecimales RGB, debes convertir el valor RGB a hexadecimal. Recomiendo la web [RGB to Hex](https://www.rgbtohex.net/). Sólo ingresa los valores RGB para los 3 elementos (Rojo, Verde, Azul) y te convierte el valor a hexadecimal. Ejemplo:

- Ingresa 255, 0, 0

![](https://files.seeedstudio.com/wiki/Wio_Link/image/RGB%20255%200%200.png)

- El valor convertido es FF0000, color rojo.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/FF0000.png)

:::note
    * El valor RGB debe ser un número natural entre 0 y 255 (inclusive)
:::

Luego ingresa cuántos LEDs quieres iluminar y el valor hexadecimal en la app. Mi tira tiene 30 LEDs, así que iluminé todos.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio%20link%20control%20led%20strip.png)

También puedes elegir qué parte de la tira iluminar, asignarle colores especiales o hacer que parpadee en modo arcoíris. ¡Muchas funciones increíbles te esperan para explorar!

## Recursos
---

### Hardware

- [Archivos esquemáticos EAGLE](https://files.seeedstudio.com/wiki/Wio_Link/resource/Wio_Link_SCH_v1.0.rar)
- [Archivo PCB EAGLE](https://files.seeedstudio.com/wiki/Wio_Link/resource/202000877%20Wio%20Link%20v1.0%20sch%20pcb.zip)
- [Archivos esquemáticos (PDF)](https://files.seeedstudio.com/wiki/Wio_Link/resource/Wio%20Link%20v1.0%20sch.pdf)

### Software

- [Código fuente en Github.](https://github.com/Seeed-Studio/Wio_Link)

### Más documentación y referencias

- [Referencia API](https://seeed-studio.github.io/Wio_Link/)
- [Guía de despliegue de servidor](https://github.com/Seeed-Studio/Wio_Link/wiki/Server%20Deployment%20Guide)
- [Cómo escribir drivers para módulos Wio Link](https://github.com/Seeed-Studio/Wio_Link/wiki/How-to-write-module-driver-for-Wio-Link%3F)
- [iot.seeed.cc](http://iot.seeed.cc/index.html) para más información.


## Preguntas Frecuentes (FAQ)
----
Aquí algunas preguntas frecuentes de nuevos usuarios. Si tienes otras dudas usando Wio Link o productos Wio, visita la [Comunidad de Wio](https://community.seeedstudio.com/topics.html?t=Wio) donde usuarios expertos y avanzados te pueden ayudar y compartir ideas para usar productos Wio.

**1. Energía y batería – ¿Wio Link incluye batería LiPo?**

No. Cada Wio Link viene con cable micro USB para cargar o puedes comprar una batería LiPo 3.7 V en nuestro Bazaar. Especificaciones para referencia:
- Voltaje máximo de entrada: 4.2 V
- Corriente máxima de carga: 500 mA

**2. Energía y batería – ¿Puedo usar adaptador de corriente? ¿Qué tipo? ¿Y porta baterías comunes?**

Se puede alimentar con cable Micro USB o batería LiPo 3.7 V. Si ambos están conectados, la batería se cargará con la energía USB. Puedes usar cualquier adaptador que tenga salida 5 V DC y conexión Micro USB. El porta baterías es conector JST-2.0.

**3. Consumo de energía – ¿Cuál es el consumo promedio de Wio Link?**

El consumo promedio es 70 mA. Con batería de 700 mAh puede funcionar hasta 10 horas. Hay APIs de bajo consumo que permiten cambiar Wio Link a modo suspensión, reduciendo el consumo promedio a 150 µA o menos.

**4. Cables Grove – ¿Los kits incluyen cables Grove?**

Sí, cada módulo Grove viene con un cable estándar de 4 pines.

**5. APIs RESTful – ¿Dónde están los endpoints? ¿Las llamadas necesitan conexión a la nube? ¿Requiere internet o funciona en red local?**

El servidor API REST está en iot.seeed.cc, desde donde puedes acceder a sensores y actuadores. Actualmente Wio Link requiere conexión a internet. Sin embargo, el servidor será open-source para que los usuarios puedan desplegar servidores locales vía Docker. Así, podrán usar servicios de compilación e intercambio de datos localmente sin conexión a internet.

**6. Métodos de programación soportados – ¿Se soportan otros métodos como Arduino IDE?**

Wio Link puede programarse con Arduino IDE, pero pierde las funcionalidades RESTful API a menos que implementes ambas al mismo tiempo. Wio Link está pensado para ser interfaz web del hardware físico, por lo que la interacción se espera vía web/internet. No obstante, el código es flexible y puedes modificarlo localmente, compilar y usar servidores locales.

Si quieres interactuar con Arduino o Raspberry Pi, puedes desarrollar un driver de módulo de terceros. Guía: https://github.com/Seeed-Studio/Wio_Link/wiki/How-to-write-module-driver-for-Wio-Link%3F  
Ejemplo de driver: https://github.com/Seeed-Studio/Grove_Drivers_for_Wio/tree/master/grove_example

**7. Plataformas soportadas – ¿Wio Link soporta Windows?**

Actualmente Wio Link ofrece Apps para Android e iOS. Todos los servicios son APIs RESTful, por lo que terceros pueden desarrollar aplicaciones móviles o de escritorio. Es un proyecto abierto y amigable, no limitado a una plataforma.

**8. ¿Puedo usar Wio Link para interactuar con sistemas existentes?**

Sí. Puedes conectar cualquier GPIO de Wio Link a otros sistemas, seleccionar módulos virtuales “Generic Digital Input/Output” en la App y enviar/recibir señales via API REST. También puedes usar el puerto analógico con “Generic Analog Input” para lecturas analógicas. Para interacciones más flexibles, puedes desarrollar drivers de terceros que manejen comunicación con sistemas existentes vía I2C o UART. Tenemos guía y soporte técnico para ello.

Guía: https://github.com/Seeed-Studio/Wio_Link#how-to-write-module-driver-for-wio-link

**9. ¿Cuántos módulos Grove soporta Wio Link?**

Existen más de 150 módulos Grove plug-and-play; 36 están soportados en Wio Link hasta ahora y encontrarás la mayoría en las recompensas. Estamos trabajando para agregar más continuamente.

### Lista de módulos Grove soportados

|SKU       |Nombre                                        |Interfaz |Driver                 |Enlace       |
|----------|--------------------------------------------|----------|-------------------    |-----------|
|101020008 |    Grove - Moisture Sensor                 |Análogo    |itself                 | [link](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html) |
|101020014 |    Grove - Light Sensor                    |Análogo    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html) |
|101020015 |    Grove - Temperature Sensor              |Análogo    |itself                 | [link](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html) |
|101020017 |    Grove - Rotary Angle Sensor             |Análogo    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html) |
|101020022 |    Grove - Light Sensor(P)                 |Análogo    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Light-Sensor(P)-p-1253.html) |
|101020023 |    Grove - Sound Sensor                    |Análogo    |ifself                 | [link](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html) |
|101020027 |    Grove - Electricity Sensor              |Análogo    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html) |
|101020036 |    Grove - Slide Potentiometer             |Análogo    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html) |
|101020042 |    Grove - 80cm Infrared Proximity Sensor  |Análogo    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-80cm-Infrared-Proximity-Sensor-p-788.html) |
|101020043 |    Grove - UV Sensor                       |Análogo    |itself                 | [link](https://www.seeedstudio.com/Grove-UV-Sensor-p-1540.html) |
|101020048 |    Grove - Rotary Angle Sensor(P)          |Análogo    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor(P)-p-1242.html) |
|101020063 |    Grove - Loudness Sensor                 |Análogo    |itself                 | [link](https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html) |
|101020076 |    Grove - Luminance Sensor                |Análogo    |itself                 | [link](https://www.seeedstudio.com/Grove-Luminance-Sensor-p-1941.html) |
|101020078 |    Grove - Air quality sensor v1.3         |Análogo    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html) |
|101020003 |    Grove - Button                          |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Button-p-766.html) |
|101020004 |    Grove - Switch(P)                       |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html) |
|101020005 |    Grove - Collision Sensor                |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Collision-Sensor-p-1132.html) |
|101020009 |    Grove - Line Finder                     |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Line-Finder-p-825.html) |
|101020018 |    Grove - Water Sensor                    |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html) |
|101020020 |    Grove - PIR Motion Sensor               |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html) |
|101020025 |    Grove - Tilt Switch                     |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html) |
|101020037 |    Grove - Touch Sensor                    |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html) |
|101020038 |    Grove - Magnetic Switch                 |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html) |
|101020046 |    Grove - Hall Sensor                     |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Hall-Sensor-p-965.html) |
|101020049 |    Grove - Flame Sensor                    |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html) |
|111020000 |    Grove - Button(P)                       |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Button(P)-p-1243.html) |
|101020073 |    Grove - Electromagnet                   |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html) |
|101020090 |    Grove - Water Atomization v1.0          |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/s/101020090.html#) |
|103020004 |    Grove - Solid State Relay               |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html) |
|103020005 |    Grove - Relay                           |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Relay-p-769.html) |
|103020008 |    Grove - MOSFET                          |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-MOSFET-p-1594.html) |
|103020010 |    Grove - 2-Coil Latching Relay           |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-2-Coil-Latching-Relay-p-1446.html) |
|103020014 |    Grove - Dry-Reed Relay                  |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Dry-Reed-Relay-p-1412.html) |
|104020001 |    Grove - Variable Color LED              |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html) |
|104020002 |    Grove - Purple LED (3mm)                |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Purple-LED-(3mm)-p-1143.html) |
|104020005 |    Grove - LED String Light                |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html) |
|104030005 |    Grove - Red LED                         |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html) |
|104030007 |    Grove - Green LED                       |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Green-LED-p-1144.html) |
|104030009 |    Grove - White LED                       |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-White-LED-p-1140.html) |
|104030010 |    Grove - Blue LED                        |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Blue-LED-p-1139.html) |
|104030014 |    Grove - Multi Color Flash LED (5mm)     |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Multi-Color-Flash-LED-(5mm)-p-1141.html) |
|105020003 |    Grove - Vibration Motor                 |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html) |
|105020004 |    Grove - Mini Fan                        |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Mini-Fan-p-1819.html) |
|105020005 |    Grove - EL Driver                       |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-EL-Driver-p-2269.html) |
|107020000 |    Grove - Buzzer                          |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) |
|107020001 |    Grove - Speaker                         |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Speaker-p-1445.html) |
|101020034 |    Grove - 3-Axis Digital Compass          |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html) |
|101020039 |Grove - 3-Axis Digital Accelerometer(±1.5g) |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(%C2%B11.5g)-p-765.html) |
|101020050 |    Grove - 3-Axis Digital Gyro             |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html) |
|101020072 |    Grove - Barometer Sensor (BMP180)       |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html) |
|101020083 |    Grove - Gesture                         |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Gesture-p-2463.html) |
|101020088 |    Grove - Multichannel Gas Sensor         |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-p-2502.html) |
|103020013 |    Grove - I2C ADC                         |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-I2C-ADC-p-1580.html) |
|104030008 |    Grove - OLED Display 1.12''             |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-OLED-Display-0.96''-p-781.html) |
|104030011 |    Grove - OLED Display 0.96''             |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-OLED-Display-0.96''-p-781.html) |
|105020001 |    Grove - I2C Motor Driver                |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html) |
|107020006 |    Grove - I2C FM Receiver                 |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-I2C-FM-Receiver-p-1953.html) |
|101020192 |    Grove - Barometer(BMP280)               |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP280)-p-2652.html) |
|101020193 |Grove - Temp&Humi&Barometer Sensor(BME280)  |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Temp%26Humi%26Barometer-Sensor-(BME280)-p-2653.html) |
|101020010 |    Grove - Ultrasonic Ranger               |Ditital   |itself                 | [link](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html) |
|101020016 |    Grove - Infrared Receiver               |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html) |
|101020019 |    Grove - Temperature&Humidity Sensor Pro |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html) |
|101020026 |    Grove - Infrared Emitter                |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html) |
|101020029 |    Grove - Infrared Reflective Sensor      |Otros    |itself                 | [link](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-p-1230.html) |
|101020030 |    Grove - Digital Light Sensor            |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html) |
|101020040 |    Grove - IR Distance Interrupter         |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html) |
|103020018 |    Grove - Recorder                        |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Recorder-p-1825.html) |
|104020006 |    Grove - LED Bar v2.0                    |UART      |itself                 | [link](https://www.seeedstudio.com/Grove-LED-Bar-v2.0-p-2474.html) |
|104030003 |    Grove - 4-Digit Display                 |UART      |itself                 | [link](https://www.seeedstudio.com/Grove-4-Digit-Display-p-1198.html) |
|316010005 |    Grove - Servo                           |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Servo-p-1241.html) |
|101020067 |    Grove - CO2 Sensor                      |UART      |itself                 | [link](https://www.seeedstudio.com/Grove-CO2-Sensor-p-1863.html) |

**10. Código de error y solución para Wio Link**

| Código | Error                  | Descripción                                                                                                                       |
|--------|------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| 1021   | Fallo al conectar Wi-Fi | No se pudo conectar al Wi-Fi. Por favor verifica la contraseña del Wi-Fi e intenta de nuevo.                                     |
| 1031   | Fallo al conectar Wio Wi-Fi | No se pudo conectar al hotspot Wi-Fi de Wio, intenta de nuevo o selecciona manualmente el hotspot Wi-Fi de Wio en la configuración del sistema. |
| 1032   | Error al seleccionar Wi-Fi | Por favor selecciona un Wi-Fi como "Wio_xxxxxx".                                                                                  |
| 1033   | Inconformidad Wi-Fi     | La conexión actual no corresponde con la selección de Wi-Fi.                                                                     |
| 1041   | Error al enviar orden   | Por favor verifica tu conexión a internet e intenta de nuevo. Si el problema persiste, revisa la sección FAQ y contáctanos.       |
| 1042   | Error de conexión      | Tu teléfono y el dispositivo Wi-Fi están desconectados.                                                                           |
| 1043   | Fallo al conectar Wi-Fi | Verifica tu conexión a internet e intenta de nuevo. O haz clic en "Configuración" para acceder a la vista de configuración manual.|
| 1044   | Error de conexión      | Verifica tu conexión a internet e intenta de nuevo. Si el problema persiste, revisa la sección FAQ y contáctanos.                  |

## Proyecto

**Medidor de sonido con LED usando Wio Link y Node-Red**: Sensor de sonido Grove de SeeedStudio y tira de LED conectados a Wio Link controlados por flujo en Node-Red.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/potnik/led-sound-meter-using-wio-link-and-node-red-259e02/embed' width='350'></iframe>

## Soporte Técnico y Discusión de Producto

Si tienes algún problema técnico, por favor envía tu consulta en nuestro [foro](http://forum.seeedstudio.com/).  
¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte soporte diverso y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Disponemos de varios canales de comunicación para atender distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>