import { html, render } from 'https://unpkg.com/htm/preact/index.mjs?module';
import { decorate, observable, computed, action, autorun, toJS } from '../modules/mobx.module.js';

var imob={
  inf: "ivvi",
/*  status: '',
  ch_store: ()=>{
    imob.inf="Ruth"; console.log(imob.inf);
  }, */
  data: [
    { name: 'Maud', color: 'black', category: 'top', active: true, id: 1, img_id: 'md_1'},
    { name: 'Ruth', color: 'black', category: 'mini dress', active: true, id: 2, img_id: 'md_2'},
    { name: 'Muit', color: 'black', category: 'd', active: false, id: 3, img_id: 'md_3'},
    { name: 'Iwie', color: 'black', category: 'dress', active: false, id: 4, img_id: 'md_4'},
    { name: 'Iiya', color: 'black', category: 'dress', active: false, id: 5, img_id: 'md_5'}
  ],
  set_active: w=>{
    var new_st=imob.data.forEach(wm=>wm.active=false)
    console.log(toJS(imob.data));
    console.log(w.id);
    w.active=true; //console.log(w.active);
  //  imob.data=new_st; console.log(new_st);
  },
  del_w: id=>{
    imob.data=imob.data.filter(wm=>{
      return wm.id != id
    });
    console.log(imob.data.map(i=>i.name));
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
