/**
 * GUI  v1.0.0
 * (c) 2021 高俊东
 * @license MIT
 */
"use strict";var e=require("vue"),t={name:"button",props:{title:String},data:()=>({})};t.render=function(t,n,o,r,l,i){return e.openBlock(),e.createElementBlock("button",null,e.toDisplayString(o.title),1)},t.__file="src/components/button/index.vue";var n={name:"input",props:{type:String},data:()=>({})};const o=["type"];n.render=function(t,n,r,l,i,u){return e.openBlock(),e.createElementBlock("input",{type:r.type},null,8,o)},n.__file="src/components/input/index.vue";let r=[t,n];r.forEach((e=>{e.install=t=>t.component(`gui-${e.name}`,e)}));const l={...r,install:e=>{r.forEach((t=>{e.use(t)}))}};module.exports=l;
