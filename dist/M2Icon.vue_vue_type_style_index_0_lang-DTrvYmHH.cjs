"use strict";const e=require("vue"),o=require("./string-BsLl7qfq.cjs"),a=require("./props-BwC7OlUE.cjs"),y=require("./M2Image.vue_vue_type_style_index_0_lang--2VgVX1Z.cjs"),i={animationType:["type1","type2"],rounded:["none","standard","sm","md","lg","xl","full"],size:["xs","sm","md","lg","xl"]},t={...a.defaultsIcon,animationType:"type1"},_={...a.propsIcon,turn:Boolean,disabled:Boolean,hide:Boolean,animationType:{type:String,default:t==null?void 0:t.animationType},animationShow:Boolean,overlay:Boolean,dynamic:Boolean,start:Boolean,end:Boolean,high:Boolean,rounded:String,size:String},g=e.defineComponent({name:"M2Icon",__name:"M2Icon",props:{..._},emits:["load"],setup(r,{expose:c,emit:m}){const d=m,n=r,p=e.computed(()=>({main:{"m2-icon":!0,"m2-icon--turn":n.turn,"m2-icon--disabled":n.disabled,"m2-icon--hide":n.hide,[`m2-icon--animationType--${n.animationType}`]:o.inArray(i.animationType,n.animationType),"m2-icon--animationShow":n.animationShow,"m2-icon--overlay":n.overlay,"m2-icon--dynamic":n.dynamic,"m2-icon--start":n.start,"m2-icon--end":n.end,"m2-icon--high":n.high,[`m2-icon--rounded--${n.rounded}`]:o.inArray(i.rounded,n.rounded),[`m2-icon--size--${n.size}`]:o.inArray(i.size,n.size)}})),l=e.computed(()=>({})),s=new a.IconDesign("m2.icon",n,{emits:d,components:{image:y._sfc_main},classes:p,styles:l}),u=s.render();return c(s.expose()),(h,B)=>(e.openBlock(),e.createBlock(e.unref(u)))}});exports._sfc_main=g;
