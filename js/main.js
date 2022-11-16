jQuery(document).ready(function($) {
  
  $('[data-search]').on('click', function(){
    $(this).parent().find('.header__popsearch').toggleClass('open').slideToggle(300);
  })
  $('[data-close]').on('click', function(){
    $(this).closest('.header__popsearch').toggleClass('open').slideToggle(300);
  })
  $('[data-cart]').on('click', function(){
    $(this).closest('.header__btn-wrap').find('[data-cartopen]').toggleClass('open');
  })
  if (jQuery('[data-color]').length > 0) {
    $('[data-color]').click(function() {
      $(this).addClass('active').siblings().removeClass('active');
    })
  }
  if (jQuery('[data-fav]').length > 0) {
    $('[data-fav]').on('click', function(){
      $(this).toggleClass('red');
    })
  }
  if (jQuery('[data-catitem]').length > 0) {
    $('[data-catitem]').mouseenter(function(){
      $(this).addClass('open');
      $(this).find('.category__catalog-bottom').slideDown(0);
    })
    $('[data-catitem]').mouseleave(function(){
      $(this).find('.category__catalog-bottom').slideUp(0);
      $(this).removeClass('open');
    })
  }
  if (jQuery('[data-cat]').length > 0) {
    $('[data-cat]').on('click', function(){
      $('[data-cat]').parent().removeClass('active')
      $(this).parent().addClass('active');
    })
  }
  if (jQuery('[data-sort]').length > 0) {
    $('[data-sort]').on('click', function(){
      $('[data-sort]').removeClass('active')
      $(this).addClass('active');
    })
  }
  if (jQuery('[data-size]').length > 0) {
    $('[data-size]').on('click', function(){
      $('[data-size]').removeClass('active')
      $(this).addClass('active');
    })
  }
  // burger
  $('[data-burger]').click(function() {
      $('html').toggleClass("open");
      $(this).toggleClass("open");
      $('[data-nav]').toggleClass("open");
      $('body').toggleClass('open');
  });
  //plus minus
  (function quantityProducts() {
    var $quantityArrowMinus = $("[data-minus]");
    var $quantityArrowPlus = $("[data-plus]");
    
 
    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);
 
    function quantityMinus() {
      var $quantityNum = $(this).parent().find("[data-quantity]");
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }
 
    function quantityPlus() {
      var $quantityNum = $(this).parent().find("[data-quantity]");
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();
  
  //miss click burger
  function closeBurger () {
    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $("[data-blkscr]"); // тут указываем ID элемента
      if (div.is(e.target)) { // и не по его дочерним элементам
        $('body').removeClass('open');
        $('html').removeClass("open");
        $('[data-burger]').removeClass("open");
        $('[data-nav]').removeClass("open");
      }
    });
  };
  closeBurger();
  //slider
  if (jQuery('[data-best]').length > 0) {
    $('[data-best]').slick({
        dots: false,
        speed: 300,
        slidesToShow: 4,
        infinite: true,
        responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },{
            breakpoint: 993,
            settings: {
              slidesToShow: 2,
            }
        },{
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
        }, ]
    });
}
if (jQuery('[data-preview]').length > 0) {
  $('[data-preview]').slick({
      dots: false,
      speed: 300,
      slidesToShow: 3,
      infinite: false,
      vertical: true,
      nextArrow: '[data-fotoarr]',
      asNavFor: '[data-product]',
      focusOnSelect: true
  });
}
if (jQuery('[data-product]').length > 0) {
  $('[data-product]').slick({
      dots: false,
      speed: 300,
      slidesToShow: 1,
      arrows: false,
      asNavFor: '[data-preview]'
  });
}
if (jQuery('[data-review]').length > 0) {
  $('[data-review]').slick({
      dots: false,
      speed: 300,
      slidesToShow: 1,
      infinite: true,
      nextArrow: '[data-revNext]',
      responsive: [{
          breakpoint: 993,
          settings: {
            slidesToShow: 1,
          }
      },{
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
      }, ]
  });
}
  //adaptive
  if ($(window).width() < 994) {
    closeBurger ();
    $('[data-nav] ul').before('<div class="mobile-menu"></div>');
    $('[data-gender]').appendTo('.mobile-menu');
    if (jQuery('[data-donateslider]').length > 0) {
      $('[data-donateslider]').slick({
          dots: false,
          speed: 300,
          slidesToShow: 2,
          infinite: true,
          responsive: [{
              breakpoint: 993,
              settings: {
                slidesToShow: 2,
              }
          },{
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
          }, ]
      });
    }
  }
  if ($(window).width() < 577) {
    $('.footer__title').on('click', function(){
      $(this).next('ul').slideToggle(300);
    })
  }

  //faq
  if (jQuery('[data-faq]').length > 0) {
    $('[data-faq]').click(function() {
        $(this).toggleClass('open');
        $(this).find('p').slideToggle(300);
    })
}
    
})