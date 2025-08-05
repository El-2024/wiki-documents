---
description:   Applications Kit ML101 with Prof. Vijay Course
title:   Aplicaciones ML101 con el Profesor Vijay
keywords:
- Wio_terminal Kit_with_Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-TinyML-Kit-Course
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Kit de Aplicaciones ML101 con el Profesor Vijay

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/HarvardKit/hardvarddetection2.png" /></div>

## Prefacio

## Descripción General

Vivimos en un mundo dominado por datos, y aunque el aprendizaje automático ha dado lugar a algunas implicaciones desafiantes, hay mucho que se puede hacer con él para mejorar el mundo — desde tareas simples como mantenerse seguro en las redes sociales hasta tareas más complejas como detectar patrones en laboratorios de investigación. Independientemente de tu industria o caso de uso, comprender los sistemas embebidos y el aprendizaje automático será invaluable en el futuro porque es en lo que se basan todas estas herramientas; sin saber cómo funcionan internamente, no podrás avanzar con ellas. Y esto aplica tanto para quienes buscan empleo hoy como para las futuras generaciones que entenderán cómo funcionan estas tecnologías antes de nacer.

Industrias como la manufactura y la automotriz ya se benefician del aprendizaje automático en forma de mantenimiento predictivo. Los algoritmos pueden ser entrenados para identificar patrones típicos de fallas en ciertos tipos de máquinas y componentes, tras lo cual pueden enviar alertas a los operadores o incluso tomar acciones correctivas de manera autónoma. De esta forma, los despliegues de internet industrial de las cosas (IIoT) pueden mejorar el tiempo de actividad de las plantas y reducir costos operativos. El mismo principio básico puede aplicarse en otros ámbitos; por ejemplo, los sistemas de gestión de tráfico podrían usar algoritmos de aprendizaje automático para predecir congestiones y ajustar el tiempo de los semáforos en consecuencia.

En el contexto de sistemas embebidos, tiny machine learning (aprendizaje automático diminuto) es un término importante de entender. Se refiere al uso de redes neuronales pequeñas y ligeras que pueden ser desplegadas en dispositivos con recursos limitados como microcontroladores. Los algoritmos de tiny machine learning pueden usarse para tareas como reconocimiento de objetos, clasificación y detección. Son adecuados para sistemas embebidos porque requieren relativamente pocos datos de entrenamiento y pueden lograr buena precisión con un número reducido de neuronas.

Las aplicaciones para tiny machine learning son muchas, y algunos ejemplos interesantes incluyen:

- Vehículos autónomos: Las redes neuronales pueden usarse para detectar obstáculos en el entorno y decidir cómo evitarlos.
- Seguridad en el hogar: Las redes neuronales pueden identificar personas y objetos en videos capturados por cámaras de seguridad.
- Salud: Los algoritmos pueden detectar anomalías en imágenes médicas o predecir riesgos de enfermedades.
- IoT industrial: Las redes neuronales pueden clasificar diferentes tipos de datos provenientes de sensores industriales.
- Retail: Las redes neuronales pueden identificar productos en imágenes y recomendar productos a los clientes.

Tiny machine learning es una excelente manera de comenzar con el aprendizaje automático si eres nuevo en el campo. También es una buena forma de aprender más sobre sistemas embebidos y cómo pueden usarse junto con algoritmos de aprendizaje automático. Si te interesa empezar, hay algunas cosas que debes saber. Primero, necesitarás acceso a una máquina que pueda ejecutar código de redes neuronales diminutas, como el Wio Terminal. Segundo, necesitarás datos de entrenamiento para el algoritmo que vas a usar. Revisaremos diferentes proyectos de ejemplo para entender los datos de entrenamiento. Tercero, tendrás que elegir un algoritmo de aprendizaje automático que se ajuste a tu aplicación. Usaremos redes neuronales para esto.

No te alarmes si alguna de estas palabras te resulta extraña. Este manual está diseñado para que los principiantes puedan iniciarse en TinyML. No importa tu edad, si quieres aprender algo, lo harás. Aprenderás a entrenar y desplegar modelos profundos de redes neuronales en dispositivos con microcontroladores ARM Cortex-M de Seeed Studio, usando lo último en software avanzado de ML con herramientas como TensorFlow Lite para Microcontroladores y Edge Impulse.

### Para Quién es Este Libro

Este libro está diseñado específicamente para educadores que deseen integrar el Wio Terminal en el aula o talleres para mostrar a los estudiantes el poder de TinyML. Proporciona los fundamentos básicos necesarios para enseñar los conceptos más elementales de ML mientras mantiene los conceptos anclados en ejercicios prácticos.

### Estructura del Curso

Este libro está diseñado para servir como un cuadernillo práctico para profesores y estudiantes que comienzan con TinyML. Idealmente, se podrán aprender los conceptos de este libro y enseñar los fundamentos del aprendizaje automático aplicado. La palabra clave es aplicado, ya que este curso se enfoca en la aplicación de conceptos de machine learning, más que en los aspectos técnicos y teóricos.

- Edad mínima de los estudiantes: 12+
- Número planeado de clases: 5 conferencias, 5 laboratorios y 2 proyectos
- Duración de proyectos prácticos: 45 minutos

### Requisitos del Curso

Conocimientos básicos de Arduino IDE y C++

### Materiales del Curso

Los materiales incluyen este manual y el “Kit de Inicio con TinyML” de SEEED Studio. Todo lo necesario para comenzar está disponible en este curso en una caja.

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Grove - Sensor Ultrasónico](https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html)
- [Grove - Sensor de Temp&Humi&Barómetro (BME280)](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)
- [Cables Grove](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-5-PCs-Pack-p-749.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/HarvardCourse1a.png" alt="pir" width="500" height="auto"/></p>

### Qué Aprenderás

Los usuarios de este libro aprenderán a entrenar y desplegar modelos profundos de redes neuronales en dispositivos con microcontroladores Cortex-M de Seeed Studio. El contenido del curso presenta XXX proyectos detallados paso a paso que permitirán a los estudiantes captar ideas básicas sobre el aprendizaje automático moderno y cómo puede usarse en microcontroladores de bajo consumo y tamaño reducido para crear sistemas inteligentes y conectados.

Al terminar el curso, los estudiantes podrán diseñar e implementar sus propios proyectos habilitados con aprendizaje automático en microcontroladores Cortex-M, comenzando desde la definición de un problema, recopilación de datos, entrenamiento del modelo de red neuronal y finalmente desplegándolo en el dispositivo para mostrar resultados de inferencia o controlar otros aparatos basados en esos datos. El contenido del curso está basado en el uso de la plataforma Edge Impulse, que simplifica la recolección de datos, entrenamiento del modelo y la conversión.

## Introducción

### Inteligencia Artificial para Principiantes

#### ¿Qué es la inteligencia artificial?

La Inteligencia Artificial, o IA, es la inteligencia demostrada por máquinas. A menudo se confunde con creatividad, inteligencia y conciencia. Pero no es ninguna de esas cosas. La IA se encuentra en muchos hogares modernos en forma de altavoces inteligentes como Amazon Echo o Google Home, que están programados para responder preguntas simples, darte actualizaciones de tráfico e incluso controlar otros dispositivos en tu hogar. Y aunque la mayoría cree saber de qué se trata la inteligencia artificial, ¡resulta que la mayoría está equivocada! La verdad es que la IA ha existido por mucho tiempo (desde 1951), pero solo recientemente (a principios de 2010) hemos visto su potencial para cambiar todo, desde cómo conducimos nuestros autos hasta cómo ordenamos comida para llevar. Así que veamos más de cerca qué es la IA y de qué se trata todo este alboroto.

#### ¿Cómo funciona la IA?

La IA funciona usando un proceso llamado "aprendizaje automático" (machine learning), sobre el cual aprenderemos mucho más adelante. Brevemente, es una forma para que las computadoras aprendan de datos sin ser programadas explícitamente. Por ejemplo, si quisieras enseñar a una computadora a reconocer fotos de gatos, primero tendrías que alimentarla con muchas fotos de gatos. Después, la computadora podría analizar nuevas fotos y decir si son gatos o no. Esto se hace con algo llamado red neuronal, que es un tipo de inteligencia artificial que puede aprender por sí sola analizando datos. Aprenderemos más sobre redes neuronales y cómo "entrenarlas" más adelante en el curso.

#### ¿Por qué es importante la IA?

Hay muchas razones por las que la IA es importante, pero una de las más relevantes es que tiene el potencial de resolver algunos de los problemas más grandes del mundo. Por ejemplo, la IA puede ayudar a doctores a diagnosticar enfermedades o ayudar a agricultores a predecir cosechas. La IA también puede usarse para crear nuevos medicamentos y mejorar filtros de spam en el correo electrónico. De hecho, no hay área de la vida que la IA no pueda tocar.

La inteligencia artificial ofrece varios beneficios sobre métodos tradicionales como la estadística y la regresión lineal. Algunos de estos beneficios incluyen:

- Los modelos de aprendizaje automático pueden aprender por sí solos, sin intervención manual.
- Pueden manejar grandes cantidades de datos más eficientemente que métodos tradicionales.
- Son capaces de identificar patrones demasiado complejos para que los humanos los detecten.

#### ¿Es segura la IA?

Una de las principales preocupaciones sobre la IA es que podría ser peligrosa. Después de todo, si las computadoras pueden aprender por sí solas, podrían aprender a hacer cosas malas. Sin embargo, los expertos coinciden en que el riesgo de que las computadoras se vuelvan "malvadas" es muy bajo. De hecho, el verdadero peligro con la IA viene de los humanos mismos. Por ejemplo, si se da demasiado poder a sistemas de IA, los humanos podrían encontrarse en peligro.

#### La Revolución de la IA

Una de las cosas más importantes a recordar sobre la IA es que no es solo otra tecnología genial. Es una revolución que tiene el poder de cambiar todo—incluyendo nuestra economía, sistemas sociales e incluso cómo vivimos. Eso puede sonar aterrador, pero los expertos coinciden en que si trabajamos juntos para aprovechar esta increíble tecnología, la inteligencia artificial podría ayudar a resolver algunos de los problemas más grandes del mundo.

Además, los expertos predicen que quienes adopten la IA tendrán más éxito que quienes se opongan. La clave aquí es la cooperación, así que únete a mí para aprender todo lo que puedas sobre IA porque vienen tiempos emocionantes. Ahora sal y edúcate sobre qué es la inteligencia artificial y cómo funciona para estar listo para el futuro de la IA.

#### La Base Conceptual de la IA

La inteligencia artificial no es solo otra tecnología que se ha vuelto común en la sociedad actual. La IA tiene el poder de revolucionar cada aspecto del mundo, incluyendo nuestra economía, sistema social e incluso nuestra forma de vivir. La IA ha avanzado mucho a lo largo de los años demostrando que es más que un proyecto de informática.

Las ideas subyacentes en la inteligencia artificial se originaron en el trabajo del filósofo británico Alan Turing sobre las capacidades intelectuales de las máquinas. Pasó su vida estudiando matemáticas e informática en la Universidad de Cambridge, donde luego fue académico. Su artículo "Computing Machinery and Intelligence" fue publicado en la revista Mind en 1950, con mucha gente asistiendo. En este artículo Turing propuso lo que se conoce como el 'Test de Turing', que se ha convertido en el estándar para determinar si una inteligencia artificial es lograda.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/HarvardCourse2a.png" alt="pir" width="200" height="auto"/></p>

Para pasar el Test de Turing, que implica que la inteligencia artificial imite rasgos de personalidad humana para engañar y hacer creer que se está hablando con otro humano en lugar de una máquina inteligente, la máquina debe hacerse pasar por humano más del 30% del tiempo. Aunque no es perfecto, muestra que la IA puede acercarse mucho al humano. "Computing Machinery and Intelligence" ha inspirado futuros trabajos literarios sobre inteligencia artificial, como el libro Robopocalypse de Daniel H. Wilson donde los robots toman el control del mundo al volverse conscientes. Aunque hay muchas otras obras y películas que abordan la IA, este es uno de los primeros artículos que propuso el test que aún se usa hoy.

Mientras el artículo de Turing permitió investigaciones futuras sobre inteligencia artificial, hubo otros hitos. En 1956 John McCarthy organizó un taller de verano en Dartmouth College dedicado al tema, conocido como Dartmouth Summer Research Project on Artificial Intelligence. Este fue un nuevo campo que exploró cómo hacer que las computadoras "piensen" y resuelvan problemas como los humanos. La pregunta de si una computadora puede pensar ha existido por años, pero esto la llevó a nuevas alturas reuniendo algunas de las mentes más brillantes en matemáticas e ingeniería.

Desde entonces, la inteligencia artificial ha crecido y se usa de muchas maneras. Uno de sus principales usos en la sociedad moderna es controlar electrodomésticos como altavoces inteligentes. Estos dispositivos están programados para responder preguntas simples, dar alertas e incluso controlar otros dispositivos IoT en tu hogar. La preocupación principal sobre un altavoz inteligente, por ejemplo, es si está siempre escuchándote. Aunque ha habido casos de dispositivos hackeados que grabaron conversaciones sin permiso, la mayoría de las empresas ha tomado precauciones para evitar estos problemas. Esto demuestra que la IA puede usarse de muchas formas beneficiosas para la sociedad.

Otra preocupación es cómo la inteligencia artificial afectará el empleo. Con el desarrollo de autos autónomos, por ejemplo, muchas personas temen por el futuro de los trabajos de transporte. Sin embargo, es importante entender que, aunque estas tecnologías pueden reemplazar algunos empleos a corto plazo, también crearán nuevas oportunidades laborales. Por ejemplo, el desarrollo de autos autónomos requerirá personas capacitadas en programación y reparación de estos vehículos. Por lo tanto, es importante no temer a las nuevas tecnologías sino adoptarlas y aprender a usarlas a nuestro favor.

En resumen, la inteligencia artificial ha avanzado mucho desde su concepción y puede usarse de muchas formas. Aunque existen preocupaciones que deben atenderse, muchas personas reconocen que la IA puede mejorar sus vidas de muchas maneras. Mientras las empresas tomen las precauciones adecuadas para proteger nuestra privacidad, la inteligencia artificial puede seguir creciendo con nosotros y ayudar a la sociedad a mejorar por muchos años más.

### Aprendizaje Automático y Aprendizaje Profundo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/8.png" alt="pir" width="800" height="auto"/></p>

#### Aprendizaje Automático

El aprendizaje automático es una rama de la inteligencia artificial (IA) centrada en construir aplicaciones que aprenden de los datos y mejoran su precisión con el tiempo sin ser programadas explícitamente para hacerlo. La base del aprendizaje automático es que, en lugar de tener que enseñar paso a paso, las máquinas, si se programan para pensar como nosotros, pueden aprender a trabajar observando, clasificando y aprendiendo de sus errores, tal como hacemos nosotros. El aprendizaje automático es un tipo de inteligencia artificial basado en la idea de que los programas informáticos pueden extraer información de los datos sin ser programados explícitamente. Analiza patrones en grandes conjuntos de datos y extrae de esos patrones reglas o algoritmos que luego se usan para hacer predicciones.

#### Aprendizaje Profundo

El aprendizaje profundo es un subconjunto del aprendizaje automático que utiliza redes neuronales artificiales profundas (de ahí su nombre) para aprender de grandes cantidades de datos. Está modelado según el funcionamiento interno del cerebro humano. Un programa de software contiene “neuronas” (similar a nuestro cerebro) con conexiones entre ellas. Estas conexiones se modifican al exponerse a nuevos datos, para saber cómo procesar la información de entrada. El aprendizaje profundo se diferencia del aprendizaje automático porque no se restringe al “aprendizaje supervisado”. Es como tener un profesor al lado que te dice exactamente qué hiciste bien o mal en cada paso de matemáticas. Solo puede “supervisarte” porque es experto en la materia. Por diseño asume supervisión. Sin embargo, el aprendizaje profundo también puede usar datos no supervisados, donde "profundo" se refiere a algoritmos que crean estructuras complejas a partir de datos no etiquetados, como imágenes o texto. A medida que avancemos en el curso, aprenderemos más sobre los detalles de estos métodos de aprendizaje.

#### Aplicaciones del Aprendizaje Profundo

El aprendizaje profundo se usa ampliamente en muchas industrias hoy en día. Se utiliza en finanzas para predicción del mercado bursátil, evaluación de riesgos y detección de fraudes. También se usa en marketing para segmentación de clientes, personalización y optimización de contenidos. En salud, se usa para diagnóstico, planificación de tratamientos y monitoreo de pacientes. Ha tenido un impacto transformador en nuestra sociedad.

Un ejemplo del impacto transformador que el aprendizaje automático ha tenido en la sociedad es cómo ha salvado dinero y vidas. Por ejemplo, como se mencionó antes, los algoritmos de aprendizaje profundo pueden predecir el comportamiento de acciones, como si subirán o bajarán. Estas predicciones guían estrategias de inversión y mejoran decisiones financieras. De manera similar, el aprendizaje profundo puede hacer predicciones médicas para mejorar diagnósticos y salvar vidas. Un estudio encontró que las redes neuronales profundas podían predecir pacientes con sepsis con más del 83% de precisión, frente a herramientas tradicionales con 55%. Las posibilidades son infinitas y los beneficios claros. El aprendizaje automático no solo puede hacer predicciones con mayor precisión que los humanos, sino que también lo hace mucho más rápido. ¿Qué esperas?

Tomemos otro ejemplo. La manufactura depende cada vez más de la tecnología informática, proporcionando datos en tiempo real sobre todos los aspectos de producción de formas antes inimaginables. Esto es muy evidente en la industria automotriz, donde los autos cada vez se ven menos como productos físicos y más como computadoras sobre ruedas.

El aprendizaje profundo se ha aplicado con gran efecto en la manufactura. Usando software que aprende constantemente de grandes cantidades de datos recolectados durante el proceso, las empresas aumentan la productividad y reducen desperdicios mediante mayor eficiencia. Las compañías obtienen beneficios económicos mientras los clientes reciben productos de mejor calidad a menor precio. El aprendizaje automático permite a los fabricantes mejorar continuamente sus procesos para crear bienes de mayor calidad más rápido y eficientemente que nunca.

El aprendizaje profundo ha mejorado productos que usamos diariamente como las recomendaciones de Netflix o las traducciones de Google Translate, pero también permite a empresas como Amazon y Uber ahorrar en costos de atención al cliente identificando rápidamente clientes insatisfechos. Lo que podría sorprender más es que muchos museos usan aprendizaje automático para monitorear sus pinturas y prevenir robos.

El aprendizaje profundo está cambiando cómo vivimos y trabajamos. Empresas de muchas industrias ya usan IA para su ventaja, mejorando productividad y haciendo predicciones más precisas que nunca. Ya sea que quieras usar aprendizaje profundo en tu negocio o simplemente entender cómo funciona, lo único que te separa de esta increíble tecnología es el conocimiento. ¿Por qué no dedicar tiempo hoy a aprender sobre una de las tecnologías más emocionantes de nuestro tiempo? El uso del aprendizaje automático sigue creciendo a medida que se desarrolla la inteligencia artificial. Con más datos recolectados cada día, las posibilidades son infinitas. Lo único que nos limita es entender cómo funciona. Así que tómate un tiempo hoy para aprender sobre esta increíble tecnología y ver cómo aplicarla en tu vida y trabajo. ¡No te arrepentirás!

#### Sesión de Preguntas y Respuestas

- ¿Cuál es la diferencia entre IA y aprendizaje automático?
- ¿Quién es Alan Turing?
- ¿Qué es el Test de Turing?
- Más allá de los ejemplos dados en este capítulo, ¿cuáles son otros grandes usos de la inteligencia artificial en negocios o nuestra vida diaria hoy?
- ¿Cuáles son algunos peligros o riesgos potenciales que trae la inteligencia artificial?
- ¿Crees que la IA llegará a ser autoconsciente como los humanos?

## El Futuro del Aprendizaje Automático es Pequeño y Brillante

Vivimos en un mundo dominado por datos, y aunque el aprendizaje automático ha generado implicaciones desafiantes, hay mucho que se puede hacer con él para mejorar el mundo — desde tareas simples como mantenerse seguro en redes sociales hasta tareas complejas como detectar patrones en laboratorios. Independientemente de tu industria o caso de uso, entender sistemas embebidos y aprendizaje automático será invaluable, pues es la base de todas estas herramientas; sin saber cómo funcionan por dentro, no avanzarás. Esto aplica tanto a quienes buscan empleo hoy como a futuras generaciones que comprenderán estas tecnologías antes de nacer.

Los sistemas embebidos están en todas partes y la mayoría no lo nota. Están en autos, microondas, electrodomésticos e incluso ropa. Un sistema embebido es un dispositivo que controla otro u otros dispositivos para realizar tareas específicas. Son críticos para el funcionamiento del mundo, responsables de que los autos circulen y los microondas cocinen. Sin ellos, el mundo sería muy diferente.

Existen varios tipos de sistemas embebidos. El más común es el microcontrolador. Una unidad microcontroladora (MCU) es una pequeña computadora embebida programable para controlar otros dispositivos. Se encuentran desde autos hasta electrodomésticos. Por ejemplo, el ARM Cortex M0+ y la placa Seeeduino XIAO, que es tan pequeña como un pulgar (21x17.8mm), consume solo 1.33 mAh (lo que implica 112 horas con una batería de 150 mA, mucho más en modo sueño profundo) y cuesta apenas 4.3 USD. Otro tipo común es el procesador de señal digital (DSP), usado para procesar señales digitales como audio y video, presente en smartphones y tablets. Más información en el Apéndice sobre Sistemas Embebidos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102010328/img/Seeeduino-XIAO-pin-out.jpg" alt="pir" width="300" height="auto"/></p>

El futuro traerá más dispositivos embebidos a nuestras vidas, como tecnología vestible tipo smartwatches y Fitbits. Los sistemas embebidos serán más complejos, con más funcionalidades. A medida que el mundo dependa más de ellos, es importante entender cómo funcionan y el rol que juegan, especialmente con el auge del aprendizaje automático.

Industrias como manufactura y automotriz ya se benefician del aprendizaje automático embebido en mantenimiento predictivo. Los algoritmos pueden identificar patrones típicos de fallas en máquinas y componentes, enviar alertas o tomar acciones correctivas autónomas. Así, los despliegues de IoT industrial mejoran la disponibilidad y reducen costos. El mismo principio aplica en otros ámbitos; por ejemplo, sistemas de gestión de tráfico que predicen congestiones y ajustan semáforos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/7.png" alt="pir" width="800" height="auto"/></p>

### Aprendizaje Automático en la Nube

El aprendizaje automático es una tecnología establecida usada en muchas industrias. Consiste en recolectar datos, procesarlos y extraer algoritmos para predecir eventos futuros. Es un subconjunto de IA. Los algoritmos suelen requerir mucho cálculo y grandes bases de datos, lo que limita la cantidad de experimentos y dificulta validar resultados. El aprendizaje automático en la nube ofrece un servicio que se encarga de la infraestructura pesada para que las empresas no tengan que manejar hardware costoso o infraestructura compleja.

### Aprendizaje Automático en el Borde (Edge)

La diferencia entre aprendizaje automático en la nube y en el borde es que en la nube los datos se procesan en un servidor central, mientras que en el borde se procesan localmente en dispositivos como teléfonos, autos o drones. El aprendizaje en el borde es importante porque permite tomar decisiones localmente y evita enviar toda la información a un servidor, lo que puede ser lento y costoso.

### Tiny Machine Learning

Otra tendencia creciente es el Tiny Machine Learning (TinyML). El aprendizaje automático involucra entrenar modelos con muchos datos y calcular parámetros basados en relaciones estadísticas. Generalmente requiere mucho procesamiento y grandes datasets, lo que dificulta entrenar modelos con pocos datos. Esto es especialmente cierto para algoritmos de clasificación donde se deben conocer las clases antes de entrenar.

TinyML es un subconjunto del aprendizaje automático que se enfoca en entrenar modelos con datos y recursos limitados. Es ideal para aplicaciones donde los algoritmos tradicionales son muy costosos o difíciles de implementar. TinyML se usa en aplicaciones que van desde manufactura inteligente hasta vehículos autónomos.

Una razón por la que TinyML gana popularidad es que los microcontroladores en dispositivos edge son cada vez más potentes y económicos. Son pequeñas computadoras usadas en muchos dispositivos, y se vuelven más potentes conforme la industria avanza hacia geometrías más pequeñas. Esto permite ejecutar algoritmos TinyML en dispositivos edge como teléfonos, autos o drones sin consumir mucha energía ni espacio.

#### Tiny Machine Learning para Sistemas IoT

Los microcontroladores son cada vez más potentes, pero tienen memoria y capacidad de cómputo limitadas comparadas con servidores tradicionales. Algoritmos que requieren grandes datos o cálculos complejos no pueden ejecutarse sin rediseñar estos dispositivos. TinyML abre nuevas posibilidades, especialmente en IoT, donde sistemas simples se usan en aplicaciones novedosas como implantes médicos inteligentes o autos autónomos.

Gracias a avances recientes en optimización de modelos y frameworks diseñados para inferencia en microcontroladores, ahora podemos usar redes neuronales para reconocer escenas de audio (actividad de elefantes o vidrio rompiéndose), detectar palabras clave (activar un gadget con una frase) e incluso reconocer imágenes simples. Estos dispositivos pueden darle nueva vida y sentido a sensores existentes, como usar un acelerómetro para detectar anomalías y mantenimiento predictivo, o distinguir tipos de licores, ¡como muestra esta demo! El potencial de TinyML es realmente ilimitado.

#### ¿Cómo Funciona Tiny Machine Learning?

Los algoritmos TinyML están diseñados para funcionar con pequeños conjuntos de datos procesables en microcontroladores o sistemas embebidos. Usan técnicas como regresión lineal o redes neuronales, que pueden implementarse con muy poco código. Los modelos se pueden entrenar con datos limitados y adaptarse más fácilmente a cambios que los algoritmos tradicionales.

Esto hace de TinyML una opción ideal para aplicaciones donde los datos son escasos o difíciles de recolectar, como vehículos autónomos o dispositivos médicos. También permite desarrollar modelos para dispositivos de bajo consumo y memoria limitada.

#### Recursos Limitados, Pero También la Competencia

El uso de TinyML aún está en sus inicios, y la mayoría de la investigación se enfoca en nuevas formas de implementar estos algoritmos en dispositivos pequeños. Esto deja mucho espacio para innovación y oportunidades para emprendedores que lleven el aprendizaje automático a nuevos mercados. Al mismo tiempo, la competencia será fuerte. Grandes empresas como Google y Amazon invierten mucho en aprendizaje automático y probablemente ingresen al mercado TinyML, lo que puede ser un desafío para startups pequeñas.

### Sesión de Preguntas y Respuestas

- ¿Puedes explicar las diferencias entre aprendizaje automático en la nube, en el borde y embebido?
- ¿Qué necesita aprender una máquina pequeña?
- ¿Existen limitaciones en el TinyML?
- ¿Cómo podemos usar TinyML en casa o en la oficina?
- ¿Cómo llegan estas máquinas a conclusiones basadas en sus datos y qué tan pequeños son estos conjuntos típicamente?
- ¿Cuándo es mejor usar una máquina grande en lugar de un sistema TinyML?

## Taxonomía de Algoritmos de Aprendizaje Automático

Existen tres grandes clases de algoritmos de aprendizaje automático: supervisados, no supervisados y de refuerzo. En los algoritmos supervisados, la máquina recibe un conjunto de datos de entrenamiento y aprende para hacer predicciones sobre nuevos datos. Los algoritmos no supervisados ayudan a explorar el conjunto de datos para encontrar patrones ocultos sin un resultado específico. Los algoritmos de refuerzo aprenden mediante prueba y error. Cada algoritmo resuelve un problema de aprendizaje automático diferente, y algunos problemas solo son solucionables con ciertos algoritmos específicos.

### Aprendizaje Supervisado

#### ¿Qué es el Aprendizaje Supervisado?

El aprendizaje supervisado es la tarea de encontrar una función que mapee una entrada a una salida basándose en pares de entrada-salida de ejemplo. Se llama "supervisado" porque la máquina depende de algún tipo de supervisión (por ejemplo, un "profesor") para aprender de su entorno y mejorar su rendimiento. En este caso, la máquina no puede aprender completamente sin ayuda humana; necesita orientación y retroalimentación sobre qué entradas llevan a las salidas deseadas.

#### ¿Cómo Funciona el Aprendizaje Supervisado?

En el aprendizaje supervisado, la persona que entrena la máquina realiza tareas de tres tipos: etiquetado, categorización o medición. 

- **Etiquetado:** Asignar una categoría a un ítem, por ejemplo, etiquetar todas las manzanas con la etiqueta "manzana".
- **Categorización:** Agrupar ítems según alguna propiedad compartida, por ejemplo, agrupar todos los animales juntos.
- **Medición:** Evaluar una propiedad como tamaño o peso y proporcionar un valor cuantitativo, por ejemplo, contar cuántas manzanas hay en una cesta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/6.png" alt="pir" width="800" height="auto"/></p>

El objetivo del aprendizaje supervisado es construir modelos basados en datos históricos que ayuden a predecir resultados y tomar decisiones. Entrenar estos algoritmos requiere tiempo y esfuerzo, pero trae muchos beneficios. Cuantos más datos se proporcionen, mejor será el modelo para predecir resultados. Los algoritmos pueden usar etiquetas como "saludable" o "enfermo", e incorporar propiedades categóricas como color de piel o sexo, ayudando a limitar sesgos y aumentar la precisión.

El aprendizaje supervisado es una herramienta poderosa con muchas aplicaciones:

- Los minoristas pueden predecir el comportamiento de los clientes y personalizar ofertas.
- Científicos de datos pueden modelar lenguaje natural y encontrar patrones en datos no estructurados.
- La salud puede usarlo para predecir resultados médicos en poblaciones.

#### Beneficios del Aprendizaje Supervisado

Permite a los científicos de datos construir modelos basados en datos etiquetados o categorizados. Entrenar el algoritmo con estos datos enseña qué buscar y cómo clasificar información futura.

#### ¿Quién Puede Realizar Aprendizaje Supervisado?

Generalmente, lo hacen científicos de datos que preparan datos con etiquetas (como "saludable" o "enfermo") para entrenar algoritmos que luego clasificarán datos nuevos correctamente.

#### Desventajas del Aprendizaje Supervisado

Funciona mejor con grandes cantidades de datos etiquetados. Si hay poca información, es difícil entrenar modelos precisos. Además, si los datos contienen sesgos humanos, estos se reproducirán en los modelos.

#### Ejemplo de Aprendizaje Supervisado

Un uso común es la detección de fraudes, donde compañías de tarjetas de crédito usan algoritmos supervisados para identificar patrones inusuales en gastos que sugieren fraude, como cargos masivos en poco tiempo.

#### Limitaciones del Aprendizaje Supervisado

Además de requerir muchos datos, el rendimiento depende de la calidad humana en la creación y supervisión del modelo. Sesgos en datos generan sesgos en resultados.

#### Futuro del Aprendizaje Supervisado

Con el crecimiento de datos, la necesidad de interpretar información de forma precisa es crucial. El aprendizaje supervisado seguirá siendo clave y la demanda de científicos de datos crecerá, integrándose más en operaciones comerciales.

#### Ejemplo Simple de Aprendizaje Supervisado

La regresión lineal es un ejemplo clásico. Consiste en ajustar una línea a puntos de datos (x, y) minimizando un error (función de costo).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/4.png" alt="pir" width="600" height="auto"/></p>

En aprendizaje supervisado, cada ejemplo es un par de entrada (vector) y salida deseada (señal supervisora). El algoritmo ajusta sus parámetros para que las predicciones se acerquen a los valores objetivo.

También se usa para clasificación, que es asignar una entrada a una categoría predefinida, como distinguir imágenes de perros y gatos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/2.png" alt="pir" width="600" height="auto"/></p>

### Aprendizaje No Supervisado

#### ¿Qué es el Aprendizaje No Supervisado?

Es otro tipo de aprendizaje automático que está ganando popularidad. Combina la potencia de las máquinas con la capacidad humana para organizar, etiquetar e interpretar datos. Se usa para tareas como reducción de dimensionalidad, clustering, visualización y selección de características.

- **Reducción de dimensionalidad:** Reducir el número de variables en un conjunto de datos, por ejemplo transformándolo a un espacio con menos dimensiones.
- **Clustering:** Agrupar ítems similares.
- **Visualización:** Mostrar datos de forma que sea fácil de entender.
- **Selección de características:** Elegir un subconjunto de características para reducir tamaño o facilitar entrenamiento.

#### ¿Cómo Funciona el Aprendizaje No Supervisado?

Los algoritmos buscan patrones en los datos sin etiquetas. Hay muchos tipos, como k-means, k-nearest neighbor, clustering jerárquico, entre otros.

El proceso incluye: 

1. Preprocesamiento (limpieza y preparación),
2. Exploración de datos,
3. Detección de patrones,
4. Postprocesamiento para mejorar el modelo y prepararlo para despliegue.

#### Ventajas y Desventajas del Aprendizaje No Supervisado

Ventajas:

- Puede realizar tareas difíciles para humanos, como encontrar patrones ocultos.
- Mejora algoritmos supervisados ayudando a descubrir grupos dentro de datos.
- Proporciona insights para nuevas aplicaciones y problemas, como descubrir genes asociados a enfermedades.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/5.png" alt="pir" width="600" height="auto"/></p>

Desventajas:

- Aún es área emergente con retos importantes.
- Los algoritmos no siempre encuentran todos los patrones deseados.
- Puede ser lento y costoso computacionalmente.

El aprendizaje no supervisado es un campo prometedor con potencial para grandes contribuciones en investigación.

### Aprendizaje por Refuerzo

#### ¿Qué es el Aprendizaje por Refuerzo?

El último de los tipos es el aprendizaje por refuerzo, que es un tipo de aprendizaje automático que puede enseñar a las computadoras a realizar tareas recompensándolas por ciertos comportamientos. El aprendizaje por refuerzo a menudo implica proporcionar a la computadora un entorno simulado en el que pueda aprender, con el objetivo final de que complete tareas en el mundo real.

El aprendizaje por refuerzo es un área de la investigación en inteligencia artificial que se ocupa de cómo los agentes de software deben tomar acciones en un entorno para maximizar alguna noción de recompensa acumulativa. La señal de refuerzo puede ser explícita, como una "recompensa" entregada tras completar una tarea, o más sutil, como un "castigo" después de una acción incorrecta; las señales de refuerzo no se limitan a formas puramente positivas o negativas, sino a cualquier retroalimentación que informe el comportamiento y afecte la toma de decisiones futura (por ejemplo, si te elogian por una pintura que hiciste, esto puede hacer que tengas más probabilidades de pintar en el futuro).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/1.png" alt="pir" width="600" height="auto"/></p>

#### ¿Cómo Funciona el Aprendizaje por Refuerzo?

En el aprendizaje por refuerzo, las señales de refuerzo suelen ser escasas, ya que es difícil verificar si una señal implica refuerzo o no. Esto significa que los algoritmos de aprendizaje por refuerzo a menudo deben asumir que las señales de refuerzo que reciben son válidas y, por lo tanto, aprenden una función de valor que busca maximizar una suma ponderada de estimaciones de recompensas futuras en lugar de solo la recompensa inmediata. En el caso de que esta suposición no sea cierta, los algoritmos intentarán maximizar las recompensas futuras descontadas esperadas.

Uno de los primeros métodos de aprendizaje por refuerzo, desarrollado a principios de los años 60, fue el algoritmo Q-learning. Q-learning es una técnica de aprendizaje por refuerzo sin modelo que funciona aprendiendo una función óptima de valor-acción (Q) para cada estado en un proceso de decisión de Markov (MDP), utilizando una señal de refuerzo para actualizar los valores. El algoritmo comienza con una estimación de Q(s) para cada estado s, y luego actualiza iterativamente estas estimaciones usando una señal de refuerzo r(s,a) que indica qué tan buena o mala fue la acción tomada en el estado s. En otras palabras, Q-learning intenta aprender una política que mapee los estados del mundo a la mejor acción a tomar en esos estados.

En el aprendizaje por refuerzo, a veces podemos definir el Aprendizaje por Transferencia como un método donde un agente aprende de su experiencia pasada sin interacción humana. El castigo implica reducir la recompensa, por ejemplo, matar o devolver algo al remitente. La recompensa implica aumentar la recompensa, por ejemplo, presionar el botón de reproducción en un reproductor multimedia (esto depende de tu entorno).

#### ¿Cuáles Son Algunas Aplicaciones del Aprendizaje por Refuerzo?

El aprendizaje por refuerzo puede aplicarse en el desarrollo de videojuegos para puzzles basados en refuerzo como Sokoban y juegos de estrategia en tiempo real como Age of Empires II: The Age Of Kings; también puede usarse en temas empresariales como reclutamiento y colocación de empleados (sistemas de recomendación), control de agentes de software y control de robots.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/TinyMLKit.png" alt="pir" width="500" height="auto"/></p>

En la figura anterior, el nodo amarillo de la capa de entrada representa una neurona que recibe una entrada de una capa previa. Cada una de estas neuronas puede tener pesos (in1, in2, in3) aplicados antes de ser transmitidos como señal, y la suma ponderada de las entradas para esa neurona activará uno o más nodos en la siguiente capa. Este proceso se repite con cada capa sucesiva hasta que determinamos el valor de salida. Como puedes ver, esto hace muy fácil representar reglas complejas de toma de decisiones usando algoritmos derivados matemáticamente (aunque hacer que funcionen correctamente es otro tema).

Para que las Redes Neuronales Artificiales (ANN) aprendan, necesitan una enorme cantidad de información llamada conjunto de entrenamiento. Cuando intentas enseñar a una ANN a diferenciar un gato de un perro, el conjunto de entrenamiento provee miles de imágenes etiquetadas como perro para que la red comience a aprender. Una vez entrenada con una cantidad significativa de datos, intentará clasificar datos futuros basándose en lo que cree estar viendo (o escuchando, dependiendo del conjunto de datos) a través de las distintas unidades. Durante el entrenamiento, la salida de la máquina se compara con la descripción humana de lo que se debería observar. Si coinciden, la máquina se valida. Si no, usa retropropagación para ajustar su aprendizaje — regresando por las capas para modificar la ecuación matemática. Conocido como aprendizaje profundo, esto es lo que hace inteligente a una red.

Normalmente, las Redes Neuronales Profundas requieren recursos computacionales bastante potentes para ser entrenadas y desplegadas. Sin embargo, recientemente ha surgido una rama del ML en el Edge o Aprendizaje Automático Embebido llamada TinyML, que representa una técnica o campo de estudio en aprendizaje automático y sistemas embebidos que explora qué aplicaciones de ML (una vez reducidas, optimizadas e integradas) pueden ejecutarse en dispositivos tan pequeños como microcontroladores.

Existen muchos otros algoritmos de aprendizaje automático para diferentes tareas. Es importante elegir el algoritmo correcto para el trabajo y no intentar forzar un algoritmo para algo para lo que no fue diseñado. Esto puede resultar en baja precisión de clasificación o predicciones incorrectas.

## Introducción al Aprendizaje Profundo

Esta sección ofrece una visión general muy general del aprendizaje profundo, específicamente en relación con las Redes Neuronales Artificiales, a las que en adelante nos referiremos brevemente como Redes Neuronales. Una red neuronal artificial (ANN) es un sistema computacional modelado a partir del cerebro.

### ¿Qué son las Redes Neuronales?

En general, las redes neuronales son una herramienta poderosa para entender y predecir patrones complejos en los datos. Están compuestas por un gran número de nodos interconectados, o neuronas, que pueden aprender a reconocer patrones en los datos de entrada. Se tiene un conjunto de nodos llamados neuronas de entrada, seguidos por una colección de capas ocultas que finalmente culminan en una capa de salida que ayuda a tomar decisiones informadas. Con los datos adecuados, las redes neuronales pueden entrenarse para aprender y hacer predicciones sorprendentemente precisas. Sin embargo, también son muy intensivas en cómputo y pueden ser difíciles de entrenar. Además, las redes neuronales a menudo son opacas en su toma de decisiones, lo que puede ser un problema al intentar explicar sus predicciones a humanos. No obstante, las redes neuronales son una herramienta poderosa que puede usarse con gran eficacia cuando se aplican al problema correcto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/new2.png" alt="pir" width="500" height="auto"/></p>

Las redes neuronales son una herramienta poderosa para entender y predecir patrones complejos en los datos. Sin embargo, también son muy intensivas en cómputo y pueden ser difíciles de entrenar. Además, las redes neuronales a menudo son opacas en su toma de decisiones, lo que puede ser un problema al intentar explicar sus predicciones a humanos. No obstante, las redes neuronales son una herramienta poderosa que puede usarse con gran eficacia cuando se aplican al problema correcto.

### ¿Qué es el Entrenamiento en Aprendizaje Profundo?

Para entrenar una red neuronal, necesitas proporcionarle un conjunto de datos de entrenamiento y un conjunto de parámetros que determinen cómo aprenderá la red. El conjunto de datos contiene un conjunto de datos de entrada junto con la salida deseada para cada punto de datos. La red neuronal usará estos datos para aprender a reconocer patrones en la entrada y producir la salida correcta. Los parámetros que debes configurar dependen del tipo de red neuronal que uses, pero típicamente incluyen la tasa de aprendizaje, el número de iteraciones y el tamaño de la capa oculta.

Los pesos en el entrenamiento de aprendizaje automático juegan un papel crítico en el éxito del algoritmo. Los pesos que se encuentran en la intersección de las neuronas (aristas) determinan cuánto influye cada entrada en la salida del modelo. Para lograr los mejores resultados, es importante elegir los pesos correctos para tu conjunto de datos. Un método común para determinar los pesos correctos se llama regla delta. La regla delta es una fórmula matemática que calcula el error entre la salida predicha y la salida real. Este error se usa para ajustar los pesos del algoritmo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/new.png" alt="pir" width="500" height="auto"/></p>

Existen varias formas de entrenar modelos de aprendizaje automático, pero el enfoque más popular es usar una técnica llamada retropropagación. La retropropagación es un tipo de algoritmo de entrenamiento usado para entrenar redes neuronales. Funciona propagando el gradiente del error hacia atrás a través de la red, de modo que los pesos puedan actualizarse para reducir el error. La retropropagación es una forma eficiente de entrenar redes neuronales y ha demostrado ser exitosa en una variedad de tareas. Una de las ventajas de la retropropagación es que puede usarse para entrenar redes neuronales con múltiples capas. Esto se debe a que el gradiente del error se propaga hacia atrás por todas las capas, de modo que todos los pesos pueden actualizarse. La retropropagación también es relativamente fácil de implementar, lo que la hace popular para entrenar redes neuronales.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/new1.png" alt="pir" width="500" height="auto"/></p>

Sin embargo, la retropropagación tiene algunas desventajas. Una es que puede ser lenta para entrenar redes neuronales grandes. Otra es que a veces puede ser inestable, lo que significa que los pesos pueden divergir en lugar de converger. Finalmente, requiere acceso a los datos de entrenamiento para funcionar, lo que puede ser un problema si los datos no están disponibles fácilmente. A pesar de estas desventajas, la retropropagación sigue siendo popular porque es un algoritmo eficiente y relativamente fácil de usar. Si estás interesado en entrenar tu propia red neuronal, la retropropagación puede ser una buena opción.

### ¿Qué es la Inferencia en Aprendizaje Profundo?

La inferencia en aprendizaje automático es el proceso de usar un modelo entrenado para hacer predicciones sobre datos nuevos. En general, existen dos tipos de inferencia: en línea y por lotes. La inferencia en línea hace predicciones a medida que llegan los datos, mientras que la inferencia por lotes calcula predicciones para un gran lote de datos de una sola vez. Las redes neuronales son adecuadas para la inferencia en línea porque pueden hacer predicciones muy rápido. Esto es importante para tareas como el reconocimiento facial, donde necesitas identificar una cara en tiempo real. La inferencia por lotes también es importante para aplicaciones como la predicción del mercado de valores y el pronóstico del clima, donde necesitas hacer predicciones para muchos datos al mismo tiempo.

## Ciclo de Vida del Aprendizaje Automático

El ciclo de vida del aprendizaje automático se define como un proceso cíclico que involucra tres fases (desarrollo del pipeline, fase de entrenamiento y fase de inferencia) llevado a cabo por científicos de datos e ingenieros de datos para desarrollar, entrenar y servir modelos usando la gran cantidad de datos que intervienen en aplicaciones como robótica, sistemas de reconocimiento de voz, optimización de motores de búsqueda (SEO), medicina, finanzas, entre otros. El objetivo de este artículo es proporcionar una comprensión profunda del ciclo de vida del aprendizaje automático y su importancia en el campo de la ciencia de datos.

La primera fase es la fase de desarrollo del pipeline. En esta fase, el científico de datos y el ingeniero trabajan juntos para desarrollar un pipeline de procesamiento de datos que se pueda usar para adquirir, limpiar, procesar y preentrenar los conjuntos de datos. El objetivo principal es asegurarse de que los datos estén listos para el entrenamiento y la inferencia. La segunda fase es la fase de entrenamiento donde se entrenan los modelos usando los conjuntos de datos. Esta fase requiere mucho tiempo y esfuerzo ya que implica experimentar con diferentes algoritmos y parámetros para encontrar el mejor modelo para la predicción. La última fase es la fase de inferencia donde se usan los modelos para hacer predicciones. En esta fase, el científico y el ingeniero trabajan juntos para desplegar los modelos en producción y asegurarse de que funcionen correctamente.

El ciclo de vida es importante porque ayuda a científicos e ingenieros de datos a desarrollar, entrenar y servir modelos con grandes cantidades de datos en diversas aplicaciones. También ayuda a evitar errores comunes durante las fases de entrenamiento e inferencia. El ciclo de vida es un proceso cíclico, lo que significa que puede repetirse varias veces para mejorar la precisión de los modelos. Por lo tanto, es una herramienta esencial para quienes desean ser científicos o ingenieros de datos.

El flujo de trabajo para casi cualquier aprendizaje automático puede resumirse en los siguientes pasos:

1. Recolectar y limpiar los datos  
2. Preparar y configurar los parámetros  
3. Entrenar el modelo de aprendizaje automático  
4. Evaluar el rendimiento del modelo  
5. Desplegar en producción o usar para entrenamiento adicional, según sea necesario.

Aunque estos pasos parecen simples, pueden tomar mucho tiempo en completarse. En los próximos capítulos, profundizaremos en cada uno de estos pasos y entenderemos sus detalles.

### Recolección de Datos

La recolección de datos es el primer paso en el ciclo de vida del aprendizaje automático. El científico de datos y el ingeniero de datos necesitan recopilar una gran cantidad de datos para desarrollar, entrenar y poner en servicio los modelos. Los datos se usan en diversas aplicaciones como reconocimiento de imágenes, análisis de video, procesamiento de lenguaje natural, análisis predictivo y muchas más.

### Preprocesamiento

El preprocesamiento es el segundo paso que deben realizar el científico de datos y el ingeniero en el ciclo de vida del aprendizaje automático. Los datos deben limpiarse y prepararse para el análisis antes de ser introducidos en el algoritmo de aprendizaje automático. El preprocesamiento es vital porque incluye tareas como limpieza de datos, exploración de datos, visualización, reducción y transformación. Estas son importantes para el desarrollo de modelos de aprendizaje automático, ya que generalmente se aplican a conjuntos de datos sin procesar. Después de procesar los datos, es momento de elegir un algoritmo. El algoritmo determinará cómo la computadora aprenderá de los datos.

### Entrenamiento

El entrenamiento en aprendizaje automático es el tercer paso del ciclo de vida. El proceso de entrenamiento consta de dos fases: la fase de entrenamiento y la de inferencia. Un científico de datos entrena un modelo de aprendizaje automático, que luego se usa para predecir resultados en conjuntos de datos distintos a los usados para entrenarlo. El entrenamiento implica seleccionar una arquitectura de red neuronal que se adapte mejor a la tarea. Una vez seleccionado el algoritmo, el siguiente paso es configurar los parámetros de la arquitectura de la red neuronal. Estos parámetros incluyen el número de capas, el tipo de función de activación y la tasa de aprendizaje. Tras configurar los parámetros, se entrena el modelo. Este proceso puede ser largo, dependiendo del tamaño y complejidad del conjunto de datos.

### Optimización

Existen varias maneras de optimizar un modelo de aprendizaje automático: comprimirlo, podarlo y cuantificarlo. La compresión reduce el tamaño del modelo eliminando características no importantes para la tarea. La poda elimina pesos de neuronas que no son relevantes. La cuantificación convierte números de punto flotante a enteros para ahorrar espacio y tiempo. Estas optimizaciones hacen que los modelos funcionen más rápido y reduzcan el consumo de memoria en el sistema.

### Despliegue

La fase de despliegue es el cuarto y último paso del ciclo de vida del aprendizaje automático. En esta fase, el modelo se implementa en un entorno donde puede usarse para hacer predicciones. Esto puede ser en la nube, local, en dispositivos móviles o, en nuestro caso, dispositivos pequeños (tiny devices). Una vez entrenado, el modelo está listo para usarse en la plataforma elegida. Puede desplegarse en producción o usarse para entrenamiento adicional. El paso final es evaluar el rendimiento del modelo comparando las predicciones con los resultados reales.

### Evaluación

La inferencia en aprendizaje automático es el proceso de hacer predicciones sobre nuevos datos usando un modelo entrenado con datos diferentes. La inferencia es importante porque permite usar el modelo para predecir en datos que no se habían visto antes, ayudando a mejorar la comprensión del modelo y los datos.

El ciclo de vida del aprendizaje automático es un proceso cíclico que transforma datos en bruto en conocimientos útiles mediante algoritmos predictivos. El ciclo consta de tres fases: (1) recolección de datos, (2) preprocesamiento y (3) entrenamiento. El objetivo principal es mejorar la precisión de las predicciones de los modelos.

### Sesión de Preguntas y Respuestas

P. ¿Cuáles son las tres fases del ciclo de vida del aprendizaje automático?

P. ¿Cuál fase es la más importante para obtener predicciones precisas?

P. ¿Cómo podemos evaluar modelos de aprendizaje automático?

## Recolección de Datos

### ¿Qué es la Recolección de Datos?

Para que un modelo de aprendizaje automático sea efectivo, debe entrenarse con datos de alta calidad. La calidad depende de la variación que contenga y la corrección de sus etiquetas. Es importante seleccionar datos representativos del problema real que se quiere resolver. La recolección de datos es el proceso de reunir y medir información de múltiples fuentes diferentes.

### ¿Qué son los Datos de Entrenamiento?

Los datos de entrenamiento son los que se usan para entrenar modelos de aprendizaje automático. Enseñan al algoritmo a identificar patrones relevantes en datos no estructurados. Para determinar si los datos son aptos para entrenamiento, deben cumplir ciertas propiedades clave:

- Ser representativos de la población de la que se obtuvieron.  
- Tener representación equitativa de múltiples clases (e.g., "gatos" vs. "perros") para evitar sesgos.  
- Que las variables tengan niveles de medición significativos, asignando valores numéricos a categorías discretas.

### ¿Qué son las Divisiones de Datos de Entrenamiento?

Los datos de entrenamiento se dividen en particiones. Cuando se particiona un conjunto, se separa en un conjunto de entrenamiento y uno de prueba. El algoritmo se entrena primero con el conjunto de entrenamiento y luego se prueba con el conjunto de prueba para evaluar su eficacia. Algunas técnicas para particionar incluyen:

- División aleatoria en dos conjuntos.  
- División estratificada para mantener la distribución en ambos conjuntos.  
- Uso de algoritmos para particionar inteligentemente.

La regla general es la 80:10:10. 80% para entrenar, 10% para validar y mejorar el entrenamiento, y 10% para validar la precisión final antes de producción.

### ¿Cuáles son las Fuentes de Datos de Entrenamiento?

Para desarrollar soluciones prácticas de IA y aprendizaje automático, los datos deben recopilarse y almacenarse de forma que tenga sentido para el problema y facilite un acceso rápido. Las tres fuentes principales son:

- Datos Internos  
- Datos Públicos  
- Datos Externos

Datos internos son los almacenados en la organización, como registros de clientes o compras. El inconveniente es que suelen ser incompletos o incompatibles con modelos de ML, aunque son fáciles de acceder.

Datos públicos son gratuitos y están disponibles en internet. Suelen venir en gran volumen y pueden requerir procesamiento. Es importante verificar los derechos de uso, especialmente para fines comerciales.

Los datos externos provienen de terceros o empresas especializadas que proveen información para ML.

### ¿Cómo Obtener Datos de Entrenamiento Etiquetados?

Los datos etiquetados son cruciales para modelos supervisados. Algunas maneras de obtenerlos son:

- Encuestas o experimentos en línea con etiquetado por participantes.  
- Datos de redes sociales, donde usuarios etiquetan contenido con hashtags o palabras clave.  
- Bases de datos pre-etiquetadas por empresas especializadas en anotación.

### ¿Cómo Saber Si un Conjunto de Datos es Adecuado para un Modelo?

Para determinar la idoneidad de un conjunto, debe:

- Ser representativo de la población original.  
- Tener representación equitativa de clases para evitar sesgos y mejorar precisión.  
- Que las variables tengan niveles de medición adecuados (valores numéricos para categorías discretas).

### ¿Cuáles son los Tipos de Datos?

Hay dos tipos: estructurados y no estructurados. Los estructurados están organizados en tablas o cuadrículas y son fáciles de procesar, usados en modelos supervisados. Los no estructurados no tienen formato específico y se usan en modelos no supervisados.

## Preprocesamiento

### ¿Qué es el Preprocesamiento de Datos?

Después de recolectar los datos, el siguiente paso es limpiarlos y prepararlos para el modelo. Esto busca eliminar variaciones no deseadas y completar valores faltantes.

Los pasos de preprocesamiento dependen del tipo de datos y del enfoque del modelo. Por ejemplo, si hay muchos valores faltantes (edad, género), se puede extrapolar información faltante a partir de otros datos disponibles, reduciendo datos faltantes e incluyendo más registros en el modelo.

### ¿Qué implica el preprocesamiento de datos?

Generalmente, hay algunos pasos involucrados en el preprocesamiento de datos: primero, los datos deben limpiarse y prepararse para el análisis. Esto incluye eliminar valores atípicos, ruido o datos incompletos. Luego, los datos deben transformarse en una forma adecuada para los algoritmos de aprendizaje automático. Esto suele implicar convertir los datos en formato numérico y extraer características relevantes. Por ejemplo, podemos convertir señales de audio en imágenes para comprender los datos de audio. De hecho, así funcionan la mayoría de los algoritmos de “detección de palabras clave”. Al transformar datos de aprendizaje automático en formato numérico, se recomienda usar técnicas de conteo o agrupamiento ("binning"). Estas dos técnicas pueden aplicarse tanto a datos categóricos como numéricos. El conteo se utiliza cuando hay un número limitado de valores por característica, mientras que el agrupamiento se usa cuando hay una gran cantidad de valores por característica. Finalmente, los datos deben dividirse en conjuntos de entrenamiento y prueba. El conjunto de entrenamiento se usa para entrenar el algoritmo de aprendizaje automático, y el conjunto de prueba se usa para evaluar su desempeño.

### ¿Cuál es la importancia del preprocesamiento de datos?

El preprocesamiento de datos es importante porque ayuda a garantizar que el algoritmo de aprendizaje automático se entrene con datos representativos del mundo real. Al limpiar y transformar los datos, podemos eliminar ruido o sesgos que puedan existir. Esto ayuda a mejorar la precisión del algoritmo. Además, el preprocesamiento también puede mejorar el rendimiento al extraer características útiles. Al identificar y extraer las características más importantes, podemos reducir la cantidad de datos que necesita procesar el algoritmo, lo que puede llevar a un mejor rendimiento y tiempos de ejecución más rápidos. Finalmente, dividir los datos en conjuntos de entrenamiento y prueba nos permite evaluar el desempeño de los algoritmos. Al probar el algoritmo con datos que no ha visto antes, podemos ver qué tan bien y con qué precisión se desempeña. Usamos los resultados de esta prueba para determinar si nuestro modelo es efectivo o no.

*El primer paso en el preprocesamiento de datos es limpiar los datos de entrada. Esto implica eliminar ruido y valores atípicos, formatearlos correctamente para su consumo por máquinas y realizar las transformaciones necesarias. El ruido puede ser causado por valores incorrectos o inconsistentes, mientras que los valores atípicos son aquellos que se alejan mucho del resto del conjunto de datos.*

*A continuación, los datos deben explorarse para comprender mejor su contenido. Esto se puede hacer visualizando los datos y realizando extracciones o transformaciones necesarias según los conocimientos obtenidos. El algoritmo de aprendizaje automático debe poder aprovechar lo aprendido al explorar los datos.*

Finalmente, una vez hecho todo esto, se puede llevar a cabo el aprendizaje automático. Esto implica entrenar un modelo con los datos limpios y transformados para crear un modelo predictivo que luego se puede usar para hacer predicciones sobre nuevos valores de entrada, como qué producto se venderá mejor el próximo mes o si una persona incumplirá un préstamo.

*Si deseas incluir una gran proporción de la población en tus modelos predictivos, pero tienes pocos ejemplos de algunos grupos minoritarios, otra opción es usar técnicas estadísticas como sobremuestreo (oversampling) o submuestreo (undersampling) para crear un conjunto de datos equilibrado. El sobremuestreo implica crear registros adicionales para un grupo minoritario seleccionando aleatoriamente otros registros de la población. El submuestreo, por otro lado, implica eliminar registros de un grupo para hacerlo más representativo de la población general.*

Una vez que tus datos estén listos, puedes comenzar a entrenar tu modelo. Este proceso implicará seleccionar un algoritmo y configurarlo para mapear los datos hacia una solución eligiendo una función de pérdida y una métrica de precisión adecuadas. Hablaremos más sobre esto pronto.

El paso final del aprendizaje automático es evaluar tu modelo, lo que implica realizar predicciones con datos reales y compararlas con los datos históricos recolectados anteriormente. Esto te permitirá verificar qué tanto aprendió el modelo a partir del entrenamiento y si se generaliza bien a nuevos datos.

## Extracción de características

La extracción de características es un paso importante en el proceso de aprendizaje automático. Se utiliza para identificar un subconjunto de características que son más predictivas para la tarea en cuestión. Este subconjunto se usa luego para crear modelos de clasificación o regresión con mejor precisión predictiva que aquellos creados utilizando todas las características disponibles.

Existen varios algoritmos que se pueden usar para la extracción de características. Algunos comunes incluyen:

- Análisis de Componentes Principales (PCA)
- Análisis Discriminante Lineal (LDA)
- Máquinas de Vectores de Soporte (SVM)
- Bosques Aleatorios (Random Forest)

Cada uno de estos algoritmos tiene sus propias fortalezas y debilidades. El mejor algoritmo dependerá del tipo de datos y del problema a resolver.

Una vez que se identifica el subconjunto de características, este debe seleccionarse. El subconjunto utilizado para el modelo final no debe depender del algoritmo que haya ofrecido mejor precisión predictiva. Los algoritmos siempre producirán diferentes mapas sobre la importancia de cada característica para predecir la tarea en cuestión. Esto puede dificultar seleccionar las mejores características sin saber de antemano qué algoritmo se usará.

Una técnica común para seleccionar un subconjunto de características es la **selección por regularización**. Se construye una función de optimización basada en utilidad aleatoria utilizando medidas de rendimiento calculadas sobre subgrupos con subconjuntos de atributos progresivamente menores. El proceso continúa hasta que quedan solo los atributos necesarios para modelar la tarea.

Una vez que se ha identificado un subconjunto de características, se debe usar para crear modelos que tengan mejor precisión predictiva que los modelos con todas las características disponibles. Esto no siempre es fácil, ya que existen muchos algoritmos diferentes y cada uno usa subconjuntos distintos. La mejor manera de comparar resultados entre modelos es usar una métrica de evaluación que se pueda calcular sobre varios tipos de modelos. Métricas comunes incluyen error de entrenamiento, error de prueba, área bajo la curva (AUC), altura del gráfico de elevación, área bajo el gráfico de elevación (AUAC), puntuación de pérdida logarítmica, coeficiente de correlación de Matthews (MCC) y el AUC del ROC.

La extracción de características es un concepto simple que no siempre tiene un camino claro de implementación. Hay muchos algoritmos posibles, cada uno con sus ventajas y limitaciones. Además, las mejores características a usar dependen muchas veces del algoritmo elegido para clasificación o regresión. Para elegir buenas características, es importante primero seleccionar una tarea de aprendizaje adecuada y una métrica de evaluación. Solo entonces se puede comenzar con la ingeniería de características.

La ingeniería de características es un paso clave en el proceso de aprendizaje automático cuyo objetivo es identificar y seleccionar un subconjunto de características de un conjunto que sean las más predictivas para la tarea específica.

## Entrenamiento del modelo

El primer paso para entrenar un modelo de aprendizaje automático es seleccionar el conjunto de datos adecuado. Este conjunto es la entrada del modelo, basada en etapas previas de recopilación de datos, preprocesamiento y extracción de características. El segundo paso es diseñar sus parámetros internos y arquitectura de red.

### Selección del conjunto de entrenamiento

Al seleccionar un conjunto de datos para entrenar un modelo, es importante considerar los siguientes factores:

1. **Propósito del modelo**  
   Lo primero que debes preguntarte es cuál es el propósito del modelo. ¿Qué deseas predecir o identificar? Una vez que lo sepas, podrás buscar un conjunto de datos representativo de la población que estás estudiando.

2. **Tamaño y complejidad del conjunto**  
   El conjunto debe ser lo suficientemente grande como para contener una variedad de elementos, cada uno con varias variables para modelar. Cuanto más complejo sea, más recursos y tiempo tomará entrenar el modelo.

3. **Disponibilidad de los datos**  
   Debes considerar si los datos están disponibles. Si son propietarios, necesitarás permiso para usarlos. Existen conjuntos públicos disponibles en línea o solicitándolos a las organizaciones que los recopilaron.

4. **Etiquetado de los datos**  
   Los datos de entrenamiento deben estar etiquetados, es decir, cada entrada debe tener un valor numérico o categórico. Esto permite al modelo identificar patrones y hacer predicciones basadas en el aprendizaje.

5. **Relaciones lineales o no lineales**  
   Evalúa si hay relaciones lineales entre variables. Por ejemplo, si estudias personas, el peso puede ser indicador de la altura (y esta de la edad), es decir, una variable dependiente y otra independiente. Si estudias autos, peso y velocidad pueden ser dos independientes que guardan relación.

6. **Tipo de algoritmo**  
   El algoritmo de aprendizaje automático que uses afectará el conjunto que debes elegir. Algunos trabajan mejor con datos categóricos, otros con numéricos. Selecciona un algoritmo compatible con tus datos.

7. **Disponibilidad de recursos**  
   Considera cuánto tiempo y recursos tienes para entrenar el modelo. Más datos suelen dar mejor rendimiento, pero si no tienes suficientes puedes usar datos sintéticos.

En resumen, al seleccionar un conjunto de datos para aprendizaje automático, asegúrate de que:

- Sea representativo de la población.
- Haya representación equitativa de múltiples clases.
- El tamaño y complejidad sea adecuado para el algoritmo elegido.
- Esté etiquetado.
- Esté formateado correctamente.
- Tengas suficientes recursos.
- Sea suficientemente grande y variado.
- No existan relaciones lineales complejas entre múltiples variables independientes.
- Tengas claro qué deseas predecir o identificar.

La mejor forma de encontrar un conjunto adecuado es saber qué deseas lograr. Luego puedes buscar conjuntos públicos. Existen muchos recursos en línea como el [Repositorio de Aprendizaje Automático de UCI](https://archive.ics.uci.edu/ml/index.php), que contiene una gran colección de datos públicos para este fin. No todos los conjuntos sirven para todo tipo de algoritmos, así que asegúrate de que sean compatibles.

El uso de modelos de aprendizaje automático ha explotado en los últimos años gracias a la disponibilidad de datos. Sin embargo, el verdadero protagonista es el **dato**. No se trata solo de predecir, sino también de entender cómo funciona el mundo y tomar mejores decisiones basadas en esa información.

Cuantos más datos tengas, mejor rendirá tu modelo. Pero si no tienes suficientes, puedes usar datos sintéticos, creados artificialmente para parecerse a los datos reales. Otra opción es combinar un conjunto pequeño de datos etiquetados con técnicas de aprendizaje no supervisado. Esto te permite elegir qué variables usar sin requerir estructuras complejas.

Es importante contar con suficientes datos, pero cuando no es posible, los datos sintéticos pueden ayudar a mejorar la precisión. Este es un tema avanzado que abordaremos más adelante, tal vez en otro libro.

### Arquitecturas de Redes Neuronales

Existen diversas arquitecturas de redes neuronales que se utilizan comúnmente en el aprendizaje profundo. Las redes neuronales convolucionales (CNN), las celdas de memoria a largo plazo (LSTM), las redes neuronales recurrentes (RNN) y las máquinas de Boltzmann restringidas convolucionales (CBRM) son algunas de las más frecuentes. Cada uno de estos tipos tiene sus propias fortalezas y debilidades, y pueden aplicarse a diferentes propósitos. En esta sección, abordaremos las arquitecturas más utilizadas para que tengas una base desde donde comenzar.

#### Perceptrón Multicapa (MLP)

Las redes neuronales Perceptrón Multicapa (MLP) son un tipo de red utilizada en el aprendizaje profundo. Son un tipo simple pero poderoso de red que puede usarse para entrenar modelos complejos. Las redes MLP consisten en varias capas, cada una compuesta por un número de neuronas. Las neuronas de la primera capa están conectadas con las de la segunda capa, y así sucesivamente. Los perceptrones multicapa son el tipo más común de red neuronal utilizado en aprendizaje profundo. Pueden usarse para resolver una amplia gama de tareas, incluidas regresión y clasificación. Logran alta precisión predictiva cuando tienen muchas capas ocultas y muchas neuronas por capa; sin embargo, no escalan bien con un número creciente de ejemplos de entrenamiento y requieren ajuste de hiperparámetros, lo que las hace difíciles de entrenar. Los perceptrones multicapa fueron introducidos inicialmente en la década de 1960 por investigadores de la Universidad de Stanford y luego popularizados por David Rumelhart, Geoffrey Hinton y Ronald Williams en 1986 [1].

##### Arquitectura de Perceptrón Multicapa

Un Perceptrón Multicapa está organizado en tres grupos de capas: una capa de entrada, una o más capas ocultas (también llamadas "unidades ocultas" o "capas de extracción de características") y una capa de salida. Cada capa está completamente conectada con la siguiente.

El Perceptrón Multicapa consta de un número de entradas x1, x2, ..., xn para cada ejemplo de entrenamiento, una o más unidades ocultas h1, h2, ... hn dependiendo del número de capas ocultas, y una o más salidas (o 1 salida representando la clase). Se aprenden los pesos óptimos W1, W2, ... Wm para esta arquitectura minimizando alguna función de error mediante descenso de gradiente.

Cabe destacar que los Perceptrones Multicapa son aproximadores universales de funciones, lo que significa que pueden aproximar cualquier función dado un número suficiente de unidades ocultas. Han sido utilizados en muchas aplicaciones, incluyendo diagnóstico médico [2], reconocimiento de escritura [3][4] y traducción automática [5]. También son populares en robótica. Inicialmente se usaban solo para aprendizaje supervisado, pero ahora también se utilizan para aprendizaje no supervisado como en redes de creencias profundas (DBNs) y máquinas de Boltzmann profundas (DBMs).

##### Entrenamiento de Redes Perceptrón Multicapa

El algoritmo de entrenamiento del Perceptrón Multicapa es simple por diseño; comienza con pesos aleatorios W1, W2, ..., Wm y los actualiza iterativamente para reducir alguna función de error definida E en un conjunto de entrenamiento compuesto por pares de entrada-salida (x1, y1), (x2, y2), ..., (xn, yn). Es un enfoque de aprendizaje supervisado donde la red se entrena para predecir las etiquetas correctas y.

El algoritmo se compone de dos fases:

- **Fase de propagación hacia adelante**: La salida de cada neurona en la primera capa oculta se calcula usando una regla de signo como f = sgn(w1*entradas + b1) + sgn(w2*ocultas + b2) + ... + sgn(wm + bm), y luego se aplica una función de activación como la sigmoide. Esto genera niveles de actividad sináptica entre neuronas y permite que se activen las neuronas en la siguiente capa.

- **Fase de retropropagación**: En esta fase se consideran las etiquetas reales y, a los ejemplos correctamente clasificados, se les asigna una mayor actualización de peso. Se calcula una función de error E para cada neurona en la capa oculta basada en las diferencias entre los valores y se propaga hacia atrás a través de todas las neuronas. Luego se aprende Wm+1 usando una regla de descenso de gradiente como Wm+1 = Wm - (tasa de aprendizaje) * ∂E/∂wm [6].

El algoritmo no tiene un criterio de detención incorporado; sin embargo, muchos experimentos terminan el entrenamiento cuando se observa que seguir entrenando tiene un impacto mínimo en el rendimiento o estabilidad de la red, es decir, cuando reducir el error cuadrático medio adicionalmente lleva al sobreajuste.

##### Perceptrones Multicapa en Aprendizaje Profundo

Los perceptrones multicapa también se conocen como redes neuronales de avance directo (*feed-forward*) porque no tienen ciclos en su grafo de conexiones; sin embargo, los perceptrones multicapa con más de una capa oculta a menudo se denominan perceptrones multicapa de aprendizaje profundo (MLP), lo que permite generalizar el algoritmo a redes con muchas capas y millones de parámetros. Una red profunda de avance directo se compone apilando múltiples capas unas sobre otras, lo que resulta en una arquitectura muy ancha pero poco profunda. Los MLP de aprendizaje profundo pueden entrenarse con varios algoritmos de optimización como descenso de gradiente, gradiente conjugado o métodos cuasi-Newton.

#### Redes Neuronales Convolucionales

Las redes neuronales convolucionales (CNN) son un tipo de red utilizada en visión por computadora, reconocimiento de imágenes y detección de objetos. Se utilizan para identificar aspectos específicos de una imagen comparándola con otras que el programa ha aprendido. Las CNN están compuestas generalmente por tres capas principales:

- Capa convolucional  
- Capa de agrupamiento (*pooling*)  
- Capa completamente conectada (*fully connected*)

La capa convolucional es donde el programa reconoce patrones en la imagen comparándola con otras imágenes de su base de datos. Si encuentra una diferencia significativa entre los rasgos de la imagen actual y lo que ha aprendido, pasa a la siguiente sección de la capa convolucional. Aunque las CNN han sido clave en los avances en visión por computadora, continúan evolucionando con variantes como las redes neuronales convolucionales profundas (DCNN) y las máquinas de Boltzmann restringidas convolucionales (CBRM).

Las CNN aprenden de la experiencia. Están compuestas por múltiples capas, donde cada capa tiene un número diferente de neuronas llamadas filtros. Para que la red aprenda, cada capa recibe un conjunto de entrenamiento que le permite aprender a reconocer patrones. Cuantos más datos de entrenamiento tenga, mayor será la precisión de la red para detectar patrones. Las CNN también usan un mecanismo de avance directo (*feedforward*) que pasa los datos a través de muchas capas y luego compara sus predicciones con las etiquetas asociadas a esos datos.

Para alcanzar el nivel de precisión deseado en una CNN, es necesario crear un conjunto de entrenamiento utilizando un conjunto de datos definido. La red aprenderá a detectar patrones con precisión ajustando los valores de los filtros para minimizar el error entre sus predicciones y las etiquetas. También puedes utilizar retropropagación para ayudar a entrenar la red. La retropropagación ayuda a las CNN a aprender más rápido al retroalimentar información sobre qué tan bien se desempeñó cada capa. Esto permite que cada capa ajuste sus filtros de forma que la red aprenda de sus errores y mejore su precisión.

#### Redes Neuronales Recurrentes

Las Redes Neuronales Recurrentes (RNN) son un tipo de red que identifica patrones en imágenes o texto utilizando información de estado de partes anteriores en la secuencia para influir en predicciones futuras sobre dónde debe enfocarse después. Las RNN se han utilizado en aplicaciones como el servicio de traducción de Google y la tecnología de reconocimiento de voz. Máquinas de Boltzmann Restringidas Convolucionales (CBRM), Redes Neuronales Convolucionales Profundas (DCNN), entre otras, son algunos tipos de redes convolucionales que utilizan RNN como núcleo.

Las celdas de memoria a largo plazo (*Long Short Term Memory*, LSTM) son un tipo de red neuronal recurrente usada para identificar patrones y tendencias dentro de secuencias de datos. Las LSTM comparan nuevos patrones con los aprendidos anteriormente y consideran la información de estado previa al hacer predicciones futuras. Aunque las redes neuronales recurrentes existen desde hace años, las celdas LSTM son las responsables de hacerlas mucho más potentes.

#### Transformadores

Las redes neuronales transformadoras (*Transformer*) son redes que usan un algoritmo de aprendizaje profundo llamado *transformer* para aprender a hacer inferencias sobre nuevos conjuntos de datos. El *transformer* está compuesto por dos partes principales: el codificador y el decodificador. El codificador toma los datos de entrada y los transforma en un vector numérico. Luego, este vector es pasado al decodificador, que reconstruye los datos de entrada.

La arquitectura *transformer* fue propuesta por Google en 2017 y ha demostrado ser más efectiva que otras como las redes neuronales profundas y las redes neuronales recurrentes. Los *transformers* han sido muy eficaces en procesamiento de lenguaje natural (NLP), un área de la inteligencia artificial que busca crear máquinas capaces de entender y aprender lenguas humanas como el inglés. Una red como el *transformer* es, esencialmente, una aproximación de cómo trabaja el cerebro, ya que transforma la información para su análisis.

### Retropropagación

Una vez que has elegido una arquitectura de red neuronal, debes entrenarla. La retropropagación (*Backpropagation*) es un algoritmo simple y efectivo para entrenar redes neuronales. Funciona mediante el método de descenso por gradiente, que permite converger rápidamente hacia los pesos óptimos de la red en lugar de moverse en direcciones aleatorias.

La razón de su eficacia es que el término de error de cada capa se propaga hacia atrás por la red, permitiendo calcular los gradientes. Este error en un nodo ajusta los pesos de las conexiones hacia y desde ese nodo, para reducir errores futuros.

La retropropagación es una herramienta poderosa, comúnmente utilizada en redes neuronales profundas, que requieren grandes bases de datos para su entrenamiento. Puede aplicarse a muchos tipos de modelos de redes neuronales; de hecho, todas las arquitecturas que discutimos anteriormente pueden beneficiarse de la retropropagación. Ha sido utilizada con éxito en campos como optimización, reconocimiento de patrones y aproximación de funciones.

Los algoritmos de retropropagación también se conocen como *back-prop* o *back-props*.

La razón de su efectividad es que el término de error de cada capa se propaga hacia atrás por la red, lo que permite calcular gradientes. Este término de error ajustará los pesos de las conexiones en ambos lados del nodo para reducir errores futuros. Los algoritmos de retropropagación también son conocidos como *back-prop* o *back-props*.

La retropropagación se basa en descenso por gradiente, lo que permite que el modelo converja rápidamente hacia los pesos óptimos. Es una gran herramienta para reducir o eliminar la dependencia entre clasificadores. Las *back-props* son una técnica poderosa muy usada en redes neuronales profundas que requieren grandes volúmenes de datos para entrenarse.

### Convergencia

La convergencia se refiere a qué tan rápido el modelo aprende cuando se entrena con más datos. Por ejemplo, si usas un modelo de machine learning para hacer predicciones futuras, querrás que tenga buena convergencia para que las predicciones sean precisas. Otro caso es cuando usas un modelo para mejorar algo, como un producto; una buena convergencia asegurará que los cambios implementados sean realmente mejoras.

Una convergencia lenta puede ser perjudicial porque significa que el modelo no está aprendiendo tan rápido como podría, lo que lleva a predicciones inexactas y soluciones subóptimas. Además, puede ser costoso en términos de tiempo y recursos.

#### ¿Existen beneficios en una convergencia lenta?

La principal ventaja de un modelo con convergencia lenta es que puede ser más preciso. Una tasa de convergencia más baja puede llevar a predicciones o soluciones más exactas. Este tipo de modelo puede ser adecuado en contextos donde la precisión sea el factor más importante.

Sin embargo, al elegir un modelo con convergencia lenta, es importante considerar el contexto en que será utilizado. A veces la precisión es prioritaria, y otras veces lo es la velocidad. También es esencial contar con suficiente cantidad de datos para entrenar el modelo; de lo contrario, no podrá aprender correctamente ni ofrecer resultados precisos.

En resumen, al seleccionar un modelo de machine learning, es importante considerar la tasa de convergencia. Un modelo con buena convergencia será más preciso y eficiente. También debes tener en cuenta el contexto para elegir el modelo adecuado con la convergencia apropiada para tu caso de uso.

### Sobreajuste y Subajuste

Un problema común en aprendizaje automático es el sobreajuste (*overfitting*) y el subajuste (*underfitting*). El sobreajuste ocurre cuando el algoritmo aprende a hacer muy bien lo que le pedimos, pero no puede generalizar, porque aprendió demasiado sobre esa tarea específica. El subajuste ocurre cuando el algoritmo no fue entrenado lo suficiente y no entiende lo que queremos que aprenda sobre cómo funciona el mundo.

Por ejemplo, un algoritmo puede aprender a identificar objetos en imágenes muy bien, pero si aprendió solo lo que le pedimos, no podrá identificar otros objetos diferentes ni reconocerlos en otros contextos.

Otro ejemplo es cuando un algoritmo solo puede aprender cosas muy básicas. Esto pasa cuando el modelo no se entrena lo suficiente y no aprende lo necesario. Cuando hay muchos errores en los datos de entrenamiento, puede deberse a sobreajuste o subajuste.

Una forma de evitar el sobreajuste es usar un algoritmo más complejo, que pueda aprender más sin especializarse demasiado. Otra forma es usar menos datos de entrenamiento. Para evitar el subajuste, se puede usar un algoritmo menos complejo o más datos de entrenamiento, para que el modelo aprenda más sobre cómo funciona el mundo.

El sobreajuste y subajuste son dos problemas comunes en machine learning. El primero sucede cuando el algoritmo aprende demasiado; el segundo, cuando aprende muy poco. Podemos prevenirlos usando algoritmos adecuados y el volumen correcto de datos.

### Hiperparámetros

Para enfrentar estos problemas, puedes ajustar varios hiperparámetros. Aquí revisamos los más comunes.

#### Épocas (*Epochs*)

Al entrenar una red neuronal con retropropagación, existen miles o millones de conexiones por ajustar. Hacerlo todo al mismo tiempo requeriría mucho tiempo de cómputo, por lo que la retropropagación ajusta los pesos uno a uno, en iteraciones. Así, no necesita recalcular todos los pesos en cada instancia, sino que registra los cambios y los actualiza después.

Las *epochs* son una unidad de medida que indica cuántas veces se ha procesado todo el conjunto de entrenamiento. Se usan cuando hay muchos datos. También sirven para reiniciar los pesos de la red a sus valores iniciales.

Al comenzar una *epoch*, la retropropagación recorre el conjunto de datos desde el principio hasta el final, y luego vuelve a comenzar. Este proceso se repite hasta que se hayan recorrido todos los datos.

La cantidad de *epochs* necesarias depende de qué tan bien esté aprendiendo la red. Si no aprende, se necesitan más. Si aprende demasiado del ruido (sobreajuste), se deben usar menos.

Las *epochs* también ayudan a ahorrar tiempo. Sin ellas, la retropropagación tendría que procesar todos los datos cada vez. Como retrocede hasta el inicio del conjunto, solo necesita volver unos cuantos pasos atrás. Esto reduce el tiempo total de entrenamiento.

#### Tasa de Aprendizaje (*Learning Rate*)

La tasa de aprendizaje determina qué tan rápido entrena tu modelo. Si es muy baja, puede que no aprenda nada. Si es muy alta, puede que entrene mal y no corrija errores. Elegir el valor correcto depende de:

1. Cuántos datos tienes para entrenar el modelo.  
2. Cuánto tiempo tienes para entrenarlo.

¿Cómo afecta la tasa de aprendizaje a tu modelo? En redes neuronales, una tasa alta hace que los valores cambien rápidamente (hacia 0 o 1). Una tasa baja permite convergencia lenta pero mayor precisión, porque da más oportunidades de ajustar los pesos correctamente.

¿Cómo encontrar la tasa adecuada? Hay varias formas:

- Prueba y error: todos los modelos requieren distintos tiempos de entrenamiento.
- Buscar artículos como este con pautas generales.
- Búsqueda en rejilla (*grid search*): probar muchas combinaciones de tasas.
- Curva de validación: graficar la precisión del modelo contra el tiempo de entrenamiento.

¿Qué factores determinan la tasa adecuada?

- **Cantidad de datos**: Si tienes muchos, puedes usar una tasa más alta para que el modelo aprenda más rápido. Si tienes pocos, usa una tasa más baja para no sobreajustar.
- **Tiempo disponible**: Si tienes poco tiempo, usa una tasa más alta para entrenar más rápido. Si tienes más tiempo, puedes probar con tasas menores y mejores resultados.

Como ves, hay varios factores que determinan la mejor tasa de aprendizaje, y también múltiples formas de encontrarla.

##### ¿La tasa de aprendizaje es demasiado baja o demasiado alta?

Si tu modelo no se entrena en absoluto, esto indica que la tasa de aprendizaje es demasiado baja y deberías aumentarla (pero asegúrate de que no sea demasiado alta tampoco). Otra forma de verificar si tu modelo está configurado correctamente es utilizar una curva de validación en tu conjunto de datos. Si configuras correctamente la tasa de aprendizaje, entonces la curva se verá similar a un gráfico que parece una línea recta pasando por puntos cercanos a 1. Si no es así, deberías considerar cambiar la tasa de aprendizaje y ejecutar otra curva de validación.

##### ¿Cómo puedo acelerar mi modelo?

Si configuras una tasa de aprendizaje más alta, tu modelo aprenderá más rápido, pero también podría ser menos preciso. Por el contrario, si configuras una tasa de aprendizaje más baja, tu modelo aprenderá más lentamente pero será más preciso. Esto tiene sentido porque con una tasa baja, hay más oportunidades para que la red adapte sus pesos para ajustarse mejor a los datos. Por otro lado, si utilizas una tasa de aprendizaje muy alta, tu modelo podría aprender rápidamente a hacer predicciones basadas en el ruido del conjunto de datos en lugar de en los datos reales. Esto no será muy útil porque no está evaluando críticamente sus predicciones ni entendiendo por qué están mal (simplemente seguirá cometiendo errores similares).

Si reduces demasiado la tasa de aprendizaje, tu modelo también podría tardar mucho tiempo en entrenarse. Esto se debe a que los pesos se actualizan tan lentamente que podría no adaptarse lo suficientemente rápido cuando ingresan nuevos datos.

##### Elegir una tasa de aprendizaje óptima

Como puedes ver, hay múltiples factores que determinan la tasa de aprendizaje de tu modelo y la mejor opción es diferente para cada persona. Si tienes mucho tiempo pero quieres entrenar con precisión, utiliza un valor bajo para la tasa de aprendizaje. Sin embargo, si quieres entrenar modelos precisos rápidamente, entonces usa una tasa de aprendizaje más alta.

### Aprendizaje por Transferencia

#### ¿Qué es el Aprendizaje por Transferencia?

El aprendizaje por transferencia es un proceso en el cual el conocimiento aprendido en un modelo puede transferirse a otro modelo. Esto se hace para llenar los vacíos en la base de conocimiento del otro modelo. El uso del aprendizaje por transferencia ha demostrado ser muy exitoso, especialmente en el campo del aprendizaje automático. Un gran ejemplo de esto es la aplicación de redes neuronales profundas para mejorar el reconocimiento de voz en teléfonos móviles.

#### ¿Por qué es importante el Aprendizaje por Transferencia?

La principal razón por la cual el aprendizaje por transferencia es importante es porque ayuda a llenar los vacíos que existen entre diferentes modelos. Al llenar estos vacíos, el aprendizaje por transferencia nos permite utilizar información que de otra manera no podríamos aprovechar si los modelos no se combinaran. Otra razón importante es que puede acelerar el proceso de aprendizaje, ya que se reutiliza conocimiento que ya fue aprendido en otro modelo. Finalmente, también puede mejorar la precisión de nuestros modelos al permitirnos usar más información.

El aprendizaje por transferencia se ha convertido en una herramienta poderosa en los sistemas de aprendizaje automático en los últimos años. Su popularidad se debe al hecho de que ayuda a reducir la cantidad de datos necesarios para el entrenamiento y mejora el rendimiento. Además, es más fácil de implementar y depurar que los algoritmos tradicionales.

#### ¿Cuáles son algunas aplicaciones del Aprendizaje por Transferencia?

El aprendizaje por transferencia ha encontrado numerosas aplicaciones importantes en campos como la visión por computadora, el procesamiento de lenguaje natural y el aprendizaje automático. Algunas de las más destacadas incluyen:

- Mejorar el reconocimiento de voz en teléfonos móviles
- Mejorar el reconocimiento de objetos
- Mejorar el reconocimiento facial
- Mejorar el aprendizaje automático
- Mejorar la clasificación de texto

En resumen, el aprendizaje por transferencia se está convirtiendo en una herramienta popular en los sistemas de aprendizaje automático, debido a su capacidad de minimizar la cantidad de datos necesarios para el entrenamiento y mejorar el rendimiento. Es ampliamente utilizado en reconocimiento de voz, traducción automática y aplicaciones de visión por computadora, y se ha convertido en una herramienta valiosa para investigadores y desarrolladores que comparten código fuente entre diferentes tareas y dominios.

#### Optimizadores

### Resumen

Las redes neuronales convolucionales, las celdas de memoria a largo plazo (LSTM), las redes neuronales recurrentes y las Máquinas de Boltzmann Restringidas Convolucionales (CBRM) son algunos de los diferentes tipos de redes neuronales que actualmente se utilizan en el campo del aprendizaje profundo. Estos distintos tipos de redes son responsables de impulsar muchas de las aplicaciones más exitosas en la actualidad. Aunque las Redes Neuronales Convolucionales fueron diseñadas originalmente para tareas de visión por computadora, han sido adaptadas con éxito a tareas como el reconocimiento de voz y el procesamiento de lenguaje natural. Las Redes Neuronales Recurrentes y las celdas LSTM son en gran parte responsables de hacer estas redes más potentes que nunca. Con los avances continuos en estas tecnologías, podemos esperar que se vuelvan cada vez más poderosas.

## Optimizaciones del Modelo

En aprendizaje automático, el tamaño de un modelo es una medida de su complejidad. Cuanto más grande es el modelo, mayor es el riesgo de que no converja durante los algoritmos de optimización y que tenga un mayor grado de sobreajuste.

Para contrarrestar estos inconvenientes, se pueden emplear técnicas de optimización que reduzcan el tamaño de los modelos sin perder poder predictivo. Estas técnicas, como la cuantización, la poda, la destilación de conocimiento y otras que veremos en esta sección, están diseñadas para mejorar el rendimiento de los algoritmos haciéndolos más eficientes computacionalmente.

En términos generales, las técnicas de optimización abordan dos aspectos:

1. Reducción del tamaño del modelo;
2. Aumento de la eficiencia computacional.

Esto se puede lograr mediante optimizaciones de software o utilizando soporte de hardware.

### Optimizaciones de Software

#### Compresión

La compresión de modelos es una técnica que usa conjuntos de modelos para reducir el tamaño de los mismos. Funciona entrenando múltiples modelos con diferentes subconjuntos de ejemplos y luego promediando o votando para producir un único modelo. Como cada modelo individual es más pequeño que el original, hay menos parámetros que calcular y almacenar.

Los propios datos también pueden comprimirse para hacerlos más manejables. Esto puede hacerse mediante algoritmos de compresión con pérdida o mediante submuestreo. Los algoritmos con pérdida descartan parte de los datos para reducir su tamaño, mientras que el submuestreo reduce el número de ejemplos utilizados para el entrenamiento.

#### Cuantización

La cuantización reduce el tamaño de los parámetros del modelo reemplazándolos con valores enteros. Esto se logra redondeando los parámetros al entero más cercano. La ventaja es que los modelos cuantizados suelen ser más eficientes computacionalmente que sus equivalentes sin cuantizar.

#### Poda de Pesos

La poda de pesos elimina pesos del modelo que no afectan sus predicciones, estableciéndolos en cero. Al eliminar pesos innecesarios, el modelo se vuelve más pequeño, requiere menos tiempo de entrenamiento y menos memoria para almacenarlo.

#### Destilación de Conocimiento

La destilación de conocimiento es una técnica que mejora el rendimiento de los modelos. Es un proceso en dos pasos: primero, se entrena un modelo complejo con un gran conjunto de datos; luego, ese conocimiento se transfiere a un modelo más simple para hacer predicciones en conjuntos más pequeños. La ventaja es que el modelo más simple puede tener una precisión comparable o incluso superior sin necesidad de reentrenamiento.

### Aceleración por Hardware

El aprendizaje automático es un campo de la inteligencia artificial que enseña a las máquinas a comportarse de forma más humana. La aceleración por hardware consiste en usar dispositivos especializados para mejorar el rendimiento del sistema. En aprendizaje automático, esto puede ser fundamental para mejorar la eficiencia y velocidad del sistema.

Un acelerador de hardware es un circuito integrado diseñado para realizar tareas específicas más eficientemente que un CPU de propósito general. Esto significa que los dispositivos pueden ejecutar los cálculos necesarios de forma rápida y eficaz.

#### Unidades de Procesamiento Gráfico (GPU)

Las GPUs están diseñadas para cálculos gráficos, pero son altamente eficientes para operaciones de coma flotante y manipulaciones matriciales comunes en algoritmos de aprendizaje automático. Por ello, se usan tanto en entrenamiento como en inferencia de modelos.

#### Unidades de Procesamiento Tensorial (TPU)

Las TPUs, desarrolladas por Google, están diseñadas específicamente para acelerar cálculos de aprendizaje automático. Ofrecen ventajas de rendimiento significativas sobre CPUs y GPUs tradicionales.

#### Unidades de Procesamiento Neuronal (NPU)

En general, la aceleración por hardware es una herramienta clave para mejorar rendimiento y eficiencia en sistemas de aprendizaje automático. Las NPUs están emergiendo como una categoría especializada para entrenamiento e inferencia, y se espera que se diversifiquen aún más conforme evoluciona este campo.

## Despliegue de Modelos de ML

Hay muchos factores que afectan la precisión y latencia de los modelos. Algunos son propios del algoritmo, mientras que otros dependen de la implementación o del entorno. En general, los tres factores principales son:

- El tamaño y la complejidad del conjunto de datos  
- La complejidad del algoritmo  
- Hiperparámetros como número y tipo de capas, función de activación, etc.

## Conclusión

El Aprendizaje Automático es parte integral del futuro de la Inteligencia Artificial y jugará un papel clave en tecnologías emergentes como autos autónomos, asistentes virtuales y electrodomésticos inteligentes. Se necesitan Ingenieros de ML para desarrollar los algoritmos que permitirán que estas tecnologías alcancen su máximo potencial. Esperamos que el contenido de este curso haya despertado en ti un profundo interés por seguir aprendiendo sobre aprendizaje automático.

## Apéndice

### Sistemas Embebidos

En los sistemas embebidos, un microcontrolador es una pequeña computadora en un solo circuito integrado que contiene toda la circuitería necesaria para controlar dispositivos embebidos. Estos dispositivos generalmente están integrados en otros productos como electrodomésticos o vehículos y pueden tomar diversas formas, desde compuertas lógicas simples hasta microcomputadoras con puertos de entrada/salida. El PICmicro, por ejemplo, es uno de muchos ejemplos de un sistema de controlador embebido que sirve de interfaz entre tu computadora y hardware periférico como impresoras, escáneres, teclados, ratones, cámaras digitales, etc. Este tipo de dispositivo puede utilizarse para monitorear condiciones ambientales o controlar procesos industriales. Los primeros controladores programables fueron sistemas embebidos diseñados en la década de 1960 por General Electric para ser usados en lavadoras y secadoras, los cuales detectaban cuando la ropa estaba suficientemente limpia y detenían la máquina.

Hoy en día, los sistemas embebidos pueden encontrarse en una gran variedad de productos y electrodomésticos, y las computadoras embebidas son la unidad principal de procesamiento en la mayoría de los dispositivos del hogar moderno como microondas, lavadoras, lavavajillas e incluso cafeteras. Estas computadoras embebidas transmiten información al usuario mediante distintas formas de salida como pantallas digitales y LEDs. También pueden recibir entrada del entorno como botones o interruptores en el exterior del dispositivo, lo que permite al usuario controlar funciones como los ajustes de tiempo o temperatura. Hay una computadora embebida dentro de tu automóvil para ejecutar todos los controles del vehículo como las direccionales, el claxon, el velocímetro, etc.; esencialmente dándote control total del vehículo sin tener que interactuar directamente con los componentes del motor.

Los sistemas embebidos también pueden realizar cálculos complejos o manipulación de datos para monitorear y controlar con base en las condiciones ambientales. Un sistema embebido basado en un procesador digital de señales (DSP) puede utilizarse para recolectar datos climáticos para investigación, detectar cambios en factores como velocidad del viento, humedad, etc., que luego pueden usarse para hacer predicciones sobre el entorno. Las computadoras embebidas en vehículos están usando este tipo de tecnología, por ejemplo, para detectar cuándo partes están por romperse o sobrecalentarse. Estos sistemas son cruciales para el funcionamiento eficiente del mundo actual, sin embargo, el desarrollo de sistemas embebidos históricamente ha estado limitado por su tamaño y el nivel de funcionalidad requerido.

¡Pero la computación embebida está avanzando rápidamente! Gracias a los avances recientes en microelectrónica, los sistemas embebidos pueden hacer más siendo más pequeños que nunca. La tecnología de sistemas en chip (SoC) ha permitido combinar los sistemas embebidos con circuitería RF, analógica y digital en un solo chip que luego puede integrarse en otros productos. Esto ha facilitado y acelerado el desarrollo de productos, además de reducir los costos de producción. Con la creciente demanda de sistemas embebidos en todos los aspectos de nuestra vida, ¡es seguro decir que son fundamentales para el funcionamiento del mundo que nos rodea!

### Historia de los Sistemas Embebidos

Los sistemas embebidos han sido utilizados casi desde que existen los dispositivos electrónicos. Uno de los primeros ejemplos es el controlador de tubos de vacío utilizado en bombarderos de la Segunda Guerra Mundial como el B-17 Flying Fortress para ayudar con la navegación y el lanzamiento de bombas. Estos sistemas embebidos eran esencialmente pequeñas computadoras integradas en un sistema mayor para proporcionar funcionalidad adicional.

A principios de la década de 1960, General Electric desarrolló los primeros controladores embebidos para ser utilizados en sus lavadoras y secadoras. Estos controladores detectaban cuándo la ropa estaba suficientemente limpia y luego detenían la máquina. Esto fue un avance revolucionario en ese momento, ya que mostró el potencial de los sistemas embebidos para controlar e interactuar con hardware periférico.

A finales de los años 60, los sistemas embebidos comenzaron a proliferar en todo tipo de productos. La misión Apolo 11, que llevó al primer ser humano a la Luna, utilizó sistemas embebidos extensamente en sus sistemas de guía y control. De hecho, los sistemas embebidos fueron tan críticos para el éxito de la misión que si uno hubiera fallado, es probable que la misión hubiera sido cancelada.

A medida que los sistemas embebidos se generalizaban, también crecía la necesidad de estandarizar cómo interactuaban con su entorno. En 1981, un grupo de ingenieros se reunió para formar la Embedded Systems Conventional (ESC). Esta organización tenía como objetivo desarrollar y promover estándares para el desarrollo de sistemas embebidos. Uno de sus logros más notables fue el desarrollo del bus embebido común, que permite a los sistemas embebidos comunicarse fácilmente entre sí.

Los sistemas embebidos han avanzado mucho desde sus inicios y siguen desempeñando un papel crítico en nuestro mundo actual. Con los avances tecnológicos, estos sistemas se están volviendo más pequeños y poderosos que nunca, convirtiéndose en una parte esencial del desarrollo de productos. A medida que los sistemas embebidos se integran aún más en nuestra vida diaria, se espera que su desarrollo continúe avanzando rápidamente.

Ejemplos tradicionales específicos de sistemas embebidos incluyen:

- relojes digitales
- microondas
- automóviles
- routers
- sistemas de control de iluminación embebidos como los de señales LED o aeropuertos
- electrodomésticos inteligentes embebidos como asistentes de voz o cerraduras inteligentes en red
- controladores de automatización industrial embebidos como los de las líneas de ensamblaje de automóviles

¡Y la lista continúa! Siempre que use tecnología embebida, cuenta como un sistema embebido. Consulta la sección de 'Lecturas Adicionales' para encontrar buenos artículos sobre tecnología embebida que puedes usar como fuentes si lo necesitas. ¡No te limites a estos ejemplos! Si conoces otros sistemas embebidos interesantes, agrégalos también :)

Algo que puedes mencionar es cómo las nuevas tecnologías están llevando los sistemas embebidos a nuevas áreas. Por ejemplo, ahora se están utilizando en el desarrollo de vehículos autónomos. A medida que se vuelven más ubicuos, su importancia no hará más que crecer.

### Lecturas Adicionales

- [¿Qué es un sistema embebido?](http://www.edn.com/electronics-blogs/digest/4427211/What-is-an-embedded-system)

- [Una Introducción a los Sistemas Embebidos (PDF)](https://www.cs.utah.edu/~gk/papers/embedded_primer.pdf)

- [El estado del desarrollo de sistemas embebidos](https://www.eetimes.com/document.asp?doc_id=133)

*Continuaremos actualizando / modificando esta serie de cursos. Todos los derechos reservados por Seeed Studio y el Prof. Vijay Janapa Reddi.*
