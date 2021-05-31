//initializing new Wow object on load of window
$(window).on('load', function() {
    new WOW().init();
});

function nesto() {
    const logo = document.getElementById('logo');
    
    logo.append('mrs bre');
    logo.classList.add('typing');
}