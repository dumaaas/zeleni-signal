//initializing new Wow object on load of window
$(window).on('load', function() {
    // setTimeout(function() {
    //     new WOW().init();
    //     $(".loader").hide();
    //     $(".showPage").fadeIn('slow');
    // }, 3800)
    new WOW().init();
    $(".loader").hide();
    $(".showPage").fadeIn('slow');
});

function nesto() {
    const logo = document.getElementById('logo');
    
    logo.append('mrs bre');
    logo.classList.add('typing');
}