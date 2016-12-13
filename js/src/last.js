//last.js

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
	var item = $('#item');
    
	
	for(; i < best_item.length ; i++){   
		
		item.append('<ul>');
	}
	
	for(; j <4 ; j++){
		
		item.find('ul').append('<li><a>');
	}
    var itemLast = item.find('li:last-child');
		itemLast.empty().append('<button type="button">');
        itemLast.find('button').text("미리보기");
		
//리스트 넣기 
	
	var ww = $(window).width();
	
	for(i=0; i < best_item.length ;i++ ){
		item.find('ul').eq(i).children('li:nth-child(2)').text(best_item[i].name);
		item.find('ul').eq(i).children('li:nth-child(3)').text(best_item[i].price);
		}
	
	if(ww < 600){
		
		for(i=0; i < best_item.length ;i++ ){
		item.find('ul').eq(i).children('li:first-child').css({backgroundImage:'url(img/main/'+'mob'+best_item[i].img+')'});
		
		}
		
	}else if(600<=ww && ww<1024){
		for(i=0; i < best_item.length ;i++ ){
		item.find('ul').eq(i).children('li:first-child').css({backgroundImage:'url(img/main/'+'tab'+best_item[i].img+')'});
		}
		
	}else{
		for(i=0; i < best_item.length ;i++ ){
		item.find('ul').eq(i).children('li:first-child').css({backgroundImage:'url(img/main/'+'pc'+best_item[i].img+')'});
		}
		
	}
    

    
	
	


//리스트 클릭시 링크이동
	
	item.find('content li').on('click',function(){
		
		var click_ul = $(this).parent('ul').index();
		console.log(click_ul);
		
		item.find('li').css({border:'0px solid #fa0'});
		$(this).css({border:'2px solid #fa0'});
		
		$(location).attr('href',best_item[click_ul].link);
		
		
		
	});

var popup = $('#popup');
    
    item.find('button').on('click',function(){
        
        var click_item = $(this).parent().parent().index();
        console.log("누른아이템 순서 :"+click_item);
        popup.fadeIn();
        
	popup.find('li:nth-child(3)').text(best_item[click_item].name);
	popup.find('li:nth-child(4)').text(best_item[click_item].price);
        
	if(ww < 600){
		
		popup.find('li:nth-child(2)').css({backgroundImage:'url(img/main/'+'mob'+best_item[click_item].img+')'});
		
		
		
	}else if(600<=ww && ww<1024){
		popup.find('li:nth-child(2)').css({backgroundImage:'url(img/main/'+'tab'+best_item[click_item].img+')'});
		
		
	}else{
		popup.find('li:nth-child(2)').css({backgroundImage:'url(img/main/'+'pc'+best_item[click_item].img+')'});
		
	}
       
    });
    
    
    popup.find('.close button').on('click',function(){
        
        popup.fadeOut();
    });
	popup.find('.close_area').on('click',function(){
        
        popup.fadeOut();
    });
	
});
		