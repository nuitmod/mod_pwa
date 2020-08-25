import {html, render} from 'https://unpkg.com/lit-html?module';
import imob from "./mobx_store.js";
import { autorun } from '../modules/mobx.module.js';

var name="Ruth";

let change_st=e=>{
  imob.inf=name;
}

var wm_list=imob.data.map(wm=>html`
    <div class="list" key=${wm.id}>
      <img id=${wm.img_id} src="./img/${wm.img_id}.JPG"  height="89" width="52" />
      <div>
        <li>name: ${wm.name} </li>
        <li>color: ${wm.color} </li>
        <li>category: ${wm.category} </li>
        <button id="show" value="show" @click=${change_st}>show</button>
      </div>
   </div>`
  )

var i_search=()=>html`
<div>
  <input placeholder="${imob.inf}" @input="${e=>imob.inf=e.target.value}"  />
  <button value="change" @click=${change_st}>change</button>
  <button id="mode" value="night mode" >night mode</button>
  <h4>${imob.inf}</h4>
  <br>
  ${wm_list}
<div>`



autorun(()=>render(i_search(), document.getElementById("lit")))
//export default autorun(i_search);
