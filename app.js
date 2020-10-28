//import {html, render} from 'https://unpkg.com/lit-html?module';
//import imob from "./components/mobx_store.js";
//import { observer } from './modules/mobx_preact.module.js';
//import { autorun } from './modules/mobx.module.js';
//import menu_2 from "./components/menu.js";
//import radio from "./components/radio.js";
//import i_search from "./components/items.js";

/*
var App=()=>html`
<div>
 ${menu_2}
 ${i_search}
</div>`

//render(menu_1(), document.getElementById("menu_1_t"))
//render(menu_2(), document.getElementById("menu_2_t"))
//render(main_temp(), document.getElementById("main_temp"))
//autorun(()=>render(i_search(), document.getElementById("lit")))
//render(radio(), document.getElementById("radio"))
//render(btm_menu(), document.getElementById("btm_menu"))
autorun(()=>render(App(), document.getElementById("app")))
*/
$(function(){

//menu_2
  $('.mobile2').hide();
  $('.bar_1').on('click', function(){
  //  console.log('bar1');
    $('.mobile2').fadeToggle(200);
  })
  $('.mobile2').on('click', function(){
    $('.mobile2').fadeToggle(200);
  });

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

})
