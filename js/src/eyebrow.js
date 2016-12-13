(function(){
    
    var eyebrow = $('#eyebrow');
    var lnb = $('#eyebrow ul');
    
 var ww = $(window).width();
    if(1023 < ww){
		eyebrow.find('.info').insertBefore('#lnb');
		
	}else{
		
	}
    
    lnb.children().on('click',function(){
        $('content').hide();
        
        var lnb_num = $(this).index();
        
        content = lnb_num;
        
        switch (content){
            case 0 : 
                eyebrow.find('.eyebrow_bar').show();    
                break;
            case 1 :
                eyebrow.find('.service').show();
                break;
            case 2 :
                eyebrow.find('.qna').show();
                break;
            case 3 :
                eyebrow.find('.location').show();
                break;
            case 4 :
                eyebrow.find('.item').show();
                break;
            }
        
        
    });
    
    
})(this.jQuery);