var bn = $('#best_new');


/*아이템 넣기*/


$(function() {
	var eyeshadow =[
		{"img":"/eyeshadow_01.jpg","name": "에스쁘아 컬러 마스터 아이 팔레트","price":"38,000원","link":"#"},
		{"img":"/eyeshadow_02.jpg","name": "에스쁘아 아이섀도우 익스클루시브","price":"15,000원","link":"#"},
		{"img":"/eyeshadow_03.jpg","name": "에스쁘아 피그먼트 시퀸","price":"15,000원","link":"#"},
		{"img":"/eyeshadow_04.jpg","name": "에스쁘아 아이섀도우 시퀸","price":"10,000원","link":"#"},
		{"img":"/eyeshadow_05.jpg","name": "에스쁘아 스틱 아이섀도우 클러스터 듀오","price":"20,000원","link":"#"},
		{"img":"/eyeshadow_06.jpg","name": "에스쁘아 아이섀도우 쉬폰","price":"10,000원","link":"#"},
		{"img":"/eyeshadow_07.jpg","name": "에스쁘아 프로 아이 컬러 팔레트","price":"35,000원","link":"#"},
		{"img":"/eyeshadow_08.jpg","name": "에스쁘아 아이섀도우 레더","price":"10,000원","link":"#"},
		{"img":"/eyeshadow_09.jpg","name": "에스쁘아 아이섀도우 코튼","price":"10,000원","link":"#"},
		{"img":"/eyeshadow_10.jpg","name": "에스쁘아 아이섀도우 새틴","price":"10,000원","link":"#"},
		{"img":"/eyeshadow_11.jpg","name": "에스쁘아 아이섀도우 펄베이스","price":"10,000원","link":"#"},

		
		
		
		];
	

//item 생성
	var i = 0;
	var j = 0;
	var item = $('#item');
    
	
	for(; i < eyeshadow.length ; i++){   
		
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
	
	for(i=0; i < eyeshadow.length ;i++ ){
		item.find('ul').eq(i).children('li:nth-child(2)').text(eyeshadow[i].name);
		item.find('ul').eq(i).children('li:nth-child(3)').text(eyeshadow[i].price);
		}
	
	if(ww < 600){
		
		for(i=0; i < eyeshadow.length ;i++ ){
		item.find('ul').eq(i).children('li:first-child').css({backgroundImage:'url(img/eye/eyeshadow/'+'mob'+eyeshadow[i].img+')'});
		
		}
		
	}else if(600<=ww && ww<1024){
		for(i=0; i < eyeshadow.length ;i++ ){
		item.find('ul').eq(i).children('li:first-child').css({backgroundImage:'url(img/eye/eyeshadow/'+'tab'+eyeshadow[i].img+')'});
		}
		
	}else{
		for(i=0; i < eyeshadow.length ;i++ ){
		item.find('ul').eq(i).children('li:first-child').css({backgroundImage:'url(img/eye/eyeshadow/'+'pc'+eyeshadow[i].img+')'});
		}
		
	}
    

    
	
	


//리스트 클릭시 링크이동
	
	item.find('content li').on('click',function(){
		
		var click_ul = $(this).parent('ul').index();
		console.log(click_ul);
		
		item.find('li').css({border:'0px solid #fa0'});
		$(this).css({border:'2px solid #fa0'});
		
		$(location).attr('href',eyeshadow[click_ul].link);
		
		
		
	});

var popup = $('#popup');
    
    item.find('button').on('click',function(){
        
        var click_item = $(this).parent().parent().index();
        console.log("누른아이템 순서 :"+click_item);
        popup.fadeIn();
        
	popup.find('li:nth-child(3)').text(eyeshadow[click_item].name);
	popup.find('li:nth-child(4)').text(eyeshadow[click_item].price);
        
	if(ww < 600){
		
		popup.find('li:nth-child(2)').css({backgroundImage:'url(img/eye/eyeshadow/'+'mob'+eyeshadow[click_item].img+')'});
		
		
		
	}else if(600<=ww && ww<1024){
		popup.find('li:nth-child(2)').css({backgroundImage:'url(img/eye/eyeshadow/'+'tab'+eyeshadow[click_item].img+')'});
		
		
	}else{
		popup.find('li:nth-child(2)').css({backgroundImage:'url(img/eye/eyeshadow/'+'pc'+eyeshadow[click_item].img+')'});
		
	}
       
    });
    
    
    popup.find('.close button').on('click',function(){
        
        popup.fadeOut();
    });
	popup.find('.close_area').on('click',function(){
        
        popup.fadeOut();
    });
	
});