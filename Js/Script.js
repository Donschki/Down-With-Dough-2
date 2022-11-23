//HAMBURGER MENU
let sideBar = document.querySelector(".side-bar");
let hamburger = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", () => {
    sideBar.classList.toggle("change");
    body.click.toggle("change")
});

document.querySelector('main').addEventListener('click', () => {
  sideBar.classList.remove('change');
});

document.querySelector('.contact-info-container').addEventListener('click', () => {
  sideBar.classList.remove('change');
});