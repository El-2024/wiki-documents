---
description: Este wiki proporciona el tutorial de depuración para el Brazo Robótico StarAI y realiza la recolección de datos y entrenamiento dentro del framework Lerobot.
title: Comenzando con el Brazo Robótico StarAI con LeRobot
keywords:
- Lerobot
- Huggingface
- Arm
- Robotics 
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/starai_robotic_arm.webp
slug: /es/lerobot_starai_arm
last_update:
  date: 9/1/2025
  author: LiShanghang
---

# Comenzando con el Brazo Robótico StarAI con LeRobot

:::tip
 [LeRobot](https://github.com/huggingface/lerobot/tree/main) se compromete a proporcionar modelos, conjuntos de datos y herramientas para robótica del mundo real en PyTorch. Su objetivo es reducir la barrera de entrada de la robótica, permitiendo que todos contribuyan y se beneficien del intercambio de conjuntos de datos y modelos preentrenados. LeRobot integra metodologías de vanguardia validadas para aplicaciones del mundo real, centrándose en el aprendizaje por imitación. Ha proporcionado un conjunto de modelos preentrenados, conjuntos de datos con demostraciones recopiladas por humanos y entornos de simulación, permitiendo a los usuarios comenzar sin la necesidad de ensamblar robots. En las próximas semanas, la intención es aumentar el soporte para robótica del mundo real en los robots más rentables y competentes actualmente accesibles.
:::

## Introducción del Producto

1.  **Código Abierto y Fácil para Desarrollo Secundario**
    Esta serie de servomotores, proporcionada por [Fashion Robotics](https://fashionrobo.com/), ofrece una solución de brazo robótico de código abierto y fácilmente personalizable de 6+1 grados de libertad.

2.  **Soporte de Integración con la Plataforma LeRobot**
    Está específicamente diseñado para la integración con la [plataforma LeRobot](https://github.com/huggingface/lerobot). Esta plataforma proporciona modelos PyTorch, conjuntos de datos y herramientas para el aprendizaje por imitación en tareas de robótica del mundo real, incluyendo recolección de datos, simulación, entrenamiento y despliegue.

3.  **Abundantes Recursos de Aprendizaje**
    Ofrecemos recursos de aprendizaje de código abierto integrales, incluyendo configuración del entorno, guías de instalación y depuración, y ejemplos de tareas de agarre personalizadas para ayudar a los usuarios a comenzar rápidamente y desarrollar aplicaciones robóticas.

4.  **Compatibilidad con Plataforma Nvidia**
    El despliegue es compatible a través de la plataforma reComputer Mini J4012 Orin NX 16GB.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/pAKqP_vReNY?si=AaZQ_DBQyY2p0YMf" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Características Clave

- Listo para Usar -- Sin Ensamblaje Requerido. Solo Desempaca y Sumérgete en el Mundo de la IA.
- 6+1 Grados de Libertad y un Alcance de 470mm -- Construido para Versatilidad y Precisión.
- Alimentado por Servos de Bus Sin Escobillas Duales -- Suave, Silencioso y Fuerte con hasta 300g de Carga Útil.
- Pinza Paralela con Apertura Máxima de 66mm -- Puntas de Dedos Modulares para Flexibilidad de Reemplazo Rápido.
- Tecnología Exclusiva de Bloqueo Flotante -- Congela Instantáneamente el Brazo Líder en Cualquier Posición con una Sola Presión.

## Especificaciones

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Specifications.png" />
  </div>

| Elemento             | Brazo Seguidor \| Viola                          | Brazo Líder \|Violin                              |
| -------------------- | ------------------------------------------------- | ------------------------------------------------- |
| Grados de Libertad   | 6                                                 | 6+1                                               |
| Alcance              | 470mm                                             | 470mm                                             |
| Envergadura          | 940mm                                             | 940mm                                             |
| Repetibilidad        | 2mm                                               | -                                                 |
| Carga Útil de Trabajo| 300g (con 70% de Alcance)                        | -                                                 |
| Servos               | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 |
| Kit de Pinza Paralela| ✅                                                 | -                                                 |
| Rotación de Muñeca   | Sí                                                | Sí                                                |
| Mantener en Cualquier Posición | Sí                                      | Sí (con botón de mango)                           |
| Montaje de Cámara en Muñeca | ✅                                          | -                                                 |
| Funciona con LeRobot | ✅                                                 | ✅                                                 |
| Funciona con ROS 2   | ✅                                                 | /                                                 |
| Funciona con MoveIt  | ✅                                                 | /                                                 |
| Funciona con Gazebo  | ✅                                                 | /                                                 |
| Hub de Comunicación  | UC-01                                             | UC-01                                             |
| Fuente de Alimentación | 12v/120w                                        | 12v/120w                                          |

Para más información sobre los servomotores, visite el siguiente enlace.

[RA8-U25H-M](https://fashionrobo.com/actuator-u25/23396/)

[RX18-U100H-M](https://fashionrobo.com/actuator-u100/22853/)

[RX8-U50H-M](https://fashionrobo.com/actuator-u50/136/)


## Configuración inicial del entorno

**Para Ubuntu x86:**
- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6  

**Para Jetson Orin:**
- Jetson JetPack 6.0+  
- Python 3.10  
- Torch 2.6  

## Instalación y Depuración

### Instalar LeRobot

Los entornos como pytorch y torchvision necesitan ser instalados basándose en su CUDA.
1. Instalar Miniconda:
Para Jetson:

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

O, Para X86 Ubuntu 22.04:
```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
conda init --all
```

2. Crear y activar un entorno conda fresco para lerobot

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
```

3. Clonar Lerobot:

```bash
git clone https://github.com/servodevelop/lerobot-starai.git
```

4. Cuando use miniconda, instale ffmpeg en su entorno:

```bash
conda install ffmpeg -c conda-forge
```

:::tip
Esto usualmente instala ffmpeg 7.X para su plataforma compilado con el codificador libsvtav1. Si libsvtav1 no es compatible (verifique los codificadores compatibles con ffmpeg -encoders), puede:
- [En cualquier plataforma] Instalar explícitamente ffmpeg 7.X usando:
```bash
conda install ffmpeg=7.1.1 -c conda-forge
```
- [Solo en Linux] Instalar dependencias de compilación de ffmpeg y compilar ffmpeg desde el código fuente con libsvtav1, y asegúrese de usar el binario ffmpeg correspondiente a su instalación con which ffmpeg.

:::

5. Instalar LeRobot con dependencias para los motores feetech:

```bash
cd ~/lerobot-starai && pip install -e ".[feetech]"
```


Para dispositivos Jetson Jetpack (asegúrese de instalar [Pytorch-gpu y Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) desde el paso 5 antes de ejecutar este paso):

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```


6. Verificar Pytorch y Torchvision

Dado que instalar el entorno lerobot a través de pip desinstalará el Pytorch y Torchvision originales e instalará las versiones CPU de Pytorch y Torchvision, necesita realizar una verificación en Python.

```python
import torch
print(torch.cuda.is_available())
```

Si el resultado impreso es False, necesita reinstalar Pytorch y Torchvision según el [tutorial del sitio web oficial](https://pytorch.org/index.html).

Si está usando un dispositivo Jetson, instale Pytorch y Torchvision según [este tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson).




### Desempacando el Brazo Robótico

El Kit de Brazo Robótico Incluye

- Brazo líder
- Brazo seguidor
- Controlador (mango)
- Pinza paralela
- Herramientas de instalación (tornillos, llave hexagonal)
- Fuente de alimentación ×2
- Abrazadera en C ×2
- Placa de depuración UC-01 ×2

Interruptor de la placa de depuración UC-01：

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/UC-01 debuging board switch.png" />
</div>

### Configurar Puerto del Brazo

Ejecute el siguiente comando en la terminal para encontrar puertos USB asociados a sus brazos：

```bash
python lerobot/scripts/find_motors_bus_port.py
```

:::tip
Recuerde quitar el usb, de lo contrario la interfaz no será detectada.
:::

Por ejemplo：

1. Salida de ejemplo al identificar el puerto del brazo líder (ej., `/dev/tty.usbmodem575E0031751` en Mac, o posiblemente `/dev/ttyACM0` en Linux):
2. Salida de ejemplo al identificar el puerto del brazo seguidor (ej., `/dev/tty.usbmodem575E0032081`en Mac, o posiblemente `/dev/ttyACM1` en Linux):

Podría necesitar dar acceso a los puertos USB ejecutando:

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

:::tip

Si el puerto serie ttyUSB0 no puede ser identificado, pruebe las siguientes soluciones:

Listar todos los puertos USB.

```sh
lsusb
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate1.png" />
</div>

Una vez identificado, verifique la información del ttyusb.

```sh
sudo dmesg | grep ttyUSB
```

<div align="center">
    <img width={800}

    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate2.png" />
</div>

La última línea indica una desconexión porque brltty está ocupando el USB. Eliminar brltty resolverá el problema.

```sh
sudo apt remove brltty
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate3.png" />
</div>

Finalmente, usa el comando chmod.

```sh
sudo chmod 666 /dev/ttyUSB0
```
:::


Abre el archivo `lerobot-starai\lerobot\common\robot_devices\robots\configs.py`

Usa Ctrl+F para buscar starai y localizar el siguiente código. Luego, necesitas modificar la configuración de puerto de follower_arms y leader_arms para que coincida con la configuración de puerto real.

```python
@RobotConfig.register_subclass("starai")
@dataclass
class StaraiRobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/starai"
    max_relative_target: int | None = None

    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": StaraiMotorsBusConfig(
                port="/dev/ttyUSB1",  #<-------- UPDATE HEARE
                interval = 100,								
                motors={
                    # name: (index, model)
                    "joint1": [0, "rx8-u50"],
                    "joint2": [1, "rx8-u50"],
                    "joint3": [2, "rx8-u50"],
                    "joint4": [3, "rx8-u50"],
                    "joint5": [4, "rx8-u50"],
                    "joint6": [5, "rx8-u50"],
                    "gripper": [6, "rx8-u50"],
                },
            ),
        }
    )

    follower_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": StaraiMotorsBusConfig(
                port="/dev/ttyUSB0",  #<-------- UPDATE HEARE
                interval = 100,								
                motors={
                    # name: (index, model)
                    "joint1": [0, "rx8-u50"],
                    "joint2": [1, "rx8-u50"],
                    "joint3": [2, "rx8-u50"],
                    "joint4": [3, "rx8-u50"],
                    "joint5": [4, "rx8-u50"],
                    "joint6": [5, "rx8-u50"],
                    "gripper": [6, "rx8-u50"],
                },
            ),
        }
    )
```

### Configurar Parámetros de Tiempo de Ejecución

Abre el archivo `lerobot-starai\lerobot\common\robot_devices\robots\configs.py`

Usa Ctrl + F para buscar starai y localizar el siguiente código. Luego, necesitas modificar la configuración de intervalo de follower_arms.

- Descripción: El seguidor responde más rápido cuando el intervalo de tiempo se vuelve menor, y funciona de manera más estable cuando el intervalo de tiempo se vuelve mayor.
- Rango de Valores: Entero, mayor que 50 y menor que 2000.

Se recomienda configurar el intervalo a 100 (valor predeterminado) durante la teleoperación para una mejor capacidad de respuesta, y a 1000 durante la ejecución autónoma en fases de evaluación para asegurar un movimiento más estable.

```python
@RobotConfig.register_subclass("starai")
@dataclass
class StaraiRobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/starai"
    max_relative_target: int | None = None

    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": StaraiMotorsBusConfig(
                port="/dev/ttyUSB1",
                interval = 100, 	#<-------- UPDATE HEARE							
                motors={
                    # name: (index, model)
                    "joint1": [0, "rx8-u50"],
                    "joint2": [1, "rx8-u50"],
                    "joint3": [2, "rx8-u50"],
                    "joint4": [3, "rx8-u50"],
                    "joint5": [4, "rx8-u50"],
                    "joint6": [5, "rx8-u50"],
                    "gripper": [6, "rx8-u50"],
                },
            ),
        }
    )

    follower_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": StaraiMotorsBusConfig(
                port="/dev/ttyUSB0",
                interval = 100, 	#<-------- UPDATE HEARE
                motors={
                    # name: (index, model)
                    "joint1": [0, "rx8-u50"],
                    "joint2": [1, "rx8-u50"],
                    "joint3": [2, "rx8-u50"],
                    "joint4": [3, "rx8-u50"],
                    "joint5": [4, "rx8-u50"],
                    "joint6": [5, "rx8-u50"],
                    "gripper": [6, "rx8-u50"],
                },
            ),
        }
    )

```

### Calibrar

Normalmente, el brazo robótico está pre-calibrado en fábrica y no requiere recalibración. Si se encuentra que un motor de articulación permanece en una posición límite durante un período prolongado, por favor contáctanos para obtener el archivo de calibración y realizar la recalibración nuevamente.


## Teleoperar

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/Uz-x-2P2xaE?si=HJTjALt5yFntR6-s" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Mueve el brazo a la posición mostrada en el diagrama y ponlo en espera.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Specifications.png" />
</div>

**Teleoperación simple**
¡Entonces estás listo para teleoperar tu robot! Ejecuta este script simple (no se conectará ni mostrará las cámaras):

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --robot.cameras='{}' \
  --control.type=teleoperate
```

Después de que el programa inicie, el botón Hold permanece funcional.



## Agregar cámaras

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/-p8K_-XxW8U?si=UmYWvEyKNPpTRxDC" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Después de insertar tus dos cámaras USB, ejecuta el siguiente script para verificar los números de puerto de las cámaras. Es importante recordar que la cámara no debe estar conectada a un Hub USB; en su lugar, debe estar conectada directamente al dispositivo. La velocidad más lenta de un Hub USB puede resultar en la incapacidad de leer datos de imagen.

```bash
python lerobot/common/robot_devices/cameras/opencv.py \
    --images-dir outputs/images_from_opencv_cameras
```

La terminal imprimirá la siguiente información. Por ejemplo, la cámara del portátil es `index 0`, y la cámara USB es `index 2`.

```markdown
Mac or X86 Ubuntu detected. Finding available camera indices through scanning all indices from 0 to 60
[...]
Camera found at index 0
Camera found at index 2
[...]
Connecting cameras
OpenCVCamera(0, fps=30.0, width=640, height=480, color_mode=rgb)
OpenCVCamera(2, fps=30.0, width=640, height=480, color_mode=rgb)
Saving images to outputs/images_from_opencv_cameras
Frame: 0000 Latency (ms): 39.52
[...]
Frame: 0046 Latency (ms): 40.07
Images have been saved to outputs/images_from_opencv_cameras
```

Puedes encontrar las imágenes tomadas por cada cámara en el directorio `outputs/images_from_opencv_cameras`, y confirmar la información del índice de puerto correspondiente a las cámaras en diferentes posiciones. Luego completa la alineación de los parámetros de la cámara en el archivo `lerobot-starai/lerobot/common/robot_devices/robots/configs.py`.

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/camera.png" />
</div>


```python
@RobotConfig.register_subclass("starai")
@dataclass
class StaraiRobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/starai"

    cameras: dict[str, CameraConfig] = field(
        default_factory=*lambda*: {
            "laptop": OpenCVCameraConfig(
                camera_index=2,             #<------ UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
            "phone": OpenCVCameraConfig(
                camera_index=0,             #<------ UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
        }
    )

​    mock: bool = False

```

Entonces podrás mostrar las cámaras en tu computadora mientras estés teleoperando:

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=teleoperate \
  --control.display_data=true
```

:::tip
Si encuentras un error como este.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" />
</div>

Puedes degradar la versión de rerun para resolver el problema.

```bash
pip3 install rerun-sdk==0.23
```

:::

## Grabar el conjunto de datos

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/OpaC0CA3-Mc?si=rbNhJJRkG9zngQB-" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Una vez que estés familiarizado con la teleoperación, puedes grabar tu primer conjunto de datos.

Si quieres usar las funciones del hub de Hugging Face para subir tu conjunto de datos y no lo has hecho previamente, asegúrate de haber iniciado sesión usando un token de acceso de escritura, que puede ser generado desde la [configuración de Hugging Face](https://huggingface.co/settings/tokens):

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Almacena el nombre de tu repositorio de Hugging Face en una variable para ejecutar estos comandos:

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

:::tip
Si no deseas usar la función de carga de conjuntos de datos del Hub de Hugging Face, puedes optar por `--control.push_to_hub=false`. Además, reemplaza `--control.repo_id=${HF_USER}/starai` con un nombre de carpeta local personalizado, como `--control.repo_id=starai/starai`. Los datos se almacenarán en el directorio `~/.cache/huggingface/lerobot` bajo el directorio home del sistema.
:::

Graba 20 episodios y sube tu conjunto de datos al hub:

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=${HF_USER}/starai \
  --control.tags='["starai","tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=20 \
  --control.display_data=true \
  --control.push_to_hub=ture

```

Don't upload to Hub:
**(Recommended, the following tutorials will mainly focus on local data)** 

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=starai/starai \#Asigna un nombre al archivo de almacenamiento local tú mismo
  --control.tags='["starai","tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=20 \
  --control.display_data=true \
  --control.push_to_hub=false #establece push_to_hub en false
```

You will see data similar to the following:
```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

```markdown
Explicaciones de Parámetros
- wormup-time-s: Se refiere al tiempo de inicialización.
- episode-time-s: Representa el tiempo para recopilar datos cada vez.
- reset-time-s: Es el tiempo de preparación entre cada recopilación de datos.
- num-episodes: Indica cuántos grupos de datos se espera recopilar.
- push-to-hub: Determina si subir los datos al HuggingFace Hub.
```

:::tip

- **Again**: "If you want to save the data locally (`--control.push_to_hub=false`), replace `--control.repo_id=${HF_USER}/starai` with a custom local folder name, such as `--control.repo_id=starai/starai`. It will then be stored in the system's home directory at `~/.cache/huggingface/lerobot`."

- Note: You can resume recording by adding `--control.resume=true`. Also if you didn't push your dataset yet, add `--control.local_files_only=true`. You will need to manually delete the dataset directory if you want to start recording from scratch.

- If you uploaded your dataset to the hub with `--control.push_to_hub=true`, you can [visualize your dataset online](https://huggingface.co/spaces/lerobot/visualize_dataset) by copy pasting your repo id given by:

- Press right arrow → at any time during episode recording to early stop and go to resetting. Same during resetting, to early stop and to go to the next episode recording.

- Press left arrow ← at any time during episode recording or resetting to early stop, cancel the current episode, and re-record it.

- Press escape ESC at any time during episode recording to end the session early and go straight to video encoding and dataset uploading.

- Once you're comfortable with data recording, you can create a larger dataset for training. A good starting task is grasping an object at different locations and placing it in a bin. We suggest recording at least 50 episodes, with 10 episodes per location. Keep the cameras fixed and maintain consistent grasping behavior throughout the recordings. Also make sure the object you are manipulating is visible on the camera's. A good rule of thumb is you should be able to do the task yourself by only looking at the camera images.

- In the following sections, you’ll train your neural network. After achieving reliable grasping performance, you can start introducing more variations during data collection, such as additional grasp locations, different grasping techniques, and altering camera positions.

- Avoid adding too much variation too quickly, as it may hinder your results.

- On Linux, if the left and right arrow keys and escape key don't have any effect during data recording, make sure you've set the $DISPLAY environment variable. See [pynput limitations](https://pynput.readthedocs.io/en/latest/limitations.html#linux).

:::


## Visualize the dataset

The dataset is saved locally. You can visualize it locally with:

```bash
python lerobot/scripts/visualize_dataset_html.py \
  --repo-id starai/starai \
```

Here, `starai/starai` is the custom `repo_id` name defined when collecting data.

## Replay an episode

Now try to replay the first episode on your robot:

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=replay \
  --control.fps=30 \
  --control.repo_id=starai/starai \
  --control.episode=0 \# 0 es el primer episodio
  --control.local_files_only=true
```

:::tip
The parameter `--control.local_files_only=true` is used to instruct the program to utilize local datasets rather than those from the Hub.
:::

## Train a policy

To train a policy to control your robot, use the `python lerobot/scripts/train.py` script. A few arguments are required. Here is an example command:

```bash
python lerobot/scripts/train.py \
  --dataset.repo_id=starai/starai \
  --policy.type=act \
  --output_dir=outputs/train/act_starai \
  --job_name=act_starai \
  --policy.device=cuda \
  --wandb.enable=false
```

Let's explain it:

1. We use our local dataset as argument `--dataset.repo_id=starai/starai`.
2. We provide the policy using `policy.type=act`, which will load the configuration from [`lerobot-starai/lerobot/common/policies/act/configuration_act.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/common/policies/act/configuration_act.py). Currently, ACT has been tested, but you can also try other policies such as diffusion, pi0, pi0fast, tdmpc, and vqbet.
3. We provided policy.device=cuda since we are training on a Nvidia GPU, but you could use policy.device=mps to train on Apple silicon.
4. We provided `wandb.enable=true` to use [Weights and Biases](https://docs.wandb.ai/quickstart) for visualizing training plots. This is optional but if you use it, make sure you are logged in by running `wandb login`.

If you want to train on a local dataset, make sure the `repo_id` matches the one used during data collection. Training should take several hours. You will find checkpoints in`outputs/train/act_starai/checkpoints` .

To resume training from a checkpoint, below is an example command to resume from last checkpoint of the `act_starai` :

```bash
python lerobot/scripts/train.py \
  --config_path=outputs/train/act_starai/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

## Evaluate your policy

You can use the `record` function from [`lerobot/scripts/control_robot.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/scripts/control_robot.py) , but with a policy checkpoint as input. For instance, run this command to record 10 evaluation episodes:

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=starai/eval_act_starai \
  --control.tags='["tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=0 \#Establece el tiempo de reinicio en 0 para omitir la fase de reinicio y asegurar operación continua.
  --control.num_episodes=10 \
  --control.push_to_hub=false \#Elige no subir al Hub
  --control.policy.path=outputs/train/act_starai/checkpoints/last/pretrained_model
```

As you can see, this is almost identical to the command previously used to record the training dataset. There are only two differences:

1. The `--control.policy.path` parameter has been added to indicate the path of your policy checkpoint (for example, `outputs/train/act_starai/checkpoints/last/pretrained_model`).
2. The name of the evaluation dataset **must** start with `eval` to reflect that you are running inference (for example, `--control.repo_id=starai/eval_act_starai`). This operation will record videos and data specifically during evaluation and save them to `eval_act_starai`.

:::warning
If an error occurs when you run the evaluation command for the second time, you need to delete the corresponding `eval_act_starai` file to ensure that there are no files with the same name under the directory `~/.cache/huggingface/lerobot/starai/`.
:::

:::tip
If you upload your model checkpoint to the Hub, you can also use the model repository (for example, `--control.repo_id=${HF_USER}/eval_act_starai`), while setting `--control.push_to_hub=true`.
:::

## FAQ

- If you are following this documentation/tutorial, please git clone the recommended GitHub repository `git clone https://github.com/servodevelop/lerobot-starai.git`.

- If you encounter the following error, you need to check whether the robotic arm connected to the corresponding port is powered on and whether the bus servos have any loose or disconnected cables.
  ```bash
  ConnectionError: Read failed due to comunication eror on port /dev/ttyACM0 for group key Present_Position_Shoulder_pan_Shoulder_lift_elbow_flex_wrist_flex_wrist_roll_griper: [TxRxResult] There is no status packet!
  ```

- If you have repaired or replaced any parts of the robotic arm, please completely delete the `~/lerobot/.cache/huggingface/calibration/so100` folder and recalibrate the robotic arm.

- If the remote control functions normally but the remote control with Camera fails to display the image interface, you can find [here](https://github.com/huggingface/lerobot/pull/757/files)

- If you encounter libtiff issues during dataset remote operation, please update the libtiff version.
  ```bash
  conda install libtiff==4.5.0  #para Ubuntu 22.04 es libtiff==4.5.1
  ```

- After executing the [Lerobot Installation](https://wiki.seeedstudio.com/lerobot_so100m/#install-lerobot), the GPU version of pytorch may be automatically uninstalled, so you need to manually install torch-gpu.

- For Jetson, please first install [Pytorch and Torchvsion](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) before executing `conda install -y -c conda-forge ffmpeg`, otherwise, when compiling torchvision, an ffmpeg version mismatch issue may occur.


- Si ocurre el siguiente problema, significa que tu computadora no soporta este formato de códec de video. Necesitas modificar la línea 134 en el archivo `lerobot-starai/lerobot/common/datasets/video_utils.py` cambiando el valor de `vcodec: str = "libsvtav1"` a `libx264` o `libopenh264`. Diferentes computadoras pueden requerir diferentes parámetros, así que puedes probar varias opciones. [Issues 705](https://github.com/huggingface/lerobot/issues/705)

  ```bash
  [vost#0:0 @ 0x13207240] Unknown encoder 'libsvtav1' [vost#0:0 @ 0x13207240] Error selecting an encoder Error opening output file /home/han/.cache/huggingface/lerobot/lyhhan/so100_test/videos/chunk-000/observation.images.laptop/episode_000000.mp4. Error opening output files: Encoder not found
  ``` 

- ¡¡¡Importante!!! Si durante la ejecución el cable del servo se afloja, por favor restaura el servo a su posición inicial y luego reconecta el cable del servo. También puedes calibrar individualmente un servo usando el [Comando de Inicialización del Servo](https://wiki.seeedstudio.com/es/lerobot_so100m/#configure-the-motors), asegurándote de que solo un cable esté conectado entre el servo y la placa del controlador durante la calibración individual. Si encuentras
  ```bash
  Auto-correct calibration of motor 'wrist roll' by shifting value by 1 full turns, from '-270 < -312.451171875 < 270degrees' to'-270<-312.451171875 < 270 degrees'.
  ```
  u otros errores durante el proceso de calibración del brazo robótico relacionados con ángulos y exceder valores límite, este método sigue siendo aplicable.

- Entrenar 50 conjuntos de datos ACT en una laptop 3060 de 8G toma aproximadamente 6 horas, mientras que en una computadora 4090 o A100, entrenar 50 conjuntos de datos toma alrededor de 2–3 horas.

- Durante la recolección de datos, asegúrate de que la posición de la cámara, el ángulo y la iluminación ambiental permanezcan estables, y minimiza capturar fondos inestables excesivos y peatones; de lo contrario, cambios ambientales significativos durante el despliegue pueden causar que el brazo robótico falle al agarrar correctamente.

- Asegúrate de que el parámetro `num-episodes` en el comando de recolección de datos esté configurado para recolectar datos suficientes, y no hagas pausa manual a la mitad. Esto es porque la media y varianza de los datos se calculan solo después de que la recolección de datos esté completa, lo cual es necesario para el entrenamiento.

- Si el programa indica que no puede leer los datos de imagen de la cámara USB, por favor asegúrate de que la cámara USB no esté conectada a un hub. La cámara USB debe estar conectada directamente al dispositivo para asegurar una velocidad de transmisión de imagen rápida.

- Si encuentras un error como `AttributeError: module 'rerun' has no attribute 'scalar'. Did you mean: 'scalars'?`, puedes degradar la versión de rerun para resolver el problema.

```bash
pip3 install rerun-sdk==0.23
```

:::tip
Si encuentras problemas de software o problemas de dependencias del entorno que no se pueden resolver, además de revisar la sección de FAQ al final de este tutorial, por favor reporta el problema oportunamente a la [plataforma LeRobot](https://github.com/huggingface/lerobot) o al [canal Discord de LeRobot](https://discord.gg/8TnwDdjFGU).
:::


## Cita

Documento Wiki en inglés de Seeedstudio：[Cómo usar el brazo robótico SO10xArm en la última versión de Lerobot](https://wiki.seeedstudio.com/es/lerobot_so100m_new/)

lerobot-starai github: [lerobot-starai](https://github.com/Welt-liu/lerobot-starai)

STEP: [STEP](https://github.com/Welt-liu/star-arm-moveit2/tree/main/hardware)

URDF: [URDF](https://github.com/Welt-liu/star-arm-moveit2/tree/main/src/cello_description)

StarAI Robot Arm moveit2: [star-arm-moveit2](https://github.com/Welt-liu/star-arm-moveit2)

Proyecto Huggingface: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

ACT o ALOHA: [Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware](https://tonyzhaozh.github.io/aloha/)

VQ-BeT: [VQ-BeT: Behavior Generation with Latent Actions](https://sjlee.cc/vq-bet/)

Diffusion Policy: [Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

TD-MPC: [TD-MPC](https://www.nicklashansen.com/td-mpc/)


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


