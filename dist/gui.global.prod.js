/**
 * GUI  v1.0.0
 * (c) 2021 高俊东
 * @license MIT
 */
this.GUI=function(t){"use strict";var n={name:"button",props:{title:String},data:()=>({})};n.render=function(n,e,o,r,i,l){return t.openBlock(),t.createElementBlock("button",null,t.toDisplayString(o.title),1)},n.__file="src/components/button/index.vue";var e={name:"input",props:{type:String},data:()=>({})};const o=["type"];e.render=function(n,e,r,i,l,u){return t.openBlock(),t.createElementBlock("input",{type:r.type},null,8,o)},e.__file="src/components/input/index.vue";let r=[n,e];r.forEach((t=>{t.install=n=>n.component(`gui-${t.name}`,t)}));return{...r,install:t=>{r.forEach((n=>{t.use(n)}))}}}(Vue);
