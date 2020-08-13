import {html, render} from 'https://unpkg.com/lit-html?module';
//import "https://unpkg.com/mobx@3.3.1/lib/mobx.umd.min.js";
import imob from "./mobx_store.js";
//import { observer } from './modules/mobx_preact.module.js';
import { autorun } from './modules/mobx.module.js';


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

var menu_2=()=>html`
<div>
  <div id="burg_1">
    <span class="bar_1" id=""></span>
  </div>
  <div class="mob2">
    <nav class="mobile2">
      <ul class="mobile_items2">
          <li><a href="/">main</a></li>
          <li><a href="/rii">rii</a></li>
          <li><a href="/mode">mode</a></li>
          <li><a href="https://nuitmod.github.io/pre_iproj">pre_iproj</a></li>
          <li><a href="https://nuitmod.github.io/uwsgi_kali/i_uwsgi">i_uwsgi</a></li>
          <li><a href="https://nuitmod.github.io/nata_pwa_">nata</a></li>
          <li><a href="https://yoox.com">yoox.com</a></li>
          <li>
            <a href="#home"><img id="b_main" src="./icons/visibility-24px.svg"></a>
            <a href="#rend"><img id="b_radio" src="./icons/visibility_off-24px.svg"></a>
          </li>
      </ul>
    </nav>
  </div>
</div>
`;

var main_temp=()=>html`
<div class="">
  <img id="day" src="./img/mode.jpg" alt="" height="122" width="52">
  <img id="night" src="./img/img_mod.png" alt="" height="65" width="122">
</div>
`;

var name="Ruth";

var hello_fn=()=>{
  alert(`hello ${imob.inf}`);
}

let change_st=e=>{
  imob.inf=name;
//  alert(imob.inf);
//   console.log(imob.inf);
}

var dat_temp=html`
  <button @click=${hello_fn}>click</button>
`;

var wm_list=imob.data.map(wm=>html`
    <div class="list" key=${wm.id}>
      <div>name: ${wm.name} </div>
      <div>job: ${wm.job} </div>
   </div>`
  )

var my_name=()=>html`
<div>
  <h6>hello ${name}</h6>
  <input placeholder="${imob.inf}" @input="${e=>imob.inf=e.target.value}"  />
  <h2>${imob.inf}</h2>
  ${dat_temp}
  <button value="change" @click=${change_st}>change</button>
  <button id="mode" value="night mode" >night mode</button>
  ${wm_list}

  <style>
  h6{
    font-size: 10px;
    color: purple;
  }
  button{
    color: #0f0f0f;
    height: 10px;
    background-color: black;
  }
  </style>
<div>`

var radio=()=>html`
<div class="audio_cont">
  <div id="audio">
    <h6>dubstep beyond</h6>
    <audio controls>
     <source src="https://ice3.somafm.com/dubstep-128-mp3" type="audio/mpeg">
    </audio>
    <h6>Пикник - Вампирские песни 1995</h6>
    <audio controls>
     <source src="./audio/Пикник - Вампирские песни 1995.mp3" type="audio/mpeg">
    </audio>
  </div>
</div>
`;

var btm_menu=()=>html`
  <div id='b_menu'>
  </div>
`;


render(menu_1(), document.getElementById("menu_1_t"))
render(menu_2(), document.getElementById("menu_2_t"))
render(main_temp(), document.getElementById("main_temp"))
autorun(()=>render(my_name(), document.getElementById("lit")))
render(radio(), document.getElementById("radio"))
render(btm_menu(), document.getElementById("btm_menu"))
