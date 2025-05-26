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
