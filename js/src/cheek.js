var bn = $('#best_new');


/*아이템 넣기*/


$(function() {
	var cheek =[
		{"img":"/cheek_01.jpg","name": "에스쁘아 블러쉬 익스클루시브","price":"30,000원","link":"#"},
		{"img":"/cheek_02.jpg","name": "에스쁘아 컨투어 파우더 듀오","price":"30,000원","link":"#"},
		{"img":"/cheek_03.jpg","name": "에스쁘아 패뷸러스 블러쉬","price":"20,000원","link":"#"},
		{"img":"/cheek_04.jpg","name": "에스쁘아 블러쉬 쉬폰","price":"20,000원","link":"#"},
		{"img":"/cheek_05.jpg","name": "에스쁘아 크리미 치크 스테인","price":"17,000원","link":"#"},
	

		
		
		
		];
	

//item 생성
	var i = 0;
	var j = 0;
	var item = $('#item');
    
	
	for(; i < cheek.length ; i++){   
		
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
	
	for(i=0; i < cheek.length ;i++ ){
		item.find('ul').eq(i).children('li:nth-child(2)').text(cheek[i].name);
		item.find('ul').eq(i).children('li:nth-child(3)').text(cheek[i].price);
		}
	
	if(ww < 600){
		
		for(i=0; i < cheek.length ;i++ ){
		item.find('ul').eq(i).children('li:first-child').css({backgroundImage:'url(img/cheek/'+'mob'+cheek[i].img+')'});
		
		}
		
	}else if(600<=ww && ww<1024){
		for(i=0; i < cheek.length ;i++ ){
		item.find('ul').eq(i).children('li:first-child').css({backgroundImage:'url(img/cheek/'+'tab'+cheek[i].img+')'});
		}
		
	}else{
		for(i=0; i < cheek.length ;i++ ){
		item.find('ul').eq(i).children('li:first-child').css({backgroundImage:'url(img/cheek/'+'pc'+cheek[i].img+')'});
		}
		
	}
    

    
	
	


//리스트 클릭시 링크이동
	
	item.find('content li').on('click',function(){
		
		var click_ul = $(this).parent('ul').index();
		console.log(click_ul);
		
		item.find('li').css({border:'0px solid #fa0'});
		$(this).css({border:'2px solid #fa0'});
		
		$(location).attr('href',cheek[click_ul].link);
		
		
		
	});

var popup = $('#popup');
    
    item.find('button').on('click',function(){
        
        var click_item = $(this).parent().parent().index();
        console.log("누른아이템 순서 :"+click_item);
        popup.fadeIn();
        
	popup.find('li:nth-child(3)').text(cheek[click_item].name);
	popup.find('li:nth-child(4)').text(cheek[click_item].price);
        
	if(ww < 600){
		
		popup.find('li:nth-child(2)').css({backgroundImage:'url(img/cheek/'+'mob'+cheek[click_item].img+')'});
		
		
		
	}else if(600<=ww && ww<1024){
		popup.find('li:nth-child(2)').css({backgroundImage:'url(img/cheek/'+'tab'+cheek[click_item].img+')'});
		
		
	}else{
		popup.find('li:nth-child(2)').css({backgroundImage:'url(img/cheek/'+'pc'+cheek[click_item].img+')'});
		
	}
       
    });
    
    
    popup.find('.close button').on('click',function(){
        
        popup.fadeOut();
    });
	popup.find('.close_area').on('click',function(){
        
        popup.fadeOut();
    });
	
});