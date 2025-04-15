import {courses} from "./json-courses.js"

var courseImg = document.querySelector("#course-pic");

var urlParam = new URLSearchParams(window.location.search);
var courseParam = urlParam.get('course');
var course = courses.find(course => course.url.includes(courseParam));
var btnContact = document.querySelector('#btn-contact');
btnContact.addEventListener('click', function() {
    window.location.href = course.contactForm;
});

courseImg.src = course.icon;


var ulCourseReq = document.querySelector('#courseReq');
var ulTechReq = document.querySelector('#techReq');
var description = document.querySelector('.card-text');

for(var req in course.courseRequirements){
    var li = document.createElement('li');
    li.innerText = req + ': ' + course.courseRequirements[req];
    ulCourseReq.appendChild(li);
}

for(var req in course.technicalRequirements){
    var li = document.createElement('li');
    li.innerText = course.technicalRequirements[req];
    ulTechReq.appendChild(li);
}

for(var key in course.description){
    if(typeof(course.description[key]) == 'string'){
        description.innerText = course.description[key];
    }else{
        var title = document.createElement('h5');
        title.innerText = course.description[key].title;
        description.appendChild(title);
        var ul = document.createElement('ul');
        course.description[key].items.forEach(item => {
            var li = document.createElement('li');
            li.innerText = item;
            ul.appendChild(li);
        });
        description.appendChild(ul);
    }
}