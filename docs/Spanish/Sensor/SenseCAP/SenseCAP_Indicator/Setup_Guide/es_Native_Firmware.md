---
description: Get Started with SenseCAP Indicator Native Firmware
title: Firmware Nativo
keywords:
- SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Indicator_Native_Firmware
sidebar_position: 1
last_update:
  date: 07/22/2025
  author: Guillermo
---

# **Firmware Nativa del SenseCAP Indicator**

Las versiones **SenseCAP Indicator D1S** y **D1Pro** incluyen sensores integrados de **tVOC** y **CO₂**, además de un sensor externo **Grove TH** para lecturas precisas de temperatura y humedad. El firmware nativo del SenseCAP Indicator proporciona una interfaz de usuario para mostrar los datos ambientales. En cambio, las versiones **D1** y **D1L**, que no incluyen sensores, mostrarán **N/A** en la página de datos.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_8.png"/></div>

Puedes configurar fácilmente el SenseCAP Indicator desde la página de ajustes:

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/setting.png"/></div>

## **Configuración Wi-Fi**

Selecciona el nombre de tu red Wi-Fi, introduce la contraseña y conéctate.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_9.png"/></div>

Una vez que veas el ícono de Wi-Fi en verde, ¡todo está listo!

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_10.png"/></div>

## **Configuración de Pantalla**

- **Brillo**: Ajusta el nivel de brillo de la pantalla.
- **Modo Suspensión**: Apaga la pantalla después del intervalo de tiempo configurado.  
  Durante el modo de suspensión, la pantalla se apaga y no muestra contenido.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_15.png"/></div>

## **Configuración de Fecha y Hora**

- **Formato de hora**: Puedes elegir entre formato de **24 horas** o **12 horas**.
- **Actualización automática**: Al conectarse a Wi-Fi, el dispositivo sincroniza la hora y zona horaria automáticamente.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_16.png"/></div>

**Configuración manual**: Si la zona horaria no identifica correctamente el horario de invierno o el dispositivo está desconectado, puedes ajustar la zona horaria de forma manual:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_17.png"/></div>

## **Datos de los Sensores**

Ofrecemos cuatro versiones distintas del SenseCAP Indicator: **D1**, **D1S**, **D1L** y **D1Pro**. Cada una está diseñada para diferentes aplicaciones, eliminando hardware innecesario para reducir costos:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/version.png"/></div>

El firmware nativo incluye **dos páginas** que muestran los datos de **tVOC**, **CO₂**, **temperatura** y **humedad**.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_12.png"/></div>

:::caution **Nota importante:**  
La interfaz de usuario del firmware es la misma para todas las versiones del SenseCAP Indicator.  
En los modelos **D1** y **D1L**, que no tienen sensores integrados, los datos de sensores se mostrarán como **N/A**.  
Puedes conectar sensores Grove adicionales y crear una interfaz personalizada.
:::

Haz clic sobre un sensor para acceder a la página de información detallada, donde puedes elegir visualizar datos de las últimas **24 horas** o de **una semana**.  
Los datos se conservan por un periodo de hasta 7 días.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_13.png"/></div>

:::tip ¿Buscas la integración con ChatGPT y DALL·E?  
Dirígete a [SenseCAP Indicator X OpenAI](/SenseCAP_Indicator_OpenAI_X_Overview)
:::
