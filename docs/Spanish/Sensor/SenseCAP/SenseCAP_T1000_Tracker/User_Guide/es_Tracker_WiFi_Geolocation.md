---
description: Using WiFi technology to enable geolocate tracker
title: Como obtener una ubicación via Wi-Fi
keywords:
- SenseCAP_T1000_tracker
# image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /es/Tracker_WiFi_Geolocation
last_update:
  date: 07/24/2025
  author: Guillermo
---

# Uso de tecnología Wi-Fi para habilitar geolocalización en tu tracker

# 1. Obtención de información Wi-Fi desde The Things Network
- **Paso 1.** Establecemos la conexión entre el tracker y The Things Network (TTN) siguiendo el tutorial paso a paso provisto en el [Wiki de Seeed Studio](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN/).

- **Paso 2.** Extraemos la dirección MAC necesaria, RSSI (Indicador de Intensidad de Señal Recibida) y la marca de tiempo del payload analizado, ya que estos datos serán utilizados para la geolocalización Wi-Fi en pasos posteriores.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tacker1.jpg"/></div>


# 2. Realizar solicitudes de ubicación mediante la API de un proveedor de servicios de geolocalización

Proveedores recomendados de servicios de geolocalización：

**1. Google Geolocation**

**2. Baidu Map**

## 2.1 Google Geolocation
Para utilizar Google Geolocation y obtener ubicación mediante Wi-Fi, necesitamos obtener acceso a la [Google Geolocation API](https://developers.google.com/maps/documentation/geolocation/overview?hl=en). También existen varios métodos para utilizar dicha API, algunos están descritos arriba.

Una vez obtenida la API, podemos enviar solicitudes a Google para analizar nuestra información Wi-Fi. Aquí usamos código Python para convertir la información Wi-Fi en datos de coordenadas.

**Paso 1.** Instala 'googlemaps' usando el comando pip:

```python
pip install -U googlemaps
```
**Paso 2.** Usando Python para enviar solicitudes de análisis, debes llenar la variable `api_key` con la clave API que obtuviste.

```python
import googlemaps
from googlemaps import exceptions

param = {
  "considerIp": "false",
  "wifiAccessPoints": [
    {
      "macAddress": "9A:BB:99:12:1B:61",
      "signalStrength": -50,
      "signalToNoiseRatio": 0
    },
    {
      "macAddress": "14:DE:39:A6:20:C9",
      "signalStrength": -46,
      "signalToNoiseRatio": 0
    },
    {
      "macAddress": "C8:D7:19:92:69:6E",
      "signalStrength": -85,
      "signalToNoiseRatio": 0
    }
  ]
}


_GEOLOCATION_BASE_URL = "https://www.googleapis.com"


def _geolocation_extract(response):
    """
    Simula la lógica de manejo de excepciones en ``client._get_body``, pero
    para geolocalización que usa un formato de respuesta diferente.
    """
    body = response.json()
    if response.status_code in (200, 404):
        return body

    try:
        error = body["error"]["errors"][0]["reason"]
    except KeyError:
        error = None

    if response.status_code == 403:
        raise exceptions._OverQueryLimit(response.status_code, error)
    else:
        raise exceptions.ApiError(response.status_code, error)


def geolocate(client, home_mobile_country_code=None,
              home_mobile_network_code=None, radio_type=None, carrier=None,
              consider_ip=None, cell_towers=None, wifi_access_points=None):
    """
    La API de Geolocalización de Google Maps devuelve una ubicación y un radio
    de precisión basado en información sobre torres celulares y nodos Wi-Fi.

    Consulta https://developers.google.com/maps/documentation/geolocation/intro
    para más información, incluyendo detalles para cada parámetro abajo.

    :param home_mobile_country_code: Código móvil del país (MCC)
        de la red de origen del dispositivo.
    :type home_mobile_country_code: string

    :param home_mobile_network_code: Código móvil de la red (MNC)
        de la red de origen del dispositivo.
    :type home_mobile_network_code: string

    :param radio_type: Tipo de radio móvil. Valores soportados:
        lte, gsm, cdma y wcdma. Opcional, pero recomendado para mayor precisión.
    :type radio_type: string

    :param carrier: Nombre del operador.
    :type carrier: string

    :param consider_ip: Si se debe usar geolocalización por IP
        cuando no hay señal Wi-Fi o torres celulares.
    :type consider_ip: bool

    :param cell_towers: Lista de torres celulares (diccionarios).
        Ver https://developers.google.com/maps/documentation/geolocation/intro#cell_tower_object
    :type cell_towers: list de dicts

    :param wifi_access_points: Lista de puntos de acceso Wi-Fi (diccionarios).
        Ver https://developers.google.com/maps/documentation/geolocation/intro#wifi_access_point_object
    :type wifi_access_points: list de dicts
    """

    params = {}
    if home_mobile_country_code is not None:
        params["homeMobileCountryCode"] = home_mobile_country_code
    if home_mobile_network_code is not None:
        params["homeMobileNetworkCode"] = home_mobile_network_code
    if radio_type is not None:
        params["radioType"] = radio_type
    if carrier is not None:
        params["carrier"] = carrier
    if consider_ip is not None:
        params["considerIp"] = consider_ip
    if cell_towers is not None:
        params["cellTowers"] = cell_towers
    if wifi_access_points is not None:
        params["wifiAccessPoints"] = wifi_access_points

    return client._request("/geolocation/v1/geolocate", {},  # Sin parámetros GET
                           base_url=_GEOLOCATION_BASE_URL,
                           extract_body=_geolocation_extract,
                           post_json=params)




if __name__ == '__main__':
    # Reemplaza con tu clave API
    api_key = 'YOUR_API_KEY'

    # Crea un cliente de Google Maps
    gmaps = googlemaps.Client(key=api_key)

    # Llama a la función geolocate
    result = geolocate(
        gmaps,
        wifi_access_points=param["wifiAccessPoints"],
        consider_ip=param["considerIp"]
    )

    # Imprime el resultado
    print(result)
```

**Paso 3.** ¡Después de completar los pasos anteriores, podrás obtener la información de ubicación del Tracker!  
Ejemplo de resultado:  

```
{'location': {'lat': 22.5769055, 'lng': 113.9222236}, 'accuracy': 20}
```

Si no tienes un entorno de ejecución, puedes usar fácilmente el [notebook de Colab](https://colab.research.google.com/drive/10iTGJ_W87b8e45d6DmohuRzMYevkWCmI?usp=sharing) que creamos.

## 2.2 Baidu Map
En este tutorial, hemos elegido usar el servicio de posicionamiento inteligente proporcionado por la plataforma abierta de **Baidu Map** para realizar el análisis de ubicación sobre la información Wi-Fi que obtuvimos. Los métodos de acceso pueden variar según el proveedor de servicios de ubicación, y aquí usamos autenticación mediante lista blanca de IP. El proceso específico de acceso implica definir el paquete de datos que necesitamos analizar y luego hacer una solicitud POST a la dirección del servicio API. A continuación está el paquete de datos JSON que hemos definido.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker2.jpg"/></div>

Luego navegamos al directorio donde se encuentra el archivo JSON, abrimos la terminal e ingresamos el comando para la solicitud：

  ```post
  curl -X POST -H "Content-Type: application/json" -d @request.json https://api.map.baidu.com/locapi/v2
  ```

Después podemos recibir los datos analizados que son devueltos：
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker3.jpg"/></div>

3. Mostrar la ubicación en un mapa

El paso final es ingresar las coordenadas analizadas en el mapa para mostrar la ubicación. Aquí usamos el enlace de Google Maps: https://www.google.com/maps/

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker4.png"/></div>

Puedes ingresar las coordenadas analizadas en la barra de búsqueda del mapa para ver la ubicación específica en el mapa.