"use strict";const n=require("vue"),t=require("./string-BsLl7qfq.cjs"),s=require("./props-DPpgUt2M.cjs"),i={indeterminate:["type1","type2","type3"],position:["top","bottom"]},r={...s.defaultsProgress,linear:!0,indeterminate:"type3",position:"top"},d={...s.propsProgress,linear:{type:Boolean,default:r==null?void 0:r.linear},circular:Boolean,indeterminate:{type:String,default:r==null?void 0:r.indeterminate},position:{type:String,default:r==null?void 0:r.position},dense:Boolean,inverse:Boolean},y=n.defineComponent({__name:"C2Progress",props:{...d},setup(p,{expose:c,emit:a}){const l=a,e=p,m=n.computed(()=>({main:{"c2-progress":!0,"c2-progress--linear":e.linear&&!e.circular,"c2-progress--circular":e.circular,[`c2-progress--indeterminate--${e.indeterminate}`]:t.inArray(i.indeterminate,e.indeterminate),[`c2-progress--position--${e.position}`]:t.inArray(i.position,e.position),"c2-progress--dense":e.dense,"c2-progress--inverse":e.inverse}})),u=n.computed(()=>({})),o=new s.ProgressDesign("c2.progress",e,{emits:l,classes:m,styles:u}),g=o.render();return c(o.expose()),(_,B)=>(n.openBlock(),n.createBlock(n.unref(g)))}});exports._sfc_main=y;
