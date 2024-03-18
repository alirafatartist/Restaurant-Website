const logo = document.querySelector(".logo");
const menu = document.querySelector(".fa-bars");
const links = document.querySelector("nav ul");
// const img = document.querySelector("nav ul");

function changeimgsrc() {
  if (window.innerWidth <= 768) {
    logo.setAttribute("src", "./assets/logo-white.png");
  } else {
    logo.setAttribute("src", "./assets/logo-dark.png");
  }
}
changeimgsrc();

window.addEventListener("resize", () => {
  changeimgsrc();
});

// toggle menubar
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-xmark");
  menu.classList.toggle("rotate");
  links.classList.toggle("show");
});

// scroll reveal
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  delay: 500,
  useDelay: "onload",
  reset: true,
};
ScrollReveal().reveal(".home img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".home .content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".home .content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".menu .cards .card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".contactus img", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".header li", {
  interval: 200,
});
