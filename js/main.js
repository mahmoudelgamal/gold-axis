$(document).ready(function () {
    // navigation hamburger button
    $('.navigation a, .collapse-btn').click(function () {
        $('.navigation__nav').toggleClass('open');
        $('.icon').toggleClass('close_')
    });


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
    // wow animation action fire
    var wow = new WOW();
    wow.init();

});
// image gallery 
const viewer =new Viewer(document.getElementById('gallery'), {
    title:false
});
    // get year number
const year = new Date().getFullYear();
document.getElementById('year').innerHTML = year