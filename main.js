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
$('.audio_cont').hide();
  $('#hdr').on('click', function(){
    $('.audio_cont').fadeToggle(200)
  })

//ch_mode
  $('#night').hide();
  $('#mode').on('click', function(){
  //  $('#day').hide();
    $('#night').show();
    $('body').css({background: 'black'})
  })
  $('#night').on('click', function(){
  //  $('#day').show();
    $('#night').hide();
    $('body').css({background: '#f8f8ff'})
  })
//img
  $('#day').hide();

$('#b_main').on('click', function(){
  $('.item').fadeToggle(500)
})
//  $('.info').hide();
/*
  $('.list').on('mouseenter', function(e){
   $(this, '.info').fadeIn(200)
  console.log(e.target.id);
  }).on('mouseleave', function(e){
     $(this,'.info').fadeOut(200)
     console.log(e);
  console.log(e.target.id + " out");
  })

  $('.list').on('click', function(e){
   $(this, 'ul').toggle(200)
  console.log(e.target.id);
  console.log(this);
  })
*/

})
