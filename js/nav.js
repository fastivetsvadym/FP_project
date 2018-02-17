    $(document).ready(function(){
        var $menu = $("#menuF"); 
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 450 && $menu.hasClass("header") ){
                $menu.fadeOut('10',function(){
                    $(this).removeClass("header")
                           .addClass("fixed transbg")
                           .fadeIn('10');
                });
            } else if($(this).scrollTop() <= 400 && $menu.hasClass("fixed")) {
                $menu.fadeOut('fast',function(){
                    $(this).removeClass("fixed transbg")
                           .addClass("header")
                           .fadeIn('10');
                });
            }
        });
	});