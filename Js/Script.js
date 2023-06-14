//HAMBURGER MENU
const sideBar = document.querySelector(".top-bar");
const hamburger = document.querySelector(".hamburgerBox");

hamburger.addEventListener('click', () => {
    sideBar.classList.toggle("change");
    body.click.toggle("change");
});


// SLIDESHOW SCRIPT 

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// OFF CLICK SCRIPT 

 document.querySelector('main').addEventListener('click', () => {
 sideBar.classList.remove('change');
});

 document.querySelector('.contact-info-container').addEventListener('click', () => {
 sideBar.classList.remove('change');
});



