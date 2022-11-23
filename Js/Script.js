//HAMBURGER MENU
let sideBar = document.querySelectorAll(".side-bar");
let hamburger = document.querySelectorAll(".hamburger-menu");

hamburger.addEventListener('click', () => {
    sideBar.classList.toggle("change");
    body.click.toggle("change")
});

document.querySelector('main').addEventListener('click', () => {
  sideBar.classList.remove('change');
});

document.querySelector('.contact-info-container').addEventListener('click', () => {
  sideBar.classList.remove('change');
});

