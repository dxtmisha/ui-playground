"use strict";const o=require("vue"),i=require("./string-BsLl7qfq.cjs"),t=require("./props-BwC7OlUE.cjs"),y=require("./C1Image.vue_vue_type_style_index_0_lang-DOVTcQoy.cjs"),c={animationType:["type1","type2"],rounded:["none","standard","sm","md","lg","full"],size:["xs","sm","md","lg"]},e={...t.defaultsIcon,animationType:"type1",rounded:"md",size:"xs"},_={...t.propsIcon,turn:Boolean,disabled:Boolean,hide:Boolean,animationType:{type:String,default:e==null?void 0:e.animationType},animationShow:Boolean,overlay:Boolean,dynamic:Boolean,start:Boolean,end:Boolean,high:Boolean,rounded:{type:String,default:e==null?void 0:e.rounded},size:{type:String,default:e==null?void 0:e.size}},g=o.defineComponent({name:"c1-icon",__name:"C1Icon",props:{..._},emits:["load"],setup(s,{expose:r,emit:d}){const p=d,n=s,m=o.computed(()=>({main:{"c1-icon":!0,"c1-icon--turn":n.turn,"c1-icon--disabled":n.disabled,"c1-icon--hide":n.hide,[`c1-icon--animationType--${n.animationType}`]:i.inArray(c.animationType,n.animationType),"c1-icon--animationShow":n.animationShow,"c1-icon--overlay":n.overlay,"c1-icon--dynamic":n.dynamic,"c1-icon--start":n.start,"c1-icon--end":n.end,"c1-icon--high":n.high,[`c1-icon--rounded--${n.rounded}`]:i.inArray(c.rounded,n.rounded),[`c1-icon--size--${n.size}`]:i.inArray(c.size,n.size)}})),l=o.computed(()=>({})),a=new t.IconDesign("c1.icon",n,{emits:p,components:{image:y._sfc_main},classes:m,styles:l}),u=a.render();return r(a.expose()),(h,B)=>(o.openBlock(),o.createBlock(o.unref(u)))}});exports._sfc_main=g;
