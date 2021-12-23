let menuButton = document.querySelector('.hamburger-menu');
let menuItem = document.querySelector('header ul');

menuButton.addEventListener('click', displayMenu);


// function for displaying menu
function displayMenu(){
    menuItem.classList.toggle('displayMenu');
}