function fadeIn () {
    $('.hero_box').fadeIn(500, function () {
        $('.hero_box p').delay(1000).fadeIn(500);
    });
}

function fadeImgOnScroll () {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 500) {
            $('#main img').fadeIn(400);
        } 
    });
    // $('#main img').delay(5000).fadeIn(1000);
}

$(".hamburger").on('click', function() {
		
    let $nav = $('nav');		

    $(this).toggleClass("open");
    if ($nav.hasClass('open-menu')) {
        $nav.removeClass('open-menu');
    } else {
        $nav.addClass('open-menu');
    }
 });

function fadeNavOnScroll() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 30) {
            $('#header').fadeOut(400);
        } else {
            $('#header').fadeIn(400);
        }
    });
}

function smoothScroll() {
    $('.nav_links').find('a').click(function() {
        let $href = $(this).attr('href');
        let $anchor = $('#'+href).offset();
        $('body').animate({ scrollTop: $anchor.top }, 3000);
        return false;
    });
}

$('a[href^="#"]').on('click', function(event) {

    let target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});

function handler () {
    // fadeIn();
    fadeImgOnScroll();
    fadeNavOnScroll();
    smoothScroll();
}

$(handler);