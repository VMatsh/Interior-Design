
$(function() {
    $(window).scroll(function() {

		var addSense = $( ".addSense" ).offset().top;


        if($(window).scrollTop() >= addSense - 150 && $(window).scrollTop() <= ($(document).height() - 500)) {
            $('#addSns').addClass('animate');
        } else {
            $('#addSns').removeClass('animate');
        }

		if($(window).scrollTop() >= 236 && $(window).scrollTop() <= ($(document).height() - 500)) {
			$('.menu').addClass('header-menu-fix');
		} else {
			$('.menu').removeClass('header-menu-fix');
		}

		if($(window).scrollTop() >= 400 && $(window).scrollTop() <= ($(document).height() - 500)) {
			$('.bobo').addClass('animate');
		} else {
			$('.bobo').removeClass('animate');
		}
		
		if($(window).scrollTop() >= 600 && $(window).scrollTop() <= ($(document).height() - 500)) {
			$('.news_rect').addClass('animate');
		} else {
			$('.news_rect').removeClass('animate');
		}
		
		if($(window).scrollTop() >= 900 && $(window).scrollTop() <= ($(document).height() - 500)) {
			$('.upd_ul').addClass('animate');
		} else {
			$('.upd_ul').removeClass('animate');
		}
		
		if($(window).scrollTop() >= 1000 && $(window).scrollTop() <= ($(document).height() - 650)) {
			$('.latest_news').addClass('animate');
		} else {
			$('.latest_news').removeClass('animate');
		}
		
		if($(window).scrollTop() >= 1200 && $(window).scrollTop() <= ($(document).height() - 870)) {
			$('.beautifying').addClass('animate');
		} else {
			$('.beautifying').removeClass('animate');
		}
		
    });
});

