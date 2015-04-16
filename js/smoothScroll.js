// Home

$("#homeNav").click(function() {
    $('html, body').animate({
        scrollTop: $(".home").offset().top
    }, 1000);
});

// Work

$("#workNav").click(function() {
    $('html, body').animate({
        scrollTop: $(".work").offset().top
    }, 1000);
});

// About

$("#aboutNav").click(function() {
    $('html, body').animate({
        scrollTop: $(".aboutTop").offset().top
    }, 1000);
});

// Contact
//
// $("#contactNav").click(function() {
//     $('html, body').animate({
//         scrollTop: $(".contact").offset().top
//     }, 1000);
// });
