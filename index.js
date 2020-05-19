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

function handler () {
    fadeIn();
    fadeImgOnScroll();
}

$(handler);