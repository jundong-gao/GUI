/**
 * GUI  v1.0.0
 * (c) 2021 高俊东
 * @license MIT
 */
"use strict";var e=require("vue"),t={name:"button",props:{title:String,type:String},data:()=>({})};t.render=function(t,n,r,i,a,o){return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["gui-button",r.type])},e.toDisplayString(r.title),3)},t.__file="packages/button/index.vue";var n={name:"input",props:{type:String},data:()=>({})};const r=["type"];n.render=function(t,n,i,a,o,l){return e.openBlock(),e.createElementBlock("input",{type:i.type},null,8,r)},n.__file="packages/input/index.vue";let i=[t,n];i.forEach((e=>{e.install=t=>t.component(`gui-${e.name}`,e)}));const a={...i,install:e=>{i.forEach((t=>{e.use(t)}))}};module.exports=a;
