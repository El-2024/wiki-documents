---
description: SenseCAP_Sensor_Probes_Product_Catalogue
title: SenseCAP Sensor Probes Product Catalogue
keywords:
- SenseCAP_Sensor_Probes
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Sensor_Probes_Product_Catalogue
last_update:
  date: 07/24/2025
  author: Guillermo
---

# Acerca de SenseCAP

SenseCAP es la línea de productos IIoT de Seeed Studio, enfocada en aplicaciones de monitoreo ambiental inalámbrico como agricultura inteligente, ciudades inteligentes y más. Incluye hardware (sensores, registradores de datos y gateways), servicios de software (SenseCAP Mate App, portal web y dashboards abiertos) y API para gestión de dispositivos y datos.

# Acerca de las Sondas de Sensores

Las sondas de sensores industriales SenseCAP están diseñadas para resistir ambientes hostiles como vibración, productos químicos y gases. Tienen clasificación IP66 a IP68 para uso confiable en exteriores e industrias. Están equipadas con conexiones de proceso seguras y transmisores para convertir las señales al formato compatible con sistemas de instrumentación industrial.

Algunas sondas MODBUS RS485 vienen en dos versiones:

1. **Cableado directo (hook-up wires)**: Se recomiendan con el [Data Logger LoRaWAN® SenseCAP S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) para comunicación inalámbrica de bajo consumo y largo alcance.
2. **Conector de aviación**: Preconfiguradas para [SenseCAP Sensor Hub 4G](https://www.seeedstudio.com/SenseCAP-Sensor-Hub-4G-Data-Logger-with-builtin-battery-p-4852.html), ideal para captura de datos mediante red celular 3G/4G LTE.

# Aplicaciones

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture2.png" alt="pir" width={600} height="auto" /></p>

# Arquitectura

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture3.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture4.png" alt="pir" width={600} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture5.png" alt="pir" width={600} height="auto" /></p>

## Sensor Industrial MODBUS RS485 de Amoníaco (NH₃)

**Conector de Aviación**  
**SKU:** [101990862](https://www.seeedstudio.com/RS485-NH3-Sensor-Connector-p-5113.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture6.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture7.png" alt="pir" width={600} height="auto" /></p>

## Sensor Industrial MODBUS RS485 de Sulfuro de Hidrógeno (H₂S)

**Conector de Aviación**  
**SKU:** [101990863](https://www.seeedstudio.com/RS485-H2S-Sensor-Connector-p-5114.html)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture6.png" width="600"/>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture8.png" width="600"/>
</div>

**Notas técnicas:**

1. Tiempo desde el encendido hasta la primera lectura válida.
2. En aire limpio, el tiempo de calentamiento puede ser menor.
3. El intervalo de actualización de datos se mantiene constante si se deja energizado.
4. Tiempo T90 (tiempo para alcanzar el 90% del valor final): < 30 segundos.

## Sensor de CO₂, Temperatura y Humedad RS485 & SDI-12

**Conector de Aviación**  
**SKU:** [101991029](https://www.seeedstudio.com/SenseCAP-CO2-Temperature-and-Humidity-Sensor-with-RS485-SDI-12-Connector-p-5719.html)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture9.png" width="600"/>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture10.png" width="600"/>
</div>

**Notas técnicas:**

1. Requiere un tiempo de preparación al encenderlo antes de obtener valores válidos por Modbus.
2. Tiempo de calentamiento = valor del registro `0x0021 + 3` segundos. Leer el registro `0x0000` antes de este tiempo dará `0`.
3. Actualización periódica automática si el sensor permanece encendido.
4. Frecuencia de consulta recomendada para el maestro Modbus.
5. Tiempo de respuesta tras recibir una instrucción (ajustado en registro `0x0020`).

## Sensor Industrial de Temperatura y Humedad del Aire

**Conector de Aviación**  
**SKU:** [101990881](https://www.seeedstudio.com/RS485-Temperature-and-Humidity-Sensor-p-5235.html)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture11.png" width="600"/>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture12.png" width="600"/>
</div>

## Sensor de Humedad y Temperatura del Suelo (S-Soil MT-02A)

- **Cableado directo:** [101990668](https://www.seeedstudio.com/RS485-Soil-Moisture-Temperature-Sensor-S-Soil-MT-02-p-4634.html)  
- **Conector de aviación:** [314990620](https://www.seeedstudio.com/RS485-Soil-Moisture-Temperature-Sensor-S-Soil-MT-02B-p-4859.html)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture13.png" width="600"/>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture14.png" width="600"/>
</div>

## Sensor de Humedad, Temperatura y Conductividad Eléctrica del Suelo (S-Soil MTEC-02A)

- **Cableado directo:** [101990667](https://www.seeedstudio.com/RS485-Soil-Moisture-Temperature-EC-Sensor-S-Soil-MTEC-02-p-4633.html)  
- **Conector de aviación:** [314990621](https://www.seeedstudio.com/RS485-Soil-Moisture-Temperature-EC-Sensor-S-Soil-MTEC-02B-p-4860.html)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture15.png" width="600"/>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture16.png" width="600"/>
</div>

## Sensor de Intensidad de Luz (S-Light-01)

- **Cableado directo:** [314990739](https://www.seeedstudio.com/light-intensity-sensor-p-a-4863.html)  
- **Conector de aviación:** [314990740](https://www.seeedstudio.com/light-intensity-sensor-p-b-4863.html)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture17.png" width="600"/>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture18.png" width="600"/>
</div>

## Sensor PAR Industrial (S-PAR-02A), MODBUS-RTU RS485

- **Cableado directo:** [314990733](https://www.seeedstudio.com/RS485-S-PAR-02A-p-4829.html)  
- **Conector de aviación:** [314990735](https://www.seeedstudio.com/RS485-S-PAR-02B-p-4830.html)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture19.png" width="600"/>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture20.png" width="600"/>
</div>

## Sensor PAR Analógico (0–2.5 V)

**SKU:** [314990734](https://www.seeedstudio.com/PAR-2-5V-p-4831.html)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture21.png" width="600"/>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture22.png" width="600"/>
</div>

## Sensor de Radiación Solar Total (S-ZFS-02A), MODBUS-RTU RS485

**SKU:** [101991047](https://www.seeedstudio.com/RS485-p-5691.html)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture23.png" width="600"/>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture24.png" width="600"/>
</div>

## Sensor de Radiación UV (S-ZW-01A), MODBUS-RTU RS485

**SKU:** [101991048](https://www.seeedstudio.com/RS485-p-5692.html)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture25.png" width="600"/>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture26.png" width="600"/>
</div>

## Sensor de Humedad Foliar y Temperatura (A), MODBUS-RTU RS485

- **Cableado directo:** [314990737](https://www.seeedstudio.com/leaf-wetness-sensor-p-a-4861.html)  
- **Conector de aviación:** [314990738](https://www.seeedstudio.com/leaf-wetness-sensor-p-b-4861.html)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture27.png" width="600"/>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture28.png" width="600"/>
</div>

## Sensor de Nivel de Líquido para Agua, Aceite y Líquidos Ligeramente Corrosivos

**SKU:** [314990619](https://www.seeedstudio.com/Liquid-Level-Sensor-p-4619.html)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture29.png" width="600"/>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture30.png" width="600"/>
</div>

## Sensor de Nivel de Líquido Industrial MODBUS RS485 con Conector de Aviación

**SKU:** [101990860](https://www.seeedstudio.com/Liquid-Level-Sensor-RS485-p-5005.html)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture31.png" width="600"/>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture32.png" width="600"/>
</div>

## Sensor de pH Industrial MODBUS-RTU RS485 & Salida Analógica 0–2 V (S-pH-01A) V2.0

- **Cableado directo:** [101990666](https://www.seeedstudio.com/RS485-pH-Sensor-S-pH-01A-p-4632.html)  
- **Conector de aviación:** [314990622](https://www.seeedstudio.com/RS485-pH-Sensor-S-pH-01B-p-4632.html)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture33.png" width="600"/>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture34.png" width="600"/>
</div>

## Sensor EC y TDS Industrial MODBUS-RTU RS485 & Salida Analógica 0–2 V

- **Cableado directo:** [314990634](https://www.seeedstudio.com/EC-RS485-p-4848.html)

- **Conector de aviación:** [314990742](https://www.seeedstudio.com/EC-&-TDS-Sensor-RS485-b-p-4865.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture35.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture36.png" alt="pir" width={600} height="auto" /></p>

## Sensor de Oxígeno Disuelto RS485 MODBUS (Fluorescente)

**SKU:** [314990633](https://www.seeedstudio.com/RS485-p-5101.html)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture37.png" width="600"/>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture38.png" width="600"/>
</div>

## Sensor de Turbidez RS485 MODBUS (S-DTS210-01B)

**SKU:** 101990793

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture39.png" width="600"/>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture40.png" width="600"/>
</div>

## Sensor Ultrasónico de Nivel RS485 - 750 cm

**SKU:** [101991041](https://www.seeedstudio.com/RS485-750cm-Ultrasonic-Level-Sensor-p-5587.html)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture41.png" width="600"/>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture42.png" width="600"/>
</div>

## Sensor Ultrasónico de Nivel RS485 - 500 cm

**SKU:** [101991042](https://www.seeedstudio.com/RS485-500cm-Ultrasonic-Level-Sensor-p-5588.html)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture43.png" width="600"/>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture44.png" width="600"/>
</div>

## Pluviómetro Óptico Industrial RG-15

**SKU:** [114992321](https://www.seeedstudio.com/Rain-Gauge-RG-15-p-4648.html)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture45.png" width="600"/>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture46.png" width="600"/>
</div>

## Sensor de Fugas de Agua Grado Industrial IP66 RS485

**SKU:** [314990618](https://www.seeedstudio.com/Water-Leak-Detector-p-4620.html)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture47.png" width="600"/>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture48.png" width="600"/>
</div>

## Escudo de Radiación Solar para Protección de Sensores Exteriores - A10

**SKU:** [114992222](https://www.seeedstudio.com/Solar-Radiation-Shield-for-Outdoor-Sensor-Protection-A10-p-4601.html)

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture27.png" width="600"/>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture28.png" width="600"/>
</div>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture49.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Sensor_Probes_Product_Catalogue/Picture50.png" alt="pir" width={600} height="auto" /></p>


