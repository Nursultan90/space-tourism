$(document).ready(function() {
    $('.menu-btn').click(function(event) {
        $('.menu-btn, .nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
    
    $('.list-item-moon').click(function(event) {
        $('.main-image-1, .main-title-1, .main-text-1, .distance-1, .travel-time-1').addClass('active');
        $('.main-image-1, .main-title-1, .main-text-1, .distance-1, .travel-time-1').removeClass('passive');
        $('.main-image-2, .main-title-2, .main-text-2, .distance-2, .travel-time-2').addClass('passive');
        $('.main-image-3, .main-title-3, .main-text-3, .distance-3, .travel-time-3').addClass('passive');
        $('.main-image-4, .main-title-4, .main-text-4, .distance-4, .travel-time-4').addClass('passive');
        $('.main-image-2, .main-title-2, .main-text-2, .distance-2, .travel-time-2').removeClass('active');
        $('.main-image-3, .main-title-3, .main-text-3, .distance-3, .travel-time-3').removeClass('active');
        $('.main-image-4, .main-title-4, .main-text-4, .distance-4, .travel-time-4').removeClass('active');
    });
    $('.list-item-mars').click(function(event) {
        $('.main-image-2, .main-image-2, .main-title-2, .main-text-2, .distance-2, .travel-time-2').addClass('active');
        $('.main-image-2, .main-title-2, .main-text-2, .distance-2, .travel-time-2').removeClass('passive');
        $('.main-image-1, .main-title-1, .main-text-1, .distance-1, .travel-time-1').addClass('passive');
        $('.main-image-3, .main-title-3, .main-text-3, .distance-3, .travel-time-3').addClass('passive');
        $('.main-image-4, .main-title-4, .main-text-4, .distance-4, .travel-time-4').addClass('active');
        $('.main-image-1, .main-title-1, .main-text-1, .distance-1, .travel-time-1').removeClass('active');
        $('.main-image-3, .main-title-3, .main-text-3, .distance-3, .travel-time-3').removeClass('active');
        $('.main-image-4, .main-title-4, .main-text-4, .distance-4, .travel-time-4').removeClass('active');
    });
    $('.list-item-europa').click(function(event) {
        $('.main-image-3, .main-title-3, .main-text-3, .distance-3, .travel-time-3').addClass('active');
        $('.main-image-3, .main-title-3, .main-text-3, .distance-3, .travel-time-3').removeClass('passive');
        $('.main-image-1, .main-title-1, .main-text-1, .distance-1, .travel-time-1').addClass('passive');
        $('.main-image-2, .main-title-2, .main-text-2, .distance-2, .travel-time-2').addClass('passive');
        $('.main-image-4, .main-title-4, .main-text-4, .distance-4, .travel-time-4').addClass('passive');
        $('.main-image-1, .main-title-1, .main-text-1, .distance-1, .travel-time-1').removeClass('active');
        $('.main-image-2, .main-title-2, .main-text-2, .distance-2, .travel-time-2').removeClass('active');
        $('.main-image-4, .main-title-4, .main-text-4, .distance-4, .travel-time-4').removeClass('active');
    });
    $('.list-item-titan').click(function(event) {
        $('.main-image-4, .main-title-4, .main-text-4, .distance-4, .travel-time-4').addClass('active');
        $('.main-image-4, .main-title-4, .main-text-4, .distance-4, .travel-time-4').removeClass('passive');
        $('.main-image-1, .main-title-1, .main-text-1, .distance-1, .travel-time-1').addClass('passive');
        $('.main-image-2, .main-title-2, .main-text-2, .distance-2, .travel-time-2').addClass('passive');
        $('.main-image-3, .main-title-3, .main-text-3, .distance-3, .travel-time-3').addClass('passive');
        $('.main-image-1, .main-title-1, .main-text-1, .distance-1, .travel-time-1').removeClass('active');
        $('.main-image-2, .main-title-2, .main-text-2, .distance-2, .travel-time-2').removeClass('active');
        $('.main-image-3, .main-title-3, .main-text-3, .distance-3, .travel-time-3').removeClass('active');
    });

    $('.list-item-moon').click(function(event) {
        $('.list-item-moon').addClass('on');
        $('.list-item-moon').removeClass('off');
        $('.list-item-mars').addClass('off');
        $('.list-item-europa').addClass('off');
        $('.list-item-titan').addClass('off');
        $('.list-item-mars').removeClass('on');
        $('.list-item-europa').removeClass('on');
        $('.list-item-titan').removeClass('on');
    });
    $('.list-item-mars').click(function(event) {
        $('.list-item-mars').addClass('on');
        $('.list-item-mars').removeClass('off');
        $('.list-item-moon').addClass('off');
        $('.list-item-europa').addClass('off');
        $('.list-item-titan').addClass('off');
        $('.list-item-moon').removeClass('on');
        $('.list-item-europa').removeClass('on');
        $('.list-item-titan').removeClass('on');
    });
    $('.list-item-europa').click(function(event) {
        $('.list-item-europa').addClass('on');
        $('.list-item-europa').removeClass('off');
        $('.list-item-moon').addClass('off');
        $('.list-item-mars').addClass('off');
        $('.list-item-titan').addClass('off');
        $('.list-item-moon').removeClass('on');
        $('.list-item-mars').removeClass('on');
        $('.list-item-titan').removeClass('on');
    });
    $('.list-item-titan').click(function(event) {
        $('.list-item-titan').addClass('on');
        $('.list-item-titan').removeClass('off');
        $('.list-item-moon').addClass('off');
        $('.list-item-mars').addClass('off');
        $('.list-item-europa').addClass('off');
        $('.list-item-moon').removeClass('on');
        $('.list-item-mars').removeClass('on');
        $('.list-item-europa').removeClass('on');
    });
});