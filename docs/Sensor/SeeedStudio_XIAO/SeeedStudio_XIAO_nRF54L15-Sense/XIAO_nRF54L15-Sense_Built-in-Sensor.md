---
title: Seeed Studio XIAO nRF54L15 Sense built-in Sensor
description: This article describes how to use the Microphone on the XIAO MG24 Sense.
image: https://files.seeedstudio.com/wiki/mg24_mic/mg24.jpg
slug: /xiao_nrf54l15_sense_built_in_sensor
keywords:
  - XIAO
  - MG24
last_update:
  date: 11/20/2024 
  author: Jason
sidebar_position: 1
---

# Usage of Seeed Studio XIAO MG24 Sense built-in Sensor

## XIAO nRF54L15 Sense IMU

**6-Axis IMU (Inertial Measurement Unit)** Sensors like the **LSM6DS3TR-C** integrate accelerometers and gyroscopes to measure the motion and orientation of an object in three-dimensional space. Specifically, the LSM6DS3TR-C has the following features:

**Accelerometer function:**
- Measures the acceleration of an object along the X, Y, and Z axes. It is able to sense object motion (e.g., rest, acceleration, deceleration) and tilt changes (e.g., angle of the object).
- It can be used to detect gait, position changes, vibrations, etc.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz1.5.jpg" style={{width:320, height:'auto'}}/></div>

**Gyroscope function (Gyroscope):**
- Measures the angular velocity of an object around the X, Y, and Z axes, i.e., the rotation of the object.
- Can be used to detect rotation, rate of rotation, and change in direction.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz2.0.jpg" style={{width:320, height:'auto'}}/></div>

- The **X-axis angle ( Roll )** is the angle in the direction of rotation around the X-axis.
- The **Y-axis angle ( Pitch )** is the angle in the direction of rotation around the Y-axis.
- The **Z-axis angle ( Yaw )** is the angle in the direction of rotation around the Z-axis.


```cpp
#ifndef APP_SRC_IMU_H_
#define APP_SRC_IMU_H_

int imu_init(void);

#endif /* APP_SRC_IMU_H_ */
```

```cpp
#include <zephyr/drivers/sensor.h>
#include <zephyr/shell/shell.h>
#include <zephyr/drivers/regulator.h>
#include <nrfx.h>

static const struct device *const imu = DEVICE_DT_GET(DT_NODELABEL(lsm6dso));
static const struct device *const  lsm6dso_reg = DEVICE_DT_GET(DT_NODELABEL(pdm_imu_pwr));

static int cmd_imu_get(const struct shell *sh, size_t argc, char **argv)
{
    int ret;
    struct sensor_value accel_data[3];
    struct sensor_value gyro_data[3];
    struct sensor_value odr_attr;
    /* set accel/gyro sampling frequency to 12.5 Hz */
    odr_attr.val1 = 12.5;
    odr_attr.val2 = 0;
    regulator_enable(lsm6dso_reg);

    k_sleep(K_MSEC(100));
    if (!device_is_ready(imu)) {
        shell_error(sh, "Device not ready\n");
        return -ENODEV;
    }

    ret = sensor_attr_set(imu, SENSOR_CHAN_ACCEL_XYZ, SENSOR_ATTR_SAMPLING_FREQUENCY, &odr_attr);
    if (ret)
    {
        shell_error(sh, "Failed to set accel sampling frequency\n");
        return ret;
    }

    ret = sensor_attr_set(imu, SENSOR_CHAN_GYRO_XYZ, SENSOR_ATTR_SAMPLING_FREQUENCY, &odr_attr);
    if (ret)
    {
        shell_error(sh, "Failed to set gyro sampling frequency\n");
        return ret;
    }
    k_sleep(K_MSEC(500));
    ret = sensor_sample_fetch(imu);
    if (ret)
    {
        shell_error(sh, "Failed to fetch sample\n");
        return ret;
    }

    ret = sensor_channel_get(imu, SENSOR_CHAN_ACCEL_XYZ, accel_data);
    if (ret)
    {
        shell_error(sh, "Failed to get accel data\n");
        return ret;
    }

    ret = sensor_channel_get(imu, SENSOR_CHAN_GYRO_XYZ, gyro_data);
    if (ret)
    {
        shell_error(sh, "Failed to get gyro data\n");
        return ret;
    }

    regulator_disable(lsm6dso_reg);
    for (int i = 0; i < 3; i++) {
        if (accel_data[i].val1 < 0 && accel_data[i].val2 > 0) {
            accel_data[i].val2 = 1000000 - accel_data[i].val2;
        }
        if (gyro_data[i].val1 < 0 && gyro_data[i].val2 > 0) {
            gyro_data[i].val2 = 1000000 - gyro_data[i].val2;
        }
    }
    
    shell_print(sh, "accel data: %d.%06u, %d.%06u, %d.%06u",
              accel_data[0].val1, (uint32_t)abs(accel_data[0].val2),
              accel_data[1].val1, (uint32_t)abs(accel_data[1].val2),
              accel_data[2].val1, (uint32_t)abs(accel_data[2].val2));
    shell_print(sh, "gyro data: %d.%06u, %d.%06u, %d.%06u",
              gyro_data[0].val1, (uint32_t)abs(gyro_data[0].val2),
              gyro_data[1].val1, (uint32_t)abs(gyro_data[1].val2),
              gyro_data[2].val1, (uint32_t)abs(gyro_data[2].val2));
    return ret;
}

SHELL_STATIC_SUBCMD_SET_CREATE(sub_imu_cmds, 
					SHELL_CMD(get, NULL, "Get sensor data", cmd_imu_get),
			       SHELL_SUBCMD_SET_END);

SHELL_CMD_REGISTER(imu, &sub_imu_cmds, "IMU sensor", NULL);

int imu_init(void)
{
	if (!device_is_ready(imu)) {
		return -ENODEV;
	}
    regulator_disable(lsm6dso_reg);
	return 0;
}
```




## XIAO nRF54L15 Sense MIC

Microphone Sensors like the MSM261DGT006 are designed to capture sound by converting sound waves into electrical signals. This allows for the detection and recording of audio information from the environment. Specifically, the MSM261DGT006 has the following features:

**Sound Capture Function:**

- Converts acoustic energy (sound waves) into an electrical signal. It is able to sense ambient sounds (e.g., speech, music, noise) and changes in sound intensity.

- It can be used for voice control, audio recording, environmental sound monitoring, etc.

**Signal Output and Processing Function:**

- Outputs electrical signals corresponding to the captured sound, often in digital format (e.g., PDM or I2S) for direct interface with microcontrollers.

- Can be used for speech recognition, noise cancellation, sound event detection, and audio analysis.

- Frequency Response: Refers to the range of sound frequencies the microphone can accurately capture (e.g., from low bass to high treble).

- Sensitivity: Indicates how efficiently the microphone converts sound pressure into an electrical signal (i.e., how "loud" the output signal is for a given sound input).

- Signal-to-Noise Ratio (SNR): Measures the ratio of the desired audio signal to unwanted background noise produced by the microphone itself, indicating clarity.


```cpp
#ifndef APP_SRC_MIC_H_
#define APP_SRC_MIC_H_

int mic_init(void);

#endif /* APP_SRC_MIC_H_ */
```

```cpp
#include <stdio.h>

#include <zephyr/device.h>
#include <zephyr/kernel.h>
#include <zephyr/audio/dmic.h>
#include <zephyr/shell/shell.h>
#include <zephyr/sys/util.h>

#define BITS_PER_BYTE 8

#define SAMPLE_RATE_HZ 16000
#define SAMPLE_BITS    16
#define TIMEOUT_MS     1000
#define CAPTURE_MS     500
#define BLOCK_SIZE     ((SAMPLE_BITS / BITS_PER_BYTE) * (SAMPLE_RATE_HZ * CAPTURE_MS) / 1000)
#define BLOCK_COUNT    4

static const struct device *const dmic = DEVICE_DT_GET(DT_ALIAS(dmic20));
static const struct device *const  pdm_reg = DEVICE_DT_GET(DT_NODELABEL(pdm_imu_pwr));

K_MEM_SLAB_DEFINE_STATIC(mem_slab, BLOCK_SIZE, BLOCK_COUNT, 4);

static struct pcm_stream_cfg stream = {
	.pcm_rate = SAMPLE_RATE_HZ,
	.pcm_width = SAMPLE_BITS,
	.block_size = BLOCK_SIZE,
	.mem_slab = &mem_slab,
};

static struct dmic_cfg cfg = {
	.io =
		{
			.min_pdm_clk_freq = 1000000,
			.max_pdm_clk_freq = 3500000,
			.min_pdm_clk_dc = 40,
			.max_pdm_clk_dc = 60,
		},
	.streams = &stream,
	.channel =
		{
			.req_num_streams = 1,
			.req_num_chan = 1,
		},
};

static bool initialized;

static int cmd_mic_capture(const struct shell *sh, size_t argc, char **argv)
{
	int ret,time = 1;
	void *buffer;
	uint32_t size;
	int16_t max_data = 0, min_data = 0;
	
	if (argc > 1) {
		time = atoi(argv[1]);
	}
	time *= (1000 / CAPTURE_MS);
	if (!initialized) {
		shell_error(sh, "Microphone module not initialized");
		return -EPERM;
	}
	regulator_enable(pdm_reg);
	shell_print(sh, "S");
	ret = dmic_configure(dmic, &cfg);
	if (ret < 0) {
		shell_error(sh, "Failed to configure DMIC(%d)", ret);
		return ret;
	}
	ret = dmic_trigger(dmic, DMIC_TRIGGER_START);
	if (ret < 0) {
		shell_error(sh, "START trigger failed (%d)", ret);
		return ret;
	}
	for (int i = 0; i < time; i++) {
		ret = dmic_read(dmic, 0, &buffer, &size, TIMEOUT_MS);
		if (ret < 0) {
			shell_error(sh, "DMIC read failed (%d)", ret);
			k_mem_slab_free(&mem_slab, buffer);
			dmic_trigger(dmic, DMIC_TRIGGER_STOP);
			regulator_disable(pdm_reg);
			return ret;
		}

		for (int j = 0; j < size / sizeof(int16_t); j++)
		{
			if (((int16_t *)buffer)[j] > max_data) {
				max_data = ((int16_t *)buffer)[j];
			}
			if (((int16_t *)buffer)[j] < min_data) {
				min_data = ((int16_t *)buffer)[j];
			}
			shell_print(sh, "%d", ((int16_t *)buffer)[j]);
		}
		k_mem_slab_free(&mem_slab, buffer);
	}
	ret = dmic_trigger(dmic, DMIC_TRIGGER_STOP);
	if (ret < 0) {
		shell_error(sh, "STOP trigger failed (%d)", ret);
		regulator_disable(pdm_reg);
		return ret;
	}
	shell_print(sh, "E");
	shell_print(sh, "audio data Max: %d Min: %d", max_data, min_data);
	regulator_disable(pdm_reg);
	return 0;
}

SHELL_STATIC_SUBCMD_SET_CREATE(sub_mic_cmds,
			       SHELL_CMD(capture, NULL, "Capture microphone data", cmd_mic_capture),
			       SHELL_SUBCMD_SET_END);

SHELL_CMD_REGISTER(mic, &sub_mic_cmds, "Microphone", NULL);

int mic_init(void)
{
	if (!device_is_ready(dmic)) {
		return -ENODEV;
	}

	cfg.channel.req_chan_map_lo = dmic_build_channel_map(0, 0, PDM_CHAN_LEFT);

	initialized = true;

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
