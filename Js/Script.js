//HAMBURGER MENU
let navBar = document.querySelector(".side-bar");
let menuIcon = document.querySelector(".hamburger-menu");

menuIcon.addEventListener("click", () => {
    navBar.classList.toggle("change");

});


const modal = document.getElementById("myModal"); // Get the modal

let btn = document.getElementById("myBtn"); // Get the button that opens the modal

const span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal

btn.onclick = function() {
    modal.style.display = "block"; // When the user clicks the button, open the modal 
}

span.onclick = function() {
    modal.style.display = "none"; // When the user clicks on <span> (x), close the modal
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // When the user clicks anywhere outside of the modal, close it
    }
}
console.log(close)