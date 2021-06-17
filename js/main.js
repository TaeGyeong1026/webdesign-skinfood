$(document).ready(function () {

    var ww = $(window).width();
    var bannerIndex = 1;
    var closingVar = true;


    $(window).resize(function () {
        ww = $(window).width();
        
        sizeChange();
    });

    bannerTime();
    foodTime();
    sizeChange();

    function bannerTime() {
        bannerT = setInterval(function () {
            $('#banner-right').trigger('click');
        }, 3000);
    }

    function foodTime() {
        foodT = setInterval(function () {
            $('#food-right').trigger('click');
        }, 2000);
    }

    $('.banner-index-wrap').hover(function () {
        clearInterval(bannerT);
    }, function () {
        bannerTime();
    });
    $('.food-wrap').hover(function () {
        clearInterval(foodT);
    }, function () {
        foodTime();
    });

    $('#banner-right').click(function () {
        bannerWidth = $('.banner-item').width();
        $('.banner-item-wrap').animate({
            left: -bannerWidth,
        }, function () {
            $('.banner-item-wrap').css({
                left: 0,
            }).find('.banner-item').first().appendTo('.banner-item-wrap');
        });
        bannerIndex++;
        if (bannerIndex > 4) {
            bannerIndex = 1;
        }
        bannerIndexChange();
    });
    $('#banner-left').click(function () {
        var bannerWidth = $('.banner-item').width();
        $('.banner-item-wrap').css({
            left: -bannerWidth,
        }).find('.banner-item').last().prependTo('.banner-item-wrap');
        $('.banner-item-wrap').animate({
            left: 0,
        });
        bannerIndex--;
        if (bannerIndex < 1) {
            bannerIndex = 4;
        }
        bannerIndexChange();
    });

    function bannerIndexChange() {
        $('#banner-index').text(bannerIndex);
    }


    function sizeChange() {
        if (ww >= 768) {
            $('.item-left').click(function () {
                var outWrap = $(this).parent().siblings('.article-position').children('.item-mask').children('.item-horizon-wrap');
                var inWrap = outWrap.children('.item-wrap-sub');
                var wrapWidth = $('.item-wrap-sub').width();

                outWrap.css({
                    left: -wrapWidth,
                }).find(inWrap).last().prependTo(outWrap);
                outWrap.animate({
                    left: 0,
                });
            });
            $('.item-right').click(function () {
                var outWrap = $(this).parent().siblings('.article-position').children('.item-mask').children('.item-horizon-wrap');
                var inWrap = outWrap.children('.item-wrap-sub');
                var wrapWidth = $('.item-wrap-sub').width();

                outWrap.animate({
                    left: -wrapWidth,
                }, function () {
                    outWrap.css({
                        left: 0,
                    }).find(inWrap).first().appendTo(outWrap);
                });
            });
        } 
        else if (ww < 768 && ww >= 480) {
            $('.item-left').click(function () {
                var outWrap = $(this).parent().siblings('.article-position').children('.w-480').children('.item-horizon-wrap');
                var inWrap = outWrap.children('.item-wrap-sub-480');
                var wrapWidth = $('.item-wrap-sub-480').width();

                outWrap.css({
                    left: -wrapWidth,
                }).find(inWrap).last().prependTo(outWrap);
                outWrap.animate({
                    left: 0,
                });
            });
            $('.item-right').click(function () {
                var outWrap = $(this).parent().siblings('.article-position').children('.w-480').children('.item-horizon-wrap');
                var inWrap = outWrap.children('.item-wrap-sub-480');
                var wrapWidth = $('.item-wrap-sub-480').width();

                outWrap.animate({
                    left: -wrapWidth,
                }, function () {
                    outWrap.css({
                        left: 0,
                    }).find(inWrap).first().appendTo(outWrap);
                });
            });

            $(window).scroll(function () {
                var sct480 = $(window).scrollTop();
                if (closingVar == false) {
                    var navTop = 70;
                } else if (closingVar == true) {
                    var navTop = 125;
                }

                if (sct480 >= navTop) {
                    $('header').css({
                        position: 'fixed',
                        top: 0
                    });
                } else if (sct480 < navTop) {
                    $('header').css({
                        position: 'relative'
                    });
                }
            });
            
            
            $('#m-banner-item1').attr({
                src: "img/banner/banner1.png",
            });
            $('#m-banner-item2').attr({
                src: "img/banner/banner2.png",
            });
            $('#m-banner-item3').attr({
                src: "img/banner/banner3.png",
            });
            $('#m-banner-item4').attr({
                src: "img/banner/banner4.png",
            });

        }
        else if( ww < 480){
            $('#m-banner-item1').attr({
                src: "img/mobile/1.png",
            });
            $('#m-banner-item2').attr({
                src: "img/mobile/2.png",
            });
            $('#m-banner-item3').attr({
                src: "img/mobile/3.png",
            });
            $('#m-banner-item4').attr({
                src: "img/mobile/4.png",
            });            
        }

    }

    $('#food-right').click(function () {
        var foodWidth = $('.item').width();
        $('.food-wrap').animate({
            left: -foodWidth,
        }, function () {
            $('.food-wrap').css({
                left: 0,
            }).find('.item').first().appendTo('.food-wrap');
        });
    });
    $('#food-left').click(function () {
        var foodWidth = $('.item').width();
        $('.food-wrap').css({
            left: -foodWidth,
        }).find('.item').last().prependTo('.food-wrap');
        $('.food-wrap').animate({
            left: 0,
        });
    });
}); //end
