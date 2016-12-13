//slide_best.js

$(function() {
	var best_item =[
		{"img":"/best/best_item_01.jpg","name": "에스쁘아 립스틱 노웨어 M","price":"19,000원","link":"http://naver.com"},
		{"img":"/best/best_item_02.jpg","name": "에스쁘아 아이섀도우 익스클루시브","price":"15,000원","link":"#"},
		{"img":"/best/best_item_03.jpg","name": "에스쁘아 젠틀 아우라 아이섀도우 익스클루시브","price":"15,000원","link":"#"},
		{"img":"/best/best_item_04.jpg","name": "에스쁘아 프로 테일러 리퀴드 파운데이션 EX SPF 25PA++","price":"38,000원","link":"#"},
		{"img":"/best/best_item_05.jpg","name": "에스쁘아 아이섀도우 시퀸","price":"10,000","link":"#"},
		{"img":"/best/best_item_06.jpg","name": "에스쁘아 립스틱 노웨어 시그니처","price":"23,000","link":"#"},
		{"img":"/best/best_item_07.jpg","name": "에스쁘아 페이스 프라인 토핑 파우더","price":"12,000","link":"#"},
		{"img":"/best/best_item_08.jpg","name": "에스쁘아 스키니 픽스 블랜더","price":"10,000","link":"#"},
		{"img":"/best/best_item_09.jpg","name": "에스쁘아 아이섀도우 새틴","price":"10,000","link":"#"},
		{"img":"/best/best_item_10.jpg","name": "에스쁘아 브론즈 페인팅 워터프루프 아이펜슬","price":"8,500","link":"#"}
		
		];
	
	var a = $('#content_01 li').width();
	console.log("li:" + a);
//item 생성
	var i = 0;
	var j = 0;
	var item_box = $('#item')
	
	item_box.append('<div class="items">');
	
	
	for(; i < best_item.length ; i++){   
		
		item_box.children().eq(2).append('<ul>');
	}
	
	for(; j <3 ; j++){
		
		item_box.find('ul').append('<li><a>');
		
	}
		
//리스트 넣기 
	
	var ww = $(window).width();
	
	for(i=0; i < best_item.length ;i++ ){
		item_box.find('.items ul').eq(i).children('li:nth-child(2)').text(best_item[i].name);
		item_box.find('.items ul').eq(i).children('li:last-child').text(best_item[i].price);
		item_box.find('.items ul').eq(i).children('li:last-child').text(best_item[i].price);
		}
	
	if(ww < 600){
		
		for(i=0; i < best_item.length ;i++ ){
		item_box.find('.items ul').eq(i).children('li:first-child').css({backgroundImage:'url(img/main/'+'mob'+best_item[i].img+')'});
		
		}
		
	}else if(600<=ww && ww<1024){
		for(i=0; i < best_item.length ;i++ ){
		item_box.find('.items ul').eq(i).children('li:first-child').css({backgroundImage:'url(img/main/'+'tab'+best_item[i].img+')'});
		}
		
	}else{
		for(i=0; i < best_item.length ;i++ ){
		item_box.find('.items ul').eq(i).children('li:first-child').css({backgroundImage:'url(img/main/'+'pc'+best_item[i].img+')'});
		}
		
	}
	
	


//리스트 클릭시 링크이동
	
	item_box.find('div li').on('click',function(){
		
        
		var click_ul = $(this).parent('ul').index() - 1;
		console.log(click_ul);
		
		item_box.find('li').css({border:'0px solid #fa0'});
		$(this).css({border:'2px solid #fa0'});
		
		
		console.log(best_item[click_ul].link);
		
		
	});
	
		
//버튼 슬라이드
	
	var left = $('.left_btn');
	var right = $('.right_btn');
		
	
	var item_ul_width = item_box.find('.items ul').width();
	var item_paddingLeft_width = item_box.find('.items ul').css("paddingLeft"); 
	var minus_item_width = parseInt("-" + item_ul_width) - parseInt(item_paddingLeft_width) * 2;
	
	item_box.find('ul:last').prependTo('.items');
	item_box.find('.items').css({marginLeft:minus_item_width});
	
	left.on('click',function() {
		
		
		item_box.find('.items').stop().animate({marginLeft: 0}, 500, function() {
								item_box.find('ul:last').prependTo('.items');
								item_box.find('.items').css({marginLeft:minus_item_width});
								
								});
				
		

	});
	
	right.on('click', function() {
		
		item_box.find('.items').stop().animate({marginLeft: minus_item_width *2}, 500, function() {
								item_box.find('ul:first').appendTo('.items');
								item_box.find('.items').css({marginLeft:minus_item_width});
								
								});
			
	});		
	
	$(window).resize(function(){
		
	location.reload(); 
	
	});
	

	
});
		