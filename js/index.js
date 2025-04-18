var btnIg = document.querySelector(".icon-ig");
var btnWp = document.querySelector(".icon-wp");
var btnTrial = document.querySelector("#btn-trial");

btnIg.addEventListener("click", function () {
  window.open("https://www.instagram.com/codigo_argentino/", "_blank");
});

btnWp.addEventListener("click", function () {
  window.open("https://api.whatsapp.com/send/?phone=%2B5493512445290&text&type=phone_number&app_absent=0", "_blank");
});

btnTrial.addEventListener("click", function () {
  window.open("https://api.whatsapp.com/send?phone=+5493512445290&text=Hola!%20Quiero%20coordinar%20una%20clase%20de%20prueba%20%F0%9F%98%8A", "_blank");
});