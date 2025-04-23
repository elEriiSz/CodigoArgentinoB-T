import {courses} from "./json-courses.js"

var courseImg = document.querySelector("#course-pic");

var urlParam = new URLSearchParams(window.location.search);
var courseParam = urlParam.get('course');
var course = courses.find(course => course.url.includes(courseParam));
var btnContact = document.querySelector('#btn-contact');
btnContact.addEventListener('click', function() {
    window.location.href = "https://api.whatsapp.com/send?phone=+5493512445290&text=Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20del%20curso%20de%20" + course.name + "%20%F0%9F%98%8A";
});

courseImg.src = course.icon;


var ulCourseReq = document.querySelector('#courseReq');
var ulTechReq = document.querySelector('#techReq');
var description = document.querySelector('.card-text');
var btnTrial = document.querySelector('.btn-trial');

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

for (var key in course.description) {
    if (typeof(course.description[key]) == 'string') {
        var paragraph = document.createElement('p'); // Create a paragraph for each string
        paragraph.innerText = course.description[key];
        description.appendChild(paragraph); // Append it to the description
        console.log(course.description[key]);
    } else {
        var title = document.createElement('h5'); // H5
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

if(course.hasTrial){
    btnTrial.addEventListener("click", function () {
        window.open("https://api.whatsapp.com/send?phone=+5493512445290&text=Hola!%20Quiero%20coordinar%20una%20clase%20de%20prueba%20%F0%9F%98%8A", "_blank");
      });
}else{
    btnTrial.style.display = "none";
}