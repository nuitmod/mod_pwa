import {html, render} from 'https://unpkg.com/lit-html?module';

var name="Ruth"
//var data="great"

var my_name=()=>html`
  <div>
    <h6>hello ${name}</h6>
    <style>
    h6{
      color: purple;
    }
    </style>
  <div>`;






render(my_name(), document.getElementById("lit"))
