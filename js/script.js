let header = document.getElementById('header');
let burgerMenu = header.querySelector('.burger__toggle');

burgerMenu.addEventListener('change', () => {
    header.classList.toggle('burger--open');
});

let popup = document.querySelectorAll('.pop-up');
let closePopup = document.querySelectorAll('.pop-up .button');
closePopup.forEach(function (item) {
    item.addEventListener('click', () => {
        popup.forEach(function (item) {
            item.classList.add('hide-popup');
        })
    })
});








