var bn = $('#best_new');


/*아이템 넣기*/


$(function() {
	var primer =[
		{"img":"/primer_01.jpg","name": "에스쁘아 페이스 프라임 메이크업 부스터 SPF33PA++","price":"25,000원","link":"#"},
		{"img":"/primer_02.jpg","name": "에스쁘아 페이스 프라임 실키 피니쉬","price":"25,000원","link":"#"},
		{"img":"/primer_03.jpg","name": "에스쁘아 페이스 프라임 모이스트 피니쉬","price":"25,000원","link":"#"},
		
		
		
		];
	

//item 생성
	var i = 0;
	var j = 0;
	var item = $('#item');
    
	
	for(; i < primer.length ; i++){   
		
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
	
	for(i=0; i < primer.length ;i++ ){
		item.find('ul').eq(i).children('li:nth-child(2)').text(primer[i].name);
		item.find('ul').eq(i).children('li:nth-child(3)').text(primer[i].price);
		}
	
	if(ww < 600){
		
		for(i=0; i < primer.length ;i++ ){
		item.find('ul').eq(i).children('li:first-child').css({backgroundImage:'url(img/facemakeup/primer/'+'mob'+primer[i].img+')'});
		
		}
		
	}else if(600<=ww && ww<1024){
		for(i=0; i < primer.length ;i++ ){
		item.find('ul').eq(i).children('li:first-child').css({backgroundImage:'url(img/facemakeup/primer/'+'tab'+primer[i].img+')'});
		}
		
	}else{
		for(i=0; i < primer.length ;i++ ){
		item.find('ul').eq(i).children('li:first-child').css({backgroundImage:'url(img/facemakeup/primer/'+'pc'+primer[i].img+')'});
		}
		
	}
    

    
	
	


//리스트 클릭시 링크이동
	
	item.find('content li').on('click',function(){
		
		var click_ul = $(this).parent('ul').index();
		console.log(click_ul);
		
		item.find('li').css({border:'0px solid #fa0'});
		$(this).css({border:'2px solid #fa0'});
		
		$(location).attr('href',primer[click_ul].link);
		
		
		
	});

var popup = $('#popup');
    
    item.find('button').on('click',function(){
        
        var click_item = $(this).parent().parent().index();
        console.log("누른아이템 순서 :"+click_item);
        popup.fadeIn();
        
	popup.find('li:nth-child(3)').text(primer[click_item].name);
	popup.find('li:nth-child(4)').text(primer[click_item].price);
        
	if(ww < 600){
		
		popup.find('li:nth-child(2)').css({backgroundImage:'url(img/facemakeup/primer/'+'mob'+primer[click_item].img+')'});
		
		
		
	}else if(600<=ww && ww<1024){
		popup.find('li:nth-child(2)').css({backgroundImage:'url(img/facemakeup/primer/'+'tab'+primer[click_item].img+')'});
		
		
	}else{
		popup.find('li:nth-child(2)').css({backgroundImage:'url(img/facemakeup/primer/'+'pc'+primer[click_item].img+')'});
		
	}
       
    });
    
    
    popup.find('.close button').on('click',function(){
        
        popup.fadeOut();
    });
	popup.find('.close_area').on('click',function(){
        
        popup.fadeOut();
    });
	
});