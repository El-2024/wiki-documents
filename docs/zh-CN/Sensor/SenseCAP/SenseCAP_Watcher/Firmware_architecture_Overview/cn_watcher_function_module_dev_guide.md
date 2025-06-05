---
description: 描述如何开发 Watcher 功能模块。
title: Watcher 功能模块开发指南
image: https://files.seeedstudio.com/wiki/watcher_software_framework/watcher_function_module.webp
slug: /cn/watcher_function_module_development_guide
last_update:
  date: 05/15/2025
  author: Citric
sidebar_position: 3
---

# Watcher 功能模块开发指南

:::note
本文档由 AI 翻译。如您发现内容有误或有改进建议，欢迎通过页面下方的评论区，或在以下 Issue 页面中告诉我们：https://github.com/Seeed-Studio/wiki-documents/issues
:::

建议您首先阅读 [Watcher 软件框架](https://wiki.seeedstudio.com/watcher_software_framework)，以了解功能模块的工作原理。

在本文档中，我们将逐步指导您如何开发一个新的功能模块。我们将以 `UART Alarm` 模块为例。

## 1. 安装和首次构建

请先完成 [构建 Watcher 开发环境](https://wiki.seeedstudio.com/build_watcher_development_environment) 中的步骤，如果您已经跳过了这些步骤。

```shell
# 您当前位于 PROJ_ROOT_DIR/examples/factory_firmware/
cd main/task_flow_module
```

## 2. 选择合适的模板

在 [Watcher 软件框架](https://wiki.seeedstudio.com/watcher_software_framework) 中，我们介绍了现有的功能模块（在本文档中简称为 **FM**）及其用途。当我们开发一个新的 FM 时，最好从一个最接近的现有 FM 开始作为参考。在本教程中，我们将开发一个报警器 FM，因此我们选择一个报警器 FM，`local alarmer` 是最简单的，我们将以它为例。

```shell
cp tf_module_local_alarm.h tf_module_uart_alarm.h
cp tf_module_local_alarm.c tf_module_uart_alarm.c
```

文件的名称并不重要，任何 `.h` 和 `.c` 文件都会被构建系统扫描并纳入编译代码树。但仍然建议使用有意义的文件名。

## 3. 实现注册

**TFE**（任务流引擎）提供了一个 API 函数来注册新的 FM。

```cpp
esp_err_t tf_module_register(const char *p_name,
                                const char *p_desc,
                                const char *p_version,
                                tf_module_mgmt_t *mgmt_handle);
```

前三个参数分别是 FM 的名称、描述和版本，它们目前主要用于内部，例如从注册表中匹配 FM、日志打印等，但未来会用于 FM 与本地服务通信。

```cpp
// 在 tf_module_uart_alarm.h 中
#define TF_MODULE_UART_ALARM_NAME "uart alarm"
#define TF_MODULE_UART_ALARM_VERSION "1.0.0"
#define TF_MODULE_UART_ALARM_DESC "uart alarm function module"

// 在 tf_module_uart_alarm.c 中
esp_err_t tf_module_uart_alarm_register(void)
{
    return tf_module_register(TF_MODULE_UART_ALARM_NAME,
                              TF_MODULE_UART_ALARM_DESC,
                              TF_MODULE_UART_ALARM_VERSION,
                              &__g_module_management);
}
```

第四个参数是一个结构体，包含管理此 FM 生命周期所需的 API 函数。

```cpp
// 在 tf_module.h 中
typedef struct tf_module_mgmt {
    tf_module_t *(*tf_module_instance)(void);
    void (*tf_module_destroy)(tf_module_t *p_module);
}tf_module_mgmt_t;
```

`tf_module_instance` 是一个函数，当引擎初始化任务流中指定的所有 FM 时会调用它，基本上这意味着引擎刚刚收到任务流创建请求并开始流。`tf_module_destroy` 是一个函数，当引擎停止任务流时会调用它。

### 3.1 实例化

```cpp
tf_module_t *tf_module_uart_alarm_instance(void)
{
    tf_module_uart_alarm_t *p_module_ins = (tf_module_uart_alarm_t *) tf_malloc(sizeof(tf_module_uart_alarm_t));
    if (p_module_ins == NULL)
    {
        return NULL;
    }
    p_module_ins->module_base.p_module = p_module_ins;
    p_module_ins->module_base.ops = &__g_module_ops;

    if (atomic_fetch_add(&g_ins_cnt, 1) == 0) {
        // 第一次实例化时，我们需要初始化硬件
        esp_err_t ret;
        uart_config_t uart_config = {
            .baud_rate = 115200,
            .data_bits = UART_DATA_8_BITS,
            .parity = UART_PARITY_DISABLE,
            .stop_bits = UART_STOP_BITS_1,
            .flow_ctrl = UART_HW_FLOWCTRL_DISABLE,
        };
        const int buffer_size = 2 * 1024;
        ESP_GOTO_ON_ERROR(uart_param_config(UART_NUM_2, &uart_config), err, TAG, "uart_param_config 失败");
        ESP_GOTO_ON_ERROR(uart_set_pin(UART_NUM_2, GPIO_NUM_19, GPIO_NUM_20, -1, -1), err, TAG, "uart_set_pin 失败");
        ESP_GOTO_ON_ERROR(uart_driver_install(UART_NUM_2, buffer_size, buffer_size, 0, NULL, ESP_INTR_FLAG_SHARED), err, TAG, "uart_driver_install 失败");
    }

    return &p_module_ins->module_base;

err:
    free(p_module_ins);
    return NULL;
}
```

以上是我们对 `instance` 函数的实现。它为一个结构体 `tf_module_uart_alarm_t` 分配内存，该结构体用于保存此 FM 的参数，就像 C++ 类的成员一样。在结构体 `tf_module_uart_alarm_t` 中，第一个字段非常重要——`tf_module_t module_base`，从 C++ 编程的角度来看，`tf_module_t` 是所有 FM 的父类。`instance` 函数只是向 TFE 提供一个指向 `tf_module_t` 结构体的指针。

```cpp
// 在 tf_module_uart_alarm.h 中
typedef struct {
    tf_module_t module_base;
    int input_evt_id;           // 这也可以是模块实例 ID
    int output_format;          // 默认值为 0，详见上方注释
    bool include_big_image;     // 默认值：false
    bool include_small_image;   // 默认值：false
    bool include_boxes;         // 默认值：false，功能即将推出
} tf_module_uart_alarm_t;

// 在 tf_module_uart_alarm.c 中
tf_module_t *tf_module_uart_alarm_instance(void)
{
    ...
    return &p_module_ins->module_base;
    ...
}
```

`tf_module_t` 的两个成员必须被赋值。

```cpp
// 在 tf_module_uart_alarm.c 中
tf_module_t *tf_module_uart_alarm_instance(void)
{
    ...
    p_module_ins->module_base.p_module = p_module_ins;
    p_module_ins->module_base.ops = &__g_module_ops;
```

`p_module` - 一个指针，指向 FM 实例本身，用于 `destroy` 函数获取实例的句柄并释放其内存。
`ops` - 一个结构体，包含由 TFE 操作 FM 的 API 函数，我们稍后会讨论这一点。

实例函数的其余部分是用于初始化硬件以及与您的 FM（功能模块）逻辑相关的内容。

需要提到的一点是，FM 可能会被多次实例化。您需要处理 `instance` 函数的重新进入逻辑，如果您的 FM 不支持多实例化，则需要在第二次调用 `instance` 函数时返回一个 NULL 指针。

在这个 `uart alarmer` 示例中，我们将使用引用计数器来处理重新进入的逻辑。

```cpp
if (atomic_fetch_add(&g_ins_cnt, 1) == 0) {
        // 第一次实例化时，我们需要初始化硬件
        esp_err_t ret;
        uart_config_t uart_config = {
            .baud_rate = 115200,
            .data_bits = UART_DATA_8_BITS,
            .parity = UART_PARITY_DISABLE,
            .stop_bits = UART_STOP_BITS_1,
            .flow_ctrl = UART_HW_FLOWCTRL_DISABLE,
        };
        const int buffer_size = 2 * 1024;
        ESP_GOTO_ON_ERROR(uart_param_config(UART_NUM_2, &uart_config), err, TAG, "uart_param_config 失败");
        ESP_GOTO_ON_ERROR(uart_set_pin(UART_NUM_2, GPIO_NUM_19, GPIO_NUM_20, -1, -1), err, TAG, "uart_set_pin 失败");
        ESP_GOTO_ON_ERROR(uart_driver_install(UART_NUM_2, buffer_size, buffer_size, 0, NULL, ESP_INTR_FLAG_SHARED), err, TAG, "uart_driver_install 失败");
    }
```

### 3.2 销毁

```cpp
void tf_module_uart_alarm_destroy(tf_module_t *p_module_base)
{
    if (p_module_base) {
        if (atomic_fetch_sub(&g_ins_cnt, 1) <= 1) {
            // 这是最后一次销毁调用，反初始化 UART
            uart_driver_delete(UART_NUM_2);
            ESP_LOGI(TAG, "UART 驱动已删除。");
        }
        if (p_module_base->p_module) {
            free(p_module_base->p_module);
        }
    }
}
```

`destroy` 通常很简单 😂 我们只需要释放内存，并在必要时反初始化硬件。

## 4. 实现操作

父类的 `ops` 成员定义如下：

```c
struct tf_module_ops
{
    int (*start)(void *p_module);
    int (*stop)(void *p_module);
    int (*cfg)(void *p_module, cJSON *p_json);
    int (*msgs_sub_set)(void *p_module, int evt_id);
    int (*msgs_pub_set)(void *p_module, int output_index, int *p_evt_id, int num);
};
```

当 TFE 初始化 FM 时，它会按以下顺序调用这些函数：`cfg` -> `msgs_sub_set` -> `msgs_pub_set` -> `start` -> `stop`。

- `cfg` - 从任务流 JSON 中获取参数，使用这些参数配置您的 FM。
- `msgs_sub_set` - 通过向上游 FM 的事件 ID 注册事件处理程序来创建与上游 FM 的连接。输入参数 `evt_id` 是由 TFE 从任务流 JSON 中提取并准备的。第一个参数 `p_module` 是 FM 实例本身的指针。
- `msgs_pub_set` - 存储与下游 FM 的连接。如果此 FM 没有输出，我们可以将此函数留空。第一个参数 `p_module` 是 FM 实例本身的指针。第二个参数 `output_index` 是端口号，例如此 FM 有两个输出，`msgs_pub_set` 将被调用两次，`output_index` 分别为 0 和 1。第三个参数 `p_evt_id` 是一个指向数组的指针，该数组包含此端口上所有下游 FM 的事件 ID，数组的大小由最后一个参数 `num` 指定。
- `start` 和 `stop` - 顾名思义，它们分别启动和停止 FM。它们都接收 `p_module` 作为参数，即 FM 实例本身的指针。

### 4.1 配置（cfg）

```cpp
static int __cfg(void *p_module, cJSON *p_json)
{
    tf_module_uart_alarm_t *p_module_ins = (tf_module_uart_alarm_t *)p_module;

    cJSON *output_format = cJSON_GetObjectItem(p_json, "output_format");
    if (output_format == NULL || !cJSON_IsNumber(output_format))
    {
        ESP_LOGE(TAG, "参数 output_format 缺失，默认值为 0（二进制输出）");
        p_module_ins->output_format = 0;
    } else {
        ESP_LOGI(TAG, "参数 output_format=%d", output_format->valueint);
        p_module_ins->output_format = output_format->valueint;
    }

    cJSON *include_big_image = cJSON_GetObjectItem(p_json, "include_big_image");
    if (include_big_image == NULL || !cJSON_IsBool(include_big_image))
    {
        ESP_LOGE(TAG, "参数 include_big_image 缺失，默认值为 false");
        p_module_ins->include_big_image = false;
    } else {
        ESP_LOGI(TAG, "参数 include_big_image=%s", cJSON_IsTrue(include_big_image)?"true":"false");
        p_module_ins->include_big_image = cJSON_IsTrue(include_big_image);
    }

    cJSON *include_small_image = cJSON_GetObjectItem(p_json, "include_small_image");
    if (include_small_image == NULL || !cJSON_IsBool(include_small_image))
    {
        ESP_LOGE(TAG, "参数 include_small_image 缺失，默认值为 false");
        p_module_ins->include_small_image = false;
    } else {
        ESP_LOGI(TAG, "参数 include_small_image=%s", cJSON_IsTrue(include_small_image)?"true":"false");
        p_module_ins->include_small_image = cJSON_IsTrue(include_small_image);
    }

    cJSON *include_boxes = cJSON_GetObjectItem(p_json, "include_boxes");
    if (include_boxes == NULL || !cJSON_IsBool(include_boxes))
    {
        ESP_LOGE(TAG, "参数 include_boxes 缺失，默认值为 false");
        p_module_ins->include_boxes = false;
    } else {
        ESP_LOGI(TAG, "参数 include_boxes=%s", cJSON_IsTrue(include_boxes)?"true":"false");
        p_module_ins->include_boxes = cJSON_IsTrue(include_boxes);
    }
    return 0;
}
```

如您所见，`cfg` 函数只是从 cJSON 对象中提取字段值，该对象来自任务流中 FM 对象的 `params` 字段。例如，以下是一个包含 `uart alarmer` FM 的简单任务流：

```json
{
  "tlid": 3,
  "ctd": 3,
  "tn": "本地人类检测",
  "type": 0,
  "task_flow": [
    {
      "id": 1,
      "type": "ai camera",
      "index": 0,
      "version": "1.0.0",
      "params": {
        "model_type": 1,
        "modes": 0,
        "model": {
          "arguments": {
            "iou": 45,
            "conf": 50
          }
        },
        "conditions": [
          {
            "class": "person",
            "mode": 1,
            "type": 2,
            "num": 0
          }
        ],
        "conditions_combo": 0,
        "silent_period": {
          "silence_duration": 5
        },
        "output_type": 0,
        "shutter": 0
      },
      "wires": [
        [2]
      ]
    },
    {
      "id": 2,
      "type": "alarm trigger",
      "index": 1,
      "version": "1.0.0",
      "params": {
        "text": "检测到人类",
        "audio": ""
      },
      "wires": [
        [3]
      ]
    },
    {
      "id": 3,
      "type": "uart alarm",
      "index": 2,
      "version": "1.0.0",
      "params": {
        "output_format": 1,
        "include_big_image": false,
        "include_small_image": false
      },
      "wires": []
    }
  ]
}
```

在上述任务流中，`uart alarmer` 的 `params` 参数为：

```json
{
  "output_format": 1,
  "include_big_image": false,
  "include_small_image": false
}
```

我们分析了 cJSON，提取了所需的值，并将它们通常存储到模块实例中。

### 4.2 msgs_sub_set

```cpp
static int __msgs_sub_set(void *p_module, int evt_id)
{
    tf_module_uart_alarm_t *p_module_ins = (tf_module_uart_alarm_t *)p_module;
    p_module_ins->input_evt_id = evt_id;
    return tf_event_handler_register(evt_id, __event_handler, p_module_ins);
}
```

记录上游 FM 的事件 ID 以供将来使用，并为该事件注册一个事件处理程序。

### 4.3 事件处理程序

在 [Watcher 软件框架](https://wiki.seeedstudio.com/watcher_software_framework) 中，我们了解到数据流是由事件循环驱动的。基本上，一个 FM 会从其事件处理程序接收数据，然后消费这些数据，进行计算并得到一些结果。最后，它需要将结果发布到事件循环中，目标是那些对该 FM 数据感兴趣的下游 FM。

在这个 `uart alarmer` 示例中，我们消费来自一个报警触发 FM 的数据，该 FM 的输出数据类型为 `TF_DATA_TYPE_DUALIMAGE_WITH_INFERENCE_AUDIO_TEXT`。由于 UART 数据准备相对简单，我们在事件循环处理程序中完成所有数据生成。然而，这种做法并不推荐，如果你的数据处理耗时较长或 IO 密集，建议创建一个工作任务（线程）来进行后台处理。

我们根据输入参数 `output_format` 准备一个二进制输出缓冲区或 JSON 字符串。最后，我们将这些数据写入 UART。我们的 FM 只有一个输出，即硬件，而不是另一个 FM，因此我们的 `msgs_pub_set` 是一个空操作。最后，我们需要释放来自事件循环的数据，原因将在下一节中解释。

### 4.4 msgs_pub_set

在这个示例中，`msgs_pub_set` 是空操作，因为我们的 FM 没有下游消费者。以下是 `ai camera` FM 的一个示例。

```cpp
// 在 tf_module_ai_camera.c 中
static int __msgs_pub_set(void *p_module, int output_index, int *p_evt_id, int num)
{
    tf_module_ai_camera_t *p_module_ins = (tf_module_ai_camera_t *)p_module;
    __data_lock(p_module_ins);
    if (output_index == 0 && num > 0)
    {
        p_module_ins->p_output_evt_id = (int *)tf_malloc(sizeof(int) * num);
        if (p_module_ins->p_output_evt_id )
        {
            memcpy(p_module_ins->p_output_evt_id, p_evt_id, sizeof(int) * num);
            p_module_ins->output_evt_num = num;
        } else {
            ESP_LOGE(TAG, "Failed to malloc p_output_evt_id");
            p_module_ins->output_evt_num = 0;
        }
    }
    else
    {
        ESP_LOGW(TAG, "Only support output port 0, ignore %d", output_index);
    }
    __data_unlock(p_module_ins);
    return 0;
}
```

这段代码并不复杂，只是将事件 ID 存储到 FM 实例的结构中。这是你需要在 FM 的类型结构中添加一个成员字段的地方，在这个例子中是 `tf_module_ai_camera_t`。

我们什么时候会使用这些事件 ID？当数据生成并通过时间门控时。在 `ai camera` 的示例中，数据来源于 Himax SoC 的 SPI 输出，该 SoC 运行本地 AI 推理，并通过一些条件门控。如果所有条件都满足，数据就会到达需要发布到事件循环的时间点。

```cpp
// 在 tf_module_ai_camera.c 中
...
                    for (int i = 0; i < p_module_ins->output_evt_num; i++)
                    {
                        tf_data_image_copy(&p_module_ins->output_data.img_small, &info.img);
                        tf_data_inference_copy(&p_module_ins->output_data.inference, &info.inference);

                        ret = tf_event_post(p_module_ins->p_output_evt_id[i], &p_module_ins->output_data, sizeof(p_module_ins->output_data), pdMS_TO_TICKS(100));
                        if( ret != ESP_OK) {
                            ESP_LOGE(TAG, "Failed to post event %d", p_module_ins->p_output_evt_id[i]);
                            tf_data_free(&p_module_ins->output_data);
                        } else {
                            ESP_LOGI(TAG, "Output -> %d", p_module_ins->p_output_evt_id[i]);
                        }
                    }
...
```

我们需要将数据发布给每个输出的订阅者。如你所见，我们为每个订阅者复制了一份数据。

**内存分配和释放规则**
- 数据生成 FM 为每个订阅者分配内存。
- 数据消费 FM 在数据使用完毕后释放内存。

### 4.5 启动和停止

这些是 FM 的运行时控制，用于支持未来的流程暂停/恢复功能。目前，你可以在实例化 FM 后让其运行，但我们仍然建议将逻辑分为 FM 的生命周期管理和 FM 的运行时控制。

## 5. 测试

现在我们有了 `uart alarmer` FM，在提交请求之前，如何在本地测试它？

我们实现了一个控制台命令来本地发起任务流。

```shell
SenseCAP> help taskflow
taskflow  [-iej] [-f <string>]
  import taskflow by json string or SD file, eg:taskflow -i -f "test.json".

export taskflow to stdout or SD file, eg: taskflow -e -f "test.json"
  -i, --import  import taskflow
  -e, --export  export taskflow
  -f, --file=<string>  File path, import or export taskflow json string by SD, eg: test.json
    -j, --json  import taskflow json string by stdin
```

请参考 [构建 Watcher 开发环境](https://wiki.seeedstudio.com/build_watcher_development_environment) - `5. 监控日志输出` 获取控制台。准备一个去掉空格和空白字符的任务流，并通过以下命令发起任务流：

```shell
taskflow -i -j<enter>
Please input taskflow json:
#<在此处粘贴你的任务流 json，例如>
{"tlid":3,"ctd":3,"tn":"Local Human Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":1,"modes":0,"model":{"arguments":{"iou":45,"conf":50}},"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"human detected","audio":""},"wires":[[3]]},{"id":3,"type":"uart alarm","index":2,"version":"1.0.0","params":{"output_format":1},"wires":[]}]}
```

如何编写任务流？在 [Watcher 软件框架](https://wiki.seeedstudio.com/watcher_software_framework) 中，我们介绍了每个 FM 及其参数。编写任务流的过程类似于在 Node-RED 中绘制 FM 块之间的连线。

在我们拥有用于编写任务流的 GUI 之前，可以使用 `export` 命令来收集示例。只需使用移动应用程序发布一个启用了本地报警功能（RGB 灯）的任务流，当任务流运行时，使用以下命令导出任务流：

```shell
taskflow -e
```

此命令会将运行中的任务流导出到控制台。如果任务流非常长，其输出可能会被其他日志中断。在这种情况下，我们需要一张 TF 卡。将 TF 卡格式化为 FAT/exFAT 文件系统，并将其插入 Watcher。现在我们可以将运行中的任务流导出到 TF 卡：

```shell
taskflow -e -f tf1.json
# 仅支持根目录下的文件名
# 请不要在路径中指定前置目录，该命令无法创建目录
```

现在你已经有了示例，修改其中一个报警器 FM（通常是最后一个 FM），将其替换为你的 `uart alarmer` FM，向你的 FM 的 JSON 对象中添加一些参数，使用 JSON 编辑器删除空白字符，然后使用上述 `taskflow -i -j` 命令导入。

就是这样，享受探索的乐趣吧！

## 附录 - 更多任务流示例

以下是一些可以开始使用的任务流示例。

```json
{"tlid":3,"ctd":3,"tn":"Local Human Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":1,"modes":0,"model":{"arguments":{"iou":45,"conf":50}},"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"human detected","audio":""},"wires":[[3,4]]},{"id":3,"type":"local alarm","index":2,"version":"1.0.0","params":{"sound":1,"rgb":1,"img":0,"text":0,"duration":1},"wires":[]},{"id":4,"type":"sensecraft alarm","index":3,"version":"1.0.0","params":{"silence_duration":30},"wires":[]}]}
```

```json
{"tlid":1,"ctd":1,"tn":"Local Gesture Detection","type":0,"task_flow":[{"id":1,"type":"ai camera","index":0,"version":"1.0.0","params":{"model_type":3,"modes":0,"model":{"arguments":{"iou":45,"conf":65}},"conditions":[{"class":"paper","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"silence_duration":5},"output_type":0,"shutter":0},"wires":[[2]]},{"id":2,"type":"alarm trigger","index":1,"version":"1.0.0","params":{"text":"scissors detected","audio":""},"wires":[[3,4]]},{"id":3,"type":"local alarm","index":2,"version":"1.0.0","params":{"sound":1,"rgb":1,"img":0,"text":0,"duration":1},"wires":[]},{"id":4,"type":"sensecraft alarm","index":3,"version":"1.0.0","params":{"silence_duration":30},"wires":[]}]}
```

```json
{"tlid":1719396404172,"ctd":1719396419707,"tn":"Man with glasses spotted, notify immediately","task_flow":[{"id":753589649,"type":"ai camera","type_id":0,"index":0,"vision":"0.0.1","params":{"model_type":0,"model":{"model_id":"60086","version":"1.0.0","arguments":{"size":1644.08,"url":"https://sensecraft-statics.oss-accelerate.aliyuncs.com/refer/model/1705306215159_jVQf4u_swift_yolo_nano_person_192_int8_vela(2).tflite","icon":"https://sensecraft-statics.oss-accelerate.aliyuncs.com/refer/pic/1705306138275_iykYXV_detection_person.png","task":"detect","createdAt":1705306231,"updatedAt":null},"model_name":"Person Detection--Swift YOLO","model_format":"tfLite","ai_framework":"6","author":"SenseCraft AI","description":"The model is a Swift-YOLO model trained on the person detection dataset. It can detect human body  existence.","task":1,"algorithm":"Object Dectect(TensorRT,SMALL,COCO)","classes":["person"]},"modes":0,"conditions":[{"class":"person","mode":1,"type":2,"num":0}],"conditions_combo":0,"silent_period":{"time_period":{"repeat":[1,1,1,1,1,1,1],"time_start":"00:00:00","time_end":"23:59:59"},"silence_duration":60},"output_type":1,"shutter":0},"wires":[[193818631]]},{"id":193818631,"type":"image analyzer","type_id":3,"index":1,"version":"0.0.1","params":{"url":"","header":"","body":{"prompt":"Is there a man with glasses?","type":1,"audio_txt":"Man with glasses"}},"wires":[[420037647,452707375]]},{"id":452707375,"type_id":99,"type":"sensecraft alarm","index":2,"version":"0.0.1","params":{"silence_duration":10,"text":"Man with glasses"},"wires":[]},{"id":420037647,"type_id":5,"type":"local alarm","index":3,"version":"0.0.1","params":{"sound":1,"rgb":1,"img":1,"text":1,"duration":10},"wires":[]}],"type":0}
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，确保您在使用我们的产品时获得顺畅的体验。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>