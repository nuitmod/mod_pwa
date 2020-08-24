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

//ch_mode
  $('#night').hide();
  $('#mode').on('click', function(){
    $('#day').hide();
    $('#night').show();
    $('body').css({background: 'black'})
  })
  $('#night').on('click', function(){
    $('#day').show();
    $('#night').hide();
    $('body').css({background: '#f8f8ff'})
  })
//img
  $('.data').hide();
  $('img').on('mouseenter', function(e){
//   $('.data').html(e.target.id)
//  console.log(e.target.title);
  }).on('mouseleave', function(e){
    // $('.data').fadeOut(200)
//  console.log(this.id + " out");
  })


})
