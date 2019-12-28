

$(function(){
    $('.dropdown-menu').hide();
  })

  $(function(){
    $('.dropdown').hover(function(){
      $(this).children('.dropdown-menu').toggle();
    })
  })