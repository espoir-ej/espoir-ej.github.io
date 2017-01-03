var bn = $('#best_new');


/*아이템 넣기*/


$(function() {
	var lipstick =[
		{"img":"/lipstick_01.jpg","name": "에스쁘아 페이크 퍼 립스틱 노웨어 G","price":"19,000원","link":"#"},
		{"img":"/lipstick_02.jpg","name": "에스쁘아 컬러 마스터 립 팔레트","price":"38,000원","link":"#"},
		{"img":"/lipstick_03.jpg","name": "에스쁘아 립스틱 노웨어 라이브","price":"19,000원","link":"#"},
		{"img":"/lipstick_04.jpg","name": "에스쁘아 무디 블러디 립스틱 노웨어 S","price":"19,000원","link":"#"},
		{"img":"/lipstick_05.jpg","name": "에스쁘아 무디 블러디 립스틱 노웨어 M","price":"19,000원","link":"#"},
		{"img":"/lipstick_06.jpg","name": "에스쁘아 꾸뛰를 립 플루이드 벨벳 ","price":"19,000원","link":"#"},
		{"img":"/lipstick_07.jpg","name": "에스쁘아 립 프린팅 ","price":"18,000원","link":"#"},
		{"img":"/lipstick_08.jpg","name": "에스쁘아 꾸뛰르 글로시 라커 ","price":"19,000원","link":"#"},
		{"img":"/lipstick_09.jpg","name": "에스쁘아 립스틱 노웨어 쉬어 밤 ","price":"19,000원","link":"#"},
		{"img":"/lipstick_10.jpg","name": "에스쁘아 꾸뛰르 터치 립 플루이드 ","price":"19,000원","link":"#"},
		{"img":"/lipstick_11.jpg","name": "에스쁘아 립스틱 노웨어 러스터 ","price":"19,000원","link":"#"},
		{"img":"/lipstick_12.jpg","name": "에스쁘아 립스틱 노웨어 S ","price":"19,000원","link":"#"},
		{"img":"/lipstick_13.jpg","name": "에스쁘아 립스틱 노웨어 M ","price":"19,000원","link":"#"},
	

		
		
		
		];
	

//item 생성
	var i = 0;
	var j = 0;
	var item = $('#item');
    
	
	for(; i < lipstick.length ; i++){   
		
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
	
	for(i=0; i < lipstick.length ;i++ ){
		item.find('ul').eq(i).children('li:nth-child(2)').text(lipstick[i].name);
		item.find('ul').eq(i).children('li:nth-child(3)').text(lipstick[i].price);
		}
	
	if(ww < 600){
		
		for(i=0; i < lipstick.length ;i++ ){
		item.find('ul').eq(i).children('li:first-child').css({backgroundImage:'url(img/lip/lipstick/'+'mob'+lipstick[i].img+')'});
		
		}
		
	}else if(600<=ww && ww<1024){
		for(i=0; i < lipstick.length ;i++ ){
		item.find('ul').eq(i).children('li:first-child').css({backgroundImage:'url(img/lip/lipstick/'+'tab'+lipstick[i].img+')'});
		}
		
	}else{
		for(i=0; i < lipstick.length ;i++ ){
		item.find('ul').eq(i).children('li:first-child').css({backgroundImage:'url(img/lip/lipstick/'+'pc'+lipstick[i].img+')'});
		}
		
	}
    

    
	
	


//리스트 클릭시 링크이동
	
	item.find('content li').on('click',function(){
		
		var click_ul = $(this).parent('ul').index();
		console.log(click_ul);
		
		item.find('li').css({border:'0px solid #fa0'});
		$(this).css({border:'2px solid #fa0'});
		
		$(location).attr('href',lipstick[click_ul].link);
		
		
		
	});

var popup = $('#popup');
    
    item.find('button').on('click',function(){
        
        var click_item = $(this).parent().parent().index();
        console.log("누른아이템 순서 :"+click_item);
        popup.fadeIn();
        
	popup.find('li:nth-child(3)').text(lipstick[click_item].name);
	popup.find('li:nth-child(4)').text(lipstick[click_item].price);
        
	if(ww < 600){
		
		popup.find('li:nth-child(2)').css({backgroundImage:'url(img/lip/lipstick/'+'mob'+lipstick[click_item].img+')'});
		
		
		
	}else if(600<=ww && ww<1024){
		popup.find('li:nth-child(2)').css({backgroundImage:'url(img/lip/lipstick/'+'tab'+lipstick[click_item].img+')'});
		
		
	}else{
		popup.find('li:nth-child(2)').css({backgroundImage:'url(img/lip/lipstick/'+'pc'+lipstick[click_item].img+')'});
		
	}
       
    });
    
    
    popup.find('.close button').on('click',function(){
        
        popup.fadeOut();
    });
	popup.find('.close_area').on('click',function(){
        
        popup.fadeOut();
    });
	
});