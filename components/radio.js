import {html, render} from 'https://unpkg.com/lit-html?module';
import { autorun } from '../modules/mobx.module.js';

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
</div>`;

//export default radio;
//autorun(()=>render(radio(), document.getElementById("radio")))
