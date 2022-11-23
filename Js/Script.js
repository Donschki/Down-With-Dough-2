//HAMBURGER MENU
const sideBar = document.querySelector(".side-bar");
const hamburger = document.querySelector(".hamburgerBox");

hamburger.addEventListener('click', () => {
    sideBar.classList.toggle("change");
    body.click.toggle("change");
});

document.querySelector('main').addEventListener('click', () => {
  sideBar.classList.remove('change');
});

document.querySelector('.contact-info-container').addEventListener('click', () => {
  sideBar.classList.remove('change');
});

