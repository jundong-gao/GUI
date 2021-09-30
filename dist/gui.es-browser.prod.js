/**
 * GUI  v1.0.0
 * (c) 2021 高俊东
 * @license MIT
 */
import{openBlock as t,createElementBlock as n,toDisplayString as e}from"vue";var r={name:"button",props:{title:String},data:()=>({})};r.render=function(r,o,u,i,p,a){return t(),n("button",null,e(u.title),1)},r.__file="src/components/button/index.vue";var o={name:"input",props:{type:String},data:()=>({})};const u=["type"];o.render=function(e,r,o,i,p,a){return t(),n("input",{type:o.type},null,8,u)},o.__file="src/components/input/index.vue";let i=[r,o];i.forEach((t=>{t.install=n=>n.component(`gui-${t.name}`,t)}));const p={...i,install:t=>{i.forEach((n=>{t.use(n)}))}};export default p;
