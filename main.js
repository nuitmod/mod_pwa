$(function(){

//  $('.inf').text('main js on');
/*menu_1
  $('.mobile-tab').hide();
  $('.bar').on('click', function(){
    $('.mobile-tab').slideToggle(599)
  })
*/

//btm_menu
/*
$('.audio_cont').hide();
  $('#hdr').on('click', function(){
    $('.audio_cont').fadeToggle(200)
  })
*/
$('#menu_u').hide();
$('#u').on('click', function(){
  $('#menu_u').fadeToggle(399);
//    $('body').css({fontSize: "9px"})
})

$('#main_mod').on('click', function(){
  $('body').css({background: '#f8f8ff'})
})
  $('#dark').on('click', function(){
  $('body').css({background: 'black'})
})

$('#hdr').on('click', function(){
  $('.mobile').addClass('open')
})
$('.mobile').on('click', function(){
  $('.mobile').removeClass('open')
})

$('#vid_fo').hide();
$('#vid').on('click', function(){
  $('#vid_fo').fadeToggle(200);
})

$('.audio_cont').on('click', function(){
  $('.wd').addClass('open_wd');
//  $('.wd').removeClass('open_wd');
})
$('.wd').on('click', function(){
  $('.wd').removeClass('open_wd');
//  $('.wd').addClass('open_wd');
})


})
