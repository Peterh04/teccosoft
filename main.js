const menuToggleBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const logoImage = document.getElementById("logo-img");

menuToggleBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    logoImage.src = "./assets/logo_dark.png";
    document.querySelector(".web-icon").src =
      "./assets/icons/laptop-solid-dark.svg";
    document.querySelector(".globe-icon").src =
      "./assets/icons/globe-solid-dark.svg";
    document.querySelector(".mobile-icon").src =
      "./assets/icons/mobile-solid-full-dark.svg";
    document.querySelector(".server-icon").src =
      "./assets/icons/server-solid-dark.svg";
    document.querySelector(".tools-icon").src =
      "./assets/icons/screwdriver-wrench-solid-dark.svg";
    document.querySelector(".palette-icon").src =
      "../assets/icons/palette-solid-full-dark.svg";
  } else {
  }
});
