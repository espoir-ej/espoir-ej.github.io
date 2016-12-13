// addBanner.js

 (function($) {

var left = $('.left_btn');
var right = $('.right_btn');
var box = $('#banner_box>ul');


var move = box.css('marginLeft');

box.find('li:last').prependTo(box);

left.on('click',function() {

	box.stop().animate({marginLeft: 0}, 500, function() {
			box.find('li:last').prependTo(box);
		box.css({marginLeft:'-100%'});
	});
});

right.on('click', function() {
	box.stop().animate({marginLeft: '-200%'}, 500, function() {
		box.find('li:first').appendTo(box);
		box.css({marginLeft:'-100%'});
	});
});




	 })(this.jQuery);
