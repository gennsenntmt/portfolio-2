$(function(){
  $('.carousel').slick({
    autoplay: true,
  });

  $('.js-stop').on('click', function() {
    $('.carousel').slick('slickPause');
  });

  $('.js-play').on('click', function() {
    $('.carousel').slick('slickPlay');
  });

});