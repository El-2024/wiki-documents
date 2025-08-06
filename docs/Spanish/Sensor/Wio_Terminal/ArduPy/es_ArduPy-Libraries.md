---
description: How to Write an ArduPy Library
title: How to Write an ArduPy Library
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/ArduPy-Libraries
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Cómo escribir una biblioteca ArduPy

![](https://files.seeedstudio.com/ardupy/ardupy_logo.png)

En esta guía, aprenderás a escribir una biblioteca para ArduPy desde cero, con un ejemplo que ilustra todo el flujo de trabajo. Al final, entenderás cómo desarrollar tu propia biblioteca ArduPy e implementarla en tus proyectos. Incluso puedes convertir tu biblioteca favorita de Arduino al formato de MicroPython para usarla con ArduPy.

Se requiere algo de conocimiento en programación, pero los pasos clave son sencillos de seguir.

## Hardware necesario

* [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## Empezando

Te guiaremos paso a paso con un ejemplo para facilitar la comprensión.

### 1. Bibliotecas Arduino

Lo primero es encontrar la biblioteca ya escrita en formato **Arduino**. La mayoría de los módulos de Seeed la tienen y están disponibles en nuestro [GitHub](https://github.com/Seeed-Studio). Solo busca el módulo en GitHub y accede al repositorio.

En esta guía usaremos como ejemplo el sensor [**Grove - Temp\&Humi\&Barometer (BME280)**](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html) y su [**biblioteca Arduino**](https://github.com/Seeed-Studio/Grove_BME280).

### 2. Estructura de una biblioteca ArduPy

Esta es la estructura típica de una biblioteca ArduPy:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-ArduPy-Library/structure.png" /></div>

Ejemplo: [ArduPy para Grove-BME280](https://github.com/Seeed-Studio/seeed-ardupy-bme280)

* `.gitignore`: lista de archivos que Git debe ignorar
* `.travis.yml`: configuración de CI (puede ignorarse)
* `LICENSE`: licencia del proyecto
* `README.md`: documentación
* `library.json`: archivo principal de configuración de la biblioteca ArduPy
* `mod_ardupy_bme280.c`: código principal que conecta C con MicroPython
* `wrapper_ardupy_bme280.cpp`: contenedor (wrapper) de funciones

### 3. Escribiendo el `library.json`

Comienza con el archivo [`library.json`](https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/library.json):

```json
{
    "name": "Seeed ArduPy BME280 ",
    "version": "1.0.0",
    "repository": {
        "type": "git",
        "url": "https://github.com/Seeed-Studio/seeed-ardupy-bme280.git"
    },
    "dependencies": [{
        "name": "Seeed_Arduino_BME280",
        "url": "https://github.com/Seeed-Studio/Grove_BME280.git"
    }]
}
```

* `name`: nombre de la biblioteca ArduPy.
* `url` dentro de `repository`: enlace a tu repositorio en GitHub.
* `dependencies`: define la biblioteca Arduino de la cual depende.

Usa el formato `Seeed_Arduino_MODULO` para nombrar dependencias si es posible.

### 4. Escribiendo `wrapper_ardupy_MODULO.cpp`

Este archivo es el contenedor entre el código C++ (Arduino) y MicroPython.

Primero, incluye la biblioteca dependiente:

```cpp
#include "Seeed_Arduino_BME280/Seeed_BME280.h"
```

Luego, incluye los encabezados compartidos:

```cpp
extern "C"{
#include "py/mphal.h"
#include "py/nlr.h"
#include "py/objtype.h"
#include "py/runtime.h"
#include "shared-bindings/util.h"
}
```

Inicializa el módulo:

```cpp
#define bme280 (*(BME280*)self->module)
void * operator new(size_t, void *);
```

Ahora define las funciones comunes:

```cpp
extern "C" {
    void common_hal_bme280_construct(abstract_module_t *self){
        self->module = new (m_new_obj(BME280)) BME280();
        bme280.init();
    }

    void common_hal_bme280_deinit(abstract_module_t *self){
        bme280.~BME280();
    }

    float common_hal_bme280_get_temperature(abstract_module_t *self){
        return bme280.getTemperature();
    }

    uint32_t common_hal_bme280_get_pressure(abstract_module_t *self){
        return bme280.getPressure();
    }

    uint32_t common_hal_bme280_get_humidity(abstract_module_t *self){
        return bme280.getHumidity();
    }
}
```

* `construct`: crea una nueva instancia e inicializa el módulo (`init()`).
* Las funciones acceden directamente a los métodos Arduino (`getTemperature()`, etc).

Puedes seguir el patrón con cualquier otra función de la biblioteca Arduino.

#### Funciones con parámetros

Si una función de Arduino requiere parámetros, tradúcela con los tipos correspondientes.

Ejemplo:

Original en Arduino:

```cpp
void setHighSolution(bool enable);
```

Convertido en ArduPy:

```cpp
void common_hal_lis3dhtr_setHighSolution(abstract_module_t *self, bool enable) {
    lis.setHighSolution(enable);
}
```

También puedes ver [este ejemplo](https://github.com/Seeed-Studio/seeed-ardupy-my9221/blob/master/wrapper_my9221.cpp#L58) que toma dos parámetros.

### 5. Escribiendo el archivo `mod_ardupy_MODULO.c`

Una vez terminado el *wrapper*, pasamos al archivo central. Usaremos como ejemplo [`mod_ardupy_bme280.c`](https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/mod_ardupy_bme280.c).

Primero, incluye los encabezados compartidos:

```cpp
#include "py/mphal.h"
#include "py/nlr.h"
#include "py/objtype.h"
#include "py/runtime.h"
#include "py/obj.h"
#include "shared-bindings/util.h"
```

Declara las funciones previamente definidas en el [wrapper](https://github.com/Seeed-Studio/seeed-ardupy-bme280/blob/master/wrapper_ardupy_bme280.cpp):

```cpp
void common_hal_bme280_construct(abstract_module_t *self);
void common_hal_bme280_deinit(abstract_module_t *self);
float common_hal_bme280_get_temperature(abstract_module_t *self);
uint32_t common_hal_bme280_get_pressure(abstract_module_t *self);
uint32_t common_hal_bme280_get_humidity(abstract_module_t *self);
extern const mp_obj_type_t grove_bme280_type;
```

Inicializa el módulo:

```cpp
m_generic_make(bme280) {
    abstract_module_t * self = new_abstruct_module(type);
    mp_arg_check_num(n_args, n_kw, 0, 0, false);
    common_hal_bme280_construct(self);
    return self;
}
```

Reemplaza los nombres por los de tu módulo.

Define los atributos del objeto:

```cpp
void bme280_obj_attr(mp_obj_t self_in, qstr attr, mp_obj_t *dest){
    abstract_module_t *self = (abstract_module_t *)self_in;
    uint32_t value;
    float number;

    if (dest[0] == MP_OBJ_NULL) {
        if (attr == MP_QSTR_temperature) {
            number = common_hal_bme280_get_temperature(self);
            dest[0] = mp_obj_new_float(number);
            return;
        }
        else if (attr == MP_QSTR_pressure) {
            value = common_hal_bme280_get_pressure(self);
            dest[0] = mp_obj_new_int(value);
            return;
        }
        else if (attr == MP_QSTR_humidity) {
            value = common_hal_bme280_get_humidity(self);
            dest[0] = mp_obj_new_int(value);
            return;
        }
    }

    generic_method_lookup(self_in, attr, dest);
}
```

Esto expone los métodos como `.temperature`, `.humidity`, etc., accesibles desde MicroPython.

Define la tabla de métodos:

```cpp
const mp_rom_map_elem_t bme280_locals_dict_table[] = {
    { MP_ROM_QSTR(MP_QSTR_deinit),    MP_ROM_PTR(&bme280_deinit_obj) },
    { MP_ROM_QSTR(MP_QSTR___enter__), MP_ROM_PTR(&default___enter___obj) },
    { MP_ROM_QSTR(MP_QSTR___exit__),  MP_ROM_PTR(&bme280_obj___exit___obj) },
};

MP_DEFINE_CONST_DICT(bme280_locals_dict, bme280_locals_dict_table);
```

Define el tipo del módulo:

```cpp
const mp_obj_type_t grove_bme280_type = {
    {&mp_type_type},
    .name = MP_QSTR_grove_bme280,
    .make_new = bme280_make_new,
    .locals_dict = (mp_obj_t)&bme280_locals_dict,
    .attr = bme280_obj_attr,
};
```

Es cuestión de reemplazar el nombre del módulo según tu implementación.

#### Funciones que aceptan parámetros

Si tu módulo tiene funciones que reciben parámetros, así puedes implementarlas:

**Ejemplo con 1 parámetro:**

```cpp
mp_obj_t lis3dhtr_setHighSolution(size_t n_args, const mp_obj_t *pos_args, mp_map_t *kw_args)
{
    abstract_module_t *self = (abstract_module_t *)pos_args[0];
    bool enable = mp_obj_is_true(pos_args[1]);
    common_hal_lis3dhtr_setHighSolution(self, enable);
    return mp_const_none;
}
MP_DEFINE_CONST_FUN_OBJ_KW(lis3dhtr_setHighSolution_obj, 1, lis3dhtr_setHighSolution);
```

**Ejemplo con 2 parámetros:**

```cpp
mp_obj_t led_bar_set_brightness(size_t n_args, const mp_obj_t *pos_args, mp_map_t *kw_args){
    abstract_module_t * self = (abstract_module_t *)(pos_args[0]);
    uint32_t led_no = mp_obj_get_int(pos_args[1]);
    float value = mp_obj_get_float(pos_args[2]);
    common_hal_led_bar_set_brightness(self, led_no, value);
    return mp_const_none;
}

MP_DEFINE_CONST_FUN_OBJ_KW(led_bar_set_brightness_obj, 2, led_bar_set_brightness);
```

Recuerda añadir las funciones en la tabla de métodos (`locals_dict`):

```cpp
const mp_rom_map_elem_t lis3dhtr_locals_dict_table[] = {
    { MP_ROM_QSTR(MP_QSTR_deinit), MP_ROM_PTR(&lis3dhtr_deinit_obj)},
    { MP_ROM_QSTR(MP_QSTR_setHighSolution), MP_ROM_PTR(&lis3dhtr_setHighSolution_obj)},
    { MP_ROM_QSTR(MP_QSTR_setBrightness), MP_ROM_PTR(&led_bar_set_brightness_obj)},
    // Agrega aquí más funciones si es necesario
};
```

### 6. Compilando el firmware

Una vez escrita la biblioteca ArduPy, es momento de compilarla. Puedes subir tu proyecto a GitHub, por ejemplo:
[`https://github.com/Seeed-Studio/seeed-ardupy-bme280`](https://github.com/Seeed-Studio/seeed-ardupy-bme280)

* Descarga e instala **`ardupy-aip`**, la herramienta para compilar bibliotecas ArduPy. Sigue [esta guía](https://wiki.seeedstudio.com/ArduPy/#install-aip-with-macos).

Una vez instalada, ejecuta:

```sh
aip install [URL de tu biblioteca]
# Ejemplo:
aip install https://github.com/Seeed-Studio/seeed-ardupy-bme280
```

Luego compila el firmware:

```sh
aip build
```

Si todo va bien, deberías ver una salida como esta:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-ArduPy-Library/build.png" /></div>

## Prueba de la biblioteca

Con el firmware compilado, puedes flashearlo a tu dispositivo:

```sh
aip flash
```

Para acceder al modo REPL:

```sh
aip shell -c "repl"
```

Importa tu módulo:

```py
from arduino import grove_bme280
```

Inicializa y usa tu biblioteca:

```py
bme280 = grove_bme280()
print ("Temperatura: ", bme280.temperature, "C")
print ("Humedad: ", bme280.humidity, "%")
print ("Presión: ", bme280.pressure, "Pa")
```

Si llegaste hasta aquí: ¡has creado con éxito una biblioteca ArduPy!

## Recursos

Existen muchas bibliotecas ArduPy disponibles para usar como ejemplo o base:

* [Lista de bibliotecas ArduPy en GitHub](https://github.com/Seeed-Studio?q=ardupy&type=&language=)

## Soporte técnico y discusión

¡Gracias por usar nuestros productos! Ofrecemos varios canales de comunicación para ayudarte a tener la mejor experiencia posible. Visita nuestro [foro](https://forum.seeedstudio.com/), abre un *issue* en [GitHub](https://github.com/Seeed-Studio) o contacta a nuestro [equipo de soporte](https://www.seeedstudio.com/contact-us.html).

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>