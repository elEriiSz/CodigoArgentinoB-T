// Datos de los cursos
import { courses } from './json-courses.js';

// Obtener parámetro de la URL
function getCourseFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('curso') || 'python';
}

// Cargar datos del curso
function loadCourseData() {
    const courseId = getCourseFromUrl();
    const course = courses[courseId] || courses['python'];
    
    // Actualizar datos en la página
    document.getElementById('course-title').textContent = course.title;
    document.getElementById('course-description').textContent = course.description;
    document.getElementById('course-duration').textContent = course.duration;
    //document.getElementById('course-students').textContent = course.students;
    document.getElementById('course-image').src = course.image;
    document.getElementById('course-image').alt = course.title;
    
    // Nivel del curso
    const levelBadge = document.querySelector('.course-level');
    levelBadge.className = 'course-level ' + course.level;
    levelBadge.textContent = course.levelText;
    
    // Sobre el curso
    document.getElementById('course-about').innerHTML = course.about;

    // Clase de prueba

    document.querySelector('#btn-trial').href = "https://wa.me/5493512445290?text=Hola!%20Quiero%20solicitar%20una%20clase%20de%20prueba%20para%20el%20curso%20de%20" + course.title;
    
    // Lo que aprenderás
    if(course.learnList != null) {
        document.getElementById('title-learnList').classList.remove('hiden');

        const learnList = document.getElementById('course-learn-list');
        learnList.innerHTML = course.learnList.slice(0, course.learnList.length).map(item => 
            `<li class="mb-2"><i class="fas fa-check text-success"></i> ${item}</li>`
        ).join('');
    }    

    // Requisitos

    const requirementsList = document.querySelector('#requirements-list');
    
    course.requirements.forEach((item) => {
        const li = document.createElement('li');
        li.classList.add('mb-2');
        const icon = document.createElement('i');
        icon.classList.add('fas', 'fa-check-circle', 'text-secondary', 'me-2');
        li.appendChild(icon);
        li.appendChild(document.createTextNode(item));
        requirementsList.appendChild(li);
    });
    
    // Testimonios
    // document.getElementById('testimonial-text-1').textContent = course.testimonials[0];
    // document.getElementById('testimonial-text-2').textContent = course.testimonials[1];
    // document.getElementById('testimonial-text-3').textContent = course.testimonials[2];
}

// Cargar los datos cuando la página esté lista
document.addEventListener('DOMContentLoaded', loadCourseData);
