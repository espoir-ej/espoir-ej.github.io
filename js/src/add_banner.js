// add_banner.js

 (function($) {


var box = $('#banner_box>ul>li');
var nav = $('#banner_nav li button');


	 box.hide();
	 box.eq(0).show();
	 nav.eq(0).css({backgroundColor:'#c20c0c'});
	nav.on('click',function(){
		var navi = $('#banner_nav li button').index(this); 
	 	console.log("navi: " + navi);
	

		 box.hide();
		 box.eq(navi).fadeIn(300);
		 nav.css({backgroundColor:'#d3c9c7'}); nav.eq(navi).css({backgroundColor:'#c20c0c'});
	 });
	 
	 
	 


 })(this.jQuery);
