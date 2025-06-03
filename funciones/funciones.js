document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".hamburguesa-menu");
  const menu = document.querySelector(".menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});