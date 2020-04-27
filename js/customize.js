// 自行加入的JS請寫在這裡
$(function() {
    // 首頁輪播
    $('.mpSlider').slick({
        mobileFirst: true,
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease'
    });
    // 廣告輪播
    $('.adSlider').slick({
        mobileFirst: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: true
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true
            }
        },{
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });
     // cp_photo
     $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
     $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true
    });
     $('.Slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true
    });
     
 });


/*-----------------------------------*/
/////////////modal設定/////////////
/*-----------------------------------*/
$(function() {
    $('#modal1').hide();//先隱藏視窗
    $('.modal').after('<div class="modal_overlay"></div>'); //新增透明底
    $('.modal').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal').click(function(e) {
        $('.modal_overlay').fadeIn(100);
        $('.modal').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal1').hide();
        $('.modal_overlay').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay').click(closeModal);
    $('.modal .close').click(closeModal);

});

$(function() {
    $('#modal2').hide();//先隱藏視窗
    $('.modal2').after('<div class="modal_overlay"></div>'); //新增透明底
    $('.modal2').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal2').click(function(e) {
        $('.modal_overlay').fadeIn(100);
        $('.modal2').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal2').hide();
        $('.modal_overlay').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay').click(closeModal);
    $('.modal2 .close').click(closeModal);

});

$(function() {
    $('#modal3').hide();//先隱藏視窗
    $('.modal3').after('<div class="modal_overlay"></div>'); //新增透明底
    $('.modal3').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal3').click(function(e) {
        $('.modal_overlay').fadeIn(100);
        $('.modal3').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal3').hide();
        $('.modal_overlay').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay').click(closeModal);
    $('.modal3 .close').click(closeModal);

});

$(function() {
    $('#modal4').hide();//先隱藏視窗
    $('.modal4').after('<div class="modal_overlay"></div>'); //新增透明底
    $('.modal4').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal4').click(function(e) {
        $('.modal_overlay').fadeIn(100);
        $('.modal4').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal4').hide();
        $('.modal_overlay').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay').click(closeModal);
    $('.modal4 .close').click(closeModal);

});

$(function() {
    $('#modal5').hide();//先隱藏視窗
    $('.modal5').after('<div class="modal_overlay"></div>'); //新增透明底
    $('.modal5').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal5').click(function(e) {
        $('.modal_overlay').fadeIn(100);
        $('.modal5').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal5').hide();
        $('.modal_overlay').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay').click(closeModal);
    $('.modal5 .close').click(closeModal);

});

$(function() {
    $('#modal6').hide();//先隱藏視窗
    $('.modal6').after('<div class="modal_overlay"></div>'); //新增透明底
    $('.modal6').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal6').click(function(e) {
        $('.modal_overlay').fadeIn(100);
        $('.modal6').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal6').hide();
        $('.modal_overlay').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay').click(closeModal);
    $('.modal6 .close').click(closeModal);

});

$(function() {
    $('#modal7').hide();//先隱藏視窗
    $('.modal7').after('<div class="modal_overlay"></div>'); //新增透明底
    $('.modal7').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal7').click(function(e) {
        $('.modal_overlay').fadeIn(100);
        $('.modal7').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal7').hide();
        $('.modal_overlay').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay').click(closeModal);
    $('.modal7 .close').click(closeModal);

});

$(function() {
    $('#modal8').hide();//先隱藏視窗
    $('.modal8').after('<div class="modal_overlay"></div>'); //新增透明底
    $('.modal8').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal8').click(function(e) {
        $('.modal_overlay').fadeIn(100);
        $('.modal8').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal8').hide();
        $('.modal_overlay').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay').click(closeModal);
    $('.modal8 .close').click(closeModal);

});

$(function() {
    $('#modal9').hide();//先隱藏視窗
    $('.modal9').after('<div class="modal_overlay"></div>'); //新增透明底
    $('.modal9').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal9').click(function(e) {
        $('.modal_overlay').fadeIn(100);
        $('.modal9').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal9').hide();
        $('.modal_overlay').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay').click(closeModal);
    $('.modal9 .close').click(closeModal);

});

$(function() {
    $('#modal10').hide();//先隱藏視窗
    $('.modal10').after('<div class="modal_overlay"></div>'); //新增透明底
    $('.modal10').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal10').click(function(e) {
        $('.modal_overlay').fadeIn(100);
        $('.modal10').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal10').hide();
        $('.modal_overlay').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay').click(closeModal);
    $('.modal10 .close').click(closeModal);

    $('#openModal11').click(function(){
        $('#modal10').hide();
    })


});


$(function() {
    $('#modal11').hide();//先隱藏視窗
    $('.modal11').after('<div class="modal_overlay"></div>'); //新增透明底
    $('.modal11').prepend('<button type="button" class="close">關閉</button>');  //新增關閉按鈕
    $('.modal_overlay').hide();  //隱藏透明底
    //按鈕動作
    $('#openModal11').click(function(e) {
        $('.modal_overlay').fadeIn(100);
        $('.modal11').fadeIn(100);
        $('body').addClass('noscroll');
        e.preventDefault();
    });
    //關閉function
    function closeModal(){
        $('#modal11').hide();
        $('.modal_overlay').hide();
        $('body').removeClass('noscroll');
    }
    //點選關閉按鈕及透明底都可關閉
    $('.modal_overlay').click(closeModal);
    $('.modal11 .close').click(closeModal);

});



//searchbox

$(document).ready(function(){
    $(".searchbox .btn-toggle").click(function(){
        $(".sform").slideToggle();
    });
});

$('.searchbox .btn-toggle').click(function(e) {
    $(this).parent('.container').slideToggle(function() {
        if ($(this).is(':visible')) {
            $('.searchbox .btn-toggle').html("收合/CLOSE");
            $('.searchbox .btn-toggle').attr('name', '收合選單/CLOSE');
        } else {
            $('.searchbox .btn-toggle').html("展開/OPEN");
            $('.searchbox .btn-toggle').attr('name', '展開選單/OPEN');
        }
    });
    $(this).stop(true, true).toggleClass('close');
});

//ON(OFF)
$(function(){
    $('.switch .on').click(function(){
        $('.switch .on').hide();
        $('.switch .off').show();
    })
    $('.switch .off').click(function(){
        $('.switch .off').hide();
        $('.switch .on').show();
    })
})

