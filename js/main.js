jQuery(document).ready(function($) {
  
  $('[data-fav]').on('click', function(){
    $(this).toggleClass('red');
  })
  $('[data-color]').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
  })
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
  //adaptive
  if ($(window).width() < 994) {
    closeBurger ();
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