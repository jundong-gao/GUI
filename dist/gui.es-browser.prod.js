/**
 * gui-plus-next  v0.1.3
 * (c) 2021 高俊东
 * @license MIT
 */
import{openBlock as t,createElementBlock as e,normalizeClass as n,renderSlot as a}from"vue";var r={name:"Button",props:{type:String},data:()=>({})};r.render=function(r,u,p,o,i,l){return t(),e("div",{class:n(["gui-button",p.type])},[a(r.$slots,"default")],2)},r.__file="packages/button/index.vue";var u={name:"Input",props:{type:String},data:()=>({})};const p=["type"];u.render=function(n,a,r,u,o,i){return t(),e("input",{type:r.type},null,8,p)},u.__file="packages/input/index.vue";let o=[r,u];o.forEach((t=>{t.install=e=>e.component(`Gui${t.name}`,t)}));const i={...o,install:t=>{o.forEach((e=>{t.use(e)}))}};export default i;
