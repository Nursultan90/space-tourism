$(document).ready(function() {
    $('.main__number').hover(function(event) {
        $(this).toggleClass('bg-white');
        $(this).toggleClass('text-black');
        $(this).toggleClass('cursor-pointer');
    });

    $('.main__number-1').click(function(event) {
        $('.main__image-1, .main__title-1, .main__text-1').addClass('active');
        $('.main__image-2, .main__title-2, .main__text-2').addClass('passive');
        $('.main__image-3, .main__title-3, .main__text-3').addClass('passive');
        $('.main__image-1, .main__title-1, .main__text-1').removeClass('passive');
        $('.main__image-2, .main__title-2, .main__text-2').removeClass('active');
        $('.main__image-3, .main__title-3, .main__text-3').removeClass('active');
    });
    $('.main__number-2').click(function(event) {
        $('.main__image-2, .main__title-2, .main__text-2').addClass('active');
        $('.main__image-1, .main__title-1, .main__text-1').addClass('passive');
        $('.main__image-3, .main__title-3, .main__text-3').addClass('passive');
        $('.main__image-2, .main__title-2, .main__text-2').removeClass('passive');
        $('.main__image-1, .main__title-1, .main__text-1').removeClass('active');
        $('.main__image-3, .main__title-3, .main__text-3').removeClass('active');
    });
    $('.main__number-3').click(function(event) {
        $('.main__image-3, .main__title-3, .main__text-3').addClass('active');
        $('.main__image-1, .main__title-1, .main__text-1').addClass('passive');
        $('.main__image-2, .main__title-2, .main__text-2').addClass('passive');
        $('.main__image-3, .main__title-3, .main__text-3').removeClass('passive');
        $('.main__image-1, .main__title-1, .main__text-1').removeClass('active');
        $('.main__image-2, .main__title-2, .main__text-2').removeClass('active');
    });

    $('.main__number-1').click(function(event) {
        $('.main__number-1').addClass('on');
        $('.main__number-2').addClass('off');
        $('.main__number-3').addClass('off');
        $('.main__number-1').removeClass('off');
        $('.main__number-2').removeClass('on');
        $('.main__number-3').removeClass('on');
    });
    $('.main__number-2').click(function(event) {
        $('.main__number-2').addClass('on');
        $('.main__number-1').addClass('off');
        $('.main__number-3').addClass('off');
        $('.main__number-2').removeClass('off');
        $('.main__number-1').removeClass('on');
        $('.main__number-3').removeClass('on');
    });
    $('.main__number-3').click(function(event) {
        $('.main__number-3').addClass('on');
        $('.main__number-2').addClass('off');
        $('.main__number-1').addClass('off');
        $('.main__number-3').removeClass('off');
        $('.main__number-2').removeClass('on');
        $('.main__number-1').removeClass('on');
    });
});