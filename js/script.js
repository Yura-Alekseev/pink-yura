let header = document.getElementById('header');
let burgerMenu = header.querySelector('.header__burger-menu-logo');
let closeBurgerMenu = header.querySelector('.burger-menu__header-close');

burgerMenu.onclick = function() {
    header.classList.add('burger-menu--open');
};

closeBurgerMenu.onclick = function() {
    header.classList.remove('burger-menu--open');
};




