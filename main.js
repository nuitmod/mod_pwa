$(function(){
/*
  $('#menu_u').hide();

$('#u').on('click', function(){
  $('#menu_u').fadeToggle(399);
})
*/
/*menu_1
  $('.mobile-tab').hide();
  $('.bar').on('click', function(){
    $('.mobile-tab').slideToggle(599)
  })
*/

//menu_2
  $('.mobile2').hide();
  $('.mobile2').on('click', function(){
    $('.mobile2').fadeToggle(200);
  });
  $('.bar_1').on('click', function(){
    $('.mobile2').fadeToggle(200);
  })
//btm_menu
/*
$('.audio_cont').hide();
  $('#hdr').on('click', function(){
    $('.audio_cont').fadeToggle(200)
  })
*/



$('#hdr').on('click', function(){
  $('.mobile').addClass('open')
})
$('.mobile').on('click', function(){
  $('.mobile').removeClass('open')
})

$('.list_dat').hide();
$('#b_main_on').on('click', e=>{
  $('.list_dat').show()
})
$('#b_main_off').on('click', e=>{
  $('.list_dat').hide()
})
$('#vis_on').on('click', function(){
  $('.audio_cont').fadeIn(290);
})
$('#vis_off').on('click', function(){
  $('.audio_cont').fadeOut(290);
})

//$('.mobile__items a').on('click', function(){
//  var id=e.target.id
//  var this_id= this.id
//  console.log(id); console.log(this_id);
//  alert(id)
//})

})
