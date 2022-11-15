
$(document).ready(function() {
    $('.menu-btn').click(function(event) {
        $('.menu-btn, .nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.main-btn, .main-btn-layer').hover(function(event) {
        $('.main-btn-layer').toggleClass('active');
        $('.main-btn').toggleClass('cursor-active');
    });
    $('.main-btn').click(function(event) {
        location.href = "destination-moon.html";
    });
});