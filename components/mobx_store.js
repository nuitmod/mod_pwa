//import { html, render } from 'https://unpkg.com/htm/preact/index.mjs?module';
import { html, Component, render } from 'https://unpkg.com/htm/preact/index.mjs?module';
import { decorate, observable, computed, action, autorun, toJS } from '../modules/mobx.module.js';

var imob={
  inf: "ivvi",
/*  status: '',
  ch_store: ()=>{
    imob.inf="Ruth"; console.log(imob.inf);
  }, */
  data: [
    { name: 'Maud', color: 'black', category: 'top', active: true, id: 1, img_id: 'md_1'},
    { name: 'Ruth', color: 'black', category: 'mini dress', active: true, id: 2, img_id: 'md_2'}
  ],
  set_active: w=>{
    imob.data.forEach(wm=>{
      wm.active=false
      w.active=true;
    })
  //  console.log(toJS(imob.data));
  //  console.log(w.id);
  },
  del_w: id=>{
    imob.data=imob.data.filter(wm=>wm.id != id);
  //  console.log(imob.data.map(i=>i.name));
  }
}

decorate(imob, {
    inf: observable,
//    status: observable,
    data: observable,
    set_active: action,
//    ch_store: action,
    del_w: action
})


export default imob;
