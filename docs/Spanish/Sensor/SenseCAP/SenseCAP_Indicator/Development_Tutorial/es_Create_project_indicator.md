---
title: Crea un Proyecto (ESP-IDF) - SenseCAP Indicator
description: Step-by-step guide to developing a project for the SenseCAP Indicator using ESP-IDF or Squareline Studio.
keywords: 
- SenseCAP Indicator
- ESP-IDF
- Squareline
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/sensecap_indicator_project
sidebar_position: 4
last_update:
  date: 07/22/2025
  author: Guillermo
---

## **Visión General**

El SenseCAP Indicator integra dos microcontroladores: **ESP32-S3** y **RP2040**. Esta guía está centrada en el desarrollo de proyectos utilizando el **ESP32-S3** con el framework **ESP-IDF**.

Hay dos métodos principales para crear un nuevo proyecto:

1. [**Plantilla de GitHub**](#1-plantilla-de-github)  
2. [**SquareLine Studio**](#2-squareline-studio)

## **Métodos para Crear Proyectos**

### 1. **Plantilla de GitHub**

#### Paso 1: Crear un nuevo proyecto
- Visita el repositorio [indicator-esp-idf-template](https://github.com/Seeed-Solution/indicator-esp-idf-template) y haz clic en **"Use this template"** para crear tu propio repositorio.

#### Paso 2: Clonar el repositorio

```bash
git clone https://github.com/your-username/indicator-esp-idf-template.git
```

#### Paso 3: Compilar el proyecto

Navega al directorio del proyecto y compílalo:

```bash
cd indicator-esp-idf-template
idf.py build
```

#### Paso 4: Grabar el firmware en el dispositivo

Conecta el dispositivo por USB y ejecuta:

```bash
idf.py -p PORT flash
```

#### Paso 5: Monitorear la salida serial

```bash
idf.py -p PORT monitor
```
*Nota: Reemplaza `PORT` con el nombre real del puerto en tu sistema.*

### 2. SquareLine Studio (Diseño de Interfaces UI)

SquareLine Studio es una herramienta de diseño de interfaces gráficas de bajo código, ideal para principiantes

Recurso recomendado: [Low-Code UI Design for SenseCAP Indicator with SquareLine](https://www.hackster.io/spenyan/low-code-ui-design-for-sensecap-indicator-with-squareline-9825fe) 

#### Paso 1: Instalación
- Descarga e instala desde [Squareline's website](https://studio.squareline.io/).
- Inicia un nuevo proyecto.

![](https://hackster.imgix.net/uploads/attachments/1650386/image_4QrcVcHWtG.png?auto=compress%2Cformat&w=1280&h=960)

#### Paso 2: Diseña tu interfaz

- Usa las herramientas gráficas de SquareLine Studio para diseñar los elementos visuales de tu proyecto.

#### Paso 3: Genera y compila el proyecto
- Genera el código de interfaz desde SquareLine Studio.
- Compílalo usando ESP-IDF como se explicó en el método anterior.

For more on using Squareline Studio, refer to the guide on [Low-Code UI Design for SenseCAP Indicator with SquareLine](https://www.hackster.io/spenyan/low-code-ui-design-for-sensecap-indicator-with-squareline-9825fe).

### Consejos para Principiantes
- Si estás comenzando, crea un proyecto básico como "blink" (parpadeo de LED) con SquareLine Studio.
- Para personalización más avanzada, modifica directamente el [repositorio de ejemplo del SDK](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32).

## Servicio ODM

Seeed Studio ofrece un servicio integral ODM para personalización y escalamiento rápido de soluciones basadas en SenseCAP Indicator.

## Tech Support

**¿Necesitas adaptar el hardware, software o diseño industrial a tus necesidades específicas?**

# **Soporte Técnico**

¡No te preocupes, te tenemos cubierto! Por favor visita nuestro [Canal Oficial de Discord de Seeed](https://discord.com/invite/QqMgVwHT3X) para hacer tus preguntas.

Si tienes un pedido grande o necesitas una personalización, por favor contacta a iot@seeed.cc