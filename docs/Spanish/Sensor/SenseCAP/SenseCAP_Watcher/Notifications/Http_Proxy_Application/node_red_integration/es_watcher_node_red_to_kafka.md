---
description: Send message from Watcher & Node-RED to kafka
title: Watcher & Node-RED a kafka
keywords:
- watcher
- kafka
image: https://files.seeedstudio.com/wiki/watcher_to_kafka_image/head_image.png
slug: /es/watcher_node_red_to_kafka
last_update:
  date: 07/25/2025
  author: Guillermo
---

# Inicio Rápido: Watcher & Node-RED hacia Kafka

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/head_image.png" style={{width:1000, height:'auto'}}/></div>

## Parte 1. ¿Qué es [Kafka](https://kafka.apache.org/)?

Apache Kafka es una plataforma distribuida de transmisión de eventos diseñada para el procesamiento de datos con alta capacidad de transferencia y tolerancia a fallos. Permite flujos de datos en tiempo real mediante la publicación de mensajes por parte de productores en temas (topics), mientras que los consumidores se suscriben a estos temas para procesar los datos. Kafka es ampliamente utilizado para construir pipelines de datos, análisis en tiempo real e integración de diversas fuentes de datos. Su arquitectura robusta garantiza escalabilidad y durabilidad, lo que lo convierte en una opción popular para aplicaciones modernas basadas en datos.

## Parte 2. Crear un clúster de Kafka con Docker

¿Por qué usar Docker? Porque Docker puede simular el entorno de múltiples computadoras en una sola máquina y desplegar aplicaciones con gran facilidad. Por lo tanto, en este proyecto usaremos Docker para configurar el entorno y mejorar la eficiencia.

### Paso 1. Descargar Docker

Descarga el instalador adecuado según tu sistema operativo. Haz clic [aquí](https://www.docker.com/products/docker-desktop/) para ir al sitio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/1.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Si tu computadora es **Windows**, **NO** instales Docker hasta haber terminado el **Paso 2**.
:::

### Paso 2. Instalar WSL (Subsistema de Windows para Linux)

:::tip
Este paso es para **Windows**. Si estás en Mac o Linux, puedes omitirlo.
:::

1. Ejecuta el siguiente código como administrador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/3.png" style={{width:1000, height:'auto'}}/></div>

```bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

2. Descarga esta herramienta desde [aquí](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi) y haz doble clic para instalarla.

3. Ve a la **Microsoft Store**, busca y descarga la versión de Linux que prefieras. En este ejemplo se instaló Ubuntu.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/4.png" style={{width:1000, height:'auto'}}/></div>

4. Después de instalar Linux, ábrelo, establece un nombre de usuario y contraseña, y espera unos minutos para que se inicialice.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/5.png" style={{width:1000, height:'auto'}}/></div>

5. Ejecuta las siguientes instrucciones para usar **WSL**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/6.png" style={{width:1000, height:'auto'}}/></div>

6. Una vez que hayas instalado WSL, ahora puedes ejecutar el instalador de Docker. Si ves la siguiente imagen, significa que está funcionando correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/2.png" style={{width:1000, height:'auto'}}/></div>

### Paso 3. Crear imagen de Kafka y ejecutarla

1. Elige una ubicación y crea un archivo llamado **docker-compose.yml**, luego copia el siguiente código en él.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/15.png" style={{width:1000, height:'auto'}}/></div>

```yml
services:
  zookeeper:
    image: wurstmeister/zookeeper   ## image
    container_name: zookeeper
    ports:
      - "2181:2181"                 ## Externally exposed port number
  kafka:
    image: wurstmeister/kafka       ## image
    container_name: kafka
    volumes: 
        - ./volume:/volume ## Mounting location
    ports:
      - "9092:9092"
    environment:
      KAFKA_ADVERTISED_HOST_NAME: 127.0.0.1         ## Host machine IP
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181       ## Running Kafka is base to zookeeper
      KAFKA_ADVERTISED_PORT: 9092
      KAFKA_LOG_RETENTION_HOURS: 120
      KAFKA_MESSAGE_MAX_BYTES: 10000000
      KAFKA_REPLICA_FETCH_MAX_BYTES: 10000000
      KAFKA_GROUP_MAX_SESSION_TIMEOUT_MS: 60000
      KAFKA_NUM_PARTITIONS: 3
      KAFKA_DELETE_RETENTION_MS: 1000
  kafka-manager:
    image: sheepkiller/kafka-manager                ## image: open source web manage interface about kafka cluster
    container_name: kafka-manager
    environment:
        ZK_HOSTS: 127.0.0.1                         ## host machine IP
    ports:  
      - "9009:9000"                                 ## exposed port
```

2. Ejecutar Kafka en contenedor e ingresar
```
docker-compose up -d

docker exec -it kafka /bin/bash
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/1.png" style={{width:1000, height:'auto'}}/></div>

3. Crear un nuevo topic, producir y consumir mensajes para probar si Kafka funciona correctamente.
```
kafka-topics.sh --create --topic watcher --zookeeper zookeeper:2181 --replication-factor 1 --partitions 1

kafka-console-producer.sh --topic=watcher --broker-list kafka:9092

kafka-console-consumer.sh --bootstrap-server kafka:9092 --from-beginning --topic watcher
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/2.png" style={{width:1000, height:'auto'}}/></div>

## Parte 3. Ejecutar módulo de mensajes Kafka en Node-RED

### Paso 4. Instalar el módulo de mensajes Kafka

1. Haz clic en **Manage palette**. Si aún no instalas Node-RED, [haz clic aquí](https://wiki.seeedstudio.com/watcher_to_node_red/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/3.png" style={{width:600, height:'auto'}}/></div>

2. Busca **kafka-manager** e instálalo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/4.png" style={{width:600, height:'auto'}}/></div>

### Paso 5. Configurar el módulo Kafka

1. Arrastra los módulos (**inject, kafka producer, kafka consumer, debug**) al área de trabajo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/5.png" style={{width:800, height:'auto'}}/></div>

2. Haz doble clic en **Kafka Producer** para configurarlo. Durante este paso, asegúrate de **agregar un nuevo broker**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/6.png" style={{width:800, height:'auto'}}/></div>

3. Haz doble clic en **Kafka Consumer** y configúralo como se muestra a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/7.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/12.png" style={{width:600, height:'auto'}}/></div>

4. Una vez finalizada la configuración, haz clic en el botón **Deploy** para desplegarlo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/8.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Cada vez que realices cambios, haz clic en **Deploy** para aplicar.
:::

5. Haz clic en el **botón cuadrado** para enviar una marca de tiempo y verificar si todo el proceso funciona correctamente. Si funciona, deberías recibir la marca de tiempo en el **Kafka Consumer**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/9.png" style={{width:1000, height:'auto'}}/></div>

## Parte 4. Ejecutar una tarea en Watcher

1. Primero, necesitas ejecutar una tarea en el Watcher como se muestra en el siguiente video. Si deseas saber más, [haz clic aquí](https://wiki.seeedstudio.com/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

2. Después de ejecutar una tarea en el Watcher, debes [seguir esta guía](https://wiki.seeedstudio.com/watcher_to_node_red/) para enviar mensajes del Watcher a Node-RED.

## Parte 5. Recibir datos en Kafka

1. Reemplaza el módulo **timestamp** por los módulos **OpenStream** y **function**, luego haz doble clic para configurarlos. No olvides hacer **Deploy** para aplicar los cambios.

```javascript
node.send({ payload: msg.payload.value[0].content });

node.send({ payload: msg.payload.value[0].image_url });
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/10.png" style={{width:1000, height:'auto'}}/></div>

2. Yo ejecuté un modelo de **Detección de Personas** en el Watcher. Así, el Watcher enviará un mensaje a Kafka cada vez que detecte una persona, y podrás ver la imagen correspondiente al abrir el enlace.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/11.png" style={{width:1000, height:'auto'}}/></div>

¡Felicidades por completar la integración de Watcher con Kafka!  
Kafka ofrece un sinfín de funciones útiles que puedes seguir explorando. Sigue con el excelente trabajo y adéntrate en las emocionantes posibilidades que te esperan.

## Soporte técnico y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos tipos de soporte y asegurar que tu experiencia sea lo más fluida posible.  
Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>