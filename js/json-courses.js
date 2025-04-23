var courses = [
    {
        name: "PROGRAMACION PARA NIÑOS",
        hasTrial: true,
        icon: "./assets/icons/courses/icon-scratch.png",
        url:"./courses.html?course=prog-kids",
        courseRequirements: {
            "Edad requerida": "4 a 11 años",
            "Duracion del curso": "12 clases",
            "Conocimientos previos": "no se requiere"
        },
        technicalRequirements: {
            req1: "Buena conexión a internet",
            req2: "Computadora con Windows 10 o superior / Linux / MacOS",
            req3: "Procesador Intel Core i3 o superior"
        },
        description: {
            p1: "Aprender a programar desde una temprana edad ofrece una gran cantidad de beneficios que van más allá de simplemente preparar a los niños para un futuro. En nuestro de curso de programación en videojuegos los niños descubrirán el mundo de la programación de una manera divertida y aprenderán los conceptos básicos utilizando bloques secuenciales.",
            arr: {
                title: "Beneficios cognitivos y de desarrollo:",
                items: [
                    "Pensamiento lógico y resolución de problemas",
                    "Creatividad",
                    "Perseverancia",
                    "Colaboración"
                ]
            }
        }
    },
    {
        name: "PYTHON",
        hasTrial: true,
        icon: "./assets/icons/courses/icon-python.png",
        url:"./courses.html?course=py-teens",
        description: {
            p1: "Python es un lenguaje de alto nivel e interpretado. Una de sus caracteristicas es su facilidad de aprendizaje, lo que lo convierte en el lenguaje ideal para aquellos que recien esten comenzando a programar."
        },
        courseRequirements: {
            "Edad requerida": "12 a 16 años",
            "Duracion del curso": "8 clases",
            "Conocimientos previos": "no es necesario"
        },
        technicalRequirements: {
            req1: "Buena conexión a internet",
            req2: "Computadora con Windows 10 o superior / Linux / MacOS",
        }
    },
    {
        name: "PYTHON JOVENES",
        hasTrial: true,
        icon: "./assets/icons/courses/icon-python.png",
        url:"./courses.html?course=prog-python",
        description: {
            p2: "En nuestro curso de Python los estudiantes aprenderán los fundamentos de la programación a través de ejercicios prácticos, proyectos interactivos y desafíos entretenidos. Desde crear sus primeros scripts hasta desarrollar pequeñas aplicaciones, descubrirán cómo el código puede ser una herramienta poderosa para expresar ideas y automatizar tareas.",
            arr: {
                title: "¿Por qué Python?",
                items: [
                    "Sintaxis clara y facil de entender",
                    "Ideal para principiantes, pero usado en aplicaciones reales",
                    "Perfecto para desarrollo web, inteligencia artificial, videojuegos y más"
                ]
            }
        },
        courseRequirements: {
            "Edad requerida": "+12 años",
            "Duracion del curso": "8 clases",
            "Conocimientos previos": "no es necesario"
        },
        technicalRequirements: {
            req1: "Buena conexión a internet",
            req2: "Computadora con Windows 10 o superior / Linux / MacOS",
        }
    },
    {
        name: "JAVA",
        hasTrial: false,
        icon: "./assets/icons/courses/icon-java.png",
        url:"./courses.html?course=prog-java",
        description: {
            p1: "En nuestro curso de Java los estudiantes aprenderán los fundamentos de la programación orientada a objetos a través de ejercicios prácticos, proyectos interactivos y desafíos lógicos. Desde sus primeros programas de consola hasta el desarrollo de aplicaciones básicas, descubrirán cómo Java es la base de millones de sistemas, apps móviles y videojuegos.",
            arr: {
                title: "¿Por qué Java?",
                items: [
                    "Lenguaje estructurado y poderoso, ideal para aprender programación sólida",
                    "Usado en aplicaciones reales (Android, servidores, software empresarial)",
                    "Perfecto para entender conceptos avanzados como POO y algoritmos"
                ]
            }
        },
        courseRequirements: {
            "Edad requerida": "+17 años",
            "Duracion del curso": "8 clases",
            "Conocimientos previos": "no es necesario"
        },
        technicalRequirements: {
            req1: "Buena conexión a internet",
            req2: "Computadora con Windows 10 o superior / Linux / MacOS",
        }
    },
    {
        name: "R",
        hasTrial: false,
        icon: "./assets/icons/courses/icon-r.png",
        url:"./courses.html?course=prog-r",
        description: {
            p1: "Descubre el poder de los datos con R, el lenguaje líder en análisis estadístico y ciencia de datos. En este curso, los estudiantes aprenderán a manipular datos, crear visualizaciones impactantes y resolver problemas reales usando herramientas profesionales",
            arr: {
                title: "¿Por qué R?",
                items: [
                    "Usado por científicos, economistas y empresas globales",
                    "Ideal para desarrollar pensamiento lógico-matemático",
                    "Bases sólidas para carreras en tecnología, medicina o negocios"
                ]
            }
        },
        courseRequirements: {
            "Edad requerida": "+17 años",
            "Duracion del curso": "8 clases",
            "Conocimientos previos": "no es necesario"
        },
        technicalRequirements: {
            req1: "Buena conexión a internet",
            req2: "Computadora con Windows 10 o superior / Linux / MacOS",
        }
    },
    {
        name: "Diseño Web Site",
        hasTrial: false,
        icon: "./assets/icons/courses/icon-wdesign.png",
        url:"./courses.html?course=web-design",
        description: {
            p1: "Aprende a crear sitios web interactivos y modernos desde cero. En este curso, los estudiantes dominarán HTML, CSS y JavaScript para diseñar páginas web funcionales, adaptables y visualmente atractivas",
            arr: {
                title: "¿Por qué Diseño Web?",
                items: [
                    "Habilidad clave en la era digital",
                    "Usado en marketing, emprendimiento y tecnología"
                ]
            }
        },
        courseRequirements: {
            "Edad requerida": "+17 años",
            "Duracion del curso": "8 clases",
            "Conocimientos previos": "no es necesario"
        },
        technicalRequirements: {
            req1: "Buena conexión a internet",
            req2: "Computadora con Windows 10 o superior / Linux / MacOS",
        }
    }

];

export { courses };