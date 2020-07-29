$(function(){
  $('.mobile-tab').hide();

  $('.bar').on('click', function(){
    $('.mobile-tab').slideToggle(399)
  })

  //menu2
  $('.mobile2').hide();
  $('.mobile2').on('click', function(){
    $('.mobile2').fadeToggle(200);
  });
  $('.bar_1').on('click', function(){
  $('.mobile2').fadeToggle(200);
  })
})
