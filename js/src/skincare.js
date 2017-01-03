var bn = $('#best_new');


/*아이템 넣기*/


$(function() {
	var cleanser =[
		{"img":"/cleanser_01.jpg","name": "에스쁘아 프로 인텐스 클렌징 밤","price":"18,000원","link":"http://naver.com"},
		{"img":"/cleanser_02.jpg","name": "에스쁘아 프로 인텐스 립 앤 아이 리무버","price":"12,000원","link":"#"},
		{"img":"/cleanser_03.jpg","name": "에스쁘아 프로 인텐스 스팟 메이크업 이레이저","price":"12,000원","link":"#"},
		{"img":"/cleanser_04.jpg","name": "에스쁘아 프로 인텐스 클렌징 폼","price":"25,000원","link":"#"},
		{"img":"/cleanser_05.jpg","name": "에스쁘아 퍼펙트 클린 립 오프","price":"15,000","link":"#"},
		{"img":"/cleanser_06.jpg","name": "에스쁘아 프로 인텐스 클렌징 토너","price":"25,000","link":"#"},
		{"img":"/cleanser_07.jpg","name": "에스쁘아 프로 인텐스 클렌징 오일 리필","price":"22,000","link":"#"},
		{"img":"/cleanser_08.jpg","name": "에스쁘아 프로 인텐스 클렌징 오일","price":"27,000","link":"#"},
		
		
		];
	

//item 생성
	var i = 0;
	var j = 0;
	var item = $('#item');
    
	
	for(; i < cleanser.length ; i++){   
		
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
	
	for(i=0; i < cleanser.length ;i++ ){
		item.find('ul').eq(i).children('li:nth-child(2)').text(cleanser[i].name);
		item.find('ul').eq(i).children('li:nth-child(3)').text(cleanser[i].price);
		}
	
	if(ww < 600){
		
		for(i=0; i < cleanser.length ;i++ ){
		item.find('ul').eq(i).children('li:first-child').css({backgroundImage:'url(img/skincare/cleanser/'+'mob'+cleanser[i].img+')'});
		
		}
		
	}else if(600<=ww && ww<1024){
		for(i=0; i < cleanser.length ;i++ ){
		item.find('ul').eq(i).children('li:first-child').css({backgroundImage:'url(img/skincare/cleanser/'+'tab'+cleanser[i].img+')'});
		}
		
	}else{
		for(i=0; i < cleanser.length ;i++ ){
		item.find('ul').eq(i).children('li:first-child').css({backgroundImage:'url(img/skincare/cleanser/'+'pc'+cleanser[i].img+')'});
		}
		
	}
    

    
	
	


//리스트 클릭시 링크이동
	
	item.find('content li').on('click',function(){
		
		var click_ul = $(this).parent('ul').index();
		console.log(click_ul);
		
		item.find('li').css({border:'0px solid #fa0'});
		$(this).css({border:'2px solid #fa0'});
		
		$(location).attr('href',cleanser[click_ul].link);
		
		
		
	});

var popup = $('#popup');
    
    item.find('button').on('click',function(){
        
        var click_item = $(this).parent().parent().index();
        console.log("누른아이템 순서 :"+click_item);
        popup.fadeIn();
        
	popup.find('li:nth-child(3)').text(cleanser[click_item].name);
	popup.find('li:nth-child(4)').text(cleanser[click_item].price);
        
	if(ww < 600){
		
		popup.find('li:nth-child(2)').css({backgroundImage:'url(img/skincare/cleanser/'+'mob'+cleanser[click_item].img+')'});
		
		
		
	}else if(600<=ww && ww<1024){
		popup.find('li:nth-child(2)').css({backgroundImage:'url(img/skincare/cleanser/'+'tab'+cleanser[click_item].img+')'});
		
		
	}else{
		popup.find('li:nth-child(2)').css({backgroundImage:'url(img/skincare/cleanser/'+'pc'+cleanser[click_item].img+')'});
		
	}
       
    });
    
    
    popup.find('.close button').on('click',function(){
        
        popup.fadeOut();
    });
	popup.find('.close_area').on('click',function(){
        
        popup.fadeOut();
    });
	
});