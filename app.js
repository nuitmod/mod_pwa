import {html, render} from 'https://unpkg.com/lit-html?module';

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
  <img src="./img/mode.jpg" alt="" height="122" width="52">
</div>
`;

var name="Ruth";
var hello_fn=()=>{
  alert("hello fn data");
}

let change_st=()=>{
//  name="Maud"
  alert(name);
}

var dat_temp=html`
  <button @click=${hello_fn}>click</button>
`;

var my_name=()=>html`
<div>
  <h6>hello ${name}</h6>
  ${dat_temp}
  <button @click=${change_st}>change</button>

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
<div>`;

var radio=()=>html`
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
`;


render(menu_1(), document.getElementById("menu_1_t"))
render(menu_2(), document.getElementById("menu_2_t"))
render(main_temp(), document.getElementById("main_temp"))
render(my_name(), document.getElementById("lit"))
render(radio(), document.getElementById("radio"))
