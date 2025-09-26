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
    themeIcon.src = "./assets/icons/sun-solid-full-dark.svg";
    menuIcon.src = "./assets/icons/bars-solid-full-dark.svg";
  } else {
    themeIcon.src = "./assets/icons/moon-solid-full.svg";
    menuIcon.src = "./assets/icons/bars-solid-full.svg";
  }
});

const setTheme = (mode) => {
  if (mode === "dark") {
    body.classList.add("dark-mode");
    themeIcon.src = "./assets/icons/sun-solid-full-dark.svg";
    menuIcon.src = "./assets/icons/bars-solid-full-dark.svg";
  } else {
    body.classList.remove("dark-mode");
  }
};

const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

setTheme(prefersDarkMode.matches ? "dark" : "light");

prefersDarkMode.addEventListener("change", (e) => {
  setTheme(e.matches ? "dark" : "light");
});
