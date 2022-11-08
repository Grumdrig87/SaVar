jQuery(document).ready(function($) {
  
  $('[data-search]').on('click', function(){
    $(this).parent().find('.header__popsearch').toggleClass('open').slideToggle(300);
  })
  $('[data-close]').on('click', function(){
    $(this).closest('.header__popsearch').toggleClass('open').slideToggle(300);
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
            breakpoint: 993,
            settings: {
              slidesToShow: 2,
            }
        },{
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              variableWidth: true,
            }
        }, ]
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
  }

  //faq
  if (jQuery('[data-faq]').length > 0) {
    $('[data-faq]').click(function() {
        $(this).toggleClass('open');
        $(this).find('p').slideToggle(300);
    })
}
  // select
  function select (data,set,dropclass) {
    if (jQuery(data).length > 0) {
      jQuery(data).select2({
        minimumResultsForSearch: Infinity,
        width: set,
        dropdownAutoWidth: true,
        dropdownCssClass: dropclass
      });
    }
  }
  select ('[data-brand]','100%',"main-drop");
  select ('[data-model]','100%',"main-drop");
  select ('[data-engine]','100%',"main-drop");
  select ('[data-selects]','100%',"wheel-drop");

  
})