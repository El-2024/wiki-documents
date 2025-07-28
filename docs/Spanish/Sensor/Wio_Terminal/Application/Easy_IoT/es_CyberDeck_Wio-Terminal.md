---
title: Cyber Desk on Wio Terminal using Platform IO, powered by Cursor AI
image: https://files.seeedstudio.com/wiki/CyberDesk_Wio-Terminal/CyberDesk_Wio-Terminal_1.gif
slug: /es/CyberDeck_Wio-Terminal
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Tutorial del Monitor de PC con Wio Terminal - Estilo Cyberpunk

- [**Resumen del Proyecto**](#jump1)
- [**Tutorial de Uso de Cursor AI**](#jump2)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/CyberDesk_Wio-Terminal/CyberDesk_Wio-Terminal.gif" style={{width:500, height:'auto'}}/></div>

:::info
Haz clic aquí para ver la [versión en chino](/cn/CyberDeck_Wio-Terminal)
:::

## <span id="jump1"> Resumen del Proyecto </span>

Crea un sistema de monitoreo de PC estilo cyberpunk utilizando el Wio Terminal como terminal de visualización para monitorear en tiempo real varios indicadores de rendimiento del ordenador.

## Requisitos de Hardware

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)  
- Cable USB-C para datos  
- Una computadora con Windows  

## Requisitos de Software

- [VSCode](https://code.visualstudio.com/) + Plugin de PlatformIO  
- [Python 3.x](https://www.python.org/)  
- Open Hardware Monitor (para obtener datos de temperatura)  

## Pasos Detallados

### 1. Configuración del Entorno

- Instalar los paquetes de Python necesarios:
  ```bash
  pip install psutil pyserial GPUtil wmi pywin32
  ```

- Instalar los plugins de VSCode:  
  1. Instala el plugin **PlatformIO IDE**  
  2. Instala y ejecuta **OpenHardwareMonitor**  

### 2. Crear el Proyecto

- Crear un proyecto con PlatformIO:  
  1. Abre VSCode  
  2. Haz clic en el ícono de PlatformIO  
  3. Selecciona "Nuevo Proyecto"  
  4. Configuración:  
     - **Placa:** "Seeed Wio Terminal"  
     - **Framework:** "Arduino"  

### 3. Implementación del Código

#### (a) Configurar `platformio.ini`

```ini
[env:seeed_wio_terminal]
platform = atmelsam
board = seeed_wio_terminal
framework = arduino
lib_deps = 
    Seeed_Arduino_LCD@2.1.0
```

#### (b) Crear el script de monitoreo de PC (`pc_stats.py`)

```python
import psutil
import serial
import time
import GPUtil
import socket
import wmi
from datetime import datetime

def get_cpu_temp():
    try:
        w = wmi.WMI(namespace="root\wmi")
        temperature_info = w.MSAcpi_ThermalZoneTemperature()[0]
        temp = float(temperature_info.CurrentTemperature) / 10.0 - 273.15
        return max(0, min(temp, 100))
    except Exception as e:
        print(f"[WARN] Unable to read CPU temperature: {e}")
        return 0.0

# Configure serial port (modify COM port as needed)
ser = serial.Serial('COM10', 115200)
while True:
    try:
        # Retrieve system data
        cpu_usage = psutil.cpu_percent()
        ram_usage = psutil.virtual_memory().percent
        cpu_temp = get_cpu_temp()
        disk_usage = psutil.disk_usage('/').percent
        
        # Retrieve GPU information
        try:
            gpus = GPUtil.getGPUs()
            gpu_usage = gpus[0].load * 100
            gpu_temp = gpus[0].temperature
        except:
            gpu_usage = gpu_temp = 0
            
        # Send data to Wio Terminal
        data = f"{cpu_usage},{ram_usage},{cpu_temp},{gpu_usage},{gpu_temp},{disk_usage},{socket.gethostbyname(socket.gethostname())}\n"
        ser.write(data.encode())
        time.sleep(0.5)
        
    except KeyboardInterrupt:
        ser.close()
        break
```

#### (c) Crear el código para Wio Terminal (`main.cpp`)

```cpp
#include <Arduino.h>
#include "TFT_eSPI.h"

TFT_eSPI tft;
int currentPage = 0;

// Define buttons
const int BTN_1 = WIO_KEY_A;
const int BTN_2 = WIO_KEY_B;
const int BTN_3 = WIO_KEY_C;

// PC State Structure
struct PCStats {
    int cpuUsage = 0;
    int ramUsage = 0;
    float cpuTemp = 0.0;
    int diskUsage = 0;
    int gpuUsage = 0;
    float gpuTemp = 0.0;
    char ipAddress[16] = "0.0.0.0";
    unsigned long lastUpdate = 0;
} pcStats;

// Drawing Functions
void drawBox(int x, int y, int w, int h) {
    tft.drawRect(x, y, w, h, TFT_GREEN);
}

void drawTitle(const char* title) {
    tft.drawString("<<", 10, 10);
    tft.drawString(title, 40, 10);
    tft.drawString(">>", 270, 10);
    drawBox(5, 5, 310, 230);
    tft.drawLine(10, 30, 300, 30, TFT_GREEN);
}

// [Other drawing functions...]

void setup() {
    Serial.begin(115200);
    tft.begin();
    tft.setRotation(3);
    tft.setTextSize(2);
    
    pinMode(BTN_1, INPUT_PULLUP);
    pinMode(BTN_2, INPUT_PULLUP);
    pinMode(BTN_3, INPUT_PULLUP);
    
    drawPage(currentPage);
}

void loop() {
    // Receive and parse data
    if (Serial.available()) {
        String data = Serial.readStringUntil('\n');
        // Parse data...
    }
    
    // Button handling
    if (digitalRead(BTN_1) == LOW) {
        currentPage = 0;
        drawPage(currentPage);
        delay(200);
    }
    // [Other button handling...]

    // Update display
    if (currentPage == 0) {
        drawSystemStatus();
        delay(100);
    }
}
```

### 4. Ejecutar el Proyecto

1. Carga el código en el Wio Terminal  
2. Ejecuta **OpenHardwareMonitor**  
3. Ejecuta el script de Python:
   ```bash
   python pc_stats.py
   ```
4. Usa los botones del Wio Terminal para cambiar entre páginas:  
   - **Botón A:** Estado del Sistema  
   - **Botón B:** Monitoreo de Rendimiento  
   - **Botón C:** Información de Red  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/CyberDesk_Wio-Terminal/cyberdesk_wio-terminal.jpg" style={{width:300, height:'auto'}}/></div>

## Sugerencias de Personalización

1. **Ajustar el estilo visual:** Modifica colores (por ejemplo, `TFT_GREEN`), diseño y tamaño de fuente.  
2. **Agregar animaciones:** Efectos visuales animados para una estética más cyberpunk.  
3. **Agregar nuevas funciones:**  
   - Monitoreo de velocidad de red  
   - Velocidad de lectura/escritura del disco  
   - Información de procesos del sistema  

## Resolución de Problemas

1. **Problemas de conexión serial:**  
   - Verifica si el puerto COM es correcto  
   - Confirma la configuración de velocidad (115200 baudios)  

2. **Problemas al leer temperatura:**  
   - Asegúrate de que **OpenHardwareMonitor** esté en ejecución  
   - Verifica si tienes permisos de administrador  

3. **Problemas de visualización:**  
   - Asegúrate de que las coordenadas de la pantalla no excedan los límites  
   - Usa la función `clearArea` para evitar residuos visuales ("ghosting")  

## Optimización Avanzada

- Agregar funcionalidad de registro de datos  
- Implementar umbrales de advertencia  
- Personalizar temas de pantalla  
- Agregar visualización con gráficos  
- Habilitar conectividad Wi-Fi  

Este proyecto es ideal para principiantes y ofrece mucho margen de expansión. Comienza con la funcionalidad básica y añade características a medida que avanzas.

## <span id="jump2"> Tutorial de Desarrollo con Cursor AI - Basado en el Monitor de PC para Wio Terminal </span>

## 1. Fundamentos de Cursor AI

### 1.1 Inicialización del Proyecto

1. Abre el editor de Cursor  
2. Indica a la IA lo que deseas crear:  
   > "Quiero crear un proyecto para Wio Terminal que muestre información del sistema de la PC con estilo cyberpunk."  
3. La IA te ayudará a:  
   - Sugerir la estructura del proyecto  
   - Crear los archivos necesarios  
   - Proporcionar código inicial  

### 1.2 Modo de Colaboración

- **Describe con claridad y precisión:** Concéntrate en una función a la vez.  
- **Proporciona retroalimentación rápida:** Indica a la IA cuándo hay errores o problemas.  

## 2. Caso Práctico

### 2.1 Crear Funcionalidad Básica de Pantalla

**Buen prompt:**  
> "Ayúdame a crear un programa para Wio Terminal que muestre uso de CPU, uso de memoria y temperatura."

- La IA proporcionará:  
  - Archivos de cabecera necesarios  
  - Estructura básica del código  
  - Implementación de funciones de visualización  

### 2.2 Resolver Problemas Específicos

**Ejemplo:** Corregir problemas al leer la temperatura  
**Buen prompt:**  
> "La lectura de temperatura del CPU muestra 0. ¿Cómo lo corrijo?"  

- Respuesta de la IA:  
  1. Analiza causas posibles  
  2. Ofrece múltiples soluciones  
  3. Muestra ejemplos de implementación  

### 2.3 Optimizar los Efectos de Visualización

**Buen prompt:**  
> "¿Cómo puedo optimizar la visualización para que se vea más estilo cyberpunk?"  

- La IA:  
  - Proporcionará sugerencias de diseño  
  - Implementará cambios específicos en el código  

## 3. Técnicas de Depuración

### 3.1 Manejar Errores de Código

- Si encuentras errores al compilar, copia el mensaje de error para la IA:  
  > "Encontré este error al compilar: [mensaje de error]"

- La IA:  
  - Analizará la causa  
  - Proporcionará soluciones  
  - Explicará cómo corregirlo  

### 3.2 Manejar Problemas de Lógica

**Buena descripción:**  
> "Los números en pantalla se ven duplicados o con residuos. ¿Cómo lo corrijo?"

- Proceso de la IA:  
  1. Identificar la causa raíz  
  2. Sugerir el uso de funciones para limpiar la zona  
  3. Proporcionar una solución completa  

## 4. Buenas Prácticas

### 4.1 Formular las Preguntas Correctamente

1. **Sé específico:**  
   - "Quiero implementar [función específica]."  
2. **Da contexto:**  
   - "Ya implementé [A], ahora quiero agregar [B]."  
3. **Describe los problemas con claridad:**  
   - "Tengo el problema [X] y el mensaje de error es [contenido]."  

### 4.2 Optimización de Código

1. **Solicitar revisión de código:**  
   - "¿Puedes revisar este código y sugerir mejoras?"  
2. **Optimización de rendimiento:**  
   - "Este código es lento. ¿Cómo lo optimizo?"  
3. **Mejorar estilo de código:**  
   - "¿Cómo hago este código más legible y mantenible?"  

### 4.3 Expansión de Funcionalidades

1. **Desarrollo progresivo:**  
   - "Quiero agregar [nueva función]. ¿Por dónde empiezo?"  
2. **Solicitar modularización:**  
   - "¿Cómo modularizo esta función para futuras ampliaciones?"  

## 5. Errores Comunes

### 5.1 Qué Evitar

- **Problemas poco claros:**  
  - ❌ "El código no funciona. ¿Qué hago?"  
- **Falta de información:**  
  - ❌ "Hay un error. Ayúdame a corregirlo."  
- **Alcance muy amplio:**  
  - ❌ "Ayúdame a completar todo el proyecto."  

### 5.2 Prácticas Recomendadas

- **Descripción clara del problema:**  
  - ✅ "El valor de uso de CPU siempre marca 0. ¿Cómo lo corrijo?"  
- **Proporcionar toda la información:**  
  - ✅ "Tengo este error: [información completa]. Estoy usando la librería versión: ..."  
- **División razonable de tareas:**  
  - ✅ "Primero implementemos la visualización básica, luego agregamos funciones adicionales."  

## 6. Conclusión

- **Desarrollo progresivo:** Comienza con la funcionalidad básica y añade más características.  
- **Solución oportuna de problemas:** Atiende los errores en cuanto aparezcan.  
- **Comunicación efectiva:** Describe claramente lo que necesitas y proporciona contexto.  
- **Optimización continua:** Revisa y mejora tu código regularmente.  

Desarrollar este proyecto demuestra cómo **Cursor AI** mejora la eficiencia de desarrollo. La clave es aprender a colaborar eficazmente con la IA. Hacer preguntas claras y definir bien los requerimientos te permitirá obtener mejores resultados.
