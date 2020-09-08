import {html, render} from 'https://unpkg.com/lit-html?module';
import imob from "./mobx_store.js";
import { autorun } from '../modules/mobx.module.js';

/*
var menu_1=()=>html`
<div class="bar">
  <nav id="desktop">
    <ul>
      <li><a href="main">main</a></li>
      <li><a href="void">void</a></li>
      <li><a href="rend">rend</a></li>
      <li><a href="https://yoox.com">yoox.com</a></li>
    </ul>
  </nav>
</div>
<div class="mobile-tab">
  <nav id="mobile">
  <ul>
    <li><a href="main">main</a></li>
    <li><a href="void">void</a></li>
    <li><a href="rend">rend</a></li>
    <li><a href="https://nuitmod.github.io/pre_iproj">pre_iproj</a></li>
    <li><a href="https://nuitmod.github.io/uwsgi_kali/i_uwsgi">i_uwsgi</a></li>
    <li><a href="https://nuitmod.github.io/nata_pwa_">nata</a></li>
    <li><a href="https://yoox.com">yoox.com</a></li>
  </ul>
</nav>
</div>
`;
*/
var item_menu=()=>html`
<nav class="mobile">
        <ul class="mobile__items">
        <li><a id="dress" href="#">dress</a></li>
        <li><a id="tops" href="#">tops</a></li>
        <li><a id="skirts" href="#">skirts</a></li>
        </ul>
      </nav>
`;

var menu_2=()=>html`
<div>
  <div id="burg_1">
    <span class="bar_1" id=""></span>
  </div>
  <div class="mob2">
    <nav class="mobile2">
      <ul class="mobile_items2">
          <li><a href="https://nuitmod.github.io/pre_iproj">pre_iproj</a></li>
          <li><a href="https://nuitmod.github.io/uwsgi_kali/i_uwsgi">i_uwsgi</a></li>
          <li><a href="https://nuitmod.github.io/nata_pwa_">nata</a></li>
          <li><a href="https://nuitmod.github.io/vi_pwa">vi_pwa</a></li>
          <li><a href="https://nuitmod.github.io/io_proj">io_proj</a></li>
          <li><a href="https://nuitmod.github.io/mod_i">mod_i</a></li>
          <li><a href="https://nuitmod.github.io/mod_pwa">in browser</a></li>
          <li><a href="https://yoox.com">yoox.com</a></li>
          <li>
            <a href="#"><img id="b_main_on" src="./icons/visibility-24px.svg"></a>
            <a href="#"><img id="b_main_off" src="./icons/visibility_off-24px.svg"></a>
          </li>
          <li>
            <a href="#"><img id="vis_on" src="./icons/check_box-24px.svg"></a>
            <a href="#"><img id="vis_off" src="./icons/poll-24px.svg"></a>
          </li>
      </ul>
    </nav>
  </div>
</div>`;

var btm_menu=()=>html`
  <div id='b_menu'>
  </div>`

//export default menu_2;
render(menu_2(), document.getElementById("menu_2_t"))
autorun(()=>render(item_menu(), document.getElementById("i_menu")))
