$( document ).ready(function() {

	var modal = $('.modal');
	$('.button').click(function() {
	 modal.fadeIn();
	});

	$('.close').click(function() {
	 modal.fadeOut();
	});

});