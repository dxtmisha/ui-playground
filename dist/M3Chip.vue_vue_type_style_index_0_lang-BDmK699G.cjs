"use strict";const n=require("vue"),s=require("./string-BsLl7qfq.cjs"),o=require("./ButtonDesign-PTATO8gR.cjs"),B=require("./M3Icon.vue_vue_type_style_index_0_lang-CSQqBYOS.cjs"),y=require("./M3Progress.vue_vue_type_style_index_0_lang-CENZAdts.cjs"),p=require("./useEnabled-CUfeeGsf.cjs");class v extends o.ButtonDesign{}const i={tag:"span"},f={...p.usePropsLabel,...o.usePropsIconTrailing,...o.usePropsProgress,...p.usePropsEnabled,...o.usePropsEventClick,tag:{type:String,default:i==null?void 0:i.tag},disabled:Boolean,selected:Boolean,loading:Boolean,readonly:Boolean},a={adaptive:["icon","sm","md"],height:["sm","md","lg"],palette:["primary","secondary","tertiary","red","green","error","neutral","neutralVariant"]},t={...i,height:"md",outlined:!0,input:!0},b={...f,focus:Boolean,disabled:Boolean,selected:Boolean,loading:Boolean,readonly:Boolean,adaptive:String,height:{type:String,default:t==null?void 0:t.height},outlined:{type:Boolean,default:t==null?void 0:t.outlined},elevated:Boolean,input:{type:Boolean,default:t==null?void 0:t.input},assist:Boolean,filter:Boolean,suggestion:Boolean,avatar:Boolean,dragged:Boolean,palette:String},P=n.defineComponent({name:"M3Chip",__name:"M3Chip",props:{...b},emits:["click"],setup(r,{expose:c,emit:d}){const u=d,e=r,g=n.computed(()=>({main:{"m3-chip":!0,"m3-chip--focus":e.focus,"m3-chip--disabled":e.disabled,"m3-chip--selected":e.selected,"m3-chip--loading":e.loading,"m3-chip--readonly":e.readonly,[`m3-chip--adaptive--${e.adaptive}`]:s.inArray(a.adaptive,e.adaptive),[`m3-chip--height--${e.height}`]:s.inArray(a.height,e.height),"m3-chip--outlined":e.outlined&&!e.elevated,"m3-chip--elevated":e.elevated,"m3-chip--input":e.input&&!e.assist&&!e.filter&&!e.suggestion,"m3-chip--assist":e.assist,"m3-chip--filter":e.filter,"m3-chip--suggestion":e.suggestion,"m3-chip--avatar":e.avatar,"m3-chip--dragged":e.dragged,[`m3-palette--${e.palette}`]:s.inArray(a.palette,e.palette)}})),h=n.computed(()=>({})),l=new v("m3.chip",e,{emits:u,components:{icon:B._sfc_main,progress:y._sfc_main},classes:g,styles:h}),m=l.render();return c(l.expose()),(_,k)=>(n.openBlock(),n.createBlock(n.unref(m),null,{default:n.withCtx(()=>[n.renderSlot(_.$slots,"default")]),_:3}))}});exports._sfc_main=P;