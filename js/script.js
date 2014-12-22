$('.covervid-video').coverVid(1920, 1080);

fullscreen();
$(window).resize(fullscreen);
$(window).scroll(headerParallax);

function fullscreen() {
    var masthead = $('.covervid-wrapper');
    var windowH = $(window).height();
    var windowW = $(window).width();

    masthead.width(windowW);
    masthead.height(windowH);
}

function headerParallax() {
    var st = $(window).scrollTop();
    var headerScroll = $('.covervid-wrapper h1');

    if (st < 500) {
        headerScroll.css('opacity', 0.6-st/1000);
        $('.masthead-arrow ').css('opacity', 0.6-st/250);
        headerScroll.css({
            '-webkit-transform' : 'translateY(' + st/7 + '%)',
            '-ms-transform' : 'translateY(' + st/7 + '%)',
            transform : 'translateY(' + st/7 + '%)'
        });
    }
}