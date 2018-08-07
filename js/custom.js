$(document).ready(function() {

	// SCROLLED
	$(window).scroll(function() {
		$('.header').toggleClass('header-scrolled', $(this).scrollTop() > 15);
		$('.slideshow').toggleClass('slideshow-scrolled', $(this).scrollTop() > 0);
		$('.banner').toggleClass('banner-scrolled', $(this).scrollTop() > 0);
	});


	// RESPONSIVE MENU
	$('.responsivebutton').click(function() {
		$('#responsivenavigation').toggleClass('responsivenavigation-show');
		$('.responsivebutton-sign').toggleClass('fa-caret-up');
	});


	// BACK TO TOP
	$('#totop').click(function() {
		$('html, body').animate({'scrollTop': '0px'}, 1000);
		return false;
	});

	
});