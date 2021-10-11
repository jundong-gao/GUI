/**
 * gui-plus-next  v0.1.6
 * (c) 2021 高俊东
 * @license MIT
 */
this.GUI=function(e){"use strict";var t={name:"Button",props:{type:String},data:()=>({})};t.render=function(t,i,l,o,n,a){return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["gui-button",l.type])},[e.renderSlot(t.$slots,"default")],2)},t.__file="packages/button/index.vue";var i={name:"Input",props:{type:String},data:()=>({})};const l=["type"];i.render=function(t,i,o,n,a,c){return e.openBlock(),e.createElementBlock("input",{type:o.type},null,8,l)},i.__file="packages/input/index.vue";var o={name:"Dialog",props:{title:String,visible:{type:Boolean,default:!1},width:{type:[Number,String],default:"300px"}},setup(t,i){const{emit:l}=i,o=e.computed((()=>({width:t.width}))),n=()=>l("update:visible",!1);return{dialogStyle:o,close:n,confirm:e=>{l("confirm",e),"cancel"==e&&n()}}}};const n={class:"gui-dialog-mask flex-jac"},a={class:"gui-dialog-title flex-jasc"},c={class:"gui-dialog-content"},r={class:"gui-dialog-footer flex-jasc-end"};o.render=function(t,i,l,o,s,d){return e.openBlock(),e.createBlock(e.Transition,{name:"fade-in"},{default:e.withCtx((()=>[e.withDirectives(e.createElementVNode("div",n,[e.createElementVNode("div",{class:"gui-dialog",style:e.normalizeStyle(o.dialogStyle)},[e.createElementVNode("div",a,[e.createTextVNode(e.toDisplayString(l.title)+" ",1),e.createElementVNode("i",{class:"gui-dialog-title-close gui-icon gui-close",onClick:i[0]||(i[0]=e.withModifiers(((...e)=>o.close&&o.close(...e)),["stop"]))})]),e.createElementVNode("div",c,[e.renderSlot(t.$slots,"default")]),e.createElementVNode("div",r,[e.renderSlot(t.$slots,"footer",{},(()=>[e.createElementVNode("div",{class:"gui-dialog-footer-btn confirm flex-jac",onClick:i[1]||(i[1]=e=>o.confirm("confirm"))},"确定"),e.createElementVNode("div",{class:"gui-dialog-footer-btn flex-jac",onClick:i[2]||(i[2]=e=>o.confirm("cancel"))},"取消")]))])],4)],512),[[e.vShow,l.visible]])])),_:3})},o.__file="packages/dialog/index.vue";let s=[t,i,o];s.forEach((e=>{e.install=t=>t.component(`Gui${e.name}`,e)}));return{...s,install:e=>{s.forEach((t=>{e.use(t)}))}}}(Vue);
