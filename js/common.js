$(document).ready(function(){
    
    var ww=$(window).width();
    var bannerIndex = 1;
    var closingVar = true;
    
    
    $(window).resize(function(){
        ww = $(window).width();
    });
    
    $('.goto-top').click(function(){
       $('html, body').animate({
           scrollTop: 0,
       });
    });
    
    $('#ad-close').click(function(){
       $('.ad-banner').css({
           display: 'none',
       });
        closingVar = false;
    });
    
    $('.top').hover(function(){
        menuIndex = $(this).index();
        $('.top').removeClass('top-on');
        $('.top').eq(menuIndex).addClass('top-on');
        $('.sub-menu-wrap').css({display: 'block'});
        $('.sub-category').eq(menuIndex).css({display : 'block'});
    },function(){
        $('.sub-menu-wrap').css({display: 'none'});
        $('.sub-category').eq(menuIndex).css({display : 'none'});
        $('.top').removeClass('top-on');
    });
    
    $('.sub-menu-wrap').hover(function(){
        $('.top').removeClass('top-on');
        $('.top').eq(menuIndex).addClass('top-on');
        $('.sub-menu-wrap').css({display: 'block'});
        $('.sub-category').eq(menuIndex).css({display : 'block'});
    },function(){
        $('.sub-menu-wrap').css({display: 'none'});
        $('.sub-category').eq(menuIndex).css({display : 'none'});
        $('.top').removeClass('top-on');
    });
    
    
    if( ww < 768){        
        $(window).scroll(function(){
            var sct480 = $(window).scrollTop();
            if(closingVar == false){
                var navTop = 70;
            }
            else if(closingVar == true){
                var navTop = 125;             
            }
            
            if(sct480 >= navTop){
                $('nav').css({position:'fixed',top:0});
            }
            else if(sct480 < navTop){
                $('nav').css({position:'relative'});
            }
        });
    }
    
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        if(closingVar == false){
            var navTop = 110;
            var searchTop = 575;
        }
        else if(closingVar == true){
            var navTop = 155;
            var searchTop = 620;               
        }
        
        if(sct > navTop && sct <= searchTop){
            $('nav').addClass('nav-fixed');
            $('nav').css({boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.15)'});
            $('.search').removeClass('search-fixed');
        }
        else if(sct > searchTop){
            $('nav').addClass('nav-fixed');
            $('nav').css({boxShadow: 'none'});
            $('.search').addClass('search-fixed');
        }
        else{
            $('nav').removeClass('nav-fixed');
            $('.search').removeClass('search-fixed');
        }
    });
    

    $('.footer-con-title').click(function(){
        $(this).siblings('.footer-con-item-wrap').slideToggle(500);
    });
    
    $('.burger-but').click(function(){
        $('.mobile-menu').fadeToggle(500);
        $('#burger-1').toggleClass('burger-top-after');
        $('#burger-2').fadeToggle(500);
        $('#burger-3').toggleClass('burger-bottom-after');
        
    });
    
    $('.m-menu-sub').click(function(){
       var clickIndex = $(this).index();
        
        $('.m-menu-sub').removeClass('but-on');
        $('.m-menu-sub').eq(clickIndex).addClass('but-on');
        $('.m-menu-con-main').removeClass('con-on');
        $('.m-menu-con-main').eq(clickIndex).addClass('con-on');
    });
    
    $('.mode-btn-wrap').click(function(){
        $(this).toggleClass('dark');
        $('.mode-btn').toggleClass('on');
        $('html').toggleClass('dark');
        $('.goto-top').toggleClass('dark');
        $('.goto-top-arr').toggleClass('on');
        $('.header-logo-img').toggleClass('on');
        $('nav').toggleClass('dark');
        $('header').toggleClass('dark');
        $('.top').toggleClass('dark');
        $('.sub-menu-wrap').toggleClass('dark');
        $('.sub-column').toggleClass('dark');
        $('.sub-column-item').toggleClass('dark');
        $('.header-but').toggleClass('dark');
        $('.search').toggleClass('dark');
        $('.search-txt').toggleClass('dark');
        $('.search-box').toggleClass('dark');
        $('.search-but').toggleClass('dark');
        $('.search-img').toggleClass('on');
        $('.category-title').toggleClass('dark');
        $('.category-more').toggleClass('dark');
        $('.item-txt').toggleClass('dark');
        $('.item-price').toggleClass('dark');
        $('.item-arr').toggleClass('on');
        $('.burger-bar').toggleClass('dark');
        $('.m-menu-top').toggleClass('dark');
        $('.m-menu-sub-wrap').toggleClass('dark');
        $('.m-menu-sub-top').toggleClass('dark');
        $('.m-menu-top-but').eq(0).toggleClass('dark');
        $('.m-menu-in-wrap').toggleClass('dark');
        $('.m-menu-sub').toggleClass('dark');
        $('.m-menu-con-title').toggleClass('dark');
        $('.m-menu-con-sub-in').toggleClass('dark');
        $('.knowhow-title').toggleClass('dark');
        $('.knowhow-text').toggleClass('dark');
        $('.lifestyle-title').toggleClass('dark');
        $('.lifestyle-sub-title').toggleClass('dark');
        $('.lifestyle-item-title').toggleClass('dark');
        $('.lifestyle-item-text').toggleClass('dark');
        $('.story-in-title').toggleClass('dark');
    });    
});     //end