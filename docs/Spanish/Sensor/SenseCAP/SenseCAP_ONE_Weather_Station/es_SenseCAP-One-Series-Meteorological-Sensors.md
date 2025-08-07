---
description:  SenseCAP ONE Compact Weather Station
title:  Serie de Sensores Meteorológicos SenseCAP ONE
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP-One-Series-Meteorological-Sensors
last_update:
  date: 07/23/2025
  author: Guillermo
---

# Serie de Sensores Meteorológicos SenseCAP ONE

![sensecap one](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/SenseCAP-ONE-1030x754.png)

##### _(Estaciones meteorológicas compactas de la serie SenseCAP ONE)_

## Introducción al producto

Actualmente, los datos meteorológicos localizados, conocidos como microclimas, representan la nueva frontera para una predicción del clima más precisa. Por ello, la recopilación de datos se vuelve cada vez más detallada y segmentada. En este contexto, las estaciones meteorológicas, como medio práctico para recolectar estos datos, están aumentando en demanda.

Las estaciones meteorológicas compactas SenseCAP ONE consisten en sensores que miden los siguientes parámetros: temperatura y humedad del aire, presión barométrica, luz, precipitación, velocidad y dirección del viento, PM2.5 y PM10. Gracias a su diseño modular, permiten integrar distintas combinaciones de sensores en una sola estación según las necesidades de la aplicación.

Diseñadas bajo estándares industriales y con clasificación IP66, estas estaciones ofrecen alta precisión, confiabilidad, estabilidad y robustez. La serie SenseCAP ONE es compatible con interfaces RS485/RS422 (Modbus) y SDI-12, lo que permite su integración con otros sensores. Son fáciles de desplegar y resistentes para operar a largo plazo en exteriores, ideales para ciudades inteligentes, redes eléctricas, plantas de energía, estaciones de carretera, aeropuertos y agricultura inteligente.

![categorías sensecap one](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/overall.png)

Hay seis productos SenseCAP, cada uno con distintas combinaciones de sensores. Esta tabla muestra claramente el aspecto de cada uno y los parámetros que mide.

### Sensor Meteorológico Compacto SenseCAP ONE S700 7-en-1

El SenseCAP ONE S700 permite recolectar y monitorear datos ambientales clave, útiles en ciudades inteligentes, entre otros. Mide siete parámetros: temperatura del aire, humedad relativa, presión barométrica, intensidad lumínica, lluvia, velocidad y dirección del viento.

Cuenta con certificación IP66 y una robustez capaz de soportar entornos hostiles. Utiliza sensores ultrasónicos para medir velocidad y dirección del viento, en lugar de sensores mecánicos tradicionales, reduciendo partes móviles, aumentando durabilidad y facilitando el mantenimiento sin perder precisión.

Este sensor utiliza protocolos de comunicación RS485 (MODBUS-RTU) / 232 / 422 (Modbus) / SDI-12, por lo tanto, puede usarse con cualquier registrador de datos compatible.

Ofrecemos también el [registrador de datos SenseCAP Sensor Hub 4G](https://solution.seeedstudio.com/product/sensor-hub-4g-data-logger/) (compatible con alimentación solar y por adaptador). Los datos pueden enviarse al Sensor Hub y luego al servidor SenseCAP o uno privado. Si se usa el servidor SenseCAP, se proporciona una API para facilitar el desarrollo de aplicaciones.

![](https://sensecap-solution-upload.cdn.seeed.cn/cc/2020/05/Picture16.png?x-oss-process=image%2Fformat,webp)

## Características

- **Múltiples parámetros en un solo dispositivo**: lluvia, temperatura del aire, humedad relativa, presión barométrica, intensidad lumínica, velocidad y dirección del viento.
- **Brújula electrónica integrada**: facilita la instalación; puede desactivarse para orientación manual al norte.
- **Incluye placa de fijación y cable de 3 m** para montaje en poste.
- **Certificación IP66**: resistente al agua y al polvo. Opcional con calefactores, ideal para ambientes severos.
- **Sensores ultrasónicos sin partes móviles para viento**
- **Tamaño compacto, calibrado, fácil instalación, sin mantenimiento y fácil de usar**
- **Escudos de radiación** para asegurar mediciones ambientales precisas.
- **Interfaces soportadas**: RS485 (MODBUS-RTU) / 232 / 422 (Modbus) / SDI-12
- **Certificaciones CE y FCC en proceso**

## Especificaciones de Medición

![measurement](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/measurement%20specification.png)

## Especificaciones Generales

![general](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/general%20specifications.png)

## Demostración

Aquí te mostramos cómo crear tu propia estación meteorológica con el [SenseCAP ONE S700](https://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.html) y una [Raspberry Pi](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html). Con una configuración mínima y código fácil de usar, este tutorial es ideal para principiantes.

![](https://lh4.googleusercontent.com/CFwdaJ3jBZHVROiCzg1Mfu2dF5pNJwH3DAt7dloC4IKyKO_nFwISY_J-3JpZIqiZCazf9Y5DAxB7OxwNwhnwot3BY_I4Wx3CBdWrZNUwJMoDe9bCSzLmS4yxLVz0JYrm9HhjZl7N)

### ¿Por qué una estación meteorológica?

Los datos meteorológicos son clave en aviación, navegación y construcción, y en la predicción del clima extremo. Para la mayoría de las personas, solo importan al decidir si llevar un paraguas.

Sin embargo, nuevas aplicaciones están ampliando su importancia. Por ejemplo, en la industria de la moda, el 35 % de la pérdida anual en ventas se debe a pronósticos erróneos. Usar datos precisos permite planear mejor el inventario, como estimar la demanda de chamarras según el clima.

En Alemania, el "Índice de la Cerveza" indica que las ventas se disparan cuando la temperatura supera los 22 °C. Por cada grado adicional, se venden 2.3 millones de botellas más al día.

Además del índice cervecero, existen otros como el del auto, helado, traje de baño, moho alimenticio, etc. Estos ayudan a planificar producción y marketing con anticipación.

Los microclimas son ahora esenciales para predicciones más precisas. Por ello, las estaciones meteorológicas están en auge. En esta demostración, te mostraremos cómo tener tu propia estación usando SenseCAP ONE S700 y Raspberry Pi.

### Materiales Requeridos

- [Raspberry Pi 4 8GB](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html) x1
- [RS-485 Shield para Raspberry HAT](https://www.seeedstudio.com/RS-485-Shield-for-Raspberry-Pi.html) x1
- [SenseCAP ONE S700](https://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.html) x1

### Configuración de Hardware

Ensamblar el Shield RS-485 de Seeed sobre la Raspberry Pi, alineando los pines del 1 al 25 como se muestra:

![](https://lh4.googleusercontent.com/h4i69Ct7UV4euxBaw8dLj09gJGfhTm4mo2hXmlq2hDKmANg116M79P_U1P50W8B_1-3h1ckTUjew8NsUALx8-CDoiisaYnyq_fwyekfAffY6ZMf5vVL6WEn02xZoRlw_uSZw2G46)

Luego conectar el SenseCAP ONE S700 al Shield mediante RS-485. ¡Listo!

### Configuración de Software

#### Paso 1: Configurar SenseCAP ONE S700

Primero descarga la herramienta de configuración desde [aquí](https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases). Conéctalo a tu PC vía USB-C y selecciona el puerto serial. Haz clic en "Connect".

Luego, en "Settings" selecciona como protocolo "RS-485 ASCII". Finalmente, haz clic en "Write To Device".

![](https://lh5.googleusercontent.com/IaVOWjPMua04nLj8I1LP89rZ0JBNxpyEhSfDWupO9cMIYtsV6lsR90k1esRGWLsBgzCHB2Odj5kb3BIPF5kkCyRBwsnf_-a8L9gnQuTM5cEXfHpMA-WzaWt50AqNtHZZEhqXcEgx)

#### Paso 2: Configurar Raspberry Pi

Este tutorial asume que estás usando Raspberry Pi OS con conectividad a Internet. Si no estás familiarizado, puedes aprender a configurar WiFi [aquí](https://www.seeedstudio.com/blog/2021/01/25/three-methods-to-configure-raspberry-pi-wifi/).

Asegúrate de tener instalada la versión Node.JS v10.22.x. Si no es así, ejecuta el siguiente script para instalarla.

```
curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n
bash n 10
```

El siguiente paso es habilitar el puerto serial por hardware en `/dev/ttyS0`. En tu ventana de terminal, ejecuta la herramienta de configuración de Raspberry Pi con:

```
sudo raspi-config
```

### Ejecutar la Estación Meteorológica

Después de la configuración, es muy fácil poner en marcha la estación meteorológica. En tu Raspberry Pi, ejecuta los siguientes comandos para instalar y ejecutar el servidor y sitio web de la estación meteorológica:

```
git@github.com:Seeed-Solution/SenseCAP-WeatherStation-Raspberry-Pi-Visualization.git
mv SenseCAP-WeatherStation-Raspberry-Pi-Visualization /opt/SenseCAP-WeatherStation-Raspberry-Pi-Visualization
cd /opt/SenseCAP-WeatherStation-Raspberry-Pi-Visualization

cd server && install --unsafe
cd website && install --unsafe

# pm2 start
npm install -g -y --unsafe pm2 http-server
pm2 start run-server.sh
pm2 start run-website.sh
pm2 save
pm2 ls
```

Con tu PC y Raspberry Pi conectados a la misma red local (LAN), accede a los datos de la estación meteorológica desde tu navegador usando la siguiente URL:

```
http://{Raspberry Pi IP}:8080
```

Si no estás seguro de la dirección IP de tu Raspberry Pi, puedes ejecutar el siguiente comando y tomar nota de la IP que aparece junto a inet:

```
ifconfig wlan0
```

![](https://lh3.googleusercontent.com/1MviIYqYAIagHWvDDj8BXoRjBWAbqYATtQ4wyTrl4W3Z-XTwa9VcO63zkZ7_qD5mvu88EsJ9Euu8G4GAi8IW7WOy_047ZdO-7BWMGL1Qvz59Sv1n5vTZ6_OzzOY5JSBcAENfNrc5)

### COMPLETADO

Una vez que hayas terminado toda la configuración y accedido a la URL con éxito, deberías ver los datos meteorológicos visualizándose en tiempo real como se muestra a continuación. SenseCAP ONE S700 es una plataforma todo-en-uno que no solo nos permite obtener datos básicos como temperatura y humedad, también podemos visualizar información avanzada como dirección y velocidad del viento, presión atmosférica, precipitaciones e incluso la cantidad de luz.

![](https://lh6.googleusercontent.com/SGQuzJr3kZIRojr79-Iu1-onBBQoCDNH6gFFPTh7eFJy7yYYlO97Y6uvtEgSvMmt68q1LBUlMJSgOUn7kFK3Meu2d1mv6oAovEiKlCwNkJaOmhEwBBeDVNDZMTrggOiZsHh2JHEq)

Con esto, no solo tenemos una estación meteorológica completamente funcional en cuestión de minutos, sino que también podemos ampliarla para visualizar datos de forma remota. Alternativamente, también podemos almacenar los datos meteorológicos para realizar potentes análisis y predicciones.

### Resumen

¡Esperamos que hayas disfrutado de esta demostración sobre cómo puedes crear una estación meteorológica en solo unos pasos con la Raspberry Pi y el [SenseCAP ONE S700](https://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.htmlhttps://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.html)! Aunque este proyecto es sencillo, las posibilidades que habilita están limitadas solo por tu imaginación.

Además de funcionar con la Raspberry Pi 4 de 8GB, la serie SenseCAP ONE puede desplegarse y utilizarse fácilmente con nuestro [SenseCAP Sensor Hub 4G Data Logger](https://www.seeedstudio.com/SenseCAP-Sensor-Hub-4G-Data-Logger-with-builtin-battery-p-4852.html). Como estación celular 4G de grado industrial y fácil de implementar, Sensor Hub utiliza el protocolo MODBUS-RTU RS485 para comunicarse con los sensores y es capaz de recolectar diversos datos de sensores de forma simultánea. Con clasificación IP66, resistente al agua y al polvo, el Sensor Hub 4G Data Logger es adecuado para aplicaciones exteriores confiables y a largo plazo, como agricultura inteligente, estaciones meteorológicas inteligentes y ciudades inteligentes, entre otras.

¿Y tú? ¿Cómo utilizarás tu propia estación meteorológica?

## Aplicaciones

![aplicaciones sensecap one](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/SenseCAP-ONE-Applications-1030x379.png)
