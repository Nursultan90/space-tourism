$(document).ready(function() {
    $('.slider1').click(function(event) {
        $('.main__image-1, .main__position-1, .main__title-1, .main__text-1').addClass('active');
        $('.main__image-2, .main__position-2, .main__title-2, .main__text-2').addClass('passive');
        $('.main__image-3, .main__position-3, .main__title-3, .main__text-3').addClass('passive');
        $('.main__image-4, .main__position-4, .main__title-4, .main__text-4').addClass('passive');
        $('.main__image-1, .main__position-1, .main__title-1, .main__text-1').removeClass('passive');
        $('.main__image-2, .main__position-2, .main__title-2, .main__text-2').removeClass('active');
        $('.main__image-3, .main__position-3, .main__title-3, .main__text-3').removeClass('active');
        $('.main__image-4, .main__position-4, .main__title-4, .main__text-4').removeClass('active');
    });
    $('.slider2').click(function(event) {
        $('.main__image-2, .main__position-2, .main__title-2, .main__text-2').addClass('active');
        $('.main__image-1, .main__position-1, .main__title-1, .main__text-1').addClass('passive');
        $('.main__image-3, .main__position-3, .main__title-3, .main__text-3').addClass('passive');
        $('.main__image-4, .main__position-4, .main__title-4, .main__text-4').addClass('passive');
        $('.main__image-2, .main__position-2, .main__title-2, .main__text-2').removeClass('passive');
        $('.main__image-1, .main__position-1, .main__title-1, .main__text-1').removeClass('active');
        $('.main__image-3, .main__position-3, .main__title-3, .main__text-3').removeClass('active');
        $('.main__image-4, .main__position-4, .main__title-4, .main__text-4').removeClass('active');
    });
    $('.slider3').click(function(event) {
        $('.main__image-3, .main__position-3, .main__title-3, .main__text-3').addClass('active');
        $('.main__image-1, .main__position-1, .main__title-1, .main__text-1').addClass('passive');
        $('.main__image-2, .main__position-2, .main__title-2, .main__text-2').addClass('passive');
        $('.main__image-4, .main__position-4, .main__title-4, .main__text-4').addClass('passive');
        $('.main__image-3, .main__position-3, .main__title-3, .main__text-3').removeClass('passive');
        $('.main__image-1, .main__position-1, .main__title-1, .main__text-1').removeClass('active');
        $('.main__image-2, .main__position-2, .main__title-2, .main__text-2').removeClass('active');
        $('.main__image-4, .main__position-4, .main__title-4, .main__text-4').removeClass('active');
    });
    $('.slider4').click(function(event) {
        $('.main__image-4, .main__position-4, .main__title-4, .main__text-4').addClass('active');
        $('.main__image-1, .main__position-1, .main__title-1, .main__text-1').addClass('passive');
        $('.main__image-2, .main__position-2, .main__title-2, .main__text-2').addClass('passive');
        $('.main__image-3, .main__position-3, .main__title-3, .main__text-3').addClass('passive');
        $('.main__image-4, .main__position-4, .main__title-4, .main__text-4').removeClass('passive');
        $('.main__image-1, .main__position-1, .main__title-1, .main__text-1').removeClass('active');
        $('.main__image-2, .main__position-2, .main__title-2, .main__text-2').removeClass('active');
        $('.main__image-3, .main__position-3, .main__title-3, .main__text-3').removeClass('active');
    });

    $('.slider1').click(function(event) {
        $('.slider1').addClass('on');
        $('.slider2').addClass('off');
        $('.slider3').addClass('off');
        $('.slider4').addClass('off');
        $('.slider1').removeClass('off');
        $('.slider2').removeClass('on');
        $('.slider3').removeClass('on');
        $('.slider4').removeClass('on');
    });
    $('.slider2').click(function(event) {
        $('.slider2').addClass('on');
        $('.slider1').addClass('off');
        $('.slider3').addClass('off');
        $('.slider4').addClass('off');
        $('.slider2').removeClass('off');
        $('.slider1').removeClass('on');
        $('.slider3').removeClass('on');
        $('.slider4').removeClass('on');
    });
    $('.slider3').click(function(event) {
        $('.slider3').addClass('on');
        $('.slider2').addClass('off');
        $('.slider1').addClass('off');
        $('.slider4').addClass('off');
        $('.slider3').removeClass('off');
        $('.slider2').removeClass('on');
        $('.slider1').removeClass('on');
        $('.slider4').removeClass('on');
    });
    $('.slider4').click(function(event) {
        $('.slider4').addClass('on');
        $('.slider2').addClass('off');
        $('.slider3').addClass('off');
        $('.slider1').addClass('off');
        $('.slider4').removeClass('off');
        $('.slider2').removeClass('on');
        $('.slider3').removeClass('on');
        $('.slider1').removeClass('on');
    });
});
