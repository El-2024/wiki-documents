---
description: LLM - integrated with Raspberry Pi5
title: ChatGPT - Raspberry Pi
keywords:
- Raspberry Pi
- LLM
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_lite_pi5
last_update:
  date: 07/19/2025
  author: Guillermo
---

Este proyecto integra entrada de voz, respuesta mediante un modelo de lenguaje, y salida de voz usando una Raspberry Pi 5. Utiliza el ReSpeaker Lite como dispositivo de entrada y salida de audio, lo que permite una interacción fluida con ChatGPT y servicios de conversión de voz a texto.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/pi.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

<!-- This project mainly implements three functions: voice input, large model response, and voice output. Respeaker lite is used as the audio input and output device, and Raspberry Pi 5 is used as the main control to connect the large model and speech-to-text conversion services. -->

## Hardware Requerido

* [ReSpeaker Lite USB 2-Mic Array](https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html)
* [Raspberry Pi 5](https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html)

## Primeros Pasos

Consulta la [documentación oficial de instalación](https://www.raspberrypi.com/documentation/computers/getting-started.html#getting-started-with-your-raspberry-pi) para configurar tu Raspberry Pi. Asegúrate de conectarla a una red.

:::note
Asegúrate de que tu versión de Python sea superior a `Python 3.7.1`.  
Para verificar la versión:
```
python3 --version
```
:::

### Instalar Librerías

```shell
sudo apt update
sudo apt install python3-pip python3-dev
sudo apt install portaudio19-dev
pip3 install pyaudio
pip3 install speechrecognition
pip3 install openai
pip3 install playsound
```
* Para la Raspberry Pi 5, ejecuta el siguiente comando para configurar ReSpeaker Lite:

```shell
pw-metadata -n settings 0 clock.force-rate 16000
```

>Para que el cambio sea permanente, descomenta y edita la línea `default.clock.rate` en `/etc/pipewire/pipewire.conf` (Primero cópialo desde `/usr/share/`).

:::tip
Comando para ajustar el volumen de ReSpeaker Lite:

```shell
alsamixer
```
:::

### Código

Este código en Python implementa un asistente de voz que escucha una palabra clave, reconoce comandos de voz del usuario, los convierte en texto, genera una respuesta usando `GPT-4` y reproduce esa respuesta por voz.

El dispositivo espera primero la palabra clave. Después de detectarla, escucha el comando del usuario. Una vez recibido, se genera una respuesta mediante GPT-4 y se convierte en voz.  
Si no se reconoce el comando después de **3 intentos**, el sistema volverá a esperar la palabra clave. Tendrás que decir la palabra clave de nuevo para iniciar una nueva sesión de interacción por voz.

- **Paso 1**: Configura tu clave API.

```shell
export OPENAI_API_KEY= 'your-api-key-here'
```

- **Paso 2**: Crea un archivo nuevo en Python e introduce el siguiente código.

```python
import speech_recognition as sr
from openai import OpenAI
from pathlib import Path
from pydub import AudioSegment
import os


client = OpenAI()

def text_to_speech(text):
    speech_file_path = Path(__file__).parent / "speech.mp3"
    response = client.audio.speech.create(
    model="tts-1",
    voice="alloy",
    input=text
    )

    response.stream_to_file(speech_file_path)
    audio = AudioSegment.from_mp3("speech.mp3")
    audio.export("speech.wav", format="wav")
    cmdline = 'aplay ' + " speech.wav" 
    os.system(cmdline)



# Initialize recognizer
recognizer = sr.Recognizer()
microphone = sr.Microphone()

# Define the wake word
WAKE_WORD = "hi"

def listen_for_wake_word():
    with microphone as source:
        recognizer.adjust_for_ambient_noise(source, duration=0.5)
        print("Listening for wake word...")
        
        while True:
            audio = recognizer.listen(source)
            # audio = recognizer.listen(source, timeout=5, phrase_time_limit=5)
            try:
                text = recognizer.recognize_google(audio).lower()
                if WAKE_WORD in text:
                    print(f"Wake word '{WAKE_WORD}' detected.")
                    text_to_speech("hi,what can i do for you?")
                    return True
            except sr.UnknownValueError:
                continue
            except sr.RequestError as e:
                print(f"Could not request results; {e}")
                continue

i=0
def listen_for_command():
    global i
    with microphone as source:
        print("Listening for command...")
        # audio = recognizer.listen(source)
        audio = recognizer.listen(source, timeout=5, phrase_time_limit=5)
        try:
            command = recognizer.recognize_google(audio)
            print(f"You said: {command}")
            i=0
            return command
        except sr.UnknownValueError:
            print("Could not understand the audio")
            i = i+1
        except sr.RequestError as e:
            print(f"Could not request results; {e}")
            i = i+1


def get_gpt_response(prompt):
    completion = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "Your name is speaker, you can answer all kinds of questions for me"},
        {"role": "user", "content": prompt}
    ]
    )

    content_string = completion.choices[0].message.content
    paragraphs = content_string.split('\n\n')
    combined_content = ' '.join(paragraphs)
    return combined_content




def main():
    global i
    while 1:
        flag = listen_for_wake_word()
        while flag == True:
            user_input = listen_for_command()
            if i==3:
                flag = False
                i = 0
            if user_input:
                gpt_response = get_gpt_response(user_input)
                print(f"GPT says: {gpt_response}")
                text_to_speech(gpt_response)
                

if __name__ == "__main__":
    main()
```

- **Paso 3**: Ejecuta el archivo Python.

<!--This code will wait for the voice input keyword `Hi`. When the keyword is entered, the system will start to detect the voice input command and pass the command to the openai API. After getting the reply, it will be broadcast in the form of voice; enter the keyword If the system does not detect voice input for 3 times, it will continue to enter the keyword waiting mode. At this point, you need to enter keywords to start the voice question and answer session. -->

```shell
python openai.py
```

¡Todo listo!  
Prueba decir `Hi` para activarlo y comienza a hablar con él.


<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/pi.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>