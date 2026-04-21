/* BURGER MENU */

const burgerMenu = document.querySelector('#burger-menu');
const header = document.querySelector('header');

burgerMenu.addEventListener('click', function() {
    header.classList.toggle('active');
})
