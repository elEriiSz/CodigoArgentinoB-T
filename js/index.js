var btnIg = document.querySelector(".icon-ig");
var btnWp = document.querySelector(".icon-wp");

btnIg.addEventListener("click", function () {
  window.open("https://www.instagram.com/codigo_argentino/", "_blank");
});

btnWp.addEventListener("click", function () {
  window.open("https://api.whatsapp.com/send/?phone=%2B5493512445290&text&type=phone_number&app_absent=0", "_blank");
});

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
