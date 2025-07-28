---
title: Seeed Studio XIAO nRF54L15 Sense BLE Usage
description: |
  Complete guide for using Bluetooth Low Energy (BLE) with XIAO nRF54L15 Sense, including advertising, connections, GATT services, and power optimization.
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg
slug: /xiao_nrf54l15_sense_bluetooth_usage
keywords:
  - XIAO
  - nRF54L15
  - BLE
  - Bluetooth
  - Zephyr
last_update:
  date: 7/2/2025
  author: Jason
sidebar_position: 3
---

<!-- ## Bluetooth Low Energy (BLE) Usage

Bluetooth Low Energy, BLE for short, is a power-conserving variant of Bluetooth. BLE’s primary application is short distance transmission of small amounts of data (low bandwidth). Unlike Bluetooth that is always on, BLE remains in sleep mode constantly except for when a connection is initiated.

Due to its properties, BLE is suitable for applications that need to exchange small amounts of data periodically running on a coin cell. For example, BLE is of great use in healthcare, fitness, tracking, beacons, security, and home automation industries.

This makes it consume very low power. BLE consumes approximately 100x less power than Bluetooth (depending on the use case).

About the BLE part of XIAO nRF54L15, we will introduce its use in the following three sections.

- [Some fundamental concepts](#some-fundamental-concepts) -- We will first get to know some concepts that may be used frequently in BLE in order to help us understand the execution process and thinking of BLE programs.
- [BLE Scanner](#ble-scanner) -- This section will explain how to search for nearby Bluetooth devices and print them out in the serial monitor.
- [BLE server/client](#ble-serverclient) -- This section will explain how to use XIAO nRF54L15 as Server and Client to send and receive specified data messages. It will also use to receive or send messages from the phone to XIAO.
- [BLE Sensor Data Exchange](#ble-sensor-data-exchange) -- This is the last section of the full tutorial where we will go through a sensor example to explain how to send the sensor data through BLE.

### Some fundamental concepts

#### Server and Client

With Bluetooth Low Energy, there are two types of devices: the server and the client. The XIAO nRF54L15 can act either as a client or as a server.

The server advertises its existence, so it can be found by other devices, and contains the data that the client can read. The client scans the nearby devices, and when it finds the server it is looking for, it establishes a connection and listens for incoming data. This is called point-to-point communication.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/49.png" style={{width:800, height:'auto'}}/></div>

#### Attribute

Attribute is actually a piece of data. Each Bluetooth device is used to provide a service, and the service is a collection of data, the collection can be called a database, each entry in the database is an Attribute, so here I translate Attribute into data entries. You can imagine a Bluetooth device as a table, each row inside the table is an Attribute.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/52.png" style={{width:600, height:'auto'}}/></div>

#### GATT

When two Bluetooth devices establish a connection, they need a protocol to determine how to communicate. GATT (Generic Attribute Profile) is such a protocol that defines how data is transmitted between Bluetooth devices.

In the GATT protocol, the functions and properties of a device are organized into structures called services, characteristics, and descriptors. A service represents a set of related functions and features provided by a device. Each service can include multiple characteristics, which define a certain property or behavior of the service, such as sensor data or control commands. Each characteristic has a unique identifier and a value, which can be read or written to communicate. Descriptors are used to describe metadata of characteristics, such as format and access permission of characteristic values.

By using the GATT protocol, Bluetooth devices can communicate in different application scenarios, such as transmitting sensor data or controlling remote devices.

#### BLE Characteristic

ATT, full name attribute protocol. In the end, ATT is composed of a group of ATT commands, that is, request and response commands, ATT is also the uppermost layer of the Bluetooth null packet, that is, ATT is where we analyze the Bluetooth packet the most.

ATT command, formally known as ATT PDU (Protocol Data Unit). It includes 4 categories: read, write, notify and indicate. These commands can be divided into two types: if it requires a response, then it will be followed by a request; on the contrary, if it only requires an ACK but not a response, then it will not be followed by a request. 

Service and Characteristic are defined in the GATT layer. The Service side provides the Service, the Service is the data, and the data is the attribute, and the Service and Characteristic are the logical presentation of the data, or the data that the user can see are eventually transformed into the Service and Characteristic.

Let's take a look at what the service and characteristic look like from a mobile perspective. nRF Connect is an application that shows us very visually how each packet should look like.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/62.png" style={{width:400, height:'auto'}}/></div>

As you can see, in the Bluetooth specification, each specific Bluetooth application is composed of multiple Services, and each Service is composed of multiple Characteristics. A Characteristic consists of a UUID, Properties, and a Value.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/50.png" style={{width:300, height:'auto'}}/></div>

Properties are used to describe the types and permissions of operations on a characteristic, such as whether it supports read, write, notify, and so on. This is similar to the four categories included in an ATT PDU.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/51.png" style={{width:800, height:'auto'}}/></div>

#### UUID

Each service, characteristic and descriptor have an UUID (Universally Unique Identifier). An UUID is a unique 128-bit (16 bytes) number. For example:

```
ea094cbd-3695-4205-b32d-70c1dea93c35
```

There are shortened UUIDs for all types, services, and profiles specified in the [SIG (Bluetooth Special Interest Group)](https://www.bluetooth.com/specifications/gatt/services). But if your application needs its own UUID, you can generate it using this [UUID generator website](https://www.uuidgenerator.net/).




## Basic BLE Advertising Example

<!-- <div class="table-center">
	<table align="center">
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1.jpg" style={{width:400, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2.jpg" style={{width:400, height:'auto'}}/></div></td>
		</tr>
	</table>
</div> -->

While the phone is not connected to the XIAO nRF54L15, the on-board indicator will remain permanently lit. Once the phone is successfully connected, the indicator will begin flashing to indicate that a connection has been established.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/BLE.gif" alt="XIAO nRF54L15 Ultra-low Power Consumption in System Off Mode" style={{width:600, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Cell Phone Connection XIAO nRF54L15</em></p>
</div>

### BLE Advertising Code
<div className="download_platformio_container" style={{ textAlign: 'center' }}>
    <a
        className="download_platformio_item"
        href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-lowpower"
        style={{
            backgroundColor: '#FFA500',
            color: '#FFFFFF',
            padding: '10px 20px',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            fontSize: '16px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="50"
            height="50"
            fill="currentColor"
            style={{ verticalAlign: 'middle', marginRight: '8px' }} 
        >
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414L12 15z"/>
            <path d="M19 19H5v-4h2v2h10v-2h2v4zm0-14v10h-2V7h-4v2h-2V7H7v10H5V5h14zm-2 2H7v2h10V7z"/>
        </svg>
        <span>Download Source Code</span>
    </a>
</div>

<br></br>

```c
#include <zephyr/kernel.h>
#include <zephyr/logging/log.h>
#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/gap.h>
#include <zephyr/bluetooth/conn.h>
#include <zephyr/sys/printk.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/dt-bindings/gpio/nordic-nrf-gpio.h>

LOG_MODULE_REGISTER(BLE_LowPower, LOG_LEVEL_INF);

#define DEVICE_NAME CONFIG_BT_DEVICE_NAME
#define DEVICE_NAME_LEN (sizeof(DEVICE_NAME) - 1)

static const struct gpio_dt_spec led0 = GPIO_DT_SPEC_GET(DT_ALIAS(led0), gpios);

static const struct bt_data ad[] = {
    BT_DATA_BYTES(BT_DATA_FLAGS, BT_LE_AD_GENERAL | BT_LE_AD_NO_BREDR),
    BT_DATA(BT_DATA_NAME_COMPLETE, DEVICE_NAME, DEVICE_NAME_LEN),
};

static unsigned char url_data[] = {
    0x17,
    '/', '/', 'a', 'c', 'a', 'd', 'e', 'm', 'y', '.',
    'n', 'o', 'r', 'd', 'i', 'c', 's', 'e', 'm', 'i', '.',
    'c', 'o', 'm'
};

static const struct bt_data sd[] = {
    BT_DATA(BT_DATA_URI, url_data, sizeof(url_data)),
};

static bool device_connected = false;

static void connected(struct bt_conn *conn, uint8_t err)
{
    if (err) {
        LOG_ERR("Connection failed (err 0x%02x)\n", err);
    } else {
        LOG_INF("Device connected\n");
        device_connected = true;
    }
}

static void disconnected(struct bt_conn *conn, uint8_t reason)
{
    LOG_INF("Device disconnected (reason 0x%02x)\n", reason);
    device_connected = false;

    int err = bt_le_adv_start(BT_LE_ADV_CONN, ad, ARRAY_SIZE(ad), sd, ARRAY_SIZE(sd));
    if (err) {
        LOG_ERR("Failed to restart advertising (err %d)\n", err);
    } else {
        LOG_INF("Advertising successfully restarted (connectable)\n");
    }
}

BT_CONN_CB_DEFINE(conn_callbacks) = {
    .connected = connected,
    .disconnected = disconnected,
};

int main(void)
{
    int err;

    if (!gpio_is_ready_dt(&led0)) {
        LOG_ERR("Error: LED device %s is not ready\n", led0.port->name);
        return -1;
    }

    err = gpio_pin_configure_dt(&led0, GPIO_OUTPUT_INACTIVE);
    if (err) {
        LOG_ERR("Error: Failed to configure LED pin %d (err %d)\n", led0.pin, err);
        return -1;
    }

    LOG_INF("LED configured, initially off.");

    err = bt_enable(NULL);
    if (err) {
        LOG_ERR("Bluetooth initialization failed (err %d)\n", err);
        return -1;
    }
    LOG_INF("Bluetooth initialized\n");

    err = bt_le_adv_start(BT_LE_ADV_CONN, ad, ARRAY_SIZE(ad), sd, ARRAY_SIZE(sd));
    if (err) {
        LOG_ERR("Advertising failed to start (err %d)\n", err);
        return -1;
    }
    LOG_INF("Advertising successfully started (connectable)\n");

    while (1) {
        if (device_connected) {
            gpio_pin_toggle_dt(&led0);
            k_sleep(K_MSEC(500));
        } else {
            gpio_pin_set_dt(&led0, 0);
            k_sleep(K_MSEC(1000));
        }
    }

    return 0;
}
```



## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

