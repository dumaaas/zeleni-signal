//initializing new Wow object on load of window
$(window).on('load', function() {
    // setTimeout(function() {
    //     new WOW().init();
    //     $(".loader").hide();
    //     $(".showPage").fadeIn('slow');
    // }, 3800)
    new WOW().init();
    $(".owl-carousel").owlCarousel();

    $(".loader").hide();
    $(".showPage").fadeIn('slow');
});

//Trigering counter function on appear of section 13, only once
$(function() {
    var $triggered_times = true;
    $('.results-counter').appear();
    $('.results-counter').on('appear', function() {
        if ($triggered_times) {
            $('.count').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                })
            });
            $triggered_times = false; // to make sure the above action triggers only once
        }
    })
});


 //slider - Section 7
 $('.owl-carousel').owlCarousel({
    nav: true,
    loop: true,
    stagePadding: 0,
    items: 1,
    margin:0,
    singleItem:true,
    smartSpeed: 1200,
    autoplayHoverPause: true,
    navText: ["<img src='images/nav-left.webp' class='mx-auto' loading='lazy' alt='bildstudio'>", "<img src='images/nav-right.webp' class='mx-auto' loading='lazy' alt='bildstudio'>"],

});