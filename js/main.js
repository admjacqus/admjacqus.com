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

$(function() {
    $('body').addClass('ready');
    // console.log( "ready!" );

});


// $('section.sites ul li a:not(.link)').hover(
//     function () {
//         //we get our current filename and use it for the src
//         var linkIndex = $(this).attr("data-filename");
//         $('section.sites ul li a:not(.link)').removeClass('active');
//         $(this).addClass('active');
//         $('#site-preview').attr('src', 'images/sites/' + linkIndex + '.jpeg');
//         $('#modal').removeClass("site1 site2 site3 site4 site5 site6").addClass(linkIndex);

//         // $('#modal').attr('class', linkIndex);
//     }
// );

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

$(".hi").click(function () {
    // alert("Handler for .click() called.");
    $('.window').toggleClass("active");
    $('a#close').toggleClass("active");
});