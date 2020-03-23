let header = document.getElementById('header');
let burgerMenu = header.querySelector('.header__burger-menu-logo');
let closeBurgerMenu = header.querySelector('.header__burger-menu-close');

burgerMenu.addEventListener('click', function () {
    header.classList.add('burger-menu--open');
});

closeBurgerMenu.addEventListener('click', function () {
    header.classList.remove('burger-menu--open');
});





