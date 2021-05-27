const menu = document.querySelector("#mobile__menu");
const menuLinks = document.querySelector(".nav__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden"; // classs "loader hidden"
});
