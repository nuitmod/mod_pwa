$(function(){

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
//ch_mode
  $('#night').hide();
  $('#mode').on('click', function(){
  //  $('#day').hide();
  //  $('#night').show();
    $('body').css({background: 'black'})
  })
  $('#b_main_off').on('click', function(){
  //  $('#day').show();
  //  $('#night').hide();
    $('body').css({background: '#f8f8ff'})
  })
//img
//  $('#day').hide();
/*
$('#b_main').on('click', function(){
  $('.item').fadeToggle(500)
})
//  $('.info').hide();
*/

$('#hdr').on('click', function(){
  $('.mobile').addClass('open')
})
$('.mobile').on('click', function(){
  $('.mobile').removeClass('open')
})

$('.big_i').hide();
$('.show').on('click', e=>{
  console.log(e.target.id);
  $('.big_i').show()
})

$('.mobile__items a').on('click', e=>{
  var id=e.target.id
  var this_id= this.id
  console.log(id); console.log(this_id);
  alert(id)
})

})
