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
        typeSpeed: 20

    });

    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();
});

