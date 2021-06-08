//initializing new Wow object on load of window
$(window).on('load', function () {
    // setTimeout(function() {
    //     new WOW().init();
    //     $(".loader").hide();
    //     $(".showPage").fadeIn('slow');
    // }, 3800)
    new WOW().init();
    $(".owl-carousel").owlCarousel();

    $(".loader").hide();
    $(".showPage").fadeIn('slow');
    
    //to avoid exepction on Lighthouse report for passive listeners
    jQuery.event.special.touchstart = {
        setup: function (_, ns, handle) {
            this.addEventListener("touchstart", handle, {
                passive: true
            });
        }
    };

    //smooth scroling to the top of page
    var btn = $('#top-btn');

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '500');
    });

    //smooth scrolling on links of asside nav
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {

                window.location.hash = hash;
            });
        }
    });
});

$(window).on('scroll', function () {
    var sticky = $('#header');
    var scrollPos = $(window).scrollTop();

    //adding fixed header with animation 
    if (scrollPos > 34) {
        sticky.addClass('header-top');
    } else {
        sticky.removeClass('header-top');
    }

    //changing links style of sections on scrolling
    $('#header-menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos  && refElement.position().top + refElement.height() > scrollPos ) {
            $('#header-menu ul li a').removeClass("active-link");
            currLink.addClass("active-link");
        } else {
            currLink.removeClass("active-link");
        }
    });

    // showing to the top btn 
    if ($(window).scrollTop() > 300) {
        $('#top-btn').addClass('show');
    } else {
        $('#top-btn').removeClass('show');
    }
})

//Trigering counter function on appear of section 13, only once
$(function () {
    var $triggered_times = true;
    $('.results-counter').appear();
    $('.results-counter').on('appear', function () {
        if ($triggered_times) {
            $('.count').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
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
    margin: 0,
    singleItem: true,
    smartSpeed: 1200,
    autoplayHoverPause: true,
    navText: ["<img src='images/nav-left.webp' class='mx-auto' loading='lazy' alt='bildstudio'>", "<img src='images/nav-right.webp' class='mx-auto' loading='lazy' alt='bildstudio'>"],

});


function hamburger() {
    if (document.getElementById("hamburger-btn").classList.contains("hamburger-btn-close")) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    // document.getElementById("menu").classList.add('menu-open');
    document.getElementById("bar1").classList.add('bar1');
    document.getElementById("bar2").classList.add('bar2');
    document.getElementById("bar3").classList.add('bar3');
    document.getElementById("hamburger-btn").classList.add("hamburger-btn-close");
}

function closeMenu() {
    document.getElementById("bar1").classList.remove('bar1');
    document.getElementById("bar2").classList.remove('bar2');
    document.getElementById("bar3").classList.remove('bar3');
    document.getElementById("hamburger-btn").classList.remove("hamburger-btn-close");
}