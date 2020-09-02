import {html, render} from 'https://unpkg.com/lit-html?module';
import imob from "./mobx_store.js";
import { autorun, toJS } from '../modules/mobx.module.js';

var name="Ruth";

let change_st=e=>{
  imob.inf=name;
}
/*
var show_item=e=>{
  console.log(e.target.id);
  //render(big_item, document.getElementById("big_it"))
}

var filter_1=wm=>{
  return wm.active!=false;
}

var term=imob.data.map(w=>toJS(w)); console.log(term);
var add_to_bug=e=>{
  console.log(e.target.id);
  console.log(term)
}

var show_big=()=>{
  autorun(()=>render(big_item, document.getElementById("big_it")))
}

var big_item=imob.data.filter(wm=>wm.active!=false).map(wm=>html`
  <div class="big_i">
    <img id=${wm.img_id} src="./img/${wm.img_id}.JPG"  height="109" width="72" />
    <div>
      <li>name: ${wm.name} </li>
      <li>color: ${wm.color} </li>
      <li>category: ${wm.category} </li>
      <li>active: ${wm.active} </li>
      <button id=${wm.img_id} @click=${add_to_bug}>add</button>
    </div>
  </div>`)

*/
var wm_list=imob.data.filter(wm=>wm.id!=4).map(wm=>html`
    <div class="list" key=${wm.id}>
      <img id=${wm.img_id} src="./img/${wm.img_id}.JPG"  height="89" width="52" />
      <div>
        <li>name: ${wm.name} </li>
        <li>color: ${wm.color} </li>
        <li>category: ${wm.category} </li>
        <button id=${wm.img_id} class="show" value="show" @click=${()=>imob.set_active(wm)}>show</button>
      </div>
   </div>`)

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
//autorun(()=>render(big_item, document.getElementById("big_it")))
//export default autorun(i_search);
