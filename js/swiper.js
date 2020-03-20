var swiper = new Swiper('.swiper-container', {
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets'
            }
        },
        1024 : {
            navigation: {
                nextEl: '.arrow-next',
                prevEl: '.arrow-prev',
            },
            simulateTouch: false
        }
    }
});
