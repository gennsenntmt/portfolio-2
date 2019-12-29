$(function(){
  let tabs = $(".nav-tabs li");
  $('.nav-tabs li').click(function(){
    $('.active').removeClass("active");
    $(this).addClass("active");
    $(this).children('a').addClass("active");
    $(".active in").removeClass("active in");
    const index = tabs.index(this);
    $(".tab-pane").removeClass("active in").fadeOut(1).eq(index).fadeIn(600).addClass("active in");
    // $(".tab-pane fade").addClass("hide-1").eq(index).fadeIn().removeClass("hide-1");
    // $(".border-1").removeClass("line-up-1").eq(index).addClass("line-up-1");
    // $(".border-1").addClass("line-down-1").eq(index).removeClass("line-down-1");
    // $(".main__top__search").removeClass("result-up-1").eq(index).fadeIn().addClass("result-up-1");
    // $(".main__top__search").addClass("result-down-1").eq(index).fadeIn().removeClass("result-down-1");
    // $('.show-1').show();
    // $('.hide-1').hide();
    // $('.line-up-1').show();
    // $(".line-down-1").hide();
    // $('.result-up-1').show();
    // $(".result-down-1").hide();
  })
  // tabs.click(tabSwitch); 
});

$(function()  {
  $(window).load(function(){
    $('.hide-1').hide()
  })
});

$(function()  {
  $(window).load(function(){
    $('.line-down-1').hide()
  })
});

$(function()  {
  $(window).load(function(){
    $('.result-down-1').hide()
  })
});