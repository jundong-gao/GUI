/**
 * GUI  v1.0.0
 * (c) 2021 高俊东
 * @license MIT
 */
this.GUI=function(t){"use strict";var e={name:"button",props:{title:String,type:String},data:()=>({})};e.render=function(e,n,i,r,a,l){return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["gui-button",i.type])},t.toDisplayString(i.title),3)},e.__file="packages/button/index.vue";var n={name:"input",props:{type:String},data:()=>({})};const i=["type"];n.render=function(e,n,r,a,l,o){return t.openBlock(),t.createElementBlock("input",{type:r.type},null,8,i)},n.__file="packages/input/index.vue";let r=[e,n];r.forEach((t=>{t.install=e=>e.component(`gui-${t.name}`,t)}));return{...r,install:t=>{r.forEach((e=>{t.use(e)}))}}}(Vue);
