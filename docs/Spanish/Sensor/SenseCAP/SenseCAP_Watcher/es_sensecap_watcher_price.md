---
description: This article describes Watcher's charging plan on using SenseCraft AI.
title: Precio y Beneficios
image: https://files.seeedstudio.com/wiki/watcher_getting_started/price_month_simpler_1.webp
slug: /es/watcher_price
sidebar_position: 3
last_update:
  date: 07/25/2025
  author: Guillermo
---

# SenseCraft AI para los Planes y Beneficios de Watcher

En Watcher, creemos en proporcionar a los desarrolladores una estructura de precios clara y transparente para integrar inteligencia artificial en sus proyectos. Entendemos que cada desarrollador tiene requerimientos únicos, por lo que ofrecemos una variedad de planes de precios diseñados para cubrir diversas necesidades y presupuestos. Para ayudarte a tomar una decisión informada, hemos detallado los aspectos clave de nuestro modelo de precios y las características específicas incluidas en cada plan.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/price_month_simpler.png" style={{width:1000, height:'auto'}}/></div>

## Nuestros Planes de Precios

<div class="table-center">
	<table align="center">
		<tr>
			<th> </th>
      <th>On-Premise</th>
			<th>SenseCraft Standard</th>
      <th>SenseCraft Pro</th>
		</tr>
		<tr>
			<th>Retención de Datos</th>
			<td align="center">Guardado por usuario</td>
			<td align="center">3 Meses</td>
			<td align="center">3 Meses</td>
		</tr>
		<tr>
			<th>API de Datos</th>
			<td align="center">API HTTP Local</td>
			<td align="center">API MQTT/HTTP</td>
			<td align="center">API MQTT/HTTP</td>
		</tr>
		<tr>
			<th>Análisis de Tareas</th>
			<td align="center">Ilimitado</td>
			<td align="center">Ilimitado</td>
			<td align="center">Ilimitado</td>
		</tr>
		<tr>
			<th>Análisis de Imágenes</th>
			<td align="center">Ilimitado</td>
			<td align="center">15 Minutos/Solicitud</td>
			<td align="center">20000 Solicitudes</td>
		</tr>
		<tr>
			<th>Chat con LLM</th>
			<td align="center">Ilimitado</td>
			<td align="center">200 Solicitudes/Mes</td>
			<td align="center">1000 Solicitudes</td>
		</tr>
		<tr>
			<th>Modelo TinyML y Entrenamiento</th>
			<td align="center">Ilimitado</td>
			<td align="center">Ilimitado</td>
			<td align="center">Ilimitado</td>
		</tr>
    <tr>
			<th>Precio</th>
			<td align="center">Gratis</td>
			<td align="center">Gratis</td>
			<td align="center">Una prueba gratis & Plan de 6.9 USD</td>
		</tr>
	</table>
</div>

:::caution
1. Los planes pagos de SenseCraft Pro están ligados al EUI de cada dispositivo. Esto significa que si tienes cinco dispositivos que quieran usar SenseCraft Pro, deberás pagar por cada uno por separado.

2. El servicio de facturación de SenseCraft Pro se basa en la cantidad de Solicitudes. Cuando compras el servicio, obtienes la cantidad de Solicitudes proporcionadas por el servicio, sin fecha de expiración.

3. SenseCraft Pro activará automáticamente el servicio de prueba cuando tu dispositivo se vincule con la APP SenseCraft.

4. SenseCraft Pro activa la prueba y contabiliza todas las Solicitudes en el formulario de una vez, y luego cambia automáticamente a SenseCraft Standard cuando termines de usarla.
:::

En Watcher, creemos en capacitar a los desarrolladores con la flexibilidad y escalabilidad que necesitan para triunfar con la integración de IA. Nuestros planes de precios están diseñados para adaptarse a una amplia gama de necesidades, desde experimentación casual hasta despliegue a gran escala. Elige el plan que mejor se alinee con la intensidad de uso de IA y los requerimientos de tu proyecto, y deja que Watcher te ayude a desbloquear el máximo potencial de SenseCraft AI. ¡Comienza hoy y experimenta el poder de la IA en tus propios términos!

## Entendiendo Nuestro Modelo de Precios

### Almacenamiento de Datos

Todos los planes incluyen un generoso almacenamiento de datos de **3 meses**, que incluye almacenamiento de imágenes de alarmas, marcas de tiempo y conteos de alarmas.

### Análisis de Tareas

El Análisis de Tareas se refiere a la capacidad de Watcher para comprender e interpretar las tareas asignadas por el usuario, descomponiéndolas en componentes más pequeños y accionables. Esto incluye determinar si una tarea puede ejecutarse usando modelos pequeños, identificar los modelos específicos a utilizar, reconocer los comportamientos a detectar y definir las acciones a tomar. Como base de la funcionalidad de Watcher, nos esforzamos por mantener el Análisis de Tareas sin costo en todos los planes.

### Análisis de Imágenes

El Análisis de Imágenes implica el examen avanzado de las imágenes capturadas por Watcher, permitiendo la identificación de objetos, actividades y contextos dentro de las imágenes. Esta característica requiere el uso de modelos grandes y está sujeta a tarifas por uso. Se cuenta una solicitud cuando tu tarea requiere el uso de un modelo grande para análisis de imagen.

- Si usas el **[Servicio LLM 100% en la Nube](https://wiki.seeedstudio.com/getting_started_with_watcher_task/#pure-cloud-based-llm-service)**, las solicitudes se cuentan según la **Frecuencia de Captura** que configures.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/llm-app.png" style={{width:1000, height:'auto'}}/></div>

- Para el **[Servicio AI Local + LLM en la Nube](https://wiki.seeedstudio.com/getting_started_with_watcher_task/#local-ai--cloud-based-llm-service)**, se cuenta una solicitud cuando el modelo grande es invocado para reconocimiento de imagen después que el modelo pequeño detecta algo. Nota que el intervalo mínimo entre solicitudes no será menor que la **Frecuencia de Captura** configurada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local_llm-app.png" style={{width:1000, height:'auto'}}/></div>

El análisis de imágenes es también una capacidad muy importante de Watcher. Por eso, cuando no tienes suscripción a SenseCraft Pro, también garantizamos al menos un servicio de análisis de imágenes de 15 minutos para que lo uses.

### Chat con Modelos de Lenguaje Grandes

Interactuar con nuestro poderoso Modelo de Lenguaje Grande es una función premium que genera costos por uso. Cuando SenseCraft determina que tu conversación con Watcher es un intercambio de ida y vuelta y Watcher genera una respuesta, se cuenta como una solicitud.

Cuando se agota este conteo, no es posible continuar el chat con Watcher.

### Repositorio de Modelos, Entrenamiento y Subida

El acceso a nuestro extenso [Repositorio de Modelos](https://sensecraft.seeed.cc/ai/#/model?redirect=%2Fdevice), así como la capacidad para entrenar y subir tus propios modelos, es gratuito en todos los planes.

## ¿Cómo suscribirse?

Si necesitas suscribirte a SenseCraft Pro, debes hacerlo dentro de la APP SenseCraft. El primer paso es [vincular tu SenseCAP Watcher](https://wiki.seeedstudio.com/getting_started_with_watcher/#step-3-device-binding) en la APP. Actualmente, la suscripción SenseCraft Pro solo está disponible para usuarios de SenseCAP Watcher.

Ve a la pantalla de chat del SenseCAP Watcher, haz clic en el ícono de configuración en la esquina superior derecha, y cerca del final, habrá una opción llamada **Suscripción**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/subscription.png" style={{width:250, height:'auto'}}/></div>

Aquí puedes ver el número de Solicitudes restantes en tu suscripción actual. Y puedes completar tu suscripción aquí. Actualmente ofrecemos tres precios diferentes para los servicios de suscripción, por favor elige el plan según tu uso real.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page1.png" style={{width:250, height:'auto'}}/></div>

Una vez que confirmes el plan que deseas, acepta el acuerdo de servicio para continuar al pago.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page2.png" style={{width:250, height:'auto'}}/></div>

Actualmente la APP SenseCraft soporta pagos con Paypal. Una vez que el pago sea exitoso, verás las Solicitudes compradas actualizadas en la página de Suscripción.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page3.png" style={{width:250, height:'auto'}}/></div>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

