$(function() {
    var sample_list =[
        
        {'color':'./img/color/sample_01.jpg','color_name':'에프터글로우','type_name':'에스쁘아 패션 네일 컬러'},
        {'color':'./img/color/sample_02.jpg','color_name':'핑키','type_name':'에스쁘아 패뷸러스 블러쉬'},
        {'color':'./img/color/sample_03.jpg','color_name':'다크 브라운','type_name':'에스쁘아 듀얼 브라우 디자이닝 펜슬'},
        {'color':'./img/color/sample_04.jpg','color_name':'키스 더 레드','type_name':'에스쁘아 프로 디파인 립 펜슬'},
        {'color':'./img/color/sample_05.jpg','color_name':'스위트','type_name':'에스쁘아 패뷸러스 블러쉬'},
        {'color':'./img/color/sample_06.jpg','color_name':'내추럴 브라운','type_name':'에스쁘아 듀얼 브라우 디자이닝 펜슬'},
        {'color':'./img/color/sample_07.jpg','color_name':'필 더 핑크','type_name':'에스쁘아 프로 디파인 립 펜슬'},
        {'color':'./img/color/sample_08.jpg','color_name':'타임스퀘어','type_name':'에스쁘아 패션 네일컬러'},
        {'color':'./img/color/sample_09.jpg','color_name':'레디쉬 브라운','type_name':'에스쁘아 듀얼브라우 디자이닝 펜슬'},
        {'color':'./img/color/sample_10.jpg','color_name':'터치 더 오렌지','type_name':'에스쁘아 프로 디파인 립 펜슬'},
        {'color':'./img/color/sample_11.jpg','color_name':'윙키','type_name':'에스쁘아 패뷸러스 블러쉬'},
        {'color':'./img/color/sample_12.jpg','color_name':'다크 브라운','type_name':'에스쁘아 브라우 디자이닝 키트'},
        {'color':'./img/color/sample_13.jpg','color_name':'텔 더 로즈','type_name':'에스쁘아 프로 디파인 립 펜슬'},
        {'color':'./img/color/sample_14.jpg','color_name':'내추럴 브라운','type_name':'에스쁘아 브라우 디자이닝 키트'},
        {'color':'./img/color/sample_15.jpg','color_name':'누드 온 스킨','type_name':'에스쁘아 프로 디파인 립 펜슬'},
        {'color':'./img/color/sample_16.jpg','color_name':'잉크 브라운','type_name':'에스쁘아 모노 페인팅 워터프루프 아이펜슬'},
        {'color':'./img/color/sample_17.jpg','color_name':'러브 에이지','type_name':'에스쁘아 립스테인 쉬폰 글로우'},
        {'color':'./img/color/sample_18.jpg','color_name':'워터릴리','type_name':'에스쁘아 패션 네일 컬러'},
        {'color':'./img/color/sample_19.jpg','color_name':'에스프레소','type_name':'에스쁘아 모노 페인팅 워터프루프 아이 펜슬'},
        {'color':'./img/color/sample_20.jpg','color_name':'핑크플레져','type_name':'에스쁘아 립스테인 쉬폰 글로우'},
        {'color':'./img/color/sample_21.jpg','color_name':'딜리셔스','type_name':'에스쁘아 패뷸러스 블러쉬'},
        {'color':'./img/color/sample_22.jpg','color_name':'골드디거','type_name':'에스쁘아 브론즈 페인팅 워터프루프 아이펜슬'},
        
        
    ];
    
    
    
    
    
    var select_c = $('#color').find('#select_color');
    var ww = $(window).width();
    
    if(ww < 1024){
    select_c.find('.color_pad li:last-child').prependTo('.color_pad ul');
    }
    
    select_c.find('.left button').on('click',function(){
        
        select_c.find('.color_pad ul').stop().animate({marginLeft:0},300,function(){
            
            
        select_c.find('.color_pad li:last-child').prependTo('.color_pad ul');
        select_c.find('.color_pad ul').css({marginLeft:'-21.25%'});
            
        });
        
    });
    
     select_c.find('.right button').on('click',function(){
        
        select_c.find('.color_pad ul').stop().animate({marginLeft:'-42.5%'},300,function(){
            
            
        select_c.find('.color_pad li:first-child').appendTo('.color_pad ul');
        select_c.find('.color_pad ul').css({marginLeft:'-21.25%'});
            
        });
        
    });
    
    select_c.find('label').on('click',function(){
        
        $(this).find('i').toggle();
    });
    
 /*컬러샘플 넣기*/  
    var sample_c = $('#color').find('#sample_color');
    
    for(i=0;i<sample_list.length;i++){
        
    sample_c.find('ul').append('<li>');
    sample_c.find('li').eq(i).css({'backgroundImage':'url('+sample_list[i].color+')'});
    
    }
    
    sample_c.find('li').mouseover(function(){
        
        var color_num = $(this).index();
        
        $(this).append('<div class="text">');
        
        $(this).find('.text').html(sample_list[color_num].color_name+'<br />'+sample_list[color_num].type_name);
        
       
        
      
    });
    
    sample_c.find('li').mouseleave(function(){
        
        $(this).find('div').remove();
        
    });
     
    
    
    
});
