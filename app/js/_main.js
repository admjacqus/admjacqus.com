$('nav.big-menu li a').hover(
    function () {
        //we get our current filename and use it for the src
        var linkIndex = $(this).attr("data-filename");
        $(this).addClass('hover');
        $('#menu-preview').attr('src', 'images/' + linkIndex + '.jpg');
    },
    function () {
        $(this).removeClass('hover');
        $('.box img').attr('src', 'default.jpg');
    }
);

$('section.sites ul li a:not(.link)').hover(
    function () {
        //we get our current filename and use it for the src
        var linkIndex = $(this).attr("data-filename");
        $('section.sites ul li a:not(.link)').removeClass('active');
        $(this).addClass('active');
        $('#site-preview').attr('src', 'images/sites/' + linkIndex + '.jpeg');
        $('#modal').removeClass("site1 site2 site3 site4 site5 site6").addClass(linkIndex);

        // $('#modal').attr('class', linkIndex);
    }
);

$.cloudinary.responsive();

// function randombg() {
//     var random = Math.floor(Math.random() * 6) + 0;
//     var bigSize = ["url('http://res.cloudinary.com/dsvt6q8vh/image/upload/v1527553415/2.jpg')",
//         // "url('http://res.cloudinary.com/dsvt6q8vh/image/upload/v1527596637/tumblr_mdece8IsFm1r3y2qco1_1280.jpg')",
//         // "url('http://res.cloudinary.com/dsvt6q8vh/image/upload/v1527596632/tumblr_mis5u4f9761r3y2qco1_1280.png')",
//         "url('http://res.cloudinary.com/dsvt6q8vh/image/upload/v1527553488/4.png')",
//         // "url('http://res.cloudinary.com/dsvt6q8vh/image/upload/v1527614846/beer.jpg')",
//         "url('http://res.cloudinary.com/dsvt6q8vh/image/upload/v1527550614/1.jpg')"
//     ];
//     document.getElementById("random").style.backgroundImage = bigSize[random];
// }
var is_mobile = false;

function checkMob() {

    if ($('.on-desk').css('display') == 'none') {
        is_mobile = true;
    }

}
$(document).ready(function () {
    checkMob();
    $('#DVD').DVDBounce();
});

$(".hi").click(function () {
    // alert("Handler for .click() called.");
    $('.window').toggleClass("active");
    $('a#close').toggleClass("active");
});

$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};


var inSites = false,
    sites = $('#sites'),
    sitePrv = $('#site-preview'),
    sitesOffset = sites.offset();

$(window).on('resize scroll', function (e) {
    checkMob();

    if (is_mobile == true) {
        if ($('.site1').isInViewport()) {
            $('#site-preview').attr('src', '/images/sites/site1mb.jpeg');
            console.log("image 1");
        }
        if ($('.site2').isInViewport()) {
            $('#site-preview').attr('src', '/images/sites/site2m.jpeg');
        }
        if ($('.site3').isInViewport()) {
            $('#site-preview').attr('src', '/images/sites/site3m.jpeg');
        }
        if ($('.site4').isInViewport()) {
            $('#site-preview').attr('src', '/images/sites/site4m.jpeg');
        }
        if ($('.site5').isInViewport()) {
            $('#site-preview').attr('src', '/images/sites/site5m.jpeg');
        }
        if ($('.site6').isInViewport()) {
            $('#site-preview').attr('src', '/images/sites/site6m.jpeg');
        }
        if ($('.sites').isInViewport()) {
            sitePrv.addClass("active");
        } else {
            sitePrv.removeClass("active");
            $('#site-preview').attr('src', '');
        }
    }


});