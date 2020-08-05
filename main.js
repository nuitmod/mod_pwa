//import  my_name  from "./app,js"

//render(my_name(), document.getElementById("lit"));

$(function(){

//menu_1
  $('.mobile-tab').hide();
  $('.bar').on('click', function(){
    $('.mobile-tab').slideToggle(399)
  })

//menu_2
  $('.mobile2').hide();
  $('.mobile2').on('click', function(){
    $('.mobile2').fadeToggle(200);
  });
  $('.bar_1').on('click', function(){
  $('.mobile2').fadeToggle(200);
  })
//btm_menu
$('.audio_cont').hide();
  $('#b_menu').on('click', function(){
    $('.audio_cont').slideToggle(200)
  })

})
