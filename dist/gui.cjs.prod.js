/**
 * gui-plus-next  v0.1.3
 * (c) 2021 高俊东
 * @license MIT
 */
"use strict";var e=require("vue"),t={name:"Button",props:{type:String},data:()=>({})};t.render=function(t,n,r,o,a,l){return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["gui-button",r.type])},[e.renderSlot(t.$slots,"default")],2)},t.__file="packages/button/index.vue";var n={name:"Input",props:{type:String},data:()=>({})};const r=["type"];n.render=function(t,n,o,a,l,u){return e.openBlock(),e.createElementBlock("input",{type:o.type},null,8,r)},n.__file="packages/input/index.vue";let o=[t,n];o.forEach((e=>{e.install=t=>t.component(`Gui${e.name}`,e)}));const a={...o,install:e=>{o.forEach((t=>{e.use(t)}))}};module.exports=a;
