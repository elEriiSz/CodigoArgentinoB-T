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
    
    // Lo que aprenderás
    if(course.learnList != null) {
        document.getElementById('title-learnList').classList.remove('hiden');

        const learnList = document.getElementById('course-learn-list');
        learnList.innerHTML = course.learnList.slice(0, 3).map(item => 
            `<li class="mb-2"><i class="fas fa-check text-success me-2"></i> ${item}</li>`
        ).join('');
    }
    
    // Temario
    // const syllabusContainer = document.getElementById('course-syllabus');
    // syllabusContainer.innerHTML = course.syllabus.map((section, index) => `
    //     <div class="accordion-item">
    //         <h2 class="accordion-header" id="heading${index}">
    //             <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="collapse${index}">
    //                 ${section.title}
    //             </button>
    //         </h2>
    //         <div id="collapse${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="heading${index}" data-bs-parent="#course-syllabus">
    //             <div class="accordion-body">
    //                 <ul class="list-unstyled">
    //                     ${section.items.map(item => `<li class="mb-2"><i class="fas fa-circle text-secondary me-2" style="font-size: 0.5rem;"></i> ${item}</li>`).join('')}
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
    // `).join('');
    
    // Instructor

    course.instructors.forEach((instructor) => {

        var card = document.createElement('div');
        card.classList.add('instructor-card', 'bg-white', 'p-4');

        var rowCard = document.createElement('div');
        rowCard.classList.add('row', 'align-items-center');

        var colCardImg = document.createElement('div');
        colCardImg.classList.add('col-md-3', 'text-center');

        var img = document.createElement('img');
        img.src = instructor.image || "";
        img.id = 'instructor-image';
        img.classList.add('img-fluid', 'rounded-circle', 'mb-3', 'mb-md-0');
        img.style.width = '120px';
        img.style.height = '120px';
        img.style.objectFit = 'cover';
        colCardImg.appendChild(img);

        var colCardInfo = document.createElement('div');
        colCardInfo.classList.add('col-md-9');

        var name = document.createElement('h3');
        name.id = 'instructor-name';
        name.classList.add('fw-bold', 'mb-2');
        name.textContent = instructor.name;
        colCardInfo.appendChild(name);

        var title = document.createElement('p');
        title.id = 'instructor-title';
        title.classList.add('text-secondary', 'mb-3');
        title.textContent = instructor.title;
        colCardInfo.appendChild(title);

        var bio = document.createElement('div');
        bio.id = 'instructor-bio';
        bio.classList.add('mb-3');
        bio.innerHTML = `<p>${instructor.bio}</p>`;
        colCardInfo.appendChild(bio);

        var socialLinks = document.createElement('div');
        socialLinks.classList.add('d-flex', 'gap-3');

        var linkedinLink = document.createElement('a');
        linkedinLink.classList.add('text-secondary');
        linkedinLink.id = 'instructor-linkedin';
        linkedinLink.href = instructor.linkedin || '#';
        var linkedinIcon = document.createElement('i');
        linkedinIcon.classList.add('fab', 'fa-linkedin', 'fa-lg');
        linkedinLink.appendChild(linkedinIcon);
        socialLinks.appendChild(linkedinLink);
        
        var githubLink = document.createElement('a');
        githubLink.classList.add('text-secondary');
        githubLink.href = instructor.github || '#';
        githubLink.id = 'instructor-github';
        var githubIcon = document.createElement('i');
        githubIcon.classList.add('fab', 'fa-github', 'fa-lg');
        githubLink.appendChild(githubIcon);
        socialLinks.appendChild(githubLink);
        
        colCardInfo.appendChild(socialLinks);
        rowCard.appendChild(colCardImg);
        rowCard.appendChild(colCardInfo);
        card.appendChild(rowCard);

        document.getElementById('card-container').appendChild(card);
    
    });

    if (course.instructors.length == 0) {
        document.getElementById('instructors-title').classList.add('d-none');
    }

    // document.getElementById('instructor-name').textContent = course.instructor.name;
    // document.getElementById('instructor-title').textContent = course.instructor.title;
    // document.getElementById('instructor-bio').innerHTML = `<p>${course.instructor.bio}</p>`;
    // document.getElementById('instructor-image').src = course.instructor.image;
    // document.getElementById('instructor-image').alt = course.instructor.name;
    // document.getElementById('instructor-linkedin').href = course.instructor.linkedin;
    // document.getElementById('instructor-github').href = course.instructor.github;

    // Requirements

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