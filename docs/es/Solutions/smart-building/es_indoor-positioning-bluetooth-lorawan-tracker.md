---
title: "Sistema de Posicionamiento Interior Bluetooth con LoRaWAN"
description: "Una solución confiable de posicionamiento interior usando el SenseCAP Tracker. Combina Bluetooth para seguimiento preciso de ubicación con LoRaWAN para transmisión de datos de largo alcance, permitiendo un despliegue fácil."
keywords:
  - Bluetooth
  - LoRaWAN
  - SenseCAP Tracker
  - Posicionamiento Interior
  - Seguimiento de Activos
  - SOS
  - Seguridad del Campus
slug: /es/solutions/indoor-positioning-bluetooth-lorawan-tracker
sidebar_position: 1
last_update:
  date: 08/11/2025
  author: Spencer
---

## Introducción

### Descripción General

El posicionamiento interior es un desafío común para muchas industrias. Aunque soluciones como Wi-Fi o UWB ofrecen alta precisión, pueden ser costosas y complejas de instalar. Esta solución proporciona una alternativa rentable y fácil de desplegar para **posicionamiento basado en zonas**. Combina dos poderosas tecnologías inalámbricas: **Bluetooth Low Energy (BLE)** para determinar presencia dentro de un área específica, y **LoRaWAN** para transmisión de datos de largo alcance y bajo consumo.

En su núcleo, este sistema utiliza dispositivos como el **SenseCAP T1000 Tracker** para determinar su proximidad al beacon BLE más cercano. El método principal es confirmar presencia dentro de una zona específica, lo cual es excelente para casos de uso como check-ins automatizados o verificar que un activo está en una habitación designada.

Aunque técnicamente es posible usar la intensidad de señal de múltiples beacons (una técnica llamada trilateración) para estimar coordenadas X-Y, este enfoque a menudo intercambia confiabilidad y duración de batería por precisión. La intensidad de señal puede ser inestable y verse afectada por factores ambientales, y transmitir datos desde múltiples beacons consume más energía. Por lo tanto, esta solución está optimizada para **detección de presencia** confiable y de larga duración de batería en lugar de seguimiento de coordenadas de alta precisión.

:::tip Navega a nuestra página de paquete

Consulta nuestra página de paquete [Posicionamiento Integrado Interior y Exterior](https://www.seeedstudio.com/Indoor-Outdoor-Integrated-Positioning.html) para todos los productos que necesitas para implementar esta solución.

:::

### Características Clave y Beneficios

- **Rentable y Escalable**: Aprovecha beacons BLE asequibles y evita la necesidad de instalaciones costosas de gateway en cada habitación.
- **Transmisión de Datos de Largo Alcance**: Un solo gateway LoRaWAN puede cubrir un edificio completo o campus, reduciendo drásticamente los costos de infraestructura.
- **Alerta SOS Instantánea**: Los trackers incluyen un botón de pánico que, al presionarse, envía inmediatamente una alerta SOS vía LoRaWAN para respuesta de emergencia rápida.
- **Gestión Inteligente de Energía**: Al usar un acelerómetro integrado, el tracker puede reportar solo cuando se detecta movimiento y enviar señales de "latido" periódicas de lo contrario. Esto extiende dramáticamente la duración de la batería a más de un año para muchas aplicaciones de seguimiento de activos.
- **Despliegue Simple**: Configurar beacons BLE y gateways LoRaWAN es sencillo, poniendo tu sistema de posicionamiento en línea rápidamente.
- **Software de Código Abierto**: El proyecto es completamente de código abierto, permitiéndote construir y personalizar tu propio servidor backend usando nuestro [repositorio de GitHub.](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5)

### Casos de Uso

<div class="info-section">
    <div class="section-header">
        <h2>Casos de Uso</h2>
        <p>Esta solución es ideal para una amplia gama de aplicaciones de seguimiento basado en zonas y seguridad:</p>
    </div>
    <ul class="info-list">
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg></div><div class="info-content"><h3>Seguridad de Campus y Escuela</h3><p>Proporciona a estudiantes y personal un tracker portátil. El botón SOS integrado les permite enviar instantáneamente una alerta de emergencia con su última ubicación conocida desde cualquier lugar del campus, brindando tranquilidad y permitiendo tiempos de respuesta más rápidos.</p></div></li>
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg></div><div class="info-content"><h3>Gestión de Activos</h3><p>Rastrea la ubicación de activos valiosos, tanto en interiores como exteriores (ej., vehículos en un estacionamiento). Configura el tracker para reportar solo cuando se mueve, conservando batería mientras aseguras ser alertado de movimientos no autorizados.</p></div></li>
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.542 2.72c.266.059.537.1.82.118m7.542 2.72a3 3 0 01-4.682-2.72m0 0a3 3 0 013.741-.479m-.479 3.742a9.094 9.094 0 01-3.742.479m-12 .482c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479m0 0a3 3 0 01-3.741.479m5.421 2.053a3 3 0 01-4.682-2.72m0 0c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479M12 12a3 3 0 01-3-3m0 0a3 3 0 013-3m0 0a3 3 0 013 3m0 0a3 3 0 01-3 3z" /></svg></div><div class="info-content"><h3>Check-In Automatizado y Gestión de Personal</h3><p>Al ajustar la intensidad de señal de un beacon BLE, puedes crear una zona de "check-in" para oficinas o hogares de ancianos. Cuando una persona que lleva un tracker entra a la zona, su presencia se registra automáticamente.</p></div></li>
    </ul>
</div>

### Arquitectura del Sistema

El sistema opera bajo un principio simple pero poderoso. Los trackers móviles escuchan señales de beacons fijos y reportan lo que escuchan a un servidor central.

![Diagrama de Arquitectura del Sistema](https://media-cdn.seeedstudio.com/media/wysiwyg/IoT_Device/_163.png)

### Prerrequisitos

Los componentes principales son:

1. **Beacons BLE**: Estos son pequeños transmisores fijos colocados en ubicaciones conocidas (ej., entradas de habitaciones, zonas clave). Transmiten continuamente un ID único.
2. **SenseCAP T1000 Tracker**: Este es el dispositivo móvil adjunto al activo o persona que quieres rastrear. Escanea beacons BLE cercanos e identifica el que tiene la señal más fuerte.
3. **Gateway LoRaWAN**: El tracker envía un paquete de datos conteniendo el ID del beacon BLE más cercano al gateway vía LoRaWAN.
4. **Servidor de Red y Aplicación**: El gateway reenvía los datos a un Servidor de Red LoRaWAN([SenseCAP Data](https://sensecap.seeed.cc/portal)), que luego los enruta a un servidor de aplicación. El servidor de aplicación mantiene un mapa de los IDs de beacon y sus ubicaciones del mundo real, permitiéndole determinar la posición del tracker (ej., "Tracker #58 está cerca del Beacon #12, que está en la Sala de Conferencias 3").

Antes de comenzar, asegúrate de tener lo siguiente:

- Un SenseCAP T1000 Tracker
- Uno o más beacons BLE
- Un gateway LoRaWAN conectado a internet
- Un servidor o computadora con Docker instalado

<div class="seeed-features-container">
    <div class="seeed-features-grid">

  <!-- Card 1: SenseCAP T1000 Tracker -->
  <div class="seeed-feature-card">
      <div class="card-header">
          <h2><a href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-B-p-5698.html">SenseCAP T1000 Tracker</a></h2>
          <p>Tracker móvil LoRaWAN® con capacidades de escaneo BLE</p>
      </div>
      <div class="card-body">
          <ul class="features-list">
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                  </div>
                  <p><span class="highlight">Detección de Beacon BLE:</span> Soporta BLE 5.1 para posicionamiento preciso interior y exterior.</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 9.393a15 15 0 0121.213 0" />
                      </svg>
                  </div>
                  <p><span class="highlight">Red de Área Amplia:</span> Conectividad LoRaWAN® Clase A(v1.0.4) para comunicación de largo alcance y bajo consumo.</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                  </div>
                  <p><span class="highlight">Detección de Movimiento:</span> Acelerómetro integrado para detección en tiempo real de movimiento y estado estacionario.</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                  </div>
                  <p><span class="highlight">Botón de Emergencia:</span> Botón SOS independiente para activar alertas de emergencia con una presión.</p>
              </li>
          </ul>
      </div>
  </div>

  <!-- Card 2: BLE Beacons -->
  <div class="seeed-feature-card">
    <div class="card-header">
        <h2><a href="https://www.seeedstudio.com/BC01-Indoor-Bluetooth-Beacon-p-5791.html">Beacons BLE</a></h2>
        <p>Transmisión Regular de Bluetooth</p>
    </div>
    <div class="card-body">
        <ul class="features-list">
            <li class="feature-item">
                <div class="feature-icon">                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                </div>
                <p><span class="highlight">Compatible con Protocolo:</span> Bluetooth® LE 5.0 | Soporte completo para formatos iBeacon y Eddystone.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.572a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                    </svg>
                </div>
                <p><span class="highlight">Despliegue Flexible:</span> Potencia de transmisión configurable para radio de cobertura ajustable.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="size-2">
                    <path d="M4 7.75A.75.75 0 0 1 4.75 7h5.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-5.5A.75.75 0 0 1 4 8.25v-.5Z" />
                    <path fill-rule="evenodd" d="M3.25 4A2.25 2.25 0 0 0 1 6.25v3.5A2.25 2.25 0 0 0 3.25 12h8.5A2.25 2.25 0 0 0 14 9.75v-.085a1.5 1.5 0 0 0 1-1.415v-.5a1.5 1.5 0 0 0-1-1.415V6.25A2.25 2.25 0 0 0 11.75 4h-8.5ZM2.5 6.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-3.5Z" clip-rule="evenodd" />
                </svg>
                </div>
                <p><span class="highlight">Larga Duración:</span> Hasta <span class="highlight">2 años</span> de duración de batería con configuraciones estándar.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.456-2.456L11.25 18l1.938-.648a3.375 3.375 0 002.456-2.456L16.25 13.5l.648 1.938a3.375 3.375 0 002.456 2.456L21 18l-1.938.648a3.375 3.375 0 00-2.456 2.456z" />
                    </svg>
                </div>
                <p><span class="highlight">Instalación Fácil:</span> Viene con respaldo adhesivo para montaje fácil en paredes u otras superficies.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-radio-icon lucide-radio"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"/><path d="M19.075 4.933a10 10 0 0 1 0 14.134"/><path d="M4.925 19.067a10 10 0 0 1 0-14.134"/><path d="M7.753 16.239a6 6 0 0 1 0-8.478"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <p><span class="highlight">Rango de Transmisión:</span> Hasta 75 metros en exteriores, 120 metros en interiores en áreas abiertas.</p>
            </li>
        </ul>
    </div>
</div>

  <!-- Card 3: SenseCAP M2 Multi-Platform Gateway -->
  <div class="seeed-feature-card">
    <div class="card-header">
        <h2><a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html">SenseCAP M2 Multi-Platform Gateway</a></h2>
        <p>Infraestructura de Red LoRaWAN®</p>
    </div>
    <div class="card-body">
        <ul class="features-list">
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <p><span class="highlight">Amplia Cobertura:</span> Radio de cobertura interior de hasta <span class="highlight">2 km</span>, asegurando señal estable.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.542 2.72c.266.059.537.1.82.118m7.542 2.72a3 3 0 01-4.682-2.72m0 0a3 3 0 013.741-.479m-.479 3.742a9.094 9.094 0 01-3.742.479m-12 .482c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479m0 0a3 3 0 01-3.741.479m5.421 2.053a3 3 0 01-4.682-2.72m0 0c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479M12 12a3 3 0 01-3-3m0 0a3 3 0 013-3m0 0a3 3 0 013 3m0 0a3 3 0 01-3 3z" />
                    </svg>
                </div>
                <p><span class="highlight">Conectividad Masiva:</span> Soporta más de <span class="highlight">200</span> dispositivos concurrentes con excelente rendimiento.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                    </svg>
                </div>
                <p><span class="highlight">Múltiples Backhauls:</span> Proporciona múltiples opciones de backhaul de red incluyendo Ethernet, Wi-Fi y 4G.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008z" />
                    </svg>
                </div>
                <p><span class="highlight">Solución Integrada:</span> Capacidades de servidor LoRaWAN local integrado para simplificar el despliegue y gestión de red.</p>
            </li>
        </ul>
    </div>
  </div>
</div>
</div>

## Guía de Inicio

<div align="center">
<img class='img-responsive' width="1280" src="https://mermaid.ink/img/pako:eNo9jk9vwjAMxb9K5HOp2tE_JIdJQDcuO41phzUcotYtFW0SpYkYVHz3BSrmk9_Pz_aboFI1AoOmV-fqKIwlH59cEl_rcm-9PpDF4pVsygJ1ry5kg6JScpzpttyjdZrshMWzuMyweFrXWs_krdwq2XStM0i-jKhOaObBe_ndjU703RVnsPPOQfdo8cAlBNCargZmjcMABjSDuEuY7gE52CMOyIH5thbmxIHLm9_RQv4oNTzXjHLtEVgj-tErp2uftehEa8TwTw3KGs1WOWmB0Sh9HAE2wS-wLA6XeULzlyyL0piuaBLABVgc0ZBmeZymyTJa0SjJbgFcH3-jcJWntz-sxGvR?type=png" alt="Indoor positioning 2d map"/>
</div>

1. **Desplegar Beacons**: Coloque beacons BLE en ubicaciones estratégicas en toda su instalación. Cree un mapa o lista documentando el ID único de cada beacon y su ubicación física (ej., `Beacon_ID_01: "Entrada Principal"`, `Beacon_ID_02: "Zona de Almacén A"`).
2. **Configurar el Gateway**: Conecte su gateway LoRaWAN a internet y configúrelo para reenviar paquetes a su Servidor de Red LoRaWAN elegido.
3. **Desplegar la Aplicación**: En su servidor de aplicaciones, cree la lógica para mapear los IDs de beacon reportados de vuelta a las ubicaciones físicas que documentó en el Paso 3.
4. **Configurar el Tracker**: Active el SenseCAP T1000 e incorpórelo a su Servidor de Red LoRaWAN. Asegúrese de que esté configurado para modo de escaneo BLE.
5. **Visualizar**: Mientras el tracker se mueve por la instalación, reportará el beacon más cercano, y su aplicación puede mostrar su ubicación en un panel de control o mapa.

### Paso 1: Configurar su Hardware

Primero, necesita configurar los dispositivos físicos en su instalación.

#### **1a. Desplegar Beacons**

:::info
Para detalles técnicos completos, consulte la **[documentación del BC01 Indoor Bluetooth Beacon](/es/bluetooth_beacon_for_SenseCAP_Traker/)**.
:::

Primero, coloque sus **beacons BLE** en ubicaciones clave en toda su instalación, como en la entrada principal, en el almacén y en las oficinas.

<div align="center">
<img class='img-responsive' width="360" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/10.5.png" alt="Indoor positioning 2d map"/>
</div>

A continuación, cree una lista (plantilla) para registrar la **Dirección MAC única** de cada beacon y su ubicación física. Este registro es **esencial** para el paso de configuración del software.

**Ejemplo de Registro:**

```csv
MAC Address,Location,Beacon ID
c30000564b31,"Main Entrance",01
c30000564b32,"Warehouse Zone A",02
c30000564b33,"Corner Office",03
```
El video a continuación muestra cómo utilizarás esta lista para agregar tus beacons al mapa de la aplicación más adelante. Crear un registro preciso ahora hará que la configuración del software sea mucho más fácil.

<div style={{ textAlign: 'center' }}>
<video width="640" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-app-configuration.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

**Consejo Profesional:** Para una gestión más fácil, puedes usar la **aplicación SenseCraft** para dar a todos tus beacons un **UUID** consistente. Esto ayuda a asegurar que el rastreador solo escuche a tus dispositivos e ignore a otros. Consulta [Característica 4: Filtrar por UUID de Beacon](https://www.google.com/search?q=%23feature-4-filter-by-beacon-uuid) para más detalles.

<details>
<summary>Vista rápida de los parámetros del beacon BC01</summary>

| Parámetros | Valor Predeterminado |
|------------|----------------------|
| UUID | FDA50693-A4E2-4FB1-AFCF-C6EB07647825 |
| Major | 10001 |
| Minor | 19641 |
| Potencia medida | -59dBm |
| Potencia Tx | -30 - +4dBm, predeterminado 0dBm |
| Intervalo Adv | 100ms~10s, predeterminado 500ms |
| Contraseña | seeed123 (Letras y números) |
| Nombre del Dispositivo | BC01 (1-7 caracteres) |
| Reinicio Suave | seeed123 (igual que la contraseña) |

</details>

#### 1b. Configurar el Gateway

Primero, enciende tu **gateway LoRaWAN** y conéctalo a internet. A partir de aquí, los pasos dependen de qué servidor de red estés usando.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="sensecap-portal" label="SenseCraft Data" default>

Si estás usando la plataforma predeterminada [SenseCraft Data](https://sensecap.seeed.cc/portal/)(anteriormente SenseCAP Portal), tu gateway ya está preconfigurado.

1. Sigue el [manual de usuario oficial](/es/quick_start_with_M2_MP) para asegurarte de que el gateway esté en línea y conectado a tu cuenta.
2. Una vez hecho esto, puedes **continuar al Paso 2**.

  </TabItem>
  <TabItem value="chirpstack" label="ChirpStack (Servidor LoRaWAN Local)">

Si estás usando un servidor **ChirpStack** auto-hospedado, necesitarás redirigir el gateway y preparar un script decodificador.

1. **Configurar el Gateway:** Sigue esta guía para [redirigir los datos de tu gateway a ChirpStack](/es/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration/).
2. **Descargar el Decodificador:** ChirpStack necesita un decodificador para entender los datos enviados por tu rastreador T1000. Descarga el script ahora para que esté listo para un paso posterior.

    - [**Descargar Script Decodificador T1000**](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/TTN/SenseCAP_T1000_TTN_Decoder.js)

    **Nota:** Agregarás este script dentro de la **configuración de aplicación de ChirpStack**, no en el gateway mismo.

<div style={{ textAlign: 'center' }}>
<video width="640" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-app-for-chripstack.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

  </TabItem>
</Tabs>

### Paso 2: Instalar la Aplicación de Posicionamiento

A continuación, instalarás la aplicación principal en tu servidor usando Docker. O puedes ver primero [la demostración](https://indoorpositioning-demo.seeed.cc/).

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-preview.png" alt="Vista previa de la aplicación de posicionamiento interior"/>
</div>

#### Ejecutar el Comando de Instalación

Abre una terminal en tu servidor y ejecuta el siguiente comando:

```bash
docker run -p 5173:5173 -p 8022:8022 --name indoor-positioning --restart unless-stopped -v /data/indoor-positioning/db/:/app/db/ -d seeedcloud/sensecraft-indoor-positioning
```

**Lo que hace este comando:**

- Descarga e inicia la aplicación SenseCraft Indoor Positioning.
- `-p 5173:5173` hace que el panel web sea accesible en el puerto `5173`.
- `-v /data/indoor-positioning/db/:/app/db/` le dice a la aplicación que almacene su base de datos y mapas en la carpeta `/data/indoor-positioning/db/` en tu máquina.
- `-d` ejecuta la aplicación en segundo plano.

Después de ejecutar el comando, puedes acceder al panel abriendo un navegador web y yendo a `http://<tu_ip_del_servidor>:5173`.

### Paso 3: Configurar la Aplicación

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-configuration-management.png" alt="app-configuration-management"/>
</div>

Ahora, abre el panel de la aplicación en tu navegador para configurar los ajustes del sistema.

#### 3a. Configuración de Tiempo de Ejecución (Conectando a LoRaWAN)

Esta configuración conecta la aplicación a tu Servidor de Red LoRaWAN para recibir datos del rastreador. Una característica clave es que **la aplicación soporta conexiones simultáneas tanto a la plataforma SenseCraft Data como a un servidor ChirpStack.**

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-server-runtime-configuration.png" alt="app-server-runtime-configuration"/>
</div>

En el panel, puedes habilitar una o ambas de las siguientes fuentes MQTT para conectarte a tus servidores de red.

##### Para Conectar a SenseCraft Data

1. Habilita el interruptor **SenseCAP OpenStream MQTT**.
2. Ingresa tu **Nombre de Usuario** y **Clave API**.
      - Puedes generar estas credenciales siguiendo la [guía de inicio rápido de Data OpenStream API](https://www.google.com/search?q=/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_quickstart/).

##### Para Conectar a ChirpStack

1. Habilita el interruptor **ChirpStack MQTT**.
2. Ingresa la **dirección del servidor** de ChirpStack y el **ID de Aplicación**.
      - El campo de tópico MQTT se actualizará automáticamente. Puedes encontrar el **ID de Aplicación** en la página principal de tu aplicación dentro de ChirpStack.

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/chirpstack-application-id.png" alt="chirpstack-application-id"/>
</div>

---

**Nota:** El campo `{clientID}` es usado por el sistema y será reemplazado con un ID aleatorio al iniciar. No necesitas cambiarlo.

**Importante:** Después de habilitar o cambiar cualquiera de estas configuraciones, debes **reiniciar la aplicación** (el contenedor Docker) para que surtan efecto.

##### Otras Configuraciones

Las siguientes configuraciones pueden cambiarse en cualquier momento sin reiniciar la aplicación:

- **Autenticación:** Actualiza el nombre de usuario y contraseña usados para iniciar sesión en el panel de la aplicación.
- **Posicionamiento de Área:** Habilita esta opción para estimar la ubicación de un rastreador cuando hay muy pocas señales de beacon disponibles para un posicionamiento preciso de múltiples puntos.
- **Control de Acceso del Rastreador:** Configura qué dispositivos están permitidos para enviar datos a la aplicación. Puedes permitir datos de cualquier dispositivo o crear una lista específica de rastreadores autorizados.
- **Webhook:** Habilita esto para enviar resultados de ubicación a tu propio servicio usando una solicitud HTTP POST.

#### 3b. Configuración de Mapa y Beacon

En este paso, usarás el panel de la aplicación para subir tu plano de planta y agregar los beacons que desplegaste físicamente anteriormente.

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-configuration-management.png" alt="Gestión de Configuración de Aplicación"/>
</div>

1. Sube Tu Mapa
Primero, ve al menú de configuración y sube una imagen de tu plano de planta. Se recomiendan formatos de imagen estándar como PNG o JPG.
2. Agrega Tus Beacons
Ve a la sección "Beacons". Usando la lista que creaste en el [Paso 1a](#1a-desplegar-beacons), agrega la información de cada beacon (como su dirección MAC). La forma más fácil de hacer esto es hacer clic directamente en la ubicación del beacon en el mapa que acabas de subir.
3. Ajusta el Factor Ambiental (Opcional)
Esta es una configuración avanzada que ajusta finamente la precisión de ubicación. Ayuda al sistema a convertir la intensidad de señal (RSSI) en una distancia más precisa al tener en cuenta tu entorno específico.
    - Para espacios abiertos, el valor predeterminado de ~2.0 es usualmente suficiente.
    - Para áreas interiores complejas con muchas paredes y obstáculos, puede que necesites ajustar el valor entre 1.8 y 4.0.
    - **Recomendación:** Es mejor dejar esto en la configuración predeterminada para empezar. Puedes volver y ajustarlo más tarde si necesitas mejorar la precisión del posicionamiento.

### Paso 4: Activar y Visualizar Tu Rastreador

El paso final es encender tu rastreador y verlo en el mapa.

1. **Activa el Rastreador SenseCAP T1000** e incorpóralo a tu Servidor de Red LoRaWAN. Asegúrate de que tu gateway esté en línea y que el dispositivo rastreador esté 'registrado' en el servidor LNS. consulta el [Paso 1b](#1b-configurar-el-gateway) para detalles.
2. **Asegúrate de que esté configurado en modo de escaneo BLE** para que pueda detectar los beacons. Consulta el video a continuación para ayuda.
3. **Visualizar:** Mientras el rastreador se mueve por tu instalación, detectará los beacons más cercanos e informará su ubicación. Verás su ícono moviéndose por el mapa en tu panel.

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/tracker-visualize-on-map.png" alt="tracker-visualize-on-map"/>
</div>

<div style={{ textAlign: 'center' }}>
<video width="480" height="640" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-tracker-configuration.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video><p><em>Conserva la configuración predeterminada de la plataforma (SenseCAP for The Things Network), cuando uses SenseCraft Data.</em></p>
</div>

## Resumen de Características de la Aplicación

### Característica 1: Envío de Datos (Webhook & WebSocket)

Puedes obtener datos en tiempo real del sistema de dos maneras:

- **Webhook:** Como se mencionó en la configuración, esto envía datos a una URL que proporciones.
- **WebSocket:** Para aplicaciones en tiempo real, puedes conectarte al endpoint `/ws` usando Autenticación HTTP Básica. Los formatos de datos para `sos`, `tracker_update` (trilateración), y `tracker_location_approximate` (proximidad) se detallan en los ejemplos JSON proporcionados en el documento original.

#### **Formatos de Datos**

<Tabs>
<TabItem value="sos" label="Alerta SOS" default>

```json
{
    "type": "tracker_sos",
    "data": {
        "2CF7F1C0530004AD": {
            "timestamp": 1756967508000,
            "sos": 0
        }
    }
}
```

</TabItem>
<TabItem value="trilateration" label="Trilateración/Multilateral">

```json
{
    "type": "tracker_update",
    "data": {
        "2CF7F1C0530003BD": {
            "trackerId": "2CF7F1C0530003BD",
            "timestamp": 1756967455550,
            "position": {
                "x": 11.1,
                "y": 12.3
            },
            "last_detected_beacons": [
                {
                    "macAddress": "C3:00:00:56:4B:5D",
                    "major": null,
                    "minor": null,
                    "name": "Unknown Beacon",
                    "rssi": -79,
                    "txPower": null,
                    "configured_x": null,
                    "configured_y": null
                },
                {
                    "macAddress": "C3:00:00:3E:7D:AA",
                    "major": null,
                    "minor": null,
                    "name": "Unknown Beacon",
                    "rssi": -80,
                    "txPower": null,
                    "configured_x": null,
                    "configured_y": null
                },
                {
                    "macAddress": "C3:00:00:13:3C:99",
                    "major": null,
                    "minor": null,
                    "name": "Unknown Beacon",
                    "rssi": -80,
                    "txPower": null,
                    "configured_x": null,
                    "configured_y": null
                }
            ],
            "position_history": [],
            "map": "10 Floor",
            "sos": 2
        }
    }
}
```

</TabItem>
<TabItem value="area" label="Posicionamiento por Área">

```json
{
    "type": "tracker_location_approximate",
    "data": {
        "2CF7F1C0530004AD": {
            "trackerId": "2CF7F1C0530004AD",
            "timestamp": 1756967098851,
            "radius": 5.248074602497725,
            "last_detected_beacons": [
                {
                    "txPower": -59,
                    "rssi": -77,
                    "name": "corner",
                    "configured_x": 32.41,
                    "configured_y": 21.26,
                    "macAddress": "C3:00:00:56:4B:59"
                }
            ],
            "map": "10.5 Floor",
            "sos": 0
        }
    }
}
```

</TabItem>
</Tabs>

### Característica 2: Dos Modos de Posicionamiento

El sistema soporta dos métodos de posicionamiento:

1. **Trilateración:** Cuando el rastreador detecta **tres o más** beacons, calcula una coordenada precisa (x, y). Este es el modo predeterminado y más preciso.
2. **Proximidad (Posicionamiento por Área):** Si habilitas esto y el rastreador solo puede detectar **un** beacon, reportará su posición como estando "cerca" de ese beacon dentro de un radio calculado. Esto es útil para asegurar cobertura en todas las áreas.

### Característica 3: Visualización del Historial de Alertas

Puedes ver el historial de alertas (ej., presiones del botón SOS) para cualquier rastreador haciendo clic en su icono en el mapa. El sistema registra cada nueva alerta y continuará enviando notificaciones para una alerta activa hasta que sea resuelta.

### Característica 4: Filtrar por UUID de Beacon

Puedes filtrar los rastreadores mostrados en el mapa por sus UUIDs de beacon asociados. Esto permite un monitoreo más enfocado de áreas o activos específicos. se valora que no sea hackeado.

## Referencia y Recursos

- **Página de Inicio**: [SenseCraft Indoor Positioning Solution](https://sensecraft.seeed.cc/solution/indoor-positioning-solution/)
- **Imagen Docker**: [seeedcloud/sensecraft-indoor-positioning - Docker Hub](https://hub.docker.com/r/seeedcloud/sensecraft-indoor-positioning)
- **Sitio de Demo en Vivo**: [IndoorPositioning](https://indoorpositioning-demo.seeed.cc/)

## FAQ

<details>
<summary>¿Por qué mi rastreador no está reportando su ubicación?</summary>

- **Causa Probable:** Puede haber un problema con la conectividad LoRaWAN.
- **Solución:** Verifica el estado de tu gateway LoRaWAN para asegurar que esté en línea y conectado. También, verifica que el Device EUI del rastreador esté correctamente registrado en tu servidor de red.

</details>

<details>
<summary>¿Por qué la posición del rastreador es inexacta?</summary>

- **Causa Probable:** La ubicación de tus beacons BLE podría estar causando interferencia o cobertura de señal débil.
- **Solución:** Intenta ajustar la potencia de transmisión de los beacons. También podrías necesitar reubicarlos para reducir la obstrucción de señal por paredes o maquinaria.

</details>

<details>
<summary>¿Por qué la batería del rastreador se agota tan rápidamente?</summary>

- **Causa Probable:** La frecuencia de reporte está configurada demasiado alta, causando que el dispositivo transmita datos más a menudo de lo necesario.
- **Solución:** Optimiza la configuración de detección de movimiento para reportar solo cuando el rastreador se esté moviendo. También puedes aumentar el intervalo de reporte (el tiempo entre actualizaciones de ubicación) para conservar energía.

</details>

<details>
<summary>¿Por qué faltan datos de ubicación o no se muestran?</summary>

- **Causa Probable:** Podría haber un problema con la base de datos o API, a menudo relacionado con cómo se está interpretando la carga útil de datos.
- **Solución:** Primero, verifica que el decodificador de carga útil en tu servidor de aplicación sea correcto y esté funcionando. Si el decodificador es correcto, revisa los logs del servidor de aplicación para cualquier error o problema de conectividad.

</details>

<details>
<summary>¿Por qué las alertas SOS no se reciben prontamente?</summary>

- **Causa Probable:** La red LoRaWAN puede estar congestionada, o la clase del dispositivo no es adecuada para mensajes urgentes.
- **Solución:** Para aplicaciones críticas en tiempo como alertas SOS, asegúrate de que tu rastreador esté configurado para usar **modo Clase C**. Esto mantiene el receptor del dispositivo encendido continuamente, permitiendo la recepción inmediata de mensajes del servidor.

</details>

<details>
<summary>¿Cómo ajusto el intervalo de publicidad y la potencia de transmisión de un beacon BC01?</summary>

Puedes usar la **app SenseCraft** para configurar el beacon BC01.

1. Instala la app SenseCraft desde [Google Play Store](https://play.google.com/store/apps/details?id=com.seeed.sensecraft) o [Apple App Store](https://apps.apple.com/us/app/sensecraft/id1476154572).
2. Abre la app y habilita Bluetooth en tu teléfono.
3. Escanea beacons cercanos y selecciona el que deseas configurar.
4. Ingresa la contraseña predeterminada "**seeed123**" para acceder a la configuración.
5. Ajusta el intervalo de publicidad (100ms a 10s) y la potencia de transmisión (-30dBm a +4dBm) según tus necesidades.
6. Guarda los cambios.

</details>
