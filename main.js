const menuToggleBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const logoImage = document.getElementById("logo-img");
const themeIcon = document.getElementById("light-dark-toggle");
const menuIcon = document.getElementById("menu-toggle-icon");

menuToggleBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    console.log(menuIcon);
    themeIcon.src = "./assets/icons/sun-solid-full-dark.svg";
    menuIcon.src = "./assets/icons/bars-solid-full-dark.svg";
  } else {
    themeIcon.src = "./assets/icons/moon-solid-full.svg";
    menuIcon.src = "./assets/icons/bars-solid-full.svg";
  }
});
