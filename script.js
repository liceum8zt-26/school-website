/* BURGER MENU */

const burgerMenu = document.querySelector('#burger-menu');
const header = document.querySelector('header');

burgerMenu.addEventListener('click', function() {
    header.classList.toggle('active');
})

/* MENU ITEMS */

const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', function () {
        header.classList.remove('active');
    })
});
