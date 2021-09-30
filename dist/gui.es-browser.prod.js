/**
 * gui-plus-next  v0.1.0
 * (c) 2021 高俊东
 * @license MIT
 */
import{openBlock as t,createElementBlock as e,normalizeClass as n,toDisplayString as i}from"vue";var r={name:"button",props:{title:String,type:String},data:()=>({})};r.render=function(r,a,p,u,o,l){return t(),e("div",{class:n(["gui-button",p.type])},i(p.title),3)},r.__file="packages/button/index.vue";var a={name:"input",props:{type:String},data:()=>({})};const p=["type"];a.render=function(n,i,r,a,u,o){return t(),e("input",{type:r.type},null,8,p)},a.__file="packages/input/index.vue";let u=[r,a];u.forEach((t=>{t.install=e=>e.component(`gui-${t.name}`,t)}));const o={...u,install:t=>{u.forEach((e=>{t.use(e)}))}};export default o;
