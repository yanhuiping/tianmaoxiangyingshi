$(function(){
    var mySwiper = new Swiper ('#banner', {
        direction: 'horizontal',
        // loop:true,
        autoplay:3000,

        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
     /*   nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',*/

        // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
    })
    var mySwiper1 = new Swiper ('#sanbox', {
        direction: 'horizontal',
        loop:false,
        freeMode:false

    })
    var mySwiper1 = new Swiper ('#lunbox', {
        direction: 'vertical',
        loop:true,
        autoplay:1000

    })
    var lei=$('.lei');
    var lis=$('.lei li');
    $('.contant .libox').eq(0).css('display','block');

    lis.on('click',function(){
        $('.lei li').removeClass('active');
        $('.contant .libox').css('display','none');
        $(this).addClass('active');
        $(this).find('.libox').css('display','block');
        $('.contant .libox').eq($(this).index()).css('display','block');
    })
    $('.headerleft').on('click',function(){
        $('.quanbu').removeClass('quanbu1').css('display','block');
        $('body').css('overflow','hidden');
        // $('.pic').css('overflow','scroll');
    })
    $('.fh').on('click',function(){

        $('body').css('overflow','');
        $('.quanbu').addClass('quanbu1').delay(800).queue(function(){
            $(this).css('display','none').dequeue();
        });


    })
    $(window).on('scroll',function(){
        var stop=document.documentElement.scrollTop||document.body.scrollTop;

        if(stop>270){
            $('.header').addClass('headercolor');
        }else{
            $('.header').removeClass('headercolor');
        }
    })
})