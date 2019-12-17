$( document ).ready(function() {
    const btnCollapse = document.querySelector('.collapse-btn')
    const navigation__nav = document.querySelector('.navigation__nav')
    
    btnCollapse.addEventListener('click', () => {
        navigation__nav.classList.toggle('open')
    })
    
    // smoothe scroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true,
    });
    
    // typed
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        cursorChar: '',
        typeSpeed: 30

    });

    var wow = new WOW();
    wow.init();
});

const year = new Date().getFullYear();
document.getElementById('year').innerHTML=year

