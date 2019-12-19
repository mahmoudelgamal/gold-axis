$(window).on("load", function () {
    $('body').css('overflow', 'auto');
    $('.sk-circle').fadeOut(1000, function () {
        $('.overlay-section').fadeOut(1000, function () {
            $(this).remove()
        })
    })

})

$(document).ready(function () {
    // navigation hamburger button
    $('.navigation a, .collapse-btn').click(function () {
        $('.navigation__nav').toggleClass('open');
        $('.icon').toggleClass('close_')
    });


    // smoothe scroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true,
    });

    // typed
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        cursorChar: '',
        typeSpeed: 30,
        startDelay: 2000,

    });
    // wow animation action fire
    var wow = new WOW();
    wow.init();

});

// get year number
const year = new Date().getFullYear();
document.getElementById('year').innerHTML = year;