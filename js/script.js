let header = document.getElementById('header');
let burgerMenu = header.querySelector('.burger-open');
let closeBurgerMenu = header.querySelector('.burger-close');

burgerMenu.addEventListener('click', function () {
    header.classList.add('burger--open');
});

closeBurgerMenu.addEventListener('click', function () {
    header.classList.remove('burger--open');
});





