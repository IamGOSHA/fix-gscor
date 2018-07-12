(function($, undefined){

  $(window).on('load', function () {
  $('.popup-more').click(function(e){
    $(this).prop( 'disabled',true );
    var wCurrentSection = $('.section.active').height();
    $('.section:not(.section.active)').addClass('hid');
    $(this).parents().find('.win').removeClass('hid');
      $('.section.active').css('overflow','hidden' );
      $('.icon-angle-up').css('display', 'none');
      $('body,html').animate({scrollTop: wCurrentSection},700);
       $.fn.fullpage.destroy('all');
  });
      $('.close').click(function(){
          $('.popup-more').prop( 'disabled',false );
          $('.section').removeClass('hid');
          $('.icon-angle-up').css('display', 'block');
          $(this).parents().find('.win').addClass('hid');
          $('.section.active').css('overflow','hidden' );
          $.fn.fullpage.reBuild();
          fullPageIntroInit();
      });


    /*REMOVE ARROW*/
    $('.logo').css('color+','#fff');
    $('.arrow .icon-angle-up').css('opacity','0');
    /*TOP UP SECTION WHEN PRESSED ARROW */

    $(document).on('click', '.arrow', function(){
      $.fn.fullpage.moveTo('firstPage');
    });
    /* POPUP */
    // $('.popup-more,.popup__price,.popup__more').magnificPopup({
    //   callbacks: {
    //     open: function () {
    //       $('html,body').addClass('pop');
    //       $.fn.fullpage.setLockAnchors(true);
    //     },
    //     afterClose: function () {
    //       $('html,body').removeClass('pop');
    //       $.fn.fullpage.moveSectionUp()
    //     }
    //   }
    //
    // });

    /*CLOSE POPUP WHEN PRESSED BUTTON INSIDE POPUP*/
    // $('.close').click(function() {
    //   $.magnificPopup.close();
    // });
    /*TABS*/
    $('.tabs .tab-link').click(function(i){
      i.preventDefault();
      $('.tab-wrap').find('.tab-cont').addClass('hide');
      $('.tab-link').removeClass('tab-active');
      var id = $(this).attr('href');
      $(id).removeClass('hide');
      $(this).addClass('tab-active');
      return false;
    });

    /* FULLPAGE.JS*/
    fullPageIntroInit();
    function fullPageIntroInit() {
      $('#fullpage').fullpage({
        // menu: '#menu',
        anchors:['firstPage','secondPage','thirdPage','fourthPage'],
        navigation: true,
        navigationPosition: 'left',
        scrollOverflow: false,
        verticalCentered: false,
        navigationTooltips: ['название', 'название', 'название', 'название'],
        showActiveTooltip: false,
        slidesNavigation: false,
        lazyLoading: true,
        responsiveWidth: 768,
        afterRender: function(){
          if($(window).width()< 991){
            $('.logo a').css('color','#fff');
          }else{
            $('.logo a').css('color','#000');
          }
        },
        afterResize: function(){
          if($(window).width()< 991){
            $('.logo a').css('color','#fff');
          }else{
            $('.logo a').css('color','#000');
          }
        },
        onLeave:function(link,index){
          var wlarge = $(this).width();
          if(wlarge >= 768){
            $('.section .animate').addClass('hidden');
          }
          var ind = index;
          var evenid  = index%2;
          function changeColor(ind){
            if(ind > 2 ){
              $('.logo a').css('color','#fff');
              $('#fp-nav ul li a span, .fp-slidesNav ul li a span').css('background-color','rgba(0,0,0,.16)');
              $('#fp-nav ul li a.active span ,.fp-slidesNav ul li a.active span').css('background-color','#fff');

            }
            else if(ind <= 2 && $(window).width()< 991){
              $('.logo a').css('color','#fff');
            }
            else{
              $('.logo a').css('color','#000');
              $('#fp-nav ul li a span, .fp-slidesNav ul li a span').css('background-color','rgba(0,0,0,.16)');
              $('#fp-nav ul li a.active span ,.fp-slidesNav ul li a.active span').css('background-color','#000');
            }
          }
          function changeArrow(evenid,ind){
            if(evenid !=0 && ind != 1){
              $('.arrow .icon-angle-up').css('color','#fff');
              $('.arrow .icon-angle-up').css('opacity','1');
            }
            else if(ind == 1){
              $('.arrow .icon-angle-up').css('opacity','0');
            }
            else if(ind >= 2 && $(window).width()< 991){
              $('.arrow .icon-angle-up').css('color','#fff');
              $('.arrow .icon-angle-up').css('opacity','1');
            }
            else {
              $('.arrow .icon-angle-up').css('color','#000');
              $('.arrow .icon-angle-up').css('opacity','1');
            }
          }
          changeColor(ind);
          changeArrow(evenid,ind);
        },afterLoad:function(link,index){

          var ind = index;
          function changeColor(ind) {
            if (ind > 2) {
              $('.logo a').css('color', '#fff');
              $('#fp-nav ul li a span, .fp-slidesNav ul li a span').css('background-color', 'rgba(0,0,0,.16)');
              $('#fp-nav ul li a.active span ,.fp-slidesNav ul li a.active span').css('background-color', '#fff');

            }
            else if(ind <= 2 && $(window).width()< 991){
              $('.logo a').css('color','#fff');
            }
            else {
              $('.logo a').css('color', '#000');
              $('#fp-nav ul li a span, .fp-slidesNav ul li a span').css('background-color', 'rgba(0,0,0,.16)');
              $('#fp-nav ul li a.active span ,.fp-slidesNav ul li a.active span').css('background-color', '#000');
            }

          }
          if(index){
            changeColor(ind);
          }
          var w =$(this).width();
          if(w >=768){
            $('.animate').addClass('hidden');
            $('.section.fp-section').removeClass('animation');
            $('.section.fp-section.active').addClass('animation');
          }else if(w <= 768){
            $('.section.fp-section').removeClass('animation');
            $('.section.fp-section.active').removeClass('animation');
            $('.animate').removeClass('hidden');
          }


          return false;
        }
      });

    }
  });
function parallax(){
    $(window).scroll(function(){
        var windowScroll = $(this).scrollTop();
        var previewImage = $('.preview-imgBlock');
        previewImage.css({
          "transform": "translate3d(0px,"+ windowScroll / 8 +"px, 0px"
        })

        var itemWrapper1 = $('.wrapper-image-1');
        var itemWrapper2 = $('.wrapper-image-2');
        var startPos1 = itemWrapper1.offset().top;
        var startPos2 = itemWrapper2.offset().top;
        var targetHeight1 = itemWrapper1.height();
        var targetHeight2 = itemWrapper2.height();
        var endPos1 = startPos1 + targetHeight1;
        var endPos2 = startPos2 + targetHeight2;
        console.log(windowScroll , startPos1 , endPos1 ,itemWrapper1);
        if(windowScroll >= startPos1 && windowScroll < endPos1) {
            var itemOffset1 = (1.2 - (windowScroll - startPos1) / 1500 );
            itemWrapper1.children().css({
                "transform": "scale("+ itemOffset1 +") translate3d(0px,"+ (windowScroll - startPos1) / 3 +"px, 0px"
            })
        }
        if(windowScroll >= startPos2 && windowScroll < endPos2) {
            var itemOffset2 = (1.2 - (windowScroll - startPos2) / 2000 );
            itemWrapper2.children().css({
              "transform": "scale("+ itemOffset2 +") translate3d(0px,"+ (windowScroll - startPos2) / 6 +"px, 0px"
            })
        }
    });
}


  if($(window).width() < 767){
    parallax();
  }
  else{
      return false;
  }

  $(window).resize(function(){
      if($(window).width() < 767){
          parallax();
      }else{
        return false;
      }

  });


})(jQuery)