import { instructors } from "./json-instructors.js";

const courses = {
            'python': {
                title: 'Python Nivel Inicial',
                description: 'Aprende los fundamentos de Python, desde sintaxis básica hasta estructuras de datos y programación orientada a objetos.',
                level: 'beginner',
                levelText: 'Principiante',
                duration: '8 clases',
                students: '1200+ estudiantes',
                image: './assets/img/courses/python-icon.webp',
                about: `
                    <p>Este curso te introducirá al fascinante mundo de la programación con Python, uno de los lenguajes más populares y versátiles de la actualidad.</p>
                    <p>Aprenderás desde los conceptos más básicos hasta temas intermedios que te permitirán desarrollar tus propios programas y aplicaciones.</p>
                `,
                learnList: [
                    'Fundamentos de la Programacion',
                    'Estructuras de Control',
                    'Metodos y Modularidad',
                    'Estructuras Dinamicas de Datos'
                ],
                requirements: [
                    'Buena conexión a internet',
                    'Computadora con Windows 10 o superior / Linux / MacOS',
                    'Procesador minimo: Dual Core 64 bits (I3, Ryzen 3, o equivalente)',
                    'Microfono',
                    'Conocimientos previos: no es necesario'
                ],
            },
            'java': {
                title: 'Java',
                description: 'En nuestro curso de Java los estudiantes aprenderán los fundamentos de la programación orientada a objetos a través de ejercicios prácticos, proyectos interactivos y desafíos lógicos. Desde sus primeros programas de consola hasta el desarrollo de aplicaciones básicas, descubrirán cómo Java es la base de millones de sistemas, apps móviles y videojuegos.',
                level: 'advanced',
                levelText: 'Avanzado',
                duration: '8 clases',
                students: '850+ estudiantes',
                image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
                about: `
                    <p>Este curso avanzado de Java está diseñado para personas que quieran llevar sus habilidades al siguiente nivel.</p>
                    <p>Aprenderás conceptos avanzados como POO, y estarás en condiciones de encaminarte en el mundo de la programación en Android.</p>
                `,
                learnList: [
                    'Fundamentos de la Programacion',
                    'Estructuras de Control',
                    'Metodos y Modularidad',
                    'Estructura Dinamica de Datos',
                    'Introduccion a la Programacion Orientada a Objetos (POO)' 
                ],
                requirements: [
                    'Buena conexión a internet',
                    'Computadora con Windows 10 o superior / Linux / MacOS',
                    'Memoria RAM: 1GB Mínimo - 4GB Recomendado',
                    'Microfono',
                    'Conocimientos previos: no es necesario'
                ],
            },
            'javascript': {
                title: 'JavaScript',
                description: 'Aprende JavaScript desde cero y domina el lenguaje de programación más utilizado en el desarrollo web.',
                level: 'intermediate',
                levelText: 'Intermedio',
                duration: '8 clases',
                students: '1500+ estudiantes',
                image: './assets/img/courses/js-icon.webp',
                //image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                about: `
                    <p>Domina JavaScript moderno con este curso que cubre desde los fundamentos hasta conceptos avanzados.</p>
                    <p>En este curso, los estudiantes dominarán JavaScript para crear funcionalidades avanzadas, manipular el DOM y trabajar con frameworks modernos, construyendo proyectos reales y aplicaciones completamente funcionales.</p>
                `,
                learnList: [
                    'Entornos de trabajo e Introducción a JavaScript',
                    'Estructuras fundamentales',
                    'Nociones avanzadas',
                    'Manejo de librerías y Consumir una API'
                ],
                requirements: [
                    'Buena conexión a internet',
                    'Computadora con Windows 10 o superior / Linux / MacOS',
                    'Memoria RAM: 1GB minimo - recomendado 4GB',
                    'Procesador minimo: Dual Core 64 bits (I3, Ryzen 3, o equivalente)',
                    'Microfono',
                    'Conocimientos previos: no es necesario'
                ],
            },
            'wd': {
                title: 'Web Design',
                description: 'Domina HTML, CSS, Flexbox, Grid y diseño responsivo para crear sitios web impresionantes.',
                level: 'beginner',
                levelText: 'Principiante',
                duration: '8 clases',
                students: '1500+ estudiantes',
                image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
                about: `
                    <p>Aprende a crear sitios web interactivos y modernos desde cero. En este curso, los estudiantes dominarán HTML, CSS y JavaScript para diseñar páginas web funcionales, adaptables y visualmente atractivas.</p>
                `,
                learnList: [
                    'Buena conexión a internet',
                    'Computadora con Windows 10 o superior / Linux / MacOS',
                    'Memoria RAM: 1GB Mínimo - 4GB Recomendado',
                    'Procesador minimo: Dual Core 64 bits (I3, Ryzen 3, o equivalente)',
                    'Microfono',
                    'Conocimientos previos: no es necesario'
                ],
            },
            'r': {
                title: 'Analisis de Datos con R',
                description: 'Domina los fundamentos de R y adquiere habilidades clave para el análisis de datos y la ciencia estadística moderna.',
                level: 'intermediate',
                levelText: 'Intermedio',
                duration: '8 clases',
                students: '1500+ estudiantes',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                about: `
                    <p>Descubre el poder de los datos con R, el lenguaje líder en análisis estadístico y ciencia de datos. En este curso, los estudiantes aprenderán a manipular datos, crear visualizaciones impactantes y resolver problemas reales usando herramientas profesionales</p>
                `,
                learnList: [
                    'Introducción a R y RStudio',
                    'Operaciones Básicas y Estructuras de Datos',
                    'Estructuras de Control y Repeticion',
                    'Metodos',
                    'Importacion y Manipulacíon de Datos',
                    'Exploracion y Resumen de Datos',
                    'Visualizacíon de Datos con ggplot2',
                    'Analisis Estadístico en R',
                    'Preparacíon de Datos para Modelado',
                    'Introducción a Modelos Predictivos en R',
                    'Reportes y Comunicacion de Resultados'
                ],
                requirements: [
                    'Buena conexión a internet',
                    'Computadora con Windows 10 o superior / Linux / MacOS',
                    'Memoria RAM: 1GB Mínimo - 4GB Recomendado',
                    'Procesador minimo: Dual Core 64 bits (I3, Ryzen 3, o equivalente)',
                    'Microfono',
                    'Conocimientos previos: no es necesario'
                ],
            },
            'ppn': {
                title: 'Programamción para Niños',
                description: 'Potencia el desarrollo digital de tus niños a traves de diversas plataformas educativas.',
                level: 'beginner',
                levelText: 'Principiante',
                duration: '8 clases',
                students: '1500+ estudiantes',
                image: '../../assets/icons/courses/ppn.webp',
                //image: 'https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                about: `
                    <p>Aprender a programar desde una temprana edad ofrece una gran cantidad de beneficios que van más allá de simplemente preparar a los niños para un futuro.</p>
                    <p>En nuestro de curso de programación en videojuegos los niños descubrirán el mundo de la programación de una manera divertida y aprenderán los conceptos básicos utilizando bloques secuenciales.</p>
                    <h5>Beneficios cognitivos y de desarrollo:</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Pensamiento lógico y resolución de problemas.</li>
                        <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Creatividad.</li>
                        <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Perseverancia.</li>
                        <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Colaboración.</li>
                    </ul>
                `,
                learnList: [
                    'Conceptos basicos de la programación',
                    'A desarrollar la logca y creatividad'
                ],
                requirements: [
                    'Buena conexión a internet',
                    'Computadora con Windows 10 o superior / Linux / MacOS',
                    'Procesador: I3 en adelante',
                    'Mouse',
                    'Conocimientos previos: no es necesario'
                ],
            },
            'pyintermedio': {
                title: 'Python Nivel Intermedio',
                description: 'Consolide habilidades fundamentales de Python y comience con conceptos clave para escalar hacia la programación profesional.',
                level: 'intermediate',
                levelText: 'Intermedio',
                duration: '8 clases',
                students: '1200+ estudiantes',
                image: './assets/img/courses/python-icon.webp',
                about: `
                    <p>En este curso afianzaras las bases de Python, explorando funciones de manera mas profunda y dominando las estructuras de datos esenciales</p>
                    <p>Tambien aprenderás a hacer que tu codigo sea mas robusto, permitiendote manejar errores de forma efectiva, y te introduce en los principio de la Programación Orientada a Objetos (POO)</p>
                `,
                learnList: [
                  'Manejo avanzado de Funciones',
                  'Listas, Tuplas, y COmprensión de Listas',
                  'Diccionarios y Conjuntos(Sets)',
                  'Módulos, Librerías y Entornos profesionales',
                  'Archivos y Persistencia de Datos',
                  'Manejo de Errores y Depuracíon',
                  'Programación Orientada a Objetos'
                ],
                requirements: [
                    'Buena conexión a internet',
                    'Computadora con Windows 10 o superior / Linux / MacOS',
                    'Procesador minimo: Dual Core 64 bits (I3, Ryzen 3, o equivalente)',
                    'Memoria RAM: 1GB Mínimo - 4GB Recomendado',
                    'Microfono',
                    'Conocimientos previos: Python Nivel Inicial'
                ],
            },
            'analisispy': {
                title: 'Analisis de Datos con Python',
                description: 'Aprende a analizar datos con Python usando librerias que facilitan el analisis y la visualizacion de datos',
                level: 'intermediate',
                levelText: 'Intermedio',
                duration: '8 clases',
                students: '1200+ estudiantes',
                image: './assets/img/courses/python-icon.webp',
                about: `
                    <p>En este curso vas a obtener nociones sólidas sobre el manejo de datos especiales en Python, así como la visualización de estadísticas e información especial desde la Web.</p>
                    <p>Internalizaras el uso, y conoceras la facilidad de distintas librerías en Python</p>
                    <p>Aprenderas cómo se comportan los pedidos HTTPS y a ser robusto a la hora de hacer programas.</p>
                `,
                learnList: [
                    'Librerías de uso estadístico y matemático',
                    'Introducción a los pedidos HTTP'
                ],
                requirements: [
                    'Buena conexión a internet',
                    'Computadora con Windows 10 o superior / Linux / MacOS',
                    'Procesador minimo: Dual Core 64 bits (I3, Ryzen 3, o equivalente)',
                    'Memoria RAM: 1GB Mínimo - 4GB Recomendado',
                    'Microfono',
                    'Conocimientos previos: Python Nivel Inicial'
                ],
            }
        };

export { courses };
