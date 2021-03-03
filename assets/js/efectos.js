$(document).ready(function() {

    //EFECTO MENU

    $('.menu a').each(function(index) {
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 1000 + (index * 500))
    });

    //EFECTO HEADER

    if ($(window).width() > 800) {
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '-100px'
        }, 1500);
    };



    //SCROLL ELEMENTOS MENU
});