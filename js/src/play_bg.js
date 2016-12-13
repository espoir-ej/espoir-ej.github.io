//play_bg.js

(function($) {
	var espoirVideo = $('#video').get(0);
	$('.play').hide();
	$('.pause>button').on('click',function(e) {
		e.preventDefault();
		
		espoirVideo.pause();
		$('.play').show();
		$('.pause').hide();
		
		
	});
	$('.play>button').on('click',function(e) {
		e.preventDefault();
		
		espoirVideo.play();
		$('.play').hide();
		$('.pause').show();
	});
})(this.jQuery);

