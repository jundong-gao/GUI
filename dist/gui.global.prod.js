/**
 * gui-plus-next  v0.1.3
 * (c) 2021 高俊东
 * @license MIT
 */
this.GUI=function(e){"use strict";var t={name:"Button",props:{type:String},data:()=>({})};t.render=function(t,n,r,a,o,l){return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["gui-button",r.type])},[e.renderSlot(t.$slots,"default")],2)},t.__file="packages/button/index.vue";var n={name:"Input",props:{type:String},data:()=>({})};const r=["type"];n.render=function(t,n,a,o,l,u){return e.openBlock(),e.createElementBlock("input",{type:a.type},null,8,r)},n.__file="packages/input/index.vue";let a=[t,n];a.forEach((e=>{e.install=t=>t.component(`Gui${e.name}`,e)}));return{...a,install:e=>{a.forEach((t=>{e.use(t)}))}}}(Vue);
