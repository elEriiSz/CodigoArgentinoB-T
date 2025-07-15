window.addEventListener("load", function () {
  const toastElement = document.getElementById('liveToast');
  const toast = new bootstrap.Toast(toastElement);
  toast.show();
});

var btnClose = document.querySelector(".btn-close");
btnClose.addEventListener("click", function () {
  const toastElement = document.getElementById('liveToast');
  const toast = new bootstrap.Toast(toastElement);
  toast.hide();
});

function changeParagraphsMinHeight() {
  const paragraphs = document.querySelectorAll('.course-content p');
  let max_height = 0;
  for (var i = 0; i < paragraphs.length; i++) {
    if(paragraphs[i].offsetHeight > max_height){
      max_height = paragraphs[i].offsetHeight;
    };
  };
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.minHeight = `${max_height}px`;
  };
};
changeParagraphsMinHeight();
window.addEventListener('resize', function() {
  changeParagraphsMinHeight();
});
